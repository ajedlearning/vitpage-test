'use client'
import Link from 'next/link'
import React from 'react'
import {clsx} from 'clsx'
import {usePathname} from 'next/navigation'

const products = [
    {
      id: '1',
      name: 'ESCRITORIO',
      image: '/images/desktop.jpg',
      link: '/productos/1'
    },
    {
      id: '2',
      name: 'PORTATILES',
      image: '/images/portatiles.webp',
      link: '/productos/2'
    },
    {
      id: '3',
      name: 'MINI COMPUTADOR',
      image: '/images/minicomputador.webp',
      link: '/productos/3'
    },
    {
      id: '4',
      name: 'TABLETAS',
      image: '/images/tabletas.webp',
      link: '/productos/4'
    },
    {
      id: '5',
      name: 'SERVIDORES',
      image: '/images/servidores.webp',
      link: '/productos/5'
    },
  ] 
const NavBarProducts2 = () => {
  const pathname = usePathname();
  return (
    <nav className='flex flex-col text-sm md:flex-row justify-between md:w-[80%] w-[70%] md:mx-auto p-4 md:p-6 font-bold'>
    {products.map((prod) => (
      <Link href={prod.link}  id={prod.id} key={prod.id} className={clsx('hover:border-black rounded-md p-2 border border-transparent', {'text-blue-600': pathname===prod.link})}>{prod.name}</Link>
    ))}

  </nav>
  )
}

export default NavBarProducts2