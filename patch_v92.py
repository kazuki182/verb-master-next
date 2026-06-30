from pathlib import Path
import json, re
p=Path('/mnt/data/v92work/lib/data.ts')
text=p.read_text()

def find_top(text,idv,rank):
    marker=f'"id": "{idv}"'
    pos=0
    while True:
        idx=text.find(marker,pos)
        if idx<0: raise ValueError(f'not found {idv}')
        start=text.rfind('{',0,idx)
        # parse this object
        depth=0; in_str=False; esc=False; end=None
        for i in range(start,len(text)):
            c=text[i]
            if in_str:
                if esc: esc=False
                elif c=='\\': esc=True
                elif c=='"': in_str=False
            else:
                if c=='"': in_str=True
                elif c=='{': depth+=1
                elif c=='}':
                    depth-=1
                    if depth==0:
                        end=i+1; break
        sub=text[start:end]
        if f'"rank": {rank}' in sub[:300] or f'"rank":{rank}' in sub[:300]:
            return start,end,sub
        pos=idx+len(marker)

def ex(en, ja, focus, jaFocus, obj=None):
    d={"en":en,"ja":ja,"focus":focus,"jaFocus":jaFocus}
    if obj: d["object"]=obj
    return d

def item(phrase,ja,image,pattern,examples):
    return {"phrase":phrase,"ja":ja,"image":image,"pattern":pattern,"examples":examples,"dailyExamples":[]}

hold_coll=[
 item("hold a meeting","会議を開く","会議や打ち合わせを開催する。","hold a meeting",[
  ex("We will hold a meeting with the client next week.","来週、顧客と会議を開きます。","hold a meeting","会議を開きます"),
  ex("The team held a short meeting after the site visit.","チームは現場訪問後に短い会議を開きました。","held a short meeting","短い会議を開きました"),
  ex("Can we hold a meeting before sending the quote?","見積を送る前に会議を開けますか？","hold a meeting","会議を開けますか")]),
 item("hold the line","電話を切らずに待つ","電話対応で相手を保留にする。","hold the line",[
  ex("Please hold the line while I transfer your call.","お電話を転送しますので、そのままお待ちください。","hold the line","そのままお待ちください"),
  ex("Could you hold the line for a moment?","少々お電話を切らずにお待ちいただけますか？","hold the line","お待ちいただけますか"),
  ex("I asked the customer to hold the line while I checked the order.","注文を確認する間、お客様に電話を切らずに待っていただきました。","hold the line","電話を切らずに待って")]),
 item("hold a position","役職に就く・立場を持つ","役職や立場を正式に持つ。","hold a position",[
  ex("She holds a management position in the Tokyo office.","彼女は東京オフィスで管理職に就いています。","holds a management position","管理職に就いています"),
  ex("He held the position for five years.","彼はその役職を5年間務めました。","held the position","役職を務めました"),
  ex("We need someone who can hold a leadership position.","リーダー職を担える人が必要です。","hold a leadership position","リーダー職を担える")]),
 item("hold responsibility","責任を持つ","業務や結果に責任を持つ。","hold responsibility",[
  ex("The sales team holds responsibility for client communication.","営業チームは顧客連絡に責任を持っています。","holds responsibility","責任を持っています"),
  ex("Each department holds responsibility for its own data.","各部署は自分たちのデータに責任を持っています。","holds responsibility","責任を持っています"),
  ex("Who holds responsibility for the final approval?","最終承認の責任者は誰ですか？","holds responsibility","責任者は誰ですか")]),
 item("hold a patent","特許を保有する","権利として特許を持つ。","hold a patent",[
  ex("The company holds a patent for the control system.","その会社は制御システムの特許を保有しています。","holds a patent","特許を保有しています"),
  ex("They hold several patents in lighting technology.","彼らは照明技術で複数の特許を保有しています。","hold several patents","複数の特許を保有しています"),
  ex("We should check who holds the patent before using the design.","その設計を使う前に、誰が特許を保有しているか確認すべきです。","holds the patent","特許を保有している")])]
