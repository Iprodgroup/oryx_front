import { FC, PropsWithChildren, useEffect, useState } from 'react';
import styles from './styles.module.sass';

import { useRouter } from 'next/router';
import { useIsClient, useMediaQuery } from 'usehooks-ts';
import Link from 'next/link';

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
  const isClient = useIsClient();
  const router = useRouter();
  const matches = useMediaQuery('(min-width: 576px)');
  
  // State for storing exchange rate
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  useEffect(() => {
    const body = document.body;

    body.style.backgroundColor = '#F4F5FE';

    return () => {
      body.removeAttribute('style');
    };
  }, []);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/d2658bf5487b0fd2173f4a12/latest/USD');
        const data = await response.json();
        setExchangeRate(data.rates.KZT);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
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
              <li style={{backgroundColor: 'white', color: "#000", padding: "3px 8px", borderRadius: "5px"}}>
               1 USD = {exchangeRate ? `${exchangeRate} KZT` : 'Загрузка...'}
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
