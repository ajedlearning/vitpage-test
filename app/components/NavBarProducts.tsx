import Link from 'next/link'
import React from 'react'

function NavBarProducts() {
  return (
    <nav className='flex justify-between w-[50%] mx-auto p-8 font-bold'>
        <Link href={``} className='hover:bg-slate-400 p-4'>ESCRITORIO</Link>
        <Link href={``} className='hover:bg-slate-400 p-4'>PORTATILES</Link>
        <Link href={``} className='hover:bg-slate-400 p-4'>MINI COMPUTADOR</Link>
        <Link href={``} className='hover:bg-slate-400 p-4'>TABLETAS</Link>
        <Link href={``} className='hover:bg-slate-400 p-4'>SERVIDORES</Link>
    </nav>
  )
}

export default NavBarProducts