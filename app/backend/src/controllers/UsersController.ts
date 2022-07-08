import { NextFunction, Request, Response } from 'express';
import User from '../interfaces/Users';
import { UserService } from '../services/UsersService';

class UserController {
  public createUser: UserService;

  constructor() {
    this.createUser = new UserService();
  }

  public createTokenController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: User = req.body;
      const token = await this.createUser.createTokenService(user);
      res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
