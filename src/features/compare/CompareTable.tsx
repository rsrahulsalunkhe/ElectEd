import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChatStore } from '@/store';
import { useAnalytics } from '@/hooks/useAnalytics';
import { cn } from '@/lib/utils';

interface CountrySystem {
  id: string;
  flag: string;
  country: string;
  system: string;
  legislature: string;
  votingAge: string;
  frequency: string;
  uniqueFeature: string;
  turnout: string;
  constituencies?: string;
  votingMethod: string;
  pros: string;
  cons: string;
}

const COUNTRY_SYSTEMS: CountrySystem[] = [
  {
    id: 'india',
    flag: '🇮🇳',
    country: 'India',
    system: 'First Past The Post (FPTP)',
    legislature: 'Bicameral (Lok Sabha + Rajya Sabha)',
    votingAge: '18',
    frequency: 'Every 5 years',
    uniqueFeature: "World's largest democracy, Electronic Voting Machines (EVM)",
    turnout: '~67%',
    constituencies: '543 (Lok Sabha)',
    votingMethod: 'EVM + constituency-based plurality',
    pros: 'Simple ballot process, often creates stable single-party governments',
    cons: 'Wasted votes and underrepresentation of minority parties',
  },
  {
    id: 'usa',
    flag: '🇺🇸',
    country: 'USA',
    system: 'Electoral College + FPTP',
    legislature: 'Bicameral (Senate + House)',
    votingAge: '18',
    frequency: 'Every 4 years (Presidential)',
    uniqueFeature: 'Electoral College system, Primaries before general election',
    turnout: '~60%',
    votingMethod: 'State ballots + Electoral College aggregation',
    pros: 'Clear local winners and strong federal-state election structure',
    cons: 'Popular vote winner may not always win presidency',
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    country: 'UK',
    system: 'First Past The Post',
    legislature: 'Bicameral (Lords + Commons)',
    votingAge: '18',
    frequency: 'Every 5 years (max)',
    uniqueFeature: 'Monarchy as head of state, PM is leader of majority party',
    turnout: '~67%',
    votingMethod: 'Single-member constituencies with plurality winner',
    pros: 'Easy to understand and quick results',
    cons: 'Seat share can diverge significantly from vote share',
  },
  {
    id: 'germany',
    flag: '🇩🇪',
    country: 'Germany',
    system: 'Mixed Member Proportional',
    legislature: 'Bicameral (Bundesrat + Bundestag)',
    votingAge: '18',
    frequency: 'Every 4 years',
    uniqueFeature: 'Two votes per voter — one for candidate, one for party',
    turnout: '~76%',
    votingMethod: 'Hybrid of direct seats + party list proportional seats',
    pros: 'Balances constituency representation with fair party proportionality',
    cons: 'More complex ballot and seat-allocation method',
  },
  {
    id: 'australia',
    flag: '🇦🇺',
    country: 'Australia',
    system: 'Preferential Voting (Instant Runoff)',
    legislature: 'Bicameral',
    votingAge: '18',
    frequency: 'Every 3 years',
    uniqueFeature: "Compulsory voting — fined if you don't vote!",
    turnout: '~90%',
    votingMethod: 'Ranked preferences with redistribution',
    pros: 'Encourages broad support and high turnout',
    cons: 'Counting and ranking process is harder for first-time voters',
  },
  {
    id: 'south-africa',
    flag: '🇿🇦',
    country: 'South Africa',
    system: 'Proportional Representation',
    legislature: 'Bicameral',
    votingAge: '18',
    frequency: 'Every 5 years',
    uniqueFeature: 'Voters vote for party not candidate, parties allocate seats proportionally',
    turnout: '~66%',
    votingMethod: 'Party-list vote converted into proportional seats',
    pros: 'Fewer wasted votes and broader representation',
    cons: 'Coalition dependence and weaker direct constituency link',
  },
];

