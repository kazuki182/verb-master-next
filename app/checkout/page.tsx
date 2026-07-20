"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FREE_VERB_LIMIT, getCurrentUsername, getPurchasePlanSummary } from "@/lib/account";
import { getNextPaymentPlan, getPaymentMode, getPaymentPlan } from "@/lib/paymentConfig";

function planFromQuery() {
  if (typeof window === "undefined") return 30;
  const value = Number(new URLSearchParams(window.location.search).get("plan") || "30");
  return [30, 60, 90, 124].includes(value) ? value : 30;
}

export default function CheckoutPage() {
  const [ready, setReady] = useState(false);
  const [targetPlan, setTargetPlan] = useState(30);
  const [agreed, setAgreed] = useState(false);
  const [summary, setSummary] = useState(getPurchasePlanSummary());

  useEffect(() => {
    if (!getCurrentUsername()) {
      window.location.href = "/login";
      return;
    }
    setTargetPlan(planFromQuery());
    setSummary(getPurchasePlanSummary());
    setReady(true);
  }, []);

  const plan = useMemo(() => getPaymentPlan(targetPlan), [targetPlan]);
  const nextPlan = useMemo(() => getNextPaymentPlan(summary.rawUnlocked), [summary.rawUnlocked]);
  if (!ready) return <p className="text-muted">読み込み中...</p>;

  const purchased = summary.rawUnlocked >= plan.count;
  const allowed = nextPlan?.count === plan.count;
  const currentAccess = summary.rawUnlocked > 0 ? `${summary.unlocked}動詞解放中` : `${FREE_VERB_LIMIT}動詞まで無料`;
  const paymentMode = getPaymentMode();

  return (
    <div className="space-y-5 pb-24">
      <header className="card p-5">
        <p className="text-xs font-black tracking-[0.25em] text-cyan-200">ORDER CONFIRMATION</p>
        <h1 className="mt-2 text-3xl font-black">購入内容の確認</h1>
        <p className="mt-2 text-sm leading-6 text-muted">商品、金額、提供内容を確認してから決済へ進みます。</p>
      </header>

      <section className="digital-card p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="digital-label">SELECTED PLAN</p>
            <h2 className="mt-2 text-2xl font-black text-white">{plan.label}</h2>
            <p className="mt-1 text-sm text-slate-300">{plan.addRange}を追加解放</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-black text-white">¥{plan.price.toLocaleString()}</p>
            <p className="text-xs text-cyan-200">税込・買い切り</p>
          </div>
        </div>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-black">ご注文内容</h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between gap-4 rounded-2xl bg-paper p-4"><dt className="text-muted">現在</dt><dd className="text-right font-bold">{currentAccess}</dd></div>
          <div className="flex justify-between gap-4 rounded-2xl bg-paper p-4"><dt className="text-muted">購入商品</dt><dd className="text-right font-bold">{plan.label}</dd></div>
          <div className="flex justify-between gap-4 rounded-2xl bg-paper p-4"><dt className="text-muted">追加範囲</dt><dd className="text-right font-bold">{plan.addRange}</dd></div>
          <div className="flex justify-between gap-4 rounded-2xl bg-paper p-4"><dt className="text-muted">支払方法</dt><dd className="text-right font-bold">クレジットカード・PayPay（Stripe）</dd></div>
          <div className="flex justify-between gap-4 rounded-2xl bg-paper p-4"><dt className="text-muted">提供時期</dt><dd className="text-right font-bold">決済確認後、原則即時</dd></div>
          <div className="flex justify-between gap-4 rounded-2xl border border-cyan-300/20 bg-cyan-950/20 p-4"><dt className="font-black text-cyan-100">お支払い合計</dt><dd className="text-right text-xl font-black text-white">¥{plan.price.toLocaleString()}</dd></div>
        </dl>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-black">解放されるPremium機能</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          {["日常会話例文", "0.5倍速音声", "フレーズ保存", "シャッフルテスト", "復習強化", "クラウド保存・復元"].map((item) => (
            <div key={item} className="rounded-2xl bg-paper p-3 font-bold">✓ {item}</div>
          ))}
        </div>
      </section>

      {purchased ? (
        <section className="card p-5">
          <p className="font-black text-emerald-200">このパックは購入済みです。</p>
          <Link href="/verbs" className="btn btn-primary mt-4 block text-center">学習を始める</Link>
        </section>
      ) : !allowed ? (
        <section className="card p-5">
          <p className="font-black text-amber-200">購入順序を確認してください。</p>
          <p className="mt-2 text-sm text-muted">現在購入できるのは{nextPlan?.label || "ありません"}です。</p>
          <Link href="/upgrade" className="btn btn-primary mt-4 block text-center">料金ページへ戻る</Link>
        </section>
      ) : (
        <section className="card p-5">
          <label className="flex items-start gap-3 rounded-2xl bg-paper p-4 text-sm leading-6">
            <input type="checkbox" className="mt-1 h-5 w-5" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} />
            <span><Link className="font-bold text-cyan-200" href="/terms">利用規約</Link>、<Link className="font-bold text-cyan-200" href="/refund-policy">返金・キャンセル条件</Link>、提供内容を確認し、同意します。</span>
          </label>
          {paymentMode === "stripe" ? (
            <Link href={`/checkout/processing?plan=${plan.count}`} aria-disabled={!agreed} className={`btn btn-primary mt-4 block text-center ${agreed ? "" : "pointer-events-none opacity-40"}`}>カード・PayPayで決済へ進む</Link>
          ) : (
            <Link href={`/checkout/processing?plan=${plan.count}`} aria-disabled={!agreed} className={`btn btn-primary mt-4 block text-center ${agreed ? "" : "pointer-events-none opacity-40"}`}>決済画面の動作確認へ進む</Link>
          )}
          <p className="mt-3 text-center text-xs text-muted">決済完了はStripe Webhookで確認し、確認後にPremiumを解放します。</p>
        </section>
      )}

      <Link className="btn btn-soft block text-center" href="/upgrade">プランを選び直す</Link>
    </div>
  );
}
