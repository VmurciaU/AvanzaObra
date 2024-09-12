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
import { Charges } from '../../../../Entities/Charges.class';

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
export const UpdateCharge = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { ...body } = req.body;

    // traemos la utilidad para la fechas
    const { date } = await currentDate();
    // se realiza una copia del objeto para agregar el pass
    const cBody = { ...body };
    cBody.updatedAt = date;

    const dataSource = await getDataSource();
    const chargeRepository = dataSource.getRepository(Charges);
    const chargeData = await chargeRepository.createQueryBuilder().update(cBody).where(
      {
        id,
      },
    )
      .updateEntity(true)
      .execute();

    const result = success(
      'API Charge Update',
      200,
      {
        chargeData,
      },
    );
    res
      .status(200)
      .json(result);
  } catch (err) {
    next(err);
  }
};
