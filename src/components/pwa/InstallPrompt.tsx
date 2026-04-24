import { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPrompt() {
  const { t } = useTranslation();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem('elected-pwa-dismissed') === 'true'
  );

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('elected-pwa-dismissed', 'true');
  };

  if (!deferredPrompt || dismissed) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-navy text-white rounded-2xl shadow-xl p-4 flex items-center gap-3 z-40 animate-fade-in"
      role="dialog"
      aria-label={t('install_title')}
      aria-live="polite"
    >
      <div className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center flex-shrink-0">
        <Download className="w-5 h-5 text-white" aria-hidden="true" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm">{t('install_title')}</p>
        <p className="text-xs text-slate-300 mt-0.5">{t('install_subtitle')}</p>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={() => void handleInstall()}
          className="px-3 py-1.5 bg-orange rounded-lg text-xs font-semibold hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {t('install_button')}
        </button>
        <button
          onClick={handleDismiss}
          className="p-1.5 hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Dismiss install prompt"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
