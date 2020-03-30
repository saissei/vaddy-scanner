
import commander from 'commander';
import { ArgsController } from '../controller/argsController';

import { VOUser } from '../valueObject/VOUser';
import { VOAuthKey } from '../valueObject/VOAuthKey';
import { VOProject } from '../valueObject/VOProject';
import { VOSenario } from '../valueObject/VOSenario';
import { VOScanBody } from '../valueObject/VOScanBody';
import { VORequestResultBody } from '../valueObject/VORequestResultBody';
import { VOScanId } from '../valueObject/VOScanId';
import { VOConfig } from '../valueObject/VOConfig';
import { VOScanResult } from '../valueObject/VOScanResult';
import { Result } from '../controller/result';

commander
  .option('-u, --user', 'VAddyのログインユーザーを入力してください')
  .option('-k, --authkey', 'VAddyのAPI_KEYを入力してください')
  .option('-p, --projectid', 'VAddyのProject_Idを入力してください')
  .option('-c, --crawlid', 'VAddyのCrawl＿Idを入力してください')
  .parse(process.argv);
console.info('process start.');


const optionCheck: boolean = ArgsController.check(commander);
if (!optionCheck) {
  const userConfig = VOConfig.load();


  if ( userConfig === undefined ) {
    console.error('VAddy config was not found');
    process.exit(1);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  (async () => {
    console.info('load configuration .env');

    const scanBody: VOScanBody = VOScanBody.ofConfig(userConfig);
    console.info('Scanning start...');
    const crawler: string | undefined = await ArgsController.scanControll(scanBody);
    if (crawler === undefined){
      process.exit(1);
    }
    const scanId: VOScanId = VOScanId.of(crawler);
    const resultBody: VORequestResultBody = VORequestResultBody.ofConfig(userConfig, scanId);
    const scanResult = await ArgsController.resultController(resultBody);
    const result = VOScanResult.of(scanResult);
    Result.message(result);
    return;
  })();
}

if (optionCheck){
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  ( async () => {
    const user: VOUser | undefined = VOUser.of(commander.user);
    const key: VOAuthKey | undefined = VOAuthKey.of(commander.authKey);
    const project: VOProject | undefined = VOProject.of(commander.projectid);
    if ( user === undefined ){
      process.exit(1);
    }
    if ( key === undefined ){
      process.exit(1);
    }
    if ( project === undefined ){
      process.exit(1);
    }
    // シナリオ指定がある場合
    if ( commander.crawlid !== undefined) {
      const crawl: VOSenario | undefined = VOSenario.of(commander.crawlid);
      if ( crawl === undefined ){
        process.exit(1);
      }
      const scanBody: VOScanBody = VOScanBody.of(user, key, project, crawl);
      const crawler: string | undefined = await ArgsController.scanControll(scanBody);
      if (crawler === undefined){
        process.exit(1);
      }
      const scanId: VOScanId = VOScanId.of(crawler);
      const resultBody: VORequestResultBody = VORequestResultBody.of(user, key, scanId);
      const scanResult = await ArgsController.resultController(resultBody);
      const result = VOScanResult.of(scanResult);
      Result.message(result);
      return;
    }
    // シナリオ指定がない場合
    const scanBody: VOScanBody = VOScanBody.of(user, key, project);
    const crawler: string | undefined = await ArgsController.scanControll(scanBody);
    if (crawler === undefined){
      process.exit(1);
    }
    const scanId: VOScanId = VOScanId.of(crawler);
    const resultBody: VORequestResultBody = VORequestResultBody.of(user, key, scanId);
    const scanResult = await ArgsController.resultController(resultBody);
    const result = VOScanResult.of(scanResult);
    Result.message(result);
    return;
  })();
}
