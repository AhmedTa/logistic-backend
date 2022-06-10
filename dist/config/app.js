"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose_1 = require("mongoose");
const cors = require("cors");
const test_routes_1 = require("../routes/test_routes");
const common_routes_1 = require("../routes/common_routes");
const customer_1 = require("../routes/customer");
const vehicle_1 = require("../routes/vehicle");
const driver_1 = require("../routes/driver");
const order_1 = require("../routes/order");
const user_1 = require("../routes/user");
const auth_1 = require("../routes/auth");
class App {
    constructor() {
        this.test_routes = new test_routes_1.TestRoutes();
        this.common_routes = new common_routes_1.CommonRoutes();
        this.auth_routes = new auth_1.AuthRoutes();
        this.user_routes = new user_1.UserRoutes();
        this.customer_routes = new customer_1.CustomerRoutes();
        this.vehicle_routes = new vehicle_1.VehicleRoutes();
        this.driver_routes = new driver_1.DriverRoutes();
        this.order_routes = new order_1.OrderRoutes();
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
    connectDB() {
        mongoose_1.default.connect('mongodb+srv://testUser123:testuser123@justconnect.d5dy6.mongodb.net/JustConnect?retryWrites=true&w=majority', {
        // useCreateIndex: true,
        // useNewUrlParser: true,
        // useUnifiedTopology: true
        }, () => {
            console.log('connected to mongoDB');
        });
    }
    config() {
        // this.app.use(cors);
        const allowedOrigins = ['http://localhost:4200'];
        const options = {
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
exports.default = new App().app;
