"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatusSelect = exports.getStatusId = exports.getStatusAll = void 0;
const typeormdb_1 = require("../../../../db/dbconfig/typeormdb");
const response_1 = require("../../../../utils/response");
const Status_class_1 = require("../../../../Entities/Status.class");
const getStatusAll = async (req, res, next) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const statusRepository = dataSource.getRepository(Status_class_1.Status);
        const status = await statusRepository.find({
            relations: ['tasks'],
        });
        const result = (0, response_1.success)('API Status All', 200, {
            status,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getStatusAll = getStatusAll;
const getStatusId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const statusRepository = dataSource.getRepository(Status_class_1.Status);
        const status = await statusRepository.find({
            where: {
                id: Number(id),
            },
        });
        const result = (0, response_1.success)('API Status Id', 200, {
            status,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getStatusId = getStatusId;
const getStatusSelect = async (req, res, next) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const statusRepository = dataSource.getRepository(Status_class_1.Status);
        const status = await statusRepository.find({
            where: {
                state: 1,
            },
            relations: ['tasks'],
        });
        const result = (0, response_1.success)('API Status All', 200, {
            status,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getStatusSelect = getStatusSelect;
//# sourceMappingURL=GetStatus.js.map