import styles from '@/styles/Custom404.module.sass';

import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <section>
      <link rel="canonical" href="https://oryx.kz/404" />
      <div className={styles.wrapper}>
        <Image src='/404.svg' alt='' width={500} height={500} priority />
        <h1>Извините, мы не можем найти эту страницу</h1>
        <Link href='/'>Главная</Link>
      </div>
    </section>
  );
}
