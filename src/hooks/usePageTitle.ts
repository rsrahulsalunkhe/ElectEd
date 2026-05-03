import { useEffect } from 'react';

/**
 * Sets a unique document.title for each page and cleans up to the default on unmount.
 * @param title - The page-specific title segment, e.g. "Quiz"
 */
export function usePageTitle(title: string): void {
  useEffect(() => {
    document.title = `${title} — ElectEd`;
  }, [title]);
}
