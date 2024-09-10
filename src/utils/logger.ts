import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

// define the custom settings for each transport (file, console)
const options = {
  file: {
    level: 'info',
    name: 'info-file',
    filename: './logs/filelog-info-%DATE%.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  fileError: {
    level: 'error',
    name: 'error-file',
    filename: './logs/filelog-error-%DATE%.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
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

// instantiate a new Winston Logger with the settings defined above
const logger = createLogger({
  format: format.combine(
    format.colorize(),
    format.json(),
    format.timestamp(),
    format.prettyPrint(),
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new DailyRotateFile(options.file),
    new DailyRotateFile(options.fileError),
    new transports.Console(options.console),
  ],
  exceptionHandlers: [
    new DailyRotateFile({
      filename: './logs/exceptions-%DATE%.log',
    }),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

export default logger;
