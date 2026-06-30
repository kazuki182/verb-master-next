from pathlib import Path
import json
base=Path('/mnt/data/v97work')
p=base/'lib/data.ts'
s=p.read_text()

def find_top_obj(src, idv):
    marker=f'  {{\n    "id": "{idv}",\n    "rank":'
    start=src.index(marker)
    depth=0; in_str=False; esc=False
    for i in range(start,len(src)):
        ch=src[i]
        if in_str:
            if esc: esc=False
            elif ch=='\\\\': esc=True
            elif ch=='"': in_str=False
        else:
            if ch=='"': in_str=True
            elif ch=='{': depth+=1
            elif ch=='}':
                depth-=1
                if depth==0: return start,i+1
    raise ValueError(idv)

def replace(src,idv,obj):
    a,b=find_top_obj(src,idv)
    txt=json.dumps(obj, ensure_ascii=False, indent=4)
    return src[:a]+txt+src[b:]

def ex(en,ja,focus,obj=None):
    d={"en":en,"ja":ja,"focus":focus}
    if obj: d["object"]=obj
    return d

def meaning(id,title,pattern,trans,structure,image,point,examples):
    return {"id":id,"title":title,"pattern":pattern,"transitivity":trans,"structure":structure,"image":image,"point":point,"examples":examples}

def phrase(phrase,ja,image,pattern,examples):
    return {"phrase":phrase,"ja":ja,"image":image,"pattern":pattern,"examples":examples,"dailyExamples":[]}

