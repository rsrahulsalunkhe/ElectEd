import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bookmark, BookmarkCheck, Search } from 'lucide-react';
import { useChatStore, useGlossaryStore } from '@/store';
import { useAuthStore } from '@/store/authStore';
import { addBookmark, removeBookmark } from '@/lib/firestore';
import { useAnalytics } from '@/hooks/useAnalytics';
import { cn } from '@/lib/utils';

type GlossaryCategory = 'Voting Process' | 'Officials' | 'Documents' | 'Systems' | 'Legal';
type GlossaryDifficulty = 'Basic' | 'Intermediate' | 'Advanced';

interface GlossaryEntry {
  term: string;
  definition: string;
  category: GlossaryCategory;
  difficulty: GlossaryDifficulty;
}

const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const GLOSSARY_ENTRIES: GlossaryEntry[] = [
  {
    term: 'Affidavit',
    definition:
      'Sworn statement candidates must file declaring assets, liabilities and criminal record.',
    category: 'Documents',
    difficulty: 'Intermediate',
  },
  {
    term: 'Anti-defection law',
    definition: 'Law preventing elected members from switching parties without losing their seat.',
    category: 'Legal',
    difficulty: 'Advanced',
  },
  {
    term: 'Ballot',
    definition: 'The official document or method used to cast a vote in an election.',
    category: 'Voting Process',
    difficulty: 'Basic',
  },
  {
    term: 'By-election',
    definition: 'Election held to fill a single vacant seat between general elections.',
    category: 'Voting Process',
    difficulty: 'Basic',
  },
  {
    term: 'Booth capturing',
    definition: 'Illegal practice of taking over polling booth to cast fraudulent votes.',
    category: 'Legal',
    difficulty: 'Advanced',
  },
  {
    term: 'Cabinet',
    definition:
      'Group of senior ministers who form the core of the government and make major decisions.',
    category: 'Officials',
    difficulty: 'Basic',
  },
  {
    term: 'Candidate',
    definition: 'A person who stands for election to a public office.',
    category: 'Voting Process',
    difficulty: 'Basic',
  },
  {
    term: 'Constituency',
    definition: 'A geographic area whose residents elect a representative.',
    category: 'Systems',
    difficulty: 'Basic',
  },
  {
    term: 'Counting agent',
    definition: 'Party representative present during vote counting to observe the process.',
    category: 'Officials',
    difficulty: 'Intermediate',
  },
  {
    term: 'Delimitation',
    definition: 'Process of redrawing constituency boundaries based on census data.',
    category: 'Systems',
    difficulty: 'Advanced',
  },
  {
    term: 'Deposit',
    definition:
      'Money candidates must pay to file nomination, forfeited if they get less than 1/6th of votes.',
    category: 'Legal',
    difficulty: 'Intermediate',
  },
  {
    term: 'ECI',
    definition:
      'Election Commission of India — constitutional body that administers all elections.',
    category: 'Officials',
    difficulty: 'Basic',
  },
  {
    term: 'Electoral Roll',
    definition: 'Official list of all eligible voters in a constituency.',
    category: 'Documents',
    difficulty: 'Basic',
  },
  {
    term: 'EPIC',
    definition: "Elector's Photo Identity Card — voter ID card issued by ECI.",
    category: 'Documents',
    difficulty: 'Basic',
  },
  {
    term: 'Exit Poll',
    definition: 'Survey conducted outside polling stations to predict election results.',
    category: 'Systems',
    difficulty: 'Intermediate',
  },
  {
    term: 'EVM',
    definition: 'Electronic Voting Machine used to record votes.',
    category: 'Voting Process',
    difficulty: 'Basic',
  },
  {
    term: 'First Past The Post (FPTP)',
    definition: 'Electoral system where candidate with most votes wins, regardless of majority.',
    category: 'Systems',
    difficulty: 'Intermediate',
  },
  {
    term: 'Form 6',
    definition: 'Application form to register as a new voter.',
    category: 'Documents',
    difficulty: 'Basic',
  },
  {
    term: 'Governor',
    definition: 'Constitutional head of a state, appointed by President.',
    category: 'Officials',
    difficulty: 'Intermediate',
  },
  {
    term: 'Government',
    definition: 'The ruling party or coalition that administers the country/state.',
    category: 'Officials',
    difficulty: 'Basic',
  },
  {
    term: 'Hung Parliament/Assembly',
    definition: 'Situation where no single party wins enough seats for a majority.',
    category: 'Systems',
    difficulty: 'Intermediate',
  },
  {
    term: 'Indelible Ink',
    definition: "Permanent ink applied to voter's finger to prevent double voting.",
    category: 'Voting Process',
    difficulty: 'Basic',
  },
  {
    term: 'Lok Sabha',
    definition: 'Lower house of Indian Parliament, directly elected by citizens.',
    category: 'Systems',
    difficulty: 'Basic',
  },
  {
    term: 'Lotus symbol',
    definition: 'Reserved symbol for BJP in India.',
    category: 'Documents',
    difficulty: 'Basic',
  },
  {
    term: 'Manifesto',
    definition: 'Document published by a political party outlining its policies and promises.',
    category: 'Documents',
    difficulty: 'Basic',
  },
  {
    term: 'Model Code of Conduct',
    definition: 'ECI guidelines governing party and candidate behavior during elections.',
    category: 'Legal',
    difficulty: 'Intermediate',
  },
  {
    term: 'MLA',
    definition: 'Member of Legislative Assembly — elected representative in state legislature.',
    category: 'Officials',
    difficulty: 'Basic',
  },
  {
    term: 'MP',
    definition: 'Member of Parliament — elected representative in Lok Sabha or Rajya Sabha.',
    category: 'Officials',
    difficulty: 'Basic',
  },
  {
    term: 'Nomination',
    definition: 'Formal process of registering as a candidate for election.',
    category: 'Voting Process',
    difficulty: 'Basic',
  },
  {
    term: 'NOTA',
    definition: 'None Of The Above — ballot option to reject all candidates.',
    category: 'Voting Process',
    difficulty: 'Basic',
  },
  {
    term: 'Observer',
    definition: 'ECI appointed official who monitors the election process in a constituency.',
    category: 'Officials',
    difficulty: 'Intermediate',
  },
  {
    term: 'Opinion Poll',
    definition: 'Survey conducted before voting to gauge public sentiment.',
    category: 'Systems',
    difficulty: 'Intermediate',
  },
  {
    term: 'Polling Booth',
    definition: 'Location where voters go to cast their vote.',
    category: 'Voting Process',
    difficulty: 'Basic',
  },
  {
    term: 'Polling Officer',
    definition: 'Government official who manages the voting process at a booth.',
    category: 'Officials',
    difficulty: 'Intermediate',
  },
  {
    term: 'Presiding Officer',
    definition: 'Senior official in charge of a polling station.',
    category: 'Officials',
    difficulty: 'Intermediate',
  },
  {
    term: 'Proportional Representation',
    definition: 'Electoral system where seats are allocated proportional to votes received.',
    category: 'Systems',
    difficulty: 'Advanced',
  },
  {
    term: 'Rajya Sabha',
    definition: 'Upper house of Indian Parliament, indirectly elected by state legislators.',
    category: 'Systems',
    difficulty: 'Intermediate',
  },
  {
    term: 'Re-election',
    definition: 'Election held again due to irregularities.',
    category: 'Legal',
    difficulty: 'Intermediate',
  },
  {
    term: 'Reserved Constituency',
    definition: 'Seat reserved for SC/ST candidates to ensure representation.',
    category: 'Legal',
    difficulty: 'Intermediate',
  },
  {
    term: 'Returning Officer',
    definition: 'Official responsible for conducting election in a constituency.',
    category: 'Officials',
    difficulty: 'Intermediate',
  },
  {
    term: 'Silent Period',
    definition: '48 hours before voting when campaigning is prohibited.',
    category: 'Legal',
    difficulty: 'Intermediate',
  },
  {
    term: 'Swing',
    definition: 'Change in voting pattern compared to previous election.',
    category: 'Systems',
    difficulty: 'Advanced',
  },
  {
    term: 'Turnout',
    definition: 'Percentage of eligible voters who actually cast their vote.',
    category: 'Voting Process',
    difficulty: 'Basic',
  },
  {
    term: 'Universal Adult Franchise',
    definition: 'Right of every adult citizen to vote regardless of gender, caste, religion.',
    category: 'Legal',
    difficulty: 'Basic',
  },
  {
    term: 'Vote Share',
    definition: 'Percentage of total votes received by a candidate or party.',
    category: 'Systems',
    difficulty: 'Intermediate',
  },
  {
    term: 'Voter Slip',
    definition: 'Document sent to registered voters showing their polling booth details.',
    category: 'Documents',
    difficulty: 'Basic',
  },
  {
    term: 'VVPAT',
    definition:
      'Voter Verified Paper Audit Trail — paper receipt generated by EVM for verification.',
    category: 'Voting Process',
    difficulty: 'Intermediate',
  },
  {
    term: 'Whip',
    definition: 'Party directive to members on how to vote in legislature.',
    category: 'Legal',
    difficulty: 'Advanced',
  },
];

