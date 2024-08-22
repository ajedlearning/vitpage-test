import { fetchCategories } from '@/app/lib/data-products'
import FormAddProducts from '@/components/products/FormAddProducts'
import React from 'react'

const page = async () => {
  const categories = await fetchCategories();
  return (
    <div className='min-h-screen mx-auto '>
      <h1 className='font-bold mb-10'>Registro de Productos</h1>
      <FormAddProducts categories={categories} />
    </div>
  )
}

export default page