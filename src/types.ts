export type GradeLevel = 1 | 2 | 3 | 4;

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
}

export interface VocabularyWord {
  word: string;
  meaning: string;
  exampleSentence?: string;
}

export interface IslandStory {
  id: string;
  levelNumber: number;
  gradeLevel?: 2 | 3 | 4;
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
}

export interface WordPair {
  id: string;
  word: string;
  target: string; // The matching synonym or antonym
  type: "synonym" | "antonym";
  gradeLevel: 2 | 3 | 4;
  hint?: string;
}

// 1. Sınıf Etkinlik Tipleri & Harf Grupları (Yeni Müfredat)
export interface LetterGroupInfo {
  groupNumber: 1 | 2 | 3 | 4 | 5;
  name: string;
  letters: string[];
  allAvailableLetters: string[];
  themeTitle: string;
  badgeEmoji: string;
  description: string;
  colorClass: string;
}

export interface LetterBlendLevel {
  id: string;
  targetWord: string; // Syllable or word
  displayHint: string;
  imageEmoji: string;
  letters: string[];
  audioPhonetics?: string;
  rewardCoins: number;
  letterGroup?: 1 | 2 | 3 | 4 | 5;
}

export interface SyllableWordLevel {
  id: string;
  targetWord: string;
  syllables: string[];
  imageEmoji: string;
  hint: string;
  rewardCoins: number;
  letterGroup?: 1 | 2 | 3 | 4 | 5;
}

export interface SentenceTrainLevel {
  id: string;
  sentenceWords: string[]; // in correct order
  jumbledWords: string[];
  imageEmoji: string;
  rewardCoins: number;
  letterGroup?: 1 | 2 | 3 | 4 | 5;
}

export interface WordImageMatchLevel {
  id: string;
  targetWord: string;
  options: { emoji: string; label: string; isCorrect: boolean }[];
  rewardCoins: number;
}

// 1. Sınıf Okuma Metni & Metin Tamamlama (Cloze) Tipi
export interface Grade1StoryClozeItem {
  id: string;
  sentenceWithBlank: string; // e.g. "Ali sabah erkenden bahçeye çıktı ve [___] sevdi."
  targetWord: string; // The correct word to fill in
  options: string[]; // e.g. ["tayı", "kuşu", "ağacı"]
  explanation?: string;
}

export interface Grade1ReadingStory {
  id: string;
  levelNumber: number;
  title: string;
  iconEmoji: string;
  readingText: string;
  sentences: string[];
  wordCount: number;
  synopsis: string;
  clozeItems: Grade1StoryClozeItem[];
  rewardCoins: number;
}

// 4. Sınıf Hızlı Okuma & Süreli Okuma Tipleri
export interface Grade4TimedStory {
  id: string;
  levelNumber: number;
  title: string;
  category: "Bilim & Uzay" | "Tarih & Keşif" | "Doğa & Çevre" | "Macera & Gizem" | "Teknoloji & Yapay Zeka" | "Edebiyat & Sanat";
  iconEmoji: string;
  synopsis: string;
  wordCount: number;
  targetSecondsStandard: number; // 60-90s
  targetSecondsSpeedMaster: number; // 35-50s
  paragraphs: string[];
  vocabulary: VocabularyWord[];
  questions: Question[];
  rewardCoins: number;
  difficulty: "Kolay" | "Orta" | "Usta";
}

export interface Grade4TachistoscopeItem {
  id: string;
  targetWordOrPhrase: string;
  distractors: string[];
  displayDurationMs: number; // e.g. 250ms, 180ms, 120ms
  category: string;
  rewardCoins: number;
}

export interface Grade4PyramidExercise {
  id: string;
  title: string;
  description: string;
  focusPointEmoji: string;
  lines: { leftWord: string; centerSymbol: string; rightWord: string }[];
  rewardCoins: number;
}

export interface UserStats {
  studentId: string;
  playerName: string;
  gradeLevel: GradeLevel;
  avatarId: string;
  coins: number;
  completedLevels: string[]; // Island IDs or Activity IDs
  completedGrade1LetterLevels: string[]; // Hece Levels
  completedGrade1SyllableLevels: string[]; // Kelime Levels
  completedGrade1SentenceLevels: string[]; // Cümle Levels
  completedGrade1ImageLevels: string[];
  completedGrade1StoryLevels?: string[]; // 1. Sınıf Metin Tamamlama
  completedGrade4TimedStories?: string[]; // 4. Sınıf Süreli Okuma Metinleri
  completedGrade4TachistoscopeCount?: number; // 4. Sınıf Takistoskop tamamlanma
  completedGrade4RsvpCount?: number; // 4. Sınıf Kayan Kelime
  completedGrade4PyramidCount?: number; // 4. Sınıf Piramit
  bestGrade4Wpm?: number; // Öğrencinin en yüksek WPM skoru
  completedSynonymGames: number;
  completedAntonymGames: number;
  unlockedGems: string[];
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
  lastActive: string;
}

export interface StudentLeaderboardEntry {
  studentId: string;
  playerName: string;
  gradeLevel: GradeLevel;
  avatarId: string;
  coins: number;
  completedStoriesCount: number;
  completedActivitiesCount: number;
  lastActive: string;
}
