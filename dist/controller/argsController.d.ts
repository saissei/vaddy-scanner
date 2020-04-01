import { CommanderStatic } from 'commander';
import { VOScanBody } from '../valueObject/VOScanBody';
import { VORequestResultBody } from '../valueObject/VORequestResultBody';
import { ScanResult } from '../valueObject/VOScanResult';
export declare class ArgsController {
    static check(options: CommanderStatic): boolean;
    static scanControll(scanBody: VOScanBody): Promise<string>;
    static resultController(resultBody: VORequestResultBody): Promise<ScanResult>;
}
