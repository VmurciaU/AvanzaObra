/* eslint-disable no-console */
import dotenv from 'dotenv';
import { createApp } from './app/app';
import { startServer } from './server/server';
import { getDataSource } from './db/dbconfig/typeormdb';

const main = async () => {
  try {
    // inicializaron de variables de entorno
    dotenv.config();
    console.log('🚀 Starting Server\n');
    if (process.env.NAME_APP) {
      // Se realiza conexión con Base de datos
      const response = await getDataSource();
      if (!response) {
        console.log('❌ No DB Connection, Server will not start\n');
        return;
      }
      console.log('✅ DB OK, Connected\n');
      const app = createApp();
      startServer(app);
    }
  } catch (error) {
    console.log('Error init index APP');
    console.log(error);
  }
};

main();
