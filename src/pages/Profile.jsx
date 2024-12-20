import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Profile = () => {
  return (
    <div className='flex'>
      <Sidebar />

      <div className='p-6 flex-grow h-[200vh]'>
        <Navbar />
      </div>
    </div>
  )
}

export default Profile