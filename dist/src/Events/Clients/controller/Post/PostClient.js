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
exports.SaveClient = void 0;
const currentDate_1 = require("../../../../utils/currentDate");
const typeormdb_1 = require("../../../../db/dbconfig/typeormdb");
const response_1 = require("../../../../utils/response");
const Clients_class_1 = require("../../../../Entities/Clients.class");
const SaveClient = async (req, res, next) => {
    try {
        const body = __rest(req.body, []);
        const { date } = (0, currentDate_1.currentDate)();
        const cBody = Object.assign({}, body);
        cBody.createdAt = date;
        cBody.updatedAt = date;
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const clientRepository = dataSource.getRepository(Clients_class_1.Clients);
        const clientData = await clientRepository.save(cBody);
        const result = (0, response_1.success)('API Client All', 201, {
            clientData,
        });
        res
            .status(201)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.SaveClient = SaveClient;
//# sourceMappingURL=PostClient.js.map