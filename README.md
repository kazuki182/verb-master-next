# Verb Master

Current package: Ver.139 avatar local save fix.

This version focuses on fixing profile image persistence on My Page.

## Important

- No new SQL is required for Ver.139.
- If Storage has not been configured yet, run `supabase/V136_SCALABLE_SAVE_STORAGE.sql` in Supabase SQL Editor.
- Vercel must include `SUPABASE_SERVICE_ROLE_KEY` for real cloud avatar upload.
- Even if cloud upload cannot run, Ver.139 keeps the selected image locally and restores pending images on My Page.
