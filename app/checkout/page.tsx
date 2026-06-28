"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FREE_VERB_LIMIT,
  TOTAL_VERB_TARGET,
  getCurrentUsername,
  getPurchasePlanSummary,
} from "@/lib/account";

const plans = [
  { count: 30, label: "30動詞パック", price: 500, range: "1〜30", addRange: "4〜30", recommend: "まず有料機能を試したい人向け" },
  { count: 60, label: "60動詞パック", price: 1000, range: "1〜60", addRange: "31〜60", recommend: "継続して基礎動詞を増やしたい人向け" },
  { count: 90, label: "90動詞パック", price: 1500, range: "1〜90", addRange: "61〜90", recommend: "主要動詞を広く押さえたい人向け" },
  { count: 120, label: "全120動詞パック", price: 2000, range: "1〜120", addRange: "91〜120", recommend: "全部使いたい人向け / Lyrics English導線も解放" },
];

function planFromQuery() {
  if (typeof window === "undefined") return 30;
  const value = Number(new URLSearchParams(window.location.search).get("plan") || "30");
  return [30, 60, 90, 120].includes(value) ? value : 30;
}

export default function CheckoutPage() {
  const [username, setUsername] = useState<string | null>(null);
  const [targetPlan, setTargetPlan] = useState(30);
  const [summary, setSummary] = useState(getPurchasePlanSummary());

  useEffect(() => {
    const user = getCurrentUsername();
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setUsername(user);
    setTargetPlan(planFromQuery());
    setSummary(getPurchasePlanSummary());
  }, []);

  const plan = useMemo(() => plans.find((item) => item.count === targetPlan) || plans[0], [targetPlan]);
  const alreadyUnlocked = summary.rawUnlocked >= plan.count;
  const additionalPrice = Math.max(0, plan.price - summary.purchaseTotal);
  const currentText = summary.rawUnlocked > 0 ? `${summary.rawUnlocked}動詞解放中` : `${FREE_VERB_LIMIT}動詞まで無料`;

  if (!username) return <p className="text-muted">読み込み中...</p>;

  return (
    <div className="space-y-5 pb-24">
      <header className="card p-5">
        <p className="text-sm font-bold text-cyan-200">CHECKOUT / CONFIRM</p>
        <h1 className="mt-2 text-3xl font-black">購入確認</h1>
        <p className="mt-2 text-sm text-slate-300">
          本番決済前の購入導線です。正式版ではこの画面の「購入を確定する」をStripe等の決済に差し替えます。
        </p>
      </header>

      <section className="digital-card p-5">
        <p className="text-xs font-bold tracking-[0.25em] text-cyan-200">ORDER</p>
        <h2 className="mt-2 text-2xl font-black text-white">{plan.label}</h2>
        <p className="mt-2 text-sm text-slate-300">{plan.range}動詞まで解放 / {plan.recommend}</p>
        <div className="mt-5 grid grid-cols-2 gap-3 text-center">
          <div className="digital-panel">
            <p className="digital-label">プラン金額</p>
            <p className="digital-number text-3xl">¥{plan.price.toLocaleString()}</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">今回の差額</p>
            <p className="digital-number text-3xl">¥{additionalPrice.toLocaleString()}</p>
          </div>
        </div>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">解放される内容</h2>
        <div className="mt-4 grid gap-3 text-sm">
          <div className="rounded-2xl bg-paper p-4 font-bold">現在：{currentText}</div>
          <div className="rounded-2xl bg-paper p-4 font-bold">追加解放：{plan.addRange}番の動詞</div>
          <div className="rounded-2xl bg-paper p-4 font-bold">Premium機能：0.5倍速音声 / 日常例文 / フレーズ帳 / シャッフルテスト / 文法パターン / 復習強化</div>
          {plan.count >= TOTAL_VERB_TARGET && (
            <div className="rounded-2xl bg-amber-950/30 p-4 font-bold text-amber-100">全120動詞解放でLyrics Englishリンクも表示対象になります。</div>
          )}
        </div>
      </section>

      {alreadyUnlocked ? (
        <section className="card p-5">
          <h2 className="text-xl font-bold">すでに解放済みです</h2>
          <p className="mt-2 text-sm text-muted">このプランはすでに利用できます。購入履歴または学習画面へ進んでください。</p>
          <div className="mt-4 grid gap-3">
            <Link className="btn btn-primary block text-center" href="/verbs">動詞一覧へ</Link>
            <Link className="btn btn-soft block text-center" href="/purchases">購入履歴を見る</Link>
          </div>
        </section>
      ) : (
        <section className="card p-5">
          <h2 className="text-xl font-bold">購入前の確認</h2>
          <p className="mt-2 text-sm text-muted">今は本番決済ではなく、動作確認用の仮購入です。確定すると購入履歴に残り、Premium解放数が更新されます。</p>
          <Link className="btn btn-primary mt-4 block text-center" href={`/checkout/complete?plan=${plan.count}`}>
            仮購入を確定する
          </Link>
          <Link className="btn btn-soft mt-3 block text-center" href="/upgrade">プランを選び直す</Link>
        </section>
      )}

      <p className="text-center text-xs text-muted">Verb Master Version 49</p>
    </div>
  );
}
