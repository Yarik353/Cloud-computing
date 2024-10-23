import config from './config';
import Fastify from 'fastify';
import usersController from './contoller';
import mysqlClient from './mysql-client';
import cors from '@fastify/cors';
import * as os from 'os';
import { getServerIp } from './utils';


const fastify = Fastify({
  logger: true
});

fastify.register(cors, { origin: true });

fastify.get('/api/server-info', async (request, reply) => {
  return { ip: getServerIp() };
});

fastify.get('/users', usersController.getAll);


async function initHttpGateway(): Promise<void> {
  try {
    await mysqlClient.connect().then(() => console.log('Connected to MySQL'));
    await fastify.listen({ port: config.HTTP_PORT, host: config.HOST });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

initHttpGateway();
