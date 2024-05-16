import styles from './styles.module.sass';

import { useIsClient, useMediaQuery } from 'usehooks-ts';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const isClient = useIsClient();
  const matches = {
    768: useMediaQuery('(min-width: 768px)'),
  };

  return (
    isClient && (
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            {matches[768] ? (
              <div className={styles.left}>
                <a href='tel:+77003232222'>
                  <Image src='/call.svg' alt='' width={30} height={30} />
                  +7 700 323 22 22
                </a>
                <a href='tel:+77475155613'>+7 747 515 56 13</a>
                <a
                  href='https://www.instagram.com/oryx.usa.kz/'
                  target='_blank'
                >
                  <Image src='/instagram.svg' alt='' width={24} height={24} />
                  @oryx.usa.kz
                </a>
              </div>
            ) : (
              <div className={styles.left}>
                <a href='tel:+77003232222'>
                  <Image src='/call.svg' alt='' width={20} height={20} />
                  +7 700 323 22 22
                </a>
                <a href='tel:+77475155613'>
                  <Image src='/whatsapp.svg' alt='' width={20} height={20} />
                  +7 747 515 56 13
                </a>
              </div>
            )}
            <div className={styles.right}>
              <Link href='/login'>Войти в личный кабинет</Link>
              <Link href='/register'>Регистрация в ЛК</Link>
            </div>
          </div>
          <div className={styles.middle}>
            <form>
              <input type='text' placeholder='Имя' />
              <div className={styles.pn}>
                <input type='number' placeholder='Введите номер' />
                <button type='submit'>Отправить</button>
              </div>
            </form>
          </div>
          <div className={styles.bottom}>
            <Image src='/logo-footer.svg' alt='' width={140} height={60} />
            <nav>
              <ul>
                <li>
                  <Link href='/about'>О компании</Link>
                </li>
                <li>
                  <Link href='/popular-stores'>Популярные магазины в США</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href='/contacts'>Контакты</Link>
                </li>
                <li>
                  <Link href='/support'>Помощь в работе с сервисом</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href='/privacy-policy'>
                    Политика конфиденциальности
                  </Link>
                </li>
                <li>
                  <Link href='/terms'>Общие условия</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;