export type DailyPhraseCategory =
  | "opinion"
  | "question"
  | "request"
  | "permission"
  | "suggestion"
  | "plan"
  | "necessity"
  | "preference"
  | "emotion"
  | "reaction"
  | "thanks"
  | "apology"
  | "exclamation"
  | "existence"
  | "time";

export type DailyPhraseAccessTier = "free" | "starter" | "standard";

export type DailyPhraseSegment = {
  text: string;
  highlight: boolean;
};

export type DailyPhraseExample = {
  id: string;
  segments: DailyPhraseSegment[];
  english: string;
  japanese: string;
  note?: string;
};

export type DailyPhraseComparison = {
  label: string;
  english: string;
  japanese: string;
  explanation: string;
};

export type DailyPhrase = {
  id: string;
  rank: number;
  pattern: string;
  meaning: string;
  usage: string;
  category: DailyPhraseCategory;
  accessTier: DailyPhraseAccessTier;
  examples: DailyPhraseExample[];
  grammarNotes: string[];
  comparisons?: DailyPhraseComparison[];
  answerExamples?: Array<{ english: string; japanese: string }>;
  tags: string[];
};

export const DAILY_PHRASE_TOTAL = 50;
export const FREE_DAILY_PHRASE_LIMIT = 3;
export const STARTER_DAILY_PHRASE_LIMIT = 30;

