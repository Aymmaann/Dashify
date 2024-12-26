import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center mt-4 py-4'>
        <div className='text-sm'>@2024, Made with ❤️ by Ayman</div>
        <ul className='flex gap-12 text-sm pr-1'>
            <li>Marketplace</li>
            <li>Blog</li>
            <li>License</li>
        </ul>
    </div>
  )
}

export default Footer