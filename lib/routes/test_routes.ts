import { Application, Request, Response } from "express";

export class TestRoutes {
    public route(app: Application) {

        app.get('/api/test', (req: Request, res: Response) => {
            res.status(200).json({ message: 'GET Request Successfull!!' });
        });

        app.post('/api/test', (req: Request, res: Response) => {
            res.status(200).json({ message: 'POST Request Successfull!!' });
        });
    }
}