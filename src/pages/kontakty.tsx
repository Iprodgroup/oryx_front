import styles from "@/styles/Contacts.module.sass";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

const Contacts = () => {
  // Статичный контент для отображения без JavaScript
  const staticContent = (
    <>
      <h1>Контакты</h1>
      <p>Мы всегда рады вас видеть!</p>
      <ul>
        <li>
          <b>Адрес:</b>
          <p>
            Республика Казахстан, г.Алматы, улица Шевченко 118, БЦ Алтын Гасыр,
            кабинет 133
          </p>
        </li>
        <li>
          <b>Телефон:</b>
          <a href="tel:+77003232222">+7 700 323 22 22</a>
        </li>
        <li>
          <b>Email:</b>
          <a href="mailto:info@oryx.kz">info@oryx.kz</a>
        </li>
        <li>
          <b>Whatsapp</b>
          <a href="https://wa.me/77475155613" target="_blank">
            +7 747 515 5613
          </a>
        </li>
        <li>
          <b>Instagram</b>
          <a href="https://www.instagram.com/oryx.usa.kz/" target="_blank">
            @oryx.usa.kz
          </a>
        </li>
        <li>
          <b>Руководитель компании:</b>
          <strong>Бейсембаев Бауыржан</strong>
          <a href="mailto:b.beysembaev@oryx.kz">b.beysembaev@oryx.kz</a>
          <a href="tel:+77025917355">+7 702 591 73 55</a>
        </li>
      </ul>
    </>
  );

  // Динамичный контент, который появляется только после загрузки JS
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Этот код выполнится только на клиенте
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>
          Контакты компании Oryx. Доставка товаров из США в Казахстан
        </title>
        <meta
          name="description"
          content="Адрес: 📍 Республика Казахстан, г.Алматы, улица Шевченко 118, БЦ Алтын Гасыр, кабинет 133📍
        📱 Телефон: +7 700 323 22 22 📱
        📧 Email: info@oryx.kz
        📧 Whatsapp +7 747 515 5613"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Контакты компании Oryx. Доставка товаров из США в Казахстан"
        />
        <meta
          property="og:description"
          content="Адрес: 📍 Республика Казахстан, г.Алматы, улица Шевченко 118, БЦ Алтын Гасыр, кабинет 133📍
        📱 Телефон: +7 700 323 22 22 📱
        📧 Email: info@oryx.kz
        📧 Whatsapp +7 747 515 5613"
        />
        <meta property="og:url" content="https://oryx.kz/kontakty" />
        <meta
          property="og:site_name"
          content="Контакты компании Oryx. Доставка товаров из США в Казахстан"
        />
        <meta property="og:image" content="https://oryx.kz/logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "Контакты компании Oryx. Доставка товаров из США в Казахстан",
              description:
                "Адрес: 📍 Республика Казахстан, г.Алматы, улица Шевченко 118, БЦ Алтын Гасыр, кабинет 133📍 📱 Телефон: +7 700 323 22 22 📱 📧 Email: info@oryx.kz 📧 Whatsapp +7 747 515 5613",
              url: "https://oryx.kz//kontakty",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://oryx.kz/kontakty",
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
                sameAs: ["https://www.instagram.com/oryx.usa.kz/"],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Контакты компании Oryx",
              description:
                "Адрес: 📍 Республика Казахстан, г.Алматы, улица Шевченко 118, БЦ Алтын Гасыр, кабинет 133📍 Телефон: +7 700 323 22 22 📱 Email: info@oryx.kz 📧 Whatsapp: +7 747 515 5613",
              url: "https://oryx.kz/kontakty",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+7 700 323 22 22",
                  contactType: "customer service",
                  availableLanguage: "Russian",
                  areaServed: "KZ",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+7 747 515 56 13",
                  contactType: "customer service",
                  availableLanguage: "Russian",
                  areaServed: "KZ",
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
            }),
          }}
        />
      </Head>

      <section>
        <link rel="canonical" href="https://oryx.kz/kontakty" />
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
                color: "#706e6e",
              }}
            >
              <Link href="/" style={{ textDecoration: "underline" }}>
                Главная
              </Link>
              / Контакты
            </div>

            {/* Статичный контент для серверного рендера или при отключенном JS */}
            {staticContent}
          </div>

          <div className={styles.right}>
            {/* Карта и другие динамичные элементы */}
            {isClient && (
              <div
                style={{ position: "relative", overflow: "hidden" }}
                className={styles.map}
              >
                <iframe
                  src="https://yandex.uz/map-widget/v1/?ll=76.918402%2C43.253252&mode=search&oid=169157235939&ol=biz&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJ7gc8MIDw1j8RmdTQBmADxD8iBgABAgMEBSgKOABA31BIAWI9cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl90dXJrX2Zvcm11bGE9MS4wOmwzX3RyX2RjNTY5MjM3X2V4cGoCdXqdAc3MTD2gAQCoAQC9AaQmDTfCAQbjqbqnlXoVJ9W9BXNm1dXEl59q8e35%2F8D4GsRlnoNmRmlMeaAHRB%2F0Ahr1cH07V0wbh9AAViAmjzru9pWaDw%3D%3D&z=14.92"
                  frameBorder="0"
                  className={styles.map__iframe}
                  title="Контакты"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
