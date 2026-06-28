"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FREE_VERB_LIMIT,
  TOTAL_VERB_TARGET,
  getAccounts,
  getCurrentUsername,
  getPurchasePlanSummary,
  grantThirtyVerbPack,
  hasLyricsEnglishAccess,
  setUserUnlockLevel,
} from "@/lib/account";

type PlanSummary = ReturnType<typeof getPurchasePlanSummary>;

const unlockPlans = [
  { count: 0, label: "無料", price: 0, range: `1〜${FREE_VERB_LIMIT}`, note: `${FREE_VERB_LIMIT}動詞までお試し` },
  { count: 30, label: "30動詞パック", price: 500, range: "1〜30", note: "Premium機能も解放" },
  { count: 60, label: "60動詞パック", price: 1000, range: "1〜60", note: "中級前半までまとめて学習" },
  { count: 90, label: "90動詞パック", price: 1500, range: "1〜90", note: "主要動詞をかなり広く学習" },
  { count: 120, label: "全120動詞パック", price: 2000, range: "1〜120", note: "Lyrics Englishリンクも解放" },
];

function isAdminUser(username: string | null) {
  if (!username) return false;
  return getAccounts().some((account) => account.username === username && account.role === "admin");
}

function getNextPlan(unlocked: number) {
  return unlockPlans.find((plan) => plan.count > Math.max(0, unlocked)) || unlockPlans[unlockPlans.length - 1];
}

