import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Star, StarHalf } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

  

const ReviewCard = () => {
  return (
    <Card className='' >
  <CardHeader>
    <CardTitle className='border-b-2 pb-4' >
        <div className='flex flex-col gap-3 w-full '>
            <div className='text-2xl' >Review and ratings</div>
            <div className='flex gap-4 w-full'>
                <div className='text-4xl' >4,7</div>
                <div className='flex flex-col gap-1.5'>
                    <div className='flex gap-1.5' ><Star size={20} fill='#000' /><Star size={20} fill='#000' /><Star size={20} fill='#000' /><Star size={20} fill='#000' /><StarHalf size={20} fill='#000' /></div>
                    <div className='text-sm text-gray-400 font-semibold' >based on 565 ratings</div>
                </div>
            </div>
        </div>
    </CardTitle>
   
  </CardHeader>
  <CardContent>
    <div className='flex flex-col gap-4 text-base text-black'>
        <div className='flex flex-col gap-1.5'>
            <div className='flex justify-between items-center'>
                <div>Reliability</div>
                <div className='text-lg' >2.7</div>
            </div>
            <Progress indicatorColor='bg-yellow-500' value={57} />

        </div>
        <div className='flex flex-col gap-1.5'>
            <div className='flex justify-between items-center'>
                <div>Comfort</div>
                <div className='text-lg' >4.0</div>
            </div>
            <Progress indicatorColor='bg-green-500' value={80} />

        </div>
        <div className='flex flex-col gap-1.5'>
            <div className='flex justify-between items-center'>
                <div>Value For Money</div>
                <div className='text-lg' >1.9</div>
            </div> 
            <Progress indicatorColor='bg-orange-600'  value={33} />

        </div>
    </div>
  </CardContent>
  <CardFooter className='justify-end' >
  <Link href={'/product-detail/Tshirt/reviews'}  ><Button className='px-8 rounded-full' variant={'default'} >SEE ALL</Button></Link>
  </CardFooter>
</Card>

  )
}

export default ReviewCard