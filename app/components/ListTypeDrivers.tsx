'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { ProductDrivers } from '@prisma/client';


const ListTypeDrivers = ({ idProd, os, idOs,  }: { idProd: number, idOs: number | null, os: string | undefined }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openWindow = () => {
        setIsOpen(!isOpen)
    }
    const [drivers, setDrivers] = useState<ProductDrivers[]>([])
    const getDrivers = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/${idProd}/${idOs}`),
                driversType = await res.json();
                setDrivers(driversType.data);
                console.log(driversType.data);
                if (!res.ok) throw { status: res.status, statusText: res.statusText };
            } catch (error) {
                console.log(error);
            }
        };
        useEffect(() => {
            getDrivers();
            
    }, [])

    return (
        <div className='mb-2'>

            <div onClick={openWindow} className={`p-2 flex items-center border-r-4 border-slate-300 cursor-pointer ${isOpen ? 'bg-blue-700 text-white' : 'bg-slate-200'} font-bold text-sm md:text-base`}><span className='mx-2'>{isOpen ? '-' : '+'}</span>{os}</div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden transition-all duration-300"
            >
                {/* <GroupDrivers /> */}

                <div className={`bg-blue-700 p-2 text-sm md:text-base  border-r-4 border-slate-300 text-white`}>
                    {drivers?.map((dat) => (
                        <div key={dat.id} className='text-left p-2'><span className='mr-4'>✔</span>{dat.driverTypes.name
                        }</div>

                    ))}
                </div>




            </motion.div>


        </div>
    )
}

export default ListTypeDrivers