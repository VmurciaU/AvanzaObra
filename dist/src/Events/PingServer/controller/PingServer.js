"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataPing = void 0;
const response_1 = require("../../../utils/response");
const PingServer_1 = require("../services/PingServer");
const getDataPing = (req, res) => {
    const result = (0, response_1.success)('Servidor arriba - OK', 200, (0, PingServer_1.getDataPingServer)());
    res
        .status(200)
        .json(result);
};
exports.getDataPing = getDataPing;
//# sourceMappingURL=PingServer.js.map