import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import assets from '../assets/assets'
import CircularProgressBar from '../components/CircularProgressBar'

const Profile = () => {
  const [options, setOptions] = useState('overview');

  return (
    <div className='flex'>
      <Sidebar />

      <div className='p-6 flex-grow h-[200vh]'>
        <Navbar />

        <div>
          <div className='rounded-xl  bg-[#0a0c26] bg-opacity-60 mt-6 px-6 py-5 grid grid-cols-2'>
            <div className='flex items-center gap-4'>
              <img src={assets.avatarSimple} className='rounded-2xl w-[54px]' alt="" />
              <div>
                <p className='font-semibold text-lg'>Mark Johnson</p>
                <p className='text-gray-400 text-sm'>mark@gmail.com</p>
              </div>
            </div>

            <div className='flex items-center'>
              <div className={`flex items-center justify-center gap-1 p-2.5 w-[150px] rounded-lg cursor-pointer transition-all duration-200 ${options === 'overview'? 'bg-[#0275ff]' : 'bg-transparent'}`} onClick={() => setOptions('overview')}>
                <assets.IoCubeSharp className='text-[16px]' />
                <p className='text-sm uppercase'>Overview</p>
              </div>
              <div className={`flex items-center justify-center gap-1 p-2.5 w-[150px] rounded-lg cursor-pointer transition-all duration-200 ${options === 'teams'? 'bg-[#0275ff]' : 'bg-transparent'}`}  onClick={() => setOptions('teams')}>
                <assets.IoDocumentText className='text-[16px]' />
                <p className='text-sm uppercase'>Teams</p>
              </div>
              <div className={`flex items-center justify-center gap-1 p-2.5 w-[150px] rounded-lg cursor-pointer transition-all duration-200 ${options === 'projects'? 'bg-[#0275ff]' : 'bg-transparent'}`} onClick={() => setOptions('projects')}>
                <assets.TiSpanner className='text-[16px]' />
                <p className='text-sm uppercase'>Projects</p>
              </div>
            </div>
          </div>

          <div className='h-[628px] flex items-center gap-5 mt-6'>
            <div className="h-full rounded-xl w-[356px] bg-[url('./assets/images/welcome-profile.png')] bg-cover bg-right p-[22px]">
              <div className='h-[97%]'>
                <p className='text-3xl font-bold pt-2'>Welcome back!</p>
                <p className='text-sm  mt-2'>Nice to see you, Mark Johnson!</p>
              </div>
              <div className='flex items-center gap-2 text-xs'>Tap to record <assets.FaArrowRightLong className='mt-1' /></div>
            </div>

            <div className='h-full rounded-xl w-[451px] bg-gradient-to-br from-[#0a0c26] to-[#1d2860] p-[22px]'>
              <p className='font-semibold text-lg mb-3'>Car Information</p>
              <p className='text-gray-400 text-sm'>Hello Mark Johnson, Your Car is ready.</p>
              
              <div className='flex items-center justify-between mt-8 w-full'>
                <div className="text-center mx-auto ">
                  <CircularProgressBar
                    size={170}
                    strokeWidth={15}
                    percentage={85}
                    color="#0cc495"
                    textLines={["Safety", "68%", "Current Load"]}
                    dashboard={false}
                  />
                </div>
              </div>

              <div className='text-center'>
                <p className='font-semibold text-lg mt-[18px] mb-[2px]'>0h 58 min</p>
                <p className='text-gray-400 text-xs'>Time to full charge</p>
              </div>

              <div className='grid grid-cols-2 grid-rows-2 h-[234px] mt-6 gap-4'>
                <div className='bg-[#070b27] rounded-2xl p-[18px]'>
                  <div>
                    <p className='text-gray'>Battery Health</p>
                    <p>92%</p>
                  </div>
                  <div></div>
                </div>

                <div className='bg-[#070b27] rounded-2xl'></div>
                <div className='bg-[#070b27] rounded-2xl'></div>
                <div className='bg-[#070b27] rounded-2xl'></div>
              </div>
            </div>

            <div className='h-full rounded-xl w-[262px] bg-gradient-to-br from-[#0a0c26] to-[#1d2860] p-[22px]'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile