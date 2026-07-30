import React, { useEffect } from 'react';
import { QuizStats, Difficulty } from '../types';
import { sound } from '../utils/audio';
import { Trophy, RefreshCw, Home, Award, CheckCircle2, AlertCircle, Clock, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';

interface ResultScreenProps {
  stats: QuizStats;
  onPlayAgain: (difficulty: Difficulty) => void;
  onReturnHome: () => void;
  onOpenHistory: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  stats,
  onPlayAgain,
  onReturnHome,
  onOpenHistory,
}) => {
  const [expandedId, setExpandedId] = React.useState<number | null>(null);

  useEffect(() => {
    // Play celebratory fanfare on mount
    sound.playFanfare();
  }, []);

  const getTierInfo = (score: number) => {
    if (score >= 90) {
      return {
        title: '👑 세계 지리 그랜드마스터',
        desc: '전 세계 수도를 완벽하게 꿰뚫어 보는 최강의 지리 마스터입니다!',
        color: 'from-amber-400 via-yellow-300 to-orange-500 text-slate-950',
        badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40'
      };
    } else if (score >= 75) {
      return {
        title: '🏆 글로벌 외교관 후보생',
        desc: '뛰어난 상식과 폭넓은 글로벌 시야를 자랑하는 실력자입니다!',
        color: 'from-blue-400 via-indigo-300 to-teal-400 text-slate-950',
        badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-500/40'
      };
    } else if (score >= 55) {
      return {
        title: '🗺️ 세계 여행 탐험가',
        desc: '여러 나라에 대한 호기심과 상식이 풍부한 열정 탐험가입니다!',
        color: 'from-emerald-400 via-teal-300 to-green-500 text-slate-950',
        badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
      };
    } else if (score >= 35) {
      return {
        title: '🎒 배낭여행 초보자',
        desc: '세계 지리에 즐겁게 입문하는 활기찬 여행가입니다!',
        color: 'from-purple-400 via-pink-300 to-rose-400 text-slate-950',
        badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/40'
      };
    } else {
      return {
        title: '🌱 세계 지리 초심자',
        desc: '이제 막 세계 여러 나라의 매력에 관심을 가지기 시작했습니다!',
        color: 'from-slate-300 via-gray-200 to-slate-400 text-slate-950',
        badgeBg: 'bg-slate-500/20 text-slate-300 border-slate-500/40'
      };
    }
  };

  const tier = getTierInfo(stats.score);
  const totalCorrect = stats.correctFirstTry + stats.correctSecondTry;
  const accuracyPercent = Math.round((totalCorrect / 20) * 100);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 sm:p-6 lg:p-8 selection:bg-indigo-500 selection:text-white relative overflow-x-hidden font-sans">
      {/* Background colorful motif */}
      <div className="absolute inset-0 flex opacity-10 pointer-events-none">
        <div className="flex-1 bg-indigo-600" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-rose-500" />
      </div>

      <main className="max-w-4xl w-full mx-auto space-y-8 relative z-10 py-4">
        {/* Top Hero Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 bg-white p-8 rounded-[40px] shadow-xl border-8 border-indigo-50"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border-2 border-indigo-200 text-indigo-800 text-xs sm:text-sm font-black uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>20문항 퀴즈 종료 &mdash; 최종 결과 보고서</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-800 italic">
            {tier.title}
          </h1>
          <p className="text-slate-600 font-semibold text-sm sm:text-base max-w-xl mx-auto">
            {tier.desc}
          </p>
        </motion.div>

        {/* Score & Main Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Total Score Box - Vibrant Theme */}
          <div className="md:col-span-1 rounded-[32px] p-6 bg-indigo-600 border-4 border-indigo-400 shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden text-white">
            <span className="text-xs font-black uppercase tracking-widest text-indigo-200 mb-1">최종 획득 점수</span>
            <div className="text-5xl sm:text-6xl font-black text-white tracking-tight my-2 flex items-baseline gap-1">
              {stats.score.toLocaleString()}
              <span className="text-2xl font-bold text-indigo-200">/100</span>
            </div>
            <span className="text-xs text-indigo-100 mt-2 font-bold bg-indigo-700 px-4 py-1.5 rounded-full border border-indigo-500">
              정답률 <strong className="text-white">{accuracyPercent}%</strong> (20문항 중 {totalCorrect}개)
            </span>
          </div>

          {/* Breakdown Stats */}
          <div className="md:col-span-2 rounded-[32px] p-6 bg-white border-4 border-slate-200 shadow-xl grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-inner">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block">1차 시도 정답 (5점)</span>
                <span className="text-xl font-black text-emerald-600">{stats.correctFirstTry}문제</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-inner">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block">2차 재도전 정답 (3점)</span>
                <span className="text-xl font-black text-amber-600">{stats.correctSecondTry}문제</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 shadow-inner">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block">오답 / 시간초과 (0점)</span>
                <span className="text-xl font-black text-rose-600">
                  {stats.wrongCount + stats.timeoutCount}문제
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-inner">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block">총 소요 시간</span>
                <span className="text-xl font-black text-indigo-600">
                  {stats.totalTime}초 <span className="text-xs font-bold text-slate-400">({Math.round(stats.totalTime / 20)}초/문항)</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons - Vibrant Theme */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onPlayAgain(stats.difficulty)}
            className="flex-1 py-4 px-6 rounded-3xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-lg shadow-xl flex items-center justify-center gap-2.5 transition border-b-8 border-indigo-800"
          >
            <RefreshCw className="w-5 h-5" />
            <span>같은 난이도({stats.difficulty === 'easy' ? '하' : stats.difficulty === 'medium' ? '중' : stats.difficulty === 'hard' ? '상' : '전체'})로 다시 도전</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onReturnHome}
            className="py-4 px-6 rounded-3xl bg-white hover:bg-slate-100 border-2 border-slate-200 text-slate-700 font-black text-lg flex items-center justify-center gap-2.5 transition shadow-md border-b-8 border-slate-300"
          >
            <Home className="w-5 h-5 text-indigo-600" />
            <span>난이도 변경 / 홈으로</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenHistory}
            className="py-4 px-6 rounded-3xl bg-amber-400 hover:bg-amber-500 border-b-8 border-amber-600 text-slate-900 font-black text-lg flex items-center justify-center gap-2 transition shadow-xl"
          >
            <Trophy className="w-5 h-5" />
            <span>명예의 전당</span>
          </motion.button>
        </div>

        {/* 20 Questions Review Accordion - Vibrant Theme */}
        <div className="space-y-4 pt-6 bg-white p-6 sm:p-8 rounded-[32px] border-4 border-slate-200 shadow-lg">
          <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
            <h3 className="text-lg font-black flex items-center gap-2 text-slate-800">
              📋 20개 전체 문항 리뷰 및 해설
            </h3>
            <span className="text-xs font-bold text-slate-400">문항을 클릭하면 지리 상식을 볼 수 있습니다.</span>
          </div>

          <div className="space-y-3">
            {stats.history.map((q, idx) => {
              const isExpanded = expandedId === q.id;
              const result = q.result || 'wrong';

              let badge = <span className="px-3 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-700 border-2 border-rose-200">🔴 오답</span>;
              if (result === 'correct_first') {
                badge = <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-700 border-2 border-emerald-200">🟢 1차 정답 (+5점)</span>;
              } else if (result === 'correct_second') {
                badge = <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-700 border-2 border-amber-200">🟡 2차 정답 (+3점)</span>;
              } else if (result === 'timeout') {
                badge = <span className="px-3 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-700 border-2 border-rose-200">⏰ 시간초과</span>;
              }

              return (
                <div
                  key={q.id}
                  onClick={() => setExpandedId(isExpanded ? null : q.id)}
                  className="rounded-2xl bg-slate-50 hover:bg-indigo-50/50 border-2 border-slate-200 transition overflow-hidden cursor-pointer shadow-sm"
                >
                  <div className="p-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black text-indigo-500 w-6">#{idx + 1}</span>
                      <span className="text-2xl sm:text-3xl select-none">{q.target.flagEmoji}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-black text-slate-800 text-sm sm:text-base">{q.target.name}</span>
                          <span className="text-xs text-slate-500 font-bold hidden sm:inline">({q.target.continent})</span>
                        </div>
                        <div className="text-xs text-slate-600 font-semibold mt-0.5">
                          정답 수도: <strong className="text-indigo-600 font-black">{q.target.capital}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-400 hidden md:inline">{q.timeSpent}초 소요</span>
                      {badge}
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-3 border-t-2 border-slate-200 bg-white text-xs sm:text-sm text-slate-600 space-y-2 animate-fadeIn">
                      <div className="flex items-center gap-2 text-indigo-600 font-black">
                        <Sparkles className="w-4 h-4" />
                        <span>{q.target.name} 지리 및 수도 정보:</span>
                      </div>
                      <p className="leading-relaxed pl-6 text-slate-700 font-semibold">
                        {q.target.funFact || `${q.target.name}의 공식 수도는 ${q.target.capital}입니다.`}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl w-full mx-auto py-6 text-center text-xs sm:text-sm font-bold text-slate-500 relative z-10 border-t-2 border-slate-200 mt-12">
        👑 세계 수도 맞추기 게임 &bull; 국기 모티브 4지선다 퀴즈
      </footer>
    </div>
  );
};
