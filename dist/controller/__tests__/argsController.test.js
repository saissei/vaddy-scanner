"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argsController_1 = require("../argsController");
describe('tests command line options of Normal', () => {
    it('option complete', () => {
        const options = {
            user: 'demoUser',
            authkey: 'sampleApiKey',
            projectid: 'sampleProjectId',
            crawlid: 'sampleSenarioId'
        };
        const checkResult = argsController_1.ArgsController.check(options);
        expect(checkResult).toBeTruthy();
    });
    it('without user option', () => {
        const options = {
            authkey: 'sampleApiKey',
            projectid: 'sampleProjectId',
            crawlid: 'sampleSenarioId'
        };
        const checkResult = argsController_1.ArgsController.check(options);
        expect(checkResult).toBeFalsy();
    });
    it('without apiKey option', () => {
        const options = {
            user: 'demoUser',
            projectid: 'sampleProjectId',
            crawlid: 'sampleSenarioId'
        };
        const checkResult = argsController_1.ArgsController.check(options);
        expect(checkResult).toBeFalsy();
    });
    it('without projectid option', () => {
        const options = {
            user: 'demoUser',
            authkey: 'sampleApiKey',
            crawlid: 'sampleSenarioId'
        };
        const checkResult = argsController_1.ArgsController.check(options);
        expect(checkResult).toBeFalsy();
    });
});
