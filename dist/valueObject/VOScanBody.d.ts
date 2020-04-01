import { VOUser } from './VOUser';
import { VOAuthKey } from './VOAuthKey';
import { VOProject } from './VOProject';
import { VOSenario } from './VOSenario';
import { VOConfig } from './VOConfig';
export declare type ScanBody = {
    action: string;
    user: string;
    auth_key: string;
    project_id: string;
    crawl_id?: number;
};
export declare class VOScanBody {
    private scanBody;
    static of(user: VOUser, key: VOAuthKey, project: VOProject, senario?: VOSenario): VOScanBody;
    static ofConfig(userConfig: VOConfig): VOScanBody;
    private constructor();
    toJson(): ScanBody;
}
