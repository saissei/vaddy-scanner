import { VORequestResultBody } from '../valueObject/VORequestResultBody';
import axios, { AxiosResponse } from 'axios';
import { VOScanResult } from '#/valueObject/VOScanResult';

export type ScanResult = {
  'status': string;
  'project_id': string;
  'scan_id': string;
  'scan_count': number;
  'alert_count': number;
  'timezone': string;
  'start_time':  number;
  'end_time':  string;
  'scan_result_url': string;
  'complete': number;
  'crawl_id': number;
  'scan_list': Array<string>;
}

export class Result {
  public static async reference(requestBody: VORequestResultBody): Promise<ScanResult|undefined> {
    const reqBody = requestBody.toQuery();
    const scanResult = await this.crawl(reqBody);
    if ( scanResult === undefined ){
      return;
    }
    return scanResult;
  }
  private static async crawl(reqBody: string): Promise<ScanResult|undefined> {
    try {
      const url = `https://api.vaddy.net/v2/scan/result?${reqBody}`;
      const result: AxiosResponse<ScanResult> = await axios.get(url);
      const status = result.data.status;
      if ( status === 'scanning' ) {
        return this.crawl(reqBody);
      }
      if ( status === 'canceled' ) {
        console.error('scanning status is canceled');
        return;
      }
      if ( status === 'finish') {
        return result.data;
      }
      return;
    } catch (err){
      console.error('error happened at get scan result');
      switch (err.response.status) {
        case '400': {
          console.error(`error: ${err.response.data.error_message}`);
          return;
        }
        case '401': {
          console.error('error: authenticate error');
          return;
        }
        default: {
          console.error(err);
          return;
        }
      }
    }
  }

  public static message(result: VOScanResult): void {
    const alert = result.securityProblem();
    if (alert) {
      console.error('Vulnerability detected');
      console.error(result.extractResultUrl);
      return process.exit(1);
    }
    console.info('No vulnerabilities detected');
    return process.exit(0);
  }
}
