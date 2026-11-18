// ===== DATA =====
const WILAYAS = [
  {code:"01",name:"أدرار"},{code:"02",name:"الشلف"},{code:"03",name:"الأغواط"},{code:"04",name:"أم البواقي"},
  {code:"05",name:"باتنة"},{code:"06",name:"بجاية"},{code:"07",name:"بسكرة"},{code:"08",name:"بشار"},
  {code:"09",name:"البليدة"},{code:"10",name:"البويرة"},{code:"11",name:"تمنراست"},{code:"12",name:"تبسة"},
  {code:"13",name:"تلمسان"},{code:"14",name:"تيارت"},{code:"15",name:"تيزي وزو"},{code:"16",name:"الجزائر"},
  {code:"17",name:"الجلفة"},{code:"18",name:"جيجل"},{code:"19",name:"سطيف"},{code:"20",name:"سعيدة"},
  {code:"21",name:"سكيكدة"},{code:"22",name:"سيدي بلعباس"},{code:"23",name:"عنابة"},{code:"24",name:"قالمة"},
  {code:"25",name:"قسنطينة"},{code:"26",name:"المدية"},{code:"27",name:"مستغانم"},{code:"28",name:"المسيلة"},
  {code:"29",name:"معسكر"},{code:"30",name:"ورقلة"},{code:"31",name:"وهران"},{code:"32",name:"البيض"},
  {code:"33",name:"إليزي"},{code:"34",name:"برج بوعريريج"},{code:"35",name:"بومرداس"},{code:"36",name:"الطارف"},
  {code:"37",name:"تندوف"},{code:"38",name:"تيسمسيلت"},{code:"39",name:"الوادي"},{code:"40",name:"خنشلة"},
  {code:"41",name:"سوق أهراس"},{code:"42",name:"تيبازة"},{code:"43",name:"ميلة"},{code:"44",name:"عين الدفلى"},
  {code:"45",name:"النعامة"},{code:"46",name:"عين تموشنت"},{code:"47",name:"غرداية"},{code:"48",name:"غليزان"},
  {code:"49",name:"المغير"},{code:"50",name:"المنيعة"},{code:"51",name:"أولاد جلال"},{code:"52",name:"برج باجي مختار"},
  {code:"53",name:"بني عباس"},{code:"54",name:"تيميمون"},{code:"55",name:"تقرت"},{code:"56",name:"جانت"},
  {code:"57",name:"عين صالح"},{code:"58",name:"عين قزام"},{code:"59",name:"آفلو"},{code:"60",name:"بريكة"},
  {code:"61",name:"القنطرة"},{code:"62",name:"بئر العاتر"},{code:"63",name:"العريشة"},{code:"64",name:"قصر الشلالة"},
  {code:"65",name:"عين وسارة"},{code:"66",name:"مسعد"},{code:"67",name:"قصر البخاري"},{code:"68",name:"بوسعادة"},
  {code:"69",name:"الأبيض سيدي الشيخ"}
];

