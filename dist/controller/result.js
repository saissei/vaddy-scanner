"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Result {
    static async reference(requestBody) {
        const reqBody = requestBody.toQuery();
        const scanResult = await this.crawl(reqBody);
        if (scanResult === undefined) {
            return;
        }
        return scanResult;
    }
    static async crawl(reqBody) {
        try {
            const url = `https://api.vaddy.net/v2/scan/result?${reqBody}`;
            const result = await axios_1.default.get(url);
            const status = result.data.status;
            if (status === 'scanning') {
                return this.crawl(reqBody);
            }
            if (status === 'canceled') {
                console.error('scanning status is canceled');
                return;
            }
            if (status === 'finish') {
                return result.data;
            }
            return;
        }
        catch (err) {
            console.error('error happened at get scan result');
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
    static message(result) {
        const alert = result.securityProblem();
        if (alert) {
            console.error('Vulnerability detected');
            console.error(result.extractResultUrl);
            return process.exit(1);
        }
        console.info('No vulnerabilities detected');
        return process.exit(0);
    }
}
exports.Result = Result;
