// components/Register.tsx
'use client';

import { useState } from 'react';
import { createUser } from '@/app/lib/actions';

type ErrorType = { path: string; message: string };

const Register = () => {
  const [errors, setErrors] = useState<ErrorType[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);
    setSuccessMessage(null);

    const formData = new FormData(event.currentTarget);

    const response = await createUser(formData);

    if (response?.error) {
      setErrors(response.error);
     
      setTimeout(() => {
        setErrors([]);
      }, 3000);
    }else{
        return;
    } 
  };

  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center my-10'>
      <form onSubmit={handleSubmit} autoComplete='off' className='border border-slate-400 rounded-lg p-6'>
        <h2 className='text-center mb-6'>Registrar Usuario</h2>
        {successMessage && <div className="text-green-500">{successMessage}</div>}
        <div className='p-2'>
          <label className='font-bold ml-2' htmlFor="name">Nombre</label>
          <input className='h-10 indent-2 w-full ml-2 border rounded mb-2' type='text' name='name' id='name' placeholder="Nombre" />
        </div>
        <div className='p-2'>
          <label className='font-bold ml-2' htmlFor="email">Correo</label>
          <input className='h-10 indent-2 w-full ml-2 border rounded mb-2' type='text' name='email' id='email' placeholder="Correo" />
        </div>
        <div className='p-2'>
          <label className='font-bold ml-2' htmlFor="pass">Password</label>
          <input className='h-10 indent-2 w-full ml-2 border rounded mb-2' type='password' name='pass' id='pass' placeholder="Password" />
        </div>
        <div className='p-2'>
          <label className='font-bold ml-2' htmlFor="pass2">Confirma Password</label>
          <input className='h-10 indent-2 w-full ml-2 border rounded mb-2' type='password' name='pass2' id='pass2' placeholder="Password" />
        </div>
        {errors.length > 0 && (
          <div className="text-red-500">
            {errors.map((error, index) => (
              <div key={index}> {error.message}</div>
            ))}
          </div>
        )}
        <div className='p-2'>
          <button className='flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50' type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
