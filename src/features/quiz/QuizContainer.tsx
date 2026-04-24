import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChatStore, useQuizStore } from '@/store';
import { useAuthStore } from '@/store/authStore';
import { explainWrongQuizAnswer } from '@/lib/api';
import { saveQuizScore } from '@/lib/firestore';
import { useAnalytics } from '@/hooks/useAnalytics';
import { cn } from '@/lib/utils';
import { QUIZ_CATEGORIES } from './quizData';

function playFeedbackTone(type: 'correct' | 'wrong') {
  const audioContext = new window.AudioContext();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = type === 'correct' ? 'sine' : 'triangle';
  oscillator.frequency.value = type === 'correct' ? 620 : 220;
  gain.gain.value = 0.08;
  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.16);
}

export default function QuizContainer() {
  const navigate = useNavigate();
  const { sendMessage } = useChatStore();
  const { user } = useAuthStore();
  const { trackEvent } = useAnalytics();
  const {
    status,
    selectedCategory,
    isTimedMode,
    secondsPerQuestion,
    questions,
    currentQuestionIndex,
    answers,
    score,
    bestScores,
    startQuiz,
    submitAnswer,
    nextQuestion,
    retakeQuiz,
    returnToLanding,
  } = useQuizStore();

  const [secondsLeft, setSecondsLeft] = useState(secondsPerQuestion);
  const [showReview, setShowReview] = useState(false);
  const [wrongAiLoading, setWrongAiLoading] = useState(false);
  const [wrongAiText, setWrongAiText] = useState('');

  // Track quiz completion and sync score to Firestore when the user is logged in
  useEffect(() => {
    if (status !== 'finished' || !selectedCategory) return;
    const percent = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
    trackEvent('quiz_completed', {
      category: selectedCategory,
      score: percent,
      total: questions.length,
    });
    if (user) {
      void saveQuizScore(user.uid, selectedCategory, percent);
    }
  }, [status]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = currentQuestion
    ? answers.find((a) => a.questionId === currentQuestion.id)
    : undefined;
  const hasAnswered = Boolean(currentAnswer);

  useEffect(() => {
    if (!isTimedMode || status !== 'in_progress' || hasAnswered) return undefined;
    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          if (currentQuestion) {
            submitAnswer(null, secondsPerQuestion * 1000);
            playFeedbackTone('wrong');
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [isTimedMode, status, hasAnswered, currentQuestion, submitAnswer, secondsPerQuestion]);

  const progressPercent = useMemo(() => {
    if (!questions.length) return 0;
    return Math.round(((currentQuestionIndex + 1) / questions.length) * 100);
  }, [currentQuestionIndex, questions.length]);

  const performanceMessage = useMemo(() => {
    if (!questions.length) return '';
    const pct = Math.round((score / questions.length) * 100);
    if (pct >= 90) return '🏆 Election Expert!';
    if (pct >= 70) return '⭐ Well Informed Voter!';
    if (pct >= 50) return '📚 Keep Learning!';
    return '💪 Great Start! Try Again';
  }, [questions.length, score]);

  const handleOptionClick = (index: number) => {
    if (!currentQuestion || hasAnswered) return;
    const timeSpent = isTimedMode ? (secondsPerQuestion - secondsLeft) * 1000 : 0;
    submitAnswer(index, Math.max(0, timeSpent));
    const correct = index === currentQuestion.correctIndex;
    playFeedbackTone(correct ? 'correct' : 'wrong');
  };

  const resetQuestionUi = () => {
    setSecondsLeft(secondsPerQuestion);
    setWrongAiText('');
    setWrongAiLoading(false);
  };

  const handleStartQuiz = (categoryId: (typeof QUIZ_CATEGORIES)[number]['id']) => {
    setShowReview(false);
    resetQuestionUi();
    trackEvent('quiz_started', { category: categoryId });
    startQuiz(categoryId);
  };

  const handleNextQuestion = () => {
    resetQuestionUi();
    nextQuestion();
  };

  const handleRetakeQuiz = () => {
    setShowReview(false);
    resetQuestionUi();
    retakeQuiz();
  };

  const handleReturnToLanding = () => {
    setShowReview(false);
    resetQuestionUi();
    returnToLanding();
  };

  const handleExplainWrong = async () => {
    if (!currentQuestion || !currentAnswer) return;
    if (currentAnswer.isCorrect || currentAnswer.selectedIndex === null) return;
    setWrongAiLoading(true);
    setWrongAiText('');
    try {
      const explanation = await explainWrongQuizAnswer(
        currentQuestion.prompt,
        currentQuestion.options[currentQuestion.correctIndex] ?? '',
        currentQuestion.options[currentAnswer.selectedIndex] ?? ''
      );
      setWrongAiText(explanation);
    } catch (error) {
      setWrongAiText(error instanceof Error ? error.message : 'Unable to fetch AI explanation.');
    } finally {
      setWrongAiLoading(false);
    }
  };

  const handleShareScore = async () => {
    const text = `I scored ${score}/${questions.length} on ElectEd Election Knowledge Quiz!`;
    if (navigator.share) {
      await navigator.share({ text });
      return;
    }
    await navigator.clipboard.writeText(text);
  };

  const handleLearnMore = async () => {
    const categoryText =
      selectedCategory === 'beginner'
        ? 'Election Basics'
        : selectedCategory === 'intermediate'
        ? 'Voting Process'
        : selectedCategory === 'advanced'
        ? 'Electoral Systems'
        : 'Mixed election topics';

    await sendMessage(`Teach me more about ${categoryText} with practical examples.`);
    navigate('/chat');
  };

  if (status === 'idle') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {QUIZ_CATEGORIES.map((category) => (
          <article key={category.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card">
            <div className="flex items-start justify-between">
              <p className="text-2xl" aria-hidden="true">{category.icon}</p>
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                {category.difficultyBadge}
              </span>
            </div>
            <h2 className="text-xl font-bold text-navy mt-3">{category.title}</h2>
            <p className="text-sm text-slate-600 mt-1">{category.subtitle}</p>
            <div className="mt-4 text-sm text-slate-700 space-y-1">
              <p>Questions: {category.questionCount}</p>
              <p>Estimated time: {category.estimatedTime}</p>
              <p>Best score: {bestScores[category.id]}%</p>
            </div>
            <button
              onClick={() => handleStartQuiz(category.id)}
              className="mt-5 w-full px-4 py-2.5 rounded-lg bg-navy text-white font-semibold text-sm hover:bg-navy-700"
            >
              Start Quiz
            </button>
          </article>
        ))}
      </div>
    );
  }

  if (status === 'finished') {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-navy mb-2">Quiz Results</h2>
        <p className="text-lg text-slate-700 mb-1">
          Score: <strong>{score}</strong> out of <strong>{questions.length}</strong> correct
        </p>
        <p className="text-2xl font-bold text-orange mb-4">{performanceMessage}</p>

        <div className="flex flex-wrap gap-2">
          <button onClick={() => setShowReview((v) => !v)} className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-semibold">
            {showReview ? 'Hide Review' : 'Review Answers'}
          </button>
          <button onClick={() => void handleShareScore()} className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-semibold">
            Share Score
          </button>
          <button onClick={handleRetakeQuiz} className="px-4 py-2 rounded-lg bg-navy text-white text-sm font-semibold">
            Retake Quiz
          </button>
          <button onClick={() => void handleLearnMore()} className="px-4 py-2 rounded-lg bg-orange text-white text-sm font-semibold">
            Learn More
          </button>
          <button onClick={handleReturnToLanding} className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-semibold">
            Back to Categories
          </button>
        </div>

        {showReview && (
          <div className="mt-5 space-y-3">
            {questions.map((question, index) => {
              const answer = answers.find((entry) => entry.questionId === question.id);
              const isCorrect = answer?.isCorrect ?? false;
              const selectedText =
                answer?.selectedIndex === null || answer?.selectedIndex === undefined
                  ? 'No answer selected'
                  : question.options[answer.selectedIndex] ?? 'Unknown';
              const correctText = question.options[question.correctIndex] ?? '';
              return (
                <div key={question.id} className={cn('p-4 rounded-xl border', isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50')}>
                  <p className="text-sm font-semibold text-navy">
                    Q{index + 1}. {question.prompt}
                  </p>
                  <p className="text-sm mt-1">Your answer: {selectedText}</p>
                  <p className="text-sm">Correct answer: {correctText}</p>
                  <p className="text-sm text-slate-700 mt-2">{question.explanation}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm font-medium text-slate-600 mb-2">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          {isTimedMode && <span className={cn('font-bold', secondsLeft <= 8 ? 'text-red-600' : 'text-navy')}>⏱ {secondsLeft}s</span>}
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-navy to-orange transition-all duration-300" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-navy leading-snug mb-5">{currentQuestion.prompt}</h2>

      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => {
          const selected = currentAnswer?.selectedIndex === index;
          const isCorrect = index === currentQuestion.correctIndex;
          const answeredWrongSelection = hasAnswered && selected && !isCorrect;

          const optionStyle = !hasAnswered
            ? 'border-slate-200 hover:border-navy hover:bg-slate-50'
            : isCorrect
            ? 'border-green-400 bg-green-50'
            : answeredWrongSelection
            ? 'border-red-400 bg-red-50'
            : 'border-slate-200 opacity-70';

          return (
            <button
              key={option}
              onClick={() => handleOptionClick(index)}
              disabled={hasAnswered}
              className={cn(
                'w-full text-left p-4 rounded-xl border-2 transition-all',
                optionStyle
              )}
            >
              <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
              {option}
            </button>
          );
        })}
      </div>

      {hasAnswered && (
        <div className="mt-5">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
            <p className="text-sm font-semibold text-navy mb-1">Explanation</p>
            <p className="text-sm text-slate-700">{currentQuestion.explanation}</p>
          </div>

          {!currentAnswer?.isCorrect && currentAnswer?.selectedIndex !== null && (
            <div className="mt-3">
              <button
                onClick={() => void handleExplainWrong()}
                disabled={wrongAiLoading}
                className="px-3 py-2 rounded-lg border border-orange-300 text-orange-700 text-sm font-semibold disabled:opacity-60"
              >
                {wrongAiLoading ? 'Thinking...' : 'Why was I wrong?'}
              </button>
              {wrongAiText && (
                <p className="mt-2 text-sm text-slate-700 bg-orange-50 border border-orange-100 rounded-lg p-3">
                  {wrongAiText}
                </p>
              )}
            </div>
          )}

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-navy">Score: {score}</p>
            <button
              onClick={handleNextQuestion}
              className="px-4 py-2 rounded-lg bg-navy text-white text-sm font-semibold"
            >
              {currentQuestionIndex + 1 === questions.length ? 'See Results' : 'Next Question'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
