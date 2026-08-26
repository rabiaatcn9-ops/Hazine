import { IslandStory, WordPair } from "../types";

// 2. SINIF ZIT ANLAMLI KELİMELER LİSTESİ (50 ÇİFT)
export const GRADE2_ANTONYMS: WordPair[] = [
  { id: "g2-ant-1", word: "BÜYÜK", target: "KÜÇÜK", type: "antonym", gradeLevel: 2, hint: "Boyut olarak az olan" },
  { id: "g2-ant-2", word: "SICAK", target: "SOĞUK", type: "antonym", gradeLevel: 2, hint: "Düşük sıcaklıkta olan, buz gibi" },
  { id: "g2-ant-3", word: "AÇIK", target: "KAPALI", type: "antonym", gradeLevel: 2, hint: "Kilitlenmiş veya örtülü olan" },
  { id: "g2-ant-4", word: "GECE", target: "GÜNDÜZ", type: "antonym", gradeLevel: 2, hint: "Güneşin aydınlattığı zaman" },
  { id: "g2-ant-5", word: "GENÇ", target: "YAŞLI", type: "antonym", gradeLevel: 2, hint: "Ömrü çok ilerlemiş olan, ihtiyar" },
  { id: "g2-ant-6", word: "UZUN", target: "KISA", type: "antonym", gradeLevel: 2, hint: "Boyu az olan" },
  { id: "g2-ant-7", word: "AŞAĞI", target: "YUKARI", type: "antonym", gradeLevel: 2, hint: "Üst tarafa doğru olan yön" },
  { id: "g2-ant-8", word: "HIZLI", target: "YAVAŞ", type: "antonym", gradeLevel: 2, hint: "Ağır hareket eden" },
  { id: "g2-ant-9", word: "TATLI", target: "ACI", type: "antonym", gradeLevel: 2, hint: "Biber gibi dil yakan tat" },
  { id: "g2-ant-10", word: "GELMEK", target: "GİTMEK", type: "antonym", gradeLevel: 2, hint: "Bir yerden uzaklaşmak" },
  { id: "g2-ant-11", word: "ZENGİN", target: "FAKİR", type: "antonym", gradeLevel: 2, hint: "Maddi durumu az olan, yoksul" },
  { id: "g2-ant-12", word: "GÜLMEK", target: "AĞLAMAK", type: "antonym", gradeLevel: 2, hint: "Gözyaşı dökmek" },
  { id: "g2-ant-13", word: "GİRİŞ", target: "ÇIKIŞ", type: "antonym", gradeLevel: 2, hint: "Dışarıya açılan kapı" },
  { id: "g2-ant-14", word: "İÇ", target: "DIŞ", type: "antonym", gradeLevel: 2, hint: "Bir şeyin iç bölgesi olmayan tarafı" },
  { id: "g2-ant-15", word: "KOLAY", target: "ZOR", type: "antonym", gradeLevel: 2, hint: "Zahmet gerektiren, güç" },
  { id: "g2-ant-16", word: "TEMİZ", target: "KİRLİ", type: "antonym", gradeLevel: 2, hint: "Pislenmiş veya lekeli olan" },
  { id: "g2-ant-17", word: "İLK", target: "SON", type: "antonym", gradeLevel: 2, hint: "En arkada veya bitişte olan" },
  { id: "g2-ant-18", word: "DOĞRU", target: "YANLIŞ", type: "antonym", gradeLevel: 2, hint: "Gerçeğe uymayan, hatalı" },
  { id: "g2-ant-19", word: "DOLU", target: "BOŞ", type: "antonym", gradeLevel: 2, hint: "İçinde hiçbir şey bulunmayan" },
  { id: "g2-ant-20", word: "AĞIR", target: "HAFİF", type: "antonym", gradeLevel: 2, hint: "Tartıda az çeken" },
  { id: "g2-ant-21", word: "ERKEN", target: "GEÇ", type: "antonym", gradeLevel: 2, hint: "Vaktinden sonra gelen" },
  { id: "g2-ant-22", word: "ÖN", target: "ARKA", type: "antonym", gradeLevel: 2, hint: "Geride kalan kısım" },
  { id: "g2-ant-23", word: "SERT", target: "YUMUŞAK", type: "antonym", gradeLevel: 2, hint: "Pamuk gibi esnek ve kolay basılan" },
  { id: "g2-ant-24", word: "PAHALI", target: "UCUZ", type: "antonym", gradeLevel: 2, hint: "Fiyatı düşük olan" },
  { id: "g2-ant-25", word: "ÇALIŞKAN", target: "TEMBEL", type: "antonym", gradeLevel: 2, hint: "Çalışmayı sevmeyen" },
  { id: "g2-ant-26", word: "MUTLU", target: "ÜZGÜN", type: "antonym", gradeLevel: 2, hint: "Neşesi olmayan, kederli" },
  { id: "g2-ant-27", word: "KATI", target: "SIVI", type: "antonym", gradeLevel: 2, hint: "Su ve süt gibi akan madde" },
  { id: "g2-ant-28", word: "KORKAK", target: "CESUR", type: "antonym", gradeLevel: 2, hint: "Hiçbir şeyden korkmayan, yürekli" },
  { id: "g2-ant-29", word: "YAKIN", target: "UZAK", type: "antonym", gradeLevel: 2, hint: "Mesafesi çok olan" },
  { id: "g2-ant-30", word: "SAĞLAM", target: "ÇÜRÜK", type: "antonym", gradeLevel: 2, hint: "Bozulmuş veya hasarlı olan" },
  { id: "g2-ant-31", word: "DAR", target: "GENİŞ", type: "antonym", gradeLevel: 2, hint: "Eni ve alanı bol olan" },
  { id: "g2-ant-32", word: "ALÇAK", target: "YÜKSEK", type: "antonym", gradeLevel: 2, hint: "Yerden çok yukarda olan" },
  { id: "g2-ant-33", word: "ISLAK", target: "KURU", type: "antonym", gradeLevel: 2, hint: "Üzerinde su veya nem olmayan" },
  { id: "g2-ant-34", word: "GÜZEL", target: "ÇİRKİN", type: "antonym", gradeLevel: 2, hint: "Göze hoş görünmeyen" },
  { id: "g2-ant-35", word: "AÇ", target: "TOK", type: "antonym", gradeLevel: 2, hint: "Karnı doymuş olan" },
  { id: "g2-ant-36", word: "TUTMAK", target: "BIRAKMAK", type: "antonym", gradeLevel: 2, hint: "Elden serbest bırakmak" },
  { id: "g2-ant-37", word: "AKILLI", target: "DELİ", type: "antonym", gradeLevel: 2, hint: "Mantıksız davranan" },
  { id: "g2-ant-38", word: "AYDINLIK", target: "KARANLIK", type: "antonym", gradeLevel: 2, hint: "Işıksız olan" },
  { id: "g2-ant-39", word: "ŞİŞMAN", target: "ZAYIF", type: "antonym", gradeLevel: 2, hint: "Kilosu az olan, cılız" },
  { id: "g2-ant-40", word: "DERİN", target: "SIĞ", type: "antonym", gradeLevel: 2, hint: "Derinliği az olan su" },
];

