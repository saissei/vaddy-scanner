import { CommanderStatic } from 'commander';

import { Scan } from './scan';
import { VOScanBody } from '../valueObject/VOScanBody';
import { Result, ScanResult } from './result';
import { VORequestResultBody } from '../valueObject/VORequestResultBody';

export class ArgsController {
  public static check(options: CommanderStatic): boolean {
    if ( options.user === undefined) {
      /* const errorMessage = VOError.typeError('userId is not found. Please set option "-u {VAddy userId}"');
      console.error(errorMessage); */
      return false;
    }

    if ( options.authkey === undefined) {
      /* const errorMessage = VOError.typeError('authkey is not found. Please set option "-u {VAddy api key}"');
      console.error(errorMessage); */
      return false;
    }

    if ( options.projectId === undefined) {
      /* const errorMessage = VOError.typeError('projectId is not found. Please set option "-u {VAddy projectId}"');
      console.error(errorMessage); */
      return false;
    }
    return true;
  }

  public static async scanControll(scanBody: VOScanBody): Promise<string> {

    const scanResult = await Scan.start(scanBody);
    if ( scanResult === undefined ){
      return process.exit(1);
    }
    return scanResult;
  }

  public static async resultController(resultBody: VORequestResultBody): Promise<ScanResult> {
    const scanResult: ScanResult | undefined = await Result.reference(resultBody);
    if ( scanResult === undefined ){
      return process.exit(1);
    }
    return scanResult;
  }
}
