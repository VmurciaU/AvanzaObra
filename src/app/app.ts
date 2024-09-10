// Importaciones de módulos
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import favicon from 'serve-favicon';
import path from 'path';

// Importaciones útiles
import passport from '../passport/setup';

// Importaciones de middlewares
import {
  logErrors,
  errorHandler
} from '../middlewares/errorHandlers';

// Importaciones de rutas
import homeRoute from '../Events/Home/routes/Home';
import routes from '../routes';

/**
 * Para crear la aplicación de express
 * @returns {express.Application} - Retorna la aplicación de express
 * @author Gustavo Zuluaga
 */
export const createApp = (): express.Application => {
  // Configuración de app
  const app = express(); // Se crea la aplicación de express

  // Se inicializa passport
  app.use(passport.initialize());

  // Se configura el proxy y el límite de tamaño de datos
  app.set('trust proxy', true); // Se confía en el proxy
  app.use(express.json({ limit: '50mb' })); // Se configura el límite de tamaño de datos
  app.use(express.urlencoded({ limit: '50mb', extended: true })); // Se configura el límite de tamaño de datos

  // Se configura Favicon
  app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

  // Configuración de Cors
  app.use(cors());
  // Se configura path y acceso a los archivos públicos
  app.use('/backend/public', express.static(path.join(__dirname, '../public')));

  app.use(helmet()); // Se configura helmet para la seguridad
  app.use(morgan(' ')); // Se configura morgan para los logs
  app.use(express.json()); // Se configura express para el uso de json
  app.use(
    // Se configura express para el uso de urlencoded y se extiende el tamaño de datos
    express.urlencoded({
      extended: true
    })
  );

  // Ruta para el home
  app.use(`/${process.env.API_BASE_URL}`, homeRoute);
  // Rutas de la API
  app.use(`/${process.env.API_BASE_URL}/${process.env.ENV}/${process.env.CONTEXT}/${process.env.API_VERSION}`, routes);

  // Errors middlewares
  app.use(logErrors);
  app.use(errorHandler);

  return app;
};
