import React from 'react';
import { HighScoreRecord } from '../types';
import { Trophy, X, Calendar, Award, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  highScores: HighScoreRecord[];
  onClearHistory: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  isOpen,
  onClose,
  highScores,
  onClearHistory,
}) => {
  if (!isOpen) return null;

  const getDifficultyBadge = (diff: string) => {
    switch (diff) {
      case 'easy':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border-2 border-emerald-300">하 (쉬움)</span>;
      case 'medium':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-100 text-amber-800 border-2 border-amber-300">중 (보통)</span>;
      case 'hard':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-100 text-rose-800 border-2 border-rose-300">상 (어려움)</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-indigo-100 text-indigo-800 border-2 border-indigo-300">전체 (혼합)</span>;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md font-sans">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white border-8 border-indigo-50 rounded-[40px] max-w-xl w-full max-h-[80vh] flex flex-col shadow-2xl overflow-hidden text-slate-800"
        >
          {/* Header */}
          <div className="p-6 border-b-4 border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-inner">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-xl text-slate-800">명예의 전당 (최고 기록)</h3>
                <p className="text-xs font-bold text-slate-500">기록된 지난 수도 퀴즈 플레이 성적입니다.</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-2xl bg-white hover:bg-rose-50 border-2 border-slate-200 text-slate-400 hover:text-rose-600 transition shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="p-6 overflow-y-auto flex-1 space-y-3.5">
            {highScores.length === 0 ? (
              <div className="text-center py-12 text-slate-400 space-y-3">
                <div className="w-16 h-16 rounded-3xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400 text-2xl">
                  🏆
                </div>
                <p className="font-black text-slate-600 text-base">아직 저장된 게임 기록이 없습니다.</p>
                <p className="text-xs font-semibold text-slate-400">첫 번째 퀴즈에 도전해 명예의 전당에 이름을 남겨보세요!</p>
              </div>
            ) : (
              highScores.map((record, idx) => (
                <div
                  key={record.id}
                  className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 flex items-center justify-between gap-4 hover:border-indigo-400 hover:bg-indigo-50/30 transition shadow-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl font-black flex items-center justify-center text-sm shrink-0 shadow-sm ${
                      idx === 0 ? 'bg-amber-400 text-slate-900 border-2 border-amber-300 text-base' :
                      idx === 1 ? 'bg-slate-300 text-slate-800 border-2 border-slate-200' :
                      idx === 2 ? 'bg-amber-700 text-white border-2 border-amber-600' : 'bg-slate-200 text-slate-600 font-bold'
                    }`}>
                      #{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-black text-xl text-slate-800">{record.score.toLocaleString()}점</span>
                        {getDifficultyBadge(record.difficulty)}
                      </div>
                      <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                        <span className="flex items-center gap-1 text-emerald-600">
                          <Award className="w-4 h-4" />
                          20문항 중 {record.correctCount}개 정답
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1 text-indigo-600">
                          <Calendar className="w-4 h-4" />
                          {new Date(record.date).toLocaleDateString('ko-KR')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-5 border-t-4 border-slate-100 bg-slate-50 flex items-center justify-between">
            {highScores.length > 0 ? (
              <button
                onClick={() => {
                  if (confirm('모든 최고 점수 기록을 삭제하시겠습니까?')) {
                    onClearHistory();
                  }
                }}
                className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1.5 px-3.5 py-2 rounded-xl hover:bg-rose-100 transition border border-transparent hover:border-rose-200"
              >
                <Trash2 className="w-4 h-4" />
                <span>기록 전체 삭제</span>
              </button>
            ) : <div />}
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm transition shadow-md border-b-4 border-indigo-800"
            >
              닫기
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
