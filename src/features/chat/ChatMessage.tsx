import { useState } from 'react';
import { Bot, Copy, Check } from 'lucide-react';
import type { ChatMessage as ChatMessageType } from '@/types';
import { cn, formatTime } from '@/lib/utils';

interface Props {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === 'user';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (isUser) return;

    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className={cn('flex gap-3', isUser ? 'justify-end' : 'justify-start')}
      role="article"
      aria-label={`${isUser ? 'User message' : 'ElectEd assistant message'} at ${formatTime(
        message.timestamp
      )}`}
    >
      {!isUser && (
        <div
          className="w-9 h-9 rounded-full bg-orange flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}

      <div className={cn('max-w-[85%] flex flex-col gap-1', isUser ? 'items-end' : 'items-start')}>
        <div
          className={cn(
            'px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm',
            isUser
              ? 'bg-navy text-white rounded-br-sm'
              : 'bg-white text-slate-800 border border-slate-200 rounded-bl-sm'
          )}
        >
          {message.content}
        </div>

        <div className="flex items-center gap-2">
          <time
            className="text-xs text-slate-400"
            dateTime={new Date(message.timestamp).toISOString()}
            aria-label={`Sent at ${formatTime(message.timestamp)}`}
          >
            {formatTime(message.timestamp)}
          </time>

          {!isUser && (
            <button
              onClick={copyToClipboard}
              className="text-xs inline-flex items-center gap-1 text-slate-500 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy rounded px-1"
              aria-label="Copy assistant message"
              type="button"
            >
              {copied ? <Check className="w-3.5 h-3.5" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5" aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
