

import Image from 'next/image'
import React from 'react'

const AboutImage = () => {
    return (
        <article className='hidden md:block w-[60%] mx-auto py-10'>
            <Image
                src="/images/aboutus.png"
                className="block w-full"
                alt="..."
                height={548}
                width={1200}
            />
        </article>
    )
}

export default AboutImage