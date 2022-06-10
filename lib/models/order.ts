import mongoose from "mongoose";

interface IOrder {
    customerId: String,
    startDate: Date,
    pickupAddress: String,
    endDate: Date,
    shippingAddress: String,
    weight: String,
    type: String,
    itemInfo: String,
    vehicleId: String,
    vehicleNo: String,
    driverId: String,
    driverNo: String,
    totalCharges: Number;
    advancePayment: Number,
    pendingPayment: Number,
    tripStatus: String,
    billingStatus: String 
}

interface orderModelInterface extends mongoose.Model<any>{
    build(attr: IOrder): any
}

const orderSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true
    },    
    startDate: {
        type: Date,
        required: true
    },    
    pickupAddress: {
        type: String,
        required: true
    },    
    endDate: {
        type: Date,
        required: true
    },    
    shippingAddress: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    itemInfo: {
        type: String,
        required: true
    },
    vehicleId: {
        type: String,
        required: true
    },
    vehicleNo: {
        type: String,
        required: true
    },
    driverId: {
        type: String,
        required: true
    },
    driverNo: {
        type: String,
        required: true
    },
    totalCharges: {
        type: Number,
        required: true
    },
    advancePayment: {
        type: Number,
        required: true
    },
    pendingPayment: {
        type: Number,
        required: true
    },
    tripStatus: {
        type: String,
        required: true
    },
    billingStatus: {
        type: String,
        required: true
    }
})

orderSchema.statics.build = (attr: IOrder) => {
    return new Order(attr);
}

const Order = mongoose.model<any, orderModelInterface>('Order', orderSchema);

export {Order};