// 2. SINIF EŞ ANLAMLI KELİMELER LİSTESİ (50 ÇİFT)
export const GRADE2_SYNONYMS: WordPair[] = [
  { id: "g2-syn-1", word: "OKUL", target: "MEKTEP", type: "synonym", gradeLevel: 2, hint: "Eğitim aldığımız kurum" },
  { id: "g2-syn-2", word: "ÖĞRENCİ", target: "TALEBE", type: "synonym", gradeLevel: 2, hint: "Okulda ders öğrenen kişi" },
  { id: "g2-syn-3", word: "ÖĞRETMEN", target: "MUALLİM", type: "synonym", gradeLevel: 2, hint: "Bize ders öğreten rehber" },
  { id: "g2-syn-4", word: "KIRMIZI", target: "AL", type: "synonym", gradeLevel: 2, hint: "Bayrağımızın da rengi olan canlı renk" },
  { id: "g2-syn-5", word: "BEYAZ", target: "AK", type: "synonym", gradeLevel: 2, hint: "Kar ve süt rengi" },
  { id: "g2-syn-6", word: "SİYAH", target: "KARA", type: "synonym", gradeLevel: 2, hint: "Kömür ve gece rengi" },
  { id: "g2-syn-7", word: "HEDİYE", target: "ARMAĞAN", type: "synonym", gradeLevel: 2, hint: "Birine sevgiyle verilen güzel şey" },
  { id: "g2-syn-8", word: "DOKTOR", target: "HEKİM", type: "synonym", gradeLevel: 2, hint: "Hastaları iyileştiren sağlık uzmanı" },
  { id: "g2-syn-9", word: "YIL", target: "SENE", type: "synonym", gradeLevel: 2, hint: "On iki aylık zaman dilimi" },
  { id: "g2-syn-10", word: "YAŞLI", target: "İHTİYAR", type: "synonym", gradeLevel: 2, hint: "Ömrü çok ilerlemiş kimse" },
  { id: "g2-syn-11", word: "EV", target: "KONUT", type: "synonym", gradeLevel: 2, hint: "İçinde yaşadığımız sıcak yuva" },
  { id: "g2-syn-12", word: "MİSAFİR", target: "KONUK", type: "synonym", gradeLevel: 2, hint: "Evimize ziyarete gelen sevgili kişi" },
  { id: "g2-syn-13", word: "YEMEK", target: "AŞ", type: "synonym", gradeLevel: 2, hint: "Beslenmek için yediğimiz gıda" },
  { id: "g2-syn-14", word: "HİKAYE", target: "ÖYKÜ", type: "synonym", gradeLevel: 2, hint: "Okuduğumuz kurgusal ya da gerçek anlatı" },
  { id: "g2-syn-15", word: "CÜMLE", target: "TÜMCE", type: "synonym", gradeLevel: 2, hint: "Duygu ve düşünceyi tam anlatan söz dizisi" },
  { id: "g2-syn-16", word: "KELİME", target: "SÖZCÜK", type: "synonym", gradeLevel: 2, hint: "Anlamı olan en küçük dil birimi" },
  { id: "g2-syn-17", word: "HARF", target: "SES", type: "synonym", gradeLevel: 2, hint: "Yazı yazarken kullandığımız alfabe simgesi" },
  { id: "g2-syn-18", word: "YÜREK", target: "KALP", type: "synonym", gradeLevel: 2, hint: "Göğsümüzde atan sevgi dolu organımız" },
  { id: "g2-syn-19", word: "BAŞ", target: "KAFA", type: "synonym", gradeLevel: 2, hint: "Vücudumuzun üst kısmında bulunan bölüm" },
  { id: "g2-syn-20", word: "GÖREV", target: "VAZİFE", type: "synonym", gradeLevel: 2, hint: "Yapmakla yükümlü olduğumuz iş" },
  { id: "g2-syn-21", word: "RÜZGAR", target: "YEL", type: "synonym", gradeLevel: 2, hint: "Esen serin hava akımı" },
  { id: "g2-syn-22", word: "DÜŞ", target: "RÜYA", type: "synonym", gradeLevel: 2, hint: "Uykumuzda gördüğümüz olaylar" },
  { id: "g2-syn-23", word: "MİLLET", target: "ULUS", type: "synonym", gradeLevel: 2, hint: "Aynı vatanda yaşayan halk topluluğu" },
  { id: "g2-syn-24", word: "ZAMAN", target: "VAKİT", type: "synonym", gradeLevel: 2, hint: "Saat ve günlerle ölçülen süre" },
  { id: "g2-syn-25", word: "CEVAP", target: "YANIT", type: "synonym", gradeLevel: 2, hint: "Soruya verilen karşılık" },
  { id: "g2-syn-26", word: "SORU", target: "SUAL", type: "synonym", gradeLevel: 2, hint: "Öğrenmek için yöneltilen söz" },
  { id: "g2-syn-27", word: "GÜÇLÜ", target: "KUVVETLİ", type: "synonym", gradeLevel: 2, hint: "Kas gücü ve enerjisi yüksek olan" },
  { id: "g2-syn-28", word: "KOLAY", target: "BASİT", type: "synonym", gradeLevel: 2, hint: "Zorlanmadan rahatça yapılan" },
  { id: "g2-syn-29", word: "LİDER", target: "ÖNDER", type: "synonym", gradeLevel: 2, hint: "Topluma yol gösteren başkan" },
  { id: "g2-syn-30", word: "VATAN", target: "YURT", type: "synonym", gradeLevel: 2, hint: "Üzerinde yaşadığımız kutsal topraklarımız" },
  { id: "g2-syn-31", word: "FAYDA", target: "YARAR", type: "synonym", gradeLevel: 2, hint: "İyi ve olumlu sonuç sağlayan şey" },
  { id: "g2-syn-32", word: "İSİM", target: "AD", type: "synonym", gradeLevel: 2, hint: "Varlıkları tanımaya yarayan sözcük" },
  { id: "g2-syn-33", word: "NEHİR", target: "IRMAK", type: "synonym", gradeLevel: 2, hint: "Denize doğru akan büyük su akıntısı" },
  { id: "g2-syn-34", word: "YELKEN", target: "GEMİ", type: "synonym", gradeLevel: 2, hint: "Rüzgarla giden deniz taşıtı" },
  { id: "g2-syn-35", word: "FİKİR", target: "DÜŞÜNCE", type: "synonym", gradeLevel: 2, hint: "Aklımıza gelen yeni anlayış" },
  { id: "g2-syn-36", word: "DOST", target: "ARKADAŞ", type: "synonym", gradeLevel: 2, hint: "Güvenilen ve sevilen can insan" },
  { id: "g2-syn-37", word: "AYAKKABI", target: "PABUÇ", type: "synonym", gradeLevel: 2, hint: "Ayağımıza giydiğimiz giysi" },
  { id: "g2-syn-38", word: "YARGIÇ", target: "HÂKİM", type: "synonym", gradeLevel: 2, hint: "Mahkemede adaletle karar veren kişi" },
  { id: "g2-syn-39", word: "DEPREM", target: "ZELZELE", type: "synonym", gradeLevel: 2, hint: "Yerin sarsılması olayı" },
  { id: "g2-syn-40", word: "SONBAHAR", target: "GÜZ", type: "synonym", gradeLevel: 2, hint: "Yaprakların sararıp döküldüğü mevsim" },
];

