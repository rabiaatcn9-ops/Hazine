import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Key, Sparkles, HelpCircle, CheckCircle2, XCircle, ArrowRight, 
  RotateCcw, BookOpen, Search, Lightbulb, ChevronDown, ChevronUp, ArrowLeft
} from "lucide-react";
import { IslandStory, Question } from "../types";
import { sounds } from "../utils/soundEffects";

interface QuizGameProps {
  story: IslandStory;
  onCompleteQuiz: (correctAnswersCount: number) => void;
  onBackToStory: () => void;
  onBackToMap: () => void;
}

export const QuizGame: React.FC<QuizGameProps> = ({
  story,
  onCompleteQuiz,
  onBackToStory,
  onBackToMap,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showStoryPeek, setShowStoryPeek] = useState(false);
  const [showClue, setShowClue] = useState(false);

  // AI Mascot hint state
  const [aiHint, setAiHint] = useState<string | null>(null);
  const [isLoadingHint, setIsLoadingHint] = useState(false);

  // Score tracking
  const [solvedQuestions, setSolvedQuestions] = useState<boolean[]>(
    new Array(story.questions.length).fill(false)
  );

  const currentQ: Question = story.questions[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerChecked && isCorrect) return; // already answered correctly
    sounds.playClick();
    setSelectedOption(index);
    setIsAnswerChecked(false);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;

    const correct = selectedOption === currentQ.correctAnswer;
    setIsAnswerChecked(true);
    setIsCorrect(correct);

    if (correct) {
      sounds.playCorrect();
      sounds.playCoin();
      // Confetti burst
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ["#f59e0b", "#10b981", "#3b82f6", "#ec4899"],
      });

      const updatedSolved = [...solvedQuestions];
      updatedSolved[currentQuestionIndex] = true;
      setSolvedQuestions(updatedSolved);
    } else {
      sounds.playWrong();
    }
  };

  const handleNextQuestion = () => {
    sounds.playClick();
    if (currentQuestionIndex < story.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setIsCorrect(false);
      setShowClue(false);
      setAiHint(null);
    } else {
      // Quiz complete!
      sounds.playTreasureFanfare();
      const correctCount = solvedQuestions.filter(Boolean).length;
      onCompleteQuiz(correctCount);
    }
  };

  // Request Mascot Clue
  const handleRequestMascotHint = () => {
    if (aiHint) return;
    sounds.playClick();
    if (currentQ.clueSentence) {
      setAiHint(`💡 İpucu: "${currentQ.clueSentence}"`);
    } else if (currentQ.explanation) {
      setAiHint(`💡 İpucu: ${currentQ.explanation}`);
    } else {
      setAiHint("💡 İpucu: Hikayedeki anahtar kelimelere odaklan kaşif!");
    }
  };

  return (
    <div className="min-h-[calc(100vh-65px)] bg-gradient-to-b from-amber-50 to-orange-50/60 p-3 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto space-y-5">
        {/* Top Quiz Header & Keys tracker */}
        <div className="bg-amber-900 text-white rounded-3xl p-4 sm:p-5 shadow-xl border-4 border-amber-600 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              id="btn-quiz-back-story"
              onClick={onBackToStory}
              className="p-2 rounded-xl bg-amber-800 hover:bg-amber-700 text-amber-200 border border-amber-600 transition-colors"
              title="Metne Geri Dön"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block">
                {story.islandName}
              </span>
              <h2 className="text-base sm:text-lg font-bold font-['Fredoka',sans-serif] text-yellow-200">
                Soru {currentQuestionIndex + 1} / {story.questions.length}
              </h2>
            </div>
          </div>

          {/* Golden Keys Progress Tracker */}
          <div className="flex items-center gap-1.5 bg-amber-950/90 px-3.5 py-2 rounded-2xl border border-amber-500/50">
            <span className="text-xs font-bold text-amber-200 mr-1 hidden sm:inline">Anahtarlar:</span>
            {story.questions.map((_, idx) => {
              const isSolved = solvedQuestions[idx];
              const isCurrent = idx === currentQuestionIndex;

              return (
                <div
                  key={idx}
                  className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-all ${
                    isSolved
                      ? "bg-yellow-400 border-yellow-200 text-amber-950 shadow-md scale-105"
                      : isCurrent
                      ? "bg-amber-800 border-amber-400 text-yellow-300 animate-pulse"
                      : "bg-amber-900/50 border-amber-700 text-amber-600"
                  }`}
                  title={`Soru ${idx + 1} ${isSolved ? "(Kazanıldı!)" : ""}`}
                >
                  <Key className={`w-4 h-4 ${isSolved ? "fill-amber-950 text-amber-950" : ""}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Peek Story Accordion */}
        <div className="bg-white border-2 border-amber-200 rounded-2xl overflow-hidden shadow-sm">
          <button
            onClick={() => setShowStoryPeek(!showStoryPeek)}
            className="w-full p-3.5 bg-amber-100/70 hover:bg-amber-200/80 flex items-center justify-between text-xs sm:text-sm font-bold text-amber-950 transition-colors text-left"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>Metne Göz At / Hatırla ({story.title})</span>
            </div>
            {showStoryPeek ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showStoryPeek && (
            <div className="p-4 sm:p-5 max-h-60 overflow-y-auto space-y-3 text-sm sm:text-base text-slate-800 bg-amber-50/50 border-t border-amber-200 leading-relaxed font-['Quicksand',sans-serif]">
              {story.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="indent-4">{p}</p>
              ))}
            </div>
          )}
        </div>

        {/* Question Card */}
        <div className="bg-white border-4 border-amber-800 rounded-3xl p-6 sm:p-8 shadow-xl text-left relative overflow-hidden">
          {/* Question category pill */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-bold text-xs font-['Fredoka',sans-serif] uppercase tracking-wider flex items-center gap-1.5">
              <span>🎯</span>
              <span>{currentQ.category || "Okuma Anlama"}</span>
            </span>

            {/* Clue button */}
            <button
              onClick={() => {
                sounds.playClick();
                setShowClue(!showClue);
              }}
              className="px-3 py-1 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-800 font-bold text-xs flex items-center gap-1 transition-colors"
              title="Metindeki ipucu cümlesini gör"
            >
              <Search className="w-3.5 h-3.5 text-amber-600" />
              <span>İpucu Büyüteci</span>
            </button>
          </div>

          {/* Question Text */}
          <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 font-['Fredoka',sans-serif] mb-6 leading-snug">
            {currentQ.question}
          </h3>

          {/* Clue sentence drawer */}
          {showClue && currentQ.clueSentence && (
            <div className="mb-6 p-4 rounded-2xl bg-amber-100/90 border-2 border-amber-400 text-amber-950 text-xs sm:text-sm animate-in fade-in slide-in-from-top-2 flex items-start gap-2.5">
              <span className="text-xl">🔍</span>
              <div>
                <strong className="block text-amber-900 font-bold mb-0.5">Büyüteç İpucu Cümlesi:</strong>
                <p className="italic">"{currentQ.clueSentence}"</p>
              </div>
            </div>
          )}

          {/* Options */}
          <div className="space-y-3.5 mb-6">
            {currentQ.options.map((optionText, optIdx) => {
              const isSelected = selectedOption === optIdx;
              const isOptionCorrect = optIdx === currentQ.correctAnswer;

              let optionStyle = "bg-amber-50/70 border-amber-200 text-slate-900 hover:bg-amber-100 hover:border-amber-400";

              if (isSelected) {
                optionStyle = "bg-amber-200 border-amber-600 text-amber-950 ring-2 ring-amber-500 font-bold";
              }

              if (isAnswerChecked) {
                if (isOptionCorrect) {
                  optionStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500 font-bold shadow-md";
                } else if (isSelected && !isOptionCorrect) {
                  optionStyle = "bg-red-100 border-red-400 text-red-950 font-medium";
                }
              }

              return (
                <button
                  key={optIdx}
                  id={`option-btn-${optIdx}`}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={isAnswerChecked && isCorrect}
                  className={`w-full p-4 rounded-2xl border-2 text-left text-sm sm:text-base transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                >
                  <span className="leading-relaxed font-['Quicksand',sans-serif]">{optionText}</span>
                  {isAnswerChecked && isOptionCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerChecked && isSelected && !isOptionCorrect && (
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mascot AI Hint Helper */}
          {aiHint && (
            <div className="mb-6 p-4 rounded-2xl bg-indigo-50 border-2 border-indigo-300 text-indigo-950 text-xs sm:text-sm flex items-start gap-3">
              <span className="text-2xl">🦜</span>
              <div>
                <strong className="block text-indigo-900 font-bold mb-0.5">Kaptan Gaga Diyor ki:</strong>
                <p className="leading-relaxed">{aiHint}</p>
              </div>
            </div>
          )}

          {/* Feedback Explanation Card */}
          {isAnswerChecked && (
            <div
              className={`p-4 rounded-2xl border-2 mb-6 animate-in zoom-in-95 duration-200 ${
                isCorrect
                  ? "bg-emerald-50 border-emerald-400 text-emerald-950"
                  : "bg-orange-50 border-orange-300 text-orange-950"
              }`}
            >
              <div className="flex items-start gap-2.5">
                <span className="text-2xl">{isCorrect ? "🎉" : "💡"}</span>
                <div className="text-xs sm:text-sm">
                  <strong className="block font-bold mb-1">
                    {isCorrect ? "Harika bildin Kaşif!" : "Neredeyse oluyordu!"}
                  </strong>
                  <p className="leading-relaxed">{currentQ.explanation}</p>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            {/* Mascot Button */}
            {!isCorrect && (
              <button
                id="btn-ask-mascot"
                onClick={handleRequestMascotHint}
                disabled={isLoadingHint}
                className="px-3.5 py-2.5 rounded-xl bg-indigo-100 hover:bg-indigo-200 text-indigo-900 font-bold text-xs sm:text-sm border border-indigo-300 flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Lightbulb className="w-4 h-4 text-indigo-600" />
                <span>{isLoadingHint ? "Düşünüyor..." : "Kaptan Gaga'dan Yardım İste"}</span>
              </button>
            )}

            {/* Check / Next Button */}
            {!isCorrect ? (
              <button
                id="btn-check-answer"
                onClick={handleCheckAnswer}
                disabled={selectedOption === null}
                className={`ml-auto px-6 py-3 rounded-2xl font-extrabold text-sm sm:text-base border-2 transition-all shadow-md font-['Fredoka',sans-serif] ${
                  selectedOption !== null
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-emerald-400 cursor-pointer hover:scale-105"
                    : "bg-slate-200 text-slate-400 border-slate-300 cursor-not-allowed"
                }`}
              >
                Cevabımı Kontrol Et
              </button>
            ) : (
              <button
                id="btn-next-question"
                onClick={handleNextQuestion}
                className="ml-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-amber-950 font-extrabold text-sm sm:text-base border-2 border-yellow-200 shadow-xl flex items-center gap-2 transition-all hover:scale-105 font-['Fredoka',sans-serif]"
              >
                <span>
                  {currentQuestionIndex < story.questions.length - 1
                    ? "Sonraki Soruya Geç"
                    : "Hazine Sandığını Aç! 🎁"}
                </span>
                <ArrowRight className="w-5 h-5 text-amber-950" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
