import React from 'react';
import { Difficulty, HighScoreRecord } from '../types';
import { Globe, Trophy, Play, Volume2, VolumeX, Sparkles, ShieldCheck, Clock, RefreshCw, HelpCircle, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface MainMenuProps {
  onStartGame: (difficulty: Difficulty) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  highScores: HighScoreRecord[];
  onOpenHistory: () => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  onStartGame,
  soundEnabled,
  onToggleSound,
  highScores,
  onOpenHistory,
}) => {
  const [selectedDiff, setSelectedDiff] = React.useState<Difficulty>('easy');

  const difficulties: {
    id: Difficulty;
    title: string;
    subtitle: string;
    desc: string;
    color: string;
    badgeColor: string;
    icon: string;
    example: string;
  }[] = [
    {
      id: 'easy',
      title: '하 (쉬움)',
      subtitle: '가장 대중적인 주요 국가',
      desc: '우리가 일상에서 자주 접하는 주요 국가들의 수도를 맞추는 입문 모드입니다.',
      color: 'from-emerald-500 to-teal-600',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      icon: '🌱',
      example: '예: 미국, 프랑스, 일본, 영국, 독일, 대한민국 등 (40개국)'
    },
    {
      id: 'medium',
      title: '중 (보통)',
      subtitle: '보통 대중적인 세계 국가',
      desc: '친숙하지만 막상 헷갈리기 쉬운 매력적인 중견 국가들의 수도를 마스터해보세요.',
      color: 'from-amber-500 to-orange-600',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      icon: '🧭',
      example: '예: 튀르키예, 베트남, 스위스, 포르투갈, 아르헨티나 등 (70개국)'
    },
    {
      id: 'hard',
      title: '상 (어려움)',
      subtitle: '가장 대중적이지 않은 비경',
      desc: '세계 지리 상위 1%에 도전하세요! 낯설고 신비로운 오지 및 도서 국가들의 수도입니다.',
      color: 'from-rose-500 to-red-600',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      icon: '👑',
      example: '예: 투발루, 레소토, 코모로, 나우루, 키리바시, 상투메 등 (80개국+)'
    },
    {
      id: 'all',
      title: '전체 (혼합)',
      subtitle: '전 세계 모든 국가 랜덤',
      desc: '쉬운 국가부터 어려운 오지 국가까지 전 세계 190여 개국 전체 모집단에서 무작위 출제!',
      color: 'from-indigo-500 to-purple-600',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      icon: '🌍',
      example: '전 세계 5대양 6대주 모든 국가 190여 개국 통합 모집단'
    }
  ];

  const bestScore = highScores.length > 0 ? Math.max(...highScores.map(s => s.score)) : 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      {/* Background colorful motif */}
      <div className="absolute inset-0 flex opacity-10 pointer-events-none">
        <div className="flex-1 bg-indigo-600" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-rose-500" />
      </div>

      {/* Top Bar - Vibrant Palette Style */}
      <header className="h-20 bg-white border-b-4 border-indigo-500 flex items-center justify-between px-4 sm:px-10 shrink-0 relative z-10 shadow-sm">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md font-black text-xl">
            🌍
          </div>
          <div>
            <span className="text-[10px] sm:text-xs font-black tracking-wider uppercase text-indigo-600 block leading-none mb-1">World Capital Quiz</span>
            <h1 className="text-base sm:text-xl font-black tracking-tight text-slate-800 leading-none">세계 수도 맞추기</h1>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {highScores.length > 0 && (
            <button
              onClick={onOpenHistory}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-100 hover:bg-amber-200 border-2 border-amber-300 transition text-sm font-black text-amber-900 shadow-sm hover:scale-105 active:scale-95"
            >
              <span className="text-lg">🏆</span>
              <span className="hidden sm:inline">최고 점수:</span>
              <span className="font-black text-amber-700">{bestScore.toLocaleString()}점</span>
            </button>
          )}

          <button
            onClick={onToggleSound}
            aria-label="효과음 켜기/끄기"
            className="p-2.5 rounded-2xl bg-slate-100 hover:bg-indigo-50 border-2 border-slate-200 transition text-slate-600 hover:text-indigo-600"
            title={soundEnabled ? "효과음 켜짐" : "효과음 꺼짐"}
          >
            {soundEnabled ? <Volume2 className="w-5 h-5 text-emerald-600" /> : <VolumeX className="w-5 h-5 text-rose-500" />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl w-full mx-auto my-auto py-8 px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column: Hero & Rules */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border-2 border-indigo-200 text-indigo-800 text-xs sm:text-sm font-black uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>국기 모티브 디자인 & 4지선다 세계 지리</span>
          </div>

          <div className="bg-white p-6 rounded-[40px] shadow-xl border-8 border-indigo-50 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-800 mb-4">
              세계 각국의 <span className="text-indigo-600 underline decoration-amber-400 decoration-4 underline-offset-4">수도 이름</span>을 얼마만큼 아시나요?
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
              매 게임마다 무작위로 선택된 <strong className="text-indigo-600 font-black">20문제</strong>가 출제됩니다. 각 문항당 제한시간 <strong className="text-rose-500 font-black">10초</strong> 안에 정답을 골라보세요!
            </p>
          </div>

          {/* Rules Banner - Vibrant White Card */}
          <div className="bg-white border-4 border-slate-200 rounded-3xl p-5 sm:p-6 space-y-3 text-left shadow-lg">
            <h3 className="text-sm font-black text-slate-800 flex items-center gap-2 border-b-2 border-slate-100 pb-2.5 uppercase tracking-wide">
              <Award className="w-5 h-5 text-amber-500" />
              게임 진행 규칙 및 혜택
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-semibold">
              <li className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-black mt-0.5">1</div>
                <span><strong className="text-slate-800 font-black">문제당 10초 제한:</strong> 빠른 판단력과 지리 상식을 테스트합니다.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-black mt-0.5">2</div>
                <span><strong className="text-slate-800 font-black">1회의 재도전 기회:</strong> 한번 틀려도 <strong className="text-emerald-600">한 번 더 맞출 기회</strong>를 제공합니다! (1차 정답 5점, 2차 정답 3점)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 font-black mt-0.5">3</div>
                <span><strong className="text-slate-800 font-black">국기 모티브 배경:</strong> 문항마다 해당 국가 국기 고유의 색상과 엠블럼 배경이 눈을 즐겁게 합니다.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column: Difficulty Selector */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between bg-white px-6 py-3 rounded-2xl border-2 border-slate-200 shadow-sm">
            <h3 className="text-base sm:text-lg font-black flex items-center gap-2 text-slate-800">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
              도전할 난이도를 선택하세요
            </h3>
            <span className="text-xs font-bold bg-slate-100 px-3 py-1 rounded-full text-slate-600">총 190여 개국</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {difficulties.map((diff) => {
              const isSelected = selectedDiff === diff.id;
              return (
                <motion.div
                  key={diff.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedDiff(diff.id)}
                  className={`cursor-pointer rounded-3xl p-5 transition-all flex flex-col justify-between min-h-[180px] border-b-8 ${
                    isSelected
                      ? 'bg-indigo-50 border-indigo-600 shadow-xl ring-4 ring-indigo-200'
                      : 'bg-white border-slate-300 hover:border-indigo-400 hover:bg-slate-50 shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl shadow-inner">
                          {diff.icon}
                        </div>
                        <h4 className="font-black text-lg text-slate-800">{diff.title}</h4>
                      </div>
                      <span className={`text-[10px] sm:text-xs font-black px-3 py-1 rounded-full border-2 uppercase tracking-tight ${diff.badgeColor}`}>
                        {diff.subtitle}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-3 font-semibold leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t-2 border-slate-100 text-[11px] sm:text-xs text-slate-400 font-bold">
                    {diff.example}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Start Game Button - Vibrant Style */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onStartGame(selectedDiff)}
            className="w-full py-5 px-8 rounded-3xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xl shadow-xl hover:shadow-indigo-500/30 flex items-center justify-center gap-3 transition cursor-pointer mt-6 border-b-8 border-indigo-800"
          >
            <Play className="w-7 h-7 fill-current" />
            <span>
              {difficulties.find(d => d.id === selectedDiff)?.title} 모드로 퀴즈 시작 (20문항)
            </span>
          </motion.button>
        </div>
      </main>

      {/* Footer */}
      <footer className="h-16 bg-slate-100 border-t-2 border-slate-200 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 shrink-0 text-xs sm:text-sm font-bold text-slate-500 relative z-10 gap-2">
        <div>
          🌐 <strong className="text-slate-700 font-black">세계 수도 맞추기 게임</strong> &mdash; 4지선다 & 1회 재도전 시스템
        </div>
        <div>
          Powered by Google AI Studio
        </div>
      </footer>
    </div>
  );
};
