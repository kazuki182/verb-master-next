# QUALITY_AUDIT_CURRENT - Ver.114 再作成版

## 対象動詞
- GET
- TAKE
- MAKE

## 固定ルール確認
- 対象動詞は GET / TAKE / MAKE から変更なし。
- 攻略フローは「基本」「句動詞」の2分類のみ。
- 学習進捗は「基本」「句動詞」の2分類のみ。
- テスト分類は「基本」「句動詞」「総合」のみ。
- 旧カテゴリ名を画面カテゴリとして出さず、「基本」「句動詞」に統一。
- 基本例文はターゲット動詞のみ focus 指定。
- 句動詞例文は句動詞全体を focus 指定。
- 日本語訳に赤文字指定なし。

## UI確認
- HOME右上の追加アイコンなし。
- HOME構成は、レベル/XPカード、現在攻略中、学習状況、目標日設定の順を維持。
- 動詞ページ上部は compact hero を使用。
- コアイメージは coreVisual によるアイコン・矢印図解を使用。

## 保存安全対策
- supabase/V114_USER_PROGRESS_BACKUPS_SAFETY.sql を追加。
- user_progress_backups を復元中心にする方針を明記。
- nickname / displayName / avatarUrl / XP / level / streak / premiumStatus / unlockedCount / settings をバックアップ対象として想定。

## ZIP除外
- node_modules / .next / tsconfig.tsbuildinfo は除外。
- root直下の data.ts / display.ts / paymentConfig.ts はなし。
- patch_*.py / make_*.py / append_*.js はなし。
- 古い QUALITY_AUDIT_Vxx / VERSION_Vxx / README_Vxx はなし。
