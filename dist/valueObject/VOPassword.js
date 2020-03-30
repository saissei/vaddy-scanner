"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VOErrorHandler_1 = require("./VOErrorHandler");
class VOPassword {
    constructor(password) {
        this.password = password;
    }
    static of(password) {
        if (typeof password !== 'string') {
            const errorMessage = VOErrorHandler_1.VOError.typeError('password is not found or input data type is not string');
            console.error(errorMessage);
            return;
        }
        return new VOPassword(password);
    }
    toString() {
        return this.password;
    }
}
exports.VOPassword = VOPassword;
