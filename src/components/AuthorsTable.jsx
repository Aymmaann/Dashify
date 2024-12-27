import React from 'react'
import assets from "../assets/assets.js"

const AuthorsTable = () => {
  return (
    <table className="w-full text-left mt-6">
        <thead>
            <tr className='uppercase font-semibold text-gray-400 text-xs text-left'>
            <th className="pr-6 pt-3 pb-2.5">Author</th>
            <th className="px-4 py-2">Function</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Employed</th>
            <th className="px-4 py-2">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr className='border-t border-slate-700'>
                <td className="pr-4 py-4 flex items-center gap-3">
                    <img src={assets.avatar4} className='w-8 rounded-lg' alt="" />
                    <div className='text-xs'>
                        <p className='text-white text-[13px] font-semibold'>Esthera Jackson</p>
                        <p className='text-gray-400'>esthera@gmail.com</p>
                    </div>
                </td>
                <td className="px-4 py-3 text-xs">
                    <p className='text-white text-[13px] font-semibold'>Manager</p>
                    <p className='text-gray-400'>Organization</p>
                </td>
                <td className="px-4 py-3 text-green-600">
                    <div className='px-2 py-1.5 rounded-md bg-green-500 text-white font-semibold text-xs w-[55px]'>
                    Online
                    </div>
                </td>
                <td className="px-4 py-3 text-sm font-semibold">23/04/24</td>
                <td className="px-4 py-3 text-gray-400 text-sm font-semibold">Edit</td>
            </tr>

            <tr className='border-t border-slate-700'>
                <td className="pr-4 py-4 flex items-center gap-3">
                    <img src={assets.avatar2} className='w-8 rounded-lg' alt="" />
                    <div className='text-xs'>
                        <p className='text-white text-[13px] font-semibold'>Alexa Liras</p>
                        <p className='text-gray-400'>alexa@gmail.com</p>
                    </div>
                </td>
                <td className="px-4 py-3 text-xs">
                    <p className='text-white text-[13px] font-semibold'>Programmer</p>
                    <p className='text-gray-400'>Developer</p>
                </td>
                <td className="px-4 py-3 text-green-600">
                    <div className='px-2 py-1.5 rounded-md border border-white text-white font-semibold text-xs w-[58px]'>
                        Offline
                    </div>
                </td>
                <td className="px-4 py-3 text-sm font-semibold">11/01/24</td>
                <td className="px-4 py-3 text-gray-400 text-sm font-semibold">Edit</td>
            </tr>

            <tr className='border-t border-slate-700'>
                <td className="pr-4 py-4 flex items-center gap-3">
                    <img src={assets.avatar3} className='w-8 rounded-lg' alt="" />
                    <div className='text-xs'>
                        <p className='text-white text-[13px] font-semibold'>Laurent Michael</p>
                        <p className='text-gray-400'>laurent@gmail.com</p>
                    </div>
                </td>
                <td className="px-4 py-3 text-xs">
                    <p className='text-white text-[13px] font-semibold'>Executive</p>
                    <p className='text-gray-400'>Projecs</p>
                </td>
                <td className="px-4 py-3 text-green-600">
                    <div className='px-2 py-1.5 rounded-md bg-green-500 text-white font-semibold text-xs w-[55px]'>
                    Online
                    </div>
                </td>
                <td className="px-4 py-3 text-sm font-semibold">19/09/23</td>
                <td className="px-4 py-3 text-gray-400 text-sm font-semibold">Edit</td>
            </tr>

            <tr className='border-t border-slate-700'>
                <td className="pr-4 py-4 flex items-center gap-3">
                    <img src={assets.avatar1} className='w-8 rounded-lg' alt="" />
                    <div className='text-xs'>
                        <p className='text-white text-[13px] font-semibold'>Freduardo Hill</p>
                        <p className='text-gray-400'>freduardo@gmail.com</p>
                    </div>
                </td>
                <td className="px-4 py-3 text-xs">
                    <p className='text-white text-[13px] font-semibold'>Programmer</p>
                    <p className='text-gray-400'>Developer</p>
                </td>
                <td className="px-4 py-3 text-green-600">
                    <div className='px-2 py-1.5 rounded-md bg-green-500 text-white font-semibold text-xs w-[55px]'>
                    Online
                    </div>
                </td>
                <td className="px-4 py-3 text-sm font-semibold">24/12/22</td>
                <td className="px-4 py-3 text-gray-400 text-sm font-semibold">Edit</td>
            </tr>

            <tr className='border-t border-slate-700'>
                <td className="pr-4 py-4 flex items-center gap-3">
                    <img src={assets.avatar5} className='w-8 rounded-lg' alt="" />
                    <div className='text-xs'>
                        <p className='text-white text-[13px] font-semibold'>Daniel Thomas</p>
                        <p className='text-gray-400'>daniel@gmail.com</p>
                    </div>
                </td>
                <td className="px-4 py-3 text-xs">
                    <p className='text-white text-[13px] font-semibold'>Manager</p>
                    <p className='text-gray-400'>Executive</p>
                </td>
                <td className="px-4 py-3 text-green-600">
                    <div className='px-2 py-1.5 rounded-md border border-white text-white font-semibold text-xs w-[58px]'>
                        Offline
                    </div>
                </td>
                <td className="px-4 py-3 text-sm font-semibold">04/10/22</td>
                <td className="px-4 py-3 text-gray-400 text-sm font-semibold">Edit</td>
            </tr>

            <tr className='border-t border-slate-700'>
                <td className="pr-4 pt-4 flex items-center gap-3">
                    <img src={assets.avatar6} className='w-8 rounded-lg' alt="" />
                    <div className='text-xs'>
                        <p className='text-white text-[13px] font-semibold'>Mark Wilson</p>
                        <p className='text-gray-400'>mark@gmail.com</p>
                    </div>
                </td>
                <td className="px-4 py-3 text-xs">
                    <p className='text-white text-[13px] font-semibold'>Programmer</p>
                    <p className='text-gray-400'>Developer</p>
                </td>
                <td className="px-4 py-3 text-green-600">
                    <div className='px-2 py-1.5 rounded-md border border-white text-white font-semibold text-xs w-[58px]'>
                        Offline
                    </div>
                </td>
                <td className="px-4 py-3 text-sm font-semibold">23/04/24</td>
                <td className="px-4 py-3 text-gray-400 text-sm font-semibold">Edit</td>
            </tr>
        </tbody>
    </table>
  )
}

export default AuthorsTable