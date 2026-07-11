import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

const APP_VERSION = "v158-profile-source-of-truth";

type ProfileRow = {
  username: string;
  display_name: string;
  avatar_url: string | null;
  avatar_path: string | null;
  updated_at: string;
};

function json(status: number, payload: Record<string, unknown>) {
  return NextResponse.json(payload, { status });
}

function normalizeRpcResult(data: unknown) {
  if (!data || typeof data !== "object") return {} as { ok?: boolean; message?: string };
  return data as { ok?: boolean; message?: string };
}

async function authenticate(username: string, passwordHash: string) {
  const admin = getSupabaseAdminClient();
  if (!admin) throw new Error("SUPABASE_SERVICE_ROLE_KEY が未設定です。");
  const login = await admin.rpc("vm_login_cloud_account", {
    p_username: username,
    p_password_hash: passwordHash,
  });
  if (login.error) throw new Error(login.error.message);
  const result = normalizeRpcResult(login.data);
  if (result.ok === false) throw new Error(result.message || "再ログインが必要です。");
  return admin;
}

async function getLegacyProfile(admin: Awaited<ReturnType<typeof authenticate>>, username: string, passwordHash: string) {
  const fetched = await admin.rpc("vm_fetch_progress_backup", {
    p_username: username,
    p_password_hash: passwordHash,
  });
  if (fetched.error) return null;
  const row = Array.isArray(fetched.data) ? fetched.data[0] : fetched.data;
  const progress = (row?.progress_json || {}) as Record<string, unknown>;
  return {
    displayName: typeof progress.displayName === "string" ? progress.displayName : username,
    avatarUrl: typeof progress.avatarUrl === "string" ? progress.avatarUrl : "",
    avatarPath: typeof progress.avatarPath === "string" ? progress.avatarPath : "",
  };
}

function profilePayload(row: ProfileRow) {
  return {
    username: row.username,
    displayName: row.display_name || row.username,
    avatarUrl: row.avatar_url || "",
    avatarPath: row.avatar_path || "",
    updatedAt: row.updated_at,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const action = String(body?.action || "get");
    const username = String(body?.username || "").trim();
    const passwordHash = String(body?.passwordHash || "");
    if (!username || !passwordHash) return json(400, { ok: false, message: "ログイン情報が不足しています。" });

    const admin = await authenticate(username, passwordHash);

    if (action === "get") {
      const selected = await admin.from("user_profiles").select("username,display_name,avatar_url,avatar_path,updated_at").eq("username", username).maybeSingle();
      if (selected.error) throw new Error(`プロフィール専用テーブルを取得できません: ${selected.error.message}`);
      if (selected.data) return json(200, { ok: true, profile: profilePayload(selected.data as ProfileRow), source: "profile-table" });

      const legacy = await getLegacyProfile(admin, username, passwordHash);
      const now = new Date().toISOString();
      const inserted = await admin.from("user_profiles").upsert({
        username,
        display_name: legacy?.displayName || username,
        avatar_url: legacy?.avatarUrl || null,
        avatar_path: legacy?.avatarPath || null,
        updated_at: now,
        app_version: APP_VERSION,
      }, { onConflict: "username" }).select("username,display_name,avatar_url,avatar_path,updated_at").single();
      if (inserted.error) throw new Error(`旧プロフィールの移行に失敗しました: ${inserted.error.message}`);
      return json(200, { ok: true, profile: profilePayload(inserted.data as ProfileRow), source: "legacy-migrated" });
    }

    if (action === "save-name") {
      const displayName = String(body?.displayName || "").trim();
      if (!displayName) return json(400, { ok: false, message: "ニックネームを入力してください。" });
      if (displayName.length > 40) return json(400, { ok: false, message: "ニックネームは40文字以内にしてください。" });
      const now = new Date().toISOString();
      const saved = await admin.from("user_profiles").upsert({
        username,
        display_name: displayName,
        updated_at: now,
        app_version: APP_VERSION,
      }, { onConflict: "username" }).select("username,display_name,avatar_url,avatar_path,updated_at").single();
      if (saved.error) throw new Error(`ニックネーム保存に失敗しました: ${saved.error.message}`);
      const verified = await admin.from("user_profiles").select("username,display_name,avatar_url,avatar_path,updated_at").eq("username", username).single();
      if (verified.error || verified.data?.display_name !== displayName) throw new Error("保存後の再確認でニックネームが一致しませんでした。");
      return json(200, { ok: true, profile: profilePayload(verified.data as ProfileRow), verified: true, message: "ニックネームをクラウド保存し、再確認しました。" });
    }

    return json(400, { ok: false, message: "未対応のプロフィール操作です。" });
  } catch (error) {
    return json(500, { ok: false, message: error instanceof Error ? error.message : "プロフィール処理に失敗しました。" });
  }
}
