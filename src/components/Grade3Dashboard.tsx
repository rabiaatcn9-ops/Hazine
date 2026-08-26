import React, { useState } from "react";
import { UserStats, IslandStory } from "../types";
import { GRADE3_STORIES } from "../data/grade3Data";
import {
  Sparkles,
  BookOpen,
  Scale,
  Handshake,
  Search,
  CheckCircle2,
  Lock,
  Trophy,
  Coins,
  ChevronRight,
  Star,
  Award,
} from "lucide-react";

interface Grade3DashboardProps {
  userStats: UserStats;
  onSelectStory: (story: IslandStory) => void;
  onOpenWordGame: (mode: "synonym" | "antonym") => void;
}

export const Grade3Dashboard: React.FC<Grade3DashboardProps> = ({
  userStats,
  onSelectStory,
  onOpenWordGame,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTheme, setSelectedTheme] = useState<string>("all");

  const completedCount = userStats.completedLevels.filter((id) =>
    GRADE3_STORIES.some((s) => s.id === id)
  ).length;

  const filteredStories = GRADE3_STORIES.filter((story) => {
    const matchesSearch =
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.synopsis.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTheme = selectedTheme === "all" || story.theme === selectedTheme;
    return matchesSearch && matchesTheme;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Grade 3 Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border-4 border-indigo-400">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/30 rounded-full text-xs font-black tracking-wider uppercase mb-2 border border-indigo-300/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              3. Sınıf Türkçe & Okuma Dünyası
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              🏆 Okuma Metinleri ve Kelime Hazinesi
            </h1>
            <p className="text-indigo-100 text-sm sm:text-base mt-2 max-w-2xl">
              3. sınıf seviyesine özel kapsamlı 5N1K okuma anlama metinleri, zengin kelime dağarcığı,
              zıt anlamlı ve eş anlamlı kelime eşleştirme maceraları!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 flex items-center gap-6 text-center">
            <div>
              <div className="text-xs font-bold text-indigo-200">Okunan Metinler</div>
              <div className="text-2xl font-black text-amber-300">
                {completedCount} / {GRADE3_STORIES.length}
              </div>
              <div className="text-[11px] text-indigo-100">Tamamlanan Seviye</div>
            </div>
            <div className="border-l border-white/20 pl-6">
              <div className="text-xs font-bold text-indigo-200">Kazanılan Altın</div>
              <div className="text-2xl font-black text-amber-300 flex items-center justify-center gap-1">
                <Coins className="w-5 h-5 fill-amber-300 text-amber-300" />
                {userStats.coins}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Major Activities Hub */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Activity 1: Stories */}
        <div className="p-6 rounded-3xl bg-white border-3 border-indigo-400 shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4 text-2xl">
            📚
          </div>
          <div className="font-black text-lg text-slate-900">Okuma Metinleri</div>
          <div className="text-xs font-bold text-slate-500 mt-1">
            Derin anlama, 5N1K, ana fikir ve sözcük dedektifliği
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs font-black text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">
              {completedCount} / {GRADE3_STORIES.length} Tamamlandı
            </span>
          </div>
        </div>

        {/* Activity 2: Antonyms */}
        <button
          onClick={() => onOpenWordGame("antonym")}
          className="p-6 rounded-3xl bg-white border-3 border-amber-300 hover:border-amber-500 hover:shadow-lg transition-all text-left relative group active:scale-95"
        >
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">
            ⚖️
          </div>
          <div className="font-black text-lg text-slate-900">3. Sınıf Zıt Anlamlılar</div>
          <div className="text-xs font-bold text-slate-500 mt-1">
            Cömert-Cimri, Cesur-Korkak gibi 60+ 3. sınıf zıt kelimeler
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs font-black text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg">
              {userStats.completedAntonymGames} Oyun Oynandı
            </span>
            <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        {/* Activity 3: Synonyms */}
        <button
          onClick={() => onOpenWordGame("synonym")}
          className="p-6 rounded-3xl bg-white border-3 border-emerald-300 hover:border-emerald-500 hover:shadow-lg transition-all text-left relative group active:scale-95"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">
            🤝
          </div>
          <div className="font-black text-lg text-slate-900">3. Sınıf Eş Anlamlılar</div>
          <div className="text-xs font-bold text-slate-500 mt-1">
            Öykü-Hikaye, Vatan-Yurt gibi 60+ 3. sınıf eş anlamlı sözcük
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
              {userStats.completedSynonymGames} Oyun Oynandı
            </span>
            <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>

      {/* Stories Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-slate-100 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              3. Sınıf Okuma Metinleri ve Hazine Haritası
            </h2>
            <p className="text-xs text-slate-500 font-semibold mt-1">
              Hikayeyi dikkatlice oku, 4 şıklı soruları yanıtla ve büyük şampiyonluk rozetlerini kazan!
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Metin veya konu ara..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 outline-none text-xs font-bold text-slate-800"
            />
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStories.map((story) => {
            const isCompleted = userStats.completedLevels.includes(story.id);

            return (
              <button
                key={story.id}
                onClick={() => onSelectStory(story)}
                className={`p-5 rounded-2xl border-2 text-left transition-all relative group flex flex-col justify-between hover:shadow-md active:scale-98 ${
                  isCompleted
                    ? "bg-emerald-50/60 border-emerald-300 hover:border-emerald-500"
                    : "bg-white border-slate-200 hover:border-indigo-400"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                      {story.levelNumber}. Metin
                    </span>
                    <span className="text-2xl">{story.iconName}</span>
                  </div>

                  <h3 className="font-black text-slate-900 text-base group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {story.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium line-clamp-2 mt-1">
                    {story.synopsis}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-400">⏱️ {story.wordCount} Kelime</span>
                  {isCompleted ? (
                    <span className="text-emerald-700 font-black flex items-center gap-1 bg-emerald-100 px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Tamamlandı
                    </span>
                  ) : (
                    <span className="text-amber-600 font-black flex items-center gap-1">
                      <Coins className="w-3.5 h-3.5" />+{story.rewardChest.coins}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
