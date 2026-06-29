from pathlib import Path
p=Path('/mnt/data/v58work/lib/data.ts')
s=p.read_text()
new='''
  {
    "id": "decide",
    "rank": 51,
    "word": "DECIDE",
    "ipa": "/dɪˈsaɪd/",
    "kana": "ディサイド",
    "syllable": "de-cide",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "いくつかの選択肢から一つを選んで決める",
    "coreDetail": "DECIDEは、迷っている状態から一つの方向を選ぶ動詞です。仕事では方針・日程・担当・次のアクションを決める場面でよく使います。",
    "meanings": [
      {
        "id": "make-decision",
        "title": "① 決める",
        "pattern": "DECIDE + 名詞 / to do / that節",
        "transitivity": "他動詞・自動詞",
        "structure": "S + decide + O / S + decide + to do",
        "image": "選択肢の中から進む方向を一つ選ぶ。",
        "point": "decide to do は「〜することに決める」。decide on 名詞は「〜に決める」。",
        "examples": [
          { "en": "We decided to change the schedule.", "ja": "私たちはスケジュールを変更することに決めました。", "focus": "decided", "object": "to change the schedule", "jaFocus": "決めました", "sentencePattern": "S + V + O", "grammarParts": [{"label":"S","text":"We"},{"label":"V","text":"decided"},{"label":"O","text":"to change the schedule"}], "grammarNote": "to change the schedule は decided の内容を表します。" },
          { "en": "Did you decide on the meeting date?", "ja": "あなたは会議の日程を決めましたか？", "focus": "decide on", "object": "the meeting date", "jaFocus": "決めましたか" },
          { "en": "The client decided to approve the design.", "ja": "クライアントはそのデザインを承認することに決めました。", "focus": "decided", "object": "to approve the design", "jaFocus": "決めました" }
        ]
      }
    ],
    "collocations": [
      { "phrase": "decide on", "ja": "〜に決める", "image": "on は決定がその対象に乗るイメージ。", "pattern": "decide on + 名詞", "examples": [
        { "en": "We need to decide on the final color.", "ja": "私たちは最終色を決める必要があります。", "focus": "decide on", "object": "the final color", "jaFocus": "決める" },
        { "en": "Have you decided on a hotel?", "ja": "あなたはホテルを決めましたか？", "focus": "decided on", "object": "a hotel", "jaFocus": "決めましたか" }
      ] }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "explain",
    "rank": 52,
    "word": "EXPLAIN",
    "ipa": "/ɪkˈspleɪn/",
    "kana": "イクスプレイン",
    "syllable": "ex-plain",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "相手に分かるように内容をほどいて伝える",
    "coreDetail": "EXPLAINは、理由・手順・状況を相手が理解できる形で説明する動詞です。",
    "meanings": [{
      "id": "make-clear",
      "title": "① 説明する",
      "pattern": "EXPLAIN + 内容 / explain that節",
      "transitivity": "他動詞",
      "structure": "S + explain + O",
      "image": "複雑な内容を相手に分かる形にする。",
      "point": "explain 人 ではなく、explain the reason to him のように内容を目的語にするのが基本。",
      "examples": [
        { "en": "I explained the reason to the client.", "ja": "私はクライアントに理由を説明しました。", "focus": "explained", "object": "the reason", "jaFocus": "説明しました", "sentencePattern": "S + V + O + M", "grammarParts": [{"label":"S","text":"I"},{"label":"V","text":"explained"},{"label":"O","text":"the reason"},{"label":"M","text":"to the client"}], "grammarNote": "to the client は説明する相手を表します。" },
        { "en": "Can you explain the process again?", "ja": "あなたはその手順をもう一度説明できますか？", "focus": "explain", "object": "the process", "jaFocus": "説明できますか" },
        { "en": "She explained that the delivery was delayed.", "ja": "彼女は納品が遅れていると説明しました。", "focus": "explained", "object": "that the delivery was delayed", "jaFocus": "説明しました" }
      ]
    }],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "improve",
    "rank": 53,
    "word": "IMPROVE",
    "ipa": "/ɪmˈpruːv/",
    "kana": "インプルーヴ",
    "syllable": "im-prove",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "状態や質をより良くする・良くなる",
    "coreDetail": "IMPROVEは、品質・スキル・状況・関係などが良くなる、または良くする時に使います。",
    "meanings": [{
      "id": "make-better",
      "title": "① 改善する・良くなる",
      "pattern": "IMPROVE + 名詞 / improve by itself",
      "transitivity": "他動詞・自動詞",
      "structure": "S + improve + O / S + improve",
      "image": "今より良い状態へ進む。",
      "point": "他動詞なら improve the process、自動詞なら The process improved. の形。",
      "examples": [
        { "en": "We need to improve the process.", "ja": "私たちはその手順を改善する必要があります。", "focus": "improve", "object": "the process", "jaFocus": "改善する" },
        { "en": "Our response time improved last month.", "ja": "私たちの対応時間は先月改善しました。", "focus": "improved", "jaFocus": "改善しました", "sentencePattern": "S + V + M", "grammarParts": [{"label":"S","text":"Our response time"},{"label":"V","text":"improved"},{"label":"M","text":"last month"}] },
        { "en": "This update will improve the user experience.", "ja": "この更新はユーザー体験を改善します。", "focus": "improve", "object": "the user experience", "jaFocus": "改善します" }
      ]
    }],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "manage",
    "rank": 54,
    "word": "MANAGE",
    "ipa": "/ˈmænɪdʒ/",
    "kana": "マネージ",
    "syllable": "man-age",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "物事を管理し、何とかやり遂げる",
    "coreDetail": "MANAGEは、管理するだけでなく、限られた条件の中で何とかできるという意味でも使います。",
    "meanings": [{
      "id": "control-handle",
      "title": "① 管理する・何とかやる",
      "pattern": "MANAGE + 名詞 / manage to do",
      "transitivity": "他動詞",
      "structure": "S + manage + O / S + manage + to do",
      "image": "状況をコントロールして前に進める。",
      "point": "manage to do は「何とか〜する」。仕事で非常に使いやすい。",
      "examples": [
        { "en": "I manage several projects at the same time.", "ja": "私は複数の案件を同時に管理しています。", "focus": "manage", "object": "several projects", "jaFocus": "管理しています" },
        { "en": "We managed to finish the report today.", "ja": "私たちは今日なんとか報告書を終えることができました。", "focus": "managed", "object": "to finish the report", "jaFocus": "なんとか終えることができました" },
        { "en": "Can you manage this task by Friday?", "ja": "あなたは金曜日までにこの作業を対応できますか？", "focus": "manage", "object": "this task", "jaFocus": "対応できますか" }
      ]
    }],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "prepare",
    "rank": 55,
    "word": "PREPARE",
    "ipa": "/prɪˈper/",
    "kana": "プリペア",
    "syllable": "pre-pare",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "必要なものを前もって整える",
    "coreDetail": "PREPAREは、会議・資料・提案・出張などに向けて準備する時に使います。",
    "meanings": [{
      "id": "get-ready",
      "title": "① 準備する",
      "pattern": "PREPARE + 名詞 / prepare for + 名詞",
      "transitivity": "他動詞・自動詞",
      "structure": "S + prepare + O / S + prepare for + 名詞",
      "image": "本番前に必要な状態を作る。",
      "point": "prepare the document は資料を準備する。prepare for the meeting は会議に向けて準備する。",
      "examples": [
        { "en": "I prepared the proposal yesterday.", "ja": "私は昨日、提案書を準備しました。", "focus": "prepared", "object": "the proposal", "jaFocus": "準備しました" },
        { "en": "We need to prepare for the client meeting.", "ja": "私たちはクライアントとの会議に向けて準備する必要があります。", "focus": "prepare", "object": "for the client meeting", "jaFocus": "準備する" },
        { "en": "Please prepare the latest data.", "ja": "最新版のデータを準備してください。", "focus": "prepare", "object": "the latest data", "jaFocus": "準備してください" }
      ]
    }],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "plan",
    "rank": 56,
    "word": "PLAN",
    "ipa": "/plæn/",
    "kana": "プラン",
    "syllable": "plan",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "先の行動を考えて組み立てる",
    "coreDetail": "PLANは、予定・作業・出張・戦略などを事前に組み立てる動詞です。",
    "meanings": [{
      "id": "schedule-design",
      "title": "① 計画する",
      "pattern": "PLAN + 名詞 / plan to do",
      "transitivity": "他動詞・自動詞",
      "structure": "S + plan + O / S + plan + to do",
      "image": "先の流れを決めておく。",
      "point": "plan to do は「〜する予定です」。",
      "examples": [
        { "en": "We planned the schedule for next week.", "ja": "私たちは来週の予定を立てました。", "focus": "planned", "object": "the schedule", "jaFocus": "立てました" },
        { "en": "I plan to visit the client tomorrow.", "ja": "私は明日クライアントを訪問する予定です。", "focus": "plan", "object": "to visit the client", "jaFocus": "予定です" },
        { "en": "Can we plan the next steps today?", "ja": "私たちは今日、次のステップを計画できますか？", "focus": "plan", "object": "the next steps", "jaFocus": "計画できますか" }
      ]
    }],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "offer",
    "rank": 57,
    "word": "OFFER",
    "ipa": "/ˈɔːfər/",
    "kana": "オファー",
    "syllable": "of-fer",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "相手に選べるものとして差し出す",
    "coreDetail": "OFFERは、提案・支援・条件・価格などを相手に提示する時に使います。",
    "meanings": [{
      "id": "provide-propose",
      "title": "① 提供する・提案する",
      "pattern": "OFFER + 名詞 / offer to do",
      "transitivity": "他動詞",
      "structure": "S + offer + O / S + offer + to do",
      "image": "相手が受け取れる形で差し出す。",
      "point": "offer to do は「〜しましょうかと申し出る」。",
      "examples": [
        { "en": "We offered a discount to the client.", "ja": "私たちはクライアントに割引を提示しました。", "focus": "offered", "object": "a discount", "jaFocus": "提示しました" },
        { "en": "She offered to help with the report.", "ja": "彼女は報告書を手伝うと申し出ました。", "focus": "offered", "object": "to help with the report", "jaFocus": "申し出ました" },
        { "en": "Can we offer another option?", "ja": "私たちは別の選択肢を提案できますか？", "focus": "offer", "object": "another option", "jaFocus": "提案できますか" }
      ]
    }],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "support",
    "rank": 58,
    "word": "SUPPORT",
    "ipa": "/səˈpɔːrt/",
    "kana": "サポート",
    "syllable": "sup-port",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "相手や物事を下から支えて助ける",
    "coreDetail": "SUPPORTは、人・チーム・提案・作業を助けたり支えたりする時に使います。",
    "meanings": [{
      "id": "help-backup",
      "title": "① 支援する・支える",
      "pattern": "SUPPORT + 人 / 名詞",
      "transitivity": "他動詞",
      "structure": "S + support + O",
      "image": "相手が動けるように後ろから支える。",
      "point": "helpより少し仕事寄りで、継続的な支援にも使える。",
      "examples": [
        { "en": "I will support the sales team.", "ja": "私は営業チームを支援します。", "focus": "support", "object": "the sales team", "jaFocus": "支援します" },
        { "en": "We support this proposal.", "ja": "私たちはこの提案を支持します。", "focus": "support", "object": "this proposal", "jaFocus": "支持します" },
        { "en": "Can you support the installation tomorrow?", "ja": "あなたは明日の設置をサポートできますか？", "focus": "support", "object": "the installation", "jaFocus": "サポートできますか" }
      ]
    }],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "discuss",
    "rank": 59,
    "word": "DISCUSS",
    "ipa": "/dɪˈskʌs/",
    "kana": "ディスカス",
    "syllable": "dis-cuss",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "一つのテーマについて話し合う",
    "coreDetail": "DISCUSSは、課題・条件・予定・方針などを話し合う時に使います。about を直接つけず discuss the issue が基本です。",
    "meanings": [{
      "id": "talk-about-topic",
      "title": "① 話し合う",
      "pattern": "DISCUSS + 議題",
      "transitivity": "他動詞",
      "structure": "S + discuss + O",
      "image": "一つのテーマを相手と掘り下げて話す。",
      "point": "discuss about は基本的に不要。discuss the schedule の形で覚える。",
      "examples": [
        { "en": "We discussed the schedule with the client.", "ja": "私たちはクライアントとスケジュールについて話し合いました。", "focus": "discussed", "object": "the schedule", "jaFocus": "話し合いました" },
        { "en": "Let's discuss the issue after lunch.", "ja": "昼食後にその問題について話し合いましょう。", "focus": "discuss", "object": "the issue", "jaFocus": "話し合いましょう" },
        { "en": "Did you discuss the price with them?", "ja": "あなたは彼らと価格について話し合いましたか？", "focus": "discuss", "object": "the price", "jaFocus": "話し合いましたか" }
      ]
    }],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "confirm",
    "rank": 60,
    "word": "CONFIRM",
    "ipa": "/kənˈfɜːrm/",
    "kana": "コンファーム",
    "syllable": "con-firm",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "正しいかどうかを確認して確定させる",
    "coreDetail": "CONFIRMは、事実・予定・条件・数量などを確認して確定する時に使います。checkより少し正式でビジネス向きです。",
    "meanings": [{
      "id": "verify-fix",
      "title": "① 確認する・確定する",
      "pattern": "CONFIRM + 名詞 / that節",
      "transitivity": "他動詞",
      "structure": "S + confirm + O",
      "image": "不確かなものを確かな状態にする。",
      "point": "confirm the date / confirm that ... の形でよく使う。",
      "examples": [
        { "en": "Please confirm the delivery date.", "ja": "納品日を確認してください。", "focus": "confirm", "object": "the delivery date", "jaFocus": "確認してください" },
        { "en": "We confirmed that the order was correct.", "ja": "私たちは注文内容が正しいことを確認しました。", "focus": "confirmed", "object": "that the order was correct", "jaFocus": "確認しました" },
        { "en": "Can you confirm the quantity by noon?", "ja": "あなたは正午までに数量を確認できますか？", "focus": "confirm", "object": "the quantity", "jaFocus": "確認できますか" }
      ]
    }],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "receive",
    "rank": 61,
    "word": "RECEIVE",
    "ipa": "/rɪˈsiːv/",
    "kana": "リシーヴ",
    "syllable": "re-ceive",
    "transitivity": "他動詞",
    "importance": "★★★☆☆ 基本",
    "core": "相手から来たものを受け取る",
    "coreDetail": "RECEIVEは、メール・資料・連絡・商品などを正式に受け取る時に使います。getより少し丁寧です。",
    "meanings": [{
      "id": "get-formally",
      "title": "① 受け取る",
      "pattern": "RECEIVE + 名詞",
      "transitivity": "他動詞",
      "structure": "S + receive + O",
      "image": "相手から届いたものを受け取る。",
      "point": "ビジネスメールでは receive your email / receive the document が自然。",
      "examples": [
        { "en": "I received your email this morning.", "ja": "私は今朝あなたのメールを受け取りました。", "focus": "received", "object": "your email", "jaFocus": "受け取りました" },
        { "en": "We received the documents from the supplier.", "ja": "私たちは仕入先から資料を受け取りました。", "focus": "received", "object": "the documents", "jaFocus": "受け取りました" },
        { "en": "Did you receive the sample?", "ja": "あなたはサンプルを受け取りましたか？", "focus": "receive", "object": "the sample", "jaFocus": "受け取りましたか" }
      ]
    }],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "deliver",
    "rank": 62,
    "word": "DELIVER",
    "ipa": "/dɪˈlɪvər/",
    "kana": "デリバー",
    "syllable": "de-liv-er",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★☆☆ 基本",
    "core": "相手のところまで届ける・結果を出す",
    "coreDetail": "DELIVERは、商品・資料・結果を相手に届ける時に使います。仕事では納品する、成果を出すという意味でも重要です。",
    "meanings": [{
      "id": "send-result",
      "title": "① 届ける・納品する・成果を出す",
      "pattern": "DELIVER + 名詞",
      "transitivity": "他動詞",
      "structure": "S + deliver + O",
      "image": "相手が受け取れる場所まで持っていく。",
      "point": "deliver products は商品を納品する。deliver results は成果を出す。",
      "examples": [
        { "en": "We delivered the samples yesterday.", "ja": "私たちは昨日サンプルを納品しました。", "focus": "delivered", "object": "the samples", "jaFocus": "納品しました" },
        { "en": "Can you deliver the data by Friday?", "ja": "あなたは金曜日までにデータを届けられますか？", "focus": "deliver", "object": "the data", "jaFocus": "届けられますか" },
        { "en": "The team delivered good results.", "ja": "チームは良い成果を出しました。", "focus": "delivered", "object": "good results", "jaFocus": "成果を出しました" }
      ]
    }],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "solve",
    "rank": 63,
    "word": "SOLVE",
    "ipa": "/sɑːlv/",
    "kana": "ソルヴ",
    "syllable": "solve",
    "transitivity": "他動詞",
    "importance": "★★★☆☆ 基本",
    "core": "問題を解いて解決状態にする",
    "coreDetail": "SOLVEは、問題・課題・トラブルに答えを出して解決する時に使います。",
    "meanings": [{
      "id": "fix-problem",
      "title": "① 解決する",
      "pattern": "SOLVE + 問題",
      "transitivity": "他動詞",
      "structure": "S + solve + O",
      "image": "問題の原因や答えを見つけて解決する。",
      "point": "solve the problem / solve the issue が基本。",
      "examples": [
        { "en": "We need to solve this issue today.", "ja": "私たちは今日この問題を解決する必要があります。", "focus": "solve", "object": "this issue", "jaFocus": "解決する" },
        { "en": "She solved the problem quickly.", "ja": "彼女はその問題をすぐに解決しました。", "focus": "solved", "object": "the problem", "jaFocus": "解決しました" },
        { "en": "Can this update solve the error?", "ja": "この更新でそのエラーを解決できますか？", "focus": "solve", "object": "the error", "jaFocus": "解決できますか" }
      ]
    }],
    "collocations": [],
    "phrasalVerbs": []
  }
'''
marker='''  }
];


const dailyMeaningExamples'''
if marker not in s:
    raise SystemExit('marker not found')
s=s.replace(marker, '  },\n'+new+'\n];\n\n\nconst dailyMeaningExamples', 1)
p.write_text(s)
