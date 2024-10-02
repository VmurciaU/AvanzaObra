//  importaciones de librerías
import {
  Request,
  Response,
  NextFunction,
} from 'express';

// Importaciones útiles
import { getDataSource } from '../../../../db/dbconfig/typeormdb';
import { success } from '../../../../utils/response';

// import Entities
import { Roles } from '../../../../Entities/Roles.class';

/**
 * Obtiene (GET) la información de la API all
 *
 * @param {object}  req - Representa la solicitud HTTP, tiene propiedades para la cadena
 *                        de consulta de solicitud, los parámetros, el cuerpo, los encabezados
 *                        HTTP, etc.
 * @param {object}  res - Representa la respuesta HTTP que envía una aplicación Express cuando
 *                        recibe una solicitud HTTP.
 * @param {function}  next - Siguiente función en el router o función de middleware.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const getRoleAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dataSource = await getDataSource();
    const roleRepository = dataSource.getRepository(Roles);
    const roles = await roleRepository.find({
      relations: ['user'],
    });

    const result = success(
      'API Roles All',
      200,
      {
        roles,
      },
    );
    res
      .status(200)
      .json(result);
  } catch (err) {
    next(err);
  }
};

/**
 * Obtiene (GET) la información de la API all
 *
 * @param {object}  req - Representa la solicitud HTTP, tiene propiedades para la cadena
 *                        de consulta de solicitud, los parámetros, el cuerpo, los encabezados
 *                        HTTP, etc.
 * @param {object}  res - Representa la respuesta HTTP que envía una aplicación Express cuando
 *                        recibe una solicitud HTTP.
 * @param {function}  next - Siguiente función en el router o función de middleware.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const getRoleId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const dataSource = await getDataSource();
    const roleRepository = dataSource.getRepository(Roles);
    const roles = await roleRepository.find({
      where: {
        id: Number(id),
      },
    });

    const result = success(
      'API Roles Id',
      200,
      {
        roles,
      },
    );
    res
      .status(200)
      .json(result);
  } catch (err) {
    next(err);
  }
};

/**
 * Obtiene (GET - SELECT) la información de la API all
 *
 * @param {object}  req - Representa la solicitud HTTP, tiene propiedades para la cadena
 *                        de consulta de solicitud, los parámetros, el cuerpo, los encabezados
 *                        HTTP, etc.
 * @param {object}  res - Representa la respuesta HTTP que envía una aplicación Express cuando
 *                        recibe una solicitud HTTP.
 * @param {function}  next - Siguiente función en el router o función de middleware.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const getRoleSelect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dataSource = await getDataSource();
    const roleRepository = dataSource.getRepository(Roles);
    const roles = await roleRepository.find({
      where: {
        state: 1,
      },
      relations: ['user'],
    });

    const result = success(
      'API Roles All',
      200,
      {
        roles,
      },
    );
    res
      .status(200)
      .json(result);
  } catch (err) {
    next(err);
  }
};
