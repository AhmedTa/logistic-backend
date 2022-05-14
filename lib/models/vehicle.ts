import mongoose from "mongoose";

interface IVehicle {
    vehicleNo: String,
    type: String,
    driverName: String,
    driverContact: String,
    status: String,
    startDate: Date,        
} 

interface vehicleModelInterface extends mongoose.Model<any>{
    build(attr: IVehicle): any
}

const vehicleSchema = new mongoose.Schema({
    vehicleNo: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    driverName: {
        type: String,
        required: true
    },
    driverContact: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: false
    }
})

vehicleSchema.statics.build = (attr: IVehicle) => {
    return new Vehicle(attr);
}

const Vehicle = mongoose.model<any, vehicleModelInterface>('Vehicle', vehicleSchema);

// Customer.build({
//     name: 'Test',
//     orgName: 'Test Org',
//     contactNo: '1234567890',
//     email: 'test@test.com'
// })

export {Vehicle};