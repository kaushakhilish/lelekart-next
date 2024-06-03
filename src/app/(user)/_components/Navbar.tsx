"use client"

import { Button } from "@/components/ui/button"
import { Heart, Search, ShoppingBasket } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import React from "react"
import Navigaion from "./Navigaion"
import UserAvatar from "./UserAvatar"
  

const Navbar = () => {
    const session = useSession();
    console.log(session)
    
    const user = session.data?.user;
    if(user===undefined){
      return
    }
    
  return ( 
    <div className="w-full min-h-[80px] flex justify-between items-center font-reddit" >
       <Navigaion/>
<Link href={'/'} className="w-[30%]  flex justify-center items-center text-3xl font-bungee">
    LELEKART
</Link>
<div className="w-[30%]  flex items-center justify-end gap-6 pr-6">
    <Search/>
   <Link href={'/wishlist'}> <Heart size={20}/></Link>
    <Link href={'/cart'} ><ShoppingBasket size={20}/></Link>

    <div className="text-md font-semibold">{user!==undefined || session.status==="authenticated" ? <UserAvatar img={user.image} name={user.name} />: <Button variant="outline" className="text-md border-2 border-black hover:bg-black hover:text-white font-semibold"><Link  href={'/auth/signin'}>Login</Link></Button>}</div>
    </div>
    </div>
  )
}



export default Navbar

