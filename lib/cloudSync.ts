import { supabase } from "@/lib/supabase";
import {
  applyClientStudySettingsSnapshot,
  ensureProgress,
  getClientStudySettingsSnapshot,
  restorePremiumEntitlement,
  saveProgress,
  setCurrentUser,
  type Account,
  type ClientStudySettingsSnapshot,
  type UserProgress,
} from "@/lib/account";

export const CLOUD_SYNC_EVENT = "verbmaster:cloud-sync-status";

export type CloudSyncEventDetail = {
  phase: "syncing" | "saved" | "restored" | "error" | "idle";
  reason?: string;
  message: string;
  updatedAt: string;
  status?: CloudSyncStatus;
};

export type CloudSyncStatus = {
  configured: boolean;
  profile: "idle" | "saved" | "error";
  avatar: "idle" | "saved" | "error" | "local-only";
  premium: "idle" | "saved" | "error";
  stats: "idle" | "saved" | "error";
  message: string;
  updatedAt?: string;
};

export type CloudBackupSummary = {
  xp: number;
  level: number;
  studied: number;
  totalStudied: number;
  tests: number;
  weak: number;
  reviews: number;
  savedPhrases: number;
  score: number;
};

export type CloudBackupComparison = {
  ok: boolean;
  message: string;
  recommendation: "restore_remote" | "save_local" | "same" | "no_remote" | "unknown";
  local: CloudBackupSummary;
  remote: CloudBackupSummary | null;
  remoteUpdatedAt?: string;
};

const CLOUD_CREDENTIAL_KEY = "verbMaster.cloudCredentials";
const CLOUD_SQL_HINT = "Supabase SQLが未実行、または保存用RPCが見つかりません。supabase/V120_CLOUD_SAVE_FOUNDATION.sql をSupabase SQL Editorで実行してください。";

type CloudCredentialMap = Record<string, { passwordHash: string; savedAt: string }>;
type BackupRow = {
  progress_json?: Partial<UserProgress> | null;
  settings_json?: ClientStudySettingsSnapshot | null;
  updated_at?: string | null;
};

function nowText() {
  return new Date().toISOString();
}

function baseStatus(message: string): CloudSyncStatus {
  return {
    configured: Boolean(supabase),
    profile: "idle",
    avatar: "idle",
    premium: "idle",
    stats: "idle",
    message,
    updatedAt: nowText(),
  };
}

function credentialMap(): CloudCredentialMap {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(CLOUD_CREDENTIAL_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveCloudCredential(username: string, passwordHash: string) {
  if (typeof window === "undefined") return;
  const map = credentialMap();
  map[username] = { passwordHash, savedAt: nowText() };
  localStorage.setItem(CLOUD_CREDENTIAL_KEY, JSON.stringify(map));
}

function getCloudPasswordHash(username: string) {
  return credentialMap()[username]?.passwordHash || "";
}

export function hasCloudSession(username?: string | null) {
  if (!username) return false;
  return Boolean(getCloudPasswordHash(username));
}

function missingCredentialStatus(): CloudSyncStatus {
  return {
    configured: Boolean(supabase),
    profile: "idle",
    avatar: "idle",
    premium: "idle",
    stats: "idle",
    message: "端末内には保存済みです。クラウド保存には一度ログインし直してください。",
    updatedAt: nowText(),
  };
}

function sqlErrorStatus(message?: string): CloudSyncStatus {
  return {
    configured: Boolean(supabase),
    profile: "error",
    avatar: "error",
    premium: "error",
    stats: "error",
    message: message ? `${message} / ${CLOUD_SQL_HINT}` : CLOUD_SQL_HINT,
    updatedAt: nowText(),
  };
}

export function getCloudReadiness(): CloudSyncStatus {
  if (!supabase) {
    return baseStatus("Supabase環境変数が未設定です。VercelにNEXT_PUBLIC_SUPABASE_URLとNEXT_PUBLIC_SUPABASE_ANON_KEYを設定してください。");
  }
  return baseStatus("Supabase連携は有効です。保存用SQLが入っていればクラウド保存できます。");
}

function asRpcResult(data: unknown): { ok?: boolean; message?: string; username?: string; role?: string } {
  if (!data || typeof data !== "object") return {};
  return data as { ok?: boolean; message?: string; username?: string; role?: string };
}

function normalizeSupabaseError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error || "Supabaseエラー");
  if (message.includes("Could not find the function") || message.includes("schema cache") || message.includes("does not exist")) {
    return CLOUD_SQL_HINT;
  }
  return message;
}

