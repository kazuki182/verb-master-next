-- Verb Master V50 Stripe Payment Preparation
-- Supabase SQL editorで実行してください。

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

alter table premium_entitlements
  add column if not exists provider text default 'manual',
  add column if not exists stripe_session_id text,
  add column if not exists payment_status text default 'local_ready';

-- 本番Webhook接続後は、Stripeのcheckout.session.completedを検証して
-- premium_entitlements と payment_events を更新します。
