import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import toast from 'react-hot-toast';

import withAuthServerSide from '@/utils/withAuthServerSide';

export const getServerSideProps = withAuthServerSide('/profile')(async () => {
  return {
    props: {},
  };
});

const VerifyEmail = () => {
  const router = useRouter();
  const { id, hash, expires, signature } = router.query;

  useEffect(() => {
    if (id && hash && expires && signature) {
      axios
        .get('/api/email/verify', {
          params: { id, hash, expires, signature },
        })
        .then(() => {
          toast.success('Почта подтверждена, выполните вход');
          router.replace('/login');
        })
        .catch((error) => {
          if (error.response.status === 403) {
            toast.error('Недействительная подпись');
          } else {
            toast.error('Ошибка при подтверждении почты');
          }
        });
    }
  }, [id, hash, expires, signature, router]);

  return null;
};

export default VerifyEmail;
