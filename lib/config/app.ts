import * as express from 'express';
import * as bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as cors from 'cors';

import { TestRoutes } from '../routes/test_routes';
import { CommonRoutes } from '../routes/common_routes';
import { CustomerRoutes } from '../routes/customer';
import { VehicleRoutes } from '../routes/vehicle';
import { DriverRoutes } from '../routes/driver';
import { OrderRoutes } from '../routes/order';
import { UserRoutes } from '../routes/user';
import { AuthRoutes } from '../routes/auth';

class App {
    public app: express.Application;
    private test_routes: TestRoutes = new TestRoutes();
    private common_routes: CommonRoutes = new CommonRoutes();
    private auth_routes: AuthRoutes = new AuthRoutes();
    private user_routes: UserRoutes = new UserRoutes();
    private customer_routes: CustomerRoutes = new CustomerRoutes();
    private vehicle_routes: VehicleRoutes = new VehicleRoutes();
    private driver_routes: DriverRoutes = new DriverRoutes();
    private order_routes: OrderRoutes = new OrderRoutes();

    constructor() {
        this.app = express();        
        this.config();
        this.connectDB();        
        this.auth_routes.route(this.app);
        this.user_routes.route(this.app);
        this.customer_routes.route(this.app);
        this.vehicle_routes.route(this.app);
        this.driver_routes.route(this.app);
        this.order_routes.route(this.app);
        this.test_routes.route(this.app);
        this.common_routes.route(this.app);                
    }

    private connectDB() {
        mongoose.connect('mongodb+srv://testUser123:testuser123@justconnect.d5dy6.mongodb.net/JustConnect?retryWrites=true&w=majority', {
            // useCreateIndex: true,
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        }, () => {
            console.log('connected to mongoDB')
        });
    }

    private config(): void {
        // this.app.use(cors);
        
        const allowedOrigins = ['http://localhost:4200'];        
        const options: cors.CorsOptions = {
            origin: allowedOrigins
        };
        this.app.use(cors(options));
        this.app.use(express.json());
        // support application/json type post data
        this.app.use(bodyParser.json());        
        //support application/x-www-form-urlencoded post data
         this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;