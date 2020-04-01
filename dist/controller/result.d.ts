import { VORequestResultBody } from '../valueObject/VORequestResultBody';
import { VOScanResult, ScanResult } from '../valueObject/VOScanResult';
export declare class Result {
    static reference(requestBody: VORequestResultBody): Promise<ScanResult | undefined>;
    static crawl(reqBody: string): Promise<ScanResult | undefined>;
    static message(result: VOScanResult): void;
}