const COMMUNES_BY_WILAYA = {
  "01":["أدرار", "أقبلي", "أولاد أحمد تيمى", "أولف", "السبع", "ان زغمير", "بودة", "تأماست", "تامنطيت", "تسابيت", "تــيـــت", "تيمقتن", "رڨان", "زاوية كنتة", "سالى", "فنوغيل"],
  "02":["أبو الحسن", "أم الذروع", "أولاد بن عبد القادر", "أولاد عباس", "أولاد فارس", "الأبيض مجاجة", "الحجاج", "الزبوجة", "الشطية", "الشلف", "الظهرة", "الكريمية", "المرصى", "الهرنفة", "بريرة", "بنايرية", "بني بوعتاب", "بني حواء", "بني راشد", "بوزغاية", "بوقدير", "تاجنة", "تاوقريت", "تلعصة", "تنس", "حرشون", "سنجاس", "سيدي عبد الرحمان", "سيدي عكاشة", "صبحة", "عين مران", "مصدق", "واد الفضة", "واد سلي", "واد ڨوسين"],
  "03":["الأغواط", "الحاج المشري", "الخنق", "العسافية", "الهوارية", "بن ناصر بن شهرة", "تاجرونة", "تاجموت", "تاويالة", "حاسي الرمل", "حاسي دلاعة", "سيدي مخلوف", "عــيــن مـــاضــي", "قصر الحيران", "وادي مزي"],
  "04":["أم البواقي", "أولاد حملة", "أولاد زواي", "أولاد ڨاسم", "البلالة", "الجازيـــــــة", "الحرملية", "الراحية", "الزرڨ", "الضلعة", "العامرية", "الفجوج بوغرارة سعودى", "بئر الشهداء", "بحير الشرڨي", "بريش", "سوق نعمان", "سيقوس", "عين البيضاء", "عين الديس", "عين الزيتون", "عين بابوش", "عين فكرون", "عين كرشة", "عين مليلة", "فكرينة", "قصر صباحي", "مسكيانة", "هنشير تومغني", "وادي نيني"],
  "05":["أمدوكال", "أولاد سلام", "أولاد سي سليمان", "أولاد عوف", "أولاد فاضل", "إينوغيسن", "اريس", "الاربعاء", "الجزار", "الحاسي", "الرحبات", "الشمرة", "القصبات", "ايشمول", "باتنة", "بــومقر", "بنى فضالة الحقانية", "بوزينة", "بولهيلات", "بومية", "تازولت", "تاكسلانت", "تالخمت", "تكوت", "تيغانمين", "تيغرغار", "تيلاطو", "تيمقاد", "حيدوسة", "رأس العيون", "زانة البيضاء", "سريانة", "سفيان", "شير", "عزيل عبد القادر", "عين التوتة", "عين جاسر", "عين ياقوت", "عيون العصافير", "غسيرة", "فسديس", "فم الطوب", "قصر بلازمة", "قيقبة", "كيمل", "لازرو", "لمسان", "مروانة", "معافة", "منعة", "نية العابد", "نڨاوس", "واد الشعبة", "واد الماء", "وادي الطاقة"],
  "06":["آدكار", "آيت أرزين", "آيت سماعيل", "آيث جليل", "أقبو", "أوزلاقن", "أوقاس", "إغرم", "إغيل على", "افناين الماثن", "اكفادو", "القصر", "امالو", "اميزور", "بجاية", "برباشة", "بنى كسيلة", "بنى مليكش", "بني معوش", "بوجليل", "بوحمزة", "بوخليفة", "تازمالت", "تاسقريوت", "تامريجت", "تامقرة", "تاوريرت اغيل", "توجة", "تيزى نبربر", "تيشي", "تيفرة", "تيمزريت", "تينبذار", "ثالة حمزة", "خراطة", "درقينة", "ذراع القايد", "سمعون", "سوق أوفلة", "سيدي عياد", "سيدي عيش", "شلاطة", "شميني", "صدوق", "طيبان", "فرعون", "كنديرة", "لفلاى", "مسيسنة", "ملبو", "وادي غير", "ﺳﻮق اﻻﺛﻨﻴﻦ"],
  "07":["أورلال", "أولاد رحمة", "أوماش", "الحاجب", "الحوش", "الغروس", "الفيض", "برج بن عزوز", "بسكرة", "بوشقرون", "جمورة", "خنڨة سيدي ناجي", "زريبة الوادي", "سيدي عقبة", "شتمة", "طولقة", "عين الناقة", "فوغالة", "لشانة", "لواء", "مخادمة", "مزيرعة", "مشونش", "مليلي"],
  "08":["العبادلة", "القنادسة", "بشار", "بني ونيف", "بني يخلف", "بوكايس", "تامترت", "تبلبالة", "تــــاغـيــث", "عرق فراج", "لحمر", "مريجة", "مشرع ھوارى بومدين", "موغل"],
  "09":["أولاد سلامة", "الاربعاء", "البليدة‎", "الشبلي", "الشريعة", "الشفة", "العفرون", "اولاد يعيش", "بني تامو", "بني خليل", "بني مراد", "بوعرفة", "بوعينان", "بوفاريك", "بوڨرة", "جبابرة", "حمام ملوان", "صوحان", "صومعة", "عين الرمانة", "مفتاح", "موزاية", "واد العلايڨ", "واد جر", "ڨرواو"],
  "10":["آث منصور", "آيت لعزيز", "أعمر", "أغبالو", "أولاد راشد", "أھل القصر", "احنيف", "الأخضرية", "الأصنام", "البويرة", "الجباحية", "الحاكمية", "الحجرة الزرقاء", "الخبوزية", "الدشمية", "الروراوة", "الشرفاء", "الصهاريج", "العجيبة", "المعمورة", "المقراني", "الھاشمية", "بئر غبالو", "برج أوخريص", "بشلول", "بودربالة", "بوكرام", "تاغزوت", "تاڨديت", "حيزر", "ديــرة", "ريدان", "زبربر", "سور الغزلان", "سوق الخميس", "عين الترك", "عين الحجر", "عين العلوي", "عين بسام", "قادرية", "قرومة", "مسدور", "مشدا الله", "معالة", "وادى البردي"],
  "11":["أبلسة", "إدلس", "ان أمقل", "تاظروك", "تمنراست", "تين زاوتين"],
  "12":["أم على", "الحمامات", "الحويجبات", "العقلة", "العوينات", "الــشــريــعـة", "الكويف", "الماء الأبيض", "المريج", "المزرعة", "الونزة", "بجن", "بــئــر مــقـدم", "بكارية", "بوخضرة", "بولحاف الدير", "بٔير الذھب", "تبسة", "ثليجان", "سطح قنطيس", "صفصاف الوسرة", "عين الزرقاء", "قوريقر", "مرسط"],
  "13":["أولاد رياح", "أولاد ميمون", "البويھي", "الحناية", "الرمشي", "السواني", "العزايل", "الغزوات", "الفحول", "المنصورة", "باب العسة", "برج عريمة", "بن سكران", "بنى سنوس", "بني بهدل", "بني بوسعيد", "بني مستار", "بوحلو", "تلمسان", "تونان", "تيانت", "تيرني بني هديل", "جبالة", "حمام بوغرارة", "دار يغمراسن", "زناتة", "سبدو", "سبعة شيوخ", "سوق الثلاثاء", "سوق الخميس", "سيدي الجيلالي", "سيدي العبدلي", "سيدي مجاهد", "شتوان", "صبرة", "عمير", "عين الكبيرة", "عين تالوت", "عين غرابة", "عين فتاح", "عين فزّة", "عين نحالة", "عين يوسف", "فلاوسن", "مرسى بن مھيدي", "مسيردة الفواقة", "مغنية", "ندرومة", "هنين", "وادى الشولى"],
  "14":["السبت", "الفايجة", "المھدية", "اولاد جراد", "بوشقيف", "تاخمرت", "تاقدمت", "توسنينة", "تيارت‎", "تيدة", "جيلالي بن عمار", "دحموني", "رحوية", "زمالة الأمير عبد القادر", "سبعين", "سوقر", "سيدي بختي", "سيدي حسني", "سيدي عبدالرحمان", "سيدي علي ملال", "شحيمة", "عين الحديد", "عين الذهب", "عين زاريت", "عين كرمس", "فرندة", "قرطوفة", "مادنة", "مدروسة", "مدريسة", "مشرع الصفاء", "مغيلة", "ملاكو", "نعيمة", "وادى ليلى"],
  "15":["آجر", "آقنى قغران", "آيت أومالو", "آيت بومھدى", "آيت شفعة", "آيت عيسى ميمون", "أبودرارن", "أبي يوسف", "أزفون", "أسي يوسف", "أغريب", "أقبيل", "أقرو", "أيت أقواشة", "أيت بوعدو", "أيت تودرت", "أيت خليلي", "أيت زمنزر", "أيت محمود", "أيت يحي", "أيت يحي موسى", "إرجن", "إفليسن", "إليلتن", "إمسوحال", "إيفرحونن", "إيلولة أمالو", "اعكورن", "الأربعاء نايت إيراثن", "المعاتقة", "ايفيغاء", "بنى زيكى", "بني دوالة", "بني عيسي", "بني يني", "بوجيمة", "بوزقن", "بوغني", "بونوح", "تادمايت", "ترمتين", "تقزيرت", "تيزي راشد", "تيزي غنيف", "تيزي نثلاثة", "تيزي وزو", "تيميزارت", "ذراع الميزان", "ذراع بن خدة", "زكري", "سوق الإثنين", "سيدي نعمان", "صوامع", "عزازقة", "عين الحمام", "عين الزاوية", "فريحة", "فريقات", "ماكودة", "مزرانة", "مشطراس", "مقلع", "مكيرة", "واسيف", "واضية", "واقنون", "يطافن"],
  "16":["أولاد الشبل", "أولاد فايت", "الآبيار", "الجزائر الوسطى", "الحراش", "الحمامات", "الدار البيضاء", "الرايس حميدو", "الرغاية", "السحاولة", "العاشور", "القبة", "القصبة", "الكليتوس", "المحمدية", "المدنية", "المرادية", "المرسى", "المقرية", "بئر توتة", "بئر خادم", "باب الزوار", "باب الواد", "بابا حسن", "باش جراح", "براقي", "برج البحري", "برج الكيفان", "بلوزداد", "بن عكنون", "بني مسوس", "بوروبة", "بوزريعة", "بولوغين", "بير مراد رايس", "تسالة المرجة", "جسر قسنطينة", "حسين داي", "حيدرة", "خرايسية", "دالي ابراهيم", "درارية", "دويرة", "رحمانية", "رويبة", "زرالدة", "سطاوالي", "سويدانية", "سيدي امحمد", "سيدي موسى", "شراقة", "عين بنيان", "عين طاية", "محالمة", "هراوة", "وادي سمار", "وادي قريش"],
  "17":["الإدريسية", "الجلفة", "الخميس", "الدويس", "الزعفران", "الشارف", "القديد", "المليليحة", "ام العظام", "بن يعقوب", "بويرة الأحداب", "تعضميت", "حاسي العش", "حاسي بحبح", "دار الشيوخ", "زكار", "سيدي بايزيد", "عمورة", "عين الابل", "عين الشهداء", "عين معبد", "فيض البطمة", "قتارة", "مجبرة"],
  "18":["أولاد عسكر", "إراڨن", "الامير عبد القادر", "الجمعة بني حبيبي", "السطارة", "الشحنة", "الشقفة", "الطاهير", "العنصر", "العوانة", "القنار", "الميلية", "اولاد يحيى", "برج الطهر", "بني بلعيد", "بودريعة بن ياجيس", "بوراوي بلهادف", "تاكسنة", "جيجل", "جيملة", "زيامة منصورية", "سلمى بن زيادة", "سيدي عبد العزيز", "سيدي معروف", "غبالة", "قاوس", "وجانة", "ولاد رابح"],
  "19":["آيت تيزي", "آيت نوال مزادة", "أولاد تبــان", "أولاد سي أحمد", "أولاد صـابر", "أولاد عدوان", "إيث موحلي", "الأورسية", "البلاعة", "التلة", "الدهامشة", "الرصفة", "العلمة", "القلتة الزرقاء", "الولجـة", "بئر العرش", "بئر حدادة", "بابور", "بازر الصخرة", "بني حسين", "بني شبانة", "بني عزيز", "بني فودة", "بني ورتيلان", "بوسلام", "بوطالب", "بوعنداس", "بوقاعـة", "بيضاء برج", "تاشودة", "تالة إيفاسن", "تيزي نبشار", "جميلـة", "حربيل", "حــامة", "حمام قرقور", "حمــام السخنة", "ذراع قبيلة", "سرج الغول", "سطيف‎", "صـالح باي", "طاية", "عموشة", "عين أرنـات", "عين أزال", "عين الروى", "عين السبت", "عين الكبيرة", "عين عباسـة", "عين لحجـر", "عين لڨراج", "عين ولمان", "قجــال", "قصرالأبطال", "قلال", "مزلوق", "معـاويـة", "موكلان", "واد البارد", "ڨنزات"],
  "20":["أولاد ابراھيم", "أولاد خالد", "العين السخونة", "تيرسين", "حساسنة", "دوى ثابت", "سعيدة", "سيدي أحمد", "سيدي بوبكر", "عين الحجر", "عين السلطان", "معمورة", "موالي العربي", "هونت", "يدي عمر", "يوب"],
  "21":["أم الطوب", "أولاد حبابة", "أولاد عطية", "الحدايق", "الحروش", "الزيتونة", "السبت", "الشرايع", "الغدير", "القل", "المرسى", "الولجة بو البلوط", "بكوش لخضر", "بن عزوز", "بنى زيد", "بني بشير", "بني والبان", "بوشطاطة", "بين الويدان", "تمالوس", "جندل", "حمادي كرومة", "خنق مايوم", "رمضان جمال", "زردازة", "سكيكدة", "سيدي مزغيش", "صالح بوالشعور", "عزابة", "عين بوزيان", "عين زويت", "عين شرشار", "عين قشرة", "فلفلة", "قنواع", "كركرة", "مجاز الدشيش", "وادي الزهور"],
  "22":["ابن باديس", "الحصيبة", "الظاية", "العمارنة", "بئر الحمام", "بدر الدين المقراني", "بلعربي", "بن عشيبة شلية", "بوجبهة البرج", "بوخنفيس", "تاودموت", "تسالة", "تغاليمت", "تفسور", "تلاغ", "تلموني", "تنيرة", "حاسي دحو", "حاسي زهانة", "رأس الماء", "رجم دموش", "زروالة", "سفيزف", "سهالة الثورة", "سيدي ابراهيم", "سيدي بلعباس", "سيدي حمادوش", "سيدي خالد", "سيدي دحو", "سيدي شعيب", "سيدي علي بن يوب", "سيدي علي بوسيدي", "سيدي لحسن", "سيدي يعقوب", "شطوان بلايلة", "طابية", "عين البرد", "عين التريد", "عين تندامين", "عين عدان", "عين قادة", "لمطار", "مرحوم", "مرين", "مزاورو", "مسيد", "مصطفى بن ابراهيم", "مكدرة", "مولاي سليسن", "واد السبع", "واد تاوريرة", "واد سفيون"],
  "23":["البوني", "التريعات", "الحجار", "الشرفة", "العلمة", "برحال", "سرايدي", "سيدي عمار", "شطايبي", "عنابة", "عين الباردة", "وادي العنب"],
  "24":["الدهوارة", "الركنية", "الفجوج", "برج صباط", "بلخير", "بن جراح", "بني مزلين", "بوحشانة", "بوحمدان", "بوشقوف", "بوعاتي محمود", "بومهرة أحمد", "تاملوكة", "جبالة لخميسي", "حمام النبايل", "حمام مسخوطين", "خزارة", "راس العقبة", "سلاوة عنونة", "عين العربى", "عين بن بيضاء", "عين رقادة", "عين صندل", "عين مخلوف", "قالمة", "قلعة بوصبع", "مجاز الصفاء", "مجاز عمار", "نشماية", "هواري بومدين", "وادي الزناتي", "وادي الشحم", "وادي فراغة", "ھيليوبوليس"],
  "25":["أولاد رحمون", "إبن باديس", "ابن زياد", "الخروب", "بني حميدان", "حامة بوزيان", "ديدوش مراد", "زيغود يوسف", "عين سمارة", "عين عبيد", "قسنطينة", "مسعود بوجريو"],
  "26":["أم الجليل", "أولاد إبراهيم", "أولاد بوعشرة", "أولاد دايد", "أولاد معرف", "أولاد هلال", "البرواڨية", "الحمدانية", "الربعية", "الزبيرية", "السواڨي", "العزيزية", "العوينات", "العيساوية", "القلب الكبير", "الكاف الأخضر", "المدية", "المفاتحة", "بئر بن العابد", "بعطة", "بن شكاو", "بني سليمان", "بوسكن", "بوشراحيل", "بوعيش", "بوعيشون", "بوغار", "بوغزول", "تابلاط", "تافراوت", "تمزڨيدة", "تيزي المهدي", "ثلاثة الدوائر", "جواب", "حناشة", "خمس جوامع", "دراڨ", "ذراع السمار", "سدراية", "سغوان", "سى المحجوب", "سيدي الربيع", "سيدي دامد", "سيدي زهار", "سيدي زيان", "سيدي نعمان", "شلالة العذاورة", "شنيڨل", "عوامري", "عين القصير", "عين بوسيف", "فج الحوضين", "مجبر", "مزغنة", "مغراوة", "ميهوب", "وادي حربيل", "وزرة"],
  "27":["أوالد بوغالم", "أولاد مع اللّه", "الحسيان", "بوقيراط", "تزقايت", "حاسي مماش", "حجاج", "خضراء", "خير الدين", "ستيدية", "سوافلية", "سيدي بلعاتر", "سيدي علي", "سيدي لخضر", "سيرات", "صفصاف", "صور", "صيادة", "طواھيرية", "عبد المالك رمضان", "عشعاشة", "عين بودينار", "عين تادلس", "عين سيدي شريف", "عين نويسي", "فرناكة", "ماسرة", "مزغران", "مستغانم", "منصورة", "نقمارية", "واد الخير"],
  "28":["أولاد دراج", "أولاد سليمان", "أولاد منصور", "الحوامد", "الزرزور", "الصوامع", "المسيلة", "المعاضيد", "الهامل", "اولاد عدي لقبالة", "برهوم", "بن الزوه", "بنى يلمان", "بير الفضة", "تارمونت", "خبانة", "سيدي عيسى", "سيدي محمد", "سيدي ھجرس", "شلال", "عين الخضراء", "عين فارس", "مجدل", "محمد بوضياف", "مسيف", "مطارفة", "منعة", "ولتام", "ونوغة"],
  "29":["البرج", "الشرفة", "العلايمية", "الغمري", "القعدة", "القيطنة", "الكرط", "المامونية", "المحمدية", "المناور", "الهاشم", "بنيان", "بوحنيفية", "بوهني", "تيزي", "تيغنيف", "حسين", "خلوية", "رأس العين عميروش", "زلماطة", "زھانة", "سجرارة", "سحايلية", "سيدي بوسعيد", "سيدي عبد الجبار", "سيدي عبد المومن", "سيدي قادة", "سيڨ", "عقاز", "عوف", "عين فارس", "عين فراح", "عين فراس", "عين فكان", "غروس", "غريس", "فرقيق", "فروحة", "ماقضة", "ماوسة", "مطمور", "مـعـسـكـر", "مقطع الدوز", "نسموط", "واد الأبطال", "واد التاغية", "ڤرجوم"],
  "30":["البرمة", "الرويسات", "بليدة عامر", "حاسي بن عبد ﷲ", "حاسي مسعود", "سيدي خويلد", "عين البيضاء", "نقوسة", "ورڨلة"],
  "31":["أرزيو", "ألبْرَيَ", "السانية", "العنصر", "الكرمة", "المرسى الكبير", "بئر الجير", "بن فريحة", "بوتليليس", "بوسفر", "بوفاطيس", "حاسي بن عقبة", "حاسي مفسوخ", "حاسيْ بُونِيف", "سيدي الشحمي", "سيدي بن يبقى", "طفراوي", "عين البية", "عين الكرمة", "عيْن التُرْكْ", "مسرغين", "مَرس ألحَجَاج", "وادى تليلات", "وهران", "ڨديل", "ﺑﻃﻴﻭة"],
  "32":["البنود", "الخيثر", "الشقيق", "الـبـيـض", "الكاف الاحمر", "بريزينة", "بوعلام", "بوقطب", "توسمولين", "روقاصة", "ستيتين", "سيدي سليمان", "سيدي طيفور", "سيدي عامر", "غسول", "كراكدة"],
  "33":["إلـيـزي", "إن أميناس", "برج عمر ادريس", "دبداب"],
  "34":["آث سيذى پراهم.", "أولاد ابراھم", "أولاد دحمان", "إلماين", "الحرازة", "الحمادية", "الرابطة", "العش", "العشير", "العناصر", "القصور", "القلة", "المھير", "بئر قصد علي", "برج بوعريريج", "برج زمورة", "برج غدير", "بليمور", "بن داود", "تاقلعيت", "تسمارت", "تفرڨ", "تقصطر", "ثنية النصر", "جعافرة", "حسناوة", "خليل", "رأس الوادي", "سيدي مبارك", "عين تاغروت", "عين تسرة", "غيلاسة", "مجانة", "منصورة"],
  "35":["أفير", "أولاد عيسى", "أولاد موسى", "أولاد ھداج", "الأربعطاش", "الثنية", "الخروبة", "الناصرية", "برج منايل", "بغلية", "بن شود", "بنى عمران", "بودواو", "بودواو البحرى", "بوزقزة قدارة", "بومرداس", "تمزريت", "تورقة", "تيجلابين", "جنات", "حمادى", "خميس الخشنة", "دلس", "زموري", "سوق الحد", "سي مصطفى", "سيدي داود", "شعبة العامر", "عمال", "قورصو", "لقاطة", "يسر"],
  "36":["البسباس", "الذرعان", "الزيتونة", "السوارخ", "الشافية", "الشط", "الطارف", "العيون", "القالة", "بحيرة الطيور", "برحان", "بن مهيدى", "بوثلجة", "بوحجار", "بوقوس", "حمام بنى صالح", "رمل سوق", "زريزر", "شبيطة مختار", "شهانى", "عصفور", "عين العسل", "عين الكرمة", "وادى الزيتون"],
  "37":["أم العسل", "تندوف"],
  "38":["أولاد بسام", "الاربعاء", "الازھرية", "العيون", "المعاصم", "اليوسفية", "برج الامير عبد القادر", "برج بونعامة", "بنى شعيب", "بنى لحسن", "بوقايد", "تاملاحت", "تـيـسـمـسـيـلـت", "ثنية الاحد", "خميستى", "سيدي العنترى", "سيدي بوتوشنت", "سيدي سليمان", "سيدي عابد", "عمارى", "لارجم", "ملعب"],
  "39":["أورماس", "البياضة", "الحمراية", "الدبيلة", "الرڨيبة", "العقلة", "المغير", "المڨرن", "النخلة", "الوادي", "بلدية حساني عبد الكريم", "بن ڨشة", "تريفاوى", "تغزوت", "حاسى خليفة", "دوار الماء", "رباح", "سيدي خليل", "سيدي عون", "طالب العربي", "كوينين", "مرارة", "مية ونسة", "وادى العلندة", "ڨمار"],
  "40":["أمصارة", "أولاد رشاش", "الحامة", "الرميلة", "المحمل", "الولجة", "انسيغة", "بابار", "بغاي", "بوحمامة", "تامزة", "تاوزيانت", "جلال", "خنشلة", "خيران", "ششار", "شلية", "عين الطويلة", "قايس", "متوسة", "يابوس"],
  "41":["أم العظائم", "أولاد ادريس", "أولاد مؤمن", "الحدادة", "الحنانشة", "الدريعة", "الرقوبة", "الزعرورية", "الزوابى", "المراهنة", "المشروحة", "بئر بوحوش", "تاورة", "ترقالت", "تيفاش", "خميسة", "سافل الويدان", "سدراتة", "سوق أهراس", "سيدي فرج", "عين الزانة", "عين السلطان", "لخضارة", "مداوروش", "وادى الكبريت", "ويلان"],
  "42":["أحمر العين", "أغابال", "الأرهاط", "الحطاطبة", "الداموس", "الشعيبة", "القليعة", "الناظور", "بني ميلك", "بو اسماعيل", "بورقيقة", "بوهارون", "تيبازة", "حجرة النص", "حجوط", "خميستي", "دواودة", "سيدي راشد", "سيدي سميان", "سيدي عمر", "سيدي غيلاس", "شرشال", "عين تڨورايت", "فوكة", "مراد", "مسلمون", "مناصر", "ڨورايا"],
  "43":["أحمد راشدي", "أولاد خلوف", "الشيقارة", "العياضى برباس", "القرارم قوقة", "المشيرة", "بن يحيى عبد الرحمان", "بوحاتم", "تاجنانت", "ترعى بينان", "تسالة لمطاي", "تسدان حدادة", "تلاغمة", "تيبرقنت", "حمالة", "دراحي بوصلاح", "رواشد", "زغاية", "سيدي خليفة", "سيدي مروان", "شلغوم العيد", "عميرة أراس", "عين البيضاء حريش", "عين التين", "عين ملوك", "فرجيوة", "ميلة", "مينار زرزة", "وادى النجاء", "وادى سقان", "وادي العثمانية", "يحيى بنى قشة"],
  "44":["الحسنية", "العامرة", "العبادية", "العطاف", "الماين", "المخاطرية", "بئر ولد خليفة", "بالعاص", "بربوش", "برج الأمير خالد", "بطحية", "بن علال", "بوراشد", "بومدفع", "تاشتة زقاغة", "تبركانين", "جليدة", "جمعة أولاد الشيخ", "جندل", "حسينية", "حمام ريغة", "خميس مليانة", "روينة", "زدين", "سيدي لخضر", "طارق بن زياد", "عريب", "عين االشياخ", "عين البنيان", "عين التركى", "عين السلطان", "عين بويحى", "عين دفلة - عين الدفلى", "مليانة", "وادى الشرفاء", "وادى جمعة"],
  "45":["البيوض", "النــعـامـة", "تيوت", "جنين بورزق", "صفيصيفة", "عسلة", "عين الصفراء", "عين بن خليل", "قصدير", "مشرية", "مغرار", "مكمن بن عمر"],
  "46":["أغلال", "أولاد الكيحل", "أولاد بوجمعة", "الأمير عبد القادر", "الحساسنة", "العامرية", "المالح", "المساعيد", "بني صاف", "بوزجار", "تارقة", "تامزوغة", "حاسى الغلة", "حمام بو حجر", "سيدي الصافي", "سيدي بن عدة", "سيدي بومدين", "سيدي وريلش", "شعبة اللحم", "شنتوف", "عـيـن تـمـوشـنـت", "عقب الليل", "عين الاربعاء", "عين الطلبة", "عين الكيحل", "وادى الصباح", "وادى برقش", "ولهاصة الغرابة"],
  "47":["العطف", "المنيعة", "الڨرارة", "بريان", "بونورة", "زلفانة", "سبسب", "ضاية بن ضحوة", "غرداية", "متليلي الشعانبة", "منصورة"],
  "48":["أولاد سيدي ميهوب", "أولاد يعيش", "الحاسى", "الحمادنة", "الحمري", "العلجة", "القطارة", "المطمار", "بلعسل بوزقزة", "بن داود", "بني درقن", "بني زنتيس", "جيديوة", "حد الشقالة", "دار بن عبد الله", "رمكة", "زمورة", "سوق الحد", "سيدي امحمد بن علي", "سيدي بن عودة", "سيدي خطاب", "سيدي سعادة", "سيدي لزرق", "عمي موسى", "عين الرحمة", "عين طارق", "غيليزان", "قلعة", "لحلاف", "مازونة", "مديونة", "مرجة سيدي عابد", "مندس", "وادى الجمعة", "وادي السلام", "وادي رهيو", "يلل", "ﻭﺍﺭﻳﺯﺍﻥ"],
  "49":["أوقروت", "أولاد سعيد", "أولاد عيسى", "المطارفة", "تيميمون", "تينركوك", "دلدول", "دﻟﺪول", "زاوية دباغ", "شروين", "طالمين", "قصر قدور"],
  "50":["برج باجي مختار", "تيمياوين"],
  "51":["أولاد جلال", "البسباس", "الدوسن", "الشعيبة", "راس الميعاد", "سيدي خالد"],
  "52":["أقلي", "أولاد خدير", "أولاد خضير", "إقلي", "الوطاء", "الوطى", "بني عباس", "بني يخلف", "تامترت", "تبلبلة", "تيمودى", "تيمودي", "قصابى", "قصابي", "كرزاز"],
  "53":["إن صالح", "إن غار", "عـيـن غــار", "عين صالح", "فقارة الزاوية", "فقارة الزوى"],
  "54":["إن قزام", "تين زواتين", "عين قزام"],
  "55":["الحجيرة", "الزاوية العابدية", "الطيبات", "العالية", "المقارين", "المنقر", "بلدة عمر", "بن ناصر", "تبسبست", "تماسين", "توقرت", "سيدي سليمان", "نزلة"],
  "56":["برج الحواس", "جانت"],
  "57":["أم الطيور", "المغير", "تندلة", "جامعة", "سطيل", "سيدي خليل", "سيدي عمران", "مرارة"],
  "58":["المنيعة", "حاسي الفحل", "حاسي القارة", "حاسي قارة"],
  "59":["آفلو", "أفلو", "الحاج المشري", "الغيشة", "بريدة", "بيضاء", "تاويالة", "سبقاق", "سيدي بوزيد", "عين سيدي علي", "قلتة سيدي سعد", "وادي مرة", "وادي مزي"],
  "60":["أولاد عمار", "الجزار", "المعذر", "بريكة", "بيطام", "تيلاطو", "جرمة", "سقانة", "عبد القادر عزيل", "مدوكل"],
  "61":["البرانس", "القنطرة", "الوطاية", "جمورة", "عين زعطوط", "لوطاية"],
  "62":["العقلة", "العقلة المالحة", "بئر العاتر", "فركان", "فـــــــركـــــان", "نقرين"],
  "63":["البويهي", "العريشة", "الغور", "القور", "سيدي الجيلالي"],
  "64":["الحمادية", "الرشايقة", "بوقرة", "زمالة الأمير عبد القادر", "سرغين", "سيدي عبد الغنى", "قصر الشلالة"],
  "65":["البيرين", "الخميس", "القرنيني", "بن هار", "بنهار", "بويرة الأحدب", "بيرين", "حاسي فدول", "حد الصحاري", "سيدي لعجال", "عين افقة", "عين فكة", "عين وسارة", "قرنيني"],
  "66":["أم العظام", "القطارة", "دلدول", "سد الرحال", "سد رحال", "سلمانة", "عمورة", "فيض البطمة", "مسعد"],
  "67":["أم الجليل", "أولاد عنتر", "أولاد معرف", "أولاد هلال", "السانق", "الشهبونية", "العمارية", "العوينات", "الكاف الأخضر", "بوعيش", "بوغار", "بوغزول", "تفراوت", "دراق", "سانڨ", "سيدي دامد", "شلالة العذاورة", "شنيقل", "عزيز", "عين القصير", "عين بوسيف", "قصر البخاري", "مفاتحة"],
  "68":["أمجدل", "أولاد سليمان", "أولاد سيدي إبراهيم", "أولاد سيدي ابراهيم", "أولاد عطية", "أولاد مـاضي", "الحوامد", "الدهاهنة", "الزرزور", "المعاريف", "الهامل", "بلعايبة", "بن سرور", "بنزوه", "بوسعادة", "بوطي السايح", "بير الفضة", "تامسة", "جبل أمساعد", "جبل مساعد", "حمـام الضلعة", "خبانة", "خطوطي سد الجير", "سليم", "سيدي امحمد", "سيدي عامر", "عين الحجل", "عين الريش", "عين الملح", "عين فارس", "محمد بوضياف", "مسيف", "مقرة", "ولتام"],
  "69":["أربوات", "الأبيض سيدي الشيخ", "الابيض سيدي الشيخ", "البنود", "المهرة", "المھارة", "بوسمغون", "شلالة", "عرباوة", "عين العراك"]
};

