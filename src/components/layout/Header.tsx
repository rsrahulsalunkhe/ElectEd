import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Vote } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import LanguageSelector from './LanguageSelector';
import AuthButton from '@/components/auth/AuthButton';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150',
      'hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange',
      isActive ? 'text-orange' : 'text-slate-100 hover:text-white'
    );

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-nav" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded-lg"
            aria-label="ElectEd – Home"
          >
            <div className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-150">
              <Vote className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Elect<span className="text-orange">Ed</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.filter((n) => n.path !== '/').map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navLinkClass}
                aria-label={item.description}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop: Language selector + Auth button */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSelector />
            <AuthButton />
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="text-white p-2 rounded-lg hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange transition-colors"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-navy-700 bg-navy-800 animate-fade-in"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150',
                    isActive
                      ? 'bg-orange text-white'
                      : 'text-slate-200 hover:bg-navy-700 hover:text-white'
                  )
                }
                aria-current={undefined}
              >
                {item.label}
              </NavLink>
            ))}

            {/* Auth button in mobile menu */}
            <div className="pt-2 border-t border-navy-700 mt-1">
              <AuthButton />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
