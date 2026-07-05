# Verb Master Ver.145

This package fixes the relationship between login, cloud restore, and persistence.

## Main change

Authentication, restore, and save are now handled as separate states:

1. Login can succeed even if cloud restore is temporarily unavailable.
2. Cloud restore is tried when possible.
3. Cloud save is blocked if credentials are missing.
4. Empty local data must not overwrite real cloud data.
5. Local recovery snapshots remain available after ZIP updates.

## Preserved

- Ver.143 deploy-safe persistence design
- Ver.140 simple prefix search
- Ver.136 Storage avatar design
- SHOW / TELL / ASK re-audit content

## SQL

No new SQL is required for Ver.145.

If not already done, run:

- `supabase/V143_DEPLOY_SAFE_PERSISTENCE_SYSTEM.sql`
- `supabase/V136_SCALABLE_SAVE_STORAGE.sql` for avatar Storage
