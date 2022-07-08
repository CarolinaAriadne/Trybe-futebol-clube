import * as jwt from 'jsonwebtoken';
import Users from '../interfaces/Users';

const jwtSecret = process.env.JWT_SECRET || 'mysecret';

const token = (user: Users) => {
  const generateToken = jwt.sign({ user }, jwtSecret, { // se der problema token, tirar objeto e infos expi e algoti
    expiresIn: '45d',
    algorithm: 'HS256',
  });
  return generateToken;
};

export default token;
