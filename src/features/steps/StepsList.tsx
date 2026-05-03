import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useChatStore, useStepsStore } from '@/store';
import { useAuthStore } from '@/store/authStore';
import { saveStepCompleted, removeStepCompleted } from '@/lib/firestore';
import { useAnalytics } from '@/hooks/useAnalytics';

interface VotingGuideStep {
  number: number;
  shortTitle: string;
  title: string;
  icon: string;
  aiQuestion: string;
}

const STEPS: VotingGuideStep[] = [
  {
    number: 1,
    shortTitle: 'Check Eligibility',
    title: 'Am I Eligible to Vote?',
    icon: '✅',
    aiQuestion: 'Can you explain voter eligibility rules in India for a first-time voter?',
  },
  {
    number: 2,
    shortTitle: 'Register',
    title: 'Register on the Voter List',
    icon: '📋',
    aiQuestion: 'How do I register on the electoral roll using Form 6 in India?',
  },
  {
    number: 3,
    shortTitle: 'Get Voter ID',
    title: 'Get Your Voter ID Card (EPIC)',
    icon: '🪪',
    aiQuestion: 'What is EPIC and what alternative IDs are accepted for voting in India?',
  },
  {
    number: 4,
    shortTitle: 'Find Booth',
    title: 'Find Your Polling Booth',
    icon: '📍',
    aiQuestion: 'How can I find my polling booth and timings in India?',
  },
  {
    number: 5,
    shortTitle: 'Prepare',
    title: 'Prepare for Election Day',
    icon: '📅',
    aiQuestion: 'What should I prepare before election day as a first-time voter in India?',
  },
  {
    number: 6,
    shortTitle: 'At Booth',
    title: 'What Happens at the Booth',
    icon: '🏛️',
    aiQuestion: 'Walk me through exactly what happens at an Indian polling booth.',
  },
  {
    number: 7,
    shortTitle: 'Cast Vote',
    title: 'How to Cast Your Vote',
    icon: '🗳️',
    aiQuestion: 'How do EVM and VVPAT work when I cast my vote in India?',
  },
  {
    number: 8,
    shortTitle: 'After Voting',
    title: 'After You Vote',
    icon: '✊',
    aiQuestion:
      'What happens after voting day in India, including counting and government formation?',
  },
];

const ALT_IDS = [
  'Aadhaar Card',
  'Passport',
  'Driving License',
  'PAN Card',
  'MNREGA Job Card',
  'Passbook with photo issued by bank/post office',
  'Smart Card issued by RGI under NPR',
  'Service Identity Cards with photo',
  'Pension document with photograph',
  'Official identity card issued to MPs/MLAs/MLCs',
  'Health insurance smart card (Ministry of Labour scheme)',
  'Disability identity card with photograph',
];

const BOOTH_STAGES = [
  'Join the queue',
  'ID verification desk',
  'Electoral roll confirmation',
  'Indelible ink marking',
  'Ballot slip desk',
  'Voting compartment',
];

const QUIZ_ITEMS = [
  {
    id: 'q1',
    question: 'What is the minimum age to vote in India?',
    options: ['16', '18', '21'],
    correct: 1,
  },
  {
    id: 'q2',
    question: 'How long is the VVPAT slip visible?',
    options: ['3 seconds', '7 seconds', '15 seconds'],
    correct: 1,
  },
  {
    id: 'q3',
    question: 'When should Form 6 registration ideally be completed?',
    options: ['At least 30 days before election', 'One day before election', 'After voting day'],
    correct: 0,
  },
];

