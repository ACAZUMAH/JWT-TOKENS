"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = exports.createAccessToken = void 0;
require("dotenv").config();
const http_errors_1 = __importDefault(require("http-errors"));
const jsonwebtoken_1 = require("jsonwebtoken");
const createAccessToken = (userId) => {
    const payload = { _id: userId };
    return (0, jsonwebtoken_1.sign)(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1d",
    });
};
exports.createAccessToken = createAccessToken;
const verifyAccessToken = (_req, _res, next) => {
    const authHeader = _req.headers.authorization;
    if (!authHeader)
        return http_errors_1.default.Unauthorized('Access Denied');
    const token = authHeader.split(" ")[1];
    if (!token)
        return http_errors_1.default.Unauthorized('Access Denied');
    (0, jsonwebtoken_1.verify)(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err)
            return http_errors_1.default.Unauthorized('Access Denied');
        _req.body.userId = decoded._id;
        next();
    });
};
exports.verifyAccessToken = verifyAccessToken;
