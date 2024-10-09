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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doLoginUser = void 0;
const passport_1 = __importDefault(require("passport"));
const tokens_1 = require("../../../utils/tokens");
const response_1 = require("../../../utils/response");
const doLoginUser = (req, res, next) => {
    passport_1.default.authenticate('local', { session: false }, async (error, user) => {
        try {
            if (error || !user) {
                next(error);
            }
            else {
                const { password } = user, userData = __rest(user, ["password"]);
                const token = await (0, tokens_1.createToken)(user);
                const result = (0, response_1.success)('Login - OK', 200, {
                    userData,
                    token,
                });
                res
                    .status(200)
                    .json(result);
            }
        }
        catch (err) {
            next(err);
        }
    })(req, res);
};
exports.doLoginUser = doLoginUser;
//# sourceMappingURL=Auth.controller.js.map