import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import assets from '../assets/assets'
import CircularProgressBar from '../components/CircularProgressBar'
import Footer from '../components/Footer'
import Toggle from '../components/Toggle'

const Profile = () => {
  const [options, setOptions] = useState('overview');

  const handleToggle = (e) => {
    const element = e.currentTarget;
    if(element.classList.contains('justify-end')) {
      element.classList.remove('justify-end');
      element.classList.remove('bg-[#0275ff]');
      element.classList.add('justify-start');
      element.classList.add('bg-gray-800');
    }
    else {
      element.classList.remove('justify-start');
      element.classList.remove('bg-gray-800');
      element.classList.add('justify-end');
      element.classList.add('bg-[#0275ff]');
    }
  } 

  return (
    <div className='flex'>
      <Sidebar />

      <div className='p-6 flex-grow'>
        <Navbar />

        <div className=''>
          <div className='rounded-xl bg-[#0a0c26] bg-opacity-60 mt-6 px-6 py-5 flex justify-between'>
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
            <div className="h-full rounded-xl min-w-[310px] flex-grow bg-[url('./assets/images/welcome-profile.png')] bg-cover bg-right p-[22px]">
              <div className='h-[97%]'>
                <p className='text-3xl font-bold pt-2'>Welcome back!</p>
                <p className='text-sm  mt-2'>Nice to see you, Mark Johnson!</p>
              </div>
              <div className='flex items-center gap-2 text-xs'>Tap to record <assets.FaArrowRightLong className='mt-1' /></div>
            </div>

            <div className='h-full rounded-xl w-[431px] bg-gradient-to-br from-[#0a0c26] to-[#1d2860] p-[22px]'>
              <p className='font-semibold text-lg mb-2'>Car Information</p>
              <p className='text-gray-400 text-sm'>Hello Mark Johnson, Your Car is ready.</p>
              
              <div className='flex items-center justify-between mt-12 w-full'>
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
                <p className='font-semibold text-lg mt-[18px] mb-0.5'>0h 58 min</p>
                <p className='text-gray-400 text-xs'>Time to full charge</p>
              </div>

              <div className='grid grid-cols-2 grid-rows-2 h-[200px] mt-10 gap-4'>
                <div className='bg-[#070b27] rounded-xl p-[18px] flex items-center justify-between'>
                  <div>
                    <p className='text-gray-400 text-xs'>Battery Health</p>
                    <p className='font-semibold text-md mt-0.5'>92%</p>
                  </div>
                  <div className='w-[56px] h-[56px] rounded-xl bg-[#0275ff] flex items-center justify-center'>
                    <assets.MdOutlineElectricCar className='text-[28px]' />
                  </div>
                </div>

                <div className='bg-[#070b27] rounded-xl p-[18px] flex items-center justify-between'>
                  <div>
                    <p className='text-gray-400 text-xs'>Efficiency</p>
                    <p className='font-semibold mt-0.5'>+20%</p>
                  </div>
                  <div className='w-[56px] h-[56px] rounded-xl bg-[#0275ff] flex items-center justify-center'>
                    <assets.IoMdCodeWorking className='text-[28px]' />
                  </div>
                </div>

                <div className='bg-[#070b27] rounded-xl p-[18px] flex items-center justify-between'>
                  <div>
                    <p className='text-gray-400 text-xs'>Consumption</p>
                    <p className='font-semibold mt-0.5'>163W/km</p>
                  </div>
                  <div className='w-[56px] h-[56px] rounded-xl bg-[#0275ff] flex items-center justify-center'>
                    <assets.BsLightningChargeFill className='text-[22px]' />
                  </div>
                </div>

                <div className='bg-[#070b27] rounded-xl p-[18px] flex items-center justify-between'>
                  <div>
                    <p className='text-gray-400 text-xs'>This Week</p>
                    <p className='font-semibold mt-0.5'>26.4km</p>
                  </div>
                  <div className='w-[56px] h-[56px] rounded-xl bg-[#0275ff] flex items-center justify-center'>
                    <assets.RiPinDistanceFill className='text-[28px]' />
                  </div>
                </div>
              </div>
            </div>

            <div className='h-full rounded-xl w-[262px] bg-gradient-to-br from-[#0a0c26] to-[#1d2860] p-[22px]'>
              <p className='font-semibold text-lg mb-3'>Profile Information</p>
              <p className='text-sm text-gray-400 leading-5'>Hi, I’m Mark Johnson. I believe in making thoughtful decisions: if you’re unsure, the answer is often no. When faced with two equally challenging paths, I choose the one that fosters growth, even if it’s more difficult in the short term. Growth begins where comfort ends.</p>
              <p className='text-sm text-gray-400 mt-10 py-2'>Full Name: <span className='text-white'> Mark Johnson</span></p>
              <p className='text-sm text-gray-400 py-2'>Mobile: <span className='text-white'> (44)8764490123</span></p>
              <p className='text-sm text-gray-400 py-2'>Email: <span className='text-white'> mark@gmail.com</span></p>
              <p className='text-sm text-gray-400 py-2'>Location: <span className='text-white'> India</span></p>
              <div className='text-sm text-gray-400 py-2 flex'>
                Location: 
                <div className='flex items-center gap-2 ml-1'>
                  <assets.FaFacebookSquare className='text-white text-[15px]' />
                  <assets.FaTwitter className='text-white text-[15px]' />
                  <assets.FaInstagram className='text-white text-[15px]' />
                </div>
              </div>
            </div>
          </div>

          <div className='h-[532px] mt-6 flex gap-5'>
            <div className='h-full rounded-xl bg-gradient-to-br from-[#0a0c26] to-[#1d2860] p-[22px] w-[241px]'>
              <p className='font-semibold text-lg mb-3'>Platform Settings</p>

              <p className="text-xs text-gray-400 uppercase mb-4 mt-[26px]">Account</p>
              <Toggle text={'Email me when someone follows me'} justify={'justify-end'} bgColor={'bg-[#0275ff]'} />
              <Toggle text={'Email me when someone comments on my post'} justify={'justify-start'} bgColor={'bg-gray-800'} />
              <Toggle text={'Email me when someone mentions me'} justify={'justify-end'} bgColor={'bg-[#0275ff]'} />

              <p className="text-xs text-gray-400 uppercase mb-4 mt-[26px]">Application</p>
              <Toggle text={'New launches and products'} justify={'justify-start'} bgColor={'bg-gray-800'} />
              <Toggle text={'Monthly product updates'} justify={'justify-end'} bgColor={'bg-[#0275ff]'} />
              <Toggle text={'Subscribe to newsletter'} justify={'justify-end'} bgColor={'bg-[#0275ff]'} />
              <Toggle text={'Recieve mails weekly'} justify={'justify-start'} bgColor={'bg-gray-800'} />
            </div>

            <div className='h-full rounded-xl bg-gradient-to-br from-[#0a0c26] to-[#1d2860] p-[22px] flex-grow'>
              <p className='font-semibold text-lg mb-2'>Projects</p>
              <p className='text-gray-400 text-sm'>Innovative platforms blending creativity with functionality.</p>
              <div className='flex justify-between mt-12 h-[408px]'>
                <div className='rounded-xl w-[246px]'>
                  <img src={assets.profile1} className='rounded-xl' alt="" />
                  <div>
                    <p className='text-[12px] text-gray-400 mt-8'>Project #1</p>
                    <p className='text-lg font-semibold mt-3'>Nordic Drive</p>
                    <p className='text-sm text-gray-400 mt-2'>A sleek, Scandinavian-inspired app redefining the art of personalized car experiences.</p>
                    <div className='border border-white rounded-xl py-2 px-3 text-center uppercase w-[122px] text-sm mt-10 cursor-pointer font-semibold hover:bg-white hover:text-[#1d2860] transition-all duration-200'>View All</div>
                  </div>
                </div>

                <div className='rounded-xl w-[246px]'>
                  <img src={assets.profile2} className='rounded-xl' alt="" />
                  <div>
                    <p className='text-[12px] text-gray-400 mt-8'>Project #2</p>
                    <p className='text-lg font-semibold mt-3'>RideSync</p>
                    <p className='text-sm text-gray-400 mt-2'>A cutting-edge platform for carpooling and ride management with seamless connectivity.</p>
                    <div className='border border-white rounded-xl py-2 px-3 text-center uppercase w-[122px] text-sm mt-10 cursor-pointer font-semibold hover:bg-white hover:text-[#1d2860] transition-all duration-200'>View All</div>
                  </div>
                </div>

                <div className='rounded-xl w-[246px]'>
                  <img src={assets.profile3} className='rounded-xl' alt="" />
                  <div>
                    <p className='text-[12px] text-gray-400 mt-8'>Project #3</p>
                    <p className='text-lg font-semibold mt-3'>AutoHarmony</p>
                    <p className='text-sm text-gray-400 mt-2'>A minimalist solution designed to harmonize diverse driving styles for effortless journeys.</p>
                    <div className='border border-white rounded-xl py-2 px-3 text-center uppercase w-[122px] text-sm mt-10 cursor-pointer font-semibold hover:bg-white hover:text-[#1d2860] transition-all duration-200'>View All</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    

        <Footer />
      </div>
    </div>
  )
}

export default Profile