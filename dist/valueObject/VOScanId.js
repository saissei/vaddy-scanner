"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VOScanId {
    constructor(scanId) {
        this.scanId = scanId;
    }
    static of(scanId) {
        return new VOScanId(scanId);
    }
    toString() {
        return this.scanId;
    }
}
exports.VOScanId = VOScanId;
