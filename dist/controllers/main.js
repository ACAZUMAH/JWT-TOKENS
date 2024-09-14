"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboard = exports.login = void 0;
const auth_1 = require("../middleware/auth");
const express_validator_1 = require("express-validator");
const http_errors_1 = __importDefault(require("http-errors"));
const login = async (_req, res) => {
    const { username, password } = _req.body;
    const errors = (0, express_validator_1.validationResult)(_req);
    if (!errors.isEmpty())
        throw http_errors_1.default.BadRequest(errors.array()[0].msg);
    const token = (0, auth_1.createAccessToken)(username);
    res.json({ msg: 'user logged in', token });
};
exports.login = login;
const dashboard = async (_req, res) => {
    const token = _req.body.userId;
    const num = Math.floor(Math.random() * 100);
    res.json({ msg: `Hello ${token}`, secret: `this is your authorized data ${num}` });
};
exports.dashboard = dashboard;
