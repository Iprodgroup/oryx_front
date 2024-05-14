import Head from 'next/head';

import Hero from '@/blocks/home/Hero/Hero';
import HowTo from '@/blocks/home/HowTo/HowTo';
import PopularStores from '@/blocks/home/PopularStores/PopularStores';
import Calculator from '@/blocks/home/Calculator/Calculator';
import FAQ from '@/blocks/home/FAQ/FAQ';
import Advantages from '@/blocks/home/Advantages/Advantages';

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
      <HowTo />
      <PopularStores />
      <Calculator />
      <FAQ />
      <Advantages />
    </>
  );
}
