# Quality Audit Current

## Current version
Ver.169

## Standard verb re-audit
- Completed: 124 / 124 verbs
- `collocations`: empty for all verbs
- Verb ids and ranks: 124 unique entries

## Premium daily conversation re-audit
- Completed: 70 / 124 verbs
- Completed batches:
  - GET / TAKE / MAKE / GIVE / HAVE / GO / COME / PUT / KEEP / FIND — 260 examples
  - SEE / LOOK / WATCH / HEAR / LISTEN / THINK / KNOW / FEEL / WORK / USE — 266 examples
  - START / STOP / TRY / HELP / SHOW / TELL / ASK / CALL / RUN / LEAVE — 226 examples
  - MOVE / TURN / BRING / HOLD / SET / CHANGE / OPEN / CLOSE / LET / BUILD — 270 examples
  - LEARN / MEET / SEND / PAY / BUY / SELL / CHOOSE / FOLLOW / CREATE / REACH — 190 examples
  - RETURN / CHECK / DECIDE / EXPLAIN / IMPROVE / MANAGE / PREPARE / PLAN / OFFER / SUPPORT — 182 examples
  - DISCUSS / CONFIRM / RECEIVE / DELIVER / SOLVE / REPORT / UPDATE / REVIEW / COMPARE / INTRODUCE — 144 examples
- Cumulative completed-batch total: 1,538 daily examples
- Every retained meaning and phrasal-expression block in completed batches: exactly 2 daily examples
- Natural spoken English and Japanese translation reviewed
- Basic focus: verb only
- Phrasal focus: verb plus particle/preposition only
- Objects excluded from focus

## Ver.169 batch notes
- Unnatural and duplicate preposition expressions were consolidated or removed.
- All 144 examples contain their configured focus text.
- No duplicate English examples were found within the batch.
- Retained blocks: 72, with exactly 2 daily examples each.

## Deployment and package safety
- Root misplaced source audit: passed
- JSX-like syntax in `.ts`: passed
- Duplicate/import review: passed
- `npm run verify:deploy`: passed
- `npx tsc --noEmit`: passed
- `npm run build`: passed
- Static pages: 28 / 28
- ZIP re-extraction build: passed before release
