"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleExists = exports.idRoleExists = exports.idUserExists = exports.userExists = void 0;
const typeormdb_1 = require("../db/dbconfig/typeormdb");
const Users_class_1 = require("../Entities/Users.class");
const Roles_class_1 = require("../Entities/Roles.class");
const userExists = async (user = '') => {
    const dataSource = await (0, typeormdb_1.getDataSource)();
    const userRepository = dataSource.getRepository(Users_class_1.Users);
    const userExist = await userRepository.findOneBy({ email: user });
    if (userExist) {
        throw new Error(`El Usuario: ${user}, ya está registrado`);
    }
};
exports.userExists = userExists;
const idUserExists = async (id) => {
    const dataSource = await (0, typeormdb_1.getDataSource)();
    const userRepository = dataSource.getRepository(Users_class_1.Users);
    const existsIdUser = await userRepository.findOneBy({ id });
    if (!existsIdUser) {
        throw new Error(`El Id: ${id}, no existe`);
    }
};
exports.idUserExists = idUserExists;
const idRoleExists = async (id) => {
    const dataSource = await (0, typeormdb_1.getDataSource)();
    const rolRepository = dataSource.getRepository(Roles_class_1.Roles);
    const existsIdRole = await rolRepository.findOneBy({ id });
    if (!existsIdRole) {
        throw new Error(`El Id: ${id}, no existe`);
    }
};
exports.idRoleExists = idRoleExists;
const roleExists = async (name) => {
    const dataSource = await (0, typeormdb_1.getDataSource)();
    const rolRepository = dataSource.getRepository(Roles_class_1.Roles);
    const rolExist = await rolRepository.findOneBy({ name });
    if (rolExist) {
        throw new Error(`El rol: ${name}, ya está registrado`);
    }
};
exports.roleExists = roleExists;
//# sourceMappingURL=dbValidators.js.map