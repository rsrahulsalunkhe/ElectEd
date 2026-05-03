export type QuizCategoryId = 'beginner' | 'intermediate' | 'advanced' | 'challenge';

export interface QuizCategoryMeta {
  id: QuizCategoryId;
  icon: string;
  difficultyBadge: string;
  title: string;
  subtitle: string;
  questionCount: number;
  estimatedTime: string;
  timed: boolean;
}

export interface QuizQuestionData {
  id: string;
  categoryId: Exclude<QuizCategoryId, 'challenge'>;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const QUIZ_CATEGORIES: QuizCategoryMeta[] = [
  {
    id: 'beginner',
    icon: '🟢',
    difficultyBadge: 'Beginner',
    title: 'Election Basics',
    subtitle: 'Start with core election concepts and terminology.',
    questionCount: 10,
    estimatedTime: '6-8 min',
    timed: false,
  },
  {
    id: 'intermediate',
    icon: '🟡',
    difficultyBadge: 'Intermediate',
    title: 'Voting Process',
    subtitle: 'Understand forms, booth process, observers, and rules.',
    questionCount: 10,
    estimatedTime: '8-10 min',
    timed: false,
  },
  {
    id: 'advanced',
    icon: '🔴',
    difficultyBadge: 'Advanced',
    title: 'Electoral Systems',
    subtitle: 'Dive into representation models and election law.',
    questionCount: 10,
    estimatedTime: '10-12 min',
    timed: false,
  },
  {
    id: 'challenge',
    icon: '🏆',
    difficultyBadge: 'Challenge',
    title: 'Mixed Topics',
    subtitle: 'Timed mixed round across all categories.',
    questionCount: 15,
    estimatedTime: '7-8 min',
    timed: true,
  },
];

export const BEGINNER_QUESTIONS: QuizQuestionData[] = [
  {
    id: 'b1',
    categoryId: 'beginner',
    prompt: 'What is the minimum age to vote in India?',
    options: ['16', '18', '21', '25'],
    correctIndex: 1,
    explanation:
      'The 61st Constitutional Amendment in 1988 lowered the voting age from 21 to 18 years.',
  },
  {
    id: 'b2',
    categoryId: 'beginner',
    prompt: 'What does EVM stand for?',
    options: [
      'Electronic Vote Machine',
      'Electronic Voting Machine',
      'Election Voting Method',
      'Electronic Voter Management',
    ],
    correctIndex: 1,
    explanation:
      'EVMs replaced paper ballots in Indian elections to make voting faster and more accurate.',
  },
  {
    id: 'b3',
    categoryId: 'beginner',
    prompt: 'Which body conducts elections in India?',
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President of India'],
    correctIndex: 2,
    explanation:
      'The Election Commission is an autonomous constitutional authority responsible for administering all elections in India.',
  },
  {
    id: 'b4',
    categoryId: 'beginner',
    prompt: 'What is NOTA?',
    options: [
      'Not One Talent Available',
      'None Of The Above',
      'National Official Tally Aggregate',
      'New Opposition Tactical Alliance',
    ],
    correctIndex: 1,
    explanation:
      'NOTA allows voters to reject all candidates on the ballot. It was introduced in India in 2013.',
  },
  {
    id: 'b5',
    categoryId: 'beginner',
    prompt: 'What is the term duration of Lok Sabha?',
    options: ['4 years', '5 years', '6 years', '3 years'],
    correctIndex: 1,
    explanation: 'The Lok Sabha has a term of 5 years unless dissolved earlier by the President.',
  },
  {
    id: 'b6',
    categoryId: 'beginner',
    prompt: 'What is a constituency?',
    options: [
      'A political party headquarters',
      'A geographic area represented by one elected member',
      'The Election Commission office',
      'A type of ballot paper',
    ],
    correctIndex: 1,
    explanation:
      'India is divided into constituencies, each electing one representative to the legislature.',
  },
  {
    id: 'b7',
    categoryId: 'beginner',
    prompt: 'What is the Model Code of Conduct?',
    options: [
      'Rules for election officials only',
      'Guidelines for candidates and parties during elections',
      'Voting procedure manual',
      'Media reporting guidelines',
    ],
    correctIndex: 1,
    explanation:
      'The MCC is a set of guidelines issued by ECI to regulate political parties and candidates during election period.',
  },
  {
    id: 'b8',
    categoryId: 'beginner',
    prompt: 'What is VVPAT?',
    options: [
      'Voter Verified Paper Audit Trail',
      'Virtual Voting Process And Technology',
      'Verified Voter Paper And Tracking',
      'Vote Verification Paper Audit Tool',
    ],
    correctIndex: 0,
    explanation:
      'VVPAT provides a paper trail to verify the vote cast on EVM, showing a slip for 7 seconds.',
  },
  {
    id: 'b9',
    categoryId: 'beginner',
    prompt: 'How long is indelible ink effective?',
    options: ['24 hours', '3 days', 'Several weeks', '7 days'],
    correctIndex: 2,
    explanation:
      'Indelible ink used on the left index finger is designed to remain for several weeks to prevent duplicate voting.',
  },
  {
    id: 'b10',
    categoryId: 'beginner',
    prompt: 'What is a hung parliament?',
    options: [
      'Parliament during recess',
      'When no party wins majority on its own',
      'Parliament after dissolution',
      'A parliament with vacant seats',
    ],
    correctIndex: 1,
    explanation:
      'A hung parliament occurs when no single party wins enough seats to form a majority government.',
  },
];

export const INTERMEDIATE_QUESTIONS: QuizQuestionData[] = [
  {
    id: 'i1',
    categoryId: 'intermediate',
    prompt: 'Which form is commonly used for new voter registration in India?',
    options: ['Form 6', 'Form 8', 'Form 17A', 'Form 12D'],
    correctIndex: 0,
    explanation:
      'Form 6 is used by eligible citizens to apply for inclusion in the electoral roll.',
  },
  {
    id: 'i2',
    categoryId: 'intermediate',
    prompt: 'What does EPIC stand for?',
    options: [
      'Electoral Process Identity Card',
      "Elector's Photo Identity Card",
      'Election Polling Identity Certificate',
      'Electronic Public ID Card',
    ],
    correctIndex: 1,
    explanation: 'EPIC is the official voter identity card issued to registered electors.',
  },
  {
    id: 'i3',
    categoryId: 'intermediate',
    prompt: 'What is the purpose of the electoral roll?',
    options: [
      'List of contesting candidates',
      'List of eligible registered voters',
      'List of polling officers',
      'List of political parties only',
    ],
    correctIndex: 1,
    explanation: 'The electoral roll is the official list of eligible voters in a constituency.',
  },
  {
    id: 'i4',
    categoryId: 'intermediate',
    prompt: 'Who verifies your name and ID at the polling booth?',
    options: ['Presiding Judge', 'Polling Officer', 'Police Officer', 'Party Worker'],
    correctIndex: 1,
    explanation: 'Polling officers verify voter identity and electoral roll details before voting.',
  },
  {
    id: 'i5',
    categoryId: 'intermediate',
    prompt: 'What does the 48-hour silent period before voting prohibit?',
    options: [
      'All news reporting',
      'All public campaign activities',
      'Polling station operations',
      'Candidate travel',
    ],
    correctIndex: 1,
    explanation:
      'Campaigning and public election propaganda are restricted during the silent period.',
  },
  {
    id: 'i6',
    categoryId: 'intermediate',
    prompt: 'What is the role of election observers?',
    options: [
      'Campaign for neutral candidates',
      'Monitor fairness and compliance during elections',
      'Count votes personally in every booth',
      'Approve party manifestos',
    ],
    correctIndex: 1,
    explanation: 'Observers monitor election conduct and report violations to ensure fairness.',
  },
  {
    id: 'i7',
    categoryId: 'intermediate',
    prompt: 'Which of the following best describes campaign finance regulation?',
    options: [
      'No spending limits exist',
      'Only national parties report spending',
      'Candidates must follow spending limits and reporting rules',
      'Campaign spending is decided by media houses',
    ],
    correctIndex: 2,
    explanation:
      'Candidates must follow legally prescribed spending limits and submit expenditure records.',
  },
  {
    id: 'i8',
    categoryId: 'intermediate',
    prompt: 'When does counting typically start?',
    options: [
      'Immediately after nomination',
      'After polling ends and authorized schedule is announced',
      'Before polling opens',
      'After cabinet formation',
    ],
    correctIndex: 1,
    explanation:
      'Counting begins only after polling and per schedule under election authority supervision.',
  },
  {
    id: 'i9',
    categoryId: 'intermediate',
    prompt: 'What is Form 8 generally used for?',
    options: [
      'New voter registration',
      'Correction or update in voter details',
      'Election result declaration',
      'Candidate nomination filing',
    ],
    correctIndex: 1,
    explanation:
      'Form 8 is commonly used to request correction of details in existing voter records.',
  },
  {
    id: 'i10',
    categoryId: 'intermediate',
    prompt: 'Why is indelible ink applied at polling stations?',
    options: [
      'To mark party preference',
      'To prevent duplicate voting',
      'To speed up counting',
      'To identify first-time voters',
    ],
    correctIndex: 1,
    explanation:
      'Indelible ink is a practical anti-fraud measure to prevent multiple voting attempts.',
  },
];

export const ADVANCED_QUESTIONS: QuizQuestionData[] = [
  {
    id: 'a1',
    categoryId: 'advanced',
    prompt: 'What is a key feature of First-Past-The-Post (FPTP)?',
    options: [
      'Winner must get over 50% of all votes',
      'Candidate with highest votes wins, even without majority',
      'Seats are allocated by national vote share',
      'Only ranked ballots are used',
    ],
    correctIndex: 1,
    explanation:
      'In FPTP, the candidate with the highest vote count wins regardless of absolute majority.',
  },
  {
    id: 'a2',
    categoryId: 'advanced',
    prompt: 'How are Rajya Sabha members elected in India?',
    options: [
      'Direct public vote in each state',
      'Nominated by Lok Sabha Speaker',
      'Elected by elected MLAs using proportional representation by single transferable vote',
      'Selected by district magistrates',
    ],
    correctIndex: 2,
    explanation:
      'Rajya Sabha elections are indirect and use proportional representation via STV by state MLAs.',
  },
  {
    id: 'a3',
    categoryId: 'advanced',
    prompt: 'Who elects the President of India?',
    options: [
      'Only Members of Parliament',
      'Electoral college of elected MPs and elected MLAs',
      'Only Chief Ministers',
      'Direct national popular vote',
    ],
    correctIndex: 1,
    explanation:
      'The President is elected by an electoral college consisting of elected MPs and elected MLAs.',
  },
  {
    id: 'a4',
    categoryId: 'advanced',
    prompt: 'What is a by-election?',
    options: [
      'Election held before budget session every year',
      'Election to fill a vacancy arising between general elections',
      'Election for only local bodies',
      'Election held after delimitation only',
    ],
    correctIndex: 1,
    explanation:
      'By-elections are conducted when a seat becomes vacant before the full-term election cycle.',
  },
  {
    id: 'a5',
    categoryId: 'advanced',
    prompt: 'What is the main purpose of the anti-defection law?',
    options: [
      'Limit campaign advertising',
      'Prevent elected members from switching parties for political gain',
      'Mandate coalition governments',
      'Ban independent candidates',
    ],
    correctIndex: 1,
    explanation:
      'The anti-defection framework discourages opportunistic party switching by elected representatives.',
  },
  {
    id: 'a6',
    categoryId: 'advanced',
    prompt: 'What is delimitation?',
    options: [
      'Counting postal ballots separately',
      'Redrawing constituency boundaries based on population and legal criteria',
      'Setting party spending limits',
      'Verification of candidate affidavits',
    ],
    correctIndex: 1,
    explanation:
      'Delimitation reorganizes constituency boundaries to maintain fair representation.',
  },
  {
    id: 'a7',
    categoryId: 'advanced',
    prompt: 'Reserved constituencies in India are primarily intended to:',
    options: [
      'Reserve seats for senior politicians',
      'Ensure representation of SC/ST communities',
      'Allocate seats to coalition partners',
      'Guarantee gender parity in all seats',
    ],
    correctIndex: 1,
    explanation:
      'Reserved constituencies ensure political representation for Scheduled Castes and Scheduled Tribes.',
  },
  {
    id: 'a8',
    categoryId: 'advanced',
    prompt: 'Which statement best describes proportional representation (PR)?',
    options: [
      'One winner per constituency always',
      'Seats are distributed in proportion to votes received',
      'Only independent candidates can win',
      'Voters cast no ballots directly',
    ],
    correctIndex: 1,
    explanation: 'PR systems aim to align seat share more closely with vote share.',
  },
  {
    id: 'a9',
    categoryId: 'advanced',
    prompt: 'Postal ballots are generally used for:',
    options: [
      'Only party workers',
      'Only candidates in national elections',
      'Eligible voters who cannot vote in person under prescribed rules',
      'All voters by default',
    ],
    correctIndex: 2,
    explanation:
      'Postal ballots are available to specific eligible groups under election regulations.',
  },
  {
    id: 'a10',
    categoryId: 'advanced',
    prompt: 'A key criticism of FPTP compared to PR is that FPTP can:',
    options: [
      'Produce no winners',
      'Overrepresent parties with concentrated support',
      'Prevent all coalition governments',
      'Require mandatory reruns',
    ],
    correctIndex: 1,
    explanation:
      'FPTP can convert vote share into seat share unevenly, especially with fragmented opposition votes.',
  },
];

export const ALL_NON_CHALLENGE_QUESTIONS: QuizQuestionData[] = [
  ...BEGINNER_QUESTIONS,
  ...INTERMEDIATE_QUESTIONS,
  ...ADVANCED_QUESTIONS,
];
