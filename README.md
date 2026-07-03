# Verb Master Ver.125 HOLD / SET / CHANGE final

This package adds and finalizes HOLD / SET / CHANGE based on the Ver.120 cloud-save foundation and Ver.124 final.

## Target verbs
- HOLD
- SET
- CHANGE

## Phrasal verb counts
- HOLD: 10
- SET: 10
- CHANGE: 8

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
