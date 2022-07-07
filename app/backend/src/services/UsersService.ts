import IUser from '../interfaces/Users';
import Users from '../database/models/Users';
import token from '../utils/token';

// const erroHandler = (status: number, message: string) => ({
//   status,
//   message,
// });

export default class UserService {
  public createUserService = async (user: IUser) => {
    const user2 = await Users.findOne({ where: { email: user.email } });

    if (user2 !== null) {
      const returnToken = token(user2);
      return returnToken;
    }
  };
}

export { UserService };
