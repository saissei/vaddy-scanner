import axios, { AxiosResponse } from 'axios';
import { VOScanBody } from '../valueObject/VOScanBody';

type ResponseData = {
  'scan_id': string;
}

export class Scan {
  public static async start(scanBody: VOScanBody): Promise<string|undefined> {
    try {
      const url = 'https://api.vaddy.net/v2/scan';
      const body = scanBody.toJson();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const scan: AxiosResponse<any> = await axios.post(url, body);
      const response: ResponseData = scan.data;
      return response.scan_id;
    } catch (err) {
      console.error('error happened at start scan');
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
}
