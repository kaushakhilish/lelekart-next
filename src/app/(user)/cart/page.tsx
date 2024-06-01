import React from 'react'
import CartCard from './_components/CartCard'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { IndianRupee } from 'lucide-react'
import Link from 'next/link'



const page = () => {
  return (
    <div className='flex flex-col w-full bg-[#EEEEEE] px-24 pt-6 font-urbanist gap-6 min-h-[100vh]' >
      
      <div className='w-full flex h-full justify-center gap-4 items-start'>
        <div className='w-[60%] h-[600px] bg-white rounded-2xl'>
        <div className='font-semibold pl-6 pb-4 border-b-2 text-3xl pt-6'>Your Cart</div>
        <div className='flex h-[85%] flex-col p-6 overflow-y-scroll relative gap-3'>
            <CartCard/>
            <CartCard/>
            <CartCard/>
            <CartCard/>
            <CartCard/>
            <CartCard/>

        </div>
        </div>
        <div className='w-[30%] flex flex-col justify-start items-center bg-white h-[500px] rounded-3xl p-4'>
            <div className='w-[90%] pt-6 font-bold text-xl' >Delivery</div>
            <div className='w-[90%] h-4 pb-4 border-b-2'></div>
            <div className='w-[90%] flex justify-between items-center py-4'>
                <Input className='focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-offset-0 rounded-r-none placeholder:text-gray-400 placeholder:text-base placeholder:font-semibold' placeholder='Coupon' /><Button variant={'outline'} className='rounded-l-none font-bold' >Apply</Button>
            </div>
            <div className='w-[90%] h-4 pb-4 border-t-2'></div>
            <div className='w-[90%] pb-3 flex justify-between items-center font-semibold text-gray-500'>
                <div>Subtotal</div>
                <div><div className=" flex gap-1 justify-center items-center font-bold " ><IndianRupee size={14}/>799</div></div>
            </div>
            <div className='w-[90%] pb-1 flex justify-between items-center font-semibold text-gray-500'>
                <div>Discount</div>
                <div><div className=" flex gap-1 justify-center items-center font-bold " ><IndianRupee size={14}/>0.00</div></div>
            </div>
            <div className='w-[90%] pb-1 flex justify-between items-center font-semibold text-gray-500'>
                <div>Delivery</div>
                <div><div className=" flex gap-1 justify-center items-center font-bold " ><IndianRupee size={14}/>120.5</div></div>
            </div>
            <div className='w-[90%] pb-1 flex justify-between items-center font-semibold text-gray-500'>
                <div>Tax</div>
                <div><div className=" flex gap-1 justify-center items-center font-bold " ><IndianRupee size={14}/>9.5</div></div>
            </div>
            <div className='w-[90%] h-4 pb-4 border-b-2'></div>
            <div className='w-[90%] py-3 flex justify-between items-center font-semibold text-black text-lg'>
                <div>Total</div>
                <div><div className=" flex gap-1 justify-center items-center font-bold " ><IndianRupee size={14}/>929.5</div></div>
            </div>
            <Link className='w-full flex justify-center items-center' href={'/checkout'} ><Button className='w-[90%] my-2 text-base font-semibold py-0' >Proceed to checkout</Button></Link>
           <Link className='w-full flex justify-center items-center' href={'/'} > <Button className='w-[90%] py-0  my-2 text-base font-semibold' variant={'outline'} >Continue shopping</Button></Link>


            
        </div>
      </div>
      
    </div>
  )
}

export default page