'use client'

import React from 'react'
import Tab from '../component/Tab'
import Tab2 from '../component/Tab2'
import CounterApp from '../component/CounterApp'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

const Page = () => {
  const router = useRouter()

  const handleRedirect = () => {
    router.back()
  }

  return (
    <div>
      <Tab />
      <Tab2 />

      <div className='mt-5'>
        <CounterApp />
      </div>
      <div className='flex justify-center items-center '>
        <button
          onClick={handleRedirect}
          className='bg-[#213C51] text-white px-4 py-2 rounded mt-5 flex items-center cursor-pointer hover:bg-gray-500'
        >
          <ArrowLeft /> Back
        </button>
      </div>
    </div>
  )
}

export default Page
