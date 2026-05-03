import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div
        className="text-[120px] font-black text-navy/10 select-none leading-none"
        aria-hidden="true"
      >
        404
      </div>
      <h1 className="text-3xl font-bold text-navy -mt-4 mb-3">Page Not Found</h1>
      <p className="text-slate-500 max-w-sm mb-8">
        The page you're looking for doesn't exist. It may have been moved or deleted.
      </p>
      <div className="flex gap-4">
        <Button 
          variant="primary" 
          leftIcon={<Home className="w-4 h-4" />}
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
        <Button 
          variant="secondary" 
          leftIcon={<ArrowLeft className="w-4 h-4" />}
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}