export default function UpgradePage() {
  const [username, setUsername] = useState<string | null>(null);
  const [summary, setSummary] = useState<PlanSummary | null>(null);
  const [message, setMessage] = useState("");

  const refresh = () => setSummary(getPurchasePlanSummary());

  useEffect(() => {
    const user = getCurrentUsername();
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setUsername(user);
    setSummary(getPurchasePlanSummary());
  }, []);

  const nextPlan = useMemo(() => summary ? getNextPlan(summary.rawUnlocked) : null, [summary]);

  if (!username || !summary || !nextPlan) return <p className="text-muted">読み込み中...</p>;

  const isAdmin = isAdminUser(username);
  const lyricsUnlocked = hasLyricsEnglishAccess();
  const progressPercent = Math.min(100, Math.round((summary.unlocked / TOTAL_VERB_TARGET) * 100));

  const simulatePack = () => {
    grantThirtyVerbPack(username);
    refresh();
    setMessage("開発確認用：30動詞パックを1回分反映しました。正式版では決済後に自動反映します。");
  };

  const setLevel = (count: number) => {
    setUserUnlockLevel(username, count);
    refresh();
    setMessage(count === 0 ? "開発確認用：無料状態に戻しました。" : `開発確認用：${count}動詞解放に変更しました。`);
  };

  return (
    <div className="space-y-5 pb-24">
      <header className="card p-5">
        <p className="text-sm font-bold text-cyan-200">UPGRADE / PREMIUM</p>
        <h1 className="mt-2 text-3xl font-black">課金・アンロック</h1>
        <p className="mt-2 text-sm text-slate-300">
          無料は3動詞まで。500円ごとに30動詞を追加解放します。1回でも課金すると、Lyrics Englishリンク以外のPremium機能が使えます。
        </p>
      </header>

      <section className="digital-card p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-200">CURRENT PLAN</p>
            <h2 className="mt-2 text-2xl font-black">{summary.unlocked} / {TOTAL_VERB_TARGET} 動詞 解放中</h2>
          </div>
          <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
            {summary.hasPremium ? "Premium" : "Free"}
          </span>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-950">
          <div className="h-full rounded-full bg-cyan-300" style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-center">
          <div className="digital-panel">
            <p className="digital-label">購入額</p>
            <p className="digital-number text-3xl">¥{summary.purchaseTotal.toLocaleString()}</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">次のおすすめ</p>
            <p className="digital-number text-2xl">{nextPlan.count || FREE_VERB_LIMIT}</p>
            <p className="text-xs text-cyan-200">動詞まで</p>
          </div>
        </div>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">次におすすめ</h2>
        {summary.unlocked >= TOTAL_VERB_TARGET ? (
          <p className="mt-3 text-sm text-slate-300">全120動詞が解放済みです。Lyrics Englishリンクも利用できます。</p>
        ) : (
          <div className="mt-4 rounded-3xl border border-amber-300/20 bg-amber-950/20 p-4">
            <p className="text-sm font-bold text-amber-100">{nextPlan.label}</p>
            <p className="mt-1 text-3xl font-black">¥{nextPlan.price.toLocaleString()}</p>
            <p className="mt-2 text-sm text-amber-100/80">{nextPlan.range}動詞まで解放。{nextPlan.note}</p>
            <button type="button" className="btn btn-primary mt-4 w-full" onClick={() => setMessage("正式決済は次Ver以降でStripe等と接続します。今は管理者用ボタンで表示確認してください。")}>購入へ進む（準備中）</button>
          </div>
        )}
        {message && <p className="mt-3 rounded-2xl bg-slate-950/50 p-3 text-sm font-bold text-cyan-100">{message}</p>}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">料金プラン</h2>
        {unlockPlans.map((plan) => {
          const active = plan.count === 0 ? summary.rawUnlocked === 0 : summary.rawUnlocked >= plan.count;
          const targetCount = plan.count || FREE_VERB_LIMIT;
          return (
            <article key={plan.count} className={`card p-5 ${active ? "border-cyan-300/50" : ""}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-cyan-200">{plan.label}</p>
                  <p className="mt-1 text-3xl font-black">{plan.price === 0 ? "無料" : `¥${plan.price.toLocaleString()}`}</p>
                  <p className="mt-2 text-sm text-muted">{plan.range}動詞 / {plan.note}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-white">{targetCount}</p>
                  <p className="text-xs font-bold text-cyan-200">動詞</p>
                  {active && <p className="mt-2 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">解放中</p>}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">Premiumで解放される機能</h2>
        <div className="mt-4 grid gap-3 text-sm">
          {["🐢 0.5倍速音声", "🏠 日常例文", "⭐ フレーズ登録帳", "🔀 シャッフルテスト", "📘 文型 / Pattern表示", "📈 復習強化機能"].map((item) => (
            <div key={item} className="rounded-2xl bg-paper p-3 font-bold">{item}</div>
          ))}
        </div>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">Lyrics English</h2>
        {lyricsUnlocked ? (
          <div className="mt-3">
            <p className="text-sm text-slate-300">全120動詞が解放済みのため、Lyrics Englishリンクを表示しています。</p>
            <a className="btn btn-primary mt-4 block text-center" href="#" onClick={(e) => e.preventDefault()}>Lyrics Englishを開く</a>
            <p className="mt-2 text-xs text-muted">正式URL設定後にリンクを接続します。</p>
          </div>
        ) : (
          <p className="mt-3 text-sm text-slate-300">🔒 120動詞を全解除すると、Lyrics Englishリンクが表示されます。</p>
        )}
      </section>

      {isAdmin && (
        <section className="card p-5">
          <h2 className="text-xl font-bold">管理者用テスト操作</h2>
          <p className="mt-2 text-sm text-muted">正式決済前の表示確認用です。通常ユーザーには表示されません。無料/各プラン/全解放を確認できます。</p>
          <button className="btn btn-primary mt-4 block w-full" onClick={simulatePack}>30動詞パックを1回分反映</button>
          <div className="mt-3 grid grid-cols-5 gap-2">
            {[0, 30, 60, 90, 120].map((count) => (
              <button key={count} className="rounded-xl bg-paper px-3 py-2 text-sm font-bold" onClick={() => setLevel(count)}>{count === 0 ? "無料" : count}</button>
            ))}
          </div>
        </section>
      )}

      <div className="grid gap-3">
        <Link href="/purchases" className="btn btn-soft block text-center">購入履歴・復元を見る</Link>
        <Link href="/profile" className="btn btn-soft block text-center">マイページへ戻る</Link>
      </div>
    </div>
  );
}
