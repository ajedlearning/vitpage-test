'use client'
import Link from 'next/link'
import React from 'react'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import {ProductsCategories} from '@prisma/client'



const NavBarProducts2 = ({categories}:{categories: ProductsCategories[]}) => {
  const pathname = usePathname();
  return (
    <>
      <h2 className=" text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center ">PRODUCTOS</h2>

      <nav className='flex flex-col text-sm md:flex-row justify-between md:w-[80%] w-[70%] md:mx-auto p-4 md:p-6 font-bold'>
        {categories?.map((catg) => (
          <Link href={`/productos/${catg.id}`}  key={catg.name} className={clsx('hover:border-black rounded-md p-2 border border-transparent', { 'text-blue-600': pathname === `/productos/${catg.id}` })}>{catg.name}</Link>
        ))}

      </nav>
    </>
  )
}

export default NavBarProducts2