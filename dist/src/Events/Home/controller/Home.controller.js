"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppInfo = void 0;
const response_1 = require("../../../utils/response");
const Home_services_1 = require("../services/Home.services");
const getAppInfo = (req, res) => {
    const result = (0, response_1.success)('API - FVL', 200, (0, Home_services_1.getAppInfoData)());
    res
        .status(200)
        .json(result);
};
exports.getAppInfo = getAppInfo;
//# sourceMappingURL=Home.controller.js.map