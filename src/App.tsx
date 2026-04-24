import { useEffect } from 'react';
import AppRouter from '@/router';
import { useAuthStore } from '@/store/authStore';

export default function App() {
  const { init } = useAuthStore();

  useEffect(() => {
    // Subscribe to Firebase Auth state and return the cleanup unsubscribe
    const unsubscribe = init();
    return unsubscribe;
  }, [init]);

  return <AppRouter />;
}
