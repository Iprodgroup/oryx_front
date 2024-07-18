import { NextRouter } from 'next/router';

import instance from './axios';

const handleGoogle = (router: NextRouter) => {
  instance.get('/login/google').then((res) => {
    router.replace(res.data);
  });
};

export default handleGoogle;
