"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
    const params = useParams();
    const id = params.categoryId;
    
    return (
    <div className='w-full h-[500px] p-10 text-xl font-bold font-urbanist'>Best Of {id}</div>
  )
}

export default Page