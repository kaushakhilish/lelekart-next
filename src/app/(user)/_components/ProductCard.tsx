import { Heart, IndianRupee, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({img,name,description,price}:{img:string,name:string,description:string,price:number}) => {
  return (
    <div className='w-[355px] h-[450px] rounded-2xl flex flex-col p-2'>
        <div className='w-[340px] h-[340px] rounded-2xl bg-[#E8E7E5] relative'>
            <Link href={`/product-detail/${name}`}  ><Image src={img} alt='' fill objectFit='contain' /></Link>
            <div className='absolute right-3 bottom-3'><div className='bg-black text-[#E8E7E5] rounded-md' ><Plus/></div></div>
            <div className='absolute right-3 top-3'><div className=' text-black rounded-md' ><Heart/></div></div>

        </div>
        <div className='flex justify-between items-center px-2 pt-1'>
            <div>
                <div className='text-lg font-bold pb-1' >{name}</div>
        <div className='text-sm text-gray-400 font-bold' >{description}</div>
        </div>
       <div className='flex items-center font-bold' > <IndianRupee size={14}/> {price}</div>
        </div>
    </div>
  )
}

export default ProductCard