import Banner from '@/app/components/Banner'
import { fetchProductsById } from '@/app/lib/data-products'
import { DownloadDataSheet } from '@/components/products/buttons'
import Image from 'next/image'
import React from 'react'

const Detailsproduct = async ({ params }: { params: { id: string } }) => {
    const products = await fetchProductsById(params.id);
    return (
        <section className='pt-24'>
            <Banner />
            <article className='w-[80%] mx-auto flex'>
                <article className='w-[60%]'>
                    <h1 className='font-bold text-3xl text-center'>COMPUTADOR PORTÁTIL
                        MODELO VIT P1420</h1>
                    <div className='flex mx-auto justify-center p-4'>
                        <div className='w-[40%] border-b-4 border-red-600'></div>
                        <div><h2 className='font-bold mx-2 text-xl'>Características</h2></div>
                        <div className='w-[40%] border-b-4 border-red-600'></div>
                    </div>
                </article>
                <article className='w-[40%]'>
                    <div className='flex justify-center p-4'><Image alt='' src={`/uploads/${products?.productImage}`} width={400} height={400}/></div>
                    <div className='flex justify-center p-4'><DownloadDataSheet/></div>
                </article> 
            </article>

            {/* <div>Detalles del producto:  {params.id}</div> */}
        </section>

    )
}

export default Detailsproduct