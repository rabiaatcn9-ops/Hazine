import React, { useState } from "react";
import { Timer, Zap, Eye, BookOpen, Trophy, Sparkles, Flame, CheckCircle2, Play, Award, Compass } from "lucide-react";
import { UserStats } from "../types";
import { Grade4TimedReading } from "./grade4/Grade4TimedReading";
import { Grade4TachistoscopeGame } from "./grade4/Grade4TachistoscopeGame";
import { Grade4RsvpReader } from "./grade4/Grade4RsvpReader";
import { Grade4PyramidExercise } from "./grade4/Grade4PyramidExercise";

interface Grade4DashboardProps {
  userStats: UserStats;
  onUpdateStats: React.Dispatch<React.SetStateAction<UserStats>>;
  onOpenWordGame: (mode: "synonym" | "antonym") => void;
  onPlaySound: (type: "correct" | "wrong" | "chest" | "click") => void;
}

type Grade4Tab = "timed" | "tachistoscope" | "rsvp" | "pyramid";

export const Grade4Dashboard: React.FC<Grade4DashboardProps> = ({
  userStats,
  onUpdateStats,
  onOpenWordGame,
  onPlaySound,
}) => {
  const [activeTab, setActiveTab] = useState<Grade4Tab>("timed");

  const completedTimedCount = (userStats.completedGrade4TimedStories || []).length;
  const bestWpm = userStats.bestGrade4Wpm || 0;

  return (
    <div className="space-y-6">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-4 border-amber-400 p-6 sm:p-8 text-white shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400 text-slate-950 rounded-full text-xs font-black uppercase tracking-wider shadow">
              <Sparkles className="w-3.5 h-3.5" />
              rabiaöğretmen 4. Sınıf Akademisi
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-amber-300">
              ⚡ Hızlı Okuma & Anlama Dünyası
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Göz kaslarını güçlendir, odaklanma hızını katla ve verilen sürede metinleri okuyup anlayarak gerçek bir <strong>Hızlı Okuma Şampiyonu</strong> ol!
            </p>
          </div>

          {/* Quick Performance Badge */}
          <div className="bg-slate-900/90 border-2 border-amber-400/60 rounded-3xl p-4 sm:p-5 flex items-center gap-4 shadow-xl min-w-[240px]">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 flex items-center justify-center text-3xl border border-amber-400/40">
              🚀
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                En Yüksek Hız
              </span>
              <div className="text-2xl sm:text-3xl font-black font-mono text-white">
                {bestWpm > 0 ? `${bestWpm} WPM` : "Henüz Yok"}
              </div>
              <span className="text-[11px] text-slate-400">
                {completedTimedCount} Süreli Metin Tamamlandı
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 bg-white p-2 rounded-3xl border-2 border-slate-200 shadow-sm">
        {[
          {
            id: "timed" as Grade4Tab,
            title: "Süreli Metin Okuma",
            desc: "Kronometreli Anlama",
            icon: Timer,
            color: "text-amber-600 bg-amber-100",
          },
          {
            id: "tachistoscope" as Grade4Tab,
            title: "Takistoskop",
            desc: "Hızlı Kelime Yakalama",
            icon: Zap,
            color: "text-purple-600 bg-purple-100",
          },
          {
            id: "rsvp" as Grade4Tab,
            title: "Kayan Kelime (RSVP)",
            desc: "Göz Sıçrama Antrenörü",
            icon: Flame,
            color: "text-emerald-600 bg-emerald-100",
          },
          {
            id: "pyramid" as Grade4Tab,
            title: "Göz Piramidi",
            desc: "Geniş Açı Egzersizi",
            icon: Eye,
            color: "text-rose-600 bg-rose-100",
          },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                onPlaySound("click");
                setActiveTab(tab.id);
              }}
              className={`p-3 sm:p-4 rounded-2xl text-left transition-all flex items-start gap-3 border-2 ${
                isActive
                  ? "bg-slate-900 text-white border-amber-400 shadow-md scale-[1.02]"
                  : "bg-slate-50 text-slate-700 border-transparent hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <div className={`p-2 rounded-xl flex-shrink-0 ${tab.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className={`text-xs sm:text-sm font-black truncate ${isActive ? "text-amber-300" : "text-slate-900"}`}>
                  {tab.title}
                </h4>
                <p className={`text-[11px] truncate ${isActive ? "text-slate-400" : "text-slate-500"}`}>
                  {tab.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Quick Access to 4. Grade Vocabulary Game */}
      <div className="bg-gradient-to-r from-amber-100 via-amber-50 to-orange-100 border border-amber-300 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="text-2xl p-2 bg-amber-200/80 rounded-2xl">🧠</span>
          <div>
            <h4 className="font-black text-slate-900 text-sm sm:text-base">
              4. Sınıf Sözcük Hazinesi: Eş & Zıt Anlamlı Kelimeler
            </h4>
            <p className="text-xs text-slate-600">
              Kelime dağarcığını zenginleştirerek okuma hızını iki katına çıkar!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenWordGame("antonym")}
            className="px-3.5 py-2 bg-white hover:bg-amber-50 text-amber-900 border border-amber-300 font-black text-xs rounded-xl shadow-sm"
          >
            Zıt Anlam Oyunu
          </button>
          <button
            onClick={() => onOpenWordGame("synonym")}
            className="px-3.5 py-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-sm"
          >
            Eş Anlam Oyunu
          </button>
        </div>
      </div>

      {/* TAB CONTENT */}
      {activeTab === "timed" && (
        <Grade4TimedReading
          userStats={userStats}
          onUpdateStats={onUpdateStats}
          onPlaySound={onPlaySound}
        />
      )}

      {activeTab === "tachistoscope" && (
        <Grade4TachistoscopeGame
          userStats={userStats}
          onUpdateStats={onUpdateStats}
          onPlaySound={onPlaySound}
        />
      )}

      {activeTab === "rsvp" && (
        <Grade4RsvpReader
          userStats={userStats}
          onUpdateStats={onUpdateStats}
          onPlaySound={onPlaySound}
        />
      )}

      {activeTab === "pyramid" && (
        <Grade4PyramidExercise
          userStats={userStats}
          onUpdateStats={onUpdateStats}
          onPlaySound={onPlaySound}
        />
      )}
    </div>
  );
};
