import Image from 'next/image'
import React from 'react'

function Philosophy() {
    return (
        <section className="flex w-full">
            <article className="w-[50%] border p-0 text-justify"><Image src='/images/philosofy.jpg' height={1000} width={1000} alt="Imagen de nosotros" /></article>
            <article className="w-[50%] pl-20 pt-6 pr-20 text-justify bg-white">

                <h2 className="mb-6 text-5xl font-bold p-2 text-center border-l-8 border-red-700">FILOSOFÍA DE GESTIÓN</h2>

                <h2 className='text-2xl font-bold'>MISIÓN</h2>

                <p>Somos una empresa socialista de producción y servicios, dedicada al desarrollo de equipos tecnológicos, para satisfacer las necesidades y expectativas de clientes internos y externos, con una sólida plataforma que tiene talento humano calificado y comprometido a contribuir con el modelo socio productivo de la Nación.</p>

                <h2 className='text-2xl font-bold mt-6'>VISIÓN</h2>

                <p>
                Ser conocida como la principal empresa en el desarrollo de equipos tecnológicos, por la excelencia de sus productos, el profesionalismo, la mística y el compromiso de los trabajadores contribuyendo al desarrollo de la Nación y América Latina. 
                </p>

                <h2 className='text-2xl font-bold mt-6'>VALORES</h2>

                <p>
                Trabajo en equipo, ética, compromiso, orientación al cliente, excelencia, productividad, creatividad.
                </p>



            </article>

        </section>
    )
}

export default Philosophy