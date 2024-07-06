import { FormEvent } from 'react';
import styles from './styles.module.sass';

import { useIsClient, useMediaQuery } from 'usehooks-ts';
import { InputMask } from '@react-input/mask';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';

import useAuth from '@/hooks/useAuth';

const Footer = () => {
  const isClient = useIsClient();
  const isAuthenticated = useAuth();

  const matches = {
    768: useMediaQuery('(min-width: 768px)'),
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loadingToastId = toast.loading('Загрузка...');

    try {
      const formData = new FormData(event.currentTarget);
      const { name, phem } = Object.fromEntries(formData);

      let text = `Name: ${name}\n\nPhone: ${phem}`;

      console.log(text);

      // await axios.post('/api/send', {
      //   subject: 'Заявка с сайта',
      //   text,
      // });

      // toast.success('Заявка отправлена');
    } catch (error) {
      toast.error('Ошибка при отправлении заявки');
    } finally {
      toast.dismiss(loadingToastId);
    }
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
                <a
                  href='https://www.instagram.com/oryx.usa.kz/'
                  target='_blank'
                >
                  <Image src='/instagram.svg' alt='' width={24} height={24} />
                  @oryx.usa.kz
                </a>
              </div>
            )}
            <div className={styles.right}>
              {isAuthenticated ? (
                <Link href='/profile'>Личный кабинет</Link>
              ) : (
                <>
                  <Link href='/login'>Войти в личный кабинет</Link>
                  <Link href='/register'>Регистрация в ЛК</Link>
                </>
              )}
            </div>
          </div>
          <div className={styles.middle}>
            <form onSubmit={handleSubmit}>
              <input type='text' name='name' placeholder='Имя' required />
              <div className={styles.pn}>
                <InputMask
                  mask='+7 (___) ___-__-__'
                  replacement={{ _: /\d/ }}
                  name='phem'
                  placeholder='Введите номер телефона'
                  required
                />
                <button type='submit'>Отправить</button>
              </div>
            </form>
          </div>
          <div className={styles.bottom}>
            <Image
              src='/logo-footer.svg'
              alt=''
              width={140}
              height={60}
              priority
            />
            <nav>
              <ul>
                <li>
                  <Link href='/o-kompanii'>О компании</Link>
                </li>
                <li>
                  <Link href='/populyarnye-magaziny'>
                    Популярные магазины в США
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href='/kontakty'>Контакты</Link>
                </li>
                <li>
                  <Link href='/usloviya-servisa'>
                    Помощь в работе с сервисом
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href='/politika-konfidentsialnosti'>
                    Политика конфиденциальности
                  </Link>
                </li>
                <li>
                  <Link href='/obshchie-usloviya'>Общие условия</Link>
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
