import styles from './styles.module.sass';

import { useIsClient, useMediaQuery } from 'usehooks-ts';
import Link from 'next/link';
import Image from 'next/image';

import { responsiveImg } from '@/utils/image';

const About = () => {
  const isClient = useIsClient();
  const matches = {
    768: useMediaQuery('(min-width: 768px)'),
  };

  return (
    isClient && (
      <section>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2>О компании</h2>
            <p>
              ORYX – это надежный мейлфорвардер, имеющий собственный
              автоматизированный склад в безналоговом штате Америки. Покупка и
              доставка из США любых товаров – наша основная деятельность. Мы
              сотрудничаем с лучшими перевозчиками долго и плодотворно благодаря
              этому готовы предложить доступную стоимость доставки.
            </p>
            <Link href='/o-kompanii'>Узнать больше</Link>
          </div>
          <div className={styles.right}>
            <Image
              src={matches[768] ? '/car.svg' : '/car-mobile.svg'}
              alt='car-mobile'
              {...responsiveImg}
            />
          </div>
        </div>
      </section>
    )
  );
};

export default About;
