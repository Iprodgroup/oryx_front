import styles from './styles.module.sass';

import { useIsClient } from 'usehooks-ts';
import Link from 'next/link';
import Image from 'next/image';

import useAuth from '@/hooks/useAuth';
import Drawer from '../drawer/Drawer/Drawer';
import LogoIcon from '../icons/Logo';

const DefaultHeader = () => {
  const isClient = useIsClient();
  const isAuthenticated = useAuth();

  return (
    isClient && (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Link href='/'>
              <LogoIcon />
            </Link>
          </div>
          <div className={styles.right}>
            {isAuthenticated ? (
              <Link href='/profile' className={styles.profile__btn}>
                <Image src='/lock-red.svg' alt='' width={16} height={16} />{' '}
                Личный кабинет
              </Link>
            ) : (
              <>
                <Link href='/login' className={styles.login__btn}>
                  <Image src='/lock.svg' alt='' width={16} height={16} /> Вход
                </Link>
                <Link href='/register' className={styles.register__btn}>
                  Регистрация
                </Link>
              </>
            )}
            <Drawer />
          </div>
        </div>
      </header>
    )
  );
};

export default DefaultHeader;
