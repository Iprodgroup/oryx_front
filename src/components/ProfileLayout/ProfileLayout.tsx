import { FC, PropsWithChildren, useEffect } from 'react';
import styles from './styles.module.sass';

import { useRouter } from 'next/router';
import { useIsClient, useMediaQuery } from 'usehooks-ts';
import Link from 'next/link';

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
  const isClient = useIsClient();
  const router = useRouter();
  const matches = useMediaQuery('(min-width: 576px)');

  useEffect(() => {
    const body = document.body;

    body.style.backgroundColor = '#F4F5FE';

    return () => {
      body.removeAttribute('style');
    };
  }, []);

  return (
    isClient && (
      <>
        {!matches && router.pathname !== '/profile' ? (
          <></>
        ) : (
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
                <Link href='/profile/nsettings'>Настройка уведомлений</Link>
              </li>
            </ul>
          </nav>
        )}
        <section>
          <div className={styles.container}>{children}</div>
        </section>
      </>
    )
  );
};

export default ProfileLayout;
