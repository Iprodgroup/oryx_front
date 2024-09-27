/* eslint-disable @next/next/next-script-for-ga */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="oryx" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="vp6g7rjn5equhL-Lf8Drs_xJAPsSb3ddlCuWnTSnLTg"
        />
        <meta name="yandex-verification" content="cf6f970418b0ab07" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Доставка товаров из США в Казахстан - ORYX"
        />
        <meta
          property="og:description"
          content="Надежная доставка посылок и товаров из США в Казахстан от компании ORYX. ✈ Услуги мейлфорвардера: удобный заказ, отслеживание и быстрая доставка посылок из США. 🚚"
        />
        <meta property="og:url" content="https://oryx.kz/" />
        <meta
          property="og:site_name"
          content="Доставка товаров из США в Казахстан - ORYX"
        />
        <meta property="og:image" content="https://oryx.kz/logo.svg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Доставка товаров из США в Казахстан - ORYX"
        />
        <meta
          name="twitter:description"
          content="Надежная доставка посылок и товаров из США в Казахстан от компании ORYX. ✈ Услуги мейлфорвардера: удобный заказ, отслеживание и быстрая доставка посылок из США. 🚚
"
        />
        <meta name="twitter:image" content="https://oryx.kz/logo.svg" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V467M4TDHR"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V467M4TDHR');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ORYX",
              url: "https://oryx.kz",
              logo: "https://oryx.kz/logo.svg",
              sameAs: ["https://www.instagram.com/oryx.usa.kz/"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+7-700-323-22-22",
                  contactType: "Customer Service",
                  areaServed: "KZ",
                  availableLanguage: "Russian",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+7-747-515-56-13",
                  contactType: "Customer Service",
                  areaServed: "KZ",
                  availableLanguage: "Russian",
                },
              ],
            }),
          }}
        />
        {/* <script
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
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Популярные магазины",
                  item: "https://oryx.kz/populyarnye-magaziny",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Купи вместо меня",
                  item: "https://oryx.kz/buy-me",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Контакты",
                  item: "https://oryx.kz/kontakty",
                },
              ],
            }),
          }}
        /> */}
        {/* Yandex Metrica */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (m, e, t, r, i, k, a) {
                m[i] =
                  m[i] ||
                  function () {
                    (m[i].a = m[i].a || []).push(arguments);
                  };
                m[i].l = Number(new Date()); // Explicitly convert Date to number
                for (let j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) {
                    return;
                  }
                }
                k = e.createElement(t);
                a = e.getElementsByTagName(t)[0];
                k.async = 1;
                k.src = r;
                a.parentNode.insertBefore(k, a);
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(98298866, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
                ecommerce: "dataLayer"
              });
            `,
          }}
        />
        {/* Yandex Metrica noscript */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/98298866"
              style={{ position: "absolute", left: "-9999px" }}
              alt="yandex_watch"
            />
          </div>
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
