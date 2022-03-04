/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../../utils/postgres";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body, query: { id } } = req;

    switch (method) {
        case 'GET':
            try {
                const taskById = await conn.query('SELECT * FROM tasks WHERE id = $1',
                    [id]);
                if (taskById.rows.length === 0)
                    return res.status(400).json({ message: 'task not found' });
                return res.status(200).json(taskById.rows);
            } catch (error: any) {
                return res.status(500).json({ error: error.message });
            }
        case 'PUT':
            const { title, description } = body;
            try {
                const updatedTask = await conn.query('UPDATE tasks SET title = $1, description = $2 WHERE id = $3', [title, description, id]);

                if (updatedTask.rowCount === 0)
                    return res.status(400).json({ message: 'Task not found' });
                return res.status(204).send('');
            } catch (error: any) {
                return res.status(500).json({ error: error.message });
            }
        case 'DELETE':
            try {
                const response = await conn.query('DELETE FROM tasks WHERE id = $1', [id]);
                if (response.rowCount === 0)
                    return res.status(400).json({ message: 'Task not found' });
                return res.status(200).send('');
            } catch (error: any) {
                return res.status(500).json({ error: error.message });
            }
        default:
            return res.status(400).json('Method not allowed');
    }
}