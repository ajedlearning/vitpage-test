'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='h-20 md:h-32 flex flex-col  justify-center items-center bg-gray-400 '>
            <div className="md:flex space-x-4 hidden ">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link
                    href="/"
                    className={`text-white hover:text-blue-600 rounded-md px-3 py-2 text-[0.750rem] font-medium`}
                    aria-current="page"
                >
                    INICIO
                </Link>
                <Link
                    href="/nosotros"
                    className={`  text-white hover:text-blue-600 rounded-md px-3 py-2 text-[0.750rem] font-medium`}
                >
                    NOSOTROS
                </Link>
                <Link
                    href="/productos"
                    className={`  text-white hover:text-blue-600 rounded-md px-3 py-2 text-[0.750rem] font-medium`}
                >
                    PRODUCTOS
                </Link>
                <Link
                    href="/noticias"
                    className={`  text-white hover:text-blue-600 rounded-md px-3 py-2 text-[0.750rem] font-medium`}
                >
                    NOTICIAS
                </Link>
                <Link
                    href="/soporte"
                    className={`  text-white hover:text-blue-600 rounded-md px-3 py-2 text-[0.750rem] font-medium`}
                >
                    SOPORTE
                </Link>
                <Link
                    href="/ventas"
                    className={`  text-white hover:text-blue-600 rounded-md px-3 py-2 text-[0.750rem] font-medium`}
                >
                    VENTAS
                </Link>
                <Link
                    href="/contacto"
                    className={`  text-white hover:text-blue-600 rounded-md px-3 py-2 text-[0.750rem]   font-medium`}
                >
                    CONTACTO
                </Link>
            </div>
            <div onClick={scrollToTop} className={` ${showButton ? 'flex justify-center items-center' : 'hidden'}  bg-blue-600 self-end cursor-pointer mr-5 md:mr-10   hover:bg-slate-200 w-12 h-12`}>
                🔼
            </div>
        </footer>
    )
}
export default Footer