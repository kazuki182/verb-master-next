export type Example = {
  en: string;
  ja: string;
  focus?: string;
  object?: string;
  jaFocus?: string;
};

export type MeaningBlock = {
  id: string;
  title: string;
  pattern: string;
  transitivity: string;
  structure: string;
  image: string;
  point: string;
  examples: Example[];
};

export type PhraseBlock = {
  phrase: string;
  ja: string;
  image: string;
  pattern: string;
  examples: Example[];
};

export type Verb = {
  id: string;
  rank: number;
  word: string;
  ipa: string;
  kana: string;
  syllable: string;
  transitivity: string;
  importance: string;
  core: string;
  coreDetail: string;
  meanings: MeaningBlock[];
  collocations: PhraseBlock[];
  phrasalVerbs: PhraseBlock[];
};

export const verbs: Verb[] = [
  {
    "id": "get",
    "rank": 1,
    "word": "GET",
    "ipa": "/ɡet/",
    "kana": "ゲット",
    "syllable": "get",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "自分のものになる",
    "coreDetail": "物・情報・許可・機会・状態・場所が、自分の領域に入ってくるイメージ。社会人英語ではメール確認、承認取得、案件獲得、状況変化まで幅広く使う。",
    "meanings": [
      {
        "id": "obtain",
        "title": "① 手に入れる・獲得する",
        "pattern": "GET + 名詞",
        "transitivity": "他動詞",
        "structure": "S + get + O（目的語）",
        "image": "外にある物・案件・承認などを自分の側に取り込む。",
        "point": "get の後ろに「何を手に入れたか」を置く。仕事では client, project, approval, information などと相性が良い。",
        "examples": [
          {
            "en": "I got a new client this month.",
            "ja": "今月、新規顧客を獲得した。",
            "focus": "got",
            "object": "a new client",
            "jaFocus": "獲得した"
          },
          {
            "en": "We got a new project from the Singapore office.",
            "ja": "シンガポール本社から新しい案件を獲得した。",
            "focus": "got",
            "object": "a new project",
            "jaFocus": "獲得した"
          },
          {
            "en": "I got approval from my manager.",
            "ja": "上司の承認を得た。",
            "focus": "got",
            "object": "approval",
            "jaFocus": "得た"
          },
          {
            "en": "Did you get the information from the client?",
            "ja": "クライアントから情報を入手しましたか？",
            "focus": "get",
            "object": "the information",
            "jaFocus": "入手"
          },
          {
            "en": "We finally got the budget for this project.",
            "ja": "ようやくこの案件の予算を確保した。",
            "focus": "got",
            "object": "the budget",
            "jaFocus": "確保した"
          }
        ]
      },
      {
        "id": "become",
        "title": "② 〜になる",
        "pattern": "GET + 形容詞",
        "transitivity": "自動詞に近い使い方",
        "structure": "S + get + C（補語）",
        "image": "ある状態が自分や状況に入ってくる。",
        "point": "get の後ろに状態を表す形容詞を置く。busy, better, difficult, ready など社会人会話でよく使う。",
        "examples": [
          {
            "en": "Things are getting busy this week.",
            "ja": "今週は忙しくなってきている。",
            "focus": "getting",
            "jaFocus": "忙しくなって"
          },
          {
            "en": "The schedule is getting tight.",
            "ja": "スケジュールが厳しくなってきている。",
            "focus": "getting",
            "jaFocus": "厳しくなって"
          },
          {
            "en": "Our communication is getting better.",
            "ja": "私たちのコミュニケーションは良くなっている。",
            "focus": "getting",
            "jaFocus": "良くなって"
          },
          {
            "en": "The issue got complicated.",
            "ja": "その問題は複雑になった。",
            "focus": "got",
            "jaFocus": "複雑になった"
          },
          {
            "en": "Let's get ready for the meeting.",
            "ja": "会議の準備をしましょう。",
            "focus": "get",
            "jaFocus": "準備"
          }
        ]
      },
      {
        "id": "arrive",
        "title": "③ 到着する",
        "pattern": "GET TO + 場所 / GET HOME",
        "transitivity": "自動詞",
        "structure": "S + get + to 場所",
        "image": "目的地が自分の到達範囲に入る。",
        "point": "場所には get to を使う。ただし home は副詞なので get home。",
        "examples": [
          {
            "en": "I got to the office at nine.",
            "ja": "9時にオフィスに着いた。",
            "focus": "got",
            "jaFocus": "着いた"
          },
          {
            "en": "What time did you get to the meeting room?",
            "ja": "何時に会議室へ着きましたか？",
            "focus": "get",
            "jaFocus": "着きました"
          },
          {
            "en": "I got home late after the client meeting.",
            "ja": "クライアントとの会議後、遅く帰宅した。",
            "focus": "got",
            "jaFocus": "帰宅した"
          }
        ]
      },
      {
        "id": "understand",
        "title": "④ 理解する",
        "pattern": "GET + 内容",
        "transitivity": "他動詞",
        "structure": "S + get + O（内容）",
        "image": "意味や意図が自分の中に入ってくる。",
        "point": "I get it. は「分かりました」。ビジネスの短い返答で非常によく使える。",
        "examples": [
          {
            "en": "I get it.",
            "ja": "分かりました。",
            "focus": "get",
            "object": "it",
            "jaFocus": "分かりました"
          },
          {
            "en": "I don't get the point.",
            "ja": "要点が分かりません。",
            "focus": "get",
            "object": "the point",
            "jaFocus": "分かりません"
          },
          {
            "en": "Do you get what I mean?",
            "ja": "私の言いたいことは分かりますか？",
            "focus": "get",
            "jaFocus": "分かりますか"
          }
        ]
      },
      {
        "id": "receive",
        "title": "⑤ 受け取る・確認する",
        "pattern": "GET + メール・資料・連絡",
        "transitivity": "他動詞",
        "structure": "S + get + O（受け取るもの）",
        "image": "相手から来たものが自分のところに入る。",
        "point": "メール・資料・見積・連絡を受け取った時に使う。社会人には最重要。",
        "examples": [
          {
            "en": "I got your email.",
            "ja": "メールを確認しました。",
            "focus": "got",
            "object": "your email",
            "jaFocus": "確認しました"
          },
          {
            "en": "I got the report this morning.",
            "ja": "今朝、報告書を受け取りました。",
            "focus": "got",
            "object": "the report",
            "jaFocus": "受け取りました"
          },
          {
            "en": "I got the quotation from the supplier.",
            "ja": "仕入先から見積書を受け取りました。",
            "focus": "got",
            "object": "the quotation",
            "jaFocus": "受け取りました"
          },
          {
            "en": "Did you get my message?",
            "ja": "私のメッセージを確認しましたか？",
            "focus": "get",
            "object": "my message",
            "jaFocus": "確認しました"
          }
        ]
      },
      {
        "id": "permission",
        "title": "⑥ 許可を得る",
        "pattern": "GET + permission / approval",
        "transitivity": "他動詞",
        "structure": "S + get + O（許可・承認）",
        "image": "許可や承認が自分の側に来る。",
        "point": "permission は許可、approval は承認。社内確認や稟議の文脈で使いやすい。",
        "examples": [
          {
            "en": "I got permission to share the file.",
            "ja": "そのファイルを共有する許可を得ました。",
            "focus": "got",
            "object": "permission",
            "jaFocus": "許可を得ました"
          },
          {
            "en": "We need to get approval before ordering.",
            "ja": "発注前に承認を得る必要があります。",
            "focus": "get",
            "object": "approval",
            "jaFocus": "承認を得る"
          },
          {
            "en": "Did you get permission from your manager?",
            "ja": "上司から許可を得ましたか？",
            "focus": "get",
            "object": "permission",
            "jaFocus": "許可を得ましたか"
          }
        ]
      },
      {
        "id": "chance",
        "title": "⑦ 機会を得る",
        "pattern": "GET + chance / opportunity",
        "transitivity": "他動詞",
        "structure": "S + get + O（機会）",
        "image": "チャンスや機会が自分のところに来る。",
        "point": "chance は会話寄り、opportunity は少し丁寧。",
        "examples": [
          {
            "en": "I got a chance to join the meeting.",
            "ja": "会議に参加する機会を得ました。",
            "focus": "got",
            "object": "a chance",
            "jaFocus": "機会を得ました"
          },
          {
            "en": "We got an opportunity to work with a new client.",
            "ja": "新しい顧客と仕事をする機会を得ました。",
            "focus": "got",
            "object": "an opportunity",
            "jaFocus": "機会を得ました"
          },
          {
            "en": "I finally got a chance to speak with him.",
            "ja": "ようやく彼と話す機会を得ました。",
            "focus": "got",
            "object": "a chance",
            "jaFocus": "機会を得ました"
          }
        ]
      },
      {
        "id": "sick",
        "title": "⑧ 体調が悪くなる",
        "pattern": "GET + sick / tired / stressed",
        "transitivity": "自動詞に近い使い方",
        "structure": "S + get + C（状態）",
        "image": "体調や感情の状態が自分に入る。",
        "point": "社会人会話では体調・疲労・ストレスの変化を自然に言える。",
        "examples": [
          {
            "en": "I got sick last week.",
            "ja": "先週、体調を崩しました。",
            "focus": "got",
            "jaFocus": "体調を崩しました"
          },
          {
            "en": "I got tired after the long meeting.",
            "ja": "長い会議の後で疲れました。",
            "focus": "got",
            "jaFocus": "疲れました"
          },
          {
            "en": "I get stressed when deadlines are tight.",
            "ja": "締切が厳しいとストレスを感じます。",
            "focus": "get",
            "jaFocus": "ストレスを感じます"
          }
        ]
      },
      {
        "id": "buy",
        "title": "⑨ 買う・入手する",
        "pattern": "GET + 物",
        "transitivity": "他動詞",
        "structure": "S + get + O（買った物・入手した物）",
        "image": "買ったもの・入手したものを自分のものにする。",
        "point": "buy よりカジュアルに「買う・入手する」を表せる。",
        "examples": [
          {
            "en": "Where did you get that laptop?",
            "ja": "そのノートPCはどこで買いましたか？",
            "focus": "get",
            "object": "that laptop",
            "jaFocus": "買いました"
          },
          {
            "en": "I got this monitor online.",
            "ja": "このモニターはオンラインで買いました。",
            "focus": "got",
            "object": "this monitor",
            "jaFocus": "買いました"
          },
          {
            "en": "Can we get new samples by Friday?",
            "ja": "金曜日までに新しいサンプルを入手できますか？",
            "focus": "get",
            "object": "new samples",
            "jaFocus": "入手できますか"
          }
        ]
      },
      {
        "id": "make_happen",
        "title": "⑩ 〜してもらう・動かす",
        "pattern": "GET + 人 + to 動詞",
        "transitivity": "他動詞",
        "structure": "S + get + 人 + to do",
        "image": "人が動いてくれる状態を作る。",
        "point": "少し上級だが、仕事では「誰かに〜してもらう」でよく使える。",
        "examples": [
          {
            "en": "I'll get Tanaka to check the document.",
            "ja": "田中さんに資料を確認してもらいます。",
            "focus": "get",
            "jaFocus": "確認してもらいます"
          },
          {
            "en": "Can you get the supplier to send the samples?",
            "ja": "仕入先にサンプルを送ってもらえますか？",
            "focus": "get",
            "jaFocus": "送ってもらえますか"
          },
          {
            "en": "We need to get the team to agree on this.",
            "ja": "チームにこの件で合意してもらう必要があります。",
            "focus": "get",
            "jaFocus": "合意してもらう"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "get ready",
        "ja": "準備する",
        "image": "ready（準備できた状態）になる。会議・出張・商談前によく使う。",
        "pattern": "get + 形容詞",
        "examples": [
          {
            "en": "Let's get ready for the client meeting.",
            "ja": "クライアントとの会議の準備をしましょう。",
            "focus": "get ready",
            "jaFocus": "準備"
          },
          {
            "en": "I'm getting ready for the presentation.",
            "ja": "プレゼンの準備をしています。",
            "focus": "getting ready",
            "jaFocus": "準備"
          },
          {
            "en": "Please get ready by three.",
            "ja": "3時までに準備してください。",
            "focus": "get ready",
            "jaFocus": "準備"
          }
        ]
      },
      {
        "phrase": "get better",
        "ja": "良くなる・改善する",
        "image": "better（より良い状態）になる。能力・状況・体調に使える。",
        "pattern": "get + 形容詞",
        "examples": [
          {
            "en": "Our process is getting better.",
            "ja": "私たちのプロセスは改善しています。",
            "focus": "getting better",
            "jaFocus": "改善"
          },
          {
            "en": "Your presentation is getting better.",
            "ja": "あなたのプレゼンは良くなっています。",
            "focus": "getting better",
            "jaFocus": "良くなって"
          },
          {
            "en": "The situation will get better soon.",
            "ja": "状況はすぐに良くなるでしょう。",
            "focus": "get better",
            "jaFocus": "良くなる"
          }
        ]
      },
      {
        "phrase": "get worse",
        "ja": "悪化する",
        "image": "worse（より悪い状態）になる。問題・状況・体調に使う。",
        "pattern": "get + 形容詞",
        "examples": [
          {
            "en": "The issue is getting worse.",
            "ja": "その問題は悪化しています。",
            "focus": "getting worse",
            "jaFocus": "悪化"
          },
          {
            "en": "The delay got worse last week.",
            "ja": "先週、遅延がさらに悪化しました。",
            "focus": "got worse",
            "jaFocus": "悪化"
          },
          {
            "en": "We should act before things get worse.",
            "ja": "状況が悪化する前に対応すべきです。",
            "focus": "get worse",
            "jaFocus": "悪化"
          }
        ]
      },
      {
        "phrase": "get started",
        "ja": "始める",
        "image": "started（始まった状態）になる。会議や作業開始に便利。",
        "pattern": "get + 過去分詞",
        "examples": [
          {
            "en": "Let's get started.",
            "ja": "始めましょう。",
            "focus": "get started",
            "jaFocus": "始め"
          },
          {
            "en": "We should get started with the agenda.",
            "ja": "議題から始めましょう。",
            "focus": "get started",
            "jaFocus": "始め"
          },
          {
            "en": "Can we get started now?",
            "ja": "今始めてもいいですか？",
            "focus": "get started",
            "jaFocus": "始め"
          }
        ]
      },
      {
        "phrase": "get involved",
        "ja": "関わる",
        "image": "involved（関わっている状態）になる。案件やプロジェクト参加に使う。",
        "pattern": "get + 過去分詞",
        "examples": [
          {
            "en": "I got involved in this project last month.",
            "ja": "先月このプロジェクトに関わるようになりました。",
            "focus": "got involved",
            "jaFocus": "関わる"
          },
          {
            "en": "We need to get the sales team involved.",
            "ja": "営業チームにも関わってもらう必要があります。",
            "focus": "get involved",
            "jaFocus": "関わって"
          },
          {
            "en": "He got involved in the discussion.",
            "ja": "彼はその議論に参加しました。",
            "focus": "got involved",
            "jaFocus": "参加"
          }
        ]
      },
      {
        "phrase": "get used to",
        "ja": "慣れる",
        "image": "used to（慣れている状態）になる。新しい仕事・環境に使う。",
        "pattern": "get used to + 名詞 / 動名詞",
        "examples": [
          {
            "en": "I'm getting used to the new system.",
            "ja": "新しいシステムに慣れてきました。",
            "focus": "getting used to",
            "jaFocus": "慣れて"
          },
          {
            "en": "It takes time to get used to remote work.",
            "ja": "リモートワークに慣れるには時間がかかります。",
            "focus": "get used to",
            "jaFocus": "慣れる"
          },
          {
            "en": "Have you got used to the new process?",
            "ja": "新しい手順には慣れましたか？",
            "focus": "got used to",
            "jaFocus": "慣れました"
          }
        ]
      },
      {
        "phrase": "get tired",
        "ja": "疲れる",
        "image": "tired（疲れた状態）になる。体力・集中力の低下を表す。",
        "pattern": "get + 形容詞",
        "examples": [
          {
            "en": "I get tired after back-to-back meetings.",
            "ja": "連続会議の後は疲れます。",
            "focus": "get tired",
            "jaFocus": "疲れ"
          },
          {
            "en": "She got tired during the long call.",
            "ja": "彼女は長い電話中に疲れました。",
            "focus": "got tired",
            "jaFocus": "疲れ"
          },
          {
            "en": "Don't get too tired before the presentation.",
            "ja": "プレゼン前に疲れすぎないでください。",
            "focus": "get too tired",
            "jaFocus": "疲れすぎ"
          }
        ]
      },
      {
        "phrase": "get angry",
        "ja": "怒る",
        "image": "angry（怒った状態）になる。感情変化に使う。",
        "pattern": "get + 形容詞",
        "examples": [
          {
            "en": "The client got angry about the delay.",
            "ja": "クライアントは遅延について怒りました。",
            "focus": "got angry",
            "jaFocus": "怒りました"
          },
          {
            "en": "Don't get angry during the meeting.",
            "ja": "会議中に怒らないでください。",
            "focus": "get angry",
            "jaFocus": "怒らない"
          },
          {
            "en": "He gets angry when reports are late.",
            "ja": "報告書が遅れると彼は怒ります。",
            "focus": "gets angry",
            "jaFocus": "怒ります"
          }
        ]
      },
      {
        "phrase": "get close",
        "ja": "近づく",
        "image": "close（近い状態）になる。期限・目標・関係性に使える。",
        "pattern": "get + 形容詞",
        "examples": [
          {
            "en": "We are getting close to the deadline.",
            "ja": "締切が近づいています。",
            "focus": "getting close",
            "jaFocus": "近づいて"
          },
          {
            "en": "The team got close to the target.",
            "ja": "チームは目標に近づきました。",
            "focus": "got close",
            "jaFocus": "近づき"
          },
          {
            "en": "Let's get close to the final design.",
            "ja": "最終デザインに近づけましょう。",
            "focus": "get close",
            "jaFocus": "近づけ"
          }
        ]
      },
      {
        "phrase": "get serious",
        "ja": "本気になる・深刻になる",
        "image": "serious（本気・深刻な状態）になる。仕事の温度感に使える。",
        "pattern": "get + 形容詞",
        "examples": [
          {
            "en": "We need to get serious about quality.",
            "ja": "品質について本気で取り組む必要があります。",
            "focus": "get serious",
            "jaFocus": "本気で"
          },
          {
            "en": "The problem is getting serious.",
            "ja": "その問題は深刻になっています。",
            "focus": "getting serious",
            "jaFocus": "深刻"
          },
          {
            "en": "Management got serious about the issue.",
            "ja": "経営陣はその問題に本腰を入れました。",
            "focus": "got serious",
            "jaFocus": "本腰"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "get up",
        "ja": "起きる・立ち上がる",
        "image": "up は上方向。体や状態が上に起きるイメージ。",
        "pattern": "get + up",
        "examples": [
          {
            "en": "I get up at six on weekdays.",
            "ja": "平日は6時に起きます。",
            "focus": "get up",
            "jaFocus": "起き"
          },
          {
            "en": "He got up and explained the issue.",
            "ja": "彼は立ち上がって問題を説明しました。",
            "focus": "got up",
            "jaFocus": "立ち上がって"
          },
          {
            "en": "What time do you get up for work?",
            "ja": "仕事の日は何時に起きますか？",
            "focus": "get up",
            "jaFocus": "起きます"
          }
        ]
      },
      {
        "phrase": "get out",
        "ja": "出る・抜け出す",
        "image": "out は外へ。場所・状況から外に出る。",
        "pattern": "get + out",
        "examples": [
          {
            "en": "Let's get out of the meeting room.",
            "ja": "会議室を出ましょう。",
            "focus": "get out",
            "jaFocus": "出ましょう"
          },
          {
            "en": "We need to get out of this situation.",
            "ja": "この状況から抜け出す必要があります。",
            "focus": "get out",
            "jaFocus": "抜け出す"
          },
          {
            "en": "He got out of the contract.",
            "ja": "彼はその契約から抜けました。",
            "focus": "got out",
            "jaFocus": "抜けました"
          }
        ]
      },
      {
        "phrase": "get in",
        "ja": "入る・到着する",
        "image": "in は中へ。建物・車・状況に入る。",
        "pattern": "get + in",
        "examples": [
          {
            "en": "What time did you get in today?",
            "ja": "今日は何時に出社しましたか？",
            "focus": "get in",
            "jaFocus": "出社"
          },
          {
            "en": "Please get in the car.",
            "ja": "車に乗ってください。",
            "focus": "get in",
            "jaFocus": "乗って"
          },
          {
            "en": "The order got in yesterday.",
            "ja": "注文は昨日入りました。",
            "focus": "got in",
            "jaFocus": "入りました"
          }
        ]
      },
      {
        "phrase": "get on",
        "ja": "乗る・進める",
        "image": "on は接触・継続。乗り物に乗る、仕事を進める。",
        "pattern": "get + on",
        "examples": [
          {
            "en": "I got on the train at Shinjuku.",
            "ja": "新宿で電車に乗りました。",
            "focus": "got on",
            "jaFocus": "乗りました"
          },
          {
            "en": "Let's get on with the task.",
            "ja": "その作業を進めましょう。",
            "focus": "get on",
            "jaFocus": "進め"
          },
          {
            "en": "How are you getting on with the project?",
            "ja": "その案件は順調に進んでいますか？",
            "focus": "getting on",
            "jaFocus": "進んで"
          }
        ]
      },
      {
        "phrase": "get off",
        "ja": "降りる・離れる",
        "image": "off は離れる。乗り物・仕事・電話から離れる。",
        "pattern": "get + off",
        "examples": [
          {
            "en": "I got off the train at Tokyo Station.",
            "ja": "東京駅で電車を降りました。",
            "focus": "got off",
            "jaFocus": "降りました"
          },
          {
            "en": "I just got off a call with the client.",
            "ja": "クライアントとの電話が今終わりました。",
            "focus": "got off",
            "jaFocus": "終わりました"
          },
          {
            "en": "What time do you get off work?",
            "ja": "何時に仕事が終わりますか？",
            "focus": "get off",
            "jaFocus": "終わります"
          }
        ]
      },
      {
        "phrase": "get back",
        "ja": "戻る・折り返す",
        "image": "back は戻る。場所・連絡・状態が戻る。",
        "pattern": "get + back",
        "examples": [
          {
            "en": "I'll get back to you by tomorrow.",
            "ja": "明日までに折り返します。",
            "focus": "get back",
            "jaFocus": "折り返し"
          },
          {
            "en": "I got back to the office after lunch.",
            "ja": "昼食後にオフィスへ戻りました。",
            "focus": "got back",
            "jaFocus": "戻りました"
          },
          {
            "en": "Can we get back to the main topic?",
            "ja": "本題に戻れますか？",
            "focus": "get back",
            "jaFocus": "戻れます"
          }
        ]
      },
      {
        "phrase": "get over",
        "ja": "乗り越える",
        "image": "over は越える。問題や困難を越えて向こう側へ行く。",
        "pattern": "get + over + 名詞",
        "examples": [
          {
            "en": "We got over the first problem.",
            "ja": "最初の問題を乗り越えました。",
            "focus": "got over",
            "jaFocus": "乗り越え"
          },
          {
            "en": "It took time to get over the mistake.",
            "ja": "そのミスを乗り越えるのに時間がかかりました。",
            "focus": "get over",
            "jaFocus": "乗り越える"
          },
          {
            "en": "She got over the pressure quickly.",
            "ja": "彼女はプレッシャーをすぐに乗り越えました。",
            "focus": "got over",
            "jaFocus": "乗り越え"
          }
        ]
      },
      {
        "phrase": "get through",
        "ja": "やり切る・通じる",
        "image": "through は通り抜ける。仕事・困難・電話を通過する。",
        "pattern": "get + through",
        "examples": [
          {
            "en": "We got through the busy season.",
            "ja": "繁忙期を乗り切りました。",
            "focus": "got through",
            "jaFocus": "乗り切り"
          },
          {
            "en": "I couldn't get through to him.",
            "ja": "彼に電話がつながりませんでした。",
            "focus": "get through",
            "jaFocus": "つながり"
          },
          {
            "en": "Let's get through these tasks today.",
            "ja": "今日これらの作業をやり切りましょう。",
            "focus": "get through",
            "jaFocus": "やり切り"
          }
        ]
      },
      {
        "phrase": "get along",
        "ja": "うまくやる",
        "image": "along は一緒に進む。人間関係がうまく進む。",
        "pattern": "get + along",
        "examples": [
          {
            "en": "I get along with my team.",
            "ja": "チームとうまくやっています。",
            "focus": "get along",
            "jaFocus": "うまく"
          },
          {
            "en": "Do you get along with the new manager?",
            "ja": "新しい上司とうまくやっていますか？",
            "focus": "get along",
            "jaFocus": "うまく"
          },
          {
            "en": "They got along well during the project.",
            "ja": "彼らはその案件中うまくやっていました。",
            "focus": "got along",
            "jaFocus": "うまく"
          }
        ]
      },
      {
        "phrase": "get away",
        "ja": "離れる・抜け出す",
        "image": "away は離れていく。場所・仕事・問題から離れる。",
        "pattern": "get + away",
        "examples": [
          {
            "en": "I need to get away from work for a while.",
            "ja": "少し仕事から離れる必要があります。",
            "focus": "get away",
            "jaFocus": "離れる"
          },
          {
            "en": "We can't get away from this issue.",
            "ja": "この問題から逃れることはできません。",
            "focus": "get away",
            "jaFocus": "逃れる"
          },
          {
            "en": "He got away early today.",
            "ja": "彼は今日早めに退社しました。",
            "focus": "got away",
            "jaFocus": "退社"
          }
        ]
      }
    ]
  },
  {
    "id": "take",
    "rank": 2,
    "word": "TAKE",
    "ipa": "/teɪk/",
    "kana": "テイク",
    "syllable": "take",
    "transitivity": "他動詞中心",
    "importance": "★★★★★ 超重要",
    "core": "自分の側に引き受ける",
    "coreDetail": "物・時間・責任・行動を自分の側に取って扱う。",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "take + 名詞",
        "transitivity": "他動詞中心",
        "structure": "S + 動詞 + O（仕事で使う目的語）",
        "image": "物・時間・責任・行動を自分の側に取って扱う。",
        "point": "まずは仕事でよく使う名詞とセットで覚える。単語だけでなく、すぐ言える形で覚える。",
        "examples": [
          {
            "en": "I'll take responsibility for this project.",
            "ja": "この案件の責任は私が負います。",
            "focus": "take responsibility",
            "object": "responsibility",
            "jaFocus": "責任"
          },
          {
            "en": "Let me take notes during the meeting.",
            "ja": "会議中に私がメモを取ります。",
            "focus": "take notes",
            "object": "notes",
            "jaFocus": "メモ"
          },
          {
            "en": "This task will take two hours.",
            "ja": "この作業は2時間かかります。",
            "focus": "take",
            "object": "two hours",
            "jaFocus": "かかります"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "make",
    "rank": 3,
    "word": "MAKE",
    "ipa": "/meɪk/",
    "kana": "メイク",
    "syllable": "make",
    "transitivity": "他動詞",
    "importance": "★★★★★ 超重要",
    "core": "作り出す・結果を生む",
    "coreDetail": "決定・進捗・資料・状況を作り出す。",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "make + 名詞",
        "transitivity": "他動詞",
        "structure": "S + 動詞 + O（仕事で使う目的語）",
        "image": "決定・進捗・資料・状況を作り出す。",
        "point": "まずは仕事でよく使う名詞とセットで覚える。単語だけでなく、すぐ言える形で覚える。",
        "examples": [
          {
            "en": "We need to make a decision today.",
            "ja": "今日、決定する必要があります。",
            "focus": "make a decision",
            "object": "a decision",
            "jaFocus": "決定"
          },
          {
            "en": "The team made good progress.",
            "ja": "チームは良い進捗を出しました。",
            "focus": "made good progress",
            "object": "good progress",
            "jaFocus": "進捗"
          },
          {
            "en": "I'll make a presentation next week.",
            "ja": "来週プレゼンをします。",
            "focus": "make a presentation",
            "object": "a presentation",
            "jaFocus": "プレゼン"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "give",
    "rank": 4,
    "word": "GIVE",
    "ipa": "/ɡɪv/",
    "kana": "ギヴ",
    "syllable": "give",
    "transitivity": "他動詞",
    "importance": "★★★★★ 超重要",
    "core": "相手に渡す",
    "coreDetail": "情報・許可・説明・意見を相手へ渡す。",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "give + 名詞",
        "transitivity": "他動詞",
        "structure": "S + 動詞 + O（仕事で使う目的語）",
        "image": "情報・許可・説明・意見を相手へ渡す。",
        "point": "まずは仕事でよく使う名詞とセットで覚える。単語だけでなく、すぐ言える形で覚える。",
        "examples": [
          {
            "en": "I'll give you an update tomorrow.",
            "ja": "明日、進捗を共有します。",
            "focus": "give you an update",
            "object": "an update",
            "jaFocus": "共有"
          },
          {
            "en": "Can you give me feedback?",
            "ja": "フィードバックをもらえますか？",
            "focus": "give me feedback",
            "object": "feedback",
            "jaFocus": "フィードバック"
          },
          {
            "en": "She gave a clear explanation.",
            "ja": "彼女は分かりやすく説明しました。",
            "focus": "gave a clear explanation",
            "object": "a clear explanation",
            "jaFocus": "説明"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "have",
    "rank": 5,
    "word": "HAVE",
    "ipa": "/hæv/",
    "kana": "ハヴ",
    "syllable": "have",
    "transitivity": "他動詞中心",
    "importance": "★★★★★ 超重要",
    "core": "持っている・経験する",
    "coreDetail": "予定・会議・問題・責任を持っている状態を表す。",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "have + 名詞",
        "transitivity": "他動詞中心",
        "structure": "S + 動詞 + O（仕事で使う目的語）",
        "image": "予定・会議・問題・責任を持っている状態を表す。",
        "point": "まずは仕事でよく使う名詞とセットで覚える。単語だけでなく、すぐ言える形で覚える。",
        "examples": [
          {
            "en": "I have a meeting at three.",
            "ja": "3時に会議があります。",
            "focus": "have a meeting",
            "object": "a meeting",
            "jaFocus": "会議"
          },
          {
            "en": "We have an issue with delivery.",
            "ja": "納期に問題があります。",
            "focus": "have an issue",
            "object": "an issue",
            "jaFocus": "問題"
          },
          {
            "en": "Do you have time today?",
            "ja": "今日お時間ありますか？",
            "focus": "have time",
            "object": "time",
            "jaFocus": "時間"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "go",
    "rank": 6,
    "word": "GO",
    "ipa": "",
    "kana": "ゴー",
    "syllable": "go",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "離れて進む",
    "coreDetail": "会議・出張・計画が進む",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "go + to 場所 / go + 副詞",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "会議・出張・計画が進む",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will go to the client office tomorrow.",
            "ja": "明日クライアント先へ行きます。",
            "focus": "go to",
            "object": "the client office",
            "jaFocus": "行きます"
          },
          {
            "en": "The project is going well.",
            "ja": "案件は順調に進んでいます。",
            "focus": "going well",
            "jaFocus": "進んで"
          },
          {
            "en": "Let's go over the agenda.",
            "ja": "議題を確認しましょう。",
            "focus": "go over",
            "object": "the agenda",
            "jaFocus": "確認"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "come",
    "rank": 7,
    "word": "COME",
    "ipa": "",
    "kana": "カム",
    "syllable": "come",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "こちらへ来る",
    "coreDetail": "人・連絡・期限がこちら側へ近づく",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "come + to 場所",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "人・連絡・期限がこちら側へ近づく",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "Can you come to the meeting?",
            "ja": "会議に来られますか？",
            "focus": "come to",
            "object": "the meeting",
            "jaFocus": "来られ"
          },
          {
            "en": "The deadline is coming soon.",
            "ja": "締切が近づいています。",
            "focus": "coming",
            "jaFocus": "近づいて"
          },
          {
            "en": "The request came from the client.",
            "ja": "その依頼はクライアントから来ました。",
            "focus": "came",
            "jaFocus": "来ました"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "put",
    "rank": 8,
    "word": "PUT",
    "ipa": "",
    "kana": "プット",
    "syllable": "put",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "置く・配置する",
    "coreDetail": "情報や物を適切な場所に置く",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "put + 名詞 + 場所",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "情報や物を適切な場所に置く",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "Please put the file in the folder.",
            "ja": "ファイルをフォルダに入れてください。",
            "focus": "put",
            "object": "the file",
            "jaFocus": "入れて"
          },
          {
            "en": "I put the details in the email.",
            "ja": "詳細はメールに記載しました。",
            "focus": "put",
            "object": "the details",
            "jaFocus": "記載"
          },
          {
            "en": "Let's put this on the agenda.",
            "ja": "これを議題に入れましょう。",
            "focus": "put",
            "object": "this",
            "jaFocus": "入れ"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "keep",
    "rank": 9,
    "word": "KEEP",
    "ipa": "",
    "kana": "キープ",
    "syllable": "keep",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "保つ・続ける",
    "coreDetail": "状態や約束を保つ",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "keep + 名詞 / keep + 形容詞",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "状態や約束を保つ",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "Please keep me updated.",
            "ja": "進捗を随時共有してください。",
            "focus": "keep me updated",
            "jaFocus": "共有"
          },
          {
            "en": "Let's keep the schedule flexible.",
            "ja": "スケジュールは柔軟にしておきましょう。",
            "focus": "keep",
            "object": "the schedule",
            "jaFocus": "しておき"
          },
          {
            "en": "We need to keep the quality high.",
            "ja": "品質を高く保つ必要があります。",
            "focus": "keep",
            "object": "the quality",
            "jaFocus": "保つ"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "find",
    "rank": 10,
    "word": "FIND",
    "ipa": "",
    "kana": "ファインド",
    "syllable": "find",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "見つける・分かる",
    "coreDetail": "情報・原因・方法を見つける",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "find + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "情報・原因・方法を見つける",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I found the cause of the issue.",
            "ja": "問題の原因を見つけました。",
            "focus": "found",
            "object": "the cause",
            "jaFocus": "見つけ"
          },
          {
            "en": "Can you find a better solution?",
            "ja": "より良い解決策を見つけられますか？",
            "focus": "find",
            "object": "a better solution",
            "jaFocus": "見つけ"
          },
          {
            "en": "We need to find time for a meeting.",
            "ja": "会議の時間を見つける必要があります。",
            "focus": "find",
            "object": "time",
            "jaFocus": "見つける"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "see",
    "rank": 11,
    "word": "SEE",
    "ipa": "",
    "kana": "シー",
    "syllable": "see",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "見る・理解する",
    "coreDetail": "状況や意図を確認する",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "see + 名詞 / see if",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "状況や意図を確認する",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I see your point.",
            "ja": "おっしゃる点は分かります。",
            "focus": "see",
            "object": "your point",
            "jaFocus": "分かります"
          },
          {
            "en": "Let me see the document.",
            "ja": "資料を確認させてください。",
            "focus": "see",
            "object": "the document",
            "jaFocus": "確認"
          },
          {
            "en": "I'll see if we can adjust it.",
            "ja": "調整できるか確認します。",
            "focus": "see if",
            "jaFocus": "確認"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "look",
    "rank": 12,
    "word": "LOOK",
    "ipa": "",
    "kana": "ルック",
    "syllable": "look",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "目を向ける・確認する",
    "coreDetail": "資料や状況を見る",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "look at + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "資料や状況を見る",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "Please look at the latest version.",
            "ja": "最新版を確認してください。",
            "focus": "look at",
            "object": "the latest version",
            "jaFocus": "確認"
          },
          {
            "en": "I'll look into the issue.",
            "ja": "その問題を調べます。",
            "focus": "look into",
            "object": "the issue",
            "jaFocus": "調べ"
          },
          {
            "en": "This looks good to me.",
            "ja": "私には良さそうに見えます。",
            "focus": "looks",
            "jaFocus": "見えます"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "watch",
    "rank": 13,
    "word": "WATCH",
    "ipa": "",
    "kana": "ウォッチ",
    "syllable": "watch",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "注意して見る",
    "coreDetail": "状況や数字を継続的に見る",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "watch + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "状況や数字を継続的に見る",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "We need to watch the delivery schedule.",
            "ja": "納期スケジュールを注意して見る必要があります。",
            "focus": "watch",
            "object": "the delivery schedule",
            "jaFocus": "注意して見る"
          },
          {
            "en": "Please watch the market trend.",
            "ja": "市場動向を注視してください。",
            "focus": "watch",
            "object": "the market trend",
            "jaFocus": "注視"
          },
          {
            "en": "I watched the training video.",
            "ja": "研修動画を見ました。",
            "focus": "watched",
            "object": "the training video",
            "jaFocus": "見ました"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "hear",
    "rank": 14,
    "word": "HEAR",
    "ipa": "",
    "kana": "ヒア",
    "syllable": "hear",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "聞く・耳に入る",
    "coreDetail": "情報や話が耳に入る",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "hear + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "情報や話が耳に入る",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I heard about the delay.",
            "ja": "遅延について聞きました。",
            "focus": "heard",
            "object": "the delay",
            "jaFocus": "聞き"
          },
          {
            "en": "Did you hear from the supplier?",
            "ja": "仕入先から連絡はありましたか？",
            "focus": "hear from",
            "jaFocus": "連絡"
          },
          {
            "en": "I heard good feedback from the client.",
            "ja": "クライアントから良い反応を聞きました。",
            "focus": "heard",
            "object": "good feedback",
            "jaFocus": "聞き"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "listen",
    "rank": 15,
    "word": "LISTEN",
    "ipa": "",
    "kana": "リッスン",
    "syllable": "listen",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "意識して聞く",
    "coreDetail": "相手の話を注意して聞く",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "listen to + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "相手の話を注意して聞く",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "Please listen to the customer's needs.",
            "ja": "顧客のニーズを聞いてください。",
            "focus": "listen to",
            "object": "the customer's needs",
            "jaFocus": "聞いて"
          },
          {
            "en": "I listened to the explanation.",
            "ja": "説明を聞きました。",
            "focus": "listened to",
            "object": "the explanation",
            "jaFocus": "聞き"
          },
          {
            "en": "Let's listen carefully before deciding.",
            "ja": "決める前にしっかり聞きましょう。",
            "focus": "listen",
            "jaFocus": "聞き"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "think",
    "rank": 16,
    "word": "THINK",
    "ipa": "",
    "kana": "シンク",
    "syllable": "think",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "考える・思う",
    "coreDetail": "判断や意見を持つ",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "think + 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "判断や意見を持つ",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I think we should revise the proposal.",
            "ja": "提案書を修正すべきだと思います。",
            "focus": "think",
            "jaFocus": "思います"
          },
          {
            "en": "What do you think about this plan?",
            "ja": "この計画についてどう思いますか？",
            "focus": "think",
            "jaFocus": "思いますか"
          },
          {
            "en": "I'll think about the best option.",
            "ja": "最善の選択肢を考えます。",
            "focus": "think about",
            "object": "the best option",
            "jaFocus": "考え"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "know",
    "rank": 17,
    "word": "KNOW",
    "ipa": "",
    "kana": "ノウ",
    "syllable": "know",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "知っている・把握している",
    "coreDetail": "情報や状況を知っている",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "know + 名詞 / know that",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "情報や状況を知っている",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I know the client well.",
            "ja": "そのクライアントをよく知っています。",
            "focus": "know",
            "object": "the client",
            "jaFocus": "知って"
          },
          {
            "en": "Do you know the deadline?",
            "ja": "締切を知っていますか？",
            "focus": "know",
            "object": "the deadline",
            "jaFocus": "知って"
          },
          {
            "en": "I know this is urgent.",
            "ja": "これが急ぎだと分かっています。",
            "focus": "know",
            "jaFocus": "分かって"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "feel",
    "rank": 18,
    "word": "FEEL",
    "ipa": "",
    "kana": "フィール",
    "syllable": "feel",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "感じる",
    "coreDetail": "意見や状態を感覚で表す",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "feel + 形容詞",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "意見や状態を感覚で表す",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I feel this is a good opportunity.",
            "ja": "これは良い機会だと感じます。",
            "focus": "feel",
            "jaFocus": "感じ"
          },
          {
            "en": "I feel confident about the proposal.",
            "ja": "その提案には自信があります。",
            "focus": "feel confident",
            "jaFocus": "自信"
          },
          {
            "en": "Do you feel ready for the meeting?",
            "ja": "会議の準備はできていますか？",
            "focus": "feel ready",
            "jaFocus": "準備"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "work",
    "rank": 19,
    "word": "WORK",
    "ipa": "",
    "kana": "ワーク",
    "syllable": "work",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "働く・機能する",
    "coreDetail": "人が働く、方法や仕組みが機能する",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "work + 副詞 / work on",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "人が働く、方法や仕組みが機能する",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "This solution works well.",
            "ja": "この解決策はうまく機能します。",
            "focus": "works well",
            "jaFocus": "機能"
          },
          {
            "en": "I'm working on the quotation.",
            "ja": "見積書を作成中です。",
            "focus": "working on",
            "object": "the quotation",
            "jaFocus": "作成中"
          },
          {
            "en": "We work with overseas clients.",
            "ja": "海外顧客と仕事をしています。",
            "focus": "work with",
            "object": "overseas clients",
            "jaFocus": "仕事"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "use",
    "rank": 20,
    "word": "USE",
    "ipa": "",
    "kana": "ユーズ",
    "syllable": "use",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "使う",
    "coreDetail": "道具・情報・方法を使う",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "use + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "道具・情報・方法を使う",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "Please use the latest data.",
            "ja": "最新データを使ってください。",
            "focus": "use",
            "object": "the latest data",
            "jaFocus": "使って"
          },
          {
            "en": "We use this tool every day.",
            "ja": "私たちはこのツールを毎日使っています。",
            "focus": "use",
            "object": "this tool",
            "jaFocus": "使って"
          },
          {
            "en": "Can we use this example?",
            "ja": "この例を使えますか？",
            "focus": "use",
            "object": "this example",
            "jaFocus": "使え"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "start",
    "rank": 21,
    "word": "START",
    "ipa": "",
    "kana": "スタート",
    "syllable": "start",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "始める",
    "coreDetail": "作業や会議を開始する",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "START + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "作業や会議を開始する",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "Let's start the meeting.",
            "ja": "会議を始めましょう。",
            "focus": "start",
            "object": "the meeting",
            "jaFocus": "始め"
          },
          {
            "en": "We need to start the project next week.",
            "ja": "来週その案件を始める必要があります。",
            "focus": "start",
            "object": "the project",
            "jaFocus": "始める"
          },
          {
            "en": "Can we start with the agenda?",
            "ja": "議題から始めてもいいですか？",
            "focus": "start with",
            "object": "the agenda",
            "jaFocus": "始め"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "stop",
    "rank": 22,
    "word": "STOP",
    "ipa": "",
    "kana": "ストップ",
    "syllable": "stop",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "止める",
    "coreDetail": "作業や問題を止める",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "STOP + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "作業や問題を止める",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "Let's stop here for today.",
            "ja": "今日はここで終わりにしましょう。",
            "focus": "stop",
            "jaFocus": "終わり"
          },
          {
            "en": "We need to stop the delay.",
            "ja": "遅延を止める必要があります。",
            "focus": "stop",
            "object": "the delay",
            "jaFocus": "止める"
          },
          {
            "en": "Please stop using the old file.",
            "ja": "古いファイルの使用をやめてください。",
            "focus": "stop using",
            "object": "the old file",
            "jaFocus": "やめて"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "try",
    "rank": 23,
    "word": "TRY",
    "ipa": "",
    "kana": "トライ",
    "syllable": "try",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "試す",
    "coreDetail": "方法を試す",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "TRY + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "方法を試す",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I'll try a different approach.",
            "ja": "別の方法を試してみます。",
            "focus": "try",
            "object": "a different approach",
            "jaFocus": "試して"
          },
          {
            "en": "Let's try this first.",
            "ja": "まずこれを試しましょう。",
            "focus": "try",
            "object": "this",
            "jaFocus": "試し"
          },
          {
            "en": "Can you try again tomorrow?",
            "ja": "明日もう一度試せますか？",
            "focus": "try",
            "jaFocus": "試せ"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "help",
    "rank": 24,
    "word": "HELP",
    "ipa": "",
    "kana": "ヘルプ",
    "syllable": "help",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "助ける",
    "coreDetail": "人や作業を助ける",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "HELP + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "人や作業を助ける",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "Can you help me with this report?",
            "ja": "この報告書を手伝ってもらえますか？",
            "focus": "help me",
            "object": "this report",
            "jaFocus": "手伝って"
          },
          {
            "en": "This tool helps us save time.",
            "ja": "このツールは時間短縮に役立ちます。",
            "focus": "helps",
            "object": "save time",
            "jaFocus": "役立ち"
          },
          {
            "en": "I'll help the team prepare.",
            "ja": "チームの準備を手伝います。",
            "focus": "help",
            "object": "the team",
            "jaFocus": "手伝い"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "show",
    "rank": 25,
    "word": "SHOW",
    "ipa": "",
    "kana": "ショウ",
    "syllable": "show",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "見せる",
    "coreDetail": "資料や結果を見せる",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "SHOW + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "資料や結果を見せる",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I'll show you the data.",
            "ja": "データをお見せします。",
            "focus": "show you",
            "object": "the data",
            "jaFocus": "お見せ"
          },
          {
            "en": "This chart shows the trend.",
            "ja": "この表は傾向を示しています。",
            "focus": "shows",
            "object": "the trend",
            "jaFocus": "示して"
          },
          {
            "en": "Can you show me the sample?",
            "ja": "サンプルを見せてもらえますか？",
            "focus": "show me",
            "object": "the sample",
            "jaFocus": "見せて"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "tell",
    "rank": 26,
    "word": "TELL",
    "ipa": "",
    "kana": "テル",
    "syllable": "tell",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "伝える",
    "coreDetail": "情報を伝える",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "TELL + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "情報を伝える",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will tell the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "tell",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to tell this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "tell",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you tell it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "tell",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "ask",
    "rank": 27,
    "word": "ASK",
    "ipa": "",
    "kana": "アスク",
    "syllable": "ask",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "尋ねる・依頼する",
    "coreDetail": "質問や依頼をする",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "ASK + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "質問や依頼をする",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I'll ask the supplier.",
            "ja": "仕入先に確認します。",
            "focus": "ask",
            "object": "the supplier",
            "jaFocus": "確認"
          },
          {
            "en": "Can I ask a quick question?",
            "ja": "少し質問してもいいですか？",
            "focus": "ask",
            "object": "a quick question",
            "jaFocus": "質問"
          },
          {
            "en": "We should ask for approval.",
            "ja": "承認を依頼すべきです。",
            "focus": "ask for",
            "object": "approval",
            "jaFocus": "依頼"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "call",
    "rank": 28,
    "word": "CALL",
    "ipa": "",
    "kana": "コール",
    "syllable": "call",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "電話する・呼ぶ",
    "coreDetail": "連絡や呼び方を表す",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "CALL + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "連絡や呼び方を表す",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will call the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "call",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to call this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "call",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you call it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "call",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "leave",
    "rank": 29,
    "word": "LEAVE",
    "ipa": "",
    "kana": "リーヴ",
    "syllable": "leave",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "離れる・残す",
    "coreDetail": "場所を離れる、情報を残す",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "LEAVE + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "場所を離れる、情報を残す",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will leave the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "leave",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to leave this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "leave",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you leave it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "leave",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "move",
    "rank": 30,
    "word": "MOVE",
    "ipa": "",
    "kana": "ムーヴ",
    "syllable": "move",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "動かす・移動する",
    "coreDetail": "予定や物を動かす",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "MOVE + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "予定や物を動かす",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will move the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "move",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to move this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "move",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you move it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "move",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "turn",
    "rank": 31,
    "word": "TURN",
    "ipa": "",
    "kana": "ターン",
    "syllable": "turn",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "変える・向きを変える",
    "coreDetail": "状態を変える",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "TURN + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "状態を変える",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will turn the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "turn",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to turn this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "turn",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you turn it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "turn",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "bring",
    "rank": 32,
    "word": "BRING",
    "ipa": "",
    "kana": "ブリング",
    "syllable": "bring",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "持ってくる",
    "coreDetail": "相手の所へ持ってくる",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "BRING + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "相手の所へ持ってくる",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will bring the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "bring",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to bring this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "bring",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you bring it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "bring",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "hold",
    "rank": 33,
    "word": "HOLD",
    "ipa": "",
    "kana": "ホールド",
    "syllable": "hold",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "保持する・開催する",
    "coreDetail": "会議や状態を保つ",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "HOLD + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "会議や状態を保つ",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will hold the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "hold",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to hold this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "hold",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you hold it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "hold",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "set",
    "rank": 34,
    "word": "SET",
    "ipa": "",
    "kana": "セット",
    "syllable": "set",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "設定する",
    "coreDetail": "期限や条件を設定する",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "SET + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "期限や条件を設定する",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will set the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "set",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to set this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "set",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you set it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "set",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "change",
    "rank": 35,
    "word": "CHANGE",
    "ipa": "",
    "kana": "チェンジ",
    "syllable": "change",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "変える",
    "coreDetail": "計画や内容を変更する",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "CHANGE + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "計画や内容を変更する",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will change the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "change",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to change this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "change",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you change it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "change",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "open",
    "rank": 36,
    "word": "OPEN",
    "ipa": "",
    "kana": "オープン",
    "syllable": "open",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "開く",
    "coreDetail": "会議・ファイル・可能性を開く",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "OPEN + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "会議・ファイル・可能性を開く",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will open the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "open",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to open this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "open",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you open it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "open",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "close",
    "rank": 37,
    "word": "CLOSE",
    "ipa": "",
    "kana": "クローズ",
    "syllable": "close",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "閉じる・終える",
    "coreDetail": "会議や案件を終える",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "CLOSE + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "会議や案件を終える",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will close the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "close",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to close this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "close",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you close it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "close",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "build",
    "rank": 38,
    "word": "BUILD",
    "ipa": "",
    "kana": "ビルド",
    "syllable": "build",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "作る・築く",
    "coreDetail": "関係や仕組みを作る",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "BUILD + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "関係や仕組みを作る",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will build the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "build",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to build this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "build",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you build it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "build",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "learn",
    "rank": 39,
    "word": "LEARN",
    "ipa": "",
    "kana": "ラーン",
    "syllable": "learn",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "学ぶ",
    "coreDetail": "情報や方法を学ぶ",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "LEARN + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "情報や方法を学ぶ",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will learn the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "learn",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to learn this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "learn",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you learn it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "learn",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "meet",
    "rank": 40,
    "word": "MEET",
    "ipa": "",
    "kana": "ミート",
    "syllable": "meet",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "会う・満たす",
    "coreDetail": "人に会う、条件を満たす",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "MEET + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "人に会う、条件を満たす",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will meet the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "meet",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to meet this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "meet",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you meet it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "meet",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "send",
    "rank": 41,
    "word": "SEND",
    "ipa": "",
    "kana": "センド",
    "syllable": "send",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "送る",
    "coreDetail": "メールや資料を送る",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "SEND + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "メールや資料を送る",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I'll send the file today.",
            "ja": "今日ファイルを送ります。",
            "focus": "send",
            "object": "the file",
            "jaFocus": "送ります"
          },
          {
            "en": "Please send me the quotation.",
            "ja": "見積書を送ってください。",
            "focus": "send me",
            "object": "the quotation",
            "jaFocus": "送って"
          },
          {
            "en": "Did you send the email?",
            "ja": "メールを送りましたか？",
            "focus": "send",
            "object": "the email",
            "jaFocus": "送り"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "pay",
    "rank": 42,
    "word": "PAY",
    "ipa": "",
    "kana": "ペイ",
    "syllable": "pay",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "支払う",
    "coreDetail": "費用や注意を払う",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "PAY + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "費用や注意を払う",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will pay the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "pay",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to pay this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "pay",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you pay it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "pay",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "buy",
    "rank": 43,
    "word": "BUY",
    "ipa": "",
    "kana": "バイ",
    "syllable": "buy",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "買う",
    "coreDetail": "商品やサービスを購入する",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "BUY + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "商品やサービスを購入する",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will buy the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "buy",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to buy this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "buy",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you buy it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "buy",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "sell",
    "rank": 44,
    "word": "SELL",
    "ipa": "",
    "kana": "セル",
    "syllable": "sell",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "売る",
    "coreDetail": "商品や提案を売る",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "SELL + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "商品や提案を売る",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will sell the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "sell",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to sell this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "sell",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you sell it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "sell",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "choose",
    "rank": 45,
    "word": "CHOOSE",
    "ipa": "",
    "kana": "チューズ",
    "syllable": "choose",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "選ぶ",
    "coreDetail": "選択肢を選ぶ",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "CHOOSE + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "選択肢を選ぶ",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will choose the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "choose",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to choose this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "choose",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you choose it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "choose",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "follow",
    "rank": 46,
    "word": "FOLLOW",
    "ipa": "",
    "kana": "フォロー",
    "syllable": "follow",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "従う・追う",
    "coreDetail": "手順や進捗を追う",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "FOLLOW + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "手順や進捗を追う",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will follow the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "follow",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to follow this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "follow",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you follow it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "follow",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "create",
    "rank": 47,
    "word": "CREATE",
    "ipa": "",
    "kana": "クリエイト",
    "syllable": "create",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "作成する",
    "coreDetail": "資料や価値を作る",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "CREATE + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "資料や価値を作る",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will create the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "create",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to create this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "create",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you create it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "create",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "reach",
    "rank": 48,
    "word": "REACH",
    "ipa": "",
    "kana": "リーチ",
    "syllable": "reach",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "到達する・連絡がつく",
    "coreDetail": "目標や相手に届く",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "REACH + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "目標や相手に届く",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will reach the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "reach",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to reach this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "reach",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you reach it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "reach",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "return",
    "rank": 49,
    "word": "RETURN",
    "ipa": "",
    "kana": "リターン",
    "syllable": "return",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "戻る・返す",
    "coreDetail": "物や連絡を戻す",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "RETURN + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "物や連絡を戻す",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I will return the details.",
            "ja": "詳細を確認・対応します。",
            "focus": "return",
            "object": "the details",
            "jaFocus": "確認・対応"
          },
          {
            "en": "We need to return this today.",
            "ja": "今日これを進める必要があります。",
            "focus": "return",
            "object": "this",
            "jaFocus": "進める"
          },
          {
            "en": "Can you return it by tomorrow?",
            "ja": "明日までに対応できますか？",
            "focus": "return",
            "object": "it",
            "jaFocus": "対応"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "check",
    "rank": 50,
    "word": "CHECK",
    "ipa": "",
    "kana": "チェック",
    "syllable": "check",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "確認する",
    "coreDetail": "内容を確認する",
    "meanings": [
      {
        "id": "business-basic",
        "title": "① ビジネスで使う基本形",
        "pattern": "CHECK + 名詞 / 文",
        "transitivity": "他動詞・自動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "内容を確認する",
        "point": "まずは社会人の会話・メールで使いやすい基本形を覚える。",
        "examples": [
          {
            "en": "I'll check the details.",
            "ja": "詳細を確認します。",
            "focus": "check",
            "object": "the details",
            "jaFocus": "確認"
          },
          {
            "en": "Please check the latest version.",
            "ja": "最新版を確認してください。",
            "focus": "check",
            "object": "the latest version",
            "jaFocus": "確認"
          },
          {
            "en": "Can you check with the client?",
            "ja": "クライアントに確認してもらえますか？",
            "focus": "check with",
            "object": "the client",
            "jaFocus": "確認"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  }
];

export const testItems = verbs.flatMap((verb) =>
  verb.meanings.flatMap((m) =>
    m.examples.map((e) => ({
      id: `${verb.id}-${m.id}-${e.en}`,
      verbId: verb.id,
      meaningTitle: m.title,
      pattern: m.pattern,
      ja: e.ja,
      en: e.en
    }))
  )
);

export function getVerb(id: string) {
  return verbs.find((v) => v.id === id) ?? verbs[0];
}

export function getTestItemsForVerb(verbId: string) {
  return testItems.filter((item) => item.verbId === verbId);
}

export function getTestItemById(itemId: string) {
  return testItems.find((item) => item.id === itemId);
}