const DOC_TYPES = [
  "بطاقة التعريف الوطنية (CIN)",
  "جواز السفر",
  "رخصة القيادة",
  "دفتر العائلة",
  "شهادة الميلاد",
  "بطاقة الإقامة (للأجانب)",
  "السجل التجاري",
  "الرخصة المهنية",
  "بطاقة الطالب",
  "وثيقة أخرى"
];

// ===== INIT =====
let docCount = 0;
let currentStep = 1;
let submittedData = null;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('birthDate').max = new Date().toISOString().split('T')[0];
  document.getElementById('lossDate').max = new Date().toISOString().split('T')[0];
  initWilayas();
  addDoc_item(); // Add first document
  // Load theme
  if(localStorage.getItem('theme')==='dark') setTheme('dark');
});

function initWilayas() {
  ['wilayaResidence','lossWilaya'].forEach(id => {
    const sel = document.getElementById(id);
    WILAYAS.forEach(w => {
      const opt = document.createElement('option');
      opt.value = w.code;
      opt.textContent = `${w.code} - ${w.name}`;
      sel.appendChild(opt);
    });
  });
}

function loadCommunes(wilayaId, communeId) {
  const wilaya = document.getElementById(wilayaId).value;
  const sel = document.getElementById(communeId);
  sel.innerHTML = '<option value="">-- اختر البلدية --</option>';
  const communes = COMMUNES_BY_WILAYA[wilaya];
  if(communes) {
    communes.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      sel.appendChild(opt);
    });
  } else {
    // Generic communes
    const w = WILAYAS.find(x=>x.code===wilaya);
    if(w) {
      ['مقر الولاية','دائرة 1','دائرة 2','دائرة 3','دائرة 4'].forEach(c => {
        const opt = document.createElement('option');
        opt.value = c + ' - ' + w.name;
        opt.textContent = c + ' - ' + w.name;
        sel.appendChild(opt);
      });
    }
  }
}

