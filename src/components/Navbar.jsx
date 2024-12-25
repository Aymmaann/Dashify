import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import assets from "../assets/assets.js"

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
 
  const getActiveLocation = () => {
      if(location.pathname === '/') {
        return {name:'Dashboard', icon: assets.FaHome};
      }
      if(location.pathname === '/tables') {
        return {name:'Tables', icon: assets.PiGraphFill};
      }
      if(location.pathname === '/billing') {
        return {name:'Billing', icon: assets.FaCreditCard};
      }
      if(location.pathname === '/profile') {
        return {name:'Profile', icon: assets.IoPerson};
      }
  }

  const { name, icon: IconComponent } = getActiveLocation() || {};

  return (
    <div className={`z-50 px-4 py-3 flex justify-between items-center bg-[#0a0c26] bg-opacity-60 sticky top-4 rounded-2xl ${scrolled? 'border border-white' : ''}`}>
      <div>
        <div className='flex gap-2 items-center'>
          {IconComponent && <IconComponent />}
          <p>/</p>
          <p className='text-[14px]'>{name}</p>
        </div>
        <p className='font-semibold text-[16px mt-2]'>{name}</p>
      </div>

      <div className='flex gap-4'>
        <div className='flex bg-[#0f1535] items-center rounded-xl border border-[#718096]'>
            <assets.IoSearch className='text-[#718096] w-[40px]' />
            <input type="text" placeholder='Type here...' className='bg-[#0f1535] text-sm placeholder:text-[#718096] rounded-xl outline-none py-2 pr-3' />
        </div>

        <div className='flex gap-3 items-center'>
          <Link to='/signin' className='flex items-center gap-0.5'>
            <assets.IoPersonCircle className='w-[18px]'/>
            <p className='text-xs font-semibold'>Sign In</p>
          </Link>

          <assets.IoMdSettings className='w-[18px]'/>
          <assets.FaBell className='w-[18px]'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar