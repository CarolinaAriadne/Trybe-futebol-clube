import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/UsersService';
import IUser from '../interfaces/Users';

class UserController {
  public login: UserService;

  constructor() {
    this.login = new UserService();
  }

  public createTokenController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: IUser = req.body;
      const token = await this.login.createTokenService(user);
      res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
