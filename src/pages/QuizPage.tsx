import QuizContainer from '@/features/quiz/QuizContainer';

export default function QuizPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-navy mb-2">Election Knowledge Quiz</h1>
        <p className="text-slate-500">
          Choose a difficulty level and test your understanding of elections, voting, and electoral systems.
        </p>
      </div>
      <QuizContainer />
    </div>
  );
}
