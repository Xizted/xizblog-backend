import { NextFunction, Request, Response } from 'express';
import {
  BodyRequestLogin,
  BodyRequestRegister,
} from '../interfaces/controller/register.interface';
import { LoginSchema, RegisterSchema } from '../schema/controller/auth.schema';
import { loginService, registerService } from '../services/auth.services';

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body as BodyRequestRegister;
    RegisterSchema.parse(data);
    await registerService(data);
    res.status(201).end();
  } catch (error) {
    next(error);
  }
};

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body as BodyRequestLogin;
    LoginSchema.parse(data);
    const token = await loginService(data);
    res.status(200).send({ token });
  } catch (error) {
    next(error);
  }
};
