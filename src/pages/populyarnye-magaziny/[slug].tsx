import styles from "@/styles/Store.module.sass";

import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Image from "next/image";

import { Store as IStore } from "@/types/store.interface";
import instance from "@/utils/axios";

export const getServerSideProps = (async ({ query }) => {
  const res = await instance.get<{ store: IStore }>(`/store/${query.slug}`);
  const store = res.data.store;

  return { props: { store } };
}) satisfies GetServerSideProps<{ store: IStore }>;

const Store = ({
  store,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <section>
      <div className={styles.wrapper}>
        <h1>Информация о {store.name}</h1>
        <div className={styles.content}>
          <Image src={store.img} alt="" width={350} height={350} />
          <div dangerouslySetInnerHTML={{__html: store.short_desc}}></div>
        </div>

        <a href={store.link} target="_blank" className={styles.btn}>
          Перейти на сайт
        </a>
      </div>
    </section>
  );
};

export default Store;
