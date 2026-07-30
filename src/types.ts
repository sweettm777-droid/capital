export type Difficulty = 'easy' | 'medium' | 'hard' | 'all';

export type Continent = '아시아' | '유럽' | '아메리카' | '아프리카' | '오세아니아';

export interface Country {
  code: string; // ISO 2-letter alpha code (e.g., 'kr', 'us') for flag CDN
  name: string; // Korean country name
  capital: string; // Korean capital name
  continent: Continent;
  difficulty: 'easy' | 'medium' | 'hard';
  flagEmoji: string;
  colors: [string, string]; // Primary and secondary colors from flag motif
  funFact?: string; // Optional interesting fact about the country or capital
}

export type GameState = 'menu' | 'playing' | 'result' | 'history';

export type AttemptResult = 'correct_first' | 'correct_second' | 'wrong' | 'timeout';

export interface Question {
  id: number;
  target: Country;
  options: string[]; // 4 multiple choice capitals
  attemptsLeft: number; // Starts at 2 (1 mistake allowed)
  selectedOptions: string[]; // Track what user clicked
  result?: AttemptResult;
  timeSpent: number; // seconds spent on this question
}

export interface QuizStats {
  score: number; // 100 max (5 pts per question, 3 pts if second try)
  correctFirstTry: number;
  correctSecondTry: number;
  wrongCount: number;
  timeoutCount: number;
  totalTime: number;
  history: Question[];
  difficulty: Difficulty;
  date: string;
}

export interface HighScoreRecord {
  id: string;
  date: string;
  score: number;
  difficulty: Difficulty;
  correctCount: number;
  totalTime: number;
}
