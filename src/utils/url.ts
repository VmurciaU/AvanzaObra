/* eslint-disable no-console */
import { Request } from 'express';
import url from 'url';

/**
 * Returns url.
 *
 * @param req
 * @returns {string}
 */
export const getFullUrl = (req: Request) => url.format({
  protocol: req.protocol,
  host: req.get('host'),
  pathname: req.baseUrl + req.path,
});

/**
 * Saca parametros de relation de un req para una peticion de data
 *
 * @param {object}  req - Representa la solicitud HTTP, tiene propiedades para la cadena
 *                        de consulta de solicitud, los parámetros, el cuerpo, los encabezados
 *                        HTTP, etc.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const getRelationsFromUrl = async (req: Request) => {
  try {
    const { relations } = req.query;
    const aRelations = (relations && relations !== '') ? String(relations)?.split(',') : [];
    return aRelations;
  } catch (error) {
    console.log('getRelationsFromUrl - Error');
    console.log(error);
    return [];
  }
};
