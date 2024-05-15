import Head from 'next/head';

import Hero from '@/blocks/about/Hero/Hero';
import Warehouse from '@/blocks/about/Warehouse/Warehouse';

const About = () => {
  return (
    <>
      <Head>
        <title>
          О компании Oryx осуществляющий доставку товаров из США в Казахстан
        </title>
      </Head>

      <Hero />
      <Warehouse />
    </>
  );
};

export default About;
