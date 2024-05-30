import { FormEvent, useEffect } from 'react';
import styles from '@/styles/Login.module.sass';

import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';

import withAuthServerSide from '@/utils/withAuthServerSide';

export const getServerSideProps = withAuthServerSide('/profile')(async () => {
  return {
    props: {},
  };
});

const Register = () => {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loadingToastId = toast.loading('Загрузка...');

    try {
      const formData = new FormData(event.currentTarget);
      const [email, password, password_confirmation, phone] = [
        'email',
        'password',
        'password_confirmation',
        'phone',
      ].map((name) => formData.get(name));

      if (password !== password_confirmation) {
        toast.error('Пароли не совпадают');
        return;
      }

      await axios.post('/api/auth/register', {
        email,
        password,
        password_confirmation,
        phone,
      });

      toast.success(
        'Успешная регистрация, для продолжения работы в системе выполните вход'
      );
      router.push('/login');
    } catch (error) {
      toast.error('Ошибка при регистрации');
    } finally {
      toast.dismiss(loadingToastId);
    }
  };

  useEffect(() => {
    const body = document.body;

    body.style.backgroundColor = '#F4F5FE';

    return () => {
      body.removeAttribute('style');
    };
  }, []);

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2>РЕГИСТРАЦИЯ НА САЙТЕ</h2>
          <p>Пожалуйста, заполните все поля заявки</p>
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
            <input
              type='password'
              name='password_confirmation'
              placeholder='Подтвердите пароль'
              required
            />
            <input
              type='tel'
              name='phone'
              placeholder='+7 (___) ___-__-__'
              required
            />
            <div className={styles.confirm}>
              <input type='checkbox' id='pp' required />
              <label htmlFor='pp'>
                Я принимаю условия{' '}
                <Link href='/politika-konfidentsialnosti'>пользовательского соглашения</Link>
              </label>
            </div>
            <button type='submit'>Зарегистрироваться</button>
          </form>
        </div>
        <div className={styles.right}>
          <h2>ВОЙТИ ЧЕРЕЗ СОЦСЕТИ</h2>
          <p>Войдите с помощью вашего аккаунта социальной сети</p>
          <button>Регистрация через Google</button>
        </div>
      </div>
    </section>
  );
};

export default Register;
