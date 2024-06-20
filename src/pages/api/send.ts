import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: process.env.MAIL_ENCRYPTION === 'ssl',
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { subject, text } = req.body;

    const mailOptions = {
      from: process.env.MAIL_FROM_ADDRESS,
      to: process.env.MAIL_TO_ADDRESS,
      subject,
      text,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).end();
    } catch (error) {
      res.status(500).end();
    }
  } else {
    res.status(405).end();
  }
}
