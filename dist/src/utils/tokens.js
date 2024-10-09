"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = async (userData) => {
    const payload = {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        lastname: userData.lastname,
        user: userData.user,
        idRole: userData.idRole,
        role: userData.role,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor((Date.now() / 1000) + Number(process.env.JWT_LIFETIME))
    };
    const token = jsonwebtoken_1.default.sign(payload, String(process.env.JWT_SECRET), {
        algorithm: (process.env.JWT_ALGORITHM || 'HS256')
    });
    return token;
};
exports.createToken = createToken;
//# sourceMappingURL=tokens.js.map