import React, { useState } from "react";
import { ChevronRight, RotateCcw, CheckCircle2, Eye, Sparkles, Trophy } from "lucide-react";
import { GRADE4_PYRAMID_EXERCISES } from "../../data/grade4Data";
import { UserStats } from "../../types";

interface Grade4PyramidExerciseProps {
  userStats: UserStats;
  onUpdateStats: React.Dispatch<React.SetStateAction<UserStats>>;
  onPlaySound: (type: "correct" | "wrong" | "chest" | "click") => void;
}

export const Grade4PyramidExercise: React.FC<Grade4PyramidExerciseProps> = ({
  userStats,
  onUpdateStats,
  onPlaySound,
}) => {
  const [exercises] = useState(GRADE4_PYRAMID_EXERCISES);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activeLine, setActiveLine] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const currentExercise = exercises[selectedIdx];

  const handleNextLine = () => {
    onPlaySound("click");
    if (activeLine + 1 < currentExercise.lines.length) {
      setActiveLine((prev) => prev + 1);
    } else {
      setIsDone(true);
      onPlaySound("chest");

      onUpdateStats((stats) => ({
        ...stats,
        coins: stats.coins + currentExercise.rewardCoins,
        completedGrade4PyramidCount: (stats.completedGrade4PyramidCount || 0) + 1,
      }));
    }
  };

  const handleReset = () => {
    onPlaySound("click");
    setActiveLine(0);
    setIsDone(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 text-white p-5 rounded-3xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-black uppercase tracking-wider mb-1">
            <Eye className="w-3.5 h-3.5" />
            Geniş Açı Göz Piramidi
          </span>
          <h3 className="text-xl font-black">{currentExercise.title}</h3>
          <p className="text-xs text-amber-100">
            {currentExercise.description}
          </p>
        </div>

        {/* Exercise Tabs */}
        <div className="flex gap-1.5">
          {exercises.map((ex, idx) => (
            <button
              key={ex.id}
              onClick={() => {
                onPlaySound("click");
                setSelectedIdx(idx);
                setActiveLine(0);
                setIsDone(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedIdx === idx
                  ? "bg-white text-slate-950 shadow"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Piramit {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Pyramid Card */}
      <div className="bg-white border-2 border-amber-200 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
        <div className="space-y-2">
          {currentExercise.lines.map((line, idx) => {
            const isCurrent = idx === activeLine && !isDone;
            const isPassed = idx <= activeLine;

            return (
              <div
                key={idx}
                className={`flex items-center justify-between p-3 rounded-2xl transition-all ${
                  isCurrent
                    ? "bg-amber-100/80 border-2 border-amber-400 scale-[1.02] shadow-sm"
                    : isPassed
                    ? "bg-slate-50 opacity-90"
                    : "opacity-30"
                }`}
              >
                {/* Left Word */}
                <span className="w-5/12 text-right font-black text-slate-900 text-sm sm:text-base pr-4">
                  {line.leftWord}
                </span>

                {/* Center Focal Point */}
                <div className="w-2/12 flex justify-center">
                  <span className="text-2xl animate-pulse">
                    {line.centerSymbol}
                  </span>
                </div>

                {/* Right Word */}
                <span className="w-5/12 text-left font-black text-slate-900 text-sm sm:text-base pl-4">
                  {line.rightWord}
                </span>
              </div>
            );
          })}
        </div>

        {/* Completion Message or Next Step */}
        {isDone ? (
          <div className="text-center p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
            <span className="text-2xl">🎉</span>
            <h4 className="font-black text-emerald-950 text-base">
              Harika Geniş Bakış! (+{currentExercise.rewardCoins} Altın)
            </h4>
            <p className="text-xs text-emerald-700">
              Göz kasların ve çevresel görme alanın her satırda daha da güçlendi.
            </p>
            <button
              onClick={handleReset}
              className="mt-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow inline-flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Tekrar Yap
            </button>
          </div>
        ) : (
          <div className="pt-3 flex justify-center">
            <button
              onClick={handleNextLine}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black rounded-2xl shadow-lg flex items-center gap-2 transition-transform active:scale-95"
            >
              <span>{activeLine + 1 < currentExercise.lines.length ? "Sonraki Satıra Odaklan" : "Piramidi Tamamla"}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
