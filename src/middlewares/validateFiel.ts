//  importaciones de librerías
import {
  Request,
  Response,
  NextFunction,
} from 'express';

// importaciones de la validaciones
import { validationResult } from 'express-validator';

// Importaciones útiles
import { error } from '../utils/response';

export const validateField = (req: Request, res: Response, next: NextFunction) => {
  // validaciones de errores por la librería express validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const result = error(
      'API Error FVL',
      400,
      {
        message: 'Se encontraron errores',
        errors,
      },
    );
    return res
      .status(400)
      .json(result);
  }

  return next();
};
