import { Request, Response } from 'express';
import User from '../interfaces/Users';
import { UserService } from '../services/UsersService';

class UserController {
  public createUser: UserService;

  constructor() {
    this.createUser = new UserService();
  }

  public createTokenController = async (req: Request, res: Response) => {
    const user: User = req.body;
    const token = await this.createUser.createTokenService(user);
    console.log(token, 'token controller')
    res.status(200).json({ token });
  };
}

export default UserController;
