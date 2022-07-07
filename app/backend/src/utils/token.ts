import * as jwt from 'jsonwebtoken';
import Users from '../interfaces/Users';

const jwtSecret = process.env.JWT_SECRET || 'mysecret';

console.log(process.env.JWT_SECRET);

const token = (user: Users) => {
  const generateToken = jwt.sign({ user }, jwtSecret);
  return generateToken;
};

export default token;
