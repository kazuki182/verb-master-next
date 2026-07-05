# Verb Master Ver.143

デプロイ更新に強い保存基盤版です。

## 重要
この版は、ZIP更新・Vercel再デプロイ・Preview URL変更・端末キャッシュ消失が起きても、クラウドの本命データを守るための修正版です。

## 必須作業
Supabase SQL Editorで次を実行してください。

```text
supabase/V143_DEPLOY_SAFE_PERSISTENCE_SYSTEM.sql
```

## 保存設計

- `user_progress_backups` = 本命データ
- `localStorage` = 一時キャッシュ
- `user_progress_backup_events` = ロールバック用履歴
- 端末内にも復旧スナップショットを最大12件保持
- 既存クラウドデータを端末の空データで上書きしない
- DB側でも安全マージして学習記録を後退させない

## 確認手順

1. ZIPをGitHubへ上書き
2. Vercel Ready確認
3. Supabase SQL EditorでV143 SQLを実行
4. 既存ユーザーでログイン
5. 学習・画像・ニックネーム・目標日を変更
6. 画面更新
7. ログアウト→再ログイン
8. もう一度ZIP更新しても0/124へ戻らないか確認
