-- Verb Master Ver.46 Supabase Profile & Premium Base
-- Supabase SQL Editorで実行してください。

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  username text unique not null,
  display_name text,
  avatar_url text,
  notifications_enabled boolean default true,
  role text default 'user',
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  last_login_at timestamptz
);

create table if not exists user_stats (
  id uuid primary key default gen_random_uuid(),
  username text unique not null,
  xp integer default 0,
  level integer default 1,
  current_streak integer default 0,
  longest_streak integer default 0,
  total_studied integer default 0,
  current_round integer default 1,
  studied_verb_ids text[] default '{}',
  test_correct integer default 0,
  test_wrong integer default 0,
  weak_items text[] default '{}',
  saved_phrase_count integer default 0,
  review_item_count integer default 0,
  updated_at timestamptz default now()
);

create table if not exists premium_entitlements (
  id uuid primary key default gen_random_uuid(),
  username text unique not null,
  plan text default 'free',
  unlocked_verb_count integer default 0,
  purchase_total_yen integer default 0,
  lyrics_english_access boolean default false,
  updated_at timestamptz default now()
);

create table if not exists learning_settings (
  id uuid primary key default gen_random_uuid(),
  username text unique not null,
  voice_gender text default 'female',
  voice_lang text default 'en-US',
  notifications_enabled boolean default true,
  updated_at timestamptz default now()
);

insert into storage.buckets (id, name, public)
values ('profile-images', 'profile-images', true)
on conflict (id) do nothing;

-- 個人開発・テスト用の緩いポリシーです。
-- 本番課金前にはSupabase Authのuidベースに強化してください。
alter table profiles enable row level security;
alter table user_stats enable row level security;
alter table premium_entitlements enable row level security;
alter table learning_settings enable row level security;

drop policy if exists "public read profiles" on profiles;
drop policy if exists "public upsert profiles" on profiles;
create policy "public read profiles" on profiles for select using (true);
create policy "public upsert profiles" on profiles for all using (true) with check (true);

drop policy if exists "public read user_stats" on user_stats;
drop policy if exists "public upsert user_stats" on user_stats;
create policy "public read user_stats" on user_stats for select using (true);
create policy "public upsert user_stats" on user_stats for all using (true) with check (true);

drop policy if exists "public read premium" on premium_entitlements;
drop policy if exists "public upsert premium" on premium_entitlements;
create policy "public read premium" on premium_entitlements for select using (true);
create policy "public upsert premium" on premium_entitlements for all using (true) with check (true);

drop policy if exists "public read learning_settings" on learning_settings;
drop policy if exists "public upsert learning_settings" on learning_settings;
create policy "public read learning_settings" on learning_settings for select using (true);
create policy "public upsert learning_settings" on learning_settings for all using (true) with check (true);

drop policy if exists "public read profile images" on storage.objects;
drop policy if exists "public upload profile images" on storage.objects;
drop policy if exists "public update profile images" on storage.objects;
create policy "public read profile images" on storage.objects
for select using (bucket_id = 'profile-images');

create policy "public upload profile images" on storage.objects
for insert with check (bucket_id = 'profile-images');

create policy "public update profile images" on storage.objects
for update using (bucket_id = 'profile-images') with check (bucket_id = 'profile-images');
