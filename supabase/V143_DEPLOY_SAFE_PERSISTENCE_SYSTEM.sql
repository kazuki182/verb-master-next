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

-- =========================================================
-- V143追加: ZIP更新・Preview URL・空ローカル上書きに強い保存RPC
-- - 既存クラウドの学習スコアが高い場合は、低い端末データで上書きしない
-- - 学習配列は可能な限り和集合にする
-- - カウンターは大きい方を採用する
-- - プロフィール/目標日は updatedAt が新しい方を採用し、空値で消さない
-- - 毎回 user_progress_backup_events に保存履歴を残す
-- =========================================================

create or replace function public.vm_jsonb_text_array_union(a jsonb, b jsonb)
returns jsonb
language sql
immutable
as $$
  select coalesce(jsonb_agg(distinct value), '[]'::jsonb)
  from (
    select jsonb_array_elements_text(coalesce(a, '[]'::jsonb)) as value
    union
    select jsonb_array_elements_text(coalesce(b, '[]'::jsonb)) as value
  ) s;
$$;

create or replace function public.vm_jsonb_longer_array(a jsonb, b jsonb)
returns jsonb
language sql
immutable
as $$
  select case
    when jsonb_array_length(coalesce(a, '[]'::jsonb)) >= jsonb_array_length(coalesce(b, '[]'::jsonb)) then coalesce(a, '[]'::jsonb)
    else coalesce(b, '[]'::jsonb)
  end;
$$;

create or replace function public.vm_safe_int(p_value text, p_default integer default 0)
returns integer
language plpgsql
immutable
as $$
begin
  return coalesce(nullif(p_value, '')::integer, p_default);
exception when others then
  return p_default;
end;
$$;

create or replace function public.vm_safe_timestamptz(p_value text)
returns timestamptz
language plpgsql
immutable
as $$
begin
  return nullif(p_value, '')::timestamptz;
