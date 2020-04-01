"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
class VOConfig {
    constructor(userConf) {
        this.userConf = userConf;
    }
    static load(fileName) {
        const envFile = path_1.default.resolve(process.cwd(), fileName);
        dotenv_1.default.config({ path: envFile });
        console.log(process.env.crawlId);
        const user = process.env.user;
        const auth_key = process.env.key;
        const project_id = process.env.projectId;
        const crawl = process.env.crawlId;
        const crawl_id = Number(crawl);
        if (user === undefined || user === 'undefined') {
            return;
        }
        if (auth_key === undefined || auth_key === 'undefined') {
            return;
        }
        if (project_id === undefined || project_id === 'undefined') {
            return;
        }
        if (!isNaN(crawl_id)) {
            return new VOConfig({ user, auth_key, project_id, crawl_id });
        }
        return new VOConfig({ user, auth_key, project_id });
    }
    toJson() {
        return this.userConf;
    }
}
exports.VOConfig = VOConfig;
