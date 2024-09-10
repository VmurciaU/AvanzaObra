import { Request, Response, NextFunction } from 'express';

// Importaciones útiles
import { success } from '../../../utils/response';

/**
 * Obtiene (GET) de la información de usuarios de la API
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
export const ValidateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    const result = success(
      'Validación Token',
      200,
      {
        token,
        message: 'token valido',
      },
    );
    res
      .status(200)
      .json(result);
  } catch (err) {
    next(err);
  }
};
