# Ver.166 Premium Daily Examples Re-audit: MOVE to BUILD

Premium-only daily conversation examples were re-audited for these ten verbs:

- MOVE
- TURN
- BRING
- HOLD
- SET
- CHANGE
- OPEN
- CLOSE
- LET
- BUILD

## Result

- This batch contains 270 Premium daily conversation examples.
- Every retained meaning and phrasal-expression block has two daily examples.
- Low-frequency or duplicate entries were removed instead of being padded with unnatural examples.
- Removed or consolidated expressions include `bring ... down` duplication, `set forth`, `open out`, `close out`, `close with`, duplicate LET patterns, and `build out`.
- Basic-example focus remains the verb only.
- Phrasal-expression focus remains the verb plus particle/preposition, excluding objects.
- Premium audit progress: 40 / 124 verbs.

## Verification

- Root-level misplaced TypeScript files: none
- JSX-like syntax inside `.ts`: none
- Verb IDs and ranks: 124 unique entries
- `collocations`: empty for all 124 verbs
- `npm run verify:deploy`: passed
- `npx tsc --noEmit`: passed
- `npm run build`: passed
- Clean re-extracted ZIP build: passed
