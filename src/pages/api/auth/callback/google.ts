import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'cookies-next';

import instance from '@/utils/axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await instance.get('/login/google/callback', {
    params: {
      code: req.query.code,
    },
  });

  setCookie('access_token', data.token, { req, res });

  res.redirect('/profile');
}
