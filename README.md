# Verb Master v35

修正内容:
- 動詞一覧の検索BOXを目立つ形に調整
- HOMEの現在攻略中は、しおりよりもテスト途中保存を優先参照
- テスト途中保存がある場合、HOMEから該当テストへ直接再開
- 既存のXP/進捗/しおり/フレーズ帳/テスト途中保存は消さない方針を維持

注意:
- この環境ではnpm installがタイムアウトしたため、ローカルビルド確認は未完了です。
- VercelのBuild Logsで確認してください。

## Version 49
Checkout Flow Base / 購入確認・決済導線準備版

- /checkout purchase confirmation page
- /checkout/complete mock purchase completion page
- Upgrade page now sends users into the checkout flow
- Mock purchase updates local Premium entitlement and purchase history
- Supabase sync is attempted when available
