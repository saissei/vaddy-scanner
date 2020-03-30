"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VOErrorHandler_1 = require("./VOErrorHandler");
const message_1 = require("../presenter/message");
class VOProject {
    constructor(projectId) {
        this.projectId = projectId;
    }
    static of(projectId) {
        if (typeof projectId !== 'string') {
            const errorMessage = VOErrorHandler_1.VOError.typeError('projectId is not found or input data type is not string');
            message_1.ConsoleMessage.error(errorMessage);
            return;
        }
        return new VOProject(projectId);
    }
    toString() {
        return this.projectId;
    }
}
exports.VOProject = VOProject;
