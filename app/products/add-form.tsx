'use client';

import { createProduct } from '@/actions/products';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const initialState = {
  message: '',
};

export function AddForm() {
  const [state, formAction] = useActionState(createProduct, initialState);
  const { pending } = useFormStatus();

  return (
    <>
      <form
        action={formAction}
        className="border border-gray-400 p-4 rounded-2xl flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="p-2 border border-gray-200 rounded"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="font-bold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="p-2 border border-gray-200 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price" className="font-bold">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            required
            className="p-2 border border-gray-200 rounded"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category_id" className="font-bold">
            Category
          </label>
          <select
            id="category_id"
            name="category_id"
            required
            className="p-2 border border-gray-200 rounded"
          >
            <option value="1">Education</option>
            <option value="2">Finance</option>
            <option value="3">Clothing</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={pending}
          className="p-2 bg-black text-white rounded"
        >
          Add
        </button>
      </form>
      {state.message && (
        <p className="text-center text-green-500">{state.message}</p>
      )}
    </>
  );
}
