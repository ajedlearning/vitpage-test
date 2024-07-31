import FormAddProducts from '@/components/products/FormAddProducts'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen mx-auto '>
      <h1 className='font-bold mb-10'>Registro de Productos</h1>
      <FormAddProducts />
    </div>
  )
}

export default page