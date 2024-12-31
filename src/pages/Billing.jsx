import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BillingInfoComponent from '../components/BillingInfoComponent'
import TransactionComponent from '../components/TransactionComponent'
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

                <div className='flex items-center justify-between'>
                  <p className="text-3xl font-bold mt-2">$25,215</p>
                  <img src={assets.graphBilling} alt="" />
                </div>
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
                <BillingInfoComponent name={'Oliver Liam'} companyName={'Viking Tech'} email={'oliver@gmail.com'} vat={'FRB1234567'} />
              </div>

              <div className="w-full rounded-xl bg-[url('./assets/images/billing-background-balance.png')] bg-cover mt-5 mb-7 h-[147px] p-6 flex justify-between">
                <BillingInfoComponent name={'Lucas Harper'} companyName={'Stone Tech Zone'} email={'lucas@stone-tech.com'} vat={'FRB1234576'} />
              </div>

              <div className="w-full rounded-xl bg-[url('./assets/images/billing-background-balance.png')] bg-cover mt-5 h-[147px] p-6 flex justify-between">
                <BillingInfoComponent name={'Ethan James'} companyName={'Fiber Notion'} email={'ethan@fiber.com'} vat={'FRB1234657'} />
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
              <TransactionComponent status={'loss'} company={'Netflix'} date={'27 March 2024'} time={'12:30 PM'} money={'$2,500'} />
              <TransactionComponent status={'profit'} company={'Apple'} date={'27 March 2024'} time={'04:30 PM'} money={'$2,000'} />

              <p className="text-xs text-gray-400 uppercase mb-4 font-semibold mt-12">Yesterday</p>
              <TransactionComponent status={'profit'} company={'Stripe'} date={'26 March 2023'} time={'13:45 PM'} money={'$750'} />
              <TransactionComponent status={'profit'} company={'HubSpot'} date={'26 March 2023'} time={'12:30 PM'} money={'$1,000'} />
              <TransactionComponent status={'profit'} company={'HubSpot'} date={'26 March 2023'} time={'08:30 AM'} money={'$2,500'} />
              <TransactionComponent status={'pending'} company={'WebFlow'} date={'26 March 2023'} time={'05:00 AM'} money={''} />
              <TransactionComponent status={'pending'} company={'Stripe'} date={'26 March 2023'} time={'01:20 AM'} money={''} />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Billing