async function hashPassword(password: string) {
  const text = `verb-master-v63:${password}`;
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function progressScore(progress: Partial<UserProgress> | null | undefined) {
  if (!progress) return 0;
  return (Number(progress.xp || 0) * 2) +
    (Number(progress.totalStudied || 0) * 20) +
    ((progress.studiedVerbIds || []).length * 100) +
    (Number(progress.testCorrect || 0) * 10) +
    (Number(progress.testWrong || 0) * 6) +
    ((progress.weakItems || []).length * 5) +
    (Object.keys(progress.reviewItems || {}).length * 8) +
    ((progress.savedPhrases || []).length * 8);
}

function summarizeProgress(progress: Partial<UserProgress> | null | undefined): CloudBackupSummary {
  return {
    xp: Number(progress?.xp || 0),
    level: Number(progress?.level || 1),
    studied: (progress?.studiedVerbIds || []).length,
    totalStudied: Number(progress?.totalStudied || 0),
    tests: Number(progress?.testCorrect || 0) + Number(progress?.testWrong || 0),
    weak: (progress?.weakItems || []).length,
    reviews: Object.keys(progress?.reviewItems || {}).length,
    savedPhrases: (progress?.savedPhrases || []).length,
    score: progressScore(progress),
  };
}

function mergeRemoteLearningWithLocalProfile(local: UserProgress, remote?: Partial<UserProgress> | null): UserProgress {
  if (!remote) return local;
  const remoteProgress = remote as UserProgress;
  const localHasCustomName = Boolean(local.displayName && local.displayName !== local.username);
  return {
    ...local,
    ...remoteProgress,
    username: local.username,
    xp: Math.max(Number(local.xp || 0), Number(remoteProgress.xp || 0)),
    level: Math.max(Number(local.level || 1), Number(remoteProgress.level || 1)),
    currentStreak: Math.max(Number(local.currentStreak || 0), Number(remoteProgress.currentStreak || 0)),
    longestStreak: Math.max(Number(local.longestStreak || 0), Number(remoteProgress.longestStreak || 0)),
    totalStudied: Math.max(Number(local.totalStudied || 0), Number(remoteProgress.totalStudied || 0)),
    currentRound: Math.max(Number(local.currentRound || 1), Number(remoteProgress.currentRound || 1)),
    studiedVerbIds: Array.from(new Set([...(remoteProgress.studiedVerbIds || []), ...(local.studiedVerbIds || [])])),
    weakItems: Array.from(new Set([...(remoteProgress.weakItems || []), ...(local.weakItems || [])])),
    reviewItems: { ...(remoteProgress.reviewItems || {}), ...(local.reviewItems || {}) },
    savedPhrases: (local.savedPhrases?.length ? local.savedPhrases : remoteProgress.savedPhrases) || [],
    testSessions: { ...(remoteProgress.testSessions || {}), ...(local.testSessions || {}) },
    testItemStats: { ...(remoteProgress.testItemStats || {}), ...(local.testItemStats || {}) },
    weeklyStats: { ...(remoteProgress.weeklyStats || {}), ...(local.weeklyStats || {}) },
    displayName: localHasCustomName ? local.displayName : (remoteProgress.displayName || local.displayName || local.username),
    avatarDataUrl: local.avatarDataUrl || remoteProgress.avatarDataUrl || "",
    notificationsEnabled: typeof local.notificationsEnabled === "boolean" ? local.notificationsEnabled : remoteProgress.notificationsEnabled,
    voiceSettings: local.voiceSettings || remoteProgress.voiceSettings,
    targetDate: local.targetDate || remoteProgress.targetDate,
    targetStartDate: local.targetStartDate || remoteProgress.targetStartDate,
    studyDays: local.studyDays || remoteProgress.studyDays,
    studyPace: local.studyPace || remoteProgress.studyPace,
    unlockedVerbCount: Math.max(Number(local.unlockedVerbCount || 0), Number(remoteProgress.unlockedVerbCount || 0)),
    purchaseTotalYen: Math.max(Number(local.purchaseTotalYen || 0), Number(remoteProgress.purchaseTotalYen || 0)),
    premiumSource: local.premiumSource || remoteProgress.premiumSource,
    premiumUpdatedAt: local.premiumUpdatedAt || remoteProgress.premiumUpdatedAt,
  };
}

function prepareBackupProgress(progress: UserProgress, existing?: Partial<UserProgress> | null): UserProgress {
  const currentName = progress.displayName && progress.displayName !== progress.username ? progress.displayName : "";
  return {
    ...progress,
    displayName: currentName || existing?.displayName || progress.username,
    avatarDataUrl: progress.avatarDataUrl || existing?.avatarDataUrl || "",
    notificationsEnabled: typeof progress.notificationsEnabled === "boolean" ? progress.notificationsEnabled : existing?.notificationsEnabled ?? true,
    voiceSettings: progress.voiceSettings || existing?.voiceSettings || { gender: "female", lang: "en-US" },
    targetDate: progress.targetDate || existing?.targetDate,
    targetStartDate: progress.targetStartDate || existing?.targetStartDate,
    studyDays: progress.studyDays || existing?.studyDays,
    studyPace: progress.studyPace || existing?.studyPace,
  };
}

async function rpcFetchBackup(username: string, passwordHash: string): Promise<BackupRow | null> {
  if (!supabase) return null;
  const { data, error } = await supabase.rpc("vm_fetch_progress_backup", { p_username: username, p_password_hash: passwordHash });
  if (error) throw new Error(normalizeSupabaseError(error));
  const row = Array.isArray(data) ? data[0] : data;
  return (row || null) as BackupRow | null;
}

async function rpcUpsertBackup(progress: UserProgress, passwordHash: string) {
  if (!supabase) return;
  const settings = getClientStudySettingsSnapshot(progress);
  const { data, error } = await supabase.rpc("vm_upsert_progress_backup", {
    p_username: progress.username,
    p_password_hash: passwordHash,
    p_progress_json: progress,
    p_settings_json: settings,
    p_app_version: "v120-save-foundation",
  });
  if (error) throw new Error(normalizeSupabaseError(error));
  const result = asRpcResult(data);
  if (result.ok === false) throw new Error(result.message || "クラウドバックアップ保存に失敗しました。");
}

export async function registerCloudAccount(username: string, password: string) {
  if (!supabase) return { ok: false, message: "Supabase未設定のため端末内登録のみになります。" };
  const name = username.trim();
  if (!name) return { ok: false, message: "ユーザー名を入力してください。" };
  if (password.length < 4) return { ok: false, message: "パスワードは4文字以上にしてください。" };
  try {
    const passwordHash = await hashPassword(password);
    const { data, error } = await supabase.rpc("vm_register_cloud_account", { p_username: name, p_password_hash: passwordHash });
    if (error) throw new Error(normalizeSupabaseError(error));
    const result = asRpcResult(data);
    if (result.ok === false) return { ok: false, message: result.message || "クラウド登録に失敗しました。" };
    saveCloudCredential(name, passwordHash);
    setCurrentUser(name);
    const progress = ensureProgress(name);
    await syncCurrentUserToSupabase(progress, { allowEmptyOverwrite: true });
    return { ok: true, message: result.message || "クラウドアカウントを作成しました。" };
  } catch (error) {
    return { ok: false, message: error instanceof Error ? error.message : "クラウド登録に失敗しました。" };
  }
}

export async function loginCloudAccount(username: string, password: string) {
  if (!supabase) return { ok: false, message: "Supabase未設定のため端末内ログインのみになります。" };
  const name = username.trim();
  try {
    const passwordHash = await hashPassword(password);
    const { data, error } = await supabase.rpc("vm_login_cloud_account", { p_username: name, p_password_hash: passwordHash });
    if (error) throw new Error(normalizeSupabaseError(error));
    const result = asRpcResult(data);
    if (result.ok === false) return { ok: false, message: result.message || "ユーザー名またはパスワードが違います。" };
    saveCloudCredential(name, passwordHash);
    setCurrentUser(name);
    await restoreLearningDataFromSupabase(name).catch(() => undefined);
    return {
      ok: true,
      message: result.message || "クラウドログインしました。",
      account: { username: name, password: "", role: result.role === "admin" ? "admin" : "user", createdAt: nowText() } as Account,
    };
  } catch (error) {
    return { ok: false, message: error instanceof Error ? error.message : "クラウドログインに失敗しました。" };
  }
}

export async function syncCurrentUserToSupabase(progress: UserProgress, options: { allowEmptyOverwrite?: boolean } = {}): Promise<CloudSyncStatus> {
  if (!supabase) return getCloudReadiness();
  const passwordHash = getCloudPasswordHash(progress.username);
  if (!passwordHash) return missingCredentialStatus();

  const status: CloudSyncStatus = {
    configured: true,
    profile: "idle",
    avatar: progress.avatarDataUrl ? "saved" : "idle",
    premium: "idle",
    stats: "idle",
    message: "クラウド保存中です...",
    updatedAt: nowText(),
  };

  try {
    const existingBackup = await rpcFetchBackup(progress.username, passwordHash);
    const localScore = progressScore(progress);
    const remoteScore = progressScore(existingBackup?.progress_json);
    let safeProgress = progress;

    if (!options.allowEmptyOverwrite && remoteScore > 0 && localScore <= 0) {
      safeProgress = mergeRemoteLearningWithLocalProfile(progress, existingBackup?.progress_json);
      saveProgress(safeProgress);
    }

    const backupProgress = prepareBackupProgress(safeProgress, existingBackup?.progress_json);
    await rpcUpsertBackup(backupProgress, passwordHash);
    status.stats = "saved";
    status.profile = "saved";
    status.avatar = backupProgress.avatarDataUrl ? "saved" : "idle";
    status.premium = "saved";
    status.message = "プロフィール画像・目標日・学習記録をクラウドバックアップへ保存しました。";
    status.updatedAt = nowText();
    return status;
  } catch (error) {
    return sqlErrorStatus(error instanceof Error ? error.message : "Supabase保存に失敗しました。");
  }
}

export async function restoreLearningDataFromSupabase(username: string): Promise<{ ok: boolean; changed: boolean; message: string; status: CloudSyncStatus }> {
  if (!supabase) {
    const readiness = getCloudReadiness();
    return { ok: false, changed: false, message: readiness.message, status: readiness };
  }
  const passwordHash = getCloudPasswordHash(username);
  if (!passwordHash) {
    const status = missingCredentialStatus();
    return { ok: false, changed: false, message: status.message, status };
  }

  const status: CloudSyncStatus = {
    configured: true,
    profile: "idle",
    avatar: "idle",
    premium: "idle",
    stats: "idle",
    message: "クラウド復元を確認中です...",
    updatedAt: nowText(),
  };

  try {
    const backup = await rpcFetchBackup(username, passwordHash);
    const local = ensureProgress(username);
    if (!backup?.progress_json) {
      status.message = "クラウドバックアップはまだありません。端末データを保存できます。";
      return { ok: true, changed: false, message: status.message, status };
    }

    const remote = backup.progress_json as UserProgress;
    const merged = mergeRemoteLearningWithLocalProfile(local, remote);
    if (backup.settings_json) applyClientStudySettingsSnapshot(backup.settings_json, merged);
    applyClientStudySettingsSnapshot(remote as ClientStudySettingsSnapshot, merged);
    saveProgress(merged);

    status.stats = "saved";
    status.profile = "saved";
    status.avatar = merged.avatarDataUrl ? "saved" : "idle";
    status.premium = "saved";
    status.message = "クラウドバックアップからプロフィール画像・目標日・学習記録を復元しました。";
    status.updatedAt = backup.updated_at || nowText();
    return { ok: true, changed: true, message: status.message, status };
  } catch (error) {
    const err = sqlErrorStatus(error instanceof Error ? error.message : "Supabase復元に失敗しました。");
    return { ok: false, changed: false, message: err.message, status: err };
  }
}

export async function getCloudBackupComparison(username: string): Promise<CloudBackupComparison> {
  const localProgress = ensureProgress(username);
  const local = summarizeProgress(localProgress);
  if (!supabase) {
    return { ok: false, message: "Supabase未設定のため、端末データのみ確認できます。", recommendation: "unknown", local, remote: null };
  }
  const passwordHash = getCloudPasswordHash(username);
  if (!passwordHash) {
    return { ok: false, message: "クラウド比較には再ログインが必要です。端末データは保存されています。", recommendation: "unknown", local, remote: null };
  }
  try {
    const backup = await rpcFetchBackup(username, passwordHash);
    if (!backup?.progress_json) {
      return { ok: true, message: "クラウドバックアップはまだありません。端末データを保存できます。", recommendation: local.score > 0 ? "save_local" : "no_remote", local, remote: null };
    }
    const remote = summarizeProgress(backup.progress_json);
    let recommendation: CloudBackupComparison["recommendation"] = "same";
    let message = "端末データとクラウドデータは大きな差がありません。";
    if (remote.score > local.score) {
      recommendation = "restore_remote";
      message = "クラウド側により多くの学習データがあります。先に復元するのがおすすめです。";
    } else if (local.score > remote.score) {
      recommendation = "save_local";
      message = "端末側に新しい学習データがあります。クラウド保存がおすすめです。";
    }
    return { ok: true, message, recommendation, local, remote, remoteUpdatedAt: backup.updated_at || "" };
  } catch (error) {
    return { ok: false, message: error instanceof Error ? error.message : "クラウド比較に失敗しました。", recommendation: "unknown", local, remote: null };
  }
}

export async function verifyCloudBackup(username: string) {
  if (!supabase) return { ok: false, message: "Supabase未設定です。", updatedAt: "", summary: null as null | { xp: number; studied: number; savedPhrases: number; tests: number } };
  const passwordHash = getCloudPasswordHash(username);
  if (!passwordHash) return { ok: false, message: "クラウド確認には再ログインが必要です。", updatedAt: "", summary: null };
  try {
    const backup = await rpcFetchBackup(username, passwordHash);
    if (!backup?.progress_json) return { ok: false, message: "クラウドバックアップがまだ見つかりません。先に保存してください。", updatedAt: "", summary: null };
    const progress = backup.progress_json as Partial<UserProgress>;
    const summary = {
      xp: Number(progress.xp || 0),
      studied: (progress.studiedVerbIds || []).length,
      savedPhrases: (progress.savedPhrases || []).length,
      tests: Number(progress.testCorrect || 0) + Number(progress.testWrong || 0),
    };
    return { ok: true, message: "クラウドバックアップを確認できました。", updatedAt: backup.updated_at || "", summary };
  } catch (error) {
    return { ok: false, message: error instanceof Error ? error.message : "クラウドバックアップ確認に失敗しました。", updatedAt: "", summary: null };
  }
}

export async function uploadAvatarToSupabase(username: string, avatarDataUrl?: string) {
  // Ver.120: 画像はStorageではなく user_progress_backups.progress_json.avatarDataUrl を本命にする。
  // Storage bucket未作成が原因でアプリ全体の保存が失敗しないようにする。
  if (!avatarDataUrl) return { ok: false, url: "", message: "画像が選択されていません。" };
  return { ok: true, url: avatarDataUrl, message: `${username} の画像はクラウドバックアップへ保存対象です。` };
}

export async function restorePremiumFromSupabase(username: string) {
  if (!supabase) return { ok: false, message: "Supabase環境変数が未設定です。Vercelの環境変数を確認してください。" };
  const passwordHash = getCloudPasswordHash(username);
  if (!passwordHash) return { ok: false, message: "購入状態の復元には再ログインが必要です。" };
  try {
    const backup = await rpcFetchBackup(username, passwordHash);
    const progress = backup?.progress_json as Partial<UserProgress> | undefined;
    if (!progress) return { ok: false, message: "クラウドバックアップが見つかりませんでした。" };
    restorePremiumEntitlement(
      username,
      Number(progress.unlockedVerbCount || 0),
      Number(progress.purchaseTotalYen || 0),
      "クラウドバックアップから購入状態を復元しました。",
    );
    return { ok: true, message: `購入状態を復元しました：${Number(progress.unlockedVerbCount || 0)}動詞解放`, updatedAt: backup?.updated_at || nowText() };
  } catch (error) {
    return { ok: false, message: error instanceof Error ? error.message : "購入状態の復元に失敗しました。" };
  }
}