hold_ph=[
 item("hold on","少し待つ","会話や電話で相手に少し待ってもらう。","hold on",[
  ex("Please hold on while I check the file.","ファイルを確認しますので少々お待ちください。","hold on","お待ちください"),
  ex("Hold on, I need to confirm the price first.","少し待ってください。先に価格を確認する必要があります。","Hold on","少し待ってください"),
  ex("Could you hold on for a few minutes?","数分お待ちいただけますか？","hold on","お待ちいただけますか")]),
 item("hold off","延期する・控える","すぐ実行せず、少し待つ。","hold off on + 名詞/動名詞",[
  ex("We decided to hold off on sending the email.","そのメールの送信を少し延期することにしました。","hold off on sending","送信を延期する"),
  ex("Please hold off on ordering parts until we get approval.","承認が出るまで部材の発注は控えてください。","hold off on ordering","発注は控えて"),
  ex("The client asked us to hold off until next month.","顧客は来月まで待つよう依頼しました。","hold off","待つよう")]),
 item("hold back","抑える・止める","進行や発言を後ろに止める。","hold back + 名詞",[
  ex("A lack of information held back the project.","情報不足が案件の進行を妨げました。","held back the project","案件の進行を妨げました"),
  ex("Please do not hold back important feedback.","重要なフィードバックは遠慮せず伝えてください。","hold back feedback","フィードバックを控える"),
  ex("The budget issue held us back for two weeks.","予算の問題で私たちは2週間足止めされました。","held us back","足止めされました")]),
 item("hold up","持ちこたえる・遅らせる","状況に耐える、または進行を止める。","hold up",[
  ex("The plan held up under detailed review.","その計画は詳細レビューに耐えました。","held up","レビューに耐えました"),
  ex("The delivery was held up by customs.","納品は税関で遅れました。","held up","遅れました"),
  ex("This structure should hold up in bad weather.","この構造は悪天候でも持ちこたえるはずです。","hold up","持ちこたえる")]),
 item("hold onto","保持する・手放さない","必要なものを保ち続ける。","hold onto + 名詞",[
  ex("Please hold onto the original receipt.","原本の領収書は保管しておいてください。","hold onto","保管して"),
  ex("We should hold onto this data for future analysis.","今後の分析のためにこのデータを保持しておくべきです。","hold onto this data","データを保持して"),
  ex("The company held onto key clients despite the price increase.","値上げにもかかわらず、会社は主要顧客を維持しました。","held onto key clients","主要顧客を維持しました")])]

set_coll=[
 item("set a deadline","締切を設定する","締切を具体的に決める。","set a deadline",[
  ex("We need to set a deadline before assigning the task.","作業を割り当てる前に締切を設定する必要があります。","set a deadline","締切を設定する"),
  ex("Please set a realistic deadline for the client review.","顧客レビューのために現実的な締切を設定してください。","set a realistic deadline","現実的な締切を設定して"),
  ex("The team set a deadline for the first draft.","チームは初稿の締切を設定しました。","set a deadline","締切を設定しました")]),
 item("set a goal","目標を設定する","達成したい結果を明確にする。","set a goal",[
  ex("We set a goal to increase repeat orders.","リピート注文を増やすという目標を設定しました。","set a goal","目標を設定しました"),
  ex("Please set a clear goal for the next quarter.","次の四半期に向けて明確な目標を設定してください。","set a clear goal","明確な目標を設定して"),
  ex("The manager set a goal for each salesperson.","上司は各営業担当に目標を設定しました。","set a goal","目標を設定しました")]),
 item("set a price","価格を設定する","販売価格や見積価格を決める。","set a price",[
  ex("We set a price after checking the material cost.","材料費を確認した後に価格を設定しました。","set a price","価格を設定しました"),
  ex("Please set a price that includes installation.","設置費を含めた価格を設定してください。","set a price","価格を設定して"),
  ex("The supplier set a higher price this month.","仕入先は今月、より高い価格を設定しました。","set a higher price","高い価格を設定しました")]),
 item("set priorities","優先順位を決める","複数の作業の順番を決める。","set priorities",[
  ex("We need to set priorities before the busy season.","繁忙期の前に優先順位を決める必要があります。","set priorities","優先順位を決める"),
  ex("Please set priorities for these three tasks.","この3つの作業に優先順位を付けてください。","set priorities","優先順位を付けて"),
  ex("The team set priorities based on urgency.","チームは緊急度に基づいて優先順位を決めました。","set priorities","優先順位を決めました")]),
 item("set clear rules","明確なルールを設定する","曖昧さを減らすためにルールを決める。","set clear rules",[
  ex("We should set clear rules for approval requests.","承認依頼について明確なルールを設定すべきです。","set clear rules","明確なルールを設定"),
  ex("The company set clear rules for expense reports.","会社は経費精算について明確なルールを設定しました。","set clear rules","明確なルールを設定しました"),
  ex("Please set clear rules before the project starts.","案件が始まる前に明確なルールを設定してください。","set clear rules","明確なルールを設定して")])]
