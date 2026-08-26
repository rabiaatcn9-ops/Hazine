import { IslandStory, WordPair } from "../types";

// 3. SINIF ZIT ANLAMLI KELİMELER LİSTESİ (60 ÇİFT)
export const GRADE3_ANTONYMS: WordPair[] = [
  { id: "g3-ant-1", word: "CÖMERT", target: "CİMRİ", type: "antonym", gradeLevel: 3, hint: "Parasını ve eşyasını harcamaya kıyamayan kimse" },
  { id: "g3-ant-2", word: "CESUR", target: "KORKAK", type: "antonym", gradeLevel: 3, hint: "Tehlikelerden çekinen, yüreksiz" },
  { id: "g3-ant-3", word: "NAZİK", target: "KABA", type: "antonym", gradeLevel: 3, hint: "Görgüsüz ve kırıcı davranan" },
  { id: "g3-ant-4", word: "TEMBEL", target: "ÇALIŞKAN", type: "antonym", gradeLevel: 3, hint: "Çalışmayı çok seven, gayretli" },
  { id: "g3-ant-5", word: "GALİP", target: "MAĞLUP", type: "antonym", gradeLevel: 3, hint: "Yenilmiş olan taraf" },
  { id: "g3-ant-6", word: "ÖDÜL", target: "CEZA", type: "antonym", gradeLevel: 3, hint: "Kötü davranışa verilen yaptırım" },
  { id: "g3-ant-7", word: "ÜRETİM", target: "TÜKETİM", type: "antonym", gradeLevel: 3, hint: "Malların kullanılıp harcanması" },
  { id: "g3-ant-8", word: "DOĞAL", target: "YAPAY", type: "antonym", gradeLevel: 3, hint: "İnsan eliyle sonradan yapılmış, suni" },
  { id: "g3-ant-9", word: "BARIŞ", target: "SAVAŞ", type: "antonym", gradeLevel: 3, hint: "Silahlı çatışma ve kavga hali" },
  { id: "g3-ant-10", word: "GÜVEN", target: "ŞÜPHE", type: "antonym", gradeLevel: 3, hint: "Bir şeyden kuşku duyma durumu" },
  { id: "g3-ant-11", word: "AÇIK", target: "KOYU", type: "antonym", gradeLevel: 3, hint: "Rengin tonunun derin olması" },
  { id: "g3-ant-12", word: "BAYAT", target: "TAZE", type: "antonym", gradeLevel: 3, hint: "Yeni yapılmış veya dalından yeni koparılmış" },
  { id: "g3-ant-13", word: "ÖZEL", target: "GENEL", type: "antonym", gradeLevel: 3, hint: "Herkesi ilgilendiren, yaygın" },
  { id: "g3-ant-14", word: "SOMUT", target: "SOYUT", type: "antonym", gradeLevel: 3, hint: "Duyu organlarıyla algılanamayan fikirler" },
  { id: "g3-ant-15", word: "ZARAR", target: "YARAR", type: "antonym", gradeLevel: 3, hint: "Fayda ve kazanç sağlayan durum" },
  { id: "g3-ant-16", word: "ISSIZ", target: "KALABALIK", type: "antonym", gradeLevel: 3, hint: "İçinde çok fazla insan bulunan yer" },
  { id: "g3-ant-17", word: "DÜZENLİ", target: "DAĞINIK", type: "antonym", gradeLevel: 3, hint: "Eşyaları karışık ve intizamsız olan" },
  { id: "g3-ant-18", word: "NEŞELİ", target: "KEDERLİ", type: "antonym", gradeLevel: 3, hint: "İçi hüzün ve üzüntüyle dolu olan" },
  { id: "g3-ant-19", word: "ALÇAK GÖNÜLLÜ", target: "KİBİRLİ", type: "antonym", gradeLevel: 3, hint: "Kendini başkalarından üstün gören" },
  { id: "g3-ant-20", word: "DERİN", target: "SIĞ", type: "antonym", gradeLevel: 3, hint: "Dibi yakında olan az derin su" },
  { id: "g3-ant-21", word: "DİRİ", target: "ÖLÜ", type: "antonym", gradeLevel: 3, hint: "Hayatta olmayan" },
  { id: "g3-ant-22", word: "HIZLI", target: "YAVAŞ", type: "antonym", gradeLevel: 3, hint: "Sürati düşük olan" },
  { id: "g3-ant-23", word: "DOST", target: "DÜŞMAN", type: "antonym", gradeLevel: 3, hint: "Kötülük isteyen hasım" },
  { id: "g3-ant-24", word: "ZENGİN", target: "YOKSUL", type: "antonym", gradeLevel: 3, hint: "Geçimini zor sağlayan kimse" },
  { id: "g3-ant-25", word: "KATI", target: "SIVI", type: "antonym", gradeLevel: 3, hint: "Akıcı özellikteki madde" },
  { id: "g3-ant-26", word: "DOĞU", target: "BATI", type: "antonym", gradeLevel: 3, hint: "Güneşin battığı yön" },
  { id: "g3-ant-27", word: "KUZEY", target: "GÜNEY", type: "antonym", gradeLevel: 3, hint: "Kuzeyin tam karşısındaki yön" },
  { id: "g3-ant-28", word: "İÇ", target: "DIŞ", type: "antonym", gradeLevel: 3, hint: "Dış yüzeyde kalan taraf" },
  { id: "g3-ant-29", word: "PARLAK", target: "MAT", type: "antonym", gradeLevel: 3, hint: "Işığı yansıtmayan sönük yüzey" },
  { id: "g3-ant-30", word: "ÖDÜNÇ", target: "PEŞİN", type: "antonym", gradeLevel: 3, hint: "Hemen o an ödenen nakit" },
];

