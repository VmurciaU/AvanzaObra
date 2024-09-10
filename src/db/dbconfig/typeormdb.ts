import { DataSource } from 'typeorm';

// import entities
import { Role } from '../../Entities/Role.class';
// import { User } from '../../Entities/User.class';

// import entities

let appDataSourceInstance: DataSource;

/**
 * Función encarga de realizar conexión con la BD por medio de TypeORM
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
*/

export const getDataSource = async (): Promise<DataSource> => {
  try {
    // Configuración de conexión a la BD
    if (!appDataSourceInstance) {
      appDataSourceInstance = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: true,
        logging: false,
        entities: [
          Role,
          // User,
        ]
      });
      return appDataSourceInstance.initialize();
    }
    return appDataSourceInstance;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Without connection DB', err);
    throw new Error(err);
  }
};
