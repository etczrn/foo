import 'server-only';

import { END_POINT } from '@/constants/api';

type Category = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
};

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: number;
  is_available: number;
  category: Category;
  created_at: string;
  updated_at: string;
};

type Response<T> = {
  data: T;
};

export async function getProducts(): Promise<Response<Product[]>> {
  const res = await fetch(`${END_POINT}/products`);
  const data = await res.json();

  console.log('get products');

  return data;
}
