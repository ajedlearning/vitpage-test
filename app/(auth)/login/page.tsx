import FormLogin from '@/components/FormLogin'
import { auth } from "@/auth"
import { redirect } from 'next/navigation'


const LoginPage = async () => {
  const session = await auth()

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen mx-auto '>
      <h1 className='font-bold mb-10'>Login</h1>
      <FormLogin />
    </div>
  )
}

export default LoginPage