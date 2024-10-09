"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const compare = async (value, hashedValue) => bcryptjs_1.default.compare(value, hashedValue);
exports.compare = compare;
//# sourceMappingURL=crypt.js.map