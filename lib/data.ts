export type Example = { en: string; ja: string };
export type Verb = {
  id: string;
  word: string;
  rank: number;
  core: string;
  meanings: { title: string; explanation: string; examples: Example[] }[];
  patterns: { pattern: string; meaning: string; examples: Example[] }[];
  collocations: { phrase: string; meaning: string; examples: Example[] }[];
  phrasalVerbs: { phrase: string; meaning: string; examples: Example[] }[];
  mistakes: { wrong: string; correct: string; explanation: string }[];
  tests: { question: string; answer: string }[];
};

export const verbs: Verb[] = [
  {
    id: "get",
    word: "GET",
    rank: 1,
    core: "手に入れる・ある状態へ移動する",
    meanings: [
      { title: "手に入れる", explanation: "物・情報・機会などを得る。", examples: [
        { en: "I got a new phone yesterday.", ja: "昨日新しいスマホを手に入れた。" },
        { en: "She got a ticket for the concert.", ja: "彼女はコンサートのチケットを手に入れた。" }
      ]},
      { title: "〜になる", explanation: "状態の変化を表す。", examples: [
        { en: "I'm getting tired.", ja: "疲れてきた。" },
        { en: "It's getting cold.", ja: "寒くなってきた。" }
      ]},
      { title: "到着する", explanation: "場所へ着く。", examples: [
        { en: "I got home at eight.", ja: "8時に帰宅した。" },
        { en: "What time did you get to work?", ja: "何時に会社へ着いた？" }
      ]}
    ],
    patterns: [
      { pattern: "S + get + 名詞", meaning: "〜を手に入れる", examples: [
        { en: "I got a new laptop.", ja: "新しいノートPCを買った。" },
        { en: "We got useful information.", ja: "有益な情報を得た。" }
      ]},
      { pattern: "S + get + 形容詞", meaning: "〜になる", examples: [
        { en: "I'm getting hungry.", ja: "お腹が空いてきた。" },
        { en: "The weather got better.", ja: "天気が良くなった。" }
      ]},
      { pattern: "S + get + 人 + 物", meaning: "人に物を用意する", examples: [
        { en: "Can you get me some water?", ja: "水を取ってくれる？" },
        { en: "I got my son a bicycle.", ja: "息子に自転車を買った。" }
      ]}
    ],
    collocations: [
      { phrase: "get ready", meaning: "準備する", examples: [
        { en: "Get ready for school.", ja: "学校の準備をしなさい。" },
        { en: "We need to get ready now.", ja: "今準備する必要がある。" }
      ]},
      { phrase: "get better", meaning: "良くなる", examples: [
        { en: "You'll get better soon.", ja: "すぐ良くなるよ。" },
        { en: "My English is getting better.", ja: "英語が上達している。" }
      ]}
    ],
    phrasalVerbs: [
      { phrase: "get up", meaning: "起きる", examples: [
        { en: "I get up at six.", ja: "6時に起きる。" },
        { en: "He got up early today.", ja: "今日は早起きした。" }
      ]},
      { phrase: "get over", meaning: "乗り越える", examples: [
        { en: "He got over his illness.", ja: "彼は病気を克服した。" },
        { en: "It took time to get over the breakup.", ja: "失恋から立ち直るのに時間がかかった。" }
      ]}
    ],
    mistakes: [
      { wrong: "get to home", correct: "get home", explanation: "homeは副詞なのでtoは不要。" },
      { wrong: "get married with", correct: "get married to", explanation: "結婚相手はtoを使う。" }
    ],
    tests: [
      { question: "I _____ home at eight.", answer: "got" },
      { question: "Can you _____ me some water?", answer: "get" },
      { question: "I'm _____ tired.", answer: "getting" }
    ]
  }
];

const names = ["TAKE","MAKE","HAVE","GIVE","GO","COME","PUT","KEEP","BRING"];
names.forEach((name, i) => verbs.push({
  id: name.toLowerCase(), word: name, rank: i + 2, core: "日常会話でよく使う基本動詞。詳細教材は順次追加。",
  meanings: [{ title: "基本意味", explanation: `${name}の基本的な使い方を学習します。`, examples: [
    { en: `Let's use ${name.toLowerCase()} in daily conversation.`, ja: `${name}を日常会話で使ってみよう。` },
    { en: `This verb is very common.`, ja: `この動詞はとてもよく使われます。` }
  ]}],
  patterns: [], collocations: [], phrasalVerbs: [], mistakes: [],
  tests: [{ question: `Write the verb: _____.`, answer: name.toLowerCase() }]
}));
