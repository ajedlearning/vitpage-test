// import { getUsers } from "@/app/lib/data"
import UsersTable from "@/components/users/Table";
import { lusitana } from '@/components/ui/font'
import { CreateUser } from '@/components/users/buttons';
import Search from "@/components/Search"
import Pagination from "@/components/users/Pagination";
import { fetchUserPages } from "@/app/lib/data";


const UserPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || '';
  const totalPages = await fetchUserPages(query) ?? 0;
  // const users = await getUsers();
  const currentPage = Number(searchParams?.page) || 1;

  return (
    // <div><UsersTable users= {users} /></div>

    <div className="w-[70%] mx-auto">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Usuarios</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar usuarios..." />
        <CreateUser />
      </div>
      {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}> */}
        <UsersTable query={query} currentPage={currentPage} />
        {/* <UsersTable users= {users}  /> */}
      {/* </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
        
      </div>
    </div>
  )
}

export default UserPage