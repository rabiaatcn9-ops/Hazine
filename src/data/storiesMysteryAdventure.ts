import { IslandStory } from "../types";

export const MYSTERY_ADVENTURE_STORIES: IslandStory[] = [
  {
    id: "mystery-1",
    levelNumber: 48,
    title: "Dedektif Elif ve Kayıp Bisikletin İzi",
    islandName: "48. Durak: Dedektif Bürosu",
    theme: "temple",
    iconName: "Search",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      accent: "text-amber-900",
      badgeBg: "bg-amber-600",
      gradient: "from-amber-500 to-yellow-700",
    },
    synopsis: "Tekerlek izlerini ve çamurlu patikayı takip ederek komşu çocuğun sakladığı bisikleti bulan küçük dedektif.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Mahallenin meraklı dedektifi Elif, elindeki büyüteç ve küçük not defteriyle bilinmeyen gizemleri çözmeye bayılırdı. Bir sabah arkadaşı Can'ın kırmızı bisikleti bahçeden kayboldu.",
      "Elif hemen bahçe kapısındaki yumuşak çamuru inceledi. Çamurda özel tırtıklı bir bisiklet lastiği izi ve yanında küçük bir köpek pati izi vardı. İpuçlarını takip ederek dere kenarındaki yaşlı söğüt ağacına kadar yürüdü.",
      "Ağacın altında Can'ın küçük köpeği Karabaş'ın bisikletin tekerleğindeki çıngırağı oyuncak sanıp bisikleti oraya kadar çektiğini gördü. Elif not defterine gülümsedi: Dikkatli gözlem, en karmaşık düğümleri bile çözer."
    ],
    vocabulary: [
      { word: "Gözlem", meaning: "Bir nesnenin, olayın ya da canlının durumunu dikkatle inceleme işi.", exampleSentence: "Küçük dedektif büyüteciyle bahçede dikkatli bir gözlem yaptı." },
      { word: "İpucu", meaning: "Gizli veya bilinmeyen bir gerçeğe ulaştıran ufak işaret, kanıt.", exampleSentence: "Çamurdaki lastik izi dedektife çok önemli bir ipucu verdi." },
      { word: "Karmaşık", meaning: "İç içe geçmiş, anlaşılması veya çözülmesi zor olan, karışık.", exampleSentence: "Karmaşık bilmeceyi sabırla düşünerek çözdü." }
    ],
    questions: [
      {
        id: "myst1_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Elif bahçe kapısındaki çamurda neyin izlerini buldu?",
        options: ["A) Tırtıklı bisiklet lastiği ve köpek pati izi", "B) Kuş ayak izleri", "C) Kedi tırmık izleri"],
        correctAnswer: 0,
        explanation: "Bisiklet lastiği ve köpek pati izi bulmuştur.",
        clueSentence: "Çamurda özel tırtıklı bir bisiklet lastiği izi ve yanında küçük bir köpek pati izi vardı."
      },
      {
        id: "myst1_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Bisikleti söğüt ağacının altına kim çekmişti?",
        options: ["A) Can'ın sevimli köpeği Karabaş", "B) Yabancı bir çocuk", "C) Bahçıvan"],
        correctAnswer: 0,
        explanation: "Karabaş çıngırağı oyuncak sanıp çekmiştir.",
        clueSentence: "...Can'ın küçük köpeği Karabaş'ın bisikletin tekerleğindeki çıngırağı oyuncak sanıp bisikleti oraya kadar çektiğini gördü."
      },
      {
        id: "myst1_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Dikkatli bakmak, ipuçlarını birleştirmek ve mantıklı düşünmek her gizemi aydınlatır", "B) Bisikletlere binilmemelidir", "C) Çamurlu yerlerde yürünmez"],
        correctAnswer: 0,
        explanation: "Gözlem ve dikkatin problem çözmedeki gücü ana fikirdir.",
        clueSentence: "Dikkatli gözlem, en karmaşık düğümleri bile çözer."
      },
      {
        id: "myst1_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Bir gerçeği ortaya çıkarmaya yarayan küçük işarete ne ad verilir?",
        options: ["A) İpucu (Kanıt)", "B) Masal", "C) Gölge"],
        correctAnswer: 0,
        explanation: "Kanıt ve işarete ipucu denir.",
        clueSentence: "İpuçlarını takip ederek dere kenarındaki..."
      }
    ],
    rewardChest: {
      coins: 265,
      gemType: "diamond",
      gemName: "Büyüteç Kristali",
      gemColor: "#38bdf8",
      badgeTitle: "Usta Dedektif",
      badgeIcon: "Search",
      secretLore: "Keskin gözlerinle tüm gizemlerin perdesini araladın!"
    }
  },
  {
    id: "mystery-2",
    levelNumber: 49,
    title: "Müzedeki Antik Pusulanın Şifresi",
    islandName: "49. Durak: Antik Müze",
    theme: "temple",
    iconName: "Compass",
    colorScheme: {
      bg: "bg-indigo-50",
      border: "border-indigo-300",
      accent: "text-indigo-900",
      badgeBg: "bg-indigo-700",
      gradient: "from-indigo-600 to-purple-800",
    },
    synopsis: "Müzedeki gümüş pusulanın üzerindeki roma rakamlarını çözerek kütüphanedeki gizli bölmeyi açan öğrenciler.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Arkeoloji müzesine geziye giden 3. sınıf öğrencileri Kaan ve Aslı, cam vitrinin içinde duran Selçuklu dönemine ait gümüş bir yön pusulası gördüler. Pusulanın kadranında incecik harflerle bir bilmece kazınmıştı.",
      "'Kuzeyi gösterir ibrem, yıldızlara bakar pencerem. Üç adım doğuya yürü, bulursun kitapların en gürünü.' İki arkadaş pusulanın gösterdiği yöne doğru müzenin tarihi kütüphane salonuna adımladılar.",
      "Kütüphanenin doğu duvarındaki ahşap oyma panonun arkasında, yüzyıllar öncesine ait el yazması bir gökbilim kitabı duruyordu. Tarih, meraklı zihinlerin dokunuşuyla yaşayan bir hazinedir."
    ],
    vocabulary: [
      { word: "Kadran", meaning: "Saat, pusula veya ölçü aletlerinde sayıların ve göstergelerin yer aldığı yüzey.", exampleSentence: "Antik pusulanın kadranında altın yıldız motifleri vardı." },
      { word: "İbre", meaning: "Pusula, saat veya sayaçlarda yönü veya ölçüyü gösteren hareketli ince ok.", exampleSentence: "Pusulanın kırmızı ibresi daima kuzeyi işaret eder." },
      { word: "El yazması", meaning: "Matbaa öncesinde elle, özel mürekkep ve hat sanatıyla yazılmış değerli tarihi kitap.", exampleSentence: "Müzedeki el yazması eserler özel cam vitrinde korunuyordu." }
    ],
    questions: [
      {
        id: "myst2_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Pusulanın üzerindeki bilmece çocukları nereye yönlendirdi?",
        options: ["A) Üç adım doğudaki kütüphane salonuna", "B) Müzenin bahçesine", "C) Bodrum katına"],
        correctAnswer: 0,
        explanation: "Üç adım doğudaki kütüphaneye yönlendirmiştir.",
        clueSentence: "'Üç adım doğuya yürü, bulursun kitapların en gürünü.'"
      },
      {
        id: "myst2_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Gizli bölmede ne bulundu?",
        options: ["A) Yüzyıllar öncesine ait el yazması bir gökbilim kitabı", "B) Altın paralar", "C) Kılıç"],
        correctAnswer: 0,
        explanation: "El yazması gökbilim kitabı bulunmuştur.",
        clueSentence: "...yüzyıllar öncesine ait el yazması bir gökbilim kitabı duruyordu."
      },
      {
        id: "myst2_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana fikri nedir?",
        options: ["A) Tarih ve kültür mirasımız dikkatle incelendiğinde bize paha biçilmez bilgiler sunar", "B) Müzelerde konuşulmaz", "C) Pusulalar sadece gemilerde kullanılır"],
        correctAnswer: 0,
        explanation: "Tarih ve bilginin değeri ana fikirdir.",
        clueSentence: "Tarih, meraklı zihinlerin dokunuşuyla yaşayan bir hazinedir."
      },
      {
        id: "myst2_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Pusulada yönü gösteren hareketli ince oka ne denir?",
        options: ["A) İbre", "B) Vida", "C) Yay"],
        correctAnswer: 0,
        explanation: "Pusula gösterge okuna ibre denir.",
        clueSentence: "'Kuzeyi gösterir ibrem...'"
      }
    ],
    rewardChest: {
      coins: 270,
      gemType: "gold_crown",
      gemName: "Antik Pusula Tacı",
      gemColor: "#eab308",
      badgeTitle: "Tarih Kaşifi",
      badgeIcon: "Compass",
      secretLore: "Yüzyılların gizemli pusulasını başarıyla çözdün!"
    }
  },
  {
    id: "mystery-3",
    levelNumber: 50,
    title: "Eski Tavan Arasındaki Kilitli Sandık",
    islandName: "50. Durak: Hatıralar Konağı",
    theme: "temple",
    iconName: "Lock",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      accent: "text-amber-900",
      badgeBg: "bg-amber-700",
      gradient: "from-amber-600 to-yellow-800",
    },
    synopsis: "Büyükannenin eski ceviz sandığından çıkan siyah beyaz fotoğraflar ve istiklal madalyasının hikayesi.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Ece, büyükannesinin eski ahşap konağının tavan arasında pirinç kilitli ağır bir ceviz sandık buldu. Kilidin anahtarı ise sandığın hemen yanındaki eski gaz lambasının altındaydı.",
      "Anahtarı çevirdiğinde sandığın kapağı tatlı bir gıcırtıyla açıldı. İçinden lavanta kokulu beyaz danteller, siyah-beyaz sararmış aile fotoğrafları ve kırmızı kurdeleli parlak bir İstiklal Madalyası çıktı.",
      "Büyükannesi yanına gelip dedesinin Kurtuluş Savaşı'ndaki kahramanlıklarını anlattı. Ece madalyayı eline aldığında gözleri doldu. En kıymetli hazine, vatanımız için canla başla mücadele eden atalarımızın şanlı hatıralarıydı."
    ],
    vocabulary: [
      { word: "İstiklal", meaning: "Bağımsızlık, hiçbir güce boyun eğmeden hür ve özgür yaşama durumu.", exampleSentence: "Milletimiz istiklal mücadelesini büyük bir zaferle kazandı." },
      { word: "Dantel", meaning: "İnce iplikle tığ veya şişle örülen delikli, zarif el işi süsleme örgüsü.", exampleSentence: "Sandığın içindeki el emeği danteller lavanta kokuyordu." },
      { word: "Kahramanlık", meaning: "Büyük cesaret, yiğitlik ve fedakarlık göstererek yapılan üstün davranış.", exampleSentence: "Çanakkale'de yazılan kahramanlık destanları asla unutulmaz." }
    ],
    questions: [
      {
        id: "myst3_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Ceviz sandığın içinden hangi tarihi emanet çıktı?",
        options: ["A) Kırmızı kurdeleli bir İstiklal Madalyası ve eski fotoğraflar", "B) Eski bir radyo", "C) Çalar saat"],
        correctAnswer: 0,
        explanation: "İstiklal Madalyası ve fotoğraflar çıkmıştır.",
        clueSentence: "...kırmızı kurdeleli parlak bir İstiklal Madalyası çıktı."
      },
      {
        id: "myst3_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Sandığın anahtarı nerede saklanmıştı?",
        options: ["A) Eski gaz lambasının altında", "B) Masanın çekmecesinde", "C) Halının altında"],
        correctAnswer: 0,
        explanation: "Eski gaz lambasının altındadır.",
        clueSentence: "Kilidin anahtarı ise sandığın hemen yanındaki eski gaz lambasının altındaydı."
      },
      {
        id: "myst3_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Atalarımızın bağımsızlık mücadelesi ve hatıraları milletimizin en paha biçilmez hazinesidir", "B) Tavan aralarına hiç çıkılmamalıdır", "C) Sandıklar açılmamalıdır"],
        correctAnswer: 0,
        explanation: "Milli mücadele hatıralarının ve vatan sevgisinin değeri ana fikirdir.",
        clueSentence: "En kıymetli hazine, vatanımız için canla başla mücadele eden atalarımızın şanlı hatıralarıydı."
      },
      {
        id: "myst3_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Bağımsızlık ve hürriyet anlamına gelen sözcük hangisidir?",
        options: ["A) İstiklal", "B) Tutsaklık", "C) Yalnızlık"],
        correctAnswer: 0,
        explanation: "Bağımsızlığa istiklal denir.",
        clueSentence: "...parlak bir İstiklal Madalyası çıktı."
      }
    ],
    rewardChest: {
      coins: 275,
      gemType: "ruby",
      gemName: "İstiklal Yakutu",
      gemColor: "#ef4444",
      badgeTitle: "Milli Kahraman Dostu",
      badgeIcon: "Lock",
      secretLore: "Şanlı tarihimizin en değerli emanetine saygıyla sahip çıktın!"
    }
  },
  {
    id: "mystery-4",
    levelNumber: 51,
    title: "Deniz Feneri Bekçisinin Gizemli Işığı",
    islandName: "51. Durak: Fener Kayalıkları",
    theme: "shipwreck",
    iconName: "Sun",
    colorScheme: {
      bg: "bg-cyan-50",
      border: "border-cyan-300",
      accent: "text-cyan-900",
      badgeBg: "bg-cyan-600",
      gradient: "from-cyan-500 to-blue-700",
    },
    synopsis: "Fırtınalı gecede jeneratör bozulunca aynalar ve fenerlerle gemilere kılavuzluk eden cesur fener bekçisi.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Sarp kayalıkların tepesinde yükselen ak deniz feneri, karanlık gecelerde gemilere yol gösterirdi. Bir kış gecesi şiddetli şimşek fenerin elektrik tesisatını devreden çıkardı.",
      "Genç fener bekçisi Selim hiç paniklemedi. Yedek lüks lambalarını yaktı ve dev aynaları odaklayarak ışığı onlarca deniz mili uzağa yansıtmayı başardı.",
      "Kayalıklara doğru sürüklenmekte olan yolcu vapuru bu ışık sayesinde rotasını hemen derin sulara çevirdi ve güvenle limana yanaştı. Görev bilinci ve soğukkanlılık, fırtınaları sakinleştiren en sağlam limandır."
    ],
    vocabulary: [
      { word: "Soğukkanlı", meaning: "Tehlike veya zor anlarda heyecanlanmadan sakin ve doğru karar verebilen kimse.", exampleSentence: "Soğukkanlı kaptan gemiyi fırtınadan ustalıkla kurtardı." },
      { word: "Odaklamak", meaning: "Işık ışınlarını veya dikkati tek bir noktada toplamak.", exampleSentence: "Aynaları odaklayarak güçlü bir ışık demeti oluşturdu." },
      { word: "Sarp", meaning: "Dik, çıkılması ve inilmesi güç, çok kayalık yer.", exampleSentence: "Sarp dağ keçileri kayalıklarda ustaca zıplar." }
    ],
    questions: [
      {
        id: "myst4_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Fenerin elektriği kesilince Selim ışığı nasıl yansıttı?",
        options: ["A) Yedek lüks lambalarını yakıp dev aynaları odaklayarak", "B) El feneri tutarak", "C) Ateş yakarak"],
        correctAnswer: 0,
        explanation: "Yedek lambaları ve dev aynaları odaklamıştır.",
        clueSentence: "Yedek lüks lambalarını yaktı ve dev aynaları odaklayarak ışığı onlarca deniz mili uzağa yansıtmayı başardı."
      },
      {
        id: "myst4_q2",
        type: "multiple_choice",
        category: "Neden-Sonuç",
        question: "Yolcu vapuru nasıl kurtuldu?",
        options: ["A) Yansıyan fener ışığını görüp rotasını güvenli sulara çevirerek", "B) Kıyıya çarparak", "C) Sabah olmasını bekleyerek"],
        correctAnswer: 0,
        explanation: "Fener ışığı sayesinde rotasını çevirmiştir.",
        clueSentence: "Kayalıklara doğru sürüklenmekte olan yolcu vapuru bu ışık sayesinde rotasını hemen derin sulara çevirdi..."
      },
      {
        id: "myst4_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana fikri nedir?",
        options: ["A) Zor anlarda soğukkanlı olmak ve görevini fedakarlıkla yapmak hayat kurtarır", "B) Fırtınada gemiye binilmez", "C) Deniz fenerleri kapatılmalıdır"],
        correctAnswer: 0,
        explanation: "Sorumluluk ve soğukkanlılık ana fikirdir.",
        clueSentence: "Görev bilinci ve soğukkanlılık, fırtınaları sakinleştiren en sağlam limandır."
      },
      {
        id: "myst4_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Zor durumlarda panik yapmadan sakin kalabilmeye ne denir?",
        options: ["A) Soğukkanlılık", "B) Telaş", "C) Korku"],
        correctAnswer: 0,
        explanation: "Sakinliğe soğukkanlılık denir.",
        clueSentence: "Görev bilinci ve soğukkanlılık..."
      }
    ],
    rewardChest: {
      coins: 280,
      gemType: "diamond",
      gemName: "Fener Işığı Kristali",
      gemColor: "#facc15",
      badgeTitle: "Deniz Fenercisi",
      badgeIcon: "Sun",
      secretLore: "Fırtınalı gecelerde gemilere kılavuz olan kurtarıcı bir ışıksın!"
    }
  },
  {
    id: "mystery-5",
    levelNumber: 52,
    title: "Kayıp Haritanın Son Parçası",
    islandName: "52. Durak: Saklı Körfez",
    theme: "parrot",
    iconName: "Map",
    colorScheme: {
      bg: "bg-emerald-50",
      border: "border-emerald-300",
      accent: "text-emerald-900",
      badgeBg: "bg-emerald-600",
      gradient: "from-emerald-500 to-teal-700",
    },
    synopsis: "Deniz kabuğunun içine gizlenmiş yırtık harita parçasını bulup bulmacayı tamamlayan Efe ve Gaga.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Küçük kaşif Efe ile papağan Gaga, ilk adada buldukları haritanın sağ alt köşesindeki eksik parçayı günlerdir arıyorlardı. O parça olmadan büyük hazine kapısının anahtarı açılamıyordu.",
      "Gaga kumsaldaki pembe bir deniz kabuğunu gagasıyla tıkladı. Kabuğun içinde inci tozuyla mühürlenmiş rulo bir kağıt parçası vardı. Parçayı haritanın eksik yerine koyduklarında çizgiler birleşti!",
      "Haritada parlayan kırmızı yıldız, adanın ortasındaki Bilgelik Ağacı'nı işaret ediyordu. Parçaları birleştiren sabır, büyük sonuca ulaştıran en sağlam köprüydü."
    ],
    vocabulary: [
      { word: "Mühürlenmek", meaning: "Özel bir damga veya balmumuyla açılmayacak biçimde kapatılmak, kilitlenmek.", exampleSentence: "Kralın fermanı kırmızı balmumu ile mühürlenmişti." },
      { word: "Rulo", meaning: "Dürülerek boru biçimi verilmiş kağıt veya kumaş tomarı.", exampleSentence: "Eski harita deri bir rulo şeklinde sarılmıştı." },
      { word: "Bileşim", meaning: "Parçaların bir araya gelerek anlamlı bir bütün oluşturması.", exampleSentence: "Harita parçalarının bileşimi gizli yolu ortaya çıkardı." }
    ],
    questions: [
      {
        id: "myst5_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Eksik harita parçası nerede saklanmıştı?",
        options: ["A) Pembe bir deniz kabuğunun içinde", "B) Ağacın dalında", "C) Kumun altında"],
        correctAnswer: 0,
        explanation: "Deniz kabuğunun içinde saklanmıştır.",
        clueSentence: "Kabuğun içinde inci tozuyla mühürlenmiş rulo bir kağıt parçası vardı."
      },
      {
        id: "myst5_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Parçalar birleşince harita nereyi işaret etti?",
        options: ["A) Adanın ortasındaki Bilgelik Ağacı'nı", "B) Kumsalı", "C) Limanı"],
        correctAnswer: 0,
        explanation: "Bilgelik Ağacı'nı işaret etmiştir.",
        clueSentence: "Haritada parlayan kırmızı yıldız, adanın ortasındaki Bilgelik Ağacı'nı işaret ediyordu."
      },
      {
        id: "myst5_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Sabırla ve dikkatle araştıranlar eksik parçaları tamamlayıp büyük başarıya ulaşırlar", "B) Deniz kabukları toplanmaz", "C) Haritalar yırtılmalıdır"],
        correctAnswer: 0,
        explanation: "Sabır ve araştırmacılığın önemi ana fikirdir.",
        clueSentence: "Parçaları birleştiren sabır, büyük sonuca ulaştıran en sağlam köprüydü."
      },
      {
        id: "myst5_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Boru şeklinde yuvarlanmış kağıt tomarına ne denir?",
        options: ["A) Rulo", "B) Kutu", "C) Torba"],
        correctAnswer: 0,
        explanation: "Yuvarlanmış kağıda rulo denir.",
        clueSentence: "...rulo bir kağıt parçası vardı."
      }
    ],
    rewardChest: {
      coins: 285,
      gemType: "amethyst",
      gemName: "Harita Ametisti",
      gemColor: "#a855f7",
      badgeTitle: "Büyük Haritacı",
      badgeIcon: "Map",
      secretLore: "Tüm adaların kayıp parçalarını sabırla birleştirdin!"
    }
  },
  {
    id: "mystery-6",
    levelNumber: 53,
    title: "Çiftlikteki Gece Seslerinin Sırrı",
    islandName: "53. Durak: Huzurlu Çiftlik",
    theme: "forest",
    iconName: "Feather",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      accent: "text-amber-900",
      badgeBg: "bg-amber-600",
      gradient: "from-amber-400 to-yellow-600",
    },
    synopsis: "Ahırın çatısından gelen garip tıkırtıların sevimli baykuş yavrusu Puko'ya ait olduğunu çözen Berke.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Dedesinin köydeki çiftliğine tatile giden Berke, geceleri ahırın tavanından gelen 'Guk-guk, tık-tık' seslerini merak ediyordu. Çiftliktekiler çatıda hayalet olduğunu düşünüp tavan arasına girmekten çekiniyordu.",
      "Berke el fenerini aldı ve dedesiyle birlikte tahta merdivenleri usulca çıktı. Feneri saman balyalarının arkasına tuttuğunda, samanların arasına yuva yapmış kocaman sarı gözlü minik bir peçeli baykuş yavrusu gördü.",
      "Baykuş fındık faresi yakalayıp tarlayı koruyordu. Berke ona bir kap su bıraktı. Bilinmeyen her şey insanı korkutabilir ama araştırıp öğrenince yerini sevgiye bırakır."
    ],
    vocabulary: [
      { word: "Peçeli baykuş", meaning: "Yüzü beyaz bir maskeyi andıran, geceleri avlanan faydalı ve sevimli bir baykuş türü.", exampleSentence: "Peçeli baykuş sessizce tarladaki zararlı böcekleri temizledi." },
      { word: "Balyalama", meaning: "Saman, ot veya pamuğu sıkıştırarak büyük dikdörtgen bağlar haline getirme.", exampleSentence: "Ahırdaki sarı saman balyaları mis gibi kokuyordu." },
      { word: "Merak", meaning: "Bir şeyi öğrenmek, görmek veya anlamak için duyulan yoğun istek duygusu.", exampleSentence: "Bilimin ve keşiflerin temelinde merak yatar." }
    ],
    questions: [
      {
        id: "myst6_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Ahırın tavan arasındaki seslerin kaynağı neydi?",
        options: ["A) Yuva yapmış sevimli bir peçeli baykuş yavrusu", "B) Rüzgardan sallanan tahta", "C) Kedi"],
        correctAnswer: 0,
        explanation: "Peçeli baykuş yavrusudur.",
        clueSentence: "...samanların arasına yuva yapmış kocaman sarı gözlü minik bir peçeli baykuş yavrusu gördü."
      },
      {
        id: "myst6_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Baykuş çiftliğe nasıl fayda sağlıyordu?",
        options: ["A) Fındık farelerini ve zararlıları yakalayarak tarlayı koruyordu", "B) Çatıdaki tahtaları kemirerek", "C) Sabahları öterek"],
        correctAnswer: 0,
        explanation: "Zararlı fareleri yakalayıp tarlayı korumaktadır.",
        clueSentence: "Baykuş fındık faresi yakalayıp tarlayı koruyordu."
      },
      {
        id: "myst6_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Bilinmeyen seslerden korkmak yerine araştırıp öğrenmek önyargıları yıkar ve gerçeği gösterir", "B) Ahırlara hiç girilmemelidir", "C) Geceleri ışık yakılmaz"],
        correctAnswer: 0,
        explanation: "Merak ve araştırmanın korkuları yenmesi ana fikirdir.",
        clueSentence: "Bilinmeyen her şey insanı korkutabilir ama araştırıp öğrenince yerini sevgiye bırakır."
      },
      {
        id: "myst6_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Öğrenme ve anlama isteğine ne ad verilir?",
        options: ["A) Merak", "B) Korku", "C) Bezginlik"],
        correctAnswer: 0,
        explanation: "Öğrenme isteğine merak denir.",
        clueSentence: "Bilimin ve keşiflerin temelinde merak yatar."
      }
    ],
    rewardChest: {
      coins: 290,
      gemType: "emerald",
      gemName: "Gece Kuşu Zümrüdü",
      gemColor: "#10b981",
      badgeTitle: "Doğa Dedektifi",
      badgeIcon: "Feather",
      secretLore: "Korkularını bilgiyle aydınlatan cesur bir kalbe sahipsin!"
    }
  },
  {
    id: "mystery-7",
    levelNumber: 54,
    title: "Mağaradaki Renkli Duvar Resimleri",
    islandName: "54. Durak: İlk Çağ Mağarası",
    theme: "cave",
    iconName: "Palette",
    colorScheme: {
      bg: "bg-indigo-50",
      border: "border-indigo-300",
      accent: "text-indigo-900",
      badgeBg: "bg-indigo-600",
      gradient: "from-indigo-600 to-purple-800",
    },
    synopsis: "Binlerce yıl önce kök boyalarla kayalara çizilmiş geyik ve avcı figürlerini keşfeden genç arkeologlar.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Toros Dağları'ndaki derin kireç taşı mağarasında araştırma yapan genç arkeologlar grubu, mağaranın en dip salonunda el fenerlerini tavana doğru tuttular.",
      "Kayaların pürüzsüz yüzeyinde kırmızı ve kahverengi kök boyalarla çizilmiş binlerce yıllık bizon, koşan geyikler ve el izleri parıldıyordu. İlk insanlar doğayı ve sevinçlerini sanatla anlatmışlardı.",
      "Grup lideri, 'Sanat insanlığın binlerce yıl öncesinden bize ulaştırdığı en sıcak mektuptur' dedi. Mağara derhal koruma altına alındı. Geçmişi korumak, geleceği inşa etmektir."
    ],
    vocabulary: [
      { word: "Kök boya", meaning: "Bitkilerin köklerinden, kabuklarından veya minerallerden elde edilen doğal ve kalıcı boya.", exampleSentence: "Halıların iplikleri doğal kök boyalarla renklendirildi." },
      { word: "Arkeolog", meaning: "Eski uygarlıklardan kalan tarihi eserleri, yapıları ve eşyaları inceleyen bilim insanı.", exampleSentence: "Arkeologlar antik kentin tiyatrosunu ortaya çıkardılar." },
      { word: "Bizon", meaning: "Kuzey yarımkürede yaşamış iri yapılı ve hörgüçlü yaban öküzü türü.", exampleSentence: "Mağara duvarında koşan heybetli bir bizon resmi vardı." }
    ],
    questions: [
      {
        id: "myst7_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Mağara duvarındaki resimler hangi boyalarla çizilmişti?",
        options: ["A) Kırmızı ve kahverengi doğal kök boyalarla", "B) Plastik boyalarla", "C) Kömür tozuyla"],
        correctAnswer: 0,
        explanation: "Kök boyalarla çizilmiştir.",
        clueSentence: "...kırmızı ve kahverengi kök boyalarla çizilmiş binlerce yıllık bizon, koşan geyikler..."
      },
      {
        id: "myst7_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "İlk insanlar doğayı ve duygularını binlerce yıl öncesinden neyle anlatmışlardı?",
        options: ["A) Sanat ve duvar resimleriyle", "B) Telefonla", "C) Mektupla"],
        correctAnswer: 0,
        explanation: "Sanat ve resimlerle anlatmışlardır.",
        clueSentence: "İlk insanlar doğayı ve sevinçlerini sanatla anlatmışlardı."
      },
      {
        id: "myst7_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Tarihi ve sanatsal eserleri korumak geçmişimizi anlamamızı ve geleceği aydınlatmamızı sağlar", "B) Mağaralara girilmemelidir", "C) Resim sadece kağıda yapılır"],
        correctAnswer: 0,
        explanation: "Tarihi mirası ve sanatı koruma bilinci ana fikirdir.",
        clueSentence: "Geçmişi korumak, geleceği inşa etmektir."
      },
      {
        id: "myst7_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Bitkilerin kök ve yapraklarından elde edilen doğal boyaya ne ad verilir?",
        options: ["A) Kök boya", "B) Sulu boya", "C) Sprey boya"],
        correctAnswer: 0,
        explanation: "Doğal bitkisel boyaya kök boya denir.",
        clueSentence: "...kök boyalarla renklendirildi."
      }
    ],
    rewardChest: {
      coins: 295,
      gemType: "diamond",
      gemName: "İlk Çağ Kristali",
      gemColor: "#6366f1",
      badgeTitle: "Sanat Arkeoloğu",
      badgeIcon: "Palette",
      secretLore: "Binlerce yıllık sanat mektuplarını koruyan yüce bir kaşifsin!"
    }
  },
  {
    id: "mystery-8",
    levelNumber: 55,
    title: "Kütüphanedeki Kilitli Gizli Dolap",
    islandName: "55. Durak: Sırlar Odası",
    theme: "temple",
    iconName: "Lock",
    colorScheme: {
      bg: "bg-purple-50",
      border: "border-purple-300",
      accent: "text-purple-900",
      badgeBg: "bg-purple-600",
      gradient: "from-purple-600 to-indigo-800",
    },
    synopsis: "Kitapların baş harflerini birleştirip şifreyi çözerek okulun ilk kütüphane defterini bulan öğrenciler.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Okul kütüphanesinin en arkasında meşe ağacından yapılmış antika bir dolap duruyordu. Dolabın üzerinde dört basamaklı harf şifresi vardı.",
      "Kütüphaneci öğretmen ipucunu verdi: 'Raftaki dört özel kitabın ilk harflerini sırayla dizin: Bilim, İyilik, Lale, Gezegen.' Öğrenciler harfleri birleştirdi: 'B-İ-L-G' değil, 'B-İ-L-G-İ' kelimesine ulaştılar.",
      "Dolap açıldığında içinden okulun seksen yıl önceki ilk öğrencilerinin el yazısıyla yazdıkları şiirler ve hikaye defterleri çıktı. Okumak ve düşünmek, kilitli tüm sırları açan sihirli bir anahtardır."
    ],
    vocabulary: [
      { word: "Antika", meaning: "Eski çağlardan veya dönemlerden kalma, nadir ve değerli eşya.", exampleSentence: "Müzedeki antika saat hala tıkır tıkır çalışıyordu." },
      { word: "Şifre", meaning: "Gizli kalması gereken bir bilginin yetkisiz kişilere kapalı tutulduğu gizli kilit veya kod.", exampleSentence: "Öğrenciler bilmeceleri çözerek kasanın şifresini buldular." },
      { word: "Basamak", meaning: "Aşama, derece veya sayı basamağı.", exampleSentence: "Başarı merdiveninin basamaklarını adım adım tırmandı." }
    ],
    questions: [
      {
        id: "myst8_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Öğrenciler kitap baş harflerinden hangi şifre kelimesini oluşturdular?",
        options: ["A) KİTAP", "B) BİLGİ", "C) OKUL"],
        correctAnswer: 1,
        explanation: "BİLGİ kelimesine ulaşmışlardır.",
        clueSentence: "...'B-İ-L-G-İ' kelimesine ulaştılar."
      },
      {
        id: "myst8_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Dolabın içinden ne çıktı?",
        options: ["A) Seksen yıl önceki ilk öğrencilerin el yazısı şiir ve hikaye defterleri", "B) Eski oyuncaklar", "C) Çanta"],
        correctAnswer: 0,
        explanation: "Eski öğrencilerin şiir ve hikaye defterleri çıkmıştır.",
        clueSentence: "...okulun seksen yıl önceki ilk öğrencilerinin el yazısıyla yazdıkları şiirler ve hikaye defterleri çıktı."
      },
      {
        id: "myst8_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Okumak, düşünmek ve bilgi sahibi olmak her kapıyı açan en değerli güçtür", "B) Dolaplar kilitlenmemelidir", "C) Kütüphaneler karanlıktır"],
        correctAnswer: 0,
        explanation: "Bilgi ve okumanın anahtar gücü ana fikirdir.",
        clueSentence: "Okumak ve düşünmek, kilitli tüm sırları açan sihirli bir anahtardır."
      },
      {
        id: "myst8_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Eski zamanlardan kalan değerli eşyalara ne ad verilir?",
        options: ["A) Antika", "B) Hurda", "C) Plastik"],
        correctAnswer: 0,
        explanation: "Değerli eski eşyaya antika denir.",
        clueSentence: "...meşe ağacından yapılmış antika bir dolap..."
      }
    ],
    rewardChest: {
      coins: 300,
      gemType: "gold_crown",
      gemName: "Sırlar Sandığı Tacı",
      gemColor: "#a855f7",
      badgeTitle: "Şifre Çözücü",
      badgeIcon: "Lock",
      secretLore: "Bilginin şifresiyle kilitli kapıları ardına kadar açtın!"
    }
  },
  {
    id: "mystery-9",
    levelNumber: 56,
    title: "Şelalenin Arkasındaki Gizli Geçit",
    islandName: "56. Durak: Kristal Şelale",
    theme: "forest",
    iconName: "Droplet",
    colorScheme: {
      bg: "bg-cyan-50",
      border: "border-cyan-300",
      accent: "text-cyan-900",
      badgeBg: "bg-cyan-600",
      gradient: "from-cyan-500 to-teal-800",
    },
    synopsis: "Gürül gürül akan şelalenin su perdesini aşıp adanın kristal mağarasına ulaşan genç gezginler.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Kristal Şelale'nin suları elli metre yüksekten turkuaz bir gölete dökülürken etrafa serin su damlacıkları saçıyordu. Genç kaşifler su perdesinin arkasında esrarengiz bir parıltı fark ettiler.",
      "Kaygan kayalara dikkatle basarak suyun arkasındaki gizli kemerli geçide adım attılar. Mağaranın içi sarkıt ve dikitlerle süslü devasa bir kristal saray gibiydi. Tavandaki damlalar pırıl pırıl parlıyordu.",
      "Mağaranın ortasındaki taş sütunun üzerinde şu bilge söz kazınmıştı: 'Zorlukların ve engellerin arkasına geçme cesaretini gösterenler, doğanın en muhteşem mucizeleriyle ödüllendirilir.'"
    ],
    vocabulary: [
      { word: "Sarkıt", meaning: "Mağara tavanlarından sızan kireçli suların damlarken oluşturduğu aşağı doğru uzanan sivri taşlar.", exampleSentence: "Mağaranın tavanındaki kireçli sarkıtlar avizeleri andırıyordu." },
      { word: "Dikit", meaning: "Mağara tabanına damlayan sulardan yukarı doğru yükselen kireç taş sütunlar.", exampleSentence: "Sarkıt ve dikitler binlerce yılda birleşip sütun oluşturur." },
      { word: "Esrarengiz", meaning: "Gizemli, sırlarla dolu, merak uyandıran.", exampleSentence: "Ormandaki esrarengiz parıltı herkesin dikkatini çekti." }
    ],
    questions: [
      {
        id: "myst9_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Genç kaşifler su perdesinin arkasında ne buldular?",
        options: ["A) Sarkıt ve dikitlerle süslü devasa bir kristal mağara", "B) Kuru bir duvar", "C) Eski bir gemi"],
        correctAnswer: 0,
        explanation: "Sarkıt ve dikitlerle süslü kristal mağara bulmuşlardır.",
        clueSentence: "Mağaranın içi sarkıt ve dikitlerle süslü devasa bir kristal saray gibiydi."
      },
      {
        id: "myst9_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Taş sütunun üzerindeki bilge sözde ne yazıyordu?",
        options: ["A) 'Zorlukların ve engellerin arkasına geçme cesaretini gösterenler doğanın mucizeleriyle ödüllendirilir'", "B) 'Geri dönünüz'", "C) 'Su soğuktur'"],
        correctAnswer: 0,
        explanation: "Cesaretle engelleri aşmanın ödüllendirileceği yazmaktadır.",
        clueSentence: "'Zorlukların ve engellerin arkasına geçme cesaretini gösterenler, doğanın en muhteşem mucizeleriyle ödüllendirilir.'"
      },
      {
        id: "myst9_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Cesaret, dikkat ve kararlılıkla zorlukların üstüne gidenler büyük güzelliklere ulaşırlar", "B) Şelalelere yaklaşılmamalıdır", "C) Mağaralar sadece karanlıktır"],
        correctAnswer: 0,
        explanation: "Cesaret ve azimle engelleri aşma ana fikirdir.",
        clueSentence: "...zorlukların ve engellerin arkasına geçme cesaretini gösterenler..."
      },
      {
        id: "myst9_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Mağara tavanından aşağı doğru sarkan kireçli sivri taşlara ne denir?",
        options: ["A) Sarkıt", "B) Dikit", "C) Çakıl"],
        correctAnswer: 0,
        explanation: "Tavandan sarkan taşa sarkıt denir.",
        clueSentence: "Mağaranın tavanındaki sarkıtlar..."
      }
    ],
    rewardChest: {
      coins: 310,
      gemType: "diamond",
      gemName: "Kristal Şelale Elması",
      gemColor: "#06b6d4",
      badgeTitle: "Şelale Fatihi",
      badgeIcon: "Droplet",
      secretLore: "Engellerin arkasındaki gizli mucizeleri cesaretinle fethettin!"
    }
  },
  {
    id: "mystery-10",
    levelNumber: 57,
    title: "Büyük Hazine Adası'nın Ebedi Sırrı",
    islandName: "57. Durak: Efsanevi Zirve Tapınağı",
    theme: "temple",
    iconName: "Trophy",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-400",
      accent: "text-amber-950",
      badgeBg: "bg-amber-600",
      gradient: "from-yellow-500 via-amber-600 to-orange-700",
    },
    synopsis: "57 adanın tüm anahtarlarını toplayıp Zirve Tapınağı'ndaki Büyük Yazar ve Bilge Kaşif Sandığı'nı açan öğrenci.",
    readingTimeMinutes: 3,
    wordCount: 180,
    paragraphs: [
      "Takımadaların en yüksek zirvesindeki Altın Tapınak kapıları, elli yedi adanın bilgeliğiyle dolup taşan cesur kaşif Efe, Gaga ve bu macerayı başarıyla tamamlayan tüm çocuklar için sonuna kadar açıldı.",
      "Tapınağın ortasındaki kaidede parıldayan devasa bir kitap ve üzerinde parıldayan altın bir hokka ile tüy kalem duruyordu. Kitabın ilk sayfasında şu altın harfler yazılıydı:",
      "'Tebrikler usta kaşif! Sen sadece adaları değil; okumanın, anlamanın, düşünmenin ve hayal etmenin sonsuz evrenini fethettin. Şimdi sıra sende: Kendi hikayelerini, kendi sorularını ve kendi adalarını inşa etmeye başla! Gerçek hazine, içinde saklı olan hayal gücündür.'",
      "Gökten altın konfetiler yağdı, ada halkı ve tüm sevimli hayvanlar şampiyonu alkışladı. Maceranın sonu, yepyeni bir yazarın doğuşuydu!"
    ],
    vocabulary: [
      { word: "Kaide", meaning: "Bir heykelin, vazonun veya anıtın üzerine oturtulduğu yüksek dayanıklı ayaklık.", exampleSentence: "Altın kitap mermer kaidenin üzerinde parıldıyordu." },
      { word: "Hokka", meaning: "İçine mürekkep konulan geleneksel küçük yazı kabı.", exampleSentence: "Yazar tüy kalemini hokkalıktaki siyah mürekkebe batırdı." },
      { word: "Ebedi", meaning: "Sonsuza kadar sürecek olan, tükenmeyen, bitimsiz.", exampleSentence: "Kitapların bize kattığı bilgi ebedi bir hazinedir." }
    ],
    questions: [
      {
        id: "myst10_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Tapınağın ortasındaki kaidede ne duruyordu?",
        options: ["A) Devasa bir kitap, altın bir hokka ve tüy kalem", "B) Sadece kilitli bir sandık", "C) Taş bir heykel"],
        correctAnswer: 0,
        explanation: "Devasa bir kitap, altın hokka ve tüy kalem durmaktadır.",
        clueSentence: "...parıldayan devasa bir kitap ve üzerinde parıldayan altın bir hokka ile tüy kalem duruyordu."
      },
      {
        id: "myst10_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Kitaptaki altın harfler çocuğa hangi yeni ve büyük görevi veriyordu?",
        options: ["A) Kendi hikayelerini, sorularını ve adalarını yazmaya başlamayı", "B) Macerayı tamamen bitirip eve dönmeyi", "C) Kitapları saklamayı"],
        correctAnswer: 0,
        explanation: "Artık kendi hikayelerini ve adalarını yazmaya başlama görevi verilmiştir.",
        clueSentence: "'Şimdi sıra sende: Kendi hikayelerini, kendi sorularını ve kendi adalarını inşa etmeye başla!'"
      },
      {
        id: "myst10_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "57 adayı başarıyla tamamlayan bu büyük serüvenin en yüce ana fikri nedir?",
        options: ["A) Okumak, anlamak ve kendi hikayelerini yazarak üretmek dünyadaki en büyük ve sonsuz zenginliktir", "B) Sadece altın aramak gerekir", "C) Soruları çözmemek gerekir"],
        correctAnswer: 0,
        explanation: "Okuma anlama ve yaratıcı yazarlık gücü ana fikirdir.",
        clueSentence: "Gerçek hazine, içinde saklı olan hayal gücündür."
      },
      {
        id: "myst10_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Mürekkep koymaya yarayan küçük yazı kabına ne ad verilir?",
        options: ["A) Hokka", "B) Kaşık", "C) Bardak"],
        correctAnswer: 0,
        explanation: "Mürekkep kabına hokka denir.",
        clueSentence: "...altın bir hokka ile tüy kalem duruyordu."
      }
    ],
    rewardChest: {
      coins: 500,
      gemType: "gold_crown",
      gemName: "Büyük Efsanevi Yazar Tacı",
      gemColor: "#f59e0b",
      badgeTitle: "Büyük Yazar Kaşif",
      badgeIcon: "Trophy",
      secretLore: "57 adanın tümünü fethettin! Artık sen kendi dünyalarını ve maceralarını yaratan bir Usta Yazarsın!"
    }
  }
];
