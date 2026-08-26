import React, { useState, useEffect, useRef } from "react";
import { Timer, Zap, Trophy, Play, CheckCircle2, AlertCircle, ArrowRight, RotateCcw, Award, Sparkles, BookOpen, Clock } from "lucide-react";
import { Grade4TimedStory, UserStats } from "../../types";
import { GRADE4_TIMED_STORIES } from "../../data/grade4Data";

interface Grade4TimedReadingProps {
  userStats: UserStats;
  onUpdateStats: React.Dispatch<React.SetStateAction<UserStats>>;
  onPlaySound: (type: "correct" | "wrong" | "chest" | "click") => void;
}

type Step = "select" | "read" | "result_preview" | "quiz" | "summary";

export const Grade4TimedReading: React.FC<Grade4TimedReadingProps> = ({
  userStats,
  onUpdateStats,
  onPlaySound,
}) => {
  const [selectedStory, setSelectedStory] = useState<Grade4TimedStory>(GRADE4_TIMED_STORIES[0]);
  const [step, setStep] = useState<Step>("select");

  // Timer mode: 'countdown' or 'stopwatch'
  const [timerMode, setTimerMode] = useState<"countdown" | "stopwatch">("countdown");
  const [targetTime, setTargetTime] = useState<number>(60); // in seconds
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [secondsLeft, setSecondsLeft] = useState<number>(60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Calculated WPM and time taken
  const [readingTimeSeconds, setReadingTimeSeconds] = useState<number>(0);
  const [calculatedWpm, setCalculatedWpm] = useState<number>(0);

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answeredState, setAnsweredState] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Timer Tick
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            // Time ran out in countdown mode
            handleFinishReading(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const handleStartReading = (story: Grade4TimedStory) => {
    onPlaySound("click");
    setSelectedStory(story);
    setSecondsElapsed(0);
    setSecondsLeft(targetTime);
    setIsRunning(true);
    setStep("read");
  };

  const handleFinishReading = (timedOut = false) => {
    setIsRunning(false);
    onPlaySound("click");

    const totalSeconds = timedOut ? targetTime : Math.max(secondsElapsed, 1);
    setReadingTimeSeconds(totalSeconds);

    // Calculate WPM: (words / seconds) * 60
    const wpm = Math.round((selectedStory.wordCount / totalSeconds) * 60);
    setCalculatedWpm(wpm);

    // Reset Quiz
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnsweredState(false);
    setQuizScore(0);
    setUserAnswers([]);

    setStep("result_preview");
  };

  const handleProceedToQuiz = () => {
    onPlaySound("click");
    setStep("quiz");
  };

  const handleSelectAnswer = (optionIdx: number) => {
    if (answeredState) return;
    setSelectedAnswer(optionIdx);
    setAnsweredState(true);

    const isCorrect = optionIdx === selectedStory.questions[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      onPlaySound("correct");
      setQuizScore((prev) => prev + 1);
    } else {
      onPlaySound("wrong");
    }

    setUserAnswers((prev) => [...prev, optionIdx]);
  };

  const handleNextQuestion = () => {
    onPlaySound("click");
    if (currentQuestionIndex + 1 < selectedStory.questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setAnsweredState(false);
    } else {
      // Quiz Finished, calculate reward
      handleFinishStory();
    }
  };

  const handleFinishStory = () => {
    const isSuccess = quizScore >= 2;
    const completedList = userStats.completedGrade4TimedStories || [];
    const isFirstTime = !completedList.includes(selectedStory.id);
    const earnedCoins = isSuccess ? (isFirstTime ? selectedStory.rewardCoins : 20) : 10;

    onPlaySound(isSuccess ? "chest" : "correct");

    onUpdateStats((prev) => {
      const prevList = prev.completedGrade4TimedStories || [];
      const updatedList = isSuccess && !prevList.includes(selectedStory.id)
        ? [...prevList, selectedStory.id]
        : prevList;
      
      const newBestWpm = Math.max(prev.bestGrade4Wpm || 0, calculatedWpm);

      return {
        ...prev,
        coins: prev.coins + earnedCoins,
        completedGrade4TimedStories: updatedList,
        bestGrade4Wpm: newBestWpm,
        totalStoriesRead: prev.totalStoriesRead + 1,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + selectedStory.questions.length,
        totalCorrectAnswers: prev.totalCorrectAnswers + quizScore,
      };
    });

    setStep("summary");
  };

  const isStoryCompleted = (storyId: string) => {
    return (userStats.completedGrade4TimedStories || []).includes(storyId);
  };

  return (
    <div className="space-y-6">
      {/* STEP 1: STORY SELECTION */}
      {step === "select" && (
        <div className="space-y-6">
          {/* Target Speed Setting Box */}
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-orange-500/10 border-2 border-amber-400 rounded-3xl p-5 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 text-slate-950 font-black rounded-full text-xs uppercase tracking-wider mb-2">
                  <Timer className="w-3.5 h-3.5" />
                  Süreli Okuma Meydan Okuması
                </span>
                <h3 className="text-lg font-black text-slate-900">
                  Hedef Süreni ve Okuma Modunu Belirle
                </h3>
                <p className="text-xs text-slate-600">
                  4. Sınıf hedefi: 1 dakikada (60 sn) ortalama 120-160 kelime okuyup anlamak.
                </p>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="bg-white p-1 rounded-2xl border border-amber-200 flex items-center gap-1 shadow-sm">
                  {[
                    { sec: 90, label: "90 sn (Rahat)" },
                    { sec: 60, label: "60 sn (Standart)" },
                    { sec: 40, label: "40 sn (Şampiyon ⚡)" },
                  ].map((item) => (
                    <button
                      key={item.sec}
                      onClick={() => setTargetTime(item.sec)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                        targetTime === item.sec
                          ? "bg-amber-400 text-slate-950 shadow"
                          : "text-slate-600 hover:text-slate-950"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GRADE4_TIMED_STORIES.map((story) => {
              const completed = isStoryCompleted(story.id);
              return (
                <div
                  key={story.id}
                  className={`relative rounded-3xl p-5 border-2 transition-all flex flex-col justify-between bg-white shadow-sm hover:shadow-md ${
                    completed
                      ? "border-emerald-400 ring-2 ring-emerald-100"
                      : "border-slate-200 hover:border-amber-400"
                  }`}
                >
                  {/* Top Badge & Category */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-2xl p-2 bg-amber-100 rounded-2xl">
                        {story.iconEmoji}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-slate-100 text-slate-700 border border-slate-200">
                          {story.category}
                        </span>
                        {completed && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            Tamamlandı
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="text-base font-black text-slate-900 mb-1">
                      {story.title}
                    </h4>
                    <p className="text-xs text-slate-600 mb-4 line-clamp-2">
                      {story.synopsis}
                    </p>

                    {/* Stats pills */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4">
                      <span className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-xl border border-slate-200">
                        <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                        {story.wordCount} Kelime
                      </span>
                      <span className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-xl border border-slate-200">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        Hedef: {targetTime} sn
                      </span>
                    </div>
                  </div>

                  {/* Start Button */}
                  <button
                    onClick={() => handleStartReading(story)}
                    className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black rounded-2xl shadow flex items-center justify-center gap-2 transition-transform active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-slate-950" />
                    <span>Süreli Okumayı Başlat</span>
                    <span className="text-xs px-2 py-0.5 bg-amber-600/30 rounded-full font-bold ml-1">
                      +{story.rewardCoins} Altın
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 2: ACTIVE READING SCREEN WITH TIMER */}
      {step === "read" && (
        <div className="bg-white border-2 border-amber-400 rounded-3xl p-6 sm:p-8 shadow-xl max-w-4xl mx-auto space-y-6">
          {/* Header with Sticky Timer */}
          <div className="sticky top-20 z-20 bg-slate-900 text-white p-4 rounded-2xl shadow-lg flex items-center justify-between gap-4 border border-amber-400/40">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{selectedStory.iconEmoji}</span>
              <div>
                <h3 className="font-black text-sm sm:text-base text-amber-300">
                  {selectedStory.title}
                </h3>
                <span className="text-xs text-slate-400">
                  {selectedStory.wordCount} Kelime • Gözlerini satırlarda akıcı kaydır
                </span>
              </div>
            </div>

            {/* Live Clock Display */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">
                  Geçen Süre
                </span>
                <span className="text-xl sm:text-2xl font-black font-mono text-amber-400">
                  {secondsElapsed} sn
                </span>
              </div>

              <div className="h-8 w-px bg-slate-700 hidden sm:block" />

              <div className="text-right hidden sm:block">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">
                  Hedef Kalan
                </span>
                <span
                  className={`text-xl font-black font-mono ${
                    secondsLeft <= 10 ? "text-rose-400 animate-pulse" : "text-emerald-400"
                  }`}
                >
                  {secondsLeft} sn
                </span>
              </div>
            </div>
          </div>

          {/* Reading Text Container */}
          <div className="bg-amber-50/40 border border-amber-200/80 rounded-3xl p-6 sm:p-8 space-y-5 text-slate-900 leading-relaxed font-sans text-lg sm:text-xl tracking-wide selection:bg-amber-300">
            {selectedStory.paragraphs.map((p, idx) => (
              <p key={idx} className="indent-6 sm:indent-8">
                {p}
              </p>
            ))}
          </div>

          {/* Action to Finish */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                setIsRunning(false);
                setStep("select");
              }}
              className="text-xs text-slate-500 hover:text-slate-800 font-bold px-4 py-2"
            >
              ← Vazgeç ve Listeye Dön
            </button>

            <button
              onClick={() => handleFinishReading(false)}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-lg rounded-2xl shadow-lg flex items-center justify-center gap-3 transition-transform active:scale-95 animate-bounce"
            >
              <CheckCircle2 className="w-6 h-6" />
              <span>Okumayı Bitirdim! (Süreyi Durdur)</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: RESULT PREVIEW & SPEED CALCULATION */}
      {step === "result_preview" && (
        <div className="bg-white border-2 border-amber-400 rounded-3xl p-6 sm:p-8 shadow-xl max-w-xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 bg-amber-100 rounded-3xl flex items-center justify-center mx-auto text-3xl shadow-inner">
            ⚡
          </div>

          <div>
            <span className="text-xs font-black text-amber-700 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Okuma Hızı Değerlendirmesi
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Harika Okuma Performansı!
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              <strong>{selectedStory.wordCount}</strong> kelimelik metni <strong>{readingTimeSeconds} saniyede</strong> tamamladın.
            </p>
          </div>

          {/* WPM Speed Meter */}
          <div className="bg-slate-950 text-white p-6 rounded-3xl border-2 border-amber-400 shadow-inner space-y-3">
            <span className="text-xs text-slate-400 uppercase font-black tracking-wider">
              Dakikadaki Kelime Sayısı (WPM)
            </span>
            <div className="text-5xl font-black font-mono text-amber-400">
              {calculatedWpm} <span className="text-lg font-sans text-amber-200">WPM</span>
            </div>
            <p className="text-xs text-slate-300">
              {calculatedWpm >= 180
                ? "🚀 Şampiyon Hızlı Okuyucu! Gözlerin bir kartal gibi hızlı."
                : calculatedWpm >= 130
                ? "⭐ Mükemmel 4. Sınıf Seviyesi! Hızın standartların üzerinde."
                : "👍 Tebrikler! Düzenli antrenmanla hızını daha da artıracaksın."}
            </p>
          </div>

          {/* Quiz Prompt */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-left">
            <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5 mb-1">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Sırada Anlama Testi Var!
            </h4>
            <p className="text-xs text-slate-600">
              Hızlı okumanın en önemli kuralı anladığından emin olmaktır. 3 soruyu cevaplayarak altınlarını kazan!
            </p>
          </div>

          <button
            onClick={handleProceedToQuiz}
            className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-base rounded-2xl shadow-lg flex items-center justify-center gap-2"
          >
            <span>Anlama Sorularına Geç</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* STEP 4: COMPREHENSION QUIZ */}
      {step === "quiz" && (
        <div className="bg-white border-2 border-amber-400 rounded-3xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto space-y-6">
          {/* Progress */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
              Anlama Sorusu {currentQuestionIndex + 1} / {selectedStory.questions.length}
            </span>
            <span className="text-xs font-black text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
              Doğru: {quizScore}
            </span>
          </div>

          {/* Question Body */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              {selectedStory.questions[currentQuestionIndex].question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {selectedStory.questions[currentQuestionIndex].options.map((opt, optIdx) => {
              const isCorrectAnswer = optIdx === selectedStory.questions[currentQuestionIndex].correctAnswer;
              const isSelected = selectedAnswer === optIdx;

              let btnStyle = "bg-white border-slate-200 hover:border-amber-400 text-slate-800";
              if (answeredState) {
                if (isCorrectAnswer) {
                  btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-200";
                } else if (isSelected) {
                  btnStyle = "bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-200";
                } else {
                  btnStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                }
              }

              return (
                <button
                  key={optIdx}
                  disabled={answeredState}
                  onClick={() => handleSelectAnswer(optIdx)}
                  className={`w-full p-4 rounded-2xl border-2 text-left font-bold text-sm sm:text-base transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {answeredState && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  )}
                  {answeredState && isSelected && !isCorrectAnswer && (
                    <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation if answered */}
          {answeredState && (
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-slate-700">
              <strong>Açıklama: </strong>
              {selectedStory.questions[currentQuestionIndex].explanation}
            </div>
          )}

          {/* Next Button */}
          {answeredState && (
            <button
              onClick={handleNextQuestion}
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-amber-300 font-black rounded-2xl shadow flex items-center justify-center gap-2"
            >
              <span>{currentQuestionIndex + 1 < selectedStory.questions.length ? "Sonraki Soru" : "Sonucu Gör & Altınları Al"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* STEP 5: FINAL SUMMARY */}
      {step === "summary" && (
        <div className="bg-white border-2 border-emerald-400 rounded-3xl p-6 sm:p-8 shadow-xl max-w-xl mx-auto text-center space-y-6">
          <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto text-4xl shadow-inner animate-bounce">
            🏆
          </div>

          <div>
            <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Meydan Okuma Tamamlandı!
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Tebrikler {userStats.playerName || "Genç Kaşif"}!
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              {selectedStory.title} metnini başarıyla okudun ve soruları tamamladın.
            </p>
          </div>

          {/* Stats Badges */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-amber-50 border border-amber-200 p-3 rounded-2xl">
              <span className="text-[10px] font-bold text-amber-800 uppercase block">Okuma Hızı</span>
              <span className="text-xl font-black text-amber-600 font-mono">{calculatedWpm} WPM</span>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-3 rounded-2xl">
              <span className="text-[10px] font-bold text-blue-800 uppercase block">Süre</span>
              <span className="text-xl font-black text-blue-600 font-mono">{readingTimeSeconds} sn</span>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-2xl">
              <span className="text-[10px] font-bold text-emerald-800 uppercase block">Doğru Soru</span>
              <span className="text-xl font-black text-emerald-600 font-mono">{quizScore}/3</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => {
                onPlaySound("click");
                setStep("select");
              }}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-amber-300 font-black rounded-2xl shadow flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Diğer Metinlere Geç</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
