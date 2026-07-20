-- =========================================================
-- Verb Master V136 Scalable Save / Storage Foundation
-- Purpose:
-- - Keep text/user progress in user_progress_backups.
-- - Move new profile images to Supabase Storage avatars bucket.
-- - Store only avatarPath / avatarUrl in progress_json.
-- - Delete old avatar file only after new upload + DB update succeeds.
-- - Keep profile asset history for operation checks.
--
-- Required Vercel env for image API:
-- - NEXT_PUBLIC_SUPABASE_URL
-- - NEXT_PUBLIC_SUPABASE_ANON_KEY
-- - SUPABASE_SERVICE_ROLE_KEY
--
-- Run once in Supabase SQL Editor after deploying V136.
-- Safe to run multiple times.
-- =========================================================

create extension if not exists pgcrypto;

-- 1) Keep the V135 save foundation compatible.
alter table public.user_progress_backups
  add column if not exists avatar_path text,
  add column if not exists avatar_url text,
  add column if not exists avatar_updated_at timestamptz;

-- 2) Avatar asset ledger for operation / cleanup checks.
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
  add column if not exists username text,
  add column if not exists asset_type text not null default 'avatar',
  add column if not exists storage_bucket text not null default 'avatars',
  add column if not exists storage_path text,
  add column if not exists public_url text,
  add column if not exists status text not null default 'active',
  add column if not exists app_version text,
  add column if not exists uploaded_at timestamptz not null default now(),
  add column if not exists deleted_at timestamptz,
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now();

create index if not exists idx_user_profile_assets_username_uploaded
  on public.user_profile_assets(username, uploaded_at desc);

create index if not exists idx_user_profile_assets_storage_path
  on public.user_profile_assets(storage_path);

alter table public.user_profile_assets enable row level security;

drop policy if exists "user_profile_assets_select_all" on public.user_profile_assets;
drop policy if exists "user_profile_assets_insert_all" on public.user_profile_assets;
drop policy if exists "user_profile_assets_update_all" on public.user_profile_assets;
-- Do not add public write policy. The Next.js server API writes using service_role.

-- 3) Storage bucket for avatars.
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

-- Public read only. Upload/delete is handled by server-side service_role.
drop policy if exists "avatars_public_read" on storage.objects;
drop policy if exists "avatars_public_insert" on storage.objects;
drop policy if exists "avatars_public_update" on storage.objects;
drop policy if exists "avatars_public_delete" on storage.objects;

create policy "avatars_public_read"
  on storage.objects
  for select
  using (bucket_id = 'avatars');

-- 4) Keep avatar columns synced from progress_json for support checks.
create or replace function public.vm_sync_avatar_backup_columns()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_avatar_updated text;
begin
  new.avatar_path := coalesce(new.progress_json->>'avatarPath', new.avatar_path);
  new.avatar_url := coalesce(new.progress_json->>'avatarUrl', new.progress_json->>'avatarDataUrl', new.avatar_url);
  v_avatar_updated := nullif(new.progress_json->>'avatarUpdatedAt', '');
  if v_avatar_updated is not null then
    begin
      new.avatar_updated_at := v_avatar_updated::timestamptz;
    exception when others then
      new.avatar_updated_at := new.avatar_updated_at;
    end;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_vm_sync_avatar_backup_columns on public.user_progress_backups;
create trigger trg_vm_sync_avatar_backup_columns
before insert or update of progress_json on public.user_progress_backups
for each row execute function public.vm_sync_avatar_backup_columns();

-- 5) Backfill avatar columns from existing rows.
update public.user_progress_backups
set
  avatar_path = coalesce(progress_json->>'avatarPath', avatar_path),
  avatar_url = coalesce(progress_json->>'avatarUrl', progress_json->>'avatarDataUrl', avatar_url),
  avatar_updated_at = case
    when nullif(progress_json->>'avatarUpdatedAt', '') is not null
    then nullif(progress_json->>'avatarUpdatedAt', '')::timestamptz
    else avatar_updated_at
  end
where progress_json is not null;

-- Operation checks after running:
-- select id, public, file_size_limit, allowed_mime_types from storage.buckets where id = 'avatars';
-- select username, avatar_path, avatar_url, updated_at from public.user_progress_backups order by updated_at desc limit 10;
-- select username, storage_path, status, uploaded_at, deleted_at from public.user_profile_assets order by uploaded_at desc limit 10;
