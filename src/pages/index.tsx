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
        <meta
          name="description"
          content="Доставка одежды и товаров из США в Казахстан  от компании ORYX. ✈ Доставим товары из интернет-магазинов Америки недорого. Гарантия сохранности товаров. ✔"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Главная",
                  item: "https://oryx.kz",
                },
              ],
            }),
          }}
        />
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
