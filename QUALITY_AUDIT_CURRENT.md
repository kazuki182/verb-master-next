# QUALITY_AUDIT_CURRENT

## Version
Ver.117 WATCH / HEAR / LISTEN 追加版

## Target verbs
- Existing rebuilt verbs maintained: GET / TAKE / MAKE / GIVE / HAVE / GO / COME / PUT / KEEP / FIND / SEE / LOOK
- Newly rebuilt in this version: WATCH / HEAR / LISTEN

## Scope
- Added/rebuilt WATCH / HEAR / LISTEN using the two-section rule.
- UI category remains only: 基本 / 句動詞.
- No separate visible categories for 熟語 / コロケーション / 文型 / 表現 / よく使うフレーズ.
- Profile image persistence fix maintained.
- Target date persistence fix maintained.
- Bottom navigation spacing fix maintained.

## Verb quality notes
- WATCH: focused on observing moving/changing things such as progress, numbers, schedules, videos, risks, and work steps.
- HEAR: focused on information/sound entering the ear, including hear about, hear from, hear that, feedback, and知覚動詞 usage.
- LISTEN: focused on active attention, especially listen to customers, explanations, advice, and listen for specific sounds/issues.
- Phrasal verbs were not padded unnaturally to 10 when they were weak for business/daily use.

## Quality checks
- TypeScript: `npx tsc --noEmit` completed with exit code 0.
- Next.js build: `npm run build` completed with exit code 0.
- Build log included `Compiled successfully`, `Finished TypeScript`, static pages generation complete, and route list output.

## Old field reference checks
Checked for old Vercel-blocking references in app/components/lib source files:
- `row.collocationsOk`: not found
- `row.collocationCount`: not found
- `row.idiomTestTotal`: not found
- `row.idiomsOk`: not found
- `row.idiomCount`: not found

## Zip exclusion checks
Excluded from ZIP:
- node_modules
- .next
- tsconfig.tsbuildinfo
- patch_*.py
- make_*.py
- append_*.js
- old QUALITY_AUDIT_Vxx / VERSION_Vxx / README_Vxx files

## Notes
- `idioms` remains only as a backward-compatible saved-data key in code comments/types. It is mapped into 基本 and must not appear as a separate UI category.
- The target verbs were not changed during this work: WATCH / HEAR / LISTEN only.
