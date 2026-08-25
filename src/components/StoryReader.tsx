import React, { useState, useEffect, useRef } from "react";
import { 
  Volume2, VolumeX, Play, Pause, RotateCcw, Sparkles, BookOpen, 
  HelpCircle, CheckCircle2, ArrowRight, Bookmark, Search, Sliders, Type, ArrowLeft
} from "lucide-react";
import { IslandStory, VocabularyWord } from "../types";
import { sounds } from "../utils/soundEffects";

interface StoryReaderProps {
  story: IslandStory;
  onGoToQuestions: () => void;
  onBackToMap: () => void;
  onSelectWord: (word: string, meaning?: string) => void;
}

export const StoryReader: React.FC<StoryReaderProps> = ({
  story,
  onGoToQuestions,
  onBackToMap,
  onSelectWord,
}) => {
  // Reading accessibility settings
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("lg");
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [spotlightIndex, setSpotlightIndex] = useState<number | null>(null);

  // Audio Speech Synthesis state
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState<number>(1.0);
  const [activeSpeechParagraph, setActiveSpeechParagraph] = useState<number | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Reading stopwatch
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      synthRef.current = window.speechSynthesis;
    }
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, [story.id]);

  // Handle Speech Synthesis
  const handleToggleSpeech = () => {
    if (!synthRef.current) return;

    if (isSpeaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
      setActiveSpeechParagraph(null);
      return;
    }

    synthRef.current.cancel();
    const fullText = story.paragraphs.join(" ... ");
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = "tr-TR";
    utterance.rate = speechSpeed;

    // Pick Turkish voice if available
    const voices = synthRef.current.getVoices();
    const trVoice = voices.find((v) => v.lang.startsWith("tr"));
    if (trVoice) {
      utterance.voice = trVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setActiveSpeechParagraph(null);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setActiveSpeechParagraph(null);
    };

    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  };

  const handleSpeedChange = () => {
    const nextSpeed = speechSpeed === 0.8 ? 1.0 : speechSpeed === 1.0 ? 1.2 : 0.8;
    setSpeechSpeed(nextSpeed);
    if (isSpeaking && synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  // Check if a word in text matches vocabulary glossary
  const renderParagraphWithVocab = (paragraphText: string, pIndex: number) => {
    let result: React.ReactNode[] = [];
    const words = paragraphText.split(" ");

    words.forEach((wordWithPunc, wIndex) => {
      const cleanWord = wordWithPunc.replace(/[^a-zA-ZçÇğĞıİöÖşŞüÜ]/g, "");
      const vocabMatch = story.vocabulary.find(
        (v) => v.word.toLowerCase() === cleanWord.toLowerCase()
      );

      if (vocabMatch) {
        result.push(
          <span
            key={`w-${pIndex}-${wIndex}`}
            onClick={(e) => {
              e.stopPropagation();
              sounds.playClick();
              onSelectWord(vocabMatch.word, vocabMatch.meaning);
            }}
            className="cursor-pointer font-bold text-amber-900 bg-amber-200/80 px-1 py-0.5 rounded-md underline decoration-amber-500 decoration-wavy hover:bg-amber-300 transition-colors inline-block"
            title={`Sözlük: ${vocabMatch.word} (Tıkla ve anlamını gör)`}
          >
            {wordWithPunc}
          </span>
        );
      } else {
        result.push(<span key={`w-${pIndex}-${wIndex}`}>{wordWithPunc}</span>);
      }

      if (wIndex < words.length - 1) {
        result.push(" ");
      }
    });

    return result;
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Font size classes
  const fontSizes = {
    sm: "text-base leading-relaxed",
    base: "text-lg leading-loose",
    lg: "text-xl sm:text-2xl leading-loose",
    xl: "text-2xl sm:text-3xl leading-loose",
  };

  return (
    <div className="min-h-[calc(100vh-65px)] bg-amber-50/80 p-3 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top Header & Navigation bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-amber-100/90 border-2 border-amber-300 p-3.5 rounded-2xl shadow-sm">
          <button
            id="btn-back-to-map"
            onClick={() => {
              sounds.playClick();
              if (synthRef.current) synthRef.current.cancel();
              onBackToMap();
            }}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-amber-200 text-amber-950 font-bold text-xs sm:text-sm border border-amber-300 flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Haritaya Dön</span>
          </button>

          {/* Island indicator */}
          <div className="text-center">
            <span className="text-[11px] font-bold text-amber-800 uppercase tracking-widest block">
              {story.islandName}
            </span>
            <span className="text-sm font-bold text-slate-800 font-['Fredoka',sans-serif]">
              {story.title}
            </span>
          </div>

          {/* Reading Timer */}
          <div className="bg-white px-3 py-1.5 rounded-xl border border-amber-300 text-xs font-mono font-bold text-amber-900 flex items-center gap-1.5 shadow-sm">
            <span>⏱️ Süre:</span>
            <span>{formatTime(secondsElapsed)}</span>
          </div>
        </div>

        {/* Accessibility & Reading Tool Bar */}
        <div className="bg-white border-2 border-amber-200 rounded-2xl p-3 sm:p-4 shadow-md flex flex-wrap items-center justify-between gap-3">
          {/* Audio Controls */}
          <div className="flex items-center gap-2">
            <button
              id="btn-toggle-speech"
              onClick={handleToggleSpeech}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 border shadow-sm transition-all ${
                isSpeaking
                  ? "bg-amber-500 text-white border-amber-600 animate-pulse"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-500"
              }`}
            >
              {isSpeaking ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Durdur</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span>Sesli Dinle</span>
                </>
              )}
            </button>

            {/* Speed Button */}
            <button
              id="btn-speech-speed"
              onClick={handleSpeedChange}
              className="px-2.5 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-xs border border-amber-300"
              title="Okuma Hızını Değiştir"
            >
              {speechSpeed}x Hız
            </button>
          </div>

          {/* Font & Display Controls */}
          <div className="flex items-center gap-2">
            {/* Font Size Selector */}
            <div className="flex items-center bg-amber-100/70 p-1 rounded-xl border border-amber-300">
              <button
                onClick={() => setFontSize("sm")}
                className={`px-2.5 py-1 text-xs rounded-lg font-bold transition-colors ${fontSize === "sm" ? "bg-amber-800 text-white" : "text-amber-900"}`}
                title="Küçük Yazı"
              >
                A
              </button>
              <button
                onClick={() => setFontSize("base")}
                className={`px-2.5 py-1 text-sm rounded-lg font-bold transition-colors ${fontSize === "base" ? "bg-amber-800 text-white" : "text-amber-900"}`}
                title="Normal Yazı"
              >
                A
              </button>
              <button
                onClick={() => setFontSize("lg")}
                className={`px-2.5 py-1 text-base rounded-lg font-bold transition-colors ${fontSize === "lg" ? "bg-amber-800 text-white" : "text-amber-900"}`}
                title="Büyük Yazı"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize("xl")}
                className={`px-2.5 py-1 text-lg rounded-lg font-bold transition-colors ${fontSize === "xl" ? "bg-amber-800 text-white" : "text-amber-900"}`}
                title="Çok Büyük Yazı"
              >
                A++
              </button>
            </div>

            {/* Dyslexic font toggle */}
            <button
              onClick={() => setDyslexicFont(!dyslexicFont)}
              className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
                dyslexicFont
                  ? "bg-purple-600 text-white border-purple-500"
                  : "bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-300"
              }`}
              title="Okumayı kolaylaştıran özel yazı tipi"
            >
              📖 Kolay Okuma
            </button>
          </div>
        </div>

        {/* Story Content Parchment Card */}
        <div className="bg-amber-50 border-4 border-amber-800 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden text-left">
          {/* Antique parchment texture effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Story Title & Theme */}
          <div className="border-b-2 border-amber-300 pb-5 mb-6 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-200 text-amber-900 font-bold text-xs uppercase tracking-wider mb-2">
              3. Sınıf Macera Metni
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-amber-950 font-['Fredoka',sans-serif] tracking-tight">
              {story.title}
            </h1>
          </div>

          {/* Paragraphs */}
          <div className={`space-y-6 text-slate-900 ${fontSizes[fontSize]} ${dyslexicFont ? "font-['Lexend',sans-serif] tracking-wide" : "font-['Quicksand',sans-serif]"}`}>
            {story.paragraphs.map((p, idx) => {
              const isSpotlighted = spotlightIndex === idx;
              const isDimmed = spotlightIndex !== null && spotlightIndex !== idx;

              return (
                <div
                  key={`p-${idx}`}
                  onClick={() => setSpotlightIndex(spotlightIndex === idx ? null : idx)}
                  className={`p-4 rounded-2xl transition-all cursor-pointer border-2 ${
                    isSpotlighted
                      ? "bg-amber-100/90 border-amber-500 shadow-md ring-2 ring-amber-400"
                      : isDimmed
                      ? "opacity-35 border-transparent"
                      : "bg-white/60 border-amber-100 hover:bg-amber-100/50"
                  }`}
                >
                  <p className="indent-6 text-justify">
                    {renderParagraphWithVocab(p, idx)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Vocabulary Box */}
          {story.vocabulary && story.vocabulary.length > 0 && (
            <div className="mt-8 pt-6 border-t-2 border-amber-300/80 bg-amber-100/60 p-4 sm:p-5 rounded-2xl border border-amber-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🦜</span>
                <h3 className="text-sm sm:text-base font-bold text-amber-950 font-['Fredoka',sans-serif]">
                  Kaptan Gaga'nın Sözcük Sandığı (Önemli Kelimeler):
                </h3>
              </div>
              <p className="text-xs text-amber-800 mb-3">
                Hikayede sarı renkli kelimelere tıklayarak veya aşağıdaki kartlardan anlamlarını öğrenebilirsin:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {story.vocabulary.map((vocab, vIdx) => (
                  <button
                    key={vIdx}
                    onClick={() => {
                      sounds.playClick();
                      onSelectWord(vocab.word, vocab.meaning);
                    }}
                    className="p-2.5 rounded-xl bg-white hover:bg-amber-50 text-left border border-amber-300 shadow-sm transition-all hover:scale-102 flex flex-col justify-between"
                  >
                    <span className="text-xs font-bold text-amber-950 underline decoration-amber-500">
                      ✨ {vocab.word}
                    </span>
                    <span className="text-[11px] text-slate-600 line-clamp-2 mt-1">
                      {vocab.meaning}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Ready for questions CTA */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-5 sm:p-6 shadow-xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h3 className="text-lg sm:text-xl font-bold font-['Fredoka',sans-serif] text-yellow-300">
              Metni dikkatlice okudun mu?
            </h3>
            <p className="text-xs sm:text-sm text-amber-100">
              4 adet 5N1K ve anlama sorusunu çözerek altın anahtarları topla ve hazine sandığını aç!
            </p>
          </div>

          <button
            id="btn-start-questions"
            onClick={() => {
              sounds.playTreasureFanfare();
              if (synthRef.current) synthRef.current.cancel();
              onGoToQuestions();
            }}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-amber-950 font-extrabold text-base sm:text-lg shadow-xl border-2 border-yellow-200 flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shrink-0 font-['Fredoka',sans-serif]"
          >
            <span>Soruları Çöz ve Sandığı Aç!</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
