import StepsList from '@/features/steps/StepsList';

export default function StepsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-navy mb-3">Your Complete Guide to Voting</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          From registration to casting your vote — we&apos;ll walk you through every step
        </p>
      </section>
      <StepsList />
    </div>
  );
}