const CATEGORY_STYLES: Record<GlossaryCategory, string> = {
  'Voting Process': 'bg-blue-50 text-blue-700 border-blue-200',
  Officials: 'bg-purple-50 text-purple-700 border-purple-200',
  Documents: 'bg-amber-50 text-amber-700 border-amber-200',
  Systems: 'bg-teal-50 text-teal-700 border-teal-200',
  Legal: 'bg-red-50 text-red-700 border-red-200',
};

const DIFFICULTY_STYLES: Record<GlossaryDifficulty, string> = {
  Basic: 'bg-green-50 text-green-700 border-green-200',
  Intermediate: 'bg-orange-50 text-orange-700 border-orange-200',
  Advanced: 'bg-slate-100 text-slate-700 border-slate-300',
};

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getTodayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function getTermOfDay(): GlossaryEntry {
  const dateKey = getTodayKey();
  const stored = localStorage.getItem('elected-term-of-day');
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as { date: string; term: string };
      if (parsed.date === dateKey) {
        const existing = GLOSSARY_ENTRIES.find((entry) => entry.term === parsed.term);
        if (existing) return existing;
      }
    } catch {
      // ignore malformed storage
    }
  }

  const selected =
    GLOSSARY_ENTRIES[Math.floor(Math.random() * GLOSSARY_ENTRIES.length)] ?? GLOSSARY_ENTRIES[0]!;
  localStorage.setItem(
    'elected-term-of-day',
    JSON.stringify({ date: dateKey, term: selected.term })
  );
  return selected;
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const regex = new RegExp(`(${escapeRegExp(query)})`, 'ig');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={`${part}-${index}`} className="bg-yellow-200 px-0.5 rounded-sm">
            {part}
          </mark>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        )
      )}
    </>
  );
}

