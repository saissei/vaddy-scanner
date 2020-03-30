"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qs_1 = __importDefault(require("qs"));
class VORequestResultBody {
    constructor(reqBody) {
        this.reqBody = reqBody;
    }
    static of(user, key, scan) {
        const userId = user.toString();
        const authKey = key.toString();
        const scanId = scan.toString();
        const reqBody = {
            user: userId,
            'auth_key': authKey,
            'scan_id': scanId
        };
        return new VORequestResultBody(reqBody);
    }
    static ofConfig(userConfig, scan) {
        const userInfo = userConfig.toJson();
        const scanId = scan.toString();
        const reqBody = {
            user: userInfo.user,
            'auth_key': userInfo.auth_key,
            'scan_id': scanId
        };
        return new VORequestResultBody(reqBody);
    }
    toJson() {
        return this.reqBody;
    }
    toQuery() {
        const query = qs_1.default.stringify(this.reqBody);
        return query;
    }
}
exports.VORequestResultBody = VORequestResultBody;
