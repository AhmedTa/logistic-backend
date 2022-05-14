import { Application, Request, Response } from "express";

export class CommonRoutes {
    public route(app: Application) {

        // MISMATCH URL's
        app.all('*', (req: Request, res: Response) => {
            res.status(404).send({ error: true, message: 'Please check your url' });
        });       
    }
}