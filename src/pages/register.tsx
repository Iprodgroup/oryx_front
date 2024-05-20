import { useEffect } from 'react';
import styles from '@/styles/Login.module.sass';

import Link from 'next/link';

const Register = () => {
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
          <form>
            <input type='email' placeholder='Электронная почта' required />
            <input type='password' placeholder='Пароль' required />
            <input type='password' placeholder='Подтвердите пароль' required />
            <input type='number' placeholder='+7 (___) ___-__-__' required />
            <div className={styles.confirm}>
              <input type='checkbox' id='pp' required />
              <label htmlFor='pp'>
                Я принимаю условия{' '}
                <Link href='/privacy-policy'>пользовательского соглашения</Link>
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
