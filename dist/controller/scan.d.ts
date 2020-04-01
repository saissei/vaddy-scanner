import { VOScanBody } from '../valueObject/VOScanBody';
export declare class Scan {
    static start(scanBody: VOScanBody): Promise<string | undefined>;
}
