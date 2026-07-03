# QUALITY_AUDIT_CURRENT

## 再監査版 GET / TAKE / MAKE final

対象動詞: GET / TAKE / MAKE

### 実施内容
- GET / TAKE / MAKE を現行品質基準で再修正
- 基本と句動詞の重複を整理
- collocations は空に整理
- 基本の赤文字は動詞のみ
- 句動詞の赤文字は動詞＋前置詞・副詞まで
- 目的語は赤文字対象外
- 保存基盤 Ver.120 user_progress_backups は維持
- 下部バー/UI修正は維持

### 句動詞数
- GET: 10個
- TAKE: 10個
- MAKE: 10個

### GET 句動詞
get back to / get in touch with / get over / get through / get together / get ahead / get into / get out of / get on / get around to

### TAKE 句動詞
take over / take off / take out / take up / take on / take back / take apart / take down / take in / take away

### MAKE 句動詞
make up / make out / make for / make of / make up for / make do with / make into / make over / make off with / make away with

### 確認結果
- npx tsc --noEmit: OK
- npm run build: OK / Exit code 0
- node_modules / .next / tsconfig.tsbuildinfo はZIP未同梱
- package-lock.json / .npmrc に内部URLなし
