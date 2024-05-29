import { NextApiRequest, NextApiResponse } from 'next';

import instance from '@/utils/axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await instance.post('/register', req.body);

    res.status(201).end();
  } catch (error) {
    res.status(422).end();
  }
}
