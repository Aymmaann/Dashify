import React, { useEffect, useState } from 'react';
import assets from "../assets/assets.js";

const TransactionComponent = ({status, company, date, time, money}) => {
  const [color, setColor] = useState('');
  const [border, setBorder] = useState('')
  const [symbol, setSymbol] = useState('')
  const [isPending, setIsPending] = useState('');

  const setStyle = () => {
    switch(status) {
        case 'loss':
            setColor('text-red-600');
            setBorder('border-red-600');
            setSymbol('-')
            setIsPending('')
            break;
        case 'profit':
            setColor('text-green-500');
            setBorder('border-green-500');
            setSymbol('+');
            setIsPending('')
            break;
        case 'pending':
            setColor('text-gray-300');
            setBorder('border-gray-300');
            setSymbol('');
            setIsPending('Pending')
            break;
        default:
            setColor('');
            setBorder('');
            setSymbol('');
            setIsPending('');
            break;
    }
  }

  const getIcon = () => {
    switch (status) {
      case "loss":
        return <assets.FiArrowDown className="text-red-600 text-[20px]" />;
      case "profit":
        return <assets.FiArrowUp className="text-green-500 text-[20px]" />;
      case "pending":
        return <assets.BsExclamationLg className="text-gray-400 text-[20px]" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    setStyle()
  }, [status])

  return (
    <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-5">
            <div className={`border ${border} rounded-full flex items-center justify-center w-[35px] h-[35px]`}>
                {getIcon()}
            </div>
            <div>
            <p className="font-semibold text-sm">{company}</p>
            <p className="text-gray-400 text-xs font-semibold mt-1">{date}, {time}</p>
            </div>
        </div>
        <div className={`${color} text-sm font-semibold`}>{isPending}{symbol}{money}</div>
    </div>
  )
}

export default TransactionComponent