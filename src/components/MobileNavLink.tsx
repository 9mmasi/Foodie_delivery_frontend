import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"


const MobileNavLink = () => {
  const{logout}=useAuth0()
  return (
    <>
      <Link to={'/user-profile'} className="flex bg-white items-center font-bold my-2  hover:text-orange-500">User Profile</Link>
     
      <Button onClick={()=>logout()} className="font-bold flex-1 text-slate-950 bg-orange-500 ">Log Out</Button>
    </>
  )
}

export default MobileNavLink