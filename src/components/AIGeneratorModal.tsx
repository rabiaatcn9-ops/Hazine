import React, { useState } from "react";
import { Sparkles, X, Wand2, Compass, Check, AlertCircle, Loader2 } from "lucide-react";
import { IslandStory } from "../types";
import { sounds } from "../utils/soundEffects";

interface AIGeneratorModalProps {
  onClose: () => void;
  onStoryGenerated: (story: IslandStory) => void;
}

const QUICK_TOPICS = [
  { icon: "🚀", title: "Uzayda Kaybolan Robot", desc: "Yıldızlar arasındaki hazineyi arayan küçük robot Çip" },
  { icon: "🦕", title: "Yavru Dinozor ve Gizli Mağara", desc: "Milyonlarca yıl önceki gizemli bir harita" },
  { icon: "⚽", title: "Ormanda Hayvanlar Futbol Turnuvası", desc: "Dostluk ve takım çalışmasının kazandırdığı kupa" },
  { icon: "🐱", title: "Dedektif Kedi Boncuk", desc: "Kayıp yün yumağının ve bahçenin gizemi" },
  { icon: "🚲", title: "Sihirli Uçan Bisiklet", desc: "Bulutların üzerindeki kayıp şehre yolculuk" },
  { icon: "🐬", title: "Batık Şehir Atlantis ve Yunuslar", desc: "Okyanusun dibindeki parlayan kristal saray" },
];

