import moment from 'moment';
import 'moment/locale/es';

// importacion de Type
import { DateT } from './Date/date';

export const currentDate = (): DateT => {
  moment.locale('es-co'); // localte parametrizaciones de la libreria moment
  const date = new Date();
  const realTime = new Date();

  return {
    date,
    realTime,
  };
};
