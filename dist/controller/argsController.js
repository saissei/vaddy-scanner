"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scan_1 = require("./scan");
const result_1 = require("./result");
class ArgsController {
    static check(options) {
        if (options.user === undefined) {
            return false;
        }
        if (options.authkey === undefined) {
            return false;
        }
        if (options.projectId === undefined) {
            return false;
        }
        return true;
    }
    static async scanControll(scanBody) {
        const scanResult = await scan_1.Scan.start(scanBody);
        if (scanResult === undefined) {
            return process.exit(1);
        }
        return scanResult;
    }
    static async resultController(resultBody) {
        const scanResult = await result_1.Result.reference(resultBody);
        if (scanResult === undefined) {
            return process.exit(1);
        }
        return scanResult;
    }
}
exports.ArgsController = ArgsController;
