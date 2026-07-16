# Ver.177 デプロイ確認

1. `supabase/V177_CONTACT_MESSAGES.sql`をSupabase SQL Editorで実行
2. Vercel Environment Variablesを設定
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY
   - RESEND_API_KEY
   - CONTACT_FROM_EMAIL
   - CONTACT_ADMIN_EMAIL=iktpq182-182@yahoo.co.jp
3. 再デプロイ
4. ログイン後、マイページ→お問い合わせ・ご意見を開く
5. ユーザーIDが自動入力され編集できないことを確認
6. テスト送信
7. Supabase `contact_messages`に1件だけ保存されることを確認
8. `iktpq182-182@yahoo.co.jp`に通知メールが届くことを確認
9. 送信メールの返信先が入力したユーザーアドレスになることを確認
10. 30秒以内の連続送信が拒否されることを確認
