"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VOScanResult {
    constructor(resultAll, resultFlag) {
        this.resultAll = resultAll;
        this.resultFlag = resultFlag;
    }
    static of(resultAll) {
        if (resultAll.alert_count > 0) {
            return new VOScanResult(resultAll, true);
        }
        return new VOScanResult(resultAll, false);
    }
    securityProblem() {
        return this.resultFlag;
    }
    extractScanList() {
        return this.resultAll.scan_list;
    }
    extractResultUrl() {
        return this.resultAll.scan_result_url;
    }
}
exports.VOScanResult = VOScanResult;
