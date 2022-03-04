// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { conn } from '../../utils/postgres';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {

  const response = await conn.query('SELECT * from tasks');
  return res.json({ message: 'pong', response:  response.rows});
}
