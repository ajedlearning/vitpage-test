import { lusitana } from '@/app/fonts'
import { CreateProduct } from '@/components/products/buttons'
import ProductsTable from '@/components/products/Table'
import Search from '@/components/Search'
import { fetchVersionsPages } from '@/app/lib/data-products'
import Pagination from '@/components/users/Pagination'
import VersionsTable from '@/components/products/versions/Table'

const page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {

  const query = searchParams?.query || '';
  const totalPages = await fetchVersionsPages(query) ?? 0;
  // const users = await getUsers();
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="w-[70%] mx-auto">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Versiones de Equipos</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar productos..." />

        <CreateProduct />

      </div>
      {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}> */}
      <VersionsTable query={query} currentPage={currentPage} />

      {/* <UsersTable users= {users}  /> */}
      {/* </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />



      </div>
    </div>
  )
}

export default page