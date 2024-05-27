"use client"
import { signOut } from "next-auth/react"
import { Button } from "../ui/button"



const SingoutButton = () => {
  return (
    <div><Button onClick={()=>signOut()}>Signout</Button></div>
  )
}

export default SingoutButton