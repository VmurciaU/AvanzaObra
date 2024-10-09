"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveProjectWithoutToken = exports.SaveProject = void 0;
const response_1 = require("../../../../utils/response");
const currentDate_1 = require("../../../../utils/currentDate");
const typeormdb_1 = require("../../../../db/dbconfig/typeormdb");
const Projects_class_1 = require("../../../../Entities/Projects.class");
const SaveProject = async (req, res, next) => {
    try {
        const _a = req.body, { idTask } = _a, body = __rest(_a, ["idTask"]);
        body.idTask = idTask;
        const { date } = (0, currentDate_1.currentDate)();
        const cBody = Object.assign({}, body);
        cBody.createdAt = date;
        cBody.updatedAt = date;
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const projectRepository = dataSource.getRepository(Projects_class_1.Projects);
        const projectData = await projectRepository.save(cBody);
        const result = (0, response_1.success)('API Project Insert', 201, {
            projectData,
        });
        res
            .status(201)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.SaveProject = SaveProject;
const SaveProjectWithoutToken = async (req, res, next) => {
    try {
        const _a = req.body, { idTask } = _a, body = __rest(_a, ["idTask"]);
        body.idTask = idTask;
        const { date } = (0, currentDate_1.currentDate)();
        const cBody = Object.assign({}, body);
        cBody.createdAt = date;
        cBody.updatedAt = date;
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const projectRepository = dataSource.getRepository(Projects_class_1.Projects);
        const projectData = await projectRepository.save(cBody);
        const result = (0, response_1.success)('API Project Save', 201, {
            projectData,
        });
        res
            .status(201)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.SaveProjectWithoutToken = SaveProjectWithoutToken;
//# sourceMappingURL=PostProject.js.map