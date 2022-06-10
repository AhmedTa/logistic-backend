import mongoose from "mongoose";

interface IDriver {
    name: String,
    licenseId: String,
    contactNo: String,
    address: String,
    address2?: String,
    city: String,
    state: String,
    zipCode: String,
    status: String,
    experiance: String,
    relativeName?: String,
    relativeContact?: String 
} 

interface driverModelInterface extends mongoose.Model<any>{
    build(attr: IDriver): any
}

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    licenseId: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
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
    },
    experiance: {
        type: String,
        required: true
    },
    relativeName: {
        type: String,
        required: true
    },    
    relativeContact: {
        type: String
    } 
})

driverSchema.statics.build = (attr: IDriver) => {
    return new Driver(attr);
}

const Driver = mongoose.model<any, driverModelInterface>('Driver', driverSchema);

// Customer.build({
//     name: 'Test',
//     orgName: 'Test Org',
//     contactNo: '1234567890',
//     email: 'test@test.com'
// })

export {Driver};