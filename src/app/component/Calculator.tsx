'use client'

import { useState } from 'react'

const buttons = [
  '7',
  '8',
  '9',
  'DEL',
  'AC',
  '4',
  '5',
  '6',
  '*',
  '/',
  '1',
  '2',
  '3',
  '+',
  '-',
  '0',
  '.',
  '=',
]

export default function Calculator() {
  const [input, setInput] = useState<string>('')

  const handleClick = (value: string) => {
    if (value === 'AC') {
      setInput('')
      return
    }
    if (value === 'DEL') {
      setInput(input.slice(0, -1))
      return
    }

    if (value === '=') {
      try {
        const result = Function(`return ${input}`)()
        setInput(result.toString())
      } catch {
        setInput('Error')
      }
      return
    }
    setInput(input + value)
  }

  return (
    <div className='w-md  bg-gray-800 p-5 rounded-2xl shadow-xl'>
      <div className='bg-black text-white text-right text-3xl p-4  rounded-lg mb-4 overflow-x-auto'>
        {input || '0'}
      </div>

      <div className='grid grid-cols-5 gap-3'>
        {buttons.map((btn) => (
          <button
            key={btn}
            className='bg-gray-700 hover:bg-gray-600 text-white text-xl p-4 rounded-lg transition'
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  )
}
