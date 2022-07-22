import { z } from 'zod';

export const RegisterSchema = z.object({
  first_name: z.string().min(3).max(32),
  last_name: z.string().min(3).max(32),
  username: z.string().min(3).max(16),
  email: z.string().min(3).max(32).email(),
  password: z.string().min(8).max(16),
  confirmPassword: z.string().min(8).max(16),
});
