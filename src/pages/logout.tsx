import { useEffect } from 'react';

import { useRouter } from 'next/router';
import axios from 'axios';
import toast from 'react-hot-toast';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    axios.post('/api/auth/logout').then((res) => {
      if (res.status === 200) {
        router.push('/login');
      } else {
        toast.error('Что-то пошло не так');
      }
    });
  }, [router]);

  return null;
};

export default Logout;
