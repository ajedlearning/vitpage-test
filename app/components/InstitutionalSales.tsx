import Image from 'next/image'
import React from 'react'

function InstitutionalSales() {
  return (
    <section className='flex flex-col lg:flex-row lg:w-[100%] mx-auto md:pt-28'>
    <article className=' lg:w-[50%] w-full px-2 lg:px-4'>
      <h2 className="lg:ml-4 self-start mt-28 lg:mt-0 mb-6 text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center border-l-8 border-red-700">VENTAS INSTITUCIONALES</h2>

      <article className="flex flex-col justify-around pl-4  min-h-[70%]">
        <article className="px-2 lg:px-0">
          <h3 className="font-bold lg:text-2xl text-xl lg:pt-0 pt-2">COMPUTADORES PERSONALES</h3>
          <p className="text-justify lg:text-base text-sm">Para solicitar ventas a la administración pública nacional, puede comunicarse con el número telefónico <a className="text-blue-700" href="tel:+5804265610166">(+58) 0426- 5610166.</a> </p>
        </article>
        <article className="px-2 lg:px-0">
          <h3 className="font-bold lg:text-2xl text-xl lg:pt-0 pt-2">SERVIDORES</h3>
          <p className="text-justify lg:text-base text-sm">Para solicitar información sobre la venta de Servidores VIT, puede comunicarse con los números telefónicos <a className="text-blue-700" href="tel:+5804265610166">(+58) 0426- 5610166.</a></p>
        </article>
        <article className="px-2 lg:px-0">

          <h3 className="font-bold lg:text-2xl text-xl lg:pt-0 pt-2">CORREO</h3>
          <p className="text-justify lg:text-base text-sm">También puede escribir al correo electrónico <a className="text-blue-700" href="mailto:wlopez@vit.gob.ve" >wlopez@vit.gob.ve</a>, dirigiendo su solicitud a la Gerencia de Comercialización de VIT.</p>
        </article>

      </article >
    </article>

    <article className='lg:w-[50%] w-f lg:mt-0 mt-4 '>
      <Image className="w-full" src={`/images/ventas-institucionales.jpg`} width={700} height={659} alt="Imagen de ventas institucionales, dama ejecutiva en un mostrador" />
    </article>
    
  </section>
  )
}

export default InstitutionalSales