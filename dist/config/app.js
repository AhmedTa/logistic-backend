"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose_1 = require("mongoose");
const test_routes_1 = require("../routes/test_routes");
const common_routes_1 = require("../routes/common_routes");
const customer_1 = require("../routes/customer");
class App {
    constructor() {
        this.test_routes = new test_routes_1.TestRoutes();
        this.common_routes = new common_routes_1.CommonRoutes();
        this.customer_routes = new customer_1.CustomerRoutes();
        this.app = express();
        this.config();
        this.connectDB();
        this.customer_routes.route(this.app);
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
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
