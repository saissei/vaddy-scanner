"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("../result");
const VOUser_1 = require("../../valueObject/VOUser");
const VOAuthKey_1 = require("../../valueObject/VOAuthKey");
const VOScanId_1 = require("../../valueObject/VOScanId");
const VORequestResultBody_1 = require("../../valueObject/VORequestResultBody");
const sinon_1 = __importDefault(require("sinon"));
const resultSample = {
    data: {
        'status': 'sampleStatus',
        'project_id': 'sampleProjectId',
        'scan_id': 'sampleScanId',
        'scan_count': 1,
        'alert_count': 0,
        'timezone': 'Asia/Tokyo',
        'start_time': 'YYYYMMDDTHH:MM:SSZ',
        'end_time': 'YYYYMMDDTHH:MM:SSZ',
        'scan_result_url': 'https://sampledomain.com',
        'complete': 1,
        'crawl_id': 123,
        'scan_list': ['sample', 'security', 'test']
    }
};
describe('Result nomal test', () => {
    it('test reference function', async () => {
        const user = 'demoUser';
        const auth_key = 'sampleKey';
        const scan_id = 'sampleScanId';
        const vouser = VOUser_1.VOUser.of(user);
        const voauth = VOAuthKey_1.VOAuthKey.of(auth_key);
        const voscan = VOScanId_1.VOScanId.of(scan_id);
        const stub = sinon_1.default.stub();
        result_1.Result.crawl = stub;
        stub.resolves(resultSample.data);
        const reqBody = VORequestResultBody_1.VORequestResultBody.of(vouser, voauth, voscan);
        const checkResult = await result_1.Result.reference(reqBody);
        expect(checkResult).toEqual(resultSample.data);
    });
    it('test reference function with error', async () => {
        const user = 'demoUser';
        const auth_key = 'sampleKey';
        const scan_id = 'sampleScanId';
        const vouser = VOUser_1.VOUser.of(user);
        const voauth = VOAuthKey_1.VOAuthKey.of(auth_key);
        const voscan = VOScanId_1.VOScanId.of(scan_id);
        const stub = sinon_1.default.stub();
        result_1.Result.crawl = stub;
        stub.resolves(undefined);
        const reqBody = VORequestResultBody_1.VORequestResultBody.of(vouser, voauth, voscan);
        const checkResult = await result_1.Result.reference(reqBody);
        expect(checkResult).toBeUndefined();
    });
});
