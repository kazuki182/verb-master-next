import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

const APP_VERSION = "v177-contact-feedback";
const ADMIN_EMAIL = process.env.CONTACT_ADMIN_EMAIL || "iktpq182-182@yahoo.co.jp";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "";
const allowedCategories = new Set(["不具合報告", "ご要望", "質問", "Premiumについて", "アカウントについて", "その他"]);

function json(status: number, payload: Record<string, unknown>) {
  return NextResponse.json(payload, { status });
}

function normalizeRpcResult(data: unknown) {
  if (!data || typeof data !== "object") return {} as { ok?: boolean; message?: string };
  return data as { ok?: boolean; message?: string };
}

function safeText(value: unknown, max: number) {
  return String(value || "").replace(/\u0000/g, "").trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char] || char);
}

async function authenticate(username: string, passwordHash: string) {
  const admin = getSupabaseAdminClient();
  if (!admin) throw new Error("SUPABASE_SERVICE_ROLE_KEY が未設定です。");
  const login = await admin.rpc("vm_login_cloud_account", { p_username: username, p_password_hash: passwordHash });
  if (login.error) throw new Error(login.error.message);
  const result = normalizeRpcResult(login.data);
  if (result.ok === false) throw new Error(result.message || "再ログインが必要です。");
  return admin;
}

async function notifyByEmail(input: { contactId: string; username: string; email: string; category: string; message: string; browserInfo: string; createdAt: string }) {
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL) return { sent: false, reason: "email-env-missing" };
  const subject = `[Verb Master] ${input.category} / ${input.username}`;
  const text = [
    `受付ID: ${input.contactId}`,
    `ユーザーID: ${input.username}`,
    `返信先: ${input.email}`,
    `種別: ${input.category}`,
    `送信日時: ${input.createdAt}`,
    `アプリ: ${APP_VERSION}`,
    `ブラウザ: ${input.browserInfo}`,
    "",
    input.message,
  ].join("\n");
  const html = `<h2>Verb Master お問い合わせ</h2><p><b>受付ID:</b> ${escapeHtml(input.contactId)}</p><p><b>ユーザーID:</b> ${escapeHtml(input.username)}</p><p><b>返信先:</b> ${escapeHtml(input.email)}</p><p><b>種別:</b> ${escapeHtml(input.category)}</p><p><b>送信日時:</b> ${escapeHtml(input.createdAt)}</p><p><b>アプリ:</b> ${APP_VERSION}</p><p><b>ブラウザ:</b> ${escapeHtml(input.browserInfo)}</p><hr><p style="white-space:pre-wrap">${escapeHtml(input.message)}</p>`;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: CONTACT_FROM_EMAIL, to: [ADMIN_EMAIL], reply_to: input.email, subject, text, html }),
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    return { sent: false, reason: `resend-${response.status}`, detail: detail.slice(0, 500) };
  }
  return { sent: true };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (safeText(body?.website, 100)) return json(200, { ok: true, contactId: "accepted", emailNotified: false });

    const requestId = safeText(body?.requestId, 80);
    const username = safeText(body?.username, 80);
    const passwordHash = safeText(body?.passwordHash, 256);
    const email = safeText(body?.email, 254).toLowerCase();
    const category = safeText(body?.category, 40);
    const message = safeText(body?.message, 2000);
    const browserInfo = safeText(body?.browserInfo, 1000);

    if (!requestId || !username || !passwordHash) return json(400, { ok: false, message: "本人確認情報が不足しています。" });
    if (!/^\S+@\S+\.\S+$/.test(email)) return json(400, { ok: false, message: "メールアドレスの形式を確認してください。" });
    if (!allowedCategories.has(category)) return json(400, { ok: false, message: "お問い合わせ種別が正しくありません。" });
    if (message.length < 5 || message.length > 2000) return json(400, { ok: false, message: "内容は5〜2000文字で入力してください。" });

    const admin = await authenticate(username, passwordHash);
    const existing = await admin.from("contact_messages").select("id,email_notified").eq("request_id", requestId).maybeSingle();
    if (existing.error) throw new Error(`問い合わせ確認に失敗しました: ${existing.error.message}`);
    if (existing.data) return json(200, { ok: true, contactId: existing.data.id, emailNotified: Boolean(existing.data.email_notified), duplicate: true });

    const recent = await admin.from("contact_messages").select("created_at").eq("username", username).order("created_at", { ascending: false }).limit(1).maybeSingle();
    if (!recent.error && recent.data?.created_at) {
      const elapsed = Date.now() - Date.parse(recent.data.created_at);
      if (elapsed >= 0 && elapsed < 30_000) return json(429, { ok: false, message: "連続送信を防ぐため、30秒ほど待ってから送信してください。" });
    }

    const createdAt = new Date().toISOString();
    const inserted = await admin.from("contact_messages").insert({
      request_id: requestId,
      username,
      reply_email: email,
      category,
      message,
      status: "unread",
      app_version: APP_VERSION,
      browser_info: browserInfo || null,
      email_notified: false,
      created_at: createdAt,
      updated_at: createdAt,
    }).select("id").single();
    if (inserted.error || !inserted.data) throw new Error(`お問い合わせ保存に失敗しました: ${inserted.error?.message || "unknown"}`);

    const contactId = String(inserted.data.id);
    const notified = await notifyByEmail({ contactId, username, email, category, message, browserInfo, createdAt });
    if (notified.sent) {
      await admin.from("contact_messages").update({ email_notified: true, email_notified_at: new Date().toISOString(), updated_at: new Date().toISOString() }).eq("id", contactId);
    } else {
      await admin.from("contact_messages").update({ email_error: notified.reason || "unknown", updated_at: new Date().toISOString() }).eq("id", contactId);
    }

    return json(200, { ok: true, contactId, emailNotified: notified.sent, message: notified.sent ? "送信しました。" : "保存しました。メール通知設定を確認してください。" });
  } catch (error) {
    return json(500, { ok: false, message: error instanceof Error ? error.message : "お問い合わせ送信に失敗しました。" });
  }
}
