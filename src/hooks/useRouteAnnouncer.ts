import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppStore } from '@/store';

/**
 * Announces route changes to screen readers via aria-live region.
 * Also moves focus to the page heading on navigation.
 */
export function useRouteAnnouncer() {
  const location = useLocation();
  const { announce } = useAppStore();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      prevPath.current = location.pathname;
      // Announce to screen reader
      const routeLabel = location.pathname === '/' ? 'Home' : location.pathname.slice(1);
      announce(`Navigated to ${routeLabel} page`);

      // Move focus to main heading after navigation
      const timeout = setTimeout(() => {
        const heading = document.querySelector<HTMLElement>('#main-content h1');
        if (heading) {
          heading.setAttribute('tabindex', '-1');
          heading.focus();
          setTimeout(() => heading.removeAttribute('tabindex'), 1000);
        }
        announce('');
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [location.pathname, announce]);
}