// ===== DOCUMENT ITEMS =====
function addDoc_item() {
  docCount++;
  const idx = docCount;
  const list = document.getElementById('doc-list');
  const div = document.createElement('div');
  div.className = 'doc-item';
  div.id = `doc-${idx}`;
  div.innerHTML = `
    <div class="doc-item-header">
      <span class="doc-item-title">الوثيقة رقم ${idx}</span>
      ${idx > 1 ? `<button class="doc-remove" onclick="removeDoc(${idx})"><span class="material-icons" style="font-size:16px">delete</span> حذف</button>` : ''}
    </div>
    <div class="form-grid">
      <div class="field">
        <label>نوع الوثيقة <span class="req">*</span></label>
        <select id="docType-${idx}" onchange="onDocTypeChange(${idx})">
          <option value="">-- اختر نوع الوثيقة --</option>
          ${DOC_TYPES.map(t=>`<option value="${t}">${t}</option>`).join('')}
        </select>
        <span class="err-msg">هذا الحقل إلزامي</span>
      </div>
      <div class="field" id="docNum-block-${idx}">
        <label>رقم الوثيقة <span class="req">*</span></label>
        <input type="text" id="docNum-${idx}" placeholder="أدخل رقم الوثيقة">
        <span class="err-msg">هذا الحقل إلزامي</span>
      </div>
      <div class="field">
        <label>تاريخ الإصدار</label>
        <input type="date" id="docIssueDate-${idx}" max="${new Date().toISOString().split('T')[0]}">
      </div>
      <div class="field">
        <label>تاريخ الانتهاء</label>
        <input type="date" id="docExpDate-${idx}">
      </div>
      <div class="field col-span-2" id="docAuthority-block-${idx}">
        <label>جهة الإصدار / مكان الإصدار</label>
        <input type="text" id="docAuthority-${idx}" placeholder="المصلحة أو الولاية التي أصدرت الوثيقة">
      </div>
    </div>`;
  list.appendChild(div);
}

