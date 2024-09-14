"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoginInfo = void 0;
exports.validateLoginInfo = {
    username: {
        isString: true,
        notEmpty: true,
        errorMessage: 'Username should not be empty'
    },
    password: {
        isString: true,
        notEmpty: true,
        errorMessage: 'Password should not be empty'
    }
};
