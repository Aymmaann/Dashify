import React, { useState } from 'react'
import simpleLogo from '../assets/images/simple-nobg-logo.png'
import { Link, useLocation } from 'react-router-dom';
import assets from "../assets/assets.js"

const Sidebar = () => {
  const location = useLocation();
 
  const getActiveLocation = () => {
      if(location.pathname === '/') return 'dashboard';
      if(location.pathname === '/tables') return 'tables';
      if(location.pathname === '/billing') return 'billing';
      if(location.pathname === '/profile') return 'profile';
      if(location.pathname === '/signin') return 'signin';
      if(location.pathname === '/signup') return 'signup';
  }

  const [active, setActive] = useState(getActiveLocation);

  return (
    <div className='hidden lg:block sticky top-4 overflow-y-auto w-64 rounded-2xl h-[707px] bg-[#0a0c26] bg-opacity-60 m-4'>
        <div className='p-4'>
          <div className='flex items-center justify-center gap-1'>
            <img src={simpleLogo} className='w-8' alt="" />
            <h1 className='uppercase tracking-widest font-semibold'>Dashify</h1>
          </div>

          <hr className="my-2 h-[1px] bg-gradient-to-r from-[#1c1e39] via-[#343850] to-[#1c1e39] border-0" />

          <div className='mt-4'>
            <Link to='/' onClick={() => setActive('dashboard')} className={`flex items-center gap-3 p-2.5 rounded-2xl ${active === 'dashboard'? 'bg-[#1a1f37]' : 'bg-transparent'}`}>
              <div className={`p-2 rounded-xl ${active === 'dashboard'? 'bg-[#0275ff]' : 'bg-[#1a1f37]'}`}>
                <assets.FaHome className={`${active === 'dashboard'? 'text-white' : 'text-[#0275ff]'}`} />
              </div>
              <p className='text-sm font-semibold'>Dashboard</p>
            </Link>

            <Link to='/tables' onClick={() => setActive('tables')} className={`flex items-center gap-3 p-2.5 rounded-2xl ${active === 'tables'? 'bg-[#1a1f37]' : 'bg-transparent'}`}>
              <div className={`p-2 rounded-xl ${active === 'tables'? 'bg-[#0275ff]' : 'bg-[#1a1f37]'}`}>
                <assets.PiGraphFill className={`${active === 'tables'? 'text-white' : 'text-[#0275ff]'}`} />
              </div>
              <p className='text-sm font-semibold'>Tables</p>
            </Link>

            <Link to='/billing' onClick={() => setActive('billing')} className={`flex items-center gap-3 p-2.5 rounded-2xl ${active === 'billing'? 'bg-[#1a1f37]' : 'bg-transparent'}`}>
              <div className={`p-2 rounded-xl ${active === 'billing'? 'bg-[#0275ff]' : 'bg-[#1a1f37]'}`}>
                <assets.FaCreditCard className={`${active === 'billing'? 'text-white' : 'text-[#0275ff]'}`}/>
              </div>
              <p className='text-sm font-semibold'>Billing</p>
            </Link>
          </div>

          <div>
            <p className='uppercase font-semibold text-xs mt-6 mb-2 ml-2 pl-2'>Account Pages</p>
            <Link to='/profile' onClick={() => setActive('profile')} className={`flex items-center gap-3 p-2.5 rounded-2xl ${active === 'profile'? 'bg-[#1a1f37]' : 'bg-transparent'}`}>
              <div className={`p-2 rounded-xl ${active === 'profile'? 'bg-[#0275ff]' : 'bg-[#1a1f37]'}`}>
                <assets.IoPerson className={`${active === 'profile'? 'text-white' : 'text-[#0275ff]'}`}/>
              </div>
              <p className='text-sm font-semibold'>Profile</p>
            </Link>

            <Link to='/signin' onClick={() => setActive('signin')} className={`flex items-center gap-3 p-2.5 rounded-2xl ${active === 'signin'? 'bg-[#1a1f37]' : 'bg-transparent'}`}>
              <div className={`p-2 rounded-xl ${active === 'signin'? 'bg-[#0275ff]' : 'bg-[#1a1f37]'}`}>
                <assets.MdContactPage className={`${active === 'signin'? 'text-white' : 'text-[#0275ff]'}`}/>
              </div>
              <p className='text-sm font-semibold'>Sign In</p>
            </Link>

            <Link to='/signup' onClick={() => setActive('signup')} className={`flex items-center gap-3 p-2.5 rounded-2xl ${active === 'signup'? 'bg-[#1a1f37]' : 'bg-transparent'}`}>
              <div className={`p-2 rounded-xl ${active === 'signup'? 'bg-[#0275ff]' : 'bg-[#1a1f37]'}`}>
                <assets.IoIosRocket className={`${active === 'signup'? 'text-white' : 'text-[#0275ff]'}`}/>
              </div>
              <p className='text-sm font-semibold'>Sign Up</p>
            </Link>
          </div>

          <div className="w-[218px] h-[166px] bg-[url('./assets/images/sidenav/sidenav-card-background.png')] bg-cover rounded-2xl mt-8 p-4">
            <div className='bg-white rounded-xl p-2 w-8'>
                <assets.FaStar className='text-[#0275ff]' />
            </div>

            <p className='font-semibold pt-4'>Need Help?</p>
            <p className='text-xs pb-3'>Please check our docs</p>

            <button className='bg-black uppercase bg-opacity-60 font-semibold py-2 px-5 rounded-xl text-xs w-full transition-all duration-200 hover:scale-105'>Documentation</button>
          </div>

          <button className='bg-custom-button-gradient text-xs w-full py-3 px-6 rounded-xl font-semibold mt-5 transition-all duration-200 hover:scale-105'>Upgrade to PRO</button>
        </div>
    </div> 
  )
}

export default Sidebar