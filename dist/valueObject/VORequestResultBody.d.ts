import { VOUser } from './VOUser';
import { VOAuthKey } from './VOAuthKey';
import { VOScanId } from './VOScanId';
import { VOConfig } from './VOConfig';
export declare type RequestBody = {
    user: string;
    'auth_key': string;
    'scan_id': string;
};
export declare class VORequestResultBody {
    private reqBody;
    static of(user: VOUser, key: VOAuthKey, scan: VOScanId): VORequestResultBody;
    static ofConfig(userConfig: VOConfig, scan: VOScanId): VORequestResultBody;
    private constructor();
    toJson(): RequestBody;
    toQuery(): string;
}
