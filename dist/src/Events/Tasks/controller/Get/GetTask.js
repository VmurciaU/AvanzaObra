"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskSelect = exports.getTaskId = exports.getTaskAll = void 0;
const typeormdb_1 = require("../../../../db/dbconfig/typeormdb");
const response_1 = require("../../../../utils/response");
const Tasks_class_1 = require("../../../../Entities/Tasks.class");
const getTaskAll = async (req, res, next) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const taskRepository = dataSource.getRepository(Tasks_class_1.Tasks);
        const taskdata = await taskRepository.find({
            relations: ['user', 'projects', 'states'],
        });
        const result = (0, response_1.success)('API Tasks All', 200, {
            taskdata,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getTaskAll = getTaskAll;
const getTaskId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const taskRepository = dataSource.getRepository(Tasks_class_1.Tasks);
        const taskdata = await taskRepository.find({
            where: {
                id: Number(id),
            },
            relations: ['user', 'projects', 'states'],
        });
        const result = (0, response_1.success)('API Tasks Id', 200, {
            taskdata,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getTaskId = getTaskId;
const getTaskSelect = async (req, res, next) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const taskRepository = dataSource.getRepository(Tasks_class_1.Tasks);
        const taskdata = await taskRepository.find({
            where: {
                state: 1,
            },
            relations: ['user', 'projects', 'states'],
        });
        const result = (0, response_1.success)('API Tasks All', 200, {
            taskdata,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getTaskSelect = getTaskSelect;
//# sourceMappingURL=GetTask.js.map