//  importaciones de librerías
import {
  Request,
  Response,
  NextFunction,
} from 'express';
import bcryptjs from 'bcryptjs';

// Importaciones útiles
import { currentDate } from '../../../..//utils/currentDate';
import { success } from '../../../..//utils/response';

// import Entities
import { getDataSource } from '../../../../db/dbconfig/typeormdb';
import { User } from '../../../../Entities/User.class';

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
   * Obtiene (PUT) la información de la API
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
export const UpdateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { password, idRole, ...body } = req.body;

    // validamos si el password viene para cambio lo encriptamos
    if (password) {
      body.password = await hashPassword(password);
    }

    if (idRole) {
      // asignamos el rol
      body.idRole = idRole.id;
    }

    // traemos la utilidad para la fechas
    const { date } = currentDate();
    // se realiza una copia del objeto para agregar el pass
    const cBody = { ...body };
    cBody.password = password;
    cBody.updatedAt = date;

    // const userData = User.getRepository(cBody);
    const dataSource = await getDataSource();
    const userRepository = dataSource.getRepository(User);
    const userData = await userRepository.createQueryBuilder().update(cBody).where(
      {
        id,
      },
    )
      .updateEntity(true)
      .execute();

    const result = success(
      'API User Update',
      200,
      {
        userData,
      },
    );
    res
      .status(200)
      .json(result);
  } catch (err) {
    next(err);
  }
};
