"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VOErrorHandler_1 = require("./VOErrorHandler");
class VOUser {
    constructor(userId) {
        this.userId = userId;
    }
    static of(userId) {
        if (typeof userId !== 'string') {
            const errorMessage = VOErrorHandler_1.VOError.typeError('authkey is not found or input data type is not string');
            console.error(errorMessage);
            return;
        }
        return new VOUser(userId);
    }
    toString() {
        return this.userId;
    }
}
exports.VOUser = VOUser;
