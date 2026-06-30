from pathlib import Path
import json
p=Path('/mnt/data/v96work/lib/data.ts')
s=p.read_text()

def find_obj(s, idval):
    marker=f'"id": "{idval}"'
    idx=s.find(marker)
    if idx<0: raise ValueError(idval)
    # find start brace before marker
    start=s.rfind('{',0,idx)
    # move to enclosing object start: this should be current if marker at first field
    # balance from start
    depth=0; in_str=False; esc=False
    for i in range(start,len(s)):
        c=s[i]
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
                    end=i+1
                    return start,end
    raise ValueError('no end')

def ex(en, ja, focus=None, jaFocus=None, obj=None):
    d={"en":en,"ja":ja}
    if focus: d["focus"]=focus
    if jaFocus: d["jaFocus"]=jaFocus
    if obj: d["object"]=obj
    return d

def meaning(id,title,pattern,image,point,examples):
    return {"id":id,"title":title,"pattern":pattern,"transitivity":"他動詞・自動詞","structure":"仕事で使う自然なパターン","image":image,"point":point,"examples":examples,"dailyExamples":[]}

def coll(phrase,ja,image,pattern,examples):
    return {"phrase":phrase,"ja":ja,"image":image,"pattern":pattern,"examples":examples,"dailyExamples":[]}

