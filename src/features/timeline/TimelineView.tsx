import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChatStore } from '@/store';
import { useAnalytics } from '@/hooks/useAnalytics';
import { cn } from '@/lib/utils';

type Country = 'India' | 'USA' | 'UK' | 'Australia';
type ActionFilter = 'all' | 'voter' | 'official';

interface PhaseActivity {
  text: string;
  type: 'voter' | 'official';
}

interface TimelinePhase {
  id: string;
  phaseNumber: number;
  icon: string;
  name: string;
  durationLabel: string;
  dayStart: number;
  dayEnd: number;
  description: string;
  activities: PhaseActivity[];
  involved: string[];
  rules: string[];
  learnMoreQuestion: string;
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
}

function buildCountryTimeline(country: Country): TimelinePhase[] {
  const authorityByCountry: Record<Country, string> = {
    India: 'Election Commission of India (ECI)',
    USA: 'Federal and state election authorities',
    UK: 'Electoral Commission and Returning Officers',
    Australia: 'Australian Electoral Commission (AEC)',
  };

  const votingMethodByCountry: Record<Country, string> = {
    India: 'EVM with VVPAT',
    USA: 'State-managed paper/electronic ballots',
    UK: 'Paper ballot at polling stations',
    Australia: 'Paper ballot with preferential voting',
  };

  const resultAuthorityByCountry: Record<Country, string> = {
    India: 'ECI',
    USA: 'State officials and certified canvassing boards',
    UK: 'Returning Officers',
    Australia: 'AEC',
  };

  const authority = authorityByCountry[country];
  const votingMethod = votingMethodByCountry[country];
  const resultsAuthority = resultAuthorityByCountry[country];

  return [
    {
      id: 'announcement',
      phaseNumber: 1,
      icon: '📢',
      name: 'Announcement',
      durationLabel: 'Day 0',
      dayStart: 0,
      dayEnd: 0,
      description: `Election schedule is formally released by ${authority}.`,
      activities: [
        { text: `Election date announced by ${authority}`, type: 'official' },
        { text: 'Model Code of Conduct comes into effect', type: 'official' },
        { text: 'Official election schedule is published', type: 'official' },
      ],
      involved: [authority, 'Political parties', 'Media'],
      rules: ['Code of Conduct enforcement starts', 'Campaign communication restrictions begin'],
      learnMoreQuestion: `What happens immediately after election announcement in ${country}?`,
    },
    {
      id: 'nomination',
      phaseNumber: 2,
      icon: '📝',
      name: 'Nomination',
      durationLabel: 'Day 1-14',
      dayStart: 1,
      dayEnd: 14,
      description: 'Candidates enter the race and eligibility is validated.',
      activities: [
        { text: 'Candidate nomination filing opens', type: 'official' },
        { text: 'Parties and independents submit nomination papers', type: 'official' },
        { text: 'Scrutiny of nomination papers', type: 'official' },
        { text: 'Last date to withdraw candidature', type: 'official' },
        { text: 'Final list of candidates published', type: 'official' },
      ],
      involved: [authority, 'Candidates', 'Political parties'],
      rules: ['Eligibility criteria verification', 'Affidavits and disclosures are mandatory'],
      learnMoreQuestion: `How does nomination scrutiny work in ${country} elections?`,
    },
    {
      id: 'campaign',
      phaseNumber: 3,
      icon: '🗣️',
      name: 'Campaign',
      durationLabel: 'Day 7-28',
      dayStart: 7,
      dayEnd: 28,
      description: 'Public communication and voter outreach are at peak activity.',
      activities: [
        { text: 'Political rallies and campaigns begin', type: 'official' },
        { text: 'Candidate debates and public meetings', type: 'official' },
        { text: 'Media coverage and advertisements', type: 'official' },
        { text: 'Campaign spending monitored', type: 'official' },
        { text: 'Voters compare candidates and manifestos', type: 'voter' },
        { text: 'Silent period begins 48 hours before voting', type: 'official' },
      ],
      involved: [authority, 'Candidates', 'Voters', 'Media'],
      rules: ['Spending limits and disclosure obligations', 'Silence period before polling day'],
      learnMoreQuestion: `What campaign rules are enforced before voting in ${country}?`,
    },
    {
      id: 'voting',
      phaseNumber: 4,
      icon: '🗳️',
      name: 'Voting Day',
      durationLabel: 'Day 30',
      dayStart: 30,
      dayEnd: 30,
      description: `Polling takes place and ballots are securely captured using ${votingMethod}.`,
      activities: [
        { text: 'Polling booths open at 7 AM', type: 'official' },
        { text: 'Voters cast their votes with ID verification', type: 'voter' },
        { text: 'Polling booths close at 6 PM', type: 'official' },
        { text: `${votingMethod} is sealed and stored securely`, type: 'official' },
      ],
      involved: ['Voters', 'Polling officers', authority, 'Observers'],
      rules: ['Voter ID and eligibility checks', 'Polling station procedures and secrecy of vote'],
      learnMoreQuestion: `What are the exact steps for a voter on election day in ${country}?`,
    },
    {
      id: 'counting',
      phaseNumber: 5,
      icon: '🔢',
      name: 'Counting',
      durationLabel: 'Day 33-35',
      dayStart: 33,
      dayEnd: 35,
      description: 'Ballots are counted under supervision and results are progressively published.',
      activities: [
        { text: 'Ballot units transported to counting centers', type: 'official' },
        { text: 'Counting begins in the morning', type: 'official' },
        { text: 'Round-by-round results announced', type: 'official' },
        { text: 'Winning candidates declared', type: 'official' },
      ],
      involved: [resultsAuthority, 'Counting agents', 'Candidates', 'Media observers'],
      rules: ['Strong-room and seal verification', 'Transparent counting with authorized observers'],
      learnMoreQuestion: `How are votes counted and verified in ${country}?`,
    },
    {
      id: 'results-government',
      phaseNumber: 6,
      icon: '🏛️',
      name: 'Results & Government',
      durationLabel: 'Day 35-45',
      dayStart: 35,
      dayEnd: 45,
      description: 'Official notifications are issued and government formation follows constitutional rules.',
      activities: [
        { text: 'Official results gazette notified', type: 'official' },
        { text: 'Winning party or coalition invited to form government', type: 'official' },
        { text: 'Cabinet formation and oath taking', type: 'official' },
        { text: 'New government assumes office', type: 'official' },
      ],
      involved: [authority, 'Winning party/coalition', 'Head of state', 'Cabinet members'],
      rules: ['Constitutional government formation process', 'Official certification before office assumption'],
      learnMoreQuestion: `What happens after results are declared and how is government formed in ${country}?`,
    },
  ];
}

