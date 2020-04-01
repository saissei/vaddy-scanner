"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../controller/error");
class VOProject {
    constructor(projectId) {
        this.projectId = projectId;
    }
    static of(projectId) {
        if (typeof projectId !== 'string') {
            error_1.ErrorSwitcher.handle('projectId is not found or input data type is not string');
            return;
        }
        return new VOProject(projectId);
    }
    toString() {
        return this.projectId;
    }
}
exports.VOProject = VOProject;
