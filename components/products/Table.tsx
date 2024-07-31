import { UpdateUser, DeleteUser, CreateUser } from '@/components/users/buttons';
import { fetchFilteredProducts } from '@/app/lib/data-products';



async function ProductsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const products = await fetchFilteredProducts(query, currentPage)
  return (
    <div className="w-full">
 
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">

              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Modelo
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Categoría
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Imagen
                    </th>
                    <th scope="col" className="relative py-3 pl-6 pr-3">
                      <span className="sr-only">Edit</span>
                    </th>

                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {products?.map((product) => (
                    <tr key={product.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        {product.model}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {product.category?.name}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {product.productImage}
                      </td>
                      <td className="whitespace-nowrap bg-white py-3 pl-6 pr-3">
                        <div className="flex justify-end gap-3">
                          <UpdateUser id={product.id} />
                          <DeleteUser id={product.id} />
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-5 flex w-full justify-center">
                {/* <Pagination totalPages={totalPages} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsTable