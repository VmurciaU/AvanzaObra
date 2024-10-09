"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientSelect = exports.getClientId = exports.getClientAll = void 0;
const typeormdb_1 = require("../../../../db/dbconfig/typeormdb");
const response_1 = require("../../../../utils/response");
const Clients_class_1 = require("../../../../Entities/Clients.class");
const getClientAll = async (req, res, next) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const clientRepository = dataSource.getRepository(Clients_class_1.Clients);
        const clients = await clientRepository.find({
            relations: ['project'],
        });
        const result = (0, response_1.success)('API Clients All', 200, {
            clients,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getClientAll = getClientAll;
const getClientId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const clientRepository = dataSource.getRepository(Clients_class_1.Clients);
        const clients = await clientRepository.find({
            where: {
                id: Number(id),
            },
        });
        const result = (0, response_1.success)('API Clients Id', 200, {
            clients,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getClientId = getClientId;
const getClientSelect = async (req, res, next) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const clientRepository = dataSource.getRepository(Clients_class_1.Clients);
        const clients = await clientRepository.find({
            where: {
                state: 1,
            },
            relations: ['project'],
        });
        const result = (0, response_1.success)('API Clients All', 200, {
            clients,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getClientSelect = getClientSelect;
//# sourceMappingURL=GetClient.js.map