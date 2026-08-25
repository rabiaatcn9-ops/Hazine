import React from "react";
import { Coins, Trophy, Sparkles, Volume2, VolumeX, User, MapPin, PlusCircle } from "lucide-react";
import { UserStats } from "../types";
import { sounds } from "../utils/soundEffects";

interface NavbarProps {
  stats: UserStats;
  onOpenTrophyRoom: () => void;
  onOpenAIGenerator: () => void;
  onOpenAvatarPicker: () => void;
  onGoToMap: () => void;
  currentView: "map" | "story" | "quiz" | "trophy";
}

export const Navbar: React.FC<NavbarProps> = ({
  stats,
  onOpenTrophyRoom,
  onOpenAIGenerator,
  onOpenAvatarPicker,
  onGoToMap,
  currentView,
}) => {
  const [isMuted, setIsMuted] = React.useState(sounds.isMuted());

  const handleToggleMute = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header className="sticky top-0 z-40 bg-amber-900/95 backdrop-blur border-b-4 border-amber-600 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2">
        {/* Brand & Map Button */}
        <div className="flex items-center gap-3">
          <button
            id="nav-brand-button"
            onClick={onGoToMap}
            className="flex items-center gap-2 text-left group focus:outline-none"
            title="Haritaya Dön"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-md border-2 border-amber-300 group-hover:scale-105 transition-transform">
              <span className="text-xl" role="img" aria-label="pirate-flag">🏴‍☠️</span>
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-amber-200 tracking-wide font-['Fredoka',sans-serif] flex items-center gap-1.5">
                <span>3. Sınıf Hazine Avı</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-700/80 text-amber-100 border border-amber-500/50 hidden md:inline-block">
                  Okuma Anlama
                </span>
              </div>
              <p className="text-[11px] text-amber-300/80 hidden sm:block">Adaları keşfet, soruları çöz, sandığı aç!</p>
            </div>
          </button>
        </div>

        {/* Action Controls & Stats */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* AI Magic Adventure Button */}
          <button
            id="btn-open-ai-generator"
            onClick={onOpenAIGenerator}
            className="px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/60 shadow-md text-xs sm:text-sm font-semibold flex items-center gap-1.5 text-white transition-all transform hover:scale-105 active:scale-95"
            title="Kendi konunu seç ve yapay zeka ile yepyeni macera üret!"
          >
            <Sparkles className="w-4 h-4 text-yellow-300 animate-spin-slow" />
            <span className="hidden sm:inline">Sihirli Macera Üret</span>
            <span className="sm:hidden">Yeni Ada</span>
          </button>

          {/* Gold Coins Pill */}
          <div className="flex items-center gap-1.5 bg-amber-950/80 px-2.5 sm:px-3 py-1.5 rounded-xl border border-amber-500/40 shadow-inner">
            <Coins className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-bounce" />
            <span className="text-xs sm:text-sm font-bold text-yellow-300 font-mono">{stats.coins}</span>
            <span className="text-[10px] text-amber-300 hidden md:inline">Altın</span>
          </div>

          {/* Trophy Room Button */}
          <button
            id="btn-trophy-room"
            onClick={onOpenTrophyRoom}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border transition-all text-xs sm:text-sm font-semibold ${
              currentView === "trophy"
                ? "bg-amber-400 text-amber-950 border-yellow-300 shadow-md font-bold"
                : "bg-amber-800/80 hover:bg-amber-700/80 text-amber-100 border-amber-600/50"
            }`}
            title="Hazine Odası ve Başarı Belgesi"
          >
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="hidden md:inline">Hazine Odası</span>
            <span className="text-xs px-1.5 py-0.2 rounded-full bg-amber-900 text-amber-300 font-mono text-[11px]">
              {stats.earnedBadges.length}/7
            </span>
          </button>

          {/* Player Avatar Pill */}
          <button
            id="btn-avatar-picker"
            onClick={onOpenAvatarPicker}
            className="flex items-center gap-1.5 bg-amber-800/80 hover:bg-amber-700/90 px-2 sm:px-3 py-1.5 rounded-xl border border-amber-600/50 text-xs sm:text-sm font-medium transition-all"
            title="Kaşif Profilini Değiştir"
          >
            <span className="text-base leading-none">
              {stats.avatarId === "captain" ? "🏴‍☠️" : stats.avatarId === "girl" ? "👧" : stats.avatarId === "boy" ? "👦" : stats.avatarId === "mermaid" ? "🧜‍♀️" : "🦜"}
            </span>
            <span className="hidden lg:inline text-amber-200 max-w-[80px] truncate">{stats.playerName}</span>
          </button>

          {/* Sound Toggle */}
          <button
            id="btn-toggle-sound"
            onClick={handleToggleMute}
            className="p-2 rounded-xl bg-amber-800/60 hover:bg-amber-700/80 text-amber-200 border border-amber-600/40 transition-colors"
            title={isMuted ? "Sesi Aç" : "Sesi Kapat"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-300" />}
          </button>
        </div>
      </div>
    </header>
  );
};
