# Quality Audit Current

## Current version
Ver.174

## Standard verb re-audit
- Completed: 124 / 124 verbs
- `collocations`: empty for all verbs
- Verb ids and ranks: 124 unique entries

## Premium daily conversation re-audit
- Completed: 124 / 124 verbs
- Completed batches:
  - GET / TAKE / MAKE / GIVE / HAVE / GO / COME / PUT / KEEP / FIND — 260 examples
  - SEE / LOOK / WATCH / HEAR / LISTEN / THINK / KNOW / FEEL / WORK / USE — 266 examples
  - START / STOP / TRY / HELP / SHOW / TELL / ASK / CALL / RUN / LEAVE — 226 examples
  - MOVE / TURN / BRING / HOLD / SET / CHANGE / OPEN / CLOSE / LET / BUILD — 270 examples
  - LEARN / MEET / SEND / PAY / BUY / SELL / CHOOSE / FOLLOW / CREATE / REACH — 190 examples
  - RETURN / CHECK / DECIDE / EXPLAIN / IMPROVE / MANAGE / PREPARE / PLAN / OFFER / SUPPORT — 182 examples
  - DISCUSS / CONFIRM / RECEIVE / DELIVER / SOLVE / REPORT / UPDATE / REVIEW / COMPARE / INTRODUCE — 144 examples
  - REQUEST / SUGGEST / AGREE / ARRANGE / ATTEND / CONTACT / SHARE / COLLECT / REDUCE / INCREASE — 112 examples
  - ACCEPT / AVOID / CONSIDER / DEPEND / EXPECT / REPLY / INCLUDE / NOTICE / PREFER / RECOMMEND — 94 examples
  - ACHIEVE / SCHEDULE / SUBMIT / CANCEL / CONNECT / RESPOND / CONTROL / HANDLE / ORGANIZE / INFORM — 106 examples
  - ADJUST / APPLY / APPROVE / BORROW / VERIFY / GATHER / COMMUNICATE / DESCRIBE / EARN / ESTIMATE — 104 examples
- Cumulative completed-batch total: 1,954 daily examples
- Every retained meaning and phrasal-expression block in completed batches: exactly 2 daily examples
- Natural spoken English and Japanese translation reviewed
- Basic focus: verb only
- Phrasal focus: verb plus particle/preposition only
- Objects excluded from focus

## Ver.174 batch notes
- Ordinary preposition patterns were integrated into basic usage blocks where appropriate.
- Retained expression blocks: `adjust to`, `apply for`, `apply to`, `approve of`, `gather around`, `gather up`, and `communicate with`.
- Removed or integrated expression blocks: `adjust for`, `apply as`, `apply through`, `gather together`, and `communicate through`.
- All 104 examples contain their configured focus text.
- No duplicate English examples were found within the batch.
- Retained blocks: 52, with exactly 2 daily examples each.

## Deployment and package safety
- Root misplaced source audit: passed
- JSX-like syntax in `.ts`: passed (generic type syntax excluded)
- Duplicate/import review: passed
- `npm run verify:deploy`: passed
- `npx tsc --noEmit`: passed
- `npm run build`: passed; static pages 28 / 28


## Premium daily examples final batch
- FOCUS / IDENTIFY / PROPOSE / JOIN / LEAD / MAINTAIN / MENTION / PROTECT / REPLACE / TRAIN / NEGOTIATE / REMIND / REQUIRE / SELECT
- 152 examples across 76 retained usages
- Premium audit complete: 124 / 124 verbs

## Ver.176 追加監査

- 手動しおりと途中テストを完全分離。
- ページ表示時の自動しおり上書きを廃止。
- しおり・途中テストへユーザー別耐久localStorageを追加。
- クラウド復元時は保存日時・更新日時で新しいデータを採用。
- ホームに「続きから学習」「テストを再開」を別カードで表示。
- `npm run verify:deploy`: OK
- `npx tsc --noEmit`: OK
- `npm run build`: OK（static pages 28/28）

## Ver.177 お問い合わせ・ご意見

- `/contact` を追加。
- ユーザーIDはログイン中のIDを自動入力し編集不可。
- 返信先メールアドレス・種別・内容を入力。
- 下書きをユーザー別localStorageへ保存。
- クラウド資格情報をAPI側で再認証。
- Supabase `contact_messages`へ保存。
- request_id一意制約と30秒クールダウンで二重・連続送信を防止。
- Resend設定時、管理人 `iktpq182-182@yahoo.co.jp` へ通知。
- `npm run verify:deploy`: OK
- `npx tsc --noEmit`: OK
- `npm run build`: 30/30ページ生成まで完了
