"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataSource = void 0;
const typeorm_1 = require("typeorm");
const Roles_class_1 = require("../../Entities/Roles.class");
const Users_class_1 = require("../../Entities/Users.class");
const Charges_class_1 = require("../../Entities/Charges.class");
const Status_class_1 = require("../../Entities/Status.class");
const Clients_class_1 = require("../../Entities/Clients.class");
const Tasks_class_1 = require("../../Entities/Tasks.class");
const Projects_class_1 = require("../../Entities/Projects.class");
let appDataSourceInstance;
const getDataSource = async () => {
    try {
        if (!appDataSourceInstance) {
            appDataSourceInstance = new typeorm_1.DataSource({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                synchronize: true,
                logging: false,
                entities: [
                    Charges_class_1.Charges,
                    Clients_class_1.Clients,
                    Projects_class_1.Projects,
                    Roles_class_1.Roles,
                    Status_class_1.Status,
                    Tasks_class_1.Tasks,
                    Users_class_1.Users,
                ]
            });
            return appDataSourceInstance.initialize();
        }
        return appDataSourceInstance;
    }
    catch (err) {
        console.log('Without connection DB', err);
        throw new Error(err);
    }
};
exports.getDataSource = getDataSource;
//# sourceMappingURL=typeormdb.js.map