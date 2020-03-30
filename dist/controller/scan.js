"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Scan {
    static async start(scanBody) {
        try {
            const url = 'https://api.vaddy.net/v2/scan';
            const body = scanBody.toJson();
            const scan = await axios_1.default.post(url, body);
            const response = scan.data;
            return response.scan_id;
        }
        catch (err) {
            console.error('error happened at start scan');
            switch (err.response.status) {
                case '400': {
                    console.error(`error: ${err.response.data.error_message}`);
                    return;
                }
                case '401': {
                    console.error('error: authenticate error');
                    return;
                }
                default: {
                    console.error(err);
                    return;
                }
            }
        }
    }
}
exports.Scan = Scan;
