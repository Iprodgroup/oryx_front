import { createPortal } from 'react-dom';
import styles from '@/styles/Login.module.sass';

import { useIsClient } from 'usehooks-ts';
import Link from 'next/link';

import LockIcon from '@/components/icons/Lock';

const Login = () => {
  const isClient = useIsClient();

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2>ВОЙТИ В ЛИЧНЫЙ КАБИНЕТ</h2>
          <p>Чтобы войти введите ваш email и пароль</p>
          <form>
            <input type='email' placeholder='Электронная почта' required />
            <input type='password' placeholder='Пароль' required />
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
