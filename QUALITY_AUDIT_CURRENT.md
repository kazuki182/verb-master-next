# QUALITY_AUDIT_CURRENT - Ver.114 REBUILD

## Fixed target verbs
- GET
- TAKE
- MAKE

## Structure rule
- Verb pages use only two user-facing groups: 基本 and 句動詞.
- Common phrases, idioms, and collocations are included inside 基本.
- No separate 熟語 / よく使うフレーズ / コロケーション / 文型 category should appear in UI.

## Content policy
- 基本: target up to 10 usages/phrases. Do not force content when unnatural.
- 句動詞: target up to 10 phrasal verbs. Do not force content when unnatural.
- Examples prioritize business/social adult situations.
- Basic examples highlight only the target verb form.
- Phrasal examples highlight the whole phrasal verb.

## Ver.114 REBUILD checks
- GET rebuilt with 10 基本 + 10 句動詞.
- TAKE rebuilt with 10 基本 + 10 句動詞.
- MAKE rebuilt with 10 基本 + 7 句動詞. Not forced to 10 because weaker/less common items were excluded.
- Home top-right title icon removed.
- 攻略フロー unified into 基本 / 句動詞.
- 学習進捗 unified into 基本 / 句動詞.
- Test cards/lists unified into 基本 / 句動詞.
- Separate idiom route redirects to 基本 for old saved links.
- Separate idiom test route redirects to 基本 test for old saved links.

## External usage check notes
- GET: obtain/receive/become/arrive/understand and major phrasal verbs checked against learner dictionary and phrasal-verb references.
- TAKE: move/carry, time/duration, take phrases, and major phrasal verbs checked against learner dictionary and phrasal-verb references.
- MAKE: create/result, decision/plan/sure/progress phrases and major phrasal verbs checked against learner dictionary and phrasal-verb references.

## Build / ZIP safety
- TypeScript check: passed with npx tsc --noEmit.
- Next.js build: compile and TypeScript stages passed; static page collection did not finish within local execution time.
- node_modules and .next are excluded from ZIP.
- package-lock internal URL check required before delivery.
