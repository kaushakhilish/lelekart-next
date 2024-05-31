"use client"

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const UserNavbar = () => {
    const Router = useRouter();
    const pathname = usePathname();
    console.log(pathname)
    const [selectedTab,setSelectedTab] = useState<string>("/account");
    useEffect(()=>{
        setSelectedTab(pathname)
    },[pathname])
    return (
    <div className="w-full  flex justify-start items-center py-4 font-bold text-2xl">
            <div className="flex cursor-pointer gap-4  p-2 rounded-md justify-center items-start" ><div className={`${pathname==="/account" && "border-b-4 border-b-black"} `} onClick={()=>Router.push('/account')} >Personal</div>
            <div className={` ${pathname==="/account/orders" && "border-b-4 border-b-black"} `} onClick={()=>Router.push('/account/orders')} >Orders</div></div>
        </div>
  )
}

export default UserNavbar