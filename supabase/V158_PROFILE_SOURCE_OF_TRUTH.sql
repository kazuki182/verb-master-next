-- Verb Master Ver.158
-- Profile source of truth: nickname and avatar are stored independently from learning progress.

create table if not exists public.user_profiles (
  username text primary key,
  display_name text not null,
  avatar_url text,
  avatar_path text,
  updated_at timestamptz not null default now(),
  app_version text,
  created_at timestamptz not null default now()
);

create index if not exists user_profiles_updated_at_idx
  on public.user_profiles (updated_at desc);

alter table public.user_profiles enable row level security;
-- Browser clients do not access this table directly. The Next.js server API uses service_role.

insert into public.user_profiles (username, display_name, avatar_url, avatar_path, updated_at, app_version)
select
  username,
  coalesce(nullif(progress_json->>'displayName', ''), username),
  nullif(progress_json->>'avatarUrl', ''),
  nullif(progress_json->>'avatarPath', ''),
  coalesce(nullif(progress_json->>'profileUpdatedAt', '')::timestamptz, updated_at, now()),
  'v158-profile-source-of-truth'
from public.user_progress_backups
on conflict (username) do nothing;
