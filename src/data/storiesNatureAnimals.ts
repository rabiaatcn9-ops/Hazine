import { IslandStory } from "../types";

export const NATURE_ANIMAL_STORIES: IslandStory[] = [
  {
    id: "nature-1",
    levelNumber: 8,
    title: "Ormandaki Sevimli Sincap Fındık",
    islandName: "8. Durak: Fındık Korusu",
    theme: "forest",
    iconName: "Trees",
    colorScheme: {
      bg: "bg-emerald-50",
      border: "border-emerald-300",
      accent: "text-emerald-800",
      badgeBg: "bg-emerald-600",
      gradient: "from-emerald-500 to-green-700",
    },
    synopsis: "Kış için meşe palamudu toplayan minik sincap Fındık, ormanda kaybolan arkadaşına yardım eder.",
    readingTimeMinutes: 2,
    wordCount: 155,
    paragraphs: [
      "Sonbahar gelmiş, Fındık Korusu'ndaki ulu ağaçların yaprakları sapsarı ve turuncuya dönmüştü. Minik sincap Fındık, kış mevsiminde aç kalmamak için sabahın ilk ışıklarıyla meşe palamudu ve ceviz toplamaya başladı.",
      "Ağacın kovuğuna tam onuncu palamudu taşırken, çalıların arkasından hıçkırık sesleri duydu. Yaklaştığında, henüz uçmayı yeni öğrenen yavru serçe Cıvıl'ın yere düştüğünü ve kanadını hafifçe incittiğini gördü.",
      "Fındık hiç düşünmeden ceviz toplamayı bıraktı. Cıvıl'ı sırtına alarak güvenli bir ağaç dalına çıkardı ve ona taze orman yemişleri ikram etti. Akşam olunca annesi Cıvıl'ı buldu ve sincap Fındık'a teşekkür etti. Fındık, en büyük zenginliğin dostluk olduğunu bir kez daha anladı."
    ],
    vocabulary: [
      { word: "Kovuk", meaning: "Bir ağaç gövdesinde veya duvarda oluşmuş oyuk ve çukur alan.", exampleSentence: "Sincap topladığı kışlık cevizleri ağacın kovuğuna sakladı." },
      { word: "Palamut", meaning: "Meşe ağacının üzerinde kadeh biçiminde sert kabuğu olan meyvesi.", exampleSentence: "Sonbaharda yere dökülen meşe palamutları sincapların en sevdiği yiyecektir." },
      { word: "İkram", meaning: "Birine bir şeyi saygı veya sevgi gösterisi olarak sunma.", exampleSentence: "Misafirperver sincap arkadaşına taze yemişler ikram etti." }
    ],
    questions: [
      {
        id: "nat1_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Sincap Fındık sonbaharda sabah erkenden ne toplamaya başlamıştı?",
        options: ["A) Renkli çakıl taşları", "B) Meşe palamudu ve ceviz", "C) Kuru çiçek yaprakları"],
        correctAnswer: 1,
        explanation: "Metinde sincap Fındık'ın kış için meşe palamudu ve ceviz topladığı anlatılmaktadır.",
        clueSentence: "Minik sincap Fındık, kış mevsiminde aç kalmamak için sabahın ilk ışıklarıyla meşe palamudu ve ceviz toplamaya başladı."
      },
      {
        id: "nat1_q2",
        type: "multiple_choice",
        category: "Neden-Sonuç",
        question: "Fındık neden ceviz toplamayı bırakıp çalıların arkasına gitti?",
        options: ["A) Yağmur yağmaya başladığı için", "B) Çalıların arkasından ağlama sesleri duyduğu için", "C) Karnı çok acıktığı için"],
        correctAnswer: 1,
        explanation: "Fındık çalıların arkasından hıçkırık sesleri duyduğu için sesin geldiği yere gitmiştir.",
        clueSentence: "Ağacın kovuğuna tam onuncu palamudu taşırken, çalıların arkasından hıçkırık sesleri duydu."
      },
      {
        id: "nat1_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayenin vermek istediği en önemli öğüt nedir?",
        options: ["A) Yalnızca kendi işimizle ilgilenmeliyiz", "B) Zor durumda olanlara yardım etmek ve dostluk en büyük zenginliktir", "C) Kışın dışarı çıkmamak gerekir"],
        correctAnswer: 1,
        explanation: "Hikayenin ana fikri yardımlaşmanın ve dostluğun her şeyden değerli olduğudur.",
        clueSentence: "Fındık, en büyük zenginliğin dostluk olduğunu bir kez daha anladı."
      },
      {
        id: "nat1_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Ağaç gövdesinde oluşan oyuk ve çukur yere ne denir?",
        options: ["A) Yuva", "B) Kovuk", "C) Balkon"],
        correctAnswer: 1,
        explanation: "Ağaç gövdesindeki boşluğa kovuk denir.",
        clueSentence: "Ağacın kovuğuna tam onuncu palamudu taşırken..."
      }
    ],
    rewardChest: {
      coins: 100,
      gemType: "emerald",
      gemName: "Orman Zümrüdü",
      gemColor: "#10b981",
      badgeTitle: "Doğa Koruyucusu",
      badgeIcon: "Trees",
      secretLore: "Fındık Korusu'nun yeşil kalbi artık seninle atıyor!"
    }
  },
  {
    id: "nature-2",
    levelNumber: 9,
    title: "Dost Yunus Maviş ve Mercan Kayalığı",
    islandName: "9. Durak: Yunus Körfezi",
    theme: "coral",
    iconName: "Fish",
    colorScheme: {
      bg: "bg-cyan-50",
      border: "border-cyan-300",
      accent: "text-cyan-800",
      badgeBg: "bg-cyan-600",
      gradient: "from-cyan-500 to-blue-700",
    },
    synopsis: "Yunus Maviş, deniz dibindeki çöpleri temizleyerek deniz kaplumbağasını kurtarır.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Turkuaz rengi sularıyla ünlü Yunus Körfezi'nde yaşayan sevimli yunus Maviş, her sabah suyun yüzeyine sıçrayarak neşeli taklalar atardı. Körfezdeki tüm balıklar onun neşesine hayran kalırdı.",
      "Bir öğleden sonra Maviş, mercan kayalıklarının arasında sıkışıp kalmış yaşlı deniz kaplumbağası Tosbik'i gördü. Tosbik'in yüzgecine insanların denize attığı eski bir plastik poşet dolanmıştı ve kaplumbağa nefes almak için yukarı çıkamıyordu.",
      "Maviş hemen burnuyla plastik poşeti nazikçe gevşetip çıkardı. Tosbik rahat bir nefes alarak su yüzeyine çıktı. O günden sonra körfezdeki bütün canlılar el ele verip denizlerini temiz tutmaya söz verdiler."
    ],
    vocabulary: [
      { word: "Turkuaz", meaning: "Mavi ile yeşilin karışımından oluşan çok güzel bir açık deniz rengi.", exampleSentence: "Körfezin turkuaz sularında balıklar neşeyle yüzüyordu." },
      { word: "Yüzgeç", meaning: "Balıkların ve deniz canlılarının suda yüzmelerini sağlayan organ.", exampleSentence: "Kaplumbağa güçlü yüzgeçleriyle derin sulara doğru daldı." },
      { word: "Körfez", meaning: "Denizin karanın içine doğru sokulduğu korunaklı büyük koy.", exampleSentence: "Gemiler fırtınadan korunmak için sakin körfeze demir attı." }
    ],
    questions: [
      {
        id: "nat2_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Deniz kaplumbağası Tosbik'in yüzgecine ne dolanmıştı?",
        options: ["A) Ağır bir yosun yığını", "B) İnsanların denize attığı plastik poşet", "C) Küçük bir deniz kabuğu"],
        correctAnswer: 1,
        explanation: "Metinde Tosbik'in yüzgecine insanların denize attığı eski bir plastik poşetin dolandığı belirtilmektedir.",
        clueSentence: "Tosbik'in yüzgecine insanların denize attığı eski bir plastik poşet dolanmıştı..."
      },
      {
        id: "nat2_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Yunus Maviş sabahları ne yaparak gününü neşeyle geçirirdi?",
        options: ["A) Kumlarda uyuyarak", "B) Suyun yüzeyine sıçrayıp taklalar atarak", "C) Derin mağaralara saklanarak"],
        correctAnswer: 1,
        explanation: "Metinde Maviş'in su yüzeyine sıçrayarak neşeli taklalar attığı yazmaktadır.",
        clueSentence: "Maviş, her sabah suyun yüzeyine sıçrayarak neşeli taklalar atardı."
      },
      {
        id: "nat2_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metinden çıkarılacak çevre bilinci mesajı hangisidir?",
        options: ["A) Denizlere asla çöp atmamalı, deniz canlılarını korumalıyız", "B) Yalnızca kıyılarda yüzmeliyiz", "C) Deniz kaplumbağalarını beslememeliyiz"],
        correctAnswer: 0,
        explanation: "Metin deniz temizliğinin canlılar için hayati olduğunu öğretmektedir.",
        clueSentence: "O günden sonra körfezdeki bütün canlılar el ele verip denizlerini temiz tutmaya söz verdiler."
      },
      {
        id: "nat2_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Mavi ile yeşilin karışımı olan güzel deniz rengine ne ad verilir?",
        options: ["A) Turuncu", "B) Turkuaz", "C) Eflatun"],
        correctAnswer: 1,
        explanation: "Turkuaz mavi-yeşil tondur.",
        clueSentence: "Turkuaz rengi sularıyla ünlü Yunus Körfezi'nde..."
      }
    ],
    rewardChest: {
      coins: 110,
      gemType: "sapphire",
      gemName: "Okyanus İncisi",
      gemColor: "#0284c7",
      badgeTitle: "Deniz Kurtarıcısı",
      badgeIcon: "Fish",
      secretLore: "Deniz kaplumbağalarını ve yunusları koruyan gerçek bir deniz dostusun!"
    }
  },
  {
    id: "nature-3",
    levelNumber: 10,
    title: "Minik Karıncanın Büyük Azmi",
    islandName: "10. Durak: Karınca Tepesi",
    theme: "forest",
    iconName: "Bug",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      accent: "text-amber-800",
      badgeBg: "bg-amber-600",
      gradient: "from-amber-500 to-yellow-700",
    },
    synopsis: "Kendi boyundan büyük bir buğday tanesini yuvasına taşımaya çalışan karınca Çıtı'nın hikayesi.",
    readingTimeMinutes: 2,
    wordCount: 150,
    paragraphs: [
      "Geniş kır bahçesinde yaşayan minik karınca Çıtı, diğer karıncalardan daha küçüktü ama yüreği çok büyüktü. Bir sabah tarlanın kenarında kendi ağırlığının tam on katı olan sapsarı bir buğday tanesi buldu.",
      "Çıtı buğday tanesini sırtlamaya çalıştı fakat ilk denemede yuvarlanıp düştü. İkinci denemede yine başaramadı. Oradan geçen tembel çekirge, 'Boşuna uğraşma minik dostum, bu yük senin için fazla ağır!' diyerek güldü.",
      "Çıtı pes etmedi. Derin bir nefes alıp bacaklarını toprağa sağlamca bastı ve karınca kardeşlerine seslendi. Hep birlikte yükü paylaşıp buğdayı yuvaya taşıdılar. Birlik olunca aşılamayacak hiçbir engel yoktu."
    ],
    vocabulary: [
      { word: "Azim", meaning: "Bir işteki engelleri yenme konusundaki sarsılmaz kararlılık.", exampleSentence: "Öğrenci azimle çalışarak tüm soruları doğru cevapladı." },
      { word: "Pes etmek", meaning: "Karşılaşılan zorluklar karşısında mücadeleyi bırakmak, vazgeçmek.", exampleSentence: "Cesur sporcu yarışın sonuna kadar asla pes etmedi." },
      { word: "Birlik", meaning: "Aynı amaç için bir araya gelme, dayanışma içinde olma.", exampleSentence: "Birlikten kuvvet doğar sözünü karıncalar çok iyi bilirdi." }
    ],
    questions: [
      {
        id: "nat3_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Çıtı tarlanın kenarında ne buldu?",
        options: ["A) Kırmızı bir elma parçası", "B) Sapsarı bir buğday tanesi", "C) Kuru bir yaprak"],
        correctAnswer: 1,
        explanation: "Metinde Çıtı'nın sapsarı bir buğday tanesi bulduğu ifade edilmektedir.",
        clueSentence: "...kendi ağırlığının tam on katı olan sapsarı bir buğday tanesi buldu."
      },
      {
        id: "nat3_q2",
        type: "multiple_choice",
        category: "Karakter Analizi",
        question: "Çıtı'nın en belirgin kişilik özelliği aşağıdakilerden hangisidir?",
        options: ["A) Tembel ve sabırsız olması", "B) Azimli, kararlı ve pes etmeyen yapısı", "C) Her şeyden çabucak vazgeçmesi"],
        correctAnswer: 1,
        explanation: "Çıtı defalarca denemiş, pes etmemiş ve kardeşleriyle iş birliği yapmıştır.",
        clueSentence: "Çıtı pes etmedi. Derin bir nefes alıp bacaklarını toprağa sağlamca bastı..."
      },
      {
        id: "nat3_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayenin ana fikri hangi atasözümüzle en iyi açıklanır?",
        options: ["A) Birlikten kuvvet doğar", "B) Damlaya damlaya göl olur", "C) Sakla samanı gelir zamanı"],
        correctAnswer: 0,
        explanation: "Karıncaların el ele verip buğdayı taşıması 'Birlikten kuvvet doğar' atasözünü anlatır.",
        clueSentence: "Hep birlikte yükü paylaşıp buğdayı yuvaya taşıdılar. Birlik olunca aşılamayacak hiçbir engel yoktu."
      },
      {
        id: "nat3_q4",
        type: "multiple_choice",
        category: "5N1K",
        question: "Çıtı'ya 'Bu yük senin için çok ağır' diyerek gülen kimdir?",
        options: ["A) Bilge baykuş", "B) Tembel çekirge", "C) Uğur böceği"],
        correctAnswer: 1,
        explanation: "Tembel çekirge Çıtı'ya alaycı şekilde gülmüştür.",
        clueSentence: "Oradan geçen tembel çekirge, 'Boşuna uğraşma minik dostum...' diyerek güldü."
      }
    ],
    rewardChest: {
      coins: 110,
      gemType: "ruby",
      gemName: "Azim Yakutu",
      gemColor: "#ef4444",
      badgeTitle: "Çalışkan Kaşif",
      badgeIcon: "Bug",
      secretLore: "Karıncaların bitmeyen azmi ve dayanışma gücü seninle!"
    }
  },
  {
    id: "nature-4",
    levelNumber: 11,
    title: "Geceyi Aydınlatan Ateş Böceği Pırıltı",
    islandName: "11. Durak: Işıltılı Vadi",
    theme: "cave",
    iconName: "Sparkles",
    colorScheme: {
      bg: "bg-indigo-50",
      border: "border-indigo-300",
      accent: "text-indigo-900",
      badgeBg: "bg-indigo-600",
      gradient: "from-indigo-600 to-purple-800",
    },
    synopsis: "Kendi ışığını küçük bulan ateş böceği Pırıltı, karanlıkta kaybolan kirpi ailesine yol gösterir.",
    readingTimeMinutes: 2,
    wordCount: 155,
    paragraphs: [
      "Işıltılı Vadi'de geceleri binlerce ateş böceği gökyüzünde bir fener gibi dans ederdi. Minik ateş böceği Pırıltı ise gövdesindeki ışığı ay dedenin ve yıldızların yanında çok sönük bulur, kendini önemsiz hissederdi.",
      "Karanlık ve fırtınalı bir gece, gökyüzünü kalın kara bulutlar kapladı. Ne ay görünüyordu ne de tek bir yıldız. O sırada vadi tabanındaki dikenli kirpi ailesi karanlıkta yollarını kaybetmiş, yuvalarını bulamıyordu.",
      "Pırıltı hemen kirpilerin önüne süzüldü. Işığını olanca gücüyle parlatıp patikayı aydınlattı. Kirpi ailesi güvenle yuvasına ulaştı ve 'Senin minik ışığın bizim için hayat kurtardı!' dediler. Pırıltı her varlığın kendine has özel bir değeri olduğunu anladı."
    ],
    vocabulary: [
      { word: "Vadi", meaning: "İki dağ veya tepe arasında kalan, genellikle içinden akarsu geçen çukur alan.", exampleSentence: "Işıltılı vadi akşam olunca masalsı bir renge büründü." },
      { word: "Süzülmek", meaning: "Kanatlarını oynatmadan havada kayarak uçmak.", exampleSentence: "Kuşlar gökyüzünde rüzgarın yardımıyla usulca süzüldü." },
      { word: "Değer", meaning: "Bir şeyin ya da kişinin taşıdığı önem ve kıymet.", exampleSentence: "Her çocuğun kendine özel eşsiz bir değeri ve yeteneği vardır." }
    ],
    questions: [
      {
        id: "nat4_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Pırıltı hikayenin başında neden kendini önemsiz hissediyordu?",
        options: ["A) Uçamadığı için", "B) Kendi ışığını ay ve yıldızların yanında sönük bulduğu için", "C) Hiç arkadaşı olmadığı için"],
        correctAnswer: 1,
        explanation: "Pırıltı kendi ışığını gökyüzündeki ay ve yıldızların yanında zayıf görüyordu.",
        clueSentence: "Minik ateş böceği Pırıltı ise gövdesindeki ışığı ay dedenin ve yıldızların yanında çok sönük bulur..."
      },
      {
        id: "nat4_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Fırtınalı gecede kimler yollarını kaybetmişti?",
        options: ["A) Kirpi ailesi", "B) Tavşan kardeşler", "C) Ayı yavruları"],
        correctAnswer: 0,
        explanation: "Vadi tabanındaki dikenli kirpi ailesi karanlıkta kaybolmuştu.",
        clueSentence: "O sırada vadi tabanındaki dikenli kirpi ailesi karanlıkta yollarını kaybetmiş..."
      },
      {
        id: "nat4_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayenin ana düşüncesi nedir?",
        options: ["A) Küçük görünen iyilikler ve özellikler bile çok büyük farklar yaratabilir", "B) Geceleri dışarı çıkılmamalıdır", "C) Sadece büyük ışıklar faydalıdır"],
        correctAnswer: 0,
        explanation: "Herkesin kendine has bir değeri vardır ve küçük bir yardım bile çok büyüktür.",
        clueSentence: "Pırıltı her varlığın kendine has özel bir değeri olduğunu anladı."
      },
      {
        id: "nat4_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "İki dağ veya tepe arasında kalan uzun çukurluğa ne ad verilir?",
        options: ["A) Ada", "B) Vadi", "C) Körfez"],
        correctAnswer: 1,
        explanation: "İki tepe arasındaki çukur alana vadi denir.",
        clueSentence: "Işıltılı Vadi'de geceleri binlerce ateş böceği..."
      }
    ],
    rewardChest: {
      coins: 120,
      gemType: "diamond",
      gemName: "Gece Feneri Taşı",
      gemColor: "#818cf8",
      badgeTitle: "Işık Rehberi",
      badgeIcon: "Sparkles",
      secretLore: "Karanlıkta bile kendi ışığınla yolunu bulabilirsin!"
    }
  },
  {
    id: "nature-5",
    levelNumber: 12,
    title: "Yavru Ayı Bomi ve Bal Ormanı",
    islandName: "12. Durak: Petek Tepesi",
    theme: "forest",
    iconName: "Smile",
    colorScheme: {
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      accent: "text-yellow-900",
      badgeBg: "bg-yellow-600",
      gradient: "from-yellow-500 to-amber-700",
    },
    synopsis: "Arılara zarar vermeden orman çiçeklerinden şifa bulan yavru ayı Bomi'nin nezaket dersi.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Bal Ormanı'nda yaşayan sevimli yavru ayı Bomi, tatlı yiyeceklere bayılırdı. Ormandaki arıların yaptığı mis kokulu balı yemek için sabırsızlanıyordu. Fakat annesi ona her zaman 'Arıların evine asla hoyratça dokunma, onlara saygı göster' diye tembih ederdi.",
      "Bir gün ormandaki büyük palamut ağacında yeni bir petek gördü. Bomi peteğe zarar vermek yerine, arıların çok sevdiği dağ kekikleri ve kır çiçeklerini toplayıp kovanın yakınına bıraktı.",
      "Kraliçe arı, Bomi'nin bu nazik ve saygılı davranışını görünce çok mutlu oldu. Arılar fazla ballarından bir parça peteği Bomi için temiz bir meşe yaprağının üzerine bıraktılar. Bomi, nezaketin her kapıyı açan en tatlı anahtar olduğunu öğrendi."
    ],
    vocabulary: [
      { word: "Hoyratça", meaning: "Kaba, sert ve saygısız bir biçimde davranarak.", exampleSentence: "Çiçekleri hoyratça koparmak yerine onları sevgiyle koklamalıyız." },
      { word: "Nezaket", meaning: "Başkalarına karşı saygılı, kibar ve ince davranma tutumu.", exampleSentence: "Teşekkür etmek ve lütfen demek en güzel nezaket kurallarıdır." },
      { word: "Petek", meaning: "Arıların bal ve yumurta koymak için balmumundan yaptıkları altıgen gözler.", exampleSentence: "Altın sarısı bal petekten süzülüyordu." }
    ],
    questions: [
      {
        id: "nat5_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Bomi kovanın yanına ne bıraktı?",
        options: ["A) Taş ve çakıl parçaları", "B) Dağ kekikleri ve kır çiçekleri", "C) Soğuk kaynak suyu"],
        correctAnswer: 1,
        explanation: "Bomi arıların sevdiği dağ kekikleri ve kır çiçeklerini toplayıp bırakmıştır.",
        clueSentence: "...arıların çok sevdiği dağ kekikleri ve kır çiçeklerini toplayıp kovanın yakınına bıraktı."
      },
      {
        id: "nat5_q2",
        type: "multiple_choice",
        category: "Neden-Sonuç",
        question: "Kraliçe arı neden Bomi'ye bal ikram etti?",
        options: ["A) Bomi peteğe nazik ve saygılı davrandığı için", "B) Bomi kovanı salladığı için", "C) Kraliçe arı balı saklayamadığı için"],
        correctAnswer: 0,
        explanation: "Bomi'nin nazik davranışından dolayı kraliçe arı mutlu olmuş ve bal ikram etmiştir.",
        clueSentence: "Kraliçe arı, Bomi'nin bu nazik ve saygılı davranışını görünce çok mutlu oldu."
      },
      {
        id: "nat5_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayeden çıkaracağımız en güzel davranış nedir?",
        options: ["A) Doğadaki canlılara karşı kaba olmalıyız", "B) Nezaket, saygı ve doğaya uyum her zaman güzellik getirir", "C) Yalnızca bal yemeliyiz"],
        correctAnswer: 1,
        explanation: "Hikaye nezaket ve doğaya saygının önemini anlatır.",
        clueSentence: "Bomi, nezaketin her kapıyı açan en tatlı anahtar olduğunu öğrendi."
      },
      {
        id: "nat5_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Kibar, saygılı ve ince davranışlara ne ad verilir?",
        options: ["A) Nezaket", "B) Acelecilik", "C) Tembellik"],
        correctAnswer: 0,
        explanation: "Kibar ve saygılı olmaya nezaket denir.",
        clueSentence: "Bomi, nezaketin her kapıyı açan en tatlı anahtar olduğunu öğrendi."
      }
    ],
    rewardChest: {
      coins: 115,
      gemType: "gold_crown",
      gemName: "Altın Bal Kristali",
      gemColor: "#eab308",
      badgeTitle: "Nezaket Ustası",
      badgeIcon: "Smile",
      secretLore: "Nezaketle yaklaştığın her canlı sana sevgiyle karşılık verir!"
    }
  },
  {
    id: "nature-6",
    levelNumber: 13,
    title: "Penguen Piti'nin Buzul Dansı",
    islandName: "13. Durak: Buzul Koyu",
    theme: "space",
    iconName: "Snowflake",
    colorScheme: {
      bg: "bg-blue-50",
      border: "border-blue-300",
      accent: "text-blue-900",
      badgeBg: "bg-blue-600",
      gradient: "from-blue-400 to-sky-700",
    },
    synopsis: "Uçamasa da denizde bir balık gibi hızlı yüzen penguen Piti'nin kendi yeteneğini keşfetmesi.",
    readingTimeMinutes: 2,
    wordCount: 155,
    paragraphs: [
      "Bembeyaz buzullarla kaplı kutup diyarında yaşayan minik penguen Piti, gökyüzünde uçan martılara özenirdi. Kanatlarını çırpar ama bir türlü havalanamazdı. Bu yüzden zaman zaman üzülürdü.",
      "Bir gün buzulun kenarındaki fok dede Piti'ye gülümsedi ve 'Her canlının uçtuğu gökyüzü farklıdır küçük dostum. Sen bir de suyun içine dalmayı dene!' dedi.",
      "Piti kendini masmavi soğuk sulara bıraktı. O da ne? Kanatları adeta bir su altı pervanesi gibi çalıştı! Suyun altında inanılmaz taklalar attı, balıklardan bile hızlı yüzdü. Piti, kendi yeteneğinin denizde saklı olduğunu keşfetti ve mutlulukla buzun üstüne zıpladı."
    ],
    vocabulary: [
      { word: "Buzul", meaning: "Kutuplarda ve yüksek dağlarda yıl boyunca erimeyen devasa buz kütlesi.", exampleSentence: "Güneş ışığı beyaz buzulun üzerinde göz kamaştırıcı şekilde parlıyordu." },
      { word: "Özenmek", meaning: "Gördüğü bir şeye hayran kalıp onun gibi olmak istemek.", exampleSentence: "Kuşların özgürce uçuşuna özenen çocuk rüzgarda kollarını açtı." },
      { word: "Yetenek", meaning: "Bir kimsenin bir şeyi yapabilme konusundaki doğuştan gelen veya sonradan kazanılan gücü.", exampleSentence: "Her insanın keşfedilmeyi bekleyen farklı bir yeteneği vardır." }
    ],
    questions: [
      {
        id: "nat6_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Penguen Piti hikayenin başında kime özeniyordu?",
        options: ["A) Gökyüzünde uçan martılara", "B) Karda koşan kutup ayılarına", "C) Suda uyuyan balinalara"],
        correctAnswer: 0,
        explanation: "Piti uçamadığı için martılara özenmekteydi.",
        clueSentence: "minik penguen Piti, gökyüzünde uçan martılara özenirdi."
      },
      {
        id: "nat6_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Piti'ye 'Sen bir de suya dalmayı dene' tavsiyesini kim verdi?",
        options: ["A) Albatros kuşu", "B) Yaşlı fok dede", "C) Kutup tilkisi"],
        correctAnswer: 1,
        explanation: "Fok dede Piti'ye cesaret verip tavsiyede bulunmuştur.",
        clueSentence: "Bir gün buzulun kenarındaki fok dede Piti'ye gülümsedi..."
      },
      {
        id: "nat6_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayenin çocuklara verdiği en önemli ders nedir?",
        options: ["A) Başkalarına özenmek yerine kendi güçlü yönlerimizi ve yeteneklerimizi keşfetmeliyiz", "B) Yalnızca uçabilen canlılar başarılıdır", "C) Soğuk suya asla girmemeliyiz"],
        correctAnswer: 0,
        explanation: "Herkesin kendine has özel yetenekleri vardır.",
        clueSentence: "Piti, kendi yeteneğinin denizde saklı olduğunu keşfetti..."
      },
      {
        id: "nat6_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Kutuplarda ve yüksek dağlarda erimeyen büyük buz kütlelerine ne ad verilir?",
        options: ["A) Buzul", "B) Tepe", "C) Çöl"],
        correctAnswer: 0,
        explanation: "Kutuplardaki büyük buz kütlelerine buzul denir.",
        clueSentence: "Bembeyaz buzullarla kaplı kutup diyarında..."
      }
    ],
    rewardChest: {
      coins: 120,
      gemType: "diamond",
      gemName: "Kutup Kristali",
      gemColor: "#38bdf8",
      badgeTitle: "Buzul Yüzücüsü",
      badgeIcon: "Snowflake",
      secretLore: "Kendi yeteneklerini keşfettiğinde en derin denizleri bile aşarsın!"
    }
  },
  {
    id: "nature-7",
    levelNumber: 14,
    title: "Bilge Çınar Ağacının Sırrı",
    islandName: "14. Durak: Çınar Vadisi",
    theme: "forest",
    iconName: "Trees",
    colorScheme: {
      bg: "bg-emerald-50",
      border: "border-emerald-300",
      accent: "text-emerald-900",
      badgeBg: "bg-emerald-700",
      gradient: "from-emerald-600 to-teal-800",
    },
    synopsis: "Yüzlerce yıldır ormana gölge ve yuva olan bilge çınarın köklerindeki dayanışma sırrı.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Köyün arkasındaki tepede üç yüz yaşındaki ulu bir çınar ağacı yükselirdi. Köyün çocukları yaz sıcaklarında onun devasa gölgesinde kitap okur, dallarındaki salıncakta sallanırdı.",
      "Bir gün şiddetli bir fırtına koptu. Rüzgar öyle kuvvetliydi ki genç fidanlar eğilip bükülüyordu. Fakat koca çınar dimdik ayakta kaldı. Fırtına dindikten sonra çocuklar çınarın gövdesine sarılıp 'Nasıl bu kadar güçlü kalabiliyorsun?' diye sordular.",
      "Ağaç rüzgarın fısıltısıyla cevap verdi: 'Benim gücüm sadece gövdemde değil; toprağın metrelerce altına uzanan köklerimin diğer ağaçların kökleriyle kenetlenmesindedir. Birbirine bağlı olanları hiçbir fırtına yıkamaz!'"
    ],
    vocabulary: [
      { word: "Ulu", meaning: "Çok büyük, yüce, saygı uyandıran ve heybetli olan.", exampleSentence: "Köy meydanındaki ulu çınar yüzlerce yıldır ayaktaydı." },
      { word: "Kenetlenmek", meaning: "Birbirine sımsıkı bağlanmak, ayrılmayacak biçimde kenet oluşturmak.", exampleSentence: "Zor günlerde tüm millet birbirine sımsıkı kenetlendi." },
      { word: "Fidan", meaning: "Yeni dikilmiş, henüz çok genç ve ince ağaççık.", exampleSentence: "Bahçeye diktiğimiz elma fidanı ilkbaharda çiçek açtı." }
    ],
    questions: [
      {
        id: "nat7_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Çınar ağacı kaç yaşındaydı?",
        options: ["A) Elli", "B) Yüz", "C) Üç yüz"],
        correctAnswer: 2,
        explanation: "Metnin ilk cümlesinde ulu çınarın üç yüz yaşında olduğu belirtilmiştir.",
        clueSentence: "Köyün arkasındaki tepede üç yüz yaşındaki ulu bir çınar ağacı yükselirdi."
      },
      {
        id: "nat7_q2",
        type: "multiple_choice",
        category: "Neden-Sonuç",
        question: "Çınar ağacı şiddetli fırtınada neden yıkılmadan dimdik ayakta kaldı?",
        options: ["A) Kökleri toprağın altında diğer ağaçlarla kenetlendiği için", "B) Yaprakları çok ağır olduğu için", "C) Rüzgar ona hiç çarpmadığı için"],
        correctAnswer: 0,
        explanation: "Toprak altındaki köklerin diğer ağaçlarla kenetlenmesi onu güçlü kılmıştır.",
        clueSentence: "...toprağın metrelerce altına uzanan köklerimin diğer ağaçların kökleriyle kenetlenmesindedir."
      },
      {
        id: "nat7_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bilge çınarın çocuklara verdiği en büyük hayat dersi nedir?",
        options: ["A) Dayanışma, sevgi ve köklü bağlar insanı her zorluk karşısında güçlü tutar", "B) Fırtınalarda sadece koşmak gerekir", "C) Ağaçlara salıncak kurulmamalıdır"],
        correctAnswer: 0,
        explanation: "Birbirine bağlı olanların fırtınaları aşacağı anlatılmaktadır.",
        clueSentence: "Birbirine bağlı olanları hiçbir fırtına yıkamaz!"
      },
      {
        id: "nat7_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Yeni dikilmiş, genç ve ince ağaççığa ne denir?",
        options: ["A) Kütük", "B) Fidan", "C) Çalı"],
        correctAnswer: 1,
        explanation: "Genç ağaca fidan denir.",
        clueSentence: "...genç fidanlar eğilip bükülüyordu."
      }
    ],
    rewardChest: {
      coins: 130,
      gemType: "emerald",
      gemName: "Köklerin Zümrüdü",
      gemColor: "#059669",
      badgeTitle: "Bilge Doğa Dostu",
      badgeIcon: "Trees",
      secretLore: "Kökleri sağlam olanın geleceği de aydınlık olur!"
    }
  },
  {
    id: "nature-8",
    levelNumber: 15,
    title: "Yaralı Leyleğe Yardım Eden Köy",
    islandName: "15. Durak: Leylek Yuvası",
    theme: "forest",
    iconName: "Feather",
    colorScheme: {
      bg: "bg-orange-50",
      border: "border-orange-300",
      accent: "text-orange-900",
      badgeBg: "bg-orange-600",
      gradient: "from-orange-500 to-amber-700",
    },
    synopsis: "Göç mevsiminde kanadı incinen leylek Beyaz'a tüm köy halkının şefkatle sahip çıkması.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Her ilkbaharda göçmen leylekler sıcak ülkelere doğru uçarken Yeşil Vadi köyünün baca tepelerine konarlardı. O yıl sürüdeki genç leylek Beyaz, fırtınada kanadını incitince sürüyle birlikte güneye uçamadı.",
      "Köyün çocukları ve veteriner amca hemen harekete geçti. Köy konağının bahçesinde ona rüzgar geçirmeyen korunaklı sıcak bir yuva yaptılar. Köylüler sırayla ona taze balık ve su getirdiler.",
      "Kış boyunca şefkatle bakılan Beyaz, bahar geldiğinde tamamen iyileşti. Gökyüzünde sevinçle çemberler çizip köylüleri gagasıyla selamladı. İyilik, dünyadaki en sıcak yuvaydı."
    ],
    vocabulary: [
      { word: "Göçmen", meaning: "Mevsimlere göre yaşamak için bir yerden başka bir yere giden hayvanlar veya kuşlar.", exampleSentence: "Göçmen kuşlar sonbaharda sıcak güney ülkelerine uçar." },
      { word: "Şefkat", meaning: "Başkalarına karşı duyulan derin sevgi, koruma ve merhamet duygusu.", exampleSentence: "Anne kuş yavrularını büyük bir şefkatle kanatlarının altına aldı." },
      { word: "Konak", meaning: "Büyük, geniş ve gösterişli geleneksel ev.", exampleSentence: "Köy konağının avlusunda bayram kutlaması yapıldı." }
    ],
    questions: [
      {
        id: "nat8_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Leylek Beyaz neden sürüyle birlikte güneye uçamadı?",
        options: ["A) Fırtınada kanadını incittiği için", "B) Köyü çok sevip gitmek istemediği için", "C) Uykuda kaldığı için"],
        correctAnswer: 0,
        explanation: "Fırtınada kanadı incindiği için göç edememiştir.",
        clueSentence: "...fırtınada kanadını incitince sürüyle birlikte güneye uçamadı."
      },
      {
        id: "nat8_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Köylüler yaralı leylek için ne yaptılar?",
        options: ["A) Onu kafese kilitlediler", "B) Sıcak bir yuva yapıp sırayla taze balık ve su getirdiler", "C) Başka bir köye gönderdiler"],
        correctAnswer: 1,
        explanation: "Köy konağı bahçesinde sıcak yuva yapıp özenle beslemişlerdir.",
        clueSentence: "...ona rüzgar geçirmeyen korunaklı sıcak bir yuva yaptılar. Köylüler sırayla ona taze balık ve su getirdiler."
      },
      {
        id: "nat8_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana fikri hangisidir?",
        options: ["A) Hayvanlara gösterilen sevgi, şefkat ve yardımlaşma dünyayı güzelleştirir", "B) Leylekler kışın hiç beslenmez", "C) Fırtınalarda çatılara çıkılmalıdır"],
        correctAnswer: 0,
        explanation: "Metin hayvan sevgisi ve merhametin önemini vurgular.",
        clueSentence: "İyilik, dünyadaki en sıcak yuvaydı."
      },
      {
        id: "nat8_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Mevsimine göre başka ülkelere uçan kuşlara ne ad verilir?",
        options: ["A) Göçmen kuş", "B) Kümes kuşu", "C) Deniz kuşu"],
        correctAnswer: 0,
        explanation: "Mevsimsel uçan kuşlara göçmen kuş denir.",
        clueSentence: "Her ilkbaharda göçmen leylekler..."
      }
    ],
    rewardChest: {
      coins: 125,
      gemType: "ruby",
      gemName: "Şefkat Yakutu",
      gemColor: "#f43f5e",
      badgeTitle: "Hayvan Dostu Kaşif",
      badgeIcon: "Feather",
      secretLore: "Kanadı kırık bir canlıya el uzatmak en büyük erdemdir!"
    }
  },
  {
    id: "nature-9",
    levelNumber: 16,
    title: "Çöl Tilkisi ve Gizli Vaha",
    islandName: "16. Durak: Altın Kumlar",
    theme: "temple",
    iconName: "Sun",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      accent: "text-amber-900",
      badgeBg: "bg-amber-600",
      gradient: "from-amber-400 to-orange-600",
    },
    synopsis: "Kocaman kulaklarıyla yeraltı suyunun sesini duyan sevimli çöl tilkisi Fennek'in macerası.",
    readingTimeMinutes: 2,
    wordCount: 155,
    paragraphs: [
      "Uçsuz bucaksız sarı kum tepelerinin ortasında yaşayan minik çöl tilkisi Fennek, kocaman kulaklarıyla meşhurdu. Bu kulaklar sadece serinlemesini sağlamıyor, aynı zamanda kumun derinliklerindeki en ufak çıtırtıyı bile duyabiliyordu.",
      "Sıcak yaz aylarında çöldeki kuyular kuruyunca susuz kalan ceylanlar çaresizce bakınmaya başladı. Fennek kulaklarını kum tepesine dayadı ve derinden gelen şırıl şırıl su sesini dinledi.",
      "Ceylanları arkasına takıp kum tepesinin arkasındaki palmiyelerle çevrili gizli bir su vahasına götürdü. Bütün hayvanlar serin suyla susuzluklarını giderdiler ve Fennek'in keskin duyularına hayran kaldılar."
    ],
    vocabulary: [
      { word: "Vaha", meaning: "Çöllerin ortasında suyun ve yeşilliğin bulunduğu hayat dolu küçük bölge.", exampleSentence: "Yorgun kervan çölde palmiyeli serin bir vaha bulunca çok sevindi." },
      { word: "Meşhur", meaning: "Herkes tarafından bilinen, tanınmış ve ünlü olan.", exampleSentence: "Çöl tilkisi kocaman sevimli kulaklarıyla meşhurdur." },
      { word: "Ceylan", meaning: "Zarif vücutlu, çok hızlı koşan ve iri gözlü sevimli bir memeli hayvan.", exampleSentence: "Zarif ceylanlar su kenarında neşeyle su içiyordu." }
    ],
    questions: [
      {
        id: "nat9_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Çöl tilkisi Fennek yeraltı suyunun sesini nasıl duydu?",
        options: ["A) Büyüteçle bakarak", "B) Kocaman kulaklarını kum tepesine dayayıp dinleyerek", "C) Kuşlardan haber alarak"],
        correctAnswer: 1,
        explanation: "Fennek büyük kulaklarıyla kum altındaki su sesini işitmiştir.",
        clueSentence: "Fennek kulaklarını kum tepesine dayadı ve derinden gelen şırıl şırıl su sesini dinledi."
      },
      {
        id: "nat9_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Fennek susuz kalan ceylanları nereye götürdü?",
        options: ["A) Soğuk bir mağaraya", "B) Palmiyelerle çevrili gizli bir su vahasına", "C) Şehir merkezine"],
        correctAnswer: 1,
        explanation: "Gizli su vahasına götürüp susuzluklarını gidermiştir.",
        clueSentence: "...kum tepesinin arkasındaki palmiyelerle çevrili gizli bir su vahasına götürdü."
      },
      {
        id: "nat9_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metinden çıkarılacak ana düşünce nedir?",
        options: ["A) Farklı fiziksel özelliklerimiz hayat kurtaran büyük bir güce dönüşebilir", "B) Çöllerde hiç su bulunmaz", "C) Ceylanlar su içmeyi sevmez"],
        correctAnswer: 0,
        explanation: "Farklılıklarımız ve yeteneklerimiz başkalarına fayda sağlayabilir.",
        clueSentence: "Bütün hayvanlar serin suyla susuzluklarını giderdiler ve Fennek'in keskin duyularına hayran kaldılar."
      },
      {
        id: "nat9_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Çölün ortasındaki sulak ve yeşil alana ne ad verilir?",
        options: ["A) Vaha", "B) Ada", "C) Buzul"],
        correctAnswer: 0,
        explanation: "Çöldeki sulak alana vaha denir.",
        clueSentence: "...palmiyelerle çevrili gizli bir su vahasına götürdü."
      }
    ],
    rewardChest: {
      coins: 130,
      gemType: "gold_crown",
      gemName: "Çölün Altın Taşı",
      gemColor: "#d97706",
      badgeTitle: "Vaha Rehberi",
      badgeIcon: "Sun",
      secretLore: "Dinlemeyi bilen bir kalp en gizli suları bile bulur!"
    }
  },
  {
    id: "nature-10",
    levelNumber: 17,
    title: "Renkli Kelebeğin İlk Uçuşu",
    islandName: "17. Durak: Çiçek Vadisi",
    theme: "forest",
    iconName: "Sparkles",
    colorScheme: {
      bg: "bg-pink-50",
      border: "border-pink-300",
      accent: "text-pink-900",
      badgeBg: "bg-pink-600",
      gradient: "from-pink-500 to-rose-700",
    },
    synopsis: "Kozasından sabırla çıkan ve rengarenk kanatlarıyla doğayı güzelleştiren kelebek Renkli'nin hikayesi.",
    readingTimeMinutes: 2,
    wordCount: 150,
    paragraphs: [
      "Gül bahçesindeki nane yaprağının altında minik bir koza asılı duruyordu. Kozanın içinde günlerdir sabırla bekleyen küçük tırtıl, artık rengarenk bir kelebeğe dönüşmüştü.",
      "Kozanın kabuğunu yavaşça deldi ve güneşe doğru ilk kez kanatlarını açtı. Kanatlarında gökkuşağının yedi rengi parıldıyordu. İlk uçuş denemesinde rüzgar onu hafifçe salladı ama o korkmadı.",
      "Çiçekten çiçeğe konarak polenleri taşıdı ve bahçedeki çiçeklerin meyve vermesine yardımcı oldu. Sabırla beklenen emeklerin sonunda her zaman göz kamaştırıcı bir güzellik doğardı."
    ],
    vocabulary: [
      { word: "Koza", meaning: "Tırtılların kelebek olmadan önce içine kapanıp dönüştükleri koruyucu ipeksi kılıf.", exampleSentence: "Minik tırtıl günlerce kozasının içinde sabırla bekledi." },
      { word: "Polen", meaning: "Çiçeklerin üremesini sağlayan incecik sarı renkli çiçek tozu.", exampleSentence: "Arılar ve kelebekler çiçekten çiçeğe polen taşır." },
      { word: "Sabır", meaning: "Zorluklar ve bekleyişler karşısında öfkelenmeden metanetle bekleme gücü.", exampleSentence: "Sabırla çalışan öğrenci hedeflerine başarıyla ulaştı." }
    ],
    questions: [
      {
        id: "nat10_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Küçük tırtıl kelebeğe dönüşmeden önce nerede bekliyordu?",
        options: ["A) Ağaç kovuğunda", "B) İpeksi bir kozanın içinde", "C) Toprağın altında"],
        correctAnswer: 1,
        explanation: "Tırtıllar koza içinde kelebeğe dönüşür.",
        clueSentence: "Kozanın içinde günlerdir sabırla bekleyen küçük tırtıl..."
      },
      {
        id: "nat10_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Kelebek çiçekten çiçeğe konarak doğaya nasıl yardımcı oldu?",
        options: ["A) Yaprakları yiyerek", "B) Polenleri taşıyarak çiçeklerin meyve vermesini sağlayarak", "C) Çiçekleri kurutarak"],
        correctAnswer: 1,
        explanation: "Polen taşıyarak bitkilerin üremesine katkı sağlamıştır.",
        clueSentence: "Çiçekten çiçeğe konarak polenleri taşıdı ve bahçedeki çiçeklerin meyve vermesine yardımcı oldu."
      },
      {
        id: "nat10_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayeden çıkaracağımız en güzel ders nedir?",
        options: ["A) Sabırla ve azimle beklenen emekler harika güzelliklere dönüşür", "B) Kozalara dokunulmalıdır", "C) Rüzgarda uçulmaz"],
        correctAnswer: 0,
        explanation: "Sabır ve dönüşümün güzelliği ana fikirdir.",
        clueSentence: "Sabırla beklenen emeklerin sonunda her zaman göz kamaştırıcı bir güzellik doğardı."
      },
      {
        id: "nat10_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Çiçeklerin döllenmesini sağlayan sarı renkli incecik toza ne ad verilir?",
        options: ["A) Polen", "B) Çakıl", "C) Kök"],
        correctAnswer: 0,
        explanation: "Çiçek tozuna polen denir.",
        clueSentence: "...polenleri taşıdı ve bahçedeki çiçeklerin..."
      }
    ],
    rewardChest: {
      coins: 130,
      gemType: "diamond",
      gemName: "Gökkuşağı Kanadı Taşı",
      gemColor: "#ec4899",
      badgeTitle: "Dönüşüm Mucizesi",
      badgeIcon: "Sparkles",
      secretLore: "Sabırla açılan her kanat gökyüzünü renklere boyar!"
    }
  }
];
