"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../controller/error");
class VOUser {
    constructor(userId) {
        this.userId = userId;
    }
    static of(userId) {
        if (typeof userId !== 'string') {
            error_1.ErrorSwitcher.handle('authkey is not found or input data type is not string');
            return;
        }
        return new VOUser(userId);
    }
    toString() {
        return this.userId;
    }
}
exports.VOUser = VOUser;
