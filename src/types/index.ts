// ─── AI Chat ──────────────────────────────────────────────────────
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
}

export interface SuggestedQuestionCategory {
  id: string;
  label: string;
  icon: string;
  questions: string[];
}

// ─── Timeline ─────────────────────────────────────────────────────
export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  phase: 'preparation' | 'nomination' | 'campaign' | 'voting' | 'results';
  isKeyDate?: boolean;
  icon?: string;
}

// ─── Quiz ─────────────────────────────────────────────────────────
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizResult {
  questionId: string;
  selectedIndex: number;
  isCorrect: boolean;
  timeSpent: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  questions: QuizQuestion[];
  results: QuizResult[];
  isComplete: boolean;
  score: number;
}

// ─── Glossary ─────────────────────────────────────────────────────
export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: 'process' | 'governance' | 'legal' | 'voting' | 'campaigning';
  relatedTerms?: string[];
  example?: string;
}

// ─── Voting Steps ─────────────────────────────────────────────────
export interface VotingStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  tips?: string[];
  icon: string;
  isRequired: boolean;
  estimatedTime?: string;
  documents?: string[];
}

// ─── Compare (Election Systems) ───────────────────────────────────
export interface ElectionSystem {
  id: string;
  country: string;
  flag: string;
  region: string;
  systemType: string;
  votingAge: number;
  registrationRequired: boolean;
  compulsoryVoting: boolean;
  electionFrequency: string;
  turnoutAvg: string;
  uniqueFeatures: string[];
}

// ─── App Global State ─────────────────────────────────────────────
export interface AppState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  currentRoute: string;
  announceText: string;
}

// ─── Navigation ───────────────────────────────────────────────────
export interface NavItem {
  label: string;
  path: string;
  icon: string;
  description?: string;
}

// ─── Auth / Firestore ─────────────────────────────────────────────
export interface UserProfile {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  createdAt: unknown;
  lastActive: unknown;
}

export interface UserProgress {
  completedSteps: string[];
  quizScores: Array<{ category: string; score: number; date: string }>;
  bookmarkedTerms: string[];
  chatCount: number;
}
