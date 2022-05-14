"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutes = void 0;
class CommonRoutes {
    route(app) {
        // MISMATCH URL's
        app.all('*', (req, res) => {
            res.status(404).send({ error: true, message: 'Please check your url' });
        });
    }
}
exports.CommonRoutes = CommonRoutes;
