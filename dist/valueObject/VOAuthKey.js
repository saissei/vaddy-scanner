"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../controller/error");
class VOAuthKey {
    constructor(authKey) {
        this.authKey = authKey;
    }
    static of(authKey) {
        if (typeof authKey !== 'string') {
            error_1.ErrorSwitcher.handle('authkey is not found or input data type is not string');
            return;
        }
        return new VOAuthKey(authKey);
    }
    toString() {
        return this.authKey;
    }
}
exports.VOAuthKey = VOAuthKey;
