# Verb Master Ver.180 Stripe / PayPay 本決済

## 実装内容
- Stripe Checkoutへ自動遷移
- クレジットカード・PayPay（Stripeで有効化した決済方法）
- Webhook署名検証後のみPremium解放
- 支払い未完了時は解放しない
- Stripe Session IDによる二重処理防止
- Step 4を124動詞に統一
- 管理者アカウントでは購入導線を非表示

## Vercel環境変数
- NEXT_PUBLIC_PAYMENT_MODE=stripe
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET
- NEXT_PUBLIC_STRIPE_PRICE_30
- NEXT_PUBLIC_STRIPE_PRICE_60
- NEXT_PUBLIC_STRIPE_PRICE_90
- NEXT_PUBLIC_STRIPE_PRICE_124
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

## Stripe設定
Stripe DashboardのPayment methodsでCardとPayPayを有効化する。Checkoutはautomatic_payment_methodsを使用する。
Webhook URL: /api/stripe/webhook
対象イベント: checkout.session.completed, checkout.session.expired, payment_intent.payment_failed, charge.refunded
