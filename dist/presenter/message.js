"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const red = '\u001b[31m';
const green = '\u001b[32m';
const blue = '\u001b[34m';
const reset = '\u001b[0m';
class ConsoleMessage {
    static info(message) {
        console.info(blue + message);
        console.log(reset);
    }
    static success(message) {
        console.info(green + message);
        console.log(reset);
    }
    static error(message) {
        console.error(red + message);
        console.log(reset);
    }
}
exports.ConsoleMessage = ConsoleMessage;
