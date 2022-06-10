import { Application, Request, Response } from "express";
const { check } = require('express-validator/check');
import { createUser } from '../controllers/user';

export class UserRoutes {
    public route(app: Application) {
        app.post('/api/register', [
            check('name', 'Name is required').not().isEmpty(),
            check('email', 'Please enter a valid email').isEmail(),
            check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
        ], async (req: Request, res: Response) => {
            let result = await createUser(req, res);
            console.log('REG', result);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        });
    }
}