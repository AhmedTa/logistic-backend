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
const customer_1 = require("../controllers/customer");
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
        app.post('/api/customer', (req, res) => __awaiter(this, void 0, void 0, function* () {
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
