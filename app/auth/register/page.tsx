'use client'

import { createUser } from '@/app/lib/actions'


const Register = () => {

    return (
        <div className='h-[calc(100vh-7rem)]  flex justify-center items-center my-10'>
            <form action={createUser} className='border border-slate-400 rounded-lg p-6'>
                <h2 className='text-center mb-6'>Registrar Usuario</h2>
                <div className='p-2'>
                    <label className='font-bold ml-2' htmlFor="name">Nombre</label>
                    <input className='h-10 indent-2 w-full ml-2 border rounded mb-2 ' placeholder="Nombre" />
                </div>
                <div className='p-2'>
                    <label className='font-bold ml-2' htmlFor="email">Correo</label>
                    <input className='h-10 indent-2 w-full ml-2 border rounded mb-2 ' placeholder="Correo" />

                </div>
                <div className='p-2'>
                    <label className='font-bold ml-2' htmlFor="pass">Password</label>
                    <input className='h-10 indent-2 w-full ml-2 border rounded mb-2 ' placeholder="Password" />

                </div>
                <div className='p-2'>
                    <label className='font-bold ml-2' htmlFor="pass">Confirma Password</label>
                    <input className='h-10 indent-2 w-full ml-2 border rounded mb-2 ' placeholder="Password" />

                </div>
                <div className='p-2'>

                    <button className='text-white border p-2 bg-blue-500 rounded-lg w-full ' type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Register