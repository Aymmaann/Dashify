import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import assets from "../assets/assets.js"
import LineChart from '../components/LineChart'
import CircularProgressBar from '../components/CircularProgressBar'
import BarChart from '../components/BarChart'
import DashboardTable from '../components/DashboardTable'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />

      <div className='p-6 flex-grow'>
        <Navbar />

        <div>
          {/* Stats */}
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

          {/* Intro and circular progress bars */}
          <div className='flex items-center justify-between mt-6 gap-5'>
            <div className="h-[340px] grow bg-[url('./assets/images/cardimgfree.png')] bg-cover bg-center px-[22px] leading-6 py-8 rounded-xl text-sm font-thin text-gray-300 flex-col">
                <div className='h-[90%]'>
                  <p className=''>Welcome back,</p>
                  <h1 className='text-3xl font-semibold mb-[18px] text-white mt-1'>Mark Johnson</h1>
                  <p>Glad to see you again!</p>
                  <p>Ask me anything.</p>
                </div>

                <div className='flex items-center gap-2 text-white font-medium'>
                  <p>Tap to record</p>
                  <assets.FaArrowRightLong className='mt-1'/>
                </div>
            </div>

            <div className='p-[22px] bg-gradient-to-br from-[#080d2d] to-[#1f2b6a] rounded-xl relative w-[276px] h-[340px]'>
              <p className='font-semibold text-lg'>Satisfaction Rate</p>
              <p className='text-gray-400 text-sm mt-2'>From all projects</p>
              <div className="flex justify-center mt-6">
                <CircularProgressBar
                  size={190}
                  strokeWidth={16}
                  percentage={80}
                  color="#0275ff"
                  textLines={[]}
                />
              </div>
              <div className='absolute bg-[#080d24] px-[22px] py-[18px] flex justify-between text-gray-400 text-xs rounded-xl bottom-6 mx-[11px] w-[200px]'>
                <p>0%</p>
                <div className='text-center'>
                  <p className='text-2xl font-semibold text-white'>95%</p>
                  <p>Based on likes</p>
                </div>
                <p>100%</p>
              </div>

              <div className='absolute bg-[#0275ff] p-3 rounded-full left-1/2 bottom-[140px] transform -translate-x-1/2'>
                <assets.FaFaceGrinBeam className='text-[28px]' />
              </div>
            </div>

            <div className='bg-gradient-to-br from-[#080d2d] to-[#1f2b6a] p-[22px] rounded-xl w-[340px] h-[340px]'>
              <div className='flex items-center justify-between'>
                <p className='font-semibold text-lg'>Sales Overview</p>
                <div className='p-[9px] rounded-xl bg-[#22234b]'>
                  <assets.BsThreeDots className='text-[18px] text-[#0275ff]' />
                </div>
              </div>
              
              <div className='flex items-center justify-between mt-8'>
                  <div className='flex-col justify-between h-full text-white'>
                    <div className='py-5 px-[22px] bg-[#070c26] rounded-xl'>
                      <p className='text-gray-400 text-sm mb-[5px]'>Invited</p>
                      <p className='font-semibold'>145</p>
                      <p className='font-semibold'>people</p>
                    </div>
                    <div className='py-5 px-[22px] rounded-xl bg-[#070c26] mt-5'>
                      <p className='text-gray-400 text-sm mb-[5px]'>Bonus</p>
                      <p className='font-semibold'>1,465</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <CircularProgressBar
                      size={160}
                      strokeWidth={16}
                      percentage={85}
                      color="#0cc495"
                      textLines={["Safety", "9.3", "Total Score"]}
                    />
                  </div>
              </div>
            </div>
          </div>

          {/* Graphs */}
          <div className='flex mt-6 gap-5'>
            <div className='bg-gradient-to-br from-[#080d2d] to-[#1f2b6a] p-[22px] rounded-xl'>
              <p className='font-semibold text-lg'>Sales Overview</p>
              <p className='text-gray-400 text-sm mt-1 mb-2'><span className='text-green-500 font-semibold'>+5% more</span> in 2021</p>
              <LineChart />
            </div>

            <div className='bg-gradient-to-br from-[#080d2d] to-[#1f2b6a] p-[22px] rounded-xl grow'>
              <div>
                <BarChart />
              </div>

              <div className='mt-6'>
                <p className='font-semibold text-lg'>Active Users</p>
                <p className='text-gray-400 text-sm mt-1 mb-10'><span className='text-green-500 font-semibold'>(+23)</span> than last week</p>
              </div>

              <div className='flex items-center justify-between gap'>
                <div>
                  <div className='flex items-center gap-1'>
                    <div className='rounded-lg bg-[#0275ff] p-1.5'>
                      <assets.IoWallet className='text-[14px]' />
                    </div>
                    <p className='text-sm text-gray-400'>Users</p>
                  </div>
                  <p className='text-large font-semibold mt-1.5'>32,284</p>
                  <div className='w-16 bg-[#2d2e5f] rounded-lg h-[3px] mt-2 flex items-center'>
                    <div className='bg-[#0275ff] h-[6px] w-[40px] rounded-lg'></div>
                  </div>
                </div>

                <div>
                  <div className='flex items-center gap-1'>
                    <div className='rounded-lg bg-[#0275ff] p-1.5'>
                      <assets.IoIosRocket className='text-[14px]' />
                    </div>
                    <p className='text-sm text-gray-400'>Clicks</p>
                  </div>
                  <p className='text-large font-semibold mt-1.5'>2.42M</p>
                  <div className='w-16 bg-[#2d2e5f] rounded-lg h-[3px] mt-2 flex items-center'>
                    <div className='bg-[#0275ff] h-[6px] w-[52px] rounded-lg'></div>
                  </div>
                </div>

                <div>
                  <div className='flex items-center gap-1'>
                    <div className='rounded-lg bg-[#0275ff] p-1.5'>
                      <assets.FaShoppingCart className='text-[14px]' />
                    </div>
                    <p className='text-sm text-gray-400'>Sales</p>
                  </div>
                  <p className='text-large font-semibold mt-1.5'>$2,400</p>
                  <div className='w-16 bg-[#2d2e5f] rounded-lg h-[3px] mt-2 flex items-center'>
                    <div className='bg-[#0275ff] h-[6px] w-[31px] rounded-lg'></div>
                  </div>
                </div>

                <div>
                  <div className='flex items-center gap-1'>
                    <div className='rounded-lg bg-[#0275ff] p-1.5'>
                      <assets.TiSpanner className='text-[14px]' />
                    </div>
                    <p className='text-sm text-gray-400'>Items</p>
                  </div>
                  <p className='text-large font-semibold mt-1.5'>320</p>
                  <div className='w-16 bg-[#2d2e5f] rounded-lg h-[3px] mt-2 flex items-center'>
                    <div className='bg-[#0275ff] h-[6px] w-[40px] rounded-lg'></div>
                  </div>
                </div>
              </div>

            </div>

            
          </div>

          {/* Projects and Orders Overview */}
          <div className='flex mt-6 gap-5 pb-6'>
            <div className='bg-gradient-to-br from-[#0a0c26] to-[#1d2860] p-[22px] rounded-xl '>
              <div className='flex justify-between items-center mb-8'>
                <div>
                  <p className='font-semibold text-lg'>Projects</p>
                  <div className='flex items-center gap-2 mt-2'>
                    <div className='bg-green-600 rounded-full p-[2px]'>
                      <assets.TiTick className='text-[16px] text-[#070b2b]' />
                    </div>
                    <p className='text-gray-400 text-sm'><span className='font-semibold'>30 done</span> this month</p>
                  </div>
                </div>

                <div className='transition-all duration-200 ease-in-out hover:bg-[#070b2b] p-2 rounded-full cursor-pointer'>
                  <assets.HiDotsVertical className='text-[#9ba8bc] text-[22px]' />
                </div>
              </div>

              <div className="overflow-x-auto">
                <DashboardTable />
              </div>
            </div>

            <div className='bg-gradient-to-br from-[#0a0c26] to-[#1d2860] rounded-xl grow min-w-[334px] flex-wrap'>
              <div className='mb-9 px-[22px] pt-[22px]'>
                <p className='font-semibold text-lg'>Orders Overview</p>
                <div className='flex items-center gap-1 mt-2'>
                  <div className='bg-green-600 rounded-full p-[2px]'>
                    <assets.TiTick className='text-[16px] text-[#070b2b]' />
                  </div>
                  <p className='text-gray-400 text-sm'><span className='font-semibold'>+30%</span> this month</p>
                </div>
              </div>

              <div>
                <div className='flex items-center gap-5 mb-7 px-[22px]'>
                  <assets.FaBell className='text-[#0275ff] text-[20px]' />
                  <div className='text-gray-400 text-sm font-semibold'>
                    <p className='text-white'>$2400, Design Changes</p>
                    <p>22 DEC 7:20 PM</p>
                  </div>
                </div>

                <div className='flex items-center gap-5 mb-7 px-[22px]'>
                  <assets.FaCss3Alt className='text-[#e31a1a] text-[20px]' />
                  <div className='text-gray-400 text-sm font-semibold'>
                    <p className='text-white'>New order #1832412</p>
                    <p>21 DEC 11:06 PM</p>
                  </div>
                </div>

                <div className='flex items-center gap-5 mb-7 px-[22px]'>
                  <assets.FaShoppingCart className='text-[#4399e1] text-[20px]' />
                  <div className='text-gray-400 text-sm font-semibold'>
                    <p className='text-white'>Server Payments for April</p>
                    <p>21 DEC 9:34 PM</p>
                  </div>
                </div>

                <div className='flex items-center gap-5 mb-7 px-[22px]'>
                  <assets.FaCreditCard className='text-[#ffb546] text-[20px]' />
                  <div className='text-gray-400 text-sm font-semibold'>
                    <p className='text-white'>New card added for order #4395133</p>
                    <p>20 DEC 2:20 PM</p>
                  </div>
                </div>

                <div className='flex items-center gap-5 mb-7 px-[22px]'>
                  <assets.FaDropbox className='text-[#9f7aea] text-[20px]' />
                  <div className='text-gray-400 text-sm font-semibold'>
                    <p className='text-white'>New card added for order #4395054</p>
                    <p>18 DEC 4:54 PM</p>
                  </div>
                </div>

                <div className='flex items-center gap-3 mb-7 px-[15px]'>
                  <img src={assets.logoXD} className='w-9' alt="" />
                  <div className='text-gray-400 text-sm font-semibold'>
                    <p className='text-white'>New order #4394891</p>
                    <p>17 DEC 1:34 PM</p>
                  </div>
                </div>

                <div className='flex items-center gap-5 mb-7 px-[22px]'>
                  <assets.MdContactPage className='text-[#9f7aea] text-[20px]' />
                  <div className='text-gray-400 text-sm font-semibold'>
                    <p className='text-white'>New card added for order #4395022</p>
                    <p>15 DEC 12:36 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Dashboard