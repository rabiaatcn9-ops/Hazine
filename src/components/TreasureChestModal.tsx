import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Trophy, Coins, Check, ArrowRight, Star } from "lucide-react";
import { IslandStory } from "../types";
import { sounds } from "../utils/soundEffects";

interface TreasureChestModalProps {
  story: IslandStory;
  correctAnswersCount: number;
  onClaimReward: () => void;
  onGoToTrophyRoom: () => void;
}

export const TreasureChestModal: React.FC<TreasureChestModalProps> = ({
  story,
  correctAnswersCount,
  onClaimReward,
  onGoToTrophyRoom,
}) => {
  useEffect(() => {
    sounds.playTreasureFanfare();
    // Launch celebratory double fireworks
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#f59e0b", "#10b981", "#ef4444", "#8b5cf6"],
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#f59e0b", "#10b981", "#ef4444", "#8b5cf6"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-b from-amber-50 to-orange-100 border-4 border-amber-600 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl text-center relative animate-in zoom-in-95 duration-300">
        {/* Glow halo */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-44 h-44 bg-yellow-400/30 rounded-full blur-2xl pointer-events-none"></div>

        {/* Chest Illustration */}
        <div className="relative inline-block my-2">
          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-amber-400 to-yellow-600 rounded-3xl border-4 border-yellow-200 shadow-2xl flex items-center justify-center text-6xl animate-bounce">
            🎁
          </div>
          <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-full border-2 border-white shadow-md">
            <Check className="w-5 h-5 stroke-[3]" />
          </div>
        </div>

        {/* Title */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-200 text-amber-900 font-bold text-xs uppercase tracking-wider my-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>Hazine Sandığı Açıldı!</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950 font-['Fredoka',sans-serif] tracking-tight">
          Tebrikler Harika Kaşif!
        </h2>
        <p className="text-xs sm:text-sm text-amber-900/90 mt-1 max-w-sm mx-auto">
          <strong>{story.title}</strong> metnini başarıyla okudun ve tüm soruları tamamlayarak gizli hazineyi kazandın!
        </p>

        {/* Stars */}
        <div className="flex items-center justify-center gap-1.5 my-4">
          {[1, 2, 3].map((star) => (
            <Star
              key={star}
              className="w-7 h-7 text-yellow-400 fill-yellow-400 drop-shadow-md animate-pulse"
            />
          ))}
        </div>

        {/* Loot Cards */}
        <div className="grid grid-cols-2 gap-3 my-5 text-left">
          {/* Gold Coins reward */}
          <div className="bg-white/90 p-3.5 rounded-2xl border-2 border-amber-300 shadow-sm flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center text-2xl border border-amber-400 shrink-0">
              🪙
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase block">Kazanılan</span>
              <span className="text-base font-extrabold text-amber-950 font-mono">+{story.rewardChest.coins} Altın</span>
            </div>
          </div>

          {/* Gem reward */}
          <div className="bg-white/90 p-3.5 rounded-2xl border-2 border-amber-300 shadow-sm flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center text-2xl border border-purple-300 shrink-0">
              💎
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold text-slate-500 uppercase block">Mücevher</span>
              <span className="text-xs sm:text-sm font-extrabold text-purple-950 truncate block">
                {story.rewardChest.gemName}
              </span>
            </div>
          </div>
        </div>

        {/* Lore card */}
        <div className="bg-amber-100/80 p-3.5 rounded-2xl border border-amber-300 text-xs text-amber-950 text-left mb-6 leading-relaxed italic">
          "{story.rewardChest.secretLore}"
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            id="btn-chest-claim"
            onClick={() => {
              sounds.playCoin();
              onClaimReward();
            }}
            className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-sm sm:text-base shadow-xl border-2 border-emerald-400 flex items-center justify-center gap-2 transition-all transform hover:scale-105 font-['Fredoka',sans-serif]"
          >
            <span>Haritaya Dön & Devam Et</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="btn-chest-trophy"
            onClick={() => {
              sounds.playClick();
              onGoToTrophyRoom();
            }}
            className="py-3.5 px-5 rounded-2xl bg-amber-200 hover:bg-amber-300 text-amber-950 font-bold text-xs sm:text-sm border border-amber-400 transition-colors flex items-center justify-center gap-1.5"
          >
            <Trophy className="w-4 h-4 text-amber-800" />
            <span>Hazine Odası</span>
          </button>
        </div>
      </div>
    </div>
  );
};