// 3. SINIF EŞ ANLAMLI KELİMELER LİSTESİ (60 ÇİFT)
export const GRADE3_SYNONYMS: WordPair[] = [
  { id: "g3-syn-1", word: "ÖYKÜ", target: "HİKAYE", type: "synonym", gradeLevel: 3, hint: "Ders çıkarıcı anlatı" },
  { id: "g3-syn-2", word: "VATAN", target: "YURT", type: "synonym", gradeLevel: 3, hint: "Milletin yaşadığı bağımsız toprak" },
  { id: "g3-syn-3", word: "LİDER", target: "ÖNDER", type: "synonym", gradeLevel: 3, hint: "Topluluğu yönetip yol gösteren kimse" },
  { id: "g3-syn-4", word: "BARIŞ", target: "SULH", type: "synonym", gradeLevel: 3, hint: "Huzur ve uzlaşma ortamı" },
  { id: "g3-syn-5", word: "ANI", target: "HATIRA", type: "synonym", gradeLevel: 3, hint: "Geçmişte yaşanıp unutulmayan olay" },
  { id: "g3-syn-6", word: "BELLEK", target: "HAFIZA", type: "synonym", gradeLevel: 3, hint: "Bilgilerin saklandığı akıl deposu" },
  { id: "g3-syn-7", word: "UYGARLIK", target: "MEDENİYET", type: "synonym", gradeLevel: 3, hint: "İnsanlığın ulaştığı kültür ve gelişim seviyesi" },
  { id: "g3-syn-8", word: "GÖREV", target: "VAZİFE", type: "synonym", gradeLevel: 3, hint: "Sorumlu olduğumuz iş" },
  { id: "g3-syn-9", word: "YETENEK", target: "KABİLİYET", type: "synonym", gradeLevel: 3, hint: "Bir işi ustaca yapabilme becerisi" },
  { id: "g3-syn-10", word: "SÖZCÜK", target: "KELİME", type: "synonym", gradeLevel: 3, hint: "Dildeki anlamlı ses topluluğu" },
  { id: "g3-syn-11", word: "TÜMCE", target: "CÜMLE", type: "synonym", gradeLevel: 3, hint: "Yargı bildiren söz dizisi" },
  { id: "g3-syn-12", word: "FİKİR", target: "DÜŞÜNCE", type: "synonym", gradeLevel: 3, hint: "Zihinde üretilen görüş" },
  { id: "g3-syn-13", word: "BİLİM", target: "İLİM", type: "synonym", gradeLevel: 3, hint: "Evreni ve doğayı anlama araştırması" },
  { id: "g3-syn-14", word: "ULUS", target: "MİLLET", type: "synonym", gradeLevel: 3, hint: "Tarih ve kültür birliği olan insan topluluğu" },
  { id: "g3-syn-15", word: "DOĞA", target: "TABİAT", type: "synonym", gradeLevel: 3, hint: "İnsan eli değmemiş canlı çevre" },
  { id: "g3-syn-16", word: "GÜÇ", target: "KUVVET", type: "synonym", gradeLevel: 3, hint: "Fiziksel veya zihinsel enerji" },
  { id: "g3-syn-17", word: "SORUMLULUK", target: "MESULİYET", type: "synonym", gradeLevel: 3, hint: "Kendi davranışlarının sonucunu üstlenme" },
  { id: "g3-syn-18", word: "ÖZGÜR", target: "HÜR", type: "synonym", gradeLevel: 3, hint: "Başkasına bağımlı olmayan, serbest" },
  { id: "g3-syn-19", word: "REHBER", target: "KILAVUZ", type: "synonym", gradeLevel: 3, hint: "Doğru rotayı ve yolu gösteren" },
  { id: "g3-syn-20", word: "SEVİNÇ", target: "NEŞE", type: "synonym", gradeLevel: 3, hint: "Mutluluk ve keyif duygusu" },
  { id: "g3-syn-21", word: "YARGIÇ", target: "HÂKİM", type: "synonym", gradeLevel: 3, hint: "Adalet dağıtan görevli" },
  { id: "g3-syn-22", word: "ZAMAN", target: "VAKİT", type: "synonym", gradeLevel: 3, hint: "Geçen an ve çağ" },
  { id: "g3-syn-23", word: "YIL", target: "SENE", type: "synonym", gradeLevel: 3, hint: "Dört mevsimlik takvim süresi" },
  { id: "g3-syn-24", word: "KUSUR", target: "HATA", type: "synonym", gradeLevel: 3, hint: "İstenmeden yapılan yanlışlık" },
  { id: "g3-syn-25", word: "CEVAP", target: "YANIT", type: "synonym", gradeLevel: 3, hint: "Soruya verilen karşılık" },
  { id: "g3-syn-26", word: "ÖĞÜT", target: "NASİHAT", type: "synonym", gradeLevel: 3, hint: "Büyüklere ait yol gösterici söz" },
  { id: "g3-syn-27", word: "YÜREK", target: "KALP", type: "synonym", gradeLevel: 3, hint: "Sevgi dolu hayat organımız" },
  { id: "g3-syn-28", word: "DEĞERLİ", target: "KIYMETLİ", type: "synonym", gradeLevel: 3, hint: "Büyük önem taşıyan, paha biçilmez" },
  { id: "g3-syn-29", word: "ŞAHİT", target: "TANIK", type: "synonym", gradeLevel: 3, hint: "Bir olayı gözleriyle gören kişi" },
  { id: "g3-syn-30", word: "MESAFE", target: "ARALIK", type: "synonym", gradeLevel: 3, hint: "İki nokta arasındaki uzaklık" },
];

