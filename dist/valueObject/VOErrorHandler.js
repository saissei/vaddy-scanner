"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VOError {
    static typeError(message) {
        const error = new TypeError(message);
        return error;
    }
}
exports.VOError = VOError;