export const AIGeneratorModal: React.FC<AIGeneratorModalProps> = ({
  onClose,
  onStoryGenerated,
}) => {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState<"kolay" | "orta" | "ileri">("orta");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleGenerate = async (selectedTopic?: string) => {
    const finalTopic = selectedTopic || topic;
    if (!finalTopic.trim()) {
      setErrorMsg("Lütfen bir konu yaz veya aşağıdaki önerilerden birine tıkla!");
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);
    sounds.playClick();

    try {
      const response = await fetch("/api/generate-story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: finalTopic,
          difficulty,
        }),
      });

      if (!response.ok) {
        throw new Error("Yapay zeka hikayesi üretilirken bir sorun oluştu.");
      }

      const data = await response.json();

      // Format as IslandStory
      const newStory: IslandStory = {
        id: `custom-${Date.now()}`,
        levelNumber: 99,
        title: data.title || finalTopic,
        islandName: `Sihirli Ada: ${finalTopic.slice(0, 18)}...`,
        theme: "custom",
        iconName: "Sparkles",
        colorScheme: {
          bg: "bg-purple-50",
          border: "border-purple-300",
          accent: "text-purple-800",
          badgeBg: "bg-purple-600",
          gradient: "from-purple-500 to-indigo-700",
        },
        synopsis: data.synopsis || "Yapay zeka tarafından senin için özel olarak hazırlanan 3. sınıf okuma macerası.",
        readingTimeMinutes: data.readingTimeMinutes || 2,
        wordCount: data.wordCount || 160,
        paragraphs: data.paragraphs || [
          "Güneşli bir günde yeni bir macera başladı...",
        ],
        vocabulary: data.vocabulary || [
          { word: "Macera", meaning: "Baştan geçen heyecanlı ve ilginç olaylar bütünü." },
        ],
        questions: (data.questions || []).map((q: any, i: number) => ({
          id: `custom-q-${i}`,
          type: "multiple_choice",
          category: i === 0 ? "5N1K" : i === 1 ? "Neden-Sonuç" : i === 2 ? "Ana Fikir" : "Sözcük Bilgisi",
          question: q.question,
          options: q.options || ["A) Doğru", "B) Yanlış"],
          correctAnswer: typeof q.correctAnswer === "number" ? q.correctAnswer : 0,
          explanation: q.explanation || "Metne göre doğru cevap budur.",
          clueSentence: q.clueSentence || "",
        })),
        rewardChest: {
          coins: 150,
          gemType: "diamond",
          gemName: "Sihirli Yıldız Kristali",
          gemColor: "#a855f7",
          badgeTitle: "Yaratıcı Kaşif",
          badgeIcon: "Sparkles",
          secretLore: "Kendi hayalindeki konudan bir hazine adası inşa ettin!",
        },
        isCustom: true,
      };

      sounds.playTreasureFanfare();
      onStoryGenerated(newStory);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(
        err.message || "Hikaye üretilemedi. Lütfen bağlantını kontrol edip tekrar dene."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-gradient-to-b from-purple-50 to-indigo-50 border-4 border-purple-800 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl relative text-left my-8 animate-in zoom-in-95 duration-200">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-purple-200 hover:bg-purple-300 text-purple-950 flex items-center justify-center font-bold text-base border border-purple-400"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md">
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-purple-700 uppercase tracking-widest block">
              Yapay Zeka Sihirli Atölyesi
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-purple-950 font-['Fredoka',sans-serif]">
              Kendi Hazine Adanı Yarat!
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-purple-900/80 mb-5 leading-relaxed">
          Hangi konuda macera okumak istersin? İster uzaydaki robotlar, ister sevimli hayvanlar olsun; 
          Gemini yapay zekası sana özel 3. sınıf okuma metni ve 5N1K soruları hazırlasın!
        </p>

        {/* Topic Input */}
        <div className="space-y-2 mb-4">
          <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider">
            ✏️ Maceranın Konusu veya Kahramanı:
          </label>
          <div className="relative">
            <input
              type="text"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
                setErrorMsg(null);
              }}
              placeholder="Örn: Ormandaki yavru ayı ve kayıp bal peteği..."
              className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-purple-300 text-slate-800 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-300 shadow-inner font-['Quicksand',sans-serif]"
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Quick Topic Chips */}
        <div className="mb-5">
          <span className="text-xs font-bold text-purple-900 block mb-2">
            💡 Veya hazır eğlenceli konulardan birini seç:
          </span>
          <div className="grid grid-cols-2 gap-2">
            {QUICK_TOPICS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setTopic(item.title);
                  handleGenerate(item.title);
                }}
                disabled={isLoading}
                className="p-2.5 rounded-xl bg-white hover:bg-purple-100/80 text-left border border-purple-200 shadow-sm transition-all text-xs flex items-center gap-2 group"
              >
                <span className="text-lg shrink-0 group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="font-bold text-purple-950 truncate">{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Selector */}
        <div className="bg-white/80 p-3 rounded-2xl border border-purple-200 mb-5 flex items-center justify-between gap-2">
          <span className="text-xs font-bold text-purple-950">Metin Uzunluğu:</span>
          <div className="flex items-center gap-1">
            {(["kolay", "orta", "ileri"] as const).map((diff) => (
              <button
                key={diff}
                onClick={() => setDifficulty(diff)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  difficulty === diff
                    ? "bg-purple-700 text-white shadow-sm"
                    : "bg-purple-100 text-purple-900 hover:bg-purple-200"
                }`}
              >
                {diff === "kolay" ? "Kısa (120k)" : diff === "orta" ? "Normal (160k)" : "Uzun (200k)"}
              </button>
            ))}
          </div>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-3 rounded-2xl bg-red-50 border border-red-300 text-red-900 text-xs flex items-center gap-2 mb-4">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Generate Button */}
        <button
          id="btn-generate-ai-story"
          onClick={() => handleGenerate()}
          disabled={isLoading}
          className={`w-full py-4 rounded-2xl font-extrabold text-sm sm:text-base border-2 shadow-xl flex items-center justify-center gap-2 transition-all font-['Fredoka',sans-serif] ${
            isLoading
              ? "bg-purple-400 text-white border-purple-500 cursor-wait"
              : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-purple-400 cursor-pointer hover:scale-102 active:scale-98"
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Yapay Zeka Metni ve Soruları Hazırlıyor...</span>
            </>
          ) : (
            <>
              <Wand2 className="w-5 h-5 text-yellow-300" />
              <span>Sihirli Hikaye ve Soruları Oluştur!</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
