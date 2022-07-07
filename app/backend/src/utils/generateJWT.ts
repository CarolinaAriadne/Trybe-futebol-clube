import jwt from 'jsonwebtoken';
import Users from '../interfaces/Users';

const jwtSecret = 'mysecret';

const token = (user: Users) => {
    const generateToken = jwt.sign({user}, jwtSecret, {
        expiresIn: '45d',
        algotithm: 'HS256',
    });
    return generateToken;
};

export default token;