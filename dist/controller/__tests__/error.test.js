"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../error");
const sinon_1 = __importDefault(require("sinon"));
describe('ErrorSwitcher Normal', () => {
    let exit;
    let logger;
    beforeEach(() => {
        exit = sinon_1.default.stub(process, 'exit');
        logger = sinon_1.default.stub(console, 'error');
    });
    afterEach(() => {
        exit.restore();
        logger.restore();
    });
    it('handler test', () => {
        error_1.ErrorSwitcher.handle('test');
        expect(exit.calledOnce).toBeTruthy();
        expect(logger.calledOnce).toBeTruthy();
    });
});
