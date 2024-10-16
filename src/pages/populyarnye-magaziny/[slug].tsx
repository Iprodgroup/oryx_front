import styles from "@/styles/Store.module.sass";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Image from "next/image";
import { Store as IStore } from "@/types/store.interface";
import instance from "@/utils/axios";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

import { useAmp } from "next/amp";

export const config = { amp: "hybrid" };

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
  const isAmp = useAmp();

  useEffect(() => {
    if (!store) {
      console.error("Store data is missing");
    }
  }, [store]);

  if (!store) {
    return <div>Error loading store data</div>;
  }

  return (
    <section>
      <Head>
        <title>
          Доставка товаров из {store?.name || "неизвестного магазина"} в
          Казахстан - ORYX
        </title>
        <meta
          name="description"
          content={`Заказывайте товары из ${
            store?.name || "магазина"
          } выгодно. Доставим товары за 10 дней 🚚. Без налогов и переплат.`}
        />
        <link
          rel="alternate"
          href={`https://oryx.kz/populyarnye-magaziny/${store.name}`}
          hrefLang="en-ru"
        />
        <link
          rel="alternate"
          href={`https://oryx.kz/populyarnye-magaziny/${store.name}`}
          hrefLang="x-default"
        />

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
          {isAmp ? (
            <amp-img
              width="300"
              height="300"
              src={store?.img || "/default-image.png"}
              alt={store?.name || "неизвестный магазин"}
            />
          ) : (
            <Image
              src={store?.img || "/default-image.png"}
              alt={store?.name || "неизвестный магазин"}
              width={350}
              height={350}
            />
          )}
          <div className={styles.titleanddescr}>
            <h1 style={{ marginBottom: "20px" }}>
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
