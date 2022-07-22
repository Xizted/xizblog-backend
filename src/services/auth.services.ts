import bcrypt from 'bcrypt';
import db from '../db/db';
import { BodyRequestRegister } from '../interfaces/controller/register.interface';

export const registerService = async (data: BodyRequestRegister) => {
  const passwordHash = await bcrypt.hash(data.password, 10);

  await db.user.create({
    data: {
      ...data,
      password: passwordHash,
    },
  });
};
