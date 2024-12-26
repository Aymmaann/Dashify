import React from "react";
import assets from "../assets/assets.js"

const DashboardTable = () => {
    return(
        <table className="min-w-full">
            <thead>
            <tr className='uppercase font-semibold text-gray-400 text-xs text-left'>
                <th className="py-2 px-2 text-left min-w-[263px]">Companies</th>
                <th className="py-2 px-1 text-left min-w-[100px]">Members</th>
                <th className="py-2 px-1 text-left min-w-[110px]">Budget</th>
                <th className="py-2 text-left w-[170px]">Completion</th>
            </tr>
            </thead>
            <tbody>
            <tr className="border-t border-slate-700">
                <td className="py-5 flex items-center justify-start gap-2">
                    <img src={assets.logoXD} className='w-8' alt="" />
                    <p className='text-sm font-medium'>Chakra Vision UI Version</p>
                </td>
                <td className="py-5 relative">
                    <img src={assets.avatar1} className='absolute z-1 w-5 rounded-full border-[1px] -translate-y-1/2' alt="" />
                    <img src={assets.avatar2} className='absolute z-2 w-5 rounded-full border-[1px] -translate-y-1/2 left-[12px]' alt="" />
                    <img src={assets.avatar3} className='absolute z-3 w-5 rounded-full border-[1px] -translate-y-1/2 left-[24px]' alt="" />
                    <img src={assets.avatar4} className='absolute z-4 w-5 rounded-full border-[1px] -translate-y-1/2 left-[36px]' alt="" />
                </td>
                <td className="font-semibold py-5">$14,000</td>
                <td className="py-5">
                    <p className='font-semibold'>60%</p>
                    <div className='w-32 bg-[#2d2e5f] rounded-lg h-[3px] mt-1 flex items-center'>
                        <div className='bg-[#0275ff] h-[6px] w-[60%] rounded-lg'></div>
                    </div>
                </td>
            </tr>

            <tr className="border-t border-slate-700">
                <td className="py-5 flex items-center justify-start gap-2">
                <img src={assets.logoAtlassian} className='w-8' alt="" />
                <p className='text-sm font-medium'>Add Progress Track</p>
                </td>
                <td className="py-5 relative">
                <img src={assets.avatar2} className='absolute z-2 w-5 rounded-full border-[1px] -translate-y-1/2' alt="" />
                <img src={assets.avatar4} className='absolute z-4 w-5 rounded-full border-[1px] -translate-y-1/2 left-[12px]' alt="" />
                </td>
                <td className="font-semibold py-5">$3,000</td>
                <td className="py-5">
                <p className='font-semibold'>10%</p>
                <div className='w-32 bg-[#2d2e5f] rounded-lg h-[3px] mt-1 flex items-center'>
                    <div className='bg-[#0275ff] h-[6px] w-[10%] rounded-lg'></div>
                </div>
                </td>
            </tr>

            <tr className="border-t border-slate-700">
                <td className="py-5 flex items-center justify-start gap-2">
                <img src={assets.logoSlack} className='w-8' alt="" />
                <p className='text-sm font-medium'>Fix Platform Errors</p>
                </td>
                <td className="py-5 relative">
                <img src={assets.avatar1} className='absolute z-1 w-5 rounded-full border-[1px] -translate-y-1/2' alt="" />
                <img src={assets.avatar3} className='absolute z-3 w-5 rounded-full border-[1px] -translate-y-1/2 left-[12px]' alt="" />
                </td>
                <td className="font-semibold py-5">Not Set</td>
                <td className="py-5">
                <p className='font-semibold'>100%</p>
                <div className='w-32 bg-[#2d2e5f] rounded-lg h-[3px] mt-1 flex items-center'>
                    <div className='bg-[#0275ff] h-[6px] w-[100%] rounded-lg'></div>
                </div>
                </td>
            </tr>

            <tr className="border-t border-slate-700">
                <td className="py-5 flex items-center justify-start gap-2">
                <img src={assets.logoSpotify} className='w-8' alt="" />
                <p className='text-sm font-medium'>Launch our Mobile App</p>
                </td>
                <td className="py-5 relative">
                <img src={assets.avatar1} className='absolute z-1 w-5 rounded-full border-[1px] -translate-y-1/2' alt="" />
                <img src={assets.avatar2} className='absolute z-2 w-5 rounded-full border-[1px] -translate-y-1/2 left-[12px]' alt="" />
                <img src={assets.avatar3} className='absolute z-3 w-5 rounded-full border-[1px] -translate-y-1/2 left-[24px]' alt="" />
                <img src={assets.avatar4} className='absolute z-4 w-5 rounded-full border-[1px] -translate-y-1/2 left-[36px]' alt="" />
                </td>
                <td className="font-semibold py-5">$20,500</td>
                <td className="py-5">
                <p className='font-semibold'>100%</p>
                <div className='w-32 bg-[#2d2e5f] rounded-lg h-[3px] mt-1 flex items-center'>
                    <div className='bg-[#0275ff] h-[6px] w-[100%] rounded-lg'></div>
                </div>
                </td>
            </tr>

            <tr className="border-t border-slate-700">
                <td className="py-5 flex items-center justify-start gap-2">
                    <img src={assets.logoJira} className='w-8' alt="" />
                    <p className='text-sm font-medium'>Add the New Pricing Page</p>
                </td>
                <td className="py-5 relative">
                    <img src={assets.avatar4} className='absolute z-4 w-5 rounded-full border-[1px] -translate-y-1/2' alt="" />
                </td>
                <td className="font-semibold py-5">$500</td>
                <td className="py-5">
                    <p className='font-semibold'>25%</p>
                    <div className='w-32 bg-[#2d2e5f] rounded-lg h-[3px] mt-1 flex items-center'>
                        <div className='bg-[#0275ff] h-[6px] w-[25%] rounded-lg'></div>
                    </div>
                </td>
            </tr>

            <tr className="border-t border-slate-700">
                <td className="py-5 flex items-center justify-start gap-2">
                <img src={assets.logoInvision} className='w-8' alt="" />
                <p className='text-sm font-medium'>Redesign New Online Shop</p>
                </td>
                <td className="py-5 relative">
                <img src={assets.avatar1} className='absolute z-1 w-5 rounded-full border-[1px] -translate-y-1/2' alt="" />
                <img src={assets.avatar4} className='absolute z-4 w-5 rounded-full border-[1px] -translate-y-1/2 left-[12px]' alt="" />
                </td>
                <td className="font-semibold py-5">$2,000</td>
                <td className="py-5">
                <p className='font-semibold'>40%</p>
                <div className='w-32 bg-[#2d2e5f] rounded-lg h-[3px] mt-1 flex items-center'>
                    <div className='bg-[#0275ff] h-[6px] w-[40%] rounded-lg'></div>
                </div>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

export default DashboardTable;