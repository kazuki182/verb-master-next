# QUALITY_AUDIT_CURRENT

## Version
Ver.136 scalable save storage foundation

## Scope
動詞追加は行わず、ユーザー増加を考慮した保存設計に見直し。

## 対応内容
- プロフィール画像をDBのBase64保存中心からSupabase Storage保存へ移行
- 新規画像変更時は `avatars` bucket へ保存
- DBには `avatarPath / avatarUrl / avatarUpdatedAt` を保存
- 画像変更時は新画像アップロードとDB更新が成功してから旧画像を削除
- 旧画像削除履歴を `user_profile_assets` に残す
- ニックネーム・目標日・学習記録は引き続き `user_progress_backups` を正データとして保存
- `profileUpdatedAt / settingsUpdatedAt` による新旧判定を維持
- 空データでクラウドを上書きしない方針を維持
- `SUPABASE_SERVICE_ROLE_KEY` を使うNext.js API routeを追加
- 保存設計書 `docs/V136_SCALABLE_SAVE_DESIGN_AND_OPERATION.md` を追加
- SQL `supabase/V136_SCALABLE_SAVE_STORAGE.sql` を追加

## Build checks
- `npx tsc --noEmit`: OK
- `npm run build`: OK / Exit code 0

## ZIP checks
- node_modules: excluded
- .next: excluded
- tsconfig.tsbuildinfo: excluded
- package-lock internal URL: checked
- .npmrc official registry: checked