window.addDoc = addDoc_item;

function removeDoc(idx) {
  document.getElementById(`doc-${idx}`).remove();
}
window.removeDoc = removeDoc;

function onDocTypeChange(idx) {
  // Could hide/show fields based on type
}

// ===== NAVIGATION =====
function validateStep1() {
  let ok = true;
  // Validate declaration type
  const declType = document.querySelector('[name="declarationType"]:checked');
  if(!declType) { alert('يجب اختيار نوع التصريح'); return false; }

  const userType = document.getElementById('userType').value;
  if(userType==='citizen') {
    const nin = document.getElementById('nin');
    if(!nin.value || nin.value.length !== 18) {
      setError(nin.closest('.field'), true); ok=false;
    } else { setError(nin.closest('.field'), false); }
  }
  const birthApprox = document.getElementById('birthDateApprox')?.checked;
  const birthFields = birthApprox ? ['lastName','firstName','birthYear','birthPlace','wilayaResidence','communeResidence','phone'] : ['lastName','firstName','birthDate','birthPlace','wilayaResidence','communeResidence','phone'];
  birthFields.forEach(id => {
    const el = document.getElementById(id);
    if(!el.value.trim()) { setError(el.closest('.field'), true); ok=false; }
    else { setError(el.closest('.field'), false); }
  });
  return ok;
}

