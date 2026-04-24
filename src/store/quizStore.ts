import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  ALL_NON_CHALLENGE_QUESTIONS,
  BEGINNER_QUESTIONS,
  INTERMEDIATE_QUESTIONS,
  ADVANCED_QUESTIONS,
} from '@/features/quiz/quizData';
import type { QuizCategoryId, QuizQuestionData } from '@/features/quiz/quizData';

export interface QuizAnswerRecord {
  questionId: string;
  selectedIndex: number | null;
  isCorrect: boolean;
  timeSpentMs: number;
}

type QuizStatus = 'idle' | 'in_progress' | 'finished';

interface QuizStore {
  status: QuizStatus;
  selectedCategory: QuizCategoryId | null;
  isTimedMode: boolean;
  secondsPerQuestion: number;
  questions: QuizQuestionData[];
  currentQuestionIndex: number;
  answers: QuizAnswerRecord[];
  score: number;
  bestScores: Record<QuizCategoryId, number>;
  startQuiz: (categoryId: QuizCategoryId) => void;
  submitAnswer: (selectedIndex: number | null, timeSpentMs: number) => void;
  nextQuestion: () => void;
  retakeQuiz: () => void;
  returnToLanding: () => void;
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j] as T, copy[i] as T];
  }
  return copy;
}

function buildQuestionsForCategory(categoryId: QuizCategoryId): QuizQuestionData[] {
  if (categoryId === 'beginner') return [...BEGINNER_QUESTIONS];
  if (categoryId === 'intermediate') return [...INTERMEDIATE_QUESTIONS];
  if (categoryId === 'advanced') return [...ADVANCED_QUESTIONS];
  return shuffle(ALL_NON_CHALLENGE_QUESTIONS).slice(0, 15);
}

const EMPTY_BEST_SCORES: Record<QuizCategoryId, number> = {
  beginner: 0,
  intermediate: 0,
  advanced: 0,
  challenge: 0,
};

export const useQuizStore = create<QuizStore>()(
  persist(
    (set, get) => ({
      status: 'idle',
      selectedCategory: null,
      isTimedMode: false,
      secondsPerQuestion: 30,
      questions: [],
      currentQuestionIndex: 0,
      answers: [],
      score: 0,
      bestScores: EMPTY_BEST_SCORES,

      startQuiz: (categoryId) =>
        set({
          status: 'in_progress',
          selectedCategory: categoryId,
          isTimedMode: categoryId === 'challenge',
          questions: buildQuestionsForCategory(categoryId),
          currentQuestionIndex: 0,
          answers: [],
          score: 0,
        }),

      submitAnswer: (selectedIndex, timeSpentMs) => {
        const { questions, currentQuestionIndex, answers } = get();
        const question = questions[currentQuestionIndex];
        if (!question) return;

        if (answers.some((answer) => answer.questionId === question.id)) return;

        const isCorrect = selectedIndex === question.correctIndex;
        const record: QuizAnswerRecord = {
          questionId: question.id,
          selectedIndex,
          isCorrect,
          timeSpentMs,
        };

        set((state) => ({
          answers: [...state.answers, record],
          score: isCorrect ? state.score + 1 : state.score,
        }));
      },

      nextQuestion: () => {
        const { currentQuestionIndex, questions, score, selectedCategory, bestScores } = get();
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex >= questions.length) {
          if (!selectedCategory) {
            set({ status: 'finished' });
            return;
          }

          const percent = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
          const best = bestScores[selectedCategory] ?? 0;
          set({
            status: 'finished',
            bestScores: {
              ...bestScores,
              [selectedCategory]: Math.max(best, percent),
            },
          });
          return;
        }
        set({ currentQuestionIndex: nextIndex });
      },

      retakeQuiz: () => {
        const category = get().selectedCategory;
        if (!category) return;
        get().startQuiz(category);
      },

      returnToLanding: () =>
        set({
          status: 'idle',
          selectedCategory: null,
          isTimedMode: false,
          questions: [],
          currentQuestionIndex: 0,
          answers: [],
          score: 0,
        }),
    }),
    {
      name: 'elected-quiz-state',
      partialize: (state) => ({
        bestScores: state.bestScores,
      }),
    }
  )
);
