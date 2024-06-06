import { NextApiRequest, NextApiResponse } from 'next';

import instance from '@/utils/axios';
import passToken from '@/utils/passToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;

    await instance.delete(`/profile/parcels/${id}`, { ...passToken({ req }) });

    res.status(200).end();
  } catch (error) {
    res.status(400).end();
  }
}
