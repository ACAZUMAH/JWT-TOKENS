"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const CustomAPIError = require('../errors/custom-error')
const http_errors_1 = __importDefault(require("http-errors"));
const errorHandlerMiddleware = (err, _req, _res, _next) => {
    if (http_errors_1.default.isHttpError(err)) {
        return _res.status(err.statusCode).send({ errors: [{ msg: err.message }] });
    }
    return _res.status(500).json({ errors: [{ msg: 'Something went wrong try again later' }] });
};
exports.default = errorHandlerMiddleware;
