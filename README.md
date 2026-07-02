# Verb Master Ver.115

Ver.114再作成版の続きです。

## 対象動詞
現在の作り直し済み対象:

1. GET
2. TAKE
3. MAKE
4. GIVE
5. HAVE
6. GO
7. COME
8. PUT
9. KEEP

今回追加した対象は **COME / PUT / KEEP** です。

## 方針
- 攻略フローは「基本」「句動詞」の2つだけ。
- 学習進捗も「基本」「句動詞」の2つだけ。
- テストカードも「基本」「句動詞」ベース。
- 「熟語」「コロケーション」「文型」などの別カテゴリは作らない。
- 基本はターゲット動詞のみ赤文字。
- 句動詞は句動詞全体を赤文字。
- 社会人向けの自然な例文を重視。

## 安全対策
- 画像・目標日リセット対策は前回版から維持。
- user_progress_backups を復元の中心にする方針を維持。
- SQLやRLSを変更する場合は、バックアップ確認とロールバック方針を先に確認する。

## Build
`npm run build` 成功確認済み。


## V115 hotfix: collocationsOk compatibility
- Vercel/GitHub側に古い品質チェック表示が残っていてもTypeScriptで止まらないよう、VerbQualityAuditに互換用の collocationsOk / collocationCount を戻しました。
- 画面表示ルールは変更なし。カテゴリ表示は「基本」「句動詞」のみです。
- app/admin/verb-quality/page.tsx では熟語・コロケーションの別カテゴリ表示はしていません。
