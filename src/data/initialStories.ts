import { IslandStory } from "../types";

export const INITIAL_STORIES: IslandStory[] = [
  {
    id: "island-1",
    levelNumber: 1,
    title: "Papağan Adası ve Şişedeki Harita",
    islandName: "1. Durak: Papağan Adası",
    theme: "parrot",
    iconName: "Feather",
    colorScheme: {
      bg: "bg-emerald-50",
      border: "border-emerald-300",
      accent: "text-emerald-700",
      badgeBg: "bg-emerald-500",
      gradient: "from-emerald-400 to-teal-600",
    },
    synopsis: "Efe ve sevimli papağan Gaga, kumsalda gizemli bir cam şişe bulurlar.",
    readingTimeMinutes: 2,
    wordCount: 145,
    paragraphs: [
      "Güneşli bir salı sabahı, küçük kaşif Efe ile omzundaki renkli papağanı Gaga, altın sarısı kumsalda neşeyle yürüyordu. Dalgalar kıyıya vururken köpüklerin arasından yeşil renkli, eski bir cam şişe kıyıya vurdu.",
      "Efe heyecanla koşup şişeyi eline aldı. Şişenin mantar tıpası deniz yosunlarıyla sarılmıştı. Tıpayı dikkatle açtığında içinden rulo yapılmış, kenarları hafif yıpranmış eski bir parşömen kağıdı çıktı. Bu, adanın gizli mağaralarını gösteren eski bir hazine haritasıydı!",
      "Gaga kanatlarını sevinçle çırparak 'Gak gak! Macera başlıyor!' diye bağırdı. Haritanın köşesinde ise şu not yazıyordu: 'Cesur olanlar ormanı aşar, dostlukla parlayan hazineye ulaşır.' Efe sırt çantasını düzeltti ve papağan dostuyla birlikte ormanın patikasına doğru ilk adımını attı."
    ],
    vocabulary: [
      {
        word: "Parşömen",
        meaning: "Eski zamanlarda üzerine yazı yazmak için hazırlanan özel dayanıklı deri kağıt.",
        exampleSentence: "Müzedeki eski parşömen kağıdında kralların mührü vardı."
      },
      {
        word: "Patika",
        meaning: "Orman veya dağlarda insanların ve hayvanların yürümesiyle oluşan daracık toprak yol.",
        exampleSentence: "Çocuklar köyün yemyeşil patikasından neşeyle yürüdüler."
      },
      {
        word: "Kaşif",
        meaning: "Yeni yerleri, bilinmeyen bölgeleri araştırıp keşfeden meraklı gezgin.",
        exampleSentence: "Küçük kaşif elindeki büyüteçle doğayı inceliyordu."
      }
    ],
    questions: [
      {
        id: "q1_1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Efe ile papağan Gaga nerede yürüyüş yapıyorlardı?",
        options: [
          "A) Karlı bir dağın tepesinde",
          "B) Altın sarısı bir kumsalda",
          "C) Şehrin kalabalık bir parkında"
        ],
        correctAnswer: 1,
        explanation: "Metnin ilk cümlesinde Efe ve Gaga'nın altın sarısı kumsalda neşeyle yürüdüğü açıkça anlatılmıştır.",
        clueSentence: "Güneşli bir salı sabahı, küçük kaşif Efe ile omzundaki renkli papağanı Gaga, altın sarısı kumsalda neşeyle yürüyordu."
      },
      {
        id: "q1_2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Cam şişenin içinden çıkan parşömen kağıdı neyi gösteriyordu?",
        options: [
          "A) Adanın gizli mağaralarını gösteren bir hazine haritasını",
          "B) Bir yemek tarifini",
          "C) Okul ödevi notlarını"
        ],
        correctAnswer: 0,
        explanation: "Parşömen kağıdı adanın gizli mağaralarını gösteren eski bir hazine haritasıydı.",
        clueSentence: "Bu, adanın gizli mağaralarını gösteren eski bir hazine haritasıydı!"
      },
      {
        id: "q1_3",
        type: "multiple_choice",
        category: "Neden-Sonuç",
        question: "Gaga neden 'Gak gak! Macera başlıyor!' diyerek kanatlarını çırptı?",
        options: [
          "A) Çok acıktığı için",
          "B) Eski bir hazine haritası buldukları ve heyecanlandığı için",
          "C) Yağmur yağdığı için"
        ],
        correctAnswer: 1,
        explanation: "Haritayı bulunca büyük bir maceranın başladığını fark edip sevinç ve heyecanla kanat çırpmıştır.",
        clueSentence: "Tıpayı dikkatle açtığında içinden rulo yapılmış eski bir parşömen kağıdı çıktı... Gaga kanatlarını sevinçle çırparak 'Gak gak! Macera başlıyor!' diye bağırdı."
      },
      {
        id: "q1_4",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Haritanın köşesindeki notta asıl vurgulanan duygu veya değer nedir?",
        options: [
          "A) Hazineyi tek başına saklamak",
          "B) Cesaret ve dostlukla engelleri aşmak",
          "C) Kumsalda sadece oturup beklemek"
        ],
        correctAnswer: 1,
        explanation: "Haritadaki 'Cesur olanlar ormanı aşar, dostlukla parlayan hazineye ulaşır' sözü cesaret ve dostluğu vurgular.",
        clueSentence: "Cesur olanlar ormanı aşar, dostlukla parlayan hazineye ulaşır."
      }
    ],
    rewardChest: {
      coins: 60,
      gemType: "emerald",
      gemName: "Zümrüt Yeşili Doğa Kristali",
      gemColor: "#10b981",
      badgeTitle: "Ada Kaşifi Rozeti",
      badgeIcon: "Compass",
      secretLore: "Papağan Adası'nın ilk harita parçasını buldun! Ormanın kapıları artık senin için açıldı."
    }
  },
  {
    id: "island-2",
    levelNumber: 2,
    title: "Fısıldayan Ormanın Bilge Sincabı",
    islandName: "2. Durak: Fısıldayan Orman",
    theme: "forest",
    iconName: "Trees",
    colorScheme: {
      bg: "bg-lime-50",
      border: "border-lime-300",
      accent: "text-lime-800",
      badgeBg: "bg-lime-600",
      gradient: "from-lime-500 to-green-700",
    },
    synopsis: "Dev meşe ağaçlarının arasında yaşayan Bilge Çiko, haritanın şifresini çözüyor.",
    readingTimeMinutes: 2,
    wordCount: 165,
    paragraphs: [
      "Fısıldayan Orman'a girdiklerinde ağaçların yaprakları rüzgarda adeta tatlı bir şarkı mırıldanıyordu. Ağaçların gövdeleri o kadar kalındı ki üç çocuk el ele tutuşsa bile anca sarabilirdi.",
      "Yolun ortasında, boynunda meşe palamudundan yapılmış bir kolye taşıyan sevimli bir sincap belirdi. Adı Çiko'ydu. Çiko, ormanın en bilge hayvanıydı ve tüm patikaları ezbere bilirdi.",
      "Efe haritayı Çiko'ya gösterdi. Çiko gözlüklerini takıp haritayı dikkatlice inceledi. 'Gümüş Köprü'den geçebilmek için üç fındık bilmecesini doğru bilmeniz gerekir,' dedi. Bilmeceler doğayı korumak ve arkadaşça paylaşmakla ilgiliydi. Efe tüm soruları sabırla cevapladı.",
      "Çiko gülümseyerek Efe'ye parlak gümüş bir anahtar uzattı: 'Aferin kaşif! Doğa sevgisi ve aklın seni bir sonraki kapıya taşıyacak.' Böylece kaşifler Kristal Mağara yoluna koyuldular."
    ],
    vocabulary: [
      {
        word: "Bilge",
        meaning: "Çok bilgili, görgülü ve doğru kararlar veren akıllı kimse.",
        exampleSentence: "Köyün yaşlı ve bilge dedesi çocuklara güzel masallar anlattı."
      },
      {
        word: "Palamut",
        meaning: "Meşe ağacının tırnaklı sert kabuklu küçük meyvesi.",
        exampleSentence: "Sincaplar kış için meşe palamutlarını toprağa saklar."
      },
      {
        word: "Ezbere",
        meaning: "Hiç kağıda bakmadan, zihinden eksiksiz olarak bilmek.",
        exampleSentence: "Şiirin bütün kıtalarını ezbere okudu."
      }
    ],
    questions: [
      {
        id: "q2_1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Ormanın bilge sincabı Çiko'nun boynunda ne vardı?",
        options: [
          "A) Altından bir saat",
          "B) Meşe palamudundan yapılmış bir kolye",
          "C) Kırmızı bir atkı"
        ],
        correctAnswer: 1,
        explanation: "Metinde Çiko'nun boynunda meşe palamudundan yapılmış bir kolye taşıdığı belirtilmiştir.",
        clueSentence: "Yolun ortasında, boynunda meşe palamudundan yapılmış bir kolye taşıyan sevimli bir sincap belirdi."
      },
      {
        id: "q2_2",
        type: "multiple_choice",
        category: "Neden-Sonuç",
        question: "Çiko, Efe'ye gümüş anahtarı neden verdi?",
        options: [
          "A) Efe ona çikolata ikram ettiği için",
          "B) Efe doğa ve paylaşma bilmecelerini doğru ve sabırla bildiği için",
          "C) Çiko anahtarı taşımaktan yorulduğu için"
        ],
        correctAnswer: 1,
        explanation: "Efe tüm bilmeceleri sabırla ve doğru cevapladığı için Çiko ona anahtarı vermiştir.",
        clueSentence: "Efe tüm soruları sabırla cevapladı. Çiko gülümseyerek Efe'ye parlak gümüş bir anahtar uzattı..."
      },
      {
        id: "q2_3",
        type: "multiple_choice",
        category: "Olay Sıralama",
        question: "Metinde geçen olayların doğru sıralanışı hangisidir?",
        options: [
          "A) 1- Efe bilmeceleri bildi / 2- Ormana girdiler / 3- Çiko anahtarı verdi",
          "B) 1- Ormana girdiler / 2- Çiko ile karşılaştılar / 3- Bilmeceleri çözüp gümüş anahtarı aldılar",
          "C) 1- Anahtarı aldılar / 2- Ormana girdiler / 3- Çiko ile konuştular"
        ],
        correctAnswer: 1,
        explanation: "Önce ormana girdiler, sonra Çiko belirdi ve en son bilmeceler çözülüp anahtar alındı.",
        clueSentence: "Fısıldayan Orman'a girdiklerinde... Çiko belirdi... Efe tüm soruları sabırla cevapladı ve anahtarı aldı."
      },
      {
        id: "q2_4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Metne göre 'bilge' kelimesi sincap Çiko'nun hangi özelliğini gösterir?",
        options: [
          "A) Çok hızlı koşmasını",
          "B) Çok akıllı ve doğru düşünen biri olmasını",
          "C) Çok uykucu olmasını"
        ],
        correctAnswer: 1,
        explanation: "Bilge, çok bilgili, akıllı ve doğru kararlar veren anlamına gelir.",
        clueSentence: "Çiko, ormanın en bilge hayvanıydı ve tüm patikaları ezbere bilirdi."
      }
    ],
    rewardChest: {
      coins: 80,
      gemType: "amethyst",
      gemName: "Mor Ametist Orman Taşı",
      gemColor: "#a855f7",
      badgeTitle: "Bilge Doğa Dostu",
      badgeIcon: "Sparkles",
      secretLore: "Fısıldayan Orman'ın gümüş anahtarını kazandın! Doğa sana dostça gülümsüyor."
    }
  },
  {
    id: "island-3",
    levelNumber: 3,
    title: "Parlayan Kristal Mağarası",
    islandName: "3. Durak: Kristal Mağarası",
    theme: "cave",
    iconName: "Gem",
    colorScheme: {
      bg: "bg-cyan-50",
      border: "border-cyan-300",
      accent: "text-cyan-800",
      badgeBg: "bg-cyan-600",
      gradient: "from-cyan-500 to-blue-700",
    },
    synopsis: "Mağaranın karanlığını aydınlatan gökkuşağı kristalleri ve gizemli şifre.",
    readingTimeMinutes: 2,
    wordCount: 155,
    paragraphs: [
      "Gümüş anahtar kapıyı açtığında karşılarında devasa bir mağara belirdi. İçerisi hiç de karanlık değildi çünkü mağaranın tavanından sarkan binlerce rengarenk sarkıt ve dikit, etrafa gökkuşağı gibi ışık saçıyordu.",
      "Mağaranın ortasında berrak bir yeraltı gölü uzanıyordu. Göletin üzerinde parıldayan mavi bir nilüfer çiçeği vardı. Efe gölün kenarındaki taşa yazılmış gizli cümleyi okudu: 'Kelimelerin gücünü bilen, sudaki yansımayı görür.'",
      "Papağan Gaga göletin üzerine uçtu ve 'Ayna gibi! Su durgun olunca her şey netleşir!' dedi. Efe suyun dibine dikkatle baktığında, suda parıldayan yakut taşlı altın bir kutu gördü. Kutunun şifresi ise sadece dikkatli okuyanların çözebileceği bir hece bulmacasıydı."
    ],
    vocabulary: [
      {
        word: "Sarkıt",
        meaning: "Mağara tavanından damlayan kireçli suların donarak oluşturduğu taş uzantısı.",
        exampleSentence: "Mağaranın tavanındaki sarkıtlar buzdan kılıçlara benziyordu."
      },
      {
        word: "Berrak",
        meaning: "Tertemiz, duru, içi ve dibi kolayca görünen sıvı.",
        exampleSentence: "Dağdan gelen kaynak suyu o kadar berraktı ki içindeki çakıl taşları parlıyordu."
      },
      {
        word: "Nilüfer",
        meaning: "Durgun sularda veya göllerde yetişen, yaprakları su üstünde yüzen güzel çiçek.",
        exampleSentence: "Gölün kıyısında pembe ve beyaz nilüferler açmıştı."
      }
    ],
    questions: [
      {
        id: "q3_1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Mağara neden karanlık değildi?",
        options: [
          "A) Efe yanında dev bir el feneri getirdiği için",
          "B) Tavandaki rengarenk sarkıt ve dikitler gökkuşağı gibi ışık saçtığı için",
          "C) Mağaranın tavanında ampuller olduğu için"
        ],
        correctAnswer: 1,
        explanation: "Metinde sarkıt ve dikitlerin etrafa gökkuşağı gibi ışık saçtığı için mağaranın aydınlık olduğu anlatılmıştır.",
        clueSentence: "İçerisi hiç de karanlık değildi çünkü mağaranın tavanından sarkan binlerce rengarenk sarkıt ve dikit, etrafa gökkuşağı gibi ışık saçıyordu."
      },
      {
        id: "q3_2",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Metinde geçen 'berrak göl' ifadesindeki 'berrak' kelimesinin anlamı nedir?",
        options: [
          "A) Çok çamurlu ve bulanık",
          "B) Tertemiz ve dibi görünen duru su",
          "C) Çok sıcak ve kaynayan su"
        ],
        correctAnswer: 1,
        explanation: "Berrak, temiz ve duru anlamına gelir.",
        clueSentence: "Mağaranın ortasında berrak bir yeraltı gölü uzanıyordu."
      },
      {
        id: "q3_3",
        type: "multiple_choice",
        category: "5N1K",
        question: "Efe suyun dibine baktığında ne gördü?",
        options: [
          "A) Küçük kırmızı bir balık",
          "B) Suda parıldayan yakut taşlı altın bir kutu",
          "C) Eski bir denizci pusulası"
        ],
        correctAnswer: 1,
        explanation: "Efe suyun dibine dikkatle baktığında yakut taşlı altın bir kutu gördü.",
        clueSentence: "Efe suyun dibine dikkatle baktığında, suda parıldayan yakut taşlı altın bir kutu gördü."
      },
      {
        id: "q3_4",
        type: "multiple_choice",
        category: "Karakter Analizi",
        question: "Efe'nin sudaki kutuyu fark edebilmesinin en büyük sebebi neydi?",
        options: [
          "A) Dikkatli ve sabırlı bir gözlemci olması",
          "B) Suya taş atıp ses çıkarması",
          "C) Mağarada koşup durması"
        ],
        correctAnswer: 0,
        explanation: "Efe acele etmeden, dikkatle suyun dibine baktığı için gizli kutuyu fark edebilmiştir.",
        clueSentence: "Efe suyun dibine dikkatle baktığında, suda parıldayan yakut taşlı altın bir kutu gördü."
      }
    ],
    rewardChest: {
      coins: 100,
      gemType: "ruby",
      gemName: "Alev Kırmızısı Yakut",
      gemColor: "#ef4444",
      badgeTitle: "Kristal Dedektifi",
      badgeIcon: "Sun",
      secretLore: "Kristal Mağarası'nın derinliklerinden nadide yakut taşını çıkardın!"
    }
  },
  {
    id: "island-4",
    levelNumber: 4,
    title: "Gizemli Batık Gemi 'Pusula'",
    islandName: "4. Durak: Korsan Koyu ve Batık Gemi",
    theme: "shipwreck",
    iconName: "Anchor",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      accent: "text-amber-800",
      badgeBg: "bg-amber-600",
      gradient: "from-amber-500 to-orange-700",
    },
    synopsis: "Yüz yıl önce kaybolan yelkenli gemi Pusula'nın kaptan köşkünde bulunan sırlar.",
    readingTimeMinutes: 2,
    wordCount: 175,
    paragraphs: [
      "Korsan Koyu'nda, sığ suların hemen kıyısında kumların üzerine oturmuş görkemli bir tahta yelkenli duruyordu. Geminin burnunda oymalı bir deniz kızı heykeli, güvertesinde ise eski bir dümen vardı.",
      "Efe ve Gaga tahta merdivenlerden dikkatle tırmanarak kaptan köşküne girdiler. Masanın üzerinde pirinçten yapılmış parlak bir pusula ile denizcilik günlüğü açık duruyordu. Günlükte Kaptan Barbaros'un el yazısıyla şu satırlar vardı:",
      "'Fırtına ne kadar sert eserse essin, doğru rotayı bilen kaptan asla kaybolmaz. En büyük hazine altınlar değil, okuduğun kitapların sana öğrettiği akıldır.'",
      "Efe günlüğü okuyunca çok etkilendi. Pusulayı eline aldığında pusulanın ibresi doğrudan adanın en yüksek tepesindeki Güneş Tapınağı'nı işaret etti. İşte bir sonraki rotaları belli olmuştu!"
    ],
    vocabulary: [
      {
        word: "Güverte",
        meaning: "Geminin en üstünde yer alan açık alan veya taban.",
        exampleSentence: "Denizciler sabah erken saatte geminin güvertesini temizlediler."
      },
      {
        word: "Rota",
        meaning: "Bir geminin veya uçağın takip ettiği gidiş yönü, yol haritası.",
        exampleSentence: "Kaptan geminin rotasını güneye doğru çevirdi."
      },
      {
        word: "İbre",
        meaning: "Pusula veya saat gibi araçlarda yön veya ölçü gösteren ince hareketli çubuk.",
        exampleSentence: "Pusulanın kırmızı ibresi her zaman kuzeyi gösterir."
      }
    ],
    questions: [
      {
        id: "q4_1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Geminin burnunda ne heykeli vardı?",
        options: [
          "A) Oymalı bir deniz kızı heykeli",
          "B) Tahtadan yapılmış bir aslan heykeli",
          "C) Sevimli bir papağan heykeli"
        ],
        correctAnswer: 0,
        explanation: "Metnin ilk paragrafında geminin burnunda oymalı bir deniz kızı heykeli olduğu yazmaktadır.",
        clueSentence: "Geminin burnunda oymalı bir deniz kızı heykeli, güvertesinde ise eski bir dümen vardı."
      },
      {
        id: "q4_2",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Kaptan Barbaros'un günlüğüne yazdığı en önemli ders nedir?",
        options: [
          "A) Altınların dünyadaki her şeyden kıymetli olduğu",
          "B) En büyük hazinenin kitaplardan öğrenilen bilgi ve akıl olduğu",
          "C) Fırtınalı havalarda denize açılmak gerektiği"
        ],
        correctAnswer: 1,
        explanation: "Kaptan, 'En büyük hazine altınlar değil, okuduğun kitapların sana öğrettiği akıldır' diyerek bilgi ve aklı vurgulamıştır.",
        clueSentence: "'En büyük hazine altınlar değil, okuduğun kitapların sana öğrettiği akıldır.'"
      },
      {
        id: "q4_3",
        type: "multiple_choice",
        category: "Neden-Sonuç",
        question: "Efe ve Gaga neden rotalarını Güneş Tapınağı'na çevirdiler?",
        options: [
          "A) Çünkü pusulanın ibresi doğrudan orayı gösterdi",
          "B) Çünkü hava çok soğuk olduğu için",
          "C) Çünkü gemi su almaya başladığı için"
        ],
        correctAnswer: 0,
        explanation: "Pusulayı eline aldığında ibre doğrudan tepedeki Güneş Tapınağı'nı işaret etmiştir.",
        clueSentence: "Pusulayı eline aldığında pusulanın ibresi doğrudan adanın en yüksek tepesindeki Güneş Tapınağı'nı işaret etti."
      },
      {
        id: "q4_4",
        type: "multiple_choice",
        category: "Karakter Analizi",
        question: "Efe'nin günlüğü okuyunca etkilenmesi onun hangi yönünü gösterir?",
        options: [
          "A) Kitapları ve anlamlı sözleri önemseyen düşünceli bir çocuk olduğunu",
          "B) Sadece altınları düşünen bir korsan olduğunu",
          "C) Okumaktan hiç hoşlanmadığını"
        ],
        correctAnswer: 0,
        explanation: "Kaptanın bilgelik dolu sözlerinden etkilenmesi, Efe'nin düşünceli ve öğrenmeye açık olduğunu gösterir.",
        clueSentence: "Efe günlüğü okuyunca çok etkilendi."
      }
    ],
    rewardChest: {
      coins: 120,
      gemType: "sapphire",
      gemName: "Okyanus Mavisi Safir",
      gemColor: "#3b82f6",
      badgeTitle: "Usta Dümenci",
      badgeIcon: "Navigation",
      secretLore: "Pusula gemisinin kaptan köşkü sırrını çözdün! Doğru rota bilginle aydınlandı."
    }
  },
  {
    id: "island-5",
    levelNumber: 5,
    title: "Mercan Kayalıklarındaki Dostluk",
    islandName: "5. Durak: Masmavi Mercan Resifi",
    theme: "coral",
    iconName: "Fish",
    colorScheme: {
      bg: "bg-sky-50",
      border: "border-sky-300",
      accent: "text-sky-800",
      badgeBg: "bg-sky-600",
      gradient: "from-sky-500 to-indigo-700",
    },
    synopsis: "Ağlara takılan yavru yunus Maviş'i kurtaran Efe ve deniz altı hazinesi.",
    readingTimeMinutes: 2,
    wordCount: 180,
    paragraphs: [
      "Güneş Tapınağı'na giden sahil şeridinde yürürlerken denizin üzerinde çırpınan bir hareket gördüler. Yakından baktıklarında, terk edilmiş eski bir balıkçı ağına dolanmış yavru bir yunus fark ettiler.",
      "Efe hiç tereddüt etmeden ayakkabılarını çıkardı, sığ suya girdi. Küçük cebindeki tahta çakı ile ağı dikkatlice kesti ve yunusu kurtardı. Yavru yunus, suyun üzerinde neşeyle taklalar atıp Efe'ye teşekkür edercesine sesler çıkardı.",
      "Yunus suya dalıp biraz sonra ağzında deniz kabuklarıyla süslenmiş pırıl pırıl bir anahtar ile geri döndü. Bu, denizlerin koruyucularına armağan edilen 'Mercan Anahtarı'ydı. İyilik yapan, karşılığında her zaman güzellik bulurdu."
    ],
    vocabulary: [
      {
        word: "Tereddüt",
        meaning: "Kararsızlık, duraksama, bir işi yapıp yapmamakta kararsız kalma hali.",
        exampleSentence: "Arkadaşına yardım etmek için bir an bile tereddüt etmedi."
      },
      {
        word: "Resif",
        meaning: "Deniz suyundaki mercanların ve kayaların oluşturduğu rengarenk su altı tepeleri.",
        exampleSentence: "Dalgıçlar mercan resifindeki tropik balıkları hayranlıkla izledi."
      },
      {
        word: "Armağan",
        meaning: "Birini sevindirmek veya ödüllendirmek için verilen hediye.",
        exampleSentence: "Öğretmenimiz kitap okuma yarışmasında birinci olanlara kitap armağan etti."
      }
    ],
    questions: [
      {
        id: "q5_1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Yavru yunusun yardıma ihtiyacı olmasının sebebi neydi?",
        options: [
          "A) Kaybolduğu için",
          "B) Terk edilmiş eski bir balıkçı ağına dolandığı için",
          "C) Yüzme bilmediği için"
        ],
        correctAnswer: 1,
        explanation: "Metinde yavru yunusun eski bir balıkçı ağına dolandığı için çırpındığı belirtilmiştir.",
        clueSentence: "Yakından baktıklarında, terk edilmiş eski bir balıkçı ağına dolanmış yavru bir yunus fark ettiler."
      },
      {
        id: "q5_2",
        type: "multiple_choice",
        category: "Karakter Analizi",
        question: "Efe'nin ayakkabılarını çıkarıp yunusu kurtarmaya gitmesi onun hangi özelliğini kanıtlar?",
        options: [
          "A) Hayvansever, yardımsever ve cesur olduğunu",
          "B) Yüzmekten çok korktuğunu",
          "C) Oyun oynamayı sevmediğini"
        ],
        correctAnswer: 0,
        explanation: "Zor durumdaki bir canlıya hemen yardıma koşması Efe'nin hayvansever, merhametli ve cesur olduğunu gösterir.",
        clueSentence: "Efe hiç tereddüt etmeden ayakkabılarını çıkardı, sığ suya girdi... Ağı dikkatlice kesti ve yunusu kurtardı."
      },
      {
        id: "q5_3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayeden çıkarılacak en güzel ana düşünce hangisidir?",
        options: [
          "A) İyilik yapan ve canlılara yardım edenler her zaman sevgi ve güzellik bulur",
          "B) Deniz kenarında yürümek çok yorucudur",
          "C) Ağları denize atmak çok faydalıdır"
        ],
        correctAnswer: 0,
        explanation: "Hikayenin son cümlesinde 'İyilik yapan, karşılığında her zaman güzellik bulurdu' denilerek ana fikir verilmiştir.",
        clueSentence: "İyilik yapan, karşılığında her zaman güzellik bulurdu."
      },
      {
        id: "q5_4",
        type: "multiple_choice",
        category: "5N1K",
        question: "Yunus, Efe'ye teşekkür etmek için ne getirdi?",
        options: [
          "A) Parlak deniz kabuklarıyla süslenmiş bir Mercan Anahtarı",
          "B) Lezzetli bir balık",
          "C) Kırmızı bir top"
        ],
        correctAnswer: 0,
        explanation: "Yunus ağzında deniz kabuklarıyla süslenmiş pırıl pırıl bir Mercan Anahtarı getirmiştir.",
        clueSentence: "Yunus suya dalıp biraz sonra ağzında deniz kabuklarıyla süslenmiş pırıl pırıl bir anahtar ile geri döndü."
      }
    ],
    rewardChest: {
      coins: 150,
      gemType: "diamond",
      gemName: "Işıltılı Deniz Elması",
      gemColor: "#06b6d4",
      badgeTitle: "Denizlerin Koruyucusu",
      badgeIcon: "ShieldCheck",
      secretLore: "Mercan Anahtarı'nı aldın! Merhametin ve iyiliğin seni gerçek bir kahraman yaptı."
    }
  },
  {
    id: "island-6",
    levelNumber: 6,
    title: "Güneş Piramidinin Altın Anahtarı",
    islandName: "6. Durak: Antik Güneş Tapınağı",
    theme: "temple",
    iconName: "SunMedium",
    colorScheme: {
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      accent: "text-yellow-800",
      badgeBg: "bg-yellow-600",
      gradient: "from-yellow-500 to-amber-700",
    },
    synopsis: "Bulutların üzerindeki altın piramitte korunan bilmeceli güneş aynaları.",
    readingTimeMinutes: 2,
    wordCount: 190,
    paragraphs: [
      "Adanın en tepesinde, gökyüzüne uzanan antik taş basamaklar Güneş Tapınağı'na ulaşıyordu. Tapınağın dev taş kapısında üç adet anahtar yuvası bulunuyordu: Gümüş Anahtar, Yakut Anahtar ve Mercan Anahtarı!",
      "Efe ve Gaga önceki duraklarda kazandıkları üç anahtarı sırayla yuvalarına taktılar. 'Klik! Klik! Klik!' sesleriyle dev kapı yavaşça aralandı. İçerideki salonda güneş ışığını yansıtan altın aynalar tavandaki kristale ışık odaklıyordu.",
      "Kristalin tam altındaki kaidede parıldayan som altından yapılmış 'Büyük Bilgelik Anahtarı' duruyordu. Gaga 'İşte bu son kale kapısını açacak anahtar!' diye şakıdı. Artık son durak olan Büyük Hazine Kalesi'ne sadece bir adım kalmıştı."
    ],
    vocabulary: [
      {
        word: "Antik",
        meaning: "Çok eski çağlardan, yüzyıllar öncesinden kalma tarihi eser veya yapı.",
        exampleSentence: "Müzede sergilenen antik vazolar binlerce yıllıktı."
      },
      {
        word: "Kaide",
        meaning: "Bir heykelin, vazonun veya değerli bir nesnenin üzerine konulduğu ayaklık, taban.",
        exampleSentence: "Altın kupa mermer bir kaidenin üzerine yerleştirildi."
      },
      {
        word: "Som Altın",
        meaning: "İçine başka hiçbir metal karıştırılmamış, saf ve katı altın.",
        exampleSentence: "Kralın tacı som altından yapılmıştı."
      }
    ],
    questions: [
      {
        id: "q6_1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Tapınağın dev kapısını açmak için kaç adet anahtar gerekiyordu?",
        options: [
          "A) Sadece 1 anahtar",
          "B) Önceki duraklarda kazanılan 3 anahtar",
          "C) 10 farklı anahtar"
        ],
        correctAnswer: 1,
        explanation: "Tapınağın kapısında 3 yuva vardı ve önceki duraklardaki Gümüş, Yakut ve Mercan anahtarları kullanıldı.",
        clueSentence: "Tapınağın dev taş kapısında üç adet anahtar yuvası bulunuyordu: Gümüş Anahtar, Yakut Anahtar ve Mercan Anahtarı!"
      },
      {
        id: "q6_2",
        type: "multiple_choice",
        category: "Olay Sıralama",
        question: "Anahtarlar yuvalarına takıldıktan sonra içeride ne görüldü?",
        options: [
          "A) Işığı tavandaki kristale odaklayan altın aynalar",
          "B) Karanlık bir labirent",
          "C) Su dolu derin bir kuyu"
        ],
        correctAnswer: 0,
        explanation: "Kapı açılınca altın aynaların güneş ışığını tavandaki kristale odakladığı görüldü.",
        clueSentence: "İçerideki salonda güneş ışığını yansıtan altın aynalar tavandaki kristale ışık odaklıyordu."
      },
      {
        id: "q6_3",
        type: "multiple_choice",
        category: "Neden-Sonuç",
        question: "Büyük Bilgelik Anahtarı neden bu kadar önemliydi?",
        options: [
          "A) Çünkü son durak olan Büyük Hazine Kalesi'nin kapısını açacaktı",
          "B) Çünkü sadece bir süs eşyasıydı",
          "C) Çünkü çok ağırdı"
        ],
        correctAnswer: 0,
        explanation: "Gaga'nın dediği gibi, son durak olan Hazine Kalesi'ni açacak anahtar oydu.",
        clueSentence: "Gaga 'İşte bu son kale kapısını açacak anahtar!' diye şakıdı."
      },
      {
        id: "q6_4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Metinde geçen 'antik' kelimesi aşağıdakilerden hangisiyle zıt anlamlıdır?",
        options: [
          "A) Tarihi",
          "B) Eski",
          "C) Modern / Yeni"
        ],
        correctAnswer: 2,
        explanation: "Antik çok eski çağlara ait demektir; zıttı ise modern ve yenidir.",
        clueSentence: "Adanın en tepesinde, gökyüzüne uzanan antik taş basamaklar Güneş Tapınağı'na ulaşıyordu."
      }
    ],
    rewardChest: {
      coins: 200,
      gemType: "gold_crown",
      gemName: "Güneş Tacı Elması",
      gemColor: "#eab308",
      badgeTitle: "Tapınak Fatihi",
      badgeIcon: "Crown",
      secretLore: "Büyük Bilgelik Anahtarı senin ellerinde! Artık büyük finale hazırsın."
    }
  },
  {
    id: "island-7",
    levelNumber: 7,
    title: "Büyük Bilgelik Kalesi ve Hazine Sandığı",
    islandName: "7. Durak: Büyük Hazine Kalesi (FİNAL)",
    theme: "castle",
    iconName: "Trophy",
    colorScheme: {
      bg: "bg-rose-50",
      border: "border-rose-300",
      accent: "text-rose-800",
      badgeBg: "bg-rose-600",
      gradient: "from-rose-500 via-amber-500 to-violet-700",
    },
    synopsis: "Maceranın doruk noktası: Gerçek hazine altın mı, yoksa okuyup anlayan bir zihin mi?",
    readingTimeMinutes: 3,
    wordCount: 220,
    paragraphs: [
      "Bulutların üzerine kurulmuş görkemli Altın Kale'nin kapıları Büyük Bilgelik Anahtarı ile ardına kadar açıldı. Efe ve Gaga taht odasına girdiklerinde ortada yakutlarla, zümrütlerle bezenmiş devasa bir sandık duruyordu.",
      "Efe heyecanla sandığın kapağını kaldırdı. Sandığın içinde pırıl pırıl parlayan altın sikkelerin ve rengarenk mücevherlerin tam ortasında, altın kapaklı dev bir 'Bilgi Kitabı' ile üzerinde '3. Sınıf Baş Kaşifi ve Okuma Şampiyonu' yazan parıldayan bir madalya vardı!",
      "Kitabın ilk sayfasında şu altın harfler ışıldıyordu: 'Tebrikler cesur çocuk! Sen sadece adaları değil, kelimelerin ve okumanın büyülü dünyasını fethettin. Gerçek hazine; dikkatle okuyan, anlayan, düşünen ve iyilikle dolup taşan kalbindir.'",
      "Gaga gökyüzüne doğru sevinçle uçtu, ada halkı kale avlusunda toplanıp alkışlarla Efe'yi selamladı. Küçük kaşif artık hem bir ada kahramanı hem de büyük bir okuma ustasıydı!"
    ],
    vocabulary: [
      {
        word: "Görkemli",
        meaning: "Büyüklüğü, güzelliği ve gösterişiyle insanı hayran bırakan, muhteşem.",
        exampleSentence: "Şehrin merkezindeki görkemli saray herkesi büyülüyordu."
      },
      {
        word: "Sikke",
        meaning: "Eski zamanlarda basılan madeni para.",
        exampleSentence: "Hazine sandığından yüzlerce altın sikke döküldü."
      },
      {
        word: "Fethetmek",
        meaning: "Zorlukları aşıp bir yeri veya başarıyı kazanmak, elde etmek.",
        exampleSentence: "Dağcılar zorlu karlı tepeyi fethedip bayrak diktiler."
      }
    ],
    questions: [
      {
        id: "q7_1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Devasa hazine sandığının içinde altın ve mücevherlerin ortasında ne vardı?",
        options: [
          "A) Altın kapaklı dev bir Bilgi Kitabı ve şampiyonluk madalyası",
          "B) Eski bir oyuncak gemi",
          "C) Sadece boş kağıtlar"
        ],
        correctAnswer: 0,
        explanation: "Sandığın içinde altın kapaklı dev bir Bilgi Kitabı ile '3. Sınıf Baş Kaşifi ve Okuma Şampiyonu' madalyası vardı.",
        clueSentence: "Sandığın içinde pırıl pırıl parlayan altın sikkelerin tam ortasında, altın kapaklı dev bir 'Bilgi Kitabı' ile parıldayan bir madalya vardı!"
      },
      {
        id: "q7_2",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Kitabın ilk sayfasındaki altın harflerin verdiği en büyük mesaj nedir?",
        options: [
          "A) Gerçek hazinenin okumak, anlamak, düşünmek ve iyi bir kalbe sahip olmak olduğu",
          "B) Altınların her zaman saklanması gerektiği",
          "C) Maceraların çok tehlikeli olduğu"
        ],
        correctAnswer: 0,
        explanation: "Kitap, gerçek hazinenin dikkatle okuyan, anlayan, düşünen ve iyilik dolu bir kalp olduğunu vurgular.",
        clueSentence: "'Gerçek hazine; dikkatle okuyan, anlayan, düşünen ve iyilikle dolup taşan kalbindir.'"
      },
      {
        id: "q7_3",
        type: "multiple_choice",
        category: "Karakter Analizi",
        question: "Efe'nin bu büyük macerayı başarıyla tamamlamasının temel sebepleri nelerdir?",
        options: [
          "A) Dikkatli okuması, arkadaşlarına yardım etmesi ve pes etmemesi",
          "B) Yalnızca çok hızlı koşması",
          "C) Haritayı hiç kimseye göstermemesi"
        ],
        correctAnswer: 0,
        explanation: "Efe her adada bilmeceleri sabırla okumuş, hayvanlara yardım etmiş, cesaret ve zekasıyla ilerlemiştir.",
        clueSentence: "Sen sadece adaları değil, kelimelerin ve okumanın büyülü dünyasını fethettin."
      },
      {
        id: "q7_4",
        type: "multiple_choice",
        category: "5N1K",
        question: "Hikayenin sonunda kale avlusunda toplanan ada halkı ne yaptı?",
        options: [
          "A) Alkışlarla Efe'yi selamlayıp başarısını kutladı",
          "B) Sandığı kapatıp sakladı",
          "C) Evlerine gidip uyudu"
        ],
        correctAnswer: 0,
        explanation: "Ada halkı avluda toplanıp alkışlarla Efe'yi selamlamış ve kutlamıştır.",
        clueSentence: "Ada halkı kale avlusunda toplanıp alkışlarla Efe'yi selamladı."
      }
    ],
    rewardChest: {
      coins: 500,
      gemType: "gold_crown",
      gemName: "Efsanevi Krallık Tacı",
      gemColor: "#f59e0b",
      badgeTitle: "Büyük Okuma Şampiyonu",
      badgeIcon: "Trophy",
      secretLore: "Tüm adaları fethettin! 3. Sınıf Hazine Avcısı ve Okuma Şampiyonu unvanına kavuştun!"
    }
  }
];
