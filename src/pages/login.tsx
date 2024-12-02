import { FormEvent } from "react";
import { createPortal } from "react-dom";
import styles from "@/styles/Login.module.sass";

import { useIsClient } from "usehooks-ts";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

import withAuthServerSide from "@/utils/withAuthServerSide";
import LockIcon from "@/components/icons/Lock";
import handleGoogle from "@/utils/handleGoogle";
import Head from "next/head";

export const getServerSideProps = withAuthServerSide("/profile")(async () => {
  return {
    props: {},
  };
});

const Login = () => {
  const isClient = useIsClient();
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loadingToastId = toast.loading("Загрузка...");

    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");

      await axios.post("/api/auth/login", {
        email,
        password,
      });

      router.push("/profile");
    } catch (error: any) {
      switch (error.response.status) {
        case 403:
          const { id } = error.response.data;

          await axios.post("/api/email/send-verification", { id }).then(() => {
            router.push({
              pathname: "/email/notif",
              query: { ...router.query, id },
            });
          });
          break;
        case 401:
          toast.error("Неверные учетные данные");
          break;
        default:
          toast.error("Ошибка при логине");
          break;
      }
    } finally {
      toast.dismiss(loadingToastId);
    }
  };

  return (
    <>
      <Head>
        <title>Авторизация - Oryx</title>
        <meta
          name="description"
          content="Войдите в личный кабинет Oryx для получения доступа к услугам доставки товаров из США в Казахстан. Удобный и безопасный процесс авторизации для клиентов компании Oryx."
        />
        <meta
          property="og:title"
          content="Авторизация - Oryx"
        />
        <meta
          property="og:description"
          content="Войдите в личный кабинет Oryx для получения доступа к услугам доставки товаров из США в Казахстан. Удобный и безопасный процесс авторизации для клиентов компании Oryx."
        />
        <meta property="og:url" content="https://oryx.kz/login" />
        <meta
          property="og:site_name"
          content="Авторизация - Oryx"
        />
        <meta property="og:image" content="https://oryx.kz/logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Авторизация - Oryx",
              description:
                "Войдите в личный кабинет Oryx для получения доступа к услугам доставки товаров из США в Казахстан. Удобный и безопасный процесс авторизации для клиентов компании Oryx.",
              url: "https://oryx.kz/login",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://oryx.kz/login",
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
        <link rel="canonical" href="https://oryx.kz/login" />
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2>ВОЙТИ В ЛИЧНЫЙ КАБИНЕТ</h2>
            <p>Чтобы войти введите ваш email и пароль</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Электронная почта"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                required
              />
              <button type="submit">Войти в мой кабинет</button>
            </form>
            <div className={styles.flx}>
              <Link href="/register">
                <LockIcon /> Зарегистрироваться
              </Link>
              <Link href="/password/reset">Забыли пароль</Link>
            </div>
          </div>
          <div className={styles.right}>
            {isClient &&
              createPortal(<div className="login"></div>, document.body)}
            <h2>ВОЙТИ ЧЕРЕЗ СОЦСЕТИ</h2>
            <p>Войдите с помощью вашего аккаунта социальной сети</p>
            <button onClick={() => handleGoogle(router)}>
              Войти через Google
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
