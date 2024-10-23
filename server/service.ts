import mysqlClient from './mysql-client';
import { Knex } from 'knex';


class UsersService {
  constructor(private dbClient: Knex) {
  }

  async getAll() {
    return this.dbClient('users').select('*');
  }
}


export default new UsersService(mysqlClient.getClient());
