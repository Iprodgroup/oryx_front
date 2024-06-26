import { useEffect } from 'react';

import axios from 'axios';
import toast from 'react-hot-toast';

const Logout = () => {
  useEffect(() => {
    axios.post('/api/auth/logout').then((res) => {
      if (res.status === 200) {
        window.location.replace('/login');
      } else {
        toast.error('Что-то пошло не так');
      }
    });
  }, []);

  return null;
};

export default Logout;
