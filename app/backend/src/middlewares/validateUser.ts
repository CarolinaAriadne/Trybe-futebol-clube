import { Request, Response, NextFunction } from 'express';
import * as joi from 'joi';

const validateEmail = joi.object({
  email: joi.string()
    .email()
    .required()
    .messages({
      'string.empty': 'All fields must be filled',
    }),
});

const validatePassword = joi.object({
  password: joi.string()
    .required()
    .min(7)
    .messages({
      'string.empty': 'All fields must be filled',
    }),
});

const validEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  const { error } = validateEmail.validate({ email });
  if (error) return res.status(400).json({ message: error.message });
  next();
};

const validPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  const { error } = validatePassword.validate({ password });
  if (error) return res.status(400).json({ message: error.message });
  next();
};

export { validEmail, validPassword };
