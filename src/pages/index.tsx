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
          content="Доставка одежды и товаров из США в Казахстан от компании ORYX. ✈ Доставим товары из интернет-магазинов Америки недорого. Гарантия сохранности товаров. ✔"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Доставка товаров из США в Казахстан - ORYX"
        />
        <meta
          property="og:description"
          content="Доставка одежды и товаров из США в Казахстан от компании ORYX. ✈ Доставим товары из интернет-магазинов Америки недорого. Гарантия сохранности товаров. ✔"
        />
        <meta property="og:url" content="https://oryx.kz/" />
        <meta
          property="og:site_name"
          content="Доставка товаров из США в Казахстан - ORYX"
        />
        <meta property="og:image" content="https://oryx.kz/logo.svg" />
        <link rel="canonical" href="https://oryx.kz/" />

        {/* Breadcrumb structured data */}
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

        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org/",
              "@type": "LocalBusiness",
              name: "Oryx",
              image: "https://oryx.kz/logo.svg",
              telephone: "+7 700 323 22 22",
              url: "https://oryx.kz",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Республика Казахстан, г.Алматы, улица Шевченко 118, БЦ Алтын Гасыр, кабинет 133",
                addressLocality: "Алматы",
                addressRegion: "Алматинская область",
                addressCountry: "Kazakhstan",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [],
                  opens: "",
                  closes: "",
                },
              ],
            }),
          }}
        />
      </Head>

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
