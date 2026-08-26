import React, { useState, useEffect, useRef } from "react";
import { Zap, Trophy, Play, CheckCircle2, AlertCircle, RotateCcw, Sparkles, Eye, Flame } from "lucide-react";
import { Grade4TachistoscopeItem, UserStats } from "../../types";
import { GRADE4_TACHISTOSCOPE_ITEMS } from "../../data/grade4Data";

interface Grade4TachistoscopeGameProps {
  userStats: UserStats;
  onUpdateStats: React.Dispatch<React.SetStateAction<UserStats>>;
  onPlaySound: (type: "correct" | "wrong" | "chest" | "click") => void;
}

type GamePhase = "ready" | "countdown" | "flashing" | "choosing" | "feedback" | "finished";

export const Grade4TachistoscopeGame: React.FC<Grade4TachistoscopeGameProps> = ({
  userStats,
  onUpdateStats,
  onPlaySound,
}) => {
  const [items] = useState<Grade4TachistoscopeItem[]>(GRADE4_TACHISTOSCOPE_ITEMS);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [phase, setPhase] = useState<GamePhase>("ready");
  const [flashSpeed, setFlashSpeed] = useState<number>(220); // ms
  const [countdownValue, setCountdownValue] = useState<number>(3);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [streak, setStreak] = useState<number>(0);
  const [totalCorrect, setTotalCorrect] = useState<number>(0);
  const [earnedCoinsSession, setEarnedCoinsSession] = useState<number>(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentItem = items[currentIndex];

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleStartRound = () => {
    onPlaySound("click");
    setSelectedOption(null);
    setPhase("countdown");
    setCountdownValue(3);

    let count = 3;
    const countInterval = setInterval(() => {
      count -= 1;
      if (count > 0) {
        setCountdownValue(count);
      } else {
        clearInterval(countInterval);
        triggerFlash();
      }
    }, 600);
  };

  const triggerFlash = () => {
    setPhase("flashing");
    timerRef.current = setTimeout(() => {
      setPhase("choosing");
    }, flashSpeed);
  };

  const handleSelectOption = (option: string) => {
    if (phase !== "choosing") return;
    setSelectedOption(option);
    setPhase("feedback");

    const isCorrect = option === currentItem.targetWordOrPhrase;
    if (isCorrect) {
      onPlaySound("correct");
      const newStreak = streak + 1;
      setStreak(newStreak);
      setTotalCorrect((prev) => prev + 1);
      const bonus = newStreak >= 3 ? 5 : 0;
      const coinReward = currentItem.rewardCoins + bonus;
      setEarnedCoinsSession((prev) => prev + coinReward);

      onUpdateStats((prev) => ({
        ...prev,
        coins: prev.coins + coinReward,
        completedGrade4TachistoscopeCount: (prev.completedGrade4TachistoscopeCount || 0) + 1,
      }));
    } else {
      onPlaySound("wrong");
      setStreak(0);
    }
  };

  const handleNextItem = () => {
    onPlaySound("click");
    if (currentIndex + 1 < items.length) {
      setCurrentIndex((prev) => prev + 1);
      handleStartRound();
    } else {
      setPhase("finished");
      onPlaySound("chest");
    }
  };

  const handleRestart = () => {
    onPlaySound("click");
    setCurrentIndex(0);
    setStreak(0);
    setTotalCorrect(0);
    setEarnedCoinsSession(0);
    setPhase("ready");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white p-5 rounded-3xl shadow-md flex items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-black uppercase tracking-wider mb-1">
            <Eye className="w-3.5 h-3.5" />
            Takistoskop Göz Antrenörü
          </span>
          <h3 className="text-xl font-black">Hızlı Kelime Yakalama</h3>
          <p className="text-xs text-indigo-100">
            Ekranda anlık parlayan kelimeyi göz ucuyla yakala ve doğru olanı seç!
          </p>
        </div>

        {/* Speed Selector */}
        <div className="bg-slate-900/50 p-1.5 rounded-2xl border border-white/20 flex flex-col items-center">
          <span className="text-[10px] font-bold text-amber-300 uppercase">Hız Ayarı</span>
          <div className="flex gap-1 mt-1">
            {[
              { ms: 300, label: "300ms" },
              { ms: 200, label: "200ms" },
              { ms: 120, label: "120ms ⚡" },
            ].map((s) => (
              <button
                key={s.ms}
                onClick={() => setFlashSpeed(s.ms)}
                className={`px-2 py-1 rounded-xl text-[11px] font-bold transition-all ${
                  flashSpeed === s.ms ? "bg-amber-400 text-slate-950 shadow" : "text-white/80 hover:text-white"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress and Streak Bar */}
      <div className="flex items-center justify-between text-xs font-black text-slate-600 px-2">
        <span className="bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Soru: {currentIndex + 1} / {items.length}
        </span>

        {streak >= 2 && (
          <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full border border-amber-300 flex items-center gap-1 animate-pulse">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            {streak} Seri Kombo! (+5 Altın Bonus)
          </span>
        )}

        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
          Doğru: {totalCorrect}
        </span>
      </div>

      {/* Main Flash Stage */}
      <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 shadow-lg min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold border border-slate-200">
          {currentItem.category}
        </span>

        {/* State: Ready */}
        {phase === "ready" && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-3xl flex items-center justify-center mx-auto text-3xl">
              ⚡
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900">Gözlerini Ekrana Odakla</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">
                Hazır olduğunda başla butonuna bas. Kelime sadece saniyenin beşte biri kadar parlayacak!
              </p>
            </div>
            <button
              onClick={handleStartRound}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black rounded-2xl shadow-lg flex items-center gap-2 mx-auto active:scale-95 transition-transform"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Başla</span>
            </button>
          </div>
        )}

        {/* State: Countdown */}
        {phase === "countdown" && (
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Odaklan</span>
            <div className="text-6xl font-black text-indigo-600 animate-ping">
              {countdownValue}
            </div>
            <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mt-4 animate-pulse" />
          </div>
        )}

        {/* State: Flashing Word */}
        {phase === "flashing" && (
          <div className="text-center py-6">
            <div className="text-3xl sm:text-5xl font-black font-mono tracking-widest text-indigo-950 bg-amber-200 px-6 py-3 rounded-2xl shadow-inner">
              {currentItem.targetWordOrPhrase}
            </div>
          </div>
        )}

        {/* State: Choosing & Feedback */}
        {(phase === "choosing" || phase === "feedback") && (
          <div className="w-full space-y-4">
            <div className="text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {phase === "choosing" ? "Hangi kelimeyi gördün?" : "Sonuç"}
              </span>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {currentItem.distractors.map((option, idx) => {
                const isCorrect = option === currentItem.targetWordOrPhrase;
                const isSelected = selectedOption === option;

                let style = "bg-slate-50 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 text-slate-800";
                if (phase === "feedback") {
                  if (isCorrect) {
                    style = "bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-200";
                  } else if (isSelected) {
                    style = "bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-200";
                  } else {
                    style = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={phase === "feedback"}
                    onClick={() => handleSelectOption(option)}
                    className={`p-4 rounded-2xl border-2 font-black text-sm sm:text-base transition-all flex items-center justify-between ${style}`}
                  >
                    <span>{option}</span>
                    {phase === "feedback" && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    )}
                    {phase === "feedback" && isSelected && !isCorrect && (
                      <AlertCircle className="w-5 h-5 text-rose-600" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            {phase === "feedback" && (
              <div className="pt-2 flex justify-center">
                <button
                  onClick={handleNextItem}
                  className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl shadow flex items-center gap-2"
                >
                  <span>{currentIndex + 1 < items.length ? "Sonraki Kelime" : "Antrenmanı Tamamla"}</span>
                  <Play className="w-4 h-4 fill-white" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* State: Finished */}
        {phase === "finished" && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-3xl flex items-center justify-center mx-auto text-3xl animate-bounce">
              🏆
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900">Takistoskop Tamamlandı!</h4>
              <p className="text-xs text-slate-600 mt-1">
                {items.length} sorudan <strong>{totalCorrect}</strong> tanesini doğru yakaladın ve toplam <strong>+{earnedCoinsSession} Altın</strong> kazandın!
              </p>
            </div>

            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-slate-900 text-amber-300 font-black rounded-2xl shadow flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Tekrar Oyna</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
