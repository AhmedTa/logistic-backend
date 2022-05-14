import { Application, Request, Response } from "express";
import { addCustomer, getCustomers, getCustomerById, updateCustomer, deleteCustomer } from "../controllers/customer";

export class CustomerRoutes {
    public route(app: Application) {

        app.get('/api/customers', async (req: Request, res: Response) => {
            let result = await getCustomers(req, res);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        });

        app.get('/api/customer/:id', async (req: Request, res: Response) => {
            let result = await getCustomerById(req, res);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        });

        app.post('/api/customer', async (req: Request, res: Response) => {
            let result = await addCustomer(req, res);
            res.status(200).json({ message: 'POST Customer Successfull!!', data: result });
        });

        app.put('/api/customer/:id', async (req: Request, res: Response) => {
            let result = await updateCustomer(req, res);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        });

        app.delete('/api/customer/:id', async (req: Request, res: Response) => {
            let result = await deleteCustomer(req, res);
            res.status(200).json({ message: 'DELETED Customers Successfull!!', data: result });
        });
        
    }
}