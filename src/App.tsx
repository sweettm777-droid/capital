/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { GameState, Difficulty, Question, QuizStats, HighScoreRecord, AttemptResult } from './types';
import { generateQuizPool, generateOptions, ALL_COUNTRIES } from './data/countries';
import { MainMenu } from './components/MainMenu';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { HistoryModal } from './components/HistoryModal';
import { sound } from './utils/audio';

const STORAGE_KEY = 'world_capital_quiz_highscores_v1';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);

  // Quiz progression state
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [history, setHistory] = useState<Question[]>([]);
  const [stats, setStats] = useState<QuizStats | null>(null);

  const historyRef = useRef<Question[]>([]);

  // High scores stored in localStorage
  const [highScores, setHighScores] = useState<HighScoreRecord[]>([]);

  // Load highscores from localStorage on initial render
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setHighScores(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load highscores from localStorage', e);
    }
  }, []);

  const saveHighScore = (newScore: number, diff: Difficulty, correctCount: number, totalTime: number) => {
    try {
      const record: HighScoreRecord = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        score: newScore,
        difficulty: diff,
        correctCount,
        totalTime,
      };
      const updated = [record, ...highScores]
        .sort((a, b) => b.score - a.score)
        .slice(0, 20); // Keep top 20 scores
      setHighScores(updated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save highscore', e);
    }
  };

  const handleClearHistory = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setHighScores([]);
    } catch (e) {
      console.error('Failed to clear highscores', e);
    }
  };

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.enabled = nextState;
    if (nextState) {
      sound.playClick();
    }
  };

  const handleStartGame = (selectedDiff: Difficulty) => {
    sound.playClick();
    setDifficulty(selectedDiff);

    // Generate 20 questions
    const pool = generateQuizPool(selectedDiff, 20);
    const generatedQuestions: Question[] = pool.map((country, idx) => ({
      id: idx + 1,
      target: country,
      options: generateOptions(country, ALL_COUNTRIES),
      attemptsLeft: 2,
      selectedOptions: [],
      timeSpent: 0,
    }));

    setQuestions(generatedQuestions);
    setCurrentIndex(0);
    setScore(0);
    setHistory([]);
    historyRef.current = [];
    setGameState('playing');
  };

  const handleAnswerSubmit = (selectedOption: string, result: AttemptResult, timeSpent: number) => {
    let pointsAdded = 0;
    if (result === 'correct_first') pointsAdded = 5;
    else if (result === 'correct_second') pointsAdded = 3;

    setScore((prev) => prev + pointsAdded);

    // Update current question record
    const updatedQ: Question = {
      ...questions[currentIndex],
      result,
      timeSpent,
      selectedOptions: selectedOption ? [...questions[currentIndex].selectedOptions, selectedOption] : questions[currentIndex].selectedOptions,
    };

    historyRef.current = [...historyRef.current, updatedQ];
    setHistory(historyRef.current);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // End of quiz - calculate stats and transition to result screen!
      const currentHistory = historyRef.current;
      const totalCorrectFirst = currentHistory.filter(q => q.result === 'correct_first').length;
      const totalCorrectSecond = currentHistory.filter(q => q.result === 'correct_second').length;
      const totalWrong = currentHistory.filter(q => q.result === 'wrong').length;
      const totalTimeout = currentHistory.filter(q => q.result === 'timeout').length;
      const totalTimeSpent = currentHistory.reduce((acc, q) => acc + (q.timeSpent || 0), 0);

      const finalScore = (totalCorrectFirst * 5) + (totalCorrectSecond * 3);

      const finalStats: QuizStats = {
        score: finalScore,
        correctFirstTry: totalCorrectFirst,
        correctSecondTry: totalCorrectSecond,
        wrongCount: totalWrong,
        timeoutCount: totalTimeout,
        totalTime: totalTimeSpent,
        history: currentHistory,
        difficulty,
        date: new Date().toISOString(),
      };

      setStats(finalStats);
      saveHighScore(finalScore, difficulty, totalCorrectFirst + totalCorrectSecond, totalTimeSpent);
      setGameState('result');
    }
  };

  const handleQuitGame = () => {
    sound.playClick();
    setGameState('menu');
  };

  return (
    <>
      {gameState === 'menu' && (
        <MainMenu
          onStartGame={handleStartGame}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          highScores={highScores}
          onOpenHistory={() => setIsHistoryOpen(true)}
        />
      )}

      {gameState === 'playing' && questions.length > 0 && (
        <QuizScreen
          key={`question-${questions[currentIndex].id}`}
          question={questions[currentIndex]}
          questionIndex={currentIndex}
          totalQuestions={questions.length}
          difficulty={difficulty}
          score={score}
          onAnswerSubmit={handleAnswerSubmit}
          onNextQuestion={handleNextQuestion}
          onQuitGame={handleQuitGame}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
        />
      )}

      {gameState === 'result' && stats && (
        <ResultScreen
          stats={stats}
          onPlayAgain={handleStartGame}
          onReturnHome={() => {
            sound.playClick();
            setGameState('menu');
          }}
          onOpenHistory={() => setIsHistoryOpen(true)}
        />
      )}

      {/* High Scores History Modal */}
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        highScores={highScores}
        onClearHistory={handleClearHistory}
      />
    </>
  );
}
