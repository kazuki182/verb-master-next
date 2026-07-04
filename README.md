# Verb Master

Ver.136 scalable save storage foundation.

## 重要

今回は動詞追加ではなく、課金アプリ運用に向けた保存基盤の見直し版です。

## 変更点

- プロフィール画像をSupabase Storageへ保存
- DBには画像本体ではなく `avatarPath / avatarUrl` を保存
- 画像変更時は新画像保存とDB更新成功後に旧画像を削除
- ニックネーム・目標日・学習記録は `user_progress_backups` を正データとして維持
- 保存履歴は `user_progress_backup_events`
- 画像履歴は `user_profile_assets`
- 保存設計書を追加: `docs/V136_SCALABLE_SAVE_DESIGN_AND_OPERATION.md`
- SQL追加: `supabase/V136_SCALABLE_SAVE_STORAGE.sql`

## 導入手順

1. GitHubへZIP中身を上書きアップロード
2. Vercelに以下の環境変数を設定
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. Supabase SQL Editorで `supabase/V136_SCALABLE_SAVE_STORAGE.sql` を実行
4. VercelでReady確認
5. アプリでログアウト → 再ログイン
6. ニックネーム・目標日・画像を変更
7. 画面更新、ログアウト、再ログインで残るか確認
