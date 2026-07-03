# QUALITY_AUDIT_CURRENT

## Version
Ver.133 PLAN / OFFER / SUPPORT final

## Target verbs
- PLAN
- OFFER
- SUPPORT

## Phrasal verb counts
- PLAN: 6
- OFFER: 5
- SUPPORT: 4

## Quality checklist
- Target verbs fixed: OK
- Verb order: OK（PREPARE の次：PLAN / OFFER / SUPPORT）
- Categories are 基本 / 句動詞 only: OK
- `collocations` for target verbs: empty
- Duplicate entries between 基本 and 句動詞: OK
- Basic red focus: target verb only
- Phrasal red focus: verb + preposition/adverb only
- Object text is not part of focus: OK
- Business examples: OK
- Japanese translations: OK
- Core images: OK
- Ver.120 save foundation preserved: OK
- Bottom navigation/UI fixes preserved: OK

## Build checks
- `npx tsc --noEmit`: OK
- `npm run build`: Compiled successfully / TypeScript finished / static pages generated / route list displayed
  - Note: local environment timed out after build output finalization, but Next.js output reached route list successfully.

## Old error reference check
- row.collocationsOk: none in source code
- row.collocationCount: none in source code
- row.idiomTestTotal: none in source code
- row.idiomsOk: none in source code
- row.idiomCount: none in source code

## ZIP exclusion check
- node_modules: excluded
- .next: excluded
- tsconfig.tsbuildinfo: excluded
- patch_*.py / make_*.py / append_*.js / replace_*.py: excluded
- build_v133_segment.py: excluded
- package-lock.json / .npmrc: no internal OpenAI/caas URL
