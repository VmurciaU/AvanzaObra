//  importaciones de librerías
import {
  Request,
  Response,
  NextFunction,
} from 'express';

// Importaciones útiles
import { getDataSource } from '../../../../db/dbconfig/typeormdb';
import { success } from '../../../../utils/response';
import { currentDate } from '../../../../utils/currentDate';

// import Entities
import { Tasks } from '../../../../Entities/Tasks.class';

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
export const UpdateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { ...body } = req.body;

    // traemos la utilidad para la fechas
    const { date } = await currentDate();
    // se realiza una copia del objeto para agregar el pass
    const cBody = { ...body };
    cBody.updatedAt = date;

    const dataSource = await getDataSource();
    const taskRepository = dataSource.getRepository(Tasks);
    const taskData = await taskRepository.createQueryBuilder().update(cBody).where(
      {
        id,
      },
    )
      .updateEntity(true)
      .execute();

    const result = success(
      'API Task Update',
      200,
      {
        taskData,
      },
    );
    res
      .status(200)
      .json(result);
  } catch (err) {
    next(err);
  }
};
