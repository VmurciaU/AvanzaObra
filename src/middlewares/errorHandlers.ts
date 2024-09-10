/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import createDebug from 'debug';
import boom from '@hapi/boom';

import { error as errorMessage } from '../utils/response';
import logger from '../utils/logger';

// Importaciones librerías útiles

/**
 * En caso de que no encuentre una ruta en el API
 *
 * @param {object}    req - Representa la solicitud HTTP, tiene propiedades para la cadena
 *                          de consulta de solicitud, los parámetros, el cuerpo, los encabezados
 *                          HTTP, etc.
 * @param {object}    res - Representa la respuesta HTTP que envía una aplicación Express cuando
 *                          recibe una solicitud HTTP.
 * @param {function}  next - Siguiente función en el router o función de middleware.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.route) {
    const {
      output: { statusCode, payload },
    } = boom.notFound();

    return res.status(statusCode).json(errorMessage('No se encontró ruta API', 404, payload));
  } else {
    return next();
  }
};

/**
 * Manejador de errores para los logs de la API
 *
 * @param {object}    err - El error con el que fue llamados los manejadores de errores.
 * @param {object}    req - Representa la solicitud HTTP, tiene propiedades para la cadena
 *                          de consulta de solicitud, los parámetros, el cuerpo, los encabezados
 *                          HTTP, etc.
 * @param {object}    res - Representa la respuesta HTTP que envía una aplicación Express cuando
 *                          recibe una solicitud HTTP.
 * @param {function}  next - Siguiente función en el router o función de middleware.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const logErrors = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const debug = createDebug('FVL:errorHandlers');
  // Debug log
  debug('Error Message %s:', err.message);
  debug(err.stack);

  // error stack
  logger.error(err.stack);
  // add this line to include winston logging
  logger.error(
    `${err.statusCode || 500} - ${err.message || err.body} - ${req.originalUrl
    } - ${req.method} - ${req.ip}`,
  );

  return next(err);
};

/**
 * Validador de errores
 *
 * @param {err} err - El error con el que fue llamados los manejadores de errores.
 *
 * @returns {void}  - No retorna nada.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
const validateError = (err: any) => {
  if (err.error) {
    if (err.error.code === 404) {
      throw boom.notFound(err.error.message);
    }
  }
  if (err.code) {
    if (err.code === 'credentials_bad_format') {
      return boom.unauthorized(
        'Faltan las Credenciales de autenticación o son incorrectas.',
      );
    }

    if (err.code === 'ENOTFOUND') {
      return boom.badImplementation(
        'Se produjo un error interno y no se puede encontrar el servicio.',
      );
    }
  }

  if (err.message) {
    if (err.message.match(/ETIMEDOUT/)) {
      return boom.badGateway(
        'La consulta fue cancelada por límite de tiempo. Inténtalo más tarde.',
      );
    }
    if (
      err.message.match(/connect ECONNREFUSED/)
      || err.message.match(/500 Connection timed out/)
    ) {
      return boom.serverUnavailable(
        'El servicio no se encuentra disponible. Inténtalo más tarde.',
      );
    }
    if (err.message.match(/Code: 400/)) {
      return boom.badImplementation(
        'La solicitud no fue válida o no puede ser servida de otra manera.',
        err.message.split('Response Body:')[1],
      );
    }
    if (err.message.match(/Code: 401/) || err.message.match(/Acceso fallido/)) {
      return boom.unauthorized(
        'Hubo un problema con los datos de autenticación. Por favor, revise su usuario y/o contraseña.',
      );
    }
  }

  if (err.Fault) {
    if (err.Fault.statusCode === 401 || err.response.statusCode === 401) {
      return boom.unauthorized(
        'Hubo un problema con los datos de autenticación. Por favor, revise su usuario y/o contraseña.',
      );
    }
    if (
      Object.prototype.hasOwnProperty.call(err, 'body')
      && (err.body.match(/Code: 401/)
        || err.body.match(/ HTTP 401 - Unauthorized/)
        || err.body.match(/Acceso fallido/))
    ) {
      return boom.unauthorized(
        'Hubo un problema con los datos de autenticación. Por favor, revise su usuario y/o contraseña.',
      );
    }
  }

  if (err.response) {
    if (err.response.data) {
      return boom.badImplementation(
        'Se produjo un error interno y no se puede encontrar el servicio.',
        err.response.data,
      );
    }
    if (
      Object.prototype.hasOwnProperty.call(err, 'message')
      && err.message.match(/Deserialisation failed/)
    ) {
      return boom.badImplementation('Se produjo un error interno desconocido.');
    }
    if (
      Object.prototype.hasOwnProperty.call(err, 'message')
      && err.message.match(/soap-env:Client: Virtual Interface not found/)
    ) {
      return boom.badImplementation(
        'Se produjo un error interno desconocido. Servicio no disponible.',
      );
    }
    if (err.response.body) {
      return boom.badImplementation(
        'Se produjo un error interno desconocido. Servicio no disponible.',
        err.response.body,
      );
    }
  }

  return boom.badImplementation(
    'Se produjo un error interno y no se puede encontrar el servicio.',
    err.data || err.message,
  );
};

/**
 * Manejado de errores Evalúa si es error Boom o no
 *
 * @param {object}    err - El error con el que fue llamados los manejados de errores.
 * @param {object}    req - Representa la solicitud HTTP, tiene propiedades para la cadena
 *                          de consulta de solicitud, los parámetros, el cuerpo, los encabezados
 *                          HTTP, etc.
 * @param {object}    res - Representa la respuesta HTTP que envía una aplicación Express cuando
 *                          recibe una solicitud HTTP.
 * @param {function}  next - Siguiente función en el router o función de middleware.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const wrapErrors = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!err.isBoom) {
    return next(validateError(err));
  } else {
    return next(err);
  }
};

/**
 * Valida errores en el cliente
 *
 * @param {err}       err   - El error con el que fue llamados los manejados de errores.
 * @param {object}    req   - Representa la solicitud HTTP, tiene propiedades para la cadena
 *                            de consulta de solicitud, los parámetros, el cuerpo, los encabezados
 *                            HTTP, etc.
 * @param {object}    res   - Representa la respuesta HTTP que envía una aplicación Express cuando
 *                            recibe una solicitud HTTP.
 * @param {function}  next  - Siguiente función en el router o función de middleware.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const clientErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    data,
    output: { statusCode, payload },
    stack,
  } = err;

  // catch errors for AJAX request or if an error ocurrs while streaming
  if ((!req.accepts('html') || req.xhr) || res.headersSent) {
    return res.status(statusCode).json(
      errorMessage(payload.message, statusCode, { payload, data, stack }),
    );
  } else {
    return next(err);
  }
};

/**
 * Valida errores genéricos
 *
 * @param {err}       err   - El error con el que fue llamados los manejados de errores.
 * @param {object}    req   - Representa la solicitud HTTP, tiene propiedades para la cadena
 *                            de consulta de solicitud, los parámetros, el cuerpo, los encabezados
 *                            HTTP, etc.
 * @param {object}    res   - Representa la respuesta HTTP que envía una aplicación Express cuando
 *                            recibe una solicitud HTTP.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let error = { ...err };
  if (!error.isBoom) {
    error = boom.badImplementation();
  }

  const {
    /* data, */
    output: { statusCode, payload },
    /* stack, */
  } = error;

  return res.status(statusCode).json(errorMessage(payload.message, statusCode, payload));
};
