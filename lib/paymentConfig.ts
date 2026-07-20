export type PaymentMode = "mock" | "stripe";

export type PaymentPlan = {
  count: 30 | 60 | 90 | 124;
  planId: "verb_30" | "verb_60" | "verb_90" | "verb_124";
  shortName: "Starter" | "Standard" | "Advanced" | "Complete";
  label: string;
  price: number;
  cumulativePrice: number;
  range: string;
  addRange: string;
  recommend: string;
  stripePriceEnvName: string;
  stripePriceId?: string;
};

export const PAYMENT_PLANS: PaymentPlan[] = [
  {
    count: 30,
    planId: "verb_30",
    shortName: "Starter",
    label: "Starter Pack",
    price: 500,
    cumulativePrice: 500,
    range: "1〜30番",
    addRange: "4〜30番",
    recommend: "無料3動詞の続きから、基本30動詞まで解放します。",
    stripePriceEnvName: "NEXT_PUBLIC_STRIPE_PRICE_30",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_30,
  },
  {
    count: 60,
    planId: "verb_60",
    shortName: "Standard",
    label: "Standard Pack",
    price: 500,
    cumulativePrice: 1000,
    range: "1〜60番",
    addRange: "31〜60番",
    recommend: "仕事と日常で使う基本動詞を60番まで追加解放します。",
    stripePriceEnvName: "NEXT_PUBLIC_STRIPE_PRICE_60",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_60,
  },
  {
    count: 90,
    planId: "verb_90",
    shortName: "Advanced",
    label: "Advanced Pack",
    price: 500,
    cumulativePrice: 1500,
    range: "1〜90番",
    addRange: "61〜90番",
    recommend: "主要動詞を90番まで追加解放します。",
    stripePriceEnvName: "NEXT_PUBLIC_STRIPE_PRICE_90",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_90,
  },
  {
    count: 124,
    planId: "verb_124",
    shortName: "Complete",
    label: "Complete Pack",
    price: 500,
    cumulativePrice: 2000,
    range: "1〜124番",
    addRange: "91〜124番",
    recommend: "残りの動詞をすべて解放し、124動詞を学べる完成パックです。",
    stripePriceEnvName: "NEXT_PUBLIC_STRIPE_PRICE_124",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_124 || process.env.NEXT_PUBLIC_STRIPE_PRICE_120,
  },
];

export function getPaymentMode(): PaymentMode {
  return process.env.NEXT_PUBLIC_PAYMENT_MODE === "mock" ? "mock" : "stripe";
}

export function getPaymentModeLabel(mode = getPaymentMode()) {
  return mode === "stripe" ? "Stripe決済" : "画面確認モード";
}

export function getPaymentPlan(count: number) {
  return PAYMENT_PLANS.find((item) => item.count === count) || PAYMENT_PLANS[0];
}

export function getNextPaymentPlan(unlocked: number) {
  return PAYMENT_PLANS.find((plan) => plan.count > unlocked) || null;
}

export function isSequentialPurchaseAllowed(unlocked: number, targetCount: number) {
  return getNextPaymentPlan(unlocked)?.count === targetCount;
}

export function getPaymentReadiness() {
  const mode = getPaymentMode();
  const missingPublicPriceIds = PAYMENT_PLANS
    .filter((plan) => !plan.stripePriceId)
    .map((plan) => `${plan.label}: ${plan.stripePriceEnvName}`);

  return {
    mode,
    modeLabel: getPaymentModeLabel(mode),
    publishableKeyReady: Boolean(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY),
    priceIdsReady: missingPublicPriceIds.length === 0,
    missingPublicPriceIds,
    canUseMockCheckout: true,
    canTryStripeCheckout: mode === "stripe",
  };
}
