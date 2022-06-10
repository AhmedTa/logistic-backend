
const auth = require('../middleware/auth');
import { getUser, userLogin } from '../controllers/auth';
const { check } = require('express-validator');


import { Application, Request, Response } from "express";

export class AuthRoutes {
    public route(app: Application) {
        app.get('/api/user', auth, async (req: Request, res: Response) => {
            let result = await getUser(req, res);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        });

        app.post('/api/login', [
            check('email', 'Please enter a valid email').isEmail(),
            check('password', 'Password is required').exists()
        ], async (req: Request, res: Response) => {
            let result = await userLogin(req, res);
            console.log('RES', result);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        });
    }
}