import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useChatStore } from '@/store';
import { useAuthStore } from '@/store/authStore';
import { incrementChatCount } from '@/lib/firestore';
import { useAnalytics } from '@/hooks/useAnalytics';
import { SUGGESTED_QUESTION_CATEGORIES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

export default function ChatWindow() {
  const { messages, isLoading, error, activeCategoryId } = useChatStore();
  const { user } = useAuthStore();
  const { trackEvent } = useAnalytics();
  const bottomRef = useRef<HTMLDivElement>(null);
  const prevLengthRef = useRef(messages.length);

  const defaultOpen = useMemo(
    () => Object.fromEntries(SUGGESTED_QUESTION_CATEGORIES.map((category) => [category.id, true])),
    []
  );
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(defaultOpen);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Fire analytics + Firestore whenever a new user message is added
  useEffect(() => {
    const last = messages[messages.length - 1];
    if (messages.length > prevLengthRef.current && last?.role === 'user') {
      trackEvent('chat_message_sent', { questionCategory: activeCategoryId ?? 'direct' });
      if (user) {
        void incrementChatCount(user.uid);
      }
    }
    prevLengthRef.current = messages.length;
  }, [messages.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      className="h-full min-h-[calc(100vh-4rem)] bg-slate-50"
      aria-label="AI Election Assistant chat interface"
    >
      <div className="h-full max-w-7xl mx-auto p-3 md:p-4">
        <div className="h-full grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4">
          <aside className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-100">
              <h2 className="font-semibold text-navy">Suggested Questions</h2>
              <p className="text-xs text-slate-500 mt-1">Pick any question to send instantly.</p>
            </div>

            <div className="max-h-[30vh] lg:max-h-[calc(100vh-14rem)] overflow-y-auto p-2 space-y-2">
              {SUGGESTED_QUESTION_CATEGORIES.map((category) => (
                <CategorySection
                  key={category.id}
                  categoryId={category.id}
                  icon={category.icon}
                  title={category.label}
                  questions={category.questions}
                  expanded={expandedSections[category.id] ?? false}
                  active={activeCategoryId === category.id}
                  onToggle={() =>
                    setExpandedSections((prev) => ({
                      ...prev,
                      [category.id]: !prev[category.id],
                    }))
                  }
                />
              ))}
            </div>
          </aside>

          <div className="bg-slate-100 border border-slate-200 rounded-2xl flex flex-col min-h-[70vh]">
            <header className="px-4 py-3 border-b border-slate-200 bg-white rounded-t-2xl">
              <h1 className="text-lg font-bold text-navy">AI Election Assistant</h1>
              <p className="text-xs text-slate-500">
                Neutral, educational, and easy to understand election guidance.
              </p>
            </header>

            <div
              className="flex-1 overflow-y-auto px-4 py-5 space-y-4"
              role="log"
              aria-live="polite"
              aria-relevant="additions text"
              aria-label="Election assistant message thread"
            >
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {isLoading && <TypingIndicator />}

              {error && (
                <p
                  className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2"
                  role="alert"
                >
                  {error}
                </p>
              )}

              <div ref={bottomRef} aria-hidden="true" />
            </div>

            <footer className="p-4 border-t border-slate-200 bg-white rounded-b-2xl">
              <ChatInput />
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategorySection({
  categoryId,
  icon,
  title,
  questions,
  expanded,
  active,
  onToggle,
}: {
  categoryId: string;
  icon: string;
  title: string;
  questions: string[];
  expanded: boolean;
  active: boolean;
  onToggle: () => void;
}) {
  const { sendSuggestedQuestion, isLoading } = useChatStore();

  return (
    <div
      className={cn(
        'rounded-xl border transition-colors',
        active ? 'border-navy bg-navy-50' : 'border-slate-200 bg-white'
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-3 py-2.5 flex items-center justify-between text-left"
        aria-expanded={expanded}
        aria-controls={`category-${categoryId}`}
      >
        <span className="text-sm font-semibold text-slate-800 flex items-center gap-2">
          <span aria-hidden="true">{icon}</span>
          {title}
        </span>
        {expanded ? (
          <ChevronUp className="w-4 h-4 text-slate-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-slate-500" />
        )}
      </button>

      {expanded && (
        <ul id={`category-${categoryId}`} className="px-2 pb-2 space-y-1">
          {questions.map((question) => (
            <li key={question}>
              <button
                type="button"
                onClick={() => void sendSuggestedQuestion(categoryId, question)}
                disabled={isLoading}
                className={cn(
                  'w-full text-left px-2.5 py-2 rounded-lg text-sm transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy',
                  'disabled:opacity-60 disabled:cursor-not-allowed',
                  active ? 'text-navy hover:bg-white' : 'text-slate-700 hover:bg-slate-100'
                )}
                aria-label={`Send suggested question: ${question}`}
              >
                {question}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-3 justify-start" role="status" aria-label="ElectEd is typing">
      <div className="w-9 h-9 rounded-full bg-orange flex items-center justify-center flex-shrink-0 text-white text-xs font-semibold">
        AI
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3">
        <span className="flex items-center gap-1.5 h-5">
          <span className="typing-dot bg-slate-400" />
          <span className="typing-dot bg-slate-400" />
          <span className="typing-dot bg-slate-400" />
        </span>
      </div>
    </div>
  );
}
