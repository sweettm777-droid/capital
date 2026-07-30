import React, { useState, useEffect, useRef } from 'react';
import { Question, Difficulty, AttemptResult } from '../types';
import { sound } from '../utils/audio';
import { Clock, Volume2, VolumeX, XCircle, CheckCircle2, AlertTriangle, Sparkles, HelpCircle, ShieldAlert, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuizScreenProps {
  question: Question;
  questionIndex: number; // 0-indexed (0 to 19)
  totalQuestions: number; // 20
  difficulty: Difficulty;
  score: number;
  onAnswerSubmit: (selectedOption: string, result: AttemptResult, timeSpent: number) => void;
  onNextQuestion: () => void;
  onQuitGame: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  questionIndex,
  totalQuestions,
  difficulty,
  score,
  onAnswerSubmit,
  onNextQuestion,
  onQuitGame,
  soundEnabled,
  onToggleSound,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [isAnsweredFinal, setIsAnsweredFinal] = useState<boolean>(false);
  const [attemptsLeft, setAttemptsLeft] = useState<number>(2);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [lastResult, setLastResult] = useState<AttemptResult | null>(null);
  const [secondChanceActive, setSecondChanceActive] = useState<boolean>(false);
  const [flagError, setFlagError] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  // Reset local state whenever the question changes
  useEffect(() => {
    setTimeLeft(10);
    setIsAnsweredFinal(false);
    setAttemptsLeft(question.attemptsLeft || 2);
    setSelectedOptions([]);
    setLastResult(null);
    setSecondChanceActive(false);
    setFlagError(false);
    startTimeRef.current = Date.now();

    // Start countdown
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleTimeout();
          return 0;
        }
        // Play tick sound when urgent (< 3s)
        if (prev <= 4 && prev > 1 && !isAnsweredFinal) {
          sound.playTick(true);
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [question.id]);

  const handleTimeout = () => {
    if (isAnsweredFinal) return;
    setIsAnsweredFinal(true);
    setLastResult('timeout');
    sound.playTimeout();
    const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
    onAnswerSubmit('', 'timeout', Math.min(10, timeSpent));

    setTimeout(() => {
      onNextQuestion();
    }, 2200);
  };

  const handleOptionClick = (option: string) => {
    if (isAnsweredFinal || selectedOptions.includes(option)) return;

    sound.playClick();
    const newSelected = [...selectedOptions, option];
    setSelectedOptions(newSelected);

    const isCorrect = option === question.target.capital;
    const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);

    if (isCorrect) {
      // Correct!
      if (timerRef.current) clearInterval(timerRef.current);
      setIsAnsweredFinal(true);

      const resultType: AttemptResult = attemptsLeft === 2 ? 'correct_first' : 'correct_second';
      setLastResult(resultType);

      if (resultType === 'correct_first') {
        sound.playCorrectFirst();
      } else {
        sound.playCorrectSecond();
      }

      onAnswerSubmit(option, resultType, Math.min(10, timeSpent));

      setTimeout(() => {
        onNextQuestion();
      }, 1600);
    } else {
      // Wrong choice
      if (attemptsLeft === 2) {
        // First mistake! Give 1 more chance!
        setAttemptsLeft(1);
        setSecondChanceActive(true);
        sound.playSecondChanceWarning();
        // Give +3 seconds grace buffer so user has realistic time to read and try again (cap at 10s)
        setTimeLeft((prev) => Math.min(10, prev + 3));
      } else {
        // Second mistake - failed question
        if (timerRef.current) clearInterval(timerRef.current);
        setIsAnsweredFinal(true);
        setLastResult('wrong');
        sound.playWrongFinal();
        onAnswerSubmit(option, 'wrong', Math.min(10, timeSpent));

        setTimeout(() => {
          onNextQuestion();
        }, 2200);
      }
    }
  };

  const getDifficultyLabel = () => {
    switch (difficulty) {
      case 'easy': return '하 (쉬움)';
      case 'medium': return '중 (보통)';
      case 'hard': return '상 (어려움)';
      default: return '전체 (혼합)';
    }
  };

  const flagUrl = `https://flagcdn.com/w640/${question.target.code.toLowerCase()}.png`;
  const primaryColor = question.target.colors[0] || '#1e3a8a';
  const secondaryColor = question.target.colors[1] || '#dc2626';

  const timeProgressPercent = (timeLeft / 10) * 100;
  const isUrgent = timeLeft <= 3;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between font-sans relative overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Background Motif based on National Flag Colors */}
      <div className="absolute inset-0 flex opacity-15 pointer-events-none transition-all duration-1000">
        <div className="flex-1 transition-colors duration-1000" style={{ backgroundColor: primaryColor }} />
        <div className="flex-1 bg-white" />
        <div className="flex-1 transition-colors duration-1000" style={{ backgroundColor: secondaryColor }} />
      </div>

      {/* Flag Watermark in background */}
      <div className="absolute right-[-5%] bottom-[-5%] w-[450px] h-[350px] opacity-[0.06] pointer-events-none select-none rotate-12 transform overflow-hidden">
        <span className="text-[320px] leading-none">{question.target.flagEmoji}</span>
      </div>

      {/* Header Bar - Vibrant Palette Style */}
      <header className="h-20 bg-white border-b-4 border-indigo-500 flex items-center justify-between px-4 sm:px-8 shrink-0 relative z-10 shadow-sm">
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={() => {
              if (confirm('게임을 중단하고 메인 메뉴로 돌아가시겠습니까? 진행 중인 점수는 저장되지 않습니다.')) {
                onQuitGame();
              }
            }}
            className="p-2 rounded-2xl bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 border-2 border-slate-200 transition font-bold"
            title="게임 중단"
          >
            <XCircle className="w-5 h-5" />
          </button>

          <div className="bg-indigo-100 text-indigo-700 px-3 sm:px-4 py-2 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 border-2 border-indigo-200">
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-indigo-500">난이도</span>
            <span>{getDifficultyLabel()}</span>
          </div>

          <div className="hidden sm:block h-10 w-px bg-slate-200" />

          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white flex items-center justify-center font-black text-base sm:text-lg shadow-md transition-colors ${
              isUrgent ? 'bg-rose-500 animate-pulse' : timeLeft <= 5 ? 'bg-amber-500' : 'bg-indigo-600'
            }`}>
              {timeLeft <= 9 ? `0${timeLeft}` : timeLeft}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400 leading-none">Seconds</span>
              <span className={`font-black leading-tight text-sm sm:text-base ${isUrgent ? 'text-rose-600' : 'text-slate-700'}`}>Time Left</span>
            </div>
          </div>
        </div>

        {/* Question Counter Pill */}
        <div className="flex items-center bg-slate-100 px-4 sm:px-6 py-2 rounded-full border-2 border-slate-200 shadow-inner">
          <span className="font-black text-xl sm:text-2xl text-indigo-600">{questionIndex < 9 ? `0${questionIndex + 1}` : questionIndex + 1}</span>
          <span className="mx-1.5 sm:mx-2 text-slate-400 font-bold">/</span>
          <span className="font-bold text-slate-500">{totalQuestions}</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="text-right">
            <div className="text-[10px] uppercase font-bold text-slate-400">Current Score</div>
            <div className="font-black text-xl sm:text-2xl text-emerald-500">{score.toLocaleString()}</div>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-400 text-slate-900 rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
            <Award className="w-6 h-6 fill-current" />
          </div>

          <button
            onClick={onToggleSound}
            aria-label="효과음 토글"
            className="p-2 sm:p-2.5 rounded-2xl bg-slate-100 hover:bg-indigo-50 border-2 border-slate-200 text-slate-500 hover:text-indigo-600 transition"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5 text-emerald-600" /> : <VolumeX className="w-5 h-5 text-rose-500" />}
          </button>
        </div>
      </header>

      {/* Progress Bar at top */}
      <div className="h-2 w-full bg-slate-200 relative z-10">
        <div
          className={`h-full transition-all duration-500 ${
            isUrgent ? 'bg-rose-500' : timeLeft <= 5 ? 'bg-amber-400' : 'bg-emerald-500'
          }`}
          style={{ width: `${Math.max(0, timeProgressPercent)}%` }}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 p-4 sm:p-6 max-w-4xl w-full mx-auto my-auto">
        <motion.div
          key={`card-${question.id}`}
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="w-full text-center flex flex-col items-center"
        >
          {/* Main Question Card - Vibrant Palette Theme */}
          <div className="w-full bg-white p-4 sm:p-6 rounded-[40px] shadow-2xl mb-6 border-8 border-indigo-50 flex flex-col items-center">
            {/* Continent Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-800 border-2 border-indigo-200 text-xs font-black uppercase tracking-wider">
                🌐 {question.target.continent}
              </span>
            </div>

            {/* National Flag Graphic */}
            <div className="mb-4 relative group">
              <div className="w-44 sm:w-56 h-28 sm:h-36 rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900 flex items-center justify-center relative">
                {!flagError ? (
                  <img
                    src={flagUrl}
                    alt={`${question.target.name} 국기`}
                    className="w-full h-full object-cover transition transform group-hover:scale-105 duration-500"
                    onError={() => setFlagError(true)}
                  />
                ) : (
                  <span className="text-7xl sm:text-8xl select-none">{question.target.flagEmoji}</span>
                )}
              </div>
              <div className="absolute -bottom-3 right-[-8px] text-3xl sm:text-4xl shadow-lg bg-white rounded-full p-1.5 border-2 border-slate-200">
                {question.target.flagEmoji}
              </div>
            </div>

            {/* Vibrant Title Banner */}
            <div className="w-full bg-indigo-600 text-white px-6 sm:px-12 py-6 sm:py-8 rounded-[32px] shadow-lg mb-4">
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] font-black opacity-80 mb-1 sm:mb-2">What is the Capital of</h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black italic tracking-tight">{question.target.name}</h1>
            </div>

            {/* Second chance / mistake alert banner */}
            <AnimatePresence>
              {secondChanceActive && !isAnsweredFinal && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full mb-4 p-3.5 rounded-2xl bg-amber-100 border-2 border-amber-300 text-amber-800 flex items-center justify-center gap-2 shadow-md text-xs sm:text-sm font-black animate-bounce"
                >
                  <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>⚡ 아쉽게 틀렸습니다! 하지만 기회가 1번 더 남았습니다. (+3초 추가)</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Second Chance Status Indicator */}
            <div className="flex flex-wrap justify-center items-center gap-3 w-full pt-2">
              <div className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full border-2 border-emerald-200">
                <div className={`w-3.5 h-3.5 rounded-full ${attemptsLeft >= 1 ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-slate-300'}`} />
                <span className="text-xs font-black uppercase tracking-tight">
                  {attemptsLeft} Life Remaining
                </span>
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-full border-2 border-slate-200 text-xs font-bold text-slate-500">
                1회 재도전 기회 제공 (1차 5점, 2차 3점)
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Multiple Choice Options Grid - Vibrant Palette Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {question.options.map((option, idx) => {
            const isSelected = selectedOptions.includes(option);
            const isTargetCapital = option === question.target.capital;
            const letter = ['A', 'B', 'C', 'D'][idx];

            let btnStyle = "bg-white border-slate-300 text-slate-700 hover:border-indigo-600 hover:bg-indigo-50";
            let badgeStyle = "bg-slate-100 text-slate-500 group-hover:bg-indigo-600 group-hover:text-white";
            let badgeText = letter;

            if (isAnsweredFinal) {
              if (isTargetCapital) {
                // Correct answer in green vibrant style
                btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-xl ring-4 ring-emerald-300";
                badgeStyle = "bg-emerald-600 text-white font-black";
                badgeText = "✓";
              } else if (isSelected) {
                // Wrong choice in red style
                btnStyle = "bg-rose-50 border-rose-500 text-rose-800 opacity-80";
                badgeStyle = "bg-rose-600 text-white font-black";
                badgeText = "✕";
              } else {
                btnStyle = "bg-slate-100 border-slate-200 text-slate-400 opacity-50";
                badgeStyle = "bg-slate-200 text-slate-400";
              }
            } else if (isSelected) {
              // Clicked wrong during first attempt
              btnStyle = "bg-rose-50 border-rose-400 text-rose-700 opacity-60 cursor-not-allowed";
              badgeStyle = "bg-rose-500 text-white";
              badgeText = "✕";
            }

            return (
              <motion.button
                key={option}
                whileHover={!isAnsweredFinal && !isSelected ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isAnsweredFinal && !isSelected ? { scale: 0.98 } : {}}
                onClick={() => handleOptionClick(option)}
                disabled={isAnsweredFinal || isSelected}
                className={`rounded-3xl border-b-8 p-4 sm:px-8 sm:py-5 flex items-center justify-between group transition-all shadow-md ${btnStyle}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl font-black text-lg sm:text-xl flex items-center justify-center shrink-0 transition-all ${badgeStyle}`}>
                    {badgeText}
                  </div>
                  <span className="text-xl sm:text-2xl font-black line-clamp-1 text-left">{option}</span>
                </div>
                {isAnsweredFinal && isTargetCapital && (
                  <span className="ml-2 bg-emerald-200 text-emerald-800 text-xs font-black px-3 py-1 rounded-full uppercase shrink-0">
                    정답!
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Fun Fact Toast when answered or timeout */}
        <AnimatePresence>
          {isAnsweredFinal && question.target.funFact && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full mt-6 p-4 rounded-3xl bg-indigo-50 border-4 border-indigo-200 text-xs sm:text-sm text-indigo-900 flex items-start gap-3 shadow-lg"
            >
              <Sparkles className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
              <div className="text-left">
                <strong className="text-indigo-700 font-black block mb-0.5 uppercase tracking-wide">💡 {question.target.name} 지리 상식</strong>
                <span className="font-semibold text-slate-700">{question.target.funFact}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="h-14 bg-slate-100 border-t-2 border-slate-200 flex items-center justify-center px-4 shrink-0 text-xs sm:text-sm font-bold text-slate-500">
        1차 정답: <span className="text-emerald-600 font-black mx-1">5점</span> &bull; 2차 정답(재도전): <span className="text-amber-600 font-black mx-1">3점</span> &bull; 오답/시간초과: <span className="text-rose-600 font-black mx-1">0점</span>
      </footer>
    </div>
  );
};
