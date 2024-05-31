import { Button } from '@/components/ui/button'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import ContactForm from './_components/ContactForm'

const page = () => {
  return (
    <div className='flex font-urbanist w-full justify-between items-center px-24 my-10'>
      <div className='w-[50%] flex justify-start flex-col items-start border-r-2 border-r-gray-400' >
        <div className=' font-bold text-5xl pt-10'>Contact Us</div>
        <div className='text-slate-500 pt-6 pb-14 text-lg font-semibold w-[70%]'>We&apos;re here to help! Whether you have a question about our products, need assistance with your order, or just want to share your feedback, we&apos;re all ears. At LeleKart, your satisfaction is our top priority</div>
        <Button variant="outline" className='flex mb-6 gap-4 text-lg py-6 w-[300px] justify-start items-center' ><Phone size={18} /> +91 9877454036</Button>
        <Button variant="default" className='flex gap-4 mb-6 ml-6 text-lg py-6 w-[300px] justify-start items-center' ><Mail size={18} /> kumaracheles@gmail.com</Button>
        <Button variant="outline" className='flex mb-6 gap-4 text-lg py-6 w-[300px] justify-start items-center' ><MapPin size={18} /> 140601 SAS Nagar,Mohali</Button>

      </div>
      <div  className='w-[40%] ' ><ContactForm/></div>
    </div>
  )
}

export default page