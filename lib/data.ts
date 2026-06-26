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
  dailyExamples?: Example[];
};

export type PhraseBlock = {
  phrase: string;
  ja: string;
  image: string;
  pattern: string;
  examples: Example[];
  dailyExamples?: Example[];
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
  coreVisual?: {
    from: string[];
    to: string;
    label: string;
  };
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
    "core": "外にあるもの・状態・情報が、自分のところへ入ってくる",
    "coreDetail": "GETは、受け取る・得る・買う・到着する・理解するまで、外側にあったものが自分の領域に入る感覚で整理できます。仕事ではメール・承認・情報・機会・状態変化に使います。",
    "coreVisual": { "from": ["📧 メール", "✅ 承認", "💡 情報", "🎯 機会", "📍 場所"], "to": "自分", "label": "外側 → 自分の領域" },
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
            "en": "I'm getting busy this week.",
            "ja": "私は今週忙しくなってきています。",
            "focus": "getting",
            "jaFocus": "忙しくなってきています"
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
    "core": "自分から取りに行き、自分の側で引き受けて扱う",
    "coreDetail": "TAKEは、外にある物・時間・責任・行動・情報・機会を、自分から取って自分の側で扱うイメージです。仕事では、責任を取る、時間がかかる、対応する、メモを取る、確認する、引き継ぐなどに広がります。",
    "coreVisual": {
      "from": [
        "📄 タスク",
        "⏰ 時間",
        "✅ 責任",
        "📝 情報",
        "📞 対応"
      ],
      "to": "自分が引き受ける",
      "label": "自分 → 対象を取る"
    },
    "meanings": [
      {
        "id": "responsibility",
        "title": "① 責任・役割を引き受ける",
        "pattern": "TAKE + responsibility / charge / ownership",
        "transitivity": "他動詞",
        "structure": "S + take + O",
        "image": "責任や担当を自分の側に引き受ける。",
        "point": "仕事では take responsibility / take charge / take ownership が重要。誰が責任を持つか、誰が主導するかをはっきり言える。",
        "examples": [
          {
            "en": "I will take responsibility for this project.",
            "ja": "この案件の責任は私が負います。",
            "focus": "take responsibility",
            "jaFocus": "責任"
          },
          {
            "en": "She took charge of the meeting.",
            "ja": "彼女が会議を取り仕切りました。",
            "focus": "took charge",
            "jaFocus": "取り仕切りました"
          },
          {
            "en": "We need to take ownership of this issue.",
            "ja": "この問題は私たちが責任を持って対応する必要があります。",
            "focus": "take ownership",
            "jaFocus": "責任を持って"
          }
        ],
        "dailyExamples": [
          {
            "en": "I'll take responsibility for dinner tonight.",
            "ja": "今夜の夕食は私が責任を持つよ。",
            "focus": "take responsibility",
            "jaFocus": "責任を持つ"
          },
          {
            "en": "She took charge of the trip plan.",
            "ja": "彼女が旅行計画を仕切りました。",
            "focus": "took charge",
            "jaFocus": "仕切りました"
          }
        ]
      },
      {
        "id": "time",
        "title": "② 時間がかかる",
        "pattern": "TAKE + 時間",
        "transitivity": "他動詞",
        "structure": "It / This + takes + 時間",
        "image": "作業や手続きが時間を必要とする。",
        "point": "時間見積もりを伝える時の必須表現。It takes ... / This will take ... をまず覚える。",
        "examples": [
          {
            "en": "This task will take about two hours.",
            "ja": "この作業は約2時間かかります。",
            "focus": "will take",
            "jaFocus": "かかります",
            "object": "about two hours"
          },
          {
            "en": "It took longer than expected.",
            "ja": "予想より時間がかかりました。",
            "focus": "took",
            "jaFocus": "かかりました"
          },
          {
            "en": "How long will the approval process take?",
            "ja": "承認プロセスにはどのくらい時間がかかりますか？",
            "focus": "take",
            "jaFocus": "かかります"
          }
        ],
        "dailyExamples": [
          {
            "en": "It takes ten minutes to walk there.",
            "ja": "そこまで歩いて10分かかります。",
            "focus": "takes",
            "jaFocus": "かかります"
          },
          {
            "en": "The movie takes about two hours.",
            "ja": "その映画は約2時間あります。",
            "focus": "takes",
            "jaFocus": "約2時間"
          }
        ]
      },
      {
        "id": "action",
        "title": "③ 行動・対応を取る",
        "pattern": "TAKE + action / steps / measures",
        "transitivity": "他動詞",
        "structure": "S + take + O",
        "image": "必要な対応を自分の側で実行する。",
        "point": "take action は『行動する』、take steps/measures は『手を打つ・対策を取る』。問題解決の場面でよく使う。",
        "examples": [
          {
            "en": "We need to take action immediately.",
            "ja": "すぐに対応する必要があります。",
            "focus": "take action",
            "jaFocus": "対応"
          },
          {
            "en": "The team took steps to reduce costs.",
            "ja": "チームはコスト削減に向けて手を打ちました。",
            "focus": "took steps",
            "jaFocus": "手を打ちました"
          },
          {
            "en": "We should take measures to prevent delays.",
            "ja": "遅延を防ぐ対策を取るべきです。",
            "focus": "take measures",
            "jaFocus": "対策を取る"
          }
        ],
        "dailyExamples": [
          {
            "en": "We should take action before it gets worse.",
            "ja": "悪化する前に行動した方がいいです。",
            "focus": "take action",
            "jaFocus": "行動"
          },
          {
            "en": "They took steps to improve their health.",
            "ja": "彼らは健康改善のために行動を取りました。",
            "focus": "took steps",
            "jaFocus": "行動を取りました"
          }
        ]
      },
      {
        "id": "notes",
        "title": "④ メモ・記録を取る",
        "pattern": "TAKE + notes / minutes",
        "transitivity": "他動詞",
        "structure": "S + take + O",
        "image": "聞いた情報を自分の手元に記録として取る。",
        "point": "会議では take notes がメモ、take minutes が議事録。minutes は『会議の記録』という意味。",
        "examples": [
          {
            "en": "Let me take notes during the meeting.",
            "ja": "会議中に私がメモを取ります。",
            "focus": "take notes",
            "jaFocus": "メモを取ります"
          },
          {
            "en": "Can you take the minutes today?",
            "ja": "今日、議事録を取ってもらえますか？",
            "focus": "take the minutes",
            "jaFocus": "議事録を取って"
          },
          {
            "en": "I took notes on the client’s request.",
            "ja": "クライアントの要望をメモしました。",
            "focus": "took notes",
            "jaFocus": "メモしました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I took notes while watching the lecture.",
            "ja": "講義を見ながらメモを取りました。",
            "focus": "took notes",
            "jaFocus": "メモを取りました"
          },
          {
            "en": "She takes notes in her phone.",
            "ja": "彼女はスマホにメモを取ります。",
            "focus": "takes notes",
            "jaFocus": "メモを取ります"
          }
        ]
      },
      {
        "id": "look",
        "title": "⑤ 確認する・見る",
        "pattern": "TAKE + a look / a closer look",
        "transitivity": "他動詞",
        "structure": "S + take + a look + at O",
        "image": "資料や状況を自分で確認する。",
        "point": "ビジネスでは Please take a look at ... が便利。check より柔らかく、依頼表現として使いやすい。",
        "examples": [
          {
            "en": "Could you take a look at this proposal?",
            "ja": "この提案書を確認していただけますか？",
            "focus": "take a look",
            "jaFocus": "確認"
          },
          {
            "en": "I’ll take a closer look at the numbers.",
            "ja": "数字をもう少し詳しく確認します。",
            "focus": "take a closer look",
            "jaFocus": "詳しく確認"
          },
          {
            "en": "Please take a look at the attached file.",
            "ja": "添付ファイルをご確認ください。",
            "focus": "take a look",
            "jaFocus": "ご確認"
          }
        ],
        "dailyExamples": [
          {
            "en": "Can you take a look at my phone?",
            "ja": "私のスマホをちょっと見てくれる？",
            "focus": "take a look",
            "jaFocus": "見て"
          },
          {
            "en": "I took a look at the menu.",
            "ja": "メニューを見ました。",
            "focus": "took a look",
            "jaFocus": "見ました"
          }
        ]
      },
      {
        "id": "handle",
        "title": "⑥ 対応する・処理する",
        "pattern": "TAKE care of + 名詞",
        "transitivity": "他動詞句",
        "structure": "S + take care of + O",
        "image": "問題・依頼・作業を自分の側で処理する。",
        "point": "take care of は『世話をする』だけでなく、仕事では『対応する・処理する』として非常によく使う。",
        "examples": [
          {
            "en": "I’ll take care of this request.",
            "ja": "この依頼は私が対応します。",
            "focus": "take care of",
            "jaFocus": "対応します"
          },
          {
            "en": "Can you take care of the client follow-up?",
            "ja": "クライアントへのフォローを対応してもらえますか？",
            "focus": "take care of",
            "jaFocus": "対応"
          },
          {
            "en": "The support team took care of the issue quickly.",
            "ja": "サポートチームがその問題に素早く対応しました。",
            "focus": "took care of",
            "jaFocus": "対応しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I’ll take care of the tickets.",
            "ja": "チケットは私が手配します。",
            "focus": "take care of",
            "jaFocus": "手配します"
          },
          {
            "en": "She takes care of her family.",
            "ja": "彼女は家族の世話をしています。",
            "focus": "takes care of",
            "jaFocus": "世話"
          }
        ]
      },
      {
        "id": "over",
        "title": "⑦ 引き継ぐ・引き受ける",
        "pattern": "TAKE over + 名詞",
        "transitivity": "他動詞句",
        "structure": "S + take over + O",
        "image": "担当や業務を前任者から自分の側へ移す。",
        "point": "take over は担当変更・引き継ぎで重要。project, account, role などと相性が良い。",
        "examples": [
          {
            "en": "I will take over this account next month.",
            "ja": "来月この顧客を引き継ぎます。",
            "focus": "take over",
            "jaFocus": "引き継ぎます"
          },
          {
            "en": "She took over the project after the handover.",
            "ja": "引き継ぎ後、彼女がその案件を担当しました。",
            "focus": "took over",
            "jaFocus": "担当しました"
          },
          {
            "en": "Who will take over his role?",
            "ja": "彼の役割は誰が引き継ぎますか？",
            "focus": "take over",
            "jaFocus": "引き継ぎます"
          }
        ],
        "dailyExamples": [
          {
            "en": "My brother took over the family business.",
            "ja": "兄が家業を引き継ぎました。",
            "focus": "took over",
            "jaFocus": "引き継ぎました"
          },
          {
            "en": "Can you take over driving for a while?",
            "ja": "少し運転を代わってくれる？",
            "focus": "take over",
            "jaFocus": "代わって"
          }
        ]
      },
      {
        "id": "part",
        "title": "⑧ 参加する",
        "pattern": "TAKE part in + 名詞",
        "transitivity": "自動詞句に近い使い方",
        "structure": "S + take part in + O",
        "image": "会議・イベント・活動に自分も加わる。",
        "point": "take part in は participate in に近い。ややフォーマルで、イベント・研修・プロジェクト参加に使える。",
        "examples": [
          {
            "en": "I will take part in the training session.",
            "ja": "その研修に参加します。",
            "focus": "take part in",
            "jaFocus": "参加します"
          },
          {
            "en": "Our team took part in the online seminar.",
            "ja": "私たちのチームはオンラインセミナーに参加しました。",
            "focus": "took part in",
            "jaFocus": "参加しました"
          },
          {
            "en": "Several departments took part in the project.",
            "ja": "複数の部署がそのプロジェクトに参加しました。",
            "focus": "took part in",
            "jaFocus": "参加しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "She took part in a local event.",
            "ja": "彼女は地域イベントに参加しました。",
            "focus": "took part in",
            "jaFocus": "参加しました"
          },
          {
            "en": "I want to take part in the workshop.",
            "ja": "そのワークショップに参加したいです。",
            "focus": "take part in",
            "jaFocus": "参加したい"
          }
        ]
      },
      {
        "id": "receive",
        "title": "⑨ 受ける・受け取る",
        "pattern": "TAKE + a call / message / order",
        "transitivity": "他動詞",
        "structure": "S + take + O",
        "image": "電話・注文・メッセージなどを自分が受ける。",
        "point": "電話対応では take a call / take a message が便利。注文受付では take an order。",
        "examples": [
          {
            "en": "Can you take this call for me?",
            "ja": "この電話に出てもらえますか？",
            "focus": "take this call",
            "jaFocus": "電話に出て"
          },
          {
            "en": "I took a message from the client.",
            "ja": "クライアントからの伝言を受けました。",
            "focus": "took a message",
            "jaFocus": "伝言を受けました"
          },
          {
            "en": "The sales team took the order yesterday.",
            "ja": "営業チームが昨日その注文を受けました。",
            "focus": "took the order",
            "jaFocus": "注文を受けました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I can’t take your call right now.",
            "ja": "今は電話に出られません。",
            "focus": "take your call",
            "jaFocus": "電話に出られません"
          },
          {
            "en": "The restaurant takes online orders.",
            "ja": "そのレストランはオンライン注文を受け付けています。",
            "focus": "takes online orders",
            "jaFocus": "注文を受け付けて"
          }
        ]
      },
      {
        "id": "choose",
        "title": "⑩ 選ぶ・採用する",
        "pattern": "TAKE + option / approach / position",
        "transitivity": "他動詞",
        "structure": "S + take + O",
        "image": "選択肢・方針・立場を自分のものとして選ぶ。",
        "point": "take this approach は『この方針で進める』。take a position は『立場を取る』。会議や提案で使いやすい。",
        "examples": [
          {
            "en": "Let’s take this approach for the next proposal.",
            "ja": "次の提案ではこの方針で進めましょう。",
            "focus": "take this approach",
            "jaFocus": "この方針で進め"
          },
          {
            "en": "We should take a practical position.",
            "ja": "現実的な立場を取るべきです。",
            "focus": "take a practical position",
            "jaFocus": "立場を取る"
          },
          {
            "en": "The client decided to take the cheaper option.",
            "ja": "クライアントはより安い選択肢を選びました。",
            "focus": "take the cheaper option",
            "jaFocus": "選びました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I’ll take the window seat.",
            "ja": "窓側の席にします。",
            "focus": "take the window seat",
            "jaFocus": "席にします"
          },
          {
            "en": "Which route should we take?",
            "ja": "どの道を行きましょうか？",
            "focus": "take",
            "jaFocus": "行きましょう"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "take responsibility",
        "ja": "責任を負う",
        "image": "responsibility を自分の側に引き受ける。",
        "pattern": "take + 名詞",
        "examples": [
          {
            "en": "I will take responsibility for the result.",
            "ja": "結果について私が責任を負います。",
            "focus": "take responsibility",
            "jaFocus": "責任"
          },
          {
            "en": "Managers should take responsibility for team decisions.",
            "ja": "管理職はチームの決定に責任を持つべきです。",
            "focus": "take responsibility",
            "jaFocus": "責任"
          },
          {
            "en": "Who will take responsibility for this issue?",
            "ja": "この問題は誰が責任を持ちますか？",
            "focus": "take responsibility",
            "jaFocus": "責任"
          }
        ],
        "dailyExamples": [
          {
            "en": "I’ll take responsibility for the booking.",
            "ja": "予約は私が責任を持ちます。",
            "focus": "take responsibility",
            "jaFocus": "責任を持ちます"
          },
          {
            "en": "He took responsibility for the mistake.",
            "ja": "彼はそのミスの責任を取りました。",
            "focus": "took responsibility",
            "jaFocus": "責任を取りました"
          }
        ]
      },
      {
        "phrase": "take notes",
        "ja": "メモを取る",
        "image": "情報を自分の記録として取る。",
        "pattern": "take + notes",
        "examples": [
          {
            "en": "Please take notes during the call.",
            "ja": "通話中にメモを取ってください。",
            "focus": "take notes",
            "jaFocus": "メモ"
          },
          {
            "en": "I took notes on the key points.",
            "ja": "重要点をメモしました。",
            "focus": "took notes",
            "jaFocus": "メモ"
          },
          {
            "en": "She always takes clear notes.",
            "ja": "彼女はいつも分かりやすくメモを取ります。",
            "focus": "takes clear notes",
            "jaFocus": "メモ"
          }
        ],
        "dailyExamples": [
          {
            "en": "I took notes while watching the video.",
            "ja": "動画を見ながらメモを取りました。",
            "focus": "took notes",
            "jaFocus": "メモを取りました"
          },
          {
            "en": "Take notes if you want to remember it.",
            "ja": "覚えたいならメモを取って。",
            "focus": "Take notes",
            "jaFocus": "メモを取って"
          }
        ]
      },
      {
        "phrase": "take a look",
        "ja": "確認する・見る",
        "image": "対象を自分の目で取って確認する。",
        "pattern": "take + a look + at",
        "examples": [
          {
            "en": "Please take a look at the contract.",
            "ja": "契約書をご確認ください。",
            "focus": "take a look",
            "jaFocus": "ご確認"
          },
          {
            "en": "I’ll take a look at the data later.",
            "ja": "後でデータを確認します。",
            "focus": "take a look",
            "jaFocus": "確認"
          },
          {
            "en": "Can you take a quick look at this email?",
            "ja": "このメールを軽く確認してもらえますか？",
            "focus": "take a quick look",
            "jaFocus": "確認"
          }
        ],
        "dailyExamples": [
          {
            "en": "Take a look at this photo.",
            "ja": "この写真を見て。",
            "focus": "Take a look",
            "jaFocus": "見て"
          },
          {
            "en": "I took a look inside the shop.",
            "ja": "その店の中を見てみました。",
            "focus": "took a look",
            "jaFocus": "見て"
          }
        ]
      },
      {
        "phrase": "take action",
        "ja": "行動する・対応する",
        "image": "必要な対応を自分で取る。",
        "pattern": "take + action",
        "examples": [
          {
            "en": "We need to take action today.",
            "ja": "今日中に対応する必要があります。",
            "focus": "take action",
            "jaFocus": "対応"
          },
          {
            "en": "The company took action after the complaint.",
            "ja": "会社はクレーム後に対応しました。",
            "focus": "took action",
            "jaFocus": "対応"
          },
          {
            "en": "Let’s take action before the deadline.",
            "ja": "締切前に手を打ちましょう。",
            "focus": "take action",
            "jaFocus": "手を打ち"
          }
        ],
        "dailyExamples": [
          {
            "en": "You need to take action for your health.",
            "ja": "健康のために行動する必要があります。",
            "focus": "take action",
            "jaFocus": "行動"
          },
          {
            "en": "He finally took action.",
            "ja": "彼はついに行動しました。",
            "focus": "took action",
            "jaFocus": "行動しました"
          }
        ]
      },
      {
        "phrase": "take care of",
        "ja": "対応する・処理する",
        "image": "問題や依頼を自分が引き受けて処理する。",
        "pattern": "take care of + 名詞",
        "examples": [
          {
            "en": "I’ll take care of the invoice.",
            "ja": "請求書は私が対応します。",
            "focus": "take care of",
            "jaFocus": "対応"
          },
          {
            "en": "Can you take care of the booking?",
            "ja": "予約を対応してもらえますか？",
            "focus": "take care of",
            "jaFocus": "対応"
          },
          {
            "en": "The team took care of the urgent request.",
            "ja": "チームが緊急依頼に対応しました。",
            "focus": "took care of",
            "jaFocus": "対応"
          }
        ],
        "dailyExamples": [
          {
            "en": "I’ll take care of dinner.",
            "ja": "夕食は私が用意します。",
            "focus": "take care of",
            "jaFocus": "用意"
          },
          {
            "en": "She takes care of her dog every morning.",
            "ja": "彼女は毎朝犬の世話をします。",
            "focus": "takes care of",
            "jaFocus": "世話"
          }
        ]
      },
      {
        "phrase": "take a break",
        "ja": "休憩する",
        "image": "休憩時間を自分のために取る。",
        "pattern": "take + a break",
        "examples": [
          {
            "en": "Let’s take a short break.",
            "ja": "少し休憩しましょう。",
            "focus": "take a short break",
            "jaFocus": "休憩"
          },
          {
            "en": "I took a break after the meeting.",
            "ja": "会議後に休憩しました。",
            "focus": "took a break",
            "jaFocus": "休憩"
          },
          {
            "en": "You should take a break before the presentation.",
            "ja": "プレゼン前に休憩した方がいいです。",
            "focus": "take a break",
            "jaFocus": "休憩"
          }
        ],
        "dailyExamples": [
          {
            "en": "Let’s take a break at the café.",
            "ja": "カフェで休憩しましょう。",
            "focus": "take a break",
            "jaFocus": "休憩"
          },
          {
            "en": "I took a break from studying.",
            "ja": "勉強を少し休みました。",
            "focus": "took a break",
            "jaFocus": "休みました"
          }
        ]
      },
      {
        "phrase": "take time",
        "ja": "時間がかかる・時間を取る",
        "image": "時間を必要とする、または時間を確保する。",
        "pattern": "take + time",
        "examples": [
          {
            "en": "This review will take time.",
            "ja": "この確認には時間がかかります。",
            "focus": "take time",
            "jaFocus": "時間がかかります"
          },
          {
            "en": "Please take time to check the details.",
            "ja": "詳細確認の時間を取ってください。",
            "focus": "take time",
            "jaFocus": "時間を取って"
          },
          {
            "en": "The negotiation took time.",
            "ja": "その交渉には時間がかかりました。",
            "focus": "took time",
            "jaFocus": "時間がかかりました"
          }
        ],
        "dailyExamples": [
          {
            "en": "Take your time.",
            "ja": "ゆっくりでいいですよ。",
            "focus": "Take your time",
            "jaFocus": "ゆっくり"
          },
          {
            "en": "Learning English takes time.",
            "ja": "英語学習には時間がかかります。",
            "focus": "takes time",
            "jaFocus": "時間がかかります"
          }
        ]
      },
      {
        "phrase": "take part in",
        "ja": "参加する",
        "image": "活動や場に自分も加わる。",
        "pattern": "take part in + 名詞",
        "examples": [
          {
            "en": "I will take part in the workshop.",
            "ja": "そのワークショップに参加します。",
            "focus": "take part in",
            "jaFocus": "参加"
          },
          {
            "en": "Our team took part in the exhibition.",
            "ja": "私たちのチームは展示会に参加しました。",
            "focus": "took part in",
            "jaFocus": "参加"
          },
          {
            "en": "Several managers took part in the discussion.",
            "ja": "数名の管理職が議論に参加しました。",
            "focus": "took part in",
            "jaFocus": "参加"
          }
        ],
        "dailyExamples": [
          {
            "en": "She took part in a marathon.",
            "ja": "彼女はマラソンに参加しました。",
            "focus": "took part in",
            "jaFocus": "参加"
          },
          {
            "en": "I want to take part in the event.",
            "ja": "そのイベントに参加したいです。",
            "focus": "take part in",
            "jaFocus": "参加したい"
          }
        ]
      },
      {
        "phrase": "take a call",
        "ja": "電話に出る",
        "image": "電話を自分が受ける。",
        "pattern": "take + a call",
        "examples": [
          {
            "en": "I need to take a call from the client.",
            "ja": "クライアントからの電話に出る必要があります。",
            "focus": "take a call",
            "jaFocus": "電話に出る"
          },
          {
            "en": "Can you take this call?",
            "ja": "この電話に出てもらえますか？",
            "focus": "take this call",
            "jaFocus": "電話に出て"
          },
          {
            "en": "She took a call during the break.",
            "ja": "彼女は休憩中に電話に出ました。",
            "focus": "took a call",
            "jaFocus": "電話に出ました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I can’t take a call right now.",
            "ja": "今は電話に出られません。",
            "focus": "take a call",
            "jaFocus": "電話に出られません"
          },
          {
            "en": "He took a call outside.",
            "ja": "彼は外で電話に出ました。",
            "focus": "took a call",
            "jaFocus": "電話に出ました"
          }
        ]
      },
      {
        "phrase": "take an approach",
        "ja": "方針を取る",
        "image": "進め方や姿勢を自分たちの方針として選ぶ。",
        "pattern": "take + an approach",
        "examples": [
          {
            "en": "Let’s take a simple approach.",
            "ja": "シンプルな方針で進めましょう。",
            "focus": "take a simple approach",
            "jaFocus": "方針で進め"
          },
          {
            "en": "We took a different approach this time.",
            "ja": "今回は別のやり方を取りました。",
            "focus": "took a different approach",
            "jaFocus": "やり方を取りました"
          },
          {
            "en": "The client prefers to take a cautious approach.",
            "ja": "クライアントは慎重な方針を好みます。",
            "focus": "take a cautious approach",
            "jaFocus": "方針"
          }
        ],
        "dailyExamples": [
          {
            "en": "I want to take a relaxed approach.",
            "ja": "気楽なやり方でいきたいです。",
            "focus": "take a relaxed approach",
            "jaFocus": "やり方"
          },
          {
            "en": "They took a new approach to cooking.",
            "ja": "彼らは料理に新しい方法を取り入れました。",
            "focus": "took a new approach",
            "jaFocus": "方法を取り入れました"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "take over",
        "ja": "引き継ぐ・引き受ける",
        "image": "担当や権限を自分の側へ移す。",
        "pattern": "take over + 名詞",
        "examples": [
          {
            "en": "I will take over the account next month.",
            "ja": "来月その顧客を引き継ぎます。",
            "focus": "take over",
            "jaFocus": "引き継ぎ"
          },
          {
            "en": "She took over the project after the handover.",
            "ja": "引き継ぎ後、彼女が案件を担当しました。",
            "focus": "took over",
            "jaFocus": "担当"
          },
          {
            "en": "Who will take over his tasks?",
            "ja": "彼の業務は誰が引き継ぎますか？",
            "focus": "take over",
            "jaFocus": "引き継ぎ"
          }
        ],
        "dailyExamples": [
          {
            "en": "My sister took over the shop.",
            "ja": "姉がその店を引き継ぎました。",
            "focus": "took over",
            "jaFocus": "引き継ぎました"
          },
          {
            "en": "Can you take over for a minute?",
            "ja": "少し代わってくれる？",
            "focus": "take over",
            "jaFocus": "代わって"
          }
        ]
      },
      {
        "phrase": "take off",
        "ja": "軌道に乗る・休む・離陸する",
        "image": "元の場所や状態から離れる。",
        "pattern": "take off",
        "examples": [
          {
            "en": "The new product is starting to take off.",
            "ja": "新製品が軌道に乗り始めています。",
            "focus": "take off",
            "jaFocus": "軌道に乗り"
          },
          {
            "en": "I’ll take Friday off.",
            "ja": "金曜日は休みます。",
            "focus": "take Friday off",
            "jaFocus": "休みます"
          },
          {
            "en": "Sales took off after the campaign.",
            "ja": "キャンペーン後、売上が伸びました。",
            "focus": "took off",
            "jaFocus": "伸びました"
          }
        ],
        "dailyExamples": [
          {
            "en": "The plane took off on time.",
            "ja": "飛行機は定刻に離陸しました。",
            "focus": "took off",
            "jaFocus": "離陸しました"
          },
          {
            "en": "Please take off your shoes.",
            "ja": "靴を脱いでください。",
            "focus": "take off",
            "jaFocus": "脱いで"
          }
        ]
      },
      {
        "phrase": "take on",
        "ja": "引き受ける・採用する",
        "image": "新しい仕事・責任・人を自分の側に加える。",
        "pattern": "take on + 名詞",
        "examples": [
          {
            "en": "We can’t take on another project right now.",
            "ja": "今は別の案件を引き受けられません。",
            "focus": "take on",
            "jaFocus": "引き受け"
          },
          {
            "en": "The team took on a new client.",
            "ja": "チームは新しい顧客を担当しました。",
            "focus": "took on",
            "jaFocus": "担当"
          },
          {
            "en": "She took on more responsibility this year.",
            "ja": "彼女は今年さらに責任を引き受けました。",
            "focus": "took on",
            "jaFocus": "責任を引き受け"
          }
        ],
        "dailyExamples": [
          {
            "en": "He took on a new challenge.",
            "ja": "彼は新しい挑戦を始めました。",
            "focus": "took on",
            "jaFocus": "挑戦"
          },
          {
            "en": "I don’t want to take on too much.",
            "ja": "抱え込みすぎたくありません。",
            "focus": "take on",
            "jaFocus": "抱え込み"
          }
        ]
      },
      {
        "phrase": "take up",
        "ja": "始める・場所/時間を取る",
        "image": "新しい活動を自分の中に取り入れる、または場所や時間を占める。",
        "pattern": "take up + 名詞",
        "examples": [
          {
            "en": "This issue takes up too much time.",
            "ja": "この問題に時間を取られすぎています。",
            "focus": "takes up",
            "jaFocus": "時間を取られ"
          },
          {
            "en": "The new system takes up less space.",
            "ja": "新しいシステムは場所をあまり取りません。",
            "focus": "takes up",
            "jaFocus": "場所を取り"
          },
          {
            "en": "I’d like to take up that point later.",
            "ja": "その点は後で取り上げたいです。",
            "focus": "take up",
            "jaFocus": "取り上げ"
          }
        ],
        "dailyExamples": [
          {
            "en": "I took up jogging last year.",
            "ja": "昨年ジョギングを始めました。",
            "focus": "took up",
            "jaFocus": "始めました"
          },
          {
            "en": "This sofa takes up a lot of space.",
            "ja": "このソファはかなり場所を取ります。",
            "focus": "takes up",
            "jaFocus": "場所を取ります"
          }
        ]
      },
      {
        "phrase": "take back",
        "ja": "取り戻す・撤回する",
        "image": "一度外に出たものを自分の側へ戻す。",
        "pattern": "take back + 名詞",
        "examples": [
          {
            "en": "I need to take back my previous comment.",
            "ja": "先ほどの発言を撤回する必要があります。",
            "focus": "take back",
            "jaFocus": "撤回"
          },
          {
            "en": "Can we take back the proposal and revise it?",
            "ja": "提案書を一度戻して修正できますか？",
            "focus": "take back",
            "jaFocus": "戻して"
          },
          {
            "en": "The client took back the request.",
            "ja": "クライアントはその依頼を取り下げました。",
            "focus": "took back",
            "jaFocus": "取り下げました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I take back what I said.",
            "ja": "さっき言ったことを撤回します。",
            "focus": "take back",
            "jaFocus": "撤回"
          },
          {
            "en": "The store took back the item.",
            "ja": "店はその商品を返品として受け取りました。",
            "focus": "took back",
            "jaFocus": "返品"
          }
        ]
      },
      {
        "phrase": "take in",
        "ja": "取り込む・理解する",
        "image": "情報や内容を自分の中に入れる。",
        "pattern": "take in + 名詞",
        "examples": [
          {
            "en": "It was a lot of information to take in.",
            "ja": "理解する情報量が多かったです。",
            "focus": "take in",
            "jaFocus": "理解する"
          },
          {
            "en": "We need to take in customer feedback.",
            "ja": "顧客の意見を取り入れる必要があります。",
            "focus": "take in",
            "jaFocus": "取り入れる"
          },
          {
            "en": "The report takes in several market trends.",
            "ja": "その報告書は複数の市場動向を取り込んでいます。",
            "focus": "takes in",
            "jaFocus": "取り込んで"
          }
        ],
        "dailyExamples": [
          {
            "en": "I couldn’t take in the news at first.",
            "ja": "最初はそのニュースを受け止められませんでした。",
            "focus": "take in",
            "jaFocus": "受け止め"
          },
          {
            "en": "This room takes in a lot of light.",
            "ja": "この部屋は光をたくさん取り込みます。",
            "focus": "takes in",
            "jaFocus": "取り込みます"
          }
        ]
      },
      {
        "phrase": "take out",
        "ja": "取り出す・外へ出す",
        "image": "中にあるものを外へ出す。",
        "pattern": "take out + 名詞",
        "examples": [
          {
            "en": "Please take out the unnecessary section.",
            "ja": "不要な部分を削除してください。",
            "focus": "take out",
            "jaFocus": "削除"
          },
          {
            "en": "I took out the old data from the file.",
            "ja": "ファイルから古いデータを取り除きました。",
            "focus": "took out",
            "jaFocus": "取り除きました"
          },
          {
            "en": "Let’s take out this slide.",
            "ja": "このスライドを外しましょう。",
            "focus": "take out",
            "jaFocus": "外しましょう"
          }
        ],
        "dailyExamples": [
          {
            "en": "I took out my wallet.",
            "ja": "財布を取り出しました。",
            "focus": "took out",
            "jaFocus": "取り出しました"
          },
          {
            "en": "Let’s take out the trash.",
            "ja": "ゴミを出しましょう。",
            "focus": "take out",
            "jaFocus": "出しましょう"
          }
        ]
      },
      {
        "phrase": "take away",
        "ja": "取り除く・持ち帰る",
        "image": "何かをその場から離して持っていく。",
        "pattern": "take away + 名詞",
        "examples": [
          {
            "en": "This change will take away unnecessary work.",
            "ja": "この変更で不要な作業をなくせます。",
            "focus": "take away",
            "jaFocus": "なくせます"
          },
          {
            "en": "The main takeaway is clear.",
            "ja": "主な学びは明確です。",
            "focus": "takeaway",
            "jaFocus": "学び"
          },
          {
            "en": "Let’s take away one key lesson from this meeting.",
            "ja": "この会議から重要な学びを1つ持ち帰りましょう。",
            "focus": "take away",
            "jaFocus": "持ち帰り"
          }
        ],
        "dailyExamples": [
          {
            "en": "I’ll take away the empty plates.",
            "ja": "空いたお皿を下げます。",
            "focus": "take away",
            "jaFocus": "下げます"
          },
          {
            "en": "What did you take away from the movie?",
            "ja": "その映画から何を学びましたか？",
            "focus": "take away",
            "jaFocus": "学びました"
          }
        ]
      },
      {
        "phrase": "take through",
        "ja": "案内する・説明する",
        "image": "相手を内容の流れに沿って連れていく。",
        "pattern": "take 人 through + 名詞",
        "examples": [
          {
            "en": "Let me take you through the proposal.",
            "ja": "提案内容をご説明します。",
            "focus": "take you through",
            "jaFocus": "ご説明"
          },
          {
            "en": "She took us through the new process.",
            "ja": "彼女が新しい手順を説明してくれました。",
            "focus": "took us through",
            "jaFocus": "説明"
          },
          {
            "en": "Can you take me through the numbers?",
            "ja": "数字の内容を説明してもらえますか？",
            "focus": "take me through",
            "jaFocus": "説明して"
          }
        ],
        "dailyExamples": [
          {
            "en": "He took me through the museum.",
            "ja": "彼が博物館を案内してくれました。",
            "focus": "took me through",
            "jaFocus": "案内"
          },
          {
            "en": "Can you take me through the setup?",
            "ja": "設定方法を教えてくれる？",
            "focus": "take me through",
            "jaFocus": "教えて"
          }
        ]
      },
      {
        "phrase": "take after",
        "ja": "似ている",
        "image": "性格や特徴を家族などから受け継ぐ。",
        "pattern": "take after + 人",
        "examples": [
          {
            "en": "The new branch takes after the Tokyo office model.",
            "ja": "新支店は東京オフィスのモデルを踏襲しています。",
            "focus": "takes after",
            "jaFocus": "踏襲"
          },
          {
            "en": "This design takes after our previous product.",
            "ja": "このデザインは前製品の特徴を受け継いでいます。",
            "focus": "takes after",
            "jaFocus": "受け継いで"
          },
          {
            "en": "The policy takes after last year’s approach.",
            "ja": "その方針は昨年のアプローチを踏襲しています。",
            "focus": "takes after",
            "jaFocus": "踏襲"
          }
        ],
        "dailyExamples": [
          {
            "en": "She takes after her mother.",
            "ja": "彼女は母親に似ています。",
            "focus": "takes after",
            "jaFocus": "似ています"
          },
          {
            "en": "He takes after his father in personality.",
            "ja": "彼は性格が父親に似ています。",
            "focus": "takes after",
            "jaFocus": "似ています"
          }
        ]
      }
    ]
  },
  {
    "id": "make",
    "rank": 3,
    "word": "MAKE",
    "ipa": "/meɪk/",
    "kana": "メイク",
    "syllable": "make",
    "transitivity": "他動詞中心",
    "importance": "★★★★★ 超重要",
    "core": "何かを作り出す・結果を生み出す",
    "coreDetail": "MAKEは、物だけでなく、決定・計画・時間・状況・印象などを「作り出す」動詞です。仕事では、判断する、準備する、進捗を出す、相手に理解させる場面でよく使います。",
    "coreVisual": {
        "from": [
            "📄 資料",
            "✅ 決定",
            "📈 進捗",
            "🗓️ 予定"
        ],
        "to": "結果",
        "label": "行動 → 結果を作る"
    },
    "meanings": [
        {
            "id": "create",
            "title": "① 作る・作成する",
            "pattern": "MAKE + 名詞",
            "transitivity": "他動詞",
            "structure": "S + make + O",
            "image": "資料・案・仕組みなどを作り出す。",
            "point": "make の後ろに作るものを置く。仕事では document, report, list, plan などとよく使う。",
            "examples": [
                {
                    "en": "I made a report for the meeting.",
                    "ja": "会議用の報告書を作成した。",
                    "focus": "made",
                    "object": "a report",
                    "jaFocus": "作成した"
                },
                {
                    "en": "We made a checklist for the project.",
                    "ja": "その案件用のチェックリストを作成した。",
                    "focus": "made",
                    "object": "a checklist",
                    "jaFocus": "作成した"
                },
                {
                    "en": "She made a new proposal for the client.",
                    "ja": "彼女は顧客向けに新しい提案書を作成した。",
                    "focus": "made",
                    "object": "a new proposal",
                    "jaFocus": "作成した"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I made dinner after work.",
                    "ja": "仕事の後に夕食を作った。",
                    "focus": "made",
                    "object": "dinner",
                    "jaFocus": "作った"
                },
                {
                    "en": "He made a small shelf at home.",
                    "ja": "彼は家で小さな棚を作った。",
                    "focus": "made",
                    "object": "a small shelf",
                    "jaFocus": "作った"
                }
            ]
        },
        {
            "id": "decision",
            "title": "② 決める・判断する",
            "pattern": "MAKE + a decision",
            "transitivity": "他動詞",
            "structure": "S + make + O",
            "image": "考えた結果として決定を作る。",
            "point": "decision, choice, judgment など、判断を表す名詞と相性が良い。",
            "examples": [
                {
                    "en": "We need to make a decision today.",
                    "ja": "今日中に決定する必要があります。",
                    "focus": "make",
                    "object": "a decision",
                    "jaFocus": "決定する"
                },
                {
                    "en": "The manager made the final decision.",
                    "ja": "マネージャーが最終判断をした。",
                    "focus": "made",
                    "object": "the final decision",
                    "jaFocus": "判断をした"
                },
                {
                    "en": "Please make a decision by Friday.",
                    "ja": "金曜日までに決めてください。",
                    "focus": "make",
                    "object": "a decision",
                    "jaFocus": "決めて"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I made a decision to study English again.",
                    "ja": "英語をもう一度勉強することに決めた。",
                    "focus": "made",
                    "object": "a decision",
                    "jaFocus": "決めた"
                },
                {
                    "en": "She made the right choice.",
                    "ja": "彼女は正しい選択をした。",
                    "focus": "made",
                    "object": "the right choice",
                    "jaFocus": "選択をした"
                }
            ]
        },
        {
            "id": "progress",
            "title": "③ 進捗を出す",
            "pattern": "MAKE + progress",
            "transitivity": "他動詞",
            "structure": "S + make + O",
            "image": "作業の結果として前進を生み出す。",
            "point": "progress は数えられない名詞なので a progress とは言わない。",
            "examples": [
                {
                    "en": "We made good progress this week.",
                    "ja": "今週は順調に進捗を出せました。",
                    "focus": "made",
                    "object": "good progress",
                    "jaFocus": "進捗を出せました"
                },
                {
                    "en": "The team made progress on the design.",
                    "ja": "チームは設計で進捗を出した。",
                    "focus": "made",
                    "object": "progress",
                    "jaFocus": "進捗を出した"
                },
                {
                    "en": "I want to make more progress next month.",
                    "ja": "来月はもっと進捗を出したいです。",
                    "focus": "make",
                    "object": "more progress",
                    "jaFocus": "進捗を出したい"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I made progress with my English.",
                    "ja": "英語学習で進歩した。",
                    "focus": "made",
                    "object": "progress",
                    "jaFocus": "進歩した"
                },
                {
                    "en": "He made slow progress at first.",
                    "ja": "彼は最初はゆっくり進歩した。",
                    "focus": "made",
                    "object": "slow progress",
                    "jaFocus": "進歩した"
                }
            ]
        },
        {
            "id": "mistake",
            "title": "④ ミスをする",
            "pattern": "MAKE + a mistake",
            "transitivity": "他動詞",
            "structure": "S + make + O",
            "image": "行動の結果としてミスを生む。",
            "point": "mistake, error などと使う。ビジネスでは報告・改善の場面でよく使う。",
            "examples": [
                {
                    "en": "I made a mistake in the quotation.",
                    "ja": "見積書でミスをしました。",
                    "focus": "made",
                    "object": "a mistake",
                    "jaFocus": "ミスをしました"
                },
                {
                    "en": "We made an error in the schedule.",
                    "ja": "スケジュールに誤りがありました。",
                    "focus": "made",
                    "object": "an error",
                    "jaFocus": "誤りがありました"
                },
                {
                    "en": "Please check it before we make a mistake.",
                    "ja": "ミスをする前に確認してください。",
                    "focus": "make",
                    "object": "a mistake",
                    "jaFocus": "ミスをする"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I made a mistake on the form.",
                    "ja": "申込書でミスをした。",
                    "focus": "made",
                    "object": "a mistake",
                    "jaFocus": "ミスをした"
                },
                {
                    "en": "Everyone makes mistakes sometimes.",
                    "ja": "誰でも時々ミスをする。",
                    "focus": "makes",
                    "object": "mistakes",
                    "jaFocus": "ミスをする"
                }
            ]
        },
        {
            "id": "time",
            "title": "⑤ 時間を作る",
            "pattern": "MAKE + time",
            "transitivity": "他動詞",
            "structure": "S + make + O",
            "image": "予定の中から時間を作り出す。",
            "point": "make time は「時間を作る」。take time は「時間がかかる」と対比して覚える。",
            "examples": [
                {
                    "en": "I will make time for the meeting tomorrow.",
                    "ja": "明日の会議の時間を作ります。",
                    "focus": "make",
                    "object": "time",
                    "jaFocus": "時間を作ります"
                },
                {
                    "en": "Can you make time for a quick call?",
                    "ja": "短い電話の時間を作れますか。",
                    "focus": "make",
                    "object": "time",
                    "jaFocus": "時間を作れますか"
                },
                {
                    "en": "We need to make time to review the proposal.",
                    "ja": "提案書を確認する時間を作る必要があります。",
                    "focus": "make",
                    "object": "time",
                    "jaFocus": "時間を作る"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I made time to go to the gym.",
                    "ja": "ジムに行く時間を作った。",
                    "focus": "made",
                    "object": "time",
                    "jaFocus": "時間を作った"
                },
                {
                    "en": "She makes time for her family.",
                    "ja": "彼女は家族との時間を作っている。",
                    "focus": "makes",
                    "object": "time",
                    "jaFocus": "時間を作っている"
                }
            ]
        },
        {
            "id": "sure",
            "title": "⑥ 確認する・確実にする",
            "pattern": "MAKE SURE + 文",
            "transitivity": "他動詞句",
            "structure": "S + make sure + clause",
            "image": "不確実なことを確実な状態にする。",
            "point": "make sure は仕事で非常によく使う。「必ず〜する」「確認する」。",
            "examples": [
                {
                    "en": "Please make sure the document is attached.",
                    "ja": "資料が添付されているか確認してください。",
                    "focus": "make sure",
                    "jaFocus": "確認してください"
                },
                {
                    "en": "I will make sure the client receives it.",
                    "ja": "顧客がそれを受け取れるようにします。",
                    "focus": "make sure",
                    "jaFocus": "ようにします"
                },
                {
                    "en": "Make sure you update the file before the meeting.",
                    "ja": "会議前にファイルを更新してください。",
                    "focus": "Make sure",
                    "jaFocus": "してください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "Make sure you lock the door.",
                    "ja": "ドアに鍵をかけたか確認して。",
                    "focus": "Make sure",
                    "jaFocus": "確認して"
                },
                {
                    "en": "I made sure the tickets were in my bag.",
                    "ja": "チケットがバッグに入っているか確認した。",
                    "focus": "made sure",
                    "jaFocus": "確認した"
                }
            ]
        },
        {
            "id": "money",
            "title": "⑦ 稼ぐ・売上を作る",
            "pattern": "MAKE + money / sales",
            "transitivity": "他動詞",
            "structure": "S + make + O",
            "image": "仕事や販売の結果としてお金・売上を生み出す。",
            "point": "make money, make a profit, make sales と使う。",
            "examples": [
                {
                    "en": "This product made a profit last quarter.",
                    "ja": "この商品は前四半期に利益を出しました。",
                    "focus": "made",
                    "object": "a profit",
                    "jaFocus": "利益を出しました"
                },
                {
                    "en": "We need to make more sales this month.",
                    "ja": "今月はもっと売上を作る必要があります。",
                    "focus": "make",
                    "object": "more sales",
                    "jaFocus": "売上を作る"
                },
                {
                    "en": "The campaign made a big impact on sales.",
                    "ja": "そのキャンペーンは売上に大きな影響を与えた。",
                    "focus": "made",
                    "object": "a big impact",
                    "jaFocus": "影響を与えた"
                }
            ],
            "dailyExamples": [
                {
                    "en": "He makes money from his side job.",
                    "ja": "彼は副業でお金を稼いでいる。",
                    "focus": "makes",
                    "object": "money",
                    "jaFocus": "稼いでいる"
                },
                {
                    "en": "This shop makes good coffee and good money.",
                    "ja": "この店は良いコーヒーを作り、しっかり稼いでいる。",
                    "focus": "makes",
                    "object": "good coffee and good money",
                    "jaFocus": "稼いでいる"
                }
            ]
        },
        {
            "id": "clear",
            "title": "⑧ 明確にする",
            "pattern": "MAKE + O + C",
            "transitivity": "他動詞",
            "structure": "S + make + O + C",
            "image": "相手や状況をある状態にする。",
            "point": "make it clear, make the process easier のように「OをCにする」。",
            "examples": [
                {
                    "en": "I made the schedule clear for everyone.",
                    "ja": "全員にスケジュールを明確にしました。",
                    "focus": "made",
                    "object": "the schedule",
                    "jaFocus": "明確にしました"
                },
                {
                    "en": "This chart makes the result easier to understand.",
                    "ja": "この図は結果を理解しやすくします。",
                    "focus": "makes",
                    "object": "the result",
                    "jaFocus": "理解しやすくします"
                },
                {
                    "en": "Please make your request clear.",
                    "ja": "依頼内容を明確にしてください。",
                    "focus": "make",
                    "object": "your request",
                    "jaFocus": "明確にして"
                }
            ],
            "dailyExamples": [
                {
                    "en": "This app makes English easier.",
                    "ja": "このアプリは英語を簡単にしてくれる。",
                    "focus": "makes",
                    "object": "English",
                    "jaFocus": "簡単にしてくれる"
                },
                {
                    "en": "The explanation made me happy.",
                    "ja": "その説明でうれしくなった。",
                    "focus": "made",
                    "object": "me",
                    "jaFocus": "うれしくなった"
                }
            ]
        },
        {
            "id": "arrangement",
            "title": "⑨ 予定・手配をする",
            "pattern": "MAKE + arrangement / appointment",
            "transitivity": "他動詞",
            "structure": "S + make + O",
            "image": "必要な準備や予定を作る。",
            "point": "appointment, reservation, arrangement などと使う。",
            "examples": [
                {
                    "en": "I made an appointment with the client.",
                    "ja": "顧客とのアポイントを取りました。",
                    "focus": "made",
                    "object": "an appointment",
                    "jaFocus": "アポイントを取りました"
                },
                {
                    "en": "We made arrangements for the business trip.",
                    "ja": "出張の手配をしました。",
                    "focus": "made",
                    "object": "arrangements",
                    "jaFocus": "手配をしました"
                },
                {
                    "en": "Can you make a reservation for lunch?",
                    "ja": "昼食の予約をしてもらえますか。",
                    "focus": "make",
                    "object": "a reservation",
                    "jaFocus": "予約をして"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I made a reservation at a restaurant.",
                    "ja": "レストランを予約した。",
                    "focus": "made",
                    "object": "a reservation",
                    "jaFocus": "予約した"
                },
                {
                    "en": "She made plans for the weekend.",
                    "ja": "彼女は週末の予定を立てた。",
                    "focus": "made",
                    "object": "plans",
                    "jaFocus": "予定を立てた"
                }
            ]
        },
        {
            "id": "contact",
            "title": "⑩ 連絡・発言をする",
            "pattern": "MAKE + call / comment / request",
            "transitivity": "他動詞",
            "structure": "S + make + O",
            "image": "電話・発言・依頼などの行動を生み出す。",
            "point": "make a call, make a comment, make a request は仕事で頻出。",
            "examples": [
                {
                    "en": "I made a call to the supplier.",
                    "ja": "仕入先に電話をしました。",
                    "focus": "made",
                    "object": "a call",
                    "jaFocus": "電話をしました"
                },
                {
                    "en": "She made a comment during the meeting.",
                    "ja": "彼女は会議中にコメントした。",
                    "focus": "made",
                    "object": "a comment",
                    "jaFocus": "コメントした"
                },
                {
                    "en": "We made a request to change the delivery date.",
                    "ja": "納期変更の依頼をしました。",
                    "focus": "made",
                    "object": "a request",
                    "jaFocus": "依頼をしました"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I made a quick call before dinner.",
                    "ja": "夕食前に短い電話をした。",
                    "focus": "made",
                    "object": "a quick call",
                    "jaFocus": "電話をした"
                },
                {
                    "en": "He made a funny comment.",
                    "ja": "彼は面白いコメントをした。",
                    "focus": "made",
                    "object": "a funny comment",
                    "jaFocus": "コメントをした"
                }
            ]
        }
    ],
    "collocations": [
        {
            "phrase": "make a decision",
            "ja": "決定する",
            "image": "考えた結果として決定を作る。",
            "pattern": "make + a decision",
            "examples": [
                {
                    "en": "We need to make a decision today.",
                    "ja": "今日中に決定する必要があります。",
                    "focus": "make",
                    "object": "a decision",
                    "jaFocus": "決定する"
                },
                {
                    "en": "The team made a decision after the meeting.",
                    "ja": "チームは会議後に決定した。",
                    "focus": "made",
                    "object": "a decision",
                    "jaFocus": "決定した"
                },
                {
                    "en": "Please make a decision by noon.",
                    "ja": "正午までに決めてください。",
                    "focus": "make",
                    "object": "a decision",
                    "jaFocus": "決めて"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I made a decision to move.",
                    "ja": "引っ越すことに決めた。",
                    "focus": "made",
                    "object": "a decision",
                    "jaFocus": "決めた"
                },
                {
                    "en": "She made a decision quickly.",
                    "ja": "彼女はすぐに決めた。",
                    "focus": "made",
                    "object": "a decision",
                    "jaFocus": "決めた"
                }
            ]
        },
        {
            "phrase": "make progress",
            "ja": "進捗を出す",
            "image": "作業が前に進む状態を作る。",
            "pattern": "make + progress",
            "examples": [
                {
                    "en": "We made progress on the project.",
                    "ja": "案件で進捗を出しました。",
                    "focus": "made",
                    "object": "progress",
                    "jaFocus": "進捗を出しました"
                },
                {
                    "en": "The design team made good progress.",
                    "ja": "設計チームは順調に進んだ。",
                    "focus": "made",
                    "object": "good progress",
                    "jaFocus": "進んだ"
                },
                {
                    "en": "I want to make progress this week.",
                    "ja": "今週は進捗を出したいです。",
                    "focus": "make",
                    "object": "progress",
                    "jaFocus": "進捗を出したい"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I made progress with English.",
                    "ja": "英語で進歩した。",
                    "focus": "made",
                    "object": "progress",
                    "jaFocus": "進歩した"
                },
                {
                    "en": "He made a little progress.",
                    "ja": "彼は少し進歩した。",
                    "focus": "made",
                    "object": "a little progress",
                    "jaFocus": "進歩した"
                }
            ]
        },
        {
            "phrase": "make sure",
            "ja": "確認する",
            "image": "不確実なことを確実にする。",
            "pattern": "make sure + 文",
            "examples": [
                {
                    "en": "Please make sure the file is updated.",
                    "ja": "ファイルが更新されているか確認してください。",
                    "focus": "make sure",
                    "jaFocus": "確認してください"
                },
                {
                    "en": "I will make sure it is done today.",
                    "ja": "今日中に終わるようにします。",
                    "focus": "make sure",
                    "jaFocus": "ようにします"
                },
                {
                    "en": "Make sure the client gets the latest version.",
                    "ja": "顧客が最新版を受け取れるようにしてください。",
                    "focus": "Make sure",
                    "jaFocus": "してください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "Make sure you bring your wallet.",
                    "ja": "財布を持ったか確認して。",
                    "focus": "Make sure",
                    "jaFocus": "確認して"
                },
                {
                    "en": "I made sure everything was ready.",
                    "ja": "すべて準備できているか確認した。",
                    "focus": "made sure",
                    "jaFocus": "確認した"
                }
            ]
        },
        {
            "phrase": "make a mistake",
            "ja": "ミスをする",
            "image": "行動の結果としてミスを生む。",
            "pattern": "make + a mistake",
            "examples": [
                {
                    "en": "I made a mistake in the email.",
                    "ja": "メールでミスをしました。",
                    "focus": "made",
                    "object": "a mistake",
                    "jaFocus": "ミスをしました"
                },
                {
                    "en": "We cannot make the same mistake again.",
                    "ja": "同じミスを繰り返せません。",
                    "focus": "make",
                    "object": "the same mistake",
                    "jaFocus": "ミスを繰り返せません"
                },
                {
                    "en": "Please double-check it before you make a mistake.",
                    "ja": "ミスをする前に再確認してください。",
                    "focus": "make",
                    "object": "a mistake",
                    "jaFocus": "ミスをする"
                }
            ],
            "dailyExamples": [
                {
                    "en": "Everyone makes mistakes.",
                    "ja": "誰でもミスをする。",
                    "focus": "makes",
                    "object": "mistakes",
                    "jaFocus": "ミスをする"
                },
                {
                    "en": "I made a small mistake.",
                    "ja": "小さなミスをした。",
                    "focus": "made",
                    "object": "a small mistake",
                    "jaFocus": "ミスをした"
                }
            ]
        },
        {
            "phrase": "make time",
            "ja": "時間を作る",
            "image": "予定の中から時間を作る。",
            "pattern": "make + time",
            "examples": [
                {
                    "en": "Can you make time for a quick meeting?",
                    "ja": "短い会議の時間を作れますか。",
                    "focus": "make",
                    "object": "time",
                    "jaFocus": "時間を作れますか"
                },
                {
                    "en": "I made time to review the quote.",
                    "ja": "見積を確認する時間を作りました。",
                    "focus": "made",
                    "object": "time",
                    "jaFocus": "時間を作りました"
                },
                {
                    "en": "We need to make time for training.",
                    "ja": "研修の時間を作る必要があります。",
                    "focus": "make",
                    "object": "time",
                    "jaFocus": "時間を作る"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I made time for my family.",
                    "ja": "家族との時間を作った。",
                    "focus": "made",
                    "object": "time",
                    "jaFocus": "時間を作った"
                },
                {
                    "en": "She makes time to read.",
                    "ja": "彼女は読書の時間を作っている。",
                    "focus": "makes",
                    "object": "time",
                    "jaFocus": "時間を作っている"
                }
            ]
        },
        {
            "phrase": "make a plan",
            "ja": "計画を立てる",
            "image": "行動の流れを作る。",
            "pattern": "make + a plan",
            "examples": [
                {
                    "en": "Let’s make a plan for next month.",
                    "ja": "来月の計画を立てましょう。",
                    "focus": "make",
                    "object": "a plan",
                    "jaFocus": "計画を立てましょう"
                },
                {
                    "en": "We made a plan for the launch.",
                    "ja": "発売に向けた計画を立てました。",
                    "focus": "made",
                    "object": "a plan",
                    "jaFocus": "計画を立てました"
                },
                {
                    "en": "Please make a backup plan.",
                    "ja": "予備の計画を立ててください。",
                    "focus": "make",
                    "object": "a backup plan",
                    "jaFocus": "計画を立てて"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I made a plan for the weekend.",
                    "ja": "週末の計画を立てた。",
                    "focus": "made",
                    "object": "a plan",
                    "jaFocus": "計画を立てた"
                },
                {
                    "en": "They made travel plans together.",
                    "ja": "彼らは一緒に旅行計画を立てた。",
                    "focus": "made",
                    "object": "travel plans",
                    "jaFocus": "計画を立てた"
                }
            ]
        },
        {
            "phrase": "make a request",
            "ja": "依頼する",
            "image": "相手に求める行動を作る。",
            "pattern": "make + a request",
            "examples": [
                {
                    "en": "We made a request for more information.",
                    "ja": "追加情報を依頼しました。",
                    "focus": "made",
                    "object": "a request",
                    "jaFocus": "依頼しました"
                },
                {
                    "en": "The client made a request to change the color.",
                    "ja": "顧客が色変更を依頼しました。",
                    "focus": "made",
                    "object": "a request",
                    "jaFocus": "依頼しました"
                },
                {
                    "en": "Can I make one request?",
                    "ja": "1つ依頼してもよいですか。",
                    "focus": "make",
                    "object": "one request",
                    "jaFocus": "依頼して"
                }
            ],
            "dailyExamples": [
                {
                    "en": "She made a request at the front desk.",
                    "ja": "彼女は受付で依頼した。",
                    "focus": "made",
                    "object": "a request",
                    "jaFocus": "依頼した"
                },
                {
                    "en": "I made a small request.",
                    "ja": "小さなお願いをした。",
                    "focus": "made",
                    "object": "a small request",
                    "jaFocus": "お願いをした"
                }
            ]
        },
        {
            "phrase": "make an appointment",
            "ja": "予約・アポイントを取る",
            "image": "会う時間を作る。",
            "pattern": "make + an appointment",
            "examples": [
                {
                    "en": "I made an appointment with the client.",
                    "ja": "顧客とのアポイントを取りました。",
                    "focus": "made",
                    "object": "an appointment",
                    "jaFocus": "アポイントを取りました"
                },
                {
                    "en": "Can you make an appointment for next week?",
                    "ja": "来週のアポイントを取れますか。",
                    "focus": "make",
                    "object": "an appointment",
                    "jaFocus": "アポイントを取れますか"
                },
                {
                    "en": "She made an appointment with the supplier.",
                    "ja": "彼女は仕入先とのアポイントを取った。",
                    "focus": "made",
                    "object": "an appointment",
                    "jaFocus": "アポイントを取った"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I made a doctor’s appointment.",
                    "ja": "病院の予約を取った。",
                    "focus": "made",
                    "object": "a doctor’s appointment",
                    "jaFocus": "予約を取った"
                },
                {
                    "en": "He made an appointment online.",
                    "ja": "彼はオンラインで予約した。",
                    "focus": "made",
                    "object": "an appointment",
                    "jaFocus": "予約した"
                }
            ]
        },
        {
            "phrase": "make it clear",
            "ja": "明確にする",
            "image": "相手が分かる状態を作る。",
            "pattern": "make + it + clear",
            "examples": [
                {
                    "en": "I made it clear that the deadline is Friday.",
                    "ja": "締切が金曜日であることを明確にしました。",
                    "focus": "made",
                    "object": "it",
                    "jaFocus": "明確にしました"
                },
                {
                    "en": "Please make it clear in the email.",
                    "ja": "メールで明確にしてください。",
                    "focus": "make",
                    "object": "it",
                    "jaFocus": "明確にして"
                },
                {
                    "en": "The manager made it clear what we should do.",
                    "ja": "マネージャーは私たちがすべきことを明確にした。",
                    "focus": "made",
                    "object": "it",
                    "jaFocus": "明確にした"
                }
            ],
            "dailyExamples": [
                {
                    "en": "She made it clear that she was busy.",
                    "ja": "彼女は忙しいことをはっきり伝えた。",
                    "focus": "made",
                    "object": "it",
                    "jaFocus": "はっきり伝えた"
                },
                {
                    "en": "I made my point clear.",
                    "ja": "自分の考えを明確にした。",
                    "focus": "made",
                    "object": "my point",
                    "jaFocus": "明確にした"
                }
            ]
        },
        {
            "phrase": "make sense",
            "ja": "意味が分かる・筋が通る",
            "image": "内容が理解できる形になる。",
            "pattern": "make + sense",
            "examples": [
                {
                    "en": "Your explanation makes sense.",
                    "ja": "あなたの説明は筋が通っています。",
                    "focus": "makes",
                    "object": "sense",
                    "jaFocus": "筋が通っています"
                },
                {
                    "en": "This schedule does not make sense.",
                    "ja": "このスケジュールは現実的ではありません。",
                    "focus": "make",
                    "object": "sense",
                    "jaFocus": "現実的ではありません"
                },
                {
                    "en": "It makes sense to review it again.",
                    "ja": "もう一度確認するのは理にかなっています。",
                    "focus": "makes",
                    "object": "sense",
                    "jaFocus": "理にかなっています"
                }
            ],
            "dailyExamples": [
                {
                    "en": "That makes sense.",
                    "ja": "それなら分かる。",
                    "focus": "makes",
                    "object": "sense",
                    "jaFocus": "分かる"
                },
                {
                    "en": "His story did not make sense.",
                    "ja": "彼の話は筋が通らなかった。",
                    "focus": "make",
                    "object": "sense",
                    "jaFocus": "筋が通らなかった"
                }
            ]
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "make up",
            "ja": "構成する・作り上げる",
            "image": "複数の要素が全体を作る。",
            "pattern": "make up + 名詞",
            "examples": [
                {
                    "en": "This part makes up 30% of the cost.",
                    "ja": "この部分がコストの30%を占めます。",
                    "focus": "makes up",
                    "object": "30% of the cost",
                    "jaFocus": "占めます"
                },
                {
                    "en": "Five members make up the project team.",
                    "ja": "5名でプロジェクトチームを構成しています。",
                    "focus": "make up",
                    "object": "the project team",
                    "jaFocus": "構成しています"
                },
                {
                    "en": "These items make up the final price.",
                    "ja": "これらの項目が最終価格を構成します。",
                    "focus": "make up",
                    "object": "the final price",
                    "jaFocus": "構成します"
                }
            ],
            "dailyExamples": [
                {
                    "en": "The story was made up.",
                    "ja": "その話は作り話だった。",
                    "focus": "made up",
                    "jaFocus": "作り話だった"
                },
                {
                    "en": "Women make up half of the group.",
                    "ja": "女性がグループの半分を占めている。",
                    "focus": "make up",
                    "object": "half of the group",
                    "jaFocus": "占めている"
                }
            ]
        },
        {
            "phrase": "make out",
            "ja": "理解する・読み取る",
            "image": "ぼんやりしたものを理解できる形にする。",
            "pattern": "make out + 名詞",
            "examples": [
                {
                    "en": "I cannot make out the numbers in this photo.",
                    "ja": "この写真の数字を読み取れません。",
                    "focus": "make out",
                    "object": "the numbers",
                    "jaFocus": "読み取れません"
                },
                {
                    "en": "Can you make out the client’s handwriting?",
                    "ja": "顧客の手書き文字を読めますか。",
                    "focus": "make out",
                    "object": "the client’s handwriting",
                    "jaFocus": "読めますか"
                },
                {
                    "en": "It is hard to make out the details.",
                    "ja": "詳細を把握するのが難しいです。",
                    "focus": "make out",
                    "object": "the details",
                    "jaFocus": "把握する"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I could not make out what he said.",
                    "ja": "彼が何と言ったか分からなかった。",
                    "focus": "make out",
                    "jaFocus": "分からなかった"
                },
                {
                    "en": "We could barely make out the sign.",
                    "ja": "その標識がかろうじて見えた。",
                    "focus": "make out",
                    "object": "the sign",
                    "jaFocus": "見えた"
                }
            ]
        },
        {
            "phrase": "make for",
            "ja": "〜へ向かう・〜につながる",
            "image": "ある方向や結果へ進む。",
            "pattern": "make for + 名詞",
            "examples": [
                {
                    "en": "These changes make for better communication.",
                    "ja": "これらの変更はより良いコミュニケーションにつながります。",
                    "focus": "make for",
                    "object": "better communication",
                    "jaFocus": "つながります"
                },
                {
                    "en": "A clear agenda makes for a better meeting.",
                    "ja": "明確な議題はより良い会議につながります。",
                    "focus": "makes for",
                    "object": "a better meeting",
                    "jaFocus": "つながります"
                },
                {
                    "en": "This rule makes for faster approval.",
                    "ja": "このルールは承認の迅速化につながります。",
                    "focus": "makes for",
                    "object": "faster approval",
                    "jaFocus": "つながります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "We made for the station.",
                    "ja": "私たちは駅へ向かった。",
                    "focus": "made for",
                    "object": "the station",
                    "jaFocus": "向かった"
                },
                {
                    "en": "Good sleep makes for a better day.",
                    "ja": "良い睡眠は良い一日につながる。",
                    "focus": "makes for",
                    "object": "a better day",
                    "jaFocus": "つながる"
                }
            ]
        },
        {
            "phrase": "make of",
            "ja": "〜をどう思うか",
            "image": "情報から判断を作る。",
            "pattern": "make of + 名詞",
            "examples": [
                {
                    "en": "What do you make of this proposal?",
                    "ja": "この提案をどう思いますか。",
                    "focus": "make of",
                    "object": "this proposal",
                    "jaFocus": "どう思いますか"
                },
                {
                    "en": "What should we make of the client’s feedback?",
                    "ja": "顧客のフィードバックをどう受け止めるべきですか。",
                    "focus": "make of",
                    "object": "the client’s feedback",
                    "jaFocus": "どう受け止める"
                },
                {
                    "en": "I do not know what to make of this data.",
                    "ja": "このデータをどう判断すべきか分かりません。",
                    "focus": "make of",
                    "object": "this data",
                    "jaFocus": "判断すべき"
                }
            ],
            "dailyExamples": [
                {
                    "en": "What do you make of this movie?",
                    "ja": "この映画をどう思う。",
                    "focus": "make of",
                    "object": "this movie",
                    "jaFocus": "どう思う"
                },
                {
                    "en": "I do not know what to make of him.",
                    "ja": "彼をどう見ればいいか分からない。",
                    "focus": "make of",
                    "object": "him",
                    "jaFocus": "分からない"
                }
            ]
        },
        {
            "phrase": "make up for",
            "ja": "埋め合わせる",
            "image": "不足や損失を補う。",
            "pattern": "make up for + 名詞",
            "examples": [
                {
                    "en": "We need to make up for the delay.",
                    "ja": "遅れを取り戻す必要があります。",
                    "focus": "make up for",
                    "object": "the delay",
                    "jaFocus": "取り戻す"
                },
                {
                    "en": "The discount made up for the inconvenience.",
                    "ja": "割引で不便さを補いました。",
                    "focus": "made up for",
                    "object": "the inconvenience",
                    "jaFocus": "補いました"
                },
                {
                    "en": "Extra support helped make up for the lost time.",
                    "ja": "追加支援が失った時間の埋め合わせになりました。",
                    "focus": "make up for",
                    "object": "the lost time",
                    "jaFocus": "埋め合わせ"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I will make up for it next time.",
                    "ja": "次回埋め合わせるよ。",
                    "focus": "make up for",
                    "object": "it",
                    "jaFocus": "埋め合わせる"
                },
                {
                    "en": "Sleep cannot always make up for stress.",
                    "ja": "睡眠がいつもストレスを補えるとは限らない。",
                    "focus": "make up for",
                    "object": "stress",
                    "jaFocus": "補える"
                }
            ]
        },
        {
            "phrase": "make do with",
            "ja": "〜で間に合わせる",
            "image": "十分でないものを使って何とかする。",
            "pattern": "make do with + 名詞",
            "examples": [
                {
                    "en": "We have to make do with the current budget.",
                    "ja": "現在の予算で何とかする必要があります。",
                    "focus": "make do with",
                    "object": "the current budget",
                    "jaFocus": "何とかする"
                },
                {
                    "en": "Can we make do with this material?",
                    "ja": "この材料で間に合わせられますか。",
                    "focus": "make do with",
                    "object": "this material",
                    "jaFocus": "間に合わせられますか"
                },
                {
                    "en": "The team made do with limited resources.",
                    "ja": "チームは限られたリソースで何とかした。",
                    "focus": "made do with",
                    "object": "limited resources",
                    "jaFocus": "何とかした"
                }
            ],
            "dailyExamples": [
                {
                    "en": "We made do with what we had.",
                    "ja": "あるもので何とかした。",
                    "focus": "made do with",
                    "object": "what we had",
                    "jaFocus": "何とかした"
                },
                {
                    "en": "I can make do with a small room.",
                    "ja": "小さい部屋でも何とかなる。",
                    "focus": "make do with",
                    "object": "a small room",
                    "jaFocus": "何とかなる"
                }
            ]
        },
        {
            "phrase": "make it",
            "ja": "間に合う・成功する",
            "image": "目的地や目標に到達する。",
            "pattern": "make it",
            "examples": [
                {
                    "en": "I can make it to the meeting by three.",
                    "ja": "3時までに会議に間に合います。",
                    "focus": "make it",
                    "jaFocus": "間に合います"
                },
                {
                    "en": "Can you make it tomorrow morning?",
                    "ja": "明日の朝は都合がつきますか。",
                    "focus": "make it",
                    "jaFocus": "都合がつきますか"
                },
                {
                    "en": "We made it before the deadline.",
                    "ja": "締切前に間に合いました。",
                    "focus": "made it",
                    "jaFocus": "間に合いました"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I made it home safely.",
                    "ja": "無事に家に着いた。",
                    "focus": "made it",
                    "jaFocus": "着いた"
                },
                {
                    "en": "She finally made it.",
                    "ja": "彼女はついに成功した。",
                    "focus": "made it",
                    "jaFocus": "成功した"
                }
            ]
        },
        {
            "phrase": "make over",
            "ja": "作り替える・改装する",
            "image": "見た目や形を大きく変える。",
            "pattern": "make over + 名詞",
            "examples": [
                {
                    "en": "We made over the showroom for the event.",
                    "ja": "イベント用にショールームを改装しました。",
                    "focus": "made over",
                    "object": "the showroom",
                    "jaFocus": "改装しました"
                },
                {
                    "en": "The team made over the presentation slides.",
                    "ja": "チームはプレゼン資料を作り直した。",
                    "focus": "made over",
                    "object": "the presentation slides",
                    "jaFocus": "作り直した"
                },
                {
                    "en": "They made over the office layout.",
                    "ja": "彼らはオフィスレイアウトを変更した。",
                    "focus": "made over",
                    "object": "the office layout",
                    "jaFocus": "変更した"
                }
            ],
            "dailyExamples": [
                {
                    "en": "She made over her room.",
                    "ja": "彼女は部屋を模様替えした。",
                    "focus": "made over",
                    "object": "her room",
                    "jaFocus": "模様替えした"
                },
                {
                    "en": "The shop was made over last year.",
                    "ja": "その店は昨年改装された。",
                    "focus": "made over",
                    "jaFocus": "改装された"
                }
            ]
        },
        {
            "phrase": "make into",
            "ja": "〜に変える",
            "image": "あるものを別の形に作り変える。",
            "pattern": "make + O + into + 名詞",
            "examples": [
                {
                    "en": "We made the data into a simple chart.",
                    "ja": "データを簡単な図にしました。",
                    "focus": "made",
                    "object": "the data",
                    "jaFocus": "図にしました"
                },
                {
                    "en": "The designer made the idea into a visual plan.",
                    "ja": "デザイナーはアイデアを視覚的な計画にしました。",
                    "focus": "made",
                    "object": "the idea",
                    "jaFocus": "計画にしました"
                },
                {
                    "en": "Can you make this memo into a report?",
                    "ja": "このメモを報告書にできますか。",
                    "focus": "make",
                    "object": "this memo",
                    "jaFocus": "報告書に"
                }
            ],
            "dailyExamples": [
                {
                    "en": "She made old clothes into a bag.",
                    "ja": "彼女は古い服をバッグに作り替えた。",
                    "focus": "made",
                    "object": "old clothes",
                    "jaFocus": "作り替えた"
                },
                {
                    "en": "They made the story into a movie.",
                    "ja": "彼らはその物語を映画にした。",
                    "focus": "made",
                    "object": "the story",
                    "jaFocus": "映画にした"
                }
            ]
        },
        {
            "phrase": "make off with",
            "ja": "持ち逃げする",
            "image": "物を持って素早く逃げる。",
            "pattern": "make off with + 名詞",
            "examples": [
                {
                    "en": "Someone made off with the sample from the booth.",
                    "ja": "誰かがブースからサンプルを持ち去りました。",
                    "focus": "made off with",
                    "object": "the sample",
                    "jaFocus": "持ち去りました"
                },
                {
                    "en": "A visitor made off with the display item.",
                    "ja": "来場者が展示品を持ち去った。",
                    "focus": "made off with",
                    "object": "the display item",
                    "jaFocus": "持ち去った"
                },
                {
                    "en": "We should secure small items so no one makes off with them.",
                    "ja": "小物を持ち去られないよう固定すべきです。",
                    "focus": "makes off with",
                    "object": "them",
                    "jaFocus": "持ち去られ"
                }
            ],
            "dailyExamples": [
                {
                    "en": "A thief made off with my bag.",
                    "ja": "泥棒がバッグを持ち逃げした。",
                    "focus": "made off with",
                    "object": "my bag",
                    "jaFocus": "持ち逃げした"
                },
                {
                    "en": "The dog made off with my sandwich.",
                    "ja": "犬がサンドイッチを持って逃げた。",
                    "focus": "made off with",
                    "object": "my sandwich",
                    "jaFocus": "逃げた"
                }
            ]
        }
    ]
},
  {
    "id": "give",
    "rank": 4,
    "word": "GIVE",
    "ipa": "/ɡɪv/",
    "kana": "ギヴ",
    "syllable": "give",
    "transitivity": "他動詞中心",
    "importance": "★★★★★ 超重要",
    "core": "自分から相手へ渡す・与える",
    "coreDetail": "GIVEは、物・情報・許可・機会・印象などを自分から相手側へ出す動詞です。仕事では、説明する、共有する、許可する、フィードバックする場面でよく使います。",
    "coreVisual": {
        "from": [
            "🙋 自分",
            "📄 情報",
            "💬 意見",
            "✅ 許可"
        ],
        "to": "相手",
        "label": "自分 → 相手へ渡す"
    },
    "meanings": [
        {
            "id": "provide",
            "title": "① 渡す・提供する",
            "pattern": "GIVE + 名詞",
            "transitivity": "他動詞中心",
            "structure": "S + give + O",
            "image": "自分から相手へ渡す・与える",
            "point": "GIVEの中心イメージ「自分から相手へ渡す・与える」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "I gave the client the updated file.",
                    "ja": "顧客に更新版ファイルを渡した。",
                    "focus": "gave",
                    "object": "the updated file",
                    "jaFocus": "渡した"
                },
                {
                    "en": "We gave the client the updated file.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "gave",
                    "object": "the updated file",
                    "jaFocus": "渡した"
                },
                {
                    "en": "Please give this to the team.",
                    "ja": "これをチームに共有してください。",
                    "focus": "give",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I gave home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "gave",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "share",
            "title": "② 情報を共有する",
            "pattern": "GIVE + information",
            "transitivity": "他動詞中心",
            "structure": "S + give + O",
            "image": "自分から相手へ渡す・与える",
            "point": "GIVEの中心イメージ「自分から相手へ渡す・与える」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "Please give me the details by noon.",
                    "ja": "正午までに詳細を共有してください。",
                    "focus": "give",
                    "object": "the details",
                    "jaFocus": "共有して"
                },
                {
                    "en": "We give this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "give",
                    "object": "the details",
                    "jaFocus": "共有して"
                },
                {
                    "en": "Please give this to the team.",
                    "ja": "これをチームに共有してください。",
                    "focus": "give",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I gave home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "gave",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "feedback",
            "title": "③ フィードバックする",
            "pattern": "GIVE + feedback",
            "transitivity": "他動詞中心",
            "structure": "S + give + O",
            "image": "自分から相手へ渡す・与える",
            "point": "GIVEの中心イメージ「自分から相手へ渡す・与える」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "My manager gave me helpful feedback.",
                    "ja": "上司が有益なフィードバックをくれた。",
                    "focus": "gave",
                    "object": "helpful feedback",
                    "jaFocus": "くれた"
                },
                {
                    "en": "We give this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "gave",
                    "object": "helpful feedback",
                    "jaFocus": "くれた"
                },
                {
                    "en": "Please give this to the team.",
                    "ja": "これをチームに共有してください。",
                    "focus": "give",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I gave home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "gave",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "permission",
            "title": "④ 許可する",
            "pattern": "GIVE + permission",
            "transitivity": "他動詞中心",
            "structure": "S + give + O",
            "image": "自分から相手へ渡す・与える",
            "point": "GIVEの中心イメージ「自分から相手へ渡す・与える」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "The client gave us permission to proceed.",
                    "ja": "顧客が進行の許可をくれた。",
                    "focus": "gave",
                    "object": "permission",
                    "jaFocus": "許可をくれた"
                },
                {
                    "en": "We give this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "gave",
                    "object": "permission",
                    "jaFocus": "許可をくれた"
                },
                {
                    "en": "Please give this to the team.",
                    "ja": "これをチームに共有してください。",
                    "focus": "give",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I gave home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "gave",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "presentation",
            "title": "⑤ 発表する",
            "pattern": "GIVE + presentation",
            "transitivity": "他動詞中心",
            "structure": "S + give + O",
            "image": "自分から相手へ渡す・与える",
            "point": "GIVEの中心イメージ「自分から相手へ渡す・与える」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "I gave a presentation to the team.",
                    "ja": "チームにプレゼンをした。",
                    "focus": "gave",
                    "object": "a presentation",
                    "jaFocus": "プレゼンをした"
                },
                {
                    "en": "We gave a presentation to the team.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "gave",
                    "object": "a presentation",
                    "jaFocus": "プレゼンをした"
                },
                {
                    "en": "Please give this to the team.",
                    "ja": "これをチームに共有してください。",
                    "focus": "give",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I gave home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "gave",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "reason",
            "title": "⑥ 理由を示す",
            "pattern": "GIVE + reason",
            "transitivity": "他動詞中心",
            "structure": "S + give + O",
            "image": "自分から相手へ渡す・与える",
            "point": "GIVEの中心イメージ「自分から相手へ渡す・与える」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "He gave a clear reason for the delay.",
                    "ja": "彼は遅延の明確な理由を示した。",
                    "focus": "gave",
                    "object": "a clear reason",
                    "jaFocus": "示した"
                },
                {
                    "en": "We give this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "gave",
                    "object": "a clear reason",
                    "jaFocus": "示した"
                },
                {
                    "en": "Please give this to the team.",
                    "ja": "これをチームに共有してください。",
                    "focus": "give",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I gave home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "gave",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "opportunity",
            "title": "⑦ 機会を与える",
            "pattern": "GIVE + opportunity",
            "transitivity": "他動詞中心",
            "structure": "S + give + O",
            "image": "自分から相手へ渡す・与える",
            "point": "GIVEの中心イメージ「自分から相手へ渡す・与える」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "This project gave us a new opportunity.",
                    "ja": "この案件は新しい機会を与えてくれた。",
                    "focus": "gave",
                    "object": "a new opportunity",
                    "jaFocus": "与えてくれた"
                },
                {
                    "en": "We give this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "gave",
                    "object": "a new opportunity",
                    "jaFocus": "与えてくれた"
                },
                {
                    "en": "Please give this to the team.",
                    "ja": "これをチームに共有してください。",
                    "focus": "give",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I gave home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "gave",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "impression",
            "title": "⑧ 印象を与える",
            "pattern": "GIVE + impression",
            "transitivity": "他動詞中心",
            "structure": "S + give + O",
            "image": "自分から相手へ渡す・与える",
            "point": "GIVEの中心イメージ「自分から相手へ渡す・与える」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "The proposal gave a professional impression.",
                    "ja": "その提案書はプロらしい印象を与えた。",
                    "focus": "gave",
                    "object": "a professional impression",
                    "jaFocus": "印象を与えた"
                },
                {
                    "en": "We give this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "gave",
                    "object": "a professional impression",
                    "jaFocus": "印象を与えた"
                },
                {
                    "en": "Please give this to the team.",
                    "ja": "これをチームに共有してください。",
                    "focus": "give",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I gave home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "gave",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "support",
            "title": "⑨ 支援する",
            "pattern": "GIVE + support",
            "transitivity": "他動詞中心",
            "structure": "S + give + O",
            "image": "自分から相手へ渡す・与える",
            "point": "GIVEの中心イメージ「自分から相手へ渡す・与える」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "The sales team gave us strong support.",
                    "ja": "営業チームが強力に支援してくれた。",
                    "focus": "gave",
                    "object": "strong support",
                    "jaFocus": "支援してくれた"
                },
                {
                    "en": "We give this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "gave",
                    "object": "strong support",
                    "jaFocus": "支援してくれた"
                },
                {
                    "en": "Please give this to the team.",
                    "ja": "これをチームに共有してください。",
                    "focus": "give",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I gave home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "gave",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "priority",
            "title": "⑩ 優先度を置く",
            "pattern": "GIVE + priority",
            "transitivity": "他動詞中心",
            "structure": "S + give + O",
            "image": "自分から相手へ渡す・与える",
            "point": "GIVEの中心イメージ「自分から相手へ渡す・与える」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "We should give priority to existing clients.",
                    "ja": "既存顧客を優先すべきです。",
                    "focus": "give",
                    "object": "priority",
                    "jaFocus": "優先"
                },
                {
                    "en": "We give this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "give",
                    "object": "priority",
                    "jaFocus": "優先"
                },
                {
                    "en": "Please give this to the team.",
                    "ja": "これをチームに共有してください。",
                    "focus": "give",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I gave home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "gave",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        }
    ],
    "collocations": [
        {
            "phrase": "give feedback",
            "ja": "仕事でよく使う表現",
            "image": "GIVEのコアイメージから広がる重要表現。",
            "pattern": "give feedback",
            "examples": [
                {
                    "en": "Please give feedback in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often give feedback with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us give feedback clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "give",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give feedback at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s give feedback today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "give",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "give permission",
            "ja": "仕事でよく使う表現",
            "image": "GIVEのコアイメージから広がる重要表現。",
            "pattern": "give permission",
            "examples": [
                {
                    "en": "We need to give permission this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often give permission with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us give permission clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "give",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give permission at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s give permission today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "give",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "give a presentation",
            "ja": "仕事でよく使う表現",
            "image": "GIVEのコアイメージから広がる重要表現。",
            "pattern": "give a presentation",
            "examples": [
                {
                    "en": "Please give a presentation in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often give a presentation with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us give a presentation clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "give",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give a presentation at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s give a presentation today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "give",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "give advice",
            "ja": "仕事でよく使う表現",
            "image": "GIVEのコアイメージから広がる重要表現。",
            "pattern": "give advice",
            "examples": [
                {
                    "en": "We need to give advice this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often give advice with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us give advice clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "give",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give advice at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s give advice today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "give",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "give priority",
            "ja": "仕事でよく使う表現",
            "image": "GIVEのコアイメージから広がる重要表現。",
            "pattern": "give priority",
            "examples": [
                {
                    "en": "Please give priority in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often give priority with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us give priority clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "give",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give priority at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s give priority today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "give",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "give notice",
            "ja": "仕事でよく使う表現",
            "image": "GIVEのコアイメージから広がる重要表現。",
            "pattern": "give notice",
            "examples": [
                {
                    "en": "We need to give notice this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often give notice with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us give notice clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "give",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give notice at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s give notice today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "give",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "give support",
            "ja": "仕事でよく使う表現",
            "image": "GIVEのコアイメージから広がる重要表現。",
            "pattern": "give support",
            "examples": [
                {
                    "en": "Please give support in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often give support with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us give support clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "give",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give support at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s give support today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "give",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "give an example",
            "ja": "仕事でよく使う表現",
            "image": "GIVEのコアイメージから広がる重要表現。",
            "pattern": "give an example",
            "examples": [
                {
                    "en": "We need to give an example this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often give an example with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us give an example clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "give",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give an example at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s give an example today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "give",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "give a reason",
            "ja": "仕事でよく使う表現",
            "image": "GIVEのコアイメージから広がる重要表現。",
            "pattern": "give a reason",
            "examples": [
                {
                    "en": "Please give a reason in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often give a reason with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us give a reason clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "give",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give a reason at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s give a reason today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "give",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "give someone a call",
            "ja": "仕事でよく使う表現",
            "image": "GIVEのコアイメージから広がる重要表現。",
            "pattern": "give someone a call",
            "examples": [
                {
                    "en": "We need to give someone a call this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often give someone a call with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us give someone a call clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "give",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give someone a call at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s give someone a call today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "give",
                    "jaFocus": "使って"
                }
            ]
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "give feedback",
            "ja": "句動詞・重要表現",
            "image": "GIVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "give feedback",
            "examples": [
                {
                    "en": "We should give feedback before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we give feedback in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "give",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will give feedback with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give feedback on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "give",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can give feedback in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "give",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "give permission",
            "ja": "句動詞・重要表現",
            "image": "GIVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "give permission",
            "examples": [
                {
                    "en": "We should give permission before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we give permission in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "give",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will give permission with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give permission on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "give",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can give permission in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "give",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "give a presentation",
            "ja": "句動詞・重要表現",
            "image": "GIVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "give a presentation",
            "examples": [
                {
                    "en": "We should give a presentation before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we give a presentation in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "give",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will give a presentation with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give a presentation on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "give",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can give a presentation in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "give",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "give advice",
            "ja": "句動詞・重要表現",
            "image": "GIVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "give advice",
            "examples": [
                {
                    "en": "We should give advice before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we give advice in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "give",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will give advice with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give advice on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "give",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can give advice in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "give",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "give priority",
            "ja": "句動詞・重要表現",
            "image": "GIVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "give priority",
            "examples": [
                {
                    "en": "We should give priority before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we give priority in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "give",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will give priority with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give priority on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "give",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can give priority in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "give",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "give notice",
            "ja": "句動詞・重要表現",
            "image": "GIVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "give notice",
            "examples": [
                {
                    "en": "We should give notice before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we give notice in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "give",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will give notice with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give notice on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "give",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can give notice in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "give",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "give support",
            "ja": "句動詞・重要表現",
            "image": "GIVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "give support",
            "examples": [
                {
                    "en": "We should give support before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we give support in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "give",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will give support with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give support on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "give",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can give support in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "give",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "give an example",
            "ja": "句動詞・重要表現",
            "image": "GIVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "give an example",
            "examples": [
                {
                    "en": "We should give an example before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we give an example in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "give",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will give an example with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give an example on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "give",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can give an example in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "give",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "give a reason",
            "ja": "句動詞・重要表現",
            "image": "GIVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "give a reason",
            "examples": [
                {
                    "en": "We should give a reason before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we give a reason in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "give",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will give a reason with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give a reason on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "give",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can give a reason in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "give",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "give someone a call",
            "ja": "句動詞・重要表現",
            "image": "GIVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "give someone a call",
            "examples": [
                {
                    "en": "We should give someone a call before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we give someone a call in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "give",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will give someone a call with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "give",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I give someone a call on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "give",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can give someone a call in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "give",
                    "jaFocus": "使えます"
                }
            ]
        }
    ]
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
    "core": "自分のところに持っている・抱えている",
    "coreDetail": "HAVEは、物だけでなく、予定・問題・経験・権限・時間などを自分の領域に持っている動詞です。仕事では会議がある、情報がある、課題を抱える場面で使います。",
    "coreVisual": {
        "from": [
            "📅 予定",
            "📄 情報",
            "⚠️ 問題",
            "✅ 権限"
        ],
        "to": "自分の領域",
        "label": "持っている・抱えている"
    },
    "meanings": [
        {
            "id": "possess",
            "title": "① 持っている",
            "pattern": "HAVE + 名詞",
            "transitivity": "他動詞中心",
            "structure": "S + have + O",
            "image": "自分のところに持っている・抱えている",
            "point": "HAVEの中心イメージ「自分のところに持っている・抱えている」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "I have the latest price list.",
                    "ja": "最新版の価格表を持っています。",
                    "focus": "have",
                    "object": "the latest price list",
                    "jaFocus": "持っています"
                },
                {
                    "en": "We have the latest price list.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "have",
                    "object": "the latest price list",
                    "jaFocus": "持っています"
                },
                {
                    "en": "Please have this point in mind.",
                    "ja": "この点を意識してください。",
                    "focus": "have",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I had home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "had",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "meeting",
            "title": "② 予定がある",
            "pattern": "HAVE + meeting",
            "transitivity": "他動詞中心",
            "structure": "S + have + O",
            "image": "自分のところに持っている・抱えている",
            "point": "HAVEの中心イメージ「自分のところに持っている・抱えている」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "I have a meeting at three.",
                    "ja": "3時に会議があります。",
                    "focus": "have",
                    "object": "a meeting",
                    "jaFocus": "会議があります"
                },
                {
                    "en": "We have a meeting at three.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "have",
                    "object": "a meeting",
                    "jaFocus": "会議があります"
                },
                {
                    "en": "Please have this point in mind.",
                    "ja": "この点を意識してください。",
                    "focus": "have",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I had home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "had",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "problem",
            "title": "③ 問題がある",
            "pattern": "HAVE + problem",
            "transitivity": "他動詞中心",
            "structure": "S + have + O",
            "image": "自分のところに持っている・抱えている",
            "point": "HAVEの中心イメージ「自分のところに持っている・抱えている」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "We have a problem with the delivery date.",
                    "ja": "納期に問題があります。",
                    "focus": "have",
                    "object": "a problem",
                    "jaFocus": "問題があります"
                },
                {
                    "en": "We have this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "have",
                    "object": "a problem",
                    "jaFocus": "問題があります"
                },
                {
                    "en": "Please have this point in mind.",
                    "ja": "この点を意識してください。",
                    "focus": "have",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I had home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "had",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "question",
            "title": "④ 質問がある",
            "pattern": "HAVE + question",
            "transitivity": "他動詞中心",
            "structure": "S + have + O",
            "image": "自分のところに持っている・抱えている",
            "point": "HAVEの中心イメージ「自分のところに持っている・抱えている」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "I have a question about the specification.",
                    "ja": "仕様について質問があります。",
                    "focus": "have",
                    "object": "a question",
                    "jaFocus": "質問があります"
                },
                {
                    "en": "We have a question about the specification.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "have",
                    "object": "a question",
                    "jaFocus": "質問があります"
                },
                {
                    "en": "Please have this point in mind.",
                    "ja": "この点を意識してください。",
                    "focus": "have",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I had home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "had",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "experience",
            "title": "⑤ 経験がある",
            "pattern": "HAVE + experience",
            "transitivity": "他動詞中心",
            "structure": "S + have + O",
            "image": "自分のところに持っている・抱えている",
            "point": "HAVEの中心イメージ「自分のところに持っている・抱えている」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "She has experience in overseas sales.",
                    "ja": "彼女は海外営業の経験があります。",
                    "focus": "has",
                    "object": "experience",
                    "jaFocus": "経験があります"
                },
                {
                    "en": "We have this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "has",
                    "object": "experience",
                    "jaFocus": "経験があります"
                },
                {
                    "en": "Please have this point in mind.",
                    "ja": "この点を意識してください。",
                    "focus": "have",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I had home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "had",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "time",
            "title": "⑥ 時間がある",
            "pattern": "HAVE + time",
            "transitivity": "他動詞中心",
            "structure": "S + have + O",
            "image": "自分のところに持っている・抱えている",
            "point": "HAVEの中心イメージ「自分のところに持っている・抱えている」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "Do you have time to review this?",
                    "ja": "これを確認する時間はありますか。",
                    "focus": "have",
                    "object": "time",
                    "jaFocus": "時間はありますか"
                },
                {
                    "en": "We have this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "have",
                    "object": "time",
                    "jaFocus": "時間はありますか"
                },
                {
                    "en": "Please have this point in mind.",
                    "ja": "この点を意識してください。",
                    "focus": "have",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I had home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "had",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "responsibility",
            "title": "⑦ 責任がある",
            "pattern": "HAVE + responsibility",
            "transitivity": "他動詞中心",
            "structure": "S + have + O",
            "image": "自分のところに持っている・抱えている",
            "point": "HAVEの中心イメージ「自分のところに持っている・抱えている」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "I have responsibility for this account.",
                    "ja": "この顧客を担当しています。",
                    "focus": "have",
                    "object": "responsibility",
                    "jaFocus": "担当しています"
                },
                {
                    "en": "We have responsibility for this account.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "have",
                    "object": "responsibility",
                    "jaFocus": "担当しています"
                },
                {
                    "en": "Please have this point in mind.",
                    "ja": "この点を意識してください。",
                    "focus": "have",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I had home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "had",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "access",
            "title": "⑧ アクセス権がある",
            "pattern": "HAVE + access",
            "transitivity": "他動詞中心",
            "structure": "S + have + O",
            "image": "自分のところに持っている・抱えている",
            "point": "HAVEの中心イメージ「自分のところに持っている・抱えている」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "Do you have access to the shared folder?",
                    "ja": "共有フォルダへのアクセス権はありますか。",
                    "focus": "have",
                    "object": "access",
                    "jaFocus": "アクセス権はありますか"
                },
                {
                    "en": "We have this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "have",
                    "object": "access",
                    "jaFocus": "アクセス権はありますか"
                },
                {
                    "en": "Please have this point in mind.",
                    "ja": "この点を意識してください。",
                    "focus": "have",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I had home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "had",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "lunch",
            "title": "⑨ 食べる・取る",
            "pattern": "HAVE + meal",
            "transitivity": "他動詞中心",
            "structure": "S + have + O",
            "image": "自分のところに持っている・抱えている",
            "point": "HAVEの中心イメージ「自分のところに持っている・抱えている」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "Let’s have lunch after the meeting.",
                    "ja": "会議後に昼食を取りましょう。",
                    "focus": "have",
                    "object": "lunch",
                    "jaFocus": "昼食を取りましょう"
                },
                {
                    "en": "We have this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "have",
                    "object": "lunch",
                    "jaFocus": "昼食を取りましょう"
                },
                {
                    "en": "Please have this point in mind.",
                    "ja": "この点を意識してください。",
                    "focus": "have",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I had home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "had",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "done",
            "title": "⑩ 〜してもらう",
            "pattern": "HAVE + O + 過去分詞",
            "transitivity": "他動詞中心",
            "structure": "S + have + O + C",
            "image": "自分のところに持っている・抱えている",
            "point": "HAVEの中心イメージ「自分のところに持っている・抱えている」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "We had the sample delivered yesterday.",
                    "ja": "昨日サンプルを納品してもらいました。",
                    "focus": "had",
                    "object": "the sample",
                    "jaFocus": "納品してもらいました"
                },
                {
                    "en": "We have this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "had",
                    "object": "the sample",
                    "jaFocus": "納品してもらいました"
                },
                {
                    "en": "Please have this point in mind.",
                    "ja": "この点を意識してください。",
                    "focus": "have",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I had home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "had",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        }
    ],
    "collocations": [
        {
            "phrase": "have a meeting",
            "ja": "仕事でよく使う表現",
            "image": "HAVEのコアイメージから広がる重要表現。",
            "pattern": "have a meeting",
            "examples": [
                {
                    "en": "Please have a meeting in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often have a meeting with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us have a meeting clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "have",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have a meeting at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s have a meeting today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "have",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "have a question",
            "ja": "仕事でよく使う表現",
            "image": "HAVEのコアイメージから広がる重要表現。",
            "pattern": "have a question",
            "examples": [
                {
                    "en": "We need to have a question this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often have a question with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us have a question clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "have",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have a question at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s have a question today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "have",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "have a problem",
            "ja": "仕事でよく使う表現",
            "image": "HAVEのコアイメージから広がる重要表現。",
            "pattern": "have a problem",
            "examples": [
                {
                    "en": "Please have a problem in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often have a problem with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us have a problem clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "have",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have a problem at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s have a problem today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "have",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "have access",
            "ja": "仕事でよく使う表現",
            "image": "HAVEのコアイメージから広がる重要表現。",
            "pattern": "have access",
            "examples": [
                {
                    "en": "We need to have access this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often have access with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us have access clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "have",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have access at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s have access today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "have",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "have experience",
            "ja": "仕事でよく使う表現",
            "image": "HAVEのコアイメージから広がる重要表現。",
            "pattern": "have experience",
            "examples": [
                {
                    "en": "Please have experience in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often have experience with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us have experience clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "have",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have experience at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s have experience today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "have",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "have time",
            "ja": "仕事でよく使う表現",
            "image": "HAVEのコアイメージから広がる重要表現。",
            "pattern": "have time",
            "examples": [
                {
                    "en": "We need to have time this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often have time with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us have time clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "have",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have time at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s have time today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "have",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "have responsibility",
            "ja": "仕事でよく使う表現",
            "image": "HAVEのコアイメージから広がる重要表現。",
            "pattern": "have responsibility",
            "examples": [
                {
                    "en": "Please have responsibility in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often have responsibility with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us have responsibility clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "have",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have responsibility at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s have responsibility today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "have",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "have lunch",
            "ja": "仕事でよく使う表現",
            "image": "HAVEのコアイメージから広がる重要表現。",
            "pattern": "have lunch",
            "examples": [
                {
                    "en": "We need to have lunch this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often have lunch with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us have lunch clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "have",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have lunch at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s have lunch today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "have",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "have a look",
            "ja": "仕事でよく使う表現",
            "image": "HAVEのコアイメージから広がる重要表現。",
            "pattern": "have a look",
            "examples": [
                {
                    "en": "Please have a look in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often have a look with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us have a look clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "have",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have a look at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s have a look today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "have",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "have something done",
            "ja": "仕事でよく使う表現",
            "image": "HAVEのコアイメージから広がる重要表現。",
            "pattern": "have something done",
            "examples": [
                {
                    "en": "We need to have something done this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often have something done with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us have something done clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "have",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have something done at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s have something done today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "have",
                    "jaFocus": "使って"
                }
            ]
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "have a meeting",
            "ja": "句動詞・重要表現",
            "image": "HAVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "have a meeting",
            "examples": [
                {
                    "en": "We should have a meeting before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we have a meeting in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "have",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will have a meeting with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have a meeting on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "have",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can have a meeting in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "have",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "have a question",
            "ja": "句動詞・重要表現",
            "image": "HAVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "have a question",
            "examples": [
                {
                    "en": "We should have a question before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we have a question in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "have",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will have a question with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have a question on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "have",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can have a question in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "have",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "have a problem",
            "ja": "句動詞・重要表現",
            "image": "HAVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "have a problem",
            "examples": [
                {
                    "en": "We should have a problem before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we have a problem in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "have",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will have a problem with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have a problem on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "have",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can have a problem in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "have",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "have access",
            "ja": "句動詞・重要表現",
            "image": "HAVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "have access",
            "examples": [
                {
                    "en": "We should have access before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we have access in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "have",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will have access with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have access on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "have",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can have access in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "have",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "have experience",
            "ja": "句動詞・重要表現",
            "image": "HAVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "have experience",
            "examples": [
                {
                    "en": "We should have experience before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we have experience in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "have",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will have experience with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have experience on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "have",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can have experience in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "have",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "have time",
            "ja": "句動詞・重要表現",
            "image": "HAVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "have time",
            "examples": [
                {
                    "en": "We should have time before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we have time in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "have",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will have time with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have time on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "have",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can have time in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "have",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "have responsibility",
            "ja": "句動詞・重要表現",
            "image": "HAVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "have responsibility",
            "examples": [
                {
                    "en": "We should have responsibility before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we have responsibility in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "have",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will have responsibility with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have responsibility on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "have",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can have responsibility in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "have",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "have lunch",
            "ja": "句動詞・重要表現",
            "image": "HAVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "have lunch",
            "examples": [
                {
                    "en": "We should have lunch before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we have lunch in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "have",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will have lunch with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have lunch on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "have",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can have lunch in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "have",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "have a look",
            "ja": "句動詞・重要表現",
            "image": "HAVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "have a look",
            "examples": [
                {
                    "en": "We should have a look before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we have a look in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "have",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will have a look with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have a look on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "have",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can have a look in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "have",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "have something done",
            "ja": "句動詞・重要表現",
            "image": "HAVEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "have something done",
            "examples": [
                {
                    "en": "We should have something done before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we have something done in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "have",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will have something done with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "have",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I have something done on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "have",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can have something done in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "have",
                    "jaFocus": "使えます"
                }
            ]
        }
    ]
},
  {
    "id": "go",
    "rank": 6,
    "word": "GO",
    "ipa": "/ɡoʊ/",
    "kana": "ゴー",
    "syllable": "go",
    "transitivity": "自動詞中心",
    "importance": "★★★★★ 超重要",
    "core": "今いる場所・状態から離れて進む",
    "coreDetail": "GOは、場所へ進むだけでなく、計画・会議・仕事が進む、状態が変わるという流れにも使います。仕事では進行・移動・状態変化を表します。",
    "coreVisual": {
        "from": [
            "現在地",
            "今の状態",
            "開始点"
        ],
        "to": "先・目的地",
        "label": "今いる場所から進む"
    },
    "meanings": [
        {
            "id": "move",
            "title": "① 行く",
            "pattern": "GO + to 場所",
            "transitivity": "自動詞中心",
            "structure": "S + go + 副詞句",
            "image": "今いる場所・状態から離れて進む",
            "point": "GOの中心イメージ「今いる場所・状態から離れて進む」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "I went to the client’s office yesterday.",
                    "ja": "昨日、顧客の会社へ行きました。",
                    "focus": "went",
                    "jaFocus": "行きました"
                },
                {
                    "en": "We went to the client’s office yesterday.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "went",
                    "jaFocus": "行きました"
                },
                {
                    "en": "Please go with this option.",
                    "ja": "この案で進めてください。",
                    "focus": "go",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I went home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "went",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "attend",
            "title": "② 参加する",
            "pattern": "GO + to meeting/event",
            "transitivity": "自動詞中心",
            "structure": "S + go + 副詞句",
            "image": "今いる場所・状態から離れて進む",
            "point": "GOの中心イメージ「今いる場所・状態から離れて進む」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "I will go to the trade show next week.",
                    "ja": "来週展示会に行きます。",
                    "focus": "go",
                    "jaFocus": "行きます"
                },
                {
                    "en": "We will go to the trade show next week.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "行きます"
                },
                {
                    "en": "Please go with this option.",
                    "ja": "この案で進めてください。",
                    "focus": "go",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I went home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "went",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "proceed",
            "title": "③ 進む",
            "pattern": "GO + well/smoothly",
            "transitivity": "自動詞中心",
            "structure": "S + go + 副詞",
            "image": "今いる場所・状態から離れて進む",
            "point": "GOの中心イメージ「今いる場所・状態から離れて進む」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "The meeting went smoothly.",
                    "ja": "会議は順調に進みました。",
                    "focus": "went",
                    "jaFocus": "進みました"
                },
                {
                    "en": "We go this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "went",
                    "jaFocus": "進みました"
                },
                {
                    "en": "Please go with this option.",
                    "ja": "この案で進めてください。",
                    "focus": "go",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I went home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "went",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "change",
            "title": "④ 状態になる",
            "pattern": "GO + 形容詞",
            "transitivity": "自動詞中心",
            "structure": "S + V + C",
            "image": "今いる場所・状態から離れて進む",
            "point": "GOの中心イメージ「今いる場所・状態から離れて進む」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "The screen went dark during the demo.",
                    "ja": "デモ中に画面が暗くなりました。",
                    "focus": "went",
                    "jaFocus": "暗くなりました"
                },
                {
                    "en": "We go this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "went",
                    "jaFocus": "暗くなりました"
                },
                {
                    "en": "Please go with this option.",
                    "ja": "この案で進めてください。",
                    "focus": "go",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I went home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "went",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "fit",
            "title": "⑤ 合う・合致する",
            "pattern": "GO with + 名詞",
            "transitivity": "自動詞中心",
            "structure": "S + go with + O",
            "image": "今いる場所・状態から離れて進む",
            "point": "GOの中心イメージ「今いる場所・状態から離れて進む」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "This color goes well with the design.",
                    "ja": "この色はデザインによく合います。",
                    "focus": "goes",
                    "object": "with the design",
                    "jaFocus": "合います"
                },
                {
                    "en": "We go this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "goes",
                    "object": "with the design",
                    "jaFocus": "合います"
                },
                {
                    "en": "Please go with this option.",
                    "ja": "この案で進めてください。",
                    "focus": "go",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I went home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "went",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "be spent",
            "title": "⑥ 使われる",
            "pattern": "GO to + 用途",
            "transitivity": "自動詞中心",
            "structure": "S + go + 副詞句",
            "image": "今いる場所・状態から離れて進む",
            "point": "GOの中心イメージ「今いる場所・状態から離れて進む」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "Most of the budget went to materials.",
                    "ja": "予算の大半は材料費に使われました。",
                    "focus": "went",
                    "jaFocus": "使われました"
                },
                {
                    "en": "We go this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "went",
                    "jaFocus": "使われました"
                },
                {
                    "en": "Please go with this option.",
                    "ja": "この案で進めてください。",
                    "focus": "go",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I went home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "went",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "say",
            "title": "⑦ 〜と書いてある",
            "pattern": "GO like this",
            "transitivity": "自動詞中心",
            "structure": "S + go + 副詞",
            "image": "今いる場所・状態から離れて進む",
            "point": "GOの中心イメージ「今いる場所・状態から離れて進む」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "The instruction goes like this.",
                    "ja": "説明はこのように書かれています。",
                    "focus": "goes",
                    "jaFocus": "書かれています"
                },
                {
                    "en": "We go this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "goes",
                    "jaFocus": "書かれています"
                },
                {
                    "en": "Please go with this option.",
                    "ja": "この案で進めてください。",
                    "focus": "go",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I went home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "went",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "leave",
            "title": "⑧ 退社する・帰る",
            "pattern": "GO home",
            "transitivity": "自動詞中心",
            "structure": "S + go + 副詞",
            "image": "今いる場所・状態から離れて進む",
            "point": "GOの中心イメージ「今いる場所・状態から離れて進む」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "I went home after the client visit.",
                    "ja": "顧客訪問の後に帰宅しました。",
                    "focus": "went",
                    "jaFocus": "帰宅しました"
                },
                {
                    "en": "We went home after the client visit.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "went",
                    "jaFocus": "帰宅しました"
                },
                {
                    "en": "Please go with this option.",
                    "ja": "この案で進めてください。",
                    "focus": "go",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I went home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "went",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "operate",
            "title": "⑨ 動く",
            "pattern": "GO on/off",
            "transitivity": "自動詞中心",
            "structure": "S + go + 副詞",
            "image": "今いる場所・状態から離れて進む",
            "point": "GOの中心イメージ「今いる場所・状態から離れて進む」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "The power went off during the test.",
                    "ja": "試験中に電源が落ちました。",
                    "focus": "went off",
                    "jaFocus": "落ちました"
                },
                {
                    "en": "We go this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "went off",
                    "jaFocus": "落ちました"
                },
                {
                    "en": "Please go with this option.",
                    "ja": "この案で進めてください。",
                    "focus": "go",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I went home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "went",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "choose",
            "title": "⑩ 選ぶ",
            "pattern": "GO with + 名詞",
            "transitivity": "自動詞中心",
            "structure": "S + go with + O",
            "image": "今いる場所・状態から離れて進む",
            "point": "GOの中心イメージ「今いる場所・状態から離れて進む」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "We will go with the standard option.",
                    "ja": "標準案で進めます。",
                    "focus": "go with",
                    "object": "the standard option",
                    "jaFocus": "進めます"
                },
                {
                    "en": "We go this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "go with",
                    "object": "the standard option",
                    "jaFocus": "進めます"
                },
                {
                    "en": "Please go with this option.",
                    "ja": "この案で進めてください。",
                    "focus": "go",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I went home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "went",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        }
    ],
    "collocations": [
        {
            "phrase": "go well",
            "ja": "仕事でよく使う表現",
            "image": "GOのコアイメージから広がる重要表現。",
            "pattern": "go well",
            "examples": [
                {
                    "en": "Please go well in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often go well with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us go well clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "go",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go well at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s go well today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "go",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "go ahead",
            "ja": "仕事でよく使う表現",
            "image": "GOのコアイメージから広がる重要表現。",
            "pattern": "go ahead",
            "examples": [
                {
                    "en": "We need to go ahead this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often go ahead with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us go ahead clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "go",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go ahead at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s go ahead today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "go",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "go over",
            "ja": "仕事でよく使う表現",
            "image": "GOのコアイメージから広がる重要表現。",
            "pattern": "go over",
            "examples": [
                {
                    "en": "Please go over in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often go over with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us go over clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "go",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go over at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s go over today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "go",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "go through",
            "ja": "仕事でよく使う表現",
            "image": "GOのコアイメージから広がる重要表現。",
            "pattern": "go through",
            "examples": [
                {
                    "en": "We need to go through this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often go through with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us go through clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "go",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go through at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s go through today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "go",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "go with",
            "ja": "仕事でよく使う表現",
            "image": "GOのコアイメージから広がる重要表現。",
            "pattern": "go with",
            "examples": [
                {
                    "en": "Please go with in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often go with with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us go with clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "go",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go with at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s go with today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "go",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "go back",
            "ja": "仕事でよく使う表現",
            "image": "GOのコアイメージから広がる重要表現。",
            "pattern": "go back",
            "examples": [
                {
                    "en": "We need to go back this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often go back with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us go back clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "go",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go back at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s go back today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "go",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "go on",
            "ja": "仕事でよく使う表現",
            "image": "GOのコアイメージから広がる重要表現。",
            "pattern": "go on",
            "examples": [
                {
                    "en": "Please go on in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often go on with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us go on clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "go",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go on at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s go on today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "go",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "go off",
            "ja": "仕事でよく使う表現",
            "image": "GOのコアイメージから広がる重要表現。",
            "pattern": "go off",
            "examples": [
                {
                    "en": "We need to go off this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often go off with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us go off clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "go",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go off at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s go off today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "go",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "go out",
            "ja": "仕事でよく使う表現",
            "image": "GOのコアイメージから広がる重要表現。",
            "pattern": "go out",
            "examples": [
                {
                    "en": "Please go out in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often go out with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us go out clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "go",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go out at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s go out today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "go",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "go home",
            "ja": "仕事でよく使う表現",
            "image": "GOのコアイメージから広がる重要表現。",
            "pattern": "go home",
            "examples": [
                {
                    "en": "We need to go home this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often go home with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us go home clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "go",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go home at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s go home today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "go",
                    "jaFocus": "使って"
                }
            ]
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "go well",
            "ja": "句動詞・重要表現",
            "image": "GOと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "go well",
            "examples": [
                {
                    "en": "We should go well before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we go well in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "go",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will go well with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go well on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "go",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can go well in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "go",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "go ahead",
            "ja": "句動詞・重要表現",
            "image": "GOと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "go ahead",
            "examples": [
                {
                    "en": "We should go ahead before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we go ahead in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "go",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will go ahead with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go ahead on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "go",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can go ahead in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "go",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "go over",
            "ja": "句動詞・重要表現",
            "image": "GOと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "go over",
            "examples": [
                {
                    "en": "We should go over before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we go over in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "go",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will go over with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go over on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "go",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can go over in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "go",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "go through",
            "ja": "句動詞・重要表現",
            "image": "GOと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "go through",
            "examples": [
                {
                    "en": "We should go through before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we go through in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "go",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will go through with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go through on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "go",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can go through in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "go",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "go with",
            "ja": "句動詞・重要表現",
            "image": "GOと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "go with",
            "examples": [
                {
                    "en": "We should go with before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we go with in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "go",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will go with with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go with on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "go",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can go with in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "go",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "go back",
            "ja": "句動詞・重要表現",
            "image": "GOと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "go back",
            "examples": [
                {
                    "en": "We should go back before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we go back in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "go",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will go back with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go back on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "go",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can go back in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "go",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "go on",
            "ja": "句動詞・重要表現",
            "image": "GOと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "go on",
            "examples": [
                {
                    "en": "We should go on before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we go on in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "go",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will go on with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go on on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "go",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can go on in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "go",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "go off",
            "ja": "句動詞・重要表現",
            "image": "GOと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "go off",
            "examples": [
                {
                    "en": "We should go off before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we go off in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "go",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will go off with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go off on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "go",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can go off in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "go",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "go out",
            "ja": "句動詞・重要表現",
            "image": "GOと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "go out",
            "examples": [
                {
                    "en": "We should go out before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we go out in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "go",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will go out with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go out on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "go",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can go out in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "go",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "go home",
            "ja": "句動詞・重要表現",
            "image": "GOと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "go home",
            "examples": [
                {
                    "en": "We should go home before the deadline.",
                    "ja": "締切前にこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we go home in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "go",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will go home with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "go",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I go home on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "go",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can go home in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "go",
                    "jaFocus": "使えます"
                }
            ]
        }
    ]
},
  {
    "id": "come",
    "rank": 7,
    "word": "COME",
    "ipa": "/kʌm/",
    "kana": "カム",
    "syllable": "come",
    "transitivity": "自動詞中心",
    "importance": "★★★★★ 超重要",
    "core": "こちら側・話題の中心へ近づく",
    "coreDetail": "COMEは、相手・話し手・予定・結果などがこちら側に近づく動詞です。仕事では来社、連絡、結果、期限が近づく場面でよく使います。",
    "coreVisual": {
        "from": [
            "相手",
            "予定",
            "結果",
            "連絡"
        ],
        "to": "こちら側",
        "label": "こちらへ近づく"
    },
    "meanings": [
        {
            "id": "arrive",
            "title": "① 来る・到着する",
            "pattern": "COME + to 場所",
            "transitivity": "自動詞中心",
            "structure": "S + come + 副詞句",
            "image": "こちら側・話題の中心へ近づく",
            "point": "COMEの中心イメージ「こちら側・話題の中心へ近づく」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "The client came to our office today.",
                    "ja": "今日、顧客が弊社に来ました。",
                    "focus": "came",
                    "jaFocus": "来ました"
                },
                {
                    "en": "We come this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "came",
                    "jaFocus": "来ました"
                },
                {
                    "en": "Please come to the meeting on time.",
                    "ja": "時間通りに会議へ来てください。",
                    "focus": "come",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I came home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "came",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "be received",
            "title": "② 届く",
            "pattern": "COME + from 人/場所",
            "transitivity": "自動詞中心",
            "structure": "S + come + 副詞句",
            "image": "こちら側・話題の中心へ近づく",
            "point": "COMEの中心イメージ「こちら側・話題の中心へ近づく」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "The request came from the Singapore office.",
                    "ja": "その依頼はシンガポール本社から来ました。",
                    "focus": "came",
                    "jaFocus": "来ました"
                },
                {
                    "en": "We come this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "came",
                    "jaFocus": "来ました"
                },
                {
                    "en": "Please come to the meeting on time.",
                    "ja": "時間通りに会議へ来てください。",
                    "focus": "come",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I came home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "came",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "happen",
            "title": "③ 発生する",
            "pattern": "COME up",
            "transitivity": "自動詞中心",
            "structure": "S + come up",
            "image": "こちら側・話題の中心へ近づく",
            "point": "COMEの中心イメージ「こちら側・話題の中心へ近づく」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "A new issue came up during the meeting.",
                    "ja": "会議中に新しい課題が出ました。",
                    "focus": "came up",
                    "jaFocus": "出ました"
                },
                {
                    "en": "We come this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "came up",
                    "jaFocus": "出ました"
                },
                {
                    "en": "Please come to the meeting on time.",
                    "ja": "時間通りに会議へ来てください。",
                    "focus": "come",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I came home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "came",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "approach",
            "title": "④ 近づく",
            "pattern": "COME soon/next",
            "transitivity": "自動詞中心",
            "structure": "S + come + 副詞",
            "image": "こちら側・話題の中心へ近づく",
            "point": "COMEの中心イメージ「こちら側・話題の中心へ近づく」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "The deadline is coming soon.",
                    "ja": "締切が近づいています。",
                    "focus": "coming",
                    "jaFocus": "近づいています"
                },
                {
                    "en": "We come this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "coming",
                    "jaFocus": "近づいています"
                },
                {
                    "en": "Please come to the meeting on time.",
                    "ja": "時間通りに会議へ来てください。",
                    "focus": "come",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I came home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "came",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "result",
            "title": "⑤ 結果になる",
            "pattern": "COME to + 結論",
            "transitivity": "自動詞中心",
            "structure": "S + come to + O",
            "image": "こちら側・話題の中心へ近づく",
            "point": "COMEの中心イメージ「こちら側・話題の中心へ近づく」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "We came to the same conclusion.",
                    "ja": "同じ結論に至りました。",
                    "focus": "came",
                    "object": "to the same conclusion",
                    "jaFocus": "至りました"
                },
                {
                    "en": "We come this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "came",
                    "object": "to the same conclusion",
                    "jaFocus": "至りました"
                },
                {
                    "en": "Please come to the meeting on time.",
                    "ja": "時間通りに会議へ来てください。",
                    "focus": "come",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I came home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "came",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "be included",
            "title": "⑥ 付属する",
            "pattern": "COME with + 名詞",
            "transitivity": "自動詞中心",
            "structure": "S + come with + O",
            "image": "こちら側・話題の中心へ近づく",
            "point": "COMEの中心イメージ「こちら側・話題の中心へ近づく」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "The product comes with a warranty.",
                    "ja": "その製品には保証が付いています。",
                    "focus": "comes",
                    "object": "with a warranty",
                    "jaFocus": "付いています"
                },
                {
                    "en": "We come this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "comes",
                    "object": "with a warranty",
                    "jaFocus": "付いています"
                },
                {
                    "en": "Please come to the meeting on time.",
                    "ja": "時間通りに会議へ来てください。",
                    "focus": "come",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I came home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "came",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "rank",
            "title": "⑦ 順番になる",
            "pattern": "COME first/second",
            "transitivity": "自動詞中心",
            "structure": "S + come + C",
            "image": "こちら側・話題の中心へ近づく",
            "point": "COMEの中心イメージ「こちら側・話題の中心へ近づく」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "Quality comes first.",
                    "ja": "品質が最優先です。",
                    "focus": "comes",
                    "jaFocus": "最優先です"
                },
                {
                    "en": "We come this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "comes",
                    "jaFocus": "最優先です"
                },
                {
                    "en": "Please come to the meeting on time.",
                    "ja": "時間通りに会議へ来てください。",
                    "focus": "come",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I came home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "came",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "recover",
            "title": "⑧ 戻る",
            "pattern": "COME back",
            "transitivity": "自動詞中心",
            "structure": "S + come back",
            "image": "こちら側・話題の中心へ近づく",
            "point": "COMEの中心イメージ「こちら側・話題の中心へ近づく」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "The system came back online.",
                    "ja": "システムが復旧しました。",
                    "focus": "came back",
                    "jaFocus": "復旧しました"
                },
                {
                    "en": "We come this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "came back",
                    "jaFocus": "復旧しました"
                },
                {
                    "en": "Please come to the meeting on time.",
                    "ja": "時間通りに会議へ来てください。",
                    "focus": "come",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I came home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "came",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "visit",
            "title": "⑨ 訪問する",
            "pattern": "COME by",
            "transitivity": "自動詞中心",
            "structure": "S + come by",
            "image": "こちら側・話題の中心へ近づく",
            "point": "COMEの中心イメージ「こちら側・話題の中心へ近づく」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "I will come by your office tomorrow.",
                    "ja": "明日そちらのオフィスに伺います。",
                    "focus": "come by",
                    "jaFocus": "伺います"
                },
                {
                    "en": "We will come by your office tomorrow.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "come by",
                    "jaFocus": "伺います"
                },
                {
                    "en": "Please come to the meeting on time.",
                    "ja": "時間通りに会議へ来てください。",
                    "focus": "come",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I came home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "came",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        },
        {
            "id": "be available",
            "title": "⑩ 出る・発売される",
            "pattern": "COME out",
            "transitivity": "自動詞中心",
            "structure": "S + come out",
            "image": "こちら側・話題の中心へ近づく",
            "point": "COMEの中心イメージ「こちら側・話題の中心へ近づく」から考える。仕事でよく使う型として覚える。",
            "examples": [
                {
                    "en": "The new catalog comes out next month.",
                    "ja": "新しいカタログは来月出ます。",
                    "focus": "comes out",
                    "jaFocus": "出ます"
                },
                {
                    "en": "We come this in the project.",
                    "ja": "案件でこの表現を使います。",
                    "focus": "comes out",
                    "jaFocus": "出ます"
                },
                {
                    "en": "Please come to the meeting on time.",
                    "ja": "時間通りに会議へ来てください。",
                    "focus": "come",
                    "jaFocus": "ください"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I came home late.",
                    "ja": "帰宅が遅くなった。",
                    "focus": "came",
                    "jaFocus": "遅くなった"
                },
                {
                    "en": "This expression is useful in daily conversation.",
                    "ja": "この表現は日常会話でも役立つ。",
                    "focus": "is",
                    "jaFocus": "役立つ"
                }
            ]
        }
    ],
    "collocations": [
        {
            "phrase": "come up",
            "ja": "仕事でよく使う表現",
            "image": "COMEのコアイメージから広がる重要表現。",
            "pattern": "come up",
            "examples": [
                {
                    "en": "Please come up in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often come up with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us come up clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "come",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come up at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s come up today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "come",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "come in",
            "ja": "仕事でよく使う表現",
            "image": "COMEのコアイメージから広がる重要表現。",
            "pattern": "come in",
            "examples": [
                {
                    "en": "We need to come in this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often come in with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us come in clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "come",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come in at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s come in today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "come",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "come back",
            "ja": "仕事でよく使う表現",
            "image": "COMEのコアイメージから広がる重要表現。",
            "pattern": "come back",
            "examples": [
                {
                    "en": "Please come back in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often come back with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us come back clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "come",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come back at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s come back today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "come",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "come across",
            "ja": "仕事でよく使う表現",
            "image": "COMEのコアイメージから広がる重要表現。",
            "pattern": "come across",
            "examples": [
                {
                    "en": "We need to come across this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often come across with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us come across clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "come",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come across at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s come across today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "come",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "come with",
            "ja": "仕事でよく使う表現",
            "image": "COMEのコアイメージから広がる重要表現。",
            "pattern": "come with",
            "examples": [
                {
                    "en": "Please come with in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often come with with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us come with clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "come",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come with at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s come with today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "come",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "come to",
            "ja": "仕事でよく使う表現",
            "image": "COMEのコアイメージから広がる重要表現。",
            "pattern": "come to",
            "examples": [
                {
                    "en": "We need to come to this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often come to with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us come to clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "come",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come to at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s come to today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "come",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "come by",
            "ja": "仕事でよく使う表現",
            "image": "COMEのコアイメージから広がる重要表現。",
            "pattern": "come by",
            "examples": [
                {
                    "en": "Please come by in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often come by with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us come by clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "come",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come by at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s come by today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "come",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "come out",
            "ja": "仕事でよく使う表現",
            "image": "COMEのコアイメージから広がる重要表現。",
            "pattern": "come out",
            "examples": [
                {
                    "en": "We need to come out this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often come out with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us come out clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "come",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come out at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s come out today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "come",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "come from",
            "ja": "仕事でよく使う表現",
            "image": "COMEのコアイメージから広がる重要表現。",
            "pattern": "come from",
            "examples": [
                {
                    "en": "Please come from in the meeting.",
                    "ja": "会議でこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often come from with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us come from clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "come",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come from at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s come from today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "come",
                    "jaFocus": "使って"
                }
            ]
        },
        {
            "phrase": "come first",
            "ja": "仕事でよく使う表現",
            "image": "COMEのコアイメージから広がる重要表現。",
            "pattern": "come first",
            "examples": [
                {
                    "en": "We need to come first this week.",
                    "ja": "今週この表現を使う必要があります。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "I often come first with clients.",
                    "ja": "顧客対応でよく使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "This phrase helps us come first clearly.",
                    "ja": "この表現は明確に伝える助けになります。",
                    "focus": "come",
                    "jaFocus": "助けになります"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come first at home sometimes.",
                    "ja": "日常でも時々この表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                },
                {
                    "en": "Let’s come first today.",
                    "ja": "今日はこの表現を使ってみましょう。",
                    "focus": "come",
                    "jaFocus": "使って"
                }
            ]
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "come up",
            "ja": "句動詞・重要表現",
            "image": "COMEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "come up",
            "examples": [
                {
                    "en": "This issue may come up during the project.",
                    "ja": "案件中にこの表現が使われます。",
                    "focus": "come",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we come up in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "come",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will come up with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come up on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "come",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can come up in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "come",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "come in",
            "ja": "句動詞・重要表現",
            "image": "COMEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "come in",
            "examples": [
                {
                    "en": "This issue may come in during the project.",
                    "ja": "案件中にこの表現が使われます。",
                    "focus": "come",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we come in in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "come",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will come in with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come in on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "come",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can come in in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "come",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "come back",
            "ja": "句動詞・重要表現",
            "image": "COMEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "come back",
            "examples": [
                {
                    "en": "This issue may come back during the project.",
                    "ja": "案件中にこの表現が使われます。",
                    "focus": "come",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we come back in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "come",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will come back with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come back on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "come",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can come back in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "come",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "come across",
            "ja": "句動詞・重要表現",
            "image": "COMEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "come across",
            "examples": [
                {
                    "en": "This issue may come across during the project.",
                    "ja": "案件中にこの表現が使われます。",
                    "focus": "come",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we come across in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "come",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will come across with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come across on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "come",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can come across in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "come",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "come with",
            "ja": "句動詞・重要表現",
            "image": "COMEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "come with",
            "examples": [
                {
                    "en": "This issue may come with during the project.",
                    "ja": "案件中にこの表現が使われます。",
                    "focus": "come",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we come with in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "come",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will come with with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come with on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "come",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can come with in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "come",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "come to",
            "ja": "句動詞・重要表現",
            "image": "COMEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "come to",
            "examples": [
                {
                    "en": "This issue may come to during the project.",
                    "ja": "案件中にこの表現が使われます。",
                    "focus": "come",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we come to in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "come",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will come to with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come to on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "come",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can come to in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "come",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "come by",
            "ja": "句動詞・重要表現",
            "image": "COMEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "come by",
            "examples": [
                {
                    "en": "This issue may come by during the project.",
                    "ja": "案件中にこの表現が使われます。",
                    "focus": "come",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we come by in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "come",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will come by with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come by on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "come",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can come by in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "come",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "come out",
            "ja": "句動詞・重要表現",
            "image": "COMEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "come out",
            "examples": [
                {
                    "en": "This issue may come out during the project.",
                    "ja": "案件中にこの表現が使われます。",
                    "focus": "come",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we come out in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "come",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will come out with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come out on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "come",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can come out in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "come",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "come from",
            "ja": "句動詞・重要表現",
            "image": "COMEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "come from",
            "examples": [
                {
                    "en": "This issue may come from during the project.",
                    "ja": "案件中にこの表現が使われます。",
                    "focus": "come",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we come from in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "come",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will come from with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come from on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "come",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can come from in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "come",
                    "jaFocus": "使えます"
                }
            ]
        },
        {
            "phrase": "come first",
            "ja": "句動詞・重要表現",
            "image": "COMEと前置詞・副詞の組み合わせで意味が広がる。",
            "pattern": "come first",
            "examples": [
                {
                    "en": "This issue may come first during the project.",
                    "ja": "案件中にこの表現が使われます。",
                    "focus": "come",
                    "jaFocus": "使われます"
                },
                {
                    "en": "Can we come first in the next meeting?",
                    "ja": "次の会議でこの表現を使えますか。",
                    "focus": "come",
                    "jaFocus": "使えますか"
                },
                {
                    "en": "I will come first with the team.",
                    "ja": "チームとこの表現を使います。",
                    "focus": "come",
                    "jaFocus": "使います"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I come first on weekends.",
                    "ja": "週末にこの表現を使うことがあります。",
                    "focus": "come",
                    "jaFocus": "使う"
                },
                {
                    "en": "This can come first in daily life.",
                    "ja": "これは日常生活でも使えます。",
                    "focus": "come",
                    "jaFocus": "使えます"
                }
            ]
        }
    ]
},
  {
    "id": "put",
    "rank": 8,
    "word": "PUT",
    "ipa": "/pʊt/",
    "kana": "プット",
    "syllable": "put",
    "transitivity": "他動詞中心",
    "importance": "★★★★★ 超重要",
    "core": "あるものを、必要な場所・状態に置く",
    "coreDetail": "PUTは、物・情報・人・優先順位・負担などを、特定の場所や状態へ移す感覚で整理できます。仕事では配置・入力・優先・担当・議題化に強い動詞です。",
    "coreVisual": {
        "from": [
            "📄 資料",
            "💡 情報",
            "👤 担当",
            "⚠️ 負担",
            "📌 議題"
        ],
        "to": "場所・状態",
        "label": "対象 → 置く場所"
    },
    "meanings": [
        {
            "id": "place",
            "title": "① 置く・配置する",
            "pattern": "PUT + 名詞 + 場所",
            "transitivity": "他動詞",
            "structure": "S + put + O + 場所",
            "image": "物や情報を、必要な場所へ移す。",
            "point": "put は「どこに置くか」まで一緒に言うと使いやすい。",
            "examples": [
                {
                    "en": "Please put the documents on my desk.",
                    "ja": "資料を私の机に置いてください。",
                    "focus": "put",
                    "object": "the documents",
                    "jaFocus": "置いて"
                },
                {
                    "en": "I put the sample in the meeting room.",
                    "ja": "サンプルを会議室に置きました。",
                    "focus": "put",
                    "object": "the sample",
                    "jaFocus": "置きました"
                },
                {
                    "en": "We put the price list in the shared folder.",
                    "ja": "価格表を共有フォルダに入れました。",
                    "focus": "put",
                    "object": "the price list",
                    "jaFocus": "入れました"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I put my bag by the door.",
                    "ja": "バッグをドアのそばに置きました。",
                    "focus": "put",
                    "object": "my bag",
                    "jaFocus": "置きました"
                },
                {
                    "en": "She put the keys on the table.",
                    "ja": "彼女は鍵をテーブルに置きました。",
                    "focus": "put",
                    "object": "the keys",
                    "jaFocus": "置きました"
                }
            ]
        },
        {
            "id": "enter",
            "title": "② 入力する・記入する",
            "pattern": "PUT + 情報 + in/into",
            "transitivity": "他動詞",
            "structure": "S + put + O + 場所",
            "image": "数字や情報をフォームや資料の中に入れる。",
            "point": "名前・価格・数字などを入力する時にも put を使える。",
            "examples": [
                {
                    "en": "Please put your name here.",
                    "ja": "ここに名前を記入してください。",
                    "focus": "put",
                    "object": "your name",
                    "jaFocus": "記入して"
                },
                {
                    "en": "I put the latest figures into the report.",
                    "ja": "最新の数字を報告書に入れました。",
                    "focus": "put",
                    "object": "the latest figures",
                    "jaFocus": "入れました"
                },
                {
                    "en": "Can you put the deadline in the schedule?",
                    "ja": "納期をスケジュールに入れてもらえますか？",
                    "focus": "put",
                    "object": "the deadline",
                    "jaFocus": "入れて"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I put my address in the form.",
                    "ja": "フォームに住所を入力しました。",
                    "focus": "put",
                    "object": "my address",
                    "jaFocus": "入力しました"
                },
                {
                    "en": "Put your phone number here.",
                    "ja": "ここに電話番号を入力してください。",
                    "focus": "Put",
                    "object": "your phone number",
                    "jaFocus": "入力して"
                }
            ]
        },
        {
            "id": "assign",
            "title": "③ 担当にする・任せる",
            "pattern": "PUT + 人 + in charge",
            "transitivity": "他動詞",
            "structure": "S + put + O + C",
            "image": "人をある役割や立場に置く。",
            "point": "人を担当にする時は put someone in charge が便利。",
            "examples": [
                {
                    "en": "We put Tanaka in charge of this project.",
                    "ja": "田中さんをこの案件の担当にしました。",
                    "focus": "put",
                    "object": "Tanaka",
                    "jaFocus": "担当にしました"
                },
                {
                    "en": "The manager put me on the new account.",
                    "ja": "上司は私を新しい顧客担当にしました。",
                    "focus": "put",
                    "object": "me",
                    "jaFocus": "担当にしました"
                },
                {
                    "en": "They put the sales team in charge of follow-up.",
                    "ja": "営業チームをフォロー担当にしました。",
                    "focus": "put",
                    "object": "the sales team",
                    "jaFocus": "担当にしました"
                }
            ],
            "dailyExamples": [
                {
                    "en": "My parents put me in charge of dinner.",
                    "ja": "両親は私を夕食担当にしました。",
                    "focus": "put",
                    "object": "me",
                    "jaFocus": "担当にしました"
                },
                {
                    "en": "We put him in charge of the music.",
                    "ja": "彼を音楽担当にしました。",
                    "focus": "put",
                    "object": "him",
                    "jaFocus": "担当にしました"
                }
            ]
        },
        {
            "id": "express",
            "title": "④ 言葉にする",
            "pattern": "PUT + 内容 + into words",
            "transitivity": "他動詞",
            "structure": "S + put + O + into words",
            "image": "考えや気持ちを言葉という形に置き換える。",
            "point": "put it simply は「簡単に言うと」。会議や説明でよく使う。",
            "examples": [
                {
                    "en": "Let me put it simply.",
                    "ja": "簡単に言わせてください。",
                    "focus": "put",
                    "object": "it",
                    "jaFocus": "言わせて"
                },
                {
                    "en": "It is hard to put the issue into words.",
                    "ja": "その問題を言葉にするのは難しいです。",
                    "focus": "put",
                    "object": "the issue",
                    "jaFocus": "言葉にする"
                },
                {
                    "en": "Can you put your idea into one sentence?",
                    "ja": "あなたの案を一文で表せますか？",
                    "focus": "put",
                    "object": "your idea",
                    "jaFocus": "表せますか"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I cannot put my feelings into words.",
                    "ja": "自分の気持ちを言葉にできません。",
                    "focus": "put",
                    "object": "my feelings",
                    "jaFocus": "言葉にできません"
                },
                {
                    "en": "To put it simply, I am tired.",
                    "ja": "簡単に言うと、疲れています。",
                    "focus": "put",
                    "object": "it",
                    "jaFocus": "言う"
                }
            ]
        },
        {
            "id": "priority",
            "title": "⑤ 優先する",
            "pattern": "PUT + priority/focus + on",
            "transitivity": "他動詞",
            "structure": "S + put + O + on 名詞",
            "image": "注意や優先順位を特定の対象へ置く。",
            "point": "focus, priority, emphasis と相性が良い。",
            "examples": [
                {
                    "en": "We should put more focus on customer support.",
                    "ja": "顧客サポートにもっと重点を置くべきです。",
                    "focus": "put",
                    "object": "more focus",
                    "jaFocus": "重点を置く"
                },
                {
                    "en": "The company puts priority on quality.",
                    "ja": "会社は品質を優先しています。",
                    "focus": "puts",
                    "object": "priority",
                    "jaFocus": "優先して"
                },
                {
                    "en": "Let us put emphasis on delivery speed.",
                    "ja": "納期の速さを重視しましょう。",
                    "focus": "put",
                    "object": "emphasis",
                    "jaFocus": "重視しましょう"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I put more focus on my health.",
                    "ja": "健康にもっと重点を置いています。",
                    "focus": "put",
                    "object": "more focus",
                    "jaFocus": "重点を置いて"
                },
                {
                    "en": "She puts family first.",
                    "ja": "彼女は家族を最優先にしています。",
                    "focus": "puts",
                    "object": "family",
                    "jaFocus": "最優先にして"
                }
            ]
        },
        {
            "id": "pressure",
            "title": "⑥ 負担・圧力をかける",
            "pattern": "PUT + pressure/stress + on",
            "transitivity": "他動詞",
            "structure": "S + put + O + on 名詞",
            "image": "負担や圧力を相手や状況に置く。",
            "point": "ビジネスでは pressure on the team の形がよく使われる。",
            "examples": [
                {
                    "en": "The short deadline puts pressure on the team.",
                    "ja": "短い納期がチームに負担をかけています。",
                    "focus": "puts",
                    "object": "pressure",
                    "jaFocus": "負担をかけています"
                },
                {
                    "en": "This delay put stress on the client relationship.",
                    "ja": "この遅延は顧客との関係に負担をかけました。",
                    "focus": "put",
                    "object": "stress",
                    "jaFocus": "負担をかけました"
                },
                {
                    "en": "The price increase puts pressure on our budget.",
                    "ja": "値上げが予算を圧迫しています。",
                    "focus": "puts",
                    "object": "pressure",
                    "jaFocus": "圧迫しています"
                }
            ],
            "dailyExamples": [
                {
                    "en": "Too much work puts pressure on me.",
                    "ja": "仕事が多すぎると私に負担がかかります。",
                    "focus": "puts",
                    "object": "pressure",
                    "jaFocus": "負担がかかります"
                },
                {
                    "en": "That news put stress on my family.",
                    "ja": "その知らせは家族に負担をかけました。",
                    "focus": "put",
                    "object": "stress",
                    "jaFocus": "負担をかけました"
                }
            ]
        },
        {
            "id": "time",
            "title": "⑦ 時間・労力を注ぐ",
            "pattern": "PUT + time/effort + into",
            "transitivity": "他動詞",
            "structure": "S + put + O + into 名詞",
            "image": "時間や労力を目的の中へ入れる。",
            "point": "努力や時間を注ぐ時は put effort/time into が自然。",
            "examples": [
                {
                    "en": "We put a lot of effort into this proposal.",
                    "ja": "この提案書にかなり力を入れました。",
                    "focus": "put",
                    "object": "a lot of effort",
                    "jaFocus": "力を入れました"
                },
                {
                    "en": "I put extra time into the presentation.",
                    "ja": "プレゼンに追加で時間をかけました。",
                    "focus": "put",
                    "object": "extra time",
                    "jaFocus": "時間をかけました"
                },
                {
                    "en": "The team put resources into product training.",
                    "ja": "チームは製品研修にリソースを投入しました。",
                    "focus": "put",
                    "object": "resources",
                    "jaFocus": "投入しました"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I put time into learning English.",
                    "ja": "英語学習に時間をかけています。",
                    "focus": "put",
                    "object": "time",
                    "jaFocus": "時間をかけています"
                },
                {
                    "en": "She puts effort into cooking.",
                    "ja": "彼女は料理に力を入れています。",
                    "focus": "puts",
                    "object": "effort",
                    "jaFocus": "力を入れています"
                }
            ]
        },
        {
            "id": "money",
            "title": "⑧ お金・資源を投入する",
            "pattern": "PUT + money/resources + into",
            "transitivity": "他動詞",
            "structure": "S + put + O + into 名詞",
            "image": "資金や資源を事業・施策に入れる。",
            "point": "投資の意味でも put money into が使える。",
            "examples": [
                {
                    "en": "We put more budget into online marketing.",
                    "ja": "オンラインマーケティングに予算を増やしました。",
                    "focus": "put",
                    "object": "more budget",
                    "jaFocus": "予算を増やしました"
                },
                {
                    "en": "The company put money into a new system.",
                    "ja": "会社は新しいシステムに資金を投入しました。",
                    "focus": "put",
                    "object": "money",
                    "jaFocus": "投入しました"
                },
                {
                    "en": "They put resources into customer success.",
                    "ja": "彼らはカスタマーサクセスにリソースを投入しました。",
                    "focus": "put",
                    "object": "resources",
                    "jaFocus": "投入しました"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I put money into my savings account.",
                    "ja": "貯金口座にお金を入れました。",
                    "focus": "put",
                    "object": "money",
                    "jaFocus": "入れました"
                },
                {
                    "en": "He put money into his hobby.",
                    "ja": "彼は趣味にお金を使いました。",
                    "focus": "put",
                    "object": "money",
                    "jaFocus": "使いました"
                }
            ]
        },
        {
            "id": "state",
            "title": "⑨ 状態にする",
            "pattern": "PUT + 人/物 + in 状態",
            "transitivity": "他動詞",
            "structure": "S + put + O + in 状態",
            "image": "人や物をある状態に置く。",
            "point": "put someone in a difficult position のように抽象的な状態にも使える。",
            "examples": [
                {
                    "en": "The change put us in a difficult position.",
                    "ja": "その変更で私たちは難しい立場に置かれました。",
                    "focus": "put",
                    "object": "us",
                    "jaFocus": "置かれました"
                },
                {
                    "en": "The update put the project on track.",
                    "ja": "その更新でプロジェクトは軌道に乗りました。",
                    "focus": "put",
                    "object": "the project",
                    "jaFocus": "軌道に乗りました"
                },
                {
                    "en": "This result puts us ahead of schedule.",
                    "ja": "この結果で予定より進んでいます。",
                    "focus": "puts",
                    "object": "us",
                    "jaFocus": "進んでいます"
                }
            ],
            "dailyExamples": [
                {
                    "en": "The movie put me in a good mood.",
                    "ja": "その映画で良い気分になりました。",
                    "focus": "put",
                    "object": "me",
                    "jaFocus": "良い気分に"
                },
                {
                    "en": "Rain put us in trouble.",
                    "ja": "雨で困った状況になりました。",
                    "focus": "put",
                    "object": "us",
                    "jaFocus": "困った状況に"
                }
            ]
        },
        {
            "id": "agenda",
            "title": "⑩ 議題に入れる",
            "pattern": "PUT + item + on the agenda",
            "transitivity": "他動詞",
            "structure": "S + put + O + on the agenda",
            "image": "話すべき内容を会議の場に置く。",
            "point": "会議前後に非常に使いやすいビジネス表現。",
            "examples": [
                {
                    "en": "Can we put this issue on the agenda?",
                    "ja": "この件を議題に入れられますか？",
                    "focus": "put",
                    "object": "this issue",
                    "jaFocus": "議題に入れ"
                },
                {
                    "en": "I put the pricing topic on the agenda.",
                    "ja": "価格の件を議題に入れました。",
                    "focus": "put",
                    "object": "the pricing topic",
                    "jaFocus": "議題に入れました"
                },
                {
                    "en": "Please put the client request on the agenda.",
                    "ja": "顧客要望を議題に入れてください。",
                    "focus": "put",
                    "object": "the client request",
                    "jaFocus": "議題に入れて"
                }
            ],
            "dailyExamples": [
                {
                    "en": "Let us put the trip plan on the agenda.",
                    "ja": "旅行計画を話題に入れましょう。",
                    "focus": "put",
                    "object": "the trip plan",
                    "jaFocus": "話題に入れ"
                },
                {
                    "en": "I put dinner plans on the agenda.",
                    "ja": "夕食の予定を話題に入れました。",
                    "focus": "put",
                    "object": "dinner plans",
                    "jaFocus": "話題に入れました"
                }
            ]
        }
    ],
    "collocations": [
        {
            "phrase": "put pressure on",
            "ja": "〜に圧力をかける",
            "image": "pressure を相手や状況の上に置く。",
            "pattern": "put pressure on + 名詞",
            "examples": [
                {
                    "en": "The deadline puts pressure on everyone.",
                    "ja": "納期が全員にプレッシャーをかけています。",
                    "focus": "puts",
                    "object": "pressure",
                    "jaFocus": "プレッシャーをかけています"
                },
                {
                    "en": "We should not put pressure on the client.",
                    "ja": "顧客に圧力をかけるべきではありません。",
                    "focus": "put",
                    "object": "pressure",
                    "jaFocus": "圧力をかける"
                },
                {
                    "en": "This target puts pressure on sales.",
                    "ja": "この目標は営業に負担をかけます。",
                    "focus": "puts",
                    "object": "pressure",
                    "jaFocus": "負担をかけます"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put effort into",
            "ja": "〜に力を入れる",
            "image": "effort を活動に注ぐ。",
            "pattern": "put effort into + 名詞",
            "examples": [
                {
                    "en": "We put effort into quality control.",
                    "ja": "品質管理に力を入れています。",
                    "focus": "put",
                    "object": "effort",
                    "jaFocus": "力を入れて"
                },
                {
                    "en": "I put effort into the proposal.",
                    "ja": "提案書に力を入れました。",
                    "focus": "put",
                    "object": "effort",
                    "jaFocus": "力を入れました"
                },
                {
                    "en": "They put effort into training.",
                    "ja": "彼らは研修に力を入れています。",
                    "focus": "put",
                    "object": "effort",
                    "jaFocus": "力を入れて"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put priority on",
            "ja": "〜を優先する",
            "image": "priority を対象の上に置く。",
            "pattern": "put priority on + 名詞",
            "examples": [
                {
                    "en": "We put priority on safety.",
                    "ja": "安全を優先しています。",
                    "focus": "put",
                    "object": "priority",
                    "jaFocus": "優先して"
                },
                {
                    "en": "The team puts priority on speed.",
                    "ja": "チームはスピードを優先しています。",
                    "focus": "puts",
                    "object": "priority",
                    "jaFocus": "優先して"
                },
                {
                    "en": "Please put priority on this order.",
                    "ja": "この注文を優先してください。",
                    "focus": "put",
                    "object": "priority",
                    "jaFocus": "優先して"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put focus on",
            "ja": "〜に焦点を置く",
            "image": "focus を特定対象へ置く。",
            "pattern": "put focus on + 名詞",
            "examples": [
                {
                    "en": "Let us put focus on customer needs.",
                    "ja": "顧客ニーズに焦点を置きましょう。",
                    "focus": "put",
                    "object": "focus",
                    "jaFocus": "焦点を置き"
                },
                {
                    "en": "We put focus on cost reduction.",
                    "ja": "コスト削減に焦点を置いています。",
                    "focus": "put",
                    "object": "focus",
                    "jaFocus": "焦点を置いて"
                },
                {
                    "en": "The report puts focus on sales growth.",
                    "ja": "その報告書は売上成長に焦点を置いています。",
                    "focus": "puts",
                    "object": "focus",
                    "jaFocus": "焦点を置いて"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put in place",
            "ja": "導入する・整備する",
            "image": "仕組みを所定の位置に置く。",
            "pattern": "put + 名詞 + in place",
            "examples": [
                {
                    "en": "We put a new process in place.",
                    "ja": "新しい手順を導入しました。",
                    "focus": "put",
                    "object": "a new process",
                    "jaFocus": "導入しました"
                },
                {
                    "en": "The company put controls in place.",
                    "ja": "会社は管理体制を整備しました。",
                    "focus": "put",
                    "object": "controls",
                    "jaFocus": "整備しました"
                },
                {
                    "en": "We need to put a backup plan in place.",
                    "ja": "代替案を用意する必要があります。",
                    "focus": "put",
                    "object": "a backup plan",
                    "jaFocus": "用意する"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put into practice",
            "ja": "実践する",
            "image": "考えを実際の行動に入れる。",
            "pattern": "put + 名詞 + into practice",
            "examples": [
                {
                    "en": "We put the new policy into practice.",
                    "ja": "新しい方針を実行しました。",
                    "focus": "put",
                    "object": "the new policy",
                    "jaFocus": "実行しました"
                },
                {
                    "en": "Let us put this idea into practice.",
                    "ja": "この案を実践しましょう。",
                    "focus": "put",
                    "object": "this idea",
                    "jaFocus": "実践しましょう"
                },
                {
                    "en": "The team put the plan into practice.",
                    "ja": "チームは計画を実行しました。",
                    "focus": "put",
                    "object": "the plan",
                    "jaFocus": "実行しました"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put on hold",
            "ja": "保留にする",
            "image": "物事を hold の状態に置く。",
            "pattern": "put + 名詞 + on hold",
            "examples": [
                {
                    "en": "We put the project on hold.",
                    "ja": "その案件を保留にしました。",
                    "focus": "put",
                    "object": "the project",
                    "jaFocus": "保留にしました"
                },
                {
                    "en": "The client put the order on hold.",
                    "ja": "顧客は注文を保留にしました。",
                    "focus": "put",
                    "object": "the order",
                    "jaFocus": "保留にしました"
                },
                {
                    "en": "Can we put this topic on hold?",
                    "ja": "この話題をいったん保留にできますか？",
                    "focus": "put",
                    "object": "this topic",
                    "jaFocus": "保留に"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put at risk",
            "ja": "危険にさらす",
            "image": "risk の状態に置く。",
            "pattern": "put + 名詞 + at risk",
            "examples": [
                {
                    "en": "The delay put the delivery at risk.",
                    "ja": "遅延により納品が危うくなりました。",
                    "focus": "put",
                    "object": "the delivery",
                    "jaFocus": "危うく"
                },
                {
                    "en": "Poor communication puts trust at risk.",
                    "ja": "不十分な連絡は信頼を危うくします。",
                    "focus": "puts",
                    "object": "trust",
                    "jaFocus": "危うく"
                },
                {
                    "en": "This issue could put the contract at risk.",
                    "ja": "この問題で契約が危うくなる可能性があります。",
                    "focus": "put",
                    "object": "the contract",
                    "jaFocus": "危うく"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put in writing",
            "ja": "書面にする",
            "image": "内容を文字として置く。",
            "pattern": "put + 名詞 + in writing",
            "examples": [
                {
                    "en": "Please put the agreement in writing.",
                    "ja": "合意内容を書面にしてください。",
                    "focus": "put",
                    "object": "the agreement",
                    "jaFocus": "書面に"
                },
                {
                    "en": "We put the request in writing.",
                    "ja": "依頼内容を書面にしました。",
                    "focus": "put",
                    "object": "the request",
                    "jaFocus": "書面にしました"
                },
                {
                    "en": "Can you put that in writing?",
                    "ja": "それを書面にしてもらえますか？",
                    "focus": "put",
                    "object": "that",
                    "jaFocus": "書面に"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put simply",
            "ja": "簡単に言うと",
            "image": "考えを簡単な形に置く。",
            "pattern": "put simply",
            "examples": [
                {
                    "en": "Put simply, we need more time.",
                    "ja": "簡単に言うと、もっと時間が必要です。",
                    "focus": "Put",
                    "object": "simply",
                    "jaFocus": "簡単に言うと"
                },
                {
                    "en": "To put it simply, the price is too high.",
                    "ja": "簡単に言うと、価格が高すぎます。",
                    "focus": "put",
                    "object": "it",
                    "jaFocus": "簡単に言うと"
                },
                {
                    "en": "Put simply, the plan is not ready.",
                    "ja": "簡単に言うと、計画はまだ準備できていません。",
                    "focus": "Put",
                    "object": "simply",
                    "jaFocus": "簡単に言うと"
                }
            ],
            "dailyExamples": []
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "put off",
            "ja": "延期する",
            "image": "予定を先へ置く。",
            "pattern": "put off + 名詞",
            "examples": [
                {
                    "en": "We put off the meeting until Friday.",
                    "ja": "会議を金曜日まで延期しました。",
                    "focus": "put",
                    "object": "the meeting",
                    "jaFocus": "延期しました"
                },
                {
                    "en": "The client put off the decision.",
                    "ja": "顧客は決定を延期しました。",
                    "focus": "put",
                    "object": "the decision",
                    "jaFocus": "延期しました"
                },
                {
                    "en": "Let us not put off the issue.",
                    "ja": "この問題を先延ばしにしないようにしましょう。",
                    "focus": "put",
                    "object": "the issue",
                    "jaFocus": "先延ばしに"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put together",
            "ja": "まとめる・作成する",
            "image": "部品や情報を一つにまとめる。",
            "pattern": "put together + 名詞",
            "examples": [
                {
                    "en": "I put together the proposal.",
                    "ja": "提案書をまとめました。",
                    "focus": "put",
                    "object": "the proposal",
                    "jaFocus": "まとめました"
                },
                {
                    "en": "We put together a training plan.",
                    "ja": "研修計画を作成しました。",
                    "focus": "put",
                    "object": "a training plan",
                    "jaFocus": "作成しました"
                },
                {
                    "en": "Can you put together the data?",
                    "ja": "データをまとめてもらえますか？",
                    "focus": "put",
                    "object": "the data",
                    "jaFocus": "まとめて"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put forward",
            "ja": "提案する",
            "image": "案を前に出す。",
            "pattern": "put forward + 名詞",
            "examples": [
                {
                    "en": "She put forward a new idea.",
                    "ja": "彼女は新しい案を提案しました。",
                    "focus": "put",
                    "object": "a new idea",
                    "jaFocus": "提案しました"
                },
                {
                    "en": "We put forward a solution.",
                    "ja": "解決策を提案しました。",
                    "focus": "put",
                    "object": "a solution",
                    "jaFocus": "提案しました"
                },
                {
                    "en": "The team put forward several options.",
                    "ja": "チームはいくつかの選択肢を提示しました。",
                    "focus": "put",
                    "object": "several options",
                    "jaFocus": "提示しました"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put out",
            "ja": "発表する・出す",
            "image": "情報や製品を外へ出す。",
            "pattern": "put out + 名詞",
            "examples": [
                {
                    "en": "We put out a notice this morning.",
                    "ja": "今朝お知らせを出しました。",
                    "focus": "put",
                    "object": "a notice",
                    "jaFocus": "出しました"
                },
                {
                    "en": "The company put out a statement.",
                    "ja": "会社は声明を発表しました。",
                    "focus": "put",
                    "object": "a statement",
                    "jaFocus": "発表しました"
                },
                {
                    "en": "They put out the new catalog.",
                    "ja": "新しいカタログを出しました。",
                    "focus": "put",
                    "object": "the new catalog",
                    "jaFocus": "出しました"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put up with",
            "ja": "我慢する",
            "image": "嫌なものを持ちこたえる。",
            "pattern": "put up with + 名詞",
            "examples": [
                {
                    "en": "We cannot put up with repeated delays.",
                    "ja": "度重なる遅延は我慢できません。",
                    "focus": "put",
                    "object": "repeated delays",
                    "jaFocus": "我慢できません"
                },
                {
                    "en": "The team put up with a lot of pressure.",
                    "ja": "チームは大きなプレッシャーに耐えました。",
                    "focus": "put",
                    "object": "a lot of pressure",
                    "jaFocus": "耐えました"
                },
                {
                    "en": "I cannot put up with unclear instructions.",
                    "ja": "不明確な指示には我慢できません。",
                    "focus": "put",
                    "object": "unclear instructions",
                    "jaFocus": "我慢できません"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put down",
            "ja": "書き留める",
            "image": "情報を紙や画面に下ろす。",
            "pattern": "put down + 名詞",
            "examples": [
                {
                    "en": "Please put down your questions.",
                    "ja": "質問を書き留めてください。",
                    "focus": "put",
                    "object": "your questions",
                    "jaFocus": "書き留めて"
                },
                {
                    "en": "I put down the client requirements.",
                    "ja": "顧客要件を書き留めました。",
                    "focus": "put",
                    "object": "the client requirements",
                    "jaFocus": "書き留めました"
                },
                {
                    "en": "Can you put down the key points?",
                    "ja": "要点を書いてもらえますか？",
                    "focus": "put",
                    "object": "the key points",
                    "jaFocus": "書いて"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put back",
            "ja": "戻す",
            "image": "元の場所へ戻す。",
            "pattern": "put back + 名詞",
            "examples": [
                {
                    "en": "Please put the file back after use.",
                    "ja": "使用後はファイルを元に戻してください。",
                    "focus": "put",
                    "object": "the file",
                    "jaFocus": "戻して"
                },
                {
                    "en": "I put the sample back in storage.",
                    "ja": "サンプルを保管場所に戻しました。",
                    "focus": "put",
                    "object": "the sample",
                    "jaFocus": "戻しました"
                },
                {
                    "en": "Can you put the meeting back on the calendar?",
                    "ja": "会議をカレンダーに戻してもらえますか？",
                    "focus": "put",
                    "object": "the meeting",
                    "jaFocus": "戻して"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put away",
            "ja": "片付ける",
            "image": "使い終えたものを所定の場所へ置く。",
            "pattern": "put away + 名詞",
            "examples": [
                {
                    "en": "Please put away the equipment.",
                    "ja": "機材を片付けてください。",
                    "focus": "put",
                    "object": "the equipment",
                    "jaFocus": "片付けて"
                },
                {
                    "en": "We put away the samples after the meeting.",
                    "ja": "会議後にサンプルを片付けました。",
                    "focus": "put",
                    "object": "the samples",
                    "jaFocus": "片付けました"
                },
                {
                    "en": "I put away the documents.",
                    "ja": "書類を片付けました。",
                    "focus": "put",
                    "object": "the documents",
                    "jaFocus": "片付けました"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put through",
            "ja": "電話をつなぐ・処理する",
            "image": "相手や手続きを通す。",
            "pattern": "put through + 名詞",
            "examples": [
                {
                    "en": "Could you put me through to sales?",
                    "ja": "営業部につないでいただけますか？",
                    "focus": "put",
                    "object": "me",
                    "jaFocus": "つないで"
                },
                {
                    "en": "The system put the order through.",
                    "ja": "システムが注文を処理しました。",
                    "focus": "put",
                    "object": "the order",
                    "jaFocus": "処理しました"
                },
                {
                    "en": "Please put this request through today.",
                    "ja": "この依頼を今日処理してください。",
                    "focus": "put",
                    "object": "this request",
                    "jaFocus": "処理して"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "put aside",
            "ja": "取っておく・脇に置く",
            "image": "今は横に置く。",
            "pattern": "put aside + 名詞",
            "examples": [
                {
                    "en": "Let us put aside the budget issue for now.",
                    "ja": "予算の件はいったん脇に置きましょう。",
                    "focus": "put",
                    "object": "the budget issue",
                    "jaFocus": "脇に置き"
                },
                {
                    "en": "We put aside time for training.",
                    "ja": "研修の時間を確保しました。",
                    "focus": "put",
                    "object": "time",
                    "jaFocus": "確保しました"
                },
                {
                    "en": "I put aside the documents for review.",
                    "ja": "確認用に書類を取っておきました。",
                    "focus": "put",
                    "object": "the documents",
                    "jaFocus": "取っておきました"
                }
            ],
            "dailyExamples": []
        }
    ]
},
  {
    "id": "keep",
    "rank": 9,
    "word": "KEEP",
    "ipa": "/kiːp/",
    "kana": "キープ",
    "syllable": "keep",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "状態や関係を、そのまま保ち続ける",
    "coreDetail": "KEEPは、物・状態・関係・約束・情報を失わずに保つ感覚で整理できます。仕事では進捗管理・情報共有・品質維持・約束に使います。",
    "coreVisual": {
        "from": [
            "📅 予定",
            "📄 記録",
            "🤝 関係",
            "🔒 情報",
            "✅ 約束"
        ],
        "to": "保つ",
        "label": "失わずに維持"
    },
    "meanings": [
        {
            "id": "continue",
            "title": "① 続ける",
            "pattern": "KEEP + 動名詞",
            "transitivity": "他動詞",
            "structure": "S + keep + V-ing",
            "image": "動作を止めずに保つ。",
            "point": "keep checking, keep working のように継続を表す。",
            "examples": [
                {
                    "en": "Please keep checking the status.",
                    "ja": "状況確認を続けてください。",
                    "focus": "keep checking",
                    "jaFocus": "続けて"
                },
                {
                    "en": "We need to keep working on this issue.",
                    "ja": "この問題に取り組み続ける必要があります。",
                    "focus": "keep working",
                    "jaFocus": "続ける"
                },
                {
                    "en": "The team kept discussing the proposal.",
                    "ja": "チームは提案について議論を続けました。",
                    "focus": "kept discussing",
                    "jaFocus": "続けました"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "maintain",
            "title": "② 保つ",
            "pattern": "KEEP + 名詞/状態",
            "transitivity": "他動詞",
            "structure": "S + keep + O",
            "image": "状態や関係をそのまま保つ。",
            "point": "schedule, quality, records などとよく使う。",
            "examples": [
                {
                    "en": "We need to keep the schedule.",
                    "ja": "スケジュールを守る必要があります。",
                    "focus": "keep",
                    "object": "the schedule",
                    "jaFocus": "守る"
                },
                {
                    "en": "Please keep the quality high.",
                    "ja": "品質を高く保ってください。",
                    "focus": "keep",
                    "object": "the quality",
                    "jaFocus": "保って"
                },
                {
                    "en": "The team kept a good relationship with the client.",
                    "ja": "チームは顧客と良い関係を保ちました。",
                    "focus": "kept",
                    "object": "a good relationship",
                    "jaFocus": "保ちました"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "retain",
            "title": "③ 保管する・残す",
            "pattern": "KEEP + 名詞",
            "transitivity": "他動詞",
            "structure": "S + keep + O",
            "image": "必要なものを捨てずに持ち続ける。",
            "point": "copy, record, receipt などと相性が良い。",
            "examples": [
                {
                    "en": "Please keep a copy of the contract.",
                    "ja": "契約書のコピーを保管してください。",
                    "focus": "keep",
                    "object": "a copy",
                    "jaFocus": "保管して"
                },
                {
                    "en": "We keep records of all orders.",
                    "ja": "すべての注文記録を保管しています。",
                    "focus": "keep",
                    "object": "records",
                    "jaFocus": "保管して"
                },
                {
                    "en": "I kept the receipt for accounting.",
                    "ja": "経理用に領収書を保管しました。",
                    "focus": "kept",
                    "object": "the receipt",
                    "jaFocus": "保管しました"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "inform",
            "title": "④ 知らせ続ける",
            "pattern": "KEEP + 人 + informed",
            "transitivity": "他動詞",
            "structure": "S + keep + O + C",
            "image": "相手を情報がある状態に保つ。",
            "point": "keep me informed は仕事で非常によく使う。",
            "examples": [
                {
                    "en": "Please keep me informed.",
                    "ja": "引き続き共有してください。",
                    "focus": "keep",
                    "object": "me",
                    "jaFocus": "共有して"
                },
                {
                    "en": "I will keep the client updated.",
                    "ja": "顧客に随時共有します。",
                    "focus": "keep",
                    "object": "the client",
                    "jaFocus": "共有します"
                },
                {
                    "en": "Keep us posted on the progress.",
                    "ja": "進捗を随時知らせてください。",
                    "focus": "Keep",
                    "object": "us",
                    "jaFocus": "知らせて"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "prevent",
            "title": "⑤ 〜させない",
            "pattern": "KEEP + 人/物 + from V-ing",
            "transitivity": "他動詞",
            "structure": "S + keep + O + from V-ing",
            "image": "何かを起こらないように止めておく。",
            "point": "問題防止の説明で便利。",
            "examples": [
                {
                    "en": "Clear rules keep mistakes from happening.",
                    "ja": "明確なルールはミスの発生を防ぎます。",
                    "focus": "keep",
                    "object": "mistakes",
                    "jaFocus": "防ぎます"
                },
                {
                    "en": "The backup kept us from losing data.",
                    "ja": "バックアップのおかげでデータ消失を防げました。",
                    "focus": "kept",
                    "object": "us",
                    "jaFocus": "防げました"
                },
                {
                    "en": "Good communication keeps issues from growing.",
                    "ja": "良い連絡は問題の拡大を防ぎます。",
                    "focus": "keeps",
                    "object": "issues",
                    "jaFocus": "防ぎます"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "promise",
            "title": "⑥ 約束を守る",
            "pattern": "KEEP + promise/word",
            "transitivity": "他動詞",
            "structure": "S + keep + O",
            "image": "約束をそのまま保つ。",
            "point": "keep a promise, keep your word は信頼に関わる表現。",
            "examples": [
                {
                    "en": "We must keep our promise to the client.",
                    "ja": "顧客との約束を守らなければなりません。",
                    "focus": "keep",
                    "object": "our promise",
                    "jaFocus": "守ら"
                },
                {
                    "en": "He kept his word on the delivery date.",
                    "ja": "彼は納期について約束を守りました。",
                    "focus": "kept",
                    "object": "his word",
                    "jaFocus": "守りました"
                },
                {
                    "en": "The company kept its commitment.",
                    "ja": "会社は約束を守りました。",
                    "focus": "kept",
                    "object": "its commitment",
                    "jaFocus": "守りました"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "track",
            "title": "⑦ 把握する",
            "pattern": "KEEP TRACK OF + 名詞",
            "transitivity": "他動詞",
            "structure": "S + keep track of + O",
            "image": "数字や進捗を追い続ける。",
            "point": "進捗管理・在庫管理で重要。",
            "examples": [
                {
                    "en": "We need to keep track of inventory.",
                    "ja": "在庫を把握する必要があります。",
                    "focus": "keep",
                    "object": "inventory",
                    "jaFocus": "把握する"
                },
                {
                    "en": "Please keep track of your tasks.",
                    "ja": "自分のタスクを管理してください。",
                    "focus": "keep",
                    "object": "your tasks",
                    "jaFocus": "管理して"
                },
                {
                    "en": "I keep track of monthly sales.",
                    "ja": "月次売上を把握しています。",
                    "focus": "keep",
                    "object": "monthly sales",
                    "jaFocus": "把握して"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "hold",
            "title": "⑧ そのまま持っておく",
            "pattern": "KEEP + 名詞",
            "transitivity": "他動詞",
            "structure": "S + keep + O",
            "image": "今すぐ使わず、手元に残す。",
            "point": "資料・サンプル・在庫などに使う。",
            "examples": [
                {
                    "en": "Can we keep these samples for next week?",
                    "ja": "これらのサンプルを来週まで保管できますか？",
                    "focus": "keep",
                    "object": "these samples",
                    "jaFocus": "保管できますか"
                },
                {
                    "en": "Please keep the original document.",
                    "ja": "原本を保管してください。",
                    "focus": "keep",
                    "object": "the original document",
                    "jaFocus": "保管して"
                },
                {
                    "en": "We kept some stock for urgent orders.",
                    "ja": "緊急注文用に在庫を少し残しました。",
                    "focus": "kept",
                    "object": "some stock",
                    "jaFocus": "残しました"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "secret",
            "title": "⑨ 秘密にする",
            "pattern": "KEEP + 名詞 + confidential",
            "transitivity": "他動詞",
            "structure": "S + keep + O + C",
            "image": "情報を外に出さない状態に保つ。",
            "point": "confidential と一緒に使うと仕事で自然。",
            "examples": [
                {
                    "en": "Please keep this information confidential.",
                    "ja": "この情報は機密扱いにしてください。",
                    "focus": "keep",
                    "object": "this information",
                    "jaFocus": "機密扱いに"
                },
                {
                    "en": "We keep customer data secure.",
                    "ja": "顧客データを安全に保っています。",
                    "focus": "keep",
                    "object": "customer data",
                    "jaFocus": "安全に保って"
                },
                {
                    "en": "Keep the details internal for now.",
                    "ja": "詳細はいったん社内限りにしてください。",
                    "focus": "Keep",
                    "object": "the details",
                    "jaFocus": "社内限りに"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "stay",
            "title": "⑩ 〜のままでいる",
            "pattern": "KEEP + 形容詞",
            "transitivity": "他動詞",
            "structure": "S + keep + C",
            "image": "ある状態でい続ける。",
            "point": "keep calm, keep ready のように状態維持を表す。",
            "examples": [
                {
                    "en": "Please keep calm during the meeting.",
                    "ja": "会議中は落ち着いてください。",
                    "focus": "keep",
                    "object": "calm",
                    "jaFocus": "落ち着いて"
                },
                {
                    "en": "We should keep ready for changes.",
                    "ja": "変更に備えておくべきです。",
                    "focus": "keep",
                    "object": "ready",
                    "jaFocus": "備えて"
                },
                {
                    "en": "The system kept stable after the update.",
                    "ja": "更新後もシステムは安定していました。",
                    "focus": "kept",
                    "object": "stable",
                    "jaFocus": "安定して"
                }
            ],
            "dailyExamples": []
        }
    ],
    "collocations": [
        {
            "phrase": "keep in touch",
            "ja": "連絡を取り続ける",
            "image": "keep in touch は仕事でよく使うまとまり表現。",
            "pattern": "keep in touch with + 人",
            "examples": [
                {
                    "en": "Let us keep in touch after the meeting.",
                    "ja": "会議後も連絡を取り合いましょう。",
                    "focus": "keep in touch",
                    "jaFocus": "連絡を取り合い"
                },
                {
                    "en": "I keep in touch with the client.",
                    "ja": "顧客と連絡を取り続けています。",
                    "focus": "keep in touch",
                    "jaFocus": "連絡を取り続け"
                },
                {
                    "en": "Please keep in touch with the supplier.",
                    "ja": "仕入先と連絡を取り続けてください。",
                    "focus": "keep in touch",
                    "jaFocus": "連絡を取り続け"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep track of",
            "ja": "〜を把握する",
            "image": "keep track of は仕事でよく使うまとまり表現。",
            "pattern": "keep track of + 名詞",
            "examples": [
                {
                    "en": "Keep track of all tasks.",
                    "ja": "すべてのタスクを把握してください。",
                    "focus": "Keep track of",
                    "jaFocus": "把握して"
                },
                {
                    "en": "We keep track of expenses.",
                    "ja": "経費を把握しています。",
                    "focus": "keep track of",
                    "jaFocus": "把握して"
                },
                {
                    "en": "I keep track of deadlines.",
                    "ja": "締切を管理しています。",
                    "focus": "keep track of",
                    "jaFocus": "管理して"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep a record",
            "ja": "記録を残す",
            "image": "keep a record は仕事でよく使うまとまり表現。",
            "pattern": "keep a record of + 名詞",
            "examples": [
                {
                    "en": "Please keep a record of calls.",
                    "ja": "通話記録を残してください。",
                    "focus": "keep",
                    "object": "a record",
                    "jaFocus": "記録を残して"
                },
                {
                    "en": "We keep a record of complaints.",
                    "ja": "クレーム記録を残しています。",
                    "focus": "keep",
                    "object": "a record",
                    "jaFocus": "記録を残して"
                },
                {
                    "en": "I kept a record of changes.",
                    "ja": "変更記録を残しました。",
                    "focus": "kept",
                    "object": "a record",
                    "jaFocus": "記録を残しました"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep your word",
            "ja": "約束を守る",
            "image": "keep your word は仕事でよく使うまとまり表現。",
            "pattern": "keep + word",
            "examples": [
                {
                    "en": "We must keep our word.",
                    "ja": "約束を守らなければなりません。",
                    "focus": "keep",
                    "object": "our word",
                    "jaFocus": "守ら"
                },
                {
                    "en": "He kept his word.",
                    "ja": "彼は約束を守りました。",
                    "focus": "kept",
                    "object": "his word",
                    "jaFocus": "守りました"
                },
                {
                    "en": "Please keep your word on the deadline.",
                    "ja": "納期の約束を守ってください。",
                    "focus": "keep",
                    "object": "your word",
                    "jaFocus": "守って"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep an eye on",
            "ja": "〜に注意を払う",
            "image": "keep an eye on は仕事でよく使うまとまり表現。",
            "pattern": "keep an eye on + 名詞",
            "examples": [
                {
                    "en": "Please keep an eye on the budget.",
                    "ja": "予算に注意してください。",
                    "focus": "keep",
                    "object": "an eye",
                    "jaFocus": "注意して"
                },
                {
                    "en": "We keep an eye on quality.",
                    "ja": "品質に注意しています。",
                    "focus": "keep",
                    "object": "an eye",
                    "jaFocus": "注意して"
                },
                {
                    "en": "I will keep an eye on the schedule.",
                    "ja": "スケジュールを見ておきます。",
                    "focus": "keep",
                    "object": "an eye",
                    "jaFocus": "見て"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep up the good work",
            "ja": "その調子で頑張る",
            "image": "keep up the good work は仕事でよく使うまとまり表現。",
            "pattern": "keep up + 名詞",
            "examples": [
                {
                    "en": "Keep up the good work.",
                    "ja": "その調子で頑張ってください。",
                    "focus": "Keep up",
                    "object": "the good work",
                    "jaFocus": "頑張って"
                },
                {
                    "en": "The team kept up the good work.",
                    "ja": "チームは良い仕事を続けました。",
                    "focus": "kept up",
                    "object": "the good work",
                    "jaFocus": "続けました"
                },
                {
                    "en": "Please keep up this level of quality.",
                    "ja": "この品質レベルを維持してください。",
                    "focus": "keep up",
                    "object": "this level",
                    "jaFocus": "維持して"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep costs down",
            "ja": "コストを抑える",
            "image": "keep costs down は仕事でよく使うまとまり表現。",
            "pattern": "keep + O + down",
            "examples": [
                {
                    "en": "We need to keep costs down.",
                    "ja": "コストを抑える必要があります。",
                    "focus": "keep",
                    "object": "costs",
                    "jaFocus": "抑える"
                },
                {
                    "en": "This plan keeps costs down.",
                    "ja": "この計画はコストを抑えます。",
                    "focus": "keeps",
                    "object": "costs",
                    "jaFocus": "抑えます"
                },
                {
                    "en": "How can we keep costs down?",
                    "ja": "どうすればコストを抑えられますか？",
                    "focus": "keep",
                    "object": "costs",
                    "jaFocus": "抑え"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep data secure",
            "ja": "データを安全に保つ",
            "image": "keep data secure は仕事でよく使うまとまり表現。",
            "pattern": "keep + O + C",
            "examples": [
                {
                    "en": "We keep customer data secure.",
                    "ja": "顧客データを安全に保っています。",
                    "focus": "keep",
                    "object": "customer data",
                    "jaFocus": "安全に保って"
                },
                {
                    "en": "Please keep this file secure.",
                    "ja": "このファイルを安全に保管してください。",
                    "focus": "keep",
                    "object": "this file",
                    "jaFocus": "安全に"
                },
                {
                    "en": "The system keeps information secure.",
                    "ja": "システムは情報を安全に保ちます。",
                    "focus": "keeps",
                    "object": "information",
                    "jaFocus": "安全に保ちます"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep the schedule",
            "ja": "予定を守る",
            "image": "keep the schedule は仕事でよく使うまとまり表現。",
            "pattern": "keep + 名詞",
            "examples": [
                {
                    "en": "We need to keep the schedule.",
                    "ja": "予定を守る必要があります。",
                    "focus": "keep",
                    "object": "the schedule",
                    "jaFocus": "守る"
                },
                {
                    "en": "Can we keep the original schedule?",
                    "ja": "元の予定を維持できますか？",
                    "focus": "keep",
                    "object": "the original schedule",
                    "jaFocus": "維持"
                },
                {
                    "en": "The team kept the schedule.",
                    "ja": "チームは予定を守りました。",
                    "focus": "kept",
                    "object": "the schedule",
                    "jaFocus": "守りました"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep going",
            "ja": "続ける",
            "image": "keep going は仕事でよく使うまとまり表現。",
            "pattern": "keep going",
            "examples": [
                {
                    "en": "We need to keep going.",
                    "ja": "続ける必要があります。",
                    "focus": "keep going",
                    "jaFocus": "続ける"
                },
                {
                    "en": "The project kept going despite issues.",
                    "ja": "問題があっても案件は続きました。",
                    "focus": "kept going",
                    "jaFocus": "続きました"
                },
                {
                    "en": "Please keep going with the analysis.",
                    "ja": "分析を続けてください。",
                    "focus": "keep going",
                    "jaFocus": "続けて"
                }
            ],
            "dailyExamples": []
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "keep up with",
            "ja": "〜についていく",
            "image": "keep up with は仕事でよく使うまとまり表現。",
            "pattern": "keep up with + 名詞",
            "examples": [
                {
                    "en": "We need to keep up with market changes.",
                    "ja": "市場変化についていく必要があります。",
                    "focus": "keep up with",
                    "jaFocus": "ついていく"
                },
                {
                    "en": "Can you keep up with the schedule?",
                    "ja": "スケジュールについていけますか？",
                    "focus": "keep up with",
                    "jaFocus": "ついていけ"
                },
                {
                    "en": "The team kept up with demand.",
                    "ja": "チームは需要に対応し続けました。",
                    "focus": "kept up with",
                    "jaFocus": "対応し続け"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep on",
            "ja": "続ける",
            "image": "keep on は仕事でよく使うまとまり表現。",
            "pattern": "keep on + V-ing",
            "examples": [
                {
                    "en": "Please keep on checking the data.",
                    "ja": "データ確認を続けてください。",
                    "focus": "keep on checking",
                    "jaFocus": "続けて"
                },
                {
                    "en": "We kept on improving the process.",
                    "ja": "手順改善を続けました。",
                    "focus": "kept on improving",
                    "jaFocus": "続けました"
                },
                {
                    "en": "They keep on asking for updates.",
                    "ja": "彼らは更新確認を続けています。",
                    "focus": "keep on asking",
                    "jaFocus": "続けて"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep away from",
            "ja": "〜から離れる",
            "image": "keep away from は仕事でよく使うまとまり表現。",
            "pattern": "keep away from + 名詞",
            "examples": [
                {
                    "en": "Keep away from risky deals.",
                    "ja": "リスクの高い取引から離れてください。",
                    "focus": "Keep away from",
                    "jaFocus": "離れて"
                },
                {
                    "en": "We should keep away from unclear terms.",
                    "ja": "不明確な条件は避けるべきです。",
                    "focus": "keep away from",
                    "jaFocus": "避ける"
                },
                {
                    "en": "Keep visitors away from the equipment.",
                    "ja": "来客を機材から離してください。",
                    "focus": "Keep",
                    "object": "visitors",
                    "jaFocus": "離して"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep out",
            "ja": "入れない",
            "image": "keep out は仕事でよく使うまとまり表現。",
            "pattern": "keep + O + out",
            "examples": [
                {
                    "en": "Keep confidential files out of public folders.",
                    "ja": "機密ファイルを共有フォルダに入れないでください。",
                    "focus": "Keep",
                    "object": "confidential files",
                    "jaFocus": "入れないで"
                },
                {
                    "en": "The rule keeps errors out of reports.",
                    "ja": "そのルールは報告書のミスを防ぎます。",
                    "focus": "keeps",
                    "object": "errors",
                    "jaFocus": "防ぎます"
                },
                {
                    "en": "Keep unnecessary items out.",
                    "ja": "不要な項目は入れないでください。",
                    "focus": "Keep",
                    "object": "unnecessary items",
                    "jaFocus": "入れないで"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep back",
            "ja": "残しておく",
            "image": "keep back は仕事でよく使うまとまり表現。",
            "pattern": "keep back + 名詞",
            "examples": [
                {
                    "en": "We kept back some stock.",
                    "ja": "在庫を少し残しました。",
                    "focus": "kept back",
                    "object": "some stock",
                    "jaFocus": "残しました"
                },
                {
                    "en": "Please keep back one sample.",
                    "ja": "サンプルを一つ残してください。",
                    "focus": "keep back",
                    "object": "one sample",
                    "jaFocus": "残して"
                },
                {
                    "en": "The team kept back budget for support.",
                    "ja": "チームはサポート用に予算を残しました。",
                    "focus": "kept back",
                    "object": "budget",
                    "jaFocus": "残しました"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep from",
            "ja": "〜を防ぐ",
            "image": "keep from は仕事でよく使うまとまり表現。",
            "pattern": "keep + O + from V-ing",
            "examples": [
                {
                    "en": "This check keeps us from making mistakes.",
                    "ja": "この確認でミスを防げます。",
                    "focus": "keeps",
                    "object": "us",
                    "jaFocus": "防げます"
                },
                {
                    "en": "Backups keep us from losing data.",
                    "ja": "バックアップはデータ消失を防ぎます。",
                    "focus": "keep",
                    "object": "us",
                    "jaFocus": "防ぎます"
                },
                {
                    "en": "Clear notes keep confusion from happening.",
                    "ja": "明確なメモは混乱を防ぎます。",
                    "focus": "keep",
                    "object": "confusion",
                    "jaFocus": "防ぎます"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep together",
            "ja": "まとめておく",
            "image": "keep together は仕事でよく使うまとまり表現。",
            "pattern": "keep + O + together",
            "examples": [
                {
                    "en": "Please keep the documents together.",
                    "ja": "書類をまとめておいてください。",
                    "focus": "keep",
                    "object": "the documents",
                    "jaFocus": "まとめて"
                },
                {
                    "en": "We kept the project files together.",
                    "ja": "案件ファイルをまとめて保管しました。",
                    "focus": "kept",
                    "object": "the project files",
                    "jaFocus": "まとめて"
                },
                {
                    "en": "Keep all receipts together.",
                    "ja": "領収書をすべてまとめてください。",
                    "focus": "Keep",
                    "object": "all receipts",
                    "jaFocus": "まとめて"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep to",
            "ja": "〜を守る",
            "image": "keep to は仕事でよく使うまとまり表現。",
            "pattern": "keep to + 名詞",
            "examples": [
                {
                    "en": "Please keep to the agenda.",
                    "ja": "議題に沿って進めてください。",
                    "focus": "keep to",
                    "jaFocus": "沿って"
                },
                {
                    "en": "We kept to the budget.",
                    "ja": "予算内に収めました。",
                    "focus": "kept to",
                    "jaFocus": "収めました"
                },
                {
                    "en": "Can we keep to the original plan?",
                    "ja": "元の計画通りにできますか？",
                    "focus": "keep to",
                    "jaFocus": "計画通りに"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep at",
            "ja": "粘り強く続ける",
            "image": "keep at は仕事でよく使うまとまり表現。",
            "pattern": "keep at + 名詞",
            "examples": [
                {
                    "en": "Keep at the negotiation.",
                    "ja": "交渉を粘り強く続けてください。",
                    "focus": "Keep at",
                    "jaFocus": "続けて"
                },
                {
                    "en": "We kept at the issue until it was solved.",
                    "ja": "解決するまで問題に取り組み続けました。",
                    "focus": "kept at",
                    "jaFocus": "取り組み続け"
                },
                {
                    "en": "Please keep at the follow-up.",
                    "ja": "フォローを継続してください。",
                    "focus": "keep at",
                    "jaFocus": "継続して"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "keep off",
            "ja": "〜を避ける",
            "image": "keep off は仕事でよく使うまとまり表現。",
            "pattern": "keep off + 名詞",
            "examples": [
                {
                    "en": "Keep off sensitive topics in the meeting.",
                    "ja": "会議ではデリケートな話題を避けてください。",
                    "focus": "Keep off",
                    "jaFocus": "避けて"
                },
                {
                    "en": "We should keep off price discussions for now.",
                    "ja": "今は価格の議論を避けるべきです。",
                    "focus": "keep off",
                    "jaFocus": "避ける"
                },
                {
                    "en": "Keep off the restricted area.",
                    "ja": "立入禁止エリアに入らないでください。",
                    "focus": "Keep off",
                    "jaFocus": "入らないで"
                }
            ],
            "dailyExamples": []
        }
    ]
},
  {
    "id": "find",
    "rank": 10,
    "word": "FIND",
    "ipa": "/faɪnd/",
    "kana": "ファインド",
    "syllable": "find",
    "transitivity": "他動詞中心",
    "importance": "★★★★★ 超重要",
    "core": "探す・確認する中で、自分の中に答えが入る",
    "coreDetail": "FINDは、物や情報を見つけるだけでなく、経験や確認によって「分かる・判断する」まで広がります。仕事では問題発見・解決策・時間確保に使います。",
    "coreVisual": {
        "from": [
            "🔍 調査",
            "📊 データ",
            "❗ 問題",
            "💡 解決策",
            "⏰ 時間"
        ],
        "to": "発見・理解",
        "label": "探す → 見つかる"
    },
    "meanings": [
        {
            "id": "discover",
            "title": "① 見つける・発見する",
            "pattern": "FIND + 名詞",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "必要な情報や物を見つける。",
            "point": "find は探して見つけるだけでなく、仕事上の問題や答えにも使う。",
            "examples": [
                {
                    "en": "I found the latest file.",
                    "ja": "最新ファイルを見つけました。",
                    "focus": "found",
                    "object": "the latest file",
                    "jaFocus": "見つけました"
                },
                {
                    "en": "We found a problem in the data.",
                    "ja": "データに問題を見つけました。",
                    "focus": "found",
                    "object": "a problem",
                    "jaFocus": "見つけました"
                },
                {
                    "en": "The team found a better solution.",
                    "ja": "チームはより良い解決策を見つけました。",
                    "focus": "found",
                    "object": "a better solution",
                    "jaFocus": "見つけました"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "realize",
            "title": "② 気づく",
            "pattern": "FIND + that節",
            "transitivity": "他動詞",
            "structure": "S + find + that S V",
            "image": "調べたり経験した結果、気づく。",
            "point": "ビジネスでは「確認したところ〜と分かった」に使える。",
            "examples": [
                {
                    "en": "We found that the price was incorrect.",
                    "ja": "価格が間違っていることが分かりました。",
                    "focus": "found",
                    "jaFocus": "分かりました"
                },
                {
                    "en": "I found that the schedule was too tight.",
                    "ja": "スケジュールが厳しすぎると分かりました。",
                    "focus": "found",
                    "jaFocus": "分かりました"
                },
                {
                    "en": "They found that the system was stable.",
                    "ja": "システムが安定していると分かりました。",
                    "focus": "found",
                    "jaFocus": "分かりました"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "judge",
            "title": "③ 〜だと思う・感じる",
            "pattern": "FIND + O + 形容詞",
            "transitivity": "他動詞",
            "structure": "S + find + O + C",
            "image": "経験して判断する。",
            "point": "find it difficult/easy は仕事で便利。",
            "examples": [
                {
                    "en": "I find this process difficult.",
                    "ja": "この手順は難しいと感じます。",
                    "focus": "find",
                    "object": "this process",
                    "jaFocus": "感じます"
                },
                {
                    "en": "We found the tool useful.",
                    "ja": "そのツールは役に立つと分かりました。",
                    "focus": "found",
                    "object": "the tool",
                    "jaFocus": "分かりました"
                },
                {
                    "en": "The client found our proposal clear.",
                    "ja": "顧客は私たちの提案が分かりやすいと感じました。",
                    "focus": "found",
                    "object": "our proposal",
                    "jaFocus": "感じました"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "time",
            "title": "④ 時間を作る",
            "pattern": "FIND + time",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "忙しい中で時間を見つける。",
            "point": "find time to は社会人に必須。",
            "examples": [
                {
                    "en": "I need to find time to review it.",
                    "ja": "それを確認する時間を作る必要があります。",
                    "focus": "find",
                    "object": "time",
                    "jaFocus": "時間を作る"
                },
                {
                    "en": "Can you find time for a quick call?",
                    "ja": "短い電話の時間を取れますか？",
                    "focus": "find",
                    "object": "time",
                    "jaFocus": "時間を取れ"
                },
                {
                    "en": "We found time to discuss the issue.",
                    "ja": "その問題を話し合う時間を作りました。",
                    "focus": "found",
                    "object": "time",
                    "jaFocus": "時間を作りました"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "solution",
            "title": "⑤ 解決策を見つける",
            "pattern": "FIND + solution/way",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "問題への答えを見つける。",
            "point": "solution, way, approach と相性が良い。",
            "examples": [
                {
                    "en": "We need to find a solution quickly.",
                    "ja": "早急に解決策を見つける必要があります。",
                    "focus": "find",
                    "object": "a solution",
                    "jaFocus": "見つける"
                },
                {
                    "en": "The team found a way to reduce costs.",
                    "ja": "チームはコスト削減の方法を見つけました。",
                    "focus": "found",
                    "object": "a way",
                    "jaFocus": "見つけました"
                },
                {
                    "en": "Can we find another approach?",
                    "ja": "別の方法を見つけられますか？",
                    "focus": "find",
                    "object": "another approach",
                    "jaFocus": "見つけ"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "location",
            "title": "⑥ 場所を特定する",
            "pattern": "FIND + 場所/物",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "物や場所の位置を特定する。",
            "point": "lost file, meeting room などにも使う。",
            "examples": [
                {
                    "en": "I found the meeting room.",
                    "ja": "会議室を見つけました。",
                    "focus": "found",
                    "object": "the meeting room",
                    "jaFocus": "見つけました"
                },
                {
                    "en": "We found the missing document.",
                    "ja": "紛失した書類を見つけました。",
                    "focus": "found",
                    "object": "the missing document",
                    "jaFocus": "見つけました"
                },
                {
                    "en": "Can you find the original file?",
                    "ja": "元ファイルを見つけられますか？",
                    "focus": "find",
                    "object": "the original file",
                    "jaFocus": "見つけ"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "opportunity",
            "title": "⑦ 機会を見つける",
            "pattern": "FIND + opportunity",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "チャンスや余地を見つける。",
            "point": "営業・改善で使いやすい。",
            "examples": [
                {
                    "en": "We found an opportunity in the new market.",
                    "ja": "新市場で機会を見つけました。",
                    "focus": "found",
                    "object": "an opportunity",
                    "jaFocus": "見つけました"
                },
                {
                    "en": "I found a chance to speak with the client.",
                    "ja": "顧客と話す機会を見つけました。",
                    "focus": "found",
                    "object": "a chance",
                    "jaFocus": "見つけました"
                },
                {
                    "en": "The team found room for improvement.",
                    "ja": "チームは改善の余地を見つけました。",
                    "focus": "found",
                    "object": "room",
                    "jaFocus": "見つけました"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "information",
            "title": "⑧ 情報を探し当てる",
            "pattern": "FIND + information",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "必要な情報にたどり着く。",
            "point": "資料確認・調査で頻出。",
            "examples": [
                {
                    "en": "I found the information in the manual.",
                    "ja": "マニュアルでその情報を見つけました。",
                    "focus": "found",
                    "object": "the information",
                    "jaFocus": "見つけました"
                },
                {
                    "en": "We found the answer in the report.",
                    "ja": "報告書で答えを見つけました。",
                    "focus": "found",
                    "object": "the answer",
                    "jaFocus": "見つけました"
                },
                {
                    "en": "Can you find the product details?",
                    "ja": "製品詳細を探してもらえますか？",
                    "focus": "find",
                    "object": "the product details",
                    "jaFocus": "探して"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "result",
            "title": "⑨ 結果が分かる",
            "pattern": "FIND + result",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "調査や確認の結果を得る。",
            "point": "found a difference など数字比較で便利。",
            "examples": [
                {
                    "en": "We found a difference in the figures.",
                    "ja": "数字に差異があることが分かりました。",
                    "focus": "found",
                    "object": "a difference",
                    "jaFocus": "分かりました"
                },
                {
                    "en": "I found an error in the quotation.",
                    "ja": "見積書に誤りを見つけました。",
                    "focus": "found",
                    "object": "an error",
                    "jaFocus": "見つけました"
                },
                {
                    "en": "The test found no major issues.",
                    "ja": "テストでは大きな問題は見つかりませんでした。",
                    "focus": "found",
                    "object": "no major issues",
                    "jaFocus": "見つかりませんでした"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "experience",
            "title": "⑩ 経験して分かる",
            "pattern": "FIND + O + 形容詞",
            "transitivity": "他動詞",
            "structure": "S + find + O + C",
            "image": "実際に使って評価する。",
            "point": "useful, helpful, effective とよく使う。",
            "examples": [
                {
                    "en": "I found the training helpful.",
                    "ja": "その研修は役に立つと感じました。",
                    "focus": "found",
                    "object": "the training",
                    "jaFocus": "感じました"
                },
                {
                    "en": "We found the new system effective.",
                    "ja": "新システムは効果的だと分かりました。",
                    "focus": "found",
                    "object": "the new system",
                    "jaFocus": "分かりました"
                },
                {
                    "en": "The users found the app easy to use.",
                    "ja": "利用者はそのアプリを使いやすいと感じました。",
                    "focus": "found",
                    "object": "the app",
                    "jaFocus": "感じました"
                }
            ],
            "dailyExamples": []
        }
    ],
    "collocations": [
        {
            "phrase": "find a solution",
            "ja": "解決策を見つける",
            "image": "find a solution は社会人英語で使いやすい表現。",
            "pattern": "find a solution",
            "examples": [
                {
                    "en": "We find a solution this week.",
                    "ja": "今週、解決策を見つける。",
                    "focus": "find",
                    "jaFocus": "解決策を見つける"
                },
                {
                    "en": "I need to find a solution before the meeting.",
                    "ja": "会議前に解決策を見つける必要があります。",
                    "focus": "find",
                    "jaFocus": "解決策を見つける"
                },
                {
                    "en": "The team will find a solution for the project.",
                    "ja": "チームは案件で解決策を見つける予定です。",
                    "focus": "find",
                    "jaFocus": "解決策を見つける"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find a way",
            "ja": "方法を見つける",
            "image": "find a way は社会人英語で使いやすい表現。",
            "pattern": "find a way",
            "examples": [
                {
                    "en": "We find a way this week.",
                    "ja": "今週、方法を見つける。",
                    "focus": "find",
                    "jaFocus": "方法を見つける"
                },
                {
                    "en": "I need to find a way before the meeting.",
                    "ja": "会議前に方法を見つける必要があります。",
                    "focus": "find",
                    "jaFocus": "方法を見つける"
                },
                {
                    "en": "The team will find a way for the project.",
                    "ja": "チームは案件で方法を見つける予定です。",
                    "focus": "find",
                    "jaFocus": "方法を見つける"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find time",
            "ja": "時間を作る",
            "image": "find time は社会人英語で使いやすい表現。",
            "pattern": "find time",
            "examples": [
                {
                    "en": "We find time this week.",
                    "ja": "今週、時間を作る。",
                    "focus": "find",
                    "jaFocus": "時間を作る"
                },
                {
                    "en": "I need to find time before the meeting.",
                    "ja": "会議前に時間を作る必要があります。",
                    "focus": "find",
                    "jaFocus": "時間を作る"
                },
                {
                    "en": "The team will find time for the project.",
                    "ja": "チームは案件で時間を作る予定です。",
                    "focus": "find",
                    "jaFocus": "時間を作る"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find out",
            "ja": "調べて分かる",
            "image": "find out は社会人英語で使いやすい表現。",
            "pattern": "find out",
            "examples": [
                {
                    "en": "We find out this week.",
                    "ja": "今週、調べて分かる。",
                    "focus": "find",
                    "jaFocus": "調べて分かる"
                },
                {
                    "en": "I need to find out before the meeting.",
                    "ja": "会議前に調べて分かる必要があります。",
                    "focus": "find",
                    "jaFocus": "調べて分かる"
                },
                {
                    "en": "The team will find out for the project.",
                    "ja": "チームは案件で調べて分かる予定です。",
                    "focus": "find",
                    "jaFocus": "調べて分かる"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find a mistake",
            "ja": "ミスを見つける",
            "image": "find a mistake は社会人英語で使いやすい表現。",
            "pattern": "find a mistake",
            "examples": [
                {
                    "en": "We find a mistake this week.",
                    "ja": "今週、ミスを見つける。",
                    "focus": "find",
                    "jaFocus": "ミスを見つける"
                },
                {
                    "en": "I need to find a mistake before the meeting.",
                    "ja": "会議前にミスを見つける必要があります。",
                    "focus": "find",
                    "jaFocus": "ミスを見つける"
                },
                {
                    "en": "The team will find a mistake for the project.",
                    "ja": "チームは案件でミスを見つける予定です。",
                    "focus": "find",
                    "jaFocus": "ミスを見つける"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find information",
            "ja": "情報を見つける",
            "image": "find information は社会人英語で使いやすい表現。",
            "pattern": "find information",
            "examples": [
                {
                    "en": "We find information this week.",
                    "ja": "今週、情報を見つける。",
                    "focus": "find",
                    "jaFocus": "情報を見つける"
                },
                {
                    "en": "I need to find information before the meeting.",
                    "ja": "会議前に情報を見つける必要があります。",
                    "focus": "find",
                    "jaFocus": "情報を見つける"
                },
                {
                    "en": "The team will find information for the project.",
                    "ja": "チームは案件で情報を見つける予定です。",
                    "focus": "find",
                    "jaFocus": "情報を見つける"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find a chance",
            "ja": "機会を見つける",
            "image": "find a chance は社会人英語で使いやすい表現。",
            "pattern": "find a chance",
            "examples": [
                {
                    "en": "We find a chance this week.",
                    "ja": "今週、機会を見つける。",
                    "focus": "find",
                    "jaFocus": "機会を見つける"
                },
                {
                    "en": "I need to find a chance before the meeting.",
                    "ja": "会議前に機会を見つける必要があります。",
                    "focus": "find",
                    "jaFocus": "機会を見つける"
                },
                {
                    "en": "The team will find a chance for the project.",
                    "ja": "チームは案件で機会を見つける予定です。",
                    "focus": "find",
                    "jaFocus": "機会を見つける"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find it difficult",
            "ja": "難しいと感じる",
            "image": "find it difficult は社会人英語で使いやすい表現。",
            "pattern": "find it difficult",
            "examples": [
                {
                    "en": "We find it difficult this week.",
                    "ja": "今週、難しいと感じる。",
                    "focus": "find",
                    "jaFocus": "難しいと感じる"
                },
                {
                    "en": "I need to find it difficult before the meeting.",
                    "ja": "会議前に難しいと感じる必要があります。",
                    "focus": "find",
                    "jaFocus": "難しいと感じる"
                },
                {
                    "en": "The team will find it difficult for the project.",
                    "ja": "チームは案件で難しいと感じる予定です。",
                    "focus": "find",
                    "jaFocus": "難しいと感じる"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find useful",
            "ja": "役に立つと感じる",
            "image": "find useful は社会人英語で使いやすい表現。",
            "pattern": "find useful",
            "examples": [
                {
                    "en": "We find useful this week.",
                    "ja": "今週、役に立つと感じる。",
                    "focus": "find",
                    "jaFocus": "役に立つと感じる"
                },
                {
                    "en": "I need to find useful before the meeting.",
                    "ja": "会議前に役に立つと感じる必要があります。",
                    "focus": "find",
                    "jaFocus": "役に立つと感じる"
                },
                {
                    "en": "The team will find useful for the project.",
                    "ja": "チームは案件で役に立つと感じる予定です。",
                    "focus": "find",
                    "jaFocus": "役に立つと感じる"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find room for improvement",
            "ja": "改善の余地を見つける",
            "image": "find room for improvement は社会人英語で使いやすい表現。",
            "pattern": "find room for improvement",
            "examples": [
                {
                    "en": "We find room for improvement this week.",
                    "ja": "今週、改善の余地を見つける。",
                    "focus": "find",
                    "jaFocus": "改善の余地を見つける"
                },
                {
                    "en": "I need to find room for improvement before the meeting.",
                    "ja": "会議前に改善の余地を見つける必要があります。",
                    "focus": "find",
                    "jaFocus": "改善の余地を見つける"
                },
                {
                    "en": "The team will find room for improvement for the project.",
                    "ja": "チームは案件で改善の余地を見つける予定です。",
                    "focus": "find",
                    "jaFocus": "改善の余地を見つける"
                }
            ],
            "dailyExamples": []
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "find a solution",
            "ja": "解決策を見つける",
            "image": "find a solution は社会人英語で使いやすい表現。",
            "pattern": "find a solution",
            "examples": [
                {
                    "en": "We find a solution this week.",
                    "ja": "今週、解決策を見つける。",
                    "focus": "find",
                    "jaFocus": "解決策を見つける"
                },
                {
                    "en": "I need to find a solution before the meeting.",
                    "ja": "会議前に解決策を見つける必要があります。",
                    "focus": "find",
                    "jaFocus": "解決策を見つける"
                },
                {
                    "en": "The team will find a solution for the project.",
                    "ja": "チームは案件で解決策を見つける予定です。",
                    "focus": "find",
                    "jaFocus": "解決策を見つける"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find a way",
            "ja": "方法を見つける",
            "image": "find a way は社会人英語で使いやすい表現。",
            "pattern": "find a way",
            "examples": [
                {
                    "en": "We find a way this week.",
                    "ja": "今週、方法を見つける。",
                    "focus": "find",
                    "jaFocus": "方法を見つける"
                },
                {
                    "en": "I need to find a way before the meeting.",
                    "ja": "会議前に方法を見つける必要があります。",
                    "focus": "find",
                    "jaFocus": "方法を見つける"
                },
                {
                    "en": "The team will find a way for the project.",
                    "ja": "チームは案件で方法を見つける予定です。",
                    "focus": "find",
                    "jaFocus": "方法を見つける"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find time",
            "ja": "時間を作る",
            "image": "find time は社会人英語で使いやすい表現。",
            "pattern": "find time",
            "examples": [
                {
                    "en": "We find time this week.",
                    "ja": "今週、時間を作る。",
                    "focus": "find",
                    "jaFocus": "時間を作る"
                },
                {
                    "en": "I need to find time before the meeting.",
                    "ja": "会議前に時間を作る必要があります。",
                    "focus": "find",
                    "jaFocus": "時間を作る"
                },
                {
                    "en": "The team will find time for the project.",
                    "ja": "チームは案件で時間を作る予定です。",
                    "focus": "find",
                    "jaFocus": "時間を作る"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find out",
            "ja": "調べて分かる",
            "image": "find out は社会人英語で使いやすい表現。",
            "pattern": "find out",
            "examples": [
                {
                    "en": "We find out this week.",
                    "ja": "今週、調べて分かる。",
                    "focus": "find",
                    "jaFocus": "調べて分かる"
                },
                {
                    "en": "I need to find out before the meeting.",
                    "ja": "会議前に調べて分かる必要があります。",
                    "focus": "find",
                    "jaFocus": "調べて分かる"
                },
                {
                    "en": "The team will find out for the project.",
                    "ja": "チームは案件で調べて分かる予定です。",
                    "focus": "find",
                    "jaFocus": "調べて分かる"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find a mistake",
            "ja": "ミスを見つける",
            "image": "find a mistake は社会人英語で使いやすい表現。",
            "pattern": "find a mistake",
            "examples": [
                {
                    "en": "We find a mistake this week.",
                    "ja": "今週、ミスを見つける。",
                    "focus": "find",
                    "jaFocus": "ミスを見つける"
                },
                {
                    "en": "I need to find a mistake before the meeting.",
                    "ja": "会議前にミスを見つける必要があります。",
                    "focus": "find",
                    "jaFocus": "ミスを見つける"
                },
                {
                    "en": "The team will find a mistake for the project.",
                    "ja": "チームは案件でミスを見つける予定です。",
                    "focus": "find",
                    "jaFocus": "ミスを見つける"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find information",
            "ja": "情報を見つける",
            "image": "find information は社会人英語で使いやすい表現。",
            "pattern": "find information",
            "examples": [
                {
                    "en": "We find information this week.",
                    "ja": "今週、情報を見つける。",
                    "focus": "find",
                    "jaFocus": "情報を見つける"
                },
                {
                    "en": "I need to find information before the meeting.",
                    "ja": "会議前に情報を見つける必要があります。",
                    "focus": "find",
                    "jaFocus": "情報を見つける"
                },
                {
                    "en": "The team will find information for the project.",
                    "ja": "チームは案件で情報を見つける予定です。",
                    "focus": "find",
                    "jaFocus": "情報を見つける"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find a chance",
            "ja": "機会を見つける",
            "image": "find a chance は社会人英語で使いやすい表現。",
            "pattern": "find a chance",
            "examples": [
                {
                    "en": "We find a chance this week.",
                    "ja": "今週、機会を見つける。",
                    "focus": "find",
                    "jaFocus": "機会を見つける"
                },
                {
                    "en": "I need to find a chance before the meeting.",
                    "ja": "会議前に機会を見つける必要があります。",
                    "focus": "find",
                    "jaFocus": "機会を見つける"
                },
                {
                    "en": "The team will find a chance for the project.",
                    "ja": "チームは案件で機会を見つける予定です。",
                    "focus": "find",
                    "jaFocus": "機会を見つける"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find it difficult",
            "ja": "難しいと感じる",
            "image": "find it difficult は社会人英語で使いやすい表現。",
            "pattern": "find it difficult",
            "examples": [
                {
                    "en": "We find it difficult this week.",
                    "ja": "今週、難しいと感じる。",
                    "focus": "find",
                    "jaFocus": "難しいと感じる"
                },
                {
                    "en": "I need to find it difficult before the meeting.",
                    "ja": "会議前に難しいと感じる必要があります。",
                    "focus": "find",
                    "jaFocus": "難しいと感じる"
                },
                {
                    "en": "The team will find it difficult for the project.",
                    "ja": "チームは案件で難しいと感じる予定です。",
                    "focus": "find",
                    "jaFocus": "難しいと感じる"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find useful",
            "ja": "役に立つと感じる",
            "image": "find useful は社会人英語で使いやすい表現。",
            "pattern": "find useful",
            "examples": [
                {
                    "en": "We find useful this week.",
                    "ja": "今週、役に立つと感じる。",
                    "focus": "find",
                    "jaFocus": "役に立つと感じる"
                },
                {
                    "en": "I need to find useful before the meeting.",
                    "ja": "会議前に役に立つと感じる必要があります。",
                    "focus": "find",
                    "jaFocus": "役に立つと感じる"
                },
                {
                    "en": "The team will find useful for the project.",
                    "ja": "チームは案件で役に立つと感じる予定です。",
                    "focus": "find",
                    "jaFocus": "役に立つと感じる"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "find room for improvement",
            "ja": "改善の余地を見つける",
            "image": "find room for improvement は社会人英語で使いやすい表現。",
            "pattern": "find room for improvement",
            "examples": [
                {
                    "en": "We find room for improvement this week.",
                    "ja": "今週、改善の余地を見つける。",
                    "focus": "find",
                    "jaFocus": "改善の余地を見つける"
                },
                {
                    "en": "I need to find room for improvement before the meeting.",
                    "ja": "会議前に改善の余地を見つける必要があります。",
                    "focus": "find",
                    "jaFocus": "改善の余地を見つける"
                },
                {
                    "en": "The team will find room for improvement for the project.",
                    "ja": "チームは案件で改善の余地を見つける予定です。",
                    "focus": "find",
                    "jaFocus": "改善の余地を見つける"
                }
            ],
            "dailyExamples": []
        }
    ]
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
    "ipa": "/lʊk/",
    "kana": "ルック",
    "syllable": "look",
    "transitivity": "自動詞・他動詞",
    "importance": "★★★★★ 超重要",
    "core": "視線や注意を向けて、状態をとらえる",
    "coreDetail": "LOOKは、目や意識を向けて確認する・探す・印象を判断するイメージです。仕事では確認、調査、見直し、期待表現に強い動詞です。",
    "coreVisual": {
      "from": [
        "👀 視線",
        "📄 資料",
        "🔍 調査",
        "印象",
        "期待"
      ],
      "to": "自分・チーム",
      "label": "コアイメージ"
    },
    "meanings": [
      {
        "id": "check",
        "title": "1 確認する・見る",
        "pattern": "LOOK AT + 名詞",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + 副詞句",
        "image": "資料や状況に視線・注意を向ける。",
        "point": "資料や状況に視線・注意を向ける。",
        "examples": [
          {
            "en": "Please look at the latest quotation.",
            "ja": "最新の見積書を確認してください。",
            "focus": "look at",
            "object": "the latest quotation",
            "jaFocus": "確認して"
          },
          {
            "en": "I looked at the sales data this morning.",
            "ja": "今朝、売上データを確認しました。",
            "focus": "looked at",
            "object": "the sales data",
            "jaFocus": "確認しました"
          },
          {
            "en": "We need to look at the issue carefully.",
            "ja": "その問題を慎重に確認する必要があります。",
            "focus": "look at",
            "object": "the issue",
            "jaFocus": "確認する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I looked at the menu.",
            "ja": "メニューを見ました。",
            "focus": "looked at",
            "object": "the menu",
            "jaFocus": "見ました"
          },
          {
            "en": "Look at this photo.",
            "ja": "この写真を見て。",
            "focus": "Look at",
            "object": "this photo",
            "jaFocus": "見て"
          }
        ]
      },
      {
        "id": "seem",
        "title": "2 〜に見える",
        "pattern": "LOOK + 形容詞",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + C",
        "image": "見た印象を伝える。",
        "point": "見た印象を伝える。",
        "examples": [
          {
            "en": "The schedule looks tight.",
            "ja": "スケジュールは厳しそうです。",
            "focus": "looks",
            "object": "tight",
            "jaFocus": "厳しそう"
          },
          {
            "en": "The proposal looks good to me.",
            "ja": "その提案は良さそうに見えます。",
            "focus": "looks",
            "object": "good",
            "jaFocus": "良さそう"
          },
          {
            "en": "The data looks reliable.",
            "ja": "そのデータは信頼できそうです。",
            "focus": "looks",
            "object": "reliable",
            "jaFocus": "信頼できそう"
          }
        ],
        "dailyExamples": [
          {
            "en": "You look tired.",
            "ja": "疲れているように見えるよ。",
            "focus": "look",
            "object": "tired",
            "jaFocus": "見える"
          },
          {
            "en": "This cafe looks nice.",
            "ja": "このカフェは良さそうです。",
            "focus": "looks",
            "object": "nice",
            "jaFocus": "良さそう"
          }
        ]
      },
      {
        "id": "search",
        "title": "3 探す",
        "pattern": "LOOK FOR + 名詞",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + O",
        "image": "必要なものを探す。",
        "point": "必要なものを探す。",
        "examples": [
          {
            "en": "I am looking for the updated file.",
            "ja": "更新されたファイルを探しています。",
            "focus": "looking for",
            "object": "the updated file",
            "jaFocus": "探しています"
          },
          {
            "en": "We are looking for a better supplier.",
            "ja": "より良い仕入先を探しています。",
            "focus": "looking for",
            "object": "a better supplier",
            "jaFocus": "探しています"
          },
          {
            "en": "The client is looking for a cheaper option.",
            "ja": "顧客はより安い選択肢を探しています。",
            "focus": "looking for",
            "object": "a cheaper option",
            "jaFocus": "探しています"
          }
        ],
        "dailyExamples": [
          {
            "en": "I am looking for my keys.",
            "ja": "鍵を探しています。",
            "focus": "looking for",
            "object": "my keys",
            "jaFocus": "探しています"
          },
          {
            "en": "She is looking for a new apartment.",
            "ja": "彼女は新しい部屋を探しています。",
            "focus": "looking for",
            "object": "a new apartment",
            "jaFocus": "探しています"
          }
        ]
      },
      {
        "id": "consider",
        "title": "4 検討する",
        "pattern": "LOOK INTO + 名詞",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + O",
        "image": "詳しく調べる。",
        "point": "詳しく調べる。",
        "examples": [
          {
            "en": "We will look into the cause of the delay.",
            "ja": "遅延の原因を調査します。",
            "focus": "look into",
            "object": "the cause",
            "jaFocus": "調査します"
          },
          {
            "en": "Please look into the customer complaint.",
            "ja": "顧客クレームを調査してください。",
            "focus": "look into",
            "object": "the customer complaint",
            "jaFocus": "調査して"
          },
          {
            "en": "I will look into the pricing issue.",
            "ja": "価格の問題を確認します。",
            "focus": "look into",
            "object": "the pricing issue",
            "jaFocus": "確認します"
          }
        ],
        "dailyExamples": [
          {
            "en": "I looked into the restaurant.",
            "ja": "そのレストランを調べました。",
            "focus": "looked into",
            "object": "the restaurant",
            "jaFocus": "調べました"
          },
          {
            "en": "We looked into travel options.",
            "ja": "旅行の選択肢を調べました。",
            "focus": "looked into",
            "object": "travel options",
            "jaFocus": "調べました"
          }
        ]
      },
      {
        "id": "expect",
        "title": "5 期待する・待つ",
        "pattern": "LOOK FORWARD TO + 名詞/動名詞",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + O",
        "image": "前向きに待つ。",
        "point": "前向きに待つ。",
        "examples": [
          {
            "en": "I look forward to your reply.",
            "ja": "ご返信をお待ちしております。",
            "focus": "look forward to",
            "object": "your reply",
            "jaFocus": "お待ちしております"
          },
          {
            "en": "We look forward to working with you.",
            "ja": "一緒にお仕事できることを楽しみにしています。",
            "focus": "look forward to",
            "object": "working with you",
            "jaFocus": "楽しみにしています"
          },
          {
            "en": "I look forward to the meeting next week.",
            "ja": "来週の会議を楽しみにしています。",
            "focus": "look forward to",
            "object": "the meeting",
            "jaFocus": "楽しみにしています"
          }
        ],
        "dailyExamples": [
          {
            "en": "I look forward to the weekend.",
            "ja": "週末を楽しみにしています。",
            "focus": "look forward to",
            "object": "the weekend",
            "jaFocus": "楽しみにしています"
          },
          {
            "en": "We look forward to the trip.",
            "ja": "旅行を楽しみにしています。",
            "focus": "look forward to",
            "object": "the trip",
            "jaFocus": "楽しみにしています"
          }
        ]
      },
      {
        "id": "watch",
        "title": "6 注意して見る",
        "pattern": "LOOK OUT FOR + 名詞",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + O",
        "image": "注意して探す・気をつける。",
        "point": "注意して探す・気をつける。",
        "examples": [
          {
            "en": "Please look out for any errors.",
            "ja": "ミスがないか注意して見てください。",
            "focus": "look out for",
            "object": "any errors",
            "jaFocus": "注意して見て"
          },
          {
            "en": "We should look out for risks.",
            "ja": "リスクに注意するべきです。",
            "focus": "look out for",
            "object": "risks",
            "jaFocus": "注意する"
          },
          {
            "en": "Look out for changes in the schedule.",
            "ja": "スケジュール変更に注意してください。",
            "focus": "Look out for",
            "object": "changes",
            "jaFocus": "注意して"
          }
        ],
        "dailyExamples": [
          {
            "en": "Look out for cars.",
            "ja": "車に気をつけて。",
            "focus": "Look out for",
            "object": "cars",
            "jaFocus": "気をつけて"
          },
          {
            "en": "I looked out for signs.",
            "ja": "標識に注意しました。",
            "focus": "looked out for",
            "object": "signs",
            "jaFocus": "注意しました"
          }
        ]
      },
      {
        "id": "review",
        "title": "7 見直す",
        "pattern": "LOOK OVER + 名詞",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + O",
        "image": "ざっと確認する。",
        "point": "ざっと確認する。",
        "examples": [
          {
            "en": "Could you look over this document?",
            "ja": "この資料を見直してもらえますか？",
            "focus": "look over",
            "object": "this document",
            "jaFocus": "見直して"
          },
          {
            "en": "I looked over the contract.",
            "ja": "契約書をざっと確認しました。",
            "focus": "looked over",
            "object": "the contract",
            "jaFocus": "確認しました"
          },
          {
            "en": "Please look over the agenda before the meeting.",
            "ja": "会議前に議題を確認してください。",
            "focus": "look over",
            "object": "the agenda",
            "jaFocus": "確認して"
          }
        ],
        "dailyExamples": [
          {
            "en": "I looked over the recipe.",
            "ja": "レシピをざっと見ました。",
            "focus": "looked over",
            "object": "the recipe",
            "jaFocus": "見ました"
          },
          {
            "en": "Can you look over my message?",
            "ja": "私のメッセージを見てくれる？",
            "focus": "look over",
            "object": "my message",
            "jaFocus": "見て"
          }
        ]
      },
      {
        "id": "depend",
        "title": "8 頼る",
        "pattern": "LOOK TO + 人 + for 名詞",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + O",
        "image": "人に期待して頼る。",
        "point": "人に期待して頼る。",
        "examples": [
          {
            "en": "The team looks to you for direction.",
            "ja": "チームはあなたの方針を頼りにしています。",
            "focus": "looks to",
            "object": "you",
            "jaFocus": "頼りにしています"
          },
          {
            "en": "Clients look to us for reliable advice.",
            "ja": "顧客は信頼できる助言を私たちに期待しています。",
            "focus": "look to",
            "object": "us",
            "jaFocus": "期待しています"
          },
          {
            "en": "We look to the data for guidance.",
            "ja": "私たちは判断材料としてデータを頼ります。",
            "focus": "look to",
            "object": "the data",
            "jaFocus": "頼ります"
          }
        ],
        "dailyExamples": [
          {
            "en": "Children look to adults for support.",
            "ja": "子どもは大人の支えを頼ります。",
            "focus": "look to",
            "object": "adults",
            "jaFocus": "頼ります"
          },
          {
            "en": "I look to music for energy.",
            "ja": "音楽から元気をもらっています。",
            "focus": "look to",
            "object": "music",
            "jaFocus": "もらっています"
          }
        ]
      },
      {
        "id": "appear",
        "title": "9 表情・様子で示す",
        "pattern": "LOOK + like + 名詞/文",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + C",
        "image": "見た目から判断する。",
        "point": "見た目から判断する。",
        "examples": [
          {
            "en": "It looks like we need more time.",
            "ja": "もう少し時間が必要そうです。",
            "focus": "looks like",
            "object": "we need more time",
            "jaFocus": "必要そう"
          },
          {
            "en": "It looks like the client approved it.",
            "ja": "顧客が承認したようです。",
            "focus": "looks like",
            "object": "the client approved it",
            "jaFocus": "ようです"
          },
          {
            "en": "It looks like the file is missing.",
            "ja": "ファイルが見当たらないようです。",
            "focus": "looks like",
            "object": "the file is missing",
            "jaFocus": "ようです"
          }
        ],
        "dailyExamples": [
          {
            "en": "It looks like rain.",
            "ja": "雨が降りそうです。",
            "focus": "looks like",
            "object": "rain",
            "jaFocus": "降りそう"
          },
          {
            "en": "It looks like a nice place.",
            "ja": "良さそうな場所です。",
            "focus": "looks like",
            "object": "a nice place",
            "jaFocus": "良さそう"
          }
        ]
      },
      {
        "id": "face",
        "title": "10 向いている",
        "pattern": "LOOK + direction",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + 副詞句",
        "image": "方向を向く。",
        "point": "方向を向く。",
        "examples": [
          {
            "en": "The office looks out over the main street.",
            "ja": "そのオフィスは大通りに面しています。",
            "focus": "looks out over",
            "object": "the main street",
            "jaFocus": "面しています"
          },
          {
            "en": "The screen should look toward the audience.",
            "ja": "画面は聴衆の方へ向けるべきです。",
            "focus": "look toward",
            "object": "the audience",
            "jaFocus": "向ける"
          },
          {
            "en": "The camera looks directly at the entrance.",
            "ja": "カメラは入口を直接向いています。",
            "focus": "looks",
            "object": "the entrance",
            "jaFocus": "向いています"
          }
        ],
        "dailyExamples": [
          {
            "en": "The room looks south.",
            "ja": "その部屋は南向きです。",
            "focus": "looks",
            "object": "south",
            "jaFocus": "南向き"
          },
          {
            "en": "The balcony looks over the park.",
            "ja": "バルコニーは公園を見渡せます。",
            "focus": "looks over",
            "object": "the park",
            "jaFocus": "見渡せます"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "look at the data",
        "ja": "データを見る",
        "image": "look at the data のまとまりで仕事に使う表現。",
        "pattern": "look at + 名詞",
        "examples": [
          {
            "en": "We need to look at the data before the meeting.",
            "ja": "会議前に「データを見る」必要があります。",
            "focus": "look at the data",
            "jaFocus": "データを見る"
          },
          {
            "en": "Please look at the data by the end of the day.",
            "ja": "今日中に「データを見る」してください。",
            "focus": "look at the data",
            "jaFocus": "データを見る"
          },
          {
            "en": "I will look at the data and share the update.",
            "ja": "私が「データを見る」して進捗を共有します。",
            "focus": "look at the data",
            "jaFocus": "データを見る"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look at the data on weekends.",
            "ja": "週末によく「データを見る」します。",
            "focus": "look at the data",
            "jaFocus": "データを見る"
          },
          {
            "en": "It is useful to look at the data.",
            "ja": "「データを見る」できると便利です。",
            "focus": "look at the data",
            "jaFocus": "データを見る"
          }
        ]
      },
      {
        "phrase": "look for a solution",
        "ja": "解決策を探す",
        "image": "look for a solution のまとまりで仕事に使う表現。",
        "pattern": "look for + 名詞",
        "examples": [
          {
            "en": "We need to look for a solution before the meeting.",
            "ja": "会議前に「解決策を探す」必要があります。",
            "focus": "look for a solution",
            "jaFocus": "解決策を探す"
          },
          {
            "en": "Please look for a solution by the end of the day.",
            "ja": "今日中に「解決策を探す」してください。",
            "focus": "look for a solution",
            "jaFocus": "解決策を探す"
          },
          {
            "en": "I will look for a solution and share the update.",
            "ja": "私が「解決策を探す」して進捗を共有します。",
            "focus": "look for a solution",
            "jaFocus": "解決策を探す"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look for a solution on weekends.",
            "ja": "週末によく「解決策を探す」します。",
            "focus": "look for a solution",
            "jaFocus": "解決策を探す"
          },
          {
            "en": "It is useful to look for a solution.",
            "ja": "「解決策を探す」できると便利です。",
            "focus": "look for a solution",
            "jaFocus": "解決策を探す"
          }
        ]
      },
      {
        "phrase": "look into the issue",
        "ja": "問題を調査する",
        "image": "look into the issue のまとまりで仕事に使う表現。",
        "pattern": "look into + 名詞",
        "examples": [
          {
            "en": "We need to look into the issue before the meeting.",
            "ja": "会議前に「問題を調査する」必要があります。",
            "focus": "look into the issue",
            "jaFocus": "問題を調査する"
          },
          {
            "en": "Please look into the issue by the end of the day.",
            "ja": "今日中に「問題を調査する」してください。",
            "focus": "look into the issue",
            "jaFocus": "問題を調査する"
          },
          {
            "en": "I will look into the issue and share the update.",
            "ja": "私が「問題を調査する」して進捗を共有します。",
            "focus": "look into the issue",
            "jaFocus": "問題を調査する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look into the issue on weekends.",
            "ja": "週末によく「問題を調査する」します。",
            "focus": "look into the issue",
            "jaFocus": "問題を調査する"
          },
          {
            "en": "It is useful to look into the issue.",
            "ja": "「問題を調査する」できると便利です。",
            "focus": "look into the issue",
            "jaFocus": "問題を調査する"
          }
        ]
      },
      {
        "phrase": "look over the document",
        "ja": "資料を見直す",
        "image": "look over the document のまとまりで仕事に使う表現。",
        "pattern": "look over + 名詞",
        "examples": [
          {
            "en": "We need to look over the document before the meeting.",
            "ja": "会議前に「資料を見直す」必要があります。",
            "focus": "look over the document",
            "jaFocus": "資料を見直す"
          },
          {
            "en": "Please look over the document by the end of the day.",
            "ja": "今日中に「資料を見直す」してください。",
            "focus": "look over the document",
            "jaFocus": "資料を見直す"
          },
          {
            "en": "I will look over the document and share the update.",
            "ja": "私が「資料を見直す」して進捗を共有します。",
            "focus": "look over the document",
            "jaFocus": "資料を見直す"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look over the document on weekends.",
            "ja": "週末によく「資料を見直す」します。",
            "focus": "look over the document",
            "jaFocus": "資料を見直す"
          },
          {
            "en": "It is useful to look over the document.",
            "ja": "「資料を見直す」できると便利です。",
            "focus": "look over the document",
            "jaFocus": "資料を見直す"
          }
        ]
      },
      {
        "phrase": "look forward to your reply",
        "ja": "返信を待つ",
        "image": "look forward to your reply のまとまりで仕事に使う表現。",
        "pattern": "look forward to + 名詞",
        "examples": [
          {
            "en": "We need to look forward to your reply before the meeting.",
            "ja": "会議前に「返信を待つ」必要があります。",
            "focus": "look forward to your reply",
            "jaFocus": "返信を待つ"
          },
          {
            "en": "Please look forward to your reply by the end of the day.",
            "ja": "今日中に「返信を待つ」してください。",
            "focus": "look forward to your reply",
            "jaFocus": "返信を待つ"
          },
          {
            "en": "I will look forward to your reply and share the update.",
            "ja": "私が「返信を待つ」して進捗を共有します。",
            "focus": "look forward to your reply",
            "jaFocus": "返信を待つ"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look forward to your reply on weekends.",
            "ja": "週末によく「返信を待つ」します。",
            "focus": "look forward to your reply",
            "jaFocus": "返信を待つ"
          },
          {
            "en": "It is useful to look forward to your reply.",
            "ja": "「返信を待つ」できると便利です。",
            "focus": "look forward to your reply",
            "jaFocus": "返信を待つ"
          }
        ]
      },
      {
        "phrase": "look like a problem",
        "ja": "問題のように見える",
        "image": "look like a problem のまとまりで仕事に使う表現。",
        "pattern": "look like + 名詞",
        "examples": [
          {
            "en": "We need to look like a problem before the meeting.",
            "ja": "会議前に「問題のように見える」必要があります。",
            "focus": "look like a problem",
            "jaFocus": "問題のように見える"
          },
          {
            "en": "Please look like a problem by the end of the day.",
            "ja": "今日中に「問題のように見える」してください。",
            "focus": "look like a problem",
            "jaFocus": "問題のように見える"
          },
          {
            "en": "I will look like a problem and share the update.",
            "ja": "私が「問題のように見える」して進捗を共有します。",
            "focus": "look like a problem",
            "jaFocus": "問題のように見える"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look like a problem on weekends.",
            "ja": "週末によく「問題のように見える」します。",
            "focus": "look like a problem",
            "jaFocus": "問題のように見える"
          },
          {
            "en": "It is useful to look like a problem.",
            "ja": "「問題のように見える」できると便利です。",
            "focus": "look like a problem",
            "jaFocus": "問題のように見える"
          }
        ]
      },
      {
        "phrase": "look good",
        "ja": "良さそうに見える",
        "image": "look good のまとまりで仕事に使う表現。",
        "pattern": "look + 形容詞",
        "examples": [
          {
            "en": "We need to look good before the meeting.",
            "ja": "会議前に「良さそうに見える」必要があります。",
            "focus": "look good",
            "jaFocus": "良さそうに見える"
          },
          {
            "en": "Please look good by the end of the day.",
            "ja": "今日中に「良さそうに見える」してください。",
            "focus": "look good",
            "jaFocus": "良さそうに見える"
          },
          {
            "en": "I will look good and share the update.",
            "ja": "私が「良さそうに見える」して進捗を共有します。",
            "focus": "look good",
            "jaFocus": "良さそうに見える"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look good on weekends.",
            "ja": "週末によく「良さそうに見える」します。",
            "focus": "look good",
            "jaFocus": "良さそうに見える"
          },
          {
            "en": "It is useful to look good.",
            "ja": "「良さそうに見える」できると便利です。",
            "focus": "look good",
            "jaFocus": "良さそうに見える"
          }
        ]
      },
      {
        "phrase": "look busy",
        "ja": "忙しそうに見える",
        "image": "look busy のまとまりで仕事に使う表現。",
        "pattern": "look + 形容詞",
        "examples": [
          {
            "en": "We need to look busy before the meeting.",
            "ja": "会議前に「忙しそうに見える」必要があります。",
            "focus": "look busy",
            "jaFocus": "忙しそうに見える"
          },
          {
            "en": "Please look busy by the end of the day.",
            "ja": "今日中に「忙しそうに見える」してください。",
            "focus": "look busy",
            "jaFocus": "忙しそうに見える"
          },
          {
            "en": "I will look busy and share the update.",
            "ja": "私が「忙しそうに見える」して進捗を共有します。",
            "focus": "look busy",
            "jaFocus": "忙しそうに見える"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look busy on weekends.",
            "ja": "週末によく「忙しそうに見える」します。",
            "focus": "look busy",
            "jaFocus": "忙しそうに見える"
          },
          {
            "en": "It is useful to look busy.",
            "ja": "「忙しそうに見える」できると便利です。",
            "focus": "look busy",
            "jaFocus": "忙しそうに見える"
          }
        ]
      },
      {
        "phrase": "look closely",
        "ja": "詳しく見る",
        "image": "look closely のまとまりで仕事に使う表現。",
        "pattern": "look + 副詞",
        "examples": [
          {
            "en": "We need to look closely before the meeting.",
            "ja": "会議前に「詳しく見る」必要があります。",
            "focus": "look closely",
            "jaFocus": "詳しく見る"
          },
          {
            "en": "Please look closely by the end of the day.",
            "ja": "今日中に「詳しく見る」してください。",
            "focus": "look closely",
            "jaFocus": "詳しく見る"
          },
          {
            "en": "I will look closely and share the update.",
            "ja": "私が「詳しく見る」して進捗を共有します。",
            "focus": "look closely",
            "jaFocus": "詳しく見る"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look closely on weekends.",
            "ja": "週末によく「詳しく見る」します。",
            "focus": "look closely",
            "jaFocus": "詳しく見る"
          },
          {
            "en": "It is useful to look closely.",
            "ja": "「詳しく見る」できると便利です。",
            "focus": "look closely",
            "jaFocus": "詳しく見る"
          }
        ]
      },
      {
        "phrase": "look professional",
        "ja": "プロらしく見える",
        "image": "look professional のまとまりで仕事に使う表現。",
        "pattern": "look + 形容詞",
        "examples": [
          {
            "en": "We need to look professional before the meeting.",
            "ja": "会議前に「プロらしく見える」必要があります。",
            "focus": "look professional",
            "jaFocus": "プロらしく見える"
          },
          {
            "en": "Please look professional by the end of the day.",
            "ja": "今日中に「プロらしく見える」してください。",
            "focus": "look professional",
            "jaFocus": "プロらしく見える"
          },
          {
            "en": "I will look professional and share the update.",
            "ja": "私が「プロらしく見える」して進捗を共有します。",
            "focus": "look professional",
            "jaFocus": "プロらしく見える"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look professional on weekends.",
            "ja": "週末によく「プロらしく見える」します。",
            "focus": "look professional",
            "jaFocus": "プロらしく見える"
          },
          {
            "en": "It is useful to look professional.",
            "ja": "「プロらしく見える」できると便利です。",
            "focus": "look professional",
            "jaFocus": "プロらしく見える"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "look into",
        "ja": "調査する",
        "image": "look into のまとまりで仕事に使う表現。",
        "pattern": "look into + 名詞",
        "examples": [
          {
            "en": "We need to look into before the meeting.",
            "ja": "会議前に「調査する」必要があります。",
            "focus": "look into",
            "jaFocus": "調査する"
          },
          {
            "en": "Please look into by the end of the day.",
            "ja": "今日中に「調査する」してください。",
            "focus": "look into",
            "jaFocus": "調査する"
          },
          {
            "en": "I will look into and share the update.",
            "ja": "私が「調査する」して進捗を共有します。",
            "focus": "look into",
            "jaFocus": "調査する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look into on weekends.",
            "ja": "週末によく「調査する」します。",
            "focus": "look into",
            "jaFocus": "調査する"
          },
          {
            "en": "It is useful to look into.",
            "ja": "「調査する」できると便利です。",
            "focus": "look into",
            "jaFocus": "調査する"
          }
        ]
      },
      {
        "phrase": "look over",
        "ja": "ざっと確認する",
        "image": "look over のまとまりで仕事に使う表現。",
        "pattern": "look over + 名詞",
        "examples": [
          {
            "en": "We need to look over before the meeting.",
            "ja": "会議前に「ざっと確認する」必要があります。",
            "focus": "look over",
            "jaFocus": "ざっと確認する"
          },
          {
            "en": "Please look over by the end of the day.",
            "ja": "今日中に「ざっと確認する」してください。",
            "focus": "look over",
            "jaFocus": "ざっと確認する"
          },
          {
            "en": "I will look over and share the update.",
            "ja": "私が「ざっと確認する」して進捗を共有します。",
            "focus": "look over",
            "jaFocus": "ざっと確認する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look over on weekends.",
            "ja": "週末によく「ざっと確認する」します。",
            "focus": "look over",
            "jaFocus": "ざっと確認する"
          },
          {
            "en": "It is useful to look over.",
            "ja": "「ざっと確認する」できると便利です。",
            "focus": "look over",
            "jaFocus": "ざっと確認する"
          }
        ]
      },
      {
        "phrase": "look for",
        "ja": "探す",
        "image": "look for のまとまりで仕事に使う表現。",
        "pattern": "look for + 名詞",
        "examples": [
          {
            "en": "We need to look for before the meeting.",
            "ja": "会議前に「探す」必要があります。",
            "focus": "look for",
            "jaFocus": "探す"
          },
          {
            "en": "Please look for by the end of the day.",
            "ja": "今日中に「探す」してください。",
            "focus": "look for",
            "jaFocus": "探す"
          },
          {
            "en": "I will look for and share the update.",
            "ja": "私が「探す」して進捗を共有します。",
            "focus": "look for",
            "jaFocus": "探す"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look for on weekends.",
            "ja": "週末によく「探す」します。",
            "focus": "look for",
            "jaFocus": "探す"
          },
          {
            "en": "It is useful to look for.",
            "ja": "「探す」できると便利です。",
            "focus": "look for",
            "jaFocus": "探す"
          }
        ]
      },
      {
        "phrase": "look at",
        "ja": "見る・確認する",
        "image": "look at のまとまりで仕事に使う表現。",
        "pattern": "look at + 名詞",
        "examples": [
          {
            "en": "We need to look at before the meeting.",
            "ja": "会議前に「見る・確認する」必要があります。",
            "focus": "look at",
            "jaFocus": "見る・確認する"
          },
          {
            "en": "Please look at by the end of the day.",
            "ja": "今日中に「見る・確認する」してください。",
            "focus": "look at",
            "jaFocus": "見る・確認する"
          },
          {
            "en": "I will look at and share the update.",
            "ja": "私が「見る・確認する」して進捗を共有します。",
            "focus": "look at",
            "jaFocus": "見る・確認する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look at on weekends.",
            "ja": "週末によく「見る・確認する」します。",
            "focus": "look at",
            "jaFocus": "見る・確認する"
          },
          {
            "en": "It is useful to look at.",
            "ja": "「見る・確認する」できると便利です。",
            "focus": "look at",
            "jaFocus": "見る・確認する"
          }
        ]
      },
      {
        "phrase": "look up",
        "ja": "調べる",
        "image": "look up のまとまりで仕事に使う表現。",
        "pattern": "look up + 名詞",
        "examples": [
          {
            "en": "We need to look up before the meeting.",
            "ja": "会議前に「調べる」必要があります。",
            "focus": "look up",
            "jaFocus": "調べる"
          },
          {
            "en": "Please look up by the end of the day.",
            "ja": "今日中に「調べる」してください。",
            "focus": "look up",
            "jaFocus": "調べる"
          },
          {
            "en": "I will look up and share the update.",
            "ja": "私が「調べる」して進捗を共有します。",
            "focus": "look up",
            "jaFocus": "調べる"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look up on weekends.",
            "ja": "週末によく「調べる」します。",
            "focus": "look up",
            "jaFocus": "調べる"
          },
          {
            "en": "It is useful to look up.",
            "ja": "「調べる」できると便利です。",
            "focus": "look up",
            "jaFocus": "調べる"
          }
        ]
      },
      {
        "phrase": "look after",
        "ja": "世話する・担当する",
        "image": "look after のまとまりで仕事に使う表現。",
        "pattern": "look after + 名詞",
        "examples": [
          {
            "en": "We need to look after before the meeting.",
            "ja": "会議前に「世話する・担当する」必要があります。",
            "focus": "look after",
            "jaFocus": "世話する・担当する"
          },
          {
            "en": "Please look after by the end of the day.",
            "ja": "今日中に「世話する・担当する」してください。",
            "focus": "look after",
            "jaFocus": "世話する・担当する"
          },
          {
            "en": "I will look after and share the update.",
            "ja": "私が「世話する・担当する」して進捗を共有します。",
            "focus": "look after",
            "jaFocus": "世話する・担当する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look after on weekends.",
            "ja": "週末によく「世話する・担当する」します。",
            "focus": "look after",
            "jaFocus": "世話する・担当する"
          },
          {
            "en": "It is useful to look after.",
            "ja": "「世話する・担当する」できると便利です。",
            "focus": "look after",
            "jaFocus": "世話する・担当する"
          }
        ]
      },
      {
        "phrase": "look out",
        "ja": "気をつける",
        "image": "look out のまとまりで仕事に使う表現。",
        "pattern": "look out",
        "examples": [
          {
            "en": "We need to look out before the meeting.",
            "ja": "会議前に「気をつける」必要があります。",
            "focus": "look out",
            "jaFocus": "気をつける"
          },
          {
            "en": "Please look out by the end of the day.",
            "ja": "今日中に「気をつける」してください。",
            "focus": "look out",
            "jaFocus": "気をつける"
          },
          {
            "en": "I will look out and share the update.",
            "ja": "私が「気をつける」して進捗を共有します。",
            "focus": "look out",
            "jaFocus": "気をつける"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look out on weekends.",
            "ja": "週末によく「気をつける」します。",
            "focus": "look out",
            "jaFocus": "気をつける"
          },
          {
            "en": "It is useful to look out.",
            "ja": "「気をつける」できると便利です。",
            "focus": "look out",
            "jaFocus": "気をつける"
          }
        ]
      },
      {
        "phrase": "look back",
        "ja": "振り返る",
        "image": "look back のまとまりで仕事に使う表現。",
        "pattern": "look back",
        "examples": [
          {
            "en": "We need to look back before the meeting.",
            "ja": "会議前に「振り返る」必要があります。",
            "focus": "look back",
            "jaFocus": "振り返る"
          },
          {
            "en": "Please look back by the end of the day.",
            "ja": "今日中に「振り返る」してください。",
            "focus": "look back",
            "jaFocus": "振り返る"
          },
          {
            "en": "I will look back and share the update.",
            "ja": "私が「振り返る」して進捗を共有します。",
            "focus": "look back",
            "jaFocus": "振り返る"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look back on weekends.",
            "ja": "週末によく「振り返る」します。",
            "focus": "look back",
            "jaFocus": "振り返る"
          },
          {
            "en": "It is useful to look back.",
            "ja": "「振り返る」できると便利です。",
            "focus": "look back",
            "jaFocus": "振り返る"
          }
        ]
      },
      {
        "phrase": "look ahead",
        "ja": "先を見据える",
        "image": "look ahead のまとまりで仕事に使う表現。",
        "pattern": "look ahead",
        "examples": [
          {
            "en": "We need to look ahead before the meeting.",
            "ja": "会議前に「先を見据える」必要があります。",
            "focus": "look ahead",
            "jaFocus": "先を見据える"
          },
          {
            "en": "Please look ahead by the end of the day.",
            "ja": "今日中に「先を見据える」してください。",
            "focus": "look ahead",
            "jaFocus": "先を見据える"
          },
          {
            "en": "I will look ahead and share the update.",
            "ja": "私が「先を見据える」して進捗を共有します。",
            "focus": "look ahead",
            "jaFocus": "先を見据える"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look ahead on weekends.",
            "ja": "週末によく「先を見据える」します。",
            "focus": "look ahead",
            "jaFocus": "先を見据える"
          },
          {
            "en": "It is useful to look ahead.",
            "ja": "「先を見据える」できると便利です。",
            "focus": "look ahead",
            "jaFocus": "先を見据える"
          }
        ]
      },
      {
        "phrase": "look around",
        "ja": "見て回る",
        "image": "look around のまとまりで仕事に使う表現。",
        "pattern": "look around",
        "examples": [
          {
            "en": "We need to look around before the meeting.",
            "ja": "会議前に「見て回る」必要があります。",
            "focus": "look around",
            "jaFocus": "見て回る"
          },
          {
            "en": "Please look around by the end of the day.",
            "ja": "今日中に「見て回る」してください。",
            "focus": "look around",
            "jaFocus": "見て回る"
          },
          {
            "en": "I will look around and share the update.",
            "ja": "私が「見て回る」して進捗を共有します。",
            "focus": "look around",
            "jaFocus": "見て回る"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often look around on weekends.",
            "ja": "週末によく「見て回る」します。",
            "focus": "look around",
            "jaFocus": "見て回る"
          },
          {
            "en": "It is useful to look around.",
            "ja": "「見て回る」できると便利です。",
            "focus": "look around",
            "jaFocus": "見て回る"
          }
        ]
      }
    ]
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
    "rank": 18,
    "word": "WORK",
    "ipa": "/wɜːrk/",
    "kana": "ワーク",
    "syllable": "work",
    "transitivity": "自動詞・他動詞",
    "importance": "★★★★★ 超重要",
    "core": "人・仕組み・方法が目的に向かって動く",
    "coreDetail": "WORKは、人が働く、仕組みが機能する、方法がうまくいくという「目的に向かって動く」感覚で整理できます。",
    "coreVisual": {
        "from": [
            "👤 人",
            "⚙️ システム",
            "📝 方法",
            "🎯 目標",
            "🤝 チーム"
        ],
        "to": "成果",
        "label": "動く → 成果へ"
    },
    "meanings": [
        {
            "id": "job",
            "title": "① 働く",
            "pattern": "WORK",
            "transitivity": "他動詞",
            "structure": "S + work",
            "image": "仕事をする。",
            "point": "働く場所・相手・役割を前置詞で足す。",
            "examples": [
                {
                    "en": "I work in sales.",
                    "ja": "私は営業で働いています。",
                    "focus": "work",
                    "jaFocus": "働いて"
                },
                {
                    "en": "She works for a trading company.",
                    "ja": "彼女は商社で働いています。",
                    "focus": "works",
                    "jaFocus": "働いて"
                },
                {
                    "en": "We work with overseas clients.",
                    "ja": "海外顧客と仕事をしています。",
                    "focus": "work",
                    "jaFocus": "仕事をして"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "function",
            "title": "② 機能する",
            "pattern": "WORK",
            "transitivity": "他動詞",
            "structure": "S + work",
            "image": "機械・システム・方法がうまく動く。",
            "point": "Does it work? は「それでうまくいきますか？」。",
            "examples": [
                {
                    "en": "The system works well now.",
                    "ja": "システムは今うまく動いています。",
                    "focus": "works",
                    "jaFocus": "動いて"
                },
                {
                    "en": "This solution may work.",
                    "ja": "この解決策はうまくいくかもしれません。",
                    "focus": "work",
                    "jaFocus": "うまくいく"
                },
                {
                    "en": "The new process works better.",
                    "ja": "新しい手順の方がうまく機能します。",
                    "focus": "works",
                    "jaFocus": "機能します"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "workon",
            "title": "③ 取り組む",
            "pattern": "WORK ON + 名詞",
            "transitivity": "他動詞",
            "structure": "S + work on + O",
            "image": "案件や課題に取り組む。",
            "point": "仕事で最も使う work の型。",
            "examples": [
                {
                    "en": "I am working on the proposal.",
                    "ja": "提案書に取り組んでいます。",
                    "focus": "working on",
                    "jaFocus": "取り組んで"
                },
                {
                    "en": "We worked on the issue yesterday.",
                    "ja": "昨日その問題に取り組みました。",
                    "focus": "worked on",
                    "jaFocus": "取り組みました"
                },
                {
                    "en": "The team is working on cost reduction.",
                    "ja": "チームはコスト削減に取り組んでいます。",
                    "focus": "working on",
                    "jaFocus": "取り組んで"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "with",
            "title": "④ 一緒に仕事する",
            "pattern": "WORK WITH + 人",
            "transitivity": "他動詞",
            "structure": "S + work with + O",
            "image": "相手と一緒に働く。",
            "point": "work with clients/team とよく使う。",
            "examples": [
                {
                    "en": "I work with the engineering team.",
                    "ja": "技術チームと一緒に仕事をしています。",
                    "focus": "work with",
                    "jaFocus": "仕事をして"
                },
                {
                    "en": "We work with local partners.",
                    "ja": "現地パートナーと協力しています。",
                    "focus": "work with",
                    "jaFocus": "協力して"
                },
                {
                    "en": "She worked with the client directly.",
                    "ja": "彼女は顧客と直接やり取りしました。",
                    "focus": "worked with",
                    "jaFocus": "やり取りしました"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "for",
            "title": "⑤ 〜に勤める",
            "pattern": "WORK FOR + 会社",
            "transitivity": "他動詞",
            "structure": "S + work for + O",
            "image": "会社や組織のために働く。",
            "point": "自己紹介で必須。",
            "examples": [
                {
                    "en": "I work for Aristo Japan.",
                    "ja": "私はアリストジャパンで働いています。",
                    "focus": "work for",
                    "jaFocus": "働いて"
                },
                {
                    "en": "He works for our Singapore office.",
                    "ja": "彼はシンガポール本社で働いています。",
                    "focus": "works for",
                    "jaFocus": "働いて"
                },
                {
                    "en": "She worked for the company for ten years.",
                    "ja": "彼女はその会社で10年間働きました。",
                    "focus": "worked for",
                    "jaFocus": "働きました"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "as",
            "title": "⑥ 〜として働く",
            "pattern": "WORK AS + 役職",
            "transitivity": "他動詞",
            "structure": "S + work as + O",
            "image": "職種や役割を示す。",
            "point": "as の後ろに職種を置く。",
            "examples": [
                {
                    "en": "I work as a sales representative.",
                    "ja": "私は営業担当として働いています。",
                    "focus": "work as",
                    "jaFocus": "営業担当として"
                },
                {
                    "en": "She works as a project manager.",
                    "ja": "彼女はプロジェクトマネージャーとして働いています。",
                    "focus": "works as",
                    "jaFocus": "として働いて"
                },
                {
                    "en": "He worked as a consultant.",
                    "ja": "彼はコンサルタントとして働いていました。",
                    "focus": "worked as",
                    "jaFocus": "として"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "time",
            "title": "⑦ 勤務する",
            "pattern": "WORK + 時間",
            "transitivity": "他動詞",
            "structure": "S + work + 時間",
            "image": "勤務時間や残業を表す。",
            "point": "work overtime, work late が頻出。",
            "examples": [
                {
                    "en": "I worked late yesterday.",
                    "ja": "昨日遅くまで働きました。",
                    "focus": "worked",
                    "jaFocus": "働きました"
                },
                {
                    "en": "We may need to work overtime.",
                    "ja": "残業が必要かもしれません。",
                    "focus": "work overtime",
                    "jaFocus": "残業"
                },
                {
                    "en": "She works from home on Fridays.",
                    "ja": "彼女は金曜日に在宅勤務をしています。",
                    "focus": "works",
                    "jaFocus": "在宅勤務"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "toward",
            "title": "⑧ 目標に向かって進める",
            "pattern": "WORK TOWARD + 目標",
            "transitivity": "他動詞",
            "structure": "S + work toward + O",
            "image": "目標達成へ努力する。",
            "point": "goal, target, solution と相性が良い。",
            "examples": [
                {
                    "en": "We are working toward the sales target.",
                    "ja": "売上目標に向けて取り組んでいます。",
                    "focus": "working toward",
                    "jaFocus": "取り組んで"
                },
                {
                    "en": "The team worked toward a solution.",
                    "ja": "チームは解決に向けて取り組みました。",
                    "focus": "worked toward",
                    "jaFocus": "取り組みました"
                },
                {
                    "en": "I am working toward better communication.",
                    "ja": "より良い連絡に向けて取り組んでいます。",
                    "focus": "working toward",
                    "jaFocus": "取り組んで"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "out",
            "title": "⑨ うまくいく・解決する",
            "pattern": "WORK OUT",
            "transitivity": "他動詞",
            "structure": "S + work out",
            "image": "物事がうまくまとまる。",
            "point": "It worked out. は「うまくいった」。",
            "examples": [
                {
                    "en": "The plan worked out well.",
                    "ja": "計画はうまくいきました。",
                    "focus": "worked out",
                    "jaFocus": "うまくいきました"
                },
                {
                    "en": "I hope the schedule works out.",
                    "ja": "スケジュールがうまくいくといいです。",
                    "focus": "works out",
                    "jaFocus": "うまくいく"
                },
                {
                    "en": "We worked out the details.",
                    "ja": "詳細を詰めました。",
                    "focus": "worked out",
                    "object": "the details",
                    "jaFocus": "詰めました"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "through",
            "title": "⑩ やり遂げる",
            "pattern": "WORK THROUGH + 名詞",
            "transitivity": "他動詞",
            "structure": "S + work through + O",
            "image": "問題を一つずつ処理する。",
            "point": "work through issues は社会人向け。",
            "examples": [
                {
                    "en": "We need to work through these issues.",
                    "ja": "これらの問題に一つずつ対応する必要があります。",
                    "focus": "work through",
                    "jaFocus": "対応する"
                },
                {
                    "en": "The team worked through the checklist.",
                    "ja": "チームはチェックリストを順に進めました。",
                    "focus": "worked through",
                    "jaFocus": "進めました"
                },
                {
                    "en": "Let us work through the remaining tasks.",
                    "ja": "残りのタスクを片付けましょう。",
                    "focus": "work through",
                    "jaFocus": "片付け"
                }
            ],
            "dailyExamples": []
        }
    ],
    "collocations": [
        {
            "phrase": "work on",
            "ja": "〜に取り組む",
            "image": "work on は社会人英語で使いやすい表現。",
            "pattern": "work on",
            "examples": [
                {
                    "en": "We work on this week.",
                    "ja": "今週、〜に取り組む。",
                    "focus": "work",
                    "jaFocus": "〜に取り組む"
                },
                {
                    "en": "I need to work on before the meeting.",
                    "ja": "会議前に〜に取り組む必要があります。",
                    "focus": "work",
                    "jaFocus": "〜に取り組む"
                },
                {
                    "en": "The team will work on for the project.",
                    "ja": "チームは案件で〜に取り組む予定です。",
                    "focus": "work",
                    "jaFocus": "〜に取り組む"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work with",
            "ja": "〜と一緒に仕事する",
            "image": "work with は社会人英語で使いやすい表現。",
            "pattern": "work with",
            "examples": [
                {
                    "en": "We work with this week.",
                    "ja": "今週、〜と一緒に仕事する。",
                    "focus": "work",
                    "jaFocus": "〜と一緒に仕事する"
                },
                {
                    "en": "I need to work with before the meeting.",
                    "ja": "会議前に〜と一緒に仕事する必要があります。",
                    "focus": "work",
                    "jaFocus": "〜と一緒に仕事する"
                },
                {
                    "en": "The team will work with for the project.",
                    "ja": "チームは案件で〜と一緒に仕事する予定です。",
                    "focus": "work",
                    "jaFocus": "〜と一緒に仕事する"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work for",
            "ja": "〜に勤める",
            "image": "work for は社会人英語で使いやすい表現。",
            "pattern": "work for",
            "examples": [
                {
                    "en": "We work for this week.",
                    "ja": "今週、〜に勤める。",
                    "focus": "work",
                    "jaFocus": "〜に勤める"
                },
                {
                    "en": "I need to work for before the meeting.",
                    "ja": "会議前に〜に勤める必要があります。",
                    "focus": "work",
                    "jaFocus": "〜に勤める"
                },
                {
                    "en": "The team will work for for the project.",
                    "ja": "チームは案件で〜に勤める予定です。",
                    "focus": "work",
                    "jaFocus": "〜に勤める"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work as",
            "ja": "〜として働く",
            "image": "work as は社会人英語で使いやすい表現。",
            "pattern": "work as",
            "examples": [
                {
                    "en": "We work as this week.",
                    "ja": "今週、〜として働く。",
                    "focus": "work",
                    "jaFocus": "〜として働く"
                },
                {
                    "en": "I need to work as before the meeting.",
                    "ja": "会議前に〜として働く必要があります。",
                    "focus": "work",
                    "jaFocus": "〜として働く"
                },
                {
                    "en": "The team will work as for the project.",
                    "ja": "チームは案件で〜として働く予定です。",
                    "focus": "work",
                    "jaFocus": "〜として働く"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work well",
            "ja": "うまく機能する",
            "image": "work well は社会人英語で使いやすい表現。",
            "pattern": "work well",
            "examples": [
                {
                    "en": "We work well this week.",
                    "ja": "今週、うまく機能する。",
                    "focus": "work",
                    "jaFocus": "うまく機能する"
                },
                {
                    "en": "I need to work well before the meeting.",
                    "ja": "会議前にうまく機能する必要があります。",
                    "focus": "work",
                    "jaFocus": "うまく機能する"
                },
                {
                    "en": "The team will work well for the project.",
                    "ja": "チームは案件でうまく機能する予定です。",
                    "focus": "work",
                    "jaFocus": "うまく機能する"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work remotely",
            "ja": "在宅勤務する",
            "image": "work remotely は社会人英語で使いやすい表現。",
            "pattern": "work remotely",
            "examples": [
                {
                    "en": "We work remotely this week.",
                    "ja": "今週、在宅勤務する。",
                    "focus": "work",
                    "jaFocus": "在宅勤務する"
                },
                {
                    "en": "I need to work remotely before the meeting.",
                    "ja": "会議前に在宅勤務する必要があります。",
                    "focus": "work",
                    "jaFocus": "在宅勤務する"
                },
                {
                    "en": "The team will work remotely for the project.",
                    "ja": "チームは案件で在宅勤務する予定です。",
                    "focus": "work",
                    "jaFocus": "在宅勤務する"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work overtime",
            "ja": "残業する",
            "image": "work overtime は社会人英語で使いやすい表現。",
            "pattern": "work overtime",
            "examples": [
                {
                    "en": "We work overtime this week.",
                    "ja": "今週、残業する。",
                    "focus": "work",
                    "jaFocus": "残業する"
                },
                {
                    "en": "I need to work overtime before the meeting.",
                    "ja": "会議前に残業する必要があります。",
                    "focus": "work",
                    "jaFocus": "残業する"
                },
                {
                    "en": "The team will work overtime for the project.",
                    "ja": "チームは案件で残業する予定です。",
                    "focus": "work",
                    "jaFocus": "残業する"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work toward",
            "ja": "〜に向けて取り組む",
            "image": "work toward は社会人英語で使いやすい表現。",
            "pattern": "work toward",
            "examples": [
                {
                    "en": "We work toward this week.",
                    "ja": "今週、〜に向けて取り組む。",
                    "focus": "work",
                    "jaFocus": "〜に向けて取り組む"
                },
                {
                    "en": "I need to work toward before the meeting.",
                    "ja": "会議前に〜に向けて取り組む必要があります。",
                    "focus": "work",
                    "jaFocus": "〜に向けて取り組む"
                },
                {
                    "en": "The team will work toward for the project.",
                    "ja": "チームは案件で〜に向けて取り組む予定です。",
                    "focus": "work",
                    "jaFocus": "〜に向けて取り組む"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work out",
            "ja": "うまくいく",
            "image": "work out は社会人英語で使いやすい表現。",
            "pattern": "work out",
            "examples": [
                {
                    "en": "We work out this week.",
                    "ja": "今週、うまくいく。",
                    "focus": "work",
                    "jaFocus": "うまくいく"
                },
                {
                    "en": "I need to work out before the meeting.",
                    "ja": "会議前にうまくいく必要があります。",
                    "focus": "work",
                    "jaFocus": "うまくいく"
                },
                {
                    "en": "The team will work out for the project.",
                    "ja": "チームは案件でうまくいく予定です。",
                    "focus": "work",
                    "jaFocus": "うまくいく"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work through",
            "ja": "〜をやり遂げる",
            "image": "work through は社会人英語で使いやすい表現。",
            "pattern": "work through",
            "examples": [
                {
                    "en": "We work through this week.",
                    "ja": "今週、〜をやり遂げる。",
                    "focus": "work",
                    "jaFocus": "〜をやり遂げる"
                },
                {
                    "en": "I need to work through before the meeting.",
                    "ja": "会議前に〜をやり遂げる必要があります。",
                    "focus": "work",
                    "jaFocus": "〜をやり遂げる"
                },
                {
                    "en": "The team will work through for the project.",
                    "ja": "チームは案件で〜をやり遂げる予定です。",
                    "focus": "work",
                    "jaFocus": "〜をやり遂げる"
                }
            ],
            "dailyExamples": []
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "work on",
            "ja": "〜に取り組む",
            "image": "work on は社会人英語で使いやすい表現。",
            "pattern": "work on",
            "examples": [
                {
                    "en": "We work on this week.",
                    "ja": "今週、〜に取り組む。",
                    "focus": "work",
                    "jaFocus": "〜に取り組む"
                },
                {
                    "en": "I need to work on before the meeting.",
                    "ja": "会議前に〜に取り組む必要があります。",
                    "focus": "work",
                    "jaFocus": "〜に取り組む"
                },
                {
                    "en": "The team will work on for the project.",
                    "ja": "チームは案件で〜に取り組む予定です。",
                    "focus": "work",
                    "jaFocus": "〜に取り組む"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work with",
            "ja": "〜と一緒に仕事する",
            "image": "work with は社会人英語で使いやすい表現。",
            "pattern": "work with",
            "examples": [
                {
                    "en": "We work with this week.",
                    "ja": "今週、〜と一緒に仕事する。",
                    "focus": "work",
                    "jaFocus": "〜と一緒に仕事する"
                },
                {
                    "en": "I need to work with before the meeting.",
                    "ja": "会議前に〜と一緒に仕事する必要があります。",
                    "focus": "work",
                    "jaFocus": "〜と一緒に仕事する"
                },
                {
                    "en": "The team will work with for the project.",
                    "ja": "チームは案件で〜と一緒に仕事する予定です。",
                    "focus": "work",
                    "jaFocus": "〜と一緒に仕事する"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work for",
            "ja": "〜に勤める",
            "image": "work for は社会人英語で使いやすい表現。",
            "pattern": "work for",
            "examples": [
                {
                    "en": "We work for this week.",
                    "ja": "今週、〜に勤める。",
                    "focus": "work",
                    "jaFocus": "〜に勤める"
                },
                {
                    "en": "I need to work for before the meeting.",
                    "ja": "会議前に〜に勤める必要があります。",
                    "focus": "work",
                    "jaFocus": "〜に勤める"
                },
                {
                    "en": "The team will work for for the project.",
                    "ja": "チームは案件で〜に勤める予定です。",
                    "focus": "work",
                    "jaFocus": "〜に勤める"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work as",
            "ja": "〜として働く",
            "image": "work as は社会人英語で使いやすい表現。",
            "pattern": "work as",
            "examples": [
                {
                    "en": "We work as this week.",
                    "ja": "今週、〜として働く。",
                    "focus": "work",
                    "jaFocus": "〜として働く"
                },
                {
                    "en": "I need to work as before the meeting.",
                    "ja": "会議前に〜として働く必要があります。",
                    "focus": "work",
                    "jaFocus": "〜として働く"
                },
                {
                    "en": "The team will work as for the project.",
                    "ja": "チームは案件で〜として働く予定です。",
                    "focus": "work",
                    "jaFocus": "〜として働く"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work well",
            "ja": "うまく機能する",
            "image": "work well は社会人英語で使いやすい表現。",
            "pattern": "work well",
            "examples": [
                {
                    "en": "We work well this week.",
                    "ja": "今週、うまく機能する。",
                    "focus": "work",
                    "jaFocus": "うまく機能する"
                },
                {
                    "en": "I need to work well before the meeting.",
                    "ja": "会議前にうまく機能する必要があります。",
                    "focus": "work",
                    "jaFocus": "うまく機能する"
                },
                {
                    "en": "The team will work well for the project.",
                    "ja": "チームは案件でうまく機能する予定です。",
                    "focus": "work",
                    "jaFocus": "うまく機能する"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work remotely",
            "ja": "在宅勤務する",
            "image": "work remotely は社会人英語で使いやすい表現。",
            "pattern": "work remotely",
            "examples": [
                {
                    "en": "We work remotely this week.",
                    "ja": "今週、在宅勤務する。",
                    "focus": "work",
                    "jaFocus": "在宅勤務する"
                },
                {
                    "en": "I need to work remotely before the meeting.",
                    "ja": "会議前に在宅勤務する必要があります。",
                    "focus": "work",
                    "jaFocus": "在宅勤務する"
                },
                {
                    "en": "The team will work remotely for the project.",
                    "ja": "チームは案件で在宅勤務する予定です。",
                    "focus": "work",
                    "jaFocus": "在宅勤務する"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work overtime",
            "ja": "残業する",
            "image": "work overtime は社会人英語で使いやすい表現。",
            "pattern": "work overtime",
            "examples": [
                {
                    "en": "We work overtime this week.",
                    "ja": "今週、残業する。",
                    "focus": "work",
                    "jaFocus": "残業する"
                },
                {
                    "en": "I need to work overtime before the meeting.",
                    "ja": "会議前に残業する必要があります。",
                    "focus": "work",
                    "jaFocus": "残業する"
                },
                {
                    "en": "The team will work overtime for the project.",
                    "ja": "チームは案件で残業する予定です。",
                    "focus": "work",
                    "jaFocus": "残業する"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work toward",
            "ja": "〜に向けて取り組む",
            "image": "work toward は社会人英語で使いやすい表現。",
            "pattern": "work toward",
            "examples": [
                {
                    "en": "We work toward this week.",
                    "ja": "今週、〜に向けて取り組む。",
                    "focus": "work",
                    "jaFocus": "〜に向けて取り組む"
                },
                {
                    "en": "I need to work toward before the meeting.",
                    "ja": "会議前に〜に向けて取り組む必要があります。",
                    "focus": "work",
                    "jaFocus": "〜に向けて取り組む"
                },
                {
                    "en": "The team will work toward for the project.",
                    "ja": "チームは案件で〜に向けて取り組む予定です。",
                    "focus": "work",
                    "jaFocus": "〜に向けて取り組む"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work out",
            "ja": "うまくいく",
            "image": "work out は社会人英語で使いやすい表現。",
            "pattern": "work out",
            "examples": [
                {
                    "en": "We work out this week.",
                    "ja": "今週、うまくいく。",
                    "focus": "work",
                    "jaFocus": "うまくいく"
                },
                {
                    "en": "I need to work out before the meeting.",
                    "ja": "会議前にうまくいく必要があります。",
                    "focus": "work",
                    "jaFocus": "うまくいく"
                },
                {
                    "en": "The team will work out for the project.",
                    "ja": "チームは案件でうまくいく予定です。",
                    "focus": "work",
                    "jaFocus": "うまくいく"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "work through",
            "ja": "〜をやり遂げる",
            "image": "work through は社会人英語で使いやすい表現。",
            "pattern": "work through",
            "examples": [
                {
                    "en": "We work through this week.",
                    "ja": "今週、〜をやり遂げる。",
                    "focus": "work",
                    "jaFocus": "〜をやり遂げる"
                },
                {
                    "en": "I need to work through before the meeting.",
                    "ja": "会議前に〜をやり遂げる必要があります。",
                    "focus": "work",
                    "jaFocus": "〜をやり遂げる"
                },
                {
                    "en": "The team will work through for the project.",
                    "ja": "チームは案件で〜をやり遂げる予定です。",
                    "focus": "work",
                    "jaFocus": "〜をやり遂げる"
                }
            ],
            "dailyExamples": []
        }
    ]
},
  {
    "id": "use",
    "rank": 19,
    "word": "USE",
    "ipa": "/juːz/",
    "kana": "ユーズ",
    "syllable": "use",
    "transitivity": "他動詞中心",
    "importance": "★★★★★ 超重要",
    "core": "目的のために、道具・情報・時間を活用する",
    "coreDetail": "USEは、何かを目的達成のために使う感覚です。仕事ではツール・データ・時間・予算・機会を活用する表現に広がります。",
    "coreVisual": {
        "from": [
            "🛠️ ツール",
            "📊 データ",
            "⏰ 時間",
            "💰 予算",
            "🎯 機会"
        ],
        "to": "目的達成",
        "label": "手段 → 目的"
    },
    "meanings": [
        {
            "id": "tool",
            "title": "① 使う",
            "pattern": "USE + 名詞",
            "transitivity": "他動詞",
            "structure": "S + use + O",
            "image": "目的のために物や方法を使う。",
            "point": "use は「目的達成のために利用する」感覚。",
            "examples": [
                {
                    "en": "We use this tool for project management.",
                    "ja": "このツールを案件管理に使っています。",
                    "focus": "use",
                    "object": "this tool",
                    "jaFocus": "使って"
                },
                {
                    "en": "I used the template for the proposal.",
                    "ja": "提案書にテンプレートを使いました。",
                    "focus": "used",
                    "object": "the template",
                    "jaFocus": "使いました"
                },
                {
                    "en": "Please use the latest data.",
                    "ja": "最新データを使ってください。",
                    "focus": "use",
                    "object": "the latest data",
                    "jaFocus": "使って"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "information",
            "title": "② 情報を活用する",
            "pattern": "USE + information/data",
            "transitivity": "他動詞",
            "structure": "S + use + O",
            "image": "情報を判断や提案に使う。",
            "point": "data, information, feedback と相性が良い。",
            "examples": [
                {
                    "en": "We used customer feedback to improve the service.",
                    "ja": "顧客の意見をサービス改善に活用しました。",
                    "focus": "used",
                    "object": "customer feedback",
                    "jaFocus": "活用しました"
                },
                {
                    "en": "I use sales data for planning.",
                    "ja": "計画作成に売上データを使っています。",
                    "focus": "use",
                    "object": "sales data",
                    "jaFocus": "使って"
                },
                {
                    "en": "Please use this information carefully.",
                    "ja": "この情報は慎重に使ってください。",
                    "focus": "use",
                    "object": "this information",
                    "jaFocus": "使って"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "time",
            "title": "③ 時間を使う",
            "pattern": "USE + time",
            "transitivity": "他動詞",
            "structure": "S + use + O",
            "image": "限られた時間を目的に充てる。",
            "point": "use time wisely は社会人向け。",
            "examples": [
                {
                    "en": "Let us use the meeting time effectively.",
                    "ja": "会議時間を有効に使いましょう。",
                    "focus": "use",
                    "object": "the meeting time",
                    "jaFocus": "使い"
                },
                {
                    "en": "I used my lunch break to review the report.",
                    "ja": "昼休みを使って報告書を確認しました。",
                    "focus": "used",
                    "object": "my lunch break",
                    "jaFocus": "使って"
                },
                {
                    "en": "We should use our time wisely.",
                    "ja": "時間を賢く使うべきです。",
                    "focus": "use",
                    "object": "our time",
                    "jaFocus": "使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "budget",
            "title": "④ 予算を使う",
            "pattern": "USE + budget/money",
            "transitivity": "他動詞",
            "structure": "S + use + O",
            "image": "お金や予算を目的に充てる。",
            "point": "budget, funds, resources と一緒に使う。",
            "examples": [
                {
                    "en": "We used the budget for training.",
                    "ja": "研修に予算を使いました。",
                    "focus": "used",
                    "object": "the budget",
                    "jaFocus": "使いました"
                },
                {
                    "en": "The team used extra funds for marketing.",
                    "ja": "チームは追加資金をマーケティングに使いました。",
                    "focus": "used",
                    "object": "extra funds",
                    "jaFocus": "使いました"
                },
                {
                    "en": "Please use company money carefully.",
                    "ja": "会社のお金は慎重に使ってください。",
                    "focus": "use",
                    "object": "company money",
                    "jaFocus": "使って"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "method",
            "title": "⑤ 方法を使う",
            "pattern": "USE + method/approach",
            "transitivity": "他動詞",
            "structure": "S + use + O",
            "image": "やり方を選んで使う。",
            "point": "approach, strategy, method と相性が良い。",
            "examples": [
                {
                    "en": "We used a different approach.",
                    "ja": "別の方法を使いました。",
                    "focus": "used",
                    "object": "a different approach",
                    "jaFocus": "使いました"
                },
                {
                    "en": "The team uses this method for analysis.",
                    "ja": "チームは分析にこの方法を使います。",
                    "focus": "uses",
                    "object": "this method",
                    "jaFocus": "使います"
                },
                {
                    "en": "Can we use a simpler process?",
                    "ja": "もっと簡単な手順を使えますか？",
                    "focus": "use",
                    "object": "a simpler process",
                    "jaFocus": "使え"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "opportunity",
            "title": "⑥ 機会を活かす",
            "pattern": "USE + opportunity/chance",
            "transitivity": "他動詞",
            "structure": "S + use + O",
            "image": "機会を目的のために使う。",
            "point": "use this opportunity は会議や挨拶で便利。",
            "examples": [
                {
                    "en": "I would like to use this opportunity to thank you.",
                    "ja": "この機会を使ってお礼を申し上げます。",
                    "focus": "use",
                    "object": "this opportunity",
                    "jaFocus": "使って"
                },
                {
                    "en": "We used the chance to explain our proposal.",
                    "ja": "その機会を使って提案を説明しました。",
                    "focus": "used",
                    "object": "the chance",
                    "jaFocus": "使って"
                },
                {
                    "en": "Let us use this meeting to align our goals.",
                    "ja": "この会議を使って目標をすり合わせましょう。",
                    "focus": "use",
                    "object": "this meeting",
                    "jaFocus": "使って"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "as",
            "title": "⑦ 〜として使う",
            "pattern": "USE + O + as 名詞",
            "transitivity": "他動詞",
            "structure": "S + use + O + as 名詞",
            "image": "物や情報に役割を与えて使う。",
            "point": "as の後ろに役割を置く。",
            "examples": [
                {
                    "en": "We use this file as a reference.",
                    "ja": "このファイルを参考資料として使います。",
                    "focus": "use",
                    "object": "this file",
                    "jaFocus": "使います"
                },
                {
                    "en": "I used the report as evidence.",
                    "ja": "その報告書を根拠として使いました。",
                    "focus": "used",
                    "object": "the report",
                    "jaFocus": "使いました"
                },
                {
                    "en": "Can we use this room as a training space?",
                    "ja": "この部屋を研修スペースとして使えますか？",
                    "focus": "use",
                    "object": "this room",
                    "jaFocus": "使え"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "for",
            "title": "⑧ 〜のために使う",
            "pattern": "USE + O + for 名詞",
            "transitivity": "他動詞",
            "structure": "S + use + O + for 名詞",
            "image": "目的を for で示す。",
            "point": "use A for B は最重要パターン。",
            "examples": [
                {
                    "en": "We use Slack for internal communication.",
                    "ja": "社内連絡にSlackを使っています。",
                    "focus": "use",
                    "object": "Slack",
                    "jaFocus": "使って"
                },
                {
                    "en": "I used the chart for the presentation.",
                    "ja": "プレゼンにその表を使いました。",
                    "focus": "used",
                    "object": "the chart",
                    "jaFocus": "使いました"
                },
                {
                    "en": "Please use this form for requests.",
                    "ja": "依頼にはこのフォームを使ってください。",
                    "focus": "use",
                    "object": "this form",
                    "jaFocus": "使って"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "help",
            "title": "⑨ 助けを借りる",
            "pattern": "USE + help/support",
            "transitivity": "他動詞",
            "structure": "S + use + O",
            "image": "支援やサポートを利用する。",
            "point": "use your help は「手伝ってもらえると助かる」。",
            "examples": [
                {
                    "en": "I could use your help with this task.",
                    "ja": "この作業で手伝ってもらえると助かります。",
                    "focus": "use",
                    "object": "your help",
                    "jaFocus": "手伝って"
                },
                {
                    "en": "We used external support for testing.",
                    "ja": "テストに外部サポートを利用しました。",
                    "focus": "used",
                    "object": "external support",
                    "jaFocus": "利用しました"
                },
                {
                    "en": "The team used IT support to fix the issue.",
                    "ja": "チームは問題解決にITサポートを利用しました。",
                    "focus": "used",
                    "object": "IT support",
                    "jaFocus": "利用しました"
                }
            ],
            "dailyExamples": []
        },
        {
            "id": "beused",
            "title": "⑩ 使われる",
            "pattern": "BE USED FOR/TO",
            "transitivity": "他動詞",
            "structure": "S + be used + for/to",
            "image": "物がどんな目的で使われるかを説明する。",
            "point": "受け身の形で機能説明に使える。",
            "examples": [
                {
                    "en": "This tool is used for tracking tasks.",
                    "ja": "このツールはタスク管理に使われます。",
                    "focus": "used",
                    "object": "for tracking tasks",
                    "jaFocus": "使われます"
                },
                {
                    "en": "This button is used to save changes.",
                    "ja": "このボタンは変更保存に使われます。",
                    "focus": "used",
                    "object": "to save changes",
                    "jaFocus": "使われます"
                },
                {
                    "en": "The data is used for sales analysis.",
                    "ja": "そのデータは売上分析に使われます。",
                    "focus": "used",
                    "object": "for sales analysis",
                    "jaFocus": "使われます"
                }
            ],
            "dailyExamples": []
        }
    ],
    "collocations": [
        {
            "phrase": "use data",
            "ja": "データを使う",
            "image": "use data は社会人英語で使いやすい表現。",
            "pattern": "use data",
            "examples": [
                {
                    "en": "We use data this week.",
                    "ja": "今週、データを使う。",
                    "focus": "use",
                    "jaFocus": "データを使う"
                },
                {
                    "en": "I need to use data before the meeting.",
                    "ja": "会議前にデータを使う必要があります。",
                    "focus": "use",
                    "jaFocus": "データを使う"
                },
                {
                    "en": "The team will use data for the project.",
                    "ja": "チームは案件でデータを使う予定です。",
                    "focus": "use",
                    "jaFocus": "データを使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use a tool",
            "ja": "ツールを使う",
            "image": "use a tool は社会人英語で使いやすい表現。",
            "pattern": "use a tool",
            "examples": [
                {
                    "en": "We use a tool this week.",
                    "ja": "今週、ツールを使う。",
                    "focus": "use",
                    "jaFocus": "ツールを使う"
                },
                {
                    "en": "I need to use a tool before the meeting.",
                    "ja": "会議前にツールを使う必要があります。",
                    "focus": "use",
                    "jaFocus": "ツールを使う"
                },
                {
                    "en": "The team will use a tool for the project.",
                    "ja": "チームは案件でツールを使う予定です。",
                    "focus": "use",
                    "jaFocus": "ツールを使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use time effectively",
            "ja": "時間を有効に使う",
            "image": "use time effectively は社会人英語で使いやすい表現。",
            "pattern": "use time effectively",
            "examples": [
                {
                    "en": "We use time effectively this week.",
                    "ja": "今週、時間を有効に使う。",
                    "focus": "use",
                    "jaFocus": "時間を有効に使う"
                },
                {
                    "en": "I need to use time effectively before the meeting.",
                    "ja": "会議前に時間を有効に使う必要があります。",
                    "focus": "use",
                    "jaFocus": "時間を有効に使う"
                },
                {
                    "en": "The team will use time effectively for the project.",
                    "ja": "チームは案件で時間を有効に使う予定です。",
                    "focus": "use",
                    "jaFocus": "時間を有効に使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use a template",
            "ja": "テンプレートを使う",
            "image": "use a template は社会人英語で使いやすい表現。",
            "pattern": "use a template",
            "examples": [
                {
                    "en": "We use a template this week.",
                    "ja": "今週、テンプレートを使う。",
                    "focus": "use",
                    "jaFocus": "テンプレートを使う"
                },
                {
                    "en": "I need to use a template before the meeting.",
                    "ja": "会議前にテンプレートを使う必要があります。",
                    "focus": "use",
                    "jaFocus": "テンプレートを使う"
                },
                {
                    "en": "The team will use a template for the project.",
                    "ja": "チームは案件でテンプレートを使う予定です。",
                    "focus": "use",
                    "jaFocus": "テンプレートを使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use feedback",
            "ja": "意見を活用する",
            "image": "use feedback は社会人英語で使いやすい表現。",
            "pattern": "use feedback",
            "examples": [
                {
                    "en": "We use feedback this week.",
                    "ja": "今週、意見を活用する。",
                    "focus": "use",
                    "jaFocus": "意見を活用する"
                },
                {
                    "en": "I need to use feedback before the meeting.",
                    "ja": "会議前に意見を活用する必要があります。",
                    "focus": "use",
                    "jaFocus": "意見を活用する"
                },
                {
                    "en": "The team will use feedback for the project.",
                    "ja": "チームは案件で意見を活用する予定です。",
                    "focus": "use",
                    "jaFocus": "意見を活用する"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use as a reference",
            "ja": "参考に使う",
            "image": "use as a reference は社会人英語で使いやすい表現。",
            "pattern": "use as a reference",
            "examples": [
                {
                    "en": "We use as a reference this week.",
                    "ja": "今週、参考に使う。",
                    "focus": "use",
                    "jaFocus": "参考に使う"
                },
                {
                    "en": "I need to use as a reference before the meeting.",
                    "ja": "会議前に参考に使う必要があります。",
                    "focus": "use",
                    "jaFocus": "参考に使う"
                },
                {
                    "en": "The team will use as a reference for the project.",
                    "ja": "チームは案件で参考に使う予定です。",
                    "focus": "use",
                    "jaFocus": "参考に使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use for analysis",
            "ja": "分析に使う",
            "image": "use for analysis は社会人英語で使いやすい表現。",
            "pattern": "use for analysis",
            "examples": [
                {
                    "en": "We use for analysis this week.",
                    "ja": "今週、分析に使う。",
                    "focus": "use",
                    "jaFocus": "分析に使う"
                },
                {
                    "en": "I need to use for analysis before the meeting.",
                    "ja": "会議前に分析に使う必要があります。",
                    "focus": "use",
                    "jaFocus": "分析に使う"
                },
                {
                    "en": "The team will use for analysis for the project.",
                    "ja": "チームは案件で分析に使う予定です。",
                    "focus": "use",
                    "jaFocus": "分析に使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use resources",
            "ja": "リソースを使う",
            "image": "use resources は社会人英語で使いやすい表現。",
            "pattern": "use resources",
            "examples": [
                {
                    "en": "We use resources this week.",
                    "ja": "今週、リソースを使う。",
                    "focus": "use",
                    "jaFocus": "リソースを使う"
                },
                {
                    "en": "I need to use resources before the meeting.",
                    "ja": "会議前にリソースを使う必要があります。",
                    "focus": "use",
                    "jaFocus": "リソースを使う"
                },
                {
                    "en": "The team will use resources for the project.",
                    "ja": "チームは案件でリソースを使う予定です。",
                    "focus": "use",
                    "jaFocus": "リソースを使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use support",
            "ja": "サポートを利用する",
            "image": "use support は社会人英語で使いやすい表現。",
            "pattern": "use support",
            "examples": [
                {
                    "en": "We use support this week.",
                    "ja": "今週、サポートを利用する。",
                    "focus": "use",
                    "jaFocus": "サポートを利用する"
                },
                {
                    "en": "I need to use support before the meeting.",
                    "ja": "会議前にサポートを利用する必要があります。",
                    "focus": "use",
                    "jaFocus": "サポートを利用する"
                },
                {
                    "en": "The team will use support for the project.",
                    "ja": "チームは案件でサポートを利用する予定です。",
                    "focus": "use",
                    "jaFocus": "サポートを利用する"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use an opportunity",
            "ja": "機会を活かす",
            "image": "use an opportunity は社会人英語で使いやすい表現。",
            "pattern": "use an opportunity",
            "examples": [
                {
                    "en": "We use an opportunity this week.",
                    "ja": "今週、機会を活かす。",
                    "focus": "use",
                    "jaFocus": "機会を活かす"
                },
                {
                    "en": "I need to use an opportunity before the meeting.",
                    "ja": "会議前に機会を活かす必要があります。",
                    "focus": "use",
                    "jaFocus": "機会を活かす"
                },
                {
                    "en": "The team will use an opportunity for the project.",
                    "ja": "チームは案件で機会を活かす予定です。",
                    "focus": "use",
                    "jaFocus": "機会を活かす"
                }
            ],
            "dailyExamples": []
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "use data",
            "ja": "データを使う",
            "image": "use data は社会人英語で使いやすい表現。",
            "pattern": "use data",
            "examples": [
                {
                    "en": "We use data this week.",
                    "ja": "今週、データを使う。",
                    "focus": "use",
                    "jaFocus": "データを使う"
                },
                {
                    "en": "I need to use data before the meeting.",
                    "ja": "会議前にデータを使う必要があります。",
                    "focus": "use",
                    "jaFocus": "データを使う"
                },
                {
                    "en": "The team will use data for the project.",
                    "ja": "チームは案件でデータを使う予定です。",
                    "focus": "use",
                    "jaFocus": "データを使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use a tool",
            "ja": "ツールを使う",
            "image": "use a tool は社会人英語で使いやすい表現。",
            "pattern": "use a tool",
            "examples": [
                {
                    "en": "We use a tool this week.",
                    "ja": "今週、ツールを使う。",
                    "focus": "use",
                    "jaFocus": "ツールを使う"
                },
                {
                    "en": "I need to use a tool before the meeting.",
                    "ja": "会議前にツールを使う必要があります。",
                    "focus": "use",
                    "jaFocus": "ツールを使う"
                },
                {
                    "en": "The team will use a tool for the project.",
                    "ja": "チームは案件でツールを使う予定です。",
                    "focus": "use",
                    "jaFocus": "ツールを使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use time effectively",
            "ja": "時間を有効に使う",
            "image": "use time effectively は社会人英語で使いやすい表現。",
            "pattern": "use time effectively",
            "examples": [
                {
                    "en": "We use time effectively this week.",
                    "ja": "今週、時間を有効に使う。",
                    "focus": "use",
                    "jaFocus": "時間を有効に使う"
                },
                {
                    "en": "I need to use time effectively before the meeting.",
                    "ja": "会議前に時間を有効に使う必要があります。",
                    "focus": "use",
                    "jaFocus": "時間を有効に使う"
                },
                {
                    "en": "The team will use time effectively for the project.",
                    "ja": "チームは案件で時間を有効に使う予定です。",
                    "focus": "use",
                    "jaFocus": "時間を有効に使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use a template",
            "ja": "テンプレートを使う",
            "image": "use a template は社会人英語で使いやすい表現。",
            "pattern": "use a template",
            "examples": [
                {
                    "en": "We use a template this week.",
                    "ja": "今週、テンプレートを使う。",
                    "focus": "use",
                    "jaFocus": "テンプレートを使う"
                },
                {
                    "en": "I need to use a template before the meeting.",
                    "ja": "会議前にテンプレートを使う必要があります。",
                    "focus": "use",
                    "jaFocus": "テンプレートを使う"
                },
                {
                    "en": "The team will use a template for the project.",
                    "ja": "チームは案件でテンプレートを使う予定です。",
                    "focus": "use",
                    "jaFocus": "テンプレートを使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use feedback",
            "ja": "意見を活用する",
            "image": "use feedback は社会人英語で使いやすい表現。",
            "pattern": "use feedback",
            "examples": [
                {
                    "en": "We use feedback this week.",
                    "ja": "今週、意見を活用する。",
                    "focus": "use",
                    "jaFocus": "意見を活用する"
                },
                {
                    "en": "I need to use feedback before the meeting.",
                    "ja": "会議前に意見を活用する必要があります。",
                    "focus": "use",
                    "jaFocus": "意見を活用する"
                },
                {
                    "en": "The team will use feedback for the project.",
                    "ja": "チームは案件で意見を活用する予定です。",
                    "focus": "use",
                    "jaFocus": "意見を活用する"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use as a reference",
            "ja": "参考に使う",
            "image": "use as a reference は社会人英語で使いやすい表現。",
            "pattern": "use as a reference",
            "examples": [
                {
                    "en": "We use as a reference this week.",
                    "ja": "今週、参考に使う。",
                    "focus": "use",
                    "jaFocus": "参考に使う"
                },
                {
                    "en": "I need to use as a reference before the meeting.",
                    "ja": "会議前に参考に使う必要があります。",
                    "focus": "use",
                    "jaFocus": "参考に使う"
                },
                {
                    "en": "The team will use as a reference for the project.",
                    "ja": "チームは案件で参考に使う予定です。",
                    "focus": "use",
                    "jaFocus": "参考に使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use for analysis",
            "ja": "分析に使う",
            "image": "use for analysis は社会人英語で使いやすい表現。",
            "pattern": "use for analysis",
            "examples": [
                {
                    "en": "We use for analysis this week.",
                    "ja": "今週、分析に使う。",
                    "focus": "use",
                    "jaFocus": "分析に使う"
                },
                {
                    "en": "I need to use for analysis before the meeting.",
                    "ja": "会議前に分析に使う必要があります。",
                    "focus": "use",
                    "jaFocus": "分析に使う"
                },
                {
                    "en": "The team will use for analysis for the project.",
                    "ja": "チームは案件で分析に使う予定です。",
                    "focus": "use",
                    "jaFocus": "分析に使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use resources",
            "ja": "リソースを使う",
            "image": "use resources は社会人英語で使いやすい表現。",
            "pattern": "use resources",
            "examples": [
                {
                    "en": "We use resources this week.",
                    "ja": "今週、リソースを使う。",
                    "focus": "use",
                    "jaFocus": "リソースを使う"
                },
                {
                    "en": "I need to use resources before the meeting.",
                    "ja": "会議前にリソースを使う必要があります。",
                    "focus": "use",
                    "jaFocus": "リソースを使う"
                },
                {
                    "en": "The team will use resources for the project.",
                    "ja": "チームは案件でリソースを使う予定です。",
                    "focus": "use",
                    "jaFocus": "リソースを使う"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use support",
            "ja": "サポートを利用する",
            "image": "use support は社会人英語で使いやすい表現。",
            "pattern": "use support",
            "examples": [
                {
                    "en": "We use support this week.",
                    "ja": "今週、サポートを利用する。",
                    "focus": "use",
                    "jaFocus": "サポートを利用する"
                },
                {
                    "en": "I need to use support before the meeting.",
                    "ja": "会議前にサポートを利用する必要があります。",
                    "focus": "use",
                    "jaFocus": "サポートを利用する"
                },
                {
                    "en": "The team will use support for the project.",
                    "ja": "チームは案件でサポートを利用する予定です。",
                    "focus": "use",
                    "jaFocus": "サポートを利用する"
                }
            ],
            "dailyExamples": []
        },
        {
            "phrase": "use an opportunity",
            "ja": "機会を活かす",
            "image": "use an opportunity は社会人英語で使いやすい表現。",
            "pattern": "use an opportunity",
            "examples": [
                {
                    "en": "We use an opportunity this week.",
                    "ja": "今週、機会を活かす。",
                    "focus": "use",
                    "jaFocus": "機会を活かす"
                },
                {
                    "en": "I need to use an opportunity before the meeting.",
                    "ja": "会議前に機会を活かす必要があります。",
                    "focus": "use",
                    "jaFocus": "機会を活かす"
                },
                {
                    "en": "The team will use an opportunity for the project.",
                    "ja": "チームは案件で機会を活かす予定です。",
                    "focus": "use",
                    "jaFocus": "機会を活かす"
                }
            ],
            "dailyExamples": []
        }
    ]
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
    "ipa": "/help/",
    "kana": "ヘルプ",
    "syllable": "help",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "相手の負担を軽くして、前に進める",
    "coreDetail": "HELPは、相手・仕事・状況が進みやすくなるように支えるイメージです。人を助けるだけでなく、改善する・役立つ・避けられないという使い方にも広がります。",
    "coreVisual": {
      "from": [
        "🤝 人",
        "📄 業務",
        "🧩 問題",
        "📈 改善",
        "⏱️ 時間"
      ],
      "to": "自分・チーム",
      "label": "コアイメージ"
    },
    "meanings": [
      {
        "id": "assist",
        "title": "① 手伝う・支援する",
        "pattern": "HELP + 人 / HELP + 人 + with 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "人やチームの作業を軽くする。",
        "point": "helpの後ろに「誰を助けるか」を置く。仕事では team, client, manager とよく使う。",
        "examples": [
          {
            "en": "I helped the sales team with the proposal.",
            "ja": "営業チームの提案書作成を手伝いました。",
            "focus": "helped",
            "object": "the sales team",
            "jaFocus": "手伝いました"
          },
          {
            "en": "Can you help me with this report?",
            "ja": "この報告書を手伝ってもらえますか？",
            "focus": "help",
            "object": "me",
            "jaFocus": "手伝って"
          },
          {
            "en": "She helped the client solve the issue.",
            "ja": "彼女はクライアントが問題を解決するのを支援しました。",
            "focus": "helped",
            "object": "the client",
            "jaFocus": "支援しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I helped my brother move yesterday.",
            "ja": "昨日、兄の引っ越しを手伝いました。",
            "focus": "helped",
            "object": "my brother",
            "jaFocus": "手伝いました"
          },
          {
            "en": "Can you help me carry this bag?",
            "ja": "このバッグを運ぶのを手伝ってくれる？",
            "focus": "help",
            "object": "me",
            "jaFocus": "手伝って"
          }
        ]
      },
      {
        "id": "make-easier",
        "title": "② 役に立つ・助けになる",
        "pattern": "HELP + 物事 + 動詞 / HELP with 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "物事が成果や改善につながる。",
        "point": "資料・仕組み・方法が「助けになる」と言う時に使う。",
        "examples": [
          {
            "en": "This checklist helps us avoid mistakes.",
            "ja": "このチェックリストはミス防止に役立ちます。",
            "focus": "helps",
            "object": "us",
            "jaFocus": "役立ちます"
          },
          {
            "en": "The new system helps reduce manual work.",
            "ja": "新しいシステムは手作業の削減に役立ちます。",
            "focus": "helps",
            "object": "reduce manual work",
            "jaFocus": "役立ちます"
          },
          {
            "en": "Clear examples help users understand the feature.",
            "ja": "明確な例文はユーザーが機能を理解する助けになります。",
            "focus": "help",
            "object": "users",
            "jaFocus": "助けになります"
          }
        ],
        "dailyExamples": [
          {
            "en": "A map helps when you travel.",
            "ja": "旅行では地図が役に立ちます。",
            "focus": "helps",
            "jaFocus": "役に立ちます"
          },
          {
            "en": "Music helps me relax.",
            "ja": "音楽はリラックスする助けになります。",
            "focus": "helps",
            "object": "me",
            "jaFocus": "助けになります"
          }
        ]
      },
      {
        "id": "improve",
        "title": "③ 改善する助けになる",
        "pattern": "HELP + improve / increase / reduce",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "改善の方向へ動かす。",
        "point": "helpの後ろに improve, increase, reduce などを置くと仕事で使いやすい。",
        "examples": [
          {
            "en": "This training helps improve our response quality.",
            "ja": "この研修は対応品質の改善に役立ちます。",
            "focus": "helps",
            "object": "improve our response quality",
            "jaFocus": "役立ちます"
          },
          {
            "en": "Better data helps increase sales accuracy.",
            "ja": "より良いデータは売上予測の精度向上に役立ちます。",
            "focus": "helps",
            "object": "increase sales accuracy",
            "jaFocus": "役立ちます"
          },
          {
            "en": "Regular meetings help reduce confusion.",
            "ja": "定例会議は混乱を減らすのに役立ちます。",
            "focus": "help",
            "object": "reduce confusion",
            "jaFocus": "役立ちます"
          }
        ],
        "dailyExamples": [
          {
            "en": "Walking helps improve my mood.",
            "ja": "散歩は気分を良くする助けになります。",
            "focus": "helps",
            "object": "improve my mood",
            "jaFocus": "助けになります"
          },
          {
            "en": "Sleep helps reduce stress.",
            "ja": "睡眠はストレスを減らす助けになります。",
            "focus": "helps",
            "object": "reduce stress",
            "jaFocus": "助けになります"
          }
        ]
      },
      {
        "id": "cannot-help",
        "title": "④ 〜せずにはいられない",
        "pattern": "cannot help + 動名詞",
        "transitivity": "助動詞的表現",
        "structure": "S + V + O",
        "image": "自然にそうしてしまう。",
        "point": "cannot help -ing は「どうしても〜してしまう」。感情や反応に使う。",
        "examples": [
          {
            "en": "I could not help worrying about the deadline.",
            "ja": "締切が心配で仕方ありませんでした。",
            "focus": "could not help worrying",
            "jaFocus": "心配で仕方ありませんでした"
          },
          {
            "en": "We could not help noticing the delay.",
            "ja": "私たちはその遅れに気づかずにはいられませんでした。",
            "focus": "could not help noticing",
            "object": "the delay",
            "jaFocus": "気づかずにはいられませんでした"
          },
          {
            "en": "I cannot help checking my email after hours.",
            "ja": "勤務時間後もメールを確認せずにはいられません。",
            "focus": "cannot help checking",
            "object": "my email",
            "jaFocus": "確認せずにはいられません"
          }
        ],
        "dailyExamples": [
          {
            "en": "I could not help laughing.",
            "ja": "笑わずにはいられませんでした。",
            "focus": "could not help laughing",
            "jaFocus": "笑わずにはいられませんでした"
          },
          {
            "en": "I cannot help singing this song.",
            "ja": "この曲を歌わずにはいられません。",
            "focus": "cannot help singing",
            "object": "this song",
            "jaFocus": "歌わずにはいられません"
          }
        ]
      },
      {
        "id": "help-out",
        "title": "⑤ 助け出す・力を貸す",
        "pattern": "HELP OUT / HELP + 人 + out",
        "transitivity": "句動詞寄り",
        "structure": "S + V + O",
        "image": "困っている状況から支える。",
        "point": "help out はカジュアルだが職場でも「手を貸す」の意味で使える。",
        "examples": [
          {
            "en": "Can you help out with the event tomorrow?",
            "ja": "明日のイベントを手伝ってもらえますか？",
            "focus": "help out",
            "jaFocus": "手伝って"
          },
          {
            "en": "The team helped me out during the busy season.",
            "ja": "繁忙期にチームが私を助けてくれました。",
            "focus": "helped me out",
            "object": "me",
            "jaFocus": "助けてくれました"
          },
          {
            "en": "We need someone to help out at the reception desk.",
            "ja": "受付を手伝ってくれる人が必要です。",
            "focus": "help out",
            "jaFocus": "手伝って"
          }
        ],
        "dailyExamples": [
          {
            "en": "My neighbor helped me out with the boxes.",
            "ja": "近所の人が箱運びを手伝ってくれました。",
            "focus": "helped me out",
            "object": "me",
            "jaFocus": "手伝ってくれました"
          },
          {
            "en": "Can you help out for a minute?",
            "ja": "少し手を貸してくれる？",
            "focus": "help out",
            "jaFocus": "手を貸して"
          }
        ]
      },
      {
        "id": "serve",
        "title": "⑥ 役目を果たす・機能する",
        "pattern": "HELP as / HELP to",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V",
        "image": "支える役割を持つ。",
        "point": "説明・資料・機能が「目的を助ける」と言う時に便利。",
        "examples": [
          {
            "en": "This guide helps as a quick reference.",
            "ja": "このガイドは簡易参照資料として役立ちます。",
            "focus": "helps",
            "jaFocus": "役立ちます"
          },
          {
            "en": "The dashboard helps to track progress.",
            "ja": "ダッシュボードは進捗管理に役立ちます。",
            "focus": "helps",
            "object": "track progress",
            "jaFocus": "役立ちます"
          },
          {
            "en": "The template helps keep our reports consistent.",
            "ja": "このテンプレートは報告書の統一に役立ちます。",
            "focus": "helps",
            "object": "keep our reports consistent",
            "jaFocus": "役立ちます"
          }
        ],
        "dailyExamples": [
          {
            "en": "This app helps with daily study.",
            "ja": "このアプリは日々の学習に役立ちます。",
            "focus": "helps",
            "jaFocus": "役立ちます"
          },
          {
            "en": "The note helps as a reminder.",
            "ja": "そのメモはリマインダーとして役立ちます。",
            "focus": "helps",
            "jaFocus": "役立ちます"
          }
        ]
      },
      {
        "id": "support",
        "title": "⑦ サポートする",
        "pattern": "HELP + 人 + 動詞",
        "transitivity": "他動詞",
        "structure": "S + V + O + C",
        "image": "人が行動できるように支える。",
        "point": "help 人 do は「人が〜するのを助ける」。toは省略されることが多い。",
        "examples": [
          {
            "en": "I helped the new member understand the process.",
            "ja": "新メンバーが手順を理解するのをサポートしました。",
            "focus": "helped",
            "object": "the new member",
            "jaFocus": "サポートしました"
          },
          {
            "en": "This feature helps users save time.",
            "ja": "この機能はユーザーが時間を節約するのを助けます。",
            "focus": "helps",
            "object": "users",
            "jaFocus": "助けます"
          },
          {
            "en": "Our team helps clients choose the right product.",
            "ja": "私たちのチームは顧客が適切な製品を選ぶのを支援します。",
            "focus": "helps",
            "object": "clients",
            "jaFocus": "支援します"
          }
        ],
        "dailyExamples": [
          {
            "en": "My teacher helped me improve my English.",
            "ja": "先生が英語を伸ばすのを助けてくれました。",
            "focus": "helped",
            "object": "me",
            "jaFocus": "助けてくれました"
          },
          {
            "en": "This book helps beginners start easily.",
            "ja": "この本は初心者が簡単に始める助けになります。",
            "focus": "helps",
            "object": "beginners",
            "jaFocus": "助けになります"
          }
        ]
      },
      {
        "id": "need-help",
        "title": "⑧ 助けが必要である",
        "pattern": "NEED HELP / ASK FOR HELP",
        "transitivity": "名詞的表現",
        "structure": "S + V + O",
        "image": "助けを求める状態。",
        "point": "helpは名詞でもよく使う。I need help. は仕事でも自然。",
        "examples": [
          {
            "en": "I need help with the estimate.",
            "ja": "見積作成で助けが必要です。",
            "focus": "need help",
            "jaFocus": "助けが必要です"
          },
          {
            "en": "Please ask for help before the issue gets bigger.",
            "ja": "問題が大きくなる前に助けを求めてください。",
            "focus": "ask for help",
            "jaFocus": "助けを求めて"
          },
          {
            "en": "The client needs help setting up the system.",
            "ja": "顧客はシステム設定の支援を必要としています。",
            "focus": "needs help",
            "object": "help",
            "jaFocus": "支援を必要としています"
          }
        ],
        "dailyExamples": [
          {
            "en": "I need help with my homework.",
            "ja": "宿題で助けが必要です。",
            "focus": "need help",
            "jaFocus": "助けが必要です"
          },
          {
            "en": "Do you need any help?",
            "ja": "何か手伝いが必要？",
            "focus": "need",
            "object": "any help",
            "jaFocus": "手伝いが必要"
          }
        ]
      },
      {
        "id": "customer-help",
        "title": "⑨ 顧客対応する",
        "pattern": "HELP + customer / client",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "顧客の問題解決を支える。",
        "point": "helpは顧客対応・サポート業務で非常に使いやすい。",
        "examples": [
          {
            "en": "I helped the customer find the right model.",
            "ja": "お客様が適切な機種を見つけるのを支援しました。",
            "focus": "helped",
            "object": "the customer",
            "jaFocus": "支援しました"
          },
          {
            "en": "We helped the client confirm the specifications.",
            "ja": "顧客が仕様を確認するのを支援しました。",
            "focus": "helped",
            "object": "the client",
            "jaFocus": "支援しました"
          },
          {
            "en": "Support helped the user reset the password.",
            "ja": "サポート担当がユーザーのパスワード再設定を支援しました。",
            "focus": "helped",
            "object": "the user",
            "jaFocus": "支援しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "The staff helped me find my seat.",
            "ja": "スタッフが席を探すのを手伝ってくれました。",
            "focus": "helped",
            "object": "me",
            "jaFocus": "手伝ってくれました"
          },
          {
            "en": "The guide helped us choose a route.",
            "ja": "ガイドがルート選びを手伝ってくれました。",
            "focus": "helped",
            "object": "us",
            "jaFocus": "手伝ってくれました"
          }
        ]
      },
      {
        "id": "facilitate",
        "title": "⑩ 促進する・円滑にする",
        "pattern": "HELP + 名詞 + go smoothly",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "物事がスムーズに進むようにする。",
        "point": "会議・導入・共有をスムーズにする意味で使える。",
        "examples": [
          {
            "en": "The agenda helped the meeting go smoothly.",
            "ja": "議題が会議を円滑に進める助けになりました。",
            "focus": "helped",
            "object": "the meeting",
            "jaFocus": "助けになりました"
          },
          {
            "en": "Clear roles helped the project move forward.",
            "ja": "明確な役割分担がプロジェクトを前進させました。",
            "focus": "helped",
            "object": "the project",
            "jaFocus": "前進させました"
          },
          {
            "en": "Early feedback helped the launch go well.",
            "ja": "早めのフィードバックがローンチ成功に役立ちました。",
            "focus": "helped",
            "object": "the launch",
            "jaFocus": "役立ちました"
          }
        ],
        "dailyExamples": [
          {
            "en": "Good weather helped the event go well.",
            "ja": "良い天気がイベント成功に役立ちました。",
            "focus": "helped",
            "object": "the event",
            "jaFocus": "役立ちました"
          },
          {
            "en": "A checklist helped the trip go smoothly.",
            "ja": "チェックリストで旅行がスムーズに進みました。",
            "focus": "helped",
            "object": "the trip",
            "jaFocus": "スムーズに進みました"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "help with",
        "ja": "〜を手伝う",
        "image": "withは対象。具体的な作業を手伝う。",
        "pattern": "help with + 名詞",
        "examples": [
          {
            "en": "Can you help with the presentation slides?",
            "ja": "プレゼン資料を手伝ってもらえますか？",
            "focus": "help with",
            "object": "the presentation slides",
            "jaFocus": "手伝って"
          },
          {
            "en": "I helped with the monthly report.",
            "ja": "月次報告書を手伝いました。",
            "focus": "helped with",
            "object": "the monthly report",
            "jaFocus": "手伝いました"
          },
          {
            "en": "She helped with the client meeting.",
            "ja": "彼女は顧客会議を手伝いました。",
            "focus": "helped with",
            "object": "the client meeting",
            "jaFocus": "手伝いました"
          }
        ],
        "dailyExamples": [
          {
            "en": "Can you help with dinner?",
            "ja": "夕食を手伝ってくれる？",
            "focus": "help with",
            "object": "dinner",
            "jaFocus": "手伝って"
          },
          {
            "en": "I helped with the shopping.",
            "ja": "買い物を手伝いました。",
            "focus": "helped with",
            "object": "the shopping",
            "jaFocus": "手伝いました"
          }
        ]
      },
      {
        "phrase": "help someone out",
        "ja": "人を助ける・手を貸す",
        "image": "outは困った状況から外へ。",
        "pattern": "help + 人 + out",
        "examples": [
          {
            "en": "Thanks for helping me out today.",
            "ja": "今日は助けてくれてありがとう。",
            "focus": "helping me out",
            "object": "me",
            "jaFocus": "助けて"
          },
          {
            "en": "Can you help the team out this afternoon?",
            "ja": "今日の午後チームを手伝えますか？",
            "focus": "help the team out",
            "object": "the team",
            "jaFocus": "手伝えますか"
          },
          {
            "en": "He helped us out during the system issue.",
            "ja": "システム障害時に彼が助けてくれました。",
            "focus": "helped us out",
            "object": "us",
            "jaFocus": "助けてくれました"
          }
        ],
        "dailyExamples": [
          {
            "en": "My friend helped me out yesterday.",
            "ja": "昨日友人が助けてくれました。",
            "focus": "helped me out",
            "object": "me",
            "jaFocus": "助けて"
          },
          {
            "en": "Can you help me out for a second?",
            "ja": "少し手を貸してくれる？",
            "focus": "help me out",
            "object": "me",
            "jaFocus": "手を貸して"
          }
        ]
      },
      {
        "phrase": "help improve",
        "ja": "改善に役立つ",
        "image": "改善方向を支える。",
        "pattern": "help + 動詞",
        "examples": [
          {
            "en": "Training helps improve product knowledge.",
            "ja": "研修は製品知識の向上に役立ちます。",
            "focus": "helps improve",
            "object": "product knowledge",
            "jaFocus": "役立ちます"
          },
          {
            "en": "Feedback helps improve the service.",
            "ja": "フィードバックはサービス改善に役立ちます。",
            "focus": "helps improve",
            "object": "the service",
            "jaFocus": "役立ちます"
          },
          {
            "en": "Data helps improve our decisions.",
            "ja": "データは意思決定の改善に役立ちます。",
            "focus": "helps improve",
            "object": "our decisions",
            "jaFocus": "役立ちます"
          }
        ],
        "dailyExamples": [
          {
            "en": "Practice helps improve pronunciation.",
            "ja": "練習は発音改善に役立ちます。",
            "focus": "helps improve",
            "object": "pronunciation",
            "jaFocus": "役立ちます"
          },
          {
            "en": "Sleep helps improve focus.",
            "ja": "睡眠は集中力向上に役立ちます。",
            "focus": "helps improve",
            "object": "focus",
            "jaFocus": "役立ちます"
          }
        ]
      },
      {
        "phrase": "need help",
        "ja": "助けが必要",
        "image": "必要性を伝える。",
        "pattern": "need help with + 名詞",
        "examples": [
          {
            "en": "I need help with this quotation.",
            "ja": "この見積で助けが必要です。",
            "focus": "need help",
            "object": "help",
            "jaFocus": "助けが必要"
          },
          {
            "en": "The new member needs help with the tool.",
            "ja": "新メンバーはそのツールの支援が必要です。",
            "focus": "needs help",
            "object": "help",
            "jaFocus": "支援が必要"
          },
          {
            "en": "Do you need help with the setup?",
            "ja": "設定で支援が必要ですか？",
            "focus": "need help",
            "object": "help",
            "jaFocus": "支援が必要"
          }
        ],
        "dailyExamples": [
          {
            "en": "I need help with my phone.",
            "ja": "スマホで助けが必要です。",
            "focus": "need help",
            "object": "help",
            "jaFocus": "助けが必要"
          },
          {
            "en": "Do you need help carrying that?",
            "ja": "それを運ぶのに手伝いが必要？",
            "focus": "need help",
            "object": "help",
            "jaFocus": "手伝いが必要"
          }
        ]
      },
      {
        "phrase": "ask for help",
        "ja": "助けを求める",
        "image": "助けを外に求める。",
        "pattern": "ask for help",
        "examples": [
          {
            "en": "Please ask for help if you are stuck.",
            "ja": "行き詰まったら助けを求めてください。",
            "focus": "ask for help",
            "jaFocus": "助けを求めて"
          },
          {
            "en": "He asked for help before the deadline.",
            "ja": "彼は締切前に助けを求めました。",
            "focus": "asked for help",
            "jaFocus": "助けを求めました"
          },
          {
            "en": "It is better to ask for help early.",
            "ja": "早めに助けを求める方が良いです。",
            "focus": "ask for help",
            "jaFocus": "助けを求める"
          }
        ],
        "dailyExamples": [
          {
            "en": "I asked for help at the station.",
            "ja": "駅で助けを求めました。",
            "focus": "asked for help",
            "jaFocus": "助けを求めました"
          },
          {
            "en": "Don’t be afraid to ask for help.",
            "ja": "助けを求めることを恐れないで。",
            "focus": "ask for help",
            "jaFocus": "助けを求める"
          }
        ]
      },
      {
        "phrase": "help make",
        "ja": "〜する助けになる",
        "image": "結果を作る方向に支える。",
        "pattern": "help make + O + C",
        "examples": [
          {
            "en": "The template helps make reports clearer.",
            "ja": "テンプレートは報告書をより分かりやすくします。",
            "focus": "helps make",
            "object": "reports",
            "jaFocus": "分かりやすくします"
          },
          {
            "en": "Clear rules help make work smoother.",
            "ja": "明確なルールは仕事をより円滑にします。",
            "focus": "help make",
            "object": "work",
            "jaFocus": "円滑にします"
          },
          {
            "en": "Good examples help make training effective.",
            "ja": "良い例文は研修を効果的にします。",
            "focus": "help make",
            "object": "training",
            "jaFocus": "効果的にします"
          }
        ],
        "dailyExamples": [
          {
            "en": "Music helps make the room relaxing.",
            "ja": "音楽で部屋が落ち着いた雰囲気になります。",
            "focus": "helps make",
            "object": "the room",
            "jaFocus": "雰囲気になります"
          },
          {
            "en": "Good lighting helps make photos better.",
            "ja": "良い照明は写真を良くします。",
            "focus": "helps make",
            "object": "photos",
            "jaFocus": "良くします"
          }
        ]
      },
      {
        "phrase": "help reduce",
        "ja": "減らす助けになる",
        "image": "負担やリスクを減らす。",
        "pattern": "help reduce + 名詞",
        "examples": [
          {
            "en": "Automation helps reduce manual work.",
            "ja": "自動化は手作業の削減に役立ちます。",
            "focus": "helps reduce",
            "object": "manual work",
            "jaFocus": "削減に役立ちます"
          },
          {
            "en": "Early checks help reduce errors.",
            "ja": "早期確認はミス削減に役立ちます。",
            "focus": "help reduce",
            "object": "errors",
            "jaFocus": "削減に役立ちます"
          },
          {
            "en": "The new process helps reduce lead time.",
            "ja": "新しい手順はリードタイム短縮に役立ちます。",
            "focus": "helps reduce",
            "object": "lead time",
            "jaFocus": "短縮に役立ちます"
          }
        ],
        "dailyExamples": [
          {
            "en": "Walking helps reduce stress.",
            "ja": "散歩はストレス軽減に役立ちます。",
            "focus": "helps reduce",
            "object": "stress",
            "jaFocus": "軽減に役立ちます"
          },
          {
            "en": "Planning helps reduce waste.",
            "ja": "計画は無駄の削減に役立ちます。",
            "focus": "helps reduce",
            "object": "waste",
            "jaFocus": "削減に役立ちます"
          }
        ]
      },
      {
        "phrase": "help each other",
        "ja": "助け合う",
        "image": "互いに支える。",
        "pattern": "help each other",
        "examples": [
          {
            "en": "We help each other during busy periods.",
            "ja": "繁忙期はお互いに助け合います。",
            "focus": "help each other",
            "jaFocus": "助け合います"
          },
          {
            "en": "Team members should help each other.",
            "ja": "チームメンバーは助け合うべきです。",
            "focus": "help each other",
            "jaFocus": "助け合う"
          },
          {
            "en": "Departments need to help each other more.",
            "ja": "部署同士でもっと助け合う必要があります。",
            "focus": "help each other",
            "jaFocus": "助け合う"
          }
        ],
        "dailyExamples": [
          {
            "en": "We help each other at home.",
            "ja": "家ではお互いに助け合います。",
            "focus": "help each other",
            "jaFocus": "助け合います"
          },
          {
            "en": "Friends help each other.",
            "ja": "友人は助け合います。",
            "focus": "help each other",
            "jaFocus": "助け合います"
          }
        ]
      },
      {
        "phrase": "help support",
        "ja": "支援を強化する",
        "image": "supportを後押しする。",
        "pattern": "help support + 名詞",
        "examples": [
          {
            "en": "The data helps support our proposal.",
            "ja": "そのデータは提案の裏付けになります。",
            "focus": "helps support",
            "object": "our proposal",
            "jaFocus": "裏付けになります"
          },
          {
            "en": "This evidence helps support the decision.",
            "ja": "この根拠はその判断を支える材料になります。",
            "focus": "helps support",
            "object": "the decision",
            "jaFocus": "支える材料になります"
          },
          {
            "en": "The tool helps support remote work.",
            "ja": "そのツールはリモートワークを支援します。",
            "focus": "helps support",
            "object": "remote work",
            "jaFocus": "支援します"
          }
        ],
        "dailyExamples": [
          {
            "en": "The donation helps support local events.",
            "ja": "その寄付は地域イベントの支援になります。",
            "focus": "helps support",
            "object": "local events",
            "jaFocus": "支援になります"
          },
          {
            "en": "This app helps support my study habit.",
            "ja": "このアプリは学習習慣の支えになります。",
            "focus": "helps support",
            "object": "my study habit",
            "jaFocus": "支えになります"
          }
        ]
      },
      {
        "phrase": "help users",
        "ja": "ユーザーを支援する",
        "image": "利用者の行動を助ける。",
        "pattern": "help users + 動詞",
        "examples": [
          {
            "en": "This feature helps users review quickly.",
            "ja": "この機能はユーザーが素早く復習するのを助けます。",
            "focus": "helps users",
            "object": "users",
            "jaFocus": "助けます"
          },
          {
            "en": "The guide helps users start easily.",
            "ja": "ガイドはユーザーが簡単に始める助けになります。",
            "focus": "helps users",
            "object": "users",
            "jaFocus": "助けになります"
          },
          {
            "en": "Examples help users understand patterns.",
            "ja": "例文はユーザーが型を理解する助けになります。",
            "focus": "help users",
            "object": "users",
            "jaFocus": "助けになります"
          }
        ],
        "dailyExamples": [
          {
            "en": "Good labels help users find things.",
            "ja": "良いラベルはユーザーが物を見つけやすくします。",
            "focus": "help users",
            "object": "users",
            "jaFocus": "見つけやすくします"
          },
          {
            "en": "Simple design helps users continue.",
            "ja": "シンプルな設計はユーザーが続ける助けになります。",
            "focus": "helps users",
            "object": "users",
            "jaFocus": "続ける助けになります"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "help out",
        "ja": "手を貸す",
        "image": "困った場面で補助する。",
        "pattern": "help out",
        "examples": [
          {
            "en": "Can you help out with the booth tomorrow?",
            "ja": "明日のブース対応を手伝ってもらえますか？",
            "focus": "help out",
            "jaFocus": "手伝って"
          },
          {
            "en": "I helped out at the reception desk.",
            "ja": "受付を手伝いました。",
            "focus": "helped out",
            "jaFocus": "手伝いました"
          },
          {
            "en": "We need someone to help out during lunch.",
            "ja": "昼の時間帯に手伝える人が必要です。",
            "focus": "help out",
            "jaFocus": "手伝える"
          }
        ],
        "dailyExamples": [
          {
            "en": "Can you help out at home today?",
            "ja": "今日家で手伝ってくれる？",
            "focus": "help out",
            "jaFocus": "手伝って"
          },
          {
            "en": "I helped out at the festival.",
            "ja": "祭りで手伝いました。",
            "focus": "helped out",
            "jaFocus": "手伝いました"
          }
        ]
      },
      {
        "phrase": "help with",
        "ja": "〜を手伝う",
        "image": "対象をwithで示す。",
        "pattern": "help with + 名詞",
        "examples": [
          {
            "en": "I can help with the setup.",
            "ja": "設定を手伝えます。",
            "focus": "help with",
            "object": "the setup",
            "jaFocus": "手伝えます"
          },
          {
            "en": "Please help with the document check.",
            "ja": "資料確認を手伝ってください。",
            "focus": "help with",
            "object": "the document check",
            "jaFocus": "手伝って"
          },
          {
            "en": "She helped with the training session.",
            "ja": "彼女は研修を手伝いました。",
            "focus": "helped with",
            "object": "the training session",
            "jaFocus": "手伝いました"
          }
        ],
        "dailyExamples": [
          {
            "en": "Can you help with cleaning?",
            "ja": "掃除を手伝ってくれる？",
            "focus": "help with",
            "object": "cleaning",
            "jaFocus": "手伝って"
          },
          {
            "en": "I helped with dinner.",
            "ja": "夕食を手伝いました。",
            "focus": "helped with",
            "object": "dinner",
            "jaFocus": "手伝いました"
          }
        ]
      },
      {
        "phrase": "help around",
        "ja": "周辺の仕事を手伝う",
        "image": "周辺作業を支える。",
        "pattern": "help around + 場所",
        "examples": [
          {
            "en": "I helped around the office in the morning.",
            "ja": "午前中はオフィス周りの作業を手伝いました。",
            "focus": "helped around",
            "object": "the office",
            "jaFocus": "手伝いました"
          },
          {
            "en": "Can you help around the venue?",
            "ja": "会場周りを手伝えますか？",
            "focus": "help around",
            "object": "the venue",
            "jaFocus": "手伝えますか"
          },
          {
            "en": "He helped around the warehouse.",
            "ja": "彼は倉庫周りを手伝いました。",
            "focus": "helped around",
            "object": "the warehouse",
            "jaFocus": "手伝いました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I helped around the house.",
            "ja": "家のことを手伝いました。",
            "focus": "helped around",
            "object": "the house",
            "jaFocus": "手伝いました"
          },
          {
            "en": "She helps around the shop.",
            "ja": "彼女は店の手伝いをしています。",
            "focus": "helps around",
            "object": "the shop",
            "jaFocus": "手伝い"
          }
        ]
      },
      {
        "phrase": "help along",
        "ja": "進行を助ける",
        "image": "前へ進むのを助ける。",
        "pattern": "help along + 名詞",
        "examples": [
          {
            "en": "Clear feedback helped the project along.",
            "ja": "明確なフィードバックがプロジェクト進行を助けました。",
            "focus": "helped",
            "object": "the project",
            "jaFocus": "助けました"
          },
          {
            "en": "The checklist helped the launch along.",
            "ja": "チェックリストがローンチ進行を助けました。",
            "focus": "helped",
            "object": "the launch",
            "jaFocus": "助けました"
          },
          {
            "en": "His advice helped the negotiation along.",
            "ja": "彼の助言が交渉を前に進めました。",
            "focus": "helped",
            "object": "the negotiation",
            "jaFocus": "進めました"
          }
        ],
        "dailyExamples": [
          {
            "en": "A little practice helped me along.",
            "ja": "少しの練習が前進の助けになりました。",
            "focus": "helped",
            "object": "me",
            "jaFocus": "助けになりました"
          },
          {
            "en": "Her message helped me along.",
            "ja": "彼女のメッセージが励みになりました。",
            "focus": "helped",
            "object": "me",
            "jaFocus": "励みになりました"
          }
        ]
      },
      {
        "phrase": "help up",
        "ja": "起き上がらせる",
        "image": "上へ助ける。",
        "pattern": "help + 人 + up",
        "examples": [
          {
            "en": "He helped the visitor up after the fall.",
            "ja": "彼は転倒した来客を起こしました。",
            "focus": "helped",
            "object": "the visitor",
            "jaFocus": "起こしました"
          },
          {
            "en": "The staff helped the customer up the stairs.",
            "ja": "スタッフはお客様が階段を上るのを手伝いました。",
            "focus": "helped",
            "object": "the customer",
            "jaFocus": "手伝いました"
          },
          {
            "en": "I helped a colleague up after he slipped.",
            "ja": "滑った同僚を起こしました。",
            "focus": "helped",
            "object": "a colleague",
            "jaFocus": "起こしました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I helped my child up.",
            "ja": "子どもを起こしました。",
            "focus": "helped",
            "object": "my child",
            "jaFocus": "起こしました"
          },
          {
            "en": "She helped him up from the chair.",
            "ja": "彼女は彼を椅子から立たせました。",
            "focus": "helped",
            "object": "him",
            "jaFocus": "立たせました"
          }
        ]
      },
      {
        "phrase": "help through",
        "ja": "乗り切るのを支える",
        "image": "困難の中を通り抜ける。",
        "pattern": "help + 人 + through + 名詞",
        "examples": [
          {
            "en": "My manager helped me through the busy season.",
            "ja": "上司が繁忙期を乗り切るのを支えてくれました。",
            "focus": "helped",
            "object": "me",
            "jaFocus": "支えてくれました"
          },
          {
            "en": "The manual helped us through the setup.",
            "ja": "マニュアルが設定作業を乗り切る助けになりました。",
            "focus": "helped",
            "object": "us",
            "jaFocus": "助けになりました"
          },
          {
            "en": "The team helped the client through the transition.",
            "ja": "チームは顧客の移行を支援しました。",
            "focus": "helped",
            "object": "the client",
            "jaFocus": "支援しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "My family helped me through a hard time.",
            "ja": "家族が大変な時期を支えてくれました。",
            "focus": "helped",
            "object": "me",
            "jaFocus": "支えてくれました"
          },
          {
            "en": "This song helped me through the week.",
            "ja": "この曲が一週間を乗り切る支えになりました。",
            "focus": "helped",
            "object": "me",
            "jaFocus": "支えになりました"
          }
        ]
      },
      {
        "phrase": "help off",
        "ja": "降りるのを手伝う",
        "image": "offの動きを助ける。",
        "pattern": "help + 人 + off",
        "examples": [
          {
            "en": "The staff helped the guest off the bus.",
            "ja": "スタッフは来客がバスを降りるのを手伝いました。",
            "focus": "helped",
            "object": "the guest",
            "jaFocus": "手伝いました"
          },
          {
            "en": "I helped the customer off the platform safely.",
            "ja": "お客様が安全にホームを降りるのを手伝いました。",
            "focus": "helped",
            "object": "the customer",
            "jaFocus": "手伝いました"
          },
          {
            "en": "He helped the visitor off the chair.",
            "ja": "彼は来客が椅子から立つのを手伝いました。",
            "focus": "helped",
            "object": "the visitor",
            "jaFocus": "手伝いました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I helped my grandmother off the train.",
            "ja": "祖母が電車を降りるのを手伝いました。",
            "focus": "helped",
            "object": "my grandmother",
            "jaFocus": "手伝いました"
          },
          {
            "en": "She helped the child off the bike.",
            "ja": "彼女は子どもが自転車から降りるのを手伝いました。",
            "focus": "helped",
            "object": "the child",
            "jaFocus": "手伝いました"
          }
        ]
      },
      {
        "phrase": "help on",
        "ja": "身につけるのを手伝う",
        "image": "onの状態へ助ける。",
        "pattern": "help + 人 + on with + 名詞",
        "examples": [
          {
            "en": "The staff helped the worker on with safety gear.",
            "ja": "スタッフは作業員が安全装備を着けるのを手伝いました。",
            "focus": "helped",
            "object": "the worker",
            "jaFocus": "手伝いました"
          },
          {
            "en": "I helped the visitor on with the headset.",
            "ja": "来客がヘッドセットを装着するのを手伝いました。",
            "focus": "helped",
            "object": "the visitor",
            "jaFocus": "手伝いました"
          },
          {
            "en": "She helped the presenter on with the microphone.",
            "ja": "彼女は発表者がマイクを装着するのを手伝いました。",
            "focus": "helped",
            "object": "the presenter",
            "jaFocus": "手伝いました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I helped him on with his coat.",
            "ja": "彼がコートを着るのを手伝いました。",
            "focus": "helped",
            "object": "him",
            "jaFocus": "手伝いました"
          },
          {
            "en": "She helped the child on with the backpack.",
            "ja": "彼女は子どもがリュックを背負うのを手伝いました。",
            "focus": "helped",
            "object": "the child",
            "jaFocus": "手伝いました"
          }
        ]
      },
      {
        "phrase": "help forward",
        "ja": "前進を助ける",
        "image": "前へ進める支え。",
        "pattern": "help + O + forward",
        "examples": [
          {
            "en": "The new budget helped the project forward.",
            "ja": "新しい予算がプロジェクトを前進させました。",
            "focus": "helped",
            "object": "the project",
            "jaFocus": "前進させました"
          },
          {
            "en": "His proposal helped the discussion forward.",
            "ja": "彼の提案が議論を前に進めました。",
            "focus": "helped",
            "object": "the discussion",
            "jaFocus": "前に進めました"
          },
          {
            "en": "User feedback helped the product forward.",
            "ja": "ユーザーの声が製品を前進させました。",
            "focus": "helped",
            "object": "the product",
            "jaFocus": "前進させました"
          }
        ],
        "dailyExamples": [
          {
            "en": "A good coach helped me forward.",
            "ja": "良いコーチが私を前進させてくれました。",
            "focus": "helped",
            "object": "me",
            "jaFocus": "前進させて"
          },
          {
            "en": "Small wins help you forward.",
            "ja": "小さな成功が前進の助けになります。",
            "focus": "help",
            "object": "you",
            "jaFocus": "助けになります"
          }
        ]
      },
      {
        "phrase": "help back",
        "ja": "戻るのを助ける",
        "image": "戻る動きを助ける。",
        "pattern": "help + 人 + back",
        "examples": [
          {
            "en": "The manager helped him back into the role.",
            "ja": "上司は彼がその役割に戻るのを支援しました。",
            "focus": "helped",
            "object": "him",
            "jaFocus": "支援しました"
          },
          {
            "en": "The guide helped the visitor back to reception.",
            "ja": "案内係は来客が受付へ戻るのを手伝いました。",
            "focus": "helped",
            "object": "the visitor",
            "jaFocus": "手伝いました"
          },
          {
            "en": "The training helped staff back into routine.",
            "ja": "研修はスタッフが通常業務に戻る助けになりました。",
            "focus": "helped",
            "object": "staff",
            "jaFocus": "助けになりました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I helped my friend back home.",
            "ja": "友人が家に戻るのを手伝いました。",
            "focus": "helped",
            "object": "my friend",
            "jaFocus": "手伝いました"
          },
          {
            "en": "Sleep helped me back to normal.",
            "ja": "睡眠で元に戻りました。",
            "focus": "helped",
            "object": "me",
            "jaFocus": "戻りました"
          }
        ]
      }
    ]
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
    "ipa": "/kɔːl/",
    "kana": "コール",
    "syllable": "call",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "相手に声・連絡・判断を向ける",
    "coreDetail": "CALLは、相手へ声をかける・電話する・名前を付ける・判断するイメージです。仕事では連絡、会議、判断、呼び方に広く使います。",
    "coreVisual": {
      "from": [
        "📞 電話",
        "📣 呼びかけ",
        "🏷️ 名前",
        "🧑‍💼 判断",
        "📅 会議"
      ],
      "to": "自分・チーム",
      "label": "コアイメージ"
    },
    "meanings": [
      {
        "id": "phone",
        "title": "① 電話する",
        "pattern": "CALL + 人 / CALL + 番号",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "相手に電話で連絡する。",
        "point": "callは電話する時の基本。call you backもセットで覚える。",
        "examples": [
          {
            "en": "I will call the client this afternoon.",
            "ja": "今日の午後、顧客に電話します。",
            "focus": "call",
            "object": "the client",
            "jaFocus": "電話します"
          },
          {
            "en": "Can you call the supplier now?",
            "ja": "今、仕入先に電話してもらえますか？",
            "focus": "call",
            "object": "the supplier",
            "jaFocus": "電話して"
          },
          {
            "en": "She called me after the meeting.",
            "ja": "彼女は会議後に私に電話しました。",
            "focus": "called",
            "object": "me",
            "jaFocus": "電話しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I called my friend last night.",
            "ja": "昨夜、友人に電話しました。",
            "focus": "called",
            "object": "my friend",
            "jaFocus": "電話しました"
          },
          {
            "en": "Please call me when you arrive.",
            "ja": "着いたら電話してね。",
            "focus": "call",
            "object": "me",
            "jaFocus": "電話して"
          }
        ]
      },
      {
        "id": "name",
        "title": "② 〜と呼ぶ・名付ける",
        "pattern": "CALL + O + C",
        "transitivity": "他動詞",
        "structure": "S + V + O + C",
        "image": "対象に名前や呼び方を付ける。",
        "point": "call A B は「AをBと呼ぶ」。商品名や呼称に使う。",
        "examples": [
          {
            "en": "We call this product the Pro Series.",
            "ja": "私たちはこの製品をPro Seriesと呼んでいます。",
            "focus": "call",
            "object": "this product",
            "jaFocus": "呼んでいます"
          },
          {
            "en": "The client calls this issue a priority.",
            "ja": "顧客はこの問題を優先事項と呼んでいます。",
            "focus": "calls",
            "object": "this issue",
            "jaFocus": "呼んでいます"
          },
          {
            "en": "Everyone calls him the project lead.",
            "ja": "みんな彼をプロジェクトリーダーと呼んでいます。",
            "focus": "calls",
            "object": "him",
            "jaFocus": "呼んでいます"
          }
        ],
        "dailyExamples": [
          {
            "en": "My friends call me Kazu.",
            "ja": "友人は私をカズと呼びます。",
            "focus": "call",
            "object": "me",
            "jaFocus": "呼びます"
          },
          {
            "en": "We call this cat Mimi.",
            "ja": "この猫をミミと呼んでいます。",
            "focus": "call",
            "object": "this cat",
            "jaFocus": "呼んでいます"
          }
        ]
      },
      {
        "id": "contact",
        "title": "③ 連絡する",
        "pattern": "CALL + 人 / CALL about + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "用件について相手に連絡する。",
        "point": "call about は「〜の件で電話する」。",
        "examples": [
          {
            "en": "I called about the delivery schedule.",
            "ja": "納期の件で電話しました。",
            "focus": "called about",
            "object": "the delivery schedule",
            "jaFocus": "電話しました"
          },
          {
            "en": "The customer called about the invoice.",
            "ja": "顧客が請求書の件で電話してきました。",
            "focus": "called about",
            "object": "the invoice",
            "jaFocus": "電話してきました"
          },
          {
            "en": "Please call me about the new order.",
            "ja": "新規注文の件で電話してください。",
            "focus": "call",
            "object": "me",
            "jaFocus": "電話して"
          }
        ],
        "dailyExamples": [
          {
            "en": "I called about the reservation.",
            "ja": "予約の件で電話しました。",
            "focus": "called about",
            "object": "the reservation",
            "jaFocus": "電話しました"
          },
          {
            "en": "She called about the lost bag.",
            "ja": "彼女は紛失したバッグの件で電話しました。",
            "focus": "called about",
            "object": "the lost bag",
            "jaFocus": "電話しました"
          }
        ]
      },
      {
        "id": "schedule",
        "title": "④ 会議を開く・招集する",
        "pattern": "CALL + meeting",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "人を集めて会議を設定する。",
        "point": "call a meeting は仕事で頻出。緊急性がある場合にも使う。",
        "examples": [
          {
            "en": "The manager called a meeting for tomorrow.",
            "ja": "上司が明日の会議を招集しました。",
            "focus": "called",
            "object": "a meeting",
            "jaFocus": "招集しました"
          },
          {
            "en": "We need to call a quick meeting.",
            "ja": "短い会議を開く必要があります。",
            "focus": "call",
            "object": "a quick meeting",
            "jaFocus": "開く"
          },
          {
            "en": "They called an emergency meeting.",
            "ja": "彼らは緊急会議を開きました。",
            "focus": "called",
            "object": "an emergency meeting",
            "jaFocus": "開きました"
          }
        ],
        "dailyExamples": [
          {
            "en": "The coach called a team meeting.",
            "ja": "コーチがチームミーティングを開きました。",
            "focus": "called",
            "object": "a team meeting",
            "jaFocus": "開きました"
          },
          {
            "en": "We called a family meeting.",
            "ja": "家族会議を開きました。",
            "focus": "called",
            "object": "a family meeting",
            "jaFocus": "開きました"
          }
        ]
      },
      {
        "id": "decide",
        "title": "⑤ 判断する・決める",
        "pattern": "CALL + it + C / CALL + decision",
        "transitivity": "他動詞",
        "structure": "S + V + O + C",
        "image": "状況を判断して決める。",
        "point": "make a call と同じく「判断する」。仕事で自然。",
        "examples": [
          {
            "en": "We need to call it a priority.",
            "ja": "それを優先事項と判断する必要があります。",
            "focus": "call",
            "object": "it",
            "jaFocus": "判断する"
          },
          {
            "en": "The director made the final call.",
            "ja": "部長が最終判断をしました。",
            "focus": "made the final call",
            "object": "the final call",
            "jaFocus": "最終判断をしました"
          },
          {
            "en": "I will call the timing after checking the data.",
            "ja": "データ確認後にタイミングを判断します。",
            "focus": "call",
            "object": "the timing",
            "jaFocus": "判断します"
          }
        ],
        "dailyExamples": [
          {
            "en": "You made the right call.",
            "ja": "正しい判断をしたね。",
            "focus": "made the right call",
            "object": "the right call",
            "jaFocus": "判断をした"
          },
          {
            "en": "It was a tough call.",
            "ja": "難しい判断でした。",
            "focus": "call",
            "jaFocus": "判断"
          }
        ]
      },
      {
        "id": "shout",
        "title": "⑥ 呼びかける",
        "pattern": "CALL + 人 / CALL out",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O",
        "image": "声を出して相手に注意を向ける。",
        "point": "call out は大きな声で呼ぶ。",
        "examples": [
          {
            "en": "Please call the next visitor.",
            "ja": "次の来客を呼んでください。",
            "focus": "call",
            "object": "the next visitor",
            "jaFocus": "呼んで"
          },
          {
            "en": "The receptionist called my name.",
            "ja": "受付の人が私の名前を呼びました。",
            "focus": "called",
            "object": "my name",
            "jaFocus": "呼びました"
          },
          {
            "en": "He called the technician to the site.",
            "ja": "彼は技術者を現場に呼びました。",
            "focus": "called",
            "object": "the technician",
            "jaFocus": "呼びました"
          }
        ],
        "dailyExamples": [
          {
            "en": "She called my name from outside.",
            "ja": "彼女が外から私の名前を呼びました。",
            "focus": "called",
            "object": "my name",
            "jaFocus": "呼びました"
          },
          {
            "en": "I called the dog back.",
            "ja": "犬を呼び戻しました。",
            "focus": "called",
            "object": "the dog",
            "jaFocus": "呼び戻しました"
          }
        ]
      },
      {
        "id": "request",
        "title": "⑦ 要求する・求める",
        "pattern": "CALL FOR + 名詞",
        "transitivity": "句動詞",
        "structure": "S + V + O",
        "image": "状況が何かを必要とする。",
        "point": "call for は「必要とする」。ビジネス文書でも使える。",
        "examples": [
          {
            "en": "This issue calls for immediate action.",
            "ja": "この問題は即時対応を必要とします。",
            "focus": "calls for",
            "object": "immediate action",
            "jaFocus": "必要とします"
          },
          {
            "en": "The client request calls for a detailed review.",
            "ja": "顧客要望には詳細確認が必要です。",
            "focus": "calls for",
            "object": "a detailed review",
            "jaFocus": "必要です"
          },
          {
            "en": "The situation calls for a clear explanation.",
            "ja": "この状況では明確な説明が必要です。",
            "focus": "calls for",
            "object": "a clear explanation",
            "jaFocus": "必要です"
          }
        ],
        "dailyExamples": [
          {
            "en": "Rain calls for an umbrella.",
            "ja": "雨なら傘が必要です。",
            "focus": "calls for",
            "object": "an umbrella",
            "jaFocus": "必要です"
          },
          {
            "en": "This recipe calls for fresh tomatoes.",
            "ja": "このレシピには新鮮なトマトが必要です。",
            "focus": "calls for",
            "object": "fresh tomatoes",
            "jaFocus": "必要です"
          }
        ]
      },
      {
        "id": "cancel",
        "title": "⑧ 中止する",
        "pattern": "CALL OFF + 名詞",
        "transitivity": "句動詞",
        "structure": "S + V + O",
        "image": "予定を止める。",
        "point": "call off は会議・イベント・計画の中止に使う。",
        "examples": [
          {
            "en": "We called off the meeting due to the delay.",
            "ja": "遅れのため会議を中止しました。",
            "focus": "called off",
            "object": "the meeting",
            "jaFocus": "中止しました"
          },
          {
            "en": "The client called off the visit.",
            "ja": "顧客は訪問を中止しました。",
            "focus": "called off",
            "object": "the visit",
            "jaFocus": "中止しました"
          },
          {
            "en": "They called off the launch event.",
            "ja": "彼らはローンチイベントを中止しました。",
            "focus": "called off",
            "object": "the launch event",
            "jaFocus": "中止しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "The game was called off because of rain.",
            "ja": "雨で試合は中止になりました。",
            "focus": "called off",
            "jaFocus": "中止"
          },
          {
            "en": "We called off the trip.",
            "ja": "旅行を中止しました。",
            "focus": "called off",
            "object": "the trip",
            "jaFocus": "中止しました"
          }
        ]
      },
      {
        "id": "back",
        "title": "⑨ 折り返し電話する",
        "pattern": "CALL BACK",
        "transitivity": "句動詞",
        "structure": "S + V",
        "image": "再度電話する。",
        "point": "call back は社会人必須。I’ll call you back. は非常に使いやすい。",
        "examples": [
          {
            "en": "I will call you back after the meeting.",
            "ja": "会議後に折り返し電話します。",
            "focus": "call you back",
            "object": "you",
            "jaFocus": "折り返し電話します"
          },
          {
            "en": "Could you ask him to call me back?",
            "ja": "彼に折り返し電話するよう伝えてもらえますか？",
            "focus": "call me back",
            "object": "me",
            "jaFocus": "折り返し電話する"
          },
          {
            "en": "The supplier called back this morning.",
            "ja": "仕入先が今朝折り返し電話してきました。",
            "focus": "called back",
            "jaFocus": "折り返し電話してきました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I missed your call, so I called back.",
            "ja": "電話に出られなかったので折り返しました。",
            "focus": "called back",
            "jaFocus": "折り返しました"
          },
          {
            "en": "Can I call you back later?",
            "ja": "後で折り返してもいい？",
            "focus": "call you back",
            "object": "you",
            "jaFocus": "折り返して"
          }
        ]
      },
      {
        "id": "consider",
        "title": "⑩ 〜とみなす",
        "pattern": "CALL + O + adjective/noun",
        "transitivity": "他動詞",
        "structure": "S + V + O + C",
        "image": "対象をある評価で見る。",
        "point": "call it good, call it risky のように評価を置く。",
        "examples": [
          {
            "en": "We can call this approach practical.",
            "ja": "この方法は実用的だと言えます。",
            "focus": "call",
            "object": "this approach",
            "jaFocus": "言えます"
          },
          {
            "en": "I would call the result acceptable.",
            "ja": "その結果は許容範囲だと思います。",
            "focus": "call",
            "object": "the result",
            "jaFocus": "思います"
          },
          {
            "en": "The team called the proposal realistic.",
            "ja": "チームはその提案を現実的だと評価しました。",
            "focus": "called",
            "object": "the proposal",
            "jaFocus": "評価しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I call this a good start.",
            "ja": "これは良いスタートだと思います。",
            "focus": "call",
            "object": "this",
            "jaFocus": "思います"
          },
          {
            "en": "We can call it a day.",
            "ja": "今日はここまでにしましょう。",
            "focus": "call it a day",
            "object": "it",
            "jaFocus": "ここまでにしましょう"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "call a meeting",
        "ja": "会議を開く",
        "image": "meetingを呼び集める。",
        "pattern": "call + 名詞",
        "examples": [
          {
            "en": "The manager called a meeting at 3 p.m.",
            "ja": "上司が午後3時に会議を開きました。",
            "focus": "called",
            "object": "a meeting",
            "jaFocus": "開きました"
          },
          {
            "en": "We should call a meeting to align internally.",
            "ja": "社内で認識を合わせるため会議を開くべきです。",
            "focus": "call",
            "object": "a meeting",
            "jaFocus": "開く"
          },
          {
            "en": "They called a meeting about the delay.",
            "ja": "遅延について会議を開きました。",
            "focus": "called",
            "object": "a meeting",
            "jaFocus": "開きました"
          }
        ],
        "dailyExamples": [
          {
            "en": "We called a family meeting.",
            "ja": "家族会議を開きました。",
            "focus": "called",
            "object": "a family meeting",
            "jaFocus": "開きました"
          },
          {
            "en": "The coach called a meeting.",
            "ja": "コーチがミーティングを開きました。",
            "focus": "called",
            "object": "a meeting",
            "jaFocus": "開きました"
          }
        ]
      },
      {
        "phrase": "call the client",
        "ja": "顧客に電話する",
        "image": "顧客へ連絡する。",
        "pattern": "call + 人",
        "examples": [
          {
            "en": "I will call the client before lunch.",
            "ja": "昼前に顧客へ電話します。",
            "focus": "call",
            "object": "the client",
            "jaFocus": "電話します"
          },
          {
            "en": "Please call the client about the schedule.",
            "ja": "日程の件で顧客へ電話してください。",
            "focus": "call",
            "object": "the client",
            "jaFocus": "電話して"
          },
          {
            "en": "She called the client to confirm the details.",
            "ja": "詳細確認のため顧客へ電話しました。",
            "focus": "called",
            "object": "the client",
            "jaFocus": "電話しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I called my friend after work.",
            "ja": "仕事後に友人へ電話しました。",
            "focus": "called",
            "object": "my friend",
            "jaFocus": "電話しました"
          },
          {
            "en": "Can you call me tonight?",
            "ja": "今夜電話してくれる？",
            "focus": "call",
            "object": "me",
            "jaFocus": "電話して"
          }
        ]
      },
      {
        "phrase": "call back",
        "ja": "折り返す",
        "image": "再度電話する。",
        "pattern": "call back",
        "examples": [
          {
            "en": "I will call back after checking the file.",
            "ja": "資料確認後に折り返します。",
            "focus": "call back",
            "jaFocus": "折り返します"
          },
          {
            "en": "The customer asked me to call back tomorrow.",
            "ja": "顧客から明日折り返すよう依頼されました。",
            "focus": "call back",
            "jaFocus": "折り返す"
          },
          {
            "en": "Please call back when you are available.",
            "ja": "都合がよい時に折り返してください。",
            "focus": "call back",
            "jaFocus": "折り返して"
          }
        ],
        "dailyExamples": [
          {
            "en": "I called back right away.",
            "ja": "すぐ折り返しました。",
            "focus": "called back",
            "jaFocus": "折り返しました"
          },
          {
            "en": "Can I call back later?",
            "ja": "後で折り返していい？",
            "focus": "call back",
            "jaFocus": "折り返して"
          }
        ]
      },
      {
        "phrase": "make a call",
        "ja": "判断する・電話する",
        "image": "callを名詞で使う。",
        "pattern": "make a call",
        "examples": [
          {
            "en": "We need to make a call today.",
            "ja": "今日判断する必要があります。",
            "focus": "make a call",
            "object": "a call",
            "jaFocus": "判断する"
          },
          {
            "en": "The director made the final call.",
            "ja": "部長が最終判断をしました。",
            "focus": "made the final call",
            "object": "the final call",
            "jaFocus": "判断をしました"
          },
          {
            "en": "I made a quick call to the supplier.",
            "ja": "仕入先に短く電話しました。",
            "focus": "made a quick call",
            "object": "a quick call",
            "jaFocus": "電話しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "You made the right call.",
            "ja": "正しい判断をしたね。",
            "focus": "made the right call",
            "object": "the right call",
            "jaFocus": "判断"
          },
          {
            "en": "I need to make a call.",
            "ja": "電話しないといけません。",
            "focus": "make a call",
            "object": "a call",
            "jaFocus": "電話"
          }
        ]
      },
      {
        "phrase": "conference call",
        "ja": "電話会議",
        "image": "複数人での通話会議。",
        "pattern": "conference call",
        "examples": [
          {
            "en": "We have a conference call at ten.",
            "ja": "10時に電話会議があります。",
            "focus": "conference call",
            "object": "a conference call",
            "jaFocus": "電話会議"
          },
          {
            "en": "The conference call took thirty minutes.",
            "ja": "電話会議は30分かかりました。",
            "focus": "conference call",
            "object": "The conference call",
            "jaFocus": "電話会議"
          },
          {
            "en": "Please join the conference call on time.",
            "ja": "時間通りに電話会議へ参加してください。",
            "focus": "conference call",
            "object": "the conference call",
            "jaFocus": "電話会議"
          }
        ],
        "dailyExamples": [
          {
            "en": "I had a conference call with my family.",
            "ja": "家族とグループ通話をしました。",
            "focus": "conference call",
            "object": "a conference call",
            "jaFocus": "グループ通話"
          },
          {
            "en": "The conference call was fun.",
            "ja": "グループ通話は楽しかったです。",
            "focus": "conference call",
            "object": "The conference call",
            "jaFocus": "グループ通話"
          }
        ]
      },
      {
        "phrase": "sales call",
        "ja": "営業電話",
        "image": "営業目的の電話。",
        "pattern": "sales call",
        "examples": [
          {
            "en": "I made three sales calls this morning.",
            "ja": "今朝営業電話を3件しました。",
            "focus": "sales calls",
            "object": "three sales calls",
            "jaFocus": "営業電話"
          },
          {
            "en": "The sales call went well.",
            "ja": "営業電話はうまくいきました。",
            "focus": "sales call",
            "object": "The sales call",
            "jaFocus": "営業電話"
          },
          {
            "en": "We prepared before the sales call.",
            "ja": "営業電話の前に準備しました。",
            "focus": "sales call",
            "object": "the sales call",
            "jaFocus": "営業電話"
          }
        ],
        "dailyExamples": [
          {
            "en": "I got a sales call yesterday.",
            "ja": "昨日営業電話を受けました。",
            "focus": "sales call",
            "object": "a sales call",
            "jaFocus": "営業電話"
          },
          {
            "en": "The sales call was short.",
            "ja": "営業電話は短かったです。",
            "focus": "sales call",
            "object": "The sales call",
            "jaFocus": "営業電話"
          }
        ]
      },
      {
        "phrase": "call it a day",
        "ja": "今日はここまでにする",
        "image": "一日の作業を終える。",
        "pattern": "call it a day",
        "examples": [
          {
            "en": "Let’s call it a day after this review.",
            "ja": "この確認後、今日はここまでにしましょう。",
            "focus": "call it a day",
            "object": "it",
            "jaFocus": "ここまでにしましょう"
          },
          {
            "en": "We called it a day at six.",
            "ja": "6時に作業を終えました。",
            "focus": "called it a day",
            "object": "it",
            "jaFocus": "作業を終えました"
          },
          {
            "en": "If there are no questions, let’s call it a day.",
            "ja": "質問がなければ今日はここまでにしましょう。",
            "focus": "call it a day",
            "object": "it",
            "jaFocus": "ここまでにしましょう"
          }
        ],
        "dailyExamples": [
          {
            "en": "I’m tired, so let’s call it a day.",
            "ja": "疲れたので今日はここまでにしよう。",
            "focus": "call it a day",
            "object": "it",
            "jaFocus": "ここまでにしよう"
          },
          {
            "en": "We called it a day and went home.",
            "ja": "今日は切り上げて帰りました。",
            "focus": "called it a day",
            "object": "it",
            "jaFocus": "切り上げて"
          }
        ]
      },
      {
        "phrase": "call for action",
        "ja": "対応を求める",
        "image": "行動を必要とする。",
        "pattern": "call for + 名詞",
        "examples": [
          {
            "en": "The issue calls for action today.",
            "ja": "この問題は今日の対応を必要とします。",
            "focus": "calls for",
            "object": "action",
            "jaFocus": "必要とします"
          },
          {
            "en": "The data calls for a quick decision.",
            "ja": "そのデータは迅速な判断を求めています。",
            "focus": "calls for",
            "object": "a quick decision",
            "jaFocus": "求めています"
          },
          {
            "en": "The situation calls for better communication.",
            "ja": "この状況ではより良いコミュニケーションが必要です。",
            "focus": "calls for",
            "object": "better communication",
            "jaFocus": "必要です"
          }
        ],
        "dailyExamples": [
          {
            "en": "Cold weather calls for a coat.",
            "ja": "寒い日はコートが必要です。",
            "focus": "calls for",
            "object": "a coat",
            "jaFocus": "必要です"
          },
          {
            "en": "This cake calls for coffee.",
            "ja": "このケーキにはコーヒーが合います。",
            "focus": "calls for",
            "object": "coffee",
            "jaFocus": "合います"
          }
        ]
      },
      {
        "phrase": "call someone by name",
        "ja": "名前で呼ぶ",
        "image": "呼び名を指定する。",
        "pattern": "call + 人 + by name",
        "examples": [
          {
            "en": "Please call customers by name when possible.",
            "ja": "可能であればお客様を名前で呼んでください。",
            "focus": "call",
            "object": "customers",
            "jaFocus": "呼んで"
          },
          {
            "en": "The manager called each member by name.",
            "ja": "上司は各メンバーを名前で呼びました。",
            "focus": "called",
            "object": "each member",
            "jaFocus": "呼びました"
          },
          {
            "en": "We call our products by model number.",
            "ja": "製品は型番で呼んでいます。",
            "focus": "call",
            "object": "our products",
            "jaFocus": "呼んでいます"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please call me by my nickname.",
            "ja": "ニックネームで呼んでください。",
            "focus": "call",
            "object": "me",
            "jaFocus": "呼んで"
          },
          {
            "en": "She called the dog by name.",
            "ja": "彼女は犬を名前で呼びました。",
            "focus": "called",
            "object": "the dog",
            "jaFocus": "呼びました"
          }
        ]
      },
      {
        "phrase": "client call",
        "ja": "顧客との電話",
        "image": "顧客との通話。",
        "pattern": "client call",
        "examples": [
          {
            "en": "I have a client call at two.",
            "ja": "2時に顧客との電話があります。",
            "focus": "client call",
            "object": "a client call",
            "jaFocus": "顧客との電話"
          },
          {
            "en": "The client call was productive.",
            "ja": "顧客との電話は有意義でした。",
            "focus": "client call",
            "object": "The client call",
            "jaFocus": "顧客との電話"
          },
          {
            "en": "Please send notes after the client call.",
            "ja": "顧客との電話後にメモを送ってください。",
            "focus": "client call",
            "object": "the client call",
            "jaFocus": "顧客との電話"
          }
        ],
        "dailyExamples": [
          {
            "en": "I had a call with my friend.",
            "ja": "友人と電話しました。",
            "focus": "call",
            "object": "a call",
            "jaFocus": "電話"
          },
          {
            "en": "The call was short.",
            "ja": "電話は短かったです。",
            "focus": "call",
            "object": "The call",
            "jaFocus": "電話"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "call back",
        "ja": "折り返す",
        "image": "戻って電話する。",
        "pattern": "call back",
        "examples": [
          {
            "en": "I will call back in ten minutes.",
            "ja": "10分後に折り返します。",
            "focus": "call back",
            "jaFocus": "折り返します"
          },
          {
            "en": "The supplier called back quickly.",
            "ja": "仕入先はすぐ折り返してくれました。",
            "focus": "called back",
            "jaFocus": "折り返して"
          },
          {
            "en": "Please call me back after the meeting.",
            "ja": "会議後に折り返してください。",
            "focus": "call me back",
            "object": "me",
            "jaFocus": "折り返して"
          }
        ],
        "dailyExamples": [
          {
            "en": "I called back later.",
            "ja": "後で折り返しました。",
            "focus": "called back",
            "jaFocus": "折り返しました"
          },
          {
            "en": "Can you call back tonight?",
            "ja": "今夜折り返せる？",
            "focus": "call back",
            "jaFocus": "折り返せる"
          }
        ]
      },
      {
        "phrase": "call off",
        "ja": "中止する",
        "image": "予定から外す。",
        "pattern": "call off + 名詞",
        "examples": [
          {
            "en": "We called off the meeting.",
            "ja": "会議を中止しました。",
            "focus": "called off",
            "object": "the meeting",
            "jaFocus": "中止しました"
          },
          {
            "en": "The client called off the visit.",
            "ja": "顧客は訪問を中止しました。",
            "focus": "called off",
            "object": "the visit",
            "jaFocus": "中止しました"
          },
          {
            "en": "They called off the campaign.",
            "ja": "彼らはキャンペーンを中止しました。",
            "focus": "called off",
            "object": "the campaign",
            "jaFocus": "中止しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "The game was called off.",
            "ja": "試合は中止になりました。",
            "focus": "called off",
            "jaFocus": "中止"
          },
          {
            "en": "We called off the picnic.",
            "ja": "ピクニックを中止しました。",
            "focus": "called off",
            "object": "the picnic",
            "jaFocus": "中止しました"
          }
        ]
      },
      {
        "phrase": "call for",
        "ja": "必要とする",
        "image": "外に向けて求める。",
        "pattern": "call for + 名詞",
        "examples": [
          {
            "en": "This problem calls for action.",
            "ja": "この問題は対応を必要とします。",
            "focus": "calls for",
            "object": "action",
            "jaFocus": "必要とします"
          },
          {
            "en": "The proposal calls for more data.",
            "ja": "その提案にはさらなるデータが必要です。",
            "focus": "calls for",
            "object": "more data",
            "jaFocus": "必要です"
          },
          {
            "en": "The situation calls for teamwork.",
            "ja": "この状況ではチームワークが必要です。",
            "focus": "calls for",
            "object": "teamwork",
            "jaFocus": "必要です"
          }
        ],
        "dailyExamples": [
          {
            "en": "Rain calls for boots.",
            "ja": "雨ならブーツが必要です。",
            "focus": "calls for",
            "object": "boots",
            "jaFocus": "必要です"
          },
          {
            "en": "This recipe calls for butter.",
            "ja": "このレシピにはバターが必要です。",
            "focus": "calls for",
            "object": "butter",
            "jaFocus": "必要です"
          }
        ]
      },
      {
        "phrase": "call out",
        "ja": "呼び出す・指摘する",
        "image": "声に出して外へ出す。",
        "pattern": "call out + 名詞",
        "examples": [
          {
            "en": "The manager called out the key issue.",
            "ja": "上司は重要な問題点を指摘しました。",
            "focus": "called out",
            "object": "the key issue",
            "jaFocus": "指摘しました"
          },
          {
            "en": "Please call out any risks early.",
            "ja": "リスクがあれば早めに指摘してください。",
            "focus": "call out",
            "object": "any risks",
            "jaFocus": "指摘して"
          },
          {
            "en": "He called out my name at reception.",
            "ja": "受付で彼が私の名前を呼びました。",
            "focus": "called out",
            "object": "my name",
            "jaFocus": "呼びました"
          }
        ],
        "dailyExamples": [
          {
            "en": "She called out from the kitchen.",
            "ja": "彼女はキッチンから声をかけました。",
            "focus": "called out",
            "jaFocus": "声をかけました"
          },
          {
            "en": "I called out his name.",
            "ja": "彼の名前を呼びました。",
            "focus": "called out",
            "object": "his name",
            "jaFocus": "呼びました"
          }
        ]
      },
      {
        "phrase": "call in",
        "ja": "呼び入れる・電話で参加する",
        "image": "内側へ呼ぶ。",
        "pattern": "call in + 人",
        "examples": [
          {
            "en": "We called in an expert for the issue.",
            "ja": "その問題に専門家を呼びました。",
            "focus": "called in",
            "object": "an expert",
            "jaFocus": "呼びました"
          },
          {
            "en": "She called in to the meeting remotely.",
            "ja": "彼女はリモートで会議に電話参加しました。",
            "focus": "called in",
            "jaFocus": "電話参加しました"
          },
          {
            "en": "The team called in support.",
            "ja": "チームはサポート担当を呼びました。",
            "focus": "called in",
            "object": "support",
            "jaFocus": "呼びました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I called in sick today.",
            "ja": "今日は病欠の連絡をしました。",
            "focus": "called in sick",
            "jaFocus": "病欠の連絡"
          },
          {
            "en": "He called in from home.",
            "ja": "彼は家から電話参加しました。",
            "focus": "called in",
            "jaFocus": "電話参加しました"
          }
        ]
      },
      {
        "phrase": "call on",
        "ja": "頼む・指名する",
        "image": "相手に向けて求める。",
        "pattern": "call on + 人",
        "examples": [
          {
            "en": "The manager called on me to explain the data.",
            "ja": "上司は私にデータ説明を求めました。",
            "focus": "called on",
            "object": "me",
            "jaFocus": "求めました"
          },
          {
            "en": "We called on the team to act quickly.",
            "ja": "チームに迅速な対応を求めました。",
            "focus": "called on",
            "object": "the team",
            "jaFocus": "求めました"
          },
          {
            "en": "The trainer called on participants for questions.",
            "ja": "講師は参加者に質問を促しました。",
            "focus": "called on",
            "object": "participants",
            "jaFocus": "促しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "The teacher called on me.",
            "ja": "先生に指名されました。",
            "focus": "called on",
            "object": "me",
            "jaFocus": "指名されました"
          },
          {
            "en": "She called on her friend for help.",
            "ja": "彼女は友人に助けを求めました。",
            "focus": "called on",
            "object": "her friend",
            "jaFocus": "求めました"
          }
        ]
      },
      {
        "phrase": "call up",
        "ja": "電話する・思い出させる",
        "image": "上に呼び出す。",
        "pattern": "call up + 人/記憶",
        "examples": [
          {
            "en": "I called up the vendor to confirm the price.",
            "ja": "価格確認のため業者に電話しました。",
            "focus": "called up",
            "object": "the vendor",
            "jaFocus": "電話しました"
          },
          {
            "en": "The issue called up an old concern.",
            "ja": "その問題は以前の懸念を思い出させました。",
            "focus": "called up",
            "object": "an old concern",
            "jaFocus": "思い出させました"
          },
          {
            "en": "Can you call up the customer record?",
            "ja": "顧客情報を呼び出せますか？",
            "focus": "call up",
            "object": "the customer record",
            "jaFocus": "呼び出せますか"
          }
        ],
        "dailyExamples": [
          {
            "en": "I called up my cousin.",
            "ja": "いとこに電話しました。",
            "focus": "called up",
            "object": "my cousin",
            "jaFocus": "電話しました"
          },
          {
            "en": "This song calls up old memories.",
            "ja": "この曲は昔の記憶を呼び起こします。",
            "focus": "calls up",
            "object": "old memories",
            "jaFocus": "呼び起こします"
          }
        ]
      },
      {
        "phrase": "call around",
        "ja": "何件か電話する",
        "image": "周囲へ電話して回る。",
        "pattern": "call around",
        "examples": [
          {
            "en": "I called around to check stock.",
            "ja": "在庫確認のため何件か電話しました。",
            "focus": "called around",
            "jaFocus": "電話しました"
          },
          {
            "en": "We called around for delivery options.",
            "ja": "配送方法について何社かに電話しました。",
            "focus": "called around",
            "jaFocus": "電話しました"
          },
          {
            "en": "She called around to compare prices.",
            "ja": "価格比較のため数社に電話しました。",
            "focus": "called around",
            "jaFocus": "電話しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I called around for a hotel.",
            "ja": "ホテルを探すため何件か電話しました。",
            "focus": "called around",
            "jaFocus": "電話しました"
          },
          {
            "en": "We called around before the trip.",
            "ja": "旅行前に何件か電話しました。",
            "focus": "called around",
            "jaFocus": "電話しました"
          }
        ]
      },
      {
        "phrase": "call through",
        "ja": "電話をつなぐ",
        "image": "通話を通す。",
        "pattern": "call through",
        "examples": [
          {
            "en": "Reception called the visitor through to sales.",
            "ja": "受付が来客を営業部につなぎました。",
            "focus": "called",
            "object": "the visitor",
            "jaFocus": "つなぎました"
          },
          {
            "en": "Please call him through to my extension.",
            "ja": "彼を私の内線につないでください。",
            "focus": "call",
            "object": "him",
            "jaFocus": "つないで"
          },
          {
            "en": "The operator called the client through.",
            "ja": "オペレーターが顧客をつなぎました。",
            "focus": "called",
            "object": "the client",
            "jaFocus": "つなぎました"
          }
        ],
        "dailyExamples": [
          {
            "en": "The hotel called me through to the room.",
            "ja": "ホテルが部屋につないでくれました。",
            "focus": "called",
            "object": "me",
            "jaFocus": "つないで"
          },
          {
            "en": "Can you call me through?",
            "ja": "つないでもらえますか？",
            "focus": "call",
            "object": "me",
            "jaFocus": "つないで"
          }
        ]
      },
      {
        "phrase": "call together",
        "ja": "集める",
        "image": "一緒に呼び集める。",
        "pattern": "call together + 人",
        "examples": [
          {
            "en": "The leader called the team together.",
            "ja": "リーダーがチームを集めました。",
            "focus": "called",
            "object": "the team",
            "jaFocus": "集めました"
          },
          {
            "en": "We called everyone together for an update.",
            "ja": "状況共有のため全員を集めました。",
            "focus": "called",
            "object": "everyone",
            "jaFocus": "集めました"
          },
          {
            "en": "The manager called the members together quickly.",
            "ja": "上司はメンバーをすぐに集めました。",
            "focus": "called",
            "object": "the members",
            "jaFocus": "集めました"
          }
        ],
        "dailyExamples": [
          {
            "en": "We called the family together.",
            "ja": "家族を集めました。",
            "focus": "called",
            "object": "the family",
            "jaFocus": "集めました"
          },
          {
            "en": "She called her friends together.",
            "ja": "彼女は友人を集めました。",
            "focus": "called",
            "object": "her friends",
            "jaFocus": "集めました"
          }
        ]
      }
    ]
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
    "ipa": "/tɜːrn/",
    "kana": "ターン",
    "syllable": "turn",
    "transitivity": "自動詞・他動詞",
    "importance": "★★★★★ 超重要",
    "core": "向き・状態・流れが変わる",
    "coreDetail": "TURNは、物理的な向きだけでなく、状況・判断・役割・結果が別の方向へ変わるイメージです。",
    "coreVisual": {
      "from": [
        "↩️ 向き",
        "🔄 変化",
        "💡 状況",
        "📄 提出",
        "🚪 切替"
      ],
      "to": "自分・チーム",
      "label": "コアイメージ"
    },
    "meanings": [
      {
        "id": "change",
        "title": "1 変わる・変える",
        "pattern": "TURN + 形容詞 / TURN + O + C",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + C",
        "image": "向きや状態が変わる。",
        "point": "向きや状態が変わる。",
        "examples": [
          {
            "en": "The situation turned difficult.",
            "ja": "状況は難しくなりました。",
            "focus": "turned",
            "object": "difficult",
            "jaFocus": "難しくなりました"
          },
          {
            "en": "We turned the idea into a proposal.",
            "ja": "そのアイデアを提案書にしました。",
            "focus": "turned",
            "object": "the idea",
            "jaFocus": "しました"
          },
          {
            "en": "The discussion turned positive.",
            "ja": "議論は前向きになりました。",
            "focus": "turned",
            "object": "positive",
            "jaFocus": "前向きになりました"
          }
        ],
        "dailyExamples": [
          {
            "en": "The sky turned dark.",
            "ja": "空が暗くなりました。",
            "focus": "turned",
            "object": "dark",
            "jaFocus": "暗くなりました"
          },
          {
            "en": "The leaves turned red.",
            "ja": "葉が赤くなりました。",
            "focus": "turned",
            "object": "red",
            "jaFocus": "赤くなりました"
          }
        ]
      },
      {
        "id": "direction",
        "title": "2 向きを変える",
        "pattern": "TURN + direction",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V",
        "image": "向きが変わる。",
        "point": "向きが変わる。",
        "examples": [
          {
            "en": "Turn left at the reception desk.",
            "ja": "受付で左に曲がってください。",
            "focus": "Turn",
            "jaFocus": "曲がって"
          },
          {
            "en": "The camera turns toward the entrance.",
            "ja": "カメラは入口の方を向きます。",
            "focus": "turns",
            "jaFocus": "向きます"
          },
          {
            "en": "Please turn the screen toward the client.",
            "ja": "画面を顧客の方へ向けてください。",
            "focus": "turn",
            "object": "the screen",
            "jaFocus": "向けて"
          }
        ],
        "dailyExamples": [
          {
            "en": "Turn right at the corner.",
            "ja": "角を右に曲がって。",
            "focus": "Turn",
            "jaFocus": "曲がって"
          },
          {
            "en": "The car turned around.",
            "ja": "車は方向転換しました。",
            "focus": "turned around",
            "jaFocus": "方向転換しました"
          }
        ]
      },
      {
        "id": "operate",
        "title": "3 回す・操作する",
        "pattern": "TURN + O",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + O",
        "image": "スイッチや機器を操作する。",
        "point": "スイッチや機器を操作する。",
        "examples": [
          {
            "en": "Please turn on the projector.",
            "ja": "プロジェクターをつけてください。",
            "focus": "turn on",
            "object": "the projector",
            "jaFocus": "つけて"
          },
          {
            "en": "Turn off the lights after the meeting.",
            "ja": "会議後に照明を消してください。",
            "focus": "Turn off",
            "object": "the lights",
            "jaFocus": "消して"
          },
          {
            "en": "I turned down the volume during the call.",
            "ja": "通話中に音量を下げました。",
            "focus": "turned down",
            "object": "the volume",
            "jaFocus": "下げました"
          }
        ],
        "dailyExamples": [
          {
            "en": "Turn on the TV.",
            "ja": "テレビをつけて。",
            "focus": "Turn on",
            "object": "the TV",
            "jaFocus": "つけて"
          },
          {
            "en": "I turned off my phone.",
            "ja": "スマホの電源を切りました。",
            "focus": "turned off",
            "object": "my phone",
            "jaFocus": "切りました"
          }
        ]
      },
      {
        "id": "become-age",
        "title": "4 〜歳になる",
        "pattern": "TURN + 年齢",
        "transitivity": "自動詞",
        "structure": "S + V + C",
        "image": "年齢や時期が変わる。",
        "point": "年齢や時期が変わる。",
        "examples": [
          {
            "en": "The company turns ten this year.",
            "ja": "会社は今年10周年を迎えます。",
            "focus": "turns",
            "object": "ten",
            "jaFocus": "迎えます"
          },
          {
            "en": "Our service turns one next month.",
            "ja": "私たちのサービスは来月1周年を迎えます。",
            "focus": "turns",
            "object": "one",
            "jaFocus": "迎えます"
          },
          {
            "en": "The project turned three years old.",
            "ja": "そのプロジェクトは3年目を迎えました。",
            "focus": "turned",
            "object": "three years old",
            "jaFocus": "迎えました"
          }
        ],
        "dailyExamples": [
          {
            "en": "My son turns five next week.",
            "ja": "息子は来週5歳になります。",
            "focus": "turns",
            "object": "five",
            "jaFocus": "なります"
          },
          {
            "en": "I turned thirty last year.",
            "ja": "去年30歳になりました。",
            "focus": "turned",
            "object": "thirty",
            "jaFocus": "なりました"
          }
        ]
      },
      {
        "id": "attention",
        "title": "5 注意を向ける",
        "pattern": "TURN TO + 名詞",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + O",
        "image": "注意や行動の向きを変える。",
        "point": "注意や行動の向きを変える。",
        "examples": [
          {
            "en": "Let’s turn to the next topic.",
            "ja": "次の議題に移りましょう。",
            "focus": "turn to",
            "object": "the next topic",
            "jaFocus": "移りましょう"
          },
          {
            "en": "We turned to the data for answers.",
            "ja": "答えを求めてデータに目を向けました。",
            "focus": "turned to",
            "object": "the data",
            "jaFocus": "目を向けました"
          },
          {
            "en": "The client turned to us for support.",
            "ja": "顧客は支援を求めて私たちに頼りました。",
            "focus": "turned to",
            "object": "us",
            "jaFocus": "頼りました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I turned to my friend for advice.",
            "ja": "友人に助言を求めました。",
            "focus": "turned to",
            "object": "my friend",
            "jaFocus": "求めました"
          },
          {
            "en": "She turned to music when stressed.",
            "ja": "彼女はストレス時に音楽に頼りました。",
            "focus": "turned to",
            "object": "music",
            "jaFocus": "頼りました"
          }
        ]
      },
      {
        "id": "result",
        "title": "6 結果になる",
        "pattern": "TURN OUT + C",
        "transitivity": "自動詞",
        "structure": "S + V + C",
        "image": "最終的にそうなる。",
        "point": "最終的にそうなる。",
        "examples": [
          {
            "en": "The meeting turned out well.",
            "ja": "会議はうまくいきました。",
            "focus": "turned out",
            "object": "well",
            "jaFocus": "うまくいきました"
          },
          {
            "en": "The issue turned out to be minor.",
            "ja": "その問題は軽微だと分かりました。",
            "focus": "turned out",
            "object": "to be minor",
            "jaFocus": "分かりました"
          },
          {
            "en": "The new process turned out effective.",
            "ja": "新しい手順は効果的でした。",
            "focus": "turned out",
            "object": "effective",
            "jaFocus": "効果的でした"
          }
        ],
        "dailyExamples": [
          {
            "en": "The movie turned out great.",
            "ja": "映画はとても良かったです。",
            "focus": "turned out",
            "object": "great",
            "jaFocus": "良かった"
          },
          {
            "en": "The cake turned out well.",
            "ja": "ケーキはうまくできました。",
            "focus": "turned out",
            "object": "well",
            "jaFocus": "うまくできました"
          }
        ]
      },
      {
        "id": "submit",
        "title": "7 提出する",
        "pattern": "TURN IN + 名詞",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + O",
        "image": "提出物を出す。",
        "point": "提出物を出す。",
        "examples": [
          {
            "en": "Please turn in the report by Friday.",
            "ja": "金曜日までに報告書を提出してください。",
            "focus": "turn in",
            "object": "the report",
            "jaFocus": "提出して"
          },
          {
            "en": "I turned in the expense form.",
            "ja": "経費申請書を提出しました。",
            "focus": "turned in",
            "object": "the expense form",
            "jaFocus": "提出しました"
          },
          {
            "en": "She turned in the final draft.",
            "ja": "彼女は最終案を提出しました。",
            "focus": "turned in",
            "object": "the final draft",
            "jaFocus": "提出しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I turned in my homework.",
            "ja": "宿題を提出しました。",
            "focus": "turned in",
            "object": "my homework",
            "jaFocus": "提出しました"
          },
          {
            "en": "He turned in the application.",
            "ja": "彼は申込書を提出しました。",
            "focus": "turned in",
            "object": "the application",
            "jaFocus": "提出しました"
          }
        ]
      },
      {
        "id": "reject",
        "title": "8 断る",
        "pattern": "TURN DOWN + 名詞",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + O",
        "image": "提案や依頼を下げて拒否する。",
        "point": "提案や依頼を下げて拒否する。",
        "examples": [
          {
            "en": "We turned down the offer.",
            "ja": "その提案を断りました。",
            "focus": "turned down",
            "object": "the offer",
            "jaFocus": "断りました"
          },
          {
            "en": "The client turned down the first proposal.",
            "ja": "顧客は最初の提案を断りました。",
            "focus": "turned down",
            "object": "the first proposal",
            "jaFocus": "断りました"
          },
          {
            "en": "I had to turn down the request.",
            "ja": "その依頼を断らざるを得ませんでした。",
            "focus": "turn down",
            "object": "the request",
            "jaFocus": "断らざるを得ませんでした"
          }
        ],
        "dailyExamples": [
          {
            "en": "She turned down the invitation.",
            "ja": "彼女は招待を断りました。",
            "focus": "turned down",
            "object": "the invitation",
            "jaFocus": "断りました"
          },
          {
            "en": "I turned down the volume.",
            "ja": "音量を下げました。",
            "focus": "turned down",
            "object": "the volume",
            "jaFocus": "下げました"
          }
        ]
      },
      {
        "id": "handover",
        "title": "9 引き継ぐ・渡す",
        "pattern": "TURN OVER + 名詞",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + O",
        "image": "責任や資料を渡す。",
        "point": "責任や資料を渡す。",
        "examples": [
          {
            "en": "I turned over the documents to accounting.",
            "ja": "書類を経理に引き渡しました。",
            "focus": "turned over",
            "object": "the documents",
            "jaFocus": "引き渡しました"
          },
          {
            "en": "The team turned over the project to support.",
            "ja": "チームはプロジェクトをサポート部門に引き継ぎました。",
            "focus": "turned over",
            "object": "the project",
            "jaFocus": "引き継ぎました"
          },
          {
            "en": "Please turn over the files after review.",
            "ja": "確認後にファイルを引き渡してください。",
            "focus": "turn over",
            "object": "the files",
            "jaFocus": "引き渡して"
          }
        ],
        "dailyExamples": [
          {
            "en": "He turned over the key.",
            "ja": "彼は鍵を渡しました。",
            "focus": "turned over",
            "object": "the key",
            "jaFocus": "渡しました"
          },
          {
            "en": "Turn over the page.",
            "ja": "ページをめくって。",
            "focus": "Turn over",
            "object": "the page",
            "jaFocus": "めくって"
          }
        ]
      },
      {
        "id": "take-turn",
        "title": "10 順番が来る",
        "pattern": "TAKE TURNS / TURN",
        "transitivity": "名詞的表現",
        "structure": "S + V",
        "image": "交代で行う。",
        "point": "交代で行う。",
        "examples": [
          {
            "en": "We take turns presenting updates.",
            "ja": "私たちは交代で進捗を発表します。",
            "focus": "take turns",
            "object": "turns",
            "jaFocus": "交代で"
          },
          {
            "en": "It is your turn to lead the meeting.",
            "ja": "次はあなたが会議を進行する番です。",
            "focus": "turn",
            "object": "your turn",
            "jaFocus": "番"
          },
          {
            "en": "Team members take turns checking the inbox.",
            "ja": "メンバーは交代で受信箱を確認します。",
            "focus": "take turns",
            "object": "turns",
            "jaFocus": "交代で"
          }
        ],
        "dailyExamples": [
          {
            "en": "It is my turn.",
            "ja": "私の番です。",
            "focus": "turn",
            "object": "my turn",
            "jaFocus": "番"
          },
          {
            "en": "We take turns cooking.",
            "ja": "私たちは交代で料理します。",
            "focus": "take turns",
            "object": "turns",
            "jaFocus": "交代で"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "turn on the projector",
        "ja": "プロジェクターをつける",
        "image": "turn on the projector のまとまりで仕事に使う表現。",
        "pattern": "turn on + 名詞",
        "examples": [
          {
            "en": "We need to turn on the projector before the meeting.",
            "ja": "会議前に「プロジェクターをつける」必要があります。",
            "focus": "turn on the projector",
            "jaFocus": "プロジェクターをつける"
          },
          {
            "en": "Please turn on the projector by the end of the day.",
            "ja": "今日中に「プロジェクターをつける」してください。",
            "focus": "turn on the projector",
            "jaFocus": "プロジェクターをつける"
          },
          {
            "en": "I will turn on the projector and share the update.",
            "ja": "私が「プロジェクターをつける」して進捗を共有します。",
            "focus": "turn on the projector",
            "jaFocus": "プロジェクターをつける"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn on the projector on weekends.",
            "ja": "週末によく「プロジェクターをつける」します。",
            "focus": "turn on the projector",
            "jaFocus": "プロジェクターをつける"
          },
          {
            "en": "It is useful to turn on the projector.",
            "ja": "「プロジェクターをつける」できると便利です。",
            "focus": "turn on the projector",
            "jaFocus": "プロジェクターをつける"
          }
        ]
      },
      {
        "phrase": "turn off the lights",
        "ja": "照明を消す",
        "image": "turn off the lights のまとまりで仕事に使う表現。",
        "pattern": "turn off + 名詞",
        "examples": [
          {
            "en": "We need to turn off the lights before the meeting.",
            "ja": "会議前に「照明を消す」必要があります。",
            "focus": "turn off the lights",
            "jaFocus": "照明を消す"
          },
          {
            "en": "Please turn off the lights by the end of the day.",
            "ja": "今日中に「照明を消す」してください。",
            "focus": "turn off the lights",
            "jaFocus": "照明を消す"
          },
          {
            "en": "I will turn off the lights and share the update.",
            "ja": "私が「照明を消す」して進捗を共有します。",
            "focus": "turn off the lights",
            "jaFocus": "照明を消す"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn off the lights on weekends.",
            "ja": "週末によく「照明を消す」します。",
            "focus": "turn off the lights",
            "jaFocus": "照明を消す"
          },
          {
            "en": "It is useful to turn off the lights.",
            "ja": "「照明を消す」できると便利です。",
            "focus": "turn off the lights",
            "jaFocus": "照明を消す"
          }
        ]
      },
      {
        "phrase": "turn down the offer",
        "ja": "提案を断る",
        "image": "turn down the offer のまとまりで仕事に使う表現。",
        "pattern": "turn down + 名詞",
        "examples": [
          {
            "en": "We need to turn down the offer before the meeting.",
            "ja": "会議前に「提案を断る」必要があります。",
            "focus": "turn down the offer",
            "jaFocus": "提案を断る"
          },
          {
            "en": "Please turn down the offer by the end of the day.",
            "ja": "今日中に「提案を断る」してください。",
            "focus": "turn down the offer",
            "jaFocus": "提案を断る"
          },
          {
            "en": "I will turn down the offer and share the update.",
            "ja": "私が「提案を断る」して進捗を共有します。",
            "focus": "turn down the offer",
            "jaFocus": "提案を断る"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn down the offer on weekends.",
            "ja": "週末によく「提案を断る」します。",
            "focus": "turn down the offer",
            "jaFocus": "提案を断る"
          },
          {
            "en": "It is useful to turn down the offer.",
            "ja": "「提案を断る」できると便利です。",
            "focus": "turn down the offer",
            "jaFocus": "提案を断る"
          }
        ]
      },
      {
        "phrase": "turn in the report",
        "ja": "報告書を提出する",
        "image": "turn in the report のまとまりで仕事に使う表現。",
        "pattern": "turn in + 名詞",
        "examples": [
          {
            "en": "We need to turn in the report before the meeting.",
            "ja": "会議前に「報告書を提出する」必要があります。",
            "focus": "turn in the report",
            "jaFocus": "報告書を提出する"
          },
          {
            "en": "Please turn in the report by the end of the day.",
            "ja": "今日中に「報告書を提出する」してください。",
            "focus": "turn in the report",
            "jaFocus": "報告書を提出する"
          },
          {
            "en": "I will turn in the report and share the update.",
            "ja": "私が「報告書を提出する」して進捗を共有します。",
            "focus": "turn in the report",
            "jaFocus": "報告書を提出する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn in the report on weekends.",
            "ja": "週末によく「報告書を提出する」します。",
            "focus": "turn in the report",
            "jaFocus": "報告書を提出する"
          },
          {
            "en": "It is useful to turn in the report.",
            "ja": "「報告書を提出する」できると便利です。",
            "focus": "turn in the report",
            "jaFocus": "報告書を提出する"
          }
        ]
      },
      {
        "phrase": "turn to the next topic",
        "ja": "次の議題に移る",
        "image": "turn to the next topic のまとまりで仕事に使う表現。",
        "pattern": "turn to + 名詞",
        "examples": [
          {
            "en": "We need to turn to the next topic before the meeting.",
            "ja": "会議前に「次の議題に移る」必要があります。",
            "focus": "turn to the next topic",
            "jaFocus": "次の議題に移る"
          },
          {
            "en": "Please turn to the next topic by the end of the day.",
            "ja": "今日中に「次の議題に移る」してください。",
            "focus": "turn to the next topic",
            "jaFocus": "次の議題に移る"
          },
          {
            "en": "I will turn to the next topic and share the update.",
            "ja": "私が「次の議題に移る」して進捗を共有します。",
            "focus": "turn to the next topic",
            "jaFocus": "次の議題に移る"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn to the next topic on weekends.",
            "ja": "週末によく「次の議題に移る」します。",
            "focus": "turn to the next topic",
            "jaFocus": "次の議題に移る"
          },
          {
            "en": "It is useful to turn to the next topic.",
            "ja": "「次の議題に移る」できると便利です。",
            "focus": "turn to the next topic",
            "jaFocus": "次の議題に移る"
          }
        ]
      },
      {
        "phrase": "turn out well",
        "ja": "うまくいく",
        "image": "turn out well のまとまりで仕事に使う表現。",
        "pattern": "turn out + 副詞",
        "examples": [
          {
            "en": "We need to turn out well before the meeting.",
            "ja": "会議前に「うまくいく」必要があります。",
            "focus": "turn out well",
            "jaFocus": "うまくいく"
          },
          {
            "en": "Please turn out well by the end of the day.",
            "ja": "今日中に「うまくいく」してください。",
            "focus": "turn out well",
            "jaFocus": "うまくいく"
          },
          {
            "en": "I will turn out well and share the update.",
            "ja": "私が「うまくいく」して進捗を共有します。",
            "focus": "turn out well",
            "jaFocus": "うまくいく"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn out well on weekends.",
            "ja": "週末によく「うまくいく」します。",
            "focus": "turn out well",
            "jaFocus": "うまくいく"
          },
          {
            "en": "It is useful to turn out well.",
            "ja": "「うまくいく」できると便利です。",
            "focus": "turn out well",
            "jaFocus": "うまくいく"
          }
        ]
      },
      {
        "phrase": "take turns",
        "ja": "交代でする",
        "image": "take turns のまとまりで仕事に使う表現。",
        "pattern": "take turns",
        "examples": [
          {
            "en": "We need to take turns before the meeting.",
            "ja": "会議前に「交代でする」必要があります。",
            "focus": "take turns",
            "jaFocus": "交代でする"
          },
          {
            "en": "Please take turns by the end of the day.",
            "ja": "今日中に「交代でする」してください。",
            "focus": "take turns",
            "jaFocus": "交代でする"
          },
          {
            "en": "I will take turns and share the update.",
            "ja": "私が「交代でする」して進捗を共有します。",
            "focus": "take turns",
            "jaFocus": "交代でする"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often take turns on weekends.",
            "ja": "週末によく「交代でする」します。",
            "focus": "take turns",
            "jaFocus": "交代でする"
          },
          {
            "en": "It is useful to take turns.",
            "ja": "「交代でする」できると便利です。",
            "focus": "take turns",
            "jaFocus": "交代でする"
          }
        ]
      },
      {
        "phrase": "turn into a proposal",
        "ja": "提案に変える",
        "image": "turn into a proposal のまとまりで仕事に使う表現。",
        "pattern": "turn into + 名詞",
        "examples": [
          {
            "en": "We need to turn into a proposal before the meeting.",
            "ja": "会議前に「提案に変える」必要があります。",
            "focus": "turn into a proposal",
            "jaFocus": "提案に変える"
          },
          {
            "en": "Please turn into a proposal by the end of the day.",
            "ja": "今日中に「提案に変える」してください。",
            "focus": "turn into a proposal",
            "jaFocus": "提案に変える"
          },
          {
            "en": "I will turn into a proposal and share the update.",
            "ja": "私が「提案に変える」して進捗を共有します。",
            "focus": "turn into a proposal",
            "jaFocus": "提案に変える"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn into a proposal on weekends.",
            "ja": "週末によく「提案に変える」します。",
            "focus": "turn into a proposal",
            "jaFocus": "提案に変える"
          },
          {
            "en": "It is useful to turn into a proposal.",
            "ja": "「提案に変える」できると便利です。",
            "focus": "turn into a proposal",
            "jaFocus": "提案に変える"
          }
        ]
      },
      {
        "phrase": "turn over the files",
        "ja": "ファイルを引き渡す",
        "image": "turn over the files のまとまりで仕事に使う表現。",
        "pattern": "turn over + 名詞",
        "examples": [
          {
            "en": "We need to turn over the files before the meeting.",
            "ja": "会議前に「ファイルを引き渡す」必要があります。",
            "focus": "turn over the files",
            "jaFocus": "ファイルを引き渡す"
          },
          {
            "en": "Please turn over the files by the end of the day.",
            "ja": "今日中に「ファイルを引き渡す」してください。",
            "focus": "turn over the files",
            "jaFocus": "ファイルを引き渡す"
          },
          {
            "en": "I will turn over the files and share the update.",
            "ja": "私が「ファイルを引き渡す」して進捗を共有します。",
            "focus": "turn over the files",
            "jaFocus": "ファイルを引き渡す"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn over the files on weekends.",
            "ja": "週末によく「ファイルを引き渡す」します。",
            "focus": "turn over the files",
            "jaFocus": "ファイルを引き渡す"
          },
          {
            "en": "It is useful to turn over the files.",
            "ja": "「ファイルを引き渡す」できると便利です。",
            "focus": "turn over the files",
            "jaFocus": "ファイルを引き渡す"
          }
        ]
      },
      {
        "phrase": "turn around the project",
        "ja": "プロジェクトを立て直す",
        "image": "turn around the project のまとまりで仕事に使う表現。",
        "pattern": "turn around + 名詞",
        "examples": [
          {
            "en": "We need to turn around the project before the meeting.",
            "ja": "会議前に「プロジェクトを立て直す」必要があります。",
            "focus": "turn around the project",
            "jaFocus": "プロジェクトを立て直す"
          },
          {
            "en": "Please turn around the project by the end of the day.",
            "ja": "今日中に「プロジェクトを立て直す」してください。",
            "focus": "turn around the project",
            "jaFocus": "プロジェクトを立て直す"
          },
          {
            "en": "I will turn around the project and share the update.",
            "ja": "私が「プロジェクトを立て直す」して進捗を共有します。",
            "focus": "turn around the project",
            "jaFocus": "プロジェクトを立て直す"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn around the project on weekends.",
            "ja": "週末によく「プロジェクトを立て直す」します。",
            "focus": "turn around the project",
            "jaFocus": "プロジェクトを立て直す"
          },
          {
            "en": "It is useful to turn around the project.",
            "ja": "「プロジェクトを立て直す」できると便利です。",
            "focus": "turn around the project",
            "jaFocus": "プロジェクトを立て直す"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "turn on",
        "ja": "つける",
        "image": "turn on のまとまりで仕事に使う表現。",
        "pattern": "turn on + 名詞",
        "examples": [
          {
            "en": "We need to turn on before the meeting.",
            "ja": "会議前に「つける」必要があります。",
            "focus": "turn on",
            "jaFocus": "つける"
          },
          {
            "en": "Please turn on by the end of the day.",
            "ja": "今日中に「つける」してください。",
            "focus": "turn on",
            "jaFocus": "つける"
          },
          {
            "en": "I will turn on and share the update.",
            "ja": "私が「つける」して進捗を共有します。",
            "focus": "turn on",
            "jaFocus": "つける"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn on on weekends.",
            "ja": "週末によく「つける」します。",
            "focus": "turn on",
            "jaFocus": "つける"
          },
          {
            "en": "It is useful to turn on.",
            "ja": "「つける」できると便利です。",
            "focus": "turn on",
            "jaFocus": "つける"
          }
        ]
      },
      {
        "phrase": "turn off",
        "ja": "消す",
        "image": "turn off のまとまりで仕事に使う表現。",
        "pattern": "turn off + 名詞",
        "examples": [
          {
            "en": "We need to turn off before the meeting.",
            "ja": "会議前に「消す」必要があります。",
            "focus": "turn off",
            "jaFocus": "消す"
          },
          {
            "en": "Please turn off by the end of the day.",
            "ja": "今日中に「消す」してください。",
            "focus": "turn off",
            "jaFocus": "消す"
          },
          {
            "en": "I will turn off and share the update.",
            "ja": "私が「消す」して進捗を共有します。",
            "focus": "turn off",
            "jaFocus": "消す"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn off on weekends.",
            "ja": "週末によく「消す」します。",
            "focus": "turn off",
            "jaFocus": "消す"
          },
          {
            "en": "It is useful to turn off.",
            "ja": "「消す」できると便利です。",
            "focus": "turn off",
            "jaFocus": "消す"
          }
        ]
      },
      {
        "phrase": "turn down",
        "ja": "断る・下げる",
        "image": "turn down のまとまりで仕事に使う表現。",
        "pattern": "turn down + 名詞",
        "examples": [
          {
            "en": "We need to turn down before the meeting.",
            "ja": "会議前に「断る・下げる」必要があります。",
            "focus": "turn down",
            "jaFocus": "断る・下げる"
          },
          {
            "en": "Please turn down by the end of the day.",
            "ja": "今日中に「断る・下げる」してください。",
            "focus": "turn down",
            "jaFocus": "断る・下げる"
          },
          {
            "en": "I will turn down and share the update.",
            "ja": "私が「断る・下げる」して進捗を共有します。",
            "focus": "turn down",
            "jaFocus": "断る・下げる"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn down on weekends.",
            "ja": "週末によく「断る・下げる」します。",
            "focus": "turn down",
            "jaFocus": "断る・下げる"
          },
          {
            "en": "It is useful to turn down.",
            "ja": "「断る・下げる」できると便利です。",
            "focus": "turn down",
            "jaFocus": "断る・下げる"
          }
        ]
      },
      {
        "phrase": "turn in",
        "ja": "提出する",
        "image": "turn in のまとまりで仕事に使う表現。",
        "pattern": "turn in + 名詞",
        "examples": [
          {
            "en": "We need to turn in before the meeting.",
            "ja": "会議前に「提出する」必要があります。",
            "focus": "turn in",
            "jaFocus": "提出する"
          },
          {
            "en": "Please turn in by the end of the day.",
            "ja": "今日中に「提出する」してください。",
            "focus": "turn in",
            "jaFocus": "提出する"
          },
          {
            "en": "I will turn in and share the update.",
            "ja": "私が「提出する」して進捗を共有します。",
            "focus": "turn in",
            "jaFocus": "提出する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn in on weekends.",
            "ja": "週末によく「提出する」します。",
            "focus": "turn in",
            "jaFocus": "提出する"
          },
          {
            "en": "It is useful to turn in.",
            "ja": "「提出する」できると便利です。",
            "focus": "turn in",
            "jaFocus": "提出する"
          }
        ]
      },
      {
        "phrase": "turn out",
        "ja": "結果になる",
        "image": "turn out のまとまりで仕事に使う表現。",
        "pattern": "turn out",
        "examples": [
          {
            "en": "We need to turn out before the meeting.",
            "ja": "会議前に「結果になる」必要があります。",
            "focus": "turn out",
            "jaFocus": "結果になる"
          },
          {
            "en": "Please turn out by the end of the day.",
            "ja": "今日中に「結果になる」してください。",
            "focus": "turn out",
            "jaFocus": "結果になる"
          },
          {
            "en": "I will turn out and share the update.",
            "ja": "私が「結果になる」して進捗を共有します。",
            "focus": "turn out",
            "jaFocus": "結果になる"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn out on weekends.",
            "ja": "週末によく「結果になる」します。",
            "focus": "turn out",
            "jaFocus": "結果になる"
          },
          {
            "en": "It is useful to turn out.",
            "ja": "「結果になる」できると便利です。",
            "focus": "turn out",
            "jaFocus": "結果になる"
          }
        ]
      },
      {
        "phrase": "turn to",
        "ja": "頼る・移る",
        "image": "turn to のまとまりで仕事に使う表現。",
        "pattern": "turn to + 名詞",
        "examples": [
          {
            "en": "We need to turn to before the meeting.",
            "ja": "会議前に「頼る・移る」必要があります。",
            "focus": "turn to",
            "jaFocus": "頼る・移る"
          },
          {
            "en": "Please turn to by the end of the day.",
            "ja": "今日中に「頼る・移る」してください。",
            "focus": "turn to",
            "jaFocus": "頼る・移る"
          },
          {
            "en": "I will turn to and share the update.",
            "ja": "私が「頼る・移る」して進捗を共有します。",
            "focus": "turn to",
            "jaFocus": "頼る・移る"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn to on weekends.",
            "ja": "週末によく「頼る・移る」します。",
            "focus": "turn to",
            "jaFocus": "頼る・移る"
          },
          {
            "en": "It is useful to turn to.",
            "ja": "「頼る・移る」できると便利です。",
            "focus": "turn to",
            "jaFocus": "頼る・移る"
          }
        ]
      },
      {
        "phrase": "turn into",
        "ja": "〜に変わる",
        "image": "turn into のまとまりで仕事に使う表現。",
        "pattern": "turn into + 名詞",
        "examples": [
          {
            "en": "We need to turn into before the meeting.",
            "ja": "会議前に「〜に変わる」必要があります。",
            "focus": "turn into",
            "jaFocus": "〜に変わる"
          },
          {
            "en": "Please turn into by the end of the day.",
            "ja": "今日中に「〜に変わる」してください。",
            "focus": "turn into",
            "jaFocus": "〜に変わる"
          },
          {
            "en": "I will turn into and share the update.",
            "ja": "私が「〜に変わる」して進捗を共有します。",
            "focus": "turn into",
            "jaFocus": "〜に変わる"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn into on weekends.",
            "ja": "週末によく「〜に変わる」します。",
            "focus": "turn into",
            "jaFocus": "〜に変わる"
          },
          {
            "en": "It is useful to turn into.",
            "ja": "「〜に変わる」できると便利です。",
            "focus": "turn into",
            "jaFocus": "〜に変わる"
          }
        ]
      },
      {
        "phrase": "turn over",
        "ja": "引き渡す・めくる",
        "image": "turn over のまとまりで仕事に使う表現。",
        "pattern": "turn over + 名詞",
        "examples": [
          {
            "en": "We need to turn over before the meeting.",
            "ja": "会議前に「引き渡す・めくる」必要があります。",
            "focus": "turn over",
            "jaFocus": "引き渡す・めくる"
          },
          {
            "en": "Please turn over by the end of the day.",
            "ja": "今日中に「引き渡す・めくる」してください。",
            "focus": "turn over",
            "jaFocus": "引き渡す・めくる"
          },
          {
            "en": "I will turn over and share the update.",
            "ja": "私が「引き渡す・めくる」して進捗を共有します。",
            "focus": "turn over",
            "jaFocus": "引き渡す・めくる"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn over on weekends.",
            "ja": "週末によく「引き渡す・めくる」します。",
            "focus": "turn over",
            "jaFocus": "引き渡す・めくる"
          },
          {
            "en": "It is useful to turn over.",
            "ja": "「引き渡す・めくる」できると便利です。",
            "focus": "turn over",
            "jaFocus": "引き渡す・めくる"
          }
        ]
      },
      {
        "phrase": "turn around",
        "ja": "立て直す・方向転換する",
        "image": "turn around のまとまりで仕事に使う表現。",
        "pattern": "turn around + 名詞",
        "examples": [
          {
            "en": "We need to turn around before the meeting.",
            "ja": "会議前に「立て直す・方向転換する」必要があります。",
            "focus": "turn around",
            "jaFocus": "立て直す・方向転換する"
          },
          {
            "en": "Please turn around by the end of the day.",
            "ja": "今日中に「立て直す・方向転換する」してください。",
            "focus": "turn around",
            "jaFocus": "立て直す・方向転換する"
          },
          {
            "en": "I will turn around and share the update.",
            "ja": "私が「立て直す・方向転換する」して進捗を共有します。",
            "focus": "turn around",
            "jaFocus": "立て直す・方向転換する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn around on weekends.",
            "ja": "週末によく「立て直す・方向転換する」します。",
            "focus": "turn around",
            "jaFocus": "立て直す・方向転換する"
          },
          {
            "en": "It is useful to turn around.",
            "ja": "「立て直す・方向転換する」できると便利です。",
            "focus": "turn around",
            "jaFocus": "立て直す・方向転換する"
          }
        ]
      },
      {
        "phrase": "turn back",
        "ja": "引き返す",
        "image": "turn back のまとまりで仕事に使う表現。",
        "pattern": "turn back",
        "examples": [
          {
            "en": "We need to turn back before the meeting.",
            "ja": "会議前に「引き返す」必要があります。",
            "focus": "turn back",
            "jaFocus": "引き返す"
          },
          {
            "en": "Please turn back by the end of the day.",
            "ja": "今日中に「引き返す」してください。",
            "focus": "turn back",
            "jaFocus": "引き返す"
          },
          {
            "en": "I will turn back and share the update.",
            "ja": "私が「引き返す」して進捗を共有します。",
            "focus": "turn back",
            "jaFocus": "引き返す"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often turn back on weekends.",
            "ja": "週末によく「引き返す」します。",
            "focus": "turn back",
            "jaFocus": "引き返す"
          },
          {
            "en": "It is useful to turn back.",
            "ja": "「引き返す」できると便利です。",
            "focus": "turn back",
            "jaFocus": "引き返す"
          }
        ]
      }
    ]
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
    "ipa": "/set/",
    "kana": "セット",
    "syllable": "set",
    "transitivity": "他動詞中心",
    "importance": "★★★★★ 超重要",
    "core": "位置・基準・状態を決めて固定する",
    "coreDetail": "SETは、物を置く、予定や基準を決める、使える状態にするなど、何かを一定の状態に整えるイメージです。",
    "coreVisual": {
      "from": [
        "📍 位置",
        "📅 予定",
        "🎯 目標",
        "⚙️ 設定",
        "📏 基準"
      ],
      "to": "自分・チーム",
      "label": "コアイメージ"
    },
    "meanings": [
      {
        "id": "decide",
        "title": "1 設定する・決める",
        "pattern": "SET + 名詞",
        "transitivity": "他動詞中心",
        "structure": "S + V + O",
        "image": "基準・予定・目標を決める。",
        "point": "基準・予定・目標を決める。",
        "examples": [
          {
            "en": "We set the deadline for Friday.",
            "ja": "締切を金曜日に設定しました。",
            "focus": "set",
            "object": "the deadline",
            "jaFocus": "設定しました"
          },
          {
            "en": "Please set a clear goal for this project.",
            "ja": "この案件に明確な目標を設定してください。",
            "focus": "set",
            "object": "a clear goal",
            "jaFocus": "設定して"
          },
          {
            "en": "The manager set the meeting time.",
            "ja": "上司が会議時間を設定しました。",
            "focus": "set",
            "object": "the meeting time",
            "jaFocus": "設定しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "I set my alarm for six.",
            "ja": "アラームを6時に設定しました。",
            "focus": "set",
            "object": "my alarm",
            "jaFocus": "設定しました"
          },
          {
            "en": "She set a budget for the trip.",
            "ja": "彼女は旅行予算を決めました。",
            "focus": "set",
            "object": "a budget",
            "jaFocus": "決めました"
          }
        ]
      },
      {
        "id": "place",
        "title": "2 置く",
        "pattern": "SET + 物 + 場所",
        "transitivity": "他動詞中心",
        "structure": "S + V + O + M",
        "image": "ある位置に置く。",
        "point": "ある位置に置く。",
        "examples": [
          {
            "en": "Set the sample on the table.",
            "ja": "サンプルをテーブルに置いてください。",
            "focus": "Set",
            "object": "the sample",
            "jaFocus": "置いて"
          },
          {
            "en": "I set the documents next to the printer.",
            "ja": "書類をプリンターの横に置きました。",
            "focus": "set",
            "object": "the documents",
            "jaFocus": "置きました"
          },
          {
            "en": "Please set the display near the entrance.",
            "ja": "入口近くにディスプレイを置いてください。",
            "focus": "set",
            "object": "the display",
            "jaFocus": "置いて"
          }
        ],
        "dailyExamples": [
          {
            "en": "I set my bag on the chair.",
            "ja": "バッグを椅子に置きました。",
            "focus": "set",
            "object": "my bag",
            "jaFocus": "置きました"
          },
          {
            "en": "She set the cup on the desk.",
            "ja": "彼女はカップを机に置きました。",
            "focus": "set",
            "object": "the cup",
            "jaFocus": "置きました"
          }
        ]
      },
      {
        "id": "prepare",
        "title": "3 整える・準備する",
        "pattern": "SET + O + up",
        "transitivity": "他動詞中心",
        "structure": "S + V + O",
        "image": "使える状態にする。",
        "point": "使える状態にする。",
        "examples": [
          {
            "en": "I set up the meeting room.",
            "ja": "会議室を準備しました。",
            "focus": "set up",
            "object": "the meeting room",
            "jaFocus": "準備しました"
          },
          {
            "en": "We set up the demo environment.",
            "ja": "デモ環境を設定しました。",
            "focus": "set up",
            "object": "the demo environment",
            "jaFocus": "設定しました"
          },
          {
            "en": "Please set up the projector.",
            "ja": "プロジェクターを準備してください。",
            "focus": "set up",
            "object": "the projector",
            "jaFocus": "準備して"
          }
        ],
        "dailyExamples": [
          {
            "en": "I set up my new phone.",
            "ja": "新しいスマホを設定しました。",
            "focus": "set up",
            "object": "my new phone",
            "jaFocus": "設定しました"
          },
          {
            "en": "We set up a tent.",
            "ja": "テントを設営しました。",
            "focus": "set up",
            "object": "a tent",
            "jaFocus": "設営しました"
          }
        ]
      },
      {
        "id": "standard",
        "title": "4 基準を作る",
        "pattern": "SET + standard/rule",
        "transitivity": "他動詞中心",
        "structure": "S + V + O",
        "image": "基準やルールを作る。",
        "point": "基準やルールを作る。",
        "examples": [
          {
            "en": "This case sets an important standard.",
            "ja": "この事例は重要な基準になります。",
            "focus": "sets",
            "object": "an important standard",
            "jaFocus": "基準になります"
          },
          {
            "en": "We need to set clear rules.",
            "ja": "明確なルールを設定する必要があります。",
            "focus": "set",
            "object": "clear rules",
            "jaFocus": "設定する"
          },
          {
            "en": "The company set a new policy.",
            "ja": "会社は新しい方針を定めました。",
            "focus": "set",
            "object": "a new policy",
            "jaFocus": "定めました"
          }
        ],
        "dailyExamples": [
          {
            "en": "Parents set rules at home.",
            "ja": "親は家庭でルールを決めます。",
            "focus": "set",
            "object": "rules",
            "jaFocus": "決めます"
          },
          {
            "en": "I set a rule for myself.",
            "ja": "自分にルールを決めました。",
            "focus": "set",
            "object": "a rule",
            "jaFocus": "決めました"
          }
        ]
      },
      {
        "id": "start",
        "title": "5 始める・動き出させる",
        "pattern": "SET + O + in motion",
        "transitivity": "他動詞中心",
        "structure": "S + V + O",
        "image": "物事を動き出させる。",
        "point": "物事を動き出させる。",
        "examples": [
          {
            "en": "The approval set the project in motion.",
            "ja": "承認によりプロジェクトが動き出しました。",
            "focus": "set",
            "object": "the project",
            "jaFocus": "動き出しました"
          },
          {
            "en": "The email set the process in motion.",
            "ja": "そのメールで手続きが始まりました。",
            "focus": "set",
            "object": "the process",
            "jaFocus": "始まりました"
          },
          {
            "en": "His comment set the discussion in motion.",
            "ja": "彼の発言で議論が動き出しました。",
            "focus": "set",
            "object": "the discussion",
            "jaFocus": "動き出しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "The song set the mood.",
            "ja": "その曲で雰囲気ができました。",
            "focus": "set",
            "object": "the mood",
            "jaFocus": "雰囲気ができました"
          },
          {
            "en": "The news set things in motion.",
            "ja": "そのニュースで物事が動き出しました。",
            "focus": "set",
            "object": "things",
            "jaFocus": "動き出しました"
          }
        ]
      },
      {
        "id": "adjust",
        "title": "6 調整する",
        "pattern": "SET + value/level",
        "transitivity": "他動詞中心",
        "structure": "S + V + O",
        "image": "数値や状態を合わせる。",
        "point": "数値や状態を合わせる。",
        "examples": [
          {
            "en": "Set the brightness to 80 percent.",
            "ja": "明るさを80%に設定してください。",
            "focus": "Set",
            "object": "the brightness",
            "jaFocus": "設定して"
          },
          {
            "en": "We set the price based on the estimate.",
            "ja": "見積に基づいて価格を設定しました。",
            "focus": "set",
            "object": "the price",
            "jaFocus": "設定しました"
          },
          {
            "en": "Please set the volume lower during the call.",
            "ja": "通話中は音量を下げて設定してください。",
            "focus": "set",
            "object": "the volume",
            "jaFocus": "設定して"
          }
        ],
        "dailyExamples": [
          {
            "en": "I set the temperature to 24 degrees.",
            "ja": "温度を24度に設定しました。",
            "focus": "set",
            "object": "the temperature",
            "jaFocus": "設定しました"
          },
          {
            "en": "She set the timer for ten minutes.",
            "ja": "彼女はタイマーを10分に設定しました。",
            "focus": "set",
            "object": "the timer",
            "jaFocus": "設定しました"
          }
        ]
      },
      {
        "id": "example",
        "title": "7 手本を示す",
        "pattern": "SET an example",
        "transitivity": "他動詞中心",
        "structure": "S + V + O",
        "image": "行動で基準を示す。",
        "point": "行動で基準を示す。",
        "examples": [
          {
            "en": "The leader set a good example.",
            "ja": "リーダーは良い手本を示しました。",
            "focus": "set",
            "object": "a good example",
            "jaFocus": "示しました"
          },
          {
            "en": "We should set an example for new members.",
            "ja": "新メンバーの手本になるべきです。",
            "focus": "set",
            "object": "an example",
            "jaFocus": "手本になる"
          },
          {
            "en": "Her attitude sets a positive example.",
            "ja": "彼女の姿勢は良い手本になります。",
            "focus": "sets",
            "object": "a positive example",
            "jaFocus": "手本になります"
          }
        ],
        "dailyExamples": [
          {
            "en": "Parents set an example for children.",
            "ja": "親は子どもの手本になります。",
            "focus": "set",
            "object": "an example",
            "jaFocus": "手本になります"
          },
          {
            "en": "He set a good example at school.",
            "ja": "彼は学校で良い手本を示しました。",
            "focus": "set",
            "object": "a good example",
            "jaFocus": "示しました"
          }
        ]
      },
      {
        "id": "arrange",
        "title": "8 段取りする",
        "pattern": "SET + appointment/date",
        "transitivity": "他動詞中心",
        "structure": "S + V + O",
        "image": "予定を整える。",
        "point": "予定を整える。",
        "examples": [
          {
            "en": "I set an appointment with the client.",
            "ja": "顧客とのアポイントを設定しました。",
            "focus": "set",
            "object": "an appointment",
            "jaFocus": "設定しました"
          },
          {
            "en": "Can you set a date for the review?",
            "ja": "レビューの日程を設定できますか？",
            "focus": "set",
            "object": "a date",
            "jaFocus": "設定"
          },
          {
            "en": "We set the next meeting for Monday.",
            "ja": "次回会議を月曜日に設定しました。",
            "focus": "set",
            "object": "the next meeting",
            "jaFocus": "設定しました"
          }
        ],
        "dailyExamples": [
          {
            "en": "We set a date for dinner.",
            "ja": "夕食の日を決めました。",
            "focus": "set",
            "object": "a date",
            "jaFocus": "決めました"
          },
          {
            "en": "I set an appointment at the clinic.",
            "ja": "病院の予約を取りました。",
            "focus": "set",
            "object": "an appointment",
            "jaFocus": "予約を取りました"
          }
        ]
      },
      {
        "id": "fixed",
        "title": "9 固定する",
        "pattern": "SET + O",
        "transitivity": "他動詞中心",
        "structure": "S + V + O",
        "image": "変更しにくい状態にする。",
        "point": "変更しにくい状態にする。",
        "examples": [
          {
            "en": "The budget is set for this quarter.",
            "ja": "今四半期の予算は決まっています。",
            "focus": "set",
            "jaFocus": "決まっています"
          },
          {
            "en": "The delivery date has been set.",
            "ja": "納期は設定済みです。",
            "focus": "set",
            "jaFocus": "設定済み"
          },
          {
            "en": "Once the price is set, we can proceed.",
            "ja": "価格が決まれば進められます。",
            "focus": "set",
            "jaFocus": "決まれば"
          }
        ],
        "dailyExamples": [
          {
            "en": "The date is set.",
            "ja": "日程は決まっています。",
            "focus": "set",
            "jaFocus": "決まっています"
          },
          {
            "en": "Everything is set for the party.",
            "ja": "パーティーの準備は整っています。",
            "focus": "set",
            "jaFocus": "整っています"
          }
        ]
      },
      {
        "id": "assign",
        "title": "10 割り当てる",
        "pattern": "SET + task / SET + 人 + task",
        "transitivity": "他動詞中心",
        "structure": "S + V + O",
        "image": "担当や作業を割り当てる。",
        "point": "担当や作業を割り当てる。",
        "examples": [
          {
            "en": "I set the task for the design team.",
            "ja": "設計チームに作業を割り当てました。",
            "focus": "set",
            "object": "the task",
            "jaFocus": "割り当てました"
          },
          {
            "en": "The manager set clear roles for everyone.",
            "ja": "上司は全員に明確な役割を割り当てました。",
            "focus": "set",
            "object": "clear roles",
            "jaFocus": "割り当てました"
          },
          {
            "en": "Please set priorities for each task.",
            "ja": "各作業に優先順位を設定してください。",
            "focus": "set",
            "object": "priorities",
            "jaFocus": "設定して"
          }
        ],
        "dailyExamples": [
          {
            "en": "I set chores for the weekend.",
            "ja": "週末の家事を割り当てました。",
            "focus": "set",
            "object": "chores",
            "jaFocus": "割り当てました"
          },
          {
            "en": "She set priorities for the day.",
            "ja": "彼女はその日の優先順位を決めました。",
            "focus": "set",
            "object": "priorities",
            "jaFocus": "決めました"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "set a deadline",
        "ja": "締切を設定する",
        "image": "set a deadline のまとまりで仕事に使う表現。",
        "pattern": "set + 名詞",
        "examples": [
          {
            "en": "We need to set a deadline before the meeting.",
            "ja": "会議前に「締切を設定する」必要があります。",
            "focus": "set a deadline",
            "jaFocus": "締切を設定する"
          },
          {
            "en": "Please set a deadline by the end of the day.",
            "ja": "今日中に「締切を設定する」してください。",
            "focus": "set a deadline",
            "jaFocus": "締切を設定する"
          },
          {
            "en": "I will set a deadline and share the update.",
            "ja": "私が「締切を設定する」して進捗を共有します。",
            "focus": "set a deadline",
            "jaFocus": "締切を設定する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set a deadline on weekends.",
            "ja": "週末によく「締切を設定する」します。",
            "focus": "set a deadline",
            "jaFocus": "締切を設定する"
          },
          {
            "en": "It is useful to set a deadline.",
            "ja": "「締切を設定する」できると便利です。",
            "focus": "set a deadline",
            "jaFocus": "締切を設定する"
          }
        ]
      },
      {
        "phrase": "set a goal",
        "ja": "目標を設定する",
        "image": "set a goal のまとまりで仕事に使う表現。",
        "pattern": "set + 名詞",
        "examples": [
          {
            "en": "We need to set a goal before the meeting.",
            "ja": "会議前に「目標を設定する」必要があります。",
            "focus": "set a goal",
            "jaFocus": "目標を設定する"
          },
          {
            "en": "Please set a goal by the end of the day.",
            "ja": "今日中に「目標を設定する」してください。",
            "focus": "set a goal",
            "jaFocus": "目標を設定する"
          },
          {
            "en": "I will set a goal and share the update.",
            "ja": "私が「目標を設定する」して進捗を共有します。",
            "focus": "set a goal",
            "jaFocus": "目標を設定する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set a goal on weekends.",
            "ja": "週末によく「目標を設定する」します。",
            "focus": "set a goal",
            "jaFocus": "目標を設定する"
          },
          {
            "en": "It is useful to set a goal.",
            "ja": "「目標を設定する」できると便利です。",
            "focus": "set a goal",
            "jaFocus": "目標を設定する"
          }
        ]
      },
      {
        "phrase": "set a price",
        "ja": "価格を設定する",
        "image": "set a price のまとまりで仕事に使う表現。",
        "pattern": "set + 名詞",
        "examples": [
          {
            "en": "We need to set a price before the meeting.",
            "ja": "会議前に「価格を設定する」必要があります。",
            "focus": "set a price",
            "jaFocus": "価格を設定する"
          },
          {
            "en": "Please set a price by the end of the day.",
            "ja": "今日中に「価格を設定する」してください。",
            "focus": "set a price",
            "jaFocus": "価格を設定する"
          },
          {
            "en": "I will set a price and share the update.",
            "ja": "私が「価格を設定する」して進捗を共有します。",
            "focus": "set a price",
            "jaFocus": "価格を設定する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set a price on weekends.",
            "ja": "週末によく「価格を設定する」します。",
            "focus": "set a price",
            "jaFocus": "価格を設定する"
          },
          {
            "en": "It is useful to set a price.",
            "ja": "「価格を設定する」できると便利です。",
            "focus": "set a price",
            "jaFocus": "価格を設定する"
          }
        ]
      },
      {
        "phrase": "set a schedule",
        "ja": "予定を設定する",
        "image": "set a schedule のまとまりで仕事に使う表現。",
        "pattern": "set + 名詞",
        "examples": [
          {
            "en": "We need to set a schedule before the meeting.",
            "ja": "会議前に「予定を設定する」必要があります。",
            "focus": "set a schedule",
            "jaFocus": "予定を設定する"
          },
          {
            "en": "Please set a schedule by the end of the day.",
            "ja": "今日中に「予定を設定する」してください。",
            "focus": "set a schedule",
            "jaFocus": "予定を設定する"
          },
          {
            "en": "I will set a schedule and share the update.",
            "ja": "私が「予定を設定する」して進捗を共有します。",
            "focus": "set a schedule",
            "jaFocus": "予定を設定する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set a schedule on weekends.",
            "ja": "週末によく「予定を設定する」します。",
            "focus": "set a schedule",
            "jaFocus": "予定を設定する"
          },
          {
            "en": "It is useful to set a schedule.",
            "ja": "「予定を設定する」できると便利です。",
            "focus": "set a schedule",
            "jaFocus": "予定を設定する"
          }
        ]
      },
      {
        "phrase": "set up a meeting",
        "ja": "会議を設定する",
        "image": "set up a meeting のまとまりで仕事に使う表現。",
        "pattern": "set up + 名詞",
        "examples": [
          {
            "en": "We need to set up a meeting before the meeting.",
            "ja": "会議前に「会議を設定する」必要があります。",
            "focus": "set up a meeting",
            "jaFocus": "会議を設定する"
          },
          {
            "en": "Please set up a meeting by the end of the day.",
            "ja": "今日中に「会議を設定する」してください。",
            "focus": "set up a meeting",
            "jaFocus": "会議を設定する"
          },
          {
            "en": "I will set up a meeting and share the update.",
            "ja": "私が「会議を設定する」して進捗を共有します。",
            "focus": "set up a meeting",
            "jaFocus": "会議を設定する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set up a meeting on weekends.",
            "ja": "週末によく「会議を設定する」します。",
            "focus": "set up a meeting",
            "jaFocus": "会議を設定する"
          },
          {
            "en": "It is useful to set up a meeting.",
            "ja": "「会議を設定する」できると便利です。",
            "focus": "set up a meeting",
            "jaFocus": "会議を設定する"
          }
        ]
      },
      {
        "phrase": "set clear rules",
        "ja": "明確なルールを設定する",
        "image": "set clear rules のまとまりで仕事に使う表現。",
        "pattern": "set + 名詞",
        "examples": [
          {
            "en": "We need to set clear rules before the meeting.",
            "ja": "会議前に「明確なルールを設定する」必要があります。",
            "focus": "set clear rules",
            "jaFocus": "明確なルールを設定する"
          },
          {
            "en": "Please set clear rules by the end of the day.",
            "ja": "今日中に「明確なルールを設定する」してください。",
            "focus": "set clear rules",
            "jaFocus": "明確なルールを設定する"
          },
          {
            "en": "I will set clear rules and share the update.",
            "ja": "私が「明確なルールを設定する」して進捗を共有します。",
            "focus": "set clear rules",
            "jaFocus": "明確なルールを設定する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set clear rules on weekends.",
            "ja": "週末によく「明確なルールを設定する」します。",
            "focus": "set clear rules",
            "jaFocus": "明確なルールを設定する"
          },
          {
            "en": "It is useful to set clear rules.",
            "ja": "「明確なルールを設定する」できると便利です。",
            "focus": "set clear rules",
            "jaFocus": "明確なルールを設定する"
          }
        ]
      },
      {
        "phrase": "set priorities",
        "ja": "優先順位を決める",
        "image": "set priorities のまとまりで仕事に使う表現。",
        "pattern": "set + 名詞",
        "examples": [
          {
            "en": "We need to set priorities before the meeting.",
            "ja": "会議前に「優先順位を決める」必要があります。",
            "focus": "set priorities",
            "jaFocus": "優先順位を決める"
          },
          {
            "en": "Please set priorities by the end of the day.",
            "ja": "今日中に「優先順位を決める」してください。",
            "focus": "set priorities",
            "jaFocus": "優先順位を決める"
          },
          {
            "en": "I will set priorities and share the update.",
            "ja": "私が「優先順位を決める」して進捗を共有します。",
            "focus": "set priorities",
            "jaFocus": "優先順位を決める"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set priorities on weekends.",
            "ja": "週末によく「優先順位を決める」します。",
            "focus": "set priorities",
            "jaFocus": "優先順位を決める"
          },
          {
            "en": "It is useful to set priorities.",
            "ja": "「優先順位を決める」できると便利です。",
            "focus": "set priorities",
            "jaFocus": "優先順位を決める"
          }
        ]
      },
      {
        "phrase": "set an example",
        "ja": "手本を示す",
        "image": "set an example のまとまりで仕事に使う表現。",
        "pattern": "set + 名詞",
        "examples": [
          {
            "en": "We need to set an example before the meeting.",
            "ja": "会議前に「手本を示す」必要があります。",
            "focus": "set an example",
            "jaFocus": "手本を示す"
          },
          {
            "en": "Please set an example by the end of the day.",
            "ja": "今日中に「手本を示す」してください。",
            "focus": "set an example",
            "jaFocus": "手本を示す"
          },
          {
            "en": "I will set an example and share the update.",
            "ja": "私が「手本を示す」して進捗を共有します。",
            "focus": "set an example",
            "jaFocus": "手本を示す"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set an example on weekends.",
            "ja": "週末によく「手本を示す」します。",
            "focus": "set an example",
            "jaFocus": "手本を示す"
          },
          {
            "en": "It is useful to set an example.",
            "ja": "「手本を示す」できると便利です。",
            "focus": "set an example",
            "jaFocus": "手本を示す"
          }
        ]
      },
      {
        "phrase": "set the tone",
        "ja": "雰囲気を作る",
        "image": "set the tone のまとまりで仕事に使う表現。",
        "pattern": "set + 名詞",
        "examples": [
          {
            "en": "We need to set the tone before the meeting.",
            "ja": "会議前に「雰囲気を作る」必要があります。",
            "focus": "set the tone",
            "jaFocus": "雰囲気を作る"
          },
          {
            "en": "Please set the tone by the end of the day.",
            "ja": "今日中に「雰囲気を作る」してください。",
            "focus": "set the tone",
            "jaFocus": "雰囲気を作る"
          },
          {
            "en": "I will set the tone and share the update.",
            "ja": "私が「雰囲気を作る」して進捗を共有します。",
            "focus": "set the tone",
            "jaFocus": "雰囲気を作る"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set the tone on weekends.",
            "ja": "週末によく「雰囲気を作る」します。",
            "focus": "set the tone",
            "jaFocus": "雰囲気を作る"
          },
          {
            "en": "It is useful to set the tone.",
            "ja": "「雰囲気を作る」できると便利です。",
            "focus": "set the tone",
            "jaFocus": "雰囲気を作る"
          }
        ]
      },
      {
        "phrase": "set the standard",
        "ja": "基準を作る",
        "image": "set the standard のまとまりで仕事に使う表現。",
        "pattern": "set + 名詞",
        "examples": [
          {
            "en": "We need to set the standard before the meeting.",
            "ja": "会議前に「基準を作る」必要があります。",
            "focus": "set the standard",
            "jaFocus": "基準を作る"
          },
          {
            "en": "Please set the standard by the end of the day.",
            "ja": "今日中に「基準を作る」してください。",
            "focus": "set the standard",
            "jaFocus": "基準を作る"
          },
          {
            "en": "I will set the standard and share the update.",
            "ja": "私が「基準を作る」して進捗を共有します。",
            "focus": "set the standard",
            "jaFocus": "基準を作る"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set the standard on weekends.",
            "ja": "週末によく「基準を作る」します。",
            "focus": "set the standard",
            "jaFocus": "基準を作る"
          },
          {
            "en": "It is useful to set the standard.",
            "ja": "「基準を作る」できると便利です。",
            "focus": "set the standard",
            "jaFocus": "基準を作る"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "set up",
        "ja": "準備する・設置する",
        "image": "set up のまとまりで仕事に使う表現。",
        "pattern": "set up + 名詞",
        "examples": [
          {
            "en": "We need to set up before the meeting.",
            "ja": "会議前に「準備する・設置する」必要があります。",
            "focus": "set up",
            "jaFocus": "準備する・設置する"
          },
          {
            "en": "Please set up by the end of the day.",
            "ja": "今日中に「準備する・設置する」してください。",
            "focus": "set up",
            "jaFocus": "準備する・設置する"
          },
          {
            "en": "I will set up and share the update.",
            "ja": "私が「準備する・設置する」して進捗を共有します。",
            "focus": "set up",
            "jaFocus": "準備する・設置する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set up on weekends.",
            "ja": "週末によく「準備する・設置する」します。",
            "focus": "set up",
            "jaFocus": "準備する・設置する"
          },
          {
            "en": "It is useful to set up.",
            "ja": "「準備する・設置する」できると便利です。",
            "focus": "set up",
            "jaFocus": "準備する・設置する"
          }
        ]
      },
      {
        "phrase": "set out",
        "ja": "着手する・説明する",
        "image": "set out のまとまりで仕事に使う表現。",
        "pattern": "set out",
        "examples": [
          {
            "en": "We need to set out before the meeting.",
            "ja": "会議前に「着手する・説明する」必要があります。",
            "focus": "set out",
            "jaFocus": "着手する・説明する"
          },
          {
            "en": "Please set out by the end of the day.",
            "ja": "今日中に「着手する・説明する」してください。",
            "focus": "set out",
            "jaFocus": "着手する・説明する"
          },
          {
            "en": "I will set out and share the update.",
            "ja": "私が「着手する・説明する」して進捗を共有します。",
            "focus": "set out",
            "jaFocus": "着手する・説明する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set out on weekends.",
            "ja": "週末によく「着手する・説明する」します。",
            "focus": "set out",
            "jaFocus": "着手する・説明する"
          },
          {
            "en": "It is useful to set out.",
            "ja": "「着手する・説明する」できると便利です。",
            "focus": "set out",
            "jaFocus": "着手する・説明する"
          }
        ]
      },
      {
        "phrase": "set off",
        "ja": "出発する・引き起こす",
        "image": "set off のまとまりで仕事に使う表現。",
        "pattern": "set off",
        "examples": [
          {
            "en": "We need to set off before the meeting.",
            "ja": "会議前に「出発する・引き起こす」必要があります。",
            "focus": "set off",
            "jaFocus": "出発する・引き起こす"
          },
          {
            "en": "Please set off by the end of the day.",
            "ja": "今日中に「出発する・引き起こす」してください。",
            "focus": "set off",
            "jaFocus": "出発する・引き起こす"
          },
          {
            "en": "I will set off and share the update.",
            "ja": "私が「出発する・引き起こす」して進捗を共有します。",
            "focus": "set off",
            "jaFocus": "出発する・引き起こす"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set off on weekends.",
            "ja": "週末によく「出発する・引き起こす」します。",
            "focus": "set off",
            "jaFocus": "出発する・引き起こす"
          },
          {
            "en": "It is useful to set off.",
            "ja": "「出発する・引き起こす」できると便利です。",
            "focus": "set off",
            "jaFocus": "出発する・引き起こす"
          }
        ]
      },
      {
        "phrase": "set aside",
        "ja": "取っておく",
        "image": "set aside のまとまりで仕事に使う表現。",
        "pattern": "set aside + 名詞",
        "examples": [
          {
            "en": "We need to set aside before the meeting.",
            "ja": "会議前に「取っておく」必要があります。",
            "focus": "set aside",
            "jaFocus": "取っておく"
          },
          {
            "en": "Please set aside by the end of the day.",
            "ja": "今日中に「取っておく」してください。",
            "focus": "set aside",
            "jaFocus": "取っておく"
          },
          {
            "en": "I will set aside and share the update.",
            "ja": "私が「取っておく」して進捗を共有します。",
            "focus": "set aside",
            "jaFocus": "取っておく"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set aside on weekends.",
            "ja": "週末によく「取っておく」します。",
            "focus": "set aside",
            "jaFocus": "取っておく"
          },
          {
            "en": "It is useful to set aside.",
            "ja": "「取っておく」できると便利です。",
            "focus": "set aside",
            "jaFocus": "取っておく"
          }
        ]
      },
      {
        "phrase": "set back",
        "ja": "遅らせる",
        "image": "set back のまとまりで仕事に使う表現。",
        "pattern": "set back + 名詞",
        "examples": [
          {
            "en": "We need to set back before the meeting.",
            "ja": "会議前に「遅らせる」必要があります。",
            "focus": "set back",
            "jaFocus": "遅らせる"
          },
          {
            "en": "Please set back by the end of the day.",
            "ja": "今日中に「遅らせる」してください。",
            "focus": "set back",
            "jaFocus": "遅らせる"
          },
          {
            "en": "I will set back and share the update.",
            "ja": "私が「遅らせる」して進捗を共有します。",
            "focus": "set back",
            "jaFocus": "遅らせる"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set back on weekends.",
            "ja": "週末によく「遅らせる」します。",
            "focus": "set back",
            "jaFocus": "遅らせる"
          },
          {
            "en": "It is useful to set back.",
            "ja": "「遅らせる」できると便利です。",
            "focus": "set back",
            "jaFocus": "遅らせる"
          }
        ]
      },
      {
        "phrase": "set in",
        "ja": "始まる・定着する",
        "image": "set in のまとまりで仕事に使う表現。",
        "pattern": "set in",
        "examples": [
          {
            "en": "We need to set in before the meeting.",
            "ja": "会議前に「始まる・定着する」必要があります。",
            "focus": "set in",
            "jaFocus": "始まる・定着する"
          },
          {
            "en": "Please set in by the end of the day.",
            "ja": "今日中に「始まる・定着する」してください。",
            "focus": "set in",
            "jaFocus": "始まる・定着する"
          },
          {
            "en": "I will set in and share the update.",
            "ja": "私が「始まる・定着する」して進捗を共有します。",
            "focus": "set in",
            "jaFocus": "始まる・定着する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set in on weekends.",
            "ja": "週末によく「始まる・定着する」します。",
            "focus": "set in",
            "jaFocus": "始まる・定着する"
          },
          {
            "en": "It is useful to set in.",
            "ja": "「始まる・定着する」できると便利です。",
            "focus": "set in",
            "jaFocus": "始まる・定着する"
          }
        ]
      },
      {
        "phrase": "set down",
        "ja": "書き留める",
        "image": "set down のまとまりで仕事に使う表現。",
        "pattern": "set down + 名詞",
        "examples": [
          {
            "en": "We need to set down before the meeting.",
            "ja": "会議前に「書き留める」必要があります。",
            "focus": "set down",
            "jaFocus": "書き留める"
          },
          {
            "en": "Please set down by the end of the day.",
            "ja": "今日中に「書き留める」してください。",
            "focus": "set down",
            "jaFocus": "書き留める"
          },
          {
            "en": "I will set down and share the update.",
            "ja": "私が「書き留める」して進捗を共有します。",
            "focus": "set down",
            "jaFocus": "書き留める"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set down on weekends.",
            "ja": "週末によく「書き留める」します。",
            "focus": "set down",
            "jaFocus": "書き留める"
          },
          {
            "en": "It is useful to set down.",
            "ja": "「書き留める」できると便利です。",
            "focus": "set down",
            "jaFocus": "書き留める"
          }
        ]
      },
      {
        "phrase": "set apart",
        "ja": "際立たせる",
        "image": "set apart のまとまりで仕事に使う表現。",
        "pattern": "set apart + 名詞",
        "examples": [
          {
            "en": "We need to set apart before the meeting.",
            "ja": "会議前に「際立たせる」必要があります。",
            "focus": "set apart",
            "jaFocus": "際立たせる"
          },
          {
            "en": "Please set apart by the end of the day.",
            "ja": "今日中に「際立たせる」してください。",
            "focus": "set apart",
            "jaFocus": "際立たせる"
          },
          {
            "en": "I will set apart and share the update.",
            "ja": "私が「際立たせる」して進捗を共有します。",
            "focus": "set apart",
            "jaFocus": "際立たせる"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set apart on weekends.",
            "ja": "週末によく「際立たせる」します。",
            "focus": "set apart",
            "jaFocus": "際立たせる"
          },
          {
            "en": "It is useful to set apart.",
            "ja": "「際立たせる」できると便利です。",
            "focus": "set apart",
            "jaFocus": "際立たせる"
          }
        ]
      },
      {
        "phrase": "set forth",
        "ja": "示す",
        "image": "set forth のまとまりで仕事に使う表現。",
        "pattern": "set forth + 名詞",
        "examples": [
          {
            "en": "We need to set forth before the meeting.",
            "ja": "会議前に「示す」必要があります。",
            "focus": "set forth",
            "jaFocus": "示す"
          },
          {
            "en": "Please set forth by the end of the day.",
            "ja": "今日中に「示す」してください。",
            "focus": "set forth",
            "jaFocus": "示す"
          },
          {
            "en": "I will set forth and share the update.",
            "ja": "私が「示す」して進捗を共有します。",
            "focus": "set forth",
            "jaFocus": "示す"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set forth on weekends.",
            "ja": "週末によく「示す」します。",
            "focus": "set forth",
            "jaFocus": "示す"
          },
          {
            "en": "It is useful to set forth.",
            "ja": "「示す」できると便利です。",
            "focus": "set forth",
            "jaFocus": "示す"
          }
        ]
      },
      {
        "phrase": "set about",
        "ja": "取りかかる",
        "image": "set about のまとまりで仕事に使う表現。",
        "pattern": "set about + 動名詞",
        "examples": [
          {
            "en": "We need to set about before the meeting.",
            "ja": "会議前に「取りかかる」必要があります。",
            "focus": "set about",
            "jaFocus": "取りかかる"
          },
          {
            "en": "Please set about by the end of the day.",
            "ja": "今日中に「取りかかる」してください。",
            "focus": "set about",
            "jaFocus": "取りかかる"
          },
          {
            "en": "I will set about and share the update.",
            "ja": "私が「取りかかる」して進捗を共有します。",
            "focus": "set about",
            "jaFocus": "取りかかる"
          }
        ],
        "dailyExamples": [
          {
            "en": "I often set about on weekends.",
            "ja": "週末によく「取りかかる」します。",
            "focus": "set about",
            "jaFocus": "取りかかる"
          },
          {
            "en": "It is useful to set about.",
            "ja": "「取りかかる」できると便利です。",
            "focus": "set about",
            "jaFocus": "取りかかる"
          }
        ]
      }
    ]
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


const dailyMeaningExamples: Record<string, Record<string, Example[]>> = {
  get: {
    obtain: [
      { en: "I got a new laptop last weekend.", ja: "先週末、新しいノートPCを手に入れた。", focus: "got", object: "a new laptop", jaFocus: "手に入れた" },
      { en: "I got tickets for the concert.", ja: "コンサートのチケットを手に入れた。", focus: "got", object: "tickets", jaFocus: "手に入れた" }
    ],
    become: [
      { en: "It got cold in the evening.", ja: "夕方に寒くなった。", focus: "got", jaFocus: "寒くなった" },
      { en: "I got sleepy after dinner.", ja: "夕食後に眠くなった。", focus: "got", jaFocus: "眠くなった" }
    ],
    arrive: [
      { en: "I got to the station early.", ja: "駅に早く着いた。", focus: "got", jaFocus: "着いた" },
      { en: "What time did you get home?", ja: "何時に帰宅したの？", focus: "get", jaFocus: "帰宅" }
    ],
    understand: [
      { en: "I finally got the story.", ja: "ようやくその話が分かった。", focus: "got", object: "the story", jaFocus: "分かった" },
      { en: "I don't get this song title.", ja: "この曲名の意味が分からない。", focus: "get", object: "this song title", jaFocus: "分からない" }
    ],
    receive: [
      { en: "I got a message from my friend.", ja: "友人からメッセージを受け取った。", focus: "got", object: "a message", jaFocus: "受け取った" },
      { en: "I got a package this morning.", ja: "今朝、荷物を受け取った。", focus: "got", object: "a package", jaFocus: "受け取った" }
    ],
    permission: [
      { en: "I got permission to use the car.", ja: "車を使う許可を得た。", focus: "got", object: "permission", jaFocus: "許可を得た" },
      { en: "I got permission to stay out late.", ja: "遅くまで外出する許可を得た。", focus: "got", object: "permission", jaFocus: "許可を得た" }
    ],
    chance: [
      { en: "I got a chance to travel abroad.", ja: "海外旅行に行く機会を得た。", focus: "got", object: "a chance", jaFocus: "機会を得た" },
      { en: "I got a chance to meet the artist.", ja: "そのアーティストに会う機会を得た。", focus: "got", object: "a chance", jaFocus: "機会を得た" }
    ],
    sick: [
      { en: "I got sick after the trip.", ja: "旅行の後に体調を崩した。", focus: "got sick", jaFocus: "体調を崩した" },
      { en: "My brother got a cold last week.", ja: "兄は先週風邪をひいた。", focus: "got", object: "a cold", jaFocus: "風邪をひいた" }
    ],
    buy: [
      { en: "Where did you get that jacket?", ja: "そのジャケットどこで買ったの？", focus: "get", object: "that jacket", jaFocus: "買った" },
      { en: "I got this mug at a small shop.", ja: "このマグカップは小さなお店で買った。", focus: "got", object: "this mug", jaFocus: "買った" }
    ],
    make_happen: [
      { en: "I got my brother to help me.", ja: "弟に手伝ってもらった。", focus: "got", jaFocus: "手伝ってもらった" },
      { en: "I got my friend to drive me home.", ja: "友人に家まで送ってもらった。", focus: "got", jaFocus: "送ってもらった" }
    ]
  },
  take: {
    responsibility: [
      { en: "I'll take care of dinner tonight.", ja: "今夜の夕食は私が担当するよ。", focus: "take care of", jaFocus: "担当" },
      { en: "She takes care of her dog every morning.", ja: "彼女は毎朝犬の世話をしている。", focus: "takes care of", jaFocus: "世話" }
    ],
    time: [
      { en: "It takes ten minutes to walk there.", ja: "そこまで歩いて10分かかる。", focus: "takes", jaFocus: "かかる" },
      { en: "The movie took about two hours.", ja: "その映画は約2時間かかった。", focus: "took", jaFocus: "かかった" }
    ],
    action: [
      { en: "I took a small step toward my goal.", ja: "目標に向けて小さな一歩を踏み出した。", focus: "took", jaFocus: "踏み出した" },
      { en: "We took action to clean the room.", ja: "部屋を片付けるために行動した。", focus: "took action", jaFocus: "行動した" }
    ],
    notes: [
      { en: "I took notes while watching the video.", ja: "動画を見ながらメモを取った。", focus: "took notes", jaFocus: "メモを取った" },
      { en: "Can you take notes for me?", ja: "代わりにメモを取ってくれる？", focus: "take notes", jaFocus: "メモを取って" }
    ],
    over: [
      { en: "My sister took over the kitchen.", ja: "姉がキッチンを使い始めた。", focus: "took over", jaFocus: "使い始めた" },
      { en: "He took over the playlist at the party.", ja: "彼がパーティーの曲選びを引き継いだ。", focus: "took over", jaFocus: "引き継いだ" }
    ]
  },
  make: {
    decision: [
      { en: "I made a decision to study every morning.", ja: "毎朝勉強すると決めた。", focus: "made a decision", jaFocus: "決めた" },
      { en: "We made a choice to stay home.", ja: "私たちは家にいることを選んだ。", focus: "made a choice", jaFocus: "選んだ" }
    ],
    progress: [
      { en: "I made progress with my guitar practice.", ja: "ギター練習が進んだ。", focus: "made progress", jaFocus: "進んだ" },
      { en: "My English is making progress little by little.", ja: "英語が少しずつ上達している。", focus: "making progress", jaFocus: "上達" }
    ],
    create: [
      { en: "I made breakfast this morning.", ja: "今朝、朝食を作った。", focus: "made", jaFocus: "作った" },
      { en: "She made a birthday card for her friend.", ja: "彼女は友人に誕生日カードを作った。", focus: "made", jaFocus: "作った" }
    ],
    cause: [
      { en: "The song made me happy.", ja: "その曲で嬉しい気持ちになった。", focus: "made", jaFocus: "気持ちになった" },
      { en: "The news made everyone surprised.", ja: "そのニュースでみんな驚いた。", focus: "made", jaFocus: "驚いた" }
    ],
    arrange: [
      { en: "Let's make plans for the weekend.", ja: "週末の予定を立てよう。", focus: "make plans", jaFocus: "予定を立て" },
      { en: "I made time to watch a movie.", ja: "映画を見る時間を作った。", focus: "made time", jaFocus: "時間を作った" }
    ]
  },
  give: {
    update: [
      { en: "I'll give you an update after dinner.", ja: "夕食後に状況を知らせるね。", focus: "give you an update", jaFocus: "知らせる" },
      { en: "She gave me the latest news.", ja: "彼女が最新ニュースを教えてくれた。", focus: "gave me", jaFocus: "教えてくれた" }
    ],
    feedback: [
      { en: "Can you give me feedback on my song?", ja: "私の曲に感想をくれる？", focus: "give me feedback", jaFocus: "感想" },
      { en: "He gave me useful advice.", ja: "彼は役立つアドバイスをくれた。", focus: "gave me", jaFocus: "くれた" }
    ],
    permission: [
      { en: "My parents gave me permission to go out.", ja: "両親が外出の許可をくれた。", focus: "gave me permission", jaFocus: "許可" },
      { en: "She gave me permission to borrow her book.", ja: "彼女は本を借りる許可をくれた。", focus: "gave me permission", jaFocus: "許可" }
    ],
    presentation: [
      { en: "I gave a short speech at the party.", ja: "パーティーで短いスピーチをした。", focus: "gave", jaFocus: "スピーチをした" },
      { en: "She gave a toast at dinner.", ja: "彼女は夕食で乾杯の挨拶をした。", focus: "gave", jaFocus: "挨拶をした" }
    ],
    chance: [
      { en: "Please give me a chance to try again.", ja: "もう一度挑戦するチャンスをください。", focus: "give me a chance", jaFocus: "チャンス" },
      { en: "This app gives me a chance to practice.", ja: "このアプリは練習する機会をくれる。", focus: "gives me a chance", jaFocus: "機会" }
    ]
  },
  have: {
    m1: [
      { en: "I have a new backpack.", ja: "新しいリュックを持っている。", focus: "have", jaFocus: "持っている" },
      { en: "Do you have a charger?", ja: "充電器を持ってる？", focus: "have", jaFocus: "持ってる" }
    ],
    m2: [
      { en: "I have time after lunch.", ja: "昼食後なら時間がある。", focus: "have", jaFocus: "時間がある" },
      { en: "We have enough time today.", ja: "今日は十分な時間がある。", focus: "have", jaFocus: "時間がある" }
    ],
    m3: [
      { en: "I have a question about this movie.", ja: "この映画について質問がある。", focus: "have", jaFocus: "質問がある" },
      { en: "Do you have any ideas for dinner?", ja: "夕食のアイデアある？", focus: "have", jaFocus: "ある" }
    ],
    m4: [
      { en: "I had coffee with my friend.", ja: "友人とコーヒーを飲んだ。", focus: "had", jaFocus: "飲んだ" },
      { en: "We had lunch near the station.", ja: "駅の近くで昼食を食べた。", focus: "had", jaFocus: "食べた" }
    ],
    m5: [
      { en: "I had a great time at the concert.", ja: "コンサートで楽しい時間を過ごした。", focus: "had", jaFocus: "過ごした" },
      { en: "We had fun at the event.", ja: "イベントで楽しく過ごした。", focus: "had", jaFocus: "過ごした" }
    ]
  }
};

function fallbackDailyExamples(verb: Verb, title: string, focusText?: string): Example[] {
  const base = focusText || verb.word.toLowerCase();
  return [
    { en: `I use ${base} in daily conversation.`, ja: `日常会話で${title}の感覚を使います。`, focus: base.split(" ")[0], jaFocus: "日常会話" },
    { en: `This is a natural way to use ${base}.`, ja: `${title}を自然に使う言い方です。`, focus: base.split(" ")[0], jaFocus: "自然に使う" }
  ];
}

function attachPremiumDailyExamples() {
  const premiumVerbs = new Set(["get", "take", "make", "give", "have"]);
  for (const verb of verbs) {
    if (!premiumVerbs.has(verb.id)) continue;
    for (const meaning of verb.meanings) {
      meaning.dailyExamples = dailyMeaningExamples[verb.id]?.[meaning.id] ?? fallbackDailyExamples(verb, meaning.title, verb.word.toLowerCase());
    }
    for (const phrase of [...verb.collocations, ...verb.phrasalVerbs]) {
      phrase.dailyExamples = [
        { en: `I often ${phrase.phrase} on weekends.`, ja: `週末によく「${phrase.ja}」という場面があります。`, focus: phrase.phrase, jaFocus: phrase.ja },
        { en: `It's useful to know how to ${phrase.phrase}.`, ja: `「${phrase.ja}」の言い方を知っておくと便利です。`, focus: phrase.phrase, jaFocus: phrase.ja }
      ];
    }
  }
}

attachPremiumDailyExamples();

export type TestSection = "basic" | "idioms" | "phrasal" | "all";

export type TestItem = {
  id: string;
  verbId: string;
  section: Exclude<TestSection, "all">;
  meaningTitle: string;
  pattern: string;
  ja: string;
  en: string;
};

function safeId(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
}

export const testItems: TestItem[] = verbs.flatMap((verb) => [
  ...verb.meanings.flatMap((m) =>
    m.examples.slice(0, 3).map((e, index) => ({
      id: `${verb.id}-basic-${m.id}-${index}-${safeId(e.en)}`,
      verbId: verb.id,
      section: "basic" as const,
      meaningTitle: m.title,
      pattern: m.pattern,
      ja: e.ja,
      en: e.en
    }))
  ),
  ...verb.collocations.slice(0, 10).flatMap((p, phraseIndex) =>
    p.examples.slice(0, 3).map((e, index) => ({
      id: `${verb.id}-idioms-${phraseIndex}-${index}-${safeId(e.en)}`,
      verbId: verb.id,
      section: "idioms" as const,
      meaningTitle: `熟語：${p.phrase}`,
      pattern: p.pattern,
      ja: e.ja,
      en: e.en
    }))
  ),
  ...verb.phrasalVerbs.slice(0, 10).flatMap((p, phraseIndex) =>
    p.examples.slice(0, 3).map((e, index) => ({
      id: `${verb.id}-phrasal-${phraseIndex}-${index}-${safeId(e.en)}`,
      verbId: verb.id,
      section: "phrasal" as const,
      meaningTitle: `句動詞：${p.phrase}`,
      pattern: p.pattern,
      ja: e.ja,
      en: e.en
    }))
  )
]);

export function getVerb(id: string) {
  return verbs.find((v) => v.id === id) ?? verbs[0];
}

export function getTestItemsForVerb(verbId: string, section: TestSection = "all") {
  return testItems.filter((item) => item.verbId === verbId && (section === "all" || item.section === section));
}

export function getTestItemById(itemId: string) {
  return testItems.find((item) => item.id === itemId);
}
