"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const argsController_1 = require("../controller/argsController");
const VOUser_1 = require("../valueObject/VOUser");
const VOAuthKey_1 = require("../valueObject/VOAuthKey");
const VOProject_1 = require("../valueObject/VOProject");
const VOSenario_1 = require("../valueObject/VOSenario");
const VOScanBody_1 = require("../valueObject/VOScanBody");
const VORequestResultBody_1 = require("../valueObject/VORequestResultBody");
const VOScanId_1 = require("../valueObject/VOScanId");
const VOConfig_1 = require("../valueObject/VOConfig");
const VOScanResult_1 = require("../valueObject/VOScanResult");
const result_1 = require("../controller/result");
commander_1.default
    .option('-u, --user', 'VAddyのログインユーザーを入力してください')
    .option('-k, --authkey', 'VAddyのAPI_KEYを入力してください')
    .option('-p, --projectid', 'VAddyのProject_Idを入力してください')
    .option('-c, --crawlid', 'VAddyのCrawl＿Idを入力してください')
    .parse(process.argv);
console.info('process start.');
const optionCheck = argsController_1.ArgsController.check(commander_1.default);
if (!optionCheck) {
    const userConfig = VOConfig_1.VOConfig.load();
    if (userConfig === undefined) {
        console.error('VAddy config was not found');
        process.exit(1);
    }
    (async () => {
        console.info('load configuration .env');
        const scanBody = VOScanBody_1.VOScanBody.ofConfig(userConfig);
        console.info('Scanning start...');
        const crawler = await argsController_1.ArgsController.scanControll(scanBody);
        if (crawler === undefined) {
            process.exit(1);
        }
        const scanId = VOScanId_1.VOScanId.of(crawler);
        const resultBody = VORequestResultBody_1.VORequestResultBody.ofConfig(userConfig, scanId);
        const scanResult = await argsController_1.ArgsController.resultController(resultBody);
        const result = VOScanResult_1.VOScanResult.of(scanResult);
        result_1.Result.message(result);
        return;
    })();
}
if (optionCheck) {
    (async () => {
        const user = VOUser_1.VOUser.of(commander_1.default.user);
        const key = VOAuthKey_1.VOAuthKey.of(commander_1.default.authKey);
        const project = VOProject_1.VOProject.of(commander_1.default.projectid);
        if (user === undefined) {
            process.exit(1);
        }
        if (key === undefined) {
            process.exit(1);
        }
        if (project === undefined) {
            process.exit(1);
        }
        if (commander_1.default.crawlid !== undefined) {
            const crawl = VOSenario_1.VOSenario.of(commander_1.default.crawlid);
            if (crawl === undefined) {
                process.exit(1);
            }
            const scanBody = VOScanBody_1.VOScanBody.of(user, key, project, crawl);
            const crawler = await argsController_1.ArgsController.scanControll(scanBody);
            if (crawler === undefined) {
                process.exit(1);
            }
            const scanId = VOScanId_1.VOScanId.of(crawler);
            const resultBody = VORequestResultBody_1.VORequestResultBody.of(user, key, scanId);
            const scanResult = await argsController_1.ArgsController.resultController(resultBody);
            const result = VOScanResult_1.VOScanResult.of(scanResult);
            result_1.Result.message(result);
            return;
        }
        const scanBody = VOScanBody_1.VOScanBody.of(user, key, project);
        const crawler = await argsController_1.ArgsController.scanControll(scanBody);
        if (crawler === undefined) {
            process.exit(1);
        }
        const scanId = VOScanId_1.VOScanId.of(crawler);
        const resultBody = VORequestResultBody_1.VORequestResultBody.of(user, key, scanId);
        const scanResult = await argsController_1.ArgsController.resultController(resultBody);
        const result = VOScanResult_1.VOScanResult.of(scanResult);
        result_1.Result.message(result);
        return;
    })();
}
