import { Request } from 'express';

export interface BodyRequestRegister {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface BodyRequestLogin {
  email: string;
  password: string;
}

export interface LoginJWTDecoded {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
}

export interface RequestWithuser extends Request {
  userData: LoginJWTDecoded;
}
