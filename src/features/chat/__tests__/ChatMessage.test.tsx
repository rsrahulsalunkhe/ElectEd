import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ChatMessage from '@/features/chat/ChatMessage';

const userMessage = {
  id: '1',
  role: 'user' as const,
  content: 'What is EVM?',
  timestamp: new Date('2024-01-01T10:00:00').getTime(),
};

const assistantMessage = {
  id: '2',
  role: 'assistant' as const,
  content: 'EVM stands for Electronic Voting Machine.',
  timestamp: new Date('2024-01-01T10:00:05').getTime(),
};

describe('ChatMessage', () => {
  it('renders user message content', () => {
    render(<ChatMessage message={userMessage} />);
    expect(screen.getByText('What is EVM?')).toBeInTheDocument();
  });

  it('renders assistant message content', () => {
    render(<ChatMessage message={assistantMessage} />);
    expect(screen.getByText('EVM stands for Electronic Voting Machine.')).toBeInTheDocument();
  });

  it('user message wrapper has justify-end flex class', () => {
    render(<ChatMessage message={userMessage} />);
    const article = screen.getByRole('article');
    expect(article).toHaveClass('justify-end');
  });

  it('assistant message wrapper has justify-start flex class', () => {
    render(<ChatMessage message={assistantMessage} />);
    const article = screen.getByRole('article');
    expect(article).toHaveClass('justify-start');
  });

  it('renders a time element with the timestamp', () => {
    render(<ChatMessage message={assistantMessage} />);
    const timeEl = screen.getByRole('time');
    expect(timeEl).toBeInTheDocument();
  });

  it('shows copy button for assistant messages', () => {
    render(<ChatMessage message={assistantMessage} />);
    expect(screen.getByRole('button', { name: /copy/i })).toBeInTheDocument();
  });

  it('does not show copy button for user messages', () => {
    render(<ChatMessage message={userMessage} />);
    expect(screen.queryByRole('button', { name: /copy/i })).not.toBeInTheDocument();
  });
});
