"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.valTokenAuthUser = void 0;
const passport_1 = __importDefault(require("passport"));
const boom_1 = __importDefault(require("@hapi/boom"));
const tokens_1 = require("../utils/tokens");
const valTokenAuthUser = (req, res, next) => {
    passport_1.default.authenticate('jwtValidate', { session: false }, async (error, user, info) => {
        try {
            if (info) {
                if (info.message === 'No auth token') {
                    throw boom_1.default.unauthorized('Sin token de autorización');
                }
                else if (info.message === 'jwt expired') {
                    throw boom_1.default.unauthorized('El token de autorización está vencido');
                }
                else {
                    throw boom_1.default.unauthorized(info.message);
                }
            }
            if (error) {
                console.error('Error en la autenticación:', error);
                return next(error);
            }
            if (!user) {
                throw boom_1.default.unauthorized('Usuario sin autorización');
            }
            const token = await (0, tokens_1.createToken)(user);
            res.setHeader('new-token', token);
            req.user = user;
            req.params.dataUser = JSON.stringify(user);
            return next();
        }
        catch (err) {
            console.error('Error en el bloque catch:', err);
            return next(err);
        }
    })(req, res, next);
};
exports.valTokenAuthUser = valTokenAuthUser;
//# sourceMappingURL=protectedRoutes.js.map