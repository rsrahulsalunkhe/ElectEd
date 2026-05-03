import { describe, it, expect, beforeEach } from 'vitest';

// ── Inline store logic extracted for pure unit testing ───────────────────────

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

const WELCOME: Message = {
  id: 'welcome',
  role: 'assistant',
  content: 'Hello. I am ElectEd...',
  timestamp: 0,
};

function makeStore() {
  let messages: Message[] = [{ ...WELCOME }];
  let isLoading = false;

  return {
    getMessages: () => messages,
    getIsLoading: () => isLoading,

    addMessage(msg: Message) {
      messages = [...messages, msg];
    },

    startLoading() {
      isLoading = true;
    },
    stopLoading() {
      isLoading = false;
    },

    clearChat() {
      messages = [{ ...WELCOME }];
      isLoading = false;
    },
  };
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('chat store logic', () => {
  let store: ReturnType<typeof makeStore>;

  beforeEach(() => {
    store = makeStore();
  });

  it('initialises with the welcome message', () => {
    expect(store.getMessages()).toHaveLength(1);
    expect(store.getMessages()[0]!.id).toBe('welcome');
  });

  it('addMessage appends to the messages array', () => {
    store.addMessage({ id: '1', role: 'user', content: 'Hi', timestamp: Date.now() });
    expect(store.getMessages()).toHaveLength(2);
    expect(store.getMessages()[1]!.content).toBe('Hi');
  });

  it('addMessage preserves previous messages', () => {
    store.addMessage({ id: '1', role: 'user', content: 'A', timestamp: 1 });
    store.addMessage({ id: '2', role: 'assistant', content: 'B', timestamp: 2 });
    expect(store.getMessages()).toHaveLength(3);
  });

  it('clearChat resets to just the welcome message', () => {
    store.addMessage({ id: '1', role: 'user', content: 'Q', timestamp: 1 });
    store.clearChat();
    expect(store.getMessages()).toHaveLength(1);
    expect(store.getMessages()[0]!.id).toBe('welcome');
  });

  it('isLoading toggles correctly', () => {
    expect(store.getIsLoading()).toBe(false);
    store.startLoading();
    expect(store.getIsLoading()).toBe(true);
    store.stopLoading();
    expect(store.getIsLoading()).toBe(false);
  });

  it('clearChat also resets isLoading', () => {
    store.startLoading();
    store.clearChat();
    expect(store.getIsLoading()).toBe(false);
  });
});
