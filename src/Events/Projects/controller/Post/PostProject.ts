//  importaciones de librerias
import {
  Request,
  Response,
  NextFunction,
} from 'express';

// Importaciones útiles
import { success } from '../../../../utils/response';
import { currentDate } from '../../../../utils/currentDate';

// import Entities
import { getDataSource } from '../../../../db/dbconfig/typeormdb';
import { Projects } from '../../../../Entities/Projects.class';

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
export const SaveProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { idTask, ...body } = req.body;

    // asignamos la tarea
    body.idTask = idTask;

    // traemos la utilidad para la fechas
    const { date } = currentDate();
    // se realiza una copia del objeto para agregar la tarea
    const cBody = { ...body };
    cBody.createdAt = date;
    cBody.updatedAt = date;

    const dataSource = await getDataSource();
    const projectRepository = dataSource.getRepository(Projects);
    const projectData = await projectRepository.save(cBody);

    const result = success(
      'API Project Insert',
      201,
      {
        projectData,
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
export const SaveProjectWithoutToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { idTask, ...body } = req.body;

    // asignamos la tarea
    body.idTask = idTask;
    // traemos la utilidad para la fechas
    const { date } = currentDate();

    // se realiza una copia del objeto para agregar el pass
    const cBody = { ...body };
    cBody.createdAt = date;
    cBody.updatedAt = date;

    const dataSource = await getDataSource();
    const projectRepository = dataSource.getRepository(Projects);
    const projectData = await projectRepository.save(cBody);

    const result = success(
      'API Project Save',
      201,
      {
        projectData,
      },
    );
    res
      .status(201)
      .json(result);
  } catch (err) {
    next(err);
  }
};
