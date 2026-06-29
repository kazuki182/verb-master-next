-- Verb Master Ver.76
-- プロフィール画像を更新後も残すためのSupabase Storage設定
-- Supabase SQL Editorで実行してください。

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'profile-images',
  'profile-images',
  true,
  5242880,
  array['image/png', 'image/jpeg', 'image/webp', 'image/gif']
)
on conflict (id) do update set
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = array['image/png', 'image/jpeg', 'image/webp', 'image/gif'];

-- 公開画像として読み込めるようにする
drop policy if exists "public read profile images" on storage.objects;
create policy "public read profile images"
on storage.objects for select
using (bucket_id = 'profile-images');

-- アプリから画像をアップロードできるようにする
drop policy if exists "public insert profile images" on storage.objects;
create policy "public insert profile images"
on storage.objects for insert
with check (bucket_id = 'profile-images');

-- 同じユーザーが画像を差し替えられるようにする
drop policy if exists "public update profile images" on storage.objects;
create policy "public update profile images"
on storage.objects for update
using (bucket_id = 'profile-images')
with check (bucket_id = 'profile-images');

-- profilesテーブルがある場合にavatar_url列を追加
alter table if exists profiles
add column if not exists avatar_url text;
