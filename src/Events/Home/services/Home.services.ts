// Importaciones del package
import pkg from '../../../../package.json';

// Importaciones de tipos
import { THomeInformation } from '../types/Home';

/**
 * Servicio obtiene la información de la aplicación
 *
 * @returns {THomeInformation}  - Información de la aplicación
 *
 * @author Crhistian Vargas <crhistian.varga@gmail.com>
 * @version 1.0.0
 */
export const getAppInfoData = (): THomeInformation => ({
  app: {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    author: pkg.author,
    maintainers: pkg.maintainers,
    host: process.env.APP_HOST || '',
    env: process.env.ENV || '',
    base_url: process.env.API_BASE_URL || '',
    api_version: process.env.API_VERSION || '',
    port: Number(process.env.PORT),
  },
  micros_endpoint: `${process.env.APP_HOST}:${process.env.PORT}/`
  + `${process.env.API_BASE_URL}/${process.env.ENV}/`
  + `${process.env.API_VERSION}/`,
});
