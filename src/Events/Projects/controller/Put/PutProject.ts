//  importaciones de librerías
import {
  Request,
  Response,
  NextFunction,
} from 'express';

// Importaciones útiles
import { currentDate } from '../../../../utils/currentDate';
import { success } from '../../../../utils/response';

// import Entities
import { getDataSource } from '../../../../db/dbconfig/typeormdb';
import { Projects } from '../../../../Entities/Projects.class';

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
export const UpdateProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { idTask, ...body } = req.body;

    if (idTask) {
      // asignamos el rol
      body.idTask = idTask;
    }

    // traemos la utilidad para la fechas
    const { date } = currentDate();
    // se realiza una copia del objeto para agregar la task
    const cBody = { ...body };
    cBody.updatedAt = date;

    const dataSource = await getDataSource();
    const projectRepository = dataSource.getRepository(Projects);
    const projectData = await projectRepository.createQueryBuilder().update(cBody).where(
      {
        id,
      },
    )
      .updateEntity(true)
      .execute();

    const result = success(
      'API Project Update',
      200,
      {
        projectData,
      },
    );
    res
      .status(200)
      .json(result);
  } catch (err) {
    next(err);
  }
};
