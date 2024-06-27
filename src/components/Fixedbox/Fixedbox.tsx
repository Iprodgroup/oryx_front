import { useEffect } from 'react';
import styles from './styles.module.sass';

import Image from 'next/image';

const FixedBox = () => {
  useEffect(() => {
    const btn = document.querySelector(`.${styles.callBack__icon}`);
    const instagram = document.querySelector(`.${styles.callBack__instagram}`);
    const phone = document.querySelector(`.${styles.callBack__phone}`);
    const whatsApp = document.querySelector(`.${styles.callBack__whatsApp}`);
    const mail = document.querySelector(`.${styles.callBack__mail}`);
    const btnScroll = document.querySelector(`.${styles.scroll}`);

    const toggleActive = () => {
      instagram?.classList.toggle(styles.active);
      phone?.classList.toggle(styles.active);
      whatsApp?.classList.toggle(styles.active);
      mail?.classList.toggle(styles.active);
    };

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

    btn?.addEventListener('click', toggleActive);
    window.addEventListener('scroll', handleScroll);
    btnScroll?.addEventListener('click', scrollToTop);

    return () => {
      btn?.removeEventListener('click', toggleActive);
      window.removeEventListener('scroll', handleScroll);
      btnScroll?.removeEventListener('click', scrollToTop);
    };
  }, []);

  return (
    <div className={styles.callBack}>
      <div className={styles.callBack__body}>
        <div className={styles.callBack__icon}>
          <Image src='/operator.svg' alt='call' width={50} height={50} />
        </div>
        <a
          href='https://www.instagram.com/oryx.usa.kz/'
          className={styles.callBack__instagram}
        >
          <Image src='/instagram2.svg' alt='instagram' width={30} height={30} />
        </a>
        <a href='tel:+77003232222' className={styles.callBack__phone}>
          <Image src='/phone.svg' alt='phone' width={30} height={30} />
        </a>
        <a href='mailto:ofis@orix.kz' className={styles.callBack__mail}>
          <Image src='/mail.svg' alt='mail' width={30} height={30} />
        </a>
        <a
          href='https://api.whatsapp.com/send?phone=77475155613'
          className={styles.callBack__whatsApp}
        >
          <Image src='/whatsapp2.svg' alt='whatsApp' width={30} height={30} />
        </a>
      </div>
      <div className={styles.scroll}>
        <Image src='/scroll.svg' alt='' width={30} height={30} />
      </div>
    </div>
  );
};

export default FixedBox;
