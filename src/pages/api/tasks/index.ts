import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../../utils/postgres";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req;

    switch (method) {
        case 'GET':
            try {
                const tasks = await conn.query('SELECT * FROM tasks');
                return res.status(200).json(tasks.rows);
            } catch (error: any) {
                return res.status(500).json({error: error.message});
            }
        case 'POST':
            const { title, description } = body;
            try {
                const task = await conn.query('INSERT INTO tasks(title, description) VALUES($1, $2) RETURNING *', [title, description]);
                return res.status(201).json(task.rows[0]);
            } catch (error: any) {
                return res.status(500).json({error: error.message});
            }
        default:
            return res.status(400).json('Invalid Method')
    }

}