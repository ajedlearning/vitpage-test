'use client'
import React from 'react'
import { signOut } from 'next-auth/react'

const LogoutButton = () => {
    const handleClick = async ()=> {
        await signOut({callbackUrl: '/login'});
    };
  return (
    <div><button onClick={handleClick}>Cerrar sesión</button></div>
  )
}

export default LogoutButton