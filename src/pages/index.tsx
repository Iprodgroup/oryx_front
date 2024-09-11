import Head from "next/head";

import Hero from "@/blocks/home/Hero/Hero";
import HowTo from "@/blocks/home/HowTo/HowTo";
import PopularStores from "@/blocks/home/PopularStores/PopularStores";
import Calculator from "@/blocks/home/Calculator/Calculator";
import FAQ from "@/blocks/home/FAQ/FAQ";
import Advantages from "@/blocks/home/Advantages/Advantages";
import About from "@/blocks/home/About/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Доставка товаров из США в Казахстан - ORYX</title>
      </Head>
      <link rel="canonical" href="https://oryx.kz/" />
      <Hero />
      <HowTo />
      <PopularStores />
      <Calculator />
      <FAQ />
      <Advantages />
      <About />
    </>
  );
}
