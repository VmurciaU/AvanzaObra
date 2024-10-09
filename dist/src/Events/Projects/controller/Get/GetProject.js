"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectSelect = exports.getProjectById = exports.getProjectAll = void 0;
const typeormdb_1 = require("../../../../db/dbconfig/typeormdb");
const response_1 = require("../../../../utils/response");
const Projects_class_1 = require("../../../../Entities/Projects.class");
const getProjectAll = async (req, res, next) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const projectRepository = dataSource.getRepository(Projects_class_1.Projects);
        const projectdata = await projectRepository.find({
            relations: ['tasks', 'client'],
        });
        const result = (0, response_1.success)('API Project All', 200, {
            projectdata,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getProjectAll = getProjectAll;
const getProjectById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const projectRepository = dataSource.getRepository(Projects_class_1.Projects);
        const projectdata = await projectRepository.find({
            where: {
                id: Number(id),
                state: 1,
            },
            relations: ['tasks', 'client'],
        });
        const result = (0, response_1.success)('API Project By Id', 200, {
            projectdata,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getProjectById = getProjectById;
const getProjectSelect = async (req, res, next) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const projectRepository = dataSource.getRepository(Projects_class_1.Projects);
        const projectdata = await projectRepository.find({
            where: {
                state: 1,
            },
            relations: ['tasks', 'client'],
        });
        const result = (0, response_1.success)('API Project All', 200, {
            projectdata,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getProjectSelect = getProjectSelect;
//# sourceMappingURL=GetProject.js.map