import React, { useState, useEffect } from "react";
import { Volume2, Sparkles, BookOpen, X, MessageCircle } from "lucide-react";
import { sounds } from "../utils/soundEffects";

interface VocabModalProps {
  word: string;
  defaultMeaning?: string;
  onClose: () => void;
}

export const VocabModal: React.FC<VocabModalProps> = ({
  word,
  defaultMeaning,
  onClose,
}) => {
  const [aiExplanation, setAiExplanation] = useState<{
    explanation: string;
    example: string;
    synonym?: string;
    cheer?: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Play audio pronunciation of the word in Turkish
  const handlePronounce = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "tr-TR";
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Fetch AI Kid-friendly explanation
  const handleFetchAIExplanation = async () => {
    setIsLoading(true);
    sounds.playClick();

    try {
      const response = await fetch("/api/explain-word", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word }),
      });

      if (!response.ok) throw new Error("Fetch error");
      const data = await response.json();
      setAiExplanation(data);
    } catch {
      setAiExplanation({
        explanation: defaultMeaning || "Bu kelime 3. sınıf okuma metninde önemli bir yere sahiptir.",
        example: `Öğrenciler "${word}" kelimesini cümle içinde dikkatle kullandılar.`,
        cheer: "Gak gak! Kelime hazinen her gün daha da büyüyor genç kaşif!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // If no default meaning is given, automatically fetch AI explanation
    if (!defaultMeaning) {
      handleFetchAIExplanation();
    }
  }, [word]);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-amber-50 border-4 border-amber-800 rounded-3xl p-6 max-w-md w-full shadow-2xl relative text-left animate-in zoom-in-95 duration-200">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-amber-200 hover:bg-amber-300 text-amber-900 flex items-center justify-center font-bold text-base border border-amber-400"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Mascot badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-2xl">
            🦜
          </div>
          <div>
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
              Kaptan Gaga'nın Sözlüğü
            </span>
            <h3 className="text-xl font-extrabold text-amber-950 font-['Fredoka',sans-serif]">
              {word}
            </h3>
          </div>
        </div>

        {/* Pronunciation button */}
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={handlePronounce}
            className="px-3.5 py-1.5 rounded-xl bg-amber-200 hover:bg-amber-300 text-amber-950 font-bold text-xs flex items-center gap-1.5 border border-amber-400 transition-colors shadow-sm"
          >
            <Volume2 className="w-4 h-4 text-amber-800" />
            <span>Nasıl Okunur? (Sesli Dinle)</span>
          </button>
        </div>

        {/* Meaning Box */}
        <div className="bg-white/90 p-4 rounded-2xl border-2 border-amber-200 shadow-inner mb-4 space-y-2.5">
          <div>
            <strong className="text-xs text-amber-900 font-bold uppercase block mb-1">
              📖 Kelimenin Anlamı:
            </strong>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-['Quicksand',sans-serif]">
              {aiExplanation ? aiExplanation.explanation : defaultMeaning || "Yükleniyor..."}
            </p>
          </div>

          {aiExplanation?.example && (
            <div className="pt-2 border-t border-amber-100">
              <strong className="text-xs text-emerald-800 font-bold block mb-0.5">
                💡 Cümle İçinde Kullanımı:
              </strong>
              <p className="text-xs sm:text-sm text-slate-700 italic">
                "{aiExplanation.example}"
              </p>
            </div>
          )}

          {aiExplanation?.cheer && (
            <div className="bg-emerald-50 p-2 rounded-xl text-[11px] text-emerald-900 font-semibold border border-emerald-200">
              🦜 {aiExplanation.cheer}
            </div>
          )}
        </div>

        {/* Explain more with AI button */}
        {!aiExplanation && (
          <button
            onClick={handleFetchAIExplanation}
            disabled={isLoading}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md border border-purple-400 flex items-center justify-center gap-1.5 transition-all"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>{isLoading ? "Papağan Gaga Düşünüyor..." : "Papağandan Daha Detaylı Örnek İste"}</span>
          </button>
        )}

        <button
          onClick={onClose}
          className="w-full mt-3 py-2.5 rounded-xl bg-amber-200 hover:bg-amber-300 text-amber-950 font-bold text-xs sm:text-sm border border-amber-400 transition-colors"
        >
          Anladım, Kapat
        </button>
      </div>
    </div>
  );
};
