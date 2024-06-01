import { Button } from '@/components/ui/button'
import { ArrowDown, IndianRupee } from 'lucide-react'
import React from 'react'
import OrderProductCard from './OrderProductCard'

const OrderCard = () => {
  return (
    <div className='w-[650px] rounded-2xl pb-4 border-2 border-black flex flex-col justify-center items-center' >
        <div className='w-full border-b-2 border-b-black bg-[#F0F2F2] rounded-t-2xl flex justify-between px-4 py-4 items-center' >
            <div className='flex justify-center gap-8 items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <div   >Order Placed</div>
                    <div className='font-bold' >26 JAN 2024</div>

                
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='font-semibold text-gray-500' >Total</div>
                    <div className='flex justify-center items-center gap-1 font-bold' ><IndianRupee size={14} />799 </div>

                
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='font-semibold text-gray-500' >Ship To</div>
                    <div className='font-bold' >Souvik Sarkar</div>

                
                </div>
            </div>
            <div><Button>Invoice</Button></div>

        </div>
        <div className='w-full p-4 flex justify-between items-start  '>
            <div className='flex flex-col' >
            <div className='text-xl font-semibold' >Delivered 2nd March 2024</div>
            <div className='text-gray-400 font-semibold'>To the user</div>
            </div>
            <Button className='w-[60px] h-[30px] bg-red-300 border-[1px] border-black text-black font-bold hover:bg-red-600 ' >Cancel</Button>
        </div>
        <div className='w-full flex flex-wrap justify-start items-start gap-4 p-4'>
        <OrderProductCard/>
        <OrderProductCard/>
        <OrderProductCard/>
        <OrderProductCard/>

        </div>
        <div className='w-full flex justify-end px-4'>
            
        </div>

    </div>
  )
}

export default OrderCard