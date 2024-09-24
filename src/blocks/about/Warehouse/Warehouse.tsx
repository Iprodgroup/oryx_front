import styles from './styles.module.sass';

import Image from 'next/image';

import { responsiveImg } from '@/utils/image';

const Warehouse = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <h2>Наш склад в США</h2>
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.top}>
              <Image src='/wh1.png' alt='wh1' {...responsiveImg} />
              <Image src='/wh2.png' alt='wh2' {...responsiveImg} />
            </div>
            <div className={styles.bottom}>
              <b>Получение заказов на склад и консолидация</b>
              <p>
                Независимо от магазина, количества товаров и веса, входящие
                посылки принимаются на нашем складе бесплатно. Мы бесплатно
                объединим любое количество входящих посылок из одного или
                нескольких магазинов в одну общую посылку для вашей экономии на
                доставке (по сравнению с прямой отправкой из магазинов экономия
                может составлять до 80%).
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.top}>
              <Image src='/wh3.png' alt='wh3' {...responsiveImg} />
              <Image src='/wh4.png' alt='wh4' {...responsiveImg} />
            </div>
            <div className={styles.bottom}>
              <b>Упаковка и хранение посылок</b>
              <p>
                Качественная упаковка, подходящая для международных отправлений
                всех Ваших покупок, и их переупаковка для уменьшения веса
                отправления. Стоимость упаковки зависит от размера посылки и
                формы товаров и составляет от 3 до 8$. Хранение всех Ваших
                покупок осуществляется абсолютно бесплатно до 14 дней
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Warehouse;
