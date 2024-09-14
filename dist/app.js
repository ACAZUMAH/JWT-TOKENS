"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require('express-async-errors');
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const main_1 = __importDefault(require("./routes/main"));
const express_1 = __importDefault(require("express"));
const notFoundMiddleware = (_req, _res) => _res.status(404).json({ erors: [{ message: 'Route not Found' }] });
const start = async () => {
    try {
        const app = (0, express_1.default)();
        app.use(express_1.default.static('./public'));
        app.use(express_1.default.json());
        app.use('/api/v1', main_1.default);
        app.use(notFoundMiddleware);
        app.use(error_handler_1.default);
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    }
    catch (error) {
        console.log(error);
    }
};
start();
