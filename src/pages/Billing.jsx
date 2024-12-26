import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import assets from "../assets/assets.js"

const Billing = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='p-6 flex-grow h-[200vh]'>
        <Navbar />

        <div className='py-6'>
          <div className="grid grid-cols-3 w-full gap-5">
            <div className="p-[30px] rounded-xl bg-[url('./assets/images/billing-background-card.png')] bg-left bg-cover h-[261px]">
              <div className='flex items-center justify-between'>
                <p className="font-semibold">Dashify</p>
                <assets.BsSoundwave className="text-[27px]" />
              </div>

              <div>
                <p className="font-semibold text-xl tracking-wider mt-24" >7812 2139 0823 7916</p>
                <div className="flex items-center mt-4 gap-5">
                  <div>
                    <p className="text-[10px] font-semibold text-gray-300 uppercase">Valid thru</p>
                    <p className="text-sm font-semibold">05/24</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-300 uppercase">CVV</p>
                    <p className="text-sm font-semibold">09X</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[30px] rounded-xl bg-gradient-to-br from-[#0a0c26] to-[#151c40] w-[356px] h-[261px]">
              <div className=" bg-cover rounded-xl p-5 bg-[url('./assets/images/billing-background-balance.png')] bg-right">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Credit Balance</p>
                  <assets.BsThreeDots className="text-[22px]" />
                </div>

                <p className="text-3xl font-bold mt-2">$25,215</p>
              </div>

              <div>
                <p className="text-[10px] font text-gray-400 uppercase mt-8">Newest</p>
                <div className="mt-2 font-semibold flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#1d2349] w-[42px] h-[42px] flex justify-center items-center">
                      <assets.FaMoneyBills className="text-[20px] text-green-500" />
                    </div>
                    <div className="text-sm">
                      <p>Bill & Taxes</p>
                      <p className="text-gray-400">Today, 16:36</p>
                    </div>
                  </div>
                  <div className="text-sm">-$154.50</div>
                </div>
              </div>
            </div>

            <div className="p-[30px] rounded-xl bg-gradient-to-br from-[#0a0c26] to-[#151c40] row-span-2">
              <div></div>
            </div>

            <div className="p-[30px] rounded-xl bg-gradient-to-br from-[#0a0c26] to-[#151c40] col-span-2 h-[185px]">
              <div className="flex justify-between mb-7">
                <p className="text-xl font-semibold">Payment Method</p>
                <div className="font-semibold uppercase bg-[#0275ff] py-3 px-6 rounded-lg text-xs">Add new card</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="h-[59px] rounded-xl border border-gray-400 px-5 flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img src={assets.masterCard} className="w-[25px]" alt="" />
                    <p className="font-semibold text-sm">7812 2139 0823 XXXX</p>
                  </div>
                  <assets.MdModeEdit className="text-[18px]" />
                </div>
                
                <div className="h-[59px] rounded-xl border border-gray-400 px-5 flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img src={assets.visa} className="w-[30px]" alt="" />
                    <p className="font-semibold text-sm">7812 2139 0823 XXXX</p>
                  </div>
                  <assets.MdModeEdit className="text-[18px]" />
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

export default Billing