import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppState } from '@/types';

interface AppStore extends AppState {
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setCurrentRoute: (route: string) => void;
  announce: (text: string) => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      theme: 'light',
      sidebarOpen: false,
      currentRoute: '/',
      announceText: '',

      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
      setCurrentRoute: (route) => set({ currentRoute: route }),
      announce: (text) => set({ announceText: text }),
    }),
    { name: 'elected-app-state', partialize: (s) => ({ theme: s.theme }) }
  )
);
