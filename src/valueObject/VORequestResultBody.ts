import { VOUser } from './VOUser';
import { VOAuthKey } from './VOAuthKey';
import { VOScanId } from './VOScanId';
import qs from 'qs';
import { VOConfig } from './VOConfig';

export type RequestBody = {
  user: string;
  'auth_key': string;
  'scan_id': string;
}

export class VORequestResultBody {
  private reqBody: RequestBody;
  public static of(user: VOUser, key: VOAuthKey, scan: VOScanId): VORequestResultBody {
    const userId = user.toString();
    const authKey = key.toString();
    const scanId = scan.toString();

    const reqBody: RequestBody = {
      user: userId,
      'auth_key': authKey,
      'scan_id': scanId
    };
    return new VORequestResultBody(reqBody);
  }

  public static ofConfig(userConfig: VOConfig, scan: VOScanId): VORequestResultBody {
    const userInfo = userConfig.toJson();
    const scanId = scan.toString();

    const reqBody: RequestBody = {
      user: userInfo.user,
      'auth_key': userInfo.auth_key,
      'scan_id': scanId
    };
    return new VORequestResultBody(reqBody);
  }

  private constructor(reqBody: RequestBody){
    this.reqBody = reqBody;
  }
  public toJson(): RequestBody {
    return this.reqBody;
  }
  public toQuery(): string {
    const query = qs.stringify(this.reqBody);
    return query;
  }
}
