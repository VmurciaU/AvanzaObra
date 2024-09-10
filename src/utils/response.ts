/* eslint-disable @typescript-eslint/no-explicit-any */
// Importaciones de tipos
import { Response } from './response/Response';

/**
 * Envía cualquier respuesta satisfactoria
 *
 * @param {string}  message - Mensaje que se quiere enviar en el response
 * @param {any}  data - Resultados y/o data que se quiere enviar en el response
 * @param {number} statusCode - Código de estatus que se quiere enviar en la respuesta
 *
 * @returns {object} res - respuesta de success que se quiere enviar.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const success = (message: string, statusCode: number, data: any): Response => ({
  message,
  error: false,
  code: statusCode,
  data,
});

/**
 * Envía cualquier respuesta de error
 *
 * @param {string}  message - Mensaje que se quiere enviar en el response
 * @param {number} statusCode - Código de estatus que se quiere enviar en la respuesta
 *
 * @returns {object} res - respuesta de success que se quiere enviar.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const error = (message: string, statusCode: number, data: any|null): Response => ({
  message,
  error: true,
  code: statusCode,
  data,
});

/**
 * Envía cualquier respuesta de error
 *
 * @param {object}  errors - Objeto con los errores a enviar en el response
 *
 * @returns {object} res - respuesta de success que se quiere enviar.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const validation = (errors: object): Response => ({
  message: 'Errores de validación',
  error: true,
  code: 422,
  data: errors,
});