set_ph=[
 item("set up","準備する・設定する","使える状態を作る。","set up + 名詞",[
  ex("We set up a meeting with the client.","顧客との会議を設定しました。","set up a meeting","会議を設定しました"),
  ex("Please set up the projector before the presentation.","プレゼン前にプロジェクターを準備してください。","set up the projector","プロジェクターを準備して"),
  ex("The engineer set up the new system yesterday.","技術者は昨日、新しいシステムを設定しました。","set up the new system","システムを設定しました")]),
 item("set aside","取っておく・確保する","時間・お金・場所などを別に確保する。","set aside + 名詞",[
  ex("We set aside time for the final check.","最終確認のために時間を確保しました。","set aside time","時間を確保しました"),
  ex("Please set aside some budget for extra parts.","追加部材用に予算を少し取っておいてください。","set aside some budget","予算を取っておいて"),
  ex("The team set aside one hour for training.","チームは研修のために1時間を確保しました。","set aside one hour","1時間を確保しました")]),
 item("set back","遅らせる・後退させる","進行を遅らせる。","set back + 名詞",[
  ex("The shipping delay set back the project by one week.","出荷遅延で案件が1週間遅れました。","set back the project","案件が遅れました"),
  ex("The design change set us back a few days.","設計変更で私たちは数日遅れました。","set us back","数日遅れました"),
  ex("A system error set back the schedule.","システムエラーでスケジュールが遅れました。","set back the schedule","スケジュールが遅れました")]),
 item("set out","説明する・始める","内容を明確に示す、または取りかかる。","set out + 名詞 / set out to do",[
  ex("The document sets out the project requirements.","その資料は案件要件を明確に示しています。","sets out the requirements","要件を示しています"),
  ex("We set out to improve the ordering process.","私たちは発注プロセスの改善に取りかかりました。","set out to improve","改善に取りかかりました"),
  ex("The proposal sets out three options.","その提案書は3つの選択肢を示しています。","sets out three options","選択肢を示しています")]),
 item("set off","引き起こす・作動させる","反応や出来事を引き起こす。","set off + 名詞",[
  ex("The price increase set off complaints from customers.","値上げにより顧客からクレームが発生しました。","set off complaints","クレームが発生しました"),
  ex("A small error set off a larger problem.","小さなミスがより大きな問題を引き起こしました。","set off a problem","問題を引き起こしました"),
  ex("The alarm was set off during the inspection.","点検中にアラームが作動しました。","set off","作動しました")])]

def meaning(id,title,pattern,image,point,examples):
    return {"id":id,"title":title,"pattern":pattern,"transitivity":"他動詞・自動詞","structure":"型の目安："+pattern,"image":image,"point":point,"examples":examples,"dailyExamples":[]}
