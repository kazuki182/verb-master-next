-- =========================================================
-- Verb Master V142 Update-safe Cloud Source of Truth
-- Purpose:
-- - Prevent ZIP updates / new preview URLs from showing or saving empty 0/124 progress.
-- - Treat user_progress_backups as the source of truth.
-- - Keep a rollback event every time a cloud save happens.
-- - Refuse dangerous empty overwrites when the existing cloud backup has real study data.
--
-- Run once in Supabase SQL Editor after deploying V142.
-- Safe to run multiple times.
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
  save_revision bigint not null default 0,
  profile_updated_at timestamptz,
  settings_updated_at timestamptz,
  cloud_synced_at timestamptz,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

alter table public.user_progress_backups
  add column if not exists username text,
  add column if not exists user_id text,
  add column if not exists progress_json jsonb not null default '{}'::jsonb,
  add column if not exists settings_json jsonb not null default '{}'::jsonb,
  add column if not exists app_version text,
  add column if not exists save_revision bigint not null default 0,
  add column if not exists profile_updated_at timestamptz,
  add column if not exists settings_updated_at timestamptz,
  add column if not exists cloud_synced_at timestamptz,
  add column if not exists updated_at timestamptz not null default now(),
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists progress_snapshot jsonb not null default '{}'::jsonb,
  add column if not exists nickname text,
  add column if not exists display_name text,
  add column if not exists avatar_url text,
  add column if not exists avatar_path text,
  add column if not exists avatar_updated_at timestamptz,
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

