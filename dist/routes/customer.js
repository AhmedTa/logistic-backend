"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const { check, validationResult } = require('express-validator');
const customer_1 = require("../controllers/customer");
const auth = require('../middleware/auth');
class CustomerRoutes {
    route(app) {
        app.get('/api/customers', (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield (0, customer_1.getCustomers)(req, res);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        }));
        app.get('/api/customer/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield (0, customer_1.getCustomerById)(req, res);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        }));
        app.post('/api/customer', [
            check('name', 'Name is required').not().isEmpty(),
            check('orgName', 'Organization name is required').not().isEmpty(),
            check('contactNo', 'Please enter a valid phone number').isLength({ min: 10, max: 10 }),
            check('address', 'Address is required').not().isEmpty(),
            check('state', 'State is requires').not().isEmpty(),
            check('city', 'Please enter city name').not().isEmpty(),
            check('zipCode', 'Please enter valid pic code').isLength({ min: 6, max: 6 })
        ], (req, res) => __awaiter(this, void 0, void 0, function* () {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            let result = yield (0, customer_1.addCustomer)(req, res);
            res.status(200).json({ message: 'POST Customer Successfull!!', data: result });
        }));
        app.put('/api/customer/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield (0, customer_1.updateCustomer)(req, res);
            res.status(200).json({ message: 'GET Customers Successfull!!', data: result });
        }));
        app.delete('/api/customer/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield (0, customer_1.deleteCustomer)(req, res);
            res.status(200).json({ message: 'DELETED Customers Successfull!!', data: result });
        }));
    }
}
exports.CustomerRoutes = CustomerRoutes;
