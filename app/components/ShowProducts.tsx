import React from 'react'
import ProductsVersion from './ProductsVersion'

const ShowProducts = () => {
    return (
        <section className='flex flex-col md:flex-row mx-2'>
            <article  className='md:w-[50%] w-[90%] p-4 order-1 md:-order-none'>Imagen</article>
            <article className='md:w-[50%] w-[100%] p-4 ' >
                <h2 className='font-bold p-1 mb-6 text-xl'>Modelo E2250</h2>
                <ProductsVersion/>
                <ProductsVersion/>
                <ProductsVersion/>
                
            </article>
        </section>
    )
}

export default ShowProducts