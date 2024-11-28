import styles from "@/styles/Prohibited.module.sass";
import Head from "next/head";

const Prohibited = () => {
  return (
    <>
      <Head>
        <title>Запрещенные к авиаперевозке грузы - Oryx</title>
        <meta
          name="description"
          content="Грузы, которые запрещены к транспортировке воздушным транспортом, включая взрывоопасные, радиоактивные, горючие, инфекционные, ядовитые вещества, препараты, растения, оружие и другие опасные или запрещенные предметы"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Запрещенные к авиаперевозке грузы - Oryx"
        />
        <meta
          property="og:description"
          content="Грузы, которые запрещены к транспортировке воздушным транспортом, включая взрывоопасные, радиоактивные, горючие, инфекционные, ядовитые вещества, препараты, растения, оружие и другие опасные или запрещенные предметы"
        />
        <meta property="og:url" content="https://oryx.kz/prohibited" />
        <meta
          property="og:site_name"
          content="Запрещенные к авиаперевозке грузы - Oryx"
        />
        <meta property="og:image" content="https://oryx.kz/logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Запрещенные товары - Oryx",
              description:
                "Список запрещенных товаров и услуг для доставки через компанию Oryx. Ознакомьтесь с перечнем товаров, которые не подлежат транспортировке из США в Казахстан.",
              url: "https://oryx.kz/prohibited",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://oryx.kz/prohibited",
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
      <section>
        <link rel="canonical" href="https://oryx.kz/prohibited" />
        <div className={styles.wrapper}>
          <h1>Перечень запрещенных к авиаперевозке грузов</h1>
          <div className={styles.body}>
            <strong>Запрещены к авиаперевозке:</strong>
            <div className={styles.list}>
              <div style={{ maxWidth: "350px" }}>
                <p>
                  Взрывоопасные, радиоактивные, горючие, инфекционные, ядовитые,
                  опасные грузы, термометры, ртутные барометры и пр.
                </p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>
                  Медицинские препараты, вакцины, лекарства (поскольку требуются
                  соответствующие документы и определенный температурный режим);
                </p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Растения и цветы;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>
                  Оружие, включая макеты и пневматику, арбалеты, ножи и другое
                  холодное оружие;
                </p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Скоропортящиеся продукты;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Грузы, нуждающиеся в особом температурном режиме;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>
                  Другие грузы, запрещенные к транспортировке воздушным
                  транспортом и способные принести при транспортировке вред;
                </p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Любые животные, включая аквариумных рыбок;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Реагенты, химикаты, тест-пробы;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Клей;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Хрупкие грузы;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>
                  Коррозионные, хозяйственные, спиртосодержащие и прочие горючие
                  жидкости, спирт, водка, отбеливающие материалы;
                </p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Люстры, светильники, лампы (за исключением светодиодных);</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Кондиционеры и холодильники (из-за фреона);</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>
                  Аэрозоли, одеколоны, духи, дезодоранты, баллоны под давлением;
                </p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>
                  Батарейки, UPS, источники бесперебойного питания,
                  аккумуляторы;
                </p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>
                  Ценные бумаги, деньги, драгоценные металлы, камни, а также
                  изделия из них;
                </p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>
                  Активные колонки, магнетроны, динамики и прочее оборудование,
                  в котором содержатся магниты, герконы, намагниченные предметы;
                </p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Масло, растворители, смазки;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Автомобили;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Лак, смола, краска;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Пиротехника, петарды;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Черная, красная и другая икра;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Контрафактные, а также контрабандные грузы;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Пчелы, пчелопакеты;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Анаболики, а также другие сильнодействующие препараты;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Аэрозоли и другие баллоны под давлением;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Спички, зажигалки;</p>
              </div>
              <div style={{ maxWidth: "350px" }}>
                <p>Чернила, некоторые виды ручек;</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prohibited;
