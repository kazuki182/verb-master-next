サイン組み込み計算 PC/スマホDOM構造修正版

修正内容
- DOM順を main（入力）→ aside（見積結果）に固定
- PC: 左70%入力 / 右30%見積結果、右側sticky
- スマホ: CSS orderで見積結果を最上部、入力をその下
- 顧客候補: 顧客検索欄の直下に表示

固定仕様
- 簡易電源盤計算・固定単価は変更なし
- 価格表連動、結果コピー、Excel貼り付けは変更なし

回帰監査
- DOM main→aside: OK
- PC 70:30 / main左 / aside右: OK
- スマホ aside先頭 / main後: OK
- 顧客候補入力欄直下: OK
- node --check app.js: OK
