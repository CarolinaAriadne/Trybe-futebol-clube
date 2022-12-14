import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import CustomError from '../interfaces/custom.error';
import IDecode from '../interfaces/decode';

const jwtSecret = process.env.JWT_SECRET || 'mysecret';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new CustomError(401, 'Token not found');
    }

    const decoded = jwt.verify(authorization, jwtSecret);

    const { user } = decoded as IDecode;

    req.body.user = user;
    next();
  } catch (err: any) {
    next({status:401, message:'Token must be a valid token'});
  }
};

export default verifyToken;
