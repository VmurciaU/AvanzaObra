"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.clientErrorHandler = exports.wrapErrors = exports.logErrors = exports.notFoundHandler = void 0;
const debug_1 = __importDefault(require("debug"));
const boom_1 = __importDefault(require("@hapi/boom"));
const response_1 = require("../utils/response");
const logger_1 = __importDefault(require("../utils/logger"));
const notFoundHandler = (req, res, next) => {
    if (!req.route) {
        const { output: { statusCode, payload }, } = boom_1.default.notFound();
        return res.status(statusCode).json((0, response_1.error)('No se encontró ruta API', 404, payload));
    }
    else {
        return next();
    }
};
exports.notFoundHandler = notFoundHandler;
const logErrors = (err, req, res, next) => {
    const debug = (0, debug_1.default)('FVL:errorHandlers');
    debug('Error Message %s:', err.message);
    debug(err.stack);
    logger_1.default.error(err.stack);
    logger_1.default.error(`${err.statusCode || 500} - ${err.message || err.body} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    return next(err);
};
exports.logErrors = logErrors;
const validateError = (err) => {
    if (err.error) {
        if (err.error.code === 404) {
            throw boom_1.default.notFound(err.error.message);
        }
    }
    if (err.code) {
        if (err.code === 'credentials_bad_format') {
            return boom_1.default.unauthorized('Faltan las Credenciales de autenticación o son incorrectas.');
        }
        if (err.code === 'ENOTFOUND') {
            return boom_1.default.badImplementation('Se produjo un error interno y no se puede encontrar el servicio.');
        }
    }
    if (err.message) {
        if (err.message.match(/ETIMEDOUT/)) {
            return boom_1.default.badGateway('La consulta fue cancelada por límite de tiempo. Inténtalo más tarde.');
        }
        if (err.message.match(/connect ECONNREFUSED/)
            || err.message.match(/500 Connection timed out/)) {
            return boom_1.default.serverUnavailable('El servicio no se encuentra disponible. Inténtalo más tarde.');
        }
        if (err.message.match(/Code: 400/)) {
            return boom_1.default.badImplementation('La solicitud no fue válida o no puede ser servida de otra manera.', err.message.split('Response Body:')[1]);
        }
        if (err.message.match(/Code: 401/) || err.message.match(/Acceso fallido/)) {
            return boom_1.default.unauthorized('Hubo un problema con los datos de autenticación. Por favor, revise su usuario y/o contraseña.');
        }
    }
    if (err.Fault) {
        if (err.Fault.statusCode === 401 || err.response.statusCode === 401) {
            return boom_1.default.unauthorized('Hubo un problema con los datos de autenticación. Por favor, revise su usuario y/o contraseña.');
        }
        if (Object.prototype.hasOwnProperty.call(err, 'body')
            && (err.body.match(/Code: 401/)
                || err.body.match(/ HTTP 401 - Unauthorized/)
                || err.body.match(/Acceso fallido/))) {
            return boom_1.default.unauthorized('Hubo un problema con los datos de autenticación. Por favor, revise su usuario y/o contraseña.');
        }
    }
    if (err.response) {
        if (err.response.data) {
            return boom_1.default.badImplementation('Se produjo un error interno y no se puede encontrar el servicio.', err.response.data);
        }
        if (Object.prototype.hasOwnProperty.call(err, 'message')
            && err.message.match(/Deserialisation failed/)) {
            return boom_1.default.badImplementation('Se produjo un error interno desconocido.');
        }
        if (Object.prototype.hasOwnProperty.call(err, 'message')
            && err.message.match(/soap-env:Client: Virtual Interface not found/)) {
            return boom_1.default.badImplementation('Se produjo un error interno desconocido. Servicio no disponible.');
        }
        if (err.response.body) {
            return boom_1.default.badImplementation('Se produjo un error interno desconocido. Servicio no disponible.', err.response.body);
        }
    }
    return boom_1.default.badImplementation('Se produjo un error interno y no se puede encontrar el servicio.', err.data || err.message);
};
const wrapErrors = (err, req, res, next) => {
    if (!err.isBoom) {
        return next(validateError(err));
    }
    else {
        return next(err);
    }
};
exports.wrapErrors = wrapErrors;
const clientErrorHandler = (err, req, res, next) => {
    const { data, output: { statusCode, payload }, stack, } = err;
    if ((!req.accepts('html') || req.xhr) || res.headersSent) {
        return res.status(statusCode).json((0, response_1.error)(payload.message, statusCode, { payload, data, stack }));
    }
    else {
        return next(err);
    }
};
exports.clientErrorHandler = clientErrorHandler;
const errorHandler = (err, req, res, next) => {
    let error = Object.assign({}, err);
    if (!error.isBoom) {
        error = boom_1.default.badImplementation();
    }
    const { output: { statusCode, payload }, } = error;
    return res.status(statusCode).json((0, response_1.error)(payload.message, statusCode, payload));
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandlers.js.map