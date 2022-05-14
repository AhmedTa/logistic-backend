"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRoutes = void 0;
class TestRoutes {
    route(app) {
        app.get('/api/test', (req, res) => {
            res.status(200).json({ message: 'GET Request Successfull!!' });
        });
        app.post('/api/test', (req, res) => {
            res.status(200).json({ message: 'POST Request Successfull!!' });
        });
    }
}
exports.TestRoutes = TestRoutes;
