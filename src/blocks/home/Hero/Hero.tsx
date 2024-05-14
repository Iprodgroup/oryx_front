import styles from './styles.module.sass';

import { useIsClient, useMediaQuery } from 'usehooks-ts';
import Link from 'next/link';
import Image from 'next/image';

import { responsiveImg } from '@/utils/image';

const Hero = () => {
  const isClient = useIsClient();
  const matches = {
    768: useMediaQuery('(min-width: 768px)'),
  };

  return (
    isClient && (
      <section className={styles.hero}>
        <div className={styles.wrapper}>
          {matches[768] ? (
            <>
              <div className={styles.left}>
                <h1>
                  Доставка <span>посылок</span> из США в <span>Казахстан</span>
                </h1>
                <p>
                  Покупайте в любых интернет-магазинах Америки, а мы гарантируем
                  быструю доставку. Регистрируйтесь сейчас и откройте себе
                  доступ к лучшим товарам и акциям из США. Просто, Надежно и
                  Удобно.
                </p>
                <Link href='/register'>Зарегистрируйтесь!</Link>
              </div>
              <div className={styles.right}>
                <Image src='/plane.png' alt='' {...responsiveImg} priority />
              </div>
            </>
          ) : (
            <>
              <div className={styles.left}>
                <h1>
                  Доставка <span>посылок</span> из США в <span>Казахстан</span>
                </h1>
                <Image src='/plane.png' alt='' {...responsiveImg} priority />
              </div>
              <div className={styles.right}>
                <Link href='/register'>Зарегистрируйтесь!</Link>
              </div>
            </>
          )}
        </div>
      </section>
    )
  );
};

export default Hero;
