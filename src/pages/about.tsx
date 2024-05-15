import Head from 'next/head';

import Hero from '@/blocks/about/Hero/Hero';

const About = () => {
  return (
    <>
      <Head>
        <title>
          О компании Oryx осуществляющий доставку товаров из США в Казахстан
        </title>
      </Head>

      <Hero />
    </>
  );
};

export default About;