def verb_build():
    return {
"id":"build","rank":40,"word":"BUILD","ipa":"","kana":"ビルド","syllable":"build","transitivity":"他動詞","importance":"★★★★☆ 基本","core":"少しずつ積み上げて作る・築く","coreDetail":"BUILDは、建物や仕組みだけでなく、信頼・関係・体制・習慣を時間をかけて積み上げる動詞です。仕事では build trust, build a system, build a relationship が特に重要です。","coreVisual":{"from":["🧱 部品","📋 仕組み","🤝 信頼","👥 関係"],"to":"積み上げて形にする","label":"コアイメージ"},
"meanings":[
meaning("create-structure","1 仕組み・体制を作る","build + system/process/team","部品を組み合わせて、仕事が回る形にする。","build は単に作るだけでなく、使える状態まで作り上げる感覚があります。",[
ex("We need to build a better sales process.","私たちはより良い営業プロセスを作る必要があります。","build a better sales process","営業プロセスを作る","a better sales process"),
ex("The team built a new ordering system.","チームは新しい発注システムを構築しました。","built a new ordering system","発注システムを構築しました","a new ordering system"),
ex("She built a simple checklist for new staff.","彼女は新人向けの簡単なチェックリストを作りました。","built a checklist","チェックリストを作りました","a simple checklist")]),
meaning("build-trust","2 信頼・関係を築く","build trust / build a relationship","時間をかけて信頼を積み上げる。","build trust は営業・顧客対応で非常に自然な表現です。",[
ex("Good support builds trust with clients.","良いサポートは顧客との信頼を築きます。","builds trust","信頼を築きます","trust"),
ex("We should build a stronger relationship with this client.","私たちはこの顧客とより強い関係を築くべきです。","build a stronger relationship","より強い関係を築く","a stronger relationship"),
ex("Regular updates helped us build trust.","定期的な報告が信頼構築に役立ちました。","build trust","信頼構築","trust")]),
meaning("build-on","3 土台の上に発展させる","build on + 名詞","既にある成果や考えを土台にして伸ばす。","build on は、既存の実績・案・関係を活かして次に進む時に使います。",[
ex("We can build on last year's results.","私たちは昨年の結果を土台に発展させることができます。","build on","土台に発展させる","last year's results"),
ex("Let's build on the client's feedback.","顧客の意見をもとにさらに改善しましょう。","build on the feedback","意見をもとに改善する","the client's feedback"),
ex("The new proposal builds on the original idea.","新しい提案は元の案を発展させたものです。","builds on","発展させた","the original idea")]),
meaning("build-into","4 組み込む・取り入れる","build A into B","機能や条件を仕組みの中に入れる。","build into は、ルール・機能・確認項目を仕組みに組み込む時に便利です。",[
ex("We built the approval step into the process.","私たちは承認ステップをそのプロセスに組み込みました。","built into","組み込みました","the approval step"),
ex("The system has a reminder built into it.","そのシステムにはリマインダー機能が組み込まれています。","built into","組み込まれています","a reminder"),
ex("Please build this check into the workflow.","この確認を業務フローに組み込んでください。","build into","組み込んで","this check")]),
meaning("build-up","5 徐々に増やす・強化する","build up + 名詞","少しずつ量・力・実績を増やす。","build up は、実績・経験・在庫・チーム力などを徐々に増やす時に使います。",[
ex("We need to build up our project experience.","私たちは案件経験を積み上げる必要があります。","build up","積み上げる","our project experience"),
ex("The company is building up its technical support team.","その会社は技術サポートチームを強化しています。","building up","強化しています","its technical support team"),
ex("We built up enough stock before the busy season.","繁忙期の前に十分な在庫を確保しました。","built up","確保しました","enough stock")]),
meaning("be-built-for","6 〜向けに作られている","be built for + 名詞","目的に合わせて設計されている。","be built for は、商品・機能・仕組みの特徴説明に使いやすい形です。",[
ex("This app is built for busy workers.","このアプリは忙しい社会人向けに作られています。","is built for","向けに作られています","busy workers"),
ex("The product is built for outdoor use.","その製品は屋外使用向けに作られています。","is built for","向けに作られています","outdoor use"),
ex("This process is built for small teams.","このプロセスは少人数チーム向けに作られています。","is built for","向けに作られています","small teams")])],
"collocations":[
coll("build trust","信頼を築く","対応を積み重ねて信頼を作る","build trust",[ex("Quick replies help build trust.","素早い返信は信頼構築に役立ちます。","build trust","信頼構築"),ex("We built trust by sharing clear updates.","明確な進捗共有によって信頼を築きました。","built trust","信頼を築きました"),ex("It takes time to build trust with a new client.","新規顧客と信頼を築くには時間がかかります。","build trust","信頼を築く")]),
coll("build a relationship","関係を築く","相手との関係を時間をかけて作る","build a relationship",[ex("We want to build a long-term relationship.","長期的な関係を築きたいです。","build a long-term relationship","長期的な関係を築きたい"),ex("Regular visits helped us build a relationship.","定期訪問が関係構築に役立ちました。","build a relationship","関係構築"),ex("He built a strong relationship with the supplier.","彼は仕入先と強い関係を築きました。","built a strong relationship","強い関係を築きました")]),
coll("build a system","仕組みを作る","継続して使える仕組みを作る","build a system",[ex("We built a system to track orders.","発注を追跡する仕組みを作りました。","built a system","仕組みを作りました"),ex("The team needs to build a better system.","チームはより良い仕組みを作る必要があります。","build a better system","より良い仕組みを作る"),ex("This tool helps us build a simple system.","このツールは簡単な仕組み作りに役立ちます。","build a simple system","簡単な仕組み作り")]),
coll("build a team","チームを作る・育てる","人を集めて機能するチームにする","build a team",[ex("She built a small support team.","彼女は小さなサポートチームを作りました。","built a support team","サポートチームを作りました"),ex("We need to build a team for this project.","この案件用のチームを作る必要があります。","build a team","チームを作る"),ex("Good training helps build a stronger team.","良い研修はより強いチーム作りに役立ちます。","build a stronger team","強いチーム作り")]),
coll("build momentum","勢いを作る","良い流れを少しずつ強くする","build momentum",[ex("The campaign started to build momentum.","そのキャンペーンは勢いを増し始めました。","build momentum","勢いを増し"),ex("Early results helped us build momentum.","初期結果が勢い作りに役立ちました。","build momentum","勢い作り"),ex("We need to build momentum before the launch.","発売前に勢いを作る必要があります。","build momentum","勢いを作る")])],
"phrasalVerbs":[
coll("build up","徐々に増やす・強める","積み上げて増やす","build up + 名詞",[ex("We built up enough data for the report.","報告書に十分なデータを蓄積しました。","built up","蓄積しました"),ex("The team is building up product knowledge.","チームは商品知識を蓄積しています。","building up","蓄積しています"),ex("We need to build up confidence before the presentation.","発表前に自信をつける必要があります。","build up","自信をつける")]),
coll("build on","〜を土台にする","既存のものを活かして発展させる","build on + 名詞",[ex("Let's build on the previous proposal.","前回の提案を土台に進めましょう。","build on","土台に進め"),ex("We can build on this success.","この成功をもとにさらに進められます。","build on","もとに進め"),ex("The new plan builds on customer feedback.","新しい計画は顧客の意見を土台にしています。","builds on","土台にしています")]),
coll("build into","〜に組み込む","機能や手順を中に入れる","build A into B",[ex("We built a review step into the process.","レビュー手順をプロセスに組み込みました。","built into","組み込みました"),ex("Please build this rule into the system.","このルールをシステムに組み込んでください。","build into","組み込んで"),ex("The reminder is built into the app.","リマインダーはアプリに組み込まれています。","built into","組み込まれています")]),
coll("build around","〜を中心に作る","中心となる要素に合わせて設計する","build around + 名詞",[ex("We built the plan around the client's budget.","顧客の予算を中心に計画を作りました。","built around","中心に作りました"),ex("The proposal is built around ease of maintenance.","その提案はメンテナンス性を中心に作られています。","built around","中心に作られています"),ex("Let's build the presentation around three key points.","3つの重要点を中心にプレゼンを作りましょう。","build around","中心に作りましょう")]),
coll("build in","あらかじめ入れる・組み込む","最初から機能や余裕を入れる","build in + 名詞",[ex("We built in extra time for testing.","テスト用に余裕時間を入れました。","built in","余裕時間を入れました"),ex("Please build in a safety check.","安全確認を組み込んでください。","build in","組み込んで"),ex("The estimate builds in delivery costs.","その見積には配送費が含まれています。","builds in","含まれています")])]
}

