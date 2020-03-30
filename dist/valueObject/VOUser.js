"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VOErrorHandler_1 = require("./VOErrorHandler");
const message_1 = require("../presenter/message");
class VOUser {
    constructor(userId) {
        this.userId = userId;
    }
    static of(userId) {
        if (typeof userId !== 'string') {
            const errorMessage = VOErrorHandler_1.VOError.typeError('authkey is not found or input data type is not string');
            message_1.ConsoleMessage.error(errorMessage);
            return;
        }
        return new VOUser(userId);
    }
    toString() {
        return this.userId;
    }
}
exports.VOUser = VOUser;
