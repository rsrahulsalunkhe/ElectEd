import type {
  QuizQuestion,
  GlossaryTerm,
  VotingStep,
  ElectionSystem,
  TimelineEvent,
  NavItem,
  SuggestedQuestionCategory,
} from '@/types';

// ─── App Meta ─────────────────────────────────────────────────────
export const APP_NAME = import.meta.env.VITE_APP_NAME ?? 'ElectEd';
export const APP_VERSION = '1.0.0';

// ─── Navigation Items ─────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', icon: 'Home', description: 'Back to landing page' },
  { label: 'AI Assistant', path: '/chat', icon: 'MessageCircle', description: 'Chat with our AI election guide' },
  { label: 'Timeline', path: '/timeline', icon: 'Calendar', description: 'Election timeline visualizer' },
  { label: 'Voting Steps', path: '/steps', icon: 'ListChecks', description: 'Step-by-step voting guide' },
  { label: 'Quiz', path: '/quiz', icon: 'BrainCircuit', description: 'Test your election knowledge' },
  { label: 'Glossary', path: '/glossary', icon: 'BookOpen', description: 'Election terms dictionary' },
  { label: 'Compare', path: '/compare', icon: 'Globe', description: 'Compare election systems worldwide' },
];

// ─── Timeline Events ──────────────────────────────────────────────
export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'evt-1',
    date: '6 months before',
    title: 'Election Announced',
    description: 'The governing body officially announces the election date and sets the electoral calendar.',
    phase: 'preparation',
    isKeyDate: true,
    icon: 'Megaphone',
  },
  {
    id: 'evt-2',
    date: '5 months before',
    title: 'Voter Registration Opens',
    description: 'Citizens can register to vote or update their voter registration details.',
    phase: 'preparation',
    icon: 'UserPlus',
  },
  {
    id: 'evt-3',
    date: '4 months before',
    title: 'Candidate Nomination',
    description: 'Political parties and independent candidates file their nominations with the election commission.',
    phase: 'nomination',
    isKeyDate: true,
    icon: 'FileSignature',
  },
  {
    id: 'evt-4',
    date: '3 months before',
    title: 'Campaign Period Begins',
    description: 'Official campaign season starts. Candidates begin public outreach, rallies, and advertising.',
    phase: 'campaign',
    icon: 'Mic',
  },
  {
    id: 'evt-5',
    date: '6 weeks before',
    title: 'Voter Registration Closes',
    description: 'Deadline to register as a voter. Check your registration status immediately if unsure.',
    phase: 'preparation',
    isKeyDate: true,
    icon: 'UserCheck',
  },
  {
    id: 'evt-6',
    date: '2 weeks before',
    title: 'Early Voting Opens',
    description: 'Many jurisdictions allow early in-person voting before Election Day for added convenience.',
    phase: 'voting',
    icon: 'VoteIcon',
  },
  {
    id: 'evt-7',
    date: 'Election Day',
    title: 'General Election',
    description: 'Polls open. All registered voters can cast their ballot at designated polling stations.',
    phase: 'voting',
    isKeyDate: true,
    icon: 'Flag',
  },
  {
    id: 'evt-8',
    date: 'Election Night',
    title: 'Polls Close & Counting Begins',
    description: 'Polls close and official counting commences. Preliminary results begin to emerge.',
    phase: 'results',
    icon: 'BarChart2',
  },
  {
    id: 'evt-9',
    date: 'Days after',
    title: 'Official Results Declared',
    description: 'Election commission certifies results after all ballots, including absentee and provisional, are counted.',
    phase: 'results',
    isKeyDate: true,
    icon: 'Award',
  },
];

// ─── Voting Steps ─────────────────────────────────────────────────
export const VOTING_STEPS: VotingStep[] = [
  {
    id: 'step-1', stepNumber: 1,
    title: 'Check Your Eligibility',
    description: 'Verify that you meet the legal requirements to vote — citizenship, age (18+), and residency in the electoral area.',
    tips: ['Check your country/state minimum voting age', 'Non-citizens cannot vote in most elections'],
    icon: 'ShieldCheck', isRequired: true, estimatedTime: '5 min',
  },
  {
    id: 'step-2', stepNumber: 2,
    title: 'Register to Vote',
    description: 'If not already registered, sign up on the official electoral roll. Registration deadlines vary by region.',
    tips: ['Register early — deadlines are strict', 'Update your registration if you moved'],
    icon: 'ClipboardEdit', isRequired: true, estimatedTime: '10–15 min',
    documents: ['Government-issued ID', 'Proof of address'],
  },
  {
    id: 'step-3', stepNumber: 3,
    title: 'Confirm Your Polling Station',
    description: 'Find your designated polling place based on your registered address.',
    tips: ['Use the official election commission voter lookup tool', 'Confirm opening hours'],
    icon: 'MapPin', isRequired: true, estimatedTime: '2 min',
  },
  {
    id: 'step-4', stepNumber: 4,
    title: 'Research the Candidates & Issues',
    description: 'Study the candidates, political parties, ballot measures, and their platforms before voting.',
    tips: ['Use nonpartisan voter guides', 'Watch official debates'],
    icon: 'Search', isRequired: false, estimatedTime: 'Varies',
  },
  {
    id: 'step-5', stepNumber: 5,
    title: 'Gather Required Documents',
    description: 'Bring accepted photo ID and any other documents required by your jurisdiction on Election Day.',
    tips: ['Accepted IDs vary — check your local rules', 'Bring backup ID if possible'],
    icon: 'FolderOpen', isRequired: true, estimatedTime: '5 min',
    documents: ['Photo ID', 'Voter registration card (if required)'],
  },
  {
    id: 'step-6', stepNumber: 6,
    title: 'Go to the Polls',
    description: 'Visit your polling station during voting hours. Arrive early to avoid queues, especially near closing time.',
    tips: ['Arrive 30 min before closing to ensure entry', 'Assistance is available for voters with disabilities'],
    icon: 'Navigation', isRequired: true, estimatedTime: '15–45 min',
  },
  {
    id: 'step-7', stepNumber: 7,
    title: 'Cast Your Ballot',
    description: 'Follow instructions from poll workers, mark your ballot carefully, and submit it through the official process.',
    tips: ['Double-check your selections before submitting', 'You can request a new ballot if you make a mistake'],
    icon: 'CheckSquare', isRequired: true, estimatedTime: '5–10 min',
  },
  {
    id: 'step-8', stepNumber: 8,
    title: 'Track Results',
    description: 'Follow the official election results through the election commission website or trusted media outlets.',
    tips: ['Beware of unofficial result claims on social media', 'Final certified results may take days'],
    icon: 'BarChart2', isRequired: false, estimatedTime: 'Ongoing',
  },
];

// ─── Quiz Questions ────────────────────────────────────────────────
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1', difficulty: 'easy', category: 'Basics',
    question: 'What is the minimum voting age in most democratic countries?',
    options: ['16', '18', '21', '25'],
    correctIndex: 1,
    explanation: 'Most democracies set the minimum voting age at 18, though some countries like Austria and Scotland allow voting from age 16.',
  },
  {
    id: 'q2', difficulty: 'easy', category: 'Process',
    question: 'What is a "ballot"?',
    options: [
      'A political speech',
      'A document or device used to cast a vote',
      'A campaign poster',
      'A voting registration form',
    ],
    correctIndex: 1,
    explanation: 'A ballot is the official document or electronic interface used by voters to record their choices in an election.',
  },
  {
    id: 'q3', difficulty: 'medium', category: 'Systems',
    question: 'In a "First Past the Post" system, who wins?',
    options: [
      'The candidate with over 50% of votes',
      'The candidate with the most votes, regardless of majority',
      'The candidate endorsed by the outgoing leader',
      'The candidate selected by parliament',
    ],
    correctIndex: 1,
    explanation: 'First Past the Post (FPTP) is a plurality system where the candidate who gets the most votes wins, even without an absolute majority.',
  },
  {
    id: 'q4', difficulty: 'medium', category: 'Rights',
    question: 'What does "universal suffrage" mean?',
    options: [
      'Only property owners can vote',
      'Only educated citizens can vote',
      'All adult citizens have the right to vote',
      'Voting is compulsory for all adults',
    ],
    correctIndex: 2,
    explanation: 'Universal suffrage means the right to vote is extended to all adult citizens regardless of sex, race, wealth, or education.',
  },
  {
    id: 'q5', difficulty: 'hard', category: 'Systems',
    question: 'Which electoral system uses "Single Transferable Vote" (STV)?',
    options: ['USA Presidential Elections', 'UK General Elections', 'Irish General Elections', 'French Presidential Elections'],
    correctIndex: 2,
    explanation: 'Ireland uses the Single Transferable Vote (STV) system for its general elections, allowing voters to rank candidates by preference.',
  },
  {
    id: 'q6', difficulty: 'easy', category: 'Process',
    question: 'What is voter registration?',
    options: [
      'Signing up for a political party',
      'The process of adding your name to the official list of eligible voters',
      'Downloading a voting app',
      'Attending a political rally',
    ],
    correctIndex: 1,
    explanation: 'Voter registration is the process through which citizens officially enroll on the electoral roll, making them eligible to vote in elections.',
  },
  {
    id: 'q7', difficulty: 'medium', category: 'Governance',
    question: 'What is gerrymandering?',
    options: [
      'A type of campaign finance law',
      'Manipulating electoral district boundaries to favor a party',
      'The process of recounting votes',
      'A method of selecting independent candidates',
    ],
    correctIndex: 1,
    explanation: 'Gerrymandering is the manipulation of electoral district boundaries to give unfair advantage to one political party over others.',
  },
  {
    id: 'q8', difficulty: 'hard', category: 'History',
    question: 'In what year did the United Kingdom grant women full voting rights equal to men?',
    options: ['1908', '1918', '1928', '1945'],
    correctIndex: 2,
    explanation: 'While women over 30 who met property requirements gained the vote in 1918, full equal voting rights for women in the UK came in 1928 with the Representation of the People (Equal Franchise) Act.',
  },
];

// ─── Glossary Terms ───────────────────────────────────────────────
export const GLOSSARY_TERMS: GlossaryTerm[] = [
  { id: 'g1', term: 'Ballot', category: 'voting', definition: 'The official document or electronic interface used to record a voter\'s choices in an election.', example: 'Each voter receives a ballot at the polling station.' },
  { id: 'g2', term: 'By-election', category: 'process', definition: 'A special election held between regular election cycles to fill a vacant seat.', relatedTerms: ['General Election'] },
  { id: 'g3', term: 'Caucus', category: 'process', definition: 'A gathering of party members to select candidates or decide party policy.', example: 'Iowa caucuses are closely watched in US presidential primaries.' },
  { id: 'g4', term: 'Constituency', category: 'governance', definition: 'A geographic area whose residents elect a representative to a legislative body.' },
  { id: 'g5', term: 'Disenfranchisement', category: 'legal', definition: 'The removal or restriction of the right to vote from a person or group.' },
  { id: 'g6', term: 'Electoral College', category: 'governance', definition: 'A body of electors established by the US Constitution to elect the President and Vice President.', example: 'A candidate needs 270 electoral votes to win the US presidency.' },
  { id: 'g7', term: 'Exit Poll', category: 'process', definition: 'A survey taken of voters immediately after they have voted to predict election results.' },
  { id: 'g8', term: 'Franchise', category: 'legal', definition: 'The right to vote in public elections.', relatedTerms: ['Suffrage', 'Disenfranchisement'] },
  { id: 'g9', term: 'Gerrymandering', category: 'governance', definition: 'Manipulating the boundaries of electoral districts to favor a specific political party or group.' },
  { id: 'g10', term: 'Hung Parliament', category: 'governance', definition: 'A parliament in which no single party has an overall majority of seats.' },
  { id: 'g11', term: 'Incumbent', category: 'campaigning', definition: 'The current holder of a political office who is running for re-election.' },
  { id: 'g12', term: 'Mandate', category: 'governance', definition: 'The authority granted by voters to an elected official or party to govern and carry out their platform.' },
  { id: 'g13', term: 'Polling Station', category: 'voting', definition: 'The official location where registered voters go to cast their ballots on Election Day.' },
  { id: 'g14', term: 'Proportional Representation', category: 'governance', definition: 'An electoral system in which parties gain seats in proportion to the number of votes they receive.' },
  { id: 'g15', term: 'Suffrage', category: 'legal', definition: 'The right to vote in political elections.', relatedTerms: ['Franchise'] },
  { id: 'g16', term: 'Swing State', category: 'campaigning', definition: 'A state where the two major political parties have similar levels of support and the outcome is uncertain.' },
  { id: 'g17', term: 'Term Limit', category: 'legal', definition: 'A legal restriction that limits the number of terms an official may hold a particular elected office.' },
  { id: 'g18', term: 'Turnout', category: 'voting', definition: 'The percentage of eligible voters who actually cast their ballots in a given election.' },
];

