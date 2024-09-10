/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import boom from '@hapi/boom';

// Importaciones útiles
import { createToken } from '../../utils/tokens';

/**
 * Middleware encargado de verificar el token de usuarios por medio
 *
 * @param {object}    req   - Representa la solicitud HTTP, tiene propiedades para la cadena
 *                          de consulta de solicitud, los parámetros, el cuerpo, los encabezados
 *                          HTTP, etc.
 * @param {object}    res   - Representa la respuesta HTTP que envía una aplicación Express cuando
 *                          recibe una solicitud HTTP.
 * @param {function}  next  - Siguiente función en el router o función de middleware.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const valTokenAuthUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate('jwtValidate', { session: false }, async (error: any, user: any, info: any) => {
    try {
      // Si existe info
      // error relacionado con la validez del token (error en su firma, caducado, etc)
      if (info) {
        // Se valida si el mensaje es por que falta el token
        if (info.message === 'No auth token') {
          throw boom.unauthorized('Sin token de autorización');
        } else if (info.message === 'jwt expired') {
          throw boom.unauthorized('El token de autorización está vencido');
        } else {
          throw boom.unauthorized(info.message);
        }
      }
      // Si existe cualquier otro error
      if (error) { return next(error); }

      // Si el token está firmado correctamente pero no pasa validación de usuario
      if (!user) {
        throw boom.unauthorized('Usuario sin autorización');
      }

      // Se crea token por medio de la utiliadad
      const token = await createToken(user);
      // Se agrega al response el nuevo token
      res.setHeader('new-token', token);
      // Se inyecta la data en el request
      req.user = user;
      req.params.dataUser = JSON.stringify(user);
      return next();
    } catch (err) {
      return next(err);
    }
  })(req, res, next);
};
