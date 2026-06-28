-- Verb Master Ver.48 Purchase History & Restore Base
-- V46のSQL実行後に、Supabase SQL Editorで追加実行してください。

alter table if exists premium_entitlements
  add column if not exists source text default 'checkout_ready',
  add column if not exists restored_at timestamptz;

create table if not exists purchase_events (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  unlocked_verb_count integer default 0,
  purchase_total_yen integer default 0,
  plan_label text,
  source text default 'checkout_ready',
  note text,
  created_at timestamptz default now()
);

alter table purchase_events enable row level security;

drop policy if exists "public read purchase_events" on purchase_events;
drop policy if exists "public insert purchase_events" on purchase_events;
create policy "public read purchase_events" on purchase_events for select using (true);
create policy "public insert purchase_events" on purchase_events for insert with check (true);

create index if not exists purchase_events_username_created_at_idx
on purchase_events (username, created_at desc);

-- 注意：個人開発・テスト用の緩いポリシーです。
-- 本番課金接続時は、Stripe Webhook + Supabase Edge Function + Auth uidで保護してください。
