"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VOErrorHandler_1 = require("./VOErrorHandler");
class VOAuthKey {
    constructor(authKey) {
        this.authKey = authKey;
    }
    static of(authKey) {
        if (typeof authKey !== 'string') {
            const errorMessage = VOErrorHandler_1.VOError.typeError('authkey is not found or input data type is not string');
            console.error(errorMessage);
            return;
        }
        return new VOAuthKey(authKey);
    }
    toString() {
        return this.authKey;
    }
}
exports.VOAuthKey = VOAuthKey;
