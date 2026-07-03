from pathlib import Path
p = Path('/mnt/data/v130_work/lib/data.ts')
text = p.read_text()
start = text.index('  {\n    "id": "create"')
end = text.index('  {\n  "id": "check"', start)
new = r'''  {
    "id": "create",
    "rank": 49,
    "word": "CREATE",
    "ipa": "/kriˈeɪt/",
    "kana": "クリエイト",
    "syllable": "cre-ate",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 基本",
    "core": "まだないものを新しく作り出す",
    "coreDetail": "CREATEは、資料・仕組み・価値・機会など、まだ形になっていないものを新しく作り出す動詞です。仕事では提案書、報告書、スケジュール、価値、機会、問題の発生まで幅広く使います。",
    "coreVisual": {"from": ["💡 アイデア", "📊 情報", "🧩 材料"], "to": "新しい形・価値・結果", "label": "材料・発想 → 新しいもの"},
    "meanings": [
      {"id": "create-document", "title": "① 資料・レポートを作成する", "pattern": "create + document / report", "transitivity": "他動詞", "structure": "基本", "image": "情報をまとめて新しい資料として形にする。", "point": "create a report / create a proposal は仕事で使いやすい基本表現です。", "examples": [
        {"en": "We need to create a proposal by Friday.", "ja": "私たちは金曜日までに提案書を作成する必要があります。", "focus": "create", "object": "a proposal"},
        {"en": "She created a report for the meeting.", "ja": "彼女は会議用の報告書を作成しました。", "focus": "created", "object": "a report"},
        {"en": "Please create a simple summary for the client.", "ja": "顧客向けに簡単な要約を作成してください。", "focus": "create", "object": "a simple summary"}
      ], "dailyExamples": []},
      {"id": "create-plan", "title": "② 計画・スケジュールを作る", "pattern": "create + plan / schedule", "transitivity": "他動詞", "structure": "基本", "image": "予定や進め方を新しく組み立てる。", "point": "create a schedule は納期や進行管理で使いやすいです。", "examples": [
        {"en": "We created a new schedule after the meeting.", "ja": "私たちは会議後に新しいスケジュールを作成しました。", "focus": "created", "object": "a new schedule"},
        {"en": "Can you create a plan for the installation work?", "ja": "設置作業の計画を作成できますか？", "focus": "create", "object": "a plan"},
        {"en": "The team is creating a timeline for the project.", "ja": "チームはその案件の工程表を作成しています。", "focus": "creating", "object": "a timeline"}
      ], "dailyExamples": []},
      {"id": "create-value", "title": "③ 価値・機会を生み出す", "pattern": "create + value / opportunity", "transitivity": "他動詞", "structure": "基本", "image": "相手にとって役立つ価値やチャンスを作る。", "point": "create value / create an opportunity は提案や営業で便利です。", "examples": [
        {"en": "This solution creates value for the client.", "ja": "この解決策は顧客に価値を生み出します。", "focus": "creates", "object": "value"},
        {"en": "The campaign created a new opportunity for us.", "ja": "そのキャンペーンは私たちに新しい機会を生み出しました。", "focus": "created", "object": "a new opportunity"},
        {"en": "Good communication creates trust over time.", "ja": "良いコミュニケーションは時間をかけて信頼を生み出します。", "focus": "creates", "object": "trust"}
      ], "dailyExamples": []},
      {"id": "create-system", "title": "④ 仕組み・デザインを作る", "pattern": "create + system / design", "transitivity": "他動詞", "structure": "基本", "image": "仕組みやデザインを新しく構築する。", "point": "create a system / create a design は開発・制作でよく使います。", "examples": [
        {"en": "The developer created a system to track orders.", "ja": "開発者は注文を管理する仕組みを作りました。", "focus": "created", "object": "a system"},
        {"en": "We are creating a new design for the sign.", "ja": "私たちはその看板の新しいデザインを作成しています。", "focus": "creating", "object": "a new design"},
        {"en": "Please create a folder for this project.", "ja": "この案件用のフォルダを作成してください。", "focus": "create", "object": "a folder"}
      ], "dailyExamples": []},
      {"id": "create-problem", "title": "⑤ 問題・影響を生む", "pattern": "create + problem / issue", "transitivity": "他動詞", "structure": "基本", "image": "行動や状況が新しい問題を発生させる。", "point": "create a problem は『問題を生む』という意味でよく使います。", "examples": [
        {"en": "Changing the size now may create a problem.", "ja": "今サイズを変更すると問題が生じる可能性があります。", "focus": "create", "object": "a problem"},
        {"en": "The missing information created an issue for the estimate.", "ja": "不足情報が見積に問題を生みました。", "focus": "created", "object": "an issue"},
        {"en": "A wrong delivery address can create extra work.", "ja": "間違った納品先住所は追加作業を生む可能性があります。", "focus": "create", "object": "extra work"}
      ], "dailyExamples": []}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase": "create from", "ja": "〜から作る", "image": "材料や情報を元にして作る。", "pattern": "create A from B", "examples": [{"en": "We created the proposal from the client's notes.", "ja": "私たちは顧客のメモを元に提案書を作成しました。", "focus": "created from", "object": "the proposal"}], "dailyExamples": []},
      {"phrase": "create with", "ja": "〜を使って作る", "image": "道具や素材を使って作る。", "pattern": "create A with B", "examples": [{"en": "She created the report with data from Salesforce.", "ja": "彼女はSalesforceのデータを使って報告書を作成しました。", "focus": "created with", "object": "the report"}], "dailyExamples": []},
      {"phrase": "create for", "ja": "〜向けに作る", "image": "相手や目的に合わせて作る。", "pattern": "create A for B", "examples": [{"en": "We created a sample board for the client.", "ja": "私たちは顧客向けにサンプルボードを作成しました。", "focus": "created for", "object": "a sample board"}], "dailyExamples": []},
      {"phrase": "create out of", "ja": "〜から作り出す", "image": "限られた材料や状況から新しいものを作る。", "pattern": "create A out of B", "examples": [{"en": "The team created a solution out of limited resources.", "ja": "チームは限られたリソースから解決策を作り出しました。", "focus": "created out of", "object": "a solution"}], "dailyExamples": []},
      {"phrase": "create around", "ja": "〜を中心に作る", "image": "中心になる考えや条件に合わせて作る。", "pattern": "create A around B", "examples": [{"en": "We created the proposal around the client's budget.", "ja": "私たちは顧客の予算を中心に提案を作成しました。", "focus": "created around", "object": "the proposal"}], "dailyExamples": []}
    ]
  },
  {
    "id": "reach",
    "rank": 50,
    "word": "REACH",
    "ipa": "/riːtʃ/",
    "kana": "リーチ",
    "syllable": "reach",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 基本",
    "core": "目的地・相手・目標まで届く",
    "coreDetail": "REACHは、連絡・荷物・数字・話し合いが目的の場所や状態まで届く感覚です。仕事では顧客に連絡がつく、目標に達する、合意に至る、情報が届く場面でよく使います。",
    "coreVisual": {"from": ["📞 連絡", "📦 荷物", "📈 数字", "🤝 交渉"], "to": "相手・目的地・目標", "label": "こちら側 → 目的地点へ届く"},
    "meanings": [
      {"id": "reach-person", "title": "① 人・会社に連絡がつく", "pattern": "reach + 人・会社", "transitivity": "他動詞", "structure": "基本", "image": "連絡が相手まで届く。", "point": "reach the client は電話やメールで『顧客に連絡がつく』時に使います。", "examples": [
        {"en": "We reached the client by phone this morning.", "ja": "私たちは今朝、電話でその顧客に連絡がつきました。", "focus": "reached", "object": "the client"},
        {"en": "I could not reach the supplier yesterday.", "ja": "私は昨日、その仕入先に連絡がつきませんでした。", "focus": "reach", "object": "the supplier"},
        {"en": "Please try to reach the manager before noon.", "ja": "正午までにマネージャーに連絡を取ってみてください。", "focus": "reach", "object": "the manager"}
      ], "dailyExamples": []},
      {"id": "reach-place", "title": "② 場所・相手先に到着する", "pattern": "reach + 場所", "transitivity": "他動詞", "structure": "基本", "image": "目的地まで届く・到着する。", "point": "荷物やスタッフが現場や事務所に着く時に使えます。", "examples": [
        {"en": "The package reached the office yesterday.", "ja": "その荷物は昨日、事務所に届きました。", "focus": "reached", "object": "the office"},
        {"en": "Our staff reached the site before 9 a.m.", "ja": "スタッフは午前9時前に現場へ到着しました。", "focus": "reached", "object": "the site"},
        {"en": "The truck should reach the warehouse by evening.", "ja": "そのトラックは夕方までに倉庫へ到着するはずです。", "focus": "reach", "object": "the warehouse"}
      ], "dailyExamples": []},
      {"id": "reach-target", "title": "③ 目標・数字に到達する", "pattern": "reach + target / number", "transitivity": "他動詞", "structure": "基本", "image": "設定した数字や目標まで届く。", "point": "reach our target / reach 100 units は売上・生産数で便利です。", "examples": [
        {"en": "We reached our sales target this month.", "ja": "私たちは今月、売上目標に到達しました。", "focus": "reached", "object": "our sales target"},
        {"en": "Production reached 500 units last week.", "ja": "生産数は先週500台に達しました。", "focus": "reached", "object": "500 units"},
        {"en": "The project reached the final stage.", "ja": "その案件は最終段階に到達しました。", "focus": "reached", "object": "the final stage"}
      ], "dailyExamples": []},
      {"id": "reach-agreement", "title": "④ 合意・結論に達する", "pattern": "reach + agreement / decision", "transitivity": "他動詞", "structure": "基本", "image": "話し合いの到達点に着く。", "point": "reach an agreement は交渉でよく使う定番表現です。", "examples": [
        {"en": "We reached an agreement with the client.", "ja": "私たちは顧客と合意に達しました。", "focus": "reached", "object": "an agreement"},
        {"en": "The team reached a decision after the meeting.", "ja": "チームは会議後に決定に至りました。", "focus": "reached", "object": "a decision"},
        {"en": "They reached a conclusion about the design change.", "ja": "彼らはデザイン変更について結論に達しました。", "focus": "reached", "object": "a conclusion"}
      ], "dailyExamples": []},
      {"id": "reach-audience", "title": "⑤ 情報・広告が届く", "pattern": "reach + customers / market", "transitivity": "他動詞", "structure": "基本", "image": "情報や提案が相手のところまで届く。", "point": "マーケティングでは、情報がどれだけ多くの人に届くかを表します。", "examples": [
        {"en": "This campaign reached many new customers.", "ja": "このキャンペーンは多くの新規顧客に届きました。", "focus": "reached", "object": "many new customers"},
        {"en": "Our message did not reach the right audience.", "ja": "私たちのメッセージは適切な層に届きませんでした。", "focus": "reach", "object": "the right audience"},
        {"en": "The announcement reached all branches by email.", "ja": "その通知はメールで全支店に届きました。", "focus": "reached", "object": "all branches"}
      ], "dailyExamples": []}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase": "reach out", "ja": "連絡する・声をかける", "image": "こちらから手を伸ばすように連絡する。", "pattern": "reach out", "examples": [{"en": "Please reach out if you need any support.", "ja": "サポートが必要な場合は連絡してください。", "focus": "reach out"}], "dailyExamples": []},
      {"phrase": "reach out to", "ja": "〜に連絡する", "image": "相手に向かってこちらから連絡する。", "pattern": "reach out to", "examples": [{"en": "I will reach out to the client today.", "ja": "私は今日、その顧客に連絡します。", "focus": "reach out to", "object": "the client"}], "dailyExamples": []},
      {"phrase": "reach for", "ja": "〜に手を伸ばす・目指す", "image": "欲しいものや目標へ手を伸ばす。", "pattern": "reach for", "examples": [{"en": "The team is reaching for a higher sales target.", "ja": "チームはより高い売上目標を目指しています。", "focus": "reaching for", "object": "a higher sales target"}], "dailyExamples": []},
      {"phrase": "reach into", "ja": "〜の中に届く・入り込む", "image": "中まで手や影響が届く。", "pattern": "reach into", "examples": [{"en": "This issue reaches into several departments.", "ja": "この問題はいくつかの部署にまで及んでいます。", "focus": "reaches into", "object": "several departments"}], "dailyExamples": []},
      {"phrase": "reach across", "ja": "〜を越えて届く", "image": "境界や距離を越えて届く。", "pattern": "reach across", "examples": [{"en": "The campaign reached across several regions.", "ja": "そのキャンペーンはいくつかの地域に広がりました。", "focus": "reached across", "object": "several regions"}], "dailyExamples": []},
      {"phrase": "reach beyond", "ja": "〜を超えて届く", "image": "想定範囲を超えて影響が届く。", "pattern": "reach beyond", "examples": [{"en": "The impact reached beyond our original plan.", "ja": "その影響は当初の計画を超えて広がりました。", "focus": "reached beyond", "object": "our original plan"}], "dailyExamples": []},
      {"phrase": "reach back", "ja": "過去にさかのぼる・後ろへ手を伸ばす", "image": "後ろや過去の情報へ手を伸ばす。", "pattern": "reach back", "examples": [{"en": "We reached back to last year's data for comparison.", "ja": "私たちは比較のために昨年のデータまでさかのぼりました。", "focus": "reached back", "object": "to last year's data"}], "dailyExamples": []},
      {"phrase": "reach down", "ja": "下へ手を伸ばす", "image": "下にあるものへ手を伸ばす。", "pattern": "reach down", "examples": [{"en": "He reached down to pick up the dropped sample.", "ja": "彼は落ちたサンプルを拾うために下へ手を伸ばしました。", "focus": "reached down"}], "dailyExamples": []}
    ]
  },
  {
    "id": "return",
    "rank": 51,
    "word": "RETURN",
    "ipa": "/rɪˈtɜːrn/",
    "kana": "リターン",
    "syllable": "re-turn",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 基本",
    "core": "元の場所・相手・状態へ戻る／戻す",
    "coreDetail": "RETURNは、人や物、連絡、状態が元の場所・相手・状態へ戻る感覚です。仕事ではサンプル返送、返品、折り返し連絡、職場復帰、元の条件に戻す場面で使います。",
    "coreVisual": {"from": ["商品", "連絡", "人", "状態"], "to": "元の場所・相手・状態", "label": "外へ出たもの → 元へ戻る"},
    "meanings": [
      {"id": "return-item", "title": "① 物を返す・返送する", "pattern": "return + item", "transitivity": "他動詞", "structure": "基本", "image": "借りたものや確認したものを相手へ戻す。", "point": "return the sample / return the document は仕事でよく使います。", "examples": [
        {"en": "Please return the sample after the test.", "ja": "テスト後にサンプルを返送してください。", "focus": "return", "object": "the sample"},
        {"en": "We returned the documents to the client.", "ja": "私たちは書類を顧客へ返却しました。", "focus": "returned", "object": "the documents"},
        {"en": "The customer returned the product yesterday.", "ja": "顧客は昨日その商品を返品しました。", "focus": "returned", "object": "the product"}
      ], "dailyExamples": []},
      {"id": "return-call", "title": "② 折り返し連絡する", "pattern": "return + call / email", "transitivity": "他動詞", "structure": "基本", "image": "相手から来た連絡に対して返す。", "point": "return a call は『折り返し電話する』という定番表現です。", "examples": [
        {"en": "I will return your call this afternoon.", "ja": "私は今日の午後、あなたに折り返し電話します。", "focus": "return", "object": "your call"},
        {"en": "She returned the client's email this morning.", "ja": "彼女は今朝、顧客のメールに返信しました。", "focus": "returned", "object": "the client's email"},
        {"en": "Please return the call before the meeting.", "ja": "会議前に折り返し電話してください。", "focus": "return", "object": "the call"}
      ], "dailyExamples": []},
      {"id": "return-place", "title": "③ 場所・仕事に戻る", "pattern": "return + to + place / work", "transitivity": "自動詞", "structure": "基本", "image": "元の場所や業務状態へ戻る。", "point": "return to work は『仕事に復帰する』という意味です。", "examples": [
        {"en": "He returned to the office after the site visit.", "ja": "彼は現場訪問後に会社へ戻りました。", "focus": "returned", "object": "to the office"},
        {"en": "She will return to work next Monday.", "ja": "彼女は来週月曜日に仕事へ復帰します。", "focus": "return", "object": "to work"},
        {"en": "We returned to the original plan after the review.", "ja": "私たちは見直し後、元の計画に戻りました。", "focus": "returned", "object": "to the original plan"}
      ], "dailyExamples": []},
      {"id": "return-status", "title": "④ 元の状態に戻る", "pattern": "return + to normal / original condition", "transitivity": "自動詞", "structure": "基本", "image": "一度変わった状態が元へ戻る。", "point": "return to normal はトラブル復旧で便利です。", "examples": [
        {"en": "The system returned to normal after the update.", "ja": "システムは更新後に正常な状態へ戻りました。", "focus": "returned", "object": "to normal"},
        {"en": "The price returned to the original level.", "ja": "価格は元の水準に戻りました。", "focus": "returned", "object": "to the original level"},
        {"en": "The schedule may return to normal next week.", "ja": "スケジュールは来週通常に戻るかもしれません。", "focus": "return", "object": "to normal"}
      ], "dailyExamples": []},
      {"id": "return-result", "title": "⑤ 利益・結果を返す", "pattern": "return + profit / result", "transitivity": "他動詞", "structure": "基本", "image": "投資や作業が結果として返ってくる。", "point": "return a profit は『利益を生む』というやや硬めの表現です。", "examples": [
        {"en": "The project returned a small profit.", "ja": "その案件は少し利益を生みました。", "focus": "returned", "object": "a small profit"},
        {"en": "This investment may return better results next year.", "ja": "この投資は来年、より良い結果を生むかもしれません。", "focus": "return", "object": "better results"},
        {"en": "The new process returned clear benefits.", "ja": "新しい手順は明確な効果をもたらしました。", "focus": "returned", "object": "clear benefits"}
      ], "dailyExamples": []}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase": "return to", "ja": "〜に戻る", "image": "元の場所・状態・話題へ戻る。", "pattern": "return to", "examples": [{"en": "We returned to the original schedule.", "ja": "私たちは元のスケジュールに戻りました。", "focus": "returned to", "object": "the original schedule"}], "dailyExamples": []},
      {"phrase": "return from", "ja": "〜から戻る", "image": "出張・外出・休暇などから戻る。", "pattern": "return from", "examples": [{"en": "He returned from the client site at five.", "ja": "彼は5時に顧客の現場から戻りました。", "focus": "returned from", "object": "the client site"}], "dailyExamples": []},
      {"phrase": "return with", "ja": "〜を持って戻る", "image": "戻る時に情報や物を持ち帰る。", "pattern": "return with", "examples": [{"en": "She returned with feedback from the customer.", "ja": "彼女は顧客からのフィードバックを持って戻りました。", "focus": "returned with", "object": "feedback"}], "dailyExamples": []},
      {"phrase": "return for", "ja": "〜のために戻る", "image": "特定の目的のために戻る。", "pattern": "return for", "examples": [{"en": "The technician returned for a final check.", "ja": "技術者は最終確認のために戻りました。", "focus": "returned for", "object": "a final check"}], "dailyExamples": []},
      {"phrase": "return into", "ja": "〜の中へ戻る・戻す", "image": "元の枠や流れの中へ戻る。", "pattern": "return into", "examples": [{"en": "The data returned into the normal workflow after the fix.", "ja": "修正後、そのデータは通常の業務フローに戻りました。", "focus": "returned into", "object": "the normal workflow"}], "dailyExamples": []}
    ]
  },
'''
p.write_text(text[:start] + new + text[end:])
print('done')
