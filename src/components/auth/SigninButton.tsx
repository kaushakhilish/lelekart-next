"use client"
import { signIn } from "next-auth/react"
import { Button } from "../ui/button"
import Image from "next/image"


const SigninButton = ({type}:{type:string}) => {

    async function handleGoogleSignin(){
        await signIn(type,{
            callbackUrl:"/",
        })
    }


    return (
    <Button variant={"outline"} className="relative w-16 overflow-hidden flex justify-center items-center" onClick={()=>handleGoogleSignin()}><Image src={`/${type}.png`} alt="" width={type==="google" ? 20 :30} height={type==="github" ? 20 :30} /></Button>
  )
}

export default SigninButton