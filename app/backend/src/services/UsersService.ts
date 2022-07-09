import * as bcrypt from 'bcryptjs';
import CustomError from '../interfaces/custom.error';
import IUser from '../interfaces/Users';
import User from '../database/models/Users';
import token from '../utils/token';

export default class UserService {
  public createTokenService = async (user: IUser) => {
    const user2 = await User.findOne({
      where: { email: user.email },
    });

    if (!user2) {
      throw new CustomError(401, 'Incorrect email or password');
    }

    const validPassword = await bcrypt.compare(user.password, user2.password);

    if (!validPassword) {
      throw new CustomError(401, 'Incorrect email or password');
    }

    const returnToken = token(user2);
    return returnToken;
  };
  // public returnCorrectData = async (user: IUser, req: Request, res: Response, next: NextFunction) => {
   
  // }
}

export { UserService };
