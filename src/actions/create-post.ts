'use server';

import { auth } from '@clerk/nextjs/server';
import { returnValidationErrors } from 'next-safe-action';
import { actionClient } from '@/lib/safe-action';
import { postSchema } from './validation';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const createPost = actionClient
  .schema(postSchema)
  .action(async ({ parsedInput: { title, content } }) => {
    const { userId } = await auth();

    if (userId) {
      const post = await prisma.post.create({
        data: {
          title,
          content,
          author: {
            connect: {
              clerkId: userId
            }
          }
        }
      });

      revalidatePath('/');
      
      return post;
    }

    return returnValidationErrors(postSchema, {
      _errors: ['You must be signed in to create a post.']
    });
  });
