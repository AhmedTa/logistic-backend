import { Application, Request, Response } from "express";
import { addVehicle, getVehicles, getVehicleById, updateVehicle, deleteVehicle } from "../controllers/vehicle";

export class VehicleRoutes {
    public route(app: Application) {

        app.get('/api/vehicles', async (req: Request, res: Response) => {
            let result = await getVehicles(req, res);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        });

        app.get('/api/vehicle/:id', async (req: Request, res: Response) => {
            let result = await getVehicleById(req, res);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        });

        app.post('/api/vehicle', async (req: Request, res: Response) => {
            let result = await addVehicle(req, res);
            res.status(200).json({ message: 'POST Customer Successfull!!', data: result });
        });

        app.put('/api/vehicle/:id', async (req: Request, res: Response) => {
            let result = await updateVehicle(req, res);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        });

        app.delete('/api/vehicle/:id', async (req: Request, res: Response) => {
            let result = await deleteVehicle(req, res);
            res.status(200).json({ message: 'DELETED Customers Successfull!!', data: result });
        });
        
    }
}