send={
"id":"send","rank":43,"word":"SEND","ipa":"","kana":"センド","syllable":"send","transitivity":"他動詞・自動詞","importance":"★★★★☆ 重要",
"core":"自分の場所から相手・場所へ情報や物を送り出す",
"coreDetail":"SENDは、メール・資料・商品・依頼などを相手の方向へ送り出す感覚です。仕事では send an email, send A to B, send someone something, send out, send back が特に重要です。",
"coreVisual":{"from":["📧 メール","📄 資料","📦 サンプル","📢 案内"],"to":"相手・送付先","label":"こちら側 → 相手へ送り出す"},
"meanings":[
meaning("send-object","① メール・資料などを送る","send + 名詞","他動詞","send + 送るもの","メールや資料を相手に向けて送り出す。","send an email / send the file / send the document は仕事で最もよく使う基本形です。",[
ex("I will send the file today.","私は今日ファイルを送ります。","send","the file"),ex("Please send the quotation by noon.","正午までに見積書を送ってください。","send","the quotation"),ex("Did you send the email to the client?","あなたは顧客にメールを送りましたか？","send","the email")]),
meaning("send-a-to-b","② AをBへ送る","send A to B","他動詞","send + 送るもの + to + 送付先","物や情報の行き先を to で示す。","送付先をはっきり言う時は send A to B が自然です。",[
ex("We sent the sample to the customer.","私たちは顧客にサンプルを送りました。","sent","the sample"),ex("Please send the invoice to the accounting team.","請求書を経理チームに送ってください。","send","the invoice"),ex("I sent the revised data to the supplier.","私は修正済みのデータを仕入先に送りました。","sent","the revised data")]),
meaning("send-someone-something","③ 人に物・情報を送る","send 人 + 物","他動詞","send + 人 + 送るもの","相手に直接何かを送る。","send me the details のように、人を先に置く形もよく使います。",[
ex("Please send me the details.","詳細を私に送ってください。","send","me the details"),ex("Can you send the client the updated schedule?","あなたは顧客に更新後のスケジュールを送れますか？","send","the client the updated schedule"),ex("I sent him the latest price list.","私は彼に最新の価格表を送りました。","sent","him the latest price list")]),
meaning("send-for-purpose","④ 確認・承認のために送る","send + 名詞 + for 確認・承認","他動詞","send + 送るもの + for + 目的","相手に確認や承認をしてもらうために送る。","send it for approval / send it for review は社内連絡で便利です。",[
ex("We sent the drawing for approval.","私たちは承認のために図面を送りました。","sent","the drawing"),ex("Please send the document for review.","確認のために資料を送ってください。","send","the document"),ex("I will send the proposal for internal confirmation.","私は社内確認のために提案書を送ります。","send","the proposal")]),
meaning("send-person","⑤ 人を場所・担当へ行かせる","send 人 to 場所","他動詞","send + 人 + to + 場所","人を必要な場所や担当先へ向かわせる。","物だけでなく、人を派遣する意味でも send を使います。",[
ex("We sent a technician to the site.","私たちは技術者を現場に送りました。","sent","a technician"),ex("The manager sent me to the client meeting.","上司は私を顧客との会議に行かせました。","sent","me"),ex("Can we send someone to check the installation?","設置状況を確認するために誰かを送れますか？","send","someone")]),
meaning("send-message","⑥ メッセージ・合図を伝える","send + message / signal","他動詞","send + 伝わる内容","言葉や行動を通じて相手に意味を伝える。","send a message は実際のメッセージだけでなく、印象や方針を伝える意味にも使います。",[
ex("This delay sends a bad message to the client.","この遅れは顧客に悪い印象を与えます。","sends","a bad message"),ex("A quick reply sends a positive signal.","素早い返信は良い印象を与えます。","sends","a positive signal"),ex("The announcement sent a clear message to the team.","その発表はチームに明確なメッセージを伝えました。","sent","a clear message")])],
"collocations":[
phrase("send an email","メールを送る","仕事の連絡をメールで送る。","send an email to + 相手",[ex("I will send an email to the client this afternoon.","私は今日の午後、顧客にメールを送ります。","send an email"),ex("Please send an email after the meeting.","会議後にメールを送ってください。","send an email"),ex("We sent an email about the delivery schedule.","私たちは納期予定についてメールを送りました。","sent an email")]),
phrase("send a file","ファイルを送る","資料やデータを共有する。","send a file / send the file",[ex("Can you send the file again?","もう一度ファイルを送ってもらえますか？","send the file"),ex("I sent the file with the latest changes.","私は最新の変更を反映したファイルを送りました。","sent the file"),ex("Please send a file that we can edit.","編集できるファイルを送ってください。","send a file")]),
phrase("send a quotation","見積書を送る","価格や条件をまとめて顧客へ送る。","send a quotation to + 相手",[ex("We will send a quotation by tomorrow morning.","私たちは明日の午前中までに見積書を送ります。","send a quotation"),ex("Please send the quotation to the purchasing team.","購買チームに見積書を送ってください。","send the quotation"),ex("I sent the quotation after confirming the quantity.","私は数量を確認した後、見積書を送りました。","sent the quotation")]),
phrase("send a reminder","リマインドを送る","相手が忘れないように通知する。","send a reminder to + 相手",[ex("Please send a reminder before the deadline.","締切前にリマインドを送ってください。","send a reminder"),ex("I sent a reminder to the client yesterday.","私は昨日、顧客にリマインドを送りました。","sent a reminder"),ex("We should send a reminder about the meeting.","私たちは会議についてリマインドを送るべきです。","send a reminder")]),
phrase("send for approval","承認のために送る","上司や顧客に承認してもらうために送る。","send + 名詞 + for approval",[ex("I will send the plan for approval.","私は承認のために計画を送ります。","send the plan for approval"),ex("We sent the design for approval last week.","私たちは先週、承認のためにデザインを送りました。","sent the design for approval"),ex("Please send the final version for approval.","最終版を承認のために送ってください。","send the final version for approval")])],
"phrasalVerbs":[
phrase("send out","一斉に送る・配信する","複数の相手に情報を広く送り出す。","send out + 案内・メール・資料",[ex("We sent out the meeting invitation this morning.","私たちは今朝、会議の招待を一斉に送りました。","sent out"),ex("Please send out the updated price list.","更新後の価格表を配信してください。","send out"),ex("The team will send out the announcement today.","チームは今日、その案内を配信します。","send out")]),
phrase("send back","送り返す・返送する","届いたものを元の相手へ戻す。","send back + 名詞",[ex("Please send back the signed document.","署名済みの書類を返送してください。","send back"),ex("We sent back the sample because it was damaged.","破損していたため、私たちはサンプルを返送しました。","sent back"),ex("Can you send the draft back with your comments?","コメントを付けて草案を返送してもらえますか？","send the draft back")]),
phrase("send over","送って渡す・送付する","相手側へ資料や情報を送って渡す。","send over + 名詞",[ex("I will send over the latest data.","私は最新のデータを送ります。","send over"),ex("Please send over the agenda before the meeting.","会議前に議題を送ってください。","send over"),ex("She sent over the revised estimate yesterday.","彼女は昨日、修正済みの見積を送ってくれました。","sent over")]),
phrase("send in","提出する・送り込む","必要な場所や担当へ正式に送る。","send in + 申請・書類・人",[ex("Please send in the application by Friday.","金曜日までに申請書を提出してください。","send in"),ex("We sent in the report before the deadline.","私たちは締切前に報告書を提出しました。","sent in"),ex("The company sent in a technician to check the system.","会社はシステム確認のために技術者を送り込みました。","sent in")]),
phrase("send off","発送する・送り出す","準備したものや人を出発させる。","send off + 名詞",[ex("We sent off the samples this morning.","私たちは今朝サンプルを発送しました。","sent off"),ex("Please send off the package today.","今日その荷物を発送してください。","send off"),ex("The team sent off the final documents to the client.","チームは最終書類を顧客へ発送しました。","sent off")])]
}

