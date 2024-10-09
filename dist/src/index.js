"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app/app");
const server_1 = require("./server/server");
const typeormdb_1 = require("./db/dbconfig/typeormdb");
const main = async () => {
    try {
        dotenv_1.default.config();
        console.log('🚀 Starting Server\n');
        if (process.env.NAME_APP) {
            const response = await (0, typeormdb_1.getDataSource)();
            if (!response) {
                console.log('❌ No DB Connection, Server will not start\n');
                return;
            }
            console.log('✅ DB OK, Connected\n');
            const app = (0, app_1.createApp)();
            (0, server_1.startServer)(app);
        }
    }
    catch (error) {
        console.log('Error init index APP');
        console.log(error);
    }
};
main();
//# sourceMappingURL=index.js.map