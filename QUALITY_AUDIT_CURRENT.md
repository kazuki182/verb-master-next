# QUALITY AUDIT CURRENT - Ver.121 STOP / TRY / HELP

## Scope
- Base: Ver.120 save-foundation-hotfix
- Added/rebuilt verbs: STOP / TRY / HELP
- Existing rebuilt verbs kept unchanged

## Category rules
- UI categories remain only: 基本 / 句動詞
- No separate display category for idioms, collocations, sentence patterns, or common phrases
- `collocations` remains empty for the rebuilt verbs; necessary expressions are included in 基本

## Save foundation
- `user_progress_backups` cloud-save foundation retained
- avatarDataUrl / targetDate / XP / level / streak / premium / settings / learning progress remain backup targets
- No new SQL required if `V120_CLOUD_SAVE_FOUNDATION.sql` has already been executed

## Checks performed
- Old error references checked:
  - row.collocationsOk: none
  - row.collocationCount: none
  - row.idiomTestTotal: none
  - row.idiomsOk: none
  - row.idiomCount: none
- Old UI category labels checked:
  - 熟語: none in app/components/lib UI code
  - コロケーション: none in app/components/lib UI code
  - 文型: none in app/components/lib UI code
  - よく使うフレーズ: none in app/components/lib UI code
- `npx tsc --noEmit`: Exit code 0
- `npm run build`: Compiled successfully and Finished TypeScript confirmed. Local container stopped during Next.js page-data collection, so Vercel final deployment should be checked.

## Packaging checks
- node_modules excluded
- .next excluded
- tsconfig.tsbuildinfo excluded
- patch_*.py / make_*.py / append_*.js excluded
- old QUALITY_AUDIT_Vxx / VERSION_Vxx / README_Vxx excluded
- package-lock / .npmrc internal URL checked
