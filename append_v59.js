const fs = require('fs');
const path = 'lib/data.ts';
let s = fs.readFileSync(path, 'utf8');
const newVerbs = [
  {
    id: 'report', rank: 66, word: 'REPORT', ipa: '/rɪˈpɔːrt/', kana: 'リポート', syllable: 're-port', transitivity: '他動詞・自動詞', importance: '★★★☆☆ 基本',
    core: '情報を整理して相手に伝える', coreDetail: 'REPORTは、結果・状況・問題点などを整理して報告する時に使います。仕事では上司・チーム・顧客への共有でよく使います。',
    meanings: [{ id: 'tell-status', title: '① 報告する', pattern: 'REPORT + 内容 / REPORT TO + 人', transitivity: '他動詞・自動詞', structure: 'S + report + O / S + report + to 人', image: '分かったことを整理して相手へ伝える。', point: 'report the result は結果を報告する。report to my manager は上司に報告する。', examples: [
      { en: 'I reported the issue to my manager.', ja: '私はその問題を上司に報告しました。', focus: 'reported', object: 'the issue', jaFocus: '報告しました', sentencePattern: 'S + V + O + M', grammarParts: [{label:'S',text:'I'},{label:'V',text:'reported'},{label:'O',text:'the issue'},{label:'M',text:'to my manager'}], grammarNote: 'to my manager は「誰に報告したか」を表す補足です。' },
      { en: 'We need to report the result by Friday.', ja: '私たちは金曜日までに結果を報告する必要があります。', focus: 'report', object: 'the result', jaFocus: '報告する', sentencePattern: 'S + V + O + M', grammarParts: [{label:'S',text:'We'},{label:'V',text:'report'},{label:'O',text:'the result'},{label:'M',text:'by Friday'}] },
      { en: 'She reported a delay in the schedule.', ja: '彼女はスケジュールの遅れを報告しました。', focus: 'reported', object: 'a delay in the schedule', jaFocus: '報告しました', sentencePattern: 'S + V + O', grammarParts: [{label:'S',text:'She'},{label:'V',text:'reported'},{label:'O',text:'a delay in the schedule'}] }
    ]}], collocations: [], phrasalVerbs: []
  },
  {
    id: 'update', rank: 67, word: 'UPDATE', ipa: '/ˌʌpˈdeɪt/', kana: 'アップデイト', syllable: 'up-date', transitivity: '他動詞・名詞', importance: '★★★☆☆ 基本',
    core: '新しい情報に入れ替える・最新状態にする', coreDetail: 'UPDATEは、情報・資料・システム・相手への連絡を新しくする時に使います。仕事メールでも非常によく使います。',
    meanings: [{ id: 'make-current', title: '① 更新する・最新情報を伝える', pattern: 'UPDATE + 名詞 / UPDATE + 人 + ON + 内容', transitivity: '他動詞', structure: 'S + update + O / S + update + 人 + on 内容', image: '古い情報を新しい状態にする。', point: 'update the file はファイルを更新する。update you on the status は状況をあなたに共有する。', examples: [
      { en: 'I updated the file this morning.', ja: '私は今朝そのファイルを更新しました。', focus: 'updated', object: 'the file', jaFocus: '更新しました', sentencePattern: 'S + V + O + M', grammarParts: [{label:'S',text:'I'},{label:'V',text:'updated'},{label:'O',text:'the file'},{label:'M',text:'this morning'}] },
      { en: 'We will update you on the delivery schedule.', ja: '私たちは納品スケジュールについてあなたに最新情報を共有します。', focus: 'update', object: 'you', jaFocus: '共有します', sentencePattern: 'S + V + O + M', grammarParts: [{label:'S',text:'We'},{label:'V',text:'update'},{label:'O',text:'you'},{label:'M',text:'on the delivery schedule'}], grammarNote: 'on the delivery schedule は「何について共有するか」を表します。' },
      { en: 'Can you update the customer list?', ja: 'あなたは顧客リストを更新できますか？', focus: 'update', object: 'the customer list', jaFocus: '更新できますか', sentencePattern: 'S + V + O', grammarParts: [{label:'S',text:'you'},{label:'V',text:'update'},{label:'O',text:'the customer list'}], grammarNote: 'Can は可能かどうかを聞く助動詞です。' }
    ]}], collocations: [], phrasalVerbs: []
  },
  {
    id: 'review', rank: 68, word: 'REVIEW', ipa: '/rɪˈvjuː/', kana: 'リビュー', syllable: 're-view', transitivity: '他動詞', importance: '★★★☆☆ 基本',
    core: '内容を見直して確認する', coreDetail: 'REVIEWは、資料・計画・結果・見積などを確認し、必要なら修正点を見つける時に使います。',
    meanings: [{ id: 'check-again', title: '① 見直す・確認する', pattern: 'REVIEW + 名詞', transitivity: '他動詞', structure: 'S + review + O', image: '一度作ったものをもう一度見て確認する。', point: 'check より少し丁寧で、内容をしっかり見る感じがあります。', examples: [
      { en: 'I reviewed the proposal before the meeting.', ja: '私は会議の前に提案書を見直しました。', focus: 'reviewed', object: 'the proposal', jaFocus: '見直しました', sentencePattern: 'S + V + O + M', grammarParts: [{label:'S',text:'I'},{label:'V',text:'reviewed'},{label:'O',text:'the proposal'},{label:'M',text:'before the meeting'}] },
      { en: 'We need to review the quotation again.', ja: '私たちは見積書をもう一度確認する必要があります。', focus: 'review', object: 'the quotation', jaFocus: '確認する', sentencePattern: 'S + V + O + M', grammarParts: [{label:'S',text:'We'},{label:'V',text:'review'},{label:'O',text:'the quotation'},{label:'M',text:'again'}] },
      { en: 'Please review this document by tomorrow.', ja: 'あなたは明日までにこの資料を確認してください。', focus: 'review', object: 'this document', jaFocus: '確認してください', sentencePattern: 'V + O + M', grammarParts: [{label:'V',text:'review'},{label:'O',text:'this document'},{label:'M',text:'by tomorrow'}], grammarNote: 'Please で丁寧な依頼になります。命令文なので主語 you は省略されています。' }
    ]}], collocations: [], phrasalVerbs: []
  },
  {
    id: 'compare', rank: 69, word: 'COMPARE', ipa: '/kəmˈper/', kana: 'コンペア', syllable: 'com-pare', transitivity: '他動詞', importance: '★★★☆☆ 基本',
    core: '2つ以上のものを並べて違いを見る', coreDetail: 'COMPAREは、価格・仕様・条件・結果などを比べる時に使います。営業や資料作成で使いやすい動詞です。',
    meanings: [{ id: 'look-at-differences', title: '① 比較する', pattern: 'COMPARE + A + WITH/TO + B', transitivity: '他動詞', structure: 'S + compare + O + M', image: 'AとBを並べて、違い・良さ・問題点を見る。', point: '仕事では compare prices, compare specs, compare the results などが自然です。', examples: [
      { en: 'We compared the prices with last year.', ja: '私たちは価格を昨年と比較しました。', focus: 'compared', object: 'the prices', jaFocus: '比較しました', sentencePattern: 'S + V + O + M', grammarParts: [{label:'S',text:'We'},{label:'V',text:'compared'},{label:'O',text:'the prices'},{label:'M',text:'with last year'}] },
      { en: 'I compared the two samples carefully.', ja: '私は2つのサンプルを注意深く比較しました。', focus: 'compared', object: 'the two samples', jaFocus: '比較しました', sentencePattern: 'S + V + O + M', grammarParts: [{label:'S',text:'I'},{label:'V',text:'compared'},{label:'O',text:'the two samples'},{label:'M',text:'carefully'}] },
      { en: 'Can you compare these specifications?', ja: 'あなたはこれらの仕様を比較できますか？', focus: 'compare', object: 'these specifications', jaFocus: '比較できますか', sentencePattern: 'S + V + O', grammarParts: [{label:'S',text:'you'},{label:'V',text:'compare'},{label:'O',text:'these specifications'}] }
    ]}], collocations: [], phrasalVerbs: []
  },
  {
    id: 'introduce', rank: 70, word: 'INTRODUCE', ipa: '/ˌɪntrəˈduːs/', kana: 'イントロデュース', syllable: 'in-tro-duce', transitivity: '他動詞', importance: '★★★☆☆ 基本',
    core: '人・物・考えを相手に初めて示す', coreDetail: 'INTRODUCEは、人を紹介するだけでなく、新しい商品・仕組み・考え方を導入する時にも使います。',
    meanings: [{ id: 'show-for-first-time', title: '① 紹介する・導入する', pattern: 'INTRODUCE + 名詞 / INTRODUCE + 人 + TO + 人', transitivity: '他動詞', structure: 'S + introduce + O + M', image: 'まだ知らない相手に、人・物・考えを見せる。', point: 'introduce a product は商品を紹介する。introduce A to B はAをBに紹介する。', examples: [
      { en: 'I introduced our product to the customer.', ja: '私はお客様に私たちの商品を紹介しました。', focus: 'introduced', object: 'our product', jaFocus: '紹介しました', sentencePattern: 'S + V + O + M', grammarParts: [{label:'S',text:'I'},{label:'V',text:'introduced'},{label:'O',text:'our product'},{label:'M',text:'to the customer'}] },
      { en: 'We introduced a new rule this month.', ja: '私たちは今月新しいルールを導入しました。', focus: 'introduced', object: 'a new rule', jaFocus: '導入しました', sentencePattern: 'S + V + O + M', grammarParts: [{label:'S',text:'We'},{label:'V',text:'introduced'},{label:'O',text:'a new rule'},{label:'M',text:'this month'}] },
      { en: 'Can you introduce me to the new manager?', ja: 'あなたは私を新しいマネージャーに紹介してくれますか？', focus: 'introduce', object: 'me', jaFocus: '紹介してくれますか', sentencePattern: 'S + V + O + M', grammarParts: [{label:'S',text:'you'},{label:'V',text:'introduce'},{label:'O',text:'me'},{label:'M',text:'to the new manager'}] }
    ]}], collocations: [], phrasalVerbs: []
  }
];
const insert = ',\n' + JSON.stringify(newVerbs, null, 2).slice(1, -1) + '\n];';
const marker = '\n\n];\n\n\nconst dailyMeaningExamples';
if (!s.includes(marker)) throw new Error('marker not found');
s = s.replace(marker, '\n' + insert + '\n\n\nconst dailyMeaningExamples');
fs.writeFileSync(path, s);