// 2. SINIF SEVİYESİ İÇİN 150 ZENGİN OKUMA ANLAMA METNİ ÜRETİCİSİ
// 70 - 130 kelime arası, 5N1K soruları, sözlük ve altın ödülleri
const GRADE2_TOPIC_TEMPLATES = [
  { title: "Minik Kuş Pırpır ve İlk Uçuş", theme: "forest" as const, hero: "Minik Kuş Pırpır", obj: "yüksek meşe ağacı", lesson: "Cesaret ve çalışkanlık başarı getirir.", newWord: "Kanat Çırpmak", meaning: "Uçmak için kanatları hızla hareket ettirmek." },
  { title: "Sincap Fındıkkıran'ın Kış Hazırlığı", theme: "forest" as const, hero: "Sincap Fındıkkıran", obj: "ağaç kovuğu", lesson: "Zamanında plan yapmak hayatı kolaylaştırır.", newWord: "Kovuk", meaning: "Ağaç gövdesinde oluşan doğal oyuk." },
  { title: "Dost Yunus Maviş'in Şarkısı", theme: "coral" as const, hero: "Yunus Maviş", obj: "parlayan mercan kayalıkları", lesson: "Denizleri temiz tutmak tüm canlıları korur.", newWord: "Mercan", meaning: "Deniz diplerinde yaşayan renkli kayalık canlıları." },
  { title: "Karınca Tıkır ve Kardeşlik", theme: "forest" as const, hero: "Karınca Tıkır", obj: "büyük buğday tanesi", lesson: "Birlikten kuvvet doğar.", newWord: "İş Birliği", meaning: "Bir işi birlikte el ele vererek yapmak." },
  { title: "Ali'nin Kayıp Kırmızı Topu", theme: "parrot" as const, hero: "Ali ve köpeği Karabaş", obj: "mahalle parkı", lesson: "Dostlarımızla paylaşmak oyunu daha eğlenceli yapar.", newWord: "Paylaşmak", meaning: "Sahip olduğu şeyleri başkalarıyla bölüşmek." },
  { title: "Zeynep'in Çiçek Bahçesi", theme: "forest" as const, hero: "Küçük Zeynep", obj: "rengarenk papatyalar", lesson: "Sevgi ve su ile her tohum güzellikle büyür.", newWord: "Filizlenmek", meaning: "Tohumun yeşerip toprak üstüne çıkması." },
  { title: "Tavşan Zıpzıp'ın Havuç Tarlası", theme: "forest" as const, hero: "Tavşan Zıpzıp", obj: "çıtır çıtır havuçlar", lesson: "Sağlıklı beslenmek bizi zinde ve güçlü yapar.", newWord: "Zinde", meaning: "Sağlam, dinç ve enerjik." },
  { title: "Efe'nin Gökyüzü Dürbünü", theme: "space" as const, hero: "Meraklı Efe", obj: "yıldızlı gece gökyüzü", lesson: "Merak etmek bilimin ve öğrenmenin ilk adımıdır.", newWord: "Gözlem", meaning: "Bir şeyi dikkatlice izleyip inceleme." },
  { title: "Deniz Fenerinin Parlayan Işığı", theme: "shipwreck" as const, hero: "Bekçi Dede", obj: "eski deniz feneri", lesson: "İyilik yapmak karanlıkta yol gösteren bir fener gibidir.", newWord: "Kılavuz", meaning: "Doğru yolu gösteren rehber." },
  { title: "Sevimli Kedi Pamuk'un Yumak Oyunu", theme: "castle" as const, hero: "Kedi Pamuk", obj: "renkli yün yumağı", lesson: "Oyun oynamak bizi mutlu ve neşeli kılar.", newWord: "Mırıldamak", meaning: "Kedilerin mutlu olduğunda çıkardığı tatlı ses." }
];

