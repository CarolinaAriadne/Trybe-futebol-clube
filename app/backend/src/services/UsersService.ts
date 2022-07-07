import User from "../interfaces/Users";
import Users from "../database/models/Users";
import generateJwt from "../utils/generateJWT";


const erroHandler = (status: any, message: any) => ({
  status,
  message,
});

export default class UserService {
  public createUser: Users;

  constructor() {
    this.createUser = new Users();
  }

  public async createUserService(user: User) {
    const user2 = await Users.findOne({ where: { email: user.email } });
    if (user.password.length > 6) {
    }
    await Users.create(user);
    
    return generateJwt(user2);

  }
}

export { UserService };
