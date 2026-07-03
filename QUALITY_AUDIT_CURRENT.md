# QUALITY_AUDIT_CURRENT

## Version
- Verb Master Ver.123 CALL / RUN / LEAVE final

## Target verbs
- CALL
- RUN
- LEAVE

## Quality policy applied
- No duplicate expressions between Basic and Phrasal Verb categories.
- Phrasal verbs are placed in the Phrasal Verb category.
- Basic examples highlight only the target verb.
- Phrasal examples highlight only the verb + preposition/adverb portion.
- Objects are not included in red highlight.
- Separable phrasal verbs are supported by highlighting phrasal parts in order.

## Phrasal verb counts
- CALL: 10
  - call back / call off / call for / call out / call in / call on / call up / call around / call upon / call ahead
- RUN: 10
  - run into / run out of / run by / run through / run across / run over / run up against / run after / run away from / run down
- LEAVE: 8
  - leave out / leave behind / leave off / leave for / leave aside / leave alone / leave up to / leave with

## Removed or avoided
- Removed weak CALL candidates such as call through and call together.
- Removed weak LEAVE candidate leave over.
- Avoided duplicating call back / call off / run into / leave out etc. in Basic.

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
