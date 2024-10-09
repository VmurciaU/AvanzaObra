"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoleSelect = exports.getRoleId = exports.getRoleAll = void 0;
const typeormdb_1 = require("../../../../db/dbconfig/typeormdb");
const response_1 = require("../../../../utils/response");
const Roles_class_1 = require("../../../../Entities/Roles.class");
const getRoleAll = async (req, res, next) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const roleRepository = dataSource.getRepository(Roles_class_1.Roles);
        const roles = await roleRepository.find({
            relations: ['user'],
        });
        const result = (0, response_1.success)('API Roles All', 200, {
            roles,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getRoleAll = getRoleAll;
const getRoleId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const roleRepository = dataSource.getRepository(Roles_class_1.Roles);
        const roles = await roleRepository.find({
            where: {
                id: Number(id),
            },
        });
        const result = (0, response_1.success)('API Roles Id', 200, {
            roles,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getRoleId = getRoleId;
const getRoleSelect = async (req, res, next) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const roleRepository = dataSource.getRepository(Roles_class_1.Roles);
        const roles = await roleRepository.find({
            where: {
                state: 1,
            },
            relations: ['user'],
        });
        const result = (0, response_1.success)('API Roles All', 200, {
            roles,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getRoleSelect = getRoleSelect;
//# sourceMappingURL=GetRole.js.map