export default function StepsList() {
  const navigate = useNavigate();
  const { sendMessage } = useChatStore();
  const { user } = useAuthStore();
  const { trackEvent } = useAnalytics();
  const { currentStep, completedStepIds, setCurrentStep, toggleCompletedStep } = useStepsStore();

  const handleToggleStep = (stepNumber: number, stepTitle: string) => {
    const wasCompleted = completedStepIds.includes(stepNumber);
    toggleCompletedStep(stepNumber);
    if (!wasCompleted) {
      trackEvent('step_completed', { stepNumber, stepName: stepTitle });
      if (user) {
        void saveStepCompleted(user.uid, String(stepNumber));
      }
    } else if (user) {
      void removeStepCompleted(user.uid, String(stepNumber));
    }
  };

  const [eligibilityAge, setEligibilityAge] = useState('');
  const [citizenship, setCitizenship] = useState('yes');
  const [mentallyFit, setMentallyFit] = useState(true);
  const [servingSentence, setServingSentence] = useState(false);

  const [registrationDocs, setRegistrationDocs] = useState<Record<string, boolean>>({
    aadhaar: false,
    address: false,
    photo: false,
  });
  const [preVotingChecklist, setPreVotingChecklist] = useState<Record<string, boolean>>({
    carryId: false,
    voterSlip: false,
    candidateSymbols: false,
    travelPlan: false,
    noPoliticalWear: false,
  });

  const [openIdIndex, setOpenIdIndex] = useState<number | null>(null);
  const [boothStageIndex, setBoothStageIndex] = useState(0);
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [showVvpat, setShowVvpat] = useState(false);
  const [voteDone, setVoteDone] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});

  const step = (STEPS[currentStep - 1] ?? STEPS[0]) as VotingGuideStep;
  const completionPct = Math.round((completedStepIds.length / STEPS.length) * 100);
  const isCurrentCompleted = completedStepIds.includes(currentStep);

  const eligibilityResult = useMemo(() => {
    const ageNumber = Number(eligibilityAge);
    if (!eligibilityAge || Number.isNaN(ageNumber)) return null;

    const eligible = ageNumber >= 18 && citizenship === 'yes' && mentallyFit && !servingSentence;
    return eligible
      ? 'You are likely eligible to vote in India.'
      : 'You may not be eligible yet based on the details entered.';
  }, [eligibilityAge, citizenship, mentallyFit, servingSentence]);

  const quizScore = useMemo(() => {
    let score = 0;
    for (const item of QUIZ_ITEMS) {
      if (quizAnswers[item.id] === item.correct) score += 1;
    }
    return score;
  }, [quizAnswers]);

  const askAiForStep = async () => {
    await sendMessage(step.aiQuestion);
    navigate('/chat');
  };

  const downloadReminderCard = () => {
    const content = [
      'Election Day Reminder',
      '- Carry your voter ID / accepted ID',
      '- Carry voter slip details',
      '- Check booth location and timing (7 AM - 6 PM)',
      '- Avoid political symbols/clothing',
      '- Vote responsibly',
    ].join('\n');
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'voting-day-reminder.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const shareVotedMessage = async () => {
    const text = 'I voted today! #InkedFinger';
    if (navigator.share) {
      await navigator.share({ text });
      return;
    }
    await navigator.clipboard.writeText(text);
  };

  const pressEvm = (candidate: string) => {
    setSelectedCandidate(candidate);
    setShowVvpat(true);
    setVoteDone(false);
    window.setTimeout(() => {
      setShowVvpat(false);
      setVoteDone(true);
    }, 7000);
  };

  const renderStepBody = () => {
    if (currentStep === 1) {
      return (
        <div className="space-y-4">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>- Age requirement (18+ in India)</li>
            <li>- Citizenship requirement</li>
            <li>- Mental fitness requirement</li>
            <li>- Not serving criminal sentence</li>
          </ul>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <p className="font-semibold text-navy text-sm">Eligibility Checker</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <label className="text-sm">
                Age
                <input
                  value={eligibilityAge}
                  onChange={(e) => setEligibilityAge(e.target.value)}
                  type="number"
                  className="input-base mt-1"
                />
              </label>
              <label className="text-sm">
                Indian citizen?
                <select
                  value={citizenship}
                  onChange={(e) => setCitizenship(e.target.value)}
                  className="input-base mt-1"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={mentallyFit}
                onChange={(e) => setMentallyFit(e.target.checked)}
              />
              Mentally fit to vote
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={servingSentence}
                onChange={(e) => setServingSentence(e.target.checked)}
              />
              Currently serving a criminal sentence
            </label>
            {eligibilityResult && (
              <p className="text-sm font-semibold text-navy">{eligibilityResult}</p>
            )}
          </div>
        </div>
      );
    }

    if (currentStep === 2) {
      return (
        <div className="space-y-4">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>- Electoral Roll is the official voter list.</li>
            <li>- Apply using Form 6 at voters.eci.gov.in.</li>
            <li>- Needed documents: Aadhaar, address proof, photo.</li>
            <li>- Check if already registered before applying.</li>
            <li>- Deadline: 30 days before election.</li>
          </ul>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <a
              href="https://voters.eci.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-4 py-2 rounded-lg bg-navy text-white text-sm font-semibold"
            >
              Open Official Registration Portal
            </a>
            <div>
              <p className="text-sm font-semibold text-navy mb-2">Document Checklist</p>
              {(
                [
                  { key: 'aadhaar', label: 'Aadhaar' },
                  { key: 'address', label: 'Address proof' },
                  { key: 'photo', label: 'Passport-size photo' },
                ] as const
              ).map(({ key, label }) => (
                <label key={key} className="flex items-center gap-2 text-sm mb-1">
                  <input
                    type="checkbox"
                    checked={registrationDocs[key]}
                    onChange={(e) =>
                      setRegistrationDocs((prev) => ({
                        ...prev,
                        [key]: e.target.checked,
                      }))
                    }
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (currentStep === 3) {
      return (
        <div className="space-y-4">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>- EPIC means Elector&apos;s Photo Identity Card.</li>
            <li>- Download e-EPIC from voters.eci.gov.in.</li>
            <li>- Multiple alternative IDs are accepted on voting day.</li>
            <li>- You can track application status online.</li>
          </ul>
          <a
            href="https://voters.eci.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-4 py-2 rounded-lg bg-navy text-white text-sm font-semibold"
          >
            Download e-EPIC
          </a>
          <div className="border border-slate-200 rounded-xl">
            {ALT_IDS.map((item, idx) => (
              <div key={item} className={cn('border-b border-slate-100 last:border-b-0')}>
                <button
                  className="w-full text-left px-4 py-3 text-sm font-medium text-navy"
                  onClick={() => setOpenIdIndex(openIdIndex === idx ? null : idx)}
                >
                  ID Option {idx + 1}
                </button>
                {openIdIndex === idx && <p className="px-4 pb-3 text-sm text-slate-600">{item}</p>}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (currentStep === 4) {
      return (
        <div className="space-y-4">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>- Polling booth is assigned based on your registered address.</li>
            <li>- You can find it via SMS, official website, and mobile app.</li>
            <li>- Standard timings are usually 7 AM to 6 PM.</li>
          </ul>
          <a
            href="https://voters.eci.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-4 py-2 rounded-lg bg-navy text-white text-sm font-semibold"
          >
            Search Polling Booth
          </a>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700">
            <p>
              <strong>Booth Number:</strong> 124
            </p>
            <p>
              <strong>Address:</strong> Government Primary School, Ward 8
            </p>
            <p>
              <strong>Timings:</strong> 7:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      );
    }

    if (currentStep === 5) {
      return (
        <div className="space-y-4">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>- Carry your voter ID or accepted alternate ID.</li>
            <li>- Confirm your name in voter list and keep slip details.</li>
            <li>- Know your candidates and symbols in advance.</li>
            <li>- Plan travel early to avoid delays.</li>
            <li>- Do not wear political clothing/symbols at polling station.</li>
          </ul>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-sm font-semibold text-navy mb-2">Pre-voting Checklist</p>
            {(
              [
                { key: 'carryId', label: 'Carry voter ID/accepted ID' },
                { key: 'voterSlip', label: 'Have voter slip details' },
                { key: 'candidateSymbols', label: 'Know candidate symbols' },
                { key: 'travelPlan', label: 'Travel plan ready' },
                { key: 'noPoliticalWear', label: 'No political symbols on clothing' },
              ] as const
            ).map(({ key, label }) => (
              <label key={key} className="flex items-center gap-2 text-sm mb-1">
                <input
                  type="checkbox"
                  checked={preVotingChecklist[key]}
                  onChange={(e) =>
                    setPreVotingChecklist((prev) => ({
                      ...prev,
                      [key]: e.target.checked,
                    }))
                  }
                />
                {label}
              </label>
            ))}
          </div>
          <button
            onClick={downloadReminderCard}
            className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 hover:border-navy hover:text-navy"
          >
            Download Voting Day Reminder Card
          </button>
        </div>
      );
    }

    if (currentStep === 6) {
      return (
        <div className="space-y-4">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>- Join queue (often separate lines for men/women).</li>
            <li>- Show ID to polling officer.</li>
            <li>- Electoral roll name verification.</li>
            <li>- Finger marked with indelible ink.</li>
            <li>- Receive ballot slip and enter voting compartment.</li>
          </ul>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-sm font-semibold text-navy mb-3">Animated Booth Walkthrough</p>
            <div className="grid sm:grid-cols-3 gap-2 mb-3">
              {BOOTH_STAGES.map((stage, index) => (
                <div
                  key={stage}
                  className={cn(
                    'rounded-lg border px-3 py-2 text-xs',
                    boothStageIndex === index
                      ? 'border-orange bg-orange-50 animate-pulse'
                      : 'border-slate-200 bg-white'
                  )}
                >
                  {stage}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setBoothStageIndex((i) => Math.max(0, i - 1))}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-sm"
              >
                Previous Stage
              </button>
              <button
                onClick={() => setBoothStageIndex((i) => Math.min(BOOTH_STAGES.length - 1, i + 1))}
                className="px-3 py-1.5 rounded-lg bg-navy text-white text-sm"
              >
                Next Stage
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (currentStep === 7) {
      const candidates = ['Lotus Party', 'River Front', 'People Alliance', 'Green Future'];
      return (
        <div className="space-y-4">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>- Find your candidate name and symbol on EVM list.</li>
            <li>- Press blue button beside your preferred candidate.</li>
            <li>- VVPAT slip appears for 7 seconds for verification.</li>
            <li>- Press CLOSE on VVPAT and your vote is cast.</li>
          </ul>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-sm font-semibold text-navy mb-2">EVM Simulator</p>
            <div className="space-y-2">
              {candidates.map((candidate) => (
                <button
                  key={candidate}
                  onClick={() => pressEvm(candidate)}
                  className="w-full text-left px-3 py-2 border border-slate-300 rounded-lg text-sm hover:border-navy"
                >
                  {candidate} <span className="text-xs text-slate-400">(Press blue button)</span>
                </button>
              ))}
            </div>
            {showVvpat && selectedCandidate && (
              <div className="mt-3 border border-green-300 bg-green-50 rounded-lg p-3 animate-fade-in">
                <p className="text-sm font-semibold text-green-800">
                  VVPAT Slip: {selectedCandidate}
                </p>
                <p className="text-xs text-green-700">
                  Visible for 7 seconds. Verify and press CLOSE.
                </p>
                <button
                  onClick={() => {
                    setShowVvpat(false);
                    setVoteDone(true);
                  }}
                  className="mt-2 px-3 py-1.5 rounded-md bg-green-700 text-white text-xs"
                >
                  CLOSE
                </button>
              </div>
            )}
            {voteDone && (
              <p className="mt-3 text-sm font-semibold text-navy">
                Your vote is cast successfully.
              </p>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <ul className="space-y-2 text-sm text-slate-700">
          <li>- Show your ink-marked finger proudly (#InkedFinger).</li>
          <li>- Results are announced after counting and verification.</li>
          <li>- Check official channels for final certified results.</li>
          <li>- Government formation follows constitutional process.</li>
        </ul>
        <div className="flex gap-2">
          <button
            onClick={() => void shareVotedMessage()}
            className="px-4 py-2 rounded-lg bg-navy text-white text-sm font-semibold"
          >
            I voted today!
          </button>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <p className="text-sm font-semibold text-navy mb-2">Quick Quiz</p>
          {QUIZ_ITEMS.map((item) => (
            <div key={item.id} className="mb-3">
              <p className="text-sm text-slate-700 mb-1">{item.question}</p>
              <div className="flex flex-wrap gap-2">
                {item.options.map((option, index) => (
                  <button
                    key={option}
                    onClick={() => setQuizAnswers((prev) => ({ ...prev, [item.id]: index }))}
                    className={cn(
                      'px-2.5 py-1.5 rounded-lg border text-xs',
                      quizAnswers[item.id] === index
                        ? 'bg-navy text-white border-navy'
                        : 'bg-white text-slate-700 border-slate-300'
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <p className="text-sm font-semibold text-navy">
            Score: {quizScore}/{QUIZ_ITEMS.length}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 md:p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-navy" id="progress-label">Progress</p>
          <p className="text-sm font-bold text-orange-700">
            {completedStepIds.length}/{STEPS.length} steps complete
          </p>
        </div>
        <div
          className="h-3 bg-slate-100 rounded-full overflow-hidden mb-3"
          role="progressbar"
          aria-labelledby="progress-label"
          aria-valuenow={completionPct}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-gradient-to-r from-navy to-orange transition-all duration-300"
            style={{ width: `${completionPct}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 mb-3">{completionPct}% completed</p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {STEPS.map((item) => {
            const completed = completedStepIds.includes(item.number);
            const active = currentStep === item.number;
            return (
              <button
                key={item.number}
                onClick={() => setCurrentStep(item.number)}
                className={cn(
                  'px-2 py-2 rounded-lg border text-left transition-colors',
                  active
                    ? 'border-navy bg-navy-50'
                    : 'border-slate-200 bg-white hover:border-navy-300'
                )}
              >
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-700">
                  {completed ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  ) : (
                    <span>{item.number}.</span>
                  )}
                  <span>{item.icon}</span>
                </div>
                <p className="text-[11px] text-slate-600 mt-1 leading-snug">{item.shortTitle}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-sm font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-orange-700">
            Step {step.number}
          </span>
          <h2 className="text-2xl font-bold text-navy flex items-center gap-2">
            <span aria-hidden="true">{step.icon}</span>
            {step.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_260px] gap-5">
          <div>{renderStepBody()}</div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Illustration
              </p>
              <div className="h-40 rounded-lg border border-dashed border-slate-300 bg-white flex items-center justify-center text-5xl">
                {step.icon}
              </div>
              <p className="text-sm text-slate-600 mt-3">
                Visual aid for step {step.number}: {step.shortTitle}
              </p>
            </div>
            <button
              onClick={() => handleToggleStep(step.number, step.shortTitle)}
              className={cn(
                'mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold',
                isCurrentCompleted
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-navy text-white'
              )}
            >
              {isCurrentCompleted ? <Check className="w-4 h-4" /> : null}
              {isCurrentCompleted ? 'Step Completed' : 'Mark Step Completed'}
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            disabled={currentStep === 1}
            className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            disabled={currentStep === STEPS.length}
            className="px-4 py-2 rounded-lg bg-navy text-white text-sm font-semibold disabled:opacity-50"
          >
            Next
          </button>
          <button
            onClick={() => void askAiForStep()}
            className="px-4 py-2 rounded-lg bg-orange text-white text-sm font-semibold"
          >
            Ask AI About This Step
          </button>
        </div>
      </div>
    </div>
  );
}
