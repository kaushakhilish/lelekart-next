import React from 'react'
import Coupon from './_components/Coupon'

const page = () => {
  return (
    <div className='flex px-14 flex-col justify-start bg-[#F1F1F1] items-start' >
      <div className='w-full text-2xl font-bold py-6'>All Coupons</div>
      <div className='flex py-4 flex-wrap justify-start items-start gap-10'>
        <Coupon/>
        <Coupon/>
        <Coupon/>
        <Coupon/>
        <Coupon/>
        <Coupon/>
        <Coupon/>
        <Coupon/>

      </div>
    </div>
  )
}

export default page