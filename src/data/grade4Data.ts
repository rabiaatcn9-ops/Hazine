import { Grade4TimedStory, Grade4TachistoscopeItem, Grade4PyramidExercise } from "../types";

export const GRADE4_TIMED_STORIES: Grade4TimedStory[] = [
  {
    id: "g4-story-1",
    levelNumber: 1,
    title: "Mars'taki Robot Kaşifler",
    category: "Bilim & Uzay",
    iconEmoji: "🚀",
    synopsis: "Kızıl Gezegen Mars'ta kaya ve su izi arayan azimli uzay robotu Azim'in heyecan verici keşif günü.",
    wordCount: 148,
    targetSecondsStandard: 65, // ~135 WPM
    targetSecondsSpeedMaster: 40, // ~220 WPM
    difficulty: "Kolay",
    rewardCoins: 45,
    vocabulary: [
      { word: "Yörünge", meaning: "Bir gök cisminin başka bir cisim çevresinde çizdiği düzenli yol." },
      { word: "Krater", meaning: "Gök taşlarının çarpmasıyla oluşan dev çukur." },
      { word: "Sondaj", meaning: "Toprak veya kayaları delerek numune alma işlemi." }
    ],
    paragraphs: [
      "Kızıl Gezegen Mars'ın kızıl kumları üzerinde sabah güneşi doğarken, akıllı keşif robotu Azim kameralarını açtı. Dünyadan milyonlarca kilometre uzakta tek başına görev yapıyordu.",
      "Güneş panelleriyle bataryasını doldurduktan sonra çelik tekerlekleriyle dev bir kratere doğru ilerledi. Ana hedefi, milyonlarca yıl önce bu vadide akmış olabilecek nehirlerin bıraktığı kil tabakalarını incelemekti.",
      "Özel lazer kolunu kayaya yaklaştırdı ve hassas bir sondaj yaptı. Çıkan toz taneciklerini mikroskobik kamerasıyla taradı. Analiz sonuçları Dünya'daki kontrol merkezine ulaştığında bilim insanları sevinçle alkışladı: Kayada antik su mineralleri vardı!",
      "Azim, bu tarihi keşfin ardından antenini mavi gezegene doğru çevirip yeni rotasına doğru hızla yola koyuldu."
    ],
    questions: [
      {
        id: "g4-q1-1",
        type: "multiple_choice",
        question: "Robot Azim enerjisini nereden ve nasıl elde etmektedir?",
        options: ["Rüzgar tribünlerinden", "Güneş panelleriyle bataryasını doldurarak", "Nükleer pillerle", "Dünya'dan gönderilen kabloyla"],
        correctAnswer: 1,
        explanation: "Metinde 'Güneş panelleriyle bataryasını doldurduktan sonra çelik tekerlekleriyle ilerledi' denmektedir."
      },
      {
        id: "g4-q1-2",
        type: "multiple_choice",
        question: "Bilim insanlarını sevinçten alkışlatan tarihi bulgu neydi?",
        options: ["Yeni bir uzaylı canlı bulunması", "Kayada antik su minerallerinin tespit edilmesi", "Altın madeni bulunması", "Buzulların tamamen erimesi"],
        correctAnswer: 1,
        explanation: "Lazer koluyla yapılan sondaj sonucunda kayada antik su mineralleri tespit edilmiştir."
      },
      {
        id: "g4-q1-3",
        type: "multiple_choice",
        question: "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
        options: [
          "Robotlar insanlardan daha güçlüdür.",
          "Uzay keşif robotları, bilimin sınırlarını genişleterek gezegenlerin geçmişine ışık tutmaktadır.",
          "Mars'ta yaşamak dünyadan daha kolaydır.",
          "Güneş enerjisi sadece uzayda kullanılabilir."
        ],
        correctAnswer: 1,
        explanation: "Metin robotların uzay araştırmalarındaki bilimsel katkısını ve önemini anlatmaktadır."
      }
    ]
  },
  {
    id: "g4-story-2",
    levelNumber: 2,
    title: "Akdeniz'in Gizli Koruyucusu: Deniz Çayırları",
    category: "Doğa & Çevre",
    iconEmoji: "🌿",
    synopsis: "Denizlerin akciğeri sayılan Posidonia deniz çayırlarının deniz yaşamı için hayati mucizesi.",
    wordCount: 162,
    targetSecondsStandard: 70,
    targetSecondsSpeedMaster: 45,
    difficulty: "Kolay",
    rewardCoins: 50,
    vocabulary: [
      { word: "Posidonia", meaning: "Akdeniz'e özgü, çiçek açan köklü bir deniz bitkisi türü." },
      { word: "Erozyon", meaning: "Dalgaların kıyı kumlarını aşındırıp sürüklemesi." },
      { word: "Ekosistem", meaning: "Canlıların birbirleriyle ve çevreleriyle oluşturduğu doğal yaşam birliği." }
    ],
    paragraphs: [
      "Çoğu insan denizlerin dibini sadece kum ve yosundan ibaret sanır. Oysa Akdeniz'in masmavi sularının altında devasa su altı ormanları uzanır. Bu çayırlara 'Posidonia' denir.",
      "Deniz çayırları sıradan yosunlar gibi değildir; kökleri, gövdeleri ve hatta minik çiçekleri vardır. Tıpkı karadaki yağmur ormanları gibi fotosentez yaparak atmosfere tonlarca oksijen salarlar. Aynı zamanda dev dalgaların hızını keserek sahil kumlarının erozyonla kaybolmasını engellerler.",
      "Yavru balıklar, deniz atları ve sevimli kaplumbağalar bu yeşil yaprakların arasına saklanarak büyür. Deniz çayırları olmazsa deniz canlılarının yuvaları yok olur.",
      "Bu nedenle bilim insanları denizlerimizi kirletmememiz ve bu su altı zümrütlerini korumamız gerektiğini her fırsatta hatırlatırlar."
    ],
    questions: [
      {
        id: "g4-q2-1",
        type: "multiple_choice",
        question: "Deniz çayırlarını sıradan yosunlardan ayıran temel özellik nedir?",
        options: ["Sadece tatlı suda yaşamaları", "Kökleri, gövdeleri ve çiçekleri olan gerçek bitkiler olmaları", "Kırmızı renkte olmaları", "Balıklar tarafından yenmemeleri"],
        correctAnswer: 1,
        explanation: "Metinde 'kökleri, gövdeleri ve hatta minik çiçekleri vardır' şeklinde belirtilmiştir."
      },
      {
        id: "g4-q2-2",
        type: "multiple_choice",
        question: "Deniz çayırları kıyıları nasıl korur?",
        options: ["Suyu ısıtarak", "Dev dalgaların hızını kesip kumların erozyonunu engelleyerek", "Rüzgarı durdurarak", "Kıyıya duvar örerek"],
        correctAnswer: 1,
        explanation: "Metne göre dalgaların şiddetini kırarak sahil kumlarının taşınmasını ve erozyonu önlerler."
      },
      {
        id: "g4-q2-3",
        type: "multiple_choice",
        question: "Metne göre deniz çayırlarının yok olması neye yol açar?",
        options: ["Denizlerin taşmasına", "Deniz canlılarının yuvalarının ve oksijen kaynağının kaybolmasına", "Havanın soğumasına", "Gemilerin batmasına"],
        correctAnswer: 1,
        explanation: "Deniz canlılarının barınma alanı ve oksijen dengesi bozulur."
      }
    ]
  },
  {
    id: "g4-story-3",
    levelNumber: 3,
    title: "Hezarfen'in Rüzgar Kanatları",
    category: "Tarih & Keşif",
    iconEmoji: "🦅",
    synopsis: "Galata Kulesi'nden Boğaz'ın serin rüzgarlarına kanat açan Hezarfen Ahmet Çelebi'nin efsanevi uçuşu.",
    wordCount: 175,
    targetSecondsStandard: 75,
    targetSecondsSpeedMaster: 48,
    difficulty: "Orta",
    rewardCoins: 55,
    vocabulary: [
      { word: "Hezarfen", meaning: "Bin ilim bilen, pek çok alanda uzmanlaşmış dahi kişi." },
      { word: "Süzülmek", meaning: "Kanat çırpmadan havada akıcı şekilde kaymak." },
      { word: "Muvaffak", meaning: "Başarılı olmuş, amacına ulaşmış kimse." }
    ],
    paragraphs: [
      "17. yüzyılın güneşli bir İstanbul sabahında Galata Kulesi'nin tepesinde nefesler tutulmuştu. Bilgin Hezarfen Ahmet Çelebi, kartal tüylerinden özenle tasarladığı dev kanatlarını sırtına bağlamıştı.",
      "Yıllarca kuşların uçuş anatomisini, rüzgar yönlerini ve hava akımlarını incelemişti. İnsanların uçamayacağını iddia edenlere inat, aklın ve bilimin gücüne güveniyordu.",
      "Kule korkuluğuna çıktı, rüzgarın lodos yönünden esmesini bekledi ve kendini cesurca boşluğa bıraktı. Kuşlar gibi süzülerek İstanbul Boğazı'nın masmavi suları üzerinden geçti. Sahilde toplanan binlerce İstanbullu hayranlıkla gökyüzünü izliyordu.",
      "Ahmet Çelebi, yaklaşık üç kilometrelik uçuşunu Üsküdar Doğancılar Meydanı'na zarifçe iniş yaparak tamamladı. İnsanlık tarihinin ilk başarılı planör uçuşlarından biri böylece tarihe altın harflerle yazıldı."
    ],
    questions: [
      {
        id: "g4-q3-1",
        type: "multiple_choice",
        question: "Hezarfen Ahmet Çelebi kanatlarını tasarlarken kimleri ve neyi incelemiştir?",
        options: ["Uçak motorlarını", "Kuşların uçuş yapısını, rüzgar yönlerini ve hava akımlarını", "Balıkların yüzüşünü", "Gemi yelkenlerini"],
        correctAnswer: 1,
        explanation: "Metinde kuşların uçuş anatomisini ve rüzgar yönlerini incelediği açıkça yazmaktadır."
      },
      {
        id: "g4-q3-2",
        type: "multiple_choice",
        question: "Hezarfen uçuşunu nerede başlatıp nerede tamamlamıştır?",
        options: ["Topkapı Sarayı'ndan Kız Kulesi'ne", "Galata Kulesi'nden Üsküdar Doğancılar Meydanı'na", "Boğaziçi Köprüsü'nden Kadıköy'e", "Süleymaniye'den Eminönü'ne"],
        correctAnswer: 1,
        explanation: "Galata Kulesi'nden atlayarak Boğaz'ı aşmış ve Üsküdar'a inmiştir."
      },
      {
        id: "g4-q3-3",
        type: "multiple_choice",
        question: "Bu metinden çıkarılabilecek en kapsamlı yargı hangisidir?",
        options: [
          "Kanat yapmak çok kolaydır.",
          "Sabırlı bilimsel araştırma ve cesaret, imkansız görünen hedefleri gerçeğe dönüştürür.",
          "Rüzgarlı havalarda dışarı çıkılmamalıdır.",
          "İstanbul dünyadaki en yüksek kuleye sahiptir."
        ],
        correctAnswer: 1,
        explanation: "Bilimsel gözlem, azim ve cesaret başarının anahtarıdır."
      }
    ]
  },
  {
    id: "g4-story-4",
    levelNumber: 4,
    title: "Yapay Zeka ve Akıllı Şehirler",
    category: "Teknoloji & Yapay Zeka",
    iconEmoji: "🏙️",
    synopsis: "Trafik ışıklarından sokak lambalarına kadar geleceğin akıllı şehirlerinde teknolojinin hayatımızı nasıl kolaylaştırdığı.",
    wordCount: 180,
    targetSecondsStandard: 78,
    targetSecondsSpeedMaster: 50,
    difficulty: "Orta",
    rewardCoins: 55,
    vocabulary: [
      { word: "Sensör", meaning: "Işık, ısı veya hareketi algılayıp sinyale çeviren elektronik duyarga." },
      { word: "Optimizasyon", meaning: "Bir sistemi en az enerji ve maliyetle en verimli hale getirme." },
      { word: "Geri Dönüşüm", meaning: "Atık maddelerin yeniden işlenerek kullanılabilir hale getirilmesi." }
    ],
    paragraphs: [
      "Geleceğin şehirlerinde binalar, yollar ve araçlar birbiriyle konuşuyor desek inanır mısınız? Akıllı şehirler, yapay zeka ve internet sensörleri sayesinde artık hayal değil.",
      "Örneğin akıllı bir kavşakta trafik lambaları sabit bir süreyle yanıp sönmez. Kameralar hangi şeritte daha çok araba olduğunu anında hesaplar ve yeşil ışığı yoğun olan tarafa daha uzun süre verir. Böylece trafik sıkışıklığı ve egzoz dumanı büyük oranda azalır.",
      "Ayrıca sokak lambaları caddede insan veya araba yokken ışıklarını kısarak elektrik tasarrufu sağlar. Akıllı çöp kutuları ise dolduklarında belediye araçlarına otomatik sinyal gönderir.",
      "Teknoloji, doğayı korumak ve insanların daha temiz, güvenli şehirlerde yaşamasını sağlamak için harika bir araçtır."
    ],
    questions: [
      {
        id: "g4-q4-1",
        type: "multiple_choice",
        question: "Akıllı kavşaklarda trafik ışıkları neye göre süre ayarlar?",
        options: ["Günün saatine göre rastgele", "Kameraların tespit ettiği araç yoğunluğuna göre", "Polislerin düdük sesine göre", "Hava sıcaklığına göre"],
        correctAnswer: 1,
        explanation: "Kameralar yoğun olan şeridi hesaplayıp yeşil ışık süresini dinamik olarak ayarlar."
      },
      {
        id: "g4-q4-2",
        type: "multiple_choice",
        question: "Sokak lambalarının sokak boşken ışığını kısması ne sağlar?",
        options: ["Lambaların bozulmasını", "Önemli ölçüde elektrik ve enerji tasarrufunu", "Şehrin tamamen kararmasını", "Arabaların kaza yapmasını"],
        correctAnswer: 1,
        explanation: "Enerji tasarrufu ve kaynakların verimli kullanımı sağlanır."
      },
      {
        id: "g4-q4-3",
        type: "multiple_choice",
        question: "Metne göre akıllı şehir teknolojilerinin temel amacı nedir?",
        options: [
          "İnsanları evden çıkarmamak",
          "İnsanların daha temiz, güvenli yaşamalarını sağlamak ve doğayı korumak",
          "Bütün işleri robotlara devretmek",
          "Şehirleri daha kalabalık hale getirmek"
        ],
        correctAnswer: 1,
        explanation: "Yaşam kalitesini yükseltmek, enerji tasarrufu ve çevre koruması ana amaçtır."
      }
    ]
  },
  {
    id: "g4-story-5",
    levelNumber: 5,
    title: "Göbeklitepe: Tarihin Sıfır Noktası",
    category: "Tarih & Keşif",
    iconEmoji: "🏛️",
    synopsis: "Şanlıurfa yakınlarında keşfedilen, insanlık tarihinin bilinen en eski anıtsal tapınak kompleksi.",
    wordCount: 195,
    targetSecondsStandard: 85,
    targetSecondsSpeedMaster: 55,
    difficulty: "Usta",
    rewardCoins: 60,
    vocabulary: [
      { word: "Monolit", meaning: "Tek parça taştan yapılmış dev sütun veya anıt." },
      { word: "Rölyef", meaning: "Taş veya maden üzerine kabartma sanatı." },
      { word: "Neolitik", meaning: "Cilalı Taş Devri, yerleşik hayata geçiş dönemi." }
    ],
    paragraphs: [
      "Şanlıurfa'nın verimli ovalarına tepeden bakan Göbeklitepe, arkeoloji dünyasını baştan aşağı değiştirdi. Yaklaşık 12 bin yıl öncesine dayanan bu gizemli yapı, Mısır Piramitleri'nden bile 7 bin yıl daha eskidir.",
      "Burada 'T' biçiminde dizilmiş, ağırlıkları 10 ile 20 ton arasında değişen dev kireçtaşı sütunlar bulunmaktadır. O devirde henüz tekerlek veya metal aletler icat edilmemişken, avcı-toplayıcı insanların bu devasa kayaları nasıl taşıyıp diktiği hala büyük bir merak konusudur.",
      "Sütunların üzerinde aslan, tilki, yaban domuzu, turna ve yılan gibi hayvanların ustalıkla yapılmış kabartma heykelleri yer alır.",
      "Göbeklitepe, atalarımızın sadece karınlarını doyurmakla kalmayıp inanılmaz bir sanat, iş birliği ve mühendislik zekasına sahip olduklarını tüm dünyaya kanıtlamıştır."
    ],
    questions: [
      {
        id: "g4-q5-1",
        type: "multiple_choice",
        question: "Göbeklitepe'nin dünya tarihindeki en şaşırtıcı özelliği nedir?",
        options: ["Denizin altında bulunması", "Mısır Piramitleri'nden yaklaşık 7 bin yıl daha eski olması", "Tamamen altından yapılmış olması", "İçinde dinozor kemikleri olması"],
        correctAnswer: 1,
        explanation: "12 bin yıl öncesine dayanarak piramitlerden binlerce yıl daha eskidir."
      },
      {
        id: "g4-q5-2",
        type: "multiple_choice",
        question: "Sütunların üzerindeki süslemeler nelerden oluşmaktadır?",
        options: ["Yazılı alfabe metinlerinden", "Aslan, tilki, turna gibi hayvan kabartmalarından", "Araba ve tekerlek resimlerinden", "Sadece yıldız şekillerinden"],
        correctAnswer: 1,
        explanation: "Hayvan figürlerinden oluşan usta işi rölyef kabartmalar bulunmaktadır."
      },
      {
        id: "g4-q5-3",
        type: "multiple_choice",
        question: "Tekerlek ve metalin olmadığı bir çağda bu yapının inşa edilmesi neyi kanıtlar?",
        options: [
          "Eski insanların hiçbir şey bilmediğini",
          "O dönem insanlarının güçlü bir iş birliği, sanat ve mühendislik kabiliyetine sahip olduğunu",
          "Tapınakların rüzgarla kendiliğinden oluştuğunu",
          "Tarih kitaplarının tamamen uydurma olduğunu"
        ],
        correctAnswer: 1,
        explanation: "İlkel sanılan insanların örgütlenme ve mimari becerisini ortaya koyar."
      }
    ]
  },
  {
    id: "g4-story-6",
    levelNumber: 6,
    title: "Kutup Işıklarının Dansı (Aurora)",
    category: "Bilim & Uzay",
    iconEmoji: "🌌",
    synopsis: "Kutup gecelerinde gökyüzünü zümrüt yeşili ve mor renklere boyayan kuzey ışıklarının büyüleyici fiziği.",
    wordCount: 188,
    targetSecondsStandard: 80,
    targetSecondsSpeedMaster: 52,
    difficulty: "Orta",
    rewardCoins: 55,
    vocabulary: [
      { word: "Manyetosfer", meaning: "Dünya'yı uzay radyasyonundan koruyan manyetik kalkan." },
      { word: "Plazma", meaning: "Maddenin yüksek enerjili, iyonlaşmış gaz hali." },
      { word: "Foton", meaning: "Işığı oluşturan en küçük enerji paketi." }
    ],
    paragraphs: [
      "Kuzey Kutbu'nda kış geceleri kapkaranlık ve dondurucu geçer. Ancak aniden gökyüzünde yeşil, mor ve pembe tüller dalgalanmaya başlar. Bu büyüleyici ışık şölenine 'Kuzey Işıkları' veya 'Aurora Borealis' adı verilir.",
      "Peki bu renkler nereden gelir? Güneş'ten uzaya doğru sürekli elektrik yüklü parçacık fırtınaları yayılır. Bu parçacıklar Dünya'ya ulaştığında, gezegenimizin manyetik kalkanı onları kutup bölgelerine doğru çeker.",
      "Atmosferdeki oksijen ve azot gazlarına çarpan güneş parçacıkları enerji açığa çıkarır. Oksijen yeşil ve kırmızı ışık yayarken, azot gazı mor ve mavi tonlar üretir.",
      "Kutup gecesini aydınlatan bu doğa harikası, uzayla dünyamızın sessiz ve estetik bir dansıdır."
    ],
    questions: [
      {
        id: "g4-q6-1",
        type: "multiple_choice",
        question: "Kuzey ışıklarının oluşmasının ana kaynağı nedir?",
        options: ["Kutup ayılarının gözleri", "Güneş'ten gelen yüklü parçacıkların atmosfer gazlarıyla çarpışması", "Buzulların ay ışığını yansıtması", "Dev fenerlerin ışıkları"],
        correctAnswer: 1,
        explanation: "Güneş parçacıklarının Dünya atmosferindeki oksijen ve azot gazlarıyla etkileşime girmesiyle oluşur."
      },
      {
        id: "g4-q6-2",
        type: "multiple_choice",
        question: "Gökyüzündeki yeşil ışığı hangi gaz molekülü ortaya çıkarır?",
        options: ["Oksijen", "Helyum", "Karbondioksit", "Su buharı"],
        correctAnswer: 0,
        explanation: "Metne göre oksijen atomları yeşil ve kırmızı ışık yayar."
      },
      {
        id: "g4-q6-3",
        type: "multiple_choice",
        question: "Metnin anlatımında yazar hangi duyguyu öne çıkarmaktadır?",
        options: ["Korku ve panik", "Doğa olayına karşı hayranlık ve merak", "Üzüntü ve keder", "Öfke ve kızgınlık"],
        correctAnswer: 1,
        explanation: "Kuzey ışıklarının güzelliği, büyüsü ve bilimsel mucizesine hayranlık anlatılmıştır."
      }
    ]
  },
  {
    id: "g4-story-7",
    levelNumber: 7,
    title: "Derin Denizlerin Işıldayan Canlıları",
    category: "Doğa & Çevre",
    iconEmoji: "🦑",
    synopsis: "Okyanusun binlerce metre derininde kendi ışığını üreten biyolüminesans canlıların gizemli dünyası.",
    wordCount: 192,
    targetSecondsStandard: 82,
    targetSecondsSpeedMaster: 54,
    difficulty: "Usta",
    rewardCoins: 60,
    vocabulary: [
      { word: "Biyolüminesans", meaning: "Canlıların kimyasal reaksiyonla kendi vücutlarında ışık üretmesi." },
      { word: "Basınç", meaning: "Su kütlesinin derinlerde cisimler üzerine uyguladığı dev ağırlık kuvveti." },
      { word: "Kamuflaj", meaning: "Çevreye uyum sağlayarak gizlenme veya saklanma." }
    ],
    paragraphs: [
      "Okyanusların bin metre altına indiğinizde Güneş ışığı tamamen kaybolur. Zifiri karanlık, dondurucu soğuk ve ezici bir su basıncı hüküm sürer. Yine de bu zorlu karanlıkta hayat fışkırır.",
      "Derin deniz canlılarının yüzde doksanı kendi ışıklarını üretebilir. Bilimde buna 'biyolüminesans' denir. Fener balığı, başının üzerindeki ışıklı olta benzeri uzantıyla meraklı avlarını kendine çeker.",
      "Bazı denizanası ve mürekkep balığı türleri ise saldırıya uğradıklarında düşmanlarının gözünü kamaştırmak için suya parlak ışıklı sıvılar fışkırtırlar. Diğerleri ise kendi ışıklarını arkadaşlarını bulmak için kullanır.",
      "Karanlık okyanus dipleri, parlayan yıldızlarla dolu bir gece gökyüzü gibi rengarenk ışıltılarla doludur."
    ],
    questions: [
      {
        id: "g4-q7-1",
        type: "multiple_choice",
        question: "Derin deniz canlılarının kendi ışıklarını üretmesine ne ad verilir?",
        options: ["Fotosentez", "Biyolüminesans", "Radyasyon", "Termal enerji"],
        correctAnswer: 1,
        explanation: "Canlıların kimyasal yolla ışık yaymasına biyolüminesans denir."
      },
      {
        id: "g4-q7-2",
        type: "multiple_choice",
        question: "Fener balığı başındaki ışıklı uzantıyı hangi amaçla kullanır?",
        options: ["Yolu aydınlatıp kitap okumak için", "Avlarını kandırıp kendine çekmek için", "Deniz suyunu ısıtmak için", "Yüzme hızını artırmak için"],
        correctAnswer: 1,
        explanation: "Işıklı uzantısıyla karanlıkta avları kendine doğru çeker."
      },
      {
        id: "g4-q7-3",
        type: "multiple_choice",
        question: "Bu metinden çıkarılacak temel sonuç nedir?",
        options: [
          "Karanlıkta hiçbir canlı yaşayamaz.",
          "Canlılar en zorlu doğa koşullarına bile inanılmaz yöntemlerle uyum sağlayabilir.",
          "Okyanusların derinlikleri bomboştur.",
          "Bütün balıklar elektrik çarpar."
        ],
        correctAnswer: 1,
        explanation: "Zorlu derinlik koşullarına rağmen canlıların geliştirdiği biyolojik adaptasyon vurgulanmaktadır."
      }
    ]
  },
  {
    id: "g4-story-8",
    levelNumber: 8,
    title: "Görünmez Kalkanımız: Ozon Tabakası",
    category: "Doğa & Çevre",
    iconEmoji: "🛡️",
    synopsis: "Dünya'yı Güneş'in yakıcı morötesi ışınlarından koruyan atmosferik koruma kalkanı.",
    wordCount: 184,
    targetSecondsStandard: 80,
    targetSecondsSpeedMaster: 50,
    difficulty: "Orta",
    rewardCoins: 55,
    vocabulary: [
      { word: "Ultraviyole", meaning: "Gözle görülmeyen, deriye zarar verebilen yüksek enerjili morötesi ışınlar." },
      { word: "Stratosfer", meaning: "Atmosferin yerden 15-50 km yükseklikteki koruyucu katmanı." },
      { word: "Sera Gazı", meaning: "Isıyı tutarak küresel ısınmaya neden olan gazlar." }
    ],
    paragraphs: [
      "Güneşli bir yaz gününde açık havada oynamayı hepimiz çok severiz. Peki bizi Güneş'in zararlı morötesi (UV) ışınlarından neyin koruduğunu hiç düşündünüz mü?",
      "Dünya'mızın etrafında, stratosfer katmanında yer alan görünmez bir örtü vardır: Ozon tabakası. Bu tabaka, Güneş'ten gelen tehlikeli ışınları tıpkı bir güneş gözlüğü veya şemsiye gibi filtreler.",
      "Eğer ozon tabakası olmasaydı bitkilerin yaprakları kurur, denizlerdeki planktonlar ölür ve insanların göz ve cilt sağlığı büyük zarar görürdü.",
      "Yıllar önce deodorant ve klimalarda kullanılan zararlı gazlar nedeniyle bu kalkan incelmişti. Ancak tüm dünya ülkeleri bir araya gelerek zararlı kimyasalları yasakladı ve tabaka kendini onarmaya başladı. Bu başarı, birlik olunduğunda doğanın kurtarılabileceğini gösterir."
    ],
    questions: [
      {
        id: "g4-q8-1",
        type: "multiple_choice",
        question: "Ozon tabakasının gezegenimiz için en temel görevi nedir?",
        options: ["Yağmur yağdırmak", "Güneş'in zararlı ultraviyole ışınlarını filtrelemek", "Dünya'yı soğutmak", "Uzay gemilerini fırlatmak"],
        correctAnswer: 1,
        explanation: "Zararlı UV ışınlarını emip filtreleyerek canlıları korur."
      },
      {
        id: "g4-q8-2",
        type: "multiple_choice",
        question: "Ozon tabakasının incelmesine sebep olan zararlı gazlar için ne yapılmıştır?",
        options: ["Daha çok üretilmiştir", "Bütün dünya ülkeleri anlaşarak zararlı kimyasalları yasaklamıştır", "Görmezden gelinmiştir", "Sadece uzaya salınmıştır"],
        correctAnswer: 1,
        explanation: "Uluslararası çevre anlaşmalarıyla zararlı gazlar yasaklanmış ve tabaka iyileşmeye başlamıştır."
      },
      {
        id: "g4-q8-3",
        type: "multiple_choice",
        question: "Metnin ana fikri aşağıdakilerden hangisidir?",
        options: [
          "Güneş ışığı her zaman zararlıdır.",
          "İnsanlar doğayı korumak için el ele verdiğinde küresel çevre sorunlarını çözebilir.",
          "Klimalar asla çalıştırılmamalıdır.",
          "Ozon gazı solunmalıdır."
        ],
        correctAnswer: 1,
        explanation: "Küresel dayanışma ve çevre bilinci ile doğanın korunabileceği ana fikirdir."
      }
    ]
  }
];

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
