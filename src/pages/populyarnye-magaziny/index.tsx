import styles from '@/styles/PopularStores.module.sass';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { Category } from '@/types/category.interface';
import { Store } from '@/types/store.interface';
import { responsiveImg } from '@/utils/image';
import instance from '@/utils/axios';

export const getServerSideProps = (async ({ query }) => {
  const res = await instance.get<{ categories: Category[]; stores: Store[] }>(
    '/popular-stores',
    {
      params: {
        category_id: query.categoryId,
      },
    }
  );
  const categories = res.data.categories;
  const stores = res.data.stores;

  return { props: { categories, stores } };
}) satisfies GetServerSideProps<{ categories: Category[]; stores: Store[] }>;

const PopularStores = ({
  categories,
  stores,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const categoryId = +router.query.categoryId!;

  const changeCategory = (categoryId: number) => {
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, categoryId },
    });
  };

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
            <div className={styles.categories}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={categoryId === category.id ? styles.active : ''}
                  onClick={() => changeCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className={styles.stores}>
              {stores.map((store) => (
                <Link key={store.id} href={`/populyarnye-magaziny/${store.slug}`}>
                  <Image src={store.img} alt='' {...responsiveImg} />
                </Link>
              ))}
            </div>
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