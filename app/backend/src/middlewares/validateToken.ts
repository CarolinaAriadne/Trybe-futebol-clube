import { Request, Response, NextFunction } from 'express';
import CustomError from '../interfaces/custom.error';
import * as  jwt from 'jsonwebtoken';

const verifyToken = (req: Request, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
    if (!authorization) {
      throw new CustomError(401, 'Token not found');
    }
  try {
     const decoded = jwt.decode(authorization);
     
    } catch (err) {
    next(err);
  }
};

export default verifyToken;
