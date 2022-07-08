import IUser from '../interfaces/Users';
import User from '../database/models/Users';
import token from '../utils/token';

const erroHandler = (status: number, message: string) => ({
  status,
  message,
});

export default class UserService {
  public createTokenService = async (user: IUser) => {

    const verifyEmail = /\S+@\S+\.\S+/;
    const validEmail = verifyEmail.test(user.email);

    const user2 = await User.findOne({
      where: { email: user.email },
      attributes: { exclude: ['password'] },
    });

    if (user2 !== null && validEmail) {
      const returnToken = token(user2);
      console.log(returnToken, 'returnToken service')
      return returnToken;
    }
    console.log('passei aqui, erro 401')
    throw erroHandler(401, 'Incorrect email or password')
    
  };
}

export { UserService };
