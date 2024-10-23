import * as dotenv from 'dotenv';

dotenv.config();


const config = {
  HTTP_PORT: process.env.HTTP_PORT ? parseInt(process.env.HTTP_PORT) : 5000,
  HOST: process.env.HOST || '0.0.0.0',

  DB_PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_HOSTNAME: process.env.DB_HOSTNAME,
};

export default config;
