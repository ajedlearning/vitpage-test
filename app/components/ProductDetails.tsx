import Image from 'next/image'
import React from 'react'

function ProductDetails() {
    return (
        <section className="flex w-full md:pt-2 pt-0">
            <article className="hidden md:inline md:w-[100%] pl-4 p-0"><Image src='/images/desktop.jpg' height={463} width={768} alt="Imagen de nosotros" /></article>
            <article className="w-[100%] md:w-[100%] pl-9 pt-0 pr-6 md:pl-20 md:pt-6 md:pr-20 text-justify bg-white">

                <h2 className="mb-2 md:mb-6 text-2xl md:text-3xl font-bold p-2 text-left">Modelo E2250</h2>

               


            </article>

        </section>
    )
}

export default ProductDetails