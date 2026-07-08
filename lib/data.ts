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
    "coreDetail": "FINDは「見えていない答え・情報・問題を、探したり確認したりして見つける」感覚です。物を見つけるだけでなく、問題点、解決策、判断結果にも広がります。",
    "coreVisual": {
      "from": [
        "🔍 探す",
        "📄 資料",
        "❗ 問題",
        "💡 解決策"
      ],
      "to": "答え・発見",
      "label": "不明なもの → 見つかる"
    },
    "meanings": [
      {
        "id": "find-issue",
        "title": "① 問題・原因を見つける",
        "pattern": "FIND + issue / cause",
        "transitivity": "他動詞",
        "structure": "S + find + O",
        "image": "見えていなかった問題点が確認で見つかるイメージ。",
        "point": "仕事ではトラブル原因や不具合確認でよく使います。",
        "examples": [
          {
            "en": "We found the issue in the wiring diagram.",
            "ja": "私たちは配線図の中に問題を見つけました。",
            "focus": "found",
            "object": "the issue"
          },
          {
            "en": "I found the cause of the delay.",
            "ja": "私は遅延の原因を見つけました。",
            "focus": "found",
            "object": "the cause"
          }
        ],
        "dailyExamples": [
          {
            "en": "She found a mistake in the order form.",
            "ja": "彼女は注文書にミスを見つけました。",
            "focus": "found",
            "object": "a mistake"
          }
        ]
      },
      {
        "id": "find-solution",
        "title": "② 解決策・方法を見つける",
        "pattern": "FIND + solution / way",
        "transitivity": "他動詞",
        "structure": "S + find + O",
        "image": "探していた答えや方法が見つかるイメージ。",
        "point": "提案・改善・顧客対応で使いやすい形です。",
        "examples": [
          {
            "en": "We need to find a better solution for the client.",
            "ja": "私たちは顧客のためにより良い解決策を見つける必要があります。",
            "focus": "find",
            "object": "a better solution"
          },
          {
            "en": "I found a faster way to prepare the quotation.",
            "ja": "私は見積書をより早く準備する方法を見つけました。",
            "focus": "found",
            "object": "a faster way"
          }
        ],
        "dailyExamples": [
          {
            "en": "He found an easier way to explain it.",
            "ja": "彼はそれを説明する簡単な方法を見つけました。",
            "focus": "found",
            "object": "an easier way"
          }
        ]
      },
      {
        "id": "find-info",
        "title": "③ 情報・事実が分かる",
        "pattern": "FIND that / FIND information",
        "transitivity": "他動詞",
        "structure": "S + find + that S V",
        "image": "確認した結果、事実が分かるイメージ。",
        "point": "find that... は「〜だと分かる」でビジネス文にも便利です。",
        "examples": [
          {
            "en": "We found that the stock data was old.",
            "ja": "私たちは在庫データが古いことが分かりました。",
            "focus": "found"
          },
          {
            "en": "I found the correct price in the latest list.",
            "ja": "私は最新リストで正しい価格を見つけました。",
            "focus": "found",
            "object": "the correct price"
          }
        ],
        "dailyExamples": [
          {
            "en": "They found that the report was incomplete.",
            "ja": "彼らは報告書が未完成だと分かりました。",
            "focus": "found"
          }
        ]
      },
      {
        "id": "find-feeling",
        "title": "④ 〜だと感じる・思う",
        "pattern": "FIND + O + adjective",
        "transitivity": "他動詞",
        "structure": "S + find + O + C",
        "image": "経験して評価が見つかるイメージ。",
        "point": "I found it difficult. のように感想や評価を言えます。",
        "examples": [
          {
            "en": "I found the new system easy to use.",
            "ja": "私は新しいシステムが使いやすいと感じました。",
            "focus": "found",
            "object": "the new system"
          },
          {
            "en": "We found the schedule difficult to manage.",
            "ja": "私たちはそのスケジュールの管理が難しいと感じました。",
            "focus": "found",
            "object": "the schedule"
          }
        ],
        "dailyExamples": [
          {
            "en": "She found the training useful.",
            "ja": "彼女はその研修が役に立つと感じました。",
            "focus": "found",
            "object": "the training"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "find out",
        "ja": "調べて分かる",
        "image": "隠れていた事実が外に出て分かるイメージ。",
        "pattern": "FIND OUT + information / that S V",
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
          }
        ],
        "dailyExamples": [
          {
            "en": "She found out the answer online.",
            "ja": "彼女はオンラインで答えを調べて分かりました。",
            "focus": "found out",
            "object": "the answer"
          }
        ]
      },
      {
        "phrase": "find out about",
        "ja": "〜について調べて知る",
        "image": "対象について情報を集めて分かるイメージ。",
        "pattern": "FIND OUT ABOUT + topic",
        "examples": [
          {
            "en": "We need to find out about the new regulation.",
            "ja": "私たちは新しい規制について調べる必要があります。",
            "focus": "find out about",
            "object": "the new regulation"
          },
          {
            "en": "I found out about the issue from the report.",
            "ja": "私は報告書からその問題について知りました。",
            "focus": "found out about",
            "object": "the issue"
          }
        ],
        "dailyExamples": [
          {
            "en": "He found out about the event yesterday.",
            "ja": "彼は昨日そのイベントについて知りました。",
            "focus": "found out about",
            "object": "the event"
          }
        ]
      },
      {
        "phrase": "find out from",
        "ja": "〜から知る",
        "image": "人や資料から情報を得るイメージ。",
        "pattern": "FIND OUT FROM + source",
        "examples": [
          {
            "en": "I found out from the supplier that the item is delayed.",
            "ja": "私は仕入先からその商品が遅れていると知りました。",
            "focus": "found out from",
            "object": "the supplier"
          },
          {
            "en": "We can find out from the client what they need.",
            "ja": "私たちは顧客から必要な内容を確認できます。",
            "focus": "find out from",
            "object": "the client"
          }
        ],
        "dailyExamples": [
          {
            "en": "She found out from a friend.",
            "ja": "彼女は友人から知りました。",
            "focus": "found out from",
            "object": "a friend"
          }
        ]
      },
      {
        "phrase": "find your way around",
        "ja": "慣れる・使い方が分かる",
        "image": "新しい場所や仕組みの中で進み方が分かるイメージ。",
        "pattern": "FIND YOUR WAY AROUND + place/system",
        "examples": [
          {
            "en": "New staff need time to find their way around the system.",
            "ja": "新しい社員はそのシステムに慣れる時間が必要です。",
            "focus": "find their way around",
            "object": "the system"
          },
          {
            "en": "I finally found my way around the new portal.",
            "ja": "私はようやく新しいポータルの使い方に慣れました。",
            "focus": "found my way around",
            "object": "the new portal"
          }
        ],
        "dailyExamples": [
          {
            "en": "He found his way around the station.",
            "ja": "彼は駅の中で道が分かるようになりました。",
            "focus": "found his way around",
            "object": "the station"
          }
        ]
      },
      {
        "phrase": "find fault with",
        "ja": "〜に文句をつける・欠点を探す",
        "image": "欠点を探して指摘するイメージ。",
        "pattern": "FIND FAULT WITH + person/thing",
        "examples": [
          {
            "en": "The client found fault with the color sample.",
            "ja": "顧客は色サンプルに不満を示しました。",
            "focus": "found fault with",
            "object": "the color sample"
          },
          {
            "en": "We should not just find fault with the proposal.",
            "ja": "私たちは提案の欠点を指摘するだけにすべきではありません。",
            "focus": "find fault with",
            "object": "the proposal"
          }
        ],
        "dailyExamples": [
          {
            "en": "She always finds fault with small details.",
            "ja": "彼女はいつも細かい点に文句をつけます。",
            "focus": "finds fault with",
            "object": "small details"
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
    "coreDetail": "SEEは「自然に目に入る」から「状況や意味が分かる」へ広がります。仕事では確認する、理解する、会う、結果を見る、対応するという意味でよく使います。",
    "coreVisual": {
      "from": [
        "👀 視界",
        "📊 状況",
        "💬 意図",
        "✅ 結果"
      ],
      "to": "理解・確認",
      "label": "目に入る → 分かる"
    },
    "meanings": [
      {
        "id": "see-result",
        "title": "① 結果・状況を見る",
        "pattern": "SEE + result / situation",
        "transitivity": "他動詞",
        "structure": "S + see + O",
        "image": "結果や状況が視界や理解に入るイメージ。",
        "point": "仕事では資料・結果・数字の確認に使います。",
        "examples": [
          {
            "en": "We saw the result in the latest report.",
            "ja": "私たちは最新の報告書でその結果を確認しました。",
            "focus": "saw",
            "object": "the result"
          },
          {
            "en": "I can see the updated file now.",
            "ja": "私は今、更新されたファイルを確認できます。",
            "focus": "see",
            "object": "the updated file"
          }
        ],
        "dailyExamples": [
          {
            "en": "She saw the message on her phone.",
            "ja": "彼女はスマホでそのメッセージを見ました。",
            "focus": "saw",
            "object": "the message"
          }
        ]
      },
      {
        "id": "see-understand",
        "title": "② 分かる・理解する",
        "pattern": "SEE + point / reason",
        "transitivity": "他動詞",
        "structure": "S + see + O",
        "image": "意味や理由が頭に入るイメージ。",
        "point": "I see. は「分かりました」。仕事では理由や要点の理解に使えます。",
        "examples": [
          {
            "en": "I see your point about the schedule.",
            "ja": "私はスケジュールについてのあなたの要点を理解しました。",
            "focus": "see",
            "object": "your point"
          },
          {
            "en": "We saw the reason for the delay after checking the data.",
            "ja": "私たちはデータを確認して遅延の理由を理解しました。",
            "focus": "saw",
            "object": "the reason"
          }
        ],
        "dailyExamples": [
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
        "title": "③ 〜か確認する",
        "pattern": "SEE if / whether",
        "transitivity": "他動詞",
        "structure": "S + see if S V",
        "image": "状況を見て確認するイメージ。",
        "point": "see if は「〜かどうか確認する」で会話・メールに便利です。",
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
          }
        ],
        "dailyExamples": [
          {
            "en": "We need to see if the schedule still works.",
            "ja": "私たちはそのスケジュールでまだ問題ないか確認する必要があります。",
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
        "image": "人と会って話すイメージ。",
        "point": "meetより少しカジュアルに、訪問や面談にも使えます。",
        "examples": [
          {
            "en": "I will see the client tomorrow morning.",
            "ja": "私は明日の朝、顧客に会います。",
            "focus": "see",
            "object": "the client"
          },
          {
            "en": "We saw the supplier at the exhibition.",
            "ja": "私たちは展示会でその仕入先に会いました。",
            "focus": "saw",
            "object": "the supplier"
          }
        ],
        "dailyExamples": [
          {
            "en": "She saw her friend after work.",
            "ja": "彼女は仕事の後に友人に会いました。",
            "focus": "saw",
            "object": "her friend"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "see through",
        "ja": "見抜く・最後までやり通す",
        "image": "表面を通して本質や終点まで見通すイメージ。",
        "pattern": "SEE THROUGH + problem/task",
        "examples": [
          {
            "en": "We saw through the issue after checking the data.",
            "ja": "私たちはデータを確認してその問題を見抜きました。",
            "focus": "saw through",
            "object": "the issue"
          },
          {
            "en": "She will see the project through to the end.",
            "ja": "彼女はその案件を最後までやり遂げます。",
            "focus": "see through",
            "object": "the project"
          }
        ],
        "dailyExamples": [
          {
            "en": "He saw through the excuse.",
            "ja": "彼はその言い訳を見抜きました。",
            "focus": "saw through",
            "object": "the excuse"
          }
        ]
      },
      {
        "phrase": "see to",
        "ja": "〜に対応する・手配する",
        "image": "必要なことを見て処理するイメージ。",
        "pattern": "SEE TO + task/request",
        "examples": [
          {
            "en": "I will see to the shipping documents.",
            "ja": "私が出荷書類を対応します。",
            "focus": "see to",
            "object": "the shipping documents"
          },
          {
            "en": "Can you see to the client request?",
            "ja": "あなたは顧客の依頼に対応できますか？",
            "focus": "see to",
            "object": "the client request"
          }
        ],
        "dailyExamples": [
          {
            "en": "She saw to the booking.",
            "ja": "彼女は予約の手配をしました。",
            "focus": "saw to",
            "object": "the booking"
          }
        ]
      },
      {
        "phrase": "see about",
        "ja": "〜を検討する・手配する",
        "image": "どうするか確認して動くイメージ。",
        "pattern": "SEE ABOUT + task",
        "examples": [
          {
            "en": "We need to see about the replacement parts.",
            "ja": "私たちは交換部品について手配を検討する必要があります。",
            "focus": "see about",
            "object": "the replacement parts"
          },
          {
            "en": "I will see about changing the meeting time.",
            "ja": "私は会議時間の変更について確認します。",
            "focus": "see about",
            "object": "changing the meeting time"
          }
        ],
        "dailyExamples": [
          {
            "en": "He will see about dinner.",
            "ja": "彼が夕食のことを手配します。",
            "focus": "see about",
            "object": "dinner"
          }
        ]
      },
      {
        "phrase": "see off",
        "ja": "見送る",
        "image": "人や物が出発するのを見届けるイメージ。",
        "pattern": "SEE OFF + person/shipment",
        "examples": [
          {
            "en": "We saw off the overseas guests after the meeting.",
            "ja": "私たちは会議後に海外からの来客を見送りました。",
            "focus": "saw off",
            "object": "the overseas guests"
          },
          {
            "en": "The team saw off the first shipment.",
            "ja": "チームは最初の出荷を見届けました。",
            "focus": "saw off",
            "object": "the first shipment"
          }
        ],
        "dailyExamples": [
          {
            "en": "I saw my family off at the station.",
            "ja": "私は駅で家族を見送りました。",
            "focus": "saw off",
            "object": "my family"
          }
        ]
      },
      {
        "phrase": "see out",
        "ja": "最後までやり遂げる",
        "image": "期間や仕事の終わりまで見届けるイメージ。",
        "pattern": "SEE OUT + period/project",
        "examples": [
          {
            "en": "We need to see out this project carefully.",
            "ja": "私たちはこの案件を慎重に最後までやり遂げる必要があります。",
            "focus": "see out",
            "object": "this project"
          },
          {
            "en": "She saw out the busy season with the team.",
            "ja": "彼女はチームと繁忙期を乗り切りました。",
            "focus": "saw out",
            "object": "the busy season"
          }
        ],
        "dailyExamples": [
          {
            "en": "They saw out the year without major problems.",
            "ja": "彼らは大きな問題なくその年を終えました。",
            "focus": "saw out",
            "object": "the year"
          }
        ]
      },
      {
        "phrase": "see into",
        "ja": "調べる・確認する",
        "image": "中身を見て詳しく確認するイメージ。",
        "pattern": "SEE INTO + issue",
        "examples": [
          {
            "en": "We should see into the cause of the defect.",
            "ja": "私たちは不具合の原因を調べるべきです。",
            "focus": "see into",
            "object": "the cause"
          },
          {
            "en": "I will see into the complaint today.",
            "ja": "私は今日その苦情を確認します。",
            "focus": "see into",
            "object": "the complaint"
          }
        ],
        "dailyExamples": [
          {
            "en": "She saw into the matter quickly.",
            "ja": "彼女はその件をすぐ調べました。",
            "focus": "saw into",
            "object": "the matter"
          }
        ]
      },
      {
        "phrase": "see over",
        "ja": "見て回る",
        "image": "場所や内容を確認して回るイメージ。",
        "pattern": "SEE OVER + place/document",
        "examples": [
          {
            "en": "The client wants to see over the showroom.",
            "ja": "顧客はショールームを見て回りたいとのことです。",
            "focus": "see over",
            "object": "the showroom"
          },
          {
            "en": "Can you see over the draft before I send it?",
            "ja": "私が送る前に、あなたは下書きを確認できますか？",
            "focus": "see over",
            "object": "the draft"
          }
        ],
        "dailyExamples": [
          {
            "en": "We saw over the new office.",
            "ja": "私たちは新しいオフィスを見て回りました。",
            "focus": "saw over",
            "object": "the new office"
          }
        ]
      },
      {
        "phrase": "see around",
        "ja": "案内して回る",
        "image": "人を連れて場所を見せるイメージ。",
        "pattern": "SEE AROUND + person/place",
        "examples": [
          {
            "en": "I will see the client around the showroom.",
            "ja": "私は顧客をショールームに案内します。",
            "focus": "see around",
            "object": "the client"
          },
          {
            "en": "She saw the visitors around the office.",
            "ja": "彼女は来客をオフィスに案内しました。",
            "focus": "saw around",
            "object": "the visitors"
          }
        ],
        "dailyExamples": [
          {
            "en": "He saw us around the museum.",
            "ja": "彼は私たちを博物館に案内してくれました。",
            "focus": "saw around",
            "object": "us"
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
    "coreDetail": "LOOKは「自分から意識して目を向ける」感覚です。見る、確認する、探す、調査する、見直す、期待するなど、前置詞との組み合わせで仕事の表現が大きく広がります。",
    "coreVisual": {
      "from": [
        "👀 視線",
        "🔎 確認",
        "📄 資料",
        "未来"
      ],
      "to": "対象・方向",
      "label": "自分 → 対象へ目を向ける"
    },
    "meanings": [
      {
        "id": "look-appearance",
        "title": "① 〜に見える",
        "pattern": "LOOK + adjective",
        "transitivity": "自動詞",
        "structure": "S + look + C",
        "image": "見た印象が相手に伝わるイメージ。",
        "point": "look good / look ready のように状態や印象を言えます。",
        "examples": [
          {
            "en": "The new proposal looks professional.",
            "ja": "新しい提案書はプロらしく見えます。",
            "focus": "looks"
          },
          {
            "en": "The schedule looks tight this week.",
            "ja": "今週のスケジュールは厳しそうです。",
            "focus": "looks"
          }
        ],
        "dailyExamples": [
          {
            "en": "This design looks simple and clean.",
            "ja": "このデザインはシンプルできれいに見えます。",
            "focus": "looks"
          }
        ]
      },
      {
        "id": "look-direction",
        "title": "② 意識して見る",
        "pattern": "LOOK carefully / toward",
        "transitivity": "自動詞",
        "structure": "S + look + M",
        "image": "自分から意識して視線や注意を向けるイメージ。",
        "point": "seeは自然に見える、lookは意識して見るです。",
        "examples": [
          {
            "en": "Please look carefully before you approve the order.",
            "ja": "あなたは注文を承認する前に注意深く見てください。",
            "focus": "look"
          },
          {
            "en": "We looked at the display from different angles.",
            "ja": "私たちは異なる角度からディスプレイを確認しました。",
            "focus": "looked"
          }
        ],
        "dailyExamples": [
          {
            "en": "She looked toward the entrance.",
            "ja": "彼女は入口の方を見ました。",
            "focus": "looked"
          }
        ]
      },
      {
        "id": "look-future",
        "title": "③ 先を見る・見通す",
        "pattern": "LOOK ahead / future",
        "transitivity": "自動詞",
        "structure": "S + look + M",
        "image": "今だけでなく先の状況へ目を向けるイメージ。",
        "point": "計画・準備・改善の話で使いやすいです。",
        "examples": [
          {
            "en": "We need to look ahead and prepare for next month.",
            "ja": "私たちは先を見据えて来月に備える必要があります。",
            "focus": "look"
          },
          {
            "en": "The team looked beyond the current issue.",
            "ja": "チームは目の前の問題の先を見ました。",
            "focus": "looked"
          }
        ],
        "dailyExamples": [
          {
            "en": "He always looks ahead before making a plan.",
            "ja": "彼は計画を立てる前にいつも先を見ます。",
            "focus": "looks"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "look at",
        "ja": "〜を見る・確認する",
        "image": "対象に目や注意を向けるイメージ。",
        "pattern": "LOOK AT + object",
        "examples": [
          {
            "en": "Please look at this part of the drawing.",
            "ja": "あなたは図面のこの部分を確認してください。",
            "focus": "look at",
            "object": "this part"
          },
          {
            "en": "We looked at the latest sales numbers.",
            "ja": "私たちは最新の売上数字を確認しました。",
            "focus": "looked at",
            "object": "the latest sales numbers"
          }
        ],
        "dailyExamples": [
          {
            "en": "She looked at the menu.",
            "ja": "彼女はメニューを見ました。",
            "focus": "looked at",
            "object": "the menu"
          }
        ]
      },
      {
        "phrase": "look into",
        "ja": "〜を調査する",
        "image": "問題の中へ目を向けて調べるイメージ。",
        "pattern": "LOOK INTO + issue",
        "examples": [
          {
            "en": "We need to look into this issue today.",
            "ja": "私たちは今日この問題を調査する必要があります。",
            "focus": "look into",
            "object": "this issue"
          },
          {
            "en": "I will look into the delivery delay.",
            "ja": "私は納期遅延について調べます。",
            "focus": "look into",
            "object": "the delivery delay"
          }
        ],
        "dailyExamples": [
          {
            "en": "She looked into the old record.",
            "ja": "彼女は古い記録を調べました。",
            "focus": "looked into",
            "object": "the old record"
          }
        ]
      },
      {
        "phrase": "look for",
        "ja": "〜を探す",
        "image": "必要なものへ目を向けて探すイメージ。",
        "pattern": "LOOK FOR + object",
        "examples": [
          {
            "en": "We are looking for a better supplier.",
            "ja": "私たちはより良い仕入先を探しています。",
            "focus": "looking for",
            "object": "a better supplier"
          },
          {
            "en": "I looked for the latest price list.",
            "ja": "私は最新価格表を探しました。",
            "focus": "looked for",
            "object": "the latest price list"
          }
        ],
        "dailyExamples": [
          {
            "en": "He is looking for his keys.",
            "ja": "彼は鍵を探しています。",
            "focus": "looking for",
            "object": "his keys"
          }
        ]
      },
      {
        "phrase": "look after",
        "ja": "〜を管理する・世話をする",
        "image": "対象を見守って面倒を見るイメージ。",
        "pattern": "LOOK AFTER + person/project",
        "examples": [
          {
            "en": "She looks after this account.",
            "ja": "彼女がこの顧客を担当しています。",
            "focus": "looks after",
            "object": "this account"
          },
          {
            "en": "We need someone to look after the project schedule.",
            "ja": "私たちは案件スケジュールを管理する人が必要です。",
            "focus": "look after",
            "object": "the project schedule"
          }
        ],
        "dailyExamples": [
          {
            "en": "He looks after his younger brother.",
            "ja": "彼は弟の世話をしています。",
            "focus": "looks after",
            "object": "his younger brother"
          }
        ]
      },
      {
        "phrase": "look over",
        "ja": "ざっと確認する",
        "image": "全体を軽く見渡すイメージ。",
        "pattern": "LOOK OVER + document",
        "examples": [
          {
            "en": "Can you look over this quotation before I send it?",
            "ja": "私が送る前に、この見積書をざっと確認してもらえますか？",
            "focus": "look over",
            "object": "this quotation"
          },
          {
            "en": "I looked over the contract this morning.",
            "ja": "私は今朝その契約書に目を通しました。",
            "focus": "looked over",
            "object": "the contract"
          }
        ],
        "dailyExamples": [
          {
            "en": "She looked over the notes.",
            "ja": "彼女はメモにざっと目を通しました。",
            "focus": "looked over",
            "object": "the notes"
          }
        ]
      },
      {
        "phrase": "look through",
        "ja": "目を通す",
        "image": "資料の中を通して確認するイメージ。",
        "pattern": "LOOK THROUGH + document",
        "examples": [
          {
            "en": "I will look through the documents tonight.",
            "ja": "私は今夜その書類に目を通します。",
            "focus": "look through",
            "object": "the documents"
          },
          {
            "en": "We looked through the catalog together.",
            "ja": "私たちは一緒にカタログに目を通しました。",
            "focus": "looked through",
            "object": "the catalog"
          }
        ],
        "dailyExamples": [
          {
            "en": "He looked through the photos.",
            "ja": "彼は写真に目を通しました。",
            "focus": "looked through",
            "object": "the photos"
          }
        ]
      },
      {
        "phrase": "look up",
        "ja": "調べる",
        "image": "情報を上げて探し出すイメージ。",
        "pattern": "LOOK UP + information",
        "examples": [
          {
            "en": "Please look up the product code in the system.",
            "ja": "システムで製品コードを調べてください。",
            "focus": "look up",
            "object": "the product code"
          },
          {
            "en": "I looked up the address before visiting.",
            "ja": "私は訪問前に住所を調べました。",
            "focus": "looked up",
            "object": "the address"
          }
        ],
        "dailyExamples": [
          {
            "en": "She looked up the word online.",
            "ja": "彼女はその単語をオンラインで調べました。",
            "focus": "looked up",
            "object": "the word"
          }
        ]
      },
      {
        "phrase": "look up to",
        "ja": "尊敬する",
        "image": "相手を上に見るイメージ。",
        "pattern": "LOOK UP TO + person",
        "examples": [
          {
            "en": "Many new staff look up to our senior sales manager.",
            "ja": "多くの新人が私たちの先輩営業マネージャーを尊敬しています。",
            "focus": "look up to",
            "object": "our senior sales manager"
          },
          {
            "en": "I look up to people who keep learning.",
            "ja": "私は学び続ける人を尊敬しています。",
            "focus": "look up to",
            "object": "people"
          }
        ],
        "dailyExamples": [
          {
            "en": "She looks up to her teacher.",
            "ja": "彼女は先生を尊敬しています。",
            "focus": "looks up to",
            "object": "her teacher"
          }
        ]
      },
      {
        "phrase": "look forward to",
        "ja": "楽しみにする",
        "image": "未来へ前向きに目を向けるイメージ。",
        "pattern": "LOOK FORWARD TO + noun/doing",
        "examples": [
          {
            "en": "We look forward to working with your team.",
            "ja": "私たちは御社チームと一緒に仕事をすることを楽しみにしています。",
            "focus": "look forward to",
            "object": "working with your team"
          },
          {
            "en": "I look forward to your reply.",
            "ja": "私はあなたからの返信をお待ちしています。",
            "focus": "look forward to",
            "object": "your reply"
          }
        ],
        "dailyExamples": [
          {
            "en": "They look forward to the trip.",
            "ja": "彼らは旅行を楽しみにしています。",
            "focus": "look forward to",
            "object": "the trip"
          }
        ]
      },
      {
        "phrase": "look back on",
        "ja": "振り返る",
        "image": "過去へ目を向けて考えるイメージ。",
        "pattern": "LOOK BACK ON + experience",
        "examples": [
          {
            "en": "We looked back on the project and listed the lessons learned.",
            "ja": "私たちはその案件を振り返り、学んだ点を整理しました。",
            "focus": "looked back on",
            "object": "the project"
          },
          {
            "en": "I often look back on my first sales visit.",
            "ja": "私は初めての営業訪問をよく振り返ります。",
            "focus": "look back on",
            "object": "my first sales visit"
          }
        ],
        "dailyExamples": [
          {
            "en": "She looked back on her school days.",
            "ja": "彼女は学生時代を振り返りました。",
            "focus": "looked back on",
            "object": "her school days"
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
    "core": "変化するものを意識して見守る",
    "coreDetail": "WATCHは、ただ目に入るseeではなく、動き・変化・危険・数字をしばらく注意して見る感覚です。進捗、数字、動画、リスクなどを見守る場面で使います。",
    "coreVisual": {"from":["📊 数字","🚚 納期","🎥 動画","⚠️ リスク","👥 状況"],"to":"自分の注意・観察範囲","label":"変化するもの → 注意して見続ける"},
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
      {"id":"watch-market","title":"④ watch the market / 市場を見る","pattern":"WATCH + market / trend","transitivity":"他動詞","structure":"S + watch + O","image":"市場や傾向を継続して観察するイメージ。","point":"market, trend, demand, competitor と相性が良い。","examples":[
        {"en":"We should watch the market before changing the price.","ja":"私たちは価格を変更する前に市場を注意して見るべきです。","focus":"watch","object":"the market"},
        {"en":"I watched the competitor's campaign closely.","ja":"私は競合のキャンペーンを注意深く見ていました。","focus":"watched","object":"the competitor's campaign"},
        {"en":"Please watch the demand trend this month.","ja":"あなたは今月の需要の動きを注意して見てください。","focus":"watch","object":"the demand trend"}
      ]},
      {"id":"watch-someone-do","title":"⑤ watch someone do / 人が〜するのを見る","pattern":"WATCH + someone + do","transitivity":"他動詞","structure":"S + watch + O + V","image":"人の動作を最初から最後まで注意して見るイメージ。","point":"作業手順・説明・現場確認で使いやすい形。","examples":[
        {"en":"I watched the engineer check the wiring.","ja":"私は技術担当者が配線を確認するのを見ました。","focus":"watched","object":"the engineer check the wiring"},
        {"en":"Please watch me set up the system first.","ja":"あなたはまず私がシステムを設定するところを見てください。","focus":"watch","object":"me set up the system"},
        {"en":"We watched the client test the lighting.","ja":"私たちは顧客が照明をテストするのを見ました。","focus":"watched","object":"the client test the lighting"}
      ]},
      {"id":"watch-carefully","title":"⑥ watch carefully / 注意深く見る","pattern":"WATCH + carefully / closely","transitivity":"他動詞・自動詞","structure":"S + watch + M","image":"注意を強く向けて見るイメージ。","point":"carefully, closely と一緒に使うと、見落とし防止の感じが出る。","examples":[
        {"en":"Please watch carefully during the test.","ja":"あなたはテスト中、注意深く見てください。","focus":"watch","object":"carefully"},
        {"en":"We watched closely after the system update.","ja":"私たちはシステム更新後、注意深く状況を見ました。","focus":"watched","object":"closely"},
        {"en":"I will watch this issue closely until Friday.","ja":"私は金曜日までこの問題を注意深く見ます。","focus":"watch","object":"this issue closely"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"watch out","ja":"気をつける","image":"危ないものを見逃さないように注意を外へ向けるイメージ。","pattern":"WATCH OUT","examples":[
        {"en":"Watch out during the installation.","ja":"施工中は気をつけてください。","focus":"Watch out"},
        {"en":"We should watch out when handling the sample.","ja":"私たちはサンプルを扱う時に気をつけるべきです。","focus":"watch out"}
      ]},
      {"phrase":"watch out for","ja":"〜に注意する","image":"危険や変化を探すように注意を向けるイメージ。","pattern":"WATCH OUT FOR + risk / change","examples":[
        {"en":"Please watch out for wet paint near the entrance.","ja":"入口付近の塗りたてのペンキに気をつけてください。","focus":"watch out for","object":"wet paint"},
        {"en":"We need to watch out for changes in the delivery date.","ja":"私たちは納期変更に注意する必要があります。","focus":"watch out for","object":"changes in the delivery date"}
      ]},
      {"phrase":"watch over","ja":"〜を見守る・管理する","image":"上から全体を見て守るイメージ。","pattern":"WATCH OVER + person / process","examples":[
        {"en":"The manager watched over the new team during the project.","ja":"上司はその案件中、新しいチームを見守りました。","focus":"watched over","object":"the new team"},
        {"en":"We need someone to watch over the testing process.","ja":"私たちはテスト工程を管理する人が必要です。","focus":"watch over","object":"the testing process"}
      ]},
      {"phrase":"watch for","ja":"〜に注意する・待つ","image":"何かが出てくるのを注意して待つイメージ。","pattern":"WATCH FOR + change / error","examples":[
        {"en":"Please watch for any errors in the report.","ja":"あなたは報告書にミスがないか注意してください。","focus":"watch for","object":"any errors"},
        {"en":"The team watched for safety issues during the installation.","ja":"チームは施工中、安全上の問題に注意していました。","focus":"watched for","object":"safety issues"}
      ]},
      {"phrase":"watch from","ja":"〜から見る","image":"ある位置から状況を見るイメージ。","pattern":"WATCH FROM + place","examples":[
        {"en":"We watched from the back of the showroom.","ja":"私たちはショールームの後方から見ました。","focus":"watched from","object":"the back of the showroom"},
        {"en":"I watched from the office while the test was running.","ja":"私はテスト中、事務所から状況を見ていました。","focus":"watched from","object":"the office"}
      ]},
      {"phrase":"watch as","ja":"〜するのを見る","image":"出来事が進む様子を見るイメージ。","pattern":"WATCH AS + sentence","examples":[
        {"en":"We watched as the system restarted.","ja":"私たちはシステムが再起動する様子を見ました。","focus":"watched as","object":"the system restarted"},
        {"en":"I watched as the client tested the sample.","ja":"私は顧客がサンプルを試す様子を見ました。","focus":"watched as","object":"the client tested the sample"}
      ]},
      {"phrase":"watch through","ja":"最後まで見る","image":"動画や説明を最後まで通して見るイメージ。","pattern":"WATCH THROUGH + video / demo","examples":[
        {"en":"Please watch through the demo video before the meeting.","ja":"あなたは会議前にデモ動画を最後まで見てください。","focus":"watch through","object":"the demo video"},
        {"en":"We watched through the training material together.","ja":"私たちは研修資料を一緒に最後まで見ました。","focus":"watched through","object":"the training material"}
      ]},
      {"phrase":"watch back","ja":"見返す","image":"録画や映像をもう一度見るイメージ。","pattern":"WATCH BACK + recording","examples":[
        {"en":"I watched back the meeting recording last night.","ja":"私は昨夜、会議録画を見返しました。","focus":"watched back","object":"the meeting recording"},
        {"en":"Please watch back the test video before you report it.","ja":"あなたは報告前にテスト動画を見返してください。","focus":"watch back","object":"the test video"}
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
    "coreVisual": {"from":["📞 連絡","🗣️ 話","🔔 音","💬 噂","📣 知らせ"],"to":"自分の耳・情報範囲","label":"外の音・情報 → 耳に入る"},
    "meanings": [
      {"id":"hear-sound","title":"① hear a sound / 音が聞こえる","pattern":"HEAR + sound / voice","transitivity":"他動詞","structure":"S + hear + O","image":"音が自然に耳へ入ってくるイメージ。","point":"listenは意識して聞く。hearは聞こえる・耳に入る。","examples":[
        {"en":"I heard a noise from the machine.","ja":"私は機械から音が聞こえました。","focus":"heard","object":"a noise"},
        {"en":"Can you hear me clearly on the call?","ja":"あなたは電話で私の声がはっきり聞こえますか？","focus":"hear","object":"me"},
        {"en":"We heard the alarm during the test.","ja":"私たちはテスト中にアラーム音を聞きました。","focus":"heard","object":"the alarm"}
      ]},
      {"id":"hear-news","title":"② hear the news / 知らせを聞く","pattern":"HEAR + news / update","transitivity":"他動詞","structure":"S + hear + O","image":"知らせや更新情報が耳に入るイメージ。","point":"news, update, result, rumor など情報系の名詞と相性が良い。","examples":[
        {"en":"I heard the news from the sales team.","ja":"私は営業チームからその知らせを聞きました。","focus":"heard","object":"the news"},
        {"en":"We heard the latest update this morning.","ja":"私たちは今朝、最新情報を聞きました。","focus":"heard","object":"the latest update"},
        {"en":"Did you hear the result of the meeting?","ja":"あなたは会議の結果を聞きましたか？","focus":"hear","object":"the result"}
      ]},
      {"id":"hear-that","title":"③ hear that / 〜だと聞く","pattern":"HEAR THAT + sentence","transitivity":"他動詞","structure":"S + hear + that節","image":"文の形をした情報が耳に入るイメージ。","point":"thatは省略されることも多いが、学習ではまず形を意識する。","examples":[
        {"en":"I heard that the delivery date was moved.","ja":"私は納期が変更されたと聞きました。","focus":"heard","object":"that the delivery date was moved"},
        {"en":"We heard that the client approved the quotation.","ja":"私たちは顧客が見積を承認したと聞きました。","focus":"heard","object":"that the client approved the quotation"},
        {"en":"Did you hear that the meeting was canceled?","ja":"あなたは会議がキャンセルされたと聞きましたか？","focus":"hear","object":"that the meeting was canceled"}
      ]},
      {"id":"hear-feedback","title":"④ hear feedback / 反応を聞く","pattern":"HEAR + feedback / opinion","transitivity":"他動詞","structure":"S + hear + O","image":"相手の意見や反応が自分に入ってくるイメージ。","point":"feedback, opinion, comments などと使いやすい。","examples":[
        {"en":"We heard positive feedback from the customer.","ja":"私たちは顧客から良い反応を聞きました。","focus":"heard","object":"positive feedback"},
        {"en":"I want to hear your opinion before we decide.","ja":"私は決定前にあなたの意見を聞きたいです。","focus":"hear","object":"your opinion"},
        {"en":"The sales team heard several comments after the demo.","ja":"営業チームはデモ後にいくつかコメントを聞きました。","focus":"heard","object":"several comments"}
      ]},
      {"id":"hear-complaint","title":"⑤ hear a complaint / クレームを聞く","pattern":"HEAR + complaint / concern","transitivity":"他動詞","structure":"S + hear + O","image":"相手の不満や懸念が耳に入るイメージ。","point":"complaint, concern, request と一緒に使える。","examples":[
        {"en":"We heard a complaint about the delivery delay.","ja":"私たちは納期遅れについてのクレームを聞きました。","focus":"heard","object":"a complaint"},
        {"en":"I heard the client's concern during the call.","ja":"私は電話中に顧客の懸念を聞きました。","focus":"heard","object":"the client's concern"},
        {"en":"Please hear the customer's request first.","ja":"あなたはまず顧客の要望を聞いてください。","focus":"hear","object":"the customer's request"}
      ]},
      {"id":"hear-someone-say","title":"⑥ hear someone say / 人が〜と言うのを聞く","pattern":"HEAR + someone + do","transitivity":"他動詞","structure":"S + hear + O + V","image":"相手の発言や音が耳に入るイメージ。","point":"say / mention / explain などと相性が良い。","examples":[
        {"en":"I heard the client say the color was good.","ja":"私は顧客が色味は良いと言うのを聞きました。","focus":"heard","object":"the client say the color was good"},
        {"en":"We heard the manager mention the new target.","ja":"私たちは上司が新しい目標に触れるのを聞きました。","focus":"heard","object":"the manager mention the new target"},
        {"en":"Did you hear him explain the reason?","ja":"あなたは彼が理由を説明するのを聞きましたか？","focus":"hear","object":"him explain the reason"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"hear from","ja":"〜から連絡を受ける","image":"相手からの連絡や返事が自分に届くイメージ。","pattern":"HEAR FROM + person / company","examples":[
        {"en":"I heard from the supplier yesterday.","ja":"私は昨日、仕入先から連絡を受けました。","focus":"heard from","object":"the supplier"},
        {"en":"Have you heard from the client yet?","ja":"あなたはもう顧客から連絡を受けましたか？","focus":"heard from","object":"the client"}
      ]},
      {"phrase":"hear about","ja":"〜について聞く","image":"ある話題についての情報が耳に入るイメージ。","pattern":"HEAR ABOUT + topic","examples":[
        {"en":"I heard about the schedule change this morning.","ja":"私は今朝、スケジュール変更について聞きました。","focus":"heard about","object":"the schedule change"},
        {"en":"Did you hear about the issue from the client?","ja":"あなたは顧客からその問題について聞きましたか？","focus":"hear about","object":"the issue"}
      ]},
      {"phrase":"hear of","ja":"〜の存在を聞く","image":"名前や存在が耳に入るイメージ。","pattern":"HEAR OF + person / product","examples":[
        {"en":"Have you heard of this supplier before?","ja":"あなたは以前この仕入先のことを聞いたことがありますか？","focus":"heard of","object":"this supplier"},
        {"en":"We heard of a new product from the client.","ja":"私たちは顧客から新製品の存在を聞きました。","focus":"heard of","object":"a new product"}
      ]},
      {"phrase":"hear out","ja":"最後まで話を聞く","image":"相手の話を途中で止めず最後まで受け取るイメージ。","pattern":"HEAR OUT + person","examples":[
        {"en":"Please hear the customer out before you reply.","ja":"あなたは返答する前に顧客の話を最後まで聞いてください。","focus":"hear out","object":"the customer"},
        {"en":"We heard him out and then explained our position.","ja":"私たちは彼の話を最後まで聞いてから、自分たちの立場を説明しました。","focus":"heard out","object":"him"}
      ]},
      {"phrase":"hear back","ja":"返事をもらう","image":"こちらの連絡に対して返事が戻ってくるイメージ。","pattern":"HEAR BACK","examples":[
        {"en":"I will update you when I hear back.","ja":"返事が来たらあなたに共有します。","focus":"hear back"},
        {"en":"We haven't heard back about the quotation yet.","ja":"私たちは見積についてまだ返事をもらっていません。","focus":"heard back","object":"about the quotation"}
      ]},
      {"phrase":"hear through","ja":"〜を通じて聞く","image":"人やルートを通って情報が耳に入るイメージ。","pattern":"HEAR THROUGH + person / channel","examples":[
        {"en":"We heard through the distributor that the stock was low.","ja":"私たちは代理店を通じて在庫が少ないと聞きました。","focus":"heard through","object":"the distributor"},
        {"en":"I heard through another customer that the product was popular.","ja":"私は別の顧客を通じて、その製品が人気だと聞きました。","focus":"heard through","object":"another customer"}
      ]}
    ]
  },
  {
    "id": "listen",
    "rank": 15,
    "word": "LISTEN",
    "ipa": "/ˈlɪsən/",
    "kana": "リスン",
    "syllable": "lis-ten",
    "transitivity": "自動詞",
    "importance": "★★★★☆ 重要",
    "core": "意識を向けて聞く",
    "coreDetail": "LISTENは、音が自然に入るhearと違い、自分から意識を向けて聞く感覚です。顧客の話、説明、意見、フィードバックを受け止める場面で重要です。",
    "coreVisual": {"from":["🗣️ 相手の話","👂 耳","💬 意見","📢 説明","🤝 顧客の声"],"to":"自分の理解・判断","label":"相手の話 → 意識して聞く"},
    "meanings": [
      {"id":"listen-carefully","title":"① listen carefully / 注意深く聞く","pattern":"LISTEN + carefully / closely","transitivity":"自動詞","structure":"S + listen + M","image":"聞く意識を強くして、内容を取りこぼさないイメージ。","point":"carefully, closely と相性が良い。会議や指示確認で便利。","examples":[
        {"en":"Please listen carefully during the safety briefing.","ja":"あなたは安全説明中、注意深く聞いてください。","focus":"listen","object":"carefully"},
        {"en":"I listened closely to the client's concerns.","ja":"私は顧客の懸念を注意深く聞きました。","focus":"listened","object":"closely"},
        {"en":"We need to listen carefully before making a decision.","ja":"私たちは決定する前に注意深く聞く必要があります。","focus":"listen","object":"carefully"}
      ]},
      {"id":"listen-actively","title":"② listen actively / 積極的に聞く","pattern":"LISTEN + actively","transitivity":"自動詞","structure":"S + listen + M","image":"ただ黙って聞くのではなく、理解するために聞くイメージ。","point":"営業や会議では active listening が重要。","examples":[
        {"en":"We should listen actively during the customer interview.","ja":"私たちは顧客ヒアリング中、積極的に聞くべきです。","focus":"listen","object":"actively"},
        {"en":"I listened actively and asked follow-up questions.","ja":"私は積極的に聞いて、追加質問をしました。","focus":"listened","object":"actively"},
        {"en":"Please listen actively to the team's feedback.","ja":"あなたはチームのフィードバックを積極的に聞いてください。","focus":"listen","object":"actively"}
      ]},
      {"id":"listen-before-replying","title":"③ listen before replying / 返答前に聞く","pattern":"LISTEN + before V-ing","transitivity":"自動詞","structure":"S + listen + before V-ing","image":"返事を急がず、先に相手の話を受け止めるイメージ。","point":"顧客対応やクレーム対応で使いやすい。","examples":[
        {"en":"Please listen before replying to the complaint.","ja":"あなたはクレームに返答する前に、まず話を聞いてください。","focus":"listen","object":"before replying"},
        {"en":"We listened before suggesting a solution.","ja":"私たちは解決策を提案する前に話を聞きました。","focus":"listened","object":"before suggesting a solution"},
        {"en":"I will listen first and then confirm the details.","ja":"私はまず話を聞いてから詳細を確認します。","focus":"listen","object":"first"}
      ]},
      {"id":"listen-without-interrupting","title":"④ listen without interrupting / 遮らずに聞く","pattern":"LISTEN + without V-ing","transitivity":"自動詞","structure":"S + listen + without V-ing","image":"相手の話を途中で止めずに受け止めるイメージ。","point":"会議・クレーム・ヒアリングで自然。","examples":[
        {"en":"We should listen without interrupting the client.","ja":"私たちは顧客の話を遮らずに聞くべきです。","focus":"listen","object":"without interrupting the client"},
        {"en":"I listened without interrupting and took notes.","ja":"私は遮らずに聞き、メモを取りました。","focus":"listened","object":"without interrupting"},
        {"en":"Please listen without judging the idea too quickly.","ja":"あなたはその案をすぐ判断せずに聞いてください。","focus":"listen","object":"without judging"}
      ]},
      {"id":"listen-and-understand","title":"⑤ listen and understand / 聞いて理解する","pattern":"LISTEN + and + verb","transitivity":"自動詞","structure":"S + listen + and V","image":"聞いた内容を理解や行動につなげるイメージ。","point":"listenだけで終わらず、understand / respond / improve につながる形。","examples":[
        {"en":"We listened and understood the client's concern.","ja":"私たちは顧客の懸念を聞いて理解しました。","focus":"listened","object":"and understood"},
        {"en":"Please listen and respond after I finish.","ja":"あなたは私が話し終えてから聞いて返答してください。","focus":"listen","object":"and respond"},
        {"en":"The team listened and improved the proposal.","ja":"チームは話を聞いて提案書を改善しました。","focus":"listened","object":"and improved"}
      ]},
      {"id":"listen-feedback","title":"⑥ listen to feedback / フィードバックに耳を傾ける","pattern":"LISTEN TO + feedback / advice","transitivity":"自動詞","structure":"S + listen + to O","image":"相手の助言や意見を受け止めるイメージ。","point":"単に耳で聞くだけでなく『受け入れる』ニュアンスも出る。","examples":[
        {"en":"We should listen to the engineer's advice.","ja":"私たちは技術担当者のアドバイスを聞くべきです。","focus":"listen","object":"to the engineer's advice"},
        {"en":"I listened to the customer's feedback and changed the layout.","ja":"私は顧客の意見を聞いて、レイアウトを変更しました。","focus":"listened","object":"to the customer's feedback"},
        {"en":"Please listen to the team's suggestion before deciding.","ja":"あなたは決定前にチームの提案を聞いてください。","focus":"listen","object":"to the team's suggestion"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"listen to","ja":"〜を聞く・〜に耳を傾ける","image":"相手や内容へ注意を向けるイメージ。","pattern":"LISTEN TO + person / idea","examples":[
        {"en":"We need to listen to the customer's needs.","ja":"私たちは顧客のニーズに耳を傾ける必要があります。","focus":"listen to","object":"the customer's needs"},
        {"en":"I listened to the new proposal carefully.","ja":"私は新しい提案を注意深く聞きました。","focus":"listened to","object":"the new proposal"}
      ]},
      {"phrase":"listen in","ja":"参加して聞く・こっそり聞く","image":"会話や会議の中へ耳を入れるイメージ。","pattern":"LISTEN IN","examples":[
        {"en":"Can I listen in on the sales call?","ja":"私はその営業電話に参加して聞いてもよいですか？","focus":"listen in","object":"on the sales call"},
        {"en":"Please do not listen in on a private call.","ja":"個人的な電話をこっそり聞かないでください。","focus":"listen in","object":"on a private call"}
      ]},
      {"phrase":"listen for","ja":"〜に耳を澄ます","image":"目的の音や言葉を探すように聞くイメージ。","pattern":"LISTEN FOR + sound / word","examples":[
        {"en":"Please listen for any unusual noise from the machine.","ja":"あなたは機械から異音がしないか注意して聞いてください。","focus":"listen for","object":"any unusual noise"},
        {"en":"I listened for the customer's key point in the meeting.","ja":"私は会議で顧客の重要なポイントを聞き取ろうとしました。","focus":"listened for","object":"the customer's key point"}
      ]},
      {"phrase":"listen out for","ja":"〜を聞き逃さないようにする","image":"必要な音や情報を待ちながら聞くイメージ。","pattern":"LISTEN OUT FOR + signal / update","examples":[
        {"en":"Please listen out for any update from the client.","ja":"あなたは顧客からの更新情報を聞き逃さないようにしてください。","focus":"listen out for","object":"any update"},
        {"en":"We listened out for the alarm during the test.","ja":"私たちはテスト中、アラーム音を聞き逃さないようにしていました。","focus":"listened out for","object":"the alarm"}
      ]},
      {"phrase":"listen up","ja":"よく聞く","image":"注意を集めて聞くイメージ。","pattern":"LISTEN UP","examples":[
        {"en":"Listen up before we start the installation.","ja":"施工を始める前によく聞いてください。","focus":"Listen up"},
        {"en":"Everyone listened up when the manager explained the change.","ja":"上司が変更点を説明した時、全員がよく聞きました。","focus":"listened up"}
      ]},
      {"phrase":"listen through","ja":"最後まで聞く","image":"説明や音声を最後まで通して聞くイメージ。","pattern":"LISTEN THROUGH + audio / explanation","examples":[
        {"en":"Please listen through the explanation before asking questions.","ja":"質問する前に説明を最後まで聞いてください。","focus":"listen through","object":"the explanation"},
        {"en":"I listened through the recording and found the important point.","ja":"私は録音を最後まで聞いて、重要な点を見つけました。","focus":"listened through","object":"the recording"}
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
    "core": "頭の中で考える・判断する",
    "coreDetail": "THINKは、情報・可能性・理由を頭の中で動かして、意見や判断に近づける動詞です。仕事では、提案前の検討、返信前の判断、リスク確認、先を読む場面でよく使います。",
    "coreVisual": {
      "from": ["📄 情報", "❓ 課題", "📊 数字", "🗣️ 意見", "🗓️ 予定"],
      "to": "頭の中の考え・判断",
      "label": "情報・可能性 → 頭の中で考える"
    },
    "meanings": [
      {"id":"think-opinion","title":"① think / 〜だと思う","pattern":"THINK + sentence","transitivity":"他動詞","structure":"S + think + that節","image":"頭の中の判断を相手に伝えるイメージ。","point":"I think ... は意見をやわらかく伝える基本表現。thatは省略されることが多い。","examples":[
        {"en":"I think the schedule is realistic.","ja":"私はそのスケジュールは現実的だと思います。","focus":"think","object":"the schedule is realistic"},
        {"en":"We think this proposal will help the client.","ja":"私たちはこの提案が顧客の役に立つと思います。","focus":"think","object":"this proposal will help the client"},
        {"en":"Do you think the price is acceptable?","ja":"あなたはその価格が受け入れられると思いますか？","focus":"think","object":"the price is acceptable"}
      ]},
      {"id":"think-carefully","title":"② think carefully / 慎重に考える","pattern":"THINK + adverb","transitivity":"自動詞","structure":"S + think + M","image":"判断を急がず、頭の中で丁寧に確認するイメージ。","point":"carefully, clearly, logically などとよく使う。","examples":[
        {"en":"Please think carefully before changing the specification.","ja":"仕様を変更する前に慎重に考えてください。","focus":"think","object":"carefully"},
        {"en":"We thought seriously before we replied to the client.","ja":"私たちは顧客に返信する前に真剣に考えました。","focus":"thought","object":"seriously"},
        {"en":"I need to think clearly before the call.","ja":"私は電話の前に冷静に考える必要があります。","focus":"think","object":"clearly"}
      ]},
      {"id":"think-possible","title":"③ think it is possible / 可能だと思う","pattern":"THINK + sentence","transitivity":"他動詞","structure":"S + think + sentence","image":"可能性を頭の中で判断するイメージ。","point":"possible, difficult, necessary など判断を伝える時に使いやすい。","examples":[
        {"en":"I think it is possible to deliver it by Friday.","ja":"私は金曜日までに納品することは可能だと思います。","focus":"think","object":"it is possible"},
        {"en":"We thought it was difficult to change the design this week.","ja":"私たちは今週デザインを変更するのは難しいと思いました。","focus":"thought","object":"it was difficult"},
        {"en":"Do you think it is necessary to confirm the quantity again?","ja":"あなたは数量をもう一度確認する必要があると思いますか？","focus":"think","object":"it is necessary"}
      ]},
      {"id":"think-should","title":"④ think we should / 〜すべきだと思う","pattern":"THINK + S + should","transitivity":"他動詞","structure":"S + think + sentence","image":"次の行動について判断するイメージ。","point":"We think we should ... は会議や提案で自然に使える。","examples":[
        {"en":"We think we should wait for the client's reply.","ja":"私たちは顧客の返信を待つべきだと思います。","focus":"think","object":"we should wait"},
        {"en":"I think we should check the data again before sending it.","ja":"私は送る前にデータをもう一度確認すべきだと思います。","focus":"think","object":"we should check"},
        {"en":"Do you think we should schedule another meeting?","ja":"あなたは私たちがもう一度会議を設定すべきだと思いますか？","focus":"think","object":"we should schedule"}
      ]},
      {"id":"think-before","title":"⑤ think before replying / 返信前に考える","pattern":"THINK + before V-ing","transitivity":"自動詞","structure":"S + think + before V-ing","image":"行動する前に一度止まって考えるイメージ。","point":"メール返信・価格回答・納期回答の前に使いやすい。","examples":[
        {"en":"Please think before replying to the customer.","ja":"顧客に返信する前に考えてください。","focus":"think","object":"before replying"},
        {"en":"We need to think before changing the price.","ja":"私たちは価格を変更する前に考える必要があります。","focus":"think","object":"before changing"},
        {"en":"I thought before I accepted the new condition.","ja":"私は新しい条件を受け入れる前に考えました。","focus":"thought","object":"before I accepted"}
      ]},
      {"id":"think-differently","title":"⑥ think differently / 違う考え方をする","pattern":"THINK + adverb","transitivity":"自動詞","structure":"S + think + M","image":"いつもと違う方向で考えるイメージ。","point":"改善案や代替案を考える時に使える。","examples":[
        {"en":"We need to think differently about this project.","ja":"私たちはこの案件について違う考え方をする必要があります。","focus":"think","object":"differently"},
        {"en":"She thinks logically when she checks the numbers.","ja":"彼女は数字を確認するとき論理的に考えます。","focus":"thinks","object":"logically"},
        {"en":"Let's think creatively about the display design.","ja":"ディスプレイデザインについて創造的に考えましょう。","focus":"think","object":"creatively"}
      ]},
      {"id":"think-so","title":"⑦ I think so / そう思う","pattern":"THINK + so / not","transitivity":"自動詞に近い使い方","structure":"S + think + so / not","image":"前の内容への判断を短く返すイメージ。","point":"返答で便利。I don't think so. は『そうは思いません』。","examples":[
        {"en":"I think so, but I will confirm it.","ja":"私はそう思いますが、確認します。","focus":"think","object":"so"},
        {"en":"We don't think so at this stage.","ja":"私たちはこの段階ではそう思っていません。","focus":"think","object":"so"},
        {"en":"Do you think so too?","ja":"あなたもそう思いますか？","focus":"think","object":"so"}
      ]},
      {"id":"think-main-issue","title":"⑧ think timing is important / 重要だと思う","pattern":"THINK + sentence","transitivity":"他動詞","structure":"S + think + sentence","image":"重要点や原因を頭の中で判断するイメージ。","point":"timing, cost, quality などを主語にして、仕事上の判断を自然に伝える。","examples":[
        {"en":"We think timing is important for this project.","ja":"私たちはこの案件ではタイミングが重要だと思います。","focus":"think","object":"timing is important"},
        {"en":"I thought cost was the main issue.","ja":"私はコストが主な問題だと思いました。","focus":"thought","object":"cost was the main issue"},
        {"en":"Do you think quality is more important than price?","ja":"あなたは価格より品質の方が重要だと思いますか？","focus":"think","object":"quality is more important"}
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
        {"en":"We will think over your request this week.","ja":"私たちは今週あなたの要望を検討します。","focus":"think over","object":"your request"},
        {"en":"The client will think over our proposal.","ja":"顧客は私たちの提案を検討します。","focus":"think over","object":"our proposal"}
      ]},
      {"phrase":"think through","ja":"〜を最後まで考え抜く","image":"計画や問題の中を通って結論まで考えるイメージ。","pattern":"THINK THROUGH + issue / plan","examples":[
        {"en":"We need to think through the details.","ja":"私たちは詳細を最後まで考える必要があります。","focus":"think through","object":"the details"},
        {"en":"I thought through the schedule before I replied.","ja":"私は返信前にスケジュールをよく考えました。","focus":"thought through","object":"the schedule"},
        {"en":"Please think through the risk with the team.","ja":"チームと一緒にそのリスクをよく考えてください。","focus":"think through","object":"the risk"}
      ]},
      {"phrase":"think ahead","ja":"先を考える","image":"現在から先の予定・リスクへ視線を伸ばすイメージ。","pattern":"THINK AHEAD","examples":[
        {"en":"We should think ahead about inventory.","ja":"私たちは在庫について先を考えるべきです。","focus":"think ahead","object":"about inventory"},
        {"en":"He always thinks ahead before a big meeting.","ja":"彼は大きな会議の前にいつも先を考えます。","focus":"thinks ahead"},
        {"en":"Let's think ahead and prepare the documents now.","ja":"先を考えて、今のうちに資料を準備しましょう。","focus":"think ahead"}
      ]},
      {"phrase":"think back","ja":"思い返す","image":"頭の中で過去に戻るイメージ。","pattern":"THINK BACK TO + time / event","examples":[
        {"en":"Think back to the last customer complaint.","ja":"前回の顧客クレームを思い返してください。","focus":"Think back","object":"to the last customer complaint"},
        {"en":"We thought back to the previous project.","ja":"私たちは前回の案件を思い返しました。","focus":"thought back","object":"to the previous project"},
        {"en":"I need to think back before I answer.","ja":"私は回答する前に思い返す必要があります。","focus":"think back"}
      ]},
      {"phrase":"think up","ja":"考え出す・思いつく","image":"頭の中で新しい案を作るイメージ。","pattern":"THINK UP + idea / plan","examples":[
        {"en":"We need to think up a new campaign idea.","ja":"私たちは新しいキャンペーン案を考え出す必要があります。","focus":"think up","object":"a new campaign idea"},
        {"en":"She thought up a simple way to explain it.","ja":"彼女はそれを説明する簡単な方法を考え出しました。","focus":"thought up","object":"a simple way"},
        {"en":"Can you think up another option by Friday?","ja":"金曜日までに別の選択肢を考え出せますか？","focus":"think up","object":"another option"}
      ]},
      {"phrase":"think out","ja":"考え抜く・考えて形にする","image":"頭の中の案を外に出せる形まで考えるイメージ。","pattern":"THINK OUT + plan / details","examples":[
        {"en":"We have to think out the full plan before the meeting.","ja":"私たちは会議前に全体計画を考え抜く必要があります。","focus":"think out","object":"the full plan"},
        {"en":"He thought out the details carefully.","ja":"彼は詳細を慎重に考え抜きました。","focus":"thought out","object":"the details"},
        {"en":"Please think out the next step before you call the client.","ja":"顧客に電話する前に次の対応を考え抜いてください。","focus":"think out","object":"the next step"}
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
      {"id":"know-fact","title":"① know / 事実を知っている","pattern":"KNOW + fact / answer","transitivity":"他動詞","structure":"S + know + O","image":"必要な情報が自分の中にあるイメージ。","point":"理由・答え・状況を知っている時に使う。","examples":[
        {"en":"I know the reason for the delay.","ja":"私は遅延の理由を知っています。","focus":"know","object":"the reason"},
        {"en":"Do you know the delivery date?","ja":"あなたは納期を知っていますか？","focus":"know","object":"the delivery date"},
        {"en":"We know the client wants a quick reply.","ja":"私たちは顧客が早い返信を求めていることを知っています。","focus":"know","object":"the client wants a quick reply"}
      ]},
      {"id":"know-how","title":"② know how to / やり方が分かる","pattern":"KNOW HOW TO + verb","transitivity":"他動詞","structure":"S + know + how to V","image":"手順や方法が自分の中にあるイメージ。","point":"操作方法・説明方法・確認方法に使いやすい。","examples":[
        {"en":"I know how to use this system.","ja":"私はこのシステムの使い方が分かります。","focus":"know","object":"how to use this system"},
        {"en":"Do you know how to check the stock?","ja":"あなたは在庫の確認方法が分かりますか？","focus":"know","object":"how to check the stock"},
        {"en":"We know how to explain the difference.","ja":"私たちはその違いの説明方法が分かっています。","focus":"know","object":"how to explain the difference"}
      ]},
      {"id":"know-what","title":"③ know what to do / 何をすべきか分かる","pattern":"KNOW WHAT TO DO","transitivity":"他動詞","structure":"S + know + what to do","image":"次の行動が自分の中で見えているイメージ。","point":"トラブル時や確認後の行動に使いやすい。","examples":[
        {"en":"I know what to do next.","ja":"私は次に何をすべきか分かっています。","focus":"know","object":"what to do next"},
        {"en":"We don't know what to do without the drawing.","ja":"私たちは図面がないと何をすべきか分かりません。","focus":"know","object":"what to do"},
        {"en":"Do you know what to prepare for the meeting?","ja":"あなたは会議に何を準備すべきか分かりますか？","focus":"know","object":"what to prepare"}
      ]},
      {"id":"know-client","title":"④ know the client well / 顧客をよく知っている","pattern":"KNOW + O + well","transitivity":"他動詞","structure":"S + know + O + M","image":"対象について深い知識や経験があるイメージ。","point":"製品・顧客・市場・手順について詳しい時に使う。","examples":[
        {"en":"She knows the client well.","ja":"彼女はその顧客をよく知っています。","focus":"knows","object":"the client"},
        {"en":"We know this market very well.","ja":"私たちはこの市場をとてもよく知っています。","focus":"know","object":"this market"},
        {"en":"Do you know the process well enough to explain it?","ja":"あなたはそれを説明できるくらい、その手順をよく知っていますか？","focus":"know","object":"the process"}
      ]},
      {"id":"know-that","title":"⑤ know that / 〜だと知っている","pattern":"KNOW THAT + sentence","transitivity":"他動詞","structure":"S + know + that節","image":"事実が自分の中に入っているイメージ。","point":"thatは省略されることが多い。変更や事実確認に便利。","examples":[
        {"en":"We know that the schedule changed.","ja":"私たちはスケジュールが変更されたことを知っています。","focus":"know","object":"that the schedule changed"},
        {"en":"I knew the order was urgent.","ja":"私はその注文が急ぎだと知っていました。","focus":"knew","object":"the order was urgent"},
        {"en":"Do you know that the client approved it?","ja":"あなたは顧客がそれを承認したことを知っていますか？","focus":"know","object":"that the client approved it"}
      ]},
      {"id":"know-let-me","title":"⑥ let me know / 私に知らせる","pattern":"LET + person + KNOW","transitivity":"他動詞","structure":"let + O + know","image":"相手の中にある情報を自分へ知らせてもらうイメージ。","point":"メールやチャットで非常によく使う。KNOWページでは赤は know だけ。","examples":[
        {"en":"Please let me know when you receive the file.","ja":"あなたがファイルを受け取ったら私に知らせてください。","focus":"know","object":"when you receive the file"},
        {"en":"Could you let us know the final quantity?","ja":"最終数量を私たちに知らせていただけますか？","focus":"know","object":"the final quantity"},
        {"en":"I will let you know after I confirm it.","ja":"確認後にあなたへ知らせます。","focus":"know","object":"after I confirm it"}
      ]},
      {"id":"know-answer","title":"⑦ know the answer / 答えが分かる","pattern":"KNOW + answer / reason","transitivity":"他動詞","structure":"S + know + O","image":"必要な答えが自分の中にあるイメージ。","point":"answer, reason, cause, details と相性が良い。","examples":[
        {"en":"I don't know the answer yet.","ja":"私はまだ答えが分かりません。","focus":"know","object":"the answer"},
        {"en":"We need to know the cause before we reply.","ja":"私たちは返信前に原因を知る必要があります。","focus":"know","object":"the cause"},
        {"en":"Do you know the details of the request?","ja":"あなたはその依頼の詳細を知っていますか？","focus":"know","object":"the details"}
      ]},
      {"id":"know-person","title":"⑧ know someone / 人を知っている","pattern":"KNOW + person","transitivity":"他動詞","structure":"S + know + O","image":"人との接点や情報が自分の中にあるイメージ。","point":"meetは『会う』、knowは『知っている・面識がある』。","examples":[
        {"en":"I know the person in charge.","ja":"私は担当者を知っています。","focus":"know","object":"the person in charge"},
        {"en":"She knows someone at the supplier.","ja":"彼女はその仕入先に知り合いがいます。","focus":"knows","object":"someone"},
        {"en":"Do you know anyone who can check this?","ja":"あなたはこれを確認できる人を誰か知っていますか？","focus":"know","object":"anyone"}
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
      {"phrase":"know from","ja":"〜から分かる","image":"情報源から事実が分かるイメージ。","pattern":"KNOW FROM + source","examples":[
        {"en":"We know from the report that sales increased.","ja":"私たちは報告書から売上が増えたことが分かります。","focus":"know from","object":"the report"},
        {"en":"I knew from the email that the meeting was canceled.","ja":"私はメールから会議がキャンセルされたと分かりました。","focus":"knew from","object":"the email"},
        {"en":"You can know from the label which version it is.","ja":"ラベルからそれがどのバージョンか分かります。","focus":"know from","object":"the label"}
      ]},
      {"phrase":"know by","ja":"〜で分かる・見分ける","image":"名前や特徴を手がかりに分かるイメージ。","pattern":"KNOW + O + BY + clue","examples":[
        {"en":"You can know the version by the label.","ja":"ラベルでバージョンが分かります。","focus":"know by","object":"the label"},
        {"en":"We know the model by its code number.","ja":"私たちは型番でそのモデルを見分けます。","focus":"know by","object":"its code number"},
        {"en":"I knew the customer by the company name.","ja":"私は会社名でその顧客だと分かりました。","focus":"knew by","object":"the company name"}
      ]},
      {"phrase":"know as","ja":"〜として知られている","image":"名前や役割として周りに知られているイメージ。","pattern":"KNOW AS + name / role","examples":[
        {"en":"This product is known as a durable option.","ja":"この製品は耐久性のある選択肢として知られています。","focus":"known as","object":"a durable option"},
        {"en":"He is known as the person in charge of this project.","ja":"彼はこの案件の担当者として知られています。","focus":"known as","object":"the person in charge"},
        {"en":"The area is known as a busy shopping district.","ja":"そのエリアはにぎやかな商業地区として知られています。","focus":"known as","object":"a busy shopping district"}
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
    "core": "心・体・直感で感じる",
    "coreDetail": "FEELは、体の感覚、気持ち、印象、直感を自分の中で感じる動詞です。仕事では『〜だと感じる』『不安に感じる』『遠慮なく〜してください』『〜したい気がする』など、相手にやわらかく伝える表現にもなります。",
    "coreVisual": {
      "from": ["💭 印象", "😊 気持ち", "⚠️ 不安", "🤝 雰囲気", "💡 直感"],
      "to": "自分の心・体の感覚",
      "label": "外の状況・内側の変化 → 感覚として入る"
    },
    "meanings": [
      {"id":"feel-comfortable","title":"① feel comfortable / 安心している・抵抗がない","pattern":"FEEL + adjective","transitivity":"自動詞","structure":"S + feel + C","image":"自分の心や体がその状態にあるイメージ。","point":"comfortable, confident, unsure, nervous など形容詞と使う。","examples":[
        {"en":"I feel comfortable with this schedule.","ja":"私はこのスケジュールで問題ないと感じています。","focus":"feel","object":"comfortable"},
        {"en":"She felt nervous before the client meeting.","ja":"彼女は顧客との会議前に緊張を感じました。","focus":"felt","object":"nervous"},
        {"en":"Do you feel confident about the presentation?","ja":"あなたはそのプレゼンに自信がありますか？","focus":"feel","object":"confident"}
      ]},
      {"id":"feel-difference","title":"② feel the difference / 違いを感じる","pattern":"FEEL + noun","transitivity":"他動詞","structure":"S + feel + O","image":"違いや変化を感覚として受け取るイメージ。","point":"difference, pressure, stress, concern などとよく使う。","examples":[
        {"en":"Can you feel the difference in brightness?","ja":"明るさの違いを感じられますか？","focus":"feel","object":"the difference"},
        {"en":"We felt pressure before the presentation.","ja":"私たちはプレゼン前にプレッシャーを感じました。","focus":"felt","object":"pressure"},
        {"en":"The team feels some concern about the deadline.","ja":"チームはその締切について少し懸念を感じています。","focus":"feels","object":"some concern"}
      ]},
      {"id":"feel-necessary","title":"③ feel it is necessary / 必要だと感じる","pattern":"FEEL + sentence","transitivity":"他動詞","structure":"S + feel + sentence","image":"状況から受けた印象を判断として伝えるイメージ。","point":"thinkより感覚・印象寄り。ビジネスでは柔らかく意見を言える。","examples":[
        {"en":"I feel it is necessary to confirm the quantity again.","ja":"私は数量をもう一度確認する必要があると感じています。","focus":"feel","object":"it is necessary"},
        {"en":"We felt the price was still high.","ja":"私たちは価格がまだ高いと感じました。","focus":"felt","object":"the price was still high"},
        {"en":"Do you feel the client understood our point?","ja":"あなたは顧客が私たちの要点を理解したと感じますか？","focus":"feel","object":"the client understood our point"}
      ]},
      {"id":"feel-free","title":"④ feel free to / 遠慮なく〜する","pattern":"FEEL FREE TO + verb","transitivity":"自動詞","structure":"feel free to V","image":"相手が自由に動ける状態を感じられるようにするイメージ。","point":"メールで非常によく使う丁寧表現。Please feel free to contact me. が定番。","examples":[
        {"en":"Please feel free to contact me if you have any questions.","ja":"ご質問があれば、遠慮なく私にご連絡ください。","focus":"feel","object":"free to contact me"},
        {"en":"Please feel free to ask us about the specification.","ja":"仕様について遠慮なく私たちにご質問ください。","focus":"feel","object":"free to ask us"},
        {"en":"Feel free to share your opinion in the meeting.","ja":"会議では遠慮なくあなたの意見を共有してください。","focus":"Feel","object":"free to share your opinion"}
      ]},
      {"id":"feel-unsure","title":"⑤ feel unsure / 不安に感じる","pattern":"FEEL + adjective","transitivity":"自動詞","structure":"S + feel + C","image":"状況に対して心が不安定に反応するイメージ。","point":"unsure, worried, relieved, ready など仕事でも使いやすい。","examples":[
        {"en":"I feel unsure about the delivery date.","ja":"私は納期について不安を感じています。","focus":"feel","object":"unsure"},
        {"en":"We felt relieved after receiving approval.","ja":"私たちは承認を得て安心しました。","focus":"felt","object":"relieved"},
        {"en":"Do you feel ready for the meeting?","ja":"あなたは会議の準備ができていると感じますか？","focus":"feel","object":"ready"}
      ]},
      {"id":"feel-better","title":"⑥ feel better / 良く感じる・安心する","pattern":"FEEL + better","transitivity":"自動詞","structure":"S + feel + C","image":"状態が前より良く感じられるイメージ。","point":"体調にも、状況への安心感にも使える。","examples":[
        {"en":"I feel better after confirming the schedule.","ja":"私はスケジュールを確認した後、安心しました。","focus":"feel","object":"better"},
        {"en":"She felt better after talking with her manager.","ja":"彼女は上司と話した後、気持ちが楽になりました。","focus":"felt","object":"better"},
        {"en":"Do you feel better about the plan now?","ja":"あなたは今、その計画について前より安心していますか？","focus":"feel","object":"better"}
      ]},
      {"id":"feel-strongly","title":"⑦ feel strongly / 強く感じる","pattern":"FEEL + adverb","transitivity":"自動詞","structure":"S + feel + M","image":"気持ちや判断が強く出ているイメージ。","point":"strongly, differently, clearly などと使う。","examples":[
        {"en":"We feel strongly that this issue should be fixed.","ja":"私たちはこの問題は修正すべきだと強く感じています。","focus":"feel","object":"strongly"},
        {"en":"I felt differently after hearing the explanation.","ja":"私は説明を聞いた後、違う印象を持ちました。","focus":"felt","object":"differently"},
        {"en":"Do you feel clearly that the proposal is ready?","ja":"あなたはその提案の準備ができているとはっきり感じますか？","focus":"feel","object":"clearly"}
      ]},
      {"id":"feel-need","title":"⑧ feel the need to / 〜する必要を感じる","pattern":"FEEL THE NEED TO + verb","transitivity":"他動詞","structure":"S + feel + O","image":"必要性を感覚として強く受け取るイメージ。","point":"少し硬め。判断理由を丁寧に伝える時に使える。","examples":[
        {"en":"We feel the need to confirm the quantity again.","ja":"私たちは数量をもう一度確認する必要を感じています。","focus":"feel","object":"the need to confirm the quantity"},
        {"en":"I felt the need to explain the risk clearly.","ja":"私はリスクを明確に説明する必要を感じました。","focus":"felt","object":"the need to explain the risk"},
        {"en":"Do you feel the need to update the customer today?","ja":"あなたは今日顧客に最新状況を伝える必要を感じますか？","focus":"feel","object":"the need to update the customer"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"feel like","ja":"〜のように感じる・〜したい気がする","image":"気持ちがある方向へ向くイメージ。","pattern":"FEEL LIKE + noun / -ing / sentence","examples":[
        {"en":"I feel like we should call the client first.","ja":"私はまず顧客に電話した方がよい気がします。","focus":"feel like","object":"we should call the client first"},
        {"en":"She felt like the meeting went well.","ja":"彼女は会議がうまくいったように感じました。","focus":"felt like","object":"the meeting went well"},
        {"en":"Do you feel like reviewing the document again?","ja":"あなたは資料をもう一度確認したい気がしますか？","focus":"feel like","object":"reviewing the document again"}
      ]},
      {"phrase":"feel about","ja":"〜についてどう感じる","image":"あるテーマに対する気持ちや印象を持つイメージ。","pattern":"FEEL ABOUT + topic","examples":[
        {"en":"How do you feel about the new design?","ja":"あなたは新しいデザインについてどう感じますか？","focus":"feel about","object":"the new design"},
        {"en":"I feel good about the proposal.","ja":"私はその提案に良い感触を持っています。","focus":"feel about","object":"the proposal"},
        {"en":"We don't feel comfortable about the deadline.","ja":"私たちはその締切に不安を感じています。","focus":"feel about","object":"the deadline"}
      ]},
      {"phrase":"feel for","ja":"〜に同情する・手探りで探す","image":"相手の気持ちに触れる、または手で探るイメージ。","pattern":"FEEL FOR + person / thing","examples":[
        {"en":"I feel for the team because the schedule is tight.","ja":"スケジュールが厳しいので、私はチームに同情します。","focus":"feel for","object":"the team"},
        {"en":"We felt for the customer after hearing the complaint.","ja":"私たちはクレームを聞いて顧客に同情しました。","focus":"felt for","object":"the customer"},
        {"en":"He felt for the switch in the dark room.","ja":"彼は暗い部屋でスイッチを手探りで探しました。","focus":"felt for","object":"the switch"}
      ]},
      {"phrase":"feel out","ja":"探りを入れる","image":"相手の反応を少しずつ探るイメージ。","pattern":"FEEL OUT + person / reaction","examples":[
        {"en":"We should feel out the client's reaction before we propose the change.","ja":"変更を提案する前に顧客の反応を探るべきです。","focus":"feel out","object":"the client's reaction"},
        {"en":"I felt out the team before setting the schedule.","ja":"私はスケジュールを決める前にチームの反応を探りました。","focus":"felt out","object":"the team"},
        {"en":"Please feel out the supplier about the new condition.","ja":"新しい条件について仕入先の反応を探ってください。","focus":"feel out","object":"the supplier"}
      ]},
      {"phrase":"feel up to","ja":"〜する気力・体力がある","image":"自分の状態がその行動に届いているイメージ。","pattern":"FEEL UP TO + noun / -ing","examples":[
        {"en":"I don't feel up to another meeting today.","ja":"私は今日これ以上会議をする気力がありません。","focus":"feel up to","object":"another meeting"},
        {"en":"Do you feel up to calling the client now?","ja":"あなたは今顧客に電話する気力がありますか？","focus":"feel up to","object":"calling the client"},
        {"en":"She felt up to presenting the proposal.","ja":"彼女はその提案を発表する気力がありました。","focus":"felt up to","object":"presenting the proposal"}
      ]},
      {"phrase":"feel around","ja":"手探りで探す","image":"手や感覚で周りを探るイメージ。","pattern":"FEEL AROUND + place","examples":[
        {"en":"He felt around for the cable behind the sign.","ja":"彼はサインの裏でケーブルを手探りで探しました。","focus":"felt around","object":"for the cable"},
        {"en":"I felt around the panel to find the switch.","ja":"私はスイッチを見つけるためにパネル周りを手探りで探しました。","focus":"felt around","object":"the panel"},
        {"en":"Please feel around carefully before moving the part.","ja":"部品を動かす前に慎重に手探りで確認してください。","focus":"feel around","object":"carefully"}
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
    "coreDetail": "WORKは、人が働く、機械や仕組みが機能する、方法がうまくいく、課題に取り組む、という意味まで広く使います。共通するイメージは『止まらずに動いて、役に立つ状態になる』です。",
    "coreVisual": {"from":["👤 人","🤝 チーム","⚙️ 仕組み","📝 方法","💻 システム"],"to":"成果・解決・機能","label":"目的に向かって動く → 役に立つ"},
    "meanings": [
      {"id":"work-job","title":"① work / 働く・仕事をする","pattern":"WORK","transitivity":"自動詞","structure":"S + work","image":"人が仕事として動いているイメージ。","point":"work in sales, work for a company, work as a manager のように、職種・会社・立場を説明できます。","examples":[
        {"en":"I work in sales at a lighting company.","ja":"私は照明会社で営業として働いています。","focus":"work","object":"in sales at a lighting company"},
        {"en":"She works for a supplier in Singapore.","ja":"彼女はシンガポールの仕入先で働いています。","focus":"works","object":"for a supplier in Singapore"},
        {"en":"He worked as a project manager last year.","ja":"彼は昨年、プロジェクトマネージャーとして働いていました。","focus":"worked","object":"as a project manager"}
      ]},
      {"id":"work-function","title":"② work / 機能する・動く","pattern":"WORK","transitivity":"自動詞","structure":"S + work","image":"機械・仕組み・方法がちゃんと動くイメージ。","point":"機器、アプリ、方法、計画が『機能する』時に使います。","examples":[
        {"en":"The remote controller works correctly now.","ja":"リモコンは今、正しく動いています。","focus":"works","object":"correctly"},
        {"en":"This app does not work after login.","ja":"このアプリはログイン後に正常に動きません。","focus":"work","object":"after login"},
        {"en":"The new process worked well for the team.","ja":"新しい手順はチームにとってうまく機能しました。","focus":"worked","object":"well"}
      ]},
      {"id":"work-well","title":"③ work well / うまくいく","pattern":"WORK WELL","transitivity":"自動詞","structure":"S + work + adverb","image":"方法や提案がスムーズに成果へ進むイメージ。","point":"提案・スケジュール・方法が問題なく合う時に便利です。","examples":[
        {"en":"I think this idea will work well.","ja":"私はこの案はうまくいくと思います。","focus":"work","object":"well"},
        {"en":"The meeting format worked well last time.","ja":"前回、その会議形式はうまくいきました。","focus":"worked","object":"well"},
        {"en":"Will this arrangement work for the client?","ja":"この段取りは顧客にとって問題なさそうですか？","focus":"work","object":"for the client"}
      ]},
      {"id":"work-properly","title":"④ work properly / 正しく動く","pattern":"WORK PROPERLY","transitivity":"自動詞","structure":"S + work + adverb","image":"想定どおりに動作しているイメージ。","point":"機器・システム・アプリの確認でよく使います。","examples":[
        {"en":"The system is working properly now.","ja":"システムは今、正しく動いています。","focus":"working","object":"properly"},
        {"en":"Please check if the dimmer works properly.","ja":"調光器が正しく動くか確認してください。","focus":"works","object":"properly"},
        {"en":"The login button did not work yesterday.","ja":"昨日、ログインボタンが動きませんでした。","focus":"work","object":"yesterday"}
      ]},
      {"id":"work-hard","title":"⑤ work hard / 一生懸命働く・努力する","pattern":"WORK HARD","transitivity":"自動詞","structure":"S + work + adverb","image":"力を入れて行動し続けるイメージ。","point":"人の努力を表す基本表現です。","examples":[
        {"en":"We worked hard to finish the proposal.","ja":"私たちは提案書を仕上げるために一生懸命取り組みました。","focus":"worked","object":"hard"},
        {"en":"She works hard every day.","ja":"彼女は毎日一生懸命働いています。","focus":"works","object":"hard"},
        {"en":"I need to work harder on my English.","ja":"私は英語にもっと一生懸命取り組む必要があります。","focus":"work","object":"harder"}
      ]},
      {"id":"work-late","title":"⑥ work late / 遅くまで働く","pattern":"WORK + time expression","transitivity":"自動詞","structure":"S + work + time expression","image":"働く時間の長さや時間帯を表すイメージ。","point":"work late, work overtime, work from home など、働き方を説明できます。","examples":[
        {"en":"I worked late to finish the report.","ja":"私は報告書を終わらせるために遅くまで働きました。","focus":"worked","object":"late"},
        {"en":"She works from home on Fridays.","ja":"彼女は金曜日に在宅勤務をしています。","focus":"works","object":"from home"},
        {"en":"We may need to work overtime this week.","ja":"私たちは今週、残業する必要があるかもしれません。","focus":"work","object":"overtime"}
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
      {"phrase":"work out","ja":"うまくいく・解決する","image":"問題がほどけて結果が見えるイメージ。","pattern":"WORK OUT","examples":[
        {"en":"I hope the schedule works out.","ja":"私はそのスケジュールがうまくいくことを願っています。","focus":"works out","object":"the schedule"},
        {"en":"The delivery issue worked out in the end.","ja":"納品の問題は最終的に解決しました。","focus":"worked out","object":"the delivery issue"},
        {"en":"Did everything work out with the customer?","ja":"顧客との件はすべてうまくいきましたか？","focus":"work out","object":"with the customer"}
      ]},
      {"phrase":"work through","ja":"〜を処理する・乗り越える","image":"難しいものを一つずつ通り抜けるイメージ。","pattern":"WORK THROUGH + issue / list","examples":[
        {"en":"Let's work through the checklist together.","ja":"チェックリストを一緒に一つずつ確認しましょう。","focus":"work through","object":"the checklist"},
        {"en":"We worked through the problem before the deadline.","ja":"私たちは締切前にその問題を処理しました。","focus":"worked through","object":"the problem"},
        {"en":"She is working through the customer comments.","ja":"彼女は顧客コメントを一つずつ確認しています。","focus":"working through","object":"the customer comments"}
      ]},
      {"phrase":"work around","ja":"〜を回避して対応する","image":"障害物を避けて別ルートで進むイメージ。","pattern":"WORK AROUND + problem","examples":[
        {"en":"We need to work around the delivery delay.","ja":"私たちは納品遅延を回避して対応する必要があります。","focus":"work around","object":"the delivery delay"},
        {"en":"The team worked around the system error.","ja":"チームはシステムエラーを回避して対応しました。","focus":"worked around","object":"the system error"},
        {"en":"Can we work around this limitation?","ja":"この制限を回避して対応できますか？","focus":"work around","object":"this limitation"}
      ]},
      {"phrase":"work toward","ja":"〜に向けて取り組む","image":"目標へ向かって動き続けるイメージ。","pattern":"WORK TOWARD + goal","examples":[
        {"en":"We are working toward the launch date.","ja":"私たちはリリース日に向けて取り組んでいます。","focus":"working toward","object":"the launch date"},
        {"en":"He worked toward a better solution.","ja":"彼はより良い解決策に向けて取り組みました。","focus":"worked toward","object":"a better solution"},
        {"en":"Let's work toward a clear decision today.","ja":"今日は明確な決定に向けて進めましょう。","focus":"work toward","object":"a clear decision"}
      ]},
      {"phrase":"work into","ja":"〜に組み込む","image":"内容を別のものの中へ入れてなじませるイメージ。","pattern":"WORK INTO + plan / document","examples":[
        {"en":"Please work the new condition into the proposal.","ja":"新しい条件を提案書に組み込んでください。","focus":"work into","object":"the proposal"},
        {"en":"We worked the customer's request into the design.","ja":"私たちは顧客の要望をデザインに組み込みました。","focus":"worked into","object":"the design"},
        {"en":"Can you work this point into the meeting agenda?","ja":"この点を会議の議題に組み込めますか？","focus":"work into","object":"the meeting agenda"}
      ]},
      {"phrase":"work up","ja":"徐々に作る・高める","image":"少しずつ積み上げて状態を作るイメージ。","pattern":"WORK UP + idea / courage","examples":[
        {"en":"I worked up a simple draft for the client.","ja":"私は顧客向けに簡単な草案を作りました。","focus":"worked up","object":"a simple draft"},
        {"en":"She worked up the courage to ask for help.","ja":"彼女は助けを求める勇気を出しました。","focus":"worked up","object":"the courage"},
        {"en":"Can you work up a rough estimate by tomorrow?","ja":"明日までに概算見積を作れますか？","focus":"work up","object":"a rough estimate"}
      ]},
      {"phrase":"work off","ja":"〜を解消する・減らす","image":"余分なものを動いて落とすイメージ。","pattern":"WORK OFF + stress / debt / excess","examples":[
        {"en":"I went for a walk to work off stress.","ja":"私はストレスを解消するために散歩しました。","focus":"work off","object":"stress"},
        {"en":"The team worked off the backlog last week.","ja":"チームは先週、滞留していた作業を減らしました。","focus":"worked off","object":"the backlog"},
        {"en":"We need to work off the remaining tasks today.","ja":"私たちは今日、残りの作業を片付ける必要があります。","focus":"work off","object":"the remaining tasks"}
      ]},
      {"phrase":"work back from","ja":"〜から逆算する","image":"ゴールから手順を逆向きにたどるイメージ。","pattern":"WORK BACK FROM + goal / date","examples":[
        {"en":"Let's work back from the delivery date.","ja":"納品日から逆算しましょう。","focus":"work back from","object":"the delivery date"},
        {"en":"We worked back from the event date to make the schedule.","ja":"私たちはイベント日から逆算してスケジュールを作りました。","focus":"worked back from","object":"the event date"},
        {"en":"Please work back from the customer's deadline.","ja":"顧客の締切から逆算してください。","focus":"work back from","object":"the customer's deadline"}
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
    "core": "道具・情報・時間を目的のために使う",
    "coreDetail": "USEは、物・情報・時間・方法を目的のために活用する動詞です。仕事では、データを使う、資料を使う、ツールを使う、時間を有効に使う、という形で非常によく使います。",
    "coreVisual": {"from":["🔧 道具","📊 データ","⏰ 時間","📄 資料","💡 方法"],"to":"目的・成果","label":"手段を目的へ向けて使う"},
    "meanings": [
      {"id":"use-tool","title":"① use / 物・道具を使う","pattern":"USE + thing","transitivity":"他動詞","structure":"S + use + O","image":"手元の道具を目的のために動かすイメージ。","point":"tool, system, app, software, file などとよく使います。","examples":[
        {"en":"We use this system to manage orders.","ja":"私たちは注文を管理するためにこのシステムを使っています。","focus":"use","object":"this system"},
        {"en":"I used the app to check my progress.","ja":"私は進捗を確認するためにそのアプリを使いました。","focus":"used","object":"the app"},
        {"en":"Can you use this tool for the report?","ja":"あなたは報告書にこのツールを使えますか？","focus":"use","object":"this tool"}
      ]},
      {"id":"use-data","title":"② use data / データ・情報を活用する","pattern":"USE + data / information","transitivity":"他動詞","structure":"S + use + O","image":"情報を判断材料として活用するイメージ。","point":"data, information, feedback, results と相性が良いです。","examples":[
        {"en":"We used the sales data for the meeting.","ja":"私たちは会議のために売上データを使いました。","focus":"used","object":"the sales data"},
        {"en":"Please use the latest information in the proposal.","ja":"提案書には最新情報を使ってください。","focus":"use","object":"the latest information"},
        {"en":"I will use the customer's feedback to improve the document.","ja":"私は資料を改善するために顧客のフィードバックを使います。","focus":"use","object":"the customer's feedback"}
      ]},
      {"id":"use-time","title":"③ use time / 時間を使う","pattern":"USE + time","transitivity":"他動詞","structure":"S + use + O","image":"限られた時間を目的のために充てるイメージ。","point":"use time wisely, use the morning to ... など、時間配分に使えます。","examples":[
        {"en":"Let's use this time to confirm the details.","ja":"この時間を使って詳細を確認しましょう。","focus":"use","object":"this time"},
        {"en":"I used the morning to prepare the estimate.","ja":"私は午前中を使って見積書を準備しました。","focus":"used","object":"the morning"},
        {"en":"We need to use our time effectively before the deadline.","ja":"私たちは締切前に時間を有効に使う必要があります。","focus":"use","object":"our time"}
      ]},
      {"id":"use-power","title":"④ use power / 電力・資源を使う","pattern":"USE + resource","transitivity":"他動詞","structure":"S + use + O","image":"電力・材料・予算などを消費するイメージ。","point":"照明・設備・在庫・コストの話で便利です。","examples":[
        {"en":"This product uses less power than the old model.","ja":"この製品は旧モデルより消費電力が少ないです。","focus":"uses","object":"less power"},
        {"en":"The sign uses three LED modules.","ja":"そのサインはLEDモジュールを3個使います。","focus":"uses","object":"three LED modules"},
        {"en":"We used too much material for the sample.","ja":"私たちはサンプルに材料を使いすぎました。","focus":"used","object":"too much material"}
      ]},
      {"id":"use-to-do","title":"⑤ use A to do / 〜するためにAを使う","pattern":"USE A TO DO","transitivity":"他動詞","structure":"S + use + O + to V","image":"目的に向けて道具を使うイメージ。","point":"何のために使うのかを to do で説明します。","examples":[
        {"en":"We use photos to explain the installation method.","ja":"私たちは施工方法を説明するために写真を使います。","focus":"use","object":"photos"},
        {"en":"I used a checklist to avoid mistakes.","ja":"私はミスを避けるためにチェックリストを使いました。","focus":"used","object":"a checklist"},
        {"en":"Can you use this file to update the quote?","ja":"あなたは見積を更新するためにこのファイルを使えますか？","focus":"use","object":"this file"}
      ]},
      {"id":"use-latest","title":"⑥ use the latest file / 最新のものを使う","pattern":"USE + latest / correct + noun","transitivity":"他動詞","structure":"S + use + O","image":"正しい材料を選んで使うイメージ。","point":"見積・図面・資料の版管理でよく使います。","examples":[
        {"en":"Please use the latest file for the estimate.","ja":"見積には最新ファイルを使ってください。","focus":"use","object":"the latest file"},
        {"en":"I used the wrong version by mistake.","ja":"私は間違えて古い版を使ってしまいました。","focus":"used","object":"the wrong version"},
        {"en":"We should use the correct product code.","ja":"私たちは正しい品番を使うべきです。","focus":"use","object":"the correct product code"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"use up","ja":"〜を使い切る","image":"手元の資源を最後まで使うイメージ。","pattern":"USE UP + resource","examples":[
        {"en":"We used up all the samples last week.","ja":"私たちは先週、すべてのサンプルを使い切りました。","focus":"used up","object":"all the samples"},
        {"en":"Please don't use up the remaining stock.","ja":"残りの在庫を使い切らないでください。","focus":"use up","object":"the remaining stock"},
        {"en":"The project used up more time than expected.","ja":"その案件は予想以上に時間を使いました。","focus":"used up","object":"more time"}
      ]},
      {"phrase":"use for","ja":"〜に使う","image":"使い道を目的へ向けるイメージ。","pattern":"USE + thing + FOR + purpose","examples":[
        {"en":"We use this material for outdoor signs.","ja":"私たちはこの材料を屋外サインに使います。","focus":"use for","object":"outdoor signs"},
        {"en":"Can we use this image for the presentation?","ja":"この画像をプレゼン資料に使えますか？","focus":"use for","object":"the presentation"},
        {"en":"They used the sample for color checking.","ja":"彼らは色確認のためにサンプルを使いました。","focus":"used for","object":"color checking"}
      ]},
      {"phrase":"use as","ja":"〜として使う","image":"ものに役割を与えて使うイメージ。","pattern":"USE + thing + AS + role","examples":[
        {"en":"We can use this drawing as a reference.","ja":"私たちはこの図面を参考資料として使えます。","focus":"use as","object":"a reference"},
        {"en":"I used the old estimate as a template.","ja":"私は古い見積書をテンプレートとして使いました。","focus":"used as","object":"a template"},
        {"en":"Please use this number as a rough guide.","ja":"この数字を大まかな目安として使ってください。","focus":"use as","object":"a rough guide"}
      ]},
      {"phrase":"use with","ja":"〜と一緒に使う","image":"別のものと組み合わせて使うイメージ。","pattern":"USE + thing + WITH + thing","examples":[
        {"en":"Use this controller with the new LED module.","ja":"このコントローラーを新しいLEDモジュールと一緒に使ってください。","focus":"use with","object":"the new LED module"},
        {"en":"We used the sample with a different power supply.","ja":"私たちは別の電源と一緒にサンプルを使いました。","focus":"used with","object":"a different power supply"},
        {"en":"Can we use this part with the existing system?","ja":"この部品を既存システムと一緒に使えますか？","focus":"use with","object":"the existing system"}
      ]},
      {"phrase":"use on","ja":"〜に使う・適用する","image":"対象の表面や用途に当てるイメージ。","pattern":"USE + thing + ON + target","examples":[
        {"en":"Do not use this cleaner on acrylic.","ja":"この洗剤をアクリルに使わないでください。","focus":"use on","object":"acrylic"},
        {"en":"We used the new tape on the sample sign.","ja":"私たちはサンプルサインに新しいテープを使いました。","focus":"used on","object":"the sample sign"},
        {"en":"Can we use this finish on the front panel?","ja":"この仕上げを前面パネルに使えますか？","focus":"use on","object":"the front panel"}
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
      {"id":"start-time","title":"③ start at / 〜時に始まる","pattern":"START AT + time","transitivity":"自動詞","structure":"S + start + at time","image":"予定がある時刻から動き出すイメージ。","point":"時間には at、曜日や日付には on を使います。","examples":[
        {"en":"The meeting starts at ten.","ja":"会議は10時に始まります。","focus":"starts","object":"at ten"},
        {"en":"The training started at nine thirty.","ja":"研修は9時30分に始まりました。","focus":"started","object":"at nine thirty"},
        {"en":"What time does the call start?","ja":"その電話会議は何時に始まりますか？","focus":"start","object":"what time"}
      ]},
      {"id":"start-production","title":"④ start production / 生産を開始する","pattern":"START + production / process","transitivity":"他動詞","structure":"S + start + O","image":"業務や工程を動かし始めるイメージ。","point":"start production, start delivery, start installation など業務で使いやすいです。","examples":[
        {"en":"The factory will start production next month.","ja":"工場は来月、生産を開始します。","focus":"start","object":"production"},
        {"en":"We started the installation in the morning.","ja":"私たちは午前中に施工を開始しました。","focus":"started","object":"the installation"},
        {"en":"Please start the approval process today.","ja":"今日、承認プロセスを開始してください。","focus":"start","object":"the approval process"}
      ]},
      {"id":"start-work","title":"⑤ start work / 仕事を始める","pattern":"START WORK","transitivity":"他動詞的表現","structure":"S + start + work","image":"仕事モードへ動き出すイメージ。","point":"start work, start working の両方が使えます。","examples":[
        {"en":"I start work at nine every day.","ja":"私は毎日9時に仕事を始めます。","focus":"start","object":"work"},
        {"en":"We started working on the estimate after the meeting.","ja":"私たちは会議後に見積作成を始めました。","focus":"started","object":"working on the estimate"},
        {"en":"Can you start work on this issue now?","ja":"あなたは今この問題に取りかかれますか？","focus":"start","object":"work on this issue"}
      ]},
      {"id":"start-preparing","title":"⑥ start preparing / 準備を始める","pattern":"START + -ING","transitivity":"他動詞","structure":"S + start + V-ing","image":"準備作業が動き出すイメージ。","point":"今から準備を始める、早めに準備するなどに使いやすいです。","examples":[
        {"en":"Let's start preparing for the presentation.","ja":"プレゼンの準備を始めましょう。","focus":"start","object":"preparing for the presentation"},
        {"en":"I started checking the stock this morning.","ja":"私は今朝、在庫確認を始めました。","focus":"started","object":"checking the stock"},
        {"en":"We should start reviewing the contract soon.","ja":"私たちはそろそろ契約書の確認を始めるべきです。","focus":"start","object":"reviewing the contract"}
      ]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"start with","ja":"〜から始める","image":"最初に扱うものを手に取って始めるイメージ。","pattern":"START WITH + item","examples":[
        {"en":"Let's start with the delivery schedule.","ja":"納品スケジュールから始めましょう。","focus":"start with","object":"the delivery schedule"},
        {"en":"I will start with a short summary.","ja":"私は短い要約から始めます。","focus":"start with","object":"a short summary"},
        {"en":"Can we start with the customer's question?","ja":"顧客からの質問から始めてもよいですか？","focus":"start with","object":"the customer's question"}
      ]},
      {"phrase":"start from","ja":"〜から始める","image":"出発点や基準点から動き出すイメージ。","pattern":"START FROM + point","examples":[
        {"en":"Let's start from the main issue.","ja":"主な問題から始めましょう。","focus":"start from","object":"the main issue"},
        {"en":"We should start from the customer's request.","ja":"私たちは顧客の要望から始めるべきです。","focus":"start from","object":"the customer's request"},
        {"en":"Please start from page two of the document.","ja":"資料の2ページ目から始めてください。","focus":"start from","object":"page two"}
      ]},
      {"phrase":"start up","ja":"起動する・立ち上げる","image":"機械や事業が動き始めるイメージ。","pattern":"START UP + system / business","examples":[
        {"en":"Please start up the system before the test.","ja":"テスト前にシステムを起動してください。","focus":"start up","object":"the system"},
        {"en":"The machine started up without any problem.","ja":"機械は問題なく起動しました。","focus":"started up","object":"the machine"},
        {"en":"They started up a new service last year.","ja":"彼らは昨年、新しいサービスを立ち上げました。","focus":"started up","object":"a new service"}
      ]},
      {"phrase":"start over","ja":"最初からやり直す","image":"スタート地点へ戻ってもう一度始めるイメージ。","pattern":"START OVER","examples":[
        {"en":"We may need to start over with the layout.","ja":"私たちはレイアウトを最初からやり直す必要があるかもしれません。","focus":"start over","object":"with the layout"},
        {"en":"I started over after finding the mistake.","ja":"私はミスを見つけた後、最初からやり直しました。","focus":"started over","object":"after finding the mistake"},
        {"en":"Let's start over and check the data again.","ja":"最初からやり直して、データをもう一度確認しましょう。","focus":"start over","object":"and check the data again"}
      ]},
      {"phrase":"start off","ja":"始める・始まる","image":"最初の一歩を踏み出すイメージ。","pattern":"START OFF + with / by","examples":[
        {"en":"Let's start off with a quick update.","ja":"簡単な進捗共有から始めましょう。","focus":"start off","object":"with a quick update"},
        {"en":"The meeting started off smoothly.","ja":"会議は順調に始まりました。","focus":"started off","object":"smoothly"},
        {"en":"We started off by checking the stock.","ja":"私たちは在庫確認から始めました。","focus":"started off","object":"by checking the stock"}
      ]},
      {"phrase":"start out","ja":"始める・出発する","image":"最初の状態から進み出すイメージ。","pattern":"START OUT + as / with","examples":[
        {"en":"The project started out as a small request.","ja":"その案件は小さな依頼として始まりました。","focus":"started out","object":"as a small request"},
        {"en":"I started out in sales before moving to planning.","ja":"私は企画に移る前、営業から始めました。","focus":"started out","object":"in sales"},
        {"en":"We started out with a simple design.","ja":"私たちはシンプルなデザインから始めました。","focus":"started out","object":"with a simple design"}
      ]},
      {"phrase":"start on","ja":"〜に取りかかる","image":"作業の上に乗って動き出すイメージ。","pattern":"START ON + task","examples":[
        {"en":"Can you start on the estimate today?","ja":"あなたは今日、見積に取りかかれますか？","focus":"start on","object":"the estimate"},
        {"en":"We started on the report after lunch.","ja":"私たちは昼食後に報告書に取りかかりました。","focus":"started on","object":"the report"},
        {"en":"Please start on the sample list first.","ja":"まずサンプルリストに取りかかってください。","focus":"start on","object":"the sample list"}
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
  "core": "動いているもの・続いている状態をそこで止める",
  "coreDetail": "STOPは、作業・販売・問題・習慣など、続いている流れをそこで止めるイメージです。仕事では『作業を止める』『使用をやめる』『問題を防ぐ』、日常では『立ち止まる』『立ち寄る』まで広がります。",
  "coreVisual": {
    "from": [
      "▶️ 進行中の作業",
      "🔁 続いている習慣",
      "⚠️ 広がる問題",
      "🚚 動いている配送"
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
      "point": "work, production, shipment, meeting などと使いやすい。",
      "examples": [
        {
          "en": "Please stop the shipment until we confirm the details.",
          "ja": "詳細を確認するまで出荷を止めてください。",
          "focus": "stop",
          "object": "the shipment"
        },
        {
          "en": "We stopped the test because the result was unstable.",
          "ja": "結果が不安定だったため、私たちはテストを止めました。",
          "focus": "stopped",
          "object": "the test"
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
          "en": "Please stop the car near the station.",
          "ja": "駅の近くで車を止めてください。",
          "focus": "stop",
          "object": "the car"
        },
        {
          "en": "I stopped the video to check the subtitles.",
          "ja": "字幕を確認するために動画を止めました。",
          "focus": "stopped",
          "object": "the video"
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
          "en": "Please stop sending the file before we review it.",
          "ja": "私たちが確認する前に、そのファイルを送るのはやめてください。",
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
          "ja": "夜にコーヒーを飲むのをやめました。",
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
      "image": "動きや作業を止めて、別の行動に入るイメージ。",
      "point": "stop doing と混同しやすい重要表現。",
      "examples": [
        {
          "en": "We stopped to check the installation drawing.",
          "ja": "私たちは施工図を確認するために手を止めました。",
          "focus": "stopped",
          "object": "to check the installation drawing"
        },
        {
          "en": "I stopped to call the customer before sending the quote.",
          "ja": "見積を送る前に顧客へ電話するため、私は一度手を止めました。",
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
          "ja": "夕日を撮るために立ち止まりました。",
          "focus": "stopped",
          "object": "to take a photo"
        },
        {
          "en": "We stopped to buy drinks on the way.",
          "ja": "途中で飲み物を買うために立ち寄りました。",
          "focus": "stopped",
          "object": "to buy drinks"
        }
      ]
    },
    {
      "id": "stop-prevent",
      "title": "④ stop someone from doing / 〜がするのを防ぐ",
      "pattern": "STOP + 人/物 + from -ing",
      "transitivity": "他動詞",
      "structure": "S + stop + O + from V-ing",
      "image": "人や問題が進むのを止めるイメージ。",
      "point": "ミス防止やトラブル防止で使いやすい。",
      "examples": [
        {
          "en": "The new checklist stopped us from missing important details.",
          "ja": "新しいチェックリストのおかげで、重要な点を見落とさずに済みました。",
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
          "en": "This process helps us stop small mistakes early.",
          "ja": "この手順により、私たちは小さなミスを早めに防げます。",
          "focus": "stop",
          "object": "small mistakes"
        }
      ],
      "dailyExamples": [
        {
          "en": "The rain stopped us from going outside.",
          "ja": "雨のせいで、外に出られませんでした。",
          "focus": "stopped",
          "object": "us from going outside"
        },
        {
          "en": "The cover stops dust from getting inside.",
          "ja": "このカバーはほこりが中に入るのを防ぎます。",
          "focus": "stops",
          "object": "dust from getting inside"
        }
      ]
    },
    {
      "id": "stop-for",
      "title": "⑤ stop for / 〜のために止まる",
      "pattern": "STOP FOR + reason",
      "transitivity": "自動詞",
      "structure": "S + stop + for O",
      "image": "理由や目的のために一度止まるイメージ。",
      "point": "break, lunch, safety check などと使いやすい。",
      "examples": [
        {
          "en": "The team stopped for a safety check before installation.",
          "ja": "チームは施工前に安全確認のため作業を止めました。",
          "focus": "stopped",
          "object": "for a safety check"
        },
        {
          "en": "Can we stop for five minutes and review the quote?",
          "ja": "5分止めて見積を確認できますか？",
          "focus": "stop",
          "object": "for five minutes"
        },
        {
          "en": "We stopped for a short break after the site visit.",
          "ja": "現場確認後、短い休憩のために立ち寄りました。",
          "focus": "stopped",
          "object": "for a short break"
        }
      ],
      "dailyExamples": [
        {
          "en": "We stopped for lunch near the park.",
          "ja": "公園の近くで昼食のために立ち寄りました。",
          "focus": "stopped",
          "object": "for lunch"
        },
        {
          "en": "I stopped for coffee before work.",
          "ja": "仕事前にコーヒーを買うために立ち寄りました。",
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
          "ja": "倉庫に立ち寄って在庫を確認できますか？",
          "focus": "stop by",
          "object": "the warehouse"
        },
        {
          "en": "She stopped by my desk to discuss the schedule.",
          "ja": "彼女はスケジュールを相談するために私の席へ立ち寄りました。",
          "focus": "stopped by",
          "object": "my desk"
        }
      ]
    },
    {
      "phrase": "stop off",
      "ja": "途中で立ち寄る",
      "image": "目的地へ向かう途中で一度止まるイメージ。",
      "pattern": "STOP OFF + at / in",
      "examples": [
        {
          "en": "We stopped off at the factory before visiting the client.",
          "ja": "顧客訪問の前に工場へ立ち寄りました。",
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
      ]
    },
    {
      "phrase": "stop over",
      "ja": "途中で一泊する・乗り継ぎで滞在する",
      "image": "長い移動の途中で一度泊まるイメージ。",
      "pattern": "STOP OVER + in / at",
      "examples": [
        {
          "en": "We stopped over in Singapore before the meeting in Jakarta.",
          "ja": "ジャカルタでの会議前にシンガポールで一泊しました。",
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
          "en": "I stopped over at a hotel near the airport.",
          "ja": "空港近くのホテルで一泊しました。",
          "focus": "stopped over",
          "object": "at a hotel"
        }
      ]
    },
    {
      "phrase": "stop in",
      "ja": "少し立ち寄る",
      "image": "建物や場所の中へ入って少し寄るイメージ。",
      "pattern": "STOP IN + at / to do",
      "examples": [
        {
          "en": "Please stop in at the office before the site visit.",
          "ja": "現場訪問前にオフィスへ少し立ち寄ってください。",
          "focus": "stop in",
          "object": "at the office"
        },
        {
          "en": "I stopped in to ask about the delivery date.",
          "ja": "納期について聞くために少し立ち寄りました。",
          "focus": "stopped in",
          "object": "to ask about the delivery date"
        },
        {
          "en": "She stopped in at the showroom after the meeting.",
          "ja": "彼女は会議後にショールームへ立ち寄りました。",
          "focus": "stopped in",
          "object": "at the showroom"
        }
      ]
    },
    {
      "phrase": "stop up",
      "ja": "ふさぐ・詰まらせる",
      "image": "流れや穴を止めてふさぐイメージ。",
      "pattern": "STOP UP + hole / drain",
      "examples": [
        {
          "en": "Dust stopped up the small ventilation hole.",
          "ja": "ほこりが小さな通気口をふさぎました。",
          "focus": "stopped up",
          "object": "the small ventilation hole"
        },
        {
          "en": "Please check if the drain is stopped up.",
          "ja": "排水口が詰まっていないか確認してください。",
          "focus": "stopped up",
          "object": "the drain"
        },
        {
          "en": "The tape stopped up the gap temporarily.",
          "ja": "テープが一時的に隙間をふさぎました。",
          "focus": "stopped up",
          "object": "the gap"
        }
      ]
    },
    {
      "phrase": "stop from",
      "ja": "〜を防ぐ",
      "image": "人や物事が進むのを止めるイメージ。",
      "pattern": "STOP + O + FROM -ing",
      "examples": [
        {
          "en": "This rule stops us from sending incomplete reports.",
          "ja": "このルールにより、不完全な報告書を送らずに済みます。",
          "focus": "stops from",
          "object": "us / sending incomplete reports"
        },
        {
          "en": "The approval step stopped the team from making a costly mistake.",
          "ja": "承認手順により、チームは大きなミスを防げました。",
          "focus": "stopped from",
          "object": "the team / making a costly mistake"
        },
        {
          "en": "Clear labels can stop customers from choosing the wrong product.",
          "ja": "分かりやすいラベルは、顧客が誤った商品を選ぶのを防げます。",
          "focus": "stop from",
          "object": "customers / choosing the wrong product"
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
  "coreDetail": "TRYは、成功するか分からない方法・案・行動に一度手を伸ばして試すイメージです。『試す』『努力する』『別の方法を試す』『もう一度やる』を仕事で自然に使えるように整理します。",
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
      "point": "method, approach, sample, layout などと相性が良い。",
      "examples": [
        {
          "en": "Let's try this method for the next proposal.",
          "ja": "次の提案ではこの方法を試しましょう。",
          "focus": "try",
          "object": "this method"
        },
        {
          "en": "We tried a different layout for the sign.",
          "ja": "私たちはサインに別の配置を試しました。",
          "focus": "tried",
          "object": "a different layout"
        },
        {
          "en": "Please try this sample before we place the order.",
          "ja": "発注前にこのサンプルを試してください。",
          "focus": "try",
          "object": "this sample"
        }
      ],
      "dailyExamples": [
        {
          "en": "I tried a new restaurant near the station.",
          "ja": "駅の近くの新しいレストランを試しました。",
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
          "ja": "今日、仕入先に連絡してみてもらえますか？",
          "focus": "try",
          "object": "to contact the supplier"
        }
      ],
      "dailyExamples": [
        {
          "en": "I tried to wake up early this morning.",
          "ja": "今朝、早く起きようとしました。",
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
          "ja": "午前中に顧客へ電話してみました。",
          "focus": "tried",
          "object": "calling the customer"
        },
        {
          "en": "You could try sending a reminder email.",
          "ja": "リマインドメールを送ってみてもよいと思います。",
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
          "ja": "今日は駅まで歩いてみました。",
          "focus": "tried",
          "object": "walking to the station"
        }
      ]
    },
    {
      "id": "try-again",
      "title": "④ try again / もう一度試す",
      "pattern": "TRY again",
      "transitivity": "自動詞",
      "structure": "S + try again",
      "image": "失敗後にもう一度手を伸ばすイメージ。",
      "point": "エラー、電話、確認作業などでよく使う。",
      "examples": [
        {
          "en": "The upload failed, so I will try again.",
          "ja": "アップロードに失敗したので、もう一度試します。",
          "focus": "try",
          "object": "again"
        },
        {
          "en": "Can you try again after checking the file size?",
          "ja": "ファイルサイズを確認した後、もう一度試せますか？",
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
          "en": "Please try again later.",
          "ja": "後でもう一度試してください。",
          "focus": "try",
          "object": "again"
        },
        {
          "en": "I missed the shot, so I tried again.",
          "ja": "シュートを外したので、もう一度試しました。",
          "focus": "tried",
          "object": "again"
        }
      ]
    },
    {
      "id": "try-best",
      "title": "⑤ try my best / 最善を尽くす",
      "pattern": "TRY one's best",
      "transitivity": "他動詞",
      "structure": "S + try + one's best",
      "image": "できる限り力を入れるイメージ。",
      "point": "納期調整や顧客対応で丁寧に伝えやすい。",
      "examples": [
        {
          "en": "I will try my best to meet the deadline.",
          "ja": "締切に間に合うよう最善を尽くします。",
          "focus": "try",
          "object": "my best"
        },
        {
          "en": "We will try our best to support your project.",
          "ja": "御社の案件を支援できるよう最善を尽くします。",
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
          "ja": "そのテストで最善を尽くしました。",
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
          "ja": "会議中に新しいアプリを試しました。",
          "focus": "tried out",
          "object": "the new app"
        },
        {
          "en": "Can you try out this format for the report?",
          "ja": "報告書でこの形式を試せますか？",
          "focus": "try out",
          "object": "this format"
        },
        {
          "en": "The team tried out a new sales script.",
          "ja": "チームは新しい営業トークを試しました。",
          "focus": "tried out",
          "object": "a new sales script"
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
          "en": "Please try on the safety vest before the site visit.",
          "ja": "現場訪問前に安全ベストを試着してください。",
          "focus": "try on",
          "object": "the safety vest"
        },
        {
          "en": "The staff tried on the sample uniform before ordering it.",
          "ja": "スタッフは発注前にサンプル制服を試着しました。",
          "focus": "tried on",
          "object": "the sample uniform"
        },
        {
          "en": "He tried on the jacket to check the size.",
          "ja": "彼はサイズを確認するためにジャケットを試着しました。",
          "focus": "tried on",
          "object": "the jacket"
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
          "ja": "より短いリードタイムを目指します。",
          "focus": "try for",
          "object": "a shorter lead time"
        },
        {
          "en": "I tried for a better discount, but it was difficult.",
          "ja": "より良い値引きを目指しましたが、難しかったです。",
          "focus": "tried for",
          "object": "a better discount"
        },
        {
          "en": "The team is trying for a higher response rate.",
          "ja": "チームはより高い返信率を目指しています。",
          "focus": "trying for",
          "object": "a higher response rate"
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
        },
        {
          "en": "He tried out for the new project team.",
          "ja": "彼は新しいプロジェクトチームに挑戦しました。",
          "focus": "tried out for",
          "object": "the new project team"
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
          "ja": "顧客は会議中なので、後でもう一度連絡します。",
          "focus": "try back",
          "object": "later"
        },
        {
          "en": "Can you try back after lunch?",
          "ja": "昼食後にもう一度連絡できますか？",
          "focus": "try back",
          "object": "after lunch"
        },
        {
          "en": "I tried back at three, but he was still busy.",
          "ja": "3時にもう一度連絡しましたが、彼はまだ忙しかったです。",
          "focus": "tried back",
          "object": "at three"
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
  "core": "相手や状況の負担を軽くして前に進める",
  "coreDetail": "HELPは、人・チーム・顧客・作業が前に進みやすくなるよう支えるイメージです。『人を助ける』だけでなく、『資料が理解を助ける』『改善に役立つ』『手伝う』まで広がります。",
  "coreVisual": {
    "from": [
      "🤝 支援が必要な人",
      "📄 難しい資料",
      "🧩 問題",
      "📈 改善したい業務"
    ],
    "to": "負担が軽くなり前に進む",
    "label": "負担を軽くする → 前進"
  },
  "meanings": [
    {
      "id": "help-person",
      "title": "① help someone / 人を助ける・手伝う",
      "pattern": "HELP + person",
      "transitivity": "他動詞",
      "structure": "S + help + O",
      "image": "相手の負担を軽くするイメージ。",
      "point": "help me, help the team, help the customer の形でよく使う。",
      "examples": [
        {
          "en": "I helped the sales team with the proposal.",
          "ja": "営業チームの提案書作成を手伝いました。",
          "focus": "helped",
          "object": "the sales team"
        },
        {
          "en": "Can you help me with this report?",
          "ja": "この報告書を手伝ってもらえますか？",
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
          "ja": "昨日、兄の引っ越しを手伝いました。",
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
      "id": "help-do",
      "title": "② help someone do / 〜するのを助ける",
      "pattern": "HELP + person + do",
      "transitivity": "他動詞",
      "structure": "S + help + O + V",
      "image": "相手が行動できるよう支えるイメージ。",
      "point": "help me check, help customers understand のように使う。",
      "examples": [
        {
          "en": "This chart helps customers understand the difference.",
          "ja": "この図は顧客が違いを理解するのに役立ちます。",
          "focus": "helps",
          "object": "customers"
        },
        {
          "en": "The checklist helped us find the mistake early.",
          "ja": "チェックリストは私たちが早くミスを見つけるのに役立ちました。",
          "focus": "helped",
          "object": "us"
        },
        {
          "en": "Can you help me prepare for the meeting?",
          "ja": "会議の準備を手伝ってもらえますか？",
          "focus": "help",
          "object": "me"
        }
      ],
      "dailyExamples": [
        {
          "en": "This app helps me study English.",
          "ja": "このアプリは私の英語学習に役立ちます。",
          "focus": "helps",
          "object": "me"
        },
        {
          "en": "My friend helped me choose a gift.",
          "ja": "友人がプレゼント選びを手伝ってくれました。",
          "focus": "helped",
          "object": "me"
        }
      ]
    },
    {
      "id": "help-reduce",
      "title": "③ help reduce / 減らすのに役立つ",
      "pattern": "HELP + verb",
      "transitivity": "他動詞",
      "structure": "S + help + V",
      "image": "改善や削減を後押しするイメージ。",
      "point": "ミス、時間、コスト、負担を減らす時に使いやすい。",
      "examples": [
        {
          "en": "This process helps reduce mistakes.",
          "ja": "この手順はミスを減らすのに役立ちます。",
          "focus": "helps",
          "object": "reduce mistakes"
        },
        {
          "en": "The template helped improve the report quality.",
          "ja": "そのテンプレートは報告書の品質改善に役立ちました。",
          "focus": "helped",
          "object": "improve the report quality"
        },
        {
          "en": "Clear photos can help avoid misunderstanding.",
          "ja": "分かりやすい写真は誤解を避けるのに役立ちます。",
          "focus": "help",
          "object": "avoid misunderstanding"
        }
      ],
      "dailyExamples": [
        {
          "en": "Drinking water helps reduce tiredness.",
          "ja": "水を飲むことは疲れを減らすのに役立ちます。",
          "focus": "helps",
          "object": "reduce tiredness"
        },
        {
          "en": "A short walk helps clear my head.",
          "ja": "短い散歩は頭をすっきりさせるのに役立ちます。",
          "focus": "helps",
          "object": "clear my head"
        }
      ]
    },
    {
      "id": "help-understand",
      "title": "④ help me understand / 理解を助ける",
      "pattern": "HELP + person + understand",
      "transitivity": "他動詞",
      "structure": "S + help + O + V",
      "image": "分からない状態から理解へ進めるイメージ。",
      "point": "説明・資料・確認で便利。",
      "examples": [
        {
          "en": "Your explanation helped me understand the issue.",
          "ja": "あなたの説明で、私は問題を理解できました。",
          "focus": "helped",
          "object": "me"
        },
        {
          "en": "Can you help us understand the customer's request?",
          "ja": "顧客の要望を理解するのを手伝ってもらえますか？",
          "focus": "help",
          "object": "us"
        },
        {
          "en": "The sample helped the client understand the color.",
          "ja": "サンプルにより、顧客は色を理解しやすくなりました。",
          "focus": "helped",
          "object": "the client"
        }
      ],
      "dailyExamples": [
        {
          "en": "The video helped me understand the rule.",
          "ja": "その動画でルールを理解できました。",
          "focus": "helped",
          "object": "me"
        },
        {
          "en": "This note helps me remember the plan.",
          "ja": "このメモは予定を思い出すのに役立ちます。",
          "focus": "helps",
          "object": "me"
        }
      ]
    },
    {
      "id": "cannot-help",
      "title": "⑤ cannot help -ing / 〜せずにはいられない",
      "pattern": "cannot HELP + -ing",
      "transitivity": "他動詞",
      "structure": "S + cannot help + V-ing",
      "image": "自分では止められない反応のイメージ。",
      "point": "日常寄りだが、英語表現として重要。",
      "examples": [
        {
          "en": "I cannot help feeling worried about the delay.",
          "ja": "私はその遅延について心配せずにはいられません。",
          "focus": "help",
          "object": "feeling worried"
        },
        {
          "en": "We could not help noticing the same mistake.",
          "ja": "私たちは同じミスに気づかずにはいられませんでした。",
          "focus": "help",
          "object": "noticing the same mistake"
        },
        {
          "en": "He cannot help checking the numbers twice.",
          "ja": "彼は数字を二度確認せずにはいられません。",
          "focus": "help",
          "object": "checking the numbers twice"
        }
      ],
      "dailyExamples": [
        {
          "en": "I cannot help smiling when I hear that song.",
          "ja": "その曲を聞くと笑顔にならずにはいられません。",
          "focus": "help",
          "object": "smiling"
        },
        {
          "en": "She could not help laughing.",
          "ja": "彼女は笑わずにはいられませんでした。",
          "focus": "help",
          "object": "laughing"
        }
      ]
    }
  ],
  "collocations": [],
  "phrasalVerbs": [
    {
      "phrase": "help with",
      "ja": "〜を手伝う",
      "image": "作業の一部を支えるイメージ。",
      "pattern": "HELP WITH + task",
      "examples": [
        {
          "en": "Could you help with the delivery schedule?",
          "ja": "納品スケジュールの件を手伝ってもらえますか？",
          "focus": "help with",
          "object": "the delivery schedule"
        },
        {
          "en": "We need someone to help with the setup tomorrow.",
          "ja": "明日の設営を手伝ってくれる人が必要です。",
          "focus": "help with",
          "object": "the setup"
        },
        {
          "en": "He helped with the final check before submission.",
          "ja": "彼は提出前の最終確認を手伝いました。",
          "focus": "helped with",
          "object": "the final check"
        }
      ]
    },
    {
      "phrase": "help out",
      "ja": "手伝う・助ける",
      "image": "困っている状況に入って支えるイメージ。",
      "pattern": "HELP OUT",
      "examples": [
        {
          "en": "Can you help out during the event tomorrow?",
          "ja": "明日のイベント中に手伝ってもらえますか？",
          "focus": "help out",
          "object": "during the event"
        },
        {
          "en": "The team helped out when the order volume increased.",
          "ja": "注文量が増えた時、チームが手伝ってくれました。",
          "focus": "helped out",
          "object": "when the order volume increased"
        },
        {
          "en": "I can help out after the meeting.",
          "ja": "会議後なら手伝えます。",
          "focus": "help out",
          "object": "after the meeting"
        }
      ]
    },
    {
      "phrase": "help out with",
      "ja": "〜を手伝う",
      "image": "具体的な作業を一緒に支えるイメージ。",
      "pattern": "HELP OUT WITH + task",
      "examples": [
        {
          "en": "She helped out with the sample packing.",
          "ja": "彼女はサンプルの梱包を手伝いました。",
          "focus": "helped out with",
          "object": "the sample packing"
        },
        {
          "en": "Can you help out with the customer list?",
          "ja": "顧客リストを手伝ってもらえますか？",
          "focus": "help out with",
          "object": "the customer list"
        },
        {
          "en": "We helped out with the urgent shipment.",
          "ja": "私たちは急ぎの出荷を手伝いました。",
          "focus": "helped out with",
          "object": "the urgent shipment"
        }
      ]
    },
    {
      "phrase": "help along",
      "ja": "進めるのを助ける",
      "image": "物事が前に進むよう後押しするイメージ。",
      "pattern": "HELP ALONG + process",
      "examples": [
        {
          "en": "The clear schedule helped along the approval process.",
          "ja": "明確なスケジュールが承認プロセスを進める助けになりました。",
          "focus": "helped along",
          "object": "the approval process"
        },
        {
          "en": "Good examples can help along the training.",
          "ja": "良い例は研修を進める助けになります。",
          "focus": "help along",
          "object": "the training"
        },
        {
          "en": "The checklist helped the discussion along.",
          "ja": "チェックリストが議論を前に進めました。",
          "focus": "helped along",
          "object": "the discussion"
        }
      ]
    },
    {
      "phrase": "help through",
      "ja": "困難を乗り越えるのを助ける",
      "image": "難しい状況を通り抜けるまで支えるイメージ。",
      "pattern": "HELP + person + THROUGH + difficulty",
      "examples": [
        {
          "en": "Our manager helped us through the busy season.",
          "ja": "上司が繁忙期を乗り越えるのを助けてくれました。",
          "focus": "helped through",
          "object": "us / the busy season"
        },
        {
          "en": "The support team helped the client through the setup.",
          "ja": "サポートチームが顧客の設定作業を最後まで支援しました。",
          "focus": "helped through",
          "object": "the client / the setup"
        },
        {
          "en": "This guide will help new users through the first steps.",
          "ja": "このガイドは新規ユーザーが最初の手順を進める助けになります。",
          "focus": "help through",
          "object": "new users / the first steps"
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
    "core": "情報・物・結果を、相手が見て分かる形にする",
    "coreDetail": "SHOWは『相手の目や理解に入る状態へ出す』感覚です。物を見せるだけでなく、データが結果を示す、画面が状態を表示する、手順を見せて説明する時にも使います。",
    "coreVisual": {
        "from": [
            "📄 資料",
            "📊 データ",
            "🖥️ 画面",
            "🧭 手順"
        ],
        "to": "相手が見て理解できる状態",
        "label": "見える形に出す"
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
                {
                    "en": "I showed the client the new sample yesterday.",
                    "ja": "私は昨日、顧客に新しいサンプルを見せました。",
                    "focus": "showed",
                    "object": "the client the new sample"
                },
                {
                    "en": "Can you show me the latest drawing?",
                    "ja": "あなたは私に最新の図面を見せてもらえますか？",
                    "focus": "show",
                    "object": "me the latest drawing"
                },
                {
                    "en": "We will show the color options during the meeting.",
                    "ja": "私たちは会議中に色の選択肢を見せます。",
                    "focus": "show",
                    "object": "the color options"
                }
            ],
            "dailyExamples": [
                {
                    "en": "She showed me her new phone.",
                    "ja": "彼女は私に新しいスマホを見せました。",
                    "focus": "showed",
                    "object": "me her new phone"
                },
                {
                    "en": "Can you show me the photo?",
                    "ja": "その写真を見せてくれますか？",
                    "focus": "show",
                    "object": "me the photo"
                }
            ]
        },
        {
            "id": "show-result",
            "title": "② show the result / 結果を示す",
            "pattern": "SHOW + result / data",
            "transitivity": "他動詞",
            "structure": "S + show + O",
            "image": "数字や資料が、結果や傾向を見える形にするイメージ。",
            "point": "data, chart, report, result が主語になることが多い。",
            "examples": [
                {
                    "en": "The data shows a clear increase in orders.",
                    "ja": "そのデータは受注の明確な増加を示しています。",
                    "focus": "shows",
                    "object": "a clear increase in orders"
                },
                {
                    "en": "This chart shows the sales trend by area.",
                    "ja": "このグラフはエリア別の売上傾向を示しています。",
                    "focus": "shows",
                    "object": "the sales trend by area"
                },
                {
                    "en": "The report showed several issues in the process.",
                    "ja": "その報告書はいくつかの工程上の課題を示していました。",
                    "focus": "showed",
                    "object": "several issues in the process"
                }
            ],
            "dailyExamples": [
                {
                    "en": "The map shows the nearest station.",
                    "ja": "その地図は最寄り駅を示しています。",
                    "focus": "shows",
                    "object": "the nearest station"
                },
                {
                    "en": "The screen shows the battery level.",
                    "ja": "画面はバッテリー残量を表示しています。",
                    "focus": "shows",
                    "object": "the battery level"
                }
            ]
        },
        {
            "id": "show-difference",
            "title": "③ show the difference / 違いを示す",
            "pattern": "SHOW + difference / change",
            "transitivity": "他動詞",
            "structure": "S + show + O",
            "image": "比較した時の差や変化を見える形にするイメージ。",
            "point": "show the difference, show a change, show improvement が仕事で使いやすい。",
            "examples": [
                {
                    "en": "The test clearly shows the difference between the two products.",
                    "ja": "その試験は2つの製品の違いを明確に示しています。",
                    "focus": "shows",
                    "object": "the difference between the two products"
                },
                {
                    "en": "The new layout showed a better result.",
                    "ja": "新しい配置はより良い結果を示しました。",
                    "focus": "showed",
                    "object": "a better result"
                },
                {
                    "en": "This report shows improvement after the change.",
                    "ja": "この報告書は変更後の改善を示しています。",
                    "focus": "shows",
                    "object": "improvement after the change"
                }
            ],
            "dailyExamples": [
                {
                    "en": "The photo shows the difference clearly.",
                    "ja": "その写真は違いをはっきり示しています。",
                    "focus": "shows",
                    "object": "the difference"
                },
                {
                    "en": "His face showed surprise.",
                    "ja": "彼の表情は驚きを示していました。",
                    "focus": "showed",
                    "object": "surprise"
                }
            ]
        },
        {
            "id": "show-how",
            "title": "④ show how / やり方を示す",
            "pattern": "SHOW + person + how to do",
            "transitivity": "他動詞",
            "structure": "S + show + O + how to V",
            "image": "手順を相手がまねできる形で見せるイメージ。",
            "point": "操作説明、設定説明、新人教育で便利。",
            "examples": [
                {
                    "en": "Can you show me how to update the file?",
                    "ja": "あなたは私にそのファイルの更新方法を見せてもらえますか？",
                    "focus": "show",
                    "object": "me how to update the file"
                },
                {
                    "en": "The engineer showed us how to change the setting.",
                    "ja": "技術担当者は私たちに設定変更の方法を見せてくれました。",
                    "focus": "showed",
                    "object": "us how to change the setting"
                },
                {
                    "en": "I will show the team how this tool works.",
                    "ja": "私はチームにこのツールの動き方を示します。",
                    "focus": "show",
                    "object": "the team how this tool works"
                }
            ],
            "dailyExamples": [
                {
                    "en": "Please show me how to use this app.",
                    "ja": "このアプリの使い方を見せてください。",
                    "focus": "show",
                    "object": "me how to use this app"
                },
                {
                    "en": "My daughter showed me how to play the game.",
                    "ja": "娘がそのゲームのやり方を見せてくれました。",
                    "focus": "showed",
                    "object": "me how to play the game"
                }
            ]
        },
        {
            "id": "show-that",
            "title": "⑤ show that / 〜だと示す",
            "pattern": "SHOW THAT + sentence",
            "transitivity": "他動詞",
            "structure": "S + show + that節",
            "image": "証拠や結果が、判断材料を相手に見せるイメージ。",
            "point": "show that は『〜を示している』という説明に使いやすい。",
            "examples": [
                {
                    "en": "The test results show that the product is stable.",
                    "ja": "試験結果はその製品が安定していることを示しています。",
                    "focus": "show",
                    "object": "that the product is stable"
                },
                {
                    "en": "The numbers showed that we needed more stock.",
                    "ja": "その数字は私たちに追加在庫が必要だと示していました。",
                    "focus": "showed",
                    "object": "that we needed more stock"
                },
                {
                    "en": "Customer feedback shows that the explanation was clear.",
                    "ja": "顧客の意見は説明が分かりやすかったことを示しています。",
                    "focus": "shows",
                    "object": "that the explanation was clear"
                }
            ],
            "dailyExamples": [
                {
                    "en": "His face showed that he was tired.",
                    "ja": "彼の表情から疲れていることが分かりました。",
                    "focus": "showed",
                    "object": "that he was tired"
                },
                {
                    "en": "The sky shows that it may rain soon.",
                    "ja": "空を見ると、もうすぐ雨が降りそうです。",
                    "focus": "shows",
                    "object": "that it may rain soon"
                }
            ]
        },
        {
            "id": "show-file",
            "title": "⑥ show the file / ファイルを見せる",
            "pattern": "SHOW + file / screen",
            "transitivity": "他動詞",
            "structure": "S + show + O",
            "image": "相手が確認できるように画面やファイルを表示するイメージ。",
            "point": "show the file, show the screen, show the page は社内説明で使いやすい。",
            "examples": [
                {
                    "en": "Please show the file before we send it.",
                    "ja": "送る前にそのファイルを見せてください。",
                    "focus": "show",
                    "object": "the file"
                },
                {
                    "en": "The system shows the latest stock number.",
                    "ja": "そのシステムは最新の在庫数を表示します。",
                    "focus": "shows",
                    "object": "the latest stock number"
                },
                {
                    "en": "Can you show the page with the error?",
                    "ja": "エラーが出ているページを見せてもらえますか？",
                    "focus": "show",
                    "object": "the page with the error"
                }
            ],
            "dailyExamples": [
                {
                    "en": "Please show your ticket at the entrance.",
                    "ja": "入口でチケットを見せてください。",
                    "focus": "show",
                    "object": "your ticket"
                },
                {
                    "en": "The app shows today's weather.",
                    "ja": "そのアプリは今日の天気を表示します。",
                    "focus": "shows",
                    "object": "today's weather"
                }
            ]
        }
    ],
    "collocations": [],
    "phrasalVerbs": [
        {
            "phrase": "show up",
            "ja": "現れる・表示される",
            "image": "見えていなかった人や問題が表に出てくるイメージ。",
            "pattern": "SHOW UP",
            "examples": [
                {
                    "en": "The supplier did not show up for the meeting.",
                    "ja": "仕入先は会議に来ませんでした。",
                    "focus": "show up",
                    "object": "for the meeting"
                },
                {
                    "en": "Several issues showed up after the update.",
                    "ja": "更新後にいくつかの問題が出てきました。",
                    "focus": "showed up",
                    "object": "after the update"
                },
                {
                    "en": "Please show up on time tomorrow.",
                    "ja": "明日は時間どおりに来てください。",
                    "focus": "show up",
                    "object": "on time"
                }
            ]
        },
        {
            "phrase": "show off",
            "ja": "見せびらかす・目立たせる",
            "image": "良いところを強く前に出すイメージ。",
            "pattern": "SHOW OFF + feature / skill",
            "examples": [
                {
                    "en": "The demo showed off the new feature clearly.",
                    "ja": "そのデモは新機能を分かりやすく見せました。",
                    "focus": "showed off",
                    "object": "the new feature"
                },
                {
                    "en": "This display helps show off the product design.",
                    "ja": "この展示は製品デザインを引き立てる助けになります。",
                    "focus": "show off",
                    "object": "the product design"
                },
                {
                    "en": "He was only showing off in the meeting.",
                    "ja": "彼は会議でただ目立とうとしていただけでした。",
                    "focus": "showing off",
                    "object": "in the meeting"
                }
            ]
        },
        {
            "phrase": "show around",
            "ja": "案内して回る",
            "image": "場所を見せながら相手を回すイメージ。",
            "pattern": "SHOW + person + AROUND",
            "examples": [
                {
                    "en": "I will show the customer around the showroom.",
                    "ja": "私は顧客にショールームを案内します。",
                    "focus": "show around",
                    "object": "the customer"
                },
                {
                    "en": "Can you show the new member around?",
                    "ja": "あなたは新しいメンバーを案内できますか？",
                    "focus": "show around",
                    "object": "the new member"
                },
                {
                    "en": "She showed us around the factory.",
                    "ja": "彼女は私たちに工場を案内してくれました。",
                    "focus": "showed around",
                    "object": "us"
                }
            ]
        },
        {
            "phrase": "show through",
            "ja": "透けて見える・現れる",
            "image": "下にあるものや本音が表面に出てくるイメージ。",
            "pattern": "SHOW THROUGH",
            "examples": [
                {
                    "en": "The old color showed through the new paint.",
                    "ja": "古い色が新しい塗装から透けて見えました。",
                    "focus": "showed through",
                    "object": "the new paint"
                },
                {
                    "en": "His concern showed through during the meeting.",
                    "ja": "会議中に彼の不安が表に出ていました。",
                    "focus": "showed through",
                    "object": "during the meeting"
                },
                {
                    "en": "The background light shows through the acrylic panel.",
                    "ja": "背景の光がアクリル板から透けて見えます。",
                    "focus": "shows through",
                    "object": "the acrylic panel"
                }
            ]
        },
        {
            "phrase": "show in",
            "ja": "中へ案内する",
            "image": "入口から中の場所へ相手を入れて案内するイメージ。",
            "pattern": "SHOW + person + IN",
            "examples": [
                {
                    "en": "Please show the client in when they arrive.",
                    "ja": "顧客が到着したら中へ案内してください。",
                    "focus": "show in",
                    "object": "the client"
                },
                {
                    "en": "The receptionist showed us in right away.",
                    "ja": "受付の方がすぐに私たちを中へ案内してくれました。",
                    "focus": "showed in",
                    "object": "us"
                },
                {
                    "en": "I will show the visitors in before the meeting.",
                    "ja": "会議前に来訪者を中へ案内します。",
                    "focus": "show in",
                    "object": "the visitors"
                }
            ]
        },
        {
            "phrase": "show out",
            "ja": "外へ案内する",
            "image": "用件が終わった相手を外まで案内するイメージ。",
            "pattern": "SHOW + person + OUT",
            "examples": [
                {
                    "en": "I will show the visitors out after the tour.",
                    "ja": "見学後に来訪者を外まで案内します。",
                    "focus": "show out",
                    "object": "the visitors"
                },
                {
                    "en": "The staff showed the customer out politely.",
                    "ja": "スタッフは顧客を丁寧に外へ案内しました。",
                    "focus": "showed out",
                    "object": "the customer"
                },
                {
                    "en": "Can you show them out after the meeting?",
                    "ja": "会議後に彼らを外へ案内してもらえますか？",
                    "focus": "show out",
                    "object": "them"
                }
            ]
        },
        {
            "phrase": "show into",
            "ja": "〜の中へ案内する",
            "image": "相手を特定の部屋や場所の中へ通すイメージ。",
            "pattern": "SHOW + person + INTO + place",
            "examples": [
                {
                    "en": "The assistant showed the client into the meeting room.",
                    "ja": "アシスタントは顧客を会議室へ案内しました。",
                    "focus": "showed into",
                    "object": "the client"
                },
                {
                    "en": "Please show the visitors into the showroom.",
                    "ja": "来訪者をショールームへ案内してください。",
                    "focus": "show into",
                    "object": "the visitors"
                },
                {
                    "en": "She showed us into a small office.",
                    "ja": "彼女は私たちを小さな事務所へ案内しました。",
                    "focus": "showed into",
                    "object": "us"
                }
            ]
        },
        {
            "phrase": "show over",
            "ja": "案内して見せる",
            "image": "建物や場所を一通り見せながら案内するイメージ。",
            "pattern": "SHOW + person + OVER + place",
            "examples": [
                {
                    "en": "The manager showed us over the new office.",
                    "ja": "マネージャーは私たちに新しいオフィスを案内して見せてくれました。",
                    "focus": "showed over",
                    "object": "us"
                },
                {
                    "en": "Can you show the client over the facility?",
                    "ja": "顧客に施設を案内して見せてもらえますか？",
                    "focus": "show over",
                    "object": "the client"
                },
                {
                    "en": "She showed the team over the factory.",
                    "ja": "彼女はチームに工場を案内して見せました。",
                    "focus": "showed over",
                    "object": "the team"
                }
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
    "coreDetail": "TELLは『情報を相手に向けて渡す』感覚です。sayよりも相手がはっきりしていて、tell me, tell the client, tell someone that の形で仕事でも日常でもよく使います。",
    "coreVisual": {
        "from": [
            "💬 情報",
            "📢 連絡",
            "🗓️ 予定",
            "⚠️ 注意",
            "✅ 判断"
        ],
        "to": "相手の理解",
        "label": "情報 → 相手へ"
    },
    "meanings": [
        {
            "id": "tell-client",
            "title": "① tell the client / 顧客に伝える",
            "pattern": "TELL + person + information",
            "transitivity": "他動詞",
            "structure": "S + tell + O + O",
            "image": "相手に必要な情報を渡すイメージ。",
            "point": "tell の直後には基本的に『人』が来る。tell someone the reason が自然。",
            "examples": [
                {
                    "en": "I told the client the delivery schedule.",
                    "ja": "私は顧客に納品スケジュールを伝えました。",
                    "focus": "told",
                    "object": "the client the delivery schedule"
                },
                {
                    "en": "Please tell me if the price changes.",
                    "ja": "価格が変わったら私に教えてください。",
                    "focus": "tell",
                    "object": "me if the price changes"
                },
                {
                    "en": "Did you tell your manager about the issue?",
                    "ja": "あなたは上司にその問題を伝えましたか？",
                    "focus": "tell",
                    "object": "your manager about the issue"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I told my friend about the restaurant.",
                    "ja": "私は友人にそのレストランについて話しました。",
                    "focus": "told",
                    "object": "my friend about the restaurant"
                },
                {
                    "en": "Tell me your name, please.",
                    "ja": "名前を教えてください。",
                    "focus": "Tell",
                    "object": "me your name"
                }
            ]
        },
        {
            "id": "tell-reason",
            "title": "② tell me the reason / 理由を教える",
            "pattern": "TELL + person + reason",
            "transitivity": "他動詞",
            "structure": "S + tell + O + O",
            "image": "相手が判断できるように理由や背景を渡すイメージ。",
            "point": "reason, detail, story, result などを伝える時に使う。",
            "examples": [
                {
                    "en": "Can you tell me the reason for the delay?",
                    "ja": "遅れの理由を教えてもらえますか？",
                    "focus": "tell",
                    "object": "me the reason for the delay"
                },
                {
                    "en": "The supplier told us the cause of the problem.",
                    "ja": "仕入先は私たちに問題の原因を教えてくれました。",
                    "focus": "told",
                    "object": "us the cause of the problem"
                },
                {
                    "en": "Please tell the team the latest details.",
                    "ja": "チームに最新の詳細を伝えてください。",
                    "focus": "tell",
                    "object": "the team the latest details"
                }
            ],
            "dailyExamples": [
                {
                    "en": "She told me the story.",
                    "ja": "彼女は私にその話をしてくれました。",
                    "focus": "told",
                    "object": "me the story"
                },
                {
                    "en": "Can you tell me the way to the station?",
                    "ja": "駅への道を教えてもらえますか？",
                    "focus": "tell",
                    "object": "me the way to the station"
                }
            ]
        },
        {
            "id": "tell-about-change",
            "title": "③ tell someone about / 〜について伝える",
            "pattern": "TELL + person + ABOUT + topic",
            "transitivity": "他動詞",
            "structure": "S + tell + O + about O",
            "image": "話題を指定して相手に情報を渡すイメージ。",
            "point": "about the change, about the schedule, about the issue が仕事で多い。",
            "examples": [
                {
                    "en": "I told the team about the schedule change.",
                    "ja": "私はチームにスケジュール変更について伝えました。",
                    "focus": "told",
                    "object": "the team about the schedule change"
                },
                {
                    "en": "Please tell the customer about the new condition.",
                    "ja": "顧客に新しい条件について伝えてください。",
                    "focus": "tell",
                    "object": "the customer about the new condition"
                },
                {
                    "en": "She told us about the customer's request.",
                    "ja": "彼女は私たちに顧客の要望について伝えました。",
                    "focus": "told",
                    "object": "us about the customer's request"
                }
            ],
            "dailyExamples": [
                {
                    "en": "He told me about his trip.",
                    "ja": "彼は私に旅行について話しました。",
                    "focus": "told",
                    "object": "me about his trip"
                },
                {
                    "en": "Tell us about your weekend.",
                    "ja": "週末について教えてください。",
                    "focus": "Tell",
                    "object": "us about your weekend"
                }
            ]
        },
        {
            "id": "tell-if",
            "title": "④ tell if / 〜か判断する",
            "pattern": "TELL IF + sentence",
            "transitivity": "他動詞",
            "structure": "S + tell + if節",
            "image": "見たり聞いたりした情報から判断するイメージ。",
            "point": "can tell if は『〜か分かる』という自然な表現。",
            "examples": [
                {
                    "en": "Can you tell if this file is the latest version?",
                    "ja": "このファイルが最新版か分かりますか？",
                    "focus": "tell",
                    "object": "if this file is the latest version"
                },
                {
                    "en": "We cannot tell if the product is damaged from the photo.",
                    "ja": "写真だけでは製品が破損しているか判断できません。",
                    "focus": "tell",
                    "object": "if the product is damaged"
                },
                {
                    "en": "I can tell if the schedule is realistic after checking the stock.",
                    "ja": "在庫を確認すれば、その予定が現実的か判断できます。",
                    "focus": "tell",
                    "object": "if the schedule is realistic"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I can tell if he is angry.",
                    "ja": "彼が怒っているか分かります。",
                    "focus": "tell",
                    "object": "if he is angry"
                },
                {
                    "en": "Can you tell if it will rain?",
                    "ja": "雨が降るか分かりますか？",
                    "focus": "tell",
                    "object": "if it will rain"
                }
            ]
        },
        {
            "id": "tell-difference",
            "title": "⑤ tell the difference / 違いが分かる",
            "pattern": "TELL + the difference",
            "transitivity": "他動詞",
            "structure": "S + tell + O",
            "image": "似ているものを見比べて違いを判断するイメージ。",
            "point": "tell the difference は頻出。商品比較や仕様確認で使いやすい。",
            "examples": [
                {
                    "en": "It is hard to tell the difference between these two models.",
                    "ja": "この2つのモデルの違いを見分けるのは難しいです。",
                    "focus": "tell",
                    "object": "the difference between these two models"
                },
                {
                    "en": "The label helps us tell the difference quickly.",
                    "ja": "ラベルのおかげで私たちは違いをすぐに判断できます。",
                    "focus": "tell",
                    "object": "the difference"
                },
                {
                    "en": "Can the client tell the difference in brightness?",
                    "ja": "顧客は明るさの違いを分かりますか？",
                    "focus": "tell",
                    "object": "the difference in brightness"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I cannot tell the difference between the twins.",
                    "ja": "私はその双子の違いが分かりません。",
                    "focus": "tell",
                    "object": "the difference between the twins"
                },
                {
                    "en": "Can you tell the difference in taste?",
                    "ja": "味の違いが分かりますか？",
                    "focus": "tell",
                    "object": "the difference in taste"
                }
            ]
        },
        {
            "id": "tell-to-do",
            "title": "⑥ tell someone to do / 人に〜するよう伝える",
            "pattern": "TELL + person + to do",
            "transitivity": "他動詞",
            "structure": "S + tell + O + to V",
            "image": "相手に具体的な行動を伝えるイメージ。",
            "point": "指示が強くなるので、ビジネスでは場面に注意。",
            "examples": [
                {
                    "en": "I told him to check the file before sending it.",
                    "ja": "私は彼に送信前にファイルを確認するよう伝えました。",
                    "focus": "told",
                    "object": "him to check the file"
                },
                {
                    "en": "Please tell the team to prepare the samples.",
                    "ja": "チームにサンプルを準備するよう伝えてください。",
                    "focus": "tell",
                    "object": "the team to prepare the samples"
                },
                {
                    "en": "The manager told us to call the customer today.",
                    "ja": "上司は私たちに今日顧客へ電話するよう伝えました。",
                    "focus": "told",
                    "object": "us to call the customer"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I told my son to clean his room.",
                    "ja": "私は息子に部屋を掃除するよう言いました。",
                    "focus": "told",
                    "object": "my son to clean his room"
                },
                {
                    "en": "She told me to wait outside.",
                    "ja": "彼女は私に外で待つよう言いました。",
                    "focus": "told",
                    "object": "me to wait outside"
                }
            ]
        }
    ],
    "collocations": [],
    "phrasalVerbs": [
        {
            "phrase": "tell off",
            "ja": "叱る",
            "image": "相手に強く注意を言い渡すイメージ。",
            "pattern": "TELL + person + OFF",
            "examples": [
                {
                    "en": "The manager told him off for missing the deadline.",
                    "ja": "上司は締切を守らなかったことで彼を叱りました。",
                    "focus": "told off",
                    "object": "him"
                },
                {
                    "en": "She told the vendor off for repeated mistakes.",
                    "ja": "彼女は繰り返すミスについて業者を叱りました。",
                    "focus": "told off",
                    "object": "the vendor"
                },
                {
                    "en": "I do not want to tell anyone off in front of others.",
                    "ja": "私は人前で誰かを叱りたくありません。",
                    "focus": "tell off",
                    "object": "anyone"
                }
            ]
        },
        {
            "phrase": "tell on",
            "ja": "告げ口する・影響が出る",
            "image": "隠れていたことが外に伝わる、または負担が表に出るイメージ。",
            "pattern": "TELL ON + person / thing",
            "examples": [
                {
                    "en": "The long hours are starting to tell on the team.",
                    "ja": "長時間勤務がチームに影響し始めています。",
                    "focus": "tell on",
                    "object": "the team"
                },
                {
                    "en": "He told on his coworker after the mistake.",
                    "ja": "彼はミスの後、同僚のことを告げ口しました。",
                    "focus": "told on",
                    "object": "his coworker"
                },
                {
                    "en": "Stress can tell on the quality of work.",
                    "ja": "ストレスは仕事の品質に影響することがあります。",
                    "focus": "tell on",
                    "object": "the quality of work"
                }
            ]
        },
        {
            "phrase": "tell apart",
            "ja": "見分ける",
            "image": "似ているものを分けて判断するイメージ。",
            "pattern": "TELL + A and B + APART",
            "examples": [
                {
                    "en": "It is hard to tell these two products apart.",
                    "ja": "この2つの製品を見分けるのは難しいです。",
                    "focus": "tell apart",
                    "object": "these two products"
                },
                {
                    "en": "Can you tell the old model and the new model apart?",
                    "ja": "旧モデルと新モデルを見分けられますか？",
                    "focus": "tell apart",
                    "object": "the old model and the new model"
                },
                {
                    "en": "The color codes help us tell the cables apart.",
                    "ja": "色分けはケーブルを見分ける助けになります。",
                    "focus": "tell apart",
                    "object": "the cables"
                }
            ]
        },
        {
            "phrase": "tell from",
            "ja": "〜から分かる",
            "image": "見た情報や聞いた情報を判断材料にするイメージ。",
            "pattern": "TELL FROM + clue",
            "examples": [
                {
                    "en": "I can tell from the photo that the part is damaged.",
                    "ja": "写真からその部品が破損していると分かります。",
                    "focus": "tell from",
                    "object": "the photo"
                },
                {
                    "en": "Can you tell from the label which model it is?",
                    "ja": "ラベルからそれがどのモデルか分かりますか？",
                    "focus": "tell from",
                    "object": "the label"
                },
                {
                    "en": "We could tell from the numbers that demand was increasing.",
                    "ja": "数字から需要が増えていることが分かりました。",
                    "focus": "tell from",
                    "object": "the numbers"
                }
            ]
        },
        {
            "phrase": "tell about",
            "ja": "〜について話す・伝える",
            "image": "ある話題について情報を相手へ渡すイメージ。",
            "pattern": "TELL + person + ABOUT + topic",
            "examples": [
                {
                    "en": "Please tell the team about the new schedule.",
                    "ja": "チームに新しいスケジュールについて伝えてください。",
                    "focus": "tell about",
                    "object": "the new schedule"
                },
                {
                    "en": "I told the client about the change in price.",
                    "ja": "私は顧客に価格変更について伝えました。",
                    "focus": "told about",
                    "object": "the change in price"
                },
                {
                    "en": "She told us about the customer's feedback.",
                    "ja": "彼女は私たちに顧客の反応について話しました。",
                    "focus": "told about",
                    "object": "the customer's feedback"
                }
            ]
        }
    ]
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
    "coreDetail": "ASKは『相手から情報や行動を引き出す』感覚です。質問するだけでなく、依頼する、許可を求める、予定や条件を確認する時にも使います。",
    "coreVisual": {
        "from": [
            "❓ 質問",
            "🙏 依頼",
            "✅ 許可",
            "📄 資料",
            "💬 確認"
        ],
        "to": "相手から返答・対応をもらう",
        "label": "必要なものを求める"
    },
    "meanings": [
        {
            "id": "ask-question",
            "title": "① ask a question / 質問する",
            "pattern": "ASK + question",
            "transitivity": "他動詞",
            "structure": "S + ask + O",
            "image": "分からないことを相手に投げかけるイメージ。",
            "point": "question, why/when/how, if などと一緒に使う。",
            "examples": [
                {
                    "en": "Can I ask a question about the quotation?",
                    "ja": "見積について質問してもよろしいですか？",
                    "focus": "ask",
                    "object": "a question about the quotation"
                },
                {
                    "en": "The client asked several questions about the delivery date.",
                    "ja": "顧客は納期についていくつか質問しました。",
                    "focus": "asked",
                    "object": "several questions about the delivery date"
                },
                {
                    "en": "Please ask if anything is unclear.",
                    "ja": "不明点があれば質問してください。",
                    "focus": "ask",
                    "object": "if anything is unclear"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I asked a question in class.",
                    "ja": "私は授業で質問しました。",
                    "focus": "asked",
                    "object": "a question"
                },
                {
                    "en": "Can I ask your name?",
                    "ja": "お名前を聞いてもいいですか？",
                    "focus": "ask",
                    "object": "your name"
                }
            ]
        },
        {
            "id": "ask-client",
            "title": "② ask the client / 顧客に確認する",
            "pattern": "ASK + person",
            "transitivity": "他動詞",
            "structure": "S + ask + O",
            "image": "答えを持っていそうな相手に向けて聞くイメージ。",
            "point": "ask the supplier, ask your manager, ask the client が仕事で多い。",
            "examples": [
                {
                    "en": "I will ask the supplier about the stock.",
                    "ja": "私は仕入先に在庫について確認します。",
                    "focus": "ask",
                    "object": "the supplier about the stock"
                },
                {
                    "en": "Please ask your manager before sending the email.",
                    "ja": "メールを送る前に上司に確認してください。",
                    "focus": "ask",
                    "object": "your manager"
                },
                {
                    "en": "Did you ask the client about the installation date?",
                    "ja": "あなたは顧客に施工日について確認しましたか？",
                    "focus": "ask",
                    "object": "the client about the installation date"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I asked my friend about the movie.",
                    "ja": "私は友人にその映画について聞きました。",
                    "focus": "asked",
                    "object": "my friend about the movie"
                },
                {
                    "en": "Ask your teacher before you leave.",
                    "ja": "帰る前に先生に確認してください。",
                    "focus": "Ask",
                    "object": "your teacher"
                }
            ]
        },
        {
            "id": "ask-to-do",
            "title": "③ ask someone to do / 人に〜をお願いする",
            "pattern": "ASK + person + to do",
            "transitivity": "他動詞",
            "structure": "S + ask + O + to V",
            "image": "相手に具体的な行動をお願いするイメージ。",
            "point": "tellより丁寧な依頼になりやすい。仕事では非常に重要。",
            "examples": [
                {
                    "en": "I asked him to check the delivery schedule.",
                    "ja": "私は彼に納品スケジュールを確認するようお願いしました。",
                    "focus": "asked",
                    "object": "him to check the delivery schedule"
                },
                {
                    "en": "Can you ask the customer to send the drawing?",
                    "ja": "あなたは顧客に図面を送るよう依頼できますか？",
                    "focus": "ask",
                    "object": "the customer to send the drawing"
                },
                {
                    "en": "We asked the factory to prepare the sample by Friday.",
                    "ja": "私たちは工場に金曜日までにサンプルを準備するよう依頼しました。",
                    "focus": "asked",
                    "object": "the factory to prepare the sample"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I asked my son to clean his room.",
                    "ja": "私は息子に部屋を掃除するよう頼みました。",
                    "focus": "asked",
                    "object": "my son to clean his room"
                },
                {
                    "en": "She asked me to wait outside.",
                    "ja": "彼女は私に外で待つよう頼みました。",
                    "focus": "asked",
                    "object": "me to wait outside"
                }
            ]
        },
        {
            "id": "ask-if",
            "title": "④ ask if / 〜かどうか尋ねる",
            "pattern": "ASK IF + sentence",
            "transitivity": "他動詞",
            "structure": "S + ask + if節",
            "image": "YES/NOで確認できる内容を相手に確認するイメージ。",
            "point": "メールや電話で確認する時に使いやすい。",
            "examples": [
                {
                    "en": "I asked if the sample was available.",
                    "ja": "私はサンプルが入手可能かどうか尋ねました。",
                    "focus": "asked",
                    "object": "if the sample was available"
                },
                {
                    "en": "Please ask if they can deliver it by next week.",
                    "ja": "来週までに納品できるかどうか確認してください。",
                    "focus": "ask",
                    "object": "if they can deliver it by next week"
                },
                {
                    "en": "The client asked if we could change the schedule.",
                    "ja": "顧客は私たちがスケジュールを変更できるか尋ねました。",
                    "focus": "asked",
                    "object": "if we could change the schedule"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I asked if the shop was open.",
                    "ja": "私は店が開いているか尋ねました。",
                    "focus": "asked",
                    "object": "if the shop was open"
                },
                {
                    "en": "She asked if I was free tonight.",
                    "ja": "彼女は私が今夜空いているか尋ねました。",
                    "focus": "asked",
                    "object": "if I was free tonight"
                }
            ]
        },
        {
            "id": "ask-before",
            "title": "⑤ ask before / 事前に確認する",
            "pattern": "ASK BEFORE + doing",
            "transitivity": "自動詞的表現",
            "structure": "S + ask + before V-ing",
            "image": "動く前に相手へ確認を取るイメージ。",
            "point": "発注・変更・送信前の確認で使いやすい。",
            "examples": [
                {
                    "en": "Please ask before changing the order.",
                    "ja": "注文を変更する前に確認してください。",
                    "focus": "ask",
                    "object": "before changing the order"
                },
                {
                    "en": "We should ask before sending the revised quotation.",
                    "ja": "修正版の見積を送る前に確認すべきです。",
                    "focus": "ask",
                    "object": "before sending the revised quotation"
                },
                {
                    "en": "I asked before using the customer's logo.",
                    "ja": "私は顧客のロゴを使う前に確認しました。",
                    "focus": "asked",
                    "object": "before using the customer's logo"
                }
            ],
            "dailyExamples": [
                {
                    "en": "Ask before you borrow my phone.",
                    "ja": "私の携帯を借りる前に聞いてください。",
                    "focus": "Ask",
                    "object": "before you borrow my phone"
                },
                {
                    "en": "I asked before opening the box.",
                    "ja": "私は箱を開ける前に確認しました。",
                    "focus": "asked",
                    "object": "before opening the box"
                }
            ]
        },
        {
            "id": "ask-permission",
            "title": "⑥ ask permission / 許可を求める",
            "pattern": "ASK + permission",
            "transitivity": "他動詞",
            "structure": "S + ask + O",
            "image": "行動してよいか確認を求めるイメージ。",
            "point": "permission, approval, confirmation は仕事で重要。",
            "examples": [
                {
                    "en": "We need to ask permission before taking photos.",
                    "ja": "写真を撮る前に許可を求める必要があります。",
                    "focus": "ask",
                    "object": "permission"
                },
                {
                    "en": "I asked approval before placing the order.",
                    "ja": "私は発注前に承認を求めました。",
                    "focus": "asked",
                    "object": "approval"
                },
                {
                    "en": "Please ask confirmation before production starts.",
                    "ja": "製作開始前に確認を求めてください。",
                    "focus": "ask",
                    "object": "confirmation"
                }
            ],
            "dailyExamples": [
                {
                    "en": "I asked permission to leave early.",
                    "ja": "私は早退の許可を求めました。",
                    "focus": "asked",
                    "object": "permission"
                },
                {
                    "en": "Children should ask permission before using it.",
                    "ja": "子どもはそれを使う前に許可を求めるべきです。",
                    "focus": "ask",
                    "object": "permission"
                }
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
                {
                    "en": "We asked for a revised quotation.",
                    "ja": "私たちは修正版の見積を依頼しました。",
                    "focus": "asked for",
                    "object": "a revised quotation"
                },
                {
                    "en": "Please ask for confirmation before production.",
                    "ja": "製作前に確認を求めてください。",
                    "focus": "ask for",
                    "object": "confirmation"
                },
                {
                    "en": "The client asked for a shorter lead time.",
                    "ja": "顧客はより短い納期を求めました。",
                    "focus": "asked for",
                    "object": "a shorter lead time"
                }
            ]
        },
        {
            "phrase": "ask about",
            "ja": "〜について尋ねる",
            "image": "特定の話題に確認を向けるイメージ。",
            "pattern": "ASK ABOUT + topic",
            "examples": [
                {
                    "en": "I asked about the delivery date.",
                    "ja": "私は納品日について確認しました。",
                    "focus": "asked about",
                    "object": "the delivery date"
                },
                {
                    "en": "The customer asked about the new product.",
                    "ja": "顧客は新製品について尋ねました。",
                    "focus": "asked about",
                    "object": "the new product"
                },
                {
                    "en": "Can you ask about the payment terms?",
                    "ja": "あなたは支払条件について確認できますか？",
                    "focus": "ask about",
                    "object": "the payment terms"
                }
            ]
        },
        {
            "phrase": "ask around",
            "ja": "周りに聞いて回る",
            "image": "答えを持っていそうな人を複数あたるイメージ。",
            "pattern": "ASK AROUND",
            "examples": [
                {
                    "en": "I will ask around to find the missing file.",
                    "ja": "私はなくなったファイルを見つけるために周りに聞いてみます。",
                    "focus": "ask around",
                    "object": "to find the missing file"
                },
                {
                    "en": "We asked around, but no one knew the answer.",
                    "ja": "私たちは周りに聞きましたが、誰も答えを知りませんでした。",
                    "focus": "asked around",
                    "object": "but no one knew the answer"
                },
                {
                    "en": "Please ask around before we buy new parts.",
                    "ja": "新しい部品を買う前に周りに確認してください。",
                    "focus": "ask around",
                    "object": "before we buy new parts"
                }
            ]
        },
        {
            "phrase": "ask in",
            "ja": "中へ招き入れる",
            "image": "外にいる相手を中に入れるよう求めるイメージ。",
            "pattern": "ASK + person + IN",
            "examples": [
                {
                    "en": "Please ask the client in when they arrive.",
                    "ja": "顧客が到着したら中へお通ししてください。",
                    "focus": "ask in",
                    "object": "the client"
                },
                {
                    "en": "The receptionist asked us in right away.",
                    "ja": "受付の方がすぐに私たちを中へ通してくれました。",
                    "focus": "asked in",
                    "object": "us"
                },
                {
                    "en": "I will ask the visitors in before the meeting.",
                    "ja": "会議前に来訪者を中へ招き入れます。",
                    "focus": "ask in",
                    "object": "the visitors"
                }
            ]
        },
        {
            "phrase": "ask over",
            "ja": "家や場所に招く",
            "image": "相手をこちらの場所へ来るよう誘うイメージ。",
            "pattern": "ASK + person + OVER",
            "examples": [
                {
                    "en": "We asked the supplier over for a product meeting.",
                    "ja": "私たちは製品打合せのために仕入先を招きました。",
                    "focus": "asked over",
                    "object": "the supplier"
                },
                {
                    "en": "She asked the team over after work.",
                    "ja": "彼女は仕事後にチームを招きました。",
                    "focus": "asked over",
                    "object": "the team"
                },
                {
                    "en": "I asked my friend over for dinner.",
                    "ja": "私は友人を夕食に招きました。",
                    "focus": "asked over",
                    "object": "my friend"
                }
            ]
        },
        {
            "phrase": "ask after",
            "ja": "〜の様子を尋ねる",
            "image": "相手や家族の状態を気にかけて聞くイメージ。",
            "pattern": "ASK AFTER + person",
            "examples": [
                {
                    "en": "The client asked after your health.",
                    "ja": "顧客はあなたの体調を気にかけていました。",
                    "focus": "asked after",
                    "object": "your health"
                },
                {
                    "en": "She asked after the manager during the call.",
                    "ja": "彼女は電話中にマネージャーの様子を尋ねました。",
                    "focus": "asked after",
                    "object": "the manager"
                },
                {
                    "en": "He asked after my family.",
                    "ja": "彼は私の家族の様子を尋ねました。",
                    "focus": "asked after",
                    "object": "my family"
                }
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
  "core": "声・電話・判断を相手や対象に向ける",
  "coreDetail": "CALLは、相手に声や電話を向けるだけでなく、会議を開く、何かを〜と呼ぶ、状況を〜だと判断する感覚まで広がります。仕事では顧客への電話、折り返し、中止判断、必要性の説明でよく使います。",
  "coreVisual": {
    "from": [
      "📞 電話",
      "🗣️ 声",
      "📌 判断",
      "📅 会議"
    ],
    "to": "相手・対象へ向ける",
    "label": "声/判断 → 相手・対象"
  },
  "meanings": [
    {
      "id": "call-phone",
      "title": "① call / 電話する",
      "pattern": "CALL + 人/場所",
      "transitivity": "他動詞",
      "structure": "S + call + O",
      "image": "電話で相手に連絡を向けるイメージ。",
      "point": "client, office, supplier など仕事相手に使いやすい。",
      "examples": [
        {
          "en": "I will call the client this afternoon.",
          "ja": "私は今日の午後、顧客に電話します。",
          "focus": "call",
          "object": "the client"
        },
        {
          "en": "Please call the office before you visit the site.",
          "ja": "現場へ行く前に事務所へ電話してください。",
          "focus": "call",
          "object": "the office"
        },
        {
          "en": "She called the supplier to check the delivery date.",
          "ja": "彼女は納期を確認するために仕入先へ電話しました。",
          "focus": "called",
          "object": "the supplier"
        }
      ],
      "dailyExamples": [
        {
          "en": "Call me when you arrive.",
          "ja": "到着したら私に電話してください。",
          "focus": "Call",
          "object": "me"
        },
        {
          "en": "I called my friend after dinner.",
          "ja": "夕食後に友人に電話しました。",
          "focus": "called",
          "object": "my friend"
        }
      ]
    },
    {
      "id": "call-meeting",
      "title": "② call a meeting / 会議を開く・招集する",
      "pattern": "CALL + meeting",
      "transitivity": "他動詞",
      "structure": "S + call + O",
      "image": "必要な人を呼び集めるイメージ。",
      "point": "急な確認や判断が必要な場面で使う。",
      "examples": [
        {
          "en": "We should call a quick meeting before sending the quotation.",
          "ja": "見積を送る前に短い会議を開いた方がよいです。",
          "focus": "call",
          "object": "a quick meeting"
        },
        {
          "en": "The manager called a meeting to discuss the issue.",
          "ja": "マネージャーはその問題を話し合うために会議を開きました。",
          "focus": "called",
          "object": "a meeting"
        },
        {
          "en": "They called an emergency meeting after the system error.",
          "ja": "システムエラー後、彼らは緊急会議を開きました。",
          "focus": "called",
          "object": "an emergency meeting"
        }
      ],
      "dailyExamples": [
        {
          "en": "The teacher called a class meeting.",
          "ja": "先生はクラス会議を開きました。",
          "focus": "called",
          "object": "a class meeting"
        },
        {
          "en": "We called a family meeting last night.",
          "ja": "昨夜、家族会議を開きました。",
          "focus": "called",
          "object": "a family meeting"
        }
      ]
    },
    {
      "id": "call-name",
      "title": "③ call A B / AをBと呼ぶ",
      "pattern": "CALL + A + B",
      "transitivity": "他動詞",
      "structure": "S + call + O + C",
      "image": "対象に名前や呼び方をつけるイメージ。",
      "point": "製品名・案件名・呼び方の説明で使いやすい。",
      "examples": [
        {
          "en": "We call this product Glow Beam Plus.",
          "ja": "私たちはこの製品をグロービームプラスと呼んでいます。",
          "focus": "call",
          "object": "this product"
        },
        {
          "en": "Please call him Watanabe-san in the email.",
          "ja": "メールでは彼を渡辺さんと呼んでください。",
          "focus": "call",
          "object": "him"
        },
        {
          "en": "The team called the new plan Project A.",
          "ja": "チームは新しい計画をプロジェクトAと呼びました。",
          "focus": "called",
          "object": "the new plan"
        }
      ],
      "dailyExamples": [
        {
          "en": "My friends call me Kazu.",
          "ja": "友人は私をカズと呼びます。",
          "focus": "call",
          "object": "me"
        },
        {
          "en": "We call that place the old park.",
          "ja": "私たちはその場所を古い公園と呼んでいます。",
          "focus": "call",
          "object": "that place"
        }
      ]
    },
    {
      "id": "call-judge",
      "title": "④ call it / 〜と判断する・見なす",
      "pattern": "CALL + O + C",
      "transitivity": "他動詞",
      "structure": "S + call + O + C",
      "image": "状況や対象に判断ラベルをつけるイメージ。",
      "point": "priority, problem, realistic などと相性がよい。",
      "examples": [
        {
          "en": "We can call this project a priority this month.",
          "ja": "私たちは今月、この案件を優先事項と見なせます。",
          "focus": "call",
          "object": "this project"
        },
        {
          "en": "I would call the schedule realistic.",
          "ja": "私はそのスケジュールは現実的だと思います。",
          "focus": "call",
          "object": "the schedule"
        },
        {
          "en": "The customer called the delay a serious problem.",
          "ja": "顧客はその遅延を重大な問題だと見なしました。",
          "focus": "called",
          "object": "the delay"
        }
      ],
      "dailyExamples": [
        {
          "en": "I would call this movie exciting.",
          "ja": "私はこの映画をわくわくする作品だと思います。",
          "focus": "call",
          "object": "this movie"
        },
        {
          "en": "She called the meal perfect.",
          "ja": "彼女はその食事を完璧だと言いました。",
          "focus": "called",
          "object": "the meal"
        }
      ]
    }
  ],
  "collocations": [],
  "phrasalVerbs": [
    {
      "phrase": "call back",
      "ja": "折り返し電話する",
      "image": "相手からの連絡に戻すイメージ。",
      "pattern": "CALL back",
      "examples": [
        {
          "en": "I will call back the client after the meeting.",
          "ja": "会議後に顧客へ折り返し電話します。",
          "focus": "call back",
          "object": "the client"
        },
        {
          "en": "Please call me back when you are free.",
          "ja": "時間がある時に私へ折り返し電話してください。",
          "focus": "call",
          "object": "me back"
        }
      ]
    },
    {
      "phrase": "call off",
      "ja": "中止する",
      "image": "予定されていたものを止めるイメージ。",
      "pattern": "CALL off + O",
      "examples": [
        {
          "en": "We called off the visit because of the heavy rain.",
          "ja": "大雨のため、私たちは訪問を中止しました。",
          "focus": "called off",
          "object": "the visit"
        },
        {
          "en": "The client called off the meeting this morning.",
          "ja": "顧客は今朝、会議を中止しました。",
          "focus": "called off",
          "object": "the meeting"
        }
      ]
    },
    {
      "phrase": "call on",
      "ja": "頼む・指名する・訪問する",
      "image": "相手に声をかけて行動を求めるイメージ。",
      "pattern": "CALL on + 人",
      "examples": [
        {
          "en": "The manager called on me to explain the result.",
          "ja": "マネージャーは結果を説明するよう私を指名しました。",
          "focus": "called on",
          "object": "me"
        },
        {
          "en": "We called on the customer during the business trip.",
          "ja": "私たちは出張中にその顧客を訪問しました。",
          "focus": "called on",
          "object": "the customer"
        }
      ]
    },
    {
      "phrase": "call for",
      "ja": "必要とする・求める",
      "image": "状況が何かを呼び求めるイメージ。",
      "pattern": "CALL for + O",
      "examples": [
        {
          "en": "This issue calls for a quick decision.",
          "ja": "この問題には迅速な判断が必要です。",
          "focus": "calls for",
          "object": "a quick decision"
        },
        {
          "en": "The project calls for careful planning.",
          "ja": "その案件には慎重な計画が必要です。",
          "focus": "calls for",
          "object": "careful planning"
        }
      ]
    },
    {
      "phrase": "call up",
      "ja": "電話する・呼び出す",
      "image": "相手や情報を呼び上げるイメージ。",
      "pattern": "CALL up + O",
      "examples": [
        {
          "en": "I called up the supplier to confirm the stock.",
          "ja": "在庫を確認するために仕入先へ電話しました。",
          "focus": "called up",
          "object": "the supplier"
        },
        {
          "en": "Please call up the old data on the screen.",
          "ja": "画面に古いデータを呼び出してください。",
          "focus": "call up",
          "object": "the old data"
        }
      ]
    },
    {
      "phrase": "call in",
      "ja": "呼び入れる・電話で参加する",
      "image": "外から中へ呼ぶイメージ。",
      "pattern": "CALL in + O",
      "examples": [
        {
          "en": "We called in a technician to check the controller.",
          "ja": "コントローラー確認のため技術者を呼びました。",
          "focus": "called in",
          "object": "a technician"
        },
        {
          "en": "She called in to join the meeting remotely.",
          "ja": "彼女は遠隔で会議に参加するため電話しました。",
          "focus": "called in"
        }
      ]
    },
    {
      "phrase": "call out",
      "ja": "指摘する・声に出す",
      "image": "外へ向けてはっきり呼ぶイメージ。",
      "pattern": "CALL out + O",
      "examples": [
        {
          "en": "He called out the mistake in the quotation.",
          "ja": "彼は見積のミスを指摘しました。",
          "focus": "called out",
          "object": "the mistake"
        },
        {
          "en": "Please call out the number when you see it.",
          "ja": "番号が見えたら声に出してください。",
          "focus": "call out",
          "object": "the number"
        }
      ]
    },
    {
      "phrase": "call around",
      "ja": "あちこちに電話する",
      "image": "複数の相手に電話して回るイメージ。",
      "pattern": "CALL around",
      "examples": [
        {
          "en": "I called around to check available stock.",
          "ja": "在庫があるか確認するため、あちこちに電話しました。",
          "focus": "called around"
        },
        {
          "en": "We should call around before deciding the delivery date.",
          "ja": "納期を決める前に、周りに電話で確認した方がよいです。",
          "focus": "call around"
        }
      ]
    }
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
  "core": "人・物・仕組みが止まらず動き続ける",
  "coreDetail": "RUNは『走る』だけでなく、会社を運営する、会議を進める、システムが動く、テストを実行する、時間や在庫が足りなくなる、という仕事で非常に広い意味を持ちます。",
  "coreVisual": {
    "from": [
      "🏃 人",
      "⚙️ システム",
      "📊 業務",
      "🧪 テスト",
      "⏰ 時間"
    ],
    "to": "動き続ける・進む",
    "label": "止まらず動く"
  },
  "meanings": [
    {
      "id": "run-manage",
      "title": "① run / 運営する・進行する",
      "pattern": "RUN + business/meeting/project",
      "transitivity": "他動詞",
      "structure": "S + run + O",
      "image": "業務や会議を前に進めるイメージ。",
      "point": "business, meeting, project, process と使いやすい。",
      "examples": [
        {
          "en": "She runs the sales team very well.",
          "ja": "彼女は営業チームをとてもうまく運営しています。",
          "focus": "runs",
          "object": "the sales team"
        },
        {
          "en": "Can you run the meeting tomorrow?",
          "ja": "明日の会議を進行してもらえますか？",
          "focus": "run",
          "object": "the meeting"
        },
        {
          "en": "We need someone to run the project smoothly.",
          "ja": "その案件を円滑に進める人が必要です。",
          "focus": "run",
          "object": "the project"
        }
      ],
      "dailyExamples": [
        {
          "en": "My uncle runs a small shop.",
          "ja": "私のおじは小さなお店を経営しています。",
          "focus": "runs",
          "object": "a small shop"
        },
        {
          "en": "She runs the event every year.",
          "ja": "彼女は毎年そのイベントを運営しています。",
          "focus": "runs",
          "object": "the event"
        }
      ]
    },
    {
      "id": "run-system",
      "title": "② run / 動く・稼働する",
      "pattern": "RUN",
      "transitivity": "自動詞",
      "structure": "S + run",
      "image": "機械やシステムが動き続けるイメージ。",
      "point": "system, machine, app などで使う。",
      "examples": [
        {
          "en": "The system runs without any errors now.",
          "ja": "そのシステムは今、エラーなしで動いています。",
          "focus": "runs"
        },
        {
          "en": "This app runs smoothly on mobile.",
          "ja": "このアプリはスマホでスムーズに動きます。",
          "focus": "runs"
        },
        {
          "en": "The machine ran all night during the test.",
          "ja": "その機械はテスト中、一晩中稼働しました。",
          "focus": "ran"
        }
      ],
      "dailyExamples": [
        {
          "en": "My phone runs slowly when the battery is low.",
          "ja": "バッテリーが少ないと私のスマホは動きが遅くなります。",
          "focus": "runs"
        },
        {
          "en": "The train runs every ten minutes.",
          "ja": "その電車は10分ごとに走っています。",
          "focus": "runs"
        }
      ]
    },
    {
      "id": "run-test",
      "title": "③ run a test / 実行する",
      "pattern": "RUN + test/report/program",
      "transitivity": "他動詞",
      "structure": "S + run + O",
      "image": "確認や処理を実行するイメージ。",
      "point": "test, report, program, check と相性がよい。",
      "examples": [
        {
          "en": "Please run a brightness test before installation.",
          "ja": "設置前に明るさのテストを実行してください。",
          "focus": "run",
          "object": "a brightness test"
        },
        {
          "en": "I ran the report before the meeting.",
          "ja": "会議前にレポートを出しました。",
          "focus": "ran",
          "object": "the report"
        },
        {
          "en": "We should run one more check before sending the file.",
          "ja": "ファイル送信前にもう一度確認を実行した方がよいです。",
          "focus": "run",
          "object": "one more check"
        }
      ],
      "dailyExamples": [
        {
          "en": "I ran a virus check on my computer.",
          "ja": "パソコンでウイルスチェックを実行しました。",
          "focus": "ran",
          "object": "a virus check"
        },
        {
          "en": "He runs the game on an old laptop.",
          "ja": "彼は古いノートパソコンでそのゲームを動かしています。",
          "focus": "runs",
          "object": "the game"
        }
      ]
    },
    {
      "id": "run-late",
      "title": "④ run late / 遅れる・長引く",
      "pattern": "RUN + adjective/adverb",
      "transitivity": "自動詞",
      "structure": "S + run + late/smoothly",
      "image": "時間や進行がその状態で動くイメージ。",
      "point": "run late, run smoothly は仕事で非常に便利。",
      "examples": [
        {
          "en": "The meeting is running late.",
          "ja": "会議が長引いています。",
          "focus": "running",
          "object": "late"
        },
        {
          "en": "The project ran smoothly after we fixed the issue.",
          "ja": "問題を直した後、その案件は順調に進みました。",
          "focus": "ran",
          "object": "smoothly"
        },
        {
          "en": "Production may run late if the parts do not arrive.",
          "ja": "部品が届かない場合、生産が遅れるかもしれません。",
          "focus": "run",
          "object": "late"
        }
      ],
      "dailyExamples": [
        {
          "en": "The bus is running late today.",
          "ja": "今日はバスが遅れています。",
          "focus": "running",
          "object": "late"
        },
        {
          "en": "The party ran smoothly.",
          "ja": "パーティーは順調に進みました。",
          "focus": "ran",
          "object": "smoothly"
        }
      ]
    }
  ],
  "collocations": [],
  "phrasalVerbs": [
    {
      "phrase": "run out",
      "ja": "尽きる・なくなる",
      "image": "残量が最後まで進んでゼロになるイメージ。",
      "pattern": "RUN out",
      "examples": [
        {
          "en": "Our stock will run out this week.",
          "ja": "在庫は今週なくなりそうです。",
          "focus": "run out"
        },
        {
          "en": "Time ran out before we finished the test.",
          "ja": "テストを終える前に時間がなくなりました。",
          "focus": "ran out"
        }
      ]
    },
    {
      "phrase": "run out of",
      "ja": "〜を使い切る・切らす",
      "image": "持っているものが外へ出切ってなくなるイメージ。",
      "pattern": "RUN out of + O",
      "examples": [
        {
          "en": "We ran out of sample units yesterday.",
          "ja": "昨日、サンプル品を切らしました。",
          "focus": "ran out of",
          "object": "sample units"
        },
        {
          "en": "The team ran out of time before the deadline.",
          "ja": "チームは締切前に時間がなくなりました。",
          "focus": "ran out of",
          "object": "time"
        }
      ]
    },
    {
      "phrase": "run into",
      "ja": "偶然会う・問題にぶつかる",
      "image": "進んでいて何かにぶつかるイメージ。",
      "pattern": "RUN into + O",
      "examples": [
        {
          "en": "We ran into a problem during installation.",
          "ja": "設置中に問題にぶつかりました。",
          "focus": "ran into",
          "object": "a problem"
        },
        {
          "en": "I ran into the client at the station.",
          "ja": "駅で偶然その顧客に会いました。",
          "focus": "ran into",
          "object": "the client"
        }
      ]
    },
    {
      "phrase": "run through",
      "ja": "ざっと確認する・通しで行う",
      "image": "最初から最後まで流すイメージ。",
      "pattern": "RUN through + O",
      "examples": [
        {
          "en": "Let's run through the proposal before the meeting.",
          "ja": "会議前に提案書をざっと確認しましょう。",
          "focus": "run through",
          "object": "the proposal"
        },
        {
          "en": "We ran through the demo once with the team.",
          "ja": "チームでデモを一度通しで行いました。",
          "focus": "ran through",
          "object": "the demo"
        }
      ]
    },
    {
      "phrase": "run over",
      "ja": "超過する・ざっと確認する",
      "image": "予定の線を越えて進むイメージ。",
      "pattern": "RUN over",
      "examples": [
        {
          "en": "The meeting ran over by twenty minutes.",
          "ja": "会議は20分超過しました。",
          "focus": "ran over"
        },
        {
          "en": "Can we run over the schedule one more time?",
          "ja": "スケジュールをもう一度ざっと確認できますか？",
          "focus": "run over",
          "object": "the schedule"
        }
      ]
    },
    {
      "phrase": "run by",
      "ja": "〜に確認する・説明して意見をもらう",
      "image": "相手の前を通して確認するイメージ。",
      "pattern": "RUN by + 人",
      "examples": [
        {
          "en": "Let me run this idea by my manager first.",
          "ja": "まずこの案を上司に確認させてください。",
          "focus": "run",
          "object": "this idea by my manager"
        },
        {
          "en": "I ran the price change by the sales team.",
          "ja": "価格変更について営業チームに確認しました。",
          "focus": "ran",
          "object": "the price change by the sales team"
        }
      ]
    },
    {
      "phrase": "run on",
      "ja": "続く・長引く",
      "image": "止まらず続いていくイメージ。",
      "pattern": "RUN on",
      "examples": [
        {
          "en": "The discussion ran on longer than expected.",
          "ja": "議論は予想より長引きました。",
          "focus": "ran on"
        },
        {
          "en": "The report runs on for many pages.",
          "ja": "そのレポートは多くのページにわたっています。",
          "focus": "runs on"
        }
      ]
    },
    {
      "phrase": "run across",
      "ja": "偶然見つける",
      "image": "動いている途中で偶然出会うイメージ。",
      "pattern": "RUN across + O",
      "examples": [
        {
          "en": "I ran across an old price list in the folder.",
          "ja": "フォルダ内で古い価格表を偶然見つけました。",
          "focus": "ran across",
          "object": "an old price list"
        },
        {
          "en": "She ran across a useful example online.",
          "ja": "彼女はオンラインで役立つ例を偶然見つけました。",
          "focus": "ran across",
          "object": "a useful example"
        }
      ]
    },
    {
      "phrase": "run after",
      "ja": "追いかける",
      "image": "後ろから追って走るイメージ。",
      "pattern": "RUN after + O",
      "examples": [
        {
          "en": "The staff ran after the delivery truck.",
          "ja": "スタッフは配送トラックを追いかけました。",
          "focus": "ran after",
          "object": "the delivery truck"
        },
        {
          "en": "He ran after the customer to return the document.",
          "ja": "彼は資料を返すために顧客を追いかけました。",
          "focus": "ran after",
          "object": "the customer"
        }
      ]
    },
    {
      "phrase": "run away",
      "ja": "逃げる・離れる",
      "image": "その場から走って離れるイメージ。",
      "pattern": "RUN away",
      "examples": [
        {
          "en": "The issue will not run away if we discuss it now.",
          "ja": "今話し合えば、その問題から逃げずに済みます。",
          "focus": "run away"
        },
        {
          "en": "The child ran away from the dog.",
          "ja": "その子どもは犬から逃げました。",
          "focus": "ran away",
          "object": "from the dog"
        }
      ]
    }
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
  "core": "人・物・情報を、ある場所や状態から離す/残す",
  "coreDetail": "LEAVEは『離れる』だけでなく、メッセージを残す、資料を置いておく、仕事を任せる、時間を残す、不要なものを除外するなど、仕事で非常に使う範囲が広い動詞です。",
  "coreVisual": {
    "from": [
      "人",
      "物",
      "情報",
      "仕事",
      "状態"
    ],
    "to": "離れる / 残る / 預ける",
    "label": "離す・残す・任せる"
  },
  "meanings": [
    {
      "id": "leave-place",
      "title": "① leave / 出る・離れる",
      "pattern": "LEAVE + place",
      "transitivity": "他動詞・自動詞",
      "structure": "S + leave + O",
      "image": "今いる場所から離れるイメージ。",
      "point": "office, meeting, site など場所と使う。",
      "examples": [
        {
          "en": "I will leave the office at six today.",
          "ja": "私は今日は6時に会社を出ます。",
          "focus": "leave",
          "object": "the office"
        },
        {
          "en": "She left the meeting early to visit the client.",
          "ja": "彼女は顧客訪問のため会議を早めに退出しました。",
          "focus": "left",
          "object": "the meeting"
        },
        {
          "en": "Please check the file before you leave.",
          "ja": "出る前にそのファイルを確認してください。",
          "focus": "leave"
        }
      ],
      "dailyExamples": [
        {
          "en": "We left home at seven.",
          "ja": "私たちは7時に家を出ました。",
          "focus": "left",
          "object": "home"
        },
        {
          "en": "He left the restaurant after lunch.",
          "ja": "彼は昼食後にレストランを出ました。",
          "focus": "left",
          "object": "the restaurant"
        }
      ]
    },
    {
      "id": "leave-message",
      "title": "② leave a message / 残す",
      "pattern": "LEAVE + message/file/time",
      "transitivity": "他動詞",
      "structure": "S + leave + O",
      "image": "その場に情報や物を残すイメージ。",
      "point": "message, note, file, enough time と使いやすい。",
      "examples": [
        {
          "en": "Please leave a message if I am away.",
          "ja": "私が不在の場合は伝言を残してください。",
          "focus": "leave",
          "object": "a message"
        },
        {
          "en": "I left the file on your desk.",
          "ja": "あなたの机にそのファイルを置いておきました。",
          "focus": "left",
          "object": "the file"
        },
        {
          "en": "We should leave enough time for final checking.",
          "ja": "最終確認のために十分な時間を残すべきです。",
          "focus": "leave",
          "object": "enough time"
        }
      ],
      "dailyExamples": [
        {
          "en": "She left a note on the fridge.",
          "ja": "彼女は冷蔵庫にメモを残しました。",
          "focus": "left",
          "object": "a note"
        },
        {
          "en": "Leave your shoes here.",
          "ja": "靴はここに置いてください。",
          "focus": "Leave",
          "object": "your shoes"
        }
      ]
    },
    {
      "id": "leave-to",
      "title": "③ leave it to me / 任せる",
      "pattern": "LEAVE + O + to + 人",
      "transitivity": "他動詞",
      "structure": "S + leave + O + to + 人",
      "image": "仕事や判断を相手側に預けるイメージ。",
      "point": "leave it to me は仕事で非常に便利。",
      "examples": [
        {
          "en": "Please leave the customer follow-up to me.",
          "ja": "顧客フォローは私に任せてください。",
          "focus": "leave",
          "object": "the customer follow-up"
        },
        {
          "en": "We left the final design to the client.",
          "ja": "私たちは最終デザインを顧客に任せました。",
          "focus": "left",
          "object": "the final design"
        },
        {
          "en": "You can leave the schedule adjustment to our team.",
          "ja": "スケジュール調整は私たちのチームに任せてください。",
          "focus": "leave",
          "object": "the schedule adjustment"
        }
      ],
      "dailyExamples": [
        {
          "en": "Leave it to me.",
          "ja": "それは私に任せてください。",
          "focus": "Leave",
          "object": "it"
        },
        {
          "en": "I left dinner to my brother tonight.",
          "ja": "今夜の夕食は兄に任せました。",
          "focus": "left",
          "object": "dinner"
        }
      ]
    },
    {
      "id": "leave-state",
      "title": "④ leave + O + 状態 / 〜のままにする",
      "pattern": "LEAVE + O + C",
      "transitivity": "他動詞",
      "structure": "S + leave + O + C",
      "image": "対象をある状態で残すイメージ。",
      "point": "leave it open, leave it unchanged などで使う。",
      "examples": [
        {
          "en": "Please leave the setting unchanged until we test it.",
          "ja": "テストするまで設定は変更しないままにしてください。",
          "focus": "leave",
          "object": "the setting"
        },
        {
          "en": "The update left the old data safe.",
          "ja": "その更新により古いデータは安全なまま残りました。",
          "focus": "left",
          "object": "the old data"
        },
        {
          "en": "Do not leave the issue unresolved.",
          "ja": "その問題を未解決のままにしないでください。",
          "focus": "leave",
          "object": "the issue"
        }
      ],
      "dailyExamples": [
        {
          "en": "Leave the door open.",
          "ja": "ドアは開けたままにしておいてください。",
          "focus": "Leave",
          "object": "the door"
        },
        {
          "en": "I left the light on.",
          "ja": "電気をつけっぱなしにしました。",
          "focus": "left",
          "object": "the light"
        }
      ]
    }
  ],
  "collocations": [],
  "phrasalVerbs": [
    {
      "phrase": "leave out",
      "ja": "省く・除外する",
      "image": "一部を外へ残して入れないイメージ。",
      "pattern": "LEAVE out + O",
      "examples": [
        {
          "en": "Please do not leave out the delivery date.",
          "ja": "納期を省かないでください。",
          "focus": "leave out",
          "object": "the delivery date"
        },
        {
          "en": "We left out the old product from the proposal.",
          "ja": "提案書から旧製品を除外しました。",
          "focus": "left out",
          "object": "the old product"
        }
      ]
    },
    {
      "phrase": "leave behind",
      "ja": "置いていく・取り残す",
      "image": "後ろに残して進むイメージ。",
      "pattern": "LEAVE behind + O",
      "examples": [
        {
          "en": "I left behind the sample at the office.",
          "ja": "事務所にサンプルを置き忘れました。",
          "focus": "left behind",
          "object": "the sample"
        },
        {
          "en": "The new system should not leave any user behind.",
          "ja": "新しいシステムは誰も取り残すべきではありません。",
          "focus": "leave",
          "object": "any user behind"
        }
      ]
    },
    {
      "phrase": "leave for",
      "ja": "〜へ向けて出発する",
      "image": "目的地へ向かって離れるイメージ。",
      "pattern": "LEAVE for + place",
      "examples": [
        {
          "en": "I will leave for the client site at nine.",
          "ja": "9時に顧客の現場へ向けて出発します。",
          "focus": "leave for",
          "object": "the client site"
        },
        {
          "en": "She left for Osaka this morning.",
          "ja": "彼女は今朝、大阪へ向けて出発しました。",
          "focus": "left for",
          "object": "Osaka"
        }
      ]
    },
    {
      "phrase": "leave off",
      "ja": "途中でやめる・中断する",
      "image": "続きがある状態で止めるイメージ。",
      "pattern": "LEAVE off",
      "examples": [
        {
          "en": "Let's continue from where we left off yesterday.",
          "ja": "昨日中断したところから続けましょう。",
          "focus": "left off"
        },
        {
          "en": "The report leaves off before the final result.",
          "ja": "そのレポートは最終結果の前で終わっています。",
          "focus": "leaves off"
        }
      ]
    },
    {
      "phrase": "leave aside",
      "ja": "いったん脇に置く",
      "image": "今は扱わず横に置くイメージ。",
      "pattern": "LEAVE aside + O",
      "examples": [
        {
          "en": "Let's leave aside the price issue for now.",
          "ja": "今は価格の問題はいったん脇に置きましょう。",
          "focus": "leave aside",
          "object": "the price issue"
        },
        {
          "en": "We left aside the minor details and focused on the schedule.",
          "ja": "細かい点はいったん置いて、スケジュールに集中しました。",
          "focus": "left aside",
          "object": "the minor details"
        }
      ]
    },
    {
      "phrase": "leave on",
      "ja": "つけっぱなしにする",
      "image": "オンの状態を残すイメージ。",
      "pattern": "LEAVE on + O",
      "examples": [
        {
          "en": "Please do not leave the display on overnight.",
          "ja": "ディスプレイを一晩つけっぱなしにしないでください。",
          "focus": "leave",
          "object": "the display on"
        },
        {
          "en": "He left the power on after the test.",
          "ja": "彼はテスト後に電源をつけっぱなしにしました。",
          "focus": "left",
          "object": "the power on"
        }
      ]
    },
    {
      "phrase": "leave alone",
      "ja": "そのままにする・放っておく",
      "image": "触らずに残すイメージ。",
      "pattern": "LEAVE alone + O",
      "examples": [
        {
          "en": "Please leave the settings alone until we confirm the issue.",
          "ja": "問題を確認するまで設定はいじらないでください。",
          "focus": "leave",
          "object": "the settings alone"
        },
        {
          "en": "We should leave the existing layout alone.",
          "ja": "既存の配置はそのままにした方がよいです。",
          "focus": "leave",
          "object": "the existing layout alone"
        }
      ]
    },
    {
      "phrase": "leave in",
      "ja": "入れたままにする",
      "image": "中に残した状態にするイメージ。",
      "pattern": "LEAVE in + O",
      "examples": [
        {
          "en": "Please leave this note in the file.",
          "ja": "このメモはファイルに入れたままにしてください。",
          "focus": "leave",
          "object": "this note in the file"
        },
        {
          "en": "We left the old example in the guide for reference.",
          "ja": "参考用に古い例をガイド内に残しました。",
          "focus": "left",
          "object": "the old example in the guide"
        }
      ]
    }
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
    "coreDetail": "MOVEは、物理的に移動するだけでなく、会議や締切を変更する、案件を前に進める、データを移す時にも使います。仕事では日程調整・データ移行・案件進行で特に重要です。",
    "coreVisual": {
      "from": [
        "📦 物",
        "📅 予定",
        "💾 データ",
        "📈 案件",
        "👤 人"
      ],
      "to": "別の場所・時間・段階",
      "label": "位置や状態を動かす"
    },
    "meanings": [
      {
        "id": "move-object",
        "title": "① 物・データを移動する",
        "pattern": "move + 物",
        "transitivity": "他動詞",
        "structure": "S + move + O",
        "image": "物やデータを別の場所へ動かすイメージ。",
        "point": "ファイル・在庫・サンプル・データ移行でよく使います。",
        "examples": [
          {
            "en": "Please move the file to the shared folder.",
            "ja": "ファイルを共有フォルダに移動してください。",
            "focus": "move",
            "object": "the file"
          },
          {
            "en": "We moved the product to another warehouse.",
            "ja": "私たちは商品を別の倉庫へ移しました。",
            "focus": "moved",
            "object": "the product"
          },
          {
            "en": "The team moved the data to the new system.",
            "ja": "チームはデータを新しいシステムへ移しました。",
            "focus": "moved",
            "object": "the data"
          }
        ]
      },
      {
        "id": "move-schedule",
        "title": "② 予定・締切を変更する",
        "pattern": "move + 予定/締切",
        "transitivity": "他動詞",
        "structure": "S + move + O",
        "image": "予定を別の日時へ動かすイメージ。",
        "point": "move the meeting / move the deadline は仕事で頻出です。",
        "examples": [
          {
            "en": "Can we move the meeting to Friday?",
            "ja": "会議を金曜日に変更できますか？",
            "focus": "move",
            "object": "the meeting"
          },
          {
            "en": "We moved the deadline to next week.",
            "ja": "私たちは締切を来週に変更しました。",
            "focus": "moved",
            "object": "the deadline"
          },
          {
            "en": "Please move the call to the afternoon.",
            "ja": "電話会議を午後に変更してください。",
            "focus": "move",
            "object": "the call"
          }
        ]
      },
      {
        "id": "move-forward-basic",
        "title": "③ 案件・作業を進める",
        "pattern": "move + 仕事/案件",
        "transitivity": "他動詞・自動詞",
        "structure": "S + move",
        "image": "物事が次の段階へ進むイメージ。",
        "point": "句動詞のmove forwardとは分け、基本側ではmove自体の『動く・進む』感覚を扱います。",
        "examples": [
          {
            "en": "We need to move quickly on this project.",
            "ja": "私たちはこの案件で素早く動く必要があります。",
            "focus": "move"
          },
          {
            "en": "The project moved to the next phase.",
            "ja": "その案件は次の段階へ進みました。",
            "focus": "moved"
          },
          {
            "en": "This decision will move the plan in the right direction.",
            "ja": "この判断は計画を正しい方向へ進めます。",
            "focus": "move",
            "object": "the plan"
          }
        ]
      },
      {
        "id": "move-place",
        "title": "④ 人・拠点が移る",
        "pattern": "move to + 場所",
        "transitivity": "自動詞",
        "structure": "S + move + M",
        "image": "人や拠点が別の場所へ移るイメージ。",
        "point": "部署異動・移転・引っ越しで使います。",
        "examples": [
          {
            "en": "Our office will move to a new building next month.",
            "ja": "私たちのオフィスは来月、新しいビルへ移転します。",
            "focus": "move"
          },
          {
            "en": "He moved to the sales department last year.",
            "ja": "彼は昨年、営業部へ異動しました。",
            "focus": "moved"
          },
          {
            "en": "The team moved to a larger workspace.",
            "ja": "チームはより広い作業スペースへ移りました。",
            "focus": "moved"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "move on",
        "ja": "次へ進む・気持ちを切り替える",
        "image": "今の話題や段階から次へ進む。",
        "pattern": "move on",
        "examples": [
          {
            "en": "Let’s move on to the next topic.",
            "ja": "次の議題に進みましょう。",
            "focus": "move on"
          },
          {
            "en": "We cannot move on until the client approves it.",
            "ja": "顧客が承認するまで、私たちは次に進めません。",
            "focus": "move on"
          },
          {
            "en": "After the issue was resolved, we moved on quickly.",
            "ja": "問題が解決した後、私たちはすぐ次に進みました。",
            "focus": "moved on"
          }
        ]
      },
      {
        "phrase": "move forward",
        "ja": "前に進む・進める",
        "image": "案件や計画が次の段階へ進む。",
        "pattern": "move forward",
        "examples": [
          {
            "en": "Let’s move forward with this proposal.",
            "ja": "この提案で進めましょう。",
            "focus": "move forward"
          },
          {
            "en": "The approval allowed us to move forward.",
            "ja": "承認により、私たちは前に進めました。",
            "focus": "move forward"
          },
          {
            "en": "We need to move forward before the deadline.",
            "ja": "締切前に進める必要があります。",
            "focus": "move forward"
          }
        ]
      },
      {
        "phrase": "move back",
        "ja": "後ろへ動く・延期する",
        "image": "時間や位置を後ろへ動かす。",
        "pattern": "move back",
        "examples": [
          {
            "en": "Can we move back the review meeting?",
            "ja": "確認会議を後ろにずらせますか？",
            "focus": "move back"
          },
          {
            "en": "We moved back the delivery date by one week.",
            "ja": "私たちは納品日を1週間遅らせました。",
            "focus": "moved back"
          },
          {
            "en": "The launch was moved back because of a parts delay.",
            "ja": "部品遅延により発売が延期されました。",
            "focus": "moved back"
          }
        ]
      },
      {
        "phrase": "move up",
        "ja": "前倒しする・上がる",
        "image": "時間や順位を上・前へ動かす。",
        "pattern": "move up",
        "examples": [
          {
            "en": "Can we move up the meeting to ten?",
            "ja": "会議を10時に早められますか？",
            "focus": "move up"
          },
          {
            "en": "The deadline was moved up by two days.",
            "ja": "締切が2日早まりました。",
            "focus": "moved up"
          },
          {
            "en": "The product moved up in the sales ranking.",
            "ja": "その製品は売上ランキングで順位を上げました。",
            "focus": "moved up"
          }
        ]
      },
      {
        "phrase": "move down",
        "ja": "下げる・下がる",
        "image": "位置・順位・数値を下へ動かす。",
        "pattern": "move down",
        "examples": [
          {
            "en": "Please move down the item on the list.",
            "ja": "リスト上のその項目を下に移動してください。",
            "focus": "move down"
          },
          {
            "en": "The product moved down in the ranking.",
            "ja": "その製品はランキングで順位を下げました。",
            "focus": "moved down"
          },
          {
            "en": "Can we move down this section in the proposal?",
            "ja": "提案書のこのセクションを下へ移動できますか？",
            "focus": "move down"
          }
        ]
      },
      {
        "phrase": "move away",
        "ja": "離れる・遠ざかる",
        "image": "今いる場所や状態から離れる。",
        "pattern": "move away",
        "examples": [
          {
            "en": "Please move away from the entrance during setup.",
            "ja": "設営中は入口から離れてください。",
            "focus": "move away"
          },
          {
            "en": "The market is moving away from low-efficiency products.",
            "ja": "市場は低効率製品から離れつつあります。",
            "focus": "moving away"
          },
          {
            "en": "We should move away from manual tracking.",
            "ja": "私たちは手作業の管理から離れるべきです。",
            "focus": "move away"
          }
        ]
      },
      {
        "phrase": "move into",
        "ja": "〜へ移る・入る",
        "image": "新しい場所や段階の中へ入る。",
        "pattern": "move into",
        "examples": [
          {
            "en": "The team moved into the testing phase.",
            "ja": "チームはテスト段階に入りました。",
            "focus": "moved into"
          },
          {
            "en": "We moved into the new office last month.",
            "ja": "私たちは先月、新しいオフィスへ移転しました。",
            "focus": "moved into"
          },
          {
            "en": "The company moved into the control system market.",
            "ja": "その会社は制御システム市場に参入しました。",
            "focus": "moved into"
          }
        ]
      },
      {
        "phrase": "move out",
        "ja": "外へ出る・退去する",
        "image": "内側から外へ出る。",
        "pattern": "move out",
        "examples": [
          {
            "en": "The team moved out of the temporary office.",
            "ja": "チームは仮オフィスから退去しました。",
            "focus": "moved out"
          },
          {
            "en": "We need to move out the old equipment by Friday.",
            "ja": "金曜日までに古い機器を外へ出す必要があります。",
            "focus": "move out"
          },
          {
            "en": "The tenant moved out at the end of March.",
            "ja": "テナントは3月末に退去しました。",
            "focus": "moved out"
          }
        ]
      },
      {
        "phrase": "move around",
        "ja": "動き回る・配置を変える",
        "image": "同じ範囲の中であちこち動く。",
        "pattern": "move around",
        "examples": [
          {
            "en": "We moved around the furniture before the client visit.",
            "ja": "顧客訪問前に家具の配置を変えました。",
            "focus": "moved around"
          },
          {
            "en": "The staff moved around the venue during setup.",
            "ja": "スタッフは設営中、会場内を動き回りました。",
            "focus": "moved around"
          },
          {
            "en": "Please do not move around the display samples.",
            "ja": "展示サンプルの配置を変えないでください。",
            "focus": "move around"
          }
        ]
      }
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
    "coreDetail": "TURNは、向きを変える、状態が変わる、判断や話題を別方向へ向けるイメージです。仕事では機器のON/OFF、依頼の断り、結果の判明、提出、立て直しでよく使います。",
    "coreVisual": {
      "from": [
        "➡️ 向き",
        "💡 状態",
        "📌 話題",
        "🔌 電源",
        "📄 提出物"
      ],
      "to": "別の向き・状態・相手側",
      "label": "向きや状態が変わる"
    },
    "meanings": [
      {
        "id": "turn-direction",
        "title": "① 向きを変える・曲がる",
        "pattern": "turn + 方向/物",
        "transitivity": "自動詞・他動詞",
        "structure": "S + turn / S + turn + O",
        "image": "向きが別方向へ変わるイメージ。",
        "point": "道案内・画面の向き・物の向きで使います。",
        "examples": [
          {
            "en": "Turn left at the reception desk.",
            "ja": "受付で左に曲がってください。",
            "focus": "Turn"
          },
          {
            "en": "Please turn the screen toward the client.",
            "ja": "画面を顧客の方へ向けてください。",
            "focus": "turn",
            "object": "the screen"
          },
          {
            "en": "Turn the page and check the next section.",
            "ja": "ページをめくって次のセクションを確認してください。",
            "focus": "Turn",
            "object": "the page"
          }
        ]
      },
      {
        "id": "turn-change",
        "title": "② 状態が変わる",
        "pattern": "turn + 形容詞/名詞",
        "transitivity": "自動詞",
        "structure": "S + turn + C",
        "image": "状態が別の状態へ変わる。",
        "point": "turn red / turn positive のように使います。",
        "examples": [
          {
            "en": "The indicator turned red during the test.",
            "ja": "テスト中に表示ランプが赤に変わりました。",
            "focus": "turned"
          },
          {
            "en": "The discussion turned positive after the demo.",
            "ja": "デモの後、議論は前向きになりました。",
            "focus": "turned"
          },
          {
            "en": "The small issue turned serious after the delay.",
            "ja": "遅延後、小さな問題が深刻になりました。",
            "focus": "turned"
          }
        ]
      },
      {
        "id": "turn-transform",
        "title": "③ 変化させる・形にする",
        "pattern": "turn + O + into + 状態",
        "transitivity": "他動詞",
        "structure": "S + turn + O + into + C",
        "image": "アイデアや情報を別の形に変える。",
        "point": "turn the idea into a plan は仕事で使いやすい形です。",
        "examples": [
          {
            "en": "We turned the idea into a clear plan.",
            "ja": "私たちはそのアイデアを明確な計画にしました。",
            "focus": "turned",
            "object": "the idea"
          },
          {
            "en": "The team turned feedback into action items.",
            "ja": "チームはフィードバックを行動項目に変えました。",
            "focus": "turned",
            "object": "feedback"
          },
          {
            "en": "This update can turn a problem into an opportunity.",
            "ja": "この更新は問題を機会に変えられます。",
            "focus": "turn",
            "object": "a problem"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "turn on",
        "ja": "電源を入れる・作動させる",
        "image": "機器や機能をONにする。",
        "pattern": "turn on",
        "examples": [
          {
            "en": "Please turn on the controller before the test.",
            "ja": "テスト前にコントローラーの電源を入れてください。",
            "focus": "turn on"
          },
          {
            "en": "I turned on the lights for the inspection.",
            "ja": "点検のために照明を点けました。",
            "focus": "turned on"
          },
          {
            "en": "Can you turn on the display?",
            "ja": "ディスプレイをつけてもらえますか？",
            "focus": "turn on"
          }
        ]
      },
      {
        "phrase": "turn off",
        "ja": "電源を切る・止める",
        "image": "機器や機能をOFFにする。",
        "pattern": "turn off",
        "examples": [
          {
            "en": "Please turn off the power after the test.",
            "ja": "テスト後に電源を切ってください。",
            "focus": "turn off"
          },
          {
            "en": "We turned off the old system last night.",
            "ja": "昨夜、古いシステムを停止しました。",
            "focus": "turned off"
          },
          {
            "en": "Do not turn off the controller during setup.",
            "ja": "設定中にコントローラーの電源を切らないでください。",
            "focus": "turn off"
          }
        ]
      },
      {
        "phrase": "turn up",
        "ja": "現れる・出てくる・上げる",
        "image": "人や情報が出てくる、または音量などを上げる。",
        "pattern": "turn up",
        "examples": [
          {
            "en": "New issues turned up during the inspection.",
            "ja": "点検中に新しい問題が出てきました。",
            "focus": "turned up"
          },
          {
            "en": "He turned up late for the meeting.",
            "ja": "彼は会議に遅れて現れました。",
            "focus": "turned up"
          },
          {
            "en": "Please turn up the volume a little.",
            "ja": "音量を少し上げてください。",
            "focus": "turn up"
          }
        ]
      },
      {
        "phrase": "turn down",
        "ja": "断る・下げる",
        "image": "依頼を断る、または数値を下げる。",
        "pattern": "turn down",
        "examples": [
          {
            "en": "The client turned down our first proposal.",
            "ja": "顧客は私たちの最初の提案を断りました。",
            "focus": "turned down"
          },
          {
            "en": "Please turn down the brightness during the demo.",
            "ja": "デモ中は明るさを下げてください。",
            "focus": "turn down"
          },
          {
            "en": "We had to turn down the request because of the deadline.",
            "ja": "締切の都合でその依頼を断る必要がありました。",
            "focus": "turn down"
          }
        ]
      },
      {
        "phrase": "turn in",
        "ja": "提出する・引き渡す",
        "image": "書類や成果物を相手側へ渡す。",
        "pattern": "turn in",
        "examples": [
          {
            "en": "Please turn in the report by Friday.",
            "ja": "金曜日までにレポートを提出してください。",
            "focus": "turn in"
          },
          {
            "en": "We turned in the final estimate yesterday.",
            "ja": "私たちは昨日、最終見積を提出しました。",
            "focus": "turned in"
          },
          {
            "en": "Did you turn in the application form?",
            "ja": "申込書を提出しましたか？",
            "focus": "turn in"
          }
        ]
      },
      {
        "phrase": "turn out",
        "ja": "結果として〜になる・判明する",
        "image": "最終的な結果が見える。",
        "pattern": "turn out",
        "examples": [
          {
            "en": "The test turned out well.",
            "ja": "テストはうまくいきました。",
            "focus": "turned out"
          },
          {
            "en": "It turned out that the wiring was incorrect.",
            "ja": "配線が間違っていたことが判明しました。",
            "focus": "turned out"
          },
          {
            "en": "The event turned out better than expected.",
            "ja": "イベントは予想以上に良い結果になりました。",
            "focus": "turned out"
          }
        ]
      },
      {
        "phrase": "turn into",
        "ja": "〜に変わる・変える",
        "image": "別の形や状態へ変化する。",
        "pattern": "turn into",
        "examples": [
          {
            "en": "The idea turned into a strong proposal.",
            "ja": "そのアイデアは良い提案になりました。",
            "focus": "turned into"
          },
          {
            "en": "We turned the feedback into a clear action plan.",
            "ja": "私たちはフィードバックを明確な行動計画にしました。",
            "focus": "turned into"
          },
          {
            "en": "A small delay can turn into a major issue.",
            "ja": "小さな遅れが大きな問題になることがあります。",
            "focus": "turn into"
          }
        ]
      },
      {
        "phrase": "turn around",
        "ja": "振り向く・立て直す",
        "image": "向きを反対にする、または悪い流れを良い方向へ変える。",
        "pattern": "turn around",
        "examples": [
          {
            "en": "We need to turn around this project quickly.",
            "ja": "私たちはこの案件を早く立て直す必要があります。",
            "focus": "turn around"
          },
          {
            "en": "The new manager turned around the sales team.",
            "ja": "新しいマネージャーは営業チームを立て直しました。",
            "focus": "turned around"
          },
          {
            "en": "Please turn around at the next corner.",
            "ja": "次の角で方向転換してください。",
            "focus": "turn around"
          }
        ]
      },
      {
        "phrase": "turn over",
        "ja": "ひっくり返す・引き渡す",
        "image": "反対側へ回す、または相手に渡す。",
        "pattern": "turn over",
        "examples": [
          {
            "en": "Please turn over the sample and check the label.",
            "ja": "サンプルを裏返してラベルを確認してください。",
            "focus": "turn over"
          },
          {
            "en": "We turned over the documents to the legal team.",
            "ja": "私たちは書類を法務チームに引き渡しました。",
            "focus": "turned over"
          },
          {
            "en": "The warehouse turns over inventory quickly.",
            "ja": "その倉庫は在庫の回転が速いです。",
            "focus": "turns over"
          }
        ]
      },
      {
        "phrase": "turn to",
        "ja": "〜に頼る・取りかかる",
        "image": "助けや次の行動へ向きを変える。",
        "pattern": "turn to",
        "examples": [
          {
            "en": "We turned to the engineer for advice.",
            "ja": "私たちは助言を求めて技術者に頼りました。",
            "focus": "turned to"
          },
          {
            "en": "After the meeting, we turned to the next task.",
            "ja": "会議後、私たちは次の作業に取りかかりました。",
            "focus": "turned to"
          },
          {
            "en": "Clients often turn to us for lighting advice.",
            "ja": "顧客は照明の相談でよく私たちを頼ります。",
            "focus": "turn to"
          }
        ]
      }
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
    "coreDetail": "BRINGは、物や人をこちら側へ持ってくる・連れてくるイメージです。仕事では資料・サンプル・情報・価値・話題を会議や顧客の場に持ち込む時によく使います。",
    "coreVisual": {
      "from": [
        "📦 物",
        "👤 人",
        "📄 情報",
        "💡 話題",
        "⭐ 価値"
      ],
      "to": "話し手側・会議・顧客の場",
      "label": "こちらへ持ってくる・もたらす"
    },
    "meanings": [
      {
        "id": "bring-object",
        "title": "① 物・資料を持ってくる",
        "pattern": "bring + 物",
        "transitivity": "他動詞",
        "structure": "S + bring + O",
        "image": "物をこちら側や目的地へ持ってくる。",
        "point": "資料・サンプル・機材などで使います。",
        "examples": [
          {
            "en": "Please bring the sample to the meeting.",
            "ja": "会議にサンプルを持ってきてください。",
            "focus": "bring",
            "object": "the sample"
          },
          {
            "en": "We brought the documents to the client’s office.",
            "ja": "私たちは資料を顧客のオフィスへ持っていきました。",
            "focus": "brought",
            "object": "the documents"
          },
          {
            "en": "Can you bring everything we need for the demo?",
            "ja": "デモに必要なものを全部持ってきてもらえますか？",
            "focus": "bring",
            "object": "everything"
          }
        ]
      },
      {
        "id": "bring-person",
        "title": "② 人を連れてくる",
        "pattern": "bring + 人",
        "transitivity": "他動詞",
        "structure": "S + bring + O",
        "image": "人をこちら側や目的地へ連れてくる。",
        "point": "同僚・技術者・顧客などを連れてくる時に使います。",
        "examples": [
          {
            "en": "I will bring our engineer to the next meeting.",
            "ja": "次の会議には技術担当を連れていきます。",
            "focus": "bring",
            "object": "our engineer"
          },
          {
            "en": "She brought a new team member to the site.",
            "ja": "彼女は新しいチームメンバーを現場に連れていきました。",
            "focus": "brought",
            "object": "a new team member"
          },
          {
            "en": "Please bring someone who understands the system.",
            "ja": "そのシステムを理解している人を連れてきてください。",
            "focus": "bring",
            "object": "someone"
          }
        ]
      },
      {
        "id": "bring-result",
        "title": "③ 結果・価値をもたらす",
        "pattern": "bring + 結果/価値",
        "transitivity": "他動詞",
        "structure": "S + bring + O",
        "image": "行動が良い結果や価値をこちらへ生む。",
        "point": "bring value / bring results のように使います。",
        "examples": [
          {
            "en": "This change will bring better results.",
            "ja": "この変更はより良い結果をもたらします。",
            "focus": "bring",
            "object": "better results"
          },
          {
            "en": "Fast support brought value to the client.",
            "ja": "迅速なサポートは顧客に価値をもたらしました。",
            "focus": "brought",
            "object": "value"
          },
          {
            "en": "The new system can bring major benefits.",
            "ja": "新しいシステムは大きなメリットをもたらす可能性があります。",
            "focus": "bring",
            "object": "major benefits"
          }
        ]
      },
      {
        "id": "bring-price",
        "title": "④ 数値・価格を動かす",
        "pattern": "bring + 価格/数値 + down",
        "transitivity": "他動詞",
        "structure": "S + bring + O + C",
        "image": "価格や数値を別の状態へ持っていく。",
        "point": "基本側ではbring自体の『もたらす・動かす』感覚を扱います。",
        "examples": [
          {
            "en": "We need to bring the price down.",
            "ja": "私たちは価格を下げる必要があります。",
            "focus": "bring",
            "object": "the price"
          },
          {
            "en": "The new process brought the defect rate down.",
            "ja": "新しい手順により不良率が下がりました。",
            "focus": "brought",
            "object": "the defect rate"
          },
          {
            "en": "This plan can bring costs under control.",
            "ja": "この計画はコストを管理下にできます。",
            "focus": "bring",
            "object": "costs"
          }
        ]
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "bring up",
        "ja": "話題に出す・育てる",
        "image": "話題を会議や会話の場に上げる。",
        "pattern": "bring up",
        "examples": [
          {
            "en": "Please bring up the delivery issue in the meeting.",
            "ja": "会議で納期の問題を話題に出してください。",
            "focus": "bring up"
          },
          {
            "en": "The client brought up a concern about the price.",
            "ja": "顧客は価格に関する懸念を話題に出しました。",
            "focus": "brought up"
          },
          {
            "en": "I will bring up this point with my manager.",
            "ja": "この点を上司に相談します。",
            "focus": "bring up"
          }
        ]
      },
      {
        "phrase": "bring in",
        "ja": "導入する・呼び込む",
        "image": "外から新しいものや人を入れる。",
        "pattern": "bring in",
        "examples": [
          {
            "en": "We brought in a specialist for the project.",
            "ja": "その案件のために専門家を呼び入れました。",
            "focus": "brought in"
          },
          {
            "en": "The company plans to bring in a new system.",
            "ja": "会社は新しいシステムを導入する予定です。",
            "focus": "bring in"
          },
          {
            "en": "This campaign brought in many new customers.",
            "ja": "このキャンペーンで多くの新規顧客を獲得しました。",
            "focus": "brought in"
          }
        ]
      },
      {
        "phrase": "bring out",
        "ja": "引き出す・発売する",
        "image": "内側にあるものを外へ出す。",
        "pattern": "bring out",
        "examples": [
          {
            "en": "The new lighting brought out the texture of the sign.",
            "ja": "新しい照明が看板の質感を引き出しました。",
            "focus": "brought out"
          },
          {
            "en": "The company will bring out a new model this summer.",
            "ja": "会社はこの夏、新型モデルを発売します。",
            "focus": "bring out"
          },
          {
            "en": "Good questions can bring out the client’s real needs.",
            "ja": "良い質問は顧客の本当のニーズを引き出せます。",
            "focus": "bring out"
          }
        ]
      },
      {
        "phrase": "bring back",
        "ja": "持ち帰る・復活させる",
        "image": "離れたものを元の場所や状態へ戻す。",
        "pattern": "bring back",
        "examples": [
          {
            "en": "Please bring back the signed document tomorrow.",
            "ja": "署名済み書類を明日持ち帰ってください。",
            "focus": "bring back"
          },
          {
            "en": "The update brought back the old feature.",
            "ja": "その更新で古い機能が復活しました。",
            "focus": "brought back"
          },
          {
            "en": "We need to bring back customer trust.",
            "ja": "私たちは顧客の信頼を取り戻す必要があります。",
            "focus": "bring back"
          }
        ]
      },
      {
        "phrase": "bring down",
        "ja": "下げる・減らす",
        "image": "価格・コスト・数値を下げる。",
        "pattern": "bring down",
        "examples": [
          {
            "en": "We need to bring down the total cost.",
            "ja": "総コストを下げる必要があります。",
            "focus": "bring down"
          },
          {
            "en": "The new process brought down the defect rate.",
            "ja": "新しい手順により不良率が下がりました。",
            "focus": "brought down"
          },
          {
            "en": "Can we bring down the delivery fee?",
            "ja": "配送費を下げられますか？",
            "focus": "bring down"
          }
        ]
      },
      {
        "phrase": "bring along",
        "ja": "持ってくる・連れてくる",
        "image": "必要な物や人を一緒に連れてくる。",
        "pattern": "bring along",
        "examples": [
          {
            "en": "Please bring along the latest catalog.",
            "ja": "最新版のカタログを持ってきてください。",
            "focus": "bring along"
          },
          {
            "en": "I brought along our engineer for the site check.",
            "ja": "現場確認のために技術担当を連れてきました。",
            "focus": "brought along"
          },
          {
            "en": "Can you bring along the sample board?",
            "ja": "サンプルボードを持ってきてもらえますか？",
            "focus": "bring along"
          }
        ]
      },
      {
        "phrase": "bring about",
        "ja": "引き起こす・もたらす",
        "image": "原因となって変化を生む。",
        "pattern": "bring about",
        "examples": [
          {
            "en": "The new rule brought about major changes.",
            "ja": "新しい規則は大きな変化をもたらしました。",
            "focus": "brought about"
          },
          {
            "en": "Better planning can bring about fewer delays.",
            "ja": "より良い計画により遅延を減らせます。",
            "focus": "bring about"
          },
          {
            "en": "The system error brought about several complaints.",
            "ja": "システムエラーにより、いくつかのクレームが発生しました。",
            "focus": "brought about"
          }
        ]
      },
      {
        "phrase": "bring together",
        "ja": "まとめる・集める",
        "image": "別々の人や情報を一つにする。",
        "pattern": "bring together",
        "examples": [
          {
            "en": "The workshop brought together different departments.",
            "ja": "そのワークショップで複数の部署が集まりました。",
            "focus": "brought together"
          },
          {
            "en": "Please bring together the latest information.",
            "ja": "最新情報をまとめてください。",
            "focus": "bring together"
          },
          {
            "en": "This document brings together all key points.",
            "ja": "この資料はすべての重要ポイントをまとめています。",
            "focus": "brings together"
          }
        ]
      },
      {
        "phrase": "bring forward",
        "ja": "前倒しする・提案する",
        "image": "予定や案を前に出す。",
        "pattern": "bring forward",
        "examples": [
          {
            "en": "Can we bring forward the delivery date?",
            "ja": "納品日を前倒しできますか？",
            "focus": "bring forward"
          },
          {
            "en": "The team brought forward a new proposal.",
            "ja": "チームは新しい提案を出しました。",
            "focus": "brought forward"
          },
          {
            "en": "Please bring forward any concerns by Friday.",
            "ja": "金曜日までに懸念点を出してください。",
            "focus": "bring forward"
          }
        ]
      },
      {
        "phrase": "bring over",
        "ja": "持ってくる・連れてくる",
        "image": "別の場所からこちらへ持ってくる。",
        "pattern": "bring over",
        "examples": [
          {
            "en": "Can you bring over the sample board tomorrow?",
            "ja": "明日サンプルボードを持ってきてもらえますか？",
            "focus": "bring over"
          },
          {
            "en": "I brought over the catalog for the client.",
            "ja": "顧客用にカタログを持ってきました。",
            "focus": "brought over"
          },
          {
            "en": "Please bring over the latest price list.",
            "ja": "最新版の価格表を持ってきてください。",
            "focus": "bring over"
          }
        ]
      }
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
        { "en": "Please hold on while I check the stock.", "ja": "在庫を確認しますので少々お待ちください。", "focus": "hold on" },
        { "en": "We need to hold on until the supplier replies.", "ja": "仕入先から返信が来るまで持ちこたえる必要があります。", "focus": "hold on" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold up",
      "ja": "遅らせる・持ちこたえる",
      "image": "進行を止める、または状態を保つ。",
      "pattern": "hold up",
      "examples": [
        { "en": "The approval issue held up the shipment.", "ja": "承認の問題で出荷が遅れました。", "focus": "held up" },
        { "en": "The sample held up well during the test.", "ja": "サンプルは試験中よく持ちこたえました。", "focus": "held up" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold back",
      "ja": "抑える・控える",
      "image": "感情・情報・進行を抑える。",
      "pattern": "hold back + 名詞",
      "examples": [
        { "en": "Please do not hold back important information.", "ja": "重要な情報は隠さないでください。", "focus": "hold back" },
        { "en": "The missing data held back the report.", "ja": "不足データが報告書の作成を遅らせました。", "focus": "held back" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold off",
      "ja": "延期する・控える",
      "image": "行動や判断を少し待つ。",
      "pattern": "hold off on + 名詞/動名詞",
      "examples": [
        { "en": "We should hold off on the order until we confirm the price.", "ja": "価格を確認するまで発注は控えるべきです。", "focus": "hold off" },
        { "en": "The client held off on the final decision.", "ja": "顧客は最終判断を保留しました。", "focus": "held off" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold out",
      "ja": "持ちこたえる・差し出す",
      "image": "条件を保って待つ、または手を差し出す。",
      "pattern": "hold out",
      "examples": [
        { "en": "The team held out until the deadline was extended.", "ja": "チームは締切が延びるまで持ちこたえました。", "focus": "held out" },
        { "en": "We held out for better payment terms.", "ja": "私たちはより良い支払条件を求めて粘りました。", "focus": "held out" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold onto",
      "ja": "〜を手放さない・持ち続ける",
      "image": "必要なものを手放さず保持する。",
      "pattern": "hold onto + 名詞",
      "examples": [
        { "en": "Please hold onto the original receipt.", "ja": "原本の領収書は保管しておいてください。", "focus": "hold onto" },
        { "en": "We should hold onto this data for future analysis.", "ja": "今後の分析のためにこのデータを保持しておくべきです。", "focus": "hold onto" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold together",
      "ja": "まとまった状態を保つ",
      "image": "チームや計画が崩れずに続く。",
      "pattern": "hold together",
      "examples": [
        { "en": "The project held together because everyone shared updates.", "ja": "全員が情報共有したため、プロジェクトはまとまりを保てました。", "focus": "held together" },
        { "en": "We need a clear plan to hold the team together.", "ja": "チームをまとめるには明確な計画が必要です。", "focus": "hold together" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "hold down",
      "ja": "抑える・仕事を維持する",
      "image": "費用を抑える、または仕事や役割を続ける。",
      "pattern": "hold down + 名詞",
      "examples": [
        { "en": "We need to hold down the total cost.", "ja": "私たちは総コストを抑える必要があります。", "focus": "hold down" },
        { "en": "He holds down two roles in the project.", "ja": "彼はそのプロジェクトで2つの役割を担い続けています。", "focus": "holds down" }
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
      "ja": "設定する・準備する・設置する",
      "image": "会議・機器・環境を使える状態にする。",
      "pattern": "set up + 名詞",
      "examples": [
        { "en": "We set up a meeting with the client.", "ja": "私たちは顧客との会議を設定しました。", "focus": "set up" },
        { "en": "Please set up the demo environment before noon.", "ja": "正午までにデモ環境を準備してください。", "focus": "set up" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set out",
      "ja": "出発する・説明し始める",
      "image": "出発する、または方針を示す。",
      "pattern": "set out",
      "examples": [
        { "en": "We set out the main points in the proposal.", "ja": "私たちは提案書で主なポイントを示しました。", "focus": "set out" },
        { "en": "The team set out early for the site.", "ja": "チームは現場へ早めに出発しました。", "focus": "set out" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set off",
      "ja": "出発する・引き起こす",
      "image": "出発する、または反応を引き起こす。",
      "pattern": "set off",
      "examples": [
        { "en": "We set off for the client visit at 8 a.m.", "ja": "私たちは午前8時に顧客訪問へ出発しました。", "focus": "set off" },
        { "en": "The delay set off several schedule changes.", "ja": "その遅れが複数のスケジュール変更を引き起こしました。", "focus": "set off" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set aside",
      "ja": "取っておく・脇に置く",
      "image": "時間・予算・問題を別に確保する。",
      "pattern": "set aside + 名詞",
      "examples": [
        { "en": "We set aside time to review the proposal.", "ja": "私たちは提案書を確認する時間を確保しました。", "focus": "set aside" },
        { "en": "Please set aside this issue until the client replies.", "ja": "顧客から返信が来るまでこの件はいったん脇に置いてください。", "focus": "set aside" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set back",
      "ja": "遅らせる・後退させる",
      "image": "進行を遅らせる。",
      "pattern": "set back + 名詞",
      "examples": [
        { "en": "The delivery issue set back the project.", "ja": "納品トラブルでプロジェクトが遅れました。", "focus": "set back" },
        { "en": "A missing document could set back approval.", "ja": "書類不足で承認が遅れる可能性があります。", "focus": "set back" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set down",
      "ja": "書き留める・置く",
      "image": "情報を書き留める、または物を置く。",
      "pattern": "set down + 名詞",
      "examples": [
        { "en": "Please set down the agreed points in the minutes.", "ja": "合意事項を議事録に書き留めてください。", "focus": "set down" },
        { "en": "He set down the samples near the entrance.", "ja": "彼はサンプルを入口付近に置きました。", "focus": "set down" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set in",
      "ja": "始まる・定着する",
      "image": "状態が始まり、続く。",
      "pattern": "set in",
      "examples": [
        { "en": "A delay set in after the parts arrived late.", "ja": "部品の到着が遅れた後、遅延が発生しました。", "focus": "set in" },
        { "en": "Once confusion sets in, the team needs clear instructions.", "ja": "混乱が生じたら、チームには明確な指示が必要です。", "focus": "sets in" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set about",
      "ja": "取りかかる",
      "image": "仕事や作業に取りかかる。",
      "pattern": "set about + 動名詞",
      "examples": [
        { "en": "We set about checking the inventory right away.", "ja": "私たちはすぐに在庫確認に取りかかりました。", "focus": "set about" },
        { "en": "The team set about preparing the revised estimate.", "ja": "チームは修正版の見積作成に取りかかりました。", "focus": "set about" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set apart",
      "ja": "区別する・差別化する",
      "image": "他と違う特徴で目立たせる。",
      "pattern": "set apart + 名詞",
      "examples": [
        { "en": "Fast support sets our team apart from competitors.", "ja": "迅速なサポートが私たちのチームを競合と差別化します。", "focus": "sets apart" },
        { "en": "This feature sets the product apart in the market.", "ja": "この機能が市場でその製品を差別化します。", "focus": "sets apart" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "set forth",
      "ja": "説明する・提示する",
      "image": "条件・方針・考えを正式に示す。",
      "pattern": "set forth + 名詞",
      "examples": [
        { "en": "The document sets forth the basic terms.", "ja": "その書類は基本条件を提示しています。", "focus": "sets forth" },
        { "en": "We set forth the main reasons in the report.", "ja": "私たちは報告書で主な理由を示しました。", "focus": "set forth" }
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
        { "en": "The inquiry changed into a real order.", "ja": "その問い合わせは実際の注文に変わりました。", "focus": "changed into" },
        { "en": "The small issue changed into a larger problem.", "ja": "小さな問題がより大きな問題に変わりました。", "focus": "changed into" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "change from",
      "ja": "〜から変わる",
      "image": "元の状態から別の状態へ変わる。",
      "pattern": "change from A to B",
      "examples": [
        { "en": "The status changed from pending to approved.", "ja": "ステータスは保留から承認済みに変わりました。", "focus": "changed from" },
        { "en": "We changed from the old system to the new one.", "ja": "私たちは旧システムから新システムに切り替えました。", "focus": "changed from" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "change over",
      "ja": "切り替える",
      "image": "システム・方法・体制を切り替える。",
      "pattern": "change over to + 名詞",
      "examples": [
        { "en": "The team will change over to a new workflow.", "ja": "チームは新しい作業フローに切り替えます。", "focus": "change over" },
        { "en": "Please prepare before we change over to the new format.", "ja": "新しい形式に切り替える前に準備してください。", "focus": "change over" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "change back",
      "ja": "元に戻す・戻る",
      "image": "以前の状態へ戻す。",
      "pattern": "change back",
      "examples": [
        { "en": "We changed back to the original layout.", "ja": "元のレイアウトに戻しました。", "focus": "changed back" },
        { "en": "Please change the setting back after the test.", "ja": "テスト後に設定を元に戻してください。", "focus": "change back" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "change around",
      "ja": "配置を変える・入れ替える",
      "image": "順番や配置を変える。",
      "pattern": "change around + 名詞",
      "examples": [
        { "en": "We changed around the order of the slides.", "ja": "スライドの順番を入れ替えました。", "focus": "changed around" },
        { "en": "Please change around the seating for the meeting.", "ja": "会議用に席の配置を変えてください。", "focus": "change around" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "change up",
      "ja": "変化をつける",
      "image": "やり方や流れを少し変える。",
      "pattern": "change up + 名詞",
      "examples": [
        { "en": "We should change up the presentation style.", "ja": "プレゼンの進め方に変化をつけるべきです。", "focus": "change up" },
        { "en": "The manager changed up the agenda to save time.", "ja": "上司は時間を節約するため議題の順番を変えました。", "focus": "changed up" }
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
      "ja": "開く・心を開く・可能性を広げる",
      "image": "閉じていたもの・気持ち・可能性が外へ開く。",
      "pattern": "open up",
      "examples": [
        { "en": "The client opened up during the follow-up call.", "ja": "その顧客はフォローの電話で本音を話してくれました。", "focus": "opened up" },
        { "en": "This new feature opens up more sales opportunities.", "ja": "この新機能はより多くの営業機会を広げます。", "focus": "opens up", "object": "more sales opportunities" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "open out",
      "ja": "広がる・展開する",
      "image": "話・景色・状況が広がっていく。",
      "pattern": "open out",
      "examples": [
        { "en": "The discussion opened out into a larger issue.", "ja": "その議論はより大きな問題へと広がりました。", "focus": "opened out" },
        { "en": "The path opens out near the main entrance.", "ja": "その通路は正面入口の近くで広がります。", "focus": "opens out" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "open into",
      "ja": "〜へ通じる・〜へ広がる",
      "image": "ある場所や状態から別の場所・状態へ開いていく。",
      "pattern": "open into + 名詞",
      "examples": [
        { "en": "The meeting room opens into the showroom.", "ja": "その会議室はショールームへ通じています。", "focus": "opens into", "object": "the showroom" },
        { "en": "The small project opened into a long-term partnership.", "ja": "その小さな案件は長期的な協力関係へ広がりました。", "focus": "opened into", "object": "a long-term partnership" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "open for",
      "ja": "〜向けに開く・受付を開始する",
      "image": "特定の目的や相手に向けて利用可能にする。",
      "pattern": "open for + 名詞",
      "examples": [
        { "en": "Registration opens for new users next week.", "ja": "新規ユーザー向けの登録受付は来週始まります。", "focus": "opens for", "object": "new users" },
        { "en": "The showroom opened for visitors at ten.", "ja": "ショールームは10時に来場者向けに開きました。", "focus": "opened for", "object": "visitors" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "open with",
      "ja": "〜で始める",
      "image": "会議・説明・話を特定の内容から始める。",
      "pattern": "open with + 名詞",
      "examples": [
        { "en": "Let's open with a quick review of the schedule.", "ja": "まずスケジュールの簡単な確認から始めましょう。", "focus": "open with", "object": "a quick review" },
        { "en": "The presentation opened with the main problem.", "ja": "そのプレゼンは主な課題から始まりました。", "focus": "opened with", "object": "the main problem" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "open to",
      "ja": "〜に前向きである・開かれている",
      "image": "考えや提案を受け入れられる状態でいる。",
      "pattern": "open to + 名詞",
      "examples": [
        { "en": "The client is open to a different design.", "ja": "顧客は別のデザインにも前向きです。", "focus": "open to", "object": "a different design" },
        { "en": "We are open to new ideas from the team.", "ja": "私たちはチームからの新しい案を受け入れる姿勢です。", "focus": "open to", "object": "new ideas" }
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
      "ja": "閉鎖する・営業を停止する",
      "image": "店・事業・システムを終わらせる。",
      "pattern": "close down",
      "examples": [
        { "en": "The old branch closed down last month.", "ja": "その古い支店は先月閉鎖しました。", "focus": "closed down" },
        { "en": "We may close down the test environment after approval.", "ja": "承認後にテスト環境を停止するかもしれません。", "focus": "close down", "object": "the test environment" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "close off",
      "ja": "封鎖する・遮断する",
      "image": "通路・選択肢・流れを閉じて通れなくする。",
      "pattern": "close off + 名詞",
      "examples": [
        { "en": "The team closed off the area during the installation.", "ja": "設置作業中、チームはそのエリアを封鎖しました。", "focus": "closed off", "object": "the area" },
        { "en": "This decision may close off other options.", "ja": "この判断で他の選択肢が閉ざされる可能性があります。", "focus": "close off", "object": "other options" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "close in",
      "ja": "近づく・迫る",
      "image": "距離や期限が近づいてくる。",
      "pattern": "close in",
      "examples": [
        { "en": "The deadline is closing in quickly.", "ja": "締切が急速に近づいています。", "focus": "closing in" },
        { "en": "Competitors are closing in on our price range.", "ja": "競合が私たちの価格帯に近づいています。", "focus": "closing in" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "close in on",
      "ja": "〜に迫る",
      "image": "目標・期限・相手に近づいていく。",
      "pattern": "close in on + 名詞",
      "examples": [
        { "en": "We are closing in on the final decision.", "ja": "私たちは最終判断に近づいています。", "focus": "closing in on", "object": "the final decision" },
        { "en": "The team is closing in on the cause of the issue.", "ja": "チームは問題の原因に迫っています。", "focus": "closing in on", "object": "the cause" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "close out",
      "ja": "終了する・売り切る",
      "image": "案件・在庫・期間を締めて完了する。",
      "pattern": "close out + 名詞",
      "examples": [
        { "en": "Let's close out this project by Friday.", "ja": "金曜日までにこの案件を完了させましょう。", "focus": "close out", "object": "this project" },
        { "en": "The store closed out the old stock at a discount.", "ja": "その店は旧在庫を値引きして売り切りました。", "focus": "closed out", "object": "the old stock" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "close up",
      "ja": "閉める・近づける",
      "image": "店や隙間を閉じる。",
      "pattern": "close up",
      "examples": [
        { "en": "Please close up the office after the meeting.", "ja": "会議後にオフィスを閉めてください。", "focus": "close up", "object": "the office" },
        { "en": "The gap closed up after we adjusted the panel.", "ja": "パネルを調整した後、隙間が閉じました。", "focus": "closed up" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "close with",
      "ja": "〜で終える・〜と合意する",
      "image": "話や交渉を特定の内容で締める。",
      "pattern": "close with + 名詞",
      "examples": [
        { "en": "The meeting closed with a clear action plan.", "ja": "その会議は明確な行動計画で締めくくられました。", "focus": "closed with", "object": "a clear action plan" },
        { "en": "We hope to close with the client next week.", "ja": "来週その顧客と合意に至りたいです。", "focus": "close with", "object": "the client" }
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
      "pattern": "let in + 名詞",
      "examples": [
        { "en": "Please let the delivery team in when they arrive.", "ja": "配送チームが到着したら中に入れてください。", "focus": "let in", "object": "the delivery team" },
        { "en": "The new window lets in more light.", "ja": "新しい窓はより多くの光を取り込みます。", "focus": "lets in", "object": "more light" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let out",
      "ja": "外へ出す・漏らす",
      "image": "中にあるものを外へ出す。",
      "pattern": "let out + 名詞",
      "examples": [
        { "en": "Please do not let out any confidential information.", "ja": "機密情報を漏らさないでください。", "focus": "let out", "object": "any confidential information" },
        { "en": "The system lets out a warning sound when it fails.", "ja": "システムは不具合時に警告音を出します。", "focus": "lets out", "object": "a warning sound" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let down",
      "ja": "がっかりさせる・期待を裏切る",
      "image": "相手の期待や信頼を下げてしまう。",
      "pattern": "let down + 人",
      "examples": [
        { "en": "We must not let the client down.", "ja": "私たちは顧客をがっかりさせてはいけません。", "focus": "let down", "object": "the client" },
        { "en": "The late delivery let the team down.", "ja": "納品遅れでチームを失望させました。", "focus": "let down", "object": "the team" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let go",
      "ja": "手放す・解放する",
      "image": "持っているものやこだわりを離す。",
      "pattern": "let go",
      "examples": [
        { "en": "We need to let go and move to the next option.", "ja": "私たちはこだわりを手放して次の選択肢へ進む必要があります。", "focus": "let go" },
        { "en": "The manager let go after the issue was solved.", "ja": "問題が解決した後、マネージャーはこだわりを手放しました。", "focus": "let go" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let go of",
      "ja": "〜を手放す",
      "image": "物・考え・不安などを手放す。",
      "pattern": "let go of + 名詞",
      "examples": [
        { "en": "We should let go of the old process.", "ja": "私たちは古いやり方を手放すべきです。", "focus": "let go of", "object": "the old process" },
        { "en": "He let go of the first idea after the review.", "ja": "彼はレビュー後に最初の案を手放しました。", "focus": "let go of", "object": "the first idea" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let off",
      "ja": "免除する・解放する",
      "image": "罰や負担から相手を解放する。",
      "pattern": "let off + 人",
      "examples": [
        { "en": "The manager let him off with a warning.", "ja": "マネージャーは注意だけで彼を許しました。", "focus": "let off", "object": "him" },
        { "en": "We cannot let the supplier off without checking the reason.", "ja": "理由を確認せずに仕入先を免責にはできません。", "focus": "let off", "object": "the supplier" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let on",
      "ja": "秘密を漏らす・明かす",
      "image": "まだ言わないはずの情報を外に出す。",
      "pattern": "let on",
      "examples": [
        { "en": "Do not let on that the price will change next month.", "ja": "来月価格が変わることはまだ漏らさないでください。", "focus": "let on" },
        { "en": "She did not let on that there was a problem.", "ja": "彼女は問題があることを明かしませんでした。", "focus": "let on" }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "let up",
      "ja": "弱まる・和らぐ",
      "image": "雨・忙しさ・圧力などが弱くなる。",
      "pattern": "let up",
      "examples": [
        { "en": "The pressure will not let up until the deadline.", "ja": "締切まではプレッシャーが弱まりません。", "focus": "let up" },
        { "en": "The rain let up before the site visit.", "ja": "現場訪問前に雨が弱まりました。", "focus": "let up" }
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
  "core": "材料や経験を少しずつ積み上げて形にする・築く",
  "coreDetail": "BUILDは、建物だけでなく、信頼・関係・仕組み・経験を時間をかけて積み上げる動詞です。仕事では build trust, build a system, build a relationship が特に重要です。",
  "coreVisual": {
    "from": [
      "🧱 部品",
      "📋 仕組み",
      "🤝 信頼",
      "📈 経験"
    ],
    "to": "積み上がった形・成果",
    "label": "材料・経験 → 形・信頼へ"
  },
  "meanings": [
    {
      "id": "build-house",
      "title": "① 建物・形あるものを作る",
      "pattern": "BUILD + building / object",
      "transitivity": "他動詞",
      "structure": "基本",
      "image": "材料を積み上げて形あるものを作る。",
      "point": "build a house は基本の意味。仕事では展示物や設備の話にも使えます。",
      "examples": [
        {
          "en": "They built a new showroom near the station.",
          "ja": "彼らは駅の近くに新しいショールームを建てました。",
          "focus": "built",
          "object": "a new showroom"
        },
        {
          "en": "We are building a simple demo stand for the client.",
          "ja": "私たちは顧客向けに簡単なデモ台を作っています。",
          "focus": "building",
          "object": "a simple demo stand"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "build-relationship",
      "title": "② 信頼・関係を築く",
      "pattern": "BUILD + trust / relationship",
      "transitivity": "他動詞",
      "structure": "基本",
      "image": "信頼や関係を時間をかけて積み上げる。",
      "point": "営業・顧客対応では非常に重要な使い方です。",
      "examples": [
        {
          "en": "Good follow-up helps us build trust with the client.",
          "ja": "丁寧な追加確認は顧客との信頼構築に役立ちます。",
          "focus": "build",
          "object": "trust"
        },
        {
          "en": "We should build a stronger relationship with this supplier.",
          "ja": "私たちはこの仕入先とより強い関係を築くべきです。",
          "focus": "build",
          "object": "a stronger relationship"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "build-system",
      "title": "③ 仕組み・体制を作る",
      "pattern": "BUILD + system / process / team",
      "transitivity": "他動詞",
      "structure": "基本",
      "image": "仕事が回る形を段階的に作る。",
      "point": "makeよりも、使える状態まで組み上げる感覚があります。",
      "examples": [
        {
          "en": "The team built a new ordering system.",
          "ja": "チームは新しい発注システムを構築しました。",
          "focus": "built",
          "object": "a new ordering system"
        },
        {
          "en": "We need to build a better process for stock checks.",
          "ja": "私たちは在庫確認のためのより良い手順を作る必要があります。",
          "focus": "build",
          "object": "a better process"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "build-experience",
      "title": "④ 経験・実績を積む",
      "pattern": "BUILD + experience / record / confidence",
      "transitivity": "他動詞",
      "structure": "基本",
      "image": "経験や実績を少しずつ増やす。",
      "point": "人や会社の成長を説明する時に自然です。",
      "examples": [
        {
          "en": "This project will help us build experience with RGB control.",
          "ja": "この案件はRGB制御の経験を積む助けになります。",
          "focus": "build",
          "object": "experience"
        },
        {
          "en": "Small wins build confidence in the team.",
          "ja": "小さな成功がチームの自信を積み上げます。",
          "focus": "build",
          "object": "confidence"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "build-habit",
      "title": "⑤ 習慣・流れを作る",
      "pattern": "BUILD + habit / routine",
      "transitivity": "他動詞",
      "structure": "基本",
      "image": "繰り返しによって行動の型を作る。",
      "point": "学習や営業活動の継続にも使いやすい表現です。",
      "examples": [
        {
          "en": "I want to build the habit of studying every morning.",
          "ja": "私は毎朝勉強する習慣を作りたいです。",
          "focus": "build",
          "object": "the habit"
        },
        {
          "en": "We built a weekly routine for checking open issues.",
          "ja": "私たちは未解決事項を確認する週次の流れを作りました。",
          "focus": "built",
          "object": "a weekly routine"
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
        },
        {
          "en": "The team built up trust through quick replies.",
          "ja": "チームは早い返信を通じて信頼を高めました。",
          "focus": "built up",
          "object": "trust"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "build on",
      "ja": "〜を土台にする",
      "image": "既存の実績・意見を活かして次へ進む。",
      "pattern": "build on",
      "examples": [
        {
          "en": "Let's build on the client's feedback.",
          "ja": "顧客の意見をもとにさらに改善しましょう。",
          "focus": "build on",
          "object": "the client's feedback"
        },
        {
          "en": "We built on last year's results.",
          "ja": "私たちは昨年の結果を土台にしました。",
          "focus": "built on",
          "object": "last year's results"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "build into",
      "ja": "〜に組み込む",
      "image": "確認項目や機能を仕組みの中に入れる。",
      "pattern": "build into",
      "examples": [
        {
          "en": "Please build this check into the workflow.",
          "ja": "この確認を業務フローに組み込んでください。",
          "focus": "build into",
          "object": "this check"
        },
        {
          "en": "We built approval steps into the process.",
          "ja": "私たちは承認手順をそのプロセスに組み込みました。",
          "focus": "built into",
          "object": "approval steps"
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
        },
        {
          "en": "The proposal is built around the client's budget.",
          "ja": "その提案は顧客の予算を中心に組まれています。",
          "focus": "built around",
          "object": "the client's budget"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "build in",
      "ja": "組み込む",
      "image": "余裕や機能を最初から入れておく。",
      "pattern": "build in",
      "examples": [
        {
          "en": "We should build in extra time for approval.",
          "ja": "承認のための余裕時間を組み込むべきです。",
          "focus": "build in",
          "object": "extra time"
        },
        {
          "en": "The system has a reminder built in.",
          "ja": "そのシステムにはリマインダーが組み込まれています。",
          "focus": "built in",
          "object": "a reminder"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "build out",
      "ja": "拡張する",
      "image": "機能・体制・範囲を広げる。",
      "pattern": "build out",
      "examples": [
        {
          "en": "The team will build out the support system next month.",
          "ja": "チームは来月サポート体制を拡張します。",
          "focus": "build out",
          "object": "the support system"
        },
        {
          "en": "We need to build out the search function later.",
          "ja": "後で検索機能を拡張する必要があります。",
          "focus": "build out",
          "object": "the search function"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "build from",
      "ja": "〜から作る",
      "image": "材料・情報・既存データを出発点にして作る。",
      "pattern": "build from",
      "examples": [
        {
          "en": "We built the estimate from the latest drawing.",
          "ja": "私たちは最新図面をもとに見積を作りました。",
          "focus": "built from",
          "object": "the latest drawing"
        },
        {
          "en": "You can build a report from this data.",
          "ja": "このデータから報告書を作れます。",
          "focus": "build from",
          "object": "this data"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "build toward",
      "ja": "〜に向けて積み上げる",
      "image": "目標に向けて少しずつ進める。",
      "pattern": "build toward",
      "examples": [
        {
          "en": "We are building toward a stronger sales pipeline.",
          "ja": "私たちはより強い営業案件の流れに向けて積み上げています。",
          "focus": "building toward",
          "object": "a stronger sales pipeline"
        },
        {
          "en": "This practice builds toward better presentations.",
          "ja": "この練習はより良いプレゼンに向けた積み上げになります。",
          "focus": "builds toward",
          "object": "better presentations"
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
  "core": "情報や経験を取り込み、自分の知識・スキルにする",
  "coreDetail": "LEARNは、勉強だけでなく、仕事の手順・製品知識・顧客情報・失敗からの教訓を自分の中に取り込む動詞です。",
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
      "title": "① 知識・スキルを学ぶ",
      "pattern": "LEARN + skill / English / process",
      "transitivity": "他動詞",
      "structure": "基本",
      "image": "知識ややり方を自分の中に入れる。",
      "point": "仕事の手順や製品知識を身につける時にも使います。",
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
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "learn-fact",
      "title": "② 情報・事実を知る",
      "pattern": "LEARN + that / details",
      "transitivity": "他動詞",
      "structure": "基本",
      "image": "調べたり聞いたりして新しい事実を知る。",
      "point": "ビジネスでは『〜だと分かった』という意味でも使います。",
      "examples": [
        {
          "en": "We learned that the delivery date changed.",
          "ja": "私たちは納期が変更になったと分かりました。",
          "focus": "learned",
          "object": "that the delivery date changed"
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
      "title": "③ 経験から教訓を得る",
      "pattern": "LEARN + lesson",
      "transitivity": "他動詞",
      "structure": "基本",
      "image": "経験を通じて次に活かせることを得る。",
      "point": "失敗や改善点を前向きに説明する時に自然です。",
      "examples": [
        {
          "en": "We learned an important lesson from this issue.",
          "ja": "私たちはこの問題から重要な教訓を得ました。",
          "focus": "learned",
          "object": "an important lesson"
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
      "title": "④ やり方を覚える",
      "pattern": "LEARN HOW TO + verb",
      "transitivity": "他動詞",
      "structure": "基本",
      "image": "手順や方法を身につける。",
      "point": "引き継ぎや新人教育でよく使います。",
      "examples": [
        {
          "en": "New staff learn how to prepare estimates.",
          "ja": "新人は見積の作り方を覚えます。",
          "focus": "learn",
          "object": "how to prepare estimates"
        },
        {
          "en": "He is learning how to explain the product clearly.",
          "ja": "彼は製品を分かりやすく説明する方法を学んでいます。",
          "focus": "learning",
          "object": "how to explain the product clearly"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "learn-quickly",
      "title": "⑤ 早く覚える・身につける",
      "pattern": "LEARN + adverb",
      "transitivity": "他動詞・自動詞",
      "structure": "基本",
      "image": "新しいことを短い時間で吸収する。",
      "point": "learn quickly は仕事でも日常でも使いやすい表現です。",
      "examples": [
        {
          "en": "She learns quickly and asks good questions.",
          "ja": "彼女は覚えが早く、良い質問をします。",
          "focus": "learns"
        },
        {
          "en": "We learned faster after using real examples.",
          "ja": "実例を使った後、私たちはより早く覚えました。",
          "focus": "learned"
        }
      ],
      "dailyExamples": []
    }
  ],
  "collocations": [],
  "phrasalVerbs": [
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
        },
        {
          "en": "I learned from my senior colleague.",
          "ja": "私は先輩から学びました。",
          "focus": "learned from",
          "object": "my senior colleague"
        }
      ],
      "dailyExamples": []
    },
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
        },
        {
          "en": "Please learn about the product before the visit.",
          "ja": "訪問前にその製品について学んでください。",
          "focus": "learn about",
          "object": "the product"
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
          "ja": "私たちは今朝スケジュール変更を知りました。",
          "focus": "learned of",
          "object": "the schedule change"
        },
        {
          "en": "She learned of the issue from the report.",
          "ja": "彼女は報告書からその問題を知りました。",
          "focus": "learned of",
          "object": "the issue"
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
        },
        {
          "en": "We learned by doing small tests.",
          "ja": "私たちは小さなテストを行うことで学びました。",
          "focus": "learned by",
          "object": "doing small tests"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "learn through",
      "ja": "〜を通じて学ぶ",
      "image": "経験や活動を通じて身につける。",
      "pattern": "learn through",
      "examples": [
        {
          "en": "She learned through hands-on project work.",
          "ja": "彼女は実際の案件作業を通じて学びました。",
          "focus": "learned through",
          "object": "hands-on project work"
        },
        {
          "en": "We learn through feedback from clients.",
          "ja": "私たちは顧客からのフィードバックを通じて学びます。",
          "focus": "learn through",
          "object": "feedback from clients"
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
  "core": "人・条件・期限・期待と合う、到達する",
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
      "title": "① 人に会う",
      "pattern": "MEET + person / client",
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
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "meet-place",
      "title": "② 場所・時間を決めて会う",
      "pattern": "MEET + at / in + place",
      "transitivity": "自動詞",
      "structure": "基本",
      "image": "場所や時間を合わせて会う。",
      "point": "meet at the office のように場所をつけて使います。",
      "examples": [
        {
          "en": "Let's meet at the office before the site visit.",
          "ja": "現場訪問前に事務所で会いましょう。",
          "focus": "meet"
        },
        {
          "en": "We met in the lobby at ten.",
          "ja": "私たちは10時にロビーで会いました。",
          "focus": "met"
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "meet-deadline",
      "title": "③ 締切・条件を満たす",
      "pattern": "MEET + deadline / requirements",
      "transitivity": "他動詞",
      "structure": "基本",
      "image": "求められている基準に届く。",
      "point": "meet a deadline は『締切に間に合う』、meet requirements は『条件を満たす』です。",
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
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "meet-expectations",
      "title": "④ 期待・需要に応える",
      "pattern": "MEET + expectations / demand / needs",
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
        }
      ],
      "dailyExamples": []
    },
    {
      "id": "meet-standard",
      "title": "⑤ 基準・条件に合う",
      "pattern": "MEET + standard / condition",
      "transitivity": "他動詞",
      "structure": "基本",
      "image": "決められた基準や条件に合う。",
      "point": "品質・仕様・安全基準の説明に使いやすいです。",
      "examples": [
        {
          "en": "The sample meets the required standard.",
          "ja": "そのサンプルは必要な基準を満たしています。",
          "focus": "meets",
          "object": "the required standard"
        },
        {
          "en": "The design did not meet the customer's condition.",
          "ja": "そのデザインは顧客の条件を満たしていませんでした。",
          "focus": "meet",
          "object": "the customer's condition"
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
        },
        {
          "en": "We met up near the station.",
          "ja": "私たちは駅の近くで合流しました。",
          "focus": "met up"
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
        },
        {
          "en": "The proposal met with a positive response.",
          "ja": "その提案は好意的な反応を得ました。",
          "focus": "met with",
          "object": "a positive response"
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
        },
        {
          "en": "We met at the client's office.",
          "ja": "私たちは顧客の事務所で会いました。",
          "focus": "met at",
          "object": "the client's office"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "meet for",
      "ja": "〜のために会う",
      "image": "会う目的を示す。",
      "pattern": "meet for",
      "examples": [
        {
          "en": "We met for a quick project review.",
          "ja": "私たちは簡単な案件レビューのために会いました。",
          "focus": "met for",
          "object": "a quick project review"
        },
        {
          "en": "Let's meet for a short update tomorrow.",
          "ja": "明日、短い進捗確認のために会いましょう。",
          "focus": "meet for",
          "object": "a short update"
        }
      ],
      "dailyExamples": []
    },
    {
      "phrase": "meet halfway",
      "ja": "歩み寄る・妥協する",
      "image": "お互いに譲り合って中間点で合う。",
      "pattern": "meet halfway",
      "examples": [
        {
          "en": "We may need to meet halfway on the price.",
          "ja": "価格については歩み寄る必要があるかもしれません。",
          "focus": "meet halfway"
        },
        {
          "en": "Both teams met halfway on the schedule.",
          "ja": "両チームはスケジュールについて歩み寄りました。",
          "focus": "met halfway"
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
      {"phrase": "send out", "ja": "発送する・一斉に送る", "image": "案内や資料を複数の相手へ送り出す。", "pattern": "send out", "examples": [{"en": "We will send out the announcement this afternoon.", "ja": "私たちは今日の午後、その案内を一斉送信します。", "focus": "send out", "object": "the announcement"}], "dailyExamples": []},
      {"phrase": "send off", "ja": "発送する・送り出す", "image": "荷物や人を正式に送り出す。", "pattern": "send off", "examples": [{"en": "We sent off the samples after the final check.", "ja": "私たちは最終確認後にサンプルを発送しました。", "focus": "sent off", "object": "the samples"}], "dailyExamples": []},
      {"phrase": "send in", "ja": "提出する・送付する", "image": "必要な場所や窓口へ資料を送る。", "pattern": "send in", "examples": [{"en": "Please send in the application before the deadline.", "ja": "締切前に申請書を提出してください。", "focus": "send in", "object": "the application"}], "dailyExamples": []},
      {"phrase": "send back", "ja": "送り返す・返送する", "image": "相手から来たものを戻す。", "pattern": "send back", "examples": [{"en": "Please send back the signed document by Friday.", "ja": "金曜日までに署名済み書類を返送してください。", "focus": "send back", "object": "the signed document"}], "dailyExamples": []},
      {"phrase": "send over", "ja": "送って渡す", "image": "相手の手元へ資料や情報を送る。", "pattern": "send over", "examples": [{"en": "I will send over the latest price list.", "ja": "最新の価格表を送ります。", "focus": "send over", "object": "the latest price list"}], "dailyExamples": []},
      {"phrase": "send through", "ja": "送信する・通す", "image": "メールやシステム経由で相手へ通して送る。", "pattern": "send through", "examples": [{"en": "Please send through the final data after approval.", "ja": "承認後に最終データを送信してください。", "focus": "send through", "object": "the final data"}], "dailyExamples": []},
      {"phrase": "send for", "ja": "取り寄せる・呼び寄せる", "image": "必要な人や物を呼ぶ・取り寄せる。", "pattern": "send for", "examples": [{"en": "We should send for a technician if the issue continues.", "ja": "問題が続くなら、技術者を呼ぶべきです。", "focus": "send for", "object": "a technician"}], "dailyExamples": []},
      {"phrase": "send on", "ja": "転送する", "image": "受け取った情報を次の相手へ送る。", "pattern": "send on", "examples": [{"en": "I will send on the client's comments to the design team.", "ja": "顧客のコメントを設計チームへ転送します。", "focus": "send on", "object": "the client's comments"}], "dailyExamples": []},
      {"phrase": "send around", "ja": "回覧する・共有する", "image": "資料や案内を関係者の間で回す。", "pattern": "send around", "examples": [{"en": "Please send around the meeting notes to everyone.", "ja": "会議メモを全員に共有してください。", "focus": "send around", "object": "the meeting notes"}], "dailyExamples": []}
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
      {"phrase": "pay for", "ja": "〜の代金を払う", "image": "対象に対して代金を支払う。", "pattern": "pay for", "examples": [{"en": "The client will pay for the additional work.", "ja": "顧客は追加作業の代金を支払います。", "focus": "pay for", "object": "the additional work"}], "dailyExamples": []},
      {"phrase": "pay off", "ja": "完済する・報われる", "image": "支払いを終える、または努力が良い結果になる。", "pattern": "pay off", "examples": [{"en": "Our preparation paid off during the presentation.", "ja": "私たちの準備はプレゼン中に報われました。", "focus": "paid off"}], "dailyExamples": []},
      {"phrase": "pay back", "ja": "返済する・返す", "image": "借りたお金や恩を返す。", "pattern": "pay back", "examples": [{"en": "We need to pay back the advance payment.", "ja": "私たちは前受金を返済する必要があります。", "focus": "pay back", "object": "the advance payment"}], "dailyExamples": []},
      {"phrase": "pay up", "ja": "全額払う・しぶしぶ払う", "image": "未払いの金額を支払う。", "pattern": "pay up", "examples": [{"en": "The client finally paid up after several reminders.", "ja": "顧客は何度かリマインドした後、ようやく支払いました。", "focus": "paid up"}], "dailyExamples": []},
      {"phrase": "pay in", "ja": "払い込む・入金する", "image": "お金を口座や制度に入れる。", "pattern": "pay in", "examples": [{"en": "Please pay in the deposit before production starts.", "ja": "生産開始前に前金を入金してください。", "focus": "pay in", "object": "the deposit"}], "dailyExamples": []},
      {"phrase": "pay out", "ja": "支払う・払い出す", "image": "会社や制度からお金を支払う。", "pattern": "pay out", "examples": [{"en": "The company paid out the bonus in June.", "ja": "会社は6月に賞与を支払いました。", "focus": "paid out", "object": "the bonus"}], "dailyExamples": []},
      {"phrase": "pay down", "ja": "借金を減らす", "image": "支払いによって残高を下げる。", "pattern": "pay down", "examples": [{"en": "The company plans to pay down its debt this year.", "ja": "会社は今年、借入金を減らす計画です。", "focus": "pay down", "object": "its debt"}], "dailyExamples": []}
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
      {"phrase": "buy into", "ja": "考えを信じる・受け入れる", "image": "案や考えを自分の中に受け入れる。", "pattern": "buy into", "examples": [{"en": "The team did not buy into the new proposal at first.", "ja": "チームは最初、その新しい提案に納得していませんでした。", "focus": "buy into", "object": "the new proposal"}], "dailyExamples": []},
      {"phrase": "buy up", "ja": "買い占める", "image": "市場にあるものを大量に買う。", "pattern": "buy up", "examples": [{"en": "Some customers bought up the remaining stock.", "ja": "一部の顧客が残りの在庫を買い占めました。", "focus": "bought up", "object": "the remaining stock"}], "dailyExamples": []},
      {"phrase": "buy out", "ja": "買収する・買い取る", "image": "相手の持分や会社を買って自分側に入れる。", "pattern": "buy out", "examples": [{"en": "A larger company bought out the small supplier.", "ja": "大きな会社がその小さな仕入先を買収しました。", "focus": "bought out", "object": "the small supplier"}], "dailyExamples": []},
      {"phrase": "buy in", "ja": "買い込む・賛同する", "image": "商品や考えを中に取り入れる。", "pattern": "buy in", "examples": [{"en": "We bought in extra materials before the price increase.", "ja": "私たちは値上げ前に追加材料を買い込みました。", "focus": "bought in", "object": "extra materials"}], "dailyExamples": []},
      {"phrase": "buy back", "ja": "買い戻す", "image": "一度手放したものを再び買う。", "pattern": "buy back", "examples": [{"en": "The company bought back the old equipment.", "ja": "会社は古い設備を買い戻しました。", "focus": "bought back", "object": "the old equipment"}], "dailyExamples": []}
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
    "coreDetail": "SELLは、商品・サービスを販売するだけでなく、提案や価値を相手に納得してもらう時にも使います。仕事では販売、価格条件、売れ行き、提案の説得でよく使います。",
    "coreVisual": {"from": ["📦 商品", "💡 提案", "🧩 サービス", "📊 価値"], "to": "顧客・市場", "label": "価値を伝える → 買ってもらう"},
    "meanings": [
      {"id": "sell-product", "title": "① 商品・サービスを売る", "pattern": "sell + 商品・サービス", "transitivity": "他動詞", "structure": "基本", "image": "商品やサービスを相手に渡し、代金を得る。", "point": "何を売るかを sell の後ろに置きます。", "examples": [
        {"en": "We sell LED modules to sign companies.", "ja": "私たちは看板会社にLEDモジュールを販売しています。", "focus": "sell", "object": "LED modules"},
        {"en": "Our company sells lighting systems for commercial facilities.", "ja": "私たちの会社は商業施設向けの照明システムを販売しています。", "focus": "sells", "object": "lighting systems"},
        {"en": "They sold maintenance services with the equipment.", "ja": "彼らはその機器と一緒にメンテナンスサービスを販売しました。", "focus": "sold", "object": "maintenance services"}
      ], "dailyExamples": []},
      {"id": "sell-to-customer", "title": "② 相手に売る", "pattern": "sell + 商品 + to + 相手", "transitivity": "他動詞", "structure": "基本", "image": "商品を特定の相手へ届けて販売する。", "point": "売る相手を言う時は to を使います。", "examples": [
        {"en": "We sell custom signs to retail stores.", "ja": "私たちは小売店に特注サインを販売しています。", "focus": "sell", "object": "custom signs"},
        {"en": "The distributor sells our products to local contractors.", "ja": "その販売代理店は地元の施工会社に私たちの商品を販売しています。", "focus": "sells", "object": "our products"},
        {"en": "Can we sell this model to overseas clients?", "ja": "私たちはこのモデルを海外顧客に販売できますか？", "focus": "sell", "object": "this model"}
      ], "dailyExamples": []},
      {"id": "sell-for-price", "title": "③ ある価格で売る", "pattern": "sell + 商品 + for + 金額", "transitivity": "他動詞", "structure": "基本", "image": "商品をある価格条件で販売する。", "point": "価格を表す時は for を使います。", "examples": [
        {"en": "We sell this controller for 80,000 yen.", "ja": "私たちはこのコントローラーを8万円で販売しています。", "focus": "sell", "object": "this controller"},
        {"en": "The supplier sells the kit for a lower price in bulk.", "ja": "その仕入先はまとめ買いの場合、そのキットをより安い価格で販売しています。", "focus": "sells", "object": "the kit"},
        {"en": "Can we sell the sample for the same price as last time?", "ja": "私たちはそのサンプルを前回と同じ価格で販売できますか？", "focus": "sell", "object": "the sample"}
      ], "dailyExamples": []},
      {"id": "sell-well", "title": "④ よく売れる", "pattern": "商品 + sells well", "transitivity": "自動詞", "structure": "基本", "image": "商品が市場で買われやすい状態になる。", "point": "商品を主語にして This product sells well. と言います。", "examples": [
        {"en": "This product sells well in summer.", "ja": "この商品は夏によく売れます。", "focus": "sells", "object": "well"},
        {"en": "The compact model sold well after the exhibition.", "ja": "その小型モデルは展示会後によく売れました。", "focus": "sold", "object": "well"},
        {"en": "Products with simple installation tend to sell well.", "ja": "設置が簡単な商品はよく売れる傾向があります。", "focus": "sell", "object": "well"}
      ], "dailyExamples": []},
      {"id": "sell-idea", "title": "⑤ 案・価値を納得してもらう", "pattern": "sell + idea / value", "transitivity": "他動詞", "structure": "基本", "image": "案や価値を相手に受け入れてもらう。", "point": "sell an idea は『案を納得してもらう・売り込む』。", "examples": [
        {"en": "She sold the idea to the management team.", "ja": "彼女はその案を経営チームに納得してもらいました。", "focus": "sold", "object": "the idea"},
        {"en": "We need to sell the value of this service to the client.", "ja": "私たちはこのサービスの価値を顧客に納得してもらう必要があります。", "focus": "sell", "object": "the value"},
        {"en": "The proposal must sell the benefit clearly.", "ja": "その提案書はメリットを明確に伝えて納得してもらう必要があります。", "focus": "sell", "object": "the benefit"}
      ], "dailyExamples": []},
      {"id": "sell-directly", "title": "⑥ 直接販売する", "pattern": "sell directly to + 相手", "transitivity": "自動詞・他動詞", "structure": "基本", "image": "代理店を通さず、相手へ直接販売する。", "point": "directly は副詞なので、句動詞ではなく基本側で扱います。", "examples": [
        {"en": "We sell directly to some key accounts.", "ja": "私たちは一部の重要顧客に直接販売しています。", "focus": "sell", "object": "directly"},
        {"en": "The manufacturer does not sell directly to end users.", "ja": "そのメーカーはエンドユーザーには直接販売していません。", "focus": "sell", "object": "directly"},
        {"en": "Can we sell directly to this client?", "ja": "私たちはこの顧客に直接販売できますか？", "focus": "sell", "object": "directly"}
      ], "dailyExamples": []}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase": "sell out", "ja": "売り切れる・完売する", "image": "在庫がすべて外へ出てなくなる。", "pattern": "sell out", "examples": [{"en": "The first shipment sold out quickly.", "ja": "初回出荷分はすぐに売り切れました。", "focus": "sold out"}, {"en": "We need more stock before the product sells out.", "ja": "その商品が売り切れる前に、さらに在庫が必要です。", "focus": "sells out"}], "dailyExamples": []},
      {"phrase": "sell off", "ja": "在庫などを売り払う", "image": "残っているものをまとめて市場に出す。", "pattern": "sell off", "examples": [{"en": "We sold off old stock before the new model arrived.", "ja": "新モデルが届く前に古い在庫を売り払いました。", "focus": "sold off", "object": "old stock"}, {"en": "The company plans to sell off unused equipment.", "ja": "その会社は未使用の機器を売却する予定です。", "focus": "sell off", "object": "unused equipment"}], "dailyExamples": []},
      {"phrase": "sell through", "ja": "流通を通じて売る", "image": "商品が販売経路を通って顧客まで進む。", "pattern": "sell through", "examples": [{"en": "The product sells through local distributors.", "ja": "その商品は地元の販売代理店を通じて販売されています。", "focus": "sells through", "object": "local distributors"}, {"en": "We sell through partner companies in this region.", "ja": "この地域ではパートナー会社を通じて販売しています。", "focus": "sell through", "object": "partner companies"}], "dailyExamples": []},
      {"phrase": "sell on", "ja": "〜に魅力を感じさせる・納得させる", "image": "相手をある考えや価値へ向かわせる。", "pattern": "sell someone on", "examples": [{"en": "The demo sold the client on the new system.", "ja": "そのデモで顧客は新システムに納得しました。", "focus": "sold on", "object": "the client"}, {"en": "We need to sell the team on this plan.", "ja": "私たちはこの計画についてチームを納得させる必要があります。", "focus": "sell on", "object": "the team"}], "dailyExamples": []},
      {"phrase": "sell up", "ja": "資産などを売り払う", "image": "持っているものを売って整理する。", "pattern": "sell up", "examples": [{"en": "The owner sold up before moving overseas.", "ja": "そのオーナーは海外移住前に資産を売り払いました。", "focus": "sold up"}, {"en": "They may sell up and close the small office.", "ja": "彼らは資産を売り払って小さな営業所を閉じるかもしれません。", "focus": "sell up"}], "dailyExamples": []},
      {"phrase": "sell back", "ja": "売り戻す", "image": "買ったものを元の相手や市場へ戻す。", "pattern": "sell back", "examples": [{"en": "We sold back the unused parts to the supplier.", "ja": "私たちは未使用部品を仕入先に売り戻しました。", "focus": "sold back", "object": "the unused parts"}, {"en": "Can we sell back the extra stock?", "ja": "余った在庫を売り戻すことはできますか？", "focus": "sell back", "object": "the extra stock"}], "dailyExamples": []},
      {"phrase": "sell into", "ja": "〜市場へ売り込む", "image": "新しい市場や業界の中へ商品を入れていく。", "pattern": "sell into", "examples": [{"en": "We plan to sell into the hotel market next year.", "ja": "私たちは来年ホテル市場へ売り込む予定です。", "focus": "sell into", "object": "the hotel market"}, {"en": "This model sells well into high-end retail projects.", "ja": "このモデルは高級小売案件向けによく売り込めます。", "focus": "sells into", "object": "high-end retail projects"}], "dailyExamples": []}
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
    "importance": "★★★★☆ 基本",
    "core": "複数の候補から、1つを選び取る",
    "coreDetail": "CHOOSEは、候補の中から目的に合うものを選ぶ動詞です。仕事では、仕入先、提案案、仕様、納期、方法を選ぶ場面でよく使います。",
    "coreVisual": {"from": ["A案", "B案", "C案", "条件"], "to": "選んだ1つ", "label": "複数候補 → 目的に合うものを選ぶ"},
    "meanings": [
      {"id": "choose-option", "title": "① 選択肢を選ぶ", "pattern": "choose + option", "transitivity": "他動詞", "structure": "基本", "image": "複数の選択肢から必要なものを選ぶ。", "point": "choose the best option のように、選ぶ対象を後ろに置きます。", "examples": [
        {"en": "We chose the best option for the client.", "ja": "私たちは顧客にとって最適な選択肢を選びました。", "focus": "chose", "object": "the best option"},
        {"en": "Please choose a color before we place the order.", "ja": "発注前に色を選んでください。", "focus": "choose", "object": "a color"},
        {"en": "The client chose the cheaper model.", "ja": "顧客はより安いモデルを選びました。", "focus": "chose", "object": "the cheaper model"}
      ], "dailyExamples": []},
      {"id": "choose-supplier", "title": "② 仕入先・業者を選ぶ", "pattern": "choose + supplier / vendor", "transitivity": "他動詞", "structure": "基本", "image": "条件に合う会社や担当先を選ぶ。", "point": "supplier, vendor, partner など仕事でよく使う名詞と相性が良いです。", "examples": [
        {"en": "We need to choose a reliable supplier.", "ja": "私たちは信頼できる仕入先を選ぶ必要があります。", "focus": "choose", "object": "a reliable supplier"},
        {"en": "The purchasing team chose a new vendor.", "ja": "購買チームは新しい業者を選びました。", "focus": "chose", "object": "a new vendor"},
        {"en": "Can you choose a partner for this project?", "ja": "この案件の協力会社を選べますか？", "focus": "choose", "object": "a partner"}
      ], "dailyExamples": []},
      {"id": "choose-based-on", "title": "③ 条件に基づいて選ぶ", "pattern": "choose based on + 条件", "transitivity": "他動詞", "structure": "基本", "image": "価格、納期、品質などを基準にして選ぶ。", "point": "based on は判断基準を表す基本表現として扱います。", "examples": [
        {"en": "We chose the product based on delivery time.", "ja": "私たちは納期を基準にその商品を選びました。", "focus": "chose", "object": "the product"},
        {"en": "The client chooses suppliers based on quality.", "ja": "顧客は品質を基準に仕入先を選びます。", "focus": "chooses", "object": "suppliers"},
        {"en": "Please choose the option based on the budget.", "ja": "予算を基準に選択肢を選んでください。", "focus": "choose", "object": "the option"}
      ], "dailyExamples": []},
      {"id": "choose-whether", "title": "④ 〜するかどうか選ぶ", "pattern": "choose whether to + 動詞", "transitivity": "他動詞", "structure": "基本", "image": "行動するかどうかを判断して選ぶ。", "point": "choose whether to ... は『〜するかどうかを選ぶ』。", "examples": [
        {"en": "We need to choose whether to revise the estimate.", "ja": "私たちは見積を修正するかどうか選ぶ必要があります。", "focus": "choose", "object": "whether to revise"},
        {"en": "The manager chose whether to approve the order today.", "ja": "マネージャーは今日その注文を承認するかどうか判断しました。", "focus": "chose", "object": "whether to approve"},
        {"en": "You can choose whether to attend online or in person.", "ja": "あなたはオンライン参加か対面参加かを選べます。", "focus": "choose", "object": "whether to attend"}
      ], "dailyExamples": []},
      {"id": "choose-carefully", "title": "⑤ 慎重に選ぶ", "pattern": "choose carefully / wisely", "transitivity": "自動詞・他動詞", "structure": "基本", "image": "ミスを避けるために注意して選ぶ。", "point": "carefully, wisely など副詞を付けて選び方を表せます。", "examples": [
        {"en": "We should choose carefully because the budget is limited.", "ja": "予算が限られているので、私たちは慎重に選ぶべきです。", "focus": "choose", "object": "carefully"},
        {"en": "Please choose wisely for long-term maintenance.", "ja": "長期メンテナンスを考えて賢く選んでください。", "focus": "choose", "object": "wisely"},
        {"en": "They chose carefully after comparing all options.", "ja": "彼らはすべての選択肢を比較した後、慎重に選びました。", "focus": "chose", "object": "carefully"}
      ], "dailyExamples": []}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase": "choose from", "ja": "〜の中から選ぶ", "image": "候補の集まりから1つを選び出す。", "pattern": "choose from", "examples": [{"en": "You can choose from three delivery options.", "ja": "あなたは3つの配送方法から選べます。", "focus": "choose from", "object": "three delivery options"}, {"en": "The client chose from the samples we prepared.", "ja": "顧客は私たちが用意したサンプルの中から選びました。", "focus": "chose from", "object": "the samples"}], "dailyExamples": []},
      {"phrase": "choose between", "ja": "〜のどちらかを選ぶ", "image": "2つ以上の候補を比べて選ぶ。", "pattern": "choose between", "examples": [{"en": "We need to choose between price and delivery speed.", "ja": "私たちは価格と納期の速さのどちらを優先するか選ぶ必要があります。", "focus": "choose between", "object": "price and delivery speed"}, {"en": "The customer chose between two designs.", "ja": "顧客は2つのデザインの間で選びました。", "focus": "chose between", "object": "two designs"}], "dailyExamples": []},
      {"phrase": "choose to", "ja": "〜することを選ぶ", "image": "複数の行動の中から1つの行動を選ぶ。", "pattern": "choose to", "examples": [{"en": "We chose to send the sample first.", "ja": "私たちは先にサンプルを送ることを選びました。", "focus": "chose to", "object": "send the sample"}, {"en": "The client chose to wait for the next shipment.", "ja": "顧客は次回出荷を待つことを選びました。", "focus": "chose to", "object": "wait"}], "dailyExamples": []},
      {"phrase": "choose among", "ja": "複数の中から選ぶ", "image": "多くの候補の中で比較して選ぶ。", "pattern": "choose among", "examples": [{"en": "We had to choose among several suppliers.", "ja": "私たちは複数の仕入先の中から選ぶ必要がありました。", "focus": "choose among", "object": "several suppliers"}, {"en": "The team chose among different installation methods.", "ja": "チームは複数の設置方法の中から選びました。", "focus": "chose among", "object": "different installation methods"}], "dailyExamples": []},
      {"phrase": "choose for", "ja": "〜のために選ぶ", "image": "目的や相手に合うものを選ぶ。", "pattern": "choose for", "examples": [{"en": "We chose this model for outdoor use.", "ja": "私たちは屋外使用のためにこのモデルを選びました。", "focus": "chose for", "object": "this model"}, {"en": "Please choose a sample for the client meeting.", "ja": "顧客との会議用にサンプルを選んでください。", "focus": "choose for", "object": "a sample"}], "dailyExamples": []},
      {"phrase": "choose against", "ja": "〜を選ばない判断をする", "image": "候補を検討したうえで反対側を選ぶ。", "pattern": "choose against", "examples": [{"en": "We chose against the cheaper option because of quality concerns.", "ja": "品質面の懸念があったため、私たちは安い選択肢を選びませんでした。", "focus": "chose against", "object": "the cheaper option"}, {"en": "The client chose against changing the schedule.", "ja": "顧客はスケジュール変更をしない判断をしました。", "focus": "chose against", "object": "changing the schedule"}], "dailyExamples": []}
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
    "importance": "★★★★☆ 基本",
    "core": "前にあるもの・決められた流れに沿って進む",
    "coreDetail": "FOLLOWは、人の後について行く、手順やルールに従う、予定や流れに沿って進む、あとから確認する、という感覚で使います。仕事では指示、手順、スケジュール、顧客フォローで重要です。",
    "coreVisual": {"from": ["📋 指示", "🧭 手順", "📅 予定", "👤 相手"], "to": "同じ流れに沿って進む", "label": "前にあるもの → その流れに沿う"},
    "meanings": [
      {"id": "follow-instructions", "title": "① 指示・手順に従う", "pattern": "follow + instructions / process", "transitivity": "他動詞", "structure": "基本", "image": "決められた手順に沿って進める。", "point": "follow the instructions は仕事で非常によく使います。", "examples": [
        {"en": "Please follow the instructions in the manual.", "ja": "マニュアルの指示に従ってください。", "focus": "follow", "object": "the instructions"},
        {"en": "We followed the approval process before ordering.", "ja": "私たちは発注前に承認手順に従いました。", "focus": "followed", "object": "the approval process"},
        {"en": "The team follows the same process every month.", "ja": "チームは毎月同じ手順に従っています。", "focus": "follows", "object": "the same process"}
      ], "dailyExamples": []},
      {"id": "follow-rules", "title": "② ルール・条件を守る", "pattern": "follow + rules / conditions", "transitivity": "他動詞", "structure": "基本", "image": "決められたルールから外れずに進む。", "point": "follow the rules は『ルールに従う』。obeyより自然で仕事でも使いやすいです。", "examples": [
        {"en": "We must follow the safety rules at the site.", "ja": "私たちは現場で安全ルールを守らなければなりません。", "focus": "follow", "object": "the safety rules"},
        {"en": "The supplier followed the agreed conditions.", "ja": "仕入先は合意した条件に従いました。", "focus": "followed", "object": "the agreed conditions"},
        {"en": "Please follow our company policy for this request.", "ja": "この依頼については会社の方針に従ってください。", "focus": "follow", "object": "our company policy"}
      ], "dailyExamples": []},
      {"id": "follow-schedule", "title": "③ 予定・流れに沿う", "pattern": "follow + schedule / plan", "transitivity": "他動詞", "structure": "基本", "image": "予定や計画の流れに沿って進める。", "point": "スケジュールや計画どおりに進める時に使います。", "examples": [
        {"en": "We need to follow the delivery schedule.", "ja": "私たちは納品スケジュールに沿って進める必要があります。", "focus": "follow", "object": "the delivery schedule"},
        {"en": "The installation team followed the original plan.", "ja": "施工チームは当初の計画に沿って進めました。", "focus": "followed", "object": "the original plan"},
        {"en": "Please follow the timeline we shared yesterday.", "ja": "昨日共有したスケジュールに沿って進めてください。", "focus": "follow", "object": "the timeline"}
      ], "dailyExamples": []},
      {"id": "follow-person", "title": "④ 人について行く・動きを追う", "pattern": "follow + 人 / movement", "transitivity": "他動詞", "structure": "基本", "image": "相手や動きの後ろについて進む。", "point": "現場案内や確認では follow me / follow the route も使えます。", "examples": [
        {"en": "Please follow me to the meeting room.", "ja": "会議室まで私についてきてください。", "focus": "follow", "object": "me"},
        {"en": "The technician followed the cable route on the drawing.", "ja": "技術者は図面上の配線ルートを追いました。", "focus": "followed", "object": "the cable route"},
        {"en": "Can you follow the installation route with the client?", "ja": "顧客と一緒に設置ルートを確認できますか？", "focus": "follow", "object": "the installation route"}
      ], "dailyExamples": []},
      {"id": "follow-story", "title": "⑤ 話・説明を理解してついていく", "pattern": "follow + explanation / discussion", "transitivity": "他動詞", "structure": "基本", "image": "説明の流れに頭がついていく。", "point": "I can follow your explanation. は『説明についていけます』。", "examples": [
        {"en": "I can follow your explanation so far.", "ja": "ここまではあなたの説明についていけています。", "focus": "follow", "object": "your explanation"},
        {"en": "Some customers could not follow the technical details.", "ja": "一部の顧客は技術的な詳細についていけませんでした。", "focus": "follow", "object": "the technical details"},
        {"en": "Please speak slowly so everyone can follow the discussion.", "ja": "全員が議論についていけるように、ゆっくり話してください。", "focus": "follow", "object": "the discussion"}
      ], "dailyExamples": []}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase": "follow up", "ja": "あとで確認する・追って対応する", "image": "一度終わった話の後ろから、追加で確認する。", "pattern": "follow up", "examples": [{"en": "I will follow up after the client meeting.", "ja": "顧客との会議後に私が追加確認します。", "focus": "follow up"}, {"en": "Please follow up tomorrow if there is no reply.", "ja": "返信がなければ明日追加で確認してください。", "focus": "follow up"}], "dailyExamples": []},
      {"phrase": "follow up with", "ja": "〜に追加確認する", "image": "相手に対して後から確認を入れる。", "pattern": "follow up with", "examples": [{"en": "I followed up with the supplier about the delivery date.", "ja": "私は納期について仕入先に追加確認しました。", "focus": "followed up with", "object": "the supplier"}, {"en": "Can you follow up with the client this afternoon?", "ja": "今日の午後、顧客に追加確認してもらえますか？", "focus": "follow up with", "object": "the client"}], "dailyExamples": []},
      {"phrase": "follow up on", "ja": "〜について追加確認する", "image": "未完了の件を追って確認する。", "pattern": "follow up on", "examples": [{"en": "We need to follow up on the quotation.", "ja": "私たちはその見積について追加確認する必要があります。", "focus": "follow up on", "object": "the quotation"}, {"en": "She followed up on the open issue before the meeting.", "ja": "彼女は会議前に未解決の件を追加確認しました。", "focus": "followed up on", "object": "the open issue"}], "dailyExamples": []},
      {"phrase": "follow through", "ja": "最後までやり切る", "image": "始めたことの流れを最後まで通す。", "pattern": "follow through", "examples": [{"en": "The team followed through and completed the installation.", "ja": "チームは最後までやり切って設置を完了しました。", "focus": "followed through"}, {"en": "We need to follow through after making the proposal.", "ja": "提案後も私たちは最後まで対応する必要があります。", "focus": "follow through"}], "dailyExamples": []},
      {"phrase": "follow through on", "ja": "〜を最後まで実行する", "image": "約束や計画を最後まで通す。", "pattern": "follow through on", "examples": [{"en": "We must follow through on our promise to the client.", "ja": "私たちは顧客への約束を最後まで実行しなければなりません。", "focus": "follow through on", "object": "our promise"}, {"en": "He followed through on the action items from the meeting.", "ja": "彼は会議のアクション項目を最後まで実行しました。", "focus": "followed through on", "object": "the action items"}], "dailyExamples": []},
      {"phrase": "follow along", "ja": "一緒についていく・説明を追う", "image": "同じ流れに合わせて進む。", "pattern": "follow along", "examples": [{"en": "Please follow along while I explain the process.", "ja": "私が手順を説明する間、一緒に確認してください。", "focus": "follow along"}, {"en": "New staff can follow along with the checklist.", "ja": "新しいスタッフはチェックリストに沿って進められます。", "focus": "follow along"}], "dailyExamples": []},
      {"phrase": "follow on from", "ja": "〜を受けて続く", "image": "前の出来事から次の動きにつながる。", "pattern": "follow on from", "examples": [{"en": "This request follows on from last week's meeting.", "ja": "この依頼は先週の会議を受けてのものです。", "focus": "follows on from", "object": "last week's meeting"}, {"en": "The next proposal will follow on from the current project.", "ja": "次の提案は現在の案件を受けて続く予定です。", "focus": "follow on from", "object": "the current project"}], "dailyExamples": []},
      {"phrase": "follow behind", "ja": "後ろについて行く", "image": "相手や流れの後ろを進む。", "pattern": "follow behind", "examples": [{"en": "The new staff followed behind the senior technician at the site.", "ja": "新しいスタッフは現場で先輩技術者の後ろについて行きました。", "focus": "followed behind", "object": "the senior technician"}, {"en": "Please follow behind the guide during the factory tour.", "ja": "工場見学中は案内担当の後ろについて行ってください。", "focus": "follow behind", "object": "the guide"}], "dailyExamples": []}
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
    "core": "元の相手・場所・状態へ戻る／戻す",
    "coreDetail": "RETURNは、人や物、連絡、結果が元の相手・場所・状態へ戻る感覚です。基本側では『返す・返品する・折り返す・結果を返す』を扱い、return to / return from などのまとまりは句動詞側に寄せます。",
    "coreVisual": {"from": ["商品", "連絡", "結果", "情報"], "to": "元の相手・場所・状態", "label": "外へ出たもの → 元へ戻る"},
    "meanings": [
      {"id": "return-item", "title": "① 物を返す・返送する", "pattern": "return + item", "transitivity": "他動詞", "structure": "基本", "image": "借りたものや確認したものを相手へ戻す。", "point": "return the sample / return the document は仕事でよく使います。", "examples": [
        {"en": "Please return the sample after the test.", "ja": "テスト後にサンプルを返送してください。", "focus": "return", "object": "the sample"},
        {"en": "We returned the documents yesterday.", "ja": "私たちは昨日、書類を返却しました。", "focus": "returned", "object": "the documents"},
        {"en": "Can you return the demo unit by Monday?", "ja": "月曜日までにデモ機を返却できますか？", "focus": "return", "object": "the demo unit"}
      ], "dailyExamples": []},
      {"id": "return-product", "title": "② 商品を返品する", "pattern": "return + product", "transitivity": "他動詞", "structure": "基本", "image": "購入した商品を返品する。", "point": "return a product は返品対応で便利です。", "examples": [
        {"en": "The customer returned the product yesterday.", "ja": "顧客は昨日その商品を返品しました。", "focus": "returned", "object": "the product"},
        {"en": "We can return the item if it is damaged.", "ja": "破損している場合、私たちはその商品を返品できます。", "focus": "return", "object": "the item"},
        {"en": "Please confirm whether the client wants to return the unit.", "ja": "顧客がそのユニットを返品したいか確認してください。", "focus": "return", "object": "the unit"}
      ], "dailyExamples": []},
      {"id": "return-call", "title": "③ 折り返し連絡する", "pattern": "return + call / email", "transitivity": "他動詞", "structure": "基本", "image": "相手から来た連絡に対して返す。", "point": "return a call は『折り返し電話する』という定番表現です。", "examples": [
        {"en": "I will return your call this afternoon.", "ja": "私は今日の午後、あなたに折り返し電話します。", "focus": "return", "object": "your call"},
        {"en": "She returned the client's email this morning.", "ja": "彼女は今朝、顧客のメールに返信しました。", "focus": "returned", "object": "the client's email"},
        {"en": "Please return the call before the meeting.", "ja": "会議前に折り返し電話してください。", "focus": "return", "object": "the call"}
      ], "dailyExamples": []},
      {"id": "return-data", "title": "④ 結果・データを返す", "pattern": "return + result / data", "transitivity": "他動詞", "structure": "基本", "image": "処理や確認の結果を返す。", "point": "システムや確認作業の結果を説明する時に使えます。", "examples": [
        {"en": "The system returned an error message.", "ja": "システムはエラーメッセージを返しました。", "focus": "returned", "object": "an error message"},
        {"en": "The search returned no results.", "ja": "検索では結果が出ませんでした。", "focus": "returned", "object": "no results"},
        {"en": "This report returns the latest sales data.", "ja": "このレポートは最新の売上データを返します。", "focus": "returns", "object": "the latest sales data"}
      ], "dailyExamples": []},
      {"id": "return-result", "title": "⑤ 利益・成果を生む", "pattern": "return + profit / result", "transitivity": "他動詞", "structure": "基本", "image": "投資や作業が結果として返ってくる。", "point": "return a profit は『利益を生む』というやや硬めの表現です。", "examples": [
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
  {
    "id": "check",
    "rank": 52,
    "word": "CHECK",
    "ipa": "/tʃek/",
    "kana": "チェック",
    "syllable": "check",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "内容・状態・相手に確認を入れて、不安や抜けをなくす",
    "coreDetail": "CHECKは、資料・数字・在庫・予定・相手の意向などを確認して、間違いを減らす動詞です。仕事では見積、納期、図面、メール、在庫確認で頻出します。",
    "coreVisual": {"from": ["📄 資料", "📊 数字", "📦 在庫", "📧 メール", "👤 顧客"], "to": "確認済みの安心できる状態", "label": "不確実 → 確認済み"},
    "meanings": [
      {"id":"check-file","title":"① ファイル・内容を確認する","pattern":"check + file / details","transitivity":"他動詞","structure":"基本","image":"資料や内容を見て、間違いがないか確認する。","point":"check the file / check the details は仕事で非常に使いやすい基本表現です。","examples":[
        {"en":"I will check the file before sending it to the client.","ja":"私は顧客に送る前にファイルを確認します。","focus":"check","object":"the file"},
        {"en":"Please check the details before replying.","ja":"返信する前に詳細を確認してください。","focus":"check","object":"the details"},
        {"en":"We checked the drawing before the site meeting.","ja":"私たちは現場打ち合わせの前に図面を確認しました。","focus":"checked","object":"the drawing"}
      ],"dailyExamples":[]},
      {"id":"check-schedule","title":"② 予定・納期を確認する","pattern":"check + schedule / lead time","transitivity":"他動詞","structure":"基本","image":"日程や納期を確認して、次の行動を決められる状態にする。","point":"schedule, lead time, availability と相性が良いです。","examples":[
        {"en":"Can you check the schedule for next Monday?","ja":"来週月曜日の予定を確認してもらえますか？","focus":"check","object":"the schedule"},
        {"en":"We checked the lead time with the factory.","ja":"私たちは工場に納期を確認しました。","focus":"checked","object":"the lead time"},
        {"en":"Please check availability before confirming the meeting.","ja":"会議を確定する前に空き状況を確認してください。","focus":"check","object":"availability"}
      ],"dailyExamples":[]},
      {"id":"check-stock","title":"③ 在庫・価格を確認する","pattern":"check + stock / price","transitivity":"他動詞","structure":"基本","image":"発注や見積に必要な情報を確認する。","point":"営業では check stock / check the price が頻出です。","examples":[
        {"en":"Please check stock before accepting the order.","ja":"注文を受ける前に在庫を確認してください。","focus":"check","object":"stock"},
        {"en":"I will check the price with the supplier.","ja":"私は仕入先に価格を確認します。","focus":"check","object":"the price"},
        {"en":"She checked the model number before making the quotation.","ja":"彼女は見積を作る前に型番を確認しました。","focus":"checked","object":"the model number"}
      ],"dailyExamples":[]},
      {"id":"check-request","title":"④ 依頼内容・メールを確認する","pattern":"check + request / email","transitivity":"他動詞","structure":"基本","image":"受け取った依頼やメール内容を確認する。","point":"check the request / check the email は日常業務でよく使う基本表現です。","examples":[
        {"en":"I will check the client's request and get back to you.","ja":"私は顧客の依頼内容を確認して、あなたに折り返します。","focus":"check","object":"the client's request"},
        {"en":"Please check the email before confirming the lead time.","ja":"納期を確定する前にメールを確認してください。","focus":"check","object":"the email"},
        {"en":"We checked the payment information before issuing the invoice.","ja":"私たちは請求書を発行する前に支払い情報を確認しました。","focus":"checked","object":"the payment information"}
      ],"dailyExamples":[]},
      {"id":"check-if","title":"⑤ 〜かどうか確認する","pattern":"check if / whether + sentence","transitivity":"他動詞","structure":"基本","image":"条件や事実が正しいか確認する。","point":"check if は会話でもメールでも使いやすいです。","examples":[
        {"en":"Please check if the sample has arrived.","ja":"サンプルが到着したか確認してください。","focus":"check","object":"if the sample has arrived"},
        {"en":"I checked whether the customer approved the design.","ja":"私は顧客がデザインを承認したか確認しました。","focus":"checked","object":"whether the customer approved the design"},
        {"en":"We need to check if the price includes shipping.","ja":"私たちは価格に送料が含まれているか確認する必要があります。","focus":"check","object":"if the price includes shipping"}
      ],"dailyExamples":[]},
      {"id":"check-for","title":"⑥ 問題・ミスがないか確認する","pattern":"check for + error / problem","transitivity":"他動詞","structure":"基本","image":"ミスや不足がないか探して確認する。","point":"check for errors / damage / missing parts の形で使います。","examples":[
        {"en":"Please check for errors before submitting the report.","ja":"レポートを提出する前にミスがないか確認してください。","focus":"check","object":"for errors"},
        {"en":"We checked the product for damage after delivery.","ja":"私たちは納品後、製品に傷がないか確認しました。","focus":"checked","object":"the product for damage"},
        {"en":"The team checked for missing parts before installation.","ja":"チームは施工前に不足部品がないか確認しました。","focus":"checked","object":"for missing parts"}
      ],"dailyExamples":[]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"check in","ja":"状況確認する・チェックインする","image":"途中で状況を確認する。","pattern":"check in","examples":[{"en":"I will check in with the team tomorrow morning.","ja":"私は明日の朝、チームに状況確認します。","focus":"check in","object":"with the team"}],"dailyExamples":[]},
      {"phrase":"check out","ja":"確認する・調べる","image":"気になるものを見て確認する。","pattern":"check out","examples":[{"en":"Please check out the new sample page.","ja":"新しいサンプルページを確認してください。","focus":"check out","object":"the new sample page"}],"dailyExamples":[]},
      {"phrase":"check up on","ja":"様子を確認する","image":"人や状況が大丈夫か確認する。","pattern":"check up on","examples":[{"en":"Can you check up on the delivery status this afternoon?","ja":"今日の午後、納品状況を確認してもらえますか？","focus":"check up on","object":"the delivery status"}],"dailyExamples":[]},
      {"phrase":"check over","ja":"全体を確認する","image":"一通り目を通して確認する。","pattern":"check over","examples":[{"en":"Please check over the quotation before I send it.","ja":"私が送る前に見積書全体を確認してください。","focus":"check over","object":"the quotation"}],"dailyExamples":[]},
      {"phrase":"check through","ja":"一通り確認する","image":"最初から最後まで確認する。","pattern":"check through","examples":[{"en":"We checked through the list before placing the order.","ja":"私たちは発注前にリストを一通り確認しました。","focus":"checked through","object":"the list"}],"dailyExamples":[]},
      {"phrase":"check with","ja":"〜に確認する","image":"相手に確認を取る。","pattern":"check with","examples":[{"en":"Please check with the customer before changing the color.","ja":"色を変更する前に顧客へ確認してください。","focus":"check with","object":"the customer"}],"dailyExamples":[]},
      {"phrase":"check into","ja":"調査する・詳しく確認する","image":"問題の中に入って調べる。","pattern":"check into","examples":[{"en":"We need to check into the cause of the delay.","ja":"私たちは遅延の原因を詳しく確認する必要があります。","focus":"check into","object":"the cause of the delay"}],"dailyExamples":[]},
      {"phrase":"check off","ja":"確認してチェックを付ける","image":"確認済みとしてリストから消す。","pattern":"check off","examples":[{"en":"Please check off each item after inspection.","ja":"検査後に各項目へチェックを付けてください。","focus":"check off","object":"each item"}],"dailyExamples":[]},
      {"phrase":"check back","ja":"後で確認する","image":"時間を置いてもう一度確認する。","pattern":"check back","examples":[{"en":"I will check back after the supplier replies.","ja":"仕入先から返信が来た後、私は再度確認します。","focus":"check back","object":"after the supplier replies"}],"dailyExamples":[]},
      {"phrase":"check against","ja":"〜と照合する","image":"基準や資料と比べて確認する。","pattern":"check against","examples":[{"en":"We checked the invoice against the purchase order.","ja":"私たちは請求書を発注書と照合しました。","focus":"checked against","object":"the purchase order"}],"dailyExamples":[]}
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
    "core": "選択肢の中から一つの方向を選んで決める",
    "coreDetail": "DECIDEは、迷っている状態から一つの方針や行動を選ぶ動詞です。仕事では日程、価格、次の対応、発注判断、採用可否などを決める時に使います。",
    "coreVisual": {"from": ["A案", "B案", "条件", "結果", "相談内容"], "to": "決定した方針", "label": "複数の選択肢 → 1つに決める"},
    "meanings": [
      {"id":"decide-schedule","title":"① 日程・予定を決める","pattern":"decide + schedule / date","transitivity":"他動詞","structure":"基本","image":"複数の候補から予定を決める。","point":"decide the schedule は仕事でよく使う基本表現です。","examples":[
        {"en":"We need to decide the installation schedule by tomorrow.","ja":"私たちは明日までに施工スケジュールを決める必要があります。","focus":"decide","object":"the installation schedule"},
        {"en":"The team decided the meeting date after checking availability.","ja":"チームは空き状況を確認した後、会議日を決めました。","focus":"decided","object":"the meeting date"},
        {"en":"Please decide the delivery date with the customer.","ja":"顧客と納品日を決めてください。","focus":"decide","object":"the delivery date"}
      ],"dailyExamples":[]},
      {"id":"decide-price","title":"② 価格・条件を決める","pattern":"decide + price / condition","transitivity":"他動詞","structure":"基本","image":"条件や価格を一つに確定する。","point":"price, condition, quantity と一緒に使えます。","examples":[
        {"en":"Management decided the final price this morning.","ja":"経営陣は今朝、最終価格を決めました。","focus":"decided","object":"the final price"},
        {"en":"We should decide the discount rate before sending the quote.","ja":"見積を送る前に割引率を決めるべきです。","focus":"decide","object":"the discount rate"},
        {"en":"The customer decided the order quantity after the demo.","ja":"顧客はデモの後、発注数量を決めました。","focus":"decided","object":"the order quantity"}
      ],"dailyExamples":[]},
      {"id":"decide-next-step","title":"③ 次の対応を決める","pattern":"decide + next step / action","transitivity":"他動詞","structure":"基本","image":"次に何をするかを決める。","point":"会議後や顧客対応後に使いやすい表現です。","examples":[
        {"en":"Let's decide the next step after reviewing the report.","ja":"レポートを確認した後、次の対応を決めましょう。","focus":"decide","object":"the next step"},
        {"en":"We decided the action plan during the meeting.","ja":"私たちは会議中に行動計画を決めました。","focus":"decided","object":"the action plan"},
        {"en":"Please decide what to do before calling the client.","ja":"顧客に電話する前に何をするか決めてください。","focus":"decide","object":"what to do"}
      ],"dailyExamples":[]},
      {"id":"decide-whether","title":"④ 〜するかどうか決める","pattern":"decide whether to + verb","transitivity":"他動詞","structure":"基本","image":"やる・やらないを判断する。","point":"decide whether to order / change / continue などで使います。","examples":[
        {"en":"We need to decide whether to order more stock.","ja":"私たちは在庫を追加発注するかどうか決める必要があります。","focus":"decide","object":"whether to order more stock"},
        {"en":"The client decided whether to change the color after seeing the sample.","ja":"顧客はサンプルを見た後、色を変更するかどうか決めました。","focus":"decided","object":"whether to change the color"},
        {"en":"I will decide whether to visit the site after the call.","ja":"私は電話の後、現場を訪問するかどうか決めます。","focus":"decide","object":"whether to visit the site"}
      ],"dailyExamples":[]},
      {"id":"decide-based-on","title":"⑤ 結果や条件をもとに決める","pattern":"decide based on + reason","transitivity":"他動詞","structure":"基本","image":"判断材料を見て決定する。","point":"based on は判断理由を示す時に便利です。","examples":[
        {"en":"We decided based on the test result.","ja":"私たちはテスト結果をもとに決めました。","focus":"decided","object":"based on the test result"},
        {"en":"Please decide based on the customer's priority.","ja":"顧客の優先度をもとに決めてください。","focus":"decide","object":"based on the customer's priority"},
        {"en":"She decided after discussing it with her manager.","ja":"彼女は上司と相談した後で決めました。","focus":"decided","object":"after discussing it with her manager"}
      ],"dailyExamples":[]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"decide on","ja":"〜に決める","image":"候補の中から対象を選んで決める。","pattern":"decide on","examples":[{"en":"We decided on the final color.","ja":"私たちは最終色に決めました。","focus":"decided on","object":"the final color"}],"dailyExamples":[]},
      {"phrase":"decide upon","ja":"〜に決める","image":"やや硬い言い方で正式に決める。","pattern":"decide upon","examples":[{"en":"The board decided upon a new policy.","ja":"役員会は新しい方針に決めました。","focus":"decided upon","object":"a new policy"}],"dailyExamples":[]},
      {"phrase":"decide against","ja":"〜しないことに決める","image":"選択肢から外す。","pattern":"decide against","examples":[{"en":"We decided against the rush order.","ja":"私たちは急ぎ注文を受けないことに決めました。","focus":"decided against","object":"the rush order"}],"dailyExamples":[]},
      {"phrase":"decide for","ja":"〜に有利な判断をする・〜のために決める","image":"ある人や案に向けて判断する。","pattern":"decide for","examples":[{"en":"The committee decided for the safer option.","ja":"委員会はより安全な選択肢を選びました。","focus":"decided for","object":"the safer option"}],"dailyExamples":[]},
      {"phrase":"decide between","ja":"〜のどちらかを決める","image":"2つの選択肢から選ぶ。","pattern":"decide between","examples":[{"en":"We need to decide between these two suppliers.","ja":"私たちはこの2社の仕入先のどちらかを決める必要があります。","focus":"decide between","object":"these two suppliers"}],"dailyExamples":[]},
      {"phrase":"decide among","ja":"複数の中から決める","image":"複数候補の中から選んで決める。","pattern":"decide among","examples":[{"en":"The client decided among three design options.","ja":"顧客は3つのデザイン案の中から決めました。","focus":"decided among","object":"three design options"}],"dailyExamples":[]}
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
    "coreVisual": {"from": ["複雑な情報", "理由", "手順", "仕様", "変更点"], "to": "相手が理解できる説明", "label": "分かりにくい → 分かる"},
    "meanings": [
      {"id":"explain-issue","title":"① 問題・状況を説明する","pattern":"explain + issue / situation","transitivity":"他動詞","structure":"基本","image":"状況を相手が分かる形にする。","point":"explain の目的語は人ではなく内容です。人には to を使います。","examples":[
        {"en":"I explained the issue to the client.","ja":"私は顧客にその問題を説明しました。","focus":"explained","object":"the issue"},
        {"en":"Please explain the situation to the team.","ja":"チームに状況を説明してください。","focus":"explain","object":"the situation"},
        {"en":"We explained the quotation during the meeting.","ja":"私たちは会議中に見積内容を説明しました。","focus":"explained","object":"the quotation"}
      ],"dailyExamples":[]},
      {"id":"explain-reason","title":"② 理由を説明する","pattern":"explain + reason / why","transitivity":"他動詞","structure":"基本","image":"なぜそうなったかを分かるように伝える。","point":"遅延、価格変更、仕様変更の説明でよく使います。","examples":[
        {"en":"Please explain the reason for the delay.","ja":"遅延の理由を説明してください。","focus":"explain","object":"the reason"},
        {"en":"We explained why the price had changed.","ja":"私たちは価格が変更された理由を説明しました。","focus":"explained","object":"why the price had changed"},
        {"en":"The supplier explained that the material was out of stock.","ja":"仕入先は材料が欠品していると説明しました。","focus":"explained","object":"that the material was out of stock"}
      ],"dailyExamples":[]},
      {"id":"explain-process","title":"③ 手順・方法を説明する","pattern":"explain + process / how to","transitivity":"他動詞","structure":"基本","image":"作業の流れや使い方を順番に伝える。","point":"explain how to は操作説明で便利です。","examples":[
        {"en":"Please explain the process to the new staff.","ja":"新しいスタッフに手順を説明してください。","focus":"explain","object":"the process"},
        {"en":"The engineer explained how to install the product.","ja":"技術者はその製品の設置方法を説明しました。","focus":"explained","object":"how to install the product"},
        {"en":"We explained how to submit the request online.","ja":"私たちはオンラインで依頼を提出する方法を説明しました。","focus":"explained","object":"how to submit the request online"}
      ],"dailyExamples":[]},
      {"id":"explain-difference","title":"④ 違い・変更点を説明する","pattern":"explain + difference / change","transitivity":"他動詞","structure":"基本","image":"比較や変更の理由を分かりやすく伝える。","point":"difference, change, benefit と相性が良いです。","examples":[
        {"en":"Can you explain the difference between these two models?","ja":"この2つの型番の違いを説明してもらえますか？","focus":"explain","object":"the difference"},
        {"en":"She explained the schedule change to the customer.","ja":"彼女は顧客にスケジュール変更を説明しました。","focus":"explained","object":"the schedule change"},
        {"en":"We need to explain the benefit of the new product.","ja":"私たちは新製品の利点を説明する必要があります。","focus":"explain","object":"the benefit"}
      ],"dailyExamples":[]},
      {"id":"explain-clearly","title":"⑤ 分かりやすく説明する","pattern":"explain + clearly / simply","transitivity":"他動詞","structure":"基本","image":"相手が理解しやすい形にして伝える。","point":"clearly, simply, briefly と一緒に使いやすいです。","examples":[
        {"en":"Please explain it clearly in the email.","ja":"メールでそれを分かりやすく説明してください。","focus":"explain","object":"it"},
        {"en":"He explained the plan briefly before the meeting.","ja":"彼は会議前に計画を簡単に説明しました。","focus":"explained","object":"the plan"},
        {"en":"We should explain the risk simply to the client.","ja":"私たちは顧客にリスクを簡単に説明するべきです。","focus":"explain","object":"the risk"}
      ],"dailyExamples":[]}
    ],
    "collocations": [],
    "phrasalVerbs": [
      {"phrase":"explain to","ja":"〜に説明する","image":"説明する相手を示す。","pattern":"explain to","examples":[{"en":"Please explain the change to the customer.","ja":"顧客に変更点を説明してください。","focus":"explain to","object":"the customer"}],"dailyExamples":[]},
      {"phrase":"explain about","ja":"〜について説明する","image":"説明する話題を示す。","pattern":"explain about","examples":[{"en":"The engineer explained about the new wiring method.","ja":"技術者は新しい配線方法について説明しました。","focus":"explained about","object":"the new wiring method"}],"dailyExamples":[]},
      {"phrase":"explain away","ja":"言い訳して片付ける","image":"問題を説明で軽く見せようとする。","pattern":"explain away","examples":[{"en":"We should not explain away the delivery mistake.","ja":"私たちは納品ミスを言い訳で片付けるべきではありません。","focus":"explain away","object":"the delivery mistake"}],"dailyExamples":[]},
      {"phrase":"explain through","ja":"〜を通して説明する","image":"資料や例を使って説明する。","pattern":"explain through","examples":[{"en":"She explained the process through a simple chart.","ja":"彼女は簡単な図を通して手順を説明しました。","focus":"explained through","object":"a simple chart"}],"dailyExamples":[]},
      {"phrase":"explain with","ja":"〜を使って説明する","image":"資料・例・数字を使って説明する。","pattern":"explain with","examples":[{"en":"Please explain the result with actual numbers.","ja":"実際の数字を使って結果を説明してください。","focus":"explain with","object":"actual numbers"}],"dailyExamples":[]}
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
    "coreDetail": "improve は、品質・手順・対応・数字・関係・スキルなどを、今より良い状態にする／良くなる動詞です。仕事では改善活動・品質向上・顧客対応の改善でよく使います。",
    "coreVisual": { "from": ["現状", "課題", "不足", "低い数値"], "to": "より良い状態", "label": "現状 → 改善された状態" },
    "meanings": [
      { "id": "improve-process", "title": "① 手順・業務を改善する", "pattern": "improve + process / workflow", "transitivity": "他動詞", "structure": "基本", "image": "仕事の流れを今より良くする。", "point": "process, workflow, system など、改善対象を目的語に置きます。", "examples": [
        { "en": "We need to improve the approval process.", "ja": "私たちは承認プロセスを改善する必要があります。", "focus": "improve", "object": "the approval process" },
        { "en": "The new checklist improved our workflow.", "ja": "新しいチェックリストで私たちの業務フローが改善しました。", "focus": "improved", "object": "our workflow" },
        { "en": "This system will improve how we handle orders.", "ja": "このシステムは受注対応の方法を改善します。", "focus": "improve", "object": "how we handle orders" }
      ], "dailyExamples": [] },
      { "id": "improve-quality", "title": "② 品質・精度を高める", "pattern": "improve + quality / accuracy", "transitivity": "他動詞", "structure": "基本", "image": "品質や精度を一段上げる。", "point": "quality, accuracy, performance など仕事で重要な名詞と相性が良いです。", "examples": [
        { "en": "We improved the quality of the final report.", "ja": "私たちは最終報告書の品質を高めました。", "focus": "improved", "object": "the quality of the final report" },
        { "en": "Please improve the accuracy of the estimate.", "ja": "見積の精度を高めてください。", "focus": "improve", "object": "the accuracy of the estimate" },
        { "en": "The update improved the performance of the app.", "ja": "その更新でアプリの性能が向上しました。", "focus": "improved", "object": "the performance of the app" }
      ], "dailyExamples": [] },
      { "id": "improve-results", "title": "③ 数値・結果を改善する", "pattern": "improve + sales / rate / result", "transitivity": "他動詞・自動詞", "structure": "基本", "image": "数字や成果が良くなる。", "point": "自動詞として Sales improved. のようにも使えます。", "examples": [
        { "en": "We improved our response rate this quarter.", "ja": "私たちは今四半期の返信率を改善しました。", "focus": "improved", "object": "our response rate" },
        { "en": "Sales improved after the new campaign.", "ja": "新しいキャンペーン後に売上が改善しました。", "focus": "improved" },
        { "en": "The team improved the delivery success rate.", "ja": "チームは納品成功率を改善しました。", "focus": "improved", "object": "the delivery success rate" }
      ], "dailyExamples": [] },
      { "id": "improve-skills", "title": "④ スキル・知識を伸ばす", "pattern": "improve + skill / knowledge", "transitivity": "他動詞", "structure": "基本", "image": "人の能力を今より使える状態にする。", "point": "English, skills, knowledge など学習・研修文脈で使えます。", "examples": [
        { "en": "I want to improve my business English.", "ja": "私はビジネス英語を上達させたいです。", "focus": "improve", "object": "my business English" },
        { "en": "The training helped us improve our product knowledge.", "ja": "その研修で私たちは製品知識を高めることができました。", "focus": "improve", "object": "our product knowledge" },
        { "en": "She improved her presentation skills through practice.", "ja": "彼女は練習を通じてプレゼン能力を高めました。", "focus": "improved", "object": "her presentation skills" }
      ], "dailyExamples": [] },
      { "id": "improve-service", "title": "⑤ サービス・対応を改善する", "pattern": "improve + service / support / response", "transitivity": "他動詞", "structure": "基本", "image": "顧客や社内への対応をより良くする。", "point": "customer service, support, response time などに使います。", "examples": [
        { "en": "We improved customer support by adding a new FAQ.", "ja": "私たちは新しいFAQを追加して顧客サポートを改善しました。", "focus": "improved", "object": "customer support" },
        { "en": "Please improve the response time for urgent requests.", "ja": "緊急依頼への対応時間を改善してください。", "focus": "improve", "object": "the response time" },
        { "en": "The team improved the follow-up process after meetings.", "ja": "チームは会議後のフォロー手順を改善しました。", "focus": "improved", "object": "the follow-up process" }
      ], "dailyExamples": [] },
      { "id": "improve-communication", "title": "⑥ 関係・伝達を良くする", "pattern": "improve + relationship / communication", "transitivity": "他動詞", "structure": "基本", "image": "相手とのやり取りを今より良くする。", "point": "relationship, communication, situation など抽象的な対象にも使えます。", "examples": [
        { "en": "Regular updates improved communication with the client.", "ja": "定期的な共有で顧客とのコミュニケーションが改善しました。", "focus": "improved", "object": "communication" },
        { "en": "We should improve the relationship with this supplier.", "ja": "私たちはこの仕入先との関係を改善するべきです。", "focus": "improve", "object": "the relationship" },
        { "en": "Clear reports improve teamwork.", "ja": "分かりやすい報告はチームワークを良くします。", "focus": "improve", "object": "teamwork" }
      ], "dailyExamples": [] }
    ],
    "collocations": [],
    "phrasalVerbs": [
      { "phrase": "improve on", "ja": "〜をさらに改善する", "image": "既存のものを土台にして、さらに良くする。", "pattern": "improve on", "examples": [
        { "en": "We need to improve on last year's proposal.", "ja": "私たちは昨年の提案をさらに改善する必要があります。", "focus": "improve on", "object": "last year's proposal" },
        { "en": "The new model improves on the previous design.", "ja": "新モデルは前のデザインをさらに改善しています。", "focus": "improves on", "object": "the previous design" }
      ], "dailyExamples": [] },
      { "phrase": "improve upon", "ja": "〜を改良する", "image": "improve on より少し硬い表現。", "pattern": "improve upon", "examples": [
        { "en": "The team improved upon the original plan.", "ja": "チームは当初の計画を改良しました。", "focus": "improved upon", "object": "the original plan" },
        { "en": "We should improve upon the current quotation format.", "ja": "現在の見積書フォーマットを改良すべきです。", "focus": "improve upon", "object": "the current quotation format" }
      ], "dailyExamples": [] },
      { "phrase": "improve with", "ja": "〜によって良くなる", "image": "道具・経験・練習によって状態が良くなる。", "pattern": "improve with", "examples": [
        { "en": "Our service improved with customer feedback.", "ja": "顧客のフィードバックによってサービスが改善しました。", "focus": "improved with", "object": "customer feedback" },
        { "en": "The report improved with clearer charts.", "ja": "より分かりやすいグラフで報告書が良くなりました。", "focus": "improved with", "object": "clearer charts" }
      ], "dailyExamples": [] },
      { "phrase": "improve by", "ja": "〜分改善する", "image": "数値で改善幅を示す。", "pattern": "improve by", "examples": [
        { "en": "Our response time improved by 20 percent.", "ja": "対応時間は20パーセント改善しました。", "focus": "improved by", "object": "20 percent" },
        { "en": "We want to improve productivity by ten percent.", "ja": "生産性を10パーセント改善したいです。", "focus": "improve by", "object": "ten percent" }
      ], "dailyExamples": [] },
      { "phrase": "improve over", "ja": "時間とともに改善する", "image": "過去から現在にかけて良くなる。", "pattern": "improve over", "examples": [
        { "en": "Sales improved over the last quarter.", "ja": "売上は前四半期から改善しました。", "focus": "improved over", "object": "the last quarter" },
        { "en": "Quality should improve over the next few months.", "ja": "品質は今後数か月で改善するはずです。", "focus": "improve over", "object": "the next few months" }
      ], "dailyExamples": [] },
      { "phrase": "improve from", "ja": "〜から改善する", "image": "低い状態・悪い状態から良くなる。", "pattern": "improve from", "examples": [
        { "en": "The result improved from last month.", "ja": "結果は先月から改善しました。", "focus": "improved from", "object": "last month" },
        { "en": "We improved from the first draft to the final version.", "ja": "私たちは初稿から最終版まで改善しました。", "focus": "improved from", "object": "the first draft" }
      ], "dailyExamples": [] }
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
    "core": "人・仕事・問題を管理し、限られた条件で何とか進める",
    "coreDetail": "manage は、案件や人を管理するだけでなく、難しい条件の中で何とか対応する意味もあります。仕事では案件管理、時間管理、問題対応、チーム運営でよく使います。",
    "coreVisual": { "from": ["案件", "人", "時間", "問題", "予算"], "to": "整理して前に進める", "label": "ばらばらな要素 → 管理された状態" },
    "meanings": [
      { "id": "manage-project", "title": "① 案件・業務を管理する", "pattern": "manage + project / task", "transitivity": "他動詞", "structure": "基本", "image": "案件や業務を動く状態に保つ。", "point": "project, task, account, operation など仕事の対象に使います。", "examples": [
        { "en": "I manage several projects at the same time.", "ja": "私は複数の案件を同時に管理しています。", "focus": "manage", "object": "several projects" },
        { "en": "She manages the daily operations of the team.", "ja": "彼女はチームの日常業務を管理しています。", "focus": "manages", "object": "the daily operations" },
        { "en": "We need someone to manage this account.", "ja": "この取引先を管理する担当者が必要です。", "focus": "manage", "object": "this account" }
      ], "dailyExamples": [] },
      { "id": "manage-team", "title": "② 人・チームを管理する", "pattern": "manage + team / staff", "transitivity": "他動詞", "structure": "基本", "image": "人やチームの動きをまとめる。", "point": "team, staff, members などに使います。", "examples": [
        { "en": "He manages a team of five salespeople.", "ja": "彼は5人の営業チームを管理しています。", "focus": "manages", "object": "a team" },
        { "en": "We need to manage the new members carefully.", "ja": "新しいメンバーを丁寧に管理する必要があります。", "focus": "manage", "object": "the new members" },
        { "en": "The leader managed the team during the busy season.", "ja": "リーダーは繁忙期にチームを管理しました。", "focus": "managed", "object": "the team" }
      ], "dailyExamples": [] },
      { "id": "manage-time", "title": "③ 時間・予定をやりくりする", "pattern": "manage + time / schedule", "transitivity": "他動詞", "structure": "基本", "image": "限られた時間をうまく使う。", "point": "time, schedule, workload とよく使います。", "examples": [
        { "en": "I need to manage my time better this week.", "ja": "今週はもっと上手く時間管理をする必要があります。", "focus": "manage", "object": "my time" },
        { "en": "Can you manage your schedule around the client visit?", "ja": "顧客訪問に合わせて予定を調整できますか？", "focus": "manage", "object": "your schedule" },
        { "en": "We managed the workload by sharing tasks.", "ja": "作業を分担して業務量をやりくりしました。", "focus": "managed", "object": "the workload" }
      ], "dailyExamples": [] },
      { "id": "manage-costs", "title": "④ コスト・予算を管理する", "pattern": "manage + cost / budget", "transitivity": "他動詞", "structure": "基本", "image": "お金や数字が予定内に収まるようにする。", "point": "cost, budget, resources と相性が良いです。", "examples": [
        { "en": "We must manage costs carefully on this project.", "ja": "この案件ではコストを慎重に管理しなければなりません。", "focus": "manage", "object": "costs" },
        { "en": "The manager managed the budget well.", "ja": "マネージャーは予算をうまく管理しました。", "focus": "managed", "object": "the budget" },
        { "en": "Please manage the resources for next month.", "ja": "来月分のリソースを管理してください。", "focus": "manage", "object": "the resources" }
      ], "dailyExamples": [] },
      { "id": "manage-risk", "title": "⑤ 問題・リスクに対応する", "pattern": "manage + risk / issue", "transitivity": "他動詞", "structure": "基本", "image": "問題を放置せず、被害を小さくしながら扱う。", "point": "risk, issue, complaint, delay などに使います。", "examples": [
        { "en": "We must manage the risk before signing the contract.", "ja": "契約前にリスクを管理しなければなりません。", "focus": "manage", "object": "the risk" },
        { "en": "The team managed the complaint quickly.", "ja": "チームはそのクレームに素早く対応しました。", "focus": "managed", "object": "the complaint" },
        { "en": "Please manage the delay and inform the client.", "ja": "遅延に対応し、顧客へ知らせてください。", "focus": "manage", "object": "the delay" }
      ], "dailyExamples": [] },
      { "id": "manage-to-do", "title": "⑥ 何とか〜する", "pattern": "manage to do", "transitivity": "自動詞的表現", "structure": "基本", "image": "難しい状況でも何とか達成する。", "point": "manage to finish, manage to send など成果に焦点があります。", "examples": [
        { "en": "We managed to finish the report today.", "ja": "私たちは今日なんとか報告書を終えることができました。", "focus": "managed", "object": "to finish the report" },
        { "en": "She managed to get approval before the deadline.", "ja": "彼女は締切前になんとか承認を得ました。", "focus": "managed", "object": "to get approval" },
        { "en": "I managed to join the meeting on time.", "ja": "私はなんとか時間通りに会議へ参加できました。", "focus": "managed", "object": "to join the meeting" }
      ], "dailyExamples": [] }
    ],
    "collocations": [],
    "phrasalVerbs": [
      { "phrase": "manage with", "ja": "〜で何とかやる", "image": "限られた道具・人数・条件で対応する。", "pattern": "manage with", "examples": [
        { "en": "We can manage with the current staff for now.", "ja": "今のところ現在の人員で何とか対応できます。", "focus": "manage with", "object": "the current staff" },
        { "en": "Can you manage with this budget?", "ja": "この予算で何とか対応できますか？", "focus": "manage with", "object": "this budget" }
      ], "dailyExamples": [] },
      { "phrase": "manage without", "ja": "〜なしで何とかする", "image": "不足がある中で対応する。", "pattern": "manage without", "examples": [
        { "en": "We had to manage without extra staff.", "ja": "追加人員なしで何とか対応しなければなりませんでした。", "focus": "manage without", "object": "extra staff" },
        { "en": "Can you manage without the original file?", "ja": "元データなしで何とか対応できますか？", "focus": "manage without", "object": "the original file" }
      ], "dailyExamples": [] },
      { "phrase": "manage through", "ja": "〜を乗り切る", "image": "難しい時期や問題の中を通って進む。", "pattern": "manage through", "examples": [
        { "en": "The team managed through the busy season.", "ja": "チームは繁忙期を乗り切りました。", "focus": "managed through", "object": "the busy season" },
        { "en": "We need to manage through this shortage carefully.", "ja": "私たちはこの不足を慎重に乗り切る必要があります。", "focus": "manage through", "object": "this shortage" }
      ], "dailyExamples": [] },
      { "phrase": "manage around", "ja": "〜を避けながら対応する", "image": "制約をよけながら予定や作業を組む。", "pattern": "manage around", "examples": [
        { "en": "We managed around the delivery delay.", "ja": "私たちは納品遅延を避ける形で対応しました。", "focus": "managed around", "object": "the delivery delay" },
        { "en": "Can we manage around his schedule?", "ja": "彼の予定に合わせて何とか調整できますか？", "focus": "manage around", "object": "his schedule" }
      ], "dailyExamples": [] },
      { "phrase": "manage down", "ja": "抑える・減らす", "image": "コストや期待値を下げて管理する。", "pattern": "manage down", "examples": [
        { "en": "We need to manage down unnecessary costs.", "ja": "不要なコストを抑える必要があります。", "focus": "manage down", "object": "unnecessary costs" },
        { "en": "Please manage down expectations until we confirm the schedule.", "ja": "スケジュールを確認するまで期待値を抑えてください。", "focus": "manage down", "object": "expectations" }
      ], "dailyExamples": [] },
      { "phrase": "manage up", "ja": "上司や上位者をうまく動かす", "image": "上の立場の人に必要な情報を出し、判断しやすくする。", "pattern": "manage up", "examples": [
        { "en": "She knows how to manage up during a difficult project.", "ja": "彼女は難しい案件で上司をうまく動かす方法を知っています。", "focus": "manage up" },
        { "en": "We need to manage up by giving clear updates.", "ja": "明確な共有をして上司が判断しやすいようにする必要があります。", "focus": "manage up" }
      ], "dailyExamples": [] },
      { "phrase": "manage across", "ja": "部門をまたいで管理する", "image": "複数のチームや部門にまたがって進める。", "pattern": "manage across", "examples": [
        { "en": "He manages across sales and operations.", "ja": "彼は営業と業務部門をまたいで管理しています。", "focus": "manages across", "object": "sales and operations" },
        { "en": "This role requires you to manage across teams.", "ja": "この役割では複数チームをまたいで管理する必要があります。", "focus": "manage across", "object": "teams" }
      ], "dailyExamples": [] }
    ]
  },
  {
    "id": "prepare",
    "rank": 57,
    "word": "PREPARE",
    "ipa": "/prɪˈpeər/",
    "kana": "プリペア",
    "syllable": "pre-pare",
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "必要になる前に整えておく",
    "coreDetail": "prepare は、会議・資料・見積・サンプル・人などを、必要になる前に使える状態へ整える動詞です。仕事では事前準備や提出物の準備でよく使います。",
    "coreVisual": { "from": ["未準備", "資料", "人", "情報", "予定"], "to": "使える状態", "label": "必要になる前に整える" },
    "meanings": [
      { "id": "prepare-documents", "title": "① 書類・資料を準備する", "pattern": "prepare + documents / report", "transitivity": "他動詞", "structure": "基本", "image": "必要な資料を使える状態にする。", "point": "documents, report, quotation, agenda など仕事の名詞と相性が良いです。", "examples": [
        { "en": "Please prepare the documents for tomorrow's meeting.", "ja": "明日の会議用の書類を準備してください。", "focus": "prepare", "object": "the documents" },
        { "en": "I prepared the quotation this morning.", "ja": "私は今朝、見積書を準備しました。", "focus": "prepared", "object": "the quotation" },
        { "en": "We need to prepare a short report by Friday.", "ja": "私たちは金曜日までに短い報告書を準備する必要があります。", "focus": "prepare", "object": "a short report" }
      ], "dailyExamples": [] },
      { "id": "prepare-meeting", "title": "② 会議・商談の準備をする", "pattern": "prepare + meeting / agenda", "transitivity": "他動詞", "structure": "基本", "image": "会議前に必要な内容を整える。", "point": "meeting, agenda, presentation などとよく使います。", "examples": [
        { "en": "We prepared the agenda before the meeting.", "ja": "私たちは会議前に議題を準備しました。", "focus": "prepared", "object": "the agenda" },
        { "en": "She prepared the presentation for the client.", "ja": "彼女は顧客向けのプレゼン資料を準備しました。", "focus": "prepared", "object": "the presentation" },
        { "en": "Please prepare your questions in advance.", "ja": "質問を事前に準備してください。", "focus": "prepare", "object": "your questions" }
      ], "dailyExamples": [] },
      { "id": "prepare-samples", "title": "③ サンプル・商品を準備する", "pattern": "prepare + samples / products", "transitivity": "他動詞", "structure": "基本", "image": "出荷・確認・提案に使う物をそろえる。", "point": "samples, products, parts など営業・製造寄りの名詞に使えます。", "examples": [
        { "en": "We prepared samples for the customer visit.", "ja": "私たちは顧客訪問用のサンプルを準備しました。", "focus": "prepared", "object": "samples" },
        { "en": "Please prepare the parts for inspection.", "ja": "検査用の部品を準備してください。", "focus": "prepare", "object": "the parts" },
        { "en": "The team prepared demo units for the exhibition.", "ja": "チームは展示会用のデモ機を準備しました。", "focus": "prepared", "object": "demo units" }
      ], "dailyExamples": [] },
      { "id": "prepare-team", "title": "④ 人・チームを準備させる", "pattern": "prepare + person / team", "transitivity": "他動詞", "structure": "基本", "image": "人が対応できる状態になるようにする。", "point": "prepare someone for は人を備えさせる形です。", "examples": [
        { "en": "The manager prepared the team for the new project.", "ja": "マネージャーは新案件に向けてチームを準備させました。", "focus": "prepared", "object": "the team" },
        { "en": "This training prepares new staff for customer calls.", "ja": "この研修は新しいスタッフに顧客対応の準備をさせます。", "focus": "prepares", "object": "new staff" },
        { "en": "We need to prepare everyone before the system change.", "ja": "システム変更前に全員を準備させる必要があります。", "focus": "prepare", "object": "everyone" }
      ], "dailyExamples": [] },
      { "id": "prepare-before", "title": "⑤ 事前に準備する", "pattern": "prepare before / in advance", "transitivity": "自動詞", "structure": "基本", "image": "必要になる前に準備を済ませる。", "point": "before the meeting, in advance と使うと自然です。", "examples": [
        { "en": "Please prepare before the client meeting.", "ja": "顧客との会議前に準備してください。", "focus": "prepare", "object": "before the client meeting" },
        { "en": "We prepared in advance to avoid delays.", "ja": "遅れを避けるために私たちは事前に準備しました。", "focus": "prepared", "object": "in advance" },
        { "en": "I usually prepare the day before a presentation.", "ja": "私は普段、プレゼンの前日に準備します。", "focus": "prepare", "object": "the day before a presentation" }
      ], "dailyExamples": [] },
      { "id": "prepare-to-do", "title": "⑥ 〜する準備をする", "pattern": "prepare to do", "transitivity": "自動詞的表現", "structure": "基本", "image": "次の行動に向けて体制を整える。", "point": "prepare to send, prepare to explain など動作の前準備に使います。", "examples": [
        { "en": "We prepared to send the quotation after approval.", "ja": "私たちは承認後に見積書を送る準備をしました。", "focus": "prepared", "object": "to send the quotation" },
        { "en": "The team prepared to explain the change to the client.", "ja": "チームは顧客に変更点を説明する準備をしました。", "focus": "prepared", "object": "to explain the change" },
        { "en": "I prepared to answer questions during the meeting.", "ja": "私は会議中の質問に答える準備をしました。", "focus": "prepared", "object": "to answer questions" }
      ], "dailyExamples": [] }
    ],
    "collocations": [],
    "phrasalVerbs": [
      { "phrase": "prepare for", "ja": "〜に備える・準備する", "image": "会議・出張・変更などに向けて整える。", "pattern": "prepare for", "examples": [
        { "en": "We need to prepare for tomorrow's meeting.", "ja": "私たちは明日の会議に備える必要があります。", "focus": "prepare for", "object": "tomorrow's meeting" },
        { "en": "Please prepare for possible questions from the client.", "ja": "顧客からの質問に備えてください。", "focus": "prepare for", "object": "possible questions" }
      ], "dailyExamples": [] },
      { "phrase": "prepare ahead", "ja": "前もって準備する", "image": "必要になるより前に整えておく。", "pattern": "prepare ahead", "examples": [
        { "en": "We prepared ahead for the exhibition.", "ja": "私たちは展示会に向けて前もって準備しました。", "focus": "prepared ahead", "object": "for the exhibition" },
        { "en": "Please prepare ahead if the schedule is tight.", "ja": "スケジュールが厳しい場合は前もって準備してください。", "focus": "prepare ahead" }
      ], "dailyExamples": [] },
      { "phrase": "prepare in advance", "ja": "事前に準備する", "image": "先に準備しておき、直前に慌てないようにする。", "pattern": "prepare in advance", "examples": [
        { "en": "We prepared in advance for the audit.", "ja": "私たちは監査に向けて事前に準備しました。", "focus": "prepared in advance", "object": "for the audit" },
        { "en": "Please prepare in advance for the client visit.", "ja": "顧客訪問に向けて事前に準備してください。", "focus": "prepare in advance", "object": "for the client visit" }
      ], "dailyExamples": [] },
      { "phrase": "prepare with", "ja": "〜を使って準備する", "image": "資料・情報・道具を使って整える。", "pattern": "prepare with", "examples": [
        { "en": "She prepared with the latest sales data.", "ja": "彼女は最新の売上データを使って準備しました。", "focus": "prepared with", "object": "the latest sales data" },
        { "en": "We prepared with a checklist to avoid mistakes.", "ja": "私たちはミスを避けるためにチェックリストを使って準備しました。", "focus": "prepared with", "object": "a checklist" }
      ], "dailyExamples": [] },
      { "phrase": "prepare by", "ja": "〜することで準備する", "image": "準備のために行う具体的な行動を示す。", "pattern": "prepare by", "examples": [
        { "en": "We prepared by checking the stock list.", "ja": "私たちは在庫表を確認して準備しました。", "focus": "prepared by", "object": "checking the stock list" },
        { "en": "He prepared by reviewing the proposal.", "ja": "彼は提案書を見直して準備しました。", "focus": "prepared by", "object": "reviewing the proposal" }
      ], "dailyExamples": [] },
      { "phrase": "prepare against", "ja": "〜に備える", "image": "リスクや悪い状況に備える。少し硬い表現。", "pattern": "prepare against", "examples": [
        { "en": "We prepared against possible delivery delays.", "ja": "納品遅延の可能性に備えました。", "focus": "prepared against", "object": "possible delivery delays" },
        { "en": "The company prepared against supply shortages.", "ja": "会社は供給不足に備えました。", "focus": "prepared against", "object": "supply shortages" }
      ], "dailyExamples": [] }
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
    "core": "先の行動を事前に組み立てる",
    "coreDetail": "PLANは、目的・期限・人員・予算などを先に整理し、実行できる流れにする動詞です。仕事では、会議・訪問・生産・納品・次の対応を考える時によく使います。",
    "coreVisual": {
      "from": [
        "目的",
        "期限",
        "人員",
        "予算"
      ],
      "to": "実行できる計画",
      "label": "条件を整理 → 行動計画"
    },
    "meanings": [
      {
        "id": "plan-schedule",
        "title": "① 予定・日程を計画する",
        "pattern": "plan + schedule / meeting / visit",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "日時や順番を先に組み立てる。",
        "point": "schedule, meeting, visit など予定に関する名詞とよく使います。",
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
            "en": "She planned a visit to the customer next month.",
            "ja": "彼女は来月の顧客訪問を予定しました。",
            "focus": "planned",
            "object": "a visit"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "plan-next-step",
        "title": "② 次の対応を計画する",
        "pattern": "plan + next step / action",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "次に何をするかを決めて流れを作る。",
        "point": "次の営業対応・社内対応を決める時に使いやすい形です。",
        "examples": [
          {
            "en": "We need to plan the next step after the meeting.",
            "ja": "私たちは会議後の次の対応を計画する必要があります。",
            "focus": "plan",
            "object": "the next step"
          },
          {
            "en": "The team planned a clear action for the delay.",
            "ja": "チームは遅延に対する明確な対応を計画しました。",
            "focus": "planned",
            "object": "a clear action"
          },
          {
            "en": "Please plan the follow-up before you call the client.",
            "ja": "顧客に電話する前にフォロー対応を計画してください。",
            "focus": "plan",
            "object": "the follow-up"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "plan-production",
        "title": "③ 生産・作業を計画する",
        "pattern": "plan + production / work",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "作業量や納期に合わせて流れを整える。",
        "point": "製造・現場・納品の段取りで使いやすい表現です。",
        "examples": [
          {
            "en": "We planned production based on the latest order forecast.",
            "ja": "私たちは最新の受注予測をもとに生産を計画しました。",
            "focus": "planned",
            "object": "production"
          },
          {
            "en": "Please plan the installation work carefully.",
            "ja": "設置作業を慎重に計画してください。",
            "focus": "plan",
            "object": "the installation work"
          },
          {
            "en": "They planned the delivery route to save time.",
            "ja": "彼らは時間を節約するために配送ルートを計画しました。",
            "focus": "planned",
            "object": "the delivery route"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "plan-to-do",
        "title": "④ 〜する予定である",
        "pattern": "plan to do",
        "transitivity": "自動詞的表現",
        "structure": "基本",
        "image": "これからする行動を予定として持つ。",
        "point": "訪問・送付・確認など、今後の予定を伝える時に便利です。",
        "examples": [
          {
            "en": "We plan to send the quote tomorrow.",
            "ja": "私たちは明日見積を送る予定です。",
            "focus": "plan",
            "object": "to send the quote"
          },
          {
            "en": "I plan to visit the client next week.",
            "ja": "私は来週顧客を訪問する予定です。",
            "focus": "plan",
            "object": "to visit the client"
          },
          {
            "en": "They plan to review the design before approval.",
            "ja": "彼らは承認前にデザインを確認する予定です。",
            "focus": "plan",
            "object": "to review the design"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "plan-carefully",
        "title": "⑤ 慎重に計画する",
        "pattern": "plan carefully / properly",
        "transitivity": "自動詞",
        "structure": "基本",
        "image": "ミスや遅れを防ぐために丁寧に段取りする。",
        "point": "carefully, properly, early などと一緒に使うと自然です。",
        "examples": [
          {
            "en": "We should plan carefully before ordering the materials.",
            "ja": "材料を発注する前に慎重に計画するべきです。",
            "focus": "plan",
            "object": "carefully"
          },
          {
            "en": "Please plan properly so we can avoid extra costs.",
            "ja": "追加費用を避けられるように、きちんと計画してください。",
            "focus": "plan",
            "object": "properly"
          },
          {
            "en": "Good teams plan early and avoid last-minute problems.",
            "ja": "良いチームは早めに計画し、直前の問題を避けます。",
            "focus": "plan",
            "object": "early"
          }
        ],
        "dailyExamples": []
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "plan for",
        "ja": "〜に備えて計画する",
        "image": "イベント・リスク・将来の状況に向けて準備する。",
        "pattern": "plan for",
        "examples": [
          {
            "en": "We need to plan for possible delivery delays.",
            "ja": "私たちは納品遅延の可能性に備えて計画する必要があります。",
            "focus": "plan for",
            "object": "possible delivery delays"
          },
          {
            "en": "The team planned for the product launch.",
            "ja": "チームは製品リリースに向けて計画しました。",
            "focus": "planned for",
            "object": "the product launch"
          }
        ],
        "dailyExamples": []
      },
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
        "pattern": "plan out",
        "examples": [
          {
            "en": "We planned out the installation steps.",
            "ja": "私たちは設置手順を細かく計画しました。",
            "focus": "planned out",
            "object": "the installation steps"
          },
          {
            "en": "Please plan out the schedule before the kickoff meeting.",
            "ja": "キックオフ会議の前にスケジュールを細かく計画してください。",
            "focus": "plan out",
            "object": "the schedule"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "plan around",
        "ja": "〜に合わせて計画する",
        "image": "制約や相手の予定を中心にして計画する。",
        "pattern": "plan around",
        "examples": [
          {
            "en": "We planned around the client's available dates.",
            "ja": "私たちは顧客の都合が良い日に合わせて計画しました。",
            "focus": "planned around",
            "object": "the client's available dates"
          },
          {
            "en": "Please plan around the delivery schedule.",
            "ja": "納品スケジュールに合わせて計画してください。",
            "focus": "plan around",
            "object": "the delivery schedule"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "plan on",
        "ja": "〜する予定である",
        "image": "予定として頭の中に置く。",
        "pattern": "plan on",
        "examples": [
          {
            "en": "We plan on visiting the site next Tuesday.",
            "ja": "私たちは来週火曜日に現場を訪問する予定です。",
            "focus": "plan on",
            "object": "visiting the site"
          },
          {
            "en": "Are you planning on joining the meeting?",
            "ja": "あなたはその会議に参加する予定ですか？",
            "focus": "planning on",
            "object": "joining the meeting"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "plan with",
        "ja": "〜と一緒に計画する",
        "image": "相手と一緒に流れを組み立てる。",
        "pattern": "plan with",
        "examples": [
          {
            "en": "We planned with the production team before confirming the date.",
            "ja": "私たちは日程を確定する前に製造チームと一緒に計画しました。",
            "focus": "planned with",
            "object": "the production team"
          },
          {
            "en": "Please plan with the client before changing the layout.",
            "ja": "レイアウトを変更する前に顧客と一緒に計画してください。",
            "focus": "plan with",
            "object": "the client"
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
    "transitivity": "他動詞・自動詞",
    "importance": "★★★★☆ 重要",
    "core": "相手に選べる形で差し出す",
    "coreDetail": "OFFERは、物・条件・助け・案などを相手が受け取れるように差し出す動詞です。仕事では、割引・サンプル・サポート・解決策・選択肢を提示する時によく使います。",
    "coreVisual": {
      "from": [
        "自分・会社"
      ],
      "to": "相手",
      "label": "差し出す・提示する"
    },
    "meanings": [
      {
        "id": "offer-discount",
        "title": "① 割引・条件を提示する",
        "pattern": "offer + discount / terms",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "相手に受け取れる条件を提示する。",
        "point": "discount, terms, price などと使うと営業で自然です。",
        "examples": [
          {
            "en": "We offered a discount for the bulk order.",
            "ja": "私たちは大量注文に対して割引を提示しました。",
            "focus": "offered",
            "object": "a discount"
          },
          {
            "en": "Can we offer better payment terms?",
            "ja": "私たちはより良い支払い条件を提示できますか？",
            "focus": "offer",
            "object": "better payment terms"
          },
          {
            "en": "The supplier offered a lower price this time.",
            "ja": "仕入先は今回、より低い価格を提示しました。",
            "focus": "offered",
            "object": "a lower price"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "offer-support",
        "title": "② サポート・助言を提供する",
        "pattern": "offer + support / advice",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "相手が困っている時に助けを差し出す。",
        "point": "support, help, advice などと使うと自然です。",
        "examples": [
          {
            "en": "We offered support during the installation.",
            "ja": "私たちは設置中にサポートを提供しました。",
            "focus": "offered",
            "object": "support"
          },
          {
            "en": "She offered advice on the proposal.",
            "ja": "彼女は提案書について助言しました。",
            "focus": "offered",
            "object": "advice"
          },
          {
            "en": "The manager offered help when the issue came up.",
            "ja": "問題が出た時、マネージャーは助けを申し出ました。",
            "focus": "offered",
            "object": "help"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "offer-solution",
        "title": "③ 解決策・選択肢を提案する",
        "pattern": "offer + solution / option",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "相手が選べる案を出す。",
        "point": "solution, option, alternative は提案でよく使います。",
        "examples": [
          {
            "en": "We offered a solution for the delivery issue.",
            "ja": "私たちは納品問題に対する解決策を提案しました。",
            "focus": "offered",
            "object": "a solution"
          },
          {
            "en": "Please offer the client two options.",
            "ja": "顧客に2つの選択肢を提示してください。",
            "focus": "offer",
            "object": "two options"
          },
          {
            "en": "The team offered an alternative plan.",
            "ja": "チームは代替案を提示しました。",
            "focus": "offered",
            "object": "an alternative plan"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "offer-sample",
        "title": "④ サンプル・資料を提供する",
        "pattern": "offer + sample / information",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "確認用の物や情報を相手に渡せる形にする。",
        "point": "sample, document, information などと使えます。",
        "examples": [
          {
            "en": "We offered a sample before the final order.",
            "ja": "私たちは正式発注前にサンプルを提供しました。",
            "focus": "offered",
            "object": "a sample"
          },
          {
            "en": "Can you offer more information about the product?",
            "ja": "その製品について、もう少し情報を提供できますか？",
            "focus": "offer",
            "object": "more information"
          },
          {
            "en": "The company offered a trial version to new users.",
            "ja": "会社は新規ユーザーに試用版を提供しました。",
            "focus": "offered",
            "object": "a trial version"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "offer-to-help",
        "title": "⑤ 〜すると申し出る",
        "pattern": "offer to do",
        "transitivity": "自動詞的表現",
        "structure": "基本",
        "image": "自分から行動を差し出す。",
        "point": "offer to help, offer to send など、行動の申し出に使います。",
        "examples": [
          {
            "en": "He offered to help with the quotation.",
            "ja": "彼は見積作成を手伝うと申し出ました。",
            "focus": "offered",
            "object": "to help with the quotation"
          },
          {
            "en": "We offered to send the sample again.",
            "ja": "私たちはサンプルを再送すると申し出ました。",
            "focus": "offered",
            "object": "to send the sample again"
          },
          {
            "en": "She offered to explain the details to the client.",
            "ja": "彼女は顧客に詳細を説明すると申し出ました。",
            "focus": "offered",
            "object": "to explain the details"
          }
        ],
        "dailyExamples": []
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "offer to",
        "ja": "〜すると申し出る",
        "image": "自分から行動を相手に差し出す。",
        "pattern": "offer to",
        "examples": [
          {
            "en": "She offered to call the client for us.",
            "ja": "彼女は私たちの代わりに顧客へ電話すると申し出ました。",
            "focus": "offered to",
            "object": "call the client"
          },
          {
            "en": "We offered to replace the sample.",
            "ja": "私たちはサンプルを交換すると申し出ました。",
            "focus": "offered to",
            "object": "replace the sample"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "offer up",
        "ja": "差し出す・提供する",
        "image": "案や物を相手の前に出す。",
        "pattern": "offer up",
        "examples": [
          {
            "en": "The team offered up a new idea during the meeting.",
            "ja": "チームは会議中に新しい案を出しました。",
            "focus": "offered up",
            "object": "a new idea"
          },
          {
            "en": "He offered up his time to support the project.",
            "ja": "彼は案件を支援するために自分の時間を差し出しました。",
            "focus": "offered up",
            "object": "his time"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "offer for",
        "ja": "〜向けに提供する",
        "image": "特定の目的や相手に向けて差し出す。",
        "pattern": "offer for",
        "examples": [
          {
            "en": "The supplier offered samples for testing.",
            "ja": "仕入先は試験用にサンプルを提供しました。",
            "focus": "offered for",
            "object": "testing"
          },
          {
            "en": "We offered a special plan for new customers.",
            "ja": "私たちは新規顧客向けに特別プランを提供しました。",
            "focus": "offered for",
            "object": "new customers"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "offer with",
        "ja": "〜付きで提供する",
        "image": "別の条件やサービスを添えて提供する。",
        "pattern": "offer with",
        "examples": [
          {
            "en": "We offered the product with installation support.",
            "ja": "私たちは設置サポート付きでその製品を提供しました。",
            "focus": "offered with",
            "object": "installation support"
          },
          {
            "en": "The plan is offered with a one-year warranty.",
            "ja": "そのプランは1年保証付きで提供されています。",
            "focus": "offered with",
            "object": "a one-year warranty"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "offer as",
        "ja": "〜として提供する",
        "image": "役割や位置づけを付けて差し出す。",
        "pattern": "offer as",
        "examples": [
          {
            "en": "We offered the unit as a temporary replacement.",
            "ja": "私たちはその機器を一時的な代替品として提供しました。",
            "focus": "offered as",
            "object": "a temporary replacement"
          },
          {
            "en": "The service was offered as part of the package.",
            "ja": "そのサービスはパッケージの一部として提供されました。",
            "focus": "offered as",
            "object": "part of the package"
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
    "core": "下から支えて相手や物事を動きやすくする",
    "coreDetail": "SUPPORTは、人・案件・主張・システムなどを支える動詞です。仕事では、顧客対応、チーム支援、システム対応、提案の裏付けでよく使います。",
    "coreVisual": {
      "from": [
        "支援・根拠・体制"
      ],
      "to": "相手・案件を支える",
      "label": "下から支える"
    },
    "meanings": [
      {
        "id": "support-client",
        "title": "① 顧客・人を支援する",
        "pattern": "support + client / person",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "相手が困らないように支える。",
        "point": "client, customer, team, staff など人に使えます。",
        "examples": [
          {
            "en": "We support the client after installation.",
            "ja": "私たちは設置後に顧客をサポートします。",
            "focus": "support",
            "object": "the client"
          },
          {
            "en": "Please support the new staff during the first week.",
            "ja": "最初の1週間は新しいスタッフを支援してください。",
            "focus": "support",
            "object": "the new staff"
          },
          {
            "en": "She supported the customer until the issue was solved.",
            "ja": "彼女は問題が解決するまで顧客を支援しました。",
            "focus": "supported",
            "object": "the customer"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "support-project",
        "title": "② 案件・活動を支援する",
        "pattern": "support + project / activity",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "物事が進むように支える。",
        "point": "project, sales activities, operation など仕事の活動に使います。",
        "examples": [
          {
            "en": "Our team supported the project from the planning stage.",
            "ja": "私たちのチームは計画段階からその案件を支援しました。",
            "focus": "supported",
            "object": "the project"
          },
          {
            "en": "This tool supports daily sales activities.",
            "ja": "このツールは日々の営業活動を支援します。",
            "focus": "supports",
            "object": "daily sales activities"
          },
          {
            "en": "The new process supports faster delivery.",
            "ja": "新しい手順はより速い納品を支えます。",
            "focus": "supports",
            "object": "faster delivery"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "support-system",
        "title": "③ システム・製品をサポートする",
        "pattern": "support + system / product",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "製品や機能が使える状態を支える。",
        "point": "ITや製品仕様では、対応している・サポートしている意味にもなります。",
        "examples": [
          {
            "en": "This controller supports multiple lighting patterns.",
            "ja": "このコントローラーは複数の照明パターンに対応しています。",
            "focus": "supports",
            "object": "multiple lighting patterns"
          },
          {
            "en": "The system supports data export.",
            "ja": "そのシステムはデータ出力に対応しています。",
            "focus": "supports",
            "object": "data export"
          },
          {
            "en": "Does this model support DALI control?",
            "ja": "このモデルはDALI制御に対応していますか？",
            "focus": "support",
            "object": "DALI control"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "support-claim",
        "title": "④ 主張・提案を裏付ける",
        "pattern": "support + claim / proposal",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "意見や提案を根拠で支える。",
        "point": "claim, proposal, idea, decision などに使えます。",
        "examples": [
          {
            "en": "The data supports our proposal.",
            "ja": "そのデータは私たちの提案を裏付けています。",
            "focus": "supports",
            "object": "our proposal"
          },
          {
            "en": "Customer feedback supported the decision.",
            "ja": "顧客の意見がその判断を裏付けました。",
            "focus": "supported",
            "object": "the decision"
          },
          {
            "en": "Please add evidence to support your explanation.",
            "ja": "説明を裏付けるために根拠を追加してください。",
            "focus": "support",
            "object": "your explanation"
          }
        ],
        "dailyExamples": []
      },
      {
        "id": "support-each-other",
        "title": "⑤ お互いに支え合う",
        "pattern": "support each other",
        "transitivity": "他動詞",
        "structure": "基本",
        "image": "チーム内で助け合う。",
        "point": "each other と使うと相互支援を表せます。",
        "examples": [
          {
            "en": "We support each other during busy periods.",
            "ja": "私たちは忙しい時期にお互いを支え合います。",
            "focus": "support",
            "object": "each other"
          },
          {
            "en": "The sales and production teams supported each other.",
            "ja": "営業チームと製造チームはお互いに支え合いました。",
            "focus": "supported",
            "object": "each other"
          },
          {
            "en": "Good teams support each other when problems happen.",
            "ja": "良いチームは問題が起きた時にお互いを支えます。",
            "focus": "support",
            "object": "each other"
          }
        ],
        "dailyExamples": []
      }
    ],
    "collocations": [],
    "phrasalVerbs": [
      {
        "phrase": "support with",
        "ja": "〜で支援する",
        "image": "道具・情報・作業などを使って支える。",
        "pattern": "support with",
        "examples": [
          {
            "en": "We supported the client with technical documents.",
            "ja": "私たちは技術資料で顧客を支援しました。",
            "focus": "supported with",
            "object": "technical documents"
          },
          {
            "en": "Can you support the team with the report?",
            "ja": "あなたは報告書の件でチームを支援できますか？",
            "focus": "support with",
            "object": "the report"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "support through",
        "ja": "〜を通して支援する",
        "image": "期間や工程を通して支える。",
        "pattern": "support through",
        "examples": [
          {
            "en": "We supported the customer through the installation.",
            "ja": "私たちは設置作業を通して顧客を支援しました。",
            "focus": "supported through",
            "object": "the installation"
          },
          {
            "en": "The manager supported us through the difficult project.",
            "ja": "マネージャーは難しい案件を通して私たちを支援しました。",
            "focus": "supported through",
            "object": "the difficult project"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "support in",
        "ja": "〜において支援する",
        "image": "分野・場面・作業で支える。",
        "pattern": "support in",
        "examples": [
          {
            "en": "She supported us in preparing the quotation.",
            "ja": "彼女は見積書の準備で私たちを支援しました。",
            "focus": "supported in",
            "object": "preparing the quotation"
          },
          {
            "en": "We support customers in choosing the right product.",
            "ja": "私たちは適切な製品選定で顧客を支援します。",
            "focus": "support in",
            "object": "choosing the right product"
          }
        ],
        "dailyExamples": []
      },
      {
        "phrase": "support by",
        "ja": "〜によって支援する",
        "image": "具体的な方法を使って支える。",
        "pattern": "support by",
        "examples": [
          {
            "en": "We supported the proposal by adding clear data.",
            "ja": "私たちは明確なデータを加えて提案を裏付けました。",
            "focus": "supported by",
            "object": "adding clear data"
          },
          {
            "en": "The system supports users by reducing manual work.",
            "ja": "そのシステムは手作業を減らしてユーザーを支援します。",
            "focus": "supports by",
            "object": "reducing manual work"
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
      "coreDetail": "DISCUSSは、予定・条件・課題・提案などを、結論や理解に近づけるために話し合う動詞です。基本は discuss the issue のように目的語を直接置きます。discuss about は通常避けます。",
      "coreVisual": { "from": ["議題", "意見", "条件", "問題"], "to": "理解・合意・次の行動", "label": "テーマを中心に意見を交わす" },
      "meanings": [
          { "id": "discuss-topic", "title": "① 議題・問題について話し合う", "pattern": "discuss + 議題 / 問題", "transitivity": "他動詞", "structure": "S + discuss + O", "image": "議題をテーブルに置き、関係者で話し合う。", "point": "discuss about ではなく discuss the issue が自然です。", "examples": [
              { "en": "We discussed the delivery issue with the client.", "ja": "私たちは顧客と納品の問題について話し合いました。", "focus": "discussed", "object": "the delivery issue" },
              { "en": "Let's discuss the quotation before we send it.", "ja": "見積を送る前に、その内容について話し合いましょう。", "focus": "discuss", "object": "the quotation" },
              { "en": "The team discussed the problem during the morning meeting.", "ja": "チームは朝の会議でその問題について話し合いました。", "focus": "discussed", "object": "the problem" }
          ], "dailyExamples": [] },
          { "id": "discuss-details", "title": "② 詳細・条件を詰める", "pattern": "discuss + details / terms / conditions", "transitivity": "他動詞", "structure": "S + discuss + O", "image": "未確定の細部を話し合って整理する。", "point": "details, terms, conditions は仕事でよく使う組み合わせです。", "examples": [
              { "en": "We discussed the details of the new order.", "ja": "私たちは新しい注文の詳細について話し合いました。", "focus": "discussed", "object": "the details" },
              { "en": "Let's discuss the terms before signing the agreement.", "ja": "契約書に署名する前に条件について話し合いましょう。", "focus": "discuss", "object": "the terms" },
              { "en": "They discussed the conditions for the next shipment.", "ja": "彼らは次回出荷の条件について話し合いました。", "focus": "discussed", "object": "the conditions" }
          ], "dailyExamples": [] },
          { "id": "discuss-plan", "title": "③ 計画・予定を話し合う", "pattern": "discuss + plan / schedule / timeline", "transitivity": "他動詞", "structure": "S + discuss + O", "image": "予定や段取りを確認しながら進め方を話す。", "point": "計画やスケジュール調整で使いやすい形です。", "examples": [
              { "en": "We discussed the project plan with the manager.", "ja": "私たちは上司とプロジェクト計画について話し合いました。", "focus": "discussed", "object": "the project plan" },
              { "en": "Let's discuss the timeline for installation.", "ja": "設置のスケジュールについて話し合いましょう。", "focus": "discuss", "object": "the timeline" },
              { "en": "The sales team discussed next month's visit schedule.", "ja": "営業チームは来月の訪問スケジュールについて話し合いました。", "focus": "discussed", "object": "next month's visit schedule" }
          ], "dailyExamples": [] },
          { "id": "discuss-options", "title": "④ 選択肢・対応方法を話し合う", "pattern": "discuss whether / how / what + 文", "transitivity": "他動詞", "structure": "S + discuss + whether/how/what ...", "image": "複数の選択肢を比べながら判断に近づく。", "point": "何をどうするか未定の時に便利です。", "examples": [
              { "en": "We discussed whether we should change the supplier.", "ja": "私たちは仕入先を変更すべきか話し合いました。", "focus": "discussed", "object": "whether we should change the supplier" },
              { "en": "Let's discuss how we can reduce the cost.", "ja": "どのようにコストを削減できるか話し合いましょう。", "focus": "discuss", "object": "how we can reduce the cost" },
              { "en": "They discussed what information to include in the report.", "ja": "彼らは報告書にどの情報を入れるか話し合いました。", "focus": "discussed", "object": "what information to include" }
          ], "dailyExamples": [] },
          { "id": "discuss-internally", "title": "⑤ 社内で協議する", "pattern": "discuss internally", "transitivity": "他動詞", "structure": "S + discuss + O + internally", "image": "顧客へ返答する前に社内で意見をそろえる。", "point": "internally を付けると『社内で』という営業現場で使いやすい表現になります。", "examples": [
              { "en": "We need to discuss the request internally first.", "ja": "私たちはまず社内でその依頼について協議する必要があります。", "focus": "discuss", "object": "the request" },
              { "en": "I will discuss the price change internally and get back to you.", "ja": "価格変更について社内で確認し、改めてご連絡します。", "focus": "discuss", "object": "the price change" },
              { "en": "They discussed the proposal internally before the presentation.", "ja": "彼らはプレゼン前に社内で提案について話し合いました。", "focus": "discussed", "object": "the proposal" }
          ], "dailyExamples": [] }
      ],
      "collocations": [],
      "phrasalVerbs": [
          { "phrase": "discuss with", "ja": "〜と話し合う", "image": "相手と同じ議題を見ながら意見を交わす。", "pattern": "discuss + 内容 + with + 相手", "examples": [
              { "en": "I discussed the order with the customer.", "ja": "私は顧客と注文について話し合いました。", "focus": "discuss with" },
              { "en": "Please discuss the delivery plan with the warehouse team.", "ja": "倉庫チームと納品計画について話し合ってください。", "focus": "discuss with" },
              { "en": "We discussed the request with our manager.", "ja": "私たちは上司とその依頼について話し合いました。", "focus": "discuss with" }
          ], "dailyExamples": [] },
          { "phrase": "discuss among", "ja": "〜の間で話し合う", "image": "複数人・部署の間で共有して話し合う。", "pattern": "discuss among + 人・部署", "examples": [
              { "en": "The issue was discussed among the sales members.", "ja": "その問題は営業メンバーの間で話し合われました。", "focus": "discuss among" },
              { "en": "Please discuss the policy among the project leaders.", "ja": "プロジェクトリーダーの間でその方針を話し合ってください。", "focus": "discuss among" },
              { "en": "The price change was discussed among the managers.", "ja": "価格変更は管理者の間で話し合われました。", "focus": "discuss among" }
          ], "dailyExamples": [] },
          { "phrase": "discuss between", "ja": "〜の間で話し合う", "image": "二者または複数の間で議題を共有する。", "pattern": "discuss between + parties", "examples": [
              { "en": "The delivery issue was discussed between both companies.", "ja": "納品の問題は両社間で話し合われました。", "focus": "discuss between" },
              { "en": "The terms were discussed between the buyer and the supplier.", "ja": "条件は買い手と仕入先の間で話し合われました。", "focus": "discuss between" },
              { "en": "The schedule was discussed between the sales and production teams.", "ja": "スケジュールは営業チームと製造チームの間で話し合われました。", "focus": "discuss between" }
          ], "dailyExamples": [] },
          { "phrase": "discuss over", "ja": "〜を通じて・〜しながら話し合う", "image": "メール・電話・会食などの場を使って話し合う。", "pattern": "discuss over + medium / meal", "examples": [
              { "en": "We discussed the changes over email.", "ja": "私たちは変更点についてメールで話し合いました。", "focus": "discuss over" },
              { "en": "Can we discuss the details over a quick call?", "ja": "短い電話で詳細について話し合えますか？", "focus": "discuss over" },
              { "en": "They discussed the quotation over lunch.", "ja": "彼らは昼食中に見積について話し合いました。", "focus": "discuss over" }
          ], "dailyExamples": [] }
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
      "coreDetail": "CONFIRMは、日程・数量・条件・承認などを確認し、安心して進められる状態に固める動詞です。checkより少し正式で、仕事メールでもよく使います。",
      "coreVisual": { "from": ["未確認", "仮予定", "不明点", "承認待ち"], "to": "確定・共有できる状態", "label": "不確か → 確かな状態" },
      "meanings": [
          { "id": "confirm-details", "title": "① 情報・詳細を確認する", "pattern": "confirm + details / information", "transitivity": "他動詞", "structure": "S + confirm + O", "image": "曖昧な情報を確かな情報にする。", "point": "confirm the details は仕事で非常によく使います。", "examples": [
              { "en": "Please confirm the details before we place the order.", "ja": "私たちが発注する前に詳細を確認してください。", "focus": "confirm", "object": "the details" },
              { "en": "We confirmed the product information with the supplier.", "ja": "私たちは仕入先と製品情報を確認しました。", "focus": "confirmed", "object": "the product information" },
              { "en": "Can you confirm the installation requirements?", "ja": "設置条件を確認できますか？", "focus": "confirm", "object": "the installation requirements" }
          ], "dailyExamples": [] },
          { "id": "confirm-schedule", "title": "② 日程・予定を確認する", "pattern": "confirm + date / time / schedule", "transitivity": "他動詞", "structure": "S + confirm + O", "image": "予定を確定し、関係者の認識を合わせる。", "point": "会議・納期・訪問予定でよく使います。", "examples": [
              { "en": "Please confirm the meeting time by this afternoon.", "ja": "本日午後までに会議時間を確認してください。", "focus": "confirm", "object": "the meeting time" },
              { "en": "We confirmed the delivery date with the customer.", "ja": "私たちは顧客と納期を確認しました。", "focus": "confirmed", "object": "the delivery date" },
              { "en": "I will confirm the visit schedule and reply today.", "ja": "訪問予定を確認して、本日返信します。", "focus": "confirm", "object": "the visit schedule" }
          ], "dailyExamples": [] },
          { "id": "confirm-order", "title": "③ 注文・数量・価格を確認する", "pattern": "confirm + order / quantity / price", "transitivity": "他動詞", "structure": "S + confirm + O", "image": "取引に必要な条件を確かなものにする。", "point": "営業・購買・出荷のやり取りで便利です。", "examples": [
              { "en": "We confirmed the order quantity this morning.", "ja": "私たちは今朝、注文数量を確認しました。", "focus": "confirmed", "object": "the order quantity" },
              { "en": "Can you confirm the latest price?", "ja": "最新価格を確認できますか？", "focus": "confirm", "object": "the latest price" },
              { "en": "The client confirmed the order by email.", "ja": "顧客はメールで注文を確定しました。", "focus": "confirmed", "object": "the order" }
          ], "dailyExamples": [] },
          { "id": "confirm-approval", "title": "④ 承認・決定を確認する", "pattern": "confirm + approval / decision", "transitivity": "他動詞", "structure": "S + confirm + O", "image": "進めてよいかを確かな状態にする。", "point": "approval, decision, status と相性が良いです。", "examples": [
              { "en": "Please confirm approval before we start production.", "ja": "生産を始める前に承認を確認してください。", "focus": "confirm", "object": "approval" },
              { "en": "I confirmed the decision with my manager.", "ja": "私は上司とその決定を確認しました。", "focus": "confirmed", "object": "the decision" },
              { "en": "We need to confirm the project status by Friday.", "ja": "私たちは金曜日までに案件状況を確認する必要があります。", "focus": "confirm", "object": "the project status" }
          ], "dailyExamples": [] },
          { "id": "confirm-whether", "title": "⑤ 〜かどうかを確認する", "pattern": "confirm whether / if + 文", "transitivity": "他動詞", "structure": "S + confirm + whether/if ...", "image": "不明な点を yes/no で確かめる。", "point": "在庫・納期・対応可否の確認に便利です。", "examples": [
              { "en": "Please confirm whether the item is available.", "ja": "その商品が入手可能か確認してください。", "focus": "confirm", "object": "whether the item is available" },
              { "en": "I will confirm if we can ship it today.", "ja": "本日出荷できるか確認します。", "focus": "confirm", "object": "if we can ship it today" },
              { "en": "Can you confirm whether the client approved the sample?", "ja": "顧客がサンプルを承認したか確認できますか？", "focus": "confirm", "object": "whether the client approved the sample" }
          ], "dailyExamples": [] }
      ],
      "collocations": [],
      "phrasalVerbs": [
          { "phrase": "confirm with", "ja": "〜に確認する", "image": "相手に照会して情報を確かな状態にする。", "pattern": "confirm with + 人・部署", "examples": [
              { "en": "I will confirm with the warehouse team.", "ja": "倉庫チームに確認します。", "focus": "confirm with" },
              { "en": "Please confirm the delivery date with the customer.", "ja": "顧客に納期を確認してください。", "focus": "confirm with" },
              { "en": "We confirmed the price with our manager.", "ja": "私たちは上司に価格を確認しました。", "focus": "confirmed with" }
          ], "dailyExamples": [] },
          { "phrase": "confirm by", "ja": "〜で確認する", "image": "メール・電話などの手段で確認する。", "pattern": "confirm by + method", "examples": [
              { "en": "Please confirm by email after the meeting.", "ja": "会議後にメールで確認してください。", "focus": "confirm by" },
              { "en": "The order was confirmed by phone.", "ja": "注文は電話で確認されました。", "focus": "confirmed by" },
              { "en": "We confirmed the address by checking the invoice.", "ja": "私たちは請求書を確認して住所を確かめました。", "focus": "confirmed by" }
          ], "dailyExamples": [] },
          { "phrase": "confirm through", "ja": "〜を通して確認する", "image": "システムや担当者などの経路を通して確認する。", "pattern": "confirm through + channel", "examples": [
              { "en": "We confirmed the payment through the system.", "ja": "私たちはシステムを通して支払いを確認しました。", "focus": "confirmed through" },
              { "en": "Please confirm the status through the portal.", "ja": "ポータルを通して状況を確認してください。", "focus": "confirm through" },
              { "en": "I confirmed the request through the sales team.", "ja": "私は営業チームを通してその依頼を確認しました。", "focus": "confirmed through" }
          ], "dailyExamples": [] },
          { "phrase": "confirm against", "ja": "〜と照合して確認する", "image": "基準や資料と比べて正しいか確認する。", "pattern": "confirm against + record / list", "examples": [
              { "en": "Please confirm the quantity against the order sheet.", "ja": "注文書と照合して数量を確認してください。", "focus": "confirm against" },
              { "en": "We confirmed the model number against the drawing.", "ja": "私たちは図面と照合して型番を確認しました。", "focus": "confirmed against" },
              { "en": "I will confirm the price against the latest list.", "ja": "最新リストと照合して価格を確認します。", "focus": "confirm against" }
          ], "dailyExamples": [] },
          { "phrase": "confirm as", "ja": "〜として確定する", "image": "状態や役割を確定させる。", "pattern": "confirm as + status / role", "examples": [
              { "en": "The date was confirmed as final.", "ja": "その日程は最終確定となりました。", "focus": "confirmed as" },
              { "en": "We confirmed the order as urgent.", "ja": "私たちはその注文を緊急扱いとして確定しました。", "focus": "confirmed as" },
              { "en": "The sample was confirmed as approved.", "ja": "そのサンプルは承認済みとして確定されました。", "focus": "confirmed as" }
          ], "dailyExamples": [] }
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
      "importance": "★★★★☆ 重要",
      "core": "外から来たものを受け取る",
      "coreDetail": "RECEIVEは、メール・注文・支払い・承認・サンプルなど、外部や相手から来たものを受け取る動詞です。仕事では『受領する』『受信する』『承認を得る』のように訳します。",
      "coreVisual": { "from": ["顧客", "仕入先", "システム", "外部"], "to": "自分・自社・担当者", "label": "外から入ってくるものを受け取る" },
      "meanings": [
          { "id": "receive-item", "title": "① 物・書類を受け取る", "pattern": "receive + item / document", "transitivity": "他動詞", "structure": "S + receive + O", "image": "相手から送られてきた物や資料を受け取る。", "point": "getより少し正式で、仕事メールにも合います。", "examples": [
              { "en": "We received the sample this morning.", "ja": "私たちは今朝サンプルを受け取りました。", "focus": "received", "object": "the sample" },
              { "en": "Please let me know when you receive the documents.", "ja": "書類を受け取ったら教えてください。", "focus": "receive", "object": "the documents" },
              { "en": "The warehouse received the new stock yesterday.", "ja": "倉庫は昨日、新しい在庫を受け取りました。", "focus": "received", "object": "the new stock" }
          ], "dailyExamples": [] },
          { "id": "receive-email", "title": "② メール・連絡を受信する", "pattern": "receive + email / message / request", "transitivity": "他動詞", "structure": "S + receive + O", "image": "相手から情報や依頼が届く。", "point": "receive an email はビジネスでよく使う表現です。", "examples": [
              { "en": "I received your email about the quotation.", "ja": "見積についてのメールを受け取りました。", "focus": "received", "object": "your email" },
              { "en": "We received a request from the client yesterday.", "ja": "私たちは昨日、顧客から依頼を受けました。", "focus": "received", "object": "a request" },
              { "en": "Did you receive the message from the supplier?", "ja": "仕入先からのメッセージを受け取りましたか？", "focus": "receive", "object": "the message" }
          ], "dailyExamples": [] },
          { "id": "receive-order-payment", "title": "③ 注文・支払いを受ける", "pattern": "receive + order / payment", "transitivity": "他動詞", "structure": "S + receive + O", "image": "取引に必要な注文や入金が自社に入る。", "point": "receive payment は『支払いを受け取る』です。", "examples": [
              { "en": "We received the order after sending the revised quote.", "ja": "修正見積を送った後、私たちは注文を受けました。", "focus": "received", "object": "the order" },
              { "en": "The accounting team received payment today.", "ja": "経理チームは本日、支払いを受け取りました。", "focus": "received", "object": "payment" },
              { "en": "We cannot ship the items until we receive payment.", "ja": "支払いを受け取るまで、私たちは商品を出荷できません。", "focus": "receive", "object": "payment" }
          ], "dailyExamples": [] },
          { "id": "receive-feedback", "title": "④ 反応・フィードバックを受ける", "pattern": "receive + feedback / response", "transitivity": "他動詞", "structure": "S + receive + O", "image": "相手の反応や評価が自分側に届く。", "point": "feedback, response, comment と相性が良いです。", "examples": [
              { "en": "We received positive feedback from the customer.", "ja": "私たちは顧客から良いフィードバックを受けました。", "focus": "received", "object": "positive feedback" },
              { "en": "The proposal received a quick response.", "ja": "その提案にはすぐに返答がありました。", "focus": "received", "object": "a quick response" },
              { "en": "I received helpful comments from my manager.", "ja": "私は上司から役立つコメントを受けました。", "focus": "received", "object": "helpful comments" }
          ], "dailyExamples": [] },
          { "id": "receive-approval", "title": "⑤ 承認・許可を得る", "pattern": "receive + approval / permission", "transitivity": "他動詞", "structure": "S + receive + O", "image": "相手や上位者から承認が自分側へ届く。", "point": "receive approval は『承認を得る』という仕事向けの表現です。", "examples": [
              { "en": "We received approval to proceed with the order.", "ja": "私たちは注文を進める承認を得ました。", "focus": "received", "object": "approval" },
              { "en": "Please wait until we receive internal approval.", "ja": "社内承認を得るまでお待ちください。", "focus": "receive", "object": "internal approval" },
              { "en": "The project received final approval last week.", "ja": "その案件は先週、最終承認を得ました。", "focus": "received", "object": "final approval" }
          ], "dailyExamples": [] }
      ],
      "collocations": [],
      "phrasalVerbs": [
          { "phrase": "receive from", "ja": "〜から受け取る", "image": "相手や外部から自分側へ入ってくる。", "pattern": "receive + O + from + 人・会社", "examples": [
              { "en": "We received the request from the client.", "ja": "私たちは顧客から依頼を受けました。", "focus": "receive from" },
              { "en": "I received the drawings from the supplier.", "ja": "私は仕入先から図面を受け取りました。", "focus": "received from" },
              { "en": "The team received feedback from the site staff.", "ja": "チームは現場スタッフからフィードバックを受けました。", "focus": "received from" }
          ], "dailyExamples": [] },
          { "phrase": "receive into", "ja": "〜に受け入れる", "image": "外から来たものを組織・場所・状態の中に入れる。", "pattern": "receive into + place / group", "examples": [
              { "en": "The new members were received into the project team.", "ja": "新しいメンバーはプロジェクトチームに受け入れられました。", "focus": "received into" },
              { "en": "The goods were received into the warehouse system.", "ja": "商品は倉庫システムに受け入れ処理されました。", "focus": "received into" },
              { "en": "The sample was received into inventory today.", "ja": "そのサンプルは本日在庫に受け入れられました。", "focus": "received into" }
          ], "dailyExamples": [] },
          { "phrase": "receive back", "ja": "返ってきたものを受け取る", "image": "一度出たものが戻ってきて受け取る。", "pattern": "receive + O + back", "examples": [
              { "en": "We received the signed document back from the client.", "ja": "私たちは顧客から署名済み書類を返送で受け取りました。", "focus": "received back" },
              { "en": "I received the sample back after testing.", "ja": "テスト後にサンプルが戻ってきました。", "focus": "received back" },
              { "en": "The team received the repaired unit back yesterday.", "ja": "チームは昨日、修理済みユニットを受け取りました。", "focus": "received back" }
          ], "dailyExamples": [] },
          { "phrase": "receive by", "ja": "〜で受け取る", "image": "手段や期限を通して受け取る。", "pattern": "receive by + method / date", "examples": [
              { "en": "We received the confirmation by email.", "ja": "私たちはメールで確認を受け取りました。", "focus": "received by" },
              { "en": "Please make sure we receive the order by Friday.", "ja": "金曜日までに注文を受け取れるようにしてください。", "focus": "receive by" },
              { "en": "The customer received the notice by post.", "ja": "顧客は郵送で通知を受け取りました。", "focus": "received by" }
          ], "dailyExamples": [] },
          { "phrase": "receive through", "ja": "〜を通して受け取る", "image": "システムや担当者などの経路を通って届く。", "pattern": "receive through + channel", "examples": [
              { "en": "We received the inquiry through the website.", "ja": "私たちはウェブサイト経由で問い合わせを受けました。", "focus": "received through" },
              { "en": "I received the update through the sales portal.", "ja": "私は営業ポータル経由で更新情報を受け取りました。", "focus": "received through" },
              { "en": "The request was received through our distributor.", "ja": "その依頼は代理店経由で届きました。", "focus": "received through" }
          ], "dailyExamples": [] },
          { "phrase": "receive with", "ja": "〜をもって受け止める", "image": "相手の反応や態度と一緒に受け取られる。", "pattern": "receive with + reaction", "examples": [
              { "en": "The proposal was received with interest by the client.", "ja": "その提案は顧客に興味を持って受け止められました。", "focus": "received with" },
              { "en": "Our price change was received with concern.", "ja": "私たちの価格変更は懸念をもって受け止められました。", "focus": "received with" },
              { "en": "The new service was received with positive feedback.", "ja": "新サービスは好意的な反応をもって受け止められました。", "focus": "received with" }
          ], "dailyExamples": [] }
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
