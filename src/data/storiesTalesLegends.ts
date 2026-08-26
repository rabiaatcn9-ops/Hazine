import { IslandStory } from "../types";

export const TALES_LEGENDS_STORIES: IslandStory[] = [
  {
    id: "tale-1",
    levelNumber: 28,
    title: "Konuşan Sihirli Aynanın Öğüdü",
    islandName: "28. Durak: Kristal Saray",
    theme: "castle",
    iconName: "Sparkles",
    colorScheme: {
      bg: "bg-purple-50",
      border: "border-purple-300",
      accent: "text-purple-900",
      badgeBg: "bg-purple-600",
      gradient: "from-purple-500 to-violet-700",
    },
    synopsis: "Dış görünüş yerine iyi bir kalbin ve yardımseverliğin gerçek güzellik olduğunu söyleyen sihirli ayna.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Masallar Ülkesi'nin genç prensesi Lale, her sabah odasındaki altın çerçeveli kristal aynaya bakıp 'Ayna ayna, söyle bana, dünyada benden daha güzeli var mı?' diye sorardı.",
      "Ayna bir gün gümüş bir parıltıyla konuşmaya başladı: 'Güzel prensesim! İpek elbiselerin ve altın tacın çok parlak; fakat az önce saray kapısındaki yaşlı kuşa bir yudum su vermedin. Gerçek güzellik yüzdeki pırıltıda değil, kalpteki merhamettedir.'",
      "Lale bu sözlerden çok etkilendi. Hemen bahçeye koşup minik kuşa su verdi ve köydeki çocuklara kitaplar dağıttı. Aynaya tekrar baktığında kalbindeki huzurun yüzüne yansıdığını ve gerçek güzelliğe ulaştığını gördü."
    ],
    vocabulary: [
      { word: "Merhamet", meaning: "Bir canlının acısına, üzüntüsüne üzülüp ona sevgiyle yardım etme duygusu.", exampleSentence: "Yaralı kediye merhametle süt veren çocuk herkesin takdirini kazandı." },
      { word: "Kristal", meaning: "Çok berrak, pürüzsüz ve ışığı göz alıcı şekilde yansıtan parlak cam veya maden.", exampleSentence: "Kristal avizeden odaya rengarenk ışıklar saçılıyordu." },
      { word: "Huzur", meaning: "Gönül rahatlığı, içsel dinginlik ve mutluluk hali.", exampleSentence: "İyilik yapan insanın kalbi derin bir huzurla dolar." }
    ],
    questions: [
      {
        id: "tale1_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Sihirli aynaya göre gerçek güzellik nerede saklıdır?",
        options: ["A) İpek elbiselerde", "B) Kalpteki merhamet ve iyilikte", "C) Altın taçta"],
        correctAnswer: 1,
        explanation: "Ayna gerçek güzelliğin kalpteki merhamette olduğunu söylemiştir.",
        clueSentence: "'Gerçek güzellik yüzdeki pırıltıda değil, kalpteki merhamettedir.'"
      },
      {
        id: "tale1_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Prenses Lale aynanın sözlerinden sonra ne yaptı?",
        options: ["A) Saraydan kaçtı", "B) Bahçedeki kuşa su verip köydeki çocuklara kitaplar dağıttı", "C) Aynayı kırdı"],
        correctAnswer: 1,
        explanation: "Kuşa su vermiş ve çocuklara kitap dağıtmıştır.",
        clueSentence: "Hemen bahçeye koşup minik kuşa su verdi ve köydeki çocuklara kitaplar dağıttı."
      },
      {
        id: "tale1_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu masalın ana fikri nedir?",
        options: ["A) İnsanı gerçekten güzel ve değerli kılan şey dış görünüş değil, iyi ahlak ve merhamettir", "B) Aynalarla hiç konuşulmaz", "C) Sadece prensesler iyilik yapar"],
        correctAnswer: 0,
        explanation: "İç güzellik ve merhamet ana temadır.",
        clueSentence: "...kalbindeki huzurun yüzüne yansıdığını ve gerçek güzelliğe ulaştığını gördü."
      },
      {
        id: "tale1_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Başkalarına sevgi ve şefkatle acıyıp yardım etme duygusuna ne denir?",
        options: ["A) Öfke", "B) Merhamet", "C) Kıskançlık"],
        correctAnswer: 1,
        explanation: "Yardım ve şefkat duygusuna merhamet denir.",
        clueSentence: "...kalpteki merhamettedir."
      }
    ],
    rewardChest: {
      coins: 170,
      gemType: "amethyst",
      gemName: "Gönül Kristali",
      gemColor: "#9333ea",
      badgeTitle: "Merhamet Elçisi",
      badgeIcon: "Sparkles",
      secretLore: "Kalbindeki iyilik tüm dünyayı aydınlatan en güçlü ışıktır!"
    }
  },
  {
    id: "tale-2",
    levelNumber: 29,
    title: "Bulutların Üstündeki Sevimli Dev",
    islandName: "29. Durak: Bulut Krallığı",
    theme: "space",
    iconName: "Cloud",
    colorScheme: {
      bg: "bg-sky-50",
      border: "border-sky-300",
      accent: "text-sky-900",
      badgeBg: "bg-sky-600",
      gradient: "from-sky-400 to-blue-600",
    },
    synopsis: "Gök gürültüsünün devin öfkesi değil, bulut bahçesinde oynadığı neşeli tambur oyunu olduğunu öğrenen Kaan.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Küçük Kaan her şimşek çaktığında ve gök gürlediğinde bulutların üstünde korkunç bir canavar olduğunu sanır, yorganın altına saklanırdı. Bir gece rüyasında büyülü bir gökkuşağı merdiveni tırmanıp bulutların üstüne çıktı.",
      "Orada kocaman ama pamuk gibi yumuşak kalpli dev Tombo yaşıyordu. Tombo elindeki yumuşak tokmakla bulut tamburuna vuruyor ve 'Hadi yağmur damlaları, kuruyan tarlalara neşeyle düşün!' diye şarkı söylüyordu.",
      "Dev Tombo Kaan'a çilekli bulut pamuğu ikram etti. Kaan gök gürültüsünün doğanın uyanış şarkısı olduğunu anladı ve bir daha fırtınalardan hiç korkmadı."
    ],
    vocabulary: [
      { word: "Tambur", meaning: "Üzerine gerilmiş deri veya zar bulunan, tokmakla çalınan vurmalı çalgı (Davul türü).", exampleSentence: "Bulutların üstündeki dev neşeyle tamburunu çalıyordu." },
      { word: "Tokmak", meaning: "Davul, tambur veya çan çalmak için kullanılan ucu yuvarlak sopa.", exampleSentence: "Tokmak davula vurdukça coşkulu bir ritim yükseldi." },
      { word: "Uyanış", meaning: "Uykudan çıkma, canlanma, yeniden hayat bulma hali.", exampleSentence: "İlkbahar yağmurlarıyla doğa büyük bir uyanışa geçti." }
    ],
    questions: [
      {
        id: "tale2_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Dev Tombo bulut tamburunu ne için çalıyordu?",
        options: ["A) İnsanları korkutmak için", "B) Yağmur damlalarını tarlalara çağırmak için", "C) Uyumak için"],
        correctAnswer: 1,
        explanation: "Yağmur damlalarını neşeyle kuruyan tarlalara çağırmak için çalıyordu.",
        clueSentence: "'Hadi yağmur damlaları, kuruyan tarlalara neşeyle düşün!' diye şarkı söylüyordu."
      },
      {
        id: "tale2_q2",
        type: "multiple_choice",
        category: "Karakter Analizi",
        question: "Dev Tombo'nun gerçek karakteri nasıldı?",
        options: ["A) Korkunç ve öfkeli", "B) Yumuşak kalpli, sevecen ve neşeli", "C) Çok tembel"],
        correctAnswer: 1,
        explanation: "Dev Tombo pamuk gibi yumuşak kalpli ve neşelidir.",
        clueSentence: "...kocaman ama pamuk gibi yumuşak kalpli dev Tombo yaşıyordu."
      },
      {
        id: "tale2_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayenin ana düşüncesi nedir?",
        options: ["A) Bilmediğimiz şeylerden korkmak yerine onları anlamaya çalışmalıyız", "B) Yağmurda asla dışarı çıkılmaz", "C) Rüyalar her zaman korkutucudur"],
        correctAnswer: 0,
        explanation: "Önyargılardan ve korkulardan arınma ana fikirdir.",
        clueSentence: "Kaan gök gürültüsünün doğanın uyanış şarkısı olduğunu anladı ve bir daha fırtınalardan hiç korkmadı."
      },
      {
        id: "tale2_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Davul veya tambur çalmak için kullanılan tahta çubuğa ne denir?",
        options: ["A) Tokmak", "B) Ok", "C) Fırça"],
        correctAnswer: 0,
        explanation: "Vurmalı çalgı sopasına tokmak denir.",
        clueSentence: "...elindeki yumuşak tokmakla bulut tamburuna vuruyor..."
      }
    ],
    rewardChest: {
      coins: 175,
      gemType: "diamond",
      gemName: "Bulut İncisi",
      gemColor: "#38bdf8",
      badgeTitle: "Cesur Düşçü",
      badgeIcon: "Cloud",
      secretLore: "Korkularını anlayışla yenen cesur bir kaşifsin!"
    }
  },
  {
    id: "tale-3",
    levelNumber: 30,
    title: "İyilik Yapan Balıkçı ve Altın Balık",
    islandName: "30. Durak: Altın Gölet",
    theme: "coral",
    iconName: "Fish",
    colorScheme: {
      bg: "bg-cyan-50",
      border: "border-cyan-300",
      accent: "text-cyan-900",
      badgeBg: "bg-cyan-600",
      gradient: "from-cyan-500 to-teal-700",
    },
    synopsis: "Ağına takılan altın pullu küçük balığı kıyamayıp göle geri bırakan yaşlı balıkçının bereketi.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Küçük göl kenarında ahşap kulübesinde yaşayan yaşlı balıkçı Hasan Dede, tuttuğu balıkları köydeki yoksul komşularıyla paylaşırdı. Bir akşam oltasına pulları saf altından parıldayan küçük bir balık takıldı.",
      "Altın balık insan sesiyle dile geldi: 'Ey iyi kalpli dede! Beni göle geri bırakırsan sana gölün altındaki tüm inci ve mercanları veririm.' Hasan Dede gülümsedi: 'Benim altına ihtiyacım yok küçük balık, senin canın özgürce yüzmeye değer.' diyerek balığı hemen suya bıraktı.",
      "Ertesi sabah göl kenarındaki bahçesinde hiç solmayan şifalı meyve ağaçları filizlendi. Hasan Dede köydeki bütün hastalara bu meyvelerden dağıttı. Karşılıksız yapılan iyilik, evrene atılan en bereketli tohumdur."
    ],
    vocabulary: [
      { word: "Bereket", meaning: "Bollaşma, çoğalma, tükenmez bolluk ve verimlilik.", exampleSentence: "İyilik ve cömertlik haneye bereket getirir." },
      { word: "Filizlenmek", meaning: "Tohumun topraktan sürgün verip yeşermeye başlaması.", exampleSentence: "Bahar gelince fidanlar taze yeşil yapraklarla filizlendi." },
      { word: "Karşılıksız", meaning: "Hiçbir menfaat veya çıkar beklemeden, sadece iyilik için yapılan.", exampleSentence: "Anne sevgisi dünyadaki en karşılıksız ve saf duygudur." }
    ],
    questions: [
      {
        id: "tale3_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Hasan Dede altın balığı neden suya geri bıraktı?",
        options: ["A) Balığın canına ve özgürlüğüne saygı duyduğu için", "B) Balık çok ağır olduğu için", "C) Balığı beğenmediği için"],
        correctAnswer: 0,
        explanation: "Hasan Dede karşılıksız merhamet gösterip özgürlüğüne değer vermiştir.",
        clueSentence: "'Benim altına ihtiyacım yok küçük balık, senin canın özgürce yüzmeye değer.'"
      },
      {
        id: "tale3_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Ertesi sabah bahçede ne filizlendi?",
        options: ["A) Altın sikkeler", "B) Hiç solmayan şifalı meyve ağaçları", "C) Taş heykeller"],
        correctAnswer: 1,
        explanation: "Bahçede şifalı meyve ağaçları yetişmiştir.",
        clueSentence: "...bahçesinde hiç solmayan şifalı meyve ağaçları filizlendi."
      },
      {
        id: "tale3_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu masalın ana fikri nedir?",
        options: ["A) Karşılık beklemeden yapılan içten iyilikler en büyük bereketi doğurur", "B) Balık tutmamak gerekir", "C) Altınlar her zaman saklanmalıdır"],
        correctAnswer: 0,
        explanation: "Karşılıksız iyiliğin değeri ana fikirdir.",
        clueSentence: "Karşılıksız yapılan iyilik, evrene atılan en bereketli tohumdur."
      },
      {
        id: "tale3_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Tohumun topraktan sürgün verip yeşermesine ne denir?",
        options: ["A) Filizlenmek", "B) Solmak", "C) Kurumak"],
        correctAnswer: 0,
        explanation: "Tohumun sürmesine filizlenmek denir.",
        clueSentence: "...şifalı meyve ağaçları filizlendi."
      }
    ],
    rewardChest: {
      coins: 180,
      gemType: "gold_crown",
      gemName: "Altın Balık Pulu",
      gemColor: "#eab308",
      badgeTitle: "Gönlü Zengin",
      badgeIcon: "Fish",
      secretLore: "Karşılık beklemeden iyilik yapan yüce bir bilgesin!"
    }
  },
  {
    id: "tale-4",
    levelNumber: 31,
    title: "Uçan Halı ile Anadolu Turu",
    islandName: "31. Durak: Masal Diyarı",
    theme: "temple",
    iconName: "Map",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      accent: "text-amber-900",
      badgeBg: "bg-amber-600",
      gradient: "from-amber-500 to-red-700",
    },
    synopsis: "Dededen kalma motifli halıyla Kapadokya peri bacaları ve Pamukkale travertenleri üzerinde uçan Kerem.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Kerem, dedesinin tavan arasındaki eski sandıkta el dokuması rengarenk bir Hereke halısı buldu. Halının üzerine oturduğunda püskülleri havaya kalktı ve halı rüzgar gibi havalandı!",
      "Halı Kerem'i önce Kapadokya'nın masalsı Peri Bacaları'nın üzerinden geçirdi. Ardından bembeyaz pamuk kalelerine benzeyen Pamukkale travertenlerinin üzerinde süzüldü. Kerem gökyüzünden güzel vatanının tarihi ve doğal güzelliklerini hayranlıkla izledi.",
      "Halı usulca eve indiğinde Kerem defterini açıp gördüğü yerlerin resmini çizdi. Ülkemiz her köşesi ayrı bir masal olan eşsiz bir cennetti."
    ],
    vocabulary: [
      { word: "Peri bacası", meaning: "Rüzgar ve sel sularının volkanik tüfleri aşındırmasıyla oluşan kule biçimli şapkalı doğal kaya oluşumu.", exampleSentence: "Kapadokya'daki peri bacaları tüm dünyanın hayran kaldığı bir doğa harikasıdır." },
      { word: "Traverten", meaning: "Kalsiyum içeren kaynak sularının çökelmesiyle oluşan basamaklı beyaz kayaçlar.", exampleSentence: "Pamukkale travertenleri bembeyaz basamaklarıyla bir pamuk dağını andırır." },
      { word: "Motif", meaning: "Halı, kilim veya kumaşlara işlenen geleneksel süsleme deseni.", exampleSentence: "Dokunan kilimdeki lale motifleri çok zarifti." }
    ],
    questions: [
      {
        id: "tale4_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Uçan halı Kerem'i ilk olarak hangi doğa harikasına götürdü?",
        options: ["A) Kapadokya Peri Bacaları'na", "B) Karadeniz yaylalarına", "C) Çöl vahalarına"],
        correctAnswer: 0,
        explanation: "Halı önce Kapadokya'ya uçmuştur.",
        clueSentence: "Halı Kerem'i önce Kapadokya'nın masalsı Peri Bacaları'nın üzerinden geçirdi."
      },
      {
        id: "tale4_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Pamukkale travertenleri gökyüzünden neye benziyordu?",
        options: ["A) Bembeyaz pamuk kalelerine", "B) Yeşil çimlere", "C) Derin vadilere"],
        correctAnswer: 0,
        explanation: "Bembeyaz pamuk kalelerine benzetilmiştir.",
        clueSentence: "Ardından bembeyaz pamuk kalelerine benzeyen Pamukkale travertenlerinin üzerinde süzüldü."
      },
      {
        id: "tale4_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Ülkemiz eşsiz doğal ve tarihi güzellikleriyle tanınması ve korunması gereken bir cennettir", "B) Halılar uçamaz", "C) Resim çizmek zordur"],
        correctAnswer: 0,
        explanation: "Vatanımızın doğal güzelliklerini tanıma ve koruma bilinci ana fikirdir.",
        clueSentence: "Ülkemiz her köşesi ayrı bir masal olan eşsiz bir cennetti."
      },
      {
        id: "tale4_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Kapadokya'da rüzgarın aşındırmasıyla oluşan kule biçimli kayalara ne ad verilir?",
        options: ["A) Peri bacası", "B) Dağ sırtı", "C) Çakıl taşı"],
        correctAnswer: 0,
        explanation: "Kapadokya oluşumlarına peri bacası denir.",
        clueSentence: "...Kapadokya'nın masalsı Peri Bacaları'nın üzerinden..."
      }
    ],
    rewardChest: {
      coins: 180,
      gemType: "ruby",
      gemName: "Anadolu Yakutu",
      gemColor: "#e11d48",
      badgeTitle: "Vatan Kaşifi",
      badgeIcon: "Map",
      secretLore: "Güzel yurdumuzun tüm masalsı güzelliklerini keşfettin!"
    }
  },
  {
    id: "tale-5",
    levelNumber: 32,
    title: "Orman Perisi ve Kuruyan Nehir",
    islandName: "32. Durak: Zümrüt Şelalesi",
    theme: "forest",
    iconName: "Droplet",
    colorScheme: {
      bg: "bg-emerald-50",
      border: "border-emerald-300",
      accent: "text-emerald-900",
      badgeBg: "bg-emerald-600",
      gradient: "from-emerald-500 to-teal-800",
    },
    synopsis: "Nehrin kaynağını tıkayan taşları el birliğiyle temizleyip ormana can suyunu kavuşturan hayvanlar.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Zümrüt Ormanı'nın neşeli nehri aniden akmaz oldu. Ağaçlar susuzluktan boyunlarını büktü, ceylanlar çaresizce nehri aradı. Orman perisi Defne, kanatlarını çırparak dağın zirvesindeki su kaynağına uçtu.",
      "Büyük bir kaya kayması sonucu devasa taşların nehrin ağzını tıkadığını gördü. Tek başına o koca kayaları kıpırdatması imkansızdı. Defne ormandaki ayılara, geyiklere ve çalışkan kunduzlara haber verdi.",
      "Kunduzlar ağaç dallarıyla kaldıraç yaptı, ayılar ve geyikler güçlerini birleştirdi. Taşlar kenara çekilince berrak su coşkuyla çağladı. Doğa, bütün canlılar el ele verince yeniden hayat buldu."
    ],
    vocabulary: [
      { word: "Kaldıraç", meaning: "Ağır yükleri az bir kuvvetle kaldırmaya yarayan basit fizik mekanizması (çubuk ve destek noktası).", exampleSentence: "Kunduzlar kalın dallarla kaldıraç yapıp kayayı yuvarladılar." },
      { word: "Çağlamak", meaning: "Suyun köpürerek, şırıldayarak ve coşkuyla gürül gürül akması.", exampleSentence: "Bahar gelince şelale coşkuyla çağlamaya başladı." },
      { word: "Can suyu", meaning: "Kurumak üzere olan bitkiye veya toprağa verilen hayat kurtarıcı ilk su.", exampleSentence: "Fidanlara dikildikten hemen sonra bolca can suyu verildi." }
    ],
    questions: [
      {
        id: "tale5_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Zümrüt Ormanı'ndaki nehir neden aniden akmaz olmuştu?",
        options: ["A) Kış geldiği için", "B) Kaya kayması sonucu dev taşlar su kaynağını tıkadığı için", "C) Nehir başka yöne aktığı için"],
        correctAnswer: 1,
        explanation: "Kaya kayması nehir ağzını tıkamıştır.",
        clueSentence: "Büyük bir kaya kayması sonucu devasa taşların nehrin ağzını tıkadığını gördü."
      },
      {
        id: "tale5_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Kunduzlar taşları kaldırmak için ne yaptılar?",
        options: ["A) Ağaç dallarıyla kaldıraç yaptılar", "B) Yuvalarına saklandılar", "C) Taşları kemirdiler"],
        correctAnswer: 0,
        explanation: "Dallardan kaldıraç mekanizması kurmuşlardır.",
        clueSentence: "Kunduzlar ağaç dallarıyla kaldıraç yaptı..."
      },
      {
        id: "tale5_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayenin ana düşüncesi nedir?",
        options: ["A) El birliği ve dayanışma en büyük zorlukları bile kolayca aşar", "B) Nehir kenarında yürünmez", "C) Kunduzlar yalnız yaşar"],
        correctAnswer: 0,
        explanation: "İş birliği ve doğayı koruma ana fikirdir.",
        clueSentence: "Doğa, bütün canlılar el ele verince yeniden hayat buldu."
      },
      {
        id: "tale5_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Suyun coşkuyla, köpürerek akmasına ne ad verilir?",
        options: ["A) Çağlamak", "B) Donmak", "C) Durulmak"],
        correctAnswer: 0,
        explanation: "Suyun coşkulu akışına çağlamak denir.",
        clueSentence: "Taşlar kenara çekilince berrak su coşkuyla çağladı."
      }
    ],
    rewardChest: {
      coins: 185,
      gemType: "emerald",
      gemName: "Şelale Zümrüdü",
      gemColor: "#10b981",
      badgeTitle: "Su Koruyucusu",
      badgeIcon: "Droplet",
      secretLore: "Kuruyan nehire can suyu veren yüce kalpli bir dostsun!"
    }
  },
  {
    id: "tale-6",
    levelNumber: 33,
    title: "Gizemli Taşın Üç Dileği",
    islandName: "33. Durak: Bilgelik Mağarası",
    theme: "cave",
    iconName: "Sparkles",
    colorScheme: {
      bg: "bg-indigo-50",
      border: "border-indigo-300",
      accent: "text-indigo-900",
      badgeBg: "bg-indigo-700",
      gradient: "from-indigo-600 to-purple-900",
    },
    synopsis: "Bulduğu dilek taşından bencil istekler yerine tüm köyün mutluluğunu dileyen bilge çocuk Mert.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Mert mağarada gezinirken gök mavisi parlayan sihirli bir dilek taşı buldu. Taş hafifçe titreşerek 'Sana üç dilek hakkı veriyorum ama dikkat et, dilediğin her şey kalbinin aynasıdır' dedi.",
      "Mert düşündü. Birinci dileğinde köydeki kurak tarlalar için bereketli yağmurlar istedi. İkinci dileğinde köy okuluna binlerce renkli kitap ve müzik aleti diledi. Üçüncü dileğinde ise yaşlıların ve hastaların şifa bulmasını istedi.",
      "Taş büyük bir ışık saçarak 'Kendin için hiçbir şey istemedin ama başkalarına dilediğin mutluluk sana kat kat geri dönecektir' dedi. Mert köyün en sevilen ve saygı duyulan genci oldu."
    ],
    vocabulary: [
      { word: "Bencil", meaning: "Yalnızca kendini düşünen, başkalarının ihtiyaçlarını önemsemeyen kimse.", exampleSentence: "Bencil olmak yerine arkadaşlarımızla paylaşmayı seçmeliyiz." },
      { word: "Şifa", meaning: "Hastalıktan kurtulma, iyileşme, sağlık bulma hali.", exampleSentence: "Ihlamur çayı boğaz ağrısına çok iyi bir şifa kaynağıdır." },
      { word: "Kurak", meaning: "Yeterli yağış almayan, çorak ve susuz kalmış toprak.", exampleSentence: "Kurak tarlalar bahar yağmurlarıyla suya doydu." }
    ],
    questions: [
      {
        id: "tale6_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Mert dilek taşından ikinci dileğinde ne istedi?",
        options: ["A) Altın bir saray", "B) Köy okuluna binlerce kitap ve müzik aleti", "C) Oyuncak arabalar"],
        correctAnswer: 1,
        explanation: "Okul için kitaplar ve müzik aletleri istemiştir.",
        clueSentence: "İkinci dileğinde köy okuluna binlerce renkli kitap ve müzik aleti diledi."
      },
      {
        id: "tale6_q2",
        type: "multiple_choice",
        category: "Karakter Analizi",
        question: "Mert'in dileklerinden yola çıkarak onun hakkında ne söylenebilir?",
        options: ["A) Çok cömert, yardımsever ve diğergam bir çocuktur", "B) Çok bencildir", "C) Kitapları hiç sevmez"],
        correctAnswer: 0,
        explanation: "Mert başkalarını düşünen cömert bir çocuktur.",
        clueSentence: "Kendin için hiçbir şey istemedin ama başkalarına dilediğin mutluluk sana kat kat geri dönecektir..."
      },
      {
        id: "tale6_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Başkalarının mutluluğu ve iyiliği için çalışmak insanın kendi hayatına da en büyük mutluluğu getirir", "B) Dilek taşları her yerdedir", "C) Mağaralara gidilmemelidir"],
        correctAnswer: 0,
        explanation: "Başkalarına iyilik yapmanın insana kattığı değer ana fikirdir.",
        clueSentence: "...başkalarına dilediğin mutluluk sana kat kat geri dönecektir..."
      },
      {
        id: "tale6_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Hastalıktan kurtulup sağlığa kavuşmaya ne denir?",
        options: ["A) Şifa", "B) Yara", "C) Dert"],
        correctAnswer: 0,
        explanation: "İyileşmeye şifa denir.",
        clueSentence: "...yaşlıların ve hastaların şifa bulmasını istedi."
      }
    ],
    rewardChest: {
      coins: 190,
      gemType: "diamond",
      gemName: "Bilgelik Safiri",
      gemColor: "#6366f1",
      badgeTitle: "Yüce Gönüllü",
      badgeIcon: "Sparkles",
      secretLore: "Başkalarına dilediğin her güzellik senin kalbinde yeşerir!"
    }
  },
  {
    id: "tale-7",
    levelNumber: 34,
    title: "Şarkı Söyleyen Sihirli Kaval",
    islandName: "34. Durak: Ezgiler Tepesi",
    theme: "forest",
    iconName: "Music",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      accent: "text-amber-900",
      badgeBg: "bg-amber-600",
      gradient: "from-amber-400 to-yellow-700",
    },
    synopsis: "Çaldığı tatlı ezgilerle ormandaki küskün hayvanları barıştıran çoban kızı Elif'in kavalı.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Ezgiler Tepesi'nde koyunlarını otlatan küçük çoban kızı Elif, fındık dalından oyduğu kavalını üflerdi. Bu kaval sıradan bir çalgı değildi; Elif'in kalbindeki sevgi notalara döküldükçe ormandaki tüm kuşlar dallara konup susardı.",
      "Bir gün ormandaki iki dost ayı küçük bir armut yüzünden tartışıp birbirlerine küsmüştü. Elif hemen kavalını dudaklarına götürdü ve dostluğun sıcaklığını anlatan tatlı bir ezgi çaldı.",
      "Müziğin huzur verici melodisi ayıları sakinleştirdi. Birbirlerine sarılıp armudu ikiye böldüler. Güzel bir müzik ve tatlı dil, en sert kalpleri bile yumuşatan sihirli bir köprüydü."
    ],
    vocabulary: [
      { word: "Ezgi", meaning: "Belli bir kurala göre düzenlenmiş, kulağa hoş gelen müzik parçası, melodi.", exampleSentence: "Kavalın hüzünlü ve tatlı ezgisi tüm vadiye yayıldı." },
      { word: "Kaval", meaning: "Genellikle çobanların çaldığı, tahtadan yapılan üflemeli geleneksel çalgı.", exampleSentence: "Çoban tepeye oturup kavalıyla yanık türküler çaldı." },
      { word: "Melodi", meaning: "Seslerin birbiri ardınca kulağa ahenkli gelecek şekilde dizilmesi.", exampleSentence: "Piyanodan yükselen neşeli melodi herkesi mutlu etti." }
    ],
    questions: [
      {
        id: "tale7_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Elif kavalını hangi ağacın dalından oymuştu?",
        options: ["A) Çam dalından", "B) Fındık dalından", "C) Meşe dalından"],
        correctAnswer: 1,
        explanation: "Metinde fındık dalından oyduğu yazmaktadır.",
        clueSentence: "...fındık dalından oyduğu kavalını üflerdi."
      },
      {
        id: "tale7_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "İki ayı ne yüzünden tartışıp birbirine küsmüştü?",
        options: ["A) Küçük bir armut yüzünden", "B) Bal peteği yüzünden", "C) Mağara yüzünden"],
        correctAnswer: 0,
        explanation: "Küçük bir armut yüzünden tartışmışlardır.",
        clueSentence: "Bir gün ormandaki iki dost ayı küçük bir armut yüzünden tartışıp..."
      },
      {
        id: "tale7_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayenin ana düşüncesi nedir?",
        options: ["A) Sanat, tatlı dil ve anlayış anlaşmazlıkları çözen en güzel barış yoludur", "B) Armutlar hiç paylaşılmaz", "C) Kaval sadece geceleri çalınır"],
        correctAnswer: 0,
        explanation: "Tatlı dil ve sanatın birleştirici gücü ana fikirdir.",
        clueSentence: "Güzel bir müzik ve tatlı dil, en sert kalpleri bile yumuşatan sihirli bir köprüydü."
      },
      {
        id: "tale7_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Kulağa hoş gelen düzenli ses dizisine, melodiye ne ad verilir?",
        options: ["A) Ezgi", "B) Gürültü", "C) Çığlık"],
        correctAnswer: 0,
        explanation: "Kulağa hoş gelen sese ezgi denir.",
        clueSentence: "...dostluğun sıcaklığını anlatan tatlı bir ezgi çaldı."
      }
    ],
    rewardChest: {
      coins: 195,
      gemType: "sapphire",
      gemName: "Armoni Safiri",
      gemColor: "#06b6d4",
      badgeTitle: "Barış Ozanı",
      badgeIcon: "Music",
      secretLore: "Tatlı dilin ve sevginle kırık kalpleri birleştirdin!"
    }
  },
  {
    id: "tale-8",
    levelNumber: 35,
    title: "Gökkuşağının Bittiği Yer",
    islandName: "35. Durak: Renkler Vadisi",
    theme: "space",
    iconName: "Sun",
    colorScheme: {
      bg: "bg-pink-50",
      border: "border-pink-300",
      accent: "text-pink-900",
      badgeBg: "bg-pink-600",
      gradient: "from-pink-500 to-purple-600",
    },
    synopsis: "Gökkuşağının ucunda altın küpü değil, doğanın tüm renklerini boyayan sevgi fırçasını bulan iki kardeş.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Ece ve Arda, yağmur dindikten sonra gökyüzünü saran kocaman yedi renkli gökkuşağını gördüler. Köydeki masallara göre gökkuşağının bittiği yerde büyük bir hazine gizliydi.",
      "El ele verip tepeleri aştılar. Gökkuşağının tepeye değdiği noktaya ulaştıklarında parıldayan bir altın küpü yerine, üzerinde 'Doğa Boyacısı' yazan ışıklı bir fırça ve şeffaf bir su kasesi buldular.",
      "Fırçayı suya batırıp solmuş bir çiçeğe dokundurduklarında yaprakları canlandı, kelebekler etraflarında uçuştu. Gerçek hazine altın değil, dünyayı güzelleştirebilme gücüydü."
    ],
    vocabulary: [
      { word: "Gökkuşağı", meaning: "Yağmur damlalarından geçen güneş ışınlarının kırılmasıyla gökte oluşan yedi renkli yay.", exampleSentence: "Yağmurdan sonra gökyüzünde beliren gökkuşağı herkesi büyüledi." },
      { word: "Şeffaf", meaning: "Arkasını net şekilde gösteren, ışığı tamamen geçiren, saydam olan.", exampleSentence: "Şeffaf cam kasedeki berrak su pırıl pırıl parlıyordu." },
      { word: "Canlanmak", meaning: "Yeniden hayat bulmak, dirilmek, dinçleşmek.", exampleSentence: "Su içen solgun çiçekler hemen canlandı." }
    ],
    questions: [
      {
        id: "tale8_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Ece ve Arda gökkuşağının bittiği yerde ne buldular?",
        options: ["A) Altın dolu bir çanta", "B) 'Doğa Boyacısı' yazan ışıklı bir fırça ve su kasesi", "C) Eski bir bisiklet"],
        correctAnswer: 1,
        explanation: "Doğa boyacısı fırçası ve kase bulmuşlardır.",
        clueSentence: "...'Doğa Boyacısı' yazan ışıklı bir fırça ve şeffaf bir su kasesi buldular."
      },
      {
        id: "tale8_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Fırçayı solmuş çiçeğe dokundurduklarında ne oldu?",
        options: ["A) Çiçek kurudu", "B) Yaprakları canlandı ve kelebekler uçuştu", "C) Hiçbir şey olmadı"],
        correctAnswer: 1,
        explanation: "Çiçek canlanıp tazelenmiştir.",
        clueSentence: "Fırçayı suya batırıp solmuş bir çiçeğe dokundurduklarında yaprakları canlandı..."
      },
      {
        id: "tale8_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayenin ana düşüncesi nedir?",
        options: ["A) Dünyayı güzelleştirmek, doğayı korumak ve canlandırmak en büyük hazinedir", "B) Yağmurda koşulmamalıdır", "C) Gökkuşakları tek renktir"],
        correctAnswer: 0,
        explanation: "Doğayı güzelleştirmenin gerçek zenginlik olduğu anlatılır.",
        clueSentence: "Gerçek hazine altın değil, dünyayı güzelleştirebilme gücüydü."
      },
      {
        id: "tale8_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Işığı geçiren, arkasını gösteren nesnelere ne ad verilir?",
        options: ["A) Şeffaf (Saydam)", "B) Mat", "C) Karanlık"],
        correctAnswer: 0,
        explanation: "Saydam maddelere şeffaf denir.",
        clueSentence: "...şeffaf bir su kasesi buldular."
      }
    ],
    rewardChest: {
      coins: 200,
      gemType: "diamond",
      gemName: "Gökkuşağı Prizması",
      gemColor: "#f43f5e",
      badgeTitle: "Renk Ustası",
      badgeIcon: "Sun",
      secretLore: "Doğanın tüm renklerini kalbinin sevgisiyle canlandırdın!"
    }
  },
  {
    id: "tale-9",
    levelNumber: 36,
    title: "Zümrüdüanka Kuşunun Tüyü",
    islandName: "36. Durak: Kaf Dağı Zirvesi",
    theme: "temple",
    iconName: "Feather",
    colorScheme: {
      bg: "bg-red-50",
      border: "border-red-300",
      accent: "text-red-900",
      badgeBg: "bg-red-600",
      gradient: "from-red-500 to-amber-700",
    },
    synopsis: "Zorlu Kaf Dağı'nı aşarak hasta annesi için efsanevi şifa tüyünü arayan cesur Sinan'ın azmi.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Masallarda anlatılan efsanevi Zümrüdüanka kuşu, Kaf Dağı'nın bulutları delen zirvesinde yaşardı. Genç Sinan, köydeki hasta annesine şifa getirebilmek için sırt çantasını alıp dik kayalıkları tırmandı.",
      "Yolda karşılaştığı susuz bir dağ keçisine matarasındaki son suyu paylaştı, üşüyen bir kartal yavrusunu montunun cebinde ısıttı. Zirveye ulaştığında Zümrüdüanka kuşu Sinan'ı altın sarısı kanatlarıyla karşıladı.",
      "Kuş, 'Sen dağdaki tüm canlılara merhamet gösterdin Sinan. İşte bu parlayan tüy annene şifa olacaktır' diyerek kanadından zümrüt rengi bir tüy bıraktı. Sinan eve döndü ve annesi sağlığına kavuştu."
    ],
    vocabulary: [
      { word: "Efsanevi", meaning: "Eski masal ve söylencelerde geçen, dilden dile anlatılan olağanüstü olay veya varlık.", exampleSentence: "Zümrüdüanka kuşu efsanevi bir şifa sembolüdür." },
      { word: "Matara", meaning: "Yolculukta su taşımak için kullanılan kapaklı korumalı su kabı.", exampleSentence: "Dağcı matarasından serin su içti." },
      { word: "Zirve", meaning: "Bir dağın ya da tepenin en yüksek noktası, doruk.", exampleSentence: "Dağın karlı zirvesine Türk bayrağını diktiler." }
    ],
    questions: [
      {
        id: "tale9_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Sinan Kaf Dağı'na ne için tırmandı?",
        options: ["A) Hasta annesine şifa tüyü getirmek için", "B) Fotoğraf çekmek için", "C) Manzarayı izlemek için"],
        correctAnswer: 0,
        explanation: "Hasta annesine şifa bulmak için tırmanmıştır.",
        clueSentence: "...köydeki hasta annesine şifa getirebilmek için sırt çantasını alıp dik kayalıkları tırmandı."
      },
      {
        id: "tale9_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Sinan yolda karşılaştığı canlılara nasıl davrandı?",
        options: ["A) Onlardan kaçtı", "B) Keçiye suyunu verdi, kartal yavrusunu ısıttı", "C) Onları korkuttu"],
        correctAnswer: 1,
        explanation: "Canlılara yardım edip merhamet göstermiştir.",
        clueSentence: "Yolda karşılaştığı susuz bir dağ keçisine matarasındaki son suyu paylaştı, üşüyen bir kartal yavrusunu montunun cebinde ısıttı."
      },
      {
        id: "tale9_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu masalın ana düşüncesi nedir?",
        options: ["A) Fedakarlık, anne sevgisi ve canlılara merhamet en aşılmaz dağları bile kolaylaştırır", "B) Dağlara tek başına gidilmez", "C) Kuşlar sadece yüksekte yaşar"],
        correctAnswer: 0,
        explanation: "Sevgi, fedakarlık ve merhametin gücü ana fikirdir.",
        clueSentence: "Sen dağdaki tüm canlılara merhamet gösterdin Sinan."
      },
      {
        id: "tale9_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Bir dağın en yüksek tepesine ne ad verilir?",
        options: ["A) Zirve (Doruk)", "B) Etek", "C) Ova"],
        correctAnswer: 0,
        explanation: "Dağın en tepesine zirve denir.",
        clueSentence: "...Kaf Dağı'nın bulutları delen zirvesinde yaşardı."
      }
    ],
    rewardChest: {
      coins: 200,
      gemType: "emerald",
      gemName: "Anka Zümrüdü",
      gemColor: "#059669",
      badgeTitle: "Kaf Dağı Fatihi",
      badgeIcon: "Feather",
      secretLore: "Fedakarlığın ve merhametinle Kaf Dağı'nın zirvesini fethettin!"
    }
  },
  {
    id: "tale-10",
    levelNumber: 37,
    title: "Kitapların Koruyucusu Masal Ejderhası",
    islandName: "37. Durak: Kitaplar Kalesi",
    theme: "castle",
    iconName: "BookOpen",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      accent: "text-amber-900",
      badgeBg: "bg-amber-700",
      gradient: "from-amber-600 to-yellow-800",
    },
    synopsis: "Alev yerine ağzından harfler ve kelimeler çıkaran, kütüphaneyi koruyan bilge ejderha Pıtır.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Eski kalenin kütüphanesinde yaşayan ejderha Pıtır, diğer masallardaki gibi alev püskürtmezdi. O kitap okudukça gövdesi pırıl pırıl parlar, ağzından havai fişek gibi rengarenk harfler dökülürdü.",
      "Köyün çocukları her hafta sonu Pıtır'ın yanına gelir, onun kanatları altında oturup yeni masallar okurlardı. Pıtır çocuklara 'Kitaplar insanı zaman ve mekan sınırlarının ötesine uçuran en güçlü kanatlardır' derdi.",
      "Çocuklar okudukları her kitapla yeni dünyalar keşfettiler ve kaleyi Masal Krallığı'nın en mutlu bilgi yuvasına dönüştürdüler. Okumak, dünyadaki en büyük sihirdi."
    ],
    vocabulary: [
      { word: "Mekan", meaning: "İçinde yaşanılan veya bulunulan yer, alan, yurt.", exampleSentence: "Kitap okurken bambaşka mekanlara yolculuk yaparız." },
      { word: "Püskürtmek", meaning: "Bir sıvıyı, gazı veya ateşi kuvvetli bir fışkırmayla dışarı savurmak.", exampleSentence: "Fıskiye bahçeye serin sular püskürttü." },
      { word: "Sihir", meaning: "Olağanüstü ve büyüleyici etki yaratan güç veya güzellik.", exampleSentence: "Kelimelerin büyülü ve sihirli bir anlatım gücü vardır." }
    ],
    questions: [
      {
        id: "tale10_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Ejderha Pıtır kitap okudukça ağzından ne dökülürdü?",
        options: ["A) Kara dumanlar", "B) Rengarenk parlayan harfler", "C) Su damlaları"],
        correctAnswer: 1,
        explanation: "Ağzından renkli harfler dökülmüştür.",
        clueSentence: "...ağzından havai fişek gibi rengarenk harfler dökülürdü."
      },
      {
        id: "tale10_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Pıtır'a göre insanı zamanın ve mekanın ötesine uçuran en güçlü kanat nedir?",
        options: ["A) Uçaklar", "B) Kitaplar", "C) Sihirli ayakkabılar"],
        correctAnswer: 1,
        explanation: "Kitapların insanı uçuran en güçlü kanat olduğu vurgulanır.",
        clueSentence: "'Kitaplar insanı zaman ve mekan sınırlarının ötesine uçuran en güçlü kanatlardır'..."
      },
      {
        id: "tale10_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Kitap okumak hayal gücümüzü zenginleştiren, bizi geliştiren en büyük sihirdir", "B) Ejderhalar sadece kalelerde yaşar", "C) Kütüphaneler geceleri kapalıdır"],
        correctAnswer: 0,
        explanation: "Kitap okumanın sınırsız gücü ana fikirdir.",
        clueSentence: "Okumak, dünyadaki en büyük sihirdi."
      },
      {
        id: "tale10_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "İçinde bulunulan yere, konuma ne ad verilir?",
        options: ["A) Mekan", "B) Sayfa", "C) Harf"],
        correctAnswer: 0,
        explanation: "Bulunulan yere mekan denir.",
        clueSentence: "...insanı zaman ve mekan sınırlarının ötesine..."
      }
    ],
    rewardChest: {
      coins: 210,
      gemType: "gold_crown",
      gemName: "Ejderha Bilgi Tacı",
      gemColor: "#d97706",
      badgeTitle: "Büyük Masal Bilgini",
      badgeIcon: "BookOpen",
      secretLore: "Tüm masal diyarlarının efendisi ve usta bir kitap kurdusun!"
    }
  }
];
