'use client'
import { useState } from 'react'

const Tab = () => {
  const [activeTab, setactiveTab] = useState('home')

  return (
    <div className='max-w-7xl mx-auto mt-10'>
      <div className='grid grid-cols-4 gap-5'>
        <button
          className='border-gray-500 bg-green-500 text-white rounded-md font-semibold px-4 py-1 cursor-pointer hover:bg-green-900'
          onClick={() => setactiveTab('home')}
        >
          Home
        </button>
        <button
          className='border-gray-500 bg-purple-700 text-white rounded-md font-semibold px-4 py-1 cursor-pointer hover:bg-purple-900'
          onClick={() => setactiveTab('contact')}
        >
          Contact
        </button>
        <button
          className='border-gray-500 bg-indigo-700 text-white rounded-md font-semibold px-4 py-1 cursor-pointer hover:bg-indigo-900'
          onClick={() => setactiveTab('about')}
        >
          About
        </button>
        <button
          className='border-gray-500 bg-pink-700 text-white rounded-md font-semibold px-4 py-1 cursor-pointer hover:bg-pink-900'
          onClick={() => setactiveTab('blog')}
        >
          Blog
        </button>
      </div>

      {/* Content */}

      <div className='bg- mt-2 p-4 h-auto rounded-lg   bg-gradient-to-r from-green-400 to-green-700'>
        {activeTab === 'home' && (
          <div className='text-white font-bold flex items-center justify-between gap-5'>
            <div>This is home page</div>
            <button className='font-medium bg-sky-900 px-3 py-1 mt-2 rounded-md cursor-pointer hover:bg-gray-600'>
              Next
            </button>
          </div>
        )}
        {activeTab === 'contact' && (
          <div className='text-white font-bold flex items-center justify-between gap-5'>
            <p>This is contact page</p>
            <button className='font-medium bg-sky-900 px-3 py-1 mt-2 rounded-md cursor-pointer hover:bg-gray-600'>
              Next
            </button>
          </div>
        )}
        {activeTab === 'about' && (
          <p className='text-white font-bold'>This is about page</p>
        )}
        {activeTab === 'blog' && (
          <p className='text-white font-bold'>This is Blog page</p>
        )}
      </div>
    </div>
  )
}

export default Tab
