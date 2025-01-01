import React from 'react'

const Toggle = ({text, justify, bgColor}) => {
  const handleToggle = (e) => {
    const element = e.currentTarget;
    if(element.classList.contains('justify-end')) {
        element.classList.remove('justify-end');
        element.classList.remove('bg-[#0275ff]');
        element.classList.add('justify-start');
        element.classList.add('bg-gray-800');
    }
    else {
        element.classList.remove('justify-start');
        element.classList.remove('bg-gray-800');
        element.classList.add('justify-end');
        element.classList.add('bg-[#0275ff]');
    }
  } 

  return (
    <div className='flex items-center pb-[14px] mt-3'>
        <div className={`w-[40px] h-[20px] rounded-2xl flex ${justify} p-0.5 ${bgColor} cursor-pointer`} onClick={handleToggle}>
            <div className='rounded-full bg-white w-4 h-4'></div>
        </div>
        <div className='text-xs text-gray-400 w-[160px] ml-3'>{text}</div>
    </div>
  )
}

export default Toggle