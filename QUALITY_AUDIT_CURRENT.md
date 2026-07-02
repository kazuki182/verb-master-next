# QUALITY_AUDIT_CURRENT

## Version
Ver.116 FIND / SEE / LOOK 追加版

## Target verbs
- Existing rebuilt verbs maintained: GET / TAKE / MAKE / GIVE / HAVE / GO / COME / PUT / KEEP
- Newly rebuilt in this version: FIND / SEE / LOOK

## Scope
- Added/rebuilt FIND / SEE / LOOK using the two-section rule.
- UI category remains only: 基本 / 句動詞.
- No separate visible categories for 熟語 / コロケーション / 文型 / 表現 / よく使うフレーズ.
- Profile image persistence fix maintained.
- Target date persistence fix maintained.
- Bottom navigation spacing fix maintained.

## Quality checks
- TypeScript: `npx tsc --noEmit` completed with exit code 0.
- Next.js build: reached `Compiled successfully`, `Finished TypeScript`, static pages generation complete, and route list output.
- Build process did not return an exit code before this environment timeout, but no TypeScript or compilation error appeared in the build log.

## Old field reference checks
Checked for old Vercel-blocking references:
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
- FIND has one natural phrasal verb: find out. It was not padded unnaturally to 10.
- SEE has four practical phrasal/prepositional expressions. It was not padded unnaturally to 10.
- LOOK has ten practical phrasal expressions.