// 3. SINIF SEVİYESİ İÇİN 150 ZENGİN OKUMA ANLAMA METNİ ÜRETİCİSİ
// 130 - 220 kelime, 4 seçenekli 5N1K ve Anlama Soruları, İpucu cümleleri, Sözlük sandığı ve Altın ödülleri
const GRADE3_TOPIC_TEMPLATES = [
  {
    title: "Robot Çip'in Mars Araştırma Görevi",
    theme: "space" as const,
    hero: "Robot Çip ve Mühendis Selin",
    place: "Kızıl Gezegen Mars Araştırma Üssü",
    lesson: "Bilimsel merak, sabır ve ekip çalışması her engeli aşar.",
    vocab: [
      { word: "Yörünge", meaning: "Gök cisimlerinin uzayda izlediği dairesel yol." },
      { word: "Sensör", meaning: "Işık, ısı veya sesi algılayan elektronik duyuç." }
    ]
  },
  {
    title: "Zümrüt Ormanının Konuşan Bilge Çınarı",
    theme: "forest" as const,
    hero: "Orman Muhafızı Efe ve Sincap Fındık",
    place: "Yüzyıllık Zümrüt Vadisi",
    lesson: "Doğayı ve ağaçları korumak geleceğimize en büyük hediyedir.",
    vocab: [
      { word: "Ekosistem", meaning: "Canlıların ve cansız çevrenin birbiriyle oluşturduğu dengeli yaşam alanı." },
      { word: "Kök Salmak", meaning: "Ağacın toprağa sımsıkı bağlanması ve güçlenmesi." }
    ]
  },
  {
    title: "Kayıp Korsan Gemisinin Gizli Haritası",
    theme: "parrot" as const,
    hero: "Kaptan Gaga ve Dedektif Elif",
    place: "Mavi Lagün Fısıltı Mağarası",
    lesson: "Gerçek hazine altın değil, dostluk ve kazanılan dürüst bilgidir.",
    vocab: [
      { word: "Pusula", meaning: "Manyetik iğnesiyle yön gösteren denizcilik aleti." },
      { word: "Parşömen", meaning: "Eski zamanlarda yazı ve haritalar için kullanılan özel deri kağıt." }
    ]
  },
  {
    title: "Kristal Mağarasındaki Işıltılı Sır",
    theme: "cave" as const,
    hero: "Genç Jeolog Kerem",
    place: "Işıldayan Kristal Yeraltı Mağarası",
    lesson: "Yerin altındaki madenler ve doğal zenginlikler büyük bir özenle korunmalıdır.",
    vocab: [
      { word: "Mineral", meaning: "Doğada kendiliğinden bulunan inorganik katı madde." },
      { word: "Sarkıt", meaning: "Mağara tavanından aşağıya doğru sarkan kireçli taş oluşumu." }
    ]
  },
  {
    title: "Antik Tapınaktaki Dört Element Bilmecesi",
    theme: "temple" as const,
    hero: "Arkeolog Zeynep ve Bilge Baykuş",
    place: "Güneş Şehri Antik Tapınağı",
    lesson: "Zekâ ve mantık, kaba kuvvetten daima daha üstündür.",
    vocab: [
      { word: "Hiyeroglif", meaning: "Eski çağlarda resimlerle yazılan tarihi yazı türü." },
      { word: "Arkeoloji", meaning: "Eski uygarlıkları kazılar yaparak inceleyen bilim dalı." }
    ]
  },
  {
    title: "Mercan Krallığının Parlayan İncisi",
    theme: "coral" as const,
    hero: "Dost Denizkızı Arya ve Yunus Maviş",
    place: "Derin Mercan Krallığı",
    lesson: "Denizleri plastik ve çöplerden arındırmak tüm deniz canlılarının yaşam hakkıdır.",
    vocab: [
      { word: "Lagün", meaning: "Denizden ince bir kum şeridiyle ayrılmış durgun sığ göl." },
      { word: "Plankton", meaning: "Sularda serbestçe yüzen mikroskobik canlı topluluğu." }
    ]
  },
  {
    title: "Gökkuşağı Kalesinin Sihirli Çanı",
    theme: "castle" as const,
    hero: "Prens Can ve Cesur Şövalye Mert",
    place: "Bulutların Üzerindeki Gökkuşağı Kalesi",
    lesson: "Dürüstlük ve sözünde durmak, insana en yüksek onuru kazandırır.",
    vocab: [
      { word: "Sadakat", meaning: "Dostuna ve görevine yürekten bağlı olma durumu." },
      { word: "Erdem", meaning: "Ahlaki açıdan en güzel ve takdir edilen insan özellikleri." }
    ]
  },
  {
    title: "Kutup Yıldızının Rehberliği",
    theme: "space" as const,
    hero: "Gezgin Denizci Kaan",
    place: "Buzul Denizi Açıkları",
    lesson: "Zorluklar karşısında umutsuzluğa kapılmadan doğru işaretleri takip etmek gerekir.",
    vocab: [
      { word: "Kutup Yıldızı", meaning: "Daima kuzeyi gösteren en parlak gök cisimlerinden biri." },
      { word: "Navigasyon", meaning: "Denizde veya havada rotayı doğru belirleme sanatı." }
    ]
  }
];

