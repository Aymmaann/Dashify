import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import assets from "../assets/assets.js"

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />

      <div className='p-6 flex-grow'>
        <Navbar />

        <div>
          <div className='flex items-center justify-between mt-6'>
            <div className='flex items-center gap-16 bg-[#0a0c26] p-[17px] rounded-xl'>
              <div>
                <p className='text-[#718096] text-xs'>Today's Money</p>
                <p className='font-semibold mt-1 text-[18px]'>$53,000<span className='text-xs text-green-500 ml-1'>+55%</span></p>
              </div>

              <div className='bg-[#0275ff] flex items-center justify-center w-[48px] h-[48px] rounded-xl'>
                <assets.IoWallet className='text-[20px]'/>
              </div>
            </div>

            <div className='flex items-center gap-16 bg-[#0a0c26] p-[17px] rounded-xl'>
              <div>
                <p className='text-[#718096] text-xs'>Today's Users</p>
                <p className='font-semibold mt-1 text-[18px]'>2,300<span className='text-xs text-green-500 ml-1'>+3%</span></p>
              </div>

              <div className='bg-[#0275ff] flex items-center justify-center w-[48px] h-[48px] rounded-xl'>
                <assets.FaGlobe className='text-[20px]'/>
              </div>
            </div>

            <div className='flex items-center gap-16 bg-[#0a0c26] p-[17px] rounded-xl'>
              <div>
                <p className='text-[#718096] text-xs'>New Clients</p>
                <p className='font-semibold mt-1 text-[18px]'>+3,462<span className='text-xs text-red-500 ml-1'>-2%</span></p>
              </div>

              <div className='bg-[#0275ff] flex items-center justify-center w-[48px] h-[48px] rounded-xl'>
                <assets.IoDocumentText className='text-[20px]'/>
              </div>
            </div>

            <div className='flex items-center gap-16 bg-[#0a0c26] p-[17px] rounded-xl'>
              <div>
                <p className='text-[#718096] text-xs'>Total Sales</p>
                <p className='font-semibold mt-1 text-[18px]'>$103,430<span className='text-xs text-green-500 ml-1'>+5%</span></p>
              </div>

              <div className='bg-[#0275ff] flex items-center justify-center w-[48px] h-[48px] rounded-xl'>
                <assets.FaShoppingCart className='text-[20px]'/>
              </div>
            </div>
          </div>

          <div className='flex items-center mt-6'>
            <div className="bg-[url('./assets/images/cardimgfree.png')] bg-cover">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard