import usersService from './service';
import { FastifyReply, FastifyRequest } from 'fastify';

export class UsersController {
  getAll = async (req: FastifyRequest, res: FastifyReply) => {
    const users = await usersService.getAll();

    return res.status(200).send(users);
  };
}


export default new UsersController();
