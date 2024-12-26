import React from 'react'
import assets from "../assets/assets.js"

const ProjectsTable = () => {
  return (
    <table class="w-full text-left mt-6">
        <thead>
            <tr className='uppercase font-semibold text-gray-400 text-xs text-left'>
            <th class="pr-6 pt-3 pb-2.5">Project</th>
            <th class="px-4 py-2">Budget</th>
            <th class="px-4 py-2">Status</th>
            <th class="px-4 py-2">Completion</th>
            <th class="px-4 py-2">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr className='border-t border-slate-700'>
                <td className="py-5 flex items-center justify-start gap-2">
                    <img src={assets.logoXD} className='w-8' alt="" />
                    <p className='text-sm font-medium'>Chakra Vision UI Version</p>
                </td>
                <td class="px-4 py-3 text-white font-semibold text-sm">
                    $14,000
                </td>
                <td class="px-4 py-3 text-white font-semibold text-sm">
                    Working
                </td>
                <td className="py-5">
                    <p className='font-semibold text-sm'>60%</p>
                    <div className='w-32 bg-[#2d2e5f] rounded-lg h-[3px] mt-1 flex items-center'>
                        <div className='bg-[#0275ff] h-[6px] w-[60%] rounded-lg'></div>
                    </div>
                </td>
                <td class="px-4 py-3 text-gray-500 text-sm font-semibold pl-7">
                    <assets.HiDotsVertical className='text-[22px]' />
                </td>
            </tr>

            <tr className='border-t border-slate-700'>
                <td className="py-5 flex items-center justify-start gap-2">
                    <img src={assets.logoAtlassian} className='w-8' alt="" />
                    <p className='text-sm font-medium'>Add Progress Track</p>
                </td>
                <td class="px-4 py-3 text-white font-semibold text-sm">
                    $3,000
                </td>
                <td class="px-4 py-3 text-white font-semibold text-sm">
                    Done
                </td>
                <td className="py-5">
                    <p className='font-semibold text-sm'>100%</p>
                    <div className='w-32 bg-[#2d2e5f] rounded-lg h-[3px] mt-1 flex items-center'>
                        <div className='bg-[#0275ff] h-[6px] w-full rounded-lg'></div>
                    </div>
                </td>
                <td class="px-4 py-3 text-gray-500 text-sm font-semibold pl-7">
                    <assets.HiDotsVertical className='text-[22px]' />
                </td>
            </tr>

            <tr className='border-t border-slate-700'>
                <td className="py-5 flex items-center justify-start gap-2">
                    <img src={assets.logoSlack} className='w-8' alt="" />
                    <p className='text-sm font-medium'>Fix Platform Errors</p>
                </td>
                <td class="px-4 py-3 text-white font-semibold text-sm">
                    Not set
                </td>
                <td class="px-4 py-3 text-white font-semibold text-sm">
                    Cancelled
                </td>
                <td className="py-5">
                    <p className='font-semibold text-sm'>30%</p>
                    <div className='w-32 bg-[#2d2e5f] rounded-lg h-[3px] mt-1 flex items-center'>
                        <div className='bg-[#0275ff] h-[6px] w-[30%] rounded-lg'></div>
                    </div>
                </td>
                <td class="px-4 py-3 text-gray-500 text-sm font-semibold pl-7">
                    <assets.HiDotsVertical className='text-[22px]' />
                </td>
            </tr>

            <tr className='border-t border-slate-700'>
                <td className="py-5 flex items-center justify-start gap-2">
                    <img src={assets.logoSpotify} className='w-8' alt="" />
                    <p className='text-sm font-medium'>Launch our Mobile App</p>
                </td>
                <td class="px-4 py-3 text-white font-semibold text-sm">
                    $32,000
                </td>
                <td class="px-4 py-3 text-white font-semibold text-sm">
                    Cancelled
                </td>
                <td className="py-5">
                    <p className='font-semibold text-sm'>0%</p>
                    <div className='w-32 bg-[#2d2e5f] rounded-lg h-[3px] mt-1 flex items-center'>
                        <div className='bg-[#0275ff] h-[6px] w-0 rounded-lg'></div>
                    </div>
                </td>
                <td class="px-4 py-3 text-gray-500 text-sm font-semibold pl-7">
                    <assets.HiDotsVertical className='text-[22px]' />
                </td>
            </tr>

            <tr className='border-t border-slate-700'>
                <td className="pt-5 pb-2 flex items-center justify-start gap-2">
                    <img src={assets.logoJira} className='w-8' alt="" />
                    <p className='text-sm font-medium'>Add the New Pricing Page</p>
                </td>
                <td class="px-4 pt-3 text-white font-semibold text-sm">
                    $2,300
                </td>
                <td class="px-4 pt-3 text-white font-semibold text-sm">
                    Done
                </td>
                <td className="pt-5">
                    <p className='font-semibold text-sm'>100%</p>
                    <div className='w-32 bg-[#2d2e5f] rounded-lg h-[3px] mt-1 flex items-center'>
                        <div className='bg-[#0275ff] h-[6px] w-full rounded-lg'></div>
                    </div>
                </td>
                <td class="px-4 pt-3 text-gray-500 text-sm font-semibold pl-7">
                    <assets.HiDotsVertical className='text-[22px]' />
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default ProjectsTable