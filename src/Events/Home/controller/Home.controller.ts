import { Request, Response } from 'express';

// Importaciones útiles
import { success } from '../../../utils/response';

// Importaciones de servicios
import { getAppInfoData } from '../services/Home.services';

/**
 * Obtiene (GET) la información de la API
 *
 * @param {object}  req - Representa la solicitud HTTP, tiene propiedades para la cadena
 *                        de consulta de solicitud, los parámetros, el cuerpo, los encabezados
 *                        HTTP, etc.
 * @param {object}  res - Representa la respuesta HTTP que envía una aplicación Express cuando
 *                        recibe una solicitud HTTP.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const getAppInfo = (req: Request, res: Response) => {
  const result = success(
    'API - FVL',
    200,
    getAppInfoData(),
  );
  res
    .status(200)
    .json(result);
};
