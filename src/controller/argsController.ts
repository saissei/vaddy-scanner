import { CommanderStatic } from 'commander';

import { Scan } from './scan';
import { VOScanBody } from '../valueObject/VOScanBody';
import { Result } from './result';
import { VORequestResultBody } from '../valueObject/VORequestResultBody';
import { ScanResult } from '../valueObject/VOScanResult';

export class ArgsController {
  public static check(options: CommanderStatic): boolean {
    if ( options.user === undefined) {
      return false;
    }

    if ( options.authkey === undefined) {
      return false;
    }

    if ( options.projectid === undefined) {
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
