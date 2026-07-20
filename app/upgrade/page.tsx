"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FREE_VERB_LIMIT, TOTAL_VERB_TARGET, getCurrentUsername, getPurchasePlanSummary, isCurrentUserAdmin } from "@/lib/account";
import { PAYMENT_PLANS, getNextPaymentPlan } from "@/lib/paymentConfig";

export default function UpgradePage() {
  const [ready, setReady] = useState(false);
  const [summary, setSummary] = useState(getPurchasePlanSummary());
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!getCurrentUsername()) {
      window.location.href = "/login";
      return;
    }
    setSummary(getPurchasePlanSummary());
    setIsAdmin(isCurrentUserAdmin());
    setReady(true);
  }, []);

  const nextPlan = useMemo(() => getNextPaymentPlan(summary.rawUnlocked), [summary.rawUnlocked]);
  if (!ready) return <p className="text-muted">読み込み中...</p>;

  const progress = Math.min(100, Math.round((summary.unlocked / TOTAL_VERB_TARGET) * 100));

  return (
    <div className="space-y-5 pb-24">
      <header className="digital-card overflow-hidden p-6">
        <p className="text-xs font-black tracking-[0.28em] text-cyan-200">VERB MASTER PREMIUM</p>
        <h1 className="mt-3 text-3xl font-black text-white">自分のペースで、必要な範囲だけ解放</h1>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          月額ではなく、各500円の買い切りです。無料3動詞から始めて、30・60・90・124動詞へ段階的に広げられます。
        </p>
      </header>

      <section className="digital-card p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="digital-label">CURRENT ACCESS</p>
            <h2 className="mt-2 text-2xl font-black text-white">{summary.unlocked} / {TOTAL_VERB_TARGET} 動詞</h2>
            <p className="mt-1 text-sm text-slate-300">購入総額 ¥{summary.purchaseTotal.toLocaleString()}</p>
          </div>
          <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
            {summary.hasPremium ? `Step ${summary.paidPacks}` : `Free ${FREE_VERB_LIMIT}`}
          </span>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-950">
          <div className="h-full rounded-full bg-cyan-300" style={{ width: `${progress}%` }} />
        </div>
        {isAdmin ? (
          <p className="mt-5 rounded-2xl bg-cyan-950/30 p-4 text-center font-bold text-cyan-100">管理者アカウント：全機能を確認できます。購入は不要です。</p>
        ) : nextPlan ? (
          <Link href={`/checkout?plan=${nextPlan.count}`} className="btn btn-primary mt-5 block text-center">
            次の{nextPlan.label}を確認する
          </Link>
        ) : (
          <p className="mt-5 rounded-2xl bg-emerald-950/30 p-4 text-center font-bold text-emerald-100">全124動詞が解放されています。</p>
        )}
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-black">無料版とPremium</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-3xl bg-paper p-5">
            <p className="text-lg font-black">無料版</p>
            <p className="mt-2 text-sm leading-6 text-muted">1〜3番の基本動詞、基本学習、通常音声、テスト機能を試せます。</p>
          </div>
          <div className="rounded-3xl border border-cyan-300/25 bg-cyan-950/20 p-5">
            <p className="text-lg font-black text-cyan-100">Premium</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">日常例文、0.5倍速音声、フレーズ保存、シャッフルテスト、復習強化、クラウド保存を利用できます。</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div>
          <p className="text-xs font-black tracking-[0.24em] text-cyan-200">ONE-TIME PURCHASE</p>
          <h2 className="mt-1 text-2xl font-black">買い切り4段階</h2>
        </div>
        {!isAdmin && PAYMENT_PLANS.map((plan, index) => {
          const purchased = summary.rawUnlocked >= plan.count;
          const available = nextPlan?.count === plan.count;
          return (
            <article key={plan.planId} className={`card p-5 ${available ? "ring-2 ring-cyan-300/60" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black tracking-[0.2em] text-cyan-200">STEP {index + 1}</p>
                  <h3 className="mt-1 text-2xl font-black">{plan.label}</h3>
                  <p className="mt-1 text-sm text-muted">追加解放：{plan.addRange}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black">¥{plan.price.toLocaleString()}</p>
                  <p className="text-xs text-muted">買い切り</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{plan.recommend}</p>
              {purchased ? (
                <div className="mt-4 rounded-2xl bg-emerald-950/30 p-3 text-center text-sm font-black text-emerald-100">購入済み</div>
              ) : available ? (
                <Link className="btn btn-primary mt-4 block text-center" href={`/checkout?plan=${plan.count}`}>購入内容を確認</Link>
              ) : (
                <div className="mt-4 rounded-2xl bg-slate-950/40 p-3 text-center text-sm font-bold text-slate-400">前のStep購入後に選択できます</div>
              )}
            </article>
          );
        })}
      </section>

      <section className="card p-5 text-sm leading-6 text-muted">
        <h2 className="text-lg font-black text-white">購入前にご確認ください</h2>
        <p className="mt-2">デジタルコンテンツのため、決済完了後に対象機能を提供します。正式な返金条件・利用条件は公開前に確定します。</p>
        <div className="mt-4 flex flex-wrap gap-3 text-cyan-200">
          <Link href="/terms">利用規約</Link>
          <Link href="/refund-policy">返金・キャンセル</Link>
          <Link href="/commerce-disclosure">特定商取引法に基づく表記</Link>
        </div>
      </section>

      <div className="grid gap-3">
        <Link href="/purchases" className="btn btn-soft block text-center">購入履歴・復元</Link>
        <Link href="/profile" className="btn btn-soft block text-center">マイページへ戻る</Link>
      </div>
    </div>
  );
}
