'use client'
import { useState } from 'react'

const Tab2 = () => {
  const [activeTab, setActiveTab] = useState('tab1')
  const tabs = ['tab1', 'tab2', 'tab3', 'tab4']
  const nextTab = () => {
    if (activeTab === 'tab1') {
      setActiveTab('tab2')
    }
    if (activeTab === 'tab2') {
      setActiveTab('tab2')
    }
    if (activeTab === 'tab2') {
      setActiveTab('tab3')
    }
    if (activeTab === 'tab3') {
      setActiveTab('tab4')
    }
  }

  const preTab = () => {
    if (activeTab === 'tab4') {
      setActiveTab('tab3')
    }
    if (activeTab === 'tab3') {
      setActiveTab('tab2')
    }
    if (activeTab === 'tab2') {
      setActiveTab('tab1')
    }
  }
  return (
    <div className='max-w-3xl mx-auto mt-10'>
      {/* Tab Buttons */}
      <div className='grid grid-cols-4 gap-5'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className='bg-gradient-to-r from-[#3a6186] to-[#89253e] text-white rounded-md font-semibold px-6 py-1 capitalize hover:opacity-80 cursor-pointer'
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className='mt-3 p-5 rounded-lg bg-gradient-to-r from-green-400 to-green-700 text-white font-bold text-center'>
        {/* <p>This is {activeTab} </p> */}
        <p>
          Lorem ipsum dolor,{' '}
          <span className='text-red-600 text-2xl font-bold'>{activeTab}</span>{' '}
          sit amet consectetur adipisicing elit. Aliquam cum magnam nemo
          necessitatibus sequi porro officia asperiores ipsam, quia repellendus.
        </p>

        {activeTab !== 'blog' && (
          <div className='flex gap-4 justify-between mt-4'>
            <button
              className='bg-gray-700 px-3 py-1 rounded-md hover:bg-gray-950 cursor-pointer'
              onClick={preTab}
            >
              previous
            </button>
            <button
              className='bg-sky-900 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-600'
              onClick={nextTab}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tab2
