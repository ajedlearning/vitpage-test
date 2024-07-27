import { auth } from "@/auth"
import LogoutButton from "@/components/LogoutButton"
import { signOut } from 'next-auth/react'

export default async function Page() {
  const session = await auth()

  if (!session) {
    return <div>Not authenticated</div>
  }



  return (
    <div className="container">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <hr />
      <LogoutButton />
    </div>
  )
}