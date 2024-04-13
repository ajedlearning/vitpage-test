import Image from 'next/image'
import React from 'react'

function Philosophy() {
    return (
        <section className="flex w-full lg:pt-24 md:pt-0">
            <article className="hidden md:inline md:w-[100%] p-0"><Image src='/images/philosofy.jpg' height={1000} width={1000} alt="Imagen de nosotros" /></article>
            <article className="w-[100%] md:w-[100%] lg:pl-9 pl-5 pt-4 pr-6 md:pl-20 md:pt-6 md:pr-20 text-justify bg-white">
                <hr className='lg:hidden mx-auto w-10 bg-blue-700 h-1 lg:mb-6 mb-6 mt-2 lg:mt-0' />

                <h2 className="mb-6 text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center border-l-8 border-red-700">FILOSOFÍA DE GESTIÓN</h2>

                <h2 className='text-xl md:text-2xl font-bold'>MISIÓN</h2>

                <p className="text-sm md:text-base">Somos una empresa socialista de producción y servicios, dedicada al desarrollo de equipos tecnológicos, para satisfacer las necesidades y expectativas de clientes internos y externos, con una sólida plataforma que tiene talento humano calificado y comprometido a contribuir con el modelo socio productivo de la Nación.</p>

                <h2 className='text-xl md:text-2xl font-bold mt-6'>VISIÓN</h2>

                <p className="text-sm md:text-base">
                    Ser conocida como la principal empresa en el desarrollo de equipos tecnológicos, por la excelencia de sus productos, el profesionalismo, la mística y el compromiso de los trabajadores contribuyendo al desarrollo de la Nación y América Latina.
                </p>

                <h2 className='text-xl md:text-2xl font-bold mt-6'>VALORES</h2>

                <p className="text-sm md:text-base">
                    Trabajo en equipo, ética, compromiso, orientación al cliente, excelencia, productividad, creatividad.
                </p>



            </article>

        </section>
    )
}

export default Philosophy