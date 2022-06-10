import { Application, Request, Response } from "express";
import { addOrder, getOrders, getOrderById, updateOrder, deleteOrder } from "../controllers/order";

export class OrderRoutes {
    public route(app: Application) {

        app.get('/api/orders', async (req: Request, res: Response) => {
            let result = await getOrders(req, res);
            res.status(200).json({ message: 'GET Orders Successfull!!', data: result });
        });

        app.get('/api/order/:id', async (req: Request, res: Response) => {
            let result = await getOrderById(req, res);
            res.status(200).json({ message: 'GET Order Successfull!!', data: result });
        });

        app.post('/api/order', async (req: Request, res: Response) => {
            let result = await addOrder(req, res);
            res.status(200).json({ message: 'POST Order Successfull!!', data: result });
        });

        app.put('/api/order/:id', async (req: Request, res: Response) => {
            let result = await updateOrder(req, res);
            res.status(200).json({ message: 'UPDATE Order Successfull!!', data: result });
        });

        app.delete('/api/order/:id', async (req: Request, res: Response) => {
            let result = await deleteOrder(req, res);
            res.status(200).json({ message: 'DELETED Order Successfull!!', data: result });
        });
        
    }
}