import {Request, Response} from 'express'
import {listByCategoryService} from '../../services/product/listByCategoryService'

class listByCategoryController {
    async handle(req:Request, res: Response){
        const category_id = req.query.category_id as string;

        const listByCategory = new listByCategoryService();

        const products = await listByCategory.execute({
            category_id
        });
        return res.json(products);

    }
}


export {listByCategoryController}