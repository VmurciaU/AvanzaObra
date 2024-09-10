/* eslint-disable @typescript-eslint/no-explicit-any */
// importaciones de librerias
import { getRepository /* ,InsertResult  */ } from 'typeorm';

// importaciones de type
import { Paginate } from './paginate/paginate';
/**
 * Utils para paginardor en las peticiones API
 *
 * @param {number}  rowsPerPage - Mensaje que se quiere enviar en el response
 * @param {number}  page        - Resultados y/o data que se quiere enviar en el response
 *
 * @returns {object} res - respuesta de success que se quiere enviar.
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */

export const pagination = async (entidad: any, rowsPerPage: number, currentPage: number): Promise<Paginate> => {
  // validacion de la pagina actual cuando es 1 o es mayor a la cantidad total
  let skipPage = 0;
  if (currentPage === 1) {
    skipPage = (currentPage - 1);
  } else {
    skipPage = (currentPage + 1);
  }

  const [data, countRowsQuery] = await getRepository(entidad).findAndCount(
    {
      // where: { ESTADO: 1 },
      take: rowsPerPage,
      skip: (skipPage),
    },
  );

  let firstPage = 1;
  let previousPage = 1;
  let lastPage = 1;
  let perPage = rowsPerPage;

  // calcular las maxima cantidad de paginas de acuerdo a lo que se muestra en
  const totalPages = Math.round(countRowsQuery / rowsPerPage);

  if (rowsPerPage >= countRowsQuery) {
    return {
      firstPage,
      previousPage,
      lastPage,
      perPage,
      totalPages,
      data,
    };
  }

  firstPage = 1; // pagina inicial
  previousPage = (currentPage - 1) > 1 ? (currentPage - 1) : 1; // pagina anterior
  lastPage = (currentPage + 1) >= 1 && (currentPage + 1) <= totalPages ? (currentPage + 1) : totalPages; // pagina siguiente
  perPage = rowsPerPage; // cantidad de registros por pagina

  return {
    firstPage,
    previousPage,
    lastPage,
    perPage,
    totalPages,
    data,
  };
};
