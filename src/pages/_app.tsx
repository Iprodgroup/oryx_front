import '@/styles/globals.css';
import '@/styles/reset.css';
import 'react-modern-drawer/dist/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-responsive-modal/styles.css';

import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { Toaster } from 'react-hot-toast';
import NextTopLoader from 'nextjs-toploader';

import Layout from '@/components/layout';
import FixedBox from '@/components/Fixedbox/Fixedbox';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig>
      <Layout>
        <NextTopLoader color='#E84438' height={2} showSpinner={false} />
        <Toaster />
        <FixedBox />
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
