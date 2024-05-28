import styles from '@/styles/PopularStores.module.sass';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Head from 'next/head';

import { Category } from '@/types/category.interface';
import instance from '@/utils/axios';

export const getServerSideProps = (async () => {
  const res = await instance.get<{ categories: Category[] }>('/popular-stores');
  const categories = res.data.categories;

  return { props: { categories } };
}) satisfies GetServerSideProps<{ categories: Category[] }>;

const PopularStores = ({
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Список популярных магазинов в США - ORYX</title>
      </Head>

      <section>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <h2>Популярные магазины в США</h2>
            <p>
              Мы подготовили для вас список самых популярных магазинов одежды,
              которые диктуют тренды каждого сезона
            </p>
            <ul>
              {categories.map((category) => (
                <li key={category.id}>{category.name}</li>
              ))}
            </ul>
          </div>
          <div className={styles.bottom}>
            <h1>Что чаще всего покупают в США?</h1>
            <p>
              Сейчас огромной популярностью пользуются интернет-магазины в США.
              В Америке можно купить все, что угодно от одежды, бытовой техники
              и даже автомобильных запчастей. На покупке оригинальных брендов Вы
              сэкономите 20-40% её офлайн стоимости, а на скидках можно
              сэкономить до 80-90%, учитывая доставку. Помимо экономии,
              интернет-шоппинг в США отличается огромным разнообразием
              ассортимента и эксклюзивных коллекций, которые редко найдёшь в
              нашей стране.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularStores;
