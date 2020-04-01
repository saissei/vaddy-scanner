export type ScanResult = {
  'status': string;
  'project_id': string;
  'scan_id': string;
  'scan_count': number;
  'alert_count': number;
  'timezone': string;
  'start_time':  string;
  'end_time':  string;
  'scan_result_url': string;
  'complete': number;
  'crawl_id': number;
  'scan_list': Array<string>;
}

export class VOScanResult {
  private resultAll: ScanResult;
  private resultFlag: boolean;
  public static of(resultAll: ScanResult): VOScanResult {
    if (resultAll.alert_count > 0){
      return new VOScanResult(resultAll, true);
    }
    return new VOScanResult(resultAll, false);
  }
  private constructor(resultAll: ScanResult, resultFlag: boolean){
    this.resultAll = resultAll;
    this.resultFlag = resultFlag;
  }
  public securityProblem(): boolean {
    return this.resultFlag;
  }
  public extractScanList(): Array<string>{
    return this.resultAll.scan_list;
  }
  public extractResultUrl(): string {
    return this.resultAll.scan_result_url;
  }
}
