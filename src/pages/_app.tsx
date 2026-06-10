import type { AppProps } from 'next/app';
import '../index.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
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
      <Head>
        <title>HexQuarter — Bitcoin & Nostr engineering</title>
        <meta name="description" content="We build software where Bitcoin serves as a foundation, with Nostr as the data fabric, and self-custody as the architecture default." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Toaster />
      <Sonner />
      <Component {...pageProps} />
    </TooltipProvider>
  );
}

export default App;
