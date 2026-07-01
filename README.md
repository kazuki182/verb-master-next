# Verb Master Ver.109

## Main change
Supabase security fix for cloud account and full progress backup.

## Required Supabase SQL
Run this file in Supabase SQL Editor:

`supabase/V109_SECURE_CLOUD_RPC_RLS.sql`

This removes direct public table policies from:

- `cloud_accounts`
- `user_progress_backups`

and replaces browser table access with controlled RPC functions.

## After deploying
1. Run the SQL above in Supabase.
2. Deploy this ZIP to GitHub/Vercel.
3. Log in once again in Verb Master.
4. Check cloud save / restore.
5. Re-run Supabase Security Advisor.

## Build safety
`.npmrc` is fixed to `https://registry.npmjs.org/`.
