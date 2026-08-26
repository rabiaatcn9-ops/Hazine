import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, FastForward, Rewind, Volume2, Sparkles, Sliders, CheckCircle2 } from "lucide-react";
import { GRADE4_RSVP_PASSAGES } from "../../data/grade4Data";
import { UserStats } from "../../types";

interface Grade4RsvpReaderProps {
  userStats: UserStats;
  onUpdateStats: React.Dispatch<React.SetStateAction<UserStats>>;
  onPlaySound: (type: "correct" | "wrong" | "chest" | "click") => void;
}

export const Grade4RsvpReader: React.FC<Grade4RsvpReaderProps> = ({
  userStats,
  onUpdateStats,
  onPlaySound,
}) => {
  const [passages] = useState(GRADE4_RSVP_PASSAGES);
  const [selectedPassageIndex, setSelectedPassageIndex] = useState(0);
  const [wpm, setWpm] = useState<number>(180);
  const [chunkSize, setChunkSize] = useState<1 | 2>(1); // 1 word or 2 words at a time
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const activePassage = passages[selectedPassageIndex];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Interval in ms = (60 / WPM) * 1000 * chunkSize
  const intervalMs = Math.round((60 / wpm) * 1000 * chunkSize);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentWordIndex((prev) => {
          const nextIndex = prev + chunkSize;
          if (nextIndex >= activePassage.words.length) {
            setIsPlaying(false);
            setIsCompleted(true);
            onPlaySound("chest");

            onUpdateStats((stats) => ({
              ...stats,
              coins: stats.coins + 20,
              completedGrade4RsvpCount: (stats.completedGrade4RsvpCount || 0) + 1,
            }));

            return activePassage.words.length - 1;
          }
          return nextIndex;
        });
      }, intervalMs);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, intervalMs, chunkSize, activePassage.words.length]);

  const handleTogglePlay = () => {
    onPlaySound("click");
    if (isCompleted) {
      setCurrentWordIndex(0);
      setIsCompleted(false);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    onPlaySound("click");
    setIsPlaying(false);
    setCurrentWordIndex(0);
    setIsCompleted(false);
  };

  const handleRewind = () => {
    onPlaySound("click");
    setCurrentWordIndex((prev) => Math.max(0, prev - 5));
  };

  const handleForward = () => {
    onPlaySound("click");
    setCurrentWordIndex((prev) => Math.min(activePassage.words.length - 1, prev + 5));
  };

  // Format current display word/chunk
  const getDisplayChunk = () => {
    if (chunkSize === 1) {
      return activePassage.words[currentWordIndex] || "";
    } else {
      const w1 = activePassage.words[currentWordIndex] || "";
      const w2 = activePassage.words[currentWordIndex + 1] || "";
      return `${w1} ${w2}`.trim();
    }
  };

  const progressPercent = Math.round(
    ((currentWordIndex + 1) / activePassage.words.length) * 100
  );

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header Info */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-5 rounded-3xl shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-black uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Kayan Kelime (RSVP) Antrenörü
            </span>
            <h3 className="text-xl font-black">Hızlı Göz ve Zihin Odaklaması</h3>
            <p className="text-xs text-emerald-100">
              Gözlerini sabit tut; kelimeler akarken zihnin tüm anlamı tek bakışta kavrasın.
            </p>
          </div>

          {/* Passage Switcher */}
          <div className="flex gap-1.5">
            {passages.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  onPlaySound("click");
                  setSelectedPassageIndex(idx);
                  setCurrentWordIndex(0);
                  setIsPlaying(false);
                  setIsCompleted(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedPassageIndex === idx
                    ? "bg-amber-400 text-slate-950 shadow"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Metin {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Speed and Chunk Size Controls */}
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        {/* Speed Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase">Hız:</span>
          <div className="flex items-center gap-1">
            {[120, 160, 200, 250, 300].map((speed) => (
              <button
                key={speed}
                onClick={() => setWpm(speed)}
                className={`px-2.5 py-1 rounded-xl text-xs font-black transition-all ${
                  wpm === speed
                    ? "bg-emerald-500 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {speed} <span className="text-[10px] font-normal">wpm</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chunk Size Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase">Öbek:</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setChunkSize(1)}
              className={`px-3 py-1 rounded-xl text-xs font-black ${
                chunkSize === 1
                  ? "bg-slate-900 text-amber-300"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              1 Kelime
            </button>
            <button
              onClick={() => setChunkSize(2)}
              className={`px-3 py-1 rounded-xl text-xs font-black ${
                chunkSize === 2
                  ? "bg-slate-900 text-amber-300"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              2'li Blok
            </button>
          </div>
        </div>
      </div>

      {/* Main Flash Display Stage */}
      <div className="bg-slate-950 border-4 border-emerald-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl text-center flex flex-col items-center justify-center min-h-[260px] relative">
        {/* Top Progress bar */}
        <div className="absolute top-4 left-6 right-6">
          <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
            <span>{activePassage.title}</span>
            <span>%{progressPercent}</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-150"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Focus Guides */}
        <div className="w-8 h-1 bg-amber-400/40 mx-auto mb-3 rounded-full" />

        {/* Word Display with Center Guide */}
        <div className="text-3xl sm:text-5xl font-black font-sans tracking-wide text-white min-h-[60px] flex items-center justify-center">
          {isCompleted ? (
            <span className="text-emerald-400 flex items-center gap-2 text-2xl sm:text-3xl animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
              Tebrikler! (+20 Altın)
            </span>
          ) : (
            getDisplayChunk()
          )}
        </div>

        <div className="w-8 h-1 bg-amber-400/40 mx-auto mt-3 rounded-full" />
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={handleRewind}
          title="5 Kelime Geri"
          className="p-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-2xl shadow active:scale-95"
        >
          <Rewind className="w-5 h-5" />
        </button>

        <button
          onClick={handleTogglePlay}
          className={`px-8 py-4 rounded-2xl font-black text-base shadow-lg flex items-center gap-2 transition-transform active:scale-95 ${
            isPlaying
              ? "bg-rose-500 hover:bg-rose-600 text-white"
              : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
          }`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5 fill-white" />
              <span>Duraklat</span>
            </>
          ) : (
            <>
              <Play className="w-5 h-5 fill-white" />
              <span>{currentWordIndex > 0 ? "Devam Et" : "Okumayı Başlat"}</span>
            </>
          )}
        </button>

        <button
          onClick={handleForward}
          title="5 Kelime İleri"
          className="p-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-2xl shadow active:scale-95"
        >
          <FastForward className="w-5 h-5" />
        </button>

        <button
          onClick={handleReset}
          title="Başa Al"
          className="p-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-2xl shadow active:scale-95"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
