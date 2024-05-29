import { FormEvent } from 'react';
import { createPortal } from 'react-dom';
import styles from '@/styles/Login.module.sass';

import { useIsClient } from 'usehooks-ts';
import { useRouter } from 'next/router';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';

import withAuthServerSide from '@/utils/withAuthServerSide';
import LockIcon from '@/components/icons/Lock';

export const getServerSideProps = withAuthServerSide('/profile')(async () => {
  return {
    props: {},
  };
});

const Login = () => {
  const isClient = useIsClient();
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const loadingToastId = toast.loading('Загрузка...');

    const { status } = await axios.post('/api/auth/login', { email, password });

    toast.dismiss(loadingToastId);

    if (status === 200) {
      router.push('/profile');
    } else {
      toast.error('Что-то пошло не так');
    }
  };

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2>ВОЙТИ В ЛИЧНЫЙ КАБИНЕТ</h2>
          <p>Чтобы войти введите ваш email и пароль</p>
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              name='email'
              placeholder='Электронная почта'
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Пароль'
              required
            />
            <button type='submit'>Войти в мой кабинет</button>
          </form>
          <div className={styles.flx}>
            <Link href='/register'>
              <LockIcon /> Зарегистрироваться
            </Link>
            <Link href='/password/reset'>Забыли пароль</Link>
          </div>
        </div>
        <div className={styles.right}>
          {isClient &&
            createPortal(<div className='login'></div>, document.body)}
          <h2>ВОЙТИ ЧЕРЕЗ СОЦСЕТИ</h2>
          <p>Войдите с помощью вашего аккаунта социальной сети</p>
          <button>Регистрация через Google</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
