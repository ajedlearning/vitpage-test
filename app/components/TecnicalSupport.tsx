import React from 'react'
import WarantyPolicies from '@/app/components/WarantyPolicies'
import WarantyRestrictions from '@/app/components/WarantyRestrictions'
import WarantySoftware from '@/app/components/WarantySoftware'
import Image from 'next/image'

const TecnicalSupport = () => {
    return (
        <div>
            <section>
                <h2 className=" text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center ">SOPORTE TÉCNICO</h2>
                <hr className='w-[3%] mt-3 mx-auto h-2 bg-blue-700' />
                <article className='w-[80%]  mx-auto '>
                    <Image src={`/images/soporte-tecnico.png`} width={2000} height={1414} alt='Imagen de soporte técnico' />
                </article>
                <section className=''>

                    <WarantyPolicies/>

                    <WarantyRestrictions/>

                    <WarantySoftware/>

                    

                </section>
            </section>
        </div>
    )
}

export default TecnicalSupport