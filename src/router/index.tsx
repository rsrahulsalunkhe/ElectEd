import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';
import RootLayout from '@/components/layout/RootLayout';
import Spinner from '@/components/ui/Spinner';

// ─── Lazy-loaded pages ────────────────────────────────────────────
const HomePage = lazy(() => import('@/pages/HomePage'));
const ChatPage = lazy(() => import('@/pages/ChatPage'));
const TimelinePage = lazy(() => import('@/pages/TimelinePage'));
const StepsPage = lazy(() => import('@/pages/StepsPage'));
const QuizPage = lazy(() => import('@/pages/QuizPage'));
const GlossaryPage = lazy(() => import('@/pages/GlossaryPage'));
const ComparePage = lazy(() => import('@/pages/ComparePage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const PageLoader = () => (
  <div
    className="flex items-center justify-center min-h-[60vh]"
    role="status"
    aria-label="Loading page"
  >
    <Spinner size="lg" />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <RootLayout />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'chat',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ChatPage />
          </Suspense>
        ),
      },
      {
        path: 'timeline',
        element: (
          <Suspense fallback={<PageLoader />}>
            <TimelinePage />
          </Suspense>
        ),
      },
      {
        path: 'steps',
        element: (
          <Suspense fallback={<PageLoader />}>
            <StepsPage />
          </Suspense>
        ),
      },
      {
        path: 'quiz',
        element: (
          <Suspense fallback={<PageLoader />}>
            <QuizPage />
          </Suspense>
        ),
      },
      {
        path: 'glossary',
        element: (
          <Suspense fallback={<PageLoader />}>
            <GlossaryPage />
          </Suspense>
        ),
      },
      {
        path: 'compare',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ComparePage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
