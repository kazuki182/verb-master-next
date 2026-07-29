const defaultSupabaseUrl = 'https://dkxrsgtntoucjacfjodv.supabase.co';
const defaultSupabaseAnonKey = 'sb_publishable_JU3ZrSPISBBw4bZrG1W3Hg_anokvuBs';
const authMemoUrl = 'https://talk.worksmobile.com/note/51184563/4080000000133746437';
const quoteToolPath = String.raw`\\192.168.0.200\disk1\営業部\見積書\2026年 見積書\_価格表・見積フォーマット`;
const inventoryFolderPathConst = String.raw`\\192.168.0.200\disk1\アシスタント課\在庫表・日報・データ関連\在庫フォルダ`;

const defaultNews = [
  {id: crypto.randomUUID(), title:'営業ポータル ニュース機能追加', category:'社内', body:'営業ポータルにニュース登録機能を追加しました。LINE WORKS投稿文や社内共有事項を保存し、ホーム検索から探せます。', url:'', sharePath:'', showHome:true, important:false, order:1, active:true, updatedAt:new Date().toISOString()}
];


// 出荷一覧は日々更新されるため、過去の固定出荷データは同梱しない。
const defaultShippingRecords = [];

const defaultLinks = [
  {id:'sign-assembly-calculator', title:'サイン 組み込み自動計算', category:'見積', description:'製品・組み込み費・簡易電源盤・梱包送料をまとめて概算します。PC・スマホ対応。', url:'#sign-assembly-calc', memoUrl:'', sharePath:'', order:0, active:true},
  {id:'aut-assembly-calculator', title:'AUT 組み込み自動計算', category:'見積', description:'AUT専用LEDパネルのモジュール・組み込み費・品番・梱包送料を概算します。', url:'#aut-assembly-calc', memoUrl:'', sharePath:'', order:0.1, active:true},
  {id: crypto.randomUUID(), title:'行灯自動計算', category:'自動作図', description:'行灯・四角形サイン向けの自動配置/自動計算ツール。ログイン情報はLINE WORKSノートを確認。', url:'https://www.aristo-japan.co.jp/autodrawing_rect/autodrawing_rect_menu.php', memoUrl:authMemoUrl, sharePath:'', order:1, active:true},
  {id: crypto.randomUUID(), title:'照度分布図自動シミュレーションソフト', category:'自動作図', description:'照度分布図用の自動シミュレーションツール。ログイン情報はLINE WORKSノートを確認。', url:'https://www.aristo-japan.co.jp/autodrawing_contour/autodrawing_contour_menu.php', memoUrl:authMemoUrl, sharePath:'', order:2, active:true},
  {id: crypto.randomUUID(), title:'ルーファス簡易計算', category:'計算ツール', description:'リディアワークスのファブリックサイン LUFAS（ルーファス）の概算算出。W/H・分割数を入力してフレーム価格を確認します。', url:'#lufas-calc', memoUrl:'', sharePath:'', order:3.5, active:true},
  {id: crypto.randomUUID(), title:'自社製品 容量計算', category:'計算ツール', description:'自社LEDモジュールの数量から消費電力・VA・100V/200V電流値を簡易計算します。SMS/メール送信にも対応。', url:'#self-capacity-calc', memoUrl:'', sharePath:'', order:3.6, active:true},
  {id: crypto.randomUUID(), title:'シームレス系製品 概算算出', category:'計算ツール', description:'アリストジャパン既存のシームレス系製品概算算出ページを開きます。', url:'https://aristo-japan.co.jp/linear_appxest/linear_appxest_250715.html', memoUrl:'', sharePath:'', order:3.64, active:true},
  {id: crypto.randomUUID(), title:'シームレスビーム 概算数量計算（ポータル版）', category:'計算ツール', description:'設置距離からシームレス系製品・電源・調光機器・オプション品を概算し、見積もりフォーマットへコピーします。', url:'#linear-estimate', memoUrl:'', sharePath:'', order:3.65, active:true},
  {id: crypto.randomUUID(), title:'グローチューブⅥ 概算数量計算', category:'計算ツール', description:'設置距離からグローチューブⅥ・TN・RGBの数量、消費電力、電源・調光機器を概算します。', url:'#glow-estimate', memoUrl:'', sharePath:'', order:3.66, active:true},
  {id: crypto.randomUUID(), title:'図面読取・見積作成', category:'営業ツール', description:'照明位置図PDFから製品・数量・電源などを抽出し、SB概算反映用の内容を作成します。', url:'#drawing-reader', memoUrl:'', sharePath:'', order:3.7, active:true},
  {id: crypto.randomUUID(), title:'図面台帳', category:'図面管理', description:'図面台帳ログインページ。第一認証・第二認証のログイン情報はLINE WORKSノートを確認。', url:'http://aristo-japan.com/drawing/drawing_login.php', memoUrl:authMemoUrl, sharePath:'', order:4, active:true},
  {id: crypto.randomUUID(), title:'Salesforce', category:'営業管理', description:'顧客・案件管理を開きます。', url:'https://d2w00000klug5ead.lightning.force.com/lightning/o/Account/list?filterName=00B2w00000PQ3yGEAT', memoUrl:'', sharePath:'', order:5, active:true},
  {id: crypto.randomUUID(), title:'LINE WORKS', category:'社内メモ', description:'ログイン情報・社内メモ確認用。', url:'https://talk.worksmobile.com/#/', memoUrl:authMemoUrl, sharePath:'', order:6, active:true},
  {id: crypto.randomUUID(), title:'トレロ', category:'タスク管理', description:'施工実績管理用のTrelloボードを開きます。', url:'https://trello.com/b/BbAeq040/%E6%96%BD%E5%B7%A5%E5%AE%9F%E7%B8%BE', memoUrl:'', sharePath:'', order:7, active:true},
  {id: crypto.randomUUID(), title:'見積作成ツール', category:'見積', description:'見積書フォーマット・価格表の共有フォルダです。Explorerコマンドコピー後、Windowsキー+R→Ctrl+V→Enterで開きます。', url:'', memoUrl:'', sharePath:quoteToolPath, order:8, active:true}
];

const defaultTemplates = [
  {id: crypto.randomUUID(), category:"見積送付", audience:"社外向け", subject:"お見積書送付の件", body:"〇〇様\n\nいつも大変お世話になっております。\nアリストジャパンの渡辺です。\n\n本件、お見積書を添付にてお送りいたします。\nご確認のほどよろしくお願いいたします。\n\n引き続きよろしくお願いいたします。", memo:"見積書を送る時の基本文。", order:1, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), category:"在庫回答", audience:"社外向け", subject:"在庫状況のご連絡", body:"〇〇様\n\nいつも大変お世話になっております。\nアリストジャパンの渡辺です。\n\nお問い合わせいただきました製品の在庫状況について、下記の通りご連絡いたします。\n\n品番：\n在庫状況：\n\nご確認のほどよろしくお願いいたします。", memo:"在庫確認後の回答用。", order:2, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), category:"納期回答", audience:"社外向け", subject:"納期のご連絡", body:"〇〇様\n\nいつも大変お世話になっております。\nアリストジャパンの渡辺です。\n\nお問い合わせいただきました件、納期は下記の予定です。\n\n納期：\n\n正式なご注文後、改めて確認いたします。\nよろしくお願いいたします。", memo:"概算納期を伝える時。", order:3, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), category:"価格改定", audience:"社外向け", subject:"価格改定のご案内", body:"○○株式会社\n○○様\n\nいつも大変お世話になっております。\nアリストジャパンの渡辺です。\n\n平素より弊社製品をご愛顧いただき、誠にありがとうございます。\n\nこのたび、原材料価格や物流費等の高騰に伴い、誠に不本意ではございますが、弊社一部製品の価格を改定させていただくこととなりました。\n\n価格改定の詳細につきましては、添付資料をご確認いただけますと幸いです。\n\n今後も品質・サービスの向上に努め、お客様にご満足いただける製品をご提供できるよう努めてまいりますので、何卒ご理解賜りますようお願い申し上げます。\n\nご不明な点などございましたら、お気軽にお問い合わせください。\n\nお忙しいところ恐縮ですが、ご確認のほどよろしくお願いいたします。\n\nアリストジャパン株式会社\n営業部　渡辺", memo:"値上げ案内（価格確定）。新価格・対象製品が確定し、添付資料を送る場合。", order:6, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), category:"価格改定", audience:"社外向け", subject:"価格改定予定のお知らせ", body:"○○株式会社\n○○様\n\nいつも大変お世話になっております。\nアリストジャパンの渡辺です。\n\n平素より弊社製品をご愛顧いただき、誠にありがとうございます。\n\nこのたび、原材料価格や物流費等の高騰に伴い、一部製品の価格改定を予定しております。\n\n現在、対象製品および新価格について最終調整を進めております。\n\n詳細が確定次第、改めてご案内いたしますので、誠に恐縮ではございますが、今しばらくお時間をいただけますようお願い申し上げます。\n\n何卒ご理解賜りますようお願い申し上げます。\n\nアリストジャパン株式会社\n営業部　渡辺", memo:"値上げ案内（価格未確定）。対象製品・新価格が未確定の場合。", order:7, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), category:"訪問後フォロー", audience:"社外向け", subject:"ご訪問のお礼", body:"○○株式会社\n○○様\n\nいつも大変お世話になっております。\nアリストジャパンの渡辺です。\n\n本日はお忙しい中、貴重なお時間をいただき誠にありがとうございました。\n\n貴重なお話をお聞かせいただき、大変勉強になりました。\n\n今後は私、渡辺が担当させていただきますので、どうぞよろしくお願いいたします。\n\n新製品やお役に立てる情報がございましたら、改めてご訪問のうえご案内させていただければと思います。\n\nLEDに関するご相談やお困りごとなどございましたら、お気軽にお声掛けください。少しでもお力になれるよう努めてまいります。\n\n引き続き、何卒よろしくお願いいたします。\n\nアリストジャパン\n渡辺", memo:"訪問のお礼（引継ぎ編）。担当引継ぎ後、初回訪問したお客様へのお礼。", order:8, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), category:"納期・欠品対応", audience:"社外向け", subject:"製品欠品のお詫び", body:"○○株式会社\n○○様\n\nいつも大変お世話になっております。\nアリストジャパンの渡辺です。\n\n平素より弊社製品をご愛顧いただき、誠にありがとうございます。\n\nこの度は、ご注文（またはお問い合わせ）いただきました製品につきまして、現在欠品しており、ご希望の納期でご用意することができません。\n\nご迷惑をお掛けし、誠に申し訳ございません。\n\n現在、入荷に向けて手配を進めておりますので、入荷時期が分かり次第、改めてご連絡させていただきます。\n\n何卒ご理解賜りますようお願い申し上げます。", memo:"欠品のお詫び（基本）。注文品・問い合わせ品が欠品している場合。", order:9, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), category:"納期・欠品対応", audience:"社外向け", subject:"納期遅延のお詫び", body:"○○株式会社\n○○様\n\nいつも大変お世話になっております。\nアリストジャパンの渡辺です。\n\nご注文いただいております製品につきまして、当初ご案内しておりました納期より遅れる見込みとなりました。\n\nご迷惑をお掛けしておりますこと、心よりお詫び申し上げます。\n\n現在、納期短縮に向けて調整を進めておりますので、進捗が分かり次第ご報告させていただきます。\n\n誠に恐縮ではございますが、ご理解賜りますようお願い申し上げます。", memo:"すでに案内済みの納期から遅れる見込みの場合。", order:10, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), category:"納期・欠品対応", audience:"社外向け", subject:"納期のご回答", body:"○○株式会社\n○○様\n\nいつも大変お世話になっております。\nアリストジャパンの渡辺です。\n\nお問い合わせいただきました製品につきまして、現在の納期は〇月〇日頃を予定しております。\n\nお待たせしてしまい申し訳ございません。\n\n製品が入荷次第、速やかに出荷させていただきます。\n\n何卒よろしくお願いいたします。", memo:"問い合わせ製品の納期目安を回答する場合。", order:11, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), category:"問い合わせ対応", audience:"社外向け", subject:"お問い合わせありがとうございます", body:"○○株式会社\n○○様\n\nいつもお世話になっております。\nアリストジャパンの渡辺です。\n\nこの度はお問い合わせいただき、誠にありがとうございます。\nまた、ご連絡が遅くなり申し訳ございませんでした。\n\n弊社製品につきましては、代理店様を通じてご提案・販売をさせていただいております。\n\nお手数をお掛けいたしますが、下記代理店までお問い合わせいただけますと幸いです。\n\n【代理店①】\n会社名：○○○○\n担当：○○様\nTEL：○○○-○○○-○○○○\n\n【代理店②】\n会社名：○○○○\nTEL：○○○-○○○-○○○○\n\nご不明な点やご質問などございましたら、お気軽にお問い合わせください。\n\nお忙しいところ恐縮ですが、何卒よろしくお願いいたします。\n\nアリストジャパン\n渡辺", memo:"代理店案内メール。直接問い合わせが来た際に代理店経由を案内。", order:12, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), category:"問い合わせ対応", audience:"社外向け", subject:"代替品のご案内", body:"○○株式会社\n○○様\n\nいつも大変お世話になっております。\nアリストジャパンの渡辺です。\n\nこの度はお問い合わせいただき、誠にありがとうございます。\n\nお問い合わせいただきました製品につきましては、誠に恐縮ですが、現在廃盤となっております。\n\n代替品として、下記製品をご提案させていただきます。\n\n○○○○\n○○○○\n\n併せて製品資料を添付いたしますので、ご確認いただけますと幸いです。\n\nサンプルのお貸し出しも可能ですので、ご希望の際はお気軽にお申し付けください。\n\nご不明な点などございましたら、お気軽にお問い合わせください。\n\nお忙しいところ恐縮ですが、ご確認のほどよろしくお願いいたします。\n\nアリストジャパン\n渡辺", memo:"廃盤品・代替品案内。問い合わせ製品が廃盤で代替品を提案する場合。", order:13, active:true, updatedAt:new Date().toISOString()},

  {id: crypto.randomUUID(), category:"LINE WORKS", audience:"社内向け", subject:"遅延連絡", body:"@All  おはようございます。\n電車遅延のため10分程度遅れます。申し訳ありませんがよろしくお願いいたします。", memo:"LINE WORKS投稿用。電車遅延などで少し遅れる時。", order:101, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), category:"LINE WORKS", audience:"社内向け", subject:"ショールーム来社", body:"本日　10時半 ショールーム\nオガワ2名来社　お茶不要", memo:"LINE WORKS投稿用。ショールーム来社予定の共有。", order:102, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), category:"LINE WORKS", audience:"社内向け", subject:"休み連絡", body:"@All 明日7/14お休みをいただきます。\n忙しい中恐れ入りますがよろしくお願い致します。", memo:"LINE WORKS投稿用。休暇連絡。日付は必要に応じて編集。", order:103, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), category:"LINE WORKS", audience:"社内向け", subject:"送別会アンケート", body:"@All  お疲れ様です。\n急ですが7/17(金)に藤原さんの送別会を予定しております。\nアンケートにて出欠回答をお願い致します。\n時間が無く申し訳ございませんが、期限は本日17時までとさせていただきますm(__)m", memo:"LINE WORKS投稿用。送別会アンケート案内。", order:104, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), category:"LINE WORKS", audience:"社内向け", subject:"歓迎会案内", body:"お疲れ様です。\n6/25(木)18時頃より、堀井さんの歓迎会を行います。\n出欠席を6/10(水)17:00までににご回答いただければと思います。\n店は人数確定次第決めますが、場所は人形町駅周辺です。\nご確認のほど、よろしくお願いいたします。", memo:"LINE WORKS投稿用。歓迎会の出欠確認。", order:105, active:true, updatedAt:new Date().toISOString()},
];

const defaultDocs = [
  {id: 'doc-customer-handover-list-260724', title:'顧客担当引継ぎ一覧', category:'社内資料', summary:'顧客ごとのSF番号、取引先名、都道府県、現営業・新営業、アシスタント、締め日、種別、引継内容をまとめた社内用一覧。検索: 顧客担当引継ぎ一覧 担当一覧 引継ぎ 引き継ぎ 営業担当 アシスタント SF番号 取引先', storageType:'PDF', url:'docs/customer-handover-list-260724.pdf', sharePath:'', owner:'営業部', confidentiality:'社内用', status:'有効', order:1, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'LEDモジュール ピッチと発生熱', category:'社内検証', summary:'LEDモジュールの製品ピッチと発生熱の社内検証資料。外気温35℃想定で補正し、周囲温度50℃・製品温度80℃（PMMA）/120℃（PC）を超えない条件を確認。P=80mm以下はNG、P=100〜120mmは設置環境に注意。検索: LEDモジュール ピッチ 発生熱 熱 温度 PTW5 CV-S PTW5 CV-E SL3 PTW4CC PTW4CV-H 内照看板 営業会議', storageType:'PDF', url:'docs/led-module-pitch-heat.pdf', sharePath:'', owner:'技術/営業', confidentiality:'社内用', status:'有効', order:10, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'ペンタワイドⅤCV-S電源影検証', category:'社内検証', summary:'ペンタワイドⅤ CV-Sを1500角仮設行灯に25個組み込み、WKLVZ240-6R3HJとFSP-150-FZFE-24Gを看板内部に設置した際の影発生を確認した社内検証資料。電源内蔵は基本提案しないが、やむを得ない場合の必要深さ・ピッチ条件確認に使用。検索: ペンタワイドⅤ ペンタワイド5 CV-S 電源影 影 電源内蔵 看板内電源 WKLVZ240-6R3HJ FSP-150-FZFE-24G 1500角 行灯 KS25-002', storageType:'PDF', url:'docs/pentawide5-cvs-power-shadow.pdf', sharePath:'', owner:'宇田川 航希', confidentiality:'社内用', status:'有効', order:11, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'アリストジャパン 照度表', category:'社内検証', summary:'アリストジャパン製LEDモジュールの照度表。行灯内照式看板における表面照度の期待値を確認する社内用資料。スターライトⅣ、スターライトミニⅡ、スターライトデュオⅣ、ペンタワイドⅣCC、ペンタワイドⅤCC、ペンタワイドⅤCV-S、ペンタワイドⅣCV-H、ペンタワイドⅣCV-L、デュオスリムⅡ、モノミニⅡなどの製品別照度確認用。検索: アリストジャパン 照度表 照度 ルクス Lx 製品照度表 LEDモジュール 社内用 社外秘 スターライト ペンタワイド デュオスリム モノミニ 行灯 内照式看板', storageType:'PDF', url:'docs/aristo-illuminance-table-202603.pdf', sharePath:'', owner:'アリストジャパン', confidentiality:'社内用', status:'有効', order:12, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'各タイプモジュール不具合症状一覧', category:'社内検証', summary:'モジュール不具合一覧。点滅・ちらつき、輝度低下、一部不点灯、全体の不点灯などの症状から、定電圧モジュール・定電流モジュール・AC100Vモジュールごとの推定原因を確認する社内検証資料。検索: 各タイプモジュール不具合症状一覧 モジュール不具合一覧 不具合 症状 点滅 ちらつき 輝度低下 一部不点灯 全体不点灯 定電圧 定電流 AC100V LED電源不良 結線不良 施工不良 製品不良 一次電圧不具合 水浸入 活電挿抜 はんだ不良', storageType:'PDF', url:'docs/module-defect-symptom-list.pdf', sharePath:'', owner:'アリストジャパン', confidentiality:'社内用', status:'有効', order:13, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'第1回ルーファス検証', category:'検証内容', summary:'LUFAS（ルーファス）の第1回熱検証資料。フレーム SD-100・SD-75・SD-45、製品 ペンタワイドⅤCV-S・ペンタワイドⅣCV-H・ペンタワイドⅣCV-L・ペンタワイドTN のピッチ、ファブリック条件、看板内温度、評価結果などを確認。検索: 第1回 第１回 ルーファス LUFAS 熱検証 SD-100 SD-75 SD-45 CVS CV-S CVH CV-H CVL CV-L TN', storageType:'PDF', url:'docs/lufas-first-verification.pdf', sharePath:'', owner:'アリストジャパン', confidentiality:'社内用', status:'有効', order:14, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'第２回ルーファス検証', category:'検証内容', summary:'LUFAS（ルーファス）の第2回検証資料。フレーム SD-100・SD-75・SD-45、製品 ペンタワイドⅤCV-S・ペンタワイドⅣCV-H・ペンタワイドⅣCV-L・ペンタワイドTN の配置・ピッチ・防炎条件などを確認。検索: 第2回 第２回 ルーファス LUFAS 検証 SD-100 SD-75 SD-45 CVS CV-S CVH CV-H CVL CV-L TN', storageType:'PDF', url:'docs/lufas-second-verification.pdf', sharePath:'', owner:'アリストジャパン', confidentiality:'社内用', status:'有効', order:15, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'OSRAM(オスラム) 150W PWM電源', category:'他社取説', summary:'OSRAM製 DC24V 150W PWM調光対応電源のデータシート。品番 OT 150/100-242/24 DIM P G3。定格出力DC24V、最大150W、最大6.25A、PWM調光1〜100%、PWM信号7〜16V 750〜1250Hz、屋外仕様IP66/IP67。検索: OSRAM オスラム OPTOTRONIC 150W 24V DC24V PWM電源 PWM調光 定電圧電源 IP66 IP67 6.25A', storageType:'PDF', url:'docs/osram-150w-pwm-power.pdf', sharePath:'', owner:'OSRAM', confidentiality:'社内用', status:'有効', order:20, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'OSRAM(オスラム) 300W PWM電源', category:'他社取説', summary:'OSRAM / Inventronics製 DC24V 300W PWM調光対応電源のデータシート。品番 OT 300/100-242/24 DIM P G3。定格出力DC24V、最大300W、最大12.5A、PWM調光1〜100%、PWM信号7〜16V 750〜1250Hz、屋外仕様IP66/IP67。検索: OSRAM オスラム Inventronics インベントロニクス OPTOTRONIC 300W 24V DC24V PWM電源 PWM調光 定電圧電源 IP66 IP67 12.5A', storageType:'PDF', url:'docs/osram-300w-pwm-power.pdf', sharePath:'', owner:'OSRAM / Inventronics', confidentiality:'社内用', status:'有効', order:21, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'リディアワークス LUFAS（ルーファス）取扱説明書', category:'他社取説', summary:'LUFAS（ルーファス）の取扱説明書。エッジライトLEDバー、ファブリック、BOXスタンド、T字型スタンド、壁付け・天井吊り、安全上の注意、メンテナンス内容を確認するための資料。検索: リディアワークス LUFAS ルーファス ファブリック ファブリックサイン エッジライト LEDバー BOXスタンド T字型スタンド 壁付け 天井吊り 取扱説明書', storageType:'PDF', url:'docs/lufas-manual.pdf', sharePath:'', owner:'リディアワークス', confidentiality:'社内用', status:'有効', order:30, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'リディアワークス LUFAS（ルーファス）仕様図', category:'他社取説', summary:'LUFAS（ルーファス）の仕様図。S-20、SD-45、S-75、SD-100、D-100、U、共通コーナー金具・ストレート金具などの標準納まり、壁付型、壁埋込型、天井付型、天井吊り型の確認用資料。検索: リディアワークス LUFAS ルーファス 仕様図 納まり 標準納まり S-20 SD-45 S-75 SD-100 D-100 U 壁付型 壁埋込型 天井付型 天井吊り型 ファブリック LFプリント フレーム', storageType:'PDF', url:'docs/lufas-spec-drawing.pdf', sharePath:'', owner:'リディアワークス', confidentiality:'社内用', status:'有効', order:31, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'OSRAM(オスラム) 150W PWM電源 電源盤図 4台用', category:'電源盤図', summary:'OSRAM 150W PWM電源 OT 150/100-242/24 DIM P G3 を4台収納する電源盤図。盤サイズ400×600、厚75、AC100V/200V入力、信号入出力、LED出力の配線確認用資料。検索: OSRAM オスラム OT 150 OT 150/100-242/24 DIM P G3 150W PWM電源 電源盤 4台用 盤図 配線図 AC100V AC200V LED出力 信号入出力', storageType:'PDF', url:'docs/osram-150w-pwm-panel-4units.pdf', sharePath:'', owner:'OSRAM / 社内図面', confidentiality:'社内用', status:'有効', order:40, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'WK電源＋PD10A 電源盤図 3台用', category:'電源盤図', summary:'WKLVZ240-6R3HJ電源とPD-10A受信器を3台分収納する電源盤図。盤サイズ300×600、厚75、AC100V/200V入力、DMX信号入出力、LED出力の配線確認用資料。検索: WK WK電源 WKLVZ240-6R3HJ PD10A PD-10A 3台用 300x600 300×600 電源盤 電源盤図 盤図 配線図 DMX 信号入出力 LED出力 AC100V AC200V', storageType:'PDF', url:'docs/wk-pd10a-panel-3units.pdf', sharePath:'', owner:'社内図面', confidentiality:'社内用', status:'有効', order:41, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'DIAheart電源盤_300×600', category:'電源盤図', summary:'DIAheart用電源盤図。盤サイズ300×600、AC100V/200V入力、配線ダクト、電源タップ、Artnetコントローラー、Artnet-SP変換器、信号入出力端子の確認用資料。検索: DIAheart DIA heart ダイアハート 電源盤 電源盤図 配電盤図 300x600 300×600 Artnet アートネット SP変換器 CPEV0.9-1P ティファニー SAMWAオフィス', storageType:'PDF', url:'docs/diaheart-power-panel-300x600.pdf', sharePath:'', owner:'社内図面', confidentiality:'社内用', status:'有効', order:42, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'アリストジャパン内線番号', category:'資料', summary:'アリストジャパン社内の内線番号リスト。2026年4月1日時点の内線番号確認用資料。', storageType:'PDF', url:'docs/aristo-extension-numbers.pdf', sharePath:'', owner:'アリストジャパン', confidentiality:'社内用', status:'有効', order:50, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'神保電器 NKW-RPWM1S3 仕様図', category:'他社取説', summary:'神保電器 NKシリーズ PWM制御方式(1ch) 埋込ライトコントロール + 3路スイッチ NKW-RPWM1S3 の仕様図。寸法、器具裏面、入力AC100V〜254V、出力12V PWM 1kHz、最大200mA、スイッチ定格15A-300Vの確認用資料。検索: 神保電器 JIMBO NKW-RPWM1S3 NKシリーズ PWM ライトコントロール 3路スイッチ 仕様図', storageType:'PDF', url:'docs/jimbo-nkw-rpwm1s3-spec.pdf', sharePath:'', owner:'神保電器', confidentiality:'社内用', status:'有効', order:60, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'神保電器 NKW-RPWM1S3 取扱説明書', category:'他社取説', summary:'神保電器 NKシリーズ PWM制御方式(1ch) 埋込ライトコントロール + 3路スイッチ NKW-RPWM1S3 の取扱説明書。PWM信号線式調光照明器具専用、DMX信号用照明器具には使用不可。定格電圧AC100V〜254V、定格出力最大200mA、信号線総配線長100m以内、使用周囲温度0℃〜35℃。検索: 神保電器 JIMBO NKW-RPWM1S3 NKシリーズ PWM ライトコントロール 3路スイッチ 取扱説明書', storageType:'PDF', url:'docs/jimbo-nkw-rpwm1s3-manual.pdf', sharePath:'', owner:'神保電器', confidentiality:'社内用', status:'有効', order:61, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'神保電器 NKW-RPWM2S3 仕様図', category:'他社取説', summary:'神保電器 NKシリーズ PWM信号制御（2系統）埋込ライトコントロール + 3路スイッチ NKW-RPWM2S3 の仕様図。外形寸法、取付寸法、器具裏面、入力AC100V〜254V、出力12V PWM 1kHz、最大100mA×2系統、スイッチ定格15A-300Vの確認用資料。検索: 神保電器 JIMBO NKW-RPWM2S3 NKシリーズ PWM 2系統 2ch ライトコントロール 3路スイッチ 仕様図', storageType:'PDF', url:'docs/jimbo-nkw-rpwm2s3-spec.pdf', sharePath:'', owner:'神保電器', confidentiality:'社内用', status:'有効', order:62, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'神保電器 NKW-RPWM2S3 取扱説明書', category:'他社取説', summary:'神保電器 NKシリーズ PWM信号制御（2系統）埋込ライトコントロール + 3路スイッチ NKW-RPWM2S3 の取扱説明書。PWM信号線式調光照明器具専用でDMX信号用照明器具には使用不可。定格電圧AC100V〜254V、定格出力最大100mA×2系統、適合負荷1〜20台×2系統（信号線電流5mAの場合）、信号線総配線長100m以内、使用周囲温度0℃〜35℃。検索: 神保電器 JIMBO NKW-RPWM2S3 NKシリーズ PWM 2系統 2ch ライトコントロール 3路スイッチ 取扱説明書 配線図 調光範囲設定', storageType:'PDF', url:'docs/jimbo-nkw-rpwm2s3-manual.pdf', sharePath:'', owner:'神保電器', confidentiality:'社内用', status:'有効', order:63, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'DALI BUS電源 DGLMPS01', category:'検証内容', summary:'DALI BUS電源 DGLMPS01（RAPIX）の仕様図。AC100〜240V入力、DALIラインDC18V、定格電流225mA保証／238mA定格／250mA最大、DINレール取付、屋内専用IP20。検索: DALI BUS電源 DGLMPS01 RAPIX DALI電源 BUS電源 DINレール DC18V 225mA 250mA', storageType:'PDF', url:'docs/dali-bus-power-dglmps01.pdf', sharePath:'\\\\192.168.0.200\\disk1\\技術部\\02) 仕様図\\4) 調光器\\DALI', owner:'アリストジャパン', confidentiality:'社内用', status:'有効', order:64, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), title:'DALIロータリーコントローラー(調色用)', category:'検証内容', summary:'DALIロータリーコントローラー（調色用）DRC-R2の仕様図。上ツマミで明暗、下ツマミで色温度、プッシュ操作でON/OFF。DALI type8、DALI BUS給電、消費電流最大4mA、調光範囲0〜100%、屋内専用IP20。検索: DALI ロータリー コントローラー 調色 DRC-R2 type8 明暗 色温度 ON OFF', storageType:'PDF', url:'docs/dali-rotary-controller-drc-r2.pdf', sharePath:'\\\\192.168.0.200\\disk1\\技術部\\02) 仕様図\\4) 調光器\\DALI', owner:'アリストジャパン', confidentiality:'社内用', status:'有効', order:65, active:true, updatedAt:new Date().toISOString()}
];


const defaultCatalogs = [
  {id: crypto.randomUUID(), company:'アリストジャパン', category:'自社カタログ', url:'https://www.aristo-japan.co.jp/cms/wp-content/uploads/2021/08/flyer_sign3-5.pdf', manufacturerUrl:'https://www.aristo-japan.co.jp/', memo:'アリストジャパン サイン製品カタログ。', alias:'AJ aristo sign サイン', catalogType:'サイン', order:1, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), company:'アリストジャパン(建築)', category:'自社カタログ', url:'https://www.aristo-japan.co.jp/cms/wp-content/uploads/2024/06/flyer_archit1_all_240613.pdf', manufacturerUrl:'https://www.aristo-japan.co.jp/', memo:'アリストジャパン 建築向けカタログ。', alias:'AJ aristo architecture 建築', catalogType:'建築', order:2, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), company:'APジャパン', category:'他社カタログ', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf', manufacturerUrl:'https://www.ap-japan.jp/', memo:'APジャパン LEDカタログ。', alias:'AP APJ APジャパン サイン', catalogType:'サイン', order:10, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), company:'三和サインワークス', category:'他社カタログ', url:'', manufacturerUrl:'https://www.sanwa-signworks.co.jp/', memo:'三和サインワークス POLLUXシリーズ。PDF資料 pollux_202505.pdf から登録。', alias:'三和サインワークス Sanwa Signworks さんわ さんわさいんわーくす ポラックス ぽらっくす POLLUX サイン', catalogType:'サイン', order:11, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), company:'DNライティング', category:'他社カタログ', url:'https://dnlighting.icata.net/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=DNL00001&catalogId=3365980000&pageGroupId=1&designID=DNL001&catalogCategoryId=&designConfirmFlg=&pagePosition=R', manufacturerUrl:'https://www.dnlighting.co.jp/index.html', memo:'DNライティング WEBカタログ。', alias:'DN DNL DNlighting ディーエヌ 建築', catalogType:'建築', order:20, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), company:'FEELUX', category:'他社カタログ', url:'https://www.fkk-corporation.com/images/3_Download/2026_FKK_LED_Catalog_JP/index.html#page=1', manufacturerUrl:'https://feelux.co.jp/', memo:'FEELUX WEBカタログ。', alias:'フィルックス feelux 建築', catalogType:'建築', order:30, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), company:'FKK', category:'他社カタログ', url:'https://www.fkk-corporation.com/ja/download-support/download', manufacturerUrl:'https://www.fkk-corporation.com/ja/', memo:'FKK ダウンロード・カタログページ。', alias:'エフケーケー fkk 建築', catalogType:'建築', order:40, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), company:'LEDグロー', category:'他社カタログ', url:'https://ledglow.jp/webcatalog1_6_2/', manufacturerUrl:'https://www.ledglow.jp/', memo:'LEDグロー WEBカタログ。', alias:'LED glow ledglow グロー サイン', catalogType:'サイン', order:50, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), company:'エイテックス', category:'他社カタログ', url:'https://saas.actibookone.com/content/detail?param=eyJjb250ZW50TnVtIjo0NDQwODh9&detailFlg=0&pNo=1', manufacturerUrl:'https://www.atex-jp.com/', memo:'エイテックス WEBカタログ。', alias:'atex A-TEX エイテック 建築', catalogType:'建築', order:60, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), company:'テスライティング', category:'他社カタログ', url:'https://www.tes-lighting.co.jp/webcatalog/book2026/book/index.html#page=1', manufacturerUrl:'https://www.tes-lighting.co.jp/', memo:'テスライティング 2026 WEBカタログ。', alias:'TES tes lighting テス 建築', catalogType:'建築', order:70, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), company:'ネオストラクト', category:'他社カタログ', url:'https://neostruct.co.jp/webcatalog/neocatalog/book/index.html', manufacturerUrl:'https://neostruct.co.jp/', memo:'ネオストラクト WEBカタログ。', alias:'neostruct ネオ Neo 建築', catalogType:'建築', order:80, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), company:'ニッケンハードウエア', category:'他社カタログ', url:'https://www.nikken-hw.jp/eco/led/dl/sign_catalog.pdf#page=17', manufacturerUrl:'https://www.nikken-hw.jp/', memo:'ニッケンハードウエア サインカタログ。', alias:'ニッケン nikken hard ware hardware NHW サイン', catalogType:'サイン', order:85, active:true, updatedAt:new Date().toISOString()},
    {id: crypto.randomUUID(), company:'タテヤマアドバンス', category:'他社カタログ', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', manufacturerUrl:'https://www.tateyama.jp/', memo:'タテヤマアドバンス アドフレーム総合カタログ2025.10。アドビューシリーズ中心。', alias:'タテヤマ tateyama アドビュー ADVANCE サイン 外照式 アドフレーム', catalogType:'サイン', order:88, active:true, updatedAt:new Date().toISOString()},
{id: crypto.randomUUID(), company:'ファーストシステム', category:'他社カタログ', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf', manufacturerUrl:'https://first-s.jp/', memo:'ファーストシステム カタログ。', alias:'first FS ファースト サイン', catalogType:'サイン', order:90, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), company:'ルーチ', category:'他社カタログ', url:'https://www.luci.co.jp/led/jp/assets/data/catalog/CA_Luci_202509.pdf', manufacturerUrl:'https://www.luci.co.jp/', memo:'ルーチ LEDカタログPDF。', alias:'Luci luci ルチ 建築', catalogType:'建築', order:100, active:true, updatedAt:new Date().toISOString()},
  {id: crypto.randomUUID(), company:'レベリック', category:'他社カタログ', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf', manufacturerUrl:'https://leveliqq.co.jp/', memo:'レベリック Lighting Collection catalog_2022。サイン向けLEDモジュール、電源、LINEARlight Flex。12・13ページは対象外。', alias:'leveliqq LEVELIQQ レベリック れべりっく LV renDy レンディー SceneDirector LINEARlight リニアライト サイン', catalogType:'サイン', order:110, active:true, updatedAt:new Date().toISOString()}
];


const defaultCompetitorMakers = [
  {
    id:'first-system-sign',
    name:'ファーストシステム',
    type:'サイン',
    company:'株式会社ファーストシステム',
    siteUrl:'https://first-s.jp/',
    catalogUrl:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf',
    memo:'サイン向けLEDモジュール、モジュール専用電源、照明器具、オプションを確認できます。',
    alias:'ファーストシステム ふぁーすとしすてむ FS first system TAIKOO たいこー タイコー TYGA たいが タイガ TERRA てら テラ SHELL しぇる シェル',
    icon:'FS',
    order:10,
    active:true,
    updatedAt:new Date().toISOString()
  },
  {
    id:'tateyama-advance-sign',
    name:'タテヤマアドバンス',
    type:'サイン',
    company:'株式会社タテヤマアドバンス',
    siteUrl:'https://www.tateyama.jp/',
    catalogUrl:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L',
    memo:'アドフレーム総合カタログ2025.10内の外照式サイン向けアドビューシリーズ。価格情報を顧客ランク・商流別に登録できます。',
    alias:'タテヤマアドバンス たてやまあどばんす TA アドビュー あどびゅー ADVIEW 外照式 がいしょうしき サイン',
    icon:'TA',
    order:20,
    active:true,
    updatedAt:new Date().toISOString()
  },
  {
    id:'ap-japan-sign',
    name:'APジャパン',
    type:'サイン',
    company:'エーピー・ジャパン株式会社',
    siteUrl:'http://www.ap-japan.jp/led/',
    catalogUrl:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf',
    memo:'LED製品総合カタログ2025 vol.2の1〜41ページ範囲。広角・標準・効果照明・演出モジュール・電源類を登録。',
    alias:'APジャパン APJ AP-JAPAN エーピージャパン えーぴーじゃぱん LED サイン モジュール 電源',
    icon:'AP',
    order:30,
    active:true,
    updatedAt:new Date().toISOString()
  },
  {
    id:'nikken-hardware-sign',
    name:'ニッケンハードウエア',
    type:'サイン',
    company:'株式会社ニッケンハードウエア',
    siteUrl:'https://www.nikken-hw.jp/',
    catalogUrl:'https://www.nikken-hw.jp/eco/led/dl/sign_catalog.pdf',
    memo:'サイン広告用LEDカタログ。ビューフラッド、デハバム、ビューサイノンのみ登録。価格情報を顧客ランク・商流別に登録できます。',
    alias:'ニッケンハードウエア ニッケン にっけん NH nikken hardware ビューフラッド びゅーふらっど デハバム ではばむ ビューサイノン びゅーさいのん サイン',
    icon:'NH',
    order:40,
    active:true,
    updatedAt:new Date().toISOString()
  },
  {
    id:'sanwa-signworks-sign',
    name:'三和サインワークス',
    type:'サイン',
    company:'三和サインワークス株式会社',
    siteUrl:'https://www.sanwa-signworks.co.jp/',
    catalogUrl:'',
    memo:'POLLUXシリーズ。Power-Pollux 3、ポラックス4、ポラックス3、ソーラーポラックスを登録。価格情報を顧客ランク・商流別に登録できます。',
    alias:'三和サインワークス 三和 さんわ SW Sanwa Signworks POLLUX ポラックス ぽらっくす パワーポラックス ぱわーぽらっくす ソーラーポラックス そーらーぽらっくす サイン',
    icon:'SW',
    order:50,
    active:true,
    updatedAt:new Date().toISOString()
  }
  ,{
    id:'leveliq-sign',
    name:'レベリック',
    type:'サイン',
    company:'レベリック株式会社',
    siteUrl:'https://leveliqq.co.jp/',
    catalogUrl:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf',
    memo:'Lighting Collection catalog_2022。サイン向けLEDモジュール、RGB制御、投光器、電源、LINEARlight Flexを登録。カタログ12・13ページは対象外。',
    alias:'レベリック れべりっく LEVELIQQ leveliq leveliqq LV エルブイ renDy レンディー SceneDirector シーンディレクター BE ビーイー L-Projector エルプロジェクター LINEARlight リニアライト サイン',
    icon:'LV',
    order:60,
    active:true,
    updatedAt:new Date().toISOString()
  }
  ,{
    id:'ledglow-sign',
    name:'LEDグロー',
    type:'サイン',
    company:'株式会社LEDグロー',
    siteUrl:'https://www.ledglow.jp/',
    catalogUrl:'https://ledglow.jp/webcatalog1_6_2/',
    memo:'総合カタログ ver.1.6。サイン・看板用LEDモジュールを中心に登録。20〜23ページ、28〜30ページ、31〜47ページは対象外。',
    alias:'LEDグロー LED GLOW ledglow エルイーディーグロー えるいーでぃーぐろー グロー ぐろー LG サイン 看板 LEDモジュール',
    icon:'LG',
    order:70,
    active:true,
    updatedAt:new Date().toISOString()
  }

  ,{
    id:'aristo-self',
    name:'アリストジャパン',
    type:'自社',
    company:'アリストジャパン株式会社',
    siteUrl:'https://www.aristo-japan.co.jp/',
    catalogUrl:'catalog-pages/aristo-starlite4.pdf',
    memo:'自社製品ナレッジ。価格情報は登録せず、問い合わせ対応用に駆動方式・色温度・調光・基本仕様・対応電源・配線距離・カタログページを確認できます。',
    alias:'アリストジャパン ARISTO JAPAN 自社製品 自社 ありすと 仕様 電源 配線 カタログ スターライト ペンタワイド デュオスリム シームレスビーム グローチューブ フラッドライト',
    icon:'自社',
    order:5,
    active:true,
    updatedAt:new Date().toISOString()
  }

];

const defaultCompetitorProducts = [


  {id:'aristo-starlite4', makerId:'aristo-self', selfProduct:true, series:'100Vモジュール', name:'スターライトⅣ', code:'ASLM4-65H / ASLM4-50H / ASLM4-30H', type:'AC100V直結・行灯/文字', use:'FF・アクリル / D80〜250', detail:'駆動方式：AC100V直結。色温度：6500K/5000K/3000K。消費電力2.35W、最大直列100個、10個巻/30個巻。BL-1C 15A目安270〜450個。電源〜LED間はAC配線扱い。ループ禁止、終端防水絶縁処理。', spec:'駆動方式: AC100V直結|色温度: 6500K / 5000K / 4000K / 3500K / 3000K / 2700K|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※制御機器構成による|基本仕様: AC100V 0.0265A 2.35W Ra85 IP67 40,000h|サイズ: 30.2×86.6×9.8mm|最大直列連結数: 100個 ※101個以上は並列接続|梱包単位: 10個巻 / 30個巻|対応電源/接続個数: AC100Vブレーカー容量分。BL-1C 15A目安270〜450個|配線距離: AC100V入力。現場条件・ブレーカー容量確認|注意: AC200V入力不可 / ループ禁止 / 終端防水絶縁処理', catalogPage:'P.10〜P.11', catalogPdf:'catalog-pages/aristo-starlite4.pdf', alias:'スターライト4 スターライトⅣ StarLite4 StarLiteⅣ ASLM4 65H 50H 30H 100V 行灯 文字', order:100, active:true},
  {id:'aristo-starlite-mini2', makerId:'aristo-self', selfProduct:true, series:'100Vモジュール', name:'スターライトミニⅡ', code:'ASM2-65H / ASM2-50H / ASM2-30H', type:'AC100V直結・薄型行灯', use:'FF・アクリル / D40〜100', detail:'駆動方式：AC100V直結。色温度6500K/5000K/3000K。消費電力1.04W、最大直列100個、BL-1C 15A目安680〜1130個。', spec:'駆動方式: AC100V直結|色温度: 6500K / 5000K / 3000K|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※制御機器構成による|基本仕様: AC100V 0.0106A 1.04W Ra85 IP67 40,000h|サイズ: 48.5×34.7×7.7mm|最大直列連結数: 100個 ※101個以上は並列接続|梱包単位: 10個巻 / 30個巻|対応電源/接続個数: AC100Vブレーカー容量分。BL-1C 15A目安680〜1130個|配線距離: AC100V入力。現場条件確認|注意: AC200V入力不可 / ループ禁止 / 終端防水絶縁処理', catalogPage:'P.12〜P.13', catalogPdf:'catalog-pages/aristo-starlite-mini2.pdf', alias:'スターライトミニ2 スターライトミニⅡ StarLite Mini ASM2 薄型 行灯 100V', order:110, active:true},
  {id:'aristo-starlite-duo4', makerId:'aristo-self', selfProduct:true, series:'100Vモジュール', name:'スターライト デュオⅣ', code:'ASD4-H65H / ASD4-H50H / ASD4-H30H', type:'AC100V直結・文字', use:'アクリル / D60〜150', detail:'駆動方式：AC100V直結。消費電力0.82W、最大直列100個、BL-1C 15A目安780〜1300個。', spec:'駆動方式: AC100V直結|色温度: 6500K / 5000K / 3000K|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※制御機器構成による|基本仕様: AC100V 0.0092A 0.82W Ra85 IP67 40,000h|サイズ: 45.3×18.3×8.8mm|最大直列連結数: 100個 ※101個以上は並列接続|梱包単位: 10個巻 / 30個巻|対応電源/接続個数: AC100Vブレーカー容量分。BL-1C 15A目安780〜1300個|配線距離: AC100V入力。現場条件確認|注意: AC200V入力不可 / ループ禁止 / 終端防水絶縁処理', catalogPage:'P.14〜P.15', catalogPdf:'catalog-pages/aristo-starlite-duo4.pdf', alias:'スターライトデュオ4 スターライトデュオⅣ StarLite Duo ASD4 100V 文字', order:120, active:true},
  {id:'aristo-pentawide4-cc', makerId:'aristo-self', selfProduct:true, series:'定電流モジュール', name:'ペンタワイドⅣ CC', code:'APW4C-65M / APW4C-50H / APW4C-40H / APW4C-35H / APW4C-30H / APW4C-SR', type:'定電流700mA/350mA・行灯/文字', use:'FF・アクリル / D80〜300', detail:'駆動方式：定電流700mA/350mA。通常色と赤色あり。対応電源ごとの接続個数確認が重要。', spec:'駆動方式: 定電流 700mA / 350mA|色温度: 6500K / 5000K / 4000K / 3500K / 3000K / 赤|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※電源・制御機器構成による|基本仕様: 700mA時2.10W / 350mA時1.05W / IP67 / 40,000h|サイズ: 62.4×54.4×10.1mm|最大直列連結数: 電源容量まで ※必ず直列配線、並列不可|梱包単位: 10個巻 / 30個巻|対応電源/接続個数: TEP4-700-250NFJ 47〜67個(AC100V) / β2-700-130NFJ 23〜41個 / β1-700-65NFJ 12〜20個 / HLP1030-42-C0700 8〜13個 / 350mA電源は通常色・赤色で範囲確認|配線距離: 電源〜LED間は現場条件確認。極性を合わせ、基板IN側から入力|注意: 極性あり / 直列配線 / 並列不可 / 終端ループ接続', catalogPage:'P.16〜P.17', catalogPdf:'catalog-pages/aristo-pentawide4-cc.pdf', alias:'ペンタワイド4 CC ペンタワイドⅣCC PentaWide APW4C 定電流 700mA 350mA 赤', order:200, active:true},
  {id:'aristo-pentalite-elp-cc', makerId:'aristo-self', selfProduct:true, series:'定電流モジュール', name:'ペンタライト ELP CC', code:'APE1C-65M1550 / APE1C-50H1550 / APE1C-30H1550', type:'定電流700mA・行灯', use:'アクリル / D80〜300', detail:'駆動方式：定電流700mA。狭角レンズで光を遠くに飛ばすELP。', spec:'駆動方式: 定電流 700mA|色温度: 6500K / 5000K / 3000K|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※電源・制御機器構成による|基本仕様: DC2.7〜3.1V 700mA 2.10W IP67 40,000h|サイズ: 62.4×54.4×13.4mm|最大直列連結数: 電源容量まで ※必ず直列配線|梱包単位: 30個巻|対応電源/接続個数: TEP4-700-250NFJ 47〜67個(AC100V) / β2-700-130NFJ 23〜41個 / β1-700-65NFJ 12〜20個 / HLP1030-42-C0700 8〜13個|配線距離: 電源〜LED間は現場条件確認。基板IN側から入力|注意: 極性あり / 直列配線 / 並列不可 / 終端ループ接続', catalogPage:'P.18〜P.19', catalogPdf:'catalog-pages/aristo-pentalite-elp-cc.pdf', alias:'ペンタライト ELP CC PentaLite APE1C 定電流 700mA 狭角レンズ 行灯', order:210, active:true},
  {id:'aristo-pentawide5-cv-s', makerId:'aristo-self', selfProduct:true, series:'定電圧DC24Vモジュール', name:'ペンタワイドⅤ CV-S', code:'APW5V-S65H / APW5V-S50E / APW5V-S40E / APW5V-S35E / APW5V-S30E / APW5V-S27E', type:'定電圧DC24V・行灯/文字', use:'FF・アクリル / D100〜300', detail:'駆動方式：DC24V。消費電力2.20W、最大直列30個。電源〜LED間 VCTF1.25sq 10m以内、VCTF2.0sq 15m以内目安。', spec:'駆動方式: 定電圧 DC24V|色温度: 6500K / 5000K / 3000K|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※制御機器構成による|基本仕様: DC24V 0.092A 2.20W IP67 40,000h|サイズ: 73.0×64.0×13.1mm|最大直列連結数: 30個 ※31個以上は並列接続|梱包単位: 10個巻 / 30個巻|対応電源/接続個数: WKLVZ240-6R3HJ 1〜61個 / LP1026-24 2〜9個|配線距離: VCTF1.25sq 10m以内目安 / VCTF2.0sq 15m以内目安|注意: 極性あり / ループ禁止 / 終端防水絶縁処理', catalogPage:'P.20〜P.21', catalogPdf:'catalog-pages/aristo-pentawide5-cv-s.pdf', alias:'ペンタワイド5 CV-S ペンタワイドⅤ CVS APW5V APW5V-S65H APW5V-S50E APW5V-S40E APW5V-S35E APW5V-S30E APW5V-S27E 6500K 5000K 4000K 3500K 3000K 2700K 定電圧 DC24V', order:300, active:true},
  {id:'aristo-pentawide4-cv-h', makerId:'aristo-self', selfProduct:true, series:'定電圧DC24Vモジュール', name:'ペンタワイドⅣ CV-H', code:'APW4V-H65H / H50H / H40H / H35H / H30H / H27H', type:'定電圧DC24V・行灯/文字', use:'FF・アクリル / D80〜150', detail:'駆動方式：DC24V。消費電力1.05W、最大直列40個。電源〜LED間 VCTF1.25sq 10m、VCTF2.0sq 15m、VVF2.0mm 25m以内目安。', spec:'駆動方式: 定電圧 DC24V|色温度: 6500K / 5000K / 4000K / 3500K / 3000K / 2700K|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※制御機器構成による|基本仕様: DC24V 0.044A 1.05W Ra85 IP67 40,000h|サイズ: 43.8×35.8×10.0mm|最大直列連結数: 40個 ※41個以上は並列接続|梱包単位: 10個巻 / 30個巻|対応電源/接続個数: WKLVZ240-6R3HJ 1〜128個 / LP1026-24 4〜20個|配線距離: VCTF1.25sq 10m以内目安 / VCTF2.0sq 15m以内目安 / VVF2.0mm 25m以内目安|注意: 極性あり / ループ禁止 / 終端防水絶縁処理', catalogPage:'P.22〜P.23', catalogPdf:'catalog-pages/aristo-pentawide4-cv-h.pdf', alias:'ペンタワイド4 CV-H ペンタワイドⅣ CVH APW4V H 定電圧 DC24V', order:310, active:true},
  {id:'aristo-pentawide4-cv-l', makerId:'aristo-self', selfProduct:true, series:'定電圧DC24Vモジュール', name:'ペンタワイドⅣ CV-L', code:'APW4V-L65H / L50H / L40H / L35H / L30H / L27H', type:'定電圧DC24V・薄型行灯', use:'FF・アクリル / D50〜80', detail:'駆動方式：DC24V。消費電力0.35W、最大直列60個。電源〜LED間 VCTF1.25sq 30m、VCTF2.0sq 40m以内目安。', spec:'駆動方式: 定電圧 DC24V|色温度: 6500K / 5000K / 4000K / 3500K / 3000K / 2700K|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※制御機器構成による|基本仕様: DC24V 0.0146A 0.35W Ra85 IP67 40,000h|サイズ: 43.8×35.8×10.0mm|最大直列連結数: 60個 ※61個以上は並列接続|梱包単位: 10個巻 / 30個巻|対応電源/接続個数: WKLVZ240-6R3HJ 1〜385個 / LP1026-24 12〜60個|配線距離: VCTF1.25sq 30m以内目安 / VCTF2.0sq 40m以内目安|注意: 極性あり / ループ禁止 / 終端防水絶縁処理', catalogPage:'P.24〜P.25', catalogPdf:'catalog-pages/aristo-pentawide4-cv-l.pdf', alias:'ペンタワイド4 CV-L ペンタワイドⅣ CVL APW4V L 薄型 行灯 DC24V', order:320, active:true},
  {id:'aristo-flatstick', makerId:'aristo-self', selfProduct:true, series:'定電圧DC24Vモジュール', name:'フラットスティック', code:'FS1F7-03L50E / FS1F7-03L30E / FS1-03L50E / FS1-03L30E', type:'定電圧DC24V・薄型行灯', use:'アクリル / 厚み30〜50', detail:'7本連結タイプと1本タイプ。最大直列連結長77本まで。電源〜LED間 VCTF1.25sq 20m、VCTF2.0sq 30m以内目安。', spec:'駆動方式: 定電圧 DC24V|色温度: 5000K / 3000K|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※制御機器構成による|基本仕様: 7本連結3.01W / 1本0.43W / Ra95 / IP67 / 40,000h|サイズ: 7本連結・1本仕様あり|最大直列連結数: 最大直列連結長77本まで|梱包単位: 1組(7本連結) / 1本|対応電源/接続個数: WKLVZ240-6R3HJ 135Wまで / LP1026-24 4〜21Wまで|配線距離: VCTF1.25sq 20m以内目安 / VCTF2.0sq 30m以内目安|注意: 極性あり / コネクタ接続 / 終端にエンドキャップ', catalogPage:'P.26〜P.27', catalogPdf:'catalog-pages/aristo-flatstick.pdf', alias:'フラットスティック FlatStick FS1 FS1F7 薄型行灯 DC24V', order:330, active:true},
  {id:'aristo-duoslim2', makerId:'aristo-self', selfProduct:true, series:'定電圧DC24Vモジュール', name:'デュオスリムⅡ', code:'ADS2-65H / ADS2-50H / ADS2-40H / ADS2-35H / ADS2-30H', type:'定電圧DC24V・文字', use:'アクリル / D50〜150', detail:'駆動方式：DC24V。消費電力0.84W、最大直列60個。電源〜LED間 VCTF1.25sq 30m、VCTF2.0sq 40m以内目安。', spec:'駆動方式: 定電圧 DC24V|色温度: 6500K / 5000K / 4000K / 3500K / 3000K|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※制御機器構成による|基本仕様: DC24V 0.035A 0.84W Ra85 IP67 40,000h|サイズ: 34.0×25.0×12.6mm|最大直列連結数: 60個 ※61個以上は並列接続|梱包単位: 10個巻 / 30個巻|対応電源/接続個数: WKLVZ240-6R3HJ 1〜160個 / LP1026-24 5〜25個|配線距離: VCTF1.25sq 30m以内目安 / VCTF2.0sq 40m以内目安|注意: 極性あり / ループ禁止 / 終端防水絶縁処理', catalogPage:'P.28〜P.29', catalogPdf:'catalog-pages/aristo-duoslim2.pdf', alias:'デュオスリム2 デュオスリムⅡ DuoSlim ADS2 文字 DC24V', order:340, active:true},
  {id:'aristo-monomini2', makerId:'aristo-self', selfProduct:true, series:'定電圧DC24Vモジュール', name:'モノミニⅡ', code:'AMM2-65H / AMM2-50H / AMM2-40H / AMM2-35H / AMM2-30H', type:'定電圧DC24V・小型文字', use:'アクリル / D30〜60', detail:'駆動方式：DC24V。消費電力0.24W、最大直列130個。電源〜LED間 VCTF1.25sq 20m、VCTF2.0sq 30m以内目安。', spec:'駆動方式: 定電圧 DC24V|色温度: 6500K / 5000K / 4000K / 3500K / 3000K|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※制御機器構成による|基本仕様: DC24V 0.01A 0.24W Ra85 IP67 40,000h|サイズ: 14.0×12.6×7.5mm|最大直列連結数: 130個 ※131個以上は並列接続|梱包単位: 10個巻 / 30個巻|対応電源/接続個数: WKLVZ240-6R3HJ 1〜562個 / LP1026-24 17〜87個|配線距離: VCTF1.25sq 20m以内目安 / VCTF2.0sq 30m以内目安|注意: 極性あり / ループ禁止 / 終端防水絶縁処理', catalogPage:'P.30〜P.31', catalogPdf:'catalog-pages/aristo-monomini2.pdf', alias:'モノミニ2 モノミニⅡ MonoMini AMM2 小型文字 DC24V', order:350, active:true},
  {id:'aristo-gem', makerId:'aristo-self', selfProduct:true, series:'バックライト専用', name:'ジェム', code:'AG1-H65H / AG1-H50H / AG1-H30H', type:'定電圧DC24V・バックライト専用', use:'離れ50〜150', detail:'バックライト専用LED。消費電力0.96W、最大直列60個。電源〜LED間 VCTF1.25sq 30m、VCTF2.0sq 40m以内目安。', spec:'駆動方式: 定電圧 DC24V|色温度: 6500K / 5000K / 3000K|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※制御機器構成による|基本仕様: DC24V 0.04A 0.96W Ra85 IP67 40,000h|サイズ: 28.6×12.0×10.0mm|最大直列連結数: 60個 ※61個以上は並列接続|梱包単位: 10個巻 / 30個巻|対応電源/接続個数: WKLVZ240-6R3HJ 1〜140個 / LP1026-24 5〜21個|配線距離: VCTF1.25sq 30m以内目安 / VCTF2.0sq 40m以内目安|注意: 極性あり / ループ禁止 / 乳半アクリルでも条件によりランプイメージ映り込みあり', catalogPage:'P.32〜P.33', catalogPdf:'catalog-pages/aristo-gem.pdf', alias:'ジェム Gem バックライト専用 AG1 DC24V', order:360, active:true},
  {id:'aristo-gemmini', makerId:'aristo-self', selfProduct:true, series:'バックライト専用', name:'ジェムミニ', code:'AGM1-H65H / AGM1-H50H / AGM1-H30H', type:'定電圧DC24V・小型バックライト専用', use:'離れ30〜60', detail:'小型バックライト専用LED。消費電力0.24W、最大直列130個。電源〜LED間 VCTF1.25sq 30m、VCTF2.0sq 40m以内目安。', spec:'駆動方式: 定電圧 DC24V|色温度: 6500K / 5000K / 3000K|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※制御機器構成による|基本仕様: DC24V 0.01A 0.24W Ra85 IP67 40,000h|サイズ: 16.0×10.0×8.8mm|最大直列連結数: 130個 ※131個以上は並列接続|梱包単位: 10個巻 / 30個巻|対応電源/接続個数: WKLVZ240-6R3HJ 1〜562個 / LP1026-24 17〜87個|配線距離: VCTF1.25sq 30m以内目安 / VCTF2.0sq 40m以内目安|注意: 極性あり / ループ禁止 / 乳半アクリルでも条件によりランプイメージ映り込みあり', catalogPage:'P.34〜P.35', catalogPdf:'catalog-pages/aristo-gemmini.pdf', alias:'ジェムミニ GemMini AGM1 バックライト専用 ミニ DC24V', order:370, active:true},
  {id:'aristo-pentawide-tn', makerId:'aristo-self', selfProduct:true, series:'調色モジュール', name:'ペンタワイド TN', code:'APW1V-HK', type:'定電圧DC24V・調色', use:'行灯・文字 / FF・アクリル / D150〜300', detail:'5000K〜2200K無段階調整。DALI配線例あり。最大直列15個、電源〜LED間 VCTF1.25sq 20m、VCTF2.0sq 30m以内目安。', spec:'駆動方式: 定電圧 DC24V|色温度: 5000K〜2200K 無段階調整|調光: DALI / PWM / DMX / SPI / Art-Net / アナログ / 位相 ※構成確認|基本仕様: DC24V 0.200A 4.80W Ra95 IP67 40,000h|サイズ: 65×57.6×8.5mm|最大直列連結数: 15個|梱包単位: 15個巻|対応電源/接続個数: WKLVZ240-6R3HJ 1〜28個 / MU200S024BPI500_DALI 1〜37個|配線距離: 電源〜LED間 VCTF1.25sq 20m以内目安 / VCTF2.0sq 30m以内目安 / DALI信号線MAX100m|注意: 2ch構成 / DALI受信器接続数MAX64台 / 出力1・2の＋は両方LED＋へ', catalogPage:'P.36〜P.37', catalogPdf:'catalog-pages/aristo-pentawide-tn.pdf', alias:'ペンタワイド TN 調色 5000K 2200K APW1V DALI DC24V', order:400, active:true},
  {id:'aristo-rgb-trio', makerId:'aristo-self', selfProduct:true, series:'RGBモジュール', name:'RGB トリオ', code:'ASC1V-RGB', type:'定電圧DC12V・RGB', use:'行灯・文字 / アクリル / D80〜150', detail:'フルカラー1677万色。最大直列30個。DMX信号線はコントローラーから末端受信器まで総延長100m以内。', spec:'駆動方式: 定電圧 DC12V|発光色: RGB フルカラー1677万色|調光: DMX / SPI / Art-Net / PWM ※制御構成確認|基本仕様: DC12V 0.06A 0.72W IP67 40,000h|サイズ: 52.5×31.4×6.2mm|最大直列連結数: 30個|梱包単位: 30個巻|対応電源/接続個数: 3SV-12R5-12NF 1〜187個 / 受信器DP3CH-10Aは3ch計9.9Aまで|配線距離: 電源〜(受信器)〜LED間 VCTF1.25sq 10m以内目安 / VCTF2.0sq 15m以内目安 / DMX総延長100m以内|注意: 白+ / 赤1ch / 緑2ch / 青3ch / 1系統は同色点灯', catalogPage:'P.38〜P.39', catalogPdf:'catalog-pages/aristo-rgb-trio.pdf', alias:'RGBトリオ RGB Trio ASC1V RGB DC12V フルカラー DMX', order:500, active:true},
  {id:'aristo-rgb-grande', makerId:'aristo-self', selfProduct:true, series:'RGBモジュール', name:'RGB グランデ', code:'APC1V24-RGB', type:'定電圧DC24V・RGB', use:'行灯・文字 / FF・アクリル / D150〜200', detail:'フルカラー1677万色。最大直列15個。大型サイン向けRGB。', spec:'駆動方式: 定電圧 DC24V|発光色: RGB フルカラー1677万色|調光: DMX / SPI / Art-Net / PWM ※制御構成確認|基本仕様: DC24V 0.060A 1.44W IP67 40,000h|サイズ: 65×57.6×7.0mm|最大直列連結数: 15個|梱包単位: 15個巻|対応電源/接続個数: WKLVZ240-6R3HJ 1〜93個 / 受信器DP3CH-10Aは3ch計9.9Aまで|配線距離: 電源〜(受信器)〜LED間 VCTF1.25sq 10m以内目安 / VCTF2.0sq 15m以内目安 / DMX総延長100m以内|注意: 白+ / 赤1ch / 緑2ch / 青3ch / 電源は使用A数以上を用意', catalogPage:'P.40〜P.41', catalogPdf:'catalog-pages/aristo-rgb-grande.pdf', alias:'RGBグランデ RGB Grande APC1V24 RGB DC24V フルカラー DMX', order:510, active:true},
  {id:'aristo-rgb-trio-ic', makerId:'aristo-self', selfProduct:true, series:'RGB ICモジュール', name:'RGB トリオ IC', code:'ASC1V-DRGB', type:'定電圧DC12V・RGB IC', use:'行灯・文字 / アクリル / D80〜150', detail:'個別制御用RGB ICモジュール。詳細仕様・接続はカタログページを確認。', spec:'駆動方式: 定電圧 DC12V|発光色: RGB フルカラー|調光: SPI / Art-Net / DMX系制御 ※構成確認|基本仕様: DC12V 0.06A 0.72W IP67 40,000h|最大直列連結数: 30個|梱包単位: 30個巻|対応電源/接続個数: 電源・コントローラー構成により確認|配線距離: 制御信号・電源線の距離は案件ごとに確認|注意: 赤+DC12V / 白Gnd / 緑Data。IC制御は設定確認必須', catalogPage:'P.42〜P.43', catalogPdf:'catalog-pages/aristo-rgb-trio-ic.pdf', alias:'RGBトリオIC RGB Trio IC ASC1V DRGB 個別制御 SPI', order:520, active:true},
  {id:'aristo-rgb-grande-ic', makerId:'aristo-self', selfProduct:true, series:'RGB ICモジュール', name:'RGB グランデ IC', code:'APC1V24-DRGB', type:'定電圧DC24V・RGB IC', use:'大型行灯・文字 / FF・アクリル', detail:'個別制御用RGB ICモジュール。詳細仕様・接続はカタログページを確認。', spec:'駆動方式: 定電圧 DC24V|発光色: RGB フルカラー|調光: SPI / Art-Net / DMX系制御 ※構成確認|基本仕様: DC24V RGB IC / IP67 / 40,000h|最大直列連結数: カタログページ確認|梱包単位: カタログページ確認|対応電源/接続個数: 電源・コントローラー構成により確認|配線距離: 制御信号・電源線の距離は案件ごとに確認|注意: IC制御はアドレス・プログラム・電源容量確認必須', catalogPage:'P.44〜P.45', catalogPdf:'catalog-pages/aristo-rgb-grande-ic.pdf', alias:'RGBグランデIC RGB Grande IC APC1V24 DRGB 個別制御 SPI', order:530, active:true},
  {id:'aristo-seamlessbeam', makerId:'aristo-self', selfProduct:true, series:'リニアタイプ広角', name:'シームレスビーム', code:'SBMS1-12H50E / 12H30E / 09H50E / 09H30E / 06H50E / 06H30E / 03H50E / 03H30E / 016H50E / 016H30E', type:'定電圧DC24V・リニア広角', use:'屋外ボーダー / 間接照明 / 棚下照明', detail:'リニアタイプ広角の標準白色モデル。5000K/3000K、L1200/L900/L600/L300/L160相当をラインアップ。最大直列連結長6.0mまで。', spec:'駆動方式: 定電圧 DC24V|色温度: 5000K / 3000K|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※制御機器構成による|基本仕様: DC24V / 140°半値角 / Ra95 / IP65 / 40,000h|サイズ: L1200実寸1140mm / L900実寸856mm / L600実寸571mm / L300実寸287mm / L160実寸165mm|消費電力: L1200 15.32W / L900 11.49W / L600 7.66W / L300 3.83W / L160 2.19W|最大直列連結数: 最大直列連結長6.0mまで ※長さ違い灯具の接続可|梱包単位: 1本|対応電源/接続個数: WKLVZ240-6R3HJ 135Wまで / LP1026-24 4〜21Wまで|配線距離: 電源〜LED間 VCTF1.25sq 20m以内目安 / VCTF2.0sq 30m以内目安|注意: 極性あり / コネクタ接続 / 終端にエンドキャップ', catalogPage:'P.48〜P.49', catalogPdf:'catalog-pages/aristo-seamlessbeam.pdf', specDownloadUrl:'https://www.aristo-japan.co.jp/download', alias:'シームレスビーム SeamlessBeam SBMS1 リニア 広角 5000K 3000K 屋外ボーダー 間接照明 棚下照明', order:600, active:true},
  {id:'aristo-seamlessbeam-tn', makerId:'aristo-self', selfProduct:true, series:'リニアタイプ広角', name:'シームレスビーム TN', code:'SBTS1-12H2250E / SBTS1-09H2250E / SBTS1-06H2250E / SBTS1-03H2250E', type:'定電圧DC24V・リニア広角・調色', use:'屋外ボーダー / 間接照明 / 棚下照明', detail:'2200K〜5000Kを無段階調整できるTNモデル。DALI構成では信号配線長MAX100m、受信器接続数MAX64台まで。', spec:'駆動方式: 定電圧 DC24V|色温度: 2200K〜5000K 無段階調整|調光: DALI / PWM / DMX / SPI / Art-Net / アナログ / 位相 ※構成による|基本仕様: DC24V / 140°半値角 / Ra95 / IP65 / 40,000h|サイズ: L1200実寸1140mm / L900実寸856mm / L600実寸571mm / L300実寸287mm|消費電力: L1200 15.44W / L900 11.58W / L600 7.72W / L300 3.86W|最大直列連結数: 最大直列連結長4.8mまで ※長さ違い灯具の接続可|梱包単位: 1本|対応電源/接続個数: WKLVZ240-6R3HJ 135Wまで / MU200S024BPI500_DALI 180Wまで / LED最大接続数は電源maxAまで|配線距離: 電源〜LED間 VCTF1.25sq 20m以内目安 / VCTF2.0sq 30m以内目安 / DALI信号線 CPEV Φ0.9〜1.2-1P / 信号配線長MAX100m|注意: 5000K/2200Kの2ch配線 / 緑黄線は不使用で防水絶縁 / DALI受信器MAX64台', catalogPage:'P.50〜P.51', catalogPdf:'catalog-pages/aristo-seamlessbeam-tn.pdf', specDownloadUrl:'https://www.aristo-japan.co.jp/download', alias:'シームレスビームTN SeamlessBeam TN SBTS1 調色 2200K 5000K DALI リニア 広角', order:601, active:true},
  {id:'aristo-seamlessbeam-rgb', makerId:'aristo-self', selfProduct:true, series:'リニアタイプ広角', name:'シームレスビーム RGB', code:'SBCS1-12HRGB / SBCS1-09HRGB / SBCS1-06HRGB / SBCS1-03HRGB', type:'定電圧DC24V・リニア広角・RGB', use:'屋外ボーダー / 間接照明', detail:'フルカラー1677万色のRGBモデル。DMX構成ではコントローラーから末端受信器まで総延長100m以内が目安。', spec:'駆動方式: 定電圧 DC24V|発光色: RGB / フルカラー1677万色|調光: DMX / PWM / SPI / DALI / Art-Net / アナログ / 位相 ※構成による|基本仕様: DC24V / 140°半値角 / IP65 / 40,000h ※白色100%点灯時|サイズ: L1200実寸1140mm / L900実寸856mm / L600実寸571mm / L300実寸287mm|消費電力: L1200 17.28W / L900 12.96W / L600 8.64W / L300 4.32W|最大直列連結数: 最大直列連結長4.8mまで ※長さ違い灯具の接続可|梱包単位: 1本|対応電源/接続個数: WKLVZ240-6R3HJ 135Wまで / LED最大接続数は受信器maxAまで / DP3CH-10A 3ch計9.9Aまで|配線距離: 電源〜受信器〜LED間 VCTF1.25sq 20m以内目安 / VCTF2.0sq 30m以内目安 / DMX信号線は末端受信器まで総延長100m以内|注意: 黒+ / 茶R / 緑黄G / 青B / 電源は使用A数以上を用意 / 終端にエンドキャップ', catalogPage:'P.52〜P.53', catalogPdf:'catalog-pages/aristo-seamlessbeam-rgb.pdf', specDownloadUrl:'https://www.aristo-japan.co.jp/download', alias:'シームレスビームRGB SeamlessBeam RGB SBCS1 RGB フルカラー DMX リニア 広角', order:602, active:true},
  {id:'aristo-seamlessbeam-rgbw-ic', makerId:'aristo-self', selfProduct:true, series:'リニアタイプ広角', name:'シームレスビーム RGBW IC', code:'SBCS1-12HDRGBW / SBCS1-09HDRGBW / SBCS1-06HDRGBW / SBCS1-03HDRGBW', type:'定電圧DC24V・リニア広角・RGBW IC', use:'屋外ボーダー / 間接照明', detail:'RGBW IC個別制御モデル。フルカラー約43億色。SPI構成で信号容量・電源容量の確認が重要。', spec:'駆動方式: 定電圧 DC24V|発光色: RGBW / フルカラー約43億色|調光: SPI / DMX / Art-Net / PWM / DALI / アナログ / 位相 ※構成による|基本仕様: DC24V / 140°半値角 / IP65 / 40,000h ※白色100%点灯時|サイズ: L1200実寸1158mm / L900実寸896mm / L600実寸581mm / L300実寸266mm|消費電力: L1200 22.40W / L900 17.31W / L600 11.20W / L300 5.09W|最大直列連結数: 信号容量制限で約40mまで / 灯具の最大直列連結長4.8mまで|梱包単位: 1本|対応電源/接続個数: WKLVZ240-6R3HJ 135Wまで / DIAheart / SMAシリーズ / SPI-1024PIX等はピクセル数・本数確認|配線距離: 調光器〜LED間 CPEV0.9-1P 50m以内目安 / 電源〜調光器・電源〜LED間 VCTF1.25sq 20m以内目安 / VCTF2.0sq 30m以内目安|注意: IN側から接続 / 赤+・白Gnd・緑Data / SPI信号線50m超は信号増幅器使用 / 終端にエンドキャップ', catalogPage:'P.54〜P.55', catalogPdf:'catalog-pages/aristo-seamlessbeam-rgbw-ic.pdf', specDownloadUrl:'https://www.aristo-japan.co.jp/download', alias:'シームレスビームRGBWIC SeamlessBeam RGBW IC SBCS1 HDRGBW SPI DIAheart 個別制御 リニア 広角', order:603, active:true},
  {id:'aristo-glowtube6', makerId:'aristo-self', selfProduct:true, series:'リニアタイプ狭角', name:'グローチューブⅥ', code:'GT612-50H3 / GT612-30H3 / GT609-50H3 / GT609-30H3 / GT606-50H3 / GT606-30H3', type:'定電圧DC24V・リニア狭角', use:'行灯・外照式 / アクリル / D200〜300', detail:'狭角30°のリニアタイプ。内照式・外照式の両方で使えるグローチューブ標準モデル。最大直列連結長4.8mまで。', spec:'駆動方式: 定電圧 DC24V|色温度: 5000K / 3000K|調光: PWM / DMX / SPI / DALI / Art-Net / アナログ / 位相 ※制御機器構成による|基本仕様: DC24V / 30°半値角 / Ra85 / IP65 / 40,000h|サイズ: L1200実寸1146mm / L900実寸861mm / L600実寸576mm|消費電力: L1200 33.60W / L900 25.20W / L600 16.80W|最大直列連結数: 最大直列連結長4.8mまで ※長さ違い灯具同士の接続可|梱包単位: 1本|対応電源/接続個数: WKLVZ240-6R3HJ 135Wまで / LP1026-24 4〜21Wまで|配線距離: 電源〜LED間 VCTF1.25sq 10m以内目安 / VCTF2.0sq 15m以内目安|注意: 極性あり / コネクタ接続 / 終端にエンドキャップ / 内照式は原則両側設置推奨', catalogPage:'P.56〜P.57', catalogPdf:'catalog-pages/aristo-glowtube6.pdf', specDownloadUrl:'https://www.aristo-japan.co.jp/download', alias:'グローチューブ6 グローチューブⅥ GlowTube GT612 GT609 GT606 リニア 狭角 5000K 3000K 行灯 外照式', order:610, active:true},
  {id:'aristo-glowtube6-tn', makerId:'aristo-self', selfProduct:true, series:'リニアタイプ狭角', name:'グローチューブⅥ TN', code:'GT612-T2250H3 / GT609-T2250H3 / GT606-T2250H3', type:'定電圧DC24V・リニア狭角・調色', use:'屋外ボーダー / 間接照明', detail:'2200K〜5000Kを無段階調整できる狭角リニアTNモデル。DALI構成では信号配線長MAX100m、受信器接続数MAX64台まで。', spec:'駆動方式: 定電圧 DC24V|色温度: 2200K〜5000K 無段階調整|調光: DALI / PWM / DMX / SPI / Art-Net / アナログ / 位相 ※構成による|基本仕様: DC24V / 30°半値角 / Ra85 / IP65 / 40,000h|サイズ: L1200実寸1146mm / L900実寸861mm / L600実寸576mm|消費電力: L1200 31.68W / L900 23.76W / L600 15.84W|最大直列連結数: 最大直列連結長4.8mまで ※長さ違い灯具同士の接続可|梱包単位: 1本|対応電源/接続個数: WKLVZ240-6R3HJ 135Wまで / MU200S024BPI500_DALI 180Wまで / LED最大接続数は電源maxAまで|配線距離: 電源〜LED間 VCTF1.25sq 20m以内目安 / VCTF2.0sq 30m以内目安 / DALI信号線 CPEV Φ0.9〜1.2-1P / 信号配線長MAX100m|注意: 黒+・青+・茶1ch-(5000K)・緑黄2ch-(2200K) / DALI BUS極性なし / 受信器MAX64台 / 終端にエンドキャップ', catalogPage:'P.58〜P.59', catalogPdf:'catalog-pages/aristo-glowtube6-tn.pdf', specDownloadUrl:'https://www.aristo-japan.co.jp/download', alias:'グローチューブ6 TN グローチューブⅥTN GlowTube TN GT612-T2250H3 GT609-T2250H3 GT606-T2250H3 調色 2200K 5000K DALI 狭角', order:611, active:true},
  {id:'aristo-glowtube6-rgb', makerId:'aristo-self', selfProduct:true, series:'リニアタイプ狭角', name:'グローチューブⅥ RGB', code:'GT612-RGB36 / GT609-RGB36 / GT606-RGB36', type:'定電圧DC24V・リニア狭角・RGB', use:'屋外ボーダー / 間接照明', detail:'フルカラー1677万色の狭角リニアRGBモデル。最大直列連結長3.6mまで。DMX構成では信号線距離と受信器容量の確認が重要。', spec:'駆動方式: 定電圧 DC24V|発光色: RGB / フルカラー1677万色|調光: DMX / PWM / SPI / DALI / Art-Net / アナログ / 位相 ※構成による|基本仕様: DC24V / 30°×60°半値角 / IP65 / 40,000h ※白色100%点灯時|サイズ: L1200実寸1164mm / L900実寸874mm / L600実寸584mm|消費電力: L1200 31.68W / L900 23.76W / L600 15.84W|最大直列連結数: 最大直列連結長3.6mまで ※長さ違い灯具同士の接続可|梱包単位: 1本|対応電源/接続個数: WKLVZ240-6R3HJ 135Wまで / LED最大接続数は受信器maxAまで / DP3CH-10A 3ch計9.9Aまで|配線距離: 電源〜受信器〜LED間 VCTF1.25sq 10m以内目安 / VCTF2.0sq 15m以内目安 / DMX信号線は末端受信器まで総延長100m以内|注意: 黒+ / 茶R / 緑黄G / 青B / 電源は使用A数以上を用意 / 終端にエンドキャップ', catalogPage:'P.60〜P.61', catalogPdf:'catalog-pages/aristo-glowtube6-rgb.pdf', specDownloadUrl:'https://www.aristo-japan.co.jp/download', alias:'グローチューブ6 RGB グローチューブⅥRGB GlowTube RGB GT612-RGB36 GT609-RGB36 GT606-RGB36 フルカラー DMX 狭角', order:612, active:true},
  {id:'aristo-floodlight2500', makerId:'aristo-self', selfProduct:true, series:'投光器', name:'フラッドライト2500', code:'FB25J-50EB / FB25J-50EW / FB25J-30EB', type:'電源内蔵・AC100〜240V・投光器', use:'外照式サイン / 駐車場灯', detail:'小型の電源内蔵投光器。外照式サインや駐車場灯用途で使いやすく、昼白色5000K・電球色3000Kと黒/白本体の確認が必要。', spec:'駆動方式: 電源内蔵 AC100〜240V|色温度: 5000K / 3000K|調光: 基本は非調光 ※制御構成は要確認|基本仕様: 35VA / Ra95 / 105° / IP65 / 40,000h|サイズ: 本体約W198×H223×D88mm周辺 ※詳細はPDF確認|入力容量: 35VA|器具光束: 5000K 3480lm / 3000K 3270lm|本体色: 黒 / 白|最大直列連結数: 電源内蔵のため対象外|梱包単位: 1台単位想定 ※受注時確認|対応電源/接続個数: 電源内蔵 AC100〜240V / 外部電源不要|配線距離: 一次側配線条件は現場設計確認|注意: 落下防止ワイヤー付属 / アーム・サージプロテクタはオプション / 看板外照は出幅・ピッチ・飛距離を確認', catalogPage:'P.62〜P.63', catalogPdf:'catalog-pages/aristo-floodlight2500.pdf', specDownloadUrl:'https://www.aristo-japan.co.jp/download', alias:'フラッドライト2500 FloodLight 2500 FB25J FB25J-50EB FB25J-50EW FB25J-30EB 投光器 外照 駐車場灯 5000K 3000K 黒 白', order:700, active:true},
  {id:'aristo-floodlight', makerId:'aristo-self', selfProduct:true, series:'投光器', name:'フラッドライト', code:'FL050-50HDS / FL100-50HDS / FL150-50H6S', type:'定電流・大型投光器', use:'外照式サイン / 高天井灯 / 駐車場灯', detail:'外照式サイン向けの高出力投光器。FL050/FL100/FL150の3タイプで、調光可否や対応電源がタイプにより異なるため確認が必要。', spec:'駆動方式: 定電流|色温度: 5000K|調光: PWM / DMX / DALI等 ※調光はFL050/FL100のみ、調光時は電源変更|基本仕様: AC100〜240V / 120°または60°半値角 / Ra85 / IP66 / 40,000h|品番: FL050-50HDS / FL100-50HDS / FL150-50H6S|入力容量: FL050 46VA / FL100 92VA / FL150 150VA ※専用電源入力容量|器具光束: FL050 5110lm / FL100 10300lm / FL150 20790lm|重量: FL050 2.34kg(電源込) / FL100 3.54kg(電源込) / FL150 5.60kg/3.90kg(電源有/無)|最大直列連結数: 対象外|梱包単位: 1台単位想定 ※受注時確認|対応電源/接続個数: FL050 本体内蔵50W×1台 / FL100 β2-700-130NFJ 100W×1台 / FL150 3SC-2R73-48NF 150W×1台|配線距離: 電源別置時は現場配線設計確認|注意: 片側最大45°調整可 / 落下防止ワイヤー・工具セット付属 / サージプロテクタ推奨 / 調光する場合は電源確認必須', catalogPage:'P.64〜P.65', catalogPdf:'catalog-pages/aristo-floodlight.pdf', specDownloadUrl:'https://www.aristo-japan.co.jp/download', alias:'フラッドライト FloodLight FL050 FL100 FL150 FL050-50HDS FL100-50HDS FL150-50H6S 投光器 外照 高天井 駐車場灯 5000K', order:710, active:true},
  {id:'aristo-floodlight-rgbw', makerId:'aristo-self', selfProduct:true, series:'投光器', name:'フラッドライト RGBW', code:'FL050-RGBW5B / FL050-RGBW3B / FL100-RGBW5B / FL100-RGBW3B', type:'定電圧DC24V・RGBW投光器', use:'外照式サイン / 演出照明', detail:'RGBWのフルカラー投光器。50W/100W、30°/50°の選定とDMX系統・受信器容量の確認が重要。', spec:'駆動方式: 定電圧 DC24V|発光色: RGBW / フルカラー約43億色|調光: DMX / PWM / SPI / DALI / Art-Net等 ※構成による|基本仕様: DC24V / IP66 / 40,000h / 白色100%点灯時|品番: FL050-RGBW5B・FL050-RGBW3B / FL100-RGBW5B・FL100-RGBW3B|入力容量: FL050 43.2W / FL100 86.4W|照射角度: 30° / 50°半値角|器具光束: FL050 約2040〜2105lm / FL100 約4040〜4250lm|最大直列連結数: 使用電源の容量まで ※異なる灯具同士で接続可|梱包単位: 1台単位想定 ※受注時確認|対応電源/接続個数: WKLVZ240-6R3HJ 135Wまで / DP3CH-10A等受信器容量確認 / LED最大接続数は受信器maxAまで|配線距離: 電源〜受信器〜LED間 VCTF1.25sq 20m以内目安 / VCTF2.0sq 30m以内目安 / DMX信号線は末端受信器まで総延長100m以内|注意: 黒+・茶R・緑黄G・青B・灰W / FL050は渡り線あり、FL100は渡り線なし / 電源は使用A数以上を用意 / 信号100m超は増幅器使用', catalogPage:'P.66〜P.67', catalogPdf:'catalog-pages/aristo-floodlight-rgbw.pdf', specDownloadUrl:'https://www.aristo-japan.co.jp/download', alias:'フラッドライト RGBW FloodLight RGBW FL050-RGBW FL100-RGBW RGBW 投光器 演出照明 DMX 30度 50度', order:715, active:true},
  {id:'aristo-glowbeam', makerId:'aristo-self', selfProduct:true, series:'投光器', name:'グロービーム', code:'GB12-57H2 / GB09-57H2 / GB06-57H2', type:'電源内蔵・AC100〜240V・リニア投光器', use:'外照式サイン / 駐車場灯', detail:'電源内蔵のリニア型投光器。看板外照でL1200/L900/L600を選定し、最長連結距離と取付高さを確認する。', spec:'駆動方式: 電源内蔵 AC100〜240V|色温度: 5700K|調光: PWM / SPI等 ※構成確認 / DMX表記なし|基本仕様: AC100〜240V / 25°半値角 / Ra85 / IP65 / 40,000h|品番: GB12-57H2 / GB09-57H2 / GB06-57H2|入力容量: GB12 18.80VA / GB09 15.0VA / GB06 10.80VA|器具光束: GB12 1585lm / GB09 1195lm / GB06 795lm|重量: GB12 2.3kg / GB09 1.8kg / GB06 1.25kg|最長連結距離: AC100V 31m / AC200V 62m|梱包単位: 1台単位想定 ※受注時確認|対応電源/接続個数: 電源内蔵 / 外部電源不要|配線距離: 電源内蔵のため一次側配線距離は現場設計確認|注意: 取付高さ15m以下 / 許容風速60m/s / ブラケット付属 / 複数台設置時は連結部にブラケット設置', catalogPage:'P.68〜P.69', catalogPdf:'catalog-pages/aristo-glowbeam.pdf', specDownloadUrl:'https://www.aristo-japan.co.jp/download', alias:'グロービーム GlowBeam GB12 GB09 GB06 GB12-57H2 GB09-57H2 GB06-57H2 投光器 外照 駐車場灯 5700K', order:720, active:true},
  {id:'aristo-tep4-700-250nfj', makerId:'aristo-self', selfProduct:true, series:'電源', name:'TEP4-700-250NFJ', code:'TEP4-700-250NFJ', type:'定電流700mA電源', use:'定電流LED用', detail:'定電流700mA、最大147W（AC100V）/175W（AC200V）。接続個数は4〜67個（AC100V）/47〜80個（AC200V）。', spec:'駆動方式: 定電流|出力電流: DC700mA|最大出力電力: 147W(AC100V) / 175W(AC200V)|入力電流: 1.99A(AC100V) / 1.00A(AC200V)|サイズ: 218×85×47mm|環境保護: IPX5相当 防滴|安全規格: PSE|製品質量: 1,500g|注意: 接続するLEDの電圧・接続個数範囲を必ず確認', catalogPage:'P.70', catalogPdf:'catalog-pages/aristo-power-cc-cv.pdf', alias:'TEP4 700 250NFJ 定電流 700mA 電源', order:900, active:true},
  {id:'aristo-beta2-700-130nfj', makerId:'aristo-self', selfProduct:true, series:'電源', name:'β2-700-130NFJ', code:'β2-700-130NFJ', type:'定電流700mA電源', use:'定電流LED用', detail:'定電流700mA、最大91W。接続個数23〜41個。', spec:'駆動方式: 定電流|出力電流: DC700mA|最大出力電力: 91W|入力電流: 1.02A(AC100V) / 0.51A(AC200V)|サイズ: 144×80×42mm|環境保護: IPX6相当 防滴|安全規格: PSE|製品質量: 840g', catalogPage:'P.70', catalogPdf:'catalog-pages/aristo-power-cc-cv.pdf', alias:'ベータ2 β2 700 130NFJ 定電流 700mA 電源', order:901, active:true},
  {id:'aristo-hlp1030-42-c0700', makerId:'aristo-self', selfProduct:true, series:'電源', name:'HLP1030-42-C0700', code:'HLP1030-42-C0700', type:'定電流700mA電源', use:'定電流LED用', detail:'定電流700mA、最大30W。接続個数8〜13個。', spec:'駆動方式: 定電流|出力電流: DC700mA|最大出力電力: 30W|入力電流: 0.40A(AC100V) / 0.20A(AC200V)|サイズ: 95×40×25mm|環境保護: IP66相当 防滴|安全規格: PSE|製品質量: 170g', catalogPage:'P.70', catalogPdf:'catalog-pages/aristo-power-cc-cv.pdf', alias:'HLP1030 42 C0700 定電流 700mA 電源', order:902, active:true},
  {id:'aristo-beta1-350-130nfj', makerId:'aristo-self', selfProduct:true, series:'電源', name:'β1-350-130NFJ', code:'β1-350-130NFJ', type:'定電流350mA電源', use:'定電流LED用', detail:'定電流350mA、最大46W。接続個数は通常色23〜41個、赤色34〜50個。', spec:'駆動方式: 定電流|出力電流: DC350mA|最大出力電力: 46W|入力電流: 0.55A(AC100V) / 0.28A(AC200V)|サイズ: 162×47×37mm|環境保護: IPX6相当 防滴|安全規格: PSE|製品質量: 540g', catalogPage:'P.70', catalogPdf:'catalog-pages/aristo-power-cc-cv.pdf', alias:'ベータ1 β1 350 130NFJ 定電流 350mA 電源', order:903, active:true},
  {id:'aristo-wklvz240-6r3hj', makerId:'aristo-self', selfProduct:true, series:'電源', name:'WKLVZ240-6R3HJ', code:'WKLVZ240-6R3HJ', type:'定電圧DC24V電源', use:'DC24V LED用', detail:'DC24V、最大負荷135Wまで。最大出力電力150W。', spec:'駆動方式: 定電圧|出力電圧: DC24V|最大負荷: 135Wまで|最大出力電力: 150W|入力電流: 1.71A(AC100V) / 0.84A(AC200V)|サイズ: 241×65×50mm|環境保護: IP65相当 防滴|安全規格: PSE|製品質量: 1,095g', catalogPage:'P.71', catalogPdf:'catalog-pages/aristo-power-cc-cv.pdf', alias:'WKLVZ240 6R3HJ 定電圧 DC24V 150W 135W 電源', order:904, active:true},
  {id:'aristo-lp1026-24', makerId:'aristo-self', selfProduct:true, series:'電源', name:'LP1026-24', code:'LP1026-24', type:'定電圧DC24V電源', use:'DC24V LED用', detail:'DC24V、最大負荷4〜21Wまで。最大出力電力30W。', spec:'駆動方式: 定電圧|出力電圧: DC24V|最大負荷: 4〜21Wまで|最大出力電力: 30W|入力電流: 0.37A(AC100V) / 0.19A(AC200V)|サイズ: 95×40×25mm|環境保護: IP66相当 防滴|安全規格: PSE|製品質量: 170g', catalogPage:'P.71', catalogPdf:'catalog-pages/aristo-power-cc-cv.pdf', alias:'LP1026 24 定電圧 DC24V 30W 電源', order:905, active:true},
  {id:'aristo-hlg-150h-12', makerId:'aristo-self', selfProduct:true, series:'電源', name:'HLG-150H-12', code:'HLG-150H-12', type:'定電圧DC12V電源', use:'DC12V LED用', detail:'DC12V、最大負荷135Wまで。最大出力電力150W。', spec:'駆動方式: 定電圧|出力電圧: DC12V|最大負荷: 135Wまで|最大出力電力: 150W|入力電流: 2.00A(AC100V) / 0.95A(AC200V)|サイズ: 228×68×38.8mm|環境保護: IP67相当 防滴|安全規格: PSE|製品質量: 1,150g', catalogPage:'P.71', catalogPdf:'catalog-pages/aristo-power-cc-cv.pdf', alias:'HLG 150H 12 定電圧 DC12V 150W 135W 電源', order:906, active:true},

  {id:'aristo-tep4-700-250pwmfj', makerId:'aristo-self', selfProduct:true, series:'PWM関連機器', name:'TEP4-700-250PWMFJ', code:'TEP4-700-250PWMFJ', type:'PWM対応・定電流700mA電源', use:'PWM調光・定電流LED用', detail:'定電流700mA、最大147W（AC100V）/175W（AC200V）。調光信号入力電流4mA。', spec:'定格入力電圧: AC100〜240V|出力電流: DC700mA|最大出力電力: 147W(AC100V) / 175W(AC200V)|調光信号入力電流: 4mA|サイズ: 218×85×47mm|環境保護: IPX5相当 防滴|製品質量: 1,500g', catalogPage:'P.72', catalogPdf:'catalog-pages/aristo-pwm.pdf', alias:'TEP4 700 250 PWMFJ PWM 定電流 電源', order:920, active:true},
  {id:'aristo-beta2-700-130pwmfj', makerId:'aristo-self', selfProduct:true, series:'PWM関連機器', name:'β2-700-130PWMFJ', code:'β2-700-130PWMFJ', type:'PWM対応・定電流700mA電源', use:'PWM調光・定電流LED用', detail:'定電流700mA、最大91W。調光信号入力電流4mA。', spec:'定格入力電圧: AC100〜240V|出力電流: DC700mA|最大出力電力: 91W|調光信号入力電流: 4mA|サイズ: 144×80×42mm|環境保護: IPX6相当 防滴|製品質量: 840g', catalogPage:'P.72', catalogPdf:'catalog-pages/aristo-pwm.pdf', alias:'β2 700 130 PWMFJ PWM 定電流 電源', order:921, active:true},
  {id:'aristo-beta1-700-65pwmfj', makerId:'aristo-self', selfProduct:true, series:'PWM関連機器', name:'β1-700-65PWMFJ', code:'β1-700-65PWMFJ', type:'PWM対応・定電流700mA電源', use:'PWM調光・定電流LED用', detail:'定電流700mA、最大45.5W。接続個数12〜20個。', spec:'定格入力電圧: AC100〜240V|出力電流: DC700mA|最大出力電力: 45.5W|調光信号入力電流: 4mA|サイズ: 162×47×37mm|環境保護: IPX6相当 防滴|製品質量: 540g', catalogPage:'P.72', catalogPdf:'catalog-pages/aristo-pwm.pdf', alias:'β1 700 65 PWMFJ PWM 定電流 電源', order:922, active:true},
  {id:'aristo-wklvz240-6r3hj-p5', makerId:'aristo-self', selfProduct:true, series:'PWM関連機器', name:'WKLVZ240-6R3HJ/P5', code:'WKLVZ240-6R3HJ/P5', type:'PWM対応・定電圧DC24V電源', use:'PWM調光・DC24V LED用', detail:'DC24V、最大負荷135Wまで。最大出力電力150W。', spec:'定格入力電圧: AC100〜240V|出力電圧: DC24V|最大負荷: 135Wまで|最大出力電力: 150W|調光信号入力電流: 3mA|サイズ: 241×65×50mm|環境保護: IP65相当 防滴|製品質量: 1,095g', catalogPage:'P.72', catalogPdf:'catalog-pages/aristo-pwm.pdf', alias:'WKLVZ240 6R3HJ P5 PWM DC24V 電源', order:923, active:true},
  {id:'aristo-pd-10a', makerId:'aristo-self', selfProduct:true, series:'PWM関連機器', name:'PD-10A', code:'PD-10A', type:'PWM受信器・2ch', use:'DC12〜24V PWM調光', detail:'2ch、各10A（Max5A/ch）。DC12〜24V PWM（1kHz）信号対応。', spec:'定格入力電圧: DC9〜24V|出力電圧: 入力電圧と同じ|出力電流: 2ch 各10A(Max5A/ch)|調光入力信号: DC12〜24V PWM(1kHz)|サイズ: 107×64.5×26mm|環境保護: 屋内用|製品質量: 185g', catalogPage:'P.73', catalogPdf:'catalog-pages/aristo-pwm.pdf', alias:'PD10A PWM 受信器 2ch 10A', order:924, active:true},
  {id:'aristo-pa1ch-r25', makerId:'aristo-self', selfProduct:true, series:'PWM関連機器', name:'PA1CH-R25', code:'PA1CH-R25', type:'PWM信号増幅器', use:'PWM信号の増幅・分配', detail:'PWM方式（1〜24V/1kHz）、1入力1出力。', spec:'定格入力電圧: DC9〜24V|消費電力: 250mA|調光入力方式: PWM方式(1〜24V/1kHz)|信号入力: 1入力|信号出力: 1出力|サイズ: 110×66×25mm|環境保護: 屋内用|製品質量: 200g', catalogPage:'P.73', catalogPdf:'catalog-pages/aristo-pwm.pdf', alias:'PA1CH R25 PWM 信号増幅器', order:925, active:true},
  {id:'aristo-lza-93099', makerId:'aristo-self', selfProduct:true, series:'PWM関連機器', name:'LZA-93099', code:'LZA-93099', type:'大光電機 PWMコントローラー', use:'2個用スイッチボックス適合', detail:'12V PWM（1kHz）無極性、250mA、10Aスイッチ。', spec:'定格入力電圧: AC100〜240V 50/60Hz|調光出力方式: 12V PWM(1kHz)無極性|調光信号容量: 250mA|スイッチ許容電流: 10A|その他: 2個用スイッチボックス適合|サイズ: 116×120×34mm|環境保護: 屋内用|製品質量: 400g', catalogPage:'P.73', catalogPdf:'catalog-pages/aristo-pwm.pdf', alias:'LZA93099 大光電機 PWM コントローラー', order:926, active:true},
  {id:'aristo-nq21505', makerId:'aristo-self', selfProduct:true, series:'PWM関連機器', name:'NQ21505', code:'NQ21505', type:'パナソニック PWMコントローラー', use:'1個用スイッチボックス適合', detail:'12V PWM（1kHz）無極性、250mA、1回路。', spec:'定格入力電圧: AC100〜240V 50/60Hz|調光出力方式: 12V PWM(1kHz)無極性|調光信号容量: 250mA|調光回路: 1回路|その他: 1個用スイッチボックス適合|サイズ: 42.6×91.5×40.5mm|環境保護: 屋内用|製品質量: 200g', catalogPage:'P.73', catalogPdf:'catalog-pages/aristo-pwm.pdf', alias:'NQ21505 パナソニック PWM コントローラー', order:927, active:true},
  {id:'aristo-nq28841k', makerId:'aristo-self', selfProduct:true, series:'PWM関連機器', name:'NQ28841K', code:'NQ28841K', type:'パナソニック PWMライトマネージャーFx', use:'4回路・4シーン制御', detail:'12V PWM（1kHz）無極性、4回路各110mA。4シーン記憶・タイマー制御。', spec:'定格入力電圧: AC100V 50/60Hz|調光出力方式: 12V PWM(1kHz)無極性|調光信号容量: 4回路各110mA|調光回路: 4回路|その他: 4シーン記憶可能・タイマー制御 / 4個用スイッチボックス適合|サイズ: 208×120×47mm|環境保護: 屋内用', catalogPage:'P.73', catalogPdf:'catalog-pages/aristo-pwm.pdf', alias:'NQ28841K パナソニック PWM ライトマネージャー Fx 4回路', order:928, active:true},

  {id:'aristo-dp3ch-10a', makerId:'aristo-self', selfProduct:true, series:'DMX関連機器', name:'DP3CH-10A', code:'DP3CH-10A', type:'DMX受信器・3ch', use:'RGB・3ch DMX制御', detail:'DMX512ch、3ch各9.9Aまで（Max4A/ch）。', spec:'定格入力電圧: DC12〜24V|出力電圧: 入力電圧と同じ|出力電流: 3ch 各9.9Aまで(Max4A/ch)|調光入力信号: DMX 512ch|階調: 4096階調|サイズ: 110×66×19mm|環境保護: 屋内用|製品質量: 112g', catalogPage:'P.74', catalogPdf:'catalog-pages/aristo-dmx-spi.pdf', alias:'DP3CH 10A DMX 受信器 RGB 3ch', order:940, active:true},
  {id:'aristo-px0408', makerId:'aristo-self', selfProduct:true, series:'DMX関連機器', name:'PX0408', code:'PX0408', type:'DMX受信器・4ch', use:'RGBW・4ch DMX制御', detail:'DMX、4ch各32Aまで（Max8A/ch）、256階調。', spec:'定格入力電圧: DC12〜24V|出力電圧: 入力電圧と同じ|出力電流: 4ch 計32Aまで(Max8A/ch)|調光入力信号: DMX|階調: 256階調|サイズ: 140×50×32mm|環境保護: 屋内用|製品質量: 240g', catalogPage:'P.74', catalogPdf:'catalog-pages/aristo-dmx-spi.pdf', alias:'PX0408 DMX 受信器 RGBW 4ch', order:941, active:true},
  {id:'aristo-slesa-u11', makerId:'aristo-self', selfProduct:true, series:'DMX関連機器', name:'SLESA-U11', code:'SLESA-U11', type:'DMXコントローラー', use:'スタンドアロンDMX制御', detail:'2ユニバース（DMX1024ch）、タイマー機能付き。', spec:'定格入力電圧: DC5V(ACアダプター付属)|調光出力方式: DMX|最大記憶能力: 2ユニバース / DMX1024ch|タイマー機能: 有り|サイズ: 160×90×45mm|環境保護: 屋内用|製品質量: 268g', catalogPage:'P.74', catalogPdf:'catalog-pages/aristo-dmx-spi.pdf', alias:'SLESA U11 DMX コントローラー 2ユニバース 1024ch', order:942, active:true},
  {id:'aristo-rdm-6wall', makerId:'aristo-self', selfProduct:true, series:'DMX関連機器', name:'RDM-6wall', code:'RDM-6wall', type:'DMX信号分配器・6出力', use:'DMX512chの分配', detail:'DMX512ch、1入力6出力。', spec:'定格入力電圧: DC12〜24V|消費電力: 4.5W|調光入力信号: DMX 512ch|信号入力: 1入力|信号出力: 6出力|サイズ: 195×105×20mm|環境保護: 屋内用|製品質量: 250g', catalogPage:'P.74', catalogPdf:'catalog-pages/aristo-dmx-spi.pdf', alias:'RDM 6wall DMX 分配器 6出力', order:943, active:true},
  {id:'aristo-spi-1024pix', makerId:'aristo-self', selfProduct:true, series:'SPI関連機器', name:'SPI-1024PIX', code:'SPI-1024PIX', type:'SPI受信器', use:'SPIピクセル制御', detail:'1ポート最大1024pix、タイマー機能、DINレール対応。', spec:'定格入力電圧: DC5〜24V|消費電力: 5W|調光入力方式: SPI|最大記憶能力: 1ポート / 1024pix|タイマー機能: 有り|その他: DINレール対応|サイズ: 98×56.5×22.5mm|環境保護: 屋内用|製品質量: 53.3g', catalogPage:'P.75', catalogPdf:'catalog-pages/aristo-dmx-spi.pdf', alias:'SPI 1024PIX SPI 受信器 1024 pixel DINレール', order:944, active:true},
  {id:'aristo-spi-sym', makerId:'aristo-self', selfProduct:true, series:'SPI関連機器', name:'SPI-SYM', code:'SPI-SYM', type:'SPI信号増幅器', use:'SPI信号の分配・増幅', detail:'1入力1出力、2台（IN・OUT）1セット。', spec:'定格入力電圧: DC8〜24V|消費電力: 5W|調光入力方式: SPI|信号入出力: 1入力 / 1出力|その他: 2台(IN・OUT)1セット|サイズ: 111×45.6×27.5mm|環境保護: 屋内用|製品質量: 10g', catalogPage:'P.75', catalogPdf:'catalog-pages/aristo-dmx-spi.pdf', alias:'SPI SYM SPI 信号増幅器 IN OUT', order:945, active:true},

  {id:'aristo-diaheart', makerId:'aristo-self', selfProduct:true, series:'Art-Net関連機器', name:'DIAheart', code:'DIAheart', type:'Art-Netコントローラー', use:'Art-Net演出制御', detail:'最大記憶能力400ユニバース／DMX204800ch、タッチパネル式、タイマー機能付き。', spec:'定格入力電圧: DC5V(ACアダプター付属)|調光出力方式: Art-Net|最大記憶能力: 400ユニバース / DMX204800ch|タイマー機能: 有り|その他: タッチパネル式|サイズ: 155×140×44mm|環境保護: 屋内用|製品質量: 600g', catalogPage:'P.76', catalogPdf:'catalog-pages/aristo-artnet.pdf', alias:'DIAheart ダイヤハート ArtNet Art-Net コントローラー 400ユニバース', order:960, active:true},
  {id:'aristo-exd', makerId:'aristo-self', selfProduct:true, series:'Art-Net関連機器', name:'ExD', code:'ExD', type:'Art-Net・DMX変換器', use:'Art-NetからDMXへの変換', detail:'Art-Net入力、DMX 4ユニバース／DMX2048ch出力。', spec:'定格入力電圧: DC5V(ACアダプター付属)|調光入力方式: Art-Net|調光出力方式: DMX|調光出力能力: 4ユニバース / DMX2048ch|サイズ: 106×90×58mm|環境保護: 屋内用|製品質量: 200g', catalogPage:'P.76', catalogPdf:'catalog-pages/aristo-artnet.pdf', alias:'ExD ArtNet DMX 変換器 4ユニバース 2048ch', order:961, active:true},
  {id:'aristo-sma-1024pix', makerId:'aristo-self', selfProduct:true, series:'Art-Net関連機器', name:'SMA-1024PIX', code:'SMA-1024PIX', type:'Art-Net・SPI受信器', use:'Art-NetからSPIへの変換', detail:'SPI（DMX・Art-Net入力可）、1024pix（4ポート）。', spec:'定格入力電圧: DC5〜24V|調光入力方式: Art-Net|調光出力方式: SPI(DMX・Art-Net入力可)|調光出力能力: 1024pix(4ポート)|その他: DINレール対応+取付金具有|サイズ: 142×68.8×43.6mm|環境保護: 屋内用|製品質量: 468.8g', catalogPage:'P.76', catalogPdf:'catalog-pages/aristo-artnet.pdf', alias:'SMA 1024PIX ArtNet SPI 受信器 4ポート', order:962, active:true},
  {id:'aristo-sma-2048pix', makerId:'aristo-self', selfProduct:true, series:'Art-Net関連機器', name:'SMA-2048PIX', code:'SMA-2048PIX', type:'Art-Net・SPI受信器', use:'Art-NetからSPIへの変換', detail:'SPI（DMX・Art-Net入力可）、2048pix（4ポート）。', spec:'定格入力電圧: DC5〜24V|調光入力方式: Art-Net|調光出力方式: SPI(DMX・Art-Net入力可)|調光出力能力: 2048pix(4ポート)|その他: DINレール対応+取付金具有|サイズ: 142×68.8×43.6mm|環境保護: 屋内用|製品質量: 468.8g', catalogPage:'P.76', catalogPdf:'catalog-pages/aristo-artnet.pdf', alias:'SMA 2048PIX ArtNet SPI 受信器 4ポート', order:963, active:true},
  {id:'aristo-sma-4096pix', makerId:'aristo-self', selfProduct:true, series:'Art-Net関連機器', name:'SMA-4096PIX', code:'SMA-4096PIX', type:'Art-Net・SPI受信器', use:'Art-NetからSPIへの変換', detail:'SPI（DMX・Art-Net入力可）、4096pix（4ポート）。', spec:'定格入力電圧: DC5〜24V|調光入力方式: Art-Net|調光出力方式: SPI(DMX・Art-Net入力可)|調光出力能力: 4096pix(4ポート)|その他: DINレール対応+取付金具有|サイズ: 142×68.8×43.6mm|環境保護: 屋内用|製品質量: 468.8g', catalogPage:'P.76', catalogPdf:'catalog-pages/aristo-artnet.pdf', alias:'SMA 4096PIX ArtNet SPI 受信器 4ポート', order:964, active:true},
  {id:'aristo-lsw6-gt-5ns-bk', makerId:'aristo-self', selfProduct:true, series:'Art-Net関連機器', name:'LSW6-GT-5NS/BK', code:'LSW6-GT-5NS/BK', type:'スイッチングハブ・5ポート', use:'Art-Netネットワーク構築', detail:'5ポート、伝送距離最大100m。', spec:'定格入力電圧: AC100V 50/60Hz|ポート数: 5ポート|消費電力: 2.5W|伝送距離: 最大100m|サイズ: 143×86×29mm|環境保護: 屋内用|製品質量: 310g', catalogPage:'P.77', catalogPdf:'catalog-pages/aristo-artnet.pdf', alias:'LSW6 GT 5NS BK スイッチングハブ 5ポート ArtNet', order:965, active:true},
  {id:'aristo-lsw6-gt-8ns-bk', makerId:'aristo-self', selfProduct:true, series:'Art-Net関連機器', name:'LSW6-GT-8NS/BK', code:'LSW6-GT-8NS/BK', type:'スイッチングハブ・8ポート', use:'Art-Netネットワーク構築', detail:'8ポート、伝送距離最大100m。', spec:'定格入力電圧: AC100V 50/60Hz|ポート数: 8ポート|消費電力: 3.8W|伝送距離: 最大100m|サイズ: 173×86×29mm|環境保護: 屋内用|製品質量: 370g', catalogPage:'P.77', catalogPdf:'catalog-pages/aristo-artnet.pdf', alias:'LSW6 GT 8NS BK スイッチングハブ 8ポート ArtNet', order:966, active:true},

  {id:'aristo-mu200s024bpi500-dali', makerId:'aristo-self', selfProduct:true, series:'DALI関連機器', name:'MU200S024BPI500_DALI', code:'MU200S024BPI500_DALI', type:'DALI対応・定電圧DC24V電源', use:'DALI調光・DC24V LED用', detail:'DC24V、最大200W（1chあたり180Wまで）。DALI制御対応。', spec:'定格入力電圧: AC100〜240V|出力電圧: DC24V|最大出力電力: 200W(1chあたり180Wまで)|入力電流: 2.3A(AC100V)|調光信号入力電流: 2mA|サイズ: 251×67.5×51mm|環境保護: IP67相当 防滴|製品質量: 1,320g', catalogPage:'P.78', catalogPdf:'catalog-pages/aristo-dali.pdf', alias:'MU200S024BPI500 DALI DC24V 200W 電源', order:980, active:true},
  {id:'aristo-2303p', makerId:'aristo-self', selfProduct:true, series:'DALI関連機器', name:'2303P', code:'2303P', type:'DALI Type6 受信器', use:'DALI調光・単色制御', detail:'DC12〜36V、4ch各20A（Max5A/ch）。アドレス数1〜4ch。', spec:'定格入力電圧: DC12〜36V|出力電圧: 入力電圧と同じ|出力電流: 4ch各20A(Max5A/ch)|調光出力信号: DALI(Type6)|その他: アドレス数切替可(1〜4ch)|サイズ: 166×53.4×23mm|環境保護: 屋内用|製品質量: 115g', catalogPage:'P.78', catalogPdf:'catalog-pages/aristo-dali.pdf', alias:'2303P DALI Type6 受信器 4ch', order:981, active:true},
  {id:'aristo-2309pro', makerId:'aristo-self', selfProduct:true, series:'DALI関連機器', name:'2309PRO', code:'2309PRO', type:'DALI Type8 受信器', use:'DALI調色・カラー調色', detail:'DC12〜36V、4ch各20A（Max5A/ch）。調色・カラー調色対応。', spec:'定格入力電圧: DC12〜36V|出力電圧: 入力電圧と同じ|出力電流: 4ch各20A(Max5A/ch)|調光出力信号: DALI(Type8)|その他: 調色・カラー調色対応|サイズ: 170×53.4×28mm|環境保護: 屋内用|製品質量: 138g', catalogPage:'P.78', catalogPdf:'catalog-pages/aristo-dali.pdf', alias:'2309PRO DALI Type8 受信器 調色 カラー調色 4ch', order:982, active:true},
  {id:'aristo-le004025lbzw1', makerId:'aristo-self', selfProduct:true, series:'DALI関連機器', name:'LE004025LBZW1', code:'LE004025LBZW1', type:'DALI BUS電源', use:'DALI BUSへの電力供給', detail:'DC16V、DALI64アドレスまで。調色・カラー調色対応。', spec:'定格入力電圧: AC100〜240V 50/60Hz|出力電圧: DC16V|入力容量: 12.5〜16VA|その他: DALI64アドレスまで / 調色・カラー調色対応|サイズ: 158×65×50.5mm|環境保護: 屋内用|製品質量: 380g', catalogPage:'P.78', catalogPdf:'catalog-pages/aristo-dali.pdf', alias:'LE004025LBZW1 DALI BUS 電源 DC16V 64アドレス', order:983, active:true},
  {id:'aristo-2300tr-g4-dim', makerId:'aristo-self', selfProduct:true, series:'DALI関連機器', name:'2300TR-G4-DIM', code:'2300TR-G4-DIM', type:'DALI Type6 ロータリーコントローラー', use:'DALI調光', detail:'4グループ・4シーン、EUスイッチボックス適合。', spec:'駆動電源: DALI信号より供給|調光出力信号: DALI(Type6)|入力電流: 4mA(最大)|サイズ: 86×86×41mm|環境保護: 屋内用|その他: 4グループ・4シーン / EUスイッチボックス適合|製品質量: 175g', catalogPage:'P.79', catalogPdf:'catalog-pages/aristo-dali.pdf', alias:'2300TR G4 DIM DALI Type6 ロータリー コントローラー 調光', order:984, active:true},
  {id:'aristo-2300tr-g4-cct', makerId:'aristo-self', selfProduct:true, series:'DALI関連機器', name:'2300TR-G4-CCT', code:'2300TR-G4-CCT', type:'DALI Type8 ロータリーコントローラー', use:'DALI調色', detail:'4グループ・4シーン、EUスイッチボックス適合。', spec:'駆動電源: DALI信号より供給|調光出力信号: DALI(Type8)|入力電流: 15mA(最大)|サイズ: 86×86×41mm|環境保護: 屋内用|その他: 4グループ・4シーン / EUスイッチボックス適合|製品質量: 175g', catalogPage:'P.79', catalogPdf:'catalog-pages/aristo-dali.pdf', alias:'2300TR G4 CCT DALI Type8 ロータリー コントローラー 調色', order:985, active:true},
  {id:'aristo-edt3', makerId:'aristo-self', selfProduct:true, series:'DALI関連機器', name:'EDT3', code:'EDT3', type:'DALI Type8 タッチコントローラー', use:'DALI調色・カラー調色', detail:'4グループ・4シーン、EUスイッチボックス適合。', spec:'駆動電源: DALI信号より供給|調光出力信号: DALI(Type8)|入力電流: 6mA(最大)|サイズ: 86×86×33.4mm|環境保護: 屋内用|その他: 4グループ・4シーン / EUスイッチボックス適合|製品質量: 240g', catalogPage:'P.79', catalogPdf:'catalog-pages/aristo-dali.pdf', alias:'EDT3 DALI Type8 タッチ コントローラー 調色 カラー調色', order:986, active:true},


  {id:'lg-sg-100v-i2', makerId:'ledglow-sign', series:'SG-100V iタイプ', name:'SG-100V i2', code:'SG-100V i2', type:'AC100V・カバータイプ・2球LEDモジュール', use:'小型チャンネル文字・細め文字・屋外内照', detail:'1個カット。0.5W、3000K/6000K、全光束54lm、芯芯ピッチ110±5mm、寸法41×16×10.7mm。', alias:'LEDグロー えるいーでぃーぐろー SG100V i2 アイ2 カバータイプ AC100V 小型 チャンネル文字 細文字 屋外内照', url:'https://ledglow.jp/webcatalog1_6_2/#page=4', order:6000, active:true},
  {id:'lg-sg-100v-i3', makerId:'ledglow-sign', series:'SG-100V iタイプ', name:'SG-100V i3', code:'SG-100V i3', type:'AC100V・カバータイプ・3球LEDモジュール', use:'500角前後の文字・バックライトチャンネル文字', detail:'1個カット。0.82W、3000K/6000K、全光束160lm、芯芯ピッチ180±5mm、寸法66×16×10.7mm。', alias:'LEDグロー SG100V i3 アイ3 AC100V カバー 3球 バックライト チャンネル文字 500角', url:'https://ledglow.jp/webcatalog1_6_2/#page=4', order:6010, active:true},
  {id:'lg-sg-100v-i4', makerId:'ledglow-sign', series:'SG-100V iタイプ', name:'SG-100V i4', code:'SG-100V i4', type:'AC100V・カバータイプ・4球LEDモジュール', use:'1000角程度の文字・深い行灯サイン', detail:'1個カット。0.82W、3000K/6000K、全光束213lm、芯芯ピッチ180±5mm、寸法44×44×11.3mm。', alias:'LEDグロー SG100V i4 アイ4 AC100V 4球 行灯 深い行灯 大型 チャンネル文字', url:'https://ledglow.jp/webcatalog1_6_2/#page=4', order:6020, active:true},
  {id:'lg-lg-100v-1l-08w', makerId:'ledglow-sign', series:'LG-100V レンズタイプ', name:'LG-100V 1L-0.8W', code:'LG-100V 1L-0.8W', type:'AC100V・広角レンズ・1灯LEDモジュール', use:'薄型サイン・小型〜中型サイン・チャンネル文字', detail:'1個カット。広角165°、0.8W、3000K/4000K/6000K、全光束43lm、芯芯ピッチ200±5mm。', alias:'LEDグロー LG100V 1L 0.8W レンズタイプ 広角レンズ 165度 薄型サイン 小型サイン', url:'https://ledglow.jp/webcatalog1_6_2/#page=6', order:6030, active:true},
  {id:'lg-lg-100v-2l-24w', makerId:'ledglow-sign', series:'LG-100V レンズタイプ', name:'LG-100V 2L-2.4W', code:'LG-100V 2L-2.4W', type:'AC100V・広角レンズ・2灯LEDモジュール', use:'大型チャンネル文字・大型行灯', detail:'1個カット。広角165°、2.4W、3000K/6000K、全光束182lm、芯芯ピッチ340±5mm。', alias:'LEDグロー LG100V 2L 2.4W レンズタイプ 広角レンズ 大型 チャンネル文字 大型行灯', url:'https://ledglow.jp/webcatalog1_6_2/#page=6', order:6040, active:true},
  {id:'lg-sg-12v-l2', makerId:'ledglow-sign', series:'SG-12V カバータイプ', name:'SG-12V L2', code:'SG-12V L2', type:'DC12V・カバータイプ・2球LEDモジュール', use:'小型内照チャンネル文字・バックライト文字', detail:'1個カット。0.48W、3000K/6000K、全光束46lm、芯芯ピッチ90±5mm、最大直列50個。', alias:'LEDグロー SG12V L2 カバータイプ DC12V 小型 チャンネル文字 バックライト', url:'https://ledglow.jp/webcatalog1_6_2/#page=8', order:6050, active:true},
  {id:'lg-sg-12v-l3ic', makerId:'ledglow-sign', series:'SG-12V カバータイプ', name:'SG-12V L3iC', code:'SG-12V L3iC', type:'DC12V・iC搭載・3球LEDモジュール', use:'中型サイン・チャンネル文字・バックライト', detail:'1個カット。0.72W、3000K/4000K/6000K、全光束69lm、芯芯ピッチ180±5mm、最大直列75個。', alias:'LEDグロー SG12V L3iC L3IC アイシー IC DC12V 中型サイン 3球 電源30m', url:'https://ledglow.jp/webcatalog1_6_2/#page=8', order:6060, active:true},
  {id:'lg-sg-12v-l4ic', makerId:'ledglow-sign', series:'SG-12V カバータイプ', name:'SG-12V L4iC', code:'SG-12V L4iC', type:'DC12V・iC搭載・4球LEDモジュール', use:'大型サイン・行灯看板・チャンネル文字', detail:'1個カット。0.96W、3000K/4000K/6000K、全光束92lm、芯芯ピッチ185±5mm、最大直列75個。', alias:'LEDグロー SG12V L4iC L4IC アイシー IC DC12V 大型サイン 行灯看板 4球', url:'https://ledglow.jp/webcatalog1_6_2/#page=8', order:6070, active:true},
  {id:'lg-lg-12v-2l-23w', makerId:'ledglow-sign', series:'LG-12V/24V レンズタイプ', name:'LG-12V 2L-2.3W', code:'LG-12V 2L-2.3W', type:'DC12V・広角レンズ・2灯LEDモジュール', use:'大型行灯・大型チャンネル文字', detail:'1個カット。2.3W、6000K、全光束165lm、芯芯ピッチ340±5mm、広角165°。', alias:'LEDグロー LG12V 2L 2.3W レンズタイプ 広角レンズ 大型行灯 6000K', url:'https://ledglow.jp/webcatalog1_6_2/#page=10', order:6080, active:true},
  {id:'lg-lg-24v-3l-38w', makerId:'ledglow-sign', series:'LG-12V/24V レンズタイプ', name:'LG-24V 3L-3.8W', code:'LG-24V 3L-3.8W', type:'DC24V・広角レンズ・3灯ハイパワーモジュール', use:'大型看板・自立式内照サイン・天井行灯', detail:'1個カット。3.8W、3000K/6000K、全光束300lm、芯芯ピッチ400±5mm、広角165°。', alias:'LEDグロー LG24V 3L 3.8W レンズタイプ DC24V ハイパワー 大型看板 自立サイン', url:'https://ledglow.jp/webcatalog1_6_2/#page=10', order:6090, active:true},
  {id:'lg-lg-12v-1l-08w', makerId:'ledglow-sign', series:'LG-12V/24V レンズタイプ', name:'LG-12V 1L-0.8W', code:'LG-12V 1L-0.8W', type:'DC12V・広角レンズ・1灯LEDモジュール', use:'薄型・小型サイン・チャンネル文字', detail:'1個カット。0.8W、3000K/4000K/6000K、全光束65lm、芯芯ピッチ200±5mm、広角165°。', alias:'LEDグロー LG12V 1L 0.8W レンズタイプ 薄型 小型 チャンネル文字 広角', url:'https://ledglow.jp/webcatalog1_6_2/#page=10', order:6100, active:true},
  {id:'lg-sl-12v-2l', makerId:'ledglow-sign', series:'SL-12V スタンダードタイプ', name:'SL-12V 2L', code:'SL-12V 2L', type:'DC12V・スタンダード・2球LEDモジュール', use:'薄型看板・中型チャンネル文字', detail:'1個カット。0.48W、6500K、全光束44lm、芯芯ピッチ110±5mm。', alias:'LEDグロー SL12V 2L スタンダード 薄型看板 6500K コスパ', url:'https://ledglow.jp/webcatalog1_6_2/#page=12', order:6110, active:true},
  {id:'lg-sl-12v-3ls', makerId:'ledglow-sign', series:'SL-12V スタンダードタイプ', name:'SL-12V 3LS', code:'SL-12V 3LS', type:'DC12V・スタンダード・3球ハイパワーLEDモジュール', use:'大型サイン・行灯看板・チャンネル文字', detail:'1個カット。1.44W、3000K/6500K、全光束130lm、芯芯ピッチ285±5mm。', alias:'LEDグロー SL12V 3LS スタンダード ハイパワー 大型サイン 行灯看板 3球', url:'https://ledglow.jp/webcatalog1_6_2/#page=12', order:6120, active:true},
  {id:'lg-sl-12v-3mini', makerId:'ledglow-sign', series:'SL-12V スタンダードタイプ', name:'SL-12V 3MINI', code:'SL-12V 3MINI', type:'DC12V・小型3球LEDモジュール', use:'薄型・小型チャンネル文字・細文字', detail:'1個カット。0.48W、3000K/5000K/6500K、全光束58lm、芯芯ピッチ80±5mm。', alias:'LEDグロー SL12V 3MINI 3ミニ 小型 ミニ チャンネル文字 細文字', url:'https://ledglow.jp/webcatalog1_6_2/#page=12', order:6130, active:true},
  {id:'lg-12v-1l-03w', makerId:'ledglow-sign', series:'小型モジュール', name:'12V 1L-0.3W', code:'12V 1L-0.3W', type:'DC12V・超小型レンズタイプLEDモジュール', use:'超薄型・小型チャンネル文字・アクリル文字', detail:'1個カット。0.3W、3000K/6000K、全光束27lm、芯芯ピッチ70±5mm、寸法18×9×5mm。', alias:'LEDグロー 12V 1L 0.3W 小型モジュール 超小型 レンズタイプ 細文字 アクリル文字', url:'https://ledglow.jp/webcatalog1_6_2/#page=14', order:6140, active:true},
  {id:'lg-sl-12v-1l', makerId:'ledglow-sign', series:'小型モジュール', name:'SL-12V 1L', code:'SL-12V 1L', type:'DC12V・小型1球LEDモジュール', use:'薄型・小型チャンネル文字・銘板照明', detail:'1個カット。0.36W、3000K/6500K、全光束30lm、芯芯ピッチ45±5mm。受注生産・最少ロット200個。', alias:'LEDグロー SL12V 1L 小型モジュール 1球 銘板 照明 チャンネル文字', url:'https://ledglow.jp/webcatalog1_6_2/#page=14', order:6150, active:true},
  {id:'lg-sl-12v-hpl-15w', makerId:'ledglow-sign', series:'SL-12V 集光レンズタイプ', name:'SL-12V HPL 1.5W', code:'SL-12V HPL 1.5W', type:'DC12V・集光レンズ・1.5W LEDモジュール', use:'両面行灯看板・側面取付・サイド発光', detail:'1個カット。6500K、全光束125lm、芯芯ピッチ155±5mm、対応厚み150〜250mm、看板幅〜600mm。', alias:'LEDグロー SL12V HPL 1.5W 集光レンズ 両面行灯 袖看板 側面取付 サイド発光', url:'https://ledglow.jp/webcatalog1_6_2/#page=16', order:6160, active:true},
  {id:'lg-sl-12v-hpl-3w', makerId:'ledglow-sign', series:'SL-12V 集光レンズタイプ', name:'SL-12V HPL 3W', code:'SL-12V HPL 3W', type:'DC12V・集光レンズ・3W LEDモジュール', use:'両面行灯看板・大型袖看板・側面取付', detail:'1個カット。6500K、全光束220lm、芯芯ピッチ190±5mm、対応厚み150〜300mm、看板幅〜900mm。', alias:'LEDグロー SL12V HPL 3W 集光レンズ 両面行灯 袖看板 大型 サイド発光', url:'https://ledglow.jp/webcatalog1_6_2/#page=16', order:6170, active:true},
  {id:'lg-sb-12v3-rgb-single', makerId:'ledglow-sign', series:'DC12V カラーモジュール', name:'SB-12V3 赤/緑/青', code:'SB-12V3 赤/緑/青', type:'DC12V・単色カラーLEDモジュール', use:'カラーフィルム・行灯文字・演出サイン', detail:'1個カット。赤/緑/青、1.1W、芯芯ピッチ185mm、寸法70×15×7.7mm。', alias:'LEDグロー SB12V3 カラーモジュール 赤 緑 青 レッド グリーン ブルー 単色カラー', url:'https://ledglow.jp/webcatalog1_6_2/#page=18', order:6180, active:true},
  {id:'lg-sl-12v-3mini-color', makerId:'ledglow-sign', series:'DC12V カラーモジュール', name:'SL-12V 3MINI 赤/緑/青', code:'SL-12V 3MINI 赤/緑/青', type:'DC12V・小型単色カラーLEDモジュール', use:'小型カラー文字・細やかな色表現', detail:'1個カット。赤/緑/青、0.48W、芯芯ピッチ80±5mm、寸法27×9.5×8.3mm。', alias:'LEDグロー SL12V 3MINI カラー 赤 緑 青 小型 カラーモジュール', url:'https://ledglow.jp/webcatalog1_6_2/#page=18', order:6190, active:true},
  {id:'lg-lg-12v-3c-rgb', makerId:'ledglow-sign', series:'DC12V カラーモジュール', name:'LG-12V 3C RGB', code:'LG-12V 3C RGB', type:'DC12V・RGBカラーモジュール', use:'色変化演出・アミューズメント施設・電飾サイン', detail:'1個カット。RGB色変化、0.72W、芯芯ピッチ150±5mm、寸法66×15×8.5mm。', alias:'LEDグロー LG12V 3C RGB カラーモジュール フルカラー 色変化 演出 アミューズメント', url:'https://ledglow.jp/webcatalog1_6_2/#page=18', order:6200, active:true},
  {id:'lg-f-3528', makerId:'ledglow-sign', series:'曲がるLED', name:'F 3528', code:'F 3528', type:'DC12V・曲がるLED・屋内用', use:'薄いサイン・小型チャンネル文字・曲げが必要な装飾照明', detail:'480mm。2.88W/本、3000K/4000K/6000K/赤/緑/青、寸法480×5×3mm、3個/40mmカット、5本まで連結。', alias:'LEDグロー F3528 曲がるLED まがるLED フレキシブル 480mm 薄いサイン 装飾照明', url:'https://ledglow.jp/webcatalog1_6_2/#page=24', order:6210, active:true},
  {id:'lg-f-3014', makerId:'ledglow-sign', series:'曲がるLED', name:'F 3014', code:'F 3014', type:'DC12V・縦横自在に曲がるLED・屋内用', use:'超薄型チャンネル文字・アクリル文字・曲線表現', detail:'483mm。4.2W/本、3000K/6000K、寸法483×4.5×3mm、3個/34.5mmカット、5本まで連結。', alias:'LEDグロー F3014 曲がるLED 縦横自在 アクリル文字 超薄型 チャンネル文字', url:'https://ledglow.jp/webcatalog1_6_2/#page=24', order:6220, active:true},
  {id:'lg-f-rgb', makerId:'ledglow-sign', series:'曲がるLED', name:'F RGB', code:'F RGB', type:'DC12V・曲がるLED・RGBカラー', use:'アミューズメント施設・カラー演出・リング照明', detail:'480mm。5.76W/本、RGB、寸法480×8×3mm、3個/60mmカット、5本まで連結。', alias:'LEDグロー FRGB F RGB 曲がるLED RGB カラー 演出 アミューズメント リング照明', url:'https://ledglow.jp/webcatalog1_6_2/#page=24', order:6230, active:true},
  {id:'lg-led-dot-cube', makerId:'ledglow-sign', series:'DC5V ドットキューブ', name:'LED DOT キューブタイプ', code:'LED DOT キューブタイプ', type:'DC5V・点光源LED・ドットキューブ', use:'装飾照明・ポイント照明・直見せLED・外壁照明', detail:'DC5V、0.1W、白/電球/赤/青、標準ピッチ65±5mm、寸法12.5×12.5×8mm、最大直列100個。', alias:'LEDグロー LED DOT キューブ ドットキューブ DOT CUBE DC5V 点光源 装飾照明 ポイント照明', url:'https://ledglow.jp/webcatalog1_6_2/#page=26', order:6240, active:true},

  {id:'lv-rendy-wm-ac100v-duo', makerId:'leveliq-sign', series:'renDy-WM', name:'renDy-WM AC100V Duo', code:'renDy-WM AC100V Duo', type:'AC100V・レンズ型LEDモジュール・1個カット', use:'内照式看板・行灯サイン・幅広い色温度対応', detail:'国内独自技術のレンズ型LEDモジュール。広角165°相当の配光、色温度2800K/3000K/4000K/5000K/6500K系。カタログ掲載ページ4〜5。', alias:'レベリック れべりっく LEVELIQQ renDy レンディー レンディーワイド レンズ型 LED モジュール AC100V Duo デュオ 行灯 あんどん サイン 看板', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=3', order:5000, active:true},
  {id:'lv-rendy-wm-ac100v-mini', makerId:'leveliq-sign', series:'renDy-WM', name:'renDy-WM AC100V mini', code:'renDy-WM AC100V mini', type:'AC100V・小型レンズ型LEDモジュール・1個カット', use:'小型看板・チャンネル文字・薄型サイン', detail:'AC100Vタイプの小型レンズ型LEDモジュール。小型サイン向け。カタログ掲載ページ4〜5。', alias:'レベリック れべりっく LEVELIQQ renDy レンディー mini ミニ AC100V 小型 レンズ モジュール チャンネル文字 ちゃんねるもじ サイン', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=3', order:5010, active:true},
  {id:'lv-rendy-wm-ccd-g', makerId:'leveliq-sign', series:'renDy-WM', name:'renDy-WM CCD-G', code:'renDy-WM CCD-G', type:'定電流・レンズ型LEDモジュール', use:'定電流電源使用の内照式看板・行灯サイン', detail:'定電流タイプ。700mA電源と組み合わせて使用。カタログ掲載ページ4〜5。', alias:'レベリック れべりっく LEVELIQQ renDy レンディー CCD-G CCDG 定電流 ていでんりゅう レンズ モジュール 看板 サイン', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=3', order:5020, active:true},
  {id:'lv-rendy-wm-dc12v-mini', makerId:'leveliq-sign', series:'renDy-WM', name:'renDy-WM DC12V mini', code:'renDy-WM DC12V mini', type:'DC12V・小型レンズ型LEDモジュール', use:'DC12V仕様の小型看板・チャンネル文字', detail:'定電圧DC12Vタイプ。小型サイン向け。カタログ掲載ページ4〜5。', alias:'レベリック れべりっく LEVELIQQ renDy レンディー DC12V mini ミニ 定電圧 ていでんあつ 小型 看板 チャンネル文字', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=3', order:5030, active:true},
  {id:'lv-lv-004', makerId:'leveliq-sign', series:'LV', name:'LV-004', code:'LV-004', type:'DC12V・4球LEDモジュール・6500K/3000K', use:'行灯・大型チャンネル文字・文字サイン', detail:'行灯や大型チャンネル文字に対応するLVシリーズ。カタログ掲載ページ6〜7。', alias:'レベリック れべりっく LEVELIQQ LV エルブイ LV004 004 4球 モジュール 大型チャンネル文字 行灯 サイン', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=4', order:5040, active:true},
  {id:'lv-lv-003', makerId:'leveliq-sign', series:'LV', name:'LV-003', code:'LV-003', type:'DC12V・3球LEDモジュール・6500K/3000K/R/G/B/Y', use:'チャンネル文字・立体文字・カラー演出', detail:'白色系と赤・緑・青・黄のカラー展開があるLVシリーズ。カタログ掲載ページ6〜7。', alias:'レベリック れべりっく LEVELIQQ LV エルブイ LV003 003 3球 RGB 赤 緑 青 黄 チャンネル文字 立体文字 サイン', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=4', order:5050, active:true},
  {id:'lv-lv-002', makerId:'leveliq-sign', series:'LV', name:'LV-002', code:'LV-002', type:'DC12V・2球LEDモジュール・6500K/3000K', use:'チャンネル文字・小型サイン', detail:'チャンネル文字に対応する2球タイプ。カタログ掲載ページ6〜7。', alias:'レベリック れべりっく LEVELIQQ LV エルブイ LV002 002 2球 二球 チャンネル文字 小型サイン', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=4', order:5060, active:true},
  {id:'lv-lv-mini3', makerId:'leveliq-sign', series:'LV', name:'LV-MINI3', code:'LV-MINI3', type:'DC12V・小型3球LEDモジュール・6500K/3000K', use:'小型チャンネル文字・細文字サイン', detail:'小型チャンネル文字に対応するミニ3球タイプ。カタログ掲載ページ6〜7。', alias:'レベリック れべりっく LEVELIQQ LV エルブイ MINI3 ミニ3 小型 3球 チャンネル文字 細文字', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=4', order:5070, active:true},
  {id:'lv-lv-mini1', makerId:'leveliq-sign', series:'LV', name:'LV-MINI1', code:'LV-MINI1', type:'DC12V・小型1球LEDモジュール・6500K/3000K', use:'小型チャンネル文字・細文字サイン', detail:'小型チャンネル文字に対応するミニ1球タイプ。カタログ掲載ページ6〜7。', alias:'レベリック れべりっく LEVELIQQ LV エルブイ MINI1 ミニ1 小型 1球 チャンネル文字 細文字', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=4', order:5080, active:true},
  {id:'lv-rgb4', makerId:'leveliq-sign', series:'RGB', name:'LV-RGB4', code:'LV-RGB4', type:'DC12V・RGB LEDモジュール・4球', use:'屋内外電飾サイン・フルカラー演出', detail:'屋外電飾サイン用RGB LEDモジュール。SceneDirectorと組み合わせてフルカラー演出に対応。カタログ掲載ページ8〜9。', alias:'レベリック れべりっく LEVELIQQ RGB LV-RGB4 RGB4 フルカラー カラー演出 電飾サイン 屋外 サイン', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=5', order:5090, active:true},
  {id:'lv-rgb3', makerId:'leveliq-sign', series:'RGB', name:'LV-RGB3', code:'LV-RGB3', type:'DC12V・RGB LEDモジュール・3球', use:'屋内外電飾サイン・フルカラー演出', detail:'屋外電飾サイン用RGB LEDモジュール。3球タイプ。カタログ掲載ページ8〜9。', alias:'レベリック れべりっく LEVELIQQ RGB LV-RGB3 RGB3 フルカラー カラー演出 電飾サイン 屋外 サイン', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=5', order:5100, active:true},
  {id:'lv-sd-001', makerId:'leveliq-sign', series:'SceneDirector', name:'SceneDirector SD-001', code:'SD-001', type:'RGB LEDモジュール専用LEDコントローラー・DMX/PWM対応', use:'RGB演出制御・看板演出・シーン切替', detail:'カラーシーン8パターン切替、速度切替、DMX/PWM対応のLEDコントローラー。カタログ掲載ページ8〜9。', alias:'レベリック れべりっく LEVELIQQ SceneDirector シーンディレクター SD001 SD-001 RGB コントローラー DMX PWM 演出 制御', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=5', order:5110, active:true},
  {id:'lv-be-4-g', makerId:'leveliq-sign', series:'BE!', name:'BE!-4-G', code:'BE!-4-G', type:'AC100V・4球LEDモジュール・6500K/3000K', use:'屋外電飾サイン・行灯・大型チャンネル文字', detail:'AC100V直結、トランス不要、最大100個連結可能なBE!シリーズ。カタログ掲載ページ10〜11。', alias:'レベリック れべりっく LEVELIQQ BE ビーイー BE4G BE!-4-G AC100V 4球 屋外電飾サイン 行灯 チャンネル文字', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=6', order:5120, active:true},
  {id:'lv-be-2-g', makerId:'leveliq-sign', series:'BE!', name:'BE!-2-G', code:'BE!-2-G', type:'AC100V・2球LEDモジュール・6500K/3000K', use:'チャンネル文字・電飾サイン・屋外サイン', detail:'AC100V直結、トランス不要の2球タイプ。カタログ掲載ページ10〜11。', alias:'レベリック れべりっく LEVELIQQ BE ビーイー BE2G BE!-2-G AC100V 2球 屋外電飾サイン チャンネル文字', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=6', order:5130, active:true},
  {id:'lv-l-pro120', makerId:'leveliq-sign', series:'L-Projector', name:'L-PRO120', code:'L-PRO120', type:'LED投光器・AC100〜277V', use:'自立看板・屋外サイン・プロジェクションライティング', detail:'雷サージ対策、投光器本体とスタンドを施した強固な筐体設計。カタログ掲載ページ10〜11。', alias:'レベリック れべりっく LEVELIQQ L-Projector エルプロジェクター LPRO120 L-PRO120 LED投光器 投光器 とうこうき 自立看板 屋外サイン', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=6', order:5140, active:true},
  {id:'lv-ps-mu100a070aq', makerId:'leveliq-sign', series:'定電流電源', name:'700mA DC86〜143V / MU100A070AQ', code:'MU100A070AQ', type:'定電流電源・700mA・屋外用', use:'renDy-CCD-G等の定電流モジュール用電源', detail:'連結個数目安25〜40個。屋外用スリム&コンパクト。カタログ掲載ページ14。', alias:'レベリック れべりっく LEVELIQQ 電源 でんげん 定電流 700mA MU100A070AQ MOONS renDy CCD-G', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=8', order:5150, active:true},
  {id:'lv-ps-mu075m105aq', makerId:'leveliq-sign', series:'定電流電源', name:'700mA DC43〜108V / MU075M105AQ', code:'MU075M105AQ', type:'定電流電源・700mA・屋外用', use:'renDy-CCD-G等の定電流モジュール用電源', detail:'連結個数目安13〜29個。屋外用スリム&コンパクト。カタログ掲載ページ14。', alias:'レベリック れべりっく LEVELIQQ 電源 でんげん 定電流 700mA MU075M105AQ MOONS renDy CCD-G', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=8', order:5160, active:true},
  {id:'lv-ps-pu040h070aq', makerId:'leveliq-sign', series:'定電流電源', name:'700mA DC28〜54V / PU040H070AQ', code:'PU040H070AQ', type:'定電流電源・700mA・屋外用', use:'renDy-CCD-G等の定電流モジュール用電源', detail:'連結個数目安8〜15個。カタログ掲載ページ14。', alias:'レベリック れべりっく LEVELIQQ 電源 でんげん 定電流 700mA PU040H070AQ MOONS renDy CCD-G', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=8', order:5170, active:true},
  {id:'lv-ps-euv-150s012', makerId:'leveliq-sign', series:'定電圧電源', name:'DC12V 150W / EUV-150S012', code:'EUV-150S012', type:'DC12V・150W・屋外用電源', use:'DC12Vモジュール・テープライト用電源', detail:'定電圧DC12V 150W電源。カタログ掲載ページ15。', alias:'レベリック れべりっく LEVELIQQ 電源 でんげん 定電圧 DC12V 150W EUV150S012 inventronics 屋外用', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=8', order:5180, active:true},
  {id:'lv-ps-pja-150f', makerId:'leveliq-sign', series:'定電圧電源', name:'屋内用電源 PJA-150F', code:'PJA-150F', type:'DC12V/DC24V・150W・屋内用電源', use:'屋内用DC12V/DC24V製品向け電源', detail:'屋内用150W電源。カタログ掲載ページ15。', alias:'レベリック れべりっく LEVELIQQ 電源 でんげん 屋内用 PJA-150F 150W DC12V DC24V', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=8', order:5190, active:true},
  {id:'lv-ps-pla-50f', makerId:'leveliq-sign', series:'定電圧電源', name:'屋内用電源 PLA-50F', code:'PLA-50F', type:'DC12V・50W・屋内用電源', use:'屋内用DC12V製品向け電源', detail:'屋内用50W電源。カタログ掲載ページ15。', alias:'レベリック れべりっく LEVELIQQ 電源 でんげん 屋内用 PLA-50F 50W DC12V', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=8', order:5200, active:true},
  {id:'lv-linear-flex-power', makerId:'leveliq-sign', series:'LINEARlight Flex', name:'LINEARlight Flex パワー', code:'LINEARlight Flex Power', type:'屋内専用LEDテープライト・2700K/3000K/4000K/5000K/6500K', use:'屋内間接照明・棚下照明・ライン照明', detail:'高出力タイプ。ダークスポットのない均一性の高い光。カタログ掲載ページ16〜17。', alias:'レベリック れべりっく LEVELIQQ LINEARlight Flex リニアライト フレックス テープライト てーぷらいと パワー 屋内 間接照明', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=9', order:5210, active:true},
  {id:'lv-linear-flex-shortpitch', makerId:'leveliq-sign', series:'LINEARlight Flex', name:'LINEARlight Flex ショートピッチ', code:'LINEARlight Flex Short Pitch', type:'屋内専用LEDテープライト・高密度仕様', use:'屋内間接照明・狭小部・棚下照明', detail:'高い密度性を誇る高級仕様。カタログ掲載ページ16〜17。', alias:'レベリック れべりっく LEVELIQQ LINEARlight Flex リニアライト フレックス ショートピッチ しょーとぴっち テープライト 屋内', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=9', order:5220, active:true},
  {id:'lv-linear-flex-advance', makerId:'leveliq-sign', series:'LINEARlight Flex', name:'LINEARlight Flex アドバンス', code:'LINEARlight Flex Advance', type:'屋内専用LEDテープライト・高効率モデル', use:'屋内間接照明・棚下照明・ライン照明', detail:'最も汎用性と経済性が高いモデル。カタログ掲載ページ16〜17。', alias:'レベリック れべりっく LEVELIQQ LINEARlight Flex リニアライト フレックス アドバンス あどばんす テープライト 屋内', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=9', order:5230, active:true},
  {id:'lv-linear-flex-color-mix', makerId:'leveliq-sign', series:'LINEARlight Flex', name:'LINEARlight Flex カラーミックス', code:'LINEARlight Flex Color Mix', type:'屋内専用LEDテープライト・RGB', use:'屋内演出照明・カラー演出・ライン照明', detail:'高い演出力を実現する演出用RGB。カタログ掲載ページ16〜17。', alias:'レベリック れべりっく LEVELIQQ LINEARlight Flex リニアライト フレックス カラーミックス RGB テープライト 演出照明', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=9', order:5240, active:true},
  {id:'lv-linear-flex-protect-power', makerId:'leveliq-sign', series:'LINEARlight Flex Protect', name:'LINEARlight Flex Protect パワー プロテクト', code:'LINEARlight Flex Protect Power', type:'屋外対応LEDテープライト・3000K/4000K/6000K', use:'屋外間接照明・外装ライン照明・サイン演出', detail:'信頼性の高いシリコン加工、IP67、UV&塩水対策の防水LEDテープライト。カタログ掲載ページ18〜19。', alias:'レベリック れべりっく LEVELIQQ LINEARlight Flex Protect リニアライト フレックス プロテクト 防水 テープライト 屋外 パワー', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=10', order:5250, active:true},
  {id:'lv-linear-flex-protect-shortpitch', makerId:'leveliq-sign', series:'LINEARlight Flex Protect', name:'LINEARlight Flex Protect ショートピッチ プロテクト', code:'LINEARlight Flex Protect Short Pitch', type:'屋外対応LEDテープライト・高密度仕様', use:'屋外間接照明・外装ライン照明・狭小部', detail:'高い密度性を持つ屋外対応テープライト。カタログ掲載ページ18〜19。', alias:'レベリック れべりっく LEVELIQQ LINEARlight Flex Protect リニアライト フレックス プロテクト ショートピッチ 防水 屋外 テープライト', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=10', order:5260, active:true},
  {id:'lv-linear-flex-protect-advance', makerId:'leveliq-sign', series:'LINEARlight Flex Protect', name:'LINEARlight Flex Protect アドバンス プロテクト', code:'LINEARlight Flex Protect Advance', type:'屋外対応LEDテープライト・高効率モデル', use:'屋外間接照明・外装ライン照明・サイン演出', detail:'最も汎用性と経済性が高い屋外対応モデル。カタログ掲載ページ18〜19。', alias:'レベリック れべりっく LEVELIQQ LINEARlight Flex Protect リニアライト フレックス プロテクト アドバンス 防水 屋外 テープライト', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=10', order:5270, active:true},
  {id:'lv-linear-flex-protect-color-mix', makerId:'leveliq-sign', series:'LINEARlight Flex Protect', name:'LINEARlight Flex Protect カラーミックス プロテクト', code:'LINEARlight Flex Protect Color Mix', type:'屋外対応LEDテープライト・RGB', use:'屋外演出照明・カラー演出・ライン照明', detail:'高い演出力を実現する屋外対応RGB。カタログ掲載ページ18〜19。', alias:'レベリック れべりっく LEVELIQQ LINEARlight Flex Protect リニアライト フレックス プロテクト カラーミックス RGB 防水 屋外 テープライト', url:'https://leveliqq.co.jp/catalog/images/catalog_2022.pdf#page=10', order:5280, active:true},
  {id:'ap-100v-ap12l-hp2', makerId:'ap-japan-sign', series:'広角LEDモジュール', name:'100V-AP12L-HP2', type:'100Vレンズモジュール・6500K/3000K', use:'行灯サイン・大型箱文字・ハイパワーレンズ', detail:'AC100V直結。3.6W、広角165°、IP66、最大連結150個。推奨厚み150〜300mm程度。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 100V AP12L HP2 エーピー12エル エイチピー えーぴー12える はいぱわー 広角 こうかく 行灯 あんどん', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=4', order:3000, active:true},
  {id:'ap-100v-apll2', makerId:'ap-japan-sign', series:'広角LEDモジュール', name:'100V-APLL2', type:'100Vレンズモジュール・6500K/5000K/3000K', use:'行灯サイン・FF・箱文字', detail:'AC100V直結。2.45W、広角165°、IP65、最大連結180個。推奨厚み70〜190mm程度。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 100V APLL2 エーピーエルエル2 えーぴーえるえる 広角 こうかく 行灯 あんどん', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=5', order:3010, active:true},
  {id:'ap-24v-apll2', makerId:'ap-japan-sign', series:'広角LEDモジュール', name:'24V-APLL2', type:'24Vレンズモジュール・6500K/5000K/3000K', use:'行灯サイン・電圧降下対策', detail:'DC24V。2.3W、広角165°、IP65、最大連結40個。推奨厚み70〜190mm程度。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 24V APLL2 エーピーエルエル2 えーぴーえるえる 広角 こうかく', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=6', order:3020, active:true},
  {id:'ap-100v-aplvl', makerId:'ap-japan-sign', series:'広角LEDモジュール', name:'100V-APLVL', type:'100Vレンズモジュール・6500K/3000K', use:'看板専用・広角モジュール', detail:'AC100V直結。2.6W、広角165°、IP65、最大連結90個。推奨厚み70〜190mm程度。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん APLVL エーピーエルブイエル えーぴーえるぶいえる 広角 こうかく', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=7', order:3030, active:true},
  {id:'ap-100v-aplxs', makerId:'ap-japan-sign', series:'広角LEDモジュール', name:'100V-APLXS', type:'100V小型広角モジュール・6500K/5000K/3000K', use:'薄型看板・小型行灯', detail:'AC100V直結。2個1回路、広角165°、IP65、最大連結300個。推奨厚み40〜70mm程度。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん APLXS エーピーエルエックスエス えーぴーえるえっくすえす 薄型 うすがた', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=8', order:3040, active:true},
  {id:'ap-24v-aplxs', makerId:'ap-japan-sign', series:'広角LEDモジュール', name:'24V-APLXS', type:'24Vミニレンズ・6500K/5000K/3000K', use:'薄型看板・小型行灯', detail:'DC24V無極性。0.65W、広角165°、IP65、最大連結80個。12V-APLW1の切替候補。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 24V APLXS エーピーエルエックスエス えーぴーえるえっくすえす ミニレンズ', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=9', order:3050, active:true},
  {id:'ap-12v-aplw1', makerId:'ap-japan-sign', series:'広角LEDモジュール', name:'12V-APLW1', type:'12Vレンズモジュール・5000K/3000K', use:'薄型看板・小型行灯', detail:'DC12V。0.65W、広角165°、IP65、最大連結50個。カタログ上は廃番予定、在庫終了次第24V-APLXSへ切替。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん APLW1 エーピーエルダブル1 えーぴーえるだぶる 廃番 はいばん', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=9', order:3060, active:true},
  {id:'ap-edge-light-12v-anxshp6-3w', makerId:'ap-japan-sign', series:'広角LEDモジュール', name:'エッジライト 12V-ANXSHP6_3W', type:'12V側面発光モジュール・6500K', use:'袖看板・両面発光タイプ', detail:'DC12V。3W、照射角40°、最大連結15個。側面取付け専用LED。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん エッジライト えっじらいと ANXSHP 側面発光 そくめんはっこう 袖看板 そでかんばん', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=11', order:3070, active:true},
  {id:'ap-apcu-350-700', makerId:'ap-japan-sign', series:'広角LEDモジュール', name:'APCU-350/700', type:'定電流レンズモジュール・6500K', use:'内照式看板・面発光ユニット', detail:'定電流350mA/700mA対応。1.01W/2.1W、広角165°。カタログ上は廃番予定。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん APCU エーピーシーユー えーぴーしーゆー 定電流 ていでんりゅう', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=10', order:3080, active:true},
  {id:'ap-100v-12nsp', makerId:'ap-japan-sign', series:'標準LEDモジュール', name:'100V-12NSP', type:'100Vモジュール・多色展開', use:'行灯サイン・FF・標準モジュール', detail:'AC100V。2個1回路、2W、120°、IP66、最大連結400個。看板厚80mm以上推奨。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 12NSP 12エヌエスピー えぬえすぴー 標準 ひょうじゅん 行灯 あんどん', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=13', order:3090, active:true},
  {id:'ap-100v-10nsp', makerId:'ap-japan-sign', series:'標準LEDモジュール', name:'100V-10NSP', type:'100Vモジュール・多色展開', use:'行灯サイン・バックチャンネル', detail:'AC100V。2個1回路、2W、120°、IP66、最大連結400個。看板厚80mm以上推奨。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 10NSP 10エヌエスピー てんえぬえすぴー 標準 ひょうじゅん', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=14', order:3100, active:true},
  {id:'ap-100v-2nsp-mini', makerId:'ap-japan-sign', series:'標準LEDモジュール', name:'100V-2NSP-Mini', type:'100Vミニモジュール・6500K/5000K/4000K/3000K', use:'薄型看板・チャンネル文字', detail:'AC100V。0.49W、120°、最大連結100個。厚み40mmからの薄型看板やチャンネル文字向け。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 2NSP Mini ミニ みに 薄型 うすがた チャンネル', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=16', order:3110, active:true},
  {id:'ap-12v-apj3', makerId:'ap-japan-sign', series:'標準LEDモジュール', name:'12V-APJ3', type:'12V 3球モジュール・8000K/6500K/3000K', use:'標準モジュール・チャンネル文字', detail:'DC12V。0.72W、120°、最大連結50個。信頼性とあらゆる環境で使用可能な3球モジュール。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん APJ3 エーピージェイ3 えーぴーじぇい さんきゅう 3球', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=15', order:3120, active:true},
  {id:'ap-12v-apj2', makerId:'ap-japan-sign', series:'標準LEDモジュール', name:'12V-APJ2', type:'12V 2球モジュール・8000K/6500K/3000K', use:'標準モジュール・チャンネル文字', detail:'DC12V。0.72W、120°、最大連結50個。2球モジュール。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん APJ2 エーピージェイ2 えーぴーじぇい にきゅう 2球', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=15', order:3130, active:true},
  {id:'ap-12v-apj3-mini', makerId:'ap-japan-sign', series:'標準LEDモジュール', name:'12V-APJ3-Mini', type:'12V小型3球モジュール・6500K/5000K/4000K/3000K', use:'小型チャンネル文字・薄型看板', detail:'DC12V。0.48W、165°、最大連結50個。小型3球モジュール。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん APJ3 Mini ミニ みに エーピージェイ3 小型 こがた', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=17', order:3140, active:true},
  {id:'ap-24v-tfl-10', makerId:'ap-japan-sign', series:'効果照明', name:'24V-TFL-10', type:'24VフレキシブルLED・多色温度', use:'間接照明・ライン照明', detail:'DC24V。幅8mm、5.8W/m、120°、最大連結5m、50mm単位でカット可能。防水ではありません。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん TFL ティーエフエル てぃーえふえる テープライト フレキシブル 間接 かんせつ', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=19', order:3150, active:true},
  {id:'ap-shaula-24v-wpbar', makerId:'ap-japan-sign', series:'効果照明', name:'シャウラ 24V-WPBAR', type:'屋外シームレスバー・6500K/5000K/2700K', use:'屋外ライン照明・アッパー設置', detail:'DC24V。IP65、Ra80以上、最大連結5m、292/580/868/1156mm展開。屋外露出でも使用可能。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん シャウラ しゃうら WPBAR ダブルピーバー シームレスバー 屋外 おくがい', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=20', order:3160, active:true},
  {id:'ap-24v-rcbar', makerId:'ap-japan-sign', series:'効果照明', name:'24V-RCBAR', type:'シームレスバー・5000K/2700K', use:'屋内ライン照明・間接照明', detail:'DC24V。Ra80以上、最大連結5m、298/490/586/682/874/1162mm展開。防水ではありません。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん RCBAR アールシーバー あーるしーばー シームレスバー 屋内 おくない', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=21', order:3170, active:true},
  {id:'ap-100v-acnb-v2', makerId:'ap-japan-sign', series:'効果照明', name:'100V-ACNB-V2', type:'100Vバー型製品・6500K/3000K', use:'効果照明・屋内外演出', detail:'100Vバー型製品。効果照明カテゴリに掲載。6500K/3000K。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん ACNB エーシーエヌビー えーしーえぬびー バー型 ばーがた 効果 こうか', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=22', order:3180, active:true},
  {id:'ap-100v-21p-150-hp', makerId:'ap-japan-sign', series:'効果照明', name:'100V-21P-150-HP', type:'100Vバー型製品・150mm・5000K/2700K', use:'効果照明・ライン演出', detail:'100V-21P-HPシリーズの150mmタイプ。5000K/2700K。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 21P 150 HP バー型 ばーがた 効果 こうか', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=23', order:3190, active:true},
  {id:'ap-100v-21p-300-hp', makerId:'ap-japan-sign', series:'効果照明', name:'100V-21P-300-HP', type:'100Vバー型製品・300mm・5000K/2700K', use:'効果照明・ライン演出', detail:'100V-21P-HPシリーズの300mmタイプ。5000K/2700K。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 21P 300 HP バー型 ばーがた 効果 こうか', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=23', order:3200, active:true},
  {id:'ap-100v-21p-450-hp', makerId:'ap-japan-sign', series:'効果照明', name:'100V-21P-450-HP', type:'100Vバー型製品・450mm・5000K/2700K', use:'効果照明・ライン演出', detail:'100V-21P-HPシリーズの450mmタイプ。5000K/2700K。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 21P 450 HP バー型 ばーがた 効果 こうか', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=23', order:3210, active:true},
  {id:'ap-100v-21p-600-hp', makerId:'ap-japan-sign', series:'効果照明', name:'100V-21P-600-HP', type:'100Vバー型製品・600mm・5000K/2700K', use:'効果照明・ライン演出', detail:'100V-21P-HPシリーズの600mmタイプ。5000K/2700K。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 21P 600 HP バー型 ばーがた 効果 こうか', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=23', order:3220, active:true},
  {id:'ap-100v-21p-750-hp', makerId:'ap-japan-sign', series:'効果照明', name:'100V-21P-750-HP', type:'100Vバー型製品・750mm・5000K/2700K', use:'効果照明・ライン演出', detail:'100V-21P-HPシリーズの750mmタイプ。5000K/2700K。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 21P 750 HP バー型 ばーがた 効果 こうか', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=23', order:3230, active:true},
  {id:'ap-100v-21p-900-hp', makerId:'ap-japan-sign', series:'効果照明', name:'100V-21P-900-HP', type:'100Vバー型製品・900mm・5000K/2700K', use:'効果照明・ライン演出', detail:'100V-21P-HPシリーズの900mmタイプ。5000K/2700K。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 21P 900 HP バー型 ばーがた 効果 こうか', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=23', order:3240, active:true},
  {id:'ap-12v-lb13s-l480', makerId:'ap-japan-sign', series:'効果照明', name:'12V-LB13S-L480', type:'12Vバー型製品・7000K/5000K/3000K', use:'効果照明・ライン演出', detail:'12Vバー型製品。7000K/5000K/3000K展開。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん LB13S L480 エルビー えるびー バー型 ばーがた', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=24', order:3250, active:true},
  {id:'ap-12v-apj3-rgb-color', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'12V-APJ3-R/G/B', type:'12V単色カラー3球モジュール', use:'演出サイン・単色カラー', detail:'12V-APJ3系の単色カラーR/G/B製品。演出LEDモジュールカテゴリ。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん APJ3 RGB R G B 赤 緑 青 あか みどり あお 演出 えんしゅつ', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=26', order:3260, active:true},
  {id:'ap-12v-apj3-rgb', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'12V-APJ3-RGB', type:'12V RGBフルカラーモジュール', use:'フルカラー演出サイン', detail:'12V-APJ3系のRGBフルカラー製品。演出LEDモジュールカテゴリ。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん APJ3 RGB フルカラー ふるからー 演出 えんしゅつ', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=28', order:3270, active:true},
  {id:'ap-12v-apj3-pano', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'12V-APJ3-Pano', type:'12Vパノラマフルカラーモジュール', use:'パノラマサイン・演出サイン', detail:'12V-APJ3系のPano製品。パノラマサイン向け演出モジュール。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん APJ3 Pano パノ パノラマ ぱのらま 演出 えんしゅつ', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=31', order:3280, active:true},
  {id:'ap-12v-tfl-pm-v3', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'12V-TFL-PM-V3', type:'12V演出フレキシブルLED', use:'演出サイン・点滅演出', detail:'演出LEDモジュールカテゴリ掲載。12Vフレキシブル系。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん TFL PM V3 ピーエム ぴーえむ フレキシブル 演出 えんしゅつ', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=25', order:3290, active:true},
  {id:'ap-12v-panb', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'12V-PANB-600/1200', type:'12V PANB 600/1200', use:'演出サイン・パノラマ系', detail:'12V-PANB-600/1200。演出LEDモジュールカテゴリ掲載。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん PANB パンビー ぱんびー 600 1200 演出 えんしゅつ', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=31', order:3300, active:true},
  {id:'ap-12v-appm-rgb-v2', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'12V-APPM-RGB-V2', type:'12V RGB演出モジュール', use:'RGB演出サイン', detail:'12V-APPM-RGB-V2。演出LEDモジュールカテゴリ掲載。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん APPM RGB V2 エーピーピーエム えーぴーぴーえむ RGB 演出', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=32', order:3310, active:true},
  {id:'ap-snow-pole', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'スノーポール 12V-LXSP12-W3S', type:'12Vスノーポール', use:'演出サイン・装飾照明', detail:'スノーポール（12V-LXSP12-W3S）。演出LEDモジュールカテゴリ掲載。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん スノーポール すのーぽーる LXSP 装飾 そうしょく 演出', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=33', order:3320, active:true},
  {id:'ap-24v-tfl-rgb-color', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'24V-TFL-R2/G2/B2・24V-TFL-R/G', type:'24V単色カラーTFL', use:'演出サイン・単色カラーライン', detail:'24V-TFL-R2/G2/B2、24V-TFL-R/G。演出LEDモジュールカテゴリ掲載。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん TFL R2 G2 B2 R G 赤 緑 青 あか みどり あお 演出', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=27', order:3330, active:true},
  {id:'ap-24v-12nsp-tf', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'24V-12NSP-TF', type:'24V点滅用モジュール', use:'点滅演出サイン', detail:'24V-12NSP-TF。点滅用コントローラーと合わせて使用する演出系モジュール。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 12NSP TF 点滅 てんめつ コントローラー 演出', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=34', order:3340, active:true},
  {id:'ap-24v-flash-controller', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'24V点滅用コントローラー', type:'24V点滅コントローラー', use:'点滅演出・制御', detail:'24V点滅用コントローラー。演出LEDモジュールカテゴリ掲載。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 点滅用コントローラー てんめつ コントローラー 制御 せいぎょ', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=35', order:3350, active:true},
  {id:'ap-24v-tfl-rgb2', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'24V-TFL-RGB2', type:'24V RGBフレキシブルLED', use:'RGBライン演出', detail:'24V-TFL-RGB2。演出LEDモジュールカテゴリ掲載。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん TFL RGB2 フルカラー ふるからー RGB 演出', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=36', order:3360, active:true},
  {id:'ap-24v-tfl-rgb', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'24V-TFL-RGB', type:'24V RGBフレキシブルLED', use:'RGBライン演出', detail:'24V-TFL-RGB。演出LEDモジュールカテゴリ掲載。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん TFL RGB フルカラー ふるからー RGB 演出', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=37', order:3370, active:true},
  {id:'ap-shaula-rgb', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'シャウラRGB 24V-WPBAR-RGB', type:'屋外シームレスRGBバー', use:'RGBライン演出・外装演出', detail:'シャウラRGB（24V-WPBAR-RGB）。演出LEDモジュールカテゴリ掲載。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん シャウラRGB しゃうら RGB WPBAR フルカラー 演出', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=38', order:3380, active:true},
  {id:'ap-dmx-rgb-flood', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'DMX RGBフルカラー投光器', type:'DMX RGB投光器', use:'RGB投光・演出サイン', detail:'DMX RGBフルカラー投光器。演出LEDモジュールカテゴリ掲載。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん DMX RGB 投光器 とうこうき フルカラー ふるからー 演出', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=38', order:3390, active:true},
  {id:'ap-dimmers-controllers', makerId:'ap-japan-sign', series:'演出LEDモジュール', name:'調光器・コントローラー類', type:'調光器・制御機器', use:'PWM調光・RGB制御・点滅制御', detail:'調光器、コントローラー類。演出・制御用の周辺機器。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 調光器 ちょうこうき コントローラー 制御 せいぎょ PWM RGB', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=38', order:3400, active:true},
  {id:'ap-power-waterproof', makerId:'ap-japan-sign', series:'電源類', name:'防水対応電源', type:'防水電源', use:'屋外・防水対応電源', detail:'APジャパンの電源類。防水対応電源としてP39〜41範囲に掲載。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 防水対応電源 ぼうすい 電源 でんげん パワーサプライ', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=41', order:3410, active:true},
  {id:'ap-power-compact', makerId:'ap-japan-sign', series:'電源類', name:'小型軽量電源（非防水）', type:'非防水小型電源', use:'屋内・軽量電源', detail:'APジャパンの電源類。小型軽量電源（非防水）としてP39〜41範囲に掲載。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 小型軽量電源 こがた けいりょう 非防水 ひぼうすい 電源', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=41', order:3420, active:true},
  {id:'ap-power-amplifier-built-in', makerId:'ap-japan-sign', series:'電源類', name:'増幅器内蔵電源', type:'増幅器内蔵電源', use:'演出・RGB系電源', detail:'APジャパンの電源類。増幅器内蔵電源としてP39〜41範囲に掲載。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 増幅器内蔵電源 ぞうふくき ないぞう 電源 アンプ', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=41', order:3430, active:true},
  {id:'ap-power-constant-current', makerId:'ap-japan-sign', series:'電源類', name:'定電流電源', type:'定電流電源', use:'定電流モジュール用電源', detail:'APジャパンの電源類。定電流電源としてP39〜41範囲に掲載。', alias:'APジャパン APJ エーピージャパン えーぴーじゃぱん 定電流電源 ていでんりゅう 電源 APCU', url:'https://www.ap-japan.jp/cms/wp-content/uploads/2026/04/2025-04LEDCatalog-vol2.pdf#page=41', order:3440, active:true},

  {id:'sw-pwr-plx3-d600l-65k', makerId:'sanwa-signworks-sign', series:'Power-Pollux 3', name:'パワーポラックス3（ダウンライト） 600L / PWR-PLX3-D600L-65K', code:'PWR-PLX3-D600L-65K', listPrice:71000, type:'昼光色6500K・ダウンライト', use:'大型サイン・塔屋サイン・GL50m以下', detail:'ダウン照射用。大型サイン用LED照明。カタログ税別定価 ￥71,000。', alias:'三和サインワークス Sanwa SW Power-Pollux 3 パワーポラックス3（ダウンライト） 600L PWR-PLX3-D600L-65K パワーポラックス ぱわーぽらっくす ダウンライト だうんらいと 大型サイン ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-2', order:4000, active:true},
  {id:'sw-pwr-plx3-d900l-65k', makerId:'sanwa-signworks-sign', series:'Power-Pollux 3', name:'パワーポラックス3（ダウンライト） 900L / PWR-PLX3-D900L-65K', code:'PWR-PLX3-D900L-65K', listPrice:81000, type:'昼光色6500K・ダウンライト', use:'大型サイン・塔屋サイン・GL50m以下', detail:'ダウン照射用。大型サイン用LED照明。カタログ税別定価 ￥81,000。', alias:'三和サインワークス Sanwa SW Power-Pollux 3 パワーポラックス3（ダウンライト） 900L PWR-PLX3-D900L-65K パワーポラックス ぱわーぽらっくす ダウンライト だうんらいと 大型サイン ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-2', order:4010, active:true},
  {id:'sw-pwr-plx3-d1200l-65k', makerId:'sanwa-signworks-sign', series:'Power-Pollux 3', name:'パワーポラックス3（ダウンライト） 1200L / PWR-PLX3-D1200L-65K', code:'PWR-PLX3-D1200L-65K', listPrice:88000, type:'昼光色6500K・ダウンライト', use:'大型サイン・塔屋サイン・GL50m以下', detail:'ダウン照射用。大型サイン用LED照明。カタログ税別定価 ￥88,000。', alias:'三和サインワークス Sanwa SW Power-Pollux 3 パワーポラックス3（ダウンライト） 1200L PWR-PLX3-D1200L-65K パワーポラックス ぱわーぽらっくす ダウンライト だうんらいと 大型サイン ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-2', order:4020, active:true},
  {id:'sw-pwr-plx3-d1800l-65k', makerId:'sanwa-signworks-sign', series:'Power-Pollux 3', name:'パワーポラックス3（ダウンライト） 1800L / PWR-PLX3-D1800L-65K', code:'PWR-PLX3-D1800L-65K', listPrice:124000, type:'昼光色6500K・ダウンライト', use:'大型サイン・塔屋サイン・GL50m以下', detail:'ダウン照射用。大型サイン用LED照明。カタログ税別定価 ￥124,000。', alias:'三和サインワークス Sanwa SW Power-Pollux 3 パワーポラックス3（ダウンライト） 1800L PWR-PLX3-D1800L-65K パワーポラックス ぱわーぽらっくす ダウンライト だうんらいと 大型サイン ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-2', order:4030, active:true},
  {id:'sw-pwr-plx3-u600l-65k', makerId:'sanwa-signworks-sign', series:'Power-Pollux 3', name:'パワーポラックス3（アッパーライト） 600L / PWR-PLX3-U600L-65K', code:'PWR-PLX3-U600L-65K', listPrice:82000, type:'昼光色6500K・アッパーライト', use:'大型サイン・塔屋サイン・GL50m以下', detail:'アッパー照射用。大型サイン用LED照明。カタログ税別定価 ￥82,000。', alias:'三和サインワークス Sanwa SW Power-Pollux 3 パワーポラックス3（アッパーライト） 600L PWR-PLX3-U600L-65K パワーポラックス ぱわーぽらっくす アッパーライト あっぱーらいと 大型サイン ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-2', order:4040, active:true},
  {id:'sw-pwr-plx3-u900l-65k', makerId:'sanwa-signworks-sign', series:'Power-Pollux 3', name:'パワーポラックス3（アッパーライト） 900L / PWR-PLX3-U900L-65K', code:'PWR-PLX3-U900L-65K', listPrice:91000, type:'昼光色6500K・アッパーライト', use:'大型サイン・塔屋サイン・GL50m以下', detail:'アッパー照射用。大型サイン用LED照明。カタログ税別定価 ￥91,000。', alias:'三和サインワークス Sanwa SW Power-Pollux 3 パワーポラックス3（アッパーライト） 900L PWR-PLX3-U900L-65K パワーポラックス ぱわーぽらっくす アッパーライト あっぱーらいと 大型サイン ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-2', order:4050, active:true},
  {id:'sw-pwr-plx3-u1200l-65k', makerId:'sanwa-signworks-sign', series:'Power-Pollux 3', name:'パワーポラックス3（アッパーライト） 1200L / PWR-PLX3-U1200L-65K', code:'PWR-PLX3-U1200L-65K', listPrice:99000, type:'昼光色6500K・アッパーライト', use:'大型サイン・塔屋サイン・GL50m以下', detail:'アッパー照射用。大型サイン用LED照明。カタログ税別定価 ￥99,000。', alias:'三和サインワークス Sanwa SW Power-Pollux 3 パワーポラックス3（アッパーライト） 1200L PWR-PLX3-U1200L-65K パワーポラックス ぱわーぽらっくす アッパーライト あっぱーらいと 大型サイン ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-2', order:4060, active:true},
  {id:'sw-pwr-plx3-u1800l-65k', makerId:'sanwa-signworks-sign', series:'Power-Pollux 3', name:'パワーポラックス3（アッパーライト） 1800L / PWR-PLX3-U1800L-65K', code:'PWR-PLX3-U1800L-65K', listPrice:140000, type:'昼光色6500K・アッパーライト', use:'大型サイン・塔屋サイン・GL50m以下', detail:'アッパー照射用。大型サイン用LED照明。カタログ税別定価 ￥140,000。', alias:'三和サインワークス Sanwa SW Power-Pollux 3 パワーポラックス3（アッパーライト） 1800L PWR-PLX3-U1800L-65K パワーポラックス ぱわーぽらっくす アッパーライト あっぱーらいと 大型サイン ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-2', order:4070, active:true},
  {id:'sw-pollux4-600l-sv', makerId:'sanwa-signworks-sign', series:'POLLUX 4', name:'ポラックス4 シルバー 600L / POLLUX4-600L-65K / POLLUX4-600L-30K', code:'POLLUX4-600L-65K / POLLUX4-600L-30K', listPrice:35000, type:'昼光色6500K・電球色3000K・シルバーフレーム', use:'壁面看板・ファサード看板・GL15m以下', detail:'シルバーフレーム。65K/30Kの2色展開。カタログ税別定価 ￥35,000。', alias:'三和サインワークス Sanwa SW POLLUX 4 ポラックス4 シルバー 600L POLLUX4-600L-65K / POLLUX4-600L-30K ポラックス4 ぽらっくす4 シルバー しるばー 65K 30K ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-3', order:4080, active:true},
  {id:'sw-pollux4-900l-sv', makerId:'sanwa-signworks-sign', series:'POLLUX 4', name:'ポラックス4 シルバー 900L / POLLUX4-900L-65K / POLLUX4-900L-30K', code:'POLLUX4-900L-65K / POLLUX4-900L-30K', listPrice:40000, type:'昼光色6500K・電球色3000K・シルバーフレーム', use:'壁面看板・ファサード看板・GL15m以下', detail:'シルバーフレーム。65K/30Kの2色展開。カタログ税別定価 ￥40,000。', alias:'三和サインワークス Sanwa SW POLLUX 4 ポラックス4 シルバー 900L POLLUX4-900L-65K / POLLUX4-900L-30K ポラックス4 ぽらっくす4 シルバー しるばー 65K 30K ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-3', order:4090, active:true},
  {id:'sw-pollux4-1200l-sv', makerId:'sanwa-signworks-sign', series:'POLLUX 4', name:'ポラックス4 シルバー 1200L / POLLUX4-1200L-65K / POLLUX4-1200L-30K', code:'POLLUX4-1200L-65K / POLLUX4-1200L-30K', listPrice:47000, type:'昼光色6500K・電球色3000K・シルバーフレーム', use:'壁面看板・ファサード看板・GL15m以下', detail:'シルバーフレーム。65K/30Kの2色展開。カタログ税別定価 ￥47,000。', alias:'三和サインワークス Sanwa SW POLLUX 4 ポラックス4 シルバー 1200L POLLUX4-1200L-65K / POLLUX4-1200L-30K ポラックス4 ぽらっくす4 シルバー しるばー 65K 30K ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-3', order:4100, active:true},
  {id:'sw-pollux4-1800l-sv', makerId:'sanwa-signworks-sign', series:'POLLUX 4', name:'ポラックス4 シルバー 1800L / POLLUX4-1800L-65K / POLLUX4-1800L-30K', code:'POLLUX4-1800L-65K / POLLUX4-1800L-30K', listPrice:69000, type:'昼光色6500K・電球色3000K・シルバーフレーム', use:'壁面看板・ファサード看板・GL15m以下', detail:'シルバーフレーム。65K/30Kの2色展開。カタログ税別定価 ￥69,000。', alias:'三和サインワークス Sanwa SW POLLUX 4 ポラックス4 シルバー 1800L POLLUX4-1800L-65K / POLLUX4-1800L-30K ポラックス4 ぽらっくす4 シルバー しるばー 65K 30K ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-3', order:4110, active:true},
  {id:'sw-pollux4-cor90', makerId:'sanwa-signworks-sign', series:'POLLUX 4', name:'ポラックス4 90°コーナーユニット / POLLUX4-COR90', code:'POLLUX4-COR90', listPrice:20000, type:'コーナーユニット・シルバー', use:'ポラックス4の角部連結', detail:'90°コーナー用ユニット。カタログ税別定価 ￥20,000。', alias:'三和サインワークス Sanwa SW POLLUX 4 ポラックス4 90°コーナーユニット POLLUX4-COR90 コーナー こーなー COR90 ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-3', order:4120, active:true},
  {id:'sw-pollux4-600l-bk', makerId:'sanwa-signworks-sign', series:'POLLUX 4 ブラック', name:'ポラックス4 ブラック 600L / POLLUX4-600L-65K-BK / POLLUX4-600L-30K-BK', code:'POLLUX4-600L-65K-BK / POLLUX4-600L-30K-BK', listPrice:37000, type:'昼光色6500K・電球色3000K・ブラックフレーム', use:'壁面看板・ファサード看板・GL15m以下', detail:'ブラックフレーム。65K-BK/30K-BKの2色展開。カタログ税別定価 ￥37,000。', alias:'三和サインワークス Sanwa SW POLLUX 4 ブラック ポラックス4 ブラック 600L POLLUX4-600L-65K-BK / POLLUX4-600L-30K-BK ポラックス4 ぽらっくす4 ブラック ぶらっく 黒 くろ 65K 30K BK ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-3', order:4130, active:true},
  {id:'sw-pollux4-900l-bk', makerId:'sanwa-signworks-sign', series:'POLLUX 4 ブラック', name:'ポラックス4 ブラック 900L / POLLUX4-900L-65K-BK / POLLUX4-900L-30K-BK', code:'POLLUX4-900L-65K-BK / POLLUX4-900L-30K-BK', listPrice:43000, type:'昼光色6500K・電球色3000K・ブラックフレーム', use:'壁面看板・ファサード看板・GL15m以下', detail:'ブラックフレーム。65K-BK/30K-BKの2色展開。カタログ税別定価 ￥43,000。', alias:'三和サインワークス Sanwa SW POLLUX 4 ブラック ポラックス4 ブラック 900L POLLUX4-900L-65K-BK / POLLUX4-900L-30K-BK ポラックス4 ぽらっくす4 ブラック ぶらっく 黒 くろ 65K 30K BK ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-3', order:4140, active:true},
  {id:'sw-pollux4-1200l-bk', makerId:'sanwa-signworks-sign', series:'POLLUX 4 ブラック', name:'ポラックス4 ブラック 1200L / POLLUX4-1200L-65K-BK / POLLUX4-1200L-30K-BK', code:'POLLUX4-1200L-65K-BK / POLLUX4-1200L-30K-BK', listPrice:51000, type:'昼光色6500K・電球色3000K・ブラックフレーム', use:'壁面看板・ファサード看板・GL15m以下', detail:'ブラックフレーム。65K-BK/30K-BKの2色展開。カタログ税別定価 ￥51,000。', alias:'三和サインワークス Sanwa SW POLLUX 4 ブラック ポラックス4 ブラック 1200L POLLUX4-1200L-65K-BK / POLLUX4-1200L-30K-BK ポラックス4 ぽらっくす4 ブラック ぶらっく 黒 くろ 65K 30K BK ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-3', order:4150, active:true},
  {id:'sw-pollux4-1800l-bk', makerId:'sanwa-signworks-sign', series:'POLLUX 4 ブラック', name:'ポラックス4 ブラック 1800L / POLLUX4-1800L-65K-BK / POLLUX4-1800L-30K-BK', code:'POLLUX4-1800L-65K-BK / POLLUX4-1800L-30K-BK', listPrice:74000, type:'昼光色6500K・電球色3000K・ブラックフレーム', use:'壁面看板・ファサード看板・GL15m以下', detail:'ブラックフレーム。65K-BK/30K-BKの2色展開。カタログ税別定価 ￥74,000。', alias:'三和サインワークス Sanwa SW POLLUX 4 ブラック ポラックス4 ブラック 1800L POLLUX4-1800L-65K-BK / POLLUX4-1800L-30K-BK ポラックス4 ぽらっくす4 ブラック ぶらっく 黒 くろ 65K 30K BK ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-3', order:4160, active:true},
  {id:'sw-pollux3-600l-sla', makerId:'sanwa-signworks-sign', series:'POLLUX 3', name:'ポラックス3 600L / POLLUX3-600L-65-SLA / POLLUX3-600L-35-SLA', code:'POLLUX3-600L-65-SLA / POLLUX3-600L-35-SLA', listPrice:29000, type:'昼光色6500K・温白色3500K・シルバーフレーム', use:'看板照明・GL4m以下', detail:'標準外照式。65-SLA/35-SLAの2色展開。カタログ税別定価 ￥29,000。', alias:'三和サインワークス Sanwa SW POLLUX 3 ポラックス3 600L POLLUX3-600L-65-SLA / POLLUX3-600L-35-SLA ポラックス3 ぽらっくす3 シルバー しるばー 65SLA 35SLA ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-4', order:4170, active:true},
  {id:'sw-pollux3-1200l-sla', makerId:'sanwa-signworks-sign', series:'POLLUX 3', name:'ポラックス3 1200L / POLLUX3-1200L-65-SLA / POLLUX3-1200L-35-SLA', code:'POLLUX3-1200L-65-SLA / POLLUX3-1200L-35-SLA', listPrice:38000, type:'昼光色6500K・温白色3500K・シルバーフレーム', use:'看板照明・GL4m以下', detail:'標準外照式。65-SLA/35-SLAの2色展開。カタログ税別定価 ￥38,000。', alias:'三和サインワークス Sanwa SW POLLUX 3 ポラックス3 1200L POLLUX3-1200L-65-SLA / POLLUX3-1200L-35-SLA ポラックス3 ぽらっくす3 シルバー しるばー 65SLA 35SLA ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-4', order:4180, active:true},
  {id:'sw-pollux3-1800l-sla', makerId:'sanwa-signworks-sign', series:'POLLUX 3', name:'ポラックス3 1800L / POLLUX3-1800L-65-SLA / POLLUX3-1800L-35-SLA', code:'POLLUX3-1800L-65-SLA / POLLUX3-1800L-35-SLA', listPrice:57000, type:'昼光色6500K・温白色3500K・シルバーフレーム', use:'看板照明・GL4m以下', detail:'標準外照式。65-SLA/35-SLAの2色展開。カタログ税別定価 ￥57,000。', alias:'三和サインワークス Sanwa SW POLLUX 3 ポラックス3 1800L POLLUX3-1800L-65-SLA / POLLUX3-1800L-35-SLA ポラックス3 ぽらっくす3 シルバー しるばー 65SLA 35SLA ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-4', order:4190, active:true},
  {id:'sw-pollux3-600t-swa', makerId:'sanwa-signworks-sign', series:'POLLUX 3 直下照明', name:'ポラックス3 直下照明 600T / POLLUX3-600T-65-SWA / POLLUX3-600T-35-SWA', code:'POLLUX3-600T-65-SWA / POLLUX3-600T-35-SWA', listPrice:29000, type:'昼光色6500K・温白色3500K・直下照明', use:'軒下・小型サイン・GL3m以下', detail:'直下照明タイプ。65-SWA/35-SWAの2色展開。カタログ税別定価 ￥29,000。', alias:'三和サインワークス Sanwa SW POLLUX 3 直下照明 ポラックス3 直下照明 600T POLLUX3-600T-65-SWA / POLLUX3-600T-35-SWA 直下 ちょっか 直下照明 ダウンライト 65SWA 35SWA ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-4', order:4200, active:true},
  {id:'sw-pollux3-1200t-swa', makerId:'sanwa-signworks-sign', series:'POLLUX 3 直下照明', name:'ポラックス3 直下照明 1200T / POLLUX3-1200T-65-SWA / POLLUX3-1200T-35-SWA', code:'POLLUX3-1200T-65-SWA / POLLUX3-1200T-35-SWA', listPrice:38000, type:'昼光色6500K・温白色3500K・直下照明', use:'軒下・小型サイン・GL3m以下', detail:'直下照明タイプ。65-SWA/35-SWAの2色展開。カタログ税別定価 ￥38,000。', alias:'三和サインワークス Sanwa SW POLLUX 3 直下照明 ポラックス3 直下照明 1200T POLLUX3-1200T-65-SWA / POLLUX3-1200T-35-SWA 直下 ちょっか 直下照明 ダウンライト 65SWA 35SWA ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-4', order:4210, active:true},
  {id:'sw-solar-plx-d600l-65k', makerId:'sanwa-signworks-sign', series:'SOLAR POLLUX', name:'ソーラーポラックス 600L / SL-PLX-D600L-65K', code:'SL-PLX-D600L-65K', listPrice:120000, type:'昼光色6500K・ソーラー式・シルバーフレーム', use:'電源工事が難しい場所・駐車場サイン・小型サイン', detail:'太陽光発電、蓄電池、日没感知による自動点灯。カタログ税別定価 ￥120,000。', alias:'三和サインワークス Sanwa SW SOLAR POLLUX ソーラーポラックス 600L SL-PLX-D600L-65K ソーラー ソーラーポラックス そーらーぽらっくす 太陽光 電源不要 ポラックス ぽらっくす POLLUX', url:'https://www.sanwa-signworks.co.jp/#pollux-page-4', order:4220, active:true},

  {id:'ta-adview-solar', makerId:'tateyama-advance-sign', series:'アドビュー Solar', name:'アドビューSolar', type:'ソーラー外照式LED', use:'外照式サイン・電源工事不要', detail:'ソーラーパネル、日没感知機能、専用設計フレームを備えたECOシリーズ。太陽光100%、自動点灯・消灯、省施工が特長。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1000, active:true},
  {id:'ta-adview-c-w1800', makerId:'tateyama-advance-sign', series:'アドビューC', name:'アドビューC W1800', type:'AC100/200V・6500K', use:'小型外照式看板・屋内外', detail:'W1800×H45×D99mm、3.7kg、21W、0.24A。フレーム色はS/シルバー、K/ブラック。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1010, active:true},
  {id:'ta-adview-c-w1200', makerId:'tateyama-advance-sign', series:'アドビューC', name:'アドビューC W1200', type:'AC100/200V・6500K', use:'小型外照式看板・屋内外', detail:'W1200×H45×D99mm、2.5kg、14W、0.16A。出幅99mmのコンパクト設計。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1020, active:true},
  {id:'ta-adview-c-w900', makerId:'tateyama-advance-sign', series:'アドビューC', name:'アドビューC W900', type:'AC100/200V・6500K', use:'小型外照式看板・屋内外', detail:'W900×H45×D99mm、1.9kg、11W、0.12A。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1030, active:true},
  {id:'ta-adview-c-w600', makerId:'tateyama-advance-sign', series:'アドビューC', name:'アドビューC W600', type:'AC100/200V・6500K', use:'小型外照式看板・屋内外', detail:'W600×H45×D99mm、1.4kg、8W、0.10A。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1040, active:true},
  {id:'ta-adview-n2-w1800-r35', makerId:'tateyama-advance-sign', series:'アドビューN2 R35', name:'アドビューN2 W1800 R35（D/N/L）', type:'AC100/200V・D6500K/N5000K/L3000K', use:'ファサード・小規模広告・短め照射', detail:'W1833×H65×D165mm、6.0kg、22W、0.24A。D/Nは在庫品、Lは受注生産品。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1050, active:true},
  {id:'ta-adview-n2-w1200-r35', makerId:'tateyama-advance-sign', series:'アドビューN2 R35', name:'アドビューN2 W1200 R35（D/N/L）', type:'AC100/200V・D6500K/N5000K/L3000K', use:'ファサード・小規模広告・短め照射', detail:'W1225×H65×D165mm、4.0kg、15W、0.17A。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1060, active:true},
  {id:'ta-adview-n2-w900-r35', makerId:'tateyama-advance-sign', series:'アドビューN2 R35', name:'アドビューN2 W900 R35（D/N/L）', type:'AC100/200V・D6500K/N5000K/L3000K', use:'ファサード・小規模広告・短め照射', detail:'W916×H65×D165mm、3.0kg、11W、0.13A。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1070, active:true},
  {id:'ta-adview-n2-w600-r35', makerId:'tateyama-advance-sign', series:'アドビューN2 R35', name:'アドビューN2 W600 R35（D/N/L）', type:'AC100/200V・D6500K/N5000K/L3000K', use:'ファサード・小規模広告・短め照射', detail:'W612×H65×D165mm、2.0kg、8W、0.11A。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1080, active:true},
  {id:'ta-adview-n2-corner-r35', makerId:'tateyama-advance-sign', series:'アドビューN2 R35', name:'アドビューN2 コーナー90° R35（D/N/L）', type:'AC100/200V・コーナーユニット', use:'壁面角の照射', detail:'W451.5×H65×D451.5mm、3.0kg、9W、0.10A。照明付コーナー。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1090, active:true},
  {id:'ta-adview-n2-w1800-r70', makerId:'tateyama-advance-sign', series:'アドビューN2 R70', name:'アドビューN2 W1800 R70（D/N/L）', type:'AC100/200V・D6500K/N5000K/L3000K', use:'照射距離1m〜1.5m向け', detail:'W1833×H65×D165mm、6.0kg、47W、0.49A。R35比で照射距離約1.5倍。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1100, active:true},
  {id:'ta-adview-n2-w1200-r70', makerId:'tateyama-advance-sign', series:'アドビューN2 R70', name:'アドビューN2 W1200 R70（D/N/L）', type:'AC100/200V・D6500K/N5000K/L3000K', use:'照射距離1m〜1.5m向け', detail:'W1225×H65×D165mm、4.0kg、32W、0.34A。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1110, active:true},
  {id:'ta-adview-n2-w900-r70', makerId:'tateyama-advance-sign', series:'アドビューN2 R70', name:'アドビューN2 W900 R70（D/N/L）', type:'AC100/200V・D6500K/N5000K/L3000K', use:'照射距離1m〜1.5m向け', detail:'W916×H65×D165mm、3.0kg、24W、0.26A。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1120, active:true},
  {id:'ta-adview-n2-w600-r70', makerId:'tateyama-advance-sign', series:'アドビューN2 R70', name:'アドビューN2 W600 R70（D/N/L）', type:'AC100/200V・D6500K/N5000K/L3000K', use:'照射距離1m〜1.5m向け', detail:'W612×H65×D165mm、2.0kg、15W、0.17A。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1130, active:true},
  {id:'ta-adview-l2-w1800', makerId:'tateyama-advance-sign', series:'アドビューL2', name:'アドビューL2 W1800（D/N）', type:'AC100/200V・D6500K/N5000K', use:'大型サイン・下向き照射', detail:'W1833×H75×D220mm、8.0kg、44W、0.46A。大型サイン対応の新設計LEDモジュール。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1140, active:true},
  {id:'ta-adview-l2-w1200', makerId:'tateyama-advance-sign', series:'アドビューL2', name:'アドビューL2 W1200（D/N）', type:'AC100/200V・D6500K/N5000K', use:'大型サイン・下向き照射', detail:'W1225×H75×D220mm、5.5kg、29W、0.31A。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1150, active:true},
  {id:'ta-adview-l2-w900', makerId:'tateyama-advance-sign', series:'アドビューL2', name:'アドビューL2 W900（D/N）', type:'AC100/200V・D6500K/N5000K', use:'大型サイン・下向き照射', detail:'W916×H75×D220mm、4.2kg、22W、0.24A。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1160, active:true},
  {id:'ta-adview-l2-w600', makerId:'tateyama-advance-sign', series:'アドビューL2', name:'アドビューL2 W600（D/N）', type:'AC100/200V・D6500K/N5000K', use:'大型サイン・下向き照射', detail:'W612×H75×D220mm、3.2kg、15W、0.17A。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1170, active:true},
  {id:'ta-adview-upper-w1800', makerId:'tateyama-advance-sign', series:'アドビューUPPER', name:'アドビューU W1800（D/N）', type:'AC100/200V・D6500K/N5000K', use:'大型サイン・下部から照射', detail:'W1833×H82×D230mm、9.5kg、44W、0.46A。サインメディアを下部から照射するアッパータイプ。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1180, active:true},
  {id:'ta-adview-upper-w1200', makerId:'tateyama-advance-sign', series:'アドビューUPPER', name:'アドビューU W1200（D/N）', type:'AC100/200V・D6500K/N5000K', use:'大型サイン・下部から照射', detail:'W1225×H82×D230mm、6.7kg、29W、0.31A。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1190, active:true},
  {id:'ta-adview-upper-w900', makerId:'tateyama-advance-sign', series:'アドビューUPPER', name:'アドビューU W900（D/N）', type:'AC100/200V・D6500K/N5000K', use:'大型サイン・下部から照射', detail:'W916×H82×D230mm、5.1kg、22W、0.24A。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1200, active:true},
  {id:'ta-adview-upper-w600', makerId:'tateyama-advance-sign', series:'アドビューUPPER', name:'アドビューU W600（D/N）', type:'AC100/200V・D6500K/N5000K', use:'大型サイン・下部から照射', detail:'W612×H82×D230mm、3.4kg、15W、0.17A。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1210, active:true},
  {id:'ta-adview-n-frame-shape', makerId:'tateyama-advance-sign', series:'アドビューNフレーム', name:'アドビューNフレーム 枠用形材W3650', type:'フレーム部材', use:'アドビューN2用アルミフレーム', detail:'枠用形材W3650、12本入り。複合板用アルミ製パネル枠の部材。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1220, active:true},
  {id:'ta-adview-n-frame-cover', makerId:'tateyama-advance-sign', series:'アドビューNフレーム', name:'アドビューNフレーム 化粧カバーW3650', type:'フレーム部材', use:'アドビューN2用アルミフレーム', detail:'化粧カバーW3650、12本入り。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1230, active:true},
  {id:'ta-adview-n-frame-corner', makerId:'tateyama-advance-sign', series:'アドビューNフレーム', name:'アドビューNフレーム コーナー樹脂', type:'フレーム部材', use:'コーナー部材', detail:'コーナー樹脂、20ヶ入り。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1240, active:true},
  {id:'ta-adview-n-frame-set-36-d', makerId:'tateyama-advance-sign', series:'アドビューN2セット', name:'アドビューN2セット3×6（D）', type:'N2＋Nフレームセット', use:'3×6表示面サイズ', detail:'電装ユニット「アドビューN2」と複合板用アルミ製パネル枠「アドビューNフレーム」の一体型ノックダウン販売。Dは昼光色6500K相当。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1250, active:true},
  {id:'ta-adview-n-frame-set-36-n', makerId:'tateyama-advance-sign', series:'アドビューN2セット', name:'アドビューN2セット3×6（N）', type:'N2＋Nフレームセット', use:'3×6表示面サイズ', detail:'Nは昼白色5000K相当。表示面サイズは1820×910。表示面のアルミ複合板は含みません。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1260, active:true},
  {id:'ta-adview-n-frame-set-36-l', makerId:'tateyama-advance-sign', series:'アドビューN2セット', name:'アドビューN2セット3×6（L）', type:'N2＋Nフレームセット', use:'3×6表示面サイズ', detail:'Lは電球色3000K相当。フレームはノックダウン出荷。', url:'https://appsp.st-grp.co.jp/iportal/CatalogViewInterfaceStartUpAction.do?method=startUp&mode=PAGE&volumeID=TADWC001&catalogId=20541330000&pageGroupId=9&designID=TYAD001&catalogCategoryId=&pagePosition=L', order:1270, active:true},
  {id:'fs-taikoo-4b', makerId:'first-system-sign', series:'TAIKOO', name:'TAIKOO 4B', type:'定電流350/700mA', use:'行灯看板・中〜大／高拡散レンズ', detail:'高拡散レンズモジュール。カタログP.4。PDFから確認。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=6', order:10, active:true},
  {id:'fs-taikoo-4c', makerId:'first-system-sign', series:'TAIKOO', name:'TAIKOO 4C', type:'定電流350/700mA', use:'行灯看板・中／高出力レンズ', detail:'日本生産にこだわった高出力レンズモジュール。カタログP.5。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=7', order:20, active:true},
  {id:'fs-taikoo-plus', makerId:'first-system-sign', series:'TAIKOO', name:'TAIKOO PLUS', type:'定電流700mA', use:'行灯看板・大型／厚み150mm以上', detail:'最大の明るさを追求し、150mm以上の看板厚に対応。カタログP.6。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=8', order:30, active:true},
  {id:'fs-tyga-3d-bar', makerId:'first-system-sign', series:'TYGA', name:'TYGA 3D BAR', type:'定電流350/700mA', use:'両面看板・バータイプ', detail:'両面看板対応。配光はそのままに放熱効果を向上したバータイプ。カタログP.7。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=9', order:40, active:true},
  {id:'fs-tyga-3d', makerId:'first-system-sign', series:'TYGA', name:'TYGA 3D', type:'定電流350/700mA', use:'両面看板・片側サイドレンズ', detail:'両面看板用片側サイドレンズモジュール。片側600mm目安。カタログP.8。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=10', order:50, active:true},
  {id:'fs-tyga-4s', makerId:'first-system-sign', series:'TYGA', name:'TYGA 4S', type:'定電流350/700mA', use:'両面看板・両側サイドレンズ', detail:'両面看板用両側サイドレンズモジュール。カタログP.9。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=11', order:60, active:true},
  {id:'fs-cc-psu-option', makerId:'first-system-sign', series:'電源・オプション', name:'定電流電源・オプション', type:'350mA/700mA', use:'定電流LED用電源・調光・分配オプション', detail:'定電流仕様LED用の電源、調光器、接続オプション。カタログP.10〜11。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=12', order:70, active:true},
  {id:'fs-taikoo-5m-24', makerId:'first-system-sign', series:'TAIKOO', name:'TAIKOO 5M-24', type:'DC24V', use:'行灯看板・高出力モデル', detail:'DC24V仕様2Wクラスの高出力モデル。カタログP.13。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=15', order:80, active:true},
  {id:'fs-taikoo-6-24', makerId:'first-system-sign', series:'TAIKOO', name:'TAIKOO 6-24', type:'DC24V', use:'行灯看板・高拡散レンズ', detail:'DC24V仕様1Wクラスの高拡散レンズモジュール。カタログP.14。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=16', order:90, active:true},
  {id:'fs-taikoo-mini-24', makerId:'first-system-sign', series:'TAIKOO', name:'TAIKOO mini-24', type:'DC24V', use:'薄型看板・ミドルパワー', detail:'薄型看板用ミドルパワーレンズモジュール。カタログP.15。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=17', order:100, active:true},
  {id:'fs-taikoo-nano-24', makerId:'first-system-sign', series:'TAIKOO', name:'TAIKOO nano-24', type:'DC24V', use:'薄型・狭幅看板', detail:'薄型・狭幅看板向けレンズモジュール。チャンネル文字看板に最適。カタログP.16。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=18', order:110, active:true},
  {id:'fs-terra', makerId:'first-system-sign', series:'TERRA', name:'TERRA', type:'DC24V', use:'チャンネル文字バックライト', detail:'拡散配光によりチャンネル文字のバックライトに最適。カタログP.17。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=19', order:120, active:true},
  {id:'fs-terra-mini', makerId:'first-system-sign', series:'TERRA', name:'TERRA mini', type:'DC24V', use:'小型バックライト', detail:'TERRAの小型タイプ。チャンネル文字バックライト用途。カタログP.17。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=19', order:130, active:true},
  {id:'fs-shell-nano-24', makerId:'first-system-sign', series:'SHELL', name:'SHELL nano-24', type:'DC24V', use:'薄型・狭幅チャンネル文字', detail:'薄型・狭幅のチャンネル文字看板向けモジュール。カタログP.18。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=20', order:140, active:true},
  {id:'fs-cv24-psu-option', makerId:'first-system-sign', series:'電源・オプション', name:'定電圧24V電源・オプション', type:'DC24V', use:'24V LED用電源・調光・オプション', detail:'24V仕様製品向けの電源、屋外対応電源、調光器、取付オプション。カタログP.19〜20。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=21', order:150, active:true},
  {id:'fs-shell-nano-12', makerId:'first-system-sign', series:'SHELL', name:'SHELL nano-12', type:'DC12V', use:'狭小文字看板・カラーLED', detail:'狭小文字看板に最適なカラーLEDモジュール。赤・青・緑あり。カタログP.22。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=24', order:160, active:true},
  {id:'fs-cv12-psu', makerId:'first-system-sign', series:'電源・オプション', name:'定電圧12V電源', type:'DC12V', use:'12V LED用電源', detail:'12V仕様製品向け電源。カタログP.23。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=25', order:170, active:true},
  {id:'fs-taikoo-100-3', makerId:'first-system-sign', series:'TAIKOO', name:'TAIKOO 100-3', type:'AC100V', use:'行灯看板・高拡散レンズ', detail:'AC100Vタイプの高拡散レンズモジュール。カタログP.25。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=27', order:180, active:true},
  {id:'fs-taikoo-mini-100', makerId:'first-system-sign', series:'TAIKOO', name:'TAIKOO mini-100', type:'AC100V', use:'小型・薄型看板', detail:'小型・薄型看板用の高拡散ミドルパワーレンズモジュール。カタログP.26。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=28', order:190, active:true},
  {id:'fs-shell-5-100', makerId:'first-system-sign', series:'SHELL', name:'SHELL 5-100', type:'AC100V', use:'スタンダードモデル', detail:'AC100Vタイプのスタンダードモデル。カタログP.27。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=29', order:200, active:true},
  {id:'fs-ac100-option', makerId:'first-system-sign', series:'電源・オプション', name:'AC100V保証・オプション', type:'AC100V', use:'保証・取付オプション', detail:'AC100V製品の保証・寿命説明とオプション部品。カタログP.28。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=30', order:210, active:true},
  {id:'fs-delicia-tube-1', makerId:'first-system-sign', series:'DELICIA TUBE', name:'DELICIA TUBE 1', type:'直管型LED', use:'大型看板・スタンダード', detail:'大型看板に最適なスタンダードタイプ。カタログP.30。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=32', order:220, active:true},
  {id:'fs-delicia-tube-2', makerId:'first-system-sign', series:'DELICIA TUBE', name:'DELICIA TUBE 2', type:'直管型LED', use:'大型両面看板', detail:'大型の両面看板に最適。カタログP.31。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=33', order:230, active:true},
  {id:'fs-tube-holder', makerId:'first-system-sign', series:'DELICIA TUBE', name:'ホルダー仕様一覧', type:'直管型LEDオプション', use:'DELICIA TUBE用ホルダー', detail:'20形・32形・40形などのホルダー仕様一覧。カタログP.32。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=34', order:240, active:true},
  {id:'fs-nile-4', makerId:'first-system-sign', series:'NILE', name:'NILE 4', type:'AC100/200V', use:'屋外照明器具・看板照明', detail:'突き出し距離を削減したパネル看板用LED照明。カタログP.34。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=36', order:250, active:true},
  {id:'fs-laika-2', makerId:'first-system-sign', series:'LAIKA', name:'LAIKA 2', type:'AC100V', use:'特殊用途・常夜灯/足元灯', detail:'常夜灯・足元灯・壁灯などに最適。定電照明盤不要な連結照明。カタログP.36。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=38', order:260, active:true},
  {id:'fs-line-bar', makerId:'first-system-sign', series:'LINE BAR', name:'LINE BAR', type:'DC12V', use:'特殊用途・ライン照明', detail:'幅45mm、ボーダーなど長尺光源部材として最適。45mm単位でカット可能。カタログP.36。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=38', order:270, active:true},
  {id:'fs-surge-protector-100', makerId:'first-system-sign', series:'Surge Protector', name:'Surge Protector 100', type:'AC100V', use:'サージ対策', detail:'サージ電圧を吸収してLEDモジュールのダメージを低減。カタログP.37。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=39', order:280, active:true},
  {id:'fs-spec-list', makerId:'first-system-sign', series:'資料', name:'製品仕様一覧', type:'一覧表', use:'全製品の比較確認', detail:'製品名・品番・色温度・消費電力などを一覧で確認するページ。カタログP.38。', url:'https://first-s.jp/data_archives/CT_WEB_v2024.pdf#page=40', order:290, active:true}
];

const linkKey = 'sales-portal-links-v5';
const templateKey = 'sales-portal-templates-v1';
const docKey = 'sales-portal-documents-v1';
const catalogKey = 'sales-portal-catalogs-v1';
const competitorMakerKey = 'sales-portal-competitor-makers-v2';
const competitorProductKey = 'sales-portal-competitor-products-v2';
const competitorPriceKey = 'sales-portal-competitor-prices-v1';
const newsKey = 'sales-portal-news-v1';
const inventoryDataKey = 'sales-portal-inventory-data-v1';
const inventoryMetaKey = 'sales-portal-inventory-meta-v1';
const dailyReportKey = 'sales-portal-daily-report-v1';
const shippingKey = 'sales-portal-shipping-records-v1';
const navOrderKey = 'sales-portal-main-nav-order-v1';
const defaultMainNavOrder = ['tools', 'inventory', 'price-table', 'news', 'daily-report', 'shipping', 'company-info', 'catalogs', 'templates', 'self-products', 'competitors', 'documents', 'admin'];
const mainNavLabelMap = {
  'tools': 'ホーム',
  'inventory': '在庫',
  'price-table': '価格表',
  'news': 'ニュース',
  'daily-report': '日報',
  'shipping': '送り状',
  'company-info': '会社情報',
  'catalogs': 'カタログ',
  'templates': '定型文',
  'self-products': '自社製品',
  'competitors': '他社製品',
  'documents': '資料',
  'admin': '管理'
};

const defaultCompanyInfo = [
  {
    id: 'tokyo-head-office',
    label: '東京本社',
    name: 'アリストジャパン株式会社 東京本社',
    postal: '〒103-0006',
    address: '東京都中央区日本橋富沢町8-7 サンビル 4階',
    tel: '03-5652-0388',
    fax: '03-5652-0386',
    officialUrl: 'https://www.aristo-japan.co.jp/company',
    keywords: '会社情報 東京本社 本社 来社 納品先 送り先 住所 アリストジャパン 日本橋 富沢町'
  },
  {
    id: 'west-office',
    label: '西日本営業所',
    name: 'アリストジャパン株式会社 西日本営業所',
    postal: '〒533-0031',
    address: '大阪府大阪市東淀川区西淡路1-1-36 新大阪ビル705',
    tel: '06-6195-1938',
    fax: '',
    officialUrl: 'https://www.aristo-japan.co.jp/company',
    keywords: '会社情報 西日本営業所 大阪 新大阪 来社 納品先 送り先 住所 アリストジャパン'
  },
  {
    id: 'saitama-factory-aws',
    label: '埼玉工場（AWS）',
    name: 'アリストジャパン株式会社 埼玉工場（AWS）',
    postal: '〒350-1137',
    address: '埼玉県川越市砂新田1-24-15',
    tel: '0492-65-4748',
    fax: '',
    officialUrl: 'https://www.aristo-japan.co.jp/company',
    keywords: '会社情報 埼玉工場 AWS 川越 砂新田 来社 納品先 送り先 住所 アリストジャパン'
  },
  {
    id: 'reverse-warehouse-kashiwa',
    label: '倉庫',
    name: 'リバース株式会社',
    postal: '〒277-0802',
    address: '千葉県柏市船戸1641-1',
    tel: '',
    fax: '',
    contact: '柿元様',
    officialUrl: '',
    keywords: '会社情報 倉庫 リバース株式会社 リバース 柏 船戸 柿元 納品先 送り先 住所'
  }
];
const supabaseConfigKey = 'sales-portal-supabase-config-v1';
const inventoryCloudRowId = 'current';
const inventoryCloudTable = 'sales_portal_inventory_snapshots';
const newsCloudTable = 'sales_portal_news';
const sharedCloudTable = 'sales_portal_shared_data';
const dailyCloudDatasetId = 'dailyReport';
function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || 'null') || fallback;
  } catch (error) {
    return fallback;
  }
}
function mergeDefaultItems(savedItems, defaultItems) {
  const merged = Array.isArray(savedItems) ? [...savedItems] : [];

  // 以前の更新でポータル版カードだけ旧名称になっている場合は、
  // 外部リンクには触れず、#linear-estimate のカード名だけ整理する。
  const portalLinearIndex = merged.findIndex(item => item?.url === '#linear-estimate');
  if (portalLinearIndex !== -1) {
    merged[portalLinearIndex] = {
      ...merged[portalLinearIndex],
      title: 'シームレスビーム 概算数量計算（ポータル版）',
      category: '計算ツール',
      description: '設置距離からシームレス系製品・電源・調光機器・オプション品を概算し、見積もりフォーマットへコピーします。',
      active: true
    };
  }


  defaultItems.forEach(defaultItem => {
    const foundIndex = merged.findIndex(item => item.title === defaultItem.title || item.url === defaultItem.url);
    if (foundIndex === -1) {
      merged.push(defaultItem);
      return;
    }
    const current = merged[foundIndex];
    merged[foundIndex] = {
      ...current,
      category: current.category || defaultItem.category,
      description: current.description || defaultItem.description,
      url: current.url || defaultItem.url,
      memoUrl: current.memoUrl || defaultItem.memoUrl,
      sharePath: current.sharePath || defaultItem.sharePath,
      order: Number.isFinite(Number(current.order)) ? Number(current.order) : defaultItem.order,
      active: current.active ?? defaultItem.active
    };
  });
  return merged;
}

function mergeDefaultTemplates(savedItems, defaultItems) {
  const merged = Array.isArray(savedItems) ? [...savedItems] : [];
  defaultItems.forEach(defaultItem => {
    const foundIndex = merged.findIndex(item => item.subject === defaultItem.subject && item.category === defaultItem.category);
    if (foundIndex === -1) {
      merged.push(defaultItem);
      return;
    }
    const current = merged[foundIndex];
    merged[foundIndex] = {
      ...current,
      category: current.category || defaultItem.category,
      audience: current.audience || defaultItem.audience,
      subject: current.subject || defaultItem.subject,
      body: current.body || defaultItem.body,
      memo: current.memo || defaultItem.memo,
      alias: current.alias || defaultItem.alias,
      catalogType: current.catalogType || defaultItem.catalogType,
      order: Number.isFinite(Number(current.order)) ? Number(current.order) : defaultItem.order,
      active: current.active ?? defaultItem.active,
      updatedAt: current.updatedAt || defaultItem.updatedAt
    };
  });
  return merged;
}
function mergeDefaultCatalogs(savedItems, defaultItems) {
  const merged = Array.isArray(savedItems) ? [...savedItems] : [];
  defaultItems.forEach(defaultItem => {
    const foundIndex = merged.findIndex(item => item.company === defaultItem.company);
    if (foundIndex === -1) {
      merged.push(defaultItem);
      return;
    }
    const current = merged[foundIndex];
    merged[foundIndex] = {
      ...current,
      company: current.company || defaultItem.company,
      category: current.category || defaultItem.category,
      url: current.url || defaultItem.url,
      manufacturerUrl: current.manufacturerUrl || defaultItem.manufacturerUrl,
      memo: current.memo || defaultItem.memo,
      alias: current.alias || defaultItem.alias,
      catalogType: current.catalogType || defaultItem.catalogType,
      order: Number.isFinite(Number(current.order)) ? Number(current.order) : defaultItem.order,
      active: current.active ?? defaultItem.active,
      updatedAt: current.updatedAt || defaultItem.updatedAt
    };
  });
  return merged;
}

function mergeDefaultById(savedItems, defaultItems) {
  const merged = Array.isArray(savedItems) ? [...savedItems] : [];
  defaultItems.forEach(defaultItem => {
    const foundIndex = merged.findIndex(item => item.id === defaultItem.id);
    if (foundIndex === -1) {
      merged.push(defaultItem);
      return;
    }
    merged[foundIndex] = {...defaultItem, ...merged[foundIndex], active: merged[foundIndex].active ?? defaultItem.active};
  });
  return merged;
}


function repairCompetitorData(makersInput, productsInput) {
  const makers = mergeDefaultById(makersInput, defaultCompetitorMakers);
  const obsoleteSanwaProductIds = new Set(['sw-power-pollux-3', 'sw-pollux-4-silver', 'sw-pollux-4-black', 'sw-pollux-3', 'sw-pollux-3-direct', 'sw-solar-pollux']);
  const isObsoleteAristoPowerSummary = product => {
    if (product?.makerId !== 'aristo-self') return false;
    const name = String(product?.name || '').replace(/[\s　_-]/g, '').toUpperCase();
    const code = String(product?.code || '').replace(/[\s　]/g, '').toUpperCase();
    const currentSummary = name === '定電流電源' && /(?:TEP4|HLP|Β1|Β2|B1|B2)/.test(code);
    const voltageSummary = name === '定電圧電源24V' && /(?:WKLVZ240|LP1026)/.test(code);
    return currentSummary || voltageSummary;
  };
  const products = mergeDefaultById(productsInput, defaultCompetitorProducts).filter(product => !obsoleteSanwaProductIds.has(product.id) && !isObsoleteAristoPowerSummary(product));

  // 自社製品の標準仕様はアプリ同梱データを正として毎回更新する。
  // 旧バージョンで保存された spec が最新のサイズ・仕様を上書きしないようにする。
  const selfProductDefaults = defaultCompetitorProducts.filter(product => product.selfProduct || product.makerId === 'aristo-self');
  selfProductDefaults.forEach(defaultProduct => {
    const index = products.findIndex(product => product.id === defaultProduct.id);
    if (index >= 0) {
      const saved = products[index];
      products[index] = {
        ...saved,
        ...defaultProduct,
        active: saved.active ?? defaultProduct.active,
        order: Number.isFinite(Number(saved.order)) ? Number(saved.order) : defaultProduct.order
      };
    } else {
      products.push({...defaultProduct});
    }
  });

  const linearWideDefaults = defaultCompetitorProducts.filter(product => product.selfProduct && String(product.series || '').includes('リニアタイプ広角'));
  linearWideDefaults.forEach(defaultProduct => {
    const index = products.findIndex(product => product.id === defaultProduct.id);
    if (index >= 0) {
      products[index] = {...products[index], ...defaultProduct, active: products[index].active ?? defaultProduct.active};
    } else {
      products.push({...defaultProduct});
    }
  });
  const report = {missingMakers: [], repairedProducts: 0, iconFixed: 0, aliasFixed: 0, obsoleteSanwaRemoved: 0};
  const makerIds = new Set(makers.map(maker => maker.id).filter(Boolean));
  const productMakerIds = Array.from(new Set(products.map(product => product.makerId).filter(Boolean)));

  productMakerIds.forEach(makerId => {
    if (makerIds.has(makerId)) return;
    report.missingMakers.push(makerId);
    makers.push({
      id: makerId,
      name: `未登録メーカー（${makerId}）`,
      type: 'サイン',
      company: '',
      siteUrl: '',
      catalogUrl: '',
      memo: '製品データだけ存在したため、自動復旧で仮メーカーを作成しました。メーカー名・略称・カタログURLを確認してください。',
      alias: makerId,
      icon: '未',
      order: 9000 + makers.length,
      active: true,
      updatedAt: new Date().toISOString()
    });
    makerIds.add(makerId);
  });

  makers.forEach(maker => {
    if (!maker.icon) {
      maker.icon = competitorMakerIconFor(maker);
      report.iconFixed += 1;
    }
    if (!maker.alias) {
      maker.alias = [maker.name, maker.company, maker.type, maker.icon].filter(Boolean).join(' ');
      report.aliasFixed += 1;
    }
  });

  products.forEach(product => {
    if (product.active === undefined) product.active = true;
    const requiredSearchText = [product.name, product.series, product.type, product.use, product.detail].filter(Boolean).join(' ');
    if (!product.alias || !normalizeCatalogText(product.alias).includes(normalizeCatalogText(product.name || ''))) {
      product.alias = [product.alias, requiredSearchText].filter(Boolean).join(' ');
      report.aliasFixed += 1;
      report.repairedProducts += 1;
    }
  });

  if (report.missingMakers.length || report.iconFixed || report.aliasFixed) {
    console.warn('[他社データ自動チェック] 修復内容', report);
  } else {
    console.info('[他社データ自動チェック] OK: メーカー・製品・検索用別名に不足はありません。');
  }

  return {makers, products, report};
}

function assertCompetitorDataHealth() {
  const makerIds = new Set(competitorMakers.map(maker => maker.id));
  const orphanProducts = competitorProducts.filter(product => product.active && !makerIds.has(product.makerId));
  const makersWithoutIcon = competitorMakers.filter(maker => maker.active && !maker.icon);
  const makersWithoutType = competitorMakers.filter(maker => maker.active && maker.type !== 'サイン' && maker.type !== '建築' && maker.type !== '自社');
  const issues = [];
  if (orphanProducts.length) issues.push(`メーカー未登録の製品 ${orphanProducts.length}件`);
  if (makersWithoutIcon.length) issues.push(`略称バッジ未設定 ${makersWithoutIcon.length}件`);
  if (makersWithoutType.length) issues.push(`サイン/建築未設定 ${makersWithoutType.length}件`);
  if (issues.length) {
    console.warn('[他社データチェック] 要確認:', issues, {orphanProducts, makersWithoutIcon, makersWithoutType});
  } else {
    console.info('[他社データチェック] OK:', competitorMakers.map(maker => `${maker.icon}:${maker.name}`).join(' / '));
  }
}
const removedTemplateSubjects = ['ご連絡が遅くなり申し訳ございません', '確認しました'];
function normalizeMainNavOrder(value) {
  const source = Array.isArray(value) ? value : [];
  const allowed = new Set(defaultMainNavOrder);
  const unique = [];
  source.forEach(id => {
    if (allowed.has(id) && !unique.includes(id)) unique.push(id);
  });
  // 旧保存データには自社製品タブがないため、他社製品の直前へ必ず補完する。
  if (!unique.includes('self-products')) {
    const competitorIndex = unique.indexOf('competitors');
    if (competitorIndex >= 0) unique.splice(competitorIndex, 0, 'self-products');
  }
  defaultMainNavOrder.forEach(id => {
    if (!unique.includes(id)) unique.push(id);
  });
  return unique;
}
let mainNavOrder = normalizeMainNavOrder(loadJson(navOrderKey, defaultMainNavOrder));
let links = mergeDefaultItems(loadJson(linkKey, defaultLinks), defaultLinks);
let templates = mergeDefaultTemplates(loadJson(templateKey, defaultTemplates), defaultTemplates)
  .filter(item => !removedTemplateSubjects.includes(item.subject));
let documents = mergeDefaultItems(loadJson(docKey, defaultDocs), defaultDocs);
let catalogs = mergeDefaultCatalogs(loadJson(catalogKey, []), defaultCatalogs);
let competitorMakers = mergeDefaultById(loadJson(competitorMakerKey, []), defaultCompetitorMakers);
let competitorProducts = mergeDefaultById(loadJson(competitorProductKey, []), defaultCompetitorProducts);
const competitorRepairResult = repairCompetitorData(competitorMakers, competitorProducts);
competitorMakers = competitorRepairResult.makers;
competitorProducts = competitorRepairResult.products;
let competitorPrices = loadJson(competitorPriceKey, []);
const savedShippingRecords = loadJson(shippingKey, null);
// 出荷一覧は日々入れ替わる実データのため、コード内の旧出荷サンプルを再結合しない。
// 保存済み配列がある場合は、空配列も含めてその内容を正として復元する。
let shippingRecords = Array.isArray(savedShippingRecords) ? savedShippingRecords : [];
let newsItems = mergeDefaultItems(loadJson(newsKey, defaultNews), defaultNews);
let inventoryRows = loadJson(inventoryDataKey, []);
let inventoryMeta = loadJson(inventoryMetaKey, {loadedAt:'', fileName:'', count:0});
let dailyReport = loadJson(dailyReportKey, {rows:[], summary:null, meta:{}});
localStorage.setItem(linkKey, JSON.stringify(links));
localStorage.setItem(docKey, JSON.stringify(documents));
localStorage.setItem(catalogKey, JSON.stringify(catalogs));
localStorage.setItem(competitorMakerKey, JSON.stringify(competitorMakers));
localStorage.setItem(competitorProductKey, JSON.stringify(competitorProducts));
localStorage.setItem(competitorPriceKey, JSON.stringify(competitorPrices));
localStorage.setItem(shippingKey, JSON.stringify(shippingRecords));
localStorage.setItem(navOrderKey, JSON.stringify(mainNavOrder));
assertCompetitorDataHealth();
localStorage.setItem(newsKey, JSON.stringify(newsItems));
localStorage.setItem(templateKey, JSON.stringify(templates));

const $ = id => document.getElementById(id);
function saveSharedLocal(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

// Shared-data generation guard: prevents an older device from overwriting newer cloud data.
const sharedSyncManifestDatasetId = '__sales_portal_sync_manifest_v1__';
const sharedSyncManifestLocalKey = 'sales-portal-sync-manifest-v1';
function normalizeSharedSyncManifest(value) {
  const manifest = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  return {
    revision: Math.max(0, Number(manifest.revision) || 0),
    updatedAt: String(manifest.updatedAt || ''),
    updatedBy: String(manifest.updatedBy || ''),
    datasetCount: Math.max(0, Number(manifest.datasetCount) || 0)
  };
}
function loadKnownSharedSyncManifest() {
  return normalizeSharedSyncManifest(loadJson(sharedSyncManifestLocalKey, {}));
}
function saveKnownSharedSyncManifest(manifest) {
  const normalized = normalizeSharedSyncManifest(manifest);
  localStorage.setItem(sharedSyncManifestLocalKey, JSON.stringify(normalized));
  return normalized;
}
function getSharedSyncClientId() {
  const key = 'sales-portal-sync-client-id-v1';
  let id = String(localStorage.getItem(key) || '');
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}
async function loadSharedSyncManifestFromCloud() {
  const client = getSupabaseClient();
  if (!client) return null;
  const {data, error} = await client.from(sharedCloudTable).select('data, updated_at').eq('id', sharedSyncManifestDatasetId).maybeSingle();
  if (error) {
    console.warn('共有世代情報の取得に失敗:', error.message);
    return null;
  }
  if (!data) return normalizeSharedSyncManifest({});
  const raw = Array.isArray(data.data) ? data.data[0] : data.data;
  return normalizeSharedSyncManifest({...raw, updatedAt: raw?.updatedAt || data.updated_at || ''});
}
function isCloudManifestNewer(cloudManifest, knownManifest) {
  const cloud = normalizeSharedSyncManifest(cloudManifest);
  const known = normalizeSharedSyncManifest(knownManifest);
  if (cloud.revision !== known.revision) return cloud.revision > known.revision;
  const cloudTime = Date.parse(cloud.updatedAt || '') || 0;
  const knownTime = Date.parse(known.updatedAt || '') || 0;
  return cloudTime > knownTime + 1000;
}
async function verifySharedSaveGeneration({silent=false} = {}) {
  const cloud = await loadSharedSyncManifestFromCloud();
  if (!cloud) return {ok:false, reason:'manifest-load-failed'};
  const known = loadKnownSharedSyncManifest();
  if (cloud.revision > 0 && (known.revision === 0 || isCloudManifestNewer(cloud, known))) {
    const message = 'クラウド側に、この端末が取得していない新しい共有データがあります。先に「共有データを取得」を実行してください。古い端末からの上書きを停止しました。';
    if (!silent) toast(message);
    return {ok:false, reason:'cloud-newer', message, cloud, known};
  }
  return {ok:true, cloud, known};
}
async function publishSharedSyncManifest(previousManifest, datasetCount) {
  const client = getSupabaseClient();
  if (!client) return false;
  const previous = normalizeSharedSyncManifest(previousManifest);
  const now = new Date().toISOString();
  const next = {
    revision: previous.revision + 1,
    updatedAt: now,
    updatedBy: getSharedSyncClientId(),
    datasetCount: Math.max(0, Number(datasetCount) || 0)
  };
  const payload = {id: sharedSyncManifestDatasetId, data: [next], meta: {count:1, source:'sales-portal-sync-guard', syncedAt:now}, updated_at:now};
  const {error} = await client.from(sharedCloudTable).upsert(payload);
  if (error) {
    console.error('共有世代情報の保存に失敗:', error);
    return false;
  }
  saveKnownSharedSyncManifest(next);
  return true;
}
async function saveSharedDatasetToCloud(datasetId, value, {silent=true, skipGenerationGuard=false, updateManifest=true} = {}) {
  const client = getSupabaseClient();
  if (!client) return false;
  let generationCheck = null;
  if (!skipGenerationGuard && datasetId !== sharedSyncManifestDatasetId) {
    generationCheck = await verifySharedSaveGeneration({silent});
    if (!generationCheck.ok) {
      console.warn(`${datasetId} の共有保存を停止:`, generationCheck.reason);
      return false;
    }
  }
  const payload = {
    id: datasetId,
    data: Array.isArray(value) ? value : [],
    meta: {count: Array.isArray(value) ? value.length : 0, source: 'sales-portal', syncedAt: new Date().toISOString()},
    updated_at: new Date().toISOString()
  };
  const {error} = await client.from(sharedCloudTable).upsert(payload);
  if (error) {
    console.error(error);
    if (!silent) toast(`${datasetId} の共有保存に失敗しました: ${error.message}`);
    return false;
  }
  if (updateManifest && datasetId !== sharedSyncManifestDatasetId) {
    const manifestOk = await publishSharedSyncManifest(generationCheck?.cloud || loadKnownSharedSyncManifest(), 1);
    if (!manifestOk) {
      if (!silent) toast(`${datasetId} は保存しましたが、共有世代の更新に失敗しました`);
      return false;
    }
  }
  if (!silent) toast(`${datasetId} を共有保存しました`);
  return true;
}
async function loadSharedDatasetFromCloud(datasetId) {
  const client = getSupabaseClient();
  if (!client) return null;
  const {data, error} = await client.from(sharedCloudTable).select('data, updated_at').eq('id', datasetId).maybeSingle();
  if (error) {
    console.warn(`${datasetId} 共有取得に失敗:`, error.message);
    return null;
  }
  return data && Array.isArray(data.data) ? data.data : null;
}
function saveLinks({sync=true, silent=true} = {}) { saveSharedLocal(linkKey, links); if (sync && hasSupabaseConfig()) saveSharedDatasetToCloud('links', links, {silent}); }
function saveTemplates({sync=true, silent=true} = {}) { saveSharedLocal(templateKey, templates); if (sync && hasSupabaseConfig()) saveSharedDatasetToCloud('templates', templates, {silent}); }
function saveDocs({sync=true, silent=true} = {}) { saveSharedLocal(docKey, documents); if (sync && hasSupabaseConfig()) saveSharedDatasetToCloud('documents', documents, {silent}); }
function saveCatalogs({sync=true, silent=true} = {}) { saveSharedLocal(catalogKey, catalogs); if (sync && hasSupabaseConfig()) saveSharedDatasetToCloud('catalogs', catalogs, {silent}); }
function saveCompetitorMakers({sync=true, silent=true} = {}) { saveSharedLocal(competitorMakerKey, competitorMakers); if (sync && hasSupabaseConfig()) saveSharedDatasetToCloud('competitorMakers', competitorMakers, {silent}); }
function saveCompetitorProducts({sync=true, silent=true} = {}) { saveSharedLocal(competitorProductKey, competitorProducts); if (sync && hasSupabaseConfig()) saveSharedDatasetToCloud('competitorProducts', competitorProducts, {silent}); }
function saveCompetitorPrices({sync=true, silent=true} = {}) { saveSharedLocal(competitorPriceKey, competitorPrices); if (sync && hasSupabaseConfig()) saveSharedDatasetToCloud('competitorPrices', competitorPrices, {silent}); }
function getShippingRecordTimestamp(record={}) {
  const raw = record.importedAt || record.updatedAt || record.createdAt || '';
  const parsed = Date.parse(raw);
  if (Number.isFinite(parsed)) return parsed;
  const shipDate = String(record.shipDate || '').replace(/\//g, '-');
  const shipParsed = Date.parse(shipDate);
  return Number.isFinite(shipParsed) ? shipParsed : 0;
}
function getShippingDatasetFreshness(records=[]) {
  return (Array.isArray(records) ? records : []).reduce((latest, record) => Math.max(latest, getShippingRecordTimestamp(record)), 0);
}
function shouldReplaceShippingWithCloud(localRecords, cloudRecords) {
  if (!Array.isArray(cloudRecords) || !cloudRecords.length) return false;
  if (!Array.isArray(localRecords) || !localRecords.length) return true;
  return getShippingDatasetFreshness(cloudRecords) >= getShippingDatasetFreshness(localRecords);
}
function saveShippingRecords({sync=true, silent=true} = {}) {
  saveSharedLocal(shippingKey, shippingRecords);
  if (sync && hasSupabaseConfig()) saveSharedDatasetToCloud('shippingRecords', shippingRecords, {silent});
}
function saveMainNavOrder({sync=true, silent=true} = {}) { saveSharedLocal(navOrderKey, mainNavOrder); if (sync && hasSupabaseConfig()) saveSharedDatasetToCloud('mainNavOrder', mainNavOrder, {silent}); }
async function loadSharedDataFromCloud({silent=true} = {}) {
  const client = getSupabaseClient();
  if (!client) return false;
  const knownSyncManifestBeforePull = loadKnownSharedSyncManifest();
  const cloudSyncManifest = await loadSharedSyncManifestFromCloud();
  const manifestAdvanced = Boolean(cloudSyncManifest && isCloudManifestNewer(cloudSyncManifest, knownSyncManifestBeforePull));
  if (cloudSyncManifest) saveKnownSharedSyncManifest(cloudSyncManifest);
  let changed = manifestAdvanced;
  const cloudLinks = await loadSharedDatasetFromCloud('links');
  if (cloudLinks?.length) { links = mergeDefaultItems(cloudLinks, defaultLinks); saveLinks({sync:false}); changed = true; }
  const cloudTemplates = await loadSharedDatasetFromCloud('templates');
  if (cloudTemplates?.length) { templates = mergeDefaultTemplates(cloudTemplates, defaultTemplates).filter(item => !removedTemplateSubjects.includes(item.subject)); saveTemplates({sync:false}); changed = true; }
  const cloudDocs = await loadSharedDatasetFromCloud('documents');
  if (cloudDocs?.length) { documents = mergeDefaultItems(cloudDocs, defaultDocs); saveDocs({sync:false}); changed = true; }
  const cloudCatalogs = await loadSharedDatasetFromCloud('catalogs');
  if (cloudCatalogs?.length) { catalogs = mergeDefaultCatalogs(cloudCatalogs, defaultCatalogs); saveCatalogs({sync:false}); changed = true; }
  const cloudCompetitorMakers = await loadSharedDatasetFromCloud('competitorMakers');
  if (cloudCompetitorMakers?.length) { competitorMakers = mergeDefaultById(cloudCompetitorMakers, defaultCompetitorMakers); saveCompetitorMakers({sync:false}); changed = true; }
  const cloudCompetitorProducts = await loadSharedDatasetFromCloud('competitorProducts');
  if (cloudCompetitorProducts?.length) {
    const repaired = repairCompetitorData(competitorMakers, cloudCompetitorProducts);
    competitorMakers = repaired.makers;
    competitorProducts = repaired.products;
    saveCompetitorMakers({sync:false});
    saveCompetitorProducts({sync:false});
    changed = true;
  }
  const cloudCompetitorPrices = await loadSharedDatasetFromCloud('competitorPrices');
  if (cloudCompetitorPrices?.length) { competitorPrices = cloudCompetitorPrices; saveCompetitorPrices({sync:false}); changed = true; }
  const cloudShippingRecords = await loadSharedDatasetFromCloud('shippingRecords');
  if (cloudShippingRecords?.length) {
    if (shouldReplaceShippingWithCloud(shippingRecords, cloudShippingRecords)) {
      // 出荷一覧は追加マスターではなく日次スナップショット。旧既定値を混ぜず、より新しい一覧へ丸ごと置換する。
      shippingRecords = cloudShippingRecords.map(record => ({...record}));
      saveShippingRecords({sync:false});
      changed = true;
    } else if (!silent) {
      toast('端末の出荷一覧の方が新しいため、古い共有データでは上書きしませんでした');
    }
  }
  const cloudMainNavOrder = await loadSharedDatasetFromCloud('mainNavOrder');
  if (cloudMainNavOrder?.length) { mainNavOrder = normalizeMainNavOrder(cloudMainNavOrder); saveMainNavOrder({sync:false}); changed = true; }
  changed = (await loadBuildingPriceCustomersFromCloud({silent:true})) || changed;
  const cloudDaily = await loadSharedDatasetFromCloud(dailyCloudDatasetId);
  if (cloudDaily?.length) { changed = (await loadDailyReportFromCloud({silent:true})) || changed; }

  // The main sync buttons must include the data sales staff actually expect to move
  // between PC and phone: inventory and internal news as well as registered master data.
  changed = (await loadInventoryFromCloud({silent:true})) || changed;
  changed = (await loadNewsFromCloud({silent:true})) || changed;

  if (changed) {
    applyMainNavOrder(); renderMainNavOrderAdmin(); renderLinks(); renderTemplates(); renderDocs(); renderCatalogs(); renderCompetitors(); renderNews(); renderHomeNews(); renderInventoryStatus(); renderInventoryResults(); renderShippingRecords(); renderGlobalSearchResults();
    if (!silent) toast('共有データを取得しました');
  }
  return changed;
}
async function pushSharedDataToCloud({confirmFirst=true} = {}) {
  console.log('[sales-portal] shared save clicked');
  const msg = $('newsMigrationMessage');
  if (!getSupabaseClient()) { toast('Supabase未設定です'); if (msg) msg.textContent = 'Supabase未設定です。'; return false; }
  const generationCheck = await verifySharedSaveGeneration({silent:false});
  if (!generationCheck.ok) {
    if (msg) msg.textContent = generationCheck.message || '共有データの世代確認に失敗したため、保存を停止しました。';
    return false;
  }
  if (confirmFirst && !confirm('現在この端末に表示されている在庫・社内ニュース・営業ツール・定型文・資料・カタログ・他社価格情報・出荷一覧・日報・メニュー順をSupabaseへ共有保存します。実行しますか？')) return false;
  if (msg) msg.textContent = '現在の登録データをSupabaseへ共有保存しています...';
  const results = await Promise.all([
    saveSharedDatasetToCloud('links', links, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('templates', templates, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('documents', documents, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('catalogs', catalogs, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('competitorMakers', competitorMakers, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('competitorProducts', competitorProducts, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('competitorPrices', competitorPrices, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('shippingRecords', shippingRecords, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('mainNavOrder', mainNavOrder, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud(buildingPriceCustomerDatasetId, buildingPriceCustomers, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveNewsToCloud({silent:true}),
    inventoryRows?.length ? saveInventoryToCloud({silent:true}) : Promise.resolve(true),
    dailyReport?.rows?.length ? saveDailyReportToCloud({silent:true}) : Promise.resolve(true)
  ]);
  const datasetsSaved = results.length;
  const dataSaved = results.every(Boolean);
  const manifestSaved = dataSaved ? await publishSharedSyncManifest(generationCheck.cloud, datasetsSaved) : false;
  const ok = dataSaved && manifestSaved;
  if (ok) {
    if (msg) msg.textContent = '現在の登録データを共有保存しました。共有世代も更新済みです。別端末は「共有データを取得」で反映できます。';
    toast('登録データを共有保存しました');
    await runSyncCheck();
  } else {
    if (msg) msg.textContent = '登録データの共有保存に失敗しました。SupabaseのテーブルとConsoleエラーを確認してください。';
    toast('登録データの共有保存に失敗しました');
  }
  return ok;
}
async function pullSharedDataFromCloud() {
  console.log('[sales-portal] shared load clicked');
  const msg = $('newsMigrationMessage');
  if (!getSupabaseClient()) { toast('Supabase未設定です'); if (msg) msg.textContent = 'Supabase未設定です。'; return false; }
  if (msg) msg.textContent = '共有データを取得しています...';
  const changed = await loadSharedDataFromCloud({silent:false});
  if (changed) {
    if (msg) msg.textContent = '共有データを取得しました。在庫・社内ニュース・日報・定型文・資料・カタログ・出荷一覧・メニュー順を最新化しました。';
  } else {
    if (msg) msg.textContent = '取得できる共有データがまだありません。PC側で「現在の登録データを共有保存」を実行してください。';
    toast('共有データはまだありません');
  }
  await runSyncCheck();
  return changed;
}
async function migrateSharedBrowserDataToCloud() {
  const msg = $('newsMigrationMessage');
  if (!getSupabaseClient()) { toast('Supabase未設定です'); if (msg) msg.textContent = 'Supabase未設定です。'; return false; }
  const generationCheck = await verifySharedSaveGeneration({silent:false});
  if (!generationCheck.ok) {
    if (msg) msg.textContent = generationCheck.message || '共有データの世代確認に失敗したため、移行を停止しました。';
    return false;
  }
  if (!confirm('ブラウザ内の営業ツール・定型文・資料・カタログ・日報をSupabaseへ共有保存します。実行しますか？')) return false;
  if (msg) msg.textContent = '登録データをSupabaseへ移行しています...';
  const results = await Promise.all([
    saveSharedDatasetToCloud('links', links, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('templates', templates, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('documents', documents, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('catalogs', catalogs, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('competitorMakers', competitorMakers, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('competitorProducts', competitorProducts, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('competitorPrices', competitorPrices, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('shippingRecords', shippingRecords, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud('mainNavOrder', mainNavOrder, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    saveSharedDatasetToCloud(buildingPriceCustomerDatasetId, buildingPriceCustomers, {silent:true, skipGenerationGuard:true, updateManifest:false}),
    dailyReport?.rows?.length ? saveDailyReportToCloud({silent:true}) : Promise.resolve(true)
  ]);
  const dataSaved = results.every(Boolean);
  const manifestSaved = dataSaved ? await publishSharedSyncManifest(generationCheck.cloud, results.length) : false;
  const ok = dataSaved && manifestSaved;
  if (ok) {
    if (msg) msg.textContent = '営業ツール・定型文・資料・カタログ・出荷一覧・日報をSupabaseへ移行しました。iPhone・iPadで再読み込みしてください。';
    toast('登録データをSupabaseへ移行しました');
    await runSyncCheck();
  } else {
    if (msg) msg.textContent = '一部データの移行に失敗しました。shared table のSQLを確認してください。';
    toast('一部データの移行に失敗しました');
  }
  return ok;
}
function saveNewsLocal() {
  localStorage.setItem(newsKey, JSON.stringify(newsItems));
}
function newsItemToCloudRow(item) {
  const body = item?.body || '';
  const title = item?.title || inferNewsTitle(body);
  const url = item?.url || extractFirstUrl(body);
  const sharePath = item?.sharePath || extractFirstSharePath(body);
  const updatedAt = item?.updatedAt || new Date().toISOString();
  return {
    id: item?.id || crypto.randomUUID(),
    body,
    auto_title: title,
    category: item?.category || inferNewsCategory(body),
    urls: url ? [url] : [],
    folder_paths: sharePath ? [sharePath] : [],
    is_important: Boolean(item?.important),
    created_at: item?.createdAt || updatedAt,
    updated_at: updatedAt
  };
}
function cloudRowToNewsItem(row) {
  const urls = Array.isArray(row?.urls) ? row.urls : [];
  const paths = Array.isArray(row?.folder_paths) ? row.folder_paths : [];
  const body = row?.body || '';
  return {
    id: row?.id || crypto.randomUUID(),
    title: row?.auto_title || inferNewsTitle(body),
    category: row?.category || inferNewsCategory(body),
    body,
    url: urls[0] || extractFirstUrl(body),
    sharePath: paths[0] || extractFirstSharePath(body),
    showHome: true,
    important: Boolean(row?.is_important),
    order: 0,
    active: true,
    createdAt: row?.created_at || row?.updated_at || new Date().toISOString(),
    updatedAt: row?.updated_at || row?.created_at || new Date().toISOString()
  };
}
async function saveNewsToCloud({silent=false} = {}) {
  const client = getSupabaseClient();
  if (!client) {
    if (!silent) toast('Supabase未設定のため、この端末に保存しました');
    return false;
  }
  const payload = newsItems.filter(item => item.active !== false && item.body).map(newsItemToCloudRow);
  if (!payload.length) return true;
  const {error} = await client.from(newsCloudTable).upsert(payload);
  if (error) {
    console.error(error);
    if (!silent) toast(`ニュース共有保存に失敗しました: ${error.message}`);
    return false;
  }
  if (!silent) toast('ニュースを共有保存しました');
  return true;
}
function saveNews({sync=true, silent=true} = {}) {
  saveNewsLocal();
  if (sync && hasSupabaseConfig()) saveNewsToCloud({silent});
}

function getBrowserNewsForMigration() {
  const stored = loadJson(newsKey, []);
  const combined = [...(Array.isArray(stored) ? stored : []), ...newsItems];
  const map = new Map();
  combined.forEach(item => {
    if (!item || item.active === false || !item.body) return;
    const id = item.id || crypto.randomUUID();
    map.set(id, {...item, id, title: item.title || inferNewsTitle(item.body), category: item.category || inferNewsCategory(item.body), updatedAt: item.updatedAt || new Date().toISOString(), active:true});
  });
  return Array.from(map.values()).sort((a,b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0));
}
async function migrateBrowserNewsToCloud() {
  const msg = $('newsMigrationMessage');
  const client = getSupabaseClient();
  if (!client) {
    if (msg) msg.textContent = 'Supabase未設定です。設定後にもう一度実行してください。';
    toast('Supabase未設定です');
    return false;
  }
  const items = getBrowserNewsForMigration();
  if (!items.length) {
    if (msg) msg.textContent = '移行できるブラウザ内ニュースがありません。';
    toast('移行できるニュースがありません');
    return false;
  }
  if (!confirm(`ブラウザ内ニュース ${items.length}件をSupabaseへ共有保存します。実行しますか？`)) return false;
  const previous = newsItems;
  newsItems = items;
  saveNewsLocal();
  if (msg) msg.textContent = 'ニュースをSupabaseへ移行しています...';
  const ok = await saveNewsToCloud({silent:true});
  if (!ok) {
    newsItems = previous;
    saveNewsLocal();
    if (msg) msg.textContent = 'ニュース移行に失敗しました。Supabase設定とテーブルを確認してください。';
    toast('ニュース移行に失敗しました');
    return false;
  }
  await loadNewsFromCloud({silent:true});
  renderNews();
  renderHomeNews();
  await runSyncCheck();
  if (msg) msg.textContent = `ブラウザ内ニュース ${items.length}件をSupabaseへ移行しました。iPhone・iPadで再読み込みしてください。`;
  toast('ニュースをSupabaseへ移行しました');
  return true;
}
async function deleteNewsFromCloud(id, {silent=true} = {}) {
  const client = getSupabaseClient();
  if (!client || !id) return false;
  const {error} = await client.from(newsCloudTable).delete().eq('id', id);
  if (error) {
    console.error(error);
    if (!silent) toast(`ニュース共有削除に失敗しました: ${error.message}`);
    return false;
  }
  return true;
}
async function loadNewsFromCloud({silent=false} = {}) {
  const client = getSupabaseClient();
  if (!client) return false;
  const {data, error} = await client
    .from(newsCloudTable)
    .select('id, body, auto_title, category, urls, folder_paths, is_important, created_at, updated_at')
    .order('updated_at', {ascending:false});
  if (error) {
    console.error(error);
    if (!silent) console.warn('ニュース共有取得に失敗しました:', error.message);
    return false;
  }
  if (!Array.isArray(data)) return false;
  if (data.length) {
    newsItems = data.map(cloudRowToNewsItem);
    saveNewsLocal();
    renderNews();
  }
  return true;
}
localStorage.setItem(newsKey, JSON.stringify(newsItems));
localStorage.setItem(templateKey, JSON.stringify(templates));
function saveInventory() {
  try {
    localStorage.setItem(inventoryDataKey, JSON.stringify(inventoryRows));
    localStorage.setItem(inventoryMetaKey, JSON.stringify(inventoryMeta));
    return true;
  } catch (error) {
    console.error(error);
    alert('在庫データの保存に失敗しました。ブラウザの保存容量を超えている可能性があります。検索は一時的にできますが、ページ更新後に残らない場合があります。');
    return false;
  }
}

function saveDailyReportLocal() {
  try {
    localStorage.setItem(dailyReportKey, JSON.stringify(dailyReport));
    return true;
  } catch (error) {
    console.error(error);
    alert('日報データの保存に失敗しました。');
    return false;
  }
}
function updateDailyCloudStatus(text, isOk = false) {
  const el = $('dailyCloudStatus');
  if (!el) return;
  el.textContent = text;
  el.classList.toggle('is-ok-text', Boolean(isOk));
}
async function saveDailyReportToCloud({silent=false} = {}) {
  const client = getSupabaseClient();
  if (!client) {
    updateDailyCloudStatus('未接続');
    if (!silent) toast('Supabase未設定です');
    return false;
  }
  if (!dailyReport?.rows?.length) {
    if (!silent) toast('共有保存する日報データがありません');
    return false;
  }
  const payload = {
    id: dailyCloudDatasetId,
    data: dailyReport.rows,
    meta: {...(dailyReport.meta || {}), summary: dailyReport.summary || null, syncedAt: new Date().toISOString(), count: dailyReport.rows.length, source: 'sales-portal'},
    updated_at: new Date().toISOString()
  };
  const {error} = await client.from(sharedCloudTable).upsert(payload);
  if (error) {
    console.error(error);
    updateDailyCloudStatus('共有保存失敗');
    if (!silent) alert(`日報の共有保存に失敗しました。\n${error.message}`);
    return false;
  }
  dailyReport.meta = {...(dailyReport.meta || {}), cloudSyncedAt: payload.meta.syncedAt, storage:'browser-local-and-supabase'};
  saveDailyReportLocal();
  renderDailyReportStatus();
  if (!silent) toast('日報を共有保存しました');
  return true;
}
async function loadDailyReportFromCloud({silent=false} = {}) {
  const client = getSupabaseClient();
  if (!client) {
    updateDailyCloudStatus('未接続');
    if (!silent) toast('Supabase未設定です');
    return false;
  }
  const {data, error} = await client.from(sharedCloudTable).select('data, meta, updated_at').eq('id', dailyCloudDatasetId).maybeSingle();
  if (error) {
    console.error(error);
    updateDailyCloudStatus('取得失敗');
    if (!silent) alert(`共有日報の取得に失敗しました。\n${error.message}`);
    return false;
  }
  if (!data || !Array.isArray(data.data)) {
    updateDailyCloudStatus('共有日報なし');
    if (!silent) toast('共有日報はまだありません');
    return false;
  }
  dailyReport = normalizeDailyBudgetMetrics({rows:data.data, summary:data.meta?.summary || buildDailySummary(data.data), meta:{...(data.meta || {}), loadedAt:data.meta?.loadedAt || data.updated_at, cloudSyncedAt:data.updated_at, storage:'supabase-shared'}});
  saveDailyReportLocal();
  renderDailyReport();
  updateDailyCloudStatus(`共有日報を取得済み`, true);
  if (!silent) toast('共有日報を取得しました');
  return true;
}

function loadSupabaseConfig() {
  const saved = loadJson(supabaseConfigKey, null);
  if (saved && saved.url && saved.anonKey) return saved;
  return {url: defaultSupabaseUrl, anonKey: defaultSupabaseAnonKey};
}
function saveSupabaseConfig(config) {
  localStorage.setItem(supabaseConfigKey, JSON.stringify(config));
}
function hasSupabaseConfig() {
  const config = loadSupabaseConfig();
  return Boolean(config.url && config.anonKey);
}
function getSupabaseClient() {
  const config = loadSupabaseConfig();
  if (!config.url || !config.anonKey || !window.supabase?.createClient) return null;
  return window.supabase.createClient(config.url, config.anonKey);
}
function updateInventoryCloudStatus(text, isOk = false) {
  const el = $('inventoryCloudStatus');
  if (!el) return;
  el.textContent = text;
  el.classList.toggle('is-ok-text', Boolean(isOk));
}
async function saveInventoryToCloud({silent=false} = {}) {
  const client = getSupabaseClient();
  if (!client) {
    updateInventoryCloudStatus('未接続');
    if (!silent) toast('Supabase未設定です');
    return false;
  }
  if (!inventoryRows.length) {
    if (!silent) toast('共有保存する在庫データがありません');
    return false;
  }
  const cloudMeta = {
    ...inventoryMeta,
    syncedAt: new Date().toISOString(),
    count: inventoryRows.length,
    source: 'sales-portal'
  };
  const {error} = await client.from(inventoryCloudTable).upsert({
    id: inventoryCloudRowId,
    meta: cloudMeta,
    rows: inventoryRows,
    updated_at: new Date().toISOString()
  });
  if (error) {
    console.error(error);
    updateInventoryCloudStatus('共有保存失敗');
    if (!silent) alert(`Supabaseへの共有保存に失敗しました。
${error.message}`);
    return false;
  }
  inventoryMeta = {...inventoryMeta, cloudSyncedAt: cloudMeta.syncedAt, storage:'browser-local-and-supabase'};
  saveInventory();
  updateInventoryCloudStatus('共有済み', true);
  renderInventoryStatus();
  if (!silent) toast(`${inventoryRows.length}件を共有保存しました`);
  return true;
}
async function loadInventoryFromCloud({silent=false} = {}) {
  const client = getSupabaseClient();
  if (!client) {
    updateInventoryCloudStatus('未接続');
    if (!silent) toast('Supabase未設定です');
    return false;
  }
  const {data, error} = await client
    .from(inventoryCloudTable)
    .select('rows, meta, updated_at')
    .eq('id', inventoryCloudRowId)
    .maybeSingle();
  if (error) {
    console.error(error);
    updateInventoryCloudStatus('取得失敗');
    if (!silent) alert(`共有在庫の取得に失敗しました。
${error.message}`);
    return false;
  }
  if (!data?.rows?.length) {
    updateInventoryCloudStatus('共有データなし');
    if (!silent) toast('共有在庫データがまだありません');
    return false;
  }
  inventoryRows = data.rows;
  inventoryMeta = {
    ...(data.meta || {}),
    storage:'supabase-shared',
    cloudSyncedAt: data.updated_at || data.meta?.syncedAt || '',
    count: data.rows.length
  };
  saveInventory();
  renderInventoryStatus();
  renderInventoryResults();
  updateInventoryCloudStatus('共有在庫を取得済み', true);
  if (!silent) toast(`${inventoryRows.length}件の共有在庫を取得しました`);
  return true;
}

function setSyncStatus(id, text, tone='') {
  const el = $(id);
  if (!el) return;
  el.textContent = text;
  el.classList.remove('sync-ok', 'sync-warn', 'sync-ng');
  if (tone) el.classList.add(`sync-${tone}`);
}

async function checkTableStatus(client, tableName, label) {
  const {data, error, count} = await client.from(tableName).select('id, updated_at', {count:'exact'}).order('updated_at', {ascending:false}).limit(1);
  if (error) {
    return {ok:false, label, message:error.message || '確認失敗'};
  }
  const latest = Array.isArray(data) && data[0]?.updated_at ? ` / ${formatDate(data[0].updated_at)}` : '';
  const countText = Number.isFinite(count) ? `（${count}件）` : '';
  return {ok:true, label, message:`OK${countText}${latest}`};
}

async function checkSharedDataStatus(client) {
  const result = {templates:'テーブル未作成/要確認', templatesOk:false, docsCatalogs:'テーブル未作成/要確認', docsCatalogsOk:false, daily:'テーブル未作成/要確認', dailyOk:false};
  const {data, error} = await client.from(sharedCloudTable).select('id, data, meta, updated_at').in('id', ['templates','documents','catalogs','links', dailyCloudDatasetId]);
  if (error) return result;
  const map = new Map((data || []).map(row => [row.id, row]));
  const count = id => Array.isArray(map.get(id)?.data) ? map.get(id).data.length : 0;
  const t = map.get('templates');
  if (t) { result.templates = `OK（${count('templates')}件）${t.updated_at ? ' / ' + formatDate(t.updated_at) : ''}`; result.templatesOk = true; }
  else result.templates = '未移行（0件）';
  const docsCount = count('documents');
  const catsCount = count('catalogs');
  if (map.get('documents') || map.get('catalogs')) {
    result.docsCatalogs = `OK（資料${docsCount}件 / カタログ${catsCount}件）`;
    result.docsCatalogsOk = true;
  } else {
    result.docsCatalogs = '未移行（0件）';
  }
  const daily = map.get(dailyCloudDatasetId);
  if (daily) { result.daily = `OK（${count(dailyCloudDatasetId)}名）${daily.updated_at ? ' / ' + formatDate(daily.updated_at) : ''}`; result.dailyOk = true; }
  else result.daily = '未移行（0件）';
  return result;
}

async function runSyncCheck() {
  const msg = $('syncCheckMessage');
  setSyncStatus('syncStatusSupabase', '確認中...', 'warn');
  setSyncStatus('syncStatusInventory', '確認中...', 'warn');
  setSyncStatus('syncStatusNews', '確認中...', 'warn');
  setSyncStatus('syncStatusTemplates', '確認中...', 'warn');
  setSyncStatus('syncStatusDaily', '確認中...', 'warn');
  setSyncStatus('syncStatusCompetitors', '未実装', 'warn');
  setSyncStatus('syncStatusDocs', '確認中...', 'warn');
  if (msg) msg.textContent = 'Supabaseと共有テーブルを確認しています...';

  const client = getSupabaseClient();
  if (!client) {
    setSyncStatus('syncStatusSupabase', '未設定', 'ng');
    setSyncStatus('syncStatusInventory', '未確認', 'warn');
    setSyncStatus('syncStatusNews', '未確認', 'warn');
    if (msg) msg.textContent = 'Supabase URL / publishable key を確認してください。';
    return false;
  }

  const inv = await checkTableStatus(client, inventoryCloudTable, '在庫');
  if (inv.ok) {
    setSyncStatus('syncStatusSupabase', 'OK', 'ok');
    setSyncStatus('syncStatusInventory', inv.message, 'ok');
  } else {
    setSyncStatus('syncStatusSupabase', '接続要確認', 'warn');
    setSyncStatus('syncStatusInventory', 'NG', 'ng');
  }

  const news = await checkTableStatus(client, newsCloudTable, 'ニュース');
  if (news.ok) {
    setSyncStatus('syncStatusNews', news.message, 'ok');
  } else {
    setSyncStatus('syncStatusNews', 'テーブル未作成/要確認', 'ng');
  }

  const shared = await checkSharedDataStatus(client);
  setSyncStatus('syncStatusTemplates', shared.templates, shared.templatesOk ? 'ok' : 'warn');
  setSyncStatus('syncStatusDaily', shared.daily, shared.dailyOk ? 'ok' : 'warn');
  setSyncStatus('syncStatusCompetitors', '次回対応予定', 'warn');
  setSyncStatus('syncStatusDocs', shared.docsCatalogs, shared.docsCatalogsOk ? 'ok' : 'warn');

  if (msg) {
    const notes = [];
    if (!inv.ok) notes.push(`在庫: ${inv.message}`);
    if (!news.ok) notes.push(`ニュース: ${news.message}`);
    msg.textContent = notes.length ? `確認完了。一部確認が必要です。${notes.join(' / ')}` : '確認完了。在庫・ニュース・日報・定型文・資料/カタログの共有テーブルは使用できます。';
  }
  return inv.ok && news.ok;
}

async function testSupabaseConnection() {
  const client = getSupabaseClient();
  if (!client) {
    const el = $('supabaseConfigStatus');
    if (el) el.textContent = 'Supabase URL と anon key を入力してください。';
    return false;
  }
  const {error} = await client.from(inventoryCloudTable).select('id').limit(1);
  const el = $('supabaseConfigStatus');
  if (error) {
    if (el) el.textContent = `接続失敗：${error.message}`;
    updateInventoryCloudStatus('接続失敗');
    return false;
  }
  if (el) el.textContent = '接続OK。在庫データを共有できます。';
  updateInventoryCloudStatus('接続OK', true);
  toast('Supabase接続OK');
  return true;
}
function setupSupabaseAdmin() {
  const urlInput = $('supabaseUrlInput');
  const anonInput = $('supabaseAnonInput');
  if (!urlInput || !anonInput) return;
  const config = loadSupabaseConfig();
  urlInput.value = config.url || '';
  anonInput.value = config.anonKey || '';
  const statusEl = $('supabaseConfigStatus');
  if (statusEl) statusEl.textContent = hasSupabaseConfig() ? '設定済み。在庫データ共有を使用できます。' : '未設定。在庫は端末ごとの保存です。';
  $('saveSupabaseConfigBtn')?.addEventListener('click', () => {
    const next = {url:urlInput.value.trim(), anonKey:anonInput.value.trim()};
    saveSupabaseConfig(next);
    if (statusEl) statusEl.textContent = next.url && next.anonKey ? '設定を保存しました。接続確認してください。' : '未設定。在庫は端末ごとの保存です。';
    updateInventoryCloudStatus(next.url && next.anonKey ? '設定済み' : '未接続', Boolean(next.url && next.anonKey));
    toast('Supabase設定を保存しました');
  });
  $('testSupabaseBtn')?.addEventListener('click', testSupabaseConnection);
  $('clearSupabaseConfigBtn')?.addEventListener('click', () => {
    if (!confirm('Supabase設定を削除しますか？在庫データ本体はSupabase側には残ります。')) return;
    localStorage.removeItem(supabaseConfigKey);
    const defaults = loadSupabaseConfig();
    urlInput.value = defaults.url;
    anonInput.value = defaults.anonKey;
    if (statusEl) statusEl.textContent = '初期Supabase設定に戻しました。接続確認してください。';
    updateInventoryCloudStatus('初期設定済み', true);
    toast('初期Supabase設定に戻しました');
  });
  $('runSyncCheckBtn')?.addEventListener('click', () => runSyncCheck());
  $('syncSharedDataPullBtn')?.addEventListener('click', () => pullSharedDataFromCloud());
  $('syncSharedDataPushBtn')?.addEventListener('click', () => pushSharedDataToCloud());
  $('migrateNewsBtn')?.addEventListener('click', () => migrateBrowserNewsToCloud());
  $('migrateSharedDataBtn')?.addEventListener('click', () => migrateSharedBrowserDataToCloud());
  if (hasSupabaseConfig()) {
    setSyncStatus('syncStatusSupabase', '設定済み', 'warn');
    setSyncStatus('syncStatusInventory', inventoryRows.length ? `${inventoryRows.length}件` : '未取得', inventoryRows.length ? 'ok' : 'warn');
    setSyncStatus('syncStatusNews', newsItems.length ? `${newsItems.length}件` : '未取得', newsItems.length ? 'ok' : 'warn');
  }
}

let toastTimer;
function toast(msg) {
  const t = $('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.remove('show');
  window.clearTimeout(toastTimer);
  requestAnimationFrame(() => {
    t.classList.add('show');
    toastTimer = window.setTimeout(() => t.classList.remove('show'), 1900);
  });
}
function escapeHtml(str='') {
  return String(str).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}
function escapeAttr(str='') { return escapeHtml(str); }
async function copyText(text, label='内容') {
  const value = text || '';
  try {
    await navigator.clipboard.writeText(value);
  } catch (error) {
    const area = document.createElement('textarea');
    area.value = value;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    document.body.removeChild(area);
  }
  toast(`✓ ${label}をコピーしました`);
}


// Shipping list: customer inquiry support for Yamato tracking and SMS notice.
const shippingSearch = $('shippingSearch');
const shippingDateFilter = $('shippingDateFilter');
const shippingGrid = $('shippingGrid');
const shippingSummary = $('shippingSummary');
const shippingImportBox = $('shippingImportBox');
const shippingPdfInput = $('shippingPdfInput');
const shippingPdfStatus = $('shippingPdfStatus');

function normalizeShippingText(value='') {
  return String(value ?? '').normalize('NFKC').toLowerCase().replace(/[‐‑‒–—ー－]/g, '-').replace(/\s+/g, ' ').trim();
}

function hiraToKataText(value='') {
  return String(value || '').replace(/[ぁ-ん]/g, ch => String.fromCharCode(ch.charCodeAt(0) + 0x60));
}
function kataToHiraText(value='') {
  return String(value || '').replace(/[ァ-ン]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60));
}
function normalizeLooseText(value='') {
  return normalizeShippingText(value)
    .replace(/[()（）株式会社有限会社株有様・･\[\]【】]/g, '')
    .replace(/\s+/g, '')
    .trim();
}
function uniqueSearchWords(words) {
  return Array.from(new Set(words.map(x => normalizeShippingText(x)).filter(Boolean)));
}
const shippingCustomerAliasRules = [
  {key:'東洋ライト工業', alias:['とうようらいとこうぎょう','トウヨウライトコウギョウ','とうようライト','東洋ライト']},
  {key:'エス・アイ・エス', alias:['えすあいえす','エスアイエス','sis','戸田工場','とだこうじょう']},
  {key:'イサオサイン', alias:['いさおさいん','イサオサイン']},
  {key:'坂東塗装店', alias:['ばんどうとそうてん','バンドウトソウテン','坂東']},
  {key:'SLUSTER', alias:['すらすたー','スラスター','sluster']},
  {key:'エダキン', alias:['えだきん','エダキン','つくば']},
  {key:'しばた工芸', alias:['しばたこうげい','シバタコウゲイ','鹿沼','かぬま']},
  {key:'貞岡工芸社', alias:['さだおかこうげいしゃ','サダオカコウゲイシャ','貞岡']},
  {key:'アバンギャルドフジコウ', alias:['あばんぎゃるどふじこう','アバンギャルドフジコウ','高畑','たかばた']},
  {key:'ｱﾊﾞﾝｷﾞｬﾙﾄﾞﾌｼﾞｺｳ', alias:['あばんぎゃるどふじこう','アバンギャルドフジコウ','高畑','たかばた']},
  {key:'ワイズサイン', alias:['わいずさいん','ワイズサイン']},
  {key:'日本システムバンク', alias:['にほんしすてむばんく','ニホンシステムバンク','システムバンク','金沢']},
  {key:'アーネスト', alias:['あーねすと','アーネスト']},
  {key:'金星堂', alias:['きんせいどう','キンセイドウ']},
  {key:'協同工芸社', alias:['きょうどうこうげいしゃ','キョウドウコウゲイシャ','協同']},
  {key:'築館看板', alias:['つきだてかんばん','ツキダテカンバン','築館']},
  {key:'リディアワークス', alias:['りでぃあわーくす','リディアワークス']},
  {key:'サンコー造型', alias:['さんこーぞうけい','サンコーゾウケイ','サンコー']},
  {key:'ブンカ巧芸社', alias:['ぶんかこうげいしゃ','ブンカコウゲイシャ','文化巧芸社','ブンカ']},
  {key:'神戸極楽堂', alias:['こうべごくらくどう','コウベゴクラクドウ','極楽堂']},
  {key:'阪神電飾', alias:['はんしんでんしょく','ハンシンデンショク']},
  {key:'オールサイン', alias:['おーるさいん','オールサイン']},
  {key:'カスタム', alias:['かすたむあいでぃあ','カスタムアイディア','カスタム']},
  {key:'晃新製作所', alias:['こうしんせいさくしょ','コウシンセイサクショ','晃新']},
  {key:'アドクラフト', alias:['あどくらふと','アドクラフト']},
  {key:'グロリア工芸', alias:['ぐろりあこうげい','グロリアコウゲイ']},
  {key:'プロエスト', alias:['ぷろえすと','プロエスト']},
  {key:'ハンディワーク', alias:['はんでぃわーく','ハンディワーク']},
  {key:'ビジュアル企工', alias:['びじゅあるきこう','ビジュアルキコウ','ビジュアル']},
  {key:'城北電装', alias:['じょうほくでんそう','ジョウホクデンソウ','城北']},
  {key:'ナガノ', alias:['ながの','ナガノ']},
  {key:'ウチノ看板', alias:['うちのかんばん','ウチノカンバン','三ヶ島','みかじま']},
  {key:'アルク', alias:['あるく','アルク']},
  {key:'かんばんの永田', alias:['かんばんのながた','カンバンノナガタ','永田']},
  {key:'エフアイティー', alias:['えふあいてぃー','エフアイティー','fit']},
  {key:'オミノ', alias:['おみの','オミノ','八潮','やしお']},
  {key:'アドネット', alias:['あどねっと','アドネット']},
  {key:'デンショク', alias:['でんしょく','デンショク']},
  {key:'ライトビコー', alias:['らいとびこー','ライトビコー']},
  {key:'コタニサイン', alias:['こたにさいん','コタニサイン']},
  {key:'エム･ジェイ', alias:['えむじぇい','エムジェイ','mj']},
  {key:'アート', alias:['あーと','アート']},
  {key:'JBS', alias:['じぇいびーえす','ジェイビーエス','jbs']},
  {key:'アリストジャパン', alias:['ありすとじゃぱん','アリストジャパン','aristo']},
  {key:'JYPSHOP', alias:['じぇいわいぴーしょっぷ','ジェイワイピーショップ','jypshop','現場気付','げんばきづけ']},
];
function getShippingCustomerAliases(customer='') {
  const source = String(customer || '').normalize('NFKC');
  const words = [source, source.replace(/\(株\)|株式会社|\(有\)|有限会社|様/g, ''), kataToHiraText(source), hiraToKataText(source)];
  shippingCustomerAliasRules.forEach(rule => {
    if (source.includes(rule.key) || normalizeLooseText(source).includes(normalizeLooseText(rule.key))) {
      words.push(...rule.alias, ...rule.alias.map(kataToHiraText), ...rule.alias.map(hiraToKataText));
    }
  });
  return uniqueSearchWords(words);
}
function looseTextScore(query, target) {
  const q = normalizeLooseText(kataToHiraText(query));
  const t = normalizeLooseText(kataToHiraText(target));
  if (!q || !t) return 0;
  if (t === q) return 100;
  if (t.startsWith(q)) return 88;
  if (t.includes(q)) return 74;
  let qi = 0;
  for (let i = 0; i < t.length && qi < q.length; i += 1) {
    if (t[i] === q[qi]) qi += 1;
  }
  const ratio = qi / q.length;
  if (q.length >= 3 && ratio >= 0.9) return 60;
  if (q.length >= 4 && ratio >= 0.75) return 48;
  return 0;
}
function shippingRecordSearchScore(record, query) {
  const q = normalizeShippingText(query || '');
  if (!q) return 0;
  const digits = q.replace(/\D/g, '');
  const trackingDigits = String(record.trackingNo || '').replace(/\D/g, '');
  if (digits.length >= 4 && trackingDigits.includes(digits)) return 120;
  const customerFields = [
    ...(getShippingCustomerAliases(record.customer || '')),
    record.customer,
    record.contact
  ];
  let best = 0;
  customerFields.filter(Boolean).forEach(field => {
    best = Math.max(best, looseTextScore(q, field));
  });
  // 住所検索は誤ヒットを防ぐため、都道府県・市区町村など3文字以上の入力時だけ補助的に使う
  if (q.length >= 3) best = Math.max(best, Math.min(looseTextScore(q, record.address || ''), 72));
  return best >= 70 ? best : 0;
}


function setShippingPdfStatus(message, type='') {
  if (!shippingPdfStatus) return;
  shippingPdfStatus.textContent = message;
  shippingPdfStatus.dataset.status = type;
}
function joinPdfParts(parts) {
  return parts
    .map(x => String(x || '').trim())
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .replace(/\s+([、。])/g, '$1')
    .trim();
}
function groupPdfItemsByColumnNearY(items, xMin, xMax, targetY, tolerance=5) {
  return items
    .filter(item => item.x >= xMin && item.x < xMax && Math.abs(item.y - targetY) <= tolerance)
    .sort((a,b) => a.x - b.x)
    .map(item => item.text);
}
function extractPdfTextItems(textContent) {
  return (textContent.items || [])
    .map(item => ({
      text: String(item.str || '').trim(),
      x: Number(item.transform?.[4] || 0),
      y: Number(item.transform?.[5] || 0)
    }))
    .filter(item => item.text);
}
function pickPdfLineByOffset(items, xMin, xMax, rowY, offsets, tolerance=5) {
  for (const offset of offsets) {
    const parts = groupPdfItemsByColumnNearY(items, xMin, xMax, rowY + offset, tolerance);
    if (parts.length) return joinPdfParts(parts);
  }
  return '';
}
function normalizeImportedCustomer(value='') {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .replace(/㈱/g, '(株)')
    .trim();
}
function looksLikeShippingDateTime(value='') {
  const text = normalizeShippingText(value);
  return /^(0?\d月\s*\d{1,2}日|午前中|\d{1,2}\s*[〜~ー-]\s*\d{1,2}時|指定なし)/.test(text);
}
function looksLikeShippingItem(value='') {
  return /LED製品|NO\.?|Z\d{3,}/i.test(String(value || ''));
}
function cleanImportedLine(value='') {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .replace(/㈱/g, '(株)')
    .replace(/\s+様$/, ' 様')
    .trim();
}
function pickCleanPdfLine(items, xMin, xMax, rowY, offsets, tolerance=4) {
  return cleanImportedLine(pickPdfLineByOffset(items, xMin, xMax, rowY, offsets, tolerance));
}
function parseShippingRecordsFromPdfPageItems(items, fileName, pageNo) {
  const pageText = items.map(x => x.text).join(' ');
  const shipDate = (pageText.match(/20\d{2}\/\d{2}\/\d{2}/) || [''])[0] || new Date().toISOString().slice(0,10).replaceAll('-', '/');
  const seqItems = items
    .filter(item => item.x >= 18 && item.x < 42 && /^\d{4}$/.test(item.text) && Number(item.text) >= 1)
    .sort((a,b) => b.y - a.y || a.x - b.x);
  const records = [];
  seqItems.forEach(seqItem => {
    const rowY = seqItem.y;
    const trackingNo = formatTrackingNo(pickCleanPdfLine(items, 42, 125, rowY, [0], 4));
    if (!trackingNo || !/\d{4}-\d{4}-\d{4}/.test(trackingNo)) return;

    // ヤマトの出荷予定一覧表は1件が3行構成。PDF.jsはY座標が下基準なので、
    // 明細行から下の行は -13 / -26 方向で拾う。上下両方を探すと、
    // 次の行の「07月 23日 午前中」や品名を顧客名として拾うため固定する。
    const phone = pickCleanPdfLine(items, 188, 245, rowY, [0], 4);
    const recipient = pickCleanPdfLine(items, 278, 430, rowY, [0], 4);
    let department = pickCleanPdfLine(items, 188, 438, rowY, [-13], 4);
    if (looksLikeShippingDateTime(department) || looksLikeShippingItem(department) || /^\d+$/.test(department.replace(/\D/g, ''))) department = '';

    const deliveryDate = pickCleanPdfLine(items, 188, 230, rowY, [-26], 4);
    const deliveryTime = pickCleanPdfLine(items, 228, 275, rowY, [-26], 4);
    const item = pickCleanPdfLine(items, 278, 438, rowY, [-26], 4);
    const address = pickCleanPdfLine(items, 438, 620, rowY, [0], 4);
    const customer = normalizeImportedCustomer(department || recipient || '顧客名未取得');
    const contact = cleanImportedLine(recipient);

    records.push({
      id: `ship-${trackingNo.replace(/\D/g, '')}`,
      seq: seqItem.text,
      trackingNo,
      customer,
      contact: contact && contact !== customer ? contact : '',
      address: address || '',
      delivery: joinPdfParts([deliveryDate, deliveryTime]),
      item: item || '',
      phone: phone || '',
      shipDate,
      carrier: 'ヤマト運輸',
      sourceFile: fileName || '',
      sourcePage: pageNo,
      active: true,
      importedAt: new Date().toISOString()
    });
  });
  return records;
}
function replaceImportedShippingRecords(importedRecords) {
  const unique = [];
  const seen = new Set();
  importedRecords.forEach(record => {
    const key = String(record.trackingNo || '').replace(/\D/g, '');
    if (!key || seen.has(key)) return;
    seen.add(key);
    unique.push({...record, active: true, importedAt: record.importedAt || new Date().toISOString()});
  });
  const previousCount = shippingRecords.filter(x => x.active !== false).length;
  shippingRecords = unique;
  return {added: unique.length, removed: previousCount, updated: 0};
}
async function importShippingPdfFile(file) {
  if (!file) return;
  if (!window.pdfjsLib) {
    toast('PDF読み取りライブラリを読み込めませんでした');
    setShippingPdfStatus('PDFライブラリ未読込', 'error');
    return;
  }
  try {
    setShippingPdfStatus(`読込中：${file.name}`, 'loading');
    const pdfjs = window.pdfjsLib;
    if (pdfjs.GlobalWorkerOptions && !pdfjs.GlobalWorkerOptions.workerSrc) {
      pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }
    const buffer = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({data: buffer}).promise;
    const importedRecords = [];
    for (let pageNo = 1; pageNo <= pdf.numPages; pageNo += 1) {
      const page = await pdf.getPage(pageNo);
      const content = await page.getTextContent();
      const items = extractPdfTextItems(content);
      importedRecords.push(...parseShippingRecordsFromPdfPageItems(items, file.name, pageNo));
    }
    if (!importedRecords.length) {
      setShippingPdfStatus('取り込み対象が見つかりませんでした。PDF形式を確認してください。', 'error');
      toast('出荷データを読み取れませんでした');
      return;
    }
    const {added, removed} = replaceImportedShippingRecords(importedRecords);
    // まず端末へ確実に保存し、Supabase設定済みなら同じ最新一覧を直ちに共有保存する。
    saveShippingRecords({sync:false});
    let sharedSaved = false;
    if (hasSupabaseConfig()) {
      sharedSaved = await saveSharedDatasetToCloud('shippingRecords', shippingRecords, {silent:true});
    }
    renderShippingRecords();
    renderGlobalSearchResults();
    const shareNote = hasSupabaseConfig() ? (sharedSaved ? '・共有保存済み' : '・端末保存済み（共有保存失敗）') : '・端末保存済み';
    const message = `PDF取込完了：${added}件（以前の出荷一覧${removed}件は削除${shareNote}）`;
    setShippingPdfStatus(message, sharedSaved || !hasSupabaseConfig() ? 'ok' : 'error');
    toast(message);
  } catch (error) {
    console.error('[出荷PDF取込エラー]', error);
    setShippingPdfStatus('PDF取込に失敗しました。Consoleを確認してください。', 'error');
    toast('PDF取込に失敗しました');
  } finally {
    if (shippingPdfInput) shippingPdfInput.value = '';
  }
}

function compactPhoneNumber(value='') {
  return String(value || '').replace(/[^0-9+]/g, '');
}
function formatTrackingNo(value='') {
  const digits = String(value || '').replace(/\D/g, '');
  if (digits.length === 12) return `${digits.slice(0,4)}-${digits.slice(4,8)}-${digits.slice(8)}`;
  return String(value || '').trim();
}
function yamatoTrackingUrl(trackingNo='') {
  const digits = String(trackingNo || '').replace(/\D/g, '');
  // Yamato uses the no01 query key on inquiry-result URLs.
  // The button still copies the tracking number first, so users can paste manually if Yamato changes the page behavior.
  return `https://toi.kuronekoyamato.co.jp/cgi-bin/tneko?number00=1&no01=${encodeURIComponent(digits)}`;
}
function shippingSmsBody(record) {
  const trackingUrl = yamatoTrackingUrl(record.trackingNo || '');
  return `お世話になっております。
送り状番号をご連絡いたします。

ヤマト運輸
送り状No：${record.trackingNo || ''}
${trackingUrl ? `配送確認URL：${trackingUrl}
` : ''}
よろしくお願いいたします。`;
}
function shippingEmailBody(record) {
  const trackingUrl = yamatoTrackingUrl(record.trackingNo || '');
  return `お世話になっております。

下記商品の送り状番号をご連絡いたします。

配送会社：ヤマト運輸
送り状No：${record.trackingNo || ''}
${record.delivery ? `配送予定：${record.delivery}
` : ''}${record.address ? `送り先住所：${record.address}
` : ''}${trackingUrl ? `配送確認URL：${trackingUrl}
` : ''}
配送状況は上記URLよりご確認ください。

よろしくお願いいたします。`;
}
function copyShippingEmailBody(recordId) {
  const record = shippingRecords.find(x => x.id === recordId);
  if (!record) return;
  copyText(shippingEmailBody(record), 'メール文面');
}
function openShippingSms(recordId) {
  const record = shippingRecords.find(x => x.id === recordId);
  if (!record) return;
  const phone = compactPhoneNumber(record.phone || '');
  const body = encodeURIComponent(shippingSmsBody(record));
  const url = phone ? `sms:${phone}?&body=${body}` : `sms:?&body=${body}`;
  window.location.href = url;
}
function openYamatoTracking(recordId) {
  const record = shippingRecords.find(x => x.id === recordId);
  if (!record) return;
  const no = formatTrackingNo(record.trackingNo || '');
  const digits = String(record.trackingNo || '').replace(/\D/g, '');
  if (no) copyText(no, '送り状No');
  if (!digits) {
    toast('送り状No.がありません');
    return;
  }
  window.open(yamatoTrackingUrl(no), '_blank', 'noopener,noreferrer');
}
function shippingSearchText(record) {
  return normalizeShippingText([
    ...getShippingCustomerAliases(record.customer || ''),
    record.customer,
    record.contact,
    record.trackingNo,
    String(record.trackingNo || '').replace(/\D/g, ''),
    record.address
  ].join(' '));
}
function getShippingDates() {
  return Array.from(new Set(shippingRecords.filter(x => x.active !== false).map(x => x.shipDate || '日付未設定'))).sort().reverse();
}
function setupShippingDateFilter() {
  if (!shippingDateFilter) return;
  const current = shippingDateFilter.value || 'すべて';
  const dates = getShippingDates();
  shippingDateFilter.innerHTML = ['すべて', ...dates].map(date => `<option value="${escapeAttr(date)}">${escapeHtml(date)}</option>`).join('');
  shippingDateFilter.value = dates.includes(current) ? current : 'すべて';
}
function getFilteredShippingRecords() {
  const q = normalizeShippingText(shippingSearch?.value || '');
  const date = shippingDateFilter?.value || 'すべて';
  return shippingRecords
    .filter(x => x.active !== false)
    .filter(x => date === 'すべて' || (x.shipDate || '日付未設定') === date)
    .map(x => ({...x, _searchScore: q ? shippingRecordSearchScore(x, q) : 0}))
    .filter(x => !q || x._searchScore > 0)
    .sort((a,b) => (q ? (b._searchScore - a._searchScore) : 0) || String(b.shipDate || '').localeCompare(String(a.shipDate || '')) || String(a.seq || '').localeCompare(String(b.seq || ''), 'ja', {numeric:true}));
}
function renderShippingRecords() {
  if (!shippingGrid) return;
  setupShippingDateFilter();
  const records = getFilteredShippingRecords();
  if (shippingSummary) {
    const all = shippingRecords.filter(x => x.active !== false).length;
    const dates = getShippingDates();
    shippingSummary.innerHTML = `<span>表示 ${records.length}件 / 登録 ${all}件</span><span>最新出荷日 ${escapeHtml(dates[0] || '未登録')}</span><span>検索対象：顧客名・読み方・送り状No.中心</span>`;
  }
  if (!records.length) {
    shippingGrid.innerHTML = '<p class="empty-message">該当する出荷情報がありません。</p>';
    return;
  }
  shippingGrid.innerHTML = records.map(record => `
    <article class="shipping-card">
      <div class="shipping-card-main">
        <div class="shipping-card-head">
          <span class="badge">${escapeHtml(record.shipDate || '出荷日未設定')}</span>
          <span class="badge">${escapeHtml(record.delivery || '配送日未設定')}</span>
          <span class="shipping-seq">SEQ ${escapeHtml(record.seq || '-')}</span>
        </div>
        <h3>${escapeHtml(record.customer || '顧客名未設定')}</h3>
        <div class="shipping-tracking-block">
          <span>送り状No.</span>
          <strong>${escapeHtml(record.trackingNo || '')}</strong>
        </div>
        <p class="shipping-address"><strong>送り先住所</strong>${escapeHtml(record.address || '未設定')}</p>
        ${record.item ? `<p class="shipping-item"><strong>品名</strong>${escapeHtml(record.item)}</p>` : ''}
        ${record.contact && record.contact !== record.customer ? `<p class="shipping-contact"><strong>宛名</strong>${escapeHtml(record.contact)}</p>` : ''}
      </div>
      <div class="shipping-actions">
        <button class="ghost small-action" type="button" onclick="copyText('${escapeAttr(record.trackingNo || '')}', '送り状No')">Noコピー</button>
        <button class="primary small-action" type="button" onclick="openYamatoTracking('${escapeAttr(record.id)}')">ヤマト運輸で確認</button>
        <button class="ghost small-action" type="button" onclick="copyShippingEmailBody('${escapeAttr(record.id)}')">メール文面コピー</button>
        <button class="secondary small-action" type="button" onclick="openShippingSms('${escapeAttr(record.id)}')">SMS作成</button>
      </div>
    </article>
  `).join('');
}
function addShippingRecordFromForm() {
  const customer = $('shippingCustomerInput')?.value?.trim() || '';
  const trackingNo = formatTrackingNo($('shippingTrackingInput')?.value || '');
  const address = $('shippingAddressInput')?.value?.trim() || '';
  const delivery = $('shippingDeliveryInput')?.value?.trim() || '';
  const item = $('shippingItemInput')?.value?.trim() || '';
  const phone = $('shippingPhoneInput')?.value?.trim() || '';
  if (!customer || !trackingNo || !address) {
    toast('顧客名・送り状No.・送り先住所は入力してください');
    return;
  }
  shippingRecords.unshift({
    id: crypto.randomUUID(),
    seq: String(shippingRecords.length + 1).padStart(4, '0'),
    trackingNo,
    customer,
    contact: '',
    address,
    delivery,
    item,
    phone,
    shipDate: new Date().toISOString().slice(0,10).replaceAll('-', '/'),
    carrier: 'ヤマト運輸',
    active: true,
    createdAt: new Date().toISOString()
  });
  saveShippingRecords({sync:false});
  ['shippingCustomerInput','shippingTrackingInput','shippingAddressInput','shippingDeliveryInput','shippingItemInput','shippingPhoneInput'].forEach(id => { const el = $(id); if (el) el.value = ''; });
  toast('出荷情報を追加しました');
  renderShippingRecords();
  renderGlobalSearchResults();
}
function setupShippingPanel() {
  if (!shippingGrid) return;
  shippingSearch?.addEventListener('input', renderShippingRecords);
  shippingDateFilter?.addEventListener('change', renderShippingRecords);
  $('clearShippingSearchBtn')?.addEventListener('click', () => { if (shippingSearch) shippingSearch.value = ''; if (shippingDateFilter) shippingDateFilter.value = 'すべて'; renderShippingRecords(); });
  $('toggleShippingImportBtn')?.addEventListener('click', () => { if (shippingImportBox) shippingImportBox.open = !shippingImportBox.open; });
  shippingPdfInput?.addEventListener('change', event => importShippingPdfFile(event.target.files?.[0]));

  function getShippingDroppedPdf(event) {
    return Array.from(event.dataTransfer?.files || []).find(file => /\.pdf$/i.test(file.name || '') || file.type === 'application/pdf');
  }
  function markShippingDropActive(active) {
    [shippingImportBox, shippingPdfStatus, document.querySelector('.shipping-pdf-import-card')].filter(Boolean).forEach(el => {
      el.classList.toggle('dragging', !!active);
    });
  }
  function handleShippingDragEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    if (shippingImportBox) shippingImportBox.open = true;
    markShippingDropActive(true);
    setShippingPdfStatus('ここにPDFをドロップして読み込みできます', 'loading');
  }
  function handleShippingDropEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    markShippingDropActive(false);
    const file = getShippingDroppedPdf(event);
    if (file) importShippingPdfFile(file);
    else {
      setShippingPdfStatus('PDFファイルをドロップしてください', 'error');
      toast('PDFファイルを選択してください');
    }
  }
  const shippingDropTargets = [
    shippingImportBox,
    shippingPdfStatus,
    document.querySelector('.shipping-pdf-import-card'),
    document.querySelector('.shipping-help-card')
  ].filter(Boolean);
  shippingDropTargets.forEach(target => {
    ['dragenter','dragover'].forEach(name => target.addEventListener(name, handleShippingDragEvent));
    ['dragleave'].forEach(name => target.addEventListener(name, event => {
      event.preventDefault();
      markShippingDropActive(false);
    }));
    target.addEventListener('drop', handleShippingDropEvent);
  });
  shippingPdfStatus?.addEventListener('click', () => shippingPdfInput?.click());

  // 送り状ページ上なら、枠から少し外れてドロップしてもPDFを拾う。
  document.addEventListener('dragover', event => {
    if ((location.hash || '#tools') !== '#shipping') return;
    if (!Array.from(event.dataTransfer?.types || []).includes('Files')) return;
    handleShippingDragEvent(event);
  });
  document.addEventListener('drop', event => {
    if ((location.hash || '#tools') !== '#shipping') return;
    const hasFiles = Array.from(event.dataTransfer?.types || []).includes('Files') || (event.dataTransfer?.files?.length || 0) > 0;
    if (!hasFiles) return;
    handleShippingDropEvent(event);
  });
  $('addShippingRecordBtn')?.addEventListener('click', addShippingRecordFromForm);
  renderShippingRecords();
}
window.openShippingSms = openShippingSms;
window.copyShippingEmailBody = copyShippingEmailBody;
window.openYamatoTracking = openYamatoTracking;

function explorerCommand(path) {
  return `explorer "${path}"`;
}
function copyExplorerPath(path, label='Explorerコマンド') {
  copyText(explorerCommand(path), label);
}
function openExplorerGuide(title, path) {
  const command = explorerCommand(path);
  $('guideTitle').textContent = `${title} の開き方`;
  $('guidePath').textContent = path;
  $('guideCommand').textContent = command;
  $('copyGuideCommandBtn').onclick = () => copyText(command, 'Explorerコマンド');
  $('copyGuidePathBtn').onclick = () => copyText(path, '共有フォルダパス');
  $('guideDialog').showModal();
}
function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}`;
}

function formatDateTime(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}
function extractFirstUrl(text='') {
  const match = String(text).match(/https?:\/\/[^\s"'<>]+/i);
  return match ? match[0] : '';
}
function extractFirstSharePath(text='') {
  const match = String(text).match(/\\\\[^\n"'<>]+/);
  return match ? match[0].trim() : '';
}
function iconForNewsCategory(category='') {
  const text = String(category);
  if (text.includes('重要')) return '🚨';
  if (text.includes('新製品')) return '✨';
  if (text.includes('入荷')) return '📦';
  if (text.includes('価格')) return '💴';
  if (text.includes('展示')) return '🏢';
  if (text.includes('障害')) return '⚠️';
  if (text.includes('社内')) return '💬';
  return '📢';
}

function cleanNewsLine(line='') {
  return String(line)
    .replace(/^[@＠]all\s*/i, '')
    .replace(/^[\s　・\-—ー]+/, '')
    .trim();
}
function inferNewsTitle(body='') {
  const rawLines = String(body || '').split(/\r?\n/).map(cleanNewsLine).filter(Boolean);
  const skip = /^(お疲れ様です|いつもお世話になっております|ご確認.*お願いします|よろしくお願いいたします|よろしくお願い致します|以上です|共有です)[。！!、\s]*$/;
  const useful = rawLines.filter(line => !skip.test(line));
  const titleSource = useful[0] || rawLines[0] || 'ニュース';
  const second = useful[1] || '';
  let title = titleSource;
  if (title.length < 13 && second) title = `${title} ${second}`;
  title = title.replace(/https?:\/\/[^\s"'<>]+/ig, '').replace(/\\\\[^\n"'<>]+/g, '').trim();
  if (!title) title = 'ニュース';
  return title.length > 34 ? `${title.slice(0, 34)}…` : title;
}
function inferNewsCategory(body='') {
  const text = String(body || '');
  if (/重要|至急|必ず|緊急|注意/.test(text)) return '重要';
  if (/新製品|新商品|販売準備|発売|リリース/.test(text)) return '新製品';
  if (/入荷|着予定|欠品|在庫|AIR|SEA/.test(text)) return '入荷';
  if (/価格改定|値上げ|値下げ|価格|単価/.test(text)) return '価格改定';
  if (/展示会|ショールーム|来社|セミナー/.test(text)) return '展示会';
  if (/障害|不具合|エラー|停止|遅延/.test(text)) return '障害';
  if (/休み|会議|送別会|歓迎会|社内|共有/.test(text)) return '社内';
  return 'その他';
}
function getNewsDisplayTitle(item={}) {
  return item.title || inferNewsTitle(item.body);
}

function iconForCategory(category='') {
  const text = String(category);
  if (text.includes('見積')) return '🧾';
  if (text.includes('自動作図')) return '📐';
  if (text.includes('図面')) return '🗂️';
  if (text.includes('営業')) return '🤝';
  if (text.includes('計算')) return '🧮';
  if (text.includes('タスク')) return '✅';
  if (text.includes('社内')) return '💬';
  if (text.includes('在庫')) return '📦';
  return '🔗';
}

// Link management
const grid = $('toolGrid');
const search = $('searchInput');
const filter = $('categoryFilter');
const reorderLinksBtn = $('reorderLinksBtn');
const linkDialog = $('linkDialog');
const linkForm = $('linkForm');
let linkReorderMode = false;
function categories() { return ['すべて', ...Array.from(new Set(links.map(x => x.category))).sort()]; }
function renderLinkFilters() {
  const current = filter.value || 'すべて';
  filter.innerHTML = categories().map(c => `<option ${c===current?'selected':''}>${escapeHtml(c)}</option>`).join('');
}
function normalizeLinkOrders() {
  links = [...links].sort((a,b) => (a.order||0) - (b.order||0) || String(a.title||'').localeCompare(String(b.title||''), 'ja'));
  links.forEach((item, index) => { item.order = (index + 1) * 10; });
}
function currentSortedLinks() {
  const q = search.value.trim().toLowerCase();
  const cat = filter.value || 'すべて';
  return links.filter(x => x.active)
    .filter(x => cat === 'すべて' || x.category === cat)
    .filter(x => [x.title,x.category,x.description,x.url,x.memoUrl,x.sharePath].join(' ').toLowerCase().includes(q))
    .sort((a,b) => (a.order||0) - (b.order||0) || String(a.title||'').localeCompare(String(b.title||''), 'ja'));
}
function renderLinks() {
  renderLinkFilters();
  if (reorderLinksBtn) {
    reorderLinksBtn.textContent = linkReorderMode ? '並び替え完了' : '並び替え';
    reorderLinksBtn.classList.toggle('active', linkReorderMode);
  }
  const rows = currentSortedLinks();
  const reorderNotice = linkReorderMode ? '<div class="reorder-notice">並び替えモード：↑ ↓で全員共通の営業ツール表示順を変更できます。変更は自動保存されます。</div>' : '';
  grid.innerHTML = reorderNotice + (rows.map((x, index) => {
    const reorderButtons = linkReorderMode ? `<div class="reorder-actions"><button class="ghost compact" type="button" onclick="moveLinkOrder('${x.id}', -1)" ${index===0?'disabled':''}>↑</button><button class="ghost compact" type="button" onclick="moveLinkOrder('${x.id}', 1)" ${index===rows.length-1?'disabled':''}>↓</button></div>` : '';
    return `<article class="card ${linkReorderMode ? 'reorder-card' : ''}"><div class="card-title-row"><span class="card-icon" aria-hidden="true">${iconForCategory(x.category)}</span><div class="card-title-content"><span class="badge">${escapeHtml(x.category)}</span><h3>${escapeHtml(x.title)}</h3></div>${reorderButtons}</div><p>${escapeHtml(x.description || '説明未設定')}</p><div class="status ${x.url?'':'off'}">${x.url?'URL登録済み':'URL未設定'}</div>${x.sharePath?'<div class="status path-link">共有フォルダパスあり</div>':''}${x.memoUrl?'<div class="status memo-link">ログイン情報メモあり</div>':''}<div class="card-actions">${x.url ? (String(x.url).startsWith('#') ? `<a class="primary" href="${escapeAttr(x.url)}">開く</a>` : `<a class="primary" href="${escapeAttr(x.url)}" target="_blank" rel="noreferrer">↗ 開く</a>`) : `<button class="ghost" disabled>開けません</button>`}${x.sharePath?`<button class="secondary" onclick="copySharePath('${x.id}')">📋 パスコピー</button><button class="secondary wide-action" onclick="copyLinkExplorerCommand('${x.id}')">🪟 Explorerコマンドコピー</button><button class="ghost" onclick="openLinkExplorerGuide('${x.id}')">？ 開き方ガイド</button>`:''}${x.memoUrl?`<a class="secondary" href="${escapeAttr(x.memoUrl)}" target="_blank" rel="noreferrer">💬 メモを開く</a>`:''}<button class="ghost" onclick="editLink('${x.id}')">編集</button><button class="danger" onclick="deleteLink('${x.id}')">削除</button></div></article>`;
  }).join('') || '<p>該当するリンクがありません。</p>');
}
function openLinkForm(item) {
  $('dialogTitle').textContent = item ? 'リンクを編集' : 'リンクを追加';
  $('editId').value = item?.id || '';
  $('titleInput').value = item?.title || '';
  $('categoryInput').value = item?.category || 'その他';
  $('descriptionInput').value = item?.description || '';
  $('urlInput').value = item?.url || '';
  $('memoUrlInput').value = item?.memoUrl || '';
  $('sharePathInput').value = item?.sharePath || '';
  $('orderInput').value = item?.order || 0;
  $('activeInput').checked = item?.active ?? true;
  linkDialog.showModal();
}
window.moveLinkOrder = (id, direction) => {
  normalizeLinkOrders();
  const rows = currentSortedLinks();
  const index = rows.findIndex(x => x.id === id);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= rows.length) return;
  const current = links.find(x => x.id === rows[index].id);
  const next = links.find(x => x.id === rows[nextIndex].id);
  if (!current || !next) return;
  const tmp = current.order || 0;
  current.order = next.order || 0;
  next.order = tmp;
  saveLinks({sync:true, silent:true});
  renderLinks();
  toast('営業ツールの並び順を保存しました');
};
window.copySharePath = id => { const item = links.find(x => x.id === id); if (item?.sharePath) copyText(item.sharePath, '共有フォルダパス'); };
window.copyLinkExplorerCommand = id => { const item = links.find(x => x.id === id); if (item?.sharePath) copyExplorerPath(item.sharePath, 'Explorerコマンド'); };
window.openLinkExplorerGuide = id => { const item = links.find(x => x.id === id); if (item?.sharePath) openExplorerGuide(getNewsDisplayTitle(item), item.sharePath); };
window.editLink = id => openLinkForm(links.find(x => x.id === id));
window.deleteLink = id => { if (!confirm('このリンクを削除しますか？')) return; links = links.filter(x => x.id !== id); saveLinks(); renderLinks(); toast('削除しました'); };
linkForm.addEventListener('submit', e => {
  e.preventDefault();
  const id = $('editId').value;
  const item = {id: id || crypto.randomUUID(), title:$('titleInput').value.trim(), category:$('categoryInput').value.trim() || 'その他', description:$('descriptionInput').value.trim(), url:$('urlInput').value.trim(), memoUrl:$('memoUrlInput').value.trim(), sharePath:$('sharePathInput').value.trim(), order:Number($('orderInput').value || 0), active:$('activeInput').checked};
  links = id ? links.map(x => x.id === id ? item : x) : [...links, item];
  saveLinks(); linkDialog.close(); renderLinks(); toast('保存しました');
});
$('addLinkBtn').addEventListener('click', () => openLinkForm());
$('closeDialog').addEventListener('click', () => linkDialog.close());
reorderLinksBtn?.addEventListener('click', () => {
  linkReorderMode = !linkReorderMode;
  if (linkReorderMode) {
    normalizeLinkOrders();
    search.value = '';
    filter.value = 'すべて';
    saveLinks({sync:true, silent:true});
    toast('並び替えモードにしました');
  } else {
    toast('並び替えを終了しました');
  }
  renderLinks();
});
search.addEventListener('input', renderLinks);
filter.addEventListener('change', renderLinks);


// News management
const newsFeatured = $('newsFeatured');
const newsGrid = $('newsGrid');
const newsSearch = $('newsSearch');
const newsCategoryFilter = $('newsCategoryFilter');
const newsDialog = $('newsDialog');
const newsForm = $('newsForm');
function newsCategories() { return ['すべて', ...Array.from(new Set(newsItems.map(x => x.category))).sort()]; }
function renderNewsFilters() {
  if (!newsCategoryFilter) return;
  const current = newsCategoryFilter.value || 'すべて';
  newsCategoryFilter.innerHTML = newsCategories().map(c => `<option ${c===current?'selected':''}>${escapeHtml(c)}</option>`).join('');
}
function newsBodyPreview(text='', max=190) {
  const raw = String(text || '本文未設定').trim();
  if (raw.length <= max) return raw;
  return raw.slice(0, max).trimEnd() + '\n…';
}
function newsCardHtml(x, featured=false) {
  const body = escapeHtml(newsBodyPreview(x.body));
  const icon = iconForNewsCategory(x.category);
  return `<article class="card news-card ${featured ? 'featured-news-card' : ''} ${x.important ? 'important-news-card' : ''}">
    <div class="badge-row"><span class="badge">${icon} ${escapeHtml(x.category || 'その他')}</span>${x.important ? '<span class="badge audience">重要</span>' : ''}${x.showHome ? '<span class="badge audience">ホーム表示</span>' : ''}</div>
    <h3>${escapeHtml(getNewsDisplayTitle(x))}</h3>
    <div class="news-body news-body-plain">${body}</div>
    <p class="memo">更新：${escapeHtml(formatDateTime(x.updatedAt))}</p>
    ${x.url ? '<div class="status">URLあり</div>' : ''}${x.sharePath ? '<div class="status path-link">共有フォルダパスあり</div>' : ''}
    <div class="card-actions">
      <button class="secondary" onclick="copyNewsBody('${x.id}')">本文コピー</button>
      ${x.url ? `<a class="primary" href="${escapeAttr(x.url)}" target="_blank" rel="noreferrer">URLを開く</a>` : ''}
      ${x.sharePath ? `<button class="secondary" onclick="copyNewsExplorerCommand('${x.id}')">Explorerコピー</button><button class="ghost" onclick="openNewsExplorerGuide('${x.id}')">開き方</button>` : ''}
      <button class="ghost" onclick="editNews('${x.id}')">編集</button><button class="danger" onclick="deleteNews('${x.id}')">削除</button>
    </div>
  </article>`;
}
function filteredNewsRows() {
  const q = normalizeSearchText(newsSearch?.value || '');
  const cat = newsCategoryFilter?.value || 'すべて';
  return newsItems.filter(x => x.active)
    .filter(x => cat === 'すべて' || x.category === cat)
    .filter(x => normalizeSearchText([getNewsDisplayTitle(x),x.category,x.body,x.url,x.sharePath].join(' ')).includes(q))
    .sort((a,b) => Number(b.important) - Number(a.important) || new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0) || (a.order||0) - (b.order||0));
}
function newsExcerpt(text='', max=88) {
  const cleaned = String(text || '').replace(/\s+/g, ' ').trim();
  return cleaned.length > max ? cleaned.slice(0, max) + '…' : cleaned;
}
const HOME_NEWS_ROTATE_MS = 6500;
const HOME_NEWS_MANUAL_PAUSE_MS = 12000;
let homeNewsItems = [];
let homeNewsIndex = 0;
let homeNewsTimer = null;
let homeNewsResumeTimer = null;
let homeNewsPaused = false;
let homeNewsTouchStartX = null;

function stopHomeNewsTimer() {
  if (homeNewsTimer) clearInterval(homeNewsTimer);
  homeNewsTimer = null;
}
function clearHomeNewsResumeTimer() {
  if (homeNewsResumeTimer) clearTimeout(homeNewsResumeTimer);
  homeNewsResumeTimer = null;
}
function homeNewsAutoRotateAllowed() {
  return homeNewsItems.length > 1
    && !homeNewsPaused
    && !document.hidden
    && !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}
function startHomeNewsTimer() {
  stopHomeNewsTimer();
  if (!homeNewsAutoRotateAllowed()) return;
  homeNewsTimer = setInterval(() => {
    homeNewsIndex = (homeNewsIndex + 1) % homeNewsItems.length;
    paintHomeNewsSlide({direction:'next'});
  }, HOME_NEWS_ROTATE_MS);
}
function pauseHomeNews({temporary=false} = {}) {
  homeNewsPaused = true;
  stopHomeNewsTimer();
  clearHomeNewsResumeTimer();
  if (temporary && homeNewsItems.length > 1) {
    homeNewsResumeTimer = setTimeout(() => {
      homeNewsPaused = false;
      startHomeNewsTimer();
    }, HOME_NEWS_MANUAL_PAUSE_MS);
  }
}
function resumeHomeNews() {
  clearHomeNewsResumeTimer();
  homeNewsPaused = false;
  startHomeNewsTimer();
}
function paintHomeNewsSlide({direction='next'} = {}) {
  const el = $('homeNewsTop');
  const latest = homeNewsItems[homeNewsIndex];
  if (!el || !latest) return;
  const icon = iconForNewsCategory(latest.category);
  const hasMultiple = homeNewsItems.length > 1;
  const counter = `${homeNewsIndex + 1} / ${homeNewsItems.length}`;
  el.dataset.newsId = latest.id || '';
  el.innerHTML = `
    <div class="home-news-head">
      <span class="home-news-kicker">${icon} 最新ニュース</span>
      <span class="home-news-date">${escapeHtml(formatDate(latest.updatedAt))}</span>
    </div>
    <div class="home-news-stage ${direction === 'prev' ? 'is-prev' : 'is-next'}">
      <button class="home-news-main" type="button" onclick="location.hash='news'" aria-label="ニュース一覧を開く">
        <strong>${escapeHtml(getNewsDisplayTitle(latest))}</strong>
        <span>${escapeHtml(newsExcerpt(latest.body, 92))}</span>
      </button>
    </div>
    <div class="home-news-footer">
      <div class="home-news-carousel-controls" ${hasMultiple ? '' : 'hidden'} aria-label="ニュース切り替え">
        <button class="home-news-arrow" type="button" onclick="changeHomeNews(-1)" aria-label="前のニュース">‹</button>
        <div class="home-news-dots" role="tablist" aria-label="ニュース位置">
          ${homeNewsItems.map((_, i) => `<button type="button" class="home-news-dot ${i === homeNewsIndex ? 'active' : ''}" onclick="goToHomeNews(${i})" aria-label="${i + 1}件目のニュース" aria-selected="${i === homeNewsIndex}"></button>`).join('')}
        </div>
        <span class="home-news-counter">${counter}</span>
        <button class="home-news-arrow" type="button" onclick="changeHomeNews(1)" aria-label="次のニュース">›</button>
      </div>
      <div class="home-news-actions">
        <button class="ghost compact" type="button" onclick="location.hash='news'">ニュースを見る</button>
        <button class="secondary compact" type="button" onclick="openNewsForm()">最速追加</button>
      </div>
    </div>`;
}
function renderHomeNewsTop(items) {
  const el = $('homeNewsTop');
  if (!el) return;
  const rows = Array.isArray(items) ? items.filter(Boolean).slice(0, 5) : [];
  const previousId = homeNewsItems[homeNewsIndex]?.id;
  homeNewsItems = rows;
  if (!rows.length) {
    stopHomeNewsTimer();
    clearHomeNewsResumeTimer();
    homeNewsIndex = 0;
    el.hidden = true;
    el.innerHTML = '';
    return;
  }
  const previousIndex = rows.findIndex(x => x.id === previousId);
  homeNewsIndex = previousIndex >= 0 ? previousIndex : Math.min(homeNewsIndex, rows.length - 1);
  el.hidden = false;
  paintHomeNewsSlide();
  startHomeNewsTimer();
}
function renderHomeNews() {
  const rows = filteredNewsRows();
  const homeRows = rows.filter(x => x.showHome);
  renderHomeNewsTop(homeRows.length ? homeRows : rows.slice(0, 1));
}
window.changeHomeNews = step => {
  if (homeNewsItems.length < 2) return;
  homeNewsIndex = (homeNewsIndex + Number(step || 0) + homeNewsItems.length) % homeNewsItems.length;
  paintHomeNewsSlide({direction:Number(step) < 0 ? 'prev' : 'next'});
  pauseHomeNews({temporary:true});
};
window.goToHomeNews = index => {
  const next = Number(index);
  if (!Number.isInteger(next) || next < 0 || next >= homeNewsItems.length || next === homeNewsIndex) return;
  const direction = next < homeNewsIndex ? 'prev' : 'next';
  homeNewsIndex = next;
  paintHomeNewsSlide({direction});
  pauseHomeNews({temporary:true});
};
function setupHomeNewsCarousel() {
  const el = $('homeNewsTop');
  if (!el || el.dataset.carouselReady === 'true') return;
  el.dataset.carouselReady = 'true';
  el.addEventListener('mouseenter', () => pauseHomeNews());
  el.addEventListener('mouseleave', resumeHomeNews);
  el.addEventListener('focusin', () => pauseHomeNews());
  el.addEventListener('focusout', event => {
    if (!el.contains(event.relatedTarget)) resumeHomeNews();
  });
  el.addEventListener('touchstart', event => {
    homeNewsTouchStartX = event.changedTouches?.[0]?.clientX ?? null;
    pauseHomeNews();
  }, {passive:true});
  el.addEventListener('touchend', event => {
    const endX = event.changedTouches?.[0]?.clientX;
    if (homeNewsTouchStartX != null && endX != null) {
      const distance = endX - homeNewsTouchStartX;
      if (Math.abs(distance) >= 45) changeHomeNews(distance > 0 ? -1 : 1);
      else resumeHomeNews();
    } else {
      resumeHomeNews();
    }
    homeNewsTouchStartX = null;
  }, {passive:true});
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopHomeNewsTimer();
    else startHomeNewsTimer();
  });
  window.matchMedia?.('(prefers-reduced-motion: reduce)').addEventListener?.('change', startHomeNewsTimer);
}
function renderNews() {
  renderNewsFilters();
  const rows = filteredNewsRows();
  const homeRows = rows.filter(x => x.showHome);
  renderHomeNewsTop(homeRows.length ? homeRows : rows.slice(0, 1));
  if (!newsGrid || !newsFeatured) return;
  newsFeatured.innerHTML = '';
  newsFeatured.hidden = true;
  newsGrid.innerHTML = rows.map(x => newsCardHtml(x)).join('') || '<p>該当するニュースがありません。</p>';
}
function openNewsForm(item) {
  $('newsDialogTitle').textContent = item ? 'ニュースを編集' : 'ニュースを追加';
  $('newsEditId').value = item?.id || '';
  if ($('newsTitleInput')) $('newsTitleInput').value = item?.title || '';
  $('newsCategoryInput').value = item?.category || '自動判定';
  $('newsBodyInput').value = item?.body || '';
  $('newsUrlInput').value = item?.url || '';
  $('newsSharePathInput').value = item?.sharePath || '';
  $('newsHomeInput').checked = item?.showHome ?? true;
  $('newsImportantInput').checked = item?.important ?? false;
  newsDialog.showModal();
}
window.copyNewsBody = id => { const item = newsItems.find(x => x.id === id); if (item) copyText(item.body, 'ニュース本文'); };
window.copyNewsExplorerCommand = id => { const item = newsItems.find(x => x.id === id); if (item?.sharePath) copyExplorerPath(item.sharePath, 'Explorerコマンド'); };
window.openNewsExplorerGuide = id => { const item = newsItems.find(x => x.id === id); if (item?.sharePath) openExplorerGuide(getNewsDisplayTitle(item), item.sharePath); };
window.editNews = id => openNewsForm(newsItems.find(x => x.id === id));
window.deleteNews = async id => { if (!confirm('このニュースを削除しますか？')) return; newsItems = newsItems.filter(x => x.id !== id); saveNewsLocal(); await deleteNewsFromCloud(id, {silent:false}); renderNews(); toast('削除しました'); };
newsForm?.addEventListener('submit', e => {
  e.preventDefault();
  const id = $('newsEditId').value;
  const body = $('newsBodyInput').value.trim();
  const url = $('newsUrlInput').value.trim() || extractFirstUrl(body);
  const sharePath = $('newsSharePathInput').value.trim() || extractFirstSharePath(body);
  const categorySelection = $('newsCategoryInput')?.value || '自動判定';
  const title = inferNewsTitle(body);
  const category = categorySelection === '自動判定' ? inferNewsCategory(body) : categorySelection;
  const item = {id: id || crypto.randomUUID(), title, category, body, url, sharePath, showHome:$('newsHomeInput').checked, important:$('newsImportantInput').checked, order:0, active:true, updatedAt:new Date().toISOString()};
  newsItems = id ? newsItems.map(x => x.id === id ? item : x) : [item, ...newsItems];
  saveNews({sync:true, silent:false}); newsDialog.close(); renderNews(); toast('保存しました');
});
$('addNewsBtn')?.addEventListener('click', () => openNewsForm());
$('closeNewsDialog')?.addEventListener('click', () => newsDialog.close());
newsSearch?.addEventListener('input', renderNews);
newsCategoryFilter?.addEventListener('change', renderNews);

// Template management
const templateGrid = $('templateGrid');
const templateSearch = $('templateSearch');
const templateCategoryFilter = $('templateCategoryFilter');
const templateAudienceFilter = $('templateAudienceFilter');
const templateDialog = $('templateDialog');
const templateForm = $('templateForm');
function templateCategories() { return ['すべて', ...Array.from(new Set(templates.map(x => x.category))).sort()]; }
function renderTemplateFilters() {
  const current = templateCategoryFilter.value || 'すべて';
  templateCategoryFilter.innerHTML = templateCategories().map(c => `<option ${c===current?'selected':''}>${escapeHtml(c)}</option>`).join('');
}
function renderTemplates() {
  renderTemplateFilters();
  const q = normalizeSearchText(templateSearch.value);
  const cat = templateCategoryFilter.value || 'すべて';
  const aud = templateAudienceFilter.value || 'すべて';
  const rows = templates.filter(x => x.active)
    .filter(x => cat === 'すべて' || x.category === cat)
    .filter(x => aud === 'すべて' || x.audience === aud)
    .filter(x => normalizeSearchText([x.category,x.audience,x.subject,x.body,x.memo].join(' ')).includes(q))
    .sort((a,b) => (a.order||0) - (b.order||0));
  templateGrid.innerHTML = rows.map(x => {
    const isLineWorks = x.category === 'LINE WORKS' || /line works|lineworks|ラインワークス/i.test([x.category,x.memo,x.subject].join(' '));
    const typeIcon = isLineWorks ? '💬' : (x.audience === '社外向け' ? '📧' : '📝');
    return `<article class="card template-card ${isLineWorks ? 'lineworks-template-card' : ''}"><div class="badge-row"><span class="badge">${typeIcon} ${escapeHtml(x.category)}</span><span class="badge audience">${escapeHtml(x.audience)}</span></div><h3>${escapeHtml(x.subject)}</h3><div class="template-body">${escapeHtml(x.body)}</div><p class="memo">${escapeHtml(x.memo || '用途メモなし')}</p><p class="memo">最終更新：${escapeHtml(formatDate(x.updatedAt))}</p><div class="card-actions">${isLineWorks ? `<button class="primary" onclick="openTemplateLineWorks('${x.id}')">LINE WORKSへ</button>` : `<button class="primary" onclick="copyTemplateSubject('${x.id}')">件名コピー</button>`}<button class="secondary" onclick="copyTemplateBody('${x.id}')">本文コピー</button><button class="ghost" onclick="editTemplate('${x.id}')">編集</button><button class="danger" onclick="deleteTemplate('${x.id}')">削除</button></div></article>`;
  }).join('') || '<p>該当する定型文がありません。</p>';
}
function openTemplateForm(item) {
  $('templateDialogTitle').textContent = item ? '定型文を編集' : '定型文を追加';
  $('templateEditId').value = item?.id || '';
  $('templateCategoryInput').value = item?.category || 'その他';
  $('templateAudienceInput').value = item?.audience || '社外向け';
  $('templateSubjectInput').value = item?.subject || '';
  $('templateBodyInput').value = item?.body || '';
  $('templateMemoInput').value = item?.memo || '';
  $('templateOrderInput').value = item?.order || 0;
  $('templateActiveInput').checked = item?.active ?? true;
  templateDialog.showModal();
}
window.copyTemplateSubject = id => { const item = templates.find(x => x.id === id); if (item) copyText(item.subject, '件名'); };
window.copyTemplateBody = id => { const item = templates.find(x => x.id === id); if (item) copyText(item.body, '本文'); };
window.openTemplateLineWorks = id => {
  const item = templates.find(x => x.id === id);
  if (!item) return;
  copyText(item.body, '本文');
  setTimeout(() => { window.location.href = 'lineworks://'; }, 180);
};
window.editTemplate = id => openTemplateForm(templates.find(x => x.id === id));
window.deleteTemplate = id => { if (!confirm('この定型文を削除しますか？')) return; templates = templates.filter(x => x.id !== id); saveTemplates(); renderTemplates(); toast('削除しました'); };
templateForm.addEventListener('submit', e => {
  e.preventDefault();
  const id = $('templateEditId').value;
  const item = {id: id || crypto.randomUUID(), category:$('templateCategoryInput').value.trim() || 'その他', audience:$('templateAudienceInput').value, subject:$('templateSubjectInput').value.trim(), body:$('templateBodyInput').value, memo:$('templateMemoInput').value.trim(), order:Number($('templateOrderInput').value || 0), active:$('templateActiveInput').checked, updatedAt:new Date().toISOString()};
  templates = id ? templates.map(x => x.id === id ? item : x) : [...templates, item];
  saveTemplates(); templateDialog.close(); renderTemplates(); toast('保存しました');
});
$('addTemplateBtn').addEventListener('click', () => openTemplateForm());
$('closeTemplateDialog').addEventListener('click', () => templateDialog.close());
templateSearch.addEventListener('input', renderTemplates);
templateCategoryFilter.addEventListener('change', renderTemplates);
templateAudienceFilter.addEventListener('change', renderTemplates);

// Document storage management
const docGrid = $('docGrid');
const docSearch = $('docSearch');
const docCategoryFilter = $('docCategoryFilter');
const docStatusFilter = $('docStatusFilter');
const docCategoryTabs = $('docCategoryTabs');
const docDialog = $('docDialog');
const docForm = $('docForm');
const docViewerDialog = $('docViewerDialog');
const fixedDocCategories = ['社内資料', '社内検証', '自社取説', '自社仕様図', '他社取説', '他社仕様図', '電源盤図', 'その他'];
function docCategories() {
  return ['すべて', ...fixedDocCategories];
}
function setupDocCategoryInput(item) {
  const select = $('docCategoryInput');
  if (!select) return;
  const current = String(item?.category || '').trim();
  const isFixed = fixedDocCategories.includes(current);
  const options = [];
  if (item && current && !isFixed) {
    options.push(`<option value="" selected disabled>旧カテゴリ：${escapeHtml(current)}（新しい分類を選択）</option>`);
  }
  options.push(...fixedDocCategories.map(category => `<option value="${escapeAttr(category)}"${(isFixed ? current === category : (!item && category === '社内資料')) ? ' selected' : ''}>${escapeHtml(category)}</option>`));
  select.innerHTML = options.join('');
  select.required = true;
}
function docCategoryCount(category) {
  return documents.filter(x => x.active && (category === 'すべて' || x.category === category)).length;
}
function setDocCategoryFilter(category) {
  if (!docCategoryFilter) return;
  docCategoryFilter.value = category || 'すべて';
  renderDocs();
}
function renderDocCategoryTabs(categories, current) {
  if (!docCategoryTabs) return;
  docCategoryTabs.innerHTML = categories.map(category => {
    const count = docCategoryCount(category);
    return `<button class="competitor-type-tab ${current === category ? 'active' : ''}" type="button" data-doc-category="${escapeAttr(category)}">${escapeHtml(category)}（${count}）</button>`;
  }).join('');
  docCategoryTabs.querySelectorAll('[data-doc-category]').forEach(btn => {
    btn.addEventListener('click', () => setDocCategoryFilter(btn.dataset.docCategory || 'すべて'));
  });
}
function renderDocFilters() {
  const categories = docCategories();
  const current = categories.includes(docCategoryFilter.value) ? docCategoryFilter.value : 'すべて';
  docCategoryFilter.innerHTML = categories.map(c => `<option ${c===current?'selected':''}>${escapeHtml(c)}</option>`).join('');
  docCategoryFilter.value = current;
  renderDocCategoryTabs(categories, current);
}
let activeDocObjectUrl = '';
function revokeActiveDocObjectUrl() {
  if (!activeDocObjectUrl) return;
  try { URL.revokeObjectURL(activeDocObjectUrl); } catch (_) {}
  activeDocObjectUrl = '';
}
function dataUrlToBlob(dataUrl) {
  const source = String(dataUrl || '');
  const match = source.match(/^data:([^;,]+)?(;base64)?,(.*)$/s);
  if (!match) return null;
  const mime = match[1] || 'application/octet-stream';
  const isBase64 = Boolean(match[2]);
  const payload = match[3] || '';
  try {
    const binary = isBase64 ? atob(payload) : decodeURIComponent(payload);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return new Blob([bytes], {type: mime});
  } catch (_) {
    return null;
  }
}
function getDocAbsoluteUrl(item, {forViewer=false} = {}) {
  if (item?.attachmentDataUrl) {
    if (!forViewer) return item.attachmentDataUrl;
    revokeActiveDocObjectUrl();
    const blob = dataUrlToBlob(item.attachmentDataUrl);
    if (!blob) return item.attachmentDataUrl;
    activeDocObjectUrl = URL.createObjectURL(blob);
    return activeDocObjectUrl;
  }
  if (!item?.url) return '';
  try { return new URL(item.url, window.location.href).href; } catch (error) { return item.url || ''; }
}

function getDocGuideText(item, mode='メール') {
  const url = getDocAbsoluteUrl(item);
  const title = item?.title || '資料';
  const category = item?.category ? `（${item.category}）` : '';
  if (mode === 'SMS') {
    return `資料をご確認ください。\n${title}${category}\n${url}`;
  }
  return `お世話になっております。\n\n下記資料をご確認ください。\n\n${title}${category}\n${url}\n\nよろしくお願いいたします。`;
}
function openDocSms(id) {
  const item = documents.find(x => x.id === id);
  if (!item) return;
  const body = getDocGuideText(item, 'SMS');
  window.location.href = `sms:?&body=${encodeURIComponent(body)}`;
}
function openDocMail(id) {
  const item = documents.find(x => x.id === id);
  if (!item) return;
  const subject = `資料送付：${item.title || '資料'}`;
  const body = getDocGuideText(item, 'メール');
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
function copyDocGuideText(id, mode='メール') {
  const item = documents.find(x => x.id === id);
  if (!item) return;
  copyText(getDocGuideText(item, mode), mode === 'SMS' ? 'SMS文面' : 'メール文面');
}
function isDocDisplayReady(x) {
  return Boolean((x?.url || '').trim() || (x?.sharePath || '').trim() || x?.attachmentDataUrl);
}

function getDocFileMeta(item) {
  const sourceName = String(item?.attachmentFileName || item?.url || '').split(/[?#]/)[0];
  const match = sourceName.match(/(\.[a-z0-9]{1,8})$/i);
  const ext = match ? match[1].toLowerCase() : '';
  const storage = String(item?.storageType || '').toLowerCase();
  const isPdf = ext === '.pdf' || storage.includes('pdf');
  const isExcel = ['.xlsx', '.xls', '.xlsm', '.csv'].includes(ext) || /excel|spreadsheet/.test(storage);
  return { sourceName, ext: ext || (isPdf ? '.pdf' : isExcel ? '.xlsx' : ''), isPdf, isExcel };
}
function getDocDownloadName(item) {
  const meta = getDocFileMeta(item);
  const ext = meta.ext || '.bin';
  return item?.title ? `${item.title}${ext}`.replace(/[\/:*?"<>|]/g, '_') : `資料${ext}`;
}
function openDocViewer(id) {
  const item = documents.find(x => x.id === id);
  if (!item) return;
  const url = getDocAbsoluteUrl(item, { forViewer: true });
  if (!url) {
    alert('資料URLまたは添付ファイルが設定されていません。');
    return;
  }

  // 1回の操作で新しいタブを1つだけ開く。
  // window.open() と予備リンクを併用すると、noopener環境で戻り値が null になり、
  // すでに開いた後に予備リンクも実行されて2タブになるため、リンク方式へ統一する。
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `${item.title || '資料'}を新しいタブで開く`);
  document.body.appendChild(link);
  link.click();
  link.remove();
}
window.openDocViewer = openDocViewer;

function renderDocActions(x) {
  const id = escapeAttr(x.id);
  const resolvedUrl = getDocAbsoluteUrl(x);
  const url = resolvedUrl ? escapeAttr(resolvedUrl) : '';
  const downloadName = getDocDownloadName(x);
  const openButtons = resolvedUrl
    ? `<button class="primary" type="button" onclick="openDocViewer('${id}')">資料を開く</button><a class="secondary doc-download" href="${url}" download="${escapeAttr(downloadName)}">DL/保存</a><button class="secondary" type="button" onclick="openDocSms('${id}')">SMS送信</button><button class="secondary" type="button" onclick="openDocMail('${id}')">メール送信</button><button class="ghost" type="button" onclick="copyDocGuideText('${id}','SMS')">SMS文面</button><button class="ghost" type="button" onclick="copyDocGuideText('${id}','メール')">メール文面</button>`
    : `<button class="ghost" disabled>URL未設定</button>`;
  const shareButtons = x.sharePath
    ? `<button class="secondary" type="button" onclick="copyDocPath('${id}')">パスコピー</button><button class="secondary doc-explorer-copy" type="button" onclick="copyDocExplorerCommand('${id}')">Explorerコマンドコピー</button><button class="ghost" type="button" onclick="openDocExplorerGuide('${id}')">開き方ガイド</button>`
    : '';
  return `${openButtons}${shareButtons}<button class="ghost" type="button" onclick="editDoc('${id}')">編集</button><button class="danger" type="button" onclick="deleteDoc('${id}')">削除</button>`;
}
function renderDocs() {
  renderDocFilters();
  const q = docSearch.value.trim().toLowerCase();
  const cat = docCategoryFilter.value || 'すべて';
  const status = docStatusFilter.value || 'すべて';
  const rows = documents.filter(x => x.active)
    .filter(isDocDisplayReady)
    .filter(x => cat === 'すべて' || x.category === cat)
    .filter(x => status === 'すべて' || x.status === status)
    .filter(x => [x.title,x.category,x.summary,x.storageType,x.url,x.attachmentFileName,x.sharePath,x.owner,x.confidentiality,x.status].join(' ').toLowerCase().includes(q))
    .sort((a,b) => (a.order||0) - (b.order||0));
  docGrid.innerHTML = rows.map(x => `<article class="card doc-card"><div class="badge-row"><span class="badge">${escapeHtml(x.category)}</span><span class="badge audience">${escapeHtml(x.confidentiality || '社内用')}</span></div><h3>${escapeHtml(x.title)}</h3><p>${escapeHtml(x.summary || '概要未設定')}</p><p class="memo">保管種別：${escapeHtml(x.storageType || '未設定')} / 状態：${escapeHtml(x.status || '未設定')}</p><p class="memo">管理者：${escapeHtml(x.owner || '未設定')} / 更新：${escapeHtml(formatDate(x.updatedAt))}</p>${x.attachmentDataUrl?'<div class="status">添付ファイルあり・共有保存</div>':(x.url?'<div class="status">資料URLあり・スマホDL対応</div>':'')}${x.sharePath?'<div class="status path-link">共有フォルダパスあり</div>':''}<div class="card-actions doc-actions">${renderDocActions(x)}</div></article>`).join('') || '<p>該当する資料がありません。</p>';
}
function openDocForm(item) {
  $('docDialogTitle').textContent = item ? '資料を編集' : '資料を追加';
  $('docEditId').value = item?.id || '';
  $('docTitleInput').value = item?.title || '';
  setupDocCategoryInput(item);
  $('docSummaryInput').value = item?.summary || '';
  $('docStorageTypeInput').value = item?.storageType || 'LINE WORKS';
  $('docStatusInput').value = item?.status || '有効';
  $('docUrlInput').value = item?.url || '';
  $('docPdfInput').value = '';
  $('docPdfRemoveInput').checked = false;
  $('docPdfStatus').textContent = item?.attachmentFileName ? `登録済み：${item.attachmentFileName}` : '未選択';
  $('docSharePathInput').value = item?.sharePath || '';
  $('docOwnerInput').value = item?.owner || '';
  $('docConfidentialityInput').value = item?.confidentiality || '社内用';
  $('docOrderInput').value = item?.order || 0;
  $('docActiveInput').checked = item?.active ?? true;
  docDialog.showModal();
}
window.copyDocPath = id => { const item = documents.find(x => x.id === id); if (item?.sharePath) copyText(item.sharePath, '資料保管パス'); };
window.copyDocExplorerCommand = id => { const item = documents.find(x => x.id === id); if (item?.sharePath) copyExplorerPath(item.sharePath, 'Explorerコマンド'); };
window.openDocExplorerGuide = id => { const item = documents.find(x => x.id === id); if (item?.sharePath) openExplorerGuide(getNewsDisplayTitle(item), item.sharePath); };
window.editDoc = id => openDocForm(documents.find(x => x.id === id));
window.deleteDoc = id => { if (!confirm('この資料登録を削除しますか？')) return; documents = documents.filter(x => x.id !== id); saveDocs(); renderDocs(); toast('削除しました'); };
function readAttachmentAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('添付ファイルを読み込めませんでした。'));
    reader.readAsDataURL(file);
  });
}
$('docPdfInput')?.addEventListener('change', () => {
  const file = $('docPdfInput').files?.[0];
  $('docPdfStatus').textContent = file ? `選択中：${file.name}（${Math.ceil(file.size / 1024)}KB）` : '未選択';
});
docForm.addEventListener('submit', async e => {
  e.preventDefault();
  const id = $('docEditId').value;
  const current = id ? documents.find(x => x.id === id) : null;
  const pdfFile = $('docPdfInput').files?.[0] || null;
  let attachmentDataUrl = $('docPdfRemoveInput').checked ? '' : (current?.attachmentDataUrl || '');
  let attachmentFileName = $('docPdfRemoveInput').checked ? '' : (current?.attachmentFileName || '');
  if (pdfFile) {
    if (!(/\.(pdf|xlsx|xls)$/i.test(pdfFile.name) || ['application/pdf','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.ms-excel'].includes(pdfFile.type))) {
      alert('PDFまたはExcelファイルを選択してください。');
      return;
    }
    if (pdfFile.size > 1024 * 1024) {
      alert('添付ファイルは1MBまでです。大きい資料は共有フォルダまたはURLを登録してください。');
      return;
    }
    try {
      attachmentDataUrl = await readAttachmentAsDataUrl(pdfFile);
      attachmentFileName = pdfFile.name;
    } catch (error) {
      alert(error?.message || '添付ファイルを読み込めませんでした。');
      return;
    }
  }
  const item = {id: id || crypto.randomUUID(), title:$('docTitleInput').value.trim(), category:$('docCategoryInput').value, summary:$('docSummaryInput').value.trim(), storageType:attachmentDataUrl ? (/\.(xlsx|xls)$/i.test(attachmentFileName) ? 'Excel添付' : 'PDF添付') : $('docStorageTypeInput').value, status:$('docStatusInput').value, url:$('docUrlInput').value.trim(), attachmentDataUrl, attachmentFileName, sharePath:$('docSharePathInput').value.trim(), owner:$('docOwnerInput').value.trim(), confidentiality:$('docConfidentialityInput').value, order:Number($('docOrderInput').value || 0), active:$('docActiveInput').checked, updatedAt:new Date().toISOString()};
  if (!item.url && !item.sharePath && !item.attachmentDataUrl) {
    alert('資料URL、共有フォルダパス、添付ファイルのいずれかを設定してください。');
    return;
  }
  documents = id ? documents.map(x => x.id === id ? item : x) : [...documents, item];
  try {
    saveDocs();
  } catch (error) {
    alert('保存容量を超えました。添付ファイルを小さくするか、URL・共有フォルダを使用してください。');
    return;
  }
  docDialog.close(); renderDocs(); toast('保存しました');
});
$('addDocBtn').addEventListener('click', () => openDocForm());
$('closeDocDialog').addEventListener('click', () => docDialog.close());
function closeDocViewer() {
  docViewerDialog?.close();
  revokeActiveDocObjectUrl();
}
$('closeDocViewerDialog')?.addEventListener('click', closeDocViewer);
$('closeDocViewerDialogBottom')?.addEventListener('click', closeDocViewer);
docViewerDialog?.addEventListener('click', event => { if (event.target === docViewerDialog) closeDocViewer(); });
docViewerDialog?.addEventListener('close', revokeActiveDocObjectUrl);
$('closeGuideDialog').addEventListener('click', () => $('guideDialog').close());
docSearch.addEventListener('input', renderDocs);
docCategoryFilter.addEventListener('change', renderDocs);
docStatusFilter.addEventListener('change', renderDocs);



// Catalog storage management
const catalogGrid = $('catalogGrid');
const catalogSearch = $('catalogSearch');
const catalogCategoryFilter = $('catalogCategoryFilter');
const catalogTypeTabs = Array.from(document.querySelectorAll('.catalog-type-tab'));
let catalogTypeFilter = 'すべて';
const catalogDialog = $('catalogDialog');
const catalogForm = $('catalogForm');
function normalizeCatalogText(value) {
  return String(value || '')
    .normalize('NFKC')
    .replace(/[ぁ-ん]/g, ch => String.fromCharCode(ch.charCodeAt(0) + 0x60))
    .replace(/\s+/g, '')
    .toLowerCase();
}
function catalogTypeFor(item) {
  const explicit = item.catalogType || '';
  if (explicit === '建築' || explicit === 'サイン') return explicit;
  const company = item.company || '';
  const memo = item.memo || '';
  const buildingMakers = ['DNライティング', 'テスライティング', 'FKK', 'FEELUX', 'ルーチ', 'エイテックス', 'ネオストラクト'];
  if (buildingMakers.some(name => company.includes(name)) || company.includes('建築') || memo.includes('建築')) return '建築';
  return 'サイン';
}
function catalogCategories() { return ['すべて', ...Array.from(new Set(catalogs.map(x => x.category).filter(Boolean))).sort((a,b)=>a.localeCompare(b,'ja'))]; }
function renderCatalogFilters() {
  if (!catalogCategoryFilter) return;
  const current = catalogCategoryFilter.value || 'すべて';
  catalogCategoryFilter.innerHTML = catalogCategories().map(c => `<option ${c===current?'selected':''}>${escapeHtml(c)}</option>`).join('');
}
function catalogSearchText(item) {
  return normalizeCatalogText([item.company, item.category, catalogTypeFor(item), item.memo, item.url, item.manufacturerUrl, item.alias].join(' '));
}
function catalogSortKey(item) {
  const selfRank = (item.category || '').includes('自社') || (item.company || '').includes('アリスト') ? '0' : '1';
  return `${selfRank}-${normalizeCatalogText(item.company || '')}`;
}
function ensureCatalogTypeInput() {
  const form = $('catalogForm');
  if (!form || $('catalogTypeInput')) return;
  const categoryInput = $('catalogCategoryInput');
  const anchor = categoryInput ? categoryInput.closest('label') : null;
  const label = document.createElement('label');
  label.textContent = '種別アイコン';
  const select = document.createElement('select');
  select.id = 'catalogTypeInput';
  select.innerHTML = '<option value="サイン">サイン</option><option value="建築">建築</option>';
  label.appendChild(select);
  if (anchor && anchor.parentNode) anchor.insertAdjacentElement('afterend', label);
  else form.insertBefore(label, form.querySelector('.dialog-actions'));
}

function catalogIconFor(item) {
  const company = item.company || '';
  if (company.includes('アリスト')) return 'AJ';
  if (company.includes('DN')) return 'DN';
  if (company.includes('テス')) return 'TS';
  if (company.includes('FKK')) return 'FK';
  if (company.includes('FEELUX')) return 'FX';
  if (company.includes('ルーチ')) return 'LC';
  if (company.includes('エイテックス')) return 'AT';
  if (company.includes('ネオ')) return 'NS';
  if (company.includes('ニッケン')) return 'NH';
  if (company.includes('ファースト')) return 'FS';
  if (company.includes('AP')) return 'AP';
  if (company.includes('三和')) return 'SW';
  if (company.includes('グロー')) return 'LG';
  if (company.includes('レベリック')) return 'LV';
  return '📘';
}
function renderCatalogs() {
  if (!catalogGrid) return;
  renderCatalogFilters();
  const q = normalizeCatalogText(catalogSearch.value || '');
  const category = catalogCategoryFilter.value || 'すべて';
  const rows = catalogs.filter(x => x.active)
    .filter(x => category === 'すべて' || x.category === category)
    .filter(x => catalogTypeFilter === 'すべて' || catalogTypeFor(x) === catalogTypeFilter)
    .filter(x => !q || catalogSearchText(x).includes(q))
    .sort((a,b) => {
      const rank = catalogSortKey(a).localeCompare(catalogSortKey(b), 'ja', {numeric:true});
      if (rank !== 0) return rank;
      return Number(a.order || 0) - Number(b.order || 0);
    });
  catalogGrid.innerHTML = rows.map(x => {
    const kind = catalogTypeFor(x);
    return `<article class="card catalog-card"><div class="card-title-row"><span class="card-icon catalog-icon" aria-hidden="true">${escapeHtml(catalogIconFor(x))}</span><div class="card-title-content"><div class="badge-row"><span class="badge">${escapeHtml(x.category || 'カタログ')}</span><span class="badge catalog-kind ${kind === '建築' ? 'building' : 'sign'}">${escapeHtml(kind)}</span></div><h3>${escapeHtml(x.company || '会社名未設定')}</h3></div></div><p>${escapeHtml(x.memo || 'カタログURLを登録しています。')}</p><div class="catalog-link-previews"><p class="catalog-url-preview"><strong>カタログ</strong>${escapeHtml(x.url || 'URL未設定')}</p><p class="catalog-url-preview"><strong>メーカー</strong>${escapeHtml(x.manufacturerUrl || 'URL未設定')}</p></div><div class="card-actions">${x.url?`<a class="primary" href="${escapeAttr(x.url)}" target="_blank" rel="noreferrer">カタログ</a><button class="ghost" onclick="copyCatalogUrl('${x.id}')">カタログURLコピー</button>`:`<button class="ghost" disabled>カタログ未設定</button>`}${x.manufacturerUrl?`<a class="ghost" href="${escapeAttr(x.manufacturerUrl)}" target="_blank" rel="noreferrer">メーカー</a><button class="ghost" onclick="copyManufacturerUrl('${x.id}')">メーカーURLコピー</button>`:''}<button class="ghost" onclick="editCatalog('${x.id}')">編集</button><button class="danger" onclick="deleteCatalog('${x.id}')">削除</button></div></article>`;
  }).join('') || '<p class="empty-message">該当するカタログがありません。</p>';
}
function openCatalogForm(item) {
  ensureCatalogTypeInput();
  $('catalogDialogTitle').textContent = item ? 'カタログを編集' : 'カタログを追加';
  $('catalogEditId').value = item?.id || '';
  $('catalogCompanyInput').value = item?.company || '';
  $('catalogCategoryInput').value = item?.category || '他社カタログ';
  if ($('catalogTypeInput')) $('catalogTypeInput').value = catalogTypeFor(item || {catalogType:'サイン'});
  $('catalogUrlInput').value = item?.url || '';
  $('catalogManufacturerUrlInput').value = item?.manufacturerUrl || '';
  $('catalogMemoInput').value = item?.memo || '';
  $('catalogOrderInput').value = item?.order || 0;
  $('catalogActiveInput').checked = item?.active ?? true;
  catalogDialog.showModal();
}
window.copyCatalogUrl = id => { const item = catalogs.find(x => x.id === id); if (item?.url) copyText(item.url, 'カタログURL'); };
window.copyManufacturerUrl = id => { const item = catalogs.find(x => x.id === id); if (item?.manufacturerUrl) copyText(item.manufacturerUrl, 'メーカーURL'); };
window.editCatalog = id => openCatalogForm(catalogs.find(x => x.id === id));
window.deleteCatalog = id => { if (!confirm('このカタログ登録を削除しますか？')) return; catalogs = catalogs.filter(x => x.id !== id); saveCatalogs(); renderCatalogs(); toast('削除しました'); };
if (catalogForm) catalogForm.addEventListener('submit', e => {
  e.preventDefault();
  const id = $('catalogEditId').value;
  ensureCatalogTypeInput();
  const item = {id: id || crypto.randomUUID(), company:$('catalogCompanyInput').value.trim(), category:$('catalogCategoryInput').value.trim() || 'カタログ', url:$('catalogUrlInput').value.trim(), manufacturerUrl:$('catalogManufacturerUrlInput').value.trim(), memo:$('catalogMemoInput').value.trim(), order:Number($('catalogOrderInput').value || 0), active:$('catalogActiveInput').checked, catalogType: ($('catalogTypeInput')?.value || catalogTypeFor({company:$('catalogCompanyInput').value.trim(), memo:$('catalogMemoInput').value.trim()})), updatedAt:new Date().toISOString()};
  catalogs = id ? catalogs.map(x => x.id === id ? item : x) : [...catalogs, item];
  saveCatalogs(); catalogDialog.close(); renderCatalogs(); toast('保存しました');
});
ensureCatalogTypeInput();
if ($('addCatalogBtn')) $('addCatalogBtn').addEventListener('click', () => openCatalogForm());
if ($('closeCatalogDialog')) $('closeCatalogDialog').addEventListener('click', () => catalogDialog.close());
if (catalogSearch) catalogSearch.addEventListener('input', renderCatalogs);
if (catalogCategoryFilter) catalogCategoryFilter.addEventListener('change', renderCatalogs);
if (catalogTypeTabs.length) catalogTypeTabs.forEach(btn => btn.addEventListener('click', () => {
  catalogTypeFilter = btn.dataset.catalogType || 'すべて';
  catalogTypeTabs.forEach(x => x.classList.toggle('active', x === btn));
  renderCatalogs();
}));



// Competitor manufacturer / product navigation
const selfProductPanel = $('selfProductPanel');
const selfProductSearch = $('selfProductSearch');
const competitorMakerGrid = $('competitorMakerGrid');
const competitorProductPanel = $('competitorProductPanel');
const competitorSearch = $('competitorSearch');
const competitorTypeTabs = Array.from(document.querySelectorAll('.competitor-type-tab'));
let competitorTypeFilter = 'すべて';
let selectedCompetitorMakerId = '';
function productKanaAliasText(value='') {
  const base = String(value || '');
  const pairs = [
    ['StarLite', 'スターライト'], ['Starlite', 'スターライト'], ['star lite', 'スターライト'], ['star', 'スター'],
    ['PentaWide', 'ペンタワイド'], ['PentaLite', 'ペンタライト'], ['DuoSlim', 'デュオスリム'], ['MonoMini', 'モノミニ'],
    ['FlatStick', 'フラットスティック'], ['SeamlessBeam', 'シームレスビーム'], ['GlowTube', 'グローチューブ'], ['GlowBeam', 'グロービーム'],
    ['FloodLight', 'フラッドライト'], ['LUFAS', 'ルーファス'], ['OSRAM', 'オスラム'], ['JIMBO', '神保'], ['MOONS', 'ムーンズ']
  ];
  const extras = [];
  pairs.forEach(([from, to]) => {
    if (base.toLowerCase().includes(from.toLowerCase()) || base.includes(to)) extras.push(to, from);
  });
  return [base, ...extras].join(' ');
}
function competitorSearchTextMaker(maker) {
  const products = competitorProducts.filter(p => p.makerId === maker.id);
  return normalizeCatalogText([productKanaAliasText([maker.name, maker.type, maker.company, maker.memo, maker.siteUrl, maker.catalogUrl, maker.alias, maker.icon].join(' ')), ...products.flatMap(p => [productKanaAliasText(p.series), productKanaAliasText(p.name), p.type, p.use, p.detail, productKanaAliasText(p.alias)])].join(' '));
}
function competitorSearchTextProduct(product) {
  const prices = competitorPrices.filter(x => x.productId === product.id).flatMap(x => [x.customerRank, x.channel, x.price, x.registeredAt, x.memo]);
  return normalizeCatalogText([productKanaAliasText(product.series), productKanaAliasText(product.name), product.type, product.use, product.detail, productKanaAliasText(product.alias), ...prices].join(' '));
}

function competitorMakerIconFor(maker) {
  if (maker?.icon) return maker.icon;
  const name = maker?.name || maker?.company || '';
  if (name.includes('ファースト')) return 'FS';
  if (name.includes('タテヤマ')) return 'TA';
  if (name.includes('ニッケン')) return 'NH';
  if (name.includes('AP')) return 'AP';
  if (name.includes('三和')) return 'SW';
  if (name.includes('アリスト')) return '自社';
  return (name || '他社').slice(0, 2).toUpperCase();
}

function competitorProductsForMaker(makerId, q='') {
  return competitorProducts
    .filter(p => p.active && p.makerId === makerId)
    .filter(p => !q || competitorSearchTextProduct(p).includes(q))
    .sort((a,b) => Number(a.order || 0) - Number(b.order || 0));
}
function renderSelfProducts() {
  if (!selfProductPanel) return;
  const maker = competitorMakers.find(x => x.id === 'aristo-self' || x.type === '自社');
  if (!maker) {
    selfProductPanel.innerHTML = '<p class="empty-message">アリストジャパンの製品情報が読み込めませんでした。</p>';
    return;
  }
  const q = normalizeCatalogText(selfProductSearch?.value || '');
  const products = competitorProductsForMaker(maker.id, q).filter(product => isSelfProduct(product));
  const grouped = products.reduce((acc, product) => {
    const key = product.series || 'その他';
    if (!acc[key]) acc[key] = [];
    acc[key].push(product);
    return acc;
  }, {});
  selfProductPanel.innerHTML = `<div class="competitor-panel-head"><div><div class="badge-row"><span class="badge catalog-kind self">自社</span><span class="badge">${products.length}件</span></div><h3>${escapeHtml(maker.name)}</h3><p>${escapeHtml(maker.memo || '')}</p></div><div class="card-actions compact-actions"><a class="primary" href="${escapeAttr(maker.catalogUrl || '#')}" target="_blank" rel="noreferrer">カタログ</a><a class="ghost" href="${escapeAttr(maker.siteUrl || '#')}" target="_blank" rel="noreferrer">公式サイト</a></div></div>${Object.entries(grouped).map(([series, rows]) => `<section class="competitor-series"><h4>${escapeHtml(series)}</h4><div class="competitor-product-list">${rows.map(product => renderCompetitorProductCard(product)).join('')}</div></section>`).join('') || '<p class="empty-message">該当する製品がありません。</p>'}`;
}

function renderCompetitors() {
  if (!competitorMakerGrid) return;
  const q = normalizeCatalogText(competitorSearch?.value || '');
  const makers = competitorMakers
    .filter(x => x.active)
    .filter(x => x.id !== 'aristo-self' && x.type !== '自社')
    .filter(x => competitorTypeFilter === 'すべて' || x.type === competitorTypeFilter)
    .filter(x => !q || competitorSearchTextMaker(x).includes(q))
    .sort((a,b) => Number(a.order || 0) - Number(b.order || 0));
  competitorMakerGrid.innerHTML = makers.map(maker => {
    const productCount = competitorProductsForMaker(maker.id).length;
    return `<button class="card competitor-maker-card ${selectedCompetitorMakerId === maker.id ? 'selected' : ''}" type="button" onclick="selectCompetitorMaker('${escapeAttr(maker.id)}')"><div class="card-title-row"><span class="card-icon catalog-icon" aria-hidden="true">${escapeHtml(competitorMakerIconFor(maker))}</span><div class="card-title-content"><div class="badge-row"><span class="badge catalog-kind ${maker.type === '建築' ? 'building' : maker.type === '自社' ? 'self' : 'sign'}">${escapeHtml(maker.type || '他社')}</span><span class="badge">${productCount}件</span></div><h3>${escapeHtml(maker.name)}</h3></div></div><p>${escapeHtml(maker.memo || '')}</p><div class="catalog-link-previews"><p class="catalog-url-preview"><strong>カタログ</strong>${escapeHtml(maker.catalogUrl || 'URL未設定')}</p></div></button>`;
  }).join('') || '<p class="empty-message">該当するメーカーがありません。</p>';
  renderCompetitorProducts();
}
function renderCompetitorProducts() {
  if (!competitorProductPanel) return;
  const maker = competitorMakers.find(x => x.id === selectedCompetitorMakerId);
  if (!maker) {
    competitorProductPanel.classList.add('hidden');
    competitorProductPanel.innerHTML = '';
    return;
  }
  const q = normalizeCatalogText(competitorSearch?.value || '');
  const products = competitorProductsForMaker(maker.id, q);
  const grouped = products.reduce((acc, product) => {
    const key = product.series || 'その他';
    if (!acc[key]) acc[key] = [];
    acc[key].push(product);
    return acc;
  }, {});
  competitorProductPanel.classList.remove('hidden');
  competitorProductPanel.innerHTML = `<div class="competitor-panel-head"><div><button class="ghost small-action" type="button" onclick="clearCompetitorMaker()">← メーカー一覧</button><h3>${escapeHtml(maker.name)} <span>${escapeHtml(maker.type)}</span></h3><p>${escapeHtml(maker.memo || '')}</p></div><div class="card-actions compact-actions"><a class="primary" href="${escapeAttr(maker.catalogUrl || '#')}" target="_blank" rel="noreferrer">カタログ</a><a class="ghost" href="${escapeAttr(maker.siteUrl || '#')}" target="_blank" rel="noreferrer">メーカー</a></div></div>${Object.entries(grouped).map(([series, rows]) => `<section class="competitor-series"><h4>${escapeHtml(series)}</h4><div class="competitor-product-list">${rows.map(product => renderCompetitorProductCard(product)).join('')}</div></section>`).join('') || '<p class="empty-message">該当する製品がありません。</p>'}`;
}
function competitorPricesForProduct(productId) {
  return competitorPrices
    .filter(x => x.productId === productId)
    .sort((a,b) => String(b.registeredAt || '').localeCompare(String(a.registeredAt || '')) || Number(b.createdAtMs || 0) - Number(a.createdAtMs || 0));
}
function formatCompetitorPrice(value) {
  const raw = String(value ?? '').trim();
  if (!raw) return '価格未確認';
  const num = Number(raw.replace(/[^0-9.-]/g, ''));
  if (!Number.isFinite(num) || num <= 0) return '価格未確認';
  return `¥${num.toLocaleString('ja-JP')}`;
}
function todayIsoDate() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
const ARISTO_SPEC_DOWNLOAD_URL = 'https://www.aristo-japan.co.jp/download';

function competitorProductBadges(product) {
  const rawItems = [product.type || '仕様未設定', product.use || '用途未設定'];
  const items = rawItems.flatMap(item => String(item || '')
    .split(/[／/・,、]+/)
    .map(x => x.trim())
    .filter(Boolean));
  const unique = [...new Set(items)].slice(0, 6);
  return unique.map(item => `<span class="badge">${escapeHtml(item)}</span>`).join('');
}

function isSelfProduct(product) {
  const maker = competitorMakers.find(x => x.id === product?.makerId);
  return Boolean(product?.selfProduct || maker?.type === '自社');
}
function parseSelfSpec(product) {
  return String(product?.spec || '').split('|').map(row => {
    const [label, ...rest] = row.split(':');
    return {label: (label || '').trim(), value: rest.join(':').trim()};
  }).filter(x => x.label || x.value);
}
function selfProductMailBody(product) {
  const url = product.catalogPdf ? new URL(product.catalogPdf, location.href).href : '';
  const specUrl = product.specDownloadUrl || ARISTO_SPEC_DOWNLOAD_URL;
  return `お世話になっております。\n\nお問い合わせいただきました製品のカタログページをご案内いたします。\n\n製品名：${product.name || ''}\n品番：${product.code || ''}\nカタログページ：${product.catalogPage || ''}\nカタログPDF：${url}\n仕様図ダウンロード：${specUrl}\n\nご確認のほど、よろしくお願いいたします。`;
}
function selfProductSpecText(product) {
  const specs = parseSelfSpec(product).map(x => `${x.label}：${x.value}`).join('\n');
  return `${product.name || ''}\n品番：${product.code || ''}\nカタログページ：${product.catalogPage || ''}\n仕様図ダウンロード：${product.specDownloadUrl || ARISTO_SPEC_DOWNLOAD_URL}\n\n${specs}`.trim();
}
window.copySelfProductSpec = productId => {
  const product = competitorProducts.find(x => x.id === productId);
  if (!product) return;
  copyText(selfProductSpecText(product), '仕様情報');
};
window.copySelfProductMail = productId => {
  const product = competitorProducts.find(x => x.id === productId);
  if (!product) return;
  copyText(selfProductMailBody(product), 'メール文面');
};
window.openSelfProductMail = productId => {
  const product = competitorProducts.find(x => x.id === productId);
  if (!product) return;
  const subject = `カタログページ送付の件：${product.name || ''}`;
  location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(selfProductMailBody(product))}`;
};
function renderSelfProductCard(product) {
  const specs = parseSelfSpec(product);
  return `<article class="competitor-product-card self-product-card"><div class="competitor-product-main"><header class="self-product-heading"><div class="badge-row self-product-meta"><span class="badge self-badge">自社製品情報</span>${product.catalogPage ? `<span class="badge">${escapeHtml(product.catalogPage)}</span>` : ''}</div><h5>${escapeHtml(product.name)}</h5></header>${product.code ? `<p class="product-code">品番：${escapeHtml(product.code)}</p>` : ''}<div class="badge-row competitor-product-badges">${competitorProductBadges(product)}</div><p>${escapeHtml(product.detail || '')}</p><div class="self-spec-grid">${specs.map(x => `<div class="self-spec-row"><strong>${escapeHtml(x.label)}</strong><span>${escapeHtml(x.value)}</span></div>`).join('')}</div><div class="card-actions compact-actions self-product-actions">${product.catalogPdf ? `<a class="primary" href="${escapeAttr(product.catalogPdf)}" target="_blank" rel="noreferrer">製品ページPDF</a>` : ''}<a class="secondary small-action" href="${escapeAttr(product.specDownloadUrl || ARISTO_SPEC_DOWNLOAD_URL)}" target="_blank" rel="noreferrer">仕様図DL</a><button class="ghost small-action" type="button" onclick="copySelfProductSpec('${escapeAttr(product.id)}')">仕様コピー</button><button class="ghost small-action" type="button" onclick="copySelfProductMail('${escapeAttr(product.id)}')">PDF案内文コピー</button></div></div></article>`;
}

function renderCompetitorProductCard(product) {
  if (isSelfProduct(product)) return renderSelfProductCard(product);
  const prices = competitorPricesForProduct(product.id);
  const latest = prices[0];
  const minPrice = prices.reduce((min, row) => {
    const n = Number(String(row.price || '').replace(/[^0-9.-]/g, ''));
    return Number.isFinite(n) && n > 0 ? Math.min(min, n) : min;
  }, Infinity);
  const priceSummary = prices.length
    ? `<div class="competitor-price-summary"><span>価格情報 ${prices.length}件</span>${Number.isFinite(minPrice) ? `<strong>最安 ${formatCompetitorPrice(minPrice)}</strong>` : ''}${latest ? `<span>最新 ${escapeHtml(latest.registeredAt || '-')}</span>` : ''}</div>`
    : '<div class="competitor-price-summary empty">価格情報 未登録</div>';
  const priceRows = prices.length ? `<div class="competitor-price-list">${prices.map(row => `<div class="competitor-price-row"><div><strong>${formatCompetitorPrice(row.price)}</strong><span>ランク${escapeHtml(row.customerRank || '未確認')} / ${escapeHtml(row.channel || '未確認')}</span></div><div><span>${escapeHtml(row.registeredAt || '-')}</span><button type="button" class="ghost mini-action" onclick="deleteCompetitorPrice('${escapeAttr(row.id)}')">削除</button></div>${row.memo ? `<p>${escapeHtml(row.memo)}</p>` : ''}</div>`).join('')}</div>` : '';
  return `<article class="competitor-product-card"><div class="competitor-product-main"><h5>${escapeHtml(product.name)}</h5>${product.code ? `<p class="product-code">品番：${escapeHtml(product.code)}</p>` : ''}${product.listPrice ? `<p class="product-code">カタログ定価：${formatCompetitorPrice(product.listPrice)}（税別）</p>` : ''}<div class="badge-row competitor-product-badges">${competitorProductBadges(product)}</div><p>${escapeHtml(product.detail || '')}</p>${priceSummary}${priceRows}<div class="competitor-price-form"><select id="priceRank-${escapeAttr(product.id)}" aria-label="顧客ランク"><option value="未確認" selected>ランク未確認</option><option value="S">S</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option></select><select id="priceChannel-${escapeAttr(product.id)}" aria-label="商流"><option value="未確認" selected>商流未確認</option><option value="代理店購入">代理店購入</option><option value="直接取引">直接取引</option></select><input id="priceValue-${escapeAttr(product.id)}" type="number" inputmode="numeric" min="0" placeholder="価格（未確認でも可）" aria-label="価格"><input id="priceDate-${escapeAttr(product.id)}" type="date" value="${todayIsoDate()}" aria-label="価格登録日"><input id="priceMemo-${escapeAttr(product.id)}" type="text" placeholder="メモ任意 例：口頭情報・後でランク確認" aria-label="メモ"><button class="primary small-action" type="button" onclick="addCompetitorPrice('${escapeAttr(product.id)}')">価格登録</button></div><p class="form-hint">ランク・商流・価格が未確認でも登録できます。後から分かった情報を追記してください。</p></div>${product.url ? `<a class="ghost small-action" href="${escapeAttr(product.url)}" target="_blank" rel="noreferrer">詳細</a>` : ''}</article>`;
}
window.addCompetitorPrice = productId => {
  const product = competitorProducts.find(x => x.id === productId);
  if (!product) return;
  const rank = $(`priceRank-${productId}`)?.value || '未確認';
  const channel = $(`priceChannel-${productId}`)?.value || '未確認';
  const priceRaw = String($(`priceValue-${productId}`)?.value || '').replace(/[^0-9.-]/g, '');
  const price = priceRaw && Number(priceRaw) > 0 ? Number(priceRaw) : '';
  const registeredAt = $(`priceDate-${productId}`)?.value || todayIsoDate();
  const memo = $(`priceMemo-${productId}`)?.value || '';
  if (!price && rank === '未確認' && channel === '未確認' && !memo.trim()) { toast('価格・ランク・商流・メモのいずれかを入力してください'); return; }
  competitorPrices.unshift({id: crypto.randomUUID(), productId, makerId: product.makerId, productName: product.name, makerName: (competitorMakers.find(x => x.id === product.makerId)?.name || ''), customerRank: rank, channel, price, registeredAt, memo, createdAt: new Date().toISOString(), createdAtMs: Date.now()});
  saveCompetitorPrices();
  renderCompetitors();
  toast(price ? '価格情報を登録しました' : '未確認情報を登録しました');
};
window.deleteCompetitorPrice = id => {
  if (!confirm('この価格情報を削除しますか？')) return;
  competitorPrices = competitorPrices.filter(x => x.id !== id);
  saveCompetitorPrices();
  renderCompetitors();
  toast('価格情報を削除しました');
};
window.selectCompetitorMaker = id => { selectedCompetitorMakerId = id; renderCompetitors(); setTimeout(() => competitorProductPanel?.scrollIntoView({behavior:'smooth', block:'start'}), 50); };
window.clearCompetitorMaker = () => { selectedCompetitorMakerId = ''; renderCompetitors(); };
if (selfProductSearch) selfProductSearch.addEventListener('input', renderSelfProducts);
if (competitorSearch) competitorSearch.addEventListener('input', renderCompetitors);
if (competitorTypeTabs.length) competitorTypeTabs.forEach(btn => btn.addEventListener('click', () => {
  competitorTypeFilter = btn.dataset.competitorType || 'すべて';
  competitorTypeTabs.forEach(x => x.classList.toggle('active', x === btn));
  selectedCompetitorMakerId = '';
  renderCompetitors();
}));

// Daily sales report management
const dailyFileInput = $('dailyFileInput');
const dailyDropZone = $('dailyDropZone');
const dailyPersonFilter = $('dailyPersonFilter');
const dailySortFilter = $('dailySortFilter');
const dailyReportGrid = $('dailyReportGrid');

function dailyNumber(value) {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
  const normalized = String(value ?? '').replace(/,/g, '').replace(/%/g, '').replace(/[\s　]/g, '');
  const n = Number(normalized);
  return Number.isFinite(n) ? n : 0;
}
function formatYen(value) {
  const n = dailyNumber(value);
  return n.toLocaleString('ja-JP');
}
function formatDailyTargetYen(value) {
  const n = Math.max(0, dailyNumber(value));
  return Math.floor(n).toLocaleString('ja-JP');
}
function formatQty(value) {
  const n = dailyNumber(value);
  return n.toLocaleString('ja-JP');
}
function formatRate(value) {
  // 日報内の売上比率・達成率は、0.424=42.4%、1.316=131.6%の比率値で保持する。
  const pct = dailyNumber(value) * 100;
  return `${pct.toFixed(1)}%`;
}
function achievementTone(value) {
  const n = dailyNumber(value) * 100;
  if (n >= 70) return 'high';
  if (n >= 40) return 'mid';
  return 'low';
}
function normalizeDailyBudgetMetrics(report) {
  if (!report || !Array.isArray(report.rows)) return report;
  const normalizeRow = row => {
    if (!row || typeof row !== 'object') return row;
    const sales = dailyNumber(row.sales);
    const budget = dailyNumber(row.budget);
    const budgetAchieved = budget > 0 && sales >= budget;
    return {
      ...row,
      sales,
      budget,
      achievementRate: budget > 0 ? sales / budget : dailyNumber(row.achievementRate),
      monthlyDailyTarget: budgetAchieved ? 0 : Math.max(0, dailyNumber(row.monthlyDailyTarget)),
      budgetAchieved
    };
  };
  const rows = report.rows.map(normalizeRow);
  const summary = report.summary ? normalizeRow(report.summary) : buildDailySummary(rows);
  return {...report, rows, summary};
}
function chooseDailySheet(workbook) {
  return workbook.SheetNames.find(name => name === '営業別') || workbook.SheetNames[1] || workbook.SheetNames[0];
}
function findDailyRow(rows, label) {
  return rows.findIndex(row => row.some(cell => String(cell ?? '').trim() === label));
}
function buildDailySummary(rows) {
  const total = rows.find(row => row.name === '合計');
  return total ? {...total} : null;
}
function parseDailyReport(workbook, fileName='') {
  const sheetName = chooseDailySheet(workbook);
  const ws = workbook.Sheets[sheetName];
  if (!ws) throw new Error('営業別シートが見つかりません');
  const rows = XLSX.utils.sheet_to_json(ws, {header:1, defval:'', raw:true});
  const headerRowIndex = rows.findIndex(row => row.some(cell => String(cell || '').includes('根岸')) && row.some(cell => String(cell || '').includes('合計')));
  const totalRowIndex = findDailyRow(rows, '総計');
  const ratioRowIndex = findDailyRow(rows, '売上比率');
  const budgetRowIndex = findDailyRow(rows, '全体予算');
  const achievementRowIndex = findDailyRow(rows, '達成率');
  const dailyTargetRowIndex = findDailyRow(rows, '月内日割り目標');
  if (headerRowIndex < 0 || totalRowIndex < 0 || budgetRowIndex < 0) throw new Error('営業別集計ブロックを読み取れませんでした');
  const header = rows[headerRowIndex];
  const quantityRow = rows[totalRowIndex];
  const salesRow = rows[totalRowIndex + 1] || [];
  const ratioRow = rows[ratioRowIndex] || [];
  const budgetRow = rows[budgetRowIndex] || [];
  const achievementRow = rows[achievementRowIndex] || [];
  const dailyTargetRow = rows[dailyTargetRowIndex] || [];
  const firstPersonCol = 3;
  const reportRows = [];
  for (let col = firstPersonCol; col < header.length; col += 1) {
    const name = String(header[col] ?? '').trim();
    if (!name) continue;
    const sales = dailyNumber(salesRow[col]);
    const quantity = dailyNumber(quantityRow[col]);
    const budget = dailyNumber(budgetRow[col]);
    const ratio = dailyNumber(ratioRow[col]);
    const achievementFromSheet = dailyNumber(achievementRow[col]);
    const dailyTargetFromSheet = dailyNumber(dailyTargetRow[col]);
    if (!sales && !quantity && !budget && name !== '合計') continue;
    // 達成率はExcel側の表示形式・数式結果に依存させず、売上÷予算で再計算する。
    // 例: 売上41,953,310円 / 予算31,868,000円 = 131.6%。
    const achievement = budget > 0 ? sales / budget : achievementFromSheet;
    const budgetAchieved = budget > 0 && sales >= budget;
    reportRows.push({
      id: `daily-${name.replace(/\s+/g,'-')}`,
      name,
      sales,
      quantity,
      salesRatio: ratio,
      budget,
      achievementRate: achievement,
      monthlyDailyTarget: budgetAchieved ? 0 : Math.max(0, dailyTargetFromSheet),
      budgetAchieved,
      isTotal: name === '合計'
    });
  }
  const now = new Date().toISOString();
  const peopleRows = reportRows.filter(row => !row.isTotal);
  const summary = reportRows.find(row => row.isTotal) || buildDailySummary(peopleRows);
  return {
    rows: peopleRows,
    summary,
    meta: {loadedAt: now, fileName, sheetName, count: peopleRows.length, storage: 'browser-local'}
  };
}
async function readDailyReportExcel(file) {
  if (!window.XLSX) {
    alert('Excel読み込みライブラリを取得できませんでした。インターネット接続を確認してください。');
    return;
  }
  try {
    toast('日報Excelを読み込み中です');
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, {type:'array'});
    dailyReport = parseDailyReport(workbook, file.name);
    saveDailyReportLocal();
    renderDailyReport();
    toast(`${dailyReport.rows.length}名分の日報を読み込みました`);
    if (hasSupabaseConfig()) {
      await saveDailyReportToCloud({silent:true});
      toast('日報を共有保存しました');
    }
  } catch (error) {
    console.error(error);
    alert(`日報Excelの読み込みに失敗しました。\n2枚目「営業別」タブの集計表を確認してください。`);
  }
}
dailyReport = normalizeDailyBudgetMetrics(dailyReport);
saveDailyReportLocal();

function renderDailyReportStatus() {
  if (!$('dailySaveStatus')) return;
  const rows = dailyReport?.rows || [];
  const meta = dailyReport?.meta || {};
  $('dailySaveStatus').textContent = rows.length ? (meta.storage === 'supabase-shared' ? '共有日報を端末に保存済み' : 'この端末に保存済み') : '未保存';
  $('dailyLoadedAt').textContent = meta.loadedAt ? formatDateTime(meta.loadedAt) : '未読込';
  $('dailyFileName').textContent = meta.fileName || '未読込';
  if (hasSupabaseConfig()) {
    updateDailyCloudStatus(meta.cloudSyncedAt ? `共有済み ${formatDateTime(meta.cloudSyncedAt)}` : '接続設定済み', true);
  } else {
    updateDailyCloudStatus('未接続');
  }
}
function renderDailyFilters() {
  if (!dailyPersonFilter) return;
  const current = dailyPersonFilter.value || 'すべて';
  const rows = dailyReport?.rows || [];
  dailyPersonFilter.innerHTML = '<option value="すべて">営業すべて</option>' + rows.map(row => `<option value="${escapeAttr(row.name)}">${escapeHtml(row.name)}</option>`).join('');
  dailyPersonFilter.value = rows.some(row => row.name === current) ? current : 'すべて';
}
function sortedDailyRows(rows) {
  const sort = dailySortFilter?.value || 'sales-desc';
  return [...rows].sort((a,b) => {
    if (sort === 'achievement-desc') return dailyNumber(b.achievementRate) - dailyNumber(a.achievementRate);
    if (sort === 'budget-desc') return dailyNumber(b.budget) - dailyNumber(a.budget);
    if (sort === 'name-asc') return String(a.name).localeCompare(String(b.name), 'ja');
    return dailyNumber(b.sales) - dailyNumber(a.sales);
  });
}
function renderDailySummary() {
  const el = $('dailySummary');
  if (!el) return;
  const summary = dailyReport?.summary;
  if (!summary) {
    el.innerHTML = '<p class="empty-message">まだ日報Excelを読み込んでいません。</p>';
    return;
  }
  el.innerHTML = `<div class="daily-kpi-grid">
    <div><span>全体売上</span><strong>${formatYen(summary.sales)}円</strong></div>
    <div><span>全体予算</span><strong>${formatYen(summary.budget)}円</strong></div>
    <div><span>達成率</span><strong class="daily-rate ${achievementTone(summary.achievementRate)}">${formatRate(summary.achievementRate)}</strong></div>
    <div><span>月内日割り目標</span><strong>${summary.budgetAchieved ? '達成済み' : `${formatDailyTargetYen(summary.monthlyDailyTarget)}円`}</strong></div>
  </div>`;
}
function renderDailyReportRows() {
  if (!dailyReportGrid) return;
  const rows = dailyReport?.rows || [];
  if (!rows.length) {
    dailyReportGrid.innerHTML = '<p class="empty-message">PCで売上日報Excelを読み込むか、共有日報を取得してください。</p>';
    return;
  }
  const selected = dailyPersonFilter?.value || 'すべて';
  const visible = sortedDailyRows(rows.filter(row => selected === 'すべて' || row.name === selected));
  dailyReportGrid.innerHTML = `<div class="daily-table" role="table" aria-label="営業別日報">
    <div class="daily-table-head" role="row">
      <span>営業</span><span>総計</span><span>数量</span><span>売上比率</span><span>予算</span><span>達成率</span><span>月内日割り目標</span>
    </div>
    ${visible.map(row => `<div class="daily-table-row" role="row">
      <span data-label="営業" class="daily-person">${escapeHtml(row.name)}</span>
      <span data-label="総計"><strong>${formatYen(row.sales)}</strong><small>円</small></span>
      <span data-label="数量">${formatQty(row.quantity)}<small>個</small></span>
      <span data-label="売上比率">${formatRate(row.salesRatio)}</span>
      <span data-label="予算">${formatYen(row.budget)}<small>円</small></span>
      <span data-label="達成率"><strong class="daily-rate ${achievementTone(row.achievementRate)}">${formatRate(row.achievementRate)}</strong></span>
      <span data-label="月内日割り目標" class="${row.budgetAchieved ? 'daily-budget-achieved' : ''}">${row.budgetAchieved ? '<strong>達成済み</strong>' : `${formatDailyTargetYen(row.monthlyDailyTarget)}<small>円</small>`}</span>
    </div>`).join('')}
  </div>`;
}
function renderDailyReport() {
  renderDailyReportStatus();
  renderDailyFilters();
  renderDailySummary();
  renderDailyReportRows();
}
function setupDailyReportPanel() {
  if (!dailyFileInput) return;
  dailyFileInput.addEventListener('change', event => {
    const file = event.target.files?.[0];
    if (file) readDailyReportExcel(file);
    event.target.value = '';
  });
  if (dailyDropZone) {
    ['dragenter','dragover'].forEach(name => dailyDropZone.addEventListener(name, event => {
      event.preventDefault();
      dailyDropZone.classList.add('dragging');
    }));
    ['dragleave','drop'].forEach(name => dailyDropZone.addEventListener(name, event => {
      event.preventDefault();
      dailyDropZone.classList.remove('dragging');
    }));
    dailyDropZone.addEventListener('drop', event => {
      const file = event.dataTransfer.files?.[0];
      if (file) readDailyReportExcel(file);
    });
  }
  dailyPersonFilter?.addEventListener('change', renderDailyReportRows);
  dailySortFilter?.addEventListener('change', renderDailyReportRows);
  $('loadCloudDailyBtn')?.addEventListener('click', () => loadDailyReportFromCloud());
  $('saveCloudDailyBtn')?.addEventListener('click', () => saveDailyReportToCloud());
  renderDailyReport();
}

// Inventory search management
const inventoryFolderPath = inventoryFolderPathConst;
const inventoryFileInput = $('inventoryFileInput');
const inventoryDropZone = $('inventoryDropZone');
const inventorySearch = $('inventorySearch');
const inventoryStatusFilter = $('inventoryStatusFilter');
const inventoryProductFilter = $('inventoryProductFilter');
const inventoryProductInitialFilter = $('inventoryProductInitialFilter');
const inventoryColorFilter = $('inventoryColorFilter');
const inventoryGrid = $('inventoryGrid');

function setupInventoryPanel() {
  if (!$('inventoryFolderPath')) return;
  $('inventoryFolderPath').textContent = inventoryFolderPath;
  $('copyInventoryFolderPathBtn').addEventListener('click', () => copyText(inventoryFolderPath, '在庫フォルダパス'));
  $('copyInventoryExplorerBtn').addEventListener('click', () => copyExplorerPath(inventoryFolderPath, '在庫フォルダ用Explorerコマンド'));
  $('inventoryGuideBtn').addEventListener('click', () => openExplorerGuide('在庫フォルダ', inventoryFolderPath));
  inventoryFileInput.addEventListener('change', event => {
    const file = event.target.files?.[0];
    if (file) readInventoryExcel(file);
    event.target.value = '';
  });
  ['dragenter','dragover'].forEach(name => inventoryDropZone.addEventListener(name, event => {
    event.preventDefault();
    inventoryDropZone.classList.add('dragging');
  }));
  ['dragleave','drop'].forEach(name => inventoryDropZone.addEventListener(name, event => {
    event.preventDefault();
    inventoryDropZone.classList.remove('dragging');
  }));
  inventoryDropZone.addEventListener('drop', event => {
    const file = event.dataTransfer.files?.[0];
    if (file) readInventoryExcel(file);
  });
  inventorySearch.addEventListener('input', () => {
    // 品番検索を優先するため、検索入力を使ったら製品プルダウンの絞り込みは自動で解除する。
    // 例：LZAと入力した時に、前回選んだ『DC24V電源 150W』などが残って結果を狭めないようにする。
    resetInventoryProductFilters();
    renderInventoryResults();
  });
  inventoryStatusFilter.addEventListener('change', renderInventoryResults);
  if (inventoryProductInitialFilter) {
    inventoryProductInitialFilter.value = 'すべて';
    inventoryProductInitialFilter.innerHTML = '';
    inventoryProductInitialFilter.hidden = true;
    inventoryProductInitialFilter.style.display = 'none';
  }
  if (inventoryProductFilter) inventoryProductFilter.addEventListener('change', () => {
    renderInventoryColorFilter();
    renderInventoryResults();
  });
  if (inventoryColorFilter) inventoryColorFilter.addEventListener('change', renderInventoryResults);
  $('loadCloudInventoryBtn')?.addEventListener('click', () => loadInventoryFromCloud());
  $('saveCloudInventoryBtn')?.addEventListener('click', () => saveInventoryToCloud());
  $('clearInventoryDataBtn').addEventListener('click', () => {
    if (!confirm('読み込んだ在庫検索データを削除しますか？')) return;
    inventoryRows = [];
    inventoryMeta = {loadedAt:'', fileName:'', count:0, savedAt:''};
    saveInventory();
    renderInventoryStatus();
    renderInventoryResults();
    toast('在庫データを削除しました');
  });
  renderInventoryStatus();
  renderInventoryResults();
}

function renderInventoryStatus() {
  if (!$('inventoryLoadedAt')) return;
  const isSaved = Boolean(inventoryRows.length && inventoryMeta.loadedAt);
  const saveStatusEl = $('inventorySaveStatus');
  if (saveStatusEl) saveStatusEl.textContent = isSaved ? (inventoryMeta.storage === 'supabase-shared' ? '共有在庫を端末に保存済み' : 'この端末に保存済み') : '未保存';
  if (hasSupabaseConfig()) {
    const cloudText = inventoryMeta.cloudSyncedAt ? `共有済み ${new Date(inventoryMeta.cloudSyncedAt).toLocaleString('ja-JP')}` : '接続設定済み';
    updateInventoryCloudStatus(cloudText, true);
  } else {
    updateInventoryCloudStatus('未接続');
  }
  $('inventoryLoadedAt').textContent = inventoryMeta.loadedAt ? new Date(inventoryMeta.loadedAt).toLocaleString('ja-JP') : '未読込';
  $('inventoryFileName').textContent = inventoryMeta.fileName || '未読込';
  $('inventoryCount').textContent = `${inventoryRows.length || 0}件`;
  renderInventoryProductFilter();
  renderInventoryColorFilter();
}

function extractInventoryBaseProductName(name) {
  return String(name || '')
    .split(/[（(]/)[0]
    .replace(/※.*$/, '')
    .replace(/[　\s]+$/g, '')
    .trim();
}


function resetInventoryProductFilters() {
  if (inventoryProductInitialFilter) {
    inventoryProductInitialFilter.value = 'すべて';
    inventoryProductInitialFilter.hidden = true;
    inventoryProductInitialFilter.style.display = 'none';
  }
  if (inventoryProductFilter) inventoryProductFilter.value = 'すべて';
  if (inventoryColorFilter) inventoryColorFilter.value = 'すべて';
}
function renderInventoryProductFilter() {
  if (!inventoryProductFilter) return;
  const current = inventoryProductFilter.value || 'すべて';
  const seen = new Set();
  const allNames = [];
  inventoryRows.forEach(item => {
    const base = item.baseProductName || extractInventoryBaseProductName(item.name);
    if (base && !seen.has(base)) {
      seen.add(base);
      allNames.push(base);
    }
  });
  // Excelメインシートで最初に出てきた順番をそのまま使う。
  // 五十音・ABCの検索補助は使わず、製品名プルダウンだけを表示する。
  if (inventoryProductInitialFilter) {
    inventoryProductInitialFilter.value = 'すべて';
    inventoryProductInitialFilter.innerHTML = '';
    inventoryProductInitialFilter.hidden = true;
    inventoryProductInitialFilter.style.display = 'none';
  }
  const names = allNames;
  inventoryProductFilter.innerHTML = '<option value="すべて">製品名すべて</option>' + names.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
  inventoryProductFilter.value = names.includes(current) ? current : 'すべて';
}

function extractInventoryColorTemperature(name, code = '') {
  const sourceName = String(name || '');
  const text = normalizeColorText(`${name || ''} ${code || ''}`);
  const nameText = normalizeColorText(sourceName);
  const labelFromName = (() => {
    if (sourceName.includes('昼光色')) return '昼光色';
    if (sourceName.includes('昼白色')) return '昼白色';
    if (sourceName.includes('温白色')) return '温白色';
    if (sourceName.includes('電球色')) return '電球色';
    if (sourceName.includes('白色')) return '白色';
    return '';
  })();
  const kMatch = nameText.match(/([0-9]{4})K/);
  if (kMatch) {
    const k = `${kMatch[1]}K`;
    const label = labelFromName || ({'6500K':'昼光色','5000K':'昼白色','4000K':'白色','3500K':'温白色','3000K':'電球色','2700K':'電球色'}[k] || '');
    return label ? `${k}（${label}）` : k;
  }
  if (text.includes('RGBW')) return 'RGBW';
  if (text.includes('RGB')) return 'RGB';
  const codeText = normalizeColorText(code || '');
  const codeMap = [
    [/[-_](65)(H|K|E)?(?:[-_]|$)/, '6500K（昼光色）'],
    [/[-_](50)(H|K|E)?(?:[-_]|$)/, '5000K（昼白色）'],
    [/[-_](40)(H|K|E)?(?:[-_]|$)/, '4000K（白色）'],
    [/[-_](35)(H|K|E)?(?:[-_]|$)/, '3500K（温白色）'],
    [/[-_](30)(H|K|E)?(?:[-_]|$)/, '3000K（電球色）'],
    [/[-_](27)(H|K|E)?(?:[-_]|$)/, '2700K（電球色）']
  ];
  for (const [pattern, value] of codeMap) {
    if (pattern.test(codeText)) return value;
  }
  return '色温度なし';
}
function inventoryColorSortRank(value) {
  const text = String(value || '');
  if (text.includes('6500K')) return 1;
  if (text.includes('5000K')) return 2;
  if (text.includes('4000K')) return 3;
  if (text.includes('3500K')) return 4;
  if (text.includes('3000K')) return 5;
  if (text.includes('2700K')) return 6;
  if (text === 'RGB') return 7;
  if (text === 'RGBW') return 8;
  if (text === '色温度なし') return 99;
  return 50;
}
function renderInventoryColorFilter() {
  if (!inventoryColorFilter) return;
  const current = inventoryColorFilter.value || 'すべて';
  const selectedProduct = inventoryProductFilter?.value || 'すべて';
  const seen = new Set();
  const colors = [];
  inventoryRows.forEach(item => {
    const base = item.baseProductName || extractInventoryBaseProductName(item.name);
    if (selectedProduct !== 'すべて' && base !== selectedProduct) return;
    const color = item.colorTemperature || extractInventoryColorTemperature(item.name, item.code);
    if (color && !seen.has(color)) {
      seen.add(color);
      colors.push(color);
    }
  });
  colors.sort((a, b) => inventoryColorSortRank(a) - inventoryColorSortRank(b) || String(a).localeCompare(String(b), 'ja'));
  inventoryColorFilter.innerHTML = '<option value="すべて">色温度すべて</option>' + colors.map(color => `<option value="${escapeHtml(color)}">${escapeHtml(color)}</option>`).join('');
  inventoryColorFilter.value = colors.includes(current) ? current : 'すべて';
}

function normalizeHeader(value) {
  return String(value || '').replace(/\s+/g, '').replace(/[\n\r]/g, '').toLowerCase();
}
function findHeaderIndex(headers, keywords, fallbackIndex) {
  const index = headers.findIndex(header => keywords.some(keyword => normalizeHeader(header).includes(keyword)));
  return index >= 0 ? index : fallbackIndex;
}
function inventoryNumber(value) {
  const normalized = String(value ?? '').replace(/,/g, '').replace(/[\s　]/g, '');
  const n = Number(normalized);
  return Number.isFinite(n) ? n : 0;
}

function normalizeInventoryWarehouseName(value) {
  const text = String(value || '').replace(/[\s　]+/g, ' ').trim();
  if (!text) return '未設定';
  if (text.includes('西日本営業所')) return '西日本';
  if (text.includes('アリストジャパン')) return 'アリスト';
  if (text.includes('リバース')) return 'リバース';
  if (text.includes('AWS')) return 'AWS';
  if (text.includes('直送')) return '直送';
  if (text.includes('処理待ち')) return '処理待ち';
  return text.replace(/株式会社/g, '').trim() || text;
}
function shouldSkipInventoryRow({warehouse = '', code = '', name = ''} = {}) {
  const warehouseText = String(warehouse || '').replace(/[\s　]+/g, ' ').trim();
  const codeText = String(code || '').trim().toUpperCase();
  if (warehouseText.includes('直送倉庫')) return true;
  if (warehouseText.includes('株式会社 アート') || warehouseText.includes('株式会社アート')) return true;
  if (/^AAA[-_]/i.test(codeText)) return true;
  return false;
}
function extractInventoryBodyColor(code = '', name = '') {
  const rawName = String(name || '');
  const codeText = normalizeColorText(code || '');
  const isFloodLight = /フラ[ッツ]ドライト/.test(rawName) || /^FL\d|^FB\d|^1SC-OR/i.test(codeText);
  if (!isFloodLight) return '';
  if (rawName.includes('黒')) return '黒';
  if (rawName.includes('白')) return '白';
  if (/(EB|KB)(?:[_\-]|$)/.test(codeText)) return '黒';
  if (/(EW|HW|KW)(?:[_\-]|$)/.test(codeText)) return '白';
  return '';
}
function extractInventoryRank(code = '', name = '') {
  const text = normalizeColorText(`${code || ''} ${name || ''}`).replace(/[\s　]/g, '');
  const match = text.match(/(?:^|[_\-])([0-9]{1,2}[DF])(?=\-?10(?:個連結)?|[_\-\s]|$)/);
  return match ? match[1] : '';
}
function extractInventoryUnitSpec(code = '', name = '') {
  const text = normalizeColorText(`${code || ''} ${name || ''}`);
  if (/(?:^|[_\-])10(?:$|[^0-9])/.test(text) || /10個連結/.test(String(name || ''))) return '10個連結';
  return '単品';
}
function extractInventoryModelGrade(code = '') {
  const text = normalizeColorText(code || '');
  const match = text.match(/(?:^|[_\-])([A-Z][0-9]?|B[0-9]?|C|H[0-9]?|J[0-9]?)(?=\_|\-|$)/g);
  if (!match || !match.length) return '';
  const last = match[match.length - 1].replace(/^[_\-]/, '');
  if (/^[0-9]+D$/.test(last)) return '';
  return last;
}
function getInventoryItemMeta(item) {
  return {
    rank: item.rank || extractInventoryRank(item.code, item.name),
    unitSpec: item.unitSpec || extractInventoryUnitSpec(item.code, item.name),
    warehouseShort: item.warehouseShort || normalizeInventoryWarehouseName(item.warehouse),
    modelGrade: item.modelGrade || extractInventoryModelGrade(item.code),
    bodyColor: item.bodyColor || extractInventoryBodyColor(item.code, item.name)
  };
}
function formatInventoryNumber(value) {
  const text = String(value ?? '').trim();
  if (!text) return '-';
  const n = inventoryNumber(text);
  if (String(text).replace(/,/g, '').match(/^-?\d+(\.\d+)?$/)) return n.toLocaleString('ja-JP');
  return text;
}
function hasValue(value) {
  const text = String(value ?? '').trim();
  if (!text || text === '-' || text === '0') return false;
  return true;
}
function chooseInventorySheet(workbook) {
  return workbook.SheetNames.find(name => name === 'メイン') || workbook.SheetNames.find(name => name.includes('メイン')) || workbook.SheetNames[0];
}
function parseInventoryRows(workbook) {
  const sheetName = chooseInventorySheet(workbook);
  const ws = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(ws, {header:1, defval:'', raw:false});
  const headerRowIndex = rows.findIndex(row => {
    const joined = row.map(normalizeHeader).join('|');
    return joined.includes('品番') && (joined.includes('品名') || joined.includes('商品'));
  });
  const headerIndex = headerRowIndex >= 0 ? headerRowIndex : 0;
  const headers = rows[headerIndex] || [];
  const idx = {
    warehouse: findHeaderIndex(headers, ['倉庫'], 0),
    code: findHeaderIndex(headers, ['品番','型番'], 1),
    name: findHeaderIndex(headers, ['品名','商品名','製品名'], 2),
    stock: findHeaderIndex(headers, ['在庫数','在庫'], 3),
    reserved: findHeaderIndex(headers, ['確保数','確保'], 4),
    available: findHeaderIndex(headers, ['有効数','有効'], 5),
    memo: findHeaderIndex(headers, ['メモ','備考','摘要'], 12)
  };
  const incomingColumnIndexes = [6,7,8,9,10,11];
  return rows.slice(headerIndex + 1).map((row, rowIndex) => {
    const code = String(row[idx.code] ?? '').trim();
    const name = String(row[idx.name] ?? '').trim();
    const warehouse = String(row[idx.warehouse] ?? '').trim();
    const memo = String(row[idx.memo] ?? '').trim();
    if (!code && !name) return null;
    if (shouldSkipInventoryRow({warehouse, code, name})) return null;
    const incoming = incomingColumnIndexes.map(colIndex => {
      const quantity = row[colIndex];
      if (!hasValue(quantity)) return null;
      return {date: String(headers[colIndex] || `入荷予定${colIndex - 5}`).trim(), quantity: String(quantity).trim()};
    }).filter(Boolean);
    const available = String(row[idx.available] ?? '').trim();
    const item = {
      id: `inv-${Date.now()}-${rowIndex}`,
      originalIndex: rowIndex,
      warehouse,
      warehouseShort: normalizeInventoryWarehouseName(warehouse),
      code,
      name,
      baseProductName: extractInventoryBaseProductName(name),
      colorTemperature: extractInventoryColorTemperature(name, code),
      rank: extractInventoryRank(code, name),
      unitSpec: extractInventoryUnitSpec(code, name),
      modelGrade: extractInventoryModelGrade(code),
      bodyColor: extractInventoryBodyColor(code, name),
      stock: String(row[idx.stock] ?? '').trim(),
      reserved: String(row[idx.reserved] ?? '').trim(),
      available,
      memo,
      incoming,
      searchText: [warehouse, normalizeInventoryWarehouseName(warehouse), code, name, extractInventoryRank(code, name), extractInventoryUnitSpec(code, name), extractInventoryColorTemperature(name, code), extractInventoryBodyColor(code, name), row[idx.stock], row[idx.reserved], available, memo, ...incoming.map(x => `${x.date} ${x.quantity}`)].join(' ').toLowerCase(),
      nameSearchText: String(extractInventoryBaseProductName(name) || name || '').toLowerCase()
    };
    item.status = inventoryNumber(available) > 0 ? '在庫あり' : (incoming.length ? '入荷予定あり' : '欠品');
    return item;
  }).filter(Boolean);
}
async function readInventoryExcel(file) {
  if (!window.XLSX) {
    alert('Excel読み込みライブラリを取得できませんでした。インターネット接続を確認してください。');
    return;
  }
  try {
    toast('在庫表を読み込み中です');
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, {type:'array'});
    inventoryRows = parseInventoryRows(workbook);
    const now = new Date().toISOString();
    inventoryMeta = {loadedAt:now, savedAt:now, fileName:file.name, count:inventoryRows.length, storage:'browser-local'};
    const saved = saveInventory();
    renderInventoryStatus();
    renderInventoryResults();
    toast(saved ? `${inventoryRows.length}件を読み込み、端末に保存しました` : `${inventoryRows.length}件を読み込みました（保存失敗）`);
    if (hasSupabaseConfig()) {
      await saveInventoryToCloud({silent:true});
      toast(`${inventoryRows.length}件を読み込み、共有在庫として保存しました`);
    }
  } catch (error) {
    console.error(error);
    alert('在庫表の読み込みに失敗しました。対象シートや列名を確認してください。');
  }
}
function toKatakanaText(value) {
  return String(value ?? '').replace(/[ぁ-ん]/g, char => String.fromCharCode(char.charCodeAt(0) + 0x60));
}
function normalizeInventoryKeyword(value) {
  return normalizeNumberLikeText(toKatakanaText(value))
    .trim()
    .toLowerCase()
    .replace(/[\s　・･_\-ー―]/g, '');
}
function getInventorySearchVariants(value) {
  const q = normalizeInventoryKeyword(value);
  const variants = new Set([q]);
  const replacements = [
    ['starlite', 'スターライト'],
    ['star', 'スター'],
    ['スター', 'スターライト'],
    ['penta', 'ペンタ'],
    ['pentawide', 'ペンタワイド'],
    ['pentalite', 'ペンタライト'],
    ['duo', 'デュオ'],
    ['duoslim', 'デュオスリム'],
    ['mono', 'モノ'],
    ['monomini', 'モノミニ'],
    ['gem', 'ジェム'],
    ['seamless', 'シームレス'],
    ['seamlessbeam', 'シームレスビーム'],
    ['glow', 'グロー'],
    ['glowtube', 'グローチューブ'],
    ['glowbeam', 'グロービーム'],
    ['flood', 'フラッド'],
    ['floodlight', 'フラッドライト'],
    ['フラットライト', 'フラッドライト'],
    ['フラトライト', 'フラッドライト'],
    ['フラッド', 'フラッド'],
    ['フラット', 'フラッド'],
    ['スタライト', 'スターライト'],
    ['スター4', 'スターライトⅣ'],
    ['スターiv', 'スターライトⅣ'],
    ['sl4', 'スターライトⅣ'],
    ['gbp', 'グロービームプラス'],
    ['グロービーム', 'グロービームプラス'],
    ['グランテ', 'グランデ'],
    ['グランディ', 'グランデ'],
    ['デュオスリム2', 'デュオスリムⅡ'],
    ['デュオスリムii', 'デュオスリムⅡ'],
    ['シームレスビーム2', 'シームレスビームⅡ'],
    ['シームレスビームii', 'シームレスビームⅡ']
  ];
  replacements.forEach(([from, to]) => {
    const nf = normalizeInventoryKeyword(from);
    const nt = normalizeInventoryKeyword(to);
    if (q.includes(nf)) variants.add(q.replace(nf, nt));
  });
  return Array.from(variants).filter(Boolean);
}
function levenshteinDistance(a, b, limit = 3) {
  a = String(a || '');
  b = String(b || '');
  if (Math.abs(a.length - b.length) > limit) return limit + 1;
  let prev = Array.from({length: b.length + 1}, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const curr = [i];
    let rowMin = curr[0];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      const val = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
      curr[j] = val;
      rowMin = Math.min(rowMin, val);
    }
    if (rowMin > limit) return limit + 1;
    prev = curr;
  }
  return prev[b.length];
}
function scoreInventoryKeyword(query, target) {
  const targetKey = normalizeInventoryKeyword(target);
  if (!targetKey) return 0;
  const variants = getInventorySearchVariants(query);
  let best = 0;
  variants.forEach(q => {
    if (!q) return;
    if (targetKey === q) best = Math.max(best, 100);
    if (targetKey.startsWith(q)) best = Math.max(best, q.length <= 2 ? 82 : 92);
    if (targetKey.includes(q)) best = Math.max(best, q.length <= 2 ? 58 : 76);
    if (q.length >= 4) {
      const prefix = targetKey.slice(0, Math.min(targetKey.length, q.length));
      const distance = levenshteinDistance(q, prefix, 3);
      if (distance <= 1) best = Math.max(best, 82);
      if (distance === 2) best = Math.max(best, 68);
      if (q.endsWith('ライト') && targetKey.endsWith('ライト') && q.slice(0, 3) === targetKey.slice(0, 3)) best = Math.max(best, 88);
      if (q.endsWith('スティック') && targetKey.endsWith('スティック') && q.slice(0, 3) === targetKey.slice(0, 3)) best = Math.max(best, 88);
    }
  });
  return best;
}
function normalizeColorText(value) {
  return String(value ?? '').toUpperCase().replace(/[Ｋ]/g, 'K').replace(/[０-９]/g, char => String.fromCharCode(char.charCodeAt(0) - 0xFEE0));
}
function getInventoryRequiredModelTokens(query) {
  const q = normalizeInventoryKeyword(query);
  const tokens = [];
  if (q.includes('cvh')) tokens.push('cvh');
  if (q.includes('cvc') || q.includes('cvcc')) tokens.push('cvc');
  if (q === 'cc' || q.includes('cc')) tokens.push('cc');
  return Array.from(new Set(tokens));
}
function inventoryTargetText(item) {
  const base = item.baseProductName || extractInventoryBaseProductName(item.name);
  const meta = getInventoryItemMeta(item);
  return [base, item.name, item.code, item.memo, item.colorTemperature, meta.rank, meta.unitSpec, meta.warehouseShort, meta.modelGrade, meta.bodyColor].filter(Boolean).join(' ');
}
function inventoryModelTokensMatch(item, query) {
  const required = getInventoryRequiredModelTokens(query);
  if (!required.length) return true;
  const targetKey = normalizeInventoryKeyword(inventoryTargetText(item));
  return required.every(token => targetKey.includes(token));
}
function inventorySearchScore(item, query) {
  const q = normalizeInventoryKeyword(query);
  if (!q) return 0;
  const target = inventoryTargetText(item);
  const targetKey = normalizeInventoryKeyword(target);
  const baseKey = normalizeInventoryKeyword(item.baseProductName || extractInventoryBaseProductName(item.name));
  const nameKey = normalizeInventoryKeyword(item.name);
  const codeKey = normalizeInventoryKeyword(item.code);
  let score = scoreInventoryKeyword(query, target);
  getInventorySearchVariants(query).forEach(variant => {
    if (!variant) return;
    if (nameKey === variant) score = Math.max(score, 130);
    if (codeKey === variant) score = Math.max(score, 125);
    if (nameKey.includes(variant)) score = Math.max(score, 110);
    if (codeKey.includes(variant)) score = Math.max(score, 108);
    if (baseKey.includes(variant)) score = Math.max(score, 92);
  });
  getInventoryRequiredModelTokens(query).forEach(token => {
    if (targetKey.includes(token)) score += 45;
  });
  return score;
}
function inventoryNameMatches(item, query) {
  if (!query) return true;
  const q = normalizeInventoryKeyword(query);
  if (!q) return true;
  const base = item.baseProductName || extractInventoryBaseProductName(item.name);
  if (q.length === 1) {
    return normalizeInventoryKeyword(base).startsWith(q);
  }
  if (!inventoryModelTokensMatch(item, query)) return false;
  return inventorySearchScore(item, query) >= 55;
}
function extractInventoryColorRank(item) {
  const text = normalizeColorText(`${item.code || ''} ${item.name || ''} ${item.memo || ''}`);
  if (text.includes('6500K') || /(^|[^0-9])65[HＫK]?/.test(text)) return 1;
  if (text.includes('5000K') || /(^|[^0-9])50[HＫK]?/.test(text)) return 2;
  if (text.includes('4000K') || /(^|[^0-9])40[HＫK]?/.test(text)) return 3;
  if (text.includes('3500K') || /(^|[^0-9])35[HＫK]?/.test(text)) return 4;
  if (text.includes('3000K') || /(^|[^0-9])30[HＫK]?/.test(text)) return 5;
  if (text.includes('2700K') || /(^|[^0-9])27[HＫK]?/.test(text)) return 6;
  return 99;
}
function inventoryCodeSortKey(item) {
  // 色温度違いを同じ品番グループに寄せるため、65H/50H/40Hなどをまとめる
  return normalizeColorText(item.code || '')
    .replace(/(ASL[MＤD]?\d?-)(65|50|40|30|27)(H|K)?/g, '$1XX$3')
    .replace(/(PTW\d?[^_\-]*[-_]?)(65|50|40|30|27)(H|K)?/g, '$1XX$3')
    .replace(/(GB|GL|DUO|MONO)(65|50|40|30|27)(H|K)?/g, '$1XX$3')
    .replace(/[\s　]/g, '');
}
function sortInventorySearchRows(rows, query) {
  const q = normalizeInventoryKeyword(query);
  if (!q) return [...rows];
  return [...rows].sort((a, b) => {
    const scoreDiff = inventorySearchScore(b, query) - inventorySearchScore(a, query);
    if (scoreDiff) return scoreDiff;
    return (a.originalIndex ?? 0) - (b.originalIndex ?? 0);
  });
}
function inventoryRankSortRank(value) {
  const text = String(value || '').toUpperCase();
  const match = text.match(/^(\d+)([DF])$/);
  if (!match) return 999;
  return Number(match[1]) * 10 + (match[2] === 'D' ? 0 : 1);
}
function inventoryWarehouseSortRank(value) {
  const text = String(value || '');
  if (text.includes('リバース')) return 1;
  if (text.includes('アリスト')) return 2;
  if (text.includes('西日本')) return 3;
  return 50;
}
function inventoryGroupAvailable(group) {
  return group.rows.reduce((sum, item) => sum + inventoryNumber(item.available), 0);
}
function sortInventoryGroups(groups, query) {
  const q = normalizeInventoryKeyword(query);
  return [...groups].sort((a, b) => {
    if (q) {
      const scoreDiff = Math.max(...b.rows.map(row => inventorySearchScore(row, query))) - Math.max(...a.rows.map(row => inventorySearchScore(row, query)));
      if (scoreDiff) return scoreDiff;
    }
    const colorDiff = inventoryColorSortRank(a.colorTemperature) - inventoryColorSortRank(b.colorTemperature);
    if (colorDiff) return colorDiff;
    const rankDiff = inventoryRankSortRank(a.rank) - inventoryRankSortRank(b.rank);
    if (rankDiff) return rankDiff;
    const availableDiff = inventoryGroupAvailable(b) - inventoryGroupAvailable(a);
    if (availableDiff) return availableDiff;
    return String(a.code || '').localeCompare(String(b.code || ''), 'ja', {numeric:true});
  });
}
function groupInventoryRowsByCode(rows, query = '') {
  const map = new Map();
  rows.forEach(item => {
    const key = `${item.code || ''}__${item.name || ''}`;
    if (!map.has(key)) {
      const meta = getInventoryItemMeta(item);
      map.set(key, {code:item.code, name:item.name, baseProductName:item.baseProductName || extractInventoryBaseProductName(item.name), colorTemperature:item.colorTemperature || extractInventoryColorTemperature(item.name, item.code), rank:meta.rank, unitSpec:meta.unitSpec, modelGrade:meta.modelGrade, bodyColor:meta.bodyColor, originalIndex:item.originalIndex ?? 0, rows:[]});
    }
    map.get(key).rows.push(item);
  });
  const groups = Array.from(map.values()).map(group => ({
    ...group,
    rows: [...group.rows].sort((a, b) => inventoryWarehouseSortRank(getInventoryItemMeta(a).warehouseShort) - inventoryWarehouseSortRank(getInventoryItemMeta(b).warehouseShort) || (a.originalIndex ?? 0) - (b.originalIndex ?? 0))
  }));
  return sortInventoryGroups(groups, query);
}
function renderInventoryResults() {
  if (!inventoryGrid) return;
  const q = (inventorySearch.value || '').trim().toLowerCase();
  const status = inventoryStatusFilter.value || 'すべて';
  const selectedProduct = inventoryProductFilter?.value || 'すべて';
  const selectedColor = inventoryColorFilter?.value || 'すべて';
  const rows = sortInventorySearchRows(inventoryRows
    .filter(item => status === 'すべて' || item.status === status || (status === '入荷予定あり' && item.incoming?.length))
    .filter(item => selectedProduct === 'すべて' || (item.baseProductName || extractInventoryBaseProductName(item.name)) === selectedProduct)
    .filter(item => selectedColor === 'すべて' || (item.colorTemperature || extractInventoryColorTemperature(item.name, item.code)) === selectedColor)
    .filter(item => inventoryNameMatches(item, q)), q)
    .slice(0, 300);
  if (!inventoryRows.length) {
    inventoryGrid.classList.remove('inventory-list-wrap');
    inventoryGrid.innerHTML = '<p class="empty-message">まだ在庫表を読み込んでいません。共有フォルダから最新のExcelを選択またはドラッグしてください。</p>';
    return;
  }
  inventoryGrid.classList.add('inventory-list-wrap', 'inventory-v2-wrap');
  if (!rows.length) {
    inventoryGrid.innerHTML = '<p class="empty-message">該当する在庫がありません。</p>';
    return;
  }
  const groups = groupInventoryRowsByCode(rows, q).slice(0, 160);
  inventoryGrid.innerHTML = `
    <div class="inventory-result-count">表示 ${groups.length}品番 / 明細 ${rows.length}行 / 読込 ${inventoryRows.length}件</div>
    <div class="inventory-v2-list" aria-label="在庫検索結果">
      ${groups.map(group => {
        const groupRows = group.rows;
        const first = groupRows[0];
        const colorText = group.colorTemperature || extractInventoryColorTemperature(group.name, group.code);
        const shortColorText = shortColorLabel(colorText) || '-';
        const rank = group.rank || '-';
        const unitSpec = group.unitSpec || '-';
        const modelGrade = group.modelGrade || '';
        const bodyColor = group.bodyColor || '';
        const totalStock = groupRows.reduce((sum, item) => sum + inventoryNumber(item.stock), 0);
        const totalReserved = groupRows.reduce((sum, item) => sum + inventoryNumber(item.reserved), 0);
        const totalAvailable = groupRows.reduce((sum, item) => sum + inventoryNumber(item.available), 0);
        const statusClass = totalAvailable > 0 ? 'is-ok' : groupRows.some(item => item.incoming?.length) ? 'is-incoming' : 'is-out';
        const statusLabel = totalAvailable > 0 ? '在庫あり' : groupRows.some(item => item.incoming?.length) ? '入荷予定あり' : '欠品';
        const incomingText = groupRows.flatMap(item => item.incoming || []).slice(0, 4).map(x => `${escapeHtml(x.date)}：${escapeHtml(x.quantity)}`).join(' / ');
        const memoText = groupRows.map(item => item.memo).filter(Boolean).slice(0, 2).map(escapeHtml).join(' / ');
        return `<article class="inventory-v2-card">
          <div class="inventory-v2-card-head">
            <div>
              <span class="stock-status ${statusClass}">${escapeHtml(statusLabel)}</span>
              <strong class="inventory-v2-code">${escapeHtml(group.code || '品番未設定')}</strong>
              <div class="inventory-v2-name">${escapeHtml(group.baseProductName || group.name || '品名未設定')}</div>
            </div>
            <button class="secondary inventory-reply-btn" type="button" onclick="openInventoryReplyDialog('${first.id}')">返信文</button>
          </div>
          <div class="inventory-v2-tags">
            <span>色温度：<strong>${escapeHtml(shortColorText)}</strong></span>
            <span>ランク：<strong>${escapeHtml(rank)}</strong></span>
            <span>仕様：<strong>${escapeHtml(unitSpec)}</strong></span>
            ${modelGrade ? `<span>型：<strong>${escapeHtml(modelGrade)}</strong></span>` : ''}
            ${bodyColor ? `<span>色：<strong>${escapeHtml(bodyColor)}</strong></span>` : ''}
          </div>
          <div class="inventory-v2-total">
            <span>合計在庫 <strong>${formatInventoryNumber(totalStock)}</strong></span>
            <span>確保 <strong>${formatInventoryNumber(totalReserved)}</strong></span>
            <span>有効 <strong>${formatInventoryNumber(totalAvailable)}</strong></span>
          </div>
          <div class="inventory-v2-warehouse-list">
            ${groupRows.map(item => {
              const meta = getInventoryItemMeta(item);
              return `<div class="inventory-v2-warehouse-row">
                <span class="warehouse-name">${escapeHtml(meta.warehouseShort)}</span>
                <span>在庫 <strong>${formatInventoryNumber(item.stock)}</strong></span>
                <span>確保 <strong>${formatInventoryNumber(item.reserved)}</strong></span>
                <span>有効 <strong>${formatInventoryNumber(item.available)}</strong></span>
              </div>`;
            }).join('')}
          </div>
          ${(incomingText || memoText) ? `<div class="inventory-v2-note">${incomingText ? `<em>入荷予定：${incomingText}</em>` : ''}${incomingText && memoText ? '<br>' : ''}${memoText ? `メモ：${memoText}` : ''}</div>` : ''}
        </article>`;
      }).join('')}
    </div>`;
 }

// Inventory reply assist
let currentInventoryReplyItem = null;
let currentInventoryReplyMode = 'sms';

function shortColorLabel(value) {
  return String(value || '').replace(/（.*?）/g, '').trim();
}
function firstIncomingLabel(item) {
  if (!item?.incoming?.length) return '';
  const first = item.incoming.find(x => x.date || x.quantity) || item.incoming[0];
  const date = String(first?.date || '').trim();
  return date || '次回入荷時期未定';
}
function cleanProductForReply(item) {
  const base = item?.baseProductName || extractInventoryBaseProductName(item?.name) || item?.name || '該当製品';
  const color = shortColorLabel(item?.colorTemperature || extractInventoryColorTemperature(item?.name, item?.code));
  return color && color !== '色温度なし' ? `${base} ${color}` : base;
}
function getInventoryReplyState(item) {
  const available = inventoryNumber(item?.available);
  if (available > 5) return 'available';
  if (available > 0) return 'low';
  if (item?.incoming?.length) return 'incoming';
  return 'out';
}
function buildInventoryReplyText(item, mode = 'sms') {
  const state = getInventoryReplyState(item);
  const product = cleanProductForReply(item);
  const incoming = firstIncomingLabel(item);
  const isMail = mode === 'mail';
  const prefix = isMail ? `お問い合わせいただきありがとうございます。\n\n${product}につきまして、` : '';
  const suffix = isMail ? '\n\nご検討のほどよろしくお願いいたします。' : '\n\nよろしくお願いいたします。';
  if (state === 'available') {
    return `${prefix}在庫ございます。\n本日11:30までのご注文で当日出荷可能です。${suffix}`;
  }
  if (state === 'low') {
    return `${prefix}在庫ございますが、残り僅かとなっております。\nご入用の際はお早めにご注文いただけますと幸いです。${suffix}`;
  }
  if (state === 'incoming') {
    return `${prefix}現在欠品しております。\n次回入荷は${incoming}頃を予定しております。${suffix}`;
  }
  return `${prefix}現在欠品しております。\n入荷時期が分かり次第、改めてご案内いたします。${suffix}`;
}
function renderInventoryReplyDialog() {
  if (!currentInventoryReplyItem) return;
  const product = cleanProductForReply(currentInventoryReplyItem);
  const state = getInventoryReplyState(currentInventoryReplyItem);
  const stateLabel = state === 'available' ? '在庫あり' : state === 'low' ? '在庫少' : state === 'incoming' ? '欠品・入荷予定あり' : '欠品・入荷未定';
  const colorClass = state === 'available' ? 'is-ok' : state === 'low' || state === 'incoming' ? 'is-incoming' : 'is-out';
  const summary = `
    <span class="stock-status ${colorClass}">${escapeHtml(stateLabel)}</span>
    <strong>${escapeHtml(product)}</strong>
    <span>有効：${escapeHtml(currentInventoryReplyItem.available || '-')}</span>
    ${currentInventoryReplyItem.incoming?.length ? `<span>入荷予定：${currentInventoryReplyItem.incoming.map(x => `${escapeHtml(x.date)} ${escapeHtml(x.quantity)}`).join(' / ')}</span>` : ''}
  `;
  const productEl = $('inventoryReplyProduct');
  const statusEl = $('inventoryReplyStatus');
  const textEl = $('inventoryReplyText');
  if (productEl) productEl.textContent = product;
  if (statusEl) statusEl.innerHTML = summary;
  if (textEl) textEl.value = buildInventoryReplyText(currentInventoryReplyItem, currentInventoryReplyMode);
  document.querySelectorAll('.reply-template-tab').forEach(btn => btn.classList.toggle('active', btn.dataset.replyMode === currentInventoryReplyMode));
}
window.openInventoryReplyDialog = id => {
  currentInventoryReplyItem = inventoryRows.find(item => item.id === id);
  if (!currentInventoryReplyItem) return;
  currentInventoryReplyMode = 'sms';
  renderInventoryReplyDialog();
  $('inventoryReplyDialog')?.showModal();
};
function closeInventoryReplyDialog() {
  $('inventoryReplyDialog')?.close();
}
function getInventoryReplyBody() {
  return $('inventoryReplyText')?.value || '';
}
function getInventoryReplySubject() {
  return `${cleanProductForReply(currentInventoryReplyItem)} 在庫状況のご案内`;
}
function openSmsWithInventoryReply() {
  const body = encodeURIComponent(getInventoryReplyBody());
  copyText(getInventoryReplyBody(), '在庫返信文');
  window.location.href = `sms:&body=${body}`;
}
function openMailWithInventoryReply() {
  const subject = encodeURIComponent(getInventoryReplySubject());
  const body = encodeURIComponent(getInventoryReplyBody());
  copyText(getInventoryReplyBody(), '在庫返信文');
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}
function openLineWorksWithInventoryReply() {
  copyText(getInventoryReplyBody(), '在庫返信文');
  setTimeout(() => { window.location.href = 'lineworks://'; }, 180);
}

// Admin
$('exportBtn')?.addEventListener('click', () => {
  const data = {links, newsItems, catalogs, templates, documents, inventoryMeta, inventoryRows, dailyReport, exportedAt:new Date().toISOString()};
  copyText(JSON.stringify(data, null, 2), '保存データ');
});
$('resetBtn')?.addEventListener('click', () => {
  if (!confirm('リンク・定型メール・資料保管・在庫検索データを初期状態に戻しますか？')) return;
  localStorage.removeItem(linkKey);
  localStorage.removeItem(templateKey);
  localStorage.removeItem(docKey);
  localStorage.removeItem(catalogKey);
  localStorage.removeItem(newsKey);
  localStorage.removeItem(inventoryDataKey);
  localStorage.removeItem(inventoryMetaKey);
  localStorage.removeItem(dailyReportKey);
  links = defaultLinks;
  templates = defaultTemplates;
  documents = defaultDocs;
  catalogs = defaultCatalogs;
  newsItems = defaultNews;
  inventoryRows = [];
  inventoryMeta = {loadedAt:'', fileName:'', count:0, savedAt:''};
  dailyReport = {rows:[], summary:null, meta:{}};
  renderLinks(); renderNews(); renderCatalogs(); renderTemplates(); renderDocs(); renderInventoryStatus(); renderInventoryResults(); renderDailyReport();
  toast('初期データに戻しました');
});



// Site-wide predictive search
const globalSearchInput = $('globalSearchInput');
const globalSearchClearBtn = $('globalSearchClearBtn');
const globalSearchResults = $('globalSearchResults');
const globalVoiceSearchBtn = $('globalVoiceSearchBtn');
const globalVoiceStatus = $('globalVoiceStatus');
const globalVoiceStatusLabel = $('globalVoiceStatusLabel');
const globalVoiceTranscript = $('globalVoiceTranscript');
let globalSearchFocusedIndex = -1;
let globalSpeechRecognition = null;
let isGlobalVoiceListening = false;

const globalRecentSearchKey = 'salesPortalGlobalRecentSearchesV1';
function loadGlobalRecentSearches() {
  try { return JSON.parse(localStorage.getItem(globalRecentSearchKey) || '[]'); } catch { return []; }
}
function saveGlobalRecentSearch(term) {
  const value = normalizeSearchText(term);
  if (!value) return;
  const rows = [value, ...loadGlobalRecentSearches().filter(x => normalizeSearchText(x) !== value)].slice(0, 8);
  localStorage.setItem(globalRecentSearchKey, JSON.stringify(rows));
}
function searchAgainFromText(text) {
  const cleaned = String(text || '').replace(/^認識結果\s*[:：]\s*/, '').trim();
  if (!cleaned || !globalSearchInput) return;
  globalSearchInput.value = cleaned;
  updateGlobalSearchClearButton();
  globalSearchInput.focus();
  setGlobalSearchActive(true);
  renderGlobalSearchResults();
}


function updateGlobalSearchClearButton() {
  if (!globalSearchClearBtn || !globalSearchInput) return;
  globalSearchClearBtn.hidden = !(globalSearchInput.value || '').trim();
}
function clearGlobalSearchInput() {
  if (!globalSearchInput || !globalSearchResults) return;
  globalSearchInput.value = '';
  if (globalVoiceTranscript) globalVoiceTranscript.textContent = '';
  if (globalVoiceStatus) globalVoiceStatus.hidden = true;
  updateGlobalSearchClearButton();
  globalSearchInput.focus();
  setGlobalSearchActive(true);
  renderGlobalSearchResults();
}

function resetGlobalSearchState() {
  if (globalSearchInput) globalSearchInput.value = '';
  if (globalVoiceTranscript) globalVoiceTranscript.textContent = '';
  if (globalVoiceStatus) globalVoiceStatus.hidden = true;
  if (globalSearchResults) {
    globalSearchResults.hidden = true;
    globalSearchResults.innerHTML = '';
  }
  globalSearchFocusedIndex = -1;
  updateGlobalSearchClearButton();
  setGlobalSearchActive(false);
}

function clearAppSearchFields({rerender = false} = {}) {
  [
    search,
    newsSearch,
    inventorySearch,
    shippingSearch,
    docSearch,
    catalogSearch,
    templateSearch,
    selfProductSearch,
    competitorSearch
  ].forEach(input => {
    if (input) input.value = '';
  });
  if (docCategoryFilter) docCategoryFilter.value = 'すべて';
  if (docStatusFilter) docStatusFilter.value = 'すべて';
  if (shippingDateFilter) shippingDateFilter.value = 'すべて';
  if (inventoryStatusFilter) inventoryStatusFilter.value = 'すべて';
  resetInventoryProductFilters();
  resetGlobalSearchState();
  if (!rerender) return;
  try { renderLinks?.(); } catch (error) {}
  try { renderNews?.(); } catch (error) {}
  try { renderInventoryResults?.(); } catch (error) {}
  try { renderShippingRecords?.(); } catch (error) {}
  try { renderDocs?.(); } catch (error) {}
  try { renderCatalogs?.(); } catch (error) {}
  try { renderTemplates?.(); } catch (error) {}
  try { renderCompetitors?.(); } catch (error) {}
}

function isMobileSearchViewport() {
  return window.matchMedia && window.matchMedia('(max-width: 820px)').matches;
}
function setGlobalSearchActive(active) {
  if (!globalSearchInput) return;
  const shouldActivate = Boolean(active && isMobileSearchViewport());
  document.body.classList.toggle('global-search-active', shouldActivate);
  globalSearchInput.closest('.global-search-wrap')?.classList.toggle('search-active', shouldActivate);
}
function renderGlobalSearchStarter() {
  if (!globalSearchResults) return;
  const recent = loadGlobalRecentSearches();
  const recentHtml = recent.length ? `<div class="recent-search-panel"><strong>最近検索</strong><div class="recent-search-chips">${recent.map(x => `<button type="button" class="recent-search-chip" data-term="${escapeAttr(x)}">${escapeHtml(x)}</button>`).join('')}</div></div>` : '';
  globalSearchResults.hidden = false;
  globalSearchResults.innerHTML = `
    <div class="global-search-empty search-starter">
      <strong>検索候補を表示します</strong>
      <span>例：フラッ / スターライト / 遅延 / ニュース / DN</span>
      <span>音声入力の誤認識も推測候補に出します。</span>
      <span>戻る時は左上の「← 戻る」を押してください。</span>
    </div>${recentHtml}`;
  globalSearchResults.querySelectorAll('.recent-search-chip').forEach(button => {
    button.addEventListener('click', () => searchAgainFromText(button.dataset.term || button.textContent));
  });
}

function normalizeNumberLikeText(value='') {
  let text = String(value ?? '').normalize('NFKC').toUpperCase();
  const romanPairs = [
    ['VIII','8'], ['VII','7'], ['VI','6'], ['IV','4'], ['IX','9'], ['III','3'], ['II','2'], ['X','10'], ['V','5']
  ];
  romanPairs.forEach(([roman, num]) => {
    const pattern = new RegExp(`(^|[^A-Z])${roman}(?=$|[^A-Z])`, 'g');
    text = text.replace(pattern, `$1${num}`);
  });
  const jpDigitMap = {'〇':'0','零':'0','一':'1','壱':'1','二':'2','弐':'2','三':'3','参':'3','四':'4','肆':'4','五':'5','伍':'5','六':'6','陸':'6','七':'7','八':'8','九':'9'};
  text = text.replace(/[〇零一壱二弐三参四肆五伍六陸七八九]/g, ch => jpDigitMap[ch] || ch);
  return text;
}
function normalizeSearchText(value='') {
  return normalizeNumberLikeText(value)
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[　]/g, ' ')
    .trim();
}

function buildInventoryGlobalSearchItems() {
  const items = [];
  const productGroups = new Map();
  const codeGroups = new Map();

  inventoryRows.forEach(row => {
    const base = row.baseProductName || extractInventoryBaseProductName(row.name) || row.name || '在庫データ';
    const code = row.code || '';
    if (base) {
      const key = `product:${normalizeSearchText(base)}`;
      if (!productGroups.has(key)) {
        productGroups.set(key, {
          type: '在庫',
          page: 'inventory',
          title: base,
          searchKind: 'product',
          searchTerm: base,
          rows: [],
          textParts: new Set([base, productKanaAliasText(base), ...getInventorySearchVariants(base)])
        });
      }
      const group = productGroups.get(key);
      group.rows.push(row);
      [row.name, row.code, row.memo, row.colorTemperature, row.status, row.warehouse, row.searchText, row.nameSearchText].forEach(value => {
        if (value) group.textParts.add(String(value));
      });
    }
    if (code) {
      const normalizedCode = normalizeInventoryKeyword(code);
      const prefixMatch = normalizedCode.match(/^([A-Z]+)[-_]?[0-9]*/);
      const prefix = prefixMatch?.[1] || normalizedCode.replace(/[^A-Z0-9]/g, '').slice(0, 4);
      [normalizedCode, prefix].filter(Boolean).forEach(keyValue => {
        const key = `code:${keyValue}`;
        if (!codeGroups.has(key)) {
          codeGroups.set(key, {
            type: '在庫',
            page: 'inventory',
            title: keyValue === normalizedCode ? code : `${keyValue} 品番`,
            searchKind: keyValue === normalizedCode ? 'code' : 'code-prefix',
            searchTerm: keyValue,
            rows: [],
            textParts: new Set([code, normalizedCode, keyValue, base, productKanaAliasText(base)])
          });
        }
        const group = codeGroups.get(key);
        group.rows.push(row);
        [row.name, row.code, row.memo, row.colorTemperature, row.status, row.warehouse, row.searchText, row.nameSearchText].forEach(value => {
          if (value) group.textParts.add(String(value));
        });
      });
    }
  });

  const buildItem = group => {
    const rows = group.rows;
    const codeSet = new Set(rows.map(x => x.code).filter(Boolean));
    const availableTotal = rows.reduce((sum, row) => sum + (Number(row.available) || 0), 0);
    const hasStock = rows.some(row => Number(row.available) > 0);
    const hasIncoming = rows.some(row => String(row.status || '').includes('入荷予定'));
    const colors = [...new Set(rows.map(row => shortColorLabel(row.colorTemperature || extractInventoryColorTemperature(row.name, row.code))).filter(x => x && x !== '色温度なし'))].slice(0, 4);
    const statusLabel = hasStock ? '在庫あり' : hasIncoming ? '入荷予定あり' : '在庫要確認';
    return {
      type: '在庫',
      page: 'inventory',
      title: group.title,
      subtitle: [statusLabel, `有効合計 ${availableTotal}`, `品番 ${codeSet.size || rows.length}件`, colors.join('・')].filter(Boolean).join(' / '),
      text: Array.from(group.textParts).join(' '),
      inventoryRows: rows,
      inventorySearchKind: group.searchKind || 'product',
      inventorySearchTerm: group.searchTerm || group.title,
      onSelect: q => {
        inventorySearch.value = q || group.searchTerm || group.title;
        inventoryStatusFilter.value = 'すべて';
        resetInventoryProductFilters();
        renderInventoryResults();
      }
    };
  };

  productGroups.forEach(group => items.push(buildItem(group)));
  codeGroups.forEach(group => items.push(buildItem(group)));
  return items;
}

function buildGlobalSearchItems() {
  const linkItems = links.filter(x => x.active).map(x => ({
    type: '営業ツール',
    page: 'tools',
    title: x.title || '名称未設定',
    subtitle: [x.category, x.description, x.url ? 'URLあり' : '', x.sharePath ? '共有フォルダあり' : '', x.memoUrl ? 'メモリンクあり' : ''].filter(Boolean).join(' / '),
    text: [x.title, x.category, x.description, x.url, x.memoUrl, x.sharePath].join(' '),
    onSelect: q => {
      search.value = q;
      filter.value = 'すべて';
      renderLinks();
    }
  }));

  const newsSearchItems = newsItems.filter(x => x.active).map(x => ({
    type: 'ニュース',
    page: 'news',
    title: getNewsDisplayTitle(x),
    subtitle: [x.category, x.important ? '重要' : '', x.updatedAt ? formatDate(x.updatedAt) : ''].filter(Boolean).join(' / '),
    text: [getNewsDisplayTitle(x), x.category, x.body, x.url, x.sharePath].join(' '),
    onSelect: q => {
      if (newsSearch) newsSearch.value = q;
      if (newsCategoryFilter) newsCategoryFilter.value = 'すべて';
      renderNews();
    }
  }));


  const dailyItems = (dailyReport?.rows || []).map(x => ({
    type: '日報',
    page: 'daily-report',
    title: x.name || '営業別日報',
    subtitle: [`売上 ${formatYen(x.sales)}円`, `達成率 ${formatRate(x.achievementRate)}`].join(' / '),
    text: [x.name, x.sales, x.budget, x.achievementRate, '売上日報', '日報'].join(' '),
    onSelect: q => {
      if (dailyPersonFilter) dailyPersonFilter.value = x.name;
      renderDailyReportRows();
    }
  }));

  const templateItems = templates.filter(x => x.active).map(x => ({
    type: '定型文',
    page: 'templates',
    title: x.subject || '件名未設定',
    subtitle: [x.category, x.audience, x.memo].filter(Boolean).join(' / '),
    text: [x.subject, x.category, x.audience, x.body, x.memo].join(' '),
    onSelect: q => {
      templateSearch.value = q;
      templateCategoryFilter.value = 'すべて';
      templateAudienceFilter.value = 'すべて';
      renderTemplates();
    }
  }));

  const docItems = documents.filter(x => x.active).filter(isDocDisplayReady).map(x => ({
    type: '資料保管',
    page: 'documents',
    title: x.title || '資料名未設定',
    subtitle: [x.category, x.status, x.owner, x.storageType].filter(Boolean).join(' / '),
    text: [x.title, x.category, x.summary, x.storageType, x.url, x.sharePath, x.owner, x.confidentiality, x.status].join(' '),
    onSelect: q => {
      docSearch.value = q;
      docCategoryFilter.value = 'すべて';
      docStatusFilter.value = 'すべて';
      renderDocs();
    }
  }));

  const catalogItems = catalogs.filter(x => x.active).map(x => ({
    type: 'カタログ保管',
    page: 'catalogs',
    title: x.company || '会社名未設定',
    subtitle: [x.category, x.memo, x.url ? 'URLあり' : ''].filter(Boolean).join(' / '),
    text: [x.company, x.category, x.memo, x.url].join(' '),
    onSelect: q => {
      catalogSearch.value = q;
      catalogCategoryFilter.value = 'すべて';
      renderCatalogs();
    }
  }));

  const competitorItems = competitorProducts.filter(x => x.active).map(x => {
    const maker = competitorMakers.find(m => m.id === x.makerId);
    const isSelf = isSelfProduct(x);
    return {
      type: isSelf ? '自社製品情報' : '他社製品',
      page: isSelf ? 'self-products' : 'competitors',
      title: x.name || '他社製品',
      subtitle: [maker?.name, isSelf ? '自社製品' : maker?.type, x.series, x.type, x.use].filter(Boolean).join(' / '),
      text: [maker?.name, maker?.type, maker?.memo, maker?.alias, x.series, x.name, x.code, x.type, x.use, x.detail, x.spec, x.catalogPage, x.alias].join(' '),
      onSelect: () => {
        if (isSelf) {
          if (selfProductSearch) selfProductSearch.value = x.name || '';
          renderSelfProducts();
          setTimeout(() => selfProductPanel?.scrollIntoView({behavior:'smooth', block:'start'}), 50);
          return;
        }
        selectedCompetitorMakerId = x.makerId;
        if (competitorSearch) competitorSearch.value = x.name || '';
        renderCompetitors();
        setTimeout(() => competitorProductPanel?.scrollIntoView({behavior:'smooth', block:'start'}), 50);
      }
    };
  });


  const companyItems = defaultCompanyInfo.map(x => ({
    type: '会社情報',
    page: 'company-info',
    title: x.label,
    subtitle: [x.name, x.postal, x.address, x.tel].filter(Boolean).join(' / '),
    text: [x.label, x.name, x.postal, x.address, x.tel, x.fax, x.officialUrl, x.keywords].join(' '),
    onSelect: () => {
      renderCompanyInfo();
      setTimeout(() => document.getElementById('companyInfoGrid')?.scrollIntoView({behavior:'smooth', block:'start'}), 50);
    }
  }));


  const lufasCalcItems = [{
    type: '計算ツール',
    page: 'lufas-calc',
    title: 'ルーファス簡易計算',
    subtitle: 'リディアワークス / ファブリックサイン / LUFAS概算算出',
    text: 'ルーファス LUFAS リディアワークス ファブリックサイン ファブリック 簡易計算 見積 概算 S20 SD45 S75 SD100 D100 フレーム スタンド',
    onSelect: () => {
      renderLufasCalc();
      setTimeout(() => document.getElementById('lufasCalcPanel')?.scrollIntoView({behavior:'smooth', block:'start'}), 50);
    }
  }];

  const selfCapacityCalcItems = [{
    type: '計算ツール',
    page: 'self-capacity-calc',
    title: '自社製品 容量計算',
    subtitle: '自社LEDモジュール / W・VA・100V/200V電流値',
    text: '自社製品 容量計算 消費電力 VA 電流 アンペア スターライト ペンタワイド デュオスリム モノミニ ジェム RGB TN 簡易計算 SMS メール',
    onSelect: () => {
      renderSelfCapacityCalc();
      setTimeout(() => document.getElementById('selfCapacityCalcPanel')?.scrollIntoView({behavior:'smooth', block:'start'}), 50);
    }
  }];

  const linearEstimateItems = [{
    type: '計算ツール',
    page: 'linear-estimate',
    title: 'シームレス系製品 概算算出',
    subtitle: 'シームレスビーム / TN / RGB / RGBW IC',
    text: 'シームレス シームレスビーム 概算 距離 電源 DALI ARTNET RGBW IC 見積 Excel コピー',
    onSelect: () => {
      renderLinearEstimate();
      setTimeout(() => document.getElementById('linearCircuitList')?.scrollIntoView({behavior:'smooth', block:'center'}), 50);
    }
  }];

  const drawingReaderItems = [{
    type: '営業ツール',
    page: 'drawing-reader',
    title: '図面読取・見積作成',
    subtitle: '照明位置図PDF / SB概算反映',
    text: '図面 読取 見積 SB概算 PDF 製品 総数 電源 調光器 コントローラー 変換器',
    onSelect: () => setTimeout(() => document.getElementById('drawingPdfDrop')?.scrollIntoView({behavior:'smooth', block:'center'}), 50)
  }];

  const inventoryItems = buildInventoryGlobalSearchItems();


  const shippingItems = shippingRecords.filter(x => x.active !== false).map(x => ({
    type: '出荷一覧',
    page: 'shipping',
    title: x.customer || '出荷情報',
    subtitle: [x.trackingNo ? `送り状No. ${x.trackingNo}` : '', x.delivery || '', x.address || ''].filter(Boolean).join(' / '),
    text: [...getShippingCustomerAliases(x.customer || ''), x.customer, x.trackingNo, x.delivery, x.address, x.item, x.phone, x.contact, x.carrier, '出荷', '配送', '送り状', 'ヤマト', 'やまと'].join(' '),
    onSelect: q => {
      if (shippingSearch) shippingSearch.value = q;
      if (shippingDateFilter) shippingDateFilter.value = 'すべて';
      renderShippingRecords();
    }
  }));

  return [...linkItems, ...newsSearchItems, ...dailyItems, ...catalogItems, ...competitorItems, ...templateItems, ...docItems, ...companyItems, ...lufasCalcItems, ...selfCapacityCalcItems, ...linearEstimateItems, ...drawingReaderItems, ...inventoryItems, ...shippingItems];
}
function globalTypePriority(type) {
  return {'在庫':1,'出荷一覧':2,'製品情報':3,'自社製品情報':3,'他社製品':4,'定型文':5,'カタログ保管':6,'資料保管':7,'会社情報':7,'計算ツール':7,'ニュース':8,'日報':9,'営業ツール':10}[type] || 99;
}
function scoreGlobalItem(item, q) {
  const title = normalizeSearchText(item.title);
  const subtitle = normalizeSearchText(item.subtitle);
  const text = normalizeSearchText(item.text);
  if (!q) return 0;
  if (item.type === '在庫') {
    const titleKey = normalizeInventoryKeyword(item.title);
    const termKey = normalizeInventoryKeyword(item.inventorySearchTerm || item.title);
    const kind = item.inventorySearchKind || 'product';

    // 品番プレフィックス候補は、検索語がその品番/プレフィックスに直接一致する場合だけ表示する。
    // 例：LZA → LZA品番は出す。CVH → 403品番など無関係な数字グループは出さない。
    if (kind === 'code-prefix') {
      if (termKey === q || termKey.startsWith(q) || q.startsWith(termKey) || titleKey.includes(q)) return 120;
      return 0;
    }

    if (termKey === q || titleKey === q) return 130;
    if (termKey.startsWith(q) || titleKey.startsWith(q)) return 112;
    if (termKey.includes(q) || titleKey.includes(q)) return 96;

    const fuzzyScore = Math.max(scoreInventoryKeyword(q, item.title), scoreInventoryKeyword(q, item.text));
    if (fuzzyScore >= 88) return fuzzyScore + 8;
    if (fuzzyScore >= 65) return fuzzyScore + 2;
    if (fuzzyScore >= 55) return fuzzyScore;
  }
  if (item.type === '出荷一覧') {
    const shipScore = Math.max(looseTextScore(q, item.title), looseTextScore(q, item.subtitle), looseTextScore(q, item.text));
    if (shipScore >= 88) return shipScore + 6;
    if (shipScore >= 60) return shipScore + 3;
    if (shipScore >= 48) return shipScore;
  }
  if (title === q) return 100;
  if (title.startsWith(q)) return 80;
  if (title.includes(q)) return 65;
  if (subtitle.includes(q)) return 45;
  if (text.includes(q)) return 25;
  return 0;
}
function highlightMatch(text, q) {
  const raw = String(text || '');
  if (!q) return escapeHtml(raw);
  const lower = raw.toLowerCase();
  const i = lower.indexOf(q.toLowerCase());
  if (i < 0) return escapeHtml(raw);
  return `${escapeHtml(raw.slice(0, i))}<mark>${escapeHtml(raw.slice(i, i + q.length))}</mark>${escapeHtml(raw.slice(i + q.length))}`;
}
function renderGlobalSearchResults() {
  if (!globalSearchInput || !globalSearchResults) return;
  updateGlobalSearchClearButton();
  const q = normalizeSearchText(globalSearchInput.value);
  globalSearchFocusedIndex = -1;
  if (!q) {
    const active = document.activeElement === globalSearchInput;
    setGlobalSearchActive(active);
    if (active && isMobileSearchViewport()) {
      renderGlobalSearchStarter();
    } else {
      globalSearchResults.hidden = true;
      globalSearchResults.innerHTML = '';
    }
    return;
  }
  setGlobalSearchActive(true);
  const items = buildGlobalSearchItems()
    .map(item => ({...item, score: scoreGlobalItem(item, q)}))
    .filter(item => item.score > 0)
    .sort((a,b) => globalTypePriority(a.type) - globalTypePriority(b.type) || b.score - a.score || a.title.localeCompare(b.title, 'ja', {numeric:true}))
    .slice(0, 14);

  if (!items.length) {
    globalSearchResults.hidden = false;
    globalSearchResults.innerHTML = '<div class="global-search-empty"><strong>該当する候補がありません。</strong><span>少し短く入力すると候補が出やすくなります。例：フラットライト → フラッ</span></div>';
    return;
  }

  globalSearchResults.hidden = false;
  globalSearchResults.innerHTML = items.map((item, index) => {
    const typeLabel = item.type;
    const actionLabel = item.type === '在庫' ? 'タップで在庫ページを絞り込み' : (item.type === '製品情報' || item.type === '自社製品情報') ? 'タップで仕様を見る' : item.type === '他社製品' ? 'タップで製品を見る' : item.type === 'ニュース' ? 'タップでニュースを見る' : item.type === '出荷一覧' ? 'タップで送り状を見る' : item.type === '会社情報' ? 'タップで住所を見る' : item.type === '計算ツール' ? 'タップで計算する' : 'タップで開く';
    return `
    <button type="button" class="global-result" data-index="${index}">
      <span class="global-result-type">${escapeHtml(typeLabel)}</span>
      <strong>${highlightMatch(item.title, q)}</strong>
      <small>${highlightMatch(item.subtitle || '詳細なし', q)}</small>
      <em>${escapeHtml(actionLabel)}</em>
    </button>`;
  }).join('');

  globalSearchResults.querySelectorAll('.global-result').forEach(button => {
    button.addEventListener('click', () => selectGlobalResult(items[Number(button.dataset.index)], q));
  });
}
function selectGlobalResult(item, q) {
  if (!item) return;
  saveGlobalRecentSearch(q || item.title);
  location.hash = item.page;
  setTimeout(() => {
    item.onSelect(q);
    resetGlobalSearchState();
    globalSearchInput?.blur();
  }, 40);
}

function setGlobalVoiceUi({listening=false, label='', transcript='' } = {}) {
  if (!globalVoiceSearchBtn || !globalSearchInput) return;
  const wrap = globalSearchInput.closest('.global-search-wrap');
  globalVoiceSearchBtn.classList.toggle('listening', Boolean(listening));
  globalVoiceSearchBtn.textContent = listening ? '●' : '🎤';
  globalVoiceSearchBtn.title = listening ? '音声入力を停止' : '音声で検索';
  if (wrap) wrap.classList.toggle('voice-active', Boolean(listening));
  if (globalVoiceStatus) globalVoiceStatus.hidden = !listening && !transcript;
  if (globalVoiceStatusLabel && label) globalVoiceStatusLabel.textContent = label;
  if (globalVoiceTranscript) {
    globalVoiceTranscript.textContent = transcript || (listening ? 'ここに話した言葉が表示されます' : '');
  }
}

function setupGlobalVoiceSearch() {
  if (!globalVoiceSearchBtn || !globalSearchInput) return;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    globalVoiceSearchBtn.disabled = true;
    globalVoiceSearchBtn.title = 'このブラウザはマイクボタン非対応です。iPhone/iPadはキーボードのマイク入力を使ってください。';
    if (globalVoiceStatusLabel) globalVoiceStatusLabel.textContent = 'このブラウザはマイクボタン非対応です。キーボードのマイク入力をご利用ください。';
    return;
  }
  globalSpeechRecognition = new SpeechRecognition();
  globalSpeechRecognition.lang = 'ja-JP';
  globalSpeechRecognition.interimResults = true;
  globalSpeechRecognition.continuous = true;
  globalSpeechRecognition.maxAlternatives = 1;

  let finalTranscript = '';
  let stopTimer = null;

  function resetStopTimer() {
    window.clearTimeout(stopTimer);
    stopTimer = window.setTimeout(() => {
      if (isGlobalVoiceListening && globalSpeechRecognition) {
        try { globalSpeechRecognition.stop(); } catch (error) {}
      }
    }, 6500);
  }

  globalSpeechRecognition.addEventListener('start', () => {
    isGlobalVoiceListening = true;
    finalTranscript = '';
    setGlobalVoiceUi({
      listening: true,
      label: '聞き取り中です。話してください',
      transcript: 'ここに話した言葉が表示されます'
    });
    globalSearchInput.focus();
    resetStopTimer();
  });

  globalSpeechRecognition.addEventListener('end', () => {
    window.clearTimeout(stopTimer);
    isGlobalVoiceListening = false;
    const currentText = (globalSearchInput.value || '').trim();
    setGlobalVoiceUi({
      listening: false,
      label: currentText ? '音声入力が完了しました' : '音声入力を終了しました',
      transcript: currentText ? `認識結果：${currentText}
タップで再検索できます` : ''
    });
    if (!currentText && globalVoiceStatus) {
      window.setTimeout(() => { if (!isGlobalVoiceListening) globalVoiceStatus.hidden = true; }, 1200);
    }
  });

  globalSpeechRecognition.addEventListener('result', event => {
    let interimTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const transcript = event.results[i][0]?.transcript || '';
      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript += transcript;
      }
    }
    const combined = `${finalTranscript}${interimTranscript}`.replace(/[。．.]$/, '').trim();
    if (!combined) return;
    globalSearchInput.value = combined;
    updateGlobalSearchClearButton();
    setGlobalVoiceUi({
      listening: true,
      label: interimTranscript ? '聞き取り中です。続けて話せます' : '認識しました。続けて話せます',
      transcript: combined
    });
    renderGlobalSearchResults();
    resetStopTimer();
  });

  globalSpeechRecognition.addEventListener('error', event => {
    const message = event.error === 'not-allowed'
      ? 'マイクの利用が許可されていません'
      : event.error === 'no-speech'
        ? '音声が聞き取れませんでした。もう一度お試しください'
        : '音声をうまく認識できませんでした';
    setGlobalVoiceUi({listening: false, label: message, transcript: globalSearchInput.value || ''});
    toast(message);
  });

  globalVoiceSearchBtn.addEventListener('click', () => {
    try {
      if (isGlobalVoiceListening) {
        globalSpeechRecognition.stop();
      } else {
        globalSpeechRecognition.start();
      }
    } catch (error) {
      toast('音声検索を開始できませんでした');
    }
  });
}

function setupGlobalSearch() {
  if (!globalSearchInput || !globalSearchResults) return;
  globalSearchInput.addEventListener('input', () => { updateGlobalSearchClearButton(); renderGlobalSearchResults(); });
  globalSearchClearBtn?.addEventListener('click', clearGlobalSearchInput);
  globalSearchInput.addEventListener('focus', () => { setGlobalSearchActive(true); renderGlobalSearchResults(); });
  globalSearchInput.addEventListener('keydown', event => {
    const buttons = Array.from(globalSearchResults.querySelectorAll('.global-result'));
    if (event.key === 'Escape') {
      globalSearchResults.hidden = true;
      return;
    }
    if (!buttons.length) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      globalSearchFocusedIndex = (globalSearchFocusedIndex + 1) % buttons.length;
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      globalSearchFocusedIndex = (globalSearchFocusedIndex - 1 + buttons.length) % buttons.length;
    } else if (event.key === 'Enter') {
      if (!globalSearchResults.hidden) {
        event.preventDefault();
        const target = buttons[Math.max(globalSearchFocusedIndex, 0)];
        target?.click();
      }
      return;
    } else {
      return;
    }
    buttons.forEach((button, index) => button.classList.toggle('focused', index === globalSearchFocusedIndex));
    buttons[globalSearchFocusedIndex]?.scrollIntoView({block:'nearest'});
  });
  $('globalSearchBackBtn')?.addEventListener('click', () => {
    resetGlobalSearchState();
    globalSearchInput?.blur();
  });
  globalVoiceTranscript?.addEventListener('click', () => {
    searchAgainFromText(globalVoiceTranscript.textContent || globalSearchInput.value);
  });
  globalVoiceTranscript?.setAttribute('role', 'button');
  globalVoiceTranscript?.setAttribute('tabindex', '0');
  document.addEventListener('click', event => {
    if (!event.target.closest('.global-search-wrap')) {
      globalSearchResults.hidden = true;
      setGlobalSearchActive(false);
    }
  });
  window.addEventListener('resize', () => {
    if (!isMobileSearchViewport()) setGlobalSearchActive(false);
  });
}


function isDailyMobileDevice() {
  return window.matchMedia('(max-width: 820px)').matches || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent || '');
}
function getDailyReportPassword() {
  return isDailyMobileDevice() ? '0388' : '+*';
}
function isDailyReportUnlocked() {
  return sessionStorage.getItem('sales-portal-daily-unlocked-v1') === 'true';
}
function setDailyReportUnlocked(value) {
  if (value) sessionStorage.setItem('sales-portal-daily-unlocked-v1', 'true');
  else sessionStorage.removeItem('sales-portal-daily-unlocked-v1');
}
function renderDailyReportLockState() {
  const panel = $('dailyLockPanel');
  const content = $('dailyProtectedContent');
  if (!panel || !content) return;
  const unlocked = isDailyReportUnlocked();
  panel.hidden = unlocked;
  content.hidden = !unlocked;
}
function setupDailyReportLock() {
  const form = $('dailyUnlockForm');
  const input = $('dailyPasswordInput');
  const msg = $('dailyLockMessage');
  if (!form || !input) return;
  renderDailyReportLockState();
  form.addEventListener('submit', event => {
    event.preventDefault();
    const value = input.value.trim();
    if (value === getDailyReportPassword()) {
      setDailyReportUnlocked(true);
      input.value = '';
      if (msg) msg.textContent = '';
      renderDailyReportLockState();
      toast('日報ロックを解除しました');
    } else {
      if (msg) msg.textContent = 'パスワードが違います。';
      input.select();
    }
  });
  window.addEventListener('resize', () => {
    // 端末種別をまたぐサイズ変更時は、安全側で再認証にします。
    if (!isDailyReportUnlocked()) renderDailyReportLockState();
  });
}




function setupInventoryManagementDetailsResponsive() {
  const details = document.querySelector('.inventory-management-details');
  if (!details) return;
  // PC/スマホどちらも初期状態は閉じる。必要な時だけユーザーが開く。
  details.removeAttribute('open');
  const mq = window.matchMedia('(max-width: 720px)');
  const apply = () => details.removeAttribute('open');
  if (mq.addEventListener) mq.addEventListener('change', apply);
  else mq.addListener(apply);
}

function setupQuickScrollControls() {
  const topBtn = $('quickScrollTopBtn');
  const bottomBtn = $('quickScrollBottomBtn');
  const wrapper = document.querySelector('.quick-scroll');
  if (!topBtn || !bottomBtn || !wrapper) return;

  function getActiveSection() {
    return document.querySelector('.page-section.active') || document.querySelector('main');
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToBottom() {
    const active = getActiveSection();
    const rect = active.getBoundingClientRect();
    const target = Math.max(0, window.scrollY + rect.bottom - window.innerHeight + 24);
    window.scrollTo({ top: target, behavior: 'smooth' });
  }

  function updateVisibility() {
    const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    const canScroll = docHeight > window.innerHeight + 180;
    wrapper.classList.toggle('is-hidden', !canScroll);
  }

  topBtn.addEventListener('click', scrollToTop);
  bottomBtn.addEventListener('click', scrollToBottom);
  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility);
  window.addEventListener('hashchange', () => window.setTimeout(updateVisibility, 120));
  window.setTimeout(updateVisibility, 250);
}


function applyMainNavOrder() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  mainNavOrder = normalizeMainNavOrder(mainNavOrder);
  const linkMap = new Map();
  nav.querySelectorAll('a[href^="#"]').forEach(link => {
    const id = link.getAttribute('href').replace('#', '');
    linkMap.set(id, link);
  });
  mainNavOrder.forEach(id => {
    const link = linkMap.get(id);
    if (link) nav.appendChild(link);
  });
}


function companyAddressText(item) {
  return [
    item.name,
    item.postal,
    item.address,
    item.contact ? `担当 ${item.contact}` : '',
    item.tel ? `TEL ${item.tel}` : '',
    item.fax ? `FAX ${item.fax}` : ''
  ].filter(Boolean).join('\n');
}
function companySmsText(item, purpose='visit') {
  const title = purpose === 'delivery' ? '納品先住所' : '来社先住所';
  return `${title}
${companyAddressText(item)}

Googleマップ
${companyMapUrl(item)}`;
}
function companyMailText(item, purpose='visit') {
  const title = purpose === 'delivery' ? '納品先住所' : '来社先住所';
  return `お世話になっております。

${title}を下記にご案内いたします。

${companyAddressText(item)}

Googleマップ：
${companyMapUrl(item)}
${item.officialUrl ? `
会社情報：
${item.officialUrl}
` : ''}
よろしくお願いいたします。`;
}
function companyMapUrl(item) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${item.name} ${item.address}`)}`;
}
function renderCompanyInfo() {
  const grid = $('companyInfoGrid');
  if (!grid) return;
  grid.innerHTML = defaultCompanyInfo.map(item => `
    <article class="card company-info-card">
      <div class="badge-row"><span class="badge">会社情報</span><span class="badge audience">${escapeHtml(item.label)}</span></div>
      <h3>${escapeHtml(item.name)}</h3>
      <p class="company-address">${item.postal ? `${escapeHtml(item.postal)}<br>` : ''}${escapeHtml(item.address)}</p>
      ${item.contact ? `<p class="memo">担当：${escapeHtml(item.contact)}</p>` : ''}
      <p class="memo">TEL：${escapeHtml(item.tel || '-')} ${item.fax ? ` / FAX：${escapeHtml(item.fax)}` : ''}</p>
      <div class="card-actions company-actions">
        <button class="secondary" type="button" onclick="copyCompanySms('${item.id}', 'visit')">来社SMSコピー</button>
        <button class="secondary" type="button" onclick="copyCompanySms('${item.id}', 'delivery')">納品SMSコピー</button>
        <button class="secondary" type="button" onclick="copyCompanyMail('${item.id}', 'visit')">来社メールコピー</button>
        <button class="secondary" type="button" onclick="copyCompanyMail('${item.id}', 'delivery')">納品メールコピー</button>
        <button class="ghost" type="button" onclick="openCompanySms('${item.id}', 'visit')">SMS作成</button>
        <button class="ghost" type="button" onclick="openCompanyMail('${item.id}', 'visit')">Outlook作成</button>
        ${item.officialUrl ? `<a class="ghost" href="${escapeAttr(item.officialUrl)}" target="_blank" rel="noreferrer">公式会社情報</a>` : ''}
      </div>
    </article>
  `).join('');
}
function findCompanyInfo(id) { return defaultCompanyInfo.find(x => x.id === id); }
window.copyCompanyAddress = id => { const item = findCompanyInfo(id); if (item) copyText(`${item.name}\n${item.postal}\n${item.address}`, '住所'); };
window.copyCompanyTel = id => { const item = findCompanyInfo(id); if (item) copyText(item.tel || '', 'TEL'); };
window.copyCompanySms = (id, purpose='visit') => { const item = findCompanyInfo(id); if (item) copyText(companySmsText(item, purpose), 'SMS文面'); };
window.copyCompanyMail = (id, purpose='visit') => { const item = findCompanyInfo(id); if (item) copyText(companyMailText(item, purpose), 'メール文面'); };
window.openCompanySms = (id, purpose='visit') => { const item = findCompanyInfo(id); if (item) window.location.href = `sms:?&body=${encodeURIComponent(companySmsText(item, purpose))}`; };

window.openCompanyMail = (id, purpose='visit') => {
  const item = findCompanyInfo(id);
  if (!item) return;
  const title = purpose === 'delivery' ? '納品先住所' : '来社先住所';
  const subject = `${title}のご案内`;
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(companyMailText(item, purpose))}`;
};

function renderMainNavOrderAdmin() {
  const list = $('mainNavOrderList');
  if (!list) return;
  mainNavOrder = normalizeMainNavOrder(mainNavOrder);
  list.innerHTML = mainNavOrder.map((id, index) => {
    const label = mainNavLabelMap[id] || id;
    return `<div class="nav-order-row">
      <div><span class="nav-order-number">${index + 1}</span><strong>${escapeHtml(label)}</strong><span class="small-note">#${escapeHtml(id)}</span></div>
      <div class="nav-order-actions">
        <button class="ghost compact" type="button" onclick="moveMainNavItem('${id}', -1)" ${index === 0 ? 'disabled' : ''}>↑</button>
        <button class="ghost compact" type="button" onclick="moveMainNavItem('${id}', 1)" ${index === mainNavOrder.length - 1 ? 'disabled' : ''}>↓</button>
      </div>
    </div>`;
  }).join('');
}

window.moveMainNavItem = function(id, direction) {
  const index = mainNavOrder.indexOf(id);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= mainNavOrder.length) return;
  const next = [...mainNavOrder];
  [next[index], next[nextIndex]] = [next[nextIndex], next[index]];
  mainNavOrder = normalizeMainNavOrder(next);
  saveMainNavOrder({sync:true, silent:true});
  applyMainNavOrder();
  showPageFromHash();
  renderMainNavOrderAdmin();
  toast('メニュー順を更新しました');
};

window.resetMainNavOrder = function() {
  if (!confirm('メインメニューの順番を初期状態に戻しますか？')) return;
  mainNavOrder = [...defaultMainNavOrder];
  saveMainNavOrder({sync:true, silent:true});
  applyMainNavOrder();
  showPageFromHash();
  renderMainNavOrderAdmin();
  toast('メニュー順を初期状態に戻しました');
};


// LUFAS quick calculator: Lydia Works fabric sign estimate support.
const lufasFrameTypes = [
  {name:'S20', label:'S20', quoteCode:'LUFAS/S20', unit:2250, corner:780*4},
  {name:'SD45', label:'SD45', quoteCode:'LUFAS/SD45', unit:2730, corner:780*4},
  {name:'S75', label:'S75', quoteCode:'LUFAS/S75', unit:4080, corner:780*4},
  {name:'SD100', label:'SD100', quoteCode:'LUFAS/SD100', unit:4990, corner:780*4},
  {name:'D100', label:'D100', quoteCode:'LUFAS/D100', unit:4600, corner:780*8}
];
let selectedLufasFrame = 'SD45';
const lufasStandOptions = [
  {name:'600スタンド', price:43790},
  {name:'900スタンド', price:50070},
  {name:'T型/L型スタンド', price:17350},
  {name:'フラットベース', price:5630}
];
function yen(value) {
  const n = Number(value) || 0;
  return n.toLocaleString('ja-JP');
}
function roundupTo(value, digit=-1) {
  const factor = Math.pow(10, -digit);
  return Math.ceil((Number(value) || 0) / factor) * factor;
}
function getLufasInputs() {
  const width = Math.max(0, Number($('lufasWidthInput')?.value || 0));
  const height = Math.max(0, Number($('lufasHeightInput')?.value || 0));
  const splitW = Math.max(1, Math.floor(Number($('lufasSplitWInput')?.value || 1)));
  const splitH = Math.max(1, Math.floor(Number($('lufasSplitHInput')?.value || 1)));
  return {width, height, splitW, splitH};
}
function calcLufasRows() {
  const {width, height, splitW, splitH} = getLufasInputs();
  const jointCount = Math.max(0, ((splitW - 1) * 2) + ((splitH - 1) * 2));
  const fabric = roundupTo(width * height / 1000000 * 11000, -1);
  const splitCut = (splitW + splitH) * 2 * 2 * 1000;
  const straightParts = jointCount * 780;
  const rows = lufasFrameTypes.map(item => {
    const frameMetal = roundupTo(item.unit * (width + height) / 500, -1) + item.corner;
    const noSplitTotal = frameMetal + 8000;
    const splitTotal = frameMetal + straightParts + splitCut;
    return {...item, frameMetal, noSplitCut:8000, splitCut, straightParts, noSplitTotal, splitTotal};
  });
  return {width, height, splitW, splitH, jointCount, fabric, splitCut, straightParts, rows};
}
function renderLufasCalc() {
  const output = $('lufasCalcResult');
  const summary = $('lufasCalcSummary');
  const copyBtn = $('copyLufasCalcBtn');
  if (!output || !summary) return;
  const data = calcLufasRows();
  summary.innerHTML = `
    <div class="lufas-summary-item"><span>メーカー</span><strong>リディアワークス</strong></div>
    <div class="lufas-summary-item"><span>製品</span><strong>ファブリックサイン / LUFAS</strong></div>
    <div class="lufas-summary-item"><span>サイズ</span><strong>W${yen(data.width)} × H${yen(data.height)}mm</strong></div>
    <div class="lufas-summary-item"><span>分割数</span><strong>W${data.splitW} / H${data.splitH}</strong></div>
    <div class="lufas-summary-item"><span>ストレート金具</span><strong>${data.jointCount}個</strong></div>
    <div class="lufas-summary-item"><span>ファブリック</span><strong>¥${yen(data.fabric)}</strong></div>`;
  output.innerHTML = `
    <div class="lufas-result-block">
      <div class="lufas-table-wrap">
        <table class="lufas-table">
          <colgroup><col class="lufas-col-select"><col class="lufas-col-frame"><col><col><col></colgroup>
          <thead><tr><th class="lufas-select-head">選択</th><th>フレーム</th><th>フレーム+金具</th><th>分割なし</th><th>分割あり</th></tr></thead>
          <tbody>${data.rows.map(row => `<tr class="${row.name===selectedLufasFrame?'is-selected':''}"><td class="lufas-select-cell"><label class="lufas-frame-choice" title="${escapeHtml(row.label)}を見積書へ貼り付け"><input type="radio" name="lufasFrameChoice" value="${escapeHtml(row.name)}" ${row.name===selectedLufasFrame?'checked':''}><span aria-hidden="true">✓</span></label></td><td><strong>${escapeHtml(row.label)}</strong></td><td>¥${yen(row.frameMetal)}</td><td>¥${yen(row.noSplitTotal)}</td><td>¥${yen(row.splitTotal)}</td></tr>`).join('')}</tbody>
        </table>
      </div>
      <div class="lufas-price-cards">
        ${data.rows.map(row => `<div class="lufas-price-card ${row.name===selectedLufasFrame?'is-selected':''}"><div class="lufas-card-head"><label class="lufas-frame-choice" title="${escapeHtml(row.label)}を見積書へ貼り付け"><input type="radio" name="lufasFrameChoiceCard" value="${escapeHtml(row.name)}" ${row.name===selectedLufasFrame?'checked':''}><span aria-hidden="true">✓</span></label><h3>${escapeHtml(row.label)}</h3></div><dl><div><dt>フレーム+金具</dt><dd>¥${yen(row.frameMetal)}</dd></div><div><dt>分割なし</dt><dd>¥${yen(row.noSplitTotal)}</dd></div><div><dt>分割あり</dt><dd>¥${yen(row.splitTotal)}</dd></div></dl></div>`).join('')}
      </div>
    </div>
    <div class="lufas-stand-grid">
      ${lufasStandOptions.map(item => `<div class="lufas-stand-card"><span>${escapeHtml(item.name)}</span><strong>¥${yen(item.price)}</strong></div>`).join('')}
    </div>`;
  output.querySelectorAll('input[type="radio"][value]').forEach(input => {
    input.addEventListener('change', event => {
      selectedLufasFrame = String(event.currentTarget.value || '');
      renderLufasCalc();
    });
  });
  if (copyBtn) copyBtn.onclick = () => copyText(getLufasCopyText(), 'ルーファス簡易計算結果');
  const quoteBtn = $('copyLufasQuoteBtn');
  if (quoteBtn) quoteBtn.onclick = copyLufasQuote;
}

function cleanLufasQuoteValue(value) {
  return String(value ?? '').replace(/[\r\n,]/g, ' ').trim();
}
function getSelectedLufasFrameRow() {
  const data = calcLufasRows();
  return {data, row:data.rows.find(item => item.name === selectedLufasFrame) || null};
}
function getLufasQuoteText() {
  const {data, row} = getSelectedLufasFrameRow();
  if (!row || !data.width || !data.height) return '';
  const size = `W${Math.round(data.width)}×H${Math.round(data.height)}`;
  // The company quote workbook's existing quote() macro accepts exactly
  // three values per row: product name, product code and quantity.
  // Quantity is fixed to 1 for both rows.
  const items = [
    [`LUFAS フレーム ${size}`, row.name, '1'],
    ['ファブリック', size, '1']
  ];
  return '*****,' + items.flatMap(item => item.map(cleanLufasQuoteValue)).join(',');
}
async function copyLufasQuote() {
  const text = getLufasQuoteText();
  if (!selectedLufasFrame) { alert('見積書へ貼り付けるフレームを選択してください。'); return; }
  if (!text) { alert('フレームW・Hを入力してください。'); return; }
  try {
    await navigator.clipboard.writeText(text);
    alert('見積もりフォーマット貼り付け用テキストをコピーしました。\n見積書の商品名セルを選択し、SB概算反映ボタンを押してください。');
  } catch (_) {
    copyText(text, '見積もりフォーマット貼り付け用テキスト');
  }
}

function getLufasCopyText() {
  const data = calcLufasRows();
  const lines = [
    'ルーファス簡易計算',
    'メーカー：リディアワークス',
    '製品：ファブリックサイン / LUFAS',
    `サイズ：W${data.width} × H${data.height}mm`,
    `分割数：W${data.splitW} / H${data.splitH}`,
    `ストレート金具：${data.jointCount}個`,
    `ファブリック：¥${yen(data.fabric)}`,
    '',
    '【フレーム概算】',
    ...data.rows.map(row => `${row.label}：分割なし ¥${yen(row.noSplitTotal)} / 分割あり ¥${yen(row.splitTotal)}`),
    '',
    '【スタンド】',
    ...lufasStandOptions.map(item => `${item.name}：¥${yen(item.price)}`),
    '',
    '※営業ポータル内の簡易計算です。正式見積はメーカー資料・最新単価を確認してください。'
  ];
  return lines.join('\n');
}
function setupLufasCalc() {
  ['lufasWidthInput','lufasHeightInput','lufasSplitWInput','lufasSplitHInput'].forEach(id => {
    $(id)?.addEventListener('input', renderLufasCalc);
  });
  $('resetLufasCalcBtn')?.addEventListener('click', () => {
    if ($('lufasWidthInput')) $('lufasWidthInput').value = 1000;
    if ($('lufasHeightInput')) $('lufasHeightInput').value = 2000;
    if ($('lufasSplitWInput')) $('lufasSplitWInput').value = 1;
    if ($('lufasSplitHInput')) $('lufasSplitHInput').value = 1;
    renderLufasCalc();
  });
  renderLufasCalc();
}


// Self product capacity calculator.
const selfCapacityProducts = [
  {name:'スターライトⅣ', watt:2.35, unit:'球', note:'AC100V'},
  {name:'スターライトミニⅡ', watt:1.04, unit:'球', note:'AC100V'},
  {name:'スターライトデュオⅣ', watt:0.82, unit:'球', note:'AC100V'},
  {name:'ペンタワイドⅣCC', watt:2.10, unit:'球', note:'定電流700mA'},
  {name:'ペンタライトELP CC', watt:2.10, unit:'球', note:'定電流700mA'},
  {name:'ペンタワイドⅤCV-S', watt:2.20, unit:'球', note:'DC24V', powerCalc:true, powerLimits:{'WKLVZ240-6R3HJ':61, 'LP1026-24':9}},
  {name:'ペンタワイドⅣCV-H', watt:1.05, unit:'球', note:'DC24V', powerCalc:true, powerLimits:{'WKLVZ240-6R3HJ':128, 'LP1026-24':20}},
  {name:'ペンタワイドⅣCV-L', watt:0.35, unit:'球', note:'DC24V', powerCalc:true, powerLimits:{'WKLVZ240-6R3HJ':385, 'LP1026-24':60}},
  {name:'デュオスリムⅡ', watt:0.84, unit:'球', note:'DC24V', powerCalc:true, powerLimits:{'WKLVZ240-6R3HJ':160, 'LP1026-24':25}},
  {name:'モノミニⅡ', watt:0.24, unit:'球', note:'DC24V', powerCalc:true, powerLimits:{'WKLVZ240-6R3HJ':562, 'LP1026-24':87}},
  {name:'ジェム', watt:0.96, unit:'球', note:'DC24V', powerCalc:true, powerLimits:{'WKLVZ240-6R3HJ':140, 'LP1026-24':21}},
  {name:'ジェムミニ', watt:0.24, unit:'球', note:'DC24V', powerCalc:true, powerLimits:{'WKLVZ240-6R3HJ':562, 'LP1026-24':87}},
  {name:'ペンタワイドTN', watt:4.80, unit:'球', note:'DC24V / 5000K+2200K全灯', powerCalc:true, powerLimits:{'WKLVZ240-6R3HJ':28}},
  {name:'RGBトリオ', watt:0.72, unit:'球', note:'DC12V / 白色100%駆動時'},
  {name:'RGBグランデ', watt:1.44, unit:'球', note:'DC24V / 白色100%駆動時'},
  {name:'RGBトリオIC', watt:0.72, unit:'球', note:'DC12V / 白色100%駆動時'},
  {name:'RGBグランデIC', watt:1.44, unit:'球', note:'DC24V / 白色100%駆動時'},
  {name:'デュオスリムⅡ 赤・緑・青', watt:0.60, unit:'球', note:'DC12V'},

  // リニアタイプ（長さ別本数入力）。既存モジュール計算とは分離して処理します。
  {name:'シームレスビーム', unit:'本', note:'DC24V / 5000K・3000K', linear:true, variants:['5000K','3000K'], maxLoadW:135, lengths:[['L1200',15.32],['L900',11.49],['L600',7.66],['L300',3.83],['L160',2.19]]},
  {name:'シームレスビームTN', unit:'本', note:'DC24V / 5000K+2200K全灯', linear:true, maxLoadW:135, lengths:[['L1200',15.44],['L900',11.58],['L600',7.72],['L300',3.86]]},
  {name:'シームレスビームRGB', unit:'本', note:'DC24V / 白色100%点灯時', linear:true, rgb:true, maxLoadW:135, lengths:[['L1200',17.28],['L900',12.96],['L600',8.64],['L300',4.32]]},
  {name:'シームレスビームRGBW IC', unit:'本', note:'DC24V / 白色100%点灯時', linear:true, rgb:true, maxLoadW:135, lengths:[['L1200',22.40],['L900',17.31],['L600',11.20],['L300',5.09]]},
  {name:'グローチューブⅥ', unit:'本', note:'DC24V / 5000K・3000K', linear:true, variants:['5000K','3000K'], maxLoadW:135, lengths:[['L1200',33.60],['L900',25.20],['L600',16.80]]},
  {name:'グローチューブⅥ TN', unit:'本', note:'DC24V / 5000K+2200K全灯', linear:true, maxLoadW:135, lengths:[['L1200',31.68],['L900',23.76],['L600',15.84]]},
  {name:'グローチューブⅥ RGB', unit:'本', note:'DC24V / 白色100%点灯時', linear:true, rgb:true, maxLoadW:135, lengths:[['L1200',31.68],['L900',23.76],['L600',15.84]]}
];
const selfCapacityPowerSupplies = [
  {name:'WKLVZ240-6R3HJ', label:'WKLVZ240-6R3HJ（標準）'},
  {name:'LP1026-24', label:'LP1026-24'}
];
function formatCalcNumber(value, maxDigits=2) {
  const n = Number(value) || 0;
  return n.toLocaleString('ja-JP', {maximumFractionDigits:maxDigits});
}
function ceilToOneDecimal(value) {
  return Math.ceil((Number(value) || 0) * 10) / 10;
}
function floorToDigits(value, digits=1) {
  const factor = Math.pow(10, digits);
  return Math.floor((Number(value) || 0) * factor) / factor;
}
function formatPowerRaw(value) {
  const n = Number(value) || 0;
  if (Number.isInteger(n)) return formatCalcNumber(n, 0);
  return n.toLocaleString('ja-JP', {maximumFractionDigits:2});
}
function getSelfCapacityProduct() {
  const select = $('selfCapacityProductSelect');
  return selfCapacityProducts.find(x => x.name === select?.value) || selfCapacityProducts[0];
}
function getSelfCapacitySupportedPowerSupplies(product=getSelfCapacityProduct()) {
  if (product?.linear) return selfCapacityPowerSupplies.filter(item => item.name === 'WKLVZ240-6R3HJ');
  if (!product?.powerCalc || !product.powerLimits) return [];
  return selfCapacityPowerSupplies.filter(item => Number(product.powerLimits[item.name] || 0) > 0);
}
function refreshSelfCapacityPowerOptions(product=getSelfCapacityProduct()) {
  const powerSelect = $('selfCapacityPowerSelect');
  if (!powerSelect) return null;
  const supported = getSelfCapacitySupportedPowerSupplies(product);
  const current = powerSelect.value;
  const options = supported.length ? supported : selfCapacityPowerSupplies;
  powerSelect.innerHTML = options.map(item => `<option value="${escapeAttr(item.name)}">${escapeHtml(item.label)}</option>`).join('');
  if (supported.some(item => item.name === current)) powerSelect.value = current;
  else if (supported.some(item => item.name === 'WKLVZ240-6R3HJ')) powerSelect.value = 'WKLVZ240-6R3HJ';
  else if (options[0]) powerSelect.value = options[0].name;
  return powerSelect.value;
}
function getSelfCapacityPowerSupply() {
  const product = getSelfCapacityProduct();
  const select = $('selfCapacityPowerSelect');
  const supported = getSelfCapacitySupportedPowerSupplies(product);
  const pool = supported.length ? supported : selfCapacityPowerSupplies;
  return pool.find(x => x.name === select?.value) || pool[0] || selfCapacityPowerSupplies[0];
}
function calcPowerSupplyCount(quantity, product, powerSupply) {
  const maxCount = Number(product?.powerLimits?.[powerSupply?.name] || 0);
  const raw = maxCount ? (Number(quantity) || 0) / maxCount : 0;
  return {raw, count: Math.ceil(raw), maxCount};
}
function renderSelfCapacityLengthInputs(product=getSelfCapacityProduct()) {
  const wrap = $('selfCapacityLengthInputs');
  const qtyLabel = $('selfCapacityQtyLabel');
  const variantLabel = $('selfCapacityVariantLabel');
  const variantSelect = $('selfCapacityVariantSelect');
  if (!wrap) return;
  const isLinear = Boolean(product?.linear);
  wrap.hidden = !isLinear;
  if (qtyLabel) qtyLabel.hidden = isLinear;
  if (variantLabel) variantLabel.hidden = !(isLinear && product.variants?.length);
  if (variantSelect && isLinear && product.variants?.length) {
    const current = variantSelect.value;
    variantSelect.innerHTML = product.variants.map(v => `<option value="${escapeAttr(v)}">${escapeHtml(v)}</option>`).join('');
    if (product.variants.includes(current)) variantSelect.value = current;
  }
  if (!isLinear) { wrap.innerHTML = ''; return; }
  const previous = Object.fromEntries([...wrap.querySelectorAll('input[data-length]')].map(input => [input.dataset.length, input.value]));
  wrap.innerHTML = `<div class="self-capacity-length-head"><strong>サイズ別本数</strong><span>各サイズの本数を入力してください</span></div><div class="self-capacity-length-grid">${product.lengths.map(([label,watt]) => `<label><span>${escapeHtml(label)}<small>${formatCalcNumber(watt,2)}W／本</small></span><input type="number" min="0" step="1" inputmode="numeric" value="${escapeAttr(previous[label] || '')}" placeholder="本数" data-length="${escapeAttr(label)}" /></label>`).join('')}</div>`;
  wrap.querySelectorAll('input').forEach(input => input.addEventListener('input', renderSelfCapacityCalc));
}
function getLinearEntries(product) {
  const wrap = $('selfCapacityLengthInputs');
  return (product.lengths || []).map(([label,watt]) => {
    const input = wrap?.querySelector(`input[data-length="${CSS.escape(label)}"]`);
    const quantity = Math.max(0, Math.floor(Number(input?.value || 0)));
    return {label, watt:Number(watt), quantity, subtotal:Number(watt) * quantity};
  });
}
function calcSelfCapacity() {
  const product = getSelfCapacityProduct();
  const powerSupply = getSelfCapacityPowerSupply();
  if (product.linear) {
    const entries = getLinearEntries(product);
    const quantity = entries.reduce((sum,row) => sum + row.quantity, 0);
    const totalW = entries.reduce((sum,row) => sum + row.subtotal, 0);
    const va = ceilToOneDecimal(totalW / 0.8);
    const amp100 = Math.round((va / 100) * 100) / 100;
    const amp200 = Math.round((va / 200) * 100) / 100;
    const raw = totalW / Number(product.maxLoadW || 135);
    const powerCount = {raw, count:Math.ceil(raw), maxW:Number(product.maxLoadW || 135)};
    const variant = product.variants?.length ? ($('selfCapacityVariantSelect')?.value || product.variants[0]) : '';
    return {product, quantity, entries, totalW, va, amp100, amp200, powerSupply, powerCount, variant};
  }
  const quantity = Math.max(0, Math.floor(Number($('selfCapacityQtyInput')?.value || 0)));
  const totalW = product.watt * quantity;
  const va = ceilToOneDecimal(totalW / 0.8);
  const amp100 = floorToDigits(va / 100, 1);
  const amp200 = floorToDigits(va / 200, 2);
  const powerCount = product.powerCalc ? calcPowerSupplyCount(quantity, product, powerSupply) : null;
  return {product, quantity, totalW, va, amp100, amp200, powerSupply, powerCount, entries:[], variant:''};
}
function hasSelfCapacityInput(data=calcSelfCapacity()) {
  return data.product.linear ? data.entries.some(row => row.quantity > 0) : data.quantity > 0;
}
function getSelfCapacityResultLines() {
  const data = calcSelfCapacity();
  if (data.product.linear) {
    const detail = data.entries.filter(row => row.quantity > 0).map(row => `${row.label}：${formatCalcNumber(row.watt,2)}W×${formatCalcNumber(row.quantity,0)}本＝${formatCalcNumber(row.subtotal,2)}W`);
    return [
      ...detail,
      `合計本数：${formatCalcNumber(data.quantity,0)}本`,
      `総消費電力：${formatCalcNumber(data.totalW,2)}W`,
      `${formatCalcNumber(data.totalW,2)}W÷0.8＝${formatCalcNumber(data.va,1)}VA`,
      `${formatCalcNumber(data.va,1)}VA÷100V＝${formatCalcNumber(data.amp100,2)}A`,
      `${formatCalcNumber(data.va,1)}VA÷200V＝${formatCalcNumber(data.amp200,2)}A`
    ];
  }
  const unit = data.product.unit || '個';
  return [
    `${formatCalcNumber(data.product.watt, 2)}W×${formatCalcNumber(data.quantity, 0)}${unit}＝${formatCalcNumber(data.totalW, 2)}W`,
    `${formatCalcNumber(data.va, 1)}VA÷100V=${formatCalcNumber(data.amp100, 1)}A`,
    `${formatCalcNumber(data.va, 1)}VA÷200V=${formatCalcNumber(data.amp200, 2)}A`
  ];
}
function getSelfCapacityCustomerPowerLine(data) {
  if (data.product.linear) return `電源台数目安：WKLVZ240-6R3HJ ${data.powerCount.count}台`;
  if (!data.product.powerCalc || !data.powerCount) return '';
  return `電源台数目安：${data.powerSupply.name} ${data.powerCount.count}台`;
}
function getSelfCapacityCopyText(mode='plain') {
  const data = calcSelfCapacity();
  if (!hasSelfCapacityInput(data)) return '';
  const lines = getSelfCapacityResultLines();
  const powerLine = getSelfCapacityCustomerPowerLine(data);
  const productLabel = `${data.product.name}${data.variant ? ` ${data.variant}` : ''}`;
  const resultLines = powerLine ? [...lines, powerLine] : lines;
  if (mode === 'mail') return `お世話になっております。\n\n容量計算結果を下記にご案内いたします。\n\n${productLabel}\n${resultLines.join('\n')}\n\n※簡易計算です。最終選定は仕様・電源条件をご確認ください。\n\nよろしくお願いいたします。`;
  if (mode === 'sms') return `容量計算結果です。\n${productLabel}\n${resultLines.join('\n')}\n※簡易計算です。`;
  return `${productLabel}\n${resultLines.join('\n')}`;
}
function ensureSelfCapacityPowerSelect() {
  const productSelect = $('selfCapacityProductSelect');
  const qtyInput = $('selfCapacityQtyInput');
  if (!$('selfCapacityPowerSelect') && productSelect && qtyInput?.parentElement) {
    const label = document.createElement('label');
    label.id = 'selfCapacityPowerLabel';
    label.innerHTML = '電源<select id="selfCapacityPowerSelect"></select>';
    qtyInput.parentElement.insertAdjacentElement('afterend', label);
  }
  const powerSelect = $('selfCapacityPowerSelect');
  if (powerSelect && !powerSelect.dataset.ready) { powerSelect.dataset.ready = '1'; refreshSelfCapacityPowerOptions(); }
}
function renderSelfCapacityCalc() {
  ensureSelfCapacityPowerSelect();
  const productSelect = $('selfCapacityProductSelect');
  const output = $('selfCapacityResult');
  const meta = $('selfCapacityMeta');
  const powerLabel = $('selfCapacityPowerLabel');
  const powerSelect = $('selfCapacityPowerSelect');
  if (!productSelect || !output) return;
  if (!productSelect.dataset.ready) {
    productSelect.innerHTML = selfCapacityProducts.map(item => `<option value="${escapeAttr(item.name)}">${escapeHtml(item.name)}</option>`).join('');
    productSelect.dataset.ready = '1';
  }
  const product = getSelfCapacityProduct();
  if ($('selfCapacityLengthInputs')?.dataset.product !== product.name) {
    renderSelfCapacityLengthInputs(product);
    if ($('selfCapacityLengthInputs')) $('selfCapacityLengthInputs').dataset.product = product.name;
  }
  refreshSelfCapacityPowerOptions(product);
  const data = calcSelfCapacity();
  const lines = getSelfCapacityResultLines();
  const hasPower = Boolean(data.product.linear || data.product.powerCalc);
  const hasInput = hasSelfCapacityInput(data);
  if (powerLabel) powerLabel.hidden = !hasPower;
  if (powerSelect) powerSelect.disabled = !hasPower || data.product.linear;
  if (meta) {
    const productName = `${data.product.name}${data.variant ? ` ${data.variant}` : ''}`;
    const wattMeta = hasInput ? (data.product.linear ? `${formatCalcNumber(data.totalW,2)}W（合計）` : `${formatCalcNumber(data.product.watt,2)}W / ${data.product.unit || '個'}`) : '数量を入力してください';
    const powerMeta = hasPower && hasInput ? `<div class="lufas-summary-item"><span>電源台数目安</span><strong>${escapeHtml(data.powerSupply.name)} ${data.powerCount.count}台</strong></div>` : '';
    meta.innerHTML = `<div class="lufas-summary-item"><span>選択製品</span><strong>${escapeHtml(productName)}</strong></div><div class="lufas-summary-item"><span>消費電力</span><strong>${escapeHtml(wattMeta)}</strong></div><div class="lufas-summary-item"><span>備考</span><strong>${escapeHtml(data.product.note || '簡易計算')}</strong></div>${powerMeta}`;
  }
  if (!hasInput) {
    output.innerHTML = `<div class="self-capacity-result-card self-capacity-empty"><h3>計算結果</h3><p>数量を入力してください。</p></div>`;
    return;
  }
  let powerHtml = '';
  if (data.product.linear) powerHtml = `<div class="self-capacity-result-line self-capacity-power-line">WKLVZ240-6R3HJ：${formatCalcNumber(data.totalW,2)}W÷${formatCalcNumber(data.powerCount.maxW,0)}W＝${formatPowerRaw(data.powerCount.raw)}台 → ${data.powerCount.count}台</div>`;
  else if (data.product.powerCalc && data.powerCount) powerHtml = `<div class="self-capacity-result-line self-capacity-power-line">${escapeHtml(data.powerSupply.name)}：${formatCalcNumber(data.quantity,0)}${escapeHtml(data.product.unit || '個')}÷${formatCalcNumber(data.powerCount.maxCount,0)}${escapeHtml(data.product.unit || '個')}＝${formatPowerRaw(data.powerCount.raw)}台 → ${data.powerCount.count}台</div>`;
  const rgbNote = data.product.rgb ? '<p class="small-note self-capacity-warning">※RGB系は電源台数に加えて、使用する受信器の最大電流も必ず確認してください。</p>' : '';
  output.innerHTML = `<div class="self-capacity-result-card"><h3>計算結果</h3>${lines.map(line => `<div class="self-capacity-result-line">${escapeHtml(line)}</div>`).join('')}${powerHtml}${rgbNote}<p class="small-note">※総消費電力÷0.8でVAを算出し、VAは小数第1位で繰り上げています。リニア製品のWK電源台数は総消費電力÷135Wで算出し、小数点が出た場合は必ず繰り上げています。配線長・系統分け・調光器・施工条件は別途確認してください。</p></div>`;
}
function setupSelfCapacityCalc() {
  ensureSelfCapacityPowerSelect();
  const productSelect = $('selfCapacityProductSelect');
  const powerSelect = $('selfCapacityPowerSelect');
  if (productSelect && !productSelect.dataset.ready) {
    productSelect.innerHTML = selfCapacityProducts.map(item => `<option value="${escapeAttr(item.name)}">${escapeHtml(item.name)}</option>`).join('');
    productSelect.dataset.ready = '1';
  }
  if (powerSelect && !powerSelect.dataset.ready) {
    powerSelect.innerHTML = selfCapacityPowerSupplies.map(item => `<option value="${escapeAttr(item.name)}">${escapeHtml(item.label)}</option>`).join('');
    powerSelect.value = 'WKLVZ240-6R3HJ'; powerSelect.dataset.ready = '1';
  }
  $('selfCapacityProductSelect')?.addEventListener('change', () => {
    const wrap = $('selfCapacityLengthInputs');
    if (wrap) wrap.dataset.product = '';
    renderSelfCapacityCalc();
  });
  ['selfCapacityQtyInput','selfCapacityPowerSelect','selfCapacityVariantSelect'].forEach(id => { const el=$(id); el?.addEventListener('input', renderSelfCapacityCalc); el?.addEventListener('change', renderSelfCapacityCalc); });
  $('copySelfCapacityBtn')?.addEventListener('click', () => { const text = getSelfCapacityCopyText('plain'); if (!text) { toast('数量を入力してください'); return; } copyText(text, '容量計算結果'); });
  $('copySelfCapacitySmsBtn')?.addEventListener('click', () => { const text = getSelfCapacityCopyText('sms'); if (!text) { toast('数量を入力してください'); return; } copyText(text, 'SMS文面'); });
  $('copySelfCapacityMailBtn')?.addEventListener('click', () => { const text = getSelfCapacityCopyText('mail'); if (!text) { toast('数量を入力してください'); return; } copyText(text, 'メール文面'); });
  $('openSelfCapacitySmsBtn')?.addEventListener('click', () => { const text = getSelfCapacityCopyText('sms'); if (!text) { toast('数量を入力してください'); return; } window.location.href = `sms:?&body=${encodeURIComponent(text)}`; });
  $('openSelfCapacityMailBtn')?.addEventListener('click', () => {
    const data = calcSelfCapacity();
    const text = getSelfCapacityCopyText('mail');
    if (!text) { toast('数量を入力してください'); return; }
    window.location.href = `mailto:?subject=${encodeURIComponent(`容量計算結果：${data.product.name}`)}&body=${encodeURIComponent(text)}`;
  });
  $('resetSelfCapacityBtn')?.addEventListener('click', () => {
    if ($('selfCapacityProductSelect')) $('selfCapacityProductSelect').selectedIndex = 0;
    if ($('selfCapacityQtyInput')) $('selfCapacityQtyInput').value = '';
    if ($('selfCapacityPowerSelect')) $('selfCapacityPowerSelect').value = 'WKLVZ240-6R3HJ';
    const wrap = $('selfCapacityLengthInputs'); if (wrap) { wrap.dataset.product = ''; wrap.innerHTML = ''; }
    renderSelfCapacityCalc();
  });
  renderSelfCapacityCalc();
}



// =====================================================
// 価格表（共通パスワード + Supabase RPC）
// =====================================================
const priceTableSessionKey = 'sales-portal-price-access-v1';
const priceSignRanks = [
  ['S','price_s'], ['A','price_a'], ['B','price_b'], ['C','price_c'],
  ['D','price_d'], ['E','price_e'], ['F','price_f'],
  ['ウチノ','price_uchino'], ['サインハーツ','price_signhearts'],
  ['ニップ','price_nipp'], ['ブンカ','price_bunka']
];
const priceBuildingRanks = [
  ['0.300','building_0300'], ['0.325','building_0325'], ['0.350','building_0350'],
  ['0.375','building_0375'], ['0.400','building_0400'], ['0.425','building_0425'],
  ['0.450','building_0450']
];
let salesPriceRows = [];
let salesPriceCustomers = [];
let buildingPriceCustomers = [];
let selectedBuildingCustomerExcelFile = null;
const buildingPriceCustomerStorageKey = 'sales-portal-building-price-customers-v1';
const buildingPriceCustomerBackupKey = 'sales-portal-building-price-customers-backup-v1';
const buildingPriceCustomerMetaKey = 'sales-portal-building-price-customers-meta-v1';
const buildingPriceCustomerDatasetId = 'buildingPriceCustomers';
let priceCustomerSuggestionIndex = -1;
let buildingCustomerSuggestionIndex = -1;
const priceCustomerRanks = new Set(['S','A','B','C','D','E','F']);
const priceEstimateStorageKey = 'sales-portal-price-estimate-v1';
const priceEstimateShippingThreshold = 50000;
const priceEstimateShippingFee = 2000;
let priceEstimateRows = [];

function loadPriceEstimateRows() {
  try {
    const parsed = JSON.parse(localStorage.getItem(priceEstimateStorageKey) || '[]');
    priceEstimateRows = Array.isArray(parsed) ? parsed.filter(item => item && item.product_number && Number(item.quantity) > 0) : [];
  } catch (_) {
    priceEstimateRows = [];
  }
}
function normalizePriceEstimateQuantities() {
  let changed = false;
  priceEstimateRows.forEach(item => {
    const purchaseUnit = getPriceEstimatePurchaseUnit(item);
    const adjustedQuantity = ceilDrawingQuantityToUnit(item.quantity, purchaseUnit);
    if (Number(item.quantity) !== adjustedQuantity || Number(item.purchase_unit) !== purchaseUnit) changed = true;
    item.quantity = adjustedQuantity;
    item.purchase_unit = purchaseUnit;
  });
  if (changed) savePriceEstimateRows();
}
function savePriceEstimateRows() {
  try { localStorage.setItem(priceEstimateStorageKey, JSON.stringify(priceEstimateRows)); } catch (_) {}
}
function formatEstimateMoney(value) {
  return `${Math.round(Number(value) || 0).toLocaleString('ja-JP')}円`;
}
function getPriceEstimatePurchaseUnit(item) {
  const saved = Math.max(1, Math.floor(Number(item?.purchase_unit) || 0));
  if (saved > 1) return saved;
  const productNumber = normalizeDrawingText(item?.product_number || '');
  const priceRow = salesPriceRows.find(row => normalizeDrawingText(row.product_number) === productNumber);
  if (priceRow) return Math.max(1, Math.floor(Number(priceRow.purchase_unit) || 1));
  return getDrawingPurchaseUnit(item?.product_number || '');
}
function getPriceEstimateQuoteQuantity(item) {
  return ceilDrawingQuantityToUnit(item?.quantity, getPriceEstimatePurchaseUnit(item));
}
function getPriceEstimateExcelClipboardText() {
  if (!priceEstimateRows.length) return '';
  const values = ['*****'];
  priceEstimateRows.forEach(item => {
    if (!item?.product_name || !item?.product_number || Number(item.quantity) < 1) return;
    values.push(
      String(item.product_name).replace(/,/g, ' '),
      String(item.product_number).replace(/,/g, ' '),
      String(getPriceEstimateQuoteQuantity(item))
    );
  });
  return values.length > 1 ? values.join(',') : '';
}
function copyPriceEstimateToExcel() {
  const text = getPriceEstimateExcelClipboardText();
  if (!text) { toast('見積もりフォーマットへ貼り付ける概算明細がありません'); return; }
  copyText(text, '見積もりフォーマット貼り付け用データ');
}
function getPriceEstimateSummary() {
  const subtotal = priceEstimateRows.reduce((sum, item) => sum + (Number(item.unit_price) || 0) * (Number(item.quantity) || 0), 0);
  const shipping = subtotal > 0 && subtotal < priceEstimateShippingThreshold ? priceEstimateShippingFee : 0;
  return {subtotal, shipping, total: subtotal + shipping};
}
function renderPriceEstimate() {
  normalizePriceEstimateQuantities();
  const rowsEl = $('priceEstimateRows');
  const totalsEl = $('priceEstimateTotals');
  if (!rowsEl || !totalsEl) return;
  if (!priceEstimateRows.length) {
    rowsEl.innerHTML = '<div class="price-estimate-empty">商品を選び、数量を入力して「概算に追加」を押してください。</div>';
  } else {
    const body = priceEstimateRows.map((item, index) => {
      const amount = (Number(item.unit_price) || 0) * (Number(item.quantity) || 0);
      const purchaseUnit = getPriceEstimatePurchaseUnit(item);
      return `<div class="price-estimate-list-row" data-estimate-index="${index}">
        <div class="price-estimate-list-no">${index + 1}</div>
        <div class="price-estimate-product">
          <strong>${escapeHtml(item.product_name)}</strong>
          <span>${escapeHtml(item.product_number)}</span>
          <small>${escapeHtml(item.unit || '個')} / ${escapeHtml(item.price_label || '')} / 販売単位 ${escapeHtml(String(purchaseUnit))}</small>
        </div>
        <label class="price-estimate-qty"><span>数量</span>
          <input type="number" min="${escapeAttr(String(purchaseUnit))}" step="${escapeAttr(String(purchaseUnit))}" inputmode="numeric" value="${Math.max(1, Math.floor(Number(item.quantity) || 1))}" data-estimate-qty="${index}" />
        </label>
        <div class="price-estimate-unit"><span>単価</span><strong>${escapeHtml(formatEstimateMoney(item.unit_price))}</strong></div>
        <div class="price-estimate-amount"><span>金額</span><strong>${escapeHtml(formatEstimateMoney(amount))}</strong></div>
        <button class="ghost compact price-estimate-remove" type="button" data-estimate-remove="${index}" aria-label="${escapeAttr(item.product_name)}を削除">削除</button>
      </div>`;
    }).join('');
    rowsEl.innerHTML = `<div class="price-estimate-list" role="table" aria-label="簡易概算明細">
      <div class="price-estimate-list-head" role="row">
        <span>No.</span><span>商品</span><span>数量</span><span>単価</span><span>金額</span><span></span>
      </div>
      <div class="price-estimate-list-body">${body}</div>
    </div>`;
  }
  const {subtotal, shipping, total} = getPriceEstimateSummary();
  totalsEl.innerHTML = `
    <div><span>商品小計（税抜）</span><strong>${escapeHtml(formatEstimateMoney(subtotal))}</strong></div>
    <div><span>送料（税抜）</span><strong>${shipping ? escapeHtml(formatEstimateMoney(shipping)) : '0円（送料無料）'}</strong></div>
    <div class="price-estimate-grand-total"><span>合計金額（税抜）</span><strong>${escapeHtml(formatEstimateMoney(total))}</strong></div>`;
  rowsEl.querySelectorAll('[data-estimate-qty]').forEach(input => input.addEventListener('change', event => {
    const index = Number(event.currentTarget.dataset.estimateQty);
    const quantity = Math.max(1, Math.floor(Number(event.currentTarget.value) || 1));
    if (!priceEstimateRows[index]) return;
    const purchaseUnit = getPriceEstimatePurchaseUnit(priceEstimateRows[index]);
    priceEstimateRows[index].quantity = ceilDrawingQuantityToUnit(quantity, purchaseUnit);
    priceEstimateRows[index].purchase_unit = purchaseUnit;
    savePriceEstimateRows();
    renderPriceEstimate();
  }));
  rowsEl.querySelectorAll('[data-estimate-remove]').forEach(button => button.addEventListener('click', event => {
    const index = Number(event.currentTarget.dataset.estimateRemove);
    priceEstimateRows.splice(index, 1);
    savePriceEstimateRows();
    renderPriceEstimate();
  }));
}
function addCurrentPriceToEstimate() {
  const {row, key, label, price, type} = getCurrentPriceSelection();
  const rawQuantity = String($('priceEstimateQty')?.value || '').trim();
  const quantity = Math.floor(Number(rawQuantity));
  if (!row) { toast('商品を選択してください'); return; }
  if (!rawQuantity || !Number.isFinite(quantity) || quantity < 1) { toast('数量を入力してください'); $('priceEstimateQty')?.focus(); return; }
  if (price === null || price === undefined || price === '' || !Number.isFinite(Number(price))) {
    toast('選択した条件には価格が設定されていません');
    return;
  }
  const lineKey = `${row.product_number}::${key}`;
  const purchaseUnit = Math.max(1, Math.floor(Number(row.purchase_unit) || getDrawingPurchaseUnit(row.product_number) || 1));
  priceEstimateRows.push({
    id: crypto.randomUUID(),
    line_key: lineKey,
    product_name: row.product_name,
    product_number: row.product_number,
    unit: row.unit || '個',
    quantity: ceilDrawingQuantityToUnit(quantity, purchaseUnit),
    purchase_unit: purchaseUnit,
    unit_price: Number(price),
    price_key: key,
    price_label: `${type === 'building' ? '建築' : 'サイン'} / ${label}`
  });
  savePriceEstimateRows();
  renderPriceEstimate();
  if ($('priceEstimateQty')) $('priceEstimateQty').value = '';
  toast(`${row.product_name}を概算に追加しました`);
}
function getPriceEstimateText() {
  if (!priceEstimateRows.length) return '';
  const lines = ['下記内容にて概算金額をご案内いたします。', ''];
  priceEstimateRows.forEach(item => {
    const amount = Number(item.unit_price) * Number(item.quantity);
    lines.push(`・${item.product_name}`);
    lines.push(`  ${item.product_number}`);
    lines.push(`  ${item.quantity}${item.unit || '個'} × ${formatEstimateMoney(item.unit_price)} ＝ ${formatEstimateMoney(amount)}`);
    lines.push('');
  });
  const {subtotal, shipping, total} = getPriceEstimateSummary();
  lines.push(`商品小計（税抜）：${formatEstimateMoney(subtotal)}`);
  lines.push(`送料（税抜）：${shipping ? formatEstimateMoney(shipping) : '0円（送料無料）'}`);
  lines.push(`合計金額（税抜）：${formatEstimateMoney(total)}`);
  lines.push('');
  lines.push('※上記は概算金額です。');
  lines.push('※正式なお見積りは別途ご案内いたします。');
  return lines.join('\n');
}

function getPriceAccessCode() {
  try { return sessionStorage.getItem(priceTableSessionKey) || ''; } catch (_) { return ''; }
}
function setPriceAccessCode(code) {
  try {
    if (code) sessionStorage.setItem(priceTableSessionKey, code);
    else sessionStorage.removeItem(priceTableSessionKey);
  } catch (_) {}
}
function setPriceLoginMessage(message, kind='') {
  const el = $('priceLoginMessage');
  if (!el) return;
  el.textContent = message;
  el.className = `small-note ${kind}`.trim();
}
function setPriceImportStatus(message, kind='') {
  const el = $('priceImportStatus');
  if (!el) return;
  el.textContent = message;
  el.className = `small-note ${kind}`.trim();
}
function setPriceCustomerSyncStatus(message, kind='') {
  const el = $('priceCustomerSyncStatus');
  if (!el) return;
  el.textContent = message;
  el.className = kind === 'ok' ? 'is-ok-text' : kind === 'error' ? 'is-error-text' : '';
}
function setBuildingCustomerImportStatus(message, kind='') {
  const el = $('buildingCustomerImportStatus');
  if (!el) return;
  el.textContent = message;
  el.className = `small-note ${kind}`.trim();
}
function normalizeBuildingRate(value) {
  const raw = String(value ?? '').normalize('NFKC').trim().replace(/[%％]/g, '');
  if (!raw) return null;
  let number = Number(raw);
  if (!Number.isFinite(number)) return null;
  if (number > 1) number /= 100;
  const allowed = priceBuildingRanks.map(([label]) => Number(label));
  const matched = allowed.find(rate => Math.abs(rate - number) < 0.00001);
  return matched ?? null;
}
function getBuildingRateKey(rate) {
  const normalized = normalizeBuildingRate(rate);
  if (normalized === null) return '';
  return priceBuildingRanks.find(([label]) => Math.abs(Number(label) - normalized) < 0.00001)?.[1] || '';
}
function parseBuildingCustomerStoredValue(raw) {
  if (!raw) return {rows:[], savedAt:''};
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return {rows:normalizeBuildingPriceCustomers(parsed), savedAt:''};
    return {
      rows: normalizeBuildingPriceCustomers(parsed?.rows),
      savedAt: String(parsed?.savedAt || '')
    };
  } catch (_) {
    return {rows:[], savedAt:''};
  }
}
function mergeBuildingCustomerRows(primaryRows, secondaryRows) {
  const merged = new Map();
  [...(Array.isArray(secondaryRows) ? secondaryRows : []), ...(Array.isArray(primaryRows) ? primaryRows : [])].forEach(row => {
    const normalized = normalizeBuildingPriceCustomers([row])[0];
    if (normalized) merged.set(normalized.customer_name, normalized);
  });
  return Array.from(merged.values()).map((row, index) => ({...row, display_order:index + 1}));
}
function updateBuildingCustomerPersistenceStatus(message='', kind='') {
  const count = buildingPriceCustomers.length;
  const fallback = count
    ? `登録済み：建築顧客 ${count}社（この端末に保存済み。Supabase共有データも起動時に確認します）`
    : '未登録です。Excelを選択して登録してください。';
  setBuildingCustomerImportStatus(message || fallback, kind || (count ? 'ok' : ''));
  const fileName = $('buildingCustomerExcelFileName');
  if (fileName && !selectedBuildingCustomerExcelFile) {
    fileName.textContent = count ? `未選択（登録済み ${count}社には影響しません）` : '未選択';
  }
}
function loadBuildingPriceCustomers() {
  const primary = parseBuildingCustomerStoredValue(localStorage.getItem(buildingPriceCustomerStorageKey));
  const backup = parseBuildingCustomerStoredValue(localStorage.getItem(buildingPriceCustomerBackupKey));
  buildingPriceCustomers = mergeBuildingCustomerRows(primary.rows, backup.rows);
  if (buildingPriceCustomers.length) saveBuildingPriceCustomers({source:'startup-repair'});
  updateBuildingCustomerPersistenceStatus();
}
function saveBuildingPriceCustomers({source='browser'} = {}) {
  try {
    const rows = normalizeBuildingPriceCustomers(buildingPriceCustomers);
    if (!rows.length && buildingPriceCustomers.length) throw new Error('正規化後の顧客リストが空になりました。');
    buildingPriceCustomers = rows;
    const savedAt = new Date().toISOString();
    const snapshot = JSON.stringify({version:1, savedAt, source, rows});
    localStorage.setItem(buildingPriceCustomerStorageKey, snapshot);
    localStorage.setItem(buildingPriceCustomerBackupKey, snapshot);
    localStorage.setItem(buildingPriceCustomerMetaKey, JSON.stringify({savedAt, source, count:rows.length}));
    updateBuildingCustomerPersistenceStatus();
    return true;
  } catch (error) {
    console.error('[建築顧客リスト保存]', error);
    updateBuildingCustomerPersistenceStatus(`この端末への保存に失敗しました：${error?.message || error}`, 'error');
    return false;
  }
}
async function saveBuildingPriceCustomersToCloud({silent=true, verify=true} = {}) {
  if (!buildingPriceCustomers.length) {
    if (!silent) toast('空の建築顧客リストは共有保存しません');
    return false;
  }
  const saved = await saveSharedDatasetToCloud(buildingPriceCustomerDatasetId, buildingPriceCustomers, {silent:true});
  if (!saved) {
    if (!silent) toast('建築顧客リストの共有保存に失敗しました');
    return false;
  }
  if (!verify) return true;
  const cloudRows = normalizeBuildingPriceCustomers(await loadSharedDatasetFromCloud(buildingPriceCustomerDatasetId));
  const verified = cloudRows.length === buildingPriceCustomers.length;
  if (!verified) console.error('[建築顧客リスト保存検証] 件数不一致', {local:buildingPriceCustomers.length, cloud:cloudRows.length});
  if (!verified && !silent) toast('建築顧客リストの共有保存後検証に失敗しました');
  return verified;
}
async function loadBuildingPriceCustomersFromCloud({silent=true} = {}) {
  const cloudRows = normalizeBuildingPriceCustomers(await loadSharedDatasetFromCloud(buildingPriceCustomerDatasetId));
  if (!cloudRows.length) {
    updateBuildingCustomerPersistenceStatus(buildingPriceCustomers.length
      ? `登録済み：建築顧客 ${buildingPriceCustomers.length}社（共有データは空のため、この端末の登録を保持しました）`
      : '共有保存された建築顧客データがありません。');
    return false;
  }
  const before = buildingPriceCustomers.length;
  buildingPriceCustomers = mergeBuildingCustomerRows(cloudRows, buildingPriceCustomers);
  saveBuildingPriceCustomers({source:'cloud-merge'});
  renderBuildingCustomerOptions();
  updateBuildingCustomerPersistenceStatus(`登録済み：建築顧客 ${buildingPriceCustomers.length}社（Supabase共有データ確認済み）`, 'ok');
  if (!silent) toast(`建築顧客 ${buildingPriceCustomers.length}社の共有データを確認しました`);
  return buildingPriceCustomers.length !== before || cloudRows.length > 0;
}
function normalizeBuildingPriceCustomers(rows) {
  const seen = new Set();
  return (Array.isArray(rows) ? rows : []).map((row, index) => ({
    customer_name: String(row?.customer_name || row?.['取引先名'] || '').trim(),
    building_rate: normalizeBuildingRate(row?.building_rate ?? row?.['デフォルト商流']),
    display_order: Number(row?.display_order ?? index + 1)
  })).filter(row => {
    if (!row.customer_name || row.building_rate === null || seen.has(row.customer_name)) return false;
    seen.add(row.customer_name);
    return true;
  }).sort((a,b) => a.display_order - b.display_order);
}
function normalizePriceDbRows(rows) {
  return (Array.isArray(rows) ? rows : []).map((row, index) => ({
    ...row,
    display_order: Number(row.display_order ?? index + 1),
    product_name: String(row.product_name || '').trim(),
    product_number: String(row.product_number || '').trim(),
    specifications: String(row.specifications || '').trim(),
    unit: String(row.unit || '').trim(),
    purchase_unit: Math.max(1, Number(row.purchase_unit) || 1)
  })).filter(row => row.product_name && row.product_number)
    .sort((a,b) => a.display_order - b.display_order);
}
async function fetchSalesPrices(accessCode) {
  const client = getSupabaseClient();
  if (!client) throw new Error('Supabase設定がありません。');
  const {data, error} = await client.rpc('sales_portal_get_prices', {access_code: accessCode});
  if (error) throw error;
  return normalizePriceDbRows(data);
}
function normalizePriceCustomers(rows) {
  const seen = new Set();
  return (Array.isArray(rows) ? rows : []).map((row, index) => ({
    ...row,
    customer_name: String(row.customer_name || '').trim(),
    price_rank: String(row.price_rank || '').trim().toUpperCase(),
    display_order: Number(row.display_order ?? index + 1)
  })).filter(row => {
    if (!row.customer_name || !priceCustomerRanks.has(row.price_rank) || /EOL/i.test(row.customer_name)) return false;
    if (seen.has(row.customer_name)) return false;
    seen.add(row.customer_name);
    return true;
  }).sort((a,b) => a.display_order - b.display_order);
}
async function fetchSalesPriceCustomers(accessCode) {
  const client = getSupabaseClient();
  if (!client) throw new Error('Supabase設定がありません。');
  const {data, error} = await client.rpc('sales_portal_get_customers', {access_code: accessCode});
  if (error) throw error;
  return normalizePriceCustomers(data);
}
async function reloadSalesPriceCustomers({silent=false} = {}) {
  const code = getPriceAccessCode();
  if (!code) {
    if (!silent) setPriceCustomerSyncStatus('価格表へログインしてください。','error');
    return false;
  }
  const btn = $('priceCustomerReloadBtn');
  if (btn) btn.disabled = true;
  setPriceCustomerSyncStatus('Supabaseから顧客ランクを読み込んでいます…');
  try {
    salesPriceCustomers = await fetchSalesPriceCustomers(code);
    renderPriceCustomerOptions();
    setPriceCustomerSyncStatus(`共有データ読込済み：顧客ランク ${salesPriceCustomers.length}件`,'ok');
    if (!silent) toast(`顧客ランク ${salesPriceCustomers.length}件を読み込みました`);
    return true;
  } catch (error) {
    console.error('[顧客ランク再読込]', error);
    setPriceCustomerSyncStatus(`読込失敗：${error?.message || error}`,'error');
    return false;
  } finally {
    if (btn) btn.disabled = false;
  }
}
function showPriceTool(isOpen) {
  const login = $('priceLoginPanel');
  const tool = $('priceToolPanel');
  const logout = $('priceLogoutBtn');
  if (login) login.hidden = isOpen;
  if (tool) tool.hidden = !isOpen;
  if (logout) logout.hidden = !isOpen;
}
function getUniquePriceProducts() {
  const seen = new Set();
  return salesPriceRows.filter(row => {
    if (seen.has(row.product_name)) return false;
    seen.add(row.product_name);
    return true;
  }).map(row => row.product_name);
}
function normalizePriceCustomerSearchText(value='') {
  return String(value || '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/株式会社|有限会社|合同会社|合資会社|合名会社|\(株\)|（株）|\(有\)|（有）/g, '')
    .replace(/[ァ-ヶ]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60))
    .replace(/[\s　・･\-ー_]/g, '');
}
function renderBuildingCustomerOptions() {
  const select = $('buildingCustomerSelect');
  if (!select) return;
  const previous = select.value;
  select.innerHTML = '<option value="">顧客を選択しない（掛け率を直接選択）</option>' + buildingPriceCustomers.map(row =>
    `<option value="${escapeAttr(row.customer_name)}">${escapeHtml(row.customer_name)}</option>`
  ).join('');
  select.value = buildingPriceCustomers.some(row => row.customer_name === previous) ? previous : '';
  const selected = getSelectedBuildingCustomer();
  const input = $('buildingCustomerSearchInput');
  if (input) input.value = selected?.customer_name || '';
  updateBuildingCustomerClearButton();
  closeBuildingCustomerSuggestions();
  renderBuildingCustomerRate();
}
function getSelectedBuildingCustomer() {
  const name = $('buildingCustomerSelect')?.value || '';
  return buildingPriceCustomers.find(row => row.customer_name === name) || null;
}
function updateBuildingCustomerClearButton() {
  const btn = $('buildingCustomerClearBtn');
  const input = $('buildingCustomerSearchInput');
  if (btn) btn.hidden = !(input?.value || $('buildingCustomerSelect')?.value);
}
function closeBuildingCustomerSuggestions() {
  buildingCustomerSuggestionIndex = -1;
  const box = $('buildingCustomerSuggestions');
  const input = $('buildingCustomerSearchInput');
  if (box) { box.hidden = true; box.innerHTML = ''; }
  if (input) input.setAttribute('aria-expanded', 'false');
}
function setCustomerSuggestionActive(boxId, index) {
  const box = $(boxId);
  const buttons = Array.from(box?.querySelectorAll('.price-customer-suggestion') || []);
  if (!buttons.length) return -1;
  const next = Math.max(0, Math.min(index, buttons.length - 1));
  buttons.forEach((button, buttonIndex) => {
    const active = buttonIndex === next;
    button.classList.toggle('is-keyboard-active', active);
    button.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  buttons[next].scrollIntoView({block:'nearest'});
  return next;
}
function moveCustomerSuggestion(boxId, currentIndex, direction) {
  const buttons = Array.from($(boxId)?.querySelectorAll('.price-customer-suggestion') || []);
  if (!buttons.length) return -1;
  let next = currentIndex;
  if (direction > 0) next = currentIndex < 0 ? 0 : (currentIndex + 1) % buttons.length;
  else next = currentIndex < 0 ? buttons.length - 1 : (currentIndex - 1 + buttons.length) % buttons.length;
  return setCustomerSuggestionActive(boxId, next);
}
function getActiveCustomerSuggestion(boxId, index) {
  const buttons = Array.from($(boxId)?.querySelectorAll('.price-customer-suggestion') || []);
  return buttons[index] || buttons[0] || null;
}
function renderBuildingCustomerSuggestions() {
  buildingCustomerSuggestionIndex = -1;
  const input = $('buildingCustomerSearchInput');
  const box = $('buildingCustomerSuggestions');
  if (!input || !box) return;
  const query = normalizePriceCustomerSearchText(input.value);
  updateBuildingCustomerClearButton();
  if (!query) { closeBuildingCustomerSuggestions(); return; }
  const matches = buildingPriceCustomers.filter(row =>
    normalizePriceCustomerSearchText(row.customer_name).includes(query)
  ).slice(0, 20);
  box.innerHTML = matches.length ? matches.map(row => `
    <button class="price-customer-suggestion" type="button" role="option" data-building-customer-name="${escapeAttr(row.customer_name)}">
      <span>${escapeHtml(row.customer_name)}</span><strong>${escapeHtml(Number(row.building_rate).toFixed(3))}</strong>
    </button>`).join('') : '<div class="price-customer-no-result">該当する建築顧客がありません。</div>';
  box.hidden = false;
  input.setAttribute('aria-expanded', 'true');
}
function selectBuildingCustomerByName(name) {
  const customer = buildingPriceCustomers.find(row => row.customer_name === name) || null;
  const select = $('buildingCustomerSelect');
  const input = $('buildingCustomerSearchInput');
  if (select) select.value = customer?.customer_name || '';
  if (input) input.value = customer?.customer_name || '';
  updateBuildingCustomerClearButton();
  closeBuildingCustomerSuggestions();
  applySelectedBuildingCustomerRate();
}
function clearSelectedBuildingCustomer({focus=false} = {}) {
  const select = $('buildingCustomerSelect');
  const input = $('buildingCustomerSearchInput');
  if (select) select.value = '';
  if (input) { input.value = ''; if (focus) input.focus(); }
  closeBuildingCustomerSuggestions();
  updateBuildingCustomerClearButton();
  renderBuildingCustomerRate();
}
function renderBuildingCustomerRate() {
  const display = $('buildingCustomerRateDisplay');
  if (!display) return;
  const customer = getSelectedBuildingCustomer();
  display.innerHTML = customer
    ? `<div class="price-selected-customer"><span class="price-selected-label">選択中</span><span class="price-selected-name" title="${escapeAttr(customer.customer_name)}">${escapeHtml(customer.customer_name)}</span></div><div class="price-selected-rate"><span class="price-selected-label">登録掛け率</span><strong>${escapeHtml(Number(customer.building_rate).toFixed(3))}</strong></div>`
    : `建築顧客リスト：${buildingPriceCustomers.length}社。顧客を選ばない場合は、下の掛け率を直接選択できます。`;
}
function applySelectedBuildingCustomerRate() {
  const customer = getSelectedBuildingCustomer();
  renderBuildingCustomerRate();
  if (!customer) return;
  const key = getBuildingRateKey(customer.building_rate);
  if (key && $('priceRankSelect')) $('priceRankSelect').value = key;
  renderPriceResult();
}
function updatePriceCustomerMode() {
  const isBuilding = ($('priceTypeSelect')?.value || 'sign') === 'building';
  const signCard = document.querySelector('.price-customer-link-card');
  const signSync = document.querySelector('.price-customer-sync-card');
  if (signCard) signCard.hidden = isBuilding;
  if (signSync) signSync.hidden = isBuilding;
  if ($('buildingCustomerPanel')) $('buildingCustomerPanel').hidden = !isBuilding;
  if (isBuilding) renderBuildingCustomerOptions();
}
function renderPriceCustomerOptions() {
  const select = $('priceCustomerSelect');
  if (!select) return;
  const previous = select.value;
  select.innerHTML = '<option value="">顧客を選択しない</option>' + salesPriceCustomers.map(row =>
    `<option value="${escapeAttr(row.customer_name)}">${escapeHtml(row.customer_name)}</option>`
  ).join('');
  if (salesPriceCustomers.some(row => row.customer_name === previous)) select.value = previous;
  else select.value = '';
  const selected = getSelectedPriceCustomer();
  const input = $('priceCustomerSearchInput');
  if (input) input.value = selected?.customer_name || '';
  updatePriceCustomerClearButton();
  closePriceCustomerSuggestions();
  renderPriceCustomerRank();
}
function getSelectedPriceCustomer() {
  const name = $('priceCustomerSelect')?.value || '';
  return salesPriceCustomers.find(row => row.customer_name === name) || null;
}
function updatePriceCustomerClearButton() {
  const btn = $('priceCustomerClearBtn');
  const input = $('priceCustomerSearchInput');
  if (btn) btn.hidden = !(input?.value || $('priceCustomerSelect')?.value);
}
function closePriceCustomerSuggestions() {
  priceCustomerSuggestionIndex = -1;
  const box = $('priceCustomerSuggestions');
  const input = $('priceCustomerSearchInput');
  if (box) { box.hidden = true; box.innerHTML = ''; }
  if (input) input.setAttribute('aria-expanded', 'false');
}
function renderPriceCustomerSuggestions() {
  priceCustomerSuggestionIndex = -1;
  const input = $('priceCustomerSearchInput');
  const box = $('priceCustomerSuggestions');
  if (!input || !box) return;
  const query = normalizePriceCustomerSearchText(input.value);
  updatePriceCustomerClearButton();
  if (!query) {
    closePriceCustomerSuggestions();
    return;
  }
  const matches = salesPriceCustomers.filter(row =>
    normalizePriceCustomerSearchText(row.customer_name).includes(query)
  ).slice(0, 20);
  if (!matches.length) {
    box.innerHTML = '<div class="price-customer-no-result">該当する顧客がありません。</div>';
  } else {
    box.innerHTML = matches.map((row, index) => `
      <button class="price-customer-suggestion" type="button" role="option" data-customer-index="${index}" data-customer-name="${escapeAttr(row.customer_name)}">
        <span>${escapeHtml(row.customer_name)}</span><strong>${escapeHtml(row.price_rank)}</strong>
      </button>`).join('');
  }
  box.hidden = false;
  input.setAttribute('aria-expanded', 'true');
}
function selectPriceCustomerByName(name) {
  const customer = salesPriceCustomers.find(row => row.customer_name === name) || null;
  const select = $('priceCustomerSelect');
  const input = $('priceCustomerSearchInput');
  if (select) select.value = customer?.customer_name || '';
  if (input) input.value = customer?.customer_name || '';
  updatePriceCustomerClearButton();
  closePriceCustomerSuggestions();
  applySelectedCustomerRank();
}
function clearSelectedPriceCustomer({focus=false} = {}) {
  const select = $('priceCustomerSelect');
  const input = $('priceCustomerSearchInput');
  if (select) select.value = '';
  if (input) {
    input.value = '';
    if (focus) input.focus();
  }
  closePriceCustomerSuggestions();
  updatePriceCustomerClearButton();
  renderPriceCustomerRank();
}
function renderPriceCustomerRank() {
  const display = $('priceCustomerRankDisplay');
  if (!display) return;
  const customer = getSelectedPriceCustomer();
  display.innerHTML = customer
    ? `<div class="price-selected-customer"><span class="price-selected-label">選択中</span><span class="price-selected-name" title="${escapeAttr(customer.customer_name)}">${escapeHtml(customer.customer_name)}</span></div><div class="price-selected-rate"><span class="price-selected-label">登録ランク</span><strong>${escapeHtml(customer.price_rank)}</strong></div>`
    : '顧客を検索して選択すると登録ランクを表示します。';
}
function applySelectedCustomerRank() {
  const customer = getSelectedPriceCustomer();
  renderPriceCustomerRank();
  if (!customer) return;
  const type = $('priceTypeSelect');
  if (type) type.value = 'sign';
  renderPriceRankOptions();
  const rankKey = priceSignRanks.find(([label]) => label === customer.price_rank)?.[1];
  if (rankKey && $('priceRankSelect')) $('priceRankSelect').value = rankKey;
  renderPriceResult();
}
function clearCustomerIfRankChanged() {
  const customer = getSelectedPriceCustomer();
  if (!customer) return;
  const selectedLabel = priceSignRanks.find(([,key]) => key === $('priceRankSelect')?.value)?.[0] || '';
  if (($('priceTypeSelect')?.value || 'sign') !== 'sign' || selectedLabel !== customer.price_rank) {
    clearSelectedPriceCustomer();
  }
}
function renderPriceRankOptions() {
  const type = $('priceTypeSelect')?.value || 'sign';
  const select = $('priceRankSelect');
  if (!select) return;
  const options = type === 'building' ? priceBuildingRanks : priceSignRanks;
  const previous = select.value;
  select.innerHTML = options.map(([label,key]) => `<option value="${escapeAttr(key)}">${escapeHtml(label)}</option>`).join('');
  if (options.some(([,key]) => key === previous)) select.value = previous;
}
function renderPriceProductOptions() {
  const select = $('priceProductSelect');
  if (!select) return;
  const products = getUniquePriceProducts();
  const previous = select.value;
  select.innerHTML = products.map(name => `<option value="${escapeAttr(name)}">${escapeHtml(name)}</option>`).join('');
  if (products.includes(previous)) select.value = previous;
}
function renderPriceNumberOptions() {
  const product = $('priceProductSelect')?.value || '';
  const select = $('priceNumberSelect');
  if (!select) return;
  const rows = salesPriceRows.filter(row => row.product_name === product);
  const previous = select.value;
  select.innerHTML = rows.map(row => `<option value="${escapeAttr(row.product_number)}">${escapeHtml(row.product_number)}${row.specifications ? `｜${escapeHtml(row.specifications)}` : ''}</option>`).join('');
  if (rows.some(row => row.product_number === previous)) select.value = previous;
}
function getSelectedPriceRow() {
  const number = $('priceNumberSelect')?.value || '';
  return salesPriceRows.find(row => row.product_number === number) || salesPriceRows[0] || null;
}
function formatPriceValue(value) {
  if (value === null || value === undefined || value === '' || Number.isNaN(Number(value))) return '価格設定なし';
  return `${Number(value).toLocaleString('ja-JP')}円`;
}
function getCurrentPriceSelection() {
  const row = getSelectedPriceRow();
  const key = $('priceRankSelect')?.value || 'price_s';
  const label = [...priceSignRanks, ...priceBuildingRanks].find(([,k]) => k === key)?.[0] || '';
  return {row, key, label, price: row ? row[key] : null, type: $('priceTypeSelect')?.value || 'sign'};
}
function renderPriceResult() {
  const card = $('priceResultCard');
  if (!card) return;
  const {row, label, price, type} = getCurrentPriceSelection();
  if (!row) {
    card.innerHTML = '<p>価格データがありません。Excelから価格表を更新してください。</p>';
    return;
  }
  const priceText = formatPriceValue(price);
  card.innerHTML = `
    <div class="price-result-head"><span>${type === 'building' ? '建築' : 'サイン'} / ${escapeHtml(label)}</span><strong>${escapeHtml(priceText)}</strong></div>
    <dl class="price-result-list">
      <div><dt>商品名</dt><dd>${escapeHtml(row.product_name)}</dd></div>
      <div><dt>商品番号</dt><dd>${escapeHtml(row.product_number)}</dd></div>
      <div><dt>仕様等</dt><dd>${escapeHtml(row.specifications || '－')}</dd></div>
      <div><dt>単位</dt><dd>${escapeHtml(row.unit || '－')}</dd></div>
      <div><dt>定価</dt><dd>${escapeHtml(formatPriceValue(row.list_price))}</dd></div>
    </dl>`;
}
function refreshPriceTool({keepProduct=true} = {}) {
  renderPriceCustomerOptions();
  renderBuildingCustomerOptions();
  renderPriceRankOptions();
  updatePriceCustomerMode();
  if (!keepProduct || !$('priceProductSelect')?.options?.length) renderPriceProductOptions();
  renderPriceNumberOptions();
  renderPriceResult();
}
function getCustomerPriceText() {
  const {row, price} = getCurrentPriceSelection();
  if (!row) return '';
  return `商品名：${row.product_name}\n商品番号：${row.product_number}\n単価：${formatPriceValue(price)}`;
}
async function loginPriceTable(codeInput='') {
  const code = String(codeInput || $('pricePasswordInput')?.value || '').trim();
  if (!code) { setPriceLoginMessage('パスワードを入力してください。','warn'); return false; }
  const btn = $('priceLoginBtn');
  if (btn) btn.disabled = true;
  setPriceLoginMessage('確認中です…');
  try {
    const [rows, purchaseUnits] = await Promise.all([
      fetchSalesPrices(code),
      loadSharedDatasetFromCloud(drawingPurchaseUnitsDatasetId)
    ]);
    setPriceAccessCode(code);
    drawingReaderState.purchaseUnits = normalizeDrawingPurchaseUnits(purchaseUnits || []);
    salesPriceRows = mergeDrawingPurchaseUnits(rows, drawingReaderState.purchaseUnits);
    drawingReaderState.masterRows = salesPriceRows;
    salesPriceCustomers = [];
    showPriceTool(true);
    refreshPriceTool({keepProduct:false});
    setPriceLoginMessage('ログインしました。','ok');
    if (!rows.length) setPriceImportStatus('価格データはまだ0件です。添付Excelを選んで更新してください。','warn');
    else if (!drawingReaderState.purchaseUnits.length) setPriceImportStatus('販売単位データがありません。見積Excelを再読み込みしてください。','warn');
    renderPriceEstimate();
    await reloadSalesPriceCustomers({silent:true});
    await loadBuildingPriceCustomersFromCloud({silent:true});
    return true;
  } catch (error) {
    console.error('[価格表ログイン]', error);
    setPriceAccessCode('');
    showPriceTool(false);
    setPriceLoginMessage('パスワードが違うか、価格表用SQLが未設定です。','error');
    return false;
  } finally {
    if (btn) btn.disabled = false;
  }
}
function logoutPriceTable() {
  setPriceAccessCode('');
  salesPriceRows = [];
  salesPriceCustomers = [];
  if ($('pricePasswordInput')) $('pricePasswordInput').value = '';
  showPriceTool(false);
  setPriceLoginMessage('ログアウトしました。');
}
function priceCellNumber(value) {
  if (value === null || value === undefined || value === '') return null;
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  const cleaned = String(value).replace(/[￥¥,\s]/g,'').trim();
  if (!cleaned || cleaned === '-' || cleaned === '―') return null;
  const num = Number(cleaned);
  return Number.isFinite(num) ? num : null;
}
function parseSalesPriceWorkbook(arrayBuffer) {
  if (!window.XLSX) throw new Error('Excel読込ライブラリを読み込めません。通信環境を確認してください。');
  const workbook = XLSX.read(arrayBuffer, {type:'array', cellDates:false});
  const sheet = workbook.Sheets['価格表'];
  if (!sheet) throw new Error('「価格表」タブが見つかりません。');
  const rows = XLSX.utils.sheet_to_json(sheet, {header:1, raw:true, defval:null});
  let currentProduct = '';
  let started = false;
  let reachedEndProduct = false;
  const records = [];
  for (let i=0; i<rows.length; i++) {
    const row = rows[i] || [];
    const productCell = String(row[1] ?? '').trim();
    if (!started) {
      if (productCell !== 'スターライトⅣ') continue;
      started = true;
    }
    if (productCell) {
      if (reachedEndProduct && productCell !== 'グロービーム_Plus') break;
      currentProduct = productCell;
      if (currentProduct === 'グロービーム_Plus') reachedEndProduct = true;
    }
    const productNumber = String(row[2] ?? '').trim();
    if (!currentProduct || !productNumber) continue;
    records.push({
      product_name: currentProduct,
      product_number: productNumber,
      specifications: String(row[3] ?? '').trim(),
      unit: String(row[4] ?? '').trim(),
      list_price: priceCellNumber(row[7]),
      price_s: priceCellNumber(row[8]), price_a: priceCellNumber(row[9]), price_b: priceCellNumber(row[10]),
      price_c: priceCellNumber(row[11]), price_d: priceCellNumber(row[12]), price_e: priceCellNumber(row[13]), price_f: priceCellNumber(row[14]),
      price_uchino: priceCellNumber(row[15]), price_signhearts: priceCellNumber(row[16]), price_nipp: priceCellNumber(row[17]), price_bunka: priceCellNumber(row[18]),
      building_0300: priceCellNumber(row[21]), building_0325: priceCellNumber(row[22]), building_0350: priceCellNumber(row[23]),
      building_0375: priceCellNumber(row[24]), building_0400: priceCellNumber(row[25]), building_0425: priceCellNumber(row[26]), building_0450: priceCellNumber(row[27]),
      display_order: records.length + 1,
      is_active: true
    });
  }
  if (!started) throw new Error('開始商品「スターライトⅣ」が見つかりません。');
  if (!reachedEndProduct) throw new Error('終了商品「グロービーム_Plus」が見つかりません。');
  if (!records.length) throw new Error('価格データを抽出できませんでした。');
  const numbers = new Set();
  for (const item of records) {
    if (numbers.has(item.product_number)) throw new Error(`商品番号が重複しています：${item.product_number}`);
    numbers.add(item.product_number);
  }
  return records;
}

function isDrawingInheritedProductName(value) {
  const text = String(value || '').normalize('NFKC').trim();
  return !text || /^[└┗ㄥLＬ↳]+$/i.test(text);
}
function parseDrawingPurchaseUnitsWorkbook(arrayBuffer, priceRows=[]) {
  if (!window.XLSX) throw new Error('Excel読込ライブラリを読み込めません。通信環境を確認してください。');
  const workbook = XLSX.read(arrayBuffer, {type:'array', cellDates:false});
  const sheet = workbook.Sheets['下限個数'];
  if (!sheet) throw new Error('「下限個数」タブが見つかりません。');
  const rows = XLSX.utils.sheet_to_json(sheet, {header:1, raw:true, defval:null});
  const priceByNumber = new Map((priceRows || []).map(row => [normalizeDrawingText(row.product_number), row]));
  const records = [];
  const seen = new Set();
  let currentProductName = '';
  for (let i=0; i<rows.length; i++) {
    const row = rows[i] || [];
    const rawName = String(row[0] ?? '').trim();
    const productNumber = String(row[1] ?? '').trim();
    const purchaseUnitNumber = Number(row[2]);
    if (!isDrawingInheritedProductName(rawName)) currentProductName = rawName;
    const priceRow = priceByNumber.get(normalizeDrawingText(productNumber));
    const productName = priceRow?.product_name || currentProductName;
    if (!productNumber || !Number.isFinite(purchaseUnitNumber) || purchaseUnitNumber <= 0) continue;
    const key = normalizeDrawingText(productNumber);
    if (seen.has(key)) throw new Error(`下限個数タブの商品番号が重複しています：${productNumber}`);
    seen.add(key);
    records.push({
      product_number: productNumber,
      product_name: productName || '',
      purchase_unit: Math.floor(purchaseUnitNumber),
      display_order: records.length + 1
    });
  }
  if (!records.length) throw new Error('「下限個数」タブから販売単位を抽出できませんでした。');
  return records;
}
function normalizeDrawingPurchaseUnits(rows) {
  const seen = new Set();
  return (Array.isArray(rows) ? rows : []).map((row,index) => ({
    product_number: String(row.product_number || '').trim(),
    product_name: String(row.product_name || '').trim(),
    purchase_unit: Math.max(1, Math.floor(Number(row.purchase_unit) || 1)),
    display_order: Number(row.display_order ?? index + 1)
  })).filter(row => {
    const key = normalizeDrawingText(row.product_number);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).sort((a,b) => a.display_order - b.display_order);
}
function mergeDrawingPurchaseUnits(masterRows, purchaseUnits) {
  const unitMap = new Map(normalizeDrawingPurchaseUnits(purchaseUnits).map(row => [normalizeDrawingText(row.product_number), row]));
  return normalizePriceDbRows(masterRows).map(row => {
    const unitRow = unitMap.get(normalizeDrawingText(row.product_number));
    return {...row, purchase_unit: Math.max(1, Number(unitRow?.purchase_unit) || 1)};
  });
}
function getDrawingPurchaseUnit(productNumber) {
  const key = normalizeDrawingText(productNumber);
  const master = drawingReaderState.masterRows.find(row => normalizeDrawingText(row.product_number) === key);
  if (master) return Math.max(1, Number(master.purchase_unit) || 1);
  const unitRow = drawingReaderState.purchaseUnits.find(row => normalizeDrawingText(row.product_number) === key);
  return Math.max(1, Number(unitRow?.purchase_unit) || 1);
}
function ceilDrawingQuantityToUnit(quantity, purchaseUnit) {
  const qty = Math.max(1, Math.floor(Number(quantity) || 1));
  const unit = Math.max(1, Math.floor(Number(purchaseUnit) || 1));
  return Math.ceil(qty / unit) * unit;
}

function parseSalesCustomerWorkbook(arrayBuffer) {
  if (!window.XLSX) throw new Error('Excel読込ライブラリを読み込めません。通信環境を確認してください。');
  const workbook = XLSX.read(arrayBuffer, {type:'array', cellDates:false});
  const sheet = workbook.Sheets['価格表'];
  if (!sheet) throw new Error('「価格表」タブが見つかりません。');
  const rows = XLSX.utils.sheet_to_json(sheet, {header:1, raw:true, defval:null});
  const records = [];
  const seen = new Set();
  let started = false;
  for (let i=0; i<rows.length; i++) {
    const row = rows[i] || [];
    const customerName = String(row[34] ?? '').trim(); // AI列
    const priceRank = String(row[36] ?? '').trim().toUpperCase(); // AK列
    if (!started) {
      if (customerName !== '株式会社キヌガワ') continue;
      started = true;
    }
    if (!customerName || /EOL/i.test(customerName) || !priceCustomerRanks.has(priceRank)) continue;
    if (seen.has(customerName)) continue;
    seen.add(customerName);
    records.push({
      customer_name: customerName,
      price_rank: priceRank,
      display_order: records.length + 1,
      is_active: true
    });
  }
  if (!started) throw new Error('顧客一覧の開始位置「株式会社キヌガワ」が見つかりません。');
  if (!records.length) throw new Error('顧客名と価格ランクを抽出できませんでした。');
  return records;
}
let selectedPriceExcelFile = null;
function isPriceExcelFile(file) {
  return !!file && /\.(xlsx|xlsm|xls)$/i.test(String(file.name || ''));
}
function setSelectedPriceExcelFile(file) {
  const dropZone = $('priceExcelDropZone');
  const name = $('priceExcelFileName');
  if (!file) {
    selectedPriceExcelFile = null;
    if (name) name.textContent = buildingPriceCustomers.length ? `未選択（登録済み ${buildingPriceCustomers.length}社には影響しません）` : '未選択';
    dropZone?.classList.remove('has-file');
    return false;
  }
  if (!isPriceExcelFile(file)) {
    selectedPriceExcelFile = null;
    if (name) name.textContent = '未選択';
    dropZone?.classList.remove('has-file');
    setPriceImportStatus('Excelファイル（.xlsx / .xlsm / .xls）を選択してください。','error');
    return false;
  }
  selectedPriceExcelFile = file;
  if (name) name.textContent = file.name;
  dropZone?.classList.add('has-file');
  setPriceImportStatus(`選択中：${file.name}`);
  return true;
}
function setupPriceExcelDropZone() {
  const input = $('priceExcelInput');
  const dropZone = $('priceExcelDropZone');
  if (!input || !dropZone) return;
  input.addEventListener('change', () => setSelectedPriceExcelFile(input.files?.[0] || null));
  dropZone.addEventListener('click', event => {
    if (event.target === input) return;
    input.click();
  });
  dropZone.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      input.click();
    }
  });
  ['dragenter','dragover'].forEach(type => dropZone.addEventListener(type, event => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
    dropZone.classList.add('is-dragover');
  }));
  ['dragleave','dragend'].forEach(type => dropZone.addEventListener(type, event => {
    event.preventDefault();
    event.stopPropagation();
    dropZone.classList.remove('is-dragover');
  }));
  dropZone.addEventListener('drop', event => {
    event.preventDefault();
    event.stopPropagation();
    dropZone.classList.remove('is-dragover');
    const file = event.dataTransfer?.files?.[0];
    setSelectedPriceExcelFile(file || null);
  });
}
async function importSalesPriceExcel() {
  const input = $('priceExcelInput');
  const file = selectedPriceExcelFile || input?.files?.[0];
  if (!file) { setPriceImportStatus('Excelファイルを選択してください。','warn'); return; }
  const code = getPriceAccessCode();
  if (!code) { logoutPriceTable(); return; }
  const btn = $('priceImportBtn');
  if (btn) btn.disabled = true;
  setPriceImportStatus('Excelを解析しています…');
  try {
    const buffer = await file.arrayBuffer();
    const records = parseSalesPriceWorkbook(buffer);
    const customers = parseSalesCustomerWorkbook(buffer);
    const purchaseUnits = parseDrawingPurchaseUnitsWorkbook(buffer, records);
    if (!confirm(`商品価格 ${records.length}件、顧客ランク ${customers.length}件、販売単位 ${purchaseUnits.length}件を読み込みました。現在のデータをこの内容に更新しますか？`)) {
      setPriceImportStatus('更新をキャンセルしました。');
      return;
    }
    setPriceImportStatus(`商品価格 ${records.length}件、顧客ランク ${customers.length}件、販売単位 ${purchaseUnits.length}件をSupabaseへ更新しています…`);
    const client = getSupabaseClient();
    if (!client) throw new Error('Supabase設定がありません。');
    const {data, error} = await client.rpc('sales_portal_replace_price_bundle', {
      access_code: code,
      price_rows: records,
      customer_rows: customers
    });
    if (error) throw error;
    const unitSaved = await saveSharedDatasetToCloud(drawingPurchaseUnitsDatasetId, purchaseUnits, {silent:true});
    if (!unitSaved) throw new Error('販売単位の共有保存に失敗しました。');
    const [freshPrices, freshCustomers, freshUnits] = await Promise.all([
      fetchSalesPrices(code),
      fetchSalesPriceCustomers(code),
      loadSharedDatasetFromCloud(drawingPurchaseUnitsDatasetId)
    ]);
    drawingReaderState.purchaseUnits = normalizeDrawingPurchaseUnits(freshUnits || purchaseUnits);
    salesPriceRows = mergeDrawingPurchaseUnits(freshPrices, drawingReaderState.purchaseUnits);
    drawingReaderState.masterRows = salesPriceRows;
    salesPriceCustomers = freshCustomers;
    refreshPriceTool({keepProduct:false});
    const priceCount = Number(data?.price_count ?? salesPriceRows.length);
    const customerCount = Number(data?.customer_count ?? salesPriceCustomers.length);
    setPriceImportStatus(`更新完了：商品価格 ${priceCount}件、顧客ランク ${customerCount}件、販売単位 ${drawingReaderState.purchaseUnits.length}件を共有保存しました。`,'ok');
    setPriceCustomerSyncStatus(`共有データ保存・読込済み：顧客ランク ${customerCount}件`,'ok');
    toast(`価格表と顧客ランクを共有保存しました`);
  } catch (error) {
    console.error('[価格表Excel更新]', error);
    setPriceImportStatus(`更新できませんでした：${error?.message || error}`,'error');
  } finally {
    if (btn) btn.disabled = false;
  }
}
function parseBuildingCustomerWorkbook(arrayBuffer) {
  if (!window.XLSX) throw new Error('Excel読込ライブラリを読み込めません。通信環境を確認してください。');
  const workbook = XLSX.read(arrayBuffer, {type:'array', cellDates:false});
  let sourceRows = null;
  for (const sheetName of workbook.SheetNames) {
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header:1, raw:true, defval:null});
    const headerIndex = rows.findIndex(row => Array.isArray(row) && row.some(cell => String(cell || '').trim() === '取引先名') && row.some(cell => String(cell || '').trim() === 'デフォルト商流'));
    if (headerIndex < 0) continue;
    const header = rows[headerIndex].map(cell => String(cell || '').trim());
    const nameIndex = header.indexOf('取引先名');
    const rateIndex = header.indexOf('デフォルト商流');
    sourceRows = rows.slice(headerIndex + 1).map((row, index) => ({
      customer_name: String(row?.[nameIndex] || '').trim(),
      building_rate: row?.[rateIndex],
      display_order: index + 1
    }));
    break;
  }
  if (!sourceRows) throw new Error('「取引先名」と「デフォルト商流」の列が見つかりません。');
  const normalized = normalizeBuildingPriceCustomers(sourceRows);
  if (!normalized.length) throw new Error('登録可能な建築顧客がありません。掛け率は0.300〜0.450の登録値を使用してください。');
  return normalized;
}
function setSelectedBuildingCustomerExcelFile(file) {
  const dropZone = $('buildingCustomerExcelDropZone');
  const name = $('buildingCustomerExcelFileName');
  if (!file) {
    selectedBuildingCustomerExcelFile = null;
    if (name) name.textContent = '未選択';
    dropZone?.classList.remove('has-file');
    return false;
  }
  if (!isPriceExcelFile(file)) {
    selectedBuildingCustomerExcelFile = null;
    if (name) name.textContent = '未選択';
    dropZone?.classList.remove('has-file');
    setBuildingCustomerImportStatus('Excelファイル（.xlsx / .xlsm / .xls）を選択してください。','error');
    return false;
  }
  selectedBuildingCustomerExcelFile = file;
  if (name) name.textContent = file.name;
  dropZone?.classList.add('has-file');
  setBuildingCustomerImportStatus(`選択中：${file.name}`);
  return true;
}
function setupBuildingCustomerExcelDropZone() {
  const input = $('buildingCustomerExcelInput');
  const dropZone = $('buildingCustomerExcelDropZone');
  if (!input || !dropZone) return;
  input.addEventListener('change', () => setSelectedBuildingCustomerExcelFile(input.files?.[0] || null));
  dropZone.addEventListener('click', event => { if (event.target !== input) input.click(); });
  dropZone.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); input.click(); }
  });
  ['dragenter','dragover'].forEach(type => dropZone.addEventListener(type, event => {
    event.preventDefault(); event.stopPropagation();
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
    dropZone.classList.add('is-dragover');
  }));
  ['dragleave','dragend'].forEach(type => dropZone.addEventListener(type, event => {
    event.preventDefault(); event.stopPropagation(); dropZone.classList.remove('is-dragover');
  }));
  dropZone.addEventListener('drop', event => {
    event.preventDefault(); event.stopPropagation(); dropZone.classList.remove('is-dragover');
    setSelectedBuildingCustomerExcelFile(event.dataTransfer?.files?.[0] || null);
  });
}
async function importBuildingCustomerExcel() {
  const file = selectedBuildingCustomerExcelFile || $('buildingCustomerExcelInput')?.files?.[0];
  if (!file) { setBuildingCustomerImportStatus('Excelファイルを選択してください。','warn'); return; }
  const btn = $('buildingCustomerImportBtn');
  if (btn) btn.disabled = true;
  setBuildingCustomerImportStatus('Excelを解析しています…');
  try {
    const records = parseBuildingCustomerWorkbook(await file.arrayBuffer());
    if (!confirm(`建築顧客 ${records.length}社を読み込みました。現在の建築顧客リストを置き換えますか？`)) {
      setBuildingCustomerImportStatus('登録をキャンセルしました。');
      return;
    }
    const previousRows = buildingPriceCustomers;
    buildingPriceCustomers = records;
    if (!saveBuildingPriceCustomers({source:'excel-import'})) {
      buildingPriceCustomers = previousRows;
      throw new Error('ブラウザへの保存に失敗したため、以前の顧客リストを保持しました。');
    }
    clearSelectedBuildingCustomer();
    renderBuildingCustomerOptions();
    setBuildingCustomerImportStatus(`この端末へ登録済み：建築顧客 ${records.length}社。Supabaseへ共有保存しています…`);
    const cloudSaved = await saveBuildingPriceCustomersToCloud({silent:true, verify:true});
    if (!cloudSaved) {
      updateBuildingCustomerPersistenceStatus(`この端末には建築顧客 ${records.length}社を保存済みです。Supabase共有保存のみ失敗しました。管理画面の接続設定を確認してください。`, 'warn');
      toast(`建築顧客 ${records.length}社をこの端末へ保存しました（共有保存は要確認）`);
      return;
    }
    updateBuildingCustomerPersistenceStatus(`登録完了：建築顧客 ${records.length}社をこの端末とSupabaseへ保存しました。`, 'ok');
    toast(`建築顧客 ${records.length}社を共有保存しました`);
  } catch (error) {
    console.error('[建築顧客Excel読込]', error);
    setBuildingCustomerImportStatus(`登録できませんでした：${error?.message || error}`,'error');
  } finally {
    if (btn) btn.disabled = false;
  }
}

function setupPriceTable() {
  loadPriceEstimateRows();
  loadBuildingPriceCustomers();
  renderPriceEstimate();
  showPriceTool(false);
  $('priceLoginBtn')?.addEventListener('click', () => loginPriceTable());
  $('pricePasswordInput')?.addEventListener('keydown', event => { if (event.key === 'Enter') loginPriceTable(); });
  $('priceLogoutBtn')?.addEventListener('click', logoutPriceTable);
  $('priceCustomerSearchInput')?.addEventListener('input', () => {
    if ($('priceCustomerSelect')) $('priceCustomerSelect').value = '';
    renderPriceCustomerRank();
    renderPriceCustomerSuggestions();
  });
  $('priceCustomerSearchInput')?.addEventListener('focus', renderPriceCustomerSuggestions);
  $('priceCustomerSearchInput')?.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if ($('priceCustomerSuggestions')?.hidden) renderPriceCustomerSuggestions();
      priceCustomerSuggestionIndex = moveCustomerSuggestion('priceCustomerSuggestions', priceCustomerSuggestionIndex, event.key === 'ArrowDown' ? 1 : -1);
      return;
    }
    if (event.key === 'Escape') { closePriceCustomerSuggestions(); return; }
    if (event.key === 'Enter') {
      const active = getActiveCustomerSuggestion('priceCustomerSuggestions', priceCustomerSuggestionIndex);
      if (active) { event.preventDefault(); selectPriceCustomerByName(active.dataset.customerName || ''); }
    }
  });
  $('priceCustomerSuggestions')?.addEventListener('click', event => {
    const btn = event.target.closest('.price-customer-suggestion');
    if (btn) selectPriceCustomerByName(btn.dataset.customerName || '');
  });
  $('priceCustomerClearBtn')?.addEventListener('click', () => clearSelectedPriceCustomer({focus:true}));
  document.addEventListener('click', event => {
    if (!event.target.closest('.price-customer-search-wrap')) {
      closePriceCustomerSuggestions();
      closeBuildingCustomerSuggestions();
    }
  });
  $('priceCustomerReloadBtn')?.addEventListener('click', () => reloadSalesPriceCustomers());
  $('buildingCustomerSearchInput')?.addEventListener('input', () => {
    if ($('buildingCustomerSelect')) $('buildingCustomerSelect').value = '';
    renderBuildingCustomerRate();
    renderBuildingCustomerSuggestions();
  });
  $('buildingCustomerSearchInput')?.addEventListener('focus', renderBuildingCustomerSuggestions);
  $('buildingCustomerSearchInput')?.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if ($('buildingCustomerSuggestions')?.hidden) renderBuildingCustomerSuggestions();
      buildingCustomerSuggestionIndex = moveCustomerSuggestion('buildingCustomerSuggestions', buildingCustomerSuggestionIndex, event.key === 'ArrowDown' ? 1 : -1);
      return;
    }
    if (event.key === 'Escape') { closeBuildingCustomerSuggestions(); return; }
    if (event.key === 'Enter') {
      const active = getActiveCustomerSuggestion('buildingCustomerSuggestions', buildingCustomerSuggestionIndex);
      if (active) { event.preventDefault(); selectBuildingCustomerByName(active.dataset.buildingCustomerName || ''); }
    }
  });
  $('buildingCustomerSuggestions')?.addEventListener('click', event => {
    const btn = event.target.closest('.price-customer-suggestion');
    if (btn) selectBuildingCustomerByName(btn.dataset.buildingCustomerName || '');
  });
  $('buildingCustomerClearBtn')?.addEventListener('click', () => clearSelectedBuildingCustomer({focus:true}));
  $('buildingCustomerImportBtn')?.addEventListener('click', importBuildingCustomerExcel);
  setupBuildingCustomerExcelDropZone();
  $('priceTypeSelect')?.addEventListener('change', () => {
    refreshPriceTool({keepProduct:true});
    clearCustomerIfRankChanged();
    if (($('priceTypeSelect')?.value || 'sign') !== 'building') clearSelectedBuildingCustomer();
  });
  $('priceRankSelect')?.addEventListener('change', () => {
    clearCustomerIfRankChanged();
    if (($('priceTypeSelect')?.value || 'sign') === 'building') clearSelectedBuildingCustomer();
    renderPriceResult();
  });
  $('priceProductSelect')?.addEventListener('change', () => { renderPriceNumberOptions(); renderPriceResult(); });
  $('priceNumberSelect')?.addEventListener('change', renderPriceResult);
  $('priceCopyBtn')?.addEventListener('click', () => copyText(getCustomerPriceText(), '価格抽出結果'));
  $('priceMailBtn')?.addEventListener('click', () => {
    const {row} = getCurrentPriceSelection();
    if (!row) return;
    const subject = `単価のご案内：${row.product_name}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(getCustomerPriceText())}`;
  });
  $('priceEstimateAddBtn')?.addEventListener('click', addCurrentPriceToEstimate);
  $('priceEstimateQty')?.addEventListener('keydown', event => { if (event.key === 'Enter') addCurrentPriceToEstimate(); });
  $('priceEstimateClearBtn')?.addEventListener('click', () => {
    if (!priceEstimateRows.length) return;
    if (!confirm('概算明細をすべて削除しますか？')) return;
    priceEstimateRows = [];
    savePriceEstimateRows();
    renderPriceEstimate();
  });
  $('priceEstimateExcelCopyBtn')?.addEventListener('click', copyPriceEstimateToExcel);
  $('priceEstimateCopyBtn')?.addEventListener('click', () => {
    const text = getPriceEstimateText();
    if (!text) { toast('概算明細がありません'); return; }
    copyText(text, '概算内容');
  });
  $('priceEstimateMailBtn')?.addEventListener('click', () => {
    const text = getPriceEstimateText();
    if (!text) { toast('概算明細がありません'); return; }
    window.location.href = `mailto:?subject=${encodeURIComponent('概算金額のご案内')}&body=${encodeURIComponent(text)}`;
  });
  $('priceImportBtn')?.addEventListener('click', importSalesPriceExcel);
  setupPriceExcelDropZone();
  const savedCode = getPriceAccessCode();
  if (savedCode) loginPriceTable(savedCode);
}




// =====================================================
// 図面読取・見積作成（見積作成.exeの挙動を優先して再現）
// =====================================================
const drawingReaderState = { masterRows: [], purchaseUnits: [], resultRows: [], pdfFiles: [], masterFile: null };
const DRAWING_PARSER_REQUIRED_VERSION = '2026-07-27-master-match-v3';
const drawingPurchaseUnitsDatasetId = 'drawingPurchaseUnits';
const drawingIgnoredLabels = ['アルミ複合板','仕様','ピッチ','消費電力','入力電流'];
function setDrawingStatus(id,message,kind=''){const el=$(id);if(!el)return;el.textContent=message;el.className=`small-note ${kind==='ok'?'is-ok-text':kind==='error'?'is-error-text':''}`.trim()}
function normalizeDrawingText(value){return String(value||'').normalize('NFKC').replace(/[　\s]+/g,'').replace(/[：:]/g,':').replace(/[‐‑–—―ー]/g,'-').replace(/[Ⅱⅱ]/g,'II').replace(/[Ⅲⅲ]/g,'III').toUpperCase()}
function trimDrawingEmbeddedLabels(value){const text=String(value||'').normalize('NFKC').trim();return text.split(/\s+(?=(?:製\s*品|仕\s*様|ピ\s*ッ\s*チ|総\s*数|消費\s*電力|入力\s*電流|電\s*源|ブレーカー|安全\s*ブレーカー)\s*[：:])/i)[0].trim()}
function normalizeDrawingProductSource(value){const raw=trimDrawingEmbeddedLabels(value);const converted=raw.replace(/(?:[\s　・／/]+)?白\s*$/,' 6500K');return normalizeDrawingText(converted)}
function normalizeDrawingLabel(value){return String(value||'').normalize('NFKC').replace(/[　\s]+/g,'').replace(/変換機/g,'変換器').replace(/コントローラ$/,'コントローラー').replace(/調光機/g,'調光器')}
function parseDrawingQuantity(value){const n=Number(String(value||'').replace(/,/g,''));return Number.isFinite(n)&&n>0?Math.floor(n):1}
function parseDrawingTotalQuantity(value,defaultUnit='個',kisu=1){const text=String(value||'').normalize('NFKC').replace(/,/g,'');const parenthesized=[...text.matchAll(/[（(]\s*(\d+)\s*(個|球|本|台|セット|枚|基)?\s*[）)]/gi)];if(parenthesized.length){const match=parenthesized[parenthesized.length-1];return {quantity:match[1],unit:match[2]||defaultUnit,usedParenthesized:true}}const match=text.match(/(?:^|総数\s*:)\s*(\d+)\s*(個|球|本|台|セット|枚)?/i)||text.match(/(\d+)\s*(個|球|本|台|セット|枚)/i);return match?{quantity:String(Number(match[1])*Math.max(1,Number(kisu)||1)),unit:match[2]||defaultUnit,usedParenthesized:false}:null}
function masterDisplay(row){return `${row.product_number}｜${row.product_name}${row.specifications?`｜${row.specifications}`:''}`}
function drawingTemperatureCode(value){
  const text=normalizeDrawingText(value);
  if(/6500K|65[EH]/.test(text))return '65';
  if(/5000K|50[EH]/.test(text))return '50';
  if(/4000K|40[EH]/.test(text))return '40';
  if(/3500K|35[EH]/.test(text))return '35';
  if(/3000K|30[EH]/.test(text))return '30';
  if(/2700K|27[EH]/.test(text))return '27';
  if(/2500K|25[EH]/.test(text))return '25';
  if(/2200K|22[EH]|2250/.test(text))return '22';
  return '';
}
function drawingModelFamily(value){
  const text=normalizeDrawingText(value).replace(/[^A-Z0-9一-龠ァ-ヶ]/g,'');
  if(/CVH|APW4VH/.test(text))return 'CVH';
  if(/CVL|APW4VL/.test(text))return 'CVL';
  if(/CVS|APW5VS/.test(text))return 'CVS';
  if(/(?:^|PENTAWIDEIV|ペンタワイドIV)CC|APW4C/.test(text))return 'CC';
  return '';
}
function drawingSeriesKey(value){
  const text=normalizeDrawingText(value);
  const series=[
    ['ペンタワイド','PENTAWIDE'],
    ['スターライトデュオ','STARLIGHTDUO'],
    ['スターライトミニ','STARLIGHTMINI'],
    ['スターライト','STARLIGHT'],
    ['デュオスリム','DUOSLIM'],
    ['モノミニ','MONOMINI'],
    ['グローチューブ','GLOWTUBE'],
    ['シームレスビーム','SEAMLESSBEAM']
  ];
  for(const [ja,en] of series){if(text.includes(ja)||text.includes(en))return ja}
  return '';
}
function drawingCanonicalProductName(value){
  return normalizeDrawingProductSource(value)
    .replace(/(?:6500|5000|4000|3500|3000|2700|2500|2200)K/g,'')
    .replace(/昼光色|昼白色|白色|温白色|電球色/g,'')
    .replace(/製品|モジュール/g,'')
    .replace(/[_\-・／/()（）]/g,'')
    .replace(/[^A-Z0-9一-龠ァ-ヶ]/g,'');
}
function drawingRequiredAttributes(value){
  const normalizedSource=normalizeDrawingProductSource(value);
  return {
    family:drawingModelFamily(normalizedSource),
    temperature:drawingTemperatureCode(normalizedSource),
    series:drawingSeriesKey(normalizedSource),
    canonicalName:drawingCanonicalProductName(normalizedSource)
  };
}
function drawingMasterEligibility(raw,row){
  const source=normalizeDrawingProductSource(raw);
  const code=normalizeDrawingText(row.product_number);
  const name=normalizeDrawingText(row.product_name);
  const specs=normalizeDrawingText(row.specifications||'');
  const target=`${name}${code}${specs}`;
  if(!source)return {eligible:false,reason:'入力なし'};
  if(code&&(source===code||source.includes(code)))return {eligible:true,exactCode:true,reason:'商品番号一致'};
  const required=drawingRequiredAttributes(source);
  const candidate=drawingRequiredAttributes(target);
  if(required.series&&candidate.series!==required.series)return {eligible:false,reason:'製品シリーズ不一致'};
  if(required.family&&candidate.family!==required.family)return {eligible:false,reason:'型式不一致'};
  if(required.temperature&&candidate.temperature!==required.temperature)return {eligible:false,reason:'色温度不一致'};
  return {eligible:true,exactCode:false,reason:'必須条件一致'};
}
function scoreDrawingMaster(raw,row){
  const source=normalizeDrawingProductSource(raw),code=normalizeDrawingText(row.product_number),name=normalizeDrawingText(row.product_name),specs=normalizeDrawingText(row.specifications||'');
  const eligibility=drawingMasterEligibility(raw,row);
  if(!eligibility.eligible)return {score:-1,type:eligibility.reason,eligible:false};
  if(code&&source===code)return {score:2000,type:'商品番号完全一致',eligible:true};
  if(code&&source.includes(code))return {score:1900+code.length,type:'商品番号一致',eligible:true};
  let score=0,type='未一致';
  if(name&&source===name){score=1500+name.length;type='商品名完全一致'}
  else if(name&&source.includes(name)){score=1250+name.length;type='商品名一致'}
  else if(name&&name.includes(source)&&source.length>=4){score=1000+source.length;type='商品名部分一致'}
  const sourceParts=source.split(/[/・,，()（）]/).filter(part=>part.length>=2);
  for(const part of sourceParts){if(name.includes(part)||code.includes(part)||specs.includes(part))score+=Math.min(90,part.length*10)}
  const required=drawingRequiredAttributes(source);
  if(required.series){score+=300;type=`${type}・シリーズ一致`}
  if(required.family){score+=500;type=`${type}・型式一致`}
  if(required.temperature){score+=260;type=`${type}・色温度一致`}
  if(score<1000)return {score,type:'一致条件不足',eligible:true};
  return {score,type,eligible:true};
}

function findDrawingMasterMatch(raw){
  if(!drawingReaderState.masterRows.length)return null;
  const sourceAttributes=drawingRequiredAttributes(raw);
  const candidates=[];
  for(const row of drawingReaderState.masterRows){
    const info=scoreDrawingMaster(raw,row);
    if(info.eligible&&info.score>=1000)candidates.push({row,info});
  }
  if(!candidates.length)return null;

  // 同一商品番号が価格ランク等の違いで複数行ある場合は、別候補として扱わない。
  const grouped=new Map();
  for(const candidate of candidates){
    const key=normalizeDrawingText(candidate.row.product_number)||normalizeDrawingText(masterDisplay(candidate.row));
    const current=grouped.get(key);
    if(!current||candidate.info.score>current.info.score)grouped.set(key,candidate);
  }
  const unique=[...grouped.values()];

  // EXEのmatch_itemに近い順序: シリーズ・型式・色温度が一意なら、その商品番号を確定する。
  const structured=unique.filter(({row})=>{
    const attrs=drawingRequiredAttributes(`${row.product_name||''} ${row.product_number||''} ${row.specifications||''}`);
    return (!sourceAttributes.series||attrs.series===sourceAttributes.series)
      &&(!sourceAttributes.family||attrs.family===sourceAttributes.family)
      &&(!sourceAttributes.temperature||attrs.temperature===sourceAttributes.temperature);
  });
  if(structured.length===1){
    const best=structured[0];
    return {row:best.row,score:best.info.score,matchType:`構造一致：${best.info.type}`,confidence:'high'};
  }

  unique.sort((a,b)=>b.info.score-a.info.score);
  const best=unique[0],second=unique[1];
  if(!best)return null;
  if(second&&best.info.score-second.info.score<80)return null;
  return {row:best.row,score:best.info.score,matchType:best.info.type,confidence:'high'};
}
const drawingBreakerMaster = {
  '6':  {product_number:'B1EA06', product_name:'屋内用 / 6A',  specifications:'安全ブレーカー', purchase_unit:1},
  '10': {product_number:'B1EA10', product_name:'屋内用 / 10A', specifications:'安全ブレーカー', purchase_unit:1},
  '15': {product_number:'B1EA15', product_name:'屋内用 / 15A', specifications:'安全ブレーカー', purchase_unit:1},
  '20': {product_number:'BL-1C 20A', product_name:'屋内用 / 20A', specifications:'安全ブレーカー', purchase_unit:1},
  '30': {product_number:'BL-1C 30A', product_name:'屋内用 / 30A', specifications:'安全ブレーカー', purchase_unit:1}
};
function findDrawingSpecialMasterMatch(sourceLabel,rawName){
  if(normalizeDrawingLabel(sourceLabel)!=='安全ブレーカー')return null;
  const amp=String(rawName||'').normalize('NFKC').match(/(?:^|[^0-9])(6|10|15|20|30)\s*A(?:$|[^0-9])/i)?.[1];
  if(!amp)return null;
  const fixed=drawingBreakerMaster[amp];
  const shared=drawingReaderState.masterRows.find(row=>normalizeDrawingText(row.product_number)===normalizeDrawingText(fixed.product_number));
  return {row:shared||fixed,score:2000,matchType:'安全ブレーカー容量一致',confidence:'high'};
}
function resolveDrawingMasterInput(value){
  const normalized=normalizeDrawingText(value);
  const exact=drawingReaderState.masterRows.find(row=>normalizeDrawingText(masterDisplay(row))===normalized||normalizeDrawingText(row.product_number)===normalized);
  if(exact)return {row:exact,score:1200,matchType:'手動選択',confidence:'high'};
  return findDrawingMasterMatch(value);
}
function renderDrawingMasterList(){const list=$('drawingProductMasterList');if(!list)return;list.innerHTML=drawingReaderState.masterRows.map(row=>`<option value="${escapeAttr(row.product_number)}" label="${escapeAttr(`${row.product_name}${row.specifications?`｜${row.specifications}`:''}`)}"></option>`).join('')}
function createDrawingResultRow({sourceLabel='製品',rawName='',quantity=1,unit='個',page=1,fileName='',signName='',match=null,sourceOrder=0,block=0}={}){
  const normalizedLabel=normalizeDrawingLabel(sourceLabel);
  const cleanRawName=trimDrawingEmbeddedLabels(rawName);
  const matchInfo=match||findDrawingSpecialMasterMatch(normalizedLabel,cleanRawName)||findDrawingMasterMatch(cleanRawName),matched=matchInfo?.row||null;
  const productNumber=matched?.product_number||'';
  const purchaseUnit=getDrawingPurchaseUnit(productNumber);
  const readQuantity=parseDrawingQuantity(quantity);
  const fallbackName=normalizedLabel==='製品'?cleanRawName:[normalizedLabel,cleanRawName].filter(Boolean).join(' ');
  return {id:crypto.randomUUID(),source_label:normalizedLabel,raw_name:cleanRawName,product_name:matched?.product_name||fallbackName,product_number:productNumber,quantity:readQuantity,purchase_unit:purchaseUnit,quote_quantity:ceilDrawingQuantityToUnit(readQuantity,purchaseUnit),unit:String(unit||'個').trim()||'個',page,file_name:fileName,sign_name:String(signName||'').trim(),matched:!!matched,match_type:matchInfo?.matchType||'未一致',confidence:matchInfo?.confidence||'none',source_order:Number(sourceOrder)||0,block:Number(block)||0};
}
function drawingConfidenceLabel(row){if(!row.matched)return '商品マスター未照合';if(row.confidence==='high')return `高信頼：${row.match_type}`;if(row.confidence==='medium')return `確認推奨：${row.match_type}`;return `要確認：${row.match_type}`}
function renderDrawingResults(){
  const wrap=$('drawingResultRows');if(!wrap)return;
  if(!drawingReaderState.resultRows.length){wrap.innerHTML='<div class="drawing-empty">図面を読み取ると、ここに見積候補が表示されます。</div>';return}
  wrap.innerHTML=`<div class="drawing-list-table" role="table" aria-label="図面読取結果">
    <div class="drawing-list-row drawing-list-header" role="row"><span>No.</span><span>商品番号</span><span>商品名</span><span>読取数量</span><span>販売単位</span><span>見積数量</span><span></span></div>
    ${drawingReaderState.resultRows.map((row,index)=>`<div class="drawing-list-row" role="row" data-drawing-row="${index}">
      <span class="drawing-list-no">${index+1}</span>
      <label><span class="drawing-mobile-label">商品番号</span><input type="text" list="drawingProductMasterList" value="${escapeAttr(row.product_number)}" placeholder="商品番号を選択" data-drawing-product="${index}" /></label>
      <label><span class="drawing-mobile-label">商品名</span><input type="text" value="${escapeAttr(row.product_name)}" data-drawing-name="${index}" /></label>
      <label><span class="drawing-mobile-label">読取数量</span><input type="number" min="1" step="1" inputmode="numeric" value="${escapeAttr(row.quantity)}" data-drawing-qty="${index}" /></label>
      <span class="drawing-unit-value"><small class="drawing-mobile-label">販売単位</small>${escapeHtml(String(row.purchase_unit||1))}</span>
      <span class="drawing-quote-value"><small class="drawing-mobile-label">見積数量</small>${escapeHtml(String(row.quote_quantity||row.quantity))}</span>
      <button class="ghost compact drawing-remove-btn" type="button" data-drawing-remove="${index}">削除</button>
      <div class="drawing-list-detail">
        <span class="drawing-source-badge">${escapeHtml(row.source_label)}</span>${row.sign_name?`<span class="drawing-sign-badge">${escapeHtml(row.sign_name)}</span>`:''}
        <span>${escapeHtml(row.file_name)} / ${row.page}ページ</span>
        <span class="${row.confidence==='high'?'drawing-match-ok':row.matched?'drawing-match-review':'drawing-match-warn'}">${escapeHtml(drawingConfidenceLabel(row))}</span>
        <span>原文：${escapeHtml(row.raw_name)}</span>
      </div>
    </div>`).join('')}
  </div>`;
  wrap.querySelectorAll('[data-drawing-product]').forEach(input=>input.addEventListener('change',e=>{const i=Number(e.currentTarget.dataset.drawingProduct),row=drawingReaderState.resultRows[i],match=resolveDrawingMasterInput(e.currentTarget.value);if(!row)return;if(match){row.product_number=match.row.product_number;row.product_name=match.row.product_name;row.purchase_unit=getDrawingPurchaseUnit(row.product_number);row.quote_quantity=ceilDrawingQuantityToUnit(row.quantity,row.purchase_unit);row.matched=true;row.match_type=match.matchType;row.confidence=match.confidence}else{row.product_number=e.currentTarget.value.trim();row.purchase_unit=getDrawingPurchaseUnit(row.product_number);row.quote_quantity=ceilDrawingQuantityToUnit(row.quantity,row.purchase_unit);row.matched=false;row.match_type='未一致';row.confidence='none'}renderDrawingResults()}));
  wrap.querySelectorAll('[data-drawing-name]').forEach(input=>input.addEventListener('change',e=>{const row=drawingReaderState.resultRows[Number(e.currentTarget.dataset.drawingName)];if(row)row.product_name=e.currentTarget.value.trim()}));
  wrap.querySelectorAll('[data-drawing-qty]').forEach(input=>input.addEventListener('change',e=>{const row=drawingReaderState.resultRows[Number(e.currentTarget.dataset.drawingQty)];if(row){row.quantity=parseDrawingQuantity(e.currentTarget.value);row.quote_quantity=ceilDrawingQuantityToUnit(row.quantity,row.purchase_unit)}renderDrawingResults()}));
  wrap.querySelectorAll('[data-drawing-remove]').forEach(button=>button.addEventListener('click',e=>{drawingReaderState.resultRows.splice(Number(e.currentTarget.dataset.drawingRemove),1);renderDrawingResults()}));
}

async function loadDrawingMaster(){
  const code=String($('drawingAccessCode')?.value||getPriceAccessCode()||'').trim();if(!code){setDrawingStatus('drawingMasterStatus','共通パスワードを入力してください。','error');return false}
  setDrawingStatus('drawingMasterStatus','共有商品と販売単位を読み込み中…');
  try{
    const [rows, purchaseUnits] = await Promise.all([fetchSalesPrices(code), loadSharedDatasetFromCloud(drawingPurchaseUnitsDatasetId)]);
    drawingReaderState.purchaseUnits = normalizeDrawingPurchaseUnits(purchaseUnits || []);
    drawingReaderState.masterRows = mergeDrawingPurchaseUnits(rows, drawingReaderState.purchaseUnits);
    salesPriceRows=drawingReaderState.masterRows;setPriceAccessCode(code);renderDrawingMasterList();
    setDrawingStatus('drawingMasterStatus',`共有商品 ${rows.length}件・販売単位 ${drawingReaderState.purchaseUnits.length}件を読み込みました。`,'ok');return true
  }catch(error){console.error('[図面商品マスター読込]',error);setDrawingStatus('drawingMasterStatus','共有商品の読込に失敗しました。パスワードまたはSupabase設定を確認してください。','error');return false}
}
async function updateDrawingMasterFromExcel(){
  const file=drawingReaderState.masterFile;const code=String($('drawingAccessCode')?.value||getPriceAccessCode()||'').trim();
  if(!file){setDrawingStatus('drawingMasterStatus','見積Excelを選択してください。','error');return}if(!code){setDrawingStatus('drawingMasterStatus','共通パスワードを入力してください。','error');return}
  const btn=$('updateDrawingMasterBtn');if(btn)btn.disabled=true;setDrawingStatus('drawingMasterStatus','価格表と下限個数タブを解析しています…');
  try{
    const buffer=await file.arrayBuffer();
    const rows=parseSalesPriceWorkbook(buffer);
    const purchaseUnits=parseDrawingPurchaseUnitsWorkbook(buffer, rows);
    if(!rows.length)throw new Error('商品が見つかりません。');
    const client=getSupabaseClient();if(!client)throw new Error('Supabase設定がありません。');
    const {data,error}=await client.rpc('sales_portal_replace_prices',{access_code:code,price_rows:rows});if(error)throw error;
    const unitSaved=await saveSharedDatasetToCloud(drawingPurchaseUnitsDatasetId,purchaseUnits,{silent:true});
    if(!unitSaved)throw new Error('販売単位の共有保存に失敗しました。');
    drawingReaderState.purchaseUnits=normalizeDrawingPurchaseUnits(purchaseUnits);
    drawingReaderState.masterRows=mergeDrawingPurchaseUnits(rows,drawingReaderState.purchaseUnits);
    salesPriceRows=drawingReaderState.masterRows;setPriceAccessCode(code);renderDrawingMasterList();
    const inheritedCount=purchaseUnits.filter(row=>row.product_name).length;
    setDrawingStatus('drawingMasterStatus',`共有商品 ${Number(data)||rows.length}件・販売単位 ${purchaseUnits.length}件を更新しました。製品名の省略記号も直前の製品名として登録済みです。`,'ok')
  }catch(error){console.error('[図面商品マスター更新]',error);setDrawingStatus('drawingMasterStatus',`更新できませんでした：${error.message||error}`,'error')}finally{if(btn)btn.disabled=false}
}

function groupPdfTextItems(items){
  const groups=[];
  for(const item of items){
    const text=String(item.str||'').normalize('NFKC').trim();
    if(!text)continue;
    const x=Number(item.transform?.[4]||0),y=Number(item.transform?.[5]||0),width=Math.max(0,Number(item.width||0));
    let group=groups.find(g=>Math.abs(g.y-y)<=2.5);
    if(!group){group={y,items:[]};groups.push(group)}
    group.items.push({x,width,text});
  }
  return groups.sort((a,b)=>b.y-a.y).map(group=>{
    const ordered=group.items.sort((a,b)=>a.x-b.x);
    let line='',previousEnd=null;
    for(const item of ordered){
      const gap=previousEnd===null?0:item.x-previousEnd;
      if(line&&gap>1.5)line+=' ';
      line+=item.text;
      previousEnd=Math.max(previousEnd??item.x,item.x+item.width);
    }
    return line.replace(/[　\t]+/g,' ').replace(/ {2,}/g,' ').trim();
  }).filter(Boolean);
}
function normalizeDrawingParsedLine(value){
  return String(value||'').normalize('NFKC')
    .replace(/[　\t]+/g,' ')
    .replace(/製\s*品\s*[：:]/g,'製品:')
    .replace(/仕\s*様\s*[：:]/g,'仕様:')
    .replace(/ピ\s*ッ\s*チ\s*[：:]/g,'ピッチ:')
    .replace(/総\s*数\s*[：:]/g,'総数:')
    .replace(/消費\s*電力\s*[：:]/g,'消費電力:')
    .replace(/入力\s*電流\s*[：:]/g,'入力電流:')
    .replace(/電\s*源\s*[：:]/g,'電源:')
    .replace(/調\s*光\s*[器機]\s*[：:]/g,'調光器:')
    .replace(/コントローラ(?:ー)?\s*[：:]/g,'コントローラー:')
    .replace(/受\s*信\s*[器機]\s*[：:]/g,'受信器:')
    .replace(/変換\s*[器機]\s*用\s*電源\s*[：:]/g,'変換器用電源:')
    .replace(/(?:ARTNET|Artnet)\s*[・･.]?\s*SPI\s*変換\s*[器機]\s*[：:]/gi,'Artnet・SPI変換器:')
    .replace(/変換\s*[器機]\s*[：:]/g,'変換器:')
    .replace(/アルミ\s*複合板\s*[：:]/g,'アルミ複合板:')
    .replace(/\s*[×xX＊*]\s*/g,' × ')
    .replace(/\s+/g,' ')
    .trim();
}
function extractLabeledValue(lines,labelPattern){for(const line of lines){const match=normalizeDrawingParsedLine(line).match(labelPattern);if(match)return match}return null}
function buildDrawingPageText(items){return groupPdfTextItems(items).map(normalizeDrawingParsedLine).join('\n')}
function drawingValueUntilNextLabel(text,labelPattern){
  const next='(?=\\s*(?:仕様|ピッチ|総数|消費電力|入力電流|電源|調光器|コントローラー|受信器|変換器|Artnet・SPI変換器|変換器用電源|アルミ複合板)\\s*:|$)';
  return String(text||'').match(new RegExp(labelPattern+'\\s*(.+?)'+next,'i'));
}
function extractDrawingSignName(text){const matches=[...String(text||'').matchAll(/(?:■\s*)?SIGN\s*([①②③④⑤⑥⑦⑧⑨⑩\d]+)/ig)];return matches.length?`SIGN ${matches[matches.length-1][1]}`:''}
function parseDrawingAccessoryLine(line){
  const normalized=normalizeDrawingParsedLine(line);
  const definitions=[
    ['Artnet・SPI変換器','Artnet・SPI変換器'],
    ['変換器用電源','変換器用電源'],
    ['コントローラー','コントローラー'],
    ['調光器','調光器'],
    ['受信器','受信器'],
    ['変換器','変換器'],
    ['電源','電源']
  ];
  for(const [sourceLabel,label] of definitions){
    const marker=`${label}:`,index=normalized.indexOf(marker);
    if(index<0)continue;
    const valueText=normalized.slice(index+marker.length).trim();
    const match=valueText.match(/^(.+?)\s*×\s*([\d,]+)\s*(台|個|本|セット|球)?(?:\s|$)/i);
    if(!match)continue;
    const value=String(match[1]||'').trim().replace(/[、,;；]+$/,'').trim();
    if(!value||/アルミ複合板/i.test(value))return null;
    return {sourceLabel,value,quantity:match[2],unit:match[3]||'台',index};
  }
  return null;
}
function parseDrawingPage(lines,page,fileName,pageText=''){
  const results=[];
  const normalizedLines=(Array.isArray(lines)?lines:[]).map(normalizeDrawingParsedLine).filter(Boolean);
  const normalizedText=normalizedLines.join('\n')||String(pageText||'').split(/\r?\n/).map(normalizeDrawingParsedLine).filter(Boolean).join('\n');
  const signName=extractDrawingSignName(normalizedText);
  let productName='',productOrder=0,totalQuantity='',totalUnit='個';
  for(let i=0;i<normalizedLines.length;i++){
    const line=normalizedLines[i];
    if(!productName){
      const match=line.match(/製品:\s*(.+?)(?=\s+(?:仕様|ピッチ|総数|消費電力|入力電流|電源|調光器|コントローラー|受信器|変換器|Artnet・SPI変換器|変換器用電源|アルミ複合板):|$)/i);
      if(match){productName=match[1].trim();productOrder=i*100;}
    }
    if(!totalQuantity){
      const totalText=line.slice(line.indexOf('総数:')+'総数:'.length);
      const parsedTotal=parseDrawingTotalQuantity(totalText,'個');
      if(parsedTotal){totalQuantity=parsedTotal.quantity;totalUnit=parsedTotal.unit;}
    }
  }
  if((!productName||!totalQuantity)&&normalizedText){
    const flat=normalizedText.replace(/\n+/g,' ');
    if(!productName){const match=drawingValueUntilNextLabel(flat,'製品:');if(match)productName=match[1].trim();}
    if(!totalQuantity){const totalMatch=flat.match(/総数:\s*(.+?)(?=\s*(?:消費電力|入力電流|電源|調光器|コントローラー|受信器|変換器|Artnet・SPI変換器|変換器用電源|アルミ複合板)\s*:|$)/i);const parsedTotal=parseDrawingTotalQuantity(totalMatch?.[1]||'','個');if(parsedTotal){totalQuantity=parsedTotal.quantity;totalUnit=parsedTotal.unit;}}
  }
  if(productName&&totalQuantity){results.push(createDrawingResultRow({sourceLabel:'製品',rawName:productName,quantity:totalQuantity,unit:totalUnit,page,fileName,signName,sourceOrder:productOrder}))}
  const accessoryMatches=[];
  normalizedLines.forEach((line,lineIndex)=>{const item=parseDrawingAccessoryLine(line);if(item)accessoryMatches.push({...item,index:lineIndex*100+item.index})});
  if(!accessoryMatches.length&&normalizedText){
    const flat=normalizedText.replace(/\n+/g,' ');
    const patterns=[
      ['Artnet・SPI変換器',/Artnet・SPI変換器:\s*(.+?)\s*×\s*([\d,]+)\s*(台|個|本|セット)/ig],
      ['変換器用電源',/変換器用電源:\s*(.+?)\s*×\s*([\d,]+)\s*(台|個|本|セット)/ig],
      ['コントローラー',/コントローラー:\s*(.+?)\s*×\s*([\d,]+)\s*(台|個|本|セット)/ig],
      ['調光器',/調光器:\s*(.+?)\s*×\s*([\d,]+)\s*(台|個|本|セット)/ig],
      ['受信器',/受信器:\s*(.+?)\s*×\s*([\d,]+)\s*(台|個|本|セット)/ig],
      ['安全ブレーカー',/(?:安全)?ブレーカー:\s*(.+?)\s*×\s*([\d,]+)\s*(台|個|本|セット)/ig],
      ['変換器',/(?<!用)変換器:\s*(.+?)\s*×\s*([\d,]+)\s*(台|個|本|セット)/ig],
      ['電源',/(?<!変換器用)電源:\s*(.+?)\s*×\s*([\d,]+)\s*(台|個|本|セット)/ig]
    ];
    for(const [sourceLabel,pattern] of patterns){for(const match of flat.matchAll(pattern)){const value=String(match[1]||'').trim();if(value&&!/アルミ複合板/i.test(value))accessoryMatches.push({sourceLabel,value,quantity:match[2],unit:match[3]||'台',index:match.index||0})}}
  }
  accessoryMatches.sort((a,b)=>a.index-b.index);
  for(const item of accessoryMatches){results.push(createDrawingResultRow({sourceLabel:item.sourceLabel,rawName:item.value,quantity:item.quantity,unit:item.unit,page,fileName,signName,sourceOrder:item.index}))}
  return results;
}
function dedupeDrawingRows(rows){
  const seen=new Set(),output=[];
  for(const row of rows.sort((a,b)=>String(a.file_name).localeCompare(String(b.file_name),'ja')||Number(a.page)-Number(b.page)||Number(a.block)-Number(b.block)||Number(a.source_order)-Number(b.source_order))){const key=[row.file_name,row.page,row.block,row.sign_name,row.source_label,normalizeDrawingText(row.raw_name),row.quantity,row.unit].join('::');if(seen.has(key))continue;seen.add(key);output.push(row)}
  return output;
}
async function analyzeDrawingPdfs(){
  if(!drawingReaderState.pdfFiles.length){setDrawingStatus('drawingPdfStatus','図面PDFを選択してください。','error');return}
  if(!drawingReaderState.masterRows.length)await loadDrawingMaster();
  const btn=$('analyzeDrawingPdfBtn');
  if(btn)btn.disabled=true;
  setDrawingStatus('drawingPdfStatus','見積作成.exe準拠のPython解析を実行しています…');
  try{
    const formData=new FormData();
    drawingReaderState.pdfFiles.forEach(file=>formData.append('files',file,file.name));
    const response=await fetch('/api/analyze-drawing',{method:'POST',body:formData});
    let payload={};
    try{payload=await response.json()}catch(_){throw new Error(`解析APIから正しい応答がありません（HTTP ${response.status}）`)}
    if(!response.ok||!payload.ok)throw new Error(payload.error||`解析APIエラー（HTTP ${response.status}）`);
    if(payload.parser_version!==DRAWING_PARSER_REQUIRED_VERSION)throw new Error('図面解析APIが古い状態です。差分ZIP内の api/analyze-drawing.py も上書きして再デプロイしてください。');
    const rawRows=Array.isArray(payload.rows)?payload.rows:[];
    const all=rawRows.map((row,index)=>createDrawingResultRow({
      sourceLabel:row.source_label||'製品',
      rawName:row.raw_name||'',
      quantity:row.quantity||1,
      unit:row.unit||'個',
      page:row.page||1,
      fileName:row.file_name||'',
      signName:row.sign_name||'',
      sourceOrder:Number(row.source_order)||index,
      block:Number(row.block)||0
    }));
    drawingReaderState.resultRows=dedupeDrawingRows(all);
    renderDrawingResults();
    const unmatched=drawingReaderState.resultRows.filter(row=>!row.matched).length;
    const review=drawingReaderState.resultRows.filter(row=>row.matched&&row.confidence!=='high').length;
    const fileSummary=(payload.files||[]).map(item=>`${item.name} ${item.rows}行`).join('／');
    console.info('[図面Python解析]',{engine:payload.engine,files:payload.files,rows:drawingReaderState.resultRows.length});
    setDrawingStatus('drawingPdfStatus',`解析完了：${drawingReaderState.resultRows.length}行${unmatched?`／未照合 ${unmatched}行`:''}${review?`／確認推奨 ${review}行`:''}${fileSummary?`（${fileSummary}）`:''}`,'ok');
  }catch(error){
    console.error('[図面Python解析]',error);
    setDrawingStatus('drawingPdfStatus',`解析できませんでした：${error.message||error}`,'error');
  }finally{
    if(btn)btn.disabled=false;
  }
}
function drawingClipboardGroupKey(row){
  const fileName=String(row.file_name||'').trim();
  const signName=String(row.sign_name||'').trim();
  const page=String(row.page||'').trim();
  return `${fileName}::${signName||`PAGE ${page}`}`;
}
function getDrawingClipboardText(){
  const rows=drawingReaderState.resultRows.filter(row=>row.quantity>0&&row.product_number&&row.product_name);if(!rows.length)return '';
  const values=['*****'];
  let hasWrittenBlock=false;
  rows.forEach(row=>{
    const isProductRow=normalizeDrawingText(row.source_label||'')==='製品';
    // 見積書では、各図面ブロックの先頭となる製品行の前に必ず空白行を1行入れる。
    // 製品→電源/ブレーカーは同じブロックとして連続し、次の製品から新しいブロックにする。
    // 空文字3個はクリップボード/VBA環境によって区切り行として扱われない場合があるため、
    // 見た目は空白のまま確実に1行消費する半角スペース3個を送る。
    if(isProductRow&&hasWrittenBlock)values.push(' ',' ',' ');
    values.push(String(row.product_name).replace(/,/g,' '),String(row.product_number).replace(/,/g,' '),String(ceilDrawingQuantityToUnit(row.quantity,row.purchase_unit)));
    if(isProductRow)hasWrittenBlock=true;
  });
  return values.join(',');
}
async function copyDrawingQuote(){
  const incomplete=drawingReaderState.resultRows.filter(row=>!row.product_number||!row.product_name);
  if(incomplete.length){toast(`商品未照合が ${incomplete.length}行あります`);return}
  const text=getDrawingClipboardText();if(!text){toast('コピーする読取結果がありません');return}
  try{await navigator.clipboard.writeText(text);toast('見積もりフォーマット貼り付け用データをコピーしました')}catch(_){copyText(text,'見積もりフォーマット貼り付け用データ')}
}


function extractDrawingProjectName(fileName){
  const base=String(fileName||'').replace(/^.*[\\/]/,'').replace(/\.pdf$/i,'').trim();
  if(!base)return '';
  const underscoreIndex=base.indexOf('_');
  return (underscoreIndex>=0?base.slice(0,underscoreIndex):base).trim();
}
function getSelectedDrawingProjectNames(){
  return [...new Set(drawingReaderState.pdfFiles.map(file=>extractDrawingProjectName(file?.name)).filter(Boolean))];
}
function updateDrawingProjectNameCopyButton(){
  const button=$('copyDrawingProjectNameBtn');
  if(!button)return;
  const names=getSelectedDrawingProjectNames();
  button.disabled=!names.length;
  button.textContent=names.length>1?`案件名コピー（${names.length}件）`:'案件名コピー';
}
async function copyDrawingProjectName(){
  const names=getSelectedDrawingProjectNames();
  if(!names.length){toast('図面PDFを選択してください');return}
  const text=names.join('\n');
  try{
    await navigator.clipboard.writeText(text);
    toast(names.length>1?`${names.length}件の案件名をコピーしました`:`案件名「${names[0]}」をコピーしました`);
  }catch(_){copyText(text,'案件名')}
}

function setupDrawingDropZone(zoneId,inputId,type){const zone=$(zoneId),input=$(inputId);if(!zone||!input)return;zone.addEventListener('click',()=>input.click());zone.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();input.click()}});['dragenter','dragover'].forEach(name=>zone.addEventListener(name,e=>{e.preventDefault();zone.classList.add('is-dragover')}));['dragleave','drop'].forEach(name=>zone.addEventListener(name,e=>{e.preventDefault();zone.classList.remove('is-dragover')}));zone.addEventListener('drop',e=>{const files=[...(e.dataTransfer?.files||[])];if(type==='pdf'){drawingReaderState.pdfFiles=files.filter(f=>/\.pdf$/i.test(f.name));input.value='';$('drawingPdfFileName').textContent=drawingReaderState.pdfFiles.length?drawingReaderState.pdfFiles.map(f=>f.name).join(' / '):'PDFを選択してください';setDrawingStatus('drawingPdfStatus',`${drawingReaderState.pdfFiles.length}件選択しました。`);updateDrawingProjectNameCopyButton()}else{const file=files.find(f=>/\.(xlsx|xlsm|xls)$/i.test(f.name));drawingReaderState.masterFile=file||null;$('drawingMasterFileName').textContent=file?.name||'Excelを選択してください'}});input.addEventListener('change',()=>{const files=[...(input.files||[])];if(type==='pdf'){drawingReaderState.pdfFiles=files;$('drawingPdfFileName').textContent=files.length?files.map(f=>f.name).join(' / '):'未選択';setDrawingStatus('drawingPdfStatus',files.length?`${files.length}件選択しました。`:'PDF未選択');updateDrawingProjectNameCopyButton()}else{drawingReaderState.masterFile=files[0]||null;$('drawingMasterFileName').textContent=drawingReaderState.masterFile?.name||'未選択'}})}
function runDrawingParserSelfTests(){
  const tests=[
    {name:'BEAMS',text:'■SIGN ① 製 品：モノミニⅡ 昼白色 5000K 仕 様：D50 総 数：75 個 電 源：LP1026-24 × 1 台',expected:[['製品','モノミニⅡ 昼白色 5000K',75],['電源','LP1026-24',1]]},
    {name:'RGB',text:'製 品：RGB トリオ 総 数：8 個 電 源：HLG-150H-12 × 1 台 調 光 器：DP-10A × 1 台',expected:[['製品','RGB トリオ',8],['電源','HLG-150H-12',1],['調光器','DP-10A',1]]},
    {name:'IC',text:'製 品：RGBW グランデ IC 総 数：1682 個 電 源：WKLVZ240-6R3HJ × 27 台 Artnet・SPI 変換器：SMA-1024 × 7 台 変換器用電源：WKLVZ240-6R3HJ × 7 台 コントローラー：DIAheart × 1 台 アルミ複合板：910mm×1820mm × 27 枚',expected:[['製品','RGBW グランデ IC',1682],['電源','WKLVZ240-6R3HJ',27],['Artnet・SPI変換器','SMA-1024',7],['変換器用電源','WKLVZ240-6R3HJ',7],['コントローラー','DIAheart',1]]},
    {name:'MULTI_BASE_TOTAL',text:'×7基 ※()内の数量は7基分 製 品：スターライトIV 昼光色6500K 仕 様：D100(内寸) ピッチ：180 総 数：36個 [W9×H4] (252個) 消費電力：84.60 W (592.20 W) 電 源：WKLVZ240-6R3HJ × 7 台',expected:[['製品','スターライトIV 昼光色6500K',252],['電源','WKLVZ240-6R3HJ',7]]}
  ];
  for(const test of tests){
    const rows=parseDrawingPage([],1,`${test.name}.pdf`,test.text);
    for(const [label,name,qty] of test.expected){
      const found=rows.some(row=>row.source_label===label&&normalizeDrawingText(row.raw_name)===normalizeDrawingText(name)&&row.quantity===qty);
      if(!found)throw new Error(`図面解析セルフテスト失敗：${test.name}/${label}`);
    }
    const hasExcluded=rows.some(row=>/アルミ複合板/.test(row.source_label+row.raw_name));
    if(hasExcluded)throw new Error(`図面解析セルフテスト失敗：${test.name}/アルミ複合板除外`);
  }
  console.info('[図面解析セルフテスト] OK');
}
function initDrawingReader(){
  setupDrawingDropZone('drawingMasterDrop','drawingMasterInput','excel');setupDrawingDropZone('drawingPdfDrop','drawingPdfInput','pdf');
  $('loadDrawingMasterBtn')?.addEventListener('click',loadDrawingMaster);$('updateDrawingMasterBtn')?.addEventListener('click',updateDrawingMasterFromExcel);$('analyzeDrawingPdfBtn')?.addEventListener('click',analyzeDrawingPdfs);$('copyDrawingProjectNameBtn')?.addEventListener('click',copyDrawingProjectName);
  $('addDrawingRowBtn')?.addEventListener('click',()=>{drawingReaderState.resultRows.push(createDrawingResultRow({sourceLabel:'手入力',rawName:'',quantity:1,unit:'個',page:'-',fileName:'手入力'}));renderDrawingResults()});
  $('copyDrawingQuoteBtn')?.addEventListener('click',copyDrawingQuote);
  $('resetDrawingReaderBtn')?.addEventListener('click',()=>{drawingReaderState.resultRows=[];drawingReaderState.pdfFiles=[];if($('drawingPdfInput'))$('drawingPdfInput').value='';if($('drawingPdfFileName'))$('drawingPdfFileName').textContent='未選択';setDrawingStatus('drawingPdfStatus','PDF未選択');updateDrawingProjectNameCopyButton();renderDrawingResults()});
  const saved=getPriceAccessCode();if(saved&&$('drawingAccessCode'))$('drawingAccessCode').value=saved;updateDrawingProjectNameCopyButton();renderDrawingResults();
}
initDrawingReader();

// Page navigation: show only the selected page. Home stays focused on sales tools.


// ---- シームレス系製品 概算算出 ----
const linearProductSpecs = {
  SeamlessBeam: {
    label:'シームレスビーム', colorOptions:[['50','5000K'],['40','4000K'],['35','3500K'],['30','3000K'],['27','2700K']], skuPrefix:'SBMS1', skuSuffix:(c)=>`H${c}E`, family:'single',
    sizes:{'004':[44,.55,1],'008':[84,1.09,1],'012':[125,1.64,1],'016':[165,2.19,0],'021':[206,2.74,1],'025':[247,3.28,1],'03':[287,3.83,0],'033':[328,4.38,1],'037':[368,4.92,1],'04':[409,5.47,1],'045':[450,6.02,1],'049':[490,6.57,1],'053':[531,7.11,1],'06':[571,7.66,0],'062':[612,8.21,1],'065':[653,8.75,1],'069':[693,9.30,1],'073':[734,9.85,1],'077':[774,10.39,1],'082':[815,10.94,1],'09':[856,11.49,0],'096':[896,12.04,1],'097':[937,12.58,1],'10':[978,13.13,1],'102':[1018,13.68,1],'106':[1059,14.22,1],'109':[1099,14.77,1],'12':[1140,15.32,0]}
  },
  SeamlessBeamTN: {
    label:'シームレスビーム TN', colorOptions:[['2250','TN']], skuPrefix:'SBTS1', skuSuffix:()=>`H2250E`, family:'TR',
    sizes:{'006':[60,.77,1],'012':[117,1.54,1],'018':[174,2.32,1],'023':[230,3.09,1],'03':[287,3.86,0],'035':[344,4.63,1],'04':[401,5.41,1],'046':[458,6.18,1],'052':[515,6.95,1],'06':[571,7.72,0],'063':[628,8.50,1],'069':[685,9.27,1],'075':[742,10.04,1],'080':[801,10.81,1],'09':[856,11.58,0],'092':[913,12.36,1],'10':[969,13.13,1],'102':[1026,13.90,1],'108':[1083,14.67,1],'12':[1140,15.44,0]}
  },
  SeamlessBeamRGB: {
    label:'シームレスビーム RGB', colorOptions:[['RGB','RGB']], skuPrefix:'SBCS1', skuSuffix:()=>`HDRGB`, family:'TR',
    sizes:{'005':[50,.72,1],'01':[98,1.44,1],'014':[145,2.16,1],'019':[193,2.88,1],'024':[240,3.60,1],'03':[287,4.32,0],'034':[335,5.04,1],'038':[382,5.76,1],'04':[429,6.48,1],'048':[477,7.20,1],'052':[524,7.92,1],'06':[571,8.64,0],'062':[619,9.36,1],'067':[666,10.08,1],'072':[714,10.80,1],'076':[761,11.52,1],'080':[808,12.24,1],'09':[856,12.96,0],'092':[903,13.68,1],'095':[950,14.40,1],'10':[998,15.12,1],'104':[1045,15.84,1],'109':[1093,16.56,1],'12':[1140,17.28,0]}
  },
  SeamlessBeamRGBWIC: {
    label:'シームレスビーム RGBW IC', colorOptions:[['RGBW','RGBW']], skuPrefix:'SBCS1', skuSuffix:()=>`HDRGBW`, family:'IC',
    sizes:{'005':[56,1.02,1,1],'011':[108,2.04,1,2],'016':[161,3.05,1,3],'021':[213,4.07,1,4],'03':[266,5.09,0,5],'031':[318,6.11,1,6],'037':[371,7.13,1,7],'042':[423,8.14,1,8],'047':[476,9.16,1,9],'052':[528,10.18,1,10],'06':[581,11.20,0,11],'063':[633,12.22,1,12],'068':[686,13.23,1,13],'073':[738,14.25,1,14],'079':[791,15.27,1,15],'084':[843,16.29,1,16],'09':[896,17.31,0,17],'10':[948,18.32,1,18],'101':[1001,19.34,1,19],'105':[1053,20.36,1,20],'110':[1106,21.38,1,21],'12':[1158,22.40,0,22]}
  }
};
const linearPsuSpecs={
  'WKLVZ240-6R3HJ':{name:'DC24V電源',power:135,A100:1.82,A200:.94},
  'WKLVZ240-6R3HP5':{name:'PWM電源',power:135,A100:1.71,A200:.84},
  'MU200S024BPI500_PWM':{name:'PWM電源',power:180,A100:2.30,A200:1.15},
  'MU200S024BPI500_DALI':{name:'DALI電源',power:180,A100:2.30,A200:1.15},
  'K58-015C024-203':{name:'DC24V電源',power:15,A100:.22,A200:.11},
  'RWS50B-5':{name:'DC5V電源_50W_屋内',power:30,A100:1.10,A200:.70}
};
const linearOptionProducts={
  clip:{H2:['メタルクリップH_SB用','M416007-0112-01'],L2:['メタルクリップL_SB用','M417000-0032'],H3:['メタルクリップH_SB用','M416007-0112-01'],L3:['メタルクリップL_SB用','M417000-0032']},
  common:{joint:['ジョイントプレート','M417003-0140'],stopper:['ストッパープレート','M417003-0141']},
  single:{lead:['DCリードケーブルF_SB.FS用','BWC-0000-0470F'],end:['エンドキャップM_SB.FS用','BCN-0000-0077'],L500:['延長ケーブルL500_SB.FS用','BWC-0000-0359B'],L1500:['延長ケーブルL1500_SB.FS用','BWC-0000-0354B']},
  TR:{lead:['DCリードケーブルF_SB.TR用','BWC-0000-0476F'],end:['エンドキャップM_SB.TR用','BCN-0000-0076M'],L500:['延長ケーブルL500_SB.TR用','BWC-0000-0375C'],L1500:['延長ケーブルL1500_SB.TR用','BWC-0000-0374C']},
  IC:{lead:['DC・信号リードケーブル_SB.TR用','BWC-0000-0495A'],signalLead:['信号リードケーブルF_SB.TR用','BWC-0000-0479F'],end:['エンドキャップM_SB.TR用','BCN-0000-0076M'],L500:['信号延長ケーブルL500_SB.TR用','BWC-0000-0481'],L1500:['信号延長ケーブルL1500_SB.TR用','BWC-0000-0482']}
};
let linearCircuitSeq=0;
let linearLastResult=null;
const linearCatalogLinks={
  SeamlessBeam:'https://www.aristo-japan.co.jp/cms/wp-content/uploads/2025/09/sign_LI_SB.pdf',
  SeamlessBeamTN:'https://www.aristo-japan.co.jp/cms/wp-content/uploads/2025/09/sign_LI_SBTN.pdf',
  SeamlessBeamRGB:'https://www.aristo-japan.co.jp/cms/wp-content/uploads/2025/09/sign_LI_SBRGB.pdf',
  SeamlessBeamRGBWIC:'https://www.aristo-japan.co.jp/cms/wp-content/uploads/2025/09/sign_LI_SBRGBWIC.pdf'
};
function linearSelectOptions(id, options, selected){const el=$(id);if(!el)return;el.innerHTML=options.map(([v,t])=>`<option value="${escapeAttr(v)}">${escapeHtml(t)}</option>`).join('');if(selected&&options.some(x=>x[0]===selected))el.value=selected;}
function getLinearSpec(){return linearProductSpecs[$('linearProductSelect')?.value]||linearProductSpecs.SeamlessBeam;}
function updateLinearSpecLink(){const key=$('linearProductSelect')?.value||'SeamlessBeam',spec=getLinearSpec(),btn=$('linearSpecLinkBtn'),url=linearCatalogLinks[key]||'';if(!btn)return;btn.textContent=`${spec.label}のスペックを見る`;btn.href=url||'#';btn.setAttribute('aria-disabled',url?'false':'true');}
function updateLinearSelects(){
  const spec=getLinearSpec(); updateLinearSpecLink(); linearSelectOptions('linearColorSelect',spec.colorOptions);
  const dimmings=spec.family==='IC'?[['ARTNET','ARTNET']]:spec===linearProductSpecs.SeamlessBeamTN?[['無し','無し'],['PWM','PWM'],['DMX','DMX'],['ARTNET','ARTNET'],['DALI','DALI'],['アナログ','アナログ']]:[['無し','無し'],['PWM','PWM'],['DMX','DMX'],['ARTNET','ARTNET'],['DALI','DALI'],['アナログ','アナログ']];
  const prev=$('linearDimmingSelect')?.value; linearSelectOptions('linearDimmingSelect',dimmings,prev);
  updateLinearDevices();
}
function updateLinearDevices(){
  const spec=getLinearSpec(), mode=$('linearDimmingSelect')?.value||'無し';
  let psus=[['WKLVZ240-6R3HJ','WKLVZ240-6R3HJ']], dimmers=[['無し','無し']], controllers=[['無し','無し']], converters=[['無し','無し']];
  if(mode==='PWM'){psus=[['WKLVZ240-6R3HP5','WKLVZ240-6R3HP5'],['MU200S024BPI500_PWM','MU200S024BPI500_PWM']];dimmers=[['PD-10A','PD-10A']];controllers=[['無し','無し'],['LZA-93099','LZA-93099'],['NQ21505','NQ21505'],['NQ28841K','NQ28841K'],['NQ28861K','NQ28861K']];}
  if(mode==='DMX'){dimmers=[['DP3CH-10A','DP3CH-10A'],['PX0408','PX0408']];controllers=[['SLESA-U11','SLESA-U11']];}
  if(mode==='ARTNET'){dimmers=[['無し','無し'],['DP3CH-10A','DP3CH-10A'],['PX0408','PX0408']];controllers=[['DIAheart','DIAheart']];converters=spec.family==='IC'?[['SMA-1024PIX','SMA-1024PIX'],['SMA-2048PIX','SMA-2048PIX'],['SMA-4096PIX','SMA-4096PIX']]:[['無し','無し']];}
  if(mode==='DALI'){psus=[['MU200S024BPI500_DALI','MU200S024BPI500_DALI']];controllers=spec===linearProductSpecs.SeamlessBeamTN?[['2300TR-G4-CCT','2300TR-G4-CCT']]:[['2300TR-G4-DIM','2300TR-G4-DIM'],['2300TR-G4-CCT','2300TR-G4-CCT'],['EDT3','EDT3']];}
  if(mode==='アナログ'){dimmers=[['DP-10A','DP-10A'],['SD-10A','SD-10A']];}
  linearSelectOptions('linearPsuSelect',psus,$('linearPsuSelect')?.value);linearSelectOptions('linearDimmerSelect',dimmers,$('linearDimmerSelect')?.value);linearSelectOptions('linearControllerSelect',controllers,$('linearControllerSelect')?.value);linearSelectOptions('linearConverterSelect',converters,$('linearConverterSelect')?.value);
  if(spec.family==='IC'||mode==='DALI'||mode==='ARTNET') $('linearSignalSelect').value='yes';
}
function addLinearCircuit(distance=0){
  const list=$('linearCircuitList');if(!list)return;linearCircuitSeq+=1;const id=linearCircuitSeq;
  const div=document.createElement('div');div.className='linear-circuit';div.dataset.id=id;div.innerHTML=`<div class="linear-circuit-head"><strong>系統 ${id}</strong><button class="ghost compact linear-remove-circuit" type="button" aria-label="系統${id}を削除">削除</button></div><label class="linear-distance-label">設置距離（mm）<input class="linear-distance-input" type="number" min="0" step="1" value="${distance||''}" placeholder="例：10000" inputmode="numeric"></label><div class="linear-circuit-result"><span>未計算</span></div><details class="linear-manual-details"><summary>本数を手動調整</summary><div class="linear-manual-size-grid"></div></details>`;
  div.querySelector('.linear-remove-circuit').addEventListener('click',()=>{div.remove();renumberLinearCircuits();});
  list.appendChild(div); renderLinearManualSizes(div);
}
function renumberLinearCircuits(){[...document.querySelectorAll('.linear-circuit')].forEach((el,i)=>{el.dataset.id=i+1;el.querySelector('.linear-circuit-head strong').textContent=`系統 ${i+1}`;});linearCircuitSeq=document.querySelectorAll('.linear-circuit').length;}
function renderLinearManualSizes(circuit, values={}){const spec=getLinearSpec();const custom=$('linearCustomSelect')?.value==='yes';const sizes=Object.entries(spec.sizes).filter(([,v])=>custom||!v[2]).sort((a,b)=>b[1][0]-a[1][0]);const wrap=circuit.querySelector('.linear-manual-size-grid');wrap.innerHTML=sizes.map(([k])=>`<label>${k}<input type="number" min="0" step="1" data-size="${k}" value="${Number(values[k]||0)}" inputmode="numeric"></label>`).join('');}
function autoChooseLinearSizes(distance,spec,custom){let remain=Math.max(0,Math.floor(distance)), total=0,power=0,pix=0,count=0,values={};const sizes=Object.entries(spec.sizes).filter(([,v])=>custom||!v[2]).sort((a,b)=>b[1][0]-a[1][0]);for(const [key,v] of sizes){const qty=Math.floor(remain/v[0]);if(qty>0){values[key]=qty;remain-=qty*v[0];total+=qty*v[0];power+=qty*v[1];pix+=qty*(v[3]||0);count+=qty;}}return{values,total,power,pix,count,diff:total-distance};}
function currentLinearCounts(circuit){const out={};circuit.querySelectorAll('[data-size]').forEach(inp=>{const n=Math.max(0,Math.floor(Number(inp.value||0)));if(n)out[inp.dataset.size]=n;});return out;}
function calculateLinearCircuit(circuit,forceAuto=true){const spec=getLinearSpec(),distance=Math.max(0,Math.floor(Number(circuit.querySelector('.linear-distance-input')?.value||0))),custom=$('linearCustomSelect')?.value==='yes';let calc;if(forceAuto){calc=autoChooseLinearSizes(distance,spec,custom);renderLinearManualSizes(circuit,calc.values);}else{const values=currentLinearCounts(circuit);let total=0,power=0,pix=0,count=0;Object.entries(values).forEach(([k,q])=>{const v=spec.sizes[k];if(v){total+=v[0]*q;power+=v[1]*q;pix+=(v[3]||0)*q;count+=q;}});calc={values,total,power,pix,count,diff:total-distance};}
  circuit._linearCalc={...calc,distance};circuit.querySelector('.linear-circuit-result').innerHTML=`<div><span>合計本数</span><strong>${calc.count}</strong></div><div><span>消費電力</span><strong>${calc.power.toFixed(2)}W</strong></div><div><span>総長</span><strong>${calc.total.toLocaleString()}mm</strong></div><div><span>差</span><strong>${calc.diff.toLocaleString()}mm</strong></div>${spec.family==='IC'?`<div><span>PIX</span><strong>${calc.pix}</strong></div>`:''}`;return circuit._linearCalc;}
function makeLinearItem(category,name,code,qty){return{category,name,code,qty:Math.max(0,Math.ceil(qty||0))};}
function buildLinearEstimate(forceAuto=true){
  const spec=getLinearSpec(),circuits=[...document.querySelectorAll('.linear-circuit')],color=$('linearColorSelect')?.value||spec.colorOptions[0][0],mode=$('linearDimmingSelect')?.value||'無し',psuCode=$('linearPsuSelect')?.value||'WKLVZ240-6R3HJ',psu=linearPsuSpecs[psuCode],family=spec.family; if(!circuits.length){addLinearCircuit();return null;}
  const calculations=circuits.map(c=>calculateLinearCircuit(c,forceAuto));const totals=calculations.reduce((a,c)=>({count:a.count+c.count,power:a.power+c.power,pix:a.pix+c.pix,total:a.total+c.total,distance:a.distance+c.distance}),{count:0,power:0,pix:0,total:0,distance:0});
  const psuQty=totals.power>0?Math.ceil(totals.power/psu.power):0;const le=family==='IC'?psuQty:psuQty*2;const items=[];
  calculations.forEach((calc,idx)=>{Object.entries(calc.values).sort((a,b)=>spec.sizes[b[0]][0]-spec.sizes[a[0]][0]).forEach(([size,qty])=>items.push(makeLinearItem(`LED-${idx+1}`,spec.label.replace(/ /g,'_'),`${spec.skuPrefix}-${size}${spec.skuSuffix(color)}`,qty)));});
  const clip=linearOptionProducts.clip[$('linearClipSelect')?.value||'H2'];if(totals.count)items.push(makeLinearItem('クリップ',clip[0],clip[1],totals.count*2));const opt=linearOptionProducts[family];
  if(family==='IC'){
    if(le){items.push(makeLinearItem('リード',opt.lead[0],opt.lead[1],le));items.push(makeLinearItem('リード',opt.signalLead[0],opt.signalLead[1],le*2));items.push(makeLinearItem('エンド',opt.end[0],opt.end[1],le*2));}
  }else if(le){items.push(makeLinearItem('リード',opt.lead[0],opt.lead[1],le));items.push(makeLinearItem('エンド',opt.end[0],opt.end[1],le));}
  const ext=$('linearExtensionSelect')?.value;if(ext&&ext!=='none'&&opt[ext])items.push(makeLinearItem('延長',opt[ext][0],opt[ext][1],Math.max(1,le)));
  if($('linearJointSelect')?.value==='yes')items.push(makeLinearItem('ジョイント',linearOptionProducts.common.joint[0],linearOptionProducts.common.joint[1],Math.max(1,totals.count-1)));
  if($('linearStopperSelect')?.value==='yes')items.push(makeLinearItem('ストッパー',linearOptionProducts.common.stopper[0],linearOptionProducts.common.stopper[1],Math.max(1,totals.count)));
  if(psuQty)items.push(makeLinearItem('電源',psu.name,psuCode,psuQty));
  let parentW=0,parentA100=0,parentA200=0,ch=family==='IC'?totals.pix*4:0,univ=ch?Math.ceil(ch/512):0;
  const dimmer=$('linearDimmerSelect')?.value,controller=$('linearControllerSelect')?.value,converter=$('linearConverterSelect')?.value;
  if(mode==='DALI'){
    if(controller&&controller!=='無し')items.push(makeLinearItem('コントローラー',controller==='2300TR-G4-CCT'?'DALIコントローラー調色用':'DALIコントローラー',controller,1));items.push(makeLinearItem('その他','DALI_BUS電源','LE004025LBZW1',1));parentW+=4;parentA100+=.05;parentA200+=.03;
  }
  if(mode==='ARTNET'&&family==='IC'){
    const cap=converter==='SMA-2048PIX'?1536:converter==='SMA-4096PIX'?3072:768;const cq=Math.max(1,Math.ceil(totals.pix/cap));items.push(makeLinearItem('信号変換器',converter==='SMA-2048PIX'?'Artnet・SPI変換器_2048PIX':converter==='SMA-4096PIX'?'Artnet・SPI変換器_4096PIX':'Artnet・SPI変換器_1024PIX',converter||'SMA-1024PIX',cq));items.push(makeLinearItem('電源','DC24V電源','K58-015C024-203',cq));items.push(makeLinearItem('コントローラー','Artnetコントローラー',controller||'DIAheart',1));items.push(makeLinearItem('その他','スイッチングハブ5ポート','LSW6-GT-5NS/BK',Math.max(1,Math.ceil((cq+1)/4))));parentW+=cq*7.2+5+2.5;parentA100+=cq*.075+.075+.03;
  } else {
    if(dimmer&&dimmer!=='無し')items.push(makeLinearItem('受信機',dimmer,dimmer,Math.max(1,Math.ceil(psuQty/3))));
    if(controller&&controller!=='無し'&&mode!=='DALI')items.push(makeLinearItem('コントローラー',controller,controller,1));
  }
  if($('linearSignalSelect')?.value==='yes')items.push(makeLinearItem('その他','信号ケーブル','FCPEV091P',1));
  const ledA100=totals.power/80, ledA200=totals.power/160; const result={spec,color,mode,psuCode,items,totals:{...totals,psuQty,le,ch,univ,parentW,parentA100,parentA200,ledA100,ledA200,allW:totals.power+parentW,allA100:ledA100+parentA100,allA200:ledA200+parentA200}};linearLastResult=result;renderLinearResult(result);return result;
}
function renderLinearResult(result){const rows=$('linearEstimateRows'),summary=$('linearSummary'),status=$('linearResultStatus');if(!rows||!summary)return;rows.innerHTML=`<div class="linear-result-header"><span>項目</span><span>品名</span><span>品番</span><span>数量</span></div>`+result.items.map(x=>`<div class="linear-result-row"><span>${escapeHtml(x.category)}</span><span>${escapeHtml(x.name)}</span><span>${escapeHtml(x.code)}</span><strong>${x.qty}</strong></div>`).join('');const t=result.totals;summary.innerHTML=`<div><span>本数</span><strong>${t.count}</strong></div><div><span>LED消費電力</span><strong>${t.power.toFixed(2)}W</strong></div><div><span>電源</span><strong>${t.psuQty}台</strong></div><div><span>総長</span><strong>${t.total.toLocaleString()}mm</strong></div><div><span>差</span><strong>${(t.total-t.distance).toLocaleString()}mm</strong></div>${result.spec.family==='IC'?`<div><span>PIX / ch / univ</span><strong>${t.pix} / ${t.ch} / ${t.univ}</strong></div>`:''}<div><span>入力容量（LED）</span><strong>${t.ledA100.toFixed(2)}A/100V・${t.ledA200.toFixed(2)}A/200V</strong></div><div><span>消費電力（合計）</span><strong>${t.allW.toFixed(2)}W</strong></div>`;if(status)status.textContent=`計算完了：${result.items.length}明細`;
}
async function copyLinearEstimateExcel(){const r=linearLastResult||buildLinearEstimate(true);if(!r||!r.items.length){alert('先に自動計算してください。');return;}const clean=s=>String(s??'').replace(/[\r\n,]/g,' ').trim();const text='*****,'+r.items.flatMap(x=>[clean(x.name),clean(x.code),String(x.qty)]).join(',');try{await navigator.clipboard.writeText(text);alert('見積もりフォーマット貼り付け用テキストをコピーしました。');}catch(e){const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();alert('見積もりフォーマット貼り付け用テキストをコピーしました。');}}
function buildLinearShareText(){
  const r=linearLastResult;
  if(!r||!r.items?.length){alert('先に自動計算してください。');return null;}
  const productKey=$('linearProductSelect')?.value||'SeamlessBeam';
  const catalogUrl=linearCatalogLinks[productKey]||'';
  const t=r.totals;
  const circuits=[...document.querySelectorAll('.linear-circuit')].map((c,i)=>{
    const d=Math.max(0,Math.floor(Number(c.querySelector('.linear-distance-input')?.value||0)));
    return d > 0 ? `系統${i+1}：${d.toLocaleString()}mm` : '';
  }).filter(Boolean);
  const itemLines=r.items.map(x=>`・${x.name}（${x.code}） ${x.qty}`);
  return [
    '【シームレス系製品 概算結果】',
    '',
    `製品：${r.spec.label}`,
    `色温度：${$('linearColorSelect')?.selectedOptions?.[0]?.textContent||r.color}`,
    `調光方式：${r.mode}`,
    '',
    '設置距離：',
    ...circuits,
    '',
    '製品・機器構成：',
    ...itemLines,
    '',
    `合計製品長：${t.total.toLocaleString()}mm`,
    `設置距離との差：${(t.total-t.distance).toLocaleString()}mm`,
    `LED消費電力：${t.power.toFixed(2)}W`,
    `電源：${t.psuQty}台`,
    ...(r.spec.family==='IC'?[`PIX / ch / Universe：${t.pix} / ${t.ch} / ${t.univ}`]:[]),
    '',
    '製品カタログ：',
    catalogUrl,
    '',
    '※概算結果のため、正式見積時に再確認してください。'
  ].join('\n');
}
function sendLinearEstimateSms(){
  const text=buildLinearShareText();if(!text)return;
  const isiOS=/iPad|iPhone|iPod/.test(navigator.userAgent);
  location.href=`sms:${isiOS?'&':'?'}body=${encodeURIComponent(text)}`;
}
function sendLinearEstimateEmail(){
  const text=buildLinearShareText();if(!text)return;
  const subject=`シームレス系製品 概算結果（${linearLastResult.spec.label}）`;
  location.href=`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}
function clearLinearResult(){linearLastResult=null;$('linearSummary').innerHTML='';$('linearEstimateRows').innerHTML='<div class="drawing-empty">計算結果がここに表示されます。</div>';$('linearResultStatus').textContent='距離を入力して「自動計算」を押してください。';document.querySelectorAll('.linear-circuit-result').forEach(x=>x.innerHTML='<span>未計算</span>');}
function resetLinearEstimate(){
  if($('linearProductSelect'))$('linearProductSelect').value='SeamlessBeam';updateLinearSelects();$('linearCustomSelect').value='no';$('linearClipSelect').value='H2';$('linearJointSelect').value='no';$('linearStopperSelect').value='no';$('linearExtensionSelect').value='none';$('linearSignalSelect').value='no';const list=$('linearCircuitList');if(list){list.innerHTML='';linearCircuitSeq=0;addLinearCircuit();}clearLinearResult();
}
function renderLinearEstimate(){if(!$('linearProductSelect'))return;if(!$('linearProductSelect').options.length){linearSelectOptions('linearProductSelect',Object.entries(linearProductSpecs).map(([k,v])=>[k,v.label]));updateLinearSelects();}if(!$('linearCircuitList')?.children.length)addLinearCircuit();}
function initLinearEstimate(){
  renderLinearEstimate();$('linearProductSelect')?.addEventListener('change',()=>{updateLinearSelects();document.querySelectorAll('.linear-circuit').forEach(c=>renderLinearManualSizes(c));clearLinearResult();});$('linearCustomSelect')?.addEventListener('change',()=>{document.querySelectorAll('.linear-circuit').forEach(c=>renderLinearManualSizes(c));clearLinearResult();});$('linearDimmingSelect')?.addEventListener('change',()=>{updateLinearDevices();clearLinearResult();});$('linearAddCircuitBtn')?.addEventListener('click',()=>addLinearCircuit());['linearAutoCalcBtn','linearAutoCalcMobileBtn'].forEach(id=>$(id)?.addEventListener('click',()=>buildLinearEstimate(true)));['linearExcelCopyBtn','linearExcelCopyBtn2','linearExcelCopyMobileBtn'].forEach(id=>$(id)?.addEventListener('click',copyLinearEstimateExcel));$('linearResetBtn')?.addEventListener('click',resetLinearEstimate);$('linearSmsBtn')?.addEventListener('click',sendLinearEstimateSms);$('linearEmailBtn')?.addEventListener('click',sendLinearEstimateEmail);$('linearClearResultBtn')?.addEventListener('click',clearLinearResult);
}


// ---- グローチューブVI 概算数量計算 ----
const glowConfig = window.GLOWTUBE_ESTIMATE_CONFIG || {products:{},powerSupplies:{},accessories:{},devices:{}};
let glowCircuitSeq=0;
let glowLastResult=null;
function getGlowSpec(){return glowConfig.products[$('glowProductSelect')?.value]||Object.values(glowConfig.products)[0];}
function glowSelectOptions(id,options,selected){const el=$(id);if(!el)return;el.innerHTML=options.map(([v,t])=>`<option value="${escapeAttr(v)}">${escapeHtml(t)}</option>`).join('');if(selected&&options.some(x=>x[0]===selected))el.value=selected;}
function getGlowDimmingOptions(spec){if(spec.family==='tn')return [['DALI','DALI'],['無し','無し']];if(spec.family==='rgb')return [['DMX','DMX']];return [['無し','無し']];}
function updateGlowDevices(){
  const spec=getGlowSpec(),mode=$('glowDimmingSelect')?.value||spec.defaultDimming;
  let psus=spec.family==='tn'&&mode==='DALI'?[['MU200S024BPI500_DALI','MU200S024BPI500_DALI'],['WKLVZ240-6R3HJ','WKLVZ240-6R3HJ']]:[['WKLVZ240-6R3HJ','WKLVZ240-6R3HJ'],['LP1026-24','LP1026-24']];
  const dev=glowConfig.devices[mode]||glowConfig.devices.none;
  glowSelectOptions('glowPsuSelect',psus,$('glowPsuSelect')?.value);
  glowSelectOptions('glowDimmerSelect',dev.dimmers||[['無し','無し']],$('glowDimmerSelect')?.value);
  glowSelectOptions('glowControllerSelect',dev.controllers||[['無し','無し']],$('glowControllerSelect')?.value);
  glowSelectOptions('glowConverterSelect',[['無し','無し']]);
  if($('glowSignalSelect'))$('glowSignalSelect').value=(mode==='DALI'||mode==='DMX')?'yes':'no';
  const exts=Object.entries(glowConfig.accessories[spec.family]?.extensions||{}).map(([k,v])=>[k,v[0]]);
  glowSelectOptions('glowExtensionSelect',[['none','無し'],...exts],$('glowExtensionSelect')?.value);
}
function updateGlowSpecLink(){const spec=getGlowSpec(),btn=$('glowSpecLinkBtn'),url=spec?.catalogUrl||'';if(!btn)return;btn.textContent=`${spec?.label||'選択中の製品'}のスペックを見る`;btn.href=url||'#';btn.setAttribute('aria-disabled',url?'false':'true');}
function updateGlowSelects(){
  const spec=getGlowSpec();
  updateGlowSpecLink();
  glowSelectOptions('glowColorSelect',spec.colorOptions);
  glowSelectOptions('glowDimmingSelect',getGlowDimmingOptions(spec),spec.defaultDimming);
  updateGlowDevices();
  if($('glowCustomSelect')){$('glowCustomSelect').innerHTML='<option value="no">無し</option>';$('glowCustomSelect').disabled=true;}
  if($('glowClipSelect')){$('glowClipSelect').innerHTML='<option value="included">付属（1本につき2組）</option>';}
  if($('glowJointSelect')){$('glowJointSelect').innerHTML='<option value="no">無し</option>';$('glowJointSelect').disabled=true;}
  if($('glowStopperSelect')){$('glowStopperSelect').innerHTML='<option value="no">無し</option>';$('glowStopperSelect').disabled=true;}
}
function addGlowCircuit(distance=0){
  const list=$('glowCircuitList');if(!list)return;glowCircuitSeq+=1;const id=glowCircuitSeq;
  const div=document.createElement('div');div.className='linear-circuit glow-circuit';div.dataset.id=id;
  div.innerHTML=`<div class="linear-circuit-head"><strong>系統 ${id}</strong><button class="ghost compact glow-remove-circuit" type="button">削除</button></div><label class="linear-distance-label">設置距離（mm）<input class="glow-distance-input" type="number" min="0" step="1" value="${distance||''}" placeholder="例：10000" inputmode="numeric"></label><div class="glow-circuit-result linear-circuit-result"><span>未計算</span></div><details class="linear-manual-details"><summary>本数を手動調整</summary><div class="glow-manual-size-grid linear-manual-size-grid"></div></details>`;
  div.querySelector('.glow-remove-circuit').addEventListener('click',()=>{div.remove();renumberGlowCircuits();});
  list.appendChild(div);renderGlowManualSizes(div);
}
function renumberGlowCircuits(){[...document.querySelectorAll('.glow-circuit')].forEach((el,i)=>{el.dataset.id=i+1;el.querySelector('.linear-circuit-head strong').textContent=`系統 ${i+1}`;});glowCircuitSeq=document.querySelectorAll('.glow-circuit').length;}
function renderGlowManualSizes(circuit,values={}){const spec=getGlowSpec();const wrap=circuit.querySelector('.glow-manual-size-grid');if(!wrap)return;wrap.innerHTML=Object.entries(spec.sizes).sort((a,b)=>b[1].length-a[1].length).map(([k])=>`<label>${k}<input type="number" min="0" step="1" data-size="${k}" value="${Number(values[k]||0)}" inputmode="numeric"></label>`).join('');}
function currentGlowCounts(circuit){const values={};circuit.querySelectorAll('.glow-manual-size-grid input').forEach(i=>values[i.dataset.size]=Math.max(0,Math.floor(Number(i.value)||0)));return values;}
function autoChooseGlowSizes(distance,spec){let remain=Math.max(0,Math.floor(distance)),total=0,power=0,count=0,values={};const sizes=Object.entries(spec.sizes).sort((a,b)=>b[1].length-a[1].length);for(const [key,v] of sizes){const qty=Math.floor(remain/v.length);if(qty){values[key]=qty;remain-=qty*v.length;total+=qty*v.length;power+=qty*v.watt;count+=qty;}}return{values,total,power,count,diff:total-distance};}
function calculateGlowLeadQuantity(values,spec){
  const limit=Math.max(1,Number(spec?.leadSeriesLength)||4800);
  const nominalTotal=Object.entries(values||{}).reduce((sum,[size,qty])=>{
    const product=spec?.sizes?.[size];
    const nominalLength=Number(product?.nominalLength)||Number(size)*100||0;
    return sum+nominalLength*Math.max(0,Math.floor(Number(qty)||0));
  },0);
  return {nominalTotal,leadQty:nominalTotal>0?Math.ceil(nominalTotal/limit):0,limit};
}
function calculateGlowCircuit(circuit,forceAuto=true){const spec=getGlowSpec(),distance=Math.max(0,Math.floor(Number(circuit.querySelector('.glow-distance-input')?.value||0)));let calc;if(forceAuto){calc=autoChooseGlowSizes(distance,spec);renderGlowManualSizes(circuit,calc.values);}else{const values=currentGlowCounts(circuit);let total=0,power=0,count=0;Object.entries(values).forEach(([k,q])=>{const v=spec.sizes[k];if(v){total+=v.length*q;power+=v.watt*q;count+=q;}});calc={values,total,power,count,diff:total-distance};}const leadCalculation=calculateGlowLeadQuantity(calc.values,spec);calc={...calc,...leadCalculation};circuit._glowCalc={...calc,distance};circuit.querySelector('.glow-circuit-result').innerHTML=`<div><span>合計本数</span><strong>${calc.count}</strong></div><div><span>消費電力</span><strong>${calc.power.toFixed(2)}W</strong></div><div><span>総長</span><strong>${calc.total.toLocaleString()}mm</strong></div><div><span>品番長合計</span><strong>${calc.nominalTotal.toLocaleString()}mm</strong></div><div><span>リード・エンド</span><strong>${calc.leadQty}組</strong></div><div><span>差</span><strong>${calc.diff.toLocaleString()}mm</strong></div>`;return circuit._glowCalc;}
function buildGlowEstimate(forceAuto=true){
  const spec=getGlowSpec(),circuits=[...document.querySelectorAll('.glow-circuit')],color=$('glowColorSelect')?.value||spec.colorOptions[0][0],mode=$('glowDimmingSelect')?.value||spec.defaultDimming,psuCode=$('glowPsuSelect')?.value||'WKLVZ240-6R3HJ',psu=glowConfig.powerSupplies[psuCode];
  if(!circuits.length){addGlowCircuit();return null;}
  const calculations=circuits.map(c=>calculateGlowCircuit(c,forceAuto));const totals=calculations.reduce((a,c)=>({count:a.count+c.count,power:a.power+c.power,total:a.total+c.total,distance:a.distance+c.distance,nominalTotal:a.nominalTotal+c.nominalTotal,leadQty:a.leadQty+c.leadQty}),{count:0,power:0,total:0,distance:0,nominalTotal:0,leadQty:0});
  const psuQty=totals.power>0?Math.ceil(totals.power/psu.power):0,items=[];
  calculations.forEach((calc,idx)=>Object.entries(calc.values).sort((a,b)=>spec.sizes[b[0]].length-spec.sizes[a[0]].length).forEach(([size,qty])=>items.push(makeLinearItem(`LED-${idx+1}`,spec.label,spec.sizes[size].sku(color),qty))));
  const acc=glowConfig.accessories[spec.family]||{};const le=Math.max(0,totals.leadQty);
  if(acc.lead&&le)items.push(makeLinearItem('リード',acc.lead[0],acc.lead[1],le));
  if(acc.end&&le)items.push(makeLinearItem('エンド',acc.end[0],acc.end[1],le));
  const ext=$('glowExtensionSelect')?.value;if(ext&&ext!=='none'&&acc.extensions?.[ext])items.push(makeLinearItem('延長',acc.extensions[ext][0],acc.extensions[ext][1],Math.max(1,le)));
  if(psuQty)items.push(makeLinearItem('電源',psu.name,psuCode,psuQty));
  const dimmer=$('glowDimmerSelect')?.value,controller=$('glowControllerSelect')?.value;
  if(dimmer&&dimmer!=='無し')items.push(makeLinearItem('受信機',dimmer,dimmer,Math.max(1,Math.ceil(psuQty/3))));
  if(controller&&controller!=='無し')items.push(makeLinearItem('コントローラー',controller,controller,1));
  if(mode==='DALI'){items.push(makeLinearItem('その他','DALI BUS電源','LE004025LBZW1',1));}
  if($('glowSignalSelect')?.value==='yes')items.push(makeLinearItem('その他','信号ケーブル','FCPEV091P',1));
  const result={spec,color,mode,psuCode,items,totals:{...totals,psuQty,ledA100:totals.power/80,ledA200:totals.power/160}};glowLastResult=result;renderGlowResult(result);return result;
}
function renderGlowResult(r){const rows=$('glowEstimateRows'),summary=$('glowSummary'),status=$('glowResultStatus');if(!rows||!summary)return;rows.innerHTML=`<div class="linear-result-header"><span>項目</span><span>品名</span><span>品番</span><span>数量</span></div>`+r.items.map(x=>`<div class="linear-result-row"><span>${escapeHtml(x.category)}</span><span>${escapeHtml(x.name)}</span><span>${escapeHtml(x.code)}</span><strong>${x.qty}</strong></div>`).join('');const t=r.totals;summary.innerHTML=`<div><span>本数</span><strong>${t.count}</strong></div><div><span>LED消費電力</span><strong>${t.power.toFixed(2)}W</strong></div><div><span>電源</span><strong>${t.psuQty}台</strong></div><div><span>総長</span><strong>${t.total.toLocaleString()}mm</strong></div><div><span>品番長合計</span><strong>${t.nominalTotal.toLocaleString()}mm</strong></div><div><span>リード・エンド</span><strong>${t.leadQty}組</strong></div><div><span>差</span><strong>${(t.total-t.distance).toLocaleString()}mm</strong></div><div><span>最大直列連結長</span><strong>${r.spec.maxSeriesLength.toLocaleString()}mm</strong></div><div><span>入力容量（LED）</span><strong>${t.ledA100.toFixed(2)}A/100V・${t.ledA200.toFixed(2)}A/200V</strong></div>`;if(status)status.textContent=`計算完了：${r.items.length}明細`;}
async function copyGlowEstimate(){const r=glowLastResult||buildGlowEstimate(true);if(!r?.items?.length){alert('先に自動計算してください。');return;}const clean=s=>String(s??'').replace(/[\r\n,]/g,' ').trim();const text='*****,'+r.items.flatMap(x=>[clean(x.name),clean(x.code),String(x.qty)]).join(',');try{await navigator.clipboard.writeText(text);alert('見積もりフォーマット貼り付け用テキストをコピーしました。');}catch(_){copyText(text,'見積もりフォーマット貼り付け用テキスト');}}
function buildGlowShareText(){const r=glowLastResult;if(!r?.items?.length){alert('先に自動計算してください。');return null;}const t=r.totals,catalogUrl=r.spec?.catalogUrl||'',circuits=[...document.querySelectorAll('.glow-circuit')].map((c,i)=>{const d=Math.max(0,Math.floor(Number(c.querySelector('.glow-distance-input')?.value||0)));return d>0?`系統${i+1}：${d.toLocaleString()}mm`:'';}).filter(Boolean);return ['【グローチューブⅥ 概算結果】','',`製品：${r.spec.label}`,`色温度・発光色：${$('glowColorSelect')?.selectedOptions?.[0]?.textContent||r.color}`,`調光方式：${r.mode}`,'','設置距離：',...circuits,'','製品・機器構成：',...r.items.map(x=>`・${x.name}（${x.code}） ${x.qty}`),'',`合計製品長：${t.total.toLocaleString()}mm`,`設置距離との差：${(t.total-t.distance).toLocaleString()}mm`,`LED消費電力：${t.power.toFixed(2)}W`,`電源：${t.psuQty}台`,'','製品カタログ：',catalogUrl,'','※概算結果のため、正式見積時に再確認してください。'].join('\n');}
function sendGlowSms(){const text=buildGlowShareText();if(!text)return;const isiOS=/iPad|iPhone|iPod/.test(navigator.userAgent);location.href=`sms:${isiOS?'&':'?'}body=${encodeURIComponent(text)}`;}
function sendGlowEmail(){const text=buildGlowShareText();if(!text)return;location.href=`mailto:?subject=${encodeURIComponent(`グローチューブⅥ 概算結果（${glowLastResult.spec.label}）`)}&body=${encodeURIComponent(text)}`;}
function clearGlowResult(){glowLastResult=null;if($('glowSummary'))$('glowSummary').innerHTML='';if($('glowEstimateRows'))$('glowEstimateRows').innerHTML='<div class="drawing-empty">計算結果がここに表示されます。</div>';if($('glowResultStatus'))$('glowResultStatus').textContent='距離を入力して「自動計算」を押してください。';document.querySelectorAll('.glow-circuit-result').forEach(x=>x.innerHTML='<span>未計算</span>');}
function resetGlowEstimate(){if($('glowProductSelect'))$('glowProductSelect').value='GlowTubeVI';updateGlowSelects();const list=$('glowCircuitList');if(list){list.innerHTML='';glowCircuitSeq=0;addGlowCircuit();}clearGlowResult();}
function renderGlowEstimate(){if(!$('glowProductSelect'))return;if(!$('glowProductSelect').options.length){glowSelectOptions('glowProductSelect',Object.entries(glowConfig.products).map(([k,v])=>[k,v.label]));updateGlowSelects();}if(!$('glowCircuitList')?.children.length)addGlowCircuit();}
function initGlowEstimate(){renderGlowEstimate();$('glowProductSelect')?.addEventListener('change',()=>{updateGlowSelects();document.querySelectorAll('.glow-circuit').forEach(c=>renderGlowManualSizes(c));clearGlowResult();});$('glowDimmingSelect')?.addEventListener('change',()=>{updateGlowDevices();clearGlowResult();});$('glowAddCircuitBtn')?.addEventListener('click',()=>addGlowCircuit());['glowAutoCalcBtn','glowAutoCalcMobileBtn'].forEach(id=>$(id)?.addEventListener('click',()=>buildGlowEstimate(true)));['glowExcelCopyBtn','glowExcelCopyBtn2','glowExcelCopyMobileBtn'].forEach(id=>$(id)?.addEventListener('click',copyGlowEstimate));$('glowResetBtn')?.addEventListener('click',resetGlowEstimate);$('glowSmsBtn')?.addEventListener('click',sendGlowSms);$('glowEmailBtn')?.addEventListener('click',sendGlowEmail);$('glowClearResultBtn')?.addEventListener('click',clearGlowResult);}

function setupLufasPdfViewer() {
  const viewer = $('lufasPdfViewer');
  const title = $('lufasPdfViewerTitle');
  const openNewTab = $('lufasPdfOpenNewTab');
  if (!viewer || !title || !openNewTab) return;

  document.querySelectorAll('[data-lufas-pdf]').forEach(button => {
    button.addEventListener('click', () => {
      const url = button.dataset.lufasPdf || '';
      const label = button.dataset.lufasPdfTitle || 'LUFAS PDF';
      if (!url) return;
      viewer.src = url;
      viewer.title = label;
      title.textContent = label;
      openNewTab.href = url;
      document.querySelectorAll('[data-lufas-pdf-card]').forEach(card => {
        card.classList.toggle('is-active', card.contains(button));
      });
      viewer.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
}

function showPageFromHash() {
  clearAppSearchFields({rerender: true});
  const valid = ['tools', 'lufas-calc', 'lufas-pdfs', 'self-capacity-calc', 'linear-estimate', 'glow-estimate', 'drawing-reader', 'price-table', 'news', 'daily-report', 'shipping', 'company-info', 'inventory', 'catalogs', 'templates', 'self-products', 'competitors', 'documents', 'admin'];
  const id = (location.hash || '#tools').replace('#', '');
  const target = valid.includes(id) ? id : 'tools';
  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.toggle('active', section.id === target);
  });
  document.querySelectorAll('.nav a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${target}`);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.addEventListener('hashchange', showPageFromHash);


function setAppHealthStatus(kind, title, detail) {
  const status = $('appHealthStatus');
  const message = $('appHealthMessage');
  if (status) {
    status.className = `app-health-status ${kind || ''}`.trim();
    status.textContent = title;
  }
  if (message) message.textContent = detail || '';
}

function runAppHealthCheck({showToast=false} = {}) {
  const issues = [];
  const checks = [];
  const add = (ok, label, detail='') => {
    checks.push({ok, label, detail});
    if (!ok) issues.push(detail || label);
  };

  const nav = document.querySelector('.nav');
  add(!!nav, 'メインバー存在', 'メインバー(.nav)が見つかりません');
  add(Array.isArray(defaultMainNavOrder) && defaultMainNavOrder.length >= 8, 'メニュー基準順', 'defaultMainNavOrder が不正です');
  add(defaultMainNavOrder.every(id => mainNavLabelMap[id]), 'メニュー名対応表', 'mainNavLabelMap に不足があります');
  const navLinkIds = nav ? Array.from(nav.querySelectorAll('a[href^="#"]')).map(a => a.getAttribute('href').replace('#','')) : [];
  add(defaultMainNavOrder.every(id => navLinkIds.includes(id)), 'メインバーリンク', 'メインバーに不足リンクがあります');
  add(defaultMainNavOrder.every(id => document.getElementById(id)), 'ページ本体', 'メニューに対応するページ section が不足しています');
  add(Array.isArray(links), '営業ツールデータ', '営業ツールデータが配列ではありません');
  add(Array.isArray(competitorMakers) && competitorMakers.length >= 1, '他社メーカー', '他社メーカーが読み込めていません');
  add(Array.isArray(competitorProducts) && competitorProducts.length >= 1, '他社製品', '他社製品が読み込めていません');
  add(Array.isArray(shippingRecords), '出荷一覧', '出荷一覧データが配列ではありません');
  add(typeof showPageFromHash === 'function', 'ページ切替関数', 'showPageFromHash が未定義です');
  add(typeof renderLinks === 'function', 'ホーム描画関数', 'renderLinks が未定義です');
  add(typeof renderSelfProducts === 'function', '自社製品描画関数', 'renderSelfProducts が未定義です');
  add(typeof renderCompetitors === 'function', '他社製品描画関数', 'renderCompetitors が未定義です');
  add(typeof renderCompanyInfo === 'function', '会社情報描画関数', 'renderCompanyInfo が未定義です');
  add(typeof setupPriceTable === 'function', '価格表機能', 'setupPriceTable が未定義です');

  if (issues.length) {
    console.warn('[営業ポータル動作チェック] 要確認', {issues, checks});
    setAppHealthStatus('warn', `要確認 ${issues.length}件`, issues.slice(0, 4).join(' / '));
    if (showToast) toast(`動作チェック: 要確認 ${issues.length}件`);
    return {ok:false, issues, checks};
  }
  console.info('[営業ポータル動作チェック] OK', checks);
  setAppHealthStatus('ok', 'OK：主要機能は正常です', 'ホーム・メニュー・主要データの最低限チェックを通過しました。');
  if (showToast) toast('動作チェック OK');
  return {ok:true, issues:[], checks};
}

function safeInit(label, fn) {
  try {
    return fn?.();
  } catch (error) {
    console.error(`[起動時エラー] ${label}`, error);
    setAppHealthStatus('error', `起動時エラー：${label}`, error?.message || String(error));
    return null;
  }
}

function repairMainNavIfNeeded() {
  try {
    const normalized = normalizeMainNavOrder(mainNavOrder);
    if (JSON.stringify(normalized) !== JSON.stringify(mainNavOrder)) {
      console.warn('[メインメニュー自動修復] 不正な並び順を初期値で補正しました', {before: mainNavOrder, after: normalized});
      mainNavOrder = normalized;
      saveMainNavOrder({sync:false, silent:true});
    }
  } catch (error) {
    console.error('[メインメニュー自動修復] 失敗。初期順に戻します', error);
    mainNavOrder = [...defaultMainNavOrder];
    saveMainNavOrder({sync:false, silent:true});
  }
}

window.runAppHealthCheck = runAppHealthCheck;

repairMainNavIfNeeded();
safeInit('メインメニュー並び替え反映', applyMainNavOrder);
safeInit('管理画面メニュー並び替え表示', renderMainNavOrderAdmin);
safeInit('全体検索', setupGlobalSearch);
safeInit('音声検索', setupGlobalVoiceSearch);
safeInit('スクロールボタン', setupQuickScrollControls);
safeInit('在庫管理レスポンシブ', setupInventoryManagementDetailsResponsive);
safeInit('日報ロック', setupDailyReportLock);
safeInit('日報パネル', setupDailyReportPanel);
safeInit('営業ツール表示', renderLinks);
safeInit('ルーファス簡易計算', setupLufasCalc);
safeInit('ルーファスPDF確認', setupLufasPdfViewer);
safeInit('自社製品容量計算', setupSelfCapacityCalc);
safeInit('価格表', setupPriceTable);
safeInit('ニュースカルーセル', setupHomeNewsCarousel);
safeInit('ニュース表示', renderNews);
safeInit('カタログ表示', renderCatalogs);
safeInit('自社製品表示', renderSelfProducts);
safeInit('他社製品表示', renderCompetitors);
safeInit('定型文表示', renderTemplates);
safeInit('資料表示', renderDocs);
safeInit('会社情報表示', renderCompanyInfo);
safeInit('在庫パネル', setupInventoryPanel);
safeInit('出荷パネル', setupShippingPanel);
safeInit('在庫返信ダイアログ', () => {
  $('closeInventoryReplyDialog')?.addEventListener('click', closeInventoryReplyDialog);
  $('copyInventoryReplyBtn')?.addEventListener('click', () => copyText(getInventoryReplyBody(), '在庫返信文'));
  $('openSmsReplyBtn')?.addEventListener('click', openSmsWithInventoryReply);
  $('openMailReplyBtn')?.addEventListener('click', openMailWithInventoryReply);
  $('openLineWorksReplyBtn')?.addEventListener('click', openLineWorksWithInventoryReply);
  document.querySelectorAll('.reply-template-tab').forEach(btn => btn.addEventListener('click', () => { currentInventoryReplyMode = btn.dataset.replyMode || 'sms'; renderInventoryReplyDialog(); }));
});
safeInit('Supabase管理', setupSupabaseAdmin);
safeInit('動作チェックボタン', () => $('runAppHealthCheckBtn')?.addEventListener('click', () => runAppHealthCheck({showToast:true})));
if (hasSupabaseConfig() && !inventoryRows.length) {
  safeInit('在庫共有取得', () => loadInventoryFromCloud({silent:true}));
}
if (hasSupabaseConfig()) {
  safeInit('ニュース共有取得', () => loadNewsFromCloud({silent:true}));
  safeInit('登録データ共有取得', () => loadSharedDataFromCloud({silent:true}));
  if (!dailyReport?.rows?.length) safeInit('日報共有取得', () => loadDailyReportFromCloud({silent:true}));
}
safeInit('全体検索クリアボタン', updateGlobalSearchClearButton);
safeInit('シームレス概算', initLinearEstimate);
safeInit('グローチューブ概算', initGlowEstimate);
safeInit('ページ切替', showPageFromHash);
safeInit('起動後動作チェック', () => runAppHealthCheck({showToast:false}));


// =====================================================
// サイン 組み込み自動計算
// =====================================================
const signAssemblyShippingMaster = {"prefectures":{"北海道":800,"青森県":750,"岩手県":600,"宮城県":400,"秋田県":600,"山形県":500,"福島県":300,"茨城県":250,"栃木県":150,"群馬県":100,"埼玉県":100,"千葉県":150,"東京都":100,"神奈川県":200,"新潟県":300,"富山県":350,"石川県":450,"福井県":500,"山梨県":150,"長野県":250,"岐阜県":400,"静岡県":300,"愛知県":350,"三重県":450,"滋賀県":500,"京都府":550,"大阪府":600,"兵庫県":550,"奈良県":550,"和歌山県":650,"鳥取県":750,"島根県":900,"岡山県":750,"広島県":900,"山口県":900,"徳島県":850,"香川県":950,"愛媛県":950,"高知県":950,"福岡県":1000,"佐賀県":1000,"長崎県":1000,"熊本県":1000,"大分県":1000,"宮崎県":1000,"鹿児島県":1000,"沖縄県":1000},"distances":[50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000],"weights":[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500],"matrix":{"10":{"50":1100,"100":1100,"150":1200,"200":1200,"250":1300,"300":1300,"350":1300,"400":1300,"450":1300,"500":1300,"550":1300,"600":1300,"650":1300,"700":1300,"750":1400,"800":1400,"850":1500,"900":1500,"950":1500,"1000":1500},"20":{"50":1100,"100":1100,"150":1400,"200":1400,"250":1400,"300":1400,"350":1400,"400":1500,"450":1500,"500":1500,"550":1600,"600":1600,"650":1700,"700":1700,"750":1800,"800":1800,"850":1900,"900":1900,"950":2000,"1000":2000},"30":{"50":1500,"100":1500,"150":1500,"200":1500,"250":1600,"300":1600,"350":1700,"400":1700,"450":1700,"500":1700,"550":1700,"600":1700,"650":1900,"700":2000,"750":2100,"800":2100,"850":2200,"900":2300,"950":2300,"1000":2300},"40":{"50":1600,"100":1600,"150":1700,"200":1800,"250":1800,"300":1800,"350":1900,"400":2000,"450":2000,"500":2100,"550":2100,"600":2100,"650":2300,"700":2400,"750":2600,"800":2600,"850":2700,"900":2800,"950":2900,"1000":2900},"50":{"50":1800,"100":1800,"150":1900,"200":2000,"250":2000,"300":2100,"350":2200,"400":2300,"450":2400,"500":2400,"550":2500,"600":2500,"650":2700,"700":2800,"750":3000,"800":3100,"850":3300,"900":3400,"950":3400,"1000":3500},"60":{"50":1800,"100":1800,"150":1900,"200":2000,"250":2000,"300":2100,"350":2200,"400":2300,"450":2400,"500":2400,"550":2500,"600":2500,"650":2700,"700":2800,"750":3000,"800":3100,"850":3300,"900":3400,"950":3400,"1000":3500},"70":{"50":2000,"100":2100,"150":2200,"200":2400,"250":2400,"300":2600,"350":2700,"400":2800,"450":2900,"500":3000,"550":3100,"600":3100,"650":3500,"700":3500,"750":3800,"800":3900,"850":4200,"900":4300,"950":4400,"1000":4600},"80":{"50":2000,"100":2100,"150":2200,"200":2400,"250":2400,"300":2600,"350":2700,"400":2800,"450":2900,"500":3000,"550":3100,"600":3100,"650":3500,"700":3500,"750":3800,"800":3900,"850":4200,"900":4300,"950":5300,"1000":5500},"90":{"50":2300,"100":2400,"150":2600,"200":2700,"250":2800,"300":3000,"350":3100,"400":3300,"450":3400,"500":3500,"550":3600,"600":3800,"650":4100,"700":4200,"750":4500,"800":4700,"850":5000,"900":5200,"950":5300,"1000":5500},"100":{"50":2300,"100":2400,"150":2600,"200":2700,"250":2800,"300":3000,"350":3100,"400":3300,"450":3400,"500":3500,"550":3600,"600":3800,"650":4100,"700":4200,"750":4500,"800":4700,"850":5000,"900":5200,"950":5300,"1000":5500},"110":{"50":2600,"100":2700,"150":2900,"200":3100,"250":3300,"300":3500,"350":3600,"400":3800,"450":3900,"500":4000,"550":4200,"600":4400,"650":5000,"700":5100,"750":5500,"800":5700,"850":6000,"900":6200,"950":6400,"1000":6600},"120":{"50":2600,"100":2700,"150":2900,"200":3100,"250":3300,"300":3500,"350":3600,"400":3800,"450":3900,"500":4000,"550":4200,"600":4400,"650":5000,"700":5100,"750":5500,"800":5700,"850":6000,"900":6200,"950":6400,"1000":6600},"130":{"50":2900,"100":3000,"150":3200,"200":3500,"250":3700,"300":3900,"350":4100,"400":4300,"450":4500,"500":4600,"550":4800,"600":5000,"650":5700,"700":5800,"750":6300,"800":6500,"850":6900,"900":7100,"950":7400,"1000":7600},"140":{"50":2900,"100":3000,"150":3200,"200":3500,"250":3700,"300":3900,"350":4100,"400":4300,"450":4500,"500":4600,"550":4800,"600":5000,"650":5700,"700":5800,"750":6300,"800":6500,"850":6900,"900":7100,"950":7400,"1000":7600},"150":{"50":3200,"100":3300,"150":3600,"200":3800,"250":4100,"300":4300,"350":4500,"400":4800,"450":5000,"500":5200,"550":5400,"600":5600,"650":6300,"700":6500,"750":7100,"800":7400,"850":7800,"900":8000,"950":8200,"1000":8500},"160":{"50":3200,"100":3300,"150":3600,"200":3800,"250":4100,"300":4300,"350":4500,"400":4800,"450":5000,"500":5200,"550":5400,"600":5600,"650":6300,"700":6500,"750":7100,"800":7400,"850":7800,"900":8000,"950":8200,"1000":8500},"170":{"50":3400,"100":3600,"150":3900,"200":4200,"250":4500,"300":4700,"350":5000,"400":5200,"450":5400,"500":5700,"550":5900,"600":6200,"650":7000,"700":7300,"750":7800,"800":8100,"850":8600,"900":8900,"950":9200,"1000":9500},"180":{"50":3400,"100":3600,"150":3900,"200":4200,"250":4500,"300":4700,"350":5000,"400":5200,"450":5400,"500":5700,"550":5900,"600":6200,"650":7000,"700":7300,"750":7800,"800":8100,"850":8600,"900":8900,"950":9200,"1000":9500},"190":{"50":3600,"100":3800,"150":4200,"200":4500,"250":4800,"300":5000,"350":5200,"400":5600,"450":5800,"500":6000,"550":6300,"600":6600,"650":7400,"700":7600,"750":8300,"800":8600,"850":9100,"900":9300,"950":9700,"1000":10000},"200":{"50":3600,"100":3800,"150":4200,"200":4500,"250":4800,"300":5000,"350":5200,"400":5600,"450":5800,"500":6000,"550":6300,"600":6600,"650":7400,"700":7600,"750":8300,"800":8600,"850":9100,"900":9300,"950":9700,"1000":10000},"210":{"50":4300,"100":4600,"150":4900,"200":5400,"250":5700,"300":6100,"350":6400,"400":6800,"450":7000,"500":7400,"550":7700,"600":8000,"650":9000,"700":9400,"750":10200,"800":10500,"850":11100,"900":11400,"950":11800,"1000":12300},"220":{"50":4300,"100":4600,"150":4900,"200":5400,"250":5700,"300":6100,"350":6400,"400":6800,"450":7000,"500":7400,"550":7700,"600":8000,"650":9000,"700":9400,"750":10200,"800":10500,"850":11100,"900":11400,"950":11800,"1000":12300},"230":{"50":4300,"100":4600,"150":4900,"200":5400,"250":5700,"300":6100,"350":6400,"400":6800,"450":7000,"500":7400,"550":7700,"600":8000,"650":9000,"700":9400,"750":10200,"800":10500,"850":11100,"900":11400,"950":11800,"1000":12300},"240":{"50":4300,"100":4600,"150":4900,"200":5400,"250":5700,"300":6100,"350":6400,"400":6800,"450":7000,"500":7400,"550":7700,"600":8000,"650":9000,"700":9400,"750":10200,"800":10500,"850":11100,"900":11400,"950":11800,"1000":12300},"250":{"50":4300,"100":4600,"150":4900,"200":5400,"250":5700,"300":6100,"350":6400,"400":6800,"450":7000,"500":7400,"550":7700,"600":8000,"650":9000,"700":9400,"750":10200,"800":10500,"850":11100,"900":11400,"950":11800,"1000":12300},"260":{"50":5000,"100":5300,"150":5900,"200":6300,"250":6800,"300":7200,"350":7500,"400":7900,"450":8400,"500":8800,"550":9100,"600":9600,"650":10700,"700":11200,"750":12100,"800":12600,"850":13200,"900":13700,"950":14200,"1000":14600},"270":{"50":5000,"100":5300,"150":5900,"200":6300,"250":6800,"300":7200,"350":7500,"400":7900,"450":8400,"500":8800,"550":9100,"600":9600,"650":10700,"700":11200,"750":12100,"800":12600,"850":13200,"900":13700,"950":14200,"1000":14600},"280":{"50":5000,"100":5300,"150":5900,"200":6300,"250":6800,"300":7200,"350":7500,"400":7900,"450":8400,"500":8800,"550":9100,"600":9600,"650":10700,"700":11200,"750":12100,"800":12600,"850":13200,"900":13700,"950":14200,"1000":14600},"290":{"50":5000,"100":5300,"150":5900,"200":6300,"250":6800,"300":7200,"350":7500,"400":7900,"450":8400,"500":8800,"550":9100,"600":9600,"650":10700,"700":11200,"750":12100,"800":12600,"850":13200,"900":13700,"950":14200,"1000":14600},"300":{"50":5000,"100":5300,"150":5900,"200":6300,"250":6800,"300":7200,"350":7500,"400":7900,"450":8400,"500":8800,"550":9100,"600":9600,"650":10700,"700":11200,"750":12100,"800":12600,"850":13200,"900":13700,"950":14200,"1000":14600},"310":{"50":5600,"100":6100,"150":6600,"200":7100,"250":7700,"300":8200,"350":8600,"400":9100,"450":9600,"500":10000,"550":10600,"600":11000,"650":12400,"700":13000,"750":14000,"800":14500,"850":15400,"900":15900,"950":16400,"1000":17000},"320":{"50":5600,"100":6100,"150":6600,"200":7100,"250":7700,"300":8200,"350":8600,"400":9100,"450":9600,"500":10000,"550":10600,"600":11000,"650":12400,"700":13000,"750":14000,"800":14500,"850":15400,"900":15900,"950":16400,"1000":17000},"330":{"50":5600,"100":6100,"150":6600,"200":7100,"250":7700,"300":8200,"350":8600,"400":9100,"450":9600,"500":10000,"550":10600,"600":11000,"650":12400,"700":13000,"750":14000,"800":14500,"850":15400,"900":15900,"950":16400,"1000":17000},"340":{"50":5600,"100":6100,"150":6600,"200":7100,"250":7700,"300":8200,"350":8600,"400":9100,"450":9600,"500":10000,"550":10600,"600":11000,"650":12400,"700":13000,"750":14000,"800":14500,"850":15400,"900":15900,"950":16400,"1000":17000},"350":{"50":5600,"100":6100,"150":6600,"200":7100,"250":7700,"300":8200,"350":8600,"400":9100,"450":9600,"500":10000,"550":10600,"600":11000,"650":12400,"700":13000,"750":14000,"800":14500,"850":15400,"900":15900,"950":16400,"1000":17000},"360":{"50":6400,"100":6800,"150":7500,"200":8200,"250":8800,"300":9300,"350":9800,"400":10400,"450":11000,"500":11500,"550":12000,"600":12600,"650":14200,"700":14800,"750":16000,"800":16600,"850":17500,"900":18100,"950":18800,"1000":19400},"370":{"50":6400,"100":6800,"150":7500,"200":8200,"250":8800,"300":9300,"350":9800,"400":10400,"450":11000,"500":11500,"550":12000,"600":12600,"650":14200,"700":14800,"750":16000,"800":16600,"850":17500,"900":18100,"950":18800,"1000":19400},"380":{"50":6400,"100":6800,"150":7500,"200":8200,"250":8800,"300":9300,"350":9800,"400":10400,"450":11000,"500":11500,"550":12000,"600":12600,"650":14200,"700":14800,"750":16000,"800":16600,"850":17500,"900":18100,"950":18800,"1000":19400},"390":{"50":6400,"100":6800,"150":7500,"200":8200,"250":8800,"300":9300,"350":9800,"400":10400,"450":11000,"500":11500,"550":12000,"600":12600,"650":14200,"700":14800,"750":16000,"800":16600,"850":17500,"900":18100,"950":18800,"1000":19400},"400":{"50":6400,"100":6800,"150":7500,"200":8200,"250":8800,"300":9300,"350":9800,"400":10300,"450":11000,"500":11500,"550":12000,"600":12600,"650":14200,"700":14800,"750":16000,"800":16600,"850":17500,"900":18100,"950":18800,"1000":19400},"410":{"50":7000,"100":7600,"150":8300,"200":9100,"250":9800,"300":10400,"350":11000,"400":11600,"450":12200,"500":12800,"550":13500,"600":14100,"650":15900,"700":16600,"750":18000,"800":18600,"850":19700,"900":20400,"950":21100,"1000":21800},"420":{"50":7000,"100":7600,"150":8300,"200":9100,"250":9800,"300":10400,"350":11000,"400":11600,"450":12200,"500":12800,"550":13500,"600":14100,"650":15900,"700":16600,"750":18000,"800":18600,"850":19700,"900":20400,"950":21100,"1000":21800},"430":{"50":7000,"100":7600,"150":8300,"200":9100,"250":9800,"300":10400,"350":11000,"400":11600,"450":12200,"500":12800,"550":13500,"600":14100,"650":15900,"700":16600,"750":18000,"800":18600,"850":19700,"900":20400,"950":21100,"1000":21800},"440":{"50":7000,"100":7600,"150":8300,"200":9100,"250":9800,"300":10400,"350":11000,"400":11600,"450":12200,"500":12800,"550":13500,"600":14100,"650":15900,"700":16600,"750":18000,"800":18600,"850":19700,"900":20400,"950":21100,"1000":21800},"450":{"50":7000,"100":7600,"150":8300,"200":9100,"250":9800,"300":10400,"350":11000,"400":11600,"450":12200,"500":12800,"550":13500,"600":14100,"650":15900,"700":16600,"750":18000,"800":18600,"850":19700,"900":20400,"950":21100,"1000":21800},"460":{"50":7700,"100":8300,"150":9100,"200":9900,"250":10700,"300":11400,"350":12100,"400":12800,"450":13500,"500":14200,"550":14900,"600":15600,"650":17600,"700":18300,"750":19900,"800":20700,"850":21800,"900":22600,"950":23500,"1000":24200},"470":{"50":7700,"100":8300,"150":9100,"200":9900,"250":10700,"300":11400,"350":12100,"400":12800,"450":13500,"500":14200,"550":14900,"600":15600,"650":17600,"700":18300,"750":19900,"800":20700,"850":21800,"900":22600,"950":23500,"1000":24200},"480":{"50":7700,"100":8300,"150":9100,"200":9900,"250":10700,"300":11400,"350":12100,"400":12800,"450":13500,"500":14200,"550":14900,"600":15600,"650":17600,"700":18300,"750":19900,"800":20700,"850":21800,"900":22600,"950":23500,"1000":24200},"490":{"50":7700,"100":8300,"150":9100,"200":9900,"250":10700,"300":11400,"350":12100,"400":12800,"450":13500,"500":14200,"550":14900,"600":15600,"650":17600,"700":18300,"750":19900,"800":20700,"850":21800,"900":22600,"950":23500,"1000":24200},"500":{"50":7700,"100":8300,"150":9100,"200":9900,"250":10700,"300":11400,"350":12100,"400":12800,"450":13500,"500":14200,"550":14900,"600":15600,"650":17600,"700":18300,"750":19900,"800":20700,"850":21800,"900":22600,"950":23500,"1000":24200}}};
const signAssemblyPanelMaster = {
  saburoku:{label:'サブロク',size:'910×1820',material:4500,perimeter:2730,pack:{2:3300,3:4000,4:4300},weight:{2:51,3:53,4:53}},
  meter:{label:'メーター',size:'1000×2000',material:7020,perimeter:3000,pack:{2:3700,3:4400,4:4700},weight:{2:62,3:65,4:65}},
  shiroku:{label:'シロク',size:'1220×1820',material:8940,perimeter:3040,pack:{2:4400,3:5100,4:5400},weight:{2:68,3:71,4:71}},
  shihachi:{label:'シハチ',size:'1220×2440',material:10980,perimeter:3660,pack:{2:5000,3:5800,4:6200},weight:{2:91,3:94,4:94}}
};
const signAssemblyUnitTables = {
  lanternSingle:[[10,99,[200,195,190,185,180,175,150]],[100,299,[175,170,165,160,155,150,145]],[300,999,[160,155,150,145,140,135,130]],[1000,2999,[145,140,135,130,125,120,115]],[3000,999999,[140,135,130,125,120,115,110]]],
  lanternTn:[[10,99,[230,225,220,215,210,205,180]],[100,299,[205,200,195,190,185,180,175]],[300,999,[190,185,180,175,170,165,160]],[1000,2999,[175,170,165,160,155,150,145]],[3000,999999,[170,165,160,155,150,145,140]]],
  irregularSingle:[[10,99,[230,225,220,215,210,205,180]],[100,299,[205,200,195,190,185,180,175]],[300,999,[190,185,180,175,170,165,160]],[1000,2999,[175,170,165,160,155,150,145]],[3000,999999,[170,165,160,155,150,145,140]]],
  irregularTn:[[10,99,[260,255,250,245,240,235,210]],[100,299,[235,230,225,220,215,210,205]],[300,999,[220,215,210,205,200,195,190]],[1000,2999,[205,200,195,190,185,180,175]],[3000,999999,[200,195,190,185,180,175,170]]]
};
const buildingAssemblyUnitTables = {
  lanternSingle:[[10,99,[220,215,210,205,200,195,170]],[100,299,[195,190,185,180,175,170,165]],[300,999,[180,175,170,165,160,155,150]],[1000,2999,[165,160,155,150,145,140,135]],[3000,999999,[160,155,150,145,140,135,130]]],
  lanternTn:[[10,99,[250,245,240,235,230,225,200]],[100,299,[225,220,215,210,205,200,195]],[300,999,[210,205,200,195,190,185,180]],[1000,2999,[195,190,185,180,175,170,165]],[3000,999999,[190,185,180,175,170,165,160]]],
  irregularSingle:[[10,99,[250,245,240,235,230,225,200]],[100,299,[225,220,215,210,205,200,195]],[300,999,[210,205,200,195,190,185,180]],[1000,2999,[195,190,185,180,175,170,165]],[3000,999999,[190,185,180,175,170,165,160]]],
  irregularTn:[[10,99,[280,275,270,265,260,255,230]],[100,299,[255,250,245,240,235,230,225]],[300,999,[240,235,230,225,220,215,210]],[1000,2999,[225,220,215,210,205,200,195]],[3000,999999,[220,215,210,205,200,195,190]]]
};
const signAssemblyPitchBands=[[210,249],[180,209],[150,179],[100,149],[81,99],[66,80],[0,65]];
const signAssemblyPitchLabels=['P210～P249','P180～P209','P150～P179','P100～P149','P81～P99','P66～P80','～P65'];
const signAssemblyMasterKey='sales-portal-sign-assembly-master-v2';
const signAssemblyLegacyMasterKey='sales-portal-sign-assembly-master-v1';
const signAssemblyDraftKey='sales-portal-sign-assembly-draft-v1';
const buildingAssemblyMasterKey='sales-portal-building-assembly-unit-master-v1';
function saLoadBuildingAssemblyMaster(){
  try{
    const saved=JSON.parse(localStorage.getItem(buildingAssemblyMasterKey)||'null');
    if(saved)return {single:Math.max(0,Number(saved.single)||0),tn:Math.max(0,Number(saved.tn)||0)};
  }catch{}
  return {single:0,tn:0};
}
function saSaveBuildingAssemblyMaster(){
  const master={single:saNum('saBuildingSingleUnit'),tn:saNum('saBuildingTnUnit')};
  localStorage.setItem(buildingAssemblyMasterKey,JSON.stringify(master));
  saToast('建築用の組み込み単価を保存しました');
  saCalculate();
}
let signAssemblyLastResult=null;
let signAssemblyBlocks=[];
let signAssemblyEditingBlockIndex=-1;
let signAssemblyLedQtyManual=false;
let signAssemblyLedQtySyncing=false;
function saYen(n){return Math.ceil(Number(n)||0).toLocaleString('ja-JP')}
function saRoundUpHundred(n){const v=Math.max(0,Number(n)||0);return Math.ceil(v/100)*100}
function saNum(id){return Math.max(0,Number(document.getElementById(id)?.value||0))}
function saEsc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
const signAssemblyDefaultPanelMaster={
  single:{panel1:14900,panel2:20900,panel3:28000,panel4:32700},
  tn:{panel1:17600,panel2:26600,panel3:37400,panel4:50300}
};
function saEmptyPanelMaster(){return {panel1:0,panel2:0,panel3:0,panel4:0}}
function saNormalizePanelMaster(source,defaults){
  const out={...defaults};
  ['panel1','panel2','panel3','panel4'].forEach(k=>{const v=Number(source?.[k]);if(Number.isFinite(v)&&v>0)out[k]=Math.floor(v)});
  return out;
}
function saLoadMaster(){
  try{
    const saved=JSON.parse(localStorage.getItem(signAssemblyMasterKey)||'null');
    if(saved?.single||saved?.tn){
      const normalized={single:saNormalizePanelMaster(saved.single,signAssemblyDefaultPanelMaster.single),tn:saNormalizePanelMaster(saved.tn,signAssemblyDefaultPanelMaster.tn)};
      localStorage.setItem(signAssemblyMasterKey,JSON.stringify(normalized));
      return normalized;
    }
    const legacy=JSON.parse(localStorage.getItem(signAssemblyLegacyMasterKey)||'null');
    if(legacy){
      const normalized={single:saNormalizePanelMaster(legacy,signAssemblyDefaultPanelMaster.single),tn:{...signAssemblyDefaultPanelMaster.tn}};
      localStorage.setItem(signAssemblyMasterKey,JSON.stringify(normalized));
      return normalized;
    }
  }catch{}
  const initial={single:{...signAssemblyDefaultPanelMaster.single},tn:{...signAssemblyDefaultPanelMaster.tn}};
  try{localStorage.setItem(signAssemblyMasterKey,JSON.stringify(initial))}catch{}
  return initial;
}
function saSaveMaster(){
  const m={single:{panel1:saNum('saPanelSinglePrice1'),panel2:saNum('saPanelSinglePrice2'),panel3:saNum('saPanelSinglePrice3'),panel4:saNum('saPanelSinglePrice4')},tn:{panel1:saNum('saPanelTnPrice1'),panel2:saNum('saPanelTnPrice2'),panel3:saNum('saPanelTnPrice3'),panel4:saNum('saPanelTnPrice4')}};
  const invalid=[...Object.values(m.single),...Object.values(m.tn)].some(v=>!Number.isFinite(v)||v<=0);
  if(invalid){saToast('簡易電源盤の単価はすべて1円以上で入力してください');return}
  localStorage.setItem(signAssemblyMasterKey,JSON.stringify(m));
  saToast('組み込み計算用の簡易電源盤単価を保存しました');
  saCalculate();
  if(document.getElementById('autAssemblyOverlay'))autCalculate();
}
function saToast(t){if(typeof toast==='function')toast(t);else alert(t)}
function saAddStyles(){if(document.getElementById('signAssemblyStyles'))return;const s=document.createElement('style');s.id='signAssemblyStyles';s.textContent=`
#signAssemblyOverlay{position:fixed;inset:0;background:#0b0d10;z-index:10000;overflow:auto;color:#eef1f5;font-family:inherit}
.sa-shell{width:100%;max-width:1700px;margin:auto;padding:20px 22px 80px;box-sizing:border-box} .sa-top{display:flex;gap:14px;align-items:center;justify-content:space-between;position:sticky;top:0;background:rgba(11,13,16,.96);z-index:3;padding:12px 0;border-bottom:1px solid #2b3038} .sa-top h1{font-size:24px;margin:0} #signAssemblyOverlay .sa-grid{display:grid!important;grid-template-columns:minmax(0,1fr) 370px!important;gap:22px;margin-top:18px;align-items:start;max-width:100%} #signAssemblyOverlay .sa-grid>main,#signAssemblyOverlay .sa-grid>aside{min-width:0;max-width:100%} .sa-card{background:#15191f;border:1px solid #2b3038;border-radius:16px;padding:18px;box-shadow:0 12px 28px rgba(0,0,0,.2)} .sa-card h2{font-size:17px;margin:0 0 14px}.sa-breakdown .sa-line strong{font-weight:850;font-size:16px}.sa-card.sa-customer-card{border-top:3px solid #4f8cff}.sa-card.sa-assembly-card{border-top:3px solid #d89b42}.sa-card.sa-panel-card{border-top:3px solid #4aa77a} .sa-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-bottom:10px} .sa-row.two{grid-template-columns:repeat(2,minmax(0,1fr))} .sa-field label{display:block;font-size:12px;color:#aeb6c2;margin-bottom:6px} .sa-field input,.sa-field select{width:100%;box-sizing:border-box;background:#0d1014;color:#fff;border:1px solid #3a424d;border-radius:10px;padding:11px 12px;font-size:15px} .sa-field input:focus,.sa-field select:focus{outline:2px solid #7aa2ff;border-color:transparent} .sa-btn{border:0;border-radius:10px;padding:10px 14px;font-weight:700;cursor:pointer} .sa-btn.primary{background:#eef1f5;color:#111} .sa-btn.secondary{background:#252b34;color:#fff} .sa-btn.danger{background:#4a2328;color:#ffd8dc} .sa-products{display:flex;flex-direction:column;gap:10px} .sa-product{display:grid;grid-template-columns:minmax(260px,1.2fr) minmax(360px,1.8fr) minmax(100px,.55fr) minmax(110px,.6fr) minmax(110px,.65fr) minmax(110px,.6fr) minmax(180px,1fr) auto;grid-template-areas:'name code code code code code code code' 'actual unit quote price total total total remove';gap:10px;align-items:end;padding:14px;border-radius:12px;background:#0f1318}.sa-product .sa-name-field{grid-area:name}.sa-product .sa-code-field{grid-area:code}.sa-product .sa-actual-field{grid-area:actual}.sa-product .sa-unit-field{grid-area:unit}.sa-product .sa-quote-field{grid-area:quote}.sa-product .sa-price-field{grid-area:price}.sa-product .sa-total-field{grid-area:total}.sa-product .sa-remove{grid-area:remove;min-width:120px;height:44px}.sa-product .sa-product-code{min-width:0;width:100%}.sa-product .sa-code-field{min-width:0}.sa-product .sa-total-field{min-width:0}.sa-product .sa-product-code,.sa-product .sa-product-name-select{white-space:nowrap;overflow:hidden;text-overflow:ellipsis} .sa-product small{display:block;color:#95a0ad}.sa-product-name-full{margin-top:6px;color:#d9e1ec;font-size:12px;line-height:1.45;white-space:normal;overflow-wrap:anywhere}.sa-product-select{min-width:0}.sa-product-select option{white-space:normal} .sa-suggest{position:absolute;left:0;right:0;top:100%;background:#20262e;border:1px solid #3a424d;border-radius:10px;max-height:240px;overflow:auto;z-index:5} .sa-suggest button{display:block;width:100%;text-align:left;padding:10px;border:0;background:transparent;color:#fff} .sa-suggest button:hover{background:#303844} .sa-relative{position:relative} .sa-summary{position:sticky;top:88px;max-width:100%;box-sizing:border-box} .sa-total{font-size:28px;font-weight:800;margin:8px 0 18px} .sa-breakdown{display:grid;gap:8px} .sa-line{display:flex;justify-content:space-between;gap:16px;border-bottom:1px solid #2b3038;padding:9px 0} .sa-note{font-size:12px;color:#aeb6c2;line-height:1.6} .sa-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px} .sa-checks{display:flex;gap:14px;flex-wrap:wrap} .sa-checks label{display:flex;gap:6px;align-items:center} .sa-block-list{display:grid;gap:8px;margin-top:12px}.sa-block-item{border:1px solid #303742;border-radius:12px;padding:10px;background:#0f1318}.sa-block-head{display:flex;justify-content:space-between;gap:10px;align-items:center}.sa-block-actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.sa-block-total{font-weight:800}.sa-error{background:#40252a;color:#ffd7dc;padding:10px;border-radius:10px;margin-top:8px}.sa-panel-master-group{padding:14px;border:1px solid #303742;border-radius:12px;background:#10141a;margin-top:12px}.sa-panel-master-group h3{font-size:15px;margin:0 0 10px}.sa-panel-auto{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin:12px 0}.sa-panel-auto div{background:#0d1014;border:1px solid #303742;border-radius:10px;padding:10px;text-align:center}.sa-panel-auto strong{display:block;font-size:18px;margin-top:4px} details.sa-card summary{cursor:pointer;font-weight:700} .assembly-link-status{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:2px 0 12px;padding:10px 12px;border:1px solid #303742;border-radius:10px;background:#10141a}.assembly-link-status>div{min-width:0}.assembly-link-badge{display:inline-flex;align-items:center;border-radius:999px;padding:4px 9px;font-size:12px;font-weight:800}.assembly-link-badge.ok{background:#163b2b;color:#9ef0bd}.assembly-link-badge.warn{background:#493817;color:#ffd98a}.assembly-link-badge.error{background:#4a2328;color:#ffd0d5}.assembly-link-badge.neutral{background:#223047;color:#b9d2ff}.assembly-link-detail{margin-top:6px;font-size:12px;line-height:1.5;color:#b7c0cb;overflow-wrap:anywhere}.assembly-recheck-btn{flex:0 0 auto;white-space:nowrap}
@media(max-width:620px){.assembly-link-status{align-items:stretch;flex-direction:column}.assembly-recheck-btn{width:100%}}
.sa-hidden{display:none!important}

/* 2026-07-29 compact desktop layout fix */
#signAssemblyOverlay .sa-shell{max-width:1540px;padding:14px 16px 64px}
#signAssemblyOverlay .sa-top{padding:8px 0}
#signAssemblyOverlay .sa-top h1{font-size:22px}
#signAssemblyOverlay .sa-grid{gap:16px;margin-top:14px}
#signAssemblyOverlay .sa-card{padding:14px;border-radius:14px}
#signAssemblyOverlay .sa-card h2{font-size:16px;margin-bottom:11px}
#signAssemblyOverlay .sa-row{gap:8px;margin-bottom:8px}
#signAssemblyOverlay .sa-field label{font-size:11px;margin-bottom:4px}
#signAssemblyOverlay .sa-field input,#signAssemblyOverlay .sa-field select{min-width:0;max-width:100%;padding:9px 10px;font-size:14px;height:42px}
#signAssemblyOverlay .sa-note{font-size:11px}
#signAssemblyOverlay .sa-product{display:grid;min-width:0;width:100%;box-sizing:border-box;grid-template-columns:repeat(12,minmax(0,1fr));grid-template-areas:'name name name code code code code code code code code code' 'actual actual unit unit quote quote price price total total remove remove';gap:8px;padding:12px}
#signAssemblyOverlay .sa-product>*{min-width:0;max-width:100%}
#signAssemblyOverlay .sa-product .sa-name-field{grid-area:name}
#signAssemblyOverlay .sa-product .sa-code-field{grid-area:code;overflow:hidden}
#signAssemblyOverlay .sa-product .sa-actual-field{grid-area:actual}
#signAssemblyOverlay .sa-product .sa-unit-field{grid-area:unit}
#signAssemblyOverlay .sa-product .sa-quote-field{grid-area:quote}
#signAssemblyOverlay .sa-product .sa-price-field{grid-area:price}
#signAssemblyOverlay .sa-product .sa-total-field{grid-area:total}
#signAssemblyOverlay .sa-product .sa-remove{grid-area:remove;min-width:0;width:100%;height:42px;padding:8px 10px}
#signAssemblyOverlay .sa-product .sa-product-code,#signAssemblyOverlay .sa-product .sa-product-name-select{width:100%;max-width:100%;min-width:0;box-sizing:border-box}
#signAssemblyOverlay .sa-summary{top:74px}
#signAssemblyOverlay .sa-total{font-size:25px;margin:6px 0 14px}
#signAssemblyOverlay,#signAssemblyOverlay *{box-sizing:border-box}
#signAssemblyOverlay{overflow-x:hidden}
#signAssemblyOverlay .sa-card,#signAssemblyOverlay .sa-products,#signAssemblyOverlay .sa-product{max-width:100%;min-width:0;overflow:hidden}
#signAssemblyOverlay .sa-product .sa-field,#signAssemblyOverlay .sa-product input,#signAssemblyOverlay .sa-product select{min-width:0;max-width:100%}
@media(max-width:899px){#signAssemblyOverlay .sa-grid{grid-template-columns:1fr!important}#signAssemblyOverlay .sa-summary{position:static}#signAssemblyOverlay .sa-row,#signAssemblyOverlay .sa-row.two{grid-template-columns:1fr 1fr}}
@media(max-width:1200px){#signAssemblyOverlay .sa-product{grid-template-columns:repeat(4,minmax(0,1fr));grid-template-areas:'name name code code' 'actual unit quote price' 'total total remove remove'}#signAssemblyOverlay .sa-product .sa-remove{width:100%}}
@media(max-width:900px){#signAssemblyOverlay .sa-shell{padding:10px 10px 100px}#signAssemblyOverlay .sa-row,#signAssemblyOverlay .sa-row.two{grid-template-columns:1fr 1fr}#signAssemblyOverlay .sa-actions{position:sticky;bottom:0;background:#15191f;padding:10px 0;z-index:4}}
@media(max-width:620px){#signAssemblyOverlay .sa-panel-auto{grid-template-columns:1fr 1fr}#signAssemblyOverlay .sa-row,#signAssemblyOverlay .sa-row.two{grid-template-columns:1fr}#signAssemblyOverlay .sa-product{grid-template-columns:1fr 1fr;grid-template-areas:'name name' 'code code' 'actual unit' 'quote price' 'total total' 'remove remove'}}
@media(max-width:480px){#signAssemblyOverlay .sa-row,#signAssemblyOverlay .sa-row.two{grid-template-columns:1fr}#signAssemblyOverlay .sa-product{grid-template-columns:1fr;grid-template-areas:'name' 'code' 'actual' 'unit' 'quote' 'price' 'total' 'remove'}#signAssemblyOverlay .sa-top h1{font-size:19px}}
`;document.head.appendChild(s)}
function saOpen(){assemblyActivateHomeContext();saAddStyles();assemblyAddMobileStyles();if(document.getElementById('signAssemblyOverlay'))return;const m=saLoadMaster();const prefs=Object.keys(signAssemblyShippingMaster.prefectures).map(x=>`<option value="${saEsc(x)}" ${x==='東京都'?'selected':''}>${saEsc(x)}</option>`).join('');const o=document.createElement('div');o.id='signAssemblyOverlay';o.innerHTML=`<div class="sa-shell"><header class="sa-top"><div><h1 id="saPageTitle">サイン 組み込み自動計算</h1><div class="sa-note">PC・スマホ共通／金額は1円単位切り上げ</div></div><button class="sa-btn secondary" id="saClose">閉じる</button></header><div class="sa-grid"><main>
<section class="sa-card sa-customer-card"><h2>顧客・製品</h2><div class="sa-row"><div class="sa-field"><label>計算区分</label><select id="saCalcType"><option value="sign">サイン</option><option value="building">建築</option></select></div><div class="sa-field"><label id="saBlockNameLabel">サイン名</label><input id="saSignName" value="サイン①" placeholder="サイン①"></div><div class="sa-field"><label>登録状態</label><input id="saBlockStatus" readonly value="新規ブロック"></div></div><div class="sa-row two"><div class="sa-field sa-relative"><label>顧客名検索</label><input id="saCustomer" autocomplete="off" placeholder="顧客名を入力"><div id="saCustomerSuggest" class="sa-suggest sa-hidden"></div></div><div class="sa-field"><label id="saRankLabel">価格ランク</label><input id="saRank" list="saRankOptions" placeholder="顧客選択で自動反映"><datalist id="saRankOptions"></datalist></div></div><div class="assembly-link-status"><div id="saPriceLinkStatus"></div><button type="button" class="sa-btn secondary assembly-recheck-btn" id="saRecheckPrice">価格表を再確認</button></div><div id="saProducts" class="sa-products"></div><button class="sa-btn secondary" id="saAddProduct">＋ 製品を追加</button></section>
<section class="sa-card sa-assembly-card"><h2>組み込み条件</h2><div class="sa-row"><div class="sa-field"><label>形状</label><select id="saShape"><option value="lantern">行灯形</option><option value="irregular">異形</option></select></div><div class="sa-field"><label>光源</label><select id="saLight"><option value="single">単色</option><option value="tn">TN・RGB</option></select></div><div class="sa-field"><label>モジュール数量</label><input id="saLedQty" inputmode="numeric" type="number" min="0"><div class="sa-note" id="saLedQtyLinkNote">先頭製品の数量と連動します。ここへ直接入力すると手入力を優先します。</div><button type="button" class="sa-btn secondary sa-hidden" id="saUseProductQty" style="margin-top:6px;padding:7px 10px">製品数量に戻す</button></div><div class="sa-field"><label>ピッチ（mm）</label><input id="saPitch" inputmode="numeric" type="number" min="0"></div></div><div class="sa-row"><div class="sa-field"><label>電源方式</label><select id="saPowerMode"><option value="100v">100V</option><option value="power">電源あり</option></select></div><div class="sa-field" id="sa100vWrap"><label>100V：アルミ複合板枚数</label><input id="sa100vPanels" inputmode="numeric" type="number" min="0"></div><div class="sa-field sa-hidden" id="saPowerWrap"><label>電源台数</label><input id="saPowerQty" inputmode="numeric" type="number" min="0"></div><div class="sa-field"><label>電源ケーブル穴</label><input id="saCableHoles" inputmode="numeric" type="number" min="0"></div></div><div class="sa-row"><div class="sa-field"><label>アンカー穴</label><input id="saAnchorHoles" inputmode="numeric" type="number" min="0"></div><div class="sa-field sa-hidden" id="saReceiverTypeWrap"><label>受信器（任意・1種類のみ）</label><select id="saReceiverType"><option value="">追加しない</option><option>PWM受信器</option><option>DMX受信器</option><option>SMA受信器</option></select></div><div class="sa-field sa-hidden" id="saReceiverQtyWrap"><label>受信器台数</label><input id="saReceiverQty" inputmode="numeric" type="number" min="0"></div><div class="sa-field sa-hidden" id="saPanelBuildWrap"><label>簡易電源盤</label><select id="saPanelBuild"><option value="yes">作成する</option><option value="no">作成しない</option></select></div></div></section>
<section class="sa-card sa-panel-card"><h2>アルミ複合板・加工</h2><div class="sa-row">${Object.entries(signAssemblyPanelMaster).map(([k,v])=>`<div class="sa-field"><label>${v.label}（${v.size}）</label><input id="saBoard_${k}" data-board="${k}" inputmode="numeric" type="number" min="0"></div>`).join('')}</div><div class="sa-note">板種ごとに4枚梱包を優先し、余りを3枚・1～2枚梱包へ割り振ります。</div></section>
<section class="sa-card"><h2>配送</h2><div class="sa-row"><div class="sa-field"><label>都道府県</label><select id="saPref">${prefs}</select></div><div class="sa-field"><label>送料表外の任意送料（原価）</label><input id="saManualFreight" inputmode="numeric" type="number" min="0" placeholder="表外の場合のみ"></div><div class="sa-field"><label>任意送料の理由</label><input id="saManualReason" placeholder="重量上限超過など"></div></div><div id="saFreightError"></div></section>
<details class="sa-card"><summary>建築 組み込み単価の参照条件</summary><div class="sa-note" style="margin-top:10px">Excel「組込単価参照元」タブの建築単価を登録済みです。形状（行灯形／異形・CH）、光源（単色／TN・RGB）、数量帯、ピッチ帯をクロスして自動参照します。簡易電源盤単価はサイン・建築共通です。</div></details>
<details class="sa-card"><summary>簡易電源盤 自動算出数量</summary><div class="sa-note" style="margin-top:10px">サイン／AUT組み込み計算時のみ使用します。単価は固定値で内部計算し、価格表とは連動しません。</div><div class="sa-note" id="saPanelPriceMode" style="margin-top:6px">現在の適用価格：単色用</div><div class="sa-panel-auto"><div>1台用<strong id="saPanelQty1">0セット</strong></div><div>2台用<strong id="saPanelQty2">0セット</strong></div><div>3台用<strong id="saPanelQty3">0セット</strong></div><div>4台用<strong id="saPanelQty4">0セット</strong></div></div><div class="sa-note" id="saPanelTargetSummary">電源・受信器台数を入力すると自動算出します。</div></details>
</main><aside><section class="sa-card sa-summary" id="saSummaryCard"><h2>見積結果</h2><div id="saCustomerResult" class="sa-note"></div><div class="sa-total" id="saGrandTotal">0円</div><div id="saBreakdown" class="sa-breakdown"></div><div class="sa-actions"><button class="sa-btn primary" id="saAddBlock">＋ このブロックを追加</button><button class="sa-btn secondary" id="saCopyResult">結果コピー</button><button class="sa-btn secondary" id="saCopyExcel">Excel貼り付け</button><button class="sa-btn secondary" id="saSms">SMS</button><button class="sa-btn secondary" id="saMail">メール</button></div><button class="sa-btn secondary sa-summary-toggle" id="saToggleSummaryDetail" type="button">詳細を開く</button><div id="saSummaryDetail" class="sa-summary-detail"><div class="sa-note" style="margin-top:10px">サインはサイン①・②、建築は光膜①・②として追加し、Excel貼り付け時にブロック間へ空白行を入れます。</div><div id="saBlockList" class="sa-block-list"></div><details style="margin-top:16px"><summary>計算根拠</summary><pre id="saTrace" style="white-space:pre-wrap;font-size:12px;color:#b7c0cb"></pre></details></div></section></aside></div><div id="saMobileTotalBar" class="sa-mobile-total-bar"><strong id="saMobileGrandTotal">合計 0円</strong><button class="sa-btn secondary" id="saMobileShowResult" type="button">結果を見る</button></div></div>`;document.body.appendChild(o);saNormalizeLayoutDom(o);saBind();saAddProductRow();saUpdateLedQtyLinkUi();saCalculate();saRenderBlocks();saSetupMobileResultBar()}
function saNormalizeLayoutDom(root){
  const grid=root?.querySelector('.sa-grid');
  const main=grid?.querySelector(':scope > main');
  const aside=grid?.querySelector(':scope > aside');
  if(!grid||!main||!aside)return;
  // 固定DOM仕様: PCは main(左) -> aside(右)。スマホのみCSSのorderでasideを先頭表示する。
  if(grid.firstElementChild!==main||main.nextElementSibling!==aside){
    grid.append(main,aside);
  }
  grid.dataset.layoutStructure='main-aside';
}

function saClose(){document.getElementById('signAssemblyOverlay')?.remove();if(location.hash==='#sign-assembly-calc'){history.replaceState(null,'',location.pathname+location.search+'#tools');assemblyActivateHomeContext()}}
function saBind(){document.getElementById('saClose').onclick=saClose;document.getElementById('saRecheckPrice').onclick=()=>assemblyRecheckPriceLink('sa');document.getElementById('saAddProduct').onclick=()=>saAddProductRow();document.getElementById('saAddBlock').onclick=saSaveCurrentBlock;document.getElementById('saSaveMaster')?.addEventListener('click',saSaveMaster);document.getElementById('saSaveBuildingMaster')?.addEventListener('click',saSaveBuildingAssemblyMaster);document.getElementById('saUseProductQty').onclick=()=>{signAssemblyLedQtyManual=false;saSyncLedQtyFromProducts(true);saCalculate()};document.getElementById('signAssemblyOverlay').addEventListener('input',e=>{if(e.target.id==='saCustomer'){saLinkedCustomer=null;saCustomerSuggest();saUpdatePriceLinkStatus()}if(e.target.id==='saRank'){saLinkedCustomer=null;saUpdatePriceLinkStatus()}if(e.target.id==='saLedQty'&&!signAssemblyLedQtySyncing){signAssemblyLedQtyManual=true;saUpdateLedQtyLinkUi()}if(e.target.classList?.contains('sa-product-qty'))saSyncLedQtyFromProducts();saCalculate()});document.getElementById('signAssemblyOverlay').addEventListener('change',e=>{if(e.target.id==='saCalcType'){saLinkedCustomer=null;saApplyCalcTypeChange();saUpdatePriceLinkStatus()}saTogglePower();saCalculate()});document.getElementById('saCopyResult').onclick=e=>saCopy(saShareText(),'見積結果',e.currentTarget);document.getElementById('saCopyExcel').onclick=e=>saCopy(saExcelText(),'Excel貼り付け用',e.currentTarget);document.getElementById('saSms').onclick=()=>{const t=saShareText(true);saCopy(t,'SMS本文');location.href='sms:?&body='+encodeURIComponent(t)};document.getElementById('saMail').onclick=()=>{const t=saShareText();location.href='mailto:?subject='+encodeURIComponent('組み込み概算見積')+'&body='+encodeURIComponent(t)};document.getElementById('saToggleSummaryDetail')?.addEventListener('click',saToggleSummaryDetail);document.getElementById('saMobileShowResult')?.addEventListener('click',()=>document.getElementById('saSummaryCard')?.scrollIntoView({behavior:'smooth',block:'start'}));saApplyCalcTypeUi(false);saTogglePower();saUpdatePriceLinkStatus()}

function saCalcType(){return document.getElementById('saCalcType')?.value==='building'?'building':'sign'}
function saCircledNumber(n){const marks=['①','②','③','④','⑤','⑥','⑦','⑧','⑨','⑩'];return marks[Math.max(0,Math.min(marks.length-1,n-1))]||String(n)}
function saDefaultBlockName(index=null,type=saCalcType()){const number=index||signAssemblyBlocks.filter(b=>(b.result?.calcType||'sign')===type).length+1;return `${type==='building'?'光膜':'サイン'}${saCircledNumber(number)}`}
function saApplyCalcTypeUi(resetName=true){
  const type=saCalcType(),building=type==='building';
  const title=document.getElementById('saPageTitle');if(title)title.textContent=building?'建築 光膜 組み込み自動計算':'サイン 組み込み自動計算';
  const nameLabel=document.getElementById('saBlockNameLabel');if(nameLabel)nameLabel.textContent=building?'光膜名':'サイン名';
  const rankLabel=document.getElementById('saRankLabel');if(rankLabel)rankLabel.textContent=building?'掛け率':'価格ランク';
  const rank=document.getElementById('saRank');if(rank)rank.placeholder=building?'掛け率を入力または顧客から反映（例 0.350）':'価格ランクを入力または顧客から反映';
  const options=document.getElementById('saRankOptions');if(options)options.innerHTML=(building?priceBuildingRanks:priceSignRanks).map(([label])=>`<option value="${saEsc(label)}"></option>`).join('');
  const shape=document.getElementById('saShape'),pitch=document.getElementById('saPitch');if(shape)shape.disabled=false;if(pitch){pitch.disabled=false;pitch.placeholder=building?'建築単価表のピッチを入力':'ピッチを入力'}
  if(resetName){const name=document.getElementById('saSignName');if(name)name.value=saDefaultBlockName(null,type)}
}
function saApplyCalcTypeChange(){
  saApplyCalcTypeUi(true);
  const customer=document.getElementById('saCustomer'),rank=document.getElementById('saRank');if(customer)customer.value='';if(rank)rank.value='';
  document.getElementById('saCustomerSuggest')?.classList.add('sa-hidden');
  saRefreshProductPrices();
}
function saFirstProductQty(){const first=document.querySelector('#saProducts .sa-product .sa-product-qty');return Math.max(0,Math.floor(Number(first?.value)||0))}
function saUpdateLedQtyLinkUi(){const note=document.getElementById('saLedQtyLinkNote'),btn=document.getElementById('saUseProductQty');if(note)note.textContent=signAssemblyLedQtyManual?'手入力を優先中です。製品数量へ戻すこともできます。':'先頭製品の数量と連動中です。ここへ直接入力すると手入力を優先します。';if(btn)btn.classList.toggle('sa-hidden',!signAssemblyLedQtyManual)}
function saSyncLedQtyFromProducts(force=false){if(signAssemblyLedQtyManual&&!force){saUpdateLedQtyLinkUi();return}const input=document.getElementById('saLedQty');if(!input)return;signAssemblyLedQtySyncing=true;const qty=saFirstProductQty();input.value=qty>0?String(qty):'';signAssemblyLedQtySyncing=false;saUpdateLedQtyLinkUi()}
function saToggleSummaryDetail(){const detail=document.getElementById('saSummaryDetail'),btn=document.getElementById('saToggleSummaryDetail');if(!detail||!btn)return;const open=detail.classList.toggle('is-open');btn.textContent=open?'詳細を閉じる':'詳細を開く'}
function saSetupMobileResultBar(){const card=document.getElementById('saSummaryCard'),bar=document.getElementById('saMobileTotalBar');if(!card||!bar||typeof IntersectionObserver==='undefined')return;const io=new IntersectionObserver(entries=>{const mobile=window.matchMedia('(max-width:620px)').matches;bar.classList.toggle('is-visible',mobile&&!entries[0].isIntersecting)},{threshold:.05});io.observe(card);window.addEventListener('resize',()=>{if(!window.matchMedia('(max-width:620px)').matches)bar.classList.remove('is-visible')},{passive:true})}
function saTogglePower(){const power=document.getElementById('saPowerMode')?.value==='power';document.getElementById('sa100vWrap')?.classList.toggle('sa-hidden',power);document.getElementById('saPowerWrap')?.classList.toggle('sa-hidden',!power);document.getElementById('saReceiverTypeWrap')?.classList.toggle('sa-hidden',!power);document.getElementById('saPanelBuildWrap')?.classList.toggle('sa-hidden',!power);const has=power&&!!document.getElementById('saReceiverType')?.value;document.getElementById('saReceiverQtyWrap')?.classList.toggle('sa-hidden',!has)}

let saLinkedCustomer=null;
let autLinkedCustomer=null;
let assemblyPriceLinkCheckedAt='';
function assemblyNowLabel(){try{return new Intl.DateTimeFormat('ja-JP',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'}).format(new Date())}catch{return new Date().toLocaleString()}}
function assemblyPriceDataCount(type){return type==='building'?(Array.isArray(buildingPriceCustomers)?buildingPriceCustomers.length:0):(Array.isArray(salesPriceCustomers)?salesPriceCustomers.length:0)}
function assemblyFindCustomer(type,name){const src=type==='building'?(Array.isArray(buildingPriceCustomers)?buildingPriceCustomers:[]):(Array.isArray(salesPriceCustomers)?salesPriceCustomers:[]);return src.find(x=>String(x.customer_name||'').trim()===String(name||'').trim())||null}
function assemblyLinkedRank(type,row){return type==='building'?Number(row?.building_rate||0).toFixed(3):String(row?.price_rank||'').trim()}
function assemblyStatusHtml({type,name,rank,linked,productInfo=''}){const count=assemblyPriceDataCount(type),label=type==='building'?'建築顧客・掛け率':'サイン顧客・価格ランク';if(!count)return `<div class="assembly-link-badge error">× 価格表データ未読込</div><div class="assembly-link-detail">${label}が読み込まれていません。価格表機能でデータを読み込んでください。</div>`;if(linked&&name)return `<div class="assembly-link-badge ok">● 価格表連動済み</div><div class="assembly-link-detail">${saEsc(name)} ／ ${type==='building'?'掛け率':'ランク'} ${saEsc(rank)} ／ 登録 ${count}件${assemblyPriceLinkCheckedAt?` ／ 確認 ${saEsc(assemblyPriceLinkCheckedAt)}`:''}${productInfo?`<br>${productInfo}`:''}</div>`;if(name)return `<div class="assembly-link-badge warn">△ 手入力・価格表未連動</div><div class="assembly-link-detail">候補一覧から顧客を選択すると連動済みになります。現在の${type==='building'?'掛け率':'ランク'}は手動値です。</div>`;return `<div class="assembly-link-badge neutral">価格表データ読込済み</div><div class="assembly-link-detail">${label} ${count}件。顧客候補を選択すると連動状態を確認できます。</div>`}
function saUpdatePriceLinkStatus(){const box=document.getElementById('saPriceLinkStatus');if(!box)return;const type=saCalcType(),name=document.getElementById('saCustomer')?.value.trim()||'',rank=document.getElementById('saRank')?.value.trim()||'',matched=assemblyFindCustomer(type,name),linked=!!(saLinkedCustomer&&matched&&saLinkedCustomer.name===name&&saLinkedCustomer.type===type&&assemblyLinkedRank(type,matched)===rank);let productInfo='';const row=document.querySelector('.sa-product');if(row){const code=row.querySelector('.sa-product-code')?.value.trim()||'',price=row.querySelector('.sa-product-price')?.value||'',unit=row.querySelector('.sa-product-unit')?.value||'';if(code)productInfo=`商品番号 ${saEsc(code)} ／ 販売単位 ${saEsc(unit||'-')} ／ 参照単価 ${saEsc(price||'0')}円`;}box.innerHTML=assemblyStatusHtml({type,name,rank,linked,productInfo})}
function autUpdatePriceLinkStatus(){const box=document.getElementById('autPriceLinkStatus');if(!box)return;const type=autType(),name=document.getElementById('autCustomer')?.value.trim()||'',rank=document.getElementById('autRank')?.value.trim()||'',matched=assemblyFindCustomer(type,name),linked=!!(autLinkedCustomer&&matched&&autLinkedCustomer.name===name&&autLinkedCustomer.type===type&&assemblyLinkedRank(type,matched)===rank);const product=document.getElementById('autProduct')?.value||'',base=autModuleBasePrice(),info=product?`AUT参照：${type==='building'?'建築':'サイン'} ／ ${type==='building'?'掛け率':'ランク'} ${saEsc(rank||'-')} ／ 製品 ${saEsc(product)} ／ 基準単価 ${saEsc(base)}円＋半田・部材55円`:'';box.innerHTML=assemblyStatusHtml({type,name,rank,linked,productInfo:info})}
async function assemblyRecheckPriceLink(source){const btn=document.getElementById(source==='aut'?'autRecheckPrice':'saRecheckPrice');if(btn)btn.disabled=true;try{await Promise.allSettled([reloadSalesPriceCustomers({silent:true}),loadBuildingPriceCustomersFromCloud({silent:true})]);assemblyPriceLinkCheckedAt=assemblyNowLabel();if(source==='aut'){const name=document.getElementById('autCustomer')?.value.trim()||'',type=autType(),row=assemblyFindCustomer(type,name);if(row){document.getElementById('autRank').value=assemblyLinkedRank(type,row);autLinkedCustomer={name,type};}autCalculate();autUpdatePriceLinkStatus()}else{const name=document.getElementById('saCustomer')?.value.trim()||'',type=saCalcType(),row=assemblyFindCustomer(type,name);if(row){document.getElementById('saRank').value=assemblyLinkedRank(type,row);saLinkedCustomer={name,type};}saRefreshProductPrices();saCalculate();saUpdatePriceLinkStatus()}saToast('価格表との連動を再確認しました')}finally{if(btn)btn.disabled=false}}
function saCustomerSuggest(){const q=String(document.getElementById('saCustomer').value||'').normalize('NFKC').toLowerCase().trim(),box=document.getElementById('saCustomerSuggest');if(!q){box.classList.add('sa-hidden');return}const building=saCalcType()==='building';const source=building?(Array.isArray(buildingPriceCustomers)?buildingPriceCustomers:[]):(Array.isArray(salesPriceCustomers)?salesPriceCustomers:[]);const rows=source.filter(x=>String(x.customer_name||'').normalize('NFKC').toLowerCase().includes(q)).slice(0,12);box.innerHTML=rows.length?rows.map(x=>{const rank=building?Number(x.building_rate).toFixed(3):x.price_rank;return `<button type="button" data-name="${saEsc(x.customer_name)}" data-rank="${saEsc(rank)}">${saEsc(x.customer_name)} <strong>${saEsc(rank)}</strong></button>`}).join(''):`<div class="sa-note" style="padding:10px">${building?'建築顧客リストと価格表':'価格表'}を読み込んでください。</div>`;box.classList.remove('sa-hidden');box.querySelectorAll('button').forEach(b=>b.onclick=()=>{document.getElementById('saCustomer').value=b.dataset.name;document.getElementById('saRank').value=b.dataset.rank;saLinkedCustomer={name:b.dataset.name,type:saCalcType()};assemblyPriceLinkCheckedAt=assemblyPriceLinkCheckedAt||assemblyNowLabel();box.classList.add('sa-hidden');saRefreshProductPrices();saCalculate();saUpdatePriceLinkStatus()})}
let saProductSeq=0;
function saProductLabel(x){return [x.product_name,x.specifications].filter(Boolean).join(' ')}
function saUniqueProductNames(){return [...new Set((Array.isArray(salesPriceRows)?salesPriceRows:[]).map(x=>String(x.product_name||'').trim()).filter(Boolean))]}
function saProductNameOptions(selected=''){const names=saUniqueProductNames();return ['<option value="">商品名を選択してください</option>',...names.map(name=>`<option value="${saEsc(name)}" ${name===selected?'selected':''}>${saEsc(name)}</option>`)].join('')}
function saProductNumberOptions(productName='',selectedCode=''){const rows=(Array.isArray(salesPriceRows)?salesPriceRows:[]).filter(x=>String(x.product_name||'')===String(productName||''));return ['<option value="">商品番号を選択してください</option>',...rows.map(x=>{const code=String(x.product_number||'');const spec=String(x.specifications||'');return `<option value="${saEsc(code)}" ${code===selectedCode?'selected':''}>${saEsc(code)}${spec?` ｜ ${saEsc(spec)}`:''}</option>`})].join('')}
function saPriceKey(){const rank=document.getElementById('saRank')?.value||'';return saCalcType()==='building'?getBuildingRateKey(rank):(priceSignRanks.find(r=>r[0]===rank)||[])[1]||''}
function saRefreshProductMasterDropdowns(row){const nameSelect=row.querySelector('.sa-product-name-select');const numberSelect=row.querySelector('.sa-product-code');if(!nameSelect||!numberSelect)return;const currentName=nameSelect.value||row.dataset.baseProductName||'';const currentCode=numberSelect.value||'';nameSelect.innerHTML=saProductNameOptions(currentName);if(currentName)nameSelect.value=currentName;numberSelect.innerHTML=saProductNumberOptions(currentName,currentCode);if(currentCode)numberSelect.value=currentCode}
function saApplyProductNumber(row){const productName=row.querySelector('.sa-product-name-select')?.value||'';const code=row.querySelector('.sa-product-code')?.value||'';const rows=Array.isArray(salesPriceRows)?salesPriceRows:[];const x=rows.find(item=>String(item.product_name||'')===productName&&String(item.product_number||'')===code)||null;if(!x){row.dataset.record='';row.dataset.productName='';row.dataset.purchaseUnit='1';row.querySelector('.sa-product-price').value='';row.querySelector('.sa-product-name-full').textContent=productName||'';const unitEl=row.querySelector('.sa-product-unit');if(unitEl)unitEl.value='1';saCalculate();return}const label=saProductLabel(x),key=saPriceKey(),purchaseUnit=Math.max(1,Math.floor(Number(x.purchase_unit)||1));row.dataset.record=JSON.stringify(x);row.dataset.baseProductName=String(x.product_name||'');row.dataset.productName=String(x.product_name||'');row.dataset.purchaseUnit=String(purchaseUnit);row.querySelector('.sa-product-price').value=key?Number(x[key]||0):'';const unitEl=row.querySelector('.sa-product-unit');if(unitEl)unitEl.value=String(purchaseUnit);row.querySelector('.sa-product-name-full').textContent=label;row.querySelector('.sa-product-name-select').title=String(x.product_name||'');row.querySelector('.sa-product-code').title=label;saCalculate()}
function saApplyProductName(row){const name=row.querySelector('.sa-product-name-select')?.value||'';const numberSelect=row.querySelector('.sa-product-code');row.dataset.baseProductName=name;row.dataset.record='';row.dataset.productName='';row.dataset.purchaseUnit='1';numberSelect.innerHTML=saProductNumberOptions(name,'');row.querySelector('.sa-product-price').value='';const unitEl=row.querySelector('.sa-product-unit');if(unitEl)unitEl.value='1';const quoteEl=row.querySelector('.sa-product-quote-qty');if(quoteEl)quoteEl.value='';row.querySelector('.sa-product-name-full').textContent=name;if(numberSelect.options.length===2){numberSelect.selectedIndex=1;saApplyProductNumber(row)}else saCalculate()}
function saRefreshProductPrices(){const key=saPriceKey();document.querySelectorAll('.sa-product').forEach(row=>{let x=null;try{x=JSON.parse(row.dataset.record||'null')}catch{}if(x)row.querySelector('.sa-product-price').value=key?Number(x[key]||0):''});saCalculate()}
function saAddProductRow(){const host=document.getElementById('saProducts'),id=++saProductSeq,row=document.createElement('div');row.className='sa-product';row.dataset.id=id;row.dataset.purchaseUnit='1';row.innerHTML=`<div class="sa-field sa-name-field"><label>商品名</label><select class="sa-product-name-select">${saProductNameOptions()}</select><div class="sa-product-name-full"></div></div><div class="sa-field sa-code-field"><label>商品番号</label><select class="sa-product-code"><option value="">商品番号を選択してください</option></select></div><div class="sa-field sa-actual-field"><label>実数</label><input class="sa-product-qty" type="number" inputmode="numeric" min="0"></div><div class="sa-field sa-unit-field"><label>販売単位</label><input class="sa-product-unit" value="1" readonly></div><div class="sa-field sa-quote-field"><label>販売数量</label><input class="sa-product-quote-qty" readonly></div><div class="sa-field sa-price-field"><label>単価</label><input class="sa-product-price" type="number" inputmode="numeric" min="0"></div><div class="sa-field sa-total-field"><label>金額</label><input class="sa-product-total" readonly></div><button class="sa-btn danger sa-remove">削除</button>`;host.appendChild(row);row.querySelector('.sa-remove').onclick=()=>{const wasFirst=row===document.querySelector('#saProducts .sa-product');row.remove();if(wasFirst)saSyncLedQtyFromProducts();saCalculate()};row.querySelector('.sa-product-name-select').addEventListener('change',()=>saApplyProductName(row));row.querySelector('.sa-product-code').addEventListener('change',()=>saApplyProductNumber(row));row.querySelector('.sa-product-name-select').addEventListener('focus',()=>saRefreshProductMasterDropdowns(row));}
function saCaptureState(){
  const ids=['saCalcType','saShape','saLight','saLedQty','saPitch','saPowerMode','sa100vPanels','saPowerQty','saCableHoles','saAnchorHoles','saReceiverType','saReceiverQty','saPanelBuild','saPref','saManualFreight','saManualReason'];
  const values={};ids.forEach(id=>{const el=document.getElementById(id);if(el)values[id]=el.value});
  Object.keys(signAssemblyPanelMaster).forEach(k=>{values['saBoard_'+k]=document.getElementById('saBoard_'+k)?.value||''});
  const products=[...document.querySelectorAll('.sa-product')].map(row=>({record:row.dataset.record||'',name:row.dataset.productName||'',productName:row.querySelector('.sa-product-name-select')?.value||row.dataset.baseProductName||'',code:row.querySelector('.sa-product-code')?.value||'',qty:row.querySelector('.sa-product-qty')?.value||'',purchaseUnit:row.dataset.purchaseUnit||row.querySelector('.sa-product-unit')?.value||'1',price:row.querySelector('.sa-product-price')?.value||''}));
  return {values,products,ledQtyManual:signAssemblyLedQtyManual};
}
function saRestoreState(state){
  if(!state)return;
  signAssemblyLedQtyManual=!!state.ledQtyManual;saApplyCalcTypeUi(false);
  Object.entries(state.values||{}).forEach(([id,value])=>{const el=document.getElementById(id);if(el)el.value=value});
  const host=document.getElementById('saProducts');host.innerHTML='';
  (state.products||[]).forEach(item=>{saAddProductRow();const row=host.lastElementChild;let rec=null;try{rec=JSON.parse(item.record||'null')}catch{}const productName=item.productName||rec?.product_name||String(item.name||'').split(' ')[0]||'';row.dataset.record=item.record||'';row.dataset.baseProductName=productName;row.dataset.productName=productName;row.dataset.purchaseUnit=String(item.purchaseUnit||rec?.purchase_unit||1);const nameSel=row.querySelector('.sa-product-name-select');nameSel.innerHTML=saProductNameOptions(productName);nameSel.value=productName;const codeSel=row.querySelector('.sa-product-code');codeSel.innerHTML=saProductNumberOptions(productName,item.code||'');codeSel.value=item.code||'';row.querySelector('.sa-product-qty').value=item.qty||'';row.querySelector('.sa-product-unit').value=String(item.purchaseUnit||rec?.purchase_unit||1);row.querySelector('.sa-product-price').value=item.price||'';row.querySelector('.sa-product-name-full').textContent=item.name||productName;nameSel.title=productName;codeSel.title=item.name||productName});
  if(!host.children.length)saAddProductRow();saTogglePower();saUpdateLedQtyLinkUi();saCalculate();
}
function saNextSignName(){return saDefaultBlockName()}
function saResetForNextBlock(){
  signAssemblyEditingBlockIndex=-1;signAssemblyLedQtyManual=false;document.getElementById('saBlockStatus').value='新規ブロック';document.getElementById('saSignName').value=saNextSignName();saApplyCalcTypeUi(false);
  ['saLedQty','saPitch','sa100vPanels','saPowerQty','saCableHoles','saAnchorHoles','saReceiverQty','saManualFreight','saManualReason'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=''});
  Object.keys(signAssemblyPanelMaster).forEach(k=>{const el=document.getElementById('saBoard_'+k);if(el)el.value=''});
  document.getElementById('saReceiverType').value='';document.getElementById('saPowerMode').value='100v';document.getElementById('saPanelBuild').value='yes';
  document.getElementById('saProducts').innerHTML='';saAddProductRow();saTogglePower();saUpdateLedQtyLinkUi();saCalculate();
}
function saSaveCurrentBlock(){
  saCalculate();const name=(document.getElementById('saSignName').value||'').trim()||saNextSignName();
  const block={name,state:saCaptureState(),result:JSON.parse(JSON.stringify(signAssemblyLastResult||{}))};
  if(signAssemblyEditingBlockIndex>=0)signAssemblyBlocks[signAssemblyEditingBlockIndex]=block;else signAssemblyBlocks.push(block);
  saRenderBlocks();saToast(`${name}をブロック登録しました`);saResetForNextBlock();
}
function saEditBlock(index){const block=signAssemblyBlocks[index];if(!block)return;signAssemblyEditingBlockIndex=index;document.getElementById('saSignName').value=block.name;document.getElementById('saBlockStatus').value='編集中';saRestoreState(block.state);window.scrollTo({top:0,behavior:'smooth'})}
function saDeleteBlock(index){if(!confirm('このブロックを削除しますか？'))return;signAssemblyBlocks.splice(index,1);if(signAssemblyEditingBlockIndex===index)saResetForNextBlock();else if(signAssemblyEditingBlockIndex>index)signAssemblyEditingBlockIndex--;saRenderBlocks()}
function saRenderBlocks(){const host=document.getElementById('saBlockList');if(!host)return;const total=signAssemblyBlocks.reduce((sum,b)=>sum+Number(b.result?.grand||0),0);host.innerHTML=signAssemblyBlocks.map((b,i)=>`<div class="sa-block-item"><div class="sa-block-head"><strong>${saEsc(b.name)}</strong><span class="sa-block-total">${saYen(b.result?.grand||0)}円</span></div><div class="sa-note">製品 ${saYen(b.result?.productTotal||0)}円／組み込み ${saYen(b.result?.assembly||0)}円${b.result?.panelFee?`／電源盤 ${saYen(b.result.panelFee)}円`:''}／梱包送料 ${saYen(b.result?.packShipping||0)}円</div><div class="sa-block-actions"><button class="sa-btn secondary" onclick="saEditBlock(${i})">編集</button><button class="sa-btn danger" onclick="saDeleteBlock(${i})">削除</button></div></div>`).join('')+(signAssemblyBlocks.length?`<div class="sa-line"><span>登録ブロック合計</span><strong>${saYen(total)}円</strong></div>`:'');}
function saCurrentHasContent(){return Boolean(signAssemblyLastResult&&(signAssemblyLastResult.products?.length||signAssemblyLastResult.assembly||signAssemblyLastResult.panelFee||signAssemblyLastResult.packShipping))}
function saExportBlocks(){const blocks=signAssemblyBlocks.map(b=>({name:b.name,result:b.result}));if(signAssemblyEditingBlockIndex<0&&saCurrentHasContent())blocks.push({name:(document.getElementById('saSignName').value||'').trim()||saNextSignName(),result:JSON.parse(JSON.stringify(signAssemblyLastResult))});return blocks}
window.saEditBlock=saEditBlock;window.saDeleteBlock=saDeleteBlock;
function saPackSplit(q){q=Math.max(0,Math.floor(q));const r={2:0,3:0,4:0};r[4]=Math.floor(q/4);const rem=q%4;if(rem===3)r[3]=1;else if(rem>0)r[2]=1;return r}
function saRoundDownLedQty(qty){
  qty=Math.max(0,Math.floor(Number(qty)||0));
  if(!qty)return 0;
  return Math.max(10,Math.floor(qty/10)*10);
}
function saUnitPrice(shape,light,qty,pitch){const key=shape==='lantern'?(light==='single'?'lanternSingle':'lanternTn'):(light==='single'?'irregularSingle':'irregularTn');const tables=saCalcType()==='building'?buildingAssemblyUnitTables:signAssemblyUnitTables;const lookupQty=saRoundDownLedQty(qty);const row=tables[key].find(x=>lookupQty>=x[0]&&lookupQty<=x[1]);const pi=signAssemblyPitchBands.findIndex(x=>pitch>=x[0]&&pitch<=x[1]);return row&&pi>=0?row[2][pi]:0}
function saPanelAllocation(total){total=Math.max(0,Math.floor(total));const r={1:0,2:0,3:0,4:Math.floor(total/4)};const rem=total%4;if(rem)r[rem]=1;return r}
function saCalculate(){if(!document.getElementById('signAssemblyOverlay'))return;const products=[...document.querySelectorAll('.sa-product')].map(row=>{const actualQty=Math.floor(Number(row.querySelector('.sa-product-qty').value)||0),purchaseUnit=Math.max(1,Math.floor(Number(row.dataset.purchaseUnit||row.querySelector('.sa-product-unit')?.value)||1)),qty=ceilDrawingQuantityToUnit(actualQty,purchaseUnit),price=Number(row.querySelector('.sa-product-price').value)||0,total=Math.ceil(qty*price);const quoteEl=row.querySelector('.sa-product-quote-qty');if(quoteEl)quoteEl.value=actualQty>0?String(qty):'';const unitEl=row.querySelector('.sa-product-unit');if(unitEl)unitEl.value=String(purchaseUnit);row.querySelector('.sa-product-total').value=total?saYen(total)+'円':'';return {name:String(row.dataset.productName||'').trim(),code:row.querySelector('.sa-product-code').value.trim(),actualQty,purchaseUnit,qty,price,total}}).filter(x=>x.name&&x.actualQty>0);const productTotal=products.reduce((s,x)=>s+x.total,0);const boards={};let material=0,perimeter=0,boardCount=0,packFee=0,weight=0;const packTrace=[];Object.entries(signAssemblyPanelMaster).forEach(([k,v])=>{const q=Math.floor(saNum('saBoard_'+k));boards[k]=q;boardCount+=q;material+=q*v.material;perimeter+=q*v.perimeter;const sp=saPackSplit(q);[2,3,4].forEach(n=>{if(sp[n]){packFee+=sp[n]*v.pack[n];weight+=sp[n]*v.weight[n];packTrace.push(`${v.label} ${n===2?'1～2':n}枚梱包×${sp[n]}組（${v.weight[n]}kg×${sp[n]}）`)}})});const calcType=saCalcType(),shape=document.getElementById('saShape').value,light=document.getElementById('saLight').value,led=Math.floor(saNum('saLedQty')),pricingLed=saRoundDownLedQty(led),pitch=saNum('saPitch');const unit=saUnitPrice(shape,light,pricingLed,pitch);const assemblyWork=Math.ceil(led*unit);const outerCut=Math.ceil(perimeter*2*(shape==='lantern'?0.21:0.3));const dataCreation=shape==='irregular'?boardCount*1800:0;const marking=led*(shape==='lantern'?7:10);const cableHoles=saNum('saCableHoles')*30,anchor=saNum('saAnchorHoles')*100,residue=boardCount*200;const inspect=boardCount*(light==='single'?(shape==='lantern'?300:400):400);const powerMode=document.getElementById('saPowerMode').value,powerQty=Math.floor(saNum('saPowerQty')),hundredQty=Math.floor(saNum('sa100vPanels'));const cordQty=powerMode==='100v'?hundredQty:powerQty,cordUnit=light==='single'?560:740,cord=cordQty*cordUnit;const assemblyRaw=Math.ceil(material+outerCut+dataCreation+marking+cableHoles+anchor+residue+assemblyWork+inspect+cord),assembly=saRoundUpHundred(assemblyRaw);const receiverType=document.getElementById('saReceiverType').value,receiverQty=receiverType?Math.floor(saNum('saReceiverQty')):0,panelTarget=powerMode==='power'?powerQty+receiverQty:0,panelAlloc=saPanelAllocation(panelTarget),allMasters=saLoadMaster(),panelPriceType=light==='single'?'single':'tn',master=allMasters[panelPriceType]||saEmptyPanelMaster();let panelFee=0;if(powerMode==='power'&&document.getElementById('saPanelBuild').value==='yes')panelFee=panelAlloc[1]*master.panel1+panelAlloc[2]*master.panel2+panelAlloc[3]*master.panel3+panelAlloc[4]*master.panel4;[1,2,3,4].forEach(n=>{const el=document.getElementById('saPanelQty'+n);if(el){const q=panelAlloc[n]||0,unitPrice=Number(master['panel'+n]||0);el.textContent=q+'セット'+(q?` / ${unitPrice?saYen(q*unitPrice)+'円':'単価未登録'}`:'')}});const modeEl=document.getElementById('saPanelPriceMode');if(modeEl)modeEl.textContent='現在の適用価格：'+(panelPriceType==='single'?'単色用':'TN・RGB用')+'（サイン・建築共通）';const targetEl=document.getElementById('saPanelTargetSummary');if(targetEl)targetEl.textContent=powerMode==='power'?`対象合計 ${panelTarget}台（電源${powerQty}台${receiverType?`＋${receiverType}${receiverQty}台`:''}）`:'100V選択中のため簡易電源盤は計算しません。';const pref=document.getElementById('saPref').value,dist=signAssemblyShippingMaster.prefectures[pref],weightBand=signAssemblyShippingMaster.weights.find(x=>x>=weight),distBand=signAssemblyShippingMaster.distances.find(x=>x>=dist);let freightCost=0,freightSell=0,freightSource='未計算',error='';if(weight>0&&pref){if(weightBand&&distBand&&signAssemblyShippingMaster.matrix[String(weightBand)]?.[String(distBand)]!=null){freightCost=signAssemblyShippingMaster.matrix[String(weightBand)][String(distBand)];freightSource=`送料表：${weight}kg→${weightBand}kg、距離${dist}→${distBand}`;}else{const manual=saNum('saManualFreight');if(manual>0){freightCost=manual;freightSource='任意送料（原価）';}else error='送料表の登録範囲を超えています。任意送料を入力してください。'}freightSell=Math.ceil(freightCost/0.8)}const packShippingRaw=Math.ceil(packFee+freightSell),packShipping=saRoundUpHundred(packShippingRaw),grand=Math.ceil(productTotal+assembly+panelFee+packShipping);signAssemblyLastResult={calcType,products,productTotal,assembly,panelFee,packShipping,grand,details:{material,outerCut,dataCreation,marking,cableHoles,anchor,residue,assemblyWork,inspect,cord,cordQty,cordUnit,unit,pricingLed,pitch,packFee,weight,freightCost,freightSell,freightSource,panelTarget,panelAlloc,panelPriceType,receiverType,receiverQty,packTrace,pref,dist,weightBand,distBand}};document.getElementById('saGrandTotal').textContent=saYen(grand)+'円';const mobileTotal=document.getElementById('saMobileGrandTotal');if(mobileTotal)mobileTotal.textContent='合計 '+saYen(grand)+'円';document.getElementById('saCustomerResult').textContent=[calcType==='building'?'建築':'サイン',document.getElementById('saCustomer').value,document.getElementById('saRank').value?`${calcType==='building'?'掛け率':'ランク'} ${document.getElementById('saRank').value}`:'' ].filter(Boolean).join(' / ');document.getElementById('saBreakdown').innerHTML=`<div class="sa-line"><span>製品</span><strong>${saYen(productTotal)}円</strong></div><div class="sa-line"><span>組み込み費</span><strong>${saYen(assembly)}円</strong></div>${powerMode==='power'&&document.getElementById('saPanelBuild').value==='yes'?`<div class="sa-line"><span>簡易電源盤${panelTarget>0?` <small style="font-size:.82em;font-weight:600;color:var(--muted);white-space:normal">（${[4,3,2,1].filter(n=>panelAlloc[n]>0).map(n=>`${n}台用×${panelAlloc[n]}セット`).join('＋')}）</small>`:''}</span><strong>${saYen(panelFee)}円</strong></div>`:''}<div class="sa-line"><span>梱包送料</span><strong>${saYen(packShipping)}円</strong></div>`;document.getElementById('saFreightError').innerHTML=error?`<div class="sa-error">${error}</div>`:'';const boardFormulaLines=Object.entries(signAssemblyPanelMaster).filter(([k])=>(boards[k]||0)>0).map(([k,v])=>`${v.label}：${boards[k]}枚 × ${saYen(v.material)}円 ＝ ${saYen((boards[k]||0)*v.material)}円`);document.getElementById('saTrace').textContent=[...(products||[]).map(x=>`製品数量：実数${x.actualQty}個 → 販売単位${x.purchaseUnit}個 → 販売数量${x.qty}個 × 単価${saYen(x.price)}円 = ${saYen(x.total)}円`),'',...boardFormulaLines,`アルミ複合板費合計：${saYen(material)}円`,`外周カット：${saYen(outerCut)}円`,`データ作成：${saYen(dataCreation)}円`,`墨出し：${saYen(marking)}円`,`電源ケーブル穴：${saYen(cableHoles)}円`,`アンカー穴：${saYen(anchor)}円`,`残材処理：${saYen(residue)}円`,calcType==='building'?`組込加工：Excel「組込単価参照元」建築${shape==='lantern'?'行灯':'異形・CH'} ${light==='single'?'単色':'TN・RGB'}／実数量${led}個／単価参照数量${pricingLed}個（10個単位切り下げ）／${signAssemblyPitchLabels[signAssemblyPitchBands.findIndex(x=>pitch>=x[0]&&pitch<=x[1])]||'ピッチ範囲外'}（入力${pitch||0}mm）× 単価${unit}円 = ${saYen(assemblyWork)}円`:`組込加工：${light==='single'?'単色':'TN・RGB'}表／実数量${led}個／単価参照数量${pricingLed}個（10個単位切り下げ）／ピッチ${pitch||0}mm × 単価${unit}円 = ${saYen(assemblyWork)}円`,`検査：${saYen(inspect)}円`,`電源コード：${cordQty}本 × ${cordUnit}円 = ${saYen(cord)}円`,`組み込み費小計：${saYen(assemblyRaw)}円 → 100円単位切り上げ ${saYen(assembly)}円`,'',...packTrace,`梱包費：${saYen(packFee)}円`,`合計重量：${weight}kg`,`送料原価：${saYen(freightCost)}円`,`送料売価：${saYen(freightCost)}÷0.8＝${saYen(freightSell)}円`,`梱包送料小計：${saYen(packShippingRaw)}円 → 100円単位切り上げ ${saYen(packShipping)}円`,freightSource,'',`簡易電源盤対象：電源${powerQty}台${receiverType?`＋${receiverType}${receiverQty}台`:''}＝${panelTarget}台`,`簡易電源盤価格区分：${panelPriceType==='single'?'単色用':'TN・RGB用'}（サイン・建築共通）`,`4台用×${panelAlloc[4]}、3台用×${panelAlloc[3]}、2台用×${panelAlloc[2]}、1台用×${panelAlloc[1]}`,panelTarget>0&&panelFee===0?'※簡易電源盤の対象数量は連動済みです。単価マスターが未登録のため金額は0円です。':''].join('\n');saUpdatePriceLinkStatus()}
function saShareText(short=false){const blocks=saExportBlocks();if(!blocks.length)return'';const customer=document.getElementById('saCustomer').value.trim();const lines=['【組み込み概算見積】',customer?`${customer} 御中`:''];blocks.forEach((b,index)=>{const r=b.result||{};lines.push('',`■ ${b.name}`,...(r.products||[]).flatMap(x=>short?[`${x.name} ${x.qty}${x.code?'（'+x.code+'）':''}`]:[x.name,`単価 ${saYen(x.price)}円 × ${x.qty} ＝ ${saYen(x.total)}円`]),`組み込み費：${saYen(r.assembly||0)}円`,r.panelFee?`簡易電源盤：${saYen(r.panelFee)}円`:'',`梱包送料：${saYen(r.packShipping||0)}円`,`小計：${saYen(r.grand||0)}円`)});lines.push('',`合計：${saYen(blocks.reduce((sum,b)=>sum+Number(b.result?.grand||0),0))}円`);return lines.filter((x,i)=>x!==''||lines[i-1]!=='').join('\n')}
function saRowsForResult(r){const clean=s=>String(s??'').replace(/[\r\n,]/g,' ').trim();const rows=(r.products||[]).map(x=>[clean(x.name),clean(x.code),String(x.qty)]);rows.push(['AWS組込関連【一式】','AWS-LED-SET-01','1']);if(r.panelFee)rows.push(['AWS組込関連【一式】','AWS-BOX-SET-01','1']);if(r.packShipping)rows.push(['AWS組込関連【一式】','AWS-EXP-SET-01','1']);return rows}
function saExcelText(){const blocks=saExportBlocks();if(!blocks.length)return'';const rows=[];blocks.forEach((b,index)=>{if(index>0)rows.push(['','','']);rows.push(...saRowsForResult(b.result||{}))});return '*****,'+rows.flat().join(',')}
async function saCopy(text,label,button=null){if(!text){saToast('コピーする内容がありません');return false}const original=button?.textContent||'';try{await navigator.clipboard.writeText(text)}catch{const t=document.createElement('textarea');t.value=text;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove()}if(button){button.textContent='コピー済み ✓';button.disabled=true;button.classList.add('primary');setTimeout(()=>{button.textContent=original;button.disabled=false;button.classList.remove('primary')},1600)}saToast(label+'をコピーしました');return true}


// Sign/AUT calculators: always open from the Home sales-tools context.
function assemblyActivateHomeContext(){
  document.querySelectorAll('.page-section').forEach(section=>section.classList.toggle('active',section.id==='tools'));
  document.querySelectorAll('.nav a').forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#tools'));
}

function assemblyAddMobileStyles(){
  if(document.getElementById('assemblyMobileStyles')) return;
  const style=document.createElement('style');
  style.id='assemblyMobileStyles';
  style.textContent=`
    #signAssemblyOverlay, #autAssemblyOverlay{position:fixed!important;inset:0!important;background:#0b0d10!important;z-index:10000!important;overflow-y:auto!important;overflow-x:hidden!important;color:#eef1f5!important;font-family:inherit!important;overscroll-behavior:contain}
    #signAssemblyOverlay .sa-shell{width:min(100%,1700px)!important;max-width:1700px!important;margin:0 auto!important;box-sizing:border-box!important}
    #autAssemblyOverlay .sa-shell{width:min(100%,1500px)!important;max-width:1500px!important;margin:0 auto!important;box-sizing:border-box!important}
    #signAssemblyOverlay .sa-grid{display:grid!important;grid-template-columns:minmax(0,7fr) minmax(340px,3fr)!important;gap:18px!important;align-items:start!important;min-width:0!important}
    #autAssemblyOverlay .sa-grid{display:grid!important;grid-template-columns:minmax(0,1fr)!important;min-width:0!important}
    #signAssemblyOverlay .sa-grid>*, #autAssemblyOverlay .sa-grid>*{min-width:0!important}
    #signAssemblyOverlay .sa-grid>main{width:100%!important;max-width:none!important}
    #signAssemblyOverlay .sa-grid>aside{width:100%!important;max-width:none!important}
    #signAssemblyOverlay .sa-card, #autAssemblyOverlay .sa-card{min-width:0!important;max-width:100%!important;box-sizing:border-box!important;overflow:hidden}
    #signAssemblyOverlay input,#signAssemblyOverlay select,#signAssemblyOverlay button,
    #autAssemblyOverlay input,#autAssemblyOverlay select,#autAssemblyOverlay button{max-width:100%!important;box-sizing:border-box!important}
    #signAssemblyOverlay .sa-field,#autAssemblyOverlay .sa-field{min-width:0!important}
    #signAssemblyOverlay .sa-field input,#signAssemblyOverlay .sa-field select,
    #autAssemblyOverlay .sa-field input,#autAssemblyOverlay .sa-field select{width:100%!important;min-width:0!important}
    #signAssemblyOverlay .sa-summary{position:sticky!important;top:74px!important;max-height:calc(100vh - 92px)!important;overflow-y:auto!important;overscroll-behavior:contain}
    #autAssemblyOverlay .sa-summary{position:static!important}

    @media (max-width: 899px), (hover:none), (pointer:coarse){
      #signAssemblyOverlay .sa-grid,#autAssemblyOverlay .sa-grid{grid-template-columns:minmax(0,1fr)!important}
      #signAssemblyOverlay aside,#autAssemblyOverlay aside{width:100%!important;max-width:none!important}
      #signAssemblyOverlay .sa-summary,#autAssemblyOverlay .sa-summary{position:static!important;max-height:none!important;overflow:visible!important}
    }
    @media (max-width: 900px){
      #signAssemblyOverlay .sa-shell,#autAssemblyOverlay .sa-shell{padding:12px!important}
      #signAssemblyOverlay .sa-top,#autAssemblyOverlay .sa-top{align-items:flex-start!important;gap:10px!important;padding:4px 0 12px!important}
      #signAssemblyOverlay .sa-top h1,#autAssemblyOverlay .sa-top h1{font-size:22px!important;line-height:1.25!important}
      #signAssemblyOverlay .sa-top .sa-note,#autAssemblyOverlay .sa-top .sa-note{font-size:12px!important}
      #signAssemblyOverlay .sa-card,#autAssemblyOverlay .sa-card{padding:14px!important;border-radius:14px!important}
      #signAssemblyOverlay .sa-card h2,#autAssemblyOverlay .sa-card h2{font-size:17px!important;margin-bottom:12px!important}
      #signAssemblyOverlay .sa-row,#autAssemblyOverlay .sa-row{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:10px!important}
      #signAssemblyOverlay .sa-field label,#autAssemblyOverlay .sa-field label{font-size:12px!important}
      #signAssemblyOverlay input,#signAssemblyOverlay select,#autAssemblyOverlay input,#autAssemblyOverlay select{font-size:16px!important;min-height:44px!important;padding:10px 12px!important}
      #signAssemblyOverlay .sa-actions,#autAssemblyOverlay .sa-actions{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important}
      #signAssemblyOverlay .sa-actions .sa-btn,#autAssemblyOverlay .sa-actions .sa-btn{width:100%!important;min-height:44px!important}
      #signAssemblyOverlay .sa-total,#autAssemblyOverlay .sa-total{font-size:28px!important}
      #signAssemblyOverlay pre,#autAssemblyOverlay pre{font-size:11px!important;overflow-wrap:anywhere!important;white-space:pre-wrap!important}
    }
    @media (max-width: 620px){
      #signAssemblyOverlay .sa-shell,#autAssemblyOverlay .sa-shell{padding:8px!important}
      #signAssemblyOverlay .sa-top,#autAssemblyOverlay .sa-top{position:sticky!important;top:0!important;z-index:20!important;background:#0b0f14!important;padding:8px 2px!important}
      #signAssemblyOverlay .sa-top h1,#autAssemblyOverlay .sa-top h1{font-size:19px!important}
      #signAssemblyOverlay .sa-top .sa-note,#autAssemblyOverlay .sa-top .sa-note{display:none!important}
      #signAssemblyOverlay .sa-top .sa-btn,#autAssemblyOverlay .sa-top .sa-btn{min-width:72px!important;min-height:42px!important;padding:8px 12px!important}
      #signAssemblyOverlay .sa-grid{display:flex!important;flex-direction:column!important;gap:10px!important}
      #signAssemblyOverlay .sa-grid>aside{order:-1!important;width:100%!important}
      #signAssemblyOverlay .sa-grid>main{order:0!important;width:100%!important}
      #signAssemblyOverlay .sa-summary{position:static!important;max-height:none!important;overflow:visible!important}
      #signAssemblyOverlay .sa-card,#autAssemblyOverlay .sa-card{padding:12px!important;border-radius:12px!important}
      #signAssemblyOverlay .sa-row,#autAssemblyOverlay .sa-row{grid-template-columns:minmax(0,1fr)!important;gap:9px!important}
      #signAssemblyOverlay .sa-actions,#autAssemblyOverlay .sa-actions{grid-template-columns:minmax(0,1fr)!important}
      #signAssemblyOverlay .sa-line,#autAssemblyOverlay .sa-line{gap:12px!important;align-items:flex-start!important}
      #signAssemblyOverlay .sa-line span,#autAssemblyOverlay .sa-line span{min-width:0!important;overflow-wrap:anywhere!important}
      #signAssemblyOverlay .sa-line strong,#autAssemblyOverlay .sa-line strong{white-space:nowrap!important}
      #signAssemblyOverlay .sa-suggest,#autAssemblyOverlay .sa-suggest{position:fixed!important;left:8px!important;right:8px!important;top:120px!important;max-height:50vh!important;width:auto!important;z-index:100!important}
    }

    #signAssemblyOverlay .sa-summary-toggle{display:none;width:100%;margin-top:10px}
    #signAssemblyOverlay .sa-mobile-total-bar{display:none}
    @media (min-width:900px) and (hover:hover) and (pointer:fine){
      #signAssemblyOverlay .sa-shell{width:calc(100% - 24px)!important;max-width:1800px!important}
      #signAssemblyOverlay .sa-grid{display:grid!important;grid-template-columns:minmax(0,7fr) minmax(320px,3fr)!important}
      #signAssemblyOverlay .sa-summary{position:sticky!important;top:74px!important;max-height:calc(100vh - 92px)!important;overflow-y:auto!important}
    }
    @media (max-width:620px){
      #signAssemblyOverlay .sa-summary-toggle{display:block!important}
      #signAssemblyOverlay .sa-summary-detail{display:none}
      #signAssemblyOverlay .sa-summary-detail.is-open{display:block}
      #signAssemblyOverlay .sa-summary .sa-actions{grid-template-columns:repeat(2,minmax(0,1fr))!important}
      #signAssemblyOverlay .sa-summary .sa-actions .sa-btn:first-child{grid-column:1/-1}
      #signAssemblyOverlay .sa-mobile-total-bar{position:fixed;left:8px;right:8px;bottom:8px;z-index:10050;display:none;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border:1px solid #39424e;border-radius:12px;background:rgba(21,25,31,.97);box-shadow:0 10px 28px rgba(0,0,0,.35)}
      #signAssemblyOverlay .sa-mobile-total-bar.is-visible{display:flex}
      #signAssemblyOverlay .sa-mobile-total-bar strong{font-size:17px;white-space:nowrap}
      #signAssemblyOverlay .sa-mobile-total-bar .sa-btn{min-height:40px!important;width:auto!important;white-space:nowrap}
      #signAssemblyOverlay .sa-summary{scroll-margin-top:72px}
    }
    /* Stable DOM-order layout: DOM is always main then aside. PC uses columns; mobile reorders visually. */
    @media (min-width:900px) and (hover:hover) and (pointer:fine){
      #signAssemblyOverlay .sa-grid>main{grid-column:1!important;grid-row:1!important;order:0!important}
      #signAssemblyOverlay .sa-grid>aside{grid-column:2!important;grid-row:1!important;order:0!important}
    }
    @media (max-width:899px), (hover:none), (pointer:coarse){
      #signAssemblyOverlay .sa-grid>aside{order:-1!important}
      #signAssemblyOverlay .sa-grid>main{order:0!important}
    }
    /* Customer suggestions must open directly below the search field and never be clipped. */
    #signAssemblyOverlay .sa-customer-card{overflow:visible!important;position:relative!important;z-index:10!important}
    #signAssemblyOverlay .sa-customer-card .sa-row.two{position:relative!important;z-index:20!important}
    #signAssemblyOverlay #saCustomerSuggest{position:absolute!important;left:0!important;right:0!important;top:calc(100% + 6px)!important;width:100%!important;max-height:min(320px,50vh)!important;z-index:10020!important;box-shadow:0 14px 32px rgba(0,0,0,.45)!important}
    #signAssemblyOverlay #saCustomerSuggest button{min-height:48px!important;white-space:normal!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:12px!important}
    @media (max-width:620px){
      #signAssemblyOverlay .sa-grid{display:flex!important;flex-direction:column!important}
      #signAssemblyOverlay .sa-grid>aside{order:-1!important}
      #signAssemblyOverlay .sa-grid>main{order:0!important}
      #signAssemblyOverlay #saCustomerSuggest{position:absolute!important;left:0!important;right:0!important;top:calc(100% + 6px)!important;width:100%!important;max-height:42vh!important;z-index:10020!important}
    }

    @media (max-width: 390px){
      #signAssemblyOverlay .sa-shell,#autAssemblyOverlay .sa-shell{padding:6px!important}
      #signAssemblyOverlay .sa-card,#autAssemblyOverlay .sa-card{padding:10px!important}
      #signAssemblyOverlay .sa-top h1,#autAssemblyOverlay .sa-top h1{font-size:17px!important}
      #signAssemblyOverlay .sa-total,#autAssemblyOverlay .sa-total{font-size:24px!important}
    }
  `;
  document.head.appendChild(style);
}

function saHashOpen(){if(location.hash==='#sign-assembly-calc'){assemblyActivateHomeContext();assemblyAddMobileStyles();saOpen()}}
window.addEventListener('hashchange',saHashOpen);setTimeout(saHashOpen,0);


// =====================================================
// AUT 組み込み自動計算（Excel貼り付け仕様は後続指示で実装）
// =====================================================
const autModulePriceMaster={
  sign:{SL:{S:300,A:315,B:340,C:365,D:395,E:430,F:475},CC:{S:245,A:265,B:280,C:300,D:325,E:350,F:390},CVS:{S:215,A:225,B:235,C:245,D:255,E:265,F:275}},
  building:{SL:{'0.300':375,'0.325':406,'0.350':438,'0.375':469,'0.400':500,'0.425':531,'0.450':563},CC:{'0.300':300,'0.325':325,'0.350':350,'0.375':375,'0.400':400,'0.425':425,'0.450':450},CVS:{'0.300':270,'0.325':293,'0.350':315,'0.375':338,'0.400':360,'0.425':383,'0.450':405}}
};
const autProductLabels={SL:'SL',CC:'CC',CVS:'CVS'};
const autProductCode={SL:'S',CC:'C',CVS:'V'};
const autTempCode={'6500':'60','5000':'50','4000':'40','3500':'35','3000':'30','2700':'27'};
const autShapeCode={square:'S',irregular:'I',circle:'E',trapezoid:'D',triangle:'T',batch:'A'};
let autLastResult=null;
function autNum(id){return Math.max(0,Number(document.getElementById(id)?.value||0))}
function autEsc(v){return saEsc(v)}
function autType(){return document.getElementById('autCalcType')?.value||'sign'}
function autDimCode(v){return String(Math.max(0,Math.floor(Number(v)||0)/100|0)).padStart(3,'0')}
function autPanelCode(){const product=document.getElementById('autProduct')?.value||'CVS',temp=document.getElementById('autTemp')?.value||'5000',shape=document.getElementById('autShape')?.value||'square',w=autDimCode(autNum('autW')),h=autDimCode(autNum('autH')),qty=Math.floor(autNum('autQty'));return `${autProductCode[product]}${autTempCode[temp]}-AR-${autShapeCode[shape]}${w}${h}-${String(qty).padStart(3,'0')}`}
function autRankOptions(){const type=autType(),el=document.getElementById('autRank');if(!el)return;const current=el.value;el.innerHTML=(type==='sign'?['S','A','B','C','D','E','F']:['0.300','0.325','0.350','0.375','0.400','0.425','0.450']).map(x=>`<option value="${x}">${x}</option>`).join('');if([...el.options].some(o=>o.value===current))el.value=current}
function autSuggestCustomer(){const q=String(document.getElementById('autCustomer')?.value||'').normalize('NFKC').toLowerCase().trim(),box=document.getElementById('autCustomerSuggest');if(!box)return;if(!q){box.classList.add('sa-hidden');return}const building=autType()==='building';const src=building?(Array.isArray(buildingPriceCustomers)?buildingPriceCustomers:[]):(Array.isArray(salesPriceCustomers)?salesPriceCustomers:[]);const rows=src.filter(x=>String(x.customer_name||'').normalize('NFKC').toLowerCase().includes(q)).slice(0,12);box.innerHTML=rows.length?rows.map(x=>{const rank=building?Number(x.building_rate).toFixed(3):x.price_rank;return `<button type="button" data-name="${autEsc(x.customer_name)}" data-rank="${autEsc(rank)}">${autEsc(x.customer_name)} <strong>${autEsc(rank)}</strong></button>`}).join(''):'<div class="sa-note" style="padding:10px">価格表の顧客データを読み込んでください。</div>';box.classList.remove('sa-hidden');box.querySelectorAll('button').forEach(b=>b.onclick=()=>{document.getElementById('autCustomer').value=b.dataset.name;document.getElementById('autRank').value=b.dataset.rank;autLinkedCustomer={name:b.dataset.name,type:autType()};assemblyPriceLinkCheckedAt=assemblyPriceLinkCheckedAt||assemblyNowLabel();box.classList.add('sa-hidden');autCalculate();autUpdatePriceLinkStatus()})}
function autModuleBasePrice(){const type=autType(),product=document.getElementById('autProduct')?.value||'CVS',rank=document.getElementById('autRank')?.value||'';return Number(autModulePriceMaster[type]?.[product]?.[rank]||0)}
function autAssemblyUnit(qty,pitch){const table=autType()==='building'?buildingAssemblyUnitTables.lanternSingle:signAssemblyUnitTables.lanternSingle;const lookup=saRoundDownLedQty(qty),row=table.find(x=>lookup>=x[0]&&lookup<=x[1]),pi=signAssemblyPitchBands.findIndex(x=>pitch>=x[0]&&pitch<=x[1]);return row&&pi>=0?row[2][pi]:0}
function autOpen(){assemblyActivateHomeContext();saAddStyles();assemblyAddMobileStyles();if(document.getElementById('autAssemblyOverlay'))return;const prefs=Object.keys(signAssemblyShippingMaster.prefectures).map(x=>`<option value="${autEsc(x)}" ${x==='東京都'?'selected':''}>${autEsc(x)}</option>`).join('');const o=document.createElement('div');o.id='autAssemblyOverlay';o.innerHTML=`<div class="sa-shell"><header class="sa-top"><div><h1>AUT 組み込み自動計算</h1><div class="sa-note">AUT（サイン）／AUT（建築）対応。専用LEDパネルの完成品価格を計算します。</div></div><button class="sa-btn secondary" id="autClose">閉じる</button></header><div class="sa-grid"><main>
<section class="sa-card"><h2>顧客・モジュール</h2><div class="sa-row"><div class="sa-field"><label>区分</label><select id="autCalcType"><option value="sign">AUT（サイン）</option><option value="building">AUT（建築）</option></select></div><div class="sa-field sa-relative"><label>顧客名</label><input id="autCustomer" autocomplete="off"><div id="autCustomerSuggest" class="sa-suggest sa-hidden"></div></div><div class="sa-field"><label id="autRankLabel">ランク</label><select id="autRank"></select></div><div class="sa-field"><label>モジュール</label><select id="autProduct"><option value="CC">CC</option><option value="CVS" selected>CVS</option><option value="SL">SL</option></select></div></div><div class="assembly-link-status"><div id="autPriceLinkStatus"></div><button type="button" class="sa-btn secondary assembly-recheck-btn" id="autRecheckPrice">価格表を再確認</button></div><div class="sa-row"><div class="sa-field"><label>色温度</label><select id="autTemp"><option value="6500">6500K</option><option value="5000" selected>5000K</option><option value="4000">4000K</option><option value="3500">3500K</option><option value="3000">3000K</option><option value="2700">2700K</option></select></div><div class="sa-field"><label>モジュール実数</label><input id="autQty" type="number" min="0" inputmode="numeric"></div><div class="sa-field"><label>パネル数量</label><input id="autPanelQty" type="number" min="1" value="1" inputmode="numeric"></div><div class="sa-field"><label>ピッチ（mm）</label><input id="autPitch" type="number" min="0" inputmode="numeric"></div><div class="sa-field"><label>折り返し数</label><input id="autFoldQty" type="number" min="0" inputmode="numeric"></div></div></section>
<section class="sa-card"><h2>専用LEDパネル品番</h2><div class="sa-row"><div class="sa-field"><label>形状</label><select id="autShape"><option value="square">四角形</option><option value="irregular">異形</option><option value="circle">円</option><option value="trapezoid">台形</option><option value="triangle">三角形</option><option value="batch">一括</option></select></div><div class="sa-field"><label>W（mm）</label><input id="autW" type="number" min="0"></div><div class="sa-field"><label>H（mm）</label><input id="autH" type="number" min="0"></div><div class="sa-field"><label>自動生成品番</label><input id="autPanelCode" readonly></div></div></section>
<section class="sa-card"><h2>アルミ複合板・加工</h2><div class="sa-row">${Object.entries(signAssemblyPanelMaster).map(([k,v])=>`<div class="sa-field"><label>${v.label} ${v.size}</label><input id="autBoard_${k}" type="number" min="0" value="0"></div>`).join('')}</div><div class="sa-row"><div class="sa-field"><label>電源方式</label><select id="autPowerMode"><option value="100v">100V</option><option value="power">電源あり</option></select></div><div class="sa-field" id="aut100vWrap"><label>100V：パネル枚数</label><input id="aut100vPanels" type="number" min="0"></div><div class="sa-field sa-hidden" id="autPowerWrap"><label>電源台数</label><input id="autPowerQty" type="number" min="0"></div><div class="sa-field"><label>電源ケーブル穴</label><input id="autCableHoles" type="number" min="0"></div></div><div class="sa-row"><div class="sa-field"><label>アンカー穴</label><input id="autAnchorHoles" type="number" min="0"></div><div class="sa-field sa-hidden" id="autPanelBuildWrap"><label>簡易電源盤</label><select id="autPanelBuild"><option value="yes">作成する</option><option value="no">作成しない</option></select></div></div></section>
<section class="sa-card"><h2>梱包・送料</h2><div class="sa-row"><div class="sa-field"><label>配送先</label><select id="autPref">${prefs}</select></div><div class="sa-field"><label>任意送料原価</label><input id="autManualFreight" type="number" min="0"></div></div></section>
</main><aside><section class="sa-card sa-summary"><h2>概算結果</h2><div id="autCustomerResult" class="sa-note"></div><div id="autGrand" class="sa-total">0円</div><div id="autBreakdown" class="sa-breakdown"></div><div class="sa-actions"><button class="sa-btn primary" id="autCopyResult">結果コピー</button><button class="sa-btn secondary" id="autCopyExcel">Excel貼り付け</button></div><pre id="autTrace" class="sa-note" style="white-space:pre-wrap;margin-top:14px"></pre></section></aside></div></div>`;document.body.appendChild(o);autRankOptions();autBind();autCalculate()}
function autClose(){document.getElementById('autAssemblyOverlay')?.remove();if(location.hash==='#aut-assembly-calc'){history.replaceState(null,'',location.pathname+location.search+'#tools');assemblyActivateHomeContext()}}
function autTogglePower(){const power=document.getElementById('autPowerMode')?.value==='power';document.getElementById('aut100vWrap')?.classList.toggle('sa-hidden',power);document.getElementById('autPowerWrap')?.classList.toggle('sa-hidden',!power);document.getElementById('autPanelBuildWrap')?.classList.toggle('sa-hidden',!power)}
function autBind(){document.getElementById('autClose').onclick=autClose;document.getElementById('autRecheckPrice').onclick=()=>assemblyRecheckPriceLink('aut');document.getElementById('autAssemblyOverlay').addEventListener('input',e=>{if(e.target.id==='autCustomer'){autLinkedCustomer=null;autSuggestCustomer();autUpdatePriceLinkStatus()}if(e.target.id==='autRank')autLinkedCustomer=null;autCalculate();autUpdatePriceLinkStatus()});document.getElementById('autAssemblyOverlay').addEventListener('change',e=>{if(e.target.id==='autCalcType'){autLinkedCustomer=null;document.getElementById('autCustomer').value='';autRankOptions();document.getElementById('autRankLabel').textContent=autType()==='building'?'掛け率':'ランク';autUpdatePriceLinkStatus()}autTogglePower();autCalculate()});document.getElementById('autCopyResult').onclick=e=>saCopy(autShareText(),'AUT概算結果',e.currentTarget);document.getElementById('autCopyExcel').onclick=e=>saCopy(autExcelText(),'Excel貼り付け用',e.currentTarget);autTogglePower();autUpdatePriceLinkStatus()}
function autCalculate(){if(!document.getElementById('autAssemblyOverlay'))return;const qty=Math.floor(autNum('autQty')),panelQty=Math.max(1,Math.floor(autNum('autPanelQty')||1)),pitch=autNum('autPitch'),foldQty=Math.floor(autNum('autFoldQty')),base=autModuleBasePrice(),moduleUnit=base+55,moduleTotal=Math.ceil(moduleUnit*qty),pricingQty=saRoundDownLedQty(qty),assemblyUnit=autAssemblyUnit(qty,pitch),assemblyWork=Math.ceil(qty*assemblyUnit),foldFee=foldQty*400;let material=0,perimeter=0,boardCount=0,packFee=0,weight=0;Object.entries(signAssemblyPanelMaster).forEach(([k,v])=>{const q=Math.floor(autNum('autBoard_'+k));boardCount+=q;material+=q*v.material;perimeter+=q*v.perimeter;const sp=saPackSplit(q);[2,3,4].forEach(n=>{if(sp[n]){packFee+=sp[n]*v.pack[n];weight+=sp[n]*v.weight[n]}})});const outerCut=Math.ceil(perimeter*2*0.21),marking=qty*7,cableHoles=autNum('autCableHoles')*30,anchor=autNum('autAnchorHoles')*100,residue=boardCount*200,inspect=boardCount*300,powerMode=document.getElementById('autPowerMode').value,powerQty=Math.floor(autNum('autPowerQty')),hundredQty=Math.floor(autNum('aut100vPanels')),cordQty=powerMode==='100v'?hundredQty:powerQty,cord=cordQty*560,assembly=Math.ceil(material+outerCut+marking+cableHoles+anchor+residue+assemblyWork+foldFee+inspect+cord);const panelUnit=Math.ceil(moduleTotal+assembly),panelTotal=Math.ceil(panelUnit*panelQty);const panelAlloc=saPanelAllocation(powerMode==='power'?powerQty:0),master=saLoadMaster().single;let panelFee=0;if(powerMode==='power'&&document.getElementById('autPanelBuild').value==='yes')panelFee=panelAlloc[1]*master.panel1+panelAlloc[2]*master.panel2+panelAlloc[3]*master.panel3+panelAlloc[4]*master.panel4;const pref=document.getElementById('autPref').value,dist=signAssemblyShippingMaster.prefectures[pref],weightBand=signAssemblyShippingMaster.weights.find(x=>x>=weight),distBand=signAssemblyShippingMaster.distances.find(x=>x>=dist);let freightCost=0,freightSell=0;if(weight>0&&weightBand&&distBand&&signAssemblyShippingMaster.matrix[String(weightBand)]?.[String(distBand)]!=null)freightCost=signAssemblyShippingMaster.matrix[String(weightBand)][String(distBand)];else freightCost=autNum('autManualFreight');if(freightCost)freightSell=Math.ceil(freightCost/0.8);const packShipping=Math.ceil(packFee+freightSell),grand=panelTotal+panelFee+packShipping,code=autPanelCode();document.getElementById('autPanelCode').value=code;autLastResult={qty,panelQty,pitch,product:document.getElementById('autProduct').value,temp:document.getElementById('autTemp').value,rank:document.getElementById('autRank').value,base,moduleUnit,moduleTotal,pricingQty,assemblyUnit,assemblyWork,foldQty,foldFee,assembly,panelUnit,panelTotal,panelFee,packShipping,grand,code};document.getElementById('autGrand').textContent=saYen(grand)+'円';document.getElementById('autCustomerResult').textContent=[autType()==='building'?'AUT（建築）':'AUT（サイン）',document.getElementById('autCustomer').value,document.getElementById('autRank').value].filter(Boolean).join(' / ');document.getElementById('autBreakdown').innerHTML=`<div class="sa-line"><span>モジュール（内部）</span><strong>${saYen(moduleTotal)}円</strong></div><div class="sa-line"><span>組み込み関連（内部）</span><strong>${saYen(assembly)}円</strong></div><div class="sa-line"><span>専用LEDパネル単価</span><strong>${saYen(panelUnit)}円</strong></div><div class="sa-line"><span>専用LEDパネル × ${panelQty}</span><strong>${saYen(panelTotal)}円</strong></div>${panelFee?`<div class="sa-line"><span>簡易電源盤 <small style="font-size:.82em;font-weight:600;color:var(--muted);white-space:normal">（${[4,3,2,1].filter(n=>panelAlloc[n]>0).map(n=>`${n}台用×${panelAlloc[n]}セット`).join('＋')}）</small></span><strong>${saYen(panelFee)}円</strong></div>`:''}<div class="sa-line"><span>梱包送料</span><strong>${saYen(packShipping)}円</strong></div>`;document.getElementById('autTrace').textContent=`品番：${code}\nモジュール：参照単価${base}円＋半田・部材55円＝${moduleUnit}円 × 実数${qty}＝${saYen(moduleTotal)}円\n組み込み：単価参照数量${pricingQty}個／ピッチ${pitch}mm／単価${assemblyUnit}円 × 実数${qty}＝${saYen(assemblyWork)}円\n折り返し：${foldQty}箇所 × 400円＝${saYen(foldFee)}円\n専用LEDパネル単価：${saYen(moduleTotal)}円＋${saYen(assembly)}円＝${saYen(panelUnit)}円\n専用LEDパネル金額：${saYen(panelUnit)}円 × ${panelQty}＝${saYen(panelTotal)}円`;autUpdatePriceLinkStatus()}

function autShareText(){if(!autLastResult)return'';const r=autLastResult,c=document.getElementById('autCustomer').value.trim();return ['【AUT組み込み概算見積】',c?`${c} 御中`:'','',`専用LEDパネル`,`品番：${r.code}`,`単価 ${saYen(r.panelUnit)}円 × ${r.panelQty} ＝ ${saYen(r.panelTotal)}円`,r.panelFee?`簡易電源盤：${saYen(r.panelFee)}円`:'',`梱包送料：${saYen(r.packShipping)}円`,`合計：${saYen(r.grand)}円`].filter(Boolean).join('\n')}
function autExcelRows(){if(!autLastResult)return[];const r=autLastResult,clean=v=>String(v??'').replace(/[\r\n,]/g,' ').trim(),rows=[[clean('専用LEDパネル'),clean(r.code),String(r.panelQty)]];if(r.panelFee)rows.push(['AWS組込関連【一式】','AWS-BOX-SET-01','1']);if(r.packShipping)rows.push(['AWS組込関連【一式】','AWS-EXP-SET-01','1']);return rows}
function autExcelText(){const rows=autExcelRows();return rows.length?'*****,'+rows.flat().join(','):''}

function autHashOpen(){if(location.hash==='#aut-assembly-calc'){assemblyActivateHomeContext();assemblyAddMobileStyles();autOpen()}}
window.addEventListener('hashchange',autHashOpen);setTimeout(autHashOpen,0);