export default function GlossaryList() {
  const navigate = useNavigate();
  const { setInputDraft } = useChatStore();
  const { user } = useAuthStore();
  const { bookmarkedTerms, toggleBookmark, isBookmarked } = useGlossaryStore();
  const { trackEvent } = useAnalytics();

  const [search, setSearch] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<'ALL' | string>('ALL');
  const [termOfDay] = useState<GlossaryEntry>(() => getTermOfDay());

  // Debounced analytics for glossary search
  const searchDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!search.trim()) return;
    if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    searchDebounceRef.current = setTimeout(() => {
      trackEvent('glossary_searched', { term: search.trim() });
    }, 800);
    return () => {
      if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    };
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleToggleBookmark = (term: string) => {
    const wasBookmarked = isBookmarked(term);
    toggleBookmark(term);
    if (user) {
      if (wasBookmarked) {
        void removeBookmark(user.uid, term);
      } else {
        void addBookmark(user.uid, term);
      }
    }
  };

  // Suppress unused variable warning — bookmarkedTerms is read via isBookmarked
  void bookmarkedTerms;

  const filteredTerms = useMemo(() => {
    const q = search.trim().toLowerCase();
    return GLOSSARY_ENTRIES.filter((entry) => {
      if (selectedLetter !== 'ALL' && !entry.term.toUpperCase().startsWith(selectedLetter))
        return false;
      if (!q) return true;
      return entry.term.toLowerCase().includes(q) || entry.definition.toLowerCase().includes(q);
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [search, selectedLetter]);

  const askAiForTerm = (term: string) => {
    setInputDraft(`Can you explain ${term} in simple terms with an example?`);
    navigate('/chat');
  };

  const askAiNoResults = () => {
    const text = search.trim() || 'election term';
    setInputDraft(`Can you explain ${text} in simple terms with an example?`);
    navigate('/chat');
  };

  const shareTermOfDay = async () => {
    const shareText = `Term of the Day: ${termOfDay.term} — ${termOfDay.definition}`;
    if (navigator.share) {
      await navigator.share({ text: shareText });
      return;
    }
    await navigator.clipboard.writeText(shareText);
  };

  return (
    <div className="space-y-6">
      <section className="bg-white border border-slate-200 rounded-2xl p-4 md:p-5">
        <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-1">
          Term of the Day
        </p>
        <h2 className="text-2xl font-bold text-navy">{termOfDay.term}</h2>
        <p className="text-slate-600 mt-2">{termOfDay.definition}</p>
        <button
          onClick={() => void shareTermOfDay()}
          className="mt-3 px-3 py-2 text-sm font-semibold rounded-lg border border-slate-300 text-slate-700 hover:border-navy hover:text-navy"
        >
          Share Term
        </button>
      </section>

      <section className="bg-white border border-slate-200 rounded-2xl p-4 md:p-5">
        <div role="search" aria-label="Glossary term search">
          <div className="relative mb-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <label htmlFor="glossary-search" className="sr-only">
              Search any election term
            </label>
            <input
              id="glossary-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search any election term..."
              className="input-base pl-10"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4" role="group" aria-label="Alphabet filter">
          {ALPHABETS.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={cn(
                'px-2 py-1 rounded-md border text-xs font-semibold',
                selectedLetter === letter
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-navy'
              )}
            >
              {letter}
            </button>
          ))}
          <button
            onClick={() => setSelectedLetter('ALL')}
            className={cn(
              'px-3 py-1 rounded-md border text-xs font-semibold',
              selectedLetter === 'ALL'
                ? 'bg-navy text-white border-navy'
                : 'bg-white text-slate-600 border-slate-200 hover:border-navy'
            )}
          >
            ALL
          </button>
        </div>

        {filteredTerms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg font-semibold text-slate-700">No results found</p>
            <p className="text-sm text-slate-500 mt-1">
              Try another keyword or ask the AI to explain it.
            </p>
            <button
              onClick={askAiNoResults}
              className="mt-3 px-4 py-2 rounded-lg bg-orange text-white text-sm font-semibold"
            >
              Ask AI
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTerms.map((entry) => (
              <article
                key={entry.term}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4"
              >
                <h3 className="text-lg font-bold text-navy">
                  <HighlightedText text={entry.term} query={search} />
                </h3>
                <p className="text-sm text-slate-600 mt-2 min-h-[56px]">
                  <HighlightedText text={entry.definition} query={search} />
                </p>
                <div className="flex items-center gap-2 mt-3 flex-wrap">
                  <span
                    className={cn(
                      'text-xs font-semibold px-2 py-1 rounded-full border',
                      CATEGORY_STYLES[entry.category]
                    )}
                  >
                    {entry.category}
                  </span>
                  <span
                    className={cn(
                      'text-xs font-semibold px-2 py-1 rounded-full border',
                      DIFFICULTY_STYLES[entry.difficulty]
                    )}
                  >
                    {entry.difficulty}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={() => askAiForTerm(entry.term)}
                    className="px-3 py-2 rounded-lg bg-navy text-white text-sm font-semibold hover:bg-navy-700"
                  >
                    Ask AI to explain more
                  </button>
                  <button
                    onClick={() => handleToggleBookmark(entry.term)}
                    aria-label={
                      isBookmarked(entry.term)
                        ? `Remove ${entry.term} from bookmarks`
                        : `Bookmark ${entry.term}`
                    }
                    className={cn(
                      'p-2 rounded-lg border text-sm transition-colors',
                      isBookmarked(entry.term)
                        ? 'bg-orange-50 border-orange-200 text-orange-600'
                        : 'border-slate-200 text-slate-500 hover:border-orange-200 hover:text-orange-500'
                    )}
                  >
                    {isBookmarked(entry.term) ? (
                      <BookmarkCheck className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <Bookmark className="w-4 h-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
