# QUALITY_AUDIT_CURRENT

## Version
Ver.114 recreated reset-fix-2

## Fixed in this package
- Vercel TypeScript error fixed: `Property 'collocationsOk' does not exist on type 'VerbQualityAudit'`.
- `app/admin/verb-quality/page.tsx` no longer references `row.collocationsOk` or `row.collocationCount`.
- Quality admin labels are unified to the two target categories: `基本` and `句動詞`.
- Reset protection changes from reset-fix are kept: profile image, display name, target date, learning pace and progress backup handling.

## Target verbs
- GET
- TAKE
- MAKE

## Packaging checks
- `node_modules` excluded
- `.next` excluded
- `tsconfig.tsbuildinfo` excluded
- `page (number).tsx` excluded
- patch/make/append scripts excluded
- root data/display/paymentConfig files excluded
- old version audit files excluded
- `.npmrc` uses npm official registry
- `package-lock.json` checked for internal OpenAI/caas URL: none found

## Build check
`npm ci` completed.
`npm run build` reached:
- Compiled successfully
- TypeScript finished successfully

The sandbox process was killed during Next.js page data collection with SIGTERM, which appears to be an execution-environment limit rather than a TypeScript error.
