# Verb Master V135 保存設計・運用設計書

## 目的

課金アプリとして、ログイン・画面更新・Vercel再デプロイ・GitHub更新があっても、以下のデータが消えない状態を標準にする。

- プロフィール画像
- ニックネーム / 表示名
- 目標日
- 学習ペース / 学習曜日
- XP / level / streak
- premiumStatus / unlockedCount / purchaseTotal
- 学習履歴 / テスト履歴 / 復習履歴 / 保存フレーズ
- 音声設定 / 通知設定

## 保存の基本方針

### 1. Supabaseを本命の保存先にする

アプリの更新で消えて困るデータは、`user_progress_backups` に保存する。VercelやGitHubを更新しても、Supabaseのデータは消えない。

### 2. localStorageは一時キャッシュとして扱う

ブラウザ内のlocalStorageは表示を速くするために使う。ただし、本命ではない。ログイン後はSupabaseの内容を復元し、localStorageへ反映する。

### 3. 自動保存を基本にする

ユーザーが学習・プロフィール変更・目標日変更をしたら、`saveProgress()` が呼ばれる。そのイベントを `DataSafety` が受け取り、一定時間後にクラウドへ自動保存する。

保存タイミング:

- アプリ起動時
- 学習データ変更時
- プロフィール画像変更時
- ニックネーム変更時
- 目標日変更時
- 学習ペース変更時
- 30秒ごとの自動確認
- 画面復帰時
- オンライン復帰時
- 画面を閉じる前

## 今回直した根本原因

以前は、HOME読み込み時に `getTargetDate()` が先に走り、端末側に初期目標日を作ってしまうことがあった。その後にクラウド復元すると、端末の初期目標日がクラウドの正しい目標日より優先され、目標日がリセットされたように見える可能性があった。

V135では以下に変更した。

1. HOMEは先にクラウド復元を試す。
2. その後で画面表示用の目標日を読む。
3. クラウド側に保存済みのプロフィール画像・ニックネーム・目標日がある場合、端末の初期値よりクラウドを優先する。
4. ユーザーが直近で変更した場合は `profileUpdatedAt` / `settingsUpdatedAt` を使い、最新の変更を優先する。

## データ競合ルール

| データ | 優先ルール |
|---|---|
| XP / level / streak | 大きい値・学習量が多い側を維持 |
| studiedVerbIds / weakItems | 端末とクラウドを統合 |
| reviewItems / testSessions | 両方を統合 |
| savedPhrases | 端末に保存フレーズがあれば端末優先、なければクラウド |
| displayName / avatarDataUrl | `profileUpdatedAt` が新しい側を優先。端末が初期値ならクラウド優先 |
| targetDate / studyDays / studyPace | `settingsUpdatedAt` が新しい側を優先。端末が初期値ならクラウド優先 |
| premium / unlockedCount | 大きい値・保存済み権利を維持 |

## Supabaseテーブル

### cloud_accounts

クラウドログイン用のユーザー名とパスワードハッシュを保存する。

### user_progress_backups

現在の本命データ。ユーザーごとに1行。

主な保存内容:

- `progress_json`: 学習・プロフィール・課金状態の完全スナップショット
- `settings_json`: 目標日・学習ペース・プロフィール補助データ
- `save_revision`: 保存回数
- `profile_updated_at`: プロフィール系の最終変更時刻
- `settings_updated_at`: 目標日・設定系の最終変更時刻
- `cloud_synced_at`: クラウド保存時刻

### user_progress_backup_events

ロールバック用履歴。ユーザーごとに最新50件を保持。

保存失敗や誤更新があった場合、この履歴から復旧方針を立てる。

## 必要SQL

V135では以下をSupabase SQL Editorで実行する。

```text
supabase/V135_PERSISTENCE_AUTOSAVE_FOUNDATION.sql
```

これは冪等SQLなので、もう一度実行しても壊れない。

## 運用ルール

### 今後触ってはいけない前提

- `user_progress_backups` を保存の本命にする
- `progress_json` にプロフィール画像・目標日・XP・課金状態を含める
- `profileUpdatedAt` / `settingsUpdatedAt` で競合解決する
- 初期値でクラウドを上書きしない
- 画像保存をSupabase Storage必須にしない

### ZIP作成前チェック

- `npx tsc --noEmit`
- `npm run build`
- `node_modules` を入れない
- `.next` を入れない
- `tsconfig.tsbuildinfo` を入れない
- 作業用スクリプトを入れない
- `package-lock.json` に内部URLがないこと
- `.npmrc` が npm公式registryであること

## 保存テスト手順

1. V135 ZIPをGitHubへ上書きアップロード
2. VercelでReady確認
3. Supabase SQL Editorで `V135_PERSISTENCE_AUTOSAVE_FOUNDATION.sql` を実行
4. アプリでログアウト
5. 再ログイン
6. ニックネームを変更
7. プロフィール画像を登録
8. 目標日を変更
9. HOMEへ戻る
10. 30秒待つ、またはマイページで「今すぐクラウド保存」
11. ブラウザ更新
12. 画像・ニックネーム・目標日が残るか確認
13. ログアウト
14. 再ログイン
15. 画像・ニックネーム・目標日・XPが残るか確認

## Supabase確認SQL

```sql
select
  username,
  save_revision,
  updated_at,
  progress_json->>'displayName' as display_name,
  progress_json->>'targetDate' as target_date,
  length(coalesce(progress_json->>'avatarDataUrl', '')) as avatar_size,
  progress_json->>'xp' as xp,
  progress_json->>'level' as level
from public.user_progress_backups
order by updated_at desc
limit 10;
```

`avatar_size` が0より大きければ、画像データはクラウド保存されている。

## ロールバック方針

保存事故が起きた場合は、すぐに復旧より先に原因確認を行う。

1. `user_progress_backups` の現在値を見る
2. `user_progress_backup_events` の履歴を見る
3. いつの保存で値が変わったか確認
4. 必要なら履歴の `progress_json` を使って復元する

履歴確認:

```sql
select
  username,
  save_revision,
  created_at,
  summary_json
from public.user_progress_backup_events
where username = '対象ユーザー名'
order by created_at desc
limit 20;
```
