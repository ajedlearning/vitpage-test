import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BannerHomeControllers = () => {
  return (
    <section className='hidden lg:block'>
      <hr className='mx-auto w-10 bg-blue-700 h-1 mb-6' />
      <h2 className=" text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center mb-8 ">CONTROLADORES</h2>
      <div className='mb-10 mb-0 w-full h-64 bg-[url("/images/bg-banner-controllers.jpg")] bg-fixed bg-center bg-no-repeat bg-cover '>
        <div className='px-6 lg:px-0 w-full h-64 bg-[url("/images/pattern3.png")] bg-repeat flex justify-center space-x-10  items-center pt-4' >
          <div className='w-[15%]'>
            <Link href={`/controladores/1`} className=''>
              <Image className='' src={`/images/icon-allinone.png`} width={399} height={173} alt='Todo en uno'/>
            </Link>
          </div>
          <div className='w-[15%]'>
            <Link href={`/controladores/2`} className=''>
              <Image className='' src={`/images/icon-pc.png`} width={399} height={173} alt='Pc de escritorio'/>
            </Link>
          </div>
          <div className='w-[15%]'>
            <Link href={`/controladores/3`} className=''>
              <Image className='' src={`/images/icon-tablet.png`} width={399} height={173} alt='Portátiles'/>
            </Link>
          </div>
          <div className='w-[15%]'>
            <Link href={`/controladores/4`} className=''>
              <Image className='' src={`/images/icon-servidores.png`} width={399} height={173} alt='Servidores'/>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default BannerHomeControllers 