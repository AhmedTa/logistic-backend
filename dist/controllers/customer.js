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
    const { contactNo } = req.body;
    console.log('check');
    try {
        let user = yield customer_1.Customer.findOne({ contactNo });
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists.' }] });
        }
        const cust = customer_1.Customer.build({
            name: custInfo.name,
            orgName: custInfo.orgName,
            contactNo: custInfo.contactNo,
            email: custInfo.email,
            address: custInfo.address,
            address2: custInfo.address2,
            city: custInfo.city,
            state: custInfo.state,
            zipCode: custInfo.zipCode,
            status: 'active'
        });
        const result = yield cust.save();
        return result;
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});
exports.addCustomer = addCustomer;
const getCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customerList = yield customer_1.Customer.find({});
        console.log(customerList);
        return customerList;
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});
exports.getCustomers = getCustomers;
const getCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const custId = req.params.id;
        const customer = yield customer_1.Customer.findById({ _id: custId });
        return customer;
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});
exports.getCustomerById = getCustomerById;
const updateCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
            zipCode: custInfo.zipCode,
            status: custInfo.status
        }, { new: true })
            .then(customer => {
            if (!customer) {
                return res.status(404).send({
                    message: "Contact not found with id " + custId
                });
            }
            console.log(updatedCustomer);
            return updatedCustomer;
        }).catch(err => {
            return res.status(500).send({
                message: "Error updating note with id " + custId
            });
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});
exports.updateCustomer = updateCustomer;
const deleteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let response;
    try {
        const custId = req.params.id;
        console.log('Customer to be deleted', custId);
        response = yield customer_1.Customer.findByIdAndDelete({ _id: custId });
        return response;
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});
exports.deleteCustomer = deleteCustomer;
