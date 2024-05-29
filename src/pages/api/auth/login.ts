import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'cookies-next';

import instance from '@/utils/axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.body;

    const { data } = await instance.post('/login', {
      email,
      password,
    });

    setCookie('access_token', data.access_token, { req, res });

    res.status(200).end();
  } catch (error) {
    res.status(401).end();
  }
}
