営業ポータル サイン組み込みレイアウト根本修正版

修正内容
- PC（701px以上）: 左70%入力 / 右30%見積結果
- 右側見積結果は sticky 表示
- スマホ（700px以下）: 見積結果を最上部、入力をその下
- UA、hover、pointer、端末種別によるレイアウト判定を廃止
- 最終レイアウトCSSを専用 style 要素（saFinalLayoutStyles）へ集約
- 顧客候補は検索欄直下表示を維持
- 計算ロジック、価格表連動、簡易電源盤、コピー処理は変更なし

確認
- node --check app.js: OK
- DOM main -> aside: OK
- PC 70:30: OK
- スマホ aside先頭: OK
