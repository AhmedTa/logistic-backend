import { isObjectIdOrHexString } from 'mongoose';
import { Customer } from '../models/customer';

const addCustomer = async (req, res) => {    
    const custInfo = req.body;
    const cust = Customer.build({
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
    });
    const result = await cust.save();
    return result;
}

const getCustomers = async (req, res) => {
    const customerList = await Customer.find({});
    console.log(customerList);
    return customerList;
}

const getCustomerById = async (req, res) => {    
    const custId = req.params.id;
    const customer = await Customer.findById({ _id: custId });    
    return customer
}

const updateCustomer = async (req, res) => {
    const custId = req.params.id;
    const custInfo = req.body;
    const updatedCustomer = await Customer.findByIdAndUpdate({ _id: custId }, {
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
    });
    console.log(updatedCustomer);
    return updatedCustomer;
}

const deleteCustomer = async (req, res) => {
    let response;
    try {
        const custId = req.params.id;
        response = await Customer.findByIdAndDelete({ _id: custId });        
    } catch(err) {
        console.log('ERR', err);
        response = err
    }

    return response
}

export {
    addCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
}