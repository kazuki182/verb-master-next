# Verb Master Ver.143 デプロイ更新に強い保存基盤設計

## 目的
ZIP更新、Vercel再デプロイ、Preview URL変更、端末キャッシュ消失が起きても、課金者のプロフィール・目標日・学習記録が 0/124 に戻らないようにする。

## 基本方針

- `user_progress_backups` を本命データにする。
- `localStorage` は一時キャッシュとして扱う。
- 空または少ない端末データでクラウドを上書きしない。
- 保存は単純上書きではなく、クラウド既存値と端末値を安全マージする。
- すべての保存は `user_progress_backup_events` に履歴を残す。
- 端末側にも復旧用スナップショットを最大12件残す。

## 防御レイヤー

### 1. 起動時防御
アプリ起動時はクラウド復元を先に行う。復元に失敗した場合は、空データを保存しない。

### 2. ログイン時防御
クラウドログインできても復元に失敗した場合は、データ保護のためログイン完了扱いにしない。

### 3. 端末側防御
`saveProgress()` のたびに、意味のあるデータだけをローカル復旧スナップショットへ保存する。

### 4. 同期防御
クラウド側のスコアが端末より高い場合は、先にクラウドを端末へ戻してから保存する。

### 5. DB側防御
`vm_upsert_progress_backup()` は単純上書きしない。既存クラウドと新規端末データをマージし、学習記録は後退させない。

## DBマージルール

| 項目 | 採用ルール |
|---|---|
| XP / level / streak / totalStudied / test数 | 大きい方 |
| studiedVerbIds / weakItems / sectionClearIds | 和集合 |
| reviewItems / testSessions / weeklyStats | マージ |
| savedPhrases | 件数が多い方 |
| displayName / avatar | profileUpdatedAt が新しい方。ただし空値では消さない |
| targetDate / studyPace / studyDays | settingsUpdatedAt が新しい方。ただし空値では消さない |
| premium / unlockedVerbCount | 大きい方 |

## 必須SQL
Supabase SQL Editorで以下を実行する。

```text
supabase/V143_DEPLOY_SAFE_PERSISTENCE_SYSTEM.sql
```

## ZIP更新時の運用

1. 新ZIPをGitHubへ上書き
2. Vercel Ready確認
3. 既存ユーザーでログイン
4. クラウド復元後に画面表示
5. 0/124になった場合は保存せず、ログイン・SQL・環境変数を確認

## 環境変数

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

`SUPABASE_SERVICE_ROLE_KEY` は画像Storage用。絶対に `NEXT_PUBLIC_` を付けない。