export default function CompareTable() {
  const navigate = useNavigate();
  const { setInputDraft } = useChatStore();
  const { trackEvent } = useAnalytics();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const selectedCountries = useMemo(
    () => COUNTRY_SYSTEMS.filter((country) => selectedIds.includes(country.id)),
    [selectedIds]
  );

  const toggleCountry = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      if (prev.length >= 3) return prev;
      const next = [...prev, id];
      const countryName = COUNTRY_SYSTEMS.find((c) => c.id === id)?.country ?? id;
      trackEvent('country_compared', { countries: next.map((cid) => COUNTRY_SYSTEMS.find((c) => c.id === cid)?.country ?? cid), added: countryName });
      return next;
    });
  };

  const askAi = () => {
    setInputDraft('Which election system is most fair and why? Compare FPTP with Proportional Representation');
    navigate('/chat');
  };

  return (
    <div className="space-y-8">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {COUNTRY_SYSTEMS.map((country) => {
          const selected = selectedIds.includes(country.id);
          const selectionLocked = selectedIds.length >= 3 && !selected;
          return (
            <article
              key={country.id}
              className={cn(
                'bg-white border rounded-2xl p-5 shadow-card transition-colors',
                selected ? 'border-navy bg-navy-50' : 'border-slate-200',
                selectionLocked ? 'opacity-70' : ''
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-navy flex items-center gap-2">
                  <span aria-hidden="true">{country.flag}</span>
                  {country.country.toUpperCase()}
                </h2>
                <button
                  onClick={() => toggleCountry(country.id)}
                  disabled={selectionLocked}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-semibold border',
                    selected
                      ? 'bg-navy text-white border-navy'
                      : 'bg-white text-slate-700 border-slate-300',
                    selectionLocked ? 'cursor-not-allowed' : ''
                  )}
                >
                  {selected ? 'Selected' : 'Compare'}
                </button>
              </div>
              <div className="text-sm text-slate-700 space-y-1.5">
                <p><strong>System:</strong> {country.system}</p>
                <p><strong>Legislature:</strong> {country.legislature}</p>
                <p><strong>Voting Age:</strong> {country.votingAge}</p>
                <p><strong>Frequency:</strong> {country.frequency}</p>
                <p><strong>Unique Feature:</strong> {country.uniqueFeature}</p>
                <p><strong>Voter Turnout:</strong> {country.turnout}</p>
                {country.constituencies && <p><strong>Total Constituencies:</strong> {country.constituencies}</p>}
              </div>
            </article>
          );
        })}
      </section>

      <section className="bg-white border border-slate-200 rounded-2xl p-5">
        <h3 className="text-xl font-bold text-navy mb-2">Comparison Table</h3>
        <p className="text-sm text-slate-500 mb-4">Select 2-3 countries above to compare side by side.</p>
        {selectedCountries.length < 2 ? (
          <p className="text-sm text-slate-500">Choose at least two countries to enable comparison.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left">Criteria</th>
                  {selectedCountries.map((country) => (
                    <th key={country.id} className="px-4 py-3 text-left">
                      {country.flag} {country.country}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'System', get: (country: CountrySystem) => country.system },
                  { label: 'Voting Method', get: (country: CountrySystem) => country.votingMethod },
                  { label: 'Frequency', get: (country: CountrySystem) => country.frequency },
                  { label: 'Turnout', get: (country: CountrySystem) => country.turnout },
                  { label: 'Special Features', get: (country: CountrySystem) => country.uniqueFeature },
                  { label: 'Pros', get: (country: CountrySystem) => country.pros },
                  { label: 'Cons', get: (country: CountrySystem) => country.cons },
                ].map((row) => (
                  <tr key={row.label} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-semibold text-navy">{row.label}</td>
                    {selectedCountries.map((country) => (
                      <td key={`${row.label}-${country.id}`} className="px-4 py-3 text-slate-700">
                        {row.get(country)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="bg-white border border-slate-200 rounded-2xl p-5">
        <h3 className="text-xl font-bold text-navy mb-4">Pros & Cons</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="border border-slate-200 rounded-xl p-4">
            <h4 className="font-bold text-navy mb-2">FPTP</h4>
            <p><strong>Pros:</strong> Simple, strong majority governments</p>
            <p className="mt-1"><strong>Cons:</strong> Votes can be wasted, minority parties underrepresented</p>
          </div>
          <div className="border border-slate-200 rounded-xl p-4">
            <h4 className="font-bold text-navy mb-2">Proportional Representation</h4>
            <p><strong>Pros:</strong> Fair representation, fewer wasted votes</p>
            <p className="mt-1"><strong>Cons:</strong> Coalition governments, complex calculation</p>
          </div>
          <div className="border border-slate-200 rounded-xl p-4">
            <h4 className="font-bold text-navy mb-2">Mixed System</h4>
            <p><strong>Pros:</strong> Balance of both systems</p>
            <p className="mt-1"><strong>Cons:</strong> Complex to understand</p>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <button
          onClick={askAi}
          className="px-5 py-3 rounded-xl bg-orange text-white font-semibold hover:bg-orange-600"
        >
          Ask AI
        </button>
      </div>
    </div>
  );
}
