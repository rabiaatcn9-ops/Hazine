import React from "react";
import { Coins, Trophy, Sparkles, Volume2, VolumeX, Award, GraduationCap, User } from "lucide-react";
import { UserStats, GradeLevel } from "../types";
import { sounds } from "../utils/soundEffects";

interface NavbarProps {
  stats: UserStats;
  currentGrade: GradeLevel;
  onSelectGrade: (grade: GradeLevel) => void;
  onOpenTrophyRoom: () => void;
  onOpenTeacherDashboard: () => void;
  onOpenAvatarPicker: () => void;
  onGoToDashboard: () => void;
  currentView: "grade1" | "grade2" | "grade3" | "grade4" | "story" | "quiz" | "trophy" | "teacher" | "wordGame";
}

export const Navbar: React.FC<NavbarProps> = ({
  stats,
  currentGrade,
  onSelectGrade,
  onOpenTrophyRoom,
  onOpenTeacherDashboard,
  onOpenAvatarPicker,
  onGoToDashboard,
  currentView,
}) => {
  const [isMuted, setIsMuted] = React.useState(sounds.isMuted());

  const handleToggleMute = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  const getAvatarEmoji = (id: string) => {
    switch (id) {
      case "girl_explorer":
      case "girl":
        return "👧";
      case "boy_explorer":
      case "boy":
        return "👦";
      case "owl":
        return "🦉";
      case "parrot":
        return "🦜";
      case "fox":
        return "🦊";
      case "mermaid":
        return "🧜‍♀️";
      case "wizard":
        return "🧙‍♂️";
      default:
        return "🏴‍☠️";
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b-4 border-amber-400 shadow-xl text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            id="nav-brand-button"
            onClick={onGoToDashboard}
            className="flex items-center gap-2 text-left group focus:outline-none"
            title="Ana Sayfaya Dön"
          >
            <div>
              <div className="text-base sm:text-xl font-black text-amber-400 tracking-tight flex items-center gap-2 font-mono">
                <span className="hover:text-amber-300 transition-colors">rabiaöğretmen</span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 hidden md:inline-block font-sans font-bold">
                  Türkçe Portalı
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                1., 2., 3. ve 4. Sınıf Okuma & Hızlı Okuma Oyunları
              </p>
            </div>
          </button>
        </div>

        {/* Grade Selection Tabs in Navbar */}
        <div className="flex items-center bg-slate-800 p-1 rounded-2xl border border-slate-700">
          {[
            { grade: 1 as GradeLevel, label: "1. Sınıf", icon: "🎒" },
            { grade: 2 as GradeLevel, label: "2. Sınıf", icon: "⛵" },
            { grade: 3 as GradeLevel, label: "3. Sınıf", icon: "🏆" },
            { grade: 4 as GradeLevel, label: "4. Sınıf", icon: "⚡" },
          ].map((item) => (
            <button
              key={item.grade}
              onClick={() => onSelectGrade(item.grade)}
              className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1 ${
                currentGrade === item.grade && currentView !== "teacher" && currentView !== "trophy"
                  ? "bg-amber-400 text-slate-950 shadow-md scale-105"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Teacher Board Button */}
          <button
            id="btn-teacher-board"
            onClick={onOpenTeacherDashboard}
            className={`px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-1.5 transition-all shadow ${
              currentView === "teacher"
                ? "bg-amber-400 text-slate-950 ring-2 ring-amber-300"
                : "bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-400/40"
            }`}
            title="Öğretmen Altın ve Skor Panosu"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span className="hidden md:inline">Altın Skor Panosu</span>
            <span className="md:hidden">Skorlar</span>
          </button>

          {/* Student Coins Badge */}
          <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 sm:px-3 py-1.5 rounded-xl border border-amber-400/40 shadow-inner">
            <Coins className="w-4 h-4 text-amber-400 fill-amber-400 animate-bounce" />
            <span className="text-xs sm:text-sm font-black text-amber-300 font-mono">
              {stats.coins}
            </span>
            <span className="text-[10px] text-slate-400 hidden lg:inline">Altın</span>
          </div>

          {/* Trophy Room Button */}
          <button
            id="btn-trophy-room"
            onClick={onOpenTrophyRoom}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border transition-all text-xs sm:text-sm font-bold ${
              currentView === "trophy"
                ? "bg-amber-400 text-slate-950 border-amber-300 shadow"
                : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"
            }`}
            title="Hazine ve Rozet Odası"
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="hidden lg:inline">Hazine Odası</span>
          </button>

          {/* Student Avatar / Profile */}
          <button
            id="btn-avatar-picker"
            onClick={onOpenAvatarPicker}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 px-2.5 py-1.5 rounded-xl border border-slate-700 text-xs sm:text-sm font-bold transition-all"
            title="Profil ve İsim Değiştir"
          >
            <span className="text-base leading-none">{getAvatarEmoji(stats.avatarId)}</span>
            <span className="hidden xl:inline text-amber-200 max-w-[90px] truncate">
              {stats.playerName}
            </span>
          </button>

          {/* Sound Mute Toggle */}
          <button
            id="btn-toggle-sound"
            onClick={handleToggleMute}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            title={isMuted ? "Sesi Aç" : "Sesi Kapat"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>
      </div>
    </header>
  );
};
