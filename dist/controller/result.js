"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const message_1 = require("../presenter/message");
const sleep = (msec) => new Promise(resolve => setTimeout(resolve, msec));
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
                await sleep(5000);
                return this.crawl(reqBody);
            }
            if (status === 'canceled') {
                message_1.ConsoleMessage.error('scanning status is canceled');
                return;
            }
            if (status === 'finish') {
                return result.data;
            }
            return;
        }
        catch (err) {
            message_1.ConsoleMessage.error('error happened at get scan result');
            switch (err.response.status) {
                case '400': {
                    message_1.ConsoleMessage.error(`error: ${err.response.data.error_message}`);
                    return;
                }
                case '401': {
                    message_1.ConsoleMessage.error('error: authenticate error');
                    return;
                }
                default: {
                    message_1.ConsoleMessage.error(err);
                    return;
                }
            }
        }
    }
    static message(result) {
        const alert = result.securityProblem();
        if (alert) {
            message_1.ConsoleMessage.error('Vulnerability detected');
            message_1.ConsoleMessage.error(result.extractResultUrl());
            return process.exit(1);
        }
        message_1.ConsoleMessage.success('Success: No vulnerabilities detected');
        return process.exit(0);
    }
}
exports.Result = Result;
