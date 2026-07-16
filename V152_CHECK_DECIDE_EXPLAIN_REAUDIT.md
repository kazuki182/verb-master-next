# Ver.151 SELL / CHOOSE / FOLLOW Reaudit

## Scope
- SELL / CHOOSE / FOLLOW only.
- Preserve Ver.145 auth/restore/persistence system.
- Preserve Ver.146 clean profile UI.
- Preserve Ver.140 simple prefix search.

## Quality decisions
- Categories remain only Basic and Phrasal Verbs.
- `collocations` remains empty for target verbs.
- Basic examples highlight only the target verb.
- Phrasal examples highlight only verb + particle/preposition.
- Objects are not highlighted.

## Counts
- SELL: 6 phrasal verbs
- CHOOSE: 5 phrasal verbs
- FOLLOW: 8 phrasal verbs

## Build checks
- `npx tsc --noEmit`
- `npm run build`