# Pay and buy omitted for brevity in comments but fully included below
pay={
"id":"pay","rank":44,"word":"PAY","ipa":"","kana":"ペイ","syllable":"pay","transitivity":"他動詞・自動詞","importance":"★★★★☆ 基本",
"core":"お金・注意・努力などを相手や対象に向ける","coreDetail":"PAYは、お金を支払うだけでなく、注意や敬意を対象に向ける時にも使います。仕事では請求書・支払方法・注意・返済・努力の表現でよく使います。",
"coreVisual":{"from":["💴 お金","👀 注意","⏱️ 努力","🙏 敬意"],"to":"相手・対象","label":"価値や意識を対象へ向ける"},
"meanings":[
meaning("pay-invoice","① 請求書・費用を支払う","pay + 請求書・費用","他動詞","pay + 支払う対象","請求された金額を支払う。","pay the invoice / pay the fee は仕事でよく使います。",[ex("We paid the invoice yesterday.","私たちは昨日、その請求書を支払いました。","paid","the invoice"),ex("Please pay the fee by the end of the month.","月末までにその費用を支払ってください。","pay","the fee"),ex("The client has not paid the invoice yet.","その顧客はまだ請求書を支払っていません。","paid","the invoice")]),
meaning("pay-for","② 〜の代金を支払う","pay for + 名詞","自動詞句","pay for + 支払う対象","商品・サービス・作業に対してお金を払う。","pay for は「〜の代金を払う」。pay the product ではなく pay for the product が自然です。",[ex("We need to pay for the samples in advance.","私たちはサンプル代を前払いする必要があります。","pay","for the samples"),ex("The customer paid for the repair work.","顧客は修理作業の代金を支払いました。","paid","for the repair work"),ex("Who will pay for the additional shipping cost?","追加送料は誰が支払いますか？","pay","for the additional shipping cost")]),
meaning("pay-person","③ 人・会社に支払う","pay + 人・会社","他動詞","pay + 支払う相手","相手にお金を渡す。","pay the supplier / pay the contractor のように支払う相手を目的語にできます。",[ex("We paid the supplier last week.","私たちは先週、仕入先に支払いました。","paid","the supplier"),ex("Please pay the contractor after the work is complete.","作業完了後に業者へ支払ってください。","pay","the contractor"),ex("The company pays employees on the 25th.","その会社は25日に従業員へ給与を支払います。","pays","employees")]),
meaning("pay-by","④ 支払方法を言う","pay by + 支払方法","自動詞句","pay by + card / bank transfer","どの方法で支払うかを示す。","pay by credit card / pay by bank transfer は実務でよく使います。",[ex("The customer paid by bank transfer.","その顧客は銀行振込で支払いました。","paid","by bank transfer"),ex("Can we pay by credit card?","私たちはクレジットカードで支払えますか？","pay","by credit card"),ex("They prefer to pay by invoice.","彼らは請求書払いを希望しています。","pay","by invoice")]),
meaning("pay-attention","⑤ 注意を払う","pay attention to + 名詞","熟語","pay attention to + 注意する対象","意識を対象に向ける。","pay はお金だけでなく、注意を向ける意味でも使います。",[ex("Please pay attention to the delivery date.","納期に注意してください。","pay","attention to the delivery date"),ex("We need to pay attention to small details.","私たちは細かい点に注意する必要があります。","pay","attention to small details"),ex("The team paid attention to the client's request.","チームは顧客の要望に注意を払いました。","paid","attention to the client's request")]),
meaning("pay-result","⑥ 努力などが報われる","effort / work + pays","自動詞","主語 + pays / paid","努力した分の価値が結果として返ってくる。","Hard work pays. は「努力は報われる」という定番表現です。",[ex("Our hard work paid off in the final presentation.","私たちの努力は最終プレゼンで報われました。","paid","off in the final presentation"),ex("Careful preparation pays in client meetings.","丁寧な準備は顧客との会議で報われます。","pays","in client meetings"),ex("The extra training paid off during the installation.","追加研修は設置作業中に役立ちました。","paid","off during the installation")])],
"collocations":[
phrase("pay the invoice","請求書を支払う","請求書の金額を支払う。","pay the invoice",[ex("We need to pay the invoice by Friday.","私たちは金曜日までに請求書を支払う必要があります。","pay the invoice"),ex("The client paid the invoice this morning.","顧客は今朝、請求書を支払いました。","paid the invoice"),ex("Please check whether they paid the invoice.","彼らが請求書を支払ったか確認してください。","paid the invoice")]),
phrase("pay attention to","〜に注意を払う","注意を対象に向ける。","pay attention to + 名詞",[ex("Please pay attention to the quantity.","数量に注意してください。","pay attention to"),ex("We should pay attention to the installation conditions.","私たちは設置条件に注意するべきです。","pay attention to"),ex("The team paid attention to every detail.","チームはすべての細部に注意を払いました。","paid attention to")]),
phrase("pay by bank transfer","銀行振込で支払う","支払方法として銀行振込を使う。","pay by bank transfer",[ex("The customer will pay by bank transfer.","顧客は銀行振込で支払います。","pay by bank transfer"),ex("Can we pay by bank transfer this time?","今回は銀行振込で支払えますか？","pay by bank transfer"),ex("They paid by bank transfer after receiving the invoice.","彼らは請求書を受け取った後、銀行振込で支払いました。","paid by bank transfer")]),
phrase("pay in advance","前払いする","商品やサービスを受ける前に支払う。","pay in advance",[ex("We need to pay in advance for this order.","私たちはこの注文について前払いする必要があります。","pay in advance"),ex("The supplier asked us to pay in advance.","仕入先は私たちに前払いを求めました。","pay in advance"),ex("Can the client pay in advance?","顧客は前払いできますか？","pay in advance")]),
phrase("pay respect to","敬意を払う","相手や考え方に敬意を向ける。","pay respect to + 人・考え",[ex("We should pay respect to the client's culture.","私たちは顧客の文化に敬意を払うべきです。","pay respect to"),ex("The company pays respect to local business customs.","その会社は地域の商習慣に敬意を払っています。","pays respect to"),ex("Please pay respect to the opinions of the team.","チームの意見に敬意を払ってください。","pay respect to")])],
"phrasalVerbs":[
phrase("pay off","報われる・完済する","努力や支払いが最後に良い結果になる。","pay off / pay off + 借金",[ex("Our preparation paid off during the presentation.","私たちの準備はプレゼン中に報われました。","paid off"),ex("The extra checks paid off because we found an error.","エラーを見つけたので、追加確認は報われました。","paid off"),ex("The company paid off the remaining debt.","会社は残りの借入金を完済しました。","paid off")]),
phrase("pay back","返済する・返す","借りたお金や恩を相手に返す。","pay back + 人 / 金額",[ex("We need to pay back the advance payment.","私たちは前受金を返済する必要があります。","pay back"),ex("The company paid back the loan early.","会社は借入金を早めに返済しました。","paid back"),ex("I will pay you back for the taxi cost.","私はタクシー代をあなたに返します。","pay you back")]),
phrase("pay for","〜の代金を支払う","対象に対して代金を支払う。","pay for + 名詞",[ex("The client will pay for the additional work.","顧客は追加作業の代金を支払います。","pay for"),ex("We paid for the samples in advance.","私たちはサンプル代を前払いしました。","paid for"),ex("Who will pay for the shipping cost?","送料は誰が支払いますか？","pay for")]),
phrase("pay up","支払うべきお金を払う","未払いの金額を支払う。","pay up",[ex("The client finally paid up after several reminders.","顧客は何度かリマインドした後、ようやく支払いました。","paid up"),ex("We cannot close the account until they pay up.","彼らが支払うまで、私たちはその取引を完了できません。","pay up"),ex("The supplier asked the customer to pay up before shipment.","仕入先は出荷前に顧客へ支払いを求めました。","pay up")]),
phrase("pay out","支払う・払い出す","会社や制度からお金を支払う。","pay out + 金額・手当",[ex("The company paid out the bonus in June.","会社は6月に賞与を支払いました。","paid out"),ex("The insurance company will pay out the claim.","保険会社はその請求に対して保険金を支払います。","pay out"),ex("We need to confirm when the refund will be paid out.","返金がいつ支払われるか確認する必要があります。","paid out")])]
}

