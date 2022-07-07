import { Request, Response, NextFunction } from 'express';
import * as joi from 'joi';

const validateEmail: joi.ObjectSchema = joi.object({
  email: joi.string()
    .email()
    .required()
    .messages({
      'any.required': '"email" must be a valid email',
    }),
});

const validatePassword = joi.object({
  password: joi.string()
    .required()
    .min(7)
    .messages({
      'string.min': '"password length must be at least 6 characters long',
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
