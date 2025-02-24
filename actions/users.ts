'use server';

import { END_POINT } from '@/constants/api';
import { z } from 'zod';

const userSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(255, { message: 'Name is too long' }),
  email: z.string().email({ message: 'Invalid email' }),
});

export const createUser = async (
  prevState: {
    message: string;
  },
  formData: FormData
) => {
  const form = userSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  if (!form.success) {
    return {
      message: 'Invalid form',
    };
  }

  try {
    await fetch(`${END_POINT}/api/users`, {
      method: 'POST',
      body: JSON.stringify(form.data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return {
      message: `User ${form.data.name} created`,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Failed to create user',
    };
  }
};
