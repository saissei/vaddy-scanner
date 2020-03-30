"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const red = '\u001b[31m';
const green = '\u001b[32m';
const blue = '\u001b[34m';
class ConsoleMessage {
    static info(message) {
        console.info(blue + message);
    }
    static success(message) {
        console.info(green + message);
    }
    static error(message) {
        console.error(red + message);
    }
}
exports.ConsoleMessage = ConsoleMessage;
