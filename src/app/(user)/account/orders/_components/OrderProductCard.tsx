import { Button } from '@/components/ui/button'
import { IndianRupee } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OrderProductCard = () => {
  return (
    <div className='w-full rounded-xl p-1 flex justify-between items-center'>
        <div className='flex justify-start items-center gap-2' >
            <div className='relative overflow-hidden flex justify-center items-center w-[100px] bg-[#F0F2F2] h-[100px] rounded-xl'>
                <Image alt="" src={'/men.png'} objectFit="cover" fill />
                
            </div>
            <div className='flex flex-col justify-center items-center gap-2' >
                <div className='font-bold text-lg' >T Shirt</div>
                <div className='flex justify-center items-center gap-1 text-sm text-gray-500 font-bold' ><IndianRupee size={14} />799 </div>
            </div>
        </div>
        <div className='flex flex-col justify-between gap-3 ' >
            <Button className='w-[100px] bg-yellow-100 hover:bg-yellow-400 h-[30px] font-semibold border-[1px] border-black' variant={'outline'} >Write a review</Button>
            <Link href={'/product-detail/Tshirt'}><Button className='w-[100px] bg-orange-100 hover:bg-orange-400 h-[30px] font-semibold border-[1px] border-black' size={'sm'} variant={'outline'} >Buy again</Button></Link>
        
        </div>
    </div>
  )
}

export default OrderProductCard