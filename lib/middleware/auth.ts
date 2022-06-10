const jwt = require('jsonwebtoken');
import { config } from '../config/config';

module.exports = function(req, res, next) {
    // Get token from request header
    const token = req.header('x-auth-token');

    // Check if token is there?
    if (!token) {
        res.status(401).json({ msg: 'No token, authentication denied!' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, config.jwtSecret);

        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}