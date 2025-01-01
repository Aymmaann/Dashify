import React from 'react'
import assets from "../assets/assets.js"
import { Link } from 'react-router-dom'

const SignInNavbar = () => {
  return (
    <div className='absolute z-50 rounded-xl flex items-center justify-between bg-[#0c1036] px-6 py-4 w-[1044px] top-4 left-1/2 -translate-x-1/2 bg-opacity-50 border border-gray-600 border-opacity-80 backdrop-blur-md'>
        <div className='tracking-[0.4rem] text-sm uppercase font-semibold'>Dashify</div>

        <div className='flex items-center'>
            <Link to='/' className='mx-2 p-2 flex items-center gap-1.5 outline-none'>
                <assets.BsPieChart className='text-[18px]' />
                <p className='text-sm font-medium'>Dashboard</p>
            </Link>
            <Link to='/profile' className='mx-2 p-2 flex items-center gap-1.5 outline-none'>
                <assets.IoPerson className='text-[18px]' />
                <p className='text-sm font-medium'>Profile</p>
            </Link>
            <Link to='/signup' className='mx-2 p-2 flex items-center gap-1.5 outline-none'>
                <assets.IoPersonCircle className='text-[21px]' />
                <p className='text-sm font-medium'>Sign Up</p>
            </Link>
            <Link to='/signin' className='mx-2 p-2 flex items-center gap-1.5 outline-none'>
                <assets.MdKey className='text-[18px]' />
                <p className='text-sm font-medium'>Sign In</p>
            </Link>
        </div>

        <div className='px-6 py-3 uppercase text-xs bg-[#0275ff] font-semibold rounded-lg'>buy now</div>
    </div>
  )
}

export default SignInNavbar