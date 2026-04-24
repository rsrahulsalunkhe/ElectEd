import TimelineView from '@/features/timeline/TimelineView';

export default function TimelinePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-navy mb-2">Election Timeline</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Interactive election timeline visualizer with country-specific phases, action filters,
          active-phase simulation, and key date calculations.
        </p>
      </div>
      <TimelineView />
    </div>
  );
}