export const dailyPhrases: DailyPhrase[] = [
  {
    "id": "i-think",
    "rank": 1,
    "pattern": "I think + 文",
    "meaning": "～だと思います",
    "usage": "自分の意見・予想・判断をやわらかく伝える。",
    "category": "opinion",
    "accessTier": "free",
    "examples": [
      {
        "id": "i-think-1",
        "segments": [
          {
            "text": "I think",
            "highlight": true
          },
          {
            "text": " this restaurant is really good.",
            "highlight": false
          }
        ],
        "english": "I think this restaurant is really good.",
        "japanese": "このレストランは本当においしいと思います。"
      },
      {
        "id": "i-think-2",
        "segments": [
          {
            "text": "I think",
            "highlight": true
          },
          {
            "text": " we should leave early.",
            "highlight": false
          }
        ],
        "english": "I think we should leave early.",
        "japanese": "早めに出発した方がいいと思います。"
      },
      {
        "id": "i-think-3",
        "segments": [
          {
            "text": "I think",
            "highlight": true
          },
          {
            "text": " he’s still at work.",
            "highlight": false
          }
        ],
        "english": "I think he’s still at work.",
        "japanese": "彼はまだ仕事中だと思います。"
      },
      {
        "id": "i-think-4",
        "segments": [
          {
            "text": "I think",
            "highlight": true
          },
          {
            "text": " it’s going to rain tonight.",
            "highlight": false
          }
        ],
        "english": "I think it’s going to rain tonight.",
        "japanese": "今夜は雨が降ると思います。"
      },
      {
        "id": "i-think-5",
        "segments": [
          {
            "text": "I think",
            "highlight": true
          },
          {
            "text": " you’ll like this movie.",
            "highlight": false
          }
        ],
        "english": "I think you’ll like this movie.",
        "japanese": "あなたはこの映画を気に入ると思います。"
      }
    ],
    "grammarNotes": [
      "否定的な意見では I don’t think ... が日常会話で自然です。"
    ],
    "tags": [
      "opinion",
      "daily-phrase"
    ]
  },
  {
    "id": "do-you",
    "rank": 2,
    "pattern": "Do you + 動詞?",
    "meaning": "～しますか？",
    "usage": "習慣・好み・普段の行動について質問する。",
    "category": "question",
    "accessTier": "free",
    "examples": [
      {
        "id": "do-you-1",
        "segments": [
          {
            "text": "Do you",
            "highlight": true
          },
          {
            "text": " like coffee?",
            "highlight": false
          }
        ],
        "english": "Do you like coffee?",
        "japanese": "コーヒーは好きですか？"
      },
      {
        "id": "do-you-2",
        "segments": [
          {
            "text": "Do you",
            "highlight": true
          },
          {
            "text": " work on weekends?",
            "highlight": false
          }
        ],
        "english": "Do you work on weekends?",
        "japanese": "週末も働きますか？"
      },
      {
        "id": "do-you-3",
        "segments": [
          {
            "text": "Do you",
            "highlight": true
          },
          {
            "text": " live near here?",
            "highlight": false
          }
        ],
        "english": "Do you live near here?",
        "japanese": "この近くに住んでいますか？"
      },
      {
        "id": "do-you-4",
        "segments": [
          {
            "text": "Do you",
            "highlight": true
          },
          {
            "text": " need any help?",
            "highlight": false
          }
        ],
        "english": "Do you need any help?",
        "japanese": "何か手伝いが必要ですか？"
      },
      {
        "id": "do-you-5",
        "segments": [
          {
            "text": "Do you",
            "highlight": true
          },
          {
            "text": " remember his name?",
            "highlight": false
          }
        ],
        "english": "Do you remember his name?",
        "japanese": "彼の名前を覚えていますか？"
      }
    ],
    "grammarNotes": [
      "今していることには現在進行形を使います。"
    ],
    "tags": [
      "question",
      "daily-phrase"
    ]
  },
  {
    "id": "can-you",
    "rank": 3,
    "pattern": "Can you + 動詞?",
    "meaning": "～できますか？／～してくれますか？",
    "usage": "能力を確認したり、カジュアルに依頼したりする。",
    "category": "request",
    "accessTier": "free",
    "examples": [
      {
        "id": "can-you-1",
        "segments": [
          {
            "text": "Can you",
            "highlight": true
          },
          {
            "text": " speak English?",
            "highlight": false
          }
        ],
        "english": "Can you speak English?",
        "japanese": "英語を話せますか？"
      },
      {
        "id": "can-you-2",
        "segments": [
          {
            "text": "Can you",
            "highlight": true
          },
          {
            "text": " help me with this?",
            "highlight": false
          }
        ],
        "english": "Can you help me with this?",
        "japanese": "これを手伝ってくれますか？"
      },
      {
        "id": "can-you-3",
        "segments": [
          {
            "text": "Can you",
            "highlight": true
          },
          {
            "text": " open the window?",
            "highlight": false
          }
        ],
        "english": "Can you open the window?",
        "japanese": "窓を開けてくれますか？"
      },
      {
        "id": "can-you-4",
        "segments": [
          {
            "text": "Can you",
            "highlight": true
          },
          {
            "text": " send me the picture?",
            "highlight": false
          }
        ],
        "english": "Can you send me the picture?",
        "japanese": "その写真を送ってくれますか？"
      },
      {
        "id": "can-you-5",
        "segments": [
          {
            "text": "Can you",
            "highlight": true
          },
          {
            "text": " come a little earlier?",
            "highlight": false
          }
        ],
        "english": "Can you come a little earlier?",
        "japanese": "少し早めに来られますか？"
      }
    ],
    "grammarNotes": [
      "能力確認と依頼の両方に使います。"
    ],
    "tags": [
      "request",
      "daily-phrase"
    ]
  },
  {
    "id": "i-want-to",
    "rank": 4,
    "pattern": "I want to + 動詞",
    "meaning": "～したいです",
    "usage": "自分の希望を伝える。",
    "category": "preference",
    "accessTier": "starter",
    "examples": [
      {
        "id": "i-want-to-1",
        "segments": [
          {
            "text": "I want to",
            "highlight": true
          },
          {
            "text": " try this dish.",
            "highlight": false
          }
        ],
        "english": "I want to try this dish.",
        "japanese": "この料理を食べてみたいです。"
      },
      {
        "id": "i-want-to-2",
        "segments": [
          {
            "text": "I want to",
            "highlight": true
          },
          {
            "text": " go home early today.",
            "highlight": false
          }
        ],
        "english": "I want to go home early today.",
        "japanese": "今日は早く家に帰りたいです。"
      },
      {
        "id": "i-want-to-3",
        "segments": [
          {
            "text": "I want to",
            "highlight": true
          },
          {
            "text": " learn how to cook Thai food.",
            "highlight": false
          }
        ],
        "english": "I want to learn how to cook Thai food.",
        "japanese": "タイ料理の作り方を学びたいです。"
      },
      {
        "id": "i-want-to-4",
        "segments": [
          {
            "text": "I want to",
            "highlight": true
          },
          {
            "text": " talk to you about something.",
            "highlight": false
          }
        ],
        "english": "I want to talk to you about something.",
        "japanese": "あなたに少し話したいことがあります。"
      },
      {
        "id": "i-want-to-5",
        "segments": [
          {
            "text": "I want to",
            "highlight": true
          },
          {
            "text": " buy a new phone.",
            "highlight": false
          }
        ],
        "english": "I want to buy a new phone.",
        "japanese": "新しいスマートフォンを買いたいです。"
      }
    ],
    "grammarNotes": [
      "丁寧に希望を伝える場合は I’d like to ... を使います。"
    ],
    "tags": [
      "preference",
      "daily-phrase"
    ]
  },
  {
    "id": "im-going-to",
    "rank": 5,
    "pattern": "I’m going to + 動詞",
    "meaning": "～する予定です",
    "usage": "予定・意図を伝える。",
    "category": "plan",
    "accessTier": "starter",
    "examples": [
      {
        "id": "im-going-to-1",
        "segments": [
          {
            "text": "I’m going to",
            "highlight": true
          },
          {
            "text": " meet a friend after work.",
            "highlight": false
          }
        ],
        "english": "I’m going to meet a friend after work.",
        "japanese": "仕事のあと友達に会う予定です。"
      },
      {
        "id": "im-going-to-2",
        "segments": [
          {
            "text": "I’m going to",
            "highlight": true
          },
          {
            "text": " cook dinner tonight.",
            "highlight": false
          }
        ],
        "english": "I’m going to cook dinner tonight.",
        "japanese": "今夜は夕食を作る予定です。"
      },
      {
        "id": "im-going-to-3",
        "segments": [
          {
            "text": "I’m going to",
            "highlight": true
          },
          {
            "text": " visit my parents this weekend.",
            "highlight": false
          }
        ],
        "english": "I’m going to visit my parents this weekend.",
        "japanese": "今週末、両親に会いに行く予定です。"
      },
      {
        "id": "im-going-to-4",
        "segments": [
          {
            "text": "I’m going to",
            "highlight": true
          },
          {
            "text": " take a short break.",
            "highlight": false
          }
        ],
        "english": "I’m going to take a short break.",
        "japanese": "少し休憩するつもりです。"
      },
      {
        "id": "im-going-to-5",
        "segments": [
          {
            "text": "I’m going to",
            "highlight": true
          },
          {
            "text": " clean my room tomorrow.",
            "highlight": false
          }
        ],
        "english": "I’m going to clean my room tomorrow.",
        "japanese": "明日、自分の部屋を掃除する予定です。"
      }
    ],
    "grammarNotes": [
      "I’m going to Tokyo. の going to は移動を表します。"
    ],
    "tags": [
      "plan",
      "daily-phrase"
    ]
  },
  {
    "id": "do-you-want-to",
    "rank": 6,
    "pattern": "Do you want to + 動詞?",
    "meaning": "～したい？／一緒に～しない？",
    "usage": "希望を確認したり、カジュアルに誘ったりする。",
    "category": "suggestion",
    "accessTier": "starter",
    "examples": [
      {
        "id": "do-you-want-to-1",
        "segments": [
          {
            "text": "Do you want to",
            "highlight": true
          },
          {
            "text": " go for lunch?",
            "highlight": false
          }
        ],
        "english": "Do you want to go for lunch?",
        "japanese": "お昼を食べに行きませんか？"
      },
      {
        "id": "do-you-want-to-2",
        "segments": [
          {
            "text": "Do you want to",
            "highlight": true
          },
          {
            "text": " watch a movie tonight?",
            "highlight": false
          }
        ],
        "english": "Do you want to watch a movie tonight?",
        "japanese": "今夜、映画を見ませんか？"
      },
      {
        "id": "do-you-want-to-3",
        "segments": [
          {
            "text": "Do you want to",
            "highlight": true
          },
          {
            "text": " come with us?",
            "highlight": false
          }
        ],
        "english": "Do you want to come with us?",
        "japanese": "私たちと一緒に来ませんか？"
      },
      {
        "id": "do-you-want-to-4",
        "segments": [
          {
            "text": "Do you want to",
            "highlight": true
          },
          {
            "text": " try this?",
            "highlight": false
          }
        ],
        "english": "Do you want to try this?",
        "japanese": "これを試してみますか？"
      },
      {
        "id": "do-you-want-to-5",
        "segments": [
          {
            "text": "Do you want to",
            "highlight": true
          },
          {
            "text": " sit outside?",
            "highlight": false
          }
        ],
        "english": "Do you want to sit outside?",
        "japanese": "外の席に座りたいですか？"
      }
    ],
    "grammarNotes": [
      "希望確認と誘いの両方に使います。"
    ],
    "tags": [
      "suggestion",
      "daily-phrase"
    ]
  },
  {
    "id": "how-about",
    "rank": 7,
    "pattern": "How about + 名詞／動名詞?",
    "meaning": "～はどうですか？",
    "usage": "提案や別の選択肢を示す。",
    "category": "suggestion",
    "accessTier": "starter",
    "examples": [
      {
        "id": "how-about-1",
        "segments": [
          {
            "text": "How about",
            "highlight": true
          },
          {
            "text": " pizza for dinner?",
            "highlight": false
          }
        ],
        "english": "How about pizza for dinner?",
        "japanese": "夕食はピザにするのはどうですか？"
      },
      {
        "id": "how-about-2",
        "segments": [
          {
            "text": "How about",
            "highlight": true
          },
          {
            "text": " going for a walk?",
            "highlight": false
          }
        ],
        "english": "How about going for a walk?",
        "japanese": "散歩に行くのはどうですか？"
      },
      {
        "id": "how-about-3",
        "segments": [
          {
            "text": "How about",
            "highlight": true
          },
          {
            "text": " meeting at seven?",
            "highlight": false
          }
        ],
        "english": "How about meeting at seven?",
        "japanese": "7時に会うのはどうですか？"
      },
      {
        "id": "how-about-4",
        "segments": [
          {
            "text": "How about",
            "highlight": true
          },
          {
            "text": " this one?",
            "highlight": false
          }
        ],
        "english": "How about this one?",
        "japanese": "これはどうですか？"
      },
      {
        "id": "how-about-5",
        "segments": [
          {
            "text": "How about",
            "highlight": true
          },
          {
            "text": " taking a taxi?",
            "highlight": false
          }
        ],
        "english": "How about taking a taxi?",
        "japanese": "タクシーで行くのはどうですか？"
      }
    ],
    "grammarNotes": [
      "動詞を続ける場合は -ing 形にします。"
    ],
    "tags": [
      "suggestion",
      "daily-phrase"
    ]
  },
  {
    "id": "what-do-you-think-about",
    "rank": 8,
    "pattern": "What do you think about + 名詞?",
    "meaning": "～についてどう思いますか？",
    "usage": "相手の意見・評価を尋ねる。",
    "category": "opinion",
    "accessTier": "starter",
    "examples": [
      {
        "id": "what-do-you-think-about-1",
        "segments": [
          {
            "text": "What do you think about",
            "highlight": true
          },
          {
            "text": " this design?",
            "highlight": false
          }
        ],
        "english": "What do you think about this design?",
        "japanese": "このデザインについてどう思いますか？"
      },
      {
        "id": "what-do-you-think-about-2",
        "segments": [
          {
            "text": "What do you think about",
            "highlight": true
          },
          {
            "text": " the new restaurant?",
            "highlight": false
          }
        ],
        "english": "What do you think about the new restaurant?",
        "japanese": "新しいレストランについてどう思いますか？"
      },
      {
        "id": "what-do-you-think-about-3",
        "segments": [
          {
            "text": "What do you think about",
            "highlight": true
          },
          {
            "text": " working from home?",
            "highlight": false
          }
        ],
        "english": "What do you think about working from home?",
        "japanese": "在宅勤務についてどう思いますか？"
      },
      {
        "id": "what-do-you-think-about-4",
        "segments": [
          {
            "text": "What do you think about",
            "highlight": true
          },
          {
            "text": " my idea?",
            "highlight": false
          }
        ],
        "english": "What do you think about my idea?",
        "japanese": "私のアイデアについてどう思いますか？"
      },
      {
        "id": "what-do-you-think-about-5",
        "segments": [
          {
            "text": "What do you think about",
            "highlight": true
          },
          {
            "text": " moving to a new apartment?",
            "highlight": false
          }
        ],
        "english": "What do you think about moving to a new apartment?",
        "japanese": "新しいアパートへ引っ越すことについてどう思いますか？"
      }
    ],
    "grammarNotes": [
      "意見や評価を聞く表現です。"
    ],
    "tags": [
      "opinion",
      "daily-phrase"
    ]
  },
  {
    "id": "im-not-sure",
    "rank": 9,
    "pattern": "I’m not sure + 文／疑問詞節",
    "meaning": "～か分かりません",
    "usage": "確信がないことをやわらかく伝える。",
    "category": "opinion",
    "accessTier": "starter",
    "examples": [
      {
        "id": "im-not-sure-1",
        "segments": [
          {
            "text": "I’m not sure",
            "highlight": true
          },
          {
            "text": " if he’s coming today.",
            "highlight": false
          }
        ],
        "english": "I’m not sure if he’s coming today.",
        "japanese": "彼が今日来るかどうか分かりません。"
      },
      {
        "id": "im-not-sure-2",
        "segments": [
          {
            "text": "I’m not sure",
            "highlight": true
          },
          {
            "text": " what to order.",
            "highlight": false
          }
        ],
        "english": "I’m not sure what to order.",
        "japanese": "何を注文すればよいか迷っています。"
      },
      {
        "id": "im-not-sure-3",
        "segments": [
          {
            "text": "I’m not sure",
            "highlight": true
          },
          {
            "text": " where she lives.",
            "highlight": false
          }
        ],
        "english": "I’m not sure where she lives.",
        "japanese": "彼女がどこに住んでいるか分かりません。"
      },
      {
        "id": "im-not-sure-4",
        "segments": [
          {
            "text": "I’m not sure",
            "highlight": true
          },
          {
            "text": " how to use this app.",
            "highlight": false
          }
        ],
        "english": "I’m not sure how to use this app.",
        "japanese": "このアプリの使い方がよく分かりません。"
      },
      {
        "id": "im-not-sure-5",
        "segments": [
          {
            "text": "I’m not sure",
            "highlight": true
          },
          {
            "text": " whether we should wait.",
            "highlight": false
          }
        ],
        "english": "I’m not sure whether we should wait.",
        "japanese": "私たちが待つべきかどうか分かりません。"
      }
    ],
    "grammarNotes": [
      "間接疑問文では where she lives の語順にします。"
    ],
    "tags": [
      "opinion",
      "daily-phrase"
    ]
  },
  {
    "id": "that-sounds",
    "rank": 10,
    "pattern": "That sounds + 形容詞",
    "meaning": "～そうですね",
    "usage": "相手から聞いた内容に反応する。",
    "category": "reaction",
    "accessTier": "starter",
    "examples": [
      {
        "id": "that-sounds-1",
        "segments": [
          {
            "text": "That ",
            "highlight": false
          },
          {
            "text": "sounds",
            "highlight": true
          },
          {
            "text": " good.",
            "highlight": false
          }
        ],
        "english": "That sounds good.",
        "japanese": "いいですね。"
      },
      {
        "id": "that-sounds-2",
        "segments": [
          {
            "text": "Sounds",
            "highlight": true
          },
          {
            "text": " great!",
            "highlight": false
          }
        ],
        "english": "Sounds great!",
        "japanese": "すごくいいですね！"
      },
      {
        "id": "that-sounds-3",
        "segments": [
          {
            "text": "That ",
            "highlight": false
          },
          {
            "text": "sounds",
            "highlight": true
          },
          {
            "text": " interesting.",
            "highlight": false
          }
        ],
        "english": "That sounds interesting.",
        "japanese": "面白そうですね。"
      },
      {
        "id": "that-sounds-4",
        "segments": [
          {
            "text": "It ",
            "highlight": false
          },
          {
            "text": "sounds",
            "highlight": true
          },
          {
            "text": " difficult.",
            "highlight": false
          }
        ],
        "english": "It sounds difficult.",
        "japanese": "難しそうですね。"
      },
      {
        "id": "that-sounds-5",
        "segments": [
          {
            "text": "That ",
            "highlight": false
          },
          {
            "text": "sounds",
            "highlight": true
          },
          {
            "text": " like fun.",
            "highlight": false
          }
        ],
        "english": "That sounds like fun.",
        "japanese": "楽しそうですね。"
      }
    ],
    "grammarNotes": [
      "返答では主語を省略して Sounds good. と言えます。"
    ],
    "tags": [
      "reaction",
      "daily-phrase"
    ]
  },
  {
    "id": "what-do-you-mean",
    "rank": 11,
    "pattern": "What do you mean?",
    "meaning": "どういう意味ですか？",
    "usage": "相手の発言の意味や意図を聞き返す。",
    "category": "question",
    "accessTier": "starter",
    "examples": [
      {
        "id": "what-do-you-mean-1",
        "segments": [
          {
            "text": "What do you mean",
            "highlight": true
          },
          {
            "text": "?",
            "highlight": false
          }
        ],
        "english": "What do you mean?",
        "japanese": "どういう意味ですか？"
      },
      {
        "id": "what-do-you-mean-2",
        "segments": [
          {
            "text": "What do you mean",
            "highlight": true
          },
          {
            "text": " by “too late”?",
            "highlight": false
          }
        ],
        "english": "What do you mean by “too late”?",
        "japanese": "「遅すぎる」ってどういう意味ですか？"
      },
      {
        "id": "what-do-you-mean-3",
        "segments": [
          {
            "text": "What do you mean",
            "highlight": true
          },
          {
            "text": " by that?",
            "highlight": false
          }
        ],
        "english": "What do you mean by that?",
        "japanese": "それはどういう意味ですか？"
      },
      {
        "id": "what-do-you-mean-4",
        "segments": [
          {
            "text": "Sorry, ",
            "highlight": false
          },
          {
            "text": "what do you mean",
            "highlight": true
          },
          {
            "text": "?",
            "highlight": false
          }
        ],
        "english": "Sorry, what do you mean?",
        "japanese": "すみません、どういう意味ですか？"
      },
      {
        "id": "what-do-you-mean-5",
        "segments": [
          {
            "text": "I’m not sure ",
            "highlight": false
          },
          {
            "text": "what you mean",
            "highlight": true
          },
          {
            "text": ".",
            "highlight": false
          }
        ],
        "english": "I’m not sure what you mean.",
        "japanese": "あなたの言っている意味がよく分かりません。"
      }
    ],
    "grammarNotes": [
      "強く聞こえる場合があるため Sorry を加えるとやわらかくなります。"
    ],
    "tags": [
      "question",
      "daily-phrase"
    ]
  },
  {
    "id": "how-was",
    "rank": 12,
    "pattern": "How was + 名詞?",
    "meaning": "～はどうでしたか？",
    "usage": "終わった出来事の感想を尋ねる。",
    "category": "question",
    "accessTier": "starter",
    "examples": [
      {
        "id": "how-was-1",
        "segments": [
          {
            "text": "How was",
            "highlight": true
          },
          {
            "text": " your day?",
            "highlight": false
          }
        ],
        "english": "How was your day?",
        "japanese": "今日はどうでしたか？"
      },
      {
        "id": "how-was-2",
        "segments": [
          {
            "text": "How was",
            "highlight": true
          },
          {
            "text": " work today?",
            "highlight": false
          }
        ],
        "english": "How was work today?",
        "japanese": "今日の仕事はどうでしたか？"
      },
      {
        "id": "how-was-3",
        "segments": [
          {
            "text": "How was",
            "highlight": true
          },
          {
            "text": " your trip?",
            "highlight": false
          }
        ],
        "english": "How was your trip?",
        "japanese": "旅行はどうでしたか？"
      },
      {
        "id": "how-was-4",
        "segments": [
          {
            "text": "How was",
            "highlight": true
          },
          {
            "text": " the movie?",
            "highlight": false
          }
        ],
        "english": "How was the movie?",
        "japanese": "映画はどうでしたか？"
      },
      {
        "id": "how-was-5",
        "segments": [
          {
            "text": "How was",
            "highlight": true
          },
          {
            "text": " dinner last night?",
            "highlight": false
          }
        ],
        "english": "How was dinner last night?",
        "japanese": "昨夜の夕食はどうでしたか？"
      }
    ],
    "grammarNotes": [
      "現在の状態には How is ...? を使います。"
    ],
    "tags": [
      "question",
      "daily-phrase"
    ]
  },
  {
    "id": "how-do-you",
    "rank": 13,
    "pattern": "How do you + 動詞?",
    "meaning": "どうやって～しますか？",
    "usage": "方法・手順・やり方を尋ねる。",
    "category": "question",
    "accessTier": "starter",
    "examples": [
      {
        "id": "how-do-you-1",
        "segments": [
          {
            "text": "How do you",
            "highlight": true
          },
          {
            "text": " use this app?",
            "highlight": false
          }
        ],
        "english": "How do you use this app?",
        "japanese": "このアプリはどうやって使いますか？"
      },
      {
        "id": "how-do-you-2",
        "segments": [
          {
            "text": "How do you",
            "highlight": true
          },
          {
            "text": " make this dish?",
            "highlight": false
          }
        ],
        "english": "How do you make this dish?",
        "japanese": "この料理はどうやって作りますか？"
      },
      {
        "id": "how-do-you-3",
        "segments": [
          {
            "text": "How do you",
            "highlight": true
          },
          {
            "text": " get to the station?",
            "highlight": false
          }
        ],
        "english": "How do you get to the station?",
        "japanese": "駅へはどうやって行きますか？"
      },
      {
        "id": "how-do-you-4",
        "segments": [
          {
            "text": "How do you",
            "highlight": true
          },
          {
            "text": " say this in English?",
            "highlight": false
          }
        ],
        "english": "How do you say this in English?",
        "japanese": "これは英語で何と言いますか？"
      },
      {
        "id": "how-do-you-5",
        "segments": [
          {
            "text": "How do you",
            "highlight": true
          },
          {
            "text": " know him?",
            "highlight": false
          }
        ],
        "english": "How do you know him?",
        "japanese": "彼とはどういう知り合いですか？"
      }
    ],
    "grammarNotes": [
      "How do you know him? は「彼とはどういう知り合いですか？」が自然です。"
    ],
    "tags": [
      "question",
      "daily-phrase"
    ]
  },
  {
    "id": "how-much-is",
    "rank": 14,
    "pattern": "How much is this / that?",
    "meaning": "これは／あれはいくらですか？",
    "usage": "商品やサービスの値段を尋ねる。",
    "category": "question",
    "accessTier": "starter",
    "examples": [
      {
        "id": "how-much-is-1",
        "segments": [
          {
            "text": "How much is",
            "highlight": true
          },
          {
            "text": " this?",
            "highlight": false
          }
        ],
        "english": "How much is this?",
        "japanese": "これはいくらですか？"
      },
      {
        "id": "how-much-is-2",
        "segments": [
          {
            "text": "How much is",
            "highlight": true
          },
          {
            "text": " that?",
            "highlight": false
          }
        ],
        "english": "How much is that?",
        "japanese": "あれはいくらですか？"
      },
      {
        "id": "how-much-is-3",
        "segments": [
          {
            "text": "How much is",
            "highlight": true
          },
          {
            "text": " this bag?",
            "highlight": false
          }
        ],
        "english": "How much is this bag?",
        "japanese": "このバッグはいくらですか？"
      },
      {
        "id": "how-much-is-4",
        "segments": [
          {
            "text": "How much is",
            "highlight": true
          },
          {
            "text": " that one?",
            "highlight": false
          }
        ],
        "english": "How much is that one?",
        "japanese": "あちらのものはいくらですか？"
      },
      {
        "id": "how-much-is-5",
        "segments": [
          {
            "text": "How much is",
            "highlight": true
          },
          {
            "text": " it with tax?",
            "highlight": false
          }
        ],
        "english": "How much is it with tax?",
        "japanese": "税込みでいくらですか？"
      }
    ],
    "grammarNotes": [
      "複数には How much are these? を使います。"
    ],
    "tags": [
      "question",
      "daily-phrase"
    ]
  },
  {
    "id": "i-need-to",
    "rank": 15,
    "pattern": "I need to + 動詞",
    "meaning": "～する必要があります",
    "usage": "必要な行動を伝える。",
    "category": "necessity",
    "accessTier": "starter",
    "examples": [
      {
        "id": "i-need-to-1",
        "segments": [
          {
            "text": "I need to",
            "highlight": true
          },
          {
            "text": " buy some groceries.",
            "highlight": false
          }
        ],
        "english": "I need to buy some groceries.",
        "japanese": "食料品を買う必要があります。"
      },
      {
        "id": "i-need-to-2",
        "segments": [
          {
            "text": "I need to",
            "highlight": true
          },
          {
            "text": " call my parents tonight.",
            "highlight": false
          }
        ],
        "english": "I need to call my parents tonight.",
        "japanese": "今夜、両親に電話しないといけません。"
      },
      {
        "id": "i-need-to-3",
        "segments": [
          {
            "text": "I need to",
            "highlight": true
          },
          {
            "text": " finish this work today.",
            "highlight": false
          }
        ],
        "english": "I need to finish this work today.",
        "japanese": "今日、この仕事を終わらせる必要があります。"
      },
      {
        "id": "i-need-to-4",
        "segments": [
          {
            "text": "I need to",
            "highlight": true
          },
          {
            "text": " get some sleep.",
            "highlight": false
          }
        ],
        "english": "I need to get some sleep.",
        "japanese": "少し寝ないといけません。"
      },
      {
        "id": "i-need-to-5",
        "segments": [
          {
            "text": "I need to",
            "highlight": true
          },
          {
            "text": " check the schedule again.",
            "highlight": false
          }
        ],
        "english": "I need to check the schedule again.",
        "japanese": "もう一度スケジュールを確認する必要があります。"
      }
    ],
    "grammarNotes": [
      "日常会話では「～しないと」と自然に訳す場合があります。"
    ],
    "tags": [
      "necessity",
      "daily-phrase"
    ]
  },
  {
    "id": "i-have-to",
    "rank": 16,
    "pattern": "I have to + 動詞",
    "meaning": "～しなければなりません",
    "usage": "事情・予定・決まりによる必要を伝える。",
    "category": "necessity",
    "accessTier": "starter",
    "examples": [
      {
        "id": "i-have-to-1",
        "segments": [
          {
            "text": "I have to",
            "highlight": true
          },
          {
            "text": " go to work tomorrow.",
            "highlight": false
          }
        ],
        "english": "I have to go to work tomorrow.",
        "japanese": "明日は仕事に行かなければなりません。"
      },
      {
        "id": "i-have-to-2",
        "segments": [
          {
            "text": "I have to",
            "highlight": true
          },
          {
            "text": " pick up my kids after school.",
            "highlight": false
          }
        ],
        "english": "I have to pick up my kids after school.",
        "japanese": "放課後、子どもたちを迎えに行かないといけません。"
      },
      {
        "id": "i-have-to-3",
        "segments": [
          {
            "text": "I have to",
            "highlight": true
          },
          {
            "text": " pay this bill today.",
            "highlight": false
          }
        ],
        "english": "I have to pay this bill today.",
        "japanese": "今日、この請求書を支払わなければなりません。"
      },
      {
        "id": "i-have-to-4",
        "segments": [
          {
            "text": "I have to",
            "highlight": true
          },
          {
            "text": " wake up early tomorrow.",
            "highlight": false
          }
        ],
        "english": "I have to wake up early tomorrow.",
        "japanese": "明日は早く起きないといけません。"
      },
      {
        "id": "i-have-to-5",
        "segments": [
          {
            "text": "I have to",
            "highlight": true
          },
          {
            "text": " talk to my manager.",
            "highlight": false
          }
        ],
        "english": "I have to talk to my manager.",
        "japanese": "上司と話さなければなりません。"
      }
    ],
    "grammarNotes": [
      "need to と意味が重なる場面もあります。"
    ],
    "tags": [
      "necessity",
      "daily-phrase"
    ]
  },
  {
    "id": "can-i",
    "rank": 17,
    "pattern": "Can I + 動詞?",
    "meaning": "～してもいいですか？／～しましょうか？",
    "usage": "許可を求めたり、自分から申し出たりする。",
    "category": "permission",
    "accessTier": "starter",
    "examples": [
      {
        "id": "can-i-1",
        "segments": [
          {
            "text": "Can I",
            "highlight": true
          },
          {
            "text": " sit here?",
            "highlight": false
          }
        ],
        "english": "Can I sit here?",
        "japanese": "ここに座ってもいいですか？"
      },
      {
        "id": "can-i-2",
        "segments": [
          {
            "text": "Can I",
            "highlight": true
          },
          {
            "text": " use your phone?",
            "highlight": false
          }
        ],
        "english": "Can I use your phone?",
        "japanese": "あなたの電話を使ってもいいですか？"
      },
      {
        "id": "can-i-3",
        "segments": [
          {
            "text": "Can I",
            "highlight": true
          },
          {
            "text": " ask you something?",
            "highlight": false
          }
        ],
        "english": "Can I ask you something?",
        "japanese": "少し聞いてもいいですか？"
      },
      {
        "id": "can-i-4",
        "segments": [
          {
            "text": "Can I",
            "highlight": true
          },
          {
            "text": " have some water?",
            "highlight": false
          }
        ],
        "english": "Can I have some water?",
        "japanese": "お水をいただけますか？"
      },
      {
        "id": "can-i-5",
        "segments": [
          {
            "text": "Can I",
            "highlight": true
          },
          {
            "text": " help you?",
            "highlight": false
          }
        ],
        "english": "Can I help you?",
        "japanese": "お手伝いしましょうか？"
      }
    ],
    "grammarNotes": [
      "許可と申し出の両方に使います。"
    ],
    "tags": [
      "permission",
      "daily-phrase"
    ]
  },
  {
    "id": "could-you",
    "rank": 18,
    "pattern": "Could you + 動詞?",
    "meaning": "～していただけますか？",
    "usage": "相手へ丁寧に依頼する。",
    "category": "request",
    "accessTier": "starter",
    "examples": [
      {
        "id": "could-you-1",
        "segments": [
          {
            "text": "Could you",
            "highlight": true
          },
          {
            "text": " help me with this?",
            "highlight": false
          }
        ],
        "english": "Could you help me with this?",
        "japanese": "これを手伝っていただけますか？"
      },
      {
        "id": "could-you-2",
        "segments": [
          {
            "text": "Could you",
            "highlight": true
          },
          {
            "text": " speak more slowly?",
            "highlight": false
          }
        ],
        "english": "Could you speak more slowly?",
        "japanese": "もう少しゆっくり話していただけますか？"
      },
      {
        "id": "could-you-3",
        "segments": [
          {
            "text": "Could you",
            "highlight": true
          },
          {
            "text": " send me the address?",
            "highlight": false
          }
        ],
        "english": "Could you send me the address?",
        "japanese": "住所を送っていただけますか？"
      },
      {
        "id": "could-you-4",
        "segments": [
          {
            "text": "Could you",
            "highlight": true
          },
          {
            "text": " open the door?",
            "highlight": false
          }
        ],
        "english": "Could you open the door?",
        "japanese": "ドアを開けていただけますか？"
      },
      {
        "id": "could-you-5",
        "segments": [
          {
            "text": "Could you",
            "highlight": true
          },
          {
            "text": " say that again?",
            "highlight": false
          }
        ],
        "english": "Could you say that again?",
        "japanese": "もう一度言っていただけますか？"
      }
    ],
    "grammarNotes": [
      "ここでの could は過去ではなく丁寧さを表します。"
    ],
    "tags": [
      "request",
      "daily-phrase"
    ]
  },
  {
    "id": "id-like-to",
    "rank": 19,
    "pattern": "I’d like to + 動詞",
    "meaning": "～したいです",
    "usage": "希望を丁寧に伝える。",
    "category": "preference",
    "accessTier": "starter",
    "examples": [
      {
        "id": "id-like-to-1",
        "segments": [
          {
            "text": "I’d like to",
            "highlight": true
          },
          {
            "text": " order this, please.",
            "highlight": false
          }
        ],
        "english": "I’d like to order this, please.",
        "japanese": "こちらを注文したいです。"
      },
      {
        "id": "id-like-to-2",
        "segments": [
          {
            "text": "I’d like to",
            "highlight": true
          },
          {
            "text": " make a reservation.",
            "highlight": false
          }
        ],
        "english": "I’d like to make a reservation.",
        "japanese": "予約をしたいのですが。"
      },
      {
        "id": "id-like-to-3",
        "segments": [
          {
            "text": "I’d like to",
            "highlight": true
          },
          {
            "text": " ask you a question.",
            "highlight": false
          }
        ],
        "english": "I’d like to ask you a question.",
        "japanese": "質問してもよろしいでしょうか。"
      },
      {
        "id": "id-like-to-4",
        "segments": [
          {
            "text": "I’d like to",
            "highlight": true
          },
          {
            "text": " visit Japan someday.",
            "highlight": false
          }
        ],
        "english": "I’d like to visit Japan someday.",
        "japanese": "いつか日本を訪れたいです。"
      },
      {
        "id": "id-like-to-5",
        "segments": [
          {
            "text": "I’d like to",
            "highlight": true
          },
          {
            "text": " speak with the manager.",
            "highlight": false
          }
        ],
        "english": "I’d like to speak with the manager.",
        "japanese": "責任者の方とお話ししたいのですが。"
      }
    ],
    "grammarNotes": [
      "I want to ... より丁寧です。"
    ],
    "tags": [
      "preference",
      "daily-phrase"
    ]
  },
  {
    "id": "what-are-you-doing",
    "rank": 20,
    "pattern": "What are you doing?",
    "meaning": "何をしていますか？／何をする予定ですか？",
    "usage": "今していることや近い予定を尋ねる。",
    "category": "question",
    "accessTier": "starter",
    "examples": [
      {
        "id": "what-are-you-doing-1",
        "segments": [
          {
            "text": "What are you doing",
            "highlight": true
          },
          {
            "text": "?",
            "highlight": false
          }
        ],
        "english": "What are you doing?",
        "japanese": "何をしているの？"
      },
      {
        "id": "what-are-you-doing-2",
        "segments": [
          {
            "text": "What are you doing",
            "highlight": true
          },
          {
            "text": " now?",
            "highlight": false
          }
        ],
        "english": "What are you doing now?",
        "japanese": "今、何をしていますか？"
      },
      {
        "id": "what-are-you-doing-3",
        "segments": [
          {
            "text": "What are you doing",
            "highlight": true
          },
          {
            "text": " tonight?",
            "highlight": false
          }
        ],
        "english": "What are you doing tonight?",
        "japanese": "今夜は何をする予定ですか？"
      },
      {
        "id": "what-are-you-doing-4",
        "segments": [
          {
            "text": "What are you doing",
            "highlight": true
          },
          {
            "text": " this weekend?",
            "highlight": false
          }
        ],
        "english": "What are you doing this weekend?",
        "japanese": "今週末は何をする予定ですか？"
      },
      {
        "id": "what-are-you-doing-5",
        "segments": [
          {
            "text": "What are you doing",
            "highlight": true
          },
          {
            "text": " here?",
            "highlight": false
          }
        ],
        "english": "What are you doing here?",
        "japanese": "ここで何をしているのですか？"
      }
    ],
    "grammarNotes": [
      "What do you do? は職業や普段の行動を尋ねます。"
    ],
    "tags": [
      "question",
      "daily-phrase"
    ]
  },
  {
    "id": "where-do-you",
    "rank": 21,
    "pattern": "Where do you + 動詞?",
    "meaning": "どこで／どこへ～しますか？",
    "usage": "場所や行き先を尋ねる。",
    "category": "question",
    "accessTier": "starter",
    "examples": [
      {
        "id": "where-do-you-1",
        "segments": [
          {
            "text": "Where do you",
            "highlight": true
          },
          {
            "text": " live?",
            "highlight": false
          }
        ],
        "english": "Where do you live?",
        "japanese": "どこに住んでいますか？"
      },
      {
        "id": "where-do-you-2",
        "segments": [
          {
            "text": "Where do you",
            "highlight": true
          },
          {
            "text": " work?",
            "highlight": false
          }
        ],
        "english": "Where do you work?",
        "japanese": "どこで働いていますか？"
      },
      {
        "id": "where-do-you-3",
        "segments": [
          {
            "text": "Where do you",
            "highlight": true
          },
          {
            "text": " usually eat lunch?",
            "highlight": false
          }
        ],
        "english": "Where do you usually eat lunch?",
        "japanese": "普段どこで昼食を食べますか？"
      },
      {
        "id": "where-do-you-4",
        "segments": [
          {
            "text": "Where do you",
            "highlight": true
          },
          {
            "text": " buy groceries?",
            "highlight": false
          }
        ],
        "english": "Where do you buy groceries?",
        "japanese": "食料品はどこで買いますか？"
      },
      {
        "id": "where-do-you-5",
        "segments": [
          {
            "text": "Where do you",
            "highlight": true
          },
          {
            "text": " want to go?",
            "highlight": false
          }
        ],
        "english": "Where do you want to go?",
        "japanese": "どこへ行きたいですか？"
      }
    ],
    "grammarNotes": [
      "今いる場所は Where are you? と尋ねます。"
    ],
    "tags": [
      "question",
      "daily-phrase"
    ]
  },
  {
    "id": "when-do-you",
    "rank": 22,
    "pattern": "When do you + 動詞?",
    "meaning": "いつ～しますか？",
    "usage": "習慣や予定の時期を尋ねる。",
    "category": "question",
    "accessTier": "starter",
    "examples": [
      {
        "id": "when-do-you-1",
        "segments": [
          {
            "text": "When do you",
            "highlight": true
          },
          {
            "text": " usually wake up?",
            "highlight": false
          }
        ],
        "english": "When do you usually wake up?",
        "japanese": "普段は何時ごろ起きますか？"
      },
      {
        "id": "when-do-you-2",
        "segments": [
          {
            "text": "When do you",
            "highlight": true
          },
          {
            "text": " start work?",
            "highlight": false
          }
        ],
        "english": "When do you start work?",
        "japanese": "仕事はいつ始めますか？"
      },
      {
        "id": "when-do-you-3",
        "segments": [
          {
            "text": "When do you",
            "highlight": true
          },
          {
            "text": " have time?",
            "highlight": false
          }
        ],
        "english": "When do you have time?",
        "japanese": "いつ時間がありますか？"
      },
      {
        "id": "when-do-you-4",
        "segments": [
          {
            "text": "When do you",
            "highlight": true
          },
          {
            "text": " want to leave?",
            "highlight": false
          }
        ],
        "english": "When do you want to leave?",
        "japanese": "いつ出発したいですか？"
      },
      {
        "id": "when-do-you-5",
        "segments": [
          {
            "text": "When do you",
            "highlight": true
          },
          {
            "text": " usually go shopping?",
            "highlight": false
          }
        ],
        "english": "When do you usually go shopping?",
        "japanese": "普段はいつ買い物に行きますか？"
      }
    ],
    "grammarNotes": [
      "決まった予定には When are you leaving? も自然です。"
    ],
    "tags": [
      "question",
      "daily-phrase"
    ]
  },
  {
    "id": "why-do-you",
    "rank": 23,
    "pattern": "Why do you + 動詞?",
    "meaning": "なぜ～するのですか？",
    "usage": "理由を尋ねる。",
    "category": "question",
    "accessTier": "starter",
    "examples": [
      {
        "id": "why-do-you-1",
        "segments": [
          {
            "text": "Why do you",
            "highlight": true
          },
          {
            "text": " like this song?",
            "highlight": false
          }
        ],
        "english": "Why do you like this song?",
        "japanese": "なぜこの曲が好きなのですか？"
      },
      {
        "id": "why-do-you-2",
        "segments": [
          {
            "text": "Why do you",
            "highlight": true
          },
          {
            "text": " work so late?",
            "highlight": false
          }
        ],
        "english": "Why do you work so late?",
        "japanese": "なぜそんなに遅くまで働くのですか？"
      },
      {
        "id": "why-do-you-3",
        "segments": [
          {
            "text": "Why do you",
            "highlight": true
          },
          {
            "text": " want to learn English?",
            "highlight": false
          }
        ],
        "english": "Why do you want to learn English?",
        "japanese": "なぜ英語を学びたいのですか？"
      },
      {
        "id": "why-do-you-4",
        "segments": [
          {
            "text": "Why do you",
            "highlight": true
          },
          {
            "text": " always sit here?",
            "highlight": false
          }
        ],
        "english": "Why do you always sit here?",
        "japanese": "なぜいつもここに座るのですか？"
      },
      {
        "id": "why-do-you-5",
        "segments": [
          {
            "text": "Why do you",
            "highlight": true
          },
          {
            "text": " need this information?",
            "highlight": false
          }
        ],
        "english": "Why do you need this information?",
        "japanese": "なぜこの情報が必要なのですか？"
      }
    ],
    "grammarNotes": [
      "言い方によっては責めているように聞こえます。"
    ],
    "tags": [
      "question",
      "daily-phrase"
    ]
  },
  {
    "id": "how-often-do-you",
    "rank": 24,
    "pattern": "How often do you + 動詞?",
    "meaning": "どのくらいの頻度で～しますか？",
    "usage": "回数や頻度を尋ねる。",
    "category": "question",
    "accessTier": "starter",
    "examples": [
      {
        "id": "how-often-do-you-1",
        "segments": [
          {
            "text": "How often do you",
            "highlight": true
          },
          {
            "text": " exercise?",
            "highlight": false
          }
        ],
        "english": "How often do you exercise?",
        "japanese": "どのくらいの頻度で運動しますか？"
      },
      {
        "id": "how-often-do-you-2",
        "segments": [
          {
            "text": "How often do you",
            "highlight": true
          },
          {
            "text": " cook at home?",
            "highlight": false
          }
        ],
        "english": "How often do you cook at home?",
        "japanese": "どのくらいの頻度で家で料理しますか？"
      },
      {
        "id": "how-often-do-you-3",
        "segments": [
          {
            "text": "How often do you",
            "highlight": true
          },
          {
            "text": " visit your parents?",
            "highlight": false
          }
        ],
        "english": "How often do you visit your parents?",
        "japanese": "どのくらいの頻度で両親に会いますか？"
      },
      {
        "id": "how-often-do-you-4",
        "segments": [
          {
            "text": "How often do you",
            "highlight": true
          },
          {
            "text": " use this app?",
            "highlight": false
          }
        ],
        "english": "How often do you use this app?",
        "japanese": "このアプリをどのくらいの頻度で使いますか？"
      },
      {
        "id": "how-often-do-you-5",
        "segments": [
          {
            "text": "How often do you",
            "highlight": true
          },
          {
            "text": " go out for dinner?",
            "highlight": false
          }
        ],
        "english": "How often do you go out for dinner?",
        "japanese": "どのくらいの頻度で外食しますか？"
      }
    ],
    "grammarNotes": [
      "Every day. / Once a week. などで答えます。"
    ],
    "tags": [
      "question",
      "daily-phrase"
    ]
  },
  {
    "id": "how-long-does-it-take",
    "rank": 25,
    "pattern": "How long does it take to + 動詞?",
    "meaning": "～するのにどのくらい時間がかかりますか？",
    "usage": "必要な時間を尋ねる。",
    "category": "time",
    "accessTier": "starter",
    "examples": [
      {
        "id": "how-long-does-it-take-1",
        "segments": [
          {
            "text": "How long does it take to",
            "highlight": true
          },
          {
            "text": " get there?",
            "highlight": false
          }
        ],
        "english": "How long does it take to get there?",
        "japanese": "そこへ行くのにどのくらいかかりますか？"
      },
      {
        "id": "how-long-does-it-take-2",
        "segments": [
          {
            "text": "How long does it take to",
            "highlight": true
          },
          {
            "text": " cook this?",
            "highlight": false
          }
        ],
        "english": "How long does it take to cook this?",
        "japanese": "これを作るのにどのくらいかかりますか？"
      },
      {
        "id": "how-long-does-it-take-3",
        "segments": [
          {
            "text": "How long does it take to",
            "highlight": true
          },
          {
            "text": " learn basic English?",
            "highlight": false
          }
        ],
        "english": "How long does it take to learn basic English?",
        "japanese": "基本的な英語を身につけるのにどのくらいかかりますか？"
      },
      {
        "id": "how-long-does-it-take-4",
        "segments": [
          {
            "text": "How long does it take to",
            "highlight": true
          },
          {
            "text": " walk to the station?",
            "highlight": false
          }
        ],
        "english": "How long does it take to walk to the station?",
        "japanese": "駅まで歩くのにどのくらいかかりますか？"
      },
      {
        "id": "how-long-does-it-take-5",
        "segments": [
          {
            "text": "How long does it take to",
            "highlight": true
          },
          {
            "text": " charge the battery?",
            "highlight": false
          }
        ],
        "english": "How long does it take to charge the battery?",
        "japanese": "バッテリーを充電するのにどのくらいかかりますか？"
      }
    ],
    "grammarNotes": [
      "It takes ... で答えます。"
    ],
    "tags": [
      "time",
      "daily-phrase"
    ]
  },
  {
    "id": "let-me",
    "rank": 26,
    "pattern": "Let me + 動詞",
    "meaning": "私が～します／～させてください",
    "usage": "自分から手伝いや確認を申し出る。",
    "category": "permission",
    "accessTier": "starter",
    "examples": [
      {
        "id": "let-me-1",
        "segments": [
          {
            "text": "Let me",
            "highlight": true
          },
          {
            "text": " check.",
            "highlight": false
          }
        ],
        "english": "Let me check.",
        "japanese": "確認しますね。"
      },
      {
        "id": "let-me-2",
        "segments": [
          {
            "text": "Let me",
            "highlight": true
          },
          {
            "text": " help you.",
            "highlight": false
          }
        ],
        "english": "Let me help you.",
        "japanese": "お手伝いします。"
      },
      {
        "id": "let-me-3",
        "segments": [
          {
            "text": "Let me",
            "highlight": true
          },
          {
            "text": " think about it.",
            "highlight": false
          }
        ],
        "english": "Let me think about it.",
        "japanese": "ちょっと考えさせてください。"
      },
      {
        "id": "let-me-4",
        "segments": [
          {
            "text": "Let me",
            "highlight": true
          },
          {
            "text": " call you back later.",
            "highlight": false
          }
        ],
        "english": "Let me call you back later.",
        "japanese": "あとでかけ直します。"
      },
      {
        "id": "let-me-5",
        "segments": [
          {
            "text": "Let me",
            "highlight": true
          },
          {
            "text": " show you how it works.",
            "highlight": false
          }
        ],
        "english": "Let me show you how it works.",
        "japanese": "使い方をお見せします。"
      }
    ],
    "grammarNotes": [
      "場面に合わせて自然に訳します。"
    ],
    "tags": [
      "permission",
      "daily-phrase"
    ]
  },
  {
    "id": "would-you-like",
    "rank": 27,
    "pattern": "Would you like + 名詞／to動詞?",
    "meaning": "～はいかがですか？／～しませんか？",
    "usage": "丁寧に勧めたり誘ったりする。",
    "category": "suggestion",
    "accessTier": "starter",
    "examples": [
      {
        "id": "would-you-like-1",
        "segments": [
          {
            "text": "Would you like",
            "highlight": true
          },
          {
            "text": " some coffee?",
            "highlight": false
          }
        ],
        "english": "Would you like some coffee?",
        "japanese": "コーヒーはいかがですか？"
      },
      {
        "id": "would-you-like-2",
        "segments": [
          {
            "text": "Would you like",
            "highlight": true
          },
          {
            "text": " something to eat?",
            "highlight": false
          }
        ],
        "english": "Would you like something to eat?",
        "japanese": "何か食べますか？"
      },
      {
        "id": "would-you-like-3",
        "segments": [
          {
            "text": "Would you like to",
            "highlight": true
          },
          {
            "text": " join us?",
            "highlight": false
          }
        ],
        "english": "Would you like to join us?",
        "japanese": "私たちと一緒に来ませんか？"
      },
      {
        "id": "would-you-like-4",
        "segments": [
          {
            "text": "Would you like to",
            "highlight": true
          },
          {
            "text": " sit outside?",
            "highlight": false
          }
        ],
        "english": "Would you like to sit outside?",
        "japanese": "外の席に座りませんか？"
      },
      {
        "id": "would-you-like-5",
        "segments": [
          {
            "text": "Would you like",
            "highlight": true
          },
          {
            "text": " another drink?",
            "highlight": false
          }
        ],
        "english": "Would you like another drink?",
        "japanese": "もう一杯いかがですか？"
      }
    ],
    "grammarNotes": [
      "名詞の前は Would you like、動詞の前は Would you like to です。"
    ],
    "tags": [
      "suggestion",
      "daily-phrase"
    ]
  },
  {
    "id": "im-trying-to",
    "rank": 28,
    "pattern": "I’m trying to + 動詞",
    "meaning": "～しようとしています",
    "usage": "努力中・挑戦中のことを伝える。",
    "category": "plan",
    "accessTier": "starter",
    "examples": [
      {
        "id": "im-trying-to-1",
        "segments": [
          {
            "text": "I’m trying to",
            "highlight": true
          },
          {
            "text": " eat healthier.",
            "highlight": false
          }
        ],
        "english": "I’m trying to eat healthier.",
        "japanese": "もっと健康的な食生活を心がけています。"
      },
      {
        "id": "im-trying-to-2",
        "segments": [
          {
            "text": "I’m trying to",
            "highlight": true
          },
          {
            "text": " study English every day.",
            "highlight": false
          }
        ],
        "english": "I’m trying to study English every day.",
        "japanese": "毎日英語を勉強するようにしています。"
      },
      {
        "id": "im-trying-to-3",
        "segments": [
          {
            "text": "I’m trying to",
            "highlight": true
          },
          {
            "text": " save money.",
            "highlight": false
          }
        ],
        "english": "I’m trying to save money.",
        "japanese": "お金を貯めようとしています。"
      },
      {
        "id": "im-trying-to-4",
        "segments": [
          {
            "text": "I’m trying to",
            "highlight": true
          },
          {
            "text": " fix this computer.",
            "highlight": false
          }
        ],
        "english": "I’m trying to fix this computer.",
        "japanese": "このパソコンを直そうとしています。"
      },
      {
        "id": "im-trying-to-5",
        "segments": [
          {
            "text": "I’m trying to",
            "highlight": true
          },
          {
            "text": " remember his name.",
            "highlight": false
          }
        ],
        "english": "I’m trying to remember his name.",
        "japanese": "彼の名前を思い出そうとしています。"
      }
    ],
    "grammarNotes": [
      "try to do は努力、try doing は試す意味です。"
    ],
    "tags": [
      "plan",
      "daily-phrase"
    ]
  },
  {
    "id": "im-looking-for",
    "rank": 29,
    "pattern": "I’m looking for + 名詞",
    "meaning": "～を探しています",
    "usage": "人・物・場所などを探していると伝える。",
    "category": "question",
    "accessTier": "starter",
    "examples": [
      {
        "id": "im-looking-for-1",
        "segments": [
          {
            "text": "I’m looking for",
            "highlight": true
          },
          {
            "text": " my keys.",
            "highlight": false
          }
        ],
        "english": "I’m looking for my keys.",
        "japanese": "鍵を探しています。"
      },
      {
        "id": "im-looking-for-2",
        "segments": [
          {
            "text": "I’m looking for",
            "highlight": true
          },
          {
            "text": " a good restaurant.",
            "highlight": false
          }
        ],
        "english": "I’m looking for a good restaurant.",
        "japanese": "良いレストランを探しています。"
      },
      {
        "id": "im-looking-for-3",
        "segments": [
          {
            "text": "I’m looking for",
            "highlight": true
          },
          {
            "text": " the train station.",
            "highlight": false
          }
        ],
        "english": "I’m looking for the train station.",
        "japanese": "駅を探しています。"
      },
      {
        "id": "im-looking-for-4",
        "segments": [
          {
            "text": "I’m looking for",
            "highlight": true
          },
          {
            "text": " a new job.",
            "highlight": false
          }
        ],
        "english": "I’m looking for a new job.",
        "japanese": "新しい仕事を探しています。"
      },
      {
        "id": "im-looking-for-5",
        "segments": [
          {
            "text": "I’m looking for",
            "highlight": true
          },
          {
            "text": " someone named Tanaka.",
            "highlight": false
          }
        ],
        "english": "I’m looking for someone named Tanaka.",
        "japanese": "田中さんという方を探しています。"
      }
    ],
    "grammarNotes": [
      "look for は探す、look at は見るです。"
    ],
    "tags": [
      "question",
      "daily-phrase"
    ]
  },
  {
    "id": "i-feel-like",
    "rank": 30,
    "pattern": "I feel like + 動名詞",
    "meaning": "～したい気分です",
    "usage": "そのときの気分を伝える。",
    "category": "emotion",
    "accessTier": "starter",
    "examples": [
      {
        "id": "i-feel-like-1",
        "segments": [
          {
            "text": "I feel like",
            "highlight": true
          },
          {
            "text": " eating pizza tonight.",
            "highlight": false
          }
        ],
        "english": "I feel like eating pizza tonight.",
        "japanese": "今夜はピザを食べたい気分です。"
      },
      {
        "id": "i-feel-like-2",
        "segments": [
          {
            "text": "I feel like",
            "highlight": true
          },
          {
            "text": " going for a walk.",
            "highlight": false
          }
        ],
        "english": "I feel like going for a walk.",
        "japanese": "散歩に行きたい気分です。"
      },
      {
        "id": "i-feel-like-3",
        "segments": [
          {
            "text": "I feel like",
            "highlight": true
          },
          {
            "text": " watching a movie.",
            "highlight": false
          }
        ],
        "english": "I feel like watching a movie.",
        "japanese": "映画を見たい気分です。"
      },
      {
        "id": "i-feel-like-4",
        "segments": [
          {
            "text": "I feel like",
            "highlight": true
          },
          {
            "text": " staying home today.",
            "highlight": false
          }
        ],
        "english": "I feel like staying home today.",
        "japanese": "今日は家で過ごしたい気分です。"
      },
      {
        "id": "i-feel-like-5",
        "segments": [
          {
            "text": "I feel like",
            "highlight": true
          },
          {
            "text": " having something sweet.",
            "highlight": false
          }
        ],
        "english": "I feel like having something sweet.",
        "japanese": "何か甘いものが食べたい気分です。"
      }
    ],
    "grammarNotes": [
      "動詞を続ける場合は -ing 形にします。"
    ],
    "tags": [
      "emotion",
      "daily-phrase"
    ]
  },
  {
    "id": "good-at",
    "rank": 31,
    "pattern": "be good at + 名詞／動名詞",
    "meaning": "～が得意です",
    "usage": "能力や得意分野を伝える。",
    "category": "preference",
    "accessTier": "standard",
    "examples": [
      {
        "id": "good-at-1",
        "segments": [
          {
            "text": "I’m ",
            "highlight": false
          },
          {
            "text": "good at",
            "highlight": true
          },
          {
            "text": " cooking.",
            "highlight": false
          }
        ],
        "english": "I’m good at cooking.",
        "japanese": "私は料理が得意です。"
      },
      {
        "id": "good-at-2",
        "segments": [
          {
            "text": "She’s ",
            "highlight": false
          },
          {
            "text": "good at",
            "highlight": true
          },
          {
            "text": " explaining things.",
            "highlight": false
          }
        ],
        "english": "She’s good at explaining things.",
        "japanese": "彼女は物事を説明するのが得意です。"
      },
      {
        "id": "good-at-3",
        "segments": [
          {
            "text": "My son is ",
            "highlight": false
          },
          {
            "text": "good at",
            "highlight": true
          },
          {
            "text": " math.",
            "highlight": false
          }
        ],
        "english": "My son is good at math.",
        "japanese": "私の息子は数学が得意です。"
      },
      {
        "id": "good-at-4",
        "segments": [
          {
            "text": "Are you ",
            "highlight": false
          },
          {
            "text": "good at",
            "highlight": true
          },
          {
            "text": " remembering names?",
            "highlight": false
          }
        ],
        "english": "Are you good at remembering names?",
        "japanese": "人の名前を覚えるのは得意ですか？"
      },
      {
        "id": "good-at-5",
        "segments": [
          {
            "text": "I’m not very ",
            "highlight": false
          },
          {
            "text": "good at",
            "highlight": true
          },
          {
            "text": " speaking in public.",
            "highlight": false
          }
        ],
        "english": "I’m not very good at speaking in public.",
        "japanese": "私は人前で話すのがあまり得意ではありません。"
      }
    ],
    "grammarNotes": [
      "動詞を続ける場合は -ing 形にします。"
    ],
    "tags": [
      "preference",
      "daily-phrase"
    ]
  },
  {
    "id": "interested-in",
    "rank": 32,
    "pattern": "be interested in + 名詞／動名詞",
    "meaning": "～に興味があります",
    "usage": "興味のある分野や活動を伝える。",
    "category": "emotion",
    "accessTier": "standard",
    "examples": [
      {
        "id": "interested-in-1",
        "segments": [
          {
            "text": "I’m ",
            "highlight": false
          },
          {
            "text": "interested in",
            "highlight": true
          },
          {
            "text": " photography.",
            "highlight": false
          }
        ],
        "english": "I’m interested in photography.",
        "japanese": "私は写真に興味があります。"
      },
      {
        "id": "interested-in-2",
        "segments": [
          {
            "text": "She’s ",
            "highlight": false
          },
          {
            "text": "interested in",
            "highlight": true
          },
          {
            "text": " learning Japanese.",
            "highlight": false
          }
        ],
        "english": "She’s interested in learning Japanese.",
        "japanese": "彼女は日本語を学ぶことに興味があります。"
      },
      {
        "id": "interested-in-3",
        "segments": [
          {
            "text": "Are you ",
            "highlight": false
          },
          {
            "text": "interested in",
            "highlight": true
          },
          {
            "text": " this job?",
            "highlight": false
          }
        ],
        "english": "Are you interested in this job?",
        "japanese": "この仕事に興味がありますか？"
      },
      {
        "id": "interested-in-4",
        "segments": [
          {
            "text": "My kids are ",
            "highlight": false
          },
          {
            "text": "interested in",
            "highlight": true
          },
          {
            "text": " animals.",
            "highlight": false
          }
        ],
        "english": "My kids are interested in animals.",
        "japanese": "私の子どもたちは動物に興味があります。"
      },
      {
        "id": "interested-in-5",
        "segments": [
          {
            "text": "I’m not really ",
            "highlight": false
          },
          {
            "text": "interested in",
            "highlight": true
          },
          {
            "text": " sports.",
            "highlight": false
          }
        ],
        "english": "I’m not really interested in sports.",
        "japanese": "私はスポーツにはあまり興味がありません。"
      }
    ],
    "grammarNotes": [
      "人の気持ちは interested、物の性質は interesting です。"
    ],
    "tags": [
      "emotion",
      "daily-phrase"
    ]
  },
  {
    "id": "i-like",
    "rank": 33,
    "pattern": "I like + 名詞／動名詞",
    "meaning": "～が好きです",
    "usage": "好みや趣味を伝える。",
    "category": "preference",
    "accessTier": "standard",
    "examples": [
      {
        "id": "i-like-1",
        "segments": [
          {
            "text": "I like",
            "highlight": true
          },
          {
            "text": " coffee.",
            "highlight": false
          }
        ],
        "english": "I like coffee.",
        "japanese": "私はコーヒーが好きです。"
      },
      {
        "id": "i-like-2",
        "segments": [
          {
            "text": "I like",
            "highlight": true
          },
          {
            "text": " listening to music after work.",
            "highlight": false
          }
        ],
        "english": "I like listening to music after work.",
        "japanese": "仕事のあとに音楽を聴くのが好きです。"
      },
      {
        "id": "i-like-3",
        "segments": [
          {
            "text": "I like",
            "highlight": true
          },
          {
            "text": " this color.",
            "highlight": false
          }
        ],
        "english": "I like this color.",
        "japanese": "私はこの色が好きです。"
      },
      {
        "id": "i-like-4",
        "segments": [
          {
            "text": "I like",
            "highlight": true
          },
          {
            "text": " spending time with my family.",
            "highlight": false
          }
        ],
        "english": "I like spending time with my family.",
        "japanese": "家族と過ごすのが好きです。"
      },
      {
        "id": "i-like-5",
        "segments": [
          {
            "text": "I like",
            "highlight": true
          },
          {
            "text": " your new hairstyle.",
            "highlight": false
          }
        ],
        "english": "I like your new hairstyle.",
        "japanese": "新しい髪型、いいですね。"
      }
    ],
    "grammarNotes": [
      "趣味や普段の好みには like + -ing が使いやすいです。"
    ],
    "tags": [
      "preference",
      "daily-phrase"
    ]
  },
  {
    "id": "i-prefer",
    "rank": 34,
    "pattern": "I prefer A to B",
    "meaning": "BよりAの方が好きです",
    "usage": "2つを比べて好みを伝える。",
    "category": "preference",
    "accessTier": "standard",
    "examples": [
      {
        "id": "i-prefer-1",
        "segments": [
          {
            "text": "I prefer",
            "highlight": true
          },
          {
            "text": " coffee ",
            "highlight": false
          },
          {
            "text": "to",
            "highlight": true
          },
          {
            "text": " tea.",
            "highlight": false
          }
        ],
        "english": "I prefer coffee to tea.",
        "japanese": "私は紅茶よりコーヒーの方が好きです。"
      },
      {
        "id": "i-prefer-2",
        "segments": [
          {
            "text": "I prefer",
            "highlight": true
          },
          {
            "text": " summer ",
            "highlight": false
          },
          {
            "text": "to",
            "highlight": true
          },
          {
            "text": " winter.",
            "highlight": false
          }
        ],
        "english": "I prefer summer to winter.",
        "japanese": "私は冬より夏の方が好きです。"
      },
      {
        "id": "i-prefer-3",
        "segments": [
          {
            "text": "I prefer",
            "highlight": true
          },
          {
            "text": " eating at home ",
            "highlight": false
          },
          {
            "text": "to",
            "highlight": true
          },
          {
            "text": " eating out.",
            "highlight": false
          }
        ],
        "english": "I prefer eating at home to eating out.",
        "japanese": "外食するより家で食べる方が好きです。"
      },
      {
        "id": "i-prefer-4",
        "segments": [
          {
            "text": "I prefer",
            "highlight": true
          },
          {
            "text": " this one ",
            "highlight": false
          },
          {
            "text": "to",
            "highlight": true
          },
          {
            "text": " the blue one.",
            "highlight": false
          }
        ],
        "english": "I prefer this one to the blue one.",
        "japanese": "青い方よりこちらの方が好きです。"
      },
      {
        "id": "i-prefer-5",
        "segments": [
          {
            "text": "I prefer",
            "highlight": true
          },
          {
            "text": " walking ",
            "highlight": false
          },
          {
            "text": "to",
            "highlight": true
          },
          {
            "text": " taking the bus.",
            "highlight": false
          }
        ],
        "english": "I prefer walking to taking the bus.",
        "japanese": "バスに乗るより歩く方が好きです。"
      }
    ],
    "grammarNotes": [
      "prefer A to B を使い、than は使いません。"
    ],
    "tags": [
      "preference",
      "daily-phrase"
    ]
  },
  {
    "id": "it-depends-on",
    "rank": 35,
    "pattern": "It depends on + 名詞／疑問詞節",
    "meaning": "～によります",
    "usage": "条件によって答えが変わることを伝える。",
    "category": "opinion",
    "accessTier": "standard",
    "examples": [
      {
        "id": "it-depends-on-1",
        "segments": [
          {
            "text": "It depends on",
            "highlight": true
          },
          {
            "text": " the weather.",
            "highlight": false
          }
        ],
        "english": "It depends on the weather.",
        "japanese": "天気によります。"
      },
      {
        "id": "it-depends-on-2",
        "segments": [
          {
            "text": "It depends on",
            "highlight": true
          },
          {
            "text": " the price.",
            "highlight": false
          }
        ],
        "english": "It depends on the price.",
        "japanese": "値段によります。"
      },
      {
        "id": "it-depends-on-3",
        "segments": [
          {
            "text": "It depends on",
            "highlight": true
          },
          {
            "text": " how much time we have.",
            "highlight": false
          }
        ],
        "english": "It depends on how much time we have.",
        "japanese": "どのくらい時間があるかによります。"
      },
      {
        "id": "it-depends-on-4",
        "segments": [
          {
            "text": "It depends on",
            "highlight": true
          },
          {
            "text": " what you want to do.",
            "highlight": false
          }
        ],
        "english": "It depends on what you want to do.",
        "japanese": "あなたが何をしたいかによります。"
      },
      {
        "id": "it-depends-on-5",
        "segments": [
          {
            "text": "It depends on",
            "highlight": true
          },
          {
            "text": " the situation.",
            "highlight": false
          }
        ],
        "english": "It depends on the situation.",
        "japanese": "状況によります。"
      }
    ],
    "grammarNotes": [
      "depend の後ろには on が必要です。"
    ],
    "tags": [
      "opinion",
      "daily-phrase"
    ]
  },
  {
    "id": "it-looks",
    "rank": 36,
    "pattern": "It looks + 形容詞",
    "meaning": "～に見えます／～そうです",
    "usage": "見た目から受ける印象を伝える。",
    "category": "reaction",
    "accessTier": "standard",
    "examples": [
      {
        "id": "it-looks-1",
        "segments": [
          {
            "text": "It looks",
            "highlight": true
          },
          {
            "text": " delicious.",
            "highlight": false
          }
        ],
        "english": "It looks delicious.",
        "japanese": "おいしそうです。"
      },
      {
        "id": "it-looks-2",
        "segments": [
          {
            "text": "It looks",
            "highlight": true
          },
          {
            "text": " expensive.",
            "highlight": false
          }
        ],
        "english": "It looks expensive.",
        "japanese": "高そうです。"
      },
      {
        "id": "it-looks-3",
        "segments": [
          {
            "text": "It looks",
            "highlight": true
          },
          {
            "text": " easy to use.",
            "highlight": false
          }
        ],
        "english": "It looks easy to use.",
        "japanese": "使いやすそうです。"
      },
      {
        "id": "it-looks-4",
        "segments": [
          {
            "text": "It looks",
            "highlight": true
          },
          {
            "text": " good on you.",
            "highlight": false
          }
        ],
        "english": "It looks good on you.",
        "japanese": "あなたによく似合っています。"
      },
      {
        "id": "it-looks-5",
        "segments": [
          {
            "text": "It looks",
            "highlight": true
          },
          {
            "text": " different from the picture.",
            "highlight": false
          }
        ],
        "english": "It looks different from the picture.",
        "japanese": "写真とは違って見えます。"
      }
    ],
    "grammarNotes": [
      "後ろには主に形容詞が続きます。"
    ],
    "tags": [
      "reaction",
      "daily-phrase"
    ]
  },
  {
    "id": "it-looks-like",
    "rank": 37,
    "pattern": "It looks like + 名詞／文",
    "meaning": "～のようです／～になりそうです",
    "usage": "見た情報から状況を推測する。",
    "category": "reaction",
    "accessTier": "standard",
    "examples": [
      {
        "id": "it-looks-like-1",
        "segments": [
          {
            "text": "It looks like",
            "highlight": true
          },
          {
            "text": " rain.",
            "highlight": false
          }
        ],
        "english": "It looks like rain.",
        "japanese": "雨になりそうです。"
      },
      {
        "id": "it-looks-like-2",
        "segments": [
          {
            "text": "It looks like",
            "highlight": true
          },
          {
            "text": " he’s busy.",
            "highlight": false
          }
        ],
        "english": "It looks like he’s busy.",
        "japanese": "彼は忙しそうです。"
      },
      {
        "id": "it-looks-like-3",
        "segments": [
          {
            "text": "It looks like",
            "highlight": true
          },
          {
            "text": " we’re going to be late.",
            "highlight": false
          }
        ],
        "english": "It looks like we’re going to be late.",
        "japanese": "私たちは遅れそうです。"
      },
      {
        "id": "it-looks-like-4",
        "segments": [
          {
            "text": "It looks like",
            "highlight": true
          },
          {
            "text": " a good place to eat.",
            "highlight": false
          }
        ],
        "english": "It looks like a good place to eat.",
        "japanese": "食事をするのに良さそうな場所です。"
      },
      {
        "id": "it-looks-like-5",
        "segments": [
          {
            "text": "It looks like",
            "highlight": true
          },
          {
            "text": " the store is closed.",
            "highlight": false
          }
        ],
        "english": "It looks like the store is closed.",
        "japanese": "お店は閉まっているようです。"
      }
    ],
    "grammarNotes": [
      "後ろには名詞または主語＋動詞が続きます。"
    ],
    "tags": [
      "reaction",
      "daily-phrase"
    ]
  },
  {
    "id": "im-worried-about",
    "rank": 38,
    "pattern": "I’m worried about + 名詞／動名詞",
    "meaning": "～を心配しています",
    "usage": "不安や心配の対象を伝える。",
    "category": "emotion",
    "accessTier": "standard",
    "examples": [
      {
        "id": "im-worried-about-1",
        "segments": [
          {
            "text": "I’m worried about",
            "highlight": true
          },
          {
            "text": " the weather tomorrow.",
            "highlight": false
          }
        ],
        "english": "I’m worried about the weather tomorrow.",
        "japanese": "明日の天気が心配です。"
      },
      {
        "id": "im-worried-about-2",
        "segments": [
          {
            "text": "I’m worried about",
            "highlight": true
          },
          {
            "text": " my son.",
            "highlight": false
          }
        ],
        "english": "I’m worried about my son.",
        "japanese": "息子のことが心配です。"
      },
      {
        "id": "im-worried-about-3",
        "segments": [
          {
            "text": "I’m worried about",
            "highlight": true
          },
          {
            "text": " being late.",
            "highlight": false
          }
        ],
        "english": "I’m worried about being late.",
        "japanese": "遅刻しないか心配です。"
      },
      {
        "id": "im-worried-about-4",
        "segments": [
          {
            "text": "I’m worried about",
            "highlight": true
          },
          {
            "text": " the test results.",
            "highlight": false
          }
        ],
        "english": "I’m worried about the test results.",
        "japanese": "検査結果が心配です。"
      },
      {
        "id": "im-worried-about-5",
        "segments": [
          {
            "text": "I’m worried about",
            "highlight": true
          },
          {
            "text": " losing my job.",
            "highlight": false
          }
        ],
        "english": "I’m worried about losing my job.",
        "japanese": "仕事を失うことが心配です。"
      }
    ],
    "grammarNotes": [
      "動詞を続ける場合は -ing 形にします。"
    ],
    "tags": [
      "emotion",
      "daily-phrase"
    ]
  },
  {
    "id": "are-you-sure",
    "rank": 39,
    "pattern": "Are you sure + 文?",
    "meaning": "本当に～ですか？",
    "usage": "相手の情報・判断・決断を確認する。",
    "category": "question",
    "accessTier": "standard",
    "examples": [
      {
        "id": "are-you-sure-1",
        "segments": [
          {
            "text": "Are you sure",
            "highlight": true
          },
          {
            "text": " this is the right address?",
            "highlight": false
          }
        ],
        "english": "Are you sure this is the right address?",
        "japanese": "ここが正しい住所で間違いありませんか？"
      },
      {
        "id": "are-you-sure-2",
        "segments": [
          {
            "text": "Are you sure",
            "highlight": true
          },
          {
            "text": " you’re okay?",
            "highlight": false
          }
        ],
        "english": "Are you sure you’re okay?",
        "japanese": "本当に大丈夫ですか？"
      },
      {
        "id": "are-you-sure-3",
        "segments": [
          {
            "text": "Are you sure",
            "highlight": true
          },
          {
            "text": " you want to go?",
            "highlight": false
          }
        ],
        "english": "Are you sure you want to go?",
        "japanese": "本当に行きたいのですか？"
      },
      {
        "id": "are-you-sure-4",
        "segments": [
          {
            "text": "Are you sure",
            "highlight": true
          },
          {
            "text": " the store is open today?",
            "highlight": false
          }
        ],
        "english": "Are you sure the store is open today?",
        "japanese": "その店、本当に今日営業していますか？"
      },
      {
        "id": "are-you-sure-5",
        "segments": [
          {
            "text": "Are you sure",
            "highlight": true
          },
          {
            "text": " we have enough time?",
            "highlight": false
          }
        ],
        "english": "Are you sure we have enough time?",
        "japanese": "本当に時間は足りますか？"
      }
    ],
    "grammarNotes": [
      "相手の決断について使うと反対や疑いに聞こえる場合があります。"
    ],
    "tags": [
      "question",
      "daily-phrase"
    ]
  },
  {
    "id": "how-do-you-feel-about",
    "rank": 40,
    "pattern": "How do you feel about + 名詞／動名詞?",
    "meaning": "～についてどう感じますか？",
    "usage": "相手の感情や個人的な反応を尋ねる。",
    "category": "emotion",
    "accessTier": "standard",
    "examples": [
      {
        "id": "how-do-you-feel-about-1",
        "segments": [
          {
            "text": "How do you feel about",
            "highlight": true
          },
          {
            "text": " your new job?",
            "highlight": false
          }
        ],
        "english": "How do you feel about your new job?",
        "japanese": "新しい仕事についてどう感じていますか？"
      },
      {
        "id": "how-do-you-feel-about-2",
        "segments": [
          {
            "text": "How do you feel about",
            "highlight": true
          },
          {
            "text": " moving to another city?",
            "highlight": false
          }
        ],
        "english": "How do you feel about moving to another city?",
        "japanese": "別の街へ引っ越すことについてどう思いますか？"
      },
      {
        "id": "how-do-you-feel-about-3",
        "segments": [
          {
            "text": "How do you feel about",
            "highlight": true
          },
          {
            "text": " this idea?",
            "highlight": false
          }
        ],
        "english": "How do you feel about this idea?",
        "japanese": "このアイデアについてどう感じますか？"
      },
      {
        "id": "how-do-you-feel-about-4",
        "segments": [
          {
            "text": "How do you feel about",
            "highlight": true
          },
          {
            "text": " working from home?",
            "highlight": false
          }
        ],
        "english": "How do you feel about working from home?",
        "japanese": "在宅勤務についてどう思いますか？"
      },
      {
        "id": "how-do-you-feel-about-5",
        "segments": [
          {
            "text": "How do you feel about",
            "highlight": true
          },
          {
            "text": " the new schedule?",
            "highlight": false
          }
        ],
        "english": "How do you feel about the new schedule?",
        "japanese": "新しいスケジュールについてどう感じていますか？"
      }
    ],
    "grammarNotes": [
      "What do you think about ...? は意見、こちらは感情を中心に尋ねます。"
    ],
    "tags": [
      "emotion",
      "daily-phrase"
    ]
  },
  {
    "id": "why-dont-we",
    "rank": 41,
    "pattern": "Why don’t we + 動詞?",
    "meaning": "一緒に～しませんか？",
    "usage": "相手を含めてカジュアルに提案する。",
    "category": "suggestion",
    "accessTier": "standard",
    "examples": [
      {
        "id": "why-dont-we-1",
        "segments": [
          {
            "text": "Why don’t we",
            "highlight": true
          },
          {
            "text": " go out for dinner tonight?",
            "highlight": false
          }
        ],
        "english": "Why don’t we go out for dinner tonight?",
        "japanese": "今夜、外食しませんか？"
      },
      {
        "id": "why-dont-we-2",
        "segments": [
          {
            "text": "Why don’t we",
            "highlight": true
          },
          {
            "text": " take a break?",
            "highlight": false
          }
        ],
        "english": "Why don’t we take a break?",
        "japanese": "少し休憩しませんか？"
      },
      {
        "id": "why-dont-we-3",
        "segments": [
          {
            "text": "Why don’t we",
            "highlight": true
          },
          {
            "text": " meet at the station?",
            "highlight": false
          }
        ],
        "english": "Why don’t we meet at the station?",
        "japanese": "駅で待ち合わせしませんか？"
      },
      {
        "id": "why-dont-we-4",
        "segments": [
          {
            "text": "Why don’t we",
            "highlight": true
          },
          {
            "text": " watch a movie this weekend?",
            "highlight": false
          }
        ],
        "english": "Why don’t we watch a movie this weekend?",
        "japanese": "今週末、映画を見ませんか？"
      },
      {
        "id": "why-dont-we-5",
        "segments": [
          {
            "text": "Why don’t we",
            "highlight": true
          },
          {
            "text": " ask someone for help?",
            "highlight": false
          }
        ],
        "english": "Why don’t we ask someone for help?",
        "japanese": "誰かに助けを求めませんか？"
      }
    ],
    "grammarNotes": [
      "Why don’t you ...? は相手への提案です。"
    ],
    "tags": [
      "suggestion",
      "daily-phrase"
    ]
  },
  {
    "id": "what-kind-of",
    "rank": 42,
    "pattern": "What kind of + 名詞 ...?",
    "meaning": "どんな～ですか？",
    "usage": "種類・好み・特徴を尋ねる。",
    "category": "question",
    "accessTier": "standard",
    "examples": [
      {
        "id": "what-kind-of-1",
        "segments": [
          {
            "text": "What kind of",
            "highlight": true
          },
          {
            "text": " music do you like?",
            "highlight": false
          }
        ],
        "english": "What kind of music do you like?",
        "japanese": "どんな音楽が好きですか？"
      },
      {
        "id": "what-kind-of-2",
        "segments": [
          {
            "text": "What kind of",
            "highlight": true
          },
          {
            "text": " food do you usually cook?",
            "highlight": false
          }
        ],
        "english": "What kind of food do you usually cook?",
        "japanese": "普段はどんな料理を作りますか？"
      },
      {
        "id": "what-kind-of-3",
        "segments": [
          {
            "text": "What kind of",
            "highlight": true
          },
          {
            "text": " job are you looking for?",
            "highlight": false
          }
        ],
        "english": "What kind of job are you looking for?",
        "japanese": "どんな仕事を探していますか？"
      },
      {
        "id": "what-kind-of-4",
        "segments": [
          {
            "text": "What kind of",
            "highlight": true
          },
          {
            "text": " movies do you watch?",
            "highlight": false
          }
        ],
        "english": "What kind of movies do you watch?",
        "japanese": "どんな映画を見ますか？"
      },
      {
        "id": "what-kind-of-5",
        "segments": [
          {
            "text": "What kind of",
            "highlight": true
          },
          {
            "text": " person is he?",
            "highlight": false
          }
        ],
        "english": "What kind of person is he?",
        "japanese": "彼はどんな人ですか？"
      }
    ],
    "grammarNotes": [
      "kind の後ろには of が必要です。"
    ],
    "tags": [
      "question",
      "daily-phrase"
    ]
  },
  {
    "id": "what-happened-to",
    "rank": 43,
    "pattern": "What happened to + 名詞?",
    "meaning": "～はどうしたのですか？",
    "usage": "人・物・予定の変化や問題を尋ねる。",
    "category": "question",
    "accessTier": "standard",
    "examples": [
      {
        "id": "what-happened-to-1",
        "segments": [
          {
            "text": "What happened to",
            "highlight": true
          },
          {
            "text": " your phone?",
            "highlight": false
          }
        ],
        "english": "What happened to your phone?",
        "japanese": "スマートフォン、どうしたのですか？"
      },
      {
        "id": "what-happened-to-2",
        "segments": [
          {
            "text": "What happened to",
            "highlight": true
          },
          {
            "text": " your hand?",
            "highlight": false
          }
        ],
        "english": "What happened to your hand?",
        "japanese": "手をどうしたのですか？"
      },
      {
        "id": "what-happened-to-3",
        "segments": [
          {
            "text": "What happened to",
            "highlight": true
          },
          {
            "text": " the meeting?",
            "highlight": false
          }
        ],
        "english": "What happened to the meeting?",
        "japanese": "会議はどうなったのですか？"
      },
      {
        "id": "what-happened-to-4",
        "segments": [
          {
            "text": "What happened to",
            "highlight": true
          },
          {
            "text": " your car?",
            "highlight": false
          }
        ],
        "english": "What happened to your car?",
        "japanese": "車、どうしたのですか？"
      },
      {
        "id": "what-happened-to-5",
        "segments": [
          {
            "text": "What happened to",
            "highlight": true
          },
          {
            "text": " our plans for this weekend?",
            "highlight": false
          }
        ],
        "english": "What happened to our plans for this weekend?",
        "japanese": "今週末の予定はどうなったのですか？"
      }
    ],
    "grammarNotes": [
      "What happened? は出来事全体を尋ねます。"
    ],
    "tags": [
      "question",
      "daily-phrase"
    ]
  },
  {
    "id": "thank-you-for",
    "rank": 44,
    "pattern": "Thank you for + 名詞／動名詞",
    "meaning": "～してくれてありがとう",
    "usage": "行為や協力への感謝を伝える。",
    "category": "thanks",
    "accessTier": "standard",
    "examples": [
      {
        "id": "thank-you-for-1",
        "segments": [
          {
            "text": "Thank you for",
            "highlight": true
          },
          {
            "text": " your help.",
            "highlight": false
          }
        ],
        "english": "Thank you for your help.",
        "japanese": "手伝ってくれてありがとうございます。"
      },
      {
        "id": "thank-you-for-2",
        "segments": [
          {
            "text": "Thank you for",
            "highlight": true
          },
          {
            "text": " coming today.",
            "highlight": false
          }
        ],
        "english": "Thank you for coming today.",
        "japanese": "今日は来てくれてありがとうございます。"
      },
      {
        "id": "thank-you-for-3",
        "segments": [
          {
            "text": "Thank you for",
            "highlight": true
          },
          {
            "text": " waiting.",
            "highlight": false
          }
        ],
        "english": "Thank you for waiting.",
        "japanese": "待ってくれてありがとうございます。"
      },
      {
        "id": "thank-you-for-4",
        "segments": [
          {
            "text": "Thank you for",
            "highlight": true
          },
          {
            "text": " the gift.",
            "highlight": false
          }
        ],
        "english": "Thank you for the gift.",
        "japanese": "プレゼントをありがとうございます。"
      },
      {
        "id": "thank-you-for-5",
        "segments": [
          {
            "text": "Thank you for",
            "highlight": true
          },
          {
            "text": " letting me know.",
            "highlight": false
          }
        ],
        "english": "Thank you for letting me know.",
        "japanese": "教えてくれてありがとうございます。"
      }
    ],
    "grammarNotes": [
      "動詞を続ける場合は -ing 形にします。"
    ],
    "tags": [
      "thanks",
      "daily-phrase"
    ]
  },
  {
    "id": "sorry-for",
    "rank": 45,
    "pattern": "Sorry for + 名詞／動名詞",
    "meaning": "～してすみません",
    "usage": "自分の行動や迷惑について謝る。",
    "category": "apology",
    "accessTier": "standard",
    "examples": [
      {
        "id": "sorry-for-1",
        "segments": [
          {
            "text": "Sorry for",
            "highlight": true
          },
          {
            "text": " being late.",
            "highlight": false
          }
        ],
        "english": "Sorry for being late.",
        "japanese": "遅れてすみません。"
      },
      {
        "id": "sorry-for-2",
        "segments": [
          {
            "text": "Sorry for",
            "highlight": true
          },
          {
            "text": " the confusion.",
            "highlight": false
          }
        ],
        "english": "Sorry for the confusion.",
        "japanese": "混乱させてしまってすみません。"
      },
      {
        "id": "sorry-for-3",
        "segments": [
          {
            "text": "Sorry for",
            "highlight": true
          },
          {
            "text": " not calling you back.",
            "highlight": false
          }
        ],
        "english": "Sorry for not calling you back.",
        "japanese": "電話をかけ直さなくてごめんなさい。"
      },
      {
        "id": "sorry-for-4",
        "segments": [
          {
            "text": "Sorry for",
            "highlight": true
          },
          {
            "text": " the mistake.",
            "highlight": false
          }
        ],
        "english": "Sorry for the mistake.",
        "japanese": "間違えてしまってすみません。"
      },
      {
        "id": "sorry-for-5",
        "segments": [
          {
            "text": "Sorry for",
            "highlight": true
          },
          {
            "text": " interrupting you.",
            "highlight": false
          }
        ],
        "english": "Sorry for interrupting you.",
        "japanese": "話を遮ってすみません。"
      }
    ],
    "grammarNotes": [
      "動詞を続ける場合は -ing 形にします。"
    ],
    "tags": [
      "apology",
      "daily-phrase"
    ]
  },
  {
    "id": "i-dont-know",
    "rank": 46,
    "pattern": "I don’t know + 疑問詞節",
    "meaning": "～か分かりません",
    "usage": "方法・場所・理由などが分からないと伝える。",
    "category": "opinion",
    "accessTier": "standard",
    "examples": [
      {
        "id": "i-dont-know-1",
        "segments": [
          {
            "text": "I don’t know",
            "highlight": true
          },
          {
            "text": " what to do.",
            "highlight": false
          }
        ],
        "english": "I don’t know what to do.",
        "japanese": "どうすればいいか分かりません。"
      },
      {
        "id": "i-dont-know-2",
        "segments": [
          {
            "text": "I don’t know",
            "highlight": true
          },
          {
            "text": " where he is.",
            "highlight": false
          }
        ],
        "english": "I don’t know where he is.",
        "japanese": "彼がどこにいるか分かりません。"
      },
      {
        "id": "i-dont-know-3",
        "segments": [
          {
            "text": "I don’t know",
            "highlight": true
          },
          {
            "text": " how to use this.",
            "highlight": false
          }
        ],
        "english": "I don’t know how to use this.",
        "japanese": "これの使い方が分かりません。"
      },
      {
        "id": "i-dont-know-4",
        "segments": [
          {
            "text": "I don’t know",
            "highlight": true
          },
          {
            "text": " why she left.",
            "highlight": false
          }
        ],
        "english": "I don’t know why she left.",
        "japanese": "彼女がなぜ帰ったのか分かりません。"
      },
      {
        "id": "i-dont-know-5",
        "segments": [
          {
            "text": "I don’t know",
            "highlight": true
          },
          {
            "text": " when the store closes.",
            "highlight": false
          }
        ],
        "english": "I don’t know when the store closes.",
        "japanese": "その店が何時に閉まるのか分かりません。"
      }
    ],
    "grammarNotes": [
      "間接疑問文では where he is の語順にします。"
    ],
    "tags": [
      "opinion",
      "daily-phrase"
    ]
  },
  {
    "id": "what-a",
    "rank": 47,
    "pattern": "What a + 形容詞 + 数えられる単数名詞!",
    "meaning": "なんて～な……なんだ！",
    "usage": "名詞を含めて驚きや感動を表す。",
    "category": "exclamation",
    "accessTier": "standard",
    "examples": [
      {
        "id": "what-a-1",
        "segments": [
          {
            "text": "What a",
            "highlight": true
          },
          {
            "text": " beautiful day!",
            "highlight": false
          }
        ],
        "english": "What a beautiful day!",
        "japanese": "なんて素晴らしい日なんだ！"
      },
      {
        "id": "what-a-2",
        "segments": [
          {
            "text": "What a",
            "highlight": true
          },
          {
            "text": " nice surprise!",
            "highlight": false
          }
        ],
        "english": "What a nice surprise!",
        "japanese": "なんてうれしい驚きなんだ！"
      },
      {
        "id": "what-a-3",
        "segments": [
          {
            "text": "What a",
            "highlight": true
          },
          {
            "text": " great idea!",
            "highlight": false
          }
        ],
        "english": "What a great idea!",
        "japanese": "なんて良いアイデアなんだ！"
      },
      {
        "id": "what-a-4",
        "segments": [
          {
            "text": "What a",
            "highlight": true
          },
          {
            "text": " beautiful view!",
            "highlight": false
          }
        ],
        "english": "What a beautiful view!",
        "japanese": "なんて美しい景色なんだ！"
      },
      {
        "id": "what-a-5",
        "segments": [
          {
            "text": "What a",
            "highlight": true
          },
          {
            "text": " long day!",
            "highlight": false
          }
        ],
        "english": "What a long day!",
        "japanese": "なんて長い一日だったんだ！"
      }
    ],
    "grammarNotes": [
      "What a の後ろには数えられる単数名詞が必要です。"
    ],
    "tags": [
      "exclamation",
      "daily-phrase"
    ]
  },
  {
    "id": "how-exclamation",
    "rank": 48,
    "pattern": "How + 形容詞／副詞!",
    "meaning": "なんて～なんだ！",
    "usage": "形容詞や副詞を強調して感嘆を表す。",
    "category": "exclamation",
    "accessTier": "standard",
    "examples": [
      {
        "id": "how-exclamation-1",
        "segments": [
          {
            "text": "How",
            "highlight": true
          },
          {
            "text": " beautiful!",
            "highlight": false
          }
        ],
        "english": "How beautiful!",
        "japanese": "なんて美しいんだ！"
      },
      {
        "id": "how-exclamation-2",
        "segments": [
          {
            "text": "How",
            "highlight": true
          },
          {
            "text": " nice!",
            "highlight": false
          }
        ],
        "english": "How nice!",
        "japanese": "なんて素敵なんだ！"
      },
      {
        "id": "how-exclamation-3",
        "segments": [
          {
            "text": "How",
            "highlight": true
          },
          {
            "text": " exciting!",
            "highlight": false
          }
        ],
        "english": "How exciting!",
        "japanese": "なんてわくわくするんだ！"
      },
      {
        "id": "how-exclamation-4",
        "segments": [
          {
            "text": "How",
            "highlight": true
          },
          {
            "text": " lucky you are!",
            "highlight": false
          }
        ],
        "english": "How lucky you are!",
        "japanese": "あなたはなんて運がいいんだ！"
      },
      {
        "id": "how-exclamation-5",
        "segments": [
          {
            "text": "How",
            "highlight": true
          },
          {
            "text": " quickly things change!",
            "highlight": false
          }
        ],
        "english": "How quickly things change!",
        "japanese": "物事はなんて早く変わるんだ！"
      }
    ],
    "grammarNotes": [
      "What a ...! は名詞、How ...! は形容詞・副詞を中心にします。"
    ],
    "tags": [
      "exclamation",
      "daily-phrase"
    ]
  },
  {
    "id": "there-is-are",
    "rank": 49,
    "pattern": "There is / There are + 名詞",
    "meaning": "～があります／～がいます",
    "usage": "人や物の存在を伝える。",
    "category": "existence",
    "accessTier": "standard",
    "examples": [
      {
        "id": "there-is-are-1",
        "segments": [
          {
            "text": "There is",
            "highlight": true
          },
          {
            "text": " a convenience store near the station.",
            "highlight": false
          }
        ],
        "english": "There is a convenience store near the station.",
        "japanese": "駅の近くにコンビニがあります。"
      },
      {
        "id": "there-is-are-2",
        "segments": [
          {
            "text": "There is",
            "highlight": true
          },
          {
            "text": " someone at the door.",
            "highlight": false
          }
        ],
        "english": "There is someone at the door.",
        "japanese": "ドアのところに誰かいます。"
      },
      {
        "id": "there-is-are-3",
        "segments": [
          {
            "text": "There are",
            "highlight": true
          },
          {
            "text": " two seats available.",
            "highlight": false
          }
        ],
        "english": "There are two seats available.",
        "japanese": "空いている席が2つあります。"
      },
      {
        "id": "there-is-are-4",
        "segments": [
          {
            "text": "There are",
            "highlight": true
          },
          {
            "text": " a lot of people here today.",
            "highlight": false
          }
        ],
        "english": "There are a lot of people here today.",
        "japanese": "今日はここにたくさんの人がいます。"
      },
      {
        "id": "there-is-are-5",
        "segments": [
          {
            "text": "There is",
            "highlight": true
          },
          {
            "text": " something wrong with my phone.",
            "highlight": false
          }
        ],
        "english": "There is something wrong with my phone.",
        "japanese": "スマートフォンの調子がどこかおかしいです。"
      }
    ],
    "grammarNotes": [
      "単数には There is、複数には There are を使います。"
    ],
    "tags": [
      "existence",
      "daily-phrase"
    ]
  },
  {
    "id": "it-takes-to",
    "rank": 50,
    "pattern": "It takes + 時間 + to + 動詞",
    "meaning": "～するのに時間がかかります",
    "usage": "必要な時間を伝える。",
    "category": "time",
    "accessTier": "standard",
    "examples": [
      {
        "id": "it-takes-to-1",
        "segments": [
          {
            "text": "It takes",
            "highlight": true
          },
          {
            "text": " about twenty minutes ",
            "highlight": false
          },
          {
            "text": "to",
            "highlight": true
          },
          {
            "text": " get there.",
            "highlight": false
          }
        ],
        "english": "It takes about twenty minutes to get there.",
        "japanese": "そこへ行くのに20分くらいかかります。"
      },
      {
        "id": "it-takes-to-2",
        "segments": [
          {
            "text": "It takes",
            "highlight": true
          },
          {
            "text": " an hour ",
            "highlight": false
          },
          {
            "text": "to",
            "highlight": true
          },
          {
            "text": " cook this dish.",
            "highlight": false
          }
        ],
        "english": "It takes an hour to cook this dish.",
        "japanese": "この料理を作るのに1時間かかります。"
      },
      {
        "id": "it-takes-to-3",
        "segments": [
          {
            "text": "It takes",
            "highlight": true
          },
          {
            "text": " five minutes ",
            "highlight": false
          },
          {
            "text": "to",
            "highlight": true
          },
          {
            "text": " walk to the station.",
            "highlight": false
          }
        ],
        "english": "It takes five minutes to walk to the station.",
        "japanese": "駅まで歩くのに5分かかります。"
      },
      {
        "id": "it-takes-to-4",
        "segments": [
          {
            "text": "It takes",
            "highlight": true
          },
          {
            "text": " time ",
            "highlight": false
          },
          {
            "text": "to",
            "highlight": true
          },
          {
            "text": " learn a new language.",
            "highlight": false
          }
        ],
        "english": "It takes time to learn a new language.",
        "japanese": "新しい言語を身につけるには時間がかかります。"
      },
      {
        "id": "it-takes-to-5",
        "segments": [
          {
            "text": "It takes",
            "highlight": true
          },
          {
            "text": " only a few seconds ",
            "highlight": false
          },
          {
            "text": "to",
            "highlight": true
          },
          {
            "text": " open the app.",
            "highlight": false
          }
        ],
        "english": "It takes only a few seconds to open the app.",
        "japanese": "そのアプリを開くのに数秒しかかかりません。"
      }
    ],
    "grammarNotes": [
      "人を入れる場合は It takes me thirty minutes to ... の形です。"
    ],
    "tags": [
      "time",
      "daily-phrase"
    ]
  }
];

export function getDailyPhraseById(id: string) {
  return dailyPhrases.find((phrase) => phrase.id === id);
}

export function getDailyPhraseByRank(rank: number) {
  return dailyPhrases.find((phrase) => phrase.rank === rank);
}

export function getDailyPhrasesByTier(tier: DailyPhraseAccessTier) {
  return dailyPhrases.filter((phrase) => phrase.accessTier === tier);
}
