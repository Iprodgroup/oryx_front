import Head from 'next/head';

import Hero from '@/blocks/home/Hero/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Доставка товаров из США в Казахстан - ORYX</title>
        <meta name='description' content='oryx' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />
    </>
  );
}
