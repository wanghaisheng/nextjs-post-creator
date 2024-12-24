import { z } from 'zod';

export const postSchema = z.object({
  title: z.string().min(3).max(24),
  content: z.string().min(3)
});
