import React, { useState, useEffect } from "react";
import { WordPair, UserStats, GradeLevel } from "../types";
import { GRADE2_ANTONYMS, GRADE2_SYNONYMS } from "../data/grade2Data";
import { GRADE3_ANTONYMS, GRADE3_SYNONYMS } from "../data/grade3Data";
import {
  Sparkles,
  Zap,
  Layers,
  CheckCircle2,
  XCircle,
  Trophy,
  Coins,
  RefreshCw,
  ArrowLeft,
  Flame,
  Volume2,
  Clock,
} from "lucide-react";
import confetti from "canvas-confetti";

interface WordMatchingGameProps {
  gradeLevel: 2 | 3;
  modeType: "synonym" | "antonym";
  userStats: UserStats;
  onUpdateStats: (updater: (prev: UserStats) => UserStats) => void;
  onBack: () => void;
  onPlaySound?: (type: "correct" | "wrong" | "chest" | "click") => void;
}

interface CardItem {
  id: string;
  uniqueKey: string;
  text: string;
  pairId: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export const WordMatchingGame: React.FC<WordMatchingGameProps> = ({
  gradeLevel,
  modeType,
  userStats,
  onUpdateStats,
  onBack,
  onPlaySound,
}) => {
  const [gameFormat, setGameFormat] = useState<"cards" | "speed">("cards");

  // Get active dataset based on grade and mode
  const dataset: WordPair[] =
    gradeLevel === 2
      ? modeType === "antonym"
        ? GRADE2_ANTONYMS
        : GRADE2_SYNONYMS
      : modeType === "antonym"
      ? GRADE3_ANTONYMS
      : GRADE3_SYNONYMS;

  // --- CARD GRID STATE ---
  const [cards, setCards] = useState<CardItem[]>([]);
  const [selectedCards, setSelectedCards] = useState<CardItem[]>([]);
  const [matchedPairsCount, setMatchedPairsCount] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  // --- SPEED HUNT STATE ---
  const [speedQuestionIdx, setSpeedQuestionIdx] = useState(0);
  const [speedScore, setSpeedScore] = useState(0);
  const [speedCombo, setSpeedCombo] = useState(0);
  const [speedFeedback, setSpeedFeedback] = useState<"none" | "correct" | "wrong">("none");
  const [speedTimeLeft, setSpeedTimeLeft] = useState(30);
  const [speedGameOver, setSpeedGameOver] = useState(false);

  // Initialize Card Grid Game
  const initCardGame = () => {
    // Pick 6 random pairs from dataset
    const shuffled = [...dataset].sort(() => Math.random() - 0.5);
    const chosenPairs = shuffled.slice(0, 6);

    const generatedCards: CardItem[] = [];
    chosenPairs.forEach((pair, idx) => {
      generatedCards.push({
        id: `${pair.id}-word`,
        uniqueKey: `${pair.id}-a`,
        text: pair.word,
        pairId: pair.id,
        isFlipped: false,
        isMatched: false,
      });
      generatedCards.push({
        id: `${pair.id}-target`,
        uniqueKey: `${pair.id}-b`,
        text: pair.target,
        pairId: pair.id,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle all cards
    setCards(generatedCards.sort(() => Math.random() - 0.5));
    setSelectedCards([]);
    setMatchedPairsCount(0);
    setMoves(0);
    setIsWon(false);
  };

  // Initialize Speed Hunt Game
  const initSpeedGame = () => {
    setSpeedQuestionIdx(0);
    setSpeedScore(0);
    setSpeedCombo(0);
    setSpeedFeedback("none");
    setSpeedTimeLeft(30);
    setSpeedGameOver(false);
  };

  useEffect(() => {
    if (gameFormat === "cards") {
      initCardGame();
    } else {
      initSpeedGame();
    }
  }, [gameFormat, gradeLevel, modeType]);

  // Speed timer tick
  useEffect(() => {
    if (gameFormat === "speed" && !speedGameOver && speedTimeLeft > 0) {
      const timer = setInterval(() => {
        setSpeedTimeLeft((t) => {
          if (t <= 1) {
            setSpeedGameOver(true);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameFormat, speedGameOver, speedTimeLeft]);

  // Text to speech
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "tr-TR";
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }
  };

  // --- CARD CLICK HANDLER ---
  const handleCardClick = (card: CardItem) => {
    if (card.isFlipped || card.isMatched || selectedCards.length >= 2) return;

    onPlaySound?.("click");
    speakText(card.text);

    const newCards = cards.map((c) => (c.uniqueKey === card.uniqueKey ? { ...c, isFlipped: true } : c));
    setCards(newCards);

    const newSelected = [...selectedCards, card];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = newSelected;

      if (first.pairId === second.pairId) {
        // MATCH!
        setTimeout(() => {
          onPlaySound?.("correct");
          setCards((prev) =>
            prev.map((c) => (c.pairId === first.pairId ? { ...c, isMatched: true } : c))
          );
          setSelectedCards([]);
          const newMatched = matchedPairsCount + 1;
          setMatchedPairsCount(newMatched);

          if (newMatched >= 6) {
            setIsWon(true);
            onPlaySound?.("chest");
            confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });

            // Reward coins
            onUpdateStats((prev) => ({
              ...prev,
              coins: prev.coins + (modeType === "antonym" ? 60 : 60),
              completedAntonymGames:
                modeType === "antonym" ? prev.completedAntonymGames + 1 : prev.completedAntonymGames,
              completedSynonymGames:
                modeType === "synonym" ? prev.completedSynonymGames + 1 : prev.completedSynonymGames,
              totalCorrectAnswers: prev.totalCorrectAnswers + 6,
              lastActive: new Date().toISOString(),
            }));
          }
        }, 500);
      } else {
        // NO MATCH
        setTimeout(() => {
          onPlaySound?.("wrong");
          setCards((prev) =>
            prev.map((c) =>
              c.uniqueKey === first.uniqueKey || c.uniqueKey === second.uniqueKey
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setSelectedCards([]);
        }, 900);
      }
    }
  };

  // --- SPEED HUNT HANDLER ---
  const currentSpeedPair = dataset[speedQuestionIdx % dataset.length];

  // Generate 4 options (1 correct, 3 distractors)
  const getSpeedOptions = () => {
    if (!currentSpeedPair) return [];
    const correctTarget = currentSpeedPair.target;
    const otherTargets = dataset
      .filter((d) => d.id !== currentSpeedPair.id)
      .map((d) => d.target)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const all = [correctTarget, ...otherTargets].sort(() => Math.random() - 0.5);
    return all;
  };

  const [currentSpeedOptions, setCurrentSpeedOptions] = useState<string[]>([]);
  useEffect(() => {
    if (gameFormat === "speed" && currentSpeedPair) {
      setCurrentSpeedOptions(getSpeedOptions());
    }
  }, [speedQuestionIdx, gameFormat]);

  const handleSpeedAnswer = (chosenText: string) => {
    if (speedFeedback !== "none" || speedGameOver) return;

    if (chosenText === currentSpeedPair.target) {
      setSpeedFeedback("correct");
      onPlaySound?.("correct");
      const nextCombo = speedCombo + 1;
      setSpeedCombo(nextCombo);
      const points = 10 * nextCombo;
      setSpeedScore((s) => s + points);

      onUpdateStats((prev) => ({
        ...prev,
        coins: prev.coins + 10,
        totalCorrectAnswers: prev.totalCorrectAnswers + 1,
        lastActive: new Date().toISOString(),
      }));

      setTimeout(() => {
        setSpeedFeedback("none");
        setSpeedQuestionIdx((idx) => idx + 1);
      }, 500);
    } else {
      setSpeedFeedback("wrong");
      onPlaySound?.("wrong");
      setSpeedCombo(0);
      setTimeout(() => {
        setSpeedFeedback("none");
      }, 600);
    }
  };

  const titlePrefix =
    modeType === "antonym" ? "⚖️ Zıt Anlamlı Kelimeler" : "🤝 Eş Anlamlı Kelimeler";
  const themeBg =
    modeType === "antonym"
      ? "from-amber-600 via-orange-600 to-amber-700 border-amber-400"
      : "from-blue-600 via-indigo-600 to-blue-700 border-blue-400";

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="px-4 py-2.5 rounded-2xl bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-sm flex items-center gap-2 shadow-sm transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          {gradeLevel}. Sınıf Haritasına Dön
        </button>

        {/* Game format switcher */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          <button
            onClick={() => setGameFormat("cards")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
              gameFormat === "cards"
                ? "bg-white text-slate-900 shadow-md scale-105"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Layers className="w-4 h-4 text-amber-500" />
            Kart Eşleştirme (6 Çift)
          </button>
          <button
            onClick={() => setGameFormat("speed")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
              gameFormat === "speed"
                ? "bg-white text-slate-900 shadow-md scale-105"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Zap className="w-4 h-4 text-rose-500" />
            Hızlı Kelime Avı (Süreli)
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div
        className={`bg-gradient-to-r ${themeBg} rounded-3xl p-6 sm:p-8 text-white shadow-xl border-4 relative overflow-hidden`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {gradeLevel}. Sınıf Türkçe Kelime Hazinesi
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">{titlePrefix} Oyunu</h1>
            <p className="text-white/90 text-sm mt-1">
              {modeType === "antonym"
                ? "Birbirinin tam tersi (karşıt) anlamındaki kelimeleri bul ve altınları kap!"
                : "Aynı veya çok yakın anlama gelen eş anlamlı sözcükleri eşleştir!"}
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 text-center">
            <div className="text-xs font-bold text-white/80">Kelimeler Havuzu</div>
            <div className="text-2xl font-black text-amber-300">{dataset.length} Çift</div>
          </div>
        </div>
      </div>

      {/* --- FORMAT 1: KART EŞLEŞTİRME --- */}
      {gameFormat === "cards" && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-slate-100 space-y-6">
          <div className="flex items-center justify-between border-b pb-4 border-slate-100">
            <div className="flex items-center gap-4">
              <div className="text-sm font-bold text-slate-500">
                Eşleşen: <span className="font-black text-emerald-600 text-lg">{matchedPairsCount}/6</span>
              </div>
              <div className="text-sm font-bold text-slate-500">
                Hamle: <span className="font-black text-slate-800 text-lg">{moves}</span>
              </div>
            </div>

            <button
              onClick={initCardGame}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Yeni Kartlar Dağıt
            </button>
          </div>

          {/* Cards 4x3 Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {cards.map((card) => {
              const isSelected = selectedCards.some((s) => s.uniqueKey === card.uniqueKey);
              const showFront = card.isFlipped || card.isMatched || isSelected;

              return (
                <button
                  key={card.uniqueKey}
                  disabled={card.isMatched || selectedCards.length >= 2}
                  onClick={() => handleCardClick(card)}
                  className={`h-24 sm:h-28 rounded-2xl p-3 flex flex-col items-center justify-center font-black text-center transition-all duration-300 transform active:scale-95 border-3 relative shadow-md ${
                    card.isMatched
                      ? "bg-emerald-100 border-emerald-400 text-emerald-900 opacity-90 scale-95"
                      : showFront
                      ? modeType === "antonym"
                        ? "bg-amber-50 border-amber-400 text-amber-950 scale-105 ring-4 ring-amber-200"
                        : "bg-blue-50 border-blue-400 text-blue-950 scale-105 ring-4 ring-blue-200"
                      : "bg-gradient-to-tr from-slate-700 to-slate-800 border-slate-600 text-amber-300 hover:border-amber-400"
                  }`}
                >
                  {showFront ? (
                    <>
                      <span className="text-base sm:text-lg font-black tracking-wide leading-tight">
                        {card.text}
                      </span>
                      {card.isMatched && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 absolute top-2 right-2" />
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-2xl mb-1">🎁</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                        Aç
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Win Modal / Banner */}
          {isWon && (
            <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-center space-y-4 shadow-xl animate-bounce">
              <div className="text-4xl">🏆 🎉</div>
              <h2 className="text-2xl font-black">Tebrikler! Tüm Kartları Eşleştirdin!</h2>
              <p className="text-emerald-100 font-bold text-sm">
                Harika bir hafıza ve kelime bilgisi gösterdin. +60 Altın Kazandın!
              </p>
              <button
                onClick={initCardGame}
                className="px-6 py-3 rounded-2xl bg-white text-emerald-800 font-black shadow-lg hover:bg-emerald-50 transition-all"
              >
                Yeni Tur Oyna
              </button>
            </div>
          )}
        </div>
      )}

      {/* --- FORMAT 2: HIZLI KELİME AVI --- */}
      {gameFormat === "speed" && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-slate-100 space-y-6">
          {/* Top Timer & Combo */}
          <div className="flex items-center justify-between border-b pb-4 border-slate-100">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-rose-50 text-rose-700 rounded-xl border border-rose-200 font-black text-sm">
              <Clock className="w-4 h-4 animate-spin" />
              Süre: {speedTimeLeft} sn
            </div>

            <div className="flex items-center gap-2">
              {speedCombo > 1 && (
                <div className="px-3 py-1 bg-amber-500 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1 shadow">
                  <Flame className="w-3.5 h-3.5 fill-slate-950" />
                  {speedCombo}x Kombo!
                </div>
              )}
              <div className="font-black text-slate-800 text-sm">
                Puan: <span className="text-amber-600 text-lg">{speedScore}</span>
              </div>
            </div>
          </div>

          {!speedGameOver ? (
            <div className="space-y-6 text-center py-4">
              <div className="text-xs font-black uppercase tracking-widest text-slate-400">
                {modeType === "antonym" ? "Zıt (Karşıt) Anlamlısını Bul" : "Eş Anlamlısını Bul"}
              </div>

              {/* Target Word */}
              <div className="p-6 rounded-3xl bg-slate-50 border-3 border-slate-200 inline-block min-w-[240px]">
                <span className="text-3xl sm:text-4xl font-black text-slate-900">
                  {currentSpeedPair?.word}
                </span>
                {currentSpeedPair?.hint && (
                  <div className="text-xs font-semibold text-slate-500 mt-2 italic">
                    İpucu: {currentSpeedPair.hint}
                  </div>
                )}
              </div>

              {/* 4 Choices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto pt-2">
                {currentSpeedOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    disabled={speedFeedback !== "none"}
                    onClick={() => handleSpeedAnswer(opt)}
                    className="py-4 px-6 rounded-2xl bg-white hover:bg-amber-50 border-3 border-slate-200 hover:border-amber-400 text-slate-900 font-black text-lg transition-all active:scale-95 shadow-sm hover:shadow"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Game Over Screen */
            <div className="text-center py-8 space-y-4">
              <div className="text-5xl">⏰ 🌟</div>
              <h2 className="text-3xl font-black text-slate-900">Süre Doldu!</h2>
              <p className="text-slate-600 font-bold">
                Toplam Skorun: <span className="text-amber-600 text-xl font-black">{speedScore}</span> Puan
              </p>
              <button
                onClick={initSpeedGame}
                className="px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black shadow-lg"
              >
                Yeniden Başla
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
