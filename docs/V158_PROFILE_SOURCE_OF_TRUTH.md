# Ver.158 Profile Source of Truth

## 目的
ニックネームとプロフィール画像を学習進捗の `progress_json` から分離し、通常の自動同期で古いプロフィールが復活しないようにする。

## 新しい保存先
`public.user_profiles`

- `username`
- `display_name`
- `avatar_url`
- `avatar_path`
- `updated_at`
- `app_version`

プロフィール画面はこのテーブルを正本として使用する。

## 保存検証
- ニックネーム保存後、サーバーが同じ行を再取得し、一致した場合だけ成功を返す。
- 画像保存後、StorageのURLとpathを専用テーブルへ保存し、再取得して一致確認する。
- 通常の学習進捗同期はプロフィール専用テーブルを更新しない。
- 旧 `progress_json` のプロフィール値は後方互換のため残すが、復元時は専用テーブルを優先する。

## 初回移行
Supabase SQL Editorで以下を1回実行する。

`supabase/V158_PROFILE_SOURCE_OF_TRUTH.sql`

このSQLは既存の `user_progress_backups.progress_json` からニックネームと画像URLを移行する。既存行は上書きしない。

## Vercel環境変数
以下が必要。

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## 確認方法
1. V158 SQLを実行する。
2. VercelへZIP内容を反映し再デプロイする。
3. 一度ログアウトし、再ログインする。
4. ニックネームを変更する。
5. 「クラウド保存し、再確認しました」と表示されることを確認する。
6. 画像を変更する。
7. 「クラウド保存し、再確認しました」と表示されることを確認する。
8. ブラウザ更新、ログアウト・ログイン、別端末で同じ値が復元されることを確認する。

## Supabase確認SQL
```sql
select username, display_name, avatar_url, avatar_path, updated_at
from public.user_profiles
order by updated_at desc;
```
