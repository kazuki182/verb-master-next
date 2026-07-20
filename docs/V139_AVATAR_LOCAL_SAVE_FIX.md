# Verb Master Ver.139 Avatar Local Save Fix

## Purpose

Ver.139 fixes the profile image issue reported on My Page where the selected image did not remain visible after refresh.

## Root cause fixed

`saveProgress()` saved the return value of `normalizeProgress(progress)` back into the progress map. The normalizer already returned `progress`, but it had no explicit return type. Ver.139 makes the return contract explicit and keeps the saved progress object stable.

Ver.139 also rescues pending avatar images from `verbMaster.pendingAvatarUploads` when the progress avatar is empty. This prevents a previously selected but unsent avatar from disappearing while cloud upload is waiting for re-login or server configuration.

## Design

1. Show and save the selected avatar locally first.
2. Store the same image as a pending cloud upload.
3. If cloud credentials or service role are missing, keep the local image and do not delete the old cloud avatar.
4. When the user reopens My Page, recover the pending avatar into the visible profile if progress is empty.
5. After cloud upload succeeds, replace the local data URL with the Storage public URL and clear the pending image.

## Required SQL

No new SQL for Ver.139.

If Storage was not configured, run:

```text
supabase/V136_SCALABLE_SAVE_STORAGE.sql
```

## Required Vercel variables

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

`SUPABASE_SERVICE_ROLE_KEY` must not start with `NEXT_PUBLIC_`.
