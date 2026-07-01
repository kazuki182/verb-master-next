# Verb Master Ver.114 REBUILD

This version rebuilds Ver.114 from the beginning of the verb list.

## Main changes

- Rebuilt GET / TAKE / MAKE quality data.
- Unified user-facing learning categories into only:
  - 基本
  - 句動詞
- Removed separate 熟語 UI. Common expressions are now included under 基本.
- Updated learning flow, learning progress, tests, phrase-book labels, and admin checks to follow the two-category rule.
- Removed the Home title top-right icon.

## Compatibility

Old `/idioms` routes still exist, but they redirect to the basic page/test so saved old links do not break.

## Safety notes

Before uploading to GitHub, delete stale root-level files from the repository if they still exist:
- page (number).tsx
- root data.ts/display.ts/paymentConfig.ts
- old VERSION_Vxx files
- old QUALITY_AUDIT_Vxx files
- old SQL files outside `/supabase`
- patch/make/append scripts
- tsconfig.tsbuildinfo

## Confirmed locally

- `npx tsc --noEmit` passed.
- `next build` compiled successfully and TypeScript passed, but static page collection did not complete within the local execution time limit.
