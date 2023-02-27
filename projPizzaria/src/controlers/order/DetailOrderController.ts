import{Request, Response} from 'express'
import { DetailOrderService } from '../../services/order/DetailOrderService'

export class DetailOrderController{
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string;

        const detailOrderService = new DetailOrderService();
        const orders = await detailOrderService.execute({
            order_id
        })
        return res.json(orders);
    }
}


/*export class ListOrdersController {
    async handle(req: Request, res: Response) {
        const listOrdersService = new ListOrdersService();
        const orders = await listOrdersService.execute();
    
        return res.json(orders);
    }*/