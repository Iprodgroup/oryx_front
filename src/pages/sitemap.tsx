import React from "react";
import styles from "@/styles/Sitemap.module.sass";
import Head from "next/head";
import Link from "next/link";
import instance from "@/utils/axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface Store {
  id: number;
  name: string;
  slug: string;
}

export const getServerSideProps: GetServerSideProps<{
  stores: Store[];
}> = async ({ query }) => {
  const res = await instance.get<{ stores: Store[] }>("/popular-stores", {
    params: {
      category_id: query.categoryId,
    },
  });

  const { stores } = res.data;
  return { props: { stores } };
};

const Sitemap = ({
  stores,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Доставка товаров из США в Казахстан - Карта сайта </title>
        <meta
          name="description"
          content="Ознакомьтесь с картой сайта компании Oryx по доставке товаров из США в Казахстан. Быстрый доступ к разделам, условиям доставки и популярным онлайн-магазинам"
        />
      </Head>
      <section>
        <div className={styles.wrapper}>
          <h1>Карта сайта</h1>
          <div className={styles.fList}>
            <div style={{ marginTop: "20px", textAlign: "start" }}>
              <h2>Основное</h2>
              <ul>
                <li>
                  <Link href="/">Главная</Link>
                </li>
                <li>
                  <Link href="/o-kompanii">О компании</Link>
                </li>
                <li>
                  <Link href="/populyarnye-magaziny">
                    Популярные магазины в США
                  </Link>
                </li>
                <li>
                  <Link href="/kontakty">Контакты</Link>
                </li>
                <li>
                  <Link href="/buy-me">Купи вместо меня</Link>
                </li>
                <li>
                  <Link href="/#calculator">Калькулятор</Link>
                </li>
                <li>
                  <Link href="/faq">Q&A</Link>
                </li>
                <li>
                  <Link href="/sitemap">Карта сайта</Link>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "20px", textAlign: "start" }}>
              <h2>Важное</h2>
              <ul>
                <li>
                  <Link href="/usloviya-servisa">
                    Помощь в работе с сервисом
                  </Link>
                </li>
                <li>
                  <Link href="/politika-konfidentsialnosti">
                    Политика конфиденциальности
                  </Link>
                </li>
                <li>
                  <Link href="/obshchie-usloviya">Общие условия</Link>
                </li>
                <li>
                  <Link href="/prohibited">
                    Запрещенные к авиаперевозке грузы
                  </Link>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "20px", textAlign: "start" }}>
              <h2>Аккаунт</h2>
              <ul>
                <li>
                  <Link href="/login">Войти в аккаунт</Link>
                </li>
                <li>
                  <Link href="/register">Зарегистрироваться</Link>
                </li>
                <li>
                  <Link href="/profile/parcels">Мои посылки</Link>
                </li>
                <li>
                  <Link href="/profile/addresses">Мои адреса</Link>
                </li>
                <li>
                  <Link href="/profile/settings">Личные данные</Link>
                </li>
                <li>
                  <Link href="/profile/nsettings">Настройка уведомлений</Link>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "20px", textAlign: "start" }}>
              <h2>Магазины</h2>
              <ul>
                {stores.map((store) => (
                  <li key={store.id}>
                    <Link href={`/populyarnye-magaziny/${store.slug}`}>{store.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sitemap;
