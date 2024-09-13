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
import { Tasks } from '../../../../Entities/Tasks.class';

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
export const getTaskAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dataSource = await getDataSource();
    const taskRepository = dataSource.getRepository(Tasks);
    const taskdata = await taskRepository.find({
      where: {
        state: 1,
      },
      relations: ['user', 'projects', 'states'],
    });

    const result = success(
      'API Tasks All',
      200,
      {
        taskdata,
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
export const getTaskId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const dataSource = await getDataSource();
    const taskRepository = dataSource.getRepository(Tasks);
    const taskdata = await taskRepository.find({
      where: {
        id: Number(id),
      },
      relations: ['user', 'projects', 'states'],
    });

    const result = success(
      'API Tasks Id',
      200,
      {
        taskdata,
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
export const getTaskSelect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dataSource = await getDataSource();
    const taskRepository = dataSource.getRepository(Tasks);
    const taskdata = await taskRepository.find({
      where: {
        state: 1,
      },
      relations: ['user', 'projects', 'states'],
    });

    const result = success(
      'API Tasks All',
      200,
      {
        taskdata,
      },
    );
    res
      .status(200)
      .json(result);
  } catch (err) {
    next(err);
  }
};
