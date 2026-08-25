import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { TreasureMap } from "./components/TreasureMap";
import { StoryReader } from "./components/StoryReader";
import { QuizGame } from "./components/QuizGame";
import { TreasureChestModal } from "./components/TreasureChestModal";
import { TrophyRoom } from "./components/TrophyRoom";
import { VocabModal } from "./components/VocabModal";
import { AIGeneratorModal } from "./components/AIGeneratorModal";
import { AvatarPickerModal } from "./components/AvatarPickerModal";
import { INITIAL_STORIES } from "./data/initialStories";
import { IslandStory, UserStats } from "./types";
import { sounds } from "./utils/soundEffects";

const STORAGE_KEY = "hazine_avi_user_stats_v2";
const STORIES_STORAGE_KEY = "hazine_avi_custom_stories_v2";

const DEFAULT_STATS: UserStats = {
  playerName: "Efe Kaşif",
  avatarId: "captain",
  coins: 50,
  completedLevels: [],
  unlockedGems: [],
  earnedBadges: [],
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
  totalStoriesRead: 0,
  readingSpeedWpm: 120,
  streakDays: 1,
  dyslexicFont: false,
  fontSize: "lg",
  soundEnabled: true,
};

export default function App() {
  const [stories, setStories] = useState<IslandStory[]>(() => {
    try {
      const saved = localStorage.getItem(STORIES_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...INITIAL_STORIES, ...parsed];
      }
    } catch {}
    return INITIAL_STORIES;
  });

  const [stats, setStats] = useState<UserStats>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_STATS, ...JSON.parse(saved) };
      }
    } catch {}
    return DEFAULT_STATS;
  });

  // Navigation state
  const [currentView, setCurrentView] = useState<"map" | "story" | "quiz" | "trophy">("map");
  const [activeStory, setActiveStory] = useState<IslandStory | null>(null);

  // Modals state
  const [showChestModal, setShowChestModal] = useState(false);
  const [lastQuizCorrectCount, setLastQuizCorrectCount] = useState(0);
  const [showAIGenerator, setShowAIGenerator] = useState(false);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [selectedVocab, setSelectedVocab] = useState<{ word: string; meaning?: string } | null>(null);

  // Save stats to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch {}
  }, [stats]);

  // Handle selecting an island on the map
  const handleSelectIsland = (story: IslandStory) => {
    setActiveStory(story);
    setCurrentView("story");
    // Increment total read stats
    setStats((prev) => ({
      ...prev,
      totalStoriesRead: prev.totalStoriesRead + 1,
    }));
  };

  // Complete Quiz & Unlock Treasure
  const handleCompleteQuiz = (correctAnswersCount: number) => {
    if (!activeStory) return;

    setLastQuizCorrectCount(correctAnswersCount);
    setShowChestModal(true);

    const isAlreadyCompleted = stats.completedLevels.includes(activeStory.id);

    setStats((prev) => {
      const updatedLevels = isAlreadyCompleted
        ? prev.completedLevels
        : [...prev.completedLevels, activeStory.id];

      const updatedGems = prev.unlockedGems.includes(activeStory.rewardChest.gemName)
        ? prev.unlockedGems
        : [...prev.unlockedGems, activeStory.rewardChest.gemName];

      const hasBadge = prev.earnedBadges.some((b) => b.title === activeStory.rewardChest.badgeTitle);
      const updatedBadges = hasBadge
        ? prev.earnedBadges
        : [
            ...prev.earnedBadges,
            {
              id: `badge-${activeStory.id}`,
              title: activeStory.rewardChest.badgeTitle,
              islandTitle: activeStory.title,
              earnedAt: new Date().toLocaleDateString("tr-TR"),
              icon: activeStory.rewardChest.badgeIcon,
            },
          ];

      return {
        ...prev,
        coins: prev.coins + activeStory.rewardChest.coins,
        completedLevels: updatedLevels,
        unlockedGems: updatedGems,
        earnedBadges: updatedBadges,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + activeStory.questions.length,
        totalCorrectAnswers: prev.totalCorrectAnswers + correctAnswersCount,
      };
    });
  };

  // Claim reward and return to map
  const handleClaimReward = () => {
    setShowChestModal(false);
    setCurrentView("map");
  };

  // Handle adding an AI Generated story
  const handleStoryGenerated = (newStory: IslandStory) => {
    setShowAIGenerator(false);
    setStories((prev) => {
      const updated = [...prev, newStory];
      try {
        const customOnly = updated.filter((s) => s.isCustom);
        localStorage.setItem(STORIES_STORAGE_KEY, JSON.stringify(customOnly));
      } catch {}
      return updated;
    });

    // Auto-launch the generated adventure!
    setActiveStory(newStory);
    setCurrentView("story");
  };

  // Save Avatar & Profile Name
  const handleSaveProfile = (playerName: string, avatarId: string) => {
    setStats((prev) => ({
      ...prev,
      playerName,
      avatarId,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50 text-slate-900 font-['Quicksand',sans-serif]">
      {/* Navigation Header */}
      <Navbar
        stats={stats}
        currentView={currentView}
        onGoToMap={() => {
          sounds.playClick();
          setCurrentView("map");
        }}
        onOpenTrophyRoom={() => {
          sounds.playClick();
          setCurrentView("trophy");
        }}
        onOpenAIGenerator={() => {
          sounds.playClick();
          setShowAIGenerator(true);
        }}
        onOpenAvatarPicker={() => {
          sounds.playClick();
          setShowAvatarPicker(true);
        }}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentView === "map" && (
          <TreasureMap
            stories={stories}
            stats={stats}
            onSelectIsland={handleSelectIsland}
            onOpenAIGenerator={() => setShowAIGenerator(true)}
          />
        )}

        {currentView === "story" && activeStory && (
          <StoryReader
            story={activeStory}
            onGoToQuestions={() => setCurrentView("quiz")}
            onBackToMap={() => setCurrentView("map")}
            onSelectWord={(word, meaning) => setSelectedVocab({ word, meaning })}
          />
        )}

        {currentView === "quiz" && activeStory && (
          <QuizGame
            story={activeStory}
            onCompleteQuiz={handleCompleteQuiz}
            onBackToStory={() => setCurrentView("story")}
            onBackToMap={() => setCurrentView("map")}
          />
        )}

        {currentView === "trophy" && (
          <TrophyRoom
            stats={stats}
            onBackToMap={() => setCurrentView("map")}
          />
        )}
      </main>

      {/* Modals */}
      {showChestModal && activeStory && (
        <TreasureChestModal
          story={activeStory}
          correctAnswersCount={lastQuizCorrectCount}
          onClaimReward={handleClaimReward}
          onGoToTrophyRoom={() => {
            setShowChestModal(false);
            setCurrentView("trophy");
          }}
        />
      )}

      {showAIGenerator && (
        <AIGeneratorModal
          onClose={() => setShowAIGenerator(false)}
          onStoryGenerated={handleStoryGenerated}
        />
      )}

      {showAvatarPicker && (
        <AvatarPickerModal
          currentName={stats.playerName}
          currentAvatar={stats.avatarId}
          onSave={handleSaveProfile}
          onClose={() => setShowAvatarPicker(false)}
        />
      )}

      {selectedVocab && (
        <VocabModal
          word={selectedVocab.word}
          defaultMeaning={selectedVocab.meaning}
          onClose={() => setSelectedVocab(null)}
        />
      )}
    </div>
  );
}