buy={
"id":"buy","rank":45,"word":"BUY","ipa":"","kana":"バイ","syllable":"buy","transitivity":"他動詞","importance":"★★★★★ 基本",
"core":"お金を払って必要なものを手に入れる","coreDetail":"BUYは、商品・部品・サービス・考え方などを手に入れる動詞です。仕事では buy from a supplier, buy in bulk, buy into an idea なども重要です。",
"coreVisual":{"from":["💴 支払い","🧾 条件","📦 商品","💡 考え"],"to":"自分・会社のものにする","label":"支払う → 手に入れる"},
"meanings":[
meaning("buy-object","① 商品・部品を買う","buy + 名詞","他動詞","buy + 買うもの","必要なものを購入して手に入れる。","buy は purchase より会話で自然です。仕事では buy parts / buy samples / buy equipment がよく使えます。",[ex("We bought sample parts for the project.","私たちはその案件用にサンプル部品を購入しました。","bought","sample parts"),ex("I need to buy a new charger today.","私は今日、新しい充電器を買う必要があります。","buy","a new charger"),ex("The company bought new equipment last month.","その会社は先月、新しい設備を購入しました。","bought","new equipment")]),
meaning("buy-from","② 〜から買う","buy from + 仕入先・店","他動詞句","buy + 買うもの + from + 相手","購入元を from で示す。","仕入先や販売元を言う時は buy from を使います。",[ex("We buy LED parts from this supplier.","私たちはこの仕入先からLED部品を購入しています。","buy","LED parts"),ex("The client wants to buy directly from the manufacturer.","顧客はメーカーから直接購入したいと考えています。","buy","directly from the manufacturer"),ex("Did you buy the materials from the usual vendor?","あなたはいつもの業者から材料を購入しましたか？","buy","the materials")]),
meaning("buy-for","③ 〜のために買う","buy + 名詞 + for + 目的・人","他動詞","buy + 買うもの + for + 目的","目的や相手のために購入する。","案件・部署・顧客などの目的を for で足します。",[ex("We bought extra materials for the installation.","私たちは設置作業のために追加材料を購入しました。","bought","extra materials"),ex("Please buy a sample for the client meeting.","顧客との会議用にサンプルを購入してください。","buy","a sample"),ex("The team bought software for the new project.","チームは新しい案件のためにソフトウェアを購入しました。","bought","software")]),
meaning("buy-at-price","④ 価格・条件で買う","buy at / for + 価格","他動詞句","buy + 対象 + at / for + 価格","価格条件に合う形で購入する。","具体的な価格や条件を言う時に便利です。",[ex("We bought the parts at a lower price.","私たちはその部品をより安い価格で購入しました。","bought","the parts"),ex("Can we buy this product for under 10,000 yen?","この商品を1万円未満で購入できますか？","buy","this product"),ex("The customer bought the package at a discount.","顧客はそのセットを割引価格で購入しました。","bought","the package")]),
meaning("buy-in-bulk","⑤ まとめて買う","buy in bulk / buy large quantities","他動詞句","buy + 大量・まとめて","数量をまとめて購入する。","仕事では単価を下げるために buy in bulk をよく使います。",[ex("We buy these parts in bulk to reduce cost.","私たちはコスト削減のためにこれらの部品をまとめて購入しています。","buy","these parts"),ex("The supplier gives a discount when we buy in bulk.","まとめて購入すると、その仕入先は割引してくれます。","buy","in bulk"),ex("Should we buy larger quantities this month?","今月はより多い数量を購入するべきですか？","buy","larger quantities")]),
meaning("buy-idea","⑥ 考えや提案を受け入れる","buy + idea / argument","他動詞","buy + 考え・説明","説明や考えを納得して受け入れる。","口語では I don't buy it. で「それは納得できない」という意味になります。",[ex("The client did not buy our explanation.","顧客は私たちの説明に納得しませんでした。","buy","our explanation"),ex("I don't buy that argument without data.","データがなければ、その主張には納得できません。","buy","that argument"),ex("The team bought the idea after seeing the results.","結果を見た後、チームはその案を受け入れました。","bought","the idea")])],
"collocations":[
phrase("buy parts","部品を買う","案件や製作に必要な部品を購入する。","buy parts for + 案件",[ex("We need to buy parts for the repair.","私たちは修理用の部品を買う必要があります。","buy parts"),ex("The team bought parts from a local supplier.","チームは地元の仕入先から部品を購入しました。","bought parts"),ex("Please buy parts that match the specification.","仕様に合う部品を購入してください。","buy parts")]),
phrase("buy a sample","サンプルを買う","確認や検証のためにサンプルを購入する。","buy a sample / buy samples",[ex("Let's buy a sample before placing a large order.","大量発注の前にサンプルを購入しましょう。","buy a sample"),ex("We bought samples to check the color.","私たちは色を確認するためにサンプルを購入しました。","bought samples"),ex("Can you buy a sample for the client?","顧客用にサンプルを購入できますか？","buy a sample")]),
phrase("buy in bulk","まとめ買いする","数量をまとめて購入する。","buy in bulk",[ex("We buy in bulk to get a better price.","私たちはより良い価格にするためにまとめ買いします。","buy in bulk"),ex("The company bought in bulk before the price increase.","会社は値上げ前にまとめ買いしました。","bought in bulk"),ex("Should we buy in bulk for this project?","この案件ではまとめ買いするべきですか？","buy in bulk")]),
phrase("buy from a supplier","仕入先から買う","購入元を明確にして買う。","buy from a supplier",[ex("We usually buy from this supplier.","私たちは普段この仕入先から購入しています。","buy from"),ex("The client wants to buy from a domestic supplier.","顧客は国内仕入先から購入したいと考えています。","buy from"),ex("Can we buy from another supplier this time?","今回は別の仕入先から購入できますか？","buy from")]),
phrase("buy at a discount","割引価格で買う","通常価格より安く購入する。","buy at a discount",[ex("We bought the equipment at a discount.","私たちはその設備を割引価格で購入しました。","bought the equipment at a discount"),ex("Can we buy this material at a discount?","この材料を割引価格で購入できますか？","buy this material at a discount"),ex("The company bought extra stock at a discount.","会社は追加在庫を割引価格で購入しました。","bought extra stock at a discount")])],
"phrasalVerbs":[
phrase("buy into","考えを受け入れる・賛同する","提案や考えに納得して乗る。","buy into + idea / plan",[ex("The team bought into the new plan.","チームは新しい計画に賛同しました。","bought into"),ex("We need the client to buy into this proposal.","私たちは顧客にこの提案へ納得してもらう必要があります。","buy into"),ex("Management did not buy into the idea at first.","経営陣は最初、その案に賛同しませんでした。","buy into")]),
phrase("buy out","買収する・買い取る","会社や権利をまとめて買い取る。","buy out + company / partner",[ex("A larger company bought out the supplier.","より大きな会社がその仕入先を買収しました。","bought out"),ex("They plan to buy out the local distributor.","彼らは地元の販売代理店を買収する予定です。","buy out"),ex("The owner bought out his business partner.","オーナーは共同経営者の持ち分を買い取りました。","bought out")]),
phrase("buy up","買い占める・大量に買う","在庫や商品を多く買い集める。","buy up + stock / supply",[ex("Companies bought up the remaining stock before the price increase.","企業は値上げ前に残りの在庫を買い占めました。","bought up"),ex("The distributor bought up all available units.","販売代理店は入手可能な全数を買い占めました。","bought up"),ex("We should not buy up more inventory than we need.","必要以上に在庫を買い占めるべきではありません。","buy up")]),
phrase("buy back","買い戻す","一度売ったものを再び買う。","buy back + 商品・株式",[ex("The company bought back its own shares.","会社は自社株を買い戻しました。","bought back"),ex("Can we buy back the unused materials?","未使用の材料を買い戻すことはできますか？","buy back"),ex("The supplier offered to buy back the defective products.","仕入先は不良品を買い戻すと申し出ました。","buy back")]),
phrase("buy off","買収する・お金で黙らせる","不正にお金を払って相手の行動を変えさせる。","buy off + 人",[ex("The company denied trying to buy off the inspector.","その会社は検査官を買収しようとしたことを否定しました。","buy off"),ex("We must never buy off a decision-maker.","私たちは意思決定者を買収してはいけません。","buy off"),ex("The report said the contractor bought off local officials.","報告書によると、その業者は地元職員を買収しました。","bought off")])]
}

