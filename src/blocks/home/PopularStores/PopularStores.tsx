import styles from "./styles.module.sass";

import Slider from "react-slick";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import { Store } from "@/types/store.interface";
import instance from "@/utils/axios";
import settings from "./slider.settings";

const fetcher = (arg: string): Promise<{ stores: Store[] }> =>
  instance(arg).then((res) => res.data);

const PopularStores = () => {
  const { data } = useSWR("/popular-stores", fetcher);

  return (
    <section>
      <link rel="canonical" href="https://oryx.kz/populyarnye-magaziny" />
      <div className={styles.wrapper}>
        <h2>Популярные магазины</h2>
        <Slider
          {...settings}
          className={classNames("stores-slider", styles.slider)}
        >
          {data?.stores.map((store) => (
            <Link key={store.id} href={`/populyarnye-magaziny/${store.slug}`}>
              <Image
                src={store.img}
                alt={store.name}
                width={170}
                height={170}
                className={styles.slider__img}
              />
            </Link>
          ))}
        </Slider>
        <Link href="/populyarnye-magaziny" className={styles.all__btn}>
          Смотреть все
        </Link>
      </div>
    </section>
  );
};

export default PopularStores;
