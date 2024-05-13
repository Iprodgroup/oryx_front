import { useState } from 'react';
import styles from './styles.module.sass';

import Image from 'next/image';
import DrawerComponent from 'react-modern-drawer';
import Link from 'next/link';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        enableOverlay={false}
        lockBackgroundScroll
        size={400}
      >
        <div className={styles.top}>
          <button onClick={toggleDrawer}>
            <Image src='/close.svg' alt='' width={30} height={30} />
          </button>
        </div>
        <div className={styles.bottom}>
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
        </div>
      </DrawerComponent>
      <button onClick={toggleDrawer}>
        <Image src='/menu.svg' alt='' width={30} height={30} />
      </button>
    </>
  );
};

export default Drawer;
