import moment from 'moment';
import boom from '@hapi/boom';

// Importaciones de tipos
import { PingServer } from '../types/PingServer';

/**
 * Servicio obtiene la data a retornar en el ping
 *
 * @returns {PingServer}  - Data del servicio de ping
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const getDataPingServer = (): PingServer => {
  try {
    const dateNow = moment();
    return {
      dateServer: dateNow.toDate(),
      dateServerMiliseconds: dateNow.valueOf(),
      dateServerYYYYMMDD: dateNow.format('YYYY/MM/DD'),
      timeServerHHMMDD: dateNow.format('HH:mm:ss'),
    };
  } catch (err) {
    throw boom.badImplementation(err.error.message);
  }
};
