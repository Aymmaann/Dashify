import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import assets from "../assets/assets.js"

const Billing = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='p-6 pb-0 flex-grow'>
        <Navbar />

        <div className='py-6'>
          {/* Top Grid */}
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
              <div className="flex justify-between mb-7">
                <p className="font-semibold">Invoices</p>
                <div className="font-semibold uppercase bg-[#0275ff] py-2 px-6 rounded-lg text-xs">View All</div>
              </div>

              <div className="flex justify-between items-center mb-8 pt-5">
                <div>
                  <p className="font-medium text-xs">July 08, 2024</p>
                  <p className="text-gray-400 text-xs mt-1">#MS-415646</p>
                </div>
                <div className="flex items-center gap-8">
                  <p className="text-gray-400 text-xs">$180</p>
                  <div className="flex items-center gap-1 uppercase">
                    <assets.IoDocumentText />
                    <p className="text-gray-400 text-xs">pdf</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="font-medium text-xs">February 10, 2024</p>
                  <p className="text-gray-400 text-xs mt-1">#RV-126749</p>
                </div>
                <div className="flex items-center gap-8">
                  <p className="text-gray-400 text-xs">$250</p>
                  <div className="flex items-center gap-1 uppercase">
                    <assets.IoDocumentText />
                    <p className="text-gray-400 text-xs">pdf</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="font-medium text-xs">May 05, 2023</p>
                  <p className="text-gray-400 text-xs mt-1">#QW-103578</p>
                </div>
                <div className="flex items-center gap-8">
                  <p className="text-gray-400 text-xs">$120</p>
                  <div className="flex items-center gap-1 uppercase">
                    <assets.IoDocumentText />
                    <p className="text-gray-400 text-xs">pdf</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="font-medium text-xs">April 25, 2023</p>
                  <p className="text-gray-400 text-xs mt-1">#MS-415646</p>
                </div>
                <div className="flex items-center gap-8">
                  <p className="text-gray-400 text-xs">$180</p>
                  <div className="flex items-center gap-1 uppercase">
                    <assets.IoDocumentText />
                    <p className="text-gray-400 text-xs">pdf</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-xs">March 01, 2023</p>
                  <p className="text-gray-400 text-xs mt-1">#AR-803481</p>
                </div>
                <div className="flex items-center gap-8">
                  <p className="text-gray-400 text-xs">$300</p>
                  <div className="flex items-center gap-1 uppercase">
                    <assets.IoDocumentText />
                    <p className="text-gray-400 text-xs">pdf</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[30px] rounded-xl bg-gradient-to-br from-[#0a0c26] to-[#151c40] col-span-2 h-[185px]">
              <div className="flex justify-between mb-7 items-center">
                <p className="text-lg font-semibold">Payment Method</p>
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

          {/* Bottom Side */}
          <div className="h-[627px] grid grid-cols-10 gap-5 mt-6">
            <div className="p-[22px] rounded-xl bg-gradient-to-br from-[#0a0c26] to-[#151c40] col-span-6">
              <p className="text-lg font-semibold mt-2">Billing Information</p>

              <div className="w-full rounded-xl bg-[url('./assets/images/billing-background-balance.png')] bg-cover mt-10 mb-7 h-[147px] p-6 flex justify-between">
                <div>
                  <p className="font-semibold text-sm">Oliver Liam</p>
                  <div className="text-xs text-gray-400 mt-3 leading-6 tracking-wide">
                    <p>Company Name: Viking Tech</p>
                    <p>Email Address: oliver@gmail.com</p>
                    <p>VAT Number: FRB1234567</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 pt-1">
                  <div className="flex items-center gap-2 text-red-700 uppercase text-xs font-semibold">
                    <assets.FaTrash className="text-[16px]" />
                    <p>Delete</p>
                  </div>

                  <div className="flex items-center gap-2 gray-red-400 uppercase text-xs font-semibold">
                    <assets.MdModeEdit className="text-[16px]" />
                    <p>Edit</p>
                  </div>
                </div>
              </div>

              <div className="w-full rounded-xl bg-[url('./assets/images/billing-background-balance.png')] bg-cover mt-5 mb-7 h-[147px] p-6 flex justify-between">
                <div>
                  <p className="font-semibold text-sm">Lucas Harper</p>
                  <div className="text-xs text-gray-400 mt-3 leading-6 tracking-wide">
                    <p>Company Name: Stone Tech Zone</p>
                    <p>Email Address: lucas@stone-tech.com</p>
                    <p>VAT Number: FRB1234576</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 pt-1">
                  <div className="flex items-center gap-2 text-red-700 uppercase text-xs font-semibold">
                    <assets.FaTrash className="text-[16px]" />
                    <p>Delete</p>
                  </div>
                  <div className="flex items-center gap-2 gray-red-400 uppercase text-xs font-semibold">
                    <assets.MdModeEdit className="text-[16px]" />
                    <p>Edit</p>
                  </div>
                </div>
              </div>

              <div className="w-full rounded-xl bg-[url('./assets/images/billing-background-balance.png')] bg-cover mt-5 h-[147px] p-6 flex justify-between">
                <div>
                  <p className="font-semibold text-sm">Ethan James</p>
                  <div className="text-xs text-gray-400 mt-3 leading-6 tracking-wide">
                    <p>Company Name: Fiber Notion</p>
                    <p>Email Address: ethan@fiber.com</p>
                    <p>VAT Number: FRB1234657</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 pt-1">
                  <div className="flex items-center gap-2 text-red-700 uppercase text-xs font-semibold">
                    <assets.FaTrash className="text-[16px]" />
                    <p>Delete</p>
                  </div>
                  <div className="flex items-center gap-2 gray-red-400 uppercase text-xs font-semibold">
                    <assets.MdModeEdit className="text-[16px]" />
                    <p>Edit</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="p-[22px] rounded-xl bg-gradient-to-br from-[#0a0c26] to-[#151c40] col-span-4">
              <div className="flex items-center justify-between mb-8">
                <p className="text-lg font-semibold mt-2">Your Transactions</p>
                <div className="flex items-center gap-2 text-gray-300 mt-2">
                  <assets.HiCalendarDateRange className="text-[18px]" />
                  <p className="text-sm">23-30 March, 2024</p>
                </div>
              </div>

              <p className="text-xs text-gray-400 uppercase mb-4 mt-10">Newest</p>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-5">
                  <div className="border border-red-600 rounded-full flex items-center justify-center w-[35px] h-[35px]">
                    <assets.FiArrowDown className="text-[20px] text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Netflix</p>
                    <p className="text-gray-400 text-xs font-semibold mt-1">27 March 2020, 12:30 PM</p>
                  </div>
                </div>
                <div className="text-red-600 text-sm font-semibold">-$2,500</div>
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-5">
                  <div className="border border-green-500 rounded-full flex items-center justify-center w-[35px] h-[35px]">
                    <assets.FiArrowUp className="text-[20px] text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Apple</p>
                    <p className="text-gray-400 text-xs font-semibold mt-1">27 March 2020, 04:30 AM</p>
                  </div>
                </div>
                <div className="text-green-500 text-sm font-semibold">+$2,000</div>
              </div>

              <p className="text-xs text-gray-400 uppercase mb-4 font-semibold mt-12">Yesterday</p>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-5">
                  <div className="border border-green-500 rounded-full flex items-center justify-center w-[35px] h-[35px]">
                    <assets.FiArrowUp className="text-[20px] text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Stripe</p>
                    <p className="text-gray-400 text-xs font-semibold mt-1">26 March 2020, 13:45 PM</p>
                  </div>
                </div>
                <div className="text-green-500 text-sm font-semibold">+$750</div>
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-5">
                  <div className="border border-green-500 rounded-full flex items-center justify-center w-[35px] h-[35px]">
                    <assets.FiArrowUp className="text-[20px] text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">HubSpot</p>
                    <p className="text-gray-400 text-xs font-semibold mt-1">26 March 2020, 12:30 PM</p>
                  </div>
                </div>
                <div className="text-green-500 text-sm font-semibold">+$1,000</div>
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-5">
                  <div className="border border-green-500 rounded-full flex items-center justify-center w-[35px] h-[35px]">
                    <assets.FiArrowUp className="text-[20px] text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">HubSpot</p>
                    <p className="text-gray-400 text-xs font-semibold mt-1">26 March 2020, 08:30 AM</p>
                  </div>
                </div>
                <div className="text-green-500 text-sm font-semibold">+$2,500</div>
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-5">
                  <div className="border border-gray-300 rounded-full flex items-center justify-center w-[35px] h-[35px]">
                    <assets.BsExclamationLg className="text-[16px] text-gray-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">WebFlow</p>
                    <p className="text-gray-400 text-xs font-semibold mt-1">26 March 2020, 05:00 AM</p>
                  </div>
                </div>
                <div className="text-gray-300 text-sm font-semibold">Pending</div>
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-5">
                  <div className="border border-gray-300 rounded-full flex items-center justify-center w-[35px] h-[35px]">
                    <assets.BsExclamationLg className="text-[16px] text-gray-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Stripe</p>
                    <p className="text-gray-400 text-xs font-semibold mt-1">26 March 2020, 01:20 AM</p>
                  </div>
                </div>
                <div className="text-gray-300 text-sm font-semibold">Pending</div>
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