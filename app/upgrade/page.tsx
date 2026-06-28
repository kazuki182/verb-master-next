"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FREE_VERB_LIMIT,
  TOTAL_VERB_TARGET,
  VERB_PACK_PRICE_YEN,
  getAccounts,
  getCurrentUsername,
  getPurchasePlanSummary,
  grantThirtyVerbPack,
  hasLyricsEnglishAccess,
  setUserUnlockLevel,
  type UserProgress,
} from "@/lib/account";

type PlanSummary = ReturnType<typeof getPurchasePlanSummary>;

const unlockPlans = [
  { count: 0, label: "無料", price: 0, note: `${FREE_VERB_LIMIT}動詞までお試し` },
  { count: 30, label: "30動詞パック", price: 500, note: "1回課金でPremium機能も解放" },
  { count: 60, label: "60動詞パック", price: 1000, note: "追加30動詞を解放" },
  { count: 90, label: "90動詞パック", price: 1500, note: "さらに追加30動詞を解放" },
  { count: 120, label: "全120動詞パック", price: 2000, note: "Lyrics Englishリンクも解放" },
];

function isAdminUser(username: string | null) {
  if (!username) return false;
  return getAccounts().some((account) => account.username === username && account.role === "admin");
}

export default function UpgradePage() {
  const [username, setUsername] = useState<string | null>(null);
  const [summary, setSummary] = useState<PlanSummary | null>(null);
  const [message, setMessage] = useState("");

  const refresh = () => {
    setSummary(getPurchasePlanSummary());
  };

  useEffect(() => {
    const user = getCurrentUsername();
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setUsername(user);
    setSummary(getPurchasePlanSummary());
  }, []);

  if (!username || !summary) return <p className="text-muted">読み込み中...</p>;

  const isAdmin = isAdminUser(username);
  const lyricsUnlocked = hasLyricsEnglishAccess();

  const simulatePack = () => {
    grantThirtyVerbPack(username);
    refresh();
    setMessage("開発確認用：30動詞パックを反映しました。正式版ではStripe決済後に自動反映します。");
  };

  const setLevel = (count: number) => {
    setUserUnlockLevel(username, count);
    refresh();
    setMessage(`開発確認用：${count}動詞解放に変更しました。`);
  };

  return (
    <div className="space-y-5 pb-6">
      <header className="card p-5">
        <p className="text-sm font-bold text-cyan-200">UPGRADE</p>
        <h1 className="mt-2 text-3xl font-black">アップグレード</h1>
        <p className="mt-2 text-sm text-slate-300">
          500円ごとに30動詞を追加解放します。1回でも課金すると、Lyrics Englishリンク以外のPremium機能が使えます。
        </p>
      </header>

      <section className="digital-card p-5">
        <p className="text-xs font-bold tracking-[0.25em] text-cyan-200">CURRENT PLAN</p>
        <div className="mt-4 grid grid-cols-2 gap-3 text-center">
          <div className="digital-panel">
            <p className="digital-label">解放済み</p>
            <p className="digital-number text-3xl">{summary.unlocked}</p>
            <p className="text-xs text-cyan-200">/ {TOTAL_VERB_TARGET} 動詞</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">購入額</p>
            <p className="digital-number text-3xl">¥{summary.purchaseTotal.toLocaleString()}</p>
            <p className="text-xs text-cyan-200">買い切り</p>
          </div>
        </div>
        <div className="mt-4 rounded-2xl bg-slate-950/50 p-4 text-sm">
          <p className="font-bold text-cyan-100">Premium機能</p>
          <p className="mt-2 text-slate-300">
            {summary.hasPremium
              ? "解放済み：0.5倍速・日常例文・フレーズ帳・シャッフルテスト・文型/Pattern表示が使えます。"
              : "未解放：30動詞パック購入で、Lyrics Englishリンク以外のPremium機能が使えます。"}
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">料金プラン</h2>
        {unlockPlans.map((plan) => {
          const active = plan.count === 0 ? summary.rawUnlocked === 0 : summary.rawUnlocked >= plan.count;
          return (
            <article key={plan.count} className={`card p-5 ${active ? "border-cyan-300/50" : ""}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-cyan-200">{plan.label}</p>
                  <p className="mt-1 text-3xl font-black">{plan.price === 0 ? "無料" : `¥${plan.price.toLocaleString()}`}</p>
                  <p className="mt-2 text-sm text-muted">{plan.note}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-white">{plan.count === 0 ? FREE_VERB_LIMIT : plan.count}</p>
                  <p className="text-xs font-bold text-cyan-200">動詞</p>
                  {active && <p className="mt-2 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">現在</p>}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">Premiumで解放される機能</h2>
        <div className="mt-4 grid gap-3 text-sm">
          {["🐢 ゆっくり音声", "🏠 日常例文", "⭐ フレーズ登録帳", "🔀 シャッフルテスト", "📘 文型 / Pattern表示", "📈 復習強化機能"].map((item) => (
            <div key={item} className="rounded-2xl bg-paper p-3 font-bold">{item}</div>
          ))}
        </div>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">Lyrics English</h2>
        {lyricsUnlocked ? (
          <div className="mt-3">
            <p className="text-sm text-slate-300">全120動詞が解放済みのため、Lyrics Englishリンクを表示しています。</p>
            <a className="btn btn-primary mt-4 block text-center" href="#" onClick={(e) => e.preventDefault()}>
              Lyrics Englishを開く
            </a>
            <p className="mt-2 text-xs text-muted">正式URL設定後にリンクを接続します。</p>
          </div>
        ) : (
          <p className="mt-3 text-sm text-slate-300">🔒 120動詞を全解除すると、Lyrics Englishリンクが表示されます。</p>
        )}
      </section>

      {isAdmin && (
        <section className="card p-5">
          <h2 className="text-xl font-bold">管理者用テスト操作</h2>
          <p className="mt-2 text-sm text-muted">正式決済前の表示確認用です。一般ユーザーには管理者権限がないため表示されません。</p>
          <button className="btn btn-primary mt-4 block w-full" onClick={simulatePack}>30動詞パックを1回分反映</button>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {[30, 60, 90, 120].map((count) => (
              <button key={count} className="rounded-xl bg-paper px-3 py-2 text-sm font-bold" onClick={() => setLevel(count)}>{count}</button>
            ))}
          </div>
          {message && <p className="mt-3 text-sm font-bold text-cyan-100">{message}</p>}
        </section>
      )}

      <Link href="/profile" className="btn btn-soft block text-center">マイページへ戻る</Link>
    </div>
  );
}
