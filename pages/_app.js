import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [activeFacility, setActiveFacility] = useState('LDH Main Plant');

  // Don't show layout on certain pages
  const noLayoutPages = [];
  const shouldShowLayout = !noLayoutPages.includes(router.pathname);

  return (
    <div className="app-wrapper">
      {shouldShowLayout && <TopBar facility={activeFacility} />}
      <div className="main-content">
        {shouldShowLayout && <Sidebar />}
        <div className="page-content">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
