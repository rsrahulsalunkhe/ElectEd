import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SkipNav from './SkipNav';
import Header from './Header';
import Footer from './Footer';
import InstallPrompt from '@/components/pwa/InstallPrompt';
import { useRouteAnnouncer } from '@/hooks/useRouteAnnouncer';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useAppStore } from '@/store';

function PageViewTracker() {
  const location = useLocation();
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    trackEvent('page_view', {
      page_path: location.pathname,
      page_title: document.title,
    });
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}

export default function RootLayout() {
  useRouteAnnouncer();
  const { announceText } = useAppStore();

  return (
    <>
      {/* WCAG: Skip nav */}
      <SkipNav />

      {/* WCAG: Screen reader route announcer */}
      <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {announceText}
      </div>

      {/* Firebase Analytics page_view tracker */}
      <PageViewTracker />

      <Header />

      <main id="main-content" className="flex-1 outline-none" tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />

      {/* PWA install banner (shows only when browser fires beforeinstallprompt) */}
      <InstallPrompt />
    </>
  );
}
