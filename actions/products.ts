'use server';

import { END_POINT } from '@/constants/api';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const schema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters' })
    .max(255, { message: 'Name must be at most 255 characters' }),
  description: z
    .string()
    .min(3, { message: 'Description must be at least 3 characters' })
    .max(255, { message: 'Description must be at most 255 characters' }),
  price: z.string(),
  // price: z.number(),
  category_id: z.string(),
});

export async function createProduct(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const parse = schema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    category_id: formData.get('category_id'),
  });

  if (!parse.success) {
    const { fieldErrors } = parse.error.flatten();
    const message = Object.entries(fieldErrors)
      .map(([, value]) => `${value}`)
      .join(', ');

    return {
      message,
    };
  }

  const { data } = parse;

  try {
    const res = await fetch(`${END_POINT}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      return {
        message: 'Failed to create product',
      };
    }

    revalidatePath('/');

    return {
      message: 'Product created successfully',
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Failed to create product',
    };
  }
}
