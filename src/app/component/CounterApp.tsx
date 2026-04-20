'use client'

import { useState } from 'react'

const CounterApp = () => {
  const [count, setCount] = useState(0)
  const handleIncress = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    setCount(count - 1)
  }
  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className='bg-[#BFC9D1] max-w-5xl md:max-w-3xl mx-auto rounded-2xl h-[150px]'>
      <div className=''>
        <p className='pt-6 text-center  mb-3 text-3xl font-bold'>{count}</p>
        <div className='flex justify-center items-center gap-5'>
          <button
            className='bg-[#408A71] text-white px-3 py-1 rounded-md font-semibold hover:bg-green-950 cursor-pointer'
            onClick={handleIncress}
          >
            Increase <span className='font-bold'>+</span>
          </button>
          <button
            className='bg-[#DE1A58] text-white px-3 py-1 rounded-md font-semibold  hover:bg-red-800 cursor-pointer'
            onClick={handleDecrease}
            disabled={count === 0}
          >
            Decrease <span className='font-bold'>-</span>
          </button>
          <button
            className='bg-[#6367FF]  hover:bg-blue-800 cursor-pointer text-white px-3 py-1 rounded-md font-semibold'
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default CounterApp
