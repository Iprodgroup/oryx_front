import styles from "@/styles/Store.module.sass";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Image from "next/image";
import { Store as IStore } from "@/types/store.interface";
import instance from "@/utils/axios";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const res = await instance.get(`/store/${query.slug}`);
    const store = res.data?.store || null;
    const meta = res.data?.meta || "";

    if (!store) {
      return { notFound: true };
    }

    return { props: { store, meta } };
  } catch (error) {
    console.error("Error fetching store data:", error);
    return { notFound: true };
  }
};

const Store = ({
  store,
  meta,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    if (!store) {
      console.error("Store data is missing");
    }
  }, [store]);

  if (!store) {
    return <div>Error loading store data</div>;
  }
  const seoFunc = () => {
    if (store?.name === "apple") {
      return (
        <>
          <title>
            Доставка Apple из США в Казахстан | Купить Айфон, MacBook
          </title>
          <meta
            name="description"
            content={`Заказать iPhone, MacBook и другую технику Apple из Америки с доставкой в Казахстан. Выгодные цены 💲 быстрая доставка ✈️ гарантия подлинности. Экономия до 30%!`}
          />
        </>
      );
    } else if (store?.name === "Nike") {
      return (
        <>
          <title>Доставка товаров Nike из США в Казахстан | Oryx</title>
          <meta
            name="description"
            content={`Заказать оригинальные товары Nike из США с доставкой в Казахстан. Выгодные цены 💲 быстрая доставка ✈️ Гарантия подлинности. Экономия до 30%!`}
          />
        </>
      );
    } else {
      return (
        <>
          <title>
            Доставка товаров из {store?.name || "неизвестного магазина"} в
            Казахстан за 7 дней | Oryx
          </title>
          <meta
            name="description"
            content={`Закажите доставку из ${
              store?.name || "магазина"
            } в Казахстан. Быстрая доставка. Без налогов и переплат. Гарантируем сохранность товаров.`}
          />
        </>
      );
    }
  };

  return (
    <section>
      <Head>
        {seoFunc()}
        <meta
          property="og:title"
          content={`Доставка товаров из ${
            store?.name || "неизвестного магазина"
          } в Казахстан за 7 дней | Oryx`}
        />
        <meta
          property="og:description"
          content={`Закажите доставку из ${
            store?.name || "магазина"
          } в Казахстан. Быстрая доставка. Без налогов и переплат. Гарантируем сохранность товаров.`}
        />
        <meta
          property="og:url"
          content={`https://oryx.kz/populyarnye-magaziny/${
            store?.slug || "неизвестный магазин"
          }`}
        />
        <meta
          property="og:image"
          content={`${store?.img || "/default-image.png"}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Oryx" />
        <link
          rel="canonical"
          href={`https://oryx.kz/populyarnye-magaziny/${store?.slug || ""}`}
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
                  name: "Популярные магазины",
                  item: "https://oryx.kz/populyarnye-magaziny",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: `${store.name || "неизвестный магазин"}`,
                  item: "https://oryx.kz/populyarnye-magaziny/" + store?.slug,
                },
              ],
            }),
          }}
        />
      </Head>
      <div className={styles.wrapper}>
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
          /
          <Link
            href="/populyarnye-magaziny"
            style={{ textDecoration: "underline" }}
          >
            Популярные магазины
          </Link>
          / Информация о {store?.name || "неизвестном магазине"}
        </div>
        <div className={styles.content}>
          <Image
            src={store?.img || "/default-image.png"}
            alt={store?.name || "неизвестный магазин"}
            width={350}
            height={350}
          />
          <div className={styles.titleanddescr}>
            <h1 style={{ marginBottom: "50px", fontSize: "30px" }}>
              Доставка товаров {store?.name || "неизвестном магазине"} из США в
              Казахстан: быстро и выгодно
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  store?.short_desc ||
                  store?.description ||
                  "Описание недоступно",
              }}
            ></div>
          </div>
        </div>

        <a
          href={store?.link || "#"}
          target="_blank"
          rel="nofollow"
          className={styles.btn}
        >
          {store?.link ? "Перейти на сайт" : "Ссылка недоступна"}
        </a>
      </div>
    </section>
  );
};

export default Store;
