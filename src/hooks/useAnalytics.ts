import { getAnalytics, logEvent } from 'firebase/analytics';

export function useAnalytics() {
  const trackEvent = (name: string, params?: Record<string, unknown>) => {
    try {
      const analytics = getAnalytics();
      logEvent(analytics, name, params ?? {});
    } catch {
      // Analytics not initialized or not supported in this environment
    }
  };

  return { trackEvent };
}
