import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import AuthorsTable from '../components/AuthorsTable'
import ProjectsTable from '../components/ProjectsTable'
import Footer from '../components/Footer'

const Tables = () => {
  return (
    <div className='flex'>
      <Sidebar />
      
      <div className='p-6 flex-grow'>
        <Navbar />

        <div className='pt-6'>
          <div className='bg-gradient-to-br from-[#0a0c26] to-[#151c40] rounded-xl p-[22px] w-full'>
            <p className='font-semibold text-lg'>Authors Table</p>
            <div className="overflow-x-auto">
              <AuthorsTable />
            </div>
          </div>

          <div className='bg-gradient-to-br from-[#0a0c26] to-[#151c40] rounded-xl p-[22px] w-full mt-6'>
            <p className='font-semibold text-lg'>Projects Table</p>
            <div className="overflow-x-auto">
              <ProjectsTable />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Tables