import type { AppProps } from 'next/app';
import '@/index.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const hash = router.asPath.split('#')[1];

    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return;
    }

    window.scrollTo(0, 0);
  }, [router.asPath]);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Component {...pageProps} />
    </TooltipProvider>
  );
}

export default App;
