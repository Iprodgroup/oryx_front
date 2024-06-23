import { NextApiRequest, NextApiResponse } from 'next';
import { deleteCookie } from 'cookies-next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, hash, expires, signature } = req.query;

  if (!id || !hash || !expires || !signature) {
    return res.status(400).json({ message: 'Invalid request parameters' });
  }

  try {
    await axios.get(`${process.env.LARAVEL_URL}/email/verify/${id}/${hash}`, {
      params: { expires, signature },
    });

    deleteCookie('session_token', { req, res });

    res.status(200).end();
  } catch (error: any) {
    return res.status(error.response.status).end();
  }
}
