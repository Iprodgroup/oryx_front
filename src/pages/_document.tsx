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
              alt=""
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
