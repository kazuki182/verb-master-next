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
    "coreDetail": "外にある物・情報・状態・場所が、自分の領域に入ってくるイメージ。",
    "meanings": [
      {
        "id": "main",
        "title": "① 手に入れる",
        "pattern": "get + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + get + O（目的語）",
        "image": "外にある物や情報を、自分のところに取り込む。",
        "point": "get の後ろに「何を手に入れたか」を置く。phone, ticket, job, chance などが目的語になる。",
        "examples": [
          {
            "en": "I got a new phone yesterday.",
            "ja": "昨日、新しいスマホを手に入れた。",
            "focus": "got",
            "object": "a new phone",
            "jaFocus": "手に入れた"
          },
          {
            "en": "She got a ticket for the concert.",
            "ja": "彼女はコンサートのチケットを手に入れた。",
            "focus": "got",
            "jaFocus": "手に入れた"
          },
          {
            "en": "I got your email.",
            "ja": "メール確認しました。",
            "focus": "got",
            "jaFocus": "確認しました"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "get ready",
        "ja": "準備する",
        "image": "ready（準備できた状態）が自分に入る → 準備できた状態になる。",
        "pattern": "get + 形容詞",
        "examples": [
          {
            "en": "I'm getting ready for work.",
            "ja": "仕事の準備をしている。",
            "focus": "getting ready",
            "jaFocus": "準備"
          },
          {
            "en": "We need to get ready now.",
            "ja": "今、準備する必要がある。",
            "focus": "get ready",
            "jaFocus": "準備"
          },
          {
            "en": "Please get ready for the meeting.",
            "ja": "会議の準備をしてください。",
            "focus": "get ready",
            "jaFocus": "準備"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "get up",
        "ja": "起きる",
        "image": "up は上方向。体が上がる → 起き上がる → 起きる。",
        "pattern": "get + up",
        "examples": [
          {
            "en": "I get up at six.",
            "ja": "私は6時に起きる。",
            "focus": "get up",
            "jaFocus": "起きる"
          },
          {
            "en": "He got up early today.",
            "ja": "彼は今日早く起きた。",
            "focus": "got up",
            "jaFocus": "起きた"
          },
          {
            "en": "What time do you get up?",
            "ja": "何時に起きますか？",
            "focus": "get up",
            "jaFocus": "起きます"
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
    "core": "手に取って自分の側へ持っていく",
    "coreDetail": "物・時間・機会・責任などを、自分の側に取り込んで扱うイメージ。",
    "meanings": [
      {
        "id": "main",
        "title": "① 取る・持っていく",
        "pattern": "take + 名詞",
        "transitivity": "他動詞中心",
        "structure": "S + take + O（目的語）",
        "image": "目の前のものを手に取って、自分の側へ動かす。",
        "point": "take の後ろに、取る物・持っていく物を置く。",
        "examples": [
          {
            "en": "Take your umbrella.",
            "ja": "傘を持っていきなさい。",
            "focus": "Take",
            "object": "your umbrella",
            "jaFocus": "持っていき"
          },
          {
            "en": "She took the keys.",
            "ja": "彼女は鍵を持っていった。",
            "focus": "took",
            "jaFocus": "持っていった"
          },
          {
            "en": "It takes me thirty minutes.",
            "ja": "私は30分かかる。",
            "focus": "takes",
            "jaFocus": "かかる"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "take a break",
        "ja": "休憩する",
        "image": "break（休憩）を自分の行動として取る。",
        "pattern": "take + 名詞",
        "examples": [
          {
            "en": "Let's take a break.",
            "ja": "休憩しましょう。",
            "focus": "take a break",
            "jaFocus": "休憩"
          },
          {
            "en": "We took a short break.",
            "ja": "少し休憩した。",
            "focus": "took a short break",
            "jaFocus": "休憩"
          },
          {
            "en": "You should take a break now.",
            "ja": "今休憩した方がいい。",
            "focus": "take a break",
            "jaFocus": "休憩"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "take off",
        "ja": "離陸する・脱ぐ",
        "image": "off は離れる。地面から離れる、身につけた物を離す。",
        "pattern": "take + off",
        "examples": [
          {
            "en": "The plane took off.",
            "ja": "飛行機が離陸した。",
            "focus": "took off",
            "jaFocus": "離陸"
          },
          {
            "en": "Please take off your shoes.",
            "ja": "靴を脱いでください。",
            "focus": "take off",
            "jaFocus": "脱い"
          },
          {
            "en": "The meeting really took off.",
            "ja": "会議が本格的に動き出した。",
            "focus": "took off",
            "jaFocus": "動き出した"
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
    "transitivity": "他動詞",
    "importance": "★★★★★ 超重要",
    "core": "作り出す・変化を生む",
    "coreDetail": "何かを作る、または人や物をある状態にするイメージ。",
    "meanings": [
      {
        "id": "main",
        "title": "① 作る",
        "pattern": "make + 名詞",
        "transitivity": "他動詞",
        "structure": "S + make + O（目的語）",
        "image": "材料や考えから新しいものを作り出す。",
        "point": "make の後ろに、作るものを置く。plan, cake, report など。",
        "examples": [
          {
            "en": "I made a plan.",
            "ja": "計画を作った。",
            "focus": "made",
            "object": "a plan",
            "jaFocus": "作った"
          },
          {
            "en": "She made dinner.",
            "ja": "彼女は夕食を作った。",
            "focus": "made",
            "jaFocus": "作った"
          },
          {
            "en": "This makes sense.",
            "ja": "これは意味が通る。",
            "focus": "makes",
            "jaFocus": "意味が通る"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "make a decision",
        "ja": "決断する",
        "image": "decision（決断）を作り出す。",
        "pattern": "make + 名詞",
        "examples": [
          {
            "en": "I made a decision.",
            "ja": "決断した。",
            "focus": "made a decision",
            "jaFocus": "決断"
          },
          {
            "en": "We need to make a decision today.",
            "ja": "今日決断する必要がある。",
            "focus": "make a decision",
            "jaFocus": "決断"
          },
          {
            "en": "It is hard to make a decision.",
            "ja": "決断するのは難しい。",
            "focus": "make a decision",
            "jaFocus": "決断"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "make up",
        "ja": "作り上げる・仲直りする",
        "image": "up は完成へ向かうイメージ。話を作り上げる、関係を修復する。",
        "pattern": "make + up",
        "examples": [
          {
            "en": "He made up a story.",
            "ja": "彼は話を作り上げた。",
            "focus": "made up",
            "jaFocus": "作り上げ"
          },
          {
            "en": "They made up after the fight.",
            "ja": "彼らは喧嘩のあと仲直りした。",
            "focus": "made up",
            "jaFocus": "仲直り"
          },
          {
            "en": "Do not make up excuses.",
            "ja": "言い訳を作らないで。",
            "focus": "make up",
            "jaFocus": "作ら"
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
    "transitivity": "他動詞",
    "importance": "★★★★★ 超重要",
    "core": "相手に渡す",
    "coreDetail": "自分の領域にあるものを、相手の領域へ移すイメージ。",
    "meanings": [
      {
        "id": "main",
        "title": "① 与える・渡す",
        "pattern": "give + 人 + 名詞",
        "transitivity": "他動詞",
        "structure": "S + give + 人 + O",
        "image": "物・情報・機会を相手に渡す。",
        "point": "give は「誰に」「何を」を一緒に使うことが多い。",
        "examples": [
          {
            "en": "I gave him the file.",
            "ja": "彼にファイルを渡した。",
            "focus": "gave",
            "object": "him the file",
            "jaFocus": "渡した"
          },
          {
            "en": "Can you give me some advice?",
            "ja": "助言してくれますか？",
            "focus": "give",
            "jaFocus": "助言"
          },
          {
            "en": "I will give you a call later.",
            "ja": "あとで電話します。",
            "focus": "give you a call",
            "jaFocus": "電話します"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "give advice",
        "ja": "助言する",
        "image": "advice（助言）を相手へ渡す。",
        "pattern": "give + 名詞",
        "examples": [
          {
            "en": "She gave me good advice.",
            "ja": "彼女は良い助言をくれた。",
            "focus": "gave me good advice",
            "jaFocus": "助言"
          },
          {
            "en": "Can you give advice to beginners?",
            "ja": "初心者に助言できますか？",
            "focus": "give advice",
            "jaFocus": "助言"
          },
          {
            "en": "My boss gave me useful advice.",
            "ja": "上司が役立つ助言をくれた。",
            "focus": "gave me useful advice",
            "jaFocus": "助言"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "give up",
        "ja": "諦める",
        "image": "握っていたものを手放す → 諦める。",
        "pattern": "give + up",
        "examples": [
          {
            "en": "Don't give up.",
            "ja": "諦めないで。",
            "focus": "give up",
            "jaFocus": "諦め"
          },
          {
            "en": "He gave up smoking.",
            "ja": "彼は喫煙をやめた。",
            "focus": "gave up",
            "jaFocus": "やめた"
          },
          {
            "en": "I will not give up on English.",
            "ja": "英語を諦めない。",
            "focus": "give up",
            "jaFocus": "諦め"
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
    "core": "自分の中に持っている",
    "coreDetail": "物・経験・時間・予定・感情を、自分の領域内に持つイメージ。",
    "meanings": [
      {
        "id": "main",
        "title": "① 持っている",
        "pattern": "have + 名詞",
        "transitivity": "他動詞中心",
        "structure": "S + have + O（目的語）",
        "image": "物や予定、経験を自分の領域に持っている。",
        "point": "have の後ろに、持っている物・予定・経験を置く。",
        "examples": [
          {
            "en": "I have a meeting today.",
            "ja": "今日は会議がある。",
            "focus": "have",
            "object": "a meeting",
            "jaFocus": "会議がある"
          },
          {
            "en": "We have enough time.",
            "ja": "私たちには十分な時間がある。",
            "focus": "have",
            "jaFocus": "時間がある"
          },
          {
            "en": "I had lunch with my boss.",
            "ja": "上司と昼食をとった。",
            "focus": "had",
            "jaFocus": "昼食をとった"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "have a meeting",
        "ja": "会議がある",
        "image": "meeting を自分の予定として持つ。",
        "pattern": "have + 名詞",
        "examples": [
          {
            "en": "I have a meeting at three.",
            "ja": "3時に会議がある。",
            "focus": "have a meeting",
            "jaFocus": "会議がある"
          },
          {
            "en": "We had a long meeting.",
            "ja": "長い会議があった。",
            "focus": "had a long meeting",
            "jaFocus": "会議があった"
          },
          {
            "en": "Do you have a meeting today?",
            "ja": "今日は会議がありますか？",
            "focus": "have a meeting",
            "jaFocus": "会議"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "have on",
        "ja": "身につけている",
        "image": "on は接触。服や物を身につけている。",
        "pattern": "have + 名詞 + on",
        "examples": [
          {
            "en": "She has a jacket on.",
            "ja": "彼女はジャケットを着ている。",
            "focus": "has a jacket on",
            "jaFocus": "着ている"
          },
          {
            "en": "He had glasses on.",
            "ja": "彼は眼鏡をかけていた。",
            "focus": "had glasses on",
            "jaFocus": "かけていた"
          },
          {
            "en": "I have my badge on.",
            "ja": "社員証を身につけている。",
            "focus": "have my badge on",
            "jaFocus": "身につけている"
          }
        ]
      }
    ]
  },
  {
    "id": "start",
    "rank": 6,
    "word": "START",
    "ipa": "/stɑːrt/",
    "kana": "スタート",
    "syllable": "start",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "動き始める",
    "coreDetail": "物事を開始する。",
    "meanings": [
      {
        "id": "main",
        "title": "① 始める",
        "pattern": "start + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "物事を開始する。",
        "point": "start は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I start it every day.",
            "ja": "私は毎日それを始める。",
            "focus": "start",
            "object": "it",
            "jaFocus": "始め"
          },
          {
            "en": "We need to start this today.",
            "ja": "私たちは今日これを始める必要がある。",
            "focus": "start",
            "object": "this",
            "jaFocus": "始め"
          },
          {
            "en": "Can you start it now?",
            "ja": "今それを始められますか？",
            "focus": "start",
            "object": "it",
            "jaFocus": "始め"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "start a meeting",
        "ja": "会議を始める",
        "image": "会議を始めるというまとまりで覚える。",
        "pattern": "start + 名詞",
        "examples": [
          {
            "en": "I often start a meeting.",
            "ja": "私はよく会議を始める。",
            "focus": "start a meeting",
            "jaFocus": "会議を始める"
          },
          {
            "en": "We need to start a meeting today.",
            "ja": "今日は会議を始める必要がある。",
            "focus": "start a meeting",
            "jaFocus": "会議を始める"
          },
          {
            "en": "Can you start a meeting now?",
            "ja": "今会議を始めるできますか？",
            "focus": "start a meeting",
            "jaFocus": "会議を始める"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "start over",
        "ja": "やり直す",
        "image": "start over は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "start + 副詞/前置詞",
        "examples": [
          {
            "en": "I often start over.",
            "ja": "私はよくやり直す。",
            "focus": "start over",
            "jaFocus": "やり直す"
          },
          {
            "en": "We need to start over today.",
            "ja": "今日はやり直す必要がある。",
            "focus": "start over",
            "jaFocus": "やり直す"
          },
          {
            "en": "Can you start over now?",
            "ja": "今やり直すできますか？",
            "focus": "start over",
            "jaFocus": "やり直す"
          }
        ]
      }
    ]
  },
  {
    "id": "stop",
    "rank": 7,
    "word": "STOP",
    "ipa": "/stɑːp/",
    "kana": "ストップ",
    "syllable": "stop",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "動きを止める",
    "coreDetail": "続いていたことを終える。",
    "meanings": [
      {
        "id": "main",
        "title": "① 止める",
        "pattern": "stop + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "続いていたことを終える。",
        "point": "stop は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I stop it every day.",
            "ja": "私は毎日それを止める。",
            "focus": "stop",
            "object": "it",
            "jaFocus": "止め"
          },
          {
            "en": "We need to stop this today.",
            "ja": "私たちは今日これを止める必要がある。",
            "focus": "stop",
            "object": "this",
            "jaFocus": "止め"
          },
          {
            "en": "Can you stop it now?",
            "ja": "今それを止められますか？",
            "focus": "stop",
            "object": "it",
            "jaFocus": "止め"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "stop work",
        "ja": "仕事を止める",
        "image": "仕事を止めるというまとまりで覚える。",
        "pattern": "stop + 名詞",
        "examples": [
          {
            "en": "I often stop work.",
            "ja": "私はよく仕事を止める。",
            "focus": "stop work",
            "jaFocus": "仕事を止める"
          },
          {
            "en": "We need to stop work today.",
            "ja": "今日は仕事を止める必要がある。",
            "focus": "stop work",
            "jaFocus": "仕事を止める"
          },
          {
            "en": "Can you stop work now?",
            "ja": "今仕事を止めるできますか？",
            "focus": "stop work",
            "jaFocus": "仕事を止める"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "stop by",
        "ja": "立ち寄る",
        "image": "stop by は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "stop + 副詞/前置詞",
        "examples": [
          {
            "en": "I often stop by.",
            "ja": "私はよく立ち寄る。",
            "focus": "stop by",
            "jaFocus": "立ち寄る"
          },
          {
            "en": "We need to stop by today.",
            "ja": "今日は立ち寄る必要がある。",
            "focus": "stop by",
            "jaFocus": "立ち寄る"
          },
          {
            "en": "Can you stop by now?",
            "ja": "今立ち寄るできますか？",
            "focus": "stop by",
            "jaFocus": "立ち寄る"
          }
        ]
      }
    ]
  },
  {
    "id": "try",
    "rank": 8,
    "word": "TRY",
    "ipa": "/traɪ/",
    "kana": "トライ",
    "syllable": "try",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "やってみる",
    "coreDetail": "結果が分からないことに挑戦する。",
    "meanings": [
      {
        "id": "main",
        "title": "① 試す",
        "pattern": "try + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "結果が分からないことに挑戦する。",
        "point": "try は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I try it every day.",
            "ja": "私は毎日それを試しる。",
            "focus": "try",
            "object": "it",
            "jaFocus": "試し"
          },
          {
            "en": "We need to try this today.",
            "ja": "私たちは今日これを試しる必要がある。",
            "focus": "try",
            "object": "this",
            "jaFocus": "試し"
          },
          {
            "en": "Can you try it now?",
            "ja": "今それを試しられますか？",
            "focus": "try",
            "object": "it",
            "jaFocus": "試し"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "try again",
        "ja": "もう一度試す",
        "image": "もう一度試すというまとまりで覚える。",
        "pattern": "try + 名詞",
        "examples": [
          {
            "en": "I often try again.",
            "ja": "私はよくもう一度試す。",
            "focus": "try again",
            "jaFocus": "もう一度試す"
          },
          {
            "en": "We need to try again today.",
            "ja": "今日はもう一度試す必要がある。",
            "focus": "try again",
            "jaFocus": "もう一度試す"
          },
          {
            "en": "Can you try again now?",
            "ja": "今もう一度試すできますか？",
            "focus": "try again",
            "jaFocus": "もう一度試す"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "try out",
        "ja": "試してみる",
        "image": "try out は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "try + 副詞/前置詞",
        "examples": [
          {
            "en": "I often try out.",
            "ja": "私はよく試してみる。",
            "focus": "try out",
            "jaFocus": "試してみる"
          },
          {
            "en": "We need to try out today.",
            "ja": "今日は試してみる必要がある。",
            "focus": "try out",
            "jaFocus": "試してみる"
          },
          {
            "en": "Can you try out now?",
            "ja": "今試してみるできますか？",
            "focus": "try out",
            "jaFocus": "試してみる"
          }
        ]
      }
    ]
  },
  {
    "id": "help",
    "rank": 9,
    "word": "HELP",
    "ipa": "/help/",
    "kana": "ヘルプ",
    "syllable": "help",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "相手を支える",
    "coreDetail": "相手ができるように手を貸す。",
    "meanings": [
      {
        "id": "main",
        "title": "① 助ける",
        "pattern": "help + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "相手ができるように手を貸す。",
        "point": "help は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I help it every day.",
            "ja": "私は毎日それを助ける。",
            "focus": "help",
            "object": "it",
            "jaFocus": "助け"
          },
          {
            "en": "We need to help this today.",
            "ja": "私たちは今日これを助ける必要がある。",
            "focus": "help",
            "object": "this",
            "jaFocus": "助け"
          },
          {
            "en": "Can you help it now?",
            "ja": "今それを助けられますか？",
            "focus": "help",
            "object": "it",
            "jaFocus": "助け"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "help someone",
        "ja": "人を助ける",
        "image": "人を助けるというまとまりで覚える。",
        "pattern": "help + 名詞",
        "examples": [
          {
            "en": "I often help someone.",
            "ja": "私はよく人を助ける。",
            "focus": "help someone",
            "jaFocus": "人を助ける"
          },
          {
            "en": "We need to help someone today.",
            "ja": "今日は人を助ける必要がある。",
            "focus": "help someone",
            "jaFocus": "人を助ける"
          },
          {
            "en": "Can you help someone now?",
            "ja": "今人を助けるできますか？",
            "focus": "help someone",
            "jaFocus": "人を助ける"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "help out",
        "ja": "手伝う",
        "image": "help out は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "help + 副詞/前置詞",
        "examples": [
          {
            "en": "I often help out.",
            "ja": "私はよく手伝う。",
            "focus": "help out",
            "jaFocus": "手伝う"
          },
          {
            "en": "We need to help out today.",
            "ja": "今日は手伝う必要がある。",
            "focus": "help out",
            "jaFocus": "手伝う"
          },
          {
            "en": "Can you help out now?",
            "ja": "今手伝うできますか？",
            "focus": "help out",
            "jaFocus": "手伝う"
          }
        ]
      }
    ]
  },
  {
    "id": "show",
    "rank": 10,
    "word": "SHOW",
    "ipa": "/ʃoʊ/",
    "kana": "ショウ",
    "syllable": "show",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "相手に分かる形で出す",
    "coreDetail": "情報や物を相手に見えるようにする。",
    "meanings": [
      {
        "id": "main",
        "title": "① 見せる",
        "pattern": "show + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "情報や物を相手に見えるようにする。",
        "point": "show は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I show it every day.",
            "ja": "私は毎日それを見せる。",
            "focus": "show",
            "object": "it",
            "jaFocus": "見せ"
          },
          {
            "en": "We need to show this today.",
            "ja": "私たちは今日これを見せる必要がある。",
            "focus": "show",
            "object": "this",
            "jaFocus": "見せ"
          },
          {
            "en": "Can you show it now?",
            "ja": "今それを見せられますか？",
            "focus": "show",
            "object": "it",
            "jaFocus": "見せ"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "show results",
        "ja": "結果を見せる",
        "image": "結果を見せるというまとまりで覚える。",
        "pattern": "show + 名詞",
        "examples": [
          {
            "en": "I often show results.",
            "ja": "私はよく結果を見せる。",
            "focus": "show results",
            "jaFocus": "結果を見せる"
          },
          {
            "en": "We need to show results today.",
            "ja": "今日は結果を見せる必要がある。",
            "focus": "show results",
            "jaFocus": "結果を見せる"
          },
          {
            "en": "Can you show results now?",
            "ja": "今結果を見せるできますか？",
            "focus": "show results",
            "jaFocus": "結果を見せる"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "show up",
        "ja": "現れる",
        "image": "show up は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "show + 副詞/前置詞",
        "examples": [
          {
            "en": "I often show up.",
            "ja": "私はよく現れる。",
            "focus": "show up",
            "jaFocus": "現れる"
          },
          {
            "en": "We need to show up today.",
            "ja": "今日は現れる必要がある。",
            "focus": "show up",
            "jaFocus": "現れる"
          },
          {
            "en": "Can you show up now?",
            "ja": "今現れるできますか？",
            "focus": "show up",
            "jaFocus": "現れる"
          }
        ]
      }
    ]
  },
  {
    "id": "tell",
    "rank": 11,
    "word": "TELL",
    "ipa": "/tel/",
    "kana": "テル",
    "syllable": "tell",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "相手に情報を渡す",
    "coreDetail": "言葉で情報を相手に渡す。",
    "meanings": [
      {
        "id": "main",
        "title": "① 伝える",
        "pattern": "tell + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "言葉で情報を相手に渡す。",
        "point": "tell は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I tell it every day.",
            "ja": "私は毎日それを伝える。",
            "focus": "tell",
            "object": "it",
            "jaFocus": "伝え"
          },
          {
            "en": "We need to tell this today.",
            "ja": "私たちは今日これを伝える必要がある。",
            "focus": "tell",
            "object": "this",
            "jaFocus": "伝え"
          },
          {
            "en": "Can you tell it now?",
            "ja": "今それを伝えられますか？",
            "focus": "tell",
            "object": "it",
            "jaFocus": "伝え"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "tell the truth",
        "ja": "真実を伝える",
        "image": "真実を伝えるというまとまりで覚える。",
        "pattern": "tell + 名詞",
        "examples": [
          {
            "en": "I often tell the truth.",
            "ja": "私はよく真実を伝える。",
            "focus": "tell the truth",
            "jaFocus": "真実を伝える"
          },
          {
            "en": "We need to tell the truth today.",
            "ja": "今日は真実を伝える必要がある。",
            "focus": "tell the truth",
            "jaFocus": "真実を伝える"
          },
          {
            "en": "Can you tell the truth now?",
            "ja": "今真実を伝えるできますか？",
            "focus": "tell the truth",
            "jaFocus": "真実を伝える"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "tell apart",
        "ja": "見分ける",
        "image": "tell apart は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "tell + 副詞/前置詞",
        "examples": [
          {
            "en": "I often tell apart.",
            "ja": "私はよく見分ける。",
            "focus": "tell apart",
            "jaFocus": "見分ける"
          },
          {
            "en": "We need to tell apart today.",
            "ja": "今日は見分ける必要がある。",
            "focus": "tell apart",
            "jaFocus": "見分ける"
          },
          {
            "en": "Can you tell apart now?",
            "ja": "今見分けるできますか？",
            "focus": "tell apart",
            "jaFocus": "見分ける"
          }
        ]
      }
    ]
  },
  {
    "id": "ask",
    "rank": 12,
    "word": "ASK",
    "ipa": "/æsk/",
    "kana": "アスク",
    "syllable": "ask",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "相手に情報や行動を求める",
    "coreDetail": "質問や依頼を相手に向ける。",
    "meanings": [
      {
        "id": "main",
        "title": "① 尋ねる",
        "pattern": "ask + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "質問や依頼を相手に向ける。",
        "point": "ask は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I ask it every day.",
            "ja": "私は毎日それを尋ねる。",
            "focus": "ask",
            "object": "it",
            "jaFocus": "尋ね"
          },
          {
            "en": "We need to ask this today.",
            "ja": "私たちは今日これを尋ねる必要がある。",
            "focus": "ask",
            "object": "this",
            "jaFocus": "尋ね"
          },
          {
            "en": "Can you ask it now?",
            "ja": "今それを尋ねられますか？",
            "focus": "ask",
            "object": "it",
            "jaFocus": "尋ね"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "ask a question",
        "ja": "質問する",
        "image": "質問するというまとまりで覚える。",
        "pattern": "ask + 名詞",
        "examples": [
          {
            "en": "I often ask a question.",
            "ja": "私はよく質問する。",
            "focus": "ask a question",
            "jaFocus": "質問する"
          },
          {
            "en": "We need to ask a question today.",
            "ja": "今日は質問する必要がある。",
            "focus": "ask a question",
            "jaFocus": "質問する"
          },
          {
            "en": "Can you ask a question now?",
            "ja": "今質問するできますか？",
            "focus": "ask a question",
            "jaFocus": "質問する"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "ask for",
        "ja": "求める",
        "image": "ask for は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "ask + 副詞/前置詞",
        "examples": [
          {
            "en": "I often ask for.",
            "ja": "私はよく求める。",
            "focus": "ask for",
            "jaFocus": "求める"
          },
          {
            "en": "We need to ask for today.",
            "ja": "今日は求める必要がある。",
            "focus": "ask for",
            "jaFocus": "求める"
          },
          {
            "en": "Can you ask for now?",
            "ja": "今求めるできますか？",
            "focus": "ask for",
            "jaFocus": "求める"
          }
        ]
      }
    ]
  },
  {
    "id": "call",
    "rank": 13,
    "word": "CALL",
    "ipa": "/kɔːl/",
    "kana": "コール",
    "syllable": "call",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "声や電話で相手に向ける",
    "coreDetail": "相手へ声や連絡を向ける。",
    "meanings": [
      {
        "id": "main",
        "title": "① 呼ぶ・電話する",
        "pattern": "call + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "相手へ声や連絡を向ける。",
        "point": "call は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I call it every day.",
            "ja": "私は毎日それを呼る。",
            "focus": "call",
            "object": "it",
            "jaFocus": "呼"
          },
          {
            "en": "We need to call this today.",
            "ja": "私たちは今日これを呼る必要がある。",
            "focus": "call",
            "object": "this",
            "jaFocus": "呼"
          },
          {
            "en": "Can you call it now?",
            "ja": "今それを呼られますか？",
            "focus": "call",
            "object": "it",
            "jaFocus": "呼"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "call a client",
        "ja": "顧客に電話する",
        "image": "顧客に電話するというまとまりで覚える。",
        "pattern": "call + 名詞",
        "examples": [
          {
            "en": "I often call a client.",
            "ja": "私はよく顧客に電話する。",
            "focus": "call a client",
            "jaFocus": "顧客に電話する"
          },
          {
            "en": "We need to call a client today.",
            "ja": "今日は顧客に電話する必要がある。",
            "focus": "call a client",
            "jaFocus": "顧客に電話する"
          },
          {
            "en": "Can you call a client now?",
            "ja": "今顧客に電話するできますか？",
            "focus": "call a client",
            "jaFocus": "顧客に電話する"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "call back",
        "ja": "折り返す",
        "image": "call back は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "call + 副詞/前置詞",
        "examples": [
          {
            "en": "I often call back.",
            "ja": "私はよく折り返す。",
            "focus": "call back",
            "jaFocus": "折り返す"
          },
          {
            "en": "We need to call back today.",
            "ja": "今日は折り返す必要がある。",
            "focus": "call back",
            "jaFocus": "折り返す"
          },
          {
            "en": "Can you call back now?",
            "ja": "今折り返すできますか？",
            "focus": "call back",
            "jaFocus": "折り返す"
          }
        ]
      }
    ]
  },
  {
    "id": "leave",
    "rank": 14,
    "word": "LEAVE",
    "ipa": "/liːv/",
    "kana": "リーヴ",
    "syllable": "leave",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "その場から離れる",
    "coreDetail": "場所や状態から離れる。",
    "meanings": [
      {
        "id": "main",
        "title": "① 離れる・残す",
        "pattern": "leave + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "場所や状態から離れる。",
        "point": "leave は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I leave it every day.",
            "ja": "私は毎日それを離れる。",
            "focus": "leave",
            "object": "it",
            "jaFocus": "離れ"
          },
          {
            "en": "We need to leave this today.",
            "ja": "私たちは今日これを離れる必要がある。",
            "focus": "leave",
            "object": "this",
            "jaFocus": "離れ"
          },
          {
            "en": "Can you leave it now?",
            "ja": "今それを離れられますか？",
            "focus": "leave",
            "object": "it",
            "jaFocus": "離れ"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "leave a message",
        "ja": "伝言を残す",
        "image": "伝言を残すというまとまりで覚える。",
        "pattern": "leave + 名詞",
        "examples": [
          {
            "en": "I often leave a message.",
            "ja": "私はよく伝言を残す。",
            "focus": "leave a message",
            "jaFocus": "伝言を残す"
          },
          {
            "en": "We need to leave a message today.",
            "ja": "今日は伝言を残す必要がある。",
            "focus": "leave a message",
            "jaFocus": "伝言を残す"
          },
          {
            "en": "Can you leave a message now?",
            "ja": "今伝言を残すできますか？",
            "focus": "leave a message",
            "jaFocus": "伝言を残す"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "leave out",
        "ja": "省く",
        "image": "leave out は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "leave + 副詞/前置詞",
        "examples": [
          {
            "en": "I often leave out.",
            "ja": "私はよく省く。",
            "focus": "leave out",
            "jaFocus": "省く"
          },
          {
            "en": "We need to leave out today.",
            "ja": "今日は省く必要がある。",
            "focus": "leave out",
            "jaFocus": "省く"
          },
          {
            "en": "Can you leave out now?",
            "ja": "今省くできますか？",
            "focus": "leave out",
            "jaFocus": "省く"
          }
        ]
      }
    ]
  },
  {
    "id": "move",
    "rank": 15,
    "word": "MOVE",
    "ipa": "/muːv/",
    "kana": "ムーヴ",
    "syllable": "move",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "位置が変わる",
    "coreDetail": "人や物の位置を変える。",
    "meanings": [
      {
        "id": "main",
        "title": "① 動かす・動く",
        "pattern": "move + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "人や物の位置を変える。",
        "point": "move は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I move it every day.",
            "ja": "私は毎日それを動かる。",
            "focus": "move",
            "object": "it",
            "jaFocus": "動か"
          },
          {
            "en": "We need to move this today.",
            "ja": "私たちは今日これを動かる必要がある。",
            "focus": "move",
            "object": "this",
            "jaFocus": "動か"
          },
          {
            "en": "Can you move it now?",
            "ja": "今それを動かられますか？",
            "focus": "move",
            "object": "it",
            "jaFocus": "動か"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "move forward",
        "ja": "前に進む",
        "image": "前に進むというまとまりで覚える。",
        "pattern": "move + 名詞",
        "examples": [
          {
            "en": "I often move forward.",
            "ja": "私はよく前に進む。",
            "focus": "move forward",
            "jaFocus": "前に進む"
          },
          {
            "en": "We need to move forward today.",
            "ja": "今日は前に進む必要がある。",
            "focus": "move forward",
            "jaFocus": "前に進む"
          },
          {
            "en": "Can you move forward now?",
            "ja": "今前に進むできますか？",
            "focus": "move forward",
            "jaFocus": "前に進む"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "move on",
        "ja": "次へ進む",
        "image": "move on は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "move + 副詞/前置詞",
        "examples": [
          {
            "en": "I often move on.",
            "ja": "私はよく次へ進む。",
            "focus": "move on",
            "jaFocus": "次へ進む"
          },
          {
            "en": "We need to move on today.",
            "ja": "今日は次へ進む必要がある。",
            "focus": "move on",
            "jaFocus": "次へ進む"
          },
          {
            "en": "Can you move on now?",
            "ja": "今次へ進むできますか？",
            "focus": "move on",
            "jaFocus": "次へ進む"
          }
        ]
      }
    ]
  },
  {
    "id": "turn",
    "rank": 16,
    "word": "TURN",
    "ipa": "/tɜːrn/",
    "kana": "ターン",
    "syllable": "turn",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "向きや状態が変わる",
    "coreDetail": "方向や状態を変える。",
    "meanings": [
      {
        "id": "main",
        "title": "① 回す・変わる",
        "pattern": "turn + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "方向や状態を変える。",
        "point": "turn は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I turn it every day.",
            "ja": "私は毎日それを変わる。",
            "focus": "turn",
            "object": "it",
            "jaFocus": "変わ"
          },
          {
            "en": "We need to turn this today.",
            "ja": "私たちは今日これを変わる必要がある。",
            "focus": "turn",
            "object": "this",
            "jaFocus": "変わ"
          },
          {
            "en": "Can you turn it now?",
            "ja": "今それを変わられますか？",
            "focus": "turn",
            "object": "it",
            "jaFocus": "変わ"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "turn a page",
        "ja": "ページをめくる",
        "image": "ページをめくるというまとまりで覚える。",
        "pattern": "turn + 名詞",
        "examples": [
          {
            "en": "I often turn a page.",
            "ja": "私はよくページをめくる。",
            "focus": "turn a page",
            "jaFocus": "ページをめくる"
          },
          {
            "en": "We need to turn a page today.",
            "ja": "今日はページをめくる必要がある。",
            "focus": "turn a page",
            "jaFocus": "ページをめくる"
          },
          {
            "en": "Can you turn a page now?",
            "ja": "今ページをめくるできますか？",
            "focus": "turn a page",
            "jaFocus": "ページをめくる"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "turn on",
        "ja": "つける",
        "image": "turn on は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "turn + 副詞/前置詞",
        "examples": [
          {
            "en": "I often turn on.",
            "ja": "私はよくつける。",
            "focus": "turn on",
            "jaFocus": "つける"
          },
          {
            "en": "We need to turn on today.",
            "ja": "今日はつける必要がある。",
            "focus": "turn on",
            "jaFocus": "つける"
          },
          {
            "en": "Can you turn on now?",
            "ja": "今つけるできますか？",
            "focus": "turn on",
            "jaFocus": "つける"
          }
        ]
      }
    ]
  },
  {
    "id": "bring",
    "rank": 17,
    "word": "BRING",
    "ipa": "/brɪŋ/",
    "kana": "ブリング",
    "syllable": "bring",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "こちらへ持ってくる",
    "coreDetail": "物や人を話し手側へ移動させる。",
    "meanings": [
      {
        "id": "main",
        "title": "① 持ってくる",
        "pattern": "bring + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "物や人を話し手側へ移動させる。",
        "point": "bring は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I bring it every day.",
            "ja": "私は毎日それを持ってきる。",
            "focus": "bring",
            "object": "it",
            "jaFocus": "持ってき"
          },
          {
            "en": "We need to bring this today.",
            "ja": "私たちは今日これを持ってきる必要がある。",
            "focus": "bring",
            "object": "this",
            "jaFocus": "持ってき"
          },
          {
            "en": "Can you bring it now?",
            "ja": "今それを持ってきられますか？",
            "focus": "bring",
            "object": "it",
            "jaFocus": "持ってき"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "bring a laptop",
        "ja": "ノートPCを持ってくる",
        "image": "ノートPCを持ってくるというまとまりで覚える。",
        "pattern": "bring + 名詞",
        "examples": [
          {
            "en": "I often bring a laptop.",
            "ja": "私はよくノートPCを持ってくる。",
            "focus": "bring a laptop",
            "jaFocus": "ノートPCを持ってくる"
          },
          {
            "en": "We need to bring a laptop today.",
            "ja": "今日はノートPCを持ってくる必要がある。",
            "focus": "bring a laptop",
            "jaFocus": "ノートPCを持ってくる"
          },
          {
            "en": "Can you bring a laptop now?",
            "ja": "今ノートPCを持ってくるできますか？",
            "focus": "bring a laptop",
            "jaFocus": "ノートPCを持ってくる"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "bring up",
        "ja": "話題に出す",
        "image": "bring up は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "bring + 副詞/前置詞",
        "examples": [
          {
            "en": "I often bring up.",
            "ja": "私はよく話題に出す。",
            "focus": "bring up",
            "jaFocus": "話題に出す"
          },
          {
            "en": "We need to bring up today.",
            "ja": "今日は話題に出す必要がある。",
            "focus": "bring up",
            "jaFocus": "話題に出す"
          },
          {
            "en": "Can you bring up now?",
            "ja": "今話題に出すできますか？",
            "focus": "bring up",
            "jaFocus": "話題に出す"
          }
        ]
      }
    ]
  },
  {
    "id": "hold",
    "rank": 18,
    "word": "HOLD",
    "ipa": "/hoʊld/",
    "kana": "ホールド",
    "syllable": "hold",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "手元で保つ",
    "coreDetail": "物や状態を保つ。",
    "meanings": [
      {
        "id": "main",
        "title": "① 持つ・開催する",
        "pattern": "hold + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "物や状態を保つ。",
        "point": "hold は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I hold it every day.",
            "ja": "私は毎日それを持る。",
            "focus": "hold",
            "object": "it",
            "jaFocus": "持"
          },
          {
            "en": "We need to hold this today.",
            "ja": "私たちは今日これを持る必要がある。",
            "focus": "hold",
            "object": "this",
            "jaFocus": "持"
          },
          {
            "en": "Can you hold it now?",
            "ja": "今それを持られますか？",
            "focus": "hold",
            "object": "it",
            "jaFocus": "持"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "hold a meeting",
        "ja": "会議を開く",
        "image": "会議を開くというまとまりで覚える。",
        "pattern": "hold + 名詞",
        "examples": [
          {
            "en": "I often hold a meeting.",
            "ja": "私はよく会議を開く。",
            "focus": "hold a meeting",
            "jaFocus": "会議を開く"
          },
          {
            "en": "We need to hold a meeting today.",
            "ja": "今日は会議を開く必要がある。",
            "focus": "hold a meeting",
            "jaFocus": "会議を開く"
          },
          {
            "en": "Can you hold a meeting now?",
            "ja": "今会議を開くできますか？",
            "focus": "hold a meeting",
            "jaFocus": "会議を開く"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "hold on",
        "ja": "待つ",
        "image": "hold on は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "hold + 副詞/前置詞",
        "examples": [
          {
            "en": "I often hold on.",
            "ja": "私はよく待つ。",
            "focus": "hold on",
            "jaFocus": "待つ"
          },
          {
            "en": "We need to hold on today.",
            "ja": "今日は待つ必要がある。",
            "focus": "hold on",
            "jaFocus": "待つ"
          },
          {
            "en": "Can you hold on now?",
            "ja": "今待つできますか？",
            "focus": "hold on",
            "jaFocus": "待つ"
          }
        ]
      }
    ]
  },
  {
    "id": "set",
    "rank": 19,
    "word": "SET",
    "ipa": "/set/",
    "kana": "セット",
    "syllable": "set",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "位置や条件を決める",
    "coreDetail": "物事を決まった状態にする。",
    "meanings": [
      {
        "id": "main",
        "title": "① 設定する・置く",
        "pattern": "set + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "物事を決まった状態にする。",
        "point": "set は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I set it every day.",
            "ja": "私は毎日それを設定る。",
            "focus": "set",
            "object": "it",
            "jaFocus": "設定"
          },
          {
            "en": "We need to set this today.",
            "ja": "私たちは今日これを設定る必要がある。",
            "focus": "set",
            "object": "this",
            "jaFocus": "設定"
          },
          {
            "en": "Can you set it now?",
            "ja": "今それを設定られますか？",
            "focus": "set",
            "object": "it",
            "jaFocus": "設定"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "set a goal",
        "ja": "目標を設定する",
        "image": "目標を設定するというまとまりで覚える。",
        "pattern": "set + 名詞",
        "examples": [
          {
            "en": "I often set a goal.",
            "ja": "私はよく目標を設定する。",
            "focus": "set a goal",
            "jaFocus": "目標を設定する"
          },
          {
            "en": "We need to set a goal today.",
            "ja": "今日は目標を設定する必要がある。",
            "focus": "set a goal",
            "jaFocus": "目標を設定する"
          },
          {
            "en": "Can you set a goal now?",
            "ja": "今目標を設定するできますか？",
            "focus": "set a goal",
            "jaFocus": "目標を設定する"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "set up",
        "ja": "準備する",
        "image": "set up は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "set + 副詞/前置詞",
        "examples": [
          {
            "en": "I often set up.",
            "ja": "私はよく準備する。",
            "focus": "set up",
            "jaFocus": "準備する"
          },
          {
            "en": "We need to set up today.",
            "ja": "今日は準備する必要がある。",
            "focus": "set up",
            "jaFocus": "準備する"
          },
          {
            "en": "Can you set up now?",
            "ja": "今準備するできますか？",
            "focus": "set up",
            "jaFocus": "準備する"
          }
        ]
      }
    ]
  },
  {
    "id": "change",
    "rank": 20,
    "word": "CHANGE",
    "ipa": "/tʃeɪndʒ/",
    "kana": "チェインジ",
    "syllable": "change",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "別の状態にする",
    "coreDetail": "状態や内容を別のものにする。",
    "meanings": [
      {
        "id": "main",
        "title": "① 変える",
        "pattern": "change + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "状態や内容を別のものにする。",
        "point": "change は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I change it every day.",
            "ja": "私は毎日それを変える。",
            "focus": "change",
            "object": "it",
            "jaFocus": "変え"
          },
          {
            "en": "We need to change this today.",
            "ja": "私たちは今日これを変える必要がある。",
            "focus": "change",
            "object": "this",
            "jaFocus": "変え"
          },
          {
            "en": "Can you change it now?",
            "ja": "今それを変えられますか？",
            "focus": "change",
            "object": "it",
            "jaFocus": "変え"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "change plans",
        "ja": "予定を変える",
        "image": "予定を変えるというまとまりで覚える。",
        "pattern": "change + 名詞",
        "examples": [
          {
            "en": "I often change plans.",
            "ja": "私はよく予定を変える。",
            "focus": "change plans",
            "jaFocus": "予定を変える"
          },
          {
            "en": "We need to change plans today.",
            "ja": "今日は予定を変える必要がある。",
            "focus": "change plans",
            "jaFocus": "予定を変える"
          },
          {
            "en": "Can you change plans now?",
            "ja": "今予定を変えるできますか？",
            "focus": "change plans",
            "jaFocus": "予定を変える"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "change into",
        "ja": "〜に変わる",
        "image": "change into は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "change + 副詞/前置詞",
        "examples": [
          {
            "en": "I often change into.",
            "ja": "私はよく〜に変わる。",
            "focus": "change into",
            "jaFocus": "〜に変わる"
          },
          {
            "en": "We need to change into today.",
            "ja": "今日は〜に変わる必要がある。",
            "focus": "change into",
            "jaFocus": "〜に変わる"
          },
          {
            "en": "Can you change into now?",
            "ja": "今〜に変わるできますか？",
            "focus": "change into",
            "jaFocus": "〜に変わる"
          }
        ]
      }
    ]
  },
  {
    "id": "open",
    "rank": 21,
    "word": "OPEN",
    "ipa": "/ˈoʊpən/",
    "kana": "オープン",
    "syllable": "open",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "閉じたものを開く",
    "coreDetail": "中へ入れる状態にする。",
    "meanings": [
      {
        "id": "main",
        "title": "① 開ける",
        "pattern": "open + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "中へ入れる状態にする。",
        "point": "open は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I open it every day.",
            "ja": "私は毎日それを開ける。",
            "focus": "open",
            "object": "it",
            "jaFocus": "開け"
          },
          {
            "en": "We need to open this today.",
            "ja": "私たちは今日これを開ける必要がある。",
            "focus": "open",
            "object": "this",
            "jaFocus": "開け"
          },
          {
            "en": "Can you open it now?",
            "ja": "今それを開けられますか？",
            "focus": "open",
            "object": "it",
            "jaFocus": "開け"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "open the file",
        "ja": "ファイルを開く",
        "image": "ファイルを開くというまとまりで覚える。",
        "pattern": "open + 名詞",
        "examples": [
          {
            "en": "I often open the file.",
            "ja": "私はよくファイルを開く。",
            "focus": "open the file",
            "jaFocus": "ファイルを開く"
          },
          {
            "en": "We need to open the file today.",
            "ja": "今日はファイルを開く必要がある。",
            "focus": "open the file",
            "jaFocus": "ファイルを開く"
          },
          {
            "en": "Can you open the file now?",
            "ja": "今ファイルを開くできますか？",
            "focus": "open the file",
            "jaFocus": "ファイルを開く"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "open up",
        "ja": "心を開く",
        "image": "open up は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "open + 副詞/前置詞",
        "examples": [
          {
            "en": "I often open up.",
            "ja": "私はよく心を開く。",
            "focus": "open up",
            "jaFocus": "心を開く"
          },
          {
            "en": "We need to open up today.",
            "ja": "今日は心を開く必要がある。",
            "focus": "open up",
            "jaFocus": "心を開く"
          },
          {
            "en": "Can you open up now?",
            "ja": "今心を開くできますか？",
            "focus": "open up",
            "jaFocus": "心を開く"
          }
        ]
      }
    ]
  },
  {
    "id": "close",
    "rank": 22,
    "word": "CLOSE",
    "ipa": "/kloʊz/",
    "kana": "クローズ",
    "syllable": "close",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "開いたものを閉じる",
    "coreDetail": "入口や状態を閉じる。",
    "meanings": [
      {
        "id": "main",
        "title": "① 閉める",
        "pattern": "close + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "入口や状態を閉じる。",
        "point": "close は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I close it every day.",
            "ja": "私は毎日それを閉める。",
            "focus": "close",
            "object": "it",
            "jaFocus": "閉め"
          },
          {
            "en": "We need to close this today.",
            "ja": "私たちは今日これを閉める必要がある。",
            "focus": "close",
            "object": "this",
            "jaFocus": "閉め"
          },
          {
            "en": "Can you close it now?",
            "ja": "今それを閉められますか？",
            "focus": "close",
            "object": "it",
            "jaFocus": "閉め"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "close the door",
        "ja": "ドアを閉める",
        "image": "ドアを閉めるというまとまりで覚える。",
        "pattern": "close + 名詞",
        "examples": [
          {
            "en": "I often close the door.",
            "ja": "私はよくドアを閉める。",
            "focus": "close the door",
            "jaFocus": "ドアを閉める"
          },
          {
            "en": "We need to close the door today.",
            "ja": "今日はドアを閉める必要がある。",
            "focus": "close the door",
            "jaFocus": "ドアを閉める"
          },
          {
            "en": "Can you close the door now?",
            "ja": "今ドアを閉めるできますか？",
            "focus": "close the door",
            "jaFocus": "ドアを閉める"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "close down",
        "ja": "閉鎖する",
        "image": "close down は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "close + 副詞/前置詞",
        "examples": [
          {
            "en": "I often close down.",
            "ja": "私はよく閉鎖する。",
            "focus": "close down",
            "jaFocus": "閉鎖する"
          },
          {
            "en": "We need to close down today.",
            "ja": "今日は閉鎖する必要がある。",
            "focus": "close down",
            "jaFocus": "閉鎖する"
          },
          {
            "en": "Can you close down now?",
            "ja": "今閉鎖するできますか？",
            "focus": "close down",
            "jaFocus": "閉鎖する"
          }
        ]
      }
    ]
  },
  {
    "id": "build",
    "rank": 23,
    "word": "BUILD",
    "ipa": "/bɪld/",
    "kana": "ビルド",
    "syllable": "build",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "積み上げて作る",
    "coreDetail": "時間をかけて作り上げる。",
    "meanings": [
      {
        "id": "main",
        "title": "① 築く",
        "pattern": "build + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "時間をかけて作り上げる。",
        "point": "build は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I build it every day.",
            "ja": "私は毎日それを築る。",
            "focus": "build",
            "object": "it",
            "jaFocus": "築"
          },
          {
            "en": "We need to build this today.",
            "ja": "私たちは今日これを築る必要がある。",
            "focus": "build",
            "object": "this",
            "jaFocus": "築"
          },
          {
            "en": "Can you build it now?",
            "ja": "今それを築られますか？",
            "focus": "build",
            "object": "it",
            "jaFocus": "築"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "build trust",
        "ja": "信頼を築く",
        "image": "信頼を築くというまとまりで覚える。",
        "pattern": "build + 名詞",
        "examples": [
          {
            "en": "I often build trust.",
            "ja": "私はよく信頼を築く。",
            "focus": "build trust",
            "jaFocus": "信頼を築く"
          },
          {
            "en": "We need to build trust today.",
            "ja": "今日は信頼を築く必要がある。",
            "focus": "build trust",
            "jaFocus": "信頼を築く"
          },
          {
            "en": "Can you build trust now?",
            "ja": "今信頼を築くできますか？",
            "focus": "build trust",
            "jaFocus": "信頼を築く"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "build up",
        "ja": "積み上げる",
        "image": "build up は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "build + 副詞/前置詞",
        "examples": [
          {
            "en": "I often build up.",
            "ja": "私はよく積み上げる。",
            "focus": "build up",
            "jaFocus": "積み上げる"
          },
          {
            "en": "We need to build up today.",
            "ja": "今日は積み上げる必要がある。",
            "focus": "build up",
            "jaFocus": "積み上げる"
          },
          {
            "en": "Can you build up now?",
            "ja": "今積み上げるできますか？",
            "focus": "build up",
            "jaFocus": "積み上げる"
          }
        ]
      }
    ]
  },
  {
    "id": "learn",
    "rank": 24,
    "word": "LEARN",
    "ipa": "/lɜːrn/",
    "kana": "ラーン",
    "syllable": "learn",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "知識を身につける",
    "coreDetail": "経験や勉強で自分の中に取り込む。",
    "meanings": [
      {
        "id": "main",
        "title": "① 学ぶ",
        "pattern": "learn + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "経験や勉強で自分の中に取り込む。",
        "point": "learn は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I learn it every day.",
            "ja": "私は毎日それを学る。",
            "focus": "learn",
            "object": "it",
            "jaFocus": "学"
          },
          {
            "en": "We need to learn this today.",
            "ja": "私たちは今日これを学る必要がある。",
            "focus": "learn",
            "object": "this",
            "jaFocus": "学"
          },
          {
            "en": "Can you learn it now?",
            "ja": "今それを学られますか？",
            "focus": "learn",
            "object": "it",
            "jaFocus": "学"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "learn English",
        "ja": "英語を学ぶ",
        "image": "英語を学ぶというまとまりで覚える。",
        "pattern": "learn + 名詞",
        "examples": [
          {
            "en": "I often learn English.",
            "ja": "私はよく英語を学ぶ。",
            "focus": "learn English",
            "jaFocus": "英語を学ぶ"
          },
          {
            "en": "We need to learn English today.",
            "ja": "今日は英語を学ぶ必要がある。",
            "focus": "learn English",
            "jaFocus": "英語を学ぶ"
          },
          {
            "en": "Can you learn English now?",
            "ja": "今英語を学ぶできますか？",
            "focus": "learn English",
            "jaFocus": "英語を学ぶ"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "learn from",
        "ja": "〜から学ぶ",
        "image": "learn from は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "learn + 副詞/前置詞",
        "examples": [
          {
            "en": "I often learn from.",
            "ja": "私はよく〜から学ぶ。",
            "focus": "learn from",
            "jaFocus": "〜から学ぶ"
          },
          {
            "en": "We need to learn from today.",
            "ja": "今日は〜から学ぶ必要がある。",
            "focus": "learn from",
            "jaFocus": "〜から学ぶ"
          },
          {
            "en": "Can you learn from now?",
            "ja": "今〜から学ぶできますか？",
            "focus": "learn from",
            "jaFocus": "〜から学ぶ"
          }
        ]
      }
    ]
  },
  {
    "id": "meet",
    "rank": 25,
    "word": "MEET",
    "ipa": "/miːt/",
    "kana": "ミート",
    "syllable": "meet",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "人と接点を持つ",
    "coreDetail": "人や条件と向き合う。",
    "meanings": [
      {
        "id": "main",
        "title": "① 会う",
        "pattern": "meet + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "人や条件と向き合う。",
        "point": "meet は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I meet it every day.",
            "ja": "私は毎日それを会る。",
            "focus": "meet",
            "object": "it",
            "jaFocus": "会"
          },
          {
            "en": "We need to meet this today.",
            "ja": "私たちは今日これを会る必要がある。",
            "focus": "meet",
            "object": "this",
            "jaFocus": "会"
          },
          {
            "en": "Can you meet it now?",
            "ja": "今それを会られますか？",
            "focus": "meet",
            "object": "it",
            "jaFocus": "会"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "meet a client",
        "ja": "顧客に会う",
        "image": "顧客に会うというまとまりで覚える。",
        "pattern": "meet + 名詞",
        "examples": [
          {
            "en": "I often meet a client.",
            "ja": "私はよく顧客に会う。",
            "focus": "meet a client",
            "jaFocus": "顧客に会う"
          },
          {
            "en": "We need to meet a client today.",
            "ja": "今日は顧客に会う必要がある。",
            "focus": "meet a client",
            "jaFocus": "顧客に会う"
          },
          {
            "en": "Can you meet a client now?",
            "ja": "今顧客に会うできますか？",
            "focus": "meet a client",
            "jaFocus": "顧客に会う"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "meet up",
        "ja": "会う",
        "image": "meet up は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "meet + 副詞/前置詞",
        "examples": [
          {
            "en": "I often meet up.",
            "ja": "私はよく会う。",
            "focus": "meet up",
            "jaFocus": "会う"
          },
          {
            "en": "We need to meet up today.",
            "ja": "今日は会う必要がある。",
            "focus": "meet up",
            "jaFocus": "会う"
          },
          {
            "en": "Can you meet up now?",
            "ja": "今会うできますか？",
            "focus": "meet up",
            "jaFocus": "会う"
          }
        ]
      }
    ]
  },
  {
    "id": "send",
    "rank": 26,
    "word": "SEND",
    "ipa": "/send/",
    "kana": "センド",
    "syllable": "send",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "相手へ送り出す",
    "coreDetail": "物や情報を相手の方向へ出す。",
    "meanings": [
      {
        "id": "main",
        "title": "① 送る",
        "pattern": "send + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "物や情報を相手の方向へ出す。",
        "point": "send は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I send it every day.",
            "ja": "私は毎日それを送る。",
            "focus": "send",
            "object": "it",
            "jaFocus": "送"
          },
          {
            "en": "We need to send this today.",
            "ja": "私たちは今日これを送る必要がある。",
            "focus": "send",
            "object": "this",
            "jaFocus": "送"
          },
          {
            "en": "Can you send it now?",
            "ja": "今それを送られますか？",
            "focus": "send",
            "object": "it",
            "jaFocus": "送"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "send an email",
        "ja": "メールを送る",
        "image": "メールを送るというまとまりで覚える。",
        "pattern": "send + 名詞",
        "examples": [
          {
            "en": "I often send an email.",
            "ja": "私はよくメールを送る。",
            "focus": "send an email",
            "jaFocus": "メールを送る"
          },
          {
            "en": "We need to send an email today.",
            "ja": "今日はメールを送る必要がある。",
            "focus": "send an email",
            "jaFocus": "メールを送る"
          },
          {
            "en": "Can you send an email now?",
            "ja": "今メールを送るできますか？",
            "focus": "send an email",
            "jaFocus": "メールを送る"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "send back",
        "ja": "送り返す",
        "image": "send back は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "send + 副詞/前置詞",
        "examples": [
          {
            "en": "I often send back.",
            "ja": "私はよく送り返す。",
            "focus": "send back",
            "jaFocus": "送り返す"
          },
          {
            "en": "We need to send back today.",
            "ja": "今日は送り返す必要がある。",
            "focus": "send back",
            "jaFocus": "送り返す"
          },
          {
            "en": "Can you send back now?",
            "ja": "今送り返すできますか？",
            "focus": "send back",
            "jaFocus": "送り返す"
          }
        ]
      }
    ]
  },
  {
    "id": "pay",
    "rank": 27,
    "word": "PAY",
    "ipa": "/peɪ/",
    "kana": "ペイ",
    "syllable": "pay",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "お金や注意を向ける",
    "coreDetail": "対価や注意を相手に渡す。",
    "meanings": [
      {
        "id": "main",
        "title": "① 支払う",
        "pattern": "pay + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "対価や注意を相手に渡す。",
        "point": "pay は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I pay it every day.",
            "ja": "私は毎日それを支払る。",
            "focus": "pay",
            "object": "it",
            "jaFocus": "支払"
          },
          {
            "en": "We need to pay this today.",
            "ja": "私たちは今日これを支払る必要がある。",
            "focus": "pay",
            "object": "this",
            "jaFocus": "支払"
          },
          {
            "en": "Can you pay it now?",
            "ja": "今それを支払られますか？",
            "focus": "pay",
            "object": "it",
            "jaFocus": "支払"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "pay the bill",
        "ja": "請求書を支払う",
        "image": "請求書を支払うというまとまりで覚える。",
        "pattern": "pay + 名詞",
        "examples": [
          {
            "en": "I often pay the bill.",
            "ja": "私はよく請求書を支払う。",
            "focus": "pay the bill",
            "jaFocus": "請求書を支払う"
          },
          {
            "en": "We need to pay the bill today.",
            "ja": "今日は請求書を支払う必要がある。",
            "focus": "pay the bill",
            "jaFocus": "請求書を支払う"
          },
          {
            "en": "Can you pay the bill now?",
            "ja": "今請求書を支払うできますか？",
            "focus": "pay the bill",
            "jaFocus": "請求書を支払う"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "pay off",
        "ja": "報われる",
        "image": "pay off は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "pay + 副詞/前置詞",
        "examples": [
          {
            "en": "I often pay off.",
            "ja": "私はよく報われる。",
            "focus": "pay off",
            "jaFocus": "報われる"
          },
          {
            "en": "We need to pay off today.",
            "ja": "今日は報われる必要がある。",
            "focus": "pay off",
            "jaFocus": "報われる"
          },
          {
            "en": "Can you pay off now?",
            "ja": "今報われるできますか？",
            "focus": "pay off",
            "jaFocus": "報われる"
          }
        ]
      }
    ]
  },
  {
    "id": "buy",
    "rank": 28,
    "word": "BUY",
    "ipa": "/baɪ/",
    "kana": "バイ",
    "syllable": "buy",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "お金を出して得る",
    "coreDetail": "対価を払って自分のものにする。",
    "meanings": [
      {
        "id": "main",
        "title": "① 買う",
        "pattern": "buy + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "対価を払って自分のものにする。",
        "point": "buy は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I buy it every day.",
            "ja": "私は毎日それを買る。",
            "focus": "buy",
            "object": "it",
            "jaFocus": "買"
          },
          {
            "en": "We need to buy this today.",
            "ja": "私たちは今日これを買る必要がある。",
            "focus": "buy",
            "object": "this",
            "jaFocus": "買"
          },
          {
            "en": "Can you buy it now?",
            "ja": "今それを買られますか？",
            "focus": "buy",
            "object": "it",
            "jaFocus": "買"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "buy a ticket",
        "ja": "チケットを買う",
        "image": "チケットを買うというまとまりで覚える。",
        "pattern": "buy + 名詞",
        "examples": [
          {
            "en": "I often buy a ticket.",
            "ja": "私はよくチケットを買う。",
            "focus": "buy a ticket",
            "jaFocus": "チケットを買う"
          },
          {
            "en": "We need to buy a ticket today.",
            "ja": "今日はチケットを買う必要がある。",
            "focus": "buy a ticket",
            "jaFocus": "チケットを買う"
          },
          {
            "en": "Can you buy a ticket now?",
            "ja": "今チケットを買うできますか？",
            "focus": "buy a ticket",
            "jaFocus": "チケットを買う"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "buy into",
        "ja": "受け入れる",
        "image": "buy into は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "buy + 副詞/前置詞",
        "examples": [
          {
            "en": "I often buy into.",
            "ja": "私はよく受け入れる。",
            "focus": "buy into",
            "jaFocus": "受け入れる"
          },
          {
            "en": "We need to buy into today.",
            "ja": "今日は受け入れる必要がある。",
            "focus": "buy into",
            "jaFocus": "受け入れる"
          },
          {
            "en": "Can you buy into now?",
            "ja": "今受け入れるできますか？",
            "focus": "buy into",
            "jaFocus": "受け入れる"
          }
        ]
      }
    ]
  },
  {
    "id": "sell",
    "rank": 29,
    "word": "SELL",
    "ipa": "/sel/",
    "kana": "セル",
    "syllable": "sell",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "相手に渡してお金を得る",
    "coreDetail": "商品や考えを相手に渡す。",
    "meanings": [
      {
        "id": "main",
        "title": "① 売る",
        "pattern": "sell + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "商品や考えを相手に渡す。",
        "point": "sell は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I sell it every day.",
            "ja": "私は毎日それを売る。",
            "focus": "sell",
            "object": "it",
            "jaFocus": "売"
          },
          {
            "en": "We need to sell this today.",
            "ja": "私たちは今日これを売る必要がある。",
            "focus": "sell",
            "object": "this",
            "jaFocus": "売"
          },
          {
            "en": "Can you sell it now?",
            "ja": "今それを売られますか？",
            "focus": "sell",
            "object": "it",
            "jaFocus": "売"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "sell products",
        "ja": "商品を売る",
        "image": "商品を売るというまとまりで覚える。",
        "pattern": "sell + 名詞",
        "examples": [
          {
            "en": "I often sell products.",
            "ja": "私はよく商品を売る。",
            "focus": "sell products",
            "jaFocus": "商品を売る"
          },
          {
            "en": "We need to sell products today.",
            "ja": "今日は商品を売る必要がある。",
            "focus": "sell products",
            "jaFocus": "商品を売る"
          },
          {
            "en": "Can you sell products now?",
            "ja": "今商品を売るできますか？",
            "focus": "sell products",
            "jaFocus": "商品を売る"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "sell out",
        "ja": "売り切れる",
        "image": "sell out は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "sell + 副詞/前置詞",
        "examples": [
          {
            "en": "I often sell out.",
            "ja": "私はよく売り切れる。",
            "focus": "sell out",
            "jaFocus": "売り切れる"
          },
          {
            "en": "We need to sell out today.",
            "ja": "今日は売り切れる必要がある。",
            "focus": "sell out",
            "jaFocus": "売り切れる"
          },
          {
            "en": "Can you sell out now?",
            "ja": "今売り切れるできますか？",
            "focus": "sell out",
            "jaFocus": "売り切れる"
          }
        ]
      }
    ]
  },
  {
    "id": "choose",
    "rank": 30,
    "word": "CHOOSE",
    "ipa": "/tʃuːz/",
    "kana": "チューズ",
    "syllable": "choose",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "複数から一つを取る",
    "coreDetail": "候補の中から決める。",
    "meanings": [
      {
        "id": "main",
        "title": "① 選ぶ",
        "pattern": "choose + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "候補の中から決める。",
        "point": "choose は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I choose it every day.",
            "ja": "私は毎日それを選る。",
            "focus": "choose",
            "object": "it",
            "jaFocus": "選"
          },
          {
            "en": "We need to choose this today.",
            "ja": "私たちは今日これを選る必要がある。",
            "focus": "choose",
            "object": "this",
            "jaFocus": "選"
          },
          {
            "en": "Can you choose it now?",
            "ja": "今それを選られますか？",
            "focus": "choose",
            "object": "it",
            "jaFocus": "選"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "choose a plan",
        "ja": "プランを選ぶ",
        "image": "プランを選ぶというまとまりで覚える。",
        "pattern": "choose + 名詞",
        "examples": [
          {
            "en": "I often choose a plan.",
            "ja": "私はよくプランを選ぶ。",
            "focus": "choose a plan",
            "jaFocus": "プランを選ぶ"
          },
          {
            "en": "We need to choose a plan today.",
            "ja": "今日はプランを選ぶ必要がある。",
            "focus": "choose a plan",
            "jaFocus": "プランを選ぶ"
          },
          {
            "en": "Can you choose a plan now?",
            "ja": "今プランを選ぶできますか？",
            "focus": "choose a plan",
            "jaFocus": "プランを選ぶ"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "choose from",
        "ja": "〜から選ぶ",
        "image": "choose from は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "choose + 副詞/前置詞",
        "examples": [
          {
            "en": "I often choose from.",
            "ja": "私はよく〜から選ぶ。",
            "focus": "choose from",
            "jaFocus": "〜から選ぶ"
          },
          {
            "en": "We need to choose from today.",
            "ja": "今日は〜から選ぶ必要がある。",
            "focus": "choose from",
            "jaFocus": "〜から選ぶ"
          },
          {
            "en": "Can you choose from now?",
            "ja": "今〜から選ぶできますか？",
            "focus": "choose from",
            "jaFocus": "〜から選ぶ"
          }
        ]
      }
    ]
  },
  {
    "id": "follow",
    "rank": 31,
    "word": "FOLLOW",
    "ipa": "/ˈfɑːloʊ/",
    "kana": "フォロー",
    "syllable": "follow",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "後についていく",
    "coreDetail": "人・ルール・流れの後を進む。",
    "meanings": [
      {
        "id": "main",
        "title": "① 従う・追う",
        "pattern": "follow + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "人・ルール・流れの後を進む。",
        "point": "follow は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I follow it every day.",
            "ja": "私は毎日それを従る。",
            "focus": "follow",
            "object": "it",
            "jaFocus": "従"
          },
          {
            "en": "We need to follow this today.",
            "ja": "私たちは今日これを従る必要がある。",
            "focus": "follow",
            "object": "this",
            "jaFocus": "従"
          },
          {
            "en": "Can you follow it now?",
            "ja": "今それを従られますか？",
            "focus": "follow",
            "object": "it",
            "jaFocus": "従"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "follow the rule",
        "ja": "ルールに従う",
        "image": "ルールに従うというまとまりで覚える。",
        "pattern": "follow + 名詞",
        "examples": [
          {
            "en": "I often follow the rule.",
            "ja": "私はよくルールに従う。",
            "focus": "follow the rule",
            "jaFocus": "ルールに従う"
          },
          {
            "en": "We need to follow the rule today.",
            "ja": "今日はルールに従う必要がある。",
            "focus": "follow the rule",
            "jaFocus": "ルールに従う"
          },
          {
            "en": "Can you follow the rule now?",
            "ja": "今ルールに従うできますか？",
            "focus": "follow the rule",
            "jaFocus": "ルールに従う"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "follow up",
        "ja": "追加確認する",
        "image": "follow up は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "follow + 副詞/前置詞",
        "examples": [
          {
            "en": "I often follow up.",
            "ja": "私はよく追加確認する。",
            "focus": "follow up",
            "jaFocus": "追加確認する"
          },
          {
            "en": "We need to follow up today.",
            "ja": "今日は追加確認する必要がある。",
            "focus": "follow up",
            "jaFocus": "追加確認する"
          },
          {
            "en": "Can you follow up now?",
            "ja": "今追加確認するできますか？",
            "focus": "follow up",
            "jaFocus": "追加確認する"
          }
        ]
      }
    ]
  },
  {
    "id": "create",
    "rank": 32,
    "word": "CREATE",
    "ipa": "/kriˈeɪt/",
    "kana": "クリエイト",
    "syllable": "create",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "新しく生み出す",
    "coreDetail": "新しいものを作り出す。",
    "meanings": [
      {
        "id": "main",
        "title": "① 創る",
        "pattern": "create + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "新しいものを作り出す。",
        "point": "create は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I create it every day.",
            "ja": "私は毎日それを作る。",
            "focus": "create",
            "object": "it",
            "jaFocus": "作"
          },
          {
            "en": "We need to create this today.",
            "ja": "私たちは今日これを作る必要がある。",
            "focus": "create",
            "object": "this",
            "jaFocus": "作"
          },
          {
            "en": "Can you create it now?",
            "ja": "今それを作られますか？",
            "focus": "create",
            "object": "it",
            "jaFocus": "作"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "create value",
        "ja": "価値を作る",
        "image": "価値を作るというまとまりで覚える。",
        "pattern": "create + 名詞",
        "examples": [
          {
            "en": "I often create value.",
            "ja": "私はよく価値を作る。",
            "focus": "create value",
            "jaFocus": "価値を作る"
          },
          {
            "en": "We need to create value today.",
            "ja": "今日は価値を作る必要がある。",
            "focus": "create value",
            "jaFocus": "価値を作る"
          },
          {
            "en": "Can you create value now?",
            "ja": "今価値を作るできますか？",
            "focus": "create value",
            "jaFocus": "価値を作る"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "create from",
        "ja": "〜から作る",
        "image": "create from は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "create + 副詞/前置詞",
        "examples": [
          {
            "en": "I often create from.",
            "ja": "私はよく〜から作る。",
            "focus": "create from",
            "jaFocus": "〜から作る"
          },
          {
            "en": "We need to create from today.",
            "ja": "今日は〜から作る必要がある。",
            "focus": "create from",
            "jaFocus": "〜から作る"
          },
          {
            "en": "Can you create from now?",
            "ja": "今〜から作るできますか？",
            "focus": "create from",
            "jaFocus": "〜から作る"
          }
        ]
      }
    ]
  },
  {
    "id": "reach",
    "rank": 33,
    "word": "REACH",
    "ipa": "/riːtʃ/",
    "kana": "リーチ",
    "syllable": "reach",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "手や行動が届く",
    "coreDetail": "場所・数値・人に届く。",
    "meanings": [
      {
        "id": "main",
        "title": "① 到達する",
        "pattern": "reach + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "場所・数値・人に届く。",
        "point": "reach は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I reach it every day.",
            "ja": "私は毎日それを到達る。",
            "focus": "reach",
            "object": "it",
            "jaFocus": "到達"
          },
          {
            "en": "We need to reach this today.",
            "ja": "私たちは今日これを到達る必要がある。",
            "focus": "reach",
            "object": "this",
            "jaFocus": "到達"
          },
          {
            "en": "Can you reach it now?",
            "ja": "今それを到達られますか？",
            "focus": "reach",
            "object": "it",
            "jaFocus": "到達"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "reach a goal",
        "ja": "目標に到達する",
        "image": "目標に到達するというまとまりで覚える。",
        "pattern": "reach + 名詞",
        "examples": [
          {
            "en": "I often reach a goal.",
            "ja": "私はよく目標に到達する。",
            "focus": "reach a goal",
            "jaFocus": "目標に到達する"
          },
          {
            "en": "We need to reach a goal today.",
            "ja": "今日は目標に到達する必要がある。",
            "focus": "reach a goal",
            "jaFocus": "目標に到達する"
          },
          {
            "en": "Can you reach a goal now?",
            "ja": "今目標に到達するできますか？",
            "focus": "reach a goal",
            "jaFocus": "目標に到達する"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "reach out",
        "ja": "連絡する",
        "image": "reach out は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "reach + 副詞/前置詞",
        "examples": [
          {
            "en": "I often reach out.",
            "ja": "私はよく連絡する。",
            "focus": "reach out",
            "jaFocus": "連絡する"
          },
          {
            "en": "We need to reach out today.",
            "ja": "今日は連絡する必要がある。",
            "focus": "reach out",
            "jaFocus": "連絡する"
          },
          {
            "en": "Can you reach out now?",
            "ja": "今連絡するできますか？",
            "focus": "reach out",
            "jaFocus": "連絡する"
          }
        ]
      }
    ]
  },
  {
    "id": "return",
    "rank": 34,
    "word": "RETURN",
    "ipa": "/rɪˈtɜːrn/",
    "kana": "リターン",
    "syllable": "return",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "元の場所へ戻る",
    "coreDetail": "元の場所や相手へ戻す。",
    "meanings": [
      {
        "id": "main",
        "title": "① 戻る・返す",
        "pattern": "return + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "元の場所や相手へ戻す。",
        "point": "return は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I return it every day.",
            "ja": "私は毎日それを戻る。",
            "focus": "return",
            "object": "it",
            "jaFocus": "戻"
          },
          {
            "en": "We need to return this today.",
            "ja": "私たちは今日これを戻る必要がある。",
            "focus": "return",
            "object": "this",
            "jaFocus": "戻"
          },
          {
            "en": "Can you return it now?",
            "ja": "今それを戻られますか？",
            "focus": "return",
            "object": "it",
            "jaFocus": "戻"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "return a call",
        "ja": "折り返し電話する",
        "image": "折り返し電話するというまとまりで覚える。",
        "pattern": "return + 名詞",
        "examples": [
          {
            "en": "I often return a call.",
            "ja": "私はよく折り返し電話する。",
            "focus": "return a call",
            "jaFocus": "折り返し電話する"
          },
          {
            "en": "We need to return a call today.",
            "ja": "今日は折り返し電話する必要がある。",
            "focus": "return a call",
            "jaFocus": "折り返し電話する"
          },
          {
            "en": "Can you return a call now?",
            "ja": "今折り返し電話するできますか？",
            "focus": "return a call",
            "jaFocus": "折り返し電話する"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "return to",
        "ja": "〜に戻る",
        "image": "return to は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "return + 副詞/前置詞",
        "examples": [
          {
            "en": "I often return to.",
            "ja": "私はよく〜に戻る。",
            "focus": "return to",
            "jaFocus": "〜に戻る"
          },
          {
            "en": "We need to return to today.",
            "ja": "今日は〜に戻る必要がある。",
            "focus": "return to",
            "jaFocus": "〜に戻る"
          },
          {
            "en": "Can you return to now?",
            "ja": "今〜に戻るできますか？",
            "focus": "return to",
            "jaFocus": "〜に戻る"
          }
        ]
      }
    ]
  },
  {
    "id": "check",
    "rank": 35,
    "word": "CHECK",
    "ipa": "/tʃek/",
    "kana": "チェック",
    "syllable": "check",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "正しいか見る",
    "coreDetail": "状態や内容を確認する。",
    "meanings": [
      {
        "id": "main",
        "title": "① 確認する",
        "pattern": "check + 名詞",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O / 必要に応じて前置詞",
        "image": "状態や内容を確認する。",
        "point": "check は日常会話でよく使う基本動詞。まず代表的な型で使えるようにする。",
        "examples": [
          {
            "en": "I check it every day.",
            "ja": "私は毎日それを確認る。",
            "focus": "check",
            "object": "it",
            "jaFocus": "確認"
          },
          {
            "en": "We need to check this today.",
            "ja": "私たちは今日これを確認る必要がある。",
            "focus": "check",
            "object": "this",
            "jaFocus": "確認"
          },
          {
            "en": "Can you check it now?",
            "ja": "今それを確認られますか？",
            "focus": "check",
            "object": "it",
            "jaFocus": "確認"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "check email",
        "ja": "メールを確認する",
        "image": "メールを確認するというまとまりで覚える。",
        "pattern": "check + 名詞",
        "examples": [
          {
            "en": "I often check email.",
            "ja": "私はよくメールを確認する。",
            "focus": "check email",
            "jaFocus": "メールを確認する"
          },
          {
            "en": "We need to check email today.",
            "ja": "今日はメールを確認する必要がある。",
            "focus": "check email",
            "jaFocus": "メールを確認する"
          },
          {
            "en": "Can you check email now?",
            "ja": "今メールを確認するできますか？",
            "focus": "check email",
            "jaFocus": "メールを確認する"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "check in",
        "ja": "チェックインする",
        "image": "check in は基本動詞と小さな語の組み合わせで意味が広がる。",
        "pattern": "check + 副詞/前置詞",
        "examples": [
          {
            "en": "I often check in.",
            "ja": "私はよくチェックインする。",
            "focus": "check in",
            "jaFocus": "チェックインする"
          },
          {
            "en": "We need to check in today.",
            "ja": "今日はチェックインする必要がある。",
            "focus": "check in",
            "jaFocus": "チェックインする"
          },
          {
            "en": "Can you check in now?",
            "ja": "今チェックインするできますか？",
            "focus": "check in",
            "jaFocus": "チェックインする"
          }
        ]
      }
    ]
  },
  
  {
    "id": "decide",
    "rank": 36,
    "word": "DECIDE",
    "ipa": "/dɪˈsaɪd/",
    "kana": "ディサイド",
    "syllable": "decide",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "決める",
    "coreDetail": "決めるという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 決める",
        "pattern": "decide + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「決める」という結果を作る。",
        "point": "decide の後ろに対象を置く。まずは decide + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to decide this today.",
            "ja": "今日はこれを決める必要がある。",
            "focus": "decide",
            "object": "this",
            "jaFocus": "決め"
          },
          {
            "en": "We can decide the plan.",
            "ja": "私たちはその計画を決めることができる。",
            "focus": "decide",
            "object": "the plan",
            "jaFocus": "決め"
          },
          {
            "en": "Can you decide it by Friday?",
            "ja": "金曜日までにそれを決められますか？",
            "focus": "decide",
            "object": "it",
            "jaFocus": "決め"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "decide a plan",
        "ja": "計画を決める",
        "image": "plan を対象にして 決める。",
        "pattern": "decide + 名詞",
        "examples": [
          {
            "en": "I will decide a plan.",
            "ja": "計画を決めます。",
            "focus": "decide a plan",
            "jaFocus": "決め"
          },
          {
            "en": "We need to decide a plan.",
            "ja": "計画を決める必要がある。",
            "focus": "decide a plan",
            "jaFocus": "決め"
          },
          {
            "en": "Let's decide a better plan.",
            "ja": "より良い計画を決めましょう。",
            "focus": "decide a better plan",
            "jaFocus": "決め"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "decide on",
        "ja": "決めるを続ける",
        "image": "on は継続。決めるを続けるイメージ。",
        "pattern": "decide + on",
        "examples": [
          {
            "en": "I will decide on this.",
            "ja": "これについて決めり続けます。",
            "focus": "decide on",
            "jaFocus": "決めり続け"
          },
          {
            "en": "We should decide on the issue.",
            "ja": "その件について決めり続けるべきだ。",
            "focus": "decide on",
            "jaFocus": "決めり続け"
          },
          {
            "en": "Can you decide on it tomorrow?",
            "ja": "明日それについて決めり続けられますか？",
            "focus": "decide on",
            "jaFocus": "決めり続け"
          }
        ]
      }
    ]
  },
  {
    "id": "explain",
    "rank": 37,
    "word": "EXPLAIN",
    "ipa": "/ɪkˈspleɪn/",
    "kana": "イクスプレイン",
    "syllable": "explain",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "説明する",
    "coreDetail": "説明するという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 説明する",
        "pattern": "explain + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「説明する」という結果を作る。",
        "point": "explain の後ろに対象を置く。まずは explain + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to explain this today.",
            "ja": "今日はこれを説明る必要がある。",
            "focus": "explain",
            "object": "this",
            "jaFocus": "説明"
          },
          {
            "en": "We can explain the plan.",
            "ja": "私たちはその計画を説明ることができる。",
            "focus": "explain",
            "object": "the plan",
            "jaFocus": "説明"
          },
          {
            "en": "Can you explain it by Friday?",
            "ja": "金曜日までにそれを説明られますか？",
            "focus": "explain",
            "object": "it",
            "jaFocus": "説明"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "explain a plan",
        "ja": "計画を説明する",
        "image": "plan を対象にして 説明する。",
        "pattern": "explain + 名詞",
        "examples": [
          {
            "en": "I will explain a plan.",
            "ja": "計画を説明ます。",
            "focus": "explain a plan",
            "jaFocus": "説明"
          },
          {
            "en": "We need to explain a plan.",
            "ja": "計画を説明る必要がある。",
            "focus": "explain a plan",
            "jaFocus": "説明"
          },
          {
            "en": "Let's explain a better plan.",
            "ja": "より良い計画を説明ましょう。",
            "focus": "explain a better plan",
            "jaFocus": "説明"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "explain on",
        "ja": "説明するを続ける",
        "image": "on は継続。説明するを続けるイメージ。",
        "pattern": "explain + on",
        "examples": [
          {
            "en": "I will explain on this.",
            "ja": "これについて説明り続けます。",
            "focus": "explain on",
            "jaFocus": "説明り続け"
          },
          {
            "en": "We should explain on the issue.",
            "ja": "その件について説明り続けるべきだ。",
            "focus": "explain on",
            "jaFocus": "説明り続け"
          },
          {
            "en": "Can you explain on it tomorrow?",
            "ja": "明日それについて説明り続けられますか？",
            "focus": "explain on",
            "jaFocus": "説明り続け"
          }
        ]
      }
    ]
  },
  {
    "id": "prepare",
    "rank": 38,
    "word": "PREPARE",
    "ipa": "/prɪˈper/",
    "kana": "プリペア",
    "syllable": "prepare",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "準備する",
    "coreDetail": "準備するという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 準備する",
        "pattern": "prepare + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「準備する」という結果を作る。",
        "point": "prepare の後ろに対象を置く。まずは prepare + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to prepare this today.",
            "ja": "今日はこれを準備る必要がある。",
            "focus": "prepare",
            "object": "this",
            "jaFocus": "準備"
          },
          {
            "en": "We can prepare the plan.",
            "ja": "私たちはその計画を準備ることができる。",
            "focus": "prepare",
            "object": "the plan",
            "jaFocus": "準備"
          },
          {
            "en": "Can you prepare it by Friday?",
            "ja": "金曜日までにそれを準備られますか？",
            "focus": "prepare",
            "object": "it",
            "jaFocus": "準備"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "prepare a plan",
        "ja": "計画を準備する",
        "image": "plan を対象にして 準備する。",
        "pattern": "prepare + 名詞",
        "examples": [
          {
            "en": "I will prepare a plan.",
            "ja": "計画を準備ます。",
            "focus": "prepare a plan",
            "jaFocus": "準備"
          },
          {
            "en": "We need to prepare a plan.",
            "ja": "計画を準備る必要がある。",
            "focus": "prepare a plan",
            "jaFocus": "準備"
          },
          {
            "en": "Let's prepare a better plan.",
            "ja": "より良い計画を準備ましょう。",
            "focus": "prepare a better plan",
            "jaFocus": "準備"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "prepare on",
        "ja": "準備するを続ける",
        "image": "on は継続。準備するを続けるイメージ。",
        "pattern": "prepare + on",
        "examples": [
          {
            "en": "I will prepare on this.",
            "ja": "これについて準備り続けます。",
            "focus": "prepare on",
            "jaFocus": "準備り続け"
          },
          {
            "en": "We should prepare on the issue.",
            "ja": "その件について準備り続けるべきだ。",
            "focus": "prepare on",
            "jaFocus": "準備り続け"
          },
          {
            "en": "Can you prepare on it tomorrow?",
            "ja": "明日それについて準備り続けられますか？",
            "focus": "prepare on",
            "jaFocus": "準備り続け"
          }
        ]
      }
    ]
  },
  {
    "id": "improve",
    "rank": 39,
    "word": "IMPROVE",
    "ipa": "/ɪmˈpruːv/",
    "kana": "インプルーヴ",
    "syllable": "improve",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "改善する",
    "coreDetail": "改善するという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 改善する",
        "pattern": "improve + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「改善する」という結果を作る。",
        "point": "improve の後ろに対象を置く。まずは improve + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to improve this today.",
            "ja": "今日はこれを改善る必要がある。",
            "focus": "improve",
            "object": "this",
            "jaFocus": "改善"
          },
          {
            "en": "We can improve the plan.",
            "ja": "私たちはその計画を改善ることができる。",
            "focus": "improve",
            "object": "the plan",
            "jaFocus": "改善"
          },
          {
            "en": "Can you improve it by Friday?",
            "ja": "金曜日までにそれを改善られますか？",
            "focus": "improve",
            "object": "it",
            "jaFocus": "改善"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "improve a plan",
        "ja": "計画を改善する",
        "image": "plan を対象にして 改善する。",
        "pattern": "improve + 名詞",
        "examples": [
          {
            "en": "I will improve a plan.",
            "ja": "計画を改善ます。",
            "focus": "improve a plan",
            "jaFocus": "改善"
          },
          {
            "en": "We need to improve a plan.",
            "ja": "計画を改善る必要がある。",
            "focus": "improve a plan",
            "jaFocus": "改善"
          },
          {
            "en": "Let's improve a better plan.",
            "ja": "より良い計画を改善ましょう。",
            "focus": "improve a better plan",
            "jaFocus": "改善"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "improve on",
        "ja": "改善するを続ける",
        "image": "on は継続。改善するを続けるイメージ。",
        "pattern": "improve + on",
        "examples": [
          {
            "en": "I will improve on this.",
            "ja": "これについて改善り続けます。",
            "focus": "improve on",
            "jaFocus": "改善り続け"
          },
          {
            "en": "We should improve on the issue.",
            "ja": "その件について改善り続けるべきだ。",
            "focus": "improve on",
            "jaFocus": "改善り続け"
          },
          {
            "en": "Can you improve on it tomorrow?",
            "ja": "明日それについて改善り続けられますか？",
            "focus": "improve on",
            "jaFocus": "改善り続け"
          }
        ]
      }
    ]
  },
  {
    "id": "reduce",
    "rank": 40,
    "word": "REDUCE",
    "ipa": "/rɪˈduːs/",
    "kana": "リデュース",
    "syllable": "reduce",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "減らす",
    "coreDetail": "減らすという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 減らす",
        "pattern": "reduce + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「減らす」という結果を作る。",
        "point": "reduce の後ろに対象を置く。まずは reduce + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to reduce this today.",
            "ja": "今日はこれを減らる必要がある。",
            "focus": "reduce",
            "object": "this",
            "jaFocus": "減ら"
          },
          {
            "en": "We can reduce the plan.",
            "ja": "私たちはその計画を減らることができる。",
            "focus": "reduce",
            "object": "the plan",
            "jaFocus": "減ら"
          },
          {
            "en": "Can you reduce it by Friday?",
            "ja": "金曜日までにそれを減らられますか？",
            "focus": "reduce",
            "object": "it",
            "jaFocus": "減ら"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "reduce a plan",
        "ja": "計画を減らす",
        "image": "plan を対象にして 減らす。",
        "pattern": "reduce + 名詞",
        "examples": [
          {
            "en": "I will reduce a plan.",
            "ja": "計画を減らます。",
            "focus": "reduce a plan",
            "jaFocus": "減ら"
          },
          {
            "en": "We need to reduce a plan.",
            "ja": "計画を減らる必要がある。",
            "focus": "reduce a plan",
            "jaFocus": "減ら"
          },
          {
            "en": "Let's reduce a better plan.",
            "ja": "より良い計画を減らましょう。",
            "focus": "reduce a better plan",
            "jaFocus": "減ら"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "reduce on",
        "ja": "減らすを続ける",
        "image": "on は継続。減らすを続けるイメージ。",
        "pattern": "reduce + on",
        "examples": [
          {
            "en": "I will reduce on this.",
            "ja": "これについて減らり続けます。",
            "focus": "reduce on",
            "jaFocus": "減らり続け"
          },
          {
            "en": "We should reduce on the issue.",
            "ja": "その件について減らり続けるべきだ。",
            "focus": "reduce on",
            "jaFocus": "減らり続け"
          },
          {
            "en": "Can you reduce on it tomorrow?",
            "ja": "明日それについて減らり続けられますか？",
            "focus": "reduce on",
            "jaFocus": "減らり続け"
          }
        ]
      }
    ]
  },
  {
    "id": "increase",
    "rank": 41,
    "word": "INCREASE",
    "ipa": "/ɪnˈkriːs/",
    "kana": "インクリース",
    "syllable": "increase",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "増やす",
    "coreDetail": "増やすという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 増やす",
        "pattern": "increase + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「増やす」という結果を作る。",
        "point": "increase の後ろに対象を置く。まずは increase + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to increase this today.",
            "ja": "今日はこれを増やる必要がある。",
            "focus": "increase",
            "object": "this",
            "jaFocus": "増や"
          },
          {
            "en": "We can increase the plan.",
            "ja": "私たちはその計画を増やることができる。",
            "focus": "increase",
            "object": "the plan",
            "jaFocus": "増や"
          },
          {
            "en": "Can you increase it by Friday?",
            "ja": "金曜日までにそれを増やられますか？",
            "focus": "increase",
            "object": "it",
            "jaFocus": "増や"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "increase a plan",
        "ja": "計画を増やす",
        "image": "plan を対象にして 増やす。",
        "pattern": "increase + 名詞",
        "examples": [
          {
            "en": "I will increase a plan.",
            "ja": "計画を増やます。",
            "focus": "increase a plan",
            "jaFocus": "増や"
          },
          {
            "en": "We need to increase a plan.",
            "ja": "計画を増やる必要がある。",
            "focus": "increase a plan",
            "jaFocus": "増や"
          },
          {
            "en": "Let's increase a better plan.",
            "ja": "より良い計画を増やましょう。",
            "focus": "increase a better plan",
            "jaFocus": "増や"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "increase on",
        "ja": "増やすを続ける",
        "image": "on は継続。増やすを続けるイメージ。",
        "pattern": "increase + on",
        "examples": [
          {
            "en": "I will increase on this.",
            "ja": "これについて増やり続けます。",
            "focus": "increase on",
            "jaFocus": "増やり続け"
          },
          {
            "en": "We should increase on the issue.",
            "ja": "その件について増やり続けるべきだ。",
            "focus": "increase on",
            "jaFocus": "増やり続け"
          },
          {
            "en": "Can you increase on it tomorrow?",
            "ja": "明日それについて増やり続けられますか？",
            "focus": "increase on",
            "jaFocus": "増やり続け"
          }
        ]
      }
    ]
  },
  {
    "id": "support",
    "rank": 42,
    "word": "SUPPORT",
    "ipa": "/səˈpɔːrt/",
    "kana": "サポート",
    "syllable": "support",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "支える",
    "coreDetail": "支えるという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 支える",
        "pattern": "support + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「支える」という結果を作る。",
        "point": "support の後ろに対象を置く。まずは support + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to support this today.",
            "ja": "今日はこれを支える必要がある。",
            "focus": "support",
            "object": "this",
            "jaFocus": "支え"
          },
          {
            "en": "We can support the plan.",
            "ja": "私たちはその計画を支えることができる。",
            "focus": "support",
            "object": "the plan",
            "jaFocus": "支え"
          },
          {
            "en": "Can you support it by Friday?",
            "ja": "金曜日までにそれを支えられますか？",
            "focus": "support",
            "object": "it",
            "jaFocus": "支え"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "support a plan",
        "ja": "計画を支える",
        "image": "plan を対象にして 支える。",
        "pattern": "support + 名詞",
        "examples": [
          {
            "en": "I will support a plan.",
            "ja": "計画を支えます。",
            "focus": "support a plan",
            "jaFocus": "支え"
          },
          {
            "en": "We need to support a plan.",
            "ja": "計画を支える必要がある。",
            "focus": "support a plan",
            "jaFocus": "支え"
          },
          {
            "en": "Let's support a better plan.",
            "ja": "より良い計画を支えましょう。",
            "focus": "support a better plan",
            "jaFocus": "支え"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "support on",
        "ja": "支えるを続ける",
        "image": "on は継続。支えるを続けるイメージ。",
        "pattern": "support + on",
        "examples": [
          {
            "en": "I will support on this.",
            "ja": "これについて支えり続けます。",
            "focus": "support on",
            "jaFocus": "支えり続け"
          },
          {
            "en": "We should support on the issue.",
            "ja": "その件について支えり続けるべきだ。",
            "focus": "support on",
            "jaFocus": "支えり続け"
          },
          {
            "en": "Can you support on it tomorrow?",
            "ja": "明日それについて支えり続けられますか？",
            "focus": "support on",
            "jaFocus": "支えり続け"
          }
        ]
      }
    ]
  },
  {
    "id": "include",
    "rank": 43,
    "word": "INCLUDE",
    "ipa": "/ɪnˈkluːd/",
    "kana": "インクルード",
    "syllable": "include",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "含む",
    "coreDetail": "含むという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 含む",
        "pattern": "include + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「含む」という結果を作る。",
        "point": "include の後ろに対象を置く。まずは include + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to include this today.",
            "ja": "今日はこれを含る必要がある。",
            "focus": "include",
            "object": "this",
            "jaFocus": "含"
          },
          {
            "en": "We can include the plan.",
            "ja": "私たちはその計画を含ることができる。",
            "focus": "include",
            "object": "the plan",
            "jaFocus": "含"
          },
          {
            "en": "Can you include it by Friday?",
            "ja": "金曜日までにそれを含られますか？",
            "focus": "include",
            "object": "it",
            "jaFocus": "含"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "include a plan",
        "ja": "計画を含む",
        "image": "plan を対象にして 含む。",
        "pattern": "include + 名詞",
        "examples": [
          {
            "en": "I will include a plan.",
            "ja": "計画を含ます。",
            "focus": "include a plan",
            "jaFocus": "含"
          },
          {
            "en": "We need to include a plan.",
            "ja": "計画を含る必要がある。",
            "focus": "include a plan",
            "jaFocus": "含"
          },
          {
            "en": "Let's include a better plan.",
            "ja": "より良い計画を含ましょう。",
            "focus": "include a better plan",
            "jaFocus": "含"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "include on",
        "ja": "含むを続ける",
        "image": "on は継続。含むを続けるイメージ。",
        "pattern": "include + on",
        "examples": [
          {
            "en": "I will include on this.",
            "ja": "これについて含り続けます。",
            "focus": "include on",
            "jaFocus": "含り続け"
          },
          {
            "en": "We should include on the issue.",
            "ja": "その件について含り続けるべきだ。",
            "focus": "include on",
            "jaFocus": "含り続け"
          },
          {
            "en": "Can you include on it tomorrow?",
            "ja": "明日それについて含り続けられますか？",
            "focus": "include on",
            "jaFocus": "含り続け"
          }
        ]
      }
    ]
  },
  {
    "id": "offer",
    "rank": 44,
    "word": "OFFER",
    "ipa": "/ˈɔːfər/",
    "kana": "オファー",
    "syllable": "offer",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "申し出る",
    "coreDetail": "申し出るという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 申し出る",
        "pattern": "offer + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「申し出る」という結果を作る。",
        "point": "offer の後ろに対象を置く。まずは offer + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to offer this today.",
            "ja": "今日はこれを申し出る必要がある。",
            "focus": "offer",
            "object": "this",
            "jaFocus": "申し出"
          },
          {
            "en": "We can offer the plan.",
            "ja": "私たちはその計画を申し出ることができる。",
            "focus": "offer",
            "object": "the plan",
            "jaFocus": "申し出"
          },
          {
            "en": "Can you offer it by Friday?",
            "ja": "金曜日までにそれを申し出られますか？",
            "focus": "offer",
            "object": "it",
            "jaFocus": "申し出"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "offer a plan",
        "ja": "計画を申し出る",
        "image": "plan を対象にして 申し出る。",
        "pattern": "offer + 名詞",
        "examples": [
          {
            "en": "I will offer a plan.",
            "ja": "計画を申し出ます。",
            "focus": "offer a plan",
            "jaFocus": "申し出"
          },
          {
            "en": "We need to offer a plan.",
            "ja": "計画を申し出る必要がある。",
            "focus": "offer a plan",
            "jaFocus": "申し出"
          },
          {
            "en": "Let's offer a better plan.",
            "ja": "より良い計画を申し出ましょう。",
            "focus": "offer a better plan",
            "jaFocus": "申し出"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "offer on",
        "ja": "申し出るを続ける",
        "image": "on は継続。申し出るを続けるイメージ。",
        "pattern": "offer + on",
        "examples": [
          {
            "en": "I will offer on this.",
            "ja": "これについて申し出り続けます。",
            "focus": "offer on",
            "jaFocus": "申し出り続け"
          },
          {
            "en": "We should offer on the issue.",
            "ja": "その件について申し出り続けるべきだ。",
            "focus": "offer on",
            "jaFocus": "申し出り続け"
          },
          {
            "en": "Can you offer on it tomorrow?",
            "ja": "明日それについて申し出り続けられますか？",
            "focus": "offer on",
            "jaFocus": "申し出り続け"
          }
        ]
      }
    ]
  },
  {
    "id": "receive",
    "rank": 45,
    "word": "RECEIVE",
    "ipa": "/rɪˈsiːv/",
    "kana": "リシーヴ",
    "syllable": "receive",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "受け取る",
    "coreDetail": "受け取るという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 受け取る",
        "pattern": "receive + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「受け取る」という結果を作る。",
        "point": "receive の後ろに対象を置く。まずは receive + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to receive this today.",
            "ja": "今日はこれを受け取る必要がある。",
            "focus": "receive",
            "object": "this",
            "jaFocus": "受け取"
          },
          {
            "en": "We can receive the plan.",
            "ja": "私たちはその計画を受け取ることができる。",
            "focus": "receive",
            "object": "the plan",
            "jaFocus": "受け取"
          },
          {
            "en": "Can you receive it by Friday?",
            "ja": "金曜日までにそれを受け取られますか？",
            "focus": "receive",
            "object": "it",
            "jaFocus": "受け取"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "receive a plan",
        "ja": "計画を受け取る",
        "image": "plan を対象にして 受け取る。",
        "pattern": "receive + 名詞",
        "examples": [
          {
            "en": "I will receive a plan.",
            "ja": "計画を受け取ます。",
            "focus": "receive a plan",
            "jaFocus": "受け取"
          },
          {
            "en": "We need to receive a plan.",
            "ja": "計画を受け取る必要がある。",
            "focus": "receive a plan",
            "jaFocus": "受け取"
          },
          {
            "en": "Let's receive a better plan.",
            "ja": "より良い計画を受け取ましょう。",
            "focus": "receive a better plan",
            "jaFocus": "受け取"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "receive on",
        "ja": "受け取るを続ける",
        "image": "on は継続。受け取るを続けるイメージ。",
        "pattern": "receive + on",
        "examples": [
          {
            "en": "I will receive on this.",
            "ja": "これについて受け取り続けます。",
            "focus": "receive on",
            "jaFocus": "受け取り続け"
          },
          {
            "en": "We should receive on the issue.",
            "ja": "その件について受け取り続けるべきだ。",
            "focus": "receive on",
            "jaFocus": "受け取り続け"
          },
          {
            "en": "Can you receive on it tomorrow?",
            "ja": "明日それについて受け取り続けられますか？",
            "focus": "receive on",
            "jaFocus": "受け取り続け"
          }
        ]
      }
    ]
  },
  {
    "id": "provide",
    "rank": 46,
    "word": "PROVIDE",
    "ipa": "/prəˈvaɪd/",
    "kana": "プロヴァイド",
    "syllable": "provide",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "提供する",
    "coreDetail": "提供するという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 提供する",
        "pattern": "provide + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「提供する」という結果を作る。",
        "point": "provide の後ろに対象を置く。まずは provide + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to provide this today.",
            "ja": "今日はこれを提供る必要がある。",
            "focus": "provide",
            "object": "this",
            "jaFocus": "提供"
          },
          {
            "en": "We can provide the plan.",
            "ja": "私たちはその計画を提供ることができる。",
            "focus": "provide",
            "object": "the plan",
            "jaFocus": "提供"
          },
          {
            "en": "Can you provide it by Friday?",
            "ja": "金曜日までにそれを提供られますか？",
            "focus": "provide",
            "object": "it",
            "jaFocus": "提供"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "provide a plan",
        "ja": "計画を提供する",
        "image": "plan を対象にして 提供する。",
        "pattern": "provide + 名詞",
        "examples": [
          {
            "en": "I will provide a plan.",
            "ja": "計画を提供ます。",
            "focus": "provide a plan",
            "jaFocus": "提供"
          },
          {
            "en": "We need to provide a plan.",
            "ja": "計画を提供る必要がある。",
            "focus": "provide a plan",
            "jaFocus": "提供"
          },
          {
            "en": "Let's provide a better plan.",
            "ja": "より良い計画を提供ましょう。",
            "focus": "provide a better plan",
            "jaFocus": "提供"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "provide on",
        "ja": "提供するを続ける",
        "image": "on は継続。提供するを続けるイメージ。",
        "pattern": "provide + on",
        "examples": [
          {
            "en": "I will provide on this.",
            "ja": "これについて提供り続けます。",
            "focus": "provide on",
            "jaFocus": "提供り続け"
          },
          {
            "en": "We should provide on the issue.",
            "ja": "その件について提供り続けるべきだ。",
            "focus": "provide on",
            "jaFocus": "提供り続け"
          },
          {
            "en": "Can you provide on it tomorrow?",
            "ja": "明日それについて提供り続けられますか？",
            "focus": "provide on",
            "jaFocus": "提供り続け"
          }
        ]
      }
    ]
  },
  {
    "id": "consider",
    "rank": 47,
    "word": "CONSIDER",
    "ipa": "/kənˈsɪdər/",
    "kana": "コンシダー",
    "syllable": "consider",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "検討する",
    "coreDetail": "検討するという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 検討する",
        "pattern": "consider + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「検討する」という結果を作る。",
        "point": "consider の後ろに対象を置く。まずは consider + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to consider this today.",
            "ja": "今日はこれを検討る必要がある。",
            "focus": "consider",
            "object": "this",
            "jaFocus": "検討"
          },
          {
            "en": "We can consider the plan.",
            "ja": "私たちはその計画を検討ることができる。",
            "focus": "consider",
            "object": "the plan",
            "jaFocus": "検討"
          },
          {
            "en": "Can you consider it by Friday?",
            "ja": "金曜日までにそれを検討られますか？",
            "focus": "consider",
            "object": "it",
            "jaFocus": "検討"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "consider a plan",
        "ja": "計画を検討する",
        "image": "plan を対象にして 検討する。",
        "pattern": "consider + 名詞",
        "examples": [
          {
            "en": "I will consider a plan.",
            "ja": "計画を検討ます。",
            "focus": "consider a plan",
            "jaFocus": "検討"
          },
          {
            "en": "We need to consider a plan.",
            "ja": "計画を検討る必要がある。",
            "focus": "consider a plan",
            "jaFocus": "検討"
          },
          {
            "en": "Let's consider a better plan.",
            "ja": "より良い計画を検討ましょう。",
            "focus": "consider a better plan",
            "jaFocus": "検討"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "consider on",
        "ja": "検討するを続ける",
        "image": "on は継続。検討するを続けるイメージ。",
        "pattern": "consider + on",
        "examples": [
          {
            "en": "I will consider on this.",
            "ja": "これについて検討り続けます。",
            "focus": "consider on",
            "jaFocus": "検討り続け"
          },
          {
            "en": "We should consider on the issue.",
            "ja": "その件について検討り続けるべきだ。",
            "focus": "consider on",
            "jaFocus": "検討り続け"
          },
          {
            "en": "Can you consider on it tomorrow?",
            "ja": "明日それについて検討り続けられますか？",
            "focus": "consider on",
            "jaFocus": "検討り続け"
          }
        ]
      }
    ]
  },
  {
    "id": "develop",
    "rank": 48,
    "word": "DEVELOP",
    "ipa": "/dɪˈveləp/",
    "kana": "ディヴェロップ",
    "syllable": "develop",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "発展させる",
    "coreDetail": "発展させるという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 発展させる",
        "pattern": "develop + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「発展させる」という結果を作る。",
        "point": "develop の後ろに対象を置く。まずは develop + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to develop this today.",
            "ja": "今日はこれを発展る必要がある。",
            "focus": "develop",
            "object": "this",
            "jaFocus": "発展"
          },
          {
            "en": "We can develop the plan.",
            "ja": "私たちはその計画を発展ることができる。",
            "focus": "develop",
            "object": "the plan",
            "jaFocus": "発展"
          },
          {
            "en": "Can you develop it by Friday?",
            "ja": "金曜日までにそれを発展られますか？",
            "focus": "develop",
            "object": "it",
            "jaFocus": "発展"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "develop a plan",
        "ja": "計画を発展させる",
        "image": "plan を対象にして 発展させる。",
        "pattern": "develop + 名詞",
        "examples": [
          {
            "en": "I will develop a plan.",
            "ja": "計画を発展ます。",
            "focus": "develop a plan",
            "jaFocus": "発展"
          },
          {
            "en": "We need to develop a plan.",
            "ja": "計画を発展る必要がある。",
            "focus": "develop a plan",
            "jaFocus": "発展"
          },
          {
            "en": "Let's develop a better plan.",
            "ja": "より良い計画を発展ましょう。",
            "focus": "develop a better plan",
            "jaFocus": "発展"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "develop on",
        "ja": "発展させるを続ける",
        "image": "on は継続。発展させるを続けるイメージ。",
        "pattern": "develop + on",
        "examples": [
          {
            "en": "I will develop on this.",
            "ja": "これについて発展り続けます。",
            "focus": "develop on",
            "jaFocus": "発展り続け"
          },
          {
            "en": "We should develop on the issue.",
            "ja": "その件について発展り続けるべきだ。",
            "focus": "develop on",
            "jaFocus": "発展り続け"
          },
          {
            "en": "Can you develop on it tomorrow?",
            "ja": "明日それについて発展り続けられますか？",
            "focus": "develop on",
            "jaFocus": "発展り続け"
          }
        ]
      }
    ]
  },
  {
    "id": "manage",
    "rank": 49,
    "word": "MANAGE",
    "ipa": "/ˈmænɪdʒ/",
    "kana": "マネージ",
    "syllable": "manage",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "管理する",
    "coreDetail": "管理するという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 管理する",
        "pattern": "manage + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「管理する」という結果を作る。",
        "point": "manage の後ろに対象を置く。まずは manage + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to manage this today.",
            "ja": "今日はこれを管理る必要がある。",
            "focus": "manage",
            "object": "this",
            "jaFocus": "管理"
          },
          {
            "en": "We can manage the plan.",
            "ja": "私たちはその計画を管理ることができる。",
            "focus": "manage",
            "object": "the plan",
            "jaFocus": "管理"
          },
          {
            "en": "Can you manage it by Friday?",
            "ja": "金曜日までにそれを管理られますか？",
            "focus": "manage",
            "object": "it",
            "jaFocus": "管理"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "manage a plan",
        "ja": "計画を管理する",
        "image": "plan を対象にして 管理する。",
        "pattern": "manage + 名詞",
        "examples": [
          {
            "en": "I will manage a plan.",
            "ja": "計画を管理ます。",
            "focus": "manage a plan",
            "jaFocus": "管理"
          },
          {
            "en": "We need to manage a plan.",
            "ja": "計画を管理る必要がある。",
            "focus": "manage a plan",
            "jaFocus": "管理"
          },
          {
            "en": "Let's manage a better plan.",
            "ja": "より良い計画を管理ましょう。",
            "focus": "manage a better plan",
            "jaFocus": "管理"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "manage on",
        "ja": "管理するを続ける",
        "image": "on は継続。管理するを続けるイメージ。",
        "pattern": "manage + on",
        "examples": [
          {
            "en": "I will manage on this.",
            "ja": "これについて管理り続けます。",
            "focus": "manage on",
            "jaFocus": "管理り続け"
          },
          {
            "en": "We should manage on the issue.",
            "ja": "その件について管理り続けるべきだ。",
            "focus": "manage on",
            "jaFocus": "管理り続け"
          },
          {
            "en": "Can you manage on it tomorrow?",
            "ja": "明日それについて管理り続けられますか？",
            "focus": "manage on",
            "jaFocus": "管理り続け"
          }
        ]
      }
    ]
  },
  {
    "id": "achieve",
    "rank": 50,
    "word": "ACHIEVE",
    "ipa": "/əˈtʃiːv/",
    "kana": "アチーヴ",
    "syllable": "achieve",
    "transitivity": "他動詞中心",
    "importance": "★★★★☆ 重要",
    "core": "達成する",
    "coreDetail": "達成するという行動を、仕事や日常会話で使える形にする基本動詞。",
    "meanings": [
      {
        "id": "main",
        "title": "① 達成する",
        "pattern": "achieve + 名詞",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "対象に働きかけて「達成する」という結果を作る。",
        "point": "achieve の後ろに対象を置く。まずは achieve + 名詞 の型で覚える。",
        "examples": [
          {
            "en": "I need to achieve this today.",
            "ja": "今日はこれを達成る必要がある。",
            "focus": "achieve",
            "object": "this",
            "jaFocus": "達成"
          },
          {
            "en": "We can achieve the plan.",
            "ja": "私たちはその計画を達成ることができる。",
            "focus": "achieve",
            "object": "the plan",
            "jaFocus": "達成"
          },
          {
            "en": "Can you achieve it by Friday?",
            "ja": "金曜日までにそれを達成られますか？",
            "focus": "achieve",
            "object": "it",
            "jaFocus": "達成"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "achieve a plan",
        "ja": "計画を達成する",
        "image": "plan を対象にして 達成する。",
        "pattern": "achieve + 名詞",
        "examples": [
          {
            "en": "I will achieve a plan.",
            "ja": "計画を達成ます。",
            "focus": "achieve a plan",
            "jaFocus": "達成"
          },
          {
            "en": "We need to achieve a plan.",
            "ja": "計画を達成る必要がある。",
            "focus": "achieve a plan",
            "jaFocus": "達成"
          },
          {
            "en": "Let's achieve a better plan.",
            "ja": "より良い計画を達成ましょう。",
            "focus": "achieve a better plan",
            "jaFocus": "達成"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "achieve on",
        "ja": "達成するを続ける",
        "image": "on は継続。達成するを続けるイメージ。",
        "pattern": "achieve + on",
        "examples": [
          {
            "en": "I will achieve on this.",
            "ja": "これについて達成り続けます。",
            "focus": "achieve on",
            "jaFocus": "達成り続け"
          },
          {
            "en": "We should achieve on the issue.",
            "ja": "その件について達成り続けるべきだ。",
            "focus": "achieve on",
            "jaFocus": "達成り続け"
          },
          {
            "en": "Can you achieve on it tomorrow?",
            "ja": "明日それについて達成り続けられますか？",
            "focus": "achieve on",
            "jaFocus": "達成り続け"
          }
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

export function getTestItemsForVerb(verbId: string) {
  return testItems.filter((item) => item.verbId === verbId);
}

export function getTestItemById(itemId: string) {
  return testItems.find((item) => item.id === itemId);
}