export default function TimelineView() {
  const navigate = useNavigate();
  const { sendMessage } = useChatStore();
  const { trackEvent } = useAnalytics();

  const [country, setCountry] = useState<Country>('India');
  const [filter, setFilter] = useState<ActionFilter>('all');
  const [activePhaseId, setActivePhaseId] = useState('announcement');
  const [expandedPhaseId, setExpandedPhaseId] = useState('announcement');
  const [electionDate, setElectionDate] = useState('');

  const phases = useMemo(() => buildCountryTimeline(country), [country]);

  const activePhaseIndex = Math.max(
    0,
    phases.findIndex((phase) => phase.id === activePhaseId)
  );
  const progress = ((activePhaseIndex + 1) / phases.length) * 100;

  const phaseDateRanges = useMemo(() => {
    if (!electionDate) return null;
    const votingDate = new Date(`${electionDate}T12:00:00`);
    if (Number.isNaN(votingDate.getTime())) return null;

    return phases.map((phase) => {
      const start = addDays(votingDate, phase.dayStart - 30);
      const end = addDays(votingDate, phase.dayEnd - 30);
      return { phaseId: phase.id, start, end };
    });
  }, [electionDate, phases]);

  const handleLearnMore = async (question: string) => {
    await sendMessage(question);
    navigate('/chat');
  };

  const renderPhaseCard = (phase: TimelinePhase, isMobile: boolean) => {
    const isExpanded = expandedPhaseId === phase.id;
    const isActive = activePhaseId === phase.id;
    const dateRange = phaseDateRanges?.find((item) => item.phaseId === phase.id);

    const filteredActivities =
      filter === 'all'
        ? phase.activities
        : phase.activities.filter((activity) => activity.type === filter);

    return (
      <article
        key={`${phase.id}-${isMobile ? 'mobile' : 'desktop'}`}
        className={cn(
          'bg-white border rounded-2xl shadow-card transition-all',
          isActive ? 'border-orange animate-pulse' : 'border-slate-200',
          isMobile ? 'w-full' : 'w-[340px] shrink-0'
        )}
      >
        <button
          type="button"
          onClick={() => {
            if (!isExpanded) {
              trackEvent('timeline_phase_clicked', { phase: phase.name });
            }
            setExpandedPhaseId(isExpanded ? '' : phase.id);
          }}
          className="w-full px-5 py-4 text-left"
          aria-expanded={isExpanded}
          aria-controls={`phase-panel-${phase.id}`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-orange mb-1">
                Phase {phase.phaseNumber}
              </p>
              <h3 className="text-lg font-bold text-navy flex items-center gap-2">
                <span aria-hidden="true">{phase.icon}</span>
                {phase.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">{phase.durationLabel}</p>
            </div>
            {isActive && (
              <span className="text-xs font-semibold text-orange bg-orange-50 px-2 py-1 rounded-full">
                Active
              </span>
            )}
          </div>
          <p className="text-sm text-slate-600 mt-3">{phase.description}</p>
          {dateRange && (
            <p className="text-xs text-slate-500 mt-2">
              Calculated dates:{' '}
              {phase.dayStart === phase.dayEnd
                ? formatDate(dateRange.start)
                : `${formatDate(dateRange.start)} to ${formatDate(dateRange.end)}`}
            </p>
          )}
        </button>

        {isExpanded && (
          <div
            id={`phase-panel-${phase.id}`}
            className="px-5 pb-5 border-t border-slate-100 space-y-4"
          >
            <div className="pt-4">
              <p className="text-xs uppercase tracking-wide font-semibold text-slate-500 mb-2">
                Key Activities
              </p>
              <ul className="space-y-2">
                {filteredActivities.map((activity) => (
                  <li key={activity.text} className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 shrink-0" aria-hidden="true" />
                    {activity.text}
                  </li>
                ))}
                {filteredActivities.length === 0 && (
                  <li className="text-sm text-slate-500">No activities match this filter for this phase.</li>
                )}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide font-semibold text-slate-500 mb-2">
                Who Is Involved
              </p>
              <p className="text-sm text-slate-700">{phase.involved.join(', ')}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide font-semibold text-slate-500 mb-2">
                Rules And Regulations
              </p>
              <ul className="space-y-1">
                {phase.rules.map((rule) => (
                  <li key={rule} className="text-sm text-slate-700">
                    - {rule}
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => void handleLearnMore(phase.learnMoreQuestion)}
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-navy text-white text-sm font-semibold hover:bg-navy-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            >
              Learn More In AI Chat
            </button>
          </div>
        )}
      </article>
    );
  };

  return (
    <div className="space-y-6">
      <section className="bg-white border border-slate-200 rounded-2xl p-4 md:p-5">
        <div className="grid gap-4 md:grid-cols-3">
          <label className="text-sm font-medium text-slate-700">
            Country
            <select
              value={country}
              onChange={(event) => {
                const nextCountry = event.target.value as Country;
                const nextPhases = buildCountryTimeline(nextCountry);
                setCountry(nextCountry);
                setActivePhaseId(nextPhases[0]?.id ?? 'announcement');
                setExpandedPhaseId(nextPhases[0]?.id ?? 'announcement');
              }}
              className="mt-1 w-full input-base"
              aria-label="Select country timeline"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </label>

          <div>
            <p className="text-sm font-medium text-slate-700 mb-1">Filter Actions</p>
            <div className="flex gap-2">
              {[
                { id: 'all', label: 'All' },
                { id: 'voter', label: 'Voter Actions Only' },
                { id: 'official', label: 'Official Actions Only' },
              ].map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setFilter(option.id as ActionFilter)}
                  className={cn(
                    'px-3 py-2 rounded-lg text-xs font-semibold border',
                    filter === option.id
                      ? 'bg-navy text-white border-navy'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-navy'
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <label className="text-sm font-medium text-slate-700">
            Active Phase Simulation
            <select
              value={activePhaseId}
              onChange={(event) => setActivePhaseId(event.target.value)}
              className="mt-1 w-full input-base"
              aria-label="Set active timeline phase"
            >
              {phases.map((phase) => (
                <option key={phase.id} value={phase.id}>
                  Phase {phase.phaseNumber}: {phase.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>Timeline Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-slate-100 rounded-full overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
            <div className="h-full bg-gradient-to-r from-navy to-orange transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold text-navy mb-3">Timeline Overview</h2>

        <div className="hidden md:block overflow-x-auto pb-3" aria-label="Horizontal election timeline">
          <div className="flex gap-4 min-w-max px-1">
            {phases.map((phase) => renderPhaseCard(phase, false))}
          </div>
        </div>

        <div className="md:hidden space-y-4" aria-label="Vertical election timeline">
          {phases.map((phase) => renderPhaseCard(phase, true))}
        </div>
      </section>

      <section className="bg-white border border-slate-200 rounded-2xl p-4 md:p-5">
        <h2 className="text-lg font-bold text-navy mb-2">Key Dates Calculator</h2>
        <p className="text-sm text-slate-600 mb-4">
          Enter the election day date and the app will calculate each timeline phase window.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
          <label className="text-sm font-medium text-slate-700">
            Election Date
            <input
              type="date"
              value={electionDate}
              onChange={(event) => setElectionDate(event.target.value)}
              className="mt-1 input-base"
            />
          </label>
          <button
            type="button"
            onClick={() => window.print()}
            className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 hover:border-navy hover:text-navy"
          >
            Print Checklist
          </button>
        </div>

        <div className="mt-4">
          {!phaseDateRanges && (
            <p className="text-sm text-slate-500">Select an election date to generate the checklist.</p>
          )}

          {phaseDateRanges && (
            <ul className="space-y-2" aria-label="Printable timeline checklist">
              {phases.map((phase) => {
                const range = phaseDateRanges.find((item) => item.phaseId === phase.id);
                if (!range) return null;

                const dateText =
                  phase.dayStart === phase.dayEnd
                    ? formatDate(range.start)
                    : `${formatDate(range.start)} to ${formatDate(range.end)}`;

                return (
                  <li key={phase.id} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <span className="w-4 h-4 mt-0.5 border border-slate-400 rounded-sm bg-white" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Phase {phase.phaseNumber}: {phase.name}
                      </p>
                      <p className="text-sm text-slate-600">{dateText}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
