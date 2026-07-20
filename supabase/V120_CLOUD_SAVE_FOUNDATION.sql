-- =========================================================
-- Verb Master V120 Cloud Save Foundation
-- Purpose:
-- - Make cloud saving work with one reliable source of truth.
-- - Store profile image, target date, XP, level, streak, premium, settings, and learning data in user_progress_backups.
-- - Avoid failures caused by optional tables or Storage bucket settings.
--
-- Run this once in Supabase SQL Editor, then log in again in the app.
-- =========================================================

create extension if not exists pgcrypto;

create table if not exists public.cloud_accounts (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  password_hash text not null,
  role text not null default 'user',
  created_at timestamptz not null default now(),
  last_login_at timestamptz,
  updated_at timestamptz not null default now()
);

alter table public.cloud_accounts
  add column if not exists username text,
  add column if not exists password_hash text,
  add column if not exists role text default 'user',
  add column if not exists created_at timestamptz default now(),
  add column if not exists last_login_at timestamptz,
  add column if not exists updated_at timestamptz default now();

create unique index if not exists idx_cloud_accounts_username_unique
  on public.cloud_accounts(username);

create table if not exists public.user_progress_backups (
  id uuid primary key default gen_random_uuid(),
  username text,
  user_id text,
  progress_json jsonb not null default '{}'::jsonb,
  settings_json jsonb not null default '{}'::jsonb,
  app_version text,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

alter table public.user_progress_backups
  add column if not exists username text,
  add column if not exists user_id text,
  add column if not exists progress_json jsonb not null default '{}'::jsonb,
  add column if not exists settings_json jsonb not null default '{}'::jsonb,
  add column if not exists app_version text,
  add column if not exists updated_at timestamptz not null default now(),
  add column if not exists created_at timestamptz not null default now();

-- Compatibility with older V114 safety table names.
alter table public.user_progress_backups
  add column if not exists progress_snapshot jsonb not null default '{}'::jsonb,
  add column if not exists nickname text,
  add column if not exists display_name text,
  add column if not exists avatar_url text,
  add column if not exists xp integer,
  add column if not exists level integer,
  add column if not exists streak integer,
  add column if not exists premium_status text,
  add column if not exists unlocked_count integer,
  add column if not exists settings jsonb not null default '{}'::jsonb;

update public.user_progress_backups
set username = coalesce(username, user_id)
where username is null and user_id is not null;

create unique index if not exists idx_user_progress_backups_username_unique
  on public.user_progress_backups(username)
  where username is not null;

alter table public.cloud_accounts enable row level security;
alter table public.user_progress_backups enable row level security;

-- Remove direct public access. The app uses the RPC functions below.
drop policy if exists "public read cloud_accounts" on public.cloud_accounts;
drop policy if exists "public insert cloud_accounts" on public.cloud_accounts;
drop policy if exists "public update cloud_accounts" on public.cloud_accounts;
drop policy if exists "public read progress backups" on public.user_progress_backups;
drop policy if exists "public upsert progress backups" on public.user_progress_backups;
drop policy if exists "cloud_accounts_select_all" on public.cloud_accounts;
drop policy if exists "cloud_accounts_insert_all" on public.cloud_accounts;
drop policy if exists "cloud_accounts_update_all" on public.cloud_accounts;
drop policy if exists "user_progress_backups_select_all" on public.user_progress_backups;
drop policy if exists "user_progress_backups_upsert_all" on public.user_progress_backups;

create or replace function public.vm_register_cloud_account(
  p_username text,
  p_password_hash text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_username text := btrim(coalesce(p_username, ''));
  v_password_hash text := coalesce(p_password_hash, '');
  v_role text;
begin
  if v_username = '' then
    return jsonb_build_object('ok', false, 'message', 'ユーザー名を入力してください。');
  end if;

  if length(v_password_hash) < 32 then
    return jsonb_build_object('ok', false, 'message', 'パスワード情報が不正です。');
  end if;

  select role into v_role
  from public.cloud_accounts
  where username = v_username
  limit 1;

  if v_role is not null then
    return jsonb_build_object('ok', false, 'message', 'このユーザー名はすでに使われています。');
  end if;

  insert into public.cloud_accounts(username, password_hash, role, created_at, last_login_at, updated_at)
  values (v_username, v_password_hash, 'user', now(), now(), now());

  return jsonb_build_object('ok', true, 'username', v_username, 'role', 'user', 'message', 'クラウドアカウントを作成しました。');
end;
$$;

create or replace function public.vm_login_cloud_account(
  p_username text,
  p_password_hash text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_username text := btrim(coalesce(p_username, ''));
  v_role text;
begin
  select role into v_role
  from public.cloud_accounts
  where username = v_username
    and password_hash = coalesce(p_password_hash, '')
  limit 1;

  if v_role is null then
    return jsonb_build_object('ok', false, 'message', 'ユーザー名またはパスワードが違います。');
  end if;

  update public.cloud_accounts
  set last_login_at = now(), updated_at = now()
  where username = v_username;

  return jsonb_build_object('ok', true, 'username', v_username, 'role', v_role, 'message', 'クラウドログインしました。');
end;
$$;

create or replace function public.vm_upsert_progress_backup(
  p_username text,
  p_password_hash text,
  p_progress_json jsonb,
  p_settings_json jsonb,
  p_app_version text default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_username text := btrim(coalesce(p_username, ''));
  v_ok boolean;
  v_progress jsonb := coalesce(p_progress_json, '{}'::jsonb);
  v_settings jsonb := coalesce(p_settings_json, '{}'::jsonb);
begin
  select exists (
    select 1
    from public.cloud_accounts
    where username = v_username
      and password_hash = coalesce(p_password_hash, '')
  ) into v_ok;

  if not v_ok then
    return jsonb_build_object('ok', false, 'message', 'クラウド保存には再ログインが必要です。');
  end if;

  insert into public.user_progress_backups(
    username,
    user_id,
    progress_json,
    settings_json,
    app_version,
    progress_snapshot,
    settings,
    display_name,
    avatar_url,
    xp,
    level,
    streak,
    premium_status,
    unlocked_count,
    created_at,
    updated_at
  ) values (
    v_username,
    v_username,
    v_progress,
    v_settings,
    coalesce(p_app_version, 'v120'),
    v_progress,
    v_settings,
    coalesce(v_progress->>'displayName', v_username),
    coalesce(v_progress->>'avatarDataUrl', ''),
    coalesce((v_progress->>'xp')::int, 0),
    coalesce((v_progress->>'level')::int, 1),
    coalesce((v_progress->>'currentStreak')::int, 0),
    coalesce(v_progress->>'premiumSource', 'free'),
    coalesce((v_progress->>'unlockedVerbCount')::int, 0),
    now(),
    now()
  )
  on conflict (username) where username is not null do update set
    user_id = excluded.user_id,
    progress_json = excluded.progress_json,
    settings_json = excluded.settings_json,
    app_version = excluded.app_version,
    progress_snapshot = excluded.progress_snapshot,
    settings = excluded.settings,
    display_name = excluded.display_name,
    avatar_url = excluded.avatar_url,
    xp = excluded.xp,
    level = excluded.level,
    streak = excluded.streak,
    premium_status = excluded.premium_status,
    unlocked_count = excluded.unlocked_count,
    updated_at = now();

  return jsonb_build_object('ok', true, 'message', 'クラウドバックアップを保存しました。');
end;
$$;

create or replace function public.vm_fetch_progress_backup(
  p_username text,
  p_password_hash text
)
returns table (
  progress_json jsonb,
  settings_json jsonb,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_username text := btrim(coalesce(p_username, ''));
  v_ok boolean;
begin
  select exists (
    select 1
    from public.cloud_accounts
    where username = v_username
      and password_hash = coalesce(p_password_hash, '')
  ) into v_ok;

  if not v_ok then
    return;
  end if;

  return query
  select
    case
      when b.progress_json is not null and b.progress_json <> '{}'::jsonb then b.progress_json
      else coalesce(b.progress_snapshot, '{}'::jsonb)
    end as progress_json,
    case
      when b.settings_json is not null and b.settings_json <> '{}'::jsonb then b.settings_json
      else coalesce(b.settings, '{}'::jsonb)
    end as settings_json,
    b.updated_at
  from public.user_progress_backups b
  where b.username = v_username or b.user_id = v_username
  order by b.updated_at desc nulls last, b.created_at desc nulls last
  limit 1;
end;
$$;

grant execute on function public.vm_register_cloud_account(text, text) to anon, authenticated;
grant execute on function public.vm_login_cloud_account(text, text) to anon, authenticated;
grant execute on function public.vm_upsert_progress_backup(text, text, jsonb, jsonb, text) to anon, authenticated;
grant execute on function public.vm_fetch_progress_backup(text, text) to anon, authenticated;

-- Quick check after running:
-- select routine_name from information_schema.routines where routine_schema='public' and routine_name like 'vm_%' order by routine_name;
