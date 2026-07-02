# Verb Master Ver.114 recreated reset-fix-2

This package is based on Ver.114 recreated reset-fix.

## Main fixes
- Fixed Vercel TypeScript error caused by old `collocationsOk` / `collocationCount` references.
- Kept categories unified as `基本` and `句動詞`.
- Kept reset protection for profile image, display name, target date and learning progress.
- Target verbs remain GET / TAKE / MAKE.

## Deploy note
Upload the contents to GitHub, then deploy on Vercel.
If Vercel still shows a previous TypeScript error, confirm that `app/admin/verb-quality/page.tsx` does not contain `collocationsOk`.
