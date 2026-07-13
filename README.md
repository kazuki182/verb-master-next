# Verb Master

Current: Ver.155 DELIVER / SOLVE / REPORT Reaudit Final

- 対象動詞: DELIVER / SOLVE / REPORT
- DELIVER 句動詞: 6個
- SOLVE 句動詞: 4個
- REPORT 句動詞: 5個
- カテゴリは「基本」「句動詞」のみ
- collocations は空に整理
- 基本の赤文字は動詞のみ
- 句動詞の赤文字は動詞 + 前置詞/副詞まで
- 目的語は赤文字対象外
- 追加SQLなし
- Ver.145 保存基盤、Ver.146 クリーンUI、Ver.140 検索BOXを維持

## Ver.158 プロフィール保存専用修正
ニックネームとプロフィール画像を `user_profiles` 専用テーブルへ分離しました。
デプロイ前に `supabase/V158_PROFILE_SOURCE_OF_TRUTH.sql` をSupabase SQL Editorで1回実行してください。
詳細は `docs/V158_PROFILE_SOURCE_OF_TRUTH.md` を参照してください。
Deployment retry
