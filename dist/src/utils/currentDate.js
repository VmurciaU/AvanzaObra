"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentDate = void 0;
const moment_1 = __importDefault(require("moment"));
require("moment/locale/es");
const currentDate = () => {
    moment_1.default.locale('es-co');
    const date = new Date();
    const realTime = new Date();
    return {
        date,
        realTime,
    };
};
exports.currentDate = currentDate;
//# sourceMappingURL=currentDate.js.map