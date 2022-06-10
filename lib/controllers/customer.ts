import { Customer } from '../models/customer';

const addCustomer = async (req, res) => {    
    const custInfo = req.body;
    const { contactNo } = req.body;
    console.log('check');
    try {
        
        let user = await Customer.findOne({ contactNo });
        if (user) {
            return res.status(400).json({errors: [{ msg: 'User already exists.'}]});
        }

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
            status: 'active'
        });
        const result = await cust.save();
        return result;
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }    
}

const getCustomers = async (req, res) => {
    try {
        const customerList = await Customer.find({});
        console.log(customerList);
        return customerList;
    } catch(err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
}

const getCustomerById = async (req, res) => {
    try {
        const custId = req.params.id;
        const customer = await Customer.findById({ _id: custId });    
        return customer
    } catch(err) {
        console.log(err);
        res.status(500).send('Server Error');
    }   
}

const updateCustomer = async (req, res) => {
    try {
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
        }, {new: true})
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
    } catch(error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
}

const deleteCustomer = async (req, res) => {
    let response;
    try {
        const custId = req.params.id;
        console.log('Customer to be deleted', custId);
        response = await Customer.findByIdAndDelete({ _id: custId });        
        return response;
    } catch(err) {
        console.log(err);
        res.status(500).send('Server Error');
    }    
}

export {
    addCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
}