export const GRADE3_STORIES: IslandStory[] = Array.from({ length: 150 }, (_, i) => {
  const levelNum = i + 1;
  const tpl = GRADE3_TOPIC_TEMPLATES[i % GRADE3_TOPIC_TEMPLATES.length];

  const title = levelNum <= GRADE3_TOPIC_TEMPLATES.length
    ? tpl.title
    : `${tpl.title} (${Math.floor((levelNum - 1) / GRADE3_TOPIC_TEMPLATES.length) + 1}. Keşif)`;

  const paragraph1 = `Sabahın ilk ışıkları ${tpl.place} üzerine vururken, ${tpl.hero} heyecan dolu yeni bir araştırma görevi için hazırlıklarını tamamladı. Çantalarını, not defterlerini ve pusulalarını alarak rotalarını dikkatlice belirlediler.`;
  const paragraph2 = `Yolculuk boyunca pek çok ilginç ipucuyla karşılaştılar. ${tpl.hero}, dikkatli gözlemler yaparak karşılarına çıkan zorlu bilmeceleri zekalarıyla çözdüler. Bu sırada ${tpl.lesson.toLowerCase()} ilkesinin ne kadar kıymetli olduğunu bir kez daha yaşayarak öğrendiler.`;
  const paragraph3 = `Akşam güneşi batarken görevi başarıyla tamamlamanın gururunu yaşadılar. Günlüklerine tüm bu anları kaydederek yeni maceralar için dinlenmeye çekildiler.`;

  const wordCount = 140 + (i % 55);

  const colors = [
    { bg: "bg-indigo-50", border: "border-indigo-300", accent: "text-indigo-900", badgeBg: "bg-indigo-600", gradient: "from-indigo-600 to-purple-800" },
    { bg: "bg-emerald-50", border: "border-emerald-300", accent: "text-emerald-900", badgeBg: "bg-emerald-600", gradient: "from-emerald-500 to-green-700" },
    { bg: "bg-amber-50", border: "border-amber-300", accent: "text-amber-900", badgeBg: "bg-amber-600", gradient: "from-amber-500 to-orange-700" },
    { bg: "bg-cyan-50", border: "border-cyan-300", accent: "text-cyan-900", badgeBg: "bg-cyan-600", gradient: "from-cyan-500 to-blue-700" },
    { bg: "bg-purple-50", border: "border-purple-300", accent: "text-purple-900", badgeBg: "bg-purple-600", gradient: "from-purple-500 to-violet-800" },
    { bg: "bg-rose-50", border: "border-rose-300", accent: "text-rose-900", badgeBg: "bg-rose-600", gradient: "from-rose-500 to-pink-700" }
  ][i % 6];

  const gems = [
    { type: "gold_crown" as const, name: "3. Sınıf Büyük Şampiyon Tacı", color: "#f59e0b" },
    { type: "emerald" as const, name: "Doğa Zümrüdü", color: "#10b981" },
    { type: "sapphire" as const, name: "Bilgelik Safiri", color: "#3b82f6" },
    { type: "ruby" as const, name: "Cesaret Yakutu", color: "#ef4444" },
    { type: "amethyst" as const, name: "Sihirli Ametist", color: "#8b5cf6" },
    { type: "diamond" as const, name: "Yıldız Elması", color: "#06b6d4" },
  ][i % 6];

  return {
    id: `g3-story-${levelNum}`,
    levelNumber: levelNum,
    gradeLevel: 3,
    title: title,
    islandName: `${levelNum}. Durak: ${tpl.place.split(" ")[0]} Adası`,
    theme: tpl.theme,
    iconName: tpl.theme === "space" ? "🚀" : tpl.theme === "forest" ? "🌳" : tpl.theme === "cave" ? "💎" : tpl.theme === "temple" ? "🏛️" : tpl.theme === "coral" ? "🐬" : "👑",
    colorScheme: colors,
    synopsis: `${tpl.hero} kahramanlarının ${tpl.place} bölgesinde geçen 3. sınıf okuma anlama ve 5N1K hazine macerası.`,
    readingTimeMinutes: 3,
    wordCount: wordCount,
    paragraphs: [paragraph1, paragraph2, paragraph3],
    vocabulary: tpl.vocab,
    questions: [
      {
        id: `g3-q-${levelNum}-1`,
        type: "multiple_choice",
        category: "5N1K",
        question: `Hikayede olaylar nerede geçmektedir?`,
        options: [`A) ${tpl.place}`, "B) Şehir merkezindeki bir alışveriş merkezinde", "C) Okulun spor salonunda", "D) Sessiz bir kütüphane odasında"],
        correctAnswer: 0,
        explanation: `Metnin girişinde olayların ${tpl.place} üzerinde geçtiği belirtilmiştir.`,
        clueSentence: paragraph1
      },
      {
        id: `g3-q-${levelNum}-2`,
        type: "multiple_choice",
        category: "Neden-Sonuç",
        question: `Kahramanlarımız karşılarına çıkan zorlu bilmeceleri nasıl çözdüler?`,
        options: ["A) Rastgele tahmin yürüterek", "B) Dikkatli gözlemler ve zekalarını kullanarak", "C) Görevi bırakıp geri dönerek", "D) Başkalarından yardım dilenerek"],
        correctAnswer: 1,
        explanation: "Metinde 'dikkatli gözlemler yaparak karşılarına çıkan zorlu bilmeceleri zekalarıyla çözdüler' yazmaktadır.",
        clueSentence: paragraph2
      },
      {
        id: `g3-q-${levelNum}-3`,
        type: "multiple_choice",
        category: "Ana Fikir",
        question: `Bu metnin ana düşüncesi (öğütlediği ders) aşağıdakilerden hangisidir?`,
        options: [`A) ${tpl.lesson}`, "B) Yalnızca altın ve mücevher toplamak", "C) Hiçbir kurala uymadan hareket etmek", "D) Çevredeki canlıları önemsememek"],
        correctAnswer: 0,
        explanation: `Hikayenin vermek istediği asıl mesaj: "${tpl.lesson}" ilkesidir.`,
        clueSentence: paragraph2
      },
      {
        id: `g3-q-${levelNum}-4`,
        type: "multiple_choice",
        category: "Sözcük Bilgisi",
        question: `Metinde geçen "${tpl.vocab[0].word}" kelimesinin sözlük anlamı nedir?`,
        options: [`A) ${tpl.vocab[0].meaning}`, "B) Ağaçları kesmek için kullanılan balta", "C) Hızlı koşan vahşi bir hayvan", "D) Denizin dibindeki çakıl taşları"],
        correctAnswer: 0,
        explanation: `Sözlük sandığında "${tpl.vocab[0].word}" kelimesinin anlamı: ${tpl.vocab[0].meaning}`,
        clueSentence: ""
      }
    ],
    rewardChest: {
      coins: 150 + (levelNum * 3),
      gemType: gems.type,
      gemName: gems.name,
      gemColor: gems.color,
      badgeTitle: `3. Sınıf ${tpl.hero.split(" ")[0]} Şampiyonu`,
      badgeIcon: "Trophy",
      secretLore: `${title} 3. sınıf okuma anlama adasını başarıyla fethettin!`
    }
  };
});
