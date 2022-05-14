import { Vehicle } from '../models/vehicle';

const addVehicle = async (req, res) => {    
    const vehicleInfo = req.body;
    const vehicle = Vehicle.build({
        vehicleNo: vehicleInfo.vehicleNo,
        type: vehicleInfo.type,
        driverName: vehicleInfo.driverName,
        driverContact: vehicleInfo.driverContact,
        status: vehicleInfo.status,
        startDate: new Date(), 
    });
    const result = await vehicle.save();
    return result;
}

const getVehicles = async (req, res) => {
    const vehicleList = await Vehicle.find({});
    console.log(vehicleList);
    return vehicleList;
}

const getVehicleById = async (req, res) => {    
    const vehicleId = req.params.id;
    const vehicle = await Vehicle.findById({ _id: vehicleId });    
    return vehicle
}

const updateVehicle = async (req, res) => {
    const vehicleId = req.params.id;
    const vehicleInfo = req.body;
    const updatedVehicle = await Vehicle.findByIdAndUpdate({ _id: vehicleId }, {
        vehicleNo: vehicleInfo.vehicleNo,
        type: vehicleInfo.type,
        driverName: vehicleInfo.driverName,
        driverContact: vehicleInfo.driverContact,
        status: vehicleInfo.status,
    });
    console.log(updatedVehicle);
    return updatedVehicle;
}

const deleteVehicle = async (req, res) => {
    let response;
    try {
        const vehicleId = req.params.id;
        response = await Vehicle.findByIdAndDelete({ _id: vehicleId });        
    } catch(err) {
        console.log('ERR', err);
        response = err
    }

    return response
}

export {
    addVehicle,
    getVehicles,
    getVehicleById,
    updateVehicle,
    deleteVehicle
}