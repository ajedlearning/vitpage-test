import FormRegister from '@/components/users/FormRegister'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen mx-auto '>
      <h1 className='font-bold mb-10'>Registro de usuarios</h1>
      <FormRegister />
    </div>
  )
}

export default RegisterPage