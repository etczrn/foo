import { AddForm } from './add-form';
import { getProducts } from '@/utils/products';

export default async function Page() {
  const { data: products } = await getProducts();

  return (
    <main className="mx-auto max-w-screen-lg px-4 py-8 grid grid-cols-2 gap-4">
      <h1 className="text-3xl font-bold col-span-2">Manage products</h1>
      <section>
        <h2 className="text-2xl font-bold mb-2">List of products</h2>
        <ul className="grid grid-cols-2 gap-2">
          {products.map(({ id, name, price, category }) => (
            <li key={id} className="p-2 rounded-2xl bg-gray-100">
              <h2 className="font-bold">Name: {name}</h2>
              <p>Price: {price}</p>
              <p>Category: {category.name}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="sticky top-4 h-fit self-start">
        <h2 className="text-2xl font-bold mb-2">Add a product</h2>
        <AddForm />
      </section>
    </main>
  );
}
