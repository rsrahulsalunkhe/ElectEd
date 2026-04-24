import { useRef, type KeyboardEvent } from 'react';
import { Send } from 'lucide-react';
import { useChatStore } from '@/store';
import { cn } from '@/lib/utils';

export default function ChatInput() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { inputDraft, setInputDraft, sendMessage, isLoading } = useChatStore();

  const handleSend = async () => {
    const content = inputDraft.trim();
    if (!content || isLoading) return;

    await sendMessage(content);
    textareaRef.current?.focus();
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      await handleSend();
    }
  };

  return (
    <div className="flex items-end gap-3">
      <div className="flex-1">
        <label htmlFor="chat-input" className="sr-only">
          Type your election question
        </label>
        <textarea
          id="chat-input"
          ref={textareaRef}
          value={inputDraft}
          onChange={(event) => setInputDraft(event.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          disabled={isLoading}
          placeholder="Type your election question..."
          className={cn(
            'input-base resize-none min-h-[48px] max-h-36 overflow-y-auto',
            'disabled:opacity-60 disabled:cursor-not-allowed'
          )}
          aria-label="Message input"
          onInput={(event) => {
            const element = event.currentTarget;
            element.style.height = 'auto';
            element.style.height = `${Math.min(element.scrollHeight, 144)}px`;
          }}
        />
      </div>

      <button
        type="button"
        onClick={handleSend}
        disabled={!inputDraft.trim() || isLoading}
        className={cn(
          'h-12 px-4 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange',
          inputDraft.trim() && !isLoading
            ? 'bg-orange text-white hover:bg-orange-600'
            : 'bg-slate-200 text-slate-500 cursor-not-allowed'
        )}
        aria-label="Send message"
      >
        <Send className="w-4 h-4" aria-hidden="true" />
        Send
      </button>
    </div>
  );
}
