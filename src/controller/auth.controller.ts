import { NextFunction, Request, Response } from 'express';
import { BodyRequestRegister } from '../interfaces/controller/register.interface';
import { RegisterSchema } from '../schema/controller/auth.schema';
import { registerService } from '../services/auth.services';

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body as BodyRequestRegister;
    RegisterSchema.parse(data);

    if (!(data.password === data.confirmPassword))
      throw new Error('Password does not match');

    await registerService(data);
    res.status(201).end();
  } catch (error) {
    next(error);
  }
};

export const loginController = (req: Request, res: Response) => {
  res.status(200).send({ owo: 'owo' });
};
