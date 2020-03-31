import { VORequestResultBody } from '../valueObject/VORequestResultBody';
import axios, { AxiosResponse } from 'axios';
import { ConsoleMessage } from '../presenter/message';
import { VOScanResult } from '../valueObject/VOScanResult';

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

const sleep = (msec: number): Promise<unknown> => new Promise(resolve => setTimeout(resolve, msec));

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
        await sleep(5000);
        return this.crawl(reqBody);
      }
      if ( status === 'canceled' ) {
        ConsoleMessage.error('scanning status is canceled');
        return;
      }
      if ( status === 'finish') {
        return result.data;
      }
      return;
    } catch (err){
      ConsoleMessage.error('error happened at get scan result');
      switch (err.response.status) {
        case '400': {
          ConsoleMessage.error(`error: ${err.response.data.error_message}`);
          return;
        }
        case '401': {
          ConsoleMessage.error('error: authenticate error');
          return;
        }
        default: {
          ConsoleMessage.error(err);
          return;
        }
      }
    }
  }

  public static message(result: VOScanResult): void {
    const alert = result.securityProblem();
    if (alert) {
      ConsoleMessage.error('Vulnerability detected');
      ConsoleMessage.error(result.extractResultUrl());
      return process.exit(1);
    }
    ConsoleMessage.success('Success: No vulnerabilities detected');
    return process.exit(0);
  }
}
