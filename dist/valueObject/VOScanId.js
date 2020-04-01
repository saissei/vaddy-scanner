"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../controller/error");
class VOScanId {
    constructor(scanId) {
        this.scanId = scanId;
    }
    static of(scanId) {
        if (typeof scanId !== 'string') {
            error_1.ErrorSwitcher.handle('scanId is not found. Plaese check VAddy scanning status.');
            return;
        }
        return new VOScanId(scanId);
    }
    toString() {
        return this.scanId;
    }
}
exports.VOScanId = VOScanId;
