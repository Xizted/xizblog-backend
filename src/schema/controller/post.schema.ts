import { z } from 'zod';

export const PostSchema = z.object({
  title: z.string().min(5).max(32),
  description: z.string().min(30).max(65535),
});
