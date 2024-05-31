"use client"
import { signOut } from "next-auth/react"
import { Button } from "../ui/button"
import { LogOut } from "lucide-react"



const SingoutButton = () => {
  return (
    <div><Button variant={'outline'} className="border-red-500 text-red-500 hover:bg-red-500 hover:text-black px-3" onClick={()=>signOut()}><LogOut size={16} /></Button></div>
  )
}

export default SingoutButton