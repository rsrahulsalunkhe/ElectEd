import { useEffect, useCallback } from 'react';

interface UseKeyboardNavOptions {
  onLeft?: () => void;
  onRight?: () => void;
  onUp?: () => void;
  onDown?: () => void;
  onEnter?: () => void;
  onEscape?: () => void;
  enabled?: boolean;
}

/**
 * Attaches document-level keyboard navigation handlers.
 */
export function useKeyboardNav({
  onLeft,
  onRight,
  onUp,
  onDown,
  onEnter,
  onEscape,
  enabled = true,
}: UseKeyboardNavOptions) {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (!enabled) return;
      // Don't intercept when typing in an input
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      switch (e.key) {
        case 'ArrowLeft':
          onLeft?.();
          break;
        case 'ArrowRight':
          onRight?.();
          break;
        case 'ArrowUp':
          onUp?.();
          break;
        case 'ArrowDown':
          onDown?.();
          break;
        case 'Enter':
          onEnter?.();
          break;
        case 'Escape':
          onEscape?.();
          break;
      }
    },
    [enabled, onLeft, onRight, onUp, onDown, onEnter, onEscape]
  );

  useEffect(() => {
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [handler]);
}
