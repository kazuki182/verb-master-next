import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getSupabaseAdminClient } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

const AVATAR_BUCKET = "avatars";
const MAX_AVATAR_BYTES = 1024 * 1024;
const APP_VERSION = "v158-profile-source-of-truth";

function json(status: number, payload: Record<string, unknown>) {
  return NextResponse.json(payload, { status });
}

function normalizeRpcResult(data: unknown) {
  if (!data || typeof data !== "object") return {} as { ok?: boolean; message?: string };
  return data as { ok?: boolean; message?: string };
}

function parseAvatarDataUrl(dataUrl: string) {
  const match = dataUrl.match(/^data:(image\/(?:jpeg|jpg|png|webp));base64,(.+)$/);
  if (!match) throw new Error("対応していない画像形式です。JPG / PNG / WebP を選択してください。");
  const mime = match[1] === "image/jpg" ? "image/jpeg" : match[1];
  const buffer = Buffer.from(match[2], "base64");
  if (buffer.length <= 0) throw new Error("画像データが空です。");
  if (buffer.length > MAX_AVATAR_BYTES) throw new Error("画像が大きすぎます。別の画像を選ぶか、少し小さくしてください。");
  const ext = mime === "image/png" ? "png" : mime === "image/webp" ? "webp" : "jpg";
  return { mime, buffer, ext };
}

function userStorageKey(username: string) {
  return crypto.createHash("sha256").update(`verb-master-avatar:${username}`).digest("hex").slice(0, 32);
}

async function safeRemoveAvatar(admin: NonNullable<ReturnType<typeof getSupabaseAdminClient>>, path?: string) {
  if (!path || path.includes("..") || path.startsWith("/")) return false;
  const { error } = await admin.storage.from(AVATAR_BUCKET).remove([path]);
  return !error;
}

export async function POST(request: NextRequest) {
  const admin = getSupabaseAdminClient();
  if (!admin) {
    return json(500, {
      ok: false,
      message: "画像Storage保存にはVercel環境変数 SUPABASE_SERVICE_ROLE_KEY が必要です。前の画像は消していません。",
    });
  }

  try {
    const body = await request.json();
    const username = String(body?.username || "").trim();
    const passwordHash = String(body?.passwordHash || "");
    const avatarDataUrl = String(body?.avatarDataUrl || "");

    if (!username || !passwordHash || !avatarDataUrl) {
      return json(400, { ok: false, message: "画像保存に必要なログイン情報または画像が不足しています。" });
    }

    const login = await admin.rpc("vm_login_cloud_account", {
      p_username: username,
      p_password_hash: passwordHash,
    });
    if (login.error) throw new Error(login.error.message);
    const loginResult = normalizeRpcResult(login.data);
    if (loginResult.ok === false) {
      return json(401, { ok: false, message: loginResult.message || "再ログインが必要です。前の画像は消していません。" });
    }

    const fetched = await admin.rpc("vm_fetch_progress_backup", {
      p_username: username,
      p_password_hash: passwordHash,
    });
    if (fetched.error) throw new Error(fetched.error.message);
    const row = Array.isArray(fetched.data) ? fetched.data[0] : fetched.data;
    const existingProgress = (row?.progress_json || {}) as Record<string, unknown>;
    const existingSettings = (row?.settings_json || {}) as Record<string, unknown>;
    const oldAvatarPath = typeof existingProgress.avatarPath === "string" ? existingProgress.avatarPath : "";

    const { mime, buffer, ext } = parseAvatarDataUrl(avatarDataUrl);
    const now = new Date().toISOString();
    const random = crypto.randomBytes(6).toString("hex");
    const path = `${userStorageKey(username)}/avatar-${Date.now()}-${random}.${ext}`;

    const uploaded = await admin.storage.from(AVATAR_BUCKET).upload(path, buffer, {
      contentType: mime,
      cacheControl: "3600",
      upsert: false,
    });
    if (uploaded.error) {
      throw new Error(`画像Storageへの保存に失敗しました: ${uploaded.error.message}`);
    }

    const { data: publicUrlData } = admin.storage.from(AVATAR_BUCKET).getPublicUrl(path);
    const publicUrl = publicUrlData.publicUrl;

    const nextProgress = {
      ...existingProgress,
      username,
      displayName: existingProgress.displayName || username,
      avatarPath: path,
      avatarUrl: publicUrl,
      avatarDataUrl: publicUrl,
      avatarUpdatedAt: now,
      avatarStorageProvider: "supabase-storage",
      profileUpdatedAt: now,
    };
    const nextSettings = {
      ...existingSettings,
      avatarPath: path,
      avatarUrl: publicUrl,
      avatarDataUrl: publicUrl,
      avatarUpdatedAt: now,
      avatarStorageProvider: "supabase-storage",
      profileUpdatedAt: now,
    };

    const profileSaved = await admin.from("user_profiles").upsert({
      username,
      display_name: String(existingProgress.displayName || username),
      avatar_url: publicUrl,
      avatar_path: path,
      updated_at: now,
      app_version: APP_VERSION,
    }, { onConflict: "username" }).select("avatar_url,avatar_path,updated_at").single();

    if (profileSaved.error) {
      await safeRemoveAvatar(admin, path);
      throw new Error(`プロフィール専用テーブルへの画像保存に失敗しました: ${profileSaved.error.message}`);
    }

    const verified = await admin.from("user_profiles")
      .select("avatar_url,avatar_path,updated_at")
      .eq("username", username)
      .single();
    if (verified.error || verified.data?.avatar_path !== path || verified.data?.avatar_url !== publicUrl) {
      await safeRemoveAvatar(admin, path);
      throw new Error("保存後の再確認で画像情報が一致しませんでした。前の画像は維持されています。");
    }

    // Legacy backup is updated for backward compatibility only. The dedicated table is the source of truth.
    const upserted = await admin.rpc("vm_upsert_progress_backup", {
      p_username: username,
      p_password_hash: passwordHash,
      p_progress_json: nextProgress,
      p_settings_json: nextSettings,
      p_app_version: APP_VERSION,
    });

    if (upserted.error || normalizeRpcResult(upserted.data).ok === false) {
      // Do not delete the newly verified avatar: the dedicated profile table already saved it safely.
      console.warn("Legacy profile backup update failed:", upserted.error?.message || normalizeRpcResult(upserted.data).message);
    }

    await admin.from("user_profile_assets").insert({
      username,
      asset_type: "avatar",
      storage_bucket: AVATAR_BUCKET,
      storage_path: path,
      public_url: publicUrl,
      status: "active",
      app_version: APP_VERSION,
    }).then(() => undefined);

    let oldAvatarDeleted = false;
    if (oldAvatarPath && oldAvatarPath !== path) {
      oldAvatarDeleted = await safeRemoveAvatar(admin, oldAvatarPath);
      if (oldAvatarDeleted) {
        await admin.from("user_profile_assets")
          .update({ status: "deleted", deleted_at: now })
          .eq("username", username)
          .eq("storage_path", oldAvatarPath)
          .then(() => undefined);
      }
    }

    return json(200, {
      ok: true,
      url: publicUrl,
      path,
      updatedAt: now,
      oldAvatarDeleted,
      message: oldAvatarDeleted ? "画像を保存・再確認し、前の画像を削除しました。" : "画像を保存し、クラウド上の一致を再確認しました。",
      verified: true,
    });
  } catch (error) {
    return json(500, {
      ok: false,
      message: error instanceof Error ? error.message : "画像の保存に失敗しました。前の画像は消していません。",
    });
  }
}
