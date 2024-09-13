//  importaciones de librerias
import {
  Request,
  Response,
  NextFunction,
} from 'express';
import bcryptjs from 'bcryptjs';

// Importaciones útiles
import { success } from '../../../../utils/response';
import { currentDate } from '../../../../utils/currentDate';

// import Entities
import { getDataSource } from '../../../../db/dbconfig/typeormdb';
import { Users } from '../../../../Entities/Users.class';

/**
 * Crea el hash del password
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const hashPassword = async (password: string) => {
  // Random
  const salt = await bcryptjs.genSalt(Number(process.env.BCRYPT_SALT));
  const hash = bcryptjs.hashSync(password, salt);
  return hash;
};

/**
   * Obtiene (POST) la información de la API
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
export const SaveUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, idRole, ...body } = req.body;

    // validamos si el password viene para cambio lo encriptamos
    if (password) {
      body.password = await hashPassword(password);
    }
    // asignamos el rol
    body.idRole = idRole;

    // traemos la utilidad para la fechas
    const { date } = currentDate();
    // se realiza una copia del objeto para agregar el pass
    const cBody = { ...body };
    cBody.createdAt = date;
    cBody.updatedAt = date;

    // const userData = User.getRepository(cBody);
    const dataSource = await getDataSource();
    const userRepository = dataSource.getRepository(Users);
    const userData = await userRepository.save(cBody);

    const result = success(
      'API User Insert',
      201,
      {
        userData,
      },
    );
    res
      .status(201)
      .json(result);
  } catch (err) {
    next(err);
  }
};

/**
   * Obtiene (POST) la información de la API sin validación
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
export const SaveUserWithoutToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, ...body } = req.body;

    // validamos si el password viene para cambio lo encriptamos
    if (password) {
      body.password = await hashPassword(password);
    }

    // traemos la utilidad para la fechas
    const { date } = currentDate();

    // se realiza una copia del objeto para agregar el pass
    const cBody = { ...body };
    cBody.createdAt = date;
    cBody.updatedAt = date;

    const dataSource = await getDataSource();
    const userRepository = dataSource.getRepository(Users);
    const userData = await userRepository.save(cBody);

    const result = success(
      'API User Save',
      201,
      {
        userData,
      },
    );
    res
      .status(201)
      .json(result);
  } catch (err) {
    next(err);
  }
};
