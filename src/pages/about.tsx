import { useIsClient, useMediaQuery } from 'usehooks-ts';
import Head from 'next/head';

import Hero from '@/blocks/about/Hero/Hero';
import Warehouse from '@/blocks/about/Warehouse/Warehouse';
import Advantages from '@/blocks/about/Advantages/Advantages';

const About = () => {
  const isClient = useIsClient();
  const matches = {
    576: useMediaQuery('(min-width: 576px)'),
  };

  return (
    <>
      <Head>
        <title>
          О компании Oryx осуществляющий доставку товаров из США в Казахстан
        </title>
      </Head>

      <Hero />
      <Warehouse />
      {isClient && !matches[576] && <Advantages />}
    </>
  );
};

export default About;
