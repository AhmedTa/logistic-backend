import mongoose from "mongoose";

interface ICustomer {
    name: String,
    orgName: String,
    contactNo: String,
    email?: String,
    address: String,
    address2?: String,
    city: String,
    state: String,
    zipCode: String,
    status: String
} 

interface customerModelInterface extends mongoose.Model<any>{
    build(attr: ICustomer): any
}

const customerSchema = new mongoose.Schema({
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
})

customerSchema.statics.build = (attr: ICustomer) => {
    return new Customer(attr);
}

const Customer = mongoose.model<any, customerModelInterface>('Customer', customerSchema);

// Customer.build({
//     name: 'Test',
//     orgName: 'Test Org',
//     contactNo: '1234567890',
//     email: 'test@test.com'
// })

export {Customer};