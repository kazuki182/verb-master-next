# QUALITY_AUDIT_CURRENT

## V135 Persistence Autosave Foundation

対象: 保存設計・自動保存・更新後のデータ保持

### 対応内容

- HOME読み込み前にクラウド復元を優先し、初期目標日がクラウド値を上書きする事故を防止
- プロフィール画像・ニックネーム・目標日を `user_progress_backups.progress_json` の本命保存対象として維持
- `profileUpdatedAt` / `settingsUpdatedAt` を追加し、端末初期値とクラウド保存値の競合を判定
- DataSafetyの自動保存を維持し、オンライン復帰時にも同期
- Supabaseに `user_progress_backup_events` 履歴テーブルを追加するSQLを同梱
- 設計書 `docs/V135_SAVE_DESIGN_AND_OPERATION.md` を追加

### 保存対象

- displayName / nickname
- avatarDataUrl
- targetDate / targetStartDate
- studyDays / studyPace
- XP / level / streak
- premiumSource / unlockedVerbCount / purchaseTotalYen
- learning progress / tests / reviews / saved phrases
- voiceSettings / notificationsEnabled

### チェック

- 初期値でクラウド保存値を上書きしない設計へ変更
- 保存基盤 Ver.120 を破壊せず、V135 SQLで履歴を追加
- 追加SQL: `supabase/V135_PERSISTENCE_AUTOSAVE_FOUNDATION.sql`
- 設計書: `docs/V135_SAVE_DESIGN_AND_OPERATION.md`
