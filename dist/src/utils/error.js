"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildError = void 0;
const http_status_1 = __importDefault(require("http-status"));
const buildError = (err) => {
    if (err.isJoi || err instanceof SyntaxError) {
        return {
            code: http_status_1.default.BAD_REQUEST,
            message: http_status_1.default[http_status_1.default.BAD_REQUEST],
            details: err.details
                && err.details.map((error) => ({
                    message: error.message,
                    param: error.path,
                })),
        };
    }
    if (err.isBoom) {
        return {
            code: err.output.statusCode,
            message: err.output.payload.message || err.output.payload.error,
        };
    }
    return {
        code: http_status_1.default.INTERNAL_SERVER_ERROR,
        message: http_status_1.default[http_status_1.default.INTERNAL_SERVER_ERROR],
    };
};
exports.buildError = buildError;
//# sourceMappingURL=error.js.map