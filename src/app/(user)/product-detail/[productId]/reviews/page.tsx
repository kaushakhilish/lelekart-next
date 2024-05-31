import  Select  from './_components/Select'
import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Star, StarHalf, TrendingUp } from 'lucide-react'
import UserReviewCard from './_components/UserReviewCard'


const page = () => {
  return (
    <div className='w-full flex flex-col justify-start items-center px-14 font-urbanist' >
        <div className='flex w-full pt-14 pb-6 justify-between'>
            <div className='text-4xl font-bold'>Reviews</div>
            <div><Select/></div>
        </div>
        <div className='flex justify-start gap-24 items-center w-full'>
            <div className='flex flex-col gap-3'>
                <div className='text-xl font-bold' >Total Reviews</div>
                <div className='flex justify-start items-center gap-2'>
                    <div className='text-3xl font-semibold' >10.0K</div>
                    <div><Badge variant="default" className='bg-green-200 text-green-700 font-bold flex gap-1 items-center'>21% <TrendingUp size={15} /></Badge>
</div>          
                </div>
                <div className='text-gray-400 font-bold' >Growth in review this year</div>
                
            </div>
            <div className='h-36 border-l-2 w-1'></div>
            <div className='flex flex-col gap-3'>
                <div className='text-xl font-bold' >Average Rating</div>
                <div className='flex justify-start items-center gap-2'>
                    <div className='text-3xl font-semibold' >4.0</div>
                    <div className='flex gap-1' >
                    <Star size={20} fill='#FFD700' /><Star size={20} fill='#FFD700' /><Star size={20} fill='#FFD700' /><Star size={20} fill='#FFD700' /><StarHalf size={20} fill='#FFD700' />
                    </div>
                </div>
                <div className='text-gray-400 font-bold' >Average rating in this year</div>
            </div>
            <div className='h-36 border-l-2 w-1'></div>
            <div className='flex flex-col gap-1 font-bold justify-start items-start' >
                <div className='flex gap-4 justify-center items-center'>
                    <div className='flex justify-center items-center gap-1' ><Star size={14}/>5 </div>
                    <div className='w-36 h-1.5 bg-green-600 rounded-full'></div>
                    <div className='text-sm'>2.0k</div>
                </div>
                <div className='flex gap-4 justify-center items-center'>
                    <div className='flex justify-center items-center gap-1' ><Star size={14}/>4 </div>
                    <div className='w-24 h-1.5 bg-pink-600 rounded-full'></div>
                    <div className='text-sm'>1.0k</div>
                </div>
                <div className='flex gap-4 justify-center items-center'>
                    <div className='flex justify-center items-center gap-1' ><Star size={14}/>3 </div>
                    <div className='w-20 h-1.5 bg-yellow-600 rounded-full'></div>
                    <div className='text-sm'>500</div>
                </div>
                <div className='flex gap-4 justify-center items-center'>
                    <div className='flex justify-center items-center gap-1' ><Star size={14}/>2 </div>
                    <div className='w-14 h-1.5 bg-sky-600 rounded-full'></div>
                    <div className='text-sm'>300</div>
                </div>
                <div className='flex gap-4 justify-center items-center'>
                    <div className='flex justify-center items-center gap-1' ><Star size={14}/>1 </div>
                    <div className='w-6 h-1.5 bg-red-600 rounded-full'></div>
                    <div className='text-sm'>100</div>
                </div>
            </div>
            
        </div>
        <div className='w-full py-14 flex justify-start items-center flex-wrap gap-8'>
            <UserReviewCard/>
            <UserReviewCard/>
            <UserReviewCard/>
            <UserReviewCard/>
            <UserReviewCard/>
            <UserReviewCard/>
            <UserReviewCard/>
            <UserReviewCard/>
            <UserReviewCard/>

        </div>
    </div>
  )
}

export default page 