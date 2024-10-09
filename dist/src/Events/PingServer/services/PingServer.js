"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataPingServer = void 0;
const moment_1 = __importDefault(require("moment"));
const boom_1 = __importDefault(require("@hapi/boom"));
const getDataPingServer = () => {
    try {
        const dateNow = (0, moment_1.default)();
        return {
            dateServer: dateNow.toDate(),
            dateServerMiliseconds: dateNow.valueOf(),
            dateServerYYYYMMDD: dateNow.format('YYYY/MM/DD'),
            timeServerHHMMDD: dateNow.format('HH:mm:ss'),
        };
    }
    catch (err) {
        throw boom_1.default.badImplementation(err.error.message);
    }
};
exports.getDataPingServer = getDataPingServer;
//# sourceMappingURL=PingServer.js.map