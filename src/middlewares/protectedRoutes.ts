/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import boom from '@hapi/boom';

import { createToken } from '../utils/tokens';

export const valTokenAuthUser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // console.log('Encabezados de la solicitud:', req.headers);
  passport.authenticate('jwtValidate', { session: false }, async (error: any, user: any, info: any) => {
    // console.log('Resultado de authenticate:', { error, user, info });
    try {
      if (info) {
        // console.log('Información de error:', info.message);
        if (info.message === 'No auth token') {
          throw boom.unauthorized('Sin token de autorización');
        } else if (info.message === 'jwt expired') {
          throw boom.unauthorized('El token de autorización está vencido');
        } else {
          throw boom.unauthorized(info.message);
        }
      }
      if (error) {
        console.error('Error en la autenticación:', error);
        return next(error);
      }
      if (!user) {
        throw boom.unauthorized('Usuario sin autorización');
      }
      const token = await createToken(user);
      // console.log('Nuevo token generado:', token);
      res.setHeader('new-token', token);
      req.user = user;
      req.params.dataUser = JSON.stringify(user);
      return next();
    } catch (err) {
      console.error('Error en el bloque catch:', err);
      return next(err);
    }
  })(req, res, next);
};
