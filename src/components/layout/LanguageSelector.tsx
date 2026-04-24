import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা' },
  { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0]!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const changeLanguage = (code: string) => {
    void i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm transition-colors',
          'text-slate-100 hover:text-white hover:bg-white/10',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange'
        )}
        aria-label={`Language: ${currentLang.label}. Click to change.`}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline text-xs font-medium">{currentLang.native}</span>
      </button>

      {open && (
        <ul
          className="absolute right-0 mt-2 w-44 bg-white rounded-xl border border-slate-200 shadow-lg py-1 z-50"
          role="listbox"
          aria-label="Select language"
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code} role="option" aria-selected={lang.code === i18n.language}>
              <button
                onClick={() => changeLanguage(lang.code)}
                className={cn(
                  'w-full text-left px-3 py-2 text-sm flex items-center justify-between transition-colors',
                  lang.code === i18n.language
                    ? 'bg-navy/5 text-navy font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                )}
              >
                <span>{lang.native}</span>
                <span className="text-xs text-slate-400">{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
