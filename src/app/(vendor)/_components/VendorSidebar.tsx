"use client"
import React from 'react'
import Link from "next/link"
import {
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
} from "lucide-react"


import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { usePathname } from 'next/navigation'


const VendorSidebar = () => {
    const pathname = usePathname();
    
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        
    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
      <Link
        href=""
        className="group cursor-default flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
      >
        <div className="bg-black text-white rounded-xl w-full h-full flex justify-center items-center font-bold font-bebas text-xl transition-all group-hover:scale-110 duration-300" >L</div>
        <span className="sr-only">LELEAKART</span>
      </Link>
      <TooltipProvider delayDuration={0} >

      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/vendor-dashboard"
            className={` ${pathname==='/vendor-dashboard' && "bg-gray-200"} flex h-9 w-9 mt-7 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
            <Home className="h-5 w-5" />
            <span className="sr-only">Dashboard</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Dashboard</TooltipContent>
      </Tooltip>
              </TooltipProvider>
              <TooltipProvider  delayDuration={0}>

      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/vendor-products"
            className={` ${pathname==='/vendor-products' && "bg-gray-200"} flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
            <Package className="h-5 w-5" />
            <span className="sr-only">Products</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Products</TooltipContent>
      </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={0} >

      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/vendor-orders"
            className={` ${pathname==='/vendor-orders' && "bg-gray-200"} flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Orders</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Orders</TooltipContent>
      </Tooltip>
              </TooltipProvider>
              
              
              <TooltipProvider delayDuration={0}>

      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/vendor-analytics"
            className={` ${pathname==='/vendor-analytics' && "bg-gray-200"} flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
            <LineChart className="h-5 w-5" />
            <span className="sr-only">Analytics</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Analytics</TooltipContent>
      </Tooltip>
              </TooltipProvider>
    </nav>
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
    <TooltipProvider delayDuration={0}>

      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/vendor-settings"
            className={` ${pathname==='/vendor-settings' && "bg-gray-200"} flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Settings</TooltipContent>
      </Tooltip>
              </TooltipProvider>
    </nav>
  </aside>
  )
}

export default VendorSidebar