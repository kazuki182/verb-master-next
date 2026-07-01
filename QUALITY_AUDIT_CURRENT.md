# QUALITY_AUDIT_CURRENT - Ver.109

## Scope
Supabase security fix for cloud account and progress backup tables.

## Checks
- Removed browser-side direct select of cloud_accounts.password_hash.
- Added RPC-based cloud account register/login.
- Added RPC-based progress backup save/restore.
- Added Supabase SQL migration: supabase/V109_SECURE_CLOUD_RPC_RLS.sql.
- RLS cleanup is designed to remove `RLS Policy Always True` and `Multiple Permissive Policies` warnings for cloud_accounts and user_progress_backups.
- package-lock / .npmrc checked for internal OpenAI/caas registry URLs.

## Important manual step
Run `supabase/V109_SECURE_CLOUD_RPC_RLS.sql` in Supabase SQL Editor before relying on Ver.109 cloud sync.
Existing users may need to log in again once.


## Ver.110 Build Fix
- Added safe root data.ts placeholder to overwrite stale JSX data.ts causing TypeScript error.
- Real verb data remains in lib/data.ts.
