import React from 'react'
import AgentRegister from './_components/RegisterForm'

const page = () => {
  return (
    <div className='w-full flex h-[100vh] overflow-hidden bg-gray-100 justify-center items-center' >
      <div className='w-[800px] px-10 h-[500px] rounded-2xl flex flex-col justify-start items-center p-4 bg-white'>
        <div className='py-8 text-3xl font-semibold w-full p-2'>Register</div>
      <AgentRegister/>
      </div>
    </div>
  )
}

export default page