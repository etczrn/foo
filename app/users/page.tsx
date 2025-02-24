import CreateUserForm from '@/components/CreateUserForm';

export default async function Page() {
  return (
    <main className="max-w-screen-md mx-auto px-4 py-8">
      <section>
        <h1 className="text-xl font-bold">Manage users</h1>
        {/* list */}
      </section>
      <CreateUserForm />
    </main>
  );
}
