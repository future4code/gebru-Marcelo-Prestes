import { DESTRUCTION } from 'dns';
import { Request, Response } from 'express';
import selectUsersFilterAndOrderAndPage from '../data/selectUsersFilterAndOrderAndPage';

export const getUsersFilterAndOrderAndPage = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const name: string = req.query.name as string || "%";
        const type: string = req.query.type as string || "%";
        const sort: string = req.query.sort as string || "name";
        const order: string = req.query.order as string || "DESC";
        const page: number = Number(req.query.page) && Number(req.query.page) > 0 ? Number(req.query.page) : 1;
        const size: number = Number(req.query.size) && Number(req.query.size) > 0 ? Number(req.query.size) : 10;

        const offset: number = size * (page - 1);

        const users = await selectUsersFilterAndOrderAndPage(name, type, sort, order, size, offset);

        res.status(200).send(users);

    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    };
};