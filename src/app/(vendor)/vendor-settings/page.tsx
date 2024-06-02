import React from 'react'
import VendorPersonalForm from './_components/VendorPersonalForm'
import VendorCompanyForm from './_components/VendorCompanyForm'

const page = () => {
  return (
    <div className='flex justify-center items-start w-full p-4' >
        <div className='w-[30%] flex flex-col justify-start items-center'>
        <div className='text-2xl w-full font-semibold'>Personal</div>
        <div className='w-full pr-10 pt-10' > <VendorPersonalForm/></div>
        </div>
        <div className='w-[70%] font-semibold flex flex-col justify-start items-center text-2xl'>
        <div className='text-2xl w-full font-semibold'>Company</div>
        <div className='w-full pr-10 pt-10 flex flex-wrap' ><VendorCompanyForm/></div>


        </div>

    </div>
  )
}

export default page