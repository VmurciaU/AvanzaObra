//  importaciones de librerías
import {
  Request,
  Response,
  NextFunction,
} from 'express';

// Importaciones útiles
import { currentDate } from '../../../../utils/currentDate';
import { getDataSource } from '../../../../db/dbconfig/typeormdb';
import { success } from '../../../../utils/response';

// import Entities
import { Roles } from '../../../../Entities/Roles.class';
import { CreateDateColumn } from 'typeorm';

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
export const SaveRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...body } = req.body;

    // traemos la utilidad para la fechas
    const { date } = currentDate();

    // se realiza una copia del objeto para agregar el pass
    const cBody = { ...body };
    cBody.createdAt = date;
    cBody.updatedAt = date;

    // const userData = Role.getRepository(cBody);
    const dataSource = await getDataSource();
    const roleRepository = dataSource.getRepository(Roles);
    const roleData = await roleRepository.save(cBody);

    const result = success(
      'API Role Save',
      201,
      {
        roleData,
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
   * Obtiene (POST) la información de la API sin validacion
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
export const SaveRoleWithoutToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...body } = req.body;

    // traemos la utilidad para la fechas
    const { date } = currentDate();

    // se realiza una copia del objeto para agregar el pass
    const cBody = { ...body };
    cBody.createdAt = date;
    cBody.updatedAt = date;

    // const roleData = Role.getRepository(cBody);
    const dataSource = await getDataSource();
    const roleRepository = dataSource.getRepository(Roles);
    const roleData = await roleRepository.save(cBody);

    const result = success(
      'API Role Save',
      201,
      {
        roleData,
      },
    );
    res
      .status(201)
      .json(result);
  } catch (err) {
    next(err);
  }
};