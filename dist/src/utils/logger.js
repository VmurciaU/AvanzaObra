"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const options = {
    file: {
        level: 'info',
        name: 'info-file',
        filename: './logs/filelog-info-%DATE%.log',
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    },
    fileError: {
        level: 'error',
        name: 'error-file',
        filename: './logs/filelog-error-%DATE%.log',
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'warn',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};
const logger = (0, winston_1.createLogger)({
    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.json(), winston_1.format.timestamp(), winston_1.format.prettyPrint()),
    transports: [
        new winston_daily_rotate_file_1.default(options.file),
        new winston_daily_rotate_file_1.default(options.fileError),
        new winston_1.transports.Console(options.console),
    ],
    exceptionHandlers: [
        new winston_daily_rotate_file_1.default({
            filename: './logs/exceptions-%DATE%.log',
        }),
    ],
    exitOnError: false,
});
exports.default = logger;
//# sourceMappingURL=logger.js.map