change={"id":"change","rank":36,"word":"CHANGE","ipa":"/tʃeɪndʒ/","kana":"チェンジ","syllable":"change","transitivity":"他動詞・自動詞","importance":"★★★★★ 基本","core":"今の状態を別の状態にする","coreDetail":"CHANGEは、予定・内容・条件・担当・考え方などを今とは違う状態にする基本動詞です。仕事では schedule, design, plan, details, requirements とよく使います。","coreVisual":{"from":["現在の状態","予定","内容","条件","担当"],"to":"別の状態","label":"change = 今とは違う状態にする"},"meanings":[
 meaning("object","1 予定・内容を変更する","change + schedule/details/design","予定や内容を別のものにする。","change the schedule / change the details は仕事で最重要です。",[
  ex("We changed the meeting time yesterday.","私たちは昨日、会議時間を変更しました。","changed the meeting time","会議時間を変更しました","the meeting time"),ex("Please change the delivery address before shipping.","出荷前に納品先住所を変更してください。","change the delivery address","住所を変更して","the delivery address"),ex("The client asked us to change the design.","顧客はデザインを変更するよう依頼しました。","change the design","デザインを変更する","the design")]),
 meaning("intransitive","2 変わる","change","物事そのものが変わる。","自動詞として The plan changed. のように使います。",[
  ex("The schedule changed after the client meeting.","顧客との会議後にスケジュールが変わりました。","changed","変わりました"),ex("The requirements changed during the project.","案件の途中で要件が変わりました。","changed","要件が変わりました"),ex("Our plan changed because of the delivery delay.","納期遅延のため、私たちの計画は変わりました。","changed","計画は変わりました")]),
 meaning("from-to","3 AからBに変える","change A from B to C","変更前と変更後を明確にする。","from/to を使うと、何から何へ変えたかが分かります。",[
  ex("We changed the delivery date from Monday to Wednesday.","納品日を月曜日から水曜日に変更しました。","changed from Monday to Wednesday","月曜日から水曜日に変更しました"),ex("Please change the color from white to black.","色を白から黒に変更してください。","change the color from white to black","白から黒に変更して"),ex("The team changed the plan from online to in-person.","チームは計画をオンラインから対面に変更しました。","changed the plan from online to in-person","対面に変更しました")]),
 meaning("into","4 別の形に変える","change A into B","AをBという別の形・状態に変える。","提案・意見・仕組みなどを別の形にするときに使います。",[
  ex("We changed the rough idea into a clear proposal.","大まかな案を明確な提案に変えました。","changed the idea into a proposal","提案に変えました"),ex("The update changed the screen into a simpler layout.","その更新で画面がよりシンプルなレイアウトになりました。","changed the screen into","レイアウトになりました"),ex("The team changed customer feedback into action items.","チームは顧客の意見を実行項目に変えました。","changed feedback into action items","実行項目に変えました")]),
 meaning("make-change","5 変更を加える","make a change / make changes","具体的に修正や変更を行う。","change を名詞として使う頻出表現です。",[
  ex("We need to make a small change to the quote.","見積に小さな変更を加える必要があります。","make a small change","小さな変更を加える"),ex("Please make changes to the layout by Friday.","金曜日までにレイアウトを変更してください。","make changes","変更して"),ex("The client requested several changes to the design.","顧客はデザインにいくつかの変更を求めました。","requested several changes","変更を求めました")]),
 meaning("mind","6 考え・方針を変える","change one's mind/approach/policy","考え方・方針・対応方法を変える。","change one's mind は日常にも仕事にも使えます。",[
  ex("The client changed their mind after seeing the sample.","顧客はサンプルを見た後、考えを変えました。","changed their mind","考えを変えました"),ex("We changed our approach after reviewing the results.","結果を確認した後、私たちはアプローチを変えました。","changed our approach","アプローチを変えました"),ex("Management changed the policy last month.","経営陣は先月、方針を変更しました。","changed the policy","方針を変更しました")]),
 meaning("replace","7 交換する・取り替える","change + part/item/battery","部品・道具・資料などを交換する。","replace に近い意味でも使います。",[
  ex("We need to change the damaged part.","破損した部品を交換する必要があります。","change the damaged part","部品を交換する","the damaged part"),ex("Please change the battery before the inspection.","点検前にバッテリーを交換してください。","change the battery","バッテリーを交換して","the battery"),ex("The technician changed the cable during the site visit.","技術者は現場訪問中にケーブルを交換しました。","changed the cable","ケーブルを交換しました","the cable")]),
 meaning("process","8 手順・仕組みを改善する方向で変える","change + process/system/way","業務のやり方や仕組みを変える。","change the process は業務改善で使いやすい表現です。",[
  ex("We changed the process to reduce mistakes.","ミスを減らすために手順を変更しました。","changed the process","手順を変更しました","the process"),ex("The company changed the system to save time.","会社は時間を節約するためにシステムを変更しました。","changed the system","システムを変更しました","the system"),ex("Please change the way we share updates.","進捗共有の方法を変えてください。","change the way","方法を変えて","the way")])],
"collocations":[
 item("change the schedule","スケジュールを変更する","予定や日程を変える。","change the schedule",[ex("We need to change the schedule because of the delay.","遅延のためスケジュールを変更する必要があります。","change the schedule","スケジュールを変更する"),ex("Please change the schedule before sending the invitation.","招待を送る前にスケジュールを変更してください。","change the schedule","スケジュールを変更して"),ex("The client changed the schedule at the last minute.","顧客は直前にスケジュールを変更しました。","changed the schedule","スケジュールを変更しました")]),
 item("change the design","デザインを変更する","見た目や仕様を変える。","change the design",[ex("The client asked us to change the design.","顧客はデザインを変更するよう依頼しました。","change the design","デザインを変更する"),ex("We changed the design to make it easier to read.","見やすくするためにデザインを変更しました。","changed the design","デザインを変更しました"),ex("Please change the design before the final review.","最終レビュー前にデザインを変更してください。","change the design","デザインを変更して")]),
 item("change the details","詳細を変更する","細かい条件や内容を変える。","change the details",[ex("We changed the details after the client call.","顧客との電話後に詳細を変更しました。","changed the details","詳細を変更しました"),ex("Please change the details in the proposal.","提案書の詳細を変更してください。","change the details","詳細を変更して"),ex("The team changed the details to match the new request.","チームは新しい依頼に合わせて詳細を変更しました。","changed the details","詳細を変更しました")]),
 item("change one's mind","考えを変える","一度決めた考えを変える。","change one's mind",[ex("The client changed their mind about the color.","顧客は色について考えを変えました。","changed their mind","考えを変えました"),ex("I changed my mind after checking the cost.","費用を確認した後、考えを変えました。","changed my mind","考えを変えました"),ex("Management may change their mind after the report.","報告後に経営陣が考えを変えるかもしれません。","change their mind","考えを変える")]),
 item("make a change","変更を加える","一部を修正・変更する。","make a change",[ex("We need to make a change to the quote.","見積に変更を加える必要があります。","make a change","変更を加える"),ex("Please make a small change to the layout.","レイアウトに小さな変更を加えてください。","make a small change","小さな変更を加えて"),ex("The customer asked us to make a change before production.","顧客は製作前に変更を加えるよう依頼しました。","make a change","変更を加える")])],
"phrasalVerbs":[
 item("change into","〜に変わる・着替える","別の形・状態になる。","change into + 名詞",[ex("The rough idea changed into a clear proposal.","大まかな案が明確な提案に変わりました。","changed into","提案に変わりました"),ex("The meeting changed into a discussion about cost.","会議は費用についての議論に変わりました。","changed into","議論に変わりました"),ex("The old process changed into a simpler workflow.","古い手順がよりシンプルな流れに変わりました。","changed into","流れに変わりました")]),
 item("change from A to B","AからBに変える","変更前と変更後をはっきり示す。","change from A to B",[ex("We changed the meeting from Tuesday to Thursday.","会議を火曜日から木曜日に変更しました。","changed from Tuesday to Thursday","火曜日から木曜日に変更しました"),ex("Please change the color from red to blue.","色を赤から青に変更してください。","change from red to blue","赤から青に変更して"),ex("The plan changed from online to in-person.","計画はオンラインから対面に変更されました。","changed from online to in-person","オンラインから対面に変更されました")]),
 item("change over","切り替える","別のシステム・方法へ移行する。","change over to + 名詞",[ex("We changed over to the new system last month.","先月、新しいシステムに切り替えました。","changed over to","切り替えました"),ex("The team will change over to a new workflow.","チームは新しい業務フローに切り替える予定です。","change over to","切り替える"),ex("Please prepare before we change over to the new format.","新しい形式に切り替える前に準備してください。","change over to","切り替える")]),
 item("change back","元に戻す","以前の状態へ戻す。","change back",[ex("We changed back to the original layout.","元のレイアウトに戻しました。","changed back","元に戻しました"),ex("The client asked us to change back to the old design.","顧客は以前のデザインに戻すよう依頼しました。","change back","戻す"),ex("Please change the setting back after the test.","テスト後に設定を元に戻してください。","change back","元に戻して")]),
 item("change around","配置を変える・入れ替える","順番や配置を変える。","change around + 名詞",[ex("We changed around the order of the slides.","スライドの順番を入れ替えました。","changed around","順番を入れ替えました"),ex("Please change around the seating for the meeting.","会議用に席の配置を変えてください。","change around","配置を変えて"),ex("The team changed around the schedule to fit the deadline.","チームは締切に合わせてスケジュールを組み替えました。","changed around","組み替えました")])]
}

def replace_arrays(obj_text, coll, ph):
    obj=json.loads(obj_text)
    obj['collocations']=coll
    obj['phrasalVerbs']=ph
    return json.dumps(obj, ensure_ascii=False, indent=2)

# Hold
s,e,sub=find_top(text,'hold',34)
text=text[:s]+replace_arrays(sub,hold_coll,hold_ph)+text[e:]
# Set
s,e,sub=find_top(text,'set',35)
text=text[:s]+replace_arrays(sub,set_coll,set_ph)+text[e:]
# Change entire top level
s,e,sub=find_top(text,'change',36)
text=text[:s]+json.dumps(change, ensure_ascii=False, indent=2)+text[e:]
p.write_text(text)
