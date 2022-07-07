import { Request, Response } from 'express';
import User from '../interfaces/Users';
import { UserService } from '../services/UsersService';

class UserController {
  public createUser: UserService;

  constructor() {
    this.createUser = new UserService();
  }

  public createUserController = async (req: Request, res: Response) => {
    const user: User = req.body;
    const token = await this.createUser.createUserService(user);
    res.status(200).json({ token });
  };
}

export default UserController;