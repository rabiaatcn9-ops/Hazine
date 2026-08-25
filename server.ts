import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Generate Custom 3rd Grade Reading Comprehension Story & Questions
app.post("/api/generate-story", async (req, res) => {
  try {
    const { topic, difficulty = "orta" } = req.body;
    const ai = getAIClient();

    if (!ai) {
      return res.status(500).json({
        error: "GEMINI_API_KEY yapılandırılmamış veya eksik.",
      });
    }

    const prompt = `
Sen 3. sınıf (8-9 yaş) Türkçe öğretmenisin. İlkokul 3. sınıf müfredatına ve yaş seviyesine uygun, heyecanlı ve eğitici bir hazine avı / macera hikayesi ve okuma anlama soruları oluştur.

Konu veya İlgi Alanı: ${topic || "Hazine Adası ve Kayıp Harita"}
Zorluk Seviyesi: ${difficulty} (kolay: 100-140 kelime, orta: 140-180 kelime, ileri: 180-230 kelime)

Hikaye Özellikleri:
1. 3. sınıf okuma hızına ve sözcük dağarcığına uygun olsun. Cümleler çok karmaşık veya çok uzun olmasın.
2. İlgi çekici, merak uyandırıcı, hazine avı veya dostluk/doğa/bilim temalı bir macera olsun.
3. Hikayede çocuğa yeni bir-iki güzel kelime öğretebilecek zenginlikte olsun (örn: pusula, parşömen, rota, kaşif).

Sorular:
Tam olarak 4 adet çoktan seçmeli soru ve 1 adet doğru/yanlış veya sıralama sorusu hazırla:
- Soru 1: 5N1K (Kim / Ne / Nerede) doğrudan metinden bulma sorusu.
- Soru 2: Neden-Sonuç veya Nasıl sorusu.
- Soru 3: Metnin ana fikri veya karakterin duygusu/özelliği sorusu.
- Soru 4: Metindeki bir kelimenin anlamı (Sözcük Dedektifi) veya çıkarım sorusu.
- Her çoktan seçmeli soru için 3 veya 4 şık (A, B, C veya A, B, C, D) ve doğru cevabın harfini belirt.
- Her soru için metindeki ipucu cümlesini (clueSentence) de ekle.

Lütfen cevabını SADECE aşağıdaki JSON formatında ver, markdown kod bloğu olmadan ya da standart JSON formatında:
{
  "title": "Hikaye Başlığı",
  "theme": "Orman / Deniz / Mağara / Tapınak / Kale",
  "synopsis": "Kısa 1 cümlelik özet",
  "readingTimeMinutes": 2,
  "wordCount": 150,
  "paragraphs": ["1. Paragraf metni...", "2. Paragraf metni...", "3. Paragraf metni..."],
  "vocabulary": [
    {"word": "pusula", "meaning": "Yön gösteren ibreli alet."},
    {"word": "parşömen", "meaning": "Eski zamanlarda yazı yazmak için kullanılan özel deri kağıt."}
  ],
  "questions": [
    {
      "id": "q1",
      "type": "multiple_choice",
      "question": "Soru metni...",
      "options": ["A) Şık 1", "B) Şık 2", "C) Şık 3"],
      "correctAnswer": 0,
      "explanation": "Çünkü metinde açıkça ... belirtilmektedir.",
      "clueSentence": "Metinde geçen ilgili cümle..."
    },
    {
      "id": "q2",
      "type": "multiple_choice",
      "question": "Soru metni...",
      "options": ["A) Şık 1", "B) Şık 2", "C) Şık 3"],
      "correctAnswer": 1,
      "explanation": "Açıklama...",
      "clueSentence": "Metinde geçen ilgili cümle..."
    },
    {
      "id": "q3",
      "type": "multiple_choice",
      "question": "Soru metni...",
      "options": ["A) Şık 1", "B) Şık 2", "C) Şık 3"],
      "correctAnswer": 2,
      "explanation": "Açıklama...",
      "clueSentence": "Metinde geçen ilgili cümle..."
    },
    {
      "id": "q4",
      "type": "multiple_choice",
      "question": "Soru metni...",
      "options": ["A) Şık 1", "B) Şık 2", "C) Şık 3"],
      "correctAnswer": 0,
      "explanation": "Açıklama...",
      "clueSentence": "Metinde geçen ilgili cümle..."
    }
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text || "{}";
    const storyData = JSON.parse(responseText);
    res.json(storyData);
  } catch (error: any) {
    console.error("Story generation error:", error);
    res.status(500).json({ error: error.message || "Hikaye oluşturulamadı." });
  }
});

// Explain a word / phrase for 3rd graders (Sözlük Papağanı)
app.post("/api/explain-word", async (req, res) => {
  try {
    const { word, contextSentence } = req.body;
    const ai = getAIClient();

    if (!ai) {
      return res.status(500).json({ error: "AI servisi aktif değil." });
    }

    const prompt = `
Sen sevimli bir korsan papağanısın (Kaptan Gaga). 3. sınıf (8-9 yaş) öğrencisine "${word}" kelimesinin ne anlama geldiğini çok tatlı, eğlenceli ve anlaşılır şekilde açıkla.
Cümledeki bağlamı: "${contextSentence || ""}".
1-2 cümlelik basit bir açıklama ve günlük hayattan eğlenceli bir örnek ver. Çocuklara hitap eden samimi bir dil kullan (örn: "Gak gak! Harika bir soru genç kaşif...").

JSON formatında cevap ver:
{
  "explanation": "Kelimenin 3. sınıf seviyesinde açıklaması",
  "example": "Örnek cümle",
  "synonym": "Varsa eş anlamlısı",
  "cheer": "Kısa cesaretlendirici söz"
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const data = JSON.parse(response.text || "{}");
    res.json(data);
  } catch (error: any) {
    console.error("Word explanation error:", error);
    res.status(500).json({ error: error.message || "Kelime açıklanamadı." });
  }
});

// Hint Mascot for comprehension questions
app.post("/api/mascot-hint", async (req, res) => {
  try {
    const { question, options, textExcerpt } = req.body;
    const ai = getAIClient();

    if (!ai) {
      return res.status(500).json({ error: "AI servisi aktif değil." });
    }

    const prompt = `
Sen 3. sınıf okuma rehberisin (Kaşif Baykuş / Kaptan Gaga). Öğrenci şu soruyu çözmekte zorlanıyor:
Soru: "${question}"
Seçenekler: ${JSON.stringify(options)}
İlgili Metin Parçası: "${textExcerpt}"

Öğrenciye cevabı doğrudan söylemeden, metnin neresine bakması gerektiğine dair eğlenceli, samimi ve yönlendirici 1-2 cümlelik bir ipucu ver. 3. sınıf çocuğunun anlayacağı teşvik edici bir ton kullan.

JSON formatında cevap ver:
{
  "hint": "İpucu mesajı",
  "focusPhrase": "Metinde dikkat etmesi gereken anahtar kelime veya ifade"
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const data = JSON.parse(response.text || "{}");
    res.json(data);
  } catch (error: any) {
    console.error("Hint generation error:", error);
    res.status(500).json({ error: error.message || "İpucu üretilemedi." });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Hazine Avı Okuma Sunucusu çalışıyor: http://localhost:${PORT}`);
  });
}

startServer();
