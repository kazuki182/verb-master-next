export type Example = {
  en: string;
  ja: string;
  focus?: string;
  object?: string;
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
    id: "get",
    rank: 1,
    word: "GET",
    ipa: "/ɡet/",
    kana: "ゲット",
    syllable: "get",
    transitivity: "他動詞・自動詞",
    importance: "★★★★★ 超重要",
    core: "自分のものになる",
    coreDetail: "外にある物・情報・状態・場所が、自分の領域に入ってくるイメージ。",
    meanings: [
      {
        id: "obtain",
        title: "① 手に入れる",
        pattern: "get + 名詞",
        transitivity: "他動詞",
        structure: "S + get + O（目的語）",
        image: "外にある物や情報を、自分のところに取り込む。",
        point: "get の後ろに「何を手に入れたか」を置く。phone, ticket, job, chance などが目的語になる。",
        examples: [
          { en: "I got a new phone yesterday.", ja: "昨日、新しいスマホを手に入れた。", focus: "got", object: "a new phone" },
          { en: "She got a ticket for the concert.", ja: "彼女はコンサートのチケットを手に入れた。", focus: "got", object: "a ticket" },
          { en: "I got a new job last month.", ja: "先月、新しい仕事を得た。", focus: "got", object: "a new job" }
        ]
      },
      {
        id: "become",
        title: "② 〜になる",
        pattern: "get + 形容詞",
        transitivity: "自動詞に近い使い方",
        structure: "S + get + C（補語）",
        image: "ある状態が自分に入ってきて、その状態になる。",
        point: "tired, cold, angry, better など、状態を表す形容詞を後ろに置く。",
        examples: [
          { en: "I'm getting tired.", ja: "疲れてきた。", focus: "getting" },
          { en: "It's getting cold.", ja: "寒くなってきた。", focus: "getting" },
          { en: "He got angry.", ja: "彼は怒った。", focus: "got" }
        ]
      },
      {
        id: "arrive",
        title: "③ 到着する",
        pattern: "get to + 場所 / get home",
        transitivity: "自動詞",
        structure: "S + get + to 場所",
        image: "目的地が自分の到達範囲に入る。",
        point: "home は副詞なので get to home ではなく get home。",
        examples: [
          { en: "I got to the station at eight.", ja: "8時に駅に着いた。", focus: "got to", object: "the station" },
          { en: "I got home late.", ja: "遅く帰宅した。", focus: "got home" },
          { en: "What time did you get to work?", ja: "何時に職場に着きましたか？", focus: "get to", object: "work" }
        ]
      },
      {
        id: "understand",
        title: "④ 理解する",
        pattern: "get + 内容",
        transitivity: "他動詞",
        structure: "S + get + O（内容）",
        image: "意味や考えが自分の中に入ってくる。",
        point: "I get it. は「分かった」。会話で非常によく使う。",
        examples: [
          { en: "I get it.", ja: "分かった。", focus: "get", object: "it" },
          { en: "I don't get the joke.", ja: "その冗談が分からない。", focus: "get", object: "the joke" }
        ]
      }
    ],
    collocations: [
      {
        phrase: "get ready",
        ja: "準備する",
        image: "ready（準備できた状態）が自分に入る → 準備できた状態になる。",
        pattern: "get + 形容詞",
        examples: [
          { en: "I'm getting ready for work.", ja: "仕事の準備をしている。", focus: "getting ready" },
          { en: "We need to get ready now.", ja: "今、準備する必要がある。", focus: "get ready" }
        ]
      },
      {
        phrase: "get better",
        ja: "良くなる",
        image: "better（より良い状態）になる。体調・能力・状況に使える。",
        pattern: "get + 形容詞",
        examples: [
          { en: "You will get better soon.", ja: "すぐ良くなるよ。", focus: "get better" },
          { en: "My English is getting better.", ja: "英語が上達している。", focus: "getting better" }
        ]
      },
      {
        phrase: "get married",
        ja: "結婚する",
        image: "married（結婚した状態）になる。相手を言うときは married to を使う。",
        pattern: "get + 形容詞",
        examples: [
          { en: "They got married last year.", ja: "彼らは昨年結婚した。", focus: "got married" },
          { en: "She got married to a doctor.", ja: "彼女は医者と結婚した。", focus: "got married" }
        ]
      }
    ],
    phrasalVerbs: [
      {
        phrase: "get up",
        ja: "起きる",
        image: "up は上方向。体が上がる → 起き上がる → 起きる。",
        pattern: "get + 副詞",
        examples: [
          { en: "I get up at six.", ja: "私は6時に起きる。", focus: "get up" },
          { en: "He got up early today.", ja: "彼は今日早く起きた。", focus: "got up" }
        ]
      },
      {
        phrase: "get over",
        ja: "乗り越える",
        image: "over は越える。問題や病気を越えて向こう側へ行く。",
        pattern: "get over + 名詞",
        examples: [
          { en: "She got over the problem.", ja: "彼女はその問題を乗り越えた。", focus: "got over", object: "the problem" },
          { en: "He got over his illness.", ja: "彼は病気を克服した。", focus: "got over", object: "his illness" }
        ]
      },
      {
        phrase: "get back",
        ja: "戻る",
        image: "back は後ろ・元の場所。元の場所に戻ってくる。",
        pattern: "get back / get back to + 場所",
        examples: [
          { en: "I got back home late.", ja: "遅く家に戻った。", focus: "got back" },
          { en: "When did you get back?", ja: "いつ戻ったの？", focus: "get back" }
        ]
      }
    ]
  },
  {
    id: "take",
    rank: 2,
    word: "TAKE",
    ipa: "/teɪk/",
    kana: "テイク",
    syllable: "take",
    transitivity: "他動詞中心",
    importance: "★★★★★ 超重要",
    core: "手に取って自分の側へ持っていく",
    coreDetail: "物・時間・機会・責任などを、自分の側に取り込んで扱うイメージ。",
    meanings: [
      {
        id: "grab",
        title: "① 取る・持っていく",
        pattern: "take + 名詞",
        transitivity: "他動詞",
        structure: "S + take + O（目的語）",
        image: "目の前のものを手に取って、自分の側へ動かす。",
        point: "take の後ろに、取る物・持っていく物を置く。",
        examples: [
          { en: "Take your umbrella.", ja: "傘を持っていきなさい。", focus: "Take", object: "your umbrella" },
          { en: "She took the keys.", ja: "彼女は鍵を持っていった。", focus: "took", object: "the keys" }
        ]
      },
      {
        id: "transport",
        title: "② 連れていく・持っていく",
        pattern: "take + 人 + 場所",
        transitivity: "他動詞",
        structure: "S + take + O + to 場所",
        image: "人や物を自分の動きに乗せて、別の場所へ運ぶ。",
        point: "人を目的語にして、その後ろに行き先を置く。",
        examples: [
          { en: "I'll take you home.", ja: "家まで送るよ。", focus: "take", object: "you" },
          { en: "She took her son to school.", ja: "彼女は息子を学校へ連れて行った。", focus: "took", object: "her son" }
        ]
      },
      {
        id: "need-time",
        title: "③ 時間がかかる",
        pattern: "It takes + 人 + 時間",
        transitivity: "他動詞",
        structure: "It + takes + 人 + 時間",
        image: "時間を自分の側に必要量として取る。",
        point: "英語では『時間が人を取る』ように表す。It takes me 30 minutes. が基本形。",
        examples: [
          { en: "It takes me thirty minutes.", ja: "私は30分かかる。", focus: "takes" },
          { en: "It took us two hours.", ja: "私たちは2時間かかった。", focus: "took" }
        ]
      },
      {
        id: "use",
        title: "④ 利用する・受ける",
        pattern: "take + 交通手段 / 試験 / 講座",
        transitivity: "他動詞",
        structure: "S + take + O",
        image: "交通手段や試験などを自分の行動として取り込む。",
        point: "train, taxi, test, course などを目的語にできる。",
        examples: [
          { en: "I take the train to work.", ja: "私は電車で通勤している。", focus: "take", object: "the train" },
          { en: "I took the test yesterday.", ja: "昨日テストを受けた。", focus: "took", object: "the test" }
        ]
      }
    ],
    collocations: [
      {
        phrase: "take a break",
        ja: "休憩する",
        image: "break（休み）を自分の時間として取る。",
        pattern: "take + 名詞",
        examples: [
          { en: "Let's take a break.", ja: "休憩しよう。", focus: "take a break" },
          { en: "We took a short break.", ja: "私たちは少し休憩した。", focus: "took a short break" }
        ]
      },
      {
        phrase: "take a picture",
        ja: "写真を撮る",
        image: "写真という結果を自分のものとして取る。",
        pattern: "take + 名詞",
        examples: [
          { en: "Can you take a picture?", ja: "写真を撮ってくれる？", focus: "take a picture" },
          { en: "I took many pictures.", ja: "たくさん写真を撮った。", focus: "took many pictures" }
        ]
      },
      {
        phrase: "take medicine",
        ja: "薬を飲む",
        image: "薬を体の中に取り込む。drink ではなく take を使う。",
        pattern: "take + 名詞",
        examples: [
          { en: "Take this medicine.", ja: "この薬を飲んでください。", focus: "Take", object: "this medicine" },
          { en: "I took medicine after dinner.", ja: "夕食後に薬を飲んだ。", focus: "took medicine" }
        ]
      }
    ],
    phrasalVerbs: [
      {
        phrase: "take off",
        ja: "脱ぐ・離陸する",
        image: "off は離れる。体から服が離れる、地面から飛行機が離れる。",
        pattern: "take off + 名詞 / take off",
        examples: [
          { en: "Take off your shoes.", ja: "靴を脱いでください。", focus: "Take off", object: "your shoes" },
          { en: "The plane took off.", ja: "飛行機が離陸した。", focus: "took off" }
        ]
      },
      {
        phrase: "take over",
        ja: "引き継ぐ",
        image: "over は上から覆う・支配する。役割や仕事を自分が引き受ける。",
        pattern: "take over + 名詞",
        examples: [
          { en: "He took over the project.", ja: "彼がそのプロジェクトを引き継いだ。", focus: "took over", object: "the project" },
          { en: "Can you take over for me?", ja: "私の代わりに引き継いでくれる？", focus: "take over" }
        ]
      }
    ]
  },
  {
    id: "make",
    rank: 3,
    word: "MAKE",
    ipa: "/meɪk/",
    kana: "メイク",
    syllable: "make",
    transitivity: "他動詞",
    importance: "★★★★★ 超重要",
    core: "作り出す・変化を生む",
    coreDetail: "何かを作るだけでなく、人や物に変化・結果を生み出すイメージ。",
    meanings: [
      {
        id: "create",
        title: "① 作る",
        pattern: "make + 名詞",
        transitivity: "他動詞",
        structure: "S + make + O",
        image: "材料や考えから、新しいものを作り出す。",
        point: "食事・計画・作品など、作った結果を目的語に置く。",
        examples: [
          { en: "I made dinner.", ja: "夕食を作った。", focus: "made", object: "dinner" },
          { en: "She made a plan.", ja: "彼女は計画を立てた。", focus: "made", object: "a plan" }
        ]
      },
      {
        id: "cause-state",
        title: "② 人を〜にする",
        pattern: "make + 人 + 形容詞",
        transitivity: "他動詞",
        structure: "S + make + O + C",
        image: "人や物に影響して、ある状態を作り出す。",
        point: "happy, sad, angry, nervous など感情・状態の形容詞と相性が良い。",
        examples: [
          { en: "You make me happy.", ja: "あなたは私を幸せにする。", focus: "make", object: "me" },
          { en: "The movie made him sad.", ja: "その映画で彼は悲しくなった。", focus: "made", object: "him" }
        ]
      },
      {
        id: "force",
        title: "③ 人に〜させる",
        pattern: "make + 人 + 動詞原形",
        transitivity: "他動詞",
        structure: "S + make + O + V原形",
        image: "人に働きかけて、行動という結果を作る。",
        point: "make me to study ではなく make me study。to は不要。",
        examples: [
          { en: "My teacher made me study.", ja: "先生は私に勉強させた。", focus: "made", object: "me" },
          { en: "The news made everyone smile.", ja: "そのニュースでみんなが笑顔になった。", focus: "made", object: "everyone" }
        ]
      },
      {
        id: "earn",
        title: "④ 稼ぐ",
        pattern: "make + money",
        transitivity: "他動詞",
        structure: "S + make + O",
        image: "働きや活動から、お金という結果を作り出す。",
        point: "make money は日常会話でもビジネスでもよく使う。",
        examples: [
          { en: "He makes a lot of money.", ja: "彼はたくさん稼ぐ。", focus: "makes", object: "a lot of money" },
          { en: "I want to make more money.", ja: "もっとお金を稼ぎたい。", focus: "make", object: "more money" }
        ]
      }
    ],
    collocations: [
      {
        phrase: "make a mistake",
        ja: "間違える",
        image: "mistake（間違い）という結果を作ってしまう。",
        pattern: "make + 名詞",
        examples: [
          { en: "Everyone makes mistakes.", ja: "誰でも間違える。", focus: "makes mistakes" },
          { en: "I made a mistake.", ja: "私はミスをした。", focus: "made a mistake" }
        ]
      },
      {
        phrase: "make a decision",
        ja: "決断する",
        image: "decision（決定）を作り出す。",
        pattern: "make + 名詞",
        examples: [
          { en: "I made a decision.", ja: "私は決断した。", focus: "made a decision" },
          { en: "You need to make a decision.", ja: "決断する必要がある。", focus: "make a decision" }
        ]
      },
      {
        phrase: "make friends",
        ja: "友達になる",
        image: "友人関係を作り出す。",
        pattern: "make + 名詞",
        examples: [
          { en: "I made many friends.", ja: "たくさん友達ができた。", focus: "made many friends" },
          { en: "She quickly made friends.", ja: "彼女はすぐ友達ができた。", focus: "made friends" }
        ]
      }
    ],
    phrasalVerbs: [
      {
        phrase: "make up",
        ja: "作り上げる・仲直りする",
        image: "up は完成・積み上げ。話を作り上げる、関係を元に戻す。",
        pattern: "make up + 名詞 / make up",
        examples: [
          { en: "He made up a story.", ja: "彼は話を作り上げた。", focus: "made up", object: "a story" },
          { en: "They made up after the fight.", ja: "彼らは喧嘩の後に仲直りした。", focus: "made up" }
        ]
      },
      {
        phrase: "make out",
        ja: "理解する・見分ける",
        image: "out は外へはっきり出る。ぼんやりしたものが分かる状態になる。",
        pattern: "make out + 名詞/節",
        examples: [
          { en: "I can't make out the sign.", ja: "その標識がよく分からない。", focus: "make out", object: "the sign" },
          { en: "Can you make out what he said?", ja: "彼が言ったことが分かる？", focus: "make out" }
        ]
      }
    ]
  },
  {
    id: "give",
    rank: 4,
    word: "GIVE",
    ipa: "/ɡɪv/",
    kana: "ギヴ",
    syllable: "give",
    transitivity: "他動詞",
    importance: "★★★★★ 超重要",
    core: "自分の側から相手へ渡す",
    coreDetail: "物・情報・機会・影響などを、自分側から相手側へ移動させるイメージ。",
    meanings: [
      {
        id: "transfer",
        title: "① 与える・渡す",
        pattern: "give + 人 + 物 / give + 物 + to 人",
        transitivity: "他動詞",
        structure: "S + give + 人 + 物（SVOO）",
        image: "自分のところにあるものを、相手のところへ移す。",
        point: "give me a call / give her a gift のように人を先に置ける。",
        examples: [
          { en: "I gave her a gift.", ja: "私は彼女にプレゼントをあげた。", focus: "gave", object: "her a gift" },
          { en: "Can you give me some advice?", ja: "少しアドバイスをくれますか？", focus: "give", object: "me some advice" }
        ]
      },
      {
        id: "provide",
        title: "② 提供する",
        pattern: "give + 情報/機会/時間",
        transitivity: "他動詞",
        structure: "S + give + O",
        image: "相手に役立つものを渡す。",
        point: "information, chance, time, help など形のないものにも使える。",
        examples: [
          { en: "This book gives useful examples.", ja: "この本は役立つ例を示している。", focus: "gives", object: "useful examples" },
          { en: "Please give me more time.", ja: "もう少し時間をください。", focus: "give", object: "me more time" }
        ]
      },
      {
        id: "effect",
        title: "③ 影響・印象を与える",
        pattern: "give + 人 + 感情/印象",
        transitivity: "他動詞",
        structure: "S + give + 人 + O",
        image: "相手の心に感情や印象を渡す。",
        point: "give me hope, give me confidence など感情にも使える。",
        examples: [
          { en: "Your words gave me confidence.", ja: "あなたの言葉が私に自信をくれた。", focus: "gave", object: "me confidence" },
          { en: "The movie gave me hope.", ja: "その映画は私に希望を与えた。", focus: "gave", object: "me hope" }
        ]
      }
    ],
    collocations: [
      {
        phrase: "give advice",
        ja: "助言する",
        image: "advice（助言）を相手へ渡す。",
        pattern: "give + 名詞",
        examples: [
          { en: "She gave me good advice.", ja: "彼女は良い助言をくれた。", focus: "gave", object: "me good advice" },
          { en: "Can you give advice to beginners?", ja: "初心者に助言できますか？", focus: "give advice" }
        ]
      },
      {
        phrase: "give a presentation",
        ja: "プレゼンする",
        image: "presentation を聞き手へ渡す。発表する。",
        pattern: "give + 名詞",
        examples: [
          { en: "I gave a presentation yesterday.", ja: "昨日プレゼンをした。", focus: "gave a presentation" },
          { en: "She will give a presentation next week.", ja: "彼女は来週プレゼンをする。", focus: "give a presentation" }
        ]
      },
      {
        phrase: "give someone a call",
        ja: "電話する",
        image: "call（電話）を相手に渡す → 電話する。",
        pattern: "give + 人 + 名詞",
        examples: [
          { en: "I'll give you a call later.", ja: "あとで電話するね。", focus: "give you a call" },
          { en: "Please give me a call tomorrow.", ja: "明日電話してください。", focus: "give me a call" }
        ]
      }
    ],
    phrasalVerbs: [
      {
        phrase: "give up",
        ja: "諦める",
        image: "up は手放す・上へ放すイメージ。握っていたものを手放す → 諦める。",
        pattern: "give up + 名詞 / give up",
        examples: [
          { en: "Don't give up.", ja: "諦めないで。", focus: "give up" },
          { en: "He gave up smoking.", ja: "彼は喫煙をやめた。", focus: "gave up", object: "smoking" }
        ]
      },
      {
        phrase: "give back",
        ja: "返す",
        image: "back は元の場所。相手から来たものを元に戻す。",
        pattern: "give back + 名詞 / give + 名詞 + back",
        examples: [
          { en: "Please give back my book.", ja: "私の本を返してください。", focus: "give back", object: "my book" },
          { en: "I gave the money back.", ja: "私はお金を返した。", focus: "gave the money back", object: "the money" }
        ]
      }
    ]
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
