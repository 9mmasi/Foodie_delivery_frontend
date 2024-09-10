import { CircleUserRound, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import MobileNavLink from "./MobileNavLink"



const MobileNav = () => {
    const{isAuthenticated,user,loginWithRedirect}=useAuth0()
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
                {isAuthenticated?<span className="flex items-center text-slate-900 text-sm font-bold gap-2">
                    <CircleUserRound className="text-orange-500"/>
                    {user?.email}
                </span>:<span className="text-slate-950">Welcome to MernEat.com!</span>}
            </SheetTitle>
            <Separator/>
            <SheetDescription className="flex flex-col">
                {isAuthenticated?<MobileNavLink/>:<Button onClick={async()=>{
                    await loginWithRedirect()
                }} className="font-bold flex-1 text-slate-950 bg-orange-500">
                    Log In
                </Button>}
                
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav