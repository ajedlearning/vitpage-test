import Link from 'next/link'
import React from 'react'

function NavBarProducts() {
  return (
    <nav className='flex flex-col text-sm md:flex-row justify-between md:w-[80%] w-[50%] md:mx-auto p-6 font-bold'>
        <Link href={``} className='hover:border-black rounded-md p-2 border border-transparent'>ESCRITORIO</Link>
        <Link href={``} className='hover:border-black rounded-md p-2 border border-transparent'>PORTATILES</Link>
        <Link href={``} className='hover:border-black rounded-md p-2 border border-transparent'>MINI COMPUTADOR</Link>
        <Link href={``} className='hover:border-black rounded-md p-2 border border-transparent'>TABLETAS</Link>
        <Link href={``} className='hover:border-black rounded-md p-2 border border-transparent'>SERVIDORES</Link>
    </nav>
  )
}

export default NavBarProducts