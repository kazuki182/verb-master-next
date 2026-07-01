# Verb Master Ver.111 Quality / Safety Audit

## Theme
保存・復元安全化。登録者が増えても、プロフィール・学習記録・Premium状態が分散保存で失われたように見えないようにする。

## Main checks
- `user_progress_backups` を復元の中心にする。
- `settings_json` に以下を保存対象として含める。
  - displayName / nickname
  - avatarUrl / avatarDataUrl
  - notificationsEnabled
  - voiceSettings
  - unlockedVerbCount / purchaseTotalYen / premiumSource / premiumUpdatedAt
  - targetDate / targetStartDate / studyDays / studyPace
- `progress_json` にXP、レベル、継続日数、テスト履歴、保存フレーズ等を保存する。
- 画像アップロード後のURLをバックアップに残す。
- `profiles` / `user_stats` の補助テーブルが空でも、バックアップ本体があれば復元できる。
- 空の端末データでクラウドバックアップを上書きしない保護を維持。
- SQL変更前後の確認用SQLを同梱。

## Build/package hygiene
- root直下の不要 `data.ts` は同梱しない。
- `page (数字).tsx` やpatch系作業ファイルは同梱しない。
- `package-lock.json` に内部OpenAI/caas registry URLがないことを確認。
- `.npmrc` は `https://registry.npmjs.org/` を使用。
