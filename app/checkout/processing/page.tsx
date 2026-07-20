"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getCurrentUsername } from "@/lib/account";
import { getPaymentMode, getPaymentPlan } from "@/lib/paymentConfig";

function planFromQuery() {
  if (typeof window === "undefined") return 30;
  const value = Number(new URLSearchParams(window.location.search).get("plan") || "30");
  return [30, 60, 90, 124].includes(value) ? value : 30;
}

export default function CheckoutProcessingPage() {
  const [planCount, setPlanCount] = useState(30);
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);
  const plan = useMemo(() => getPaymentPlan(planCount), [planCount]);
  const stripeMode = getPaymentMode() === "stripe";

  useEffect(() => {
    const target = planFromQuery();
    setPlanCount(target);
    if (!stripeMode || started) return;
    setStarted(true);
    const username = getCurrentUsername();
    if (!username) {
      window.location.href = "/login";
      return;
    }
    fetch("/api/stripe/create-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan: target, username }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok || !data?.url) throw new Error(data?.message || "決済画面を開始できませんでした。");
        window.location.href = data.url;
      })
      .catch((reason) => setError(reason instanceof Error ? reason.message : "決済画面を開始できませんでした。"));
  }, [started, stripeMode]);

  return (
    <div className="space-y-5 pb-24">
      <header className="digital-card p-7 text-center">
        {!error && <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-cyan-200/30 border-t-cyan-300" />}
        <p className="mt-5 text-xs font-black tracking-[0.25em] text-cyan-200">PAYMENT PROCESSING</p>
        <h1 className="mt-2 text-3xl font-black text-white">{error ? "決済を開始できませんでした" : "決済画面を準備しています"}</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">{plan.label} / ¥{plan.price.toLocaleString()}</p>
      </header>

      {error ? (
        <section className="card p-5">
          <p className="text-sm leading-6 text-rose-200">{error}</p>
          <div className="mt-4 grid gap-3">
            <button className="btn btn-primary" onClick={() => window.location.reload()}>もう一度試す</button>
            <Link className="btn btn-soft block text-center" href="/upgrade">料金ページへ戻る</Link>
          </div>
        </section>
      ) : (
        <section className="card p-5 text-sm leading-6 text-muted">
          <h2 className="text-xl font-black text-white">カード・PayPayに対応</h2>
          <p className="mt-2">Stripeの安全な決済画面へ移動します。支払い完了はWebhookで確認し、確認後にPremiumを解放します。</p>
        </section>
      )}
    </div>
  );
}
