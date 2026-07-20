# Ver.175 Profile Avatar Durable Source of Truth

## Fixed failure mode

The profile image could disappear after an application update because profile data existed in three competing places:

1. learning progress backup JSON,
2. the dedicated `user_profiles` row,
3. browser local storage.

A stale or empty read could overwrite a valid local image. The pending upload was also cleared before a second server read verified the same URL and storage path.

## Ver.175 architecture

- `user_profiles` is the only cloud source of truth for nickname and current avatar metadata.
- Supabase Storage uses immutable, versioned avatar paths.
- Previous avatar files are retained as recovery copies instead of being deleted during upload.
- `user_profile_assets` is the recovery ledger.
- The browser keeps a separate durable local image cache even after cloud upload succeeds.
- The pending upload queue is cleared only after:
  1. Storage upload succeeds,
  2. `user_profiles` is updated,
  3. the server reads `user_profiles` again,
  4. URL and path both match.
- Empty/stale profile reads are non-destructive and cannot clear a known avatar.
- Learning backup restoration never decides profile ownership.
- The profile API repairs an empty `user_profiles` avatar from the newest asset ledger entry.

## Required deployment steps

1. Run `supabase/V175_PROFILE_AVATAR_DURABLE_SOURCE_OF_TRUTH.sql` in Supabase SQL Editor.
2. Confirm Vercel environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. Deploy the complete project.
4. Log in once and upload an avatar.
5. Confirm the message says the URL and path matched after re-read.
6. Reload, log out/in, then deploy another version and confirm the avatar remains.

## Failure behavior

If network, SQL, Storage, or verification fails, the selected image remains in the durable local cache and pending queue. No previous cloud avatar is deleted.