for idv,obj in [('send',send),('pay',pay),('buy',buy)]:
    s=replace(s,idv,obj)
p.write_text(s)
# display rule: do not highlight Japanese for now
comp=base/'components/ExampleCard.tsx'
t=comp.read_text().replace('{highlightText(example.ja, example.jaFocus, "ja-focus")}', '{example.ja}')
comp.write_text(t)
# version files
(base/'VERSION_V97.txt').write_text('Ver.97: verb quality batch 6 send / pay / buy plus English-only highlight rule.\n')
(base/'QUALITY_AUDIT_V97.md').write_text('''# QUALITY AUDIT V97\n\n## Scope\n- send / pay / buy の動詞品質改善。\n- 動詞の基本、熟語・よく使う表現、句動詞を優先。\n- Premium日常例文は今回も未修正。\n\n## Display rule\n- 基本動詞: 英語例文の対象動詞のみ赤文字。\n- 熟語: 英語例文の熟語全体を赤文字。\n- 句動詞: 英語例文の句動詞全体を赤文字。\n- 和訳は現段階では赤文字にしない。\n\n## Updated verbs\n- send: 6 basic usages, 5 collocations, 5 phrasal verbs.\n- pay: 6 basic usages, 5 collocations, 5 phrasal verbs.\n- buy: 6 basic usages, 5 collocations, 5 phrasal verbs.\n\n## Notes\n- コアイメージを各動詞に追加。\n- 仕事例文を各項目3つずつ追加。\n''')
