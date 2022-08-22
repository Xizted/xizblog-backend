import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db/db';
import {
  BodyRequestLogin,
  BodyRequestRegister,
} from '../interfaces/controller/register.interface';

export const registerService = async (data: BodyRequestRegister) => {
  if (data.password !== data.confirmPassword)
    throw new Error('Password does not match');

  const passwordHash = await bcrypt.hash(data.password, 10);

  await db.user.create({
    data: {
      ...data,
      password: passwordHash,
    },
  });
};
export const loginService = async (data: BodyRequestLogin) => {
  const { email, password } = data;

  const user = await db.user.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });

  if (user) {
    const passwordVerify = await bcrypt.compare(password, user.password);
    if (!passwordVerify) throw new Error('E-mail or Password is not valid');
    const { password: passwordHash, create_at, updated_at, ...dataUser } = user;
    return jwt.sign(dataUser, process.env.JWT as string);
  } else {
    throw new Error('E-mail or Password is not valid');
  }
};
