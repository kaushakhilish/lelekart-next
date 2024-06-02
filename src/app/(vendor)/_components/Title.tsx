"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const Title = () => {
    const pathname = usePathname();
  return (
    <div className="hidden  text-3xl font-bold justify-start items-center md:flex py-4">
   {pathname==='/vendor-dashboard' && "Dashboard"}
   {pathname==='/vendor-products' && "Products"}
   {pathname==='/vendor-orders' && "Orders"}
   {pathname==='/vendor-analytics' && "Analytics"}


  </div>
  )
}

export default Title