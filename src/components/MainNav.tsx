import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"
import UsernameMenu from "./UsernameMenu"

const MainNav = () => {
  const{loginWithRedirect,isAuthenticated}=useAuth0()
  return (
    <span className="flex items-center space-x-3">
      {isAuthenticated?<UsernameMenu/>:
      <Button onClick={async()=>{
        await loginWithRedirect()
      }}variant={'ghost'} className="font-bold text-slate-950 hover:text-orange-500 hover:bg-white">
          Log In
      </Button>}
    </span>
    
  )
}

export default MainNav