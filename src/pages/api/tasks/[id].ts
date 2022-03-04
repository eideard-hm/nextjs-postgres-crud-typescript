/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return res.json('Getting a unique task');
        case 'PUT':
            return res.json('Modify a unique task');
        case 'DELETE':
            return res.json('Delete a task');
        default:
            return res.status(400).json('Method not allowed');
    }
}