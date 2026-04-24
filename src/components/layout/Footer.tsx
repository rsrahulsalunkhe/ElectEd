import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Chat', path: '/chat' },
  { label: 'Timeline', path: '/timeline' },
  { label: 'Steps', path: '/steps' },
  { label: 'Quiz', path: '/quiz' },
  { label: 'Glossary', path: '/glossary' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate-200 mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-white font-bold text-2xl">
              Elect<span className="text-orange">Ed</span>
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Election learning made simple, interactive, and non-partisan.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Links</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {footerLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm text-slate-400">
              ElectEd is a non-partisan educational platform. We do not support any political party or candidate.
            </p>
            <p className="text-sm text-slate-400 mt-2">Data source: Election Commission of India</p>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-navy-700 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {year} ElectEd. All rights reserved.</p>
          <p>Built for civic education</p>
        </div>
      </div>
    </footer>
  );
}
