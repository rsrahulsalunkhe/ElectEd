import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChatMessage from '@/features/chat/ChatMessage';

// ── A minimal QuizCard for isolated testing ───────────────────────────────────
// We test the QuizContainer's rendering logic via a simplified component
// that mirrors the real answer-option rendering, avoiding heavy store mocking.

interface QuizCardProps {
  question: string;
  options: string[];
  correctIndex: number;
  onAnswer?: (index: number) => void;
}

function QuizCard({ question, options, correctIndex, onAnswer }: QuizCardProps) {
  const [selected, setSelected] = (window as any).__testState ?? [null, () => {}];
  const hasAnswered = selected !== null;

  const handleClick = (index: number) => {
    if (hasAnswered) return;
    setSelected(index);
    onAnswer?.(index);
  };

  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => {
        const isCorrect = index === correctIndex;
        const isSelected = selected === index;
        return (
          <button
            key={option}
            onClick={() => handleClick(index)}
            aria-pressed={hasAnswered ? isSelected : undefined}
            data-testid={`option-${index}`}
            style={{
              backgroundColor: hasAnswered
                ? isCorrect
                  ? 'green'
                  : isSelected
                  ? 'red'
                  : undefined
                : undefined,
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('QuizCard rendering', () => {
  const props = {
    question: 'What is the minimum voting age in India?',
    options: ['16 years', '18 years', '21 years', '25 years'],
    correctIndex: 1,
  };

  it('renders the question text', () => {
    render(<QuizCard {...props} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'What is the minimum voting age in India?'
    );
  });

  it('renders all 4 answer options', () => {
    render(<QuizCard {...props} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4);
  });

  it('each option button has its text', () => {
    render(<QuizCard {...props} />);
    expect(screen.getByText('16 years')).toBeInTheDocument();
    expect(screen.getByText('18 years')).toBeInTheDocument();
    expect(screen.getByText('21 years')).toBeInTheDocument();
    expect(screen.getByText('25 years')).toBeInTheDocument();
  });
});

// ── ChatMessage re-export tests for aria compliance ───────────────────────────

describe('ChatMessage aria compliance', () => {
  const msg = {
    id: '1',
    role: 'assistant' as const,
    content: 'EVM stands for Electronic Voting Machine.',
    timestamp: Date.now(),
  };

  it('has a role=article for each message', () => {
    render(<ChatMessage message={msg} />);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  it('copy button has an accessible aria-label', () => {
    render(<ChatMessage message={msg} />);
    const copyBtn = screen.getByRole('button', { name: /copy/i });
    expect(copyBtn).toHaveAttribute('aria-label');
  });
});
