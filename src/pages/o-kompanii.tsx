import { useIsClient, useMediaQuery } from "usehooks-ts";
import Head from "next/head";

import Hero from "@/blocks/about/Hero/Hero";
import Warehouse from "@/blocks/about/Warehouse/Warehouse";
import Advantages from "@/blocks/about/Advantages/Advantages";
import Link from "next/link";
const About = () => {
  const isClient = useIsClient();
  const matches = {
    576: useMediaQuery("(min-width: 576px)"),
  };

  return (
    <>
      <Head>
        <title>
          О компании Oryx - Быстрая доставка товаров из США в Казахстан
        </title>
        <meta
          name="description"
          content="Информация о компании Oryx. Оперативная доставка товаров из США в Казахстан до 10 дней!"
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
                  item: "https://oryx.kz/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "О нас",
                  item: "https://oryx.kz/o-kompanii",
                },
              ],
            }),
          }}
        />
      </Head>
      <link rel="canonical" href="https://oryx.kz/o-kompanii" />
        
      <Hero />
      <Warehouse />
      {isClient && !matches[576] && <Advantages />}
    </>
  );
};

export default About;
