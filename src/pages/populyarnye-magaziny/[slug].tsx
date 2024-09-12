import styles from "@/styles/Store.module.sass";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Image from "next/image";

import { Store as IStore } from "@/types/store.interface";
import instance from "@/utils/axios";
import Head from "next/head";

export const getServerSideProps = (async ({ query }) => {
  const res = await instance.get<{ store: IStore; meta: string }>(`/store/${query.slug}`);
  const store = res.data.store;
  const meta = res.data.meta;

  return { props: { store, meta } };
}) satisfies GetServerSideProps<{ store: IStore, meta: string }>;

const Store = ({
  store,
  meta
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  
  return (
    <section>
      <Head>
        <title>Информация о {store.name}</title>
        {/* Inject the meta tags using dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={{ __html: meta }} />
        <link rel="canonical" href={`https://oryx.kz/populyarnye-magaziny/${store.slug}`} />
      </Head>
      <div className={styles.wrapper}>
        <h1>Информация о {store.name}</h1>
        <div className={styles.content}>
          <Image src={store.img} alt="" width={350} height={350} />
          <div dangerouslySetInnerHTML={{__html: store.short_desc || store.description}}></div>
        </div>

        <a href={store.link} target="_blank" rel="nofollow" className={styles.btn}>
          Перейти на сайт
        </a>
      </div>
    </section>
  );
};

export default Store;
