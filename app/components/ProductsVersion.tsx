'use client'
import { useState } from 'react'
import { motion } from 'framer-motion';




const ProductsVersion = ({ nameVersion }: { nameVersion: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openWindow = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='mb-2'>

            <div onClick={openWindow} className={`bg-slate-200 p-2 flex items-center border-r-4 border-slate-300 cursor-pointer ${isOpen ? 'bg-blue-700 text-white' : ''} font-bold text-sm md:text-base`}><span className='mx-2'>{isOpen ? '-' : '+'}</span>{nameVersion}</div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden transition-all duration-300"
            >
                <div className={`bg-blue-700 p-2 text-sm md:text-base  border-r-4 border-slate-300 text-white`}>
                    <div className='text-left p-2'><span className='mr-4'>✔</span>Procesador Intel® Core i3</div>
                    <div className='text-left p-2'><span className='mr-4'>✔</span>Disco Duro Sata 500Gb</div>
                    <div className='text-left p-2'><span className='mr-4'>✔</span>Memoria Ram 4Gb</div>
                    <div className='text-left p-2'><span className='mr-4'>✔</span>Monitor LCD de 19,5</div>
                    <div className='text-right p-2'><span className='mr-4'>+</span>MAS DETALLES</div>
                </div>
            </motion.div>


        </div>
    )
}

export default ProductsVersion