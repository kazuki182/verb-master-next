-- Verb Master Ver.51 Stripe Webhook & Payment Sync
-- Stripe未登録でもアプリは仮購入モードで動作します。
-- Stripe登録後、本番決済のWebhook反映に必要な列とテーブルを整えます。

alter table if exists premium_entitlements
  add column if not exists provider text default 'manual',
  add column if not exists stripe_session_id text,
  add column if not exists payment_status text default 'local_ready',
  add column if not exists source text default 'checkout_ready';

create table if not exists payment_events (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  provider text not null default 'stripe',
  mode text not null default 'payment',
  plan_id text not null,
  unlocked_verb_count integer not null,
  amount_yen integer not null,
  status text not null default 'created',
  stripe_session_id text,
  stripe_payment_intent_id text,
  raw_event jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists payment_events_username_idx on payment_events(username);
create index if not exists payment_events_session_idx on payment_events(stripe_session_id);
create index if not exists payment_events_status_idx on payment_events(status);

alter table payment_events enable row level security;

drop policy if exists "public read payment_events" on payment_events;
create policy "public read payment_events" on payment_events for select using (true);

-- 本番ではWebhook/APIからSUPABASE_SERVICE_ROLE_KEYでinsert/upsertします。
-- Vercel環境変数に以下を設定します。
-- STRIPE_SECRET_KEY
-- STRIPE_WEBHOOK_SECRET
-- SUPABASE_SERVICE_ROLE_KEY
-- NEXT_PUBLIC_PAYMENT_MODE=stripe
-- NEXT_PUBLIC_STRIPE_PRICE_30 / 60 / 90 / 120
