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
exports.SaveUserWithoutToken = exports.SaveUser = exports.hashPassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const response_1 = require("../../../../utils/response");
const currentDate_1 = require("../../../../utils/currentDate");
const typeormdb_1 = require("../../../../db/dbconfig/typeormdb");
const Users_class_1 = require("../../../../Entities/Users.class");
const hashPassword = async (password) => {
    const salt = await bcryptjs_1.default.genSalt(Number(process.env.BCRYPT_SALT));
    const hash = bcryptjs_1.default.hashSync(password, salt);
    return hash;
};
exports.hashPassword = hashPassword;
const SaveUser = async (req, res, next) => {
    try {
        const _a = req.body, { password, idRole } = _a, body = __rest(_a, ["password", "idRole"]);
        if (password) {
            body.password = await (0, exports.hashPassword)(password);
        }
        body.idRole = idRole;
        const { date } = (0, currentDate_1.currentDate)();
        const cBody = Object.assign({}, body);
        cBody.createdAt = date;
        cBody.updatedAt = date;
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const userRepository = dataSource.getRepository(Users_class_1.Users);
        const userData = await userRepository.save(cBody);
        const result = (0, response_1.success)('API User Insert', 201, {
            userData,
        });
        res
            .status(201)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.SaveUser = SaveUser;
const SaveUserWithoutToken = async (req, res, next) => {
    try {
        const _a = req.body, { password } = _a, body = __rest(_a, ["password"]);
        if (password) {
            body.password = await (0, exports.hashPassword)(password);
        }
        const { date } = (0, currentDate_1.currentDate)();
        const cBody = Object.assign({}, body);
        cBody.createdAt = date;
        cBody.updatedAt = date;
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const userRepository = dataSource.getRepository(Users_class_1.Users);
        const userData = await userRepository.save(cBody);
        const result = (0, response_1.success)('API User Save', 201, {
            userData,
        });
        res
            .status(201)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.SaveUserWithoutToken = SaveUserWithoutToken;
//# sourceMappingURL=PostUser.js.map