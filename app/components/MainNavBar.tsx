'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {clsx} from 'clsx';

export default function MainNavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

    const openSubMenu = ()=>{
        setIsSubMenuOpen(!isSubMenuOpen)
    }

    return (
        <nav className="bg-transparent fixed z-10 w-full h-24 pt-4">
            {/* container  */}
            <div className="container px-4 mx-auto py-2 flex flex-wrap lg:space-x-4">
                {/* brand */}
                <Link href="/" className="inline-flex">  <Image
                                className="h-8 w-auto"
                                src="/images/logo-on.png"
                                alt="Logo de Vit"
                                height={800}
                                width={800}
                            /></Link>
                {/* brand */}
                {/* toggler btn */}
                <button className="ml-auto lg:hidden inline-flex items-center justify-center border h-10 w-10 text-white rounded-md outline-none focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    

                </button>

                {/* toggler btn */}
                {/* menu  */}
                <div className="lg:pl-24 w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0">
                    <ul className="w-full lg:w-auto flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0">
                        <li>
                            <Link className="flex px-4 py-2 font-medium text-gray-500 hover:bg-blue-800 hover:text-white " href="/">INICIO</Link>
                        </li>
                        <li>
                            <Link className="flex px-4 py-2 font-medium text-gray-500 hover:bg-blue-800 hover:text-white" href="/nosotros">NOSOTROS</Link>
                        </li>
                        <li>
                            <Link className="flex px-4 py-2 font-medium text-gray-500 hover:bg-blue-800 hover:text-white" href="/productos">PRODUCTOS</Link>
                        </li>
                        <li>
                            <Link className="flex px-4 py-2 font-medium text-gray-500 hover:bg-blue-800 hover:text-white" href="/noticias">NOTICIAS</Link>
                        </li>

                        {/* drop down  */}
                        <li className="relative">
                            <button onClick={openSubMenu} className="w-full outline-none focus:outline-none flex   px-4 py-2 font-medium text-gray-500 hover:bg-blue-800 hover:text-white" >SOPORTE</button>
                            <div className="h-0 w-0 border-t-[10px] border-l-[10px] border-r-[10px] border-blue-800  border-l-transparent border-r-transparent mx-auto"></div>
                            {/* drop menu  */}
                            <div onMouseLeave={openSubMenu} className={clsx('lg:absolute bg-white z-10 right-0   p-2',{'hidden': !isSubMenuOpen})}>
                                <ul className="space-y-2 lg:w-48">
                                    <li>
                                        <Link href="#" className="flex p-2 font-medium text-gray-600 hover:bg-gray-300 hover:text-black">categories</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="flex p-2 font-medium text-gray-600 hover:bg-gray-300 hover:text-black">Inventories</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="flex p-2 font-medium text-gray-600 hover:bg-gray-300 hover:text-black">Brands</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* drop menu  */}
                        </li>
                        {/* drop down  */}

                        <li>
                            <Link className="flex px-4 py-2 font-medium text-gray-500 hover:bg-blue-800 hover:text-white" href="/ventas">VENTAS</Link>
                        </li>
                        <li>
                            <Link className="flex px-4 py-2 font-medium text-gray-500 hover:bg-blue-800 hover:text-white" href="/contacto">CONTACTO</Link>
                        </li>
                    </ul>
                </div>
                {/* menu  */}
            </div>
            {/* container  */}
        </nav>
    )
}
