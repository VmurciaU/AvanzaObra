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
exports.UpdateCharge = void 0;
const typeormdb_1 = require("../../../../db/dbconfig/typeormdb");
const response_1 = require("../../../../utils/response");
const currentDate_1 = require("../../../../utils/currentDate");
const Charges_class_1 = require("../../../../Entities/Charges.class");
const UpdateCharge = async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = __rest(req.body, []);
        const { date } = await (0, currentDate_1.currentDate)();
        const cBody = Object.assign({}, body);
        cBody.updatedAt = date;
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const chargeRepository = dataSource.getRepository(Charges_class_1.Charges);
        const chargeData = await chargeRepository.createQueryBuilder().update(cBody).where({
            id,
        })
            .updateEntity(true)
            .execute();
        const result = (0, response_1.success)('API Charge Update', 200, {
            chargeData,
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.UpdateCharge = UpdateCharge;
//# sourceMappingURL=PutCharge.js.map