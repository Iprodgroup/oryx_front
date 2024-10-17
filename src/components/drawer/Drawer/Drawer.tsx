import { useState } from 'react';
import styles from './styles.module.sass';

import { useMediaQuery } from 'usehooks-ts';
import Image from 'next/image';
import DrawerComponent from 'react-modern-drawer';
import Link from 'next/link';

import useAuth from '@/hooks/useAuth';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useAuth();
  const matches = useMediaQuery('(min-width: 576px)');

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <DrawerComponent
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className={styles.drawer}
        lockBackgroundScroll
        size={matches ? 400 : '70%'}
      >
        <div className={styles.top}>
          <button onClick={toggleDrawer}>
            <Image src='/close.svg' alt='close' width={30} height={30} />
          </button>
        </div>
        <div className={styles.bottom}>
          <nav>
            <ul onClick={toggleDrawer}>
              <li>
                <Link href='/o-kompanii'>О нас</Link>
              </li>
              <li>
                <Link href='/populyarnye-magaziny'>Популярные магазины</Link>
              </li>
              <li>
                <Link href='/buy-me'>Купи вместо меня</Link>
              </li>
              <li>
                <Link href='/kontakty'>Контакты</Link>
              </li>
              <li>
                <Link href='/#calculator'>Калькулятор</Link>
              </li>
              {isAuthenticated && (
                <li>
                  <Link href='/logout'>Выход</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </DrawerComponent>
      <button onClick={toggleDrawer}>
        <Image src='/menu.svg' alt='menu' width={30} height={30} />
      </button>
    </>
  );
};

export default Drawer;
