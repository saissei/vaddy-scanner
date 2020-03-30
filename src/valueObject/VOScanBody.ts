import { VOUser } from './VOUser';
import { VOAuthKey } from './VOAuthKey';
import { VOProject } from './VOProject';
import { VOSenario } from './VOSenario';
import { VOConfig } from './VOConfig';

type RequestBody = {
  action: string;
  user: string;
  auth_key: string;
  project_id: string;
  crawl_id?: number;
}

export class VOScanBody {
  private scanBody: RequestBody;
  public static of(user: VOUser, key: VOAuthKey, project: VOProject, senario?: VOSenario): VOScanBody {

    const userId = user.toString();
    const authKey = key.toString();
    const projectId = project.toString();
    if ( senario ){
      const senarioId = senario.toNumber();
      const scanBody: RequestBody = {
        action: 'start',
        user: userId,
        'auth_key': authKey,
        'project_id': projectId,
        'crawl_id': senarioId
      };
      return new VOScanBody(scanBody);
    }
    const scanBody: RequestBody = {
      action: 'start',
      user: userId,
      'auth_key': authKey,
      'project_id': projectId,
    };
    return new VOScanBody(scanBody);
  }
  public static ofConfig(userConfig: VOConfig): VOScanBody {
    const information = userConfig.toJson();
    const scanBody: RequestBody = {
      action: 'start',
      user: information.user,
      'auth_key': information.auth_key,
      'project_id': information.project_id
    };

    if ( information.crawl_id ){
      scanBody['crawl_id'] = information['crawl_id'];
      return new VOScanBody(scanBody);
    }

    return new VOScanBody(scanBody);
  }
  private constructor(scanBody: RequestBody) {
    this.scanBody = scanBody;
  }
  public toJson(): RequestBody {
    return this.scanBody;
  }
}