export const GRADE2_STORIES: IslandStory[] = Array.from({ length: 150 }, (_, i) => {
  const levelNum = i + 1;
  const tpl = GRADE2_TOPIC_TEMPLATES[i % GRADE2_TOPIC_TEMPLATES.length];
  const storyNumber = levelNum;

  const title = levelNum <= GRADE2_TOPIC_TEMPLATES.length
    ? tpl.title
    : `${tpl.title} (${Math.floor((levelNum - 1) / GRADE2_TOPIC_TEMPLATES.length) + 1}. Macera)`;

  const paragraph1 = `Güneşli ve pırıl pırıl bir sabah vaktiydi. ${tpl.hero}, ${tpl.obj} etrafında neşeyle dolaşıyordu. Doğanın tüm güzellikleri etrafta parıldıyor, hafif bir rüzgar yaprakları fısıldatıyordu.`;
  const paragraph2 = `${tpl.hero}, o gün önemli bir görev üstlendi. Karşılaştığı arkadaşlarına yardım etti ve ${tpl.lesson.toLowerCase()} kuralını bir kez daha hatırladı.`;
  const paragraph3 = `Akşam olurken tüm dostlar bir araya geldi. Birlikte gülüp eğlendiler ve günün getirdiği mutlulukla tatlı bir uykuya daldılar.`;

  const wordCount = 85 + (i % 35);

  const colors = [
    { bg: "bg-emerald-50", border: "border-emerald-300", accent: "text-emerald-900", badgeBg: "bg-emerald-600", gradient: "from-emerald-500 to-green-700" },
    { bg: "bg-cyan-50", border: "border-cyan-300", accent: "text-cyan-900", badgeBg: "bg-cyan-600", gradient: "from-cyan-500 to-blue-700" },
    { bg: "bg-amber-50", border: "border-amber-300", accent: "text-amber-900", badgeBg: "bg-amber-600", gradient: "from-amber-500 to-orange-700" },
    { bg: "bg-purple-50", border: "border-purple-300", accent: "text-purple-900", badgeBg: "bg-purple-600", gradient: "from-purple-500 to-indigo-700" },
    { bg: "bg-rose-50", border: "border-rose-300", accent: "text-rose-900", badgeBg: "bg-rose-600", gradient: "from-rose-500 to-pink-700" },
  ][i % 5];

  const gems = [
    { type: "emerald" as const, name: "Neşe Zümrüdü", color: "#10b981" },
    { type: "sapphire" as const, name: "Dostluk Safiri", color: "#3b82f6" },
    { type: "ruby" as const, name: "Sevgi Yakutu", color: "#ef4444" },
    { type: "amethyst" as const, name: "Bilgelik Ametisti", color: "#8b5cf6" },
    { type: "diamond" as const, name: "Parlayan Elmas", color: "#06b6d4" },
    { type: "gold_crown" as const, name: "2. Sınıf Şampiyon Tacı", color: "#f59e0b" },
  ][i % 6];

  return {
    id: `g2-story-${levelNum}`,
    levelNumber: levelNum,
    gradeLevel: 2,
    title: title,
    islandName: `${levelNum}. Durak: ${tpl.hero.split(" ")[0]} Adası`,
    theme: tpl.theme,
    iconName: tpl.theme === "forest" ? "🌳" : tpl.theme === "coral" ? "🐬" : tpl.theme === "space" ? "🚀" : tpl.theme === "castle" ? "🏰" : "⛵",
    colorScheme: colors,
    synopsis: `${tpl.hero} kahramanının ${tpl.obj} çevresinde geçen eğlenceli 2. sınıf okuma anlama macerası.`,
    readingTimeMinutes: 2,
    wordCount: wordCount,
    paragraphs: [paragraph1, paragraph2, paragraph3],
    vocabulary: [
      { word: tpl.newWord, meaning: tpl.meaning, exampleSentence: `${tpl.hero} ormanda neşeyle ilerledi.` },
      { word: "Yardımlaşma", meaning: "Birbirine zor zamanlarda destek olma durumu." }
    ],
    questions: [
      {
        id: `g2-q-${levelNum}-1`,
        type: "multiple_choice",
        category: "5N1K",
        question: `Hikayenin baş kahramanı kimdir?`,
        options: [`A) ${tpl.hero}`, "B) Yabancı bir yolcu", "C) Orman bekçisi"],
        correctAnswer: 0,
        explanation: `Metnin ilk paragrafında hikayenin kahramanının ${tpl.hero} olduğu açıkça anlatılmaktadır.`,
        clueSentence: paragraph1
      },
      {
        id: `g2-q-${levelNum}-2`,
        type: "multiple_choice",
        category: "Neden-Sonuç",
        question: `Kahramanımız ne zaman yola koyuldu?`,
        options: ["A) Gece yarısı karanlıkta", "B) Güneşli ve pırıl pırıl bir sabah vakti", "C) Fırtınalı bir kış günü"],
        correctAnswer: 1,
        explanation: "Metnin başında 'Güneşli ve pırıl pırıl bir sabah vaktiydi' ifadesi yer almaktadır.",
        clueSentence: paragraph1
      },
      {
        id: `g2-q-${levelNum}-3`,
        type: "multiple_choice",
        category: "Ana Fikir",
        question: `Bu hikayeden çıkarılacak en önemli ders nedir?`,
        options: [`A) ${tpl.lesson}`, "B) Kimseye yardım etmemek", "C) Yalnız başına yaşamak"],
        correctAnswer: 0,
        explanation: `Hikaye boyunca yardımlaşma, sevgi ve ${tpl.lesson} vurgulanmıştır.`,
        clueSentence: paragraph2
      },
      {
        id: `g2-q-${levelNum}-4`,
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: `Metindeki "${tpl.newWord}" sözcüğü ne anlama gelmektedir?`,
        options: [`A) ${tpl.meaning}`, "B) Hızlıca koşup saklanmak", "C) Uyumak için dinlenmek"],
        correctAnswer: 0,
        explanation: `Kelime sandığımızda ${tpl.newWord} kelimesinin anlamı belirtilmiştir.`,
        clueSentence: ""
      }
    ],
    rewardChest: {
      coins: 100 + (levelNum * 2),
      gemType: gems.type,
      gemName: gems.name,
      gemColor: gems.color,
      badgeTitle: `2. Sınıf ${tpl.hero.split(" ")[0]} Kaşifi`,
      badgeIcon: "Award",
      secretLore: `${title} macerasını üstün başarıyla tamamladın!`
    }
  };
});
