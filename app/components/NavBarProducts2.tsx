'use client'
import Link from 'next/link'
import React from 'react'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import {ProductsCategories} from '@prisma/client'



const NavBarProducts2 = ({categories, title, url}:{categories: ProductsCategories[] | undefined, title : string , url:string}) => {
  const pathname = usePathname();
  return (
    <>
      <hr className='mx-auto w-10 bg-blue-700 h-1 lg:hidden mt-2 lg:mt-0' />

      <h2 className="mt-6 lg:mt-2 text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center ">{title}</h2>

      <nav className='flex flex-col text-sm md:flex-row justify-between md:w-[80%] w-[70%] md:mx-auto p-4 md:p-6 font-bold'>
        {categories?.map((catg) => (
          <Link href={`/${url}/${catg.id}`}  key={catg.name} className={clsx('hover:border-black rounded-md p-2 border border-transparent', { 'text-blue-600': pathname === `/${url}/${catg.id}` })}>{catg.name}</Link>
        ))}

      </nav>
    </>
  )
}

export default NavBarProducts2