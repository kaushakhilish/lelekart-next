"use client"
import SingoutButton from "@/components/auth/SingoutButton"
import { Button } from "@/components/ui/button"
import { Search, ShoppingBasket } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import React from "react"
import Navigaion from "./Navigaion"
  

const Navbar = () => {
    const session = useSession();
    console.log(session)
  return (
    <div className="w-[100vw] min-h-[80px] flex justify-between items-center font-reddit" >
       <Navigaion/>
<div className="w-[30%]  flex justify-center items-center text-3xl font-bungee">
    LELEKART
</div>
<div className="w-[30%]  flex items-center justify-end gap-6 pr-6">
    <Search/>
    <ShoppingBasket/>
    <div className="text-md font-semibold">{session.status==="authenticated" ? <SingoutButton/>: <Button variant="outline" className="text-md border-2 border-black hover:bg-black hover:text-white font-semibold"><Link  href={'/auth/signin'}>Login</Link></Button>}</div>
    </div>
    </div>
  )
}



export default Navbar

