import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Generate a random UUID-like string */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/** Format a timestamp to HH:MM */
export function formatTime(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

/** Capitalize first letter */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Clamp a number between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Debounce a function */
export function debounce<T extends (...args: unknown[]) => void>(fn: T, ms: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  }) as T;
}

/** Scroll to top of page */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Get phase color for timeline */
export function getPhaseColor(phase: string): string {
  const map: Record<string, string> = {
    preparation: 'bg-blue-100 text-blue-700',
    nomination: 'bg-purple-100 text-purple-700',
    campaign: 'bg-orange-100 text-orange-700',
    voting: 'bg-green-100 text-green-700',
    results: 'bg-navy-100 text-navy',
  };
  return map[phase] ?? 'bg-slate-100 text-slate-700';
}

/** Get difficulty badge style */
export function getDifficultyStyle(difficulty: string): string {
  const map: Record<string, string> = {
    easy: 'bg-success-light text-success-dark',
    medium: 'bg-orange-100 text-orange-700',
    hard: 'bg-red-100 text-red-700',
  };
  return map[difficulty] ?? 'bg-slate-100 text-slate-600';
}

/** Truncate text */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '…';
}
