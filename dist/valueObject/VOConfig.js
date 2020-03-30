"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
class VOConfig {
    constructor(userConf) {
        this.userConf = userConf;
    }
    static load() {
        const user = process.env.user;
        const auth_key = process.env.key;
        const project_id = process.env.projectId;
        const crawl = process.env.crawlId;
        const crawl_id = Number(crawl);
        if (user === undefined) {
            return;
        }
        if (auth_key === undefined) {
            return;
        }
        if (project_id === undefined) {
            return;
        }
        if (crawl_id !== undefined) {
            return new VOConfig({ user, auth_key, project_id, crawl_id });
        }
        return new VOConfig({ user, auth_key, project_id });
    }
    toJson() {
        return this.userConf;
    }
}
exports.VOConfig = VOConfig;
