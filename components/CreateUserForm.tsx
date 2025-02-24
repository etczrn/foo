'use client';

import { createUser } from '@/actions/users';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const initialState = {
  message: '',
};

function CreateUserForm() {
  const [state, formAction] = useActionState(createUser, initialState);
  const { pending } = useFormStatus();

  return (
    <>
      <form
        action={formAction}
        className="mt-8 border border-zinc-200 p-4 rounded"
      >
        <h2 className="text-lg font-bold mb-4">Create a user</h2>
        <div className="flex flex-col mb-4">
          <label className="mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-2 border-zinc-200 border rounded focus:outline-none focus:border-zinc-400"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-2 border-zinc-200 border rounded focus:outline-none focus:border-zinc-400"
          />
        </div>
        <button
          type="submit"
          className="p-2 px-4 bg-zinc-900 text-white rounded"
          disabled={pending}
        >
          Create
        </button>
      </form>
      {state.message && (
        <p className="mt-4 p-2 bg-zinc-100 text-zinc-900 rounded">
          {state.message}
        </p>
      )}
    </>
  );
}

export default CreateUserForm;
