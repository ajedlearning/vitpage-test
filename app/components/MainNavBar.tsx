'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation'

export default function MainNavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const [isSubMenuOpenAbout, setIsSubMenuOpenAbout] = useState(false)
    const [isSubMenuOpenNews, setIsSubMenuOpenNews] = useState(false)
    const [isSubMenuOpenSales, setIsSubMenuOpenSales] = useState(false)
    const [scroll, setScroll] = useState(false);

    const pathname = usePathname();

    const openSubMenu = (e: any) => {
        console.log(e.target.id)
        setIsSubMenuOpen(true)
    }
    const openSubMenuAbout = () => {
        setIsSubMenuOpenAbout(true)
    }
    const openSubMenuNews = () => {
        setIsSubMenuOpenNews(true)
    }
    const openSubMenuSales = () => {
        setIsSubMenuOpenSales(true)
    }
    const closeSubMenu = () => {
        setIsSubMenuOpen(false)
    }
    const closeSubMenuAbout = () => {
        setIsSubMenuOpenAbout(false)
    }
    const closeSubMenuNews = () => {
        setIsSubMenuOpenNews(false)
    }
    const closeSubMenuSales = () => {
        setIsSubMenuOpenSales(false)
    }

    const openMenuMobile = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const detectScroll = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setScroll(true);
                setIsMenuOpen(false)
            } else {
                setScroll(false);
            }
        })
    }

    useEffect(() => {
        detectScroll()

    }, [])




    return (
        <nav className={`fixed z-10 w-full h-24 pt-4 transition-all duration-500 ease-in ${scroll ? 'lg:bg-white transition-all duration-500 ease-in border-b-gray-400 bg-blue-800' : 'bg-blue-800 lg:bg-transparent'}`}>
            {/* container  */}
            <div className="lg:container w-full px-4 mx-auto py-2 flex flex-wrap lg:space-x-4">
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
                <button onClick={openMenuMobile} className="ml-auto lg:hidden inline-flex items-center justify-center border h-10 w-10 text-white rounded-md outline-none focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>


                </button>

                {/* toggler btn */}
                {/* menu  */}
                <div className="lg:pl-24 w-full lg:inline-flex lg:w-auto mt-4 lg:mt-0">
                    <ul className={`bg-blue-800 lg:bg-transparent w-full lg:w-auto lg:flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 ${isMenuOpen ? 'flex' : 'hidden'}`}>
                        <li>
                            <Link className={clsx('flex px-4 py-2 font-medium text-white lg:text-gray-500 hover:bg-blue-800 hover:text-white', { 'bg-blue-800 lg:text-white': pathname === "/" })} href="/">INICIO</Link>
                        </li>
                        <li className="relative" onMouseEnter={openSubMenuAbout} onMouseLeave={closeSubMenuAbout}>
                            <button className={`${isSubMenuOpenAbout? 'bg-blue-700 text-wrap':'hover:bg-blue-800 hover:text-white lg:text-gray-500 '} w-full outline-none focus:outline-none flex   px-4 py-2 font-medium text-white `} >NOSOTROS</button>
                            <div className="h-0 w-0 border-t-[10px] border-l-[10px] border-r-[10px] border-blue-800  border-l-transparent border-r-transparent mx-auto"></div>
                            {/* drop menu  */}
                            <div className={clsx('lg:absolute bg-white z-10 right-0   p-2', { 'hidden': !isSubMenuOpenAbout })}>

                                <ul className="space-y-2 lg:w-48">
                                    <li>
                                        <Link href="/nosotros" className="flex lg:p-2 pl-6 py-2 font-medium text-gray-600 hover:bg-gray-300 hover:text-black text-sm">RESEÑA HISTÓRICA</Link>
                                    </li>
                                    <li>
                                        <Link href="/nosotros/filosofia-de-gestion" className="flex lg:p-2 pl-6 py-2 font-medium text-gray-600 hover:bg-gray-300 hover:text-black text-sm">FILOSOFÍA DE GESTIÓN</Link>
                                    </li>
                                   
                                </ul>
                            </div>
                            {/* drop menu  */}
                        </li>
                        <li>
                            <Link className={clsx('flex px-4 py-2 font-medium text-white lg:text-gray-500 hover:bg-blue-800 hover:text-white', { 'bg-blue-800 lg:text-white': pathname === "/productos" })} href="/productos">PRODUCTOS</Link>
                        </li>
                        <li className="relative" onMouseEnter={openSubMenuNews} onMouseLeave={closeSubMenuNews}>
                            <button className={`${isSubMenuOpenNews? 'bg-blue-700 text-wrap':'hover:bg-blue-800 hover:text-white lg:text-gray-500 '} w-full outline-none focus:outline-none flex   px-4 py-2 font-medium text-white `} >NOTICIA</button>
                            <div className="h-0 w-0 border-t-[10px] border-l-[10px] border-r-[10px] border-blue-800  border-l-transparent border-r-transparent mx-auto"></div>
                            {/* drop menu  */}
                            <div className={clsx('lg:absolute bg-white z-10 right-0   p-2', { 'hidden': !isSubMenuOpenNews })}>

                                <ul className="space-y-2 lg:w-48">
                                    <li>
                                        <Link href="#" className="flex lg:p-2 pl-6 py-2 font-medium text-gray-600 hover:bg-gray-300 hover:text-black text-sm">NOTAS DE PRENSA</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="flex lg:p-2 pl-6 py-2 font-medium text-gray-600 hover:bg-gray-300 hover:text-black text-sm">RADIO EN LÍNEA</Link>
                                    </li>
                                  
                                </ul>
                            </div>
                            {/* drop menu  */}
                        </li>

                        {/* drop down  */}

                        <li className="relative" onMouseEnter={openSubMenu} onMouseLeave={closeSubMenu}>
                            <button className={`${isSubMenuOpen? 'bg-blue-700 text-wrap':'hover:bg-blue-800 hover:text-white lg:text-gray-500 '} w-full outline-none focus:outline-none flex   px-4 py-2 font-medium text-white `} >SOPORTE</button>
                            <div className="h-0 w-0 border-t-[10px] border-l-[10px] border-r-[10px] border-blue-800  border-l-transparent border-r-transparent mx-auto"></div>
                            {/* drop menu  */}
                            <div className={clsx('lg:absolute bg-white z-10 right-0   p-2', { 'hidden': !isSubMenuOpen })}>

                                <ul className="space-y-2 lg:w-48">
                                    <li>
                                        <Link href="/controladores" className="flex lg:p-2 pl-6 py-2 font-medium text-gray-600 hover:bg-gray-300 hover:text-black text-sm">CONTROLADORES</Link>
                                    </li>
                                    <li>
                                        <Link href="/soporte" className="flex lg:p-2 pl-6 py-2 font-medium text-gray-600 hover:bg-gray-300 hover:text-black text-sm">SOPORTE TÉCNICO</Link>
                                    </li>
                                   
                                </ul>
                            </div>
                            {/* drop menu  */}
                        </li>
                        {/* drop down  */}

                      {/* drop down  */}

                      <li className="relative" onMouseEnter={openSubMenuSales} onMouseLeave={closeSubMenuSales}>
                            <button className={`${isSubMenuOpenSales? 'bg-blue-700 text-wrap':'hover:bg-blue-800 hover:text-white lg:text-gray-500 '} w-full outline-none focus:outline-none flex   px-4 py-2 font-medium text-white `} >VENTAS</button>
                            <div className="h-0 w-0 border-t-[10px] border-l-[10px] border-r-[10px] border-blue-800  border-l-transparent border-r-transparent mx-auto"></div>
                            {/* drop menu  */}
                            <div className={clsx('lg:absolute bg-white z-10 right-0   p-2', { 'hidden': !isSubMenuOpenSales })}>

                                <ul className="space-y-2 lg:w-48">
                                    <li>
                                        <Link href="#" className="flex lg:p-2 pl-6 py-2 font-medium text-gray-600 hover:bg-gray-300 hover:text-black text-sm">COMERCIO EXTERIOR</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="flex lg:p-2 pl-6 py-2 font-medium text-sm text-gray-600 hover:bg-gray-300 hover:text-black">VENTAS INSTITUCIONALES</Link>
                                    </li>
                                 
                                </ul>
                            </div>
                            {/* drop menu  */}
                        </li>
                        {/* drop down  */}
                        <li>
                            <Link className={clsx('flex px-4 py-2 font-medium text-white lg:text-gray-500 hover:bg-blue-800 hover:text-white', { 'bg-blue-800 lg:text-white': pathname === "/contacto" })} href="/contacto">CONTACTO</Link>
                        </li>
                    </ul>
                </div>
                {/* menu  */}
            </div>
            {/* container  */}
        </nav>
    )
}
