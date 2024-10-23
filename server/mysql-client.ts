import config from './config';
import knex, { Knex } from 'knex';

class MysqlDB {
  private _connectionEstablished: boolean;
  private readonly client: Knex;

  constructor() {
    this._connectionEstablished = false;
    this.client = knex({
      client: 'mysql2',
      connection: {
        host: config.DB_HOSTNAME,
        port: config.DB_PORT,
        user: config.DB_USERNAME,
        password: config.DB_PASSWORD,
        database: config.DB_NAME,
        pool: { min: 1, max: 10 }
      }
    });
  }

  async connect() {
    console.log('trying to establish a connection...');
    await this.client.raw('SELECT 1');
    this._connectionEstablished = true;
    console.log('connection has been established successfully');
  }

  getClient(): Knex {
    return this.client;
  }

  isUniqueViolationError(error: unknown): boolean {
    return error instanceof Error && 'code' in error && error['code'] === '23505';
  }
}

export default new MysqlDB();
