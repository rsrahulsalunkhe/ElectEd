import { create } from 'zustand';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { ensureUserDoc } from '@/lib/firestore';

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  initialized: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  init: () => () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: true,
  error: null,
  initialized: false,

  signInWithGoogle: async () => {
    set({ isLoading: true, error: null });
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : 'Sign-in failed',
        isLoading: false,
      });
    }
  },

  signOut: async () => {
    await firebaseSignOut(auth);
    set({ user: null });
  },

  // Returns the unsubscribe function — call it on unmount to clean up the listener
  init: () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      set({ user, isLoading: false, initialized: true });
      if (user) {
        void ensureUserDoc(user);
      }
    });
    return unsubscribe;
  },
}));
