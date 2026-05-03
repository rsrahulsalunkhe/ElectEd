import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ChatMessage, ChatState } from '@/types';
import { generateId } from '@/lib/utils';
import { sendChatMessage } from '@/lib/api';

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hello. I am ElectEd, your non-partisan election education assistant. Ask me about voting, election timelines, registration, systems, and results. What would you like to learn first?",
  timestamp: Date.now(),
};

interface ChatStore extends ChatState {
  inputDraft: string;
  activeCategoryId: string | null;
  sendMessage: (content: string) => Promise<void>;
  setInputDraft: (value: string) => void;
  setActiveCategory: (categoryId: string | null) => void;
  sendSuggestedQuestion: (categoryId: string, question: string) => Promise<void>;
  clearHistory: () => void;
}

export const useChatStore = create<ChatStore>()(
  persist(
    (set, get) => ({
      messages: [WELCOME_MESSAGE],
      isLoading: false,
      error: null,
      inputDraft: '',
      activeCategoryId: null,

      sendMessage: async (content: string) => {
        const trimmed = content.trim();
        if (!trimmed || get().isLoading) return;

        const userMessage: ChatMessage = {
          id: generateId(),
          role: 'user',
          content: trimmed,
          timestamp: Date.now(),
        };

        set((state) => ({
          messages: [...state.messages, userMessage],
          isLoading: true,
          error: null,
          inputDraft: '',
        }));

        try {
          const reply = await sendChatMessage(trimmed, get().messages);
          const assistantMessage: ChatMessage = {
            id: generateId(),
            role: 'assistant',
            content: reply,
            timestamp: Date.now(),
          };

          set((state) => ({
            messages: [...state.messages, assistantMessage],
            isLoading: false,
            error: null,
          }));
        } catch (error) {
          const message =
            error instanceof Error
              ? error.message
              : 'Something went wrong while contacting the assistant.';

          set((state) => ({
            isLoading: false,
            error: message,
            messages: [
              ...state.messages,
              {
                id: generateId(),
                role: 'assistant',
                content:
                  'I could not fetch a response right now. Please check your API key and try again.',
                timestamp: Date.now(),
              },
            ],
          }));
        }
      },

      setInputDraft: (value: string) => set({ inputDraft: value }),

      setActiveCategory: (categoryId: string | null) =>
        set({
          activeCategoryId: categoryId,
        }),

      sendSuggestedQuestion: async (categoryId: string, question: string) => {
        set({
          activeCategoryId: categoryId,
          inputDraft: question,
        });

        await get().sendMessage(question);
      },

      clearHistory: () =>
        set({
          messages: [WELCOME_MESSAGE],
          isLoading: false,
          error: null,
          inputDraft: '',
          activeCategoryId: null,
        }),
    }),
    {
      name: 'elected-chat-state',
      partialize: (state) => ({
        messages: state.messages,
        activeCategoryId: state.activeCategoryId,
      }),
    }
  )
);
