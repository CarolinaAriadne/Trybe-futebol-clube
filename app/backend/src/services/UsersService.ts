import IUser from '../interfaces/Users';
import User from '../database/models/Users';
import token from '../utils/token';

const erroHandler = (status: number, message: string) => ({
  status,
  message,
});

// const errorMessage = { code: 400, message: 'All fields must be filled' };

export default class UserService {
  public createTokenService = async (user: IUser) => {
    const user2 = await User.findOne({
      where: { email: user.email },
      attributes: { exclude: ['password'] },
    });

    if (user2 !== null) {
      const returnToken = token(user2);
      return returnToken;
    }
  };
}

export { UserService };
