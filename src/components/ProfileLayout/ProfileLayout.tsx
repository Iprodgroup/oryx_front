import { FC, PropsWithChildren, useEffect } from 'react';
import styles from './styles.module.sass';

import Link from 'next/link';

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const body = document.body;

    body.style.backgroundColor = '#F4F5FE';

    return () => {
      body.removeAttribute('style');
    };
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='/profile/addresses'>Мои адреса</Link>
          </li>
          <li>
            <Link href='/profile/parcels'>Мои посылки</Link>
          </li>
          <li>
            <Link href='/profile/settings'>Личные данные</Link>
          </li>
          <li>
            <Link href='/profile/notifications'>Настройка уведомлений</Link>
          </li>
        </ul>
      </nav>
      <section>
        <div className={styles.wrapper}>{children}</div>
      </section>
    </>
  );
};

export default ProfileLayout;
