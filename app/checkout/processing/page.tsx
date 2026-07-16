"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getPaymentMode, getPaymentPlan } from "@/lib/paymentConfig";

function planFromQuery() {
  if (typeof window === "undefined") return 30;
  const value = Number(new URLSearchParams(window.location.search).get("plan") || "30");
  return [30, 60, 90, 120].includes(value) ? value : 30;
}

export default function CheckoutProcessingPage() {
  const [planCount, setPlanCount] = useState(30);
  useEffect(() => setPlanCount(planFromQuery()), []);
  const plan = getPaymentPlan(planCount);
  const stripeMode = getPaymentMode() === "stripe";

  return (
    <div className="space-y-5 pb-24">
      <header className="digital-card p-7 text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-cyan-200/30 border-t-cyan-300" />
        <p className="mt-5 text-xs font-black tracking-[0.25em] text-cyan-200">PAYMENT PROCESSING</p>
        <h1 className="mt-2 text-3xl font-black text-white">決済を確認しています</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">{plan.label} / ¥{plan.price.toLocaleString()}</p>
      </header>

      <section className="card p-5 text-sm leading-6 text-muted">
        <h2 className="text-xl font-black text-white">この画面の役割</h2>
        <p className="mt-2">正式版ではStripeから戻ったあと、Webhookによる支払い確認を待ちます。画面を開いただけではPremiumを解放しません。</p>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-black">Ver.179の確認用ボタン</h2>
        <p className="mt-2 text-sm text-muted">現在は{stripeMode ? "Stripeテスト接続準備中" : "画面確認モード"}です。</p>
        <div className="mt-4 grid gap-3">
          <Link className="btn btn-primary block text-center" href={`/checkout/complete?plan=${plan.count}&mode=mock`}>決済成功画面を確認</Link>
          <Link className="btn btn-soft block text-center" href={`/checkout/cancel?plan=${plan.count}`}>キャンセル画面を確認</Link>
        </div>
      </section>
    </div>
  );
}
