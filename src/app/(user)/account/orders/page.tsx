import React from 'react'
import OrderCard from './_components/OrderCard'

const page = () => {
  return (
    <div className='w-full flex flex-col justify-start font-urbanist items-start gap-8 ' >
      <div className='w-full text-3xl font-bold py-6 border-b-2 mb-4 ' >Your Orders</div>
      <div className='flex w-full justify-center items-center gap-6 flex-wrap'>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      </div>

    </div>
  )
}

export default page