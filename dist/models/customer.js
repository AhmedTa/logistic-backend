"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const mongoose_1 = require("mongoose");
const customerSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    orgName: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});
customerSchema.statics.build = (attr) => {
    return new Customer(attr);
};
const Customer = mongoose_1.default.model('Customer', customerSchema);
exports.Customer = Customer;
