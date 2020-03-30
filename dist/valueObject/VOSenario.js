"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VOErrorHandler_1 = require("./VOErrorHandler");
const message_1 = require("../presenter/message");
class VOSenario {
    constructor(senarioId) {
        this.senarioId = senarioId;
    }
    static of(senarioId) {
        if (typeof senarioId !== 'number') {
            const errorMessage = VOErrorHandler_1.VOError.typeError('projectId is not found or input data type is not string');
            message_1.ConsoleMessage.error(errorMessage);
            return;
        }
        return new VOSenario(senarioId);
    }
    toNumber() {
        return this.senarioId;
    }
}
exports.VOSenario = VOSenario;
