# QUALITY_AUDIT_CURRENT

## Version
Ver.115 / Ver.114再作成版の続き

## Target verbs
- GET
- TAKE
- MAKE
- GIVE
- HAVE
- GO
- COME
- PUT
- KEEP

今回の追加対象は **COME / PUT / KEEP**。
対象動詞は途中で変更していません。

## Checks
- カテゴリ表示は「基本」「句動詞」を維持。
- COME / PUT / KEEP の基本例文はターゲット動詞のみ赤文字になるよう focus を設定。
- COME / PUT / KEEP の句動詞例文は句動詞全体が赤文字になるよう focus を設定。
- 日本語訳には赤文字用の focus を付けない方針。
- 社会人向け例文を多めに調整。
- テスト日本語は主語が分かる形を優先。
- コアイメージはアイコン・矢印方向を確認。
- 画像・目標日リセット対策は前回版から維持。
- package-lock.json に内部OpenAI/caas URLがないことを確認。
- .npmrc は npm公式registry。

## Core image directions
- COME: 外側・先の予定 → 自分/自社/話題の中心
- PUT: 対象 → 場所・資料・予定・状態
- KEEP: 対象 → 同じ状態・管理下に保つ

## Build
`npm run build` 実行済み。

Result:
- Compiled successfully
- TypeScript finished
- Static pages generated
- Exit code: 0

## Zip safety
ZIPから除外:
- node_modules
- .next
- tsconfig.tsbuildinfo
- patch_*.py / make_*.py / append_*.js
- 古い QUALITY_AUDIT_Vxx.md / VERSION_Vxx.txt / README_Vxx.md

残すもの:
- README.md
- QUALITY_AUDIT_CURRENT.md
- VERSION_CURRENT.txt


## V115 hotfix: collocationsOk compatibility
- Vercel/GitHub側に古い品質チェック表示が残っていてもTypeScriptで止まらないよう、VerbQualityAuditに互換用の collocationsOk / collocationCount を戻しました。
- 画面表示ルールは変更なし。カテゴリ表示は「基本」「句動詞」のみです。
- app/admin/verb-quality/page.tsx では熟語・コロケーションの別カテゴリ表示はしていません。


## Ver.115 app-function hotfix 2
- Fixed bottom navigation excess pale safe-area spacing.
- Fixed avatar save reliability by resizing image before local/cloud save.
- Fixed target/profile cloud save blocker when local learning score is zero but remote learning data exists.
- No verb scope changes.

## V115 app-function hotfix 3
- PremiumExamples.tsx など古い表示ファイルが残っている場合でも TypeScript で止まらないよう、VerbQualityAudit に idiomTestTotal / idiomsOk / idiomCount の互換フィールドを追加。
- 画面表示方針は変更なし。カテゴリは「基本」「句動詞」のみ。
- npm run build: exit code 0 確認済み。
