import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Download, FileDownIcon } from 'lucide-react';
import Link from 'next/link';
// import { deleteInvoice } from '@/app/lib/actions';

export function CreateProduct() {
  return (
    <Link
      href="/vitproducts/add"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Crear Producto</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
      
    </Link>
  );
}

export function DownloadDataSheet() {
  return (
    <Link
      href="/vitproducts/add"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Descargar Ficha</span>{' '}
      <Download className="h-5 md:ml-4"/>
      
    </Link>
  );
}
export function CreateVersion() {
  return (
    <Link
      href="/vitproducts/versions/add"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Crear Version</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateProduct({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteProduct({ id }: { id: string }) {
//   const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <>
      {/* <form action={deleteInvoiceWithId} > */}
      <form  >
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form >
    </>
  );
}
