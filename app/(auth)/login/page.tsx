import FormLogin from '@/components/FormLogin'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen mx-auto '>
      <h1 className='font-bold mb-10'>Login</h1>
      <FormLogin />
    </div>
  )
}

export default LoginPage