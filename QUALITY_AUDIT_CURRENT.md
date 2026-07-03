# QUALITY_AUDIT_CURRENT - Verb Master Ver.122

## Target verbs
- SHOW / TELL / ASK

## Preserved base
- Ver.120 cloud save foundation using user_progress_backups
- Ver.121 STOP / TRY / HELP content
- Bottom navigation spacing fix
- Profile image and target date persistence design

## Category rule
- Visible categories remain only: 基本 / 句動詞
- No separate displayed categories for 熟語 / コロケーション / 文型 / よく使うフレーズ
- Legacy idioms wording may remain only in compatibility logic, not as a visible learning category

## Checks
- npx tsc --noEmit: PASS
- npm run build: PASS
- row.collocationsOk: none
- row.collocationCount: none
- row.idiomTestTotal: none
- row.idiomsOk: none
- row.idiomCount: none
- package-lock.json / .npmrc internal URL: none

## ZIP exclusion policy
- node_modules excluded
- .next excluded
- tsconfig.tsbuildinfo excluded
- patch_*.py / make_*.py / append_*.js excluded
- old QUALITY_AUDIT_Vxx / VERSION_Vxx / README_Vxx excluded


## Ver.122 Quality Hotfix 1 - SHOW / TELL / ASK
- Checked target verbs: SHOW / TELL / ASK.
- Removed duplicate SHOW UP from basic meanings; kept it in phrasal verbs.
- Removed weak/negative TELL ON from the phrasal set.
- Improved separated phrasal verb highlighting for examples such as show the customer around, tell products apart, and ask someone out.
- Confirmed categories remain Basic / Phrasal only on user-facing screens.
- V120 cloud save foundation remains unchanged.
