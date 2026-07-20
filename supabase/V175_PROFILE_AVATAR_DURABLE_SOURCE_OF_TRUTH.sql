-- Verb Master Ver.175
-- Durable profile avatar source of truth.
-- Run once in Supabase SQL Editor after V136 and V158.
-- Safe to run repeatedly.

create table if not exists public.user_profiles (
  username text primary key,
  display_name text not null,
  avatar_url text,
  avatar_path text,
  updated_at timestamptz not null default now(),
  app_version text,
  created_at timestamptz not null default now()
);

alter table public.user_profiles
  add column if not exists avatar_url text,
  add column if not exists avatar_path text,
  add column if not exists app_version text,
  add column if not exists updated_at timestamptz not null default now();

create table if not exists public.user_profile_assets (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  asset_type text not null default 'avatar',
  storage_bucket text not null default 'avatars',
  storage_path text not null,
  public_url text,
  status text not null default 'active',
  app_version text,
  uploaded_at timestamptz not null default now(),
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.user_profile_assets
  add column if not exists public_url text,
  add column if not exists status text not null default 'active',
  add column if not exists uploaded_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now();

create index if not exists idx_user_profile_assets_username_uploaded
  on public.user_profile_assets(username, uploaded_at desc);

create unique index if not exists idx_user_profile_assets_unique_path
  on public.user_profile_assets(storage_bucket, storage_path);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'avatars',
  'avatars',
  true,
  1048576,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update set
  public = true,
  file_size_limit = 1048576,
  allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp'];

-- Repair empty profile rows from the newest known avatar asset.
with latest_asset as (
  select distinct on (username)
    username,
    storage_path,
    public_url,
    uploaded_at
  from public.user_profile_assets
  where asset_type = 'avatar'
    and status in ('active', 'superseded')
    and storage_path is not null
    and public_url is not null
  order by username, uploaded_at desc
)
update public.user_profiles p
set
  avatar_path = a.storage_path,
  avatar_url = a.public_url,
  updated_at = greatest(p.updated_at, a.uploaded_at),
  app_version = 'v175-profile-avatar-durable-source-of-truth'
from latest_asset a
where p.username = a.username
  and coalesce(p.avatar_path, '') = ''
  and coalesce(p.avatar_url, '') = '';

-- Backfill a missing profile row from backup data only when no dedicated row exists.
insert into public.user_profiles (username, display_name, avatar_url, avatar_path, updated_at, app_version)
select
  b.username,
  coalesce(nullif(b.progress_json->>'displayName', ''), b.username),
  nullif(b.progress_json->>'avatarUrl', ''),
  nullif(b.progress_json->>'avatarPath', ''),
  coalesce(nullif(b.progress_json->>'profileUpdatedAt', '')::timestamptz, b.updated_at, now()),
  'v175-profile-avatar-durable-source-of-truth'
from public.user_progress_backups b
on conflict (username) do nothing;

-- Operational checks:
-- select username, display_name, avatar_path, avatar_url, updated_at from public.user_profiles order by updated_at desc;
-- select username, storage_path, status, uploaded_at from public.user_profile_assets order by uploaded_at desc;
