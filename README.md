# Verb Master Ver.25

## Update
- テスト途中保存を追加
- テストを閉じても続きから再開可能
- 基本動詞 / 熟語 / 句動詞 / 総合 / フレーズ帳テストに対応
- テスト音声が日本語を読まないよう修正
- 答え表示後に英語のみを読み上げ
- 既存データ（XP、しおり、進捗、フレーズ帳、復習）を維持
- 動的ルートをオンデマンド化し、Vercelの大量静的生成タイムアウトを軽減

## Build check
- npm install: OK
- npx tsc --noEmit: OK
- next build: Compile / TypeScript / static routes generation reached completion log, but the process did not exit cleanly in this container. Vercel Build Logs should be checked after deploy.
