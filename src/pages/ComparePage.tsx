import CompareTable from '@/features/compare/CompareTable';

export default function ComparePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy mb-2">How Different Countries Vote</h1>
        <p className="text-slate-500">
          Explore and compare election systems worldwide
        </p>
      </div>
      <CompareTable />
    </div>
  );
}
