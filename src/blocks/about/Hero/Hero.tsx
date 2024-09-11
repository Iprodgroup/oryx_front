import styles from './styles.module.sass';

import Image from 'next/image';

import { responsiveImg } from '@/utils/image';

const Hero = () => {
  return (
    <section>
      <link rel="canonical" href="https://oryx.kz/o-kompanii" />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Image src='/hero-about.svg' alt='' {...responsiveImg} />
        </div>
        <div className={styles.right}>
          <h2>О компании Oryx</h2>
          <p>
            ORYX – это надежный мейлфорвардер, имеющий собственный
            автоматизированный склад в безналоговом штате Америки. Покупка и
            доставка из США любых товаров – наша основная деятельность. Мы
            сотрудничаем с лучшими перевозчиками долго и плодотворно благодаря
            этому готовы предложить доступную стоимость доставки.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
