import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard on first load
    router.replace('/dashboard');
  }, [router]);

  return null;
}
