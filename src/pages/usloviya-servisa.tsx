import Head from "next/head";

import Hero from "@/blocks/support/Hero/Hero";
import FAQ from "@/blocks/support/FAQ/FAQ";

const Support = () => {
  return (
    <>
      <Head>
        <title>
          Условия сервиса по доставке товаров из США в Казахстан - Oryx
        </title>
        <meta
          name="description"
          content="Узнайте условия сервиса компании Oryx по доставке товаров из США в Казахстан. Ознакомьтесь с правилами использования услуг, возвратами и гарантиями. Надежность и прозрачность для удобства клиентов."
        />
        <meta
          property="og:title"
          content="Условия сервиса по доставке товаров из США в Казахстан - Oryx"
        />
        <meta
          property="og:description"
          content="Узнайте условия сервиса компании Oryx по доставке товаров из США в Казахстан. Ознакомьтесь с правилами использования услуг, возвратами и гарантиями. Надежность и прозрачность для удобства клиентов."
        />
        <meta property="og:url" content="https://oryx.kz/usloviya-servisa" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Условия сервиса компании Oryx",
              description:
                "Узнайте условия сервиса компании Oryx по доставке товаров из США в Казахстан. Ознакомьтесь с правилами использования услуг, возвратами и гарантиями. Надежность и прозрачность для удобства клиентов.",
              url: "https://oryx.kz/usloviya-servisa",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://oryx.kz/usloviya-servisa",
              },
              inLanguage: "ru",
              provider: {
                "@type": "Organization",
                name: "Oryx",
                url: "https://oryx.kz",
                logo: "https://oryx.kz/logo.svg",
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+7 700 323 22 22",
                    contactType: "customer service",
                    areaServed: "KZ",
                    availableLanguage: ["Russian"],
                  },
                ],
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "KZ",
                  addressLocality: "Алматы",
                  streetAddress:
                    "улица Шевченко 118, БЦ Алтын Гасыр, кабинет 133",
                },
                sameAs: ["https://www.instagram.com/oryx.usa.kz/"],
              },
            }),
          }}
        />
      </Head>
      <link rel="canonical" href="https://oryx.kz/usloviya-servisa" />
      <Hero />
      <FAQ />
    </>
  );
};

export default Support;