function validateStep2() {
  const items = document.querySelectorAll('.doc-item');
  if(items.length === 0) { alert('يجب إضافة وثيقة واحدة على الأقل'); return false; }
  let ok = true;
  for(let i=1; i<=docCount; i++) {
    const el = document.getElementById(`doc-${i}`);
    if(!el) continue;
    const typeEl = document.getElementById(`docType-${i}`);
    const numEl = document.getElementById(`docNum-${i}`);
    if(typeEl && !typeEl.value) { setError(typeEl.closest('.field'), true); ok=false; }
    else if(typeEl) { setError(typeEl.closest('.field'), false); }
    if(numEl && !numEl.value.trim()) { setError(numEl.closest('.field'), true); ok=false; }
    else if(numEl) { setError(numEl.closest('.field'), false); }
  }
  return ok;
}

function validateStep3() {
  let ok = true;
  ['lossDate','lossWilaya','lossCommune','lossCircumstances'].forEach(id => {
    const el = document.getElementById(id);
    if(!el.value.trim()) { setError(el.closest('.field'), true); ok=false; }
    else { setError(el.closest('.field'), false); }
  });
  if(!document.getElementById('oath').checked) {
    alert('يجب الموافقة على الإفادة والتعهد قبل الإرسال');
    return false;
  }
  return ok;
}

