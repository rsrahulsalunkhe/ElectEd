import GlossaryList from '@/features/glossary/GlossaryList';

export default function GlossaryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy mb-2">Election Glossary</h1>
        <p className="text-slate-500">
          A comprehensive A–Z dictionary of election and voting terminology.
        </p>
      </div>
      <GlossaryList />
    </div>
  );
}