def verb_learn():
    return {
"id":"learn","rank":41,"word":"LEARN","ipa":"","kana":"ラーン","syllable":"learn","transitivity":"他動詞・自動詞","importance":"★★★★★ 基本","core":"知らないことを理解して使えるようにする","coreDetail":"LEARNは、知識を知るだけでなく、方法・手順・経験を身につけて次に使える状態にする動詞です。仕事では learn how to, learn from, learn about が重要です。","coreVisual":{"from":["❓ 不明点","📘 知識","🛠 手順","📈 経験"],"to":"使える状態","label":"コアイメージ"},
"meanings":[
meaning("learn-how-to","1 〜する方法を学ぶ","learn how to + 動詞","やり方を身につける。","learn how to は、操作・手順・業務を覚える時の基本形です。",[
ex("I learned how to use the new system.","私は新しいシステムの使い方を学びました。","learned how to use","使い方を学びました","how to use the new system"),
ex("New staff need to learn how to enter orders.","新人は発注入力の方法を覚える必要があります。","learn how to enter","入力方法を覚える","how to enter orders"),
ex("We learned how to handle this issue.","私たちはこの問題への対応方法を学びました。","learned how to handle","対応方法を学びました","how to handle this issue")]),
meaning("learn-about","2 〜について学ぶ・知る","learn about + 名詞","対象について知識を得る。","learn about は商品・顧客・市場・ルールについて学ぶ時に自然です。",[
ex("We learned about the client's new requirements.","私たちは顧客の新しい要件について知りました。","learned about","要件について知りました","the client's new requirements"),
ex("I need to learn about this product before the meeting.","会議前にこの商品のことを学ぶ必要があります。","learn about","商品のことを学ぶ","this product"),
ex("The team learned about the new safety rules.","チームは新しい安全ルールについて学びました。","learned about","安全ルールについて学びました","the new safety rules")]),
meaning("learn-from","3 〜から学ぶ","learn from + 名詞/経験","経験や相手から教訓を得る。","learn from は失敗・フィードバック・経験から改善する時に使います。",[
ex("We learned from the customer's feedback.","私たちは顧客の意見から学びました。","learned from","意見から学びました","the customer's feedback"),
ex("The team learned from the mistake and changed the process.","チームはそのミスから学び、手順を変えました。","learned from the mistake","ミスから学び","the mistake"),
ex("I learned a lot from my manager.","私は上司から多くを学びました。","learned from","上司から学びました","my manager")]),
meaning("learn-that","4 〜だと分かる","learn that + 文","新しい事実を知る。","learn that は、報告・連絡で新しい事実が分かった時に使えます。",[
ex("We learned that the delivery will be delayed.","私たちは納品が遅れることを知りました。","learned that","遅れることを知りました","that the delivery will be delayed"),
ex("I learned that the customer changed the schedule.","顧客が予定を変更したことを知りました。","learned that","変更したことを知りました","that the customer changed the schedule"),
ex("They learned that the issue was caused by the setting.","彼らはその問題が設定によるものだと分かりました。","learned that","分かりました","that the issue was caused by the setting")]),
meaning("learn-skill","5 技術・知識を身につける","learn + skill/process/product","知識や技能を使える状態にする。","learn a skill/process は研修や新人教育で使いやすい形です。",[
ex("New members must learn the basic process first.","新しいメンバーはまず基本手順を覚える必要があります。","learn the basic process","基本手順を覚える","the basic process"),
ex("She learned the product details quickly.","彼女は商品詳細をすぐに覚えました。","learned the product details","商品詳細を覚えました","the product details"),
ex("We need to learn basic troubleshooting.","私たちは基本的なトラブル対応を身につける必要があります。","learn troubleshooting","トラブル対応を身につける","basic troubleshooting")]),
meaning("learn-by-doing","6 実践しながら学ぶ","learn by + 動詞ing","実際にやって身につける。","learn by doing は、座学ではなく実務で覚える時に便利です。",[
ex("You can learn by handling real customer cases.","実際の顧客案件を対応しながら学べます。","learn by handling","対応しながら学べます","real customer cases"),
ex("We learned by testing the product ourselves.","私たちは自分たちで製品を試しながら学びました。","learned by testing","試しながら学びました","the product"),
ex("New staff learn by joining site visits.","新人は現場訪問に同行しながら学びます。","learn by joining","同行しながら学びます","site visits")])],
"collocations":[
coll("learn the basics","基礎を学ぶ","最初に必要な土台を身につける","learn the basics",[ex("Please learn the basics before visiting clients.","顧客訪問前に基礎を学んでください。","learn the basics","基礎を学んで"),ex("New staff learned the basics in training.","新人は研修で基礎を学びました。","learned the basics","基礎を学びました"),ex("We should learn the basics of this system.","このシステムの基礎を学ぶべきです。","learn the basics","基礎を学ぶ")]),
coll("learn a lesson","教訓を得る","失敗や経験から学ぶ","learn a lesson",[ex("We learned a lesson from the delay.","私たちはその遅延から教訓を得ました。","learned a lesson","教訓を得ました"),ex("The team learned an important lesson.","チームは重要な教訓を得ました。","learned a lesson","教訓を得ました"),ex("Let's learn a lesson and improve the process.","教訓を得て手順を改善しましょう。","learn a lesson","教訓を得て")]),
coll("learn the hard way","苦労して学ぶ","失敗や苦労を通じて学ぶ","learn the hard way",[ex("We learned the hard way that checks are necessary.","確認が必要だと苦労して学びました。","learned the hard way","苦労して学びました"),ex("He learned the hard way after missing the deadline.","彼は締切に遅れて痛い経験から学びました。","learned the hard way","痛い経験から学びました"),ex("The company learned the hard way about quality control.","その会社は品質管理の重要性を苦労して学びました。","learned the hard way","苦労して学びました")]),
coll("learn quickly","早く覚える","短期間で身につける","learn quickly",[ex("She learns new tools quickly.","彼女は新しいツールをすぐに覚えます。","learns quickly","すぐに覚えます"),ex("We need someone who can learn quickly.","早く覚えられる人が必要です。","learn quickly","早く覚えられる"),ex("The new staff learned quickly during training.","新人は研修中にすぐ覚えました。","learned quickly","すぐ覚えました")]),
coll("learn from experience","経験から学ぶ","実務経験から改善点を得る","learn from experience",[ex("We learned from experience that early checks are important.","早めの確認が重要だと経験から学びました。","learned from experience","経験から学びました"),ex("Good salespeople learn from experience.","良い営業担当は経験から学びます。","learn from experience","経験から学びます"),ex("The team learned from experience and changed the rule.","チームは経験から学び、ルールを変えました。","learned from experience","経験から学び")])],
"phrasalVerbs":[
coll("learn about","〜について学ぶ","対象の情報を知る","learn about + 名詞",[ex("We learned about the new product line.","新しい商品ラインについて学びました。","learned about","学びました"),ex("Please learn about the client's industry.","顧客の業界について学んでください。","learn about","学んで"),ex("I learned about the issue from the report.","報告書でその問題について知りました。","learned about","知りました")]),
coll("learn from","〜から学ぶ","相手や経験から知識・教訓を得る","learn from + 名詞",[ex("We learned from the support team.","サポートチームから学びました。","learned from","学びました"),ex("I learned from last month's results.","先月の結果から学びました。","learned from","学びました"),ex("The team learned from customer complaints.","チームは顧客からのクレームから学びました。","learned from","学びました")]),
coll("learn of","〜を知る","ややフォーマルに情報を知る","learn of + 名詞",[ex("We learned of the change this morning.","今朝その変更を知りました。","learned of","知りました"),ex("The manager learned of the issue from the client.","マネージャーは顧客からその問題を知りました。","learned of","知りました"),ex("I learned of the delay after the meeting.","会議後に遅延を知りました。","learned of","知りました")]),
coll("learn by doing","実践で学ぶ","実際にやりながら覚える","learn by doing",[ex("New staff learn by doing actual tasks.","新人は実際の作業をしながら学びます。","learn by doing","作業しながら学びます"),ex("We learned by doing the installation ourselves.","自分たちで施工を行いながら学びました。","learned by doing","行いながら学びました"),ex("This job is best learned by doing.","この仕事は実践で覚えるのが一番です。","learned by doing","実践で覚える")]),
coll("learn to","〜できるようになる","練習してできる状態になる","learn to + 動詞",[ex("I learned to explain the product clearly.","商品を分かりやすく説明できるようになりました。","learned to explain","説明できるように"),ex("New staff must learn to handle calls politely.","新人は丁寧に電話対応できるようになる必要があります。","learn to handle","対応できるようになる"),ex("We learned to check the data before sending it.","送信前にデータを確認するようになりました。","learned to check","確認するように")])]
}

