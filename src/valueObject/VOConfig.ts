import dotenv from 'dotenv';
import path from 'path';

export type UserInfo = {
  user: string;
  auth_key: string;
  project_id: string;
  crawl_id?: number;
}

export class VOConfig {
  private userConf: UserInfo;
  public static load(fileName: string): VOConfig | undefined {
    const envFile = path.resolve(process.cwd(), fileName);
    dotenv.config({path: envFile});
    console.log(process.env.crawlId);
    /* eslint-disable @typescript-eslint/camelcase */
    const user = process.env.user;
    const auth_key = process.env.key;
    const project_id = process.env.projectId;
    const crawl = process.env.crawlId;
    const crawl_id = Number(crawl);

    if ( user === undefined || user === 'undefined') {
      return;
    }
    if ( auth_key === undefined || auth_key === 'undefined') {
      return;
    }
    if ( project_id === undefined || project_id === 'undefined') {
      return;
    }
    if ( !isNaN(crawl_id) ){
      return new VOConfig({ user, auth_key, project_id, crawl_id });
    }
    return new VOConfig({ user, auth_key, project_id });
  }
  private constructor(userConf: UserInfo){
    this.userConf = userConf;
  }
  public toJson(): UserInfo {
    return this.userConf;
  }
}
