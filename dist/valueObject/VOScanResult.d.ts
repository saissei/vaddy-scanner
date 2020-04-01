export declare type ScanResult = {
    'status': string;
    'project_id': string;
    'scan_id': string;
    'scan_count': number;
    'alert_count': number;
    'timezone': string;
    'start_time': string;
    'end_time': string;
    'scan_result_url': string;
    'complete': number;
    'crawl_id': number;
    'scan_list': Array<string>;
};
export declare class VOScanResult {
    private resultAll;
    private resultFlag;
    static of(resultAll: ScanResult): VOScanResult;
    private constructor();
    securityProblem(): boolean;
    extractScanList(): Array<string>;
    extractResultUrl(): string;
}
