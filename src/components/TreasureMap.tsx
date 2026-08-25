import React from "react";
import { Lock, CheckCircle2, Star, Sparkles, Compass, MapPin, Play, Award, ChevronRight } from "lucide-react";
import { IslandStory, UserStats } from "../types";
import { sounds } from "../utils/soundEffects";

interface TreasureMapProps {
  stories: IslandStory[];
  stats: UserStats;
  onSelectIsland: (story: IslandStory) => void;
  onOpenAIGenerator: () => void;
}

export const TreasureMap: React.FC<TreasureMapProps> = ({
  stories,
  stats,
  onSelectIsland,
  onOpenAIGenerator,
}) => {
  const [selectedPreview, setSelectedPreview] = React.useState<IslandStory | null>(null);

  const isLevelUnlocked = (story: IslandStory, index: number): boolean => {
    if (index === 0 || story.isCustom) return true;
    const previousStory = stories[index - 1];
    return stats.completedLevels.includes(previousStory.id);
  };

  const isLevelCompleted = (storyId: string): boolean => {
    return stats.completedLevels.includes(storyId);
  };

  const handleIslandClick = (story: IslandStory, index: number) => {
    if (!isLevelUnlocked(story, index)) {
      sounds.playWrong();
      return;
    }
    sounds.playClick();
    setSelectedPreview(story);
  };

  const handleStartAdventure = (story: IslandStory) => {
    sounds.playCoin();
    onSelectIsland(story);
  };

  return (
    <div className="relative min-h-[calc(100vh-65px)] bg-gradient-to-b from-sky-200 via-amber-100 to-amber-200 p-4 sm:p-8 overflow-hidden">
      {/* Decorative Ocean Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-12 text-6xl animate-pulse">⛵</div>
        <div className="absolute bottom-20 left-8 text-5xl">🐬</div>
        <div className="absolute top-1/3 right-12 text-5xl">🐙</div>
        <div className="absolute bottom-10 right-20 text-6xl">🏝️</div>
        {/* Ocean Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Map Header */}
        <div className="bg-amber-100/90 backdrop-blur border-4 border-amber-800 rounded-3xl p-5 sm:p-7 shadow-2xl mb-8 text-center relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 text-8xl opacity-15 pointer-events-none">🧭</div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-800 text-amber-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 shadow-sm">
            <Compass className="w-4 h-4 text-amber-300 animate-spin-slow" />
            <span>Gizemli Hazine Takımadaları</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-amber-950 font-['Fredoka',sans-serif] tracking-tight">
            3. Sınıf Okuma Anlama Haritası
          </h1>
          <p className="text-sm sm:text-base text-amber-900/90 max-w-2xl mx-auto mt-2 leading-relaxed">
            Merhaba cesur kaşif <strong className="text-amber-950 underline decoration-amber-500">{stats.playerName}</strong>! 
            Her adadaki eğlenceli hikayeyi dikkatle oku, 5N1K ve anlama sorularını çöz, sandıklardaki gizli anahtarları ve hazineleri topla!
          </p>

          {/* Progress Ribbon */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold">
            <div className="bg-white/80 px-4 py-2 rounded-xl border border-amber-300 shadow-sm flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Tamamlanan Ada: <strong className="text-emerald-700 font-mono text-base">{stats.completedLevels.length} / {stories.length}</strong></span>
            </div>
            <div className="bg-white/80 px-4 py-2 rounded-xl border border-amber-300 shadow-sm flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" />
              <span>Kazanılan Rozet: <strong className="text-amber-700 font-mono text-base">{stats.earnedBadges.length}</strong></span>
            </div>
          </div>
        </div>

        {/* Archipelago Island Path Grid */}
        <div className="relative">
          {/* Main Quest Path */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
            {stories.map((story, index) => {
              const unlocked = isLevelUnlocked(story, index);
              const completed = isLevelCompleted(story.id);
              const isCurrent = unlocked && !completed;

              return (
                <div
                  key={story.id}
                  id={`island-card-${story.id}`}
                  onClick={() => handleIslandClick(story, index)}
                  className={`group relative rounded-3xl p-5 border-4 transition-all duration-300 transform cursor-pointer text-left ${
                    completed
                      ? "bg-gradient-to-br from-emerald-100 to-teal-50 border-emerald-500 shadow-lg hover:-translate-y-1.5"
                      : isCurrent
                      ? "bg-gradient-to-br from-amber-100 to-yellow-50 border-amber-500 shadow-2xl ring-4 ring-amber-400/50 hover:-translate-y-2 scale-[1.02]"
                      : "bg-slate-200/80 border-slate-400 opacity-60 cursor-not-allowed"
                  }`}
                >
                  {/* Island Number Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold font-['Fredoka',sans-serif] tracking-wider uppercase flex items-center gap-1.5 ${
                        completed
                          ? "bg-emerald-600 text-white"
                          : isCurrent
                          ? "bg-amber-600 text-white animate-pulse"
                          : "bg-slate-500 text-slate-200"
                      }`}
                    >
                      {completed ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Tamamlandı</span>
                        </>
                      ) : isCurrent ? (
                        <>
                          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                          <span>Sıradaki Görev</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-3.5 h-3.5" />
                          <span>Kilitli</span>
                        </>
                      )}
                    </span>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            completed
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-slate-300 fill-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Island Visual Icon / Theme */}
                  <div className="flex items-start gap-3 my-2">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-inner border-2 shrink-0 ${
                        completed
                          ? "bg-emerald-200 border-emerald-400 text-emerald-800"
                          : isCurrent
                          ? "bg-amber-200 border-amber-400 text-amber-900 group-hover:scale-110 transition-transform"
                          : "bg-slate-300 border-slate-400 text-slate-500"
                      }`}
                    >
                      {story.theme === "parrot" ? "🦜" :
                       story.theme === "forest" ? "🌳" :
                       story.theme === "cave" ? "💎" :
                       story.theme === "shipwreck" ? "⚓" :
                       story.theme === "coral" ? "🐬" :
                       story.theme === "temple" ? "🏛️" :
                       story.theme === "castle" ? "👑" : "✨"}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-bold text-amber-800/80 uppercase tracking-wider">
                        {story.islandName}
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-['Fredoka',sans-serif] leading-tight truncate">
                        {story.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        {story.synopsis}
                      </p>
                    </div>
                  </div>

                  {/* Island Stats & Chest Preview Footer */}
                  <div className="mt-4 pt-3 border-t border-amber-200/70 flex items-center justify-between text-xs font-semibold text-slate-600">
                    <span className="flex items-center gap-1">
                      <span>📖 {story.wordCount} kelime</span>
                    </span>
                    <span className="flex items-center gap-1 text-amber-700">
                      <span>🎁 +{story.rewardChest.coins} Altın</span>
                    </span>
                  </div>

                  {/* Current island active ship pointer */}
                  {isCurrent && (
                    <div className="absolute -top-3.5 -right-3 bg-amber-500 text-white p-2 rounded-full shadow-lg animate-bounce border-2 border-white">
                      <span className="text-sm">⛵</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* AI Magic Generator Banner on Map */}
          <div className="bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-purple-400 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="absolute -right-8 -bottom-8 text-9xl opacity-20 pointer-events-none">✨</div>
            <div className="text-left space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/80 text-purple-200 text-xs font-bold uppercase tracking-wider border border-purple-400/50">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin-slow" />
                <span>Yapay Zeka Sihirli Harita</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-['Fredoka',sans-serif] text-yellow-300">
                İstediğin Konuda Yepyeni Hazine Adası Yarat!
              </h2>
              <p className="text-xs sm:text-sm text-purple-100 leading-relaxed">
                Dinozorlar, uzay gemileri, futbolcu hayvanlar veya sihirli şatolar... Aklındaki konuyu yaz, yapay zeka senin için anında 3. sınıf okuma metni ve 5N1K soruları hazırlasın!
              </p>
            </div>

            <button
              id="btn-create-custom-island"
              onClick={onOpenAIGenerator}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-amber-950 font-extrabold text-sm sm:text-base shadow-xl border-2 border-yellow-200 flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shrink-0 font-['Fredoka',sans-serif]"
            >
              <Sparkles className="w-5 h-5 text-amber-950" />
              <span>Sihirli Ada Oluştur</span>
              <ChevronRight className="w-5 h-5 text-amber-950" />
            </button>
          </div>
        </div>
      </div>

      {/* Selected Island Preview Modal */}
      {selectedPreview && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-amber-50 border-4 border-amber-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-left animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPreview(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-amber-200 hover:bg-amber-300 text-amber-900 flex items-center justify-center font-bold text-lg border border-amber-400"
            >
              ✕
            </button>

            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
              {selectedPreview.islandName}
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-amber-950 font-['Fredoka',sans-serif] mb-3">
              {selectedPreview.title}
            </h3>

            <p className="text-sm text-amber-900/90 leading-relaxed mb-5 bg-amber-100/70 p-3.5 rounded-2xl border border-amber-200">
              {selectedPreview.synopsis}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/80 p-3 rounded-xl border border-amber-200 text-center">
                <span className="text-xs text-slate-500 font-semibold block">Kelime Sayısı</span>
                <span className="text-lg font-bold text-amber-900 font-mono">{selectedPreview.wordCount} Kelime</span>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-amber-200 text-center">
                <span className="text-xs text-slate-500 font-semibold block">Soru Sayısı</span>
                <span className="text-lg font-bold text-emerald-800 font-mono">{selectedPreview.questions.length} Anlama Sorusu</span>
              </div>
            </div>

            {/* Chest Reward Preview */}
            <div className="bg-gradient-to-r from-amber-200 to-yellow-100 p-3.5 rounded-2xl border-2 border-amber-400 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-400/80 flex items-center justify-center text-2xl border border-amber-500 shadow-sm">
                🎁
              </div>
              <div>
                <span className="text-xs font-bold text-amber-900 uppercase block">Sandık Ödülü</span>
                <span className="text-sm font-bold text-amber-950">+{selectedPreview.rewardChest.coins} Altın & {selectedPreview.rewardChest.gemName}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedPreview(null)}
                className="flex-1 py-3 rounded-xl bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold text-sm border border-amber-400 transition-colors"
              >
                Vazgeç
              </button>
              <button
                id="btn-confirm-start-island"
                onClick={() => handleStartAdventure(selectedPreview)}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-sm sm:text-base shadow-lg border-2 border-emerald-400 flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Yelken Aç ve Oku!</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
