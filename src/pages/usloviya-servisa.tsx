import Head from 'next/head';

import Hero from '@/blocks/support/Hero/Hero';
import FAQ from '@/blocks/support/FAQ/FAQ';

const Support = () => {
  return (
    <>
      <Head>
        <title>
          Условия сервиса по доставке товаров из США в Казахстан - Oryx
        </title>
      </Head>

      <Hero />
      <FAQ />
    </>
  );
};

export default Support;