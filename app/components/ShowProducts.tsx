import React from 'react'
import ProductsVersion from './ProductsVersion'
import Image from 'next/image'

const ShowProducts = () => {
    return (
        <section className='flex flex-col md:flex-row mx-2'>
            <article className='flex justify-center items-center  md:w-[50%] w-[100%] p-4 order-1 md:-order-none'><Image src={`/images/desktop.jpg`} height={463} width={768} alt="Imagen de nosotros" /></article>
            <article className=' md:w-[50%] w-[100%] p-4 ' >
                <h2 className='font-bold p-1 mb-6 text-xl'>Modelo E2250</h2>
                <ProductsVersion />
                <ProductsVersion />
                <ProductsVersion />
                

            </article>
        </section>
    )
}

export default ShowProducts