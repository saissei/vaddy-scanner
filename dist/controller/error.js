"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VOErrorHandler_1 = require("../valueObject/VOErrorHandler");
const message_1 = require("../presenter/message");
class ErrorSwitcher {
    static handle(message) {
        const errMessage = VOErrorHandler_1.VOError.typeError(message);
        message_1.ConsoleMessage.error(errMessage);
        process.exit(1);
    }
}
exports.ErrorSwitcher = ErrorSwitcher;
