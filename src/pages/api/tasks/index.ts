import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return res.json('Getting data');
        case 'POST':
            return res.json('Save data');
        case 'PUT':
            return res.json('Modify data');
        case 'DELETE':
            return res.json('Delete data');
        default:
            return res.status(400).json('Invalid Method')
    }

}