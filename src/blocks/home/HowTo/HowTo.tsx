import styles from './styles.module.sass';

import Image from 'next/image';
import Link from 'next/link';

import { responsiveImg } from '@/utils/image';

const HowTo = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <h2>Как заказать доставку посылки из США?</h2>
        <div className={styles.steps}>
          <div className={styles.path}>
            <Image src='/path.svg' alt='path' {...responsiveImg} />
          </div>
          <ul>
            <li>
              <div className={styles.img}>
                <Image src='/pc.svg' alt='pc' width={73} height={73} />
              </div>
              <b>Зарегистрируйтесь</b>
              <p>Получите адрес для доставки посылок в США</p>
            </li>
            <li>
              <div className={styles.img}>
                <Image src='/cart.svg' alt='cart' width={73} height={73} />
              </div>
              <b>Покупайте</b>
              <p>Заказывайте онлайн и отправляйте посылки на наш склад</p>
            </li>
            <li>
              <div className={styles.img}>
                <Image src='/heartbox.svg' alt='heartbox' width={73} height={73} />
              </div>
              <b>Получайте</b>
              <p>Ваши посылки доставят в течении 7-14 дней</p>
            </li>
          </ul>
        </div>
        <Link href='/register'>Получить сейчас</Link>
      </div>
    </section>
  );
};

export default HowTo;
