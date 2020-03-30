"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VOScanBody {
    constructor(scanBody) {
        this.scanBody = scanBody;
    }
    static of(user, key, project, senario) {
        const userId = user.toString();
        const authKey = key.toString();
        const projectId = project.toString();
        if (senario) {
            const senarioId = senario.toNumber();
            const scanBody = {
                action: 'start',
                user: userId,
                'auth_key': authKey,
                'project_id': projectId,
                'crawl_id': senarioId
            };
            return new VOScanBody(scanBody);
        }
        const scanBody = {
            action: 'start',
            user: userId,
            'auth_key': authKey,
            'project_id': projectId,
        };
        return new VOScanBody(scanBody);
    }
    static ofConfig(userConfig) {
        const information = userConfig.toJson();
        const scanBody = {
            action: 'start',
            user: information.user,
            'auth_key': information.auth_key,
            'project_id': information.project_id
        };
        if (information.crawl_id) {
            scanBody['crawl_id'] = information['crawl_id'];
            return new VOScanBody(scanBody);
        }
        return new VOScanBody(scanBody);
    }
    toJson() {
        return this.scanBody;
    }
}
exports.VOScanBody = VOScanBody;
