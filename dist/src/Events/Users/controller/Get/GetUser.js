"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserSelect = exports.getUserById = exports.getUserAll = void 0;
const typeormdb_1 = require("../../../../db/dbconfig/typeormdb");
const response_1 = require("../../../../utils/response");
const Users_class_1 = require("../../../../Entities/Users.class");
const getUserAll = async (req, res, next) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const userRepository = dataSource.getRepository(Users_class_1.Users);
        const users = await userRepository.find({
            relations: ['role', 'charges', 'tasks'],
        });
        const result = (0, response_1.success)('API User All', 201, {
            users,
        });
        res
            .status(201)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getUserAll = getUserAll;
const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const userRepository = dataSource.getRepository(Users_class_1.Users);
        const users = await userRepository.find({
            where: {
                id: Number(id),
                state: 1,
            },
            relations: ['role'],
        });
        const result = (0, response_1.success)('API User By Id', 200, {
            users,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getUserById = getUserById;
const getUserSelect = async (req, res, next) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const userRepository = dataSource.getRepository(Users_class_1.Users);
        const users = await userRepository.find({
            where: {
                state: 1,
            },
            relations: ['role'],
        });
        const result = (0, response_1.success)('API User All', 200, {
            users,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getUserSelect = getUserSelect;
//# sourceMappingURL=GetUser.js.map