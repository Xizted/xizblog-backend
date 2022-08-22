import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import {
  LoginJWTDecoded,
  RequestWithuser,
} from '../interfaces/controller/auth.interface';

const userExtractor = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.get('authorization');

  let token = '';

  if (authorization && authorization.toLocaleLowerCase().startsWith('bearer')) {
    token = authorization.substring(7);
  }

  const decodedToken = jwt.verify(token, process.env.JWT as string);

  if (!token || !(decodedToken as LoginJWTDecoded).id) {
    return res.status(401).json({ error: 'token missing or invalind' });
  }

  const userData = decodedToken;

  (req as RequestWithuser).userData = userData as LoginJWTDecoded;

  next();
};

export default userExtractor;
