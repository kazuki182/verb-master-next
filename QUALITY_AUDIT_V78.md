# Verb Master Ver.78 品質監査メモ

## 目的
Ver.78では、機能追加ではなく「学習者が実際に見る例文・テスト日本語」の品質を優先して修正した。

## 実施した主な監査

### 1. 不自然な自動生成文の削除
以下のような表現は英語学習教材として不適切なため、自然な例文へ差し替えた。

- I will start a meeting this today.
- Please start a meeting the details with the team.
- I will tell the details.
- 詳細を確認・対応します。

修正後は、主語・時制・目的語が分かる文に統一。

例：
- I told the client the delivery date yesterday.
- 私は昨日、クライアントに納期を伝えました。

### 2. テスト日本語の明確化
日本語だけを見て英訳しやすいように、以下を重視した。

- 主語が分かる
- 時制が分かる
- 何をしたかが分かる
- 疑問文・命令文が分かる

### 3. 文型の再確認
特に以下を確認。

- communicate with clients の with clients は目的語Oではなく補足M
- train new staff on the product basics は new staff がO、on以下はM
- let me know は me がO、know your schedule が続く動作

### 4. 修正対象の主な動詞
- START
- SHOW
- RUN
- LEAVE
- MOVE
- BRING
- HOLD
- OPEN
- CLOSE
- LET
- TELL
- CHANGE
- BUILD
- LEARN
- MEET
- PAY
- BUY
- SELL
- CHOOSE
- FOLLOW
- CREATE
- REACH
- RETURN
- TRAIN

## 今後の課題
Ver.79以降で、120語すべての文型カードをさらに細かく確認する。
特に SVC / SVOO / SVOC / to不定詞 / 前置詞句 の扱いを重点チェックする。
