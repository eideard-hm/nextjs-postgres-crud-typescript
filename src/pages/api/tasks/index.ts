import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../../utils/postgres";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req;

    switch (method) {
        case 'GET':
            return res.json('Getting data');
        case 'POST':
            const { title, description } = body;
            const response = await conn.query('INSERT INTO tasks(title, description) VALUES($1, $2) RETURNING *', [title, description]);
            return res.status(201).json(response.rows[0]);
        case 'PUT':
            return res.json('Modify data');
        case 'DELETE':
            return res.json('Delete data');
        default:
            return res.status(400).json('Invalid Method')
    }

}