// ─── Election Systems (Compare) ───────────────────────────────────
export const ELECTION_SYSTEMS: ElectionSystem[] = [
  {
    id: 'usa', country: 'United States', flag: '🇺🇸', region: 'Americas',
    systemType: 'Electoral College / FPTP', votingAge: 18, registrationRequired: true,
    compulsoryVoting: false, electionFrequency: 'Every 4 years (Presidential)',
    turnoutAvg: '~60%', uniqueFeatures: ['Electoral College for President', 'Decentralized state-level administration', 'Primary elections'],
  },
  {
    id: 'uk', country: 'United Kingdom', flag: '🇬🇧', region: 'Europe',
    systemType: 'First Past the Post', votingAge: 18, registrationRequired: true,
    compulsoryVoting: false, electionFrequency: 'Every 5 years (maximum)',
    turnoutAvg: '~67%', uniqueFeatures: ['Parliamentary sovereignty', 'No fixed election date', 'By-elections for vacancies'],
  },
  {
    id: 'india', country: 'India', flag: '🇮🇳', region: 'Asia',
    systemType: 'First Past the Post', votingAge: 18, registrationRequired: true,
    compulsoryVoting: false, electionFrequency: 'Every 5 years',
    turnoutAvg: '~67%', uniqueFeatures: ['EVM (Electronic Voting Machines)', 'World\'s largest democracy', 'Multi-phase elections'],
  },
  {
    id: 'germany', country: 'Germany', flag: '🇩🇪', region: 'Europe',
    systemType: 'Mixed-Member Proportional', votingAge: 18, registrationRequired: false,
    compulsoryVoting: false, electionFrequency: 'Every 4 years',
    turnoutAvg: '~76%', uniqueFeatures: ['Two-vote system', 'Automatic voter registration', '5% threshold for parliament entry'],
  },
  {
    id: 'australia', country: 'Australia', flag: '🇦🇺', region: 'Oceania',
    systemType: 'Preferential Voting', votingAge: 18, registrationRequired: true,
    compulsoryVoting: true, electionFrequency: 'Every 3 years (House)',
    turnoutAvg: '~91%', uniqueFeatures: ['Compulsory voting', 'Preferential (ranked) ballots', 'Independent Electoral Commission'],
  },
  {
    id: 'sweden', country: 'Sweden', flag: '🇸🇪', region: 'Europe',
    systemType: 'Proportional Representation', votingAge: 18, registrationRequired: false,
    compulsoryVoting: false, electionFrequency: 'Every 4 years',
    turnoutAvg: '~87%', uniqueFeatures: ['Party-list proportional system', '4% threshold', 'Automatic registration'],
  },
  {
    id: 'france', country: 'France', flag: '🇫🇷', region: 'Europe',
    systemType: 'Two-Round System', votingAge: 18, registrationRequired: true,
    compulsoryVoting: false, electionFrequency: 'Every 5 years',
    turnoutAvg: '~77%', uniqueFeatures: ['Two-round runoff', 'Semi-presidential system', 'Strong executive president'],
  },
  {
    id: 'brazil', country: 'Brazil', flag: '🇧🇷', region: 'Americas',
    systemType: 'Two-Round Proportional', votingAge: 18, registrationRequired: true,
    compulsoryVoting: true, electionFrequency: 'Every 4 years',
    turnoutAvg: '~79%', uniqueFeatures: ['Compulsory voting (18–70)', 'Electronic voting since 1996', 'Open-list proportional'],
  },
];

// ─── AI Suggested Questions ────────────────────────────────────────
export const SUGGESTED_QUESTION_CATEGORIES: SuggestedQuestionCategory[] = [
  {
    id: 'basics',
    label: 'Basics',
    icon: '📋',
    questions: [
      'What is an election?',
      'Who can vote?',
      'What is voter registration?',
      'What is a constituency?',
    ],
  },
  {
    id: 'timeline-process',
    label: 'Timeline & Process',
    icon: '🗓️',
    questions: [
      'When are elections announced?',
      'What is the election campaign period?',
      'What happens on voting day?',
      'How are votes counted?',
    ],
  },
  {
    id: 'voting',
    label: 'Voting',
    icon: '🗳️',
    questions: [
      'How do I register to vote?',
      'What ID do I need to vote?',
      'What is a ballot paper?',
      'What is EVM (Electronic Voting Machine)?',
    ],
  },
  {
    id: 'systems-types',
    label: 'Systems & Types',
    icon: '🌍',
    questions: [
      'What is FPTP vs Proportional Representation?',
      'What is a by-election?',
      'What is a referendum?',
      'How do different countries vote?',
    ],
  },
  {
    id: 'results-after',
    label: 'Results & After',
    icon: '📊',
    questions: [
      'How are election results declared?',
      'What is an exit poll?',
      'What happens after a party wins?',
      'What is a hung parliament/assembly?',
    ],
  },
];
