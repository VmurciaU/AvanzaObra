"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = exports.error = exports.success = void 0;
const success = (message, statusCode, data) => ({
    message,
    error: false,
    code: statusCode,
    data,
});
exports.success = success;
const error = (message, statusCode, data) => ({
    message,
    error: true,
    code: statusCode,
    data,
});
exports.error = error;
const validation = (errors) => ({
    message: 'Errores de validación',
    error: true,
    code: 422,
    data: errors,
});
exports.validation = validation;
//# sourceMappingURL=response.js.map