def verb_meet():
    return {
"id":"meet","rank":42,"word":"MEET","ipa":"","kana":"ミート","syllable":"meet","transitivity":"他動詞・自動詞","importance":"★★★★★ 基本","core":"相手・条件・基準と合う地点に到達する","coreDetail":"MEETは、人に会うだけでなく、期限・条件・要望・期待を満たす時にも使います。仕事では meet a client, meet a deadline, meet requirements が重要です。","coreVisual":{"from":["👤 人","📅 期限","✅ 条件","🎯 期待"],"to":"合う地点に到達","label":"コアイメージ"},
"meanings":[
meaning("meet-person","1 人に会う","meet + 人","人と直接会う。","meet は初対面にも予定した面会にも使えます。",[
ex("I met the client at their office yesterday.","私は昨日、顧客の会社でその顧客に会いました。","met the client","顧客に会いました","the client"),
ex("We will meet the supplier next Monday.","私たちは来週月曜日に仕入先と会います。","meet the supplier","仕入先と会います","the supplier"),
ex("She met the project manager after the meeting.","彼女は会議後にプロジェクトマネージャーと会いました。","met the project manager","会いました","the project manager")]),
meaning("meet-deadline","2 期限を守る","meet a deadline","期限に間に合う地点まで到達する。","meet a deadline は「締切を守る」という仕事で必須の表現です。",[
ex("We need to meet the deadline this Friday.","私たちは今週金曜日の締切を守る必要があります。","meet the deadline","締切を守る","the deadline"),
ex("The team met the delivery deadline.","チームは納品期限を守りました。","met the deadline","期限を守りました","the delivery deadline"),
ex("Can we meet the deadline without overtime?","私たちは残業なしで締切に間に合いますか？","meet the deadline","締切に間に合いますか","the deadline")]),
meaning("meet-requirements","3 条件・要件を満たす","meet requirements / standards","求められる基準に合う。","meet requirements は仕様・品質・条件を満たす時に使います。",[
ex("This product meets the customer requirements.","この製品は顧客の要求を満たしています。","meets the requirements","要求を満たしています","the customer requirements"),
ex("The design must meet safety standards.","その設計は安全基準を満たす必要があります。","meet safety standards","安全基準を満たす","safety standards"),
ex("The proposal does not meet the budget requirement.","その提案は予算条件を満たしていません。","meet the requirement","条件を満たしていません","the budget requirement")]),
meaning("meet-expectations","4 期待に応える","meet expectations","期待される水準に届く。","meet expectations は品質・対応・結果の評価で使いやすい表現です。",[
ex("The final result met the client's expectations.","最終結果は顧客の期待に応えました。","met expectations","期待に応えました","the client's expectations"),
ex("Our service must meet customer expectations.","私たちのサービスは顧客の期待に応える必要があります。","meet expectations","期待に応える","customer expectations"),
ex("The first sample did not meet expectations.","最初のサンプルは期待に届きませんでした。","meet expectations","期待に届きませんでした","expectations")]),
meaning("meet-needs","5 ニーズに合う・満たす","meet needs","相手が必要としていることに合う。","meet needs は営業・提案でとても自然です。",[
ex("This plan meets the client's needs.","この案は顧客のニーズに合っています。","meets the needs","ニーズに合っています","the client's needs"),
ex("We should offer a solution that meets their needs.","私たちは相手のニーズに合う解決策を提案すべきです。","meets their needs","ニーズに合う","their needs"),
ex("The current model may not meet their needs.","現行モデルは相手のニーズを満たさないかもしれません。","meet their needs","ニーズを満たさない","their needs")]),
meaning("meet-with","6 会って話す・協議する","meet with + 人/チーム","相手と会って相談する。","meet with はややフォーマルで、会議・打ち合わせに自然です。",[
ex("I will meet with the client tomorrow.","私は明日、顧客と打ち合わせします。","meet with","打ち合わせします","the client"),
ex("We met with the design team to review the plan.","私たちは計画を確認するために設計チームと打ち合わせしました。","met with","打ち合わせしました","the design team"),
ex("The manager needs to meet with the supplier.","マネージャーは仕入先と協議する必要があります。","meet with","協議する","the supplier")])],
"collocations":[
coll("meet a deadline","締切を守る","期限に間に合わせる","meet a deadline",[ex("We met the deadline despite the delay.","遅れがあったにもかかわらず締切を守りました。","met the deadline","締切を守りました"),ex("Please tell me if we cannot meet the deadline.","締切に間に合わない場合は教えてください。","meet the deadline","締切に間に合わない"),ex("Extra support helped us meet the deadline.","追加サポートのおかげで締切に間に合いました。","meet the deadline","締切に間に合いました")]),
coll("meet requirements","要件を満たす","必要条件に合う","meet requirements",[ex("The new design meets all requirements.","新しい設計はすべての要件を満たしています。","meets requirements","要件を満たしています"),ex("This part does not meet our requirements.","この部品は私たちの要件を満たしていません。","meet requirements","要件を満たしていません"),ex("We checked whether the product meets requirements.","製品が要件を満たしているか確認しました。","meets requirements","要件を満たしている")]),
coll("meet expectations","期待に応える","期待される結果に届く","meet expectations",[ex("The service met our expectations.","そのサービスは私たちの期待に応えました。","met expectations","期待に応えました"),ex("The sample did not meet expectations.","そのサンプルは期待に届きませんでした。","meet expectations","期待に届きませんでした"),ex("We want to meet the customer's expectations.","顧客の期待に応えたいです。","meet expectations","期待に応えたい")]),
coll("meet a target","目標を達成する","設定した数字・水準に届く","meet a target",[ex("We met our monthly sales target.","月間売上目標を達成しました。","met our target","目標を達成しました"),ex("The team is trying to meet the target.","チームは目標達成を目指しています。","meet the target","目標達成"),ex("We need a clear plan to meet the target.","目標達成には明確な計画が必要です。","meet the target","目標達成")]),
coll("meet someone's needs","ニーズを満たす","相手の必要に合う","meet someone's needs",[ex("This proposal meets the client's needs.","この提案は顧客のニーズを満たしています。","meets the client's needs","ニーズを満たしています"),ex("We should select a product that meets their needs.","相手のニーズに合う商品を選ぶべきです。","meets their needs","ニーズに合う"),ex("The current plan does not meet our needs.","現行案は私たちのニーズを満たしていません。","meet our needs","ニーズを満たしていません")])],
"phrasalVerbs":[
coll("meet with","〜と会う・協議する","相手と会って話す","meet with + 人",[ex("We met with the customer yesterday.","昨日、顧客と打ち合わせしました。","met with","打ち合わせしました"),ex("I need to meet with the supplier this week.","今週、仕入先と協議する必要があります。","meet with","協議する"),ex("The team met with management to discuss the issue.","チームはその問題を話し合うために経営陣と会いました。","met with","会いました")]),
coll("meet up with","〜と会う・合流する","予定して相手と合流する","meet up with + 人",[ex("I will meet up with the sales team at the site.","現場で営業チームと合流します。","meet up with","合流します"),ex("We met up with the installer before the inspection.","検査前に施工担当者と合流しました。","met up with","合流しました"),ex("Can you meet up with the client at the station?","駅で顧客と合流できますか？","meet up with","合流できますか")]),
coll("meet around","〜頃に会う","時間をおおよそ決めて会う","meet around + 時間",[ex("Let's meet around ten at the office.","10時頃にオフィスで会いましょう。","meet around","頃に会いましょう"),ex("We can meet around three after the call.","電話の後、3時頃に会えます。","meet around","頃に会えます"),ex("Please meet around the entrance before the visit.","訪問前に入口付近で集まってください。","meet around","付近で集まって")]),
coll("meet halfway","妥協する・歩み寄る","お互いに中間地点で合意する","meet halfway",[ex("We may need to meet halfway on the price.","価格について歩み寄る必要があるかもしれません。","meet halfway","歩み寄る"),ex("The client agreed to meet us halfway.","顧客は歩み寄ることに同意しました。","meet halfway","歩み寄る"),ex("Let's meet halfway and adjust the schedule.","歩み寄ってスケジュールを調整しましょう。","meet halfway","歩み寄って")]),
coll("meet up","集まる・合流する","複数人が一か所に集まる","meet up",[ex("The team will meet up before the presentation.","チームは発表前に集まります。","meet up","集まります"),ex("We met up at the client's office.","顧客の会社で合流しました。","met up","合流しました"),ex("Let's meet up after the site check.","現場確認後に合流しましょう。","meet up","合流しましょう")])]
}

for idv, obj in [('build',verb_build()),('learn',verb_learn()),('meet',verb_meet())]:
    a,b=find_obj(s,idv)
    new=json.dumps(obj, ensure_ascii=False, indent=2)
    s=s[:a]+new+s[b:]

p.write_text(s)
Path('/mnt/data/v96work/VERSION_V96.txt').write_text('Ver.96 動詞品質改善 第5弾: build / learn / meet\n')
Path('/mnt/data/v96work/QUALITY_AUDIT_V96.md').write_text('''# QUALITY AUDIT V96\n\n## 対象\n- build\n- learn\n- meet\n\n## 方針\n動詞品質改善は3語ずつ慎重に実施。確認順は、動詞の基本 → 熟語・よく使う表現 → 句動詞 → 日常例文。今回は日常例文は新規修正対象外。\n\n## 実施内容\n- 各動詞のコアイメージを確認\n- 基本用法を5〜6個に整理\n- 熟語・よく使う表現を5個に整理\n- 句動詞・前置詞表現を5個に整理\n- 各項目に仕事例文3つを追加\n- 大文字だけの不自然な表記を避け、自然な英文・日本語訳に調整\n\n## 備考\nPremium日常例文の全面修正は後続工程。\n''')
