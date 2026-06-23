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
          { en: "She got a ticket for the concert.", ja: "彼女はコンサートのチケットを手に入れた。", focus: "got", object: "a ticket" }
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
          { en: "It's getting cold.", ja: "寒くなってきた。", focus: "getting" }
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
          { en: "I got to the station at eight.", ja: "8時に駅に着いた。", focus: "got" },
          { en: "I got home late.", ja: "遅く帰宅した。", focus: "got" }
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
          { en: "I'm getting ready for work.", ja: "仕事の準備をしている。", focus: "getting" },
          { en: "We need to get ready now.", ja: "今、準備する必要がある。", focus: "get" }
        ]
      },
      {
        phrase: "get better",
        ja: "良くなる",
        image: "better（より良い状態）になる。体調・能力・状況に使える。",
        pattern: "get + 形容詞",
        examples: [
          { en: "You will get better soon.", ja: "すぐ良くなるよ。", focus: "get" },
          { en: "My English is getting better.", ja: "英語が上達している。", focus: "getting" }
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
          { en: "I get up at six.", ja: "私は6時に起きる。", focus: "get" },
          { en: "He got up early today.", ja: "彼は今日早く起きた。", focus: "got" }
        ]
      },
      {
        phrase: "get over",
        ja: "乗り越える",
        image: "over は越える。問題や病気を越えて向こう側へ行く。",
        pattern: "get over + 名詞",
        examples: [
          { en: "She got over the problem.", ja: "彼女はその問題を乗り越えた。", focus: "got", object: "the problem" },
          { en: "He got over his illness.", ja: "彼は病気を克服した。", focus: "got", object: "his illness" }
        ]
      }
    ]
  },
  { id: "take", rank: 2, word: "TAKE", ipa: "/teɪk/", kana: "テイク", syllable: "take", transitivity: "他動詞中心", importance: "★★★★★ 超重要", core: "手に取って自分の側へ持っていく", coreDetail: "物・時間・行動を自分の側に引き受けるイメージ。", meanings: [], collocations: [], phrasalVerbs: [] },
  { id: "make", rank: 3, word: "MAKE", ipa: "/meɪk/", kana: "メイク", syllable: "make", transitivity: "他動詞", importance: "★★★★★ 超重要", core: "作り出す・変化を生む", coreDetail: "何かを作る、または人や物をある状態にするイメージ。", meanings: [], collocations: [], phrasalVerbs: [] }
];

export const testItems = verbs[0].meanings.flatMap((m) =>
  m.examples.map((e) => ({
    id: `${m.id}-${e.en}`,
    verbId: "get",
    meaningTitle: m.title,
    pattern: m.pattern,
    ja: e.ja,
    en: e.en
  }))
);

export function getVerb(id: string) {
  return verbs.find((v) => v.id === id) ?? verbs[0];
}
