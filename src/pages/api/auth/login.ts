import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'cookies-next';

import instance from '@/utils/axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.body;

    const { data: loginData } = await instance.post('/login', {
      email,
      password,
    });

    const { data: userData } = await instance.get('/user', {
      headers: {
        Authorization: `Bearer ${loginData.access_token}`,
      },
    });

    if (!!userData.email_verified_at) {
      setCookie('access_token', loginData.access_token, { req, res });
      res.status(200).end();
    } else {
      setCookie('session_token', loginData.access_token, {
        req,
        res,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      });
      res.status(403).json({ id: userData.id });
    }
  } catch (error) {
    res.status(401).end();
  }
}
