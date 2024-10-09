"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isAdmin = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            boom_1.default.unauthorized('Authorization header missing');
        }
        const token = authHeader ? authHeader.split(' ')[1] : '';
        if (!token) {
            boom_1.default.unauthorized('Token missing');
        }
        const decoded = jsonwebtoken_1.default.verify(token, String(process.env.JWT_SECRET));
        const isAdmin = decoded.idRole = 1;
        if (!isAdmin) {
            boom_1.default.unauthorized('No tiene autorización para esta petición');
        }
        req.user = decoded;
        next();
    }
    catch (error) {
        console.log(error);
        boom_1.default.unauthorized('Invalid token');
    }
};
exports.isAdmin = isAdmin;
//# sourceMappingURL=isAdmin.js.map