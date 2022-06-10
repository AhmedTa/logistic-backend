import { isObjectIdOrHexString } from 'mongoose';
import { Driver } from '../models/driver';

const addDriver = async (req, res) => {    
    const driverInfo = req.body;
    const driver = Driver.build({
        name: driverInfo.name,
        licenseId: driverInfo.licenseId,
        contactNo: driverInfo.contactNo,        
        address: driverInfo.address,
        address2: driverInfo.address2,
        city: driverInfo.city,
        state: driverInfo.state,
        zipCode: driverInfo.zipCode,
        status: driverInfo.status,
        experiance: driverInfo.experiance,
        relativeName: driverInfo.relativeName,
        relativeContact: driverInfo.relativeContact 
    });
    const result = await driver.save();
    return result;
}

const getDrivers = async (req, res) => {
    const driverList = await Driver.find({});
    console.log(driverList);
    return driverList;
}

const getDriverById = async (req, res) => {    
    const driverId = req.params.id;
    const driver = await Driver.findById({ _id: driverId });    
    return driver
}

const updateDriver = async (req, res) => {
    const driverId = req.params.id;
    const driverInfo = req.body;
    const updatedCustomer = await Driver.findByIdAndUpdate({ _id: driverId }, {
        name: driverInfo.name,
        orgName: driverInfo.orgName,
        contactNo: driverInfo.contactNo,
        email: driverInfo.email,
        address: driverInfo.address,
        address2: driverInfo.address2,
        city: driverInfo.city,
        state: driverInfo.state,
        zipCode: driverInfo.zipCode,
        status: driverInfo.status
    });
    console.log(updatedCustomer);
    return updatedCustomer;
}

const deleteDriver = async (req, res) => {
    let response;
    try {
        const driverId = req.params.id;
        response = await Driver.findByIdAndDelete({ _id: driverId });        
    } catch(err) {
        console.log('ERR', err);
        response = err
    }

    return response
}

export {
    addDriver,
    getDrivers,
    getDriverById,
    updateDriver,
    deleteDriver
}