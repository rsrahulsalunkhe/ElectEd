import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GlossaryStore {
  bookmarkedTerms: string[];
  toggleBookmark: (term: string) => void;
  isBookmarked: (term: string) => boolean;
}

export const useGlossaryStore = create<GlossaryStore>()(
  persist(
    (set, get) => ({
      bookmarkedTerms: [],

      toggleBookmark: (term) =>
        set((state) => {
          const exists = state.bookmarkedTerms.includes(term);
          return {
            bookmarkedTerms: exists
              ? state.bookmarkedTerms.filter((t) => t !== term)
              : [...state.bookmarkedTerms, term],
          };
        }),

      isBookmarked: (term) => get().bookmarkedTerms.includes(term),
    }),
    { name: 'elected-glossary-state' }
  )
);
