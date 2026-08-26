import React, { useState, useMemo } from "react";
import { UserStats, Grade1ReadingStory, Grade1StoryClozeItem, LetterGroupInfo } from "../types";
import {
  GRADE1_LETTER_GROUPS,
  GRADE1_HECE_LEVELS,
  GRADE1_KELIME_LEVELS,
  GRADE1_CUMLE_LEVELS,
  GRADE1_READING_STORIES,
} from "../data/grade1Activities";
import {
  Sparkles,
  Volume2,
  CheckCircle2,
  RefreshCw,
  Coins,
  ArrowRight,
  Trophy,
  Star,
  Flame,
  BookOpen,
  Lock,
  Unlock,
  HelpCircle,
  Play,
  RotateCcw,
  Award,
  ChevronRight,
  ChevronLeft,
  Check,
  X,
  Layers,
  GraduationCap,
} from "lucide-react";
import confetti from "canvas-confetti";

interface Grade1DashboardProps {
  userStats: UserStats;
  onUpdateStats: (updater: (prev: UserStats) => UserStats) => void;
  onPlaySound?: (type: "correct" | "wrong" | "chest" | "click") => void;
}

type Grade1Tab = "hece" | "kelime" | "cumle" | "metinler";

export const Grade1Dashboard: React.FC<Grade1DashboardProps> = ({
  userStats,
  onUpdateStats,
  onPlaySound,
}) => {
  const [activeTab, setActiveTab] = useState<Grade1Tab>("hece");

  // SEÇİLİ HARF GRUBU (1, 2, 3, 4, 5) - Yeni Müfredat Sıralaması
  const [selectedGroupNum, setSelectedGroupNum] = useState<1 | 2 | 3 | 4 | 5>(1);

  // 1. HECE OLUŞTURMA STATE
  const [heceIdx, setHeceIdx] = useState(0);
  const [placedLetters, setPlacedLetters] = useState<string[]>([]);
  const [pickedLetterIndices, setPickedLetterIndices] = useState<number[]>([]);
  const [heceFeedback, setHeceFeedback] = useState<"none" | "correct" | "wrong">("none");

  // 2. KELİME OLUŞTURMA STATE
  const [kelimeIdx, setKelimeIdx] = useState(0);
  const [placedSyllables, setPlacedSyllables] = useState<string[]>([]);
  const [pickedSyllableIndices, setPickedSyllableIndices] = useState<number[]>([]);
  const [kelimeFeedback, setKelimeFeedback] = useState<"none" | "correct" | "wrong">("none");

  // 3. CÜMLE OLUŞTURMA STATE
  const [cumleIdx, setCumleIdx] = useState(0);
  const [placedWords, setPlacedWords] = useState<string[]>([]);
  const [pickedWordIndices, setPickedWordIndices] = useState<number[]>([]);
  const [cumleFeedback, setCumleFeedback] = useState<"none" | "correct" | "wrong">("none");

  // 4. METİNLER STATE
  const [selectedStory, setSelectedStory] = useState<Grade1ReadingStory | null>(
    GRADE1_READING_STORIES[0] || null
  );
  const [storyMode, setStoryMode] = useState<"read" | "cloze">("read");
  const [clozeIdx, setClozeIdx] = useState(0);
  const [selectedClozeOption, setSelectedClozeOption] = useState<string | null>(null);
  const [clozeFeedback, setClozeFeedback] = useState<"none" | "correct" | "wrong">("none");
  const [clozeAnswers, setClozeAnswers] = useState<Record<string, string>>({});
  const [isStoryCompleted, setIsStoryCompleted] = useState(false);

  // Text-to-Speech Seslendirme
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "tr-TR";
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Aktif Harf Grubu Bilgisi
  const activeGroupInfo = useMemo(() => {
    return (
      GRADE1_LETTER_GROUPS.find((g) => g.groupNumber === selectedGroupNum) ||
      GRADE1_LETTER_GROUPS[0]
    );
  }, [selectedGroupNum]);

  // Filtrelenmiş Seviyeler (Seçili Harf Grubuna Göre)
  const currentGroupHeceLevels = useMemo(() => {
    const filtered = GRADE1_HECE_LEVELS.filter((l) => l.letterGroup === selectedGroupNum);
    return filtered.length > 0 ? filtered : GRADE1_HECE_LEVELS;
  }, [selectedGroupNum]);

  const currentGroupKelimeLevels = useMemo(() => {
    const filtered = GRADE1_KELIME_LEVELS.filter((l) => l.letterGroup === selectedGroupNum);
    return filtered.length > 0 ? filtered : GRADE1_KELIME_LEVELS;
  }, [selectedGroupNum]);

  const currentGroupCumleLevels = useMemo(() => {
    const filtered = GRADE1_CUMLE_LEVELS.filter((l) => l.letterGroup === selectedGroupNum);
    return filtered.length > 0 ? filtered : GRADE1_CUMLE_LEVELS;
  }, [selectedGroupNum]);

  // Harf Grubu Değiştirme
  const handleSelectLetterGroup = (grpNum: 1 | 2 | 3 | 4 | 5) => {
    setSelectedGroupNum(grpNum);
    setHeceIdx(0);
    setPlacedLetters([]);
    setPickedLetterIndices([]);
    setHeceFeedback("none");

    setKelimeIdx(0);
    setPlacedSyllables([]);
    setPickedSyllableIndices([]);
    setKelimeFeedback("none");

    setCumleIdx(0);
    setPlacedWords([]);
    setPickedWordIndices([]);
    setCumleFeedback("none");
  };

  // Harf Grubu İlerleme Durumu Hesaplama
  const groupStats = useMemo(() => {
    return GRADE1_LETTER_GROUPS.map((grp) => {
      const heceInGrp = GRADE1_HECE_LEVELS.filter((l) => l.letterGroup === grp.groupNumber);
      const kelimeInGrp = GRADE1_KELIME_LEVELS.filter((l) => l.letterGroup === grp.groupNumber);
      const completedHece = heceInGrp.filter((l) =>
        userStats.completedGrade1LetterLevels?.includes(l.id)
      ).length;
      const completedKelime = kelimeInGrp.filter((l) =>
        userStats.completedGrade1SyllableLevels?.includes(l.id)
      ).length;

      const totalItems = heceInGrp.length + kelimeInGrp.length;
      const completedItems = completedHece + completedKelime;

      return {
        ...grp,
        totalItems,
        completedItems,
        percent: totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0,
      };
    });
  }, [userStats]);

  // Metinler kilit kontrolü
  const requiredCoinsForStories = 50;
  const isStoriesUnlocked =
    userStats.coins >= requiredCoinsForStories ||
    (userStats.completedGrade1LetterLevels?.length || 0) +
      (userStats.completedGrade1SyllableLevels?.length || 0) +
      (userStats.completedGrade1SentenceLevels?.length || 0) >=
      2;

  // -------------------------------------------------------------
  // 1. HECE OLUŞTURMA LOGIC
  // -------------------------------------------------------------
  const currentHece =
    currentGroupHeceLevels[heceIdx] || currentGroupHeceLevels[0] || GRADE1_HECE_LEVELS[0];
  const targetHece = currentHece.targetWord;

  const handlePickLetter = (letter: string, index: number) => {
    if (pickedLetterIndices.includes(index)) return;
    onPlaySound?.("click");
    speakText(letter);

    const newPlaced = [...placedLetters, letter];
    const newPickedIndices = [...pickedLetterIndices, index];
    setPlacedLetters(newPlaced);
    setPickedLetterIndices(newPickedIndices);

    if (newPlaced.length === targetHece.length) {
      const formed = newPlaced.join("");
      if (formed.toUpperCase() === targetHece.toUpperCase()) {
        setHeceFeedback("correct");
        onPlaySound?.("chest");
        confetti({ particleCount: 35, spread: 60, origin: { y: 0.7 } });
        speakText(targetHece + "! Harika hece oluşturdun!");

        onUpdateStats((prev) => {
          const isFirst = !prev.completedGrade1LetterLevels.includes(currentHece.id);
          return {
            ...prev,
            coins: isFirst ? prev.coins + currentHece.rewardCoins : prev.coins + 5,
            completedGrade1LetterLevels: isFirst
              ? [...prev.completedGrade1LetterLevels, currentHece.id]
              : prev.completedGrade1LetterLevels,
            totalCorrectAnswers: prev.totalCorrectAnswers + 1,
            lastActive: new Date().toISOString(),
          };
        });
      } else {
        setHeceFeedback("wrong");
        onPlaySound?.("wrong");
      }
    }
  };

  const handleRemovePlacedLetter = (indexToRemove: number) => {
    const newPlaced = placedLetters.filter((_, i) => i !== indexToRemove);
    const newPickedIndices = pickedLetterIndices.filter((_, i) => i !== indexToRemove);
    setPlacedLetters(newPlaced);
    setPickedLetterIndices(newPickedIndices);
    setHeceFeedback("none");
  };

  const handleResetHece = () => {
    setPlacedLetters([]);
    setPickedLetterIndices([]);
    setHeceFeedback("none");
  };

  const handleNextHece = () => {
    handleResetHece();
    if (heceIdx < currentGroupHeceLevels.length - 1) {
      setHeceIdx((prev) => prev + 1);
    } else {
      // Harf grubunun son hecesi bitince
      if (selectedGroupNum < 5) {
        confetti({ particleCount: 60, spread: 80, origin: { y: 0.5 } });
        const nextGroup = (selectedGroupNum + 1) as 1 | 2 | 3 | 4 | 5;
        handleSelectLetterGroup(nextGroup);
      } else {
        setHeceIdx(0);
      }
    }
  };

  const handlePrevHece = () => {
    handleResetHece();
    setHeceIdx((prev) => (prev > 0 ? prev - 1 : currentGroupHeceLevels.length - 1));
  };

  // -------------------------------------------------------------
  // 2. KELİME OLUŞTURMA LOGIC
  // -------------------------------------------------------------
  const currentKelime =
    currentGroupKelimeLevels[kelimeIdx] ||
    currentGroupKelimeLevels[0] ||
    GRADE1_KELIME_LEVELS[0];
  const targetKelimeWord = currentKelime.targetWord;

  const shuffledSyllables = useMemo(() => {
    const arr = [...currentKelime.syllables];
    return arr.length > 1 ? [...arr].reverse() : arr;
  }, [currentKelime]);

  const handlePickSyllable = (syl: string, index: number) => {
    if (pickedSyllableIndices.includes(index)) return;
    onPlaySound?.("click");
    speakText(syl);

    const newPlaced = [...placedSyllables, syl];
    const newPickedIndices = [...pickedSyllableIndices, index];
    setPlacedSyllables(newPlaced);
    setPickedSyllableIndices(newPickedIndices);

    if (newPlaced.length === currentKelime.syllables.length) {
      const formedWord = newPlaced.join("");
      if (formedWord.toUpperCase() === targetKelimeWord.toUpperCase()) {
        setKelimeFeedback("correct");
        onPlaySound?.("chest");
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
        speakText(targetKelimeWord + "! Tebrikler, kelimeyi buldun!");

        onUpdateStats((prev) => {
          const isFirst = !prev.completedGrade1SyllableLevels.includes(currentKelime.id);
          return {
            ...prev,
            coins: isFirst ? prev.coins + currentKelime.rewardCoins : prev.coins + 5,
            completedGrade1SyllableLevels: isFirst
              ? [...prev.completedGrade1SyllableLevels, currentKelime.id]
              : prev.completedGrade1SyllableLevels,
            totalCorrectAnswers: prev.totalCorrectAnswers + 1,
            lastActive: new Date().toISOString(),
          };
        });
      } else {
        setKelimeFeedback("wrong");
        onPlaySound?.("wrong");
      }
    }
  };

  const handleRemovePlacedSyllable = (indexToRemove: number) => {
    const newPlaced = placedSyllables.filter((_, i) => i !== indexToRemove);
    const newPickedIndices = pickedSyllableIndices.filter((_, i) => i !== indexToRemove);
    setPlacedSyllables(newPlaced);
    setPickedSyllableIndices(newPickedIndices);
    setKelimeFeedback("none");
  };

  const handleResetKelime = () => {
    setPlacedSyllables([]);
    setPickedSyllableIndices([]);
    setKelimeFeedback("none");
  };

  const handleNextKelime = () => {
    handleResetKelime();
    if (kelimeIdx < currentGroupKelimeLevels.length - 1) {
      setKelimeIdx((prev) => prev + 1);
    } else {
      if (selectedGroupNum < 5) {
        confetti({ particleCount: 60, spread: 80, origin: { y: 0.5 } });
        const nextGroup = (selectedGroupNum + 1) as 1 | 2 | 3 | 4 | 5;
        handleSelectLetterGroup(nextGroup);
      } else {
        setKelimeIdx(0);
      }
    }
  };

  const handlePrevKelime = () => {
    handleResetKelime();
    setKelimeIdx((prev) => (prev > 0 ? prev - 1 : currentGroupKelimeLevels.length - 1));
  };

  // -------------------------------------------------------------
  // 3. CÜMLE OLUŞTURMA LOGIC
  // -------------------------------------------------------------
  const currentCumle =
    currentGroupCumleLevels[cumleIdx] ||
    currentGroupCumleLevels[0] ||
    GRADE1_CUMLE_LEVELS[0];
  const targetSentence = currentCumle.sentenceWords.join(" ");

  const handlePickWord = (word: string, index: number) => {
    if (pickedWordIndices.includes(index)) return;
    onPlaySound?.("click");
    speakText(word);

    const newPlaced = [...placedWords, word];
    const newPickedIndices = [...pickedWordIndices, index];
    setPlacedWords(newPlaced);
    setPickedWordIndices(newPickedIndices);

    if (newPlaced.length === currentCumle.sentenceWords.length) {
      const formedSentence = newPlaced.join(" ");
      if (formedSentence === targetSentence) {
        setCumleFeedback("correct");
        onPlaySound?.("chest");
        confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
        speakText(targetSentence + "! Harika bir cümle kurdun!");

        onUpdateStats((prev) => {
          const isFirst = !prev.completedGrade1SentenceLevels.includes(currentCumle.id);
          return {
            ...prev,
            coins: isFirst ? prev.coins + currentCumle.rewardCoins : prev.coins + 10,
            completedGrade1SentenceLevels: isFirst
              ? [...prev.completedGrade1SentenceLevels, currentCumle.id]
              : prev.completedGrade1SentenceLevels,
            totalCorrectAnswers: prev.totalCorrectAnswers + 1,
            lastActive: new Date().toISOString(),
          };
        });
      } else {
        setCumleFeedback("wrong");
        onPlaySound?.("wrong");
      }
    }
  };

  const handleRemovePlacedWord = (indexToRemove: number) => {
    const newPlaced = placedWords.filter((_, i) => i !== indexToRemove);
    const newPickedIndices = pickedWordIndices.filter((_, i) => i !== indexToRemove);
    setPlacedWords(newPlaced);
    setPickedWordIndices(newPickedIndices);
    setCumleFeedback("none");
  };

  const handleResetCumle = () => {
    setPlacedWords([]);
    setPickedWordIndices([]);
    setCumleFeedback("none");
  };

  const handleNextCumle = () => {
    handleResetCumle();
    if (cumleIdx < currentGroupCumleLevels.length - 1) {
      setCumleIdx((prev) => prev + 1);
    } else {
      setCumleIdx(0);
    }
  };

  const handlePrevCumle = () => {
    handleResetCumle();
    setCumleIdx((prev) => (prev > 0 ? prev - 1 : currentGroupCumleLevels.length - 1));
  };

  // -------------------------------------------------------------
  // 4. METİNLER & CLOZE LOGIC
  // -------------------------------------------------------------
  const handleSelectStory = (story: Grade1ReadingStory) => {
    setSelectedStory(story);
    setStoryMode("read");
    setClozeIdx(0);
    setSelectedClozeOption(null);
    setClozeFeedback("none");
    setClozeAnswers({});
    setIsStoryCompleted(false);
  };

  const currentClozeItem: Grade1StoryClozeItem | undefined =
    selectedStory?.clozeItems?.[clozeIdx];

  const handleSelectClozeOption = (option: string) => {
    if (!currentClozeItem || clozeFeedback === "correct") return;
    setSelectedClozeOption(option);
    onPlaySound?.("click");

    if (option.toLowerCase() === currentClozeItem.targetWord.toLowerCase()) {
      setClozeFeedback("correct");
      onPlaySound?.("chest");
      speakText(option + "! Doğru kelime!");

      setClozeAnswers((prev) => ({
        ...prev,
        [currentClozeItem.id]: option,
      }));

      if (selectedStory && clozeIdx === selectedStory.clozeItems.length - 1) {
        setIsStoryCompleted(true);
        confetti({ particleCount: 60, spread: 80, origin: { y: 0.6 } });

        onUpdateStats((prev) => {
          const currentStories = prev.completedGrade1StoryLevels || [];
          const isFirst = !currentStories.includes(selectedStory.id);
          return {
            ...prev,
            coins: isFirst ? prev.coins + selectedStory.rewardCoins : prev.coins + 10,
            completedGrade1StoryLevels: isFirst
              ? [...currentStories, selectedStory.id]
              : currentStories,
            totalStoriesRead: prev.totalStoriesRead + 1,
            totalCorrectAnswers: prev.totalCorrectAnswers + 1,
            lastActive: new Date().toISOString(),
          };
        });
      }
    } else {
      setClozeFeedback("wrong");
      onPlaySound?.("wrong");
    }
  };

  const handleNextClozeQuestion = () => {
    if (selectedStory && clozeIdx < selectedStory.clozeItems.length - 1) {
      setClozeIdx((prev) => prev + 1);
      setSelectedClozeOption(null);
      setClozeFeedback("none");
    }
  };

  return (
    <div id="grade1-dashboard" className="space-y-6 animate-fadeIn pb-12">
      {/* 1. Sınıf Başlık Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl border-4 border-emerald-400/40 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-white/30">
              <GraduationCap className="w-4 h-4 text-amber-300" />
              1. Sınıf Yeni Müfredat Türkçe Dünyası
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              🎒 Harf Gruplarına Göre Hece, Kelime ve Cümle
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base font-medium mt-1 max-w-xl">
              Öğrendiğin harflerle sırayla hece ve kelime oluştur! Öğrenmediğin harflerle karşılaşmazsın.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-900/40 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/20">
            <div className="p-3 bg-amber-400/20 rounded-xl text-amber-300 border border-amber-400/30">
              <Coins className="w-8 h-8 animate-bounce" />
            </div>
            <div>
              <div className="text-xs text-emerald-200 font-bold">Kazandığın Altınlar</div>
              <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono">
                {userStats.coins} 💰
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* YENİ MÜFREDAT HARF GRUBU SEÇİCİ BARI                           */}
      {/* ============================================================== */}
      <div className="bg-slate-900/90 border-2 border-emerald-500/30 rounded-3xl p-4 sm:p-6 shadow-xl space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm sm:text-base font-black text-white">
              Müfredat Harf Grubu Sıralaması:
            </h3>
          </div>
          <span className="text-xs text-emerald-300 font-medium bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
            Kural: Sırayla hece & kelime kurulur
          </span>
        </div>

        {/* 5 Harf Grubu Butonları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {groupStats.map((grp) => {
            const isSelected = selectedGroupNum === grp.groupNumber;
            return (
              <button
                key={`group-btn-${grp.groupNumber}`}
                onClick={() => handleSelectLetterGroup(grp.groupNumber as 1 | 2 | 3 | 4 | 5)}
                className={`p-3.5 rounded-2xl border-2 text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? "bg-gradient-to-br " +
                      grp.colorClass +
                      " text-white border-white scale-[1.03] shadow-lg shadow-emerald-500/20"
                    : "bg-slate-800/90 border-slate-700 hover:bg-slate-800 text-slate-300 hover:border-slate-500"
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <div className="flex items-center gap-1.5 font-black text-xs sm:text-sm">
                    <span>{grp.badgeEmoji}</span>
                    <span>{grp.name}</span>
                  </div>
                  {isSelected && (
                    <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-black uppercase">
                      Aktif
                    </span>
                  )}
                </div>

                {/* Harfler */}
                <div className="font-extrabold text-sm sm:text-base tracking-wider text-amber-300 drop-shadow mb-2">
                  {grp.letters.join(" ")}
                </div>

                {/* İlerleme */}
                <div className="w-full bg-slate-950/40 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-amber-400 h-full rounded-full transition-all"
                    style={{ width: `${grp.percent}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Aktif Harf Grubu Özeti & Bilgi Notu */}
        <div className="bg-slate-850 p-3.5 rounded-2xl border border-slate-750 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-300">
              Şu an öğrenilen harfler ({activeGroupInfo.allAvailableLetters.length} harf):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeGroupInfo.allAvailableLetters.map((ltr, idx) => (
                <span
                  key={`avail-ltr-${idx}`}
                  className="w-6 h-6 rounded-md bg-amber-400 text-slate-950 font-black flex items-center justify-center text-xs shadow-sm"
                >
                  {ltr}
                </span>
              ))}
            </div>
          </div>
          <div className="text-slate-400 font-medium">
            {activeGroupInfo.description}
          </div>
        </div>
      </div>

      {/* 1. Sınıf Ana Menü Sekmeleri */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-900/60 p-2 rounded-2xl border border-slate-700">
        <button
          id="btn-tab-hece"
          onClick={() => setActiveTab("hece")}
          className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base transition-all ${
            activeTab === "hece"
              ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-[1.02]"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          <span className="text-lg">🔤</span>
          <span>Hece Oluşturma</span>
        </button>

        <button
          id="btn-tab-kelime"
          onClick={() => setActiveTab("kelime")}
          className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base transition-all ${
            activeTab === "kelime"
              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20 scale-[1.02]"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          <span className="text-lg">🧩</span>
          <span>Kelime Oluşturma</span>
        </button>

        <button
          id="btn-tab-cumle"
          onClick={() => setActiveTab("cumle")}
          className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base transition-all ${
            activeTab === "cumle"
              ? "bg-purple-500 text-white shadow-lg shadow-purple-500/20 scale-[1.02]"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          <span className="text-lg">🚂</span>
          <span>Cümle Oluşturma</span>
        </button>

        <button
          id="btn-tab-metinler"
          onClick={() => setActiveTab("metinler")}
          className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base transition-all relative ${
            activeTab === "metinler"
              ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-[1.02]"
              : isStoriesUnlocked
              ? "bg-slate-800 text-emerald-400 hover:bg-slate-700 border border-emerald-500/40"
              : "bg-slate-800/60 text-slate-400 hover:bg-slate-800"
          }`}
        >
          <span className="text-lg">{isStoriesUnlocked ? "📖" : "🔒"}</span>
          <span className="flex items-center gap-1.5">
            1. Sınıf Metinler
            {!isStoriesUnlocked && (
              <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded-full font-mono">
                {userStats.coins}/{requiredCoinsForStories}💰
              </span>
            )}
          </span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* 1. SEKMELİ OYUN: HECE OLUŞTURMA                                */}
      {/* ============================================================== */}
      {activeTab === "hece" && (
        <div className="bg-slate-900 border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-xl relative overflow-hidden">
          {/* Seviye Bilgisi & Navigasyon */}
          <div className="flex items-center justify-between max-w-xl mx-auto">
            <button
              onClick={handlePrevHece}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
              title="Önceki Hece"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center">
              <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 font-bold text-xs sm:text-sm">
                {activeGroupInfo.badgeEmoji} {activeGroupInfo.name} • Hece {heceIdx + 1} / {currentGroupHeceLevels.length}
              </span>
              <span className="text-[11px] text-slate-400 mt-1">
                Kullanılan Harfler: {activeGroupInfo.letters.join(", ")}
              </span>
            </div>

            <button
              onClick={handleNextHece}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
              title="Sonraki Hece"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Görsel ve İpucu */}
          <div className="bg-slate-800/80 rounded-2xl p-6 max-w-md mx-auto border border-slate-700 space-y-3">
            <div className="text-6xl sm:text-7xl animate-pulse">{currentHece.imageEmoji}</div>
            <div className="text-base sm:text-lg font-bold text-amber-300">
              {currentHece.displayHint}
            </div>
            <button
              onClick={() => speakText(currentHece.targetWord)}
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-700/60 px-3 py-1.5 rounded-lg border border-slate-600"
            >
              <Volume2 className="w-4 h-4 text-amber-400" />
              Sesli Dinle
            </button>
          </div>

          {/* Oluşturulan Hece Kutusu / Yuvalar */}
          <div>
            <div className="text-xs text-slate-400 uppercase font-black tracking-wider mb-2">
              Harfleri Doğru Sırayla Tıkla ve Heceyi Tamamla:
            </div>
            <div className="flex items-center justify-center gap-3 min-h-[70px]">
              {Array.from({ length: targetHece.length }).map((_, idx) => {
                const letter = placedLetters[idx];
                return (
                  <button
                    key={`slot-${idx}`}
                    onClick={() => letter && handleRemovePlacedLetter(idx)}
                    title={letter ? "Harfi geri al" : "Boş harf yuvası"}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-4 flex items-center justify-center text-2xl sm:text-3xl font-black transition-all ${
                      letter
                        ? heceFeedback === "correct"
                          ? "bg-emerald-500 border-emerald-300 text-white scale-105 shadow-lg shadow-emerald-500/30"
                          : heceFeedback === "wrong"
                          ? "bg-rose-500 border-rose-300 text-white animate-shake"
                          : "bg-amber-400 border-amber-200 text-slate-950 hover:scale-95 cursor-pointer"
                        : "bg-slate-800 border-dashed border-slate-600 text-slate-500"
                    }`}
                  >
                    {letter || "?"}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Karışık Verilen Harf Butonları */}
          <div>
            <div className="text-xs text-slate-400 uppercase font-black tracking-wider mb-3">
              Karışık Harfler:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {currentHece.letters.map((letter, idx) => {
                const isPicked = pickedLetterIndices.includes(idx);
                return (
                  <button
                    key={`letter-${idx}`}
                    disabled={isPicked || heceFeedback === "correct"}
                    onClick={() => handlePickLetter(letter, idx)}
                    className={`w-14 h-14 sm:w-18 sm:h-18 rounded-2xl text-2xl sm:text-3xl font-black transition-all shadow-md active:scale-90 ${
                      isPicked
                        ? "bg-slate-800 text-slate-600 border border-slate-700 opacity-40 cursor-not-allowed"
                        : "bg-gradient-to-b from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 border-2 border-amber-200 hover:scale-105"
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Geri Bildirim ve Kontrol Butonları */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleResetHece}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-bold flex items-center gap-1.5 border border-slate-700"
            >
              <RotateCcw className="w-4 h-4" />
              Sıfırla
            </button>

            {heceFeedback === "correct" && (
              <button
                onClick={handleNextHece}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base flex items-center gap-2 shadow-lg shadow-emerald-500/30 animate-bounce"
              >
                <span>
                  {heceIdx < currentGroupHeceLevels.length - 1
                    ? "Sonraki Hece"
                    : selectedGroupNum < 5
                    ? `Sonraki Harf Grubu (${selectedGroupNum + 1}. Grup) 👉`
                    : "Başa Dön 🔄"}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}

            {heceFeedback === "wrong" && (
              <div className="text-rose-400 text-sm font-bold flex items-center gap-1.5">
                <X className="w-4 h-4" />
                <span>Tekrar dene! Sıralamayı kontrol et.</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 2. SEKMELİ OYUN: KELİME OLUŞTURMA                             */}
      {/* ============================================================== */}
      {activeTab === "kelime" && (
        <div className="bg-slate-900 border-2 border-blue-400/40 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-xl relative overflow-hidden">
          {/* Seviye Bilgisi & Navigasyon */}
          <div className="flex items-center justify-between max-w-xl mx-auto">
            <button
              onClick={handlePrevKelime}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
              title="Önceki Kelime"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center">
              <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/40 font-bold text-xs sm:text-sm">
                {activeGroupInfo.badgeEmoji} {activeGroupInfo.name} • Kelime {kelimeIdx + 1} / {currentGroupKelimeLevels.length}
              </span>
              <span className="text-[11px] text-slate-400 mt-1">
                Kullanılan Harfler: {activeGroupInfo.letters.join(", ")}
              </span>
            </div>

            <button
              onClick={handleNextKelime}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
              title="Sonraki Kelime"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Görsel ve İpucu */}
          <div className="bg-slate-800/80 rounded-2xl p-6 max-w-md mx-auto border border-slate-700 space-y-3">
            <div className="text-6xl sm:text-7xl animate-pulse">{currentKelime.imageEmoji}</div>
            <div className="text-base sm:text-lg font-bold text-blue-300">
              {currentKelime.hint}
            </div>
            <button
              onClick={() => speakText(currentKelime.targetWord)}
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-700/60 px-3 py-1.5 rounded-lg border border-slate-600"
            >
              <Volume2 className="w-4 h-4 text-blue-400" />
              Kelimeyi Dinle
            </button>
          </div>

          {/* Oluşturulan Kelime Kutusu / Yuvalar */}
          <div>
            <div className="text-xs text-slate-400 uppercase font-black tracking-wider mb-2">
              Heceleri Sırasıyla Tıkla ve Kelimeyi Kur:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 min-h-[70px]">
              {currentKelime.syllables.map((_, idx) => {
                const syl = placedSyllables[idx];
                return (
                  <button
                    key={`kelime-slot-${idx}`}
                    onClick={() => syl && handleRemovePlacedSyllable(idx)}
                    title={syl ? "Heceyi geri al" : "Boş hece yuvası"}
                    className={`px-5 h-16 sm:h-20 rounded-2xl border-4 flex items-center justify-center text-xl sm:text-2xl font-black transition-all ${
                      syl
                        ? kelimeFeedback === "correct"
                          ? "bg-emerald-500 border-emerald-300 text-white scale-105 shadow-lg shadow-emerald-500/30"
                          : kelimeFeedback === "wrong"
                          ? "bg-rose-500 border-rose-300 text-white animate-shake"
                          : "bg-blue-500 border-blue-300 text-white hover:scale-95 cursor-pointer"
                        : "bg-slate-800 border-dashed border-slate-600 text-slate-500 min-w-[70px]"
                    }`}
                  >
                    {syl || "?"}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Karışık Verilen Heceler */}
          <div>
            <div className="text-xs text-slate-400 uppercase font-black tracking-wider mb-3">
              Karışık Heceler:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {shuffledSyllables.map((syl, idx) => {
                const isPicked = pickedSyllableIndices.includes(idx);
                return (
                  <button
                    key={`syl-${idx}`}
                    disabled={isPicked || kelimeFeedback === "correct"}
                    onClick={() => handlePickSyllable(syl, idx)}
                    className={`px-6 py-3.5 rounded-2xl text-xl sm:text-2xl font-black transition-all shadow-md active:scale-90 ${
                      isPicked
                        ? "bg-slate-800 text-slate-600 border border-slate-700 opacity-40 cursor-not-allowed"
                        : "bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-300 hover:to-blue-500 text-white border-2 border-blue-200 hover:scale-105"
                    }`}
                  >
                    {syl}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Geri Bildirim ve Kontrol Butonları */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleResetKelime}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-bold flex items-center gap-1.5 border border-slate-700"
            >
              <RotateCcw className="w-4 h-4" />
              Sıfırla
            </button>

            {kelimeFeedback === "correct" && (
              <button
                onClick={handleNextKelime}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base flex items-center gap-2 shadow-lg shadow-emerald-500/30 animate-bounce"
              >
                <span>
                  {kelimeIdx < currentGroupKelimeLevels.length - 1
                    ? "Sonraki Kelime"
                    : selectedGroupNum < 5
                    ? `Sonraki Harf Grubu (${selectedGroupNum + 1}. Grup) 👉`
                    : "Başa Dön 🔄"}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}

            {kelimeFeedback === "wrong" && (
              <div className="text-rose-400 text-sm font-bold flex items-center gap-1.5">
                <X className="w-4 h-4" />
                <span>Tekrar dene! Hecelerin yerini kontrol et.</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 3. SEKMELİ OYUN: CÜMLE OLUŞTURMA                              */}
      {/* ============================================================== */}
      {activeTab === "cumle" && (
        <div className="bg-slate-900 border-2 border-purple-400/40 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-xl relative overflow-hidden">
          {/* Seviye Bilgisi & Navigasyon */}
          <div className="flex items-center justify-between max-w-xl mx-auto">
            <button
              onClick={handlePrevCumle}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
              title="Önceki Cümle"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center">
              <span className="px-3.5 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40 font-bold text-xs sm:text-sm">
                {activeGroupInfo.badgeEmoji} {activeGroupInfo.name} • Cümle Treni: {cumleIdx + 1} / {currentGroupCumleLevels.length}
              </span>
            </div>

            <button
              onClick={handleNextCumle}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
              title="Sonraki Cümle"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Görsel */}
          <div className="bg-slate-800/80 rounded-2xl p-5 max-w-md mx-auto border border-slate-700 flex items-center justify-center gap-4">
            <div className="text-5xl">{currentCumle.imageEmoji}</div>
            <div className="text-left">
              <div className="text-xs text-purple-300 font-bold">Cümle Görevi</div>
              <div className="text-sm text-slate-300">Kelimeleri doğru sırayla dizerek anlamlı bir cümle oluştur.</div>
            </div>
          </div>

          {/* Cümle Treni Yuvaları */}
          <div>
            <div className="text-xs text-slate-400 uppercase font-black tracking-wider mb-2">
              Cümle Treni Vagonları:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 min-h-[60px] bg-slate-850 p-4 rounded-2xl border border-slate-750">
              <span className="text-3xl">🚂</span>
              {currentCumle.sentenceWords.map((_, idx) => {
                const word = placedWords[idx];
                return (
                  <button
                    key={`word-slot-${idx}`}
                    onClick={() => word && handleRemovePlacedWord(idx)}
                    title={word ? "Kelimeyi geri al" : "Boş vagon"}
                    className={`px-4 py-3 rounded-xl border-2 flex items-center justify-center text-sm sm:text-base font-extrabold transition-all ${
                      word
                        ? cumleFeedback === "correct"
                          ? "bg-emerald-500 border-emerald-300 text-white scale-105 shadow-md"
                          : cumleFeedback === "wrong"
                          ? "bg-rose-500 border-rose-300 text-white animate-shake"
                          : "bg-purple-500 border-purple-300 text-white hover:scale-95 cursor-pointer"
                        : "bg-slate-800 border-dashed border-slate-600 text-slate-500 min-w-[60px]"
                    }`}
                  >
                    {word || "..."}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Karışık Verilen Kelimeler */}
          <div>
            <div className="text-xs text-slate-400 uppercase font-black tracking-wider mb-3">
              Karışık Kelimeler:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {currentCumle.jumbledWords.map((word, idx) => {
                const isPicked = pickedWordIndices.includes(idx);
                return (
                  <button
                    key={`jumbled-word-${idx}`}
                    disabled={isPicked || cumleFeedback === "correct"}
                    onClick={() => handlePickWord(word, idx)}
                    className={`px-5 py-3 rounded-xl text-sm sm:text-base font-black transition-all shadow-md active:scale-90 ${
                      isPicked
                        ? "bg-slate-800 text-slate-600 border border-slate-700 opacity-40 cursor-not-allowed"
                        : "bg-gradient-to-b from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white border border-purple-300 hover:scale-105"
                    }`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Geri Bildirim ve Kontrol Butonları */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleResetCumle}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-bold flex items-center gap-1.5 border border-slate-700"
            >
              <RotateCcw className="w-4 h-4" />
              Sıfırla
            </button>

            {cumleFeedback === "correct" && (
              <button
                onClick={handleNextCumle}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base flex items-center gap-2 shadow-lg shadow-emerald-500/30 animate-bounce"
              >
                <span>Sonraki Cümle</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}

            {cumleFeedback === "wrong" && (
              <div className="text-rose-400 text-sm font-bold flex items-center gap-1.5">
                <X className="w-4 h-4" />
                <span>Cümle sıralaması hatalı, tekrar dene!</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 4. SEKMELİ OYUN: 1. SINIF METİNLER & METİN TAMAMLAMA           */}
      {/* ============================================================== */}
      {activeTab === "metinler" && (
        <div className="space-y-6">
          {!isStoriesUnlocked ? (
            <div className="bg-slate-900 border-4 border-amber-400/50 rounded-3xl p-8 text-center space-y-5 shadow-2xl max-w-2xl mx-auto">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-500/20 border-2 border-amber-400/40 flex items-center justify-center text-4xl text-amber-400 animate-pulse">
                🔒
              </div>
              <div>
                <h2 className="text-2xl font-black text-white">
                  1. Sınıf Metinler Bölümü Kilitli!
                </h2>
                <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-lg mx-auto">
                  Bu bölüme geçmek için <strong>Hece</strong>, <strong>Kelime</strong> veya <strong>Cümle</strong> oyunlarını tamamlayarak toplam <strong>{requiredCoinsForStories} Altın</strong> kazanmalısın!
                </p>
              </div>

              <div className="max-w-md mx-auto bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-300">
                  <span>Altın İlerlemesi</span>
                  <span className="text-amber-400 font-mono">
                    {userStats.coins} / {requiredCoinsForStories} 💰
                  </span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-4 overflow-hidden p-0.5 border border-slate-700">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-amber-300 h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(100, (userStats.coins / requiredCoinsForStories) * 100)}%`,
                    }}
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveTab("hece")}
                  className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-lg shadow-amber-500/30 transition-transform active:scale-95"
                >
                  🚀 Hemen Hece & Kelime Oyununa Başla
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Sol: Metin Listesi */}
              <div className="lg:col-span-4 space-y-3">
                <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4">
                  <h3 className="text-base font-black text-amber-400 flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-amber-400" />
                    1. Sınıf Okuma Metinleri
                  </h3>
                  <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                    {GRADE1_READING_STORIES.map((story) => {
                      const isSelected = selectedStory?.id === story.id;
                      const isCompleted = userStats.completedGrade1StoryLevels?.includes(story.id);
                      return (
                        <button
                          key={story.id}
                          onClick={() => handleSelectStory(story)}
                          className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                            isSelected
                              ? "bg-emerald-600/30 border-emerald-400 text-white shadow-md"
                              : "bg-slate-800/80 border-slate-700 hover:bg-slate-800 text-slate-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{story.iconEmoji}</span>
                            <div>
                              <div className="font-bold text-sm leading-tight text-white">
                                {story.title}
                              </div>
                              <div className="text-[11px] text-slate-400 mt-0.5">
                                {story.wordCount} Kelime • +{story.rewardCoins} 💰
                              </div>
                            </div>
                          </div>

                          {isCompleted && (
                            <span className="p-1 rounded-full bg-amber-400/20 text-amber-300 text-xs">
                              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Sağ: Seçili Metin */}
              {selectedStory && (
                <div className="lg:col-span-8 bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl sm:text-5xl">{selectedStory.iconEmoji}</div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-black text-white">
                          {selectedStory.title}
                        </h2>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {selectedStory.synopsis}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700 w-full sm:w-auto">
                      <button
                        onClick={() => setStoryMode("read")}
                        className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          storyMode === "read"
                            ? "bg-emerald-500 text-slate-950 font-black shadow"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        <BookOpen className="w-4 h-4" />
                        Metni Oku
                      </button>

                      <button
                        onClick={() => setStoryMode("cloze")}
                        className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          storyMode === "cloze"
                            ? "bg-amber-500 text-slate-950 font-black shadow"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        <Sparkles className="w-4 h-4" />
                        Metin Tamamlama
                      </button>
                    </div>
                  </div>

                  {/* 1. MOD: OKUMA MODU */}
                  {storyMode === "read" && (
                    <div className="space-y-6">
                      <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700 leading-relaxed text-slate-100 text-lg sm:text-xl font-medium tracking-wide">
                        {selectedStory.paragraphs || selectedStory.readingText}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <button
                          onClick={() => speakText(selectedStory.readingText)}
                          className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 shadow"
                        >
                          <Volume2 className="w-5 h-5 text-amber-300" />
                          <span>Metni Sesli Oku</span>
                        </button>

                        <button
                          onClick={() => setStoryMode("cloze")}
                          className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20"
                        >
                          <span>Metin Tamamlama Oyununa Geç</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 2. MOD: METİN TAMAMLAMA */}
                  {storyMode === "cloze" && (
                    <div className="space-y-6">
                      {isStoryCompleted ? (
                        <div className="text-center py-8 space-y-4 bg-emerald-950/40 border-2 border-emerald-400/40 rounded-2xl p-6">
                          <div className="text-6xl animate-bounce">🏆</div>
                          <h3 className="text-2xl font-black text-white">
                            Tebrikler! Metni Başarıyla Tamamladın!
                          </h3>
                          <p className="text-slate-300 text-sm max-w-md mx-auto">
                            Tüm boşlukları doğru kelimelerle doldurdun ve <strong>+{selectedStory.rewardCoins} Altın</strong> kazandın!
                          </p>
                          <div className="pt-2 flex justify-center gap-3">
                            <button
                              onClick={() => {
                                setStoryMode("read");
                                setClozeIdx(0);
                                setIsStoryCompleted(false);
                              }}
                              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold border border-slate-600"
                            >
                              Metni Tekrar Oku
                            </button>
                            <button
                              onClick={() => {
                                const nextStory =
                                  GRADE1_READING_STORIES[
                                    (GRADE1_READING_STORIES.findIndex(
                                      (s) => s.id === selectedStory.id
                                    ) +
                                      1) %
                                      GRADE1_READING_STORIES.length
                                  ];
                                handleSelectStory(nextStory);
                              }}
                              className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-black shadow"
                            >
                              Sonraki Metne Geç 👉
                            </button>
                          </div>
                        </div>
                      ) : currentClozeItem ? (
                        <div className="space-y-6">
                          <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                            <span>
                              Boşluk {clozeIdx + 1} / {selectedStory.clozeItems.length}
                            </span>
                            <span className="text-amber-400">
                              Doğru Kelimeyi Seçip Cümleyi Tamamla!
                            </span>
                          </div>

                          <div className="bg-slate-800 p-6 rounded-2xl border-2 border-amber-400/40 text-center space-y-4">
                            <div className="text-lg sm:text-2xl font-bold text-white leading-relaxed">
                              {currentClozeItem.sentenceWithBlank.split("_____").map((part, i, arr) => (
                                <React.Fragment key={i}>
                                  {part}
                                  {i < arr.length - 1 && (
                                    <span className="inline-block mx-2 px-4 py-1 rounded-xl bg-amber-400 text-slate-950 font-black border-2 border-amber-200 shadow-md">
                                      {clozeFeedback === "correct"
                                        ? currentClozeItem.targetWord
                                        : " ... ? ... "}
                                    </span>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>

                            <button
                              onClick={() => speakText(currentClozeItem.sentenceWithBlank.replace("_____", "boşluk"))}
                              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-700/60 px-3 py-1.5 rounded-lg border border-slate-600"
                            >
                              <Volume2 className="w-4 h-4 text-amber-400" />
                              Cümleyi Dinle
                            </button>
                          </div>

                          <div>
                            <div className="text-xs text-slate-400 uppercase font-black tracking-wider mb-3 text-center">
                              Boşluğa Hangi Kelime Gelmeli?
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              {currentClozeItem.options.map((opt, idx) => {
                                const isSelected = selectedClozeOption === opt;
                                const isTarget = opt.toLowerCase() === currentClozeItem.targetWord.toLowerCase();
                                return (
                                  <button
                                    key={`opt-${idx}`}
                                    onClick={() => handleSelectClozeOption(opt)}
                                    className={`py-4 px-6 rounded-2xl text-lg sm:text-xl font-black transition-all shadow-md active:scale-95 ${
                                      isSelected
                                        ? isTarget
                                          ? "bg-emerald-500 text-white border-2 border-emerald-300 scale-105 shadow-emerald-500/30"
                                          : "bg-rose-500 text-white border-2 border-rose-300 animate-shake"
                                        : "bg-slate-800 hover:bg-slate-750 text-amber-300 border-2 border-slate-700 hover:border-amber-400"
                                    }`}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {clozeFeedback === "correct" && (
                            <div className="bg-emerald-950/60 border border-emerald-400 p-4 rounded-xl flex items-center justify-between animate-fadeIn">
                              <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                <span>Harika! {currentClozeItem.explanation}</span>
                              </div>
                              <button
                                onClick={handleNextClozeQuestion}
                                className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm flex items-center gap-1.5 shadow"
                              >
                                <span>Sonraki Boşluk</span>
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          )}

                          {clozeFeedback === "wrong" && (
                            <div className="text-center text-rose-400 font-bold text-sm flex items-center justify-center gap-2">
                              <X className="w-4 h-4" />
                              <span>Farklı bir kelime dene! Metindeki olayı hatırla.</span>
                            </div>
                          )}
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
