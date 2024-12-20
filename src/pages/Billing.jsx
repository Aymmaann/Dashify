import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Billing = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='p-6 flex-grow h-[200vh]'>
        <Navbar />
      </div>
    </div>
  )
}

export default Billing