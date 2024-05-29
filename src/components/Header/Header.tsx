import styles from './styles.module.sass';

import { useIsClient, useMediaQuery } from 'usehooks-ts';
import Link from 'next/link';
import Image from 'next/image';

import useAuth from '@/hooks/useAuth';
import Drawer from '../drawer/Drawer/Drawer';

const Header = () => {
  const isClient = useIsClient();
  const isAuthenticated = useAuth();

  const matches = {
    576: useMediaQuery('(min-width: 576px)'),
    1200: useMediaQuery('(min-width: 1200px)'),
  };

  return (
    isClient && (
      <header>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Link href='/'>
              <Image
                src={matches[576] ? '/logo.svg' : '/logo-mobile.svg'}
                alt=''
                width={170}
                height={70}
                priority
              />
            </Link>
            {matches[1200] && (
              <nav>
                <ul>
                  <li>
                    <Link href='/about'>О нас</Link>
                  </li>
                  <li>
                    <Link href='/popular-stores'>Популярные магазины</Link>
                  </li>
                  <li>
                    <Link href='/buy-it-for-me'>Купи вместо меня</Link>
                  </li>
                  <li>
                    <Link href='/contacts'>Контакты</Link>
                  </li>
                  <li>
                    <Link href='/#calculator'>Калькулятор</Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
          <div className={styles.right}>
            {isAuthenticated ? (
              <>
                <Link href='/profile'>Личный кабинет</Link>
                <Link href='/logout' className={styles.register__btn}>
                  Выход
                </Link>
              </>
            ) : (
              <>
                <Link href='/login' className={styles.login__btn}>
                  <Image src='/login.svg' alt='' width={16} height={20} /> Вход
                </Link>
                <Link href='/register' className={styles.register__btn}>
                  Регистрация
                </Link>
              </>
            )}
            {!matches[1200] && <Drawer />}
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
