import React from 'react'
import PieChartBox from './_components/PieChart'
import AreaChartComponent from './_components/AreaChart';
import { IndianRupee } from 'lucide-react';


const couponAgentData = [
  { name: 'Coupons Used', value: 450, color: '#8884d8' },
  { name: 'New Sign-Ups', value: 300, color: '#82ca9d' },
  { name: 'Active Campaign', value: 120, color: '#ffc658' },
  { name: 'Expired Coupons', value: 150, color: '#ff8042' },
  { name: 'Clicks on Coupons', value: 600, color: '#8dd1e1' },
];

const dummyData = [
  { name: 'Jan', books: 4000, clothes: 2400, electronic: 2400 },
  { name: 'Feb', books: 3000, clothes: 1398, electronic: 2210 },
  { name: 'Mar', books: 2000, clothes: 9800, electronic: 2290 },
  { name: 'Apr', books: 2780, clothes: 3908, electronic: 2000 },
  { name: 'May', books: 1890, clothes: 4800, electronic: 2181 },
  { name: 'Jun', books: 2390, clothes: 3800, electronic: 2500 },
  { name: 'Jul', books: 3490, clothes: 4300, electronic: 2100 },
  { name: 'Aug', books: 2000, clothes: 2780, electronic: 3400 },
  { name: 'Sep', books: 2780, clothes: 3908, electronic: 2400 },
  { name: 'Oct', books: 1890, clothes: 4800, electronic: 2600 },
  { name: 'Nov', books: 2390, clothes: 3800, electronic: 2500 },
  { name: 'Dec', books: 3490, clothes: 4300, electronic: 3100 },
];


const page = () => {
  return (
    <div className='flex px-14 py-6 flex-wrap' >
      <div className='w-1/2' >
      <PieChartBox chartData={couponAgentData} />
      </div>
      <div className='w-1/2 flex flex-wrap pl-4 justify-start gap-4 items-center'>
        <div className='w-[45%] h-[45%] rounded-2xl border-2 border-gray-400 flex flex-col flex-wrap p-4' >
          <div className='text-xl h-[10%] font-semibold text-gray-400'>Rewards</div>
          <div className='w-full flex justify-center items-center text-5xl text-yellow-500 h-[70%] font-semibold'>10</div>
          <div className=' h-[20%] font-semibold text-gray-400 '>10% increase from last month</div>

        </div>
        <div className='w-[45%] h-[45%] rounded-2xl border-2 border-gray-400 flex flex-col flex-wrap p-4' >
          <div className='text-xl h-[10%] font-semibold text-gray-400'>Total Coupon</div>
          <div className='w-full flex justify-center items-center text-5xl h-[70%] text-purple-500 font-semibold'>25</div>
          <div className=' h-[20%] font-semibold text-gray-400 '>2% increase from last month</div>

        </div>
        <div className='w-[45%] h-[45%] rounded-2xl border-2 border-gray-400 flex flex-col flex-wrap p-4' >
          <div className='text-xl h-[10%] font-semibold text-gray-400'>Total Earning</div>
          <div className='w-full flex justify-center items-center text-5xl text-sky-500 h-[70%] font-semibold gap-1'><IndianRupee strokeWidth={3} size={30} />500</div>
          <div className=' h-[20%] font-semibold text-gray-400 '>30% increase from last month</div>

        </div>
        <div className='w-[45%] h-[45%] rounded-2xl border-2 border-gray-400 flex flex-col flex-wrap p-4' >
          <div className='text-xl h-[10%] font-semibold text-gray-400'>Total Customers</div>
          <div className='w-full flex justify-center items-center text-5xl text-green-400 h-[70%] font-semibold'>35</div>
          <div className=' h-[20%] font-semibold text-gray-400 '>9% increase from last month</div>

        </div>


        
      </div>
      <div className=' flex justify-start w-[97%] h-full p-4 mt-4 border-2 border-gray-400 rounded-3xl' >
        <AreaChartComponent chartData={dummyData} />
      </div>
    </div>
  )
}

export default page