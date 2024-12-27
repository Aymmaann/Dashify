import React from 'react'
import assets from "../assets/assets.js"

const BillingInfoComponent = ({name, companyName, email, vat}) => {
  return (
    <div className='flex justify-between w-full'>
        <div>
            <p className="font-semibold text-sm">{name}</p>
            <div className="text-xs text-gray-400 mt-3 leading-6 tracking-wide">
            <p>Company Name: {companyName}</p>
            <p>Email Address: {email}</p>
            <p>VAT Number: {vat}</p>
            </div>
        </div>
        <div className="flex items-start gap-5 pt-1">
            <div className="flex items-center gap-2 text-red-700 uppercase text-xs font-semibold">
            <assets.FaTrash className="text-[16px]" />
            <p>Delete</p>
            </div>

            <div className="flex items-center gap-2 gray-red-400 uppercase text-xs font-semibold">
            <assets.MdModeEdit className="text-[16px]" />
            <p>Edit</p>
            </div>
        </div>
    </div>
  )
}

export default BillingInfoComponent;