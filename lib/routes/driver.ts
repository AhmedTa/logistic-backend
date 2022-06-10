import { Application, Request, Response } from "express";
import { addDriver, getDrivers, getDriverById, updateDriver, deleteDriver } from "../controllers/driver";

export class DriverRoutes {
    public route(app: Application) {

        app.get('/api/drivers', async (req: Request, res: Response) => {
            let result = await getDrivers(req, res);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        });

        app.get('/api/driver/:id', async (req: Request, res: Response) => {
            let result = await getDriverById(req, res);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        });

        app.post('/api/driver', async (req: Request, res: Response) => {
            let result = await addDriver(req, res);
            res.status(200).json({ message: 'POST Customer Successfull!!', data: result });
        });

        app.put('/api/driver/:id', async (req: Request, res: Response) => {
            let result = await updateDriver(req, res);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        });

        app.delete('/api/driver/:id', async (req: Request, res: Response) => {
            let result = await deleteDriver(req, res);
            res.status(200).json({ message: 'DELETED Customers Successfull!!', data: result });
        });
        
    }
}