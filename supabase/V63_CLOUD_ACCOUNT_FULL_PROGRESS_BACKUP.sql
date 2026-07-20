-- Verb Master Ver.63
-- プライベート閲覧でも学習データを守るためのクラウド保存強化
-- Supabase SQL Editorで実行してください。

create table if not exists cloud_accounts (
  id uuid primary key default gen_random_uuid(),
  username text unique not null,
  password_hash text not null,
  role text default 'user',
  created_at timestamptz default now(),
  last_login_at timestamptz,
  updated_at timestamptz default now()
);

create table if not exists user_progress_backups (
  id uuid primary key default gen_random_uuid(),
  username text unique not null,
  progress_json jsonb not null default '{}'::jsonb,
  settings_json jsonb not null default '{}'::jsonb,
  app_version text default 'v63',
  updated_at timestamptz default now()
);

alter table cloud_accounts enable row level security;
alter table user_progress_backups enable row level security;

drop policy if exists "public read cloud_accounts" on cloud_accounts;
drop policy if exists "public insert cloud_accounts" on cloud_accounts;
drop policy if exists "public update cloud_accounts" on cloud_accounts;
create policy "public read cloud_accounts" on cloud_accounts for select using (true);
create policy "public insert cloud_accounts" on cloud_accounts for insert with check (true);
create policy "public update cloud_accounts" on cloud_accounts for update using (true) with check (true);

drop policy if exists "public read progress backups" on user_progress_backups;
drop policy if exists "public upsert progress backups" on user_progress_backups;
create policy "public read progress backups" on user_progress_backups for select using (true);
create policy "public upsert progress backups" on user_progress_backups for all using (true) with check (true);

create index if not exists idx_cloud_accounts_username on cloud_accounts(username);
create index if not exists idx_user_progress_backups_username on user_progress_backups(username);
