# Verb Master Ver.111

保存・復元安全化版です。

## 目的
ユーザーが増えても、プロフィール画像・ニックネーム・XP・Premium状態・設定が分散保存によって消えたように見えないようにします。

## 変更点
- バックアップ保存時にプロフィール名・画像URL・Premium情報・音声設定・目標日も保存。
- 画像アップロード後のURLをバックアップJSONにも保存。
- 復元時は `user_progress_backups` を最優先。
- `profiles` や `user_stats` が空でも、バックアップから可能な範囲で復元。
- Supabase確認用SQL `supabase/V111_BACKUP_SAFETY_CHECK.sql` を追加。

## Supabaseでやること
今回のSQLは確認用です。破壊的な削除はしません。
必要に応じて SQL Editor で `supabase/V111_BACKUP_SAFETY_CHECK.sql` を実行し、バックアップ件数・最新バックアップ・RLSポリシーを確認してください。

## アップロード注意
GitHubのルート直下には、不要な `data.ts`、`display.ts`、`page (数字).tsx`、patch系ファイルを残さないでください。
本物の動詞データは `lib/data.ts` です。
