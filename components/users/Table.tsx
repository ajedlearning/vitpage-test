import { lusitana } from '@/components/ui/font'
import { Users } from "@prisma/client"
import { UpdateUser, DeleteUser, CreateUser } from '@/components/users/buttons';
import { fetchFilteredUsers } from '@/app/lib/data';



async function UsersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const users = await fetchFilteredUsers(query, currentPage)
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
                      Nombre
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Rol
                    </th>
                    <th scope="col" className="relative py-3 pl-6 pr-3">
                      <span className="sr-only">Edit</span>
                    </th>

                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {users?.map((user) => (
                    <tr key={user.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        {user.name}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {user.email}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {user.role}
                      </td>
                      <td className="whitespace-nowrap bg-white py-3 pl-6 pr-3">
                        <div className="flex justify-end gap-3">
                          <UpdateUser id={user.id} />
                          <DeleteUser id={user.id} />
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

export default UsersTable