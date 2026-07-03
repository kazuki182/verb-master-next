# QUALITY_AUDIT_CURRENT

## Version
- Verb Master Ver.125 HOLD / SET / CHANGE final

## Target verbs
- HOLD
- SET
- CHANGE

## Quality policy applied
- No duplicate expressions between Basic and Phrasal Verb categories.
- Phrasal verbs are placed in the Phrasal Verb category.
- Basic examples highlight only the target verb.
- Phrasal examples highlight only the verb + preposition/adverb portion.
- Objects are not included in red highlight.
- Separable phrasal verbs are supported by highlighting phrasal parts in order.

## Phrasal verb counts
- HOLD: 10
  - hold on / hold off / hold back / hold up / hold onto / hold out / hold together / hold down / hold against / hold over
- SET: 10
  - set up / set aside / set back / set out / set off / set down / set in / set about / set apart / set against
- CHANGE: 8
  - change into / change from / change over / change back / change around / change out / change up / change to

## Fixes made before ZIP
- Removed old collocation-style category content for HOLD / SET / CHANGE by keeping collocations empty.
- Moved set up and other phrasal-style expressions to Phrasal Verbs.
- Changed all Basic example focus values to the verb only: hold / held / holds, set, change / changed.
- Changed all Phrasal example focus values to verb + particle/preposition only.
- Removed object highlighting from Basic and Phrasal examples.
- Kept CHANGE at 8 phrasal verbs to avoid unnatural padding.

## Build checks
- npx tsc --noEmit: OK
- npm run build: OK, exit code 0

## Legacy error reference check
- row.collocationsOk: none in source code
- row.collocationCount: none in source code
- row.idiomTestTotal: none in source code
- row.idiomsOk: none in source code
- row.idiomCount: none in source code

## Save foundation
- Ver.120 user_progress_backups foundation preserved.
- avatarDataUrl / targetDate / XP / level / streak / premiumStatus / settings are not removed.
- No additional SQL required if V120_CLOUD_SAVE_FOUNDATION.sql was already applied.

## ZIP exclusion policy
- node_modules excluded
- .next excluded
- tsconfig.tsbuildinfo excluded
- patch_*.py / make_*.py / append_*.js excluded
- old QUALITY_AUDIT_Vxx / VERSION_Vxx / README_Vxx excluded