function goToStep(n) {
  if(n > currentStep) {
    if(currentStep===1 && !validateStep1()) return;
    if(currentStep===2 && !validateStep2()) return;
  }
  document.getElementById(`step-${currentStep}`).style.display='none';
  document.getElementById(`step-${n}`).style.display='block';

  // Update stepper
  for(let i=1;i<=3;i++) {
    const nav = document.getElementById(`step-nav-${i}`);
    nav.classList.remove('active','completed');
    if(i < n) nav.classList.add('completed');
    if(i === n) nav.classList.add('active');
  }
  currentStep = n;
  window.scrollTo({top:0,behavior:'smooth'});
}
window.goToStep = goToStep;

// ===== VALIDATORS =====
function setError(field, hasError) {
  if(!field) return;
  field.classList.toggle('has-error', hasError);
  const inputs = field.querySelectorAll('input,select,textarea');
  inputs.forEach(el => el.classList.toggle('error', hasError));
}
function validateRequired(el) {
  if(!el.value.trim()) setError(el.closest('.field'), true);
  else setError(el.closest('.field'), false);
}
function validateNIN() {
  const el = document.getElementById('nin');
  const hint = el.nextElementSibling;
  if(hint) hint.textContent = el.value.length + ' / 18';
  if(document.getElementById('userType').value==='citizen') {
    if(el.value.length !== 18) setError(el.closest('.field'), true);
    else setError(el.closest('.field'), false);
  }
}
function validatePhone(el) {
  const val = el.value.replace(/\s/g,'');
  if(!val || val.length < 9) setError(el.closest('.field'), true);
  else setError(el.closest('.field'), false);
}
window.validateRequired=validateRequired; window.validateNIN=validateNIN; window.validatePhone=validatePhone;

function onUserTypeChange() {
  const t = document.getElementById('userType').value;
  document.getElementById('nin-field').style.display = t==='citizen'?'':'none';
  document.getElementById('passport-field').style.display = (t==='resident'||t==='tourist')?'':'none';
  document.getElementById('entity-field').style.display = t==='entity'?'':'none';
  document.getElementById('lastName-field').style.display = t==='entity'?'none':'';
  document.getElementById('firstName-field').style.display = t==='entity'?'none':'';

  // Update passport/residence field label based on type
  const passportLabel = document.querySelector('#passport-field label');
  if(passportLabel) {
    if(t === 'resident') passportLabel.innerHTML = 'رقم بطاقة الإقامة <span class="req">*</span>';
    else if(t === 'tourist') passportLabel.innerHTML = 'رقم جواز السفر <span class="req">*</span>';
  }
  const passportInput = document.getElementById('passportNum');
  if(passportInput) {
    if(t === 'resident') passportInput.placeholder = 'رقم بطاقة الإقامة';
    else if(t === 'tourist') passportInput.placeholder = 'رقم جواز السفر';
  }
}
function onReporterNatureChange() { /* could show extra fields */ }
window.onUserTypeChange=onUserTypeChange; window.onReporterNatureChange=onReporterNatureChange;

// ===== SUBMIT =====
async function submitDeclaration() {
  if(!validateStep3()) return;
  showSpinner(true);

  // Collect docs
  const docs = [];
  for(let i=1; i<=docCount; i++) {
    if(!document.getElementById(`doc-${i}`)) continue;
    docs.push({
      type: document.getElementById(`docType-${i}`)?.value||'',
      number: document.getElementById(`docNum-${i}`)?.value||'',
      issueDate: document.getElementById(`docIssueDate-${i}`)?.value||'',
      expDate: document.getElementById(`docExpDate-${i}`)?.value||'',
      authority: document.getElementById(`docAuthority-${i}`)?.value||''
    });
  }

  const refNum = generateRef();
  const now = new Date();
  const data = {
    reference: refNum,
    submittedAt: now.toISOString(),
    reporter: {
      nature: document.querySelector('[name="reporterNature"]:checked')?.value||'self',
      userType: document.getElementById('userType').value,
      nin: document.getElementById('nin').value,
      passportNum: document.getElementById('passportNum').value,
      entityName: document.getElementById('entityName').value,
      lastName: document.getElementById('lastName').value,
      firstName: document.getElementById('firstName').value,
      lastNameLat: document.getElementById('lastNameLat').value,
      firstNameLat: document.getElementById('firstNameLat').value,
      birthDate: document.getElementById('birthDateApprox')?.checked ? (document.getElementById('birthYear').value + ' (مفترض)') : document.getElementById('birthDate').value,
      birthPlace: document.getElementById('birthPlace').value,
      wilayaResidence: document.getElementById('wilayaResidence').value,
      communeResidence: document.getElementById('communeResidence').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value
    },
    documents: docs,
    loss: {
      date: document.getElementById('lossDate').value,
      wilaya: document.getElementById('lossWilaya').value,
      commune: document.getElementById('lossCommune').value,
      circumstances: document.getElementById('lossCircumstances').value
    },
    declarationType: document.querySelector('[name="declarationType"]:checked')?.value||'loss',
    declarationTypeLabel: {'loss':'تصريح بالضياع','theft':'تصريح بالسرقة','damage':'تصريح بالإتلاف'}[document.querySelector('[name="declarationType"]:checked')?.value]||'تصريح بالضياع',
    status: 'submitted',
    source: 'E-declaration-GN'
  };

  try {
    if(window._db) {
      await window._addDoc(window._collection(window._db, 'declarations'), {
        ...data,
        createdAt: window._serverTimestamp()
      });
    }
    submittedData = data;
    showSpinner(false);
    document.getElementById(`step-${currentStep}`).style.display='none';
    document.getElementById('step-success').style.display='block';
    document.getElementById('ref-display').textContent = refNum;
    // Update stepper
    for(let i=1;i<=3;i++) {
      document.getElementById(`step-nav-${i}`).classList.add('completed');
      document.getElementById(`step-nav-${i}`).classList.remove('active');
    }
  } catch(e) {
    showSpinner(false);
    // Still show success with ref (save locally)
    submittedData = data;
    localStorage.setItem('lastDeclaration', JSON.stringify(data));
    document.getElementById(`step-${currentStep}`).style.display='none';
    document.getElementById('step-success').style.display='block';
    document.getElementById('ref-display').textContent = refNum;
  }
}
window.submitDeclaration=submitDeclaration;

