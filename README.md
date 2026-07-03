# Verb Master Ver.121 STOP / TRY / HELP追加版

Ver.120の保存基盤をベースに、順番どおり STOP / TRY / HELP の3語を追加・品質再作成しました。

## 対象動詞
- STOP
- TRY
- HELP

## 現在の作り直し済み動詞
GET / TAKE / MAKE / GIVE / HAVE / GO / COME / PUT / KEEP / FIND / SEE / LOOK / WATCH / HEAR / LISTEN / THINK / KNOW / FEEL / WORK / USE / START / STOP / TRY / HELP

## 維持した重要修正
- 保存基盤は `user_progress_backups` を中心にする設計を維持
- プロフィール画像は `progress_json.avatarDataUrl` に保存
- 目標日は `progress_json.targetDate` に保存
- 下部バー余白修正を維持
- カテゴリは「基本」「句動詞」の2つのみ
- 旧カテゴリ表示は追加していません

## 追加内容
- STOP: 止める、やめる、立ち止まる、防ぐ、立ち寄る
- TRY: 試す、努力する、試しにやってみる、最善を尽くす、再試行する
- HELP: 手伝う、役に立つ、改善に役立つ、避けられない、自由に取る

## Supabaseについて
Ver.120で追加したSQLがまだ未実行の場合は、先に以下をSupabase SQL Editorで実行してください。

- `supabase/V120_CLOUD_SAVE_FOUNDATION.sql`

すでに実行済みなら、今回追加でSQL実行は不要です。

## GitHub/Vercel反映後の確認
1. GitHubへZIP中身を上書きアップロード
2. Vercelでデプロイ
3. アプリでログアウト → 再ログイン
4. 画像・目標日が残るか確認
5. STOP / TRY / HELP の画面を確認
