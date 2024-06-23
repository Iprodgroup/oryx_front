import { useEffect } from 'react';
import styles from '@/styles/email/EmailNotif.module.sass';

import { useRouter } from 'next/router';
import axios from 'axios';
import toast from 'react-hot-toast';

import withAuthServerSide from '@/utils/withAuthServerSide';
import instance from '@/utils/axios';

export const getServerSideProps = withAuthServerSide('/profile')(
  async (context) => {
    const sessionToken = context.req.cookies.session_token;

    if (!sessionToken) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    let userData;

    try {
      const response = await instance.get('/user', {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });
      userData = response.data;
    } catch (error) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    if (!userData?.id) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  }
);

const EmailNotify = () => {
  const router = useRouter();

  const resend = async () => {
    const loadingToastId = toast.loading('Загрузка...');

    await axios.post('/api/email/send-verification', { id: router.query.id });

    toast.dismiss(loadingToastId);
    toast.success('Ссылка для подтверждения отправлена');
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
        <div className={styles.card}>
          <h2>Подтвердите свой адрес электронной почты</h2>
          <hr />
          <p>
            Прежде чем продолжить, проверьте свою электронную почту на наличие
            ссылки для подтверждения.
          </p>
          <div className={styles.flex}>
            <p>Если вы не получили письмо,</p>
            <button onClick={resend}>
              нажмите здесь, чтобы запросить другой.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailNotify;
