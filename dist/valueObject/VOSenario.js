"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../controller/error");
class VOSenario {
    constructor(senarioId) {
        this.senarioId = senarioId;
    }
    static of(senarioId) {
        if (typeof senarioId !== 'string') {
            error_1.ErrorSwitcher.handle('senarioId is not found or input data type is not string');
            return;
        }
        return new VOSenario(senarioId);
    }
    toString() {
        return this.senarioId;
    }
    toNumber() {
        return Number(this.senarioId);
    }
}
exports.VOSenario = VOSenario;
