import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Grade1Dashboard } from "./components/Grade1Dashboard";
import { Grade2Dashboard } from "./components/Grade2Dashboard";
import { Grade3Dashboard } from "./components/Grade3Dashboard";
import { Grade4Dashboard } from "./components/Grade4Dashboard";
import { WordMatchingGame } from "./components/WordMatchingGame";
import { StoryReader } from "./components/StoryReader";
import { QuizGame } from "./components/QuizGame";
import { TreasureChestModal } from "./components/TreasureChestModal";
import { TrophyRoom } from "./components/TrophyRoom";
import { VocabModal } from "./components/VocabModal";
import { AvatarPickerModal } from "./components/AvatarPickerModal";
import { WelcomeOnboardingModal } from "./components/WelcomeOnboardingModal";
import { TeacherDashboard } from "./components/TeacherDashboard";
import { IslandStory, UserStats, GradeLevel } from "./types";
import { sounds } from "./utils/soundEffects";

const STORAGE_KEY = "rabiaogretmen_turkce_stats_v4";

function generateStudentId() {
  return `std-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
}

const DEFAULT_STATS: UserStats = {
  studentId: generateStudentId(),
  playerName: "",
  gradeLevel: 2,
  avatarId: "captain",
  coins: 100,
  completedLevels: [],
  completedGrade1LetterLevels: [],
  completedGrade1SyllableLevels: [],
  completedGrade1SentenceLevels: [],
  completedGrade1ImageLevels: [],
  completedGrade4TimedStories: [],
  completedGrade4TachistoscopeCount: 0,
  completedGrade4RsvpCount: 0,
  completedGrade4PyramidCount: 0,
  bestGrade4Wpm: 0,
  completedSynonymGames: 0,
  completedAntonymGames: 0,
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
  lastActive: new Date().toISOString(),
};

export default function App() {
  const [stats, setStats] = useState<UserStats>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_STATS,
          ...parsed,
          studentId: parsed.studentId || generateStudentId(),
        };
      }
    } catch {}
    return DEFAULT_STATS;
  });

  const [currentGrade, setCurrentGrade] = useState<GradeLevel>(stats.gradeLevel || 2);
  const [currentView, setCurrentView] = useState<
    "grade1" | "grade2" | "grade3" | "grade4" | "story" | "quiz" | "trophy" | "teacher" | "wordGame"
  >(() => {
    if (stats.gradeLevel === 1) return "grade1";
    if (stats.gradeLevel === 3) return "grade3";
    if (stats.gradeLevel === 4) return "grade4";
    return "grade2";
  });

  // Active story and quiz states
  const [activeStory, setActiveStory] = useState<IslandStory | null>(null);
  const [lastQuizCorrectCount, setLastQuizCorrectCount] = useState(0);

  // Active word game states
  const [wordGameMode, setWordGameMode] = useState<"synonym" | "antonym">("antonym");

  // Modals state
  const [showOnboarding, setShowOnboarding] = useState<boolean>(!stats.playerName);
  const [showChestModal, setShowChestModal] = useState(false);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [selectedVocab, setSelectedVocab] = useState<{ word: string; meaning?: string } | null>(null);

  // Save stats to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch {}
  }, [stats]);

  // Sync score with server for Rabia Öğretmen's teacher dashboard
  const syncWithServer = async (userStats: UserStats) => {
    if (!userStats.playerName) return;
    try {
      const totalActivities =
        userStats.completedGrade1LetterLevels.length +
        userStats.completedGrade1SyllableLevels.length +
        userStats.completedGrade1SentenceLevels.length +
        userStats.completedGrade1ImageLevels.length +
        (userStats.completedGrade4TimedStories || []).length +
        (userStats.completedGrade4TachistoscopeCount || 0) +
        (userStats.completedGrade4RsvpCount || 0) +
        (userStats.completedGrade4PyramidCount || 0) +
        userStats.completedSynonymGames +
        userStats.completedAntonymGames;

      await fetch("/api/student/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: userStats.studentId,
          playerName: userStats.playerName,
          gradeLevel: userStats.gradeLevel,
          avatarId: userStats.avatarId,
          coins: userStats.coins,
          completedStoriesCount: userStats.completedLevels.length,
          completedActivitiesCount: totalActivities,
        }),
      });
    } catch (err) {
      // Fallback silently if offline or during local development
    }
  };

  useEffect(() => {
    syncWithServer(stats);
  }, [stats.coins, stats.completedLevels.length, stats.playerName]);

  // Handle grade change
  const handleSelectGrade = (grade: GradeLevel) => {
    sounds.playClick();
    setCurrentGrade(grade);
    setStats((prev) => ({ ...prev, gradeLevel: grade }));
    if (grade === 1) setCurrentView("grade1");
    else if (grade === 2) setCurrentView("grade2");
    else if (grade === 3) setCurrentView("grade3");
    else setCurrentView("grade4");
  };

  // Handle selecting a story to read
  const handleSelectStory = (story: IslandStory) => {
    sounds.playClick();
    setActiveStory(story);
    setCurrentView("story");
    setStats((prev) => ({
      ...prev,
      totalStoriesRead: prev.totalStoriesRead + 1,
      lastActive: new Date().toISOString(),
    }));
  };

  // Handle opening Word Game (synonym / antonym)
  const handleOpenWordGame = (mode: "synonym" | "antonym") => {
    sounds.playClick();
    setWordGameMode(mode);
    setCurrentView("wordGame");
  };

  // Complete Quiz & Unlock Treasure
  const handleCompleteQuiz = (correctAnswersCount: number) => {
    if (!activeStory) return;

    setLastQuizCorrectCount(correctAnswersCount);
    const isFirstTime = !stats.completedLevels.includes(activeStory.id);
    const earnedCoins = isFirstTime ? activeStory.rewardChest.coins : 20;

    setStats((prev) => {
      const alreadyCompleted = prev.completedLevels.includes(activeStory.id);
      const newCompleted = alreadyCompleted
        ? prev.completedLevels
        : [...prev.completedLevels, activeStory.id];

      const newGems =
        alreadyCompleted || prev.unlockedGems.includes(activeStory.rewardChest.gemName)
          ? prev.unlockedGems
          : [...prev.unlockedGems, activeStory.rewardChest.gemName];

      const alreadyHasBadge = prev.earnedBadges.some((b) => b.id === activeStory.id);
      const newBadges = alreadyHasBadge
        ? prev.earnedBadges
        : [
            ...prev.earnedBadges,
            {
              id: activeStory.id,
              title: activeStory.rewardChest.badgeTitle,
              islandTitle: activeStory.title,
              earnedAt: new Date().toLocaleDateString("tr-TR"),
              icon: activeStory.rewardChest.badgeIcon,
            },
          ];

      const updated = {
        ...prev,
        coins: prev.coins + earnedCoins,
        completedLevels: newCompleted,
        unlockedGems: newGems,
        earnedBadges: newBadges,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + activeStory.questions.length,
        totalCorrectAnswers: prev.totalCorrectAnswers + correctAnswersCount,
        lastActive: new Date().toISOString(),
      };

      syncWithServer(updated);
      return updated;
    });

    setShowChestModal(true);
  };

  const handleReturnToDashboard = () => {
    if (currentGrade === 1) setCurrentView("grade1");
    else if (currentGrade === 2) setCurrentView("grade2");
    else if (currentGrade === 3) setCurrentView("grade3");
    else setCurrentView("grade4");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between text-slate-900 font-sans selection:bg-amber-300 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar
        stats={stats}
        currentGrade={currentGrade}
        onSelectGrade={handleSelectGrade}
        onOpenTrophyRoom={() => {
          sounds.playClick();
          setCurrentView("trophy");
        }}
        onOpenTeacherDashboard={() => {
          sounds.playClick();
          setCurrentView("teacher");
        }}
        onOpenAvatarPicker={() => {
          sounds.playClick();
          setShowAvatarPicker(true);
        }}
        onGoToDashboard={handleReturnToDashboard}
        currentView={currentView}
      />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-3 sm:px-6 py-6">
        {/* VIEW 1: 1. Sınıf Dünyası */}
        {currentView === "grade1" && (
          <Grade1Dashboard
            userStats={stats}
            onUpdateStats={setStats}
            onPlaySound={(type) => {
              if (type === "correct") sounds.playCorrect();
              else if (type === "wrong") sounds.playWrong();
              else if (type === "chest") sounds.playTreasureFanfare();
              else sounds.playClick();
            }}
          />
        )}

        {/* VIEW 2: 2. Sınıf Dünyası */}
        {currentView === "grade2" && (
          <Grade2Dashboard
            userStats={stats}
            onSelectStory={handleSelectStory}
            onOpenWordGame={handleOpenWordGame}
          />
        )}

        {/* VIEW 3: 3. Sınıf Dünyası */}
        {currentView === "grade3" && (
          <Grade3Dashboard
            userStats={stats}
            onSelectStory={handleSelectStory}
            onOpenWordGame={handleOpenWordGame}
          />
        )}

        {/* VIEW 4: 4. Sınıf Hızlı Okuma & Anlama Dünyası */}
        {currentView === "grade4" && (
          <Grade4Dashboard
            userStats={stats}
            onUpdateStats={setStats}
            onOpenWordGame={handleOpenWordGame}
            onPlaySound={(type) => {
              if (type === "correct") sounds.playCorrect();
              else if (type === "wrong") sounds.playWrong();
              else if (type === "chest") sounds.playTreasureFanfare();
              else sounds.playClick();
            }}
          />
        )}

        {/* VIEW 5: Word Matching Game (Synonyms & Antonyms) */}
        {currentView === "wordGame" && (
          <WordMatchingGame
            gradeLevel={currentGrade === 1 ? 2 : currentGrade}
            modeType={wordGameMode}
            userStats={stats}
            onUpdateStats={setStats}
            onBack={handleReturnToDashboard}
            onPlaySound={(type) => {
              if (type === "correct") sounds.playCorrect();
              else if (type === "wrong") sounds.playWrong();
              else if (type === "chest") sounds.playTreasureFanfare();
              else sounds.playClick();
            }}
          />
        )}

        {/* VIEW 6: Story Reader */}
        {currentView === "story" && activeStory && (
          <StoryReader
            story={activeStory}
            onGoToQuestions={() => {
              sounds.playClick();
              setCurrentView("quiz");
            }}
            onBackToMap={handleReturnToDashboard}
            onSelectWord={(word, meaning) => setSelectedVocab({ word, meaning })}
          />
        )}

        {/* VIEW 7: Quiz Game */}
        {currentView === "quiz" && activeStory && (
          <QuizGame
            story={activeStory}
            onCompleteQuiz={handleCompleteQuiz}
            onBackToStory={() => {
              sounds.playClick();
              setCurrentView("story");
            }}
            onBackToMap={handleReturnToDashboard}
          />
        )}

        {/* VIEW 8: Trophy Room */}
        {currentView === "trophy" && (
          <TrophyRoom stats={stats} onBackToMap={handleReturnToDashboard} />
        )}

        {/* VIEW 9: Teacher Dashboard */}
        {currentView === "teacher" && (
          <TeacherDashboard
            onClose={handleReturnToDashboard}
            currentStudentId={stats.studentId}
          />
        )}
      </main>

      {/* Footer with rabiaogretmen signature */}
      <Footer
        onOpenTeacherBoard={() => {
          sounds.playClick();
          setCurrentView("teacher");
        }}
        onSelectGrade={handleSelectGrade}
      />

      {/* MODALS */}
      {/* 1. Onboarding Modal for Name & Grade */}
      <WelcomeOnboardingModal
        isOpen={showOnboarding}
        initialStats={stats}
        onComplete={(name, grade, avatarId) => {
          sounds.playCoin();
          const updated: UserStats = {
            ...stats,
            playerName: name,
            gradeLevel: grade,
            avatarId: avatarId,
            lastActive: new Date().toISOString(),
          };
          setStats(updated);
          setCurrentGrade(grade);
          setShowOnboarding(false);
          if (grade === 1) setCurrentView("grade1");
          else if (grade === 2) setCurrentView("grade2");
          else if (grade === 3) setCurrentView("grade3");
          else setCurrentView("grade4");
          syncWithServer(updated);
        }}
      />

      {/* 2. Avatar / Profile Picker Modal */}
      {showAvatarPicker && (
        <AvatarPickerModal
          currentName={stats.playerName}
          currentAvatar={stats.avatarId}
          onSave={(name, avatarId) => {
            const updated = { ...stats, playerName: name, avatarId };
            setStats(updated);
            syncWithServer(updated);
          }}
          onClose={() => setShowAvatarPicker(false)}
        />
      )}

      {/* 3. Vocabulary Detective Modal */}
      {selectedVocab && (
        <VocabModal
          word={selectedVocab.word}
          defaultMeaning={selectedVocab.meaning}
          onClose={() => setSelectedVocab(null)}
        />
      )}

      {/* 4. Treasure Chest Modal */}
      {showChestModal && activeStory && (
        <TreasureChestModal
          story={activeStory}
          correctAnswersCount={lastQuizCorrectCount}
          onClaimReward={() => {
            setShowChestModal(false);
            handleReturnToDashboard();
          }}
          onGoToTrophyRoom={() => {
            setShowChestModal(false);
            setCurrentView("trophy");
          }}
        />
      )}
    </div>
  );
}
