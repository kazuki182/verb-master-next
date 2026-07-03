# Verb Master Ver.123 CALL / RUN / LEAVE final

This package adds and finalizes CALL / RUN / LEAVE based on the Ver.120 cloud-save foundation and Ver.122 quality hotfix.

## Target verbs
- CALL
- RUN
- LEAVE

## Phrasal verb counts
- CALL: 10
- RUN: 10
- LEAVE: 8

## Main quality rules
- Categories remain Basic and Phrasal Verbs only.
- No duplicate expressions between Basic and Phrasal Verbs.
- Basic examples highlight only the target verb.
- Phrasal examples highlight only the verb + preposition/adverb portion.
- Objects are not highlighted.

## Save foundation
The Ver.120 `user_progress_backups` save foundation is preserved.
No new SQL is required if `supabase/V120_CLOUD_SAVE_FOUNDATION.sql` has already been run.

## Checks
- `npx tsc --noEmit`: passed
- `npm run build`: passed
