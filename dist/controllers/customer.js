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
exports.deleteCustomer = exports.updateCustomer = exports.getCustomerById = exports.getCustomers = exports.addCustomer = void 0;
const customer_1 = require("../models/customer");
const addCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const custInfo = req.body;
    const cust = customer_1.Customer.build({
        name: custInfo.name,
        orgName: custInfo.orgName,
        contactNo: custInfo.contactNo,
        email: custInfo.email,
        address: custInfo.address,
        address2: custInfo.address2,
        city: custInfo.city,
        state: custInfo.state,
        zipCode: custInfo.zipCode
    });
    const result = yield cust.save();
    return result;
});
exports.addCustomer = addCustomer;
const getCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerList = yield customer_1.Customer.find({});
    console.log(customerList);
    return customerList;
});
exports.getCustomers = getCustomers;
const getCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const custId = req.params.id;
    const customer = yield customer_1.Customer.findById({ _id: custId });
    return customer;
});
exports.getCustomerById = getCustomerById;
const updateCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const custId = req.params.id;
    const custInfo = req.body;
    const updatedCustomer = yield customer_1.Customer.findByIdAndUpdate({ _id: custId }, {
        name: custInfo.name,
        orgName: custInfo.orgName,
        contactNo: custInfo.contactNo,
        email: custInfo.email,
        address: custInfo.address,
        address2: custInfo.address2,
        city: custInfo.city,
        state: custInfo.state,
        zipCode: custInfo.zipCode
    });
    console.log(updatedCustomer);
    return updatedCustomer;
});
exports.updateCustomer = updateCustomer;
const deleteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const custId = req.params.id;
        const deleteResp = yield customer_1.Customer.findByIdAndDelete({ _id: custId });
        return deleteResp;
    }
    catch (err) {
        console.log('ERR', err);
    }
});
exports.deleteCustomer = deleteCustomer;
