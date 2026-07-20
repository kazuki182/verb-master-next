# Ver.177 お問い合わせ・ご意見ページ

## 実装
- `/contact` を追加
- ユーザーIDは現在ログイン中のIDを自動入力し編集不可
- 返信先メールアドレス、種別、内容を入力
- 下書きをユーザー別localStorageへ自動保存
- `/api/contact`でクラウド資格情報を再認証
- Supabase `contact_messages`へ保存
- request_id一意制約で二重送信防止
- 同一ユーザーの30秒以内連続送信を防止
- Resend設定済みの場合、管理人メールへ通知
- 通知先既定値: `iktpq182-182@yahoo.co.jp`

## 必須設定
1. Supabase SQL Editorで `supabase/V177_CONTACT_MESSAGES.sql` を実行
2. Vercelへ以下を登録
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
   - `CONTACT_FROM_EMAIL`（Resendで認証済みの送信元）
   - `CONTACT_ADMIN_EMAIL`（省略時は iktpq182-182@yahoo.co.jp）

## 注意
現在のアカウント作成はメール登録式ではないため、返信先メールアドレスは自動取得できません。ユーザーIDのみ自動入力し、返信先は初回入力後に下書き保存します。
