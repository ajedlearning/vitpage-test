'use client'
import { useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';




const ProductsVersion = ({ nameVersion, especifications, datasheet }: { nameVersion: string, especifications: string, datasheet: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openWindow = () => {
        setIsOpen(!isOpen)
    }

    const specif = especifications.split(',')
    return (
        <div className='mb-2'>

            <div onClick={openWindow} className={`p-2 flex items-center border-r-4 border-slate-300 cursor-pointer ${isOpen ? 'bg-blue-700 text-white' : 'bg-slate-200'} font-bold text-sm md:text-base`}><span className='mx-2'>{isOpen ? '-' : '+'}</span>{nameVersion}</div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden transition-all duration-300"
            >
                <div className={`bg-blue-700 p-2 text-sm md:text-base  border-r-4 border-slate-300 text-white`}>
                    {
                        specif.map((ele, i)=>(
                            
                            <div key={i} className='text-left p-2'><span className='mr-4'>✔</span>{ele.trim()}</div>
                        ))
                    }
                    
                    <div className='text-right p-2'><Link href={`${datasheet}`}><span className='mr-4'>+</span>MAS DETALLES</Link></div>
                </div>
            </motion.div>


        </div>
    )
}

export default ProductsVersion