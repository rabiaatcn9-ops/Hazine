import { IslandStory } from "../types";

export const FRIENDSHIP_VALUES_STORIES: IslandStory[] = [
  {
    id: "friend-1",
    levelNumber: 38,
    title: "Kırılan Vazoyu Dürüstçe Söyleyen Can",
    islandName: "38. Durak: Dürüstlük Bahçesi",
    theme: "temple",
    iconName: "Heart",
    colorScheme: {
      bg: "bg-emerald-50",
      border: "border-emerald-300",
      accent: "text-emerald-900",
      badgeBg: "bg-emerald-600",
      gradient: "from-emerald-500 to-green-700",
    },
    synopsis: "Evde topla oynarken kazayla kırılan vazoyu saklamak yerine annesine doğruyu söyleyen Can'ın dürüstlüğü.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Yağmurlu bir pazar günü Can, salonda yumuşak topla oynarken top sehpadaki mavi desenli porselen vazoya çarptı. Vazo yere düşüp üç parçaya ayrıldı.",
      "Can bir an çok korktu. Parçaları koltuğun altına saklamayı düşündü. Fakat dedesinin 'Doğruluk ve dürüstlük en zor anlarda bile insanın kalbini aydınlatan ışıktır' sözünü hatırladı.",
      "Annesi odaya girdiğinde Can gözlerinin içine bakarak 'Anneciğim, salonda topla oynadığım için hata yaptım ve istemeden vazoyu kırdım, çok özür dilerim' dedi. Annesi Can'a sarıldı: 'Vazo yerine konur ama dürüstlüğün ve doğruluğun yeri doldurulamaz.' dedi."
    ],
    vocabulary: [
      { word: "Porselen", meaning: "Beyaz kilden yapılan, yüksek ısıda fırınlanan parlak ve narin seramik eşya.", exampleSentence: "Mavi desenli porselen fincan çok zarifti." },
      { word: "Dürüstlük", meaning: "Doğruluktan ayrılmama, yalan söylememe, içi dışı bir olma erdemi.", exampleSentence: "Dürüstlük insanın sahip olabileceği en büyük ahlaki erdemdir." },
      { word: "Erdem", meaning: "Ahlakın övdüğü iyi olma, alçakgönüllülük, dürüstlük ve doğruluk niteliği.", exampleSentence: "Affetmek ve yardım etmek yüce bir erdemdir." }
    ],
    questions: [
      {
        id: "frnd1_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Can salondaki vazonun kırılmasına nasıl sebep oldu?",
        options: ["A) Topla oynarken top vazoya çarptığı için", "B) Kitap okurken", "C) Koşarken sehpaya çarptığı için"],
        correctAnswer: 0,
        explanation: "Salonda topla oynarken top vazoya çarpmıştır.",
        clueSentence: "...salonda yumuşak topla oynarken top sehpadaki mavi desenli porselen vazoya çarptı."
      },
      {
        id: "frnd1_q2",
        type: "multiple_choice",
        category: "Karakter Analizi",
        question: "Can'ın hatasını saklamak yerine annesine doğruyu söylemesi hangi özelliğini gösterir?",
        options: ["A) Dürüst ve cesur olduğunu", "B) İlgisiz olduğunu", "C) Unutkan olduğunu"],
        correctAnswer: 0,
        explanation: "Can'ın dürüstlüğü ve hatasını üstlenme olgunluğu anlatılır.",
        clueSentence: "...Can gözlerinin içine bakarak 'Anneciğim, salonda topla oynadığım için hata yaptım...'"
      },
      {
        id: "frnd1_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayenin ana düşüncesi nedir?",
        options: ["A) Hata yapsak bile daima doğruyu ve gerçeği söylemek en büyük erdemdir", "B) Evde hiç oyun oynanmamalıdır", "C) Vazolar yere konulmalıdır"],
        correctAnswer: 0,
        explanation: "Dürüstlüğün değeri ana fikirdir.",
        clueSentence: "'Vazo yerine konur ama dürüstlüğün ve doğruluğun yeri doldurulamaz.'"
      },
      {
        id: "frnd1_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Yalan söylememeye, doğru ve güvenilir olmaya ne ad verilir?",
        options: ["A) Dürüstlük", "B) Acelecilik", "C) Korkaklık"],
        correctAnswer: 0,
        explanation: "Doğru olmaya dürüstlük denir.",
        clueSentence: "...dürüstlüğün ve doğruluğun yeri doldurulamaz."
      }
    ],
    rewardChest: {
      coins: 215,
      gemType: "emerald",
      gemName: "Doğruluk Zümrüdü",
      gemColor: "#10b981",
      badgeTitle: "Dürüstlük Meşalesi",
      badgeIcon: "Heart",
      secretLore: "Doğruyu söyleyen cesur kalbinle gurur duyuyoruz!"
    }
  },
  {
    id: "friend-2",
    levelNumber: 39,
    title: "Parktaki Salıncağı Paylaşan İki Arkadaş",
    islandName: "39. Durak: Dostluk Parkı",
    theme: "forest",
    iconName: "Smile",
    colorScheme: {
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      accent: "text-yellow-900",
      badgeBg: "bg-yellow-600",
      gradient: "from-yellow-500 to-amber-700",
    },
    synopsis: "Tek kalan salıncakta sırayla sallanıp birbirini neşeyle iten Kerem ve Sinan'ın dostluğu.",
    readingTimeMinutes: 2,
    wordCount: 155,
    paragraphs: [
      "Güneşli bir cumartesi günü mahalle parkında sadece bir tane sağlam salıncak kalmıştı. Kerem ve Sinan aynı anda salıncağa doğru koştular.",
      "İkisi de önce kendisi binmek istedi ve aralarında ufak bir anlaşmazlık çıktı. Sonra Kerem gülümsedi: 'Sinan, gel bir anlaşma yapalım. Yirmiye kadar ben sallanayım, sen beni it; sonra da yirmiye kadar sen sallan, ben seni iteyim!' dedi.",
      "Böylece ikisi de salıncakta keyifle uçtular ve kahkahalarla güldüler. Paylaşmak, mutluluğu ikiye katlayan en tatlı oyundu."
    ],
    vocabulary: [
      { word: "Anlaşmazlık", meaning: "İki veya daha çok kişi arasında çıkan fikir veya çıkar uyuşmazlığı.", exampleSentence: "Konuşarak ve empati kurarak tüm anlaşmazlıkları çözdüler." },
      { word: "Paylaşmak", meaning: "Eldeki bir şeyi başkalarıyla bölüşmek, ortaklaşa kullanmak.", exampleSentence: "Oyuncaklarını arkadaşıyla paylaşan çocuk çok mutlu oldu." },
      { word: "Kahkaha", meaning: "Yüksek sesle ve neşeyle gülme sesi.", exampleSentence: "Parktan çocukların neşeli kahkahaları yükseliyordu." }
    ],
    questions: [
      {
        id: "frnd2_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Kerem ve Sinan salıncak sorununu nasıl çözdüler?",
        options: ["A) Sırayla yirmişer kez sallanıp birbirlerini iterek", "B) Eve geri dönerek", "C) Birbirlerine küserek"],
        correctAnswer: 0,
        explanation: "Sırayla sallanıp birbirlerine yardım ederek çözmüşlerdir.",
        clueSentence: "'Yirmiye kadar ben sallanayım, sen beni it; sonra da yirmiye kadar sen sallan, ben seni iteyim!'"
      },
      {
        id: "frnd2_q2",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayenin ana düşüncesi nedir?",
        options: ["A) Paylaşmak ve sıraya saygı duymak arkadaşlığı güçlendirir ve mutluluğu artırır", "B) Salıncaklara binilmemelidir", "C) Parkta yalnız oynanmalıdır"],
        correctAnswer: 0,
        explanation: "Paylaşmanın ve uzlaşmanın değeri ana fikirdir.",
        clueSentence: "Paylaşmak, mutluluğu ikiye katlayan en tatlı oyundu."
      },
      {
        id: "frnd2_q3",
        type: "multiple_choice",
        category: "5N1K",
        question: "Olay nerede ve hangi günde geçmektedir?",
        options: ["A) Güneşli bir cumartesi günü mahalle parkında", "B) Yağmurlu bir salı günü okulda", "C) Kış mevsiminde evde"],
        correctAnswer: 0,
        explanation: "Güneşli bir cumartesi günü mahalle parkında geçmektedir.",
        clueSentence: "Güneşli bir cumartesi günü mahalle parkında sadece bir tane sağlam salıncak kalmıştı."
      },
      {
        id: "frnd2_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Bir şeyi başkasıyla bölüşmeye, ortak kullanmaya ne denir?",
        options: ["A) Paylaşmak", "B) Saklamak", "C) Kaçırmak"],
        correctAnswer: 0,
        explanation: "Bölüşmeye paylaşmak denir.",
        clueSentence: "Paylaşmak, mutluluğu ikiye katlayan en tatlı oyundu."
      }
    ],
    rewardChest: {
      coins: 220,
      gemType: "gold_crown",
      gemName: "Paylaşım Kristali",
      gemColor: "#f59e0b",
      badgeTitle: "Dostluk Elçisi",
      badgeIcon: "Smile",
      secretLore: "Paylaştığın her sevinç iki katına çıkar!"
    }
  },
  {
    id: "friend-3",
    levelNumber: 40,
    title: "Sokak Kedilerine Sıcak Yuva Yapan Çocuklar",
    islandName: "40. Durak: Pati Sokağı",
    theme: "forest",
    iconName: "Heart",
    colorScheme: {
      bg: "bg-orange-50",
      border: "border-orange-300",
      accent: "text-orange-900",
      badgeBg: "bg-orange-600",
      gradient: "from-orange-500 to-amber-700",
    },
    synopsis: "Kış gelmeden eski karton kutuları köpük ve naylonla kaplayıp kedilere ev yapan 3. sınıf arkadaş grubu.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Havalar soğumaya başlayınca 3-B sınıfından Elif, Ayşe ve Burak, mahalledeki sokak kedilerinin üşüdüğünü fark ettiler. Bakkal amcadan büyük boş karton kutular aldılar.",
      "Kutuların dışını su geçirmez naylonla, içini ise yumuşacık battaniye ve strafor köpükle kapladılar. Üzerine küçük bir giriş kapısı açıp 'Pati Evi - Lütfen Zarar Vermeyiniz' yazdılar.",
      "Ağaçların altına yerleştirdikleri kutulara minik kediler hemen girip mırıldayarak kıvrıldılar. Çocuklar her gün mama ve temiz su bırakmaya söz verdiler. Merhamet, soğuk kış günlerini ısıtan en sıcak battaniyedir."
    ],
    vocabulary: [
      { word: "Strafor", meaning: "Hafif, ısı yalıtımı sağlayan gözenekli beyaz plastik köpük.", exampleSentence: "Karton kutunun içini sıcak tutsun diye strafor köpükle kapladılar." },
      { word: "Yalıtım", meaning: "Soğuk, sıcak veya suyun geçmesini engellemek için yapılan koruma kaplaması.", exampleSentence: "Evlerin duvarlarına yapılan ısı yalıtımı kışın sıcak tutar." },
      { word: "Mırıldamak", meaning: "Kedilerin mutlu ve huzurlu olduklarında çıkardıkları titreşimli tatlı ses.", exampleSentence: "Kucağımda uyuyan yavru kedi huzurla mırıldıyordu." }
    ],
    questions: [
      {
        id: "frnd3_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Çocuklar kedi evlerinin dışını yağmurdan korumak için neyle kapladılar?",
        options: ["A) Su geçirmez naylonla", "B) İnce kağıtla", "C) Kumaşla"],
        correctAnswer: 0,
        explanation: "Dışını su geçirmez naylonla kaplamışlardır.",
        clueSentence: "Kutuların dışını su geçirmez naylonla..."
      },
      {
        id: "frnd3_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Kutunun üzerine hangi uyarı yazısını yazdılar?",
        options: ["A) 'Girilmez'", "B) 'Pati Evi - Lütfen Zarar Vermeyiniz'", "C) 'Dikkat Köpek Var'"],
        correctAnswer: 1,
        explanation: "Pati Evi - Lütfen Zarar Vermeyiniz yazılmıştır.",
        clueSentence: "...'Pati Evi - Lütfen Zarar Vermeyiniz' yazdılar."
      },
      {
        id: "frnd3_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Sokaktaki sahipsiz hayvanlara merhametle sahip çıkmak insanlığın en güzel görevidir", "B) Kediler kartonları sevmez", "C) Kışın dışarı çıkılmamalıdır"],
        correctAnswer: 0,
        explanation: "Hayvan sevgisi ve merhamet ana fikirdir.",
        clueSentence: "Merhamet, soğuk kış günlerini ısıtan en sıcak battaniyedir."
      },
      {
        id: "frnd3_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Sıcak ve soğuğu geçirmeyen koruyucu kaplamaya ne ad verilir?",
        options: ["A) Yalıtım", "B) Boya", "C) Cilalama"],
        correctAnswer: 0,
        explanation: "Isı korumasına yalıtım denir.",
        clueSentence: "...ısı yalıtımı sağlayan köpük..."
      }
    ],
    rewardChest: {
      coins: 225,
      gemType: "ruby",
      gemName: "Şefkat Damlası",
      gemColor: "#f43f5e",
      badgeTitle: "Pati Koruyucusu",
      badgeIcon: "Heart",
      secretLore: "Minik patilere sıcacık bir yuva açan koca yürekli bir kahramansın!"
    }
  },
  {
    id: "friend-4",
    levelNumber: 41,
    title: "Kütüphanede Kaybolan Kitabın Peşinde",
    islandName: "41. Durak: Bilgi Kütüphanesi",
    theme: "temple",
    iconName: "BookOpen",
    colorScheme: {
      bg: "bg-indigo-50",
      border: "border-indigo-300",
      accent: "text-indigo-900",
      badgeBg: "bg-indigo-600",
      gradient: "from-indigo-500 to-purple-700",
    },
    synopsis: "Ödünç aldığı kitabı yanlış rafa koyan arkadaşına yardım edip kütüphaneciye teslim eden Zeynep.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Okul kütüphanesinde herkesin okumak istediği 'Evrenin Gizemleri' kitabı yerinde yoktu. Kitabı en son ödünç alan Ali, kitabı nereye koyduğunu hatırlayamadığı için çok üzgündü.",
      "Sınıf arkadaşı Zeynep 'Üzülme Ali, el ele verip ararsak mutlaka buluruz' dedi. Birlikte tüm rafları sırayla, sınıf numaralarına göre kontrol ettiler.",
      "Sonunda kitabın yanlışlıkla masal kitapları rafına bırakıldığını fark ettiler. Kitabı alıp kütüphaneci öğretmene teşekkür ederek teslim ettiler. Dayanışma, kaybolan eşyaları ve neşeyi geri getirirdi."
    ],
    vocabulary: [
      { word: "Ödünç", meaning: "Geri verilmek üzere alınan veya verilen şey, emanet.", exampleSentence: "Kütüphaneden ödünç aldığım kitabı zamanında teslim ettim." },
      { word: "Dayanışma", meaning: "Bir topluluğu oluşturanların duygu, düşünce ve amaçta birbirine destek olması.", exampleSentence: "Öğrenciler arasındaki dayanışma projeyi başarıya ulaştırdı." },
      { word: "Teslim etmek", meaning: "Bir şeyi sahibine ya da sorumlu kişiye elden vermek.", exampleSentence: "Bulduğu cüzdanı okul müdürüne teslim etti." }
    ],
    questions: [
      {
        id: "frnd4_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Ali neden kütüphanede çok üzgündü?",
        options: ["A) Kitabı nereye koyduğunu hatırlayamadığı için", "B) Ödevini yapamadığı için", "C) Kütüphane kapandığı için"],
        correctAnswer: 0,
        explanation: "Kitabın yerini unuttuğu için üzülmüştür.",
        clueSentence: "Kitabı en son ödünç alan Ali, kitabı nereye koyduğunu hatırlayamadığı için çok üzgündü."
      },
      {
        id: "frnd4_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Kitap nerede bulundu?",
        options: ["A) Masal kitapları rafında", "B) Bahçedeki bankta", "C) Çantanın içinde"],
        correctAnswer: 0,
        explanation: "Yanlışlıkla masal kitapları rafına konulmuştur.",
        clueSentence: "Sonunda kitabın yanlışlıkla masal kitapları rafına bırakıldığını fark ettiler."
      },
      {
        id: "frnd4_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu hikayenin ana fikri nedir?",
        options: ["A) Arkadaşımızın zor anında ona destek olmak ve dayanışma içinde çözüm aramak çok değerlidir", "B) Kütüphaneye gidilmemelidir", "C) Kitaplar raflara konulmaz"],
        correctAnswer: 0,
        explanation: "Arkadaşa yardım ve dayanışma ana fikirdir.",
        clueSentence: "Dayanışma, kaybolan eşyaları ve neşeyi geri getirirdi."
      },
      {
        id: "frnd4_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Geri verilmek şartıyla alınan şeye ne denir?",
        options: ["A) Hediye", "B) Ödünç (Emanet)", "C) Satılık"],
        correctAnswer: 1,
        explanation: "Geri verilecek şeye ödünç denir.",
        clueSentence: "...kitabı en son ödünç alan Ali..."
      }
    ],
    rewardChest: {
      coins: 230,
      gemType: "sapphire",
      gemName: "Sorumluluk Safiri",
      gemColor: "#3b82f6",
      badgeTitle: "Kütüphane Dostu",
      badgeIcon: "BookOpen",
      secretLore: "Emanete sahip çıkan ve dostuna yardım eden örnek bir öğrencisin!"
    }
  },
  {
    id: "friend-5",
    levelNumber: 42,
    title: "Yeni Gelen Arkadaşa Hoş Geldin Sürprizi",
    islandName: "42. Durak: Sevgi Çemberi",
    theme: "forest",
    iconName: "Smile",
    colorScheme: {
      bg: "bg-pink-50",
      border: "border-pink-300",
      accent: "text-pink-900",
      badgeBg: "bg-pink-600",
      gradient: "from-pink-500 to-rose-700",
    },
    synopsis: "Başka şehirden yeni nakil gelen çekingen arkadaşları Emre'yi oyunlarına davet eden sınıfın sıcaklığı.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Başka bir şehirden okula yeni nakil gelen Emre, teneffüste bahçenin köşesindeki bankta tek başına oturuyor, kimseyi tanımadığı için biraz çekiniyordu.",
      "Sınıf başkanı Deniz ve arkadaşları bu durumu fark etti. Hemen yanına gidip 'Merhaba Emre! Biz yakantop oynuyoruz, takımımızda bir kişiye daha ihtiyacımız var, bizimle oynamak ister misin?' dediler.",
      "Emre'nin yüzünde kocaman bir tebessüm belirdi. Oyuna katıldı ve ilk günden harika arkadaşlıklar kurdu. Bir tebessüm ve samimi bir 'Hoş geldin', yabancılığı sımsıcak bir dostluğa çevirir."
    ],
    vocabulary: [
      { word: "Tebessüm", meaning: "Sessizce ve tatlı bir biçimde gülümseme.", exampleSentence: "Öğretmenin sıcak tebessümü yeni öğrenciyi çok rahatlattı." },
      { word: "Çekingen", meaning: "Topluluk içinde rahat davranamayan, utangaç ve sıkılgan kimse.", exampleSentence: "Çekingen çocuk zamanla arkadaşlarına alıştı." },
      { word: "Samimi", meaning: "İçten, yapmacıksız, candan ve dürüst davranan.", exampleSentence: "Samimi bir selamlaşma tüm buzları eritir." }
    ],
    questions: [
      {
        id: "frnd5_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Emre teneffüste neden tek başına bankta oturuyordu?",
        options: ["A) Kitap okumak istediği için", "B) Yeni geldiği ve kimseyi tanımadığı için çekindiğinden", "C) Uykusu geldiği için"],
        correctAnswer: 1,
        explanation: "Okula yeni nakil geldiği için çekinmiştir.",
        clueSentence: "...kimseyi tanımadığı için biraz çekiniyordu."
      },
      {
        id: "frnd5_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Arkadaşları Emre'yi hangi oyuna davet ettiler?",
        options: ["A) Yakantop oyununa", "B) Satranç oyununa", "C) Saklambaç oyununa"],
        correctAnswer: 0,
        explanation: "Yakantop oynamaya çağırmışlardır.",
        clueSentence: "'Biz yakantop oynuyoruz... bizimle oynamak ister misin?'"
      },
      {
        id: "frnd5_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin vermek istediği ders nedir?",
        options: ["A) Aramıza yeni katılanlara karşı kucak açmalı, onları oyunlarımıza ve sohbetimize dahil etmeliyiz", "B) Yeni gelenlerle hiç konuşulmamalıdır", "C) Teneffüste dışarı çıkılmamalıdır"],
        correctAnswer: 0,
        explanation: "Kapsayıcılık ve misafirperverlik ana fikirdir.",
        clueSentence: "Bir tebessüm ve samimi bir 'Hoş geldin', yabancılığı sımsıcak bir dostluğa çevirir."
      },
      {
        id: "frnd5_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Tatlı ve sessizce gülümsemeye ne ad verilir?",
        options: ["A) Tebessüm", "B) Çığlık", "C) Ağlama"],
        correctAnswer: 0,
        explanation: "Gülümsemeye tebessüm denir.",
        clueSentence: "Emre'nin yüzünde kocaman bir tebessüm belirdi."
      }
    ],
    rewardChest: {
      coins: 235,
      gemType: "diamond",
      gemName: "Tebessüm Kristali",
      gemColor: "#ec4899",
      badgeTitle: "Gönül Köprüsü",
      badgeIcon: "Smile",
      secretLore: "Kalbindeki sıcaklıkla yeni arkadaşına kapılarını açtın!"
    }
  },
  {
    id: "friend-6",
    levelNumber: 43,
    title: "Yaşlı Komşuya Pazar Alışverişi Yardımı",
    islandName: "43. Durak: Dayanışma Mahallesi",
    theme: "temple",
    iconName: "Heart",
    colorScheme: {
      bg: "bg-emerald-50",
      border: "border-emerald-300",
      accent: "text-emerald-900",
      badgeBg: "bg-emerald-600",
      gradient: "from-emerald-500 to-teal-700",
    },
    synopsis: "Pazardan dönen bastonlu Fatma Teyze'nin ağır filelerini dördüncü kata kadar taşıyan Ahmet.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Ahmet, pazar günü mahallede bisiklet sürerken komşuları yaşlı Fatma Teyze'nin elindeki ağır pazar torbalarıyla yürümekte zorlandığını gördü.",
      "Hemen bisikletini park edip yanına koştu. 'Fatma Teyze, torbalarınızı ben taşıyayım' diyerek fileleri aldı. Fatma Teyze'nin dördüncü kattaki dairesine kadar merdivenleri yavaşça çıktılar.",
      "Fatma Teyze Ahmet'in başını okşayıp 'Gözlerinden öperim evladım, büyüklere saygı gösterenlerin ömrü bereketle dolsun' diye dua etti ve ona kırmızı bir elma ikram etti. Büyüklere hürmet, milletimizin en köklü değeridir."
    ],
    vocabulary: [
      { word: "Hürmet", meaning: "Büyüklere, saygıdeğer kişilere duyulan derin saygı ve özen.", exampleSentence: "Yaşlılarımıza her zaman hürmet ve sevgi göstermeliyiz." },
      { word: "File", meaning: "İplik veya plastikten örülmüş alışveriş torbası.", exampleSentence: "Pazardan taze meyvelerle dolu fileyi taşıdık." },
      { word: "Dua", meaning: "Bir kimsenin iyiliği, sağlığı ve bereketi için iyi dileklerde bulunma.", exampleSentence: "Büyüğünün hayır duasını alan çocuk çok mutlu oldu." }
    ],
    questions: [
      {
        id: "frnd6_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Ahmet Fatma Teyze'ye nasıl yardımcı oldu?",
        options: ["A) Ağır pazar torbalarını dördüncü kattaki evine kadar taşıyarak", "B) Ona yol tarifi yaparak", "C) Sadece selam vererek"],
        correctAnswer: 0,
        explanation: "Pazar torbalarını evine kadar taşımıştır.",
        clueSentence: "...Fatma Teyze'nin dördüncü kattaki dairesine kadar merdivenleri yavaşça çıktılar."
      },
      {
        id: "frnd6_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Fatma Teyze teşekkür olarak Ahmet'e ne ikram etti?",
        options: ["A) Kırmızı bir elma", "B) Bir dilim pasta", "C) Şeker"],
        correctAnswer: 0,
        explanation: "Kırmızı bir elma ikram etmiştir.",
        clueSentence: "...ona kırmızı bir elma ikram etti."
      },
      {
        id: "frnd6_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Yaşlılarımıza ve büyüklerimize saygı ve yardım göstermek en güzel ahlaki görevimizdir", "B) Pazara tek başına gidilmez", "C) Merdivenlerden hızlı inilmelidir"],
        correctAnswer: 0,
        explanation: "Büyüklere saygı ve yardım ana fikirdir.",
        clueSentence: "Büyüklere hürmet, milletimizin en köklü değeridir."
      },
      {
        id: "frnd6_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Büyüklere gösterilen derin sevgi ve saygıya ne ad verilir?",
        options: ["A) Hürmet", "B) İnatçılık", "C) Acele"],
        correctAnswer: 0,
        explanation: "Saygıya hürmet denir.",
        clueSentence: "Büyüklere hürmet, milletimizin en köklü değeridir."
      }
    ],
    rewardChest: {
      coins: 240,
      gemType: "emerald",
      gemName: "Hürmet Zümrüdü",
      gemColor: "#059669",
      badgeTitle: "Büyüklerin Duası",
      badgeIcon: "Heart",
      secretLore: "Büyüklere saygı gösteren altın kalpli bir kaşifsin!"
    }
  },
  {
    id: "friend-7",
    levelNumber: 44,
    title: "Birlikte Yapılan Büyük Duvar Resmi",
    islandName: "44. Durak: Renkli Tuval",
    theme: "temple",
    iconName: "Palette",
    colorScheme: {
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      accent: "text-yellow-900",
      badgeBg: "bg-yellow-600",
      gradient: "from-yellow-400 to-orange-600",
    },
    synopsis: "Okul bahçesinin gri duvarını güneş, gökkuşağı ve ağaç resimleriyle boyayan sınıfın iş birliği.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Okul bahçesindeki soğuk gri beton duvar herkesin canını sıkıyordu. Görsel sanatlar öğretmeni, 3. sınıf öğrencilerine fırçaları ve rengarenk boyaları dağıttı.",
      "Kimi gökyüzünü maviye boyadı, kimi güneşi ve çiçekleri çizdi. Selin ağaçların gölgesini tamamlarken, Kaan uçan rengarenk kelebekler ekledi. Herkes yeteneğini birleştirerek duvara bir parça ekledi.",
      "Akşam olduğunda gri duvar yerini cıvıl cıvıl bir masal ormanına bıraktı. Tek bir fırça küçük bir nokta koyabilir ama birlikte sallanan fırçalar bir şaheser yaratır."
    ],
    vocabulary: [
      { word: "Şaheser", meaning: "Üstün nitelikli, kusursuz ve hayranlık uyandıran büyük sanat eseri.", exampleSentence: "Öğrencilerin boyadığı duvar resmi adeta bir şahesere dönüştü." },
      { word: "Tuval", meaning: "Üzerine yağlı boya veya akrilik resim yapılan gerilmiş keten kumaş.", exampleSentence: "Ressam tuvalin üzerine göl manzarasını çizdi." },
      { word: "İş birliği", meaning: "Bir amacı gerçekleştirmek için birlikte çalışma faaliyeti.", exampleSentence: "Öğrencilerin iş birliği okulu güzelleştirdi." }
    ],
    questions: [
      {
        id: "frnd7_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Öğrenciler fırçalarıyla neyi boyadılar?",
        options: ["A) Sınıf kapılarını", "B) Okul bahçesindeki gri beton duvarı", "C) Sıraları"],
        correctAnswer: 1,
        explanation: "Okul bahçesindeki gri beton duvarı boyamışlardır.",
        clueSentence: "Okul bahçesindeki soğuk gri beton duvar herkesin canını sıkıyordu."
      },
      {
        id: "frnd7_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Duvara hangi figürler çizildi?",
        options: ["A) Gökyüzü, güneş, çiçekler, ağaçlar ve kelebekler", "B) Sadece arabalar", "C) Sadece siyah çizgiler"],
        correctAnswer: 0,
        explanation: "Güneş, gökyüzü, çiçek ve kelebekler çizilmiştir.",
        clueSentence: "Kimi gökyüzünü maviye boyadı, kimi güneşi ve çiçekleri çizdi."
      },
      {
        id: "frnd7_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Birlikte çalışmak ve güçleri birleştirmek harika güzellikler ve şaheserler ortaya çıkarır", "B) Duvarlar boyanmamalıdır", "C) Resim sadece evde yapılır"],
        correctAnswer: 0,
        explanation: "Takım çalışması ve iş birliği ana fikirdir.",
        clueSentence: "Tek bir fırça küçük bir nokta koyabilir ama birlikte sallanan fırçalar bir şaheser yaratır."
      },
      {
        id: "frnd7_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Kusursuz ve hayranlık uyandıran büyük sanat eserine ne denir?",
        options: ["A) Şaheser", "B) Karalama", "C) Taslak"],
        correctAnswer: 0,
        explanation: "Kusursuz sanat eserine şaheser denir.",
        clueSentence: "...birlikte sallanan fırçalar bir şaheser yaratır."
      }
    ],
    rewardChest: {
      coins: 245,
      gemType: "diamond",
      gemName: "Sanat ve Birlik Kristali",
      gemColor: "#f59e0b",
      badgeTitle: "Büyük Sanatçı",
      badgeIcon: "Palette",
      secretLore: "Arkadaşlarınla el ele verip dünyayı güzelleştirdin!"
    }
  },
  {
    id: "friend-8",
    levelNumber: 45,
    title: "Ağaç Fidanı Diken Minik Eller",
    islandName: "45. Durak: Gelecek Ormanı",
    theme: "forest",
    iconName: "Trees",
    colorScheme: {
      bg: "bg-emerald-50",
      border: "border-emerald-300",
      accent: "text-emerald-900",
      badgeBg: "bg-emerald-600",
      gradient: "from-emerald-500 to-green-800",
    },
    synopsis: "Ağaç Bayramı'nda yamaçtaki boş alana onlarca çam fidanı dikip can suyu veren çocukların doğa aşkı.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Milli Ağaçlandırma Günü'nde 3. sınıf öğrencileri ellerinde kürekler ve çam fidanlarıyla köyün çıplak tepesinde toplandılar. Orman işletme şefi onlara fidanın köklerini incitmeden nasıl dikileceğini gösterdi.",
      "Eren ve İpek çukuru dikkatle kazdılar, fidanı dik koyup etrafını yumuşak toprakla doldurdular. Ardından mataralarından doldurdukları can suyunu fidanın dibine döktüler.",
      "Fidanın yanına 'Bu fidan geleceğe nefes olsun' yazılı küçük bir tahta tabela çaktılar. Dikilen her fidan, yarınlara bırakılan en temiz ve yeşil mirastır."
    ],
    vocabulary: [
      { word: "Miras", meaning: "Gelecek kuşaklara bırakılan değerli maddi veya manevi emanet.", exampleSentence: "Temiz ve yeşil bir doğa çocuklarımıza bırakacağımız en güzel mirastır." },
      { word: "Ağaçlandırma", meaning: "Ağaç bulunmayan veya tahrip olmuş topraklara planlı olarak fidan dikme işi.", exampleSentence: "Ağaçlandırma seferberliğiyle tepe yemyeşil oldu." },
      { word: "Nefes", meaning: "Canlıların yaşamak için akciğerlerine çekip verdikleri hava, soluk.", exampleSentence: "Ormanlar dünyanın oksijen ve nefes kaynağıdır." }
    ],
    questions: [
      {
        id: "frnd8_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Öğrenciler tepeye hangi ağacın fidanlarını diktiler?",
        options: ["A) Çam fidanlarını", "B) Palmiye fidanlarını", "C) Kaktüsleri"],
        correctAnswer: 0,
        explanation: "Çam fidanları dikmişlerdir.",
        clueSentence: "...ellerinde kürekler ve çam fidanlarıyla köyün çıplak tepesinde toplandılar."
      },
      {
        id: "frnd8_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Fidanın yanına dikilen tabelada ne yazıyordu?",
        options: ["A) 'Bu fidan geleceğe nefes olsun'", "B) 'Buraya basmayınız'", "C) 'Orman Yolu'"],
        correctAnswer: 0,
        explanation: "'Bu fidan geleceğe nefes olsun' yazılıdır.",
        clueSentence: "...'Bu fidan geleceğe nefes olsun' yazılı küçük bir tahta tabela çaktılar."
      },
      {
        id: "frnd8_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana fikri nedir?",
        options: ["A) Fidan dikmek ve doğayı yeşillendirmek geleceğimize bırakabileceğimiz en kutsal mirastır", "B) Fidanlar sadece sonbaharda dikilir", "C) Tepelere çıkılmamalıdır"],
        correctAnswer: 0,
        explanation: "Ağaç dikmenin ve doğayı korumanın önemi ana fikirdir.",
        clueSentence: "Dikilen her fidan, yarınlara bırakılan en temiz ve yeşil mirastır."
      },
      {
        id: "frnd8_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Gelecek nesillere bırakılan değerli emanete ne ad verilir?",
        options: ["A) Miras", "B) Borç", "C) Yük"],
        correctAnswer: 0,
        explanation: "Geleceğe bırakılana miras denir.",
        clueSentence: "...yarınlara bırakılan en temiz ve yeşil mirastır."
      }
    ],
    rewardChest: {
      coins: 250,
      gemType: "emerald",
      gemName: "Orman Fidanı Zümrüdü",
      gemColor: "#10b981",
      badgeTitle: "Geleceğe Nefes",
      badgeIcon: "Trees",
      secretLore: "Diktiğin fidanlar geleceğin yemyeşil ormanlarına dönüşecek!"
    }
  },
  {
    id: "friend-9",
    levelNumber: 46,
    title: "Sabırla Büyütülen Saksı Çiçeği",
    islandName: "46. Durak: Çiçekli Pencere",
    theme: "forest",
    iconName: "Sun",
    colorScheme: {
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      accent: "text-yellow-900",
      badgeBg: "bg-yellow-600",
      gradient: "from-yellow-400 to-amber-600",
    },
    synopsis: "Öğretmenin verdiği tohumu her gün özenle sulayıp güneşe koyan ve sonunda rengarenk açtıran Defne.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "Öğretmen dönem başında her öğrenciye küçük bir saksı ve birer adet kadife çiçeği tohumu verdi. Bazı öğrenciler birkaç gün sonra çiçek açmadığı için sabırsızlanıp saksıyı unuttular.",
      "Defne ise her sabah saksıyı pencerenin güneş alan köşesine koydu, toprağı kurudukça tatlı kaşığıyla su verdi ve çiçeğiyle sevgiyle konuştu.",
      "Üçüncü haftanın sonunda yeşil bir filiz toprağı deldi ve ardından turuncu göz kamaştırıcı bir çiçek açtı. Emek, sevgi ve sabır birleştiğinde en sert tohumlar bile çiçeğe durur."
    ],
    vocabulary: [
      { word: "Filiz", meaning: "Tohumdan veya ağaç dalından süren taze, körpe yeşil sürgün.", exampleSentence: "Saksıdaki tohum bir hafta sonra minik bir filiz verdi." },
      { word: "Emek", meaning: "Bir işi başarmak için harcanan beden ve zihin gücü, zahmet.", exampleSentence: "Verilen her emek er ya da geç güzel bir meyve verir." },
      { word: "Sabırsız", meaning: "Beklemeye tahammülü olmayan, aceleci davranan kimse.", exampleSentence: "Sabırsız olmak yerine sabretmeyi öğrenmeliyiz." }
    ],
    questions: [
      {
        id: "frnd9_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Defne saksıdaki tohumun büyümesi için ne yaptı?",
        options: ["A) Saksıyı güneş alan pencereye koyup düzenli suladı ve ilgilendi", "B) Saksıyı karanlık dolaba sakladı", "C) Çok fazla su doldurdu"],
        correctAnswer: 0,
        explanation: "Güneşe koyup düzenli ve özenle sulamıştır.",
        clueSentence: "Defne ise her sabah saksıyı pencerenin güneş alan köşesine koydu, toprağı kurudukça tatlı kaşığıyla su verdi..."
      },
      {
        id: "frnd9_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Üçüncü haftanın sonunda saksıda ne açtı?",
        options: ["A) Göz kamaştırıcı turuncu bir kadife çiçeği", "B) Beyaz bir papatya", "C) Kırmızı bir gül"],
        correctAnswer: 0,
        explanation: "Turuncu bir kadife çiçeği açmıştır.",
        clueSentence: "...ardından turuncu göz kamaştırıcı bir çiçek açtı."
      },
      {
        id: "frnd9_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Sevgi, sabır ve emekle yapılan her iş en güzel sonucu verir", "B) Çiçekler hiç sulanmaz", "C) Tohumlar karanlıkta büyür"],
        correctAnswer: 0,
        explanation: "Sabır, emek ve sevginin mucizesi ana fikirdir.",
        clueSentence: "Emek, sevgi ve sabır birleştiğinde en sert tohumlar bile çiçeğe durur."
      },
      {
        id: "frnd9_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Tohumdan çıkan taze, küçük yeşil sürgüne ne denir?",
        options: ["A) Filiz", "B) Kütük", "C) Diken"],
        correctAnswer: 0,
        explanation: "Taze yeşil sürgüne filiz denir.",
        clueSentence: "...yeşil bir filiz toprağı deldi..."
      }
    ],
    rewardChest: {
      coins: 255,
      gemType: "gold_crown",
      gemName: "Sabır Çiçeği Tacı",
      gemColor: "#f59e0b",
      badgeTitle: "Sabır Ustası",
      badgeIcon: "Sun",
      secretLore: "Sevgi ve sabırla tohumları çiçeğe dönüştürdün!"
    }
  },
  {
    id: "friend-10",
    levelNumber: 47,
    title: "Koşu Yarışında Düşen Arkadaşına El Uzatan Mert",
    islandName: "47. Durak: Centilmenlik Stadı",
    theme: "temple",
    iconName: "Award",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      accent: "text-amber-900",
      badgeBg: "bg-amber-600",
      gradient: "from-amber-500 to-yellow-700",
    },
    synopsis: "23 Nisan koşusunda bitiş çizgisine yaklaşırken ayağı takılıp düşen rakibini kaldırıp birlikte bitiren Mert.",
    readingTimeMinutes: 2,
    wordCount: 160,
    paragraphs: [
      "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı şenliklerinde okullar arası yüz metre koşu yarışı düzenlenmişti. Mert ve rakip okuldan Ozan başa baş önde koşuyorlardı.",
      "Bitiş çizgisine on metre kala Ozan'ın ayağı takıldı ve yere düştü. Mert birinci olabilirdi; fakat durup geri döndü. Ozan'ın elinden tutup kaldırdı ve 'İyi misin dostum? Gel beraber bitirelim' dedi.",
      "İki çocuk bitiş çizgisini el ele geçtiler. Bütün tribünler ayağa kalkıp bu centilmenliği dakikalarca alkışladı. Madalyalar zamanla eskir ama spor ahlakı ve centilmenlik ömür boyu parıldar."
    ],
    vocabulary: [
      { word: "Centilmenlik", meaning: "Spor müsabakalarında rakibe saygılı, dürüst, kibar ve yardımsever davranma anlayışı.", exampleSentence: "Düşen rakibine el uzatan sporcu büyük bir centilmenlik örneği sergiledi." },
      { word: "Tribün", meaning: "Spor sahalarında seyircilerin oturduğu basamaklı yer.", exampleSentence: "Tribündeki binlerce seyirci sporcuları coşkuyla alkışladı." },
      { word: "Müsabaka", meaning: "İki tarafın üstün gelmek için kurallara uygun olarak yaptığı yarışma, karşılaşma.", exampleSentence: "Basketbol müsabakası büyük bir heyecanla geçti." }
    ],
    questions: [
      {
        id: "frnd10_q1",
        type: "multiple_choice",
        category: "5N1K",
        question: "Mert bitiş çizgisine yaklaşırken neden durup geri döndü?",
        options: ["A) Yere düşen arkadaşı Ozan'ı kaldırmak ve yardım etmek için", "B) Ayakkabısı çıktığı için", "C) Yorulduğu için"],
        correctAnswer: 0,
        explanation: "Düşen arkadaşına el uzatmak için durmuştur.",
        clueSentence: "Mert birinci olabilirdi; fakat durup geri döndü. Ozan'ın elinden tutup kaldırdı..."
      },
      {
        id: "frnd10_q2",
        type: "multiple_choice",
        category: "5N1K",
        question: "Mert ve Ozan yarışı nasıl tamamladılar?",
        options: ["A) Bitiş çizgisini el ele birlikte geçerek", "B) Yarışı bırakarak", "C) Hakeme şikayet ederek"],
        correctAnswer: 0,
        explanation: "El ele bitiş çizgisini geçmişlerdir.",
        clueSentence: "İki çocuk bitiş çizgisini el ele geçtiler."
      },
      {
        id: "frnd10_q3",
        type: "multiple_choice",
        category: "Ana Fikir",
        question: "Bu metnin ana düşüncesi nedir?",
        options: ["A) Sporda ve hayatta kazanmaktan daha değerli olan şey centilmenlik, dostluk ve saygıdır", "B) Koşu yarışlarına katılınmamalıdır", "C) Yalnızca birinci olmak önemlidir"],
        correctAnswer: 0,
        explanation: "Centilmenliğin birincilikten üstün olduğu ana fikirdir.",
        clueSentence: "Madalyalar zamanla eskir ama spor ahlakı ve centilmenlik ömür boyu parıldar."
      },
      {
        id: "frnd10_q4",
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: "Sporda rakibe karşı gösterilen kibar ve dürüst davranışa ne ad verilir?",
        options: ["A) Centilmenlik", "B) Hile", "C) Kıskançlık"],
        correctAnswer: 0,
        explanation: "Saygılı davranışa centilmenlik denir.",
        clueSentence: "...bu centilmenliği dakikalarca alkışladı."
      }
    ],
    rewardChest: {
      coins: 260,
      gemType: "gold_crown",
      gemName: "Centilmenlik Altın Madalyası",
      gemColor: "#eab308",
      badgeTitle: "Gerçek Şampiyon",
      badgeIcon: "Award",
      secretLore: "Gönüllerin şampiyonu ve centilmenlik abidesi bir kaşifsin!"
    }
  }
];