exception when others then
  return null;
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
  v_incoming jsonb := coalesce(p_progress_json, '{}'::jsonb);
  v_progress jsonb := coalesce(p_progress_json, '{}'::jsonb);
  v_settings jsonb := coalesce(p_settings_json, '{}'::jsonb);
  v_existing jsonb;
  v_existing_settings jsonb;
  v_existing_score integer := 0;
  v_new_score integer := 0;
  v_final_score integer := 0;
  v_app_version text := coalesce(p_app_version, 'v143');
  v_revision bigint := 1;
  v_existing_profile_at timestamptz;
  v_new_profile_at timestamptz;
  v_existing_settings_at timestamptz;
  v_new_settings_at timestamptz;
  v_profile_use_existing boolean := false;
  v_settings_use_existing boolean := false;
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

  select progress_json, settings_json, coalesce(save_revision, 0) + 1
    into v_existing, v_existing_settings, v_revision
  from public.user_progress_backups
  where username = v_username or user_id = v_username
  order by updated_at desc nulls last
  limit 1;

  v_existing := coalesce(v_existing, '{}'::jsonb);
  v_existing_settings := coalesce(v_existing_settings, '{}'::jsonb);
  v_existing_score := public.vm_progress_score(v_existing);
  v_new_score := public.vm_progress_score(v_progress);

  -- Monotonic cloud rule: cloud data must not go backwards after a ZIP deploy.
  -- If both sides have data, merge. If incoming is lower, existing learning counters win.
  if v_existing <> '{}'::jsonb then
    v_progress := v_existing || v_progress;

    v_progress := jsonb_set(v_progress, '{xp}', to_jsonb(greatest(public.vm_safe_int(v_existing->>'xp', 0), public.vm_safe_int(v_incoming->>'xp', 0))), true);
    v_progress := jsonb_set(v_progress, '{level}', to_jsonb(greatest(public.vm_safe_int(v_existing->>'level', 1), public.vm_safe_int(v_incoming->>'level', 1))), true);
    v_progress := jsonb_set(v_progress, '{currentStreak}', to_jsonb(greatest(public.vm_safe_int(v_existing->>'currentStreak', 0), public.vm_safe_int(v_incoming->>'currentStreak', 0))), true);
    v_progress := jsonb_set(v_progress, '{longestStreak}', to_jsonb(greatest(public.vm_safe_int(v_existing->>'longestStreak', 0), public.vm_safe_int(v_incoming->>'longestStreak', 0))), true);
    v_progress := jsonb_set(v_progress, '{totalStudied}', to_jsonb(greatest(public.vm_safe_int(v_existing->>'totalStudied', 0), public.vm_safe_int(v_incoming->>'totalStudied', 0))), true);
    v_progress := jsonb_set(v_progress, '{currentRound}', to_jsonb(greatest(public.vm_safe_int(v_existing->>'currentRound', 1), public.vm_safe_int(v_incoming->>'currentRound', 1))), true);
    v_progress := jsonb_set(v_progress, '{testCorrect}', to_jsonb(greatest(public.vm_safe_int(v_existing->>'testCorrect', 0), public.vm_safe_int(v_incoming->>'testCorrect', 0))), true);
    v_progress := jsonb_set(v_progress, '{testWrong}', to_jsonb(greatest(public.vm_safe_int(v_existing->>'testWrong', 0), public.vm_safe_int(v_incoming->>'testWrong', 0))), true);
    v_progress := jsonb_set(v_progress, '{unlockedVerbCount}', to_jsonb(greatest(public.vm_safe_int(v_existing->>'unlockedVerbCount', 0), public.vm_safe_int(v_incoming->>'unlockedVerbCount', 0))), true);
    v_progress := jsonb_set(v_progress, '{purchaseTotalYen}', to_jsonb(greatest(public.vm_safe_int(v_existing->>'purchaseTotalYen', 0), public.vm_safe_int(v_incoming->>'purchaseTotalYen', 0))), true);

    v_progress := jsonb_set(v_progress, '{studiedVerbIds}', public.vm_jsonb_text_array_union(v_existing->'studiedVerbIds', v_incoming->'studiedVerbIds'), true);
    v_progress := jsonb_set(v_progress, '{weakItems}', public.vm_jsonb_text_array_union(v_existing->'weakItems', v_incoming->'weakItems'), true);
    v_progress := jsonb_set(v_progress, '{sectionClearIds}', public.vm_jsonb_text_array_union(v_existing->'sectionClearIds', v_incoming->'sectionClearIds'), true);
    v_progress := jsonb_set(v_progress, '{savedPhrases}', public.vm_jsonb_longer_array(v_existing->'savedPhrases', v_incoming->'savedPhrases'), true);

    if (v_existing ? 'reviewItems') or (v_incoming ? 'reviewItems') then
      v_progress := jsonb_set(v_progress, '{reviewItems}', coalesce(v_existing->'reviewItems', '{}'::jsonb) || coalesce(v_incoming->'reviewItems', '{}'::jsonb), true);
    end if;
    if (v_existing ? 'testSessions') or (v_incoming ? 'testSessions') then
      v_progress := jsonb_set(v_progress, '{testSessions}', coalesce(v_existing->'testSessions', '{}'::jsonb) || coalesce(v_incoming->'testSessions', '{}'::jsonb), true);
    end if;
    if (v_existing ? 'testItemStats') or (v_incoming ? 'testItemStats') then
      v_progress := jsonb_set(v_progress, '{testItemStats}', coalesce(v_existing->'testItemStats', '{}'::jsonb) || coalesce(v_incoming->'testItemStats', '{}'::jsonb), true);
    end if;
    if (v_existing ? 'weeklyStats') or (v_incoming ? 'weeklyStats') then
      v_progress := jsonb_set(v_progress, '{weeklyStats}', coalesce(v_existing->'weeklyStats', '{}'::jsonb) || coalesce(v_incoming->'weeklyStats', '{}'::jsonb), true);
    end if;

    v_existing_profile_at := public.vm_safe_timestamptz(v_existing->>'profileUpdatedAt');
    v_new_profile_at := public.vm_safe_timestamptz(v_incoming->>'profileUpdatedAt');
    v_profile_use_existing := v_existing_profile_at is not null and (v_new_profile_at is null or v_existing_profile_at > v_new_profile_at);
    if v_profile_use_existing then
      v_progress := jsonb_set(v_progress, '{displayName}', to_jsonb(coalesce(v_existing->>'displayName', v_username)), true);
      v_progress := jsonb_set(v_progress, '{avatarUrl}', to_jsonb(coalesce(v_existing->>'avatarUrl', v_existing->>'avatarDataUrl', '')), true);
      v_progress := jsonb_set(v_progress, '{avatarDataUrl}', to_jsonb(coalesce(v_existing->>'avatarDataUrl', v_existing->>'avatarUrl', '')), true);
      v_progress := jsonb_set(v_progress, '{avatarPath}', to_jsonb(coalesce(v_existing->>'avatarPath', '')), true);
      v_progress := jsonb_set(v_progress, '{avatarUpdatedAt}', to_jsonb(coalesce(v_existing->>'avatarUpdatedAt', '')), true);
      v_progress := jsonb_set(v_progress, '{avatarStorageProvider}', to_jsonb(coalesce(v_existing->>'avatarStorageProvider', 'none')), true);
      v_progress := jsonb_set(v_progress, '{profileUpdatedAt}', to_jsonb(coalesce(v_existing->>'profileUpdatedAt', '')), true);
    else
      -- New profile wins, but empty incoming values cannot delete existing values.
      v_progress := jsonb_set(v_progress, '{displayName}', to_jsonb(coalesce(nullif(v_incoming->>'displayName',''), nullif(v_existing->>'displayName',''), v_username)), true);
      v_progress := jsonb_set(v_progress, '{avatarUrl}', to_jsonb(coalesce(nullif(v_incoming->>'avatarUrl',''), nullif(v_incoming->>'avatarDataUrl',''), nullif(v_existing->>'avatarUrl',''), nullif(v_existing->>'avatarDataUrl',''), '')), true);
      v_progress := jsonb_set(v_progress, '{avatarDataUrl}', to_jsonb(coalesce(nullif(v_incoming->>'avatarDataUrl',''), nullif(v_incoming->>'avatarUrl',''), nullif(v_existing->>'avatarDataUrl',''), nullif(v_existing->>'avatarUrl',''), '')), true);
      v_progress := jsonb_set(v_progress, '{avatarPath}', to_jsonb(coalesce(nullif(v_incoming->>'avatarPath',''), nullif(v_existing->>'avatarPath',''), '')), true);
      v_progress := jsonb_set(v_progress, '{avatarUpdatedAt}', to_jsonb(coalesce(nullif(v_incoming->>'avatarUpdatedAt',''), nullif(v_existing->>'avatarUpdatedAt',''), '')), true);
      v_progress := jsonb_set(v_progress, '{avatarStorageProvider}', to_jsonb(coalesce(nullif(v_incoming->>'avatarStorageProvider',''), nullif(v_existing->>'avatarStorageProvider',''), 'none')), true);
      v_progress := jsonb_set(v_progress, '{profileUpdatedAt}', to_jsonb(coalesce(nullif(v_incoming->>'profileUpdatedAt',''), nullif(v_existing->>'profileUpdatedAt',''), now()::text)), true);
    end if;

    v_existing_settings_at := public.vm_safe_timestamptz(v_existing->>'settingsUpdatedAt');
    v_new_settings_at := public.vm_safe_timestamptz(v_incoming->>'settingsUpdatedAt');
    v_settings_use_existing := v_existing_settings_at is not null and (v_new_settings_at is null or v_existing_settings_at > v_new_settings_at);
    if v_settings_use_existing then
      if v_existing ? 'targetDate' then v_progress := jsonb_set(v_progress, '{targetDate}', to_jsonb(coalesce(v_existing->>'targetDate', '')), true); end if;
      if v_existing ? 'targetStartDate' then v_progress := jsonb_set(v_progress, '{targetStartDate}', to_jsonb(coalesce(v_existing->>'targetStartDate', '')), true); end if;
      if v_existing ? 'studyDays' then v_progress := jsonb_set(v_progress, '{studyDays}', v_existing->'studyDays', true); end if;
      if v_existing ? 'studyPace' then v_progress := jsonb_set(v_progress, '{studyPace}', v_existing->'studyPace', true); end if;
      if v_existing ? 'settingsUpdatedAt' then v_progress := jsonb_set(v_progress, '{settingsUpdatedAt}', to_jsonb(coalesce(v_existing->>'settingsUpdatedAt', '')), true); end if;
    else
      if coalesce(v_incoming->>'targetDate','') = '' and coalesce(v_existing->>'targetDate','') <> '' then v_progress := jsonb_set(v_progress, '{targetDate}', to_jsonb(v_existing->>'targetDate'), true); end if;
      if coalesce(v_incoming->>'targetStartDate','') = '' and coalesce(v_existing->>'targetStartDate','') <> '' then v_progress := jsonb_set(v_progress, '{targetStartDate}', to_jsonb(v_existing->>'targetStartDate'), true); end if;
      if not (v_incoming ? 'studyDays') and (v_existing ? 'studyDays') then v_progress := jsonb_set(v_progress, '{studyDays}', v_existing->'studyDays', true); end if;
      if not (v_incoming ? 'studyPace') and (v_existing ? 'studyPace') then v_progress := jsonb_set(v_progress, '{studyPace}', v_existing->'studyPace', true); end if;
      v_progress := jsonb_set(v_progress, '{settingsUpdatedAt}', to_jsonb(coalesce(nullif(v_incoming->>'settingsUpdatedAt',''), nullif(v_existing->>'settingsUpdatedAt',''), now()::text)), true);
    end if;
  end if;

  v_revision := coalesce(v_revision, 1);
  v_profile_updated_at := public.vm_safe_timestamptz(v_progress->>'profileUpdatedAt');
  v_settings_updated_at := public.vm_safe_timestamptz(v_progress->>'settingsUpdatedAt');
  v_final_score := public.vm_progress_score(v_progress);

  v_summary := jsonb_build_object(
    'xp', public.vm_safe_int(v_progress->>'xp', 0),
    'level', public.vm_safe_int(v_progress->>'level', 1),
    'studied', jsonb_array_length(coalesce(v_progress->'studiedVerbIds', '[]'::jsonb)),
    'totalStudied', public.vm_safe_int(v_progress->>'totalStudied', 0),
    'tests', public.vm_safe_int(v_progress->>'testCorrect', 0) + public.vm_safe_int(v_progress->>'testWrong', 0),
    'unlockedVerbCount', public.vm_safe_int(v_progress->>'unlockedVerbCount', 0),
    'displayName', coalesce(v_progress->>'displayName', v_username),
    'targetDate', coalesce(v_progress->>'targetDate', ''),
    'avatarSaved', coalesce(v_progress->>'avatarPath', '') <> '' or coalesce(v_progress->>'avatarUrl', '') <> '' or coalesce(v_progress->>'avatarDataUrl', '') <> '',
    'existingScore', v_existing_score,
    'incomingScore', v_new_score,
    'finalScore', v_final_score
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
    public.vm_safe_int(v_progress->>'xp', 0), public.vm_safe_int(v_progress->>'level', 1), public.vm_safe_int(v_progress->>'currentStreak', 0),
    coalesce(v_progress->>'premiumSource', 'free'), public.vm_safe_int(v_progress->>'unlockedVerbCount', 0), now(), now()
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
    v_username,
    case when v_existing_score > v_new_score then 'autosave_merged_cloud_wins' else 'autosave_merged' end,
    v_app_version,
    v_revision,
    v_progress,
    v_settings,
    v_summary,
    now()
  );

  return jsonb_build_object(
    'ok', true,
    'message', 'クラウドバックアップを安全保存しました。',
    'saveRevision', v_revision,
    'existingScore', v_existing_score,
    'incomingScore', v_new_score,
    'finalScore', v_final_score,
    'merged', v_existing <> '{}'::jsonb
  );
end;
$$;

grant execute on function public.vm_jsonb_text_array_union(jsonb, jsonb) to anon, authenticated;
grant execute on function public.vm_jsonb_longer_array(jsonb, jsonb) to anon, authenticated;
grant execute on function public.vm_safe_int(text, integer) to anon, authenticated;
grant execute on function public.vm_safe_timestamptz(text) to anon, authenticated;
grant execute on function public.vm_upsert_progress_backup(text, text, jsonb, jsonb, text) to anon, authenticated;
