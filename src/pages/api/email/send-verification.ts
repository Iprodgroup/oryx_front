import { NextApiRequest, NextApiResponse } from 'next';

import instance from '@/utils/axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body;

  try {
    await instance.post(
      '/email/verification-notification',
      { id },
      {
        headers: {
          Authorization: `Bearer ${req.cookies.session_token}`,
        },
      }
    );
    res.status(202).end();
  } catch (error: any) {
    res.status(error.response.status).end();
  }
}
