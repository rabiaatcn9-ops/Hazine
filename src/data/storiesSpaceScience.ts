import { IslandStory } from "../types";

export const SPACE_SCIENCE_STORIES: IslandStory[] = [
  {
    id: "space-1",
    levelNumber: 18,
    title: "Küçük Robot Çip'in Mars Görevi",
    islandName: "18. Durak: Kızıl Gezegen Mars",
    theme: "space",
    iconName: "Bot",
    colorScheme: {
      bg: "bg-red-50",
      border: "border-red-300",
      accent: "text-red-900",
      badgeBg: "bg-red-600",
      gradient: "from-red-500 to-orange-700",
    },
    synopsis: "Güneş enerjisiyle çalışan sevimli keşif robotu Çip, Mars yüzeyinde donmuş buz kristalleri arar.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Kızıl gezegen Mars'ın pas rengi çöllerinde görev yapan küçük keşif robotu Çip, her sabah sırtındaki güneş panellerini açarak pillerini şarj ederdi. Altı tekerleğiyle kraterlerin arasında sabırla ilerlerdi.",
      "Dünya'daki çocukların gönderdiği özel bir mesaj ekranında belirdi: 'Çip, derin kanyonun tabanındaki parlak taşları incele!' Çip minik robot kolundaki büyüteç ve kamerayı çalıştırarak kayanın altına baktı.",
      "Kayanın gölgesinde parıldayan şey, milyonlarca yıldır saklı kalmış saf su buzu kristalleriydi! Çip sevinçle antenini salladı ve bu harika keşfi Dünya'daki bilim merkezine iletti. Bilim, merakla başlayan en büyük serüvendi."
    ],
    vocabulary: [
      { word: "Krater", meaning: "Göktaşlarının gezegen yüzeyine çarpmasıyla oluşan büyük çukurluk.", exampleSentence: "Ay ve Mars yüzeyinde binlerce derin krater bulunur." },
      { word: "Panel", meaning: "Güneş ışığını elektrik enerjisine dönüştüren özel yüzey levhası.", exampleSentence: "Uzay aracının güneş panelleri pilleri hızla şarj etti." },
      { word: "Kanyon", meaning: "Bir akarsuyun ya da doğa olaylarının kayaları oymasıyla oluşan çok derin ve dik vadi.", exampleSentence: "Mars'taki derin kanyonlar Dünya'dakilerden çok daha büyüktür." }
    ],
    questions: [
      {
        id: "spc1_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Robot Çip enerjisini nereden alıyordu?",
        options: ["A) Sırtındaki güneş panellerinden", "B) Küçük pillerden", "C) Mars rüzgarından"],
        correctAnswer: 0,
        explanation: "Çip her sabah güneş panellerini açarak şarj oluyordu.",
        clueSentence: "...her sabah sırtındaki güneş panellerini açarak pillerini şarj ederdi."
      },
      {
        id: "spc1_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Çip kayanın altında ne keşfetti?",
        options: ["A) Renkli uzay çiçekleri", "B) Saf su buzu kristalleri", "C) Eski bir uzay kaskı"],
        correctAnswer: 1,
        explanation: "Kayanın altında donmuş su buzu kristalleri bulmuştur.",
        clueSentence: "Kayanın gölgesinde parıldayan şey, milyonlarca yıldır saklı kalmış saf su buzu kristalleriydi!"
      },
      {
        id: "spc1_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin verdiği temel mesaj hangisidir?",
        options: ["A) Merak, araştırma ve bilim insanlığı yeni ufuklara taşır", "B) Robotlar yorulmaz", "C) Mars'a sadece tek bir robot gidebilir"],
        correctAnswer: 0,
        explanation: "Bilimin merakla başlayan en büyük serüven olduğu vurgulanır.",
        clueSentence: "Bilim, merakla başlayan en büyük serüvendi."
      },
      {
        id: "spc1_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Göktaşlarının çarpmasıyla gezegenlerde oluşan çukura ne ad verilir?",
        options: ["A) Krater", "B) Vaha", "C) Mağara"],
        correctAnswer: 0,
        explanation: "Göktaşı çukuruna krater denir.",
        clueSentence: "Altı tekerleğiyle kraterlerin arasında sabırla ilerlerdi."
      }
    ],
    rewardChest: {
      coins: 140,
      gemType: "ruby",
      gemName: "Mars Kristali",
      gemColor: "#ef4444",
      badgeTitle: "Uzay Kaşifi",
      badgeIcon: "Bot",
      secretLore: "Kızıl Gezegen'in gizemli sularını ilk keşfeden bilim insanı sensin!"
    }
  },
  {
    id: "space-2",
    levelNumber: 19,
    title: "Ay'a Bakan Teleskop ve Küçük Ali",
    islandName: "19. Durak: Yıldız Gözlemevi",
    theme: "space",
    iconName: "Eye",
    colorScheme: {
      bg: "bg-indigo-50",
      border: "border-indigo-300",
      accent: "text-indigo-900",
      badgeBg: "bg-indigo-700",
      gradient: "from-indigo-600 to-slate-800",
    },
    synopsis: "Dedesiyle birlikte çatı katında gökyüzünü inceleyen Ali'nin gökbilim tutkusu.",
    readingTimeMinutes: 2,
    wordCount: 155,
    paragraphs: [
      "Küçük Ali her gece yatmadan önce odasının penceresinden gökyüzündeki parlayan yıldızları ve dolunayı seyrederdi. Doğum gününde dedesi ona mavi renkli harika bir gökbilim teleskobu hediye etti.",
      "Hemen o akşam çatı katına çıktılar. Ali gözünü teleskobun merceğine dayadığında adeta büyülendi! Ay'ın üzerindeki vadileri, dağları ve kraterleri ilk kez bu kadar yakından ve net görebiliyordu.",
      "Dedesi, 'Evren sorular soran ve araştıran çocukları bekleyen dev bir kütüphanedir Ali' dedi. Ali o gece defterine ilk gökyüzü haritasını çizdi ve büyüyünce astronot olmaya karar verdi."
    ],
    vocabulary: [
      { word: "Teleskop", meaning: "Uzaktaki gök cisimlerini (yıldızlar, gezegenler) büyüterek yakından görmeyi sağlayan optik araç.", exampleSentence: "Teleskopla Satürn'ün halkalarını hayranlıkla izledik." },
      { word: "Gökbilim", meaning: "Gök cisimlerinin konumlarını, hareketlerini ve yapılarını inceleyen bilim dalı (Astronomi).", exampleSentence: "Gökbilim kulübündeki öğrenciler takımyıldızları öğrendi." },
      { word: "Mercek", meaning: "Işığı kırarak cisimleri büyütmeye veya küçültmeye yarayan özel cam.", exampleSentence: "Büyütecin içindeki mercek karıncayı kocaman gösterdi." }
    ],
    questions: [
      {
        id: "spc2_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Dedesi Ali'ye doğum gününde ne hediye etti?",
        options: ["A) Mavi renkli bir teleskop", "B) Oyuncak bir uçak", "C) Resimli bir roman"],
        correctAnswer: 0,
        explanation: "Dedesi Ali'ye mavi renkli bir teleskop hediye etmiştir.",
        clueSentence: "Doğum gününde dedesi ona mavi renkli harika bir gökbilim teleskobu hediye etti."
      },
      {
        id: "spc2_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Ali teleskopla Ay'a baktığında neleri net olarak gördü?",
        options: ["A) Yolları ve arabaları", "B) Vadileri, dağları ve kraterleri", "C) Büyük okyanusları"],
        correctAnswer: 1,
        explanation: "Ay'daki vadileri, dağları ve kraterleri görmüştür.",
        clueSentence: "Ay'ın üzerindeki vadileri, dağları ve kraterleri ilk kez bu kadar yakından ve net görebiliyordu."
      },
      {
        id: "spc2_q3",
        type: "multiple_choice",
        category: "Karakter Analizi",
        question: "Ali'nin gelecekle ilgili en büyük hayali nedir?",
        options: ["A) Deniz kaptanı olmak", "B) Astronot olmak", "C) Bahçıvan olmak"],
        correctAnswer: 1,
        explanation: "Ali o gece büyüyünce astronot olmaya karar vermiştir.",
        clueSentence: "Ali o gece defterine ilk gökyüzü haritasını çizdi ve büyüyünce astronot olmaya karar verdi."
      },
      {
        id: "spc2_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Yıldızları ve gezegenleri yakından görmemizi sağlayan alet hangisidir?",
        options: ["A) Mikroskop", "B) Teleskop", "C) Pusula"],
        correctAnswer: 1,
        explanation: "Gökyüzü gözlemi için teleskop kullanılır.",
        clueSentence: "Ali gözünü teleskobun merceğine dayadığında..."
      }
    ],
    rewardChest: {
      coins: 140,
      gemType: "sapphire",
      gemName: "Kutup Yıldızı Safiri",
      gemColor: "#3b82f6",
      badgeTitle: "Yıldız Gözlemcisi",
      badgeIcon: "Eye",
      secretLore: "Gökyüzüne bakan gözler geleceği inşa eder!"
    }
  },
  {
    id: "space-3",
    levelNumber: 20,
    title: "Güneş Enerjili Oyuncak Araba",
    islandName: "20. Durak: İnovasyon Atölyesi",
    theme: "space",
    iconName: "Zap",
    colorScheme: {
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      accent: "text-yellow-900",
      badgeBg: "bg-yellow-600",
      gradient: "from-yellow-500 to-amber-700",
    },
    synopsis: "Fen bilimleri projesi için temiz enerji kullanan mucit Elif'in birincilik başarısı.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Okuldaki fen bilimleri şenliği için Elif, pille çalışan arabalar yerine çevreye hiç zarar vermeyen bir icat yapmak istedi. Babasıyla birlikte eski bir karton kutu, dört kapak ve küçük bir güneş hücresi temin ettiler.",
      "Elif telleri küçük motora bağladı ve güneş panelini arabanın tavanına monte etti. Okul bahçesindeki yarışma başladığında diğer pilli arabaların şarjı biterken, Elif'in arabası güneş ışığı aldıkça hızlanmaya devam etti.",
      "Jüri üyeleri temiz ve yenilenebilir enerji kullanan bu harika tasarıma birincilik ödülü verdiler. Elif, doğayı koruyan teknolojilerin geleceğin en büyük anahtarı olduğunu arkadaşlarına gururla anlattı."
    ],
    vocabulary: [
      { word: "Yenilenebilir", meaning: "Kullanıldıkça tükenmeyen, doğada sürekli var olan enerji kaynakları (Güneş, Rüzgar, Su).", exampleSentence: "Güneş ve rüzgar enerjisi temiz ve yenilenebilir kaynaklardır." },
      { word: "İcat", meaning: "Daha önce bilinmeyen yeni bir şeyi ilk kez yapma, buluş.", exampleSentence: "Küçük mucidin yaptığı icat okul şenliğinde büyük ilgi gördü." },
      { word: "Monte etmek", meaning: "Parçaları birbirine uygun şekilde yerleştirip bağlamak, kurmak.", exampleSentence: "Güneş panelini arabanın tavanına özenle monte ettiler." }
    ],
    questions: [
      {
        id: "spc3_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Elif projesinde arabanın çalışması için hangi enerjiyi kullandı?",
        options: ["A) Benzin enerjisini", "B) Güneş enerjisini", "C) Kömür enerjisini"],
        correctAnswer: 1,
        explanation: "Güneş panelinden elde edilen temiz güneş enerjisini kullanmıştır.",
        clueSentence: "...küçük bir güneş hücresi temin ettiler."
      },
      {
        id: "spc3_q2",
        type: "multiple_choice",
        category: "Neden-Sonuç",
        question: "Jüri Elif'e neden birincilik ödülü verdi?",
        options: ["A) Arabası sadece kırmızı olduğu için", "B) Çevreye duyarlı, temiz ve yenilenebilir enerji kullandığı için", "C) En büyük kutuyu kullandığı için"],
        correctAnswer: 1,
        explanation: "Doğa dostu yenilenebilir enerji tasarımı birincilik getirmiştir.",
        clueSentence: "Jüri üyeleri temiz ve yenilenebilir enerji kullanan bu harika tasarıma birincilik ödülü verdiler."
      },
      {
        id: "spc3_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayenin vermek istediği ana fikir nedir?",
        options: ["A) Temiz ve yenilenebilir enerji kaynakları çevremizi ve dünyamızın geleceğini korur", "B) Yarışmalara katılmamak gerekir", "C) Piller asla bitmez"],
        correctAnswer: 0,
        explanation: "Doğayı koruyan teknolojilerin önemini anlatır.",
        clueSentence: "Elif, doğayı koruyan teknolojilerin geleceğin en büyük anahtarı olduğunu arkadaşlarına gururla anlattı."
      },
      {
        id: "spc3_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Doğada tükenmeyen temiz enerji kaynaklarına ne denir?",
        options: ["A) Zararlı enerji", "B) Yenilenebilir enerji", "C) Geçici enerji"],
        correctAnswer: 1,
        explanation: "Güneş ve rüzgar yenilenebilir enerjidir.",
        clueSentence: "...temiz ve yenilenebilir enerji kullanan bu harika tasarıma..."
      }
    ],
    rewardChest: {
      coins: 145,
      gemType: "diamond",
      gemName: "Güneş Pili Kristali",
      gemColor: "#f59e0b",
      badgeTitle: "Genç Mucit",
      badgeIcon: "Zap",
      secretLore: "Doğanın temiz enerjisiyle geleceğe ışık tutuyorsun!"
    }
  },
  {
    id: "space-4",
    levelNumber: 21,
    title: "Denizaltı ile Okyanusun Derinliklerine",
    islandName: "21. Durak: Batık Vadi Derinlikleri",
    theme: "coral",
    iconName: "Compass",
    colorScheme: {
      bg: "bg-blue-50",
      border: "border-blue-300",
      accent: "text-blue-900",
      badgeBg: "bg-blue-600",
      gradient: "from-blue-600 to-indigo-900",
    },
    synopsis: "Sarı araştırma denizaltısıyla okyanus tabanındaki ışık saçan gizemli deniz canlılarını inceleyen bilim ekibi.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Kaptan Deniz ve küçük araştırmacı Zeynep, sarı renkli özel araştırma denizaltısına binerek okyanusun güneş ışığı girmeyen bin metre derinliğine indiler. Denizaltının dev farları açıldığında etraf masalsı bir dünyaya dönüştü.",
      "Karanlık sularda kendi vücutlarından parıl parıl ışık saçan deniz anaları, fener balıkları ve parlayan mercanlar yüzüyordu. Zeynep kameralarla bu ışıklı canlıların görüntülerini kaydetti.",
      "Kaptan Deniz, 'Okyanusların derinliği tıpkı uzay gibi hala keşfedilmeyi bekleyen binlerce sırla doludur' dedi. Zeynep defterine şu notu düştü: Bilgiye dalan bir kaşif için her yer bir hazinedir."
    ],
    vocabulary: [
      { word: "Denizaltı", meaning: "Suyun altında batıp ilerleyebilen, özel donanımlı araştırma veya askeri gemi.", exampleSentence: "Sarı denizaltı okyanusun en derin çukuruna başarıyla daldı." },
      { word: "Biyolüminesans", meaning: "Bazı canlıların kimyasal reaksiyonla kendi vücutlarından ışık üretme yeteneği.", exampleSentence: "Fener balığı karanlık sularda kendi ışığını yayarak yolunu bulur." },
      { word: "Far", meaning: "Karanlıkta yolu aydınlatmak için kullanılan güçlü ve büyük ışık kaynağı.", exampleSentence: "Denizaltının güçlü farları batık gemiyi aydınlattı." }
    ],
    questions: [
      {
        id: "spc4_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Kaptan Deniz ve Zeynep okyanusun ne kadar derinine indiler?",
        options: ["A) Yüz metre", "B) Beş yüz metre", "C) Bin metre"],
        correctAnswer: 2,
        explanation: "Metinde bin metre derinliğe indikleri yazmaktadır.",
        clueSentence: "...okyanusun güneş ışığı girmeyen bin metre derinliğine indiler."
      },
      {
        id: "spc4_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Derin deniz canlılarının en şaşırtıcı özelliği neydi?",
        options: ["A) Uçabilmeleri", "B) Kendi vücutlarından parıl parıl ışık saçabilmeleri", "C) Çok hızlı koşmaları"],
        correctAnswer: 1,
        explanation: "Karanlık sularda vücutlarından ışık saçmaktadırlar.",
        clueSentence: "Karanlık sularda kendi vücutlarından parıl parıl ışık saçan deniz anaları..."
      },
      {
        id: "spc4_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Dünyamız ve okyanuslar keşfedilmeyi bekleyen eşsiz bilimsel zenginliklerle doludur", "B) Derin denizlerde hiçbir canlı yaşayamaz", "C) Denizaltılar sadece sarı renkte olur"],
        correctAnswer: 0,
        explanation: "Okyanusların keşfedilmeyi bekleyen sırlarla dolu olduğu anlatılır.",
        clueSentence: "'Okyanusların derinliği tıpkı uzay gibi hala keşfedilmeyi bekleyen binlerce sırla doludur'..."
      },
      {
        id: "spc4_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Su altında ilerleyebilen özel araştırma aracına ne denir?",
        options: ["A) Denizaltı", "B) Vapur", "C) Sal"],
        correctAnswer: 0,
        explanation: "Su altında giden araca denizaltı denir.",
        clueSentence: "...sarı renkli özel araştırma denizaltısına binerek..."
      }
    ],
    rewardChest: {
      coins: 145,
      gemType: "amethyst",
      gemName: "Derin Deniz Ametisti",
      gemColor: "#8b5cf6",
      badgeTitle: "Derinlik Bilgini",
      badgeIcon: "Compass",
      secretLore: "Okyanusun en derin sırlarına cesaretle daldın!"
    }
  },
  {
    id: "space-5",
    levelNumber: 22,
    title: "Uçan Dron ve Orman Kurtarma Operasyonu",
    islandName: "22. Durak: Dron İletişim Kulesi",
    theme: "forest",
    iconName: "Radio",
    colorScheme: {
      bg: "bg-teal-50",
      border: "border-teal-300",
      accent: "text-teal-900",
      badgeBg: "bg-teal-600",
      gradient: "from-teal-500 to-emerald-700",
    },
    synopsis: "Kendi programladığı dron ile ormanda kaybolan sevimli köpeği bulan genç yazılımcı Can.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Dokuz yaşındaki Can, bilgisayar kodlama derslerinde öğrendiği bilgilerle küçük kamerasını bir drona bağlamıştı. Kumandasından harita koordinatlarını girerek dronu otomatik uçurabiliyordu.",
      "Köyün yaşlı teyzesinin sevimli fino köpeği Pamuk ormanda kaybolunca köylüler çok endişelendi. Can hemen bilgisayarını açtı ve dronu ağaçların üzerinden uçurup termal kamerayla tarama yaptı.",
      "Çok geçmeden derenin kenarındaki çalılıkta saklanan beyaz bir sıcaklık noktası fark etti. Köylüler verilen konuma giderek Pamuk'u sağ salim kurtardılar. Teknoloji iyi amaçlarla kullanıldığında dünyayı güzelleştiren bir iyilik aracına dönüşüyordu."
    ],
    vocabulary: [
      { word: "Dron", meaning: "Uzaktan kumandayla veya bilgisayar yazılımıyla uçurulan insansız hava aracı.", exampleSentence: "Dron ormanın üzerinden uçarak harika görüntüler kaydetti." },
      { word: "Kodlama", meaning: "Bilgisayarlara ve cihazlara belirli görevleri yapması için komut yazma işlemi.", exampleSentence: "Çocuklar kodlama öğrenerek kendi eğitici oyunlarını tasarladılar." },
      { word: "Koordinat", meaning: "Bir noktanın haritadaki kesin yerini belirleyen sayılar ve çizgiler.", exampleSentence: "Kaptan harita koordinatlarını girerek rotayı çizdi." }
    ],
    questions: [
      {
        id: "spc5_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Can köpeği bulmak için dronunda hangi kamerayı kullandı?",
        options: ["A) Gece lambası", "B) Termal kamera", "C) Teleskop merceği"],
        correctAnswer: 1,
        explanation: "Sıcaklık noktalarını gören termal kamera kullanmıştır.",
        clueSentence: "...dronu ağaçların üzerinden uçurup termal kamerayla tarama yaptı."
      },
      {
        id: "spc5_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Pamuk nerede saklanırken bulundu?",
        options: ["A) Derenin kenarındaki çalılıkta", "B) Bir ağacın tepesinde", "C) Ahırın içinde"],
        correctAnswer: 0,
        explanation: "Derenin kenarındaki çalılıkta bulunmuştur.",
        clueSentence: "Çok geçmeden derenin kenarındaki çalılıkta saklanan beyaz bir sıcaklık noktası fark etti."
      },
      {
        id: "spc5_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Bilgisayar ve teknoloji iyilik ve canlılara yardım için kullanıldığında çok değerlidir", "B) Ormanlara hiç gidilmemelidir", "C) Köpekler yalnız gezmelidir"],
        correctAnswer: 0,
        explanation: "Teknolojinin iyi amaçlarla canlılara fayda sağlayabileceği anlatılır.",
        clueSentence: "Teknoloji iyi amaçlarla kullanıldığında dünyayı güzelleştiren bir iyilik aracına dönüşüyordu."
      },
      {
        id: "spc5_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Uzaktan kumandayla havada uçurulan pervaneli araca ne ad verilir?",
        options: ["A) Dron", "B) Tren", "C) Traktör"],
        correctAnswer: 0,
        explanation: "Uçan insansız araca dron denir.",
        clueSentence: "...küçük kamerasını bir drona bağlamıştı."
      }
    ],
    rewardChest: {
      coins: 150,
      gemType: "sapphire",
      gemName: "Gökyüzü Sinyal Taşı",
      gemColor: "#0d9488",
      badgeTitle: "Teknoloji Kahramanı",
      badgeIcon: "Radio",
      secretLore: "Kodlama ve bilimle bir canlıya yardım eden altın kalpli bir kaşifsin!"
    }
  },
  {
    id: "space-6",
    levelNumber: 23,
    title: "Dinozor Kemikleri Arayan Genç Paleontolog",
    islandName: "23. Durak: Fosil Vadisi",
    theme: "cave",
    iconName: "Search",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      accent: "text-amber-900",
      badgeBg: "bg-amber-700",
      gradient: "from-amber-600 to-yellow-800",
    },
    synopsis: "Fosil Vadisi'nde ince fırça ve spatulalarla milyonlarca yıllık dinozor izini ortaya çıkaran Selim.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Fosil Vadisi'ndeki kazı alanında çalışan genç paleontolog Selim, elindeki minik fırça ile kaya katmanlarındaki tozları sabırla temizliyordu. Paleontoloji, geçmiş çağlarda yaşamış canlıların taşlaşmış kalıntılarını incelerdi.",
      "Kayanın sert tabakasında taşa gömülü dev bir kemik ucu belirdi. Selim acele etmeden, diş hekimlerinin kullandığı hassas aletlerle kemiğin etrafındaki kireç taşlarını tek tek ayıkladı.",
      "Tam üç gün süren titiz çalışmanın ardından yetmiş milyon yıl önce yaşamış otobur bir dinozorun ayak kemiği kusursuzca gün yüzüne çıktı. Müze müdürü Selim'i tebrik etti. Sabır ve dikkat, geçmişin kapılarını aralayan en büyük güçtü."
    ],
    vocabulary: [
      { word: "Fosil", meaning: "Milyonlarca yıl önce yaşamış bitki ve hayvanların kaya tabakaları arasında taşlaşmış kalıntısı.", exampleSentence: "Müzede sergilenen balık fosili milyonlarca yıllıktı." },
      { word: "Paleontolog", meaning: "Eski çağlardaki fosilleri araştıran, geçmiş yaşamı inceleyen bilim insanı.", exampleSentence: "Genç paleontolog bulunan dinozor iskeletini dikkatle inceledi." },
      { word: "Titiz", meaning: "Bir işi çok büyük özenle, dikkatle ve kusursuzca yapan kimse.", exampleSentence: "Öğrenci ödevini titiz bir çalışmayla hazırladı." }
    ],
    questions: [
      {
        id: "spc6_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Fosilleri ve eski çağ canlılarının kalıntılarını inceleyen bilim insanına ne ad verilir?",
        options: ["A) Paleontolog", "B) Astronot", "C) Kaptan"],
        correctAnswer: 0,
        explanation: "Fosilleri inceleyen uzmana paleontolog denir.",
        clueSentence: "Genç paleontolog Selim, elindeki minik fırça ile kaya katmanlarındaki..."
      },
      {
        id: "spc6_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Selim kazı alanında kaç yıllık bir dinozor kemiği ortaya çıkardı?",
        options: ["A) Yüz yıllık", "B) Yetmiş milyon yıllık", "C) Bin yıllık"],
        correctAnswer: 1,
        explanation: "Metinde yetmiş milyon yıl önce yaşamış dinozora ait olduğu yazmaktadır.",
        clueSentence: "...yetmiş milyon yıl önce yaşamış otobur bir dinozorun ayak kemiği..."
      },
      {
        id: "spc6_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Sabırlı ve titiz bir çalışma geçmişin ve bilimin sırlarını aydınlatır", "B) Bütün kayalar çabucak kırılmalıdır", "C) Dinozorlar hala yaşamaktadır"],
        correctAnswer: 0,
        explanation: "Sabır ve dikkatin başarı getirdiği anlatılmaktadır.",
        clueSentence: "Sabır ve dikkat, geçmişin kapılarını aralayan en büyük güçtü."
      },
      {
        id: "spc6_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Taşlaşmış eski canlı kalıntılarına ne ad verilir?",
        options: ["A) Fosil", "B) Maden", "C) Tuğla"],
        correctAnswer: 0,
        explanation: "Eski canlı kalıntılarına fosil denir.",
        clueSentence: "Paleontoloji, geçmiş çağlarda yaşamış canlıların taşlaşmış kalıntılarını incelerdi."
      }
    ],
    rewardChest: {
      coins: 150,
      gemType: "gold_crown",
      gemName: "Antik Kehribar Taşı",
      gemColor: "#d97706",
      badgeTitle: "Fosil Avcısı",
      badgeIcon: "Search",
      secretLore: "Milyonlarca yıllık tarihi sabırla aydınlattın!"
    }
  },
  {
    id: "space-7",
    levelNumber: 24,
    title: "Zaman Kapsülü ve Eski Haritalar",
    islandName: "24. Durak: Zaman Geçidi",
    theme: "temple",
    iconName: "Clock",
    colorScheme: {
      bg: "bg-purple-50",
      border: "border-purple-300",
      accent: "text-purple-900",
      badgeBg: "bg-purple-600",
      gradient: "from-purple-600 to-indigo-800",
    },
    synopsis: "Okul bahçesine elli yıl önce gömülen zaman kapsülünü açan 3. sınıf öğrencilerinin heyecanı.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Cumhuriyet İlkokulu'nun yüzüncü yıl kutlamalarında, okulun bahçesindeki ulu çınarın altına elli yıl önce gömülmüş olan paslanmaz çelik bir 'Zaman Kapsülü' törenle çıkarıldı.",
      "Kapsülün kapağı açıldığında içinden o yıllarda okuyan 3. sınıf öğrencilerinin yazdığı mektuplar, eski madeni paralar, ahşap bir kurşun kalem ve elle çizilmiş rengarenk bir dünya haritası çıktı.",
      "Mektupta şöyle yazıyordu: 'Sevgili geleceğin çocukları! Biz kitapları çok sevdik, ağaçlar diktik. Siz de doğayı sevin ve hep öğrenmeye devam edin.' Öğrenciler bu mektubu okurken gözleri parıldadı ve onlar da elli yıl sonrası için yeni bir kapsül hazırladılar."
    ],
    vocabulary: [
      { word: "Zaman kapsülü", meaning: "Gelecekteki insanlara o dönemin eşyalarını ve mesajlarını iletmek için gömülen korunaklı sandık veya kutu.", exampleSentence: "Öğrenciler bugünün fotoğraflarını zaman kapsülüne koydular." },
      { word: "Kuşak", meaning: "Yaklaşık aynı yıllarda doğmuş, aynı çağın şartlarını paylaşan insanlar topluluğu (Nesil).", exampleSentence: "Eski kuşakların bıraktığı güzel eserleri korumalıyız." },
      { word: "Tören", meaning: "Önemli bir olayı anmak veya kutlamak için düzenlenen resmi toplantı.", exampleSentence: "23 Nisan bayramında okul bahçesinde coşkulu bir tören yapıldı." }
    ],
    questions: [
      {
        id: "spc7_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Zaman kapsülü ağacın altına kaç yıl önce gömülmüştü?",
        options: ["A) On yıl", "B) Yirmi yıl", "C) Elli yıl"],
        correctAnswer: 2,
        explanation: "Metinde elli yıl önce gömüldüğü yazmaktadır.",
        clueSentence: "...ulu çınarın altına elli yıl önce gömülmüş olan paslanmaz çelik bir 'Zaman Kapsülü'..."
      },
      {
        id: "spc7_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Kapsülün içinden çıkan mektupta geleceğin çocuklarına ne öğütleniyordu?",
        options: ["A) Doğayı sevmeleri ve hep öğrenmeye devam etmeleri", "B) Yalnızca televizyon izlemeleri", "C) Ağaçları sulamamaları"],
        correctAnswer: 0,
        explanation: "Doğayı sevmek ve öğrenmeye devam etmek öğütlenmiştir.",
        clueSentence: "'Siz de doğayı sevin ve hep öğrenmeye devam edin.'"
      },
      {
        id: "spc7_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayenin ana fikri nedir?",
        options: ["A) Geçmiş ile gelecek arasında en güzel köprü bilgi, doğa sevgisi ve paylaşılan değerlerdir", "B) Eski eşyalar atılmalıdır", "C) Zaman kapsülleri açılmamalıdır"],
        correctAnswer: 0,
        explanation: "Kuşaklar arası bilgi ve sevgi köprüsü ana fikirdir.",
        clueSentence: "Öğrenciler bu mektubu okurken gözleri parıldadı ve onlar da elli yıl sonrası için yeni bir kapsül hazırladılar."
      },
      {
        id: "spc7_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Geleceğe mesaj ve hatıra bırakmak için hazırlanan kutuya ne denir?",
        options: ["A) Çöp kutusu", "B) Zaman kapsülü", "C) Kumbara"],
        correctAnswer: 1,
        explanation: "Geleceğe bırakılan kutuya zaman kapsülü denir.",
        clueSentence: "...paslanmaz çelik bir 'Zaman Kapsülü' törenle çıkarıldı."
      }
    ],
    rewardChest: {
      coins: 155,
      gemType: "diamond",
      gemName: "Zaman Çarkı Kristali",
      gemColor: "#a855f7",
      badgeTitle: "Zaman Yolcusu",
      badgeIcon: "Clock",
      secretLore: "Geçmişin bilgeliğini geleceğin umutlarıyla birleştirdin!"
    }
  },
  {
    id: "space-8",
    levelNumber: 25,
    title: "Rüzgar Türbini ve Temiz Köy",
    islandName: "25. Durak: Rüzgarlı Tepe",
    theme: "forest",
    iconName: "Wind",
    colorScheme: {
      bg: "bg-sky-50",
      border: "border-sky-300",
      accent: "text-sky-900",
      badgeBg: "bg-sky-600",
      gradient: "from-sky-500 to-cyan-700",
    },
    synopsis: "Tepeden esen güçlü rüzgarı elektriğe dönüştürüp köyün kütüphanesini aydınlatan rüzgar gülü projesi.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Rüzgarlı Tepe köyü, yılın her mevsimi tatlı ve serin rüzgarlar alan yüksek bir yamaca kurulmuştu. Köyün genç öğretmeni ve öğrencileri, bu rüzgarı faydalı bir enerjiye dönüştürmeye karar verdiler.",
      "Köylülerin yardımıyla tepeye üç büyük beyaz kanatlı modern bir rüzgar türbini kuruldu. Rüzgar estikçe dev kanatlar dönüyor, jeneratör tertemiz elektrik üretiyordu.",
      "Üretilen elektrik sayesinde köy kütüphanesi geceleri pırıl pırıl aydınlandı ve sokak lambaları yandı. Çocuklar artık akşamları da kütüphanede toplanıp kitap okuyabiliyordu. Doğa bize ihtiyacımız olan her enerjiyi cömertçe sunuyordu."
    ],
    vocabulary: [
      { word: "Türbin", meaning: "Rüzgar veya suyun gücüyle dönerek elektrik üreten çarklı büyük mekanizma.", exampleSentence: "Tepedeki rüzgar türbinleri köyün elektriğini karşıladı." },
      { word: "Jeneratör", meaning: "Mekanik hareketi elektrik enerjisine çeviren makine.", exampleSentence: "Dönen kanatlar jeneratörü çalıştırıp ışıkları yaktı." },
      { word: "Cömert", meaning: "Elindekini başkalarıyla bol bol paylaşan, esirgemeyen kimse veya durum.", exampleSentence: "Doğa insanlara temiz havasını ve suyunu cömertçe sunar." }
    ],
    questions: [
      {
        id: "spc8_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Rüzgar türbini ne sayesinde elektrik üretti?",
        options: ["A) Kömür yakarak", "B) Rüzgarın gücüyle dev kanatları döndürerek", "C) Pilleri takarak"],
        correctAnswer: 1,
        explanation: "Rüzgar estikçe dönen kanatlar jeneratörü çalıştırmıştır.",
        clueSentence: "Rüzgar estikçe dev kanatlar dönüyor, jeneratör tertemiz elektrik üretiyordu."
      },
      {
        id: "spc8_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Üretilen temiz elektrikle neresi aydınlatıldı?",
        options: ["A) Fabrikalar", "B) Köy kütüphanesi ve sokak lambaları", "C) Boş depolar"],
        correctAnswer: 1,
        explanation: "Köy kütüphanesi ve sokak lambaları aydınlatılmıştır.",
        clueSentence: "Üretilen elektrik sayesinde köy kütüphanesi geceleri pırıl pırıl aydınlandı..."
      },
      {
        id: "spc8_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayenin ana düşüncesi nedir?",
        options: ["A) Doğal ve temiz kaynakları doğru kullanarak hayatımızı ve çevremizi güzelleştirebiliriz", "B) Rüzgarlı havalarda dışarı çıkılmamalıdır", "C) Kütüphaneler sadece gündüz açılmalıdır"],
        correctAnswer: 0,
        explanation: "Temiz enerjinin çevreye ve topluma faydası anlatılır.",
        clueSentence: "Doğa bize ihtiyacımız olan her enerjiyi cömertçe sunuyordu."
      },
      {
        id: "spc8_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Rüzgar gücüyle dönerek elektrik üreten yüksek pervaneli yapıya ne ad verilir?",
        options: ["A) Rüzgar türbini", "B) Su kuyusu", "C) Baca"],
        correctAnswer: 0,
        explanation: "Rüzgardan elektrik üreten sisteme rüzgar türbini denir.",
        clueSentence: "...tepeye üç büyük beyaz kanatlı modern bir rüzgar türbini kuruldu."
      }
    ],
    rewardChest: {
      coins: 160,
      gemType: "emerald",
      gemName: "Rüzgar Zümrüdü",
      gemColor: "#0284c7",
      badgeTitle: "Yeşil Enerji Muhafızı",
      badgeIcon: "Wind",
      secretLore: "Rüzgarın temiz gücüyle köyün kütüphanesini aydınlattın!"
    }
  },
  {
    id: "space-9",
    levelNumber: 26,
    title: "Akıllı Gözlük ve Doğa Dedektifi",
    islandName: "26. Durak: Botanik Laboratuvarı",
    theme: "forest",
    iconName: "Glasses",
    colorScheme: {
      bg: "bg-emerald-50",
      border: "border-emerald-300",
      accent: "text-emerald-900",
      badgeBg: "bg-emerald-600",
      gradient: "from-emerald-500 to-teal-700",
    },
    synopsis: "Baktığı her yaprağın ve böceğin türünü tanıyan akıllı gözlüğüyle ormanı inceleyen genç biyolog.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Mert, okulun teknoloji atölyesinde yapay zeka ile çalışan küçük bir 'Doğa Tanıma Gözlüğü' geliştirmişti. Bu gözlükle bir ağaca veya kelebeğe baktığında, camın köşesinde canlının adı ve özellikleri yazıyordu.",
      "Hafta sonu arkadaşlarıyla milli parka gittiler. Mert gözlüğü taktığında asırlık bir kayın ağacının üzerinde çok nadir görülen benekli bir uğur böceği türü tespit etti. Arkadaşları bu canlının zararlı böcekleri temizlediğini öğrendiler.",
      "Öğretmenleri Mert'in çalışmasını bilim dergisine gönderdi. Mert, 'Teknoloji doğayı yok etmek için değil, onu daha yakından tanıyıp korumak için en büyük yardımcımızdır' dedi."
    ],
    vocabulary: [
      { word: "Biyolog", meaning: "Canlıların yapısını, yaşam biçimlerini ve çevreyle ilişkilerini inceleyen bilim insanı.", exampleSentence: "Genç biyolog ormandaki bitki çeşitlerini defterine kaydetti." },
      { word: "Nadir", meaning: "Az bulunan, sıklıkla görülmeyen ve çok kıymetli olan.", exampleSentence: "Ormanda çok nadir bulunan mavi bir orkide çiçeği açmıştı." },
      { word: "Botanik", meaning: "Bitkileri inceleyen bitki bilimi dalı.", exampleSentence: "Botanik bahçesinde dünyanın her yerinden getirilmiş ağaçlar vardı." }
    ],
    questions: [
      {
        id: "spc9_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Mert'in geliştirdiği akıllı gözlük ne işe yarıyordu?",
        options: ["A) Film izletiyordu", "B) Baktığı bitki ve böceklerin adını ve özelliklerini gösteriyordu", "C) Sadece karanlıkta parlıyordu"],
        correctAnswer: 1,
        explanation: "Doğadaki canlıların türünü ve özelliklerini tanımlıyordu.",
        clueSentence: "...camın köşesinde canlının adı ve özellikleri yazıyordu."
      },
      {
        id: "spc9_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Mert kayın ağacının üzerinde hangi canlıyı tespit etti?",
        options: ["A) Nadir görülen benekli bir uğur böceğini", "B) Küçük bir sincabı", "C) Ağaçkakanı"],
        correctAnswer: 0,
        explanation: "Nadir görülen benekli uğur böceğini bulmuştur.",
        clueSentence: "...çok nadir görülen benekli bir uğur böceği türü tespit etti."
      },
      {
        id: "spc9_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Teknolojiyi doğayı tanımak, sevmek ve korumak için kullanmalıyız", "B) Böceklerden uzak durulmalıdır", "C) Gözlük sadece güneşte takılır"],
        correctAnswer: 0,
        explanation: "Teknolojinin doğayı korumadaki önemi vurgulanır.",
        clueSentence: "'Teknoloji doğayı yok etmek için değil, onu daha yakından tanıyıp korumak için en büyük yardımcımızdır'..."
      },
      {
        id: "spc9_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Az bulunan, çok kıymetli ve seyrek rastlanan şeylere ne denir?",
        options: ["A) Nadir", "B) Sıradan", "C) Yaygın"],
        correctAnswer: 0,
        explanation: "Az rastlanana nadir denir.",
        clueSentence: "...çok nadir görülen benekli bir uğur böceği..."
      }
    ],
    rewardChest: {
      coins: 165,
      gemType: "diamond",
      gemName: "Doğa Merceği Kristali",
      gemColor: "#10b981",
      badgeTitle: "Biyo-Dedektif",
      badgeIcon: "Glasses",
      secretLore: "Doğanın binbir mucizesini bilim gözüyle inceledin!"
    }
  },
  {
    id: "space-10",
    levelNumber: 27,
    title: "Yıldızlararası İletişim Uydusu",
    islandName: "27. Durak: Kozmik İstasyon",
    theme: "space",
    iconName: "Radio",
    colorScheme: {
      bg: "bg-slate-900",
      border: "border-indigo-400",
      accent: "text-indigo-200",
      badgeBg: "bg-indigo-600",
      gradient: "from-indigo-700 to-purple-900",
    },
    synopsis: "Dünya'nın yörüngesinde dönerek fırtınaları önceden haber veren barışçıl hava uydusu Mavi Küre.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Dünya'nın beş yüz kilometre yukarısındaki yörüngede sessizce süzülen Mavi Küre uydusu, gece gündüz mavi gezegenimizin fotoğraflarını çekiyordu. Görevi okyanuslardaki fırtınaları ve tayfunları önceden haber vermekti.",
      "Bir sabah okyanus üzerinde hızla büyüyen dev bir kasırga bulutu tespit etti. Uydu hemen yer istasyonuna acil sinyal gönderdi. Kıyıdaki balıkçı tekneleri fırtına kopmadan önce güvenli limanlara sığındılar.",
      "Uzaydaki bir avuç bilim insanının emeği, yeryüzündeki binlerce insanın ve canlının hayatını kurtarmıştı. Uzay araştırmaları, tüm insanlığın ortak barış ve güvenlik kalkanıydı."
    ],
    vocabulary: [
      { word: "Yörünge", meaning: "Bir gök cisminin veya uydunun başka bir cisim çevresinde dolanırken çizdiği düzenli yol.", exampleSentence: "Haberleşme uyduları Dünya'nın yörüngesinde kesintisiz döner." },
      { word: "Kasırga", meaning: "Saatte yüz kilometreyi aşan çok şiddetli ve yıkıcı dönen fırtına.", exampleSentence: "Uydu kasırganın yönünü önceden haber verdi." },
      { word: "Liman", meaning: "Gemilerin fırtınadan korunduğu, yük indirip bindirdiği korunaklı kıyı tesisi.", exampleSentence: "Fırtına başlamadan önce balıkçılar sakin limana yanaştı." }
    ],
    questions: [
      {
        id: "spc10_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Mavi Küre uydusunun ana görevi neydi?",
        options: ["A) Diğer gezegenlere roket fırlatmak", "B) Okyanuslardaki fırtına ve kasırgaları önceden haber vermek", "C) Sadece müzik çalmak"],
        correctAnswer: 1,
        explanation: "Hava olaylarını ve kasırgaları önceden tespit etmektir.",
        clueSentence: "Görevi okyanuslardaki fırtınaları ve tayfunları önceden haber vermekti."
      },
      {
        id: "spc10_q2",
        type: "multiple_choice",
        category: "Neden-Sonuç",
        question: "Balıkçı tekneleri neden güvenli limanlara sığındı?",
        options: ["A) Uydudan kasırga uyarısı sinyali geldiği için", "B) Balık tutmayı bıraktıkları için", "C) Akşam olduğu için"],
        correctAnswer: 0,
        explanation: "Uydu sinyaliyle yaklaşan kasırga önceden haber verilmiştir.",
        clueSentence: "Uydu hemen yer istasyonuna acil sinyal gönderdi. Kıyıdaki balıkçı tekneleri fırtına kopmadan önce güvenli limanlara sığındılar."
      },
      {
        id: "spc10_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana fikri hangisidir?",
        options: ["A) Uzay ve uydu teknolojileri dünyadaki yaşamı ve insanları koruyan büyük bir bilimsel kalkandır", "B) Balıkçılar denize hiç çıkmamalıdır", "C) Uydular geceleri çalışmaz"],
        correctAnswer: 0,
        explanation: "Uzay biliminin insan hayatını koruma gücü ana fikirdir.",
        clueSentence: "Uzay araştırmaları, tüm insanlığın ortak barış ve güvenlik kalkanıydı."
      },
      {
        id: "spc10_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Dünya etrafında uzayda çizilen düzenli yola ne ad verilir?",
        options: ["A) Yörünge", "B) Patika", "C) Cadde"],
        correctAnswer: 0,
        explanation: "Uzaydaki düzenli yola yörünge denir.",
        clueSentence: "Dünya'nın beş yüz kilometre yukarısındaki yörüngede..."
      }
    ],
    rewardChest: {
      coins: 170,
      gemType: "gold_crown",
      gemName: "Kozmik Yıldız Tacı",
      gemColor: "#6366f1",
      badgeTitle: "Yörünge Kaptanı",
      badgeIcon: "Radio",
      secretLore: "Yeryüzünü uzayın derinliklerinden koruyan yüce bir kaşifsin!"
    }
  }
];
