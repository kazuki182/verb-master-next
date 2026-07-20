# Verb Master V136 保存設計・運用設計書

## 目的

課金アプリとして、ユーザーが増えても以下のデータを安全に保存・復元できる状態にする。

- プロフィール画像
- ニックネーム / 表示名
- 目標日
- 学習ペース / 学習曜日
- XP / level / streak
- premium状態 / 解放済み動詞数 / 購入履歴
- 学習履歴 / テスト履歴 / 復習履歴 / 保存フレーズ

## V136での大きな変更

V135までは画像を `user_progress_backups.progress_json.avatarDataUrl` に保存する設計だった。これは少人数では動くが、ユーザーが増えるとDBのJSONが大きくなり、保存・復元・通信量の面で不利になる。

V136では、画像本体はSupabase Storageへ分離する。

```text
画像本体              → Supabase Storage avatars bucket
画像の保存場所        → user_progress_backups.progress_json.avatarPath / avatarUrl
目標日・ニックネーム  → user_progress_backups.progress_json
学習記録              → user_progress_backups.progress_json
保存履歴              → user_progress_backup_events
画像履歴              → user_profile_assets
```

## 保存先の役割

| 保存先 | 役割 |
|---|---|
| `user_progress_backups` | 現在の正データ。復元の中心 |
| `user_progress_backup_events` | 自動保存履歴。事故時の確認・ロールバック用 |
| `storage.buckets: avatars` | プロフィール画像本体 |
| `user_profile_assets` | 画像ファイルの履歴。新旧画像の確認・削除確認用 |

## 画像保存の安全な処理順

画像変更時は、絶対に先に古い画像を消さない。

```text
1. 現在のavatarPathを取得
2. 新しい画像をStorageへアップロード
3. user_progress_backups.progress_json の avatarPath / avatarUrl を更新
4. DB更新成功を確認
5. 古いavatarPathの画像をStorageから削除
6. user_profile_assetsで旧画像をdeletedに更新
```

この順番により、新画像アップロードやDB更新に失敗しても、前の画像は残る。

## 自動保存の方針

自動保存は必要だが、毎入力ごとに即DB保存し続けると負荷が増える。V136では以下の方針を維持する。

```text
学習データ変更       → debounce後に保存
30秒ごと             → 保険として自動確認
画面復帰時           → クラウド復元確認 → 保存
オンライン復帰時     → クラウド復元確認 → 保存
画面を閉じる前       → 保存確認
プロフィール変更     → 変更直後に保存
目標日変更           → 変更直後に保存
```

## 上書き事故防止

次のタイムスタンプで新旧を判断する。

| 項目 | 判定キー |
|---|---|
| ニックネーム・画像 | `profileUpdatedAt` |
| 目標日・学習ペース | `settingsUpdatedAt` |
| 学習量 | XP / 学習語数 / テスト数 / 復習数 / 保存フレーズ数 |

端末側が空データ、クラウド側に学習データがある場合は、空データでクラウドを上書きしない。

## 画像ファイルの命名

ユーザー名をそのままStorageパスに出さない。Next.js API側でユーザー名をSHA-256化してパスを作る。

```text
avatars/{hashedUserKey}/avatar-{timestamp}-{random}.jpg
```

## 必要な環境変数

Vercelに以下を設定する。

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

`SUPABASE_SERVICE_ROLE_KEY` はStorageへのアップロード・削除に使う。ブラウザには出さない。Next.js API routeだけで使用する。

## Supabase SQL

V136では以下を実行する。

```text
supabase/V136_SCALABLE_SAVE_STORAGE.sql
```

このSQLで行うこと。

- `avatars` bucketを作成
- 画像はpublic read、write/deleteはserver APIのみ
- `user_profile_assets` を作成
- `user_progress_backups` に `avatar_path / avatar_url / avatar_updated_at` を追加
- progress_jsonからavatar列へ同期するtriggerを追加

## 運用チェック手順

### 初回導入

1. ZIPをGitHubへ上書きアップロード
2. VercelでReady確認
3. Vercel環境変数に `SUPABASE_SERVICE_ROLE_KEY` を追加
4. Supabase SQL Editorで `V136_SCALABLE_SAVE_STORAGE.sql` を実行
5. アプリからログアウト
6. 再ログイン
7. ニックネーム変更
8. 目標日変更
9. プロフィール画像変更
10. 画面更新
11. ログアウト → 再ログイン
12. 画像・ニックネーム・目標日が残るか確認

### 画像削除確認

Supabase SQL Editorで確認。

```sql
select username, storage_path, status, uploaded_at, deleted_at
from public.user_profile_assets
order by uploaded_at desc
limit 20;
```

同じユーザーが画像を変更した場合、古い画像は `deleted` になる。

### 現在の保存確認

```sql
select username, avatar_path, avatar_url, updated_at
from public.user_progress_backups
order by updated_at desc
limit 20;
```

## 旧データの扱い

過去に `avatarDataUrl` としてDBに入った画像は、復元用として表示できる場合がある。ただし、新しく画像を変更したタイミングでStorage保存へ移行し、以降はDBに画像本体を持たない。

## 失敗時の方針

| 失敗箇所 | 挙動 |
|---|---|
| 新画像アップロード失敗 | 旧画像を維持 |
| DB更新失敗 | 新画像を削除し、旧画像を維持 |
| 旧画像削除失敗 | 新画像は使う。旧画像はasset履歴で確認して後で削除 |
| 再ログイン不足 | 旧画像を維持し、再ログインを促す |
| `SUPABASE_SERVICE_ROLE_KEY` 未設定 | 画像Storage保存不可。旧画像を維持 |

## 今後の固定ルール

- 画像本体をDB JSONへ戻さない
- 画像変更時は「新画像保存 → DB更新 → 旧画像削除」の順序を守る
- 目標日・ニックネームは `user_progress_backups` に保存する
- 空データでクラウドを上書きしない
- 保存基盤変更時は必ず設計書とSQLを更新する
