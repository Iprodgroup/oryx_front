import '@/styles/globals.css';
import '@/styles/reset.css';
import 'react-modern-drawer/dist/index.css';

import type { AppProps } from 'next/app';

import Layout from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