function generateRef() {
  const y = new Date().getFullYear();
  const r = Math.floor(10000000 + Math.random()*89999999);
  return `GN-${y}-${r}`;
}

function showSpinner(v) {
  document.getElementById('spinner').style.display = v?'flex':'none';
}

// ===== PRINT =====
function printDeclaration() {
  if(!submittedData) return;
  const d = submittedData;
  document.getElementById('print-ref-num').textContent = d.reference;
  const now = new Date();
  document.getElementById('print-date-label').textContent = `تاريخ الإصدار: ${now.toLocaleDateString('ar-DZ')}  ${now.toLocaleTimeString('ar-DZ')}`;
  document.getElementById('print-print-date').textContent = now.toLocaleDateString('ar-DZ');

  const r = d.reporter;
  const wilaya = WILAYAS.find(w=>w.code===r.wilayaResidence);
  document.getElementById('print-reporter').innerHTML = `
    <div class="print-field"><div class="pf-label">الفئة</div><div class="pf-val">${getUserTypeLabel(r.userType)}</div></div>
    <div class="print-field"><div class="pf-label">رقم التعريف</div><div class="pf-val">${r.nin||r.passportNum||r.entityName}</div></div>
    <div class="print-field"><div class="pf-label">اللقب والاسم (عربي)</div><div class="pf-val">${r.lastName} ${r.firstName}</div></div>
    <div class="print-field"><div class="pf-label">NOM & PRÉNOM</div><div class="pf-val">${r.lastNameLat} ${r.firstNameLat}</div></div>
    <div class="print-field"><div class="pf-label">تاريخ ومكان الميلاد</div><div class="pf-val">${r.birthDate} &mdash; ${r.birthPlace}</div></div>
    <div class="print-field"><div class="pf-label">مكان الإقامة</div><div class="pf-val">${wilaya?wilaya.name:r.wilayaResidence} &mdash; ${r.communeResidence}</div></div>
    <div class="print-field"><div class="pf-label">الهاتف</div><div class="pf-val">${r.phone}</div></div>
    <div class="print-field"><div class="pf-label">البريد الإلكتروني</div><div class="pf-val">${r.email||'—'}</div></div>
  `;

  let docsHtml = '';
  d.documents.forEach((doc, i) => {
    const lossWilaya = WILAYAS.find(w=>w.code===d.loss.wilaya);
    docsHtml += `<div style="border:1px solid #ccc;padding:8px;margin-bottom:8px;border-radius:4px">
      <div style="font-weight:700;margin-bottom:6px">الوثيقة ${i+1}: ${doc.type}</div>
      <div class="print-grid">
        <div class="print-field"><div class="pf-label">رقم الوثيقة</div><div class="pf-val">${doc.number}</div></div>
        <div class="print-field"><div class="pf-label">تاريخ الإصدار</div><div class="pf-val">${doc.issueDate||'—'}</div></div>
        <div class="print-field"><div class="pf-label">تاريخ الانتهاء</div><div class="pf-val">${doc.expDate||'—'}</div></div>
        <div class="print-field"><div class="pf-label">جهة الإصدار</div><div class="pf-val">${doc.authority||'—'}</div></div>
      </div>
    </div>`;
  });
  document.getElementById('print-docs').innerHTML = docsHtml;

  const lossWilaya = WILAYAS.find(w=>w.code===d.loss.wilaya);
  document.getElementById('print-loss').innerHTML = `
    <div class="print-field"><div class="pf-label">تاريخ الضياع</div><div class="pf-val">${d.loss.date}</div></div>
    <div class="print-field"><div class="pf-label">مكان الضياع</div><div class="pf-val">${lossWilaya?lossWilaya.name:d.loss.wilaya} &mdash; ${d.loss.commune}</div></div>
  `;
  // Update print title with declaration type
  const declLabel = d.declarationTypeLabel || 'تصريح بالضياع';
  const printTitle = document.querySelector('.print-title');
  if(printTitle) printTitle.textContent = declLabel;

  document.getElementById('print-circumstances').textContent = d.loss.circumstances;
  document.getElementById('print-area').style.display='block';
  window.print();
  setTimeout(()=>{ document.getElementById('print-area').style.display='none'; },1000);
}
window.printDeclaration=printDeclaration;

function getUserTypeLabel(t) {
  return {citizen:'مواطن جزائري',resident:'مقيم أجنبي',entity:'شخص معنوي',tourist:'سائح أجنبي'}[t]||t;
}

function newDeclaration() { location.reload(); }
window.newDeclaration=newDeclaration;

// ===== THEME =====
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current==='dark'?'light':'dark');
}
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  document.getElementById('theme-label').textContent = t==='dark'?'الوضع الفاتح':'الوضع الداكن';
}
window.toggleTheme=toggleTheme;

// ===== BIRTH DATE APPROX =====
function toggleBirthDateApprox() {
  const checked = document.getElementById('birthDateApprox').checked;
  const dateInput = document.getElementById('birthDate');
  const yearInput = document.getElementById('birthYear');
  dateInput.style.display = checked ? 'none' : '';
  yearInput.style.display = checked ? '' : 'none';
  if (checked) { dateInput.value = ''; }
  else { yearInput.value = ''; }
}
window.toggleBirthDateApprox = toggleBirthDateApprox;

// ===== INPUT LANGUAGE VALIDATION =====
function enforceArabic(el) {
  // Allow Arabic letters, spaces, dashes, and common Arabic punctuation
  el.value = el.value.replace(/[^؀-ۿ\s\-']/g, '');
}
function enforceLatin(el) {
  // Allow Latin letters, spaces, dashes, apostrophes
  el.value = el.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s\-']/g, '').toUpperCase();
}
window.enforceArabic = enforceArabic;
window.enforceLatin = enforceLatin;
