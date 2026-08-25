export type Difficulty = "kolay" | "orta" | "ileri";

export type QuestionType = "multiple_choice" | "true_false" | "ordering" | "cloze";

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options: string[];
  correctAnswer: number; // 0, 1, 2, 3 or index
  explanation: string;
  clueSentence?: string;
  category?: "5N1K" | "Neden-Sonuç" | "Ana Fikir" | "Sözcük Bilgisi" | "Olay Sıralama" | "Karakter Analizi";
  // For ordering question types
  orderingItems?: string[];
  correctOrder?: number[];
}

export interface VocabularyWord {
  word: string;
  meaning: string;
  exampleSentence?: string;
}

export interface IslandStory {
  id: string;
  levelNumber: number;
  title: string;
  islandName: string;
  theme: "parrot" | "forest" | "cave" | "shipwreck" | "coral" | "temple" | "castle" | "volcano" | "space" | "custom";
  iconName: string;
  colorScheme: {
    bg: string;
    border: string;
    accent: string;
    badgeBg: string;
    gradient: string;
  };
  synopsis: string;
  readingTimeMinutes: number;
  wordCount: number;
  paragraphs: string[];
  vocabulary: VocabularyWord[];
  questions: Question[];
  rewardChest: {
    coins: number;
    gemType: "ruby" | "emerald" | "sapphire" | "amethyst" | "diamond" | "gold_crown";
    gemName: string;
    gemColor: string;
    badgeTitle: string;
    badgeIcon: string;
    secretLore: string;
  };
  isCustom?: boolean;
}

export interface UserStats {
  playerName: string;
  avatarId: string;
  coins: number;
  completedLevels: string[]; // Island IDs
  unlockedGems: string[]; // Gem names
  earnedBadges: {
    id: string;
    title: string;
    islandTitle: string;
    earnedAt: string;
    icon: string;
  }[];
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  totalStoriesRead: number;
  readingSpeedWpm: number;
  streakDays: number;
  dyslexicFont: boolean;
  fontSize: "sm" | "base" | "lg" | "xl";
  soundEnabled: boolean;
}

export interface MascotSpeech {
  message: string;
  type: "welcome" | "hint" | "congrats" | "vocab" | "reading_tip";
  title?: string;
}
