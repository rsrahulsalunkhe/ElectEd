import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@/lib/i18n'; // Initialize i18n before rendering
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    {/* Suspense is required by react-i18next for async translation loading */}
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </StrictMode>
);
