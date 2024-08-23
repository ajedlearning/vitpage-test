import { fetchAllProducts } from '@/app/lib/data-products'
import FormAddVersion from '@/components/products/versions/FormAddVersion'
import React from 'react'

const AddVersions = async () => {
    const products = await fetchAllProducts();
    return (
        <div className='min-h-screen mx-auto '>
            <h1 className='font-bold mb-10'>Registro de Versiones</h1>
            <FormAddVersion products={products} />
        </div>
    )
}

export default AddVersions