create table if not exists public.user_progress_backup_events (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  event_type text not null default 'autosave',
  app_version text,
  save_revision bigint,
  progress_json jsonb not null default '{}'::jsonb,
  settings_json jsonb not null default '{}'::jsonb,
  summary_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.user_progress_backup_events
  add column if not exists username text,
  add column if not exists event_type text not null default 'autosave',
  add column if not exists app_version text,
  add column if not exists save_revision bigint,
  add column if not exists progress_json jsonb not null default '{}'::jsonb,
  add column if not exists settings_json jsonb not null default '{}'::jsonb,
  add column if not exists summary_json jsonb not null default '{}'::jsonb,
  add column if not exists created_at timestamptz not null default now();

create index if not exists idx_user_progress_backup_events_username_created
  on public.user_progress_backup_events(username, created_at desc);

alter table public.cloud_accounts enable row level security;
alter table public.user_progress_backups enable row level security;
alter table public.user_progress_backup_events enable row level security;

-- App uses SECURITY DEFINER RPC only.
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
drop policy if exists "user_progress_backup_events_select_all" on public.user_progress_backup_events;
drop policy if exists "user_progress_backup_events_insert_all" on public.user_progress_backup_events;

create or replace function public.vm_progress_score(p_progress jsonb)
returns integer
language sql
immutable
as $$
  select
    coalesce((p_progress->>'xp')::int, 0) * 2 +
    coalesce((p_progress->>'totalStudied')::int, 0) * 20 +
    jsonb_array_length(coalesce(p_progress->'studiedVerbIds', '[]'::jsonb)) * 100 +
    coalesce((p_progress->>'testCorrect')::int, 0) * 10 +
    coalesce((p_progress->>'testWrong')::int, 0) * 6 +
    jsonb_array_length(coalesce(p_progress->'weakItems', '[]'::jsonb)) * 5 +
    jsonb_array_length(coalesce(p_progress->'savedPhrases', '[]'::jsonb)) * 8;
$$;

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
  select role into v_role from public.cloud_accounts where username = v_username limit 1;
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
  where username = v_username and password_hash = coalesce(p_password_hash, '')
  limit 1;
  if v_role is null then
    return jsonb_build_object('ok', false, 'message', 'クラウドアカウントが見つからないか、パスワードが違います。ローカルだけではデータを守れないためログインを止めました。');
  end if;
  update public.cloud_accounts set last_login_at = now(), updated_at = now() where username = v_username;
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
  v_existing jsonb;
  v_existing_score integer := 0;
  v_new_score integer := 0;
  v_app_version text := coalesce(p_app_version, 'v142');
  v_revision bigint := 1;
  v_profile_updated_at timestamptz;
  v_settings_updated_at timestamptz;
  v_summary jsonb;
begin
  select exists (
    select 1 from public.cloud_accounts
    where username = v_username and password_hash = coalesce(p_password_hash, '')
  ) into v_ok;
  if not v_ok then
    return jsonb_build_object('ok', false, 'message', 'クラウド保存には再ログインが必要です。');
  end if;

  select progress_json, coalesce(save_revision, 0) + 1
    into v_existing, v_revision
  from public.user_progress_backups
  where username = v_username or user_id = v_username
  order by updated_at desc nulls last
  limit 1;

  v_existing_score := public.vm_progress_score(coalesce(v_existing, '{}'::jsonb));
  v_new_score := public.vm_progress_score(v_progress);

  -- Critical guard: never let a fresh/empty local cache overwrite a real cloud backup.
  if v_existing_score > 0 and v_new_score <= 0 then
    return jsonb_build_object(
      'ok', true,
      'skipped', true,
      'message', '空の端末データによる上書きを防止しました。先にクラウド復元してください。',
      'existingScore', v_existing_score,
      'newScore', v_new_score
    );
  end if;

  v_revision := coalesce(v_revision, 1);
  v_profile_updated_at := nullif(v_progress->>'profileUpdatedAt', '')::timestamptz;
  v_settings_updated_at := nullif(v_progress->>'settingsUpdatedAt', '')::timestamptz;
  v_summary := jsonb_build_object(
    'xp', coalesce((v_progress->>'xp')::int, 0),
    'level', coalesce((v_progress->>'level')::int, 1),
    'studied', jsonb_array_length(coalesce(v_progress->'studiedVerbIds', '[]'::jsonb)),
    'totalStudied', coalesce((v_progress->>'totalStudied')::int, 0),
    'tests', coalesce((v_progress->>'testCorrect')::int, 0) + coalesce((v_progress->>'testWrong')::int, 0),
    'unlockedVerbCount', coalesce((v_progress->>'unlockedVerbCount')::int, 0),
    'displayName', coalesce(v_progress->>'displayName', v_username),
    'targetDate', coalesce(v_progress->>'targetDate', ''),
    'avatarSaved', coalesce(v_progress->>'avatarPath', '') <> '' or coalesce(v_progress->>'avatarUrl', '') <> '' or coalesce(v_progress->>'avatarDataUrl', '') <> ''
  );

  insert into public.user_progress_backups(
    username, user_id, progress_json, settings_json, app_version, save_revision,
    profile_updated_at, settings_updated_at, cloud_synced_at,
    progress_snapshot, settings, display_name, nickname, avatar_url, avatar_path, avatar_updated_at,
    xp, level, streak, premium_status, unlocked_count, created_at, updated_at
  ) values (
    v_username, v_username, v_progress, v_settings, v_app_version, v_revision,
    v_profile_updated_at, v_settings_updated_at, now(),
    v_progress, v_settings, coalesce(v_progress->>'displayName', v_username), coalesce(v_progress->>'displayName', v_username),
    coalesce(v_progress->>'avatarUrl', v_progress->>'avatarDataUrl', ''), coalesce(v_progress->>'avatarPath', ''), v_profile_updated_at,
    coalesce((v_progress->>'xp')::int, 0), coalesce((v_progress->>'level')::int, 1), coalesce((v_progress->>'currentStreak')::int, 0),
    coalesce(v_progress->>'premiumSource', 'free'), coalesce((v_progress->>'unlockedVerbCount')::int, 0), now(), now()
  )
  on conflict (username) where username is not null do update set
    user_id = excluded.user_id,
    progress_json = excluded.progress_json,
    settings_json = excluded.settings_json,
    app_version = excluded.app_version,
    save_revision = excluded.save_revision,
    profile_updated_at = excluded.profile_updated_at,
    settings_updated_at = excluded.settings_updated_at,
    cloud_synced_at = now(),
    progress_snapshot = excluded.progress_snapshot,
    settings = excluded.settings,
    display_name = excluded.display_name,
    nickname = excluded.nickname,
    avatar_url = excluded.avatar_url,
    avatar_path = excluded.avatar_path,
    avatar_updated_at = excluded.avatar_updated_at,
    xp = excluded.xp,
    level = excluded.level,
    streak = excluded.streak,
    premium_status = excluded.premium_status,
    unlocked_count = excluded.unlocked_count,
    updated_at = now();

  insert into public.user_progress_backup_events(
    username, event_type, app_version, save_revision, progress_json, settings_json, summary_json, created_at
  ) values (
    v_username, 'autosave', v_app_version, v_revision, v_progress, v_settings, v_summary, now()
  );

  return jsonb_build_object('ok', true, 'message', 'クラウドバックアップを保存しました。', 'saveRevision', v_revision, 'score', v_new_score);
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
    select 1 from public.cloud_accounts
    where username = v_username and password_hash = coalesce(p_password_hash, '')
  ) into v_ok;
  if not v_ok then
    return;
  end if;
  return query
  select b.progress_json, b.settings_json, b.updated_at
  from public.user_progress_backups b
  where b.username = v_username or b.user_id = v_username
  order by b.updated_at desc nulls last
  limit 1;
end;
$$;

grant execute on function public.vm_register_cloud_account(text, text) to anon, authenticated;
grant execute on function public.vm_login_cloud_account(text, text) to anon, authenticated;
grant execute on function public.vm_upsert_progress_backup(text, text, jsonb, jsonb, text) to anon, authenticated;
grant execute on function public.vm_fetch_progress_backup(text, text) to anon, authenticated;
grant execute on function public.vm_progress_score(jsonb) to anon, authenticated;
