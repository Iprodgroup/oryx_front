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
  {/* Добавляем новую разметку для AboutPage */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "О компании Oryx",
        description:
          "Компания Oryx занимается доставкой товаров из США в Казахстан. Мы обеспечиваем оперативную доставку за 10 дней.",
        url: "https://oryx.kz/o-kompanii",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://oryx.kz/o-kompanii",
        },
        author: {
          "@type": "Organization",
          name: "Oryx",
          url: "https://oryx.kz",
          logo: "https://oryx.kz/logo.svg",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+7 747 515 56 13",
              contactType: "customer service",
              areaServed: "KZ",
              availableLanguage: "Russian",
            },
            {
              "@type": "ContactPoint",
              telephone: "+7 700 323 22 22",
              contactType: "customer service",
              areaServed: "KZ",
              availableLanguage: "Russian",
            },
          ],
          address: {
            "@type": "PostalAddress",
            addressCountry: "KZ",
            addressLocality: "Алматы",
            streetAddress:
              "улица Шевченко 118, БЦ Алтын Гасыр, кабинет 133",
          },
          sameAs: [
            "https://www.instagram.com/oryx.usa.kz/",
          ],
        },
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
