import React from 'react'
import Toggle from '../components/Toggle.jsx'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'

const SignUp = () => {
  return (
    <div>
      <div className='flex'>
        <div className="bg-[url('./assets/images/signUpImage.png')] bg-cover w-[720px] h-screen text-center">
          <div className='text-2xl font-semibold tracking-[0.8rem] uppercase mt-[45%]'>Inspired by the future</div>
          <div className='font-bold text-5xl uppercase tracking-[0.6rem] mt-5'>Dashify</div>
        </div>

        <div className='flex-grow bg-gradient-to-br from-[#0e1139] to-[#010515]'>
          <div className='mt-[60px] w-[400px] mx-auto'>
            <div className='w-full rounded-xl border border-gray-400 px-[40px] py-[25px]'>
              <p className='text-center font-semibold'>Register with</p>

              <div className='flex items-center justify-between px-7 mt-6'>
                <div className='rounded-lg w-[64px] h-[64px] border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-[#6715bc] transition-all duration-200'>
                  <assets.FaFacebook className='text-[25px]' />
                </div>
                <div className='rounded-lg w-[64px] h-[64px] border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-[#6715bc] transition-all duration-200'>
                  <assets.FaInstagram className='text-[25px]' />
                </div>
                <div className='rounded-lg w-[64px] h-[64px] border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-[#6715bc] transition-all duration-200'>
                  <assets.FaApple className='text-[25px]' />
                </div>
              </div>

              <p className='text-center text-gray-400 font-semibold text-lg mt-[25px] mb-[14px]'>or</p>

              <form className='mt-4'>
                <p className='ml-1 mb-2 text-sm'>Name</p>
                <input type="text" className='py-2 px-3 w-full rounded-xl border border-gray-400 bg-transparent placeholder:text-gray-400 outline-none' placeholder='Mark Johnson' />
                <p className='ml-1 mb-2 mt-5 text-sm'>Email</p>
                <input type="text" className='py-2 px-3 w-full rounded-xl border border-gray-400 bg-transparent placeholder:text-gray-400 outline-none' placeholder='mark@gmail.com' />
                <p className='ml-1 mb-2 mt-5 text-sm'>Password</p>
                <input type="password" className='py-2 px-3 w-full rounded-xl border border-gray-400 bg-transparent placeholder:text-gray-400 outline-none' placeholder='mark12345' />

                <div className='mt-7'>
                  <Toggle text={'Remember me'} justify={'justify-end'} bgColor={'bg-[#0275ff]'} />
                </div>
                <button type='submit' className='w-full rounded-xl bg-[#0275ff] px-6 py-3 uppercase font-semibold text-sm mt-8 mb-2 hover:bg-[#6715bc] transition-all duration-200'>Sign Up</button>
              </form>

              <p className='text-center text-sm text-gray-400 mt-6'>Already have an account? <Link to='/signin' className='text-white font-semibold'> Sign In</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp