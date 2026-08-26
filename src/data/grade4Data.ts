import { Grade4TimedStory, Grade4TachistoscopeItem, Grade4PyramidExercise } from "../types";

export const GRADE4_TIMED_STORIES: Grade4TimedStory[] = Array.from({ length: 500 }, (_, i) => {
  const levelNum = i + 1;
  const templates: {
    title: string;
    category: Grade4TimedStory["category"];
    iconEmoji: string;
    synopsis: string;
    vocab: { word: string; meaning: string }[];
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    q1: { q: string; opts: string[]; correct: number; exp: string };
    q2: { q: string; opts: string[]; correct: number; exp: string };
    q3: { q: string; opts: string[]; correct: number; exp: string };
  }[] = [
    {
      title: "Mars'taki Robot Kaşifler",
      category: "Bilim & Uzay",
      iconEmoji: "🚀",
      synopsis: "Kızıl Gezegen Mars'ta kaya ve su izi arayan azimli uzay robotunun heyecan verici keşif günü.",
      vocab: [
        { word: "Yörünge", meaning: "Bir gök cisminin başka bir cisim çevresinde çizdiği düzenli yol." },
        { word: "Krater", meaning: "Gök taşlarının çarpmasıyla oluşan dev çukur." },
        { word: "Sondaj", meaning: "Toprak veya kayaları delerek numune alma işlemi." }
      ],
      p1: "Kızıl Gezegen Mars'ın kızıl kumları üzerinde sabah güneşi doğarken, akıllı keşif robotu kameralarını açtı. Dünyadan milyonlarca kilometre uzakta tek başına görev yapıyordu.",
      p2: "Güneş panelleriyle bataryasını doldurduktan sonra çelik tekerlekleriyle dev bir kratere doğru ilerledi. Ana hedefi, antik nehirlerin bıraktığı kil tabakalarını incelemekti.",
      p3: "Özel lazer kolunu kayaya yaklaştırdı ve hassas bir sondaj yaptı. Çıkan taneciklerin analizi Dünya'daki kontrol merkezine ulaştığında bilim insanları sevinçle alkışladı: Kayada antik su mineralleri vardı!",
      p4: "Bu tarihi keşfin ardından robot antenini mavi gezegene doğru çevirip yeni rotasına doğru hızla yola koyuldu.",
      q1: { q: "Robot enerjisini nereden ve nasıl elde etmektedir?", opts: ["Rüzgar tribünlerinden", "Güneş panelleriyle bataryasını doldurarak", "Nükleer pillerle", "Dünya'dan gelen kabloyla"], correct: 1, exp: "Metinde güneş panelleriyle bataryasını doldurduğu belirtilmiştir." },
      q2: { q: "Bilim insanlarını sevinçten alkışlatan tarihi bulgu neydi?", opts: ["Yeni bir uzaylı bulunması", "Kayada antik su minerallerinin tespit edilmesi", "Altın madeni bulunması", "Buzulların erimesi"], correct: 1, exp: "Lazer koluyla yapılan sondaj sonucunda antik su mineralleri bulunmuştur." },
      q3: { q: "Bu metnin ana fikri nedir?", opts: ["Robotlar insanlardan güçlüdür.", "Uzay robotları bilimin sınırlarını genişleterek gezegenlerin geçmişine ışık tutar.", "Mars'ta yaşamak kolaydır.", "Güneş enerjisi sadece uzayda kullanılır."], correct: 1, exp: "Metin robotların uzay araştırmalarındaki bilimsel önemini anlatır." }
    },
    {
      title: "Akdeniz'in Gizli Koruyucusu: Deniz Çayırları",
      category: "Doğa & Çevre",
      iconEmoji: "🌿",
      synopsis: "Denizlerin akciğeri sayılan Posidonia deniz çayırlarının deniz yaşamı için hayati mucizesi.",
      vocab: [
        { word: "Posidonia", meaning: "Akdeniz'e özgü, çiçek açan köklü bir deniz bitkisi türü." },
        { word: "Erozyon", meaning: "Dalgaların kıyı kumlarını aşındırıp sürüklemesi." },
        { word: "Ekosistem", meaning: "Canlıların birbirleriyle ve çevreleriyle oluşturduğu doğal yaşam birliği." }
      ],
      p1: "Çoğu insan denizlerin dibini sadece kum ve yosundan ibaret sanır. Oysa Akdeniz'in masmavi sularının altında devasa su altı ormanları uzanır. Bu çayırlara Posidonia denir.",
      p2: "Deniz çayırları sıradan yosunlar gibi değildir; kökleri, gövdeleri ve hatta minik çiçekleri vardır. Tıpkı karadaki yağmur ormanları gibi fotosentez yaparak atmosfere tonlarca oksijen salarlar.",
      p3: "Aynı zamanda dev dalgaların hızını keserek sahil kumlarının erozyonla kaybolmasını engellerler. Yavru balıklar ve kaplumbağalar bu yeşil yaprakların arasına saklanarak büyür.",
      p4: "Bu nedenle bilim insanları denizlerimizi kirletmememiz ve bu su altı zümrütlerini korumamız gerektiğini her fırsatta hatırlatırlar.",
      q1: { q: "Deniz çayırlarını sıradan yosunlardan ayıran temel özellik nedir?", opts: ["Sadece tatlı suda yaşamaları", "Kökleri, gövdeleri ve çiçekleri olan gerçek bitkiler olmaları", "Kırmızı renkte olmaları", "Balıklar tarafından yenmemeleri"], correct: 1, exp: "Kökleri, gövdeleri ve çiçekleri olan gerçek bitkilerdir." },
      q2: { q: "Deniz çayırları kıyıları nasıl korur?", opts: ["Suyu ısıtarak", "Dalgaların hızını kesip kum erozyonunu engelleyerek", "Rüzgarı durdurarak", "Kıyıya set çekerek"], correct: 1, exp: "Dalgaların şiddetini kırarak sahil kumlarının taşınmasını önlerler." },
      q3: { q: "Metne göre deniz çayırları ekosistem için neden vazgeçilmezdir?", opts: ["Turist çektiği için", "Oksijen ürettikleri ve yavru canlılara güvenli yuva sağladıkları için", "Suyu dondurduğu için", "Gemilerin hızını artırdığı için"], correct: 1, exp: "Oksijen üretip yavru canlılara sığınak olurlar." }
    },
    {
      title: "Hezarfen'in Rüzgar Kanatları",
      category: "Tarih & Keşif",
      iconEmoji: "🦅",
      synopsis: "Galata Kulesi'nden Boğaz'ın serin rüzgarlarına kanat açan Hezarfen Ahmet Çelebi'nin efsanevi uçuşu.",
      vocab: [
        { word: "Hezarfen", meaning: "Bin ilim bilen, pek çok alanda uzmanlaşmış dahi kişi." },
        { word: "Süzülmek", meaning: "Kanat çırpmadan havada akıcı şekilde kaymak." },
        { word: "Muvaffak", meaning: "Başarılı olmuş, amacına ulaşmış kimse." }
      ],
      p1: "17. yüzyılın güneşli bir İstanbul sabahında Galata Kulesi'nin tepesinde nefesler tutulmuştu. Bilgin Hezarfen Ahmet Çelebi, kartal tüylerinden özenle tasarladığı dev kanatlarını sırtına bağlamıştı.",
      p2: "Yıllarca kuşların uçuş anatomisini, rüzgar yönlerini ve hava akımlarını incelemişti. İnsanların uçamayacağını iddia edenlere inat, aklın ve bilimin gücüne güveniyordu.",
      p3: "Kule korkuluğuna çıktı, rüzgarın lodos yönünden esmesini bekledi ve kendini cesurca boşluğa bıraktı. Kuşlar gibi süzülerek İstanbul Boğazı'nın masmavi suları üzerinden geçti.",
      p4: "Ahmet Çelebi, yaklaşık üç kilometrelik uçuşunu Üsküdar Doğancılar Meydanı'na zarifçe iniş yaparak tamamladı. İnsanlık tarihinin ilk başarılı planör uçuşlarından biri böylece tarihe geçti.",
      q1: { q: "Hezarfen Ahmet Çelebi kanatlarını tasarlarken kimleri ve neyi incelemiştir?", opts: ["Uçak motorlarını", "Kuşların uçuş yapısını, rüzgar yönlerini ve hava akımlarını", "Balıkların yüzüşünü", "Gemi yelkenlerini"], correct: 1, exp: "Metinde kuşların uçuş anatomisini ve rüzgar yönlerini incelediği açıkça yazmaktadır." },
      q2: { q: "Hezarfen uçuşunu nerede başlatıp nerede tamamlamıştır?", opts: ["Topkapı Sarayı'ndan Kız Kulesi'ne", "Galata Kulesi'nden Üsküdar Doğancılar Meydanı'na", "Boğaziçi Köprüsü'nden Kadıköy'e", "Süleymaniye'den Eminönü'ne"], correct: 1, exp: "Galata Kulesi'nden atlayarak Boğaz'ı aşmış ve Üsküdar'a inmiştir." },
      q3: { q: "Bu metinden çıkarılabilecek en kapsamlı yargı hangisidir?", opts: ["Kanat yapmak çok kolaydır.", "Sabırlı bilimsel araştırma ve cesaret, imkansız görünen hedefleri gerçeğe dönüştürür.", "Rüzgarlı havalarda dışarı çıkılmamalıdır.", "İstanbul dünyadaki en yüksek kuleye sahiptir."], correct: 1, exp: "Bilimsel gözlem, azim ve cesaret başarının anahtarıdır." }
    },
    {
      title: "Yapay Zeka ve Akıllı Şehirler",
      category: "Teknoloji & Yapay Zeka",
      iconEmoji: "🏙️",
      synopsis: "Trafik ışıklarından sokak lambalarına kadar geleceğin akıllı şehirlerinde teknolojinin hayatımızı nasıl kolaylaştırdığı.",
      vocab: [
        { word: "Sensör", meaning: "Işık, ısı veya hareketi algılayıp sinyale çeviren elektronik duyarga." },
        { word: "Optimizasyon", meaning: "Bir sistemi en az enerji ve maliyetle en verimli hale getirme." },
        { word: "Geri Dönüşüm", meaning: "Atık maddelerin yeniden işlenerek kullanılabilir hale getirilmesi." }
      ],
      p1: "Geleceğin şehirlerinde binalar, yollar ve araçlar birbiriyle konuşuyor desek inanır mısınız? Akıllı şehirler, yapay zeka ve internet sensörleri sayesinde artık hayal değil.",
      p2: "Örneğin akıllı bir kavşakta trafik lambaları sabit bir süreyle yanıp sönmez. Kameralar hangi şeritte daha çok araba olduğunu anında hesaplar ve yeşil ışığı yoğun olan tarafa daha uzun süre verir.",
      p3: "Ayrıca sokak lambaları caddede insan veya araba yokken ışıklarını kısarak elektrik tasarrufu sağlar. Akıllı çöp kutuları ise dolduklarında belediye araçlarına otomatik sinyal gönderir.",
      p4: "Teknoloji, doğayı korumak ve insanların daha temiz, güvenli şehirlerde yaşamasını sağlamak için harika bir araçtır.",
      q1: { q: "Akıllı kavşaklarda trafik ışıkları neye göre süre ayarlar?", opts: ["Günün saatine göre rastgele", "Kameraların tespit ettiği araç yoğunluğuna göre", "Polislerin düdük sesine göre", "Hava sıcaklığına göre"], correct: 1, exp: "Kameralar yoğun olan şeridi hesaplayıp yeşil ışık süresini dinamik olarak ayarlar." },
      q2: { q: "Sokak lambalarının sokak boşken ışığını kısması ne sağlar?", opts: ["Lambaların bozulmasını", "Önemli ölçüde elektrik ve enerji tasarrufunu", "Şehrin tamamen kararmasını", "Arabaların kaza yapmasını"], correct: 1, exp: "Enerji tasarrufu ve kaynakların verimli kullanımı sağlanır." },
      q3: { q: "Metne göre akıllı şehir teknolojilerinin temel amacı nedir?", opts: ["İnsanları evden çıkarmamak", "İnsanların daha temiz, güvenli yaşamalarını sağlamak ve doğayı korumak", "Bütün işleri robotlara devretmek", "Şehirleri daha kalabalık hale getirmek"], correct: 1, exp: "Yaşam kalitesini yükseltmek, enerji tasarrufu ve çevre koruması ana amaçtır." }
    },
    {
      title: "Göbeklitepe: Tarihin Sıfır Noktası",
      category: "Tarih & Keşif",
      iconEmoji: "🏛️",
      synopsis: "Şanlıurfa yakınlarında keşfedilen, insanlık tarihinin bilinen en eski anıtsal tapınak kompleksi.",
      vocab: [
        { word: "Monolit", meaning: "Tek parça taştan yapılmış dev sütun veya anıt." },
        { word: "Rölyef", meaning: "Taş veya maden üzerine kabartma sanatı." },
        { word: "Neolitik", meaning: "Cilalı Taş Devri, yerleşik hayata geçiş dönemi." }
      ],
      p1: "Şanlıurfa'nın verimli ovalarına tepeden bakan Göbeklitepe, arkeoloji dünyasını baştan aşağı değiştirdi. Yaklaşık 12 bin yıl öncesine dayanan bu gizemli yapı, Mısır Piramitleri'nden bile 7 bin yıl daha eskidir.",
      p2: "Burada 'T' biçiminde dizilmiş, ağırlıkları 10 ile 20 ton arasında değişen dev kireçtaşı sütunlar bulunmaktadır. O devirde henüz tekerlek veya metal aletler icat edilmemişti.",
      p3: "Sütunların üzerinde aslan, tilki, yaban domuzu, turna ve yılan gibi hayvanların ustalıkla yapılmış kabartma heykelleri yer alır.",
      p4: "Göbeklitepe, atalarımızın sadece karınlarını doyurmakla kalmayıp inanılmaz bir sanat, iş birliği ve mühendislik zekasına sahip olduklarını tüm dünyaya kanıtlamıştır.",
      q1: { q: "Göbeklitepe'nin dünya tarihindeki en şaşırtıcı özelliği nedir?", opts: ["Denizin altında bulunması", "Mısır Piramitleri'nden yaklaşık 7 bin yıl daha eski olması", "Tamamen altından yapılmış olması", "İçinde dinozor kemikleri olması"], correct: 1, exp: "12 bin yıl öncesine dayanarak piramitlerden binlerce yıl daha eskidir." },
      q2: { q: "Sütunların üzerindeki süslemeler nelerden oluşmaktadır?", opts: ["Yazılı alfabe metinlerinden", "Aslan, tilki, turna gibi hayvan kabartmalarından", "Araba ve tekerlek resimlerinden", "Sadece yıldız şekillerinden"], correct: 1, exp: "Hayvan figürlerinden oluşan usta işi rölyef kabartmalar bulunmaktadır." },
      q3: { q: "Tekerlek ve metalin olmadığı bir çağda bu yapının inşa edilmesi neyi kanıtlar?", opts: ["Eski insanların hiçbir şey bilmediğini", "O dönem insanlarının güçlü bir iş birliği, sanat ve mühendislik kabiliyetine sahip olduğunu", "Tapınakların rüzgarla kendiliğinden oluştuğunu", "Tarih kitaplarının tamamen uydurma olduğunu"], correct: 1, exp: "İlkel sanılan insanların örgütlenme ve mimari becerisini ortaya koyar." }
    },
    {
      title: "Kutup Işıklarının Dansı (Aurora)",
      category: "Bilim & Uzay",
      iconEmoji: "🌌",
      synopsis: "Kutup gecelerinde gökyüzünü zümrüt yeşili ve mor renklere boyayan kuzey ışıklarının büyüleyici fiziği.",
      vocab: [
        { word: "Manyetosfer", meaning: "Dünya'yı uzay radyasyonundan koruyan manyetik kalkan." },
        { word: "Plazma", meaning: "Maddenin yüksek enerjili, iyonlaşmış gaz hali." },
        { word: "Foton", meaning: "Işığı oluşturan en küçük enerji paketi." }
      ],
      p1: "Kuzey Kutbu'nda kış geceleri kapkaranlık ve dondurucu geçer. Ancak aniden gökyüzünde yeşil, mor ve pembe tüller dalgalanmaya başlar. Bu büyüleyici ışık şölenine 'Kuzey Işıkları' veya 'Aurora Borealis' adı verilir.",
      p2: "Güneş'ten uzaya doğru sürekli elektrik yüklü parçacık fırtınaları yayılır. Bu parçacıklar Dünya'ya ulaştığında, gezegenimizin manyetik kalkanı onları kutup bölgelerine doğru çeker.",
      p3: "Atmosferdeki oksijen ve azot gazlarına çarpan güneş parçacıkları enerji açığa çıkarır. Oksijen yeşil ve kırmızı ışık yayarken, azot gazı mor ve mavi tonlar üretir.",
      p4: "Kutup gecesini aydınlatan bu doğa harikası, uzayla dünyamızın sessiz ve estetik bir dansıdır.",
      q1: { q: "Kuzey ışıklarının oluşmasının ana kaynağı nedir?", opts: ["Kutup ayılarının gözleri", "Güneş'ten gelen yüklü parçacıkların atmosfer gazlarıyla çarpışması", "Buzulların ay ışığını yansıtması", "Dev fenerlerin ışıkları"], correct: 1, exp: "Güneş parçacıklarının Dünya atmosferindeki gazlarla etkileşimidir." },
      q2: { q: "Gökyüzündeki yeşil ışığı hangi gaz molekülü ortaya çıkarır?", opts: ["Oksijen", "Helyum", "Karbondioksit", "Su buharı"], correct: 0, exp: "Metne göre oksijen atomları yeşil ve kırmızı ışık yayar." },
      q3: { q: "Metnin ana teması nedir?", opts: ["Korku ve panik", "Doğa olayına karşı hayranlık ve bilimsel merak", "Üzüntü ve keder", "Öfke ve kızgınlık"], correct: 1, exp: "Kuzey ışıklarının güzelliği ve bilimsel mucizesi anlatılmıştır." }
    },
    {
      title: "Derin Denizlerin Işıldayan Canlıları",
      category: "Doğa & Çevre",
      iconEmoji: "🦑",
      synopsis: "Okyanusun binlerce metre derininde kendi ışığını üreten biyolüminesans canlıların gizemli dünyası.",
      vocab: [
        { word: "Biyolüminesans", meaning: "Canlıların kimyasal reaksiyonla kendi vücutlarında ışık üretmesi." },
        { word: "Basınç", meaning: "Su kütlesinin derinlerde cisimler üzerine uyguladığı dev ağırlık kuvveti." },
        { word: "Kamuflaj", meaning: "Çevreye uyum sağlayarak gizlenme veya saklanma." }
      ],
      p1: "Okyanusların bin metre altına indiğinizde Güneş ışığı tamamen kaybolur. Zifiri karanlık, dondurucu soğuk ve ezici bir su basıncı hüküm sürer. Yine de bu zorlu karanlıkta hayat fışkırır.",
      p2: "Derin deniz canlılarının yüzde doksanı kendi ışıklarını üretebilir. Bilimde buna 'biyolüminesans' denir. Fener balığı, başının üzerindeki ışıklı olta benzeri uzantıyla meraklı avlarını kendine çeker.",
      p3: "Bazı denizanası ve mürekkep balığı türleri ise saldırıya uğradıklarında düşmanlarının gözünü kamaştırmak için suya parlak ışıklı sıvılar fışkırtırlar.",
      p4: "Karanlık okyanus dipleri, parlayan yıldızlarla dolu bir gece gökyüzü gibi rengarenk ışıltılarla doludur.",
      q1: { q: "Derin deniz canlılarının kendi ışıklarını üretmesine ne ad verilir?", opts: ["Fotosentez", "Biyolüminesans", "Radyasyon", "Termal enerji"], correct: 1, exp: "Canlıların kimyasal yolla ışık yaymasına biyolüminesans denir." },
      q2: { q: "Fener balığı başındaki ışıklı uzantıyı hangi amaçla kullanır?", opts: ["Yolu aydınlatıp kitap okumak için", "Avlarını kandırıp kendine çekmek için", "Deniz suyunu ısıtmak için", "Yüzme hızını artırmak için"], correct: 1, exp: "Işıklı uzantısıyla karanlıkta avları kendine doğru çeker." },
      q3: { q: "Bu metinden çıkarılacak temel sonuç nedir?", opts: ["Karanlıkta hiçbir canlı yaşayamaz.", "Canlılar en zorlu doğa koşullarına bile inanılmaz yöntemlerle uyum sağlayabilir.", "Okyanusların derinlikleri bomboştur.", "Bütün balıklar elektrik çarpar."], correct: 1, exp: "Zorlu derinlik koşullarına canlıların geliştirdiği biyolojik adaptasyon anlatılmıştır." }
    },
    {
      title: "Görünmez Kalkanımız: Ozon Tabakası",
      category: "Doğa & Çevre",
      iconEmoji: "🛡️",
      synopsis: "Dünya'yı Güneş'in yakıcı morötesi ışınlarından koruyan atmosferik koruma kalkanı.",
      vocab: [
        { word: "Ultraviyole", meaning: "Gözle görülmeyen, deriye zarar verebilen yüksek enerjili morötesi ışınlar." },
        { word: "Stratosfer", meaning: "Atmosferin yerden 15-50 km yükseklikteki koruyucu katmanı." },
        { word: "Sera Gazı", meaning: "Isıyı tutarak küresel ısınmaya neden olan gazlar." }
      ],
      p1: "Güneşli bir yaz gününde açık havada oynamayı hepimiz çok severiz. Peki bizi Güneş'in zararlı morötesi (UV) ışınlarından neyin koruduğunu hiç düşündünüz mü?",
      p2: "Dünya'mızın etrafında, stratosfer katmanında yer alan görünmez bir örtü vardır: Ozon tabakası. Bu tabaka, Güneş'ten gelen tehlikeli ışınları tıpkı bir güneş gözlüğü gibi filtreler.",
      p3: "Eğer ozon tabakası olmasaydı bitkilerin yaprakları kurur, denizlerdeki planktonlar ölür ve canlıların sağlığı büyük zarar görürdü.",
      p4: "Tüm dünya ülkeleri bir araya gelerek zararlı kimyasalları yasakladı ve tabaka kendini onarmaya başladı. Bu başarı, birlik olunduğunda doğanın kurtarılabileceğini gösterir.",
      q1: { q: "Ozon tabakasının gezegenimiz için en temel görevi nedir?", opts: ["Yağmur yağdırmak", "Güneş'in zararlı ultraviyole ışınlarını filtrelemek", "Dünya'yı soğutmak", "Uzay gemilerini fırlatmak"], correct: 1, exp: "Zararlı UV ışınlarını emip filtreleyerek canlıları korur." },
      q2: { q: "Ozon tabakasının incelmesine sebep olan zararlı gazlar için ne yapılmıştır?", opts: ["Daha çok üretilmiştir", "Bütün dünya ülkeleri anlaşarak zararlı kimyasalları yasaklamıştır", "Görmezden gelinmiştir", "Sadece uzaya salınmıştır"], correct: 1, exp: "Uluslararası çevre anlaşmalarıyla zararlı gazlar yasaklanmıştır." },
      q3: { q: "Metnin ana fikri aşağıdakilerden hangisidir?", opts: ["Güneş ışığı her zaman zararlıdır.", "İnsanlar doğayı korumak için el ele verdiğinde küresel çevre sorunlarını çözebilir.", "Klimalar asla çalıştırılmamalıdır.", "Ozon gazı solunmalıdır."], correct: 1, exp: "Küresel dayanışma ve çevre bilinci ile doğanın korunabileceği ana fikirdir." }
    }
  ];

  const tpl = templates[i % templates.length];
  const iteration = Math.floor(i / templates.length) + 1;
  const title = iteration === 1 ? tpl.title : `${tpl.title} (${iteration}. Aşama)`;
  const wordCount = 140 + (i % 50);
  const targetSecondsStandard = 60 + (i % 25);
  const targetSecondsSpeedMaster = 36 + (i % 16);
  const difficulty: "Kolay" | "Orta" | "Usta" = levelNum <= 150 ? "Kolay" : levelNum <= 350 ? "Orta" : "Usta";

  return {
    id: `g4-story-${levelNum}`,
    levelNumber: levelNum,
    title,
    category: tpl.category,
    iconEmoji: tpl.iconEmoji,
    synopsis: tpl.synopsis,
    wordCount,
    targetSecondsStandard,
    targetSecondsSpeedMaster,
    difficulty,
    rewardCoins: 45 + (levelNum % 35),
    vocabulary: tpl.vocab,
    paragraphs: [tpl.p1, tpl.p2, tpl.p3, tpl.p4],
    questions: [
      {
        id: `g4-q-${levelNum}-1`,
        type: "multiple_choice",
        question: tpl.q1.q,
        options: tpl.q1.opts,
        correctAnswer: tpl.q1.correct,
        explanation: tpl.q1.exp
      },
      {
        id: `g4-q-${levelNum}-2`,
        type: "multiple_choice",
        question: tpl.q2.q,
        options: tpl.q2.opts,
        correctAnswer: tpl.q2.correct,
        explanation: tpl.q2.exp
      },
      {
        id: `g4-q-${levelNum}-3`,
        type: "multiple_choice",
        question: tpl.q3.q,
        options: tpl.q3.opts,
        correctAnswer: tpl.q3.correct,
        explanation: tpl.q3.exp
      }
    ]
  };
});

export const GRADE4_TACHISTOSCOPE_ITEMS: Grade4TachistoscopeItem[] = [
  {
    id: "tach-1",
    targetWordOrPhrase: "GÖKYÜZÜ",
    distractors: ["GÖKYÜZÜ", "GÖKGÜRÜLTÜSÜ", "GÖKKUŞAĞI", "GÖKYÜZÜNDE"],
    displayDurationMs: 250,
    category: "Doğa Sözcükleri",
    rewardCoins: 10
  },
  {
    id: "tach-2",
    targetWordOrPhrase: "FOTOSENTEZ",
    distractors: ["FOTOSENTEZ", "FOTOGRAFİK", "FOTOĞRAF", "FOTOSİSTEM"],
    displayDurationMs: 220,
    category: "Fen Bilgisi",
    rewardCoins: 10
  },
  {
    id: "tach-3",
    targetWordOrPhrase: "KİTAP KURDU",
    distractors: ["KİTAP KURDU", "KİTAPLIK", "KİTAP AYRACI", "KİTAP OKURU"],
    displayDurationMs: 240,
    category: "İkilemeler & Deyimler",
    rewardCoins: 12
  },
  {
    id: "tach-4",
    targetWordOrPhrase: "MERAKLI KAŞİF",
    distractors: ["MERAKLI KAŞİF", "CESUR KAPTAN", "MERAKLI BİLGİN", "SEVİMLİ KAŞİF"],
    displayDurationMs: 230,
    category: "Sözcük Öbekleri",
    rewardCoins: 12
  },
  {
    id: "tach-5",
    targetWordOrPhrase: "EKOSİSTEM",
    distractors: ["EKOSİSTEM", "EKONOMİK", "EKOLOJİK", "SİSTEMATİK"],
    displayDurationMs: 200,
    category: "Fen Bilgisi",
    rewardCoins: 12
  },
  {
    id: "tach-6",
    targetWordOrPhrase: "KÜTÜPHANE",
    distractors: ["KÜTÜPHANE", "KÜTÜK", "POSTANE", "HASTANE"],
    displayDurationMs: 200,
    category: "Sosyal Yaşam",
    rewardCoins: 10
  },
  {
    id: "tach-7",
    targetWordOrPhrase: "YILDIZ YAĞMURU",
    distractors: ["YILDIZ YAĞMURU", "NİSAN YAĞMURU", "YILDIZ KÜMESİ", "GÖKTAŞI"],
    displayDurationMs: 220,
    category: "Uzay Bilimi",
    rewardCoins: 12
  },
  {
    id: "tach-8",
    targetWordOrPhrase: "HOŞGÖRÜLÜ",
    distractors: ["HOŞGÖRÜLÜ", "GÖRGÜLÜ", "HOŞ SOHBET", "DOĞRULUK"],
    displayDurationMs: 190,
    category: "Değerlerimiz",
    rewardCoins: 15
  },
  {
    id: "tach-9",
    targetWordOrPhrase: "BİYOLOJİ",
    distractors: ["BİYOLOJİ", "BİYOGRAFİ", "JEOLOJİ", "EKOLOJİ"],
    displayDurationMs: 180,
    category: "Bilim Dalları",
    rewardCoins: 15
  },
  {
    id: "tach-10",
    targetWordOrPhrase: "ZAMAN YOLCUSU",
    distractors: ["ZAMAN YOLCUSU", "GECE YOLCUSU", "UZAY YOLCUSU", "ZAMAN MAKİNESİ"],
    displayDurationMs: 190,
    category: "Kurgu & Macera",
    rewardCoins: 15
  }
];

export const GRADE4_PYRAMID_EXERCISES: Grade4PyramidExercise[] = [
  {
    id: "pyr-1",
    title: "Bilgi Ağacı Piramidi",
    description: "Gözlerini tam ortadaki kırmızı noktaya odakla. Başını hiç oynatmadan sağ ve sol kelimeleri aynı anda algılamaya çalış.",
    focusPointEmoji: "🔴",
    rewardCoins: 25,
    lines: [
      { leftWord: "akıl", centerSymbol: "🔴", rightWord: "fikir" },
      { leftWord: "güzel", centerSymbol: "🔴", rightWord: "kitap" },
      { leftWord: "bilgi", centerSymbol: "🔴", rightWord: "ışığı" },
      { leftWord: "yıldızlar", centerSymbol: "🔴", rightWord: "parlar" },
      { leftWord: "derin deniz", centerSymbol: "🔴", rightWord: "mavi gök" },
      { leftWord: "hızlı okuyan", centerSymbol: "🔴", rightWord: "çabuk anlar" },
      { leftWord: "özgür düşünce", centerSymbol: "🔴", rightWord: "aydınlık yarın" }
    ]
  },
  {
    id: "pyr-2",
    title: "Uzay Yolculuğu Piramidi",
    description: "Merkezdeki rokete odaklanarak her satırda genişleyen görme alanınla kelime çiftlerini tek bakışta yakala.",
    focusPointEmoji: "🚀",
    rewardCoins: 25,
    lines: [
      { leftWord: "ay", centerSymbol: "🚀", rightWord: "gün" },
      { leftWord: "mavi", centerSymbol: "🚀", rightWord: "dünya" },
      { leftWord: "kızıl", centerSymbol: "🚀", rightWord: "gezegen" },
      { leftWord: "parlak", centerSymbol: "🚀", rightWord: "kuyruklu" },
      { leftWord: "sonsuz uzay", centerSymbol: "🚀", rightWord: "derin samanyolu" },
      { leftWord: "cesur astronot", centerSymbol: "🚀", rightWord: "araştırma yapar" },
      { leftWord: "yeni galaksiler", centerSymbol: "🚀", rightWord: "bizi bekliyor" }
    ]
  },
  {
    id: "pyr-3",
    title: "Doğa Kaşifi Piramidi",
    description: "Merkezdeki yeşil yaprağa bakarak satır satır genişleyen doğa terimlerini göz sıçraması yapmadan oku.",
    focusPointEmoji: "🍃",
    rewardCoins: 25,
    lines: [
      { leftWord: "dağ", centerSymbol: "🍃", rightWord: "göl" },
      { leftWord: "serin", centerSymbol: "🍃", rightWord: "pınar" },
      { leftWord: "yeşil", centerSymbol: "🍃", rightWord: "orman" },
      { leftWord: "temiz", centerSymbol: "🍃", rightWord: "hava" },
      { leftWord: "ötüşen kuşlar", centerSymbol: "🍃", rightWord: "çiçek açar" },
      { leftWord: "canlı doğayı", centerSymbol: "🍃", rightWord: "sevgiyle koru" },
      { leftWord: "ağaçlar nefesimiz", centerSymbol: "🍃", rightWord: "ormanlar canımız" }
    ]
  }
];

export const GRADE4_RSVP_PASSAGES = [
  {
    id: "rsvp-1",
    title: "Göz Kaslarını Güçlendir",
    category: "Hızlı Okuma Antrenmanı",
    words: [
      "Hızlı", "okuma", "yaparken", "gözlerimiz", "kelimelerin", "üzerinde",
      "tek", "tek", "duraklamak", "yerine", "öbekler", "halinde", "sıçrama",
      "yapar.", "Düzenli", "antrenman", "yapan", "bir", "öğrenci,",
      "hem", "daha", "hızlı", "okur", "hem", "de", "okuduğu", "metni",
      "çok", "daha", "iyi", "kavrar.", "Zihnimiz", "bir", "kelimeyi",
      "gördüğü", "anda", "anlamını", "işleyebilecek", "muazzam", "bir",
      "kapasiteye", "sahiptir."
    ]
  },
  {
    id: "rsvp-2",
    title: "Merakın Büyüleyici Gücü",
    category: "Motivasyon & Keşif",
    words: [
      "Merak,", "insanlığın", "en", "büyük", "itici", "gücüdür.",
      "Bütün", "büyük", "icatlar", "ve", "keşifler,",
      "'Acaba", "nasıl", "çalışıyor?'", "sorusuyla", "başlamıştır.",
      "Kitaplar", "ise", "bize", "farklı", "dünyaların", "kapılarını",
      "aralar.", "Her", "yeni", "sayfa,", "zihnimize", "yeni",
      "ufuklar", "açar", "ve", "bizi", "bilge", "bir", "birey", "yapar."
    ]
  }
];
