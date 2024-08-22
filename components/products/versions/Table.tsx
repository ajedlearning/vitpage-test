import { UpdateUser, DeleteUser, CreateUser } from '@/components/users/buttons';
import { fetchFilteredVersions } from '@/app/lib/data-products';



async function VersionsTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const versions = await fetchFilteredVersions(query, currentPage)
    return (
        <div className="w-full">

            <div className="mt-6 flow-root">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">

                            <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                                    <tr>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Equipo
                                        </th>
                                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                            Versión
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Especificaciones
                                        </th>
                                        <th scope="col" className="relative py-3 pl-6 pr-3">
                                            <span className="sr-only">Edit</span>
                                        </th>

                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 text-gray-900">
                                    {versions?.map((version) => (
                                        <tr key={version.id} className="group">
                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                {version.product?.model}
                                            </td>
                                            <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                                                {version.name}
                                            </td>

                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                {version.espeficications}
                                            </td>
                                            <td className="whitespace-nowrap bg-white py-3 pl-6 pr-3">
                                                <div className="flex justify-end gap-3">
                                                    <UpdateUser id={version.id} />
                                                    <DeleteUser id={version.id} />
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

export default VersionsTable