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

        <link rel="alternate" href="https://oryx.kz" hrefLang="x-default" />
        <link rel="alternate" href="https://oryx.kz" hrefLang="en-ru" />

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
        {/* Yandex Metrica */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0];
              k.async=1;k.src=r;a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(98298866, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                ecommerce:"dataLayer"
              });
            `,
          }}
        />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZJV3C4K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PZJV3C4K');
            `,
          }}
        />

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
