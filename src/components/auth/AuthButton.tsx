import { useEffect, useRef, useState } from 'react';
import { LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { cn } from '@/lib/utils';

export default function AuthButton() {
  const { user, isLoading, signInWithGoogle, signOut } = useAuthStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (isLoading) return null;

  if (!user) {
    return (
      <button
        onClick={() => void signInWithGoogle()}
        className={cn(
          'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors',
          'bg-orange text-white hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange'
        )}
        aria-label="Sign in with Google to save progress"
      >
        <LogIn className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline">Sign in</span>
      </button>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setDropdownOpen((o) => !o)}
        className="flex items-center gap-2 p-1 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
        aria-label="Account menu"
        aria-expanded={dropdownOpen}
        aria-haspopup="menu"
      >
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName ?? 'User avatar'}
            className="w-7 h-7 rounded-full border-2 border-orange"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-7 h-7 rounded-full bg-orange flex items-center justify-center">
            <UserIcon className="w-4 h-4 text-white" aria-hidden="true" />
          </div>
        )}
      </button>

      {dropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-52 bg-white rounded-xl border border-slate-200 shadow-lg py-1 z-50"
          role="menu"
          aria-label="Account options"
        >
          <div className="px-3 py-2.5 border-b border-slate-100">
            <p className="text-sm font-semibold text-navy truncate">{user.displayName}</p>
            <p className="text-xs text-slate-500 truncate">{user.email}</p>
          </div>
          <button
            role="menuitem"
            onClick={() => void signOut().then(() => setDropdownOpen(false))}
            className="w-full text-left px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition-colors"
          >
            <LogOut className="w-4 h-4 text-slate-500" aria-hidden="true" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
