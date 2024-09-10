import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

// importaciones de modelos
import { createToken } from '../../../utils/tokens';
import { success } from '../../../utils/response';

// Importaciones útiles

/**
 * Obtiene (POST) Hacer Login de usuario por base de datos
 *
 * @param {object}  req - Representa la solicitud HTTP, tiene propiedades para la cadena
 *                        de consulta de solicitud, los parámetros, el cuerpo, los encabezados
 *                        HTTP, etc.
 * @param {object}  res - Representa la respuesta HTTP que envía una aplicación Express cuando
 *                        recibe una solicitud HTTP.
 * @param {function}  next - Siguiente función en el router o función de middleware.
 *
 * @author Gustavo Zuluaga <cdtv@outlook.com>
 * @version 1.0.0
 */
export const doLoginUser = (req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  passport.authenticate('local', { session: false }, async (error: any, user: any) => {
    try {
      // si hubo un error en el callback verify relacionado con la consulta de datos de usuario
      if (error || !user) {
        next(error);
      } else {
        const token = await createToken(user);
        const result = success(
          'Login - OK',
          200,
          {
            user,
            token,
          },
        );
        res
          .status(200)
          .json(result);
      }
    } catch (err) {
      next(err);
    }
  })(req, res);
};
