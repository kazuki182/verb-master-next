export type GrammarPart = {
  label: "S" | "V" | "O" | "C" | "M";
  text: string;
};

export type Example = {
  en: string;
  ja: string;
  focus?: string;
  object?: string;
  jaFocus?: string;
  sentencePattern?: string;
  grammarParts?: GrammarPart[];
  grammarNote?: string;
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
    "core": "外にあるもの・情報・状態が、自分のところへ入ってくる",
    "coreDetail": "GETは『外側にあるものが自分側に入る』感覚です。承認・情報・メール・チャンスを受け取る、状態が変わる、目的地に着く、意味が頭に入る、という使い方まで1つの流れで理解できます。",
    "coreVisual": {
      "from": ["📧 メール", "✅ 承認", "💡 情報", "🎯 機会", "📍 目的地"],
      "to": "自分・自社の領域",
      "label": "外側 → 自分側へ入る"
    },
    "meanings": [
      {
        "id": "get-approval",
        "title": "① get approval / 承認を得る",
        "pattern": "GET + approval",
        "transitivity": "他動詞",
        "structure": "S + get + O",
        "image": "相手側にあった承認が、自分たちの手元に入るイメージ。",
        "point": "仕事では approval, permission, confirmation と一緒に使うことが多い。",
        "examples": [
          {"en":"We got approval from the client this morning.","ja":"私たちは今朝、顧客から承認を得ました。","focus":"got","object":"approval"},
          {"en":"I need to get approval before placing the order.","ja":"私は発注前に承認を得る必要があります。","focus":"get","object":"approval"},
          {"en":"Did you get approval from your manager?","ja":"あなたは上司から承認を得ましたか？","focus":"get","object":"approval"}
        ]
      },
      {
        "id": "get-information",
        "title": "② get information / 情報を得る",
        "pattern": "GET + information",
        "transitivity": "他動詞",
        "structure": "S + get + O",
        "image": "必要な情報が自分の中に入ってくるイメージ。",
        "point": "latest information, more details, feedback などと相性が良い。",
        "examples": [
          {"en":"I got the latest information from the supplier.","ja":"私は仕入先から最新情報を得ました。","focus":"got","object":"the latest information"},
          {"en":"We need to get more details before the meeting.","ja":"私たちは会議前に、もう少し詳しい情報を得る必要があります。","focus":"get","object":"more details"},
          {"en":"Can you get feedback from the customer?","ja":"あなたは顧客からフィードバックをもらえますか？","focus":"get","object":"feedback"}
        ]
      },
      {
        "id": "get-email",
        "title": "③ get an email / メールを受け取る",
        "pattern": "GET + email / message",
        "transitivity": "他動詞",
        "structure": "S + get + O",
        "image": "メールや連絡が自分のところに届くイメージ。",
        "point": "receiveより少し会話的。社内の確認では自然に使える。",
        "examples": [
          {"en":"I got your email about the schedule.","ja":"私はスケジュールについてのあなたのメールを受け取りました。","focus":"got","object":"your email"},
          {"en":"We got a message from the design team.","ja":"私たちは設計チームから連絡を受け取りました。","focus":"got","object":"a message"},
          {"en":"Did you get the file I sent yesterday?","ja":"あなたは私が昨日送ったファイルを受け取りましたか？","focus":"get","object":"the file"}
        ]
      },
      {
        "id": "get-sample",
        "title": "④ get a sample / サンプルを入手する",
        "pattern": "GET + sample / quote / document",
        "transitivity": "他動詞",
        "structure": "S + get + O",
        "image": "必要な物や資料を手元に持ってくるイメージ。",
        "point": "sample, quotation, document, parts など、営業や現場確認でよく使う。",
        "examples": [
          {"en":"We got the sample from the factory today.","ja":"私たちは今日、工場からサンプルを入手しました。","focus":"got","object":"the sample"},
          {"en":"I will get the quotation ready by Friday.","ja":"私は金曜日までに見積書を準備します。","focus":"get","object":"the quotation ready"},
          {"en":"Can you get the drawings from the client?","ja":"あなたは顧客から図面を入手できますか？","focus":"get","object":"the drawings"}
        ]
      },
      {
        "id": "get-ready",
        "title": "⑤ get ready / 準備する",
        "pattern": "GET + ready",
        "transitivity": "自動詞に近い使い方",
        "structure": "S + get + C",
        "image": "準備ができた状態に入るイメージ。",
        "point": "get ready for ... で『〜に向けて準備する』。",
        "examples": [
          {"en":"Please get ready for the meeting by three.","ja":"あなたは3時までに会議の準備をしてください。","focus":"get","object":"ready"},
          {"en":"We need to get ready for the client visit.","ja":"私たちは顧客訪問に向けて準備する必要があります。","focus":"get","object":"ready"},
          {"en":"I got the presentation ready last night.","ja":"私は昨夜、提案資料を準備しました。","focus":"got","object":"the presentation ready"}
        ]
      },
      {
        "id": "get-busy",
        "title": "⑥ get busy / 忙しくなる",
        "pattern": "GET + adjective",
        "transitivity": "自動詞に近い使い方",
        "structure": "S + get + C",
        "image": "状態が変化して、その状態に入るイメージ。",
        "point": "busy, better, difficult, tight など、状態変化を表す形容詞と使う。",
        "examples": [
          {"en":"The schedule is getting tight.","ja":"スケジュールが厳しくなってきています。","focus":"getting","object":"tight"},
          {"en":"Our team got busy after the new order came in.","ja":"私たちのチームは新しい注文が入ってから忙しくなりました。","focus":"got","object":"busy"},
          {"en":"The process got easier after the update.","ja":"更新後、その作業手順は簡単になりました。","focus":"got","object":"easier"}
        ]
      },
      {
        "id": "get-to-place",
        "title": "⑦ get to the office / 到着する",
        "pattern": "GET TO + place",
        "transitivity": "自動詞",
        "structure": "S + get + to 場所",
        "image": "目的地が自分の到達範囲に入るイメージ。",
        "point": "場所には get to を使う。ただし home は to を付けず get home。",
        "examples": [
          {"en":"I got to the office at eight thirty.","ja":"私は8時30分にオフィスに着きました。","focus":"got","object":"to the office"},
          {"en":"What time will you get to the client site?","ja":"あなたは何時に顧客の現場へ着きますか？","focus":"get","object":"to the client site"},
          {"en":"We got home late after the site visit.","ja":"私たちは現場訪問の後、遅く帰宅しました。","focus":"got","object":"home"}
        ]
      },
      {
        "id": "get-it",
        "title": "⑧ get it / 理解する",
        "pattern": "GET + idea / point",
        "transitivity": "他動詞",
        "structure": "S + get + O",
        "image": "意味や意図が頭の中に入るイメージ。",
        "point": "I get it. は『分かりました』。社内会話では便利だが、丁寧なメールでは understand も使える。",
        "examples": [
          {"en":"I get your point.","ja":"私はあなたの要点を理解しています。","focus":"get","object":"your point"},
          {"en":"I don't get the reason for the delay.","ja":"私は遅延の理由が分かりません。","focus":"get","object":"the reason"},
          {"en":"Do you get what the client wants?","ja":"あなたは顧客が求めていることを理解していますか？","focus":"get","object":"what the client wants"}
        ]
      },
      {
        "id": "get-someone-to-do",
        "title": "⑨ get someone to do / 人に〜してもらう",
        "pattern": "GET + someone + to do",
        "transitivity": "他動詞",
        "structure": "S + get + O + C",
        "image": "相手を動かして、必要な行動を自分側に引き寄せるイメージ。",
        "point": "命令ではなく、依頼・調整のニュアンスで使える。",
        "examples": [
          {"en":"I will get someone to check the data.","ja":"私は誰かにデータを確認してもらいます。","focus":"get","object":"someone to check the data"},
          {"en":"Can you get the supplier to send the sample today?","ja":"あなたは仕入先に今日サンプルを送ってもらえますか？","focus":"get","object":"the supplier to send the sample"},
          {"en":"We got the engineer to review the setting.","ja":"私たちは技術担当者に設定を確認してもらいました。","focus":"got","object":"the engineer to review the setting"}
        ]
      },
      {
        "id": "get-done",
        "title": "⑩ get it done / 終わらせる",
        "pattern": "GET + O + done",
        "transitivity": "他動詞",
        "structure": "S + get + O + C",
        "image": "未完了のものを完了した状態に入れるイメージ。",
        "point": "仕事では『やり切る』『完了状態にする』という実務的な表現。",
        "examples": [
          {"en":"We need to get it done by Friday.","ja":"私たちは金曜日までにそれを終わらせる必要があります。","focus":"get","object":"it done"},
          {"en":"I got the report done before the meeting.","ja":"私は会議前に報告書を終わらせました。","focus":"got","object":"the report done"},
          {"en":"Can you get this checked today?","ja":"あなたは今日これを確認済みにできますか？","focus":"get","object":"this checked"}
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"get back to","ja":"〜に折り返す・後で返答する","image":"相手のところへ連絡を戻すイメージ。","pattern":"GET BACK TO + someone","examples":[
        {"en":"I will get back to you after I check the price.","ja":"私は価格を確認した後、あなたに折り返します。","focus":"get back to","object":"you"},
        {"en":"Can you get back to the client today?","ja":"あなたは今日、顧客に折り返せますか？","focus":"get back to","object":"the client"},
        {"en":"We need to get back to them by tomorrow morning.","ja":"私たちは明日の朝までに彼らへ返答する必要があります。","focus":"get back to","object":"them"}]},
      {"phrase":"get in touch with","ja":"〜に連絡を取る","image":"相手と連絡がつながる状態に入るイメージ。","pattern":"GET IN TOUCH WITH + someone","examples":[
        {"en":"I will get in touch with the supplier today.","ja":"私は今日、仕入先に連絡を取ります。","focus":"get in touch with","object":"the supplier"},
        {"en":"Please get in touch with the customer before noon.","ja":"あなたは正午前に顧客へ連絡を取ってください。","focus":"get in touch with","object":"the customer"},
        {"en":"We got in touch with the design team yesterday.","ja":"私たちは昨日、設計チームに連絡を取りました。","focus":"got in touch with","object":"the design team"}]},
      {"phrase":"get along with","ja":"〜とうまくやっていく","image":"相手と同じ方向に進めるイメージ。","pattern":"GET ALONG WITH + someone","examples":[
        {"en":"I get along with the new team members.","ja":"私は新しいチームメンバーとうまくやっています。","focus":"get along with","object":"the new team members"},
        {"en":"He gets along with clients very well.","ja":"彼は顧客とうまく関係を築いています。","focus":"gets along with","object":"clients"},
        {"en":"We need to get along with the local partner.","ja":"私たちは現地パートナーとうまくやっていく必要があります。","focus":"get along with","object":"the local partner"}]},
      {"phrase":"get over","ja":"〜を乗り越える","image":"問題の上を越えて先に進むイメージ。","pattern":"GET OVER + problem","examples":[
        {"en":"We got over the delivery issue.","ja":"私たちは納期の問題を乗り越えました。","focus":"got over","object":"the delivery issue"},
        {"en":"I need time to get over this mistake.","ja":"私はこのミスを乗り越えるのに時間が必要です。","focus":"get over","object":"this mistake"},
        {"en":"The team got over a difficult situation last month.","ja":"チームは先月、難しい状況を乗り越えました。","focus":"got over","object":"a difficult situation"}]},
      {"phrase":"get through","ja":"〜をやり抜く・通過する","image":"大変な作業や期間を通り抜けるイメージ。","pattern":"GET THROUGH + work / period","examples":[
        {"en":"We got through the busy season.","ja":"私たちは繁忙期を乗り切りました。","focus":"got through","object":"the busy season"},
        {"en":"I need to get through these emails today.","ja":"私は今日これらのメールを処理し切る必要があります。","focus":"get through","object":"these emails"},
        {"en":"Can we get through the agenda in one hour?","ja":"私たちは1時間で議題を最後まで進められますか？","focus":"get through","object":"the agenda"}]},
      {"phrase":"get together","ja":"集まる・会う","image":"人が同じ場所にまとまるイメージ。","pattern":"GET TOGETHER","examples":[
        {"en":"Let's get together next week to review the proposal.","ja":"私たちは来週集まって提案内容を確認しましょう。","focus":"get together","object":"next week"},
        {"en":"The sales team got together after the meeting.","ja":"営業チームは会議後に集まりました。","focus":"got together","object":"after the meeting"},
        {"en":"Can we get together for a short call tomorrow?","ja":"私たちは明日、短い電話会議で集まれますか？","focus":"get together","object":"for a short call"}]},
      {"phrase":"get ahead","ja":"先に進む・有利になる","image":"前へ出る、先回りするイメージ。","pattern":"GET AHEAD","examples":[
        {"en":"We can get ahead by preparing the documents early.","ja":"私たちは資料を早めに準備することで有利に進められます。","focus":"get ahead","object":"by preparing the documents early"},
        {"en":"He got ahead because he followed up quickly.","ja":"彼は素早くフォローしたので一歩先に進めました。","focus":"got ahead","object":"because he followed up quickly"},
        {"en":"I want to get ahead on next week's tasks.","ja":"私は来週の作業を前倒しで進めたいです。","focus":"get ahead","object":"on next week's tasks"}]}
    ]
  },
  {
    "id": "take",
    "rank": 2,
    "word": "TAKE",
    "ipa": "/teɪk/",
    "kana": "テイク",
    "syllable": "take",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "対象を自分側に取り込む・選んで持っていく",
    "coreDetail": "TAKEは『対象を自分側に取る』感覚です。物を取るだけでなく、時間がかかる、担当する、選ぶ、連れて行く、対応する、責任を持つ、という仕事でよく使う形につながります。",
    "coreVisual": {
      "from": ["📄 資料", "⏱️ 時間", "✅ 責任", "🧾 注文", "👤 顧客"],
      "to": "自分・自社側",
      "label": "対象 → 自分側へ取る"
    },
    "meanings": [
      {"id":"take-document","title":"① take the document / 取る・持っていく","pattern":"TAKE + object","transitivity":"他動詞","structure":"S + take + O","image":"物や情報を自分側に取るイメージ。","point":"資料・サンプル・メモなど、手元に取るものに使う。","examples":[
        {"en":"Please take this document to the meeting.","ja":"あなたはこの資料を会議に持っていってください。","focus":"take","object":"this document"},
        {"en":"I took some notes during the call.","ja":"私は電話中にメモを取りました。","focus":"took","object":"some notes"},
        {"en":"Can you take a sample to the client?","ja":"あなたは顧客へサンプルを持っていけますか？","focus":"take","object":"a sample"}]},
      {"id":"take-time","title":"② take time / 時間がかかる","pattern":"TAKE + time","transitivity":"他動詞","structure":"It + takes + time","image":"作業が時間を取るイメージ。","point":"It takes ... to do は所要時間を伝える定番表現。","examples":[
        {"en":"It takes two days to prepare the quotation.","ja":"見積書を準備するには2日かかります。","focus":"takes","object":"two days"},
        {"en":"The installation took longer than expected.","ja":"設置作業は予想より時間がかかりました。","focus":"took","object":"longer than expected"},
        {"en":"How long will it take to confirm the schedule?","ja":"スケジュールを確認するにはどのくらい時間がかかりますか？","focus":"take","object":"to confirm the schedule"}]},
      {"id":"take-responsibility","title":"③ take responsibility / 責任を持つ","pattern":"TAKE + responsibility","transitivity":"他動詞","structure":"S + take + O","image":"責任を自分側に引き受けるイメージ。","point":"responsibility, charge, ownership と一緒に使う。","examples":[
        {"en":"I will take responsibility for this project.","ja":"私はこの案件に責任を持ちます。","focus":"take","object":"responsibility"},
        {"en":"She took charge of the meeting.","ja":"彼女は会議を担当しました。","focus":"took","object":"charge"},
        {"en":"We need to take ownership of the issue.","ja":"私たちはその問題を自分たちの責任として扱う必要があります。","focus":"take","object":"ownership"}]},
      {"id":"take-action","title":"④ take action / 行動する","pattern":"TAKE + action","transitivity":"他動詞","structure":"S + take + O","image":"必要な行動を自分側で実行に移すイメージ。","point":"action, steps, measures と使うと、仕事の対応を自然に表せる。","examples":[
        {"en":"We need to take action before the deadline.","ja":"私たちは締切前に行動する必要があります。","focus":"take","object":"action"},
        {"en":"The team took steps to reduce the risk.","ja":"チームはリスクを減らすための手を打ちました。","focus":"took","object":"steps"},
        {"en":"Please take measures to prevent the same mistake.","ja":"あなたは同じミスを防ぐための対策を取ってください。","focus":"take","object":"measures"}]},
      {"id":"take-order","title":"⑤ take an order / 注文を受ける","pattern":"TAKE + order / call","transitivity":"他動詞","structure":"S + take + O","image":"注文や電話を自分側で受け持つイメージ。","point":"order, call, request など、受け付ける対象に使える。","examples":[
        {"en":"We took a new order from the client.","ja":"私たちは顧客から新しい注文を受けました。","focus":"took","object":"a new order"},
        {"en":"Can you take this call for me?","ja":"あなたは私の代わりにこの電話に出てもらえますか？","focus":"take","object":"this call"},
        {"en":"I took the customer's request seriously.","ja":"私は顧客の依頼を真剣に受け止めました。","focus":"took","object":"the customer's request"}]},
      {"id":"take-look","title":"⑥ take a look / ざっと確認する","pattern":"TAKE + a look","transitivity":"他動詞","structure":"S + take + O","image":"視線や注意を少し取って確認するイメージ。","point":"take a look at ... は『少し見て確認する』。look at より柔らかく依頼できる。","examples":[
        {"en":"Can you take a look at this file?","ja":"あなたはこのファイルを少し確認してもらえますか？","focus":"take","object":"a look"},
        {"en":"I took a quick look at the proposal.","ja":"私は提案書をざっと確認しました。","focus":"took","object":"a quick look"},
        {"en":"Please take a look at the revised drawing.","ja":"あなたは修正版の図面を確認してください。","focus":"take","object":"a look"}]},
      {"id":"take-place","title":"⑦ take place / 行われる","pattern":"TAKE PLACE","transitivity":"自動詞","structure":"S + take place","image":"予定されていた出来事が場所を取って起こるイメージ。","point":"meeting, event, inspection などの開催に使う。","examples":[
        {"en":"The meeting will take place at three.","ja":"会議は3時に行われます。","focus":"take","object":"place"},
        {"en":"The inspection took place last Friday.","ja":"検査は先週金曜日に行われました。","focus":"took","object":"place"},
        {"en":"Where will the training take place?","ja":"研修はどこで行われますか？","focus":"take","object":"place"}]},
      {"id":"take-care","title":"⑧ take care of / 対応する・世話をする","pattern":"TAKE CARE OF + object","transitivity":"他動詞句","structure":"S + take care of + O","image":"問題や相手を自分側で引き受けて対応するイメージ。","point":"日常の『世話をする』だけでなく、仕事では『対応する』の意味でよく使う。","examples":[
        {"en":"I will take care of the hotel booking.","ja":"私はホテル予約を対応します。","focus":"take","object":"care of the hotel booking"},
        {"en":"Can you take care of this issue today?","ja":"あなたは今日この問題に対応できますか？","focus":"take","object":"care of this issue"},
        {"en":"We took care of the urgent request.","ja":"私たちは緊急依頼に対応しました。","focus":"took","object":"care of the urgent request"}]},
      {"id":"take-part","title":"⑨ take part in / 参加する","pattern":"TAKE PART IN + event","transitivity":"自動詞句","structure":"S + take part in + O","image":"活動の一部を自分が取るイメージ。","point":"参加を少しフォーマルに言える表現。","examples":[
        {"en":"We will take part in the trade show next month.","ja":"私たちは来月、展示会に参加します。","focus":"take","object":"part in the trade show"},
        {"en":"He took part in the online meeting.","ja":"彼はオンライン会議に参加しました。","focus":"took","object":"part in the online meeting"},
        {"en":"Can you take part in the product training?","ja":"あなたは製品研修に参加できますか？","focus":"take","object":"part in the product training"}]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"take over","ja":"引き継ぐ","image":"担当や役割を自分側に引き取るイメージ。","pattern":"TAKE OVER + task / role","examples":[
        {"en":"I will take over this account from next month.","ja":"私は来月からこの顧客を引き継ぎます。","focus":"take over","object":"this account"},
        {"en":"She took over the project after the meeting.","ja":"彼女は会議後にその案件を引き継ぎました。","focus":"took over","object":"the project"},
        {"en":"Can you take over the call at three?","ja":"あなたは3時の電話対応を引き継げますか？","focus":"take over","object":"the call"}]},
      {"phrase":"take off","ja":"外す・離陸する・休みを取る","image":"接していたものが離れるイメージ。","pattern":"TAKE OFF","examples":[
        {"en":"Please take off the old label before installation.","ja":"あなたは設置前に古いラベルを外してください。","focus":"take off","object":"the old label"},
        {"en":"The plane took off on time.","ja":"飛行機は定刻に離陸しました。","focus":"took off","object":"on time"},
        {"en":"I will take Friday off for a family event.","ja":"私は家族の用事で金曜日に休みを取ります。","focus":"take","object":"Friday off"}]},
      {"phrase":"take out","ja":"取り出す・外へ出す","image":"中にあるものを外へ取るイメージ。","pattern":"TAKE OUT + object","examples":[
        {"en":"Please take out the old parts from the box.","ja":"あなたは箱から古い部品を取り出してください。","focus":"take out","object":"the old parts"},
        {"en":"We took out the damaged module.","ja":"私たちは破損したモジュールを取り外しました。","focus":"took out","object":"the damaged module"},
        {"en":"Can you take out the unnecessary page?","ja":"あなたは不要なページを削除できますか？","focus":"take out","object":"the unnecessary page"}]},
      {"phrase":"take up","ja":"時間・場所を取る／始める","image":"空いている時間や場所を上に埋めるイメージ。","pattern":"TAKE UP + time / space / activity","examples":[
        {"en":"The meeting took up most of the morning.","ja":"会議で午前中のほとんどの時間を使いました。","focus":"took up","object":"most of the morning"},
        {"en":"This equipment takes up too much space.","ja":"この機器は場所を取りすぎます。","focus":"takes up","object":"too much space"},
        {"en":"I took up English study again this year.","ja":"私は今年、英語学習を再開しました。","focus":"took up","object":"English study"}]},
      {"phrase":"take on","ja":"引き受ける","image":"仕事や責任を自分の上に乗せるイメージ。","pattern":"TAKE ON + work / responsibility","examples":[
        {"en":"We can take on the additional work.","ja":"私たちは追加作業を引き受けられます。","focus":"take on","object":"the additional work"},
        {"en":"He took on a difficult project.","ja":"彼は難しい案件を引き受けました。","focus":"took on","object":"a difficult project"},
        {"en":"Can your team take on this request?","ja":"あなたのチームはこの依頼を引き受けられますか？","focus":"take on","object":"this request"}]},
      {"phrase":"take back","ja":"取り戻す・発言を撤回する","image":"相手側や外側に出たものを自分側に戻すイメージ。","pattern":"TAKE BACK + object","examples":[
        {"en":"We need to take back the defective sample.","ja":"私たちは不良サンプルを回収する必要があります。","focus":"take back","object":"the defective sample"},
        {"en":"I take back what I said earlier.","ja":"私は先ほど言ったことを撤回します。","focus":"take back","object":"what I said earlier"},
        {"en":"Can you take back these parts after the test?","ja":"あなたは試験後にこれらの部品を回収できますか？","focus":"take back","object":"these parts"}]}
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
    "core": "手を加えて、新しい形・状態・結果を作る",
    "coreDetail": "MAKEは『何かに働きかけて、形・状態・結果を作る』動詞です。資料を作るだけでなく、決定する、変更する、予約する、状態を〜にする、相手に〜させる、という使い方までつながります。",
    "coreVisual": {
      "from": ["🧩 材料", "📄 情報", "💬 意見", "🛠️ 作業", "👥 チーム"],
      "to": "結果・完成形",
      "label": "材料・状況 → 作られた結果"
    },
    "meanings": [
      {"id":"make-document","title":"① make a document / 作る","pattern":"MAKE + object","transitivity":"他動詞","structure":"S + make + O","image":"材料や情報から形あるものを作るイメージ。","point":"document, list, plan, sample など、仕事で作るものに使う。","examples":[
        {"en":"I made a simple list for the meeting.","ja":"私は会議用に簡単なリストを作りました。","focus":"made","object":"a simple list"},
        {"en":"We need to make a new plan for the client.","ja":"私たちは顧客向けに新しい計画を作る必要があります。","focus":"make","object":"a new plan"},
        {"en":"Can you make a copy of this document?","ja":"あなたはこの資料のコピーを作れますか？","focus":"make","object":"a copy"}]},
      {"id":"make-decision","title":"② make a decision / 決める","pattern":"MAKE + decision","transitivity":"他動詞","structure":"S + make + O","image":"いくつかの選択肢から1つの結果を作るイメージ。","point":"decision, choice, plan と使う。decideより『決定を作る』感覚。","examples":[
        {"en":"We need to make a decision by Friday.","ja":"私たちは金曜日までに決定する必要があります。","focus":"make","object":"a decision"},
        {"en":"The manager made the final decision.","ja":"上司が最終決定をしました。","focus":"made","object":"the final decision"},
        {"en":"Can you make a quick decision on this issue?","ja":"あなたはこの件について早めに判断できますか？","focus":"make","object":"a quick decision"}]},
      {"id":"make-change","title":"③ make a change / 変更する","pattern":"MAKE + change","transitivity":"他動詞","structure":"S + make + O","image":"現状に手を加えて別の状態を作るイメージ。","point":"change, adjustment, improvement と一緒に使いやすい。","examples":[
        {"en":"We made a small change to the schedule.","ja":"私たちはスケジュールに小さな変更を加えました。","focus":"made","object":"a small change"},
        {"en":"I will make an adjustment to the quotation.","ja":"私は見積書に調整を加えます。","focus":"make","object":"an adjustment"},
        {"en":"Can you make this process easier?","ja":"あなたはこの作業手順をもっと簡単にできますか？","focus":"make","object":"this process easier"}]},
      {"id":"make-sure","title":"④ make sure / 必ず確認する","pattern":"MAKE SURE + sentence","transitivity":"他動詞句","structure":"S + make sure + 内容","image":"不安な部分を確実な状態にするイメージ。","point":"確認・再確認の依頼で非常によく使う。","examples":[
        {"en":"Please make sure the price is correct.","ja":"あなたは価格が正しいことを必ず確認してください。","focus":"make","object":"sure the price is correct"},
        {"en":"I will make sure the sample arrives tomorrow.","ja":"私はサンプルが明日届くように確認します。","focus":"make","object":"sure the sample arrives tomorrow"},
        {"en":"We need to make sure everyone has the latest file.","ja":"私たちは全員が最新版ファイルを持っていることを確認する必要があります。","focus":"make","object":"sure everyone has the latest file"}]},
      {"id":"make-clear","title":"⑤ make it clear / 明確にする","pattern":"MAKE + O + adjective","transitivity":"他動詞","structure":"S + make + O + C","image":"相手に分かりやすい状態を作るイメージ。","point":"make it clear, make it easy, make it possible の形でよく使う。","examples":[
        {"en":"I will make it clear in the email.","ja":"私はメールでそれを明確にします。","focus":"make","object":"it clear"},
        {"en":"This chart makes the difference easy to understand.","ja":"この図は違いを分かりやすくしています。","focus":"makes","object":"the difference easy to understand"},
        {"en":"Can you make the explanation shorter?","ja":"あなたは説明をもう少し短くできますか？","focus":"make","object":"the explanation shorter"}]},
      {"id":"make-someone-do","title":"⑥ make someone do / 人に〜させる","pattern":"MAKE + someone + do","transitivity":"他動詞","structure":"S + make + O + C","image":"相手がその行動をする状態を作るイメージ。","point":"強制のニュアンスが出やすいので、ビジネスでは状況説明として使うと自然。",
      "examples":[
        {"en":"The delay made us change the schedule.","ja":"遅延により、私たちはスケジュールを変更することになりました。","focus":"made","object":"us change the schedule"},
        {"en":"This issue made the client ask for another meeting.","ja":"この問題により、顧客は別の会議を求めました。","focus":"made","object":"the client ask for another meeting"},
        {"en":"The new rule makes employees check the data twice.","ja":"新しいルールにより、社員はデータを2回確認します。","focus":"makes","object":"employees check the data twice"}]},
      {"id":"make-call","title":"⑦ make a call / 電話する・判断する","pattern":"MAKE + call","transitivity":"他動詞","structure":"S + make + O","image":"電話や判断という行動を作るイメージ。","point":"make a phone call は電話する。make the call は判断する、決めるという意味でも使う。","examples":[
        {"en":"I will make a call to the client this afternoon.","ja":"私は今日の午後、顧客へ電話します。","focus":"make","object":"a call"},
        {"en":"The manager made the call to postpone the meeting.","ja":"上司は会議を延期する判断をしました。","focus":"made","object":"the call"},
        {"en":"Can you make a quick call before lunch?","ja":"あなたは昼食前に短く電話できますか？","focus":"make","object":"a quick call"}]},
      {"id":"make-appointment","title":"⑧ make an appointment / 予約・約束を入れる","pattern":"MAKE + appointment / reservation","transitivity":"他動詞","structure":"S + make + O","image":"予定をカレンダー上に作るイメージ。","point":"appointment は面談・訪問予約、reservation は席やホテルの予約に使う。","examples":[
        {"en":"I made an appointment with the client for next Tuesday.","ja":"私は来週火曜日に顧客との面談予定を入れました。","focus":"made","object":"an appointment"},
        {"en":"Can you make a reservation near the station?","ja":"あなたは駅の近くで予約を取れますか？","focus":"make","object":"a reservation"},
        {"en":"We need to make an appointment before visiting the office.","ja":"私たちは事務所を訪問する前に予約を入れる必要があります。","focus":"make","object":"an appointment"}]},
      {"id":"make-progress","title":"⑨ make progress / 進捗を出す","pattern":"MAKE + progress","transitivity":"他動詞","structure":"S + make + O","image":"前に進んだ結果を作るイメージ。","point":"progress, effort, money, profit など抽象的な結果にも使える。","examples":[
        {"en":"We made good progress on the proposal.","ja":"私たちは提案書作成を順調に進めました。","focus":"made","object":"good progress"},
        {"en":"The team is making progress with the new system.","ja":"チームは新しいシステムで進捗を出しています。","focus":"making","object":"progress"},
        {"en":"I want to make more progress this week.","ja":"私は今週さらに進捗を出したいです。","focus":"make","object":"more progress"}]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"make up","ja":"作り上げる・埋め合わせる","image":"足りない部分や全体を作るイメージ。","pattern":"MAKE UP + object","examples":[
        {"en":"These three products make up most of our sales.","ja":"これら3つの商品が私たちの売上の大部分を占めています。","focus":"make up","object":"most of our sales"},
        {"en":"I will make up for the delay this week.","ja":"私は今週、遅れを取り戻します。","focus":"make up for","object":"the delay"},
        {"en":"We need to make up the missing data.","ja":"私たちは不足しているデータを補う必要があります。","focus":"make up","object":"the missing data"}]},
      {"phrase":"make out","ja":"理解する・判別する","image":"ぼんやりしたものを意味ある形にするイメージ。","pattern":"MAKE OUT + object","examples":[
        {"en":"I can't make out the number in this photo.","ja":"私はこの写真の数字を判別できません。","focus":"make out","object":"the number"},
        {"en":"Can you make out what the customer wrote?","ja":"あなたは顧客が書いた内容を読み取れますか？","focus":"make out","object":"what the customer wrote"},
        {"en":"We could not make out the details in the drawing.","ja":"私たちは図面の詳細を判別できませんでした。","focus":"make out","object":"the details"}]},
      {"phrase":"make for","ja":"〜に向かう・〜につながる","image":"ある方向や結果へ進ませるイメージ。","pattern":"MAKE FOR + place / result","examples":[
        {"en":"This clear layout makes for easier discussion.","ja":"この分かりやすいレイアウトにより、話し合いがしやすくなります。","focus":"makes for","object":"easier discussion"},
        {"en":"The team made for the meeting room after lunch.","ja":"チームは昼食後、会議室へ向かいました。","focus":"made for","object":"the meeting room"},
        {"en":"Good preparation makes for a smooth presentation.","ja":"良い準備はスムーズな提案につながります。","focus":"makes for","object":"a smooth presentation"}]},
      {"phrase":"make of","ja":"〜についてどう思うか","image":"情報から自分なりの判断を作るイメージ。","pattern":"MAKE OF + object","examples":[
        {"en":"What do you make of the client's comment?","ja":"あなたは顧客のコメントをどう受け止めていますか？","focus":"make of","object":"the client's comment"},
        {"en":"I don't know what to make of this result.","ja":"私はこの結果をどう判断すればよいか分かりません。","focus":"make of","object":"this result"},
        {"en":"What did your manager make of the proposal?","ja":"あなたの上司はその提案をどう評価しましたか？","focus":"make of","object":"the proposal"}]}
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
    "core": "自分側にあるもの・情報・権限・印象を、相手側へ渡す",
    "coreDetail": "GIVEは『自分から相手へ渡す』動詞です。物を渡すだけでなく、情報を共有する、説明する、許可を出す、機会を与える、印象を与えるなど、仕事のやり取りで非常によく使います。矢印は必ず 自分・自社 → 相手・顧客 側です。",
    "coreVisual": {"from":["🙋 自分・自社","📄 資料","💬 情報","✅ 許可","🎯 機会"],"to":"相手・顧客・チーム","label":"自分側 → 相手側へ渡す"},
    "meanings": [
      {"id":"give-file","title":"① give someone a file / 資料を渡す","pattern":"GIVE + someone + object","transitivity":"他動詞","structure":"S + give + 人 + 物","image":"自分の手元にある資料や物を相手側へ渡すイメージ。","point":"give the client a file / give a file to the client の両方が使える。","examples":[
        {"en":"I gave the client the updated file this morning.","ja":"私は今朝、顧客に更新版ファイルを渡しました。","focus":"gave","object":"the updated file"},
        {"en":"Please give this document to the sales team.","ja":"あなたはこの資料を営業チームに渡してください。","focus":"give","object":"this document"},
        {"en":"We gave the supplier the final drawing yesterday.","ja":"私たちは昨日、仕入先に最終図面を渡しました。","focus":"gave","object":"the final drawing"}
      ],"dailyExamples":[
        {"en":"I gave my friend a small gift.","ja":"私は友人に小さなプレゼントを渡しました。","focus":"gave","object":"a small gift"},
        {"en":"Can you give me the remote?","ja":"あなたはリモコンを取ってくれますか？","focus":"give","object":"me the remote"}
      ]},
      {"id":"give-info","title":"② give information / 情報を伝える","pattern":"GIVE + information / details","transitivity":"他動詞","structure":"S + give + O","image":"自分が持っている情報を相手の理解側へ渡すイメージ。","point":"details, update, answer, instruction と相性が良い。","examples":[
        {"en":"Can you give me more details about the schedule?","ja":"あなたはスケジュールについて、もう少し詳しい情報を教えてくれますか？","focus":"give","object":"more details"},
        {"en":"I will give you an update after the meeting.","ja":"私は会議後にあなたへ進捗を共有します。","focus":"give","object":"an update"},
        {"en":"The engineer gave us clear instructions.","ja":"技術担当者は私たちに分かりやすい指示を出しました。","focus":"gave","object":"clear instructions"}
      ],"dailyExamples":[
        {"en":"Can you give me your address?","ja":"あなたは住所を教えてくれますか？","focus":"give","object":"your address"},
        {"en":"She gave me a good idea for dinner.","ja":"彼女は夕食の良いアイデアを出してくれました。","focus":"gave","object":"a good idea"}
      ]},
      {"id":"give-feedback","title":"③ give feedback / フィードバックする","pattern":"GIVE + feedback / advice","transitivity":"他動詞","structure":"S + give + O","image":"意見や改善点を相手側へ渡すイメージ。","point":"give feedback は自然な仕事表現。give advice は助言する。","examples":[
        {"en":"My manager gave me helpful feedback on the proposal.","ja":"上司は私の提案書について有益なフィードバックをくれました。","focus":"gave","object":"helpful feedback"},
        {"en":"We gave the design team our comments yesterday.","ja":"私たちは昨日、設計チームにコメントを伝えました。","focus":"gave","object":"our comments"},
        {"en":"Can you give me advice before I call the client?","ja":"あなたは私が顧客に電話する前に助言をくれますか？","focus":"give","object":"advice"}
      ],"dailyExamples":[
        {"en":"He gave me advice about studying English.","ja":"彼は英語学習について私に助言してくれました。","focus":"gave","object":"advice"},
        {"en":"I gave my brother honest feedback.","ja":"私は弟に率直な感想を伝えました。","focus":"gave","object":"honest feedback"}
      ]},
      {"id":"give-permission","title":"④ give permission / 許可する","pattern":"GIVE + permission / approval","transitivity":"他動詞","structure":"S + give + O","image":"相手が動ける権限を渡すイメージ。","point":"permission は許可、approval は承認。顧客・上司とのやり取りでよく使う。","examples":[
        {"en":"The client gave us permission to proceed.","ja":"顧客は私たちに進行の許可を出しました。","focus":"gave","object":"permission"},
        {"en":"Our manager gave approval for the order.","ja":"上司はその発注を承認しました。","focus":"gave","object":"approval"},
        {"en":"We cannot start until they give us permission.","ja":"私たちは彼らが許可を出すまで開始できません。","focus":"give","object":"permission"}
      ],"dailyExamples":[
        {"en":"My parents gave me permission to go out.","ja":"両親は私に外出の許可をくれました。","focus":"gave","object":"permission"},
        {"en":"The teacher gave us permission to use the room.","ja":"先生は私たちにその部屋を使う許可をくれました。","focus":"gave","object":"permission"}
      ]},
      {"id":"give-presentation","title":"⑤ give a presentation / 発表する","pattern":"GIVE + presentation / speech","transitivity":"他動詞","structure":"S + give + O","image":"説明や発表を聞き手側へ届けるイメージ。","point":"プレゼン・説明・報告など、話す仕事で使いやすい。","examples":[
        {"en":"I gave a presentation to the client last week.","ja":"私は先週、顧客にプレゼンをしました。","focus":"gave","object":"a presentation"},
        {"en":"She will give a short explanation at the meeting.","ja":"彼女は会議で短く説明します。","focus":"give","object":"a short explanation"},
        {"en":"We gave a report on the project status.","ja":"私たちは案件の進捗について報告しました。","focus":"gave","object":"a report"}
      ],"dailyExamples":[
        {"en":"He gave a speech at the party.","ja":"彼はパーティーでスピーチをしました。","focus":"gave","object":"a speech"},
        {"en":"I gave a short talk about my trip.","ja":"私は旅行について短く話しました。","focus":"gave","object":"a short talk"}
      ]},
      {"id":"give-reason","title":"⑥ give a reason / 理由を示す","pattern":"GIVE + reason / example","transitivity":"他動詞","structure":"S + give + O","image":"相手が納得できる材料を渡すイメージ。","point":"give a reason, give an example で説明を補強できる。","examples":[
        {"en":"He gave a clear reason for the delay.","ja":"彼は遅延について明確な理由を示しました。","focus":"gave","object":"a clear reason"},
        {"en":"Can you give an example in the next meeting?","ja":"あなたは次の会議で例を出せますか？","focus":"give","object":"an example"},
        {"en":"We gave the customer a reason for the price change.","ja":"私たちは顧客に価格変更の理由を説明しました。","focus":"gave","object":"a reason"}
      ],"dailyExamples":[
        {"en":"Please give me one reason.","ja":"理由を1つ教えてください。","focus":"give","object":"one reason"},
        {"en":"She gave a simple example.","ja":"彼女は簡単な例を出しました。","focus":"gave","object":"a simple example"}
      ]},
      {"id":"give-chance","title":"⑦ give a chance / 機会を与える","pattern":"GIVE + chance / opportunity","transitivity":"他動詞","structure":"S + give + O","image":"相手が動ける機会を渡すイメージ。","point":"chance は会話的、opportunity は少し丁寧。","examples":[
        {"en":"This project gave us a new opportunity.","ja":"この案件は私たちに新しい機会を与えてくれました。","focus":"gave","object":"a new opportunity"},
        {"en":"The manager gave him a chance to lead the meeting.","ja":"上司は彼に会議を進行する機会を与えました。","focus":"gave","object":"a chance"},
        {"en":"Can we give the supplier another chance?","ja":"私たちはその仕入先にもう一度機会を与えられますか？","focus":"give","object":"another chance"}
      ],"dailyExamples":[
        {"en":"Please give me a chance to explain.","ja":"説明する機会をください。","focus":"give","object":"a chance"},
        {"en":"The trip gave me a chance to relax.","ja":"その旅行は私にリラックスする機会をくれました。","focus":"gave","object":"a chance"}
      ]},
      {"id":"give-impression","title":"⑧ give an impression / 印象を与える","pattern":"GIVE + impression","transitivity":"他動詞","structure":"S + give + O","image":"相手の中に印象を残すイメージ。","point":"proposal, design, product などの評価を話す時に使える。","examples":[
        {"en":"The proposal gave a professional impression.","ja":"その提案書はプロらしい印象を与えました。","focus":"gave","object":"a professional impression"},
        {"en":"This design gives a clean impression.","ja":"このデザインはすっきりした印象を与えます。","focus":"gives","object":"a clean impression"},
        {"en":"The first email gave the client confidence.","ja":"最初のメールは顧客に安心感を与えました。","focus":"gave","object":"the client confidence"}
      ],"dailyExamples":[
        {"en":"The room gives a warm impression.","ja":"その部屋は温かい印象を与えます。","focus":"gives","object":"a warm impression"},
        {"en":"His smile gave me confidence.","ja":"彼の笑顔は私に自信をくれました。","focus":"gave","object":"me confidence"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"give up","ja":"諦める・やめる","image":"持っていたものを手放すイメージ。","pattern":"GIVE UP + object / GIVE UP","examples":[
        {"en":"We should not give up on this client yet.","ja":"私たちはまだこの顧客を諦めるべきではありません。","focus":"give up","object":"on this client"},
        {"en":"He gave up the idea after the cost review.","ja":"彼はコスト確認後、その案を諦めました。","focus":"gave up","object":"the idea"},
        {"en":"I almost gave up during the negotiation.","ja":"私は交渉中に諦めそうになりました。","focus":"gave up","object":"during the negotiation"}
      ]},
      {"phrase":"give back","ja":"返す","image":"受け取ったものを相手側へ戻すイメージ。","pattern":"GIVE BACK + object","examples":[
        {"en":"Please give back the sample after the test.","ja":"あなたは試験後にサンプルを返してください。","focus":"give back","object":"the sample"},
        {"en":"I gave back the borrowed equipment yesterday.","ja":"私は昨日、借りた機器を返しました。","focus":"gave back","object":"the borrowed equipment"},
        {"en":"Can you give the file back to the design team?","ja":"あなたはそのファイルを設計チームに返せますか？","focus":"give back","object":"the file"}
      ]},
      {"phrase":"give out","ja":"配る・発表する","image":"複数の相手へ外向きに出すイメージ。","pattern":"GIVE OUT + object","examples":[
        {"en":"We gave out the new price list at the meeting.","ja":"私たちは会議で新しい価格表を配りました。","focus":"gave out","object":"the new price list"},
        {"en":"The company will give out the results tomorrow.","ja":"会社は明日、結果を発表します。","focus":"give out","object":"the results"},
        {"en":"Please give out these documents before the training.","ja":"あなたは研修前にこれらの資料を配ってください。","focus":"give out","object":"these documents"}
      ]},
      {"phrase":"give in","ja":"折れる・受け入れる","image":"抵抗していた状態から相手側へ譲るイメージ。","pattern":"GIVE IN","examples":[
        {"en":"We cannot give in on the safety requirement.","ja":"私たちは安全要件について譲ることはできません。","focus":"give in","object":"on the safety requirement"},
        {"en":"The supplier finally gave in on the delivery date.","ja":"仕入先は最終的に納期について譲歩しました。","focus":"gave in","object":"on the delivery date"},
        {"en":"I do not want to give in too quickly during negotiation.","ja":"私は交渉中に早く譲歩しすぎたくありません。","focus":"give in","object":"during negotiation"}
      ]},
      {"phrase":"give away","ja":"無料で渡す・うっかり明かす","image":"自分側のものや情報を外へ出してしまうイメージ。","pattern":"GIVE AWAY + object","examples":[
        {"en":"We should not give away the discount too early.","ja":"私たちは早い段階で値引きを出しすぎるべきではありません。","focus":"give away","object":"the discount"},
        {"en":"He gave away important details during the call.","ja":"彼は電話中に重要な詳細をうっかり話してしまいました。","focus":"gave away","object":"important details"},
        {"en":"The campaign gives away samples to new customers.","ja":"そのキャンペーンでは新規顧客にサンプルを配ります。","focus":"gives away","object":"samples"}
      ]}
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
    "core": "自分の範囲の中に持っている・抱えている",
    "coreDetail": "HAVEは『自分の範囲内にある』感覚です。物を持つだけでなく、予定がある、問題を抱えている、経験する、会議を行う、誰かに何かしてもらう、という仕事で使う形につながります。",
    "coreVisual": {"from":["📦 物","📅 予定","💬 会議","⚠️ 問題","👤 担当者"],"to":"自分・自社の範囲内","label":"自分の範囲内にある"},
    "meanings": [
      {"id":"have-item","title":"① have a file / 持っている","pattern":"HAVE + object","transitivity":"他動詞","structure":"S + have + O","image":"物や情報が自分の範囲内にあるイメージ。","point":"have は所有だけでなく、資料・情報・在庫にも使える。","examples":[
        {"en":"I have the latest price list.","ja":"私は最新版の価格表を持っています。","focus":"have","object":"the latest price list"},
        {"en":"Do you have the drawings from the client?","ja":"あなたは顧客からの図面を持っていますか？","focus":"have","object":"the drawings"},
        {"en":"We have enough stock for this order.","ja":"私たちはこの注文に必要な在庫を十分に持っています。","focus":"have","object":"enough stock"}
      ],"dailyExamples":[
        {"en":"I have a new bag.","ja":"私は新しいバッグを持っています。","focus":"have","object":"a new bag"},
        {"en":"Do you have your phone?","ja":"あなたは携帯を持っていますか？","focus":"have","object":"your phone"}
      ]},
      {"id":"have-meeting","title":"② have a meeting / 会議を行う","pattern":"HAVE + meeting / call","transitivity":"他動詞","structure":"S + have + O","image":"会議や電話の時間を自分たちの予定内に持つイメージ。","point":"meeting, call, discussion, interview とよく使う。","examples":[
        {"en":"We have a meeting with the client at two.","ja":"私たちは2時に顧客との会議があります。","focus":"have","object":"a meeting"},
        {"en":"I had a short call with the supplier.","ja":"私は仕入先と短く電話しました。","focus":"had","object":"a short call"},
        {"en":"Can we have a quick discussion before lunch?","ja":"私たちは昼食前に少し打ち合わせできますか？","focus":"have","object":"a quick discussion"}
      ],"dailyExamples":[
        {"en":"We had dinner together.","ja":"私たちは一緒に夕食を食べました。","focus":"had","object":"dinner"},
        {"en":"I had a good time yesterday.","ja":"私は昨日楽しい時間を過ごしました。","focus":"had","object":"a good time"}
      ]},
      {"id":"have-schedule","title":"③ have time / 予定・時間がある","pattern":"HAVE + time / schedule","transitivity":"他動詞","structure":"S + have + O","image":"時間や予定が自分のカレンダー内にあるイメージ。","point":"Do you have time? は仕事でかなり使いやすい。","examples":[
        {"en":"Do you have time to review the quotation today?","ja":"あなたは今日、見積書を確認する時間がありますか？","focus":"have","object":"time"},
        {"en":"I have another appointment this afternoon.","ja":"私は今日の午後、別の予定があります。","focus":"have","object":"another appointment"},
        {"en":"We do not have enough time before the deadline.","ja":"私たちは締切まで十分な時間がありません。","focus":"have","object":"enough time"}
      ],"dailyExamples":[
        {"en":"Do you have time this weekend?","ja":"あなたは今週末、時間がありますか？","focus":"have","object":"time"},
        {"en":"I have plans tonight.","ja":"私は今夜予定があります。","focus":"have","object":"plans"}
      ]},
      {"id":"have-problem","title":"④ have a problem / 問題がある","pattern":"HAVE + problem / issue","transitivity":"他動詞","structure":"S + have + O","image":"問題が自分たちの範囲内にあるイメージ。","point":"problem は一般的な問題、issue は仕事上の課題・確認事項にも使う。","examples":[
        {"en":"We have a problem with the delivery schedule.","ja":"私たちは納期スケジュールに問題があります。","focus":"have","object":"a problem"},
        {"en":"The customer had an issue with the installation.","ja":"顧客は設置に関する問題を抱えていました。","focus":"had","object":"an issue"},
        {"en":"Do you have any concerns about this proposal?","ja":"あなたはこの提案について懸念点がありますか？","focus":"have","object":"any concerns"}
      ],"dailyExamples":[
        {"en":"I have a problem with my computer.","ja":"私はパソコンに問題があります。","focus":"have","object":"a problem"},
        {"en":"Do you have any questions?","ja":"質問はありますか？","focus":"have","object":"any questions"}
      ]},
      {"id":"have-experience","title":"⑤ have experience / 経験がある","pattern":"HAVE + experience","transitivity":"他動詞","structure":"S + have + O","image":"経験が自分の中に蓄積されているイメージ。","point":"experience with ... で『〜の経験』。営業・採用・自己紹介で使える。","examples":[
        {"en":"Our team has experience with RGB projects.","ja":"私たちのチームはRGB案件の経験があります。","focus":"has","object":"experience"},
        {"en":"Do you have experience using this system?","ja":"あなたはこのシステムを使った経験がありますか？","focus":"have","object":"experience"},
        {"en":"He had no experience with overseas orders before.","ja":"彼は以前、海外発注の経験がありませんでした。","focus":"had","object":"no experience"}
      ],"dailyExamples":[
        {"en":"I have experience teaching children.","ja":"私は子どもに教えた経験があります。","focus":"have","object":"experience"},
        {"en":"She has experience living abroad.","ja":"彼女は海外生活の経験があります。","focus":"has","object":"experience"}
      ]},
      {"id":"have-someone-do","title":"⑥ have someone do / 人に〜してもらう","pattern":"HAVE + someone + do","transitivity":"他動詞","structure":"S + have + O + C","image":"人や担当者を自分の段取り内に置いて動いてもらうイメージ。","point":"get someone to do より、手配・指示のニュアンスが出やすい。","examples":[
        {"en":"I will have the engineer check the settings.","ja":"私は技術担当者に設定を確認してもらいます。","focus":"have","object":"the engineer check the settings"},
        {"en":"We had the supplier send the sample again.","ja":"私たちは仕入先にサンプルを再送してもらいました。","focus":"had","object":"the supplier send the sample again"},
        {"en":"Can you have someone review this document?","ja":"あなたは誰かにこの資料を確認してもらえますか？","focus":"have","object":"someone review this document"}
      ],"dailyExamples":[
        {"en":"I had my brother fix the shelf.","ja":"私は兄に棚を直してもらいました。","focus":"had","object":"my brother fix the shelf"},
        {"en":"Can you have someone call me?","ja":"誰かに私へ電話してもらえますか？","focus":"have","object":"someone call me"}
      ]},
      {"id":"have-done","title":"⑦ have something done / 〜してもらう・済ませる","pattern":"HAVE + object + done","transitivity":"他動詞","structure":"S + have + O + C","image":"物や作業を完了した状態にしてもらうイメージ。","point":"have the document checked のように、受け身的な完了状態を作る。","examples":[
        {"en":"We had the report checked by the manager.","ja":"私たちは上司に報告書を確認してもらいました。","focus":"had","object":"the report checked"},
        {"en":"I will have the sample delivered by Friday.","ja":"私は金曜日までにサンプルを配送してもらいます。","focus":"have","object":"the sample delivered"},
        {"en":"Can you have the quotation revised today?","ja":"あなたは今日、見積書を修正してもらえますか？","focus":"have","object":"the quotation revised"}
      ],"dailyExamples":[
        {"en":"I had my hair cut yesterday.","ja":"私は昨日、髪を切ってもらいました。","focus":"had","object":"my hair cut"},
        {"en":"We had the car repaired.","ja":"私たちは車を修理してもらいました。","focus":"had","object":"the car repaired"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"have on","ja":"身につけている・予定がある","image":"服や予定が自分に乗っているイメージ。","pattern":"HAVE ON + clothes / plan","examples":[
        {"en":"He had a jacket on during the site visit.","ja":"彼は現場訪問中、ジャケットを着ていました。","focus":"had on","object":"a jacket"},
        {"en":"Do you have anything on this afternoon?","ja":"あなたは今日の午後、何か予定がありますか？","focus":"have on","object":"anything"},
        {"en":"I have a client meeting on tomorrow morning.","ja":"私は明日の朝、顧客会議の予定があります。","focus":"have on","object":"a client meeting"}
      ]},
      {"phrase":"have over","ja":"家や会社に招く","image":"相手を自分側の場所へ迎えるイメージ。","pattern":"HAVE OVER + someone","examples":[
        {"en":"We had the partner over for a product demo.","ja":"私たちは製品デモのためにパートナーを招きました。","focus":"had over","object":"the partner"},
        {"en":"Can we have the client over next month?","ja":"私たちは来月、顧客を招けますか？","focus":"have over","object":"the client"},
        {"en":"They had us over to discuss the new project.","ja":"彼らは新案件を話し合うために私たちを招きました。","focus":"had over","object":"us"}
      ]},
      {"phrase":"have around","ja":"近くに置いておく・周りにいる","image":"自分の周囲に人や物があるイメージ。","pattern":"HAVE AROUND + object","examples":[
        {"en":"It is useful to have the manual around during installation.","ja":"設置中はマニュアルを近くに置いておくと便利です。","focus":"have around","object":"the manual"},
        {"en":"We should have a technician around during the test.","ja":"私たちは試験中、技術者に近くにいてもらうべきです。","focus":"have around","object":"a technician"},
        {"en":"Do you have spare parts around?","ja":"あなたは予備部品を近くに置いていますか？","focus":"have around","object":"spare parts"}
      ]},
      {"phrase":"have to","ja":"〜しなければならない","image":"やるべきことが自分の範囲内にあるイメージ。","pattern":"HAVE TO + do","examples":[
        {"en":"We have to confirm the delivery date today.","ja":"私たちは今日、納期を確認しなければなりません。","focus":"have to","object":"confirm the delivery date"},
        {"en":"I had to call the client again.","ja":"私は顧客にもう一度電話しなければなりませんでした。","focus":"had to","object":"call the client again"},
        {"en":"Do you have to submit the report by Friday?","ja":"あなたは金曜日までに報告書を提出しなければなりませんか？","focus":"have to","object":"submit the report"}
      ]},
      {"phrase":"have got","ja":"持っている・〜がある","image":"手元に入った結果、今持っているイメージ。","pattern":"HAVE GOT + object","examples":[
        {"en":"We have got enough information now.","ja":"私たちは今、十分な情報を持っています。","focus":"have got","object":"enough information"},
        {"en":"I have got a question about the quotation.","ja":"私は見積書について質問があります。","focus":"have got","object":"a question"},
        {"en":"Have you got the latest file?","ja":"あなたは最新版ファイルを持っていますか？","focus":"have got","object":"the latest file"}
      ]}
    ]
  },
  {
    "id": "go",
    "rank": 6,
    "word": "GO",
    "ipa": "/ɡoʊ/",
    "kana": "ゴウ",
    "syllable": "go",
    "transitivity": "自動詞中心",
    "importance": "★★★★★ 超重要",
    "core": "今いる場所・状態から、別の場所・方向・状態へ進む",
    "coreDetail": "GOは『離れて進む』動詞です。場所へ行く、会議へ出る、物事が進む、状態が悪くなる、予定どおり進む、という使い方までつながります。矢印は現在地・現在状態 → 目的地・次の状態です。",
    "coreVisual": {"from":["📍 現在地","🗓️ 今の予定","📊 現在の状況","👤 自分"],"to":"目的地・次の状態・進行方向","label":"現在地・状態 → 先へ進む"},
    "meanings": [
      {"id":"go-place","title":"① go to a place / 行く","pattern":"GO TO + place","transitivity":"自動詞","structure":"S + go + to 場所","image":"今いる場所から目的地へ進むイメージ。","point":"場所には go to。home は to を付けず go home。","examples":[
        {"en":"I will go to the client site tomorrow morning.","ja":"私は明日の朝、顧客の現場へ行きます。","focus":"go","object":"to the client site"},
        {"en":"We went to the factory for the inspection.","ja":"私たちは検査のために工場へ行きました。","focus":"went","object":"to the factory"},
        {"en":"Can you go to the meeting room at three?","ja":"あなたは3時に会議室へ行けますか？","focus":"go","object":"to the meeting room"}
      ],"dailyExamples":[
        {"en":"I go to the station by bus.","ja":"私はバスで駅へ行きます。","focus":"go","object":"to the station"},
        {"en":"We went home after dinner.","ja":"私たちは夕食後に帰宅しました。","focus":"went","object":"home"}
      ]},
      {"id":"go-meeting","title":"② go to a meeting / 会議・予定に出る","pattern":"GO TO + meeting / event","transitivity":"自動詞","structure":"S + go + to 予定","image":"予定されている場所やイベントへ参加しに進むイメージ。","point":"attend より会話的。go to a meeting で自然に使える。","examples":[
        {"en":"I have to go to a meeting at four.","ja":"私は4時に会議へ行かなければなりません。","focus":"go","object":"to a meeting"},
        {"en":"She went to the product training last week.","ja":"彼女は先週、製品研修に参加しました。","focus":"went","object":"to the product training"},
        {"en":"Are you going to the trade show next month?","ja":"あなたは来月、展示会へ行きますか？","focus":"going","object":"to the trade show"}
      ],"dailyExamples":[
        {"en":"I went to a concert last night.","ja":"私は昨夜、コンサートへ行きました。","focus":"went","object":"to a concert"},
        {"en":"Are you going to the party?","ja":"あなたはパーティーへ行きますか？","focus":"going","object":"to the party"}
      ]},
      {"id":"go-well","title":"③ go well / うまくいく","pattern":"GO + adverb/adjective","transitivity":"自動詞","structure":"S + go + C/M","image":"物事が良い方向へ進むイメージ。","point":"meeting went well は仕事で非常によく使う。","examples":[
        {"en":"The meeting went well yesterday.","ja":"昨日の会議はうまくいきました。","focus":"went","object":"well"},
        {"en":"I hope the presentation goes well.","ja":"私はプレゼンがうまくいくことを願っています。","focus":"goes","object":"well"},
        {"en":"Did the installation go smoothly?","ja":"設置は順調に進みましたか？","focus":"go","object":"smoothly"}
      ],"dailyExamples":[
        {"en":"The trip went well.","ja":"旅行はうまくいきました。","focus":"went","object":"well"},
        {"en":"I hope your exam goes well.","ja":"試験がうまくいくといいですね。","focus":"goes","object":"well"}
      ]},
      {"id":"go-ahead","title":"④ go ahead / 進める・先に行う","pattern":"GO AHEAD","transitivity":"自動詞","structure":"S + go ahead","image":"止まらず前に進むイメージ。","point":"許可や判断後に、作業を進める意味で使う。","examples":[
        {"en":"We can go ahead with the order after approval.","ja":"私たちは承認後に発注を進められます。","focus":"go ahead","object":"with the order"},
        {"en":"Please go ahead and send the quotation.","ja":"あなたはそのまま見積書を送ってください。","focus":"go ahead","object":"and send the quotation"},
        {"en":"The client told us to go ahead with the plan.","ja":"顧客は私たちにその計画を進めるよう伝えました。","focus":"go ahead","object":"with the plan"}
      ],"dailyExamples":[
        {"en":"Please go ahead without me.","ja":"私を待たずに先に進んでください。","focus":"go ahead","object":"without me"},
        {"en":"Can I go ahead and open it?","ja":"開けてもいいですか？","focus":"go ahead","object":"and open it"}
      ]},
      {"id":"go-over","title":"⑤ go over / 確認する・見直す","pattern":"GO OVER + object","transitivity":"自動詞句","structure":"S + go over + O","image":"資料の上を一通り進みながら確認するイメージ。","point":"review に近いが、会議前の確認で自然。","examples":[
        {"en":"Let's go over the proposal before the meeting.","ja":"私たちは会議前に提案書を確認しましょう。","focus":"go over","object":"the proposal"},
        {"en":"I went over the quotation with my manager.","ja":"私は上司と一緒に見積書を確認しました。","focus":"went over","object":"the quotation"},
        {"en":"Can you go over the schedule once more?","ja":"あなたはスケジュールをもう一度確認できますか？","focus":"go over","object":"the schedule"}
      ],"dailyExamples":[
        {"en":"I went over my notes before the test.","ja":"私はテスト前にノートを見直しました。","focus":"went over","object":"my notes"},
        {"en":"Let's go over the plan for tomorrow.","ja":"明日の予定を確認しましょう。","focus":"go over","object":"the plan"}
      ]},
      {"id":"go-wrong","title":"⑥ go wrong / うまくいかなくなる","pattern":"GO + wrong / bad","transitivity":"自動詞","structure":"S + go + C","image":"状態が悪い方向へ進むイメージ。","point":"何が悪化したかを説明するときに便利。","examples":[
        {"en":"Something went wrong with the system update.","ja":"システム更新で何か問題が起きました。","focus":"went","object":"wrong"},
        {"en":"The installation went wrong because of the wiring issue.","ja":"配線の問題で設置がうまくいきませんでした。","focus":"went","object":"wrong"},
        {"en":"If anything goes wrong, please call me immediately.","ja":"何か問題が起きたら、すぐに私へ電話してください。","focus":"goes","object":"wrong"}
      ],"dailyExamples":[
        {"en":"Something went wrong with my phone.","ja":"私の携帯に何か問題が起きました。","focus":"went","object":"wrong"},
        {"en":"The plan went wrong at the last minute.","ja":"その計画は最後の最後でうまくいかなくなりました。","focus":"went","object":"wrong"}
      ]},
      {"id":"go-with","title":"⑦ go with / 〜に合う・〜を選ぶ","pattern":"GO WITH + object","transitivity":"自動詞句","structure":"S + go with + O","image":"候補や組み合わせの方向へ進むイメージ。","point":"デザイン・案・選択肢を決める時に使える。","examples":[
        {"en":"This color goes well with the sign design.","ja":"この色は看板デザインによく合います。","focus":"goes","object":"well with the sign design"},
        {"en":"We decided to go with the second proposal.","ja":"私たちは2つ目の提案で進めることにしました。","focus":"go","object":"with the second proposal"},
        {"en":"Can we go with this schedule?","ja":"私たちはこのスケジュールで進められますか？","focus":"go","object":"with this schedule"}
      ],"dailyExamples":[
        {"en":"This shirt goes well with black pants.","ja":"このシャツは黒いズボンによく合います。","focus":"goes","object":"well with black pants"},
        {"en":"I will go with the simple option.","ja":"私はシンプルな選択肢にします。","focus":"go","object":"with the simple option"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"go ahead","ja":"進める・先に行う","image":"止まらず前へ進むイメージ。","pattern":"GO AHEAD","examples":[
        {"en":"Please go ahead with the shipment.","ja":"あなたは出荷を進めてください。","focus":"go ahead","object":"with the shipment"},
        {"en":"We went ahead with the meeting without him.","ja":"私たちは彼なしで会議を進めました。","focus":"went ahead","object":"with the meeting"},
        {"en":"Can I go ahead and contact the customer?","ja":"私は顧客に連絡してもよいですか？","focus":"go ahead","object":"and contact the customer"}
      ]},
      {"phrase":"go over","ja":"確認する・見直す","image":"資料の上を一通り通るイメージ。","pattern":"GO OVER + object","examples":[
        {"en":"Let's go over the action items.","ja":"私たちは対応事項を確認しましょう。","focus":"go over","object":"the action items"},
        {"en":"I went over the email before sending it.","ja":"私は送信前にそのメールを見直しました。","focus":"went over","object":"the email"},
        {"en":"Please go over the estimate again.","ja":"あなたは見積をもう一度確認してください。","focus":"go over","object":"the estimate"}
      ]},
      {"phrase":"go through","ja":"通過する・経験する・確認する","image":"中を通り抜けながら進むイメージ。","pattern":"GO THROUGH + object","examples":[
        {"en":"We went through the contract line by line.","ja":"私たちは契約書を1行ずつ確認しました。","focus":"went through","object":"the contract"},
        {"en":"The team went through a difficult period.","ja":"チームは難しい時期を経験しました。","focus":"went through","object":"a difficult period"},
        {"en":"Can you go through the checklist before delivery?","ja":"あなたは納品前にチェックリストを確認できますか？","focus":"go through","object":"the checklist"}
      ]},
      {"phrase":"go back","ja":"戻る","image":"前にいた場所や状態へ戻るイメージ。","pattern":"GO BACK","examples":[
        {"en":"I need to go back to the office after the visit.","ja":"私は訪問後、事務所へ戻る必要があります。","focus":"go back","object":"to the office"},
        {"en":"Let's go back to the original plan.","ja":"私たちは元の計画に戻りましょう。","focus":"go back","object":"to the original plan"},
        {"en":"The customer went back to the previous design.","ja":"顧客は前のデザインに戻しました。","focus":"went back","object":"to the previous design"}
      ]},
      {"phrase":"go on","ja":"続く・続ける","image":"止まらずそのまま進むイメージ。","pattern":"GO ON","examples":[
        {"en":"The meeting went on longer than expected.","ja":"会議は予定より長く続きました。","focus":"went on","object":"longer than expected"},
        {"en":"Please go on with your explanation.","ja":"あなたは説明を続けてください。","focus":"go on","object":"with your explanation"},
        {"en":"The issue went on for two weeks.","ja":"その問題は2週間続きました。","focus":"went on","object":"for two weeks"}
      ]}
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
    "core": "人・物・情報・予定が、話し手側や話題の中心へ近づく",
    "coreDetail": "COMEは『こちら側へ近づく』が中心です。人が来るだけでなく、依頼が来る、締切が近づく、結果に至る、商品に付属する、という使い方も同じ流れで理解できます。",
    "coreVisual": {
      "from": [
        "👤 顧客",
        "📩 依頼",
        "⏰ 締切",
        "📦 商品",
        "💡 結論"
      ],
      "to": "自分・自社・話題の中心",
      "label": "外側・先の予定 → こちら側へ近づく"
    },
    "meanings": [
      {
        "id": "come-to-office",
        "title": "① come to the office / 会社に来る",
        "pattern": "COME + to + 場所",
        "transitivity": "自動詞",
        "structure": "S + come + to + 場所",
        "image": "人がこちら側・話題の場所へ近づくイメージ。",
        "point": "goは離れて行く方向、comeは話し手や予定の中心へ来る方向。",
        "examples": [
          {
            "en": "The client came to our office this morning.",
            "ja": "顧客は今朝、弊社に来ました。",
            "focus": "came",
            "object": "to our office"
          },
          {
            "en": "Can you come to the meeting at three?",
            "ja": "あなたは3時の会議に来られますか？",
            "focus": "come",
            "object": "to the meeting"
          },
          {
            "en": "The engineer will come to the site tomorrow.",
            "ja": "技術担当者は明日、現場に来ます。",
            "focus": "come",
            "object": "to the site"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please come here for a minute.",
            "ja": "少しこちらに来てください。",
            "focus": "come",
            "object": "here"
          },
          {
            "en": "My friend came to my house last weekend.",
            "ja": "友人が先週末、私の家に来ました。",
            "focus": "came",
            "object": "to my house"
          }
        ]
      },
      {
        "id": "come-from",
        "title": "② come from / 〜から来る・届く",
        "pattern": "COME + from + 人/場所",
        "transitivity": "自動詞",
        "structure": "S + come + from + 人/場所",
        "image": "依頼・情報・物が外部からこちらへ届くイメージ。",
        "point": "仕事では request, question, message, instruction などとよく使う。",
        "examples": [
          {
            "en": "The request came from the Singapore office.",
            "ja": "その依頼はシンガポール本社から来ました。",
            "focus": "came",
            "object": "from the Singapore office"
          },
          {
            "en": "This question came from the customer.",
            "ja": "この質問は顧客から来ました。",
            "focus": "came",
            "object": "from the customer"
          },
          {
            "en": "The instruction came from our manager.",
            "ja": "その指示は私たちの上司から来ました。",
            "focus": "came",
            "object": "from our manager"
          }
        ],
        "dailyExamples": [
          {
            "en": "This gift came from my friend.",
            "ja": "この贈り物は友人から届きました。",
            "focus": "came",
            "object": "from my friend"
          },
          {
            "en": "The smell comes from the kitchen.",
            "ja": "そのにおいは台所から来ています。",
            "focus": "comes",
            "object": "from the kitchen"
          }
        ]
      },
      {
        "id": "come-soon",
        "title": "③ come soon / 近づく",
        "pattern": "COME + soon / next / in 日数",
        "transitivity": "自動詞",
        "structure": "S + come + 副詞",
        "image": "予定や締切が今の地点へ近づいてくるイメージ。",
        "point": "deadline, meeting, event, delivery date などと相性が良い。",
        "examples": [
          {
            "en": "The deadline is coming soon.",
            "ja": "締切がもうすぐ近づいています。",
            "focus": "coming",
            "object": "soon"
          },
          {
            "en": "The delivery date is coming next week.",
            "ja": "納品日は来週に迫っています。",
            "focus": "coming",
            "object": "next week"
          },
          {
            "en": "Our next meeting comes after the site visit.",
            "ja": "次の会議は現場訪問の後にあります。",
            "focus": "comes",
            "object": "after the site visit"
          }
        ],
        "dailyExamples": [
          {
            "en": "Summer is coming soon.",
            "ja": "夏がもうすぐ来ます。",
            "focus": "coming",
            "object": "soon"
          },
          {
            "en": "My birthday comes in July.",
            "ja": "私の誕生日は7月に来ます。",
            "focus": "comes",
            "object": "in July"
          }
        ]
      },
      {
        "id": "come-to-conclusion",
        "title": "④ come to a conclusion / 結論に至る",
        "pattern": "COME + to + conclusion/decision",
        "transitivity": "自動詞句",
        "structure": "S + come + to + O",
        "image": "話し合いが進み、結論という地点に到達するイメージ。",
        "point": "decideより少し『話し合いの結果そこにたどり着いた』感じが出る。",
        "examples": [
          {
            "en": "We came to the same conclusion after the meeting.",
            "ja": "私たちは会議後、同じ結論に至りました。",
            "focus": "came",
            "object": "to the same conclusion"
          },
          {
            "en": "The team came to a decision this morning.",
            "ja": "チームは今朝、決定に至りました。",
            "focus": "came",
            "object": "to a decision"
          },
          {
            "en": "Did you come to any conclusion about the price?",
            "ja": "あなたは価格について何か結論に至りましたか？",
            "focus": "come",
            "object": "to any conclusion"
          }
        ],
        "dailyExamples": [
          {
            "en": "We came to a simple answer.",
            "ja": "私たちはシンプルな答えにたどり着きました。",
            "focus": "came",
            "object": "to a simple answer"
          },
          {
            "en": "I finally came to a decision.",
            "ja": "私はようやく決めました。",
            "focus": "came",
            "object": "to a decision"
          }
        ]
      },
      {
        "id": "come-with",
        "title": "⑤ come with / 付いている",
        "pattern": "COME + with + 付属物",
        "transitivity": "自動詞句",
        "structure": "S + come + with + O",
        "image": "商品やサービスが、付属物を一緒に連れてくるイメージ。",
        "point": "warranty, manual, cable, remote など商品説明で便利。",
        "examples": [
          {
            "en": "The product comes with a two-year warranty.",
            "ja": "その製品には2年保証が付いています。",
            "focus": "comes",
            "object": "with a two-year warranty"
          },
          {
            "en": "This sample comes with a simple manual.",
            "ja": "このサンプルには簡単な説明書が付いています。",
            "focus": "comes",
            "object": "with a simple manual"
          },
          {
            "en": "Does the controller come with a cable?",
            "ja": "そのコントローラーにはケーブルが付いていますか？",
            "focus": "come",
            "object": "with a cable"
          }
        ],
        "dailyExamples": [
          {
            "en": "The toy comes with batteries.",
            "ja": "そのおもちゃには電池が付いています。",
            "focus": "comes",
            "object": "with batteries"
          },
          {
            "en": "This room comes with free Wi-Fi.",
            "ja": "この部屋には無料Wi-Fiが付いています。",
            "focus": "comes",
            "object": "with free Wi-Fi"
          }
        ]
      },
      {
        "id": "come-in",
        "title": "⑥ come in / 入る・届く",
        "pattern": "COME + in",
        "transitivity": "自動詞",
        "structure": "S + come + in",
        "image": "外から中へ入ってくるイメージ。",
        "point": "注文・問い合わせ・情報が入る場面で自然に使える。",
        "examples": [
          {
            "en": "A new order came in this afternoon.",
            "ja": "今日の午後、新しい注文が入りました。",
            "focus": "came",
            "object": "in"
          },
          {
            "en": "Several questions came in after the presentation.",
            "ja": "プレゼン後にいくつか質問が入りました。",
            "focus": "came",
            "object": "in"
          },
          {
            "en": "Please let me know when the payment comes in.",
            "ja": "入金が入ったら私に知らせてください。",
            "focus": "comes",
            "object": "in"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please come in.",
            "ja": "中に入ってください。",
            "focus": "come",
            "object": "in"
          },
          {
            "en": "A message came in while I was out.",
            "ja": "外出中にメッセージが入りました。",
            "focus": "came",
            "object": "in"
          }
        ]
      },
      {
        "id": "come-first",
        "title": "⑦ come first / 最優先になる",
        "pattern": "COME + first",
        "transitivity": "自動詞",
        "structure": "S + come + first",
        "image": "順位や大切さが一番前に来るイメージ。",
        "point": "Quality comes first. は仕事でも日常でもよく使う。",
        "examples": [
          {
            "en": "Quality comes first in this project.",
            "ja": "この案件では品質が最優先です。",
            "focus": "comes",
            "object": "first"
          },
          {
            "en": "Safety comes first during installation.",
            "ja": "設置作業では安全が最優先です。",
            "focus": "comes",
            "object": "first"
          },
          {
            "en": "The customer request comes first this week.",
            "ja": "今週は顧客の依頼が最優先です。",
            "focus": "comes",
            "object": "first"
          }
        ],
        "dailyExamples": [
          {
            "en": "Family comes first for me.",
            "ja": "私にとって家族が最優先です。",
            "focus": "comes",
            "object": "first"
          },
          {
            "en": "Health should come first.",
            "ja": "健康を最優先にすべきです。",
            "focus": "come",
            "object": "first"
          }
        ]
      },
      {
        "id": "come-as",
        "title": "⑧ come as / 〜として受け取られる",
        "pattern": "COME + as + 名詞/形容詞",
        "transitivity": "自動詞句",
        "structure": "S + come + as + C",
        "image": "情報や発言が、相手にある印象として届くイメージ。",
        "point": "come as a surprise は『驚きとして来る＝驚きになる』。",
        "examples": [
          {
            "en": "The sudden change came as a surprise to the team.",
            "ja": "突然の変更はチームにとって驚きでした。",
            "focus": "came",
            "object": "as a surprise"
          },
          {
            "en": "His comment came as a warning to us.",
            "ja": "彼のコメントは私たちへの警告のように受け取られました。",
            "focus": "came",
            "object": "as a warning"
          },
          {
            "en": "The price increase came as bad news to the customer.",
            "ja": "値上げは顧客にとって悪い知らせでした。",
            "focus": "came",
            "object": "as bad news"
          }
        ],
        "dailyExamples": [
          {
            "en": "The result came as a shock.",
            "ja": "その結果はショックでした。",
            "focus": "came",
            "object": "as a shock"
          },
          {
            "en": "Her message came as good news.",
            "ja": "彼女のメッセージは良い知らせでした。",
            "focus": "came",
            "object": "as good news"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "come up",
        "ja": "出てくる・発生する",
        "image": "課題や話題が下から表面に上がってくるイメージ。",
        "pattern": "COME UP",
        "examples": [
          {
            "en": "A new issue came up during the meeting.",
            "ja": "会議中に新しい課題が出ました。",
            "focus": "came up",
            "object": "during the meeting"
          },
          {
            "en": "If any questions come up, please contact me.",
            "ja": "何か質問が出たら、私に連絡してください。",
            "focus": "come up"
          },
          {
            "en": "This topic came up in the customer call.",
            "ja": "この話題は顧客との電話で出ました。",
            "focus": "came up",
            "object": "in the customer call"
          }
        ]
      },
      {
        "phrase": "come back",
        "ja": "戻る・復旧する",
        "image": "一度離れたものが、元の場所や状態へ戻ってくるイメージ。",
        "pattern": "COME BACK",
        "examples": [
          {
            "en": "I will come back to you after checking the stock.",
            "ja": "在庫確認後、あなたに折り返します。",
            "focus": "come back",
            "object": "to you"
          },
          {
            "en": "The system came back online after the update.",
            "ja": "更新後、システムはオンラインに復旧しました。",
            "focus": "came back",
            "object": "online"
          },
          {
            "en": "The client came back with a few questions.",
            "ja": "顧客はいくつか質問を持って戻ってきました。",
            "focus": "came back",
            "object": "with a few questions"
          }
        ]
      },
      {
        "phrase": "come across",
        "ja": "偶然見つける・印象を与える",
        "image": "進んでいる途中で何かに出会うイメージ。",
        "pattern": "COME ACROSS + object / COME ACROSS AS",
        "examples": [
          {
            "en": "I came across an old quotation in the folder.",
            "ja": "私はフォルダの中で古い見積書を偶然見つけました。",
            "focus": "came across",
            "object": "an old quotation"
          },
          {
            "en": "Her explanation came across as very clear.",
            "ja": "彼女の説明はとても分かりやすく伝わりました。",
            "focus": "came across",
            "object": "as very clear"
          },
          {
            "en": "Did you come across any problems during the test?",
            "ja": "あなたはテスト中に何か問題に気づきましたか？",
            "focus": "come across",
            "object": "any problems"
          }
        ]
      },
      {
        "phrase": "come out",
        "ja": "出る・発売される・判明する",
        "image": "中にあったものが外へ出てくるイメージ。",
        "pattern": "COME OUT",
        "examples": [
          {
            "en": "The new catalog comes out next month.",
            "ja": "新しいカタログは来月出ます。",
            "focus": "comes out",
            "object": "next month"
          },
          {
            "en": "The test result came out better than expected.",
            "ja": "試験結果は予想より良く出ました。",
            "focus": "came out",
            "object": "better than expected"
          },
          {
            "en": "When will the official announcement come out?",
            "ja": "正式発表はいつ出ますか？",
            "focus": "come out"
          }
        ]
      },
      {
        "phrase": "come along",
        "ja": "一緒に来る・進む",
        "image": "人や物事が一緒に前へ進んでくるイメージ。",
        "pattern": "COME ALONG",
        "examples": [
          {
            "en": "The project is coming along well.",
            "ja": "その案件は順調に進んでいます。",
            "focus": "coming along",
            "object": "well"
          },
          {
            "en": "Can you come along to the client visit?",
            "ja": "あなたは顧客訪問に同行できますか？",
            "focus": "come along",
            "object": "to the client visit"
          },
          {
            "en": "The preparation came along faster than expected.",
            "ja": "準備は予想より早く進みました。",
            "focus": "came along",
            "object": "faster than expected"
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
    "core": "物・情報・人・考えを、ある場所や状態に置く",
    "coreDetail": "PUTは『置く』が中心です。物を置く、情報を資料に入れる、予定をカレンダーに入れる、考えを言葉にする、計画を実行状態に置く、という感覚で広く使えます。",
    "coreVisual": {
      "from": [
        "📄 資料",
        "📅 予定",
        "💡 考え",
        "👤 担当者",
        "📦 商品"
      ],
      "to": "場所・資料・予定・状態",
      "label": "対象 → ある場所・状態に置く"
    },
    "meanings": [
      {
        "id": "put-on-desk",
        "title": "① put the file on the desk / 置く",
        "pattern": "PUT + object + on/in 場所",
        "transitivity": "他動詞",
        "structure": "S + put + O + 場所",
        "image": "物をある場所に置くイメージ。",
        "point": "基本のput。場所を表す on, in, under などと一緒に使う。",
        "examples": [
          {
            "en": "Please put the sample on my desk.",
            "ja": "あなたはサンプルを私の机に置いてください。",
            "focus": "put",
            "object": "the sample"
          },
          {
            "en": "I put the file in the shared folder.",
            "ja": "私はそのファイルを共有フォルダに入れました。",
            "focus": "put",
            "object": "the file"
          },
          {
            "en": "Where did you put the catalog?",
            "ja": "あなたはカタログをどこに置きましたか？",
            "focus": "put",
            "object": "the catalog"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please put your bag here.",
            "ja": "あなたのバッグをここに置いてください。",
            "focus": "put",
            "object": "your bag"
          },
          {
            "en": "I put my keys on the table.",
            "ja": "私は鍵をテーブルに置きました。",
            "focus": "put",
            "object": "my keys"
          }
        ]
      },
      {
        "id": "put-info",
        "title": "② put information in a document / 情報を入れる",
        "pattern": "PUT + information + in/into 資料",
        "transitivity": "他動詞",
        "structure": "S + put + O + in/into + 場所",
        "image": "情報を資料やメールの中に置くイメージ。",
        "point": "資料作成・メール・見積書の説明で便利。",
        "examples": [
          {
            "en": "Please put the delivery date in the quotation.",
            "ja": "あなたは見積書に納期を入れてください。",
            "focus": "put",
            "object": "the delivery date"
          },
          {
            "en": "I put the client's request into the proposal.",
            "ja": "私は顧客の要望を提案書に入れました。",
            "focus": "put",
            "object": "the client's request"
          },
          {
            "en": "Can you put the details in the email?",
            "ja": "あなたは詳細をメールに入れられますか？",
            "focus": "put",
            "object": "the details"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please put your name on this form.",
            "ja": "この用紙に名前を書いてください。",
            "focus": "put",
            "object": "your name"
          },
          {
            "en": "I put the recipe in my notebook.",
            "ja": "私はレシピをノートに書きました。",
            "focus": "put",
            "object": "the recipe"
          }
        ]
      },
      {
        "id": "put-schedule",
        "title": "③ put it on the schedule / 予定に入れる",
        "pattern": "PUT + event + on/in schedule",
        "transitivity": "他動詞",
        "structure": "S + put + O + on/in + schedule",
        "image": "予定をカレンダーやスケジュール上に置くイメージ。",
        "point": "meeting, call, visit, delivery などと使いやすい。",
        "examples": [
          {
            "en": "Can you put the meeting on my schedule?",
            "ja": "あなたはその会議を私の予定に入れられますか？",
            "focus": "put",
            "object": "the meeting"
          },
          {
            "en": "I put the client visit in the calendar.",
            "ja": "私は顧客訪問をカレンダーに入れました。",
            "focus": "put",
            "object": "the client visit"
          },
          {
            "en": "We should put the installation date on the schedule.",
            "ja": "私たちは設置日をスケジュールに入れるべきです。",
            "focus": "put",
            "object": "the installation date"
          }
        ],
        "dailyExamples": [
          {
            "en": "I put my dentist appointment on the calendar.",
            "ja": "私は歯医者の予定をカレンダーに入れました。",
            "focus": "put",
            "object": "my dentist appointment"
          },
          {
            "en": "Please put it on your list.",
            "ja": "それをあなたのリストに入れてください。",
            "focus": "put",
            "object": "it"
          }
        ]
      },
      {
        "id": "put-person",
        "title": "④ put someone in charge / 担当にする",
        "pattern": "PUT + person + in charge/on task",
        "transitivity": "他動詞",
        "structure": "S + put + 人 + in/on + 役割",
        "image": "人をある役割や担当の位置に置くイメージ。",
        "point": "担当者・責任者を決める時に使える。",
        "examples": [
          {
            "en": "We put Tanaka in charge of the new project.",
            "ja": "私たちは田中さんを新しい案件の担当にしました。",
            "focus": "put",
            "object": "Tanaka"
          },
          {
            "en": "The manager put me on the customer support task.",
            "ja": "上司は私を顧客対応の担当にしました。",
            "focus": "put",
            "object": "me"
          },
          {
            "en": "Can we put one engineer on this issue?",
            "ja": "私たちはこの問題に技術担当者を1人つけられますか？",
            "focus": "put",
            "object": "one engineer"
          }
        ],
        "dailyExamples": [
          {
            "en": "They put me in the front row.",
            "ja": "彼らは私を最前列にしました。",
            "focus": "put",
            "object": "me"
          },
          {
            "en": "Please put him on the team.",
            "ja": "彼をチームに入れてください。",
            "focus": "put",
            "object": "him"
          }
        ]
      },
      {
        "id": "put-plan-action",
        "title": "⑤ put a plan into action / 実行に移す",
        "pattern": "PUT + plan/idea + into action",
        "transitivity": "他動詞",
        "structure": "S + put + O + into + 状態",
        "image": "計画を『実行中』という状態に置くイメージ。",
        "point": "営業施策や改善案を実行する時に自然。",
        "examples": [
          {
            "en": "We need to put this plan into action next week.",
            "ja": "私たちは来週、この計画を実行に移す必要があります。",
            "focus": "put",
            "object": "this plan"
          },
          {
            "en": "The team put the new process into practice.",
            "ja": "チームは新しい手順を実践に移しました。",
            "focus": "put",
            "object": "the new process"
          },
          {
            "en": "Can we put your idea into the proposal?",
            "ja": "私たちはあなたのアイデアを提案書に反映できますか？",
            "focus": "put",
            "object": "your idea"
          }
        ],
        "dailyExamples": [
          {
            "en": "I put my idea into action.",
            "ja": "私は自分のアイデアを実行に移しました。",
            "focus": "put",
            "object": "my idea"
          },
          {
            "en": "Let's put this rule into practice.",
            "ja": "このルールを実践しましょう。",
            "focus": "put",
            "object": "this rule"
          }
        ]
      },
      {
        "id": "put-pressure",
        "title": "⑥ put pressure on / 負担・圧力をかける",
        "pattern": "PUT + pressure/stress + on 人/物",
        "transitivity": "他動詞",
        "structure": "S + put + O + on + 対象",
        "image": "負担や圧力を相手側に置くイメージ。",
        "point": "納期・価格・人員などの話で使う。",
        "examples": [
          {
            "en": "The short deadline puts pressure on the production team.",
            "ja": "短い納期は製造チームに負担をかけます。",
            "focus": "puts",
            "object": "pressure"
          },
          {
            "en": "This price increase may put pressure on the customer.",
            "ja": "この値上げは顧客に負担をかける可能性があります。",
            "focus": "put",
            "object": "pressure"
          },
          {
            "en": "We should not put too much stress on one person.",
            "ja": "私たちは1人に負担をかけすぎるべきではありません。",
            "focus": "put",
            "object": "too much stress"
          }
        ],
        "dailyExamples": [
          {
            "en": "The exam put pressure on him.",
            "ja": "試験は彼にプレッシャーを与えました。",
            "focus": "put",
            "object": "pressure"
          },
          {
            "en": "Do not put too much pressure on yourself.",
            "ja": "自分にプレッシャーをかけすぎないでください。",
            "focus": "put",
            "object": "too much pressure"
          }
        ]
      },
      {
        "id": "put-price",
        "title": "⑦ put a price on / 値段を付ける",
        "pattern": "PUT + price/value + on 物",
        "transitivity": "他動詞",
        "structure": "S + put + O + on + 対象",
        "image": "価値や金額を対象の上に置くイメージ。",
        "point": "見積・価格交渉で使えるが、price something の方が直接的な場合もある。",
        "examples": [
          {
            "en": "It is difficult to put a price on this custom design.",
            "ja": "この特注デザインに価格を付けるのは難しいです。",
            "focus": "put",
            "object": "a price"
          },
          {
            "en": "We need to put a value on the extra work.",
            "ja": "私たちは追加作業に価値を見積もる必要があります。",
            "focus": "put",
            "object": "a value"
          },
          {
            "en": "Can you put an estimated price on this option?",
            "ja": "あなたはこのオプションに概算価格を付けられますか？",
            "focus": "put",
            "object": "an estimated price"
          }
        ],
        "dailyExamples": [
          {
            "en": "You cannot put a price on time with family.",
            "ja": "家族との時間には値段を付けられません。",
            "focus": "put",
            "object": "a price"
          },
          {
            "en": "They put a high value on education.",
            "ja": "彼らは教育を高く評価しています。",
            "focus": "put",
            "object": "a high value"
          }
        ]
      },
      {
        "id": "put-clearly",
        "title": "⑧ put it clearly / 言葉で表す",
        "pattern": "PUT + idea + clearly/simply",
        "transitivity": "他動詞",
        "structure": "S + put + O + 副詞",
        "image": "考えを言葉という形に置くイメージ。",
        "point": "put it simply, put it another way は説明で便利。",
        "examples": [
          {
            "en": "Let me put it simply for the customer.",
            "ja": "顧客向けに簡単に言います。",
            "focus": "put",
            "object": "it"
          },
          {
            "en": "Can you put the reason more clearly in the report?",
            "ja": "あなたは報告書で理由をもっと明確に書けますか？",
            "focus": "put",
            "object": "the reason"
          },
          {
            "en": "To put it another way, the schedule is too tight.",
            "ja": "別の言い方をすると、スケジュールが厳しすぎます。",
            "focus": "put",
            "object": "it"
          }
        ],
        "dailyExamples": [
          {
            "en": "I cannot put my feeling into words.",
            "ja": "私は自分の気持ちを言葉にできません。",
            "focus": "put",
            "object": "my feeling"
          },
          {
            "en": "Please put it in simple English.",
            "ja": "それを簡単な英語で言ってください。",
            "focus": "put",
            "object": "it"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "put off",
        "ja": "延期する",
        "image": "予定を今の位置から後ろへ置き直すイメージ。",
        "pattern": "PUT OFF + object",
        "examples": [
          {
            "en": "We need to put off the meeting until Friday.",
            "ja": "私たちは会議を金曜日まで延期する必要があります。",
            "focus": "put off",
            "object": "the meeting"
          },
          {
            "en": "The client put off the site visit.",
            "ja": "顧客は現場訪問を延期しました。",
            "focus": "put off",
            "object": "the site visit"
          },
          {
            "en": "Please do not put off the confirmation.",
            "ja": "確認を先延ばしにしないでください。",
            "focus": "put off",
            "object": "the confirmation"
          }
        ]
      },
      {
        "phrase": "put together",
        "ja": "まとめる・組み立てる",
        "image": "複数の情報や部品を一か所に置き集めるイメージ。",
        "pattern": "PUT TOGETHER + object",
        "examples": [
          {
            "en": "I will put together the proposal by tomorrow.",
            "ja": "私は明日までに提案書をまとめます。",
            "focus": "put together",
            "object": "the proposal"
          },
          {
            "en": "Can you put together the sales data?",
            "ja": "あなたは売上データをまとめられますか？",
            "focus": "put together",
            "object": "the sales data"
          },
          {
            "en": "We put together a simple checklist for the team.",
            "ja": "私たちはチーム向けに簡単なチェックリストをまとめました。",
            "focus": "put together",
            "object": "a simple checklist"
          }
        ]
      },
      {
        "phrase": "put in",
        "ja": "入れる・提出する",
        "image": "外側から中へ入れるイメージ。",
        "pattern": "PUT IN + object",
        "examples": [
          {
            "en": "We put in the order this morning.",
            "ja": "私たちは今朝、注文を入れました。",
            "focus": "put in",
            "object": "the order"
          },
          {
            "en": "Can you put in a request to the supplier?",
            "ja": "あなたは仕入先に依頼を入れられますか？",
            "focus": "put in",
            "object": "a request"
          },
          {
            "en": "She put in a lot of effort on this project.",
            "ja": "彼女はこの案件に多くの努力を注ぎました。",
            "focus": "put in",
            "object": "a lot of effort"
          }
        ]
      },
      {
        "phrase": "put on",
        "ja": "身につける・載せる・開催する",
        "image": "表面や予定の上に置くイメージ。",
        "pattern": "PUT ON + object",
        "examples": [
          {
            "en": "Please put on your safety helmet at the site.",
            "ja": "現場では安全ヘルメットを着用してください。",
            "focus": "put on",
            "object": "your safety helmet"
          },
          {
            "en": "We will put on a short training session next month.",
            "ja": "私たちは来月、短い研修を開催します。",
            "focus": "put on",
            "object": "a short training session"
          },
          {
            "en": "Can you put the client on hold for a minute?",
            "ja": "あなたは顧客を少し保留にできますか？",
            "focus": "put",
            "object": "the client"
          }
        ]
      },
      {
        "phrase": "put out",
        "ja": "出す・発表する・火を消す",
        "image": "内側のものを外へ出す、または火を外へ消すイメージ。",
        "pattern": "PUT OUT + object",
        "examples": [
          {
            "en": "The company put out a notice about the price change.",
            "ja": "会社は価格変更について通知を出しました。",
            "focus": "put out",
            "object": "a notice"
          },
          {
            "en": "We need to put out the updated catalog soon.",
            "ja": "私たちは更新版カタログをすぐ出す必要があります。",
            "focus": "put out",
            "object": "the updated catalog"
          },
          {
            "en": "Please put out the light before you leave.",
            "ja": "退室前に照明を消してください。",
            "focus": "put out",
            "object": "the light"
          }
        ]
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
    "core": "状態・物・関係をそのまま保つ",
    "coreDetail": "KEEPは『保つ』が中心です。資料を保管する、状態を維持する、相手に知らせ続ける、約束を守る、記録を残すなど、仕事でかなり使う動詞です。",
    "coreVisual": {
      "from": [
        "📄 記録",
        "🤝 約束",
        "📈 状態",
        "📩 情報共有",
        "🔒 安全"
      ],
      "to": "同じ状態・管理下",
      "label": "対象をそのまま保つ・離さない"
    },
    "meanings": [
      {
        "id": "keep-file",
        "title": "① keep a file / 保管する",
        "pattern": "KEEP + object",
        "transitivity": "他動詞",
        "structure": "S + keep + O",
        "image": "物や情報を自分の管理下に保つイメージ。",
        "point": "資料・記録・サンプルなどを保管する時に使う。",
        "examples": [
          {
            "en": "Please keep this file for your records.",
            "ja": "あなたは記録用にこのファイルを保管してください。",
            "focus": "keep",
            "object": "this file"
          },
          {
            "en": "We keep the samples in the storage room.",
            "ja": "私たちはサンプルを保管室に置いています。",
            "focus": "keep",
            "object": "the samples"
          },
          {
            "en": "Do you keep old quotations in the system?",
            "ja": "あなたは古い見積書をシステムに保管していますか？",
            "focus": "keep",
            "object": "old quotations"
          }
        ],
        "dailyExamples": [
          {
            "en": "I keep my passport in a safe place.",
            "ja": "私はパスポートを安全な場所に保管しています。",
            "focus": "keep",
            "object": "my passport"
          },
          {
            "en": "Please keep the receipt.",
            "ja": "レシートを保管してください。",
            "focus": "keep",
            "object": "the receipt"
          }
        ]
      },
      {
        "id": "keep-state",
        "title": "② keep it simple / 状態を保つ",
        "pattern": "KEEP + object + adjective",
        "transitivity": "他動詞",
        "structure": "S + keep + O + C",
        "image": "対象をある状態のまま保つイメージ。",
        "point": "説明・資料・現場管理でよく使う。",
        "examples": [
          {
            "en": "Please keep the explanation simple for the customer.",
            "ja": "顧客向けには説明を簡単にしてください。",
            "focus": "keep",
            "object": "the explanation"
          },
          {
            "en": "We need to keep the area clean during installation.",
            "ja": "私たちは設置中、その場所をきれいに保つ必要があります。",
            "focus": "keep",
            "object": "the area"
          },
          {
            "en": "Can you keep the price reasonable?",
            "ja": "あなたは価格を妥当な範囲にできますか？",
            "focus": "keep",
            "object": "the price"
          }
        ],
        "dailyExamples": [
          {
            "en": "Keep the door open, please.",
            "ja": "ドアを開けたままにしてください。",
            "focus": "keep",
            "object": "the door"
          },
          {
            "en": "I try to keep my room clean.",
            "ja": "私は部屋をきれいに保つようにしています。",
            "focus": "keep",
            "object": "my room"
          }
        ]
      },
      {
        "id": "keep-schedule",
        "title": "③ keep the schedule / 守る・維持する",
        "pattern": "KEEP + schedule/deadline/promise",
        "transitivity": "他動詞",
        "structure": "S + keep + O",
        "image": "約束や予定を崩さず保つイメージ。",
        "point": "納期・約束・ルールを守る時に使える。",
        "examples": [
          {
            "en": "We must keep the delivery schedule.",
            "ja": "私たちは納期スケジュールを守らなければなりません。",
            "focus": "keep",
            "object": "the delivery schedule"
          },
          {
            "en": "Can the factory keep the original deadline?",
            "ja": "工場は当初の締切を守れますか？",
            "focus": "keep",
            "object": "the original deadline"
          },
          {
            "en": "He always keeps his promises to customers.",
            "ja": "彼はいつも顧客との約束を守ります。",
            "focus": "keeps",
            "object": "his promises"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please keep your promise.",
            "ja": "約束を守ってください。",
            "focus": "keep",
            "object": "your promise"
          },
          {
            "en": "I try to keep my routine.",
            "ja": "私は自分の習慣を保つようにしています。",
            "focus": "keep",
            "object": "my routine"
          }
        ]
      },
      {
        "id": "keep-record",
        "title": "④ keep a record / 記録を残す",
        "pattern": "KEEP + record/list/note",
        "transitivity": "他動詞",
        "structure": "S + keep + O",
        "image": "後で見られるように記録を保管しておくイメージ。",
        "point": "営業履歴・確認事項・在庫管理で便利。",
        "examples": [
          {
            "en": "Please keep a record of the customer's request.",
            "ja": "あなたは顧客の要望を記録しておいてください。",
            "focus": "keep",
            "object": "a record"
          },
          {
            "en": "We keep a list of open issues for each project.",
            "ja": "私たちは案件ごとに未解決事項のリストを残しています。",
            "focus": "keep",
            "object": "a list"
          },
          {
            "en": "I kept notes during the meeting.",
            "ja": "私は会議中にメモを取りました。",
            "focus": "kept",
            "object": "notes"
          }
        ],
        "dailyExamples": [
          {
            "en": "I keep a diary every day.",
            "ja": "私は毎日日記をつけています。",
            "focus": "keep",
            "object": "a diary"
          },
          {
            "en": "Please keep a note of this number.",
            "ja": "この番号をメモしておいてください。",
            "focus": "keep",
            "object": "a note"
          }
        ]
      },
      {
        "id": "keep-updated",
        "title": "⑤ keep someone updated / 最新情報を伝え続ける",
        "pattern": "KEEP + someone + updated/informed",
        "transitivity": "他動詞",
        "structure": "S + keep + 人 + C",
        "image": "相手を最新情報が入った状態に保つイメージ。",
        "point": "メール返信・進捗報告で非常によく使う。",
        "examples": [
          {
            "en": "I will keep you updated on the delivery status.",
            "ja": "私は納品状況についてあなたに随時共有します。",
            "focus": "keep",
            "object": "you"
          },
          {
            "en": "Please keep the customer informed about the schedule.",
            "ja": "あなたはスケジュールについて顧客に情報共有し続けてください。",
            "focus": "keep",
            "object": "the customer"
          },
          {
            "en": "We kept our manager updated during the issue.",
            "ja": "私たちは問題対応中、上司に状況を共有し続けました。",
            "focus": "kept",
            "object": "our manager"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please keep me updated.",
            "ja": "随時教えてください。",
            "focus": "keep",
            "object": "me"
          },
          {
            "en": "I will keep you informed.",
            "ja": "私はあなたに知らせ続けます。",
            "focus": "keep",
            "object": "you"
          }
        ]
      },
      {
        "id": "keep-in-mind",
        "title": "⑥ keep in mind / 覚えておく",
        "pattern": "KEEP + object + in mind",
        "transitivity": "他動詞",
        "structure": "S + keep + O + in mind",
        "image": "重要な点を頭の中に保つイメージ。",
        "point": "注意点・条件・制約を伝える時に便利。",
        "examples": [
          {
            "en": "Please keep the budget in mind when you make the proposal.",
            "ja": "提案書を作る時は予算を念頭に置いてください。",
            "focus": "keep",
            "object": "the budget"
          },
          {
            "en": "We should keep the delivery risk in mind.",
            "ja": "私たちは納期リスクを念頭に置くべきです。",
            "focus": "keep",
            "object": "the delivery risk"
          },
          {
            "en": "Keep in mind that the client needs approval first.",
            "ja": "顧客はまず承認が必要だと覚えておいてください。",
            "focus": "Keep",
            "object": "in mind"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please keep this in mind.",
            "ja": "これを覚えておいてください。",
            "focus": "keep",
            "object": "this"
          },
          {
            "en": "I keep your advice in mind.",
            "ja": "私はあなたの助言を心に留めています。",
            "focus": "keep",
            "object": "your advice"
          }
        ]
      },
      {
        "id": "keep-going",
        "title": "⑦ keep going / 続ける",
        "pattern": "KEEP + -ing",
        "transitivity": "自動詞/他動詞的",
        "structure": "S + keep + -ing",
        "image": "動作を止めずに同じ流れで保つイメージ。",
        "point": "work, check, improve, communicate などと使いやすい。",
        "examples": [
          {
            "en": "Please keep checking the stock until Friday.",
            "ja": "金曜日まで在庫確認を続けてください。",
            "focus": "keep",
            "object": "checking"
          },
          {
            "en": "We need to keep improving the process.",
            "ja": "私たちはその手順を改善し続ける必要があります。",
            "focus": "keep",
            "object": "improving"
          },
          {
            "en": "The team kept working until the issue was solved.",
            "ja": "チームは問題が解決するまで作業を続けました。",
            "focus": "kept",
            "object": "working"
          }
        ],
        "dailyExamples": [
          {
            "en": "Keep going. You are doing well.",
            "ja": "続けてください。うまくできています。",
            "focus": "Keep",
            "object": "going"
          },
          {
            "en": "I kept walking for thirty minutes.",
            "ja": "私は30分歩き続けました。",
            "focus": "kept",
            "object": "walking"
          }
        ]
      },
      {
        "id": "keep-safe",
        "title": "⑧ keep someone safe / 守る",
        "pattern": "KEEP + person/object + safe",
        "transitivity": "他動詞",
        "structure": "S + keep + O + C",
        "image": "人や物を安全な状態に保つイメージ。",
        "point": "安全管理・品質管理で使える。",
        "examples": [
          {
            "en": "These rules keep workers safe at the site.",
            "ja": "これらのルールは現場で作業者を安全に保ちます。",
            "focus": "keep",
            "object": "workers"
          },
          {
            "en": "We need to keep the products safe during delivery.",
            "ja": "私たちは配送中、製品を安全に保つ必要があります。",
            "focus": "keep",
            "object": "the products"
          },
          {
            "en": "The cover keeps the LED modules clean.",
            "ja": "そのカバーはLEDモジュールをきれいに保ちます。",
            "focus": "keeps",
            "object": "the LED modules"
          }
        ],
        "dailyExamples": [
          {
            "en": "This case keeps my phone safe.",
            "ja": "このケースは私の携帯を守ります。",
            "focus": "keeps",
            "object": "my phone"
          },
          {
            "en": "Please keep your password safe.",
            "ja": "パスワードを安全に管理してください。",
            "focus": "keep",
            "object": "your password"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "keep up",
        "ja": "続ける・維持する",
        "image": "ペースや状態を下げずに保つイメージ。",
        "pattern": "KEEP UP + object / KEEP UP",
        "examples": [
          {
            "en": "We need to keep up the quality during mass production.",
            "ja": "量産中も品質を維持する必要があります。",
            "focus": "keep up",
            "object": "the quality"
          },
          {
            "en": "Please keep up the good work.",
            "ja": "その調子で良い仕事を続けてください。",
            "focus": "keep up",
            "object": "the good work"
          },
          {
            "en": "It is hard to keep up during the busy season.",
            "ja": "繁忙期にペースを保つのは大変です。",
            "focus": "keep up",
            "object": "during the busy season"
          }
        ]
      },
      {
        "phrase": "keep up with",
        "ja": "〜についていく",
        "image": "相手や変化のペースに遅れず保つイメージ。",
        "pattern": "KEEP UP WITH + object",
        "examples": [
          {
            "en": "We must keep up with changes in customer demand.",
            "ja": "私たちは顧客ニーズの変化についていかなければなりません。",
            "focus": "keep up with",
            "object": "changes in customer demand"
          },
          {
            "en": "Can you keep up with the project schedule?",
            "ja": "あなたは案件スケジュールについていけますか？",
            "focus": "keep up with",
            "object": "the project schedule"
          },
          {
            "en": "It is difficult to keep up with all the emails.",
            "ja": "すべてのメールに対応し続けるのは難しいです。",
            "focus": "keep up with",
            "object": "all the emails"
          }
        ]
      },
      {
        "phrase": "keep on",
        "ja": "続ける",
        "image": "同じ行動をそのまま続けるイメージ。",
        "pattern": "KEEP ON + -ing",
        "examples": [
          {
            "en": "Please keep on checking the delivery status.",
            "ja": "納品状況の確認を続けてください。",
            "focus": "keep on",
            "object": "checking the delivery status"
          },
          {
            "en": "The customer kept on asking about the price.",
            "ja": "顧客は価格について質問し続けました。",
            "focus": "kept on",
            "object": "asking about the price"
          },
          {
            "en": "We kept on improving the proposal until the deadline.",
            "ja": "私たちは締切まで提案書の改善を続けました。",
            "focus": "kept on",
            "object": "improving the proposal"
          }
        ]
      },
      {
        "phrase": "keep away",
        "ja": "近づけない・離しておく",
        "image": "対象を一定の距離に保つイメージ。",
        "pattern": "KEEP AWAY + object / KEEP object AWAY",
        "examples": [
          {
            "en": "Please keep water away from the controller.",
            "ja": "コントローラーに水を近づけないでください。",
            "focus": "keep",
            "object": "water"
          },
          {
            "en": "We should keep unauthorized people away from the site.",
            "ja": "私たちは関係者以外を現場に近づけないようにすべきです。",
            "focus": "keep",
            "object": "unauthorized people"
          },
          {
            "en": "Keep the samples away from direct sunlight.",
            "ja": "サンプルを直射日光から離して保管してください。",
            "focus": "Keep",
            "object": "the samples"
          }
        ]
      },
      {
        "phrase": "keep out",
        "ja": "入れない・締め出す",
        "image": "外側に保ち、中へ入れないイメージ。",
        "pattern": "KEEP OUT + object / KEEP object OUT",
        "examples": [
          {
            "en": "This cover keeps dust out of the unit.",
            "ja": "このカバーはユニット内にほこりが入らないようにします。",
            "focus": "keeps",
            "object": "dust"
          },
          {
            "en": "Please keep this information out of the public document.",
            "ja": "この情報は公開資料には入れないでください。",
            "focus": "keep",
            "object": "this information"
          },
          {
            "en": "The fence keeps visitors out of the work area.",
            "ja": "そのフェンスは訪問者を作業エリアに入れないようにしています。",
            "focus": "keeps",
            "object": "visitors"
          }
        ]
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
    "core": "探す・確認する中で、答えや事実を見つける",
    "coreDetail": "FINDは『見えていない答え・情報・問題を、探したり確認したりして見つける』感覚です。物を見つけるだけでなく、問題点、解決策、時間、判断結果にも広がります。",
    "coreVisual": {
        "from": [
            "🔍 探す",
            "📄 資料",
            "❗ 問題",
            "💡 解決策",
            "⏰ 時間"
        ],
        "to": "答え・発見",
        "label": "不明なもの → 見つかる"
    },
    "meanings": [
        {
            "id": "find-file",
            "title": "① ファイル・物を見つける",
            "pattern": "FIND + file / document",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "探していた資料や物が見つかるイメージ。",
            "point": "営業・事務では file, document, drawing, sample とよく使う。",
            "examples": [
                {
                    "en": "I found the latest file in the shared folder.",
                    "ja": "私は共有フォルダで最新ファイルを見つけました。",
                    "focus": "found",
                    "object": "the latest file"
                },
                {
                    "en": "We found the missing document after the meeting.",
                    "ja": "私たちは会議後に紛失した書類を見つけました。",
                    "focus": "found",
                    "object": "the missing document"
                },
                {
                    "en": "Can you find the original drawing for this project?",
                    "ja": "あなたはこの案件の元図面を見つけられますか？",
                    "focus": "find",
                    "object": "the original drawing"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I found my keys on the desk.",
                    "ja": "私は机の上で鍵を見つけました。",
                    "focus": "found",
                    "object": "my keys"
                },
                {
                    "en": "She found her phone in the car.",
                    "ja": "彼女は車の中で携帯を見つけました。",
                    "focus": "found",
                    "object": "her phone"
                }
            ]
        },
        {
            "id": "find-problem",
            "title": "② 問題・ミスを見つける",
            "pattern": "FIND + problem / mistake",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "確認作業の中で問題点が見つかるイメージ。",
            "point": "problem, mistake, error, issue と相性がよい。",
            "examples": [
                {
                    "en": "We found a mistake in the quotation.",
                    "ja": "私たちは見積書にミスを見つけました。",
                    "focus": "found",
                    "object": "a mistake"
                },
                {
                    "en": "The engineer found an issue with the wiring.",
                    "ja": "技術担当者は配線に問題を見つけました。",
                    "focus": "found",
                    "object": "an issue"
                },
                {
                    "en": "I found an error in the order details.",
                    "ja": "私は注文内容に誤りを見つけました。",
                    "focus": "found",
                    "object": "an error"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I found a typo in the message.",
                    "ja": "私はメッセージに誤字を見つけました。",
                    "focus": "found",
                    "object": "a typo"
                },
                {
                    "en": "We found a small problem before the event.",
                    "ja": "私たちはイベント前に小さな問題を見つけました。",
                    "focus": "found",
                    "object": "a small problem"
                }
            ]
        },
        {
            "id": "find-solution",
            "title": "③ 解決策を見つける",
            "pattern": "FIND + solution / way",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "問題に対する答えが見つかるイメージ。",
            "point": "find a solution / find a way は会議や提案でよく使う。",
            "examples": [
                {
                    "en": "We need to find a solution by tomorrow.",
                    "ja": "私たちは明日までに解決策を見つける必要があります。",
                    "focus": "find",
                    "object": "a solution"
                },
                {
                    "en": "The team found a way to reduce the cost.",
                    "ja": "チームはコストを下げる方法を見つけました。",
                    "focus": "found",
                    "object": "a way"
                },
                {
                    "en": "Can we find a better option for the client?",
                    "ja": "私たちは顧客向けにより良い選択肢を見つけられますか？",
                    "focus": "find",
                    "object": "a better option"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I found a way to study on the train.",
                    "ja": "私は電車で勉強する方法を見つけました。",
                    "focus": "found",
                    "object": "a way"
                },
                {
                    "en": "We found a solution to the noise problem.",
                    "ja": "私たちは騒音問題の解決策を見つけました。",
                    "focus": "found",
                    "object": "a solution"
                }
            ]
        },
        {
            "id": "find-information",
            "title": "④ 情報を見つける",
            "pattern": "FIND + information / details",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "資料やデータの中から必要な情報にたどり着くイメージ。",
            "point": "information, details, answer, data と一緒に使いやすい。",
            "examples": [
                {
                    "en": "I found the information in the manual.",
                    "ja": "私はマニュアルでその情報を見つけました。",
                    "focus": "found",
                    "object": "the information"
                },
                {
                    "en": "We found the answer in the inspection report.",
                    "ja": "私たちは検査報告書で答えを見つけました。",
                    "focus": "found",
                    "object": "the answer"
                },
                {
                    "en": "Can you find the product details before the call?",
                    "ja": "あなたは電話前に製品詳細を見つけられますか？",
                    "focus": "find",
                    "object": "the product details"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I found the address on the website.",
                    "ja": "私はウェブサイトで住所を見つけました。",
                    "focus": "found",
                    "object": "the address"
                },
                {
                    "en": "She found the answer in the book.",
                    "ja": "彼女は本の中で答えを見つけました。",
                    "focus": "found",
                    "object": "the answer"
                }
            ]
        },
        {
            "id": "find-that",
            "title": "⑤ 確認して〜だと分かる",
            "pattern": "FIND + that節",
            "transitivity": "他動詞",
            "structure": "S + find + that S V",
            "image": "確認した結果、事実が分かるイメージ。",
            "point": "メールや報告で『確認したところ〜でした』に近い。",
            "examples": [
                {
                    "en": "We found that the delivery date was incorrect.",
                    "ja": "私たちは納期が間違っていることを確認しました。",
                    "focus": "found"
                },
                {
                    "en": "I found that the client needed a smaller size.",
                    "ja": "私は顧客がより小さいサイズを必要としていることが分かりました。",
                    "focus": "found"
                },
                {
                    "en": "They found that the setting was different from the drawing.",
                    "ja": "彼らは設定が図面と違うことを確認しました。",
                    "focus": "found"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I found that the shop was closed.",
                    "ja": "私はその店が閉まっていることが分かりました。",
                    "focus": "found"
                },
                {
                    "en": "We found that the train was delayed.",
                    "ja": "私たちは電車が遅れていることが分かりました。",
                    "focus": "found"
                }
            ]
        },
        {
            "id": "find-it-adj",
            "title": "⑥ 〜だと感じる・判断する",
            "pattern": "FIND + O + adjective",
            "transitivity": "他動詞",
            "structure": "S + find + O + C",
            "image": "使ってみた結果、自分の評価が出るイメージ。",
            "point": "find it difficult / find it useful などが便利。",
            "examples": [
                {
                    "en": "I found the new system useful.",
                    "ja": "私は新しいシステムが役に立つと感じました。",
                    "focus": "found",
                    "object": "the new system"
                },
                {
                    "en": "We found this process difficult at first.",
                    "ja": "私たちは最初、この手順を難しいと感じました。",
                    "focus": "found",
                    "object": "this process"
                },
                {
                    "en": "The client found our proposal clear.",
                    "ja": "顧客は私たちの提案が分かりやすいと感じました。",
                    "focus": "found",
                    "object": "our proposal"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I found the movie interesting.",
                    "ja": "私はその映画を面白いと感じました。",
                    "focus": "found",
                    "object": "the movie"
                },
                {
                    "en": "She found English difficult at first.",
                    "ja": "彼女は最初、英語を難しいと感じました。",
                    "focus": "found",
                    "object": "English"
                }
            ]
        },
        {
            "id": "find-time",
            "title": "⑦ 時間を作る",
            "pattern": "FIND + time",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "忙しい中で使える時間を見つけ出すイメージ。",
            "point": "find time to do / find time for が社会人に必須。",
            "examples": [
                {
                    "en": "I need to find time to review the proposal.",
                    "ja": "私は提案書を確認する時間を作る必要があります。",
                    "focus": "find",
                    "object": "time"
                },
                {
                    "en": "Can you find time for a quick meeting today?",
                    "ja": "あなたは今日、短い会議の時間を取れますか？",
                    "focus": "find",
                    "object": "time"
                },
                {
                    "en": "We found time to discuss the issue after lunch.",
                    "ja": "私たちは昼食後にその問題を話し合う時間を作りました。",
                    "focus": "found",
                    "object": "time"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I found time to exercise this morning.",
                    "ja": "私は今朝、運動する時間を作りました。",
                    "focus": "found",
                    "object": "time"
                },
                {
                    "en": "Can you find time to call me tonight?",
                    "ja": "あなたは今夜、私に電話する時間を取れますか？",
                    "focus": "find",
                    "object": "time"
                }
            ]
        },
        {
            "id": "find-opportunity",
            "title": "⑧ 機会・余地を見つける",
            "pattern": "FIND + opportunity / room",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "新しいチャンスや改善の余地が見えてくるイメージ。",
            "point": "営業・改善提案で使いやすい。",
            "examples": [
                {
                    "en": "We found an opportunity in the new market.",
                    "ja": "私たちは新しい市場に機会を見つけました。",
                    "focus": "found",
                    "object": "an opportunity"
                },
                {
                    "en": "The team found room for improvement in the workflow.",
                    "ja": "チームは作業の流れに改善の余地を見つけました。",
                    "focus": "found",
                    "object": "room for improvement"
                },
                {
                    "en": "I found a chance to speak with the purchasing manager.",
                    "ja": "私は購買担当者と話す機会を見つけました。",
                    "focus": "found",
                    "object": "a chance"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I found a chance to visit my friend.",
                    "ja": "私は友人に会いに行く機会を見つけました。",
                    "focus": "found",
                    "object": "a chance"
                },
                {
                    "en": "We found room for a small table.",
                    "ja": "私たちは小さなテーブルを置く余地を見つけました。",
                    "focus": "found",
                    "object": "room"
                }
            ]
        },
        {
            "id": "find-person",
            "title": "⑨ 人・担当者を見つける",
            "pattern": "FIND + person / contact",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "必要な人や連絡先を探し当てるイメージ。",
            "point": "person, contact, person in charge などと使える。",
            "examples": [
                {
                    "en": "I found the person in charge of this order.",
                    "ja": "私はこの注文の担当者を見つけました。",
                    "focus": "found",
                    "object": "the person in charge"
                },
                {
                    "en": "We found a new supplier for the project.",
                    "ja": "私たちはその案件向けに新しい仕入先を見つけました。",
                    "focus": "found",
                    "object": "a new supplier"
                },
                {
                    "en": "Can you find the right contact at the client side?",
                    "ja": "あなたは顧客側の適切な連絡先を見つけられますか？",
                    "focus": "find",
                    "object": "the right contact"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I found my friend near the station.",
                    "ja": "私は駅の近くで友人を見つけました。",
                    "focus": "found",
                    "object": "my friend"
                },
                {
                    "en": "She found a good teacher online.",
                    "ja": "彼女はオンラインで良い先生を見つけました。",
                    "focus": "found",
                    "object": "a good teacher"
                }
            ]
        },
        {
            "id": "find-result",
            "title": "⑩ 結果・差異が分かる",
            "pattern": "FIND + result / difference",
            "transitivity": "他動詞",
            "structure": "S + find + O",
            "image": "比較や検査の結果が見つかるイメージ。",
            "point": "数字・検査・品質確認で使いやすい。",
            "examples": [
                {
                    "en": "We found a difference between the two estimates.",
                    "ja": "私たちは2つの見積に差異があることを確認しました。",
                    "focus": "found",
                    "object": "a difference"
                },
                {
                    "en": "The test found no major problems.",
                    "ja": "テストでは大きな問題は見つかりませんでした。",
                    "focus": "found",
                    "object": "no major problems"
                },
                {
                    "en": "I found the same result in last month's report.",
                    "ja": "私は先月の報告書でも同じ結果を確認しました。",
                    "focus": "found",
                    "object": "the same result"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I found a difference in the two photos.",
                    "ja": "私は2枚の写真に違いを見つけました。",
                    "focus": "found",
                    "object": "a difference"
                },
                {
                    "en": "We found the same result again.",
                    "ja": "私たちはまた同じ結果を確認しました。",
                    "focus": "found",
                    "object": "the same result"
                }
            ]
        }
    ],
    "collocations": [],
    "phrasalVerbs": [
        {
            "phrase": "find out",
            "ja": "調べて分かる・確認して分かる",
            "image": "隠れていた事実が外に出て分かるイメージ。",
            "pattern": "FIND OUT + information / FIND OUT that S V",
            "examples": [
                {
                    "en": "I will find out the exact delivery date.",
                    "ja": "私は正確な納期を確認します。",
                    "focus": "find out",
                    "object": "the exact delivery date"
                },
                {
                    "en": "We found out that the file was outdated.",
                    "ja": "私たちはそのファイルが古いことを確認しました。",
                    "focus": "found out"
                },
                {
                    "en": "Can you find out who approved the order?",
                    "ja": "あなたは誰が注文を承認したか確認できますか？",
                    "focus": "find out"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I found out the store was closed.",
                    "ja": "私はその店が閉まっていることを知りました。",
                    "focus": "found out"
                },
                {
                    "en": "She found out the answer online.",
                    "ja": "彼女はオンラインで答えを調べて分かりました。",
                    "focus": "found out",
                    "object": "the answer"
                }
            ]
        }
    ]
},
  {
    "id": "see",
    "rank": 11,
    "word": "SEE",
    "ipa": "/siː/",
    "kana": "シー",
    "syllable": "see",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "目に入る・状況が分かる",
    "coreDetail": "SEEは『自然に目に入る』から『状況や意味が分かる』へ広がります。仕事では、確認する、理解する、会う、結果を見る、対応するという意味でよく使います。",
    "coreVisual": {
        "from": [
            "👀 視界",
            "📊 状況",
            "💬 意図",
            "📅 予定",
            "✅ 結果"
        ],
        "to": "理解・確認",
        "label": "目に入る → 分かる"
    },
    "meanings": [
        {
            "id": "see-visual",
            "title": "① 見える・目に入る",
            "pattern": "SEE + object",
            "transitivity": "他動詞",
            "structure": "S + see + O",
            "image": "情報や物が自然に目に入るイメージ。",
            "point": "lookは意識して見る、seeは見える・分かる寄り。",
            "examples": [
                {
                    "en": "I can see the updated file now.",
                    "ja": "私は今、更新されたファイルを確認できます。",
                    "focus": "see",
                    "object": "the updated file"
                },
                {
                    "en": "We saw the sample at the client site.",
                    "ja": "私たちは顧客の現場でサンプルを見ました。",
                    "focus": "saw",
                    "object": "the sample"
                },
                {
                    "en": "Can you see the numbers on this slide?",
                    "ja": "あなたはこのスライドの数字が見えますか？",
                    "focus": "see",
                    "object": "the numbers"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I can see the station from here.",
                    "ja": "私はここから駅が見えます。",
                    "focus": "see",
                    "object": "the station"
                },
                {
                    "en": "She saw a rainbow after the rain.",
                    "ja": "彼女は雨の後に虹を見ました。",
                    "focus": "saw",
                    "object": "a rainbow"
                }
            ]
        },
        {
            "id": "see-understand",
            "title": "② 理解する・分かる",
            "pattern": "SEE + point / reason",
            "transitivity": "他動詞",
            "structure": "S + see + O",
            "image": "相手の意図や理由が頭に入るイメージ。",
            "point": "I see. は『分かりました』。メールでは I understand. の方が丁寧。",
            "examples": [
                {
                    "en": "I see your point about the schedule.",
                    "ja": "私はスケジュールについてのあなたの要点を理解しています。",
                    "focus": "see",
                    "object": "your point"
                },
                {
                    "en": "We saw the reason for the delay after checking the report.",
                    "ja": "私たちは報告書を確認して遅延の理由を理解しました。",
                    "focus": "saw",
                    "object": "the reason"
                },
                {
                    "en": "Do you see why the client asked for a revision?",
                    "ja": "あなたは顧客が修正を依頼した理由が分かりますか？",
                    "focus": "see"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I see what you mean.",
                    "ja": "私はあなたの言いたいことが分かります。",
                    "focus": "see"
                },
                {
                    "en": "Now I see the difference.",
                    "ja": "今なら私は違いが分かります。",
                    "focus": "see",
                    "object": "the difference"
                }
            ]
        },
        {
            "id": "see-check",
            "title": "③ 確認する",
            "pattern": "SEE if / SEE whether",
            "transitivity": "他動詞",
            "structure": "S + see if S V",
            "image": "確認して状況を把握するイメージ。",
            "point": "see if は『〜かどうか確認する』で会話・メールに便利。",
            "examples": [
                {
                    "en": "I will see if the item is in stock.",
                    "ja": "私はその商品に在庫があるか確認します。",
                    "focus": "see"
                },
                {
                    "en": "Can you see whether the order has been approved?",
                    "ja": "あなたはその注文が承認済みか確認できますか？",
                    "focus": "see"
                },
                {
                    "en": "We need to see if the schedule still works.",
                    "ja": "私たちはそのスケジュールでまだ問題ないか確認する必要があります。",
                    "focus": "see"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I will see if the shop is open.",
                    "ja": "私はその店が開いているか確認します。",
                    "focus": "see"
                },
                {
                    "en": "Can you see if the bus is coming?",
                    "ja": "あなたはバスが来ているか確認できますか？",
                    "focus": "see"
                }
            ]
        },
        {
            "id": "see-person",
            "title": "④ 人に会う",
            "pattern": "SEE + person",
            "transitivity": "他動詞",
            "structure": "S + see + O",
            "image": "人と会って話す・訪問するイメージ。",
            "point": "meetよりカジュアルに『会う・訪問する』で使う。",
            "examples": [
                {
                    "en": "I saw the client yesterday afternoon.",
                    "ja": "私は昨日の午後、顧客に会いました。",
                    "focus": "saw",
                    "object": "the client"
                },
                {
                    "en": "We will see the supplier after the meeting.",
                    "ja": "私たちは会議後に仕入先と会います。",
                    "focus": "see",
                    "object": "the supplier"
                },
                {
                    "en": "Can you see Mr. Tanaka next week?",
                    "ja": "あなたは来週、田中様と会えますか？",
                    "focus": "see",
                    "object": "Mr. Tanaka"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I saw my friend at the station.",
                    "ja": "私は駅で友人に会いました。",
                    "focus": "saw",
                    "object": "my friend"
                },
                {
                    "en": "She will see her family this weekend.",
                    "ja": "彼女は今週末、家族に会います。",
                    "focus": "see",
                    "object": "her family"
                }
            ]
        },
        {
            "id": "see-result",
            "title": "⑤ 結果を見る・分かる",
            "pattern": "SEE + result / change",
            "transitivity": "他動詞",
            "structure": "S + see + O",
            "image": "変化や結果が見えてくるイメージ。",
            "point": "数字・改善・反応の確認で使いやすい。",
            "examples": [
                {
                    "en": "We saw good results after the update.",
                    "ja": "私たちは更新後に良い結果を確認しました。",
                    "focus": "saw",
                    "object": "good results"
                },
                {
                    "en": "I can see a clear improvement in the sales data.",
                    "ja": "私は売上データに明確な改善が見えます。",
                    "focus": "see",
                    "object": "a clear improvement"
                },
                {
                    "en": "The team saw a change in customer response.",
                    "ja": "チームは顧客の反応に変化を確認しました。",
                    "focus": "saw",
                    "object": "a change"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I saw a big change after practice.",
                    "ja": "私は練習後に大きな変化を感じました。",
                    "focus": "saw",
                    "object": "a big change"
                },
                {
                    "en": "We saw good results from the new plan.",
                    "ja": "私たちは新しい計画で良い結果を見ました。",
                    "focus": "saw",
                    "object": "good results"
                }
            ]
        },
        {
            "id": "see-possibility",
            "title": "⑥ 可能性を見る",
            "pattern": "SEE + possibility / opportunity",
            "transitivity": "他動詞",
            "structure": "S + see + O",
            "image": "状況の中に可能性が見えるイメージ。",
            "point": "営業や提案で『可能性がある』を柔らかく言える。",
            "examples": [
                {
                    "en": "We see an opportunity with this client.",
                    "ja": "私たちはこの顧客に機会があると見ています。",
                    "focus": "see",
                    "object": "an opportunity"
                },
                {
                    "en": "I see potential in this product line.",
                    "ja": "私はこの製品ラインに可能性を感じています。",
                    "focus": "see",
                    "object": "potential"
                },
                {
                    "en": "The manager saw a chance to expand the project.",
                    "ja": "上司はその案件を広げる機会を見ました。",
                    "focus": "saw",
                    "object": "a chance"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I see a chance to improve my English.",
                    "ja": "私は英語を伸ばす機会があると感じています。",
                    "focus": "see",
                    "object": "a chance"
                },
                {
                    "en": "She sees potential in the new idea.",
                    "ja": "彼女は新しいアイデアに可能性を感じています。",
                    "focus": "sees",
                    "object": "potential"
                }
            ]
        },
        {
            "id": "see-happen",
            "title": "⑦ 何が起きるか様子を見る",
            "pattern": "SEE what happens",
            "transitivity": "他動詞",
            "structure": "S + see + what happens",
            "image": "結果が出るまで見守るイメージ。",
            "point": "判断を保留して様子を見る時に自然。",
            "examples": [
                {
                    "en": "Let's see what happens after we send the proposal.",
                    "ja": "私たちは提案書を送った後、どうなるか様子を見ましょう。",
                    "focus": "see"
                },
                {
                    "en": "We should see how the client responds first.",
                    "ja": "私たちはまず顧客がどう反応するか見た方がよいです。",
                    "focus": "see"
                },
                {
                    "en": "I will see what happens with the delivery schedule.",
                    "ja": "私は納品スケジュールがどうなるか様子を見ます。",
                    "focus": "see"
                }
            ],
            "dailyExamples": [
                {
                    "en": "Let's see what happens tomorrow.",
                    "ja": "明日どうなるか見てみましょう。",
                    "focus": "see"
                },
                {
                    "en": "I will see how it goes.",
                    "ja": "私は様子を見ます。",
                    "focus": "see"
                }
            ]
        },
        {
            "id": "see-available",
            "title": "⑧ 都合・空きを確認する",
            "pattern": "SEE if someone is available",
            "transitivity": "他動詞",
            "structure": "S + see if S is available",
            "image": "予定表や相手の都合を確認するイメージ。",
            "point": "会議調整で非常に使いやすい。",
            "examples": [
                {
                    "en": "I will see if the manager is available at three.",
                    "ja": "私は上司が3時に空いているか確認します。",
                    "focus": "see"
                },
                {
                    "en": "Can you see if the meeting room is free tomorrow?",
                    "ja": "あなたは明日、会議室が空いているか確認できますか？",
                    "focus": "see"
                },
                {
                    "en": "We need to see if the client can join the call.",
                    "ja": "私たちは顧客が電話会議に参加できるか確認する必要があります。",
                    "focus": "see"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I will see if my friend is free tonight.",
                    "ja": "私は友人が今夜空いているか確認します。",
                    "focus": "see"
                },
                {
                    "en": "Can you see if the table is available?",
                    "ja": "あなたは席が空いているか確認できますか？",
                    "focus": "see"
                }
            ]
        }
    ],
    "collocations": [],
    "phrasalVerbs": [
        {
            "phrase": "see to",
            "ja": "〜に対応する・面倒を見る",
            "image": "必要なことに目を向けて対応するイメージ。",
            "pattern": "SEE TO + task / issue",
            "examples": [
                {
                    "en": "I will see to the delivery issue today.",
                    "ja": "私は今日、納期の問題に対応します。",
                    "focus": "see to",
                    "object": "the delivery issue"
                },
                {
                    "en": "Please see to the meeting room setup.",
                    "ja": "会議室の準備をお願いします。",
                    "focus": "see to",
                    "object": "the meeting room setup"
                },
                {
                    "en": "We need someone to see to the customer request.",
                    "ja": "私たちは顧客の依頼に対応する人が必要です。",
                    "focus": "see to",
                    "object": "the customer request"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I will see to dinner tonight.",
                    "ja": "私は今夜の夕食を準備します。",
                    "focus": "see to",
                    "object": "dinner"
                },
                {
                    "en": "She saw to the tickets for the trip.",
                    "ja": "彼女は旅行のチケットを手配しました。",
                    "focus": "saw to",
                    "object": "the tickets"
                }
            ]
        },
        {
            "phrase": "see about",
            "ja": "〜について確認・手配する",
            "image": "何ができるか確認しに行くイメージ。",
            "pattern": "SEE ABOUT + noun / doing",
            "examples": [
                {
                    "en": "I will see about changing the schedule.",
                    "ja": "私はスケジュール変更について確認します。",
                    "focus": "see about"
                },
                {
                    "en": "Can you see about getting the sample by Friday?",
                    "ja": "あなたは金曜日までにサンプルを入手できるか確認できますか？",
                    "focus": "see about"
                },
                {
                    "en": "We need to see about the additional cost.",
                    "ja": "私たちは追加費用について確認する必要があります。",
                    "focus": "see about",
                    "object": "the additional cost"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I will see about booking a table.",
                    "ja": "私は席の予約について確認します。",
                    "focus": "see about"
                },
                {
                    "en": "She saw about getting new shoes.",
                    "ja": "彼女は新しい靴を買うことを検討しました。",
                    "focus": "saw about"
                }
            ]
        },
        {
            "phrase": "see through",
            "ja": "〜を最後までやり抜く・見抜く",
            "image": "途中で止めずに最後まで見る、または本質を見抜くイメージ。",
            "pattern": "SEE THROUGH + task / problem",
            "examples": [
                {
                    "en": "We need to see this project through.",
                    "ja": "私たちはこの案件を最後までやり抜く必要があります。",
                    "focus": "see",
                    "object": "this project through"
                },
                {
                    "en": "The manager saw through the problem quickly.",
                    "ja": "上司はその問題の本質をすぐに見抜きました。",
                    "focus": "saw through",
                    "object": "the problem"
                },
                {
                    "en": "I want to see the improvement plan through.",
                    "ja": "私は改善計画を最後まで進めたいです。",
                    "focus": "see",
                    "object": "the improvement plan through"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I saw through the difficult course.",
                    "ja": "私は難しい講座を最後までやり抜きました。",
                    "focus": "saw through",
                    "object": "the difficult course"
                },
                {
                    "en": "She saw through the excuse.",
                    "ja": "彼女はその言い訳を見抜きました。",
                    "focus": "saw through",
                    "object": "the excuse"
                }
            ]
        },
        {
            "phrase": "see off",
            "ja": "〜を見送る",
            "image": "出発する相手を最後まで見るイメージ。",
            "pattern": "SEE OFF + person",
            "examples": [
                {
                    "en": "We saw off the overseas visitors at the station.",
                    "ja": "私たちは駅で海外からの来訪者を見送りました。",
                    "focus": "saw off",
                    "object": "the overseas visitors"
                },
                {
                    "en": "I will see off the client after the meeting.",
                    "ja": "私は会議後に顧客を見送ります。",
                    "focus": "see off",
                    "object": "the client"
                },
                {
                    "en": "The team saw him off after his final presentation.",
                    "ja": "チームは彼の最後の発表後に彼を見送りました。",
                    "focus": "saw",
                    "object": "him off"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I saw off my friend at the airport.",
                    "ja": "私は空港で友人を見送りました。",
                    "focus": "saw off",
                    "object": "my friend"
                },
                {
                    "en": "She saw her family off at the station.",
                    "ja": "彼女は駅で家族を見送りました。",
                    "focus": "saw",
                    "object": "her family off"
                }
            ]
        }
    ]
},
  {
    "id": "look",
    "rank": 12,
    "word": "LOOK",
    "ipa": "/lʊk/",
    "kana": "ルック",
    "syllable": "look",
    "transitivity": "自動詞中心",
    "importance": "★★★★★ 超重要",
    "core": "意識して目を向ける・様子を見る",
    "coreDetail": "LOOKは『自分から意識して目を向ける』感覚です。見る、確認する、探す、調査する、見直す、期待するなど、前置詞との組み合わせで仕事の表現が大きく広がります。",
    "coreVisual": {
        "from": [
            "自分の視線",
            "👀 注意",
            "🔎 確認"
        ],
        "to": "対象・方向",
        "label": "自分 → 対象へ目を向ける"
    },
    "meanings": [
        {
            "id": "look-see",
            "title": "① 意識して見る",
            "pattern": "LOOK + at / toward",
            "transitivity": "自動詞",
            "structure": "S + look + at O",
            "image": "自分から対象へ視線を向けるイメージ。",
            "point": "seeは自然に見える、lookは意識して見る。",
            "examples": [
                {
                    "en": "Please look at this part of the drawing.",
                    "ja": "あなたは図面のこの部分を見てください。",
                    "focus": "look",
                    "object": "at this part"
                },
                {
                    "en": "I looked at the quotation before the meeting.",
                    "ja": "私は会議前に見積書を見ました。",
                    "focus": "looked",
                    "object": "at the quotation"
                },
                {
                    "en": "We need to look at the actual site first.",
                    "ja": "私たちはまず実際の現場を見る必要があります。",
                    "focus": "look",
                    "object": "at the actual site"
                }
            ],
            "dailyExamples": [
                {
                    "en": "Look at this photo.",
                    "ja": "この写真を見てください。",
                    "focus": "Look",
                    "object": "at this photo"
                },
                {
                    "en": "I looked at the map before leaving.",
                    "ja": "私は出発前に地図を見ました。",
                    "focus": "looked",
                    "object": "at the map"
                }
            ]
        },
        {
            "id": "look-appear",
            "title": "② 〜に見える",
            "pattern": "LOOK + adjective",
            "transitivity": "自動詞",
            "structure": "S + look + C",
            "image": "見た目や印象から判断するイメージ。",
            "point": "look good / look difficult / look clear などで使う。",
            "examples": [
                {
                    "en": "The new layout looks clear.",
                    "ja": "新しいレイアウトは分かりやすく見えます。",
                    "focus": "looks",
                    "object": "clear"
                },
                {
                    "en": "This schedule looks difficult.",
                    "ja": "このスケジュールは難しそうです。",
                    "focus": "looks",
                    "object": "difficult"
                },
                {
                    "en": "The sample looked better than expected.",
                    "ja": "サンプルは予想より良く見えました。",
                    "focus": "looked",
                    "object": "better than expected"
                }
            ],
            "dailyExamples": [
                {
                    "en": "You look tired today.",
                    "ja": "あなたは今日は疲れて見えます。",
                    "focus": "look",
                    "object": "tired"
                },
                {
                    "en": "This cafe looks nice.",
                    "ja": "このカフェは良さそうです。",
                    "focus": "looks",
                    "object": "nice"
                }
            ]
        },
        {
            "id": "look-like",
            "title": "③ 〜のように見える",
            "pattern": "LOOK LIKE + noun / sentence",
            "transitivity": "自動詞",
            "structure": "S + look like + O",
            "image": "見た目や状況から推測するイメージ。",
            "point": "It looks like ... は『〜のようです』で報告に便利。",
            "examples": [
                {
                    "en": "It looks like we need more time.",
                    "ja": "私たちはもう少し時間が必要そうです。",
                    "focus": "looks",
                    "object": "like we need more time"
                },
                {
                    "en": "It looks like the client approved the design.",
                    "ja": "顧客がデザインを承認したようです。",
                    "focus": "looks",
                    "object": "like the client approved the design"
                },
                {
                    "en": "The issue looks like a wiring problem.",
                    "ja": "その問題は配線の問題のように見えます。",
                    "focus": "looks",
                    "object": "like a wiring problem"
                }
            ],
            "dailyExamples": [
                {
                    "en": "It looks like rain.",
                    "ja": "雨が降りそうです。",
                    "focus": "looks",
                    "object": "like rain"
                },
                {
                    "en": "This looks like a good place.",
                    "ja": "ここは良い場所のように見えます。",
                    "focus": "looks",
                    "object": "like a good place"
                }
            ]
        },
        {
            "id": "look-direction",
            "title": "④ 方向を見る・向く",
            "pattern": "LOOK + direction",
            "transitivity": "自動詞",
            "structure": "S + look + direction",
            "image": "視線や注意を特定方向へ向けるイメージ。",
            "point": "look left/right/ahead など安全確認にも使う。",
            "examples": [
                {
                    "en": "Please look carefully before entering the work area.",
                    "ja": "あなたは作業エリアに入る前によく確認してください。",
                    "focus": "look"
                },
                {
                    "en": "We looked around the site before the installation.",
                    "ja": "私たちは設置前に現場全体を見て回りました。",
                    "focus": "looked"
                },
                {
                    "en": "The team looked ahead to the next schedule.",
                    "ja": "チームは次のスケジュールを見据えました。",
                    "focus": "looked"
                }
            ],
            "dailyExamples": [
                {
                    "en": "Look left before crossing the road.",
                    "ja": "道を渡る前に左を見てください。",
                    "focus": "Look"
                },
                {
                    "en": "I looked around the room.",
                    "ja": "私は部屋を見回しました。",
                    "focus": "looked"
                }
            ]
        },
        {
            "id": "look-professional",
            "title": "⑤ 印象として〜に見える",
            "pattern": "LOOK + professional / reliable",
            "transitivity": "自動詞",
            "structure": "S + look + C",
            "image": "相手からどう見えるかを表すイメージ。",
            "point": "提案資料やデザインの印象確認で使える。",
            "examples": [
                {
                    "en": "The proposal looks professional now.",
                    "ja": "提案書は今、きちんとした印象に見えます。",
                    "focus": "looks",
                    "object": "professional"
                },
                {
                    "en": "This product photo looks reliable.",
                    "ja": "この製品写真は信頼できそうに見えます。",
                    "focus": "looks",
                    "object": "reliable"
                },
                {
                    "en": "The presentation looked simple and clear.",
                    "ja": "その発表資料はシンプルで分かりやすく見えました。",
                    "focus": "looked",
                    "object": "simple and clear"
                }
            ],
            "dailyExamples": [
                {
                    "en": "Your room looks clean.",
                    "ja": "あなたの部屋はきれいに見えます。",
                    "focus": "looks",
                    "object": "clean"
                },
                {
                    "en": "The design looks modern.",
                    "ja": "そのデザインは現代的に見えます。",
                    "focus": "looks",
                    "object": "modern"
                }
            ]
        }
    ],
    "collocations": [],
    "phrasalVerbs": [
        {
            "phrase": "look for",
            "ja": "〜を探す",
            "image": "必要なものへ視線と意識を向け続けるイメージ。",
            "pattern": "LOOK FOR + object",
            "examples": [
                {
                    "en": "I am looking for the updated file.",
                    "ja": "私は更新されたファイルを探しています。",
                    "focus": "looking for",
                    "object": "the updated file"
                },
                {
                    "en": "We are looking for a better supplier.",
                    "ja": "私たちはより良い仕入先を探しています。",
                    "focus": "looking for",
                    "object": "a better supplier"
                },
                {
                    "en": "The client is looking for a cheaper option.",
                    "ja": "顧客はより安い選択肢を探しています。",
                    "focus": "looking for",
                    "object": "a cheaper option"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I am looking for my keys.",
                    "ja": "私は鍵を探しています。",
                    "focus": "looking for",
                    "object": "my keys"
                },
                {
                    "en": "She is looking for a new apartment.",
                    "ja": "彼女は新しい部屋を探しています。",
                    "focus": "looking for",
                    "object": "a new apartment"
                }
            ]
        },
        {
            "phrase": "look into",
            "ja": "〜を調査する",
            "image": "問題の中へ目を向けて詳しく調べるイメージ。",
            "pattern": "LOOK INTO + issue",
            "examples": [
                {
                    "en": "We will look into the cause of the delay.",
                    "ja": "私たちは遅延の原因を調査します。",
                    "focus": "look into",
                    "object": "the cause"
                },
                {
                    "en": "Please look into the customer complaint.",
                    "ja": "顧客クレームを調査してください。",
                    "focus": "look into",
                    "object": "the customer complaint"
                },
                {
                    "en": "I will look into the pricing issue.",
                    "ja": "私は価格の問題を確認します。",
                    "focus": "look into",
                    "object": "the pricing issue"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I looked into the restaurant.",
                    "ja": "私はそのレストランを調べました。",
                    "focus": "looked into",
                    "object": "the restaurant"
                },
                {
                    "en": "We looked into travel options.",
                    "ja": "私たちは旅行の選択肢を調べました。",
                    "focus": "looked into",
                    "object": "travel options"
                }
            ]
        },
        {
            "phrase": "look over",
            "ja": "〜をざっと確認する",
            "image": "上から全体に目を通すイメージ。",
            "pattern": "LOOK OVER + document",
            "examples": [
                {
                    "en": "Could you look over this document?",
                    "ja": "あなたはこの資料を確認してもらえますか？",
                    "focus": "look over",
                    "object": "this document"
                },
                {
                    "en": "I looked over the contract before sending it.",
                    "ja": "私は送付前に契約書をざっと確認しました。",
                    "focus": "looked over",
                    "object": "the contract"
                },
                {
                    "en": "Please look over the agenda before the meeting.",
                    "ja": "会議前に議題を確認してください。",
                    "focus": "look over",
                    "object": "the agenda"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I looked over the recipe.",
                    "ja": "私はレシピをざっと見ました。",
                    "focus": "looked over",
                    "object": "the recipe"
                },
                {
                    "en": "Can you look over my message?",
                    "ja": "あなたは私のメッセージを見てくれますか？",
                    "focus": "look over",
                    "object": "my message"
                }
            ]
        },
        {
            "phrase": "look up",
            "ja": "〜を調べる",
            "image": "情報を上へ引き出して確認するイメージ。",
            "pattern": "LOOK UP + information",
            "examples": [
                {
                    "en": "I will look up the product code.",
                    "ja": "私は製品コードを調べます。",
                    "focus": "look up",
                    "object": "the product code"
                },
                {
                    "en": "Can you look up the client's phone number?",
                    "ja": "あなたは顧客の電話番号を調べられますか？",
                    "focus": "look up",
                    "object": "the client's phone number"
                },
                {
                    "en": "We looked up the specification in the catalog.",
                    "ja": "私たちはカタログで仕様を調べました。",
                    "focus": "looked up",
                    "object": "the specification"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I looked up the word in a dictionary.",
                    "ja": "私は辞書でその単語を調べました。",
                    "focus": "looked up",
                    "object": "the word"
                },
                {
                    "en": "She looked up the train time.",
                    "ja": "彼女は電車の時刻を調べました。",
                    "focus": "looked up",
                    "object": "the train time"
                }
            ]
        },
        {
            "phrase": "look after",
            "ja": "〜の面倒を見る・管理する",
            "image": "対象に注意を向け続けて守るイメージ。",
            "pattern": "LOOK AFTER + person / item",
            "examples": [
                {
                    "en": "Our team looks after this account.",
                    "ja": "私たちのチームはこの顧客を担当しています。",
                    "focus": "looks after",
                    "object": "this account"
                },
                {
                    "en": "Please look after the samples until Friday.",
                    "ja": "金曜日までサンプルの管理をお願いします。",
                    "focus": "look after",
                    "object": "the samples"
                },
                {
                    "en": "She looked after the visitor during the factory tour.",
                    "ja": "彼女は工場見学中に来訪者の対応をしました。",
                    "focus": "looked after",
                    "object": "the visitor"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I looked after my sister's dog.",
                    "ja": "私は姉の犬の世話をしました。",
                    "focus": "looked after",
                    "object": "my sister's dog"
                },
                {
                    "en": "He looks after his plants every morning.",
                    "ja": "彼は毎朝植物の世話をしています。",
                    "focus": "looks after",
                    "object": "his plants"
                }
            ]
        },
        {
            "phrase": "look forward to",
            "ja": "〜を楽しみに待つ",
            "image": "前の予定へ気持ちを向けて待つイメージ。",
            "pattern": "LOOK FORWARD TO + noun / -ing",
            "examples": [
                {
                    "en": "I look forward to your reply.",
                    "ja": "私はあなたからの返信をお待ちしております。",
                    "focus": "look forward to",
                    "object": "your reply"
                },
                {
                    "en": "We look forward to working with you.",
                    "ja": "私たちはあなたと一緒に仕事ができることを楽しみにしています。",
                    "focus": "look forward to",
                    "object": "working with you"
                },
                {
                    "en": "I look forward to the meeting next week.",
                    "ja": "私は来週の会議を楽しみにしています。",
                    "focus": "look forward to",
                    "object": "the meeting"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I look forward to the weekend.",
                    "ja": "私は週末を楽しみにしています。",
                    "focus": "look forward to",
                    "object": "the weekend"
                },
                {
                    "en": "We look forward to the trip.",
                    "ja": "私たちは旅行を楽しみにしています。",
                    "focus": "look forward to",
                    "object": "the trip"
                }
            ]
        },
        {
            "phrase": "look out for",
            "ja": "〜に注意する",
            "image": "危険や変化を見逃さないように外へ注意を向けるイメージ。",
            "pattern": "LOOK OUT FOR + risk / change",
            "examples": [
                {
                    "en": "Please look out for any errors in the data.",
                    "ja": "データにミスがないか注意して見てください。",
                    "focus": "look out for",
                    "object": "any errors"
                },
                {
                    "en": "We should look out for risks in this project.",
                    "ja": "私たちはこの案件のリスクに注意するべきです。",
                    "focus": "look out for",
                    "object": "risks"
                },
                {
                    "en": "Look out for changes in the delivery schedule.",
                    "ja": "納品スケジュールの変更に注意してください。",
                    "focus": "Look out for",
                    "object": "changes"
                }
            ],
            "dailyExamples": [
                {
                    "en": "Look out for cars.",
                    "ja": "車に気をつけてください。",
                    "focus": "Look out for",
                    "object": "cars"
                },
                {
                    "en": "I looked out for signs at the station.",
                    "ja": "私は駅で標識に注意しました。",
                    "focus": "looked out for",
                    "object": "signs"
                }
            ]
        },
        {
            "phrase": "look through",
            "ja": "〜に目を通す",
            "image": "資料の中を通り抜けるように確認するイメージ。",
            "pattern": "LOOK THROUGH + document",
            "examples": [
                {
                    "en": "I looked through the proposal before sending it.",
                    "ja": "私は送付前に提案書に目を通しました。",
                    "focus": "looked through",
                    "object": "the proposal"
                },
                {
                    "en": "Can you look through these photos from the site?",
                    "ja": "あなたは現場写真に目を通せますか？",
                    "focus": "look through",
                    "object": "these photos"
                },
                {
                    "en": "We need to look through the contract again.",
                    "ja": "私たちは契約書にもう一度目を通す必要があります。",
                    "focus": "look through",
                    "object": "the contract"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I looked through the magazine.",
                    "ja": "私は雑誌に目を通しました。",
                    "focus": "looked through",
                    "object": "the magazine"
                },
                {
                    "en": "She looked through the old photos.",
                    "ja": "彼女は昔の写真に目を通しました。",
                    "focus": "looked through",
                    "object": "the old photos"
                }
            ]
        },
        {
            "phrase": "look back on",
            "ja": "〜を振り返る",
            "image": "過去へ視線を戻すイメージ。",
            "pattern": "LOOK BACK ON + period / experience",
            "examples": [
                {
                    "en": "We looked back on the project after delivery.",
                    "ja": "私たちは納品後にその案件を振り返りました。",
                    "focus": "looked back on",
                    "object": "the project"
                },
                {
                    "en": "I want to look back on last month's sales results.",
                    "ja": "私は先月の売上結果を振り返りたいです。",
                    "focus": "look back on",
                    "object": "last month's sales results"
                },
                {
                    "en": "The team looked back on the meeting and improved the proposal.",
                    "ja": "チームは会議を振り返り、提案書を改善しました。",
                    "focus": "looked back on",
                    "object": "the meeting"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I looked back on my school days.",
                    "ja": "私は学生時代を振り返りました。",
                    "focus": "looked back on",
                    "object": "my school days"
                },
                {
                    "en": "She looked back on her trip.",
                    "ja": "彼女は旅行を振り返りました。",
                    "focus": "looked back on",
                    "object": "her trip"
                }
            ]
        },
        {
            "phrase": "look ahead",
            "ja": "先を見据える",
            "image": "これから来る予定や状況へ視線を向けるイメージ。",
            "pattern": "LOOK AHEAD",
            "examples": [
                {
                    "en": "We need to look ahead to next quarter.",
                    "ja": "私たちは次の四半期を見据える必要があります。",
                    "focus": "look ahead",
                    "object": "to next quarter"
                },
                {
                    "en": "The manager looked ahead and adjusted the schedule.",
                    "ja": "上司は先を見据えてスケジュールを調整しました。",
                    "focus": "looked ahead"
                },
                {
                    "en": "Let's look ahead before we decide the inventory plan.",
                    "ja": "私たちは在庫計画を決める前に先を見据えましょう。",
                    "focus": "look ahead"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I looked ahead to next year.",
                    "ja": "私は来年を見据えました。",
                    "focus": "looked ahead",
                    "object": "to next year"
                },
                {
                    "en": "We should look ahead and prepare early.",
                    "ja": "私たちは先を見据えて早めに準備するべきです。",
                    "focus": "look ahead"
                }
            ]
        }
    ]
},
  {
    "id": "watch",
    "rank": 13,
    "word": "WATCH",
    "ipa": "/wɑːtʃ/",
    "kana": "ウォッチ",
    "syllable": "watch",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "動いているもの・変化しそうなものを注意して見る",
    "coreDetail": "WATCHは、ただ目に入るseeではなく、動き・変化・危険・数字をしばらく注意して見る感覚です。動画を見る、状況を見守る、数値や進捗を注視する、という使い方につながります。",
    "coreVisual": {
      "from": ["📊 数字", "🚚 納期", "🎥 動画", "⚠️ リスク", "👥 状況"],
      "to": "自分の注意・観察範囲",
      "label": "変化するもの → 注意して見続ける"
    },
    "meanings": [
      {"id":"watch-progress","title":"① watch progress / 進捗を見る","pattern":"WATCH + progress / situation","transitivity":"他動詞","structure":"S + watch + O","image":"進捗や状況の変化を注意して追うイメージ。","point":"seeよりも『しばらく注意して見る』ニュアンスが強い。","examples":[
        {"en":"We need to watch the project progress this week.","ja":"私たちは今週、その案件の進捗を注意して見る必要があります。","focus":"watch","object":"the project progress"},
        {"en":"I watched the delivery status all morning.","ja":"私は午前中ずっと納品状況を確認していました。","focus":"watched","object":"the delivery status"},
        {"en":"Please watch the schedule and tell me if it changes.","ja":"あなたはスケジュールを確認し、変更があれば私に教えてください。","focus":"watch","object":"the schedule"}
      ]},
      {"id":"watch-numbers","title":"② watch the numbers / 数字を見る","pattern":"WATCH + numbers / sales / cost","transitivity":"他動詞","structure":"S + watch + O","image":"数字の変化を見逃さないように追うイメージ。","point":"sales, cost, inventory, budget などの管理で自然に使える。","examples":[
        {"en":"We should watch the sales numbers after the campaign.","ja":"私たちはキャンペーン後の売上数字を注意して見るべきです。","focus":"watch","object":"the sales numbers"},
        {"en":"The manager watched the cost carefully.","ja":"上司はコストを注意深く見ていました。","focus":"watched","object":"the cost"},
        {"en":"Can you watch the inventory level next week?","ja":"あなたは来週、在庫数を確認してくれますか？","focus":"watch","object":"the inventory level"}
      ]},
      {"id":"watch-video","title":"③ watch a video / 動画を見る","pattern":"WATCH + video / presentation","transitivity":"他動詞","structure":"S + watch + O","image":"動く映像を注意して見るイメージ。","point":"movie, video, presentation, demo など、動くものを見る時に使う。","examples":[
        {"en":"I watched the training video before the meeting.","ja":"私は会議前に研修動画を見ました。","focus":"watched","object":"the training video"},
        {"en":"Please watch this product demo first.","ja":"あなたはまずこの製品デモを見てください。","focus":"watch","object":"this product demo"},
        {"en":"We watched the presentation recording together.","ja":"私たちは一緒にプレゼン録画を見ました。","focus":"watched","object":"the presentation recording"}
      ]},
      {"id":"watch-for-risk","title":"④ watch for problems / 問題に注意する","pattern":"WATCH FOR + problem / change","transitivity":"自動詞","structure":"S + watch + for O","image":"問題が出てこないか注意して待つイメージ。","point":"watch for ... は『〜に注意する』。risk, change, error と相性が良い。","examples":[
        {"en":"Please watch for any errors in the report.","ja":"あなたは報告書にミスがないか注意してください。","focus":"watch","object":"for any errors"},
        {"en":"We need to watch for changes in the delivery date.","ja":"私たちは納期変更に注意する必要があります。","focus":"watch","object":"for changes"},
        {"en":"The team watched for safety issues during the installation.","ja":"チームは施工中、安全上の問題に注意していました。","focus":"watched","object":"for safety issues"}
      ]},
      {"id":"watch-someone-do","title":"⑤ watch someone do / 人が〜するのを見る","pattern":"WATCH + someone + do","transitivity":"他動詞","structure":"S + watch + O + V","image":"人の動作を最初から最後まで注意して見るイメージ。","point":"作業手順・説明・現場確認で使いやすい形。","examples":[
        {"en":"I watched the engineer check the wiring.","ja":"私は技術担当者が配線を確認するのを見ました。","focus":"watched","object":"the engineer check the wiring"},
        {"en":"Please watch me set up the system first.","ja":"あなたはまず私がシステムを設定するところを見てください。","focus":"watch","object":"me set up the system"},
        {"en":"We watched the client test the lighting.","ja":"私たちは顧客が照明をテストするのを見ました。","focus":"watched","object":"the client test the lighting"}
      ]},
      {"id":"watch-closely","title":"⑥ watch closely / 注意深く見る","pattern":"WATCH + closely / carefully","transitivity":"他動詞・自動詞","structure":"S + watch + M","image":"注意の距離を近づけて見るイメージ。","point":"carefully / closely と一緒に使うと、見落とし防止の感じが出る。","examples":[
        {"en":"Please watch carefully during the test.","ja":"あなたはテスト中、注意深く見てください。","focus":"watch","object":"carefully"},
        {"en":"We watched closely after the system update.","ja":"私たちはシステム更新後、注意深く状況を見ました。","focus":"watched","object":"closely"},
        {"en":"I will watch this issue closely until Friday.","ja":"私は金曜日までこの問題を注意深く見ます。","focus":"watch","object":"this issue closely"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"watch out","ja":"気をつける","image":"危ないものを見逃さないように注意を外へ向けるイメージ。","pattern":"WATCH OUT","examples":[
        {"en":"Watch out during the installation.","ja":"施工中は気をつけてください。","focus":"Watch out"},
        {"en":"We should watch out when handling the sample.","ja":"私たちはサンプルを扱う時に気をつけるべきです。","focus":"watch out"},
        {"en":"Please watch out for wet paint near the entrance.","ja":"入口付近の塗りたてのペンキに気をつけてください。","focus":"watch out for","object":"wet paint"}
      ]},
      {"phrase":"watch over","ja":"〜を見守る・管理する","image":"上から全体を見て守るイメージ。","pattern":"WATCH OVER + person / process","examples":[
        {"en":"The manager watched over the new team during the project.","ja":"上司はその案件中、新しいチームを見守りました。","focus":"watched over","object":"the new team"},
        {"en":"We need someone to watch over the testing process.","ja":"私たちはテスト工程を管理する人が必要です。","focus":"watch over","object":"the testing process"},
        {"en":"She watched over the booth during the event.","ja":"彼女はイベント中、ブースを管理しました。","focus":"watched over","object":"the booth"}
      ]}
    ]
  },
  {
    "id": "hear",
    "rank": 14,
    "word": "HEAR",
    "ipa": "/hɪr/",
    "kana": "ヒア",
    "syllable": "hear",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "音・話・情報が耳に入る",
    "coreDetail": "HEARは、自分から集中して聞くlistenよりも、音や情報が耳に入る感覚です。連絡を受ける、噂を聞く、相手の話が聞こえる、結果を知る、という仕事表現にも広がります。",
    "coreVisual": {
      "from": ["📞 連絡", "🗣️ 話", "🔔 音", "💬 噂", "📣 知らせ"],
      "to": "自分の耳・情報範囲",
      "label": "外の音・情報 → 耳に入る"
    },
    "meanings": [
      {"id":"hear-sound","title":"① hear a sound / 音が聞こえる","pattern":"HEAR + sound / voice","transitivity":"他動詞","structure":"S + hear + O","image":"音が自然に耳へ入ってくるイメージ。","point":"listenは意識して聞く。hearは聞こえる・耳に入る。","examples":[
        {"en":"I heard a noise from the machine.","ja":"私は機械から音が聞こえました。","focus":"heard","object":"a noise"},
        {"en":"Can you hear me clearly on the call?","ja":"あなたは電話で私の声がはっきり聞こえますか？","focus":"hear","object":"me"},
        {"en":"We heard the alarm during the test.","ja":"私たちはテスト中にアラーム音を聞きました。","focus":"heard","object":"the alarm"}
      ]},
      {"id":"hear-about","title":"② hear about / 〜について聞く","pattern":"HEAR ABOUT + topic","transitivity":"自動詞","structure":"S + hear + about O","image":"ある話題についての情報が耳に入るイメージ。","point":"案件・問題・変更などを知った時に使いやすい。","examples":[
        {"en":"I heard about the schedule change this morning.","ja":"私は今朝、スケジュール変更について聞きました。","focus":"heard","object":"about the schedule change"},
        {"en":"Did you hear about the issue from the client?","ja":"あなたは顧客からその問題について聞きましたか？","focus":"hear","object":"about the issue"},
        {"en":"We heard about a new project in Osaka.","ja":"私たちは大阪の新しい案件について聞きました。","focus":"heard","object":"about a new project"}
      ]},
      {"id":"hear-from","title":"③ hear from / 〜から連絡がある","pattern":"HEAR FROM + person / company","transitivity":"自動詞","structure":"S + hear + from O","image":"相手からの連絡や返事が自分に届くイメージ。","point":"返事待ちの場面でとても自然。contactより会話的。","examples":[
        {"en":"I heard from the supplier yesterday.","ja":"私は昨日、仕入先から連絡を受けました。","focus":"heard","object":"from the supplier"},
        {"en":"Have you heard from the client yet?","ja":"あなたはもう顧客から連絡を受けましたか？","focus":"heard","object":"from the client"},
        {"en":"We haven't heard from the factory about the sample.","ja":"私たちはサンプルについて、まだ工場から連絡を受けていません。","focus":"heard","object":"from the factory"}
      ]},
      {"id":"hear-that","title":"④ hear that / 〜だと聞く","pattern":"HEAR THAT + sentence","transitivity":"他動詞","structure":"S + hear + that節","image":"文の形をした情報が耳に入るイメージ。","point":"thatは省略されることも多いが、学習ではまず形を意識する。","examples":[
        {"en":"I heard that the delivery date was moved.","ja":"私は納期が変更されたと聞きました。","focus":"heard","object":"that the delivery date was moved"},
        {"en":"We heard that the client approved the quotation.","ja":"私たちは顧客が見積を承認したと聞きました。","focus":"heard","object":"that the client approved the quotation"},
        {"en":"Did you hear that the meeting was canceled?","ja":"あなたは会議がキャンセルされたと聞きましたか？","focus":"hear","object":"that the meeting was canceled"}
      ]},
      {"id":"hear-feedback","title":"⑤ hear feedback / 反応を聞く","pattern":"HEAR + feedback / opinion","transitivity":"他動詞","structure":"S + hear + O","image":"相手の意見や反応が自分に入ってくるイメージ。","point":"feedback, opinion, comments などと使いやすい。","examples":[
        {"en":"We heard positive feedback from the customer.","ja":"私たちは顧客から良い反応を聞きました。","focus":"heard","object":"positive feedback"},
        {"en":"I want to hear your opinion before we decide.","ja":"私は決定前にあなたの意見を聞きたいです。","focus":"hear","object":"your opinion"},
        {"en":"The sales team heard several comments after the demo.","ja":"営業チームはデモ後にいくつかコメントを聞きました。","focus":"heard","object":"several comments"}
      ]},
      {"id":"hear-someone-do","title":"⑥ hear someone say / 人が〜と言うのを聞く","pattern":"HEAR + someone + do","transitivity":"他動詞","structure":"S + hear + O + V","image":"相手の発言や音が耳に入るイメージ。","point":"see/watchと同じく、知覚動詞の形。仕事では say / mention と相性が良い。","examples":[
        {"en":"I heard the client say the color was good.","ja":"私は顧客が色味は良いと言うのを聞きました。","focus":"heard","object":"the client say the color was good"},
        {"en":"We heard the manager mention the new target.","ja":"私たちは上司が新しい目標に触れるのを聞きました。","focus":"heard","object":"the manager mention the new target"},
        {"en":"Did you hear him explain the reason?","ja":"あなたは彼が理由を説明するのを聞きましたか？","focus":"hear","object":"him explain the reason"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"hear from","ja":"〜から連絡がある","image":"相手から連絡が自分の耳・受信範囲へ届くイメージ。","pattern":"HEAR FROM + person / company","examples":[
        {"en":"Please let me know when you hear from the client.","ja":"顧客から連絡があったら私に教えてください。","focus":"hear from","object":"the client"},
        {"en":"We heard from the supplier about the new price.","ja":"私たちは仕入先から新価格について連絡を受けました。","focus":"heard from","object":"the supplier"},
        {"en":"I haven't heard from him this week.","ja":"私は今週、彼から連絡を受けていません。","focus":"heard from","object":"him"}
      ]},
      {"phrase":"hear about","ja":"〜について聞く","image":"話題に関する情報が耳に入るイメージ。","pattern":"HEAR ABOUT + topic","examples":[
        {"en":"I heard about the problem from accounting.","ja":"私は経理からその問題について聞きました。","focus":"heard about","object":"the problem"},
        {"en":"Did you hear about the new order?","ja":"あなたは新しい注文について聞きましたか？","focus":"hear about","object":"the new order"},
        {"en":"We heard about the change after lunch.","ja":"私たちは昼食後にその変更について聞きました。","focus":"heard about","object":"the change"}
      ]}
    ]
  },
  {
    "id": "listen",
    "rank": 15,
    "word": "LISTEN",
    "ipa": "/ˈlɪsən/",
    "kana": "リッスン",
    "syllable": "lis-ten",
    "transitivity": "自動詞",
    "importance": "★★★★☆ 重要",
    "core": "意識を向けて聞く",
    "coreDetail": "LISTENは、音や相手の話に自分から注意を向けて聞く感覚です。hearが『耳に入る』なら、listenは『聞こうとして聞く』です。顧客の要望を聞く、説明を聞く、アドバイスを受け入れる、という仕事表現につながります。",
    "coreVisual": {
      "from": ["🗣️ 顧客の声", "📋 説明", "💡 提案", "⚠️ 注意", "🎧 音声"],
      "to": "自分の注意・理解",
      "label": "音・話 → 意識を向けて聞く"
    },
    "meanings": [
      {"id":"listen-to-person","title":"① listen to someone / 人の話を聞く","pattern":"LISTEN TO + person","transitivity":"自動詞","structure":"S + listen + to O","image":"相手に注意を向けて話を受け止めるイメージ。","point":"listenは基本的に listen to の形で目的語を置く。","examples":[
        {"en":"Please listen to the customer's request carefully.","ja":"あなたは顧客の要望を注意深く聞いてください。","focus":"listen","object":"to the customer's request"},
        {"en":"I listened to my manager before replying.","ja":"私は返信する前に上司の話を聞きました。","focus":"listened","object":"to my manager"},
        {"en":"We should listen to the site staff first.","ja":"私たちはまず現場スタッフの話を聞くべきです。","focus":"listen","object":"to the site staff"}
      ]},
      {"id":"listen-to-explanation","title":"② listen to an explanation / 説明を聞く","pattern":"LISTEN TO + explanation / presentation","transitivity":"自動詞","structure":"S + listen + to O","image":"説明の内容に意識を向けて理解しようとするイメージ。","point":"説明・提案・発表などを聞く時に使いやすい。","examples":[
        {"en":"I listened to the explanation about the new system.","ja":"私は新しいシステムについての説明を聞きました。","focus":"listened","object":"to the explanation"},
        {"en":"Please listen to the presentation and ask questions later.","ja":"あなたはプレゼンを聞いて、後で質問してください。","focus":"listen","object":"to the presentation"},
        {"en":"We listened to the supplier's proposal yesterday.","ja":"私たちは昨日、仕入先の提案を聞きました。","focus":"listened","object":"to the supplier's proposal"}
      ]},
      {"id":"listen-carefully","title":"③ listen carefully / 注意深く聞く","pattern":"LISTEN + carefully / closely","transitivity":"自動詞","structure":"S + listen + M","image":"聞く意識を強くして、内容を取りこぼさないイメージ。","point":"carefully, closely と相性が良い。会議や指示確認で便利。","examples":[
        {"en":"Please listen carefully during the safety briefing.","ja":"あなたは安全説明中、注意深く聞いてください。","focus":"listen","object":"carefully"},
        {"en":"I listened closely to the client's concerns.","ja":"私は顧客の懸念を注意深く聞きました。","focus":"listened","object":"closely"},
        {"en":"We need to listen carefully before making a decision.","ja":"私たちは決定する前に注意深く聞く必要があります。","focus":"listen","object":"carefully"}
      ]},
      {"id":"listen-for","title":"④ listen for / 〜を聞き取ろうとする","pattern":"LISTEN FOR + sound / word","transitivity":"自動詞","structure":"S + listen + for O","image":"目的の音や言葉を探すように聞くイメージ。","point":"listen for は『〜が聞こえるか注意して聞く』。","examples":[
        {"en":"Please listen for any unusual noise from the machine.","ja":"あなたは機械から異音がしないか注意して聞いてください。","focus":"listen","object":"for any unusual noise"},
        {"en":"We listened for the alarm during the test.","ja":"私たちはテスト中、アラーム音が鳴らないか聞きました。","focus":"listened","object":"for the alarm"},
        {"en":"I listened for the customer's key point in the meeting.","ja":"私は会議で顧客の重要なポイントを聞き取ろうとしました。","focus":"listened","object":"for the customer's key point"}
      ]},
      {"id":"listen-and-understand","title":"⑤ listen and understand / 聞いて理解する","pattern":"LISTEN + and + verb","transitivity":"自動詞","structure":"S + listen + and V","image":"聞いた内容を理解や行動につなげるイメージ。","point":"listenだけで終わらず、understand / respond / improve につながる形。","examples":[
        {"en":"We listened and understood the client's concern.","ja":"私たちは顧客の懸念を聞いて理解しました。","focus":"listened","object":"and understood"},
        {"en":"Please listen and respond after I finish.","ja":"あなたは私が話し終えてから聞いて返答してください。","focus":"listen","object":"and respond"},
        {"en":"The team listened and improved the proposal.","ja":"チームは話を聞いて提案書を改善しました。","focus":"listened","object":"and improved"}
      ]},
      {"id":"listen-to-advice","title":"⑥ listen to advice / アドバイスを聞く","pattern":"LISTEN TO + advice / feedback","transitivity":"自動詞","structure":"S + listen + to O","image":"相手の助言を受け止めるイメージ。","point":"単に耳で聞くだけでなく『受け入れる』ニュアンスも出る。","examples":[
        {"en":"We should listen to the engineer's advice.","ja":"私たちは技術担当者のアドバイスを聞くべきです。","focus":"listen","object":"to the engineer's advice"},
        {"en":"I listened to the customer's feedback and changed the layout.","ja":"私は顧客の意見を聞いて、レイアウトを変更しました。","focus":"listened","object":"to the customer's feedback"},
        {"en":"Please listen to the team's suggestion before deciding.","ja":"あなたは決定前にチームの提案を聞いてください。","focus":"listen","object":"to the team's suggestion"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"listen to","ja":"〜を聞く・〜に耳を傾ける","image":"相手や内容へ注意を向けるイメージ。","pattern":"LISTEN TO + person / idea","examples":[
        {"en":"We need to listen to the customer's needs.","ja":"私たちは顧客のニーズに耳を傾ける必要があります。","focus":"listen to","object":"the customer's needs"},
        {"en":"I listened to the new proposal carefully.","ja":"私は新しい提案を注意深く聞きました。","focus":"listened to","object":"the new proposal"},
        {"en":"Please listen to the instruction before starting.","ja":"あなたは始める前に指示を聞いてください。","focus":"listen to","object":"the instruction"}
      ]},
      {"phrase":"listen in","ja":"こっそり聞く・会話に聞き耳を立てる","image":"外側から会話の中へ耳を入れるイメージ。","pattern":"LISTEN IN","examples":[
        {"en":"I did not listen in on the private call.","ja":"私はその個人的な電話をこっそり聞いていません。","focus":"listen in","object":"on the private call"},
        {"en":"Please do not listen in during the customer call.","ja":"顧客との電話中に聞き耳を立てないでください。","focus":"listen in"},
        {"en":"He listened in for a moment and then left the room.","ja":"彼は少し聞き耳を立ててから部屋を出ました。","focus":"listened in"}
      ]}
    ]
  },
  {
    "id": "think",
    "rank": 16,
    "word": "THINK",
    "ipa": "/θɪŋk/",
    "kana": "シンク",
    "syllable": "think",
    "transitivity": "自動詞・他動詞",
    "importance": "★★★★★ 超重要",
    "core": "頭の中で考えを動かす",
    "coreDetail": "THINKは、情報・可能性・理由を頭の中で動かして判断へ近づける感覚です。意見を持つ、検討する、思い出す、予想する、深く考える、という仕事の会話で頻繁に使います。",
    "coreVisual": {
      "from": ["💡 情報", "❓ 課題", "📊 数字", "🗣️ 意見", "🗓️ 予定"],
      "to": "頭の中の判断・考え",
      "label": "情報・可能性 → 頭の中で考える"
    },
    "meanings": [
      {"id":"think-opinion","title":"① think / 〜だと思う","pattern":"THINK + sentence","transitivity":"他動詞","structure":"S + think + that節","image":"頭の中の判断を言葉にするイメージ。","point":"I think ... は意見をやわらかく伝える基本表現。thatは省略されることが多い。","examples":[
        {"en":"I think the schedule is realistic.","ja":"私はそのスケジュールは現実的だと思います。","focus":"think","object":"the schedule is realistic"},
        {"en":"We think this proposal will help the client.","ja":"私たちはこの提案が顧客の役に立つと思います。","focus":"think","object":"this proposal will help the client"},
        {"en":"Do you think the price is acceptable?","ja":"あなたはその価格が受け入れられると思いますか？","focus":"think","object":"the price is acceptable"}
      ]},
      {"id":"think-about","title":"② think about / 〜について考える","pattern":"THINK ABOUT + topic","transitivity":"自動詞","structure":"S + think + about O","image":"あるテーマを頭の中で扱うイメージ。","point":"案件・条件・予定・提案など、検討対象を置く時に使いやすい。","examples":[
        {"en":"I will think about the customer's request.","ja":"私は顧客の要望について考えます。","focus":"think","object":"about the customer's request"},
        {"en":"We need to think about the delivery date again.","ja":"私たちは納期についてもう一度考える必要があります。","focus":"think","object":"about the delivery date"},
        {"en":"Please think about the best way to explain it.","ja":"あなたはそれを説明する最善の方法について考えてください。","focus":"think","object":"about the best way to explain it"}
      ]},
      {"id":"think-of","title":"③ think of / 〜を思いつく・思い浮かべる","pattern":"THINK OF + idea / name","transitivity":"自動詞","structure":"S + think + of O","image":"頭の中にアイデアや名前が浮かぶイメージ。","point":"idea, solution, name などと相性が良い。","examples":[
        {"en":"I thought of a better example for the meeting.","ja":"私は会議用により良い例を思いつきました。","focus":"thought","object":"of a better example"},
        {"en":"Can you think of another option?","ja":"あなたは別の選択肢を思いつけますか？","focus":"think","object":"of another option"},
        {"en":"We couldn't think of a simple solution yesterday.","ja":"私たちは昨日、簡単な解決策を思いつけませんでした。","focus":"think","object":"of a simple solution"}
      ]},
      {"id":"think-need","title":"④ think we need / 必要だと思う","pattern":"THINK + S + need","transitivity":"他動詞","structure":"S + think + sentence","image":"必要性を頭の中で判断するイメージ。","point":"仕事では We think we need ... の形が自然。押しつけすぎず提案できる。","examples":[
        {"en":"We think we need more time to check the data.","ja":"私たちはデータ確認にもう少し時間が必要だと思います。","focus":"think","object":"we need more time"},
        {"en":"I think we need approval before sending the estimate.","ja":"私は見積を送る前に承認が必要だと思います。","focus":"think","object":"we need approval"},
        {"en":"Do you think we need another meeting?","ja":"あなたは私たちにもう一度会議が必要だと思いますか？","focus":"think","object":"we need another meeting"}
      ]},
      {"id":"think-through","title":"⑤ think through / よく考える","pattern":"THINK THROUGH + issue / plan","transitivity":"他動詞","structure":"S + think + through O","image":"問題の中を最後まで通して考えるイメージ。","point":"失敗を防ぐために、計画や条件を丁寧に考える時に使う。","examples":[
        {"en":"We should think through the installation plan.","ja":"私たちは施工計画をよく考えるべきです。","focus":"think","object":"through the installation plan"},
        {"en":"I thought through the risks before the proposal.","ja":"私は提案前にリスクをよく考えました。","focus":"thought","object":"through the risks"},
        {"en":"Please think through the schedule before you reply.","ja":"あなたは返信前にスケジュールをよく考えてください。","focus":"think","object":"through the schedule"}
      ]},
      {"id":"think-carefully","title":"⑥ think carefully / 慎重に考える","pattern":"THINK + carefully","transitivity":"自動詞","structure":"S + think + M","image":"判断を急がず、頭の中で丁寧に確認するイメージ。","point":"carefully, clearly, seriously とよく使う。","examples":[
        {"en":"Please think carefully before changing the specification.","ja":"あなたは仕様を変更する前に慎重に考えてください。","focus":"think","object":"carefully"},
        {"en":"We thought seriously about the customer's concern.","ja":"私たちは顧客の懸念について真剣に考えました。","focus":"thought","object":"seriously"},
        {"en":"I need to think clearly before the call.","ja":"私は電話の前に冷静に考える必要があります。","focus":"think","object":"clearly"}
      ]},
      {"id":"think-so","title":"⑦ I think so / そう思う","pattern":"THINK + so / not","transitivity":"自動詞に近い使い方","structure":"S + think + so / not","image":"前の内容への判断を短く返すイメージ。","point":"返答で便利。I don't think so. は『そうは思いません』。","examples":[
        {"en":"I think so, but I will confirm it.","ja":"私はそう思いますが、確認します。","focus":"think","object":"so"},
        {"en":"We don't think so at this stage.","ja":"私たちはこの段階ではそう思っていません。","focus":"think","object":"so"},
        {"en":"Do you think so too?","ja":"あなたもそう思いますか？","focus":"think","object":"so"}
      ]},
      {"id":"think-ahead","title":"⑧ think ahead / 先を考える","pattern":"THINK AHEAD","transitivity":"自動詞","structure":"S + think + ahead","image":"今だけでなく、先の状況まで考えるイメージ。","point":"営業・納期・在庫・予定管理で使いやすい。","examples":[
        {"en":"We need to think ahead before the busy season.","ja":"私たちは繁忙期の前に先を考える必要があります。","focus":"think","object":"ahead"},
        {"en":"I thought ahead and prepared extra samples.","ja":"私は先を考えて追加サンプルを準備しました。","focus":"thought","object":"ahead"},
        {"en":"Please think ahead about the next order.","ja":"あなたは次の注文について先を考えてください。","focus":"think","object":"ahead"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"think about","ja":"〜について考える","image":"テーマに意識を向けて考えるイメージ。","pattern":"THINK ABOUT + topic","examples":[
        {"en":"Let's think about the next proposal.","ja":"次の提案について考えましょう。","focus":"think about","object":"the next proposal"},
        {"en":"We are thinking about a better delivery plan.","ja":"私たちはより良い納品計画について考えています。","focus":"thinking about","object":"a better delivery plan"},
        {"en":"Please think about the customer's budget.","ja":"顧客の予算について考えてください。","focus":"think about","object":"the customer's budget"}
      ]},
      {"phrase":"think of","ja":"〜を思いつく・思い浮かべる","image":"アイデアが頭に浮かぶイメージ。","pattern":"THINK OF + idea / option","examples":[
        {"en":"Can you think of a better way?","ja":"もっと良い方法を思いつけますか？","focus":"think of","object":"a better way"},
        {"en":"I thought of another example for the report.","ja":"私は報告書用に別の例を思いつきました。","focus":"thought of","object":"another example"},
        {"en":"We need to think of a simple explanation.","ja":"私たちは簡単な説明を考え出す必要があります。","focus":"think of","object":"a simple explanation"}
      ]},
      {"phrase":"think over","ja":"〜をよく考える・検討する","image":"決定前に考えを寝かせて検討するイメージ。","pattern":"THINK OVER + plan / offer","examples":[
        {"en":"Please think over the offer before you decide.","ja":"決める前にその提案をよく考えてください。","focus":"think over","object":"the offer"},
        {"en":"I need to think it over tonight.","ja":"私は今夜それをよく考える必要があります。","focus":"think it over","object":"it"},
        {"en":"The client will think over our proposal.","ja":"顧客は私たちの提案を検討します。","focus":"think over","object":"our proposal"}
      ]},
      {"phrase":"think through","ja":"〜を最後まで考え抜く","image":"計画や問題の中を通って結論まで考えるイメージ。","pattern":"THINK THROUGH + issue / plan","examples":[
        {"en":"We need to think through the details.","ja":"私たちは詳細を最後まで考える必要があります。","focus":"think through","object":"the details"},
        {"en":"I thought through the schedule before I replied.","ja":"私は返信前にスケジュールをよく考えました。","focus":"thought through","object":"the schedule"},
        {"en":"Please think this through with the team.","ja":"チームと一緒にこれをよく考えてください。","focus":"think this through","object":"this"}
      ]},
      {"phrase":"think ahead","ja":"先を考える","image":"現在から先の予定・リスクへ視線を伸ばすイメージ。","pattern":"THINK AHEAD","examples":[
        {"en":"We should think ahead about inventory.","ja":"私たちは在庫について先を考えるべきです。","focus":"think ahead","object":"about inventory"},
        {"en":"He always thinks ahead before a big meeting.","ja":"彼は大きな会議の前にいつも先を考えます。","focus":"thinks ahead"},
        {"en":"Let's think ahead and prepare the documents now.","ja":"先を考えて、今のうちに資料を準備しましょう。","focus":"think ahead"}
      ]}
    ]
  },
  {
    "id": "know",
    "rank": 17,
    "word": "KNOW",
    "ipa": "/noʊ/",
    "kana": "ノウ",
    "syllable": "know",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "情報・人・やり方が自分の中にある",
    "coreDetail": "KNOWは、情報や経験が自分の中に入っていて、必要な時に使える感覚です。事実を知っている、人を知っている、やり方が分かる、状況を把握している、という仕事の基本表現になります。",
    "coreVisual": {
      "from": ["📄 情報", "👤 人", "🛠️ やり方", "📍 状況", "✅ 事実"],
      "to": "自分の知識・経験の中",
      "label": "情報・経験 → 自分の中にある"
    },
    "meanings": [
      {"id":"know-fact","title":"① know / 事実を知っている","pattern":"KNOW + fact / answer","transitivity":"他動詞","structure":"S + know + O","image":"必要な情報が自分の中にあるイメージ。","point":"I know the reason. のように、理由・答え・状況を知っている時に使う。","examples":[
        {"en":"I know the reason for the delay.","ja":"私は遅延の理由を知っています。","focus":"know","object":"the reason"},
        {"en":"Do you know the delivery date?","ja":"あなたは納期を知っていますか？","focus":"know","object":"the delivery date"},
        {"en":"We know the client wants a quick reply.","ja":"私たちは顧客が早い返信を求めていることを知っています。","focus":"know","object":"the client wants a quick reply"}
      ]},
      {"id":"know-about","title":"② know about / 〜について知っている","pattern":"KNOW ABOUT + topic","transitivity":"自動詞","structure":"S + know + about O","image":"あるテーマについての情報を持っているイメージ。","point":"案件・問題・製品・変更などについて知っている時に使う。","examples":[
        {"en":"I know about the schedule change.","ja":"私はスケジュール変更について知っています。","focus":"know","object":"about the schedule change"},
        {"en":"Do you know about this product?","ja":"あなたはこの製品について知っていますか？","focus":"know","object":"about this product"},
        {"en":"We need to know about the new rule before we reply.","ja":"私たちは返信前に新しいルールについて知る必要があります。","focus":"know","object":"about the new rule"}
      ]},
      {"id":"know-person","title":"③ know someone / 人を知っている","pattern":"KNOW + person / company","transitivity":"他動詞","structure":"S + know + O","image":"人や会社が自分の経験の中にあるイメージ。","point":"meetは会う、knowは知っている・面識がある。","examples":[
        {"en":"I know the person in charge at that company.","ja":"私はその会社の担当者を知っています。","focus":"know","object":"the person in charge"},
        {"en":"Do you know anyone in the design team?","ja":"あなたは設計チームに知っている人がいますか？","focus":"know","object":"anyone"},
        {"en":"We know the supplier well.","ja":"私たちはその仕入先をよく知っています。","focus":"know","object":"the supplier"}
      ]},
      {"id":"know-how","title":"④ know how to / 〜のやり方が分かる","pattern":"KNOW HOW TO + verb","transitivity":"他動詞","structure":"S + know + how to V","image":"手順や方法が自分の中にあるイメージ。","point":"仕事では操作・確認・説明・手配のやり方を表す時に便利。","examples":[
        {"en":"I know how to update the file.","ja":"私はそのファイルの更新方法を知っています。","focus":"know","object":"how to update the file"},
        {"en":"Do you know how to check the setting?","ja":"あなたは設定の確認方法を知っていますか？","focus":"know","object":"how to check the setting"},
        {"en":"We know how to explain this to the client.","ja":"私たちはこれを顧客に説明する方法を分かっています。","focus":"know","object":"how to explain this"}
      ]},
      {"id":"know-if","title":"⑤ know if / 〜かどうか分かる","pattern":"KNOW IF / WHETHER + sentence","transitivity":"他動詞","structure":"S + know + if節","image":"未確定の情報が分かっているか確認するイメージ。","point":"確認の質問でよく使う。whetherは少し丁寧。","examples":[
        {"en":"Do you know if the client approved it?","ja":"あなたは顧客がそれを承認したかどうか分かりますか？","focus":"know","object":"if the client approved it"},
        {"en":"I don't know whether the sample has arrived.","ja":"私はサンプルが到着したかどうか分かりません。","focus":"know","object":"whether the sample has arrived"},
        {"en":"We need to know if the schedule is still possible.","ja":"私たちはそのスケジュールがまだ可能かどうか知る必要があります。","focus":"know","object":"if the schedule is still possible"}
      ]},
      {"id":"know-what","title":"⑥ know what to do / 何をすべきか分かる","pattern":"KNOW WHAT TO DO","transitivity":"他動詞","structure":"S + know + what to do","image":"次の行動が自分の中で見えているイメージ。","point":"トラブル時や確認後の行動に使いやすい。","examples":[
        {"en":"I know what to do next.","ja":"私は次に何をすべきか分かっています。","focus":"know","object":"what to do next"},
        {"en":"We don't know what to do without the drawing.","ja":"私たちは図面がないと何をすべきか分かりません。","focus":"know","object":"what to do"},
        {"en":"Do you know what to prepare for the meeting?","ja":"あなたは会議に何を準備すべきか分かりますか？","focus":"know","object":"what to prepare"}
      ]},
      {"id":"know-well","title":"⑦ know well / よく知っている","pattern":"KNOW + O + well","transitivity":"他動詞","structure":"S + know + O + M","image":"対象について深い知識や経験があるイメージ。","point":"製品・顧客・市場・手順について詳しい時に使う。","examples":[
        {"en":"She knows the product well.","ja":"彼女はその製品をよく知っています。","focus":"knows","object":"the product"},
        {"en":"We know this market very well.","ja":"私たちはこの市場をとてもよく知っています。","focus":"know","object":"this market"},
        {"en":"Do you know the process well enough to explain it?","ja":"あなたはそれを説明できるくらい、その手順をよく知っていますか？","focus":"know","object":"the process"}
      ]},
      {"id":"know-let-me","title":"⑧ let me know / 私に知らせる","pattern":"LET + person + KNOW","transitivity":"他動詞","structure":"let + O + know","image":"相手の中にある情報を自分へ知らせてもらうイメージ。","point":"メールやチャットで非常によく使う。丁寧で自然。","examples":[
        {"en":"Please let me know when you receive the file.","ja":"あなたがファイルを受け取ったら私に知らせてください。","focus":"know","object":"when you receive the file"},
        {"en":"Could you let us know the final quantity?","ja":"最終数量を私たちに知らせていただけますか？","focus":"know","object":"the final quantity"},
        {"en":"I will let you know after I confirm it.","ja":"確認後にあなたへ知らせます。","focus":"know","object":"after I confirm it"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"know about","ja":"〜について知っている","image":"あるテーマの情報が自分の知識の中にあるイメージ。","pattern":"KNOW ABOUT + topic","examples":[
        {"en":"Do you know about the new rule?","ja":"あなたは新しいルールについて知っていますか？","focus":"know about","object":"the new rule"},
        {"en":"I know about the issue from yesterday.","ja":"私は昨日からその問題について知っています。","focus":"know about","object":"the issue"},
        {"en":"We should know about the client's situation before the call.","ja":"私たちは電話前に顧客の状況について知っておくべきです。","focus":"know about","object":"the client's situation"}
      ]},
      {"phrase":"know of","ja":"〜の存在を知っている","image":"詳しくはなくても、存在が知識の中にあるイメージ。","pattern":"KNOW OF + person / thing","examples":[
        {"en":"I know of a supplier who can handle this.","ja":"私はこれに対応できる仕入先を知っています。","focus":"know of","object":"a supplier"},
        {"en":"Do you know of any similar cases?","ja":"あなたは似た事例を何か知っていますか？","focus":"know of","object":"any similar cases"},
        {"en":"We know of one possible risk.","ja":"私たちは考えられるリスクを1つ把握しています。","focus":"know of","object":"one possible risk"}
      ]},
      {"phrase":"know by","ja":"〜で分かる・見分ける","image":"名前や特徴を手がかりに分かるイメージ。","pattern":"KNOW + O + BY + clue","examples":[
        {"en":"You can know the version by the label.","ja":"ラベルでバージョンが分かります。","focus":"know by","object":"the label"},
        {"en":"We know the model by its code number.","ja":"私たちは型番でそのモデルを見分けます。","focus":"know by","object":"its code number"},
        {"en":"I knew the customer by the company name.","ja":"私は会社名でその顧客だと分かりました。","focus":"knew by","object":"the company name"}
      ]},
      {"phrase":"know better than to","ja":"〜するほど分別がないわけではない","image":"経験があるので、その悪い行動を避けられるイメージ。","pattern":"KNOW BETTER THAN TO + verb","examples":[
        {"en":"We know better than to send the estimate without checking it.","ja":"私たちは確認せずに見積を送るようなことはしません。","focus":"know better than to","object":"send the estimate"},
        {"en":"He knows better than to promise an impossible delivery date.","ja":"彼は不可能な納期を約束するようなことはしません。","focus":"knows better than to","object":"promise an impossible delivery date"},
        {"en":"You know better than to change the data without approval.","ja":"あなたは承認なしにデータを変更するようなことはしないはずです。","focus":"know better than to","object":"change the data"}
      ]}
    ]
  },
  {
    "id": "feel",
    "rank": 18,
    "word": "FEEL",
    "ipa": "/fiːl/",
    "kana": "フィール",
    "syllable": "feel",
    "transitivity": "自動詞・他動詞",
    "importance": "★★★★☆ 重要",
    "core": "体・心・直感で感じる",
    "coreDetail": "FEELは、体の感覚、気持ち、印象、直感を自分の中で感じる動詞です。仕事では『〜だと感じる』『不安に感じる』『自由に〜してください』『〜したい気がする』など、相手にやわらかく伝える表現にもなります。",
    "coreVisual": {
      "from": ["💭 印象", "😊 気持ち", "⚠️ 不安", "🤝 雰囲気", "💡 直感"],
      "to": "自分の心・体の感覚",
      "label": "外の状況・内側の変化 → 感覚として入る"
    },
    "meanings": [
      {"id":"feel-adjective","title":"① feel good / 〜に感じる","pattern":"FEEL + adjective","transitivity":"自動詞","structure":"S + feel + C","image":"自分の心や体がその状態にあるイメージ。","point":"good, tired, nervous, comfortable など形容詞と使う。","examples":[
        {"en":"I feel confident about the presentation.","ja":"私はそのプレゼンに自信を感じています。","focus":"feel","object":"confident"},
        {"en":"She felt nervous before the client meeting.","ja":"彼女は顧客との会議前に緊張を感じました。","focus":"felt","object":"nervous"},
        {"en":"Do you feel comfortable with this schedule?","ja":"あなたはこのスケジュールで問題ないと感じますか？","focus":"feel","object":"comfortable"}
      ]},
      {"id":"feel-that","title":"② feel that / 〜だと感じる","pattern":"FEEL THAT + sentence","transitivity":"他動詞","structure":"S + feel + that節","image":"状況から受けた印象を判断として伝えるイメージ。","point":"thinkより感覚・印象寄り。ビジネスでは柔らかく意見を言える。","examples":[
        {"en":"I feel that we should check the details again.","ja":"私は私たちが詳細をもう一度確認すべきだと感じています。","focus":"feel","object":"that we should check the details again"},
        {"en":"We feel that the price is still high.","ja":"私たちは価格がまだ高いと感じています。","focus":"feel","object":"that the price is still high"},
        {"en":"Do you feel that the client understood our point?","ja":"あなたは顧客が私たちの要点を理解したと感じますか？","focus":"feel","object":"that the client understood our point"}
      ]},
      {"id":"feel-about","title":"③ feel about / 〜についてどう感じる","pattern":"FEEL ABOUT + topic","transitivity":"自動詞","structure":"S + feel + about O","image":"あるテーマに対する気持ちや印象を持つイメージ。","point":"How do you feel about ...? は意見や印象を聞く自然な質問。","examples":[
        {"en":"How do you feel about the new design?","ja":"あなたは新しいデザインについてどう感じますか？","focus":"feel","object":"about the new design"},
        {"en":"I feel good about the proposal.","ja":"私はその提案に良い感触を持っています。","focus":"feel","object":"about the proposal"},
        {"en":"We don't feel comfortable about the deadline.","ja":"私たちはその締切に不安を感じています。","focus":"feel","object":"about the deadline"}
      ]},
      {"id":"feel-like","title":"④ feel like / 〜したい気がする・〜のように感じる","pattern":"FEEL LIKE + noun / -ing","transitivity":"自動詞","structure":"S + feel + like O / V-ing","image":"気持ちがある方向へ向くイメージ。","point":"I feel like checking it again. は『もう一度確認したい気がする』。仕事では使いすぎず、会話で自然。","examples":[
        {"en":"I feel like we should call the client first.","ja":"私はまず顧客に電話した方がよい気がします。","focus":"feel","object":"like we should call the client first"},
        {"en":"She felt like the meeting went well.","ja":"彼女は会議がうまくいったように感じました。","focus":"felt","object":"like the meeting went well"},
        {"en":"Do you feel like reviewing the document again?","ja":"あなたは資料をもう一度確認したい気がしますか？","focus":"feel","object":"like reviewing the document again"}
      ]},
      {"id":"feel-free","title":"⑤ feel free to / 遠慮なく〜する","pattern":"FEEL FREE TO + verb","transitivity":"自動詞","structure":"feel free to V","image":"相手が自由に動ける状態を感じられるようにするイメージ。","point":"メールで非常によく使う丁寧表現。Please feel free to contact me. が定番。","examples":[
        {"en":"Please feel free to contact me if you have any questions.","ja":"ご質問があれば、遠慮なく私にご連絡ください。","focus":"feel","object":"free to contact me"},
        {"en":"Please feel free to ask us about the specification.","ja":"仕様について遠慮なく私たちにご質問ください。","focus":"feel","object":"free to ask us"},
        {"en":"Feel free to share your opinion in the meeting.","ja":"会議では遠慮なくあなたの意見を共有してください。","focus":"Feel","object":"free to share your opinion"}
      ]},
      {"id":"feel-need","title":"⑥ feel the need to / 〜する必要を感じる","pattern":"FEEL THE NEED TO + verb","transitivity":"他動詞","structure":"S + feel + O","image":"必要性を感覚として強く受け取るイメージ。","point":"少し硬め。判断理由を丁寧に伝える時に使える。","examples":[
        {"en":"We feel the need to confirm the quantity again.","ja":"私たちは数量をもう一度確認する必要を感じています。","focus":"feel","object":"the need to confirm the quantity"},
        {"en":"I felt the need to explain the risk clearly.","ja":"私はリスクを明確に説明する必要を感じました。","focus":"felt","object":"the need to explain the risk"},
        {"en":"Do you feel the need to update the customer today?","ja":"あなたは今日顧客に最新状況を伝える必要を感じますか？","focus":"feel","object":"the need to update the customer"}
      ]},
      {"id":"feel-pressure","title":"⑦ feel pressure / プレッシャーを感じる","pattern":"FEEL + pressure / stress","transitivity":"他動詞","structure":"S + feel + O","image":"外からの負荷を心で受けるイメージ。","point":"pressure, stress, concern, risk などとよく使う。","examples":[
        {"en":"I felt pressure before the presentation.","ja":"私はプレゼン前にプレッシャーを感じました。","focus":"felt","object":"pressure"},
        {"en":"The team feels stress because the deadline is tight.","ja":"チームは締切が厳しいためストレスを感じています。","focus":"feels","object":"stress"},
        {"en":"We feel some concern about the delivery plan.","ja":"私たちは納品計画について少し懸念を感じています。","focus":"feel","object":"some concern"}
      ]},
      {"id":"feel-better","title":"⑧ feel better / 良く感じる・体調が良くなる","pattern":"FEEL + better","transitivity":"自動詞","structure":"S + feel + C","image":"状態が前より良く感じられるイメージ。","point":"体調にも、状況への安心感にも使える。","examples":[
        {"en":"I feel better after confirming the schedule.","ja":"私はスケジュールを確認した後、安心しました。","focus":"feel","object":"better"},
        {"en":"She felt better after talking with her manager.","ja":"彼女は上司と話した後、気持ちが楽になりました。","focus":"felt","object":"better"},
        {"en":"Do you feel better about the plan now?","ja":"あなたは今、その計画について前より安心していますか？","focus":"feel","object":"better"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"feel like","ja":"〜したい気がする・〜のように感じる","image":"気持ちがある方向へ向くイメージ。","pattern":"FEEL LIKE + noun / -ing / sentence","examples":[
        {"en":"I feel like we should confirm it first.","ja":"私はまずそれを確認した方がよい気がします。","focus":"feel like","object":"we should confirm it first"},
        {"en":"She felt like the customer was still unsure.","ja":"彼女は顧客がまだ迷っているように感じました。","focus":"felt like","object":"the customer was still unsure"},
        {"en":"Do you feel like joining the call?","ja":"あなたはその電話会議に参加したい気がしますか？","focus":"feel like","object":"joining the call"}
      ]},
      {"phrase":"feel about","ja":"〜について感じる","image":"テーマに対する気持ち・印象を持つイメージ。","pattern":"FEEL ABOUT + topic","examples":[
        {"en":"How do you feel about this proposal?","ja":"この提案についてどう感じますか？","focus":"feel about","object":"this proposal"},
        {"en":"We feel good about the new schedule.","ja":"私たちは新しいスケジュールに良い感触を持っています。","focus":"feel good about","object":"the new schedule"},
        {"en":"I don't feel comfortable about the price yet.","ja":"私はまだその価格に安心できていません。","focus":"feel comfortable about","object":"the price"}
      ]},
      {"phrase":"feel for","ja":"〜に同情する・気持ちを理解する","image":"相手の気持ちの方へ心を寄せるイメージ。","pattern":"FEEL FOR + person","examples":[
        {"en":"I feel for the team because the deadline is tight.","ja":"締切が厳しいので、私はチームの気持ちが分かります。","focus":"feel for","object":"the team"},
        {"en":"We feel for the customer after the delay.","ja":"私たちは遅延後の顧客の気持ちを理解しています。","focus":"feel for","object":"the customer"},
        {"en":"She felt for the new staff during the busy week.","ja":"彼女は忙しい週の新しいスタッフに同情しました。","focus":"felt for","object":"the new staff"}
      ]},
      {"phrase":"feel up to","ja":"〜できる気力・体力がある","image":"自分の状態が行動に届くイメージ。","pattern":"FEEL UP TO + noun / -ing","examples":[
        {"en":"I don't feel up to joining the meeting today.","ja":"私は今日は会議に参加できる気力がありません。","focus":"feel up to","object":"joining the meeting"},
        {"en":"Do you feel up to calling the client now?","ja":"あなたは今、顧客に電話できそうですか？","focus":"feel up to","object":"calling the client"},
        {"en":"She felt up to explaining the issue after a short break.","ja":"彼女は短い休憩後、その問題を説明できそうだと感じました。","focus":"felt up to","object":"explaining the issue"}
      ]}
    ]
  },
  {
    "id": "work",
    "rank": 19,
    "word": "WORK",
    "ipa": "/wɜːrk/",
    "kana": "ワーク",
    "syllable": "work",
    "transitivity": "自動詞・他動詞",
    "importance": "★★★★★ 超重要",
    "core": "人・仕組み・方法が目的に向かって動き、成果につながる",
    "coreDetail": "WORKは、人が働く、チームで取り組む、機械や仕組みが機能する、方法がうまくいく、という感覚まで広く使います。共通するのは『何かが目的に向かって動いて、役に立つ』というイメージです。",
    "coreVisual": {"from":["👤 人","🤝 チーム","⚙️ 仕組み","📝 方法","💻 システム"],"to":"成果・解決・機能","label":"目的に向かって動く → 役に立つ"},
    "meanings": [
      {"id":"work-job","title":"① work / 働く・仕事をする","pattern":"WORK","transitivity":"自動詞","structure":"S + work","image":"人が仕事として動いているイメージ。","point":"work in sales, work for a company, work with clients の形が仕事でよく使われます。","examples":[
        {"en":"I work in sales at a lighting company.","ja":"私は照明会社で営業として働いています。","focus":"work","object":"in sales"},
        {"en":"She works for a supplier in Singapore.","ja":"彼女はシンガポールの仕入先で働いています。","focus":"works","object":"for a supplier"},
        {"en":"We work with many sign companies.","ja":"私たちは多くのサイン会社と仕事をしています。","focus":"work","object":"with many sign companies"}
      ]},
      {"id":"work-on","title":"② work on / 〜に取り組む","pattern":"WORK ON + task / project","transitivity":"自動詞","structure":"S + work + on O","image":"作業や課題の上で手を動かすイメージ。","point":"資料、見積、案件、改善などに取り組む時の定番表現です。","examples":[
        {"en":"I am working on the estimate now.","ja":"私は今、見積書に取り組んでいます。","focus":"working","object":"on the estimate"},
        {"en":"We need to work on the proposal before Friday.","ja":"私たちは金曜日までに提案書に取り組む必要があります。","focus":"work","object":"on the proposal"},
        {"en":"He worked on the installation plan yesterday.","ja":"彼は昨日、施工計画に取り組みました。","focus":"worked","object":"on the installation plan"}
      ]},
      {"id":"work-with","title":"③ work with / 〜と一緒に仕事をする","pattern":"WORK WITH + person / company","transitivity":"自動詞","structure":"S + work + with O","image":"相手と同じ方向へ動くイメージ。","point":"顧客・同僚・仕入先など、相手と協力する時に自然です。","examples":[
        {"en":"We work with the design team on this project.","ja":"私たちはこの案件で設計チームと一緒に仕事をしています。","focus":"work","object":"with the design team"},
        {"en":"I worked with the client to confirm the layout.","ja":"私はレイアウト確認のために顧客と一緒に作業しました。","focus":"worked","object":"with the client"},
        {"en":"Can you work with the supplier on the delivery date?","ja":"あなたは納期について仕入先と調整できますか？","focus":"work","object":"with the supplier"}
      ]},
      {"id":"work-for","title":"④ work for / 〜で働く・〜に役立つ","pattern":"WORK FOR + company / purpose","transitivity":"自動詞","structure":"S + work + for O","image":"会社や目的に向かって動くイメージ。","point":"会社で働く意味と、『その方法が目的に合う』意味の両方があります。","examples":[
        {"en":"He works for a manufacturing company.","ja":"彼はメーカーで働いています。","focus":"works","object":"for a manufacturing company"},
        {"en":"This schedule works for us.","ja":"このスケジュールで私たちは問題ありません。","focus":"works","object":"for us"},
        {"en":"Does this delivery plan work for the customer?","ja":"この納品計画は顧客にとって問題ありませんか？","focus":"work","object":"for the customer"}
      ]},
      {"id":"work-function","title":"⑤ work / 機能する・動く","pattern":"WORK","transitivity":"自動詞","structure":"S + work","image":"機械・仕組み・方法がちゃんと動くイメージ。","point":"機器、アプリ、方法、計画が『うまく機能する』時に使います。","examples":[
        {"en":"The remote controller works correctly now.","ja":"リモコンは今、正しく動いています。","focus":"works","object":"correctly"},
        {"en":"This app does not work after login.","ja":"このアプリはログイン後に正常に動きません。","focus":"work","object":"after login"},
        {"en":"The new process worked well for the team.","ja":"新しい手順はチームにとってうまく機能しました。","focus":"worked","object":"well"}
      ]},
      {"id":"work-well","title":"⑥ work well / うまくいく","pattern":"WORK WELL","transitivity":"自動詞","structure":"S + work + M","image":"方法や提案がスムーズに成果へ進むイメージ。","point":"説明・提案・スケジュールなどがうまくいく時に便利です。","examples":[
        {"en":"I think this idea will work well.","ja":"私はこの案はうまくいくと思います。","focus":"work","object":"well"},
        {"en":"The meeting format worked well last time.","ja":"前回、その会議形式はうまくいきました。","focus":"worked","object":"well"},
        {"en":"Will this arrangement work well for the client?","ja":"この段取りは顧客にとってうまくいきそうですか？","focus":"work","object":"well"}
      ]},
      {"id":"work-time","title":"⑦ work late / 遅くまで働く","pattern":"WORK + time expression","transitivity":"自動詞","structure":"S + work + M","image":"働く時間の長さや時間帯を表すイメージ。","point":"work late, work overtime, work from home など、働き方を説明できます。","examples":[
        {"en":"I worked late to finish the report.","ja":"私は報告書を終わらせるために遅くまで働きました。","focus":"worked","object":"late"},
        {"en":"She works from home on Fridays.","ja":"彼女は金曜日に在宅勤務をしています。","focus":"works","object":"from home"},
        {"en":"We may need to work overtime this week.","ja":"私たちは今週、残業する必要があるかもしれません。","focus":"work","object":"overtime"}
      ]},
      {"id":"work-out-result","title":"⑧ work out / うまくいく・解決する","pattern":"WORK OUT","transitivity":"自動詞","structure":"S + work + out","image":"問題がほどけて、結果が見えるイメージ。","point":"計画や問題が最終的にうまくまとまる時に使います。","examples":[
        {"en":"I hope the schedule works out.","ja":"私はそのスケジュールがうまくいくことを願っています。","focus":"works","object":"out"},
        {"en":"The delivery issue worked out in the end.","ja":"納品の問題は最終的に解決しました。","focus":"worked","object":"out"},
        {"en":"Did everything work out with the customer?","ja":"顧客との件はすべてうまくいきましたか？","focus":"work","object":"out"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"work on","ja":"〜に取り組む","image":"課題や作業の上で手を動かすイメージ。","pattern":"WORK ON + task","examples":[
        {"en":"We are working on the quotation.","ja":"私たちは見積書に取り組んでいます。","focus":"working on","object":"the quotation"},
        {"en":"Please work on the revised layout first.","ja":"まず修正レイアウトに取り組んでください。","focus":"work on","object":"the revised layout"},
        {"en":"He worked on the customer report this morning.","ja":"彼は今朝、顧客向け報告書に取り組みました。","focus":"worked on","object":"the customer report"}
      ]},
      {"phrase":"work with","ja":"〜と一緒に仕事をする・協力する","image":"相手と同じ方向へ進めるイメージ。","pattern":"WORK WITH + person / company","examples":[
        {"en":"I will work with the engineer on the issue.","ja":"私はその問題について技術担当者と一緒に対応します。","focus":"work with","object":"the engineer"},
        {"en":"We work with the customer to finalize the design.","ja":"私たちはデザインを確定するために顧客と協力します。","focus":"work with","object":"the customer"},
        {"en":"Can you work with sales on the schedule?","ja":"あなたはスケジュールについて営業と調整できますか？","focus":"work with","object":"sales"}
      ]},
      {"phrase":"work for","ja":"〜で働く・〜に都合がよい","image":"会社や目的のために動くイメージ。","pattern":"WORK FOR + company / person","examples":[
        {"en":"She works for our Singapore office.","ja":"彼女は私たちのシンガポールオフィスで働いています。","focus":"works for","object":"our Singapore office"},
        {"en":"Monday works for me.","ja":"月曜日で私は大丈夫です。","focus":"works for","object":"me"},
        {"en":"Does this plan work for your team?","ja":"この計画であなたのチームは問題ありませんか？","focus":"work for","object":"your team"}
      ]},
      {"phrase":"work out","ja":"うまくいく・解決する・計算する","image":"絡まったものが外へ出て、答えが見えるイメージ。","pattern":"WORK OUT","examples":[
        {"en":"The issue worked out after the call.","ja":"その問題は電話の後に解決しました。","focus":"worked out","object":"after the call"},
        {"en":"We need to work out the total cost.","ja":"私たちは総費用を算出する必要があります。","focus":"work out","object":"the total cost"},
        {"en":"I hope everything works out.","ja":"すべてうまくいくことを願っています。","focus":"works out"}
      ]},
      {"phrase":"work through","ja":"〜を一つずつ処理する","image":"問題の中を通り抜けるイメージ。","pattern":"WORK THROUGH + problem / list","examples":[
        {"en":"Let's work through the checklist together.","ja":"チェックリストを一緒に一つずつ確認しましょう。","focus":"work through","object":"the checklist"},
        {"en":"We worked through the problems before the meeting.","ja":"私たちは会議前に問題を一つずつ処理しました。","focus":"worked through","object":"the problems"},
        {"en":"Please work through these comments by tomorrow.","ja":"明日までにこれらのコメントを一つずつ確認してください。","focus":"work through","object":"these comments"}
      ]},
      {"phrase":"work around","ja":"〜を回避して対応する","image":"障害物の周りを回って進むイメージ。","pattern":"WORK AROUND + problem","examples":[
        {"en":"We need to work around the delivery delay.","ja":"私たちは納期遅れを回避する形で対応する必要があります。","focus":"work around","object":"the delivery delay"},
        {"en":"They worked around the system issue.","ja":"彼らはシステムの問題を回避して対応しました。","focus":"worked around","object":"the system issue"},
        {"en":"Can we work around this limitation?","ja":"私たちはこの制限を回避して対応できますか？","focus":"work around","object":"this limitation"}
      ]}
    ]
  },
  {
    "id": "use",
    "rank": 20,
    "word": "USE",
    "ipa": "/juːz/",
    "kana": "ユーズ",
    "syllable": "use",
    "transitivity": "他動詞",
    "importance": "★★★★★ 超重要",
    "core": "目的のために道具・情報・方法を使う",
    "coreDetail": "USEは、何かを目的達成のために活用する動詞です。道具、資料、データ、時間、方法、人の経験などを『役立てる』感覚で使います。",
    "coreVisual": {"from":["🛠️ 道具","📊 データ","📄 資料","⏰ 時間","💡 方法"],"to":"目的・成果","label":"手元のものを活用する → 目的へ"},
    "meanings": [
      {"id":"use-tool","title":"① use / 〜を使う","pattern":"USE + tool / system","transitivity":"他動詞","structure":"S + use + O","image":"道具やシステムを目的のために動かすイメージ。","point":"tool, system, app, software などとよく使います。","examples":[
        {"en":"We use this system to manage orders.","ja":"私たちは注文を管理するためにこのシステムを使っています。","focus":"use","object":"this system"},
        {"en":"I used the app to check my progress.","ja":"私は進捗を確認するためにそのアプリを使いました。","focus":"used","object":"the app"},
        {"en":"Can you use this tool for the report?","ja":"あなたは報告書にこのツールを使えますか？","focus":"use","object":"this tool"}
      ]},
      {"id":"use-data","title":"② use data / データを使う","pattern":"USE + data / information","transitivity":"他動詞","structure":"S + use + O","image":"情報を判断材料として活用するイメージ。","point":"data, information, feedback, results と相性が良いです。","examples":[
        {"en":"We used the sales data for the meeting.","ja":"私たちは会議のために売上データを使いました。","focus":"used","object":"the sales data"},
        {"en":"Please use the latest information in the proposal.","ja":"提案書には最新情報を使ってください。","focus":"use","object":"the latest information"},
        {"en":"I will use the customer's feedback to improve the document.","ja":"私は資料を改善するために顧客のフィードバックを使います。","focus":"use","object":"the customer's feedback"}
      ]},
      {"id":"use-time","title":"③ use time / 時間を使う","pattern":"USE + time","transitivity":"他動詞","structure":"S + use + O","image":"限られた時間を目的のために充てるイメージ。","point":"use time wisely, use the morning to ... など、時間配分に使えます。","examples":[
        {"en":"Let's use this time to confirm the details.","ja":"この時間を使って詳細を確認しましょう。","focus":"use","object":"this time"},
        {"en":"I used the morning to prepare the estimate.","ja":"私は午前中を使って見積書を準備しました。","focus":"used","object":"the morning"},
        {"en":"We need to use our time wisely before the deadline.","ja":"私たちは締切前に時間をうまく使う必要があります。","focus":"use","object":"our time"}
      ]},
      {"id":"use-for","title":"④ use A for B / AをBに使う","pattern":"USE A FOR B","transitivity":"他動詞","structure":"S + use + O + for O","image":"物や情報の使い道を示すイメージ。","point":"何に使うのかを for で説明します。","examples":[
        {"en":"We use this material for outdoor signs.","ja":"私たちはこの材料を屋外サインに使います。","focus":"use","object":"this material"},
        {"en":"Can we use this image for the presentation?","ja":"この画像をプレゼン資料に使えますか？","focus":"use","object":"this image"},
        {"en":"They used the sample for color checking.","ja":"彼らは色確認のためにサンプルを使いました。","focus":"used","object":"the sample"}
      ]},
      {"id":"use-to-do","title":"⑤ use A to do / 〜するためにAを使う","pattern":"USE A TO DO","transitivity":"他動詞","structure":"S + use + O + to V","image":"目的に向けて道具を使うイメージ。","point":"何のために使うのかを to do で説明します。","examples":[
        {"en":"We use photos to explain the installation method.","ja":"私たちは施工方法を説明するために写真を使います。","focus":"use","object":"photos"},
        {"en":"I used a checklist to avoid mistakes.","ja":"私はミスを避けるためにチェックリストを使いました。","focus":"used","object":"a checklist"},
        {"en":"Can you use this file to update the quote?","ja":"あなたは見積を更新するためにこのファイルを使えますか？","focus":"use","object":"this file"}
      ]},
      {"id":"use-as","title":"⑥ use A as B / AをBとして使う","pattern":"USE A AS B","transitivity":"他動詞","structure":"S + use + O + as O","image":"ものに役割を与えて使うイメージ。","point":"as は『〜として』。仮資料・参考資料・基準として使う時に便利です。","examples":[
        {"en":"We can use this drawing as a reference.","ja":"私たちはこの図面を参考資料として使えます。","focus":"use","object":"this drawing"},
        {"en":"I used the old estimate as a template.","ja":"私は古い見積書をテンプレートとして使いました。","focus":"used","object":"the old estimate"},
        {"en":"Please use this number as a rough guide.","ja":"この数字を大まかな目安として使ってください。","focus":"use","object":"this number"}
      ]},
      {"id":"used-to","title":"⑦ used to / 以前は〜していた","pattern":"USED TO + verb","transitivity":"助動詞的表現","structure":"S + used to + V","image":"過去の習慣が今とは違う場所にあるイメージ。","point":"useの過去形に見えますが、意味は『以前は〜していた』です。","examples":[
        {"en":"We used to manage orders by email.","ja":"私たちは以前、メールで注文を管理していました。","focus":"used","object":"to manage orders by email"},
        {"en":"I used to call the supplier every week.","ja":"私は以前、毎週仕入先に電話していました。","focus":"used","object":"to call the supplier"},
        {"en":"Did you use to work with this client?","ja":"あなたは以前この顧客と仕事をしていましたか？","focus":"use","object":"to work with this client"}
      ]},
      {"id":"be-used-to","title":"⑧ be used to / 〜に慣れている","pattern":"BE USED TO + noun / -ing","transitivity":"形容詞的表現","structure":"S + be used to + O","image":"自分がその状況に慣れた状態にあるイメージ。","point":"to の後ろは名詞か -ing です。be used to working の形に注意します。","examples":[
        {"en":"I am used to checking orders in the morning.","ja":"私は朝に注文を確認することに慣れています。","focus":"used","object":"to checking orders"},
        {"en":"She is used to speaking with overseas customers.","ja":"彼女は海外顧客と話すことに慣れています。","focus":"used","object":"to speaking with overseas customers"},
        {"en":"Are you used to this system yet?","ja":"あなたはもうこのシステムに慣れましたか？","focus":"used","object":"to this system"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"use up","ja":"〜を使い切る","image":"手元の資源を最後まで使うイメージ。","pattern":"USE UP + resource","examples":[
        {"en":"We used up all the samples last week.","ja":"私たちは先週、すべてのサンプルを使い切りました。","focus":"used up","object":"all the samples"},
        {"en":"Please don't use up the remaining stock.","ja":"残りの在庫を使い切らないでください。","focus":"use up","object":"the remaining stock"},
        {"en":"The project used up more time than expected.","ja":"その案件は予想以上に時間を使いました。","focus":"used up","object":"more time"}
      ]},
      {"phrase":"be used to","ja":"〜に慣れている","image":"その状況が自分にとって普通になるイメージ。","pattern":"BE USED TO + noun / -ing","examples":[
        {"en":"I am used to tight schedules.","ja":"私は厳しいスケジュールに慣れています。","focus":"used to","object":"tight schedules"},
        {"en":"We are used to handling urgent orders.","ja":"私たちは急ぎの注文対応に慣れています。","focus":"used to","object":"handling urgent orders"},
        {"en":"Are you used to using this app?","ja":"あなたはこのアプリを使うことに慣れていますか？","focus":"used to","object":"using this app"}
      ]},
      {"phrase":"used to","ja":"以前は〜していた","image":"過去の習慣を振り返るイメージ。","pattern":"USED TO + verb","examples":[
        {"en":"We used to send reports by fax.","ja":"私たちは以前、FAXで報告書を送っていました。","focus":"used to","object":"send reports"},
        {"en":"I used to visit this customer every month.","ja":"私は以前、この顧客を毎月訪問していました。","focus":"used to","object":"visit this customer"},
        {"en":"Did you use to prepare the quote manually?","ja":"あなたは以前、見積を手作業で作っていましたか？","focus":"use to","object":"prepare the quote manually"}
      ]}
    ]
  },
  {
    "id": "start",
    "rank": 21,
    "word": "START",
    "ipa": "/stɑːrt/",
    "kana": "スタート",
    "syllable": "start",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "止まっていたものが動き出す・始める",
    "coreDetail": "STARTは、仕事、会議、作業、機械、計画、状態などが『動き出す』イメージです。自分が始める場合にも、物事が始まる場合にも使えます。",
    "coreVisual": {"from":["⏸️ 停止","📝 作業前","📅 開始前","💬 会議前","⚙️ 起動前"],"to":"動き出した状態","label":"止まっている → 動き出す"},
    "meanings": [
      {"id":"start-task","title":"① start / 始める","pattern":"START + task","transitivity":"他動詞","structure":"S + start + O","image":"作業や活動を動かし始めるイメージ。","point":"meeting, project, work, preparation などとよく使います。","examples":[
        {"en":"Let's start the meeting.","ja":"会議を始めましょう。","focus":"start","object":"the meeting"},
        {"en":"We started the new project this week.","ja":"私たちは今週、新しい案件を始めました。","focus":"started","object":"the new project"},
        {"en":"Can you start the report today?","ja":"あなたは今日、報告書に着手できますか？","focus":"start","object":"the report"}
      ]},
      {"id":"start-doing","title":"② start to do / 〜し始める","pattern":"START TO DO / START -ING","transitivity":"他動詞","structure":"S + start + to V / V-ing","image":"行動が始まるイメージ。","point":"start to check と start checking はどちらも使えます。仕事ではどちらも自然です。","examples":[
        {"en":"I started to check the data after lunch.","ja":"私は昼食後にデータを確認し始めました。","focus":"started","object":"to check the data"},
        {"en":"We started preparing the documents yesterday.","ja":"私たちは昨日、資料の準備を始めました。","focus":"started","object":"preparing the documents"},
        {"en":"She will start calling customers tomorrow.","ja":"彼女は明日、顧客への電話を始めます。","focus":"start","object":"calling customers"}
      ]},
      {"id":"start-at","title":"③ start at / 〜時に始まる","pattern":"START AT + time","transitivity":"自動詞","structure":"S + start + at time","image":"予定がある時刻から動き出すイメージ。","point":"時間には at、曜日や日付には on を使います。","examples":[
        {"en":"The meeting starts at ten.","ja":"会議は10時に始まります。","focus":"starts","object":"at ten"},
        {"en":"The training started at nine thirty.","ja":"研修は9時30分に始まりました。","focus":"started","object":"at nine thirty"},
        {"en":"What time does the call start?","ja":"その電話会議は何時に始まりますか？","focus":"start","object":"what time"}
      ]},
      {"id":"start-from","title":"④ start from / 〜から始める","pattern":"START FROM + point","transitivity":"自動詞","structure":"S + start + from O","image":"出発点や基準点から動き出すイメージ。","point":"start from the basics, start from this page のように開始点を示します。","examples":[
        {"en":"Let's start from the main issue.","ja":"主な問題から始めましょう。","focus":"start","object":"from the main issue"},
        {"en":"We should start from the customer's request.","ja":"私たちは顧客の要望から始めるべきです。","focus":"start","object":"from the customer's request"},
        {"en":"Please start from page two of the document.","ja":"資料の2ページ目から始めてください。","focus":"start","object":"from page two"}
      ]},
      {"id":"start-with","title":"⑤ start with / 〜から始める","pattern":"START WITH + item","transitivity":"自動詞","structure":"S + start + with O","image":"最初に扱うものを手に取って始めるイメージ。","point":"会議の議題や説明の最初に使いやすい表現です。","examples":[
        {"en":"Let's start with the delivery schedule.","ja":"納品スケジュールから始めましょう。","focus":"start","object":"with the delivery schedule"},
        {"en":"I will start with a short summary.","ja":"私は短い要約から始めます。","focus":"start","object":"with a short summary"},
        {"en":"Can we start with the customer's question?","ja":"顧客からの質問から始めてもよいですか？","focus":"start","object":"with the customer's question"}
      ]},
      {"id":"start-business","title":"⑥ start a business / 事業を始める","pattern":"START + business / service","transitivity":"他動詞","structure":"S + start + O","image":"新しい活動をゼロから動かし始めるイメージ。","point":"会社、サービス、キャンペーンなどを始める時に使えます。","examples":[
        {"en":"They started a new service for small shops.","ja":"彼らは小規模店舗向けの新しいサービスを始めました。","focus":"started","object":"a new service"},
        {"en":"We will start a new campaign next month.","ja":"私たちは来月、新しいキャンペーンを始めます。","focus":"start","object":"a new campaign"},
        {"en":"He started his own company after working in sales.","ja":"彼は営業職で働いた後、自分の会社を始めました。","focus":"started","object":"his own company"}
      ]},
      {"id":"start-machine","title":"⑦ start / 起動する・動き始める","pattern":"START","transitivity":"自動詞・他動詞","structure":"S + start / start + O","image":"機械やシステムが止まった状態から動き出すイメージ。","point":"car, machine, system, app などにも使えます。","examples":[
        {"en":"The app starts slowly on my phone.","ja":"そのアプリは私のスマホで起動が遅いです。","focus":"starts","object":"slowly"},
        {"en":"Please start the system before the test.","ja":"テスト前にシステムを起動してください。","focus":"start","object":"the system"},
        {"en":"The machine started after we changed the setting.","ja":"設定を変更した後、その機械は動き始めました。","focus":"started","object":"after we changed the setting"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"start with","ja":"〜から始める","image":"最初に扱うものを選んで始めるイメージ。","pattern":"START WITH + item","examples":[
        {"en":"Let's start with the schedule.","ja":"スケジュールから始めましょう。","focus":"start with","object":"the schedule"},
        {"en":"We started with the client's main concern.","ja":"私たちは顧客の主な懸念点から始めました。","focus":"started with","object":"the client's main concern"},
        {"en":"Can you start with a quick update?","ja":"あなたは簡単な進捗共有から始められますか？","focus":"start with","object":"a quick update"}
      ]},
      {"phrase":"start from","ja":"〜から始める","image":"開始地点から動き出すイメージ。","pattern":"START FROM + point","examples":[
        {"en":"Let's start from the basic information.","ja":"基本情報から始めましょう。","focus":"start from","object":"the basic information"},
        {"en":"We started from the customer's request.","ja":"私たちは顧客の要望から始めました。","focus":"started from","object":"the customer's request"},
        {"en":"Please start from the first item on the list.","ja":"リストの最初の項目から始めてください。","focus":"start from","object":"the first item"}
      ]},
      {"phrase":"start over","ja":"最初からやり直す","image":"進めたものを戻して、もう一度始めるイメージ。","pattern":"START OVER","examples":[
        {"en":"We may need to start over with the design.","ja":"私たちはデザインを最初からやり直す必要があるかもしれません。","focus":"start over","object":"with the design"},
        {"en":"The data was wrong, so I started over.","ja":"データが間違っていたので、私は最初からやり直しました。","focus":"started over"},
        {"en":"Can we start over and check the process again?","ja":"最初からやり直して、手順をもう一度確認できますか？","focus":"start over"}
      ]},
      {"phrase":"start up","ja":"起動する・立ち上げる","image":"止まっていたものが立ち上がるイメージ。","pattern":"START UP + system / business","examples":[
        {"en":"The system starts up quickly now.","ja":"システムは今、すぐに起動します。","focus":"starts up","object":"quickly"},
        {"en":"They started up a new service last year.","ja":"彼らは昨年、新しいサービスを立ち上げました。","focus":"started up","object":"a new service"},
        {"en":"Please start up the app again.","ja":"アプリをもう一度起動してください。","focus":"start up","object":"the app"}
      ]},
      {"phrase":"start off","ja":"始める・始まる","image":"最初の一歩を踏み出すイメージ。","pattern":"START OFF","examples":[
        {"en":"Let's start off with a quick review.","ja":"簡単な確認から始めましょう。","focus":"start off","object":"with a quick review"},
        {"en":"The project started off well.","ja":"その案件は順調に始まりました。","focus":"started off","object":"well"},
        {"en":"We started off by checking the schedule.","ja":"私たちはスケジュール確認から始めました。","focus":"started off","object":"by checking the schedule"}
      ]}
    ]
  },
  {
  "id": "stop",
  "rank": 22,
  "word": "STOP",
  "ipa": "/stɑːp/",
  "kana": "ストップ",
  "syllable": "stop",
  "transitivity": "他動詞・自動詞",
  "importance": "★★★★★ 超重要",
  "core": "動いているもの・続いている状態を止める",
  "coreDetail": "STOPは、作業・予定・問題・習慣など、続いている流れをそこで止めるイメージです。会議を止める、使用をやめる、遅延を防ぐ、立ち寄るという使い方まで、流れを一度止める感覚で理解できます。",
  "coreVisual": {
    "from": [
      "▶️ 作業中",
      "📅 進行中の予定",
      "⚠️ 問題",
      "🔁 習慣",
      "🚶 移動中"
    ],
    "to": "止まった状態・中断点",
    "label": "進行中 → そこで止める"
  },
  "meanings": [
    {
      "id": "stop-work",
      "title": "① stop / 止める・中止する",
      "pattern": "STOP + work / process",
      "transitivity": "他動詞",
      "structure": "S + stop + O",
      "image": "進んでいる作業や流れを止めるイメージ。",
      "point": "仕事では work, production, delivery, meeting などと使いやすい。",
      "examples": [
        {
          "en": "We stopped the test because the result was unstable.",
          "ja": "私たちは結果が不安定だったため、テストを止めました。",
          "focus": "stopped",
          "object": "the test"
        },
        {
          "en": "Please stop the shipment until we confirm the details.",
          "ja": "詳細を確認するまで、出荷を止めてください。",
          "focus": "stop",
          "object": "the shipment"
        },
        {
          "en": "The manager stopped the meeting for ten minutes.",
          "ja": "マネージャーは会議を10分間中断しました。",
          "focus": "stopped",
          "object": "the meeting"
        }
      ],
      "dailyExamples": [
        {
          "en": "I stopped the video to check the subtitles.",
          "ja": "私は字幕を確認するために動画を止めました。",
          "focus": "stopped",
          "object": "the video"
        },
        {
          "en": "Please stop the car near the station.",
          "ja": "駅の近くで車を止めてください。",
          "focus": "stop",
          "object": "the car"
        }
      ]
    },
    {
      "id": "stop-doing",
      "title": "② stop doing / 〜するのをやめる",
      "pattern": "STOP + -ing",
      "transitivity": "他動詞",
      "structure": "S + stop + V-ing",
      "image": "続けていた行動をそこでやめるイメージ。",
      "point": "stop to do は『〜するために立ち止まる』なので意味が変わる。",
      "examples": [
        {
          "en": "We stopped using the old price list.",
          "ja": "私たちは古い価格表を使うのをやめました。",
          "focus": "stopped",
          "object": "using the old price list"
        },
        {
          "en": "You should stop sending the file before we review it.",
          "ja": "あなたは私たちが確認する前に、そのファイルを送るのをやめるべきです。",
          "focus": "stop",
          "object": "sending the file"
        },
        {
          "en": "He stopped checking email during the meeting.",
          "ja": "彼は会議中にメールを確認するのをやめました。",
          "focus": "stopped",
          "object": "checking email"
        }
      ],
      "dailyExamples": [
        {
          "en": "I stopped drinking coffee at night.",
          "ja": "私は夜にコーヒーを飲むのをやめました。",
          "focus": "stopped",
          "object": "drinking coffee"
        },
        {
          "en": "She stopped using that app last month.",
          "ja": "彼女は先月そのアプリを使うのをやめました。",
          "focus": "stopped",
          "object": "using that app"
        }
      ]
    },
    {
      "id": "stop-to-do",
      "title": "③ stop to do / 〜するために立ち止まる",
      "pattern": "STOP to do",
      "transitivity": "自動詞",
      "structure": "S + stop + to V",
      "image": "移動や作業を止めて、別の行動に入るイメージ。",
      "point": "stop doing と混同しやすい。stop to check は『確認するために止まる』。",
      "examples": [
        {
          "en": "We stopped to check the installation drawing.",
          "ja": "私たちは施工図を確認するために立ち止まりました。",
          "focus": "stopped",
          "object": "to check the installation drawing"
        },
        {
          "en": "I stopped to call the customer before sending the quote.",
          "ja": "私は見積を送る前に顧客へ電話するために立ち止まりました。",
          "focus": "stopped",
          "object": "to call the customer"
        },
        {
          "en": "The team stopped to review the schedule again.",
          "ja": "チームはスケジュールをもう一度確認するために手を止めました。",
          "focus": "stopped",
          "object": "to review the schedule"
        }
      ],
      "dailyExamples": [
        {
          "en": "I stopped to take a photo of the sunset.",
          "ja": "私は夕日を撮るために立ち止まりました。",
          "focus": "stopped",
          "object": "to take a photo"
        },
        {
          "en": "We stopped to buy drinks on the way.",
          "ja": "私たちは途中で飲み物を買うために立ち寄りました。",
          "focus": "stopped",
          "object": "to buy drinks"
        }
      ]
    },
    {
      "id": "stop-someone",
      "title": "④ stop someone from doing / 〜がするのを止める",
      "pattern": "STOP + 人/物 + from -ing",
      "transitivity": "他動詞",
      "structure": "S + stop + O + from V-ing",
      "image": "人や問題が進むのを止めるイメージ。",
      "point": "トラブルやミスを防ぐ時に使いやすい形。",
      "examples": [
        {
          "en": "The new checklist stopped us from missing important details.",
          "ja": "新しいチェックリストのおかげで、私たちは重要な点を見落とさずに済みました。",
          "focus": "stopped",
          "object": "us from missing important details"
        },
        {
          "en": "Clear instructions can stop customers from ordering the wrong item.",
          "ja": "明確な案内は、顧客が誤った商品を注文するのを防げます。",
          "focus": "stop",
          "object": "customers from ordering the wrong item"
        },
        {
          "en": "The error message stopped him from submitting the form.",
          "ja": "エラーメッセージにより、彼はフォームを送信できませんでした。",
          "focus": "stopped",
          "object": "him from submitting the form"
        }
      ],
      "dailyExamples": [
        {
          "en": "The rain stopped us from going outside.",
          "ja": "雨のせいで、私たちは外に出られませんでした。",
          "focus": "stopped",
          "object": "us from going outside"
        },
        {
          "en": "A phone call stopped me from leaving the house.",
          "ja": "電話があったため、私は家を出るのをやめました。",
          "focus": "stopped",
          "object": "me from leaving the house"
        }
      ]
    },
    {
      "id": "stop-problem",
      "title": "⑤ stop a problem / 問題を止める・防ぐ",
      "pattern": "STOP + problem / delay",
      "transitivity": "他動詞",
      "structure": "S + stop + O",
      "image": "問題の広がりを止めるイメージ。",
      "point": "delay, mistake, issue, trouble などと相性が良い。",
      "examples": [
        {
          "en": "We need to stop the delay before it affects the customer.",
          "ja": "私たちは顧客に影響する前に遅延を止める必要があります。",
          "focus": "stop",
          "object": "the delay"
        },
        {
          "en": "This process helps us stop small mistakes early.",
          "ja": "この手順により、私たちは小さなミスを早めに防げます。",
          "focus": "stop",
          "object": "small mistakes"
        },
        {
          "en": "The team stopped the issue from becoming bigger.",
          "ja": "チームはその問題が大きくなるのを防ぎました。",
          "focus": "stopped",
          "object": "the issue"
        }
      ],
      "dailyExamples": [
        {
          "en": "Good sleep can stop small mistakes during the day.",
          "ja": "よく眠ることで、日中の小さなミスを防げます。",
          "focus": "stop",
          "object": "small mistakes"
        },
        {
          "en": "This cover stops dust from getting inside.",
          "ja": "このカバーはほこりが中に入るのを防ぎます。",
          "focus": "stops",
          "object": "dust"
        }
      ]
    },
    {
      "id": "stop-at",
      "title": "⑥ stop at / 〜で止まる・立ち寄る",
      "pattern": "STOP AT + place / point",
      "transitivity": "自動詞",
      "structure": "S + stop + at O",
      "image": "ある地点で移動を止めるイメージ。",
      "point": "場所だけでなく、価格や数字の上限を示す時にも使える。",
      "examples": [
        {
          "en": "The delivery truck stopped at our office this morning.",
          "ja": "配送トラックは今朝、私たちのオフィスに停まりました。",
          "focus": "stopped",
          "object": "at our office"
        },
        {
          "en": "Let's stop at this point and check the numbers.",
          "ja": "この時点で止めて、数字を確認しましょう。",
          "focus": "stop",
          "object": "at this point"
        },
        {
          "en": "The discussion stopped at the budget issue.",
          "ja": "議論は予算の問題で止まりました。",
          "focus": "stopped",
          "object": "at the budget issue"
        }
      ],
      "dailyExamples": [
        {
          "en": "The bus stopped at the next station.",
          "ja": "バスは次の駅で止まりました。",
          "focus": "stopped",
          "object": "at the next station"
        },
        {
          "en": "We stopped at a convenience store on the way home.",
          "ja": "私たちは帰り道にコンビニへ立ち寄りました。",
          "focus": "stopped",
          "object": "at a convenience store"
        }
      ]
    },
    {
      "id": "stop-for",
      "title": "⑦ stop for / 〜のために止まる",
      "pattern": "STOP FOR + reason",
      "transitivity": "自動詞",
      "structure": "S + stop + for O",
      "image": "理由や目的のために一度止まるイメージ。",
      "point": "break, lunch, safety check などと使いやすい。",
      "examples": [
        {
          "en": "We stopped for a short break after the site visit.",
          "ja": "私たちは現場確認の後、短い休憩のために止まりました。",
          "focus": "stopped",
          "object": "for a short break"
        },
        {
          "en": "The team stopped for a safety check before installation.",
          "ja": "チームは施工前に安全確認のため作業を止めました。",
          "focus": "stopped",
          "object": "for a safety check"
        },
        {
          "en": "Can we stop for five minutes and review the quote?",
          "ja": "5分止めて、見積を確認できますか？",
          "focus": "stop",
          "object": "for five minutes"
        }
      ],
      "dailyExamples": [
        {
          "en": "We stopped for lunch near the park.",
          "ja": "私たちは公園の近くで昼食のために立ち寄りました。",
          "focus": "stopped",
          "object": "for lunch"
        },
        {
          "en": "I stopped for coffee before work.",
          "ja": "私は仕事前にコーヒーを買うために立ち寄りました。",
          "focus": "stopped",
          "object": "for coffee"
        }
      ]
    }
  ],
  "collocations": [],
  "phrasalVerbs": [
    {
      "phrase": "stop by",
      "ja": "少し立ち寄る",
      "image": "移動中に短く寄るイメージ。",
      "pattern": "STOP BY + place",
      "examples": [
        {
          "en": "I will stop by the customer's office tomorrow.",
          "ja": "私は明日、顧客のオフィスに少し立ち寄ります。",
          "focus": "stop by",
          "object": "the customer's office"
        },
        {
          "en": "Can you stop by the warehouse and check the stock?",
          "ja": "あなたは倉庫に立ち寄って在庫を確認できますか？",
          "focus": "stop by",
          "object": "the warehouse"
        },
        {
          "en": "She stopped by my desk to discuss the schedule.",
          "ja": "彼女はスケジュールを相談するために私の席へ立ち寄りました。",
          "focus": "stopped by",
          "object": "my desk"
        }
      ],
      "dailyExamples": [
        {
          "en": "I stopped by a bookstore after work.",
          "ja": "私は仕事の後に本屋へ少し立ち寄りました。",
          "focus": "stopped by",
          "object": "a bookstore"
        },
        {
          "en": "Please stop by my house this weekend.",
          "ja": "今週末、私の家に少し寄ってください。",
          "focus": "stop by",
          "object": "my house"
        }
      ]
    },
    {
      "phrase": "stop off",
      "ja": "途中で立ち寄る",
      "image": "目的地に向かう途中で一度止まるイメージ。",
      "pattern": "STOP OFF + place",
      "examples": [
        {
          "en": "We stopped off at the factory before visiting the client.",
          "ja": "私たちは顧客訪問の前に工場へ立ち寄りました。",
          "focus": "stopped off",
          "object": "at the factory"
        },
        {
          "en": "Can we stop off at the office to pick up the samples?",
          "ja": "サンプルを受け取るためにオフィスへ立ち寄れますか？",
          "focus": "stop off",
          "object": "at the office"
        },
        {
          "en": "He stopped off in Osaka on the way to Fukuoka.",
          "ja": "彼は福岡へ向かう途中で大阪に立ち寄りました。",
          "focus": "stopped off",
          "object": "in Osaka"
        }
      ],
      "dailyExamples": [
        {
          "en": "We stopped off for dinner on the way home.",
          "ja": "私たちは帰り道に夕食のため立ち寄りました。",
          "focus": "stopped off",
          "object": "for dinner"
        },
        {
          "en": "I stopped off at the station to buy a ticket.",
          "ja": "私は切符を買うために駅へ立ち寄りました。",
          "focus": "stopped off",
          "object": "at the station"
        }
      ]
    },
    {
      "phrase": "stop over",
      "ja": "途中で一泊する・乗り継ぎで滞在する",
      "image": "長い移動の途中で一度泊まるイメージ。",
      "pattern": "STOP OVER + place",
      "examples": [
        {
          "en": "We stopped over in Singapore before the meeting in Jakarta.",
          "ja": "私たちはジャカルタでの会議前にシンガポールで一泊しました。",
          "focus": "stopped over",
          "object": "in Singapore"
        },
        {
          "en": "The sales team will stop over in Fukuoka during the trip.",
          "ja": "営業チームは出張中に福岡で一泊します。",
          "focus": "stop over",
          "object": "in Fukuoka"
        },
        {
          "en": "She stopped over near the airport because the flight was early.",
          "ja": "彼女は便が早かったため、空港近くで一泊しました。",
          "focus": "stopped over",
          "object": "near the airport"
        }
      ],
      "dailyExamples": [
        {
          "en": "We stopped over in Kyoto during our trip.",
          "ja": "私たちは旅行中に京都で一泊しました。",
          "focus": "stopped over",
          "object": "in Kyoto"
        },
        {
          "en": "He stopped over at his friend's place.",
          "ja": "彼は友人の家に一泊しました。",
          "focus": "stopped over",
          "object": "at his friend's place"
        }
      ]
    },
    {
      "phrase": "stop in",
      "ja": "少し寄る",
      "image": "短い用事で中に入って寄るイメージ。",
      "pattern": "STOP IN + place",
      "examples": [
        {
          "en": "I stopped in at the branch office to check the documents.",
          "ja": "私は書類を確認するために支店へ少し寄りました。",
          "focus": "stopped in",
          "object": "at the branch office"
        },
        {
          "en": "Please stop in when you come near our showroom.",
          "ja": "ショールームの近くに来たら、少し寄ってください。",
          "focus": "stop in"
        },
        {
          "en": "He stopped in for a quick update before the call.",
          "ja": "彼は電話会議の前に簡単な進捗確認のため立ち寄りました。",
          "focus": "stopped in",
          "object": "for a quick update"
        }
      ],
      "dailyExamples": [
        {
          "en": "I stopped in at a cafe for tea.",
          "ja": "私はお茶を飲むためにカフェへ寄りました。",
          "focus": "stopped in",
          "object": "at a cafe"
        },
        {
          "en": "She stopped in to say hello.",
          "ja": "彼女は挨拶をするために少し寄りました。",
          "focus": "stopped in"
        }
      ]
    },
    {
      "phrase": "stop from",
      "ja": "〜を防ぐ",
      "image": "人や物事が進むのを止めるイメージ。",
      "pattern": "STOP + O + from -ing",
      "examples": [
        {
          "en": "This rule stops us from sending incomplete reports.",
          "ja": "このルールにより、私たちは不完全な報告書を送らずに済みます。",
          "focus": "stops",
          "object": "us from sending incomplete reports"
        },
        {
          "en": "The approval step stopped the team from making a costly mistake.",
          "ja": "承認手順により、チームは大きなミスを防げました。",
          "focus": "stopped",
          "object": "the team from making a costly mistake"
        },
        {
          "en": "Clear labels can stop customers from choosing the wrong product.",
          "ja": "分かりやすいラベルは、顧客が誤った商品を選ぶのを防げます。",
          "focus": "stop",
          "object": "customers from choosing the wrong product"
        }
      ],
      "dailyExamples": [
        {
          "en": "The alarm stopped me from oversleeping.",
          "ja": "アラームのおかげで、私は寝坊せずに済みました。",
          "focus": "stopped",
          "object": "me from oversleeping"
        },
        {
          "en": "The cover stops rain from getting inside.",
          "ja": "カバーは雨が中に入るのを防ぎます。",
          "focus": "stops",
          "object": "rain from getting inside"
        }
      ]
    }
  ]
},
  {
  "id": "try",
  "rank": 23,
  "word": "TRY",
  "ipa": "/traɪ/",
  "kana": "トライ",
  "syllable": "try",
  "transitivity": "他動詞・自動詞",
  "importance": "★★★★★ 超重要",
  "core": "結果がまだ分からない方法に、一度力を入れてみる",
  "coreDetail": "TRYは、方法・提案・作業に一度手を伸ばして試すイメージです。成功が確定していなくても、まずやってみる、努力する、試験的に使う、という場面で自然に使えます。",
  "coreVisual": {
    "from": [
      "💡 案",
      "🧪 方法",
      "📄 資料",
      "🛠️ 作業",
      "🎯 目標"
    ],
    "to": "試して結果を見る",
    "label": "未確定の方法 → 一度試す"
  },
  "meanings": [
    {
      "id": "try-method",
      "title": "① try / 試す",
      "pattern": "TRY + method / item",
      "transitivity": "他動詞",
      "structure": "S + try + O",
      "image": "方法や物を一度使ってみるイメージ。",
      "point": "a different approach, another method, this sample などとよく使う。",
      "examples": [
        {
          "en": "We tried a different approach for this customer.",
          "ja": "私たちはこの顧客に対して別の方法を試しました。",
          "focus": "tried",
          "object": "a different approach"
        },
        {
          "en": "Please try this sample before we place the order.",
          "ja": "発注前にこのサンプルを試してください。",
          "focus": "try",
          "object": "this sample"
        },
        {
          "en": "I will try another way to explain the price change.",
          "ja": "私は価格変更を説明する別の方法を試します。",
          "focus": "try",
          "object": "another way"
        }
      ],
      "dailyExamples": [
        {
          "en": "I tried a new restaurant near the station.",
          "ja": "私は駅の近くの新しいレストランを試しました。",
          "focus": "tried",
          "object": "a new restaurant"
        },
        {
          "en": "She tried a different route today.",
          "ja": "彼女は今日、別の道を試しました。",
          "focus": "tried",
          "object": "a different route"
        }
      ]
    },
    {
      "id": "try-to-do",
      "title": "② try to do / 〜しようとする",
      "pattern": "TRY to do",
      "transitivity": "他動詞",
      "structure": "S + try + to V",
      "image": "目標に向かって努力するイメージ。",
      "point": "できるか分からないが努力する時の形。try doing とは意味が違う。",
      "examples": [
        {
          "en": "I will try to finish the quote by this afternoon.",
          "ja": "私は今日の午後までに見積を完成させるようにします。",
          "focus": "try",
          "object": "to finish the quote"
        },
        {
          "en": "We are trying to reduce the delivery delay.",
          "ja": "私たちは納期遅延を減らそうとしています。",
          "focus": "trying",
          "object": "to reduce the delivery delay"
        },
        {
          "en": "Can you try to contact the supplier today?",
          "ja": "あなたは今日、仕入先に連絡してみてもらえますか？",
          "focus": "try",
          "object": "to contact the supplier"
        }
      ],
      "dailyExamples": [
        {
          "en": "I tried to wake up early this morning.",
          "ja": "私は今朝、早く起きようとしました。",
          "focus": "tried",
          "object": "to wake up early"
        },
        {
          "en": "He is trying to learn English every day.",
          "ja": "彼は毎日英語を学ぼうとしています。",
          "focus": "trying",
          "object": "to learn English"
        }
      ]
    },
    {
      "id": "try-doing",
      "title": "③ try doing / 試しに〜してみる",
      "pattern": "TRY + -ing",
      "transitivity": "他動詞",
      "structure": "S + try + V-ing",
      "image": "方法として一度やってみるイメージ。",
      "point": "try to do は努力、try doing は方法を試す感覚。",
      "examples": [
        {
          "en": "Let's try changing the layout of the proposal.",
          "ja": "提案書のレイアウトを変えてみましょう。",
          "focus": "try",
          "object": "changing the layout"
        },
        {
          "en": "We tried calling the customer in the morning.",
          "ja": "私たちは午前中に顧客へ電話してみました。",
          "focus": "tried",
          "object": "calling the customer"
        },
        {
          "en": "You could try sending a reminder email.",
          "ja": "あなたはリマインドメールを送ってみてもよいと思います。",
          "focus": "try",
          "object": "sending a reminder email"
        }
      ],
      "dailyExamples": [
        {
          "en": "Try adding a little salt to the soup.",
          "ja": "スープに少し塩を足してみてください。",
          "focus": "Try",
          "object": "adding a little salt"
        },
        {
          "en": "I tried walking to the station today.",
          "ja": "私は今日、駅まで歩いてみました。",
          "focus": "tried",
          "object": "walking to the station"
        }
      ]
    },
    {
      "id": "try-best",
      "title": "④ try my best / 最善を尽くす",
      "pattern": "TRY one's BEST",
      "transitivity": "他動詞",
      "structure": "S + try + one's best",
      "image": "できる限り力を入れるイメージ。",
      "point": "返答や謝罪、納期調整で使いやすい丁寧な表現。",
      "examples": [
        {
          "en": "I will try my best to meet the deadline.",
          "ja": "私は締切に間に合うよう最善を尽くします。",
          "focus": "try",
          "object": "my best"
        },
        {
          "en": "We will try our best to support your project.",
          "ja": "私たちは御社の案件を支援できるよう最善を尽くします。",
          "focus": "try",
          "object": "our best"
        },
        {
          "en": "She tried her best to solve the customer's issue.",
          "ja": "彼女は顧客の問題を解決するために最善を尽くしました。",
          "focus": "tried",
          "object": "her best"
        }
      ],
      "dailyExamples": [
        {
          "en": "I tried my best on the test.",
          "ja": "私はそのテストで最善を尽くしました。",
          "focus": "tried",
          "object": "my best"
        },
        {
          "en": "He tried his best in the game.",
          "ja": "彼は試合で最善を尽くしました。",
          "focus": "tried",
          "object": "his best"
        }
      ]
    },
    {
      "id": "try-again",
      "title": "⑤ try again / もう一度試す",
      "pattern": "TRY again",
      "transitivity": "自動詞",
      "structure": "S + try again",
      "image": "失敗後にもう一度手を伸ばすイメージ。",
      "point": "エラー、電話、確認作業などでよく使う。",
      "examples": [
        {
          "en": "The upload failed, so I will try again.",
          "ja": "アップロードに失敗したので、私はもう一度試します。",
          "focus": "try",
          "object": "again"
        },
        {
          "en": "Can you try again after checking the file size?",
          "ja": "あなたはファイルサイズを確認した後、もう一度試せますか？",
          "focus": "try",
          "object": "again"
        },
        {
          "en": "We tried again and the system worked.",
          "ja": "私たちはもう一度試し、システムは動きました。",
          "focus": "tried",
          "object": "again"
        }
      ],
      "dailyExamples": [
        {
          "en": "I missed the shot, so I tried again.",
          "ja": "私はシュートを外したので、もう一度試しました。",
          "focus": "tried",
          "object": "again"
        },
        {
          "en": "Please try again later.",
          "ja": "後でもう一度試してください。",
          "focus": "try",
          "object": "again"
        }
      ]
    },
    {
      "id": "try-for",
      "title": "⑥ try for / 〜を目指す",
      "pattern": "TRY FOR + target",
      "transitivity": "自動詞",
      "structure": "S + try + for O",
      "image": "目標に向かって挑戦するイメージ。",
      "point": "target, discount, better schedule など、目指す結果を示す。",
      "examples": [
        {
          "en": "We should try for an earlier delivery date.",
          "ja": "私たちはより早い納期を目指すべきです。",
          "focus": "try",
          "object": "for an earlier delivery date"
        },
        {
          "en": "I will try for a better price with the supplier.",
          "ja": "私は仕入先により良い価格を掛け合ってみます。",
          "focus": "try",
          "object": "for a better price"
        },
        {
          "en": "The team is trying for a smoother approval process.",
          "ja": "チームはよりスムーズな承認手順を目指しています。",
          "focus": "trying",
          "object": "for a smoother approval process"
        }
      ],
      "dailyExamples": [
        {
          "en": "She is trying for a new personal record.",
          "ja": "彼女は自己ベスト更新を目指しています。",
          "focus": "trying",
          "object": "for a new personal record"
        },
        {
          "en": "I tried for a seat near the window.",
          "ja": "私は窓際の席を取ろうとしました。",
          "focus": "tried",
          "object": "for a seat"
        }
      ]
    },
    {
      "id": "try-hard",
      "title": "⑦ try hard / 一生懸命やる",
      "pattern": "TRY hard",
      "transitivity": "自動詞",
      "structure": "S + try hard",
      "image": "強く努力するイメージ。",
      "point": "頑張りを伝える自然な表現。ビジネスメールでは使いすぎず、会話で便利。",
      "examples": [
        {
          "en": "We tried hard to fix the problem before the meeting.",
          "ja": "私たちは会議前に問題を直そうと一生懸命対応しました。",
          "focus": "tried",
          "object": "hard"
        },
        {
          "en": "He is trying hard to learn the new system.",
          "ja": "彼は新しいシステムを覚えようと一生懸命取り組んでいます。",
          "focus": "trying",
          "object": "hard"
        },
        {
          "en": "The team tried hard, but the schedule was too tight.",
          "ja": "チームは一生懸命取り組みましたが、スケジュールが厳しすぎました。",
          "focus": "tried",
          "object": "hard"
        }
      ],
      "dailyExamples": [
        {
          "en": "I tried hard to finish the book.",
          "ja": "私はその本を読み終えようと一生懸命頑張りました。",
          "focus": "tried",
          "object": "hard"
        },
        {
          "en": "They tried hard during practice.",
          "ja": "彼らは練習中に一生懸命取り組みました。",
          "focus": "tried",
          "object": "hard"
        }
      ]
    }
  ],
  "collocations": [],
  "phrasalVerbs": [
    {
      "phrase": "try out",
      "ja": "試しに使う・試す",
      "image": "実際に使って合うか確認するイメージ。",
      "pattern": "TRY OUT + item / method",
      "examples": [
        {
          "en": "We tried out the new app during the meeting.",
          "ja": "私たちは会議中に新しいアプリを試しました。",
          "focus": "tried out",
          "object": "the new app"
        },
        {
          "en": "Can you try out this format for the report?",
          "ja": "あなたは報告書でこの形式を試せますか？",
          "focus": "try out",
          "object": "this format"
        },
        {
          "en": "The team tried out a new sales script.",
          "ja": "チームは新しい営業トークを試しました。",
          "focus": "tried out",
          "object": "a new sales script"
        }
      ],
      "dailyExamples": [
        {
          "en": "I tried out a new camera yesterday.",
          "ja": "私は昨日、新しいカメラを試しました。",
          "focus": "tried out",
          "object": "a new camera"
        },
        {
          "en": "She tried out a new recipe.",
          "ja": "彼女は新しいレシピを試しました。",
          "focus": "tried out",
          "object": "a new recipe"
        }
      ]
    },
    {
      "phrase": "try on",
      "ja": "試着する・合わせてみる",
      "image": "身につけて合うか確認するイメージ。",
      "pattern": "TRY ON + clothing",
      "examples": [
        {
          "en": "The staff tried on the sample uniform before ordering it.",
          "ja": "スタッフは発注前にサンプル制服を試着しました。",
          "focus": "tried on",
          "object": "the sample uniform"
        },
        {
          "en": "Please try on the safety vest before the site visit.",
          "ja": "現場訪問前に安全ベストを試着してください。",
          "focus": "try on",
          "object": "the safety vest"
        },
        {
          "en": "He tried on the jacket to check the size.",
          "ja": "彼はサイズを確認するためにジャケットを試着しました。",
          "focus": "tried on",
          "object": "the jacket"
        }
      ],
      "dailyExamples": [
        {
          "en": "I tried on three shirts at the store.",
          "ja": "私は店でシャツを3枚試着しました。",
          "focus": "tried on",
          "object": "three shirts"
        },
        {
          "en": "Can I try on these shoes?",
          "ja": "この靴を試着してもいいですか？",
          "focus": "try on",
          "object": "these shoes"
        }
      ]
    },
    {
      "phrase": "try for",
      "ja": "〜を目指す",
      "image": "欲しい結果に向かって挑戦するイメージ。",
      "pattern": "TRY FOR + target",
      "examples": [
        {
          "en": "We will try for a shorter lead time.",
          "ja": "私たちはより短いリードタイムを目指します。",
          "focus": "try for",
          "object": "a shorter lead time"
        },
        {
          "en": "I tried for a better discount, but it was difficult.",
          "ja": "私はより良い値引きを目指しましたが、難しかったです。",
          "focus": "tried for",
          "object": "a better discount"
        },
        {
          "en": "The team is trying for a higher response rate.",
          "ja": "チームはより高い返信率を目指しています。",
          "focus": "trying for",
          "object": "a higher response rate"
        }
      ],
      "dailyExamples": [
        {
          "en": "I tried for a window seat.",
          "ja": "私は窓側の席を取ろうとしました。",
          "focus": "tried for",
          "object": "a window seat"
        },
        {
          "en": "She is trying for first place.",
          "ja": "彼女は1位を目指しています。",
          "focus": "trying for",
          "object": "first place"
        }
      ]
    },
    {
      "phrase": "try back",
      "ja": "後でもう一度連絡する",
      "image": "今つながらない相手へ後で再挑戦するイメージ。",
      "pattern": "TRY BACK + time",
      "examples": [
        {
          "en": "The client is in a meeting, so I will try back later.",
          "ja": "顧客は会議中なので、私は後でもう一度連絡します。",
          "focus": "try back",
          "object": "later"
        },
        {
          "en": "Can you try back after lunch?",
          "ja": "あなたは昼食後にもう一度連絡できますか？",
          "focus": "try back",
          "object": "after lunch"
        },
        {
          "en": "I tried back at three, but he was still busy.",
          "ja": "私は3時にもう一度連絡しましたが、彼はまだ忙しかったです。",
          "focus": "tried back",
          "object": "at three"
        }
      ],
      "dailyExamples": [
        {
          "en": "I called the shop, but I need to try back later.",
          "ja": "私は店に電話しましたが、後でもう一度かける必要があります。",
          "focus": "try back",
          "object": "later"
        },
        {
          "en": "Please try back tomorrow morning.",
          "ja": "明日の朝、もう一度連絡してください。",
          "focus": "try back",
          "object": "tomorrow morning"
        }
      ]
    },
    {
      "phrase": "try out for",
      "ja": "選考・役割に挑戦する",
      "image": "ある役割に入れるか試されるイメージ。",
      "pattern": "TRY OUT FOR + role",
      "examples": [
        {
          "en": "He tried out for the new project team.",
          "ja": "彼は新しいプロジェクトチームに挑戦しました。",
          "focus": "tried out for",
          "object": "the new project team"
        },
        {
          "en": "She is trying out for a trainer role next month.",
          "ja": "彼女は来月、トレーナー役に挑戦します。",
          "focus": "trying out for",
          "object": "a trainer role"
        },
        {
          "en": "Several members tried out for the presentation role.",
          "ja": "数名のメンバーがプレゼン担当に挑戦しました。",
          "focus": "tried out for",
          "object": "the presentation role"
        }
      ],
      "dailyExamples": [
        {
          "en": "He tried out for the school team.",
          "ja": "彼は学校のチームに挑戦しました。",
          "focus": "tried out for",
          "object": "the school team"
        },
        {
          "en": "She tried out for the band.",
          "ja": "彼女はそのバンドのオーディションを受けました。",
          "focus": "tried out for",
          "object": "the band"
        }
      ]
    }
  ]
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
  "core": "相手や状況の負担を軽くして、前に進める",
  "coreDetail": "HELPは、人・仕事・問題が前に進みやすくなるように支えるイメージです。人を手伝うだけでなく、資料が理解を助ける、改善につながる、避けられないという使い方にも広がります。",
  "coreVisual": {
    "from": [
      "🤝 支援",
      "📄 資料",
      "🧩 問題",
      "📈 改善",
      "⏱️ 負担"
    ],
    "to": "相手・チームが前に進む",
    "label": "負担を軽くする → 前に進む"
  },
  "meanings": [
    {
      "id": "help-person",
      "title": "① help someone / 人を手伝う",
      "pattern": "HELP + person",
      "transitivity": "他動詞",
      "structure": "S + help + O",
      "image": "相手の負担を軽くするイメージ。",
      "point": "help me, help the team, help the customer の形でよく使う。",
      "examples": [
        {
          "en": "I helped the sales team with the proposal.",
          "ja": "私は営業チームの提案書作成を手伝いました。",
          "focus": "helped",
          "object": "the sales team"
        },
        {
          "en": "Can you help me with this report?",
          "ja": "あなたはこの報告書を手伝ってもらえますか？",
          "focus": "help",
          "object": "me"
        },
        {
          "en": "She helped the client solve the issue.",
          "ja": "彼女は顧客が問題を解決するのを支援しました。",
          "focus": "helped",
          "object": "the client"
        }
      ],
      "dailyExamples": [
        {
          "en": "I helped my brother move yesterday.",
          "ja": "私は昨日、兄の引っ越しを手伝いました。",
          "focus": "helped",
          "object": "my brother"
        },
        {
          "en": "Can you help me carry this bag?",
          "ja": "このバッグを運ぶのを手伝ってくれますか？",
          "focus": "help",
          "object": "me"
        }
      ]
    },
    {
      "id": "help-with",
      "title": "② help with / 〜を手伝う",
      "pattern": "HELP WITH + task",
      "transitivity": "自動詞",
      "structure": "S + help + with O",
      "image": "作業の一部を支えるイメージ。",
      "point": "資料、確認、準備、設定など具体的な作業に使いやすい。",
      "examples": [
        {
          "en": "Could you help with the delivery schedule?",
          "ja": "あなたは納品スケジュールの件を手伝ってもらえますか？",
          "focus": "help",
          "object": "with the delivery schedule"
        },
        {
          "en": "We need someone to help with the setup tomorrow.",
          "ja": "私たちは明日の設営を手伝ってくれる人が必要です。",
          "focus": "help",
          "object": "with the setup"
        },
        {
          "en": "He helped with the final check before submission.",
          "ja": "彼は提出前の最終確認を手伝いました。",
          "focus": "helped",
          "object": "with the final check"
        }
      ],
      "dailyExamples": [
        {
          "en": "She helped with dinner last night.",
          "ja": "彼女は昨夜、夕食の準備を手伝いました。",
          "focus": "helped",
          "object": "with dinner"
        },
        {
          "en": "Can you help with the cleaning?",
          "ja": "掃除を手伝ってくれますか？",
          "focus": "help",
          "object": "with the cleaning"
        }
      ]
    },
    {
      "id": "help-do",
      "title": "③ help someone do / 〜するのを助ける",
      "pattern": "HELP + person + DO",
      "transitivity": "他動詞",
      "structure": "S + help + O + V",
      "image": "相手が行動できるよう支えるイメージ。",
      "point": "help me check, help customers understand のように使う。",
      "examples": [
        {
          "en": "This chart helps customers understand the price difference.",
          "ja": "この表は顧客が価格差を理解する助けになります。",
          "focus": "helps",
          "object": "customers"
        },
        {
          "en": "The checklist helped us avoid mistakes.",
          "ja": "チェックリストは私たちがミスを避ける助けになりました。",
          "focus": "helped",
          "object": "us"
        },
        {
          "en": "Can you help me prepare the meeting materials?",
          "ja": "あなたは私が会議資料を準備するのを手伝ってもらえますか？",
          "focus": "help",
          "object": "me"
        }
      ],
      "dailyExamples": [
        {
          "en": "This app helps me study English.",
          "ja": "このアプリは私が英語を勉強する助けになります。",
          "focus": "helps",
          "object": "me"
        },
        {
          "en": "Music helps me relax.",
          "ja": "音楽は私がリラックスする助けになります。",
          "focus": "helps",
          "object": "me"
        }
      ]
    },
    {
      "id": "help-improve",
      "title": "④ help improve / 改善に役立つ",
      "pattern": "HELP + improve / reduce / increase",
      "transitivity": "他動詞",
      "structure": "S + help + V",
      "image": "改善の方向に押し上げるイメージ。",
      "point": "数字や業務改善を説明する時に便利。",
      "examples": [
        {
          "en": "This process helps improve response speed.",
          "ja": "この手順は対応スピードの改善に役立ちます。",
          "focus": "helps",
          "object": "improve response speed"
        },
        {
          "en": "The new template helped reduce mistakes in quotes.",
          "ja": "新しいテンプレートは見積のミス削減に役立ちました。",
          "focus": "helped",
          "object": "reduce mistakes"
        },
        {
          "en": "Clear photos can help increase customer trust.",
          "ja": "分かりやすい写真は顧客の信頼向上に役立ちます。",
          "focus": "help",
          "object": "increase customer trust"
        }
      ],
      "dailyExamples": [
        {
          "en": "Walking helps improve my mood.",
          "ja": "歩くことは気分を良くする助けになります。",
          "focus": "helps",
          "object": "improve my mood"
        },
        {
          "en": "Drinking water can help reduce tiredness.",
          "ja": "水を飲むことは疲れを減らす助けになります。",
          "focus": "help",
          "object": "reduce tiredness"
        }
      ]
    },
    {
      "id": "helpful",
      "title": "⑤ be helpful / 役に立つ",
      "pattern": "be helpful",
      "transitivity": "形容詞的表現",
      "structure": "S + be + helpful",
      "image": "相手にとって助けになる状態。",
      "point": "資料や説明への感想として自然に使える。",
      "examples": [
        {
          "en": "Your explanation was very helpful.",
          "ja": "あなたの説明はとても役に立ちました。",
          "focus": "helpful",
          "object": "very helpful"
        },
        {
          "en": "This document will be helpful for the meeting.",
          "ja": "この資料は会議に役立ちます。",
          "focus": "helpful",
          "object": "for the meeting"
        },
        {
          "en": "The customer's feedback was helpful for improving the proposal.",
          "ja": "顧客の意見は提案改善に役立ちました。",
          "focus": "helpful",
          "object": "for improving the proposal"
        }
      ],
      "dailyExamples": [
        {
          "en": "Your advice was helpful.",
          "ja": "あなたの助言は役に立ちました。",
          "focus": "helpful",
          "object": "helpful"
        },
        {
          "en": "This map is helpful when I travel.",
          "ja": "この地図は旅行するときに役立ちます。",
          "focus": "helpful",
          "object": "helpful"
        }
      ]
    },
    {
      "id": "cannot-help",
      "title": "⑥ can't help / 〜せずにはいられない・避けられない",
      "pattern": "CAN'T HELP + -ing",
      "transitivity": "慣用的表現",
      "structure": "S + can't help + V-ing",
      "image": "気持ちや反応を止められないイメージ。",
      "point": "ビジネスでは使いすぎないが、自然な感想表現として重要。",
      "examples": [
        {
          "en": "I can't help worrying about the delivery schedule.",
          "ja": "私は納品スケジュールが心配で仕方ありません。",
          "focus": "help",
          "object": "worrying about the delivery schedule"
        },
        {
          "en": "We couldn't help noticing the difference in color.",
          "ja": "私たちは色の違いに気づかずにはいられませんでした。",
          "focus": "help",
          "object": "noticing the difference in color"
        },
        {
          "en": "She couldn't help asking one more question.",
          "ja": "彼女はもう一つ質問せずにはいられませんでした。",
          "focus": "help",
          "object": "asking one more question"
        }
      ],
      "dailyExamples": [
        {
          "en": "I can't help laughing at that scene.",
          "ja": "私はその場面で笑わずにはいられません。",
          "focus": "help",
          "object": "laughing"
        },
        {
          "en": "He couldn't help smiling.",
          "ja": "彼は笑顔にならずにはいられませんでした。",
          "focus": "help",
          "object": "smiling"
        }
      ]
    },
    {
      "id": "help-yourself",
      "title": "⑦ help yourself to / 自由に取る",
      "pattern": "HELP YOURSELF TO + item",
      "transitivity": "慣用的表現",
      "structure": "S + help yourself to O",
      "image": "相手が自分で取れるようにするイメージ。",
      "point": "来客対応やカジュアルな案内で使える。",
      "examples": [
        {
          "en": "Please help yourself to coffee before the meeting.",
          "ja": "会議前にコーヒーをご自由にお取りください。",
          "focus": "help",
          "object": "yourself to coffee"
        },
        {
          "en": "Visitors can help themselves to the product brochures.",
          "ja": "来場者は製品パンフレットを自由に取れます。",
          "focus": "help",
          "object": "themselves to the product brochures"
        },
        {
          "en": "Please help yourself to the samples on the table.",
          "ja": "テーブル上のサンプルをご自由にお取りください。",
          "focus": "help",
          "object": "yourself to the samples"
        }
      ],
      "dailyExamples": [
        {
          "en": "Please help yourself to some snacks.",
          "ja": "お菓子を自由に取ってください。",
          "focus": "help",
          "object": "yourself to some snacks"
        },
        {
          "en": "You can help yourself to water.",
          "ja": "水は自由に飲んでいいですよ。",
          "focus": "help",
          "object": "yourself to water"
        }
      ]
    }
  ],
  "collocations": [],
  "phrasalVerbs": [
    {
      "phrase": "help out",
      "ja": "手助けする",
      "image": "困っている人やチームを支えるイメージ。",
      "pattern": "HELP OUT + person / team",
      "examples": [
        {
          "en": "Can you help out the support team this afternoon?",
          "ja": "あなたは今日の午後、サポートチームを手伝えますか？",
          "focus": "help out",
          "object": "the support team"
        },
        {
          "en": "She helped out with the event preparation.",
          "ja": "彼女はイベント準備を手伝いました。",
          "focus": "helped out",
          "object": "with the event preparation"
        },
        {
          "en": "We need someone to help out during the busy season.",
          "ja": "繁忙期に手伝ってくれる人が必要です。",
          "focus": "help out"
        }
      ],
      "dailyExamples": [
        {
          "en": "I helped out at my friend's shop.",
          "ja": "私は友人の店を手伝いました。",
          "focus": "helped out",
          "object": "at my friend's shop"
        },
        {
          "en": "Can you help out at home tonight?",
          "ja": "今夜、家で手伝ってくれますか？",
          "focus": "help out",
          "object": "at home"
        }
      ]
    },
    {
      "phrase": "help with",
      "ja": "〜を手伝う",
      "image": "作業に横から支援を入れるイメージ。",
      "pattern": "HELP WITH + task",
      "examples": [
        {
          "en": "Please help with the quote check.",
          "ja": "見積確認を手伝ってください。",
          "focus": "help with",
          "object": "the quote check"
        },
        {
          "en": "He helped with the customer presentation.",
          "ja": "彼は顧客向けプレゼンを手伝いました。",
          "focus": "helped with",
          "object": "the customer presentation"
        },
        {
          "en": "Can you help with the sample shipment?",
          "ja": "あなたはサンプル出荷を手伝えますか？",
          "focus": "help with",
          "object": "the sample shipment"
        }
      ],
      "dailyExamples": [
        {
          "en": "I helped with the shopping.",
          "ja": "私は買い物を手伝いました。",
          "focus": "helped with",
          "object": "the shopping"
        },
        {
          "en": "She helped with the homework.",
          "ja": "彼女は宿題を手伝いました。",
          "focus": "helped with",
          "object": "the homework"
        }
      ]
    },
    {
      "phrase": "help through",
      "ja": "困難を乗り越えるのを助ける",
      "image": "難しい期間を一緒に通り抜けるイメージ。",
      "pattern": "HELP + person + THROUGH + situation",
      "examples": [
        {
          "en": "The manager helped us through the urgent project.",
          "ja": "マネージャーは私たちが急ぎ案件を乗り切るのを助けてくれました。",
          "focus": "helped",
          "object": "us through the urgent project"
        },
        {
          "en": "Clear instructions helped the team through the new process.",
          "ja": "明確な指示はチームが新しい手順を進める助けになりました。",
          "focus": "helped",
          "object": "the team through the new process"
        },
        {
          "en": "Her advice helped me through the difficult negotiation.",
          "ja": "彼女の助言は、私が難しい交渉を乗り切る助けになりました。",
          "focus": "helped",
          "object": "me through the difficult negotiation"
        }
      ],
      "dailyExamples": [
        {
          "en": "My friend helped me through a hard week.",
          "ja": "友人は私が大変な一週間を乗り切る助けになりました。",
          "focus": "helped",
          "object": "me through a hard week"
        },
        {
          "en": "Music helped me through a long trip.",
          "ja": "音楽は長旅を乗り切る助けになりました。",
          "focus": "helped",
          "object": "me through a long trip"
        }
      ]
    },
    {
      "phrase": "help along",
      "ja": "進みやすくする",
      "image": "物事を少し前に押すイメージ。",
      "pattern": "HELP + O + along",
      "examples": [
        {
          "en": "The template helped the report along.",
          "ja": "テンプレートは報告書作成を進めやすくしました。",
          "focus": "helped",
          "object": "the report along"
        },
        {
          "en": "A quick call helped the approval process along.",
          "ja": "短い電話が承認手続きを進みやすくしました。",
          "focus": "helped",
          "object": "the approval process along"
        },
        {
          "en": "The new checklist will help the project along.",
          "ja": "新しいチェックリストは案件を進めやすくします。",
          "focus": "help",
          "object": "the project along"
        }
      ],
      "dailyExamples": [
        {
          "en": "A small hint helped me along.",
          "ja": "小さなヒントが私を前に進めてくれました。",
          "focus": "helped",
          "object": "me along"
        },
        {
          "en": "Her message helped the conversation along.",
          "ja": "彼女のメッセージが会話を進めやすくしました。",
          "focus": "helped",
          "object": "the conversation along"
        }
      ]
    },
    {
      "phrase": "help yourself to",
      "ja": "自由に取る",
      "image": "相手が自分で取れるように促すイメージ。",
      "pattern": "HELP YOURSELF TO + item",
      "examples": [
        {
          "en": "Please help yourself to the catalogs at the entrance.",
          "ja": "入口のカタログをご自由にお取りください。",
          "focus": "help yourself to",
          "object": "the catalogs"
        },
        {
          "en": "Guests can help themselves to drinks during the break.",
          "ja": "来客は休憩中に飲み物を自由に取れます。",
          "focus": "help themselves to",
          "object": "drinks"
        },
        {
          "en": "Please help yourself to the sample cards.",
          "ja": "サンプルカードをご自由にお取りください。",
          "focus": "help yourself to",
          "object": "the sample cards"
        }
      ],
      "dailyExamples": [
        {
          "en": "Please help yourself to tea.",
          "ja": "お茶をご自由にどうぞ。",
          "focus": "help yourself to",
          "object": "tea"
        },
        {
          "en": "You can help yourself to snacks.",
          "ja": "お菓子は自由に取っていいですよ。",
          "focus": "help yourself to",
          "object": "snacks"
        }
      ]
    }
  ]
},
  {
    "id": "show",
    "rank": 25,
    "word": "SHOW",
    "ipa": "/ʃoʊ/",
    "kana": "ショウ",
    "syllable": "show",
    "transitivity": "他動詞中心",
    "importance": "★★★★★ 基本",
    "core": "見えない情報・物・手順を、相手が分かる形で見せる",
    "coreDetail": "SHOWは『相手の目や理解に入る形にする』感覚です。物を見せるだけでなく、資料が数字を示す、画面で手順を見せる、結果が傾向を示す、場所へ案内する使い方まで広がります。",
    "coreVisual": {
      "from": ["📄 資料", "📊 データ", "🖥️ 画面", "🧭 手順", "📍 場所"],
      "to": "相手が見て理解できる状態",
      "label": "情報・物 → 見える形へ"
    },
    "meanings": [
      {
        "id": "show-sample",
        "title": "① show a sample / サンプルを見せる",
        "pattern": "SHOW + person + thing",
        "transitivity": "他動詞",
        "structure": "S + show + O + O",
        "image": "相手の前に実物や資料を出して確認できるようにするイメージ。",
        "point": "show the client the sample / show the sample to the client の両方が使える。",
        "examples": [
          {"en":"I showed the client the new sample yesterday.","ja":"私は昨日、顧客に新しいサンプルを見せました。","focus":"showed","object":"the client the new sample"},
          {"en":"Can you show me the latest drawing?","ja":"あなたは私に最新の図面を見せてもらえますか？","focus":"show","object":"me the latest drawing"},
          {"en":"We will show the color options during the meeting.","ja":"私たちは会議中に色の選択肢を見せます。","focus":"show","object":"the color options"}
        ],
        "dailyExamples": [
          {"en":"She showed me her new phone.","ja":"彼女は私に新しいスマホを見せました。","focus":"showed","object":"me her new phone"},
          {"en":"Can you show me the photo?","ja":"その写真を見せてくれますか？","focus":"show","object":"me the photo"}
        ]
      },
      {
        "id": "show-data",
        "title": "② show data / データが示す",
        "pattern": "SHOW + result / trend",
        "transitivity": "他動詞",
        "structure": "S + show + O",
        "image": "数字や表が、結果や傾向を見える形で伝えるイメージ。",
        "point": "data, chart, report, result などが主語になることが多い。",
        "examples": [
          {"en":"The data shows a clear increase in orders.","ja":"そのデータは受注の明確な増加を示しています。","focus":"shows","object":"a clear increase"},
          {"en":"This chart shows the sales trend by area.","ja":"このグラフはエリア別の売上傾向を示しています。","focus":"shows","object":"the sales trend"},
          {"en":"The report showed several issues in the process.","ja":"その報告書はいくつかの工程上の課題を示していました。","focus":"showed","object":"several issues"}
        ],
        "dailyExamples": [
          {"en":"The map shows the nearest station.","ja":"その地図は最寄り駅を示しています。","focus":"shows","object":"the nearest station"},
          {"en":"The photo shows a beautiful sunset.","ja":"その写真は美しい夕日を写しています。","focus":"shows","object":"a beautiful sunset"}
        ]
      },
      {
        "id": "show-how",
        "title": "③ show how to / やり方を見せる",
        "pattern": "SHOW + person + how to do",
        "transitivity": "他動詞",
        "structure": "S + show + O + how to V",
        "image": "手順を相手がまねできる形で見せるイメージ。",
        "point": "新人説明、アプリ操作、設定説明で便利。",
        "examples": [
          {"en":"Can you show me how to update the file?","ja":"あなたは私にそのファイルの更新方法を見せてもらえますか？","focus":"show","object":"me how to update the file"},
          {"en":"I showed him how to check the stock list.","ja":"私は彼に在庫表の確認方法を見せました。","focus":"showed","object":"him how to check the stock list"},
          {"en":"The engineer showed us how to change the setting.","ja":"技術担当者は私たちに設定変更の方法を見せてくれました。","focus":"showed","object":"us how to change the setting"}
        ],
        "dailyExamples": [
          {"en":"Please show me how to use this app.","ja":"このアプリの使い方を見せてください。","focus":"show","object":"me how to use this app"},
          {"en":"My daughter showed me how to play the game.","ja":"娘がそのゲームのやり方を見せてくれました。","focus":"showed","object":"me how to play the game"}
        ]
      },
      {
        "id": "show-progress",
        "title": "④ show progress / 進捗を示す",
        "pattern": "SHOW + progress / status",
        "transitivity": "他動詞",
        "structure": "S + show + O",
        "image": "今どこまで進んでいるかを見える形にするイメージ。",
        "point": "progress, status, schedule, timeline と相性が良い。",
        "examples": [
          {"en":"The dashboard shows the current progress.","ja":"そのダッシュボードは現在の進捗を示しています。","focus":"shows","object":"the current progress"},
          {"en":"Please show the project status in the next meeting.","ja":"次の会議で案件の状況を示してください。","focus":"show","object":"the project status"},
          {"en":"This timeline shows when each task will finish.","ja":"この工程表は各作業がいつ終わるかを示しています。","focus":"shows","object":"when each task will finish"}
        ],
        "dailyExamples": [
          {"en":"The app shows my daily steps.","ja":"そのアプリは私の毎日の歩数を表示します。","focus":"shows","object":"my daily steps"},
          {"en":"The screen shows the battery level.","ja":"画面はバッテリー残量を表示しています。","focus":"shows","object":"the battery level"}
        ]
      },
      {
        "id": "show-proof",
        "title": "⑤ show that / 〜だと分かる",
        "pattern": "SHOW THAT + sentence",
        "transitivity": "他動詞",
        "structure": "S + show + that節",
        "image": "証拠や結果が、判断材料を相手に見せるイメージ。",
        "point": "show that は『〜を示している』という説明に使いやすい。",
        "examples": [
          {"en":"The test results show that the product is stable.","ja":"試験結果はその製品が安定していることを示しています。","focus":"show","object":"that the product is stable"},
          {"en":"The numbers showed that we needed more stock.","ja":"その数字は私たちに追加在庫が必要だと示していました。","focus":"showed","object":"that we needed more stock"},
          {"en":"Customer feedback shows that the explanation was clear.","ja":"顧客の意見は説明が分かりやすかったことを示しています。","focus":"shows","object":"that the explanation was clear"}
        ],
        "dailyExamples": [
          {"en":"His face showed that he was tired.","ja":"彼の表情から疲れていることが分かりました。","focus":"showed","object":"that he was tired"},
          {"en":"The sky shows that it may rain soon.","ja":"空を見ると、もうすぐ雨が降りそうです。","focus":"shows","object":"that it may rain soon"}
        ]
      },
      {
        "id": "show-place",
        "title": "⑥ show someone around / 案内する",
        "pattern": "SHOW + person + around",
        "transitivity": "他動詞",
        "structure": "S + show + O + around",
        "image": "相手に場所を見せながら案内するイメージ。",
        "point": "工場見学、展示会、オフィス案内で使える。",
        "examples": [
          {"en":"I showed the visitors around the showroom.","ja":"私は来訪者にショールームを案内しました。","focus":"showed","object":"the visitors around"},
          {"en":"Can you show the client around the booth?","ja":"あなたは顧客にブースを案内できますか？","focus":"show","object":"the client around"},
          {"en":"She will show the new staff around the office.","ja":"彼女が新入社員にオフィスを案内します。","focus":"show","object":"the new staff around"}
        ],
        "dailyExamples": [
          {"en":"I showed my friend around Tokyo.","ja":"私は友人に東京を案内しました。","focus":"showed","object":"my friend around"},
          {"en":"Can you show me around?","ja":"案内してもらえますか？","focus":"show","object":"me around"}
        ]
      }    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "show up",
        "ja": "現れる・出席する",
        "image": "見えていなかった人や問題が表に出てくるイメージ。",
        "pattern": "SHOW UP",
        "examples": [
          {"en":"The supplier did not show up for the meeting.","ja":"仕入先は会議に来ませんでした。","focus":"show up","object":"for the meeting"},
          {"en":"Several issues showed up after the update.","ja":"更新後にいくつかの問題が出てきました。","focus":"showed up","object":"after the update"},
          {"en":"Please show up on time tomorrow.","ja":"明日は時間どおりに来てください。","focus":"show up","object":"on time"}
        ]
      },
      {
        "phrase": "show around",
        "ja": "案内する",
        "image": "場所を見せながら相手を回すイメージ。",
        "pattern": "SHOW + person + AROUND",
        "examples": [
          {"en":"I will show the customer around the showroom.","ja":"私は顧客にショールームを案内します。","focus":"show around","object":"the customer"},
          {"en":"Can you show the new member around?","ja":"あなたは新しいメンバーを案内できますか？","focus":"show around","object":"the new member"},
          {"en":"She showed us around the factory.","ja":"彼女は私たちに工場を案内してくれました。","focus":"showed around","object":"us"}
        ]
      },
      {
        "phrase": "show off",
        "ja": "見せびらかす・強調して見せる",
        "image": "良いところを前に出して見せるイメージ。",
        "pattern": "SHOW OFF + feature / skill",
        "examples": [
          {"en":"The demo showed off the new feature clearly.","ja":"そのデモは新機能を分かりやすく見せました。","focus":"showed off","object":"the new feature"},
          {"en":"This display helps show off the product design.","ja":"この展示は製品デザインを引き立てる助けになります。","focus":"show off","object":"the product design"},
          {"en":"He was only showing off in the meeting.","ja":"彼は会議でただ目立とうとしていただけでした。","focus":"showing off","object":"in the meeting"}
        ]
      }
    ]
  },
  {
    "id": "tell",
    "rank": 26,
    "word": "TELL",
    "ipa": "/tel/",
    "kana": "テル",
    "syllable": "tell",
    "transitivity": "他動詞中心",
    "importance": "★★★★★ 基本",
    "core": "必要な情報を、相手に言葉で渡す",
    "coreDetail": "TELLは『情報を相手に伝える』感覚です。sayよりも、相手に向けて必要な内容を渡す感じが強く、tell me, tell the client, tell someone that の形で仕事でも日常でもよく使います。",
    "coreVisual": {
      "from": ["💬 情報", "📢 連絡", "🗓️ 予定", "⚠️ 注意", "✅ 判断"],
      "to": "相手の理解",
      "label": "情報 → 相手に伝える"
    },
    "meanings": [
      {
        "id": "tell-person",
        "title": "① tell someone / 人に伝える",
        "pattern": "TELL + person",
        "transitivity": "他動詞",
        "structure": "S + tell + O",
        "image": "相手に必要な情報を渡すイメージ。",
        "point": "tell の直後には基本的に『人』が来る。tell the reason ではなく tell someone the reason が自然。",
        "examples": [
          {"en":"I told the client about the delivery schedule.","ja":"私は顧客に納品スケジュールについて伝えました。","focus":"told","object":"the client"},
          {"en":"Please tell me if the price changes.","ja":"価格が変わったら私に教えてください。","focus":"tell","object":"me"},
          {"en":"Did you tell your manager about the issue?","ja":"あなたは上司にその問題を伝えましたか？","focus":"tell","object":"your manager"}
        ],
        "dailyExamples": [
          {"en":"I told my friend about the restaurant.","ja":"私は友人にそのレストランのことを話しました。","focus":"told","object":"my friend"},
          {"en":"Tell me your plan.","ja":"あなたの予定を教えてください。","focus":"Tell","object":"me"}
        ]
      },
      {
        "id": "tell-that",
        "title": "② tell someone that / 〜だと伝える",
        "pattern": "TELL + person + that節",
        "transitivity": "他動詞",
        "structure": "S + tell + O + that節",
        "image": "内容を文章として相手に渡すイメージ。",
        "point": "ビジネスメールや報告でよく使う形。thatは会話では省略されることもある。",
        "examples": [
          {"en":"I told him that the meeting was postponed.","ja":"私は彼に会議が延期になったと伝えました。","focus":"told","object":"him that the meeting was postponed"},
          {"en":"She told us that the quotation was approved.","ja":"彼女は私たちに見積が承認されたと伝えました。","focus":"told","object":"us that the quotation was approved"},
          {"en":"Please tell the customer that we will reply tomorrow.","ja":"明日返信すると顧客に伝えてください。","focus":"tell","object":"the customer that we will reply tomorrow"}
        ],
        "dailyExamples": [
          {"en":"He told me that he was busy.","ja":"彼は忙しいと私に言いました。","focus":"told","object":"me that he was busy"},
          {"en":"She told us that dinner was ready.","ja":"彼女は夕食の準備ができたと私たちに言いました。","focus":"told","object":"us that dinner was ready"}
        ]
      },
      {
        "id": "tell-difference",
        "title": "③ tell the difference / 違いが分かる",
        "pattern": "TELL + the difference",
        "transitivity": "他動詞",
        "structure": "S + tell + O",
        "image": "見分けるための情報を読み取るイメージ。",
        "point": "can tell で『分かる・見分けられる』。",
        "examples": [
          {"en":"Can you tell the difference between these two colors?","ja":"あなたはこの2色の違いが分かりますか？","focus":"tell","object":"the difference"},
          {"en":"I cannot tell which part is older.","ja":"私はどちらの部品が古いのか分かりません。","focus":"tell","object":"which part is older"},
          {"en":"The customer could tell the difference immediately.","ja":"顧客はすぐに違いが分かりました。","focus":"tell","object":"the difference"}
        ],
        "dailyExamples": [
          {"en":"I can tell the difference in taste.","ja":"私は味の違いが分かります。","focus":"tell","object":"the difference"},
          {"en":"Can you tell who is calling?","ja":"誰が電話しているか分かりますか？","focus":"tell","object":"who is calling"}
        ]
      },
      {
        "id": "tell-to-do",
        "title": "④ tell someone to do / 人に〜するよう伝える",
        "pattern": "TELL + person + to do",
        "transitivity": "他動詞",
        "structure": "S + tell + O + to V",
        "image": "相手に具体的な行動を伝えるイメージ。",
        "point": "指示に近いので、丁寧にしたい時は ask someone to do も使う。",
        "examples": [
          {"en":"I told the team to check the stock again.","ja":"私はチームに在庫をもう一度確認するよう伝えました。","focus":"told","object":"the team to check the stock"},
          {"en":"Please tell him to call the customer today.","ja":"彼に今日顧客へ電話するよう伝えてください。","focus":"tell","object":"him to call the customer"},
          {"en":"The manager told us to prepare the documents by Friday.","ja":"マネージャーは私たちに金曜日までに資料を準備するよう伝えました。","focus":"told","object":"us to prepare the documents"}
        ],
        "dailyExamples": [
          {"en":"My mother told me to clean my room.","ja":"母は私に部屋を掃除するよう言いました。","focus":"told","object":"me to clean my room"},
          {"en":"I told him to wait outside.","ja":"私は彼に外で待つよう言いました。","focus":"told","object":"him to wait outside"}
        ]
      },
      {
        "id": "tell-story",
        "title": "⑤ tell a story / 話をする",
        "pattern": "TELL + story / joke / truth",
        "transitivity": "他動詞",
        "structure": "S + tell + O",
        "image": "まとまった内容を相手に話して伝えるイメージ。",
        "point": "story, truth, lie, joke などは tell と相性が良い。",
        "examples": [
          {"en":"He told us the background of the project.","ja":"彼は私たちにその案件の背景を話しました。","focus":"told","object":"us the background"},
          {"en":"The sales data tells a clear story.","ja":"売上データは明確な流れを物語っています。","focus":"tells","object":"a clear story"},
          {"en":"Please tell the truth about the delay.","ja":"遅延について本当のことを伝えてください。","focus":"tell","object":"the truth"}
        ],
        "dailyExamples": [
          {"en":"She told me a funny story.","ja":"彼女は私に面白い話をしました。","focus":"told","object":"me a funny story"},
          {"en":"He told a joke at dinner.","ja":"彼は夕食で冗談を言いました。","focus":"told","object":"a joke"}
        ]
      },
      {
        "id": "tell-by",
        "title": "⑥ tell by / 〜で分かる",
        "pattern": "TELL BY + clue",
        "transitivity": "自動詞的表現",
        "structure": "S + can tell + by O",
        "image": "手がかりから判断するイメージ。",
        "point": "表情・数字・状況から判断する時に使える。",
        "examples": [
          {"en":"You can tell by the numbers that demand is increasing.","ja":"数字を見れば需要が増えていることが分かります。","focus":"tell","object":"by the numbers"},
          {"en":"I could tell by his voice that he was worried.","ja":"私は彼の声から心配していることが分かりました。","focus":"tell","object":"by his voice"},
          {"en":"We can tell by the schedule that this project is tight.","ja":"工程表を見ると、この案件が厳しいことが分かります。","focus":"tell","object":"by the schedule"}
        ],
        "dailyExamples": [
          {"en":"I can tell by your face that you are tired.","ja":"あなたの顔を見ると疲れていることが分かります。","focus":"tell","object":"by your face"},
          {"en":"You can tell by the smell that it is fresh.","ja":"匂いで新鮮だと分かります。","focus":"tell","object":"by the smell"}
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "tell apart",
        "ja": "見分ける",
        "image": "似ているものを分けて判断するイメージ。",
        "pattern": "TELL + A and B + APART",
        "examples": [
          {"en":"It is hard to tell these two products apart.","ja":"この2つの製品を見分けるのは難しいです。","focus":"tell apart","object":"these two products"},
          {"en":"Can you tell the old model and the new model apart?","ja":"旧モデルと新モデルを見分けられますか？","focus":"tell apart","object":"the old model and the new model"},
          {"en":"The color codes help us tell the cables apart.","ja":"色分けはケーブルを見分ける助けになります。","focus":"tell apart","object":"the cables"}
        ]
      }    ]
  },
  {
    "id": "ask",
    "rank": 27,
    "word": "ASK",
    "ipa": "/æsk/",
    "kana": "アスク",
    "syllable": "ask",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 基本",
    "core": "必要な情報・許可・対応を、相手に求める",
    "coreDetail": "ASKは『相手に向けて必要なものを求める』感覚です。質問するだけでなく、依頼する、許可を求める、確認する、価格や条件を尋ねる使い方まで広がります。",
    "coreVisual": {
      "from": ["❓ 質問", "🙏 依頼", "✅ 許可", "📄 資料", "💬 確認"],
      "to": "相手から返答・対応をもらう",
      "label": "必要なものを相手に求める"
    },
    "meanings": [
      {
        "id": "ask-question",
        "title": "① ask a question / 質問する",
        "pattern": "ASK + question",
        "transitivity": "他動詞",
        "structure": "S + ask + O",
        "image": "分からないことを相手に投げかけるイメージ。",
        "point": "question, about, why/when/how などと一緒に使う。",
        "examples": [
          {"en":"Can I ask a question about the quotation?","ja":"見積について質問してもよろしいですか？","focus":"ask","object":"a question"},
          {"en":"The client asked several questions about the delivery date.","ja":"顧客は納期についていくつか質問しました。","focus":"asked","object":"several questions"},
          {"en":"Please ask if anything is unclear.","ja":"不明点があれば質問してください。","focus":"ask","object":"if anything is unclear"}
        ],
        "dailyExamples": [
          {"en":"I asked a question in class.","ja":"私は授業で質問しました。","focus":"asked","object":"a question"},
          {"en":"Can I ask your name?","ja":"お名前を聞いてもいいですか？","focus":"ask","object":"your name"}
        ]
      },
      {
        "id": "ask-someone",
        "title": "② ask someone / 人に尋ねる",
        "pattern": "ASK + person",
        "transitivity": "他動詞",
        "structure": "S + ask + O",
        "image": "答えを持っていそうな相手に向けて聞くイメージ。",
        "point": "ask me, ask the supplier, ask your manager の形で使う。",
        "examples": [
          {"en":"I will ask the supplier about the stock.","ja":"私は仕入先に在庫について確認します。","focus":"ask","object":"the supplier"},
          {"en":"Please ask your manager before sending the email.","ja":"メールを送る前に上司に確認してください。","focus":"ask","object":"your manager"},
          {"en":"Did you ask the client about the installation date?","ja":"あなたは顧客に施工日について確認しましたか？","focus":"ask","object":"the client"}
        ],
        "dailyExamples": [
          {"en":"I asked my friend about the movie.","ja":"私は友人にその映画について聞きました。","focus":"asked","object":"my friend"},
          {"en":"Ask your teacher for help.","ja":"先生に助けを求めてください。","focus":"Ask","object":"your teacher"}
        ]
      },
      {
        "id": "ask-for",
        "title": "③ ask for / 〜を求める",
        "pattern": "ASK FOR + thing",
        "transitivity": "自動詞的表現",
        "structure": "S + ask + for O",
        "image": "必要な資料・情報・対応を相手に求めるイメージ。",
        "point": "ask for approval, ask for details, ask for help などが自然。",
        "examples": [
          {"en":"We asked for the latest price list.","ja":"私たちは最新の価格表を依頼しました。","focus":"asked for","object":"the latest price list"},
          {"en":"I will ask for approval before placing the order.","ja":"私は発注前に承認を求めます。","focus":"ask for","object":"approval"},
          {"en":"The customer asked for more details about the product.","ja":"顧客は製品についてさらに詳しい情報を求めました。","focus":"asked for","object":"more details"}
        ],
        "dailyExamples": [
          {"en":"I asked for water at the restaurant.","ja":"私はレストランで水を頼みました。","focus":"asked for","object":"water"},
          {"en":"She asked for help.","ja":"彼女は助けを求めました。","focus":"asked for","object":"help"}
        ]
      },
      {
        "id": "ask-to-do",
        "title": "④ ask someone to do / 人に〜をお願いする",
        "pattern": "ASK + person + to do",
        "transitivity": "他動詞",
        "structure": "S + ask + O + to V",
        "image": "相手に具体的な行動をお願いするイメージ。",
        "point": "tellより丁寧な依頼になりやすい。仕事では非常に重要。",
        "examples": [
          {"en":"I asked him to check the delivery schedule.","ja":"私は彼に納品スケジュールを確認するようお願いしました。","focus":"asked","object":"him to check the delivery schedule"},
          {"en":"Can you ask the customer to send the drawing?","ja":"あなたは顧客に図面を送るよう依頼できますか？","focus":"ask","object":"the customer to send the drawing"},
          {"en":"We asked the factory to prepare the sample by Friday.","ja":"私たちは工場に金曜日までにサンプルを準備するよう依頼しました。","focus":"asked","object":"the factory to prepare the sample"}
        ],
        "dailyExamples": [
          {"en":"I asked my son to clean his room.","ja":"私は息子に部屋を掃除するよう頼みました。","focus":"asked","object":"my son to clean his room"},
          {"en":"She asked me to wait outside.","ja":"彼女は私に外で待つよう頼みました。","focus":"asked","object":"me to wait outside"}
        ]
      },
      {
        "id": "ask-if",
        "title": "⑤ ask if / 〜かどうか尋ねる",
        "pattern": "ASK IF + sentence",
        "transitivity": "他動詞",
        "structure": "S + ask + if節",
        "image": "YES/NOで確認できる内容を相手に確認するイメージ。",
        "point": "メールや電話で確認する時に使いやすい。",
        "examples": [
          {"en":"I asked if the sample was available.","ja":"私はサンプルが入手可能かどうか尋ねました。","focus":"asked","object":"if the sample was available"},
          {"en":"Please ask if they can deliver it by next week.","ja":"来週までに納品できるかどうか確認してください。","focus":"ask","object":"if they can deliver it by next week"},
          {"en":"The client asked if we could change the schedule.","ja":"顧客は私たちがスケジュールを変更できるか尋ねました。","focus":"asked","object":"if we could change the schedule"}
        ],
        "dailyExamples": [
          {"en":"I asked if the shop was open.","ja":"私は店が開いているか尋ねました。","focus":"asked","object":"if the shop was open"},
          {"en":"She asked if I was free tonight.","ja":"彼女は私が今夜空いているか尋ねました。","focus":"asked","object":"if I was free tonight"}
        ]
      },
      {
        "id": "ask-about",
        "title": "⑥ ask about / 〜について尋ねる",
        "pattern": "ASK ABOUT + topic",
        "transitivity": "自動詞的表現",
        "structure": "S + ask + about O",
        "image": "話題を指定して相手に確認するイメージ。",
        "point": "ask about price, delivery, specifications など営業で多い。",
        "examples": [
          {"en":"The customer asked about the warranty period.","ja":"顧客は保証期間について尋ねました。","focus":"asked about","object":"the warranty period"},
          {"en":"I will ask about the installation conditions.","ja":"私は施工条件について確認します。","focus":"ask about","object":"the installation conditions"},
          {"en":"Did they ask about the lead time?","ja":"彼らは納期について尋ねましたか？","focus":"ask about","object":"the lead time"}
        ],
        "dailyExamples": [
          {"en":"He asked about my weekend.","ja":"彼は私の週末について聞きました。","focus":"asked about","object":"my weekend"},
          {"en":"I asked about the train time.","ja":"私は電車の時間について尋ねました。","focus":"asked about","object":"the train time"}
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "ask for",
        "ja": "〜を求める・依頼する",
        "image": "必要なものを相手に求めるイメージ。",
        "pattern": "ASK FOR + thing",
        "examples": [
          {"en":"We asked for a revised quotation.","ja":"私たちは修正版の見積を依頼しました。","focus":"asked for","object":"a revised quotation"},
          {"en":"Please ask for confirmation before production.","ja":"製作前に確認を求めてください。","focus":"ask for","object":"confirmation"},
          {"en":"The client asked for a shorter lead time.","ja":"顧客はより短い納期を求めました。","focus":"asked for","object":"a shorter lead time"}
        ]
      },
      {
        "phrase": "ask about",
        "ja": "〜について尋ねる",
        "image": "特定の話題に確認を向けるイメージ。",
        "pattern": "ASK ABOUT + topic",
        "examples": [
          {"en":"I asked about the delivery date.","ja":"私は納品日について確認しました。","focus":"asked about","object":"the delivery date"},
          {"en":"The customer asked about the new product.","ja":"顧客は新製品について尋ねました。","focus":"asked about","object":"the new product"},
          {"en":"Can you ask about the payment terms?","ja":"あなたは支払条件について確認できますか？","focus":"ask about","object":"the payment terms"}
        ]
      },
      {
        "phrase": "ask around",
        "ja": "周りに聞いて回る",
        "image": "答えを持っていそうな人を複数あたるイメージ。",
        "pattern": "ASK AROUND",
        "examples": [
          {"en":"I will ask around to find the missing file.","ja":"私はなくなったファイルを見つけるために周りに聞いてみます。","focus":"ask around","object":"to find the missing file"},
          {"en":"We asked around, but no one knew the answer.","ja":"私たちは周りに聞きましたが、誰も答えを知りませんでした。","focus":"asked around","object":"but no one knew the answer"},
          {"en":"Please ask around before we buy new parts.","ja":"新しい部品を買う前に周りに確認してください。","focus":"ask around","object":"before we buy new parts"}
        ]
      },
      {
        "phrase": "ask out",
        "ja": "誘う",
        "image": "相手を外の予定へ誘い出すイメージ。",
        "pattern": "ASK + person + OUT",
        "examples": [
          {"en":"He asked his coworker out for lunch after the meeting.","ja":"彼は会議後に同僚を昼食に誘いました。","focus":"asked out","object":"his coworker"},
          {"en":"She asked the team out for dinner to celebrate.","ja":"彼女はお祝いのためにチームを夕食に誘いました。","focus":"asked out","object":"the team"},
          {"en":"I asked my friend out for coffee.","ja":"私は友人をコーヒーに誘いました。","focus":"asked out","object":"my friend"}
        ]
      }
    ]
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
    "core": "声・連絡・判断を相手へ向ける",
    "coreDetail": "CALLは、電話する・呼ぶ・名前を付ける・判断するという使い方があります。中心イメージは、自分の声や判断を相手や対象へ向けることです。仕事では顧客への電話、会議設定、呼び方、判断の表現でよく使います。",
    "coreVisual": { "from": ["自分 / 会社", "声", "電話", "判断"], "to": "相手 / 対象", "label": "call" },
    "meanings": [
      { "id": "call-phone", "title": "1 電話する", "pattern": "call + 人 / 会社", "transitivity": "他動詞", "structure": "基本", "image": "相手に電話で連絡する。", "point": "仕事では call the client / call the vendor の形がよく使われます。", "examples": [
        { "en": "I will call the client this afternoon.", "ja": "私は今日の午後、顧客に電話します。", "focus": "call", "object": "the client", "jaFocus": "電話します" },
        { "en": "We called the vendor to confirm the stock.", "ja": "私たちは在庫確認のため業者に電話しました。", "focus": "called", "object": "the vendor", "jaFocus": "電話しました" },
        { "en": "Please call me after the meeting.", "ja": "会議後に私へ電話してください。", "focus": "call", "object": "me", "jaFocus": "電話して" }
      ] },
      { "id": "call-meeting", "title": "2 会議を開く・招集する", "pattern": "call + meeting", "transitivity": "他動詞", "structure": "基本", "image": "必要な人を集めるために会議を設定する。", "point": "call a meeting は、必要があって会議を開く時に使います。", "examples": [
        { "en": "The manager called a meeting to discuss the issue.", "ja": "上司はその問題を話し合うために会議を開きました。", "focus": "called", "object": "a meeting", "jaFocus": "会議を開きました" },
        { "en": "We should call a quick meeting before sending the quote.", "ja": "見積を送る前に短い会議を開いた方がよいです。", "focus": "call", "object": "a quick meeting", "jaFocus": "会議を開いた方がよい" },
        { "en": "She called an internal meeting for tomorrow morning.", "ja": "彼女は明日の朝に社内会議を設定しました。", "focus": "called", "object": "an internal meeting", "jaFocus": "会議を設定しました" }
      ] },
      { "id": "call-name", "title": "3 〜と呼ぶ", "pattern": "call + 人/物 + 名前", "transitivity": "他動詞", "structure": "基本", "image": "人や物に名前・呼び方を向ける。", "point": "call this product A のように、呼び方を説明できます。", "examples": [
        { "en": "We call this product Glow Beam Plus.", "ja": "私たちはこの製品をグロービームプラスと呼んでいます。", "focus": "call", "object": "this product", "jaFocus": "呼んでいます" },
        { "en": "Please call him Watanabe-san in the email.", "ja": "メールでは彼を渡辺さんと呼んでください。", "focus": "call", "object": "him", "jaFocus": "呼んで" },
        { "en": "The client called the color too warm.", "ja": "顧客はその色味を暖かすぎると言いました。", "focus": "called", "object": "the color", "jaFocus": "言いました" }
      ] },
      { "id": "call-judge", "title": "4 判断する・見なす", "pattern": "call + it/this + 形容詞/名詞", "transitivity": "他動詞", "structure": "基本", "image": "状況に判断や評価を付ける。", "point": "call it a priority / call it fair のように使います。", "examples": [
        { "en": "We can call this project a priority.", "ja": "私たちはこの案件を優先事項と見なせます。", "focus": "call", "object": "this project", "jaFocus": "見なせます" },
        { "en": "I would call the schedule realistic.", "ja": "私はそのスケジュールは現実的だと思います。", "focus": "call", "object": "the schedule", "jaFocus": "思います" },
        { "en": "The team called the decision fair.", "ja": "チームはその判断を公平だと見なしました。", "focus": "called", "object": "the decision", "jaFocus": "見なしました" }
      ] }
    ],
    "collocations": [
      { "phrase": "call the client", "ja": "顧客に電話する", "image": "顧客へ直接連絡する。", "pattern": "call + client", "examples": [
        { "en": "Please call the client before noon.", "ja": "正午までに顧客へ電話してください。", "focus": "call", "object": "the client", "jaFocus": "電話して" },
        { "en": "I called the client about the delivery date.", "ja": "私は納期について顧客に電話しました。", "focus": "called", "object": "the client", "jaFocus": "電話しました" },
        { "en": "We call important customers directly.", "ja": "私たちは重要な顧客には直接電話します。", "focus": "call", "object": "important customers", "jaFocus": "電話します" }
      ] },
      { "phrase": "call a meeting", "ja": "会議を開く", "image": "必要な人を集めて話し合いを始める。", "pattern": "call + meeting", "examples": [
        { "en": "The director called a meeting after the complaint.", "ja": "クレーム後、部長は会議を開きました。", "focus": "called", "object": "a meeting", "jaFocus": "会議を開きました" },
        { "en": "We may need to call another meeting next week.", "ja": "来週もう一度会議を開く必要があるかもしれません。", "focus": "call", "object": "another meeting", "jaFocus": "会議を開く" },
        { "en": "She called a short meeting to align the team.", "ja": "彼女はチームの認識を合わせるために短い会議を開きました。", "focus": "called", "object": "a short meeting", "jaFocus": "会議を開きました" }
      ] },
      { "phrase": "call it a priority", "ja": "それを優先事項と見なす", "image": "重要度の判断を付ける。", "pattern": "call + it + 名詞", "examples": [
        { "en": "We should call it a priority this week.", "ja": "私たちは今週それを優先事項と見なすべきです。", "focus": "call", "object": "it", "jaFocus": "見なすべき" },
        { "en": "The customer called quality a priority.", "ja": "顧客は品質を優先事項と考えました。", "focus": "called", "object": "quality", "jaFocus": "考えました" },
        { "en": "I would call safety the first priority.", "ja": "私は安全を最優先事項と考えます。", "focus": "call", "object": "safety", "jaFocus": "考えます" }
      ] }
    ],
    "phrasalVerbs": [
      { "phrase": "call back", "ja": "折り返し電話する", "image": "電話を相手へ戻す。", "pattern": "call back", "examples": [
        { "en": "I will call the client back after checking the stock.", "ja": "在庫を確認した後、顧客に折り返し電話します。", "focus": "call back", "object": "the client", "jaFocus": "折り返し電話します" },
        { "en": "Please call me back when you are available.", "ja": "都合がよい時に折り返し電話してください。", "focus": "call back", "object": "me", "jaFocus": "折り返し電話して" },
        { "en": "She called back the supplier before lunch.", "ja": "彼女は昼食前に仕入先へ折り返し電話しました。", "focus": "called back", "object": "the supplier", "jaFocus": "折り返し電話しました" }
      ] },
      { "phrase": "call off", "ja": "中止する", "image": "予定や作業を止める。", "pattern": "call off", "examples": [
        { "en": "We called off the meeting because the client was unavailable.", "ja": "顧客の都合がつかなかったため、私たちは会議を中止しました。", "focus": "called off", "object": "the meeting", "jaFocus": "中止しました" },
        { "en": "They called off the installation due to heavy rain.", "ja": "大雨のため、彼らは設置作業を中止しました。", "focus": "called off", "object": "the installation", "jaFocus": "中止しました" },
        { "en": "Please do not call off the visit without approval.", "ja": "承認なしに訪問を中止しないでください。", "focus": "call off", "object": "the visit", "jaFocus": "中止しないで" }
      ] },
      { "phrase": "call for", "ja": "必要とする・求める", "image": "状況が対応を求める。", "pattern": "call for", "examples": [
        { "en": "This issue calls for a quick response.", "ja": "この問題には迅速な対応が必要です。", "focus": "calls for", "object": "a quick response", "jaFocus": "必要です" },
        { "en": "The project calls for careful planning.", "ja": "その案件には慎重な計画が必要です。", "focus": "calls for", "object": "careful planning", "jaFocus": "必要です" },
        { "en": "The situation called for support from another team.", "ja": "その状況では別チームの支援が必要でした。", "focus": "called for", "object": "support", "jaFocus": "必要でした" }
      ] },
      { "phrase": "call out", "ja": "指摘する・声に出す", "image": "問題や名前を外へ出す。", "pattern": "call out", "examples": [
        { "en": "Please call out any risks during the meeting.", "ja": "会議中にリスクがあれば指摘してください。", "focus": "call out", "object": "any risks", "jaFocus": "指摘して" },
        { "en": "The manager called out the key issue.", "ja": "上司は重要な問題点を指摘しました。", "focus": "called out", "object": "the key issue", "jaFocus": "指摘しました" },
        { "en": "He called out my name at reception.", "ja": "彼は受付で私の名前を呼びました。", "focus": "called out", "object": "my name", "jaFocus": "呼びました" }
      ] },
      { "phrase": "call in", "ja": "呼び入れる・電話で参加する", "image": "外から内側へ呼ぶ。", "pattern": "call in", "examples": [
        { "en": "We called in an expert to check the problem.", "ja": "私たちは問題確認のため専門家を呼びました。", "focus": "called in", "object": "an expert", "jaFocus": "呼びました" },
        { "en": "She called in to the meeting from home.", "ja": "彼女は自宅から会議に電話参加しました。", "focus": "called in", "jaFocus": "電話参加しました" },
        { "en": "The team called in support after the error.", "ja": "エラー後、チームはサポート担当を呼びました。", "focus": "called in", "object": "support", "jaFocus": "呼びました" }
      ] },
      { "phrase": "call on", "ja": "頼む・指名する", "image": "相手に行動や発言を求める。", "pattern": "call on", "examples": [
        { "en": "The manager called on me to explain the data.", "ja": "上司は私にデータ説明を求めました。", "focus": "called on", "object": "me", "jaFocus": "求めました" },
        { "en": "We called on the team to act quickly.", "ja": "私たちはチームに迅速な対応を求めました。", "focus": "called on", "object": "the team", "jaFocus": "求めました" },
        { "en": "The trainer called on participants for questions.", "ja": "講師は参加者に質問を促しました。", "focus": "called on", "object": "participants", "jaFocus": "促しました" }
      ] },
      { "phrase": "call up", "ja": "電話する・呼び出す", "image": "相手や情報を画面・記憶・電話口へ呼び出す。", "pattern": "call up", "examples": [
        { "en": "I called up the vendor to confirm the price.", "ja": "私は価格確認のため業者に電話しました。", "focus": "called up", "object": "the vendor", "jaFocus": "電話しました" },
        { "en": "Can you call up the customer record?", "ja": "顧客情報を呼び出せますか？", "focus": "call up", "object": "the customer record", "jaFocus": "呼び出せますか" },
        { "en": "The issue called up an old concern.", "ja": "その問題は以前の懸念を思い出させました。", "focus": "called up", "object": "an old concern", "jaFocus": "思い出させました" }
      ] },
      { "phrase": "call around", "ja": "何件か電話する", "image": "複数の相手へ電話して回る。", "pattern": "call around", "examples": [
        { "en": "I called around to check stock.", "ja": "私は在庫確認のため何件か電話しました。", "focus": "called around", "jaFocus": "電話しました" },
        { "en": "We called around for delivery options.", "ja": "私たちは配送方法について何社かに電話しました。", "focus": "called around", "jaFocus": "電話しました" },
        { "en": "Please call around before we change the schedule.", "ja": "予定を変更する前に、何件か電話で確認してください。", "focus": "call around", "jaFocus": "電話で確認して" }
      ] },
      { "phrase": "call upon", "ja": "強く求める・要請する", "image": "相手に正式に対応を求める。", "pattern": "call upon", "examples": [
        { "en": "We called upon the supplier to improve quality.", "ja": "私たちは仕入先に品質改善を求めました。", "focus": "called upon", "object": "the supplier", "jaFocus": "求めました" },
        { "en": "The customer called upon us to respond quickly.", "ja": "顧客は私たちに迅速な対応を求めました。", "focus": "called upon", "object": "us", "jaFocus": "求めました" },
        { "en": "Management called upon every team to reduce waste.", "ja": "経営陣は各チームに無駄の削減を求めました。", "focus": "called upon", "object": "every team", "jaFocus": "求めました" }
      ] },
      { "phrase": "call ahead", "ja": "事前に電話する", "image": "行く前・送る前に先に連絡する。", "pattern": "call ahead", "examples": [
        { "en": "Please call ahead before visiting the client.", "ja": "顧客を訪問する前に事前に電話してください。", "focus": "call ahead", "jaFocus": "事前に電話して" },
        { "en": "We called ahead to confirm the delivery time.", "ja": "私たちは納品時間を確認するため事前に電話しました。", "focus": "called ahead", "jaFocus": "事前に電話しました" },
        { "en": "I will call ahead and check if the manager is available.", "ja": "私は事前に電話して、担当者がいるか確認します。", "focus": "call ahead", "jaFocus": "事前に電話して" }
      ] }
    ]
  },
  {
    "id": "run",
    "rank": 29,
    "word": "RUN",
    "ipa": "/rʌn/",
    "kana": "ラン",
    "syllable": "run",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "人・物・予定・仕組みが動いて進む",
    "coreDetail": "RUNは走るだけでなく、会議や事業を運営する、テストやシステムを動かす、予定が続くという意味で使います。仕事では運営・実行・進行・不足の表現で重要です。",
    "coreVisual": { "from": ["人", "会議", "テスト", "システム", "予定"], "to": "前へ進む / 動き続ける", "label": "run" },
    "meanings": [
      { "id": "run-meeting", "title": "1 会議・事業を運営する", "pattern": "run + meeting/business/team", "transitivity": "他動詞", "structure": "基本", "image": "人や仕組みを動かして進める。", "point": "run a meeting / run a business は仕事で頻出です。", "examples": [
        { "en": "She runs the weekly meeting.", "ja": "彼女は週次会議を進行しています。", "focus": "runs", "object": "the weekly meeting", "jaFocus": "進行しています" },
        { "en": "He runs a small lighting business.", "ja": "彼は小さな照明事業を経営しています。", "focus": "runs", "object": "a small lighting business", "jaFocus": "経営しています" },
        { "en": "We need someone to run the project smoothly.", "ja": "私たちはその案件を円滑に進める人が必要です。", "focus": "run", "object": "the project", "jaFocus": "進める" }
      ] },
      { "id": "run-test", "title": "2 テスト・処理を実行する", "pattern": "run + test/report/system", "transitivity": "他動詞", "structure": "基本", "image": "確認作業やシステムを動かす。", "point": "run a test / run a report はIT・営業管理でもよく使います。", "examples": [
        { "en": "We ran a test before shipping the product.", "ja": "私たちは出荷前にテストを実行しました。", "focus": "ran", "object": "a test", "jaFocus": "実行しました" },
        { "en": "Please run the report before the meeting.", "ja": "会議前にレポートを出してください。", "focus": "run", "object": "the report", "jaFocus": "出して" },
        { "en": "The system runs the calculation automatically.", "ja": "そのシステムは計算を自動で実行します。", "focus": "runs", "object": "the calculation", "jaFocus": "実行します" }
      ] },
      { "id": "run-continue", "title": "3 続く・運行する", "pattern": "run + until/from/to", "transitivity": "自動詞", "structure": "基本", "image": "予定やサービスが一定期間動き続ける。", "point": "run until Friday は『金曜まで続く』です。", "examples": [
        { "en": "The campaign runs until Friday.", "ja": "そのキャンペーンは金曜日まで続きます。", "focus": "runs", "jaFocus": "続きます" },
        { "en": "The bus runs every ten minutes.", "ja": "そのバスは10分ごとに運行しています。", "focus": "runs", "jaFocus": "運行しています" },
        { "en": "The warranty runs for one year.", "ja": "保証は1年間有効です。", "focus": "runs", "jaFocus": "有効です" }
      ] },
      { "id": "run-state", "title": "4 遅れる・不足する", "pattern": "run + late/short", "transitivity": "自動詞", "structure": "基本", "image": "予定や残量が望ましい状態から外れて進む。", "point": "run late / run short は仕事でもよく使う基本表現です。", "examples": [
        { "en": "The previous meeting ran late.", "ja": "前の会議が長引きました。", "focus": "ran", "jaFocus": "長引きました" },
        { "en": "We are running short of time.", "ja": "私たちは時間が足りなくなってきています。", "focus": "running", "jaFocus": "足りなくなってきています" },
        { "en": "The team ran short of parts before delivery.", "ja": "チームは納品前に部品が不足しました。", "focus": "ran", "jaFocus": "不足しました" }
      ] }
    ],
    "collocations": [
      { "phrase": "run a meeting", "ja": "会議を進行する", "image": "会議を前へ進める。", "pattern": "run + meeting", "examples": [
        { "en": "Can you run the meeting tomorrow?", "ja": "明日の会議を進行してもらえますか？", "focus": "run", "object": "the meeting", "jaFocus": "進行して" },
        { "en": "She ran the meeting very efficiently.", "ja": "彼女は会議をとても効率よく進行しました。", "focus": "ran", "object": "the meeting", "jaFocus": "進行しました" },
        { "en": "We need clear agenda points to run the meeting well.", "ja": "会議をうまく進行するには明確な議題が必要です。", "focus": "run", "object": "the meeting", "jaFocus": "進行する" }
      ] },
      { "phrase": "run a test", "ja": "テストを実行する", "image": "確認のために試験を動かす。", "pattern": "run + test", "examples": [
        { "en": "Please run a brightness test before installation.", "ja": "設置前に明るさのテストを実行してください。", "focus": "run", "object": "a brightness test", "jaFocus": "実行して" },
        { "en": "We ran another test after the repair.", "ja": "修理後、私たちはもう一度テストを実行しました。", "focus": "ran", "object": "another test", "jaFocus": "実行しました" },
        { "en": "The engineer runs a test every morning.", "ja": "技術者は毎朝テストを実行します。", "focus": "runs", "object": "a test", "jaFocus": "実行します" }
      ] },
      { "phrase": "run smoothly", "ja": "順調に進む", "image": "問題なく流れるように進む。", "pattern": "run + smoothly", "examples": [
        { "en": "The project is running smoothly so far.", "ja": "その案件は今のところ順調に進んでいます。", "focus": "running", "jaFocus": "進んでいます" },
        { "en": "The event ran smoothly thanks to the team.", "ja": "チームのおかげでイベントは順調に進みました。", "focus": "ran", "jaFocus": "進みました" },
        { "en": "We need a checklist to run the process smoothly.", "ja": "その手順を円滑に進めるにはチェックリストが必要です。", "focus": "run", "object": "the process", "jaFocus": "進める" }
      ] }
    ],
    "phrasalVerbs": [
      { "phrase": "run into", "ja": "問題にぶつかる・偶然会う", "image": "進む途中で問題や人にぶつかる。", "pattern": "run into", "examples": [
        { "en": "We ran into a problem during testing.", "ja": "私たちはテスト中に問題にぶつかりました。", "focus": "ran into", "object": "a problem", "jaFocus": "問題にぶつかりました" },
        { "en": "I ran into the client at the exhibition.", "ja": "私は展示会で顧客に偶然会いました。", "focus": "ran into", "object": "the client", "jaFocus": "偶然会いました" },
        { "en": "Please tell me if you run into any issues.", "ja": "何か問題にぶつかったら教えてください。", "focus": "run into", "object": "any issues", "jaFocus": "ぶつかったら" }
      ] },
      { "phrase": "run out of", "ja": "〜を使い果たす・不足する", "image": "持っていたものが外へ出てなくなる。", "pattern": "run out of", "examples": [
        { "en": "We ran out of time before the final check.", "ja": "私たちは最終確認前に時間が足りなくなりました。", "focus": "ran out of", "object": "time", "jaFocus": "足りなくなりました" },
        { "en": "The warehouse ran out of stock last week.", "ja": "倉庫は先週在庫切れになりました。", "focus": "ran out of", "object": "stock", "jaFocus": "在庫切れになりました" },
        { "en": "Do not run out of samples before the meeting.", "ja": "会議前にサンプルを切らさないでください。", "focus": "run out of", "object": "samples", "jaFocus": "切らさないで" }
      ] },
      { "phrase": "run by", "ja": "確認のため見せる・相談する", "image": "相手の横を通して確認してもらう。", "pattern": "run by", "examples": [
        { "en": "Can I run this proposal by you?", "ja": "この提案をあなたに確認してもらってもいいですか？", "focus": "run by", "object": "this proposal", "jaFocus": "確認してもらって" },
        { "en": "Please run the schedule by the manager first.", "ja": "まず上司にスケジュールを確認してください。", "focus": "run by", "object": "the schedule", "jaFocus": "確認して" },
        { "en": "I ran the price change by the team.", "ja": "私は価格変更をチームに相談しました。", "focus": "ran by", "object": "the price change", "jaFocus": "相談しました" }
      ] },
      { "phrase": "run through", "ja": "一通り確認する・説明する", "image": "最初から最後まで通して進む。", "pattern": "run through", "examples": [
        { "en": "Let’s run through the proposal before the meeting.", "ja": "会議前に提案内容を一通り確認しましょう。", "focus": "run through", "object": "the proposal", "jaFocus": "一通り確認しましょう" },
        { "en": "She ran through the schedule with the client.", "ja": "彼女は顧客とスケジュールを一通り確認しました。", "focus": "ran through", "object": "the schedule", "jaFocus": "確認しました" },
        { "en": "Can you run through the main points again?", "ja": "要点をもう一度説明してもらえますか？", "focus": "run through", "object": "the main points", "jaFocus": "説明して" }
      ] },
      { "phrase": "run across", "ja": "偶然見つける", "image": "探していないものに途中で出会う。", "pattern": "run across", "examples": [
        { "en": "I ran across an old estimate in the folder.", "ja": "私はフォルダ内で古い見積を偶然見つけました。", "focus": "ran across", "object": "an old estimate", "jaFocus": "偶然見つけました" },
        { "en": "We ran across useful data during the review.", "ja": "私たちは確認中に役立つデータを偶然見つけました。", "focus": "ran across", "object": "useful data", "jaFocus": "偶然見つけました" },
        { "en": "If you run across the file, please share it.", "ja": "そのファイルを偶然見つけたら共有してください。", "focus": "run across", "object": "the file", "jaFocus": "見つけたら" }
      ] },
      { "phrase": "run over", "ja": "確認する・時間を超過する", "image": "予定時間や内容の上を通り越す。", "pattern": "run over", "examples": [
        { "en": "Can we run over the numbers one more time?", "ja": "数字をもう一度確認できますか？", "focus": "run over", "object": "the numbers", "jaFocus": "確認できますか" },
        { "en": "The meeting ran over by fifteen minutes.", "ja": "会議は15分超過しました。", "focus": "ran over", "jaFocus": "超過しました" },
        { "en": "Please run over the checklist before delivery.", "ja": "納品前にチェックリストを確認してください。", "focus": "run over", "object": "the checklist", "jaFocus": "確認して" }
      ] },
      { "phrase": "run up against", "ja": "問題・壁に直面する", "image": "前に進んで壁に当たる。", "pattern": "run up against", "examples": [
        { "en": "We ran up against a budget limit.", "ja": "私たちは予算の制限に直面しました。", "focus": "ran up against", "object": "a budget limit", "jaFocus": "直面しました" },
        { "en": "The team ran up against a technical issue.", "ja": "チームは技術的な問題に直面しました。", "focus": "ran up against", "object": "a technical issue", "jaFocus": "直面しました" },
        { "en": "Please tell me if you run up against any restrictions.", "ja": "何か制限に直面したら教えてください。", "focus": "run up against", "object": "any restrictions", "jaFocus": "直面したら" }
      ] },
      { "phrase": "run after", "ja": "追いかける", "image": "相手や目標の後を追う。", "pattern": "run after", "examples": [
        { "en": "We should not run after every small order.", "ja": "私たちはすべての小口注文を追いかけるべきではありません。", "focus": "run after", "object": "every small order", "jaFocus": "追いかけるべきではありません" },
        { "en": "He ran after the client to return the documents.", "ja": "彼は書類を返すため顧客を追いかけました。", "focus": "ran after", "object": "the client", "jaFocus": "追いかけました" },
        { "en": "The team is running after too many opportunities.", "ja": "チームは多くの案件を追いかけすぎています。", "focus": "running after", "object": "too many opportunities", "jaFocus": "追いかけすぎています" }
      ] },
      { "phrase": "run away from", "ja": "避ける・逃げる", "image": "問題や責任から離れていく。", "pattern": "run away from", "examples": [
        { "en": "We cannot run away from this quality issue.", "ja": "私たちはこの品質問題から逃げることはできません。", "focus": "run away from", "object": "this quality issue", "jaFocus": "逃げることはできません" },
        { "en": "He ran away from the difficult conversation.", "ja": "彼は難しい話し合いを避けました。", "focus": "ran away from", "object": "the difficult conversation", "jaFocus": "避けました" },
        { "en": "Do not run away from customer complaints.", "ja": "顧客クレームから逃げないでください。", "focus": "run away from", "object": "customer complaints", "jaFocus": "逃げないで" }
      ] },
      { "phrase": "run down", "ja": "要約する・ざっと説明する", "image": "上から下へリストをたどって説明する。", "pattern": "run down", "examples": [
        { "en": "Can you run down the main changes?", "ja": "主な変更点をざっと説明してもらえますか？", "focus": "run down", "object": "the main changes", "jaFocus": "説明して" },
        { "en": "She ran down the delivery schedule in the meeting.", "ja": "彼女は会議で納品スケジュールをざっと説明しました。", "focus": "ran down", "object": "the delivery schedule", "jaFocus": "説明しました" },
        { "en": "Let me run down the risks before we decide.", "ja": "決定前にリスクをざっと説明させてください。", "focus": "run down", "object": "the risks", "jaFocus": "説明させて" }
      ] }
    ]
  },
  {
    "id": "leave",
    "rank": 30,
    "word": "LEAVE",
    "ipa": "/liːv/",
    "kana": "リーヴ",
    "syllable": "leave",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 超重要",
    "core": "今いる場所・状態・相手の手元から離す / 残す",
    "coreDetail": "LEAVEは、場所を去るだけでなく、伝言や資料を残す、状態をそのままにする、仕事を人に任せる時にも使います。中心イメージは、何かを離す、またはある状態として残すことです。",
    "coreVisual": { "from": ["人", "物", "情報", "仕事", "状態"], "to": "離れる / 残る / 相手に預ける", "label": "leave" },
    "meanings": [
      { "id": "leave-place", "title": "1 場所を出る・去る", "pattern": "leave + 場所", "transitivity": "他動詞・自動詞", "structure": "基本", "image": "今いる場所から離れる。", "point": "leave the office は『会社を出る』です。", "examples": [
        { "en": "I will leave the office at six today.", "ja": "私は今日は6時に会社を出ます。", "focus": "leave", "object": "the office", "jaFocus": "会社を出ます" },
        { "en": "She left the meeting early.", "ja": "彼女は会議を早めに退出しました。", "focus": "left", "object": "the meeting", "jaFocus": "退出しました" },
        { "en": "Please let me know before you leave.", "ja": "出る前に私へ知らせてください。", "focus": "leave", "jaFocus": "出る" }
      ] },
      { "id": "leave-message", "title": "2 伝言・資料を残す", "pattern": "leave + message/document", "transitivity": "他動詞", "structure": "基本", "image": "相手が後で受け取れるように残す。", "point": "leave a message は電話・メールどちらでも使いやすい表現です。", "examples": [
        { "en": "Please leave a message if I am away.", "ja": "私が不在の場合は伝言を残してください。", "focus": "leave", "object": "a message", "jaFocus": "残して" },
        { "en": "I left the documents on your desk.", "ja": "私は資料をあなたの机に置いておきました。", "focus": "left", "object": "the documents", "jaFocus": "置いておきました" },
        { "en": "The customer left feedback after the demo.", "ja": "顧客はデモ後にフィードバックを残しました。", "focus": "left", "object": "feedback", "jaFocus": "残しました" }
      ] },
      { "id": "leave-state", "title": "3 ある状態のままにする", "pattern": "leave + 目的語 + 形容詞", "transitivity": "他動詞", "structure": "基本", "image": "状態を変えずに残す。", "point": "leave the door open / leave it blank の形で使います。", "examples": [
        { "en": "Please leave the file open until I finish checking it.", "ja": "私が確認を終えるまで、そのファイルを開いたままにしてください。", "focus": "leave", "object": "the file", "jaFocus": "開いたままにして" },
        { "en": "We left the price field blank for now.", "ja": "私たちは今のところ価格欄を空欄のままにしました。", "focus": "left", "object": "the price field", "jaFocus": "空欄のままにしました" },
        { "en": "Do not leave the customer waiting.", "ja": "顧客を待たせたままにしないでください。", "focus": "leave", "object": "the customer", "jaFocus": "待たせたままにしないで" }
      ] },
      { "id": "leave-task", "title": "4 任せる・委ねる", "pattern": "leave + 仕事 + to + 人", "transitivity": "他動詞", "structure": "基本", "image": "仕事や判断を相手の手元に残して任せる。", "point": "leave it to me は『私に任せて』です。", "examples": [
        { "en": "Please leave the final check to me.", "ja": "最終確認は私に任せてください。", "focus": "leave", "object": "the final check", "jaFocus": "任せて" },
        { "en": "We left the design decision to the client.", "ja": "私たちはデザイン判断を顧客に委ねました。", "focus": "left", "object": "the design decision", "jaFocus": "委ねました" },
        { "en": "You can leave it to the support team.", "ja": "それはサポートチームに任せて大丈夫です。", "focus": "leave", "object": "it", "jaFocus": "任せて" }
      ] },
      { "id": "leave-impression", "title": "5 印象・余地を残す", "pattern": "leave + impression/doubt", "transitivity": "他動詞", "structure": "基本", "image": "相手の中に印象や判断材料を残す。", "point": "leave a good impression / leave no doubt は社会人向けに便利です。", "examples": [
        { "en": "Her clear explanation left a good impression on the client.", "ja": "彼女の分かりやすい説明は顧客に良い印象を残しました。", "focus": "left", "object": "a good impression", "jaFocus": "良い印象を残しました" },
        { "en": "The test results leave no doubt about the problem.", "ja": "試験結果から、その問題に疑いの余地はありません。", "focus": "leave", "object": "no doubt", "jaFocus": "疑いの余地はありません" },
        { "en": "A quick response leaves a positive impression.", "ja": "素早い対応は良い印象を残します。", "focus": "leaves", "object": "a positive impression", "jaFocus": "印象を残します" }
      ] }
    ],
    "collocations": [
      { "phrase": "leave a message", "ja": "伝言を残す", "image": "相手が後で確認できるように情報を残す。", "pattern": "leave + message", "examples": [
        { "en": "Please leave a message after the tone.", "ja": "発信音の後に伝言を残してください。", "focus": "leave", "object": "a message", "jaFocus": "残して" },
        { "en": "I left a message for the client.", "ja": "私は顧客に伝言を残しました。", "focus": "left", "object": "a message", "jaFocus": "残しました" },
        { "en": "She leaves clear messages for the team.", "ja": "彼女はチームに分かりやすい伝言を残します。", "focus": "leaves", "object": "clear messages", "jaFocus": "残します" }
      ] },
      { "phrase": "leave it to me", "ja": "私に任せて", "image": "仕事を自分の手元に残して引き受ける。", "pattern": "leave + it + to + 人", "examples": [
        { "en": "You can leave it to me.", "ja": "それは私に任せて大丈夫です。", "focus": "leave", "object": "it", "jaFocus": "任せて" },
        { "en": "Please leave the customer follow-up to me.", "ja": "顧客フォローは私に任せてください。", "focus": "leave", "object": "the customer follow-up", "jaFocus": "任せて" },
        { "en": "They left the final decision to the manager.", "ja": "彼らは最終判断を上司に委ねました。", "focus": "left", "object": "the final decision", "jaFocus": "委ねました" }
      ] },
      { "phrase": "leave a good impression", "ja": "良い印象を残す", "image": "相手の中に良い印象が残る。", "pattern": "leave + impression", "examples": [
        { "en": "A polite reply leaves a good impression.", "ja": "丁寧な返信は良い印象を残します。", "focus": "leaves", "object": "a good impression", "jaFocus": "印象を残します" },
        { "en": "The presentation left a strong impression on the client.", "ja": "その提案は顧客に強い印象を残しました。", "focus": "left", "object": "a strong impression", "jaFocus": "印象を残しました" },
        { "en": "Clear samples can leave a positive impression.", "ja": "分かりやすいサンプルは良い印象を残せます。", "focus": "leave", "object": "a positive impression", "jaFocus": "印象を残せます" }
      ] }
    ],
    "phrasalVerbs": [
      { "phrase": "leave out", "ja": "省く・除外する", "image": "リストや説明から外す。", "pattern": "leave out", "examples": [
        { "en": "Please leave out the internal comments.", "ja": "社内コメントは省いてください。", "focus": "leave out", "object": "the internal comments", "jaFocus": "省いて" },
        { "en": "We left out the old product photos.", "ja": "私たちは古い製品写真を除外しました。", "focus": "left out", "object": "the old product photos", "jaFocus": "除外しました" },
        { "en": "Do not leave out the delivery condition.", "ja": "納品条件を抜かさないでください。", "focus": "leave out", "object": "the delivery condition", "jaFocus": "抜かさないで" }
      ] },
      { "phrase": "leave behind", "ja": "置いていく・取り残す", "image": "何かを後ろに残す。", "pattern": "leave behind", "examples": [
        { "en": "Please do not leave any tools behind at the site.", "ja": "現場に工具を置き忘れないでください。", "focus": "leave behind", "object": "any tools", "jaFocus": "置き忘れないで" },
        { "en": "The change left some team members behind.", "ja": "その変更により、一部のメンバーが取り残されました。", "focus": "left behind", "object": "some team members", "jaFocus": "取り残されました" },
        { "en": "We should not leave important tasks behind.", "ja": "重要な作業を後回しにして残すべきではありません。", "focus": "leave behind", "object": "important tasks", "jaFocus": "残すべきではありません" }
      ] },
      { "phrase": "leave off", "ja": "途中でやめる・中断する", "image": "作業をある地点で止める。", "pattern": "leave off", "examples": [
        { "en": "Let’s continue from where we left off yesterday.", "ja": "昨日中断したところから続けましょう。", "focus": "left off", "jaFocus": "中断したところ" },
        { "en": "We left off the discussion at the pricing issue.", "ja": "価格の問題で議論を中断しました。", "focus": "left off", "object": "the discussion", "jaFocus": "中断しました" },
        { "en": "Please check where the previous team left off.", "ja": "前のチームがどこで中断したか確認してください。", "focus": "left off", "jaFocus": "中断したか" }
      ] },
      { "phrase": "leave for", "ja": "〜へ向けて出発する", "image": "目的地に向かって今いる場所を離れる。", "pattern": "leave for", "examples": [
        { "en": "We will leave for the site after the morning meeting.", "ja": "私たちは朝会後に現場へ向けて出発します。", "focus": "leave for", "object": "the site", "jaFocus": "出発します" },
        { "en": "The sales team left for Osaka this afternoon.", "ja": "営業チームは今日の午後、大阪へ向けて出発しました。", "focus": "left for", "object": "Osaka", "jaFocus": "出発しました" },
        { "en": "Please leave for the client’s office by ten.", "ja": "10時までに顧客のオフィスへ向けて出発してください。", "focus": "leave for", "object": "the client’s office", "jaFocus": "出発して" }
      ] },
      { "phrase": "leave aside", "ja": "いったん脇に置く", "image": "今は扱わず横に置く。", "pattern": "leave aside", "examples": [
        { "en": "Let’s leave aside the price issue for now.", "ja": "価格の問題はいったん脇に置きましょう。", "focus": "leave aside", "object": "the price issue", "jaFocus": "脇に置きましょう" },
        { "en": "We left aside the minor details during the first meeting.", "ja": "私たちは初回会議では細かい点をいったん脇に置きました。", "focus": "left aside", "object": "the minor details", "jaFocus": "脇に置きました" },
        { "en": "Please leave aside personal opinions and check the data.", "ja": "個人的な意見はいったん置いて、データを確認してください。", "focus": "leave aside", "object": "personal opinions", "jaFocus": "置いて" }
      ] },
      { "phrase": "leave alone", "ja": "そのままにする・放っておく", "image": "触らずにその場に残す。", "pattern": "leave alone", "examples": [
        { "en": "Please leave the setting alone until we finish testing.", "ja": "テストが終わるまで、その設定はそのままにしてください。", "focus": "leave alone", "object": "the setting", "jaFocus": "そのままにして" },
        { "en": "We left the old layout alone for this release.", "ja": "今回のリリースでは古いレイアウトをそのままにしました。", "focus": "left alone", "object": "the old layout", "jaFocus": "そのままにしました" },
        { "en": "Do not leave this issue alone for another week.", "ja": "この問題をもう1週間放置しないでください。", "focus": "leave alone", "object": "this issue", "jaFocus": "放置しないで" }
      ] },
      { "phrase": "leave up to", "ja": "〜に任せる", "image": "判断や作業を相手側に預ける。", "pattern": "leave up to", "examples": [
        { "en": "We can leave the final decision up to the manager.", "ja": "最終判断は上司に任せられます。", "focus": "leave up to", "object": "the final decision", "jaFocus": "任せられます" },
        { "en": "I left the layout up to the designer.", "ja": "私はレイアウトをデザイナーに任せました。", "focus": "left up to", "object": "the layout", "jaFocus": "任せました" },
        { "en": "Do not leave everything up to one person.", "ja": "すべてを1人に任せきりにしないでください。", "focus": "leave up to", "object": "everything", "jaFocus": "任せきりにしないで" }
      ] },
      { "phrase": "leave with", "ja": "〜に預ける・印象を残す", "image": "物や印象を相手のところに残す。", "pattern": "leave with", "examples": [
        { "en": "Please leave the samples with reception.", "ja": "サンプルは受付に預けてください。", "focus": "leave with", "object": "the samples", "jaFocus": "預けて" },
        { "en": "We left the documents with the client.", "ja": "私たちは書類を顧客に預けました。", "focus": "left with", "object": "the documents", "jaFocus": "預けました" },
        { "en": "The demo left us with a good impression.", "ja": "そのデモは私たちに良い印象を残しました。", "focus": "left with", "object": "us", "jaFocus": "印象を残しました" }
      ] }
    ]
  },
  {
    "id": "move",
    "rank": 31,
    "word": "MOVE",
    "ipa": "/muːv/",
    "kana": "ムーヴ",
    "syllable": "move",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "人・物・予定・状況を別の位置や段階へ動かす",
    "coreDetail": "MOVEは、物理的に移動するだけでなく、会議や締切を変更する、案件を前に進める、気持ちを動かす時にも使います。仕事では日程調整・データ移行・案件進行で特に重要です。",
    "coreVisual": { "from": ["📦 物", "📅 予定", "💾 データ", "📈 案件", "😊 気持ち"], "to": "➡️ 別の場所・時間・段階", "label": "動かして移す" },
    "meanings": [
      { "id": "move-object", "title": "1 物を移動する", "pattern": "move + 物", "transitivity": "他動詞", "structure": "基本", "image": "物を別の場所へ動かす。", "point": "ファイル・在庫・サンプルなどを移動する時に使います。", "examples": [
        { "en": "Please move the files to the shared folder.", "ja": "ファイルを共有フォルダに移動してください。", "focus": "move", "object": "the files" },
        { "en": "We moved the stock to another warehouse.", "ja": "私たちは在庫を別の倉庫に移動しました。", "focus": "moved", "object": "the stock" },
        { "en": "Can you move the samples to the meeting room?", "ja": "サンプルを会議室に移動してもらえますか？", "focus": "move", "object": "the samples" }
      ] },
      { "id": "move-place", "title": "2 人・拠点が移る", "pattern": "move to + 場所", "transitivity": "自動詞", "structure": "基本", "image": "人や拠点が別の場所へ移る。", "point": "会社・部署・住居の移動に使えます。", "examples": [
        { "en": "Our office will move to a new building next month.", "ja": "私たちのオフィスは来月、新しいビルに移転します。", "focus": "move" },
        { "en": "He moved to the sales department last year.", "ja": "彼は昨年、営業部へ異動しました。", "focus": "moved" },
        { "en": "The team moved to a larger workspace.", "ja": "チームはより広い作業スペースへ移りました。", "focus": "moved" }
      ] },
      { "id": "move-schedule", "title": "3 予定を変更する", "pattern": "move + 予定 + to + 時間", "transitivity": "他動詞", "structure": "基本", "image": "予定を別の日時へ動かす。", "point": "move the meeting to Friday は仕事で頻出です。", "examples": [
        { "en": "Can we move the meeting to Friday?", "ja": "会議を金曜日に変更できますか？", "focus": "move", "object": "the meeting" },
        { "en": "We moved the deadline to next week.", "ja": "私たちは締切を来週に変更しました。", "focus": "moved", "object": "the deadline" },
        { "en": "Please move the call to the afternoon.", "ja": "電話会議を午後に変更してください。", "focus": "move", "object": "the call" }
      ] },
      { "id": "move-data", "title": "4 データ・仕組みを移す", "pattern": "move + データ + to + 場所", "transitivity": "他動詞", "structure": "基本", "image": "情報や仕組みを別の場所へ移す。", "point": "システム移行・ファイル移動で使います。", "examples": [
        { "en": "We need to move the data to the new system.", "ja": "私たちはデータを新しいシステムへ移行する必要があります。", "focus": "move", "object": "the data" },
        { "en": "The IT team moved the customer records to a secure server.", "ja": "ITチームは顧客記録を安全なサーバーへ移行しました。", "focus": "moved", "object": "the customer records" },
        { "en": "Please move the latest version to the production folder.", "ja": "最新版を本番用フォルダへ移動してください。", "focus": "move", "object": "the latest version" }
      ] },
      { "id": "move-emotion", "title": "5 心を動かす", "pattern": "move + 人", "transitivity": "他動詞", "structure": "基本", "image": "相手の気持ちを動かす。", "point": "be moved by の形もよく使います。", "examples": [
        { "en": "The customer was moved by our quick support.", "ja": "顧客は私たちの素早いサポートに感動しました。", "focus": "moved" },
        { "en": "Her story moved everyone in the meeting.", "ja": "彼女の話は会議にいた全員の心を動かしました。", "focus": "moved", "object": "everyone" },
        { "en": "A sincere apology can move the client.", "ja": "誠実な謝罪は顧客の心を動かすことがあります。", "focus": "move", "object": "the client" }
      ] }
    ],
    "collocations": [],
    "phrasalVerbs": [
      { "phrase": "move on", "ja": "次に進む・気持ちを切り替える", "image": "今の場所や話題から次へ進む。", "pattern": "move on", "examples": [
        { "en": "Let’s move on to the next topic.", "ja": "次の議題に進みましょう。", "focus": "move on" },
        { "en": "After the issue was resolved, we moved on quickly.", "ja": "問題が解決した後、私たちはすぐ次に進みました。", "focus": "moved on" },
        { "en": "We cannot move on until the client approves it.", "ja": "顧客が承認するまで、私たちは次に進めません。", "focus": "move on" }
      ] },
      { "phrase": "move forward", "ja": "前に進む・進める", "image": "案件や計画が次の段階へ進む。", "pattern": "move forward", "examples": [
        { "en": "Let’s move forward with this proposal.", "ja": "この提案で進めましょう。", "focus": "move forward" },
        { "en": "The approval allowed us to move forward.", "ja": "承認により、私たちは前に進めました。", "focus": "move forward" },
        { "en": "We need to move forward before the deadline.", "ja": "締切前に前へ進める必要があります。", "focus": "move forward" }
      ] },
      { "phrase": "move up", "ja": "予定を早める・上がる", "image": "時間や順位を上・前へ動かす。", "pattern": "move up", "examples": [
        { "en": "Can we move up the meeting to ten?", "ja": "会議を10時に早められますか？", "focus": "move up" },
        { "en": "The deadline was moved up by two days.", "ja": "締切が2日早まりました。", "focus": "moved up" },
        { "en": "The product moved up in the sales ranking.", "ja": "その製品は売上ランキングで順位を上げました。", "focus": "moved up" }
      ] },
      { "phrase": "move back", "ja": "予定を遅らせる・後ろへ下げる", "image": "時間や位置を後ろへ動かす。", "pattern": "move back", "examples": [
        { "en": "Can we move back the review meeting?", "ja": "確認会議を後ろにずらせますか？", "focus": "move back" },
        { "en": "We moved back the delivery date by one week.", "ja": "私たちは納品日を1週間遅らせました。", "focus": "moved back" },
        { "en": "The launch was moved back because of a parts delay.", "ja": "部品遅延により発売が延期されました。", "focus": "moved back" }
      ] },
      { "phrase": "move into", "ja": "〜に移る・参入する", "image": "新しい場所や分野に入る。", "pattern": "move into", "examples": [
        { "en": "The company moved into the lighting control market.", "ja": "その会社は照明制御市場に参入しました。", "focus": "moved into" },
        { "en": "We moved into the new office last month.", "ja": "私たちは先月、新しいオフィスに移転しました。", "focus": "moved into" },
        { "en": "The team moved into the testing phase.", "ja": "チームはテスト段階に入りました。", "focus": "moved into" }
      ] },
      { "phrase": "move out", "ja": "退去する・外へ移す", "image": "内側から外へ出る。", "pattern": "move out", "examples": [
        { "en": "The team moved out of the temporary office.", "ja": "チームは仮オフィスから退去しました。", "focus": "moved out" },
        { "en": "We need to move out the old equipment by Friday.", "ja": "金曜日までに古い機器を外へ出す必要があります。", "focus": "move out" },
        { "en": "The tenant moved out at the end of March.", "ja": "テナントは3月末に退去しました。", "focus": "moved out" }
      ] },
      { "phrase": "move away from", "ja": "〜から離れる・脱却する", "image": "古いやり方や場所から距離を取る。", "pattern": "move away from", "examples": [
        { "en": "We should move away from manual tracking.", "ja": "私たちは手作業の管理から脱却すべきです。", "focus": "move away from" },
        { "en": "The market is moving away from low-efficiency products.", "ja": "市場は低効率製品から離れつつあります。", "focus": "moving away from" },
        { "en": "The company moved away from paper-based approval.", "ja": "会社は紙ベースの承認から脱却しました。", "focus": "moved away from" }
      ] },
      { "phrase": "move toward", "ja": "〜に向かう", "image": "目標や方向へ進む。", "pattern": "move toward", "examples": [
        { "en": "We are moving toward a final agreement.", "ja": "私たちは最終合意に向かっています。", "focus": "moving toward" },
        { "en": "The project moved toward mass production.", "ja": "その案件は量産に向かいました。", "focus": "moved toward" },
        { "en": "This plan helps us move toward our sales target.", "ja": "この計画は売上目標に近づく助けになります。", "focus": "move toward" }
      ] },
      { "phrase": "move around", "ja": "動き回る・配置を変える", "image": "同じ範囲の中であちこち動く。", "pattern": "move around", "examples": [
        { "en": "We moved around the furniture before the client visit.", "ja": "顧客訪問前に家具の配置を変えました。", "focus": "moved around" },
        { "en": "The staff moved around the venue during setup.", "ja": "スタッフは設営中、会場内を動き回りました。", "focus": "moved around" },
        { "en": "Please do not move around the display samples.", "ja": "展示サンプルの配置を変えないでください。", "focus": "move around" }
      ] },
      { "phrase": "move ahead", "ja": "先へ進む・実行に移る", "image": "止まらずに計画を先へ進める。", "pattern": "move ahead", "examples": [
        { "en": "We can move ahead once the estimate is approved.", "ja": "見積が承認されれば、私たちは先へ進めます。", "focus": "move ahead" },
        { "en": "The client decided to move ahead with the order.", "ja": "顧客は発注を進めることにしました。", "focus": "move ahead" },
        { "en": "Let’s move ahead and prepare the documents.", "ja": "先へ進めて、資料を準備しましょう。", "focus": "move ahead" }
      ] }
    ]
  },
  {
    "id": "turn",
    "rank": 32,
    "word": "TURN",
    "ipa": "/tɜːrn/",
    "kana": "ターン",
    "syllable": "turn",
    "transitivity": "自動詞・他動詞",
    "importance": "★★★★★ 超重要",
    "core": "向き・状態・判断を別の方向へ変える",
    "coreDetail": "TURNは、向きを変える、状態が変わる、判断や話題を別方向へ向けるイメージです。仕事では機器のON/OFF、依頼の断り、結果の判明、話題の切り替えでよく使います。",
    "coreVisual": { "from": ["➡️ 今の向き", "💡 今の状態", "📌 今の話題", "🔌 電源"], "to": "↩️ 別の向き・状態・判断", "label": "向きを変える" },
    "meanings": [
      { "id": "turn-direction", "title": "1 向きを変える", "pattern": "turn + 方向", "transitivity": "自動詞・他動詞", "structure": "基本", "image": "物や人の向きが変わる。", "point": "道案内・画面の向き・視線の方向で使います。", "examples": [
        { "en": "Turn left at the reception desk.", "ja": "受付で左に曲がってください。", "focus": "Turn" },
        { "en": "Please turn the screen toward the client.", "ja": "画面を顧客の方へ向けてください。", "focus": "turn", "object": "the screen" },
        { "en": "The camera turns toward the entrance.", "ja": "カメラは入口の方を向きます。", "focus": "turns" }
      ] },
      { "id": "turn-change", "title": "2 状態が変わる", "pattern": "turn + 形容詞", "transitivity": "自動詞", "structure": "基本", "image": "状態が別の状態へ変わる。", "point": "色・状況・雰囲気の変化に使います。", "examples": [
        { "en": "The discussion turned positive after the demo.", "ja": "デモの後、議論は前向きになりました。", "focus": "turned" },
        { "en": "The situation turned difficult after the delay.", "ja": "遅延後、状況は難しくなりました。", "focus": "turned" },
        { "en": "The indicator turned red during the test.", "ja": "テスト中に表示ランプが赤に変わりました。", "focus": "turned" }
      ] },
      { "id": "turn-age", "title": "3 年齢・節目を迎える", "pattern": "turn + 数字", "transitivity": "自動詞", "structure": "基本", "image": "年齢や節目が次の段階へ変わる。", "point": "会社・サービス・人の年齢に使えます。", "examples": [
        { "en": "The company turns ten this year.", "ja": "会社は今年10周年を迎えます。", "focus": "turns" },
        { "en": "Our service turns one next month.", "ja": "私たちのサービスは来月1周年を迎えます。", "focus": "turns" },
        { "en": "The project turned three years old last week.", "ja": "そのプロジェクトは先週3年目を迎えました。", "focus": "turned" }
      ] },
      { "id": "turn-page", "title": "4 ページ・つまみを回す", "pattern": "turn + 物", "transitivity": "他動詞", "structure": "基本", "image": "ページやつまみを回す。", "point": "turn the page / turn the knob のように物理的に回す時に使います。", "examples": [
        { "en": "Please turn the page and check the next diagram.", "ja": "ページをめくって、次の図を確認してください。", "focus": "turn", "object": "the page" },
        { "en": "He turned the dial slowly during the test.", "ja": "彼はテスト中につまみをゆっくり回しました。", "focus": "turned", "object": "the dial" },
        { "en": "Do not turn the valve without approval.", "ja": "承認なしでバルブを回さないでください。", "focus": "turn", "object": "the valve" }
      ] }
    ],
    "collocations": [],
    "phrasalVerbs": [
      { "phrase": "turn on", "ja": "電源を入れる・つける", "image": "機器や照明をONにする。", "pattern": "turn on", "examples": [
        { "en": "Please turn on the projector before the meeting.", "ja": "会議前にプロジェクターをつけてください。", "focus": "turn on" },
        { "en": "We turned on the test unit after checking the wiring.", "ja": "配線確認後、私たちは試験機の電源を入れました。", "focus": "turned on" },
        { "en": "Can you turn on the lights in the showroom?", "ja": "ショールームの照明をつけてもらえますか？", "focus": "turn on" }
      ] },
      { "phrase": "turn off", "ja": "電源を切る・消す", "image": "機器や照明をOFFにする。", "pattern": "turn off", "examples": [
        { "en": "Please turn off the lights after the meeting.", "ja": "会議後に照明を消してください。", "focus": "turn off" },
        { "en": "We turned off the controller before replacing the cable.", "ja": "ケーブル交換前にコントローラーの電源を切りました。", "focus": "turned off" },
        { "en": "Do not turn off the system during the update.", "ja": "更新中にシステムを切らないでください。", "focus": "turn off" }
      ] },
      { "phrase": "turn down", "ja": "断る・音量などを下げる", "image": "提案や数値を下方向へ下げる。", "pattern": "turn down", "examples": [
        { "en": "The client turned down our first proposal.", "ja": "顧客は私たちの最初の提案を断りました。", "focus": "turned down" },
        { "en": "Please turn down the volume during the call.", "ja": "通話中は音量を下げてください。", "focus": "turn down" },
        { "en": "We should not turn down this opportunity too quickly.", "ja": "この機会を早く断りすぎるべきではありません。", "focus": "turn down" }
      ] },
      { "phrase": "turn in", "ja": "提出する", "image": "書類や課題を相手側へ出す。", "pattern": "turn in", "examples": [
        { "en": "Please turn in the report by Friday.", "ja": "金曜日までに報告書を提出してください。", "focus": "turn in" },
        { "en": "We turned in the final documents yesterday.", "ja": "私たちは昨日、最終書類を提出しました。", "focus": "turned in" },
        { "en": "He forgot to turn in the application form.", "ja": "彼は申請書を提出するのを忘れました。", "focus": "turn in" }
      ] },
      { "phrase": "turn out", "ja": "結果的に〜になる・判明する", "image": "最後に結果が見えてくる。", "pattern": "turn out", "examples": [
        { "en": "The meeting turned out well.", "ja": "会議はうまくいきました。", "focus": "turned out" },
        { "en": "The issue turned out to be minor.", "ja": "その問題は軽微だと分かりました。", "focus": "turned out" },
        { "en": "The new process turned out effective.", "ja": "新しい手順は効果的でした。", "focus": "turned out" }
      ] },
      { "phrase": "turn to", "ja": "〜に頼る・話題を移す", "image": "注意や助けを別の対象へ向ける。", "pattern": "turn to", "examples": [
        { "en": "Let’s turn to the next topic.", "ja": "次の議題に移りましょう。", "focus": "turn to" },
        { "en": "The client turned to us for support.", "ja": "顧客は支援を求めて私たちに頼りました。", "focus": "turned to" },
        { "en": "We turned to the data for answers.", "ja": "私たちは答えを求めてデータに目を向けました。", "focus": "turned to" }
      ] },
      { "phrase": "turn into", "ja": "〜に変わる・変える", "image": "別の形や状態へ変化する。", "pattern": "turn into", "examples": [
        { "en": "The idea turned into a strong proposal.", "ja": "そのアイデアは良い提案になりました。", "focus": "turned into" },
        { "en": "We turned the feedback into a clear action plan.", "ja": "私たちはフィードバックを明確な行動計画にしました。", "focus": "turned into" },
        { "en": "A small delay can turn into a major issue.", "ja": "小さな遅れが大きな問題になることがあります。", "focus": "turn into" }
      ] },
      { "phrase": "turn over", "ja": "引き渡す・めくる・ひっくり返す", "image": "反対側へ回す、または相手に渡す。", "pattern": "turn over", "examples": [
        { "en": "Please turn over the sample and check the label.", "ja": "サンプルを裏返してラベルを確認してください。", "focus": "turn over" },
        { "en": "We turned over the documents to the legal team.", "ja": "私たちは書類を法務チームに引き渡しました。", "focus": "turned over" },
        { "en": "The warehouse turns over inventory quickly.", "ja": "その倉庫は在庫の回転が速いです。", "focus": "turns over" }
      ] },
      { "phrase": "turn around", "ja": "好転させる・方向転換する", "image": "悪い流れや向きを反対方向へ変える。", "pattern": "turn around", "examples": [
        { "en": "We need to turn around this project quickly.", "ja": "私たちはこの案件を早く立て直す必要があります。", "focus": "turn around" },
        { "en": "The new manager turned around the sales team.", "ja": "新しいマネージャーは営業チームを立て直しました。", "focus": "turned around" },
        { "en": "Please turn around at the next corner.", "ja": "次の角で方向転換してください。", "focus": "turn around" }
      ] },
      { "phrase": "turn back", "ja": "引き返す・元に戻る", "image": "進んだ方向から戻る。", "pattern": "turn back", "examples": [
        { "en": "We had to turn back because the site was closed.", "ja": "現場が閉まっていたため、私たちは引き返す必要がありました。", "focus": "turn back" },
        { "en": "Once we send the order, we cannot turn back.", "ja": "発注を送ったら、もう後戻りできません。", "focus": "turn back" },
        { "en": "The driver turned back after receiving the new instruction.", "ja": "運転手は新しい指示を受けて引き返しました。", "focus": "turned back" }
      ] }
    ]
  },
  {
    "id": "bring",
    "rank": 33,
    "word": "BRING",
    "ipa": "/brɪŋ/",
    "kana": "ブリング",
    "syllable": "bring",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "物・人・情報を話し手側や目的地へ持ってくる",
    "coreDetail": "BRINGは、物や人をこちら側へ持ってくる・連れてくるイメージです。仕事では資料・サンプル・情報・価値・話題を相手や会議の場に持ち込む時によく使います。",
    "coreVisual": { "from": ["📦 物", "👤 人", "📄 情報", "💡 話題", "⭐ 価値"], "to": "➡️ 話し手側・会議・顧客の場", "label": "こちらへ持ってくる" },
    "meanings": [
      { "id": "bring-object", "title": "1 物を持ってくる", "pattern": "bring + 物", "transitivity": "他動詞", "structure": "基本", "image": "物をこちら側や目的地へ持ってくる。", "point": "資料・サンプル・機材などを持ってくる時に使います。", "examples": [
        { "en": "Please bring the documents to the meeting.", "ja": "会議に資料を持ってきてください。", "focus": "bring", "object": "the documents" },
        { "en": "We brought the samples to the client’s office.", "ja": "私たちはサンプルを顧客のオフィスに持っていきました。", "focus": "brought", "object": "the samples" },
        { "en": "Can you bring your laptop tomorrow?", "ja": "明日ノートパソコンを持ってきてもらえますか？", "focus": "bring", "object": "your laptop" }
      ] },
      { "id": "bring-person", "title": "2 人を連れてくる", "pattern": "bring + 人", "transitivity": "他動詞", "structure": "基本", "image": "人をこちら側や目的地へ連れてくる。", "point": "同僚・上司・専門家などを連れてくる時に使います。", "examples": [
        { "en": "I will bring our engineer to the next meeting.", "ja": "次の会議には技術担当を連れていきます。", "focus": "bring", "object": "our engineer" },
        { "en": "She brought a new team member to the site.", "ja": "彼女は新しいチームメンバーを現場に連れていきました。", "focus": "brought", "object": "a new team member" },
        { "en": "Please bring someone who understands the system.", "ja": "そのシステムを理解している人を連れてきてください。", "focus": "bring", "object": "someone" }
      ] },
      { "id": "bring-result", "title": "3 結果・価値をもたらす", "pattern": "bring + 結果", "transitivity": "他動詞", "structure": "基本", "image": "行動が良い結果や価値を生む。", "point": "bring value / bring results のように使います。", "examples": [
        { "en": "This change will bring better results.", "ja": "この変更はより良い結果をもたらします。", "focus": "bring", "object": "better results" },
        { "en": "Fast support brought value to the client.", "ja": "迅速なサポートは顧客に価値をもたらしました。", "focus": "brought", "object": "value" },
        { "en": "The new system can bring major benefits.", "ja": "新しいシステムは大きなメリットをもたらす可能性があります。", "focus": "bring", "object": "major benefits" }
      ] },
      { "id": "bring-topic", "title": "4 話題・問題を持ち出す", "pattern": "bring + 話題", "transitivity": "他動詞", "structure": "基本", "image": "話題や問題を会議の場へ出す。", "point": "bring the issue to someone のように使えます。", "examples": [
        { "en": "Please bring the issue to the manager.", "ja": "その問題を上司に伝えてください。", "focus": "bring", "object": "the issue" },
        { "en": "We brought the customer’s concern to the team.", "ja": "私たちは顧客の懸念をチームに共有しました。", "focus": "brought", "object": "the customer’s concern" },
        { "en": "He brought an important point to the discussion.", "ja": "彼は議論に重要な点を持ち込みました。", "focus": "brought", "object": "an important point" }
      ] }
    ],
    "collocations": [],
    "phrasalVerbs": [
      { "phrase": "bring up", "ja": "話題に出す・育てる", "image": "話題を会議や会話の場に上げる。", "pattern": "bring up", "examples": [
        { "en": "Please bring up the delivery issue in the meeting.", "ja": "会議で納期の問題を話題に出してください。", "focus": "bring up" },
        { "en": "The client brought up a concern about the price.", "ja": "顧客は価格に関する懸念を話題に出しました。", "focus": "brought up" },
        { "en": "I will bring up this point with my manager.", "ja": "この点を上司に相談します。", "focus": "bring up" }
      ] },
      { "phrase": "bring back", "ja": "持ち帰る・復活させる", "image": "離れたものを元の場所や状態へ戻す。", "pattern": "bring back", "examples": [
        { "en": "Please bring back the signed document tomorrow.", "ja": "署名済み書類を明日持ち帰ってください。", "focus": "bring back" },
        { "en": "The update brought back the old feature.", "ja": "その更新で古い機能が復活しました。", "focus": "brought back" },
        { "en": "We need to bring back customer trust.", "ja": "私たちは顧客の信頼を取り戻す必要があります。", "focus": "bring back" }
      ] },
      { "phrase": "bring in", "ja": "導入する・呼び入れる・獲得する", "image": "外から新しいものや人を入れる。", "pattern": "bring in", "examples": [
        { "en": "We brought in a specialist for the project.", "ja": "その案件のために専門家を呼び入れました。", "focus": "brought in" },
        { "en": "The company plans to bring in a new system.", "ja": "会社は新しいシステムを導入する予定です。", "focus": "bring in" },
        { "en": "This campaign brought in many new customers.", "ja": "このキャンペーンで多くの新規顧客を獲得しました。", "focus": "brought in" }
      ] },
      { "phrase": "bring together", "ja": "集める・まとめる", "image": "別々の人や情報を一つにする。", "pattern": "bring together", "examples": [
        { "en": "The workshop brought together different departments.", "ja": "そのワークショップで複数の部署が集まりました。", "focus": "brought together" },
        { "en": "Please bring together the latest information.", "ja": "最新情報をまとめてください。", "focus": "bring together" },
        { "en": "This document brings together all key points.", "ja": "この資料はすべての重要ポイントをまとめています。", "focus": "brings together" }
      ] },
      { "phrase": "bring about", "ja": "引き起こす・もたらす", "image": "原因となって変化を生む。", "pattern": "bring about", "examples": [
        { "en": "The new rule brought about major changes.", "ja": "新しい規則は大きな変化をもたらしました。", "focus": "brought about" },
        { "en": "Better planning can bring about fewer delays.", "ja": "より良い計画により遅延を減らせます。", "focus": "bring about" },
        { "en": "The system error brought about several complaints.", "ja": "システムエラーにより、いくつかのクレームが発生しました。", "focus": "brought about" }
      ] },
      { "phrase": "bring out", "ja": "引き出す・発売する", "image": "内側にあるものを外へ出す。", "pattern": "bring out", "examples": [
        { "en": "The new lighting brought out the texture of the sign.", "ja": "新しい照明が看板の質感を引き出しました。", "focus": "brought out" },
        { "en": "The company will bring out a new model this summer.", "ja": "会社はこの夏、新型モデルを発売します。", "focus": "bring out" },
        { "en": "Good questions can bring out the client’s real needs.", "ja": "良い質問は顧客の本当のニーズを引き出せます。", "focus": "bring out" }
      ] },
      { "phrase": "bring down", "ja": "下げる・減らす", "image": "価格・コスト・数値を下げる。", "pattern": "bring down", "examples": [
        { "en": "We need to bring down the total cost.", "ja": "総コストを下げる必要があります。", "focus": "bring down" },
        { "en": "The new process brought down the defect rate.", "ja": "新しい手順により不良率が下がりました。", "focus": "brought down" },
        { "en": "Can we bring down the delivery fee?", "ja": "配送費を下げられますか？", "focus": "bring down" }
      ] },
      { "phrase": "bring forward", "ja": "予定を早める・提案する", "image": "予定や案を前に出す。", "pattern": "bring forward", "examples": [
        { "en": "Can we bring forward the delivery date?", "ja": "納品日を前倒しできますか？", "focus": "bring forward" },
        { "en": "The team brought forward a new proposal.", "ja": "チームは新しい提案を出しました。", "focus": "brought forward" },
        { "en": "Please bring forward any concerns by Friday.", "ja": "金曜日までに懸念点を出してください。", "focus": "bring forward" }
      ] },
      { "phrase": "bring into", "ja": "〜に持ち込む・参加させる", "image": "物・人・考えを別の場に入れる。", "pattern": "bring into", "examples": [
        { "en": "We need to bring more data into the discussion.", "ja": "議論にもっとデータを持ち込む必要があります。", "focus": "bring into" },
        { "en": "The manager brought a specialist into the project.", "ja": "マネージャーは専門家を案件に参加させました。", "focus": "brought into" },
        { "en": "Please bring this issue into the next meeting.", "ja": "この問題を次の会議に持ち込んでください。", "focus": "bring into" }
      ] },
      { "phrase": "bring over", "ja": "持ってくる・連れてくる", "image": "別の場所からこちらへ持ってくる。", "pattern": "bring over", "examples": [
        { "en": "Can you bring over the sample board tomorrow?", "ja": "明日サンプルボードを持ってきてもらえますか？", "focus": "bring over" },
        { "en": "I brought over the catalog for the client.", "ja": "顧客用にカタログを持ってきました。", "focus": "brought over" },
        { "en": "Please bring over the latest price list.", "ja": "最新版の価格表を持ってきてください。", "focus": "bring over" }
      ] }
    ]
  },
  {
  "id": "hold",
  "rank": 34,
  "word": "HOLD",
  "ipa": "/hoʊld/",
  "kana": "ホールド",
  "syllable": "hold",
  "transitivity": "他動詞・自動詞",
  "importance": "★★★★☆ 重要",
  "core": "手放さず、一定の状態に保つ",
  "coreDetail": "HOLDは、物・予定・権利・状態を自分の範囲内に保つイメージです。仕事では会議を開く、電話を保留する、役職や責任を持つ、判断を一時的に止める場面でよく使います。",
  "coreVisual": {
    "from": [
      "📄 資料",
      "📅 会議",
      "📞 電話",
      "✅ 権利",
      "🧩 状態"
    ],
    "to": "自分・チームの管理下",
    "label": "持つ → 保つ → 維持する"
  },
  "meanings": [
    {
      "id": "hold-meeting",
      "title": "1 開催する",
      "pattern": "HOLD + meeting / event",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "会議やイベントを開く。",
      "point": "hold a meeting は仕事で頻出。赤文字は hold / held のみ。",
      "examples": [
        {
          "en": "We will hold a meeting tomorrow.",
          "ja": "私たちは明日会議を開きます。",
          "focus": "hold",
          "object": "a meeting"
        },
        {
          "en": "The company held a training session last week.",
          "ja": "会社は先週研修を開催しました。",
          "focus": "held",
          "object": "a training session"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "hold-position",
      "title": "2 役職・権利を持つ",
      "pattern": "HOLD + position / right",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "役職・資格・権利を持っている。",
      "point": "hold は『一定の立場を保つ』にも使います。",
      "examples": [
        {
          "en": "She holds a senior position in the sales team.",
          "ja": "彼女は営業チームで上級職に就いています。",
          "focus": "holds",
          "object": "a senior position"
        },
        {
          "en": "We hold the right to review the final design.",
          "ja": "私たちは最終デザインを確認する権利を持っています。",
          "focus": "hold",
          "object": "the right"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "hold-line",
      "title": "3 電話で待つ",
      "pattern": "HOLD the line",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "電話でそのまま待つ。",
      "point": "電話対応で使いやすい基本表現。",
      "examples": [
        {
          "en": "Please hold the line while I check the stock.",
          "ja": "在庫を確認しますので、そのままお待ちください。",
          "focus": "hold",
          "object": "the line"
        },
        {
          "en": "Could you hold for a moment?",
          "ja": "少々お待ちいただけますか。",
          "focus": "hold"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "hold-status",
      "title": "4 状態を保つ",
      "pattern": "HOLD + status / level",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "状態・水準を保つ。",
      "point": "価格・品質・水準を保つときに使えます。",
      "examples": [
        {
          "en": "We need to hold the current price until Friday.",
          "ja": "私たちは金曜日まで現在の価格を維持する必要があります。",
          "focus": "hold",
          "object": "the current price"
        },
        {
          "en": "The product held its brightness during the test.",
          "ja": "その製品は試験中も明るさを保ちました。",
          "focus": "held",
          "object": "its brightness"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "hold-responsible",
      "title": "5 責任があるとみなす",
      "pattern": "HOLD + 人 + responsible",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "人に責任があると考える。",
      "point": "少し硬いですがビジネスで使います。",
      "examples": [
        {
          "en": "The manager held the team responsible for the delay.",
          "ja": "上司は遅延についてチームに責任があると考えました。",
          "focus": "held",
          "object": "the team"
        },
        {
          "en": "We should hold ourselves responsible for the final check.",
          "ja": "私たちは最終確認に責任を持つべきです。",
          "focus": "hold",
          "object": "ourselves"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "hold-opinion",
      "title": "6 意見・考えを持つ",
      "pattern": "HOLD + opinion / view",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "意見や考えを持っている。",
      "point": "フォーマルな文で使いやすい表現。",
      "examples": [
        {
          "en": "He holds a different view on the proposal.",
          "ja": "彼はその提案について別の見方を持っています。",
          "focus": "holds",
          "object": "a different view"
        },
        {
          "en": "Many clients hold the same opinion about the design.",
          "ja": "多くの顧客がそのデザインについて同じ意見を持っています。",
          "focus": "hold",
          "object": "the same opinion"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "hold-place",
      "title": "7 場所・予約を確保する",
      "pattern": "HOLD + place / reservation",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "場所や予約を押さえる。",
      "point": "仮押さえ・確保のニュアンス。",
      "examples": [
        {
          "en": "Please hold the meeting room until 3 p.m.",
          "ja": "15時まで会議室を押さえておいてください。",
          "focus": "hold",
          "object": "the meeting room"
        },
        {
          "en": "We held the reservation for the client.",
          "ja": "私たちは顧客のために予約を確保しました。",
          "focus": "held",
          "object": "the reservation"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "hold-data",
      "title": "8 データ・資料を保管する",
      "pattern": "HOLD + data / document",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "データや資料を保管している。",
      "point": "在庫・資料・データ管理で使えます。",
      "examples": [
        {
          "en": "The system holds the latest customer data.",
          "ja": "そのシステムは最新の顧客データを保持しています。",
          "focus": "holds",
          "object": "the latest customer data"
        },
        {
          "en": "Please hold the original documents until approval.",
          "ja": "承認まで原本を保管してください。",
          "focus": "hold",
          "object": "the original documents"
        }
      ],
      "dailyExamples": []
    }
  ],
  "collocations": [],
  "phrasalVerbs": [
    {
      "phrase": "hold on",
      "ja": "待つ・持ちこたえる",
      "image": "少し待つ、または状況に耐える。",
      "pattern": "hold on",
      "examples": [
        {
          "en": "Please hold on while I check the file.",
          "ja": "ファイルを確認しますので少々お待ちください。",
          "focus": "hold on"
        },
        {
          "en": "We need to hold on until the supplier replies.",
          "ja": "仕入先から返信が来るまで持ちこたえる必要があります。",
          "focus": "hold on"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold off",
      "ja": "延期する・控える",
      "image": "行動や判断を少し待つ。",
      "pattern": "hold off on + 名詞/動名詞",
      "examples": [
        {
          "en": "We should hold off on the order until we confirm the price.",
          "ja": "価格を確認するまで発注は控えるべきです。",
          "focus": "hold off"
        },
        {
          "en": "The client held off on the final decision.",
          "ja": "顧客は最終判断を保留しました。",
          "focus": "held off"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold back",
      "ja": "抑える・引き止める",
      "image": "感情・情報・進行を抑える。",
      "pattern": "hold back + 名詞",
      "examples": [
        {
          "en": "Please do not hold back important information.",
          "ja": "重要な情報は隠さないでください。",
          "focus": "hold back"
        },
        {
          "en": "The missing data held back the report.",
          "ja": "不足データが報告書の作成を遅らせました。",
          "focus": "held back"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold up",
      "ja": "遅らせる・持ちこたえる",
      "image": "進行を止める、または状態が保つ。",
      "pattern": "hold up",
      "examples": [
        {
          "en": "The approval issue held up the shipment.",
          "ja": "承認の問題で出荷が遅れました。",
          "focus": "held up"
        },
        {
          "en": "The sample held up well during the test.",
          "ja": "サンプルは試験中よく持ちこたえました。",
          "focus": "held up"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold onto",
      "ja": "〜を持ち続ける",
      "image": "必要なものを手放さず保持する。",
      "pattern": "hold onto + 名詞",
      "examples": [
        {
          "en": "Please hold onto the original receipt.",
          "ja": "原本の領収書は保管しておいてください。",
          "focus": "hold onto"
        },
        {
          "en": "We should hold onto this data for future analysis.",
          "ja": "今後の分析のためにこのデータを保持しておくべきです。",
          "focus": "hold onto"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold out",
      "ja": "持ちこたえる・差し出す",
      "image": "条件を保って待つ、または手を差し出す。",
      "pattern": "hold out",
      "examples": [
        {
          "en": "The team held out until the deadline was extended.",
          "ja": "チームは締切が延びるまで持ちこたえました。",
          "focus": "held out"
        },
        {
          "en": "We held out for better payment terms.",
          "ja": "私たちはより良い支払条件を求めて粘りました。",
          "focus": "held out"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold together",
      "ja": "まとまった状態を保つ",
      "image": "チームや計画が崩れずに続く。",
      "pattern": "hold together",
      "examples": [
        {
          "en": "The project held together because everyone shared updates.",
          "ja": "全員が情報共有したため、プロジェクトはまとまりを保てました。",
          "focus": "held together"
        },
        {
          "en": "We need a clear plan to hold the team together.",
          "ja": "チームをまとめるには明確な計画が必要です。",
          "focus": "hold together"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold down",
      "ja": "抑える・仕事を続ける",
      "image": "費用を抑える、または仕事を続ける。",
      "pattern": "hold down + 名詞",
      "examples": [
        {
          "en": "We need to hold down the total cost.",
          "ja": "私たちは総コストを抑える必要があります。",
          "focus": "hold down"
        },
        {
          "en": "He holds down two roles in the project.",
          "ja": "彼はそのプロジェクトで2つの役割を担い続けています。",
          "focus": "holds down"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold against",
      "ja": "〜を悪く思う",
      "image": "過去のことを理由に相手を責める。",
      "pattern": "hold + 名詞 + against + 人",
      "examples": [
        {
          "en": "I will not hold the delay against you.",
          "ja": "その遅れについてあなたを責めるつもりはありません。",
          "focus": "hold against"
        },
        {
          "en": "The client did not hold the mistake against our team.",
          "ja": "顧客はそのミスを私たちのチームのせいにはしませんでした。",
          "focus": "hold against"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold over",
      "ja": "延期する・持ち越す",
      "image": "予定や議題を後に回す。",
      "pattern": "hold over + 名詞",
      "examples": [
        {
          "en": "We held over the pricing discussion until next week.",
          "ja": "価格の話し合いは来週に持ち越しました。",
          "focus": "held over"
        },
        {
          "en": "Please hold over this topic for the next meeting.",
          "ja": "この議題は次回の会議に持ち越してください。",
          "focus": "hold over"
        }
      ],
      "dailyExamples": []
    }
  ]
},
  {
  "id": "set",
  "rank": 35,
  "word": "SET",
  "ipa": "/set/",
  "kana": "セット",
  "syllable": "set",
  "transitivity": "他動詞・自動詞",
  "importance": "★★★★★ 超重要",
  "core": "位置・予定・基準を決めて整える",
  "coreDetail": "SETは、物を置く、予定・目標・価格・基準を決める、使える状態に整えるイメージです。仕事では deadline, goal, price, rule, schedule と一緒に非常によく使います。",
  "coreVisual": {
    "from": [
      "📅 予定",
      "🎯 目標",
      "💰 価格",
      "📏 基準",
      "⚙️ 状態"
    ],
    "to": "決まった位置・状態",
    "label": "決める → 置く → 整える"
  },
  "meanings": [
    {
      "id": "set-deadline",
      "title": "1 期限を設定する",
      "pattern": "SET + deadline / date",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "期限や日付を決める。",
      "point": "set a deadline は仕事で最重要。",
      "examples": [
        {
          "en": "We need to set a deadline for the quotation.",
          "ja": "私たちは見積の期限を設定する必要があります。",
          "focus": "set",
          "object": "a deadline"
        },
        {
          "en": "The client set the final date for the meeting.",
          "ja": "顧客は会議の最終日程を設定しました。",
          "focus": "set",
          "object": "the final date"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "set-goal",
      "title": "2 目標を設定する",
      "pattern": "SET + goal / target",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "目標や数値を決める。",
      "point": "営業目標や学習目標でも使えます。",
      "examples": [
        {
          "en": "We set a sales target for this month.",
          "ja": "私たちは今月の売上目標を設定しました。",
          "focus": "set",
          "object": "a sales target"
        },
        {
          "en": "Please set a clear goal before the next review.",
          "ja": "次回のレビュー前に明確な目標を設定してください。",
          "focus": "set",
          "object": "a clear goal"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "set-price",
      "title": "3 価格・条件を決める",
      "pattern": "SET + price / terms",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "価格や条件を決める。",
      "point": "見積・契約で使いやすい表現。",
      "examples": [
        {
          "en": "The supplier set a new price for the product.",
          "ja": "仕入先はその製品に新しい価格を設定しました。",
          "focus": "set",
          "object": "a new price"
        },
        {
          "en": "We should set the payment terms before sending the contract.",
          "ja": "契約書を送る前に支払条件を決めるべきです。",
          "focus": "set",
          "object": "the payment terms"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "set-rule",
      "title": "4 ルール・基準を決める",
      "pattern": "SET + rule / standard",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "ルールや基準を決める。",
      "point": "品質基準や社内ルールにも使えます。",
      "examples": [
        {
          "en": "The manager set a new rule for sample requests.",
          "ja": "上司はサンプル依頼に関する新しいルールを決めました。",
          "focus": "set",
          "object": "a new rule"
        },
        {
          "en": "We set a quality standard for this project.",
          "ja": "私たちはこの案件の品質基準を設定しました。",
          "focus": "set",
          "object": "a quality standard"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "set-place",
      "title": "5 置く・配置する",
      "pattern": "SET + 物 + 場所",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "物をある場所に置く。",
      "point": "物理的に置く基本イメージ。",
      "examples": [
        {
          "en": "Please set the samples on the table.",
          "ja": "サンプルをテーブルの上に置いてください。",
          "focus": "set",
          "object": "the samples"
        },
        {
          "en": "He set the catalog near the reception desk.",
          "ja": "彼はカタログを受付の近くに置きました。",
          "focus": "set",
          "object": "the catalog"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "set-example",
      "title": "6 手本を示す",
      "pattern": "SET an example",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "良い例を示す。",
      "point": "リーダー・上司の行動に使いやすい表現。",
      "examples": [
        {
          "en": "The team leader set a good example for new staff.",
          "ja": "チームリーダーは新人に良い手本を示しました。",
          "focus": "set",
          "object": "a good example"
        },
        {
          "en": "We should set an example by sharing updates early.",
          "ja": "早めに情報共有することで手本を示すべきです。",
          "focus": "set",
          "object": "an example"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "set-tone",
      "title": "7 雰囲気・方向性を決める",
      "pattern": "SET the tone / direction",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "会議や提案の雰囲気・方向性を決める。",
      "point": "抽象的な方向づけにも使えます。",
      "examples": [
        {
          "en": "The first slide set the tone for the presentation.",
          "ja": "最初のスライドがプレゼンの雰囲気を決めました。",
          "focus": "set",
          "object": "the tone"
        },
        {
          "en": "This decision will set the direction for the project.",
          "ja": "この判断がプロジェクトの方向性を決めます。",
          "focus": "set",
          "object": "the direction"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "set-value",
      "title": "8 数値・レベルを設定する",
      "pattern": "SET + value / level",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "数値や設定値を決める。",
      "point": "機器・システム設定で使えます。",
      "examples": [
        {
          "en": "Please set the brightness level to 80 percent.",
          "ja": "明るさのレベルを80%に設定してください。",
          "focus": "set",
          "object": "the brightness level"
        },
        {
          "en": "We set the system value after the test.",
          "ja": "試験後にシステム値を設定しました。",
          "focus": "set",
          "object": "the system value"
        }
      ],
      "dailyExamples": []
    }
  ],
  "collocations": [],
  "phrasalVerbs": [
    {
      "phrase": "set up",
      "ja": "設定する・準備する",
      "image": "会議・機器・環境を使える状態にする。",
      "pattern": "set up + 名詞",
      "examples": [
        {
          "en": "We set up a meeting with the client.",
          "ja": "私たちは顧客との会議を設定しました。",
          "focus": "set up"
        },
        {
          "en": "Please set up the demo environment before noon.",
          "ja": "正午までにデモ環境を準備してください。",
          "focus": "set up"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set aside",
      "ja": "取っておく・脇に置く",
      "image": "時間・予算・問題を別に確保する。",
      "pattern": "set aside + 名詞",
      "examples": [
        {
          "en": "We set aside time to review the proposal.",
          "ja": "私たちは提案書を確認する時間を確保しました。",
          "focus": "set aside"
        },
        {
          "en": "Please set aside this issue until the client replies.",
          "ja": "顧客から返信が来るまでこの件はいったん脇に置いてください。",
          "focus": "set aside"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set back",
      "ja": "遅らせる",
      "image": "進行を遅らせる。",
      "pattern": "set back + 名詞",
      "examples": [
        {
          "en": "The delivery issue set back the project.",
          "ja": "納品トラブルでプロジェクトが遅れました。",
          "focus": "set back"
        },
        {
          "en": "A missing document could set back approval.",
          "ja": "書類不足で承認が遅れる可能性があります。",
          "focus": "set back"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set out",
      "ja": "出発する・説明し始める",
      "image": "出発する、または方針を示す。",
      "pattern": "set out",
      "examples": [
        {
          "en": "We set out the main points in the proposal.",
          "ja": "私たちは提案書で主なポイントを示しました。",
          "focus": "set out"
        },
        {
          "en": "The team set out early for the site.",
          "ja": "チームは現場へ早めに出発しました。",
          "focus": "set out"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set off",
      "ja": "出発する・引き起こす",
      "image": "出発する、または反応を引き起こす。",
      "pattern": "set off",
      "examples": [
        {
          "en": "We set off for the client visit at 8 a.m.",
          "ja": "私たちは午前8時に顧客訪問へ出発しました。",
          "focus": "set off"
        },
        {
          "en": "The delay set off several schedule changes.",
          "ja": "その遅れが複数のスケジュール変更を引き起こしました。",
          "focus": "set off"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set down",
      "ja": "書き留める・置く",
      "image": "情報を書き留める、または置く。",
      "pattern": "set down + 名詞",
      "examples": [
        {
          "en": "Please set down the agreed points in the minutes.",
          "ja": "合意事項を議事録に書き留めてください。",
          "focus": "set down"
        },
        {
          "en": "He set down the samples near the entrance.",
          "ja": "彼はサンプルを入口付近に置きました。",
          "focus": "set down"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set in",
      "ja": "始まる・定着する",
      "image": "状態が始まり、続く。",
      "pattern": "set in",
      "examples": [
        {
          "en": "A delay set in after the parts arrived late.",
          "ja": "部品の到着が遅れた後、遅延が発生しました。",
          "focus": "set in"
        },
        {
          "en": "Once confusion sets in, the team needs clear instructions.",
          "ja": "混乱が生じたら、チームには明確な指示が必要です。",
          "focus": "sets in"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set about",
      "ja": "取りかかる",
      "image": "仕事や作業に取りかかる。",
      "pattern": "set about + 動名詞",
      "examples": [
        {
          "en": "We set about checking the inventory right away.",
          "ja": "私たちはすぐに在庫確認に取りかかりました。",
          "focus": "set about"
        },
        {
          "en": "The team set about preparing the revised estimate.",
          "ja": "チームは修正版の見積作成に取りかかりました。",
          "focus": "set about"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set apart",
      "ja": "区別する",
      "image": "他と違う特徴で目立たせる。",
      "pattern": "set apart + 名詞",
      "examples": [
        {
          "en": "Fast support sets our team apart from competitors.",
          "ja": "迅速なサポートが私たちのチームを競合と差別化します。",
          "focus": "sets apart"
        },
        {
          "en": "This feature sets the product apart in the market.",
          "ja": "この機能が市場でその製品を差別化します。",
          "focus": "sets apart"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set against",
      "ja": "〜に反対させる・対比する",
      "image": "相手や条件に対立させる。",
      "pattern": "set + 名詞 + against + 名詞",
      "examples": [
        {
          "en": "The report set the new plan against the old one.",
          "ja": "その報告書は新しい計画を古い計画と比較しました。",
          "focus": "set against"
        },
        {
          "en": "We should not set one department against another.",
          "ja": "私たちは部署同士を対立させるべきではありません。",
          "focus": "set against"
        }
      ],
      "dailyExamples": []
    }
  ]
},
  {
  "id": "change",
  "rank": 36,
  "word": "CHANGE",
  "ipa": "/tʃeɪndʒ/",
  "kana": "チェインジ",
  "syllable": "change",
  "transitivity": "他動詞・自動詞",
  "importance": "★★★★★ 超重要",
  "core": "今の状態から別の状態へ変わる・変える",
  "coreDetail": "CHANGEは、予定・条件・デザイン・考えなどを今の状態から別の状態へ移すイメージです。仕事では schedule, design, price, plan, details と一緒によく使います。",
  "coreVisual": {
    "from": [
      "📅 予定",
      "📝 条件",
      "🎨 デザイン",
      "💭 考え",
      "🔧 設定"
    ],
    "to": "別の状態・新しい形",
    "label": "現在の状態 → 新しい状態"
  },
  "meanings": [
    {
      "id": "change-schedule",
      "title": "1 予定を変更する",
      "pattern": "CHANGE + schedule / date",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "予定や日程を変える。",
      "point": "仕事で最も使いやすい基本表現。",
      "examples": [
        {
          "en": "We need to change the schedule for the meeting.",
          "ja": "私たちは会議の予定を変更する必要があります。",
          "focus": "change",
          "object": "the schedule"
        },
        {
          "en": "The client changed the delivery date.",
          "ja": "顧客は納品日を変更しました。",
          "focus": "changed",
          "object": "the delivery date"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "change-plan",
      "title": "2 計画を変える",
      "pattern": "CHANGE + plan",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "計画や進め方を変える。",
      "point": "状況に合わせて方針を変えるときに使います。",
      "examples": [
        {
          "en": "We changed the plan after the site visit.",
          "ja": "現場確認後に計画を変更しました。",
          "focus": "changed",
          "object": "the plan"
        },
        {
          "en": "Please change the plan if the stock is not enough.",
          "ja": "在庫が足りない場合は計画を変更してください。",
          "focus": "change",
          "object": "the plan"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "change-design",
      "title": "3 デザインを変更する",
      "pattern": "CHANGE + design / layout",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "デザインやレイアウトを変える。",
      "point": "提案資料や製品仕様で使えます。",
      "examples": [
        {
          "en": "The customer asked us to change the design.",
          "ja": "顧客は私たちにデザイン変更を依頼しました。",
          "focus": "change",
          "object": "the design"
        },
        {
          "en": "We changed the layout to make it easier to read.",
          "ja": "読みやすくするためにレイアウトを変更しました。",
          "focus": "changed",
          "object": "the layout"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "change-price",
      "title": "4 価格・条件を変更する",
      "pattern": "CHANGE + price / terms",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "価格や条件を変える。",
      "point": "見積・契約でよく使います。",
      "examples": [
        {
          "en": "We cannot change the price after approval.",
          "ja": "承認後に価格を変更することはできません。",
          "focus": "change",
          "object": "the price"
        },
        {
          "en": "The supplier changed the terms without notice.",
          "ja": "仕入先は事前連絡なく条件を変更しました。",
          "focus": "changed",
          "object": "the terms"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "change-mind",
      "title": "5 考えを変える",
      "pattern": "CHANGE one's mind",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "考えや判断を変える。",
      "point": "顧客・上司・自分の判断に使えます。",
      "examples": [
        {
          "en": "The client changed his mind after seeing the sample.",
          "ja": "顧客はサンプルを見た後で考えを変えました。",
          "focus": "changed",
          "object": "his mind"
        },
        {
          "en": "I may change my mind after reviewing the data.",
          "ja": "データを確認した後で考えを変えるかもしれません。",
          "focus": "change",
          "object": "my mind"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "change-details",
      "title": "6 詳細を変更する",
      "pattern": "CHANGE + details / information",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "詳細や情報を変える。",
      "point": "資料・メール・登録情報で使えます。",
      "examples": [
        {
          "en": "Please change the details in the quotation.",
          "ja": "見積書の詳細を変更してください。",
          "focus": "change",
          "object": "the details"
        },
        {
          "en": "We changed the contact information in the system.",
          "ja": "システム上の連絡先情報を変更しました。",
          "focus": "changed",
          "object": "the contact information"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "change-state",
      "title": "7 状態が変わる",
      "pattern": "CHANGE + state / situation",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "状態や状況が変わる。",
      "point": "自動詞としても使います。",
      "examples": [
        {
          "en": "The situation changed after the client called.",
          "ja": "顧客から電話があった後で状況が変わりました。",
          "focus": "changed"
        },
        {
          "en": "The color may change under strong light.",
          "ja": "強い光の下では色が変わる可能性があります。",
          "focus": "change"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "change-settings",
      "title": "8 設定を変更する",
      "pattern": "CHANGE + setting",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O / S + V + M",
      "image": "機器やアプリの設定を変える。",
      "point": "システム・アプリ・照明設定で使えます。",
      "examples": [
        {
          "en": "Please change the settings before the test.",
          "ja": "テスト前に設定を変更してください。",
          "focus": "change",
          "object": "the settings"
        },
        {
          "en": "We changed the brightness setting on site.",
          "ja": "現場で明るさの設定を変更しました。",
          "focus": "changed",
          "object": "the brightness setting"
        }
      ],
      "dailyExamples": []
    }
  ],
  "collocations": [],
  "phrasalVerbs": [
    {
      "phrase": "change into",
      "ja": "〜に変わる・着替える",
      "image": "別の状態や形になる。",
      "pattern": "change into + 名詞",
      "examples": [
        {
          "en": "The inquiry changed into a real order.",
          "ja": "その問い合わせは実際の注文に変わりました。",
          "focus": "changed into"
        },
        {
          "en": "The small issue changed into a larger problem.",
          "ja": "小さな問題がより大きな問題に変わりました。",
          "focus": "changed into"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "change from",
      "ja": "Aから変わる",
      "image": "元の状態から別の状態へ変わる。",
      "pattern": "change from A to B",
      "examples": [
        {
          "en": "The status changed from pending to approved.",
          "ja": "ステータスは保留から承認済みに変わりました。",
          "focus": "changed from"
        },
        {
          "en": "We changed from the old system to the new one.",
          "ja": "私たちは旧システムから新システムに切り替えました。",
          "focus": "changed from"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "change over",
      "ja": "切り替える",
      "image": "システム・方法・体制を切り替える。",
      "pattern": "change over to + 名詞",
      "examples": [
        {
          "en": "The team will change over to a new workflow.",
          "ja": "チームは新しい作業フローに切り替えます。",
          "focus": "change over"
        },
        {
          "en": "Please prepare before we change over to the new format.",
          "ja": "新しい形式に切り替える前に準備してください。",
          "focus": "change over"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "change back",
      "ja": "元に戻す",
      "image": "以前の状態へ戻す。",
      "pattern": "change back",
      "examples": [
        {
          "en": "We changed back to the original layout.",
          "ja": "元のレイアウトに戻しました。",
          "focus": "changed back"
        },
        {
          "en": "Please change the setting back after the test.",
          "ja": "テスト後に設定を元に戻してください。",
          "focus": "change back"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "change around",
      "ja": "配置を変える・入れ替える",
      "image": "順番や配置を変える。",
      "pattern": "change around + 名詞",
      "examples": [
        {
          "en": "We changed around the order of the slides.",
          "ja": "スライドの順番を入れ替えました。",
          "focus": "changed around"
        },
        {
          "en": "Please change around the seating for the meeting.",
          "ja": "会議用に席の配置を変えてください。",
          "focus": "change around"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "change out",
      "ja": "交換する",
      "image": "部品や古いものを交換する。",
      "pattern": "change out + 名詞",
      "examples": [
        {
          "en": "We need to change out the damaged part.",
          "ja": "破損した部品を交換する必要があります。",
          "focus": "change out"
        },
        {
          "en": "The team changed out the old module on site.",
          "ja": "チームは現場で古いモジュールを交換しました。",
          "focus": "changed out"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "change up",
      "ja": "変化をつける",
      "image": "やり方や流れを少し変える。",
      "pattern": "change up + 名詞",
      "examples": [
        {
          "en": "We should change up the presentation style.",
          "ja": "プレゼンの進め方に変化をつけるべきです。",
          "focus": "change up"
        },
        {
          "en": "The manager changed up the agenda to save time.",
          "ja": "上司は時間を節約するため議題の順番を変えました。",
          "focus": "changed up"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "change to",
      "ja": "〜に変更する",
      "image": "別の選択肢・状態に変更する。",
      "pattern": "change to + 名詞",
      "examples": [
        {
          "en": "Please change to the latest version of the file.",
          "ja": "最新バージョンのファイルに変更してください。",
          "focus": "change to"
        },
        {
          "en": "We changed to a different supplier after the delay.",
          "ja": "遅延後、私たちは別の仕入先に変更しました。",
          "focus": "changed to"
        }
      ],
      "dailyExamples": []
    }
  ]
},
  {
  "id": "open",
  "rank": 37,
  "word": "OPEN",
  "ipa": "/ˈoʊpən/",
  "kana": "オープン",
  "syllable": "open",
  "transitivity": "他動詞・自動詞",
  "importance": "★★★★☆ 重要",
  "core": "閉じているもの・止まっている流れを、使える状態にする",
  "coreDetail": "OPENは、ドアやファイルを開くだけでなく、会議・議論・機会・アクセスを『使える状態にする』感覚です。仕事では資料確認、会議開始、商談機会、募集開始でよく使います。",
  "coreVisual": {
    "from": [
      "🔒 閉じた状態",
      "📄 ファイル",
      "💬 議論",
      "🚪 機会",
      "📅 会議"
    ],
    "to": "使える状態・始まった状態",
    "label": "閉じた状態 → 使える状態"
  },
  "meanings": [
    {
      "id": "open-file",
      "title": "1 ファイル・資料を開く",
      "pattern": "open + 名詞",
      "transitivity": "他動詞",
      "structure": "S + V + O",
      "image": "閉じているファイルや資料を見られる状態にする。",
      "point": "基本は open だけを赤くします。",
      "examples": [
        {
          "en": "Please open the file I sent you.",
          "ja": "私が送ったファイルを開いてください。",
          "focus": "open",
          "object": "the file"
        },
        {
          "en": "I opened the latest report before the meeting.",
          "ja": "私は会議前に最新レポートを開きました。",
          "focus": "opened",
          "object": "the latest report"
        },
        {
          "en": "Can you open the attachment on your phone?",
          "ja": "あなたはスマホで添付ファイルを開けますか？",
          "focus": "open",
          "object": "the attachment"
        }
      ]
    },
    {
      "id": "open-meeting",
      "title": "2 会議・セッションを始める",
      "pattern": "open + meeting / session",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O",
      "image": "会議やセッションを始める。",
      "point": "open a meeting は少しフォーマルですが仕事で使えます。",
      "examples": [
        {
          "en": "The manager opened the meeting with a short update.",
          "ja": "マネージャーは短い報告で会議を始めました。",
          "focus": "opened",
          "object": "the meeting"
        },
        {
          "en": "Let me open today's meeting.",
          "ja": "本日の会議を始めさせてください。",
          "focus": "open",
          "object": "today's meeting"
        },
        {
          "en": "The session opened at ten.",
          "ja": "そのセッションは10時に始まりました。",
          "focus": "opened"
        }
      ]
    },
    {
      "id": "open-discussion",
      "title": "3 議論・話題を始める",
      "pattern": "open + discussion / topic",
      "transitivity": "他動詞",
      "structure": "S + V + O",
      "image": "議論や話題を切り出す。",
      "point": "価格・仕様・納期の話を始めるときに使えます。",
      "examples": [
        {
          "en": "I would like to open the discussion about pricing.",
          "ja": "価格についての議論を始めたいと思います。",
          "focus": "open",
          "object": "the discussion"
        },
        {
          "en": "This issue opens an important discussion.",
          "ja": "この問題は重要な議論につながります。",
          "focus": "opens",
          "object": "an important discussion"
        },
        {
          "en": "Can we open the topic of delivery dates?",
          "ja": "納期の話題を始めてもいいですか？",
          "focus": "open",
          "object": "the topic"
        }
      ]
    },
    {
      "id": "open-account",
      "title": "4 口座・アカウントを開設する",
      "pattern": "open + account",
      "transitivity": "他動詞",
      "structure": "S + V + O",
      "image": "アカウントや口座を新しく作って使える状態にする。",
      "point": "open an account は定型表現です。",
      "examples": [
        {
          "en": "We opened a new account for the client.",
          "ja": "私たちは顧客用に新しいアカウントを開設しました。",
          "focus": "opened",
          "object": "a new account"
        },
        {
          "en": "Please open a user account for him.",
          "ja": "彼用のユーザーアカウントを作成してください。",
          "focus": "open",
          "object": "a user account"
        },
        {
          "en": "The company opened a bank account overseas.",
          "ja": "会社は海外で銀行口座を開設しました。",
          "focus": "opened",
          "object": "a bank account"
        }
      ]
    },
    {
      "id": "open-opportunity",
      "title": "5 機会・可能性を広げる",
      "pattern": "open + opportunity / door / market",
      "transitivity": "他動詞",
      "structure": "S + V + O",
      "image": "新しい可能性や道を作る。",
      "point": "open the door to は比喩的に『〜につながる』という意味で使います。",
      "examples": [
        {
          "en": "This project opens new opportunities for us.",
          "ja": "この案件は私たちに新しい機会をもたらします。",
          "focus": "opens",
          "object": "new opportunities"
        },
        {
          "en": "The meeting opened the door to future cooperation.",
          "ja": "その会議で今後の協力の可能性が開けました。",
          "focus": "opened",
          "object": "the door"
        },
        {
          "en": "The partnership opened a new market.",
          "ja": "その提携により新しい市場が開けました。",
          "focus": "opened",
          "object": "a new market"
        }
      ]
    },
    {
      "id": "open-business",
      "title": "6 店・窓口・受付が開く",
      "pattern": "open",
      "transitivity": "自動詞",
      "structure": "S + V",
      "image": "店・窓口・受付が利用可能になる。",
      "point": "自動詞なので目的語なしで使えます。",
      "examples": [
        {
          "en": "The support desk opens at ten.",
          "ja": "サポート窓口は10時に開きます。",
          "focus": "opens"
        },
        {
          "en": "Registration opens next Monday.",
          "ja": "登録受付は来週月曜に始まります。",
          "focus": "opens"
        },
        {
          "en": "The office opens at nine.",
          "ja": "オフィスは9時に開きます。",
          "focus": "opens"
        }
      ]
    },
    {
      "id": "open-position",
      "title": "7 募集・枠を出す",
      "pattern": "open + position / role",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O",
      "image": "求人や空き枠を使える状態にする。",
      "point": "採用・予約・営業枠の文脈で使えます。",
      "examples": [
        {
          "en": "We opened a new sales position.",
          "ja": "私たちは新しい営業職の募集を開始しました。",
          "focus": "opened",
          "object": "a new sales position"
        },
        {
          "en": "Two seats opened for the training session.",
          "ja": "研修セッションに2席の空きが出ました。",
          "focus": "opened"
        },
        {
          "en": "The HR team opened three roles this month.",
          "ja": "人事チームは今月3つの職種を募集開始しました。",
          "focus": "opened",
          "object": "three roles"
        }
      ]
    },
    {
      "id": "open-mind",
      "title": "8 視野・考え方を広げる",
      "pattern": "open + mind",
      "transitivity": "他動詞",
      "structure": "S + V + O",
      "image": "新しい考え方を受け入れやすくする。",
      "point": "open my mind は比喩表現ですが自然です。",
      "examples": [
        {
          "en": "Working abroad opened my mind.",
          "ja": "海外勤務で視野が広がりました。",
          "focus": "opened",
          "object": "my mind"
        },
        {
          "en": "The feedback opened our minds to customer needs.",
          "ja": "そのフィードバックで私たちは顧客ニーズに目が向きました。",
          "focus": "opened",
          "object": "our minds"
        },
        {
          "en": "Reading opens your mind to new ideas.",
          "ja": "読書は新しい考え方への視野を広げます。",
          "focus": "opens",
          "object": "your mind"
        }
      ]
    }
  ],
  "collocations": [],
  "phrasalVerbs": [
    {
      "phrase": "open up",
      "ja": "心を開く・詳しく話す",
      "image": "閉じていた情報や気持ちを外に出す。",
      "pattern": "open up",
      "examples": [
        {
          "en": "The client opened up during the follow-up call.",
          "ja": "その顧客はフォローの電話で本音を話してくれました。",
          "focus": "opened up"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "open up about",
      "ja": "〜について詳しく話す",
      "image": "特定の話題について本音を話す。",
      "pattern": "open up about",
      "examples": [
        {
          "en": "She opened up about the problem with the schedule.",
          "ja": "彼女はスケジュールの問題について詳しく話しました。",
          "focus": "opened up about",
          "object": "the problem"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "open out",
      "ja": "広がる・展開する",
      "image": "話や景色、状況が広がる。",
      "pattern": "open out",
      "examples": [
        {
          "en": "The discussion opened out into a larger issue.",
          "ja": "その議論はより大きな問題へと広がりました。",
          "focus": "opened out"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "open onto",
      "ja": "〜に面している・〜へ開く",
      "image": "扉や部屋がある場所へつながる。",
      "pattern": "open onto",
      "examples": [
        {
          "en": "The meeting room opens onto the main office area.",
          "ja": "その会議室はメインオフィスエリアに面しています。",
          "focus": "opens onto",
          "object": "the main office area"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "open into",
      "ja": "〜へ開く・〜につながる",
      "image": "扉や入口が別の場所へつながる。",
      "pattern": "open into",
      "examples": [
        {
          "en": "This door opens into the storage room.",
          "ja": "このドアは倉庫につながっています。",
          "focus": "opens into",
          "object": "the storage room"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "open for",
      "ja": "営業・受付を開始する",
      "image": "利用や受付のために開く。",
      "pattern": "open for",
      "examples": [
        {
          "en": "Registration opens for new users next week.",
          "ja": "新規ユーザー向けの登録受付は来週始まります。",
          "focus": "opens for",
          "object": "new users"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "open with",
      "ja": "〜で始める",
      "image": "会議や発表を特定の内容で始める。",
      "pattern": "open with",
      "examples": [
        {
          "en": "The presenter opened with a quick summary.",
          "ja": "発表者は短い要約から始めました。",
          "focus": "opened with",
          "object": "a quick summary"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "open back up",
      "ja": "再開する・再び開く",
      "image": "一度閉じたものを再び開く。",
      "pattern": "open back up",
      "examples": [
        {
          "en": "We opened the registration back up for one more week.",
          "ja": "私たちは登録受付をもう1週間再開しました。",
          "focus": "opened back up",
          "object": "the registration"
        }
      ],
      "dailyExamples": []
    }
  ]
},
  {
  "id": "close",
  "rank": 38,
  "word": "CLOSE",
  "ipa": "/kloʊz/",
  "kana": "クローズ",
  "syllable": "close",
  "transitivity": "他動詞・自動詞",
  "importance": "★★★★☆ 重要",
  "core": "開いているもの・続いている流れを、終わった状態にする",
  "coreDetail": "CLOSEは、ドアやファイルを閉じるだけでなく、会議・案件・取引・問題を終わらせる感覚です。仕事では close a deal, close the issue, close the meeting が重要です。",
  "coreVisual": {
    "from": [
      "📂 開いた状態",
      "💬 会議",
      "🤝 取引",
      "✅ 案件",
      "⏱️ 締切"
    ],
    "to": "完了・終了・締まった状態",
    "label": "開いた状態 → 終わった状態"
  },
  "meanings": [
    {
      "id": "close-file",
      "title": "1 ファイル・画面を閉じる",
      "pattern": "close + 名詞",
      "transitivity": "他動詞",
      "structure": "S + V + O",
      "image": "開いているものを閉じる。",
      "point": "基本は close だけを赤くします。",
      "examples": [
        {
          "en": "Please close the file after checking it.",
          "ja": "確認後にファイルを閉じてください。",
          "focus": "close",
          "object": "the file"
        },
        {
          "en": "I closed the document by mistake.",
          "ja": "私は誤って資料を閉じました。",
          "focus": "closed",
          "object": "the document"
        },
        {
          "en": "Close the browser before the update.",
          "ja": "更新前にブラウザを閉じてください。",
          "focus": "Close",
          "object": "the browser"
        }
      ]
    },
    {
      "id": "close-meeting",
      "title": "2 会議・セッションを終える",
      "pattern": "close + meeting / session",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O",
      "image": "会議や話し合いを締める。",
      "point": "会議の締めで自然に使えます。",
      "examples": [
        {
          "en": "Let us close the meeting here.",
          "ja": "ここで会議を終えましょう。",
          "focus": "close",
          "object": "the meeting"
        },
        {
          "en": "The chair closed the session at five.",
          "ja": "議長は5時にセッションを終了しました。",
          "focus": "closed",
          "object": "the session"
        },
        {
          "en": "I will close this discussion with one point.",
          "ja": "最後に1点述べてこの議論を締めます。",
          "focus": "close",
          "object": "this discussion"
        }
      ]
    },
    {
      "id": "close-deal",
      "title": "3 取引・商談を成立させる",
      "pattern": "close + deal / sale",
      "transitivity": "他動詞",
      "structure": "S + V + O",
      "image": "商談や販売を成約に持っていく。",
      "point": "営業では非常に重要な使い方です。",
      "examples": [
        {
          "en": "We closed the deal yesterday.",
          "ja": "私たちは昨日その取引を成約しました。",
          "focus": "closed",
          "object": "the deal"
        },
        {
          "en": "She closed three sales this month.",
          "ja": "彼女は今月3件の販売を成約しました。",
          "focus": "closed",
          "object": "three sales"
        },
        {
          "en": "Can we close this order by Friday?",
          "ja": "私たちは金曜日までにこの注文をまとめられますか？",
          "focus": "close",
          "object": "this order"
        }
      ]
    },
    {
      "id": "close-issue",
      "title": "4 案件・問題を完了する",
      "pattern": "close + issue / case / task",
      "transitivity": "他動詞",
      "structure": "S + V + O",
      "image": "未完了の項目を終わらせる。",
      "point": "close the issue は社内管理や顧客対応で自然です。",
      "examples": [
        {
          "en": "We closed the issue after confirming the details.",
          "ja": "私たちは詳細確認後にその問題を完了しました。",
          "focus": "closed",
          "object": "the issue"
        },
        {
          "en": "Please close this task after you update the file.",
          "ja": "ファイル更新後にこのタスクを完了してください。",
          "focus": "close",
          "object": "this task"
        },
        {
          "en": "The support team closed the case this morning.",
          "ja": "サポートチームは今朝そのケースを完了しました。",
          "focus": "closed",
          "object": "the case"
        }
      ]
    },
    {
      "id": "close-period",
      "title": "5 期間・受付を締め切る",
      "pattern": "close + period / registration",
      "transitivity": "他動詞・自動詞",
      "structure": "S + V + O",
      "image": "受付や期間を終える。",
      "point": "registration closes のように自動詞でも使えます。",
      "examples": [
        {
          "en": "Registration closes at five today.",
          "ja": "登録受付は本日5時に締め切られます。",
          "focus": "closes"
        },
        {
          "en": "We closed the application period last Friday.",
          "ja": "私たちは先週金曜に申込期間を締め切りました。",
          "focus": "closed",
          "object": "the application period"
        },
        {
          "en": "The survey closes tomorrow.",
          "ja": "そのアンケートは明日締め切られます。",
          "focus": "closes"
        }
      ]
    },
    {
      "id": "close-gap",
      "title": "6 差・ギャップを縮める",
      "pattern": "close + gap",
      "transitivity": "他動詞",
      "structure": "S + V + O",
      "image": "差を小さくする。",
      "point": "close the gap は改善や競争の文脈で使えます。",
      "examples": [
        {
          "en": "We need to close the gap between plan and result.",
          "ja": "私たちは計画と実績の差を縮める必要があります。",
          "focus": "close",
          "object": "the gap"
        },
        {
          "en": "This proposal closes the price gap.",
          "ja": "この提案は価格差を縮めます。",
          "focus": "closes",
          "object": "the price gap"
        },
        {
          "en": "The new process closed the gap in response time.",
          "ja": "新しい手順で対応時間の差が縮まりました。",
          "focus": "closed",
          "object": "the gap"
        }
      ]
    },
    {
      "id": "close-store",
      "title": "7 店・施設が閉まる",
      "pattern": "close",
      "transitivity": "自動詞",
      "structure": "S + V",
      "image": "店や施設が営業を終える。",
      "point": "自動詞なので目的語なしで使えます。",
      "examples": [
        {
          "en": "The office closes at six.",
          "ja": "オフィスは6時に閉まります。",
          "focus": "closes"
        },
        {
          "en": "The warehouse closed early today.",
          "ja": "倉庫は今日早く閉まりました。",
          "focus": "closed"
        },
        {
          "en": "The shop closes every Wednesday.",
          "ja": "その店は毎週水曜に休みます。",
          "focus": "closes"
        }
      ]
    }
  ],
  "collocations": [],
  "phrasalVerbs": [
    {
      "phrase": "close down",
      "ja": "閉鎖する・停止する",
      "image": "事業やシステムを完全に止める。",
      "pattern": "close down",
      "examples": [
        {
          "en": "The company closed down the old system.",
          "ja": "会社は古いシステムを停止しました。",
          "focus": "closed down",
          "object": "the old system"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "close out",
      "ja": "完了処理する・締める",
      "image": "案件や会計を最後まで処理する。",
      "pattern": "close out",
      "examples": [
        {
          "en": "We need to close out this project by Friday.",
          "ja": "私たちは金曜日までにこの案件を完了処理する必要があります。",
          "focus": "close out",
          "object": "this project"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "close off",
      "ja": "封鎖する・締め切る",
      "image": "場所や選択肢を使えない状態にする。",
      "pattern": "close off",
      "examples": [
        {
          "en": "They closed off the area during the installation.",
          "ja": "設置作業中、そのエリアは封鎖されました。",
          "focus": "closed off",
          "object": "the area"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "close up",
      "ja": "閉店する・隙間を閉じる",
      "image": "店やスペースを閉じる。",
      "pattern": "close up",
      "examples": [
        {
          "en": "Please close up the office after the meeting.",
          "ja": "会議後にオフィスを閉めてください。",
          "focus": "close up",
          "object": "the office"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "close in on",
      "ja": "〜に迫る",
      "image": "目標や期限に近づく。",
      "pattern": "close in on",
      "examples": [
        {
          "en": "We are closing in on the final deadline.",
          "ja": "私たちは最終期限に近づいています。",
          "focus": "closing in on",
          "object": "the final deadline"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "close with",
      "ja": "〜で締める",
      "image": "発表や会議を特定の内容で終える。",
      "pattern": "close with",
      "examples": [
        {
          "en": "I will close with a quick summary.",
          "ja": "最後に短い要約で締めます。",
          "focus": "close with",
          "object": "a quick summary"
        }
      ],
      "dailyExamples": []
    }
  ]
},
  {
  "id": "let",
  "rank": 39,
  "word": "LET",
  "ipa": "/let/",
  "kana": "レット",
  "syllable": "let",
  "transitivity": "他動詞",
  "importance": "★★★★★ 超重要",
  "core": "相手や物事を止めずに通す・許す",
  "coreDetail": "LETは『止めないで通す・許す』感覚です。let me know のような依頼、let me check のような確認、let someone do のような許可で非常によく使います。",
  "coreVisual": {
    "from": [
      "🧍 相手",
      "✅ 許可",
      "💬 連絡",
      "🔎 確認",
      "🚪 通す"
    ],
    "to": "自由に動ける状態",
    "label": "止める → 通す・許す"
  },
  "meanings": [
    {
      "id": "let-person-do",
      "title": "1 人に〜させる・許す",
      "pattern": "let + 人 + 動詞の原形",
      "transitivity": "他動詞",
      "structure": "S + V + O + C",
      "image": "相手が何かをするのを許す。",
      "point": "let の後は to なしで動詞の原形を置きます。",
      "examples": [
        {
          "en": "Please let me check the details first.",
          "ja": "先に詳細を確認させてください。",
          "focus": "let",
          "object": "me"
        },
        {
          "en": "My manager let me join the meeting.",
          "ja": "上司は私に会議参加を許可してくれました。",
          "focus": "let",
          "object": "me"
        },
        {
          "en": "Can you let him review the document?",
          "ja": "あなたは彼にその資料を確認させてくれますか？",
          "focus": "let",
          "object": "him"
        }
      ]
    },
    {
      "id": "let-me-know",
      "title": "2 let me know / 知らせる",
      "pattern": "let me know",
      "transitivity": "他動詞",
      "structure": "S + V + O + C",
      "image": "相手に情報共有をお願いする。",
      "point": "重要表現ですが、赤は let だけです。",
      "examples": [
        {
          "en": "Please let me know your available dates.",
          "ja": "都合のよい日程を教えてください。",
          "focus": "let",
          "object": "me"
        },
        {
          "en": "Let me know if you need more information.",
          "ja": "追加情報が必要なら知らせてください。",
          "focus": "Let",
          "object": "me"
        },
        {
          "en": "Could you let us know the delivery schedule?",
          "ja": "納品スケジュールを私たちに教えていただけますか？",
          "focus": "let",
          "object": "us"
        }
      ]
    },
    {
      "id": "let-me-check",
      "title": "3 let me check / 確認させてください",
      "pattern": "let me check",
      "transitivity": "他動詞",
      "structure": "S + V + O + C",
      "image": "自分が確認する時間をもらう。",
      "point": "営業メールや電話でとても自然です。",
      "examples": [
        {
          "en": "Let me check the stock and get back to you.",
          "ja": "在庫を確認して折り返します。",
          "focus": "Let",
          "object": "me"
        },
        {
          "en": "Please let me check with our team.",
          "ja": "社内で確認させてください。",
          "focus": "let",
          "object": "me"
        },
        {
          "en": "Let me confirm the price before I reply.",
          "ja": "返信前に価格を確認させてください。",
          "focus": "Let",
          "object": "me"
        }
      ]
    },
    {
      "id": "let-customer-know",
      "title": "4 顧客・相手に知らせる",
      "pattern": "let + 人 + know",
      "transitivity": "他動詞",
      "structure": "S + V + O + C",
      "image": "相手へ情報を共有する。",
      "point": "let the client know も赤は let だけです。",
      "examples": [
        {
          "en": "We should let the client know about the delay.",
          "ja": "私たちは遅延について顧客に知らせるべきです。",
          "focus": "let",
          "object": "the client"
        },
        {
          "en": "I will let my manager know after the call.",
          "ja": "電話後に上司へ知らせます。",
          "focus": "let",
          "object": "my manager"
        },
        {
          "en": "Please let the team know the latest status.",
          "ja": "チームに最新状況を共有してください。",
          "focus": "let",
          "object": "the team"
        }
      ]
    },
    {
      "id": "let-it-go",
      "title": "5 そのままにする・流す",
      "pattern": "let + 目的語 + go",
      "transitivity": "他動詞",
      "structure": "S + V + O + C",
      "image": "何かを追い続けず手放す。",
      "point": "この基本枠では赤は let だけです。句動詞側では let go of を扱います。",
      "examples": [
        {
          "en": "We should let this minor issue go for now.",
          "ja": "この小さな問題はいったん流した方がよいです。",
          "focus": "let",
          "object": "this minor issue"
        },
        {
          "en": "He decided to let the comment go.",
          "ja": "彼はそのコメントを受け流すことにしました。",
          "focus": "let",
          "object": "the comment"
        },
        {
          "en": "Let's let it go and move on.",
          "ja": "それは流して次に進みましょう。",
          "focus": "let",
          "object": "it"
        }
      ]
    },
    {
      "id": "let-someone-use",
      "title": "6 使わせる・入らせる",
      "pattern": "let + 人 + use / enter",
      "transitivity": "他動詞",
      "structure": "S + V + O + C",
      "image": "相手に使用や入場を許可する。",
      "point": "許可の let として自然です。",
      "examples": [
        {
          "en": "The admin let us use the meeting room.",
          "ja": "管理者は私たちに会議室の使用を許可しました。",
          "focus": "let",
          "object": "us"
        },
        {
          "en": "They let visitors enter after registration.",
          "ja": "登録後に来訪者の入場を許可しています。",
          "focus": "let",
          "object": "visitors"
        },
        {
          "en": "Can you let me use this sample for the demo?",
          "ja": "デモ用にこのサンプルを使わせてもらえますか？",
          "focus": "let",
          "object": "me"
        }
      ]
    }
  ],
  "collocations": [],
  "phrasalVerbs": [
    {
      "phrase": "let in",
      "ja": "中に入れる",
      "image": "人・光・空気などを中へ通す。",
      "pattern": "let in",
      "examples": [
        {
          "en": "Please let the visitor in after checking his name.",
          "ja": "名前を確認してから来訪者を中に入れてください。",
          "focus": "let in",
          "object": "the visitor"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let out",
      "ja": "外へ出す・漏らす",
      "image": "人や情報を外に出す。",
      "pattern": "let out",
      "examples": [
        {
          "en": "Do not let this information out before the announcement.",
          "ja": "発表前にこの情報を外へ漏らさないでください。",
          "focus": "let out",
          "object": "this information"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let down",
      "ja": "がっかりさせる",
      "image": "期待に応えられず相手を失望させる。",
      "pattern": "let down",
      "examples": [
        {
          "en": "We cannot let the client down on this project.",
          "ja": "この案件で顧客をがっかりさせるわけにはいきません。",
          "focus": "let down",
          "object": "the client"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let through",
      "ja": "通す・通過させる",
      "image": "人や情報を通過させる。",
      "pattern": "let through",
      "examples": [
        {
          "en": "Security let the delivery staff through the gate.",
          "ja": "警備員は配送スタッフをゲートに通しました。",
          "focus": "let through",
          "object": "the delivery staff"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let go of",
      "ja": "手放す・やめる",
      "image": "考えや物を手放す。",
      "pattern": "let go of",
      "examples": [
        {
          "en": "We need to let go of the old process.",
          "ja": "私たちは古い手順を手放す必要があります。",
          "focus": "let go of",
          "object": "the old process"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let on",
      "ja": "口外する・ほのめかす",
      "image": "秘密や情報を外へ出す。",
      "pattern": "let on",
      "examples": [
        {
          "en": "Please do not let on that the price will change.",
          "ja": "価格が変わることはまだ口外しないでください。",
          "focus": "let on"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let off",
      "ja": "許す・解放する",
      "image": "罰や負担から解放する。",
      "pattern": "let off",
      "examples": [
        {
          "en": "The manager let him off with a warning.",
          "ja": "マネージャーは彼を注意だけで許しました。",
          "focus": "let off",
          "object": "him"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let up",
      "ja": "弱まる・緩む",
      "image": "雨・圧力・忙しさなどが弱まる。",
      "pattern": "let up",
      "examples": [
        {
          "en": "The workload has not let up this week.",
          "ja": "今週は業務量がまだ落ち着いていません。",
          "focus": "let up"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let into",
      "ja": "〜の中に入れる・参加させる",
      "image": "人を場所や活動に入れる。",
      "pattern": "let into",
      "examples": [
        {
          "en": "We let the new partner into the project after approval.",
          "ja": "承認後、新しいパートナーを案件に参加させました。",
          "focus": "let into",
          "object": "the new partner"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let in on",
      "ja": "秘密・情報を共有する",
      "image": "人に内部情報や計画を教える。",
      "pattern": "let in on",
      "examples": [
        {
          "en": "She let me in on the plan before the meeting.",
          "ja": "彼女は会議前にその計画を私に教えてくれました。",
          "focus": "let in on",
          "object": "me"
        }
      ],
      "dailyExamples": []
    }
  ]
},
    {
    "id": "build",
    "rank": 40,
    "word": "BUILD",
    "ipa": "",
    "kana": "ビルド",
    "syllable": "build",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 基本",
    "core": "少しずつ積み上げて作る・築く",
    "coreDetail": "BUILDは、建物だけでなく、信頼・関係・体制・経験を時間をかけて積み上げる動詞です。仕事では build trust, build a system, build a relationship が特に重要です。",
    "coreVisual": {
      "from": [
        "🧱 部品",
        "📋 仕組み",
        "🤝 信頼",
        "👥 関係"
      ],
      "to": "積み上げて形にする",
      "label": "材料 → 形・成果へ"
    },
    "meanings": [
      {
        "id": "build-system",
        "title": "1 仕組み・体制を作る",
        "pattern": "build + system / process / team",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "部品を積み上げて、仕事が回る形にする。",
        "point": "build は「使える形まで作り上げる」感覚です。",
        "examples": [
          {
            "en": "We need to build a better sales process.",
            "ja": "私たちはより良い営業プロセスを作る必要があります。",
            "focus": "build",
            "object": "a better sales process"
          },
          {
            "en": "The team built a new ordering system.",
            "ja": "チームは新しい発注システムを構築しました。",
            "focus": "built",
            "object": "a new ordering system"
          },
          {
            "en": "She is building a checklist for new staff.",
            "ja": "彼女は新人向けのチェックリストを作っています。",
            "focus": "building",
            "object": "a checklist"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "build-trust",
        "title": "2 信頼・関係を築く",
        "pattern": "build + trust / relationship",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "信頼や関係を時間をかけて積み上げる。",
        "point": "営業・顧客対応で非常に使いやすい基本表現です。",
        "examples": [
          {
            "en": "Good support builds trust with clients.",
            "ja": "良いサポートは顧客との信頼を築きます。",
            "focus": "builds",
            "object": "trust"
          },
          {
            "en": "We should build a stronger relationship with this client.",
            "ja": "私たちはこの顧客とより強い関係を築くべきです。",
            "focus": "build",
            "object": "a stronger relationship"
          },
          {
            "en": "Regular updates helped us build trust.",
            "ja": "定期的な報告が信頼構築に役立ちました。",
            "focus": "build",
            "object": "trust"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "build-plan",
        "title": "3 計画・提案を組み立てる",
        "pattern": "build + plan / proposal",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "材料を整理して、提案や計画として形にする。",
        "point": "make よりも「段階的に組み立てる」印象があります。",
        "examples": [
          {
            "en": "We built the proposal around the client's budget.",
            "ja": "私たちは顧客の予算を軸に提案を組み立てました。",
            "focus": "built",
            "object": "the proposal"
          },
          {
            "en": "Please build a plan for the next meeting.",
            "ja": "次回会議に向けた計画を組み立ててください。",
            "focus": "build",
            "object": "a plan"
          },
          {
            "en": "He builds clear action plans after each call.",
            "ja": "彼は各電話の後に明確な行動計画を作ります。",
            "focus": "builds",
            "object": "clear action plans"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "build-experience",
        "title": "4 経験・実績を積む",
        "pattern": "build + experience / record",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "経験や実績を少しずつ増やす。",
        "point": "人や会社の成長を表す時に自然です。",
        "examples": [
          {
            "en": "We need to build more experience with RGB projects.",
            "ja": "私たちはRGB案件の経験をもっと積む必要があります。",
            "focus": "build",
            "object": "more experience"
          },
          {
            "en": "The new team built a strong track record.",
            "ja": "新しいチームはしっかりした実績を積みました。",
            "focus": "built",
            "object": "a strong track record"
          },
          {
            "en": "This project will help us build confidence.",
            "ja": "この案件は私たちが自信をつける助けになります。",
            "focus": "build",
            "object": "confidence"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "build-result",
        "title": "5 数値・成果を積み上げる",
        "pattern": "build + results / sales",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "小さな成果を重ねて大きな結果にする。",
        "point": "営業成績や実績の説明に使えます。",
        "examples": [
          {
            "en": "We built sales little by little in this area.",
            "ja": "私たちはこのエリアで少しずつ売上を積み上げました。",
            "focus": "built",
            "object": "sales"
          },
          {
            "en": "The campaign is building momentum.",
            "ja": "そのキャンペーンは勢いを増しています。",
            "focus": "building",
            "object": "momentum"
          },
          {
            "en": "Small improvements build long-term results.",
            "ja": "小さな改善が長期的な成果につながります。",
            "focus": "build",
            "object": "long-term results"
          }
        ],
        "dailyExamples": []
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "build up",
        "ja": "積み上げる・高める",
        "image": "量・力・信頼などを少しずつ増やす。",
        "pattern": "build up",
        "examples": [
          {
            "en": "We need to build up our project experience.",
            "ja": "私たちは案件経験を積み上げる必要があります。",
            "focus": "build up",
            "object": "our project experience"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "build on",
        "ja": "〜を土台にする",
        "image": "既存の実績・案を活かして次に進む。",
        "pattern": "build on",
        "examples": [
          {
            "en": "Let's build on the client's feedback.",
            "ja": "顧客の意見をもとにさらに改善しましょう。",
            "focus": "build on",
            "object": "the client's feedback"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "build upon",
        "ja": "〜を土台に発展させる",
        "image": "build on より少し硬めで、資料・提案向き。",
        "pattern": "build upon",
        "examples": [
          {
            "en": "The proposal builds upon last year's results.",
            "ja": "その提案は昨年の結果を土台に発展させています。",
            "focus": "builds upon",
            "object": "last year's results"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "build into",
        "ja": "〜に組み込む",
        "image": "機能や確認項目を仕組みに入れる。",
        "pattern": "build into",
        "examples": [
          {
            "en": "Please build this check into the workflow.",
            "ja": "この確認を業務フローに組み込んでください。",
            "focus": "build into",
            "object": "this check"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "build in",
        "ja": "組み込む",
        "image": "機能や余裕を最初から入れておく。",
        "pattern": "build in",
        "examples": [
          {
            "en": "We should build in extra time for approval.",
            "ja": "承認のための余裕時間を組み込むべきです。",
            "focus": "build in",
            "object": "extra time"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "build around",
        "ja": "〜を中心に作る",
        "image": "提案や計画の中心に置く。",
        "pattern": "build around",
        "examples": [
          {
            "en": "We built the plan around the delivery date.",
            "ja": "私たちは納期を中心に計画を組み立てました。",
            "focus": "built around",
            "object": "the delivery date"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "build out",
        "ja": "拡張する",
        "image": "機能・チーム・体制を広げる。",
        "pattern": "build out",
        "examples": [
          {
            "en": "The team will build out the support system next month.",
            "ja": "チームは来月、サポート体制を拡張します。",
            "focus": "build out",
            "object": "the support system"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "build from",
        "ja": "〜から作る",
        "image": "小さな材料や既存データから作る。",
        "pattern": "build from",
        "examples": [
          {
            "en": "We built the estimate from the latest drawing.",
            "ja": "私たちは最新図面をもとに見積を作りました。",
            "focus": "built from",
            "object": "the latest drawing"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "build toward",
        "ja": "〜に向けて積み上げる",
        "image": "目標達成に向けて進める。",
        "pattern": "build toward",
        "examples": [
          {
            "en": "We are building toward a stronger sales pipeline.",
            "ja": "私たちはより強い営業案件の流れに向けて積み上げています。",
            "focus": "building toward",
            "object": "a stronger sales pipeline"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "build off",
        "ja": "〜をもとに発展させる",
        "image": "会話では使われるが、やや口語的。",
        "pattern": "build off",
        "examples": [
          {
            "en": "We can build off this idea for the next proposal.",
            "ja": "次の提案ではこの案をもとに発展させられます。",
            "focus": "build off",
            "object": "this idea"
          }
        ],
        "dailyExamples": []
      }
    ]
  },
    {
    "id": "learn",
    "rank": 41,
    "word": "LEARN",
    "ipa": "",
    "kana": "ラーン",
    "syllable": "learn",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 基本",
    "core": "外から情報・経験を取り込み、自分の知識にする",
    "coreDetail": "LEARNは、勉強だけでなく、仕事の手順・顧客情報・失敗からの教訓を自分の中に取り込む動詞です。",
    "coreVisual": {
      "from": [
        "📘 知識",
        "🧪 経験",
        "📩 情報",
        "👂 フィードバック"
      ],
      "to": "自分の理解・スキル",
      "label": "外の情報 → 自分の中へ"
    },
    "meanings": [
      {
        "id": "learn-skill",
        "title": "1 知識・スキルを学ぶ",
        "pattern": "learn + skill / English / process",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "新しい知識ややり方を自分の中に入れる。",
        "point": "learn は「勉強する」だけでなく、仕事の手順や製品知識を身につける時にも使います。",
        "examples": [
          {
            "en": "We need to learn the new ordering process.",
            "ja": "私たちは新しい発注手順を覚える必要があります。",
            "focus": "learn",
            "object": "the new ordering process"
          },
          {
            "en": "She learned how to use the system quickly.",
            "ja": "彼女はそのシステムの使い方をすぐに覚えました。",
            "focus": "learned",
            "object": "how to use the system"
          },
          {
            "en": "I am learning more about LED control.",
            "ja": "私はLED制御についてさらに学んでいます。",
            "focus": "learning",
            "object": "more about LED control"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "learn-fact",
        "title": "2 情報・事実を知る",
        "pattern": "learn + that / details",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "調べたり聞いたりして、新しい事実を知る。",
        "point": "ビジネスでは「〜だと分かった」という意味でもよく使います。",
        "examples": [
          {
            "en": "We learned that the delivery date changed.",
            "ja": "私たちは納期が変更になったと分かりました。",
            "focus": "learned",
            "object": "that the delivery date changed"
          },
          {
            "en": "He learned the details from the customer.",
            "ja": "彼は顧客から詳細を知りました。",
            "focus": "learned",
            "object": "the details"
          },
          {
            "en": "Please let me know if you learn anything new.",
            "ja": "新しいことが分かったら教えてください。",
            "focus": "learn",
            "object": "anything new"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "learn-lesson",
        "title": "3 経験から教訓を得る",
        "pattern": "learn + lesson",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "経験を通じて、次に活かせることを得る。",
        "point": "失敗や改善点を前向きに説明する時に自然です。",
        "examples": [
          {
            "en": "We learned an important lesson from this issue.",
            "ja": "私たちはこの問題から重要な教訓を得ました。",
            "focus": "learned",
            "object": "an important lesson"
          },
          {
            "en": "The team learned a lot during the project.",
            "ja": "チームはその案件を通じて多くを学びました。",
            "focus": "learned",
            "object": "a lot"
          },
          {
            "en": "I learned not to skip the final check.",
            "ja": "私は最終確認を省いてはいけないと学びました。",
            "focus": "learned",
            "object": "not to skip the final check"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "learn-how",
        "title": "4 やり方を覚える",
        "pattern": "learn how to + 動詞",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "手順や方法を身につける。",
        "point": "仕事の引き継ぎや新人教育でよく使います。",
        "examples": [
          {
            "en": "New staff learn how to prepare estimates.",
            "ja": "新人は見積の作り方を覚えます。",
            "focus": "learn",
            "object": "how to prepare estimates"
          },
          {
            "en": "We learned how to check the stock list.",
            "ja": "私たちは在庫表の確認方法を覚えました。",
            "focus": "learned",
            "object": "how to check the stock list"
          },
          {
            "en": "He is learning how to explain the product clearly.",
            "ja": "彼は製品を分かりやすく説明する方法を学んでいます。",
            "focus": "learning",
            "object": "how to explain the product clearly"
          }
        ],
        "dailyExamples": []
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "learn about",
        "ja": "〜について学ぶ・知る",
        "image": "テーマや内容について情報を得る。",
        "pattern": "learn about",
        "examples": [
          {
            "en": "We learned about the client's new project.",
            "ja": "私たちは顧客の新しい案件について知りました。",
            "focus": "learned about",
            "object": "the client's new project"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "learn from",
        "ja": "〜から学ぶ",
        "image": "経験・人・失敗から教訓を得る。",
        "pattern": "learn from",
        "examples": [
          {
            "en": "We should learn from this mistake.",
            "ja": "私たちはこのミスから学ぶべきです。",
            "focus": "learn from",
            "object": "this mistake"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "learn of",
        "ja": "〜を知る",
        "image": "やや硬めで、情報を知る感覚。",
        "pattern": "learn of",
        "examples": [
          {
            "en": "We learned of the schedule change this morning.",
            "ja": "私たちは今朝、スケジュール変更を知りました。",
            "focus": "learned of",
            "object": "the schedule change"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "learn by",
        "ja": "〜によって学ぶ",
        "image": "方法や手段を示す。",
        "pattern": "learn by",
        "examples": [
          {
            "en": "You can learn by checking real customer emails.",
            "ja": "実際の顧客メールを確認することで学べます。",
            "focus": "learn by",
            "object": "checking real customer emails"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "learn through",
        "ja": "〜を通して学ぶ",
        "image": "経験や活動を通じて身につける。",
        "pattern": "learn through",
        "examples": [
          {
            "en": "She learned through hands-on project work.",
            "ja": "彼女は実際の案件作業を通じて学びました。",
            "focus": "learned through",
            "object": "hands-on project work"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "learn to",
        "ja": "〜するようになる",
        "image": "練習や経験でできるようになる。",
        "pattern": "learn to",
        "examples": [
          {
            "en": "We learned to explain the issue more clearly.",
            "ja": "私たちはその問題をより分かりやすく説明できるようになりました。",
            "focus": "learned to",
            "object": "explain the issue"
          }
        ],
        "dailyExamples": []
      }
    ]
  },
    {
    "id": "meet",
    "rank": 42,
    "word": "MEET",
    "ipa": "",
    "kana": "ミート",
    "syllable": "meet",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 基本",
    "core": "人・条件・期待と合う、到達する",
    "coreDetail": "MEETは、人と会うだけでなく、締切・条件・期待・需要に届く感覚があります。営業・会議・納期管理で非常に使いやすい動詞です。",
    "coreVisual": {
      "from": [
        "👤 人",
        "📅 締切",
        "✅ 条件",
        "🎯 期待"
      ],
      "to": "相手・基準と合う",
      "label": "自分の行動 → 相手・基準に届く"
    },
    "meanings": [
      {
        "id": "meet-person",
        "title": "1 人に会う",
        "pattern": "meet + person / client",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "人と会う・初めて会う。",
        "point": "営業・会議・訪問で基本になる使い方です。",
        "examples": [
          {
            "en": "We will meet the client at 3 p.m.",
            "ja": "私たちは15時に顧客と会います。",
            "focus": "meet",
            "object": "the client"
          },
          {
            "en": "I met the new manager yesterday.",
            "ja": "私は昨日、新しいマネージャーに会いました。",
            "focus": "met",
            "object": "the new manager"
          },
          {
            "en": "She is meeting the design team tomorrow.",
            "ja": "彼女は明日デザインチームと会います。",
            "focus": "meeting",
            "object": "the design team"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "meet-deadline",
        "title": "2 締切・条件を満たす",
        "pattern": "meet + deadline / requirements",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "求められている基準に届く。",
        "point": "meet a deadline は「締切に間に合う」、meet requirements は「条件を満たす」です。",
        "examples": [
          {
            "en": "We need to meet the deadline for this order.",
            "ja": "私たちはこの注文の締切に間に合わせる必要があります。",
            "focus": "meet",
            "object": "the deadline"
          },
          {
            "en": "This product meets the safety requirements.",
            "ja": "この製品は安全条件を満たしています。",
            "focus": "meets",
            "object": "the safety requirements"
          },
          {
            "en": "The current design does not meet the client's request.",
            "ja": "現在のデザインは顧客の要望を満たしていません。",
            "focus": "meet",
            "object": "the client's request"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "meet-expectations",
        "title": "3 期待・需要に応える",
        "pattern": "meet + expectations / demand",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "相手が求めるレベルに応える。",
        "point": "提案・製品・対応品質の説明に便利です。",
        "examples": [
          {
            "en": "The proposal met the client's expectations.",
            "ja": "その提案は顧客の期待に応えました。",
            "focus": "met",
            "object": "the client's expectations"
          },
          {
            "en": "We need more stock to meet demand.",
            "ja": "需要に応えるため、もっと在庫が必要です。",
            "focus": "meet",
            "object": "demand"
          },
          {
            "en": "Fast replies help us meet customer needs.",
            "ja": "早い返信は顧客ニーズに応える助けになります。",
            "focus": "meet",
            "object": "customer needs"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "meet-halfway",
        "title": "4 歩み寄る",
        "pattern": "meet halfway",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "お互いに譲り合って折り合う。",
        "point": "交渉や調整で使いやすい表現です。",
        "examples": [
          {
            "en": "We may need to meet the client halfway on the price.",
            "ja": "価格については顧客と歩み寄る必要があるかもしれません。",
            "focus": "meet",
            "object": "the client halfway"
          },
          {
            "en": "Both teams met halfway on the schedule.",
            "ja": "両チームはスケジュールについて歩み寄りました。",
            "focus": "met",
            "object": "halfway"
          },
          {
            "en": "Can we meet halfway on the delivery date?",
            "ja": "納期について中間案で調整できますか？",
            "focus": "meet",
            "object": "halfway"
          }
        ],
        "dailyExamples": []
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "meet up",
        "ja": "会う・集まる",
        "image": "予定を合わせて集まる。",
        "pattern": "meet up",
        "examples": [
          {
            "en": "Let's meet up before the client visit.",
            "ja": "顧客訪問の前に集まりましょう。",
            "focus": "meet up"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "meet with",
        "ja": "〜と会う・経験する",
        "image": "人と会う、または反応・問題に直面する。",
        "pattern": "meet with",
        "examples": [
          {
            "en": "We will meet with the supplier next week.",
            "ja": "私たちは来週、仕入先と会います。",
            "focus": "meet with",
            "object": "the supplier"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "meet up with",
        "ja": "〜と会う",
        "image": "meet up より相手を明示する形。",
        "pattern": "meet up with",
        "examples": [
          {
            "en": "I will meet up with the sales team after lunch.",
            "ja": "昼食後に営業チームと合流します。",
            "focus": "meet up with",
            "object": "the sales team"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "meet for",
        "ja": "〜のために会う",
        "image": "目的を示して会う。",
        "pattern": "meet for",
        "examples": [
          {
            "en": "We met for a quick project review.",
            "ja": "私たちは簡単な案件レビューのために会いました。",
            "focus": "met for",
            "object": "a quick project review"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "meet at",
        "ja": "〜で会う",
        "image": "場所や時間を指定して会う。",
        "pattern": "meet at",
        "examples": [
          {
            "en": "Please meet at the entrance at ten.",
            "ja": "10時に入口で集合してください。",
            "focus": "meet at",
            "object": "the entrance"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "meet over",
        "ja": "〜をしながら会う",
        "image": "食事やコーヒーなどをしながら話す。",
        "pattern": "meet over",
        "examples": [
          {
            "en": "We can meet over coffee and review the proposal.",
            "ja": "コーヒーを飲みながら会って提案を確認できます。",
            "focus": "meet over",
            "object": "coffee"
          }
        ],
        "dailyExamples": []
      }
    ]
  },
  {
    "id": "send",
    "rank": 43,
    "word": "SEND",
    "ipa": "",
    "kana": "センド",
    "syllable": "send",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "自分側から相手・宛先へ情報や物を送り出す",
    "coreDetail": "SENDは、メール・資料・商品・人などを相手や目的地の方向へ送り出す動詞です。仕事では送付、共有、承認依頼、案内メールで特に使います。",
    "coreVisual": {
      "from": ["👤 自分・自社", "📧 メール", "📄 資料", "📦 サンプル"],
      "to": "相手・宛先",
      "label": "自分側 → 相手へ"
    },
    "meanings": [
      {
        "id": "send-file",
        "title": "1 メール・資料などを送る",
        "pattern": "send + 送るもの",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "メールや資料を相手へ向けて送る。",
        "point": "send は仕事の送付連絡で最も基本になる動詞です。",
        "examples": [
          {"en": "I will send the file today.", "ja": "私は今日ファイルを送ります。", "focus": "send", "object": "the file"},
          {"en": "Please send the quotation by noon.", "ja": "正午までに見積書を送ってください。", "focus": "send", "object": "the quotation"},
          {"en": "She sent the updated schedule this morning.", "ja": "彼女は今朝、更新後のスケジュールを送りました。", "focus": "sent", "object": "the updated schedule"}
        ],
        "dailyExamples": []
      },
      {
        "id": "send-to",
        "title": "2 AをBへ送る",
        "pattern": "send A to B",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "送るものと送付先をはっきり示す。",
        "point": "to で宛先を示します。赤文字は send / sent のみです。",
        "examples": [
          {"en": "We sent the sample to the customer.", "ja": "私たちは顧客にサンプルを送りました。", "focus": "sent", "object": "the sample"},
          {"en": "Please send the invoice to the accounting team.", "ja": "請求書を経理チームに送ってください。", "focus": "send", "object": "the invoice"},
          {"en": "I sent the revised data to the supplier.", "ja": "私は修正済みのデータを仕入先に送りました。", "focus": "sent", "object": "the revised data"}
        ],
        "dailyExamples": []
      },
      {
        "id": "send-person",
        "title": "3 人を場所へ行かせる",
        "pattern": "send + 人 + to + 場所",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "人を必要な場所へ向かわせる。",
        "point": "技術者派遣や担当者を送る時にも send を使います。",
        "examples": [
          {"en": "We sent a technician to the site.", "ja": "私たちは技術者を現場に送りました。", "focus": "sent", "object": "a technician"},
          {"en": "The manager sent me to the client meeting.", "ja": "上司は私を顧客との会議に行かせました。", "focus": "sent", "object": "me"},
          {"en": "Can we send someone to check the installation?", "ja": "設置状況を確認するために誰かを送れますか？", "focus": "send", "object": "someone"}
        ],
        "dailyExamples": []
      },
      {
        "id": "send-for-approval",
        "title": "4 確認・承認のために送る",
        "pattern": "send + 名詞 + for review / approval",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "確認してもらう目的で資料を送る。",
        "point": "send for review / send for approval は社内確認でよく使います。",
        "examples": [
          {"en": "We sent the drawing for approval.", "ja": "私たちは承認のために図面を送りました。", "focus": "sent", "object": "the drawing"},
          {"en": "Please send the document for review.", "ja": "確認のために資料を送ってください。", "focus": "send", "object": "the document"},
          {"en": "I will send the proposal for internal confirmation.", "ja": "私は社内確認のために提案書を送ります。", "focus": "send", "object": "the proposal"}
        ],
        "dailyExamples": []
      },
      {
        "id": "send-message",
        "title": "5 印象・メッセージを伝える",
        "pattern": "send + message / signal",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "行動や対応が相手に印象を送る。",
        "point": "実際のメールだけでなく、印象を与える意味でも使えます。",
        "examples": [
          {"en": "A quick reply sends a positive signal.", "ja": "素早い返信は良い印象を与えます。", "focus": "sends", "object": "a positive signal"},
          {"en": "This delay sends a bad message to the client.", "ja": "この遅れは顧客に悪い印象を与えます。", "focus": "sends", "object": "a bad message"},
          {"en": "The announcement sent a clear message to the team.", "ja": "その発表はチームに明確なメッセージを伝えました。", "focus": "sent", "object": "a clear message"}
        ],
        "dailyExamples": []
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase": "send out", "ja": "一斉に送る・発送する", "image": "案内や資料を複数の相手へ送り出す。", "pattern": "send out", "examples": [{"en": "We will send out the announcement this afternoon.", "ja": "私たちは今日の午後、その案内を一斉送信します。", "focus": "send out", "object": "the announcement"}], "dailyExamples": []},
      {"phrase": "send back", "ja": "送り返す・返送する", "image": "相手から来たものを戻す。", "pattern": "send back", "examples": [{"en": "Please send back the signed document by Friday.", "ja": "金曜日までに署名済み書類を返送してください。", "focus": "send back", "object": "the signed document"}], "dailyExamples": []},
      {"phrase": "send over", "ja": "送って渡す", "image": "相手の手元へ資料や情報を送る。", "pattern": "send over", "examples": [{"en": "I will send over the latest price list.", "ja": "最新の価格表を送ります。", "focus": "send over", "object": "the latest price list"}], "dailyExamples": []},
      {"phrase": "send in", "ja": "提出する・送り込む", "image": "必要な場所や窓口へ提出する。", "pattern": "send in", "examples": [{"en": "Please send in the application before the deadline.", "ja": "締切前に申請書を提出してください。", "focus": "send in", "object": "the application"}], "dailyExamples": []},
      {"phrase": "send off", "ja": "発送する・送り出す", "image": "荷物や人を出発させる。", "pattern": "send off", "examples": [{"en": "We sent off the samples after the final check.", "ja": "私たちは最終確認後にサンプルを発送しました。", "focus": "sent off", "object": "the samples"}], "dailyExamples": []},
      {"phrase": "send for", "ja": "〜を呼びにやる・取り寄せる", "image": "必要な人や物を呼ぶ・取り寄せる。", "pattern": "send for", "examples": [{"en": "We should send for a technician if the issue continues.", "ja": "問題が続くなら、技術者を呼ぶべきです。", "focus": "send for", "object": "a technician"}], "dailyExamples": []},
      {"phrase": "send away", "ja": "送り出す・追い返す", "image": "人や物を自分の場所から離す。", "pattern": "send away", "examples": [{"en": "The reception desk sent away visitors without appointments.", "ja": "受付は予約のない来訪者を帰しました。", "focus": "sent away", "object": "visitors"}], "dailyExamples": []},
      {"phrase": "send up", "ja": "上に送る・上位へ回す", "image": "上司や上位部門へ情報を上げる。", "pattern": "send up", "examples": [{"en": "Please send up the report to the manager today.", "ja": "今日中にその報告書をマネージャーへ上げてください。", "focus": "send up", "object": "the report"}], "dailyExamples": []}
    ]
  },
  {
    "id": "pay",
    "rank": 44,
    "word": "PAY",
    "ipa": "",
    "kana": "ペイ",
    "syllable": "pay",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "価値・お金・注意を相手や対象へ向ける",
    "coreDetail": "PAYは、お金を支払うだけでなく、注意を向ける、努力が報われるという意味でも使います。仕事では請求書、前払い、支払方法、注意喚起で重要です。",
    "coreVisual": {"from": ["💴 お金", "👀 注意", "⏱ 努力"], "to": "相手・対象・結果", "label": "価値を対象へ向ける"},
    "meanings": [
      {"id": "pay-money", "title": "1 お金を支払う", "pattern": "pay + 金額 / invoice", "transitivity": "他動詞", "structure": "基本", "image": "請求や代金に対してお金を出す。", "point": "pay the invoice / pay the fee は仕事でよく使います。", "examples": [{"en": "We need to pay the invoice by Friday.", "ja": "私たちは金曜日までに請求書を支払う必要があります。", "focus": "pay", "object": "the invoice"}, {"en": "The client paid the invoice this morning.", "ja": "顧客は今朝、請求書を支払いました。", "focus": "paid", "object": "the invoice"}, {"en": "Please check whether they paid the fee.", "ja": "彼らが料金を支払ったか確認してください。", "focus": "paid", "object": "the fee"}], "dailyExamples": []},
      {"id": "pay-for-method", "title": "2 代金・方法を示して支払う", "pattern": "pay for / pay by / pay in advance", "transitivity": "他動詞・自動詞", "structure": "基本", "image": "何のために、どう支払うかを表す。", "point": "pay by bank transfer / pay in advance は支払条件の確認で便利です。", "examples": [{"en": "The customer will pay by bank transfer.", "ja": "顧客は銀行振込で支払います。", "focus": "pay", "object": "by bank transfer"}, {"en": "We need to pay in advance for this order.", "ja": "私たちはこの注文について前払いする必要があります。", "focus": "pay", "object": "in advance"}, {"en": "Can the client pay after delivery?", "ja": "顧客は納品後に支払えますか？", "focus": "pay", "object": "after delivery"}], "dailyExamples": []},
      {"id": "pay-attention", "title": "3 注意を払う", "pattern": "pay attention to + 名詞", "transitivity": "他動詞", "structure": "基本", "image": "注意を対象へ向ける。", "point": "pay attention to は重要表現ですが、句動詞ではなく基本側で扱います。", "examples": [{"en": "Please pay attention to the quantity.", "ja": "数量に注意してください。", "focus": "pay", "object": "attention to the quantity"}, {"en": "We should pay attention to the installation conditions.", "ja": "私たちは設置条件に注意するべきです。", "focus": "pay", "object": "attention to the installation conditions"}, {"en": "The team paid attention to every detail.", "ja": "チームはすべての細部に注意を払いました。", "focus": "paid", "object": "attention to every detail"}], "dailyExamples": []},
      {"id": "pay-respect", "title": "4 敬意を払う", "pattern": "pay respect to + 人・考え", "transitivity": "他動詞", "structure": "基本", "image": "相手や考え方に敬意を向ける。", "point": "やや硬めですが、丁寧な説明で使えます。", "examples": [{"en": "We should pay respect to the client's culture.", "ja": "私たちは顧客の文化に敬意を払うべきです。", "focus": "pay", "object": "respect to the client's culture"}, {"en": "The company pays respect to local business customs.", "ja": "その会社は地域の商習慣に敬意を払っています。", "focus": "pays", "object": "respect to local business customs"}], "dailyExamples": []},
      {"id": "pay-result", "title": "5 努力が報われる", "pattern": "work / effort + pays", "transitivity": "自動詞", "structure": "基本", "image": "努力が価値ある結果として返ってくる。", "point": "Hard work pays. は定番表現です。pay off と重複しないよう、基本では pay / pays のみ扱います。", "examples": [{"en": "Careful preparation pays in client meetings.", "ja": "丁寧な準備は顧客との会議で報われます。", "focus": "pays", "object": "in client meetings"}, {"en": "Hard work pays when clients trust us.", "ja": "顧客が私たちを信頼してくれる時、努力は報われます。", "focus": "pays"}], "dailyExamples": []}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase": "pay off", "ja": "報われる・完済する", "image": "努力や支払いが最後に良い結果になる。", "pattern": "pay off", "examples": [{"en": "Our preparation paid off during the presentation.", "ja": "私たちの準備はプレゼン中に報われました。", "focus": "paid off"}], "dailyExamples": []},
      {"phrase": "pay back", "ja": "返済する・返す", "image": "借りたお金や恩を返す。", "pattern": "pay back", "examples": [{"en": "We need to pay back the advance payment.", "ja": "私たちは前受金を返済する必要があります。", "focus": "pay back", "object": "the advance payment"}], "dailyExamples": []},
      {"phrase": "pay for", "ja": "〜の代金を支払う", "image": "対象に対して代金を支払う。", "pattern": "pay for", "examples": [{"en": "The client will pay for the additional work.", "ja": "顧客は追加作業の代金を支払います。", "focus": "pay for", "object": "the additional work"}], "dailyExamples": []},
      {"phrase": "pay up", "ja": "支払うべきお金を払う", "image": "未払いの金額を支払う。", "pattern": "pay up", "examples": [{"en": "The client finally paid up after several reminders.", "ja": "顧客は何度かリマインドした後、ようやく支払いました。", "focus": "paid up"}], "dailyExamples": []},
      {"phrase": "pay out", "ja": "支払う・払い出す", "image": "会社や制度からお金を支払う。", "pattern": "pay out", "examples": [{"en": "The company paid out the bonus in June.", "ja": "会社は6月に賞与を支払いました。", "focus": "paid out", "object": "the bonus"}], "dailyExamples": []},
      {"phrase": "pay into", "ja": "〜に払い込む", "image": "口座や制度へお金を入れる。", "pattern": "pay into", "examples": [{"en": "We pay into the company pension plan every month.", "ja": "私たちは毎月、会社の年金制度に払い込んでいます。", "focus": "pay into", "object": "the company pension plan"}], "dailyExamples": []},
      {"phrase": "pay down", "ja": "借金を少しずつ減らす", "image": "支払いによって残高を下げる。", "pattern": "pay down", "examples": [{"en": "The company plans to pay down its debt this year.", "ja": "会社は今年、借入金を減らす計画です。", "focus": "pay down", "object": "its debt"}], "dailyExamples": []},
      {"phrase": "pay in", "ja": "入金する・払い込む", "image": "お金を口座などに入れる。", "pattern": "pay in", "examples": [{"en": "Please pay in the deposit before production starts.", "ja": "生産開始前に前金を入金してください。", "focus": "pay in", "object": "the deposit"}], "dailyExamples": []}
    ]
  },
  {
    "id": "buy",
    "rank": 45,
    "word": "BUY",
    "ipa": "",
    "kana": "バイ",
    "syllable": "buy",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "お金を出して自分側へ手に入れる",
    "coreDetail": "BUYは、部品・サンプル・サービスなどを購入して自分側に入れる動詞です。仕事では購買、仕入れ、価格交渉、まとめ買いでよく使います。",
    "coreVisual": {"from": ["💴 支払い", "🛒 購入判断"], "to": "商品・サービスを自分側へ", "label": "お金 → 商品を手に入れる"},
    "meanings": [
      {"id": "buy-product", "title": "1 商品・部品を買う", "pattern": "buy + 商品", "transitivity": "他動詞", "structure": "基本", "image": "必要なものを購入して手に入れる。", "point": "buy parts / buy samples は購買・営業でよく使います。", "examples": [{"en": "We need to buy parts for the sample.", "ja": "私たちはサンプル用の部品を買う必要があります。", "focus": "buy", "object": "parts"}, {"en": "The customer bought a replacement unit.", "ja": "顧客は交換用ユニットを購入しました。", "focus": "bought", "object": "a replacement unit"}, {"en": "Can we buy the materials locally?", "ja": "私たちはその材料を国内で購入できますか？", "focus": "buy", "object": "the materials"}], "dailyExamples": []},
      {"id": "buy-from", "title": "2 仕入先・販売元から買う", "pattern": "buy from + supplier", "transitivity": "他動詞", "structure": "基本", "image": "購入元を from で示す。", "point": "buy from は前置詞パターンとして基本側に置きます。", "examples": [{"en": "We usually buy from this supplier.", "ja": "私たちは普段この仕入先から購入しています。", "focus": "buy", "object": "from this supplier"}, {"en": "The client bought the product from another company.", "ja": "顧客はその製品を別会社から購入しました。", "focus": "bought", "object": "the product"}], "dailyExamples": []},
      {"id": "buy-for", "title": "3 目的・相手のために買う", "pattern": "buy + 名詞 + for + 目的・人", "transitivity": "他動詞", "structure": "基本", "image": "用途や相手のために購入する。", "point": "buy for は通常の前置詞パターンとして基本側で扱います。", "examples": [{"en": "We bought extra stock for the urgent order.", "ja": "私たちは急ぎの注文用に追加在庫を購入しました。", "focus": "bought", "object": "extra stock"}, {"en": "Please buy a sample for the client meeting.", "ja": "顧客との会議用にサンプルを購入してください。", "focus": "buy", "object": "a sample"}], "dailyExamples": []},
      {"id": "buy-bulk", "title": "4 まとめ買いする", "pattern": "buy in bulk", "transitivity": "他動詞", "structure": "基本", "image": "数量をまとめて買う。", "point": "buy in bulk は句動詞ではなく、購買でよく使う基本表現として扱います。", "examples": [{"en": "We can reduce the cost if we buy in bulk.", "ja": "まとめて購入すればコストを下げられます。", "focus": "buy", "object": "in bulk"}, {"en": "The client wants to buy in bulk next month.", "ja": "顧客は来月まとめ買いを希望しています。", "focus": "buy", "object": "in bulk"}], "dailyExamples": []},
      {"id": "buy-price", "title": "5 値引き・条件付きで買う", "pattern": "buy at + price / discount", "transitivity": "他動詞", "structure": "基本", "image": "価格や条件を指定して購入する。", "point": "buy at a discount は営業・購買で便利です。", "examples": [{"en": "We bought the items at a discount.", "ja": "私たちはその商品を割引価格で購入しました。", "focus": "bought", "object": "the items"}, {"en": "Can we buy it at the current price?", "ja": "現在の価格でそれを購入できますか？", "focus": "buy", "object": "it"}], "dailyExamples": []}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase": "buy into", "ja": "考えに賛成する・信じ込む", "image": "案や考えを自分の中に受け入れる。", "pattern": "buy into", "examples": [{"en": "The team did not buy into the new proposal at first.", "ja": "チームは最初、その新しい提案に納得していませんでした。", "focus": "buy into", "object": "the new proposal"}], "dailyExamples": []},
      {"phrase": "buy out", "ja": "買収する・買い取る", "image": "相手の持分や会社を買って自分側に入れる。", "pattern": "buy out", "examples": [{"en": "A larger company bought out the small supplier.", "ja": "大きな会社がその小さな仕入先を買収しました。", "focus": "bought out", "object": "the small supplier"}], "dailyExamples": []},
      {"phrase": "buy up", "ja": "買い占める", "image": "市場にあるものを大量に買う。", "pattern": "buy up", "examples": [{"en": "Some customers bought up the remaining stock.", "ja": "一部の顧客が残りの在庫を買い占めました。", "focus": "bought up", "object": "the remaining stock"}], "dailyExamples": []},
      {"phrase": "buy back", "ja": "買い戻す", "image": "一度手放したものを再び買う。", "pattern": "buy back", "examples": [{"en": "The company bought back the old equipment.", "ja": "会社は古い設備を買い戻しました。", "focus": "bought back", "object": "the old equipment"}], "dailyExamples": []},
      {"phrase": "buy off", "ja": "買収して黙らせる", "image": "お金で相手の行動や発言を抑える。", "pattern": "buy off", "examples": [{"en": "The article claimed that the official was bought off.", "ja": "その記事は、その職員が買収されたと主張しました。", "focus": "bought off"}], "dailyExamples": []},
      {"phrase": "buy in", "ja": "買い入れる・賛同する", "image": "商品や考えを中に取り入れる。", "pattern": "buy in", "examples": [{"en": "We bought in extra materials before the price increase.", "ja": "私たちは値上げ前に追加材料を買い入れました。", "focus": "bought in", "object": "extra materials"}], "dailyExamples": []}
    ]
  },
  {
    "id": "sell",
    "rank": 46,
    "word": "SELL",
    "ipa": "/sel/",
    "kana": "セル",
    "syllable": "sell",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 基本",
    "core": "価値を相手に渡し、代金や納得を得る",
    "coreDetail": "SELLは、商品やサービスを販売するだけでなく、案や価値を相手に納得してもらう時にも使います。仕事では製品販売、販売条件、売れ行き、提案の説得で重要です。",
    "coreVisual": {"from": ["📦 商品", "💡 提案", "🧩 サービス", "📊 価値"], "to": "顧客・市場", "label": "価値を伝える → 買ってもらう"},
    "meanings": [
      {"id": "sell-product", "title": "① 商品・サービスを売る", "pattern": "sell + 商品・サービス", "transitivity": "他動詞", "structure": "sell + O", "image": "商品やサービスを相手に渡し、代金を得る。", "point": "何を売るかを sell の後ろに置きます。", "examples": [
        {"en": "We sell LED modules to sign companies.", "ja": "私たちは看板会社にLEDモジュールを販売しています。", "focus": "sell", "object": "LED modules"},
        {"en": "Our company sells lighting systems for commercial facilities.", "ja": "私たちの会社は商業施設向けの照明システムを販売しています。", "focus": "sells", "object": "lighting systems"},
        {"en": "They sell maintenance services with the equipment.", "ja": "彼らはその機器と一緒にメンテナンスサービスを販売しています。", "focus": "sell", "object": "maintenance services"}
      ], "dailyExamples": []},
      {"id": "sell-to-customer", "title": "② 相手に売る", "pattern": "sell + 商品 + to + 相手", "transitivity": "他動詞", "structure": "sell + O + to + 人・会社", "image": "商品を特定の相手へ届けて販売する。", "point": "売る相手を言う時は to を使います。", "examples": [
        {"en": "We sell custom signs to retail stores.", "ja": "私たちは小売店に特注サインを販売しています。", "focus": "sell", "object": "custom signs"},
        {"en": "The distributor sells our products to local contractors.", "ja": "その販売代理店は地元の施工会社に私たちの商品を販売しています。", "focus": "sells", "object": "our products"},
        {"en": "Can we sell this model to overseas clients?", "ja": "私たちはこのモデルを海外顧客に販売できますか？", "focus": "sell", "object": "this model"}
      ], "dailyExamples": []},
      {"id": "sell-for-price", "title": "③ ある価格で売る", "pattern": "sell + 商品 + for + 金額", "transitivity": "他動詞", "structure": "sell + O + for + price", "image": "商品をある価格条件で販売する。", "point": "価格を表す時は for を使います。", "examples": [
        {"en": "We sell this controller for 80,000 yen.", "ja": "私たちはこのコントローラーを8万円で販売しています。", "focus": "sell", "object": "this controller"},
        {"en": "The supplier sells the kit for a lower price in bulk.", "ja": "その仕入先はまとめ買いの場合、そのキットをより安い価格で販売しています。", "focus": "sells", "object": "the kit"},
        {"en": "Can we sell the sample for the same price as last time?", "ja": "私たちはそのサンプルを前回と同じ価格で販売できますか？", "focus": "sell", "object": "the sample"}
      ], "dailyExamples": []},
      {"id": "sell-well", "title": "④ よく売れる", "pattern": "商品 + sells well", "transitivity": "自動詞", "structure": "S + sell + adverb", "image": "商品が市場で買われやすい状態になる。", "point": "商品を主語にして This product sells well. と言います。", "examples": [
        {"en": "This product sells well in summer.", "ja": "この商品は夏によく売れます。", "focus": "sells", "object": "well"},
        {"en": "The compact model sold well after the exhibition.", "ja": "その小型モデルは展示会後によく売れました。", "focus": "sold", "object": "well"},
        {"en": "Products with simple installation tend to sell well.", "ja": "設置が簡単な商品はよく売れる傾向があります。", "focus": "sell", "object": "well"}
      ], "dailyExamples": []},
      {"id": "sell-idea", "title": "⑤ 案・価値を納得してもらう", "pattern": "sell + idea / value", "transitivity": "他動詞", "structure": "sell + O", "image": "案や価値を相手に受け入れてもらう。", "point": "sell an idea は『案を納得してもらう・売り込む』。", "examples": [
        {"en": "She sold the idea to the management team.", "ja": "彼女はその案を経営チームに納得してもらいました。", "focus": "sold", "object": "the idea"},
        {"en": "We need to sell the value of this service to the client.", "ja": "私たちはこのサービスの価値を顧客に納得してもらう必要があります。", "focus": "sell", "object": "the value"},
        {"en": "The proposal must sell the benefit clearly.", "ja": "その提案書はメリットを明確に伝えて納得してもらう必要があります。", "focus": "sell", "object": "the benefit"}
      ], "dailyExamples": []}
    ],
    "collocations": [
      {"phrase": "sell well", "ja": "よく売れる", "image": "市場で自然に買われる流れがある。", "pattern": "product + sell well", "examples": [
        {"en": "This model sells well with restaurants.", "ja": "このモデルは飲食店向けによく売れます。", "focus": "sells well"},
        {"en": "Compact products usually sell well online.", "ja": "小型の商品は通常オンラインでよく売れます。", "focus": "sell well"},
        {"en": "The sales team said the new color sells well.", "ja": "営業チームは新色がよく売れると言いました。", "focus": "sells well"}
      ], "dailyExamples": []},
      {"phrase": "sell the idea", "ja": "案を納得してもらう", "image": "案の価値を相手に伝えて受け入れてもらう。", "pattern": "sell the idea to + 相手", "examples": [
        {"en": "We need to sell the idea to the client first.", "ja": "まずその案を顧客に納得してもらう必要があります。", "focus": "sell the idea"},
        {"en": "The presentation helped sell the idea internally.", "ja": "そのプレゼンは社内で案を通す助けになりました。", "focus": "sell the idea"},
        {"en": "He sold the idea by showing clear cost benefits.", "ja": "彼は明確なコストメリットを示して、その案を納得してもらいました。", "focus": "sold the idea"}
      ], "dailyExamples": []},
      {"phrase": "sell directly", "ja": "直接販売する", "image": "代理店を通さず顧客へ販売する。", "pattern": "sell directly to + 相手", "examples": [
        {"en": "We sell directly to some key accounts.", "ja": "私たちは一部の重要顧客に直接販売しています。", "focus": "sell directly"},
        {"en": "The manufacturer does not sell directly to end users.", "ja": "そのメーカーはエンドユーザーには直接販売していません。", "focus": "sell directly"},
        {"en": "Can we sell directly to this client?", "ja": "私たちはこの顧客に直接販売できますか？", "focus": "sell directly"}
      ], "dailyExamples": []}
    ],
    "phrasalVerbs": [
      {"phrase": "sell out", "ja": "売り切れる・完売する", "image": "在庫がすべて外へ出てなくなる。", "pattern": "sell out / be sold out", "examples": [
        {"en": "The first shipment sold out quickly.", "ja": "初回出荷分はすぐに売り切れました。", "focus": "sold out"},
        {"en": "The item is sold out until next month.", "ja": "その商品は来月まで売り切れです。", "focus": "sold out"},
        {"en": "We need more stock before the product sells out.", "ja": "その商品が売り切れる前に、さらに在庫が必要です。", "focus": "sells out"}
      ], "dailyExamples": []},
      {"phrase": "sell off", "ja": "在庫などを売り払う", "image": "残っているものをまとめて市場に出す。", "pattern": "sell off + stock / assets", "examples": [
        {"en": "We sold off old stock before the new model arrived.", "ja": "新モデルが届く前に古い在庫を売り払いました。", "focus": "sold off"},
        {"en": "The company plans to sell off unused equipment.", "ja": "その会社は未使用の機器を売却する予定です。", "focus": "sell off"},
        {"en": "They sold off the remaining inventory at a discount.", "ja": "彼らは残りの在庫を割引価格で売り払いました。", "focus": "sold off"}
      ], "dailyExamples": []},
      {"phrase": "sell through", "ja": "流通を通じて売る", "image": "商品が販売経路を通って顧客まで進む。", "pattern": "sell through + channel", "examples": [
        {"en": "The product sells through local distributors.", "ja": "その商品は地元の販売代理店を通じて販売されています。", "focus": "sells through"},
        {"en": "We sell through partner companies in this region.", "ja": "この地域ではパートナー会社を通じて販売しています。", "focus": "sell through"},
        {"en": "The brand sells through several online channels.", "ja": "そのブランドは複数のオンラインチャネルを通じて販売されています。", "focus": "sells through"}
      ], "dailyExamples": []}
    ]
  },
  {
    "id": "choose",
    "rank": 47,
    "word": "CHOOSE",
    "ipa": "/tʃuːz/",
    "kana": "チューズ",
    "syllable": "choose",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 基本",
    "core": "複数の選択肢から、自分の判断で一つを選ぶ",
    "coreDetail": "CHOOSEは、候補の中から自分で判断して選ぶ動詞です。仕事では日程、仕入先、方法、選択肢、担当者などを決める場面でよく使います。select より会話寄りで幅広く使えます。",
    "coreVisual": {"from": ["A案", "B案", "C案", "条件"], "to": "選んだ答え", "label": "候補を見る → 判断する → 選ぶ"},
    "meanings": [
      {"id": "choose-option", "title": "① 選択肢を選ぶ", "pattern": "choose + 選択肢", "transitivity": "他動詞", "structure": "choose + O", "image": "いくつかの候補から一つを選ぶ。", "point": "選ぶ対象を choose の後ろに置きます。", "examples": [
        {"en": "We chose the best option for the client.", "ja": "私たちはその顧客にとって最適な選択肢を選びました。", "focus": "chose", "object": "the best option"},
        {"en": "Please choose a date for the meeting.", "ja": "会議の日程を選んでください。", "focus": "choose", "object": "a date"},
        {"en": "The team chose a new supplier.", "ja": "そのチームは新しい仕入先を選びました。", "focus": "chose", "object": "a new supplier"}
      ], "dailyExamples": []},
      {"id": "choose-between", "title": "② 2つの中から選ぶ", "pattern": "choose between A and B", "transitivity": "自動詞に近い使い方", "structure": "choose between A and B", "image": "2つの候補を比べて一方を選ぶ。", "point": "2つの候補を比較する時は between を使います。", "examples": [
        {"en": "We need to choose between these two designs.", "ja": "私たちはこの2つのデザインのどちらかを選ぶ必要があります。", "focus": "choose", "object": "between these two designs"},
        {"en": "The client will choose between the standard plan and the premium plan.", "ja": "顧客は標準プランとプレミアムプランのどちらかを選びます。", "focus": "choose", "object": "between the standard plan and the premium plan"},
        {"en": "Can you choose between speed and cost?", "ja": "スピードとコストのどちらを優先するか選べますか？", "focus": "choose", "object": "between speed and cost"}
      ], "dailyExamples": []},
      {"id": "choose-from", "title": "③ 一覧・候補の中から選ぶ", "pattern": "choose + O + from + 候補", "transitivity": "他動詞", "structure": "choose + O + from + group", "image": "候補のまとまりから一つを取り出す。", "point": "候補の範囲を示す時は from を使います。", "examples": [
        {"en": "Please choose one item from the list.", "ja": "リストの中から1つの商品を選んでください。", "focus": "choose", "object": "one item"},
        {"en": "We chose three candidates from the applications.", "ja": "私たちは応募の中から3人の候補者を選びました。", "focus": "chose", "object": "three candidates"},
        {"en": "The client chose a color from our sample book.", "ja": "顧客は私たちのサンプル帳から色を選びました。", "focus": "chose", "object": "a color"}
      ], "dailyExamples": []},
      {"id": "choose-for-purpose", "title": "④ 目的・相手のために選ぶ", "pattern": "choose + O + for + 目的・相手", "transitivity": "他動詞", "structure": "choose + O + for + purpose/person", "image": "目的や相手に合うものを選ぶ。", "point": "何のために選ぶかを言う時は for を使います。", "examples": [
        {"en": "We chose this product for the new store.", "ja": "私たちは新店舗用にこの商品を選びました。", "focus": "chose", "object": "this product"},
        {"en": "She chose a simple layout for the presentation.", "ja": "彼女はプレゼン用にシンプルなレイアウトを選びました。", "focus": "chose", "object": "a simple layout"},
        {"en": "Please choose the best option for the customer.", "ja": "顧客に最適な選択肢を選んでください。", "focus": "choose", "object": "the best option"}
      ], "dailyExamples": []},
      {"id": "choose-to-do", "title": "⑤ 〜することを選ぶ", "pattern": "choose to do", "transitivity": "他動詞的", "structure": "choose + to do", "image": "行動の選択肢から一つを選ぶ。", "point": "choose to do は『自分の判断で〜することを選ぶ』。", "examples": [
        {"en": "We chose to delay the launch by one week.", "ja": "私たちは発売を1週間遅らせることを選びました。", "focus": "chose", "object": "to delay the launch"},
        {"en": "The client chose to review the proposal again.", "ja": "顧客は提案をもう一度確認することを選びました。", "focus": "chose", "object": "to review the proposal again"},
        {"en": "They chose to use a local supplier.", "ja": "彼らは地元の仕入先を使うことを選びました。", "focus": "chose", "object": "to use a local supplier"}
      ], "dailyExamples": []}
    ],
    "collocations": [
      {"phrase": "choose the best option", "ja": "最適な選択肢を選ぶ", "image": "複数の候補から最も合うものを選ぶ。", "pattern": "choose the best option", "examples": [
        {"en": "We need to choose the best option for the client.", "ja": "私たちは顧客に最適な選択肢を選ぶ必要があります。", "focus": "choose the best option"},
        {"en": "The team chose the best option after comparing costs.", "ja": "チームはコストを比較した後、最適な選択肢を選びました。", "focus": "chose the best option"},
        {"en": "Can you help me choose the best option?", "ja": "最適な選択肢を選ぶのを手伝ってもらえますか？", "focus": "choose the best option"}
      ], "dailyExamples": []},
      {"phrase": "choose a supplier", "ja": "仕入先を選ぶ", "image": "条件に合う取引先を選ぶ。", "pattern": "choose a supplier", "examples": [
        {"en": "We must choose a supplier by next week.", "ja": "私たちは来週までに仕入先を選ばなければなりません。", "focus": "choose a supplier"},
        {"en": "The purchasing team chose a supplier with stable delivery.", "ja": "購買チームは納品が安定している仕入先を選びました。", "focus": "chose a supplier"},
        {"en": "It is risky to choose a supplier only by price.", "ja": "価格だけで仕入先を選ぶのは危険です。", "focus": "choose a supplier"}
      ], "dailyExamples": []},
      {"phrase": "choose based on", "ja": "〜に基づいて選ぶ", "image": "判断材料を基準にして選ぶ。", "pattern": "choose based on + 基準", "examples": [
        {"en": "We chose the product based on durability.", "ja": "私たちは耐久性に基づいてその商品を選びました。", "focus": "chose"},
        {"en": "Please choose based on the client's requirements.", "ja": "顧客の要件に基づいて選んでください。", "focus": "choose"},
        {"en": "The team chose based on delivery time and cost.", "ja": "チームは納期とコストに基づいて選びました。", "focus": "chose"}
      ], "dailyExamples": []}
    ],
    "phrasalVerbs": [
      {"phrase": "choose from", "ja": "〜の中から選ぶ", "image": "候補のまとまりから一つを取り出す。", "pattern": "choose from + 候補", "examples": [
        {"en": "You can choose from three delivery options.", "ja": "3つの配送オプションから選べます。", "focus": "choose from"},
        {"en": "The client chose from several sample colors.", "ja": "顧客はいくつかのサンプル色から選びました。", "focus": "chose from"},
        {"en": "Please choose from the approved supplier list.", "ja": "承認済み仕入先リストから選んでください。", "focus": "choose from"}
      ], "dailyExamples": []},
      {"phrase": "choose between", "ja": "2つの中から選ぶ", "image": "2つの候補の間で判断する。", "pattern": "choose between A and B", "examples": [
        {"en": "We need to choose between these two vendors.", "ja": "私たちはこの2社のどちらかを選ぶ必要があります。", "focus": "choose between"},
        {"en": "The customer chose between two colors.", "ja": "顧客は2色のどちらかを選びました。", "focus": "chose between"},
        {"en": "Can you choose between the two schedules?", "ja": "2つのスケジュールのどちらかを選べますか？", "focus": "choose between"}
      ], "dailyExamples": []},
      {"phrase": "choose to", "ja": "〜することを選ぶ", "image": "行動の選択肢を自分で決める。", "pattern": "choose to do", "examples": [
        {"en": "We chose to postpone the meeting.", "ja": "私たちは会議を延期することを選びました。", "focus": "chose to"},
        {"en": "The client chose to change the specification.", "ja": "顧客は仕様を変更することを選びました。", "focus": "chose to"},
        {"en": "They chose to work with a local partner.", "ja": "彼らは地元のパートナーと仕事をすることを選びました。", "focus": "chose to"}
      ], "dailyExamples": []}
    ]
  },
  {
    "id": "follow",
    "rank": 48,
    "word": "FOLLOW",
    "ipa": "/ˈfɑːloʊ/",
    "kana": "フォロー",
    "syllable": "fol-low",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★★ 基本",
    "core": "流れ・指示・相手の後についていく",
    "coreDetail": "FOLLOWは、指示や手順に従う、進捗を追う、相手の説明を理解してついていく、後で連絡するという感覚で使います。仕事では手順・ルール・スケジュール・顧客対応と相性が良い動詞です。",
    "coreVisual": {"from": ["📋 手順", "🧭 指示", "📅 予定", "👤 相手"], "to": "同じ流れで進む", "label": "前にある流れ → その後についていく"},
    "meanings": [
      {"id": "follow-instructions", "title": "① 指示・手順に従う", "pattern": "follow + instructions / procedure / rules", "transitivity": "他動詞", "structure": "follow + O", "image": "決められた流れの後について進む。", "point": "follow the instructions は『指示に従う』。", "examples": [
        {"en": "Please follow the installation instructions carefully.", "ja": "設置手順に注意して従ってください。", "focus": "follow", "object": "the installation instructions"},
        {"en": "We must follow the safety rules on site.", "ja": "私たちは現場で安全ルールに従わなければなりません。", "focus": "follow", "object": "the safety rules"},
        {"en": "The team followed the approval procedure.", "ja": "チームは承認手順に従いました。", "focus": "followed", "object": "the approval procedure"}
      ], "dailyExamples": []},
      {"id": "follow-schedule", "title": "② スケジュール・計画に沿う", "pattern": "follow + schedule / plan", "transitivity": "他動詞", "structure": "follow + O", "image": "予定された流れに沿って進める。", "point": "follow the schedule は『スケジュールに沿う・追う』。", "examples": [
        {"en": "We need to follow the schedule closely.", "ja": "私たちはスケジュールにしっかり沿って進める必要があります。", "focus": "follow", "object": "the schedule"},
        {"en": "The project followed the original plan until May.", "ja": "その案件は5月までは当初の計画通りに進みました。", "focus": "followed", "object": "the original plan"},
        {"en": "Please follow the delivery plan we shared yesterday.", "ja": "昨日共有した納品計画に沿って進めてください。", "focus": "follow", "object": "the delivery plan"}
      ], "dailyExamples": []},
      {"id": "follow-progress", "title": "③ 進捗・状況を追う", "pattern": "follow + progress / status / trend", "transitivity": "他動詞", "structure": "follow + O", "image": "物事の変化や進み具合を追いかける。", "point": "follow progress は『進捗を追う』。", "examples": [
        {"en": "I follow the project progress every morning.", "ja": "私は毎朝その案件の進捗を追っています。", "focus": "follow", "object": "the project progress"},
        {"en": "We should follow the market trend before setting the price.", "ja": "価格を設定する前に市場動向を追うべきです。", "focus": "follow", "object": "the market trend"},
        {"en": "The manager followed the issue until it was resolved.", "ja": "マネージャーはその問題が解決するまで状況を追いました。", "focus": "followed", "object": "the issue"}
      ], "dailyExamples": []},
      {"id": "follow-explanation", "title": "④ 説明を理解してついていく", "pattern": "follow + explanation / discussion", "transitivity": "他動詞", "structure": "follow + O", "image": "相手の話の流れについていく。", "point": "I follow you. は『あなたの話を理解しています』。", "examples": [
        {"en": "I could follow the explanation clearly.", "ja": "私はその説明をはっきり理解してついていけました。", "focus": "follow", "object": "the explanation"},
        {"en": "Some members could not follow the technical discussion.", "ja": "一部のメンバーは技術的な議論についていけませんでした。", "focus": "follow", "object": "the technical discussion"},
        {"en": "Please speak slowly so everyone can follow you.", "ja": "全員が理解してついていけるように、ゆっくり話してください。", "focus": "follow", "object": "you"}
      ], "dailyExamples": []},
      {"id": "follow-up-contact", "title": "⑤ 後で確認・連絡する", "pattern": "follow up with + 相手 / follow up on + 内容", "transitivity": "句動詞的", "structure": "follow up with / on", "image": "一度終わった話を後から追いかけて確認する。", "point": "follow up with は『人に追加連絡する』。follow up on は『内容について確認する』。", "examples": [
        {"en": "I followed up with the client this morning.", "ja": "私は今朝、その顧客に追加確認の連絡をしました。", "focus": "followed up with"},
        {"en": "Please follow up on the quotation tomorrow.", "ja": "明日、その見積について追加確認してください。", "focus": "follow up on"},
        {"en": "We need to follow up with the supplier about the delivery date.", "ja": "納期について仕入先に追加確認する必要があります。", "focus": "follow up with"}
      ], "dailyExamples": []}
    ],
    "collocations": [
      {"phrase": "follow the instructions", "ja": "指示に従う", "image": "指示された流れに沿って動く。", "pattern": "follow the instructions", "examples": [
        {"en": "Please follow the instructions in the manual.", "ja": "マニュアルの指示に従ってください。", "focus": "follow the instructions"},
        {"en": "The installer followed the instructions step by step.", "ja": "設置担当者は手順ごとに指示に従いました。", "focus": "followed the instructions"},
        {"en": "If we follow the instructions, we can avoid mistakes.", "ja": "指示に従えば、ミスを避けられます。", "focus": "follow the instructions"}
      ], "dailyExamples": []},
      {"phrase": "follow the rules", "ja": "ルールに従う", "image": "決められたルールの範囲内で動く。", "pattern": "follow the rules", "examples": [
        {"en": "All staff must follow the safety rules.", "ja": "全スタッフは安全ルールに従わなければなりません。", "focus": "follow the safety rules"},
        {"en": "We follow the company rules for approvals.", "ja": "私たちは承認について会社のルールに従っています。", "focus": "follow the company rules"},
        {"en": "The contractor did not follow the site rules.", "ja": "その施工業者は現場ルールに従いませんでした。", "focus": "follow the site rules"}
      ], "dailyExamples": []},
      {"phrase": "follow the schedule", "ja": "スケジュールに沿う", "image": "予定された時間の流れに沿って進む。", "pattern": "follow the schedule", "examples": [
        {"en": "We need to follow the schedule until delivery.", "ja": "納品までスケジュールに沿って進める必要があります。", "focus": "follow the schedule"},
        {"en": "The project followed the schedule without major delays.", "ja": "その案件は大きな遅れなくスケジュール通りに進みました。", "focus": "followed the schedule"},
        {"en": "Please follow the schedule shared by the project manager.", "ja": "プロジェクトマネージャーが共有したスケジュールに沿ってください。", "focus": "follow the schedule"}
      ], "dailyExamples": []}
    ],
    "phrasalVerbs": [
      {"phrase": "follow up", "ja": "追加確認する・後で連絡する", "image": "一度出た話を後から追いかける。", "pattern": "follow up", "examples": [
        {"en": "I will follow up tomorrow.", "ja": "明日、追加確認します。", "focus": "follow up"},
        {"en": "Please follow up after the meeting.", "ja": "会議後に追加で確認してください。", "focus": "follow up"},
        {"en": "The sales team followed up quickly.", "ja": "営業チームはすぐに追加連絡しました。", "focus": "followed up"}
      ], "dailyExamples": []},
      {"phrase": "follow up with", "ja": "〜に追加連絡する", "image": "相手に向かって後追いで連絡する。", "pattern": "follow up with + 人・会社", "examples": [
        {"en": "Please follow up with the client today.", "ja": "今日、その顧客に追加連絡してください。", "focus": "follow up with"},
        {"en": "I followed up with the supplier about the delay.", "ja": "私は遅延について仕入先に追加確認しました。", "focus": "followed up with"},
        {"en": "We should follow up with the design team this afternoon.", "ja": "今日の午後、デザインチームに追加確認するべきです。", "focus": "follow up with"}
      ], "dailyExamples": []},
      {"phrase": "follow up on", "ja": "〜について追加確認する", "image": "特定の内容に意識を戻して確認する。", "pattern": "follow up on + 内容", "examples": [
        {"en": "Can you follow up on the quotation?", "ja": "その見積について追加確認してもらえますか？", "focus": "follow up on"},
        {"en": "We need to follow up on the unpaid invoice.", "ja": "未払いの請求書について追加確認する必要があります。", "focus": "follow up on"},
        {"en": "She followed up on the customer's request.", "ja": "彼女は顧客の依頼について追加確認しました。", "focus": "followed up on"}
      ], "dailyExamples": []}
    ]
  },
  {
    "id": "create",
    "rank": 49,
    "word": "CREATE",
    "ipa": "/kriˈeɪt/",
    "kana": "クリエイト",
    "syllable": "cre-ate",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 基本",
    "core": "まだないものを、新しく形にする",
    "coreDetail": "CREATEは、資料・デザイン・仕組み・機会・価値など、今までなかったものを新しく作り出す動詞です。仕事では、資料作成、仕組み作り、チャンス作り、問題を生む場面まで幅広く使います。",
    "coreVisual": {"from": ["アイデア", "情報", "条件", "素材"], "to": "新しい形", "label": "ない状態 → 形にする"},
    "meanings": [
      {"id": "create-materials", "title": "① 資料・データを作成する", "pattern": "create + 資料・データ", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "情報を整理して、使える資料にする。", "point": "create a report / create a file / create a checklist のように、仕事で使う成果物を作る時に使います。", "examples": [
        {"en": "I created a product sheet for the client.", "ja": "私は顧客向けの商品資料を作成しました。", "focus": "created"},
        {"en": "We created a checklist to prevent mistakes.", "ja": "私たちはミスを防ぐためにチェックリストを作成しました。", "focus": "created"},
        {"en": "Please create a short report by Friday.", "ja": "金曜日までに短い報告書を作成してください。", "focus": "create"}
      ], "dailyExamples": []},
      {"id": "create-design", "title": "② デザイン・レイアウトを作る", "pattern": "create + design / layout / image", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "見た目や形を新しく作る。", "point": "デザイン、画像、レイアウトなど、見える形のものを作る時にも使います。", "examples": [
        {"en": "The designer created a new layout for the sign.", "ja": "デザイナーはその看板用に新しいレイアウトを作成しました。", "focus": "created"},
        {"en": "We created three design options for the client.", "ja": "私たちは顧客向けに3つのデザイン案を作成しました。", "focus": "created"},
        {"en": "Can you create an image for the proposal?", "ja": "提案書用の画像を作成できますか？", "focus": "create"}
      ], "dailyExamples": []},
      {"id": "create-system", "title": "③ 仕組み・環境を作る", "pattern": "create + system / process / environment", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "人や物事が動きやすい仕組みを作る。", "point": "create a system は「仕組みを作る」、create an environment は「環境を作る」です。", "examples": [
        {"en": "We need to create a better approval process.", "ja": "私たちはより良い承認フローを作る必要があります。", "focus": "create"},
        {"en": "The manager created a system to track orders.", "ja": "マネージャーは注文を管理する仕組みを作りました。", "focus": "created"},
        {"en": "This tool creates a safer work environment.", "ja": "このツールはより安全な作業環境を作ります。", "focus": "creates"}
      ], "dailyExamples": []},
      {"id": "create-opportunity", "title": "④ 機会・価値を生み出す", "pattern": "create + opportunity / value / demand", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "新しいチャンスや価値を生み出す。", "point": "形のある物だけでなく、機会・価値・需要など目に見えないものにも使えます。", "examples": [
        {"en": "This campaign created new sales opportunities.", "ja": "このキャンペーンは新しい販売機会を生み出しました。", "focus": "created"},
        {"en": "Good service creates long-term value for customers.", "ja": "良いサービスは顧客に長期的な価値を生み出します。", "focus": "creates"},
        {"en": "The new product created strong demand in the market.", "ja": "その新製品は市場で強い需要を生み出しました。", "focus": "created"}
      ], "dailyExamples": []},
      {"id": "create-problem", "title": "⑤ 問題・負担を生む", "pattern": "create + problem / risk / extra work", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "望まない状況を新しく発生させる。", "point": "create は良いものだけでなく、問題・リスク・追加作業を生む時にも使います。", "examples": [
        {"en": "A late change may create extra work for the factory.", "ja": "遅い変更は工場に追加作業を生む可能性があります。", "focus": "create"},
        {"en": "This delay created a problem with the delivery schedule.", "ja": "この遅延は納期スケジュールに問題を生みました。", "focus": "created"},
        {"en": "Using the wrong file can create serious mistakes.", "ja": "間違ったファイルを使うと重大なミスを生む可能性があります。", "focus": "create"}
      ], "dailyExamples": []},
      {"id": "create-account", "title": "⑥ アカウント・記録を作る", "pattern": "create + account / record / entry", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "システム上に新しい登録情報を作る。", "point": "ITや業務管理では、アカウント・記録・入力欄を作る意味でもよく使います。", "examples": [
        {"en": "Please create an account for the new user.", "ja": "新しいユーザー用のアカウントを作成してください。", "focus": "create"},
        {"en": "The system created a new record automatically.", "ja": "システムが自動で新しい記録を作成しました。", "focus": "created"},
        {"en": "We created a new project entry in the database.", "ja": "私たちはデータベースに新しい案件登録を作成しました。", "focus": "created"}
      ], "dailyExamples": []}
    ],
    "collocations": [
      {"phrase": "create a report", "ja": "報告書を作成する", "image": "情報を報告書の形にまとめる。", "pattern": "create a report", "examples": [
        {"en": "Please create a report after the site visit.", "ja": "現場訪問後に報告書を作成してください。", "focus": "create a report"},
        {"en": "I created a report for the weekly meeting.", "ja": "私は週次会議用の報告書を作成しました。", "focus": "created a report"},
        {"en": "We need to create a report with photos and notes.", "ja": "写真とメモを入れた報告書を作成する必要があります。", "focus": "create a report"}
      ], "dailyExamples": []},
      {"phrase": "create a plan", "ja": "計画を作成する", "image": "目的に向けた流れを形にする。", "pattern": "create a plan", "examples": [
        {"en": "We created a plan for the installation work.", "ja": "私たちは設置作業の計画を作成しました。", "focus": "created a plan"},
        {"en": "Please create a plan before ordering materials.", "ja": "材料を発注する前に計画を作成してください。", "focus": "create a plan"},
        {"en": "The team created a backup plan for the delay.", "ja": "チームは遅延に備えた代替計画を作成しました。", "focus": "created a backup plan"}
      ], "dailyExamples": []},
      {"phrase": "create value", "ja": "価値を生み出す", "image": "相手にとって意味のある価値を作る。", "pattern": "create value", "examples": [
        {"en": "Our proposal must create value for the client.", "ja": "私たちの提案は顧客に価値を生み出す必要があります。", "focus": "create value"},
        {"en": "Better maintenance creates value after delivery.", "ja": "より良いメンテナンスは納品後に価値を生み出します。", "focus": "creates value"},
        {"en": "This service creates value by saving time.", "ja": "このサービスは時間を節約することで価値を生み出します。", "focus": "creates value"}
      ], "dailyExamples": []},
      {"phrase": "create an opportunity", "ja": "機会を生み出す", "image": "新しい可能性を開く。", "pattern": "create an opportunity", "examples": [
        {"en": "The meeting created an opportunity to discuss future projects.", "ja": "その会議は今後の案件を話し合う機会を生み出しました。", "focus": "created an opportunity"},
        {"en": "A quick reply can create an opportunity for another order.", "ja": "素早い返信は追加注文の機会を生むことがあります。", "focus": "create an opportunity"},
        {"en": "This event created new opportunities with local companies.", "ja": "このイベントは地元企業との新しい機会を生み出しました。", "focus": "created new opportunities"}
      ], "dailyExamples": []},
      {"phrase": "create a problem", "ja": "問題を生む", "image": "新しい問題を発生させる。", "pattern": "create a problem", "examples": [
        {"en": "Changing the size now may create a problem.", "ja": "今サイズを変更すると問題が生じる可能性があります。", "focus": "create a problem"},
        {"en": "The missing information created a problem for the estimate.", "ja": "不足情報が見積に問題を生みました。", "focus": "created a problem"},
        {"en": "A wrong delivery address can create a serious problem.", "ja": "間違った納品先住所は重大な問題を生む可能性があります。", "focus": "create a serious problem"}
      ], "dailyExamples": []}
    ],
    "phrasalVerbs": [
      {"phrase": "create from", "ja": "〜から作る", "image": "材料や情報を元にして作る。", "pattern": "create A from B", "examples": [
        {"en": "We created the proposal from the client's notes.", "ja": "私たちは顧客のメモを元に提案書を作成しました。", "focus": "created the proposal from"},
        {"en": "The designer created a layout from the rough sketch.", "ja": "デザイナーはラフ案を元にレイアウトを作成しました。", "focus": "created a layout from"},
        {"en": "Can you create a list from these emails?", "ja": "これらのメールを元にリストを作成できますか？", "focus": "create a list from"}
      ], "dailyExamples": []},
      {"phrase": "create for", "ja": "〜のために作る", "image": "目的や相手に合わせて作る。", "pattern": "create A for B", "examples": [
        {"en": "We created a sample board for the client.", "ja": "私たちは顧客のためにサンプルボードを作成しました。", "focus": "created a sample board for"},
        {"en": "Please create a simple chart for the meeting.", "ja": "会議のために簡単な表を作成してください。", "focus": "create a simple chart for"},
        {"en": "The team created a new guide for beginners.", "ja": "チームは初心者向けに新しいガイドを作成しました。", "focus": "created a new guide for"}
      ], "dailyExamples": []},
      {"phrase": "create with", "ja": "〜を使って作る", "image": "道具や素材を使って作る。", "pattern": "create A with B", "examples": [
        {"en": "We created the drawing with the latest software.", "ja": "私たちは最新ソフトで図面を作成しました。", "focus": "created the drawing with"},
        {"en": "She created a report with data from Salesforce.", "ja": "彼女はSalesforceのデータを使って報告書を作成しました。", "focus": "created a report with"},
        {"en": "Can we create the estimate with the current price list?", "ja": "現在の価格表を使って見積を作成できますか？", "focus": "create the estimate with"}
      ], "dailyExamples": []},
      {"phrase": "create by", "ja": "〜することで作る", "image": "行動を通して結果を作る。", "pattern": "create A by doing", "examples": [
        {"en": "We created trust by responding quickly.", "ja": "私たちは素早く対応することで信頼を築きました。", "focus": "created trust by"},
        {"en": "The team created value by reducing waste.", "ja": "チームは無駄を減らすことで価値を生み出しました。", "focus": "created value by"},
        {"en": "They created demand by showing real examples.", "ja": "彼らは実例を見せることで需要を生み出しました。", "focus": "created demand by"}
      ], "dailyExamples": []},
      {"phrase": "create in", "ja": "〜内に作る", "image": "場所やシステムの中に新しく作る。", "pattern": "create A in B", "examples": [
        {"en": "Please create a new folder in the shared drive.", "ja": "共有ドライブ内に新しいフォルダを作成してください。", "focus": "create a new folder in"},
        {"en": "We created a task in the project system.", "ja": "私たちは案件管理システム内にタスクを作成しました。", "focus": "created a task in"},
        {"en": "The admin created a new user in the system.", "ja": "管理者はシステム内に新しいユーザーを作成しました。", "focus": "created a new user in"}
      ], "dailyExamples": []}
    ]
  },
  {
    "id": "reach",
    "rank": 50,
    "word": "REACH",
    "ipa": "/riːtʃ/",
    "kana": "リーチ",
    "syllable": "reach",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 基本",
    "core": "目的地・相手・目標まで届く",
    "coreDetail": "REACHは、物理的な場所、連絡したい相手、数値目標、合意点などに『届く・到達する』動詞です。仕事では、顧客に連絡がつく、目標に達する、合意に至る、一定の範囲まで影響が届く場面でよく使います。",
    "coreVisual": {"from": ["現在地", "連絡", "努力", "数字"], "to": "目的地・相手・目標", "label": "届いて到達する"},
    "meanings": [
      {"id": "reach-person", "title": "① 人・会社に連絡がつく", "pattern": "reach + 人・会社", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "連絡が相手まで届く。", "point": "reach the client は『顧客に連絡がつく』という意味で、電話やメールの場面で使えます。", "examples": [
        {"en": "We reached the client by phone this morning.", "ja": "私たちは今朝、電話でその顧客に連絡がつきました。", "focus": "reached"},
        {"en": "I could not reach the supplier yesterday.", "ja": "私は昨日、その仕入先に連絡がつきませんでした。", "focus": "reach"},
        {"en": "Please try to reach the manager before noon.", "ja": "正午までにマネージャーに連絡を取ってみてください。", "focus": "reach"}
      ], "dailyExamples": []},
      {"id": "reach-place", "title": "② 場所に到着する", "pattern": "reach + 場所", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "目的地まで届く。", "point": "arrive at より少し直接的に、目的地に到達することを表します。", "examples": [
        {"en": "The package reached the office yesterday.", "ja": "その荷物は昨日、事務所に届きました。", "focus": "reached"},
        {"en": "Our staff reached the site before 9 a.m.", "ja": "スタッフは午前9時前に現場へ到着しました。", "focus": "reached"},
        {"en": "The truck should reach the warehouse by evening.", "ja": "そのトラックは夕方までに倉庫へ到着するはずです。", "focus": "reach"}
      ], "dailyExamples": []},
      {"id": "reach-target", "title": "③ 目標・数字に到達する", "pattern": "reach + target / goal / number", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "設定した数字や目標まで届く。", "point": "reach our target / reach 100 units のように、数値や目標達成でよく使います。", "examples": [
        {"en": "We reached our sales target this month.", "ja": "私たちは今月、売上目標に到達しました。", "focus": "reached"},
        {"en": "Production reached 500 units last week.", "ja": "生産数は先週500台に達しました。", "focus": "reached"},
        {"en": "The project reached the final stage.", "ja": "その案件は最終段階に到達しました。", "focus": "reached"}
      ], "dailyExamples": []},
      {"id": "reach-agreement", "title": "④ 合意・結論に達する", "pattern": "reach + agreement / decision / conclusion", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "話し合いの到達点に着く。", "point": "reach an agreement は『合意に達する』という定番表現です。", "examples": [
        {"en": "We reached an agreement with the client.", "ja": "私たちは顧客と合意に達しました。", "focus": "reached"},
        {"en": "The team reached a decision after the meeting.", "ja": "チームは会議後に決定に至りました。", "focus": "reached"},
        {"en": "They reached a conclusion about the design change.", "ja": "彼らはデザイン変更について結論に達しました。", "focus": "reached"}
      ], "dailyExamples": []},
      {"id": "reach-level", "title": "⑤ 水準・限界に達する", "pattern": "reach + level / limit / point", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "ある基準や限界の位置まで届く。", "point": "reach a level / reach the limit のように、状態が一定の水準に達する時に使います。", "examples": [
        {"en": "The cost reached an unacceptable level.", "ja": "コストは受け入れられない水準に達しました。", "focus": "reached"},
        {"en": "Inventory reached the minimum level yesterday.", "ja": "在庫は昨日、最低水準に達しました。", "focus": "reached"},
        {"en": "The schedule has reached a critical point.", "ja": "スケジュールは重要な局面に達しています。", "focus": "reached"}
      ], "dailyExamples": []},
      {"id": "reach-audience", "title": "⑥ 情報・広告が相手に届く", "pattern": "reach + audience / customers / market", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "情報や提案が相手のところまで届く。", "point": "マーケティングでは、情報がどれだけ多くの人に届くかを表します。", "examples": [
        {"en": "This campaign reached many new customers.", "ja": "このキャンペーンは多くの新規顧客に届きました。", "focus": "reached"},
        {"en": "Our message did not reach the right audience.", "ja": "私たちのメッセージは適切な層に届きませんでした。", "focus": "reach"},
        {"en": "The announcement reached all branches by email.", "ja": "その通知はメールで全支店に届きました。", "focus": "reached"}
      ], "dailyExamples": []}
    ],
    "collocations": [
      {"phrase": "reach a target", "ja": "目標に到達する", "image": "設定した目標値まで届く。", "pattern": "reach a target", "examples": [
        {"en": "We reached the monthly sales target.", "ja": "私たちは月間売上目標に到達しました。", "focus": "reached the monthly sales target"},
        {"en": "The team worked hard to reach the target.", "ja": "チームは目標に到達するために懸命に取り組みました。", "focus": "reach the target"},
        {"en": "If we reach the target, we can expand the project.", "ja": "目標に到達すれば、その案件を拡大できます。", "focus": "reach the target"}
      ], "dailyExamples": []},
      {"phrase": "reach an agreement", "ja": "合意に達する", "image": "交渉の到達点に着く。", "pattern": "reach an agreement", "examples": [
        {"en": "We reached an agreement on the price.", "ja": "私たちは価格について合意に達しました。", "focus": "reached an agreement"},
        {"en": "The two companies reached an agreement after several meetings.", "ja": "両社は数回の会議の後、合意に達しました。", "focus": "reached an agreement"},
        {"en": "It may take time to reach an agreement.", "ja": "合意に達するまで時間がかかるかもしれません。", "focus": "reach an agreement"}
      ], "dailyExamples": []},
      {"phrase": "reach a decision", "ja": "決定に至る", "image": "話し合いの終点として決定に着く。", "pattern": "reach a decision", "examples": [
        {"en": "We reached a decision about the supplier.", "ja": "私たちは仕入先について決定に至りました。", "focus": "reached a decision"},
        {"en": "The committee reached a decision this morning.", "ja": "委員会は今朝、決定に至りました。", "focus": "reached a decision"},
        {"en": "Please share the details once you reach a decision.", "ja": "決定に至ったら詳細を共有してください。", "focus": "reach a decision"}
      ], "dailyExamples": []},
      {"phrase": "reach out", "ja": "連絡する・声をかける", "image": "こちらから手を伸ばして連絡する。", "pattern": "reach out", "examples": [
        {"en": "I will reach out to the client today.", "ja": "私は今日、その顧客に連絡します。", "focus": "reach out"},
        {"en": "Please reach out if you need any support.", "ja": "サポートが必要な場合は連絡してください。", "focus": "reach out"},
        {"en": "We reached out to several suppliers for pricing.", "ja": "私たちは価格確認のために複数の仕入先へ連絡しました。", "focus": "reached out"}
      ], "dailyExamples": []},
      {"phrase": "within reach", "ja": "手が届く範囲にある", "image": "少し進めば届く場所にある。", "pattern": "within reach", "examples": [
        {"en": "The delivery target is within reach.", "ja": "納期目標は達成できる範囲にあります。", "focus": "within reach"},
        {"en": "The new sales goal is within reach if we get one more order.", "ja": "あと1件受注できれば新しい売上目標は手の届く範囲です。", "focus": "within reach"},
        {"en": "Keep the documents within reach during the meeting.", "ja": "会議中は書類を手の届くところに置いてください。", "focus": "within reach"}
      ], "dailyExamples": []}
    ],
    "phrasalVerbs": [
      {"phrase": "reach out", "ja": "連絡する", "image": "こちらから相手へ手を伸ばすように連絡する。", "pattern": "reach out to + 人・会社", "examples": [
        {"en": "I will reach out to the supplier about the delay.", "ja": "私は遅延について仕入先に連絡します。", "focus": "reach out to"},
        {"en": "Please reach out to the client before sending the quote.", "ja": "見積を送る前に顧客へ連絡してください。", "focus": "reach out to"},
        {"en": "We reached out to the design team for advice.", "ja": "私たちは助言を求めてデザインチームへ連絡しました。", "focus": "reached out to"}
      ], "dailyExamples": []},
      {"phrase": "reach back", "ja": "折り返し連絡する", "image": "一度受けた連絡に戻って返す。", "pattern": "reach back out / reach back", "examples": [
        {"en": "I will reach back out after checking the schedule.", "ja": "スケジュールを確認した後、折り返し連絡します。", "focus": "reach back out"},
        {"en": "Please reach back out when the client replies.", "ja": "顧客から返信が来たら折り返し連絡してください。", "focus": "reach back out"},
        {"en": "She reached back out with the updated price.", "ja": "彼女は更新後の価格を持って折り返し連絡しました。", "focus": "reached back out"}
      ], "dailyExamples": []},
      {"phrase": "reach into", "ja": "〜にまで届く・影響する", "image": "範囲が別の領域の中まで伸びる。", "pattern": "reach into + 範囲", "examples": [
        {"en": "The delay may reach into next week.", "ja": "その遅延は来週にまで及ぶ可能性があります。", "focus": "reach into"},
        {"en": "The cost increase reached into several product lines.", "ja": "コスト増は複数の商品ラインにまで及びました。", "focus": "reached into"},
        {"en": "This issue could reach into the next phase of the project.", "ja": "この問題は案件の次の段階にまで影響する可能性があります。", "focus": "reach into"}
      ], "dailyExamples": []},
      {"phrase": "reach across", "ja": "〜を越えて届く", "image": "部署や地域などの境界を越えて届く。", "pattern": "reach across + 範囲", "examples": [
        {"en": "The campaign reached across several regions.", "ja": "そのキャンペーンは複数地域に広がりました。", "focus": "reached across"},
        {"en": "This project reaches across sales and engineering.", "ja": "この案件は営業と技術の両方に関わります。", "focus": "reaches across"},
        {"en": "The announcement reached across all departments.", "ja": "その通知は全部署に届きました。", "focus": "reached across"}
      ], "dailyExamples": []},
      {"phrase": "reach for", "ja": "〜を目指す・手を伸ばす", "image": "少し先の目標に向かって手を伸ばす。", "pattern": "reach for + 目標", "examples": [
        {"en": "We should reach for a higher quality standard.", "ja": "私たちはより高い品質基準を目指すべきです。", "focus": "reach for"},
        {"en": "The team is reaching for a new sales record.", "ja": "チームは新しい売上記録を目指しています。", "focus": "reaching for"},
        {"en": "This brand reaches for customers who want premium quality.", "ja": "このブランドは高品質を求める顧客層を目指しています。", "focus": "reaches for"}
      ], "dailyExamples": []}
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
    "core": "元の場所・相手・状態へ戻す／戻る",
    "coreDetail": "RETURNは、物を返す、人が戻る、メールや電話に返答する、結果として利益が戻る、状態を元に戻すなど、何かが元の方向へ戻る感覚で整理できます。",
    "coreVisual": {"from": ["商品", "人", "連絡", "お金", "状態"], "to": "元の場所・相手・状態", "label": "戻る・戻す"},
    "meanings": [
      {"id": "return-item", "title": "① 物・書類を返す", "pattern": "return + 物 + to + 相手", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "預かった物を元の相手へ戻す。", "point": "return the sample to the supplier のように、物や書類を返す場面で使います。", "examples": [
        {"en": "I returned the sample to the supplier yesterday.", "ja": "私は昨日、そのサンプルを仕入先に返しました。", "focus": "returned"},
        {"en": "Please return the signed document by Friday.", "ja": "金曜日までに署名済みの書類を返送してください。", "focus": "return"},
        {"en": "We returned the defective product to the manufacturer.", "ja": "私たちは不良品をメーカーへ返却しました。", "focus": "returned"}
      ], "dailyExamples": []},
      {"id": "return-place", "title": "② 場所に戻る", "pattern": "return to + 場所", "transitivity": "自動詞", "structure": "仕事でよく使う基本パターン", "image": "元いた場所へ戻る。", "point": "return to the office は『会社に戻る』です。go back より少しフォーマルです。", "examples": [
        {"en": "She returned to the office after lunch.", "ja": "彼女は昼食後に会社へ戻りました。", "focus": "returned"},
        {"en": "Our team will return to the site next week.", "ja": "私たちのチームは来週、現場へ戻ります。", "focus": "return"},
        {"en": "The manager returned to Japan after the business trip.", "ja": "マネージャーは出張後に日本へ戻りました。", "focus": "returned"}
      ], "dailyExamples": []},
      {"id": "return-call-email", "title": "③ 電話・メールに返答する", "pattern": "return + call / email / message", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "受けた連絡に戻って返す。", "point": "return a call は『折り返し電話する』、return an email は『メールに返信する』です。", "examples": [
        {"en": "I will return your call this afternoon.", "ja": "今日の午後、折り返しお電話します。", "focus": "return"},
        {"en": "Please return the client's email by the end of the day.", "ja": "本日中に顧客のメールに返信してください。", "focus": "return"},
        {"en": "She returned my message after the meeting.", "ja": "彼女は会議後に私のメッセージへ返信しました。", "focus": "returned"}
      ], "dailyExamples": []},
      {"id": "return-result", "title": "④ 利益・結果をもたらす", "pattern": "return + profit / result / value", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "投資や行動の結果が戻ってくる。", "point": "return a profit は『利益を生む』、return good results は『良い結果をもたらす』です。", "examples": [
        {"en": "The campaign returned strong results.", "ja": "そのキャンペーンは大きな成果をもたらしました。", "focus": "returned"},
        {"en": "This investment should return a profit next year.", "ja": "この投資は来年利益を生むはずです。", "focus": "return"},
        {"en": "Better service returns value to customers.", "ja": "より良いサービスは顧客に価値を還元します。", "focus": "returns"}
      ], "dailyExamples": []},
      {"id": "return-status", "title": "⑤ 元の状態に戻す・戻る", "pattern": "return to + 状態", "transitivity": "自動詞・他動詞", "structure": "仕事でよく使う基本パターン", "image": "状態が元の形に戻る。", "point": "return to normal は『通常状態に戻る』という定番表現です。", "examples": [
        {"en": "Production returned to normal after the repair.", "ja": "修理後、生産は通常状態に戻りました。", "focus": "returned"},
        {"en": "We need to return the settings to the original condition.", "ja": "設定を元の状態に戻す必要があります。", "focus": "return"},
        {"en": "The schedule returned to normal this week.", "ja": "今週、スケジュールは通常通りに戻りました。", "focus": "returned"}
      ], "dailyExamples": []},
      {"id": "return-product", "title": "⑥ 商品を返品する", "pattern": "return + product / item", "transitivity": "他動詞", "structure": "仕事でよく使う基本パターン", "image": "購入した物を販売元へ戻す。", "point": "buy の反対の場面として、購入品を返品する時に使います。", "examples": [
        {"en": "The customer returned the product because it was damaged.", "ja": "顧客は破損していたため、その商品を返品しました。", "focus": "returned"},
        {"en": "Can we return this item to the supplier?", "ja": "この商品を仕入先に返品できますか？", "focus": "return"},
        {"en": "Please check the return policy before shipping it back.", "ja": "返送する前に返品規定を確認してください。", "focus": "return"}
      ], "dailyExamples": []}
    ],
    "collocations": [
      {"phrase": "return a call", "ja": "折り返し電話する", "image": "受けた電話に戻って返す。", "pattern": "return a call", "examples": [
        {"en": "I will return your call after the meeting.", "ja": "会議後に折り返しお電話します。", "focus": "return your call"},
        {"en": "Please return the client's call as soon as possible.", "ja": "できるだけ早く顧客に折り返し電話してください。", "focus": "return the client's call"},
        {"en": "She returned my call this morning.", "ja": "彼女は今朝、私に折り返し電話しました。", "focus": "returned my call"}
      ], "dailyExamples": []},
      {"phrase": "return an email", "ja": "メールに返信する", "image": "受けたメールへ返す。", "pattern": "return an email", "examples": [
        {"en": "Please return the email by noon.", "ja": "正午までにそのメールへ返信してください。", "focus": "return the email"},
        {"en": "I returned the customer's email yesterday.", "ja": "私は昨日、顧客のメールに返信しました。", "focus": "returned the customer's email"},
        {"en": "We should return all urgent emails today.", "ja": "今日中にすべての緊急メールへ返信するべきです。", "focus": "return all urgent emails"}
      ], "dailyExamples": []},
      {"phrase": "return to normal", "ja": "通常状態に戻る", "image": "乱れた状態が元の状態へ戻る。", "pattern": "return to normal", "examples": [
        {"en": "Delivery returned to normal after the holiday.", "ja": "連休後、配送は通常状態に戻りました。", "focus": "returned to normal"},
        {"en": "Production should return to normal next week.", "ja": "生産は来週通常状態に戻るはずです。", "focus": "return to normal"},
        {"en": "The system returned to normal after the update.", "ja": "システムは更新後に通常状態へ戻りました。", "focus": "returned to normal"}
      ], "dailyExamples": []},
      {"phrase": "return policy", "ja": "返品規定", "image": "返品に関するルール。", "pattern": "return policy", "examples": [
        {"en": "Please check the return policy before ordering.", "ja": "注文前に返品規定を確認してください。", "focus": "return policy"},
        {"en": "The return policy allows refunds within seven days.", "ja": "その返品規定では7日以内の返金が可能です。", "focus": "return policy"},
        {"en": "We explained the return policy to the customer.", "ja": "私たちは顧客に返品規定を説明しました。", "focus": "return policy"}
      ], "dailyExamples": []},
      {"phrase": "return on investment", "ja": "投資収益率・投資に対するリターン", "image": "投資したものに対して戻ってくる成果。", "pattern": "return on investment", "examples": [
        {"en": "We need to consider the return on investment.", "ja": "私たちは投資に対するリターンを考慮する必要があります。", "focus": "return on investment"},
        {"en": "This project has a high return on investment.", "ja": "この案件は投資収益率が高いです。", "focus": "return on investment"},
        {"en": "The client asked about the return on investment.", "ja": "顧客は投資に対するリターンについて質問しました。", "focus": "return on investment"}
      ], "dailyExamples": []}
    ],
    "phrasalVerbs": [
      {"phrase": "return to", "ja": "〜に戻る", "image": "元の場所・状態へ戻る。", "pattern": "return to + 場所・状態", "examples": [
        {"en": "We returned to the office after the site visit.", "ja": "私たちは現場訪問後に会社へ戻りました。", "focus": "returned to"},
        {"en": "The project returned to the original schedule.", "ja": "その案件は元のスケジュールに戻りました。", "focus": "returned to"},
        {"en": "Please return to the main topic.", "ja": "本題に戻ってください。", "focus": "return to"}
      ], "dailyExamples": []},
      {"phrase": "return from", "ja": "〜から戻る", "image": "出ていた場所から戻る。", "pattern": "return from + 場所・活動", "examples": [
        {"en": "She returned from the business trip yesterday.", "ja": "彼女は昨日、出張から戻りました。", "focus": "returned from"},
        {"en": "The team returned from the site with new information.", "ja": "チームは新しい情報を持って現場から戻りました。", "focus": "returned from"},
        {"en": "When you return from lunch, please call the client.", "ja": "昼食から戻ったら顧客に電話してください。", "focus": "return from"}
      ], "dailyExamples": []},
      {"phrase": "return with", "ja": "〜を持って戻る", "image": "戻る時に情報や物を一緒に持ってくる。", "pattern": "return with + 情報・物", "examples": [
        {"en": "The sales team returned with useful feedback.", "ja": "営業チームは有益なフィードバックを持ち帰りました。", "focus": "returned with"},
        {"en": "Please return with the signed documents.", "ja": "署名済み書類を持って戻ってください。", "focus": "return with"},
        {"en": "He returned with several improvement ideas.", "ja": "彼はいくつかの改善案を持って戻りました。", "focus": "returned with"}
      ], "dailyExamples": []},
      {"phrase": "return by", "ja": "〜までに返す・戻る", "image": "期限までに戻す。", "pattern": "return by + 時間・日付", "examples": [
        {"en": "Please return the document by Friday.", "ja": "金曜日までにその書類を返送してください。", "focus": "return the document by"},
        {"en": "I will return to the office by 3 p.m.", "ja": "私は午後3時までに会社へ戻ります。", "focus": "return to the office by"},
        {"en": "The sample must be returned by the end of the month.", "ja": "そのサンプルは月末までに返却されなければなりません。", "focus": "returned by"}
      ], "dailyExamples": []},
      {"phrase": "return back", "ja": "戻す・戻る（重複気味で注意）", "image": "back と return が重なり、日常的には使われるが仕事では return を優先。", "pattern": "return back", "examples": [
        {"en": "Please return the item to the supplier.", "ja": "その商品を仕入先に返却してください。", "focus": "return"},
        {"en": "Use return, not return back, in formal emails.", "ja": "正式なメールでは return back ではなく return を使いましょう。", "focus": "return"},
        {"en": "We returned the sample after the inspection.", "ja": "私たちは検査後にサンプルを返却しました。", "focus": "returned"}
      ], "dailyExamples": []}
    ]
  },
  {
  "id": "check",
  "rank": 52,
  "word": "CHECK",
  "ipa": "/tʃek/",
  "kana": "チェック",
  "syllable": "check",
  "transitivity": "他動詞・自動詞",
  "importance": "★★★★☆ 重要",
  "core": "不安や抜けをなくすために、内容・状態・相手に確認を入れる",
  "coreDetail": "CHECKは、書類・数字・状況・相手の意向などを確認して、間違いや抜けを減らす動詞です。仕事では見積、納期、在庫、メール、図面確認で頻出します。",
  "coreVisual": {
    "from": [
      "📄 書類",
      "📊 数字",
      "📦 在庫",
      "📧 メール",
      "👤 顧客"
    ],
    "to": "確認して安心できる状態",
    "label": "不確実 → 確認済み"
  },
  "meanings": [
    {
      "id": "check-details",
      "title": "① 内容を確認する",
      "pattern": "check + 内容・詳細",
      "transitivity": "他動詞",
      "structure": "仕事でよく使う自然な型",
      "image": "資料や情報を見て、間違いがないか確認する。",
      "point": "details, document, drawing などを目的語にする。",
      "examples": [
        {
          "en": "I will check the details before sending the quote.",
          "ja": "私は見積を送る前に詳細を確認します。",
          "focus": "check"
        },
        {
          "en": "Please check the document for any missing information.",
          "ja": "不足情報がないか、その書類を確認してください。",
          "focus": "check"
        },
        {
          "en": "We checked the drawing before the site meeting.",
          "ja": "私たちは現場打ち合わせの前に図面を確認しました。",
          "focus": "checked"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "check-status",
      "title": "② 状況・進捗を確認する",
      "pattern": "check + status / progress",
      "transitivity": "他動詞",
      "structure": "仕事でよく使う自然な型",
      "image": "今どうなっているかを確認する。",
      "point": "status, progress, schedule と相性が良い。",
      "examples": [
        {
          "en": "Can you check the delivery status today?",
          "ja": "今日、納品状況を確認してもらえますか？",
          "focus": "check"
        },
        {
          "en": "We need to check the project progress every week.",
          "ja": "私たちは毎週、案件の進捗を確認する必要があります。",
          "focus": "check"
        },
        {
          "en": "She checked the schedule before calling the customer.",
          "ja": "彼女は顧客に電話する前にスケジュールを確認しました。",
          "focus": "checked"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "check-with",
      "title": "③ 相手に確認する",
      "pattern": "check with + 人・部署",
      "transitivity": "自動詞に近い使い方",
      "structure": "仕事でよく使う自然な型",
      "image": "自分だけで判断せず、関係者に確認する。",
      "point": "with の後ろに確認相手を置く。",
      "examples": [
        {
          "en": "I will check with the client and get back to you.",
          "ja": "私は顧客に確認して、あなたに折り返します。",
          "focus": "check with"
        },
        {
          "en": "Please check with the factory before confirming the lead time.",
          "ja": "納期を確定する前に工場へ確認してください。",
          "focus": "check with"
        },
        {
          "en": "We checked with accounting about the payment date.",
          "ja": "私たちは支払日について経理に確認しました。",
          "focus": "checked with"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "check-if",
      "title": "④ 〜かどうか確認する",
      "pattern": "check if / whether + 文",
      "transitivity": "他動詞",
      "structure": "仕事でよく使う自然な型",
      "image": "条件や事実が正しいか確認する。",
      "point": "check if は会話でもメールでもよく使う。",
      "examples": [
        {
          "en": "Please check if the sample has arrived.",
          "ja": "サンプルが到着したか確認してください。",
          "focus": "check"
        },
        {
          "en": "I checked whether the customer approved the design.",
          "ja": "私は顧客がデザインを承認したか確認しました。",
          "focus": "checked"
        },
        {
          "en": "We need to check if the price includes shipping.",
          "ja": "私たちは価格に送料が含まれているか確認する必要があります。",
          "focus": "check"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "check-stock",
      "title": "⑤ 在庫・空き・対応可否を確認する",
      "pattern": "check stock / availability",
      "transitivity": "他動詞",
      "structure": "仕事でよく使う自然な型",
      "image": "使えるか、空いているか、在庫があるか確認する。",
      "point": "availability, stock, capacity と一緒に使う。",
      "examples": [
        {
          "en": "Please check stock before accepting the order.",
          "ja": "注文を受ける前に在庫を確認してください。",
          "focus": "check"
        },
        {
          "en": "I will check availability for next week.",
          "ja": "私は来週の空き状況を確認します。",
          "focus": "check"
        },
        {
          "en": "We checked production capacity with the supplier.",
          "ja": "私たちは仕入先に生産対応力を確認しました。",
          "focus": "checked"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "check-for",
      "title": "⑥ 〜がないか確認する",
      "pattern": "check for + 問題・ミス",
      "transitivity": "他動詞",
      "structure": "仕事でよく使う自然な型",
      "image": "問題・ミス・不足があるか探して確認する。",
      "point": "check for errors / defects / missing items の形。",
      "examples": [
        {
          "en": "Please check for errors before submitting the report.",
          "ja": "レポートを提出する前にミスがないか確認してください。",
          "focus": "check for"
        },
        {
          "en": "We checked the product for damage after delivery.",
          "ja": "私たちは納品後、製品に傷がないか確認しました。",
          "focus": "checked"
        },
        {
          "en": "The team checked for missing parts before installation.",
          "ja": "チームは施工前に不足部品がないか確認しました。",
          "focus": "checked for"
        }
      ],
      "dailyExamples": []
    }
  ],
  "collocations": [
    {
      "phrase": "check the details",
      "ja": "詳細を確認する",
      "image": "細かい内容を確認して認識違いを防ぐ。",
      "pattern": "check the details",
      "examples": [
        {
          "en": "Please check the details before replying.",
          "ja": "返信する前に詳細を確認してください。",
          "focus": "check the details"
        },
        {
          "en": "I checked the details with the sales team.",
          "ja": "私は営業チームと詳細を確認しました。",
          "focus": "checked the details"
        },
        {
          "en": "We should check the details again before ordering.",
          "ja": "発注前にもう一度詳細を確認するべきです。",
          "focus": "check the details"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "check the schedule",
      "ja": "スケジュールを確認する",
      "image": "予定や納期を確認する。",
      "pattern": "check the schedule",
      "examples": [
        {
          "en": "Can you check the schedule for next Monday?",
          "ja": "来週月曜日の予定を確認してもらえますか？",
          "focus": "check the schedule"
        },
        {
          "en": "We checked the schedule before booking the hotel.",
          "ja": "ホテルを予約する前にスケジュールを確認しました。",
          "focus": "checked the schedule"
        },
        {
          "en": "Please check the installation schedule with the site team.",
          "ja": "施工スケジュールを現場チームに確認してください。",
          "focus": "check the installation schedule"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "check the price",
      "ja": "価格を確認する",
      "image": "価格や条件を確認する。",
      "pattern": "check the price",
      "examples": [
        {
          "en": "I will check the price with the supplier.",
          "ja": "私は仕入先に価格を確認します。",
          "focus": "check the price"
        },
        {
          "en": "Please check the price before sending the quotation.",
          "ja": "見積書を送る前に価格を確認してください。",
          "focus": "check the price"
        },
        {
          "en": "We checked the price difference between the two models.",
          "ja": "私たちは2つの型番の価格差を確認しました。",
          "focus": "checked the price difference"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "check the email",
      "ja": "メールを確認する",
      "image": "届いたメールや内容を確認する。",
      "pattern": "check the email",
      "examples": [
        {
          "en": "Please check the email from the customer.",
          "ja": "顧客からのメールを確認してください。",
          "focus": "check the email"
        },
        {
          "en": "I checked the email and found the attachment.",
          "ja": "メールを確認して、添付ファイルを見つけました。",
          "focus": "checked the email"
        },
        {
          "en": "We need to check the email history before calling them.",
          "ja": "電話する前にメール履歴を確認する必要があります。",
          "focus": "check the email history"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "double-check",
      "ja": "念のため再確認する",
      "image": "一度確認したものを念のためもう一度確認する。",
      "pattern": "double-check + 内容",
      "examples": [
        {
          "en": "Please double-check the quantity before shipment.",
          "ja": "出荷前に数量を念のため再確認してください。",
          "focus": "double-check"
        },
        {
          "en": "I double-checked the delivery address.",
          "ja": "私は納品先住所を念のため再確認しました。",
          "focus": "double-checked"
        },
        {
          "en": "We should double-check the final layout.",
          "ja": "私たちは最終レイアウトを再確認するべきです。",
          "focus": "double-check"
        }
      ],
      "dailyExamples": []
    }
  ],
  "phrasalVerbs": [
    {
      "phrase": "check with",
      "ja": "〜に確認する",
      "image": "相手に確認を取る。",
      "pattern": "check with + 人・部署",
      "examples": [
        {
          "en": "Please check with your manager first.",
          "ja": "まず上司に確認してください。",
          "focus": "check with"
        },
        {
          "en": "I checked with the warehouse about the stock.",
          "ja": "私は在庫について倉庫に確認しました。",
          "focus": "checked with"
        },
        {
          "en": "We need to check with the client before changing the design.",
          "ja": "デザインを変更する前に顧客へ確認する必要があります。",
          "focus": "check with"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "check on",
      "ja": "〜の様子を確認する",
      "image": "状態や進捗を見に行く・確認する。",
      "pattern": "check on + 状況・人・物",
      "examples": [
        {
          "en": "I will check on the shipment this afternoon.",
          "ja": "今日の午後、出荷状況を確認します。",
          "focus": "check on"
        },
        {
          "en": "Can you check on the installation progress?",
          "ja": "施工の進捗を確認してもらえますか？",
          "focus": "check on"
        },
        {
          "en": "She checked on the team after the meeting.",
          "ja": "彼女は会議後にチームの様子を確認しました。",
          "focus": "checked on"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "check in",
      "ja": "到着・参加・状況を知らせる",
      "image": "到着や進捗を共有する。",
      "pattern": "check in / check in with",
      "examples": [
        {
          "en": "Please check in when you arrive at the site.",
          "ja": "現場に到着したら連絡してください。",
          "focus": "check in"
        },
        {
          "en": "We checked in with the customer after delivery.",
          "ja": "私たちは納品後に顧客へ状況確認しました。",
          "focus": "checked in with"
        },
        {
          "en": "I will check in with the team tomorrow morning.",
          "ja": "明日の朝、チームに状況確認します。",
          "focus": "check in with"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "check out",
      "ja": "確認する・見てみる",
      "image": "資料や候補を確認する。カジュアル寄りだが仕事でも使う。",
      "pattern": "check out + 内容",
      "examples": [
        {
          "en": "Please check out the new product page.",
          "ja": "新しい製品ページを見てみてください。",
          "focus": "check out"
        },
        {
          "en": "We checked out several options before choosing one.",
          "ja": "私たちは1つ選ぶ前にいくつかの選択肢を確認しました。",
          "focus": "checked out"
        },
        {
          "en": "You should check out the updated catalog.",
          "ja": "更新されたカタログを確認するとよいです。",
          "focus": "check out"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "check off",
      "ja": "確認済みとして印を付ける",
      "image": "リストの項目を確認して完了にする。",
      "pattern": "check off + 項目",
      "examples": [
        {
          "en": "Please check off each item after inspection.",
          "ja": "検査後に各項目へチェックを入れてください。",
          "focus": "check off"
        },
        {
          "en": "We checked off the completed tasks.",
          "ja": "私たちは完了した作業にチェックを入れました。",
          "focus": "checked off"
        },
        {
          "en": "The supervisor checked off the safety items.",
          "ja": "責任者は安全項目に確認済みの印を付けました。",
          "focus": "checked off"
        }
      ],
      "dailyExamples": []
    }
  ]
},
  {
  "id": "decide",
  "rank": 53,
  "word": "DECIDE",
  "ipa": "/dɪˈsaɪd/",
  "kana": "ディサイド",
  "syllable": "de-cide",
  "transitivity": "他動詞・自動詞",
  "importance": "★★★★☆ 重要",
  "core": "迷っている状態から、進む方向を一つに決める",
  "coreDetail": "DECIDEは、複数の選択肢や迷いがある状態から、方針・日程・担当・行動を一つに決める動詞です。仕事では会議、見積、仕様、納期、承認判断でよく使います。",
  "coreVisual": {
    "from": [
      "案A",
      "案B",
      "日程候補",
      "担当候補",
      "対応方針"
    ],
    "to": "決定した方向",
    "label": "迷い → 決定"
  },
  "meanings": [
    {
      "id": "decide-to",
      "title": "① 〜することに決める",
      "pattern": "decide to do",
      "transitivity": "他動詞的な使い方",
      "structure": "仕事でよく使う自然な型",
      "image": "次に取る行動を決める。",
      "point": "decide to の後ろに具体的な行動を置く。",
      "examples": [
        {
          "en": "We decided to revise the proposal.",
          "ja": "私たちは提案書を修正することに決めました。",
          "focus": "decided"
        },
        {
          "en": "The client decided to postpone the meeting.",
          "ja": "顧客は会議を延期することに決めました。",
          "focus": "decided"
        },
        {
          "en": "I decided to contact the supplier directly.",
          "ja": "私は仕入先に直接連絡することに決めました。",
          "focus": "decided"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "decide-on",
      "title": "② 〜に決める",
      "pattern": "decide on + 名詞",
      "transitivity": "自動詞に近い使い方",
      "structure": "仕事でよく使う自然な型",
      "image": "候補の中から対象を選んで決める。",
      "point": "date, price, design, supplier など名詞と一緒に使う。",
      "examples": [
        {
          "en": "We need to decide on the final design by Friday.",
          "ja": "私たちは金曜日までに最終デザインを決める必要があります。",
          "focus": "decide on"
        },
        {
          "en": "Have you decided on the meeting date?",
          "ja": "会議の日程は決まりましたか？",
          "focus": "decided on"
        },
        {
          "en": "The team decided on a new supplier.",
          "ja": "チームは新しい仕入先に決めました。",
          "focus": "decided on"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "decide-that",
      "title": "③ 〜だと判断する・決定する",
      "pattern": "decide that + 文",
      "transitivity": "他動詞的な使い方",
      "structure": "仕事でよく使う自然な型",
      "image": "会議や検討の結果として結論を出す。",
      "point": "that節で決定内容を説明する。",
      "examples": [
        {
          "en": "We decided that the current plan was too risky.",
          "ja": "私たちは現在の計画はリスクが高すぎると判断しました。",
          "focus": "decided"
        },
        {
          "en": "Management decided that the price should not change.",
          "ja": "経営陣は価格を変更すべきではないと決定しました。",
          "focus": "decided"
        },
        {
          "en": "The client decided that the sample was acceptable.",
          "ja": "顧客はサンプルが問題ないと判断しました。",
          "focus": "decided"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "decide-whether",
      "title": "④ 〜するかどうか決める",
      "pattern": "decide whether / if + 文",
      "transitivity": "他動詞的な使い方",
      "structure": "仕事でよく使う自然な型",
      "image": "やるかやらないかを判断する。",
      "point": "whether は少し丁寧でビジネス文書向き。",
      "examples": [
        {
          "en": "We need to decide whether to accept the order.",
          "ja": "私たちはその注文を受けるかどうか決める必要があります。",
          "focus": "decide"
        },
        {
          "en": "Please decide if you can join the meeting.",
          "ja": "会議に参加できるか決めてください。",
          "focus": "decide"
        },
        {
          "en": "The manager decided whether the project should continue.",
          "ja": "マネージャーは案件を継続すべきか判断しました。",
          "focus": "decided"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "decide-against",
      "title": "⑤ 〜しないことに決める",
      "pattern": "decide against + 名詞 / -ing",
      "transitivity": "自動詞に近い使い方",
      "structure": "仕事でよく使う自然な型",
      "image": "検討した結果、やらない方向に決める。",
      "point": "against は選択肢から外すイメージ。",
      "examples": [
        {
          "en": "We decided against changing the supplier this month.",
          "ja": "私たちは今月、仕入先を変更しないことに決めました。",
          "focus": "decided against"
        },
        {
          "en": "The client decided against the expensive option.",
          "ja": "顧客は高額な選択肢を選ばないことにしました。",
          "focus": "decided against"
        },
        {
          "en": "They decided against launching the campaign this week.",
          "ja": "彼らは今週キャンペーンを開始しないことに決めました。",
          "focus": "decided against"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "decide-by",
      "title": "⑥ 期限までに決める",
      "pattern": "decide by + 日時",
      "transitivity": "自動詞に近い使い方",
      "structure": "仕事でよく使う自然な型",
      "image": "期限までに結論を出す。",
      "point": "by の後ろに決定期限を置く。",
      "examples": [
        {
          "en": "Please decide by tomorrow morning.",
          "ja": "明日の朝までに決めてください。",
          "focus": "decide"
        },
        {
          "en": "We must decide by the end of the week.",
          "ja": "私たちは今週中に決めなければなりません。",
          "focus": "decide"
        },
        {
          "en": "The customer decided by the deadline.",
          "ja": "顧客は期限までに決定しました。",
          "focus": "decided"
        }
      ],
      "dailyExamples": []
    }
  ],
  "collocations": [
    {
      "phrase": "make a decision",
      "ja": "決定する",
      "image": "decision を make して、決定を形にする。",
      "pattern": "make a decision",
      "examples": [
        {
          "en": "We need to make a decision today.",
          "ja": "私たちは今日決定する必要があります。",
          "focus": "make a decision"
        },
        {
          "en": "The client made a decision after the presentation.",
          "ja": "顧客はプレゼン後に決定しました。",
          "focus": "made a decision"
        },
        {
          "en": "Please make a decision before the deadline.",
          "ja": "期限前に決定してください。",
          "focus": "make a decision"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "final decision",
      "ja": "最終決定",
      "image": "最終的に変わらない決定。",
      "pattern": "final decision",
      "examples": [
        {
          "en": "We are waiting for the final decision.",
          "ja": "私たちは最終決定を待っています。",
          "focus": "final decision"
        },
        {
          "en": "The final decision will be made next week.",
          "ja": "最終決定は来週行われます。",
          "focus": "final decision"
        },
        {
          "en": "Please share the final decision with the team.",
          "ja": "最終決定をチームに共有してください。",
          "focus": "final decision"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "business decision",
      "ja": "業務上の判断・経営判断",
      "image": "仕事上の理由で行う判断。",
      "pattern": "business decision",
      "examples": [
        {
          "en": "This is a business decision, not a personal issue.",
          "ja": "これは個人的な問題ではなく業務上の判断です。",
          "focus": "business decision"
        },
        {
          "en": "Management explained the business decision to the staff.",
          "ja": "経営陣はその業務上の判断を社員に説明しました。",
          "focus": "business decision"
        },
        {
          "en": "We need a clear business decision before moving forward.",
          "ja": "進める前に明確な業務判断が必要です。",
          "focus": "business decision"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "decide the next step",
      "ja": "次の対応を決める",
      "image": "次に何をするか決める。",
      "pattern": "decide the next step",
      "examples": [
        {
          "en": "Let's decide the next step after reviewing the report.",
          "ja": "レポートを確認した後、次の対応を決めましょう。",
          "focus": "decide the next step"
        },
        {
          "en": "We decided the next step during the meeting.",
          "ja": "私たちは会議中に次の対応を決めました。",
          "focus": "decided the next step"
        },
        {
          "en": "Please decide the next step with the customer.",
          "ja": "顧客と次の対応を決めてください。",
          "focus": "decide the next step"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "decide the schedule",
      "ja": "スケジュールを決める",
      "image": "日程を決定する。",
      "pattern": "decide the schedule",
      "examples": [
        {
          "en": "We need to decide the installation schedule.",
          "ja": "私たちは施工スケジュールを決める必要があります。",
          "focus": "decide the installation schedule"
        },
        {
          "en": "The team decided the schedule for the training.",
          "ja": "チームは研修スケジュールを決めました。",
          "focus": "decided the schedule"
        },
        {
          "en": "Please decide the schedule after checking availability.",
          "ja": "空き状況を確認してからスケジュールを決めてください。",
          "focus": "decide the schedule"
        }
      ],
      "dailyExamples": []
    }
  ],
  "phrasalVerbs": [
    {
      "phrase": "decide on",
      "ja": "〜に決める",
      "image": "候補の中から対象を決める。",
      "pattern": "decide on + 名詞",
      "examples": [
        {
          "en": "We decided on the final color.",
          "ja": "私たちは最終色に決めました。",
          "focus": "decided on"
        },
        {
          "en": "Please decide on the delivery date.",
          "ja": "納品日を決めてください。",
          "focus": "decide on"
        },
        {
          "en": "They decided on a new sales strategy.",
          "ja": "彼らは新しい営業戦略に決めました。",
          "focus": "decided on"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "decide between",
      "ja": "〜のどちらかを決める",
      "image": "2つの選択肢から決める。",
      "pattern": "decide between A and B",
      "examples": [
        {
          "en": "We need to decide between these two suppliers.",
          "ja": "私たちはこの2社の仕入先のどちらかを決める必要があります。",
          "focus": "decide between"
        },
        {
          "en": "The client decided between the standard model and the premium model.",
          "ja": "顧客は標準モデルと上位モデルのどちらかを決めました。",
          "focus": "decided between"
        },
        {
          "en": "Please decide between Monday and Tuesday.",
          "ja": "月曜日と火曜日のどちらかを決めてください。",
          "focus": "decide between"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "decide against",
      "ja": "〜しないことに決める",
      "image": "選択肢から外す。",
      "pattern": "decide against + 名詞 / -ing",
      "examples": [
        {
          "en": "We decided against the rush order.",
          "ja": "私たちは急ぎ注文を受けないことに決めました。",
          "focus": "decided against"
        },
        {
          "en": "The customer decided against changing the design.",
          "ja": "顧客はデザインを変更しないことに決めました。",
          "focus": "decided against"
        },
        {
          "en": "They decided against hiring another vendor.",
          "ja": "彼らは別の業者を採用しないことに決めました。",
          "focus": "decided against"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "decide for",
      "ja": "〜に有利な決定をする",
      "image": "人や案に対して決める。頻度は低めだが判断表現で使う。",
      "pattern": "decide for + 人・案",
      "examples": [
        {
          "en": "The committee decided for the safer option.",
          "ja": "委員会はより安全な選択肢を選びました。",
          "focus": "decided for"
        },
        {
          "en": "The customer decided for our proposal after the demo.",
          "ja": "顧客はデモの後、私たちの提案に決めました。",
          "focus": "decided for"
        },
        {
          "en": "Management decided for a long-term solution.",
          "ja": "経営陣は長期的な解決策を選びました。",
          "focus": "decided for"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "decide after",
      "ja": "〜の後に決める",
      "image": "必要な確認や検討の後に決める。",
      "pattern": "decide after + 名詞 / -ing",
      "examples": [
        {
          "en": "We will decide after checking the cost.",
          "ja": "費用を確認した後で決めます。",
          "focus": "decide after"
        },
        {
          "en": "The client decided after reviewing the samples.",
          "ja": "顧客はサンプル確認後に決定しました。",
          "focus": "decided after"
        },
        {
          "en": "Please decide after discussing it with your team.",
          "ja": "チームと相談した後で決めてください。",
          "focus": "decide after"
        }
      ],
      "dailyExamples": []
    }
  ]
},
  {
  "id": "explain",
  "rank": 54,
  "word": "EXPLAIN",
  "ipa": "/ɪkˈspleɪn/",
  "kana": "イクスプレイン",
  "syllable": "ex-plain",
  "transitivity": "他動詞",
  "importance": "★★★★☆ 重要",
  "core": "相手が理解できるように、理由・状況・手順をほどいて伝える",
  "coreDetail": "EXPLAINは、複雑な内容を分かりやすくして相手に伝える動詞です。仕事では理由、手順、仕様、遅延、変更点、提案内容の説明に使います。",
  "coreVisual": {
    "from": [
      "複雑な情報",
      "理由",
      "手順",
      "仕様",
      "変更点"
    ],
    "to": "相手が理解できる説明",
    "label": "分かりにくい → 分かる"
  },
  "meanings": [
    {
      "id": "explain-content",
      "title": "① 内容を説明する",
      "pattern": "explain + 内容",
      "transitivity": "他動詞",
      "structure": "仕事でよく使う自然な型",
      "image": "内容を相手に分かるように伝える。",
      "point": "explain の目的語は人ではなく内容。人には to を使う。",
      "examples": [
        {
          "en": "I explained the reason to the client.",
          "ja": "私は顧客に理由を説明しました。",
          "focus": "explained"
        },
        {
          "en": "Please explain the process to the new staff.",
          "ja": "新しいスタッフに手順を説明してください。",
          "focus": "explain"
        },
        {
          "en": "We explained the quotation in the meeting.",
          "ja": "私たちは会議で見積内容を説明しました。",
          "focus": "explained"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "explain-to",
      "title": "② 人に説明する",
      "pattern": "explain + 内容 + to + 人",
      "transitivity": "他動詞",
      "structure": "仕事でよく使う自然な型",
      "image": "説明する相手を to の後ろに置く。",
      "point": "explain him ではなく explain it to him が自然。",
      "examples": [
        {
          "en": "Can you explain the issue to the customer?",
          "ja": "顧客にその問題を説明してもらえますか？",
          "focus": "explain"
        },
        {
          "en": "She explained the schedule change to the team.",
          "ja": "彼女はチームにスケジュール変更を説明しました。",
          "focus": "explained"
        },
        {
          "en": "We need to explain the new rule to all members.",
          "ja": "私たちは全メンバーに新しいルールを説明する必要があります。",
          "focus": "explain"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "explain-that",
      "title": "③ 〜だと説明する",
      "pattern": "explain that + 文",
      "transitivity": "他動詞",
      "structure": "仕事でよく使う自然な型",
      "image": "状況や理由を文で説明する。",
      "point": "that節で説明内容を具体的に言える。",
      "examples": [
        {
          "en": "He explained that the delivery was delayed.",
          "ja": "彼は納品が遅れていると説明しました。",
          "focus": "explained"
        },
        {
          "en": "The supplier explained that the material was out of stock.",
          "ja": "仕入先は材料が欠品していると説明しました。",
          "focus": "explained"
        },
        {
          "en": "I explained that we needed more time.",
          "ja": "私はさらに時間が必要だと説明しました。",
          "focus": "explained"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "explain-how",
      "title": "④ 方法・手順を説明する",
      "pattern": "explain how to do",
      "transitivity": "他動詞",
      "structure": "仕事でよく使う自然な型",
      "image": "やり方を順番に説明する。",
      "point": "how to の後ろに作業や操作を置く。",
      "examples": [
        {
          "en": "Please explain how to use the system.",
          "ja": "そのシステムの使い方を説明してください。",
          "focus": "explain"
        },
        {
          "en": "The engineer explained how to install the product.",
          "ja": "技術者はその製品の設置方法を説明しました。",
          "focus": "explained"
        },
        {
          "en": "We explained how to submit the request online.",
          "ja": "私たちはオンラインで依頼を提出する方法を説明しました。",
          "focus": "explained"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "explain-why",
      "title": "⑤ 理由を説明する",
      "pattern": "explain why + 文",
      "transitivity": "他動詞",
      "structure": "仕事でよく使う自然な型",
      "image": "なぜそうなったかを説明する。",
      "point": "クレーム対応や遅延説明でよく使う。",
      "examples": [
        {
          "en": "Please explain why the shipment was delayed.",
          "ja": "出荷が遅れた理由を説明してください。",
          "focus": "explain"
        },
        {
          "en": "We explained why the price had changed.",
          "ja": "私たちは価格が変更された理由を説明しました。",
          "focus": "explained"
        },
        {
          "en": "The manager explained why the decision was necessary.",
          "ja": "マネージャーはその決定が必要だった理由を説明しました。",
          "focus": "explained"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "explain-clearly",
      "title": "⑥ 分かりやすく説明する",
      "pattern": "explain clearly / simply",
      "transitivity": "他動詞",
      "structure": "仕事でよく使う自然な型",
      "image": "相手に伝わるように簡単に説明する。",
      "point": "clearly, simply, briefly など副詞と相性が良い。",
      "examples": [
        {
          "en": "Please explain the point clearly.",
          "ja": "要点を分かりやすく説明してください。",
          "focus": "explain"
        },
        {
          "en": "She explained the problem simply for the customer.",
          "ja": "彼女は顧客向けに問題を簡単に説明しました。",
          "focus": "explained"
        },
        {
          "en": "We need to explain the benefits briefly.",
          "ja": "私たちはメリットを簡潔に説明する必要があります。",
          "focus": "explain"
        }
      ],
      "dailyExamples": []
    }
  ],
  "collocations": [
    {
      "phrase": "explain the reason",
      "ja": "理由を説明する",
      "image": "理由を分かる形で伝える。",
      "pattern": "explain the reason",
      "examples": [
        {
          "en": "Please explain the reason for the delay.",
          "ja": "遅延の理由を説明してください。",
          "focus": "explain the reason"
        },
        {
          "en": "I explained the reason to the customer by email.",
          "ja": "私はメールで顧客に理由を説明しました。",
          "focus": "explained the reason"
        },
        {
          "en": "We need to explain the reason before asking for approval.",
          "ja": "承認を求める前に理由を説明する必要があります。",
          "focus": "explain the reason"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "explain the process",
      "ja": "手順を説明する",
      "image": "作業の流れを説明する。",
      "pattern": "explain the process",
      "examples": [
        {
          "en": "The trainer explained the process step by step.",
          "ja": "研修担当者は手順を段階的に説明しました。",
          "focus": "explained the process"
        },
        {
          "en": "Please explain the process to the new member.",
          "ja": "新メンバーに手順を説明してください。",
          "focus": "explain the process"
        },
        {
          "en": "We explained the order process to the client.",
          "ja": "私たちは顧客に注文手順を説明しました。",
          "focus": "explained the order process"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "explain the difference",
      "ja": "違いを説明する",
      "image": "2つのものの違いを説明する。",
      "pattern": "explain the difference",
      "examples": [
        {
          "en": "Can you explain the difference between these two models?",
          "ja": "この2つのモデルの違いを説明してもらえますか？",
          "focus": "explain the difference"
        },
        {
          "en": "I explained the difference in price.",
          "ja": "私は価格の違いを説明しました。",
          "focus": "explained the difference"
        },
        {
          "en": "We need to explain the difference clearly to the customer.",
          "ja": "私たちは顧客に違いを明確に説明する必要があります。",
          "focus": "explain the difference"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "explain the situation",
      "ja": "状況を説明する",
      "image": "現在の状況を相手に伝える。",
      "pattern": "explain the situation",
      "examples": [
        {
          "en": "Please explain the situation to the sales manager.",
          "ja": "営業マネージャーに状況を説明してください。",
          "focus": "explain the situation"
        },
        {
          "en": "She explained the situation before the meeting started.",
          "ja": "彼女は会議が始まる前に状況を説明しました。",
          "focus": "explained the situation"
        },
        {
          "en": "We explained the situation honestly to the client.",
          "ja": "私たちは顧客に状況を正直に説明しました。",
          "focus": "explained the situation"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "explain in detail",
      "ja": "詳しく説明する",
      "image": "細かい点まで説明する。",
      "pattern": "explain in detail",
      "examples": [
        {
          "en": "Please explain the cost breakdown in detail.",
          "ja": "費用内訳を詳しく説明してください。",
          "focus": "explain"
        },
        {
          "en": "The engineer explained the installation method in detail.",
          "ja": "技術者は設置方法を詳しく説明しました。",
          "focus": "explained"
        },
        {
          "en": "We should explain the risks in detail.",
          "ja": "私たちはリスクを詳しく説明するべきです。",
          "focus": "explain"
        }
      ],
      "dailyExamples": []
    }
  ],
  "phrasalVerbs": [
    {
      "phrase": "explain to",
      "ja": "〜に説明する",
      "image": "説明する相手を示す。",
      "pattern": "explain + 内容 + to + 人",
      "examples": [
        {
          "en": "Please explain the change to the customer.",
          "ja": "顧客に変更点を説明してください。",
          "focus": "explain"
        },
        {
          "en": "I explained the issue to my manager.",
          "ja": "私は上司にその問題を説明しました。",
          "focus": "explained"
        },
        {
          "en": "We need to explain the new process to the team.",
          "ja": "私たちはチームに新しい手順を説明する必要があります。",
          "focus": "explain"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "explain about",
      "ja": "〜について説明する",
      "image": "話題について説明する。内容を目的語にする explain + 内容 より少し広い話題説明。",
      "pattern": "explain about + 話題",
      "examples": [
        {
          "en": "The trainer explained about the new system.",
          "ja": "研修担当者は新しいシステムについて説明しました。",
          "focus": "explained about"
        },
        {
          "en": "Can you explain about the payment process?",
          "ja": "支払い手順について説明してもらえますか？",
          "focus": "explain about"
        },
        {
          "en": "We explained about the product warranty.",
          "ja": "私たちは製品保証について説明しました。",
          "focus": "explained about"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "explain with",
      "ja": "〜を使って説明する",
      "image": "資料や例を使って説明する。",
      "pattern": "explain with + 資料・例",
      "examples": [
        {
          "en": "Please explain with a simple example.",
          "ja": "簡単な例を使って説明してください。",
          "focus": "explain with"
        },
        {
          "en": "She explained the issue with a diagram.",
          "ja": "彼女は図を使ってその問題を説明しました。",
          "focus": "explained"
        },
        {
          "en": "We explained the process with slides.",
          "ja": "私たちはスライドを使って手順を説明しました。",
          "focus": "explained"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "explain in",
      "ja": "〜で説明する",
      "image": "言語・形式・方法を表す。",
      "pattern": "explain in + 言語・方法",
      "examples": [
        {
          "en": "Can you explain it in simple English?",
          "ja": "それを簡単な英語で説明できますか？",
          "focus": "explain"
        },
        {
          "en": "The manual explains the process in detail.",
          "ja": "そのマニュアルは手順を詳しく説明しています。",
          "focus": "explains"
        },
        {
          "en": "Please explain the point in one sentence.",
          "ja": "要点を一文で説明してください。",
          "focus": "explain"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "explain away",
      "ja": "言い訳してごまかす",
      "image": "問題やミスを説明で片付けようとする。仕事では注意表現。",
      "pattern": "explain away + 問題・ミス",
      "examples": [
        {
          "en": "We cannot explain away the delay without a clear plan.",
          "ja": "明確な計画なしに遅延を説明だけでごまかすことはできません。",
          "focus": "explain away"
        },
        {
          "en": "The supplier tried to explain away the quality issue.",
          "ja": "仕入先は品質問題を説明でごまかそうとしました。",
          "focus": "explain away"
        },
        {
          "en": "Do not explain away the mistake; propose a solution.",
          "ja": "ミスをごまかさず、解決策を提案してください。",
          "focus": "explain away"
        }
      ],
      "dailyExamples": []
    }
  ]
},
  {
  "id": "improve",
  "rank": 55,
  "word": "IMPROVE",
  "ipa": "/ɪmˈpruːv/",
  "kana": "インプルーヴ",
  "syllable": "im-prove",
  "transitivity": "他動詞・自動詞",
  "importance": "★★★★☆ 重要",
  "core": "今より良い状態へ進める・良くなる",
  "coreDetail": "improve は、品質・手順・対応・数字・関係・スキルなどを、今より良い状態にする／良くなる動詞です。仕事では改善活動・数値改善・顧客対応・品質向上でよく使います。",
  "coreVisual": {
    "from": [
      "今の状態",
      "課題",
      "不足",
      "遅れ"
    ],
    "to": "より良い状態",
    "label": "現状 → 改善された状態"
  },
  "meanings": [
    {
      "id": "improve-process",
      "title": "① 手順・業務を改善する",
      "pattern": "improve + 手順・業務・仕組み",
      "transitivity": "他動詞",
      "structure": "S + improve + O",
      "image": "仕事の流れを今より良くする。",
      "point": "process, workflow, system などと相性が良い。改善対象を目的語に置く。",
      "examples": [
        {
          "en": "We need to improve the approval process.",
          "ja": "私たちは承認プロセスを改善する必要があります。",
          "focus": "improve",
          "object": "the approval process"
        },
        {
          "en": "The new checklist improved our workflow.",
          "ja": "新しいチェックリストで私たちの業務フローが改善しました。",
          "focus": "improved",
          "object": "our workflow"
        },
        {
          "en": "This system will improve how we handle orders.",
          "ja": "このシステムは受注対応の方法を改善します。",
          "focus": "improve",
          "object": "how we handle orders"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "improve-quality",
      "title": "② 品質・精度を高める",
      "pattern": "improve + quality / accuracy",
      "transitivity": "他動詞",
      "structure": "S + improve + O",
      "image": "品質や精度を一段上げる。",
      "point": "quality, accuracy, performance など仕事で重要な名詞と使う。",
      "examples": [
        {
          "en": "We improved the quality of the final report.",
          "ja": "私たちは最終報告書の品質を高めました。",
          "focus": "improved",
          "object": "the quality of the final report"
        },
        {
          "en": "Please improve the accuracy of the estimate.",
          "ja": "見積の精度を高めてください。",
          "focus": "improve",
          "object": "the accuracy of the estimate"
        },
        {
          "en": "The update improved the performance of the app.",
          "ja": "その更新でアプリの性能が向上しました。",
          "focus": "improved",
          "object": "the performance of the app"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "improve-results",
      "title": "③ 数値・結果を改善する",
      "pattern": "improve + results / sales / rate",
      "transitivity": "他動詞・自動詞",
      "structure": "S + improve + O / S + improve",
      "image": "数字や成果が良くなる。",
      "point": "sales, score, rate, result など、数値で見える改善に使う。",
      "examples": [
        {
          "en": "We improved our response rate this quarter.",
          "ja": "私たちは今四半期の返信率を改善しました。",
          "focus": "improved",
          "object": "our response rate"
        },
        {
          "en": "Sales improved after the new campaign.",
          "ja": "新しいキャンペーン後に売上が改善しました。",
          "focus": "improved"
        },
        {
          "en": "The team improved the delivery success rate.",
          "ja": "チームは納品成功率を改善しました。",
          "focus": "improved",
          "object": "the delivery success rate"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "improve-skills",
      "title": "④ スキル・知識を伸ばす",
      "pattern": "improve + skill / knowledge",
      "transitivity": "他動詞",
      "structure": "S + improve + O",
      "image": "人の能力を今より使える状態にする。",
      "point": "English, skills, knowledge など学習・研修文脈で使う。",
      "examples": [
        {
          "en": "I want to improve my business English.",
          "ja": "私はビジネス英語を上達させたいです。",
          "focus": "improve",
          "object": "my business English"
        },
        {
          "en": "The training helped us improve our product knowledge.",
          "ja": "その研修で私たちは製品知識を高めることができました。",
          "focus": "improve",
          "object": "our product knowledge"
        },
        {
          "en": "She improved her presentation skills through practice.",
          "ja": "彼女は練習を通じてプレゼン能力を高めました。",
          "focus": "improved",
          "object": "her presentation skills"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "improve-service",
      "title": "⑤ サービス・対応を改善する",
      "pattern": "improve + service / support / response",
      "transitivity": "他動詞",
      "structure": "S + improve + O",
      "image": "顧客や社内への対応をより良くする。",
      "point": "customer service, support, response time などに使う。",
      "examples": [
        {
          "en": "We improved customer support by adding a new FAQ.",
          "ja": "私たちは新しいFAQを追加して顧客サポートを改善しました。",
          "focus": "improved",
          "object": "customer support"
        },
        {
          "en": "Please improve the response time for urgent requests.",
          "ja": "緊急依頼への対応時間を改善してください。",
          "focus": "improve",
          "object": "the response time"
        },
        {
          "en": "The team improved the follow-up process after meetings.",
          "ja": "チームは会議後のフォロー手順を改善しました。",
          "focus": "improved",
          "object": "the follow-up process"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "improve-relationship",
      "title": "⑥ 関係・状況を良くする",
      "pattern": "improve + relationship / situation",
      "transitivity": "他動詞・自動詞",
      "structure": "S + improve + O / S + improve",
      "image": "悪くない状態をさらに良くする、または問題のある状態を良くする。",
      "point": "relationship, situation, communication など抽象的な対象にも使える。",
      "examples": [
        {
          "en": "Regular updates improved the relationship with the client.",
          "ja": "定期的な共有で顧客との関係が改善しました。",
          "focus": "improved",
          "object": "the relationship with the client"
        },
        {
          "en": "The situation improved after we changed the schedule.",
          "ja": "予定を変更した後、状況は改善しました。",
          "focus": "improved"
        },
        {
          "en": "Clear rules improved communication between the teams.",
          "ja": "明確なルールでチーム間のコミュニケーションが改善しました。",
          "focus": "improved",
          "object": "communication between the teams"
        }
      ],
      "dailyExamples": []
    }
  ],
  "collocations": [
    {
      "phrase": "improve quality",
      "ja": "品質を改善する",
      "image": "製品・資料・サービスの質を上げる。",
      "pattern": "improve quality",
      "examples": [
        {
          "en": "We must improve quality before the final delivery.",
          "ja": "最終納品前に品質を改善しなければなりません。",
          "focus": "improve quality"
        },
        {
          "en": "The new inspection process improved quality across the team.",
          "ja": "新しい検査手順でチーム全体の品質が改善しました。",
          "focus": "improved quality"
        },
        {
          "en": "Please improve quality without increasing the cost.",
          "ja": "コストを増やさずに品質を改善してください。",
          "focus": "improve quality"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "improve efficiency",
      "ja": "効率を改善する",
      "image": "時間・手間・コストを減らして効率を上げる。",
      "pattern": "improve efficiency",
      "examples": [
        {
          "en": "This tool will improve efficiency in daily reporting.",
          "ja": "このツールは日々の報告業務の効率を改善します。",
          "focus": "improve efficiency"
        },
        {
          "en": "We improved efficiency by reducing manual work.",
          "ja": "手作業を減らして効率を改善しました。",
          "focus": "improved efficiency"
        },
        {
          "en": "The manager asked us to improve efficiency this month.",
          "ja": "マネージャーは今月、効率改善を求めました。",
          "focus": "improve efficiency"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "improve communication",
      "ja": "コミュニケーションを改善する",
      "image": "伝達不足や認識違いを減らす。",
      "pattern": "improve communication",
      "examples": [
        {
          "en": "We need to improve communication between sales and production.",
          "ja": "営業と製造の間のコミュニケーションを改善する必要があります。",
          "focus": "improve communication"
        },
        {
          "en": "Daily updates improved communication with the client.",
          "ja": "毎日の共有で顧客とのコミュニケーションが改善しました。",
          "focus": "improved communication"
        },
        {
          "en": "Clear meeting notes can improve communication.",
          "ja": "明確な議事メモはコミュニケーションを改善できます。",
          "focus": "improve communication"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "improve skills",
      "ja": "スキルを伸ばす",
      "image": "練習・研修で能力を高める。",
      "pattern": "improve skills",
      "examples": [
        {
          "en": "I joined the workshop to improve my sales skills.",
          "ja": "私は営業スキルを伸ばすために研修に参加しました。",
          "focus": "improve my sales skills"
        },
        {
          "en": "The team improved their negotiation skills through role-play.",
          "ja": "チームはロールプレイを通じて交渉スキルを伸ばしました。",
          "focus": "improved their negotiation skills"
        },
        {
          "en": "We should improve skills before handling larger projects.",
          "ja": "より大きな案件を担当する前にスキルを伸ばすべきです。",
          "focus": "improve skills"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "improve results",
      "ja": "結果を改善する",
      "image": "売上・成績・成果を良くする。",
      "pattern": "improve results",
      "examples": [
        {
          "en": "We changed the sales approach to improve results.",
          "ja": "結果を改善するために営業方法を変えました。",
          "focus": "improve results"
        },
        {
          "en": "The new process improved results within two months.",
          "ja": "新しい手順で2か月以内に結果が改善しました。",
          "focus": "improved results"
        },
        {
          "en": "Please review the data and suggest how to improve results.",
          "ja": "データを確認し、結果を改善する方法を提案してください。",
          "focus": "improve results"
        }
      ],
      "dailyExamples": []
    }
  ],
  "phrasalVerbs": [
    {
      "phrase": "improve on",
      "ja": "〜をさらに上回る・改善する",
      "image": "既存のものより良くする。",
      "pattern": "improve on + 名詞",
      "examples": [
        {
          "en": "We need to improve on last year's proposal.",
          "ja": "私たちは昨年の提案をさらに改善する必要があります。",
          "focus": "improve on"
        },
        {
          "en": "The new model improves on the previous design.",
          "ja": "新モデルは前のデザインをさらに改善しています。",
          "focus": "improves on"
        },
        {
          "en": "Can we improve on this process before launch?",
          "ja": "リリース前にこの手順をさらに改善できますか？",
          "focus": "improve on"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "improve upon",
      "ja": "〜を改良する",
      "image": "improve on より少し硬い表現。",
      "pattern": "improve upon + 名詞",
      "examples": [
        {
          "en": "The team improved upon the original plan.",
          "ja": "チームは当初の計画を改良しました。",
          "focus": "improved upon"
        },
        {
          "en": "We should improve upon the current quotation format.",
          "ja": "現在の見積書フォーマットを改良すべきです。",
          "focus": "improve upon"
        },
        {
          "en": "This update improves upon the old workflow.",
          "ja": "この更新は古い業務フローを改良しています。",
          "focus": "improves upon"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "improve by",
      "ja": "〜分改善する",
      "image": "割合・数値を使って改善幅を示す。",
      "pattern": "improve by + 数値",
      "examples": [
        {
          "en": "Our response time improved by 20 percent.",
          "ja": "対応時間は20パーセント改善しました。",
          "focus": "improved by"
        },
        {
          "en": "We want to improve productivity by ten percent.",
          "ja": "生産性を10パーセント改善したいです。",
          "focus": "improve productivity by"
        },
        {
          "en": "The delivery rate improved by five points.",
          "ja": "納品率は5ポイント改善しました。",
          "focus": "improved by"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "improve with",
      "ja": "〜によって良くなる",
      "image": "道具・経験・練習で良くなる。",
      "pattern": "improve with + 名詞",
      "examples": [
        {
          "en": "The report improved with clearer charts.",
          "ja": "より分かりやすいグラフで報告書が良くなりました。",
          "focus": "improved with"
        },
        {
          "en": "Our service improved with customer feedback.",
          "ja": "顧客のフィードバックによってサービスが改善しました。",
          "focus": "improved with"
        },
        {
          "en": "The process will improve with more accurate data.",
          "ja": "より正確なデータでその手順は改善します。",
          "focus": "improve with"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "improve over",
      "ja": "以前より改善する",
      "image": "過去の状態と比べて良くなる。",
      "pattern": "improve over + 期間・比較対象",
      "examples": [
        {
          "en": "Sales improved over the last quarter.",
          "ja": "売上は前四半期にかけて改善しました。",
          "focus": "improved over"
        },
        {
          "en": "The team's response improved over time.",
          "ja": "チームの対応は時間とともに改善しました。",
          "focus": "improved over"
        },
        {
          "en": "Quality should improve over the next few months.",
          "ja": "品質は今後数か月で改善するはずです。",
          "focus": "improve over"
        }
      ],
      "dailyExamples": []
    }
  ]
},
  {
  "id": "manage",
  "rank": 56,
  "word": "MANAGE",
  "ipa": "/ˈmænɪdʒ/",
  "kana": "マネージ",
  "syllable": "man-age",
  "transitivity": "他動詞・自動詞",
  "importance": "★★★★☆ 重要",
  "core": "状況・人・仕事をコントロールして前に進める",
  "coreDetail": "manage は、単に管理するだけでなく、限られた時間・人数・条件の中で何とか対応する感覚もあります。仕事では案件管理、チーム管理、時間管理、問題対応でよく使います。",
  "coreVisual": {
    "from": [
      "人",
      "案件",
      "時間",
      "問題",
      "予算"
    ],
    "to": "コントロールして進める",
    "label": "ばらばらな要素 → 管理された状態"
  },
  "meanings": [
    {
      "id": "manage-project",
      "title": "① 案件・業務を管理する",
      "pattern": "manage + 案件・業務",
      "transitivity": "他動詞",
      "structure": "S + manage + O",
      "image": "案件や業務を動く状態に保つ。",
      "point": "project, task, account, operation など仕事の対象に使う。",
      "examples": [
        {
          "en": "I manage several projects at the same time.",
          "ja": "私は複数の案件を同時に管理しています。",
          "focus": "manage",
          "object": "several projects"
        },
        {
          "en": "She manages the daily operations of the team.",
          "ja": "彼女はチームの日常業務を管理しています。",
          "focus": "manages",
          "object": "the daily operations"
        },
        {
          "en": "We need someone to manage this account.",
          "ja": "この取引先を管理する担当者が必要です。",
          "focus": "manage",
          "object": "this account"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "manage-people",
      "title": "② 人・チームを管理する",
      "pattern": "manage + 人・チーム",
      "transitivity": "他動詞",
      "structure": "S + manage + O",
      "image": "人やチームの動きをまとめる。",
      "point": "team, staff, members などに使う。",
      "examples": [
        {
          "en": "He manages a team of five salespeople.",
          "ja": "彼は5人の営業チームを管理しています。",
          "focus": "manages",
          "object": "a team of five salespeople"
        },
        {
          "en": "We need to manage the new members carefully.",
          "ja": "新しいメンバーを丁寧に管理する必要があります。",
          "focus": "manage",
          "object": "the new members"
        },
        {
          "en": "The leader managed the team during the busy season.",
          "ja": "リーダーは繁忙期にチームを管理しました。",
          "focus": "managed",
          "object": "the team"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "manage-time",
      "title": "③ 時間・予定をやりくりする",
      "pattern": "manage + time / schedule",
      "transitivity": "他動詞",
      "structure": "S + manage + O",
      "image": "限られた時間をうまく使う。",
      "point": "time, schedule, workload とよく使う。",
      "examples": [
        {
          "en": "I need to manage my time better this week.",
          "ja": "今週はもっと上手く時間管理をする必要があります。",
          "focus": "manage",
          "object": "my time"
        },
        {
          "en": "Can you manage your schedule around the client visit?",
          "ja": "顧客訪問に合わせて予定を調整できますか？",
          "focus": "manage",
          "object": "your schedule"
        },
        {
          "en": "We managed the workload by sharing tasks.",
          "ja": "作業を分担して業務量をやりくりしました。",
          "focus": "managed",
          "object": "the workload"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "manage-problem",
      "title": "④ 問題・リスクに対応する",
      "pattern": "manage + problem / risk",
      "transitivity": "他動詞",
      "structure": "S + manage + O",
      "image": "問題を放置せず、被害を小さくしながら扱う。",
      "point": "risk, issue, complaint, delay などに使う。",
      "examples": [
        {
          "en": "We must manage the risk before signing the contract.",
          "ja": "契約前にリスクを管理しなければなりません。",
          "focus": "manage",
          "object": "the risk"
        },
        {
          "en": "The team managed the complaint quickly.",
          "ja": "チームはそのクレームに素早く対応しました。",
          "focus": "managed",
          "object": "the complaint"
        },
        {
          "en": "Please manage the delay and inform the client.",
          "ja": "遅延に対応し、顧客へ知らせてください。",
          "focus": "manage",
          "object": "the delay"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "manage-to-do",
      "title": "⑤ 何とか〜する",
      "pattern": "manage to do",
      "transitivity": "自動詞的表現",
      "structure": "S + manage + to do",
      "image": "難しい状況でも何とか達成する。",
      "point": "manage to finish, manage to send など成果に焦点がある。",
      "examples": [
        {
          "en": "We managed to finish the report today.",
          "ja": "私たちは今日なんとか報告書を終えることができました。",
          "focus": "managed to"
        },
        {
          "en": "She managed to get approval before the deadline.",
          "ja": "彼女は締切前になんとか承認を得ました。",
          "focus": "managed to"
        },
        {
          "en": "I managed to join the meeting on time.",
          "ja": "私はなんとか時間通りに会議へ参加できました。",
          "focus": "managed to"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "manage-without",
      "title": "⑥ 〜なしで何とかする",
      "pattern": "manage without + 名詞",
      "transitivity": "自動詞的表現",
      "structure": "S + manage + without + 名詞",
      "image": "不足がある中で対応する。",
      "point": "without extra staff, without the file など不足条件を置く。",
      "examples": [
        {
          "en": "We had to manage without extra staff.",
          "ja": "追加人員なしで何とか対応しなければなりませんでした。",
          "focus": "manage without"
        },
        {
          "en": "Can you manage without the original file?",
          "ja": "元データなしで何とか対応できますか？",
          "focus": "manage without"
        },
        {
          "en": "The team managed without overtime this month.",
          "ja": "チームは今月、残業なしで何とか対応しました。",
          "focus": "managed without"
        }
      ],
      "dailyExamples": []
    }
  ],
  "collocations": [
    {
      "phrase": "manage a project",
      "ja": "案件を管理する",
      "image": "案件の進行・期限・関係者をまとめる。",
      "pattern": "manage a project",
      "examples": [
        {
          "en": "I will manage the project from next week.",
          "ja": "来週から私がその案件を管理します。",
          "focus": "manage the project"
        },
        {
          "en": "She managed a project for a major client.",
          "ja": "彼女は大口顧客向けの案件を管理しました。",
          "focus": "managed a project"
        },
        {
          "en": "We need a clear system to manage a project like this.",
          "ja": "このような案件を管理するには明確な仕組みが必要です。",
          "focus": "manage a project"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "manage a team",
      "ja": "チームを管理する",
      "image": "メンバーの役割や作業をまとめる。",
      "pattern": "manage a team",
      "examples": [
        {
          "en": "He manages a team in the Osaka office.",
          "ja": "彼は大阪営業所のチームを管理しています。",
          "focus": "manages a team"
        },
        {
          "en": "It is difficult to manage a team remotely.",
          "ja": "リモートでチームを管理するのは難しいです。",
          "focus": "manage a team"
        },
        {
          "en": "She learned how to manage a team under pressure.",
          "ja": "彼女はプレッシャーの中でチームを管理する方法を学びました。",
          "focus": "manage a team"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "manage time",
      "ja": "時間を管理する",
      "image": "限られた時間を上手く使う。",
      "pattern": "manage time",
      "examples": [
        {
          "en": "We need to manage time carefully during the meeting.",
          "ja": "会議中は時間を慎重に管理する必要があります。",
          "focus": "manage time"
        },
        {
          "en": "Good preparation helps us manage time better.",
          "ja": "良い準備は時間管理をしやすくします。",
          "focus": "manage time"
        },
        {
          "en": "I could not manage time well today.",
          "ja": "今日は時間管理がうまくできませんでした。",
          "focus": "manage time"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "manage risk",
      "ja": "リスクを管理する",
      "image": "問題が大きくならないように先回りする。",
      "pattern": "manage risk",
      "examples": [
        {
          "en": "We need to manage risk before changing suppliers.",
          "ja": "仕入先を変更する前にリスクを管理する必要があります。",
          "focus": "manage risk"
        },
        {
          "en": "The contract helps us manage risk.",
          "ja": "その契約はリスク管理に役立ちます。",
          "focus": "manage risk"
        },
        {
          "en": "Please prepare a plan to manage risk.",
          "ja": "リスクを管理するための計画を準備してください。",
          "focus": "manage risk"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "manage expectations",
      "ja": "期待値を調整する",
      "image": "相手が期待しすぎないように現実的に伝える。",
      "pattern": "manage expectations",
      "examples": [
        {
          "en": "We should manage expectations before sharing the schedule.",
          "ja": "予定を共有する前に期待値を調整すべきです。",
          "focus": "manage expectations"
        },
        {
          "en": "Clear communication helps manage expectations.",
          "ja": "明確な伝達は期待値の調整に役立ちます。",
          "focus": "manage expectations"
        },
        {
          "en": "The sales team managed expectations during the delay.",
          "ja": "営業チームは遅延中に期待値を調整しました。",
          "focus": "managed expectations"
        }
      ],
      "dailyExamples": []
    }
  ],
  "phrasalVerbs": [
    {
      "phrase": "manage to",
      "ja": "何とか〜する",
      "image": "難しい状況でも達成する。",
      "pattern": "manage to + 動詞",
      "examples": [
        {
          "en": "We managed to send the quote before noon.",
          "ja": "正午前になんとか見積を送ることができました。",
          "focus": "managed to"
        },
        {
          "en": "Did you manage to confirm the delivery date?",
          "ja": "納期をなんとか確認できましたか？",
          "focus": "manage to"
        },
        {
          "en": "She managed to solve the issue quickly.",
          "ja": "彼女はその問題を素早く何とか解決しました。",
          "focus": "managed to"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "manage without",
      "ja": "〜なしで何とかする",
      "image": "足りないものがあっても対応する。",
      "pattern": "manage without + 名詞",
      "examples": [
        {
          "en": "We can manage without the extra sample today.",
          "ja": "今日は追加サンプルなしでも何とか対応できます。",
          "focus": "manage without"
        },
        {
          "en": "They managed without a formal meeting.",
          "ja": "彼らは正式な会議なしで何とか進めました。",
          "focus": "managed without"
        },
        {
          "en": "Can we manage without changing the design?",
          "ja": "デザインを変更せずに何とかできますか？",
          "focus": "manage without"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "manage with",
      "ja": "〜で何とかする",
      "image": "ある限られた条件や道具で対応する。",
      "pattern": "manage with + 名詞",
      "examples": [
        {
          "en": "We can manage with the current budget.",
          "ja": "現在の予算で何とか対応できます。",
          "focus": "manage with"
        },
        {
          "en": "The team managed with limited information.",
          "ja": "チームは限られた情報で何とか対応しました。",
          "focus": "managed with"
        },
        {
          "en": "Can you manage with this schedule?",
          "ja": "この予定で何とか対応できますか？",
          "focus": "manage with"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "manage through",
      "ja": "〜を乗り切る",
      "image": "難しい時期や問題を管理しながら進む。",
      "pattern": "manage through + 困難",
      "examples": [
        {
          "en": "We managed through the busy season with a small team.",
          "ja": "少人数のチームで繁忙期を乗り切りました。",
          "focus": "managed through"
        },
        {
          "en": "The company managed through the supply issue.",
          "ja": "会社は供給問題を乗り切りました。",
          "focus": "managed through"
        },
        {
          "en": "We need a plan to manage through this delay.",
          "ja": "この遅延を乗り切るための計画が必要です。",
          "focus": "manage through"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "manage up",
      "ja": "上司や上層部と上手く調整する",
      "image": "上の立場の人に必要な情報を渡して動きやすくする。",
      "pattern": "manage up",
      "examples": [
        {
          "en": "She knows how to manage up with clear reports.",
          "ja": "彼女は明確な報告で上司と上手く調整する方法を知っています。",
          "focus": "manage up"
        },
        {
          "en": "We need to manage up before the budget meeting.",
          "ja": "予算会議の前に上層部と上手く調整する必要があります。",
          "focus": "manage up"
        },
        {
          "en": "Good managers also teach their teams to manage up.",
          "ja": "良い管理者は部下にも上司との調整方法を教えます。",
          "focus": "manage up"
        }
      ],
      "dailyExamples": []
    }
  ]
},
  {
  "id": "prepare",
  "rank": 57,
  "word": "PREPARE",
  "ipa": "/prɪˈper/",
  "kana": "プリペア",
  "syllable": "pre-pare",
  "transitivity": "他動詞・自動詞",
  "importance": "★★★★☆ 重要",
  "core": "本番や必要な時に向けて、前もって整える",
  "coreDetail": "prepare は、会議・資料・見積・出張・報告などに向けて、必要なものや状態を事前に整える動詞です。仕事では prepare A と prepare for B の違いが重要です。",
  "coreVisual": {
    "from": [
      "資料",
      "情報",
      "人",
      "予定",
      "道具"
    ],
    "to": "すぐ使える状態",
    "label": "事前に整える → 本番に備える"
  },
  "meanings": [
    {
      "id": "prepare-document",
      "title": "① 資料・書類を準備する",
      "pattern": "prepare + 資料・書類",
      "transitivity": "他動詞",
      "structure": "S + prepare + O",
      "image": "必要なものを作って使える状態にする。",
      "point": "document, report, proposal, quotation など仕事の書類に使う。",
      "examples": [
        {
          "en": "I prepared the proposal yesterday.",
          "ja": "私は昨日、提案書を準備しました。",
          "focus": "prepared",
          "object": "the proposal"
        },
        {
          "en": "Please prepare the latest data for the meeting.",
          "ja": "会議用に最新版のデータを準備してください。",
          "focus": "prepare",
          "object": "the latest data"
        },
        {
          "en": "We prepared a quotation for the client.",
          "ja": "私たちは顧客向けの見積を準備しました。",
          "focus": "prepared",
          "object": "a quotation"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "prepare-for",
      "title": "② 〜に向けて準備する",
      "pattern": "prepare for + 予定・相手・出来事",
      "transitivity": "自動詞的表現",
      "structure": "S + prepare for + 名詞",
      "image": "これから来る予定や状況に備える。",
      "point": "prepare for the meeting のように、目的の出来事を for の後ろに置く。",
      "examples": [
        {
          "en": "We need to prepare for the client meeting.",
          "ja": "私たちは顧客との会議に向けて準備する必要があります。",
          "focus": "prepare for"
        },
        {
          "en": "She prepared for the presentation all morning.",
          "ja": "彼女は午前中ずっとプレゼンに向けて準備しました。",
          "focus": "prepared for"
        },
        {
          "en": "Please prepare for possible questions from the customer.",
          "ja": "顧客からの質問に備えてください。",
          "focus": "prepare for"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "prepare-someone",
      "title": "③ 人に準備させる・心構えをさせる",
      "pattern": "prepare + 人 + for + 事柄",
      "transitivity": "他動詞",
      "structure": "S + prepare + 人 + for + 名詞",
      "image": "人をある状況に対応できる状態にする。",
      "point": "新人研修・顧客説明・面談前などに使える。",
      "examples": [
        {
          "en": "The training prepared new staff for customer visits.",
          "ja": "その研修は新人を顧客訪問に備えさせました。",
          "focus": "prepared",
          "object": "new staff"
        },
        {
          "en": "We prepared the team for the product launch.",
          "ja": "私たちはチームを製品リリースに備えさせました。",
          "focus": "prepared",
          "object": "the team"
        },
        {
          "en": "The manager prepared us for a difficult negotiation.",
          "ja": "マネージャーは私たちに難しい交渉への心構えをさせました。",
          "focus": "prepared",
          "object": "us"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "prepare-to-do",
      "title": "④ 〜する準備をする",
      "pattern": "prepare to do",
      "transitivity": "自動詞的表現",
      "structure": "S + prepare + to do",
      "image": "次の行動に移れるように準備する。",
      "point": "prepare to send, prepare to explain など動作前に使う。",
      "examples": [
        {
          "en": "We prepared to send the final data.",
          "ja": "私たちは最終データを送る準備をしました。",
          "focus": "prepared to"
        },
        {
          "en": "The team prepared to explain the new process.",
          "ja": "チームは新しい手順を説明する準備をしました。",
          "focus": "prepared to"
        },
        {
          "en": "Please prepare to answer questions after the demo.",
          "ja": "デモ後の質問に答える準備をしてください。",
          "focus": "prepare to"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "prepare-meal-product",
      "title": "⑤ 商品・サンプル・現物を用意する",
      "pattern": "prepare + 商品・サンプル・現物",
      "transitivity": "他動詞",
      "structure": "S + prepare + O",
      "image": "相手に渡す物や確認用の現物をそろえる。",
      "point": "sample, product, package, materials などに使う。",
      "examples": [
        {
          "en": "Please prepare the samples for tomorrow's visit.",
          "ja": "明日の訪問用にサンプルを用意してください。",
          "focus": "prepare",
          "object": "the samples"
        },
        {
          "en": "We prepared the materials before the site check.",
          "ja": "現場確認前に資材を用意しました。",
          "focus": "prepared",
          "object": "the materials"
        },
        {
          "en": "The warehouse prepared the products for shipment.",
          "ja": "倉庫は出荷用の商品を用意しました。",
          "focus": "prepared",
          "object": "the products"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "prepare-plan",
      "title": "⑥ 計画・体制を整える",
      "pattern": "prepare + plan / schedule / backup",
      "transitivity": "他動詞",
      "structure": "S + prepare + O",
      "image": "問題が起きないように事前に計画や体制を整える。",
      "point": "plan, schedule, backup, checklist などと使う。",
      "examples": [
        {
          "en": "We prepared a backup plan for the delivery delay.",
          "ja": "納品遅延に備えて代替案を準備しました。",
          "focus": "prepared",
          "object": "a backup plan"
        },
        {
          "en": "Please prepare the schedule by Friday.",
          "ja": "金曜日までに予定表を準備してください。",
          "focus": "prepare",
          "object": "the schedule"
        },
        {
          "en": "The team prepared a checklist for the installation.",
          "ja": "チームは施工用のチェックリストを準備しました。",
          "focus": "prepared",
          "object": "a checklist"
        }
      ],
      "dailyExamples": []
    }
  ],
  "collocations": [
    {
      "phrase": "prepare a document",
      "ja": "書類を準備する",
      "image": "提出・共有できる状態にする。",
      "pattern": "prepare a document",
      "examples": [
        {
          "en": "Please prepare a document for the client meeting.",
          "ja": "顧客会議用の書類を準備してください。",
          "focus": "prepare a document"
        },
        {
          "en": "I prepared a document that explains the changes.",
          "ja": "変更点を説明する書類を準備しました。",
          "focus": "prepared a document"
        },
        {
          "en": "We need to prepare a document before asking for approval.",
          "ja": "承認を求める前に書類を準備する必要があります。",
          "focus": "prepare a document"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "prepare a proposal",
      "ja": "提案書を準備する",
      "image": "顧客や社内向けの提案を作る。",
      "pattern": "prepare a proposal",
      "examples": [
        {
          "en": "We prepared a proposal for the new project.",
          "ja": "新しい案件向けの提案書を準備しました。",
          "focus": "prepared a proposal"
        },
        {
          "en": "Please prepare a proposal with two options.",
          "ja": "2つの選択肢を入れた提案書を準備してください。",
          "focus": "prepare a proposal"
        },
        {
          "en": "The sales team prepared a proposal for next week's meeting.",
          "ja": "営業チームは来週の会議向けに提案書を準備しました。",
          "focus": "prepared a proposal"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "prepare for a meeting",
      "ja": "会議に向けて準備する",
      "image": "議題・資料・質問への準備をする。",
      "pattern": "prepare for a meeting",
      "examples": [
        {
          "en": "I need thirty minutes to prepare for a meeting.",
          "ja": "会議に向けて準備するために30分必要です。",
          "focus": "prepare for a meeting"
        },
        {
          "en": "We prepared for a meeting with the supplier.",
          "ja": "仕入先との会議に向けて準備しました。",
          "focus": "prepared for a meeting"
        },
        {
          "en": "Please prepare for a meeting before joining the call.",
          "ja": "通話に参加する前に会議の準備をしてください。",
          "focus": "prepare for a meeting"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "prepare in advance",
      "ja": "事前に準備する",
      "image": "直前ではなく早めに整える。",
      "pattern": "prepare in advance",
      "examples": [
        {
          "en": "We should prepare in advance for the busy season.",
          "ja": "繁忙期に向けて事前に準備すべきです。",
          "focus": "prepare in advance"
        },
        {
          "en": "The team prepared in advance and avoided confusion.",
          "ja": "チームは事前に準備し、混乱を避けました。",
          "focus": "prepared in advance"
        },
        {
          "en": "Please prepare in advance if you need approval.",
          "ja": "承認が必要なら事前に準備してください。",
          "focus": "prepare in advance"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "prepare a backup plan",
      "ja": "代替案を準備する",
      "image": "予定通り進まない場合に備える。",
      "pattern": "prepare a backup plan",
      "examples": [
        {
          "en": "We prepared a backup plan for the shipment issue.",
          "ja": "出荷問題に備えて代替案を準備しました。",
          "focus": "prepared a backup plan"
        },
        {
          "en": "Please prepare a backup plan before the event.",
          "ja": "イベント前に代替案を準備してください。",
          "focus": "prepare a backup plan"
        },
        {
          "en": "A good team always prepares a backup plan.",
          "ja": "良いチームは常に代替案を準備します。",
          "focus": "prepares a backup plan"
        }
      ],
      "dailyExamples": []
    }
  ],
  "phrasalVerbs": [
    {
      "phrase": "prepare for",
      "ja": "〜に向けて準備する",
      "image": "出来事・会議・状況に備える。",
      "pattern": "prepare for + 名詞",
      "examples": [
        {
          "en": "We need to prepare for the audit next month.",
          "ja": "来月の監査に向けて準備する必要があります。",
          "focus": "prepare for"
        },
        {
          "en": "She prepared for the client presentation.",
          "ja": "彼女は顧客向けプレゼンの準備をしました。",
          "focus": "prepared for"
        },
        {
          "en": "Please prepare for a possible schedule change.",
          "ja": "予定変更の可能性に備えてください。",
          "focus": "prepare for"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "prepare to",
      "ja": "〜する準備をする",
      "image": "次の行動に移る前の準備。",
      "pattern": "prepare to + 動詞",
      "examples": [
        {
          "en": "We are preparing to launch the new service.",
          "ja": "私たちは新サービスを開始する準備をしています。",
          "focus": "preparing to"
        },
        {
          "en": "Please prepare to share the latest numbers.",
          "ja": "最新の数字を共有する準備をしてください。",
          "focus": "prepare to"
        },
        {
          "en": "The team prepared to visit the site.",
          "ja": "チームは現場を訪問する準備をしました。",
          "focus": "prepared to"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "prepare ahead of",
      "ja": "〜の前に準備する",
      "image": "期限や予定より前に準備する。",
      "pattern": "prepare ahead of + 名詞",
      "examples": [
        {
          "en": "We prepared ahead of the sales meeting.",
          "ja": "営業会議の前に準備しました。",
          "focus": "prepared ahead of"
        },
        {
          "en": "Please prepare ahead of the installation date.",
          "ja": "施工日の前に準備してください。",
          "focus": "prepare ahead of"
        },
        {
          "en": "The team prepared ahead of the product launch.",
          "ja": "チームは製品リリース前に準備しました。",
          "focus": "prepared ahead of"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "prepare with",
      "ja": "〜を使って準備する",
      "image": "資料・データ・確認事項を使って準備する。",
      "pattern": "prepare with + 名詞",
      "examples": [
        {
          "en": "Please prepare with the latest sales data.",
          "ja": "最新の売上データを使って準備してください。",
          "focus": "prepare with"
        },
        {
          "en": "We prepared with a clear checklist.",
          "ja": "私たちは明確なチェックリストを使って準備しました。",
          "focus": "prepared with"
        },
        {
          "en": "The manager prepared with notes from the last meeting.",
          "ja": "マネージャーは前回会議のメモを使って準備しました。",
          "focus": "prepared with"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "prepare against",
      "ja": "〜に備える",
      "image": "リスクや悪い状況に備える。少し硬い表現。",
      "pattern": "prepare against + リスク",
      "examples": [
        {
          "en": "We prepared against possible delivery delays.",
          "ja": "納品遅延の可能性に備えました。",
          "focus": "prepared against"
        },
        {
          "en": "The company prepared against supply shortages.",
          "ja": "会社は供給不足に備えました。",
          "focus": "prepared against"
        },
        {
          "en": "Please prepare against last-minute changes.",
          "ja": "直前の変更に備えてください。",
          "focus": "prepare against"
        }
      ],
      "dailyExamples": []
    }
  ]
},
  {
    "id": "plan",
    "rank": 58,
    "word": "PLAN",
    "ipa": "/plæn/",
    "kana": "プラン",
    "syllable": "plan",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "先の行動を考えて組み立てる",
    "coreDetail": "PLANは、予定・作業・出張・戦略などを事前に組み立てる動詞です。仕事では、行動する前に流れ・期限・役割・次の手順を決める感覚で使います。",
    "coreVisual": {
      "from": [
        "目的",
        "期限",
        "人員",
        "予算",
        "リスク"
      ],
      "to": "実行できる流れ",
      "label": "ばらばらの条件 → 実行計画"
    },
    "meanings": [
      {
        "id": "plan-a-schedule",
        "title": "① 予定・日程を計画する",
        "pattern": "plan + schedule / meeting / trip",
        "transitivity": "他動詞",
        "structure": "S + plan + O",
        "image": "日時や順番を事前に組み立てる。",
        "point": "schedule, meeting, trip など予定に関する名詞とよく使う。",
        "examples": [
          {
            "en": "We planned the schedule for next week.",
            "ja": "私たちは来週の予定を立てました。",
            "focus": "planned",
            "object": "the schedule"
          },
          {
            "en": "Please plan the client meeting for Friday.",
            "ja": "金曜日に顧客との会議を計画してください。",
            "focus": "plan",
            "object": "the client meeting"
          },
          {
            "en": "The team planned the business trip around the site visit.",
            "ja": "チームは現場訪問に合わせて出張を計画しました。",
            "focus": "planned",
            "object": "the business trip"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "plan-to-do",
        "title": "② 〜する予定である",
        "pattern": "plan to do",
        "transitivity": "自動詞",
        "structure": "S + plan + to do",
        "image": "これからする行動を予定として持つ。",
        "point": "未来の予定を自然に言える形。ビジネスでは訪問・送付・確認などに使いやすい。",
        "examples": [
          {
            "en": "We plan to send the quote tomorrow.",
            "ja": "私たちは明日見積を送る予定です。",
            "focus": "plan"
          },
          {
            "en": "I plan to visit the client next week.",
            "ja": "私は来週顧客を訪問する予定です。",
            "focus": "plan"
          },
          {
            "en": "They plan to review the design before approval.",
            "ja": "彼らは承認前にデザインを確認する予定です。",
            "focus": "plan"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "plan-for",
        "title": "③ 〜に向けて準備・計画する",
        "pattern": "plan for + 名詞",
        "transitivity": "自動詞",
        "structure": "S + plan + for + O",
        "image": "目的やイベントに向けて前もって考える。",
        "point": "for の後ろに、イベント・リスク・将来の状況を置く。",
        "examples": [
          {
            "en": "We need to plan for the product launch.",
            "ja": "私たちは製品リリースに向けて計画する必要があります。",
            "focus": "plan for"
          },
          {
            "en": "Please plan for possible delivery delays.",
            "ja": "納品遅延の可能性に備えて計画してください。",
            "focus": "plan for"
          },
          {
            "en": "The manager planned for a busy sales season.",
            "ja": "マネージャーは忙しい販売シーズンに向けて計画しました。",
            "focus": "planned for"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "plan-how",
        "title": "④ どう進めるかを計画する",
        "pattern": "plan how to do",
        "transitivity": "他動詞",
        "structure": "S + plan + how to do",
        "image": "具体的な進め方を考える。",
        "point": "how to の後ろに作業内容を置くと、手順を考える意味になる。",
        "examples": [
          {
            "en": "We planned how to explain the issue to the client.",
            "ja": "私たちはその問題を顧客にどう説明するか計画しました。",
            "focus": "planned"
          },
          {
            "en": "Please plan how to install the lights safely.",
            "ja": "照明を安全に設置する方法を計画してください。",
            "focus": "plan"
          },
          {
            "en": "The team planned how to reduce the cost.",
            "ja": "チームはコストを下げる方法を計画しました。",
            "focus": "planned"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "plan-ahead",
        "title": "⑤ 先を見越して計画する",
        "pattern": "plan ahead",
        "transitivity": "自動詞",
        "structure": "S + plan ahead",
        "image": "直前ではなく、先回りして準備する。",
        "point": "仕事ではトラブル防止や段取りの良さを表す。",
        "examples": [
          {
            "en": "We should plan ahead before the busy season starts.",
            "ja": "繁忙期が始まる前に先を見越して計画するべきです。",
            "focus": "plan ahead"
          },
          {
            "en": "Please plan ahead for the installation work.",
            "ja": "設置作業に向けて前もって計画してください。",
            "focus": "plan ahead"
          },
          {
            "en": "Good teams plan ahead and avoid last-minute problems.",
            "ja": "良いチームは先を見越して計画し、直前の問題を避けます。",
            "focus": "plan ahead"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "plan-with",
        "title": "⑥ 〜と一緒に計画する",
        "pattern": "plan with + 人 / 部署",
        "transitivity": "自動詞",
        "structure": "S + plan + with + 人",
        "image": "相手と一緒に計画を作る。",
        "point": "with の後ろに顧客・チーム・部署を置く。",
        "examples": [
          {
            "en": "We planned with the client before finalizing the design.",
            "ja": "私たちはデザインを確定する前に顧客と一緒に計画しました。",
            "focus": "planned with"
          },
          {
            "en": "Please plan with the production team.",
            "ja": "製造チームと一緒に計画してください。",
            "focus": "plan with"
          },
          {
            "en": "She planned with accounting to control the budget.",
            "ja": "彼女は予算を管理するために経理部と一緒に計画しました。",
            "focus": "planned with"
          }
        ],
        "dailyExamples": []
      }
    ],
    "collocations": [
      {
        "phrase": "make a plan",
        "ja": "計画を立てる",
        "image": "頭の中の案を、実行できる計画にする。",
        "pattern": "make a plan",
        "examples": [
          {
            "en": "Let's make a plan for the next visit.",
            "ja": "次回訪問の計画を立てましょう。",
            "focus": "make a plan"
          },
          {
            "en": "We made a plan to finish the report by Friday.",
            "ja": "私たちは金曜日までに報告書を終える計画を立てました。",
            "focus": "made a plan"
          },
          {
            "en": "Please make a plan before ordering the materials.",
            "ja": "材料を発注する前に計画を立ててください。",
            "focus": "make a plan"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "business plan",
        "ja": "事業計画",
        "image": "事業の目的・売上・費用・進め方をまとめた計画。",
        "pattern": "business plan",
        "examples": [
          {
            "en": "We updated the business plan for next year.",
            "ja": "私たちは来年の事業計画を更新しました。",
            "focus": "business plan"
          },
          {
            "en": "The bank reviewed our business plan.",
            "ja": "銀行は私たちの事業計画を確認しました。",
            "focus": "business plan"
          },
          {
            "en": "Please prepare the business plan before the meeting.",
            "ja": "会議前に事業計画を準備してください。",
            "focus": "business plan"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "action plan",
        "ja": "行動計画",
        "image": "何を・誰が・いつ行うかを具体化した計画。",
        "pattern": "action plan",
        "examples": [
          {
            "en": "We created an action plan after the customer complaint.",
            "ja": "私たちは顧客クレームの後、行動計画を作成しました。",
            "focus": "action plan"
          },
          {
            "en": "Please share the action plan with the team.",
            "ja": "行動計画をチームに共有してください。",
            "focus": "action plan"
          },
          {
            "en": "The manager checked the action plan every week.",
            "ja": "マネージャーは毎週行動計画を確認しました。",
            "focus": "action plan"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "backup plan",
        "ja": "代替案・予備計画",
        "image": "予定通りに進まない場合の別案。",
        "pattern": "backup plan",
        "examples": [
          {
            "en": "We need a backup plan in case the delivery is delayed.",
            "ja": "納品が遅れた場合に備えて代替案が必要です。",
            "focus": "backup plan"
          },
          {
            "en": "Please prepare a backup plan for the event.",
            "ja": "イベントの代替案を準備してください。",
            "focus": "backup plan"
          },
          {
            "en": "The backup plan helped us avoid a major problem.",
            "ja": "代替案のおかげで大きな問題を避けられました。",
            "focus": "backup plan"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "plan a project",
        "ja": "プロジェクトを計画する",
        "image": "案件全体の流れを組み立てる。",
        "pattern": "plan a project",
        "examples": [
          {
            "en": "We need to plan the project before contacting the supplier.",
            "ja": "仕入先に連絡する前にプロジェクトを計画する必要があります。",
            "focus": "plan the project"
          },
          {
            "en": "She planned the project with the sales team.",
            "ja": "彼女は営業チームと一緒にプロジェクトを計画しました。",
            "focus": "planned the project"
          },
          {
            "en": "Please plan the project schedule carefully.",
            "ja": "プロジェクトの予定を慎重に計画してください。",
            "focus": "plan the project"
          }
        ],
        "dailyExamples": []
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "plan ahead",
        "ja": "前もって計画する",
        "image": "先の状況を考えて早めに動く。",
        "pattern": "plan ahead",
        "examples": [
          {
            "en": "We should plan ahead for the year-end rush.",
            "ja": "年末の繁忙期に向けて前もって計画するべきです。",
            "focus": "plan ahead"
          },
          {
            "en": "Please plan ahead so we can avoid overtime.",
            "ja": "残業を避けられるように前もって計画してください。",
            "focus": "plan ahead"
          },
          {
            "en": "The team planned ahead and secured enough stock.",
            "ja": "チームは前もって計画し、十分な在庫を確保しました。",
            "focus": "planned ahead"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "plan out",
        "ja": "細かく計画する",
        "image": "流れや手順を細部まで組み立てる。",
        "pattern": "plan out + 名詞",
        "examples": [
          {
            "en": "We planned out the installation steps.",
            "ja": "私たちは設置手順を細かく計画しました。",
            "focus": "planned out"
          },
          {
            "en": "Please plan out the schedule before the kickoff meeting.",
            "ja": "キックオフ会議の前にスケジュールを細かく計画してください。",
            "focus": "plan out"
          },
          {
            "en": "The team planned out each task for the launch.",
            "ja": "チームはリリースに向けて各作業を細かく計画しました。",
            "focus": "planned out"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "plan around",
        "ja": "〜に合わせて計画する",
        "image": "制約や予定に合わせて計画を組む。",
        "pattern": "plan around + 名詞",
        "examples": [
          {
            "en": "We planned around the client's available dates.",
            "ja": "私たちは顧客の都合が良い日に合わせて計画しました。",
            "focus": "planned around"
          },
          {
            "en": "Please plan around the factory schedule.",
            "ja": "工場の予定に合わせて計画してください。",
            "focus": "plan around"
          },
          {
            "en": "They planned around the budget limit.",
            "ja": "彼らは予算上限に合わせて計画しました。",
            "focus": "planned around"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "plan for",
        "ja": "〜に備えて計画する",
        "image": "イベントやリスクに備えて計画する。",
        "pattern": "plan for + 名詞",
        "examples": [
          {
            "en": "We planned for a possible price increase.",
            "ja": "私たちは価格上昇の可能性に備えて計画しました。",
            "focus": "planned for"
          },
          {
            "en": "Please plan for extra delivery time.",
            "ja": "追加の配送時間を見込んで計画してください。",
            "focus": "plan for"
          },
          {
            "en": "The company planned for future growth.",
            "ja": "会社は将来の成長に備えて計画しました。",
            "focus": "planned for"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "plan with",
        "ja": "〜と一緒に計画する",
        "image": "相手と一緒に計画を作る。",
        "pattern": "plan with + 人",
        "examples": [
          {
            "en": "We planned with the client from the early stage.",
            "ja": "私たちは初期段階から顧客と一緒に計画しました。",
            "focus": "planned with"
          },
          {
            "en": "Please plan with the design team.",
            "ja": "デザインチームと一緒に計画してください。",
            "focus": "plan with"
          },
          {
            "en": "He planned with logistics to reduce delivery risk.",
            "ja": "彼は配送リスクを下げるために物流部門と一緒に計画しました。",
            "focus": "planned with"
          }
        ],
        "dailyExamples": []
      }
    ]
  },
  {
    "id": "offer",
    "rank": 59,
    "word": "OFFER",
    "ipa": "/ˈɔːfər/",
    "kana": "オファー",
    "syllable": "of-fer",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "相手が受け取れるものとして差し出す",
    "coreDetail": "OFFERは、商品・条件・支援・選択肢などを相手に差し出す動詞です。相手が受けるかどうかを選べる状態で提示する感覚があります。",
    "coreVisual": {
      "from": [
        "提案",
        "支援",
        "条件",
        "選択肢",
        "価格"
      ],
      "to": "相手",
      "label": "こちらから差し出す → 相手が選べる"
    },
    "meanings": [
      {
        "id": "offer-a-product",
        "title": "① 商品・サービスを提供する",
        "pattern": "offer + 商品 / サービス",
        "transitivity": "他動詞",
        "structure": "S + offer + O",
        "image": "相手に利用できるものとして出す。",
        "point": "provideより、相手に選択肢として提示する感覚が強い。",
        "examples": [
          {
            "en": "We offer installation support with this product.",
            "ja": "私たちはこの製品に設置サポートを提供しています。",
            "focus": "offer",
            "object": "installation support"
          },
          {
            "en": "The company offers a wide range of lighting solutions.",
            "ja": "その会社は幅広い照明ソリューションを提供しています。",
            "focus": "offers",
            "object": "a wide range of lighting solutions"
          },
          {
            "en": "Can we offer a faster delivery option?",
            "ja": "私たちはより早い納品オプションを提供できますか？",
            "focus": "offer",
            "object": "a faster delivery option"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "offer-a-discount",
        "title": "② 割引・条件を提示する",
        "pattern": "offer + discount / price / terms",
        "transitivity": "他動詞",
        "structure": "S + offer + O",
        "image": "価格や条件を相手に提示する。",
        "point": "営業では discount, price, terms, warranty などとよく使う。",
        "examples": [
          {
            "en": "We offered a discount to the client.",
            "ja": "私たちは顧客に割引を提示しました。",
            "focus": "offered",
            "object": "a discount"
          },
          {
            "en": "The supplier offered better payment terms.",
            "ja": "仕入先はより良い支払条件を提示しました。",
            "focus": "offered",
            "object": "better payment terms"
          },
          {
            "en": "Please offer the same price as last time.",
            "ja": "前回と同じ価格を提示してください。",
            "focus": "offer",
            "object": "the same price"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "offer-to-do",
        "title": "③ 〜すると申し出る",
        "pattern": "offer to do",
        "transitivity": "他動詞",
        "structure": "S + offer + to do",
        "image": "相手のために自分から行動を申し出る。",
        "point": "help, check, send, prepare などと相性が良い。",
        "examples": [
          {
            "en": "She offered to help with the report.",
            "ja": "彼女は報告書を手伝うと申し出ました。",
            "focus": "offered"
          },
          {
            "en": "We offered to send a sample before the order.",
            "ja": "私たちは発注前にサンプルを送ると申し出ました。",
            "focus": "offered"
          },
          {
            "en": "He offered to explain the issue to the customer.",
            "ja": "彼はその問題を顧客に説明すると申し出ました。",
            "focus": "offered"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "offer-someone-something",
        "title": "④ 人に物・機会を提供する",
        "pattern": "offer + 人 + 物",
        "transitivity": "他動詞",
        "structure": "S + offer + 人 + O",
        "image": "相手に具体的なものを差し出す。",
        "point": "offer the client a discount のように、人を先に置ける。",
        "examples": [
          {
            "en": "We offered the client a replacement product.",
            "ja": "私たちは顧客に代替品を提供しました。",
            "focus": "offered",
            "object": "the client a replacement product"
          },
          {
            "en": "The manager offered her a new role.",
            "ja": "マネージャーは彼女に新しい役割を提示しました。",
            "focus": "offered",
            "object": "her a new role"
          },
          {
            "en": "Can we offer them another option?",
            "ja": "私たちは彼らに別の選択肢を提示できますか？",
            "focus": "offer",
            "object": "them another option"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "offer-an-opportunity",
        "title": "⑤ 機会を与える・提供する",
        "pattern": "offer + opportunity / chance",
        "transitivity": "他動詞",
        "structure": "S + offer + O",
        "image": "相手が何かできる機会を差し出す。",
        "point": "training, meeting, trial など仕事の機会に使える。",
        "examples": [
          {
            "en": "This project offers a chance to work with a new client.",
            "ja": "この案件は新しい顧客と仕事をする機会を提供します。",
            "focus": "offers",
            "object": "a chance"
          },
          {
            "en": "The training offers employees a way to improve their skills.",
            "ja": "その研修は社員にスキルを伸ばす方法を提供します。",
            "focus": "offers",
            "object": "employees a way"
          },
          {
            "en": "We can offer a trial before the full order.",
            "ja": "正式発注前に試用の機会を提供できます。",
            "focus": "offer",
            "object": "a trial"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "offer-support",
        "title": "⑥ 支援・協力を申し出る",
        "pattern": "offer support / assistance",
        "transitivity": "他動詞",
        "structure": "S + offer + support",
        "image": "相手を助ける姿勢を差し出す。",
        "point": "customer support, technical assistance などとよく使う。",
        "examples": [
          {
            "en": "We offered technical support during the installation.",
            "ja": "私たちは設置中に技術サポートを提供しました。",
            "focus": "offered",
            "object": "technical support"
          },
          {
            "en": "Please offer assistance if the client has questions.",
            "ja": "顧客に質問があれば支援を申し出てください。",
            "focus": "offer",
            "object": "assistance"
          },
          {
            "en": "The supplier offered support after the delivery.",
            "ja": "仕入先は納品後にサポートを提供しました。",
            "focus": "offered",
            "object": "support"
          }
        ],
        "dailyExamples": []
      }
    ],
    "collocations": [
      {
        "phrase": "offer a discount",
        "ja": "割引を提示する",
        "image": "価格条件として割引を差し出す。",
        "pattern": "offer a discount",
        "examples": [
          {
            "en": "We can offer a discount for a large order.",
            "ja": "大量注文には割引を提示できます。",
            "focus": "offer a discount"
          },
          {
            "en": "The supplier offered a discount for early payment.",
            "ja": "仕入先は早期支払いに対して割引を提示しました。",
            "focus": "offered a discount"
          },
          {
            "en": "Please do not offer a discount without approval.",
            "ja": "承認なしで割引を提示しないでください。",
            "focus": "offer a discount"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "offer support",
        "ja": "支援を提供する",
        "image": "相手が進められるように助けを差し出す。",
        "pattern": "offer support",
        "examples": [
          {
            "en": "We offer support from design to installation.",
            "ja": "私たちは設計から設置までサポートを提供します。",
            "focus": "offer support"
          },
          {
            "en": "The team offered support during the test.",
            "ja": "チームはテスト中にサポートを提供しました。",
            "focus": "offered support"
          },
          {
            "en": "Please offer support when the client needs help.",
            "ja": "顧客が助けを必要とするときはサポートを提供してください。",
            "focus": "offer support"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "offer an option",
        "ja": "選択肢を提示する",
        "image": "相手が選べる案を出す。",
        "pattern": "offer an option",
        "examples": [
          {
            "en": "We should offer an option with a shorter lead time.",
            "ja": "より短い納期の選択肢を提示するべきです。",
            "focus": "offer an option"
          },
          {
            "en": "Can we offer another option for the design?",
            "ja": "デザインについて別の選択肢を提示できますか？",
            "focus": "offer another option"
          },
          {
            "en": "The proposal offered several options for the client.",
            "ja": "提案書は顧客に複数の選択肢を提示しました。",
            "focus": "offered several options"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "offer a solution",
        "ja": "解決策を提示する",
        "image": "問題に対する具体的な解決策を差し出す。",
        "pattern": "offer a solution",
        "examples": [
          {
            "en": "We need to offer a solution by tomorrow.",
            "ja": "明日までに解決策を提示する必要があります。",
            "focus": "offer a solution"
          },
          {
            "en": "The engineer offered a solution to the wiring issue.",
            "ja": "技術者は配線の問題に対する解決策を提示しました。",
            "focus": "offered a solution"
          },
          {
            "en": "Please offer a practical solution for the client.",
            "ja": "顧客に現実的な解決策を提示してください。",
            "focus": "offer a practical solution"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "offer terms",
        "ja": "条件を提示する",
        "image": "価格・支払い・保証などの条件を提示する。",
        "pattern": "offer terms",
        "examples": [
          {
            "en": "The supplier offered better terms for repeat orders.",
            "ja": "仕入先はリピート注文に対してより良い条件を提示しました。",
            "focus": "offered better terms"
          },
          {
            "en": "We cannot offer those terms without approval.",
            "ja": "承認なしではその条件を提示できません。",
            "focus": "offer those terms"
          },
          {
            "en": "Please confirm the terms before we offer them.",
            "ja": "その条件を提示する前に確認してください。",
            "focus": "offer them"
          }
        ],
        "dailyExamples": []
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "offer up",
        "ja": "差し出す・提供する",
        "image": "意見・案・時間などを差し出す。少し硬い表現。",
        "pattern": "offer up + 名詞",
        "examples": [
          {
            "en": "The team offered up several ideas during the meeting.",
            "ja": "チームは会議中にいくつかの案を出しました。",
            "focus": "offered up"
          },
          {
            "en": "She offered up her time to help the project.",
            "ja": "彼女はそのプロジェクトを助けるために自分の時間を差し出しました。",
            "focus": "offered up"
          },
          {
            "en": "The supplier offered up a temporary solution.",
            "ja": "仕入先は一時的な解決策を差し出しました。",
            "focus": "offered up"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "offer to",
        "ja": "〜すると申し出る",
        "image": "自分から行動を提案する。",
        "pattern": "offer to do",
        "examples": [
          {
            "en": "We offered to check the product again.",
            "ja": "私たちは製品を再確認すると申し出ました。",
            "focus": "offered to"
          },
          {
            "en": "He offered to join the customer meeting.",
            "ja": "彼は顧客との会議に参加すると申し出ました。",
            "focus": "offered to"
          },
          {
            "en": "The engineer offered to visit the site.",
            "ja": "技術者は現場を訪問すると申し出ました。",
            "focus": "offered to"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "offer for",
        "ja": "〜向けに提供する",
        "image": "特定の目的・相手向けに提供する。",
        "pattern": "offer + 名詞 + for + 名詞",
        "examples": [
          {
            "en": "We offered a new package for small businesses.",
            "ja": "私たちは小規模企業向けに新しいパッケージを提供しました。",
            "focus": "offered"
          },
          {
            "en": "The company offers training for new employees.",
            "ja": "会社は新入社員向けに研修を提供しています。",
            "focus": "offers"
          },
          {
            "en": "Please offer this option for urgent orders.",
            "ja": "急ぎの注文向けにこの選択肢を提供してください。",
            "focus": "offer"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "offer to someone",
        "ja": "人に提示する",
        "image": "相手に何かを差し出す。",
        "pattern": "offer + 名詞 + to + 人",
        "examples": [
          {
            "en": "We offered the proposal to the client last week.",
            "ja": "私たちは先週その提案を顧客に提示しました。",
            "focus": "offered"
          },
          {
            "en": "Please offer the warranty details to the customer.",
            "ja": "保証内容を顧客に提示してください。",
            "focus": "offer"
          },
          {
            "en": "The sales team offered a solution to the store manager.",
            "ja": "営業チームは店舗責任者に解決策を提示しました。",
            "focus": "offered"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "offer against",
        "ja": "〜と比較して条件を提示する",
        "image": "競合・条件と比較して提案する。やや限定的な表現。",
        "pattern": "offer + 名詞 + against + 比較対象",
        "examples": [
          {
            "en": "We offered our price against the competitor's quote.",
            "ja": "私たちは競合の見積と比較して価格を提示しました。",
            "focus": "offered"
          },
          {
            "en": "The supplier offered new terms against the old contract.",
            "ja": "仕入先は旧契約と比較して新しい条件を提示しました。",
            "focus": "offered"
          },
          {
            "en": "Please offer a realistic option against the current budget.",
            "ja": "現在の予算に照らして現実的な選択肢を提示してください。",
            "focus": "offer"
          }
        ],
        "dailyExamples": []
      }
    ]
  },
  {
    "id": "support",
    "rank": 60,
    "word": "SUPPORT",
    "ipa": "/səˈpɔːrt/",
    "kana": "サポート",
    "syllable": "sup-port",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "相手や物事が倒れないように下から支える",
    "coreDetail": "SUPPORTは、人・提案・作業・システムを支える動詞です。仕事では、直接助けるだけでなく、方針に賛成する、データで裏付ける、運用を支えるという意味でも使います。",
    "coreVisual": {
      "from": [
        "人",
        "提案",
        "作業",
        "システム",
        "証拠"
      ],
      "to": "安定して進む状態",
      "label": "下から支える → 続けられる"
    },
    "meanings": [
      {
        "id": "support-a-person",
        "title": "① 人・チームを支援する",
        "pattern": "support + 人 / team",
        "transitivity": "他動詞",
        "structure": "S + support + O",
        "image": "相手が仕事を進められるように助ける。",
        "point": "helpより継続的・組織的な支援に使いやすい。",
        "examples": [
          {
            "en": "I will support the sales team this week.",
            "ja": "私は今週、営業チームを支援します。",
            "focus": "support",
            "object": "the sales team"
          },
          {
            "en": "We supported the new employee during training.",
            "ja": "私たちは研修中に新入社員を支援しました。",
            "focus": "supported",
            "object": "the new employee"
          },
          {
            "en": "Please support the client during the installation.",
            "ja": "設置中は顧客を支援してください。",
            "focus": "support",
            "object": "the client"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "support-a-project",
        "title": "② 作業・案件を支援する",
        "pattern": "support + project / task / operation",
        "transitivity": "他動詞",
        "structure": "S + support + O",
        "image": "作業や案件が進むように後押しする。",
        "point": "project, task, operation, activity などとよく使う。",
        "examples": [
          {
            "en": "The technical team supported the project from the beginning.",
            "ja": "技術チームは最初からその案件を支援しました。",
            "focus": "supported",
            "object": "the project"
          },
          {
            "en": "Can you support the inspection tomorrow?",
            "ja": "明日の検査を支援できますか？",
            "focus": "support",
            "object": "the inspection"
          },
          {
            "en": "We need extra staff to support the operation.",
            "ja": "運用を支援するために追加スタッフが必要です。",
            "focus": "support",
            "object": "the operation"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "support-an-idea",
        "title": "③ 提案・方針を支持する",
        "pattern": "support + idea / proposal / decision",
        "transitivity": "他動詞",
        "structure": "S + support + O",
        "image": "考えや決定に賛成して後押しする。",
        "point": "提案・方針・判断への賛成を表す。",
        "examples": [
          {
            "en": "We support this proposal because it reduces cost.",
            "ja": "コストを削減できるため、私たちはこの提案を支持します。",
            "focus": "support",
            "object": "this proposal"
          },
          {
            "en": "The manager supported the decision to change suppliers.",
            "ja": "マネージャーは仕入先を変更する決定を支持しました。",
            "focus": "supported",
            "object": "the decision"
          },
          {
            "en": "Do you support the new sales strategy?",
            "ja": "あなたは新しい営業戦略を支持しますか？",
            "focus": "support",
            "object": "the new sales strategy"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "support-with",
        "title": "④ 〜で支援する・支える",
        "pattern": "support + 人 / 物 + with + 名詞",
        "transitivity": "他動詞",
        "structure": "S + support + O + with + 名詞",
        "image": "資料・情報・人員などを使って支援する。",
        "point": "with の後ろに支援の手段を置く。",
        "examples": [
          {
            "en": "We supported the client with clear instructions.",
            "ja": "私たちは分かりやすい説明で顧客を支援しました。",
            "focus": "supported",
            "object": "the client"
          },
          {
            "en": "Please support the sales team with updated data.",
            "ja": "最新データで営業チームを支援してください。",
            "focus": "support",
            "object": "the sales team"
          },
          {
            "en": "The engineer supported us with technical advice.",
            "ja": "技術者は技術的な助言で私たちを支援しました。",
            "focus": "supported",
            "object": "us"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "support-by-evidence",
        "title": "⑤ 証拠・データで裏付ける",
        "pattern": "support + claim / decision + with + evidence",
        "transitivity": "他動詞",
        "structure": "S + support + O + with + evidence",
        "image": "主張や判断をデータで支える。",
        "point": "資料・数字・事実で説得力を出す意味。",
        "examples": [
          {
            "en": "Please support your proposal with sales data.",
            "ja": "提案を売上データで裏付けてください。",
            "focus": "support",
            "object": "your proposal"
          },
          {
            "en": "The report supported our decision with clear evidence.",
            "ja": "その報告書は明確な証拠で私たちの判断を裏付けました。",
            "focus": "supported",
            "object": "our decision"
          },
          {
            "en": "We need numbers to support this claim.",
            "ja": "この主張を裏付ける数字が必要です。",
            "focus": "support",
            "object": "this claim"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "support-a-system",
        "title": "⑥ システム・製品に対応する",
        "pattern": "support + system / feature / product",
        "transitivity": "他動詞",
        "structure": "S + support + O",
        "image": "システムや製品が機能・形式に対応する。",
        "point": "ITや製品説明でよく使う意味。",
        "examples": [
          {
            "en": "This system supports multiple users.",
            "ja": "このシステムは複数ユーザーに対応しています。",
            "focus": "supports",
            "object": "multiple users"
          },
          {
            "en": "The new model supports remote control.",
            "ja": "新しいモデルは遠隔操作に対応しています。",
            "focus": "supports",
            "object": "remote control"
          },
          {
            "en": "Does this software support Japanese?",
            "ja": "このソフトは日本語に対応していますか？",
            "focus": "support",
            "object": "Japanese"
          }
        ],
        "dailyExamples": []
      }
    ],
    "collocations": [
      {
        "phrase": "provide support",
        "ja": "サポートを提供する",
        "image": "必要な支援を正式に提供する。",
        "pattern": "provide support",
        "examples": [
          {
            "en": "We provide support after installation.",
            "ja": "私たちは設置後にサポートを提供します。",
            "focus": "provide support"
          },
          {
            "en": "The supplier provided support during the test.",
            "ja": "仕入先はテスト中にサポートを提供しました。",
            "focus": "provided support"
          },
          {
            "en": "Please provide support if the customer has trouble.",
            "ja": "顧客に問題があればサポートを提供してください。",
            "focus": "provide support"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "technical support",
        "ja": "技術サポート",
        "image": "製品・施工・システムに関する技術的な支援。",
        "pattern": "technical support",
        "examples": [
          {
            "en": "We need technical support for the control system.",
            "ja": "制御システムについて技術サポートが必要です。",
            "focus": "technical support"
          },
          {
            "en": "The client asked for technical support after delivery.",
            "ja": "顧客は納品後に技術サポートを求めました。",
            "focus": "technical support"
          },
          {
            "en": "Please contact technical support before changing the settings.",
            "ja": "設定を変更する前に技術サポートに連絡してください。",
            "focus": "technical support"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "customer support",
        "ja": "顧客サポート",
        "image": "顧客の問い合わせや問題への支援。",
        "pattern": "customer support",
        "examples": [
          {
            "en": "Customer support handled the issue quickly.",
            "ja": "顧客サポートはその問題に素早く対応しました。",
            "focus": "Customer support"
          },
          {
            "en": "We improved customer support after the complaint.",
            "ja": "私たちはクレーム後に顧客サポートを改善しました。",
            "focus": "customer support"
          },
          {
            "en": "Please share this information with customer support.",
            "ja": "この情報を顧客サポートに共有してください。",
            "focus": "customer support"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "support a proposal",
        "ja": "提案を支持する",
        "image": "提案内容に賛成して後押しする。",
        "pattern": "support a proposal",
        "examples": [
          {
            "en": "The manager supported the proposal during the meeting.",
            "ja": "マネージャーは会議中にその提案を支持しました。",
            "focus": "supported the proposal"
          },
          {
            "en": "We should support a proposal that reduces risk.",
            "ja": "リスクを下げる提案を支持するべきです。",
            "focus": "support a proposal"
          },
          {
            "en": "The data helped us support the proposal.",
            "ja": "そのデータは提案を支持する助けになりました。",
            "focus": "support the proposal"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "support the team",
        "ja": "チームを支援する",
        "image": "チームが動けるように後押しする。",
        "pattern": "support the team",
        "examples": [
          {
            "en": "I will support the team during the busy season.",
            "ja": "繁忙期は私がチームを支援します。",
            "focus": "support the team"
          },
          {
            "en": "The manager supported the team with clear priorities.",
            "ja": "マネージャーは明確な優先順位でチームを支援しました。",
            "focus": "supported the team"
          },
          {
            "en": "Please support the team until the project is finished.",
            "ja": "プロジェクトが終わるまでチームを支援してください。",
            "focus": "support the team"
          }
        ],
        "dailyExamples": []
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "support with",
        "ja": "〜で支援する",
        "image": "手段・資料・人員を使って支援する。",
        "pattern": "support + 人 / 物 + with + 名詞",
        "examples": [
          {
            "en": "We supported the client with a detailed manual.",
            "ja": "私たちは詳しいマニュアルで顧客を支援しました。",
            "focus": "supported"
          },
          {
            "en": "Please support the team with updated documents.",
            "ja": "更新された資料でチームを支援してください。",
            "focus": "support"
          },
          {
            "en": "The supplier supported us with replacement parts.",
            "ja": "仕入先は交換部品で私たちを支援しました。",
            "focus": "supported"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "support through",
        "ja": "〜を通じて支援する",
        "image": "期間・方法・プロセスを通じて支える。",
        "pattern": "support + 人 / 物 + through + 名詞",
        "examples": [
          {
            "en": "We supported the client through the installation process.",
            "ja": "私たちは設置プロセスを通じて顧客を支援しました。",
            "focus": "supported"
          },
          {
            "en": "The manager supported the team through the transition.",
            "ja": "マネージャーは移行期間を通じてチームを支援しました。",
            "focus": "supported"
          },
          {
            "en": "Please support new users through the setup.",
            "ja": "設定作業を通じて新規ユーザーを支援してください。",
            "focus": "support"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "support in",
        "ja": "〜において支援する",
        "image": "特定の作業・場面で支援する。",
        "pattern": "support + 人 + in + 名詞 / 動名詞",
        "examples": [
          {
            "en": "We supported the client in choosing the right model.",
            "ja": "私たちは適切なモデルを選ぶ際に顧客を支援しました。",
            "focus": "supported"
          },
          {
            "en": "Please support the team in preparing the proposal.",
            "ja": "提案書を準備する際にチームを支援してください。",
            "focus": "support"
          },
          {
            "en": "The engineer supported us in solving the issue.",
            "ja": "技術者は問題解決において私たちを支援しました。",
            "focus": "supported"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "support against",
        "ja": "〜から守る・対抗できるよう支える",
        "image": "リスクや反対に対して支える。限定的な表現。",
        "pattern": "support + 人 / 物 + against + 名詞",
        "examples": [
          {
            "en": "The data supported our argument against the price increase.",
            "ja": "そのデータは価格上昇への反論を支えました。",
            "focus": "supported"
          },
          {
            "en": "The policy supports employees against unfair treatment.",
            "ja": "その方針は不公平な扱いから社員を守る形で支えます。",
            "focus": "supports"
          },
          {
            "en": "We need evidence to support our position against the claim.",
            "ja": "その主張に対して私たちの立場を支える証拠が必要です。",
            "focus": "support"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "support on",
        "ja": "〜について支援する",
        "image": "特定のテーマ・案件について支援する。",
        "pattern": "support + 人 + on + 名詞",
        "examples": [
          {
            "en": "Can you support us on this project?",
            "ja": "この案件について私たちを支援できますか？",
            "focus": "support"
          },
          {
            "en": "The supplier supported us on the delivery issue.",
            "ja": "仕入先は納品問題について私たちを支援しました。",
            "focus": "supported"
          },
          {
            "en": "Please support the sales team on the new proposal.",
            "ja": "新しい提案について営業チームを支援してください。",
            "focus": "support"
          }
        ],
        "dailyExamples": []
      }
    ]
  },
  {
      "id": "discuss",
      "rank": 61,
      "word": "DISCUSS",
      "ipa": "/dɪˈskʌs/",
      "kana": "ディスカス",
      "syllable": "dis-cuss",
      "transitivity": "他動詞",
      "importance": "★★★★☆ 重要",
      "core": "一つのテーマを相手と掘り下げて話し合う",
      "coreDetail": "DISCUSSは、予定・条件・課題・提案などを、結論や理解に近づけるために話し合う動詞です。基本形は discuss the issue のように目的語を直接置き、discuss about は避けます。",
      "coreVisual": {
          "from": [
              "議題",
              "条件",
              "問題",
              "提案"
          ],
          "to": "合意・理解・次の行動",
          "label": "テーマを中心に話し合う"
      },
      "meanings": [
          {
              "id": "discuss-topic",
              "title": "① 議題・問題について話し合う",
              "pattern": "discuss + 議題 / 問題",
              "transitivity": "他動詞",
              "structure": "S + discuss + O",
              "image": "一つのテーマをテーブルに置いて話し合う。",
              "point": "discuss about ではなく discuss the issue が基本です。",
              "examples": [
                  {
                      "en": "We discussed the delivery issue with the client.",
                      "ja": "私たちは顧客と納品の問題について話し合いました。",
                      "focus": "discussed",
                      "object": "the delivery issue"
                  },
                  {
                      "en": "Let's discuss the quotation before we send it.",
                      "ja": "見積を送る前に、その内容について話し合いましょう。",
                      "focus": "discuss",
                      "object": "the quotation"
                  },
                  {
                      "en": "The team discussed the problem during the morning meeting.",
                      "ja": "チームは朝の会議でその問題について話し合いました。",
                      "focus": "discussed",
                      "object": "the problem"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "discuss-with-someone",
              "title": "② 相手と話し合う",
              "pattern": "discuss + 内容 + with + 相手",
              "transitivity": "他動詞",
              "structure": "S + discuss + O + with + 人",
              "image": "相手と同じテーマを見ながら意見を合わせる。",
              "point": "with を使うと、誰と話し合うかを自然に表せます。",
              "examples": [
                  {
                      "en": "I discussed the schedule with the supplier.",
                      "ja": "私は仕入先とスケジュールについて話し合いました。",
                      "focus": "discussed",
                      "object": "the schedule"
                  },
                  {
                      "en": "Please discuss the design change with the production team.",
                      "ja": "設計変更について製造チームと話し合ってください。",
                      "focus": "discuss",
                      "object": "the design change"
                  },
                  {
                      "en": "We need to discuss the payment terms with the customer.",
                      "ja": "私たちは顧客と支払い条件について話し合う必要があります。",
                      "focus": "discuss",
                      "object": "the payment terms"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "discuss-details",
              "title": "③ 詳細・条件を詰める",
              "pattern": "discuss + details / terms / conditions",
              "transitivity": "他動詞",
              "structure": "S + discuss + O",
              "image": "まだ決まっていない細部を話し合って整理する。",
              "point": "details, terms, conditions など仕事でよく使う名詞と相性が良いです。",
              "examples": [
                  {
                      "en": "We discussed the details of the new order.",
                      "ja": "私たちは新しい注文の詳細について話し合いました。",
                      "focus": "discussed",
                      "object": "the details"
                  },
                  {
                      "en": "Let's discuss the terms before signing the agreement.",
                      "ja": "契約書に署名する前に条件について話し合いましょう。",
                      "focus": "discuss",
                      "object": "the terms"
                  },
                  {
                      "en": "They discussed the conditions for the next shipment.",
                      "ja": "彼らは次回出荷の条件について話し合いました。",
                      "focus": "discussed",
                      "object": "the conditions"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "discuss-plan-schedule",
              "title": "④ 計画・予定を話し合う",
              "pattern": "discuss + plan / schedule / timeline",
              "transitivity": "他動詞",
              "structure": "S + discuss + O",
              "image": "予定や段取りを確認しながら進め方を話す。",
              "point": "計画やスケジュール調整の場面で非常に使いやすい型です。",
              "examples": [
                  {
                      "en": "We discussed the project plan with the manager.",
                      "ja": "私たちはマネージャーとプロジェクト計画について話し合いました。",
                      "focus": "discussed",
                      "object": "the project plan"
                  },
                  {
                      "en": "Let's discuss the timeline for installation.",
                      "ja": "設置のスケジュールについて話し合いましょう。",
                      "focus": "discuss",
                      "object": "the timeline"
                  },
                  {
                      "en": "The sales team discussed next month's visit schedule.",
                      "ja": "営業チームは来月の訪問スケジュールについて話し合いました。",
                      "focus": "discussed",
                      "object": "next month's visit schedule"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "discuss-question",
              "title": "⑤ whether / how / what を話し合う",
              "pattern": "discuss whether / how / what + 文",
              "transitivity": "他動詞",
              "structure": "S + discuss + whether/how/what ...",
              "image": "選択肢や方法を話し合って判断に近づく。",
              "point": "何をどうするか未定の時に使いやすい型です。",
              "examples": [
                  {
                      "en": "We discussed whether we should change the supplier.",
                      "ja": "私たちは仕入先を変更すべきか話し合いました。",
                      "focus": "discussed",
                      "object": "whether we should change the supplier"
                  },
                  {
                      "en": "Let's discuss how we can reduce the cost.",
                      "ja": "どのようにコストを削減できるか話し合いましょう。",
                      "focus": "discuss",
                      "object": "how we can reduce the cost"
                  },
                  {
                      "en": "They discussed what information to include in the report.",
                      "ja": "彼らは報告書にどの情報を入れるか話し合いました。",
                      "focus": "discussed",
                      "object": "what information to include"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "be-discussed",
              "title": "⑥ 会議などで話し合われる",
              "pattern": "be discussed",
              "transitivity": "受け身",
              "structure": "S + be discussed",
              "image": "テーマが会議やメール上で取り上げられる。",
              "point": "受け身にすると、誰が話したかより議題そのものを強調できます。",
              "examples": [
                  {
                      "en": "The issue will be discussed in tomorrow's meeting.",
                      "ja": "その問題は明日の会議で話し合われます。",
                      "focus": "discussed",
                      "object": "the issue"
                  },
                  {
                      "en": "The new price list was discussed by the sales team.",
                      "ja": "新しい価格表は営業チームによって話し合われました。",
                      "focus": "discussed",
                      "object": "the new price list"
                  },
                  {
                      "en": "Several delivery options were discussed during the call.",
                      "ja": "電話中にいくつかの納品方法が話し合われました。",
                      "focus": "discussed",
                      "object": "several delivery options"
                  }
              ],
              "dailyExamples": []
          }
      ],
      "collocations": [
          {
              "phrase": "discuss the details",
              "ja": "詳細を話し合う",
              "image": "詳細を一つずつ確認しながら話し合う。",
              "pattern": "discuss the details",
              "examples": [
                  {
                      "en": "Let's discuss the details before we reply to the client.",
                      "ja": "顧客に返信する前に詳細を話し合いましょう。",
                      "focus": "discuss the details"
                  },
                  {
                      "en": "We discussed the details of the installation work.",
                      "ja": "私たちは設置作業の詳細について話し合いました。",
                      "focus": "discussed the details"
                  },
                  {
                      "en": "Please discuss the details with the technical team.",
                      "ja": "技術チームと詳細について話し合ってください。",
                      "focus": "discuss the details"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "discuss the schedule",
              "ja": "予定を話し合う",
              "image": "日程や進行を調整するために話し合う。",
              "pattern": "discuss the schedule",
              "examples": [
                  {
                      "en": "We discussed the schedule for the site visit.",
                      "ja": "私たちは現場訪問の予定について話し合いました。",
                      "focus": "discussed the schedule"
                  },
                  {
                      "en": "Let's discuss the schedule after we receive the drawings.",
                      "ja": "図面を受け取った後で予定について話し合いましょう。",
                      "focus": "discuss the schedule"
                  },
                  {
                      "en": "The team discussed the schedule for next week's delivery.",
                      "ja": "チームは来週の納品予定について話し合いました。",
                      "focus": "discussed the schedule"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "discuss the issue",
              "ja": "問題について話し合う",
              "image": "解決すべき問題を共有して話し合う。",
              "pattern": "discuss the issue",
              "examples": [
                  {
                      "en": "We need to discuss the issue before it becomes serious.",
                      "ja": "深刻になる前にその問題について話し合う必要があります。",
                      "focus": "discuss the issue"
                  },
                  {
                      "en": "The manager discussed the issue with the supplier.",
                      "ja": "マネージャーは仕入先とその問題について話し合いました。",
                      "focus": "discussed the issue"
                  },
                  {
                      "en": "Let's discuss the issue and decide the next step.",
                      "ja": "その問題について話し合い、次の対応を決めましょう。",
                      "focus": "discuss the issue"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "discuss the proposal",
              "ja": "提案について話し合う",
              "image": "提案内容を確認して改善点や可否を話す。",
              "pattern": "discuss the proposal",
              "examples": [
                  {
                      "en": "We discussed the proposal with the client yesterday.",
                      "ja": "私たちは昨日、顧客と提案について話し合いました。",
                      "focus": "discussed the proposal"
                  },
                  {
                      "en": "Let's discuss the proposal before the final presentation.",
                      "ja": "最終プレゼンの前に提案について話し合いましょう。",
                      "focus": "discuss the proposal"
                  },
                  {
                      "en": "The sales team discussed the proposal and revised the price.",
                      "ja": "営業チームは提案について話し合い、価格を修正しました。",
                      "focus": "discussed the proposal"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "discuss next steps",
              "ja": "次の対応を話し合う",
              "image": "何を次にするか決めるために話し合う。",
              "pattern": "discuss next steps",
              "examples": [
                  {
                      "en": "Let's discuss next steps after we confirm the order.",
                      "ja": "注文を確認した後で次の対応を話し合いましょう。",
                      "focus": "discuss next steps"
                  },
                  {
                      "en": "We discussed next steps with the project members.",
                      "ja": "私たちはプロジェクトメンバーと次の対応を話し合いました。",
                      "focus": "discussed next steps"
                  },
                  {
                      "en": "Please discuss next steps with the customer by Friday.",
                      "ja": "金曜日までに顧客と次の対応を話し合ってください。",
                      "focus": "discuss next steps"
                  }
              ],
              "dailyExamples": []
          }
      ],
      "phrasalVerbs": [
          {
              "phrase": "discuss with",
              "ja": "〜と話し合う",
              "image": "相手と同じ議題を共有して話す。",
              "pattern": "discuss + 内容 + with + 相手",
              "examples": [
                  {
                      "en": "I discussed the order with the customer.",
                      "ja": "私は顧客と注文について話し合いました。",
                      "focus": "discussed the order with"
                  },
                  {
                      "en": "Please discuss the delivery plan with the warehouse team.",
                      "ja": "倉庫チームと納品計画について話し合ってください。",
                      "focus": "discuss the delivery plan with"
                  },
                  {
                      "en": "We discussed the request with our manager.",
                      "ja": "私たちは上司とその依頼について話し合いました。",
                      "focus": "discussed the request with"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "discuss among",
              "ja": "〜の間で話し合う",
              "image": "複数人の間で共有して話し合う。",
              "pattern": "discuss among + 人・部署",
              "examples": [
                  {
                      "en": "The issue was discussed among the sales members.",
                      "ja": "その問題は営業メンバーの間で話し合われました。",
                      "focus": "discussed among"
                  },
                  {
                      "en": "Please discuss the policy among the project leaders.",
                      "ja": "プロジェクトリーダーの間でその方針を話し合ってください。",
                      "focus": "discuss the policy among"
                  },
                  {
                      "en": "The price change was discussed among the managers.",
                      "ja": "価格変更は管理者の間で話し合われました。",
                      "focus": "discussed among"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "discuss in a meeting",
              "ja": "会議で話し合う",
              "image": "会議の場で議題として扱う。",
              "pattern": "discuss + 内容 + in a meeting",
              "examples": [
                  {
                      "en": "We discussed the new request in a meeting.",
                      "ja": "私たちは会議で新しい依頼について話し合いました。",
                      "focus": "discussed the new request in a meeting"
                  },
                  {
                      "en": "Let's discuss the delivery issue in tomorrow's meeting.",
                      "ja": "明日の会議で納品問題について話し合いましょう。",
                      "focus": "discuss the delivery issue in"
                  },
                  {
                      "en": "The budget was discussed in the weekly meeting.",
                      "ja": "予算は週次会議で話し合われました。",
                      "focus": "discussed in the weekly meeting"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "discuss over email",
              "ja": "メールで話し合う",
              "image": "対面ではなくメール上でやり取りして話し合う。",
              "pattern": "discuss + 内容 + over email",
              "examples": [
                  {
                      "en": "We discussed the changes over email.",
                      "ja": "私たちは変更点についてメールで話し合いました。",
                      "focus": "discussed the changes over email"
                  },
                  {
                      "en": "Can we discuss the details over email first?",
                      "ja": "まずメールで詳細について話し合えますか？",
                      "focus": "discuss the details over email"
                  },
                  {
                      "en": "They discussed the quotation over email before the call.",
                      "ja": "彼らは電話の前にメールで見積について話し合いました。",
                      "focus": "discussed the quotation over email"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "discuss further",
              "ja": "さらに話し合う",
              "image": "一度で終わらせず、追加で詳しく話す。",
              "pattern": "discuss further",
              "examples": [
                  {
                      "en": "Let's discuss this further after we review the data.",
                      "ja": "データを確認した後で、これについてさらに話し合いましょう。",
                      "focus": "discuss this further"
                  },
                  {
                      "en": "We need to discuss the cost issue further.",
                      "ja": "私たちはコスト問題についてさらに話し合う必要があります。",
                      "focus": "discuss the cost issue further"
                  },
                  {
                      "en": "The client asked us to discuss the proposal further.",
                      "ja": "顧客は私たちに提案についてさらに話し合うよう求めました。",
                      "focus": "discuss the proposal further"
                  }
              ],
              "dailyExamples": []
          }
      ]
  },
  {
      "id": "confirm",
      "rank": 62,
      "word": "CONFIRM",
      "ipa": "/kənˈfɜːrm/",
      "kana": "コンファーム",
      "syllable": "con-firm",
      "transitivity": "他動詞",
      "importance": "★★★★☆ 重要",
      "core": "不確かな情報を確認して、確かな状態にする",
      "coreDetail": "CONFIRMは、日程・数量・条件・承認などを確認して確定させるビジネス向きの動詞です。checkより正式で、確認した結果を相手に伝える場面でもよく使います。",
      "coreVisual": {
          "from": [
              "未確認",
              "仮予定",
              "不明点",
              "承認待ち"
          ],
          "to": "確定・安心して進められる状態",
          "label": "不確か → 確定"
      },
      "meanings": [
          {
              "id": "confirm-info",
              "title": "① 情報・詳細を確認する",
              "pattern": "confirm + information/details",
              "transitivity": "他動詞",
              "structure": "S + confirm + O",
              "image": "不確かな情報を確かな状態にする。",
              "point": "confirm the details は仕事で非常によく使います。",
              "examples": [
                  {
                      "en": "Please confirm the details before we place the order.",
                      "ja": "私たちが発注する前に詳細を確認してください。",
                      "focus": "confirm",
                      "object": "the details"
                  },
                  {
                      "en": "We confirmed the product information with the supplier.",
                      "ja": "私たちは仕入先と製品情報を確認しました。",
                      "focus": "confirmed",
                      "object": "the product information"
                  },
                  {
                      "en": "Can you confirm the installation requirements?",
                      "ja": "設置条件を確認できますか？",
                      "focus": "confirm",
                      "object": "the installation requirements"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "confirm-date-schedule",
              "title": "② 日時・予定を確認する",
              "pattern": "confirm + date / time / schedule",
              "transitivity": "他動詞",
              "structure": "S + confirm + O",
              "image": "予定を確定して、相手と認識を合わせる。",
              "point": "会議・納期・訪問予定などでよく使います。",
              "examples": [
                  {
                      "en": "Please confirm the meeting time by this afternoon.",
                      "ja": "今日の午後までに会議時間を確認してください。",
                      "focus": "confirm",
                      "object": "the meeting time"
                  },
                  {
                      "en": "We confirmed the delivery schedule with the warehouse.",
                      "ja": "私たちは倉庫と納品スケジュールを確認しました。",
                      "focus": "confirmed",
                      "object": "the delivery schedule"
                  },
                  {
                      "en": "I will confirm the site visit date with the client.",
                      "ja": "私は顧客と現場訪問日を確認します。",
                      "focus": "confirm",
                      "object": "the site visit date"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "confirm-that",
              "title": "③ that節で事実を確認する",
              "pattern": "confirm that + 文",
              "transitivity": "他動詞",
              "structure": "S + confirm + that節",
              "image": "確認した事実を文で伝える。",
              "point": "メール文で Please confirm that ... とよく使います。",
              "examples": [
                  {
                      "en": "Please confirm that the quantity is correct.",
                      "ja": "数量が正しいことを確認してください。",
                      "focus": "confirm",
                      "object": "that the quantity is correct"
                  },
                  {
                      "en": "We confirmed that the payment had been received.",
                      "ja": "私たちは支払いを受け取ったことを確認しました。",
                      "focus": "confirmed",
                      "object": "that the payment had been received"
                  },
                  {
                      "en": "Can you confirm that the documents were sent?",
                      "ja": "資料が送られたことを確認できますか？",
                      "focus": "confirm",
                      "object": "that the documents were sent"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "confirm-whether",
              "title": "④ whether / if で可否を確認する",
              "pattern": "confirm whether / if + 文",
              "transitivity": "他動詞",
              "structure": "S + confirm + whether/if ...",
              "image": "できるかどうか、正しいかどうかを確認する。",
              "point": "まだ分からないことを確認する時に便利です。",
              "examples": [
                  {
                      "en": "Please confirm whether the product is in stock.",
                      "ja": "その製品の在庫があるか確認してください。",
                      "focus": "confirm",
                      "object": "whether the product is in stock"
                  },
                  {
                      "en": "We need to confirm if the client can accept the new date.",
                      "ja": "私たちは顧客が新しい日程を受け入れられるか確認する必要があります。",
                      "focus": "confirm",
                      "object": "if the client can accept the new date"
                  },
                  {
                      "en": "Can you confirm whether the price includes shipping?",
                      "ja": "その価格に送料が含まれているか確認できますか？",
                      "focus": "confirm",
                      "object": "whether the price includes shipping"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "confirm-with",
              "title": "⑤ 相手に確認する",
              "pattern": "confirm + 内容 + with + 相手",
              "transitivity": "他動詞",
              "structure": "S + confirm + O + with + 人",
              "image": "相手に確認して認識を合わせる。",
              "point": "社内外の確認連絡で非常に使いやすい型です。",
              "examples": [
                  {
                      "en": "I will confirm the price with our manager.",
                      "ja": "私は上司と価格を確認します。",
                      "focus": "confirm",
                      "object": "the price"
                  },
                  {
                      "en": "Please confirm the delivery address with the customer.",
                      "ja": "顧客と納品先住所を確認してください。",
                      "focus": "confirm",
                      "object": "the delivery address"
                  },
                  {
                      "en": "We confirmed the specifications with the technical team.",
                      "ja": "私たちは技術チームと仕様を確認しました。",
                      "focus": "confirmed",
                      "object": "the specifications"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "be-confirmed",
              "title": "⑥ 確定される・確認される",
              "pattern": "be confirmed",
              "transitivity": "受け身",
              "structure": "S + be confirmed",
              "image": "予定や条件が正式に確定する。",
              "point": "主語を予定・注文・条件にしたい時に便利です。",
              "examples": [
                  {
                      "en": "The delivery date has been confirmed.",
                      "ja": "納品日は確定しました。",
                      "focus": "confirmed",
                      "object": "the delivery date"
                  },
                  {
                      "en": "The order was confirmed yesterday.",
                      "ja": "その注文は昨日確認されました。",
                      "focus": "confirmed",
                      "object": "the order"
                  },
                  {
                      "en": "The final price will be confirmed after the meeting.",
                      "ja": "最終価格は会議後に確定されます。",
                      "focus": "confirmed",
                      "object": "the final price"
                  }
              ],
              "dailyExamples": []
          }
      ],
      "collocations": [
          {
              "phrase": "confirm the details",
              "ja": "詳細を確認する",
              "image": "細かい条件や内容を確定させる。",
              "pattern": "confirm the details",
              "examples": [
                  {
                      "en": "Please confirm the details before sending the quotation.",
                      "ja": "見積を送る前に詳細を確認してください。",
                      "focus": "confirm the details"
                  },
                  {
                      "en": "We confirmed the details with the customer by email.",
                      "ja": "私たちはメールで顧客と詳細を確認しました。",
                      "focus": "confirmed the details"
                  },
                  {
                      "en": "I need to confirm the details of the order.",
                      "ja": "私は注文の詳細を確認する必要があります。",
                      "focus": "confirm the details"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "confirm the schedule",
              "ja": "予定を確認する",
              "image": "日時や流れを確定させる。",
              "pattern": "confirm the schedule",
              "examples": [
                  {
                      "en": "Let's confirm the schedule for next week.",
                      "ja": "来週の予定を確認しましょう。",
                      "focus": "confirm the schedule"
                  },
                  {
                      "en": "We confirmed the schedule with the installation team.",
                      "ja": "私たちは設置チームと予定を確認しました。",
                      "focus": "confirmed the schedule"
                  },
                  {
                      "en": "Please confirm the schedule before booking the flight.",
                      "ja": "航空券を予約する前に予定を確認してください。",
                      "focus": "confirm the schedule"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "confirm availability",
              "ja": "対応可能か・空きがあるか確認する",
              "image": "人・在庫・日程が利用可能か確認する。",
              "pattern": "confirm availability",
              "examples": [
                  {
                      "en": "Please confirm availability of the product.",
                      "ja": "その製品の在庫状況を確認してください。",
                      "focus": "confirm availability"
                  },
                  {
                      "en": "We confirmed availability of the meeting room.",
                      "ja": "私たちは会議室の空き状況を確認しました。",
                      "focus": "confirmed availability"
                  },
                  {
                      "en": "Can you confirm your availability for Friday?",
                      "ja": "金曜日のご都合を確認できますか？",
                      "focus": "confirm your availability"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "confirm receipt",
              "ja": "受領を確認する",
              "image": "受け取ったことを相手に伝える。",
              "pattern": "confirm receipt",
              "examples": [
                  {
                      "en": "Please confirm receipt of this email.",
                      "ja": "このメールの受領を確認してください。",
                      "focus": "confirm receipt"
                  },
                  {
                      "en": "We confirmed receipt of the documents.",
                      "ja": "私たちは資料の受領を確認しました。",
                      "focus": "confirmed receipt"
                  },
                  {
                      "en": "The client confirmed receipt of the quotation.",
                      "ja": "顧客は見積の受領を確認しました。",
                      "focus": "confirmed receipt"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "confirm approval",
              "ja": "承認を確認する",
              "image": "承認が出ているかを確定する。",
              "pattern": "confirm approval",
              "examples": [
                  {
                      "en": "Please confirm approval before we proceed.",
                      "ja": "進める前に承認を確認してください。",
                      "focus": "confirm approval"
                  },
                  {
                      "en": "We confirmed approval from the manager.",
                      "ja": "私たちは上司からの承認を確認しました。",
                      "focus": "confirmed approval"
                  },
                  {
                      "en": "Can you confirm approval for the additional cost?",
                      "ja": "追加費用の承認を確認できますか？",
                      "focus": "confirm approval"
                  }
              ],
              "dailyExamples": []
          }
      ],
      "phrasalVerbs": [
          {
              "phrase": "confirm with",
              "ja": "〜に確認する",
              "image": "相手に確認して情報を確定させる。",
              "pattern": "confirm + 内容 + with + 相手",
              "examples": [
                  {
                      "en": "Please confirm the quantity with the supplier.",
                      "ja": "仕入先と数量を確認してください。",
                      "focus": "confirm the quantity with"
                  },
                  {
                      "en": "I confirmed the deadline with the client.",
                      "ja": "私は顧客と締切を確認しました。",
                      "focus": "confirmed the deadline with"
                  },
                  {
                      "en": "We need to confirm the address with the customer.",
                      "ja": "私たちは顧客と住所を確認する必要があります。",
                      "focus": "confirm the address with"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "confirm by",
              "ja": "〜までに確認する",
              "image": "期限を決めて確認する。",
              "pattern": "confirm + 内容 + by + 時間・日付",
              "examples": [
                  {
                      "en": "Please confirm the order by noon.",
                      "ja": "正午までに注文を確認してください。",
                      "focus": "confirm the order by"
                  },
                  {
                      "en": "We need to confirm the delivery date by Friday.",
                      "ja": "私たちは金曜日までに納品日を確認する必要があります。",
                      "focus": "confirm the delivery date by"
                  },
                  {
                      "en": "Can you confirm the final price by tomorrow?",
                      "ja": "明日までに最終価格を確認できますか？",
                      "focus": "confirm the final price by"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "confirm before",
              "ja": "〜する前に確認する",
              "image": "次の行動に進む前に確認する。",
              "pattern": "confirm + 内容 + before + 動作",
              "examples": [
                  {
                      "en": "Please confirm the details before ordering the parts.",
                      "ja": "部品を発注する前に詳細を確認してください。",
                      "focus": "confirm the details before"
                  },
                  {
                      "en": "We confirmed the drawings before starting production.",
                      "ja": "私たちは製作を始める前に図面を確認しました。",
                      "focus": "confirmed the drawings before"
                  },
                  {
                      "en": "I will confirm the price before replying to the client.",
                      "ja": "顧客に返信する前に価格を確認します。",
                      "focus": "confirm the price before"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "confirm in writing",
              "ja": "書面で確認する",
              "image": "口頭ではなく記録に残る形で確認する。",
              "pattern": "confirm in writing",
              "examples": [
                  {
                      "en": "Please confirm the agreement in writing.",
                      "ja": "合意内容を書面で確認してください。",
                      "focus": "confirm the agreement in writing"
                  },
                  {
                      "en": "We confirmed the new schedule in writing.",
                      "ja": "私たちは新しい予定を書面で確認しました。",
                      "focus": "confirmed the new schedule in writing"
                  },
                  {
                      "en": "The customer asked us to confirm the change in writing.",
                      "ja": "顧客は私たちに変更を書面で確認するよう求めました。",
                      "focus": "confirm the change in writing"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "confirm via email",
              "ja": "メールで確認する",
              "image": "メールを使って確認する。",
              "pattern": "confirm + 内容 + via email",
              "examples": [
                  {
                      "en": "Please confirm the delivery date via email.",
                      "ja": "納品日をメールで確認してください。",
                      "focus": "confirm the delivery date via email"
                  },
                  {
                      "en": "We confirmed the quotation via email.",
                      "ja": "私たちは見積をメールで確認しました。",
                      "focus": "confirmed the quotation via email"
                  },
                  {
                      "en": "Can you confirm the meeting time via email?",
                      "ja": "会議時間をメールで確認できますか？",
                      "focus": "confirm the meeting time via email"
                  }
              ],
              "dailyExamples": []
          }
      ]
  },
  {
      "id": "receive",
      "rank": 63,
      "word": "RECEIVE",
      "ipa": "/rɪˈsiːv/",
      "kana": "リシーヴ",
      "syllable": "re-ceive",
      "transitivity": "他動詞",
      "importance": "★★★☆☆ 基本",
      "core": "相手や外側から来たものを正式に受け取る",
      "coreDetail": "RECEIVEは、メール・資料・注文・支払い・承認などを正式に受け取る時に使います。getより丁寧で、ビジネスメールや報告文に向いています。",
      "coreVisual": {
          "from": [
              "メール",
              "資料",
              "注文",
              "支払い",
              "承認"
          ],
          "to": "自分・会社・担当部署",
          "label": "外側から届く → 受け取る"
      },
      "meanings": [
          {
              "id": "receive-item",
              "title": "① 物・資料・メールを受け取る",
              "pattern": "receive + 名詞",
              "transitivity": "他動詞",
              "structure": "S + receive + O",
              "image": "相手から届いたものを正式に受け取る。",
              "point": "getより丁寧でビジネス文に合います。",
              "examples": [
                  {
                      "en": "I received your email this morning.",
                      "ja": "私は今朝あなたのメールを受け取りました。",
                      "focus": "received",
                      "object": "your email"
                  },
                  {
                      "en": "We received the documents from the supplier.",
                      "ja": "私たちは仕入先から資料を受け取りました。",
                      "focus": "received",
                      "object": "the documents"
                  },
                  {
                      "en": "Did you receive the sample package?",
                      "ja": "あなたはサンプルの荷物を受け取りましたか？",
                      "focus": "receive",
                      "object": "the sample package"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "receive-from",
              "title": "② 相手から受け取る",
              "pattern": "receive + 名詞 + from + 相手",
              "transitivity": "他動詞",
              "structure": "S + receive + O + from + 人・会社",
              "image": "誰から受け取ったかを明確にする。",
              "point": "from を使うと受け取り元を自然に表せます。",
              "examples": [
                  {
                      "en": "We received the quotation from the vendor.",
                      "ja": "私たちは販売業者から見積を受け取りました。",
                      "focus": "received",
                      "object": "the quotation"
                  },
                  {
                      "en": "I received a request from the client yesterday.",
                      "ja": "私は昨日、顧客から依頼を受け取りました。",
                      "focus": "received",
                      "object": "a request"
                  },
                  {
                      "en": "The team received feedback from the manager.",
                      "ja": "チームは上司からフィードバックを受け取りました。",
                      "focus": "received",
                      "object": "feedback"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "receive-information",
              "title": "③ 情報・連絡を受け取る",
              "pattern": "receive + information / notice / update",
              "transitivity": "他動詞",
              "structure": "S + receive + O",
              "image": "連絡や更新情報を受け取る。",
              "point": "information, notice, update と相性が良いです。",
              "examples": [
                  {
                      "en": "We received updated information about the delivery.",
                      "ja": "私たちは納品に関する更新情報を受け取りました。",
                      "focus": "received",
                      "object": "updated information"
                  },
                  {
                      "en": "Please let me know when you receive the notice.",
                      "ja": "通知を受け取ったら知らせてください。",
                      "focus": "receive",
                      "object": "the notice"
                  },
                  {
                      "en": "The sales team received an update from the factory.",
                      "ja": "営業チームは工場から更新情報を受け取りました。",
                      "focus": "received",
                      "object": "an update"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "receive-payment-order",
              "title": "④ 支払い・注文を受け取る",
              "pattern": "receive + payment / order",
              "transitivity": "他動詞",
              "structure": "S + receive + O",
              "image": "会社として支払いや注文を受け取る。",
              "point": "経理・受注・営業報告でよく使います。",
              "examples": [
                  {
                      "en": "We received the payment yesterday.",
                      "ja": "私たちは昨日、支払いを受け取りました。",
                      "focus": "received",
                      "object": "the payment"
                  },
                  {
                      "en": "The company received a large order from a new customer.",
                      "ja": "会社は新規顧客から大きな注文を受け取りました。",
                      "focus": "received",
                      "object": "a large order"
                  },
                  {
                      "en": "Please confirm when you receive the deposit.",
                      "ja": "入金を受け取ったら確認してください。",
                      "focus": "receive",
                      "object": "the deposit"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "receive-approval",
              "title": "⑤ 承認・許可を受ける",
              "pattern": "receive + approval / permission",
              "transitivity": "他動詞",
              "structure": "S + receive + O",
              "image": "上司や顧客から正式な承認を受ける。",
              "point": "approval は仕事で非常に重要な組み合わせです。",
              "examples": [
                  {
                      "en": "We received approval from the manager.",
                      "ja": "私たちは上司から承認を受けました。",
                      "focus": "received",
                      "object": "approval"
                  },
                  {
                      "en": "The project received permission to proceed.",
                      "ja": "そのプロジェクトは進行する許可を受けました。",
                      "focus": "received",
                      "object": "permission"
                  },
                  {
                      "en": "Please start production after we receive approval.",
                      "ja": "承認を受けた後で製作を始めてください。",
                      "focus": "receive",
                      "object": "approval"
                  }
              ],
              "dailyExamples": []
          },
          {
              "id": "be-received",
              "title": "⑥ 受け取られる・受領される",
              "pattern": "be received",
              "transitivity": "受け身",
              "structure": "S + be received",
              "image": "送ったものが相手側で受け取られる。",
              "point": "メールや資料の受領確認で使いやすい受け身です。",
              "examples": [
                  {
                      "en": "The documents were received by the customer.",
                      "ja": "資料は顧客に受け取られました。",
                      "focus": "received",
                      "object": "the documents"
                  },
                  {
                      "en": "Your order has been received.",
                      "ja": "あなたの注文は受け付けられました。",
                      "focus": "received",
                      "object": "your order"
                  },
                  {
                      "en": "The email was received without any issue.",
                      "ja": "そのメールは問題なく受信されました。",
                      "focus": "received",
                      "object": "the email"
                  }
              ],
              "dailyExamples": []
          }
      ],
      "collocations": [
          {
              "phrase": "receive an email",
              "ja": "メールを受け取る",
              "image": "メールが自分に届く。",
              "pattern": "receive an email",
              "examples": [
                  {
                      "en": "I received an email from the client this morning.",
                      "ja": "私は今朝、顧客からメールを受け取りました。",
                      "focus": "received an email"
                  },
                  {
                      "en": "Please reply after you receive an email from them.",
                      "ja": "彼らからメールを受け取った後で返信してください。",
                      "focus": "receive an email"
                  },
                  {
                      "en": "We received an email about the schedule change.",
                      "ja": "私たちは予定変更についてのメールを受け取りました。",
                      "focus": "received an email"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "receive a request",
              "ja": "依頼を受ける",
              "image": "相手からお願いや要望を受け取る。",
              "pattern": "receive a request",
              "examples": [
                  {
                      "en": "We received a request for additional samples.",
                      "ja": "私たちは追加サンプルの依頼を受けました。",
                      "focus": "received a request"
                  },
                  {
                      "en": "I received a request to update the quotation.",
                      "ja": "私は見積を更新する依頼を受けました。",
                      "focus": "received a request"
                  },
                  {
                      "en": "The support team received a request from the customer.",
                      "ja": "サポートチームは顧客から依頼を受けました。",
                      "focus": "received a request"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "receive payment",
              "ja": "支払いを受け取る",
              "image": "入金や支払いが届く。",
              "pattern": "receive payment",
              "examples": [
                  {
                      "en": "We received payment for the first invoice.",
                      "ja": "私たちは最初の請求書の支払いを受け取りました。",
                      "focus": "received payment"
                  },
                  {
                      "en": "Please ship the product after we receive payment.",
                      "ja": "支払いを受け取った後で商品を出荷してください。",
                      "focus": "receive payment"
                  },
                  {
                      "en": "The finance team confirmed that we received payment.",
                      "ja": "経理チームは私たちが支払いを受け取ったことを確認しました。",
                      "focus": "received payment"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "receive feedback",
              "ja": "フィードバックを受け取る",
              "image": "意見や評価を受け取る。",
              "pattern": "receive feedback",
              "examples": [
                  {
                      "en": "We received feedback from the customer after the demo.",
                      "ja": "私たちはデモ後に顧客からフィードバックを受け取りました。",
                      "focus": "received feedback"
                  },
                  {
                      "en": "The design team received feedback on the new layout.",
                      "ja": "デザインチームは新しいレイアウトについてフィードバックを受け取りました。",
                      "focus": "received feedback"
                  },
                  {
                      "en": "Please share the report after you receive feedback.",
                      "ja": "フィードバックを受け取った後で報告書を共有してください。",
                      "focus": "receive feedback"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "receive approval",
              "ja": "承認を受ける",
              "image": "正式に承認を得る。",
              "pattern": "receive approval",
              "examples": [
                  {
                      "en": "We received approval to proceed with the order.",
                      "ja": "私たちは注文を進める承認を受けました。",
                      "focus": "received approval"
                  },
                  {
                      "en": "Please wait until we receive approval from the client.",
                      "ja": "顧客から承認を受けるまで待ってください。",
                      "focus": "receive approval"
                  },
                  {
                      "en": "The proposal received approval from management.",
                      "ja": "その提案は経営陣から承認を受けました。",
                      "focus": "received approval"
                  }
              ],
              "dailyExamples": []
          }
      ],
      "phrasalVerbs": [
          {
              "phrase": "receive from",
              "ja": "〜から受け取る",
              "image": "受け取り元を示す。",
              "pattern": "receive + 名詞 + from + 相手",
              "examples": [
                  {
                      "en": "We received the files from the designer.",
                      "ja": "私たちはデザイナーからファイルを受け取りました。",
                      "focus": "received the files from"
                  },
                  {
                      "en": "I received the final price from the supplier.",
                      "ja": "私は仕入先から最終価格を受け取りました。",
                      "focus": "received the final price from"
                  },
                  {
                      "en": "The team received instructions from the manager.",
                      "ja": "チームは上司から指示を受けました。",
                      "focus": "received instructions from"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "receive by",
              "ja": "〜までに受け取る",
              "image": "受け取り期限を表す。",
              "pattern": "receive + 名詞 + by + 時間・日付",
              "examples": [
                  {
                      "en": "We need to receive the samples by Friday.",
                      "ja": "私たちは金曜日までにサンプルを受け取る必要があります。",
                      "focus": "receive the samples by"
                  },
                  {
                      "en": "Please make sure we receive the drawings by noon.",
                      "ja": "正午までに図面を受け取れるようにしてください。",
                      "focus": "receive the drawings by"
                  },
                  {
                      "en": "The client wants to receive the quotation by tomorrow.",
                      "ja": "顧客は明日までに見積を受け取りたいと思っています。",
                      "focus": "receive the quotation by"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "receive in",
              "ja": "〜の形で受け取る",
              "image": "受け取り形式や状態を表す。",
              "pattern": "receive + 名詞 + in + 形式",
              "examples": [
                  {
                      "en": "We received the data in Excel format.",
                      "ja": "私たちはExcel形式でデータを受け取りました。",
                      "focus": "received the data in"
                  },
                  {
                      "en": "Please send the file so we can receive it in PDF format.",
                      "ja": "PDF形式で受け取れるようにファイルを送ってください。",
                      "focus": "receive it in"
                  },
                  {
                      "en": "The customer received the product in good condition.",
                      "ja": "顧客は製品を良い状態で受け取りました。",
                      "focus": "received the product in"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "receive as",
              "ja": "〜として受け取る",
              "image": "役割や扱い方を表す。",
              "pattern": "receive + 名詞 + as + 名詞",
              "examples": [
                  {
                      "en": "We received the email as official confirmation.",
                      "ja": "私たちはそのメールを正式な確認として受け取りました。",
                      "focus": "received the email as"
                  },
                  {
                      "en": "The team received the document as a final version.",
                      "ja": "チームはその資料を最終版として受け取りました。",
                      "focus": "received the document as"
                  },
                  {
                      "en": "Please treat the message as received confirmation.",
                      "ja": "そのメッセージを受領確認として扱ってください。",
                      "focus": "as received confirmation"
                  }
              ],
              "dailyExamples": []
          },
          {
              "phrase": "receive via",
              "ja": "〜経由で受け取る",
              "image": "受け取り手段を表す。",
              "pattern": "receive + 名詞 + via + 手段",
              "examples": [
                  {
                      "en": "We received the order via email.",
                      "ja": "私たちはメール経由で注文を受け取りました。",
                      "focus": "received the order via"
                  },
                  {
                      "en": "The customer received the update via the online system.",
                      "ja": "顧客はオンラインシステム経由で更新情報を受け取りました。",
                      "focus": "received the update via"
                  },
                  {
                      "en": "Please confirm whether you received the file via the shared folder.",
                      "ja": "共有フォルダ経由でファイルを受け取ったか確認してください。",
                      "focus": "received the file via"
                  }
              ],
              "dailyExamples": []
          }
      ]
  },
  {
    "id": "deliver",
    "rank": 64,
    "word": "DELIVER",
    "ipa": "/dɪˈlɪvər/",
    "kana": "デリバー",
    "syllable": "de-liv-er",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★☆☆ 基本",
    "core": "相手に届くところまで確実に運ぶ・約束した結果を出す",
    "coreDetail": "DELIVERは、商品・資料・メール・サービス・成果を、相手が受け取れる状態まで届ける動詞です。仕事では「納品する」「提出する」「実行して結果を出す」という意味でよく使います。",
    "coreVisual": {
        "from": [
            "商品",
            "資料",
            "約束",
            "サービス",
            "成果"
        ],
        "to": "顧客・担当者・現場・結果",
        "label": "こちら側から相手へ確実に届く"
    },
    "meanings": [
        {
            "id": "deliver-products",
            "title": "① 商品・資料を届ける・納品する",
            "pattern": "deliver + 商品/資料",
            "transitivity": "他動詞",
            "structure": "S + deliver + O",
            "image": "物や資料を相手の手元に届く状態にする。",
            "point": "deliver products / deliver documents は、商品や書類を届ける時の基本です。",
            "examples": [
                {
                    "en": "We delivered the samples to the client yesterday.",
                    "ja": "私たちは昨日、顧客にサンプルを納品しました。",
                    "focus": "delivered",
                    "object": "the samples"
                },
                {
                    "en": "Please deliver the documents to the site by Friday.",
                    "ja": "金曜日までに資料を現場へ届けてください。",
                    "focus": "deliver",
                    "object": "the documents"
                },
                {
                    "en": "The supplier delivered the parts earlier than expected.",
                    "ja": "仕入先は予定より早く部品を納品しました。",
                    "focus": "delivered",
                    "object": "the parts"
                }
            ]
        },
        {
            "id": "deliver-results",
            "title": "② 成果・結果を出す",
            "pattern": "deliver + results/value/performance",
            "transitivity": "他動詞",
            "structure": "S + deliver + O",
            "image": "約束した成果を形にして相手に示す。",
            "point": "deliver results は、仕事で成果を出すという意味でよく使います。",
            "examples": [
                {
                    "en": "The team delivered strong results this quarter.",
                    "ja": "チームは今四半期に良い成果を出しました。",
                    "focus": "delivered",
                    "object": "strong results"
                },
                {
                    "en": "This campaign delivered better sales than expected.",
                    "ja": "このキャンペーンは予想以上の売上を出しました。",
                    "focus": "delivered",
                    "object": "better sales"
                },
                {
                    "en": "We need to deliver value to our customers.",
                    "ja": "私たちは顧客に価値を提供する必要があります。",
                    "focus": "deliver",
                    "object": "value"
                }
            ]
        },
        {
            "id": "deliver-service",
            "title": "③ サービス・対応を提供する",
            "pattern": "deliver + service/support/solution",
            "transitivity": "他動詞",
            "structure": "S + deliver + O",
            "image": "相手が必要としているサービスや対応を実際に提供する。",
            "point": "deliver service は、サービス品質や顧客対応で使いやすい表現です。",
            "examples": [
                {
                    "en": "We deliver technical support after installation.",
                    "ja": "私たちは設置後に技術サポートを提供します。",
                    "focus": "deliver",
                    "object": "technical support"
                },
                {
                    "en": "Our team delivers a complete solution for signage projects.",
                    "ja": "私たちのチームはサイン案件向けに総合的な解決策を提供します。",
                    "focus": "delivers",
                    "object": "a complete solution"
                },
                {
                    "en": "The company delivers reliable service to repeat customers.",
                    "ja": "その会社はリピート顧客に信頼できるサービスを提供しています。",
                    "focus": "delivers",
                    "object": "reliable service"
                }
            ]
        },
        {
            "id": "deliver-on-time",
            "title": "④ 期限通りに納める",
            "pattern": "deliver on time / deliver by + 日時",
            "transitivity": "自動詞・他動詞",
            "structure": "S + deliver + M",
            "image": "約束した期限までに届ける・終える。",
            "point": "納期や締切の話では deliver on time / deliver by Friday が便利です。",
            "examples": [
                {
                    "en": "We must deliver on time for this project.",
                    "ja": "私たちはこの案件を期限通りに納めなければなりません。",
                    "focus": "deliver on time"
                },
                {
                    "en": "Can the factory deliver by the end of the month?",
                    "ja": "工場は月末までに納品できますか？",
                    "focus": "deliver by"
                },
                {
                    "en": "The vendor failed to deliver on schedule.",
                    "ja": "その業者は予定通りに納品できませんでした。",
                    "focus": "deliver on schedule"
                }
            ]
        },
        {
            "id": "deliver-message",
            "title": "⑤ メッセージ・情報を伝える",
            "pattern": "deliver + message/presentation/report",
            "transitivity": "他動詞",
            "structure": "S + deliver + O",
            "image": "内容を相手に分かる形で伝える。",
            "point": "deliver a presentation は、発表を行うという意味です。",
            "examples": [
                {
                    "en": "She delivered the presentation to the client.",
                    "ja": "彼女は顧客にプレゼンを行いました。",
                    "focus": "delivered",
                    "object": "the presentation"
                },
                {
                    "en": "Please deliver this message to the sales team.",
                    "ja": "このメッセージを営業チームに伝えてください。",
                    "focus": "deliver",
                    "object": "this message"
                },
                {
                    "en": "He delivered a clear report during the meeting.",
                    "ja": "彼は会議中に分かりやすい報告をしました。",
                    "focus": "delivered",
                    "object": "a clear report"
                }
            ]
        },
        {
            "id": "deliver-promise",
            "title": "⑥ 約束・期待に応える",
            "pattern": "deliver on + promise/expectation",
            "transitivity": "自動詞",
            "structure": "S + deliver on + O",
            "image": "言ったことや期待されたことを実際に実現する。",
            "point": "deliver on a promise は、約束を果たすという意味です。",
            "examples": [
                {
                    "en": "We need to deliver on our promise to the customer.",
                    "ja": "私たちは顧客との約束を果たす必要があります。",
                    "focus": "deliver on",
                    "object": "our promise"
                },
                {
                    "en": "The new product delivered on expectations.",
                    "ja": "新商品は期待に応えました。",
                    "focus": "delivered on",
                    "object": "expectations"
                },
                {
                    "en": "The supplier did not deliver on the agreed conditions.",
                    "ja": "仕入先は合意した条件を果たしませんでした。",
                    "focus": "deliver on",
                    "object": "the agreed conditions"
                }
            ]
        }
    ],
    "collocations": [
        {
            "phrase": "deliver results",
            "ja": "成果を出す",
            "image": "努力や計画を実際の成果として出す。",
            "pattern": "deliver results",
            "examples": [
                {
                    "en": "The new sales approach delivered results quickly.",
                    "ja": "新しい営業方法はすぐに成果を出しました。",
                    "focus": "delivered results"
                },
                {
                    "en": "Management expects this project to deliver results.",
                    "ja": "経営陣はこの案件が成果を出すことを期待しています。",
                    "focus": "deliver results"
                },
                {
                    "en": "We need a plan that can deliver results within three months.",
                    "ja": "私たちは3か月以内に成果を出せる計画が必要です。",
                    "focus": "deliver results"
                }
            ]
        },
        {
            "phrase": "deliver value",
            "ja": "価値を提供する",
            "image": "顧客にとって意味のある価値を届ける。",
            "pattern": "deliver value",
            "examples": [
                {
                    "en": "Our proposal must deliver value to the client.",
                    "ja": "私たちの提案は顧客に価値を提供しなければなりません。",
                    "focus": "deliver value"
                },
                {
                    "en": "This service delivers value after installation.",
                    "ja": "このサービスは設置後に価値を提供します。",
                    "focus": "delivers value"
                },
                {
                    "en": "We should focus on delivering value, not only lowering prices.",
                    "ja": "私たちは価格を下げるだけでなく、価値を提供することに集中すべきです。",
                    "focus": "delivering value"
                }
            ]
        },
        {
            "phrase": "deliver a presentation",
            "ja": "プレゼンを行う",
            "image": "聞き手に向けて内容を発表する。",
            "pattern": "deliver a presentation",
            "examples": [
                {
                    "en": "I will deliver a presentation at the customer meeting.",
                    "ja": "私は顧客との会議でプレゼンを行います。",
                    "focus": "deliver a presentation"
                },
                {
                    "en": "She delivered a presentation about the new product.",
                    "ja": "彼女は新商品についてプレゼンを行いました。",
                    "focus": "delivered a presentation"
                },
                {
                    "en": "We need to prepare before delivering the presentation.",
                    "ja": "プレゼンを行う前に準備する必要があります。",
                    "focus": "delivering the presentation"
                }
            ]
        },
        {
            "phrase": "deliver on time",
            "ja": "期限通りに納める",
            "image": "約束した時間・日程に間に合わせる。",
            "pattern": "deliver on time",
            "examples": [
                {
                    "en": "The client expects us to deliver on time.",
                    "ja": "顧客は私たちが期限通りに納めることを期待しています。",
                    "focus": "deliver on time"
                },
                {
                    "en": "We delivered on time despite the short schedule.",
                    "ja": "短いスケジュールにもかかわらず、期限通りに納めました。",
                    "focus": "delivered on time"
                },
                {
                    "en": "Please check whether the supplier can deliver on time.",
                    "ja": "仕入先が期限通りに納品できるか確認してください。",
                    "focus": "deliver on time"
                }
            ]
        },
        {
            "phrase": "deliver a solution",
            "ja": "解決策を提供する",
            "image": "問題に対して使える解決策を出す。",
            "pattern": "deliver a solution",
            "examples": [
                {
                    "en": "We delivered a solution for the customer's installation problem.",
                    "ja": "私たちは顧客の設置問題に対する解決策を提供しました。",
                    "focus": "delivered a solution"
                },
                {
                    "en": "The engineering team can deliver a solution by next week.",
                    "ja": "技術チームは来週までに解決策を提供できます。",
                    "focus": "deliver a solution"
                },
                {
                    "en": "This product delivers a simple solution for small signs.",
                    "ja": "この商品は小型看板向けに簡単な解決策を提供します。",
                    "focus": "delivers a simple solution"
                }
            ]
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "deliver to",
            "ja": "〜へ届ける",
            "image": "届け先を示す。",
            "pattern": "deliver + O + to + 場所/人",
            "examples": [
                {
                    "en": "Please deliver the package to our office.",
                    "ja": "荷物を弊社オフィスへ届けてください。",
                    "focus": "deliver the package to"
                },
                {
                    "en": "The supplier delivered the materials to the factory.",
                    "ja": "仕入先は材料を工場へ納品しました。",
                    "focus": "delivered the materials to"
                },
                {
                    "en": "We will deliver the documents to the client tomorrow.",
                    "ja": "明日、顧客へ資料を届けます。",
                    "focus": "deliver the documents to"
                }
            ]
        },
        {
            "phrase": "deliver by",
            "ja": "〜までに納品する",
            "image": "締切や納期を示す。",
            "pattern": "deliver by + 日時",
            "examples": [
                {
                    "en": "Can you deliver by Friday morning?",
                    "ja": "金曜の午前中までに納品できますか？",
                    "focus": "deliver by"
                },
                {
                    "en": "The vendor promised to deliver by the end of the week.",
                    "ja": "業者は週末までに納品すると約束しました。",
                    "focus": "deliver by"
                },
                {
                    "en": "We need to deliver by the customer's deadline.",
                    "ja": "私たちは顧客の締切までに納める必要があります。",
                    "focus": "deliver by"
                }
            ]
        },
        {
            "phrase": "deliver on",
            "ja": "約束・期待に応える",
            "image": "約束や期待を実現する。",
            "pattern": "deliver on + promise/expectation",
            "examples": [
                {
                    "en": "We must deliver on the agreed schedule.",
                    "ja": "私たちは合意したスケジュールを守らなければなりません。",
                    "focus": "deliver on"
                },
                {
                    "en": "The new model delivered on performance expectations.",
                    "ja": "新モデルは性能面の期待に応えました。",
                    "focus": "delivered on"
                },
                {
                    "en": "The project team delivered on its promise.",
                    "ja": "プロジェクトチームは約束を果たしました。",
                    "focus": "delivered on"
                }
            ]
        },
        {
            "phrase": "deliver for",
            "ja": "〜のために成果を出す",
            "image": "相手や組織のために結果を出す。",
            "pattern": "deliver for + 人/組織",
            "examples": [
                {
                    "en": "We need to deliver for our key customer.",
                    "ja": "私たちは主要顧客のために成果を出す必要があります。",
                    "focus": "deliver for"
                },
                {
                    "en": "This team consistently delivers for the sales department.",
                    "ja": "このチームは営業部門のために継続的に成果を出しています。",
                    "focus": "delivers for"
                },
                {
                    "en": "The supplier failed to deliver for us this time.",
                    "ja": "その仕入先は今回、私たちの期待に応えられませんでした。",
                    "focus": "deliver for"
                }
            ]
        },
        {
            "phrase": "deliver against",
            "ja": "目標・基準に対して成果を出す",
            "image": "目標や基準と比較して結果を出す。",
            "pattern": "deliver against + target/plan",
            "examples": [
                {
                    "en": "We need to deliver against this year's sales target.",
                    "ja": "私たちは今年の売上目標に対して成果を出す必要があります。",
                    "focus": "deliver against"
                },
                {
                    "en": "The project delivered against the original plan.",
                    "ja": "その案件は当初計画に対して成果を出しました。",
                    "focus": "delivered against"
                },
                {
                    "en": "Please check whether we are delivering against the agreed KPI.",
                    "ja": "合意したKPIに対して成果を出せているか確認してください。",
                    "focus": "delivering against"
                }
            ]
        }
    ]
},
  {
    "id": "solve",
    "rank": 65,
    "word": "SOLVE",
    "ipa": "/sɑːlv/",
    "kana": "ソルヴ",
    "syllable": "solve",
    "transitivity": "他動詞",
    "importance": "★★★☆☆ 基本",
    "core": "問題の原因を見つけて解決済みの状態にする",
    "coreDetail": "SOLVEは、問題・課題・トラブル・疑問に答えを出し、解決した状態にする動詞です。仕事では solve a problem / solve an issue / solve a customer's problem の形がよく使われます。",
    "coreVisual": {
        "from": [
            "問題",
            "原因",
            "選択肢",
            "対応策"
        ],
        "to": "解決済みの状態",
        "label": "原因を見つける → 解決する"
    },
    "meanings": [
        {
            "id": "solve-problem",
            "title": "① 問題を解決する",
            "pattern": "solve + problem/issue",
            "transitivity": "他動詞",
            "structure": "S + solve + O",
            "image": "問題の原因を見つけ、解決状態にする。",
            "point": "solve the problem / solve the issue が最も基本です。",
            "examples": [
                {
                    "en": "We need to solve this issue today.",
                    "ja": "私たちは今日この問題を解決する必要があります。",
                    "focus": "solve",
                    "object": "this issue"
                },
                {
                    "en": "The team solved the problem after checking the wiring.",
                    "ja": "チームは配線を確認した後、その問題を解決しました。",
                    "focus": "solved",
                    "object": "the problem"
                },
                {
                    "en": "Can this update solve the error?",
                    "ja": "この更新でそのエラーを解決できますか？",
                    "focus": "solve",
                    "object": "the error"
                }
            ]
        },
        {
            "id": "solve-customer-problem",
            "title": "② 顧客の困りごとを解決する",
            "pattern": "solve + customer's problem",
            "transitivity": "他動詞",
            "structure": "S + solve + O",
            "image": "顧客が困っている状況に対して解決策を出す。",
            "point": "営業・サポートでは solve the customer's problem が重要です。",
            "examples": [
                {
                    "en": "We solved the customer's problem with a different product.",
                    "ja": "私たちは別の商品で顧客の問題を解決しました。",
                    "focus": "solved",
                    "object": "the customer's problem"
                },
                {
                    "en": "This service helps solve small installation problems.",
                    "ja": "このサービスは小さな設置問題の解決に役立ちます。",
                    "focus": "solve",
                    "object": "small installation problems"
                },
                {
                    "en": "Please ask what problem the customer wants to solve.",
                    "ja": "顧客がどの問題を解決したいのか確認してください。",
                    "focus": "solve",
                    "object": "what problem"
                }
            ]
        },
        {
            "id": "solve-by",
            "title": "③ 〜によって解決する",
            "pattern": "solve + O + by + 方法",
            "transitivity": "他動詞",
            "structure": "S + solve + O + M",
            "image": "どの方法で解決するかを示す。",
            "point": "by checking / by changing のように、解決方法を続けられます。",
            "examples": [
                {
                    "en": "We solved the issue by changing the power supply.",
                    "ja": "私たちは電源を変更することで問題を解決しました。",
                    "focus": "solved",
                    "object": "the issue"
                },
                {
                    "en": "They solved the delay by using another shipping route.",
                    "ja": "彼らは別の配送ルートを使って遅延を解決しました。",
                    "focus": "solved",
                    "object": "the delay"
                },
                {
                    "en": "You can solve this error by updating the settings.",
                    "ja": "設定を更新すればこのエラーを解決できます。",
                    "focus": "solve",
                    "object": "this error"
                }
            ]
        },
        {
            "id": "solve-before",
            "title": "④ 〜前に解決する",
            "pattern": "solve + O + before + 時点",
            "transitivity": "他動詞",
            "structure": "S + solve + O + M",
            "image": "期限や次工程の前に問題を解決する。",
            "point": "solve before installation のように、事前対応で使えます。",
            "examples": [
                {
                    "en": "We must solve this issue before installation.",
                    "ja": "設置前にこの問題を解決しなければなりません。",
                    "focus": "solve",
                    "object": "this issue"
                },
                {
                    "en": "Please solve the payment problem before shipping.",
                    "ja": "出荷前に支払いの問題を解決してください。",
                    "focus": "solve",
                    "object": "the payment problem"
                },
                {
                    "en": "The team solved the design issue before the client meeting.",
                    "ja": "チームは顧客との会議前に設計上の問題を解決しました。",
                    "focus": "solved",
                    "object": "the design issue"
                }
            ]
        },
        {
            "id": "solve-with",
            "title": "⑤ 〜を使って解決する",
            "pattern": "solve + O + with + 手段",
            "transitivity": "他動詞",
            "structure": "S + solve + O + M",
            "image": "道具・商品・仕組みを使って問題を解決する。",
            "point": "with a new system / with technical support のように使います。",
            "examples": [
                {
                    "en": "We solved the problem with a new control system.",
                    "ja": "私たちは新しい制御システムで問題を解決しました。",
                    "focus": "solved",
                    "object": "the problem"
                },
                {
                    "en": "The engineer solved the issue with a simple adjustment.",
                    "ja": "技術者は簡単な調整で問題を解決しました。",
                    "focus": "solved",
                    "object": "the issue"
                },
                {
                    "en": "This product can solve the problem with less wiring.",
                    "ja": "この商品は少ない配線でその問題を解決できます。",
                    "focus": "solve",
                    "object": "the problem"
                }
            ]
        },
        {
            "id": "solve-question",
            "title": "⑥ 疑問・課題に答えを出す",
            "pattern": "solve + question/challenge",
            "transitivity": "他動詞",
            "structure": "S + solve + O",
            "image": "はっきりしない課題や疑問に答えを出す。",
            "point": "solve a challenge は、課題を解決するという意味です。",
            "examples": [
                {
                    "en": "We need to solve the main challenge before launch.",
                    "ja": "発売前に主要な課題を解決する必要があります。",
                    "focus": "solve",
                    "object": "the main challenge"
                },
                {
                    "en": "The test results solved our question about brightness.",
                    "ja": "試験結果によって明るさに関する疑問が解決しました。",
                    "focus": "solved",
                    "object": "our question"
                },
                {
                    "en": "This meeting should solve the remaining concerns.",
                    "ja": "この会議で残っている懸念を解決するべきです。",
                    "focus": "solve",
                    "object": "the remaining concerns"
                }
            ]
        }
    ],
    "collocations": [
        {
            "phrase": "solve a problem",
            "ja": "問題を解決する",
            "image": "一番基本の表現。",
            "pattern": "solve a problem",
            "examples": [
                {
                    "en": "We need a practical way to solve this problem.",
                    "ja": "この問題を解決する実用的な方法が必要です。",
                    "focus": "solve this problem"
                },
                {
                    "en": "The new process solved a long-term problem.",
                    "ja": "新しい工程は長期的な問題を解決しました。",
                    "focus": "solved a long-term problem"
                },
                {
                    "en": "Please tell me how you solved the problem.",
                    "ja": "どのようにその問題を解決したか教えてください。",
                    "focus": "solved the problem"
                }
            ]
        },
        {
            "phrase": "solve an issue",
            "ja": "課題・不具合を解決する",
            "image": "仕事で issue と一緒によく使う。",
            "pattern": "solve an issue",
            "examples": [
                {
                    "en": "We solved an issue with the login page.",
                    "ja": "ログイン画面の不具合を解決しました。",
                    "focus": "solved an issue"
                },
                {
                    "en": "Can you help me solve this issue?",
                    "ja": "この問題を解決するのを手伝ってもらえますか？",
                    "focus": "solve this issue"
                },
                {
                    "en": "The support team solved the issue within one hour.",
                    "ja": "サポートチームは1時間以内に問題を解決しました。",
                    "focus": "solved the issue"
                }
            ]
        },
        {
            "phrase": "solve a customer's problem",
            "ja": "顧客の問題を解決する",
            "image": "顧客価値に直結する表現。",
            "pattern": "solve a customer's problem",
            "examples": [
                {
                    "en": "Good salespeople solve customers' problems.",
                    "ja": "良い営業担当者は顧客の問題を解決します。",
                    "focus": "solve customers' problems"
                },
                {
                    "en": "This option may solve the customer's problem.",
                    "ja": "この選択肢なら顧客の問題を解決できるかもしれません。",
                    "focus": "solve the customer's problem"
                },
                {
                    "en": "We should understand the customer's problem before solving it.",
                    "ja": "解決する前に顧客の問題を理解すべきです。",
                    "focus": "solving it"
                }
            ]
        },
        {
            "phrase": "solve a technical problem",
            "ja": "技術的な問題を解決する",
            "image": "技術・現場対応で使う。",
            "pattern": "solve a technical problem",
            "examples": [
                {
                    "en": "The engineer solved a technical problem at the site.",
                    "ja": "技術者は現場で技術的な問題を解決しました。",
                    "focus": "solved a technical problem"
                },
                {
                    "en": "We need more information to solve the technical problem.",
                    "ja": "技術的な問題を解決するには、さらに情報が必要です。",
                    "focus": "solve the technical problem"
                },
                {
                    "en": "This manual helps solve technical problems quickly.",
                    "ja": "このマニュアルは技術的な問題をすばやく解決するのに役立ちます。",
                    "focus": "solve technical problems"
                }
            ]
        },
        {
            "phrase": "solve the root cause",
            "ja": "根本原因を解決する",
            "image": "表面対応ではなく原因に対応する。",
            "pattern": "solve the root cause",
            "examples": [
                {
                    "en": "We should solve the root cause, not only the symptom.",
                    "ja": "症状だけでなく、根本原因を解決すべきです。",
                    "focus": "solve the root cause"
                },
                {
                    "en": "The team found and solved the root cause.",
                    "ja": "チームは根本原因を見つけて解決しました。",
                    "focus": "solved the root cause"
                },
                {
                    "en": "This change does not solve the root cause.",
                    "ja": "この変更では根本原因は解決しません。",
                    "focus": "solve the root cause"
                }
            ]
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "solve by",
            "ja": "〜によって解決する",
            "image": "解決方法を示す。",
            "pattern": "solve + O + by + 方法",
            "examples": [
                {
                    "en": "We solved the problem by checking the settings.",
                    "ja": "設定を確認することで問題を解決しました。",
                    "focus": "solved the problem by"
                },
                {
                    "en": "They solved the issue by adding one more staff member.",
                    "ja": "人員を1名追加することで問題を解決しました。",
                    "focus": "solved the issue by"
                },
                {
                    "en": "Can we solve this by changing the schedule?",
                    "ja": "スケジュールを変更することでこれを解決できますか？",
                    "focus": "solve this by"
                }
            ]
        },
        {
            "phrase": "solve with",
            "ja": "〜で解決する",
            "image": "使う手段や道具を示す。",
            "pattern": "solve + O + with + 手段",
            "examples": [
                {
                    "en": "We solved the issue with a backup unit.",
                    "ja": "予備機で問題を解決しました。",
                    "focus": "solved the issue with"
                },
                {
                    "en": "This software solves the problem with automatic checks.",
                    "ja": "このソフトは自動チェックで問題を解決します。",
                    "focus": "solves the problem with"
                },
                {
                    "en": "The team solved the risk with a revised plan.",
                    "ja": "チームは修正計画でリスクを解決しました。",
                    "focus": "solved the risk with"
                }
            ]
        },
        {
            "phrase": "solve before",
            "ja": "〜前に解決する",
            "image": "期限や工程の前に解決する。",
            "pattern": "solve + O + before + 時点",
            "examples": [
                {
                    "en": "Please solve this before the customer visit.",
                    "ja": "顧客訪問前にこれを解決してください。",
                    "focus": "solve this before"
                },
                {
                    "en": "We solved the issue before the shipment.",
                    "ja": "出荷前に問題を解決しました。",
                    "focus": "solved the issue before"
                },
                {
                    "en": "The team must solve the problem before production starts.",
                    "ja": "チームは生産開始前に問題を解決しなければなりません。",
                    "focus": "solve the problem before"
                }
            ]
        },
        {
            "phrase": "solve for",
            "ja": "〜を目指して解決する / 〜を考慮して解く",
            "image": "目的や制約を考慮して解決する。",
            "pattern": "solve for + 目的/条件",
            "examples": [
                {
                    "en": "We need to solve for both cost and quality.",
                    "ja": "コストと品質の両方を考慮して解決する必要があります。",
                    "focus": "solve for"
                },
                {
                    "en": "This design solves for limited installation space.",
                    "ja": "この設計は限られた設置スペースを考慮して解決しています。",
                    "focus": "solves for"
                },
                {
                    "en": "The proposal solves for the customer's budget limit.",
                    "ja": "その提案は顧客の予算制限を考慮して解決しています。",
                    "focus": "solves for"
                }
            ]
        },
        {
            "phrase": "solve through",
            "ja": "〜を通じて解決する",
            "image": "プロセスや協力を通じて解決する。",
            "pattern": "solve + O + through + 手段",
            "examples": [
                {
                    "en": "We solved the issue through better communication.",
                    "ja": "より良いコミュニケーションを通じて問題を解決しました。",
                    "focus": "solved the issue through"
                },
                {
                    "en": "The team solved the delay through close coordination.",
                    "ja": "チームは緊密な調整を通じて遅延を解決しました。",
                    "focus": "solved the delay through"
                },
                {
                    "en": "We can solve this through a short technical meeting.",
                    "ja": "短い技術打合せを通じてこれを解決できます。",
                    "focus": "solve this through"
                }
            ]
        }
    ]
},
  {
    "id": "report",
    "rank": 66,
    "word": "REPORT",
    "ipa": "/rɪˈpɔːrt/",
    "kana": "リポート",
    "syllable": "re-port",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★☆☆ 基本",
    "core": "確認した情報を整理して必要な相手に伝える",
    "coreDetail": "REPORTは、状況・結果・問題・数字などを整理して、上司・チーム・顧客に報告する動詞です。仕事では report the result / report to my manager / report on progress の形が重要です。",
    "coreVisual": {
        "from": [
            "状況",
            "結果",
            "問題",
            "数字",
            "現場情報"
        ],
        "to": "上司・チーム・顧客",
        "label": "情報を整理する → 必要な相手に報告する"
    },
    "meanings": [
        {
            "id": "report-result",
            "title": "① 結果・状況を報告する",
            "pattern": "report + result/status/issue",
            "transitivity": "他動詞",
            "structure": "S + report + O",
            "image": "確認した内容を整理して報告する。",
            "point": "report the result / report the status が基本です。",
            "examples": [
                {
                    "en": "We need to report the result by Friday.",
                    "ja": "私たちは金曜日までに結果を報告する必要があります。",
                    "focus": "report",
                    "object": "the result"
                },
                {
                    "en": "She reported a delay in the schedule.",
                    "ja": "彼女はスケジュールの遅れを報告しました。",
                    "focus": "reported",
                    "object": "a delay in the schedule"
                },
                {
                    "en": "Please report the current status after the meeting.",
                    "ja": "会議後に現在の状況を報告してください。",
                    "focus": "report",
                    "object": "the current status"
                }
            ]
        },
        {
            "id": "report-to",
            "title": "② 人・部署に報告する",
            "pattern": "report to + 人/部署",
            "transitivity": "自動詞",
            "structure": "S + report + to + 人",
            "image": "報告先を示す。",
            "point": "report to my manager は、上司に報告するという意味です。",
            "examples": [
                {
                    "en": "I reported the issue to my manager.",
                    "ja": "私はその問題を上司に報告しました。",
                    "focus": "reported the issue to",
                    "object": "my manager"
                },
                {
                    "en": "Please report to the sales manager after the visit.",
                    "ja": "訪問後に営業マネージャーへ報告してください。",
                    "focus": "report to"
                },
                {
                    "en": "The site team reported to the project leader every day.",
                    "ja": "現場チームは毎日プロジェクトリーダーに報告しました。",
                    "focus": "reported to"
                }
            ]
        },
        {
            "id": "report-on",
            "title": "③ 〜について報告する",
            "pattern": "report on + topic/progress",
            "transitivity": "自動詞",
            "structure": "S + report + on + 内容",
            "image": "報告するテーマを示す。",
            "point": "report on progress は、進捗について報告するという意味です。",
            "examples": [
                {
                    "en": "Can you report on the progress tomorrow?",
                    "ja": "明日、進捗について報告できますか？",
                    "focus": "report on"
                },
                {
                    "en": "The team reported on the test results.",
                    "ja": "チームは試験結果について報告しました。",
                    "focus": "reported on"
                },
                {
                    "en": "We will report on the customer's feedback next week.",
                    "ja": "来週、顧客のフィードバックについて報告します。",
                    "focus": "report on"
                }
            ]
        },
        {
            "id": "report-that",
            "title": "④ 〜だと報告する",
            "pattern": "report that + 文",
            "transitivity": "他動詞",
            "structure": "S + report + that節",
            "image": "報告内容を文で伝える。",
            "point": "report that the delivery is delayed のように、内容を文で続けます。",
            "examples": [
                {
                    "en": "The supplier reported that the shipment was delayed.",
                    "ja": "仕入先は出荷が遅れていると報告しました。",
                    "focus": "reported",
                    "object": "that the shipment was delayed"
                },
                {
                    "en": "We reported that the sample passed the test.",
                    "ja": "私たちはサンプルが試験に合格したと報告しました。",
                    "focus": "reported",
                    "object": "that the sample passed the test"
                },
                {
                    "en": "The engineer reported that the system was working correctly.",
                    "ja": "技術者はシステムが正常に動作していると報告しました。",
                    "focus": "reported",
                    "object": "that the system was working correctly"
                }
            ]
        },
        {
            "id": "report-problem",
            "title": "⑤ 問題・不具合を報告する",
            "pattern": "report + problem/error/accident",
            "transitivity": "他動詞",
            "structure": "S + report + O",
            "image": "問題や不具合を正式に知らせる。",
            "point": "report an error / report a problem は、トラブル報告で使います。",
            "examples": [
                {
                    "en": "Please report any errors to the support team.",
                    "ja": "エラーがあればサポートチームに報告してください。",
                    "focus": "report",
                    "object": "any errors"
                },
                {
                    "en": "The customer reported a problem with the product.",
                    "ja": "顧客は商品に関する問題を報告しました。",
                    "focus": "reported",
                    "object": "a problem"
                },
                {
                    "en": "We must report the accident immediately.",
                    "ja": "私たちはその事故をすぐに報告しなければなりません。",
                    "focus": "report",
                    "object": "the accident"
                }
            ]
        },
        {
            "id": "report-regularly",
            "title": "⑥ 定期的に報告する",
            "pattern": "report + regularly/weekly/monthly",
            "transitivity": "自動詞",
            "structure": "S + report + M",
            "image": "決まった頻度で報告する。",
            "point": "weekly / monthly と一緒に、定期報告を表せます。",
            "examples": [
                {
                    "en": "We report weekly on sales progress.",
                    "ja": "私たちは営業進捗について毎週報告します。",
                    "focus": "report weekly"
                },
                {
                    "en": "The project team reports monthly to management.",
                    "ja": "プロジェクトチームは毎月経営陣に報告します。",
                    "focus": "reports monthly"
                },
                {
                    "en": "Please report regularly until the issue is closed.",
                    "ja": "問題が完了するまで定期的に報告してください。",
                    "focus": "report regularly"
                }
            ]
        }
    ],
    "collocations": [
        {
            "phrase": "report the result",
            "ja": "結果を報告する",
            "image": "結果を相手に共有する基本。",
            "pattern": "report the result",
            "examples": [
                {
                    "en": "Please report the result after the inspection.",
                    "ja": "検査後に結果を報告してください。",
                    "focus": "report the result"
                },
                {
                    "en": "We reported the result to the customer yesterday.",
                    "ja": "昨日、顧客に結果を報告しました。",
                    "focus": "reported the result"
                },
                {
                    "en": "The team will report the result in tomorrow's meeting.",
                    "ja": "チームは明日の会議で結果を報告します。",
                    "focus": "report the result"
                }
            ]
        },
        {
            "phrase": "report progress",
            "ja": "進捗を報告する",
            "image": "途中経過を共有する。",
            "pattern": "report progress",
            "examples": [
                {
                    "en": "Please report progress every Friday.",
                    "ja": "毎週金曜日に進捗を報告してください。",
                    "focus": "report progress"
                },
                {
                    "en": "We reported progress to the client this morning.",
                    "ja": "今朝、顧客に進捗を報告しました。",
                    "focus": "reported progress"
                },
                {
                    "en": "The manager asked us to report progress more clearly.",
                    "ja": "マネージャーは私たちに進捗をもっと明確に報告するよう求めました。",
                    "focus": "report progress"
                }
            ]
        },
        {
            "phrase": "report an issue",
            "ja": "問題を報告する",
            "image": "不具合や懸念を知らせる。",
            "pattern": "report an issue",
            "examples": [
                {
                    "en": "The user reported an issue with the login page.",
                    "ja": "ユーザーはログイン画面の問題を報告しました。",
                    "focus": "reported an issue"
                },
                {
                    "en": "Please report any issue as soon as you find it.",
                    "ja": "問題を見つけたらすぐに報告してください。",
                    "focus": "report any issue"
                },
                {
                    "en": "We reported an issue with the shipment label.",
                    "ja": "出荷ラベルに関する問題を報告しました。",
                    "focus": "reported an issue"
                }
            ]
        },
        {
            "phrase": "report to management",
            "ja": "経営陣に報告する",
            "image": "上位者・管理層への報告。",
            "pattern": "report to management",
            "examples": [
                {
                    "en": "We need to report to management before making the change.",
                    "ja": "変更する前に経営陣へ報告する必要があります。",
                    "focus": "report to management"
                },
                {
                    "en": "The project leader reported to management every month.",
                    "ja": "プロジェクトリーダーは毎月経営陣に報告しました。",
                    "focus": "reported to management"
                },
                {
                    "en": "Please prepare the numbers before reporting to management.",
                    "ja": "経営陣に報告する前に数字を準備してください。",
                    "focus": "reporting to management"
                }
            ]
        },
        {
            "phrase": "report in writing",
            "ja": "書面で報告する",
            "image": "メールや文書で記録を残して報告する。",
            "pattern": "report in writing",
            "examples": [
                {
                    "en": "Please report the issue in writing.",
                    "ja": "その問題を書面で報告してください。",
                    "focus": "report the issue in writing"
                },
                {
                    "en": "We reported the change in writing to avoid confusion.",
                    "ja": "混乱を避けるため、その変更を書面で報告しました。",
                    "focus": "reported the change in writing"
                },
                {
                    "en": "The client asked us to report all changes in writing.",
                    "ja": "顧客はすべての変更を書面で報告するよう求めました。",
                    "focus": "report all changes in writing"
                }
            ]
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "report to",
            "ja": "〜に報告する / 直属である",
            "image": "報告先や直属先を示す。",
            "pattern": "report to + 人/部署",
            "examples": [
                {
                    "en": "I report to the sales director.",
                    "ja": "私は営業部長に直属しています。",
                    "focus": "report to"
                },
                {
                    "en": "Please report the issue to your manager.",
                    "ja": "その問題を上司に報告してください。",
                    "focus": "report the issue to"
                },
                {
                    "en": "The support team reports to the operations manager.",
                    "ja": "サポートチームは運用マネージャーに直属しています。",
                    "focus": "reports to"
                }
            ]
        },
        {
            "phrase": "report on",
            "ja": "〜について報告する",
            "image": "報告テーマを示す。",
            "pattern": "report on + 内容",
            "examples": [
                {
                    "en": "Please report on the installation progress.",
                    "ja": "設置進捗について報告してください。",
                    "focus": "report on"
                },
                {
                    "en": "The team reported on the customer survey.",
                    "ja": "チームは顧客アンケートについて報告しました。",
                    "focus": "reported on"
                },
                {
                    "en": "We will report on cost changes next week.",
                    "ja": "来週、コスト変更について報告します。",
                    "focus": "report on"
                }
            ]
        },
        {
            "phrase": "report back",
            "ja": "戻って報告する / 後で報告する",
            "image": "確認後に結果を伝える。",
            "pattern": "report back",
            "examples": [
                {
                    "en": "Please check the site and report back by noon.",
                    "ja": "現場を確認して正午までに報告してください。",
                    "focus": "report back"
                },
                {
                    "en": "I will report back after speaking with the supplier.",
                    "ja": "仕入先と話した後で報告します。",
                    "focus": "report back"
                },
                {
                    "en": "The team reported back with several concerns.",
                    "ja": "チームはいくつかの懸念を持ち帰って報告しました。",
                    "focus": "reported back"
                }
            ]
        },
        {
            "phrase": "report back to",
            "ja": "〜に後で報告する",
            "image": "報告相手を示す。",
            "pattern": "report back to + 人",
            "examples": [
                {
                    "en": "Please report back to me after the meeting.",
                    "ja": "会議後に私へ報告してください。",
                    "focus": "report back to"
                },
                {
                    "en": "She reported back to the client with the test result.",
                    "ja": "彼女は試験結果を顧客に後で報告しました。",
                    "focus": "reported back to"
                },
                {
                    "en": "We need to report back to management tomorrow.",
                    "ja": "明日、経営陣に報告する必要があります。",
                    "focus": "report back to"
                }
            ]
        },
        {
            "phrase": "report into",
            "ja": "〜の管轄・指揮下に入る",
            "image": "組織上の所属や報告ラインを示す。",
            "pattern": "report into + 部署/役職",
            "examples": [
                {
                    "en": "This team reports into the sales department.",
                    "ja": "このチームは営業部門の管轄に入っています。",
                    "focus": "reports into"
                },
                {
                    "en": "The new role will report into the operations manager.",
                    "ja": "新しい役職は運用マネージャーの指揮下に入ります。",
                    "focus": "report into"
                },
                {
                    "en": "Our support function reports into the service division.",
                    "ja": "私たちのサポート機能はサービス部門の管轄です。",
                    "focus": "reports into"
                }
            ]
        }
    ]
},
  {
    "id": "update",
    "rank": 67,
    "word": "UPDATE",
    "ipa": "/ˌʌpˈdeɪt/",
    "kana": "アップデイト",
    "syllable": "up-date",
    "transitivity": "他動詞・名詞",
    "importance": "★★★★☆ 仕事で重要",
    "core": "古い情報や状態を新しい状態にする",
    "coreDetail": "UPDATEは、資料・リスト・予定・システム・相手への共有内容を最新状態にする動詞です。仕事では「更新する」だけでなく「進捗を共有する」「状況を知らせる」という意味でも使います。",
    "coreVisual": {
        "from": [
            "古い資料",
            "前回の予定",
            "未共有の状況",
            "古いシステム"
        ],
        "to": "最新情報・共有済みの状態",
        "label": "古い状態 → 最新状態にする"
    },
    "meanings": [
        {
            "id": "update-file",
            "title": "① 資料・ファイルを更新する",
            "pattern": "update + 資料/ファイル/リスト",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "古い内容を直して最新版にする。",
            "point": "資料、顧客リスト、価格表などを新しくする時に使います。",
            "examples": [
                {
                    "en": "I updated the quotation before sending it to the client.",
                    "ja": "顧客へ送る前に見積書を更新しました。",
                    "focus": "updated"
                },
                {
                    "en": "Please update the customer list by the end of the day.",
                    "ja": "本日中に顧客リストを更新してください。",
                    "focus": "update"
                },
                {
                    "en": "We need to update the presentation with the latest numbers.",
                    "ja": "最新の数字を入れてプレゼン資料を更新する必要があります。",
                    "focus": "update"
                }
            ]
        },
        {
            "id": "update-person",
            "title": "② 人に最新情報を共有する",
            "pattern": "update + 人 + on + 内容",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "相手に現在の状況を知らせる。",
            "point": "update you on the status は仕事メールで非常によく使います。",
            "examples": [
                {
                    "en": "I will update you on the delivery schedule tomorrow.",
                    "ja": "明日、納品スケジュールについて最新情報を共有します。",
                    "focus": "update"
                },
                {
                    "en": "Please update the team on the project status.",
                    "ja": "プロジェクト状況についてチームに共有してください。",
                    "focus": "update"
                },
                {
                    "en": "She updated the manager on the client meeting.",
                    "ja": "彼女は顧客との打ち合わせについて上司に報告しました。",
                    "focus": "updated"
                }
            ]
        },
        {
            "id": "update-schedule",
            "title": "③ 予定・スケジュールを更新する",
            "pattern": "update + schedule/timeline/deadline",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "日程や予定を新情報に合わせる。",
            "point": "納期変更や工程表の修正で使います。",
            "examples": [
                {
                    "en": "We updated the schedule after the client changed the deadline.",
                    "ja": "顧客が締切を変更した後、スケジュールを更新しました。",
                    "focus": "updated"
                },
                {
                    "en": "Can you update the project timeline after the meeting?",
                    "ja": "会議後にプロジェクト工程表を更新できますか？",
                    "focus": "update"
                },
                {
                    "en": "The sales team updated the visit schedule for next week.",
                    "ja": "営業チームは来週の訪問予定を更新しました。",
                    "focus": "updated"
                }
            ]
        },
        {
            "id": "update-system",
            "title": "④ システム・アプリを更新する",
            "pattern": "update + system/app/software",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "古いバージョンを新しくする。",
            "point": "IT、アプリ、管理システムでよく使います。",
            "examples": [
                {
                    "en": "We updated the system to fix the login issue.",
                    "ja": "ログイン問題を修正するためにシステムを更新しました。",
                    "focus": "updated"
                },
                {
                    "en": "Please update the app before using the new feature.",
                    "ja": "新機能を使う前にアプリを更新してください。",
                    "focus": "update"
                },
                {
                    "en": "The IT team updated the software last night.",
                    "ja": "ITチームは昨夜ソフトウェアを更新しました。",
                    "focus": "updated"
                }
            ]
        },
        {
            "id": "update-records",
            "title": "⑤ 記録・ステータスを更新する",
            "pattern": "update + records/status/history",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "管理データを最新にする。",
            "point": "Salesforce、受注状況、対応履歴などで使いやすいです。",
            "examples": [
                {
                    "en": "I updated the sales record after the customer visit.",
                    "ja": "顧客訪問後に営業記録を更新しました。",
                    "focus": "updated"
                },
                {
                    "en": "Please update the order status in the system.",
                    "ja": "システム上の注文ステータスを更新してください。",
                    "focus": "update"
                },
                {
                    "en": "We updated the meeting history for future reference.",
                    "ja": "今後の確認のために会議履歴を更新しました。",
                    "focus": "updated"
                }
            ]
        },
        {
            "id": "give-update",
            "title": "⑥ 最新情報・進捗を伝える",
            "pattern": "give/provide an update",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "情報をまとめて伝える。",
            "point": "名詞updateを使う自然な仕事表現です。",
            "examples": [
                {
                    "en": "I will give you an update after I confirm the details.",
                    "ja": "詳細確認後に最新情報をお伝えします。",
                    "focus": "give you an update"
                },
                {
                    "en": "Can you provide an update on the payment status?",
                    "ja": "支払い状況について最新情報を共有できますか？",
                    "focus": "provide an update"
                },
                {
                    "en": "We need an update before the client meeting.",
                    "ja": "顧客との会議前に最新情報が必要です。",
                    "focus": "update"
                }
            ]
        }
    ],
    "collocations": [
        {
            "phrase": "update the file",
            "ja": "ファイルを更新する",
            "image": "ファイルを最新版にする。",
            "pattern": "update the file",
            "examples": [
                {
                    "en": "Please update the file with the latest price.",
                    "ja": "最新価格を入れてファイルを更新してください。",
                    "focus": "update the file"
                },
                {
                    "en": "I updated the file before sharing it with the team.",
                    "ja": "チームに共有する前にファイルを更新しました。",
                    "focus": "updated the file"
                },
                {
                    "en": "We should update the file every Friday.",
                    "ja": "毎週金曜日にファイルを更新するべきです。",
                    "focus": "update the file"
                }
            ]
        },
        {
            "phrase": "update the status",
            "ja": "状況を更新する",
            "image": "進捗や処理状態を最新にする。",
            "pattern": "update the status",
            "examples": [
                {
                    "en": "Please update the status after you contact the client.",
                    "ja": "顧客に連絡した後、ステータスを更新してください。",
                    "focus": "update the status"
                },
                {
                    "en": "I updated the status to show that the order was shipped.",
                    "ja": "注文が出荷済みだと分かるようにステータスを更新しました。",
                    "focus": "updated the status"
                },
                {
                    "en": "The system automatically updates the status every hour.",
                    "ja": "システムは毎時間ステータスを自動更新します。",
                    "focus": "updates the status"
                }
            ]
        },
        {
            "phrase": "update someone on the progress",
            "ja": "進捗を共有する",
            "image": "相手に進み具合を知らせる。",
            "pattern": "update + 人 + on the progress",
            "examples": [
                {
                    "en": "I will update you on the progress this afternoon.",
                    "ja": "今日の午後に進捗を共有します。",
                    "focus": "update you on the progress"
                },
                {
                    "en": "Please update the client on the progress by email.",
                    "ja": "メールで顧客に進捗を共有してください。",
                    "focus": "update the client on the progress"
                },
                {
                    "en": "She updated us on the progress during the meeting.",
                    "ja": "彼女は会議中に進捗を共有してくれました。",
                    "focus": "updated us on the progress"
                }
            ]
        },
        {
            "phrase": "latest update",
            "ja": "最新情報",
            "image": "一番新しい情報や更新内容。",
            "pattern": "latest update",
            "examples": [
                {
                    "en": "Do you have the latest update from the supplier?",
                    "ja": "仕入先からの最新情報はありますか？",
                    "focus": "latest update"
                },
                {
                    "en": "The latest update shows a two-day delay.",
                    "ja": "最新情報では2日の遅れが示されています。",
                    "focus": "latest update"
                },
                {
                    "en": "Please share the latest update with the sales team.",
                    "ja": "最新情報を営業チームに共有してください。",
                    "focus": "latest update"
                }
            ]
        },
        {
            "phrase": "status update",
            "ja": "状況報告",
            "image": "現在の状況を短く伝える報告。",
            "pattern": "status update",
            "examples": [
                {
                    "en": "Please send me a status update before noon.",
                    "ja": "正午前に状況報告を送ってください。",
                    "focus": "status update"
                },
                {
                    "en": "We have a short status update every Monday.",
                    "ja": "毎週月曜日に短い状況報告を行います。",
                    "focus": "status update"
                },
                {
                    "en": "The manager asked for a status update on the project.",
                    "ja": "上司はその案件の状況報告を求めました。",
                    "focus": "status update"
                }
            ]
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "update on",
            "ja": "〜について最新情報を伝える",
            "image": "onで話題を示す。",
            "pattern": "update + 人 + on + 内容",
            "examples": [
                {
                    "en": "Please update me on the inspection result.",
                    "ja": "検査結果について最新情報を共有してください。",
                    "focus": "update me on"
                },
                {
                    "en": "I updated the team on the new delivery date.",
                    "ja": "新しい納品日についてチームに共有しました。",
                    "focus": "updated the team on"
                },
                {
                    "en": "We need to update management on the issue.",
                    "ja": "その問題について経営陣に共有する必要があります。",
                    "focus": "update management on"
                }
            ]
        },
        {
            "phrase": "update with",
            "ja": "〜を入れて更新する",
            "image": "withで追加する新情報を示す。",
            "pattern": "update + 名詞 + with + 新情報",
            "examples": [
                {
                    "en": "Please update the proposal with the new design.",
                    "ja": "新しいデザインを入れて提案書を更新してください。",
                    "focus": "update the proposal with"
                },
                {
                    "en": "I updated the report with the latest sales numbers.",
                    "ja": "最新の売上数字を入れて報告書を更新しました。",
                    "focus": "updated the report with"
                },
                {
                    "en": "We should update the catalog with the new product images.",
                    "ja": "新しい商品画像を入れてカタログを更新するべきです。",
                    "focus": "update the catalog with"
                }
            ]
        },
        {
            "phrase": "update in",
            "ja": "〜上で更新する",
            "image": "inで更新する場所やツールを示す。",
            "pattern": "update + 名詞 + in + system/tool",
            "examples": [
                {
                    "en": "Please update the customer information in Salesforce.",
                    "ja": "Salesforce上の顧客情報を更新してください。",
                    "focus": "update the customer information in"
                },
                {
                    "en": "I updated the order status in the system.",
                    "ja": "システム上の注文ステータスを更新しました。",
                    "focus": "updated the order status in"
                },
                {
                    "en": "We need to update the schedule in the shared calendar.",
                    "ja": "共有カレンダー上の予定を更新する必要があります。",
                    "focus": "update the schedule in"
                }
            ]
        },
        {
            "phrase": "update after",
            "ja": "〜の後に更新する",
            "image": "afterで更新のタイミングを示す。",
            "pattern": "update + 名詞 + after + 出来事",
            "examples": [
                {
                    "en": "Please update the record after the meeting.",
                    "ja": "会議後に記録を更新してください。",
                    "focus": "update the record after"
                },
                {
                    "en": "I updated the forecast after receiving the new order.",
                    "ja": "新しい注文を受けた後、予測を更新しました。",
                    "focus": "updated the forecast after"
                },
                {
                    "en": "We will update the plan after the client review.",
                    "ja": "顧客確認後に計画を更新します。",
                    "focus": "update the plan after"
                }
            ]
        },
        {
            "phrase": "keep updated",
            "ja": "最新情報を伝え続ける",
            "image": "keep + 人 + updatedで継続的に知らせる。",
            "pattern": "keep + 人 + updated",
            "examples": [
                {
                    "en": "I will keep you updated on the delivery schedule.",
                    "ja": "納品スケジュールについて随時共有します。",
                    "focus": "keep you updated"
                },
                {
                    "en": "Please keep the team updated during the issue.",
                    "ja": "問題対応中はチームに随時共有してください。",
                    "focus": "keep the team updated"
                },
                {
                    "en": "She kept the client updated until the product arrived.",
                    "ja": "彼女は商品が届くまで顧客に随時共有しました。",
                    "focus": "kept the client updated"
                }
            ]
        }
    ]
},
  {
    "id": "review",
    "rank": 68,
    "word": "REVIEW",
    "ipa": "/rɪˈvjuː/",
    "kana": "リビュー",
    "syllable": "re-view",
    "transitivity": "他動詞・名詞",
    "importance": "★★★★☆ 仕事で重要",
    "core": "内容をもう一度見て、判断・改善につなげる",
    "coreDetail": "REVIEWは、資料・計画・結果・契約・作業内容を見直して、問題点や改善点を確認する動詞です。checkより広く、しっかり中身を見るニュアンスがあります。",
    "coreVisual": {
        "from": [
            "資料",
            "計画",
            "結果",
            "契約",
            "作業内容"
        ],
        "to": "確認・判断・改善点",
        "label": "もう一度見る → 判断する"
    },
    "meanings": [
        {
            "id": "review-document",
            "title": "① 資料・書類を確認する",
            "pattern": "review + document/proposal/report",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "資料を読み直し、内容を確認する。",
            "point": "proposal, report, quotation, contract とよく使います。",
            "examples": [
                {
                    "en": "Please review the proposal before we send it.",
                    "ja": "送付前に提案書を確認してください。",
                    "focus": "review"
                },
                {
                    "en": "I reviewed the quotation and found one mistake.",
                    "ja": "見積書を確認して、1つミスを見つけました。",
                    "focus": "reviewed"
                },
                {
                    "en": "We need to review the contract carefully.",
                    "ja": "契約書を慎重に確認する必要があります。",
                    "focus": "review"
                }
            ]
        },
        {
            "id": "review-plan",
            "title": "② 計画・予定を見直す",
            "pattern": "review + plan/schedule/timeline",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "計画を見直して調整点を探す。",
            "point": "変更や改善が必要かを見る時に使います。",
            "examples": [
                {
                    "en": "We reviewed the project plan after the client meeting.",
                    "ja": "顧客との会議後にプロジェクト計画を見直しました。",
                    "focus": "reviewed"
                },
                {
                    "en": "Please review the schedule before confirming the delivery date.",
                    "ja": "納品日を確定する前にスケジュールを見直してください。",
                    "focus": "review"
                },
                {
                    "en": "The team reviewed the timeline and adjusted the tasks.",
                    "ja": "チームは工程表を見直し、作業を調整しました。",
                    "focus": "reviewed"
                }
            ]
        },
        {
            "id": "review-results",
            "title": "③ 結果・実績を確認する",
            "pattern": "review + results/performance/data",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "結果を見て、良し悪しや原因を確認する。",
            "point": "売上・テスト結果・実績確認に向いています。",
            "examples": [
                {
                    "en": "We reviewed the sales results for last month.",
                    "ja": "先月の売上結果を確認しました。",
                    "focus": "reviewed"
                },
                {
                    "en": "The manager reviewed the test data with the team.",
                    "ja": "上司はチームと試験データを確認しました。",
                    "focus": "reviewed"
                },
                {
                    "en": "Please review the performance before the next meeting.",
                    "ja": "次の会議前に実績を確認してください。",
                    "focus": "review"
                }
            ]
        },
        {
            "id": "review-work",
            "title": "④ 作業内容を見直す",
            "pattern": "review + work/task/process",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "作業が正しくできているか確認する。",
            "point": "納品前チェックや品質確認に使いやすいです。",
            "examples": [
                {
                    "en": "I reviewed the work before sending it to the client.",
                    "ja": "顧客へ送る前に作業内容を見直しました。",
                    "focus": "reviewed"
                },
                {
                    "en": "We should review the process to prevent the same issue.",
                    "ja": "同じ問題を防ぐために工程を見直すべきです。",
                    "focus": "review"
                },
                {
                    "en": "Please review your task list before you leave.",
                    "ja": "退勤前に自分のタスクリストを見直してください。",
                    "focus": "review"
                }
            ]
        },
        {
            "id": "review-feedback",
            "title": "⑤ 意見・フィードバックを確認する",
            "pattern": "review + feedback/comments/requests",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "相手からの意見を読み、対応内容を考える。",
            "point": "顧客要望や社内コメントの確認に使います。",
            "examples": [
                {
                    "en": "We reviewed the client feedback this morning.",
                    "ja": "今朝、顧客からのフィードバックを確認しました。",
                    "focus": "reviewed"
                },
                {
                    "en": "Please review the comments before revising the document.",
                    "ja": "資料を修正する前にコメントを確認してください。",
                    "focus": "review"
                },
                {
                    "en": "She reviewed the request and prepared a response.",
                    "ja": "彼女は依頼内容を確認し、回答を準備しました。",
                    "focus": "reviewed"
                }
            ]
        },
        {
            "id": "have-review",
            "title": "⑥ レビュー・確認会を行う",
            "pattern": "have/conduct a review",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "確認のための場や手続きを行う。",
            "point": "名詞reviewを使った仕事表現です。",
            "examples": [
                {
                    "en": "We will have a review meeting next Monday.",
                    "ja": "来週月曜日に確認会議を行います。",
                    "focus": "review meeting"
                },
                {
                    "en": "The team conducted a review after the project ended.",
                    "ja": "プロジェクト終了後、チームは振り返りを行いました。",
                    "focus": "conducted a review"
                },
                {
                    "en": "Please prepare the materials for the design review.",
                    "ja": "デザインレビュー用の資料を準備してください。",
                    "focus": "design review"
                }
            ]
        }
    ],
    "collocations": [
        {
            "phrase": "review the document",
            "ja": "資料を確認する",
            "image": "資料を見直す基本。",
            "pattern": "review the document",
            "examples": [
                {
                    "en": "Please review the document and share your comments.",
                    "ja": "資料を確認してコメントを共有してください。",
                    "focus": "review the document"
                },
                {
                    "en": "I reviewed the document before the meeting.",
                    "ja": "会議前に資料を確認しました。",
                    "focus": "reviewed the document"
                },
                {
                    "en": "We need to review the document again after the revision.",
                    "ja": "修正後に資料をもう一度確認する必要があります。",
                    "focus": "review the document"
                }
            ]
        },
        {
            "phrase": "review the plan",
            "ja": "計画を見直す",
            "image": "計画の妥当性や修正点を確認する。",
            "pattern": "review the plan",
            "examples": [
                {
                    "en": "Let's review the plan before we contact the client.",
                    "ja": "顧客へ連絡する前に計画を見直しましょう。",
                    "focus": "review the plan"
                },
                {
                    "en": "I reviewed the plan with the project leader.",
                    "ja": "プロジェクトリーダーと計画を見直しました。",
                    "focus": "reviewed the plan"
                },
                {
                    "en": "We should review the plan every month.",
                    "ja": "毎月計画を見直すべきです。",
                    "focus": "review the plan"
                }
            ]
        },
        {
            "phrase": "review the results",
            "ja": "結果を確認する",
            "image": "結果を見て判断する。",
            "pattern": "review the results",
            "examples": [
                {
                    "en": "We reviewed the results and decided the next action.",
                    "ja": "結果を確認し、次の対応を決めました。",
                    "focus": "reviewed the results"
                },
                {
                    "en": "Please review the results before making a report.",
                    "ja": "報告書を作る前に結果を確認してください。",
                    "focus": "review the results"
                },
                {
                    "en": "The team reviewed the results from the trial.",
                    "ja": "チームは試験結果を確認しました。",
                    "focus": "reviewed the results"
                }
            ]
        },
        {
            "phrase": "final review",
            "ja": "最終確認",
            "image": "提出前の最後の確認。",
            "pattern": "final review",
            "examples": [
                {
                    "en": "This document needs a final review before submission.",
                    "ja": "この資料は提出前に最終確認が必要です。",
                    "focus": "final review"
                },
                {
                    "en": "I will do the final review this afternoon.",
                    "ja": "今日の午後に最終確認を行います。",
                    "focus": "final review"
                },
                {
                    "en": "Please send the file after the final review.",
                    "ja": "最終確認後にファイルを送ってください。",
                    "focus": "final review"
                }
            ]
        },
        {
            "phrase": "review meeting",
            "ja": "確認会議・レビュー会議",
            "image": "内容を確認するための会議。",
            "pattern": "review meeting",
            "examples": [
                {
                    "en": "We have a review meeting every Friday.",
                    "ja": "毎週金曜日に確認会議を行います。",
                    "focus": "review meeting"
                },
                {
                    "en": "Please prepare the agenda for the review meeting.",
                    "ja": "確認会議の議題を準備してください。",
                    "focus": "review meeting"
                },
                {
                    "en": "The review meeting helped us find the issue early.",
                    "ja": "確認会議のおかげで問題を早めに見つけられました。",
                    "focus": "review meeting"
                }
            ]
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "review with",
            "ja": "〜と一緒に確認する",
            "image": "withで一緒に確認する相手を示す。",
            "pattern": "review + 名詞 + with + 人",
            "examples": [
                {
                    "en": "Please review the proposal with the sales manager.",
                    "ja": "営業マネージャーと提案書を確認してください。",
                    "focus": "review the proposal with"
                },
                {
                    "en": "I reviewed the numbers with the accounting team.",
                    "ja": "経理チームと数字を確認しました。",
                    "focus": "reviewed the numbers with"
                },
                {
                    "en": "We need to review the design with the client.",
                    "ja": "顧客とデザインを確認する必要があります。",
                    "focus": "review the design with"
                }
            ]
        },
        {
            "phrase": "review before",
            "ja": "〜の前に確認する",
            "image": "beforeで確認するタイミングを示す。",
            "pattern": "review + 名詞 + before + 行動",
            "examples": [
                {
                    "en": "Please review the email before sending it.",
                    "ja": "送信前にメールを確認してください。",
                    "focus": "review the email before"
                },
                {
                    "en": "I reviewed the quote before calling the client.",
                    "ja": "顧客へ電話する前に見積を確認しました。",
                    "focus": "reviewed the quote before"
                },
                {
                    "en": "We should review the checklist before installation.",
                    "ja": "施工前にチェックリストを確認するべきです。",
                    "focus": "review the checklist before"
                }
            ]
        },
        {
            "phrase": "review after",
            "ja": "〜の後に見直す",
            "image": "afterで見直すタイミングを示す。",
            "pattern": "review + 名詞 + after + 出来事",
            "examples": [
                {
                    "en": "We reviewed the process after the issue occurred.",
                    "ja": "問題発生後に工程を見直しました。",
                    "focus": "reviewed the process after"
                },
                {
                    "en": "Please review the record after the visit.",
                    "ja": "訪問後に記録を見直してください。",
                    "focus": "review the record after"
                },
                {
                    "en": "The team reviewed the result after the test.",
                    "ja": "チームは試験後に結果を確認しました。",
                    "focus": "reviewed the result after"
                }
            ]
        },
        {
            "phrase": "review for",
            "ja": "〜を確認するために見直す",
            "image": "forで確認目的を示す。",
            "pattern": "review + 名詞 + for + 確認項目",
            "examples": [
                {
                    "en": "Please review the contract for missing information.",
                    "ja": "不足情報がないか契約書を確認してください。",
                    "focus": "review the contract for"
                },
                {
                    "en": "I reviewed the report for calculation errors.",
                    "ja": "計算ミスがないか報告書を確認しました。",
                    "focus": "reviewed the report for"
                },
                {
                    "en": "We should review the design for safety issues.",
                    "ja": "安全上の問題がないかデザインを確認するべきです。",
                    "focus": "review the design for"
                }
            ]
        },
        {
            "phrase": "under review",
            "ja": "確認中・審査中",
            "image": "まだ確認されている途中の状態。",
            "pattern": "be under review",
            "examples": [
                {
                    "en": "The proposal is currently under review.",
                    "ja": "提案書は現在確認中です。",
                    "focus": "under review"
                },
                {
                    "en": "Your request is under review by the manager.",
                    "ja": "あなたの依頼は上司が確認中です。",
                    "focus": "under review"
                },
                {
                    "en": "The contract is still under review.",
                    "ja": "契約書はまだ確認中です。",
                    "focus": "under review"
                }
            ]
        }
    ]
},
  {
    "id": "compare",
    "rank": 69,
    "word": "COMPARE",
    "ipa": "/kəmˈper/",
    "kana": "コンペア",
    "syllable": "com-pare",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 仕事で重要",
    "core": "2つ以上を並べて、違い・共通点・良し悪しを見る",
    "coreDetail": "COMPAREは、価格・仕様・条件・結果・提案などを比べて判断材料を作る時に使います。営業、購買、資料作成でよく使う実用的な動詞です。",
    "coreVisual": {
        "from": [
            "A案",
            "B案",
            "価格",
            "仕様",
            "結果"
        ],
        "to": "違い・共通点・判断材料",
        "label": "並べて見る → 違いを判断する"
    },
    "meanings": [
        {
            "id": "compare-two",
            "title": "① 2つを比較する",
            "pattern": "compare + A + with/to + B",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "2つを並べて違いを見る。",
            "point": "compare A with B は仕事で特によく使います。",
            "examples": [
                {
                    "en": "We compared the new model with the current model.",
                    "ja": "新しいモデルを現行モデルと比較しました。",
                    "focus": "compared"
                },
                {
                    "en": "Please compare these two quotations before we decide.",
                    "ja": "決定前にこの2つの見積を比較してください。",
                    "focus": "compare"
                },
                {
                    "en": "I compared the sample with the approved design.",
                    "ja": "サンプルを承認済みデザインと比較しました。",
                    "focus": "compared"
                }
            ]
        },
        {
            "id": "compare-prices",
            "title": "② 価格を比較する",
            "pattern": "compare + prices/costs",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "価格やコストを比べる。",
            "point": "営業・購買・見積確認で使いやすい型です。",
            "examples": [
                {
                    "en": "We compared the prices from three suppliers.",
                    "ja": "3社の仕入先の価格を比較しました。",
                    "focus": "compared"
                },
                {
                    "en": "Please compare the total cost, not just the unit price.",
                    "ja": "単価だけでなく総額を比較してください。",
                    "focus": "compare"
                },
                {
                    "en": "The client compared our price with a competitor's offer.",
                    "ja": "顧客は当社価格を競合の提案と比較しました。",
                    "focus": "compared"
                }
            ]
        },
        {
            "id": "compare-specs",
            "title": "③ 仕様・条件を比較する",
            "pattern": "compare + specifications/conditions/options",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "仕様や条件を比べる。",
            "point": "製品選定や提案比較に向いています。",
            "examples": [
                {
                    "en": "Can you compare the specifications of these two products?",
                    "ja": "この2つの製品仕様を比較できますか？",
                    "focus": "compare"
                },
                {
                    "en": "We compared the conditions before selecting the supplier.",
                    "ja": "仕入先を選ぶ前に条件を比較しました。",
                    "focus": "compared"
                },
                {
                    "en": "Please compare the options and choose the best one.",
                    "ja": "選択肢を比較して最適なものを選んでください。",
                    "focus": "compare"
                }
            ]
        },
        {
            "id": "compare-results",
            "title": "④ 結果・実績を比較する",
            "pattern": "compare + results/performance/data",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "結果を比べて変化や差を見る。",
            "point": "前月比・前年比・テスト比較で使います。",
            "examples": [
                {
                    "en": "We compared this month's results with last month's results.",
                    "ja": "今月の結果を先月の結果と比較しました。",
                    "focus": "compared"
                },
                {
                    "en": "Please compare the test data before and after the change.",
                    "ja": "変更前後の試験データを比較してください。",
                    "focus": "compare"
                },
                {
                    "en": "The manager compared the sales performance by area.",
                    "ja": "上司はエリア別の売上実績を比較しました。",
                    "focus": "compared"
                }
            ]
        },
        {
            "id": "compare-standard",
            "title": "⑤ 基準・目標と比較する",
            "pattern": "compare + result + to/against + standard",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "基準と照らし合わせる。",
            "point": "目標、基準値、仕様書との差を見る時に使います。",
            "examples": [
                {
                    "en": "We compared the result against the quality standard.",
                    "ja": "結果を品質基準と比較しました。",
                    "focus": "compared"
                },
                {
                    "en": "Please compare the actual cost to the budget.",
                    "ja": "実際の費用を予算と比較してください。",
                    "focus": "compare"
                },
                {
                    "en": "The team compared the delivery time against the target.",
                    "ja": "チームは納期を目標と比較しました。",
                    "focus": "compared"
                }
            ]
        },
        {
            "id": "hard-compare",
            "title": "⑥ 比較できない・比べにくい",
            "pattern": "cannot compare / be hard to compare",
            "transitivity": "他動詞",
            "structure": "仕事で自然に使う型",
            "image": "条件が違いすぎて比べにくい。",
            "point": "比較できない理由を説明する時に使います。",
            "examples": [
                {
                    "en": "We cannot compare these prices because the conditions are different.",
                    "ja": "条件が違うため、これらの価格は比較できません。",
                    "focus": "compare"
                },
                {
                    "en": "It is hard to compare the two proposals directly.",
                    "ja": "2つの提案を直接比較するのは難しいです。",
                    "focus": "compare"
                },
                {
                    "en": "The samples are difficult to compare without the same test conditions.",
                    "ja": "同じ試験条件がないとサンプルを比較するのは難しいです。",
                    "focus": "compare"
                }
            ]
        }
    ],
    "collocations": [
        {
            "phrase": "compare prices",
            "ja": "価格を比較する",
            "image": "複数の価格を比べる。",
            "pattern": "compare prices",
            "examples": [
                {
                    "en": "We need to compare prices before placing the order.",
                    "ja": "発注前に価格を比較する必要があります。",
                    "focus": "compare prices"
                },
                {
                    "en": "I compared prices from three vendors.",
                    "ja": "3社の販売会社の価格を比較しました。",
                    "focus": "compared prices"
                },
                {
                    "en": "Please compare prices and check the delivery terms.",
                    "ja": "価格を比較して納品条件を確認してください。",
                    "focus": "compare prices"
                }
            ]
        },
        {
            "phrase": "compare specifications",
            "ja": "仕様を比較する",
            "image": "製品やサービスの仕様を比べる。",
            "pattern": "compare specifications",
            "examples": [
                {
                    "en": "Please compare specifications before choosing the model.",
                    "ja": "機種を選ぶ前に仕様を比較してください。",
                    "focus": "compare specifications"
                },
                {
                    "en": "We compared specifications with the customer's request.",
                    "ja": "顧客の要望と仕様を比較しました。",
                    "focus": "compared specifications"
                },
                {
                    "en": "The team compared specifications and found one difference.",
                    "ja": "チームは仕様を比較し、1つ違いを見つけました。",
                    "focus": "compared specifications"
                }
            ]
        },
        {
            "phrase": "compare results",
            "ja": "結果を比較する",
            "image": "複数の結果を見比べる。",
            "pattern": "compare results",
            "examples": [
                {
                    "en": "Let's compare results after the second test.",
                    "ja": "2回目の試験後に結果を比較しましょう。",
                    "focus": "compare results"
                },
                {
                    "en": "We compared results from both branches.",
                    "ja": "両支店の結果を比較しました。",
                    "focus": "compared results"
                },
                {
                    "en": "Please compare results before preparing the report.",
                    "ja": "報告書を準備する前に結果を比較してください。",
                    "focus": "compare results"
                }
            ]
        },
        {
            "phrase": "compare options",
            "ja": "選択肢を比較する",
            "image": "複数案から選ぶために比べる。",
            "pattern": "compare options",
            "examples": [
                {
                    "en": "We should compare options before making a recommendation.",
                    "ja": "提案する前に選択肢を比較するべきです。",
                    "focus": "compare options"
                },
                {
                    "en": "The client compared options and chose the cheaper plan.",
                    "ja": "顧客は選択肢を比較し、安いプランを選びました。",
                    "focus": "compared options"
                },
                {
                    "en": "Please compare options based on cost and quality.",
                    "ja": "費用と品質を基準に選択肢を比較してください。",
                    "focus": "compare options"
                }
            ]
        },
        {
            "phrase": "side-by-side comparison",
            "ja": "並列表での比較",
            "image": "横に並べて比較すること。",
            "pattern": "side-by-side comparison",
            "examples": [
                {
                    "en": "Please make a side-by-side comparison of the two proposals.",
                    "ja": "2つの提案の並列表比較を作ってください。",
                    "focus": "side-by-side comparison"
                },
                {
                    "en": "A side-by-side comparison makes the differences clear.",
                    "ja": "並列表比較にすると違いが明確になります。",
                    "focus": "side-by-side comparison"
                },
                {
                    "en": "We used a side-by-side comparison in the sales meeting.",
                    "ja": "営業会議で並列表比較を使いました。",
                    "focus": "side-by-side comparison"
                }
            ]
        }
    ],
    "phrasalVerbs": [
        {
            "phrase": "compare with",
            "ja": "〜と比較する",
            "image": "withは比較対象を示す基本形。",
            "pattern": "compare A with B",
            "examples": [
                {
                    "en": "Please compare this quote with the previous quote.",
                    "ja": "この見積を前回の見積と比較してください。",
                    "focus": "compare this quote with"
                },
                {
                    "en": "We compared the new design with the original design.",
                    "ja": "新しいデザインを元のデザインと比較しました。",
                    "focus": "compared the new design with"
                },
                {
                    "en": "I compared the schedule with the client's request.",
                    "ja": "スケジュールを顧客の要望と比較しました。",
                    "focus": "compared the schedule with"
                }
            ]
        },
        {
            "phrase": "compare to",
            "ja": "〜と比べる",
            "image": "toも比較対象を示す。",
            "pattern": "compare A to B",
            "examples": [
                {
                    "en": "Please compare the actual cost to the budget.",
                    "ja": "実際の費用を予算と比較してください。",
                    "focus": "compare the actual cost to"
                },
                {
                    "en": "We compared this year's sales to last year's sales.",
                    "ja": "今年の売上を昨年の売上と比較しました。",
                    "focus": "compared this year's sales to"
                },
                {
                    "en": "The report compares our service to the competitor's service.",
                    "ja": "その報告書は当社サービスを競合サービスと比較しています。",
                    "focus": "compares our service to"
                }
            ]
        },
        {
            "phrase": "compare against",
            "ja": "基準に照らして比較する",
            "image": "againstは基準・目標との比較に向く。",
            "pattern": "compare A against B",
            "examples": [
                {
                    "en": "We compared the result against the target.",
                    "ja": "結果を目標と比較しました。",
                    "focus": "compared the result against"
                },
                {
                    "en": "Please compare the sample against the approved specification.",
                    "ja": "サンプルを承認済み仕様と比較してください。",
                    "focus": "compare the sample against"
                },
                {
                    "en": "The team compared the cost against the original estimate.",
                    "ja": "チームは費用を当初見積と比較しました。",
                    "focus": "compared the cost against"
                }
            ]
        },
        {
            "phrase": "compare before and after",
            "ja": "変更前後を比較する",
            "image": "改善や変更の効果を見る。",
            "pattern": "compare before and after",
            "examples": [
                {
                    "en": "Let's compare before and after the system update.",
                    "ja": "システム更新の前後を比較しましょう。",
                    "focus": "compare before and after"
                },
                {
                    "en": "We compared before and after photos for the report.",
                    "ja": "報告書用に変更前後の写真を比較しました。",
                    "focus": "compared before and after"
                },
                {
                    "en": "Please compare before and after data to check the effect.",
                    "ja": "効果を確認するために変更前後のデータを比較してください。",
                    "focus": "compare before and after"
                }
            ]
        },
        {
            "phrase": "be compared with",
            "ja": "〜と比較される",
            "image": "受け身で比較対象として扱われる。",
            "pattern": "be compared with + 比較対象",
            "examples": [
                {
                    "en": "Our proposal was compared with two other proposals.",
                    "ja": "当社の提案は他の2つの提案と比較されました。",
                    "focus": "was compared with"
                },
                {
                    "en": "This product is often compared with cheaper alternatives.",
                    "ja": "この製品は安価な代替品とよく比較されます。",
                    "focus": "compared with"
                },
                {
                    "en": "The new result should be compared with the previous result.",
                    "ja": "新しい結果は前回の結果と比較されるべきです。",
                    "focus": "be compared with"
                }
            ]
        }
    ]
},
  {
    "id": "introduce",
    "rank": 70,
    "word": "INTRODUCE",
    "ipa": "/ˌɪntrəˈduːs/",
    "kana": "イントロデュース",
    "syllable": "in-tro-duce",
    "transitivity": "他動詞",
    "importance": "★★★☆☆ 基本",
    "core": "人・物・仕組みを相手の前に初めて出す",
    "coreDetail": "INTRODUCEは、まだ知られていない人・商品・方法・仕組みを相手の前に出して、使える状態や理解できる状態にする動詞です。仕事では人の紹介だけでなく、新商品・制度・改善策の導入にも使います。",
    "coreVisual": {
      "from": [
        "新しい人",
        "新商品",
        "新制度",
        "新しい方法",
        "新しい考え"
      ],
      "to": "相手・会社・市場",
      "label": "初めて前に出す"
    },
    "meanings": [
      {
        "id": "introduce-person",
        "title": "① 人を紹介する",
        "pattern": "introduce A to B",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "人と人をつなぐために初めて会わせる。",
        "point": "introduce 人 to 人 の形で、顧客・担当者・同僚を紹介する時に使います。",
        "examples": [
          {
            "en": "I introduced the new sales manager to the client.",
            "ja": "私は新しい営業マネージャーを顧客に紹介しました。",
            "focus": "introduced"
          },
          {
            "en": "Can you introduce me to the purchasing team?",
            "ja": "購買チームに私を紹介してもらえますか？",
            "focus": "introduce"
          },
          {
            "en": "We introduced our engineer to the project members.",
            "ja": "私たちは技術担当者をプロジェクトメンバーに紹介しました。",
            "focus": "introduced"
          }
        ]
      },
      {
        "id": "introduce-product",
        "title": "② 商品・サービスを紹介する",
        "pattern": "introduce a product / service",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "相手が知らない商品やサービスを初めて説明する。",
        "point": "展示会・商談・メールで商品やサービスを紹介する時に使います。",
        "examples": [
          {
            "en": "We introduced our new lighting product at the exhibition.",
            "ja": "私たちは展示会で新しい照明製品を紹介しました。",
            "focus": "introduced"
          },
          {
            "en": "The sales team introduced the service to several new clients.",
            "ja": "営業チームはそのサービスを複数の新規顧客に紹介しました。",
            "focus": "introduced"
          },
          {
            "en": "Please introduce this product during the client meeting.",
            "ja": "顧客との打ち合わせでこの商品を紹介してください。",
            "focus": "introduce"
          }
        ]
      },
      {
        "id": "introduce-system",
        "title": "③ 制度・仕組みを導入する",
        "pattern": "introduce a system / rule / process",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "新しい仕組みを会社やチームに入れる。",
        "point": "introduceは『紹介する』だけでなく、制度や仕組みを『導入する』意味でもよく使います。",
        "examples": [
          {
            "en": "We introduced a new approval process last month.",
            "ja": "私たちは先月、新しい承認プロセスを導入しました。",
            "focus": "introduced"
          },
          {
            "en": "The company introduced a new attendance system.",
            "ja": "会社は新しい勤怠システムを導入しました。",
            "focus": "introduced"
          },
          {
            "en": "They introduced clear rules for handling customer complaints.",
            "ja": "彼らは顧客クレーム対応の明確なルールを導入しました。",
            "focus": "introduced"
          }
        ]
      },
      {
        "id": "introduce-idea",
        "title": "④ 考え・提案を出す",
        "pattern": "introduce an idea / proposal",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "会議や資料で新しい考えを場に出す。",
        "point": "新しい案や考えを議論の中に出す時にも使います。",
        "examples": [
          {
            "en": "She introduced a new idea during the planning meeting.",
            "ja": "彼女は企画会議で新しい考えを出しました。",
            "focus": "introduced"
          },
          {
            "en": "We introduced a proposal to reduce delivery delays.",
            "ja": "私たちは納期遅延を減らす提案を出しました。",
            "focus": "introduced"
          },
          {
            "en": "The manager introduced a different approach to the problem.",
            "ja": "マネージャーはその問題に対して別の方法を提示しました。",
            "focus": "introduced"
          }
        ]
      },
      {
        "id": "introduce-change",
        "title": "⑤ 変更・改善を取り入れる",
        "pattern": "introduce a change / improvement",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "今のやり方に新しい変更や改善を加える。",
        "point": "改善活動や業務フロー変更でよく使います。",
        "examples": [
          {
            "en": "We introduced a small change to the quotation format.",
            "ja": "私たちは見積書の形式に小さな変更を加えました。",
            "focus": "introduced"
          },
          {
            "en": "The team introduced improvements to the inspection process.",
            "ja": "チームは検査工程に改善を取り入れました。",
            "focus": "introduced"
          },
          {
            "en": "Please introduce the change gradually to avoid confusion.",
            "ja": "混乱を避けるため、その変更は段階的に導入してください。",
            "focus": "introduce"
          }
        ]
      },
      {
        "id": "introduce-to-market",
        "title": "⑥ 市場・顧客へ投入する",
        "pattern": "introduce A to the market / customers",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "商品やサービスを市場や顧客に初めて出す。",
        "point": "新商品発表や販売開始の文脈で使いやすい表現です。",
        "examples": [
          {
            "en": "We plan to introduce the new model to the market in July.",
            "ja": "私たちは7月に新モデルを市場へ投入する予定です。",
            "focus": "introduce"
          },
          {
            "en": "The company introduced the updated product to key customers first.",
            "ja": "会社は主要顧客に先に改良版の商品を投入しました。",
            "focus": "introduced"
          },
          {
            "en": "They introduced the service to the Japanese market last year.",
            "ja": "彼らは昨年、そのサービスを日本市場に投入しました。",
            "focus": "introduced"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "introduce someone to someone",
        "ja": "人を人に紹介する",
        "image": "人と人の接点を作る。",
        "pattern": "introduce A to B",
        "examples": [
          {
            "en": "Please introduce Mr. Sato to the design team.",
            "ja": "佐藤様をデザインチームに紹介してください。",
            "focus": "introduce Mr. Sato to"
          },
          {
            "en": "I introduced the client to our technical manager.",
            "ja": "私は顧客を当社の技術マネージャーに紹介しました。",
            "focus": "introduced the client to"
          },
          {
            "en": "Can you introduce me to the person in charge?",
            "ja": "担当者に私を紹介してもらえますか？",
            "focus": "introduce me to"
          }
        ]
      },
      {
        "phrase": "introduce a new product",
        "ja": "新商品を紹介する",
        "image": "新しい商品を顧客に見せる。",
        "pattern": "introduce a new product",
        "examples": [
          {
            "en": "We will introduce a new product at the trade show.",
            "ja": "展示会で新商品を紹介します。",
            "focus": "introduce a new product"
          },
          {
            "en": "The brochure introduces a new product line.",
            "ja": "そのパンフレットは新しい商品ラインを紹介しています。",
            "focus": "introduces a new product"
          },
          {
            "en": "Please introduce the new product in the next newsletter.",
            "ja": "次のニュースレターで新商品を紹介してください。",
            "focus": "introduce the new product"
          }
        ]
      },
      {
        "phrase": "introduce a new system",
        "ja": "新しいシステムを導入する",
        "image": "業務に新しいシステムを入れる。",
        "pattern": "introduce a new system",
        "examples": [
          {
            "en": "We introduced a new system to track orders.",
            "ja": "受注を管理するために新しいシステムを導入しました。",
            "focus": "introduced a new system"
          },
          {
            "en": "The company will introduce a new system next quarter.",
            "ja": "会社は次の四半期に新しいシステムを導入します。",
            "focus": "introduce a new system"
          },
          {
            "en": "Please explain why we need to introduce a new system.",
            "ja": "なぜ新しいシステムを導入する必要があるのか説明してください。",
            "focus": "introduce a new system"
          }
        ]
      },
      {
        "phrase": "introduce a change",
        "ja": "変更を加える・導入する",
        "image": "やり方や仕様に変更を入れる。",
        "pattern": "introduce a change",
        "examples": [
          {
            "en": "We introduced a change to the delivery process.",
            "ja": "配送プロセスに変更を加えました。",
            "focus": "introduced a change"
          },
          {
            "en": "The client asked us to introduce a change to the design.",
            "ja": "顧客はデザインに変更を加えるよう依頼しました。",
            "focus": "introduce a change"
          },
          {
            "en": "Do not introduce a change without approval.",
            "ja": "承認なしに変更を加えないでください。",
            "focus": "introduce a change"
          }
        ]
      },
      {
        "phrase": "introduce an idea",
        "ja": "考えを提示する",
        "image": "会議で新しい考えを出す。",
        "pattern": "introduce an idea",
        "examples": [
          {
            "en": "He introduced an idea to reduce material waste.",
            "ja": "彼は材料の無駄を減らす考えを提示しました。",
            "focus": "introduced an idea"
          },
          {
            "en": "We should introduce an idea that is easy to test.",
            "ja": "試しやすい案を提示すべきです。",
            "focus": "introduce an idea"
          },
          {
            "en": "The team introduced an idea for improving customer support.",
            "ja": "チームは顧客サポートを改善する案を提示しました。",
            "focus": "introduced an idea"
          }
        ]
      },
      {
        "phrase": "introduce a policy",
        "ja": "方針・制度を導入する",
        "image": "会社やチームのルールとして入れる。",
        "pattern": "introduce a policy",
        "examples": [
          {
            "en": "The company introduced a policy for remote work.",
            "ja": "会社はリモートワークに関する制度を導入しました。",
            "focus": "introduced a policy"
          },
          {
            "en": "We need to introduce a policy for data handling.",
            "ja": "データ取扱いに関する方針を導入する必要があります。",
            "focus": "introduce a policy"
          },
          {
            "en": "Management introduced a policy to improve safety.",
            "ja": "経営陣は安全性を高める方針を導入しました。",
            "focus": "introduced a policy"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "introduce A into B",
        "ja": "AをBに取り入れる・導入する",
        "image": "新しいものを既存の環境へ入れる。",
        "pattern": "introduce A into B",
        "examples": [
          {
            "en": "We introduced automation into the inspection process.",
            "ja": "検査工程に自動化を取り入れました。",
            "focus": "introduced automation into"
          },
          {
            "en": "The team introduced new materials into the product design.",
            "ja": "チームは製品設計に新しい材料を取り入れました。",
            "focus": "introduced new materials into"
          },
          {
            "en": "Please introduce this method into the next training session.",
            "ja": "次回の研修にこの方法を取り入れてください。",
            "focus": "introduce this method into"
          }
        ]
      },
      {
        "phrase": "introduce A to B",
        "ja": "AをBに紹介する・投入する",
        "image": "相手や市場へ初めて出す。",
        "pattern": "introduce A to B",
        "examples": [
          {
            "en": "We introduced the product to a new customer segment.",
            "ja": "その商品を新しい顧客層に紹介しました。",
            "focus": "introduced the product to"
          },
          {
            "en": "Can you introduce this tool to the sales team?",
            "ja": "このツールを営業チームに紹介してもらえますか？",
            "focus": "introduce this tool to"
          },
          {
            "en": "They introduced the service to local companies.",
            "ja": "彼らはそのサービスを地元企業に紹介しました。",
            "focus": "introduced the service to"
          }
        ]
      },
      {
        "phrase": "be introduced to",
        "ja": "〜に紹介される・触れる",
        "image": "受け身で新しい人や物に出会う。",
        "pattern": "be introduced to",
        "examples": [
          {
            "en": "I was introduced to the new project leader yesterday.",
            "ja": "私は昨日、新しいプロジェクトリーダーを紹介されました。",
            "focus": "was introduced to"
          },
          {
            "en": "New staff are introduced to our internal tools during training.",
            "ja": "新入社員は研修中に社内ツールを紹介されます。",
            "focus": "are introduced to"
          },
          {
            "en": "The client was introduced to our maintenance service.",
            "ja": "顧客は当社の保守サービスを紹介されました。",
            "focus": "was introduced to"
          }
        ]
      },
      {
        "phrase": "introduce gradually",
        "ja": "段階的に導入する",
        "image": "急に変えず少しずつ入れる。",
        "pattern": "introduce gradually",
        "examples": [
          {
            "en": "We should introduce the new process gradually.",
            "ja": "新しいプロセスは段階的に導入すべきです。",
            "focus": "introduce the new process gradually"
          },
          {
            "en": "The company introduced the rule gradually across all branches.",
            "ja": "会社はそのルールを全拠点に段階的に導入しました。",
            "focus": "introduced the rule gradually"
          },
          {
            "en": "Please introduce the change gradually to reduce confusion.",
            "ja": "混乱を減らすため、その変更は段階的に導入してください。",
            "focus": "introduce the change gradually"
          }
        ]
      },
      {
        "phrase": "newly introduced",
        "ja": "新しく導入された",
        "image": "導入された直後の状態を表す。",
        "pattern": "newly introduced + 名詞",
        "examples": [
          {
            "en": "The newly introduced system reduced manual work.",
            "ja": "新しく導入されたシステムは手作業を減らしました。",
            "focus": "newly introduced system"
          },
          {
            "en": "We tested the newly introduced rule for one month.",
            "ja": "新しく導入されたルールを1か月間試しました。",
            "focus": "newly introduced rule"
          },
          {
            "en": "The newly introduced product received positive feedback.",
            "ja": "新しく投入された商品は良い反応を得ました。",
            "focus": "newly introduced product"
          }
        ]
      }
    ]
  },
  {
    "id": "request",
    "rank": 71,
    "word": "REQUEST",
    "ipa": "/rɪˈkwest/",
    "kana": "リクエスト",
    "syllable": "re-quest",
    "transitivity": "他動詞・名詞",
    "importance": "★★★☆☆ 基本",
    "core": "必要なものや対応を丁寧・正式に求める",
    "coreDetail": "REQUESTは、相手に必要な対応・資料・承認・変更を丁寧または正式に求める動詞です。askよりビジネス寄りで、メールや申請、顧客対応でよく使います。",
    "coreVisual": {
      "from": [
        "資料",
        "承認",
        "変更",
        "確認",
        "対応"
      ],
      "to": "相手・担当部署",
      "label": "丁寧に求める"
    },
    "meanings": [
      {
        "id": "request-info",
        "title": "① 情報・資料を依頼する",
        "pattern": "request information / documents",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "必要な情報や資料を正式に求める。",
        "point": "メールや見積依頼でよく使う基本形です。",
        "examples": [
          {
            "en": "I requested the latest price list from the supplier.",
            "ja": "私は仕入先に最新の価格表を依頼しました。",
            "focus": "requested"
          },
          {
            "en": "We requested additional documents for the application.",
            "ja": "私たちは申請のために追加資料を依頼しました。",
            "focus": "requested"
          },
          {
            "en": "Please request the product specifications by Friday.",
            "ja": "金曜日までに製品仕様書を依頼してください。",
            "focus": "request"
          }
        ]
      },
      {
        "id": "request-approval",
        "title": "② 承認を依頼する",
        "pattern": "request approval",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "発注・変更・提出前に承認を求める。",
        "point": "request approvalは仕事でとても仕事で使う表現です。",
        "examples": [
          {
            "en": "We requested approval before placing the order.",
            "ja": "私たちは発注前に承認を依頼しました。",
            "focus": "requested"
          },
          {
            "en": "Please request approval from your manager first.",
            "ja": "まず上司に承認を依頼してください。",
            "focus": "request"
          },
          {
            "en": "The team requested approval to change the design.",
            "ja": "チームはデザイン変更の承認を依頼しました。",
            "focus": "requested"
          }
        ]
      },
      {
        "id": "request-action",
        "title": "③ 対応を依頼する",
        "pattern": "request action / support / confirmation",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "相手に具体的な対応を求める。",
        "point": "確認・修正・サポートなどを丁寧に求める時に使います。",
        "examples": [
          {
            "en": "The client requested urgent support for the issue.",
            "ja": "顧客はその問題について緊急サポートを依頼しました。",
            "focus": "requested"
          },
          {
            "en": "We requested confirmation of the delivery date.",
            "ja": "私たちは納期の確認を依頼しました。",
            "focus": "requested"
          },
          {
            "en": "Please request action from the responsible department.",
            "ja": "担当部署に対応を依頼してください。",
            "focus": "request"
          }
        ]
      },
      {
        "id": "request-change",
        "title": "④ 変更を依頼する",
        "pattern": "request a change / revision",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "仕様・日程・内容の変更を求める。",
        "point": "顧客要望や社内調整でよく使います。",
        "examples": [
          {
            "en": "The client requested a change to the delivery schedule.",
            "ja": "顧客は納期スケジュールの変更を依頼しました。",
            "focus": "requested"
          },
          {
            "en": "We requested a revision to the proposal.",
            "ja": "私たちは提案書の修正を依頼しました。",
            "focus": "requested"
          },
          {
            "en": "Please request a change only after checking the cost.",
            "ja": "費用を確認してから変更を依頼してください。",
            "focus": "request"
          }
        ]
      },
      {
        "id": "request-someone-to-do",
        "title": "⑤ 人に〜するよう依頼する",
        "pattern": "request someone to do",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "人に具体的な行動を丁寧に求める。",
        "point": "少し硬めの形ですが、正式なメールや文書で使えます。",
        "examples": [
          {
            "en": "We requested the vendor to send the samples earlier.",
            "ja": "私たちは業者にサンプルを早めに送るよう依頼しました。",
            "focus": "requested"
          },
          {
            "en": "The client requested us to review the quotation again.",
            "ja": "顧客は私たちに見積を再確認するよう依頼しました。",
            "focus": "requested"
          },
          {
            "en": "Management requested each team to submit a report.",
            "ja": "経営陣は各チームに報告書を提出するよう依頼しました。",
            "focus": "requested"
          }
        ]
      },
      {
        "id": "request-formal",
        "title": "⑥ 正式に要請する",
        "pattern": "formally request",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "文書や手続きとして正式に求める。",
        "point": "申請・契約・トラブル対応など、正式さが必要な場面で使います。",
        "examples": [
          {
            "en": "We formally requested an extension of the deadline.",
            "ja": "私たちは期限延長を正式に要請しました。",
            "focus": "requested"
          },
          {
            "en": "The company requested payment in writing.",
            "ja": "会社は書面で支払いを要請しました。",
            "focus": "requested"
          },
          {
            "en": "Please request permission through the official form.",
            "ja": "正式なフォームで許可を申請してください。",
            "focus": "request"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "request approval",
        "ja": "承認を依頼する",
        "image": "判断や許可を求める。",
        "pattern": "request approval",
        "examples": [
          {
            "en": "Please request approval before sending the final quotation.",
            "ja": "最終見積を送る前に承認を依頼してください。",
            "focus": "request approval"
          },
          {
            "en": "We requested approval for the additional cost.",
            "ja": "追加費用について承認を依頼しました。",
            "focus": "requested approval"
          },
          {
            "en": "The sales team requested approval from management.",
            "ja": "営業チームは経営陣に承認を依頼しました。",
            "focus": "requested approval"
          }
        ]
      },
      {
        "phrase": "request information",
        "ja": "情報を依頼する",
        "image": "必要な情報を相手に求める。",
        "pattern": "request information",
        "examples": [
          {
            "en": "We requested information about the warranty terms.",
            "ja": "保証条件について情報を依頼しました。",
            "focus": "requested information"
          },
          {
            "en": "Please request information from the overseas office.",
            "ja": "海外拠点に情報を依頼してください。",
            "focus": "request information"
          },
          {
            "en": "The customer requested information about installation.",
            "ja": "顧客は設置について情報を求めました。",
            "focus": "requested information"
          }
        ]
      },
      {
        "phrase": "request a change",
        "ja": "変更を依頼する",
        "image": "日程・仕様・内容の変更を求める。",
        "pattern": "request a change",
        "examples": [
          {
            "en": "The client requested a change to the sign design.",
            "ja": "顧客は看板デザインの変更を依頼しました。",
            "focus": "requested a change"
          },
          {
            "en": "We need to request a change in the delivery date.",
            "ja": "納期変更を依頼する必要があります。",
            "focus": "request a change"
          },
          {
            "en": "Please request a change before production starts.",
            "ja": "製作開始前に変更を依頼してください。",
            "focus": "request a change"
          }
        ]
      },
      {
        "phrase": "request support",
        "ja": "サポートを依頼する",
        "image": "助けや技術対応を求める。",
        "pattern": "request support",
        "examples": [
          {
            "en": "We requested support from the technical team.",
            "ja": "技術チームにサポートを依頼しました。",
            "focus": "requested support"
          },
          {
            "en": "Please request support if the system error continues.",
            "ja": "システムエラーが続く場合はサポートを依頼してください。",
            "focus": "request support"
          },
          {
            "en": "The branch requested support for the customer visit.",
            "ja": "支店は顧客訪問のサポートを依頼しました。",
            "focus": "requested support"
          }
        ]
      },
      {
        "phrase": "at someone’s request",
        "ja": "〜の依頼で",
        "image": "依頼元を示す表現。",
        "pattern": "at + 人 + request",
        "examples": [
          {
            "en": "We revised the document at the client's request.",
            "ja": "顧客の依頼で資料を修正しました。",
            "focus": "at the client's request"
          },
          {
            "en": "At management's request, we reviewed the process again.",
            "ja": "経営陣の依頼で、プロセスを再確認しました。",
            "focus": "At management's request"
          },
          {
            "en": "The sample was sent at the customer's request.",
            "ja": "サンプルは顧客の依頼で送られました。",
            "focus": "at the customer's request"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "request from",
        "ja": "〜から依頼する・求める",
        "image": "依頼先や情報元を示す。",
        "pattern": "request A from B",
        "examples": [
          {
            "en": "We requested the drawing from the design team.",
            "ja": "設計チームに図面を依頼しました。",
            "focus": "requested the drawing from"
          },
          {
            "en": "Please request the data from the supplier.",
            "ja": "仕入先にデータを依頼してください。",
            "focus": "request the data from"
          },
          {
            "en": "I requested confirmation from the client.",
            "ja": "顧客に確認を依頼しました。",
            "focus": "requested confirmation from"
          }
        ]
      },
      {
        "phrase": "request for",
        "ja": "〜を求める依頼・要望",
        "image": "名詞requestと一緒によく使う。",
        "pattern": "request for + 名詞",
        "examples": [
          {
            "en": "We received a request for additional samples.",
            "ja": "追加サンプルの依頼を受けました。",
            "focus": "request for"
          },
          {
            "en": "The request for approval is still pending.",
            "ja": "承認依頼はまだ保留中です。",
            "focus": "request for approval"
          },
          {
            "en": "Please review the request for a schedule change.",
            "ja": "スケジュール変更の依頼を確認してください。",
            "focus": "request for"
          }
        ]
      },
      {
        "phrase": "request to do",
        "ja": "〜するよう依頼する",
        "image": "行動内容をto doで示す。",
        "pattern": "request to do",
        "examples": [
          {
            "en": "The customer requested to change the delivery address.",
            "ja": "顧客は納品先住所の変更を依頼しました。",
            "focus": "requested to change"
          },
          {
            "en": "We requested to extend the quotation deadline.",
            "ja": "見積期限の延長を依頼しました。",
            "focus": "requested to extend"
          },
          {
            "en": "They requested to receive the report by email.",
            "ja": "彼らは報告書をメールで受け取ることを希望しました。",
            "focus": "requested to receive"
          }
        ]
      },
      {
        "phrase": "request in writing",
        "ja": "書面で依頼する",
        "image": "口頭ではなく文書で依頼する。",
        "pattern": "request in writing",
        "examples": [
          {
            "en": "Please request the change in writing.",
            "ja": "その変更は書面で依頼してください。",
            "focus": "request the change in writing"
          },
          {
            "en": "The client requested the cancellation in writing.",
            "ja": "顧客はキャンセルを書面で依頼しました。",
            "focus": "requested the cancellation in writing"
          },
          {
            "en": "We should request confirmation in writing.",
            "ja": "書面で確認を依頼すべきです。",
            "focus": "request confirmation in writing"
          }
        ]
      },
      {
        "phrase": "upon request",
        "ja": "依頼があれば",
        "image": "依頼があった場合に提供する。",
        "pattern": "upon request",
        "examples": [
          {
            "en": "Additional documents are available upon request.",
            "ja": "追加資料は依頼があれば提供できます。",
            "focus": "upon request"
          },
          {
            "en": "Samples can be sent upon request.",
            "ja": "サンプルは依頼があれば送付できます。",
            "focus": "upon request"
          },
          {
            "en": "A detailed breakdown is available upon request.",
            "ja": "詳細な内訳は依頼があれば提供できます。",
            "focus": "upon request"
          }
        ]
      }
    ]
  },
  {
    "id": "suggest",
    "rank": 72,
    "word": "SUGGEST",
    "ipa": "/səˈdʒest/",
    "kana": "サジェスト",
    "syllable": "sug-gest",
    "transitivity": "他動詞",
    "importance": "★★★☆☆ 基本",
    "core": "相手が判断できるように案を差し出す",
    "coreDetail": "SUGGESTは、命令ではなく選択肢や考えを相手に差し出す動詞です。仕事では改善案・日程・方法・代替案を提案する時に使います。suggest 人 to do は通常使わず、suggest that 文 / suggest doing / suggest 名詞 の形が重要です。",
    "coreVisual": {
      "from": [
        "案",
        "方法",
        "日程",
        "改善策",
        "代替案"
      ],
      "to": "相手の判断",
      "label": "案を差し出す"
    },
    "meanings": [
      {
        "id": "suggest-idea",
        "title": "① 案・考えを提案する",
        "pattern": "suggest an idea / a plan",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "相手に検討してもらう案を出す。",
        "point": "命令ではなく、判断材料として案を出す時に使います。",
        "examples": [
          {
            "en": "I suggested a new schedule for the meeting.",
            "ja": "私は会議の新しい日程を提案しました。",
            "focus": "suggested"
          },
          {
            "en": "We suggested a different layout for the proposal.",
            "ja": "私たちは提案書の別レイアウトを提案しました。",
            "focus": "suggested"
          },
          {
            "en": "She suggested an idea to improve the customer flow.",
            "ja": "彼女は顧客導線を改善する案を提案しました。",
            "focus": "suggested"
          }
        ]
      },
      {
        "id": "suggest-that",
        "title": "② 〜することを提案する",
        "pattern": "suggest that + 文",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "具体的な行動案を文で出す。",
        "point": "suggest that 主語 + 動詞 の形で、少し丁寧に提案できます。",
        "examples": [
          {
            "en": "We suggested that they check the sample first.",
            "ja": "私たちは彼らが先にサンプルを確認することを提案しました。",
            "focus": "suggested"
          },
          {
            "en": "The manager suggested that we review the schedule again.",
            "ja": "マネージャーは私たちがスケジュールを再確認することを提案しました。",
            "focus": "suggested"
          },
          {
            "en": "I suggested that the team share updates every Friday.",
            "ja": "私はチームが毎週金曜に進捗を共有することを提案しました。",
            "focus": "suggested"
          }
        ]
      },
      {
        "id": "suggest-doing",
        "title": "③ 〜することを提案する",
        "pattern": "suggest doing",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "動名詞で行動案を出す。",
        "point": "suggest to doではなく、suggest doingが自然な形です。",
        "examples": [
          {
            "en": "I suggested checking the inventory before ordering.",
            "ja": "私は発注前に在庫を確認することを提案しました。",
            "focus": "suggested checking"
          },
          {
            "en": "We suggested sending the report by email.",
            "ja": "私たちは報告書をメールで送ることを提案しました。",
            "focus": "suggested sending"
          },
          {
            "en": "She suggested reviewing the quotation one more time.",
            "ja": "彼女は見積をもう一度確認することを提案しました。",
            "focus": "suggested reviewing"
          }
        ]
      },
      {
        "id": "suggest-way",
        "title": "④ 方法・手段を提案する",
        "pattern": "suggest a way / method",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "問題解決や改善の方法を出す。",
        "point": "改善・効率化・問題解決の文脈でよく使います。",
        "examples": [
          {
            "en": "Can you suggest a better way to manage the data?",
            "ja": "データを管理するより良い方法を提案してもらえますか？",
            "focus": "suggest"
          },
          {
            "en": "The consultant suggested a method to reduce manual work.",
            "ja": "コンサルタントは手作業を減らす方法を提案しました。",
            "focus": "suggested"
          },
          {
            "en": "We suggested a simple way to explain the product features.",
            "ja": "私たちは商品の特徴を説明する簡単な方法を提案しました。",
            "focus": "suggested"
          }
        ]
      },
      {
        "id": "suggest-option",
        "title": "⑤ 選択肢・代替案を示す",
        "pattern": "suggest an option / alternative",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "相手が選べる候補を出す。",
        "point": "相手の判断を助けるために候補を示す時に使います。",
        "examples": [
          {
            "en": "Please suggest an alternative if this part is not available.",
            "ja": "この部品が入手できない場合は代替案を提案してください。",
            "focus": "suggest"
          },
          {
            "en": "We suggested two options for the delivery schedule.",
            "ja": "私たちは納期スケジュールについて2つの選択肢を提案しました。",
            "focus": "suggested"
          },
          {
            "en": "The supplier suggested a cheaper alternative.",
            "ja": "仕入先はより安い代替案を提案しました。",
            "focus": "suggested"
          }
        ]
      },
      {
        "id": "suggest-possibility",
        "title": "⑥ 可能性・兆候を示す",
        "pattern": "suggest that something may be true",
        "transitivity": "他動詞",
        "structure": "仕事でよく使う基本パターン",
        "image": "データや状況が何かを示す。",
        "point": "suggestは人が提案するだけでなく、データや状況が可能性を示す意味でも使います。",
        "examples": [
          {
            "en": "The data suggests that demand is increasing.",
            "ja": "そのデータは需要が増えていることを示しています。",
            "focus": "suggests"
          },
          {
            "en": "The survey results suggest a need for better support.",
            "ja": "調査結果はより良いサポートの必要性を示しています。",
            "focus": "suggest"
          },
          {
            "en": "The delay suggests that we need to review the process.",
            "ja": "その遅延はプロセスを見直す必要があることを示しています。",
            "focus": "suggests"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "suggest an idea",
        "ja": "案を提案する",
        "image": "検討するための考えを出す。",
        "pattern": "suggest an idea",
        "examples": [
          {
            "en": "She suggested an idea for the next campaign.",
            "ja": "彼女は次のキャンペーンの案を提案しました。",
            "focus": "suggested an idea"
          },
          {
            "en": "Please suggest an idea that fits the budget.",
            "ja": "予算に合う案を提案してください。",
            "focus": "suggest an idea"
          },
          {
            "en": "The team suggested an idea to improve the display.",
            "ja": "チームは表示を改善する案を提案しました。",
            "focus": "suggested an idea"
          }
        ]
      },
      {
        "phrase": "suggest a solution",
        "ja": "解決策を提案する",
        "image": "問題に対する解決策を出す。",
        "pattern": "suggest a solution",
        "examples": [
          {
            "en": "Can you suggest a solution for this issue?",
            "ja": "この問題の解決策を提案してもらえますか？",
            "focus": "suggest a solution"
          },
          {
            "en": "We suggested a solution to reduce installation time.",
            "ja": "設置時間を短縮する解決策を提案しました。",
            "focus": "suggested a solution"
          },
          {
            "en": "The engineer suggested a practical solution.",
            "ja": "技術者は実用的な解決策を提案しました。",
            "focus": "suggested a practical solution"
          }
        ]
      },
      {
        "phrase": "suggest a date",
        "ja": "日程を提案する",
        "image": "候補日を出す。",
        "pattern": "suggest a date",
        "examples": [
          {
            "en": "Please suggest a date for the next meeting.",
            "ja": "次回会議の日程を提案してください。",
            "focus": "suggest a date"
          },
          {
            "en": "The client suggested a date for the site visit.",
            "ja": "顧客は現場訪問の日程を提案しました。",
            "focus": "suggested a date"
          },
          {
            "en": "We suggested three dates for the product demo.",
            "ja": "製品デモの日程を3つ提案しました。",
            "focus": "suggested three dates"
          }
        ]
      },
      {
        "phrase": "suggest an alternative",
        "ja": "代替案を提案する",
        "image": "別の選択肢を出す。",
        "pattern": "suggest an alternative",
        "examples": [
          {
            "en": "The supplier suggested an alternative material.",
            "ja": "仕入先は代替材料を提案しました。",
            "focus": "suggested an alternative"
          },
          {
            "en": "Please suggest an alternative if the item is out of stock.",
            "ja": "在庫切れの場合は代替案を提案してください。",
            "focus": "suggest an alternative"
          },
          {
            "en": "We suggested an alternative plan to control the cost.",
            "ja": "費用を抑えるために代替案を提案しました。",
            "focus": "suggested an alternative"
          }
        ]
      },
      {
        "phrase": "strongly suggest",
        "ja": "強く提案する・強く示す",
        "image": "提案や示唆の強さを出す。",
        "pattern": "strongly suggest",
        "examples": [
          {
            "en": "I strongly suggest reviewing the contract before signing.",
            "ja": "署名前に契約書を確認することを強く提案します。",
            "focus": "strongly suggest"
          },
          {
            "en": "The results strongly suggest a need for improvement.",
            "ja": "その結果は改善の必要性を強く示しています。",
            "focus": "strongly suggest"
          },
          {
            "en": "We strongly suggest testing the product before launch.",
            "ja": "発売前に製品をテストすることを強く提案します。",
            "focus": "strongly suggest"
          }
        ]
      }
    ],
    "phrasalVerbs": [
      {
        "phrase": "suggest that",
        "ja": "〜ということを提案する・示す",
        "image": "文全体を目的語にする基本形。",
        "pattern": "suggest that + 文",
        "examples": [
          {
            "en": "I suggest that we confirm the details first.",
            "ja": "まず詳細を確認することを提案します。",
            "focus": "suggest that"
          },
          {
            "en": "The report suggests that sales are improving.",
            "ja": "その報告書は売上が改善していることを示しています。",
            "focus": "suggests that"
          },
          {
            "en": "She suggested that we contact the supplier directly.",
            "ja": "彼女は仕入先に直接連絡することを提案しました。",
            "focus": "suggested that"
          }
        ]
      },
      {
        "phrase": "suggest doing",
        "ja": "〜することを提案する",
        "image": "to doではなくdoingを使う。",
        "pattern": "suggest doing",
        "examples": [
          {
            "en": "We suggest checking the stock before ordering.",
            "ja": "発注前に在庫を確認することを提案します。",
            "focus": "suggest checking"
          },
          {
            "en": "He suggested changing the meeting format.",
            "ja": "彼は会議形式を変更することを提案しました。",
            "focus": "suggested changing"
          },
          {
            "en": "I suggest sending a follow-up email today.",
            "ja": "今日フォローアップメールを送ることを提案します。",
            "focus": "suggest sending"
          }
        ]
      },
      {
        "phrase": "suggest to someone",
        "ja": "人に提案する",
        "image": "提案相手をtoで示す。",
        "pattern": "suggest A to someone",
        "examples": [
          {
            "en": "We suggested the plan to the client.",
            "ja": "私たちはその計画を顧客に提案しました。",
            "focus": "suggested the plan to"
          },
          {
            "en": "Please suggest this option to the purchasing team.",
            "ja": "この選択肢を購買チームに提案してください。",
            "focus": "suggest this option to"
          },
          {
            "en": "The consultant suggested a new method to management.",
            "ja": "コンサルタントは経営陣に新しい方法を提案しました。",
            "focus": "suggested a new method to"
          }
        ]
      },
      {
        "phrase": "suggest as",
        "ja": "〜として提案する",
        "image": "役割や選択肢として出す。",
        "pattern": "suggest A as B",
        "examples": [
          {
            "en": "We suggested this model as the best option.",
            "ja": "私たちはこのモデルを最適な選択肢として提案しました。",
            "focus": "suggested this model as"
          },
          {
            "en": "She suggested him as the project leader.",
            "ja": "彼女は彼をプロジェクトリーダーとして推薦しました。",
            "focus": "suggested him as"
          },
          {
            "en": "The team suggested Friday as the delivery date.",
            "ja": "チームは金曜日を納品日として提案しました。",
            "focus": "suggested Friday as"
          }
        ]
      },
      {
        "phrase": "suggest for",
        "ja": "〜向けに提案する",
        "image": "目的や相手に合う案を出す。",
        "pattern": "suggest A for B",
        "examples": [
          {
            "en": "Can you suggest a product for this client?",
            "ja": "この顧客向けの商品を提案してもらえますか？",
            "focus": "suggest a product for"
          },
          {
            "en": "We suggested a simple layout for the brochure.",
            "ja": "パンフレット向けにシンプルなレイアウトを提案しました。",
            "focus": "suggested a simple layout for"
          },
          {
            "en": "The supplier suggested a different material for outdoor use.",
            "ja": "仕入先は屋外使用向けに別の材料を提案しました。",
            "focus": "suggested a different material for"
          }
        ]
      }
    ]
  },
  {
      "id": "agree",
      "rank": 73,
      "word": "AGREE",
      "ipa": "/əˈɡriː/",
      "kana": "アグリー",
      "syllable": "a-gree",
      "transitivity": "自動詞",
      "importance": "★★★☆☆ 基本",
      "core": "相手の意見・条件・方針と同じ方向にそろう",
      "coreDetail": "AGREEは、自分の考えや判断が相手・提案・条件と同じ方向にそろうイメージです。仕事では agree with 人/意見、agree to 提案/条件、agree on 日程/価格/条件、agree that + 文 を区別して使います。",
      "coreVisual": {
          "from": [
              "👤 自分の意見",
              "💬 相手の意見",
              "📄 条件",
              "📅 日程"
          ],
          "to": "✅ 同じ方向にそろう",
          "label": "意見・条件 → 合意"
      },
      "meanings": [
          {
              "id": "agree-with",
              "title": "① 人・意見に同意する",
              "pattern": "AGREE WITH + 人/意見",
              "transitivity": "自動詞",
              "structure": "S + agree with + 人/意見",
              "image": "相手や意見と同じ立場に立つ。",
              "point": "人や考えに賛成するときは agree with を使う。agree with him / agree with your idea のように、人・意見が後ろに来る。",
              "examples": [
                  {
                      "en": "I agree with your idea.",
                      "ja": "私はあなたの考えに同意します。",
                      "focus": "agree"
                  },
                  {
                      "en": "We agree with the client's concern.",
                      "ja": "私たちは顧客の懸念に同意しています。",
                      "focus": "agree"
                  },
                  {
                      "en": "Our team agreed with the new policy.",
                      "ja": "私たちのチームは新しい方針に同意しました。",
                      "focus": "agreed"
                  }
              ]
          },
          {
              "id": "agree-to",
              "title": "② 提案・条件を受け入れる",
              "pattern": "AGREE TO + 提案/条件",
              "transitivity": "自動詞",
              "structure": "S + agree to + 提案/条件",
              "image": "提示された提案・条件を受け入れる。",
              "point": "契約条件、提案、変更案などを受け入れるときは agree to を使う。",
              "examples": [
                  {
                      "en": "The client agreed to the revised estimate.",
                      "ja": "顧客は修正見積に同意しました。",
                      "focus": "agreed"
                  },
                  {
                      "en": "We agreed to the payment terms.",
                      "ja": "私たちは支払条件に同意しました。",
                      "focus": "agreed"
                  },
                  {
                      "en": "Management agreed to the new proposal.",
                      "ja": "経営陣は新しい提案に同意しました。",
                      "focus": "agreed"
                  }
              ]
          },
          {
              "id": "agree-on",
              "title": "③ 日程・価格・条件について合意する",
              "pattern": "AGREE ON + 内容",
              "transitivity": "自動詞",
              "structure": "S + agree on + 内容",
              "image": "話し合いの結果、1つの内容にまとまる。",
              "point": "会議で日程・価格・範囲・条件などを決めて合意するときは agree on を使う。",
              "examples": [
                  {
                      "en": "We agreed on the delivery date.",
                      "ja": "私たちは納品日に合意しました。",
                      "focus": "agreed"
                  },
                  {
                      "en": "Both companies agreed on the final price.",
                      "ja": "両社は最終価格に合意しました。",
                      "focus": "agreed"
                  },
                  {
                      "en": "The team agreed on the project scope.",
                      "ja": "チームはプロジェクト範囲について合意しました。",
                      "focus": "agreed"
                  }
              ]
          },
          {
              "id": "agree-that",
              "title": "④ 〜だという点で意見が一致する",
              "pattern": "AGREE THAT + 文",
              "transitivity": "自動詞",
              "structure": "S + agree that + 文",
              "image": "判断や認識が同じになる。",
              "point": "後ろに文を置いて、会議や報告で共通認識を示すときに使う。",
              "examples": [
                  {
                      "en": "We agreed that the schedule was too tight.",
                      "ja": "私たちはスケジュールが厳しすぎるという点で意見が一致しました。",
                      "focus": "agreed"
                  },
                  {
                      "en": "Everyone agreed that we needed more information.",
                      "ja": "全員が、さらに情報が必要だという点で同意しました。",
                      "focus": "agreed"
                  },
                  {
                      "en": "The managers agreed that the issue was urgent.",
                      "ja": "管理者たちは、その問題が緊急だという点で意見が一致しました。",
                      "focus": "agreed"
                  }
              ]
          },
          {
              "id": "agree-to-do",
              "title": "⑤ 〜することを承諾する",
              "pattern": "AGREE TO DO",
              "transitivity": "自動詞",
              "structure": "S + agree to do",
              "image": "依頼・提案を受け入れて行動する。",
              "point": "誰かの依頼や提案を受けて、実際に何かをすることを承諾するときに使う。",
              "examples": [
                  {
                      "en": "The supplier agreed to send the samples today.",
                      "ja": "仕入先は本日サンプルを送ることを承諾しました。",
                      "focus": "agreed"
                  },
                  {
                      "en": "We agreed to review the contract again.",
                      "ja": "私たちは契約書を再確認することに同意しました。",
                      "focus": "agreed"
                  },
                  {
                      "en": "The client agreed to wait until Friday.",
                      "ja": "顧客は金曜日まで待つことに同意しました。",
                      "focus": "agreed"
                  }
              ]
          },
          {
              "id": "agree-about",
              "title": "⑥ 話題について意見が一致する",
              "pattern": "AGREE ABOUT + 話題",
              "transitivity": "自動詞",
              "structure": "S + agree about + 話題",
              "image": "ある話題について同じ考えになる。",
              "point": "about は話題を示す。on より少し広く、スケジュールや方針などについて意見が一致する場面で使える。",
              "examples": [
                  {
                      "en": "We agreed about the basic direction.",
                      "ja": "私たちは基本方針について意見が一致しました。",
                      "focus": "agreed"
                  },
                  {
                      "en": "The team agreed about the main problem.",
                      "ja": "チームは主な問題点について意見が一致しました。",
                      "focus": "agreed"
                  },
                  {
                      "en": "Both sides agreed about the need for improvement.",
                      "ja": "双方は改善の必要性について意見が一致しました。",
                      "focus": "agreed"
                  }
              ]
          },
          {
              "id": "agree-in-principle",
              "title": "⑦ 基本的に合意する",
              "pattern": "AGREE IN PRINCIPLE",
              "transitivity": "自動詞",
              "structure": "S + agree in principle",
              "image": "細部は未確定だが、大枠では同意する。",
              "point": "ビジネスでよく使う定番表現。詳細条件は残っているが、方向性としては合意したいときに使う。",
              "examples": [
                  {
                      "en": "We agreed in principle to move forward with the project.",
                      "ja": "私たちはその案件を進める方向で基本合意しました。",
                      "focus": "agreed"
                  },
                  {
                      "en": "The client agreed in principle, but requested a lower price.",
                      "ja": "顧客は基本的に同意しましたが、値下げを求めました。",
                      "focus": "agreed"
                  },
                  {
                      "en": "Management agreed in principle to the new plan.",
                      "ja": "経営陣は新しい計画に基本合意しました。",
                      "focus": "agreed"
                  }
              ]
          }
      ],
      "collocations": [],
      "phrasalVerbs": [
          {
              "phrase": "not agree with",
              "ja": "〜に合わない・賛成できない",
              "image": "人・体質・方針に合わない、または意見として受け入れられない。",
              "pattern": "not agree with + 人/体/方針",
              "examples": [
                  {
                      "en": "This approach does not agree with our company policy.",
                      "ja": "この方法は当社の方針に合いません。",
                      "focus": "does not agree with"
                  },
                  {
                      "en": "The proposed terms did not agree with our budget.",
                      "ja": "提示された条件は私たちの予算に合いませんでした。",
                      "focus": "did not agree with"
                  },
                  {
                      "en": "That explanation does not agree with the data.",
                      "ja": "その説明はデータと一致しません。",
                      "focus": "does not agree with"
                  }
              ]
          }
      ]
  },
  {
      "id": "arrange",
      "rank": 74,
      "word": "ARRANGE",
      "ipa": "/əˈreɪndʒ/",
      "kana": "アレンジ",
      "syllable": "ar-range",
      "transitivity": "他動詞・自動詞",
      "importance": "★★★☆☆ 基本",
      "core": "人・物・予定を目的に合う形へ整える",
      "coreDetail": "ARRANGEは、会議・配送・移動・資料・人員などを目的に合うように手配・調整・配置するイメージです。日本語の『アレンジ』より、仕事では『段取りを整える』意味が中心です。",
      "coreVisual": {
          "from": [
              "📅 予定",
              "🚚 配送",
              "👥 人員",
              "📄 資料",
              "🪑 配置"
          ],
          "to": "🗂️ 整った段取り",
          "label": "バラバラ → 目的に合う形へ"
      },
      "meanings": [
          {
              "id": "arrange-meeting",
              "title": "① 会議・予定を手配する",
              "pattern": "ARRANGE + 会議/予定",
              "transitivity": "他動詞",
              "structure": "S + arrange + O",
              "image": "必要な予定を組んで実行できる状態にする。",
              "point": "meeting, call, appointment, schedule などと相性が良い。",
              "examples": [
                  {
                      "en": "I arranged a meeting with the client.",
                      "ja": "私は顧客との打ち合わせを手配しました。",
                      "focus": "arranged",
                      "object": "a meeting"
                  },
                  {
                      "en": "We arranged a call with the supplier.",
                      "ja": "私たちは仕入先との電話会議を手配しました。",
                      "focus": "arranged",
                      "object": "a call"
                  },
                  {
                      "en": "She arranged an appointment with the manager.",
                      "ja": "彼女は管理者との面談を手配しました。",
                      "focus": "arranged",
                      "object": "an appointment"
                  }
              ]
          },
          {
              "id": "arrange-delivery",
              "title": "② 配送・移動を手配する",
              "pattern": "ARRANGE + 配送/移動",
              "transitivity": "他動詞",
              "structure": "S + arrange + O",
              "image": "物や人が必要な場所へ動けるように段取りする。",
              "point": "delivery, shipment, transportation, travel など仕事でよく使う。",
              "examples": [
                  {
                      "en": "We arranged the delivery for next Monday.",
                      "ja": "私たちは来週月曜日の配送を手配しました。",
                      "focus": "arranged",
                      "object": "the delivery"
                  },
                  {
                      "en": "The office arranged transportation for the guests.",
                      "ja": "事務所は来客の移動手段を手配しました。",
                      "focus": "arranged",
                      "object": "transportation"
                  },
                  {
                      "en": "I arranged the shipment with the warehouse.",
                      "ja": "私は倉庫と出荷を手配しました。",
                      "focus": "arranged",
                      "object": "the shipment"
                  }
              ]
          },
          {
              "id": "arrange-for",
              "title": "③ 人や物が来るように手配する",
              "pattern": "ARRANGE FOR + 人/物 + TO DO",
              "transitivity": "他動詞に近い使い方",
              "structure": "S + arrange for + 人/物 + to do",
              "image": "誰か・何かが動くように裏側で手配する。",
              "point": "arrange for someone to do はビジネスで重要。自分が直接するのではなく、誰かが動く段取りを作る。",
              "examples": [
                  {
                      "en": "I arranged for a technician to visit the site.",
                      "ja": "私は技術者が現場を訪問するよう手配しました。",
                      "focus": "arranged for"
                  },
                  {
                      "en": "We arranged for the samples to arrive tomorrow.",
                      "ja": "私たちはサンプルが明日届くよう手配しました。",
                      "focus": "arranged for"
                  },
                  {
                      "en": "She arranged for a car to pick up the client.",
                      "ja": "彼女は顧客を迎えに行く車を手配しました。",
                      "focus": "arranged for"
                  }
              ]
          },
          {
              "id": "arrange-to-do",
              "title": "④ 〜する予定を組む",
              "pattern": "ARRANGE TO DO",
              "transitivity": "自動詞に近い使い方",
              "structure": "S + arrange to do",
              "image": "自分たちが行う予定を調整して決める。",
              "point": "訪問・確認・説明など、実際に行う行動を後ろに置く。",
              "examples": [
                  {
                      "en": "We arranged to visit the site tomorrow.",
                      "ja": "私たちは明日現場を訪問する予定を組みました。",
                      "focus": "arranged"
                  },
                  {
                      "en": "The team arranged to review the details on Friday.",
                      "ja": "チームは金曜日に詳細を確認する予定を組みました。",
                      "focus": "arranged"
                  },
                  {
                      "en": "I arranged to speak with the client after lunch.",
                      "ja": "私は昼食後に顧客と話す予定を組みました。",
                      "focus": "arranged"
                  }
              ]
          },
          {
              "id": "arrange-with",
              "title": "⑤ 相手と調整して決める",
              "pattern": "ARRANGE WITH + 相手",
              "transitivity": "他動詞に近い使い方",
              "structure": "S + arrange + O + with + 相手",
              "image": "相手と連絡を取り、条件や段取りを整える。",
              "point": "with は調整相手を示す。顧客・仕入先・倉庫・社内担当と段取りを合わせる場面で使う。",
              "examples": [
                  {
                      "en": "We arranged the schedule with the client.",
                      "ja": "私たちは顧客とスケジュールを調整しました。",
                      "focus": "arranged",
                      "object": "the schedule"
                  },
                  {
                      "en": "I arranged the delivery details with the warehouse.",
                      "ja": "私は倉庫と配送の詳細を調整しました。",
                      "focus": "arranged",
                      "object": "the delivery details"
                  },
                  {
                      "en": "She arranged the visit with the site manager.",
                      "ja": "彼女は現場責任者と訪問を調整しました。",
                      "focus": "arranged",
                      "object": "the visit"
                  }
              ]
          },
          {
              "id": "arrange-for-date",
              "title": "⑥ 日時・場所に合わせて設定する",
              "pattern": "ARRANGE + O + FOR + 日時/目的",
              "transitivity": "他動詞",
              "structure": "S + arrange + O + for + 日時/目的",
              "image": "予定や作業を特定の日・目的に合わせて設定する。",
              "point": "for は日時・目的を示す。",
              "examples": [
                  {
                      "en": "We arranged the meeting for 10 a.m.",
                      "ja": "私たちは会議を午前10時に設定しました。",
                      "focus": "arranged",
                      "object": "the meeting"
                  },
                  {
                      "en": "I arranged the inspection for next week.",
                      "ja": "私は検査を来週に設定しました。",
                      "focus": "arranged",
                      "object": "the inspection"
                  },
                  {
                      "en": "They arranged extra staff for the event.",
                      "ja": "彼らはイベント用に追加スタッフを手配しました。",
                      "focus": "arranged",
                      "object": "extra staff"
                  }
              ]
          },
          {
              "id": "arrange-items",
              "title": "⑦ 物や資料を整理して並べる",
              "pattern": "ARRANGE + 物/資料",
              "transitivity": "他動詞",
              "structure": "S + arrange + O",
              "image": "物を分かりやすい順番や位置に整える。",
              "point": "資料、椅子、商品、ファイルなどを目的に合う形で並べるときに使う。",
              "examples": [
                  {
                      "en": "Please arrange the documents by project name.",
                      "ja": "資料を案件名ごとに整理してください。",
                      "focus": "arrange",
                      "object": "the documents"
                  },
                  {
                      "en": "We arranged the chairs for the seminar.",
                      "ja": "私たちはセミナー用に椅子を配置しました。",
                      "focus": "arranged",
                      "object": "the chairs"
                  },
                  {
                      "en": "She arranged the product samples on the table.",
                      "ja": "彼女は商品サンプルをテーブルに並べました。",
                      "focus": "arranged",
                      "object": "the product samples"
                  }
              ]
          }
      ],
      "collocations": [],
      "phrasalVerbs": []
  },
  {
      "id": "attend",
      "rank": 75,
      "word": "ATTEND",
      "ipa": "/əˈtend/",
      "kana": "アテンド",
      "syllable": "at-tend",
      "transitivity": "他動詞・自動詞",
      "importance": "★★★☆☆ 基本",
      "core": "必要な場所・相手・問題に意識と時間を向ける",
      "coreDetail": "ATTENDは、会議や研修に出席するだけでなく、attend to で問題・顧客・細部に対応する意味もあります。日本語の『アテンドする』とはズレるため、英語では attend the meeting（会議に出席する）と attend to the issue（問題に対応する）を分けて覚えます。",
      "coreVisual": {
          "from": [
              "👤 自分/担当者"
          ],
          "to": "🏢 会議・研修・問題へ向かう",
          "label": "意識と時間を向ける"
      },
      "meanings": [
          {
              "id": "attend-meeting",
              "title": "① 会議・イベントに出席する",
              "pattern": "ATTEND + 会議/イベント",
              "transitivity": "他動詞",
              "structure": "S + attend + O",
              "image": "必要な場所に行き、その場に参加する。",
              "point": "attend の後ろに meeting, seminar, exhibition などを直接置く。attend to the meeting とは言わない。",
              "examples": [
                  {
                      "en": "I attended the meeting this morning.",
                      "ja": "私は今朝その会議に出席しました。",
                      "focus": "attended",
                      "object": "the meeting"
                  },
                  {
                      "en": "We attended the sales conference last week.",
                      "ja": "私たちは先週、営業会議に出席しました。",
                      "focus": "attended",
                      "object": "the sales conference"
                  },
                  {
                      "en": "They will attend the exhibition in Tokyo.",
                      "ja": "彼らは東京の展示会に参加する予定です。",
                      "focus": "attend",
                      "object": "the exhibition"
                  }
              ]
          },
          {
              "id": "attend-training",
              "title": "② 研修・授業に参加する",
              "pattern": "ATTEND + 研修/授業",
              "transitivity": "他動詞",
              "structure": "S + attend + O",
              "image": "学ぶための場に参加する。",
              "point": "training, class, workshop, course などと相性が良い。",
              "examples": [
                  {
                      "en": "We attended a product training session.",
                      "ja": "私たちは製品研修に参加しました。",
                      "focus": "attended",
                      "object": "a product training session"
                  },
                  {
                      "en": "New staff must attend the safety workshop.",
                      "ja": "新入社員は安全講習に参加する必要があります。",
                      "focus": "attend",
                      "object": "the safety workshop"
                  },
                  {
                      "en": "She attended an online course on project management.",
                      "ja": "彼女はプロジェクト管理のオンライン講座に参加しました。",
                      "focus": "attended",
                      "object": "an online course"
                  }
              ]
          },
          {
              "id": "attend-remotely",
              "title": "③ オンライン・遠隔で参加する",
              "pattern": "ATTEND + O + REMOTELY/ONLINE",
              "transitivity": "他動詞",
              "structure": "S + attend + O + M",
              "image": "現地ではなくオンラインで参加する。",
              "point": "会議や研修にオンライン参加する場面で自然に使える。",
              "examples": [
                  {
                      "en": "I attended the meeting remotely.",
                      "ja": "私はその会議にリモートで参加しました。",
                      "focus": "attended",
                      "object": "the meeting"
                  },
                  {
                      "en": "Several members attended the training online.",
                      "ja": "数名のメンバーは研修にオンラインで参加しました。",
                      "focus": "attended",
                      "object": "the training"
                  },
                  {
                      "en": "The client attended the review session by video call.",
                      "ja": "顧客はビデオ会議でレビュー会に参加しました。",
                      "focus": "attended",
                      "object": "the review session"
                  }
              ]
          },
          {
              "id": "required-to-attend",
              "title": "④ 出席を求められる",
              "pattern": "BE REQUIRED/EXPECTED TO ATTEND",
              "transitivity": "他動詞",
              "structure": "S + be required/expected to attend + O",
              "image": "業務上、参加が必要とされる。",
              "point": "自分の意思だけでなく、会社や顧客から参加が求められる場面で使う。",
              "examples": [
                  {
                      "en": "All sales staff are required to attend the briefing.",
                      "ja": "営業担当者全員が説明会に出席する必要があります。",
                      "focus": "attend",
                      "object": "the briefing"
                  },
                  {
                      "en": "The project leader is expected to attend the client meeting.",
                      "ja": "プロジェクトリーダーは顧客との会議に出席することが期待されています。",
                      "focus": "attend",
                      "object": "the client meeting"
                  },
                  {
                      "en": "Participants are required to attend the full session.",
                      "ja": "参加者は全セッションに出席する必要があります。",
                      "focus": "attend",
                      "object": "the full session"
                  }
              ]
          },
          {
              "id": "attend-as",
              "title": "⑤ 〜として参加する",
              "pattern": "ATTEND AS + 役割",
              "transitivity": "自動詞に近い使い方",
              "structure": "S + attend + O + as + 役割",
              "image": "役割を持って会議やイベントに参加する。",
              "point": "representative, observer, speaker など役割を示す。",
              "examples": [
                  {
                      "en": "I attended the meeting as a sales representative.",
                      "ja": "私は営業担当者としてその会議に出席しました。",
                      "focus": "attended"
                  },
                  {
                      "en": "She attended the seminar as a guest speaker.",
                      "ja": "彼女はゲスト講師としてセミナーに参加しました。",
                      "focus": "attended"
                  },
                  {
                      "en": "We attended the inspection as observers.",
                      "ja": "私たちは立会人として検査に参加しました。",
                      "focus": "attended"
                  }
              ]
          },
          {
              "id": "attend-regularly",
              "title": "⑥ 定期的に通う・参加する",
              "pattern": "ATTEND + 場所/活動 + regularly",
              "transitivity": "他動詞",
              "structure": "S + attend + O",
              "image": "学校・講座・定例会などに継続的に参加する。",
              "point": "定例会、研修、講座など、継続参加を表す。",
              "examples": [
                  {
                      "en": "He attends the weekly project meeting.",
                      "ja": "彼は毎週のプロジェクト会議に出席しています。",
                      "focus": "attends",
                      "object": "the weekly project meeting"
                  },
                  {
                      "en": "Our team attends monthly safety training.",
                      "ja": "私たちのチームは毎月の安全研修に参加しています。",
                      "focus": "attends",
                      "object": "monthly safety training"
                  },
                  {
                      "en": "She attends an English class after work.",
                      "ja": "彼女は仕事後に英語クラスに通っています。",
                      "focus": "attends",
                      "object": "an English class"
                  }
              ]
          }
      ],
      "collocations": [],
      "phrasalVerbs": [
          {
              "phrase": "attend to",
              "ja": "対応する・注意を向ける",
              "image": "人・問題・細部に意識を向けて対応する。会議に出席する attend とは意味が違う。",
              "pattern": "attend to + 人/問題/用件",
              "examples": [
                  {
                      "en": "Please attend to this issue as soon as possible.",
                      "ja": "できるだけ早くこの問題に対応してください。",
                      "focus": "attend to"
                  },
                  {
                      "en": "The support team is attending to the client's request.",
                      "ja": "サポートチームは顧客の依頼に対応しています。",
                      "focus": "attending to"
                  },
                  {
                      "en": "We need to attend to every detail before launch.",
                      "ja": "開始前にすべての細部に注意を払う必要があります。",
                      "focus": "attend to"
                  }
              ]
          }
      ]
  },
  {
    "id": "contact",
    "rank": 76,
    "word": "CONTACT",
    "ipa": "/ˈkɑːntækt/",
    "kana": "コンタクト",
    "syllable": "con-tact",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★☆☆ 基本",
    "core": "相手との連絡線をつなぐ",
    "coreDetail": "CONTACTは、電話・メール・チャットなどで相手に連絡線をつなぐ動詞です。基本は contact + 人/会社 で、contact to 人 とは言いません。仕事では顧客・仕入先・担当者へ連絡する場面で頻出します。",
    "coreVisual": {
      "from": ["👤 自分・会社", "✉️ メール", "📞 電話", "💬 チャット", "📋 用件"],
      "to": "相手・担当者",
      "label": "自分側 → 連絡手段 → 相手へつなぐ"
    },
    "meanings": [
      {
        "id": "contact-person",
        "title": "① 人・会社に連絡する",
        "pattern": "CONTACT + 人/会社",
        "transitivity": "他動詞",
        "structure": "S + contact + O",
        "image": "相手にメール・電話・チャットなどで連絡する。",
        "point": "contactは他動詞なので、contact the client のように直接目的語を置きます。contact to the client は避けます。",
        "examples": [
          { "en": "I contacted the supplier this morning.", "ja": "私は今朝、仕入先に連絡しました。", "focus": "contacted", "object": "the supplier", "jaFocus": "連絡しました" },
          { "en": "We need to contact the customer today.", "ja": "私たちは今日、その顧客に連絡する必要があります。", "focus": "contact", "object": "the customer", "jaFocus": "連絡する必要があります" },
          { "en": "Please contact me if you have any questions.", "ja": "質問があれば私に連絡してください。", "focus": "contact", "object": "me", "jaFocus": "連絡してください" }
        ],
        "dailyExamples": [
          { "en": "I contacted my friend after work.", "ja": "仕事の後、友人に連絡しました。", "focus": "contacted", "object": "my friend", "jaFocus": "連絡しました" },
          { "en": "Please contact me when you arrive.", "ja": "到着したら私に連絡してください。", "focus": "contact", "object": "me", "jaFocus": "連絡してください" }
        ]
      },
      {
        "id": "contact-about",
        "title": "② 〜の件で連絡する",
        "pattern": "CONTACT + 人 + ABOUT + 件名",
        "transitivity": "他動詞",
        "structure": "S + contact + O + about + 名詞",
        "image": "用件を添えて、相手に連絡する。",
        "point": "contact someone about ... は、問い合わせ・納期・請求書などの件名を伝える時に便利です。",
        "examples": [
          { "en": "I contacted the client about the delivery schedule.", "ja": "納期の件で顧客に連絡しました。", "focus": "contacted", "object": "the client", "jaFocus": "連絡しました" },
          { "en": "We should contact accounting about the invoice.", "ja": "請求書の件で経理に連絡した方がいいです。", "focus": "contact", "object": "accounting", "jaFocus": "連絡した方がいい" },
          { "en": "She contacted support about the login issue.", "ja": "彼女はログイン問題の件でサポートに連絡しました。", "focus": "contacted", "object": "support", "jaFocus": "連絡しました" }
        ],
        "dailyExamples": [
          { "en": "I contacted the hotel about my reservation.", "ja": "予約の件でホテルに連絡しました。", "focus": "contacted", "object": "the hotel", "jaFocus": "連絡しました" },
          { "en": "He contacted the shop about the repair.", "ja": "彼は修理の件で店に連絡しました。", "focus": "contacted", "object": "the shop", "jaFocus": "連絡しました" }
        ]
      },
      {
        "id": "contact-by",
        "title": "③ 手段で連絡する",
        "pattern": "CONTACT + 人 + BY email/phone/chat",
        "transitivity": "他動詞",
        "structure": "S + contact + O + by + 手段",
        "image": "メール・電話など、連絡手段を指定する。",
        "point": "by email / by phone / through chat を付けると、連絡方法まで明確にできます。",
        "examples": [
          { "en": "Please contact the customer by email first.", "ja": "まずメールで顧客に連絡してください。", "focus": "contact", "object": "the customer", "jaFocus": "連絡してください" },
          { "en": "We contacted the supplier by phone.", "ja": "私たちは電話で仕入先に連絡しました。", "focus": "contacted", "object": "the supplier", "jaFocus": "連絡しました" },
          { "en": "Can you contact the team through chat?", "ja": "チャットでチームに連絡してもらえますか。", "focus": "contact", "object": "the team", "jaFocus": "連絡して" }
        ],
        "dailyExamples": [
          { "en": "I contacted my family by video call.", "ja": "ビデオ通話で家族に連絡しました。", "focus": "contacted", "object": "my family", "jaFocus": "連絡しました" },
          { "en": "She contacted me through the app.", "ja": "彼女はアプリ経由で私に連絡しました。", "focus": "contacted", "object": "me", "jaFocus": "連絡しました" }
        ]
      },
      {
        "id": "contact-for",
        "title": "④ 目的のために連絡する",
        "pattern": "CONTACT + 人 + FOR + 目的",
        "transitivity": "他動詞",
        "structure": "S + contact + O + for + 名詞",
        "image": "確認・見積・サポートなど、目的を持って連絡する。",
        "point": "for a quote / for support / for confirmation のように、連絡する目的を表せます。",
        "examples": [
          { "en": "We contacted the vendor for a quote.", "ja": "見積のために販売会社へ連絡しました。", "focus": "contacted", "object": "the vendor", "jaFocus": "連絡しました" },
          { "en": "Please contact the sales team for more details.", "ja": "詳細については営業チームに連絡してください。", "focus": "contact", "object": "the sales team", "jaFocus": "連絡してください" },
          { "en": "I contacted IT for support.", "ja": "サポートを受けるためにIT担当へ連絡しました。", "focus": "contacted", "object": "IT", "jaFocus": "連絡しました" }
        ],
        "dailyExamples": [
          { "en": "I contacted the gym for membership information.", "ja": "会員情報を聞くためにジムに連絡しました。", "focus": "contacted", "object": "the gym", "jaFocus": "連絡しました" },
          { "en": "She contacted the school for details.", "ja": "彼女は詳細を聞くために学校へ連絡しました。", "focus": "contacted", "object": "the school", "jaFocus": "連絡しました" }
        ]
      },
      {
        "id": "contact-directly",
        "title": "⑤ 直接連絡する",
        "pattern": "CONTACT + 人 + DIRECTLY",
        "transitivity": "他動詞",
        "structure": "S + contact + O + 副詞",
        "image": "間に人を挟まず、担当者本人に連絡する。",
        "point": "directly を付けると、代理ではなく本人・担当窓口へ直接連絡するニュアンスになります。",
        "examples": [
          { "en": "Please contact the person in charge directly.", "ja": "担当者に直接連絡してください。", "focus": "contact", "object": "the person in charge", "jaFocus": "直接連絡してください" },
          { "en": "The client contacted our manager directly.", "ja": "顧客は当社の管理者に直接連絡しました。", "focus": "contacted", "object": "our manager", "jaFocus": "直接連絡しました" },
          { "en": "I will contact the manufacturer directly.", "ja": "メーカーに直接連絡します。", "focus": "contact", "object": "the manufacturer", "jaFocus": "直接連絡します" }
        ],
        "dailyExamples": [
          { "en": "You can contact me directly on LINE.", "ja": "LINEで私に直接連絡できます。", "focus": "contact", "object": "me", "jaFocus": "直接連絡できます" },
          { "en": "He contacted the owner directly.", "ja": "彼はオーナーに直接連絡しました。", "focus": "contacted", "object": "the owner", "jaFocus": "直接連絡しました" }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "share",
    "rank": 77,
    "word": "SHARE",
    "ipa": "/ʃer/",
    "kana": "シェア",
    "syllable": "share",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★☆☆ 基本",
    "core": "情報・物・経験を相手と同じ場に置く",
    "coreDetail": "SHAREは、情報・資料・考え・作業・成果を相手と同じ場に置くイメージです。仕事では share + 名詞 + with + 人 が特に重要で、share to 人 ではなく with を使うのが基本です。",
    "coreVisual": {
      "from": ["📄 資料", "💡 情報", "🧠 意見", "📊 結果", "🧩 作業"],
      "to": "チーム・顧客・相手",
      "label": "自分が持つもの → 相手と同じ場に置く"
    },
    "meanings": [
      {
        "id": "share-info",
        "title": "① 情報・資料を共有する",
        "pattern": "SHARE + 情報/資料 + WITH + 人",
        "transitivity": "他動詞",
        "structure": "S + share + O + with + 人",
        "image": "自分が持つ情報や資料を、相手も見られる状態にする。",
        "point": "ビジネスで最頻出の形です。share the file with the team のように with を使います。",
        "examples": [
          { "en": "I shared the file with the team.", "ja": "私はそのファイルをチームと共有しました。", "focus": "shared", "object": "the file", "jaFocus": "共有しました" },
          { "en": "We should share the schedule with the client.", "ja": "私たちはそのスケジュールを顧客と共有すべきです。", "focus": "share", "object": "the schedule", "jaFocus": "共有すべきです" },
          { "en": "Please share the latest price list with sales.", "ja": "最新の価格表を営業チームと共有してください。", "focus": "share", "object": "the latest price list", "jaFocus": "共有してください" }
        ],
        "dailyExamples": [
          { "en": "I shared the photos with my family.", "ja": "家族と写真を共有しました。", "focus": "shared", "object": "the photos", "jaFocus": "共有しました" },
          { "en": "Can you share the link with me?", "ja": "そのリンクを私に共有してくれますか。", "focus": "share", "object": "the link", "jaFocus": "共有して" }
        ]
      },
      {
        "id": "share-update",
        "title": "② 報告・最新状況を伝える",
        "pattern": "SHARE + update/result/news",
        "transitivity": "他動詞",
        "structure": "S + share + O",
        "image": "進捗や結果を関係者に見える形で伝える。",
        "point": "share an update / share the results は会議・メールでとても自然です。tellより少し協力的な響きがあります。",
        "examples": [
          { "en": "I will share an update after the meeting.", "ja": "会議後に最新状況を共有します。", "focus": "share", "object": "an update", "jaFocus": "共有します" },
          { "en": "She shared the results with the manager.", "ja": "彼女は結果を上司と共有しました。", "focus": "shared", "object": "the results", "jaFocus": "共有しました" },
          { "en": "Can you share the current status by Friday?", "ja": "金曜日までに現在の状況を共有できますか。", "focus": "share", "object": "the current status", "jaFocus": "共有できますか" }
        ],
        "dailyExamples": [
          { "en": "I shared good news with my friends.", "ja": "友人に良い知らせを共有しました。", "focus": "shared", "object": "good news", "jaFocus": "共有しました" },
          { "en": "She shared an update about her trip.", "ja": "彼女は旅行について近況を共有しました。", "focus": "shared", "object": "an update", "jaFocus": "共有しました" }
        ]
      },
      {
        "id": "share-idea",
        "title": "③ 意見・考えを共有する",
        "pattern": "SHARE + idea/opinion/thought",
        "transitivity": "他動詞",
        "structure": "S + share + O",
        "image": "自分の考えを会議や相談の場に出す。",
        "point": "share my idea / share your opinion は、会議で発言する時に使いやすい表現です。",
        "examples": [
          { "en": "I would like to share my idea first.", "ja": "まず私の考えを共有したいです。", "focus": "share", "object": "my idea", "jaFocus": "共有したいです" },
          { "en": "Please share your opinion during the meeting.", "ja": "会議中にあなたの意見を共有してください。", "focus": "share", "object": "your opinion", "jaFocus": "共有してください" },
          { "en": "The engineer shared a different view.", "ja": "その技術者は別の見方を共有しました。", "focus": "shared", "object": "a different view", "jaFocus": "共有しました" }
        ],
        "dailyExamples": [
          { "en": "Can I share my thoughts?", "ja": "私の考えを話してもいいですか。", "focus": "share", "object": "my thoughts", "jaFocus": "話して" },
          { "en": "He shared his opinion honestly.", "ja": "彼は正直に自分の意見を話しました。", "focus": "shared", "object": "his opinion", "jaFocus": "話しました" }
        ]
      },
      {
        "id": "share-responsibility",
        "title": "④ 作業・責任を分担する",
        "pattern": "SHARE + work/responsibility/task",
        "transitivity": "他動詞",
        "structure": "S + share + O",
        "image": "一人で抱えず、複数人で同じ負担を持つ。",
        "point": "share the workload / share responsibility は、チーム作業で使いやすい表現です。",
        "examples": [
          { "en": "We need to share the workload this week.", "ja": "今週は作業量を分担する必要があります。", "focus": "share", "object": "the workload", "jaFocus": "分担する必要があります" },
          { "en": "The two teams shared responsibility for the project.", "ja": "2つのチームがその案件の責任を分担しました。", "focus": "shared", "object": "responsibility", "jaFocus": "分担しました" },
          { "en": "Can we share the follow-up tasks?", "ja": "フォロー作業を分担できますか。", "focus": "share", "object": "the follow-up tasks", "jaFocus": "分担できますか" }
        ],
        "dailyExamples": [
          { "en": "We shared the housework.", "ja": "私たちは家事を分担しました。", "focus": "shared", "object": "the housework", "jaFocus": "分担しました" },
          { "en": "They shared the driving on the trip.", "ja": "彼らは旅行中に運転を交代で分担しました。", "focus": "shared", "object": "the driving", "jaFocus": "分担しました" }
        ]
      },
      {
        "id": "share-use",
        "title": "⑤ 共同で使う",
        "pattern": "SHARE + space/tool/resource",
        "transitivity": "他動詞・自動詞",
        "structure": "S + share + O",
        "image": "同じ場所・道具・リソースを複数人で使う。",
        "point": "share a folder / share a room / share resources のように、共同利用にも使います。",
        "examples": [
          { "en": "We share the same folder for project files.", "ja": "私たちは案件資料用に同じフォルダを共有しています。", "focus": "share", "object": "the same folder", "jaFocus": "共有しています" },
          { "en": "The sales team shares a meeting room with marketing.", "ja": "営業チームはマーケティング部門と会議室を共同利用しています。", "focus": "shares", "object": "a meeting room", "jaFocus": "共同利用しています" },
          { "en": "We can share the sample set during the visit.", "ja": "訪問中はサンプルセットを共同で使えます。", "focus": "share", "object": "the sample set", "jaFocus": "共同で使えます" }
        ],
        "dailyExamples": [
          { "en": "We shared a table at the cafe.", "ja": "カフェでテーブルを相席しました。", "focus": "shared", "object": "a table", "jaFocus": "相席しました" },
          { "en": "The kids shared one umbrella.", "ja": "子どもたちは1本の傘を一緒に使いました。", "focus": "shared", "object": "one umbrella", "jaFocus": "一緒に使いました" }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "share out",
        "ja": "分けて配る・分配する",
        "image": "1つの量を複数人へ公平に配る。",
        "pattern": "share out + 名詞 / share + 名詞 + out",
        "examples": [
          { "en": "Let's share out the remaining tasks.", "ja": "残りの作業を分担しましょう。", "focus": "share out", "object": "the remaining tasks", "jaFocus": "分担しましょう" },
          { "en": "The manager shared out the sample kits among the sales team.", "ja": "上司はサンプルキットを営業チーム内で分配しました。", "focus": "shared out", "object": "the sample kits", "jaFocus": "分配しました" },
          { "en": "We shared the cost out across three departments.", "ja": "費用を3つの部門で分担しました。", "focus": "shared out", "object": "the cost", "jaFocus": "分担しました" }
        ],
        "dailyExamples": [
          { "en": "We shared out the snacks after the game.", "ja": "試合後にお菓子を分けました。", "focus": "shared out", "object": "the snacks", "jaFocus": "分けました" },
          { "en": "They shared the prize money out equally.", "ja": "彼らは賞金を均等に分けました。", "focus": "shared out", "object": "the prize money", "jaFocus": "分けました" }
        ]
      },
      {
        "phrase": "share in",
        "ja": "〜を共にする・〜に加わる",
        "image": "成果・責任・感情などに、参加者として一緒に入る。",
        "pattern": "share in + 名詞",
        "examples": [
          { "en": "Everyone on the team should share in the success.", "ja": "チーム全員がその成功を分かち合うべきです。", "focus": "share in", "object": "the success", "jaFocus": "分かち合うべきです" },
          { "en": "We all share in the responsibility for quality.", "ja": "私たちは全員、品質に対する責任を共有しています。", "focus": "share in", "object": "the responsibility", "jaFocus": "責任を共有しています" },
          { "en": "New members can share in the project results.", "ja": "新しいメンバーも案件の成果を共有できます。", "focus": "share in", "object": "the project results", "jaFocus": "共有できます" }
        ],
        "dailyExamples": [
          { "en": "I want to share in your happiness.", "ja": "あなたの幸せを一緒に分かち合いたいです。", "focus": "share in", "object": "your happiness", "jaFocus": "分かち合いたい" },
          { "en": "They shared in the excitement.", "ja": "彼らはその興奮を共に味わいました。", "focus": "shared in", "object": "the excitement", "jaFocus": "共に味わいました" }
        ]
      }
    ]
  },
  {
    "id": "collect",
    "rank": 78,
    "word": "COLLECT",
    "ipa": "/kəˈlekt/",
    "kana": "コレクト",
    "syllable": "col-lect",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★☆☆ 基本",
    "core": "散らばったものを一か所に集める",
    "coreDetail": "COLLECTは、情報・資料・サンプル・意見・お金など、散らばっているものを一か所に集める動詞です。仕事ではデータ収集、資料回収、フィードバック集めでよく使います。",
    "coreVisual": {
      "from": ["📊 データ", "📄 資料", "💬 意見", "📦 サンプル", "💰 支払い"],
      "to": "一か所・自分側",
      "label": "複数の場所 → 一か所に集める"
    },
    "meanings": [
      {
        "id": "collect-data",
        "title": "① 情報・データを集める",
        "pattern": "COLLECT + data/information/feedback",
        "transitivity": "他動詞",
        "structure": "S + collect + O",
        "image": "判断や報告のために、必要な情報を集める。",
        "point": "collect data / collect information / collect feedback は仕事で非常に使いやすい形です。",
        "examples": [
          { "en": "I collected the data for the report.", "ja": "報告書のためにデータを集めました。", "focus": "collected", "object": "the data", "jaFocus": "集めました" },
          { "en": "We need to collect feedback from users.", "ja": "ユーザーからフィードバックを集める必要があります。", "focus": "collect", "object": "feedback", "jaFocus": "集める必要があります" },
          { "en": "She collected information about the new market.", "ja": "彼女は新しい市場について情報を集めました。", "focus": "collected", "object": "information", "jaFocus": "集めました" }
        ],
        "dailyExamples": [
          { "en": "I collected information for my trip.", "ja": "旅行のために情報を集めました。", "focus": "collected", "object": "information", "jaFocus": "集めました" },
          { "en": "He collected reviews before buying the camera.", "ja": "彼はカメラを買う前にレビューを集めました。", "focus": "collected", "object": "reviews", "jaFocus": "集めました" }
        ]
      },
      {
        "id": "collect-documents",
        "title": "② 資料・書類を回収する",
        "pattern": "COLLECT + documents/forms/reports",
        "transitivity": "他動詞",
        "structure": "S + collect + O",
        "image": "人や場所に分かれている資料を手元に集める。",
        "point": "collect documents は『集める』、collect forms は『回収する』のように訳すと自然です。",
        "examples": [
          { "en": "She collected all the documents before the meeting.", "ja": "彼女は会議前にすべての資料を集めました。", "focus": "collected", "object": "all the documents", "jaFocus": "集めました" },
          { "en": "Please collect the signed forms by Friday.", "ja": "金曜日までに署名済みの用紙を回収してください。", "focus": "collect", "object": "the signed forms", "jaFocus": "回収してください" },
          { "en": "We collected the reports from each branch.", "ja": "各支店から報告書を集めました。", "focus": "collected", "object": "the reports", "jaFocus": "集めました" }
        ],
        "dailyExamples": [
          { "en": "The teacher collected the homework.", "ja": "先生は宿題を回収しました。", "focus": "collected", "object": "the homework", "jaFocus": "回収しました" },
          { "en": "I collected old photos from my parents' house.", "ja": "実家から古い写真を集めました。", "focus": "collected", "object": "old photos", "jaFocus": "集めました" }
        ]
      },
      {
        "id": "collect-from",
        "title": "③ 〜から受け取る・引き取る",
        "pattern": "COLLECT + 人/物 + FROM + 場所/人",
        "transitivity": "他動詞",
        "structure": "S + collect + O + from + 場所/人",
        "image": "ある場所へ行って、人や物を引き取る。",
        "point": "イギリス英語で特によく見られます。collect samples from the warehouse のように、物を取りに行く意味でも使えます。",
        "examples": [
          { "en": "I will collect the samples from the warehouse.", "ja": "倉庫からサンプルを引き取ります。", "focus": "collect", "object": "the samples", "jaFocus": "引き取ります" },
          { "en": "Please collect the package from reception.", "ja": "受付から荷物を受け取ってください。", "focus": "collect", "object": "the package", "jaFocus": "受け取ってください" },
          { "en": "We collected the prototype from the factory.", "ja": "工場から試作品を引き取りました。", "focus": "collected", "object": "the prototype", "jaFocus": "引き取りました" }
        ],
        "dailyExamples": [
          { "en": "I collected my ticket from the counter.", "ja": "カウンターでチケットを受け取りました。", "focus": "collected", "object": "my ticket", "jaFocus": "受け取りました" },
          { "en": "She collected her son from school.", "ja": "彼女は学校へ息子を迎えに行きました。", "focus": "collected", "object": "her son", "jaFocus": "迎えに行きました" }
        ]
      },
      {
        "id": "collect-payment",
        "title": "④ お金・代金を回収する",
        "pattern": "COLLECT + payment/fee/rent",
        "transitivity": "他動詞",
        "structure": "S + collect + O",
        "image": "支払い・料金などを受け取って集める。",
        "point": "collect payment は『代金を回収する』。営業・経理・請求管理で使えます。",
        "examples": [
          { "en": "Accounting will collect the payment next week.", "ja": "経理が来週、代金を回収します。", "focus": "collect", "object": "the payment", "jaFocus": "回収します" },
          { "en": "We need to collect the remaining balance before delivery.", "ja": "納品前に残金を回収する必要があります。", "focus": "collect", "object": "the remaining balance", "jaFocus": "回収する必要があります" },
          { "en": "The company collected service fees from each user.", "ja": "会社は各ユーザーからサービス料金を徴収しました。", "focus": "collected", "object": "service fees", "jaFocus": "徴収しました" }
        ],
        "dailyExamples": [
          { "en": "The club collected the membership fee.", "ja": "クラブは会費を集めました。", "focus": "collected", "object": "the membership fee", "jaFocus": "集めました" },
          { "en": "They collected donations at the event.", "ja": "彼らはイベントで寄付を集めました。", "focus": "collected", "object": "donations", "jaFocus": "集めました" }
        ]
      },
      {
        "id": "collect-thoughts",
        "title": "⑤ 考えをまとめる",
        "pattern": "COLLECT + thoughts/yourself",
        "transitivity": "他動詞",
        "structure": "S + collect + O",
        "image": "散らばった考えや気持ちを落ち着かせて整える。",
        "point": "collect my thoughts は、会議前や発言前に『考えをまとめる』という意味で使えます。",
        "examples": [
          { "en": "I need a minute to collect my thoughts.", "ja": "考えをまとめるために少し時間が必要です。", "focus": "collect", "object": "my thoughts", "jaFocus": "考えをまとめる" },
          { "en": "She paused to collect her thoughts before the presentation.", "ja": "彼女は発表前に考えをまとめるため、少し間を置きました。", "focus": "collect", "object": "her thoughts", "jaFocus": "考えをまとめる" },
          { "en": "Let's collect our thoughts before we reply.", "ja": "返信する前に考えを整理しましょう。", "focus": "collect", "object": "our thoughts", "jaFocus": "考えを整理しましょう" }
        ],
        "dailyExamples": [
          { "en": "I took a walk to collect my thoughts.", "ja": "考えを整理するために散歩しました。", "focus": "collect", "object": "my thoughts", "jaFocus": "考えを整理する" },
          { "en": "He closed his eyes to collect himself.", "ja": "彼は気持ちを落ち着かせるために目を閉じました。", "focus": "collect", "object": "himself", "jaFocus": "気持ちを落ち着かせる" }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "collect up",
        "ja": "集め上げる・まとめて集める",
        "image": "散らばっている物を一つ残らず集める。",
        "pattern": "collect up + 名詞 / collect + 名詞 + up",
        "examples": [
          { "en": "Please collect up the sample cards after the presentation.", "ja": "発表後にサンプルカードをまとめて回収してください。", "focus": "collect up", "object": "the sample cards", "jaFocus": "回収してください" },
          { "en": "We collected up the old price lists before sending the new version.", "ja": "新版を送る前に古い価格表をまとめて回収しました。", "focus": "collected up", "object": "the old price lists", "jaFocus": "回収しました" },
          { "en": "The team collected all the parts up for inventory.", "ja": "チームは棚卸しのためにすべての部品を集めました。", "focus": "collected up", "object": "all the parts", "jaFocus": "集めました" }
        ],
        "dailyExamples": [
          { "en": "We collected up the toys before dinner.", "ja": "夕食前におもちゃを片付けて集めました。", "focus": "collected up", "object": "the toys", "jaFocus": "集めました" },
          { "en": "She collected the tickets up at the entrance.", "ja": "彼女は入口でチケットを回収しました。", "focus": "collected up", "object": "the tickets", "jaFocus": "回収しました" }
        ]
      }
    ]
  },
  {
    "id": "reduce",
    "rank": 79,
    "word": "REDUCE",
    "ipa": "/rɪˈduːs/",
    "kana": "リデュース",
    "syllable": "re-duce",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★☆☆ 基本",
    "core": "量・時間・費用・負担を少なくする",
    "coreDetail": "REDUCEは、コスト・時間・リスク・負担などを減らす時に使います。ビジネス改善の話でよく出ます。",
    "meanings": [
      {
        "id": "main",
        "title": "① 減らす",
        "pattern": "REDUCE + 名詞",
        "transitivity": "基本動詞",
        "structure": "S + reduce + O",
        "image": "量・時間・費用・負担を少なくする",
        "point": "REDUCEは、コスト・時間・リスク・負担などを減らす時に使います。ビジネス改善の話でよく出ます。",
        "examples": [
          {
            "en": "We need to reduce the cost.",
            "ja": "私たちはコストを削減する必要があります。",
            "focus": "reduce",
            "object": "the cost",
            "jaFocus": "減する必要があります",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "We"
              },
              {
                "label": "V",
                "text": "need to reduce"
              },
              {
                "label": "O",
                "text": "the cost"
              }
            ]
          },
          {
            "en": "This tool reduces manual work.",
            "ja": "このツールは手作業を減らします。",
            "focus": "reduces",
            "object": "manual work",
            "jaFocus": "は手作業を減らします",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "This tool"
              },
              {
                "label": "V",
                "text": "reduces"
              },
              {
                "label": "O",
                "text": "manual work"
              }
            ]
          },
          {
            "en": "They reduced the delivery time by two days.",
            "ja": "彼らは納期を2日短縮しました。",
            "focus": "reduced",
            "object": "the delivery time",
            "jaFocus": "期を2日短縮しました",
            "sentencePattern": "S + V + O + M",
            "grammarParts": [
              {
                "label": "S",
                "text": "They"
              },
              {
                "label": "V",
                "text": "reduced"
              },
              {
                "label": "O",
                "text": "the delivery time"
              },
              {
                "label": "M",
                "text": "by two days"
              }
            ],
            "grammarNote": "M は時・場所・相手・理由などを補足する語句です。"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "increase",
    "rank": 80,
    "word": "INCREASE",
    "ipa": "/ɪnˈkriːs/",
    "kana": "インクリース",
    "syllable": "in-crease",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★☆☆ 基本",
    "core": "数・量・売上・可能性を増やす",
    "coreDetail": "INCREASEは、売上・数量・時間・可能性などが増える、または増やす時に使います。increase sales / increase the chance の形がよく使われます。",
    "meanings": [
      {
        "id": "main",
        "title": "① 増える・増やす",
        "pattern": "INCREASE + 名詞 / 数量 INCREASES",
        "transitivity": "基本動詞",
        "structure": "S + increase + O / S + increases",
        "image": "数・量・売上・可能性を増やす",
        "point": "INCREASEは、売上・数量・時間・可能性などが増える、または増やす時に使います。increase sales / increase the chance の形がよく使われます。",
        "examples": [
          {
            "en": "We want to increase sales this year.",
            "ja": "私たちは今年売上を増やしたいです。",
            "focus": "increase",
            "object": "sales",
            "jaFocus": "売上を増やしたいです",
            "sentencePattern": "S + V + O + M",
            "grammarParts": [
              {
                "label": "S",
                "text": "We"
              },
              {
                "label": "V",
                "text": "want to increase"
              },
              {
                "label": "O",
                "text": "sales"
              },
              {
                "label": "M",
                "text": "this year"
              }
            ],
            "grammarNote": "M は時・場所・相手・理由などを補足する語句です。"
          },
          {
            "en": "The number of inquiries increased last month.",
            "ja": "先月、問い合わせの数が増えました。",
            "focus": "increased",
            "jaFocus": "わせの数が増えました",
            "sentencePattern": "S + V + M",
            "grammarParts": [
              {
                "label": "S",
                "text": "The number of inquiries"
              },
              {
                "label": "V",
                "text": "increased"
              },
              {
                "label": "M",
                "text": "last month"
              }
            ],
            "grammarNote": "M は時・場所・相手・理由などを補足する語句です。"
          },
          {
            "en": "This change will increase the chance of success.",
            "ja": "この変更は成功の可能性を高めます。",
            "focus": "increase",
            "object": "the chance of success",
            "jaFocus": "功の可能性を高めます",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "This change"
              },
              {
                "label": "V",
                "text": "will increase"
              },
              {
                "label": "O",
                "text": "the chance of success"
              }
            ]
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": []
  },
  {
    "id": "accept",
    "rank": 81,
    "word": "ACCEPT",
    "ipa": "/əkˈsept/",
    "kana": "アクセプト",
    "syllable": "ac-cept",
    "transitivity": "他動詞",
    "importance": "★★★☆☆ 基本",
    "core": "提案・条件・事実を受け入れる",
    "coreDetail": "ACCEPTは、相手から来た提案・依頼・条件・責任などを「受け入れる」動詞です。仕事では accept an offer / accept responsibility / accept the schedule のように使います。",
    "meanings": [
      {
        "id": "main",
        "title": "① 受け入れる・承諾する",
        "pattern": "ACCEPT + 名詞",
        "transitivity": "他動詞",
        "structure": "S + accept + O",
        "image": "相手から来たものを自分の側で受け止める",
        "point": "agree よりも「条件や提案を正式に受け入れる」感じが強いです。",
        "examples": [
          {
            "en": "We accepted the revised delivery date.",
            "ja": "私たちは修正された納期を受け入れました。",
            "focus": "accepted",
            "jaFocus": "受け入れました",
            "object": "the revised delivery date",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "We"
              },
              {
                "label": "V",
                "text": "accepted"
              },
              {
                "label": "O",
                "text": "the revised delivery date"
              }
            ]
          },
          {
            "en": "The client accepted our proposal.",
            "ja": "その顧客は私たちの提案を承諾しました。",
            "focus": "accepted",
            "jaFocus": "承諾しました",
            "object": "our proposal",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "The client"
              },
              {
                "label": "V",
                "text": "accepted"
              },
              {
                "label": "O",
                "text": "our proposal"
              }
            ]
          },
          {
            "en": "I accept responsibility for this mistake.",
            "ja": "私はこのミスの責任を受け入れます。",
            "focus": "accept",
            "jaFocus": "責任を受け入れます",
            "object": "responsibility",
            "sentencePattern": "S + V + O + M",
            "grammarParts": [
              {
                "label": "S",
                "text": "I"
              },
              {
                "label": "V",
                "text": "accept"
              },
              {
                "label": "O",
                "text": "responsibility"
              },
              {
                "label": "M",
                "text": "for this mistake"
              }
            ],
            "grammarNote": "for this mistake は理由・対象を補足する語句です。"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "accept an offer",
        "ja": "申し出を受け入れる",
        "image": "相手からの条件や申し出を正式に受ける",
        "pattern": "ACCEPT + offer",
        "examples": [
          {
            "en": "We decided to accept their offer.",
            "ja": "私たちは彼らの申し出を受け入れることにしました。",
            "focus": "accept their offer",
            "jaFocus": "申し出を受け入れる",
            "object": "their offer"
          }
        ]
      },
      {
        "phrase": "accept responsibility",
        "ja": "責任を受け入れる",
        "image": "自分の担当・責任として認める",
        "pattern": "ACCEPT + responsibility",
        "examples": [
          {
            "en": "A good leader accepts responsibility.",
            "ja": "良いリーダーは責任を受け入れます。",
            "focus": "accepts responsibility",
            "jaFocus": "責任を受け入れます",
            "object": "responsibility"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "avoid",
    "rank": 82,
    "word": "AVOID",
    "ipa": "/əˈvɔɪd/",
    "kana": "アヴォイド",
    "syllable": "a-void",
    "transitivity": "他動詞",
    "importance": "★★★☆☆ 基本",
    "core": "問題・リスク・不要な行動を避ける",
    "coreDetail": "AVOIDは、ミス・遅れ・混乱などを起こさないように避ける動詞です。後ろに動詞を置く時は avoid doing の形にします。",
    "meanings": [
      {
        "id": "main",
        "title": "① 避ける・防ぐ",
        "pattern": "AVOID + 名詞 / AVOID + doing",
        "transitivity": "他動詞",
        "structure": "S + avoid + O",
        "image": "問題が起きる方向へ行かないようにする",
        "point": "avoid to do ではなく avoid doing が自然です。",
        "examples": [
          {
            "en": "We should avoid mistakes in the quotation.",
            "ja": "私たちは見積書でミスを避けるべきです。",
            "focus": "avoid",
            "jaFocus": "ミスを避けるべきです",
            "object": "mistakes",
            "sentencePattern": "S + V + O + M",
            "grammarParts": [
              {
                "label": "S",
                "text": "We"
              },
              {
                "label": "V",
                "text": "should avoid"
              },
              {
                "label": "O",
                "text": "mistakes"
              },
              {
                "label": "M",
                "text": "in the quotation"
              }
            ]
          },
          {
            "en": "Please avoid sending unclear emails.",
            "ja": "不明確なメールを送ることは避けてください。",
            "focus": "avoid sending",
            "jaFocus": "避けてください",
            "object": "sending unclear emails",
            "sentencePattern": "V + O",
            "grammarParts": [
              {
                "label": "V",
                "text": "Please avoid"
              },
              {
                "label": "O",
                "text": "sending unclear emails"
              }
            ],
            "grammarNote": "命令文では主語 you が省略されています。"
          },
          {
            "en": "This check helps us avoid delivery delays.",
            "ja": "この確認は私たちが納期遅れを避けるのに役立ちます。",
            "focus": "avoid",
            "jaFocus": "納期遅れを避ける",
            "object": "delivery delays",
            "sentencePattern": "S + V + O + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "This check"
              },
              {
                "label": "V",
                "text": "helps"
              },
              {
                "label": "O",
                "text": "us"
              },
              {
                "label": "V",
                "text": "avoid"
              },
              {
                "label": "O",
                "text": "delivery delays"
              }
            ]
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "avoid confusion",
        "ja": "混乱を避ける",
        "image": "相手が誤解しないようにする",
        "pattern": "AVOID + confusion",
        "examples": [
          {
            "en": "We added a note to avoid confusion.",
            "ja": "私たちは混乱を避けるために注記を追加しました。",
            "focus": "avoid confusion",
            "jaFocus": "混乱を避ける",
            "object": "confusion"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "consider",
    "rank": 83,
    "word": "CONSIDER",
    "ipa": "/kənˈsɪdər/",
    "kana": "コンシダー",
    "syllable": "con-sid-er",
    "transitivity": "他動詞",
    "importance": "★★★☆☆ 基本",
    "core": "選択肢・提案・状況をよく考える",
    "coreDetail": "CONSIDERは、すぐ決めずに「よく検討する」動詞です。仕事では proposal, option, schedule, price などとよく使います。",
    "meanings": [
      {
        "id": "main",
        "title": "① 検討する・よく考える",
        "pattern": "CONSIDER + 名詞 / CONSIDER + doing",
        "transitivity": "他動詞",
        "structure": "S + consider + O",
        "image": "複数の条件を頭の中で比べながら考える",
        "point": "consider to do ではなく consider doing が自然です。",
        "examples": [
          {
            "en": "We are considering a new supplier.",
            "ja": "私たちは新しい仕入先を検討しています。",
            "focus": "considering",
            "jaFocus": "検討しています",
            "object": "a new supplier",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "We"
              },
              {
                "label": "V",
                "text": "are considering"
              },
              {
                "label": "O",
                "text": "a new supplier"
              }
            ]
          },
          {
            "en": "Please consider our proposal.",
            "ja": "私たちの提案をご検討ください。",
            "focus": "consider",
            "jaFocus": "ご検討ください",
            "object": "our proposal",
            "sentencePattern": "V + O",
            "grammarParts": [
              {
                "label": "V",
                "text": "Please consider"
              },
              {
                "label": "O",
                "text": "our proposal"
              }
            ],
            "grammarNote": "命令文では主語 you が省略されています。"
          },
          {
            "en": "I am considering changing the study plan.",
            "ja": "私は学習計画を変更することを検討しています。",
            "focus": "considering changing",
            "jaFocus": "検討しています",
            "object": "changing the study plan",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "I"
              },
              {
                "label": "V",
                "text": "am considering"
              },
              {
                "label": "O",
                "text": "changing the study plan"
              }
            ]
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "consider the cost",
        "ja": "費用を考慮する",
        "image": "価格や予算を判断材料に入れる",
        "pattern": "CONSIDER + cost",
        "examples": [
          {
            "en": "We need to consider the cost before ordering.",
            "ja": "私たちは発注前に費用を考慮する必要があります。",
            "focus": "consider the cost",
            "jaFocus": "費用を考慮する",
            "object": "the cost"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "depend",
    "rank": 84,
    "word": "DEPEND",
    "ipa": "/dɪˈpend/",
    "kana": "ディペンド",
    "syllable": "de-pend",
    "transitivity": "自動詞",
    "importance": "★★★☆☆ 基本",
    "core": "結果や判断が何かに左右される",
    "coreDetail": "DEPENDは、予定・価格・結果などが「何に左右されるか」を表します。基本形は depend on + 名詞です。",
    "meanings": [
      {
        "id": "main",
        "title": "① 〜による・〜次第である",
        "pattern": "DEPEND ON + 名詞",
        "transitivity": "自動詞",
        "structure": "S + depend on + O",
        "image": "判断や結果が別の条件に支えられている",
        "point": "depend は on とセットで使うことが多いです。on だけをCにせず、depend on をまとまりで見ます。",
        "examples": [
          {
            "en": "The delivery date depends on the stock situation.",
            "ja": "納期は在庫状況によります。",
            "focus": "depends on",
            "jaFocus": "在庫状況によります",
            "object": "the stock situation",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "The delivery date"
              },
              {
                "label": "V",
                "text": "depends on"
              },
              {
                "label": "O",
                "text": "the stock situation"
              }
            ]
          },
          {
            "en": "The final price depends on the quantity.",
            "ja": "最終価格は数量によります。",
            "focus": "depends on",
            "jaFocus": "数量によります",
            "object": "the quantity",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "The final price"
              },
              {
                "label": "V",
                "text": "depends on"
              },
              {
                "label": "O",
                "text": "the quantity"
              }
            ]
          },
          {
            "en": "It depends on your schedule.",
            "ja": "それはあなたの予定次第です。",
            "focus": "depends on",
            "jaFocus": "予定次第です",
            "object": "your schedule",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "It"
              },
              {
                "label": "V",
                "text": "depends on"
              },
              {
                "label": "O",
                "text": "your schedule"
              }
            ]
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "depend on the schedule",
        "ja": "スケジュール次第である",
        "image": "予定に左右される",
        "pattern": "DEPEND ON + schedule",
        "examples": [
          {
            "en": "Our visit depends on the schedule.",
            "ja": "私たちの訪問はスケジュール次第です。",
            "focus": "depends on the schedule",
            "jaFocus": "スケジュール次第です",
            "object": "the schedule"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "expect",
    "rank": 85,
    "word": "EXPECT",
    "ipa": "/ɪkˈspekt/",
    "kana": "エクスペクト",
    "syllable": "ex-pect",
    "transitivity": "他動詞",
    "importance": "★★★☆☆ 基本",
    "core": "起こること・返事・結果を予想して待つ",
    "coreDetail": "EXPECTは、返事・納品・結果などを「来るだろう」と見込む動詞です。hope よりも現実的な予想の感じがあります。",
    "meanings": [
      {
        "id": "main",
        "title": "① 予想する・期待する・見込む",
        "pattern": "EXPECT + 名詞 / EXPECT + to do",
        "transitivity": "他動詞",
        "structure": "S + expect + O",
        "image": "未来の出来事が来ると見込んで待つ",
        "point": "仕事では expect a reply / expect delivery / expect a result のように使います。",
        "examples": [
          {
            "en": "We expect a reply by Friday.",
            "ja": "私たちは金曜日までに返信が来ると見込んでいます。",
            "focus": "expect",
            "jaFocus": "見込んでいます",
            "object": "a reply",
            "sentencePattern": "S + V + O + M",
            "grammarParts": [
              {
                "label": "S",
                "text": "We"
              },
              {
                "label": "V",
                "text": "expect"
              },
              {
                "label": "O",
                "text": "a reply"
              },
              {
                "label": "M",
                "text": "by Friday"
              }
            ]
          },
          {
            "en": "The client expects a clear explanation.",
            "ja": "その顧客は分かりやすい説明を期待しています。",
            "focus": "expects",
            "jaFocus": "期待しています",
            "object": "a clear explanation",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "The client"
              },
              {
                "label": "V",
                "text": "expects"
              },
              {
                "label": "O",
                "text": "a clear explanation"
              }
            ]
          },
          {
            "en": "I expect to finish the report today.",
            "ja": "私は今日その報告書を終える予定です。",
            "focus": "expect to finish",
            "jaFocus": "予定です",
            "object": "to finish the report",
            "sentencePattern": "S + V + O + M",
            "grammarParts": [
              {
                "label": "S",
                "text": "I"
              },
              {
                "label": "V",
                "text": "expect"
              },
              {
                "label": "O",
                "text": "to finish the report"
              },
              {
                "label": "M",
                "text": "today"
              }
            ]
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "expect a reply",
        "ja": "返信を見込む",
        "image": "相手からの返信が来ると考える",
        "pattern": "EXPECT + reply",
        "examples": [
          {
            "en": "We expect a reply from the customer soon.",
            "ja": "私たちはまもなく顧客から返信が来ると見込んでいます。",
            "focus": "expect a reply",
            "jaFocus": "返信が来ると見込んでいます",
            "object": "a reply"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "reply",
    "rank": 86,
    "word": "REPLY",
    "ipa": "/rɪˈplaɪ/",
    "kana": "リプライ",
    "syllable": "re-ply",
    "transitivity": "自動詞",
    "importance": "★★★★☆ 重要",
    "core": "相手の連絡や質問に返事をする",
    "coreDetail": "REPLYは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「返信する・返答する」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 返信する・返答する",
        "pattern": "reply to an email",
        "transitivity": "自動詞",
        "structure": "S + V + to + 相手・連絡",
        "image": "受け取った連絡に対して返す",
        "point": "reply は自動詞なので、相手やメールを続けるときは reply to ... を使います。to 以降は前置詞句で、目的語Oではありません。",
        "examples": [
          {
            "en": "I will reply to the client by this afternoon.",
            "ja": "私は今日の午後までにクライアントへ返信します。",
            "focus": "reply to the client",
            "jaFocus": "返信する・返答する",
            "sentencePattern": "S + V + to + 相手・連絡",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "reply"
              },
              {
                "label": "M",
                "text": "to the client"
              }
            ],
            "grammarNote": "この文は前置詞句を補足情報として扱います。前置詞の後ろの名詞だけを目的語Oにしないように注意します。"
          },
          {
            "en": "Please reply to the email when you have time.",
            "ja": "時間がある時にそのメールへ返信してください。",
            "focus": "reply to an email",
            "jaFocus": "メールに返信する"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please reply to the email when you have time.",
            "ja": "時間がある時にそのメールへ返信してください。",
            "focus": "reply to an email",
            "jaFocus": "メールに返信する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "reply to an email",
        "ja": "メールに返信する",
        "image": "受け取った連絡に対して返す",
        "pattern": "reply to an email",
        "examples": [
          {
            "en": "Please reply to the email when you have time.",
            "ja": "時間がある時にそのメールへ返信してください。",
            "focus": "reply to an email",
            "jaFocus": "メールに返信する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "include",
    "rank": 87,
    "word": "INCLUDE",
    "ipa": "/ɪnˈkluːd/",
    "kana": "インクルード",
    "syllable": "in-clude",
    "transitivity": "他動詞",
    "importance": "★★★☆☆ 基本",
    "core": "必要なものを中に含める",
    "coreDetail": "INCLUDEは、資料・価格・メール・見積に必要な情報を「含める」動詞です。仕事では include tax / include the details / include shipping cost などが頻出です。",
    "meanings": [
      {
        "id": "main",
        "title": "① 含める・含む",
        "pattern": "INCLUDE + 名詞",
        "transitivity": "他動詞",
        "structure": "S + include + O",
        "image": "全体の中に必要な要素を入れる",
        "point": "contain は中に入っている事実、include はリストや範囲に含める感じが強いです。",
        "examples": [
          {
            "en": "Please include the delivery date in the quotation.",
            "ja": "見積書に納期を含めてください。",
            "focus": "include",
            "jaFocus": "含めてください",
            "object": "the delivery date",
            "sentencePattern": "V + O + M",
            "grammarParts": [
              {
                "label": "V",
                "text": "Please include"
              },
              {
                "label": "O",
                "text": "the delivery date"
              },
              {
                "label": "M",
                "text": "in the quotation"
              }
            ]
          },
          {
            "en": "The price includes tax.",
            "ja": "その価格には税金が含まれています。",
            "focus": "includes",
            "jaFocus": "含まれています",
            "object": "tax",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "The price"
              },
              {
                "label": "V",
                "text": "includes"
              },
              {
                "label": "O",
                "text": "tax"
              }
            ]
          },
          {
            "en": "We included the product details in the email.",
            "ja": "私たちはメールに製品詳細を含めました。",
            "focus": "included",
            "jaFocus": "含めました",
            "object": "the product details",
            "sentencePattern": "S + V + O + M",
            "grammarParts": [
              {
                "label": "S",
                "text": "We"
              },
              {
                "label": "V",
                "text": "included"
              },
              {
                "label": "O",
                "text": "the product details"
              },
              {
                "label": "M",
                "text": "in the email"
              }
            ]
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "include the details",
        "ja": "詳細を含める",
        "image": "必要な情報を入れる",
        "pattern": "INCLUDE + details",
        "examples": [
          {
            "en": "Please include the details in your reply.",
            "ja": "返信に詳細を含めてください。",
            "focus": "include the details",
            "jaFocus": "詳細を含めてください",
            "object": "the details"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "notice",
    "rank": 88,
    "word": "NOTICE",
    "ipa": "/ˈnoʊtɪs/",
    "kana": "ノーティス",
    "syllable": "no-tice",
    "transitivity": "他動詞",
    "importance": "★★★☆☆ 基本",
    "core": "変化・問題・小さな点に気づく",
    "coreDetail": "NOTICEは、問題・変化・違いなどを見たり聞いたりして気づく動詞です。仕事では notice an issue / notice a change などが便利です。",
    "meanings": [
      {
        "id": "main",
        "title": "① 気づく",
        "pattern": "NOTICE + 名詞 / NOTICE + that節",
        "transitivity": "他動詞",
        "structure": "S + notice + O",
        "image": "見落としそうな点が意識に入ってくる",
        "point": "realize は頭で理解する感じ、notice は見たり聞いたりして気づく感じです。",
        "examples": [
          {
            "en": "I noticed a mistake in the document.",
            "ja": "私は書類の中のミスに気づきました。",
            "focus": "noticed",
            "jaFocus": "気づきました",
            "object": "a mistake",
            "sentencePattern": "S + V + O + M",
            "grammarParts": [
              {
                "label": "S",
                "text": "I"
              },
              {
                "label": "V",
                "text": "noticed"
              },
              {
                "label": "O",
                "text": "a mistake"
              },
              {
                "label": "M",
                "text": "in the document"
              }
            ]
          },
          {
            "en": "Did you notice the color difference?",
            "ja": "あなたは色の違いに気づきましたか？",
            "focus": "notice",
            "jaFocus": "気づきましたか",
            "object": "the color difference",
            "sentencePattern": "Do + S + V + O",
            "grammarParts": [
              {
                "label": "M",
                "text": "Did"
              },
              {
                "label": "S",
                "text": "you"
              },
              {
                "label": "V",
                "text": "notice"
              },
              {
                "label": "O",
                "text": "the color difference"
              }
            ],
            "grammarNote": "Did は疑問文を作る助動詞です。"
          },
          {
            "en": "We noticed that the quantity was different.",
            "ja": "私たちは数量が違うことに気づきました。",
            "focus": "noticed",
            "jaFocus": "気づきました",
            "object": "that the quantity was different",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "We"
              },
              {
                "label": "V",
                "text": "noticed"
              },
              {
                "label": "O",
                "text": "that the quantity was different"
              }
            ]
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "notice a problem",
        "ja": "問題に気づく",
        "image": "早い段階で異常や問題を見つける",
        "pattern": "NOTICE + problem",
        "examples": [
          {
            "en": "We noticed a problem before shipment.",
            "ja": "私たちは出荷前に問題に気づきました。",
            "focus": "noticed a problem",
            "jaFocus": "問題に気づきました",
            "object": "a problem"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "prefer",
    "rank": 89,
    "word": "PREFER",
    "ipa": "/prɪˈfɜːr/",
    "kana": "プリファー",
    "syllable": "pre-fer",
    "transitivity": "他動詞",
    "importance": "★★★☆☆ 基本",
    "core": "複数の中からより好む",
    "coreDetail": "PREFERは、AとBを比べてAの方を好む時に使います。prefer A to B / prefer to do の形がよく出ます。",
    "meanings": [
      {
        "id": "main",
        "title": "① 〜をより好む",
        "pattern": "PREFER + 名詞 / PREFER A TO B / PREFER TO DO",
        "transitivity": "他動詞",
        "structure": "S + prefer + O",
        "image": "いくつかの選択肢の中で一方を選びたい気持ち",
        "point": "prefer A than B ではなく prefer A to B が基本です。",
        "examples": [
          {
            "en": "I prefer online meetings to long emails.",
            "ja": "私は長いメールよりオンライン会議の方を好みます。",
            "focus": "prefer",
            "jaFocus": "好みます",
            "object": "online meetings",
            "sentencePattern": "S + V + O + M",
            "grammarParts": [
              {
                "label": "S",
                "text": "I"
              },
              {
                "label": "V",
                "text": "prefer"
              },
              {
                "label": "O",
                "text": "online meetings"
              },
              {
                "label": "M",
                "text": "to long emails"
              }
            ],
            "grammarNote": "to long emails は比較対象を補足する語句です。"
          },
          {
            "en": "Many customers prefer simple explanations.",
            "ja": "多くの顧客は分かりやすい説明を好みます。",
            "focus": "prefer",
            "jaFocus": "好みます",
            "object": "simple explanations",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "Many customers"
              },
              {
                "label": "V",
                "text": "prefer"
              },
              {
                "label": "O",
                "text": "simple explanations"
              }
            ]
          },
          {
            "en": "I prefer to study in the morning.",
            "ja": "私は朝に勉強する方が好きです。",
            "focus": "prefer to study",
            "jaFocus": "好きです",
            "object": "to study",
            "sentencePattern": "S + V + O + M",
            "grammarParts": [
              {
                "label": "S",
                "text": "I"
              },
              {
                "label": "V",
                "text": "prefer"
              },
              {
                "label": "O",
                "text": "to study"
              },
              {
                "label": "M",
                "text": "in the morning"
              }
            ]
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "prefer A to B",
        "ja": "BよりAを好む",
        "image": "比較して一方を選ぶ",
        "pattern": "prefer a to b",
        "examples": [
          {
            "en": "I prefer this design to the old one.",
            "ja": "私は古いものよりこのデザインを好みます。",
            "focus": "prefer this design",
            "jaFocus": "このデザインを好みます",
            "object": "this design"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "recommend",
    "rank": 90,
    "word": "RECOMMEND",
    "ipa": "/ˌrekəˈmend/",
    "kana": "レコメンド",
    "syllable": "rec-om-mend",
    "transitivity": "他動詞",
    "importance": "★★★☆☆ 基本",
    "core": "相手に合う選択肢をすすめる",
    "coreDetail": "RECOMMENDは、商品・方法・案などを相手にすすめる動詞です。営業・提案・日常のおすすめで使いやすい重要語です。",
    "meanings": [
      {
        "id": "main",
        "title": "① おすすめする・推奨する",
        "pattern": "RECOMMEND + 名詞 / RECOMMEND + doing",
        "transitivity": "他動詞",
        "structure": "S + recommend + O",
        "image": "相手にとって良いと思う選択肢を前に出す",
        "point": "recommend to do より recommend doing / recommend that S V の形が自然です。",
        "examples": [
          {
            "en": "We recommend this product for outdoor signs.",
            "ja": "私たちは屋外サインにはこの製品をおすすめします。",
            "focus": "recommend",
            "jaFocus": "おすすめします",
            "object": "this product",
            "sentencePattern": "S + V + O + M",
            "grammarParts": [
              {
                "label": "S",
                "text": "We"
              },
              {
                "label": "V",
                "text": "recommend"
              },
              {
                "label": "O",
                "text": "this product"
              },
              {
                "label": "M",
                "text": "for outdoor signs"
              }
            ]
          },
          {
            "en": "I recommend checking the stock before ordering.",
            "ja": "私は発注前に在庫を確認することをおすすめします。",
            "focus": "recommend checking",
            "jaFocus": "おすすめします",
            "object": "checking the stock",
            "sentencePattern": "S + V + O + M",
            "grammarParts": [
              {
                "label": "S",
                "text": "I"
              },
              {
                "label": "V",
                "text": "recommend"
              },
              {
                "label": "O",
                "text": "checking the stock"
              },
              {
                "label": "M",
                "text": "before ordering"
              }
            ]
          },
          {
            "en": "The manager recommended a simpler plan.",
            "ja": "そのマネージャーはよりシンプルな計画をすすめました。",
            "focus": "recommended",
            "jaFocus": "すすめました",
            "object": "a simpler plan",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "The manager"
              },
              {
                "label": "V",
                "text": "recommended"
              },
              {
                "label": "O",
                "text": "a simpler plan"
              }
            ]
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "recommend a solution",
        "ja": "解決策をすすめる",
        "image": "相手の問題に合う案を出す",
        "pattern": "RECOMMEND + solution",
        "examples": [
          {
            "en": "We recommended a solution for the installation issue.",
            "ja": "私たちは施工上の問題に対する解決策をすすめました。",
            "focus": "recommended a solution",
            "jaFocus": "解決策をすすめました",
            "object": "a solution"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "achieve",
    "rank": 91,
    "word": "ACHIEVE",
    "ipa": "/əˈtʃiːv/",
    "kana": "アチーヴ",
    "syllable": "a-chieve",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "努力して目標や成果に到達する",
    "coreDetail": "ACHIEVEは、仕事でも日常でも使いやすい基本動詞です。まずは「達成する」の感覚で、目的語を後ろに置く形を覚えると使いやすくなります。",
    "meanings": [
      {
        "id": "m1",
        "title": "① 達成する",
        "pattern": "achieve a goal",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "努力して目標や成果に到達する",
        "point": "achieve の後ろに「何を達成するのか」を置きます。仕事では achieve a goal の形でよく使います。",
        "examples": [
          {
            "en": "We achieved our sales target this month.",
            "ja": "私たちは今月、売上目標を達成しました。",
            "focus": "achieved",
            "object": "a goal",
            "jaFocus": "達成する",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "We"
              },
              {
                "label": "V",
                "text": "achieved"
              },
              {
                "label": "O",
                "text": "a goal"
              }
            ]
          },
          {
            "en": "I achieved my fitness goal this year.",
            "ja": "私は今年、運動の目標を達成しました。",
            "focus": "achieve",
            "jaFocus": "達成する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "achieve results",
        "ja": "成果を出す",
        "image": "努力して目標や成果に到達する",
        "pattern": "achieve results",
        "examples": [
          {
            "en": "Our team achieved strong results after improving the process.",
            "ja": "私たちのチームは工程を改善した後、良い成果を出しました。",
            "focus": "achieve results",
            "jaFocus": "成果を出す",
            "object": "results"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "schedule",
    "rank": 92,
    "word": "SCHEDULE",
    "ipa": "/ˈskedʒuːl/",
    "kana": "スケジュール",
    "syllable": "sched-ule",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "予定や日程を決めて入れる",
    "coreDetail": "SCHEDULEは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「予定を組む・日程を決める」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 予定を組む・日程を決める",
        "pattern": "schedule a meeting",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "会議や作業を予定に入れる",
        "point": "schedule は「何を予定するか」を目的語に置きます。仕事では meeting, call, visit, delivery とよく使います。",
        "examples": [
          {
            "en": "We scheduled a meeting for next Monday.",
            "ja": "私たちは来週月曜日に会議を予定しました。",
            "focus": "scheduled a meeting",
            "jaFocus": "予定を組む・日程を決める",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "schedule"
              },
              {
                "label": "O",
                "text": "scheduled a meeting"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "Can we schedule a call for tomorrow?",
            "ja": "明日に電話打合せを設定できますか。",
            "focus": "schedule a call",
            "jaFocus": "電話・オンライン打合せを予定する"
          }
        ],
        "dailyExamples": [
          {
            "en": "Can we schedule a call for tomorrow?",
            "ja": "明日に電話打合せを設定できますか。",
            "focus": "schedule a call",
            "jaFocus": "電話・オンライン打合せを予定する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "schedule a call",
        "ja": "電話・オンライン打合せを予定する",
        "image": "会議や作業を予定に入れる",
        "pattern": "schedule a call",
        "examples": [
          {
            "en": "Can we schedule a call for tomorrow?",
            "ja": "明日に電話打合せを設定できますか。",
            "focus": "schedule a call",
            "jaFocus": "電話・オンライン打合せを予定する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "submit",
    "rank": 93,
    "word": "SUBMIT",
    "ipa": "/səbˈmɪt/",
    "kana": "サブミット",
    "syllable": "sub-mit",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "書類や申請を正式に提出する",
    "coreDetail": "SUBMITは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「提出する・申請する」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 提出する・申請する",
        "pattern": "submit a document",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "必要な書類や情報を相手に正式に渡す",
        "point": "submit は report, application, document, form などを目的語にして使います。",
        "examples": [
          {
            "en": "We submitted the quotation yesterday.",
            "ja": "私たちは昨日、見積書を提出しました。",
            "focus": "submitted the quotation",
            "jaFocus": "提出する・申請する",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "submit"
              },
              {
                "label": "O",
                "text": "submitted the quotation"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "Please submit the report by Friday.",
            "ja": "金曜日までに報告書を提出してください。",
            "focus": "submit a report",
            "jaFocus": "報告書を提出する"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please submit the report by Friday.",
            "ja": "金曜日までに報告書を提出してください。",
            "focus": "submit a report",
            "jaFocus": "報告書を提出する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "submit a report",
        "ja": "報告書を提出する",
        "image": "必要な書類や情報を相手に正式に渡す",
        "pattern": "submit a report",
        "examples": [
          {
            "en": "Please submit the report by Friday.",
            "ja": "金曜日までに報告書を提出してください。",
            "focus": "submit a report",
            "jaFocus": "報告書を提出する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "cancel",
    "rank": 94,
    "word": "CANCEL",
    "ipa": "/ˈkænsəl/",
    "kana": "キャンセル",
    "syllable": "can-cel",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "予定や注文を止める",
    "coreDetail": "CANCELは、仕事でも日常でも使いやすい基本動詞です。まずは「キャンセルする・中止する」の感覚で、目的語を後ろに置く形を覚えると使いやすくなります。",
    "meanings": [
      {
        "id": "m1",
        "title": "① キャンセルする・中止する",
        "pattern": "cancel an order",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "予定や注文を止める",
        "point": "cancel の後ろに「何をキャンセルする・中止するのか」を置きます。仕事では cancel an order の形でよく使います。",
        "examples": [
          {
            "en": "The customer canceled the order yesterday.",
            "ja": "その顧客は昨日、注文をキャンセルしました。",
            "focus": "customer",
            "object": "an order",
            "jaFocus": "キャンセルする",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "The"
              },
              {
                "label": "V",
                "text": "customer"
              },
              {
                "label": "O",
                "text": "an order"
              }
            ]
          },
          {
            "en": "I canceled my plan because it rained.",
            "ja": "雨が降ったので、私は予定をキャンセルしました。",
            "focus": "cancel",
            "jaFocus": "キャンセルする"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "cancel a meeting",
        "ja": "会議を中止する",
        "image": "予定や注文を止める",
        "pattern": "cancel a meeting",
        "examples": [
          {
            "en": "We canceled the meeting because the client was unavailable.",
            "ja": "クライアントの都合が合わなかったため、私たちは会議を中止しました。",
            "focus": "cancel a meeting",
            "jaFocus": "会議を中止する",
            "object": "a meeting"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "connect",
    "rank": 95,
    "word": "CONNECT",
    "ipa": "/kəˈnekt/",
    "kana": "コネクト",
    "syllable": "con-nect",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "人・物・情報をつなげる",
    "coreDetail": "CONNECTは、仕事でも日常でも使いやすい基本動詞です。まずは「つなぐ・接続する」の感覚で、目的語を後ろに置く形を覚えると使いやすくなります。",
    "meanings": [
      {
        "id": "m1",
        "title": "① つなぐ・接続する",
        "pattern": "connect a to b",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "人・物・情報をつなげる",
        "point": "connect の後ろに「何をつなぐ・接続するのか」を置きます。仕事では connect A to B の形でよく使います。",
        "examples": [
          {
            "en": "Please connect this cable to the controller.",
            "ja": "このケーブルをコントローラーにつないでください。",
            "focus": "connect",
            "object": "A to B",
            "jaFocus": "つなぐ",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "you（省略）"
              },
              {
                "label": "V",
                "text": "please"
              },
              {
                "label": "O",
                "text": "A to B"
              }
            ]
          },
          {
            "en": "I connected my phone to the speaker.",
            "ja": "私はスマホをスピーカーに接続しました。",
            "focus": "connect",
            "jaFocus": "つなぐ"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "connect with a client",
        "ja": "顧客と関係を作る",
        "image": "人・物・情報をつなげる",
        "pattern": "connect with a client",
        "examples": [
          {
            "en": "We need to connect with the client before sending the proposal.",
            "ja": "提案書を送る前に、私たちは顧客と関係を作る必要があります。",
            "focus": "connect with a client",
            "jaFocus": "顧客と関係を作る",
            "object": "with a client"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "respond",
    "rank": 96,
    "word": "RESPOND",
    "ipa": "/rɪˈspɑːnd/",
    "kana": "リスポンド",
    "syllable": "re-spond",
    "transitivity": "自動詞",
    "importance": "★★★★☆ 重要",
    "core": "質問・依頼・状況に反応して返す",
    "coreDetail": "RESPONDは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「対応する・返答する」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 対応する・返答する",
        "pattern": "respond to a request",
        "transitivity": "自動詞",
        "structure": "S + V + to + 内容",
        "image": "相手の依頼や状況に対して返す・動く",
        "point": "respond は自動詞なので、依頼や質問を続けるときは respond to ... を使います。to 以下は前置詞句です。",
        "examples": [
          {
            "en": "We responded to the customer request quickly.",
            "ja": "私たちは顧客の依頼にすばやく対応しました。",
            "focus": "responded to the request",
            "jaFocus": "対応する・返答する",
            "sentencePattern": "S + V + to + 内容",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "respond"
              },
              {
                "label": "M",
                "text": "to the customer request"
              }
            ],
            "grammarNote": "この文は前置詞句を補足情報として扱います。前置詞の後ろの名詞だけを目的語Oにしないように注意します。"
          },
          {
            "en": "Please respond to the question by email.",
            "ja": "その質問にはメールで回答してください。",
            "focus": "respond to a question",
            "jaFocus": "質問に答える"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please respond to the question by email.",
            "ja": "その質問にはメールで回答してください。",
            "focus": "respond to a question",
            "jaFocus": "質問に答える"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "respond to a question",
        "ja": "質問に答える",
        "image": "相手の依頼や状況に対して返す・動く",
        "pattern": "respond to a question",
        "examples": [
          {
            "en": "Please respond to the question by email.",
            "ja": "その質問にはメールで回答してください。",
            "focus": "respond to a question",
            "jaFocus": "質問に答える"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "control",
    "rank": 97,
    "word": "CONTROL",
    "ipa": "/kənˈtroʊl/",
    "kana": "コントロール",
    "syllable": "con-trol",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "状況や機器が乱れないように管理する",
    "coreDetail": "CONTROLは、仕事でも日常でも使いやすい基本動詞です。まずは「管理する・制御する」の感覚で、目的語を後ろに置く形を覚えると使いやすくなります。",
    "meanings": [
      {
        "id": "m1",
        "title": "① 管理する・制御する",
        "pattern": "control the schedule",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "状況や機器が乱れないように管理する",
        "point": "control の後ろに「何を管理する・制御するのか」を置きます。仕事では control the schedule の形でよく使います。",
        "examples": [
          {
            "en": "We need to control the schedule carefully.",
            "ja": "私たちはスケジュールを慎重に管理する必要があります。",
            "focus": "need",
            "object": "the schedule",
            "jaFocus": "管理する",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "We"
              },
              {
                "label": "V",
                "text": "need"
              },
              {
                "label": "O",
                "text": "the schedule"
              }
            ]
          },
          {
            "en": "I try to control my spending every month.",
            "ja": "私は毎月、支出を管理するようにしています。",
            "focus": "control",
            "jaFocus": "管理する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "control the brightness",
        "ja": "明るさを制御する",
        "image": "状況や機器が乱れないように管理する",
        "pattern": "control the brightness",
        "examples": [
          {
            "en": "This system can control the brightness of the LED modules.",
            "ja": "このシステムはLEDモジュールの明るさを制御できます。",
            "focus": "control the brightness",
            "jaFocus": "明るさを制御する",
            "object": "the brightness"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "handle",
    "rank": 98,
    "word": "HANDLE",
    "ipa": "/ˈhændl/",
    "kana": "ハンドル",
    "syllable": "han-dle",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "問題・仕事・相手を受け止めて処理する",
    "coreDetail": "HANDLEは、仕事でも日常でも使いやすい基本動詞です。まずは「対応する・扱う」の感覚で、目的語を後ろに置く形を覚えると使いやすくなります。",
    "meanings": [
      {
        "id": "m1",
        "title": "① 対応する・扱う",
        "pattern": "handle a complaint",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "問題・仕事・相手を受け止めて処理する",
        "point": "handle の後ろに「何を対応する・扱うのか」を置きます。仕事では handle a complaint の形でよく使います。",
        "examples": [
          {
            "en": "Our team handled the customer complaint quickly.",
            "ja": "私たちのチームは顧客のクレームにすばやく対応しました。",
            "focus": "team",
            "object": "a complaint",
            "jaFocus": "対応する",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "Our"
              },
              {
                "label": "V",
                "text": "team"
              },
              {
                "label": "O",
                "text": "a complaint"
              }
            ]
          },
          {
            "en": "I can handle this problem by myself.",
            "ja": "私はこの問題に自分で対応できます。",
            "focus": "handle",
            "jaFocus": "対応する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "handle an urgent request",
        "ja": "急ぎの依頼に対応する",
        "image": "問題・仕事・相手を受け止めて処理する",
        "pattern": "handle an urgent request",
        "examples": [
          {
            "en": "We handled an urgent request from the client yesterday.",
            "ja": "私たちは昨日、クライアントからの急ぎの依頼に対応しました。",
            "focus": "handle an urgent request",
            "jaFocus": "急ぎの依頼に対応する",
            "object": "an urgent request"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "organize",
    "rank": 99,
    "word": "ORGANIZE",
    "ipa": "/ˈɔːrɡənaɪz/",
    "kana": "オーガナイズ",
    "syllable": "or-gan-ize",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "情報・物・予定を分かりやすくまとめる",
    "coreDetail": "ORGANIZEは、仕事でも日常でも使いやすい基本動詞です。まずは「整理する・企画する」の感覚で、目的語を後ろに置く形を覚えると使いやすくなります。",
    "meanings": [
      {
        "id": "m1",
        "title": "① 整理する・企画する",
        "pattern": "organize documents",
        "transitivity": "他動詞",
        "structure": "S + V + O（目的語）",
        "image": "情報・物・予定を分かりやすくまとめる",
        "point": "organize の後ろに「何を整理する・企画するのか」を置きます。仕事では organize documents の形でよく使います。",
        "examples": [
          {
            "en": "I organized the documents before the meeting.",
            "ja": "私は会議の前に資料を整理しました。",
            "focus": "organized",
            "object": "documents",
            "jaFocus": "整理する",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "I"
              },
              {
                "label": "V",
                "text": "organized"
              },
              {
                "label": "O",
                "text": "documents"
              }
            ]
          },
          {
            "en": "I organized my photos on my phone.",
            "ja": "私はスマホの写真を整理しました。",
            "focus": "organize",
            "jaFocus": "整理する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "organize an event",
        "ja": "イベントを企画する",
        "image": "情報・物・予定を分かりやすくまとめる",
        "pattern": "organize an event",
        "examples": [
          {
            "en": "Our team organized a small customer event.",
            "ja": "私たちのチームは小規模な顧客イベントを企画しました。",
            "focus": "organize an event",
            "jaFocus": "イベントを企画する",
            "object": "an event"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "inform",
    "rank": 100,
    "word": "INFORM",
    "ipa": "/ɪnˈfɔːrm/",
    "kana": "インフォーム",
    "syllable": "in-form",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "必要な情報を相手に知らせる",
    "coreDetail": "INFORMは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「知らせる・通知する」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 知らせる・通知する",
        "pattern": "inform a client",
        "transitivity": "他動詞",
        "structure": "S + V + O + of/about + 内容",
        "image": "相手が知らない情報を伝えて共有する",
        "point": "inform は「誰に知らせるか」を目的語に置き、内容は of/about で続けることが多いです。",
        "examples": [
          {
            "en": "We informed the client about the schedule change.",
            "ja": "私たちは日程変更についてクライアントに知らせました。",
            "focus": "informed the client",
            "jaFocus": "知らせる・通知する",
            "sentencePattern": "S + V + O + of/about + 内容",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "inform"
              },
              {
                "label": "O",
                "text": "informed the client"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "Please inform the team about the new deadline.",
            "ja": "新しい締切についてチームに知らせてください。",
            "focus": "inform someone about a change",
            "jaFocus": "変更について知らせる"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please inform the team about the new deadline.",
            "ja": "新しい締切についてチームに知らせてください。",
            "focus": "inform someone about a change",
            "jaFocus": "変更について知らせる"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "inform someone about a change",
        "ja": "変更について知らせる",
        "image": "相手が知らない情報を伝えて共有する",
        "pattern": "inform someone about a change",
        "examples": [
          {
            "en": "Please inform the team about the new deadline.",
            "ja": "新しい締切についてチームに知らせてください。",
            "focus": "inform someone about a change",
            "jaFocus": "変更について知らせる"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "adjust",
    "rank": 101,
    "word": "ADJUST",
    "ipa": "/əˈdʒʌst/",
    "kana": "アジャスト",
    "syllable": "ad-just",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "状況に合わせて少し変える",
    "coreDetail": "ADJUSTは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「調整する」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 調整する",
        "pattern": "adjust the schedule",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O",
        "image": "予定・数値・やり方を合うように直す",
        "point": "adjust は schedule, price, plan, settings などを目的語にして使います。",
        "examples": [
          {
            "en": "We adjusted the schedule after the client called.",
            "ja": "クライアントから連絡があった後、私たちは予定を調整しました。",
            "focus": "adjusted the schedule",
            "jaFocus": "調整する",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "adjust"
              },
              {
                "label": "O",
                "text": "adjusted the schedule"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "Can we adjust the price for this order?",
            "ja": "この注文の価格を調整できますか。",
            "focus": "adjust the price",
            "jaFocus": "価格を調整する"
          }
        ],
        "dailyExamples": [
          {
            "en": "Can we adjust the price for this order?",
            "ja": "この注文の価格を調整できますか。",
            "focus": "adjust the price",
            "jaFocus": "価格を調整する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "adjust the price",
        "ja": "価格を調整する",
        "image": "予定・数値・やり方を合うように直す",
        "pattern": "adjust the price",
        "examples": [
          {
            "en": "Can we adjust the price for this order?",
            "ja": "この注文の価格を調整できますか。",
            "focus": "adjust the price",
            "jaFocus": "価格を調整する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "apply",
    "rank": 102,
    "word": "APPLY",
    "ipa": "/əˈplaɪ/",
    "kana": "アプライ",
    "syllable": "ap-ply",
    "transitivity": "自動詞・他動詞",
    "importance": "★★★★☆ 重要",
    "core": "申し込む・適用する",
    "coreDetail": "APPLYは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「申し込む・適用する」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 申し込む・適用する",
        "pattern": "apply for approval",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + for + 申請内容",
        "image": "制度や機会に申し込む、またはルールを当てはめる",
        "point": "apply for は「申し込む」、apply A to B は「AをBに適用する」です。",
        "examples": [
          {
            "en": "We need to apply for approval before ordering.",
            "ja": "私たちは発注前に承認を申請する必要があります。",
            "focus": "apply for approval",
            "jaFocus": "申し込む・適用する",
            "sentencePattern": "S + V + for + 申請内容",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "apply"
              },
              {
                "label": "M",
                "text": "for approval"
              }
            ],
            "grammarNote": "この文は前置詞句を補足情報として扱います。前置詞の後ろの名詞だけを目的語Oにしないように注意します。"
          },
          {
            "en": "Please apply the new rule to this case.",
            "ja": "この件には新しいルールを適用してください。",
            "focus": "apply a rule",
            "jaFocus": "ルールを適用する"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please apply the new rule to this case.",
            "ja": "この件には新しいルールを適用してください。",
            "focus": "apply a rule",
            "jaFocus": "ルールを適用する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "apply a rule",
        "ja": "ルールを適用する",
        "image": "制度や機会に申し込む、またはルールを当てはめる",
        "pattern": "apply a rule",
        "examples": [
          {
            "en": "Please apply the new rule to this case.",
            "ja": "この件には新しいルールを適用してください。",
            "focus": "apply a rule",
            "jaFocus": "ルールを適用する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "approve",
    "rank": 103,
    "word": "APPROVE",
    "ipa": "/əˈpruːv/",
    "kana": "アプルーヴ",
    "syllable": "ap-prove",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "内容を確認して正式に認める",
    "coreDetail": "APPROVEは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「承認する」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 承認する",
        "pattern": "approve a request",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O",
        "image": "申請・見積・依頼にOKを出す",
        "point": "approve は request, plan, quotation, budget などを目的語にして使います。",
        "examples": [
          {
            "en": "The manager approved the request this morning.",
            "ja": "マネージャーは今朝その依頼を承認しました。",
            "focus": "approved the request",
            "jaFocus": "承認する",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "approve"
              },
              {
                "label": "O",
                "text": "approved the request"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "The client approved the quotation yesterday.",
            "ja": "クライアントは昨日、その見積を承認しました。",
            "focus": "approve a quotation",
            "jaFocus": "見積を承認する"
          }
        ],
        "dailyExamples": [
          {
            "en": "The client approved the quotation yesterday.",
            "ja": "クライアントは昨日、その見積を承認しました。",
            "focus": "approve a quotation",
            "jaFocus": "見積を承認する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "approve a quotation",
        "ja": "見積を承認する",
        "image": "申請・見積・依頼にOKを出す",
        "pattern": "approve a quotation",
        "examples": [
          {
            "en": "The client approved the quotation yesterday.",
            "ja": "クライアントは昨日、その見積を承認しました。",
            "focus": "approve a quotation",
            "jaFocus": "見積を承認する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "borrow",
    "rank": 104,
    "word": "BORROW",
    "ipa": "/ˈbɑːroʊ/",
    "kana": "ボロー",
    "syllable": "bor-row",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "一時的に相手から借りて使う",
    "coreDetail": "BORROWは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「借りる」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 借りる",
        "pattern": "borrow a charger",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "相手の物やお金を一時的に借りる",
        "point": "borrow は「借りる」。相手を言うときは borrow A from B の形を使います。大人の日常・仕事でもよく使います。",
        "examples": [
          {
            "en": "Can I borrow your charger during the meeting?",
            "ja": "会議中にあなたの充電器を借りてもいいですか。",
            "focus": "borrow your charger",
            "jaFocus": "借りる",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "borrow"
              },
              {
                "label": "O",
                "text": "borrow your charger"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "I borrowed a projector from another team.",
            "ja": "私は別のチームからプロジェクターを借りました。",
            "focus": "borrow A from B",
            "jaFocus": "BからAを借りる"
          }
        ],
        "dailyExamples": [
          {
            "en": "I borrowed a projector from another team.",
            "ja": "私は別のチームからプロジェクターを借りました。",
            "focus": "borrow A from B",
            "jaFocus": "BからAを借りる"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "borrow A from B",
        "ja": "BからAを借りる",
        "image": "相手の物やお金を一時的に借りる",
        "pattern": "borrow A from B",
        "examples": [
          {
            "en": "I borrowed a projector from another team.",
            "ja": "私は別のチームからプロジェクターを借りました。",
            "focus": "borrow A from B",
            "jaFocus": "BからAを借りる"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "verify",
    "rank": 105,
    "word": "VERIFY",
    "ipa": "/ˈverɪfaɪ/",
    "kana": "ヴェリファイ",
    "syllable": "ver-i-fy",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "正しいかどうかを確認する",
    "coreDetail": "VERIFYは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「確認する・検証する」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 確認する・検証する",
        "pattern": "verify the details",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "情報や数字が正しいか裏取りする",
        "point": "verify は check より少し正式で、「正確性を確認する」ニュアンスです。",
        "examples": [
          {
            "en": "We verified the order details before shipping.",
            "ja": "私たちは出荷前に注文内容を確認しました。",
            "focus": "verified the details",
            "jaFocus": "確認する・検証する",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "verify"
              },
              {
                "label": "O",
                "text": "verified the details"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "Please verify the information before sending it.",
            "ja": "送信前にその情報を確認してください。",
            "focus": "verify information",
            "jaFocus": "情報を確認する"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please verify the information before sending it.",
            "ja": "送信前にその情報を確認してください。",
            "focus": "verify information",
            "jaFocus": "情報を確認する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "verify information",
        "ja": "情報を確認する",
        "image": "情報や数字が正しいか裏取りする",
        "pattern": "verify information",
        "examples": [
          {
            "en": "Please verify the information before sending it.",
            "ja": "送信前にその情報を確認してください。",
            "focus": "verify information",
            "jaFocus": "情報を確認する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "gather",
    "rank": 106,
    "word": "GATHER",
    "ipa": "/ˈɡæðər/",
    "kana": "ギャザー",
    "syllable": "gath-er",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "必要なものや情報を集める",
    "coreDetail": "GATHERは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「集める」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 集める",
        "pattern": "gather information",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O",
        "image": "バラバラの情報や資料を一か所に集める",
        "point": "gather は information, feedback, data, documents と相性が良い仕事向け動詞です。",
        "examples": [
          {
            "en": "We gathered feedback from the sales team.",
            "ja": "私たちは営業チームから意見を集めました。",
            "focus": "gathered feedback",
            "jaFocus": "集める",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "gather"
              },
              {
                "label": "O",
                "text": "gathered feedback"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "We need to gather data before making a decision.",
            "ja": "決定する前にデータを集める必要があります。",
            "focus": "gather data",
            "jaFocus": "データを集める"
          }
        ],
        "dailyExamples": [
          {
            "en": "We need to gather data before making a decision.",
            "ja": "決定する前にデータを集める必要があります。",
            "focus": "gather data",
            "jaFocus": "データを集める"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "gather data",
        "ja": "データを集める",
        "image": "バラバラの情報や資料を一か所に集める",
        "pattern": "gather data",
        "examples": [
          {
            "en": "We need to gather data before making a decision.",
            "ja": "決定する前にデータを集める必要があります。",
            "focus": "gather data",
            "jaFocus": "データを集める"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "communicate",
    "rank": 107,
    "word": "COMMUNICATE",
    "ipa": "/kəˈmjuːnɪkeɪt/",
    "kana": "コミュニケイト",
    "syllable": "com-mu-ni-cate",
    "transitivity": "自動詞・他動詞",
    "importance": "★★★★☆ 重要",
    "core": "考えや情報を相手に伝えて共有する",
    "coreDetail": "COMMUNICATEは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「伝える・連絡を取る」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 伝える・連絡を取る",
        "pattern": "communicate with clients",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + with + 相手",
        "image": "相手と情報や考えをやり取りする",
        "point": "communicate with ... は「〜と連絡を取る・意思疎通する」。with clients は前置詞句で、clientsだけを目的語Oにしません。",
        "examples": [
          {
            "en": "We communicate with clients mainly by email.",
            "ja": "私たちは主にメールでクライアントと連絡を取っています。",
            "focus": "communicate with clients",
            "jaFocus": "伝える・連絡を取る",
            "sentencePattern": "S + V + with + 相手",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "communicate"
              },
              {
                "label": "M",
                "text": "with clients"
              }
            ],
            "grammarNote": "この文は前置詞句を補足情報として扱います。前置詞の後ろの名詞だけを目的語Oにしないように注意します。"
          },
          {
            "en": "Please communicate the deadline clearly to the team.",
            "ja": "締切をチームに明確に伝えてください。",
            "focus": "communicate clearly",
            "jaFocus": "明確に伝える"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please communicate the deadline clearly to the team.",
            "ja": "締切をチームに明確に伝えてください。",
            "focus": "communicate clearly",
            "jaFocus": "明確に伝える"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "communicate clearly",
        "ja": "明確に伝える",
        "image": "相手と情報や考えをやり取りする",
        "pattern": "communicate clearly",
        "examples": [
          {
            "en": "Please communicate the deadline clearly to the team.",
            "ja": "締切をチームに明確に伝えてください。",
            "focus": "communicate clearly",
            "jaFocus": "明確に伝える"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "describe",
    "rank": 108,
    "word": "DESCRIBE",
    "ipa": "/dɪˈskraɪb/",
    "kana": "ディスクライブ",
    "syllable": "de-scribe",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "特徴や状況を言葉で説明する",
    "coreDetail": "DESCRIBEは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「説明する・描写する」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 説明する・描写する",
        "pattern": "describe the situation",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "状況や特徴を言葉で相手に伝える",
        "point": "describe は situation, problem, product, process と相性が良いです。",
        "examples": [
          {
            "en": "Please describe the issue in detail.",
            "ja": "その問題を詳しく説明してください。",
            "focus": "describe the issue",
            "jaFocus": "説明する・描写する",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "describe"
              },
              {
                "label": "O",
                "text": "describe the issue"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "Can you describe the product features?",
            "ja": "製品の特徴を説明できますか。",
            "focus": "describe a product",
            "jaFocus": "製品を説明する"
          }
        ],
        "dailyExamples": [
          {
            "en": "Can you describe the product features?",
            "ja": "製品の特徴を説明できますか。",
            "focus": "describe a product",
            "jaFocus": "製品を説明する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "describe a product",
        "ja": "製品を説明する",
        "image": "状況や特徴を言葉で相手に伝える",
        "pattern": "describe a product",
        "examples": [
          {
            "en": "Can you describe the product features?",
            "ja": "製品の特徴を説明できますか。",
            "focus": "describe a product",
            "jaFocus": "製品を説明する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "earn",
    "rank": 109,
    "word": "EARN",
    "ipa": "/ɜːrn/",
    "kana": "アーン",
    "syllable": "earn",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "働きや結果によって得る",
    "coreDetail": "EARNは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「稼ぐ・得る」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 稼ぐ・得る",
        "pattern": "earn trust",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "努力や仕事の結果としてお金・信頼・評価を得る",
        "point": "earn は money だけでなく trust, respect, experience とも使えます。",
        "examples": [
          {
            "en": "We earned the client's trust through quick support.",
            "ja": "私たちは迅速なサポートを通じて顧客の信頼を得ました。",
            "focus": "earned trust",
            "jaFocus": "稼ぐ・得る",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "earn"
              },
              {
                "label": "O",
                "text": "earned trust"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "He earns money by doing freelance work.",
            "ja": "彼はフリーランスの仕事でお金を稼いでいます。",
            "focus": "earn money",
            "jaFocus": "お金を稼ぐ"
          }
        ],
        "dailyExamples": [
          {
            "en": "He earns money by doing freelance work.",
            "ja": "彼はフリーランスの仕事でお金を稼いでいます。",
            "focus": "earn money",
            "jaFocus": "お金を稼ぐ"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "earn money",
        "ja": "お金を稼ぐ",
        "image": "努力や仕事の結果としてお金・信頼・評価を得る",
        "pattern": "earn money",
        "examples": [
          {
            "en": "He earns money by doing freelance work.",
            "ja": "彼はフリーランスの仕事でお金を稼いでいます。",
            "focus": "earn money",
            "jaFocus": "お金を稼ぐ"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "estimate",
    "rank": 110,
    "word": "ESTIMATE",
    "ipa": "/ˈestɪmeɪt/",
    "kana": "エスティメイト",
    "syllable": "es-ti-mate",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "おおよその量・費用・時間を見積もる",
    "coreDetail": "ESTIMATEは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「見積もる」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 見積もる",
        "pattern": "estimate the cost",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "正確な数字が出る前に大まかに計算する",
        "point": "estimate は cost, time, amount, size とよく使います。",
        "examples": [
          {
            "en": "We estimated the cost before sending the quotation.",
            "ja": "私たちは見積書を送る前に費用を概算しました。",
            "focus": "estimated the cost",
            "jaFocus": "見積もる",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "estimate"
              },
              {
                "label": "O",
                "text": "estimated the cost"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "Can you estimate the time required for this task?",
            "ja": "この作業に必要な時間を見積もれますか。",
            "focus": "estimate the time",
            "jaFocus": "時間を見積もる"
          }
        ],
        "dailyExamples": [
          {
            "en": "Can you estimate the time required for this task?",
            "ja": "この作業に必要な時間を見積もれますか。",
            "focus": "estimate the time",
            "jaFocus": "時間を見積もる"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "estimate the time",
        "ja": "時間を見積もる",
        "image": "正確な数字が出る前に大まかに計算する",
        "pattern": "estimate the time",
        "examples": [
          {
            "en": "Can you estimate the time required for this task?",
            "ja": "この作業に必要な時間を見積もれますか。",
            "focus": "estimate the time",
            "jaFocus": "時間を見積もる"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "focus",
    "rank": 111,
    "word": "FOCUS",
    "ipa": "/ˈfoʊkəs/",
    "kana": "フォーカス",
    "syllable": "fo-cus",
    "transitivity": "自動詞・他動詞",
    "importance": "★★★★☆ 重要",
    "core": "注意や力を一つの対象に向ける",
    "coreDetail": "FOCUSは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「集中する・注力する」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 集中する・注力する",
        "pattern": "focus on quality",
        "transitivity": "自動詞・他動詞",
        "structure": "S + V + on + 対象",
        "image": "注意を一つの対象へ向ける",
        "point": "focus on ... は「〜に集中する」。on quality は前置詞句で、qualityだけを目的語Oにしません。",
        "examples": [
          {
            "en": "We should focus on quality first.",
            "ja": "私たちはまず品質に注力すべきです。",
            "focus": "focus on quality",
            "jaFocus": "集中する・注力する",
            "sentencePattern": "S + V + on + 対象",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "focus"
              },
              {
                "label": "M",
                "text": "on quality"
              }
            ],
            "grammarNote": "この文は前置詞句を補足情報として扱います。前置詞の後ろの名詞だけを目的語Oにしないように注意します。"
          },
          {
            "en": "I need to focus on this task today.",
            "ja": "私は今日この作業に集中する必要があります。",
            "focus": "focus on a task",
            "jaFocus": "作業に集中する"
          }
        ],
        "dailyExamples": [
          {
            "en": "I need to focus on this task today.",
            "ja": "私は今日この作業に集中する必要があります。",
            "focus": "focus on a task",
            "jaFocus": "作業に集中する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "focus on a task",
        "ja": "作業に集中する",
        "image": "注意を一つの対象へ向ける",
        "pattern": "focus on a task",
        "examples": [
          {
            "en": "I need to focus on this task today.",
            "ja": "私は今日この作業に集中する必要があります。",
            "focus": "focus on a task",
            "jaFocus": "作業に集中する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "identify",
    "rank": 112,
    "word": "IDENTIFY",
    "ipa": "/aɪˈdentɪfaɪ/",
    "kana": "アイデンティファイ",
    "syllable": "i-den-ti-fy",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "何かを見分けて特定する",
    "coreDetail": "IDENTIFYは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「特定する・見つけ出す」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 特定する・見つけ出す",
        "pattern": "identify the problem",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "問題や原因を見つけてはっきりさせる",
        "point": "identify は problem, cause, risk, need とよく使う仕事向け動詞です。",
        "examples": [
          {
            "en": "We identified the cause of the delay.",
            "ja": "私たちは遅延の原因を特定しました。",
            "focus": "identified the cause",
            "jaFocus": "特定する・見つけ出す",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "identify"
              },
              {
                "label": "O",
                "text": "identified the cause"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "We need to identify the main risk first.",
            "ja": "まず主なリスクを特定する必要があります。",
            "focus": "identify a risk",
            "jaFocus": "リスクを特定する"
          }
        ],
        "dailyExamples": [
          {
            "en": "We need to identify the main risk first.",
            "ja": "まず主なリスクを特定する必要があります。",
            "focus": "identify a risk",
            "jaFocus": "リスクを特定する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "identify a risk",
        "ja": "リスクを特定する",
        "image": "問題や原因を見つけてはっきりさせる",
        "pattern": "identify a risk",
        "examples": [
          {
            "en": "We need to identify the main risk first.",
            "ja": "まず主なリスクを特定する必要があります。",
            "focus": "identify a risk",
            "jaFocus": "リスクを特定する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "propose",
    "rank": 113,
    "word": "PROPOSE",
    "ipa": "/prəˈpoʊz/",
    "kana": "プロポーズ",
    "syllable": "pro-pose",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "案や方法を相手に提案する",
    "coreDetail": "PROPOSEは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「提案する」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 提案する",
        "pattern": "propose a solution",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "相手に新しい案や解決策を出す",
        "point": "propose は idea, plan, solution, change などを目的語に置きます。仕事では提案・改善案でよく使います。",
        "examples": [
          {
            "en": "We proposed a new solution to the client.",
            "ja": "私たちはクライアントに新しい解決策を提案しました。",
            "focus": "proposed a solution",
            "jaFocus": "提案する",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "propose"
              },
              {
                "label": "O",
                "text": "proposed a solution"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "She proposed a better plan for the project.",
            "ja": "彼女はそのプロジェクトにより良い計画を提案しました。",
            "focus": "propose a plan",
            "jaFocus": "計画を提案する"
          }
        ],
        "dailyExamples": [
          {
            "en": "She proposed a better plan for the project.",
            "ja": "彼女はそのプロジェクトにより良い計画を提案しました。",
            "focus": "propose a plan",
            "jaFocus": "計画を提案する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "propose a plan",
        "ja": "計画を提案する",
        "image": "相手に新しい案や解決策を出す",
        "pattern": "propose a plan",
        "examples": [
          {
            "en": "She proposed a better plan for the project.",
            "ja": "彼女はそのプロジェクトにより良い計画を提案しました。",
            "focus": "propose a plan",
            "jaFocus": "計画を提案する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "join",
    "rank": 114,
    "word": "JOIN",
    "ipa": "/dʒɔɪn/",
    "kana": "ジョイン",
    "syllable": "join",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "人や活動の中に加わる",
    "coreDetail": "JOINは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「参加する・加わる」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 参加する・加わる",
        "pattern": "join a meeting",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O",
        "image": "会議・チーム・活動の中に入る",
        "point": "join は meeting, team, project, event などを目的語にして使えます。",
        "examples": [
          {
            "en": "I will join the meeting at three.",
            "ja": "私は3時にその会議に参加します。",
            "focus": "join the meeting",
            "jaFocus": "参加する・加わる",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "join"
              },
              {
                "label": "O",
                "text": "join the meeting"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "She joined the project last month.",
            "ja": "彼女は先月そのプロジェクトに参加しました。",
            "focus": "join a project",
            "jaFocus": "プロジェクトに参加する"
          }
        ],
        "dailyExamples": [
          {
            "en": "She joined the project last month.",
            "ja": "彼女は先月そのプロジェクトに参加しました。",
            "focus": "join a project",
            "jaFocus": "プロジェクトに参加する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "join a project",
        "ja": "プロジェクトに参加する",
        "image": "会議・チーム・活動の中に入る",
        "pattern": "join a project",
        "examples": [
          {
            "en": "She joined the project last month.",
            "ja": "彼女は先月そのプロジェクトに参加しました。",
            "focus": "join a project",
            "jaFocus": "プロジェクトに参加する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "lead",
    "rank": 115,
    "word": "LEAD",
    "ipa": "/liːd/",
    "kana": "リード",
    "syllable": "lead",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "人や仕事を前に進める",
    "coreDetail": "LEADは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「導く・担当して進める」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 導く・担当して進める",
        "pattern": "lead a project",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O",
        "image": "チームや案件を先頭に立って進める",
        "point": "lead は team, project, meeting などを目的語にして使います。",
        "examples": [
          {
            "en": "She will lead the new project.",
            "ja": "彼女が新しいプロジェクトを主導します。",
            "focus": "lead the project",
            "jaFocus": "導く・担当して進める",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "lead"
              },
              {
                "label": "O",
                "text": "lead the project"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "Can you lead the meeting tomorrow?",
            "ja": "明日の会議を進行してもらえますか。",
            "focus": "lead a meeting",
            "jaFocus": "会議を進行する"
          }
        ],
        "dailyExamples": [
          {
            "en": "Can you lead the meeting tomorrow?",
            "ja": "明日の会議を進行してもらえますか。",
            "focus": "lead a meeting",
            "jaFocus": "会議を進行する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "lead a meeting",
        "ja": "会議を進行する",
        "image": "チームや案件を先頭に立って進める",
        "pattern": "lead a meeting",
        "examples": [
          {
            "en": "Can you lead the meeting tomorrow?",
            "ja": "明日の会議を進行してもらえますか。",
            "focus": "lead a meeting",
            "jaFocus": "会議を進行する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "maintain",
    "rank": 116,
    "word": "MAINTAIN",
    "ipa": "/meɪnˈteɪn/",
    "kana": "メインテイン",
    "syllable": "main-tain",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "良い状態を保つ",
    "coreDetail": "MAINTAINは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「維持する・保つ」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 維持する・保つ",
        "pattern": "maintain quality",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "品質・関係・状態を崩さず保つ",
        "point": "maintain は quality, relationship, level, system とよく使います。",
        "examples": [
          {
            "en": "We need to maintain product quality.",
            "ja": "私たちは製品品質を維持する必要があります。",
            "focus": "maintain quality",
            "jaFocus": "維持する・保つ",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "maintain"
              },
              {
                "label": "O",
                "text": "maintain quality"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "It is important to maintain a good relationship with clients.",
            "ja": "顧客と良い関係を維持することは重要です。",
            "focus": "maintain a relationship",
            "jaFocus": "関係を維持する"
          }
        ],
        "dailyExamples": [
          {
            "en": "It is important to maintain a good relationship with clients.",
            "ja": "顧客と良い関係を維持することは重要です。",
            "focus": "maintain a relationship",
            "jaFocus": "関係を維持する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "maintain a relationship",
        "ja": "関係を維持する",
        "image": "品質・関係・状態を崩さず保つ",
        "pattern": "maintain a relationship",
        "examples": [
          {
            "en": "It is important to maintain a good relationship with clients.",
            "ja": "顧客と良い関係を維持することは重要です。",
            "focus": "maintain a relationship",
            "jaFocus": "関係を維持する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "mention",
    "rank": 117,
    "word": "MENTION",
    "ipa": "/ˈmenʃən/",
    "kana": "メンション",
    "syllable": "men-tion",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "話や文章の中で少し触れる",
    "coreDetail": "MENTIONは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「言及する・触れる」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 言及する・触れる",
        "pattern": "mention the issue",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "必要な内容を会話やメールの中で取り上げる",
        "point": "mention は issue, detail, name, point と相性が良いです。",
        "examples": [
          {
            "en": "Please mention the delivery date in your email.",
            "ja": "メールの中で納期に触れてください。",
            "focus": "mention the delivery date",
            "jaFocus": "言及する・触れる",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "mention"
              },
              {
                "label": "O",
                "text": "mention the delivery date"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "He mentioned an important point during the meeting.",
            "ja": "彼は会議中に重要な点に触れました。",
            "focus": "mention a point",
            "jaFocus": "ポイントに触れる"
          }
        ],
        "dailyExamples": [
          {
            "en": "He mentioned an important point during the meeting.",
            "ja": "彼は会議中に重要な点に触れました。",
            "focus": "mention a point",
            "jaFocus": "ポイントに触れる"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "mention a point",
        "ja": "ポイントに触れる",
        "image": "必要な内容を会話やメールの中で取り上げる",
        "pattern": "mention a point",
        "examples": [
          {
            "en": "He mentioned an important point during the meeting.",
            "ja": "彼は会議中に重要な点に触れました。",
            "focus": "mention a point",
            "jaFocus": "ポイントに触れる"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "protect",
    "rank": 118,
    "word": "PROTECT",
    "ipa": "/prəˈtekt/",
    "kana": "プロテクト",
    "syllable": "pro-tect",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "危険や損失から守る",
    "coreDetail": "PROTECTは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「守る・保護する」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 守る・保護する",
        "pattern": "protect data",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "情報・人・品質をリスクから守る",
        "point": "protect は data, privacy, product, people と使えます。仕事でも情報管理でよく出ます。",
        "examples": [
          {
            "en": "We must protect customer data carefully.",
            "ja": "私たちは顧客データを慎重に守らなければなりません。",
            "focus": "protect data",
            "jaFocus": "守る・保護する",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "protect"
              },
              {
                "label": "O",
                "text": "protect data"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "This rule protects user privacy.",
            "ja": "このルールはユーザーのプライバシーを守ります。",
            "focus": "protect privacy",
            "jaFocus": "プライバシーを守る"
          }
        ],
        "dailyExamples": [
          {
            "en": "This rule protects user privacy.",
            "ja": "このルールはユーザーのプライバシーを守ります。",
            "focus": "protect privacy",
            "jaFocus": "プライバシーを守る"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "protect privacy",
        "ja": "プライバシーを守る",
        "image": "情報・人・品質をリスクから守る",
        "pattern": "protect privacy",
        "examples": [
          {
            "en": "This rule protects user privacy.",
            "ja": "このルールはユーザーのプライバシーを守ります。",
            "focus": "protect privacy",
            "jaFocus": "プライバシーを守る"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "replace",
    "rank": 119,
    "word": "REPLACE",
    "ipa": "/rɪˈpleɪs/",
    "kana": "リプレイス",
    "syllable": "re-place",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 重要",
    "core": "古いものを別のものに替える",
    "coreDetail": "REPLACEは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「交換する・置き換える」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 交換する・置き換える",
        "pattern": "replace the old part",
        "transitivity": "他動詞",
        "structure": "S + V + O",
        "image": "古いものや合わないものを新しいものに替える",
        "point": "replace A with B で「AをBに置き換える」です。",
        "examples": [
          {
            "en": "We replaced the old part with a new one.",
            "ja": "私たちは古い部品を新しいものに交換しました。",
            "focus": "replaced the old part",
            "jaFocus": "交換する・置き換える",
            "sentencePattern": "S + V + O",
            "grammarParts": [
              {
                "label": "S",
                "text": "主語"
              },
              {
                "label": "V",
                "text": "replace"
              },
              {
                "label": "O",
                "text": "replaced the old part"
              }
            ],
            "grammarNote": "この文では、動詞の後ろに「何を・誰を」にあたる目的語を置く形として確認します。"
          },
          {
            "en": "We replaced the old system with a new one.",
            "ja": "私たちは古いシステムを新しいものに置き換えました。",
            "focus": "replace A with B",
            "jaFocus": "AをBに置き換える"
          }
        ],
        "dailyExamples": [
          {
            "en": "We replaced the old system with a new one.",
            "ja": "私たちは古いシステムを新しいものに置き換えました。",
            "focus": "replace A with B",
            "jaFocus": "AをBに置き換える"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "replace A with B",
        "ja": "AをBに置き換える",
        "image": "古いものや合わないものを新しいものに替える",
        "pattern": "replace A with B",
        "examples": [
          {
            "en": "We replaced the old system with a new one.",
            "ja": "私たちは古いシステムを新しいものに置き換えました。",
            "focus": "replace A with B",
            "jaFocus": "AをBに置き換える"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "train",
    "rank": 120,
    "word": "TRAIN",
    "ipa": "/treɪn/",
    "kana": "トレイン",
    "syllable": "train",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "練習や指導でできるようにする",
    "coreDetail": "TRAINは、大人の日常・仕事の日本語文から逆算して選んだ実用動詞です。まずは「研修する・訓練する」の感覚と、よく使う語のまとまりを覚えると会話・メールで使いやすくなります。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 研修する・訓練する",
        "pattern": "train new staff",
        "transitivity": "他動詞・自動詞",
        "structure": "S + V + O",
        "image": "人に教えてできるようにする、または自分が練習する",
        "point": "train は「人を研修する」と「自分が訓練する」の両方で使います。仕事では train new staff が実用的です。",
        "examples": [
          {
            "en": "We trained new staff on the product basics.",
            "ja": "私たちは新しいスタッフに製品の基本を研修しました。",
            "focus": "trained new staff",
            "jaFocus": "研修する・訓練する",
            "sentencePattern": "S + V + O + M",
            "grammarParts": [
              {
                "label": "S",
                "text": "We"
              },
              {
                "label": "V",
                "text": "trained"
              },
              {
                "label": "O",
                "text": "new staff"
              },
              {
                "label": "M",
                "text": "on the product basics"
              }
            ],
            "grammarNote": "train は他動詞として「人を研修する」に使えます。on the product basics は研修内容を示す補足です。",
            "object": "new staff"
          },
          {
            "en": "The manager trained the team carefully.",
            "ja": "そのマネージャーはチームを丁寧に育成しました。",
            "focus": "train a team",
            "jaFocus": "チームを育成する"
          }
        ],
        "dailyExamples": [
          {
            "en": "The manager trained the team carefully.",
            "ja": "そのマネージャーはチームを丁寧に育成しました。",
            "focus": "train a team",
            "jaFocus": "チームを育成する"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "train a team",
        "ja": "チームを育成する",
        "image": "人に教えてできるようにする、または自分が練習する",
        "pattern": "train a team",
        "examples": [
          {
            "en": "The manager trained the team carefully.",
            "ja": "そのマネージャーはチームを丁寧に育成しました。",
            "focus": "train a team",
            "jaFocus": "チームを育成する"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "negotiate",
    "rank": 121,
    "word": "NEGOTIATE",
    "ipa": "/nɪˈɡoʊʃieɪt/",
    "kana": "ネゴシエイト",
    "syllable": "ne-go-ti-ate",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 仕事で重要",
    "core": "条件や意見をすり合わせて合意に近づける",
    "coreDetail": "NEGOTIATEは、価格・条件・納期・契約などを相手と話し合い、合意できる形に近づける動詞です。仕事ではnegotiate the price / negotiate with a clientのように使います。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 交渉する・協議する",
        "pattern": "negotiate with + 相手 / negotiate + 条件",
        "transitivity": "他動詞・自動詞",
        "structure": "構造ラベルは非表示。with + 相手は補足として扱います。",
        "image": "相手と条件をすり合わせる",
        "point": "negotiate with a client は「顧客と交渉する」。negotiate the price は「価格を交渉する」。withの後ろの相手をそのまま目的語扱いしないように注意します。",
        "examples": [
          {
            "en": "We negotiated the price with the client yesterday.",
            "ja": "私たちは昨日、顧客と価格を交渉しました。",
            "focus": "negotiated the price",
            "object": "the price",
            "jaFocus": "価格を交渉しました"
          },
          {
            "en": "I need to negotiate the delivery schedule with the supplier.",
            "ja": "私は仕入先と納品スケジュールを交渉する必要があります。",
            "focus": "negotiate the delivery schedule",
            "object": "the delivery schedule",
            "jaFocus": "納品スケジュールを交渉する"
          },
          {
            "en": "Can we negotiate the payment terms before we sign the contract?",
            "ja": "契約書に署名する前に、支払い条件を交渉できますか？",
            "focus": "negotiate the payment terms",
            "object": "the payment terms",
            "jaFocus": "支払い条件を交渉"
          }
        ],
        "dailyExamples": [
          {
            "en": "I negotiated the rent before I moved in.",
            "ja": "私は入居前に家賃を交渉しました。",
            "focus": "negotiated the rent",
            "object": "the rent",
            "jaFocus": "家賃を交渉しました"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "negotiate the price",
        "ja": "価格を交渉する",
        "image": "価格について相手と条件をすり合わせる",
        "pattern": "negotiate the price",
        "examples": [
          {
            "en": "We negotiated the price with the client yesterday.",
            "ja": "私たちは昨日、顧客と価格を交渉しました。",
            "focus": "negotiate the price",
            "jaFocus": "価格を交渉する"
          }
        ]
      },
      {
        "phrase": "negotiate with a client",
        "ja": "顧客と交渉する",
        "image": "顧客と条件を話し合う",
        "pattern": "negotiate with + 相手",
        "examples": [
          {
            "en": "We negotiated with the client about the project scope.",
            "ja": "私たちはプロジェクト範囲について顧客と交渉しました。",
            "focus": "negotiated with the client",
            "jaFocus": "顧客と交渉しました"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "remind",
    "rank": 122,
    "word": "REMIND",
    "ipa": "/rɪˈmaɪnd/",
    "kana": "リマインド",
    "syllable": "re-mind",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 仕事で重要",
    "core": "忘れそうなことを相手の意識に戻す",
    "coreDetail": "REMINDは、予定・締切・依頼内容などを思い出させる動詞です。仕事ではremind someone about ... や remind someone to do ... が非常に実用的です。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 思い出させる・リマインドする",
        "pattern": "remind + 人 + about + 内容 / remind + 人 + to do",
        "transitivity": "他動詞",
        "structure": "構造ラベルは非表示。人と内容をセットで見る形です。",
        "image": "相手に必要な予定や行動を思い出させる",
        "point": "remind me about the meeting は「会議について私に思い出させる」。remind him to reply は「彼に返信するよう思い出させる」。",
        "examples": [
          {
            "en": "Please remind me about the meeting tomorrow morning.",
            "ja": "明日の朝、会議について私にリマインドしてください。",
            "focus": "remind me about the meeting",
            "object": "me",
            "jaFocus": "リマインドしてください"
          },
          {
            "en": "I reminded the client to send the signed document.",
            "ja": "私は顧客に署名済み書類を送るようリマインドしました。",
            "focus": "reminded the client to send",
            "object": "the client",
            "jaFocus": "リマインドしました"
          },
          {
            "en": "Could you remind the team about the deadline?",
            "ja": "チームに締切についてリマインドしてもらえますか？",
            "focus": "remind the team about the deadline",
            "object": "the team",
            "jaFocus": "リマインドしてもらえますか"
          }
        ],
        "dailyExamples": [
          {
            "en": "Please remind me to buy milk after work.",
            "ja": "仕事の後に牛乳を買うよう私にリマインドしてください。",
            "focus": "remind me to buy",
            "object": "me",
            "jaFocus": "リマインドしてください"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "remind someone about something",
        "ja": "人に何かをリマインドする",
        "image": "相手に予定や内容を思い出させる",
        "pattern": "remind + 人 + about + 内容",
        "examples": [
          {
            "en": "Could you remind the team about the deadline?",
            "ja": "チームに締切についてリマインドしてもらえますか？",
            "focus": "remind the team about the deadline",
            "jaFocus": "締切についてリマインド"
          }
        ]
      },
      {
        "phrase": "remind someone to do",
        "ja": "人に〜するよう思い出させる",
        "image": "相手に必要な行動を思い出させる",
        "pattern": "remind + 人 + to do",
        "examples": [
          {
            "en": "I reminded the client to send the signed document.",
            "ja": "私は顧客に署名済み書類を送るようリマインドしました。",
            "focus": "reminded the client to send",
            "jaFocus": "送るようリマインド"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "require",
    "rank": 123,
    "word": "REQUIRE",
    "ipa": "/rɪˈkwaɪər/",
    "kana": "リクワイア",
    "syllable": "re-quire",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 仕事で重要",
    "core": "条件として必要とする",
    "coreDetail": "REQUIREは、ルール・手続き・案件などが何かを必要とする時に使う動詞です。needより少し硬く、仕事の文書や説明でよく使います。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 必要とする・求める",
        "pattern": "require + 名詞 / require + 人 + to do",
        "transitivity": "他動詞",
        "structure": "構造ラベルは非表示。必要なもの・必要な行動を後ろに置きます。",
        "image": "条件として必要なものがある",
        "point": "This process requires approval. は「この手続きには承認が必要です」。require someone to do は「人に〜することを求める」です。",
        "examples": [
          {
            "en": "This order requires approval before shipment.",
            "ja": "この注文は出荷前に承認が必要です。",
            "focus": "requires approval",
            "object": "approval",
            "jaFocus": "承認が必要です"
          },
          {
            "en": "The client requires us to submit the report by Friday.",
            "ja": "顧客は私たちに金曜日までに報告書を提出するよう求めています。",
            "focus": "requires us to submit",
            "object": "us",
            "jaFocus": "提出するよう求めています"
          },
          {
            "en": "Does this project require an additional estimate?",
            "ja": "この案件には追加見積が必要ですか？",
            "focus": "require an additional estimate",
            "object": "an additional estimate",
            "jaFocus": "追加見積が必要"
          }
        ],
        "dailyExamples": [
          {
            "en": "This form requires your signature.",
            "ja": "この用紙にはあなたの署名が必要です。",
            "focus": "requires your signature",
            "object": "your signature",
            "jaFocus": "署名が必要です"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "require approval",
        "ja": "承認を必要とする",
        "image": "手続き上、承認が条件になる",
        "pattern": "require approval",
        "examples": [
          {
            "en": "This order requires approval before shipment.",
            "ja": "この注文は出荷前に承認が必要です。",
            "focus": "requires approval",
            "jaFocus": "承認が必要"
          }
        ]
      },
      {
        "phrase": "require someone to do",
        "ja": "人に〜することを求める",
        "image": "必要な行動を相手に求める",
        "pattern": "require + 人 + to do",
        "examples": [
          {
            "en": "The client requires us to submit the report by Friday.",
            "ja": "顧客は私たちに金曜日までに報告書を提出するよう求めています。",
            "focus": "requires us to submit",
            "jaFocus": "提出するよう求める"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  },
  {
    "id": "select",
    "rank": 124,
    "word": "SELECT",
    "ipa": "/sɪˈlekt/",
    "kana": "セレクト",
    "syllable": "se-lect",
    "transitivity": "他動詞",
    "importance": "★★★★☆ 仕事で重要",
    "core": "複数の候補から目的に合うものを選び出す",
    "coreDetail": "SELECTは、候補・条件・製品・担当者などを選定する時に使います。chooseより少し硬く、仕事の文書や画面操作でもよく使います。",
    "meanings": [
      {
        "id": "business-core",
        "title": "① 選定する・選ぶ",
        "pattern": "select + 名詞 / select A from B",
        "transitivity": "他動詞",
        "structure": "構造ラベルは非表示。選ぶ対象を後ろに置きます。",
        "image": "候補の中から条件に合うものを選ぶ",
        "point": "select a product は「製品を選定する」。select A from B は「Bの中からAを選ぶ」です。",
        "examples": [
          {
            "en": "We selected the best product for the client.",
            "ja": "私たちは顧客に最適な製品を選定しました。",
            "focus": "selected the best product",
            "object": "the best product",
            "jaFocus": "選定しました"
          },
          {
            "en": "Please select one option from the list.",
            "ja": "リストから選択肢を1つ選んでください。",
            "focus": "select one option",
            "object": "one option",
            "jaFocus": "選んでください"
          },
          {
            "en": "Did you select the supplier for this project?",
            "ja": "あなたはこの案件の仕入先を選定しましたか？",
            "focus": "select the supplier",
            "object": "the supplier",
            "jaFocus": "仕入先を選定しましたか"
          }
        ],
        "dailyExamples": [
          {
            "en": "I selected a seat near the window.",
            "ja": "私は窓の近くの席を選びました。",
            "focus": "selected a seat",
            "object": "a seat",
            "jaFocus": "席を選びました"
          }
        ]
      }
    ],
    "collocations": [
      {
        "phrase": "select a product",
        "ja": "製品を選定する",
        "image": "条件に合う製品を選ぶ",
        "pattern": "select a product",
        "examples": [
          {
            "en": "We selected the best product for the client.",
            "ja": "私たちは顧客に最適な製品を選定しました。",
            "focus": "selected the best product",
            "jaFocus": "製品を選定しました"
          }
        ]
      },
      {
        "phrase": "select A from B",
        "ja": "Bの中からAを選ぶ",
        "image": "複数候補の中から一つを選ぶ",
        "pattern": "select A from B",
        "examples": [
          {
            "en": "Please select one option from the list.",
            "ja": "リストから選択肢を1つ選んでください。",
            "focus": "select one option from the list",
            "jaFocus": "リストから選ぶ"
          }
        ]
      }
    ],
    "phrasalVerbs": []
  }
];


const dailyMeaningExamples
: Record<string, Record<string, Example[]>> = {
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
  const premiumVerbs = new Set(["get", "take", "make", "give", "have", "go", "come", "put", "keep", "find", "see", "look", "watch", "hear", "listen", "think", "know", "feel", "work", "use", "start", "stop", "try", "help"]);
  for (const verb of verbs) {
    if (!premiumVerbs.has(verb.id)) continue;
    for (const meaning of verb.meanings) {
      meaning.dailyExamples = dailyMeaningExamples[verb.id]?.[meaning.id] ?? fallbackDailyExamples(verb, meaning.title, verb.word.toLowerCase());
    }
    for (const phrase of [...verb.collocations, ...verb.phrasalVerbs]) {
      if (phrase.dailyExamples && phrase.dailyExamples.length > 0) continue;
      phrase.dailyExamples = [
        { en: `I want to learn how to use "${phrase.phrase}" naturally.`, ja: `「${phrase.ja}」を自然に使えるようになりたいです。`, focus: phrase.phrase, jaFocus: phrase.ja },
        { en: `This phrase is useful in everyday conversation.`, ja: `この表現は日常会話でも役立ちます。`, focus: phrase.phrase, jaFocus: "役立ちます" }
      ];
    }
  }
}

attachPremiumDailyExamples();

export type TestSection = "basic" | "idioms" | "phrasal" | "all"; // idioms is kept only for old saved data; UI maps it into basic.

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
  const normalizedSection = section === "idioms" ? "basic" : section;
  return testItems.filter((item) => item.verbId === verbId && (normalizedSection === "all" || item.section === normalizedSection));
}

export function getTestItemById(itemId: string) {
  return testItems.find((item) => item.id === itemId);
}
