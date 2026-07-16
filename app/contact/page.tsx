"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getCurrentUsername } from "@/lib/account";
import { getCurrentCloudPasswordHash } from "@/lib/cloudSync";

const categories = ["不具合報告", "ご要望", "質問", "Premiumについて", "アカウントについて", "その他"] as const;
const CONTACT_DRAFT_KEY = "verbMaster.contactDraft.v177";
const CONTACT_SENT_KEY = "verbMaster.contactSent.v177";

function browserSummary() {
  if (typeof window === "undefined") return "";
  return `${navigator.userAgent} / ${window.innerWidth}x${window.innerHeight}`;
}

export default function ContactPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("不具合報告");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [sentId, setSentId] = useState("");

  useEffect(() => {
    const current = getCurrentUsername();
    if (!current) {
      window.location.href = "/login";
      return;
    }
    setUsername(current);
    try {
      const raw = localStorage.getItem(`${CONTACT_DRAFT_KEY}:${current}`);
      if (raw) {
        const draft = JSON.parse(raw) as { email?: string; category?: string; message?: string };
        setEmail(draft.email || "");
        if (categories.includes(draft.category as (typeof categories)[number])) {
          setCategory(draft.category as (typeof categories)[number]);
        }
        setMessage(draft.message || "");
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!username) return;
    try {
      localStorage.setItem(`${CONTACT_DRAFT_KEY}:${username}`, JSON.stringify({ email, category, message }));
    } catch {}
  }, [username, email, category, message]);

  const remaining = useMemo(() => 2000 - message.length, [message]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!username) return;
    if (!email.trim()) return setStatus("返信先メールアドレスを入力してください。");
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) return setStatus("メールアドレスの形式を確認してください。");
    if (message.trim().length < 5) return setStatus("お問い合わせ内容を5文字以上入力してください。");
    if (message.length > 2000) return setStatus("お問い合わせ内容は2000文字以内にしてください。");

    const passwordHash = getCurrentCloudPasswordHash(username);
    if (!passwordHash) {
      setStatus("本人確認情報がありません。一度ログアウトして、再ログイン後に送信してください。");
      return;
    }

    const requestId = crypto.randomUUID();
    setSending(true);
    setStatus("送信しています...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestId,
          username,
          passwordHash,
          email: email.trim(),
          category,
          message: message.trim(),
          browserInfo: browserSummary(),
          website: "",
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.ok) throw new Error(payload.message || "送信に失敗しました。");
      setSentId(String(payload.contactId || requestId));
      setMessage("");
      localStorage.removeItem(`${CONTACT_DRAFT_KEY}:${username}`);
      localStorage.setItem(`${CONTACT_SENT_KEY}:${username}`, JSON.stringify({ id: payload.contactId, sentAt: new Date().toISOString() }));
      setStatus(payload.emailNotified
        ? "お問い合わせを送信しました。管理人へメール通知済みです。"
        : "お問い合わせを保存しました。メール通知設定が未完了のため、管理画面から確認できる状態です。"
      );
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "送信に失敗しました。");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="space-y-6 pb-8">
      <header>
        <p className="text-muted">Contact & Feedback</p>
        <h1 className="mt-1 text-3xl font-black">お問い合わせ・ご意見</h1>
        <p className="mt-2 text-sm leading-6 text-muted">不具合、ご要望、Premiumやアカウントについて送信できます。</p>
      </header>

      <section className="card p-5">
        <form className="space-y-5" onSubmit={submit}>
          <div>
            <label className="text-sm font-bold">ユーザーID</label>
            <div className="mt-2 flex gap-2">
              <input className="w-full rounded-xl border px-4 py-3 opacity-80" value={username} readOnly aria-readonly="true" />
              <button className="btn btn-soft shrink-0" type="button" onClick={() => navigator.clipboard.writeText(username)}>コピー</button>
            </div>
            <p className="mt-2 text-xs text-muted">ログイン中のIDを自動入力しています。変更できません。</p>
          </div>

          <div>
            <label className="text-sm font-bold" htmlFor="contact-email">返信先メールアドレス</label>
            <input id="contact-email" className="mt-2 w-full rounded-xl border px-4 py-3" type="email" inputMode="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" required />
            <p className="mt-2 text-xs text-muted">現在のアカウントはメール登録式ではないため、返信を受け取るアドレスを入力してください。</p>
          </div>

          <div>
            <label className="text-sm font-bold" htmlFor="contact-category">お問い合わせ種別</label>
            <select id="contact-category" className="mt-2 w-full rounded-xl border px-4 py-3" value={category} onChange={(e) => setCategory(e.target.value as (typeof categories)[number])}>
              {categories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between gap-3">
              <label className="text-sm font-bold" htmlFor="contact-message">内容</label>
              <span className={remaining < 0 ? "text-xs font-bold text-red-300" : "text-xs text-muted"}>{remaining}文字</span>
            </div>
            <textarea id="contact-message" className="mt-2 min-h-44 w-full resize-y rounded-xl border px-4 py-3 leading-6" maxLength={2000} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="発生した画面、操作手順、表示された内容などをできるだけ具体的に入力してください。" required />
          </div>

          <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-4 text-sm leading-6 text-cyan-50/90">
            送信内容は管理用データベースへ保存され、管理人の連絡先へ通知されます。パスワードやカード番号は入力しないでください。
          </div>

          {status && <p className="rounded-xl border border-cyan-300/20 bg-slate-950/50 p-3 text-sm font-bold text-cyan-50">{status}{sentId ? ` 受付ID: ${sentId}` : ""}</p>}

          <button className="btn btn-primary w-full" type="submit" disabled={sending}>{sending ? "送信中..." : "お問い合わせを送信"}</button>
        </form>
      </section>

      <Link className="btn btn-soft block text-center" href="/profile">マイページへ戻る</Link>
    </div>
  );
}
