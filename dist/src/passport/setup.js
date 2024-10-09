"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const dotenv_1 = __importDefault(require("dotenv"));
const passport_jwt_1 = require("passport-jwt");
const boom_1 = __importDefault(require("@hapi/boom"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const typeormdb_1 = require("../db/dbconfig/typeormdb");
const Users_class_1 = require("../Entities/Users.class");
dotenv_1.default.config();
passport_1.default.use('local', new passport_local_1.Strategy({
    session: false,
}, async (username, password, done) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const userRepository = dataSource.getRepository(Users_class_1.Users);
        const searchUser = await userRepository.findOne({
            relations: ['role'],
            where: {
                email: username,
            },
        });
        if (!searchUser) {
            throw boom_1.default.unauthorized(`el nombre de ${username} no existe`);
        }
        else {
            const isPassword = await bcryptjs_1.default.compare(password, searchUser.password);
            if (isPassword) {
                return done(null, searchUser);
            }
            throw boom_1.default.unauthorized('Contraseña incorrecta');
        }
    }
    catch (error) {
        return done(error, false);
    }
}));
const opts = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: String(process.env.JWT_SECRET),
    algorithms: [process.env.JWT_ALGORITHM],
};
passport_1.default.use('jwtValidate', new passport_jwt_1.Strategy(opts, async (jwtPayload, done) => {
    try {
        const dataSource = await (0, typeormdb_1.getDataSource)();
        const userRepository = dataSource.getRepository(Users_class_1.Users);
        const searchUser = await userRepository.findOneBy({ email: jwtPayload.user });
        if (searchUser) {
            done(null, searchUser);
        }
        else {
            done(null, false);
        }
    }
    catch (error) {
        done(error, false);
    }
}));
exports.default = passport_1.default;
//# sourceMappingURL=setup.js.map