import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getSupabaseAdminClient } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

const AVATAR_BUCKET = "avatars";
const MAX_AVATAR_BYTES = 1024 * 1024;
const APP_VERSION = "v175-profile-avatar-durable-source-of-truth";

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

export async function POST(request: NextRequest) {
  const admin = getSupabaseAdminClient();
  if (!admin) {
    return json(500, {
      ok: false,
      message: "画像Storage保存にはVercel環境変数 SUPABASE_SERVICE_ROLE_KEY が必要です。端末内画像と前の画像は消していません。",
    });
  }

  let uploadedPath = "";
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
      return json(401, { ok: false, message: loginResult.message || "再ログインが必要です。端末内画像と前の画像は消していません。" });
    }

    const currentProfile = await admin
      .from("user_profiles")
      .select("display_name,avatar_url,avatar_path,updated_at")
      .eq("username", username)
      .maybeSingle();
    if (currentProfile.error) throw new Error(`現在のプロフィール確認に失敗しました: ${currentProfile.error.message}`);

    const { mime, buffer, ext } = parseAvatarDataUrl(avatarDataUrl);
    const now = new Date().toISOString();
    const random = crypto.randomBytes(8).toString("hex");
    const path = `${userStorageKey(username)}/${Date.now()}-${random}.${ext}`;
    uploadedPath = path;

    const uploaded = await admin.storage.from(AVATAR_BUCKET).upload(path, buffer, {
      contentType: mime,
      cacheControl: "31536000",
      upsert: false,
    });
    if (uploaded.error) throw new Error(`画像Storageへの保存に失敗しました: ${uploaded.error.message}`);

    const { data: publicUrlData } = admin.storage.from(AVATAR_BUCKET).getPublicUrl(path);
    const publicUrl = publicUrlData.publicUrl;
    if (!publicUrl) throw new Error("画像URLを作成できませんでした。");

    // Source of truth update. Old files are intentionally retained; deployment/update must never break the current avatar.
    const profileSaved = await admin.from("user_profiles").upsert({
      username,
      display_name: String(currentProfile.data?.display_name || username),
      avatar_url: publicUrl,
      avatar_path: path,
      updated_at: now,
      app_version: APP_VERSION,
    }, { onConflict: "username" }).select("avatar_url,avatar_path,updated_at").single();
    if (profileSaved.error) throw new Error(`プロフィール専用テーブルへの画像保存に失敗しました: ${profileSaved.error.message}`);

    const verified = await admin.from("user_profiles")
      .select("avatar_url,avatar_path,updated_at")
      .eq("username", username)
      .single();
    if (verified.error || verified.data?.avatar_path !== path || verified.data?.avatar_url !== publicUrl) {
      throw new Error("保存後の再確認で画像情報が一致しませんでした。端末内画像と前の画像は維持されています。");
    }

    const ledgerInsert = await admin.from("user_profile_assets").insert({
      username,
      asset_type: "avatar",
      storage_bucket: AVATAR_BUCKET,
      storage_path: path,
      public_url: publicUrl,
      status: "active",
      app_version: APP_VERSION,
      uploaded_at: now,
      updated_at: now,
    });
    if (ledgerInsert.error) {
      console.warn("Avatar ledger insert failed:", ledgerInsert.error.message);
    }

    const previousPath = String(currentProfile.data?.avatar_path || "");
    if (previousPath && previousPath !== path) {
      await admin.from("user_profile_assets")
        .update({ status: "superseded", updated_at: now })
        .eq("username", username)
        .eq("storage_path", previousPath)
        .then(() => undefined);
    }

    // Backward compatibility only. A failure here must not roll back the verified profile row.
    const fetched = await admin.rpc("vm_fetch_progress_backup", {
      p_username: username,
      p_password_hash: passwordHash,
    });
    if (!fetched.error) {
      const row = Array.isArray(fetched.data) ? fetched.data[0] : fetched.data;
      const existingProgress = (row?.progress_json || {}) as Record<string, unknown>;
      const existingSettings = (row?.settings_json || {}) as Record<string, unknown>;
      const nextProgress = {
        ...existingProgress,
        username,
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
      const legacy = await admin.rpc("vm_upsert_progress_backup", {
        p_username: username,
        p_password_hash: passwordHash,
        p_progress_json: nextProgress,
        p_settings_json: nextSettings,
        p_app_version: APP_VERSION,
      });
      if (legacy.error || normalizeRpcResult(legacy.data).ok === false) {
        console.warn("Legacy profile mirror update failed:", legacy.error?.message || normalizeRpcResult(legacy.data).message);
      }
    }

    return json(200, {
      ok: true,
      url: publicUrl,
      path,
      updatedAt: now,
      oldAvatarDeleted: false,
      previousAvatarRetained: Boolean(currentProfile.data?.avatar_path),
      verified: true,
      message: "画像を保存し、プロフィール専用テーブルから同じURL・パスを再確認しました。前の画像は復旧用に保持しています。",
    });
  } catch (error) {
    // Remove only the new uncommitted object. Never delete any previously active avatar here.
    if (uploadedPath) {
      await admin.storage.from(AVATAR_BUCKET).remove([uploadedPath]).catch(() => undefined);
    }
    return json(500, {
      ok: false,
      message: error instanceof Error ? error.message : "画像の保存に失敗しました。端末内画像と前の画像は消していません。",
    });
  }
}
