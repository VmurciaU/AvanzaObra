"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppInfoData = void 0;
const package_json_1 = __importDefault(require("../../../../package.json"));
const getAppInfoData = () => ({
    app: {
        name: package_json_1.default.name,
        version: package_json_1.default.version,
        description: package_json_1.default.description,
        author: package_json_1.default.author,
        maintainers: package_json_1.default.maintainers,
        host: process.env.APP_HOST || '',
        env: process.env.ENV || '',
        base_url: process.env.API_BASE_URL || '',
        api_version: process.env.API_VERSION || '',
        port: Number(process.env.PORT),
    },
    micros_endpoint: `${process.env.APP_HOST}:${process.env.PORT}/`
        + `${process.env.API_BASE_URL}/${process.env.ENV}/`
        + `${process.env.API_VERSION}/`,
});
exports.getAppInfoData = getAppInfoData;
//# sourceMappingURL=Home.services.js.map