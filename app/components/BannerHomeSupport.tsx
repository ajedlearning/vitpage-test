import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BannerHomeSupport = () => {
  return (
    <>
      <hr className='mx-auto w-10 bg-blue-700 h-1 mb-6' />
      <h2 className=" text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center mb-8  ">SOPORTE TÉCNICO</h2>
      <div className='mb-10 w-full h-64 bg-[url("/images/callcenter.png")] bg-fixed bg-center bg-no-repeat bg-cover '>
        <div className='px-6 lg:px-0 w-full h-64 bg-[url("/images/pattern3.png")] bg-repeat flex  flex-col justify-center items-center pt-4' >
          <Image src={`/images/support-img.png`} width={835} height={162} alt='' />
          <Link href={`/soporte`} className='mt-4 lg:mt-0 border border-white h-10 p-2 rounded-md hover:bg-slate-500 flex items-center justify-center'><h2 className='text-white font-bold'>Más información</h2></Link>

        </div>
      </div>
    </>
  )
}

export default BannerHomeSupport 