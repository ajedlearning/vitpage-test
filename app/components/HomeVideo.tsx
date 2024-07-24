import Link from 'next/link'
import React from 'react'

const HomeVideo = () => {
    return (
        <article className="hidden md:flex  justify-center relative lg:mb-10">


            <video className="" autoPlay muted loop>
                <source src="/video/home-video.mp4" type="video/mp4" />
            </video>

            <Link href={`https://www.youtube.com/@computadorvit1154`} target='_blank' className='absolute bottom-6  border border-white h-10 p-6 rounded-md hover:bg-slate-500 flex items-center justify-center'><h2 className='text-white font-bold'>VISITAR CANAL DE YOUTUBE</h2></Link>

        </article>
    )
}

export default HomeVideo