"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChargeSelect = exports.getChargeId = exports.getChargeAll = void 0;
const typeormdb_1 = require("../../../../db/dbconfig/typeormdb");
const response_1 = require("../../../../utils/response");
const Charges_class_1 = require("../../../../Entities/Charges.class");
const getChargeAll = async (req, res, next) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const chargeRepository = dataSource.getRepository(Charges_class_1.Charges);
        const charges = await chargeRepository.find({
            relations: ['user'],
        });
        const result = (0, response_1.success)('API Charges All', 200, {
            charges,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getChargeAll = getChargeAll;
const getChargeId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const chargeRepository = dataSource.getRepository(Charges_class_1.Charges);
        const charges = await chargeRepository.find({
            where: {
                id: Number(id),
            },
        });
        const result = (0, response_1.success)('API Charges Id', 200, {
            charges,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getChargeId = getChargeId;
const getChargeSelect = async (req, res, next) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const chargeRepository = dataSource.getRepository(Charges_class_1.Charges);
        const charges = await chargeRepository.find({
            where: {
                state: 1,
            },
            relations: ['user'],
        });
        const result = (0, response_1.success)('API Charges All', 200, {
            charges,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getChargeSelect = getChargeSelect;
//# sourceMappingURL=GetCharge.js.map