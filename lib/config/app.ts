import * as express from 'express';
import * as bodyParser from 'body-parser';
import mongoose from 'mongoose';

import { TestRoutes } from '../routes/test_routes';
import { CommonRoutes } from '../routes/common_routes';
import { CustomerRoutes } from '../routes/customer';
import { VehicleRoutes } from '../routes/vehicle';

class App {
    public app: express.Application;
    private test_routes: TestRoutes = new TestRoutes();
    private common_routes: CommonRoutes = new CommonRoutes();
    private customer_routes: CustomerRoutes = new CustomerRoutes();
    private vehicle_routes: VehicleRoutes = new VehicleRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.connectDB();
        this.customer_routes.route(this.app);
        this.vehicle_routes.route(this.app);
        this.test_routes.route(this.app);
        this.common_routes.route(this.app);        
    }

    private connectDB() {
        mongoose.connect('', {
            // useCreateIndex: true,
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        }, () => {
            console.log('connected to mongoDB')
        });
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
         this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;