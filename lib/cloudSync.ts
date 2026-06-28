import { supabase } from "@/lib/supabase";
import {
  FREE_VERB_LIMIT,
  TOTAL_VERB_TARGET,
  restorePremiumEntitlement,
  type UserProgress,
  type VoiceSettings,
} from "@/lib/account";

export type CloudSyncStatus = {
  configured: boolean;
  profile: "idle" | "saved" | "error";
  avatar: "idle" | "saved" | "error" | "local-only";
  premium: "idle" | "saved" | "error";
  stats: "idle" | "saved" | "error";
  message: string;
  updatedAt?: string;
};

const PROFILE_BUCKET = "profile-images";

function nowText() {
  return new Date().toISOString();
}

function safeName(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9_-]/g, "-") || "user";
}

function baseStatus(message: string): CloudSyncStatus {
  return {
    configured: Boolean(supabase),
    profile: "idle",
    avatar: "idle",
    premium: "idle",
    stats: "idle",
    message,
  };
}

export function getCloudReadiness(): CloudSyncStatus {
  if (!supabase) {
    return baseStatus(
      "Supabase環境変数が未設定です。NEXT_PUBLIC_SUPABASE_URL と NEXT_PUBLIC_SUPABASE_ANON_KEY をVercelに設定すると保存できます。",
    );
  }
  return baseStatus("Supabase連携の準備ができています。保存ボタンでクラウドへ反映できます。");
}

function dataUrlToBlob(dataUrl: string) {
  const [meta, body] = dataUrl.split(",");
  const contentType = meta.match(/data:(.*?);base64/)?.[1] || "image/jpeg";
  const binary = atob(body || "");
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return { blob: new Blob([bytes], { type: contentType }), contentType };
}

export async function uploadAvatarToSupabase(username: string, avatarDataUrl?: string) {
  if (!supabase || !avatarDataUrl) return { ok: false, url: "", message: "画像はローカル保存のみです。" };
  try {
    const { blob, contentType } = dataUrlToBlob(avatarDataUrl);
    const ext = contentType.includes("png") ? "png" : "jpg";
    const path = `${safeName(username)}/avatar.${ext}`;
    const { error } = await supabase.storage.from(PROFILE_BUCKET).upload(path, blob, {
      cacheControl: "3600",
      contentType,
      upsert: true,
    });
    if (error) throw error;
    const { data } = supabase.storage.from(PROFILE_BUCKET).getPublicUrl(path);
    return { ok: true, url: data.publicUrl, message: "プロフィール画像をSupabase Storageへ保存しました。" };
  } catch (error) {
    return {
      ok: false,
      url: "",
      message: error instanceof Error ? error.message : "画像保存に失敗しました。",
    };
  }
}

function premiumPlan(progress: UserProgress) {
  const unlocked = Math.max(FREE_VERB_LIMIT, progress.unlockedVerbCount || 0);
  if (unlocked >= TOTAL_VERB_TARGET) return "all_access";
  if (unlocked >= 90) return "premium_90";
  if (unlocked >= 60) return "premium_60";
  if (unlocked >= 30) return "premium_30";
  return "free";
}

export async function syncCurrentUserToSupabase(progress: UserProgress): Promise<CloudSyncStatus> {
  const readiness = getCloudReadiness();
  if (!supabase) return readiness;

  const status: CloudSyncStatus = {
    configured: true,
    profile: "idle",
    avatar: progress.avatarDataUrl ? "local-only" : "idle",
    premium: "idle",
    stats: "idle",
    message: "Supabaseへ保存中です...",
  };

  try {
    let avatarUrl = "";
    if (progress.avatarDataUrl) {
      const avatar = await uploadAvatarToSupabase(progress.username, progress.avatarDataUrl);
      status.avatar = avatar.ok ? "saved" : "error";
      avatarUrl = avatar.url;
    }

    const { error: profileError } = await supabase.from("profiles").upsert(
      {
        username: progress.username,
        display_name: progress.displayName || progress.username,
        avatar_url: avatarUrl || null,
        notifications_enabled: progress.notificationsEnabled ?? true,
        role: "user",
        last_login_at: progress.lastLoginAt || null,
        updated_at: nowText(),
      },
      { onConflict: "username" },
    );
    if (profileError) throw profileError;
    status.profile = "saved";

    const { error: statsError } = await supabase.from("user_stats").upsert(
      {
        username: progress.username,
        xp: progress.xp || 0,
        level: progress.level || 1,
        current_streak: progress.currentStreak || 0,
        longest_streak: progress.longestStreak || 0,
        total_studied: progress.totalStudied || 0,
        current_round: progress.currentRound || 1,
        studied_verb_ids: progress.studiedVerbIds || [],
        test_correct: progress.testCorrect || 0,
        test_wrong: progress.testWrong || 0,
        weak_items: progress.weakItems || [],
        saved_phrase_count: progress.savedPhrases?.length || 0,
        review_item_count: Object.keys(progress.reviewItems || {}).length,
        updated_at: nowText(),
      },
      { onConflict: "username" },
    );
    if (statsError) throw statsError;
    status.stats = "saved";

    const { error: premiumError } = await supabase.from("premium_entitlements").upsert(
      {
        username: progress.username,
        plan: premiumPlan(progress),
        unlocked_verb_count: progress.unlockedVerbCount || 0,
        purchase_total_yen: progress.purchaseTotalYen || 0,
        lyrics_english_access: (progress.unlockedVerbCount || 0) >= TOTAL_VERB_TARGET,
        source: progress.premiumSource || "checkout_ready",
        updated_at: nowText(),
      },
      { onConflict: "username" },
    );
    if (premiumError) throw premiumError;
    status.premium = "saved";

    const voice: VoiceSettings = progress.voiceSettings || { gender: "female", lang: "en-US" };
    await supabase.from("learning_settings").upsert(
      {
        username: progress.username,
        voice_gender: voice.gender,
        voice_lang: voice.lang,
        notifications_enabled: progress.notificationsEnabled ?? true,
        updated_at: nowText(),
      },
      { onConflict: "username" },
    );

    status.message = "プロフィール・学習記録・Premium状態をSupabaseへ保存しました。";
    status.updatedAt = nowText();
    return status;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Supabase保存に失敗しました。";
    return { ...status, message };
  }
}


export async function restorePremiumFromSupabase(username: string) {
  if (!supabase) {
    return { ok: false, message: "Supabase環境変数が未設定です。Vercelの環境変数を確認してください。" };
  }

  try {
    const { data, error } = await supabase
      .from("premium_entitlements")
      .select("unlocked_verb_count, purchase_total_yen, plan, updated_at")
      .eq("username", username)
      .maybeSingle();

    if (error) throw error;
    if (!data) {
      return { ok: false, message: "Supabaseに購入状態が見つかりませんでした。" };
    }

    restorePremiumEntitlement(
      username,
      Number(data.unlocked_verb_count || 0),
      Number(data.purchase_total_yen || 0),
      `Supabaseから購入状態を復元しました。plan=${data.plan || "unknown"}`
    );

    return {
      ok: true,
      message: `購入状態を復元しました：${Number(data.unlocked_verb_count || 0)}動詞解放`,
      updatedAt: data.updated_at || nowText(),
    };
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : "購入状態の復元に失敗しました。",
    };
  }
}
