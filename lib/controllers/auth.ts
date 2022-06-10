const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import { config } from '../config/config';
import { User } from '../models/user';

export const getUser = async (req, res) => {
    console.log('REQUEST', req);
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
}

export const userLogin = async (req, res) => {
    console.log('LOGIN REQ', req.body);
    const errors = validationResult(req);
    let token;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({errors: [{ msg: 'Invalid Credential.'}]});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({errors: [{ msg: 'Invalid Credential.'}]});
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        token = jwt.sign(payload, config.jwtSecret, { expiresIn: 360000 });
        return { token };
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }    

}

