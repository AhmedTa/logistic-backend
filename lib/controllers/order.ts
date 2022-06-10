import { isObjectIdOrHexString } from 'mongoose';
import { Order } from '../models/order';

const addOrder = async (req, res) => {    
    const orderInfo = req.body;
    console.log('order', orderInfo);
    const order = Order.build({
        customerId: orderInfo.customerId,
        startDate: orderInfo.startDate,
        pickupAddress: orderInfo.pickupAddress,
        endDate: orderInfo.endDate,
        shippingAddress: orderInfo.shippingAddress,
        weight: orderInfo.weight,
        type: orderInfo.type,
        itemInfo: orderInfo.itemInfo,
        vehicleId: orderInfo.vehicleId,
        vehicleNo: orderInfo.vehicleNo,
        driverId: orderInfo.driverId,
        driverNo: orderInfo.driverNo,
        totalCharges: orderInfo.totalCharges,
        advancePayment: orderInfo.advancePayment,
        pendingPayment: orderInfo.pendingPayment,
        tripStatus: orderInfo.tripStatus,
        billingStatus: orderInfo.billingStatus 
    });
    const result = await order.save();
    return result;
}

const getOrders = async (req, res) => {
    const orderList = await Order.find({});
    console.log(orderList);
    return orderList;
}

const getOrderById = async (req, res) => {    
    const orderId = req.params.id;
    const order = await Order.findById({ _id: orderId });    
    return order;
}

const updateOrder = async (req, res) => {
    const orderId = req.params.id;
    const orderInfo = req.body;
    const updatedOrder = await Order.findByIdAndUpdate({ _id: orderId }, {
        customerId: orderInfo.customerId,
        startDate: orderInfo.startDate,
        pickupAddress: orderInfo.pickupAddress,
        endDate: orderInfo.endDate,
        shippingAddress: orderInfo.shippingAddress,
        weight: orderInfo.weight,
        type: orderInfo.type,
        itemInfo: orderInfo.itemInfo,
        vehicleId: orderInfo.vehicleId,
        vehicleNo: orderInfo.vehicleNo,
        driverId: orderInfo.driverId,
        driverNo: orderInfo.driverNo,
        totalCharges: orderInfo.totalCharges,
        advancePayment: orderInfo.advancePayment,
        pendingPayment: orderInfo.pendingPayment,
        tripStatus: orderInfo.tripStatus,
        billingStatus: orderInfo.billingStatus 
    });
    console.log(updatedOrder);
    return updatedOrder;
}

const deleteOrder = async (req, res) => {
    let response;
    try {
        const orderId = req.params.id;
        response = await Order.findByIdAndDelete({ _id: orderId });        
    } catch(err) {
        console.log('ERR', err);
        response = err
    }

    return response
}

export {
    addOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder
}