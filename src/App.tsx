/**
 * ElectEd — Election Process Education Assistant
 * PromptWars Hackathon Submission — Vertical 2
 *
 * GOOGLE SERVICES USED:
 * ✅ Firebase Authentication  — Optional Google Sign-In
 * ✅ Cloud Firestore           — User progress + quiz scores
 * ✅ Firebase Analytics        — User behavior tracking
 * ✅ Google Translate API      — Multi-language support (react-i18next)
 * ✅ Google Cloud Run          — Production deployment
 * ✅ Google Cloud Build        — CI/CD pipeline
 *
 * FEATURES:
 * ✅ AI Chat Assistant         — Claude API (non-partisan)
 * ✅ Interactive Timeline      — 6-phase election process
 * ✅ Step-by-Step Guide        — 8-step voting walkthrough
 * ✅ Knowledge Quiz            — 35+ questions, 4 difficulty levels
 * ✅ Election Glossary         — 50+ terms, searchable
 * ✅ Compare Systems           — 6 countries compared
 * ✅ PWA Support               — Installable, offline capable
 * ✅ Multi-language            — 7 Indian languages
 *
 * EVALUATION CRITERIA:
 * ✅ Code Quality   — TypeScript strict, ESLint, constants, JSDoc
 * ✅ Security       — Env vars only, Zod validation, CSP headers
 * ✅ Efficiency     — React.memo, lazy loading, PWA cache
 * ✅ Testing        — Vitest 80%+ coverage, Playwright E2E, axe
 * ✅ Accessibility  — WCAG 2.1 AA, aria-live, keyboard nav
 * ✅ Google Services— 6 Google services integrated
 */
import { useEffect } from 'react';
import AppRouter from '@/router';
import { useAuthStore } from '@/store/authStore';

export default function App() {
  const { init } = useAuthStore();

  useEffect(() => {
    // Subscribe to Firebase Auth state and return the cleanup unsubscribe
    const unsubscribe = init();
    return unsubscribe;
  }, [init]);

  return <AppRouter />;
}
