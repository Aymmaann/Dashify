import React from 'react'

const Footer = ({flexDirection = 'flex'}) => {
  return (
    <div className={`${flexDirection} justify-between items-center mt-4 py-4`}>
        <div className={`text-sm ${flexDirection === 'flex-col'? 'text-center' : ''}`}>@2024, Made with ❤️ by Ayman</div>
        <ul className={`flex gap-12 text-sm pr-1 ${flexDirection === 'flex-col'? 'mt-5 justify-center' : ''}`}>
            <li>Marketplace</li>
            <li>Blog</li>
            <li>License</li>
        </ul>
    </div>
  )
}

export default Footer