import { useEffect } from 'react';
import styles from './styles.module.sass';

import Image from 'next/image';

const FixedBox = () => {
  useEffect(() => {
    const btnScroll = document.querySelector(`.${styles.scroll}`);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        btnScroll?.classList.add(styles.show);
      } else {
        btnScroll?.classList.remove(styles.show);
      }
    };

    const scrollToTop = (e: Event) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    btnScroll?.addEventListener('click', scrollToTop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      btnScroll?.removeEventListener('click', scrollToTop);
    };
  }, []);

  return (
    <div className={styles.callBack}>
      <a
        href='https://api.whatsapp.com/send?phone=77475155613'
        className={styles.callBack__whatsApp}
        target='_blank'
      >
        <Image src='/whatsapp2.svg' alt='whatsApp' width={50} height={50} />
      </a>
      <div className={styles.scroll}>
        <Image src='/scroll.svg' alt='scroll' width={30} height={30} />
      </div>
    </div>
  );
};

export default FixedBox;
