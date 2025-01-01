import React from 'react'
import Toggle from '../components/Toggle.jsx'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import SignInNavbar from '../components/SignInNavbar.jsx'

const SignIn = () => {
  return (
    <div>
      <SignInNavbar />
      <div className='flex'>
        <div className="bg-[url('./assets/images/signInImage.png')] bg-cover w-[720px] h-screen text-center">
          <div className='text-2xl font-semibold tracking-[0.8rem] uppercase mt-[45%]'>Inspired by the future</div>
          <div className='font-bold text-5xl uppercase tracking-[0.6rem] mt-5'>Dashify</div>
        </div>

        <div className='flex-grow bg-gradient-to-br from-[#0e1139] to-[#010515]'>
          <div className='mt-[160px] w-[300px] mx-auto'>
            <p className='font-bold text-3xl mb-3'>Nice to see you!</p>
            <p className='mb-[35px] text-sm'>Enter your email and password to sign in</p>

            <form>
              <p className='ml-1 mb-2 text-sm'>Email</p>
              <input type="text" className='py-2 px-3 w-full rounded-xl border border-gray-400 bg-transparent placeholder:text-gray-400 outline-none' placeholder='mark@gmail.com' />
              <p className='ml-1 mb-2 mt-5 text-sm'>Password</p>
              <input type="password" className='py-2 px-3 w-full rounded-xl border border-gray-400 bg-transparent placeholder:text-gray-400 outline-none' placeholder='mark12345' />

              <div className='mt-7'>
                <Toggle text={'Remember me'} justify={'justify-end'} bgColor={'bg-[#0275ff]'} />
              </div>
              <button type='submit' className='w-full rounded-xl bg-[#0275ff] px-6 py-3 uppercase font-semibold text-sm mt-8 mb-2'>Sign In</button>
            </form>

            <p className='text-center text-sm text-gray-400 mt-6'>Don't have an account? <Link to='/signup' className='text-white font-semibold'> Sign Up</Link></p>
            <div className='mt-[60px]'>
              <Footer flexDirection={'flex-col'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn