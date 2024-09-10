import { NextFunction, Request, Response } from 'express';
import boom from '@hapi/boom';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface CustomJwtPayload extends JwtPayload {
  id: string;
  email: string;
  name: string;
  lastname: string;
  user: string;
  idRole: number;
  role: string[];
  iat: number;
  exp: number;
}

/**
 * Middleware encargado de verificar que el rol del usuario sea admin
 *
 * @param {object}    req   - Representa la solicitud HTTP, tiene propiedades para la cadena
 *                          de consulta de solicitud, los parámetros, el cuerpo, los encabezados
 *                          HTTP, etc.
 * @param {object}    res   - Representa la respuesta HTTP que envía una aplicación Express cuando
 *                          recibe una solicitud HTTP.
 * @param {function}  next  - Siguiente función en el router o función de middleware.
 *
 */
export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      boom.unauthorized('Authorization header missing');
    }

    // El token se envía en el formato "Bearer <token>"
    const token = authHeader ? authHeader.split(' ')[1] : '';
    if (!token) {
      boom.unauthorized('Token missing');
    }

    const decoded = jwt.verify(token, String(process.env.JWT_SECRET)) as CustomJwtPayload;
    // Verificar si el usuario tiene el rol de admin (role: 1)
    const isAdmin = decoded.idRole = 1;
    if (!isAdmin) {
      boom.unauthorized('No tiene autorización para esta petición');
    }

    // Asigna el usuario decodificado al objeto req para su uso posterior
    req.user = decoded;
    next();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    boom.unauthorized('Invalid token');
  }
};
