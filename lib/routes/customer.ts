import { Application, Request, Response } from "express";
const { check, validationResult } = require('express-validator');
import { addCustomer, getCustomers, getCustomerById, updateCustomer, deleteCustomer } from "../controllers/customer";
const auth = require('../middleware/auth');

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

        app.post('/api/customer', [
            check('name', 'Name is required').not().isEmpty(),
            check('orgName', 'Organization name is required').not().isEmpty(),
            check('contactNo', 'Please enter a valid phone number').isLength({ min: 10, max: 10 }),
            check('address', 'Address is required').not().isEmpty(),
            check('state', 'State is requires').not().isEmpty(),
            check('city', 'Please enter city name').not().isEmpty(),
            check('zipCode', 'Please enter valid pic code').isLength({ min: 6, max: 6 })
        ], async (req: Request, res: Response) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
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