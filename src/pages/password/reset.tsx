import styles from "@/styles/PasswordReset.module.sass";
import Head from "next/head";

const PasswordReset = () => {
  return (
    <>
      <Head>
        <title>Восстановление пароля</title>
        <meta name="description" content="Восстановление пароля" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Восстановление пароля - Oryx",
              description:
                "Восстановление пароля для учетной записи на сайте компании Oryx. Следуйте простым шагам, чтобы получить доступ к своему профилю и продолжить пользоваться услугами доставки товаров из США в Казахстан.",
              url: "https://oryx.kz/password/reset",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://oryx.kz/password/reset",
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
        <div className={styles.wrapper}>
          <h2>СБРОСИТЬ ПАРОЛЬ</h2>
          <form>
            <input type="email" placeholder="Электронная почта" />
            <button type="submit">Отправить ссылку для сброса пароля</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default PasswordReset;
