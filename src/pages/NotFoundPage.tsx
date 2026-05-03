import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-[120px] font-black text-navy/10 select-none leading-none" aria-hidden="true">
        404
      </div>
      <h1 className="text-3xl font-bold text-navy -mt-4 mb-3">Page Not Found</h1>
      <p className="text-slate-500 max-w-sm mb-8">
        The page you're looking for doesn't exist. It may have been moved or deleted.
      </p>
      <div className="flex gap-4">
        <Link to="/">
          <Button variant="primary" leftIcon={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
        </Link>
        <button onClick={() => window.history.back()}>
          <Button variant="secondary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Go Back
          </Button>
        </button>
      </div>
    </div>
  );
}
