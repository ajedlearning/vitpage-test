import { auth } from "@/auth"
import LogoutButton from "@/components/LogoutButton"

export default async function Page() {
  const session = await auth()

  if (!session) {
    return <div>Not authenticated</div>
  }

  
  if (session?.user?.role !== 'admin') {
    return <div>You are not admin</div>
  }



  return (
    <div className="container">
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}

      Dashboard
      
